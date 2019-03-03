(ns beatsajer.editor.grid
  (:require [beatsajer.state :refer [state]]
            [beatsajer.text-3d :as text-3d]
            [beatsajer.models :as models]
            [beatsajer.music.waveform :as waveform]
            [beatsajer.track :refer [units-per-beat]]
            [beatsajer.util.threejs :as threejs]
            [threeagent.alpha.core :as th]))

(def ^:private grid-thickness 0.02)
(def ^:private grid-depth 0.05)
(def ^:private grid-opacity 0.2)
(def ^:private grid-color 0xAABB00)
(def ^:private grid-highlight-opacity 0.4)
(def ^:private grid-highlight-color 0x11EE00)
(def ^:private tick-thickness 0.02)
(def ^:private ^:dynamic *grid-collision-obj* nil)

(defn- grid-spot-highlight [line-index line-layer]
  [:object {:position [(- line-index 1.5)
                       (dec line-layer)
                       0]
            :scale [0.6 0.6 0.6]}
   (when-let [model ^js (models/checkout-model "block")]
     (let [material (.-material model)]
       (set! (.-color material) (threejs/color 1 1 1))
       (set! (.-transparent material) true)
       (set! (.-opacity material) grid-highlight-opacity)
       ^{:key (.-uuid model)
         :on-removed #(models/return-model "block" model)}
       [:instance {:object model}]))])

(defn- grid [width height]
  [:object
   ^{:on-added #(do (set! *grid-collision-obj* %)
                    (set! (.-visible %) true))}
   [:plane {:dims [width height 1.0]
            :material {:opacity 0.0
                       :transparent true}
            :position [0 0 -0.5]}]
   (when @(th/cursor state [:show-grid?])
     [:object
      (for [i (range (dec height))]
        [:box {:scale [width grid-thickness grid-depth]
               :position [0 (inc (- i (/ height 2.0))) 0]
               :material {:transparent true
                          :color grid-color
                          :opacity grid-opacity}}])
      (for [i (range (dec width))]
        [:box {:scale [grid-thickness height grid-depth]
               :position [(inc (- i (/ width 2.0))) 0 0]
               :material {:transparent true
                          :color grid-color
                          :opacity grid-opacity}}])])])

(defn- major-tick [beat-num]
  [:object
   [:box {:scale [4.0 tick-thickness tick-thickness]
          :material {:color grid-color}
          :position [0 0 0]}]
   (when true
     [:object {:position [2 0 0]}
      (when (and beat-num (not (.isNaN js/window beat-num)))
        [text-3d/number beat-num])])])

(defn- minor-tick []
  [:box {:scale [3.0 tick-thickness tick-thickness]
         :material {:color 0x999999}
         :position [0 0 0]}])

(defn- beat-tick [beat-timer beat]
  (for [i (range 4)]
    (let [r (/ i 4)
          d (- beat-timer r)
          d (if (< 0 d) (- d 1) d)]
      [:object {:position [0 0 (* units-per-beat d)]}
       (if (= 0 i)
         (major-tick beat)
         (minor-tick))])))

(defn- get-major-beat-positions [beat-time]
  (let [cur-beat (Math/floor beat-time)]
    (map (fn [i]
           (let [i (- i 4)
                 p (* units-per-beat (+ (mod beat-time 1)
                                        i))]
             [(- cur-beat i) p]))
         (range 8))))

(defn- get-minor-beat-positions [beat-time]
    (mapcat
     (fn [i]
       (let [p (* units-per-beat (+ (mod beat-time 1)
                                    (- i 4)))]
         (map
          #(+ p (* % (/ units-per-beat 4)))
          (range 4))))
     (range 8)))

(defn- major-ticks [beat-time]
  (let [beat-positions (get-major-beat-positions beat-time)]
    [:object
     (for [[b p] beat-positions]
      [:object {:position [0 0 p]}
        ^{:key b}
        [major-tick b]])]))

(defn- minor-ticks [beat-time]
  (let [beat-positions (get-minor-beat-positions beat-time)]
    [:object
     (for [p beat-positions]
      [:object {:position [0 0 p]}
        [minor-tick]])]))

(defn- beat-ticks []
  (let [bps @(th/cursor state [:beats-per-second])
        shuffle @(th/cursor state [:song :_shuffle])
        beat-time (- @(th/cursor state [:beat-time])
                     @(th/cursor state [:song :_shuffle]))]
    [:object {:position [0 -1.4 0]}
     [minor-ticks beat-time shuffle]
     [major-ticks beat-time shuffle]]))

(defn- pointed-at-grid-point-highlight []
  [:object
   (when-let [[x y] @(th/cursor state [:pointed-at-grid-point])]
     [grid-spot-highlight x y])])

(defn- zero-marker []
  [:object
   (when @(th/cursor state [:show-grid?])
     [:box {:position [-2 -1.4 (- (* units-per-beat
                                     (mod @(th/cursor state [:song :_shuffle]) 1.0)))]
            :material {:color "green"}
            :scale [4.0 0.05 0.05]}])])

(defn render []
  ;; Render 4x3 grid
  [:object {:position [0 1.1 0]}
   [zero-marker]
   [beat-ticks]
   [grid 4 3]
   [waveform/render]
   [pointed-at-grid-point-highlight]])

(defn get-current-grid-beat-time []
  (let [beat-time (- (:beat-time @state)
                     (get-in @state [:song :_shuffle]))
        floored (Math/floor beat-time)
        normalized (- beat-time floored)
        quarters (* 4.0 normalized)]
    (+ floored (/ (Math/round quarters) 4))))

(defn pick-grid-point [raycaster]
  (when *grid-collision-obj*
    (when-let [intersection ^js (first ^js (.intersectObject raycaster *grid-collision-obj* true))]
      (let [point (.-uv intersection)
            x (.-x point)
            y (.-y point)]
        [(Math/floor (* 4 x))
         (Math/floor (* 3 y))]))))

