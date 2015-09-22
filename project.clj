(defproject retest "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [reagent "0.5.0"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.9" :exclusions [cider/cider-nrepl]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/cljs"]
              :figwheel {:on-jsload "retest.core/main"}
              :compiler {:main retest.core
                         :output-to "resources/public/js/compiled/app.js"
                         :output-dir "resources/public/js/compiled/out"
                         :asset-path "js/compiled/out"
                         :source-map-timestamp true}}
             {:id "min"
              :source-paths ["src/cljs"]
              :compiler {:main retest.core
                         :output-to "resources/public/js/compiled/app.js"
                         :optimizations :advanced
                         :pretty-print false}}]})
