(ns beatsajer.editor.core
  (:require [beatsajer.state :refer [state]]
            [beatsajer.util.core :refer [$ log]]
            [beatsajer.util.math :as math]
            [beatsajer.util.threejs :as threejs]
            [beatsajer.editor.grid :as grid]
            [beatsajer.track :as track]
            [threeagent.alpha.core :as th]))

(defonce ^:private ^:dynamic *canvas-element* nil)
(defonce ^:private mouse-wheel-scale 0.01)
(defonce ^:private mouse-position (threejs/vec2 [0 0]))
(defonce ^:private mouse-raycaster (threejs/raycaster (threejs/vec3 [0 0 0]) (threejs/vec3 [0 0 0]) 0 1000))
(defonce ^:private angle-segment->cut-direction {0 5
                                                 1 3
                                                 2 7
                                                 3 1
                                                 4 6
                                                 5 2
                                                 6 4
                                                 7 0})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Render
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn render []
  [:object
   [grid/render]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn- get-current-beat-time []
  (let [beat-time (:beat-time @state)
        floored (Math/floor beat-time)
        normalized (- beat-time floored)
        quarters (* 4.0 normalized)]
    (+ floored (/ (Math/round quarters) 4))))

(defn- get-next-block-id []
  (inc (reduce max
               (map :index (get-in @state [:song :_notes])))))

(defn- get-block-by-id [id]
  (first (filter #(= id (:index %)) (get-in @state [:song :_notes]))))

(defn- beat-time->song-time [beat-time]
  (let [song-time (/ beat-time (:beats-per-second @state))]
    song-time))

(defn- step-beat! [num-beats]
  (let [beat-time (get-current-beat-time)
        audio (:audio @state)]
    (when (and beat-time audio)
      (let [new-beat-time (if (> 0 (+ beat-time num-beats))
                            0
                            (+ beat-time num-beats))
            new-song-time (beat-time->song-time new-beat-time)]
        (.seek audio new-song-time)
        new-beat-time))))

(defn- get-beat-at-grid-point [[x y] beat-time]
  (first
    (filter #(and (= x (:_lineIndex %))
                  (= y (:_lineLayer %))
                  (> 0.05 (Math/abs (- beat-time (:_time %)))))
            (get-in @state [:song :_notes]))))

(defn- pick-block [raycaster]
  (let [blocks (.from js/Array (.values track/*block-objects*))]
    (when-let [intersection (first (.intersectObjects raycaster blocks))]
      {:object (.-object intersection)
       :block-index ($ (.-object intersection) "block-index")})))

(defn- get-selected-beat []
  (if-let [pointed-at-block (:pointed-at-block @state)]
    (first (filter #(= (:block-index pointed-at-block)
                       (:index %))
                   (get-in @state [:song :_notes])))
    (when-let [grid-point (:pointed-at-grid-point @state)]
      (get-beat-at-grid-point grid-point (get-current-beat-time)))))

(defn- get-pointed-at-block []
  (when-let [pointed-at-block (:pointed-at-block @state)]
    (first (filter #(= (:block-index pointed-at-block)
                       (:index %))
                   (get-in @state [:song :_notes])))))

(defn- delete-pointed-at-block! []
  (when-let [pointed-at-block (:pointed-at-block @state)]
    (let [notes (get-in @state [:song :_notes])
          new-notes (remove #(= (:index %)
                                (:block-index pointed-at-block))
                            notes)]
      (swap! state assoc-in [:song :_notes] new-notes)
      (swap! state assoc :pointed-at-block nil))))

(defn- rotate-block! [b dir]
  (let [notes (get-in @state [:song :_notes])
        new-block (assoc b :_cutDirection dir)
        new-notes (sort-by :_time (conj (remove #(= b %) notes) new-block))]
    (swap! state assoc-in [:song :_notes] new-notes)))

(defn- insert-block! []
  (when-let [[_lineIndex _lineLayer] (:pointed-at-grid-point @state)]
    (let [notes (get-in @state [:song :_notes])
          beat-time (grid/get-current-grid-beat-time)
          new-beat {:_time beat-time
                    :_type 0
                    :_cutDirection 0
                    :index (get-next-block-id)
                    :_lineLayer _lineLayer
                    :_lineIndex _lineIndex}]
      (swap! state assoc-in [:song :_notes] (sort-by :_time (conj notes new-beat)))
      (swap! state assoc :selected-block-id (:index new-beat)))))

(defn- update-pointed-at! []
  (do
    (swap! state assoc :pointed-at-block nil)
    (swap! state assoc :pointed-at-beat nil)
    (swap! state assoc :pointed-at-grid-point nil))
  (if-let [picked-block (pick-block mouse-raycaster)]
    (do
      (swap! state assoc :pointed-at-beat (first (filter #(= (:index %) (:block-index picked-block))
                                                          (get-in @state [:song :_notes]))))
      (swap! state assoc :pointed-at-block picked-block))
    (if-let [grid-point (grid/pick-grid-point mouse-raycaster)]
      (swap! state assoc :pointed-at-grid-point grid-point))))

(defn- update-selected! []
  (when-let [selected-block-id (:selected-block-id @state)]
    (let [selected-block (get-block-by-id selected-block-id)
          ms (:mouse-start-position @state)
          mc (:mouse-position @state)
          d (math/vec2-sub mc ms)
          l (math/vec2-len d)
          a (mod (- (math/atan2 d) (/ 45.0 2.0)) 360.0)
          segment (.floor js/Math (/ a (/ 360.0 8.0)))
          cur-dir (if (> 0.05 l)
                    8
                    (angle-segment->cut-direction segment))]
      (swap! state assoc :mouse-angle a)
      (swap! state assoc :mouse-angle-segment segment)
      (when (not= cur-dir (:_cutDirection selected-block))
        (rotate-block! selected-block cur-dir)))))

(defn tick [delta-time]
  (update-pointed-at!)
  (update-selected!))

;;;;;;;;;;;;;;;;;;;;;;;;
;; Input
;;;;;;;;;;;;;;;;;;;;;;;;
(defn- on-left-mouse-button [btn-state]
  (if (= :down btn-state)
    (do
      (swap! state assoc :mouse-start-position (:mouse-position @state))
      (if-let [block (get-pointed-at-block)]
        ;; Select block
        (swap! state assoc :selected-block-id (:index block))
        ;; Insert block
        (insert-block!)))
    (swap! state assoc :selected-block-id nil)))

(defn- on-right-mouse-button [btn-state]
  (when (= :down btn-state)
    (when-let [beat (get-selected-beat)]
      ;; Change block type
      (let [notes (get-in @state [:song :_notes])
            new-type (mod (inc (:_type beat)) 4)
            new-type (if (= 2 new-type) 3 new-type)
            new-beat (assoc beat :_type new-type)
            new-notes (sort-by :_time (conj (remove #(= beat %) notes) new-beat))]
        (swap! state assoc-in [:song :_notes] new-notes)))))

(defn- on-mouse-wheel [evt]
  (.preventDefault evt)
  (let [scroll (* (.-deltaY evt) mouse-wheel-scale)
        delta (if (:control-down? @state)
                (* 4 scroll)
                scroll)
        beat-delta (/ (Math/round delta) 4)]
    (step-beat! beat-delta)))

(defn- on-key-up [evt]
  (case (.-key evt)
    "Delete" (delete-pointed-at-block!)
    "Control" (swap! state assoc :control-down? false)
    nil))

(defn- on-key-down [evt]
  (case (.-key evt)
    "Control" (swap! state assoc :control-down? true)
    nil))

(defn- on-mouse-down [evt]
  (case (.-button evt)
    0 (on-left-mouse-button :down)
    2 (on-right-mouse-button :down)
    4 (delete-pointed-at-block!)
    nil))

(defn- on-mouse-up [evt]
  (case (.-button evt)
    0 (on-left-mouse-button :up)
    2 (on-right-mouse-button :up)
    nil))

(defn- mouse-evt->screen-coords [evt]
  (let [rect (.getBoundingClientRect *canvas-element*)
        x (- (.-clientX evt) (.-left rect))
        y (- (.-clientY evt) (.-top rect))
        w (.-width rect)
        h (.-height rect)]
    [(- (* 2 (/ x w)) 1)
     (+ 1 (* 2 (- (/ y h))))]))

(defn- on-mouse-move [evt]
  (let [[x y] (mouse-evt->screen-coords evt)]
    (set! (.-x mouse-position) x)
    (set! (.-y mouse-position) y)
    (swap! state assoc :mouse-position [x y])
    (.setFromCamera mouse-raycaster mouse-position (:camera @state))))

(defn init []
  (set! *canvas-element* (.getElementById js/document "root"))
  (.addEventListener js/window "mousemove" on-mouse-move false)
  (doto (.getElementById js/document "root")
    (.addEventListener "wheel" on-mouse-wheel (clj->js {:passive false}))
    (.addEventListener "keyup" on-key-up false)
    (.addEventListener "keydown" on-key-down false)
    (.addEventListener "mousedown" on-mouse-down false)
    (.addEventListener "mouseup" on-mouse-up false)
    (.addEventListener "contextmenu" #(.preventDefault %))))
