(ns beatsajer.music.audio
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [beatsajer.util.core :refer [$ $! log]]
            [beatsajer.state :refer [state]]
            [cljs.core.async :refer [<! chan put!]]
            ["waveform-data/webaudio" :as webaudio-builder]))

(defn load [filepath]
  (js/Howl. (clj->js {:src (array filepath)})))

(defn load-from-buffer [buffer]
  (let [data-uri (str "data:audio/ogg;base64," (.base64ArrayBuffer js/window buffer))]
    (load data-uri)))

(defn waveform-from-buffer [buffer]
  (let [c (chan)]
    (webaudio-builder (.-ctx js/Howler)
                      (.slice buffer 0)
                      (fn [err wave] (put! c wave)))
    c))

(defn buffer->waveform-and-audio [c buffer]
  (let [buffer-copy (.slice buffer 0)]
    (webaudio-builder (.-ctx js/Howler)
                      buffer
                      (fn [err wave]
                        (put! c {:waveform wave
                                 :howl (load-from-buffer buffer-copy)})))))

(defn fetch-audio [filepath]
  (let [c (chan)]
    (.then
     (.fetch js/window filepath)
     (fn [r]
       (.then (.arrayBuffer r)
              (partial buffer->waveform-and-audio c))))
    c))

(defn toggle-paused [audio]
  (when audio
    (if (.playing audio)
      (.pause audio)
      (.play audio))))

(defn toggle-mute [audio]
  (when audio
    (.mute audio (not (.mute audio)))))

(defn init []
  ;; This initializes the Howler audio context
  (.volume js/Howler 1.0))
