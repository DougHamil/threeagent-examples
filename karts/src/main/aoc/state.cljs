(ns aoc.state
  (:require [threeagent.alpha.core :as th]))

(defonce state (th/atom {:track []
                         :simulation-speed-scale 0.0}))

(defonce postfx-state (th/atom {:focus 1.0}))
