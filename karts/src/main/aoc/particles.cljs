(ns aoc.particles
  (:require ["three" :as three]
            [threeagent.alpha.core :as th])
  (:require-macros [threeagent.alpha.macros :refer [defcomponent]]))

(defn- vec3 [[x y z]]
  (three/Vector3. x y z))

(defonce ^:dynamic ^:private systems (th/atom {}))
(defonce ^:dynamic ^:private *pools* (js/Map.))

(defn- create-system [p-count color]
  (let [particles (new three/Geometry)
        material (new three/PointsMaterial (clj->js {:color color
                                                     :opacity 0.8
                                                     :transparent true
                                                     :size 0.3}))
        vertices (.-vertices particles)]
    (doseq [i (range p-count)]
      (let [particle (vec3 [(* 1 (rand 1))
                            (* 2.5 (rand 1))
                            (* 1 (rand 1))])]
        (.push vertices particle)))
    (new three/Points particles material)))

(defn- get-free-system [type]
  (let [pool (.get *pools* type)
        used-keys (set (keys @systems))]
    (first (filter #(not (used-keys (.-uuid % ))) pool))))

(defcomponent :particles [{:keys [type color]}]
  (let [system (create-system 20 color)
        id (.-uuid system)]
    (swap! systems assoc id system)
    (.addEventListener system
                       "on-removed"
                       #(swap! systems dissoc id))
    system))

(defn spawn! [type pos rot]
  (when-let [system (get-free-system type)]
    (let [obj {:system system
               :position pos
               :rotation rot}]
      (swap! systems assoc (.-uuid system) obj)
      system)))

(defn render []
  [:object
   (for [[id {:keys [system position rotation]}] @systems]
     ^{:key id}
     [:instance {:position position
                 :rotation rotation
                 :object system}])])

(defn init! [scene]
  (comment
    (.set *pools* "sparks" (clj->js (repeatedly 10 #(create-system 20))))))

(defn tick! [delta-time]
  (let [vy (* delta-time 1)]
    (doseq [system (vals @systems)]
      (let [geo (.-geometry system)]
        (set! (.-verticesNeedUpdate geo) true)
        (doseq [particle (.-vertices geo)]
          (let [pos particle
                y (.-y pos)
                ny (+ y vy)]
            (set! (.-y pos) (if (< ny 2)
                              ny
                              0))))))))

(comment
  (count (vals @systems)))
