(ns castle.agent
  (:require ["three" :as three]))


(defn- tick-agent [agent time]
  (let [target-pos ^three/Vector3 (:target-position agent)
        start-pos ^three/Vector3 (:start-position agent)
        current-pos ^three/Vector3 (:current-position agent)
        start-time (:start-time agent)
        delta (- time start-time)
        l (min 1.0 (/ delta 5.0))]
    (.lerpVectors current-pos start-pos target-pos l)
    (assoc agent :current-time time)))
    
(defn tick [state time]
  (swap! state update :king-agent #(tick-agent % time)))

