(ns tetris.text
  (:require [threeagent.alpha.core :as th]
            [tetris.state :refer [state]]
            ["three" :as three]
            [cljs.core.async :refer [chan put! >! <!]])
  (:require-macros [cljs.core.async :refer [go]]
                   [threeagent.alpha.macros :refer [defcomponent]]))

(defn- on-font-loaded [c font]
  (swap! state assoc :font font)
  (put! c true))

(defn init! []
  (let [loader (new three/FontLoader)
        c (chan)]
    (.load loader "fonts/helvetiker.json" (partial on-font-loaded c))
    c))
