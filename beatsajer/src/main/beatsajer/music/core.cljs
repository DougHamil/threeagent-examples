(ns beatsajer.music.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<! chan put!]]
            [beatsajer.util.core :refer [log]]
            [beatsajer.state :refer [state]]
            [beatsajer.music.waveform :as waveform]
            [beatsajer.music.audio :as audio]))

(defn play-song! [package]
  (when-let [audio (:audio @state)]
    (.stop audio)
    (.unload audio)
    (.unload js/Howler))

  (let [song (update (:song package)
                     :_notes
                     (fn [ns] (map-indexed (fn [idx n] (assoc n :index idx)) ns)))]
    (swap! state assoc :song-name (:filename package))
    (swap! state assoc :song song)
    (swap! state assoc :hits #{})
    (swap! state assoc :beats-per-second (/ (:_beatsPerMinute song) 60.0))
    (swap! state assoc :audio (:audio package))
    (swap! state assoc :package package)
    (swap! state assoc :waveform (:waveform package))
    (waveform/generate-waveform (:waveform package) song)
    (.play (:audio package))
    (.rate (:audio package) (:playback-rate @state))))

(defn fetch-song [songname]
  (let [ch (chan)]
    (go (let [response (<! (http/get (str "/songs/" songname ".json") {:as :json}))]
          (let [song (as-> (:body response) a)
                a (<! (audio/fetch-audio (str "/songs/" songname ".ogg")))
                package {:song song
                         :audio (:howl a)
                         :waveform (:waveform a)
                         :filename songname}]
            (put! ch package))))
    ch))

(defn- read-file [file type]
  (let [ch (chan)
        reader (new js/FileReader)]
    (set! (.-onload reader) (fn [evt]
                              (put! ch (-> evt .-target .-result))))
    (case type
      :text (.readAsText reader file)
      :buffer (.readAsArrayBuffer reader file))
    ch))

(defn load-files [audio-file track-file]
  (let [ch (chan)]
    (go (let [track-data (<! (read-file track-file :text))
              audio-data (<! (read-file audio-file :buffer))
              audio-load-ch (chan)
              track (js->clj (.parse js/JSON track-data) :keywordize-keys true)]
          (audio/buffer->waveform-and-audio audio-load-ch audio-data)
          (let [res (<! audio-load-ch)
                package {:song track
                         :audio (:howl res)
                         :waveform (:waveform res)
                         :filename "Unknown"}]
            (put! ch package))))
    ch))
