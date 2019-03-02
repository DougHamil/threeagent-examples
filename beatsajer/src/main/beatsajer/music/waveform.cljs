(ns beatsajer.music.waveform
  (:require [beatsajer.util.core :refer [log $ $!]]
            [beatsajer.state :refer [state]]
            [beatsajer.track :refer [units-per-beat]]
            [threeagent.alpha.core :as th]))
 
(defonce ^:private TILES (array))

(def ^:private tile-pixel-width 1024)
(def ^:private tile-pixel-height 128)
(def ^:private pixels-per-beat 50) ; Number of pixels used to render single beat
(def ^:private pixels-per-tile tile-pixel-width)

(defn- calc-num-tiles [waveform]
  (let [duration (.-duration waveform)
        pixels-per-second (.-pixels_per_second waveform)
        total-pixels (* duration pixels-per-second)]
    (.ceil js/Math (/ total-pixels pixels-per-tile))))

(defn- new-tile-mesh [texture]
  (let [geo (new js/THREE.PlaneGeometry 1 1 1 1)
        mat (new js/THREE.MeshBasicMaterial (clj->js {:map texture}))]
    (new js/THREE.Mesh geo mat)))

(defn- new-tile []
  (let [size (* tile-pixel-width tile-pixel-height)
        buffer (new js/Uint8Array (* 3 size))
        texture (new js/THREE.DataTexture buffer tile-pixel-width tile-pixel-height js/THREE.RGBFormat)]
    {:texture-buffer buffer
     :image-size size
     :texture texture
     :mesh (new-tile-mesh texture)}))

(defn- create-tiles [num-tiles]
  (when (> num-tiles (.-length TILES))
    (doseq [i (range (- num-tiles (.-length TILES)))]
      (.push TILES (new-tile)))))

(defn- fill-tile-column [buffer col start end r g b]
  (doseq [i (range (- end start))]
    (let [s (+ (* 3 col)
               (* (+ start i)
                  (* 3 tile-pixel-width)))]
        (aset buffer s r)
        (aset buffer (+ 1 s) g)
        (aset buffer (+ 2 s) b))))

(defn- render-tile [tile waveform start]
  (let [buffer (:texture-buffer tile)]
    (try
      (doseq [i (range tile-pixel-width)]
        (let [max-v (.max_sample waveform (+ start i))
              min-v (.min_sample waveform (+ start i))
              max-up-to (int (* tile-pixel-height (/ (+ 256 max-v) 512.0)))
              min-up-to (int (* tile-pixel-height (/ (+ 256 min-v) 512.0)))
              color (/ max-up-to tile-pixel-height)
              dither (rand-int 50)
              color-r (+ (* 205 (- 1.0 color)) dither)
              color-g (+ (* 205 color) dither)]
          (fill-tile-column buffer i 0 tile-pixel-height 0 0 0)
          (fill-tile-column buffer i min-up-to max-up-to color-r color-g (+ 195 (rand-int 50)))))
      (catch js/Error e)) ; Read past the waveform buffer...
    (set! (.-needsUpdate (:texture tile)) true)))
  
(defn generate-waveform [waveform song]
  (when waveform 
    (let [bps (/ (:_beatsPerMinute song) 60.0)
          num-tiles (calc-num-tiles waveform)]
      (create-tiles num-tiles)
      (doseq [i (range num-tiles)]
        (render-tile (aget TILES i) waveform (* tile-pixel-width i))))))

(defn render []
  (let [beat-time @(th/cursor state [:beat-time])
        shuffle @(th/cursor state [:song :_shuffle])
        beats-per-second @(th/cursor state [:beats-per-second])
        waveform @(th/cursor state [:waveform])]
    (if waveform
      (let [duration (.-duration waveform)
            pixels-per-second (.-pixels_per_second waveform)
            units-per-pixel (/ (* units-per-beat beats-per-second) pixels-per-second) 
            width (* units-per-pixel tile-pixel-width)
            height 2.8]
        [:object {:position [-3.5
                             -1.4
                             (* units-per-beat (+ beat-time 0))]}
         (for [i (range (.-length TILES))]
           (let [t (aget TILES i)]
             ^{:key i}
             [:object {:position [0 0 (- (* i width))]}
              [:instance {:scale [width height 1]
                          :position [0 0 (- (/ width 2.0))]
                          :rotation [(/ Math/PI -2.0) 0 (/ Math/PI 2.0)]
                          :object (:mesh t)}]]))])
      [:object])))
