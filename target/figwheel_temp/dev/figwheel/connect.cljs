(ns figwheel.connect (:require [retest.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/retest.core.main (apply js/retest.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'retest.core/main' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

