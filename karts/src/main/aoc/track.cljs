(ns aoc.track
  (:require [aoc.state :refer [state]]
            [threeagent.alpha.core :as th]
            [aoc.kart :as kart]
            [aoc.instanced-model :as instanced-model]))

(defonce pi-over-2 (/ js/Math.PI 2.0))

(defn- aget2d [a x y]
  (when-let [row (aget a y)]
    (aget row x)))

(defn- fetch [url cb]
  (-> (.fetch js/window url)
      (.then #(.text %))
      (.then cb)))

(def track-segment-rotation {:horizontal [pi-over-2 pi-over-2 0]
                             :vertical [pi-over-2 0 0]
                             :intersection [pi-over-2 0 0]
                             :left-to-down-corner  [pi-over-2 (* pi-over-2 2) 0]
                             :down-to-right-corner [pi-over-2 0 0]
                             :up-to-right-corner [pi-over-2 (- pi-over-2) 0]
                             :left-to-up-corner [pi-over-2 (* pi-over-2 -3) 0]})

(def track-segment-offset {:horizontal [0.5 -0.5 0]
                           :vertical [-0.5 -0.5 0]
                           :intersection [0 0 0]})

(def track-segment-model {:horizontal "roadStraight"
                          :vertical "roadStraight"
                          :intersection "roadCrossing"
                          :left-to-down-corner "roadCorner"
                          :down-to-right-corner "roadCorner"
                          :up-to-right-corner "roadCorner"
                          :left-to-up-corner "roadCorner"})

(def track-segment-normalize {"<" "-"
                              ">" "-"
                              "^" "|"
                              "v" "|"})

(def decor-models ["tree" "flag" "treeLarge"])

(defn- track-text-to-array [txt normalize?]
  (let [a (array)]
    (doseq [line (clojure.string/split-lines txt)]
      (let [b (array)]
        (.push a b)
        (doseq [c line]
          (.push b (if normalize?
                     (get track-segment-normalize c c)
                     c)))))
    a))

(defn- char->track-segment [c a x y]
  (let [c (get track-segment-normalize c c)
        left (aget2d a (dec x) y)
        right (aget2d a (inc x) y)
        up (aget2d a x (dec y))
        down (aget2d a x (inc y))]
    (cond
      (= " " c) nil
      (= "|" c) :vertical
      (= "-" c) :horizontal
      (= "+" c) :intersection
      (and (= "/" c)
           (#{"-" "+"} right)) :up-to-right-corner
      (and (= "/" c)
           (#{"|" "+"} up)) :left-to-up-corner
      (and (= "\\" c)
           (#{"-"  "+"} left)) :left-to-down-corner
      (and (= "\\" c)
           (#{"|" "+"} up)) :down-to-right-corner
      :else (println c))))

(defn- encode-map [a]
  (let [width (count (first a))
        height (count a)
        m (array)]
    (doseq [y (range height)]
      (let [row (array)]
        (.push m row)
        (doseq [x (range width)]
          (let [c (aget (aget a y) x)
                t (char->track-segment c a x y)]
            (.push row t)))))
    m))

(defn- track-array-to-instances [a]
  (let [width (count (first a))
        height (count a)
        insts (array)]
    (doseq [y (range height)]
      (doseq [x (range width)]
        (let [t (aget (aget a y) x)
              offset (get track-segment-offset t [0 0 0])
              p [x (- y) 0]]
          (if t
            (.push insts {:position (map + p offset)
                          :model-type (get track-segment-model t)
                          :rotation (get track-segment-rotation t)})
            (when (< 4 (rand-int 10))
              (.push insts {:position (map + p [0 0 -0.2])
                            :rotation [pi-over-2 0 0]
                            :model-type (rand-nth decor-models)}))))))
    insts))

(defn render []
  (if-let [track @(th/cursor state [:track])]
    (let [grouped-segments (group-by :model-type track)]
      [:object 
       ^{:on-added #(set! (.-receiveShadow %) true)}
       [:plane {:position [0 0 0]
                :material {:color 0x4D8F6E
                           :shininess 0}
                :scale [1000 1000 1]}]
       (for [[t instances] grouped-segments]
         [:instanced-models {:type t
                             :instances instances}])])
    [:object]))

(defn init! []
  (fetch "/input.txt" (fn [input-txt]
                        (let [track-map (encode-map (track-text-to-array input-txt true))]
                          (swap! state assoc :track-map track-map)
                          (swap! state assoc :track (track-array-to-instances track-map))
                          (kart/init! (track-text-to-array input-txt false))))))
