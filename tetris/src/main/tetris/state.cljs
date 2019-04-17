(ns tetris.state
  (:require [threeagent.alpha.core :as th]
            [reagent.core :as r]))

(defonce state (th/atom {:time 0
                         :matrix []
                         :active-tetrimino {:type :Z
                                            :rotation 0
                                            :position [0 0]}}))

