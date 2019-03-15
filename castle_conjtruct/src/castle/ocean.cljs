(ns castle.ocean
  (:require ["three" :as three]))

(defonce ^:private box-geo (three/BoxBufferGeometry. 1 1 1))
(defonce ^:private geo (three/InstancedBufferGeometry.))
(defonce ^:private offsets (array))
(defonce ^:private orientations (array))
(defonce ^:private ^:dynamic *offset-attribute* nil)
(defonce width 50)
(defonce length 50)

(when (nil? *offset-attribute*)
  (set! (.-index geo) (.-index box-geo))
  (set! (.-position (.-attributes geo)) (.-position (.-attributes box-geo)))
  (set! (.-normal (.-attributes geo)) (.-normal (.-attributes box-geo)))
  (set! (.-uv (.-attributes geo)) (.-uv (.-attributes box-geo)))
  
  (doseq [x (range width)]
    (doseq [y (range length)]
      (.push offsets x 0.0 y)))

  (set! *offset-attribute* (doto (three/InstancedBufferAttribute. (js/Float32Array. offsets) 3)
                                 (.setDynamic true)))
  (.addAttribute geo "offset" *offset-attribute*))

(defonce ^:private material (three/MeshPhongMaterial. (clj->js {:color 0x4488FF
                                                                :shininess 0})))
(set! (.-onBeforeCompile material) (fn [shader]
                                     (let [new-shader (str "attribute vec3 offset;\n" (.-vertexShader shader))
                                           new-shader (.replace new-shader
                                                                "#include <begin_vertex>"
                                                                "vec3 transformed = vec3(position + offset);")]
                                       (set! (.-vertexShader shader) new-shader)
                                       (set! (.-materialShader material) shader))))
(defonce ^:private mesh (three/Mesh. geo material))
(set! (.-frustumCulled mesh) false)
(set! (.-receiveShadow mesh) true)


(defn render []
  [:instance {:object mesh
              :position [(- (/ width 2.0)) -5.2 (- (- length 4))]}])

(defonce ^:private cur-vec (three/Vector3. 0 0 0))
(defn tick [time]
  (doseq [i (range (.-count *offset-attribute*))]
    (.fromArray cur-vec (.-array *offset-attribute*) (* 3 i))
    (let [x (mod i length)
          y (/ i width)
          t (* 0.1 (.sin js/Math (+ x y time)))]
      (.setXYZ *offset-attribute* i (.-x cur-vec) t (.-z cur-vec))))
  (set! (.-needsUpdate *offset-attribute*) true))
