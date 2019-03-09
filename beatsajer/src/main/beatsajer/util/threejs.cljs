(ns beatsajer.util.threejs
  (:require ["three" :as three]))

(defn color
  ([s] (new three/Color s))
  ([r g b] (new three/Color r g b)))

(defn vec3
  ([[x y z]] (new three/Vector3 x y z))
  ([x y z] (new three/Vector3 x y z)))

(defn vec2
  ([[x y]] (new three/Vector2 x y))
  ([x y] (new three/Vector2 x y)))

(defn raycaster [origin dir near far]
  (new three/Raycaster origin dir near far))
