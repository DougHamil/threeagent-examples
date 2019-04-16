(ns aoc.text-3d
  (:require [threeagent.alpha.core :as th]
            [aoc.state :refer [state]]
            ["three" :as three]
            [cljs.core.async :refer [chan put! >! <!]])
  (:require-macros [cljs.core.async :refer [go]]
                   [threeagent.alpha.macros :refer [defcomponent]]))


(defonce ^:private pool-size 40)
(defonce ^:dynamic ^:private *digits* (js/Map.))

(defn- checkout-digit! [key]
  (let [pool (.get *digits* key)]
    (when (and pool (pos? (.-length pool)))
      (.shift pool))))

(defn- return-digit! [key geo]
  (let [pool (.get *digits* key)]
    (.push pool geo)))

(defcomponent :number3d [{:keys [value]}]
  (let [digits (map-indexed vector (str value))
        digit-meshes (array)
        parent (three/Group.)]
    (doseq [[i d] digits]
      (when-let [mesh (checkout-digit! d)]
        (.push digit-meshes [d mesh])
        (.set (.-position mesh) (/ i 1.5) 0 0)
        (.add parent mesh)))
    (.addEventListener parent "on-removed" #(doseq [[d m] digit-meshes]
                                              (return-digit! d m)))
    parent))


(defn- new-text-geometry [text cfg]
  (new three/TextGeometry text (clj->js cfg)))

(defn- new-mesh [geo material]
  (let [m (new three/Mesh geo material)]
    (set! (.-receiveShadow m) true)
    m))

(defn- new-mesh-material []
  (new three/MeshPhongMaterial (clj->js {})))

(defn- on-font-loaded [c font]
  (swap! state assoc :font font)
  ;; Build pool of digits
  (doseq [i (range 10)]
    (let [digit-pool (array)]
      (doseq [c (range pool-size)]
        (let [geo (new-text-geometry (str i) {:font font
                                              :height 0.1
                                              :size 0.8})
              material (new-mesh-material)
              mesh (new-mesh geo material)]
          (.push digit-pool mesh)))
      (.set *digits* (str i) digit-pool)))
  (doseq [sym ["-" "+"]]
    (let [pool (array)]
      (doseq [c (range pool-size)]
        (let [geo (new-text-geometry sym {:font font
                                          :height 0.1
                                          :size 0.8})
              material (new-mesh-material)
              mesh (new-mesh geo material)]
          (.push pool mesh)))
      (.set *digits* sym pool)))
  (put! c true))

(defn init! []
  (let [loader (new three/FontLoader)
        c (chan)]
    (.load loader "fonts/helvetiker.json" (partial on-font-loaded c))
    c))
