(ns beatsajer.app
  (:require [beatsajer.models :as models]
            [beatsajer.text-3d :as text-3d]
            [beatsajer.util.math :as math]
            [beatsajer.music.audio :as audio]
            [beatsajer.editor.core :as editor]
            [beatsajer.menu.core :as menu]
            [beatsajer.util.core :refer [log]]
            [beatsajer.state :refer [state]]
            [beatsajer.track :as track]
            [beatsajer.util.threejs :as threejs]
            ["postprocessing" :as postprocessing]
            [threeagent.alpha.core :as th]))

(defn logo []
  [:object {:position [-4.5 5 -10]
            :scale [2 2 2]}
   (let [beat-time @(th/cursor state [:beat-time])]
     [:object
      [:point-light {:intensity (* (int (mod beat-time 2)) 2.0)
                     :distance 5.5
                     :color 0xFF0000
                     :position [1 0 1]}]
      [:point-light {:intensity 2.0
                     :distance 5.4
                     :color 0x0000FF
                     :position [3.5 0 1]}]])
   (if-let [logo @(th/cursor state [:logo-model])]
    [:instance {:object logo
                :rotation [(/ Math/PI 2) 0 0]}]
    [:object])])

(defn root []
  (let [world-scale @(th/cursor state [:world-scale])]
    [:object
     [:hemisphere-light {:position [0 2 -10] :sky-color 0xFFFFFF :ground-color 0xFFFFFF :intensity 0.2}]
     [:point-light {:position [0 2 0] :color 0xFFFFFF :intensity 1 :distance 15}]
     (when-let [camera @(th/cursor state [:camera])]
       [:instance {:object camera
                   :position [0 1.0 0]}])
     [logo]
     (when @(th/cursor state [:audio])
       [:object {:scale world-scale
                 :position [0 0 -4]}
        [editor/render]
        [track/track]])]))

(defn- tick-state [delta-time state]
  (if (:audio state)
    (let [song-time (.seek (:audio state))
          beats-per-second (/ (get-in state [:song :_beatsPerMinute]) 60.0)
          beat-time (* song-time (:beats-per-second state))]
      (-> state
        (assoc :beats-per-second beats-per-second)
        (assoc :song-time song-time)
        (assoc :beat-time beat-time)))
    state))

(defn tick [delta-time]
  (swap! state (partial tick-state delta-time))
  (editor/tick delta-time)
  (track/tick delta-time))

(defn- reset-post-processing []
  (let [scene-context ^js (:scene-context @state)
        camera (:camera @state)
        renderer ^js (.-renderer scene-context)
        composer (new postprocessing/EffectComposer renderer)
        bloom-effect (new postprocessing/BloomEffect (clj->js {:resolutionScale 0.5
                                                                  :distinction 1.0}))
        render-pass (new postprocessing/RenderPass ^js (.-sceneRoot scene-context) camera)
        effect-pass (new postprocessing/EffectPass camera bloom-effect)]
    (set! (.-composer scene-context) composer)
    (doseq [pass (.-passes composer)]
      (.removePass composer pass))
    (.reset composer)
    (set! (.-clear render-pass) true)
    (set! (.-renderToScreen render-pass) false)
    (set! (.-renderToScreen effect-pass) true)
    (.addPass composer render-pass)
    (.addPass composer effect-pass)))

(defn load-scene! []
  (let [scene-context (th/render [root]
                                 (.getElementById js/document "root")
                                 {:on-before-render tick})]
    (swap! state assoc :world-scale [0.8 0.8 0.8])
    (swap! state assoc :scene-context scene-context)
    (swap! state assoc :camera (.-camera ^js scene-context))
    (reset-post-processing)))

(defn init []
  (load-scene!)
  (models/init)
  (text-3d/init)
  (editor/init)
  (menu/init)
  (audio/init))

(defn ^:dev/after-load after-load []
  (th/render [root]
             (.getElementById js/document "root")
             {:on-before-render tick})
  (reset-post-processing))
