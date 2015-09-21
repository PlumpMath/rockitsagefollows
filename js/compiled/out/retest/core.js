// Compiled by ClojureScript 1.7.122 {}
goog.provide('retest.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.net.XhrIo');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
retest.core.recentFollows = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
retest.core.my_audio = document.getElementById("myAudio");
retest.core.id_of = (function retest$core$id_of(follow){
return follow.user._id;
});
retest.core.twitch_profile_url = (function retest$core$twitch_profile_url(name){
return [cljs.core.str("http://www.twitch.tv/"),cljs.core.str(name),cljs.core.str("/profile")].join('');
});
retest.core.logo_or_default = (function retest$core$logo_or_default(user){
var logo = user.logo;
if((logo == null)){
return "http://i.imgur.com/r7o9HUm.png";
} else {
return logo;
}
});
retest.core.set_parent_background_color_BANG_ = (function retest$core$set_parent_background_color_BANG_(html_node,color){
return html_node.parentElement.style.backgroundColor = color;
});
retest.core.weekmap = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"], null);
retest.core.parse_date = (function retest$core$parse_date(created_at){
var datetime = (new Date(created_at));
var ampm = (((datetime.getHours() > (12)))?"PM":"AM");
return [cljs.core.str(retest.core.weekmap.call(null,datetime.getDay())),cljs.core.str(", "),cljs.core.str(datetime.getMonth()),cljs.core.str("-"),cljs.core.str(datetime.getDate()),cljs.core.str(" "),cljs.core.str(goog.string.format("%2d",(cljs.core.mod.call(null,(datetime.getHours() - (1)),(12)) + (1)))),cljs.core.str(":"),cljs.core.str(goog.string.format("%02d",datetime.getMinutes())),cljs.core.str(" "),cljs.core.str(ampm)].join('');
});
retest.core.myTime = (new Date("2015-09-21T01:30:32Z"));
retest.core.followsList = (function retest$core$followsList(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var sorted_follows = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__45086_SHARP_){
return p1__45086_SHARP_.created_at;
}),cljs.core.deref.call(null,retest.core.recentFollows)));
var iter__5333__auto__ = ((function (sorted_follows){
return (function retest$core$followsList_$_iter__45091(s__45092){
return (new cljs.core.LazySeq(null,((function (sorted_follows){
return (function (){
var s__45092__$1 = s__45092;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45092__$1);
if(temp__4425__auto__){
var s__45092__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45092__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__45092__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__45094 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__45093 = (0);
while(true){
if((i__45093 < size__5332__auto__)){
var follow = cljs.core._nth.call(null,c__5331__auto__,i__45093);
cljs.core.chunk_append.call(null,b__45094,(function (){var id = retest.core.id_of.call(null,follow);
var display_name = follow.user.display_name;
var name = follow.user.name;
var created_at = follow.created_at;
var logo = retest.core.logo_or_default.call(null,follow.user);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ACA"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (i__45093,id,display_name,name,created_at,logo,follow,c__5331__auto__,size__5332__auto__,b__45094,s__45092__$2,temp__4425__auto__,sorted_follows){
return (function (event){
return retest.core.set_parent_background_color_BANG_.call(null,event.target,"white");
});})(i__45093,id,display_name,name,created_at,logo,follow,c__5331__auto__,size__5332__auto__,b__45094,s__45092__$2,temp__4425__auto__,sorted_follows))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"solid black 1px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),retest.core.twitch_profile_url.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"width","width",-384071477),(50)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),display_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),retest.core.parse_date.call(null,created_at)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__45095 = (i__45093 + (1));
i__45093 = G__45095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45094),retest$core$followsList_$_iter__45091.call(null,cljs.core.chunk_rest.call(null,s__45092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45094),null);
}
} else {
var follow = cljs.core.first.call(null,s__45092__$2);
return cljs.core.cons.call(null,(function (){var id = retest.core.id_of.call(null,follow);
var display_name = follow.user.display_name;
var name = follow.user.name;
var created_at = follow.created_at;
var logo = retest.core.logo_or_default.call(null,follow.user);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ACA"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (id,display_name,name,created_at,logo,follow,s__45092__$2,temp__4425__auto__,sorted_follows){
return (function (event){
return retest.core.set_parent_background_color_BANG_.call(null,event.target,"white");
});})(id,display_name,name,created_at,logo,follow,s__45092__$2,temp__4425__auto__,sorted_follows))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"solid black 1px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),retest.core.twitch_profile_url.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"width","width",-384071477),(50)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),display_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),retest.core.parse_date.call(null,created_at)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),retest$core$followsList_$_iter__45091.call(null,cljs.core.rest.call(null,s__45092__$2)));
}
} else {
return null;
}
break;
}
});})(sorted_follows))
,null,null));
});})(sorted_follows))
;
return iter__5333__auto__.call(null,sorted_follows);
})()], null);
});
retest.core.responseTextAsJson = (function retest$core$responseTextAsJson(event){
return JSON.parse(event.target.getResponseText());
});
retest.core.in_QMARK_ = (function retest$core$in_QMARK_(coll,value){
return cljs.core.some.call(null,(function (p1__45096_SHARP_){
return cljs.core._EQ_.call(null,value,p1__45096_SHARP_);
}),coll);
});
retest.core.remove_in = (function retest$core$remove_in(coll1,coll2){
return cljs.core.remove.call(null,(function (p1__45097_SHARP_){
return retest.core.in_QMARK_.call(null,cljs.core.map.call(null,retest.core.id_of,coll1),retest.core.id_of.call(null,p1__45097_SHARP_));
}),coll2);
});
retest.core.channeled_http_get = (function retest$core$channeled_http_get(url,f){
var out = cljs.core.async.chan.call(null);
goog.net.XhrIo.send(url,((function (out){
return (function (event){
return cljs.core.async.put_BANG_.call(null,out,f.call(null,event));
});})(out))
);

return out;
});
retest.core.follows_request = (function retest$core$follows_request(){
return retest.core.channeled_http_get.call(null,"https://api.twitch.tv/kraken/channels/rockitsage/follows?limit=25",(function (p1__45098_SHARP_){
return retest.core.responseTextAsJson.call(null,p1__45098_SHARP_).follows;
}));
});
retest.core.unique_new_follows = (function retest$core$unique_new_follows(){
var event = retest.core.follows_request.call(null);
var out = cljs.core.async.chan.call(null);
var c__7643__auto___45131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___45131,event,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___45131,event,out){
return (function (state_45122){
var state_val_45123 = (state_45122[(1)]);
if((state_val_45123 === (1))){
var state_45122__$1 = state_45122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45122__$1,(2),event);
} else {
if((state_val_45123 === (2))){
var inst_45116 = (state_45122[(2)]);
var inst_45117 = cljs.core.deref.call(null,retest.core.recentFollows);
var inst_45118 = retest.core.remove_in.call(null,inst_45117,inst_45116);
var inst_45119 = cljs.core.vec.call(null,inst_45118);
var inst_45120 = cljs.core.async.put_BANG_.call(null,out,inst_45119);
var state_45122__$1 = state_45122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45122__$1,inst_45120);
} else {
return null;
}
}
});})(c__7643__auto___45131,event,out))
;
return ((function (switch__7578__auto__,c__7643__auto___45131,event,out){
return (function() {
var retest$core$unique_new_follows_$_state_machine__7579__auto__ = null;
var retest$core$unique_new_follows_$_state_machine__7579__auto____0 = (function (){
var statearr_45127 = [null,null,null,null,null,null,null];
(statearr_45127[(0)] = retest$core$unique_new_follows_$_state_machine__7579__auto__);

(statearr_45127[(1)] = (1));

return statearr_45127;
});
var retest$core$unique_new_follows_$_state_machine__7579__auto____1 = (function (state_45122){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_45122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e45128){if((e45128 instanceof Object)){
var ex__7582__auto__ = e45128;
var statearr_45129_45132 = state_45122;
(statearr_45129_45132[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45133 = state_45122;
state_45122 = G__45133;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
retest$core$unique_new_follows_$_state_machine__7579__auto__ = function(state_45122){
switch(arguments.length){
case 0:
return retest$core$unique_new_follows_$_state_machine__7579__auto____0.call(this);
case 1:
return retest$core$unique_new_follows_$_state_machine__7579__auto____1.call(this,state_45122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
retest$core$unique_new_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = retest$core$unique_new_follows_$_state_machine__7579__auto____0;
retest$core$unique_new_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = retest$core$unique_new_follows_$_state_machine__7579__auto____1;
return retest$core$unique_new_follows_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___45131,event,out))
})();
var state__7645__auto__ = (function (){var statearr_45130 = f__7644__auto__.call(null);
(statearr_45130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___45131);

return statearr_45130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___45131,event,out))
);


return out;
});
retest.core.init_follows = (function retest$core$init_follows(){
var c__7643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto__){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto__){
return (function (state_45253){
var state_val_45254 = (state_45253[(1)]);
if((state_val_45254 === (7))){
var inst_45249 = (state_45253[(2)]);
var state_45253__$1 = state_45253;
var statearr_45255_45284 = state_45253__$1;
(statearr_45255_45284[(2)] = inst_45249);

(statearr_45255_45284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (1))){
var inst_45213 = retest.core.unique_new_follows.call(null);
var state_45253__$1 = state_45253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45253__$1,(2),inst_45213);
} else {
if((state_val_45254 === (4))){
var inst_45251 = (state_45253[(2)]);
var state_45253__$1 = state_45253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45253__$1,inst_45251);
} else {
if((state_val_45254 === (13))){
var inst_45244 = (state_45253[(2)]);
var state_45253__$1 = state_45253;
var statearr_45256_45285 = state_45253__$1;
(statearr_45256_45285[(2)] = inst_45244);

(statearr_45256_45285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (6))){
var inst_45230 = (state_45253[(7)]);
var inst_45217 = (state_45253[(8)]);
var inst_45230__$1 = cljs.core.seq.call(null,inst_45217);
var state_45253__$1 = (function (){var statearr_45257 = state_45253;
(statearr_45257[(7)] = inst_45230__$1);

return statearr_45257;
})();
if(inst_45230__$1){
var statearr_45258_45286 = state_45253__$1;
(statearr_45258_45286[(1)] = (8));

} else {
var statearr_45259_45287 = state_45253__$1;
(statearr_45259_45287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (3))){
var inst_45220 = (state_45253[(9)]);
var inst_45219 = (state_45253[(10)]);
var inst_45222 = (inst_45220 < inst_45219);
var inst_45223 = inst_45222;
var state_45253__$1 = state_45253;
if(cljs.core.truth_(inst_45223)){
var statearr_45260_45288 = state_45253__$1;
(statearr_45260_45288[(1)] = (5));

} else {
var statearr_45261_45289 = state_45253__$1;
(statearr_45261_45289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (12))){
var inst_45230 = (state_45253[(7)]);
var inst_45239 = cljs.core.first.call(null,inst_45230);
var inst_45240 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_45239);
var inst_45241 = cljs.core.next.call(null,inst_45230);
var inst_45217 = inst_45241;
var inst_45218 = null;
var inst_45219 = (0);
var inst_45220 = (0);
var state_45253__$1 = (function (){var statearr_45262 = state_45253;
(statearr_45262[(9)] = inst_45220);

(statearr_45262[(11)] = inst_45240);

(statearr_45262[(8)] = inst_45217);

(statearr_45262[(10)] = inst_45219);

(statearr_45262[(12)] = inst_45218);

return statearr_45262;
})();
var statearr_45263_45290 = state_45253__$1;
(statearr_45263_45290[(2)] = null);

(statearr_45263_45290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (2))){
var inst_45215 = (state_45253[(2)]);
var inst_45216 = cljs.core.seq.call(null,inst_45215);
var inst_45217 = inst_45216;
var inst_45218 = null;
var inst_45219 = (0);
var inst_45220 = (0);
var state_45253__$1 = (function (){var statearr_45264 = state_45253;
(statearr_45264[(9)] = inst_45220);

(statearr_45264[(8)] = inst_45217);

(statearr_45264[(10)] = inst_45219);

(statearr_45264[(12)] = inst_45218);

return statearr_45264;
})();
var statearr_45265_45291 = state_45253__$1;
(statearr_45265_45291[(2)] = null);

(statearr_45265_45291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (11))){
var inst_45230 = (state_45253[(7)]);
var inst_45234 = cljs.core.chunk_first.call(null,inst_45230);
var inst_45235 = cljs.core.chunk_rest.call(null,inst_45230);
var inst_45236 = cljs.core.count.call(null,inst_45234);
var inst_45217 = inst_45235;
var inst_45218 = inst_45234;
var inst_45219 = inst_45236;
var inst_45220 = (0);
var state_45253__$1 = (function (){var statearr_45269 = state_45253;
(statearr_45269[(9)] = inst_45220);

(statearr_45269[(8)] = inst_45217);

(statearr_45269[(10)] = inst_45219);

(statearr_45269[(12)] = inst_45218);

return statearr_45269;
})();
var statearr_45270_45292 = state_45253__$1;
(statearr_45270_45292[(2)] = null);

(statearr_45270_45292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (9))){
var state_45253__$1 = state_45253;
var statearr_45271_45293 = state_45253__$1;
(statearr_45271_45293[(2)] = null);

(statearr_45271_45293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (5))){
var inst_45220 = (state_45253[(9)]);
var inst_45217 = (state_45253[(8)]);
var inst_45219 = (state_45253[(10)]);
var inst_45218 = (state_45253[(12)]);
var inst_45225 = cljs.core._nth.call(null,inst_45218,inst_45220);
var inst_45226 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_45225);
var inst_45227 = (inst_45220 + (1));
var tmp45266 = inst_45217;
var tmp45267 = inst_45219;
var tmp45268 = inst_45218;
var inst_45217__$1 = tmp45266;
var inst_45218__$1 = tmp45268;
var inst_45219__$1 = tmp45267;
var inst_45220__$1 = inst_45227;
var state_45253__$1 = (function (){var statearr_45272 = state_45253;
(statearr_45272[(9)] = inst_45220__$1);

(statearr_45272[(13)] = inst_45226);

(statearr_45272[(8)] = inst_45217__$1);

(statearr_45272[(10)] = inst_45219__$1);

(statearr_45272[(12)] = inst_45218__$1);

return statearr_45272;
})();
var statearr_45273_45294 = state_45253__$1;
(statearr_45273_45294[(2)] = null);

(statearr_45273_45294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (10))){
var inst_45247 = (state_45253[(2)]);
var state_45253__$1 = state_45253;
var statearr_45274_45295 = state_45253__$1;
(statearr_45274_45295[(2)] = inst_45247);

(statearr_45274_45295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45254 === (8))){
var inst_45230 = (state_45253[(7)]);
var inst_45232 = cljs.core.chunked_seq_QMARK_.call(null,inst_45230);
var state_45253__$1 = state_45253;
if(inst_45232){
var statearr_45275_45296 = state_45253__$1;
(statearr_45275_45296[(1)] = (11));

} else {
var statearr_45276_45297 = state_45253__$1;
(statearr_45276_45297[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7643__auto__))
;
return ((function (switch__7578__auto__,c__7643__auto__){
return (function() {
var retest$core$init_follows_$_state_machine__7579__auto__ = null;
var retest$core$init_follows_$_state_machine__7579__auto____0 = (function (){
var statearr_45280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45280[(0)] = retest$core$init_follows_$_state_machine__7579__auto__);

(statearr_45280[(1)] = (1));

return statearr_45280;
});
var retest$core$init_follows_$_state_machine__7579__auto____1 = (function (state_45253){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_45253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e45281){if((e45281 instanceof Object)){
var ex__7582__auto__ = e45281;
var statearr_45282_45298 = state_45253;
(statearr_45282_45298[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45299 = state_45253;
state_45253 = G__45299;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
retest$core$init_follows_$_state_machine__7579__auto__ = function(state_45253){
switch(arguments.length){
case 0:
return retest$core$init_follows_$_state_machine__7579__auto____0.call(this);
case 1:
return retest$core$init_follows_$_state_machine__7579__auto____1.call(this,state_45253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
retest$core$init_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = retest$core$init_follows_$_state_machine__7579__auto____0;
retest$core$init_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = retest$core$init_follows_$_state_machine__7579__auto____1;
return retest$core$init_follows_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__))
})();
var state__7645__auto__ = (function (){var statearr_45283 = f__7644__auto__.call(null);
(statearr_45283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_45283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto__))
);

return c__7643__auto__;
});
retest.core.more_follows = (function retest$core$more_follows(){
var c__7643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto__){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto__){
return (function (state_45423){
var state_val_45424 = (state_45423[(1)]);
if((state_val_45424 === (7))){
var inst_45419 = (state_45423[(2)]);
var state_45423__$1 = state_45423;
var statearr_45425_45454 = state_45423__$1;
(statearr_45425_45454[(2)] = inst_45419);

(statearr_45425_45454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (1))){
var inst_45381 = retest.core.unique_new_follows.call(null);
var state_45423__$1 = state_45423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45423__$1,(2),inst_45381);
} else {
if((state_val_45424 === (4))){
var inst_45421 = (state_45423[(2)]);
var state_45423__$1 = state_45423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45423__$1,inst_45421);
} else {
if((state_val_45424 === (13))){
var inst_45414 = (state_45423[(2)]);
var state_45423__$1 = state_45423;
var statearr_45426_45455 = state_45423__$1;
(statearr_45426_45455[(2)] = inst_45414);

(statearr_45426_45455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (6))){
var inst_45385 = (state_45423[(7)]);
var inst_45399 = (state_45423[(8)]);
var inst_45399__$1 = cljs.core.seq.call(null,inst_45385);
var state_45423__$1 = (function (){var statearr_45427 = state_45423;
(statearr_45427[(8)] = inst_45399__$1);

return statearr_45427;
})();
if(inst_45399__$1){
var statearr_45428_45456 = state_45423__$1;
(statearr_45428_45456[(1)] = (8));

} else {
var statearr_45429_45457 = state_45423__$1;
(statearr_45429_45457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (3))){
var inst_45387 = (state_45423[(9)]);
var inst_45388 = (state_45423[(10)]);
var inst_45390 = (inst_45388 < inst_45387);
var inst_45391 = inst_45390;
var state_45423__$1 = state_45423;
if(cljs.core.truth_(inst_45391)){
var statearr_45430_45458 = state_45423__$1;
(statearr_45430_45458[(1)] = (5));

} else {
var statearr_45431_45459 = state_45423__$1;
(statearr_45431_45459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (12))){
var inst_45399 = (state_45423[(8)]);
var inst_45408 = cljs.core.first.call(null,inst_45399);
var inst_45409 = retest.core.my_audio.play();
var inst_45410 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_45408);
var inst_45411 = cljs.core.next.call(null,inst_45399);
var inst_45385 = inst_45411;
var inst_45386 = null;
var inst_45387 = (0);
var inst_45388 = (0);
var state_45423__$1 = (function (){var statearr_45432 = state_45423;
(statearr_45432[(11)] = inst_45409);

(statearr_45432[(9)] = inst_45387);

(statearr_45432[(7)] = inst_45385);

(statearr_45432[(12)] = inst_45386);

(statearr_45432[(13)] = inst_45410);

(statearr_45432[(10)] = inst_45388);

return statearr_45432;
})();
var statearr_45433_45460 = state_45423__$1;
(statearr_45433_45460[(2)] = null);

(statearr_45433_45460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (2))){
var inst_45383 = (state_45423[(2)]);
var inst_45384 = cljs.core.seq.call(null,inst_45383);
var inst_45385 = inst_45384;
var inst_45386 = null;
var inst_45387 = (0);
var inst_45388 = (0);
var state_45423__$1 = (function (){var statearr_45434 = state_45423;
(statearr_45434[(9)] = inst_45387);

(statearr_45434[(7)] = inst_45385);

(statearr_45434[(12)] = inst_45386);

(statearr_45434[(10)] = inst_45388);

return statearr_45434;
})();
var statearr_45435_45461 = state_45423__$1;
(statearr_45435_45461[(2)] = null);

(statearr_45435_45461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (11))){
var inst_45399 = (state_45423[(8)]);
var inst_45403 = cljs.core.chunk_first.call(null,inst_45399);
var inst_45404 = cljs.core.chunk_rest.call(null,inst_45399);
var inst_45405 = cljs.core.count.call(null,inst_45403);
var inst_45385 = inst_45404;
var inst_45386 = inst_45403;
var inst_45387 = inst_45405;
var inst_45388 = (0);
var state_45423__$1 = (function (){var statearr_45439 = state_45423;
(statearr_45439[(9)] = inst_45387);

(statearr_45439[(7)] = inst_45385);

(statearr_45439[(12)] = inst_45386);

(statearr_45439[(10)] = inst_45388);

return statearr_45439;
})();
var statearr_45440_45462 = state_45423__$1;
(statearr_45440_45462[(2)] = null);

(statearr_45440_45462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (9))){
var state_45423__$1 = state_45423;
var statearr_45441_45463 = state_45423__$1;
(statearr_45441_45463[(2)] = null);

(statearr_45441_45463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (5))){
var inst_45387 = (state_45423[(9)]);
var inst_45385 = (state_45423[(7)]);
var inst_45386 = (state_45423[(12)]);
var inst_45388 = (state_45423[(10)]);
var inst_45393 = cljs.core._nth.call(null,inst_45386,inst_45388);
var inst_45394 = retest.core.my_audio.play();
var inst_45395 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_45393);
var inst_45396 = (inst_45388 + (1));
var tmp45436 = inst_45387;
var tmp45437 = inst_45385;
var tmp45438 = inst_45386;
var inst_45385__$1 = tmp45437;
var inst_45386__$1 = tmp45438;
var inst_45387__$1 = tmp45436;
var inst_45388__$1 = inst_45396;
var state_45423__$1 = (function (){var statearr_45442 = state_45423;
(statearr_45442[(9)] = inst_45387__$1);

(statearr_45442[(7)] = inst_45385__$1);

(statearr_45442[(12)] = inst_45386__$1);

(statearr_45442[(10)] = inst_45388__$1);

(statearr_45442[(14)] = inst_45394);

(statearr_45442[(15)] = inst_45395);

return statearr_45442;
})();
var statearr_45443_45464 = state_45423__$1;
(statearr_45443_45464[(2)] = null);

(statearr_45443_45464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (10))){
var inst_45417 = (state_45423[(2)]);
var state_45423__$1 = state_45423;
var statearr_45444_45465 = state_45423__$1;
(statearr_45444_45465[(2)] = inst_45417);

(statearr_45444_45465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45424 === (8))){
var inst_45399 = (state_45423[(8)]);
var inst_45401 = cljs.core.chunked_seq_QMARK_.call(null,inst_45399);
var state_45423__$1 = state_45423;
if(inst_45401){
var statearr_45445_45466 = state_45423__$1;
(statearr_45445_45466[(1)] = (11));

} else {
var statearr_45446_45467 = state_45423__$1;
(statearr_45446_45467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7643__auto__))
;
return ((function (switch__7578__auto__,c__7643__auto__){
return (function() {
var retest$core$more_follows_$_state_machine__7579__auto__ = null;
var retest$core$more_follows_$_state_machine__7579__auto____0 = (function (){
var statearr_45450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45450[(0)] = retest$core$more_follows_$_state_machine__7579__auto__);

(statearr_45450[(1)] = (1));

return statearr_45450;
});
var retest$core$more_follows_$_state_machine__7579__auto____1 = (function (state_45423){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_45423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e45451){if((e45451 instanceof Object)){
var ex__7582__auto__ = e45451;
var statearr_45452_45468 = state_45423;
(statearr_45452_45468[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45469 = state_45423;
state_45423 = G__45469;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
retest$core$more_follows_$_state_machine__7579__auto__ = function(state_45423){
switch(arguments.length){
case 0:
return retest$core$more_follows_$_state_machine__7579__auto____0.call(this);
case 1:
return retest$core$more_follows_$_state_machine__7579__auto____1.call(this,state_45423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
retest$core$more_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = retest$core$more_follows_$_state_machine__7579__auto____0;
retest$core$more_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = retest$core$more_follows_$_state_machine__7579__auto____1;
return retest$core$more_follows_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__))
})();
var state__7645__auto__ = (function (){var statearr_45453 = f__7644__auto__.call(null);
(statearr_45453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_45453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto__))
);

return c__7643__auto__;
});
retest.core.run = (function retest$core$run(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [retest.core.followsList], null),document.getElementById("follows"));

retest.core.init_follows.call(null);

return setInterval(retest.core.more_follows,(30000));
});
goog.exportSymbol('retest.core.run', retest.core.run);

//# sourceMappingURL=core.js.map?rel=1442815907490