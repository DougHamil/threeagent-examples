(ns tetris.tetrimino
  (:require [tetris.state :refer [state]]
            [tetris.matrix :as matrix]))

(def ^:private tetrimino-coords {:I [[0 1] [1 1] [2 1] [3 1]]
                                 :O [[1 0] [2 0] [1 1] [2 1]]
                                 :J [[0 0] [0 1] [1 1] [2 1]]
                                 :L [[0 1] [1 1] [2 1] [2 0]]
                                 :S [[0 1] [1 1] [1 0] [2 0]]
                                 :Z [[0 0] [1 0] [1 1] [2 1]]
                                 :T [[0 1] [1 1] [1 0] [2 1]]})

(def ^:private tetrimino-colors {:I 0x88AAFF
                                 :O 0xEE88EE
                                 :J 0x8888EE
                                 :L 0xEEEE88
                                 :S 0x88EE88
                                 :Z 0x88FFEE
                                 :T 0xAAAAFF})

(def tetrimino-types (keys tetrimino-colors))

(defn- vec-mat [[[a11 a12] [a21 a22]] [x y]]
  [(+ (* x a11) (* y a21))
   (+ (* x a12) (* y a22))])

(defn- rotate-coords [type coords]
  (if (= :O type)
    coords
    (let [[ox oy] [1 1]]
      (map (fn [[cx cy]]
             (let [x (- cx ox)
                   y (- cy oy)
                   [rx ry] (vec-mat [[0 1] [-1 0]] [x y])]
               [(+ ox rx) (+ oy ry)]))
           coords))))

(defn- get-local-coords [type rotation]
  (->> (iterate (partial rotate-coords type)
                (tetrimino-coords type))
       (take (inc rotation))
       last))

(defn- local->world-coords [pos coords]
  (map #(map + pos %) coords))

(defn- tetrimino->world-coords [{:keys [type rotation position]}]
  (->> (get-local-coords type rotation)
       (local->world-coords position)))

(defn render-piece [type]
  (let [coords (get-local-coords type 0)]
    [:object
     (for [[x y] coords]
      [:box {:position [x (- y) 0]
             :material {:color (tetrimino-colors type)}}])]))

(defn render [t]
  [:object
   (for [[x y] (tetrimino->world-coords t)]
     [:box {:position [x (- 20 y) 0]
            :material {:color (tetrimino-colors (:type t))}}])])

(defn- coords-overlap? [a b]
  (not (empty? (clojure.set/intersection (set a) (set b)))))

(defn valid? [matrix coords]
  (let [oob-coords (filter #(not (matrix/in-bounds? %))
                           coords)]
    (and (empty? oob-coords)
         (not (coords-overlap? coords (map (partial take 2) matrix))))))

(defn- move-coords [coords delta]
  (map #(map + delta %) coords))

(defn- next-tetrimino []
  {:type (rand-nth (keys tetrimino-coords))
   :position [4 0]
   :rotation 0})



(defn- try-spawn-tetrimino! []
  (let [t (next-tetrimino)
        coords (tetrimino->world-coords t)]
    (if (valid? (:matrix @state) coords)
      (swap! state assoc :active-tetrimino t)
      (do
        (swap! state assoc :game-state :game-over)
        (swap! state assoc :active-tetrimino nil)))))

(defn- try-move-tetrimino! [delta]
  (when-let [t (:active-tetrimino @state)]
    (let [new-t (assoc t :position (map + delta (:position t)))
          new-coords (tetrimino->world-coords new-t)]
      (when (valid? (:matrix @state) new-coords)
        (swap! state assoc :active-tetrimino new-t)
        (when (= 1 (second delta))
          (swap! state assoc :last-tick-time (:time @state)))))))

(defn- try-rotate-tetrimino! [delta]
  (when-let [t (:active-tetrimino @state)]
    (let [new-t (update t :rotation + delta)
          new-coords (tetrimino->world-coords new-t)]
      (when (valid? (:matrix @state) new-coords)
        (swap! state assoc :active-tetrimino new-t)))))

(defn- on-keydown [evt]
  (case (.-code evt)
    "ArrowRight" (do
                   (.preventDefault evt)
                   (try-move-tetrimino! [1 0]))
    "ArrowLeft" (do
                   (.preventDefault evt)
                   (try-move-tetrimino! [-1 0]))
    "ArrowUp"   (do
                  (.preventDefault evt)
                  (try-rotate-tetrimino! 1))
    "ArrowDown" (do
                  (.preventDefault evt)
                  (try-move-tetrimino! [0 1]))
    "Space" (do
              (.preventDefault evt)
              (loop []
                (if (try-move-tetrimino! [0 1])
                  (recur))))
    nil))

(defn tick! [delta-time]
  (let [time (:time @state)
        time-since-last-tick (- time (:last-tick-time @state))
        t (:active-tetrimino @state)
        [px py] (:position t)]
    (when (>= time-since-last-tick 0.4)
      (let [ticked-t (assoc t :position (map + [px py] [0 1]))
            ticked-coords (tetrimino->world-coords ticked-t)
            matrix (:matrix @state)]
        (if (valid? matrix ticked-coords)
          ;; Moved down
          (do
            (swap! state assoc :active-tetrimino ticked-t))
          ;; Hit Ground/Tetrimino
          (do
            (matrix/add-coords! (tetrimino->world-coords t) (tetrimino-colors (:type t)))
            (try-spawn-tetrimino!))))
      (swap! state assoc :last-tick-time time))))

(defn init! []
  (.addEventListener js/window "keydown" on-keydown)
  (swap! state assoc :active-tetrimino (next-tetrimino)))
