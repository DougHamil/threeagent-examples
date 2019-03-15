(ns castle.app
  (:require [threeagent.alpha.core :as th]
            ["three" :as three]
            [reagent.core :as r]
            [cljs.core.async :refer [chan put! >! <!]]
            [castle.models :as models])
  (:require-macros [cljs.core.async :refer [go]]))

(defonce state (th/atom {:time 0
                         :knight-count 10
                         :castle-length 5
                         :castle-width 5}))
(def wall-size 10.0)
(defonce pi-over-2 (/ js/Math.PI 2.0))

(defn log [v] (.log js/console v))

(def directional-light (new three/DirectionalLight 0xFFFFFF 1.0))

;; Setup shadow
(set! (.-castShadow directional-light) true)
(.set (.-position (.-target directional-light)) 20 -10 1)
(let [shadow (.-shadow directional-light)]
  (set! (.-x (.-mapSize shadow)) 1024)
  (set! (.-y (.-mapSize shadow)) 1024)
  (set! (.-enabled shadow) true)
  (set! (.-bias shadow) 0.00001))
(let [shadow-cam (.-camera (.-shadow directional-light))]
  (set! (.-near shadow-cam) 1)
  (set! (.-left shadow-cam) -10)
  (set! (.-bottom shadow-cam) -10)
  (set! (.-right shadow-cam) 10)
  (set! (.-top shadow-cam) 10)
  (set! (.-far shadow-cam) 200))

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
             :position [0 0 wall-size]}]]
   [:object {:rotation [0 (* 2.0 pi-over-2) 0]
             :position [(* wall-size width) 0 (* (- (- length 2)) wall-size)]}
    [:model {:type "wall-corner"
             :position [0 0 wall-size]}]]
   [:object {:rotation [0 (* 3.0 pi-over-2) 0]
             :position [wall-size 0 (* (- (- length 1)) wall-size)]}
    [:model {:type "wall-corner"
             :position [0 0 wall-size]}]]
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

(defn ocean []
  (let [time @(th/cursor state [:time])]
    [:object {:position [-5.0 -4.8 10.0]}
     [:plane {:position [0 -0.2 0]
              :scale [200 100 100]
              :rotation [(* -1.0 pi-over-2) 0 0]
              :material {:color 0x4488FF}}]
     (for [x (range 20)]
       (for [y (range 20)]
         ^{:on-added #(do (set! (.-receiveShadow %) true))}
         [:box {:position [x
                           (* (.sin js/Math (+ y x time)) 0.1)
                           (- y)]
                :material {:color 0x4488FF}}]))]))

(defn ground [width length]
  [:object {:position [-1.0 -0.5 2.0]}
   (for [x (range width)]
     (for [y (range length)]
       ^{:on-added #(set! (.-receiveShadow %) true)}
       [:box {:position [x
                         (* (.sin js/Math (+ y x (rand 2.0))) 0.04)
                         (- y)]
              :material {:color 0x88FF88}}]))])

(defn catapults [width]
  (let [catapult-count 5]
    [:object {:scale [0.08 0.08 0.08]
              :position [0 0 1.7]}
     (for [i (range catapult-count)]
       [:model {:type "catapult"
                :position [(* wall-size (rand width)) 0 0]
                :rotation [0 (rand 3.14) 0]}])]))

(defn knights [width length]
  (let [knight-count @(th/cursor state [:knight-count])]
    [:object {:scale [0.1 0.1 0.1]
              :position [0 0 (- (* 0.1 length))]}
     (for [i (range knight-count)]
       (let [x (rand-int width)
             y (rand-int length)]
         [:model {:type "knight-red"
                  :rotation [0 (* 2.0 pi-over-2) 0]
                  :position [(* wall-size x) 0 (- (* wall-size y))]}]))]))

(defn castle []
  (let [castle-width @(th/cursor state [:castle-width])
        castle-length @(th/cursor state [:castle-length])]
    [:object {:position [0 -4 0]}
     [ground (+ castle-width 3) (+ castle-length 3)]
     [knights castle-width castle-length]
     [catapults castle-width]
     [:object {:scale [0.1 0.1 0.1]}
      [castle-square castle-width castle-length]]]))


(defn lights []
  [:object
   [:hemisphere-light {:intensity 0.3}]
   ^{:on-added #(.add directional-light (.-target directional-light))}
   [:instance {:object directional-light
               :position [-10 2 -8]}]])


(defn camera []
  (let [castle-width @(th/cursor state [:castle-width])]
    (if-let [camera @(th/cursor state [:camera])]
      [:instance {:object camera
                  :rotation [(- (* 0.4 pi-over-2)) 0 0]
                  :position [(/ castle-width 2.0) 2 5]}]
      [:object])))
(defn scene []
   [:object 
    [camera]
    [ocean]
    [castle]])

(defn root []
  [:object
   [lights]
   [scene]])

(defn- tick [delta-time]
  (swap! state update :time + delta-time))

(defn- ui-root []
  [:div
   [:div
    [:span "Knight Count:"]
    [:input {:type "number"
             :value @(r/cursor state [:knight-count])
             :on-change #(swap! state assoc :knight-count (-> % .-target .-value js/parseInt))}]]
   [:div
    [:span "Width:"]
    [:input {:type "number"
             :value @(r/cursor state [:castle-width])
             :on-change #(swap! state assoc :castle-width (-> % .-target .-value js/parseInt))}]]
   [:div
    [:span "Length:"]
    [:input {:type "number"
             :value @(r/cursor state [:castle-length])
             :on-change #(swap! state assoc :castle-length (-> % .-target .-value js/parseInt))}]]])

(defn- init-scene []
  (let [context (th/render [root]
                           (.getElementById js/document "root")
                           {:on-before-render tick})
        renderer (.-renderer context)
        scene (.-sceneRoot context)]
    (swap! state assoc :renderer renderer)
    (swap! state assoc :camera (.-camera context))
    (set! (.-fog scene) (new three/Fog 0xAA88BB 9.0 40.0))
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



