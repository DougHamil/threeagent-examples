(ns tetris.app
  (:require [threeagent.alpha.core :as th]
            [cljs.core.async :refer [chan put! >! <!]]
            [tetris.state :refer [state]]
            [tetris.tetrimino :as tetrimino]
            [tetris.matrix :as matrix]
            [tetris.text :as text]
            ["three" :as three]
            ["postprocessing" :as postfx])
  (:require-macros [cljs.core.async :refer [go]]))

(defn- render-active-tetrimino []
  [:object
   [tetrimino/render @(th/cursor state [:active-tetrimino])]])
   

(defn- background-scenery []
  (let [scenery @(th/cursor state [:scenery])]
    [:object {:position [0 -10 -20]}
     (for [{:keys [type position rotation]} scenery]
       [:object {:position position
                 :rotation rotation}
        [tetrimino/render-piece type]])]))

(defn- score []
  [:object 
   (when-let [font @(th/cursor state [:font])]
    (let [rows-cleared @(th/cursor state [:rows-cleared])]
     (if (= :game-over @(th/cursor state [:game-state]))
       [:text {:font font
               :height 0.1
               :position [-3 0 -6]
               :size 0.8
               :text (str "Game Over\n" rows-cleared)}]
       [:text {:font font
               :position [3 -5 -8]
               :height 0.1
               :size 0.8
               :text (str rows-cleared)}])))])

(defn- root []
  [:object
   [:hemisphere-light {:position [0 5 -10]
                       :sky-color 0xCCDDFF
                       :intensity 0.9}]
   [:directional-light {:position [0 0 10]
                        :intensity 0.1}]
   [score]
   [:object {:position [-2.5 -5 -7]
             :scale [0.5 0.5 0.5]}
    [render-active-tetrimino]
    [matrix/render]
    [background-scenery]]])

(defn- gen-scenery []
  (map
   (fn [_]
     (let [side (if (= 0 (rand-int 2))
                  1
                  -1)]
       {:type (rand-nth tetrimino/tetrimino-types)
        :rotation [0 0 (rand 10)]
        :position [(+ (* side (rand 50)))
                   (rand 80)
                   (- (rand 10))]}))
   (range 80)))

(defn- tick! [delta-time]
  (swap! state update :time + delta-time)
  (tetrimino/tick! delta-time))

(defn- setup-scene [ctx]
  (swap! state assoc :camera (.-camera ctx))
  (let [renderer (.-renderer ctx)]
    (set! (.-enabled (.-shadowMap renderer)) true)
    (.setClearColor renderer 0xCCCCFF))
  (set! (.-far (.-camera ctx)) 200.0)
  (set! (.-near (.-camera ctx)) 1)
  (.updateProjectionMatrix (.-camera ctx))
  (when (or (nil? (.-composer ctx)) true)
    (let [composer (postfx/EffectComposer. (.-renderer ctx))
          camera (.-camera ctx)
          bokeh-effect (postfx/BokehEffect. #js {:dof 0.06
                                                 :aperture 0.05
                                                 :maxBlur 0.8
                                                 :focus 0.888})
          effect-pass (postfx/EffectPass. camera bokeh-effect (postfx/VignetteEffect.))
          render-pass (postfx/RenderPass. (.-sceneRoot ctx) camera)]
      (set! (.-renderToScreen effect-pass) true)
      (.addPass composer render-pass)
      (.addPass composer effect-pass)
      (set! (.-composer ctx) composer))))

(defn init []
  (go (do
        (<! (text/init!))
        (setup-scene
         (th/render root
                    (.getElementById js/document "root")
                    {:on-before-render tick!}))))
  (tetrimino/init!)
  (swap! state assoc :scenery (gen-scenery)))

(defn ^:dev/after-load reload []
  (println "Reload")
  (setup-scene
   (th/render root
              (.getElementById js/document "root")
              {:on-before-render tick!})))
