(ns example.virtual-window
  (:require [threeagent.alpha.core :as th]
            ["three" :as three])
  (:require-macros [threeagent.alpha.macros :refer [defcomponent]]))

(defonce ^:private windows (atom {}))

(defn- log [o]
  (js/console.log o))

(defn- resize-editor-geo! [window-id]
  (let [{:keys [video parent mesh]} (get @windows window-id)
        w (max (-> video .-videoWidth) 1.0)
        h (max (-> video .-videoHeight) 1.0)
        ppu (or (.-pixelsPerUnit parent) 1080.0)]
    (.set (.-scale mesh)
          (/ w ppu)
          (/ h ppu)
          1)))

(defn- on-media-stream-selected [window-id stream]
  (let [tracks (.getVideoTracks stream)
        {:keys [video]} (get @windows window-id)]
    (swap! windows update window-id assoc :media-stream stream)
    (.setAttributeNode video (.createAttribute js/document "autoplay"))
    (set! (.-srcObject video) stream)
    (.setTimeout js/window (partial resize-editor-geo! window-id) 50)))

(defn- ask-for-media-stream! [window-id]
  (let [p (-> js/navigator .-mediaDevices (.getDisplayMedia (clj->js {:video true})))]
    (.then p (partial on-media-stream-selected window-id))
    (.catch p #(log %))))

(defn- create-video-element []
  (-> js/document
      (.createElement "video")))

(defn- create-window [id]
  (println "CREATING WINDOW")
  (let [video (create-video-element)
        geo (three/PlaneGeometry. 1 1 1)
        texture (three/VideoTexture. video)
        mat (three/MeshBasicMaterial. (clj->js {:map texture
                                                :transparent true
                                                :opacity 1.0}))
        mesh (three/Mesh. geo mat)
        parent (three/Object3D.)]
    (ask-for-media-stream! id)
    (.add parent mesh)
    {:mesh mesh
     :parent parent
     :video video}))

(defn- fetch-window [id]
  (when (nil? (get @windows id))
    (swap! windows assoc id (create-window id)))
  (get @windows id))

(defcomponent :virtual-window [{:keys [id pixels-per-unit opacity]}]
  (let [{:keys [parent mesh]} (fetch-window id)]
    (set! (.-pixelsPerUnit parent)
          (or pixels-per-unit 1080.0))
    (set! (.-opacity (-> mesh .-material))
          (or opacity 1.0))
    parent))
