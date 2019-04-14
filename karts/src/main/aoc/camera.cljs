(ns aoc.camera
  (:require [aoc.state :refer [state]]
            ["three" :as three]
            ["three-orbitcontrols" :as orbitcontrols]
            [threeagent.alpha.core :as th]))
(def directional-light (new three/DirectionalLight 0xFFFFFF 1.0))

;; Setup shadow
(set! (.-castShadow directional-light) true)
(.set (.-position (.-target directional-light)) -20 -10 1)
(let [shadow (.-shadow directional-light)]
  (set! (.-x (.-mapSize shadow)) 2048)
  (set! (.-y (.-mapSize shadow)) 2048)
  (set! (.-enabled shadow) true)
  (set! (.-bias shadow) 0.00001))
(let [shadow-cam (.-camera (.-shadow directional-light))]
  (set! (.-near shadow-cam) 1)
  (set! (.-left shadow-cam) -20)
  (set! (.-bottom shadow-cam) -20)
  (set! (.-right shadow-cam) 20)
  (set! (.-top shadow-cam) 20)
  (set! (.-far shadow-cam) 500))


(defn- setup-light [l]
  (set! (.-castShadow l) true)
  (.set (.-position (.-target l)) 0 0 0))

(defn render []
  [:object
   ^{:on-added #(.add directional-light (.-target directional-light))}
   [:instance {:object directional-light}]])

(defn tick! [delta-time]
  (when-let [cam (:camera @state)]
    (.set (.-position directional-light)
          (+ (.-x (.-position cam)) 20)
          (.-y (.-position directional-light))
          (+ (.-z (.-position cam)) 10)))
  (if-let [follow-kart-id @(th/cursor state [:follow-kart-id])]
    (let [kart (first (filter #(= follow-kart-id (:id %))
                              @(th/cursor state [:karts])))
          [x y z] (:position kart)
          cam (:camera @state)]
      (.set (.-position cam) x (+ y 3.5) (+ z -6))
      (.lookAt cam (three/Vector3. x y z))
      (when-let [orbit (:orbit-controls @state)]
        (set! (.-target orbit) (three/Vector3. x y z))
        (set! (.-enablePan orbit) false)
        (.update orbit)))
    (let [cam (:camera @state)]
      (.set (.-position cam) 75 50 75)
      (.lookAt cam (three/Vector3. 75 0 75)))))

(defn init! [])

(comment
  (do
    (swap! state assoc :follow-kart-id (:id (first (filter #(= :driving (:state %))
                                                           (vals (:karts @state))))))
         
    nil))


