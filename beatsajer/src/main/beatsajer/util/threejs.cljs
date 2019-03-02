(ns beatsajer.util.threejs)

(defn color
  ([s] (new js/THREE.Color s))
  ([r g b] (new js/THREE.Color r g b)))

(defn vec3
  ([[x y z]] (new js/THREE.Vector3 x y z))
  ([x y z] (new js/THREE.Vector3 x y z)))

(defn vec2
  ([[x y]] (new js/THREE.Vector2 x y))
  ([x y] (new js/THREE.Vector2 x y)))

(defn raycaster [origin dir near far]
  (new js/THREE.Raycaster origin dir near far))
