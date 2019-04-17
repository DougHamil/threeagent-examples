(ns tetris.matrix
  (:require [tetris.state :refer [state]]
            [threeagent.alpha.core :as th]))

(def matrix-dimensions [10 20])

(defn render []
  (let [[dim-x dim-y] matrix-dimensions]
    [:object
     (when-let [matrix @(th/cursor state [:matrix])]
       (for [[x y] matrix]
         [:box {:position [x (- dim-y y) 0]}]))]))

(comment
  (swap! state assoc :matrix
         (map vector
          (range (first matrix-dimensions))
          (range (second matrix-dimensions)))))
