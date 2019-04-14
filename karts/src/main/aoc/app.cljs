(ns aoc.app
  (:require [threeagent.alpha.core :as th]
            [cljs.core.async :refer [chan put! >! <!]]
            [aoc.ui :as ui]
            [aoc.state :refer [state postfx-state]]
            [aoc.track :as track]
            [aoc.kart :as kart]
            [aoc.camera :as camera]
            [aoc.models :as models]
            [aoc.instanced-model :as instanced-model]
            ["three" :as three]
            ["postprocessing" :as postfx])
  (:require-macros [cljs.core.async :refer [go]]))

(defn- log [d]
  (.log js/console d))

(defn- root []
  [:object
   [camera/render]
   [:hemisphere-light {:position [0 10 0]
                       :sky-color 0xCCDDFF
                       :intensity 0.9}]
   [:object {:rotation [(/ js/Math.PI -2.0) 0 0]}
     [track/render]]
   [kart/render]])

(defn- tick! [delta-time]
  (kart/tick! delta-time)
  (camera/tick! delta-time))

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
          bokeh-effect (postfx/BokehEffect. #js {:dof 0.00
                                                 :aperture 0.05
                                                 :maxBlur 0.2
                                                 :focus (:focus @postfx-state)})
          effect-pass (postfx/EffectPass. camera
                                          bokeh-effect
                                          (postfx/VignetteEffect.))

          depth-pass (postfx/EffectPass. camera (postfx/DepthEffect.))
          render-pass (postfx/RenderPass. (.-sceneRoot ctx) camera)]
      (set! (.-renderToScreen effect-pass) true)
      (set! (.-renderToScreen depth-pass) true)
      #_(set! (.-renderToScreen render-pass) true)
      (.addPass composer render-pass)
      (.addPass composer effect-pass)
      #_(.addPass composer depth-pass)
      (add-watch postfx-state
                 :focus-change
                  (fn [_ _ old new]
                    (set! (.-value (.get (.-uniforms bokeh-effect) "focus"))
                          (:focus new))))
      (log composer)
      (set! (.-composer ctx) composer))))

(defn init []
  (go (do
        (<! (instanced-model/init!))
        (<! (models/init!))
        (setup-scene
         (th/render root
                    (.getElementById js/document "root")
                    {:on-before-render tick!}))))
  (camera/init!)
  (track/init!)
  (ui/init!))

(defn ^:dev/after-load reload []
  (println "Reload")
  (setup-scene
   (th/render root
              (.getElementById js/document "root")
              {:on-before-render tick!}))
  (ui/reload))

(comment
  (log (count (:track @state)))
  (log (count (first (:track @state)))))


