(ns aoc.state
  (:require [threeagent.alpha.core :as th]))

(defonce state (th/atom {:track []
                         :simulation-speed-scale 1.0}))

(defonce postfx-state (th/atom {:focus 1.0}))


(defn set-sim-speed [s]
  (swap! state assoc :simulation-speed-scale s)
  s)

(comment
  (set-sim-speed 500.0))

