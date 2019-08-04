(ns physics.instanced
  (:require ["three" :as three]
            ["three-instanced-mesh" :as instanced-mesh]
            ["three-gltf-loader" :as gltfloader])
  (:require-macros [threeagent.macros :refer [defcomponent]]))

(instanced-mesh three) ;; Path three.js with instanced-mesh library

(def ^:private ^:dynamic *idx* 0)
(defonce ^:private temp-quat (three/Quaternion.))
(defonce ^:private temp-vec (three/Vector3.))

(defonce ^:private ^:dynamic *boxes* nil)
                                               

(defn- set-pose [im idx [sx sy sz] [x y z] [rx ry rz rw]]
  (.setQuaternionAt im idx (.set temp-quat rx ry rz rw))
  (.setPositionAt im idx (.set temp-vec x y z))
  ;(.setScaleAt im idx (.set temp-vec sx sy sz))
  (.needsUpdate im))

(defcomponent :instanced-box [{:keys [color]}]
  (let [o (three/Object3D.)
        idx *idx*]
    (set! *idx* (inc idx))
    (.addEventListener o "on-added" (fn []
                                      (.updateWorldMatrix o true false)
                                      (.getWorldScale o temp-vec)
                                      (.setScaleAt *boxes* idx temp-vec)
                                      (.setColorAt *boxes* idx (three/Color. color))
                                      (let [scale [(.-x temp-vec)
                                                   (.-y temp-vec)
                                                   (.-z temp-vec)]]
                                        (set! (.-poseUpdate (.-parent o))
                                              (fn [pos rot]
                                                (set-pose *boxes* idx scale pos rot))))))
    o))

(defn init-scene! [scene]
  (set! *idx* 0)
  (.add scene *boxes*))

(defn init! []
  (when-let [b *boxes*]
    (.remove (.-parent b) b))
  (set! *boxes* (three/InstancedMesh. (three/BoxBufferGeometry. 1 1 1 1 1 1)
                                      (three/MeshPhongMaterial.)
                                      4000
                                      true
                                      true
                                      false))
  (set! (.-castShadow *boxes*) true)
  (set! (.-receiveShadow *boxes*) true))
