(ns beatsajer.models
  (:require [beatsajer.util.core :refer [$ $! log]]
            [beatsajer.state :refer [state]]
            [threeagent.alpha.core :as th]))

(defonce ^:dynamic ^:private *model-pools* (js/Map.))

(defn checkout-model [key]
  (when-let [pool (.get *model-pools* key)]
    (when (pos? (.-length pool))
      (.shift pool))))

(defn return-model [key model]
  (let [pool (.get *model-pools* key)]
    (.unshift pool model)))

(defn- init-model-pool! [key val n]
  (let [model (aget (.-children (.-scene val)) 0)
        pool (array)]
    (doseq [i (range n)]
      (let [clone (.clone model)]
        (when-let [material ($ clone "material")]
          ($! clone "material" (.clone material)))
        (.push pool clone)))
    (.set *model-pools* key pool)))

(defn init []
  (let [loader (js/THREE.GLTFLoader.)]
    (.load loader "models/block.glb" #(init-model-pool! "block" % 100))
    (.load loader "models/bomb.glb" #(init-model-pool! "bomb" % 100))
    (.load loader "models/block_highlight.glb" #(init-model-pool! "block-highlight" % 100))
    (.load loader "models/logo.glb" (fn [m]
                                        (let [children (.-children (.-scene m))
                                              mesh1 (aget children 0)
                                              mesh2 (aget children 1)
                                              mat1 (new js/THREE.MeshPhongMaterial (clj->js {:color "red"}))
                                              mat2 (new js/THREE.MeshPhongMaterial (clj->js {:color "blue"}))
                                              obj (new js/THREE.Object3D)]
                                          (set! (.-material mesh1) mat1)
                                          (set! (.-material mesh2) mat2)
                                          (.add obj mesh1)
                                          (.add obj mesh2)
                                          (swap! state assoc :logo-model obj))))))

