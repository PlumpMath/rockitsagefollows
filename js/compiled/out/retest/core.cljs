(ns retest.core
    (:require-macros
      [cljs.core.async.macros :refer [go]])
    (:require
      [reagent.core :as reagent]
      [goog.net.XhrIo]
      [goog.string :as gstring]
      [goog.string.format]
      [cljs.core.async :refer [chan put! <!]]))

(def recentFollows (reagent/atom []))

(def my-audio (.getElementById js/document "myAudio"))

(defn id-of [follow]
  (-> follow .-user .-_id))

(defn twitch-profile-url [name]
  (str "http://www.twitch.tv/" name "/profile"))

(defn logo-or-default [user]
  (let [logo (-> user .-logo)]
    (if (nil? logo)
      "http://i.imgur.com/r7o9HUm.png"
      logo)))

(defn set-parent-background-color! [html-node color]
  (set! (-> html-node .-parentElement .-style .-backgroundColor) color))

(def weekmap ["Sun" "Mon" "Tues" "Wed" "Thurs" "Fri" "Sat"])

(defn parse-date [created_at]
  (let [datetime (new js/Date created_at)
        ampm (if (> (.getHours datetime) 12) "PM" "AM")]
    (str (weekmap (.getDay datetime)) ", "
      (.getMonth datetime) "-"
      (.getDate datetime) " "
      (gstring/format "%2d" (inc (mod (dec (.getHours datetime)) 12))) ":"
      (gstring/format "%02d" (.getMinutes datetime)) " " ampm)))

(def myTime (new js/Date "2015-09-21T01:30:32Z"))

(defn followsList []
  [:table
    (let [sorted-follows (reverse (sort-by #(-> % .-created_at) @recentFollows))]
      (for [follow sorted-follows]
        (let [id (id-of follow)
              display_name (-> follow .-user .-display_name)
              name (-> follow .-user .-name)
              created_at (-> follow .-created_at)
              logo (-> follow .-user logo-or-default)]
          ^{:key id}
          [:tr {:style {:background-color "#ACA"}
                :on-mouse-enter (fn [event] (set-parent-background-color! (-> event .-target) "white"))}
            [:td {:style {:border "solid black 1px"}}
              [:div {:style {:height "50px"}}
                [:a {:href (twitch-profile-url name)}
                  [:img {:src logo :width 50}]]]]
            [:td display_name]
            [:td (parse-date created_at)]])))])

(defn responseTextAsJson [event]
   (-> event .-target .getResponseText js/JSON.parse))

(defn in? [coll value]
  (some #(= value %) coll))

(defn remove-in [coll1 coll2]
  (remove #(in? (map id-of coll1) (id-of %)) coll2))

(defn channeled-http-get [url f]
  (let [out (chan)]
    (goog.net.XhrIo/send url (fn [event] (put! out (f event))))
    out))

(defn follows-request []
  (channeled-http-get
    "https://api.twitch.tv/kraken/channels/rockitsage/follows?limit=25"
    #(-> % responseTextAsJson .-follows)))

(defn unique-new-follows []
  (let [event (follows-request)
        out (chan)]
    (go (let [responseFollows (<! event)
              new-follows (remove-in @recentFollows responseFollows)]
      (put! out (vec new-follows))))
    out))

(defn init-follows []
  (go
    (doseq [follow (<! (unique-new-follows))]
      (swap! recentFollows conj follow))))

(defn more-follows []
  (go
    (doseq [follow (<! (unique-new-follows))]
      (.play my-audio)
      (swap! recentFollows conj follow))))

(defn ^:export run []
  (reagent/render [followsList]
    (.getElementById js/document "follows"))
  (init-follows)
  (js/setInterval more-follows 30000))
  ;;(let [c (chan)]
  ;;  (put! c 3)
  ;;  (go (js/console.log (<! c)))))
  ;;(js/setInterval getMoreFollows 60000))
