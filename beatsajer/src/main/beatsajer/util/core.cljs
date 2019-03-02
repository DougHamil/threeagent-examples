(ns beatsajer.util.core)

(defn $ [o k] (when o (aget o k)))
(defn $! [o k v] (when o (aset o k v)))
(defn log [m] (.log js/console m))

(defn add-event-listener [o k cb] (.addEventListener o k cb))
