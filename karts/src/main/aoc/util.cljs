(ns aoc.util)

(defn aget2d [a x y]
  (when-let [row (aget a y)]
    (aget row x)))

