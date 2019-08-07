(ns golf.state
  (:require [threeagent.core :as th]))


(def default-code
 "(defn ball [radius]
  [:physics-body {:body {:shape \"sphere\"
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
  [:object {:position [0 50 -5]}
    [ball 5]])
")
(defonce state (th/atom {:code default-code}))

