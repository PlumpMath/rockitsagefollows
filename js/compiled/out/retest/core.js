// Compiled by ClojureScript 1.7.122 {}
goog.provide('retest.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.net.XhrIo');
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
retest.core.followsList = (function retest$core$followsList(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var sorted_follows = cljs.core.reverse.call(null,cljs.core.sort_by.call(null,(function (p1__24538_SHARP_){
return p1__24538_SHARP_.created_at;
}),cljs.core.deref.call(null,retest.core.recentFollows)));
var iter__5333__auto__ = ((function (sorted_follows){
return (function retest$core$followsList_$_iter__24544(s__24545){
return (new cljs.core.LazySeq(null,((function (sorted_follows){
return (function (){
var s__24545__$1 = s__24545;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24545__$1);
if(temp__4425__auto__){
var s__24545__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24545__$2)){
var c__5331__auto__ = cljs.core.chunk_first.call(null,s__24545__$2);
var size__5332__auto__ = cljs.core.count.call(null,c__5331__auto__);
var b__24547 = cljs.core.chunk_buffer.call(null,size__5332__auto__);
if((function (){var i__24546 = (0);
while(true){
if((i__24546 < size__5332__auto__)){
var follow = cljs.core._nth.call(null,c__5331__auto__,i__24546);
cljs.core.chunk_append.call(null,b__24547,(function (){var id = retest.core.id_of.call(null,follow);
var display_name = follow.user.display_name;
var name = follow.user.name;
var created_at = follow.created_at;
var logo = retest.core.logo_or_default.call(null,follow.user);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ACA"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (i__24546,id,display_name,name,created_at,logo,follow,c__5331__auto__,size__5332__auto__,b__24547,s__24545__$2,temp__4425__auto__,sorted_follows){
return (function (p1__24539_SHARP_){
return p1__24539_SHARP_.target.parentElement.style.backgroundColor = "#FFF";
});})(i__24546,id,display_name,name,created_at,logo,follow,c__5331__auto__,size__5332__auto__,b__24547,s__24545__$2,temp__4425__auto__,sorted_follows))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"solid black 1px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),retest.core.twitch_profile_url.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"width","width",-384071477),(50)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),display_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),created_at], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__24548 = (i__24546 + (1));
i__24546 = G__24548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24547),retest$core$followsList_$_iter__24544.call(null,cljs.core.chunk_rest.call(null,s__24545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24547),null);
}
} else {
var follow = cljs.core.first.call(null,s__24545__$2);
return cljs.core.cons.call(null,(function (){var id = retest.core.id_of.call(null,follow);
var display_name = follow.user.display_name;
var name = follow.user.name;
var created_at = follow.created_at;
var logo = retest.core.logo_or_default.call(null,follow.user);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ACA"], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (id,display_name,name,created_at,logo,follow,s__24545__$2,temp__4425__auto__,sorted_follows){
return (function (p1__24539_SHARP_){
return p1__24539_SHARP_.target.parentElement.style.backgroundColor = "#FFF";
});})(id,display_name,name,created_at,logo,follow,s__24545__$2,temp__4425__auto__,sorted_follows))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"solid black 1px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),retest.core.twitch_profile_url.call(null,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"width","width",-384071477),(50)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),display_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),created_at], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),retest$core$followsList_$_iter__24544.call(null,cljs.core.rest.call(null,s__24545__$2)));
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
return cljs.core.some.call(null,(function (p1__24549_SHARP_){
return cljs.core._EQ_.call(null,value,p1__24549_SHARP_);
}),coll);
});
retest.core.remove_in = (function retest$core$remove_in(coll1,coll2){
return cljs.core.remove.call(null,(function (p1__24550_SHARP_){
return retest.core.in_QMARK_.call(null,cljs.core.map.call(null,retest.core.id_of,coll1),retest.core.id_of.call(null,p1__24550_SHARP_));
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
return retest.core.channeled_http_get.call(null,"https://api.twitch.tv/kraken/channels/rockitsage/follows?limit=25",(function (p1__24551_SHARP_){
return retest.core.responseTextAsJson.call(null,p1__24551_SHARP_).follows;
}));
});
retest.core.unique_new_follows = (function retest$core$unique_new_follows(){
var event = retest.core.follows_request.call(null);
var out = cljs.core.async.chan.call(null);
var c__7643__auto___24584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___24584,event,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___24584,event,out){
return (function (state_24575){
var state_val_24576 = (state_24575[(1)]);
if((state_val_24576 === (1))){
var state_24575__$1 = state_24575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24575__$1,(2),event);
} else {
if((state_val_24576 === (2))){
var inst_24569 = (state_24575[(2)]);
var inst_24570 = cljs.core.deref.call(null,retest.core.recentFollows);
var inst_24571 = retest.core.remove_in.call(null,inst_24570,inst_24569);
var inst_24572 = cljs.core.vec.call(null,inst_24571);
var inst_24573 = cljs.core.async.put_BANG_.call(null,out,inst_24572);
var state_24575__$1 = state_24575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24575__$1,inst_24573);
} else {
return null;
}
}
});})(c__7643__auto___24584,event,out))
;
return ((function (switch__7578__auto__,c__7643__auto___24584,event,out){
return (function() {
var retest$core$unique_new_follows_$_state_machine__7579__auto__ = null;
var retest$core$unique_new_follows_$_state_machine__7579__auto____0 = (function (){
var statearr_24580 = [null,null,null,null,null,null,null];
(statearr_24580[(0)] = retest$core$unique_new_follows_$_state_machine__7579__auto__);

(statearr_24580[(1)] = (1));

return statearr_24580;
});
var retest$core$unique_new_follows_$_state_machine__7579__auto____1 = (function (state_24575){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_24575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e24581){if((e24581 instanceof Object)){
var ex__7582__auto__ = e24581;
var statearr_24582_24585 = state_24575;
(statearr_24582_24585[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24586 = state_24575;
state_24575 = G__24586;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
retest$core$unique_new_follows_$_state_machine__7579__auto__ = function(state_24575){
switch(arguments.length){
case 0:
return retest$core$unique_new_follows_$_state_machine__7579__auto____0.call(this);
case 1:
return retest$core$unique_new_follows_$_state_machine__7579__auto____1.call(this,state_24575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
retest$core$unique_new_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = retest$core$unique_new_follows_$_state_machine__7579__auto____0;
retest$core$unique_new_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = retest$core$unique_new_follows_$_state_machine__7579__auto____1;
return retest$core$unique_new_follows_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___24584,event,out))
})();
var state__7645__auto__ = (function (){var statearr_24583 = f__7644__auto__.call(null);
(statearr_24583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___24584);

return statearr_24583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___24584,event,out))
);


return out;
});
retest.core.init_follows = (function retest$core$init_follows(){
var c__7643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto__){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto__){
return (function (state_24706){
var state_val_24707 = (state_24706[(1)]);
if((state_val_24707 === (7))){
var inst_24702 = (state_24706[(2)]);
var state_24706__$1 = state_24706;
var statearr_24708_24737 = state_24706__$1;
(statearr_24708_24737[(2)] = inst_24702);

(statearr_24708_24737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (1))){
var inst_24666 = retest.core.unique_new_follows.call(null);
var state_24706__$1 = state_24706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24706__$1,(2),inst_24666);
} else {
if((state_val_24707 === (4))){
var inst_24704 = (state_24706[(2)]);
var state_24706__$1 = state_24706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24706__$1,inst_24704);
} else {
if((state_val_24707 === (13))){
var inst_24697 = (state_24706[(2)]);
var state_24706__$1 = state_24706;
var statearr_24709_24738 = state_24706__$1;
(statearr_24709_24738[(2)] = inst_24697);

(statearr_24709_24738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (6))){
var inst_24683 = (state_24706[(7)]);
var inst_24670 = (state_24706[(8)]);
var inst_24683__$1 = cljs.core.seq.call(null,inst_24670);
var state_24706__$1 = (function (){var statearr_24710 = state_24706;
(statearr_24710[(7)] = inst_24683__$1);

return statearr_24710;
})();
if(inst_24683__$1){
var statearr_24711_24739 = state_24706__$1;
(statearr_24711_24739[(1)] = (8));

} else {
var statearr_24712_24740 = state_24706__$1;
(statearr_24712_24740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (3))){
var inst_24672 = (state_24706[(9)]);
var inst_24673 = (state_24706[(10)]);
var inst_24675 = (inst_24673 < inst_24672);
var inst_24676 = inst_24675;
var state_24706__$1 = state_24706;
if(cljs.core.truth_(inst_24676)){
var statearr_24713_24741 = state_24706__$1;
(statearr_24713_24741[(1)] = (5));

} else {
var statearr_24714_24742 = state_24706__$1;
(statearr_24714_24742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (12))){
var inst_24683 = (state_24706[(7)]);
var inst_24692 = cljs.core.first.call(null,inst_24683);
var inst_24693 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_24692);
var inst_24694 = cljs.core.next.call(null,inst_24683);
var inst_24670 = inst_24694;
var inst_24671 = null;
var inst_24672 = (0);
var inst_24673 = (0);
var state_24706__$1 = (function (){var statearr_24715 = state_24706;
(statearr_24715[(9)] = inst_24672);

(statearr_24715[(11)] = inst_24693);

(statearr_24715[(12)] = inst_24671);

(statearr_24715[(8)] = inst_24670);

(statearr_24715[(10)] = inst_24673);

return statearr_24715;
})();
var statearr_24716_24743 = state_24706__$1;
(statearr_24716_24743[(2)] = null);

(statearr_24716_24743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (2))){
var inst_24668 = (state_24706[(2)]);
var inst_24669 = cljs.core.seq.call(null,inst_24668);
var inst_24670 = inst_24669;
var inst_24671 = null;
var inst_24672 = (0);
var inst_24673 = (0);
var state_24706__$1 = (function (){var statearr_24717 = state_24706;
(statearr_24717[(9)] = inst_24672);

(statearr_24717[(12)] = inst_24671);

(statearr_24717[(8)] = inst_24670);

(statearr_24717[(10)] = inst_24673);

return statearr_24717;
})();
var statearr_24718_24744 = state_24706__$1;
(statearr_24718_24744[(2)] = null);

(statearr_24718_24744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (11))){
var inst_24683 = (state_24706[(7)]);
var inst_24687 = cljs.core.chunk_first.call(null,inst_24683);
var inst_24688 = cljs.core.chunk_rest.call(null,inst_24683);
var inst_24689 = cljs.core.count.call(null,inst_24687);
var inst_24670 = inst_24688;
var inst_24671 = inst_24687;
var inst_24672 = inst_24689;
var inst_24673 = (0);
var state_24706__$1 = (function (){var statearr_24722 = state_24706;
(statearr_24722[(9)] = inst_24672);

(statearr_24722[(12)] = inst_24671);

(statearr_24722[(8)] = inst_24670);

(statearr_24722[(10)] = inst_24673);

return statearr_24722;
})();
var statearr_24723_24745 = state_24706__$1;
(statearr_24723_24745[(2)] = null);

(statearr_24723_24745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (9))){
var state_24706__$1 = state_24706;
var statearr_24724_24746 = state_24706__$1;
(statearr_24724_24746[(2)] = null);

(statearr_24724_24746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (5))){
var inst_24672 = (state_24706[(9)]);
var inst_24671 = (state_24706[(12)]);
var inst_24670 = (state_24706[(8)]);
var inst_24673 = (state_24706[(10)]);
var inst_24678 = cljs.core._nth.call(null,inst_24671,inst_24673);
var inst_24679 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_24678);
var inst_24680 = (inst_24673 + (1));
var tmp24719 = inst_24672;
var tmp24720 = inst_24671;
var tmp24721 = inst_24670;
var inst_24670__$1 = tmp24721;
var inst_24671__$1 = tmp24720;
var inst_24672__$1 = tmp24719;
var inst_24673__$1 = inst_24680;
var state_24706__$1 = (function (){var statearr_24725 = state_24706;
(statearr_24725[(9)] = inst_24672__$1);

(statearr_24725[(12)] = inst_24671__$1);

(statearr_24725[(8)] = inst_24670__$1);

(statearr_24725[(13)] = inst_24679);

(statearr_24725[(10)] = inst_24673__$1);

return statearr_24725;
})();
var statearr_24726_24747 = state_24706__$1;
(statearr_24726_24747[(2)] = null);

(statearr_24726_24747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (10))){
var inst_24700 = (state_24706[(2)]);
var state_24706__$1 = state_24706;
var statearr_24727_24748 = state_24706__$1;
(statearr_24727_24748[(2)] = inst_24700);

(statearr_24727_24748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24707 === (8))){
var inst_24683 = (state_24706[(7)]);
var inst_24685 = cljs.core.chunked_seq_QMARK_.call(null,inst_24683);
var state_24706__$1 = state_24706;
if(inst_24685){
var statearr_24728_24749 = state_24706__$1;
(statearr_24728_24749[(1)] = (11));

} else {
var statearr_24729_24750 = state_24706__$1;
(statearr_24729_24750[(1)] = (12));

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
var statearr_24733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24733[(0)] = retest$core$init_follows_$_state_machine__7579__auto__);

(statearr_24733[(1)] = (1));

return statearr_24733;
});
var retest$core$init_follows_$_state_machine__7579__auto____1 = (function (state_24706){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_24706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e24734){if((e24734 instanceof Object)){
var ex__7582__auto__ = e24734;
var statearr_24735_24751 = state_24706;
(statearr_24735_24751[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24752 = state_24706;
state_24706 = G__24752;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
retest$core$init_follows_$_state_machine__7579__auto__ = function(state_24706){
switch(arguments.length){
case 0:
return retest$core$init_follows_$_state_machine__7579__auto____0.call(this);
case 1:
return retest$core$init_follows_$_state_machine__7579__auto____1.call(this,state_24706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
retest$core$init_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = retest$core$init_follows_$_state_machine__7579__auto____0;
retest$core$init_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = retest$core$init_follows_$_state_machine__7579__auto____1;
return retest$core$init_follows_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__))
})();
var state__7645__auto__ = (function (){var statearr_24736 = f__7644__auto__.call(null);
(statearr_24736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_24736;
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
return (function (state_24876){
var state_val_24877 = (state_24876[(1)]);
if((state_val_24877 === (7))){
var inst_24872 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24878_24907 = state_24876__$1;
(statearr_24878_24907[(2)] = inst_24872);

(statearr_24878_24907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (1))){
var inst_24834 = retest.core.unique_new_follows.call(null);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24876__$1,(2),inst_24834);
} else {
if((state_val_24877 === (4))){
var inst_24874 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24876__$1,inst_24874);
} else {
if((state_val_24877 === (13))){
var inst_24867 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24879_24908 = state_24876__$1;
(statearr_24879_24908[(2)] = inst_24867);

(statearr_24879_24908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (6))){
var inst_24838 = (state_24876[(7)]);
var inst_24852 = (state_24876[(8)]);
var inst_24852__$1 = cljs.core.seq.call(null,inst_24838);
var state_24876__$1 = (function (){var statearr_24880 = state_24876;
(statearr_24880[(8)] = inst_24852__$1);

return statearr_24880;
})();
if(inst_24852__$1){
var statearr_24881_24909 = state_24876__$1;
(statearr_24881_24909[(1)] = (8));

} else {
var statearr_24882_24910 = state_24876__$1;
(statearr_24882_24910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (3))){
var inst_24840 = (state_24876[(9)]);
var inst_24841 = (state_24876[(10)]);
var inst_24843 = (inst_24841 < inst_24840);
var inst_24844 = inst_24843;
var state_24876__$1 = state_24876;
if(cljs.core.truth_(inst_24844)){
var statearr_24883_24911 = state_24876__$1;
(statearr_24883_24911[(1)] = (5));

} else {
var statearr_24884_24912 = state_24876__$1;
(statearr_24884_24912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (12))){
var inst_24852 = (state_24876[(8)]);
var inst_24861 = cljs.core.first.call(null,inst_24852);
var inst_24862 = retest.core.my_audio.play();
var inst_24863 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_24861);
var inst_24864 = cljs.core.next.call(null,inst_24852);
var inst_24838 = inst_24864;
var inst_24839 = null;
var inst_24840 = (0);
var inst_24841 = (0);
var state_24876__$1 = (function (){var statearr_24885 = state_24876;
(statearr_24885[(11)] = inst_24839);

(statearr_24885[(9)] = inst_24840);

(statearr_24885[(12)] = inst_24863);

(statearr_24885[(10)] = inst_24841);

(statearr_24885[(7)] = inst_24838);

(statearr_24885[(13)] = inst_24862);

return statearr_24885;
})();
var statearr_24886_24913 = state_24876__$1;
(statearr_24886_24913[(2)] = null);

(statearr_24886_24913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (2))){
var inst_24836 = (state_24876[(2)]);
var inst_24837 = cljs.core.seq.call(null,inst_24836);
var inst_24838 = inst_24837;
var inst_24839 = null;
var inst_24840 = (0);
var inst_24841 = (0);
var state_24876__$1 = (function (){var statearr_24887 = state_24876;
(statearr_24887[(11)] = inst_24839);

(statearr_24887[(9)] = inst_24840);

(statearr_24887[(10)] = inst_24841);

(statearr_24887[(7)] = inst_24838);

return statearr_24887;
})();
var statearr_24888_24914 = state_24876__$1;
(statearr_24888_24914[(2)] = null);

(statearr_24888_24914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (11))){
var inst_24852 = (state_24876[(8)]);
var inst_24856 = cljs.core.chunk_first.call(null,inst_24852);
var inst_24857 = cljs.core.chunk_rest.call(null,inst_24852);
var inst_24858 = cljs.core.count.call(null,inst_24856);
var inst_24838 = inst_24857;
var inst_24839 = inst_24856;
var inst_24840 = inst_24858;
var inst_24841 = (0);
var state_24876__$1 = (function (){var statearr_24892 = state_24876;
(statearr_24892[(11)] = inst_24839);

(statearr_24892[(9)] = inst_24840);

(statearr_24892[(10)] = inst_24841);

(statearr_24892[(7)] = inst_24838);

return statearr_24892;
})();
var statearr_24893_24915 = state_24876__$1;
(statearr_24893_24915[(2)] = null);

(statearr_24893_24915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (9))){
var state_24876__$1 = state_24876;
var statearr_24894_24916 = state_24876__$1;
(statearr_24894_24916[(2)] = null);

(statearr_24894_24916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (5))){
var inst_24839 = (state_24876[(11)]);
var inst_24840 = (state_24876[(9)]);
var inst_24841 = (state_24876[(10)]);
var inst_24838 = (state_24876[(7)]);
var inst_24846 = cljs.core._nth.call(null,inst_24839,inst_24841);
var inst_24847 = retest.core.my_audio.play();
var inst_24848 = cljs.core.swap_BANG_.call(null,retest.core.recentFollows,cljs.core.conj,inst_24846);
var inst_24849 = (inst_24841 + (1));
var tmp24889 = inst_24839;
var tmp24890 = inst_24840;
var tmp24891 = inst_24838;
var inst_24838__$1 = tmp24891;
var inst_24839__$1 = tmp24889;
var inst_24840__$1 = tmp24890;
var inst_24841__$1 = inst_24849;
var state_24876__$1 = (function (){var statearr_24895 = state_24876;
(statearr_24895[(11)] = inst_24839__$1);

(statearr_24895[(9)] = inst_24840__$1);

(statearr_24895[(14)] = inst_24847);

(statearr_24895[(10)] = inst_24841__$1);

(statearr_24895[(7)] = inst_24838__$1);

(statearr_24895[(15)] = inst_24848);

return statearr_24895;
})();
var statearr_24896_24917 = state_24876__$1;
(statearr_24896_24917[(2)] = null);

(statearr_24896_24917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (10))){
var inst_24870 = (state_24876[(2)]);
var state_24876__$1 = state_24876;
var statearr_24897_24918 = state_24876__$1;
(statearr_24897_24918[(2)] = inst_24870);

(statearr_24897_24918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24877 === (8))){
var inst_24852 = (state_24876[(8)]);
var inst_24854 = cljs.core.chunked_seq_QMARK_.call(null,inst_24852);
var state_24876__$1 = state_24876;
if(inst_24854){
var statearr_24898_24919 = state_24876__$1;
(statearr_24898_24919[(1)] = (11));

} else {
var statearr_24899_24920 = state_24876__$1;
(statearr_24899_24920[(1)] = (12));

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
var statearr_24903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24903[(0)] = retest$core$more_follows_$_state_machine__7579__auto__);

(statearr_24903[(1)] = (1));

return statearr_24903;
});
var retest$core$more_follows_$_state_machine__7579__auto____1 = (function (state_24876){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_24876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e24904){if((e24904 instanceof Object)){
var ex__7582__auto__ = e24904;
var statearr_24905_24921 = state_24876;
(statearr_24905_24921[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24922 = state_24876;
state_24876 = G__24922;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
retest$core$more_follows_$_state_machine__7579__auto__ = function(state_24876){
switch(arguments.length){
case 0:
return retest$core$more_follows_$_state_machine__7579__auto____0.call(this);
case 1:
return retest$core$more_follows_$_state_machine__7579__auto____1.call(this,state_24876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
retest$core$more_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = retest$core$more_follows_$_state_machine__7579__auto____0;
retest$core$more_follows_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = retest$core$more_follows_$_state_machine__7579__auto____1;
return retest$core$more_follows_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__))
})();
var state__7645__auto__ = (function (){var statearr_24906 = f__7644__auto__.call(null);
(statearr_24906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_24906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto__))
);

return c__7643__auto__;
});
retest.core.main = (function retest$core$main(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [retest.core.followsList], null),document.getElementById("follows"));

retest.core.init_follows.call(null);

return setInterval(retest.core.more_follows,(20000));
});
goog.exportSymbol('retest.core.main', retest.core.main);

//# sourceMappingURL=core.js.map?rel=1442796375452