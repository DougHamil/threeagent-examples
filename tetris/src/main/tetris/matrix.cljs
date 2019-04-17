(ns tetris.matrix
  (:require [tetris.state :refer [state]]
            [threeagent.alpha.core :as th]))

(def matrix-dimensions [10 20])

(defn render []
  (let [[dim-x dim-y] matrix-dimensions]
    [:object
     [:plane {:scale [10 1 1]
              :position [4.5 0.5 0]
              :rotation [(/ js/Math.PI -2.0) 0 0]
              :material {:color 0xFFCCFF}}]
     [:plane {:scale [10 20 1]
              :position [4.5 10 -0.4]
              :rotation [0 0 0]
              :material {:color 0xFFFFFF
                         :opacity 0.5
                         :transparent true}}]
     (when-let [matrix @(th/cursor state [:matrix])]
       (for [[x y c] matrix]
         [:box {:position [x (- dim-y y) 0]
                :material {:color c}}]))]))

(defn- remove-tetris [matrix]
  (let [by-row (group-by second matrix)
        rows-to-remove (->> by-row
                            (filter (fn [[y cs]]
                                      (= (count cs) 10)))
                            (map first)
                            (sort))
        new-matrix
        (reduce
         (fn [m y-coord]
           (->> m
                (remove #(= y-coord (second %)))
                (map (fn [[x y c]]
                       (if (> y-coord y)
                         [x (inc y) c]
                         [x y c])))))
         matrix
         rows-to-remove)]
    {:matrix new-matrix
     :rows-removed (count rows-to-remove)}))

(defn in-bounds? [[x y]]
  (and (>= x 0)
       (>= y 0)
       (< x 10)
       (< y 20)))

(defn add-coords! [coords color]
  (let [matrix (:matrix @state)
        results (remove-tetris (concat matrix (map #(conj (vec %) color) coords)))]
    (swap! state assoc :matrix (:matrix results))
    (swap! state update :rows-cleared + (:rows-removed results))))

(comment
  (swap! state assoc :matrix
         (map vector
          (range (first matrix-dimensions))
          (range (second matrix-dimensions)))))
