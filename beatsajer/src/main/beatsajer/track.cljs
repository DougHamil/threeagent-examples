(ns beatsajer.track
  (:require [beatsajer.models :as models]
            [threeagent.alpha.core :as th]
            [beatsajer.music.audio :as audio]
            [beatsajer.state :refer [state]]
            [beatsajer.util.threejs :as threejs]
            [beatsajer.util.core :refer [log]]
            [beatsajer.util.math :refer [pi-over-4]]))

(defonce ^:dynamic *block-objects* (js/Map.))

(def window-time-range 5.0)
(def units-per-beat 4.0)
(def block-type-to-color {0 "red" 1 "blue" 2 "gray"})
(def block-direction-to-rotation {0 0
                                  1 (* 4 pi-over-4)
                                  2 (* 2 pi-over-4)
                                  3 (* 6 pi-over-4)
                                  4 pi-over-4
                                  5 (* 7 pi-over-4)
                                  6 (* 3 pi-over-4)
                                  7 (* 5 pi-over-4)
                                  8 (* 8 pi-over-4)})


;; Rendering
(defn- get-note-position [distance]
  (let [close-distance (* units-per-beat (/ window-time-range 2.0))
        ratio (- 1.0 (/ distance window-time-range))]
    (if (> 0.5 ratio)
      ;; Fly forward
      (let [ratio (/ (- 0.5 ratio) 0.5)]
        (- (- close-distance) (* ratio 100)))
      ;; Slow forward
      (let [ratio (/ (- ratio 0.5) 0.5)]
        (- (* ratio close-distance) close-distance)))))

(defn- get-block-model [index]
  (when-let [model ^js (models/checkout-model "block")]
    (let [material (.-material model)]
      (set! (.-blockIndex model) index)
      (set! (.-transparent material) true)
      (set! (.-opacity material) 1.0)
      model)))

(defn- get-bomb-model [index]
  (when-let [model ^js (models/checkout-model "bomb")]
    (let [material (.-material model)]
      (set! (.-blockIndex model) index)
      (set! (.-transparent material) true)
      (set! (.-opacity material) 1.0)
      model)))

(defn- on-block-added [block-index obj]
  (.set *block-objects* block-index obj))

(defn- on-block-removed [type block-index obj model]
  (.delete *block-objects* block-index)
  (models/return-model type model))

(defn- set-block-color [^js block-model color opacity]
  (let [material (.-material block-model)]
    (set! (.-color material) (threejs/color color))
    (set! (.-opacity material) opacity)))

(defn- block-model [index _type opacity is-selected]
  (let [highlight-model (models/checkout-model "block-highlight")
        model (if (= 3 _type)
                  (get-bomb-model index)
                  (get-block-model index))]
    (fn [index _type opacity is-selected]
      (let [new-color (block-type-to-color _type)]
        (set-block-color model new-color opacity)
        ^{:on-added (partial on-block-added index)
          :on-removed #(do
                         (on-block-removed (if (= 3 _type) "bomb" "block")
                                           index model %)
                         (models/return-model "block-highlight" highlight-model))}
        [:instance {:object model}
         (when is-selected
           [:instance {:object highlight-model}])]))))

(defn- block [beat-time is-selected {:keys [_type _cutDirection _lineIndex _lineLayer _time index]}]
    (let [new-color (block-type-to-color _type)
          z-rot (block-direction-to-rotation _cutDirection)
          y-rot (if (= 8 _cutDirection) Math/PI 0)
          scale 0.6
          time-delta (- _time beat-time)
          pos (get-note-position time-delta)
          opacity (if (pos? time-delta)
                    1.0
                    0.4)]
        [:object {:position [(- _lineIndex 1.5)
                             _lineLayer
                             pos]
                  :scale [scale scale scale]
                  :rotation [0 y-rot z-rot]}
         ^{:key _type}
         [block-model index _type opacity is-selected]]))

(defn- get-beat-time []
  (let [time (- @(th/cursor state [:beat-time])
                @(th/cursor state [:song :_shuffle]))]
    (when-not (js/isNaN time)
      time)))

(defn- get-beats-in-window [beat-time]
  (filter #(let [d (- (:_time %) beat-time)]
             (>= window-time-range (Math/abs d)))
          @(th/cursor state [:song :_notes])))

(defn- highlighted-block-ids []
  (set [@(th/cursor state [:pointed-at-block :block-index])
        @(th/cursor state [:selected-block-id])]))

(defn- blocks []
  [:object
      (let [beat-time (get-beat-time)
            highlighted-block-ids (highlighted-block-ids)
            beats (get-beats-in-window beat-time)]
        (when beat-time
          (for [b beats]
            (let [id (:index b)]
              ^{:key id}
              [block beat-time
               (and highlighted-block-ids
                    (highlighted-block-ids id))
               b]))))])

(defn- get-obstacles-in-window [beat-time]
  (filter #(let [d (- (:_time %) beat-time)]
             (>= window-time-range (Math/abs d)))
          @(th/cursor state [:song :_obstacles])))

(defn- obstacle [beat-time {:keys [_time _lineIndex _type _duration _width]}]
  (let [time-delta (- _time beat-time)
        height (case _type
                 0 3
                 1 1)
        depth (* _duration units-per-beat)
        x-pos (+ (- _lineIndex 2.0)
                 (/ _width 2.0))
        y-pos (case _type
                0 (/ height 2.0)
                1 (+ 1.5 (/ height 2.0)))
        z-pos (- (get-note-position time-delta)
                 (/ depth 2.0))]
    [:box {:dims [_width height depth]
           :material {:color "red"
                      :transparent true
                      :opacity 0.5}
           :position [x-pos y-pos z-pos]}]))

(defn- obstacles []
  [:object
   (let [beat-time (get-beat-time)
         obstacles (get-obstacles-in-window beat-time)]
     (when beat-time
       (for [o obstacles]
         [obstacle beat-time o])))])

(defn track []
  [:object {:position [0 0 0]}
   [blocks]
   [obstacles]])

(defn tick [delta-time])
