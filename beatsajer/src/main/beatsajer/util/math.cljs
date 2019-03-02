(ns beatsajer.util.math)

(defonce pi-over-2 (/ Math/PI 2.0))
(defonce pi-over-4 (/ Math/PI 4.0))

(defn vec2-len [[x y]]
  (.sqrt js/Math (+ (* x x) (* y y))))

(defn vec2-normalize [[x y]]
  (let [l (.sqrt js/Math (+ (* x x) (* y y)))]
    [(/ x l) (/ y l)]))

(defn atan2 [[x y]]
  (let [a (/ (* 180.0 (.atan2 js/Math x y)) Math/PI)]
    (if (neg? a)
      (+ a 360.0)
      a)))

  
(defn vec2-sub [[x1 y1] [x2 y2]]
  [(- x1 x2) (- y1 y2)])

(defn get-vec2-angle [v1 v2]
  (let [[x1 y1] (vec2-normalize v1)
        [x2 y2] (vec2-normalize v2)
        a1 (.atan2 js/Math y1 x1)
        a2 (.atan2 js/Math y2 x2)
        a (- a2 a1)]
    (/ (* 180.0 a) Math/PI)))

(defn clamp-angle [a]
    (mod a 360.0))

(mod -1 10)
(mod -45  360)

