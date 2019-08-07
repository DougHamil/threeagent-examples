(ns golf.sim
  (:require ["three" :as three]))

(defonce ^:private ^:dynamic ^js *ammo-worker* nil)
(defonce ^:private ^:dynamic *bodies* (array))
(defonce ^:private ^:dynamic *objs* (js/Map.))
(defonce ^:private simulation-parent (three/Object3D.))
(defonce ^:private temp-vec3 (three/Vector3.))
(defonce ^:private temp-quat (three/Quaternion.))

(defn update-parent [o]
  (let [p (.-parent o)]
    (if (.-matrixWorldNeedsUpdate p)
      (update-parent p)
      (.updateMatrixWorld o true))))

(defn unregister-body [^js obj]
  (let [idx (.findIndex *bodies* #(and (some? %)
                                       (= (.-uuid obj)
                                          (.-uuid %))))]
    (aset *bodies* idx nil)
    (.postMessage *ammo-worker* (clj->js {:type "remove-body"
                                          :idx idx}))))
(defn register-body [^js body ^js obj]
  (let [idx (count *bodies*)]
    
    (.updateWorldMatrix obj true false)
    (.getWorldPosition obj temp-vec3)
    (.getWorldQuaternion obj temp-quat)
    (let [pos [(.-x temp-vec3)
               (.-y temp-vec3)
               (.-z temp-vec3)]
          rot [(.-x temp-quat)
               (.-y temp-quat)
               (.-z temp-quat)
               (.-w temp-quat)]
          cfg {:body body
               :pos pos
               :rot rot}]
      (.postMessage *ammo-worker* (clj->js {:type "add-body"
                                            :data cfg}))
      (.push *bodies* obj))
    (.attach simulation-parent obj)))

(defn on-ammo-worker-sim-step [^js evt]
  (let [poses ^js (.. evt -data)]
    (doseq [i (range (count *bodies*))]
      (when-let [^js o (aget *bodies* i)]
        (let [idx (* i 7)
              x (aget poses idx)
              y (aget poses (+ idx 1))
              z (aget poses (+ idx 2))
              rx (aget poses (+ idx 3))
              ry (aget poses (+ idx 4))
              rz (aget poses (+ idx 5))
              rw (aget poses (+ idx 6))]
          (if-let [set-fn (.-poseUpdate o)]
            (set-fn [x y z] [rx ry rz rw])
            (do
              (.set (.-position o)
                    x y z)
              (.set (.-quaternion o)
                    rx ry rz rw))))))))

(defn init-scene! [^js scene]
  (.add scene simulation-parent))

(defn init! [cb]
  (when-let [aw *ammo-worker*]
    (.terminate *ammo-worker*))
  (let [ammo-worker (js/Worker. "./js/ammo-worker.js")]
    (.. ammo-worker (addEventListener "message"
                                      (fn on-ready [^js e] 
                                        (let [t (.. e -data -type)]
                                          (case t
                                            "ready"
                                            (do
                                              (println "worker is ready!")
                                              (set! *ammo-worker* ammo-worker)
                                              (set! *bodies* (array))
                                              (cb))

                                            "tick"
                                            (on-ammo-worker-sim-step (.-data e))

                                            "log"
                                            (js/console.log (.-data e)))))))))


