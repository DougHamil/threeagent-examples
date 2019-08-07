(ns golf.host
  (:require [cljs.js]))


(defn my-comp []
  [:sphere {:radius 10
            :position [0 1 -10]}])
(defn ball [radius]
  [:physics-body {:body {:shape "sphere"
                         :radius radius
                         :mass 60.0
                         :friction 0.05
                         :restitution 0.2
                         :rollingFriction 0.0}}
     ^{:on-added (fn [o]
                   (set! (.-castShadow o) true)
                   (set! (.-receiveShadow o) true))}
     [:sphere {:radius radius
               :width-segments 18
               :height-segments 18
               :material {:color 0xFF7722}}]])

(defn output []
  [:object {:position [-48 0 0]}
    [ball 5]])
