(ns aoc.particles
  (:require ["three" :as three]
            [aoc.state :refer [simulation-speed-multiplier state]]
            [threeagent.alpha.core :as th])
  (:require-macros [threeagent.alpha.macros :refer [defcomponent]]))

(defn- vec3 [[x y z]]
  (three/Vector3. x y z))

(defonce ^:dynamic ^:private systems (th/atom {}))

(defn- create-system [p-count color spawn-time]
  (let [particles (new three/Geometry)
        material (new three/PointsMaterial (clj->js {:color color
                                                     :opacity 0.6
                                                     :transparent true
                                                     :size 0.4}))
        vertices (.-vertices particles)]
    (doseq [i (range p-count)]
      (let [p [(rand 1)
               0
               (rand 1)]
            v [0.01
               (* 2.5 (rand 1))
               0.01]
            particle (vec3 p)]
        (set! (.-initialPos particle) p)
        (set! (.-velocity particle) v)
        (.push vertices particle)))
    (let [system (new three/Points particles material)]
      (set! (.-initialTime system) spawn-time)
      system)))

(defcomponent :particles [{:keys [type color spawn-time]}]
  (let [system (create-system 10 color (:sim-time @state))
        id (.-uuid system)]
    (swap! systems assoc id system)
    (.addEventListener system
                       "on-removed"
                       #(swap! systems dissoc id))
    system))

(defn render []
  [:object
   (for [[id {:keys [system position rotation]}] @systems]
     ^{:key id}
     [:instance {:position position
                 :rotation rotation
                 :object system}])])

(defn tick! [delta-time]
  (let [dt (* delta-time @simulation-speed-multiplier)
        sim-time (:sim-time @state)
        vy (* dt 1)]
    (doseq [system (vals @systems)]
      (let [geo (.-geometry system)
            spawn-time (.-initialTime system)
            duration (- sim-time spawn-time)]
        (set! (.-verticesNeedUpdate geo) true)
        (doseq [particle (.-vertices geo)]
          (let [pos particle
                [vx vy vz] (.-velocity particle)
                [ox oy oz] (.-initialPos particle)
                ny (mod (+ oy (* vy duration)) 2.0)]
            (.set pos ox ny oz)))))))


(defn init! [scene])
