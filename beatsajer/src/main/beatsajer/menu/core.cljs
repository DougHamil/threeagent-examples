(ns beatsajer.menu.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [<!]]
            [beatsajer.state :refer [state]]
            [beatsajer.music.core :as music]
            [beatsajer.music.audio :as audio]
            [file-saver]
            [beatsajer.util.core :refer [log]]))

(defn- load-sample-song []
  (swap! state assoc :song-loading? true)
  (go
    (let [song (<! (music/fetch-song "werq"))]
      (swap! state assoc :song-loading? false)
      (music/play-song! song))))

(defn- load-user-song []
  (swap! state assoc :song-loading? true)
  (let [track-file (:user-track-file @state)
        audio-file (:user-audio-file @state)]
    (go (let [song (<! (music/load-files audio-file track-file))]
          (swap! state assoc :song-loading? false)
          (music/play-song! song)))))

(defn- save-song []
  (let [song (-> (:song @state)
                 (update :_notes (fn [ns] (map #(dissoc % :index) ns)))
                 (update :_obstacles #(or % []))
                 (update :_events #(or % [])))
        blob (js/Blob. [(.stringify js/JSON (clj->js song))]
                       (clj->js {:type "text/plain;charset=utf-8"}))]
    (file-saver/saveAs blob "track.json")))

(defn- toggle-pause []
  (audio/toggle-paused (:audio @state)))

(defn- toggle-mute []
  (audio/toggle-mute (:audio @state)))

(defn- debug-panel []
  [:div.debug-panel "Debug:"
   [:div "Current Beat: " (int @(r/cursor state [:beat-time]))]
   [:div (str "Selected Block:" @(r/cursor state [:selected-block-id]))]
   (let [beat @(r/cursor state [:pointed-at-beat])]
     [:div (str "Pointed Block:" (:index beat)  " , " (:_time beat))])])

(defn- key-hint [s]
  [:div.key-hint s])

(defn- controls []
  [:div.controls-panel
   "Controls:"
   [:div.shortcut
    [key-hint "Left Click"]
    "Place Block"]
   [:div.shortcut
    [key-hint "Right Click"]
    "Cycle Block Type"]
   [:div.shortcut
    [key-hint "Left Click + Drag"]
    "Rotate Block"]
   [:div.shortcut
    [key-hint "Del -or- Mouse 4"]
    "Delete Block"]
   [:div.shortcut
    [key-hint "Space"]
    "Pause/Resume Song"]
   [:div.shortcut
    [key-hint "Scroll"]
    "Scrub Song by 1/4 Beat"]
   [:div.shortcut
    [key-hint "Ctrl + Scroll"]
    "Scrub Song by Beat"]])

(defn- main-menu []
  [:div {:style {"marginTop" "50px"}}
   [:h3 @(r/cursor state [:song-name])]
   [:hr]
   [:button {:on-click save-song} "Save Track"]
   [:br]
   [:button {:on-click toggle-pause}
    "Pause"]
   [:button {:on-click toggle-mute}
    "Mute"]
   [:button {:on-click #(.seek (:audio @state) 0)}
    "Restart"]
   [:br]
   [:div 
    [:input {:type "checkbox"
             :checked @(r/cursor state [:show-grid?])
             :on-change #(swap! state update :show-grid? not)}]
    "Show Grid"]
   (when-let [song @(r/cursor state [:song])]
     [:div
      [:div (str "BPM: " (:_beatsPerMinute song))]
      [:div (str "Shuffle: " (:_shuffle song))]])
   (when-let [audio @(r/cursor state [:audio])]
     [:div (str "Playback Rate: " @(r/cursor state [:playback-rate]))
      [:input {:type "range"
               :max 2.0
               :min 0.0
               :step 0.1
               :on-change (fn [e]
                            (let [v (.-value (.-target e))]
                              (swap! state assoc :playback-rate v)
                              (.rate (:audio @state) v)))
               :value @(r/cursor state [:playback-rate])}]])
   [controls]
   [debug-panel]])

(defn- song-selection-dialog []
  [:div.song-selection-dialog
   (if @(r/cursor state [:song-loading?])
     [:h2 "Loading..."]
     [:div
      [:h2 "Select a Song"]
      [:hr]
      [:div.group-container 
       [:div "Audio File (.ogg):"
        [:input {:type "file"
                 :accept ".ogg"
                 :on-change #(let [file (-> % .-target .-files (aget 0))]
                               (swap! state assoc :user-audio-file file))
                 :id "audio-file"
                 :name "audio-file"}]]
       [:div "Track File (.json):"
        [:input {:type "file"
                 :accept ".json"
                 :on-change #(let [file (-> % .-target .-files (aget 0))]
                               (swap! state assoc :user-track-file file))
                 :id "track-file"
                 :name "track-file"}]]
       [:button {:on-click load-user-song
                 :disabled (not (and @(r/cursor state [:user-track-file])
                                     @(r/cursor state [:user-audio-file])))}
        "Load"]]
      [:div {:style {:width "100%"
                     :text-align "center"}}
       "OR"]
      [:div.group-container
       [:button {:on-click load-sample-song} "Load Sample Song"]]])])

(defn root []
  [:div
   (if @(r/cursor state [:audio])
     [main-menu]
     [song-selection-dialog])])

(defn on-key-up [evt]
  (case (.-key evt)
    " " (do
          (toggle-pause)
          (.preventDefault evt))
    nil))

(defn on-key-down [evt]
  (when (and (or (.-ctrlKey evt)
                 (.-metaKey evt))
             (= "s" (.-key evt)))
    (save-song)
    (.preventDefault evt)))

(defn on-key-press [evt])

(defn init []
  (r/render [root]
            (.getElementById js/document "ui-root"))
  (.addEventListener js/window "keyup" on-key-up false)
  (.addEventListener js/window "keydown" on-key-down false)
  (.addEventListener js/window "keypress" on-key-press false))

(defn ^:dev/after-load reload []
  (r/render [root]
            (.getElementById js/document "ui-root")))



