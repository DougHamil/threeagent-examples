(ns example.app
  (:require [example.virtual-window :as virtual-window]
            [threeagent.alpha.core :as th]))

;; State
(defonce state (th/atom {:time 0
                         :editor-visible? true}))


(defn editor-window []
  (let [time @(th/cursor state [:time])]
   [:virtual-window {:position [0.5 1 (+ -3.0 (* 2 (js/Math.sin time)))]
                     :rotation [0
                                (* 0.1 (js/Math.sin (* 2 time)))
                                0]
                     :pixels-per-unit 700
                     :opacity (+ 1.8 (js/Math.sin time))}]))

(defn tree [height]
  (let [leaf-size (* 0.6 height)]
    [:object
     ;; Trunk
     [:box {:scale [0.5 height 0.5]
            :material {:color 0xDD8833
                       :specular 0.0}}]
     ;; Leaves
     [:sphere {:scale [leaf-size leaf-size leaf-size]
               :position [0 (* 0.75 height) 0]
               :material {:color "green"
                          :specular 0.0}}]]))

(defn world []
  [:object {:position [0 0 -10]}
   [:box {:position [0 -2 0]
          :scale [20 0.1 20]
          :material {:color "green"}}]
   (for [i (range 50)]
     (let [x (+ -5 (rand 10))
           height (+ 1.0 (rand 2.0))
           z (+ -5 (rand 10))]
       ^{:key i}
       [:object {:position [x 0 z]}
        [tree height]]))])
   
(defn root []
  [:object 
   [:hemisphere-light {:position [0 10 10]
                       :intensity 0.4}]
   [:point-light {:position [0 1 10]
                  :intensity 1.0}]
   [editor-window]
   [world]])

(defn tick [delta-time]
  (swap! state update :time + delta-time))

;; Create threeagent scene
(defn init-scene []
  (let [ctx (th/render root
                       (.getElementById js/document "root")
                       {:on-before-render tick})
        renderer (.-renderer ctx)]
    ;; Enable VR
    (set! (.-enabled (.-vr renderer)) true)
    (.setClearColor renderer 0xCCDDFF)
    (.appendChild js/document.body (.createButton js/window.WEBVR renderer))))

(defn ^:dev/after-load reload []
  (init-scene))

(defn init []
  (init-scene))
