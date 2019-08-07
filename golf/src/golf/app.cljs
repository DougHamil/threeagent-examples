(ns golf.app
  (:require [threeagent.core :as th]
            ["three" :as three]
            [golf.host]
            [golf.sim :as sim]
            [golf.ui :as ui]
            [golf.instanced :as instanced]
            [golf.state :refer [state]]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [threeagent.macros :refer [defcomponent]]))


(def sky-color 0x8890FF)

(defcomponent :physics-body [{:keys [body]}]
  (let [o (three/Object3D.)]
    (.addEventListener o "on-added" (fn []
                                      (sim/register-body body o)))
    (.addEventListener o "on-removed" (fn []
                                        (sim/unregister-body o)))
    o))

(defn block [width height depth mass]
  (let [s 2.0
        body {:shape "box"
              :size [(/ width s)
                     (/ height s)
                     (/ depth s)]
              :friction 5.5
              :restitution 0.0
              :mass mass}]
    [:physics-body {:body body}
     ^{:on-added (fn [o]
                   (set! (.-castShadow o) true)
                   (set! (.-receiveShadow o) true))}
     [:instanced-box {:scale [width height depth]
                      :color 0xFFEE22}]]))

(defn ball [radius]
  (let [s 1.0
        body {:shape "sphere"
              :radius (/ radius s)
              :mass 90.1
              :friction 0.05
              :restitution 0.2
              :rollingFriction 0.0}]
    [:physics-body {:body body}
     ^{:on-added (fn [o]
                   (set! (.-castShadow o) true)
                   (set! (.-receiveShadow o) true))}
     [:sphere {:radius radius
               :width-segments 18
               :height-segments 18
               :material {:color 0xFF7722}}]]))

(defn wall [height width block-size mass]
  [:object
   (let [padding 0.0001]
     (for [y (range height)]
       (for [x (range width)]
         (let [r (- 1.0 (/ y height))
               s (* (* r r)
                    block-size)
               ;s block-size
               m (+ 1.0 (* r mass))]
           [:object {:position [0
                                (* (+ padding block-size) y)
                                (- (* (+ padding s) x)
                                   (/ (* width s) 2.0))]}
            [block s s s m]]))))])


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

(defn tower [block-size radius c segments]
  [:object
   (for [i (range c)]
     (for [x (range segments)]
       (let [r (/ x segments)
             a (* (* 2.0 js/Math.PI) r)]
         [:object {:position [(* radius (js/Math.cos a))
                              (* block-size i)
                              (* radius (js/Math.sin a))]}
          [block block-size block-size block-size 0.5]])))])

(defn blocks []
  [:object
   [:object {:position [-42 -1.5 0]
             :rotation [0 0.0 1.2]}
    [block 10 20 20 0]]
   (comment
     (let [size @(th/cursor state [:wall-width])]
       [castle 1.5 size 15 10.001]))
   (comment
     (for [i (range 5)]
       [:object {:position [(* i -4) 0 0]}
        [wall 20 10 2.0 0.01]]))
   [tower 1.0 5.0 10 25]])

(defn- vrand [v]
  (* v (js/Math.random)))

(defn clouds []
  [:object {:position [0 9 -90]}
   (for [i (range 8)]
     [:object {:position [(- (vrand 80)
                             40)
                          (vrand 8) (vrand 2)]}
      (for [j (range 3)]
        [:sphere {:material {:color "white"
                             :emissive (three/Color. 0xFFFFFF)
                             :specular 0}
                  :radius (+ 2.0 (vrand 2.0))
                  :height-segments 18
                  :width-segments 18
                  :position [(vrand 8)
                             (vrand 5)
                             (vrand 1)]}])])])

(defn lighting []
  [:object
    [:hemisphere-light {:intensity 0.4
                        :sky-color sky-color
                        :position [0 0 0]}]
    ^{:on-added (fn [o]
                  (set! (.-castShadow o) true)
                  (let [c (.-camera (.-shadow o))
                        d 40]
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
      [:object
       [:perspective-camera {:position [0 35 40]
                             :rotation [-0.5 0 0]
                             :aspect (/ 1.0 aspect)
                             :active true}]
       [:orthographic-camera {:position [0 35 40]
                              :rotation [-0.5 0 0]
                              :left (- width)
                              :right width
                              :top height
                              :bottom (- height)
                              :active true}]])
    [:object]))

(defn root []
  [:object
   [camera]
   [lighting]
   (if-let [c @(th/cursor state [:custom-comp])]
     [:object {:position [0 0 0]}
      [c]]
     [:object])
   [ground]
   [:object {:position [0 0 -5]}
    [blocks]]])

(defn tick! [delta-time])

(defn- init-scene []
  (instanced/init!)
  (ui/init! init-scene)
  (sim/init! (fn []
               (let [ctx (th/render root
                                    (.getElementById js/document "root")
                                    {:on-before-render tick!})
                     renderer (.-renderer ctx)]
                 (swap! state assoc :canvas (.-canvas ctx))
                 (set! (.-enabled (.-shadowMap renderer)) true)
                 (sim/init-scene! (.-sceneRoot ctx))
                 (instanced/init-scene! (.-sceneRoot ctx))
                 (.setClearColor renderer sky-color)))))

(defn init []
  (init-scene))

(defn ^:dev/after-load reload []
  (init-scene))
