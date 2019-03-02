(ns beatsajer.text-3d
  (:require [threeagent.alpha.core :as th]
            [beatsajer.util.core :refer [log]]
            [beatsajer.state :refer [state]]))

(defonce ^:private pool-size 40)
(defonce ^:dynamic ^:private *digits* (js/Map.))

(defn- checkout-digit [key]
  (let [pool (.get *digits* key)]
    (when (and pool (pos? (.-length pool)))
      (.shift pool))))

(defn- return-digit [key geo]
  (let [pool (.get *digits* key)]
    (.push pool geo)))

(defn- digit [d]
  (if-let [mesh (checkout-digit d)]
    ^{:on-removed #(return-digit d mesh)}
    [:instance {:object mesh}]
    [:object]))

(defn number [n]
  [:object
   (for [[i d] (map-indexed vector (str n))]
     [:object {:position [(/ i 1.5) 0 0]}
      [digit d]])])

(defn- new-text-geometry [text cfg]
  (new js/THREE.TextGeometry text (clj->js cfg)))

(defn- new-mesh [geo material]
  (new js/THREE.Mesh geo material))

(defn- new-mesh-material []
  (new js/THREE.MeshPhongMaterial (clj->js {})))

(defn- on-font-loaded [font]
  (swap! state assoc :font font)
  ;; Build pool of digits
  (doseq [i (range 10)]
    (let [digit-pool (array)]
      (doseq [c (range pool-size)]
        (let [geo (new-text-geometry (str i) {:font font
                                              :height 0.01
                                               :size 0.8})
              material (new-mesh-material)
              mesh (new-mesh geo material)]
          (.push digit-pool mesh)))
      (.set *digits* (str i) digit-pool)))
  (doseq [sym ["-" "+"]]
    (let [pool (array)]
      (doseq [c (range pool-size)]
        (let [geo (new-text-geometry sym {:font font
                                          :height 0.01
                                          :size 0.8})
              material (new-mesh-material)
              mesh (new-mesh geo material)]
          (.push pool mesh)))
      (.set *digits* sym pool))))

(defn init []
  (let [loader (js/THREE.FontLoader.)]
    (.load loader "/fonts/helvetiker.json" on-font-loaded)))

