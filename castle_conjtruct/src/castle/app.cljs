(ns castle.app
  (:require [threeagent.alpha.core :as th]
            ["three" :as three]
            [reagent.core :as r]
            [posh.reagent :refer [pull q posh!]]
            [cljs.core.async :refer [chan put! >! <!]]
            [datascript.core :as d]
            [castle.ocean :as ocean]
            [castle.agent :as agent]
            [castle.models :as models])
  (:require-macros [cljs.core.async :refer [go]]))

(defonce schema {:player/id {:db/unique :db.unique/identity}})
(defonce conn (d/create-conn schema))
(posh! conn)

(defonce state (th/atom {:time 0
                         :ocean-amplitude 0.1
                         :king-agent {:current-position (three/Vector3. 0 0 0)
                                      :target-position (three/Vector3. 0 0 0)
                                      :start-position (three/Vector3. 0 0 0)
                                      :start-time 0}
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
(defn king []
  (let [agent @(th/cursor state [:king-agent])
        player-color @(pull conn '[:player/color] [:player/id 1])]
    [:model {:type "king"
             :position [(.-x (:current-position agent)) -3.2 (.-z (:current-position agent))]
             :rotation [0 (* 2.0 pi-over-2) 0]
             :scale [0.1 0.1 0.1]}
     [:box {:material {:color (or (:player/color player-color) "red")}
            :scale [10 10 10]}]]))

(defn camera []
  (let [castle-width @(th/cursor state [:castle-width])]
    [:camera {:fov 90
              :aspectRatio (/ 16 9)
              :near 0.1
              :far 1000
              :position [(/ castle-width 2.0) 1 4]
              :rotation [-1.0 0 0]}]))

(defn scene []
  [:object 
   [camera]
   [ocean/render]
   [castle]
   [king]])

(defn root []
  [:object
   [lights]
   [scene]])

(defn- tick [delta-time]
  (swap! state update :time + delta-time)
  (ocean/tick (:time @state) (:ocean-amplitude @state))
  (agent/tick state (+ (:time @state) delta-time)))

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
             :on-change #(swap! state assoc :castle-length (-> % .-target .-value js/parseInt))}]]
   [:div
    [:span "Ocean Amp:"]
    [:input {:type "number"
             :step "0.1"
             :value @(r/cursor state [:ocean-amplitude])
             :on-change #(swap! state assoc :ocean-amplitude (-> % .-target .-value js/parseFloat))}]]])

(def sky-color 0xDDDDDD)
(defn- init-scene []
  (let [context (th/render [root]
                           (.getElementById js/document "root")
                           {:on-before-render tick})
        renderer (.-renderer context)
        scene (.-sceneRoot context)]
    (swap! state assoc :context context)
    (swap! state assoc :renderer renderer)
    (swap! state assoc :camera (.-camera context))
    (set! (.-fog scene) (new three/Fog sky-color 10.0 40.0))
    (set! (.-enabled (.-shadowMap renderer)) true)
    (set! (.-type (.-shadowMap renderer)) three/PCFSoftShadowMap)
    (.setClearColor renderer sky-color 1))
  (r/render [ui-root]
            (.getElementById js/document "ui-root")))
(defn init []
  (go (<! (models/init!))
      (init-scene)))

(defn ^:dev/after-load reload []
  (init-scene))

(comment
  (d/transact! conn [{:player/id 1
                      :player/color "green"}])
  (d/transact! conn [{:player/id 1
                      :player/color "red"}])
  (let [agent (:king-agent @state)
        agent (assoc agent :start-time (:time @state))]
    (.set (:target-position agent) -6 0 0)
    (.copy (:start-position agent) (:current-position agent))
    (swap! state assoc :king-agent agent))
  (log (.-camera (:context @state))))
