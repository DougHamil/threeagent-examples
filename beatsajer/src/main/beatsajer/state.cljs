(ns beatsajer.state
  (:require [reagent.core :as r]))

(defonce state (r/atom {:song-time 0.0
                        :show-grid? true
                        :playback-rate 1.0}))
