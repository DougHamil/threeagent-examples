(ns aoc.ui
  (:require [reagent.core :as r]
            [aoc.state :refer [state postfx-state]]))


(defn kart-selector [kart]
  [:div
   [:input {:type "radio"
            :name "follow-kart"
            :checked (= (:id kart)
                        @(r/cursor state [:follow-kart-id]))
            :on-change #(do
                          (swap! postfx-state assoc :focus 0.85)
                          (swap! state assoc :follow-kart-id (:id kart)))}]
   [:span
    [:span (str (:id kart) " - " (:coords kart))]
    (when (= :crashed (:state kart))
      [:img {:src "fire.png"
             :style {:width "20px"}}])]])

(defn karts []
  [:div
   [:div "Karts"]
   [:input {:type "radio"
            :name "follow-kart"
            :checked (nil? @(r/cursor state [:follow-kart-id]))
            :on-change #(do
                          (swap! postfx-state assoc :focus 1.0)
                          (swap! state assoc :follow-kart-id nil))}]
   [:span "None"]
   (for [kart @(r/cursor state [:karts])]
     ^{:key (:id kart)}
     [kart-selector kart])])

(defn input []
  [:div
   [:div
    [:label "Focus:"]
    [:input {:type "range"
             :style {:float "right"
                     :width "300px"}
             :min "0.6"
             :max "1.0"
             :step "0.005"
             :value @(r/cursor postfx-state [:focus])
             :on-change #(swap! postfx-state assoc :focus (-> % .-target .-value js/parseFloat))}]]
   [:br]
   [:div
    [:label "Speed:"]
    [:input {:type "range"
             :min "-1"
             :style {:float "right"
                     :width "300px"}
             :max "1"
             :step "0.05"
             :value @(r/cursor state [:simulation-speed-scale])
             :on-change #(swap! state assoc :simulation-speed-scale (-> % .-target .-value js/parseFloat))}]]
   [:br]])
    
    

(defn info []
  [:div
   [:label (str "Current Tick: " (int @(r/cursor state [:sim-time])))]])

(defn root []
  [:div {:style {:background-color "rgba(0, 0, 0, 0.2)"
                 :padding "10px"
                 :color "white"}}
   [info]
   [:hr]
   [input]
   [:hr]
   [karts]])

(defn init! []
  (r/render root (.getElementById js/document "ui-root")))


(defn reload []
  (r/render root (.getElementById js/document "ui-root")))

(comment
  (:focus @state))

