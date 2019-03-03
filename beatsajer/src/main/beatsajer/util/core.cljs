(ns beatsajer.util.core)

(defn log [m] (.log js/console m))

(defn add-event-listener [o k cb] (.addEventListener o k cb))
