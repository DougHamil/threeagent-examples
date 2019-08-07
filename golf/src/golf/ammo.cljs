(ns golf.ammo)

(defn vec3 [^js a x y z]
  (new (.-btVector3 a) x y z))

(defn quat [^js a x y z w]
  (new (.-btQuaternion a) x y z w))

(defn world [^js a]
  (let [c ^js (new (.-btDefaultCollisionConfiguration a))
        dispatcher ^js (new (.-btCollisionDispatcher a) c)
        pair-cache ^js (new (.-btDbvtBroadphase a))
        solver ^js (new (.-btSequentialImpulseConstraintSolver a))
        world ^js (new (.-btDiscreteDynamicsWorld a) dispatcher pair-cache solver c)]
    (.setGravity world (vec3 a 0 -9.8 0))
    world))

(defn transform [^js a]
  (new (.-btTransform a)))

(defn box-shape [^js a x y z]
  (new (.-btBoxShape a) (vec3 a x y z)))

(defn sphere-shape [^js a r]
  (new (.-btSphereShape a) r))

(defn rigid-body [^js a ^js shape ^js transform mass friction rolling-friction restitution]
  (let [local-int ^js (vec3 a 0 0 0)
        motion-state ^js (new (.-btDefaultMotionState a) transform)]
    (when (not= 0.0 mass)
      (.calculateLocalInertia shape mass local-int))
    (let [con-info ^js (new (.-btRigidBodyConstructionInfo a) mass motion-state shape local-int)]
      (.set_m_friction con-info friction)
      (.set_m_rollingFriction con-info rolling-friction)
      (.set_m_restitution con-info restitution)
      (let [body ^js (new (.-btRigidBody a) con-info)]
        body))))

(defn create-shape [^js a ^js cfg]
  (case (.-shape cfg)
    "box" (let [[sx sy sz] (.-size cfg)]
              (box-shape a sx sy sz))
    "sphere" (sphere-shape a (.-radius cfg))))

(defn create-rigid-body [^js a ^js cfg [x y z] [rx ry rz rw]]
  (let [shape ^js (create-shape a cfg)
        t ^js (transform a)]
    (.setOrigin t (vec3 a x y z))
    (.setRotation t (quat a rx ry rz rw))
    (rigid-body a shape t (.-mass cfg) (or (.-friction cfg) 0.5)
                (or (.-rollingFriction cfg) 0)
                (or (.-restitution cfg) 0))))

(defn ground [^js a]
  (let [shape ^js (box-shape a 50 0.001 50)
        t ^js (transform a)]
    (.setIdentity t)
    (.setOrigin t (vec3 a 0 0 0))
    (rigid-body a shape t 0 0.5 0 0)))

(defn write-pose [^js a ^js xform ^js body idx ^js buffer]
  (when-let [ms ^js (.getMotionState body)]
    (.getWorldTransform ms xform)
    (let [o ^js (.getOrigin xform)
          r ^js (.getRotation xform)]
      (aset buffer idx (.x o))
      (aset buffer (+ idx 1) (.y o))
      (aset buffer (+ idx 2) (.z o))
      (aset buffer (+ idx 3) (.x r))
      (aset buffer (+ idx 4) (.y r))
      (aset buffer (+ idx 5) (.z r))
      (aset buffer (+ idx 6) (.w r)))))
