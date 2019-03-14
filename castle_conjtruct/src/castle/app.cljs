(ns castle.app
  (:require [threeagent.alpha.core :as th]
            ["three" :as three]
            [reagent.core :as r]
            [cljs.core.async :refer [chan put! >! <!]]
            [castle.models :as models])
  (:require-macros [cljs.core.async :refer [go]]))

(defonce state (th/atom {:time 0}))
(def wall-size 10.0)
(defonce pi-over-2 (/ js/Math.PI 2.0))

(defn log [v] (.log js/console v))

(def directional-light (new three/DirectionalLight 0xFFFFFF 1.0))

(set! (.-castShadow directional-light) true)
(.set (.-position (.-target directional-light)) 20 -10 1)
(set! (.-enabled (.-shadow directional-light)) true)
(let [shadow (.-shadow directional-light)]
  (set! (.-bias shadow) 0.0001)
  (set! (.-x (.-mapSize shadow)) 1024)
  (set! (.-y (.-mapSize shadow)) 1024))
(let [shadow-cam (.-camera (.-shadow directional-light))]
  (set! (.-near shadow-cam) 1)
  (set! (.-left shadow-cam) -10)
  (set! (.-bottom shadow-cam) -10)
  (set! (.-right shadow-cam) 10)
  (set! (.-top shadow-cam) 10)
  (set! (.-far shadow-cam) 400))

(defn wall-segment [length]
  [:object
   (for [i (range length)]
    [:model {:type "wall"
             :rotation [0 (/ js/Math.PI -2.0) 0]
             :position [(* 10.0 i) 0 0]}])])

(defn castle-square [width length]
  [:object
   [:model {:type "wall-corner"
            :position [0 0 wall-size]}]
   [:object {:rotation [0 pi-over-2 0]
             :position [(* wall-size (dec width)) 0 wall-size]}
    [:model {:type "wall-corner"
             :position [(/ wall-size -2.0) 0 (/ wall-size -2.0)]}]]
   [:object {:position [wall-size 0 0]}
    [wall-segment (- width 2)]]
   [:object {:rotation [0 (/ js/Math.PI 2.0) 0]
             :position [0 0 0]}
    [wall-segment (- length 2)]]
   [:object {:rotation [0 (/ js/Math.PI 2.0) 0]
             :position [(* (dec width) wall-size) 0 0]}
    [wall-segment (- length 2)]]
   [:object {:rotation [0 0 0]
             :position [wall-size 0 (* (dec length) (- wall-size))]}
    [wall-segment (- width 2)]]])


(defn castle []
  [:object {:scale [0.1 0.1 0.1]
            :rotation [0 @(th/cursor state [:time]) 0]
            :position [0 -4 0]}
   [castle-square 5 8]])

(defn lights []
  [:object
   [:hemisphere-light {:intensity 0.3}]
   ^{:on-added #(.add directional-light (.-target directional-light))}
   [:instance {:object directional-light
               :position [-10 2 -8]}]])

(defn ground []
  [:object
   (for [x (range 20)]
     (for [y (range 15)]
      ^{:on-added #(do (set! (.-receiveShadow %) true)
                       (set! (.-castShadow %) true))}
       [:box {:position [(- x 5)
                         (+ (* (.sin js/Math x) 0.05) -4.5)
                         (- y 10)]}]))])

(defn scene []
   [:object {:position [0 0 -10]}
    [ground]
    [castle]])

(defn root []
  [:object
   [lights]
   [scene]])

(defn- tick [delta-time]
  (swap! state update :time + delta-time))

(defn- ui-root []
  [:div])

(defn- init-scene []
  (let [context (th/render [root]
                           (.getElementById js/document "root")
                           {:on-before-render tick})
        renderer (.-renderer context)
        scene (.-sceneRoot context)]
    (set! (.-fog scene) (new three/Fog 0xAA88BB 9.0 40.0))
    (swap! state assoc :renderer renderer)
    (set! (.-enabled (.-shadowMap renderer)) true)
    (set! (.-type (.-shadowMap renderer)) three/PCFSoftShadowMap)
    (.setClearColor renderer 0xAA88BB 1))
  (r/render [ui-root]
            (.getElementById js/document "ui-root")))
(defn init []
  (go (<! (models/init!))
      (init-scene)))

(defn ^:dev/after-load reload []
  (init-scene))



