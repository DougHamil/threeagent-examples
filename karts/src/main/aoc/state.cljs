(ns aoc.state
  (:require [threeagent.alpha.core :as th]
            [reagent.core :as r]))

(defonce state (th/atom {:track []
                         :show-crashed? true
                         :simulation-speed-scale 0.0}))

(def simulation-speed-multiplier (r/track (fn []
                                            (let [s @(r/cursor state [:simulation-speed-scale])]
                                              (if (pos? s)
                                                  (/ (.pow js/Math (inc s) 10.0) 2.0)
                                                  (if (neg? s)
                                                    (/ (- (.pow js/Math (dec s) 10.0)) 2.0)
                                                    0))))))

(defonce postfx-state (th/atom {:focus 1.0}))
