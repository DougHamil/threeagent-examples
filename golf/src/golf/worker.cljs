(ns golf.worker
  (:require [golf.ammo :as ammo]))

(defonce max-instances 4000)
(defonce ^:private ^:dynamic ^js *ammo* nil)
(defonce ^:private ^:dynamic ^js *world* nil)
(defonce ^:private ^:dynamic *bodies* (array))
(defonce ^:private ^:dynamic ^js *xform* nil)
(defonce ^:private buffer (js/Float32Array. (* 7 max-instances)))

(defonce fixed-time-step (/ 1.0 60.0))

(js/self.importScripts "./ammo.js")

(defn post-message [t d]
  (js/self.postMessage (clj->js {:type t
                                 :data d})))

(defn log [d]
  (post-message "log" d))

(defn log-js [d]
  (js/self.postMessage #js {:type "log"
                            :data d}))

(defn simulate-step []
  (let [a ^js *ammo*
        world ^js *world*]
    (.stepSimulation world fixed-time-step 2)
    (doseq [i (range (count *bodies*))]
      (when-let [b ^js (aget *bodies* i)]
        (ammo/write-pose a *xform* b (* i 7) buffer)))
    (js/self.postMessage #js {:type "tick"
                              :data buffer})))

(defn on-add-body [^js a ^js world ^js evt]
  (let [cfg ^js (.. evt -data)
        b ^js (ammo/create-rigid-body a (.-body cfg) (.-pos cfg) (.-rot cfg))]
    (.addRigidBody world b)
    (.push *bodies* b)))

(defn on-remove-body [^js a ^js world ^js evt]
  (let [idx ^js (.. evt -idx)
        b (aget *bodies* idx)]
    (.removeRigidBody world b)
    (aset *bodies* idx nil)))

(defn start-simulation []
  (let [a *ammo*
        world  ^js (ammo/world a)
        ground ^js (ammo/ground a)]
    (.addRigidBody world ground)
    (set! *world* world)
    (set! *xform* ^js (ammo/transform a))
    (set! *bodies* (array))
    (js/self.setInterval simulate-step (/ 1000.0 60.0))))

(defn on-message [^js evt]
  (let [t (.. evt -data -type)]
    (case t
      "add-body"
      (on-add-body *ammo* *world* (.. evt -data))
      "remove-body"
      (on-remove-body *ammo* *world* (.. evt -data))
      "reset"
      (start-simulation))))

(.then (js/self.Ammo)
       (fn []
         (let [a ^js (.-Ammo js/self)]
           (js/self.addEventListener "message" on-message)
           (set! *ammo* a)
           (log "starting sim...")
           (start-simulation)
           (post-message "ready" nil))))
