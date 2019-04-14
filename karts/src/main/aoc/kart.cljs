(ns aoc.kart
  (:require [aoc.state :refer [state]]
            [threeagent.alpha.core :as th]
            [aoc.util :as util]
            [aoc.models :as models]
            ["@tweenjs/tween.js" :as tween]
            ["three" :as three]))

(defonce simulation-ticks 10000)
(defonce pi-over-2 (/ js/Math.PI 2.0))

(defonce car-models ["carRed" "carGreen" "carOrange" "carWhite"])

(def direction->velocity {:down [0 0 1]
                          :up [0 0 -1]
                          :right [1 0 0]
                          :left [-1 0 0]})

(def direction->rotation {:right [0 pi-over-2 0]
                          :left [0 (* -1.0 pi-over-2) 0]
                          :up [0 (* 2.0 pi-over-2) 0]
                          :down [0 0 0]})

(def token->direction {"v" :down
                       "^" :up
                       "<" :left
                       ">" :right})

(def interpolation-fn (-> tween
                          (.-Easing)
                          (.-Back)
                          (.-InOut)))

(def turn-order [:left :straight :right])

(def turn->direction {[:left :left] :down
                      [:right :left] :up

                      [:left :right] :up
                      [:right :right] :down

                      [:left :up] :left
                      [:right :up] :right

                      [:left :down] :right
                      [:right :down] :left})

(defn render []
  (if-let [karts @(th/cursor state [:karts])]
    [:object
     (for [k karts]
       ^{:key (:id k)}
       [:model {:type (nth car-models (mod (:index k) (count car-models)))
                :rotation (:rotation k)
                :scale [0.7 0.7 0.7]
                :position (:position k)}])]
    [:object]))

(defn- index-by-id [karts]
  (into {} (map #(vector (:id %) %)) karts))

(defn- sample-track [track [x y]]
  (util/aget2d track x y))

(defn- map-coords->pos [[x y]]
  [x 0 y])

(defn- apply-turn [turn dir]
  (if (= :straight turn)
    dir
    (turn->direction [turn dir])))

(defn- get-kart-direction [dir tile-type]
  (case [dir tile-type]
    [:right :left-to-down-corner] :down
    [:up :left-to-down-corner] :left

    [:down :down-to-right-corner] :right
    [:left :down-to-right-corner] :up

    [:up :up-to-right-corner] :right
    [:left :up-to-right-corner] :down

    [:right :left-to-up-corner] :up
    [:down :left-to-up-corner] :left
    dir))

(defn- step-coords [[x y] d]
  (let [x (int x)
        y (int y)
        [nx ny]
        (case d
          :left [(dec x) y]
          :right [(inc x) y]
          :up [x (dec y)]
          :down [x (inc y)])]
    [(int nx) (int ny)]))

(defn- move-kart [k]
  (let [new-coords (step-coords (:coords k) (:direction k))]
    (-> k
        (assoc :last-coords (:coords k))
        (assoc :coords new-coords))))

(defn- rot->quat [[x y z]]
  (doto (three/Quaternion.)
    (.setFromEuler (three/Euler. x y z "XYZ"))))

(defn- lerp [delta-time]
  (interpolation-fn delta-time))

(defn- lerp-rotation [delta-time dir next-dir]
  (let [a (direction->rotation dir)
        b (direction->rotation next-dir)
        qa (rot->quat a)
        qb (rot->quat b)
        q (.slerp qa qb (lerp delta-time))
        e (doto (three/Euler.)
            (.setFromQuaternion q))]
    [(.-x e) (.-y e) (.-z e)]))

(defn- position-kart [sim-delta-time k next-k]
  (let [p (map-coords->pos (:coords k))]
    (if (= :crashed (:state k))
      (-> k
          (assoc :position p))
      (let [v (map (partial * sim-delta-time)
                   (direction->velocity (:direction k)))]
        (-> k
            (assoc :rotation (lerp-rotation sim-delta-time
                                            (:direction k)
                                            (:direction next-k)))
            (assoc :position (map + v p)))))))


(defn- handle-intersection [k]
  (let [turn-idx (:turn-idx k) 
        turn (nth turn-order turn-idx)
        new-dir (apply-turn turn (:direction k))]
    (-> k
        (assoc :direction new-dir)
        (assoc :turn-idx (mod (int (inc turn-idx))
                              (count turn-order))))))

(defn- steer-kart [track k]
  (if (not= (:coords k) (:last-coords k))
    (let [tile-type (sample-track track (:coords k))]
      (if (= :intersection tile-type)
        (handle-intersection k)
        (let [new-dir (get-kart-direction (:direction k) tile-type)]
          (assoc k :direction new-dir))))
    k))

(defn- tick-kart [track k]
  (if (= :crashed (:state k))
    k
    (->> k
         (move-kart)
         (steer-kart track))))

(defn- find-colliding-kart [k orig-k karts]
  (let [coords (:coords k)]
    (->> karts
     (filter #(and (not= orig-k %)
                   (= (:coords %) coords)))
     (first))))

(defn- kart-sort [a b]
  (let [[ax ay] (:coords a)
        [bx by] (:coords b)]
    (if (= ay by)
      (- ax bx)
      (if (> by ay)
        -1
        1))))

(defn- tick-kart-reduce [track-map {:keys [driving crashed collided]} k]
  (if (collided k)
    {:driving driving
     :crashed crashed
     :collided collided}
    (let [ticked (tick-kart track-map k)
          colliding (find-colliding-kart ticked k driving)]
      (if colliding
        (let [as-set #{colliding k}]
          {:driving (remove as-set driving)
           :collided (clojure.set/union as-set collided)
           :crashed (-> crashed
                        (conj (assoc colliding :state :crashed))
                        (conj (assoc ticked :state :crashed)))})
        {:driving (conj (remove #{k} driving)
                        ticked)
         :collided collided
         :crashed crashed}))))

(defn- simulation-tick [track-map all-karts]
  (let [grouped-karts (group-by :state all-karts)
        ordered-karts (sort kart-sort (:driving grouped-karts))
        ticked-karts (reduce (partial tick-kart-reduce track-map)
                             (assoc grouped-karts :collided #{})
                             ordered-karts)]
    (sort-by :id (concat (:driving ticked-karts) (:crashed ticked-karts)))))

(defn tick! [delta-time]
  (let [{:keys [karts track-map]} @state]
    (when (and karts track-map)
      (let [{:keys [simulation-speed-scale sim-time all-ticks]} @state
            sim-time (or sim-time 0)
            new-sim-time (+ sim-time (* simulation-speed-scale delta-time))
            new-sim-tick (int new-sim-time)
            sim-delta (- new-sim-time new-sim-tick)]
        (when (and (>= new-sim-tick 0)
                   (< new-sim-tick (dec (count all-ticks))))
          (swap! state
                 (fn [s]
                   (let [this-tick (nth all-ticks new-sim-tick)
                         next-tick (nth all-ticks (inc new-sim-tick))
                         karts (map (partial position-kart sim-delta)
                                    this-tick
                                    next-tick)]
                                    
                     (-> s
                         (assoc :karts karts)
                         (assoc :sim-time new-sim-time))))))))))

(defn init! [track-text-array]
  (let [height (count track-text-array)
        width (count (first track-text-array))
        karts (array)]
    (doseq [y (range height)]
      (doseq [x (range width)]
        (let [c (util/aget2d track-text-array x y)]
          (when-let [d (token->direction c)]
            (.push karts {:position [x (- y) 0]
                          :state :driving
                          :index (.-length karts)
                          :id (.-length karts)
                          :coords [x y]
                          :last-coords [x y]
                          :rotation (direction->rotation d)
                          :turn-idx 0
                          :direction d})))))
    (swap! state assoc :karts (vec karts))
    (let [track-map (:track-map @state)
          karts (vec karts)
          all-ticks
          (reduce (fn [acc tick]
                    (conj acc (simulation-tick track-map (last acc))))
                  [karts]
                  (range simulation-ticks))]
      (swap! state assoc :all-ticks all-ticks))))


(comment
  (:track-map @state))

