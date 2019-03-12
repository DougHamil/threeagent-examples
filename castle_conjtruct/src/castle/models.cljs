(ns castle.models
  (:require ["three" :as three]
            ["three-gltf-loader" :as gltfloader]
            [cljs.core.async :refer [chan put! >! <!]])
  (:require-macros [threeagent.alpha.macros :refer [defcomponent]]
                   [cljs.core.async :refer [go]]))

(defonce ^:private models-to-load {"gate" "models/gate.glb"
                                   "bridge" "models/bridge.glb"
                                   "wall" "models/wall.glb"
                                   "wall-corner" "models/wallCorner.glb"})
(defonce ^:private models (js/Map.))

(defcomponent :model [{:keys [type]}]
  (let [source-model (.get models type)
        clone (.clone source-model)
        first-child (aget (.-children clone) 0)]
    (set! (.-castShadow clone) true)
    (set! (.-receiveShadow clone) true)
    (set! (.-castShadow first-child) true)
    (.set (.-position first-child) 0 0 0)
    clone))

(defn- store-model! [type scene]
  (let [model (aget (.-children (.-scene scene)) 0)]
    (.set models type model)))

(defn init! []
  (let [loader (new gltfloader)
        c (chan)
        load-chans (map (fn [[model-key model-path]]
                          (let [c (chan)]
                            (.load loader model-path #(do (store-model! model-key %)
                                                          (put! c model-key)))
                            c))
                        models-to-load)]
    (go
      (doseq [c load-chans]
        (let [model-key (<! c)]
          (println "Loaded model" model-key)))
      (put! c true))
    c))
