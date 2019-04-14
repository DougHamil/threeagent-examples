(ns aoc.models
  (:require ["three" :as three]
            ["three-gltf-loader" :as gltfloader]
            [cljs.core.async :refer [chan put! >! <!]])
  (:require-macros [threeagent.alpha.macros :refer [defcomponent]]
                   [cljs.core.async :refer [go]]))

(defonce ^:private models-to-load {"carGreen" "models/raceCarGreen.glb"
                                   "carRed" "models/raceCarRed.glb"
                                   "carOrange" "models/raceCarOrange.glb"
                                   "carWhite" "models/raceCarWhite.glb"})
(defonce ^:private models (js/Map.))


(defn- enable-shadows! [o]
  (set! (.-castShadow o) true)
  (set! (.-receiveShadow o) true)
  (doseq [c (.-children o)]
    (enable-shadows! c)))

(defcomponent :model [{:keys [type]}]
  (let [source-model (.get models type)
        clone (.clone source-model)]
    (enable-shadows! clone)
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
