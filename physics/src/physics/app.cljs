(ns physics.app
  (:require [threeagent.core :as th]
            ["three" :as three]
            [physics.sim :as sim]
            [physics.instanced :as instanced]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [threeagent.macros :refer [defcomponent]]))

(defonce state (th/atom {}))

(def sky-color 0x9999FF)

(defcomponent :physics-body [{:keys [body]}]
  (let [o (three/Object3D.)
        on-added-fn (fn this-fn []
                      (sim/register-body body o))]
    (.addEventListener o "on-added" on-added-fn)
    o))

(defn block [width height depth mass]
  (let [s 2.0
        body {:shape "box"
              :size [(/ width s)
                     (/ height s)
                     (/ depth s)]
              :friction 50
              :restitution 0.00
              :mass mass}]
    [:physics-body {:body body}
     ^{:on-added (fn [o]
                   (set! (.-castShadow o) true)
                   (set! (.-receiveShadow o) true))}
     [:instanced-box {:scale [width height depth]
                      :color 0xFFEE22
                      :material {:color 0xFFEE22}}]]))

(defn ball [radius]
  (let [s 1.0
        body {:shape "sphere"
              :radius (/ radius s)
              :mass 90.0
              :friction 20.0
              :rollingFriction 2000.0}]
    [:physics-body {:body body}
     ^{:on-added (fn [o]
                   (set! (.-castShadow o) true)
                   (set! (.-receiveShadow o) true))}
     [:sphere {:radius radius
               :width-segments 12
               :height-segments 12
               :material {:color 0xFF7722}}]]))

(defn wall [height width block-size mass]
  [:object
   (let [padding 0.0001]
     (for [y (range height)]
       (for [x (range width)]
         [:object {:position [0
                              (* (+ padding block-size) y)
                              (- (* (+ padding block-size) x)
                                 (/ (* width block-size) 2.0))]}
          [block block-size block-size block-size mass]])))])

(defn castle [block-size size height mass]
  [:object
   [wall height size block-size mass]
   [:object {:rotation [0 (/ js/Math.PI 2.0) 0]
             :position [(+ (/ (* block-size size) 2.0)
                           block-size)
                        0
                        (- (/ (* block-size size) 2.0)
                           block-size)]}
    [wall height (dec size) block-size mass]]
   [:object {:rotation [0 (/ js/Math.PI 2.0) 0]
             :position [(+ (/ (* block-size size) 2.0)
                           block-size)
                        0
                        (/ (* block-size size) -2.0)]}
    [wall height (dec size) block-size mass]]
   [:object {:rotation [0 0 0]
             :position [(+ (/ (* block-size size) 1.0)
                           block-size)
                        0
                        0]}
    [wall height size block-size mass]]])

(defn blocks []
  [:object
   [:object {:position [-39 50 0]}
    [ball 3.0]]
   [:object {:position [-42 -1.5 0]
             :rotation [0 0.0 1.2]}
    [block 10 20 20 0]]
   [castle 1.0 20 5 0.001]])

(defn lighting []
  [:object
    [:hemisphere-light {:intensity 0.4
                        :sky-color sky-color
                        :position [0 0 0]}]
    ^{:on-added (fn [o]
                  (set! (.-castShadow o) true)
                  (let [c (.-camera (.-shadow o))
                        d 50]
                    (set! (.-width (.-mapSize (.-shadow o))) 2048)
                    (set! (.-height (.-mapSize (.-shadow o))) 2048)
                    (set! (.-right c) d)
                    (set! (.-top c) d)
                    (set! (.-bottom c) (- d))
                    (set! (.-left c) (- d))
                    (set! (.-near c) 2)
                    (set! (.-far c) 1000)))}
    [:directional-light {:intensity 1.25
                         :color sky-color
                         :position [10 20 10]}]])

(defn ground []
  ^{:on-added (fn [o]
                (set! (.-receiveShadow o) true))}
  [:plane {:position [0 0 0]
           :rotation [(- (/ js/Math.PI 2.0))
                      0
                      0]
           :material {:color 0x49C949}
           :width 100
           :height 100}])

(defn camera []
  (if-let [canvas @(th/cursor state [:canvas])]
    (let [aspect (/ (.-height canvas)
                    (.-width canvas))
          width 50
          height (* width aspect)]
      [:orthographic-camera {:position [0 35 40]
                             :rotation [-0.5 0 0]
                             :left (- width)
                             :right width
                             :top height
                             :bottom (- height)
                             :active true}])
    [:object]))

(defn root []
  [:object
   [camera]
   [lighting]
   [ground]
   [:object {:position [0 0 -20]}
    (for [i (range 1)]
      [:object {:position [0 0 (* -2.1 i)]}
       [blocks]])]])


(defn tick! [delta-time])

(defn- init-scene []
  (instanced/init!)
  (sim/init! (fn []
               (let [ctx (th/render root
                                    (.getElementById js/document "root")
                                    {:on-before-render tick!})
                     renderer (.-renderer ctx)]
                 (swap! state assoc :canvas (.-canvas ctx))
                 (set! (.-enabled (.-shadowMap renderer)) true)
                 (sim/init-scene! (.-sceneRoot ctx))
                 (instanced/init-scene! (.-sceneRoot ctx))
                 (js/console.log (.-sceneRoot ctx))
                 (.setClearColor renderer sky-color)))))

(defn init []
  (init-scene))

(defn ^:dev/after-load reload []
  (init-scene))

