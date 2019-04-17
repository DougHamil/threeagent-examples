(ns tetris.app
  (:require [threeagent.alpha.core :as th]
            [cljs.core.async :refer [chan put! >! <!]]
            [tetris.state :refer [state]]
            [tetris.tetrimino :as tetrimino]
            [tetris.matrix :as matrix]
            ["three" :as three]
            ["postprocessing" :as postfx])
  (:require-macros [cljs.core.async :refer [go]]))

(defn- render-active-tetrimino []
  [:object
   [tetrimino/render @(th/cursor state [:active-tetrimino])]])
   
(defn- root []
  [:object
   [:hemisphere-light {:position [0 5 -10]
                       :sky-color 0xCCDDFF
                       :intensity 0.9}]
   [:object {:position [0 -5 -10]
             :scale [0.5 0.5 0.5]}
    [render-active-tetrimino]
    [matrix/render]]
   ;; Rotation Tests
   [:object {:position [-10 0 -10]}
    (for [[i type] (map-indexed vector [:I :J :L :S :Z :O :T])]
      (for [r (range 4)]
        [:object {:position [r i 0]
                  :scale [0.2 0.2 0.2]}
         [tetrimino/render {:type type
                            :position [0 20]
                            :rotation r}]]))]])

(defn- tick! [delta-time]
  (swap! state update :time + delta-time)
  (tetrimino/tick! delta-time))

(defn- setup-scene [ctx]
  (swap! state assoc :camera (.-camera ctx))
  (let [renderer (.-renderer ctx)]
    (set! (.-enabled (.-shadowMap renderer)) true)
    (.setClearColor renderer 0xCCDDFF))
  (set! (.-far (.-camera ctx)) 100.0)
  (set! (.-near (.-camera ctx)) 1)
  (.updateProjectionMatrix (.-camera ctx))
  (when (nil? (.-composer ctx))
    (let [composer (postfx/EffectComposer. (.-renderer ctx))
          camera (.-camera ctx)
          effect-pass (postfx/EffectPass. camera (postfx/VignetteEffect.))
          render-pass (postfx/RenderPass. (.-sceneRoot ctx) camera)]
      (set! (.-renderToScreen effect-pass) true)
      (.addPass composer render-pass)
      (.addPass composer effect-pass)
      (set! (.-composer ctx) composer))))

(defn init []
  (go (do
        ;(<! (models/init!))
        (setup-scene
         (th/render root
                    (.getElementById js/document "root")
                    {:on-before-render tick!}))))
  (tetrimino/init!))

(defn ^:dev/after-load reload []
  (println "Reload")
  (setup-scene
   (th/render root
              (.getElementById js/document "root")
              {:on-before-render tick!})))
