(ns pong.app
  (:require [threeagent.alpha.core :as th]
            [reagent.core :as r]))

(def paddle-velocity 5.0)
(defonce state (th/atom {:ball-velocity [8.0 0.0]
                         :ball-acceleration 1
                         :ball-radius 0.5
                         :points {:left 0
                                  :right 0}
                         :paddle {:right {:height 3.0
                                          :position [10 0]}
                                  :left  {:height 3.0
                                          :position [-10 0]}}
                         :ball-position [0 0]}))
(def world-scale 1.0)


(defn paddle [side]
  (let [[x-pos y-pos] @(th/cursor state [:paddle side :position])
        height @(th/cursor state [:paddle side :height])]
    [:box {:scale [0.5 height 0.2]
           :position [x-pos y-pos 0]}]))

(defn ball []
  (let [[x y] @(th/cursor state [:ball-position])
        radius @(th/cursor state [:ball-radius])]
    [:sphere {:radius radius
              :position [x y 0]}]))

(defn root []
  [:object
   [:hemisphere-light {:intensity 0.8
                       :position [0 0 -1]}]
   [:point-light {:intensity 1.8
                  :position [1 5 -10]}]
   [:object {:position [0 0 -10]
             :scale [world-scale world-scale 1]}
    [ball]
    [:box {:position [0 -5 0]
           :scale [100 0.25 1]}]
    [:box {:position [0 5 0]
           :scale [100 0.25 1]}]
    [paddle :left]
    [paddle :right]]])

(defn- dist [[x1 y1] [x2 y2]]
  (let [dx (- x1 x2)
        dy (- y1 y2)]
    (.sqrt js/Math (+ (* dx dx) (* dy dy)))))

(defn- point-on-line? [[x1 y1] [x2 y2] [px py]]
  (let [d1 (dist [x1 y1] [px py])
        d2 (dist [x2 y2] [px py])
        l (dist [x1 y1] [x2 y2])
        d (+ d1 d2)]
    (and (>= d (- l 0.1))
         (<= d (+ l 0.1)))))

(defn- point-in-circle? [c-pos c-radius p]
  (>= c-radius (dist c-pos p)))

(defn- line-circle-collision? [[x1 y1] [x2 y2] [cx cy] r]
  (let [dx (- x1 x2)
        dy (- y1 y2)
        len (.sqrt js/Math (+ (* dx dx) (* dy dy)))
        dot (/ (+ (* (- cx x1) (- x2 x1))
                  (* (- cy y1) (- y2 y1)))
               (.pow js/Math len 2))
        close-x (+ x1 (* dot (- x2 x1)))
        close-y (+ y1 (* dot (- y2 y1)))
        d (dist [close-x close-y] [cx cy])]
    (or (point-in-circle? [cx cy] r [x1 y1])
        (point-in-circle? [cx cy] r [x2 y2])
        (and (point-on-line? [x1 y1] [x2 y2] [close-x close-y])
             (>= r d)))))

(defn- ball-paddle-collide? [[bx by] ball-radius [px py] paddle-height]
  (let [line-start [px (+ py (/ paddle-height 2.0))]
        line-end [px (- py (/ paddle-height 2.0))]]
    (line-circle-collision? line-start line-end [bx by] ball-radius)))

(defn- ball-wall-collide? [ball-pos ball-radius]
  (let [line-start-top [-10 5]
        line-end-top [10 5]
        line-start-bottom [-10 -5]
        line-end-bottom [10 -5]]
    (or (line-circle-collision? line-start-top line-end-top ball-pos ball-radius)
        (line-circle-collision? line-start-bottom line-end-bottom ball-pos ball-radius))))

(defn- ball-out? [[bx by]]
  (if (> bx (+ (get-in @state [:paddle :right :position 0]) 5))
    :left
    (when (< bx (- (get-in @state [:paddle :left :position 0]) 5))
      :right)))

(defn- update-paddles! [delta-time]
  (doseq [p [:left :right]]
    (let [[px py] (get-in @state [:paddle p :position])
          velocity (get-in @state [:paddle p :velocity])
          new-py (+ py (* delta-time velocity))]
      (swap! state assoc-in [:paddle p :position] [px new-py]))))

(defn- update-ball! [delta-time]
  (let [[vel-x vel-y] (:ball-velocity @state)
        [x y] (:ball-position @state)
        ball-radius (:ball-radius @state)
        ball-pos [(+ x (* vel-x delta-time))
                  (+ y (* vel-y delta-time))]
        paddle (if (pos? vel-x) :right :left)
        paddle-height (get-in @state [:paddle paddle :height])
        paddle-pos (get-in @state [:paddle paddle :position])]
    (if (ball-paddle-collide? ball-pos ball-radius paddle-pos paddle-height)
      (swap! state assoc :ball-velocity [(- vel-x) (+ vel-y (rand 1.0))])
      (if-let [side (ball-out? ball-pos)]
        (do
          (swap! state update-in [:points side] inc)
          (swap! state assoc :ball-velocity [5.0 0])
          (swap! state assoc :ball-position [0 0]))
        (if (ball-wall-collide? ball-pos ball-radius)
          (swap! state assoc :ball-velocity [vel-x (- vel-y)])
          (swap! state assoc :ball-position ball-pos))))))

(defn- tick [delta-time]
  (update-paddles! delta-time)
  (update-ball! delta-time))
                                       
(defn on-keydown [evt]
  (case (.-code evt)
    "ArrowUp" (do
                (.preventDefault evt)
                (swap! state assoc-in [:paddle :right :velocity] paddle-velocity))
    "ArrowDown" (do
                  (.preventDefault evt)
                  (swap! state assoc-in [:paddle :right :velocity] (- paddle-velocity)))
    "KeyW" (do
             (.preventDefault evt)
             (swap! state assoc-in [:paddle :left :velocity] paddle-velocity))
    "KeyS" (do
             (.preventDefault evt)
             (swap! state assoc-in [:paddle :left :velocity] (- paddle-velocity)))
    nil))

(defn- on-keyup [evt]
  (case (.-code evt)
    "ArrowUp" (swap! state assoc-in [:paddle :right :velocity] 0)
    "ArrowDown" (swap! state assoc-in [:paddle :right :velocity] 0)
    "KeyW" (swap! state assoc-in [:paddle :left :velocity] 0)
    "KeyS" (swap! state assoc-in [:paddle :left :velocity] 0)
    nil))

(defn- ui-root []
  [:div
   [:span.player-score
    (str "Player 1: " @(r/cursor state [:points :left]))]
   [:span.player-score {:style {:float "right"}}
    (str "Player 2: " @(r/cursor state [:points :right]))]])

(defn init []
  (let [scene (th/render [root]
                         (.getElementById js/document "root")
                         {:on-before-render tick
                          :ortho-camera? false})]
    (swap! state assoc :scene scene)
    (.addEventListener js/window "keydown" on-keydown)
    (.addEventListener js/window "keyup" on-keyup))
  (r/render [ui-root]
            (.getElementById js/document "ui-root")))

(defn ^:dev/after-load reload []
  (th/reload-scene (:scene @state) root {:on-before-render tick})
  (r/render [ui-root]
            (.getElementById js/document "ui-root")))



