(ns castle.app
  (:require [threeagent.alpha.core :as th]
            ["three" :as three]
            [reagent.core :as r]
            [cljs.core.async :refer [chan put! >! <!]]
            [castle.models :as models])
  (:require-macros [cljs.core.async :refer [go]]))

(defonce state (th/atom {:time 0}))

(def directional-light (new three/DirectionalLight 0xFFFFFF 1.8))
(set! (.-castShadow directional-light) true)
(.set (.-position (.-target directional-light)) 0 0 -10)
(set! (.-enabled (.-shadow directional-light)) true)
(let [shadow (.-shadow directional-light)]
  (set! (.-bias shadow) 0.0001))
(let [shadow-cam (.-camera (.-shadow directional-light))]
  (set! (.-near shadow-cam) 4)
  (set! (.-far shadow-cam) 5000))
(def cam-helper (new three/CameraHelper (.-camera (.-shadow directional-light))))

(defn wall-segment [[x1 y1] [x2 y2]]
  [:object
   (if (= y2 y1)
     (for [x (range x1 (inc x2))]
       [:model {:type "wall"
                :rotation [0 (/ js/Math.PI -2.0) 0]
                :position [(* 10.0 x) 0 (* 10.0 y1)]}])
     (for [y (range y1 (inc y2))]
       [:model {:type "wall"
                :rotation [0 0 0]
                :position [(* 10.0 x1) 0 (* 10.0 y)]}]))])

(defn castle []
  [:object {:scale [0.1 0.1 0.1]
            :position [0 -4 0]}
   [:model {:type "gate"}]
   [:model {:type "bridge"}]
   [wall-segment [0 0] [5 0]]
   [wall-segment [0 -5] [5 -5]]
   [wall-segment [-1 -7] [-1 0]]
   [wall-segment [5 -5] [5 0]]])

(defn lights []
  [:object {:position [(* 2.0 (.sin js/Math @(th/cursor state [:time])))
                       0 0]}
   [:instance {:object directional-light
               :position [0 2 0]}]])

(defn ground []
  [:object
   (for [x (range 20)]
     (for [y (range 15)]
      ^{:on-added #(do (set! (.-receiveShadow %) true)
                       (set! (.-castShadow %) true))}
      [:box {:position [(- x 5) (+ (rand 0.5) -5) (- y 10)]
             :material (new three/MeshPhongMaterial 0xBB00BB)}]))])
(defn root []
  [:object
   [:instance {:object cam-helper}]
   [lights]
   [:object {:position [0 0 -10]}
    [ground]
    [castle]]])

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
    (set! (.-fog scene) (new three/Fog 0xAA88BB 8.0 30.0))
    (swap! state assoc :renderer renderer)
    (set! (.-enabled (.-shadowMap renderer)) true)
    ;;(set! (.-type (.-shadowMap renderer)) three/PCFSoftShadowMap)
    (.setClearColor renderer 0xAA88BB 1))
  (r/render [ui-root]
            (.getElementById js/document "ui-root")))
(defn init []
  (go (<! (models/init!))
      (init-scene)))

(defn ^:dev/after-load reload []
  (init-scene))



