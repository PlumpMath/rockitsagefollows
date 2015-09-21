// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async9906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9906 = (function (fn_handler,f,meta9907){
this.fn_handler = fn_handler;
this.f = f;
this.meta9907 = meta9907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9908,meta9907__$1){
var self__ = this;
var _9908__$1 = this;
return (new cljs.core.async.t_cljs$core$async9906(self__.fn_handler,self__.f,meta9907__$1));
});

cljs.core.async.t_cljs$core$async9906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9908){
var self__ = this;
var _9908__$1 = this;
return self__.meta9907;
});

cljs.core.async.t_cljs$core$async9906.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta9907","meta9907",1072263331,null)], null);
});

cljs.core.async.t_cljs$core$async9906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9906";

cljs.core.async.t_cljs$core$async9906.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async9906");
});

cljs.core.async.__GT_t_cljs$core$async9906 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async9906(fn_handler__$1,f__$1,meta9907){
return (new cljs.core.async.t_cljs$core$async9906(fn_handler__$1,f__$1,meta9907));
});

}

return (new cljs.core.async.t_cljs$core$async9906(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9911 = [];
var len__5619__auto___9914 = arguments.length;
var i__5620__auto___9915 = (0);
while(true){
if((i__5620__auto___9915 < len__5619__auto___9914)){
args9911.push((arguments[i__5620__auto___9915]));

var G__9916 = (i__5620__auto___9915 + (1));
i__5620__auto___9915 = G__9916;
continue;
} else {
}
break;
}

var G__9913 = args9911.length;
switch (G__9913) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9911.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9918 = [];
var len__5619__auto___9921 = arguments.length;
var i__5620__auto___9922 = (0);
while(true){
if((i__5620__auto___9922 < len__5619__auto___9921)){
args9918.push((arguments[i__5620__auto___9922]));

var G__9923 = (i__5620__auto___9922 + (1));
i__5620__auto___9922 = G__9923;
continue;
} else {
}
break;
}

var G__9920 = args9918.length;
switch (G__9920) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9918.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9925 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9925);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9925,ret){
return (function (){
return fn1.call(null,val_9925);
});})(val_9925,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9926 = [];
var len__5619__auto___9929 = arguments.length;
var i__5620__auto___9930 = (0);
while(true){
if((i__5620__auto___9930 < len__5619__auto___9929)){
args9926.push((arguments[i__5620__auto___9930]));

var G__9931 = (i__5620__auto___9930 + (1));
i__5620__auto___9930 = G__9931;
continue;
} else {
}
break;
}

var G__9928 = args9926.length;
switch (G__9928) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9926.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5464__auto___9933 = n;
var x_9934 = (0);
while(true){
if((x_9934 < n__5464__auto___9933)){
(a[x_9934] = (0));

var G__9935 = (x_9934 + (1));
x_9934 = G__9935;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9936 = (i + (1));
i = G__9936;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9940 = (function (alt_flag,flag,meta9941){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9941 = meta9941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9942,meta9941__$1){
var self__ = this;
var _9942__$1 = this;
return (new cljs.core.async.t_cljs$core$async9940(self__.alt_flag,self__.flag,meta9941__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9942){
var self__ = this;
var _9942__$1 = this;
return self__.meta9941;
});})(flag))
;

cljs.core.async.t_cljs$core$async9940.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9940.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9941","meta9941",-527577377,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9940";

cljs.core.async.t_cljs$core$async9940.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async9940");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9940 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9940(alt_flag__$1,flag__$1,meta9941){
return (new cljs.core.async.t_cljs$core$async9940(alt_flag__$1,flag__$1,meta9941));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9940(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9946 = (function (alt_handler,flag,cb,meta9947){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9947 = meta9947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9948,meta9947__$1){
var self__ = this;
var _9948__$1 = this;
return (new cljs.core.async.t_cljs$core$async9946(self__.alt_handler,self__.flag,self__.cb,meta9947__$1));
});

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9948){
var self__ = this;
var _9948__$1 = this;
return self__.meta9947;
});

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9947","meta9947",-982418637,null)], null);
});

cljs.core.async.t_cljs$core$async9946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9946";

cljs.core.async.t_cljs$core$async9946.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async9946");
});

cljs.core.async.__GT_t_cljs$core$async9946 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9946(alt_handler__$1,flag__$1,cb__$1,meta9947){
return (new cljs.core.async.t_cljs$core$async9946(alt_handler__$1,flag__$1,cb__$1,meta9947));
});

}

return (new cljs.core.async.t_cljs$core$async9946(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9949_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9949_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9950_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9950_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4561__auto__ = wport;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9951 = (i + (1));
i = G__9951;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4561__auto__ = ret;
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4549__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4549__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4549__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___9957 = arguments.length;
var i__5620__auto___9958 = (0);
while(true){
if((i__5620__auto___9958 < len__5619__auto___9957)){
args__5626__auto__.push((arguments[i__5620__auto___9958]));

var G__9959 = (i__5620__auto___9958 + (1));
i__5620__auto___9958 = G__9959;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((1) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5627__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9954){
var map__9955 = p__9954;
var map__9955__$1 = ((((!((map__9955 == null)))?((((map__9955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9955):map__9955);
var opts = map__9955__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9952){
var G__9953 = cljs.core.first.call(null,seq9952);
var seq9952__$1 = cljs.core.next.call(null,seq9952);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9953,seq9952__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9960 = [];
var len__5619__auto___10010 = arguments.length;
var i__5620__auto___10011 = (0);
while(true){
if((i__5620__auto___10011 < len__5619__auto___10010)){
args9960.push((arguments[i__5620__auto___10011]));

var G__10012 = (i__5620__auto___10011 + (1));
i__5620__auto___10011 = G__10012;
continue;
} else {
}
break;
}

var G__9962 = args9960.length;
switch (G__9962) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9960.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7643__auto___10014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___10014){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___10014){
return (function (state_9986){
var state_val_9987 = (state_9986[(1)]);
if((state_val_9987 === (7))){
var inst_9982 = (state_9986[(2)]);
var state_9986__$1 = state_9986;
var statearr_9988_10015 = state_9986__$1;
(statearr_9988_10015[(2)] = inst_9982);

(statearr_9988_10015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (1))){
var state_9986__$1 = state_9986;
var statearr_9989_10016 = state_9986__$1;
(statearr_9989_10016[(2)] = null);

(statearr_9989_10016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (4))){
var inst_9965 = (state_9986[(7)]);
var inst_9965__$1 = (state_9986[(2)]);
var inst_9966 = (inst_9965__$1 == null);
var state_9986__$1 = (function (){var statearr_9990 = state_9986;
(statearr_9990[(7)] = inst_9965__$1);

return statearr_9990;
})();
if(cljs.core.truth_(inst_9966)){
var statearr_9991_10017 = state_9986__$1;
(statearr_9991_10017[(1)] = (5));

} else {
var statearr_9992_10018 = state_9986__$1;
(statearr_9992_10018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (13))){
var state_9986__$1 = state_9986;
var statearr_9993_10019 = state_9986__$1;
(statearr_9993_10019[(2)] = null);

(statearr_9993_10019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (6))){
var inst_9965 = (state_9986[(7)]);
var state_9986__$1 = state_9986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9986__$1,(11),to,inst_9965);
} else {
if((state_val_9987 === (3))){
var inst_9984 = (state_9986[(2)]);
var state_9986__$1 = state_9986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9986__$1,inst_9984);
} else {
if((state_val_9987 === (12))){
var state_9986__$1 = state_9986;
var statearr_9994_10020 = state_9986__$1;
(statearr_9994_10020[(2)] = null);

(statearr_9994_10020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (2))){
var state_9986__$1 = state_9986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9986__$1,(4),from);
} else {
if((state_val_9987 === (11))){
var inst_9975 = (state_9986[(2)]);
var state_9986__$1 = state_9986;
if(cljs.core.truth_(inst_9975)){
var statearr_9995_10021 = state_9986__$1;
(statearr_9995_10021[(1)] = (12));

} else {
var statearr_9996_10022 = state_9986__$1;
(statearr_9996_10022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (9))){
var state_9986__$1 = state_9986;
var statearr_9997_10023 = state_9986__$1;
(statearr_9997_10023[(2)] = null);

(statearr_9997_10023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (5))){
var state_9986__$1 = state_9986;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9998_10024 = state_9986__$1;
(statearr_9998_10024[(1)] = (8));

} else {
var statearr_9999_10025 = state_9986__$1;
(statearr_9999_10025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (14))){
var inst_9980 = (state_9986[(2)]);
var state_9986__$1 = state_9986;
var statearr_10000_10026 = state_9986__$1;
(statearr_10000_10026[(2)] = inst_9980);

(statearr_10000_10026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (10))){
var inst_9972 = (state_9986[(2)]);
var state_9986__$1 = state_9986;
var statearr_10001_10027 = state_9986__$1;
(statearr_10001_10027[(2)] = inst_9972);

(statearr_10001_10027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (8))){
var inst_9969 = cljs.core.async.close_BANG_.call(null,to);
var state_9986__$1 = state_9986;
var statearr_10002_10028 = state_9986__$1;
(statearr_10002_10028[(2)] = inst_9969);

(statearr_10002_10028[(1)] = (10));


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
}
});})(c__7643__auto___10014))
;
return ((function (switch__7578__auto__,c__7643__auto___10014){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_10006 = [null,null,null,null,null,null,null,null];
(statearr_10006[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_10006[(1)] = (1));

return statearr_10006;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_9986){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_9986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10007){if((e10007 instanceof Object)){
var ex__7582__auto__ = e10007;
var statearr_10008_10029 = state_9986;
(statearr_10008_10029[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10030 = state_9986;
state_9986 = G__10030;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_9986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_9986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___10014))
})();
var state__7645__auto__ = (function (){var statearr_10009 = f__7644__auto__.call(null);
(statearr_10009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___10014);

return statearr_10009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___10014))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10214){
var vec__10215 = p__10214;
var v = cljs.core.nth.call(null,vec__10215,(0),null);
var p = cljs.core.nth.call(null,vec__10215,(1),null);
var job = vec__10215;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7643__auto___10397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___10397,res,vec__10215,v,p,job,jobs,results){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___10397,res,vec__10215,v,p,job,jobs,results){
return (function (state_10220){
var state_val_10221 = (state_10220[(1)]);
if((state_val_10221 === (1))){
var state_10220__$1 = state_10220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10220__$1,(2),res,v);
} else {
if((state_val_10221 === (2))){
var inst_10217 = (state_10220[(2)]);
var inst_10218 = cljs.core.async.close_BANG_.call(null,res);
var state_10220__$1 = (function (){var statearr_10222 = state_10220;
(statearr_10222[(7)] = inst_10217);

return statearr_10222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10220__$1,inst_10218);
} else {
return null;
}
}
});})(c__7643__auto___10397,res,vec__10215,v,p,job,jobs,results))
;
return ((function (switch__7578__auto__,c__7643__auto___10397,res,vec__10215,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0 = (function (){
var statearr_10226 = [null,null,null,null,null,null,null,null];
(statearr_10226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__);

(statearr_10226[(1)] = (1));

return statearr_10226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1 = (function (state_10220){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10227){if((e10227 instanceof Object)){
var ex__7582__auto__ = e10227;
var statearr_10228_10398 = state_10220;
(statearr_10228_10398[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10399 = state_10220;
state_10220 = G__10399;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = function(state_10220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1.call(this,state_10220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___10397,res,vec__10215,v,p,job,jobs,results))
})();
var state__7645__auto__ = (function (){var statearr_10229 = f__7644__auto__.call(null);
(statearr_10229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___10397);

return statearr_10229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___10397,res,vec__10215,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10230){
var vec__10231 = p__10230;
var v = cljs.core.nth.call(null,vec__10231,(0),null);
var p = cljs.core.nth.call(null,vec__10231,(1),null);
var job = vec__10231;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5464__auto___10400 = n;
var __10401 = (0);
while(true){
if((__10401 < n__5464__auto___10400)){
var G__10232_10402 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10232_10402) {
case "compute":
var c__7643__auto___10404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10401,c__7643__auto___10404,G__10232_10402,n__5464__auto___10400,jobs,results,process,async){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (__10401,c__7643__auto___10404,G__10232_10402,n__5464__auto___10400,jobs,results,process,async){
return (function (state_10245){
var state_val_10246 = (state_10245[(1)]);
if((state_val_10246 === (1))){
var state_10245__$1 = state_10245;
var statearr_10247_10405 = state_10245__$1;
(statearr_10247_10405[(2)] = null);

(statearr_10247_10405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (2))){
var state_10245__$1 = state_10245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10245__$1,(4),jobs);
} else {
if((state_val_10246 === (3))){
var inst_10243 = (state_10245[(2)]);
var state_10245__$1 = state_10245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10245__$1,inst_10243);
} else {
if((state_val_10246 === (4))){
var inst_10235 = (state_10245[(2)]);
var inst_10236 = process.call(null,inst_10235);
var state_10245__$1 = state_10245;
if(cljs.core.truth_(inst_10236)){
var statearr_10248_10406 = state_10245__$1;
(statearr_10248_10406[(1)] = (5));

} else {
var statearr_10249_10407 = state_10245__$1;
(statearr_10249_10407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (5))){
var state_10245__$1 = state_10245;
var statearr_10250_10408 = state_10245__$1;
(statearr_10250_10408[(2)] = null);

(statearr_10250_10408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (6))){
var state_10245__$1 = state_10245;
var statearr_10251_10409 = state_10245__$1;
(statearr_10251_10409[(2)] = null);

(statearr_10251_10409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10246 === (7))){
var inst_10241 = (state_10245[(2)]);
var state_10245__$1 = state_10245;
var statearr_10252_10410 = state_10245__$1;
(statearr_10252_10410[(2)] = inst_10241);

(statearr_10252_10410[(1)] = (3));


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
});})(__10401,c__7643__auto___10404,G__10232_10402,n__5464__auto___10400,jobs,results,process,async))
;
return ((function (__10401,switch__7578__auto__,c__7643__auto___10404,G__10232_10402,n__5464__auto___10400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0 = (function (){
var statearr_10256 = [null,null,null,null,null,null,null];
(statearr_10256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__);

(statearr_10256[(1)] = (1));

return statearr_10256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1 = (function (state_10245){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10257){if((e10257 instanceof Object)){
var ex__7582__auto__ = e10257;
var statearr_10258_10411 = state_10245;
(statearr_10258_10411[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10412 = state_10245;
state_10245 = G__10412;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = function(state_10245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1.call(this,state_10245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__;
})()
;})(__10401,switch__7578__auto__,c__7643__auto___10404,G__10232_10402,n__5464__auto___10400,jobs,results,process,async))
})();
var state__7645__auto__ = (function (){var statearr_10259 = f__7644__auto__.call(null);
(statearr_10259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___10404);

return statearr_10259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(__10401,c__7643__auto___10404,G__10232_10402,n__5464__auto___10400,jobs,results,process,async))
);


break;
case "async":
var c__7643__auto___10413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10401,c__7643__auto___10413,G__10232_10402,n__5464__auto___10400,jobs,results,process,async){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (__10401,c__7643__auto___10413,G__10232_10402,n__5464__auto___10400,jobs,results,process,async){
return (function (state_10272){
var state_val_10273 = (state_10272[(1)]);
if((state_val_10273 === (1))){
var state_10272__$1 = state_10272;
var statearr_10274_10414 = state_10272__$1;
(statearr_10274_10414[(2)] = null);

(statearr_10274_10414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10273 === (2))){
var state_10272__$1 = state_10272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10272__$1,(4),jobs);
} else {
if((state_val_10273 === (3))){
var inst_10270 = (state_10272[(2)]);
var state_10272__$1 = state_10272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10272__$1,inst_10270);
} else {
if((state_val_10273 === (4))){
var inst_10262 = (state_10272[(2)]);
var inst_10263 = async.call(null,inst_10262);
var state_10272__$1 = state_10272;
if(cljs.core.truth_(inst_10263)){
var statearr_10275_10415 = state_10272__$1;
(statearr_10275_10415[(1)] = (5));

} else {
var statearr_10276_10416 = state_10272__$1;
(statearr_10276_10416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10273 === (5))){
var state_10272__$1 = state_10272;
var statearr_10277_10417 = state_10272__$1;
(statearr_10277_10417[(2)] = null);

(statearr_10277_10417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10273 === (6))){
var state_10272__$1 = state_10272;
var statearr_10278_10418 = state_10272__$1;
(statearr_10278_10418[(2)] = null);

(statearr_10278_10418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10273 === (7))){
var inst_10268 = (state_10272[(2)]);
var state_10272__$1 = state_10272;
var statearr_10279_10419 = state_10272__$1;
(statearr_10279_10419[(2)] = inst_10268);

(statearr_10279_10419[(1)] = (3));


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
});})(__10401,c__7643__auto___10413,G__10232_10402,n__5464__auto___10400,jobs,results,process,async))
;
return ((function (__10401,switch__7578__auto__,c__7643__auto___10413,G__10232_10402,n__5464__auto___10400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0 = (function (){
var statearr_10283 = [null,null,null,null,null,null,null];
(statearr_10283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__);

(statearr_10283[(1)] = (1));

return statearr_10283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1 = (function (state_10272){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10284){if((e10284 instanceof Object)){
var ex__7582__auto__ = e10284;
var statearr_10285_10420 = state_10272;
(statearr_10285_10420[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10421 = state_10272;
state_10272 = G__10421;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = function(state_10272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1.call(this,state_10272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__;
})()
;})(__10401,switch__7578__auto__,c__7643__auto___10413,G__10232_10402,n__5464__auto___10400,jobs,results,process,async))
})();
var state__7645__auto__ = (function (){var statearr_10286 = f__7644__auto__.call(null);
(statearr_10286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___10413);

return statearr_10286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(__10401,c__7643__auto___10413,G__10232_10402,n__5464__auto___10400,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10422 = (__10401 + (1));
__10401 = G__10422;
continue;
} else {
}
break;
}

var c__7643__auto___10423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___10423,jobs,results,process,async){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___10423,jobs,results,process,async){
return (function (state_10308){
var state_val_10309 = (state_10308[(1)]);
if((state_val_10309 === (1))){
var state_10308__$1 = state_10308;
var statearr_10310_10424 = state_10308__$1;
(statearr_10310_10424[(2)] = null);

(statearr_10310_10424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10309 === (2))){
var state_10308__$1 = state_10308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10308__$1,(4),from);
} else {
if((state_val_10309 === (3))){
var inst_10306 = (state_10308[(2)]);
var state_10308__$1 = state_10308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10308__$1,inst_10306);
} else {
if((state_val_10309 === (4))){
var inst_10289 = (state_10308[(7)]);
var inst_10289__$1 = (state_10308[(2)]);
var inst_10290 = (inst_10289__$1 == null);
var state_10308__$1 = (function (){var statearr_10311 = state_10308;
(statearr_10311[(7)] = inst_10289__$1);

return statearr_10311;
})();
if(cljs.core.truth_(inst_10290)){
var statearr_10312_10425 = state_10308__$1;
(statearr_10312_10425[(1)] = (5));

} else {
var statearr_10313_10426 = state_10308__$1;
(statearr_10313_10426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10309 === (5))){
var inst_10292 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10308__$1 = state_10308;
var statearr_10314_10427 = state_10308__$1;
(statearr_10314_10427[(2)] = inst_10292);

(statearr_10314_10427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10309 === (6))){
var inst_10289 = (state_10308[(7)]);
var inst_10294 = (state_10308[(8)]);
var inst_10294__$1 = cljs.core.async.chan.call(null,(1));
var inst_10295 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10296 = [inst_10289,inst_10294__$1];
var inst_10297 = (new cljs.core.PersistentVector(null,2,(5),inst_10295,inst_10296,null));
var state_10308__$1 = (function (){var statearr_10315 = state_10308;
(statearr_10315[(8)] = inst_10294__$1);

return statearr_10315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10308__$1,(8),jobs,inst_10297);
} else {
if((state_val_10309 === (7))){
var inst_10304 = (state_10308[(2)]);
var state_10308__$1 = state_10308;
var statearr_10316_10428 = state_10308__$1;
(statearr_10316_10428[(2)] = inst_10304);

(statearr_10316_10428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10309 === (8))){
var inst_10294 = (state_10308[(8)]);
var inst_10299 = (state_10308[(2)]);
var state_10308__$1 = (function (){var statearr_10317 = state_10308;
(statearr_10317[(9)] = inst_10299);

return statearr_10317;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10308__$1,(9),results,inst_10294);
} else {
if((state_val_10309 === (9))){
var inst_10301 = (state_10308[(2)]);
var state_10308__$1 = (function (){var statearr_10318 = state_10308;
(statearr_10318[(10)] = inst_10301);

return statearr_10318;
})();
var statearr_10319_10429 = state_10308__$1;
(statearr_10319_10429[(2)] = null);

(statearr_10319_10429[(1)] = (2));


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
});})(c__7643__auto___10423,jobs,results,process,async))
;
return ((function (switch__7578__auto__,c__7643__auto___10423,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0 = (function (){
var statearr_10323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__);

(statearr_10323[(1)] = (1));

return statearr_10323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1 = (function (state_10308){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10324){if((e10324 instanceof Object)){
var ex__7582__auto__ = e10324;
var statearr_10325_10430 = state_10308;
(statearr_10325_10430[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10431 = state_10308;
state_10308 = G__10431;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = function(state_10308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1.call(this,state_10308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___10423,jobs,results,process,async))
})();
var state__7645__auto__ = (function (){var statearr_10326 = f__7644__auto__.call(null);
(statearr_10326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___10423);

return statearr_10326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___10423,jobs,results,process,async))
);


var c__7643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto__,jobs,results,process,async){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto__,jobs,results,process,async){
return (function (state_10364){
var state_val_10365 = (state_10364[(1)]);
if((state_val_10365 === (7))){
var inst_10360 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10366_10432 = state_10364__$1;
(statearr_10366_10432[(2)] = inst_10360);

(statearr_10366_10432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (20))){
var state_10364__$1 = state_10364;
var statearr_10367_10433 = state_10364__$1;
(statearr_10367_10433[(2)] = null);

(statearr_10367_10433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (1))){
var state_10364__$1 = state_10364;
var statearr_10368_10434 = state_10364__$1;
(statearr_10368_10434[(2)] = null);

(statearr_10368_10434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (4))){
var inst_10329 = (state_10364[(7)]);
var inst_10329__$1 = (state_10364[(2)]);
var inst_10330 = (inst_10329__$1 == null);
var state_10364__$1 = (function (){var statearr_10369 = state_10364;
(statearr_10369[(7)] = inst_10329__$1);

return statearr_10369;
})();
if(cljs.core.truth_(inst_10330)){
var statearr_10370_10435 = state_10364__$1;
(statearr_10370_10435[(1)] = (5));

} else {
var statearr_10371_10436 = state_10364__$1;
(statearr_10371_10436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (15))){
var inst_10342 = (state_10364[(8)]);
var state_10364__$1 = state_10364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10364__$1,(18),to,inst_10342);
} else {
if((state_val_10365 === (21))){
var inst_10355 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10372_10437 = state_10364__$1;
(statearr_10372_10437[(2)] = inst_10355);

(statearr_10372_10437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (13))){
var inst_10357 = (state_10364[(2)]);
var state_10364__$1 = (function (){var statearr_10373 = state_10364;
(statearr_10373[(9)] = inst_10357);

return statearr_10373;
})();
var statearr_10374_10438 = state_10364__$1;
(statearr_10374_10438[(2)] = null);

(statearr_10374_10438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (6))){
var inst_10329 = (state_10364[(7)]);
var state_10364__$1 = state_10364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10364__$1,(11),inst_10329);
} else {
if((state_val_10365 === (17))){
var inst_10350 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10350)){
var statearr_10375_10439 = state_10364__$1;
(statearr_10375_10439[(1)] = (19));

} else {
var statearr_10376_10440 = state_10364__$1;
(statearr_10376_10440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (3))){
var inst_10362 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10364__$1,inst_10362);
} else {
if((state_val_10365 === (12))){
var inst_10339 = (state_10364[(10)]);
var state_10364__$1 = state_10364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10364__$1,(14),inst_10339);
} else {
if((state_val_10365 === (2))){
var state_10364__$1 = state_10364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10364__$1,(4),results);
} else {
if((state_val_10365 === (19))){
var state_10364__$1 = state_10364;
var statearr_10377_10441 = state_10364__$1;
(statearr_10377_10441[(2)] = null);

(statearr_10377_10441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (11))){
var inst_10339 = (state_10364[(2)]);
var state_10364__$1 = (function (){var statearr_10378 = state_10364;
(statearr_10378[(10)] = inst_10339);

return statearr_10378;
})();
var statearr_10379_10442 = state_10364__$1;
(statearr_10379_10442[(2)] = null);

(statearr_10379_10442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (9))){
var state_10364__$1 = state_10364;
var statearr_10380_10443 = state_10364__$1;
(statearr_10380_10443[(2)] = null);

(statearr_10380_10443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (5))){
var state_10364__$1 = state_10364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10381_10444 = state_10364__$1;
(statearr_10381_10444[(1)] = (8));

} else {
var statearr_10382_10445 = state_10364__$1;
(statearr_10382_10445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (14))){
var inst_10342 = (state_10364[(8)]);
var inst_10344 = (state_10364[(11)]);
var inst_10342__$1 = (state_10364[(2)]);
var inst_10343 = (inst_10342__$1 == null);
var inst_10344__$1 = cljs.core.not.call(null,inst_10343);
var state_10364__$1 = (function (){var statearr_10383 = state_10364;
(statearr_10383[(8)] = inst_10342__$1);

(statearr_10383[(11)] = inst_10344__$1);

return statearr_10383;
})();
if(inst_10344__$1){
var statearr_10384_10446 = state_10364__$1;
(statearr_10384_10446[(1)] = (15));

} else {
var statearr_10385_10447 = state_10364__$1;
(statearr_10385_10447[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (16))){
var inst_10344 = (state_10364[(11)]);
var state_10364__$1 = state_10364;
var statearr_10386_10448 = state_10364__$1;
(statearr_10386_10448[(2)] = inst_10344);

(statearr_10386_10448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (10))){
var inst_10336 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10387_10449 = state_10364__$1;
(statearr_10387_10449[(2)] = inst_10336);

(statearr_10387_10449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (18))){
var inst_10347 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10388_10450 = state_10364__$1;
(statearr_10388_10450[(2)] = inst_10347);

(statearr_10388_10450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (8))){
var inst_10333 = cljs.core.async.close_BANG_.call(null,to);
var state_10364__$1 = state_10364;
var statearr_10389_10451 = state_10364__$1;
(statearr_10389_10451[(2)] = inst_10333);

(statearr_10389_10451[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__7643__auto__,jobs,results,process,async))
;
return ((function (switch__7578__auto__,c__7643__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0 = (function (){
var statearr_10393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__);

(statearr_10393[(1)] = (1));

return statearr_10393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1 = (function (state_10364){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10394){if((e10394 instanceof Object)){
var ex__7582__auto__ = e10394;
var statearr_10395_10452 = state_10364;
(statearr_10395_10452[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10453 = state_10364;
state_10364 = G__10453;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__ = function(state_10364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1.call(this,state_10364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7579__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__,jobs,results,process,async))
})();
var state__7645__auto__ = (function (){var statearr_10396 = f__7644__auto__.call(null);
(statearr_10396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_10396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto__,jobs,results,process,async))
);

return c__7643__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args10454 = [];
var len__5619__auto___10457 = arguments.length;
var i__5620__auto___10458 = (0);
while(true){
if((i__5620__auto___10458 < len__5619__auto___10457)){
args10454.push((arguments[i__5620__auto___10458]));

var G__10459 = (i__5620__auto___10458 + (1));
i__5620__auto___10458 = G__10459;
continue;
} else {
}
break;
}

var G__10456 = args10454.length;
switch (G__10456) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10454.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args10461 = [];
var len__5619__auto___10464 = arguments.length;
var i__5620__auto___10465 = (0);
while(true){
if((i__5620__auto___10465 < len__5619__auto___10464)){
args10461.push((arguments[i__5620__auto___10465]));

var G__10466 = (i__5620__auto___10465 + (1));
i__5620__auto___10465 = G__10466;
continue;
} else {
}
break;
}

var G__10463 = args10461.length;
switch (G__10463) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10461.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args10468 = [];
var len__5619__auto___10521 = arguments.length;
var i__5620__auto___10522 = (0);
while(true){
if((i__5620__auto___10522 < len__5619__auto___10521)){
args10468.push((arguments[i__5620__auto___10522]));

var G__10523 = (i__5620__auto___10522 + (1));
i__5620__auto___10522 = G__10523;
continue;
} else {
}
break;
}

var G__10470 = args10468.length;
switch (G__10470) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10468.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7643__auto___10525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___10525,tc,fc){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___10525,tc,fc){
return (function (state_10496){
var state_val_10497 = (state_10496[(1)]);
if((state_val_10497 === (7))){
var inst_10492 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
var statearr_10498_10526 = state_10496__$1;
(statearr_10498_10526[(2)] = inst_10492);

(statearr_10498_10526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (1))){
var state_10496__$1 = state_10496;
var statearr_10499_10527 = state_10496__$1;
(statearr_10499_10527[(2)] = null);

(statearr_10499_10527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (4))){
var inst_10473 = (state_10496[(7)]);
var inst_10473__$1 = (state_10496[(2)]);
var inst_10474 = (inst_10473__$1 == null);
var state_10496__$1 = (function (){var statearr_10500 = state_10496;
(statearr_10500[(7)] = inst_10473__$1);

return statearr_10500;
})();
if(cljs.core.truth_(inst_10474)){
var statearr_10501_10528 = state_10496__$1;
(statearr_10501_10528[(1)] = (5));

} else {
var statearr_10502_10529 = state_10496__$1;
(statearr_10502_10529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (13))){
var state_10496__$1 = state_10496;
var statearr_10503_10530 = state_10496__$1;
(statearr_10503_10530[(2)] = null);

(statearr_10503_10530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (6))){
var inst_10473 = (state_10496[(7)]);
var inst_10479 = p.call(null,inst_10473);
var state_10496__$1 = state_10496;
if(cljs.core.truth_(inst_10479)){
var statearr_10504_10531 = state_10496__$1;
(statearr_10504_10531[(1)] = (9));

} else {
var statearr_10505_10532 = state_10496__$1;
(statearr_10505_10532[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (3))){
var inst_10494 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10496__$1,inst_10494);
} else {
if((state_val_10497 === (12))){
var state_10496__$1 = state_10496;
var statearr_10506_10533 = state_10496__$1;
(statearr_10506_10533[(2)] = null);

(statearr_10506_10533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (2))){
var state_10496__$1 = state_10496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10496__$1,(4),ch);
} else {
if((state_val_10497 === (11))){
var inst_10473 = (state_10496[(7)]);
var inst_10483 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10496__$1,(8),inst_10483,inst_10473);
} else {
if((state_val_10497 === (9))){
var state_10496__$1 = state_10496;
var statearr_10507_10534 = state_10496__$1;
(statearr_10507_10534[(2)] = tc);

(statearr_10507_10534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (5))){
var inst_10476 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10477 = cljs.core.async.close_BANG_.call(null,fc);
var state_10496__$1 = (function (){var statearr_10508 = state_10496;
(statearr_10508[(8)] = inst_10476);

return statearr_10508;
})();
var statearr_10509_10535 = state_10496__$1;
(statearr_10509_10535[(2)] = inst_10477);

(statearr_10509_10535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (14))){
var inst_10490 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
var statearr_10510_10536 = state_10496__$1;
(statearr_10510_10536[(2)] = inst_10490);

(statearr_10510_10536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (10))){
var state_10496__$1 = state_10496;
var statearr_10511_10537 = state_10496__$1;
(statearr_10511_10537[(2)] = fc);

(statearr_10511_10537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10497 === (8))){
var inst_10485 = (state_10496[(2)]);
var state_10496__$1 = state_10496;
if(cljs.core.truth_(inst_10485)){
var statearr_10512_10538 = state_10496__$1;
(statearr_10512_10538[(1)] = (12));

} else {
var statearr_10513_10539 = state_10496__$1;
(statearr_10513_10539[(1)] = (13));

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
}
});})(c__7643__auto___10525,tc,fc))
;
return ((function (switch__7578__auto__,c__7643__auto___10525,tc,fc){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_10517 = [null,null,null,null,null,null,null,null,null];
(statearr_10517[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_10517[(1)] = (1));

return statearr_10517;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_10496){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10518){if((e10518 instanceof Object)){
var ex__7582__auto__ = e10518;
var statearr_10519_10540 = state_10496;
(statearr_10519_10540[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10541 = state_10496;
state_10496 = G__10541;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_10496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_10496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___10525,tc,fc))
})();
var state__7645__auto__ = (function (){var statearr_10520 = f__7644__auto__.call(null);
(statearr_10520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___10525);

return statearr_10520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___10525,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto__){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto__){
return (function (state_10588){
var state_val_10589 = (state_10588[(1)]);
if((state_val_10589 === (1))){
var inst_10574 = init;
var state_10588__$1 = (function (){var statearr_10590 = state_10588;
(statearr_10590[(7)] = inst_10574);

return statearr_10590;
})();
var statearr_10591_10606 = state_10588__$1;
(statearr_10591_10606[(2)] = null);

(statearr_10591_10606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (2))){
var state_10588__$1 = state_10588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10588__$1,(4),ch);
} else {
if((state_val_10589 === (3))){
var inst_10586 = (state_10588[(2)]);
var state_10588__$1 = state_10588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10588__$1,inst_10586);
} else {
if((state_val_10589 === (4))){
var inst_10577 = (state_10588[(8)]);
var inst_10577__$1 = (state_10588[(2)]);
var inst_10578 = (inst_10577__$1 == null);
var state_10588__$1 = (function (){var statearr_10592 = state_10588;
(statearr_10592[(8)] = inst_10577__$1);

return statearr_10592;
})();
if(cljs.core.truth_(inst_10578)){
var statearr_10593_10607 = state_10588__$1;
(statearr_10593_10607[(1)] = (5));

} else {
var statearr_10594_10608 = state_10588__$1;
(statearr_10594_10608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (5))){
var inst_10574 = (state_10588[(7)]);
var state_10588__$1 = state_10588;
var statearr_10595_10609 = state_10588__$1;
(statearr_10595_10609[(2)] = inst_10574);

(statearr_10595_10609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (6))){
var inst_10574 = (state_10588[(7)]);
var inst_10577 = (state_10588[(8)]);
var inst_10581 = f.call(null,inst_10574,inst_10577);
var inst_10574__$1 = inst_10581;
var state_10588__$1 = (function (){var statearr_10596 = state_10588;
(statearr_10596[(7)] = inst_10574__$1);

return statearr_10596;
})();
var statearr_10597_10610 = state_10588__$1;
(statearr_10597_10610[(2)] = null);

(statearr_10597_10610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10589 === (7))){
var inst_10584 = (state_10588[(2)]);
var state_10588__$1 = state_10588;
var statearr_10598_10611 = state_10588__$1;
(statearr_10598_10611[(2)] = inst_10584);

(statearr_10598_10611[(1)] = (3));


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
});})(c__7643__auto__))
;
return ((function (switch__7578__auto__,c__7643__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7579__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7579__auto____0 = (function (){
var statearr_10602 = [null,null,null,null,null,null,null,null,null];
(statearr_10602[(0)] = cljs$core$async$reduce_$_state_machine__7579__auto__);

(statearr_10602[(1)] = (1));

return statearr_10602;
});
var cljs$core$async$reduce_$_state_machine__7579__auto____1 = (function (state_10588){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10603){if((e10603 instanceof Object)){
var ex__7582__auto__ = e10603;
var statearr_10604_10612 = state_10588;
(statearr_10604_10612[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10613 = state_10588;
state_10588 = G__10613;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7579__auto__ = function(state_10588){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7579__auto____1.call(this,state_10588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7579__auto____0;
cljs$core$async$reduce_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7579__auto____1;
return cljs$core$async$reduce_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__))
})();
var state__7645__auto__ = (function (){var statearr_10605 = f__7644__auto__.call(null);
(statearr_10605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_10605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto__))
);

return c__7643__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args10614 = [];
var len__5619__auto___10666 = arguments.length;
var i__5620__auto___10667 = (0);
while(true){
if((i__5620__auto___10667 < len__5619__auto___10666)){
args10614.push((arguments[i__5620__auto___10667]));

var G__10668 = (i__5620__auto___10667 + (1));
i__5620__auto___10667 = G__10668;
continue;
} else {
}
break;
}

var G__10616 = args10614.length;
switch (G__10616) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10614.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto__){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto__){
return (function (state_10641){
var state_val_10642 = (state_10641[(1)]);
if((state_val_10642 === (7))){
var inst_10623 = (state_10641[(2)]);
var state_10641__$1 = state_10641;
var statearr_10643_10670 = state_10641__$1;
(statearr_10643_10670[(2)] = inst_10623);

(statearr_10643_10670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (1))){
var inst_10617 = cljs.core.seq.call(null,coll);
var inst_10618 = inst_10617;
var state_10641__$1 = (function (){var statearr_10644 = state_10641;
(statearr_10644[(7)] = inst_10618);

return statearr_10644;
})();
var statearr_10645_10671 = state_10641__$1;
(statearr_10645_10671[(2)] = null);

(statearr_10645_10671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (4))){
var inst_10618 = (state_10641[(7)]);
var inst_10621 = cljs.core.first.call(null,inst_10618);
var state_10641__$1 = state_10641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10641__$1,(7),ch,inst_10621);
} else {
if((state_val_10642 === (13))){
var inst_10635 = (state_10641[(2)]);
var state_10641__$1 = state_10641;
var statearr_10646_10672 = state_10641__$1;
(statearr_10646_10672[(2)] = inst_10635);

(statearr_10646_10672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (6))){
var inst_10626 = (state_10641[(2)]);
var state_10641__$1 = state_10641;
if(cljs.core.truth_(inst_10626)){
var statearr_10647_10673 = state_10641__$1;
(statearr_10647_10673[(1)] = (8));

} else {
var statearr_10648_10674 = state_10641__$1;
(statearr_10648_10674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (3))){
var inst_10639 = (state_10641[(2)]);
var state_10641__$1 = state_10641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10641__$1,inst_10639);
} else {
if((state_val_10642 === (12))){
var state_10641__$1 = state_10641;
var statearr_10649_10675 = state_10641__$1;
(statearr_10649_10675[(2)] = null);

(statearr_10649_10675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (2))){
var inst_10618 = (state_10641[(7)]);
var state_10641__$1 = state_10641;
if(cljs.core.truth_(inst_10618)){
var statearr_10650_10676 = state_10641__$1;
(statearr_10650_10676[(1)] = (4));

} else {
var statearr_10651_10677 = state_10641__$1;
(statearr_10651_10677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (11))){
var inst_10632 = cljs.core.async.close_BANG_.call(null,ch);
var state_10641__$1 = state_10641;
var statearr_10652_10678 = state_10641__$1;
(statearr_10652_10678[(2)] = inst_10632);

(statearr_10652_10678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (9))){
var state_10641__$1 = state_10641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10653_10679 = state_10641__$1;
(statearr_10653_10679[(1)] = (11));

} else {
var statearr_10654_10680 = state_10641__$1;
(statearr_10654_10680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (5))){
var inst_10618 = (state_10641[(7)]);
var state_10641__$1 = state_10641;
var statearr_10655_10681 = state_10641__$1;
(statearr_10655_10681[(2)] = inst_10618);

(statearr_10655_10681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (10))){
var inst_10637 = (state_10641[(2)]);
var state_10641__$1 = state_10641;
var statearr_10656_10682 = state_10641__$1;
(statearr_10656_10682[(2)] = inst_10637);

(statearr_10656_10682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10642 === (8))){
var inst_10618 = (state_10641[(7)]);
var inst_10628 = cljs.core.next.call(null,inst_10618);
var inst_10618__$1 = inst_10628;
var state_10641__$1 = (function (){var statearr_10657 = state_10641;
(statearr_10657[(7)] = inst_10618__$1);

return statearr_10657;
})();
var statearr_10658_10683 = state_10641__$1;
(statearr_10658_10683[(2)] = null);

(statearr_10658_10683[(1)] = (2));


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
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_10662 = [null,null,null,null,null,null,null,null];
(statearr_10662[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_10662[(1)] = (1));

return statearr_10662;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_10641){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_10641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e10663){if((e10663 instanceof Object)){
var ex__7582__auto__ = e10663;
var statearr_10664_10684 = state_10641;
(statearr_10664_10684[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10685 = state_10641;
state_10641 = G__10685;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_10641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_10641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__))
})();
var state__7645__auto__ = (function (){var statearr_10665 = f__7644__auto__.call(null);
(statearr_10665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_10665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto__))
);

return c__7643__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5216__auto__ = (((_ == null))?null:_);
var m__5217__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,_);
} else {
var m__5217__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5217__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m);
} else {
var m__5217__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10907 = (function (mult,ch,cs,meta10908){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10908 = meta10908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10909,meta10908__$1){
var self__ = this;
var _10909__$1 = this;
return (new cljs.core.async.t_cljs$core$async10907(self__.mult,self__.ch,self__.cs,meta10908__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10909){
var self__ = this;
var _10909__$1 = this;
return self__.meta10908;
});})(cs))
;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10907.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10908","meta10908",-2071573489,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10907";

cljs.core.async.t_cljs$core$async10907.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async10907");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10907 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10907(mult__$1,ch__$1,cs__$1,meta10908){
return (new cljs.core.async.t_cljs$core$async10907(mult__$1,ch__$1,cs__$1,meta10908));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10907(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7643__auto___11128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___11128,cs,m,dchan,dctr,done){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___11128,cs,m,dchan,dctr,done){
return (function (state_11040){
var state_val_11041 = (state_11040[(1)]);
if((state_val_11041 === (7))){
var inst_11036 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11042_11129 = state_11040__$1;
(statearr_11042_11129[(2)] = inst_11036);

(statearr_11042_11129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (20))){
var inst_10941 = (state_11040[(7)]);
var inst_10951 = cljs.core.first.call(null,inst_10941);
var inst_10952 = cljs.core.nth.call(null,inst_10951,(0),null);
var inst_10953 = cljs.core.nth.call(null,inst_10951,(1),null);
var state_11040__$1 = (function (){var statearr_11043 = state_11040;
(statearr_11043[(8)] = inst_10952);

return statearr_11043;
})();
if(cljs.core.truth_(inst_10953)){
var statearr_11044_11130 = state_11040__$1;
(statearr_11044_11130[(1)] = (22));

} else {
var statearr_11045_11131 = state_11040__$1;
(statearr_11045_11131[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (27))){
var inst_10981 = (state_11040[(9)]);
var inst_10983 = (state_11040[(10)]);
var inst_10988 = (state_11040[(11)]);
var inst_10912 = (state_11040[(12)]);
var inst_10988__$1 = cljs.core._nth.call(null,inst_10981,inst_10983);
var inst_10989 = cljs.core.async.put_BANG_.call(null,inst_10988__$1,inst_10912,done);
var state_11040__$1 = (function (){var statearr_11046 = state_11040;
(statearr_11046[(11)] = inst_10988__$1);

return statearr_11046;
})();
if(cljs.core.truth_(inst_10989)){
var statearr_11047_11132 = state_11040__$1;
(statearr_11047_11132[(1)] = (30));

} else {
var statearr_11048_11133 = state_11040__$1;
(statearr_11048_11133[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (1))){
var state_11040__$1 = state_11040;
var statearr_11049_11134 = state_11040__$1;
(statearr_11049_11134[(2)] = null);

(statearr_11049_11134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (24))){
var inst_10941 = (state_11040[(7)]);
var inst_10958 = (state_11040[(2)]);
var inst_10959 = cljs.core.next.call(null,inst_10941);
var inst_10921 = inst_10959;
var inst_10922 = null;
var inst_10923 = (0);
var inst_10924 = (0);
var state_11040__$1 = (function (){var statearr_11050 = state_11040;
(statearr_11050[(13)] = inst_10921);

(statearr_11050[(14)] = inst_10924);

(statearr_11050[(15)] = inst_10958);

(statearr_11050[(16)] = inst_10923);

(statearr_11050[(17)] = inst_10922);

return statearr_11050;
})();
var statearr_11051_11135 = state_11040__$1;
(statearr_11051_11135[(2)] = null);

(statearr_11051_11135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (39))){
var state_11040__$1 = state_11040;
var statearr_11055_11136 = state_11040__$1;
(statearr_11055_11136[(2)] = null);

(statearr_11055_11136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (4))){
var inst_10912 = (state_11040[(12)]);
var inst_10912__$1 = (state_11040[(2)]);
var inst_10913 = (inst_10912__$1 == null);
var state_11040__$1 = (function (){var statearr_11056 = state_11040;
(statearr_11056[(12)] = inst_10912__$1);

return statearr_11056;
})();
if(cljs.core.truth_(inst_10913)){
var statearr_11057_11137 = state_11040__$1;
(statearr_11057_11137[(1)] = (5));

} else {
var statearr_11058_11138 = state_11040__$1;
(statearr_11058_11138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (15))){
var inst_10921 = (state_11040[(13)]);
var inst_10924 = (state_11040[(14)]);
var inst_10923 = (state_11040[(16)]);
var inst_10922 = (state_11040[(17)]);
var inst_10937 = (state_11040[(2)]);
var inst_10938 = (inst_10924 + (1));
var tmp11052 = inst_10921;
var tmp11053 = inst_10923;
var tmp11054 = inst_10922;
var inst_10921__$1 = tmp11052;
var inst_10922__$1 = tmp11054;
var inst_10923__$1 = tmp11053;
var inst_10924__$1 = inst_10938;
var state_11040__$1 = (function (){var statearr_11059 = state_11040;
(statearr_11059[(13)] = inst_10921__$1);

(statearr_11059[(18)] = inst_10937);

(statearr_11059[(14)] = inst_10924__$1);

(statearr_11059[(16)] = inst_10923__$1);

(statearr_11059[(17)] = inst_10922__$1);

return statearr_11059;
})();
var statearr_11060_11139 = state_11040__$1;
(statearr_11060_11139[(2)] = null);

(statearr_11060_11139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (21))){
var inst_10962 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11064_11140 = state_11040__$1;
(statearr_11064_11140[(2)] = inst_10962);

(statearr_11064_11140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (31))){
var inst_10988 = (state_11040[(11)]);
var inst_10992 = done.call(null,null);
var inst_10993 = cljs.core.async.untap_STAR_.call(null,m,inst_10988);
var state_11040__$1 = (function (){var statearr_11065 = state_11040;
(statearr_11065[(19)] = inst_10992);

return statearr_11065;
})();
var statearr_11066_11141 = state_11040__$1;
(statearr_11066_11141[(2)] = inst_10993);

(statearr_11066_11141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (32))){
var inst_10980 = (state_11040[(20)]);
var inst_10981 = (state_11040[(9)]);
var inst_10983 = (state_11040[(10)]);
var inst_10982 = (state_11040[(21)]);
var inst_10995 = (state_11040[(2)]);
var inst_10996 = (inst_10983 + (1));
var tmp11061 = inst_10980;
var tmp11062 = inst_10981;
var tmp11063 = inst_10982;
var inst_10980__$1 = tmp11061;
var inst_10981__$1 = tmp11062;
var inst_10982__$1 = tmp11063;
var inst_10983__$1 = inst_10996;
var state_11040__$1 = (function (){var statearr_11067 = state_11040;
(statearr_11067[(20)] = inst_10980__$1);

(statearr_11067[(9)] = inst_10981__$1);

(statearr_11067[(22)] = inst_10995);

(statearr_11067[(10)] = inst_10983__$1);

(statearr_11067[(21)] = inst_10982__$1);

return statearr_11067;
})();
var statearr_11068_11142 = state_11040__$1;
(statearr_11068_11142[(2)] = null);

(statearr_11068_11142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (40))){
var inst_11008 = (state_11040[(23)]);
var inst_11012 = done.call(null,null);
var inst_11013 = cljs.core.async.untap_STAR_.call(null,m,inst_11008);
var state_11040__$1 = (function (){var statearr_11069 = state_11040;
(statearr_11069[(24)] = inst_11012);

return statearr_11069;
})();
var statearr_11070_11143 = state_11040__$1;
(statearr_11070_11143[(2)] = inst_11013);

(statearr_11070_11143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (33))){
var inst_10999 = (state_11040[(25)]);
var inst_11001 = cljs.core.chunked_seq_QMARK_.call(null,inst_10999);
var state_11040__$1 = state_11040;
if(inst_11001){
var statearr_11071_11144 = state_11040__$1;
(statearr_11071_11144[(1)] = (36));

} else {
var statearr_11072_11145 = state_11040__$1;
(statearr_11072_11145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (13))){
var inst_10931 = (state_11040[(26)]);
var inst_10934 = cljs.core.async.close_BANG_.call(null,inst_10931);
var state_11040__$1 = state_11040;
var statearr_11073_11146 = state_11040__$1;
(statearr_11073_11146[(2)] = inst_10934);

(statearr_11073_11146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (22))){
var inst_10952 = (state_11040[(8)]);
var inst_10955 = cljs.core.async.close_BANG_.call(null,inst_10952);
var state_11040__$1 = state_11040;
var statearr_11074_11147 = state_11040__$1;
(statearr_11074_11147[(2)] = inst_10955);

(statearr_11074_11147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (36))){
var inst_10999 = (state_11040[(25)]);
var inst_11003 = cljs.core.chunk_first.call(null,inst_10999);
var inst_11004 = cljs.core.chunk_rest.call(null,inst_10999);
var inst_11005 = cljs.core.count.call(null,inst_11003);
var inst_10980 = inst_11004;
var inst_10981 = inst_11003;
var inst_10982 = inst_11005;
var inst_10983 = (0);
var state_11040__$1 = (function (){var statearr_11075 = state_11040;
(statearr_11075[(20)] = inst_10980);

(statearr_11075[(9)] = inst_10981);

(statearr_11075[(10)] = inst_10983);

(statearr_11075[(21)] = inst_10982);

return statearr_11075;
})();
var statearr_11076_11148 = state_11040__$1;
(statearr_11076_11148[(2)] = null);

(statearr_11076_11148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (41))){
var inst_10999 = (state_11040[(25)]);
var inst_11015 = (state_11040[(2)]);
var inst_11016 = cljs.core.next.call(null,inst_10999);
var inst_10980 = inst_11016;
var inst_10981 = null;
var inst_10982 = (0);
var inst_10983 = (0);
var state_11040__$1 = (function (){var statearr_11077 = state_11040;
(statearr_11077[(20)] = inst_10980);

(statearr_11077[(9)] = inst_10981);

(statearr_11077[(10)] = inst_10983);

(statearr_11077[(21)] = inst_10982);

(statearr_11077[(27)] = inst_11015);

return statearr_11077;
})();
var statearr_11078_11149 = state_11040__$1;
(statearr_11078_11149[(2)] = null);

(statearr_11078_11149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (43))){
var state_11040__$1 = state_11040;
var statearr_11079_11150 = state_11040__$1;
(statearr_11079_11150[(2)] = null);

(statearr_11079_11150[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (29))){
var inst_11024 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11080_11151 = state_11040__$1;
(statearr_11080_11151[(2)] = inst_11024);

(statearr_11080_11151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (44))){
var inst_11033 = (state_11040[(2)]);
var state_11040__$1 = (function (){var statearr_11081 = state_11040;
(statearr_11081[(28)] = inst_11033);

return statearr_11081;
})();
var statearr_11082_11152 = state_11040__$1;
(statearr_11082_11152[(2)] = null);

(statearr_11082_11152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (6))){
var inst_10972 = (state_11040[(29)]);
var inst_10971 = cljs.core.deref.call(null,cs);
var inst_10972__$1 = cljs.core.keys.call(null,inst_10971);
var inst_10973 = cljs.core.count.call(null,inst_10972__$1);
var inst_10974 = cljs.core.reset_BANG_.call(null,dctr,inst_10973);
var inst_10979 = cljs.core.seq.call(null,inst_10972__$1);
var inst_10980 = inst_10979;
var inst_10981 = null;
var inst_10982 = (0);
var inst_10983 = (0);
var state_11040__$1 = (function (){var statearr_11083 = state_11040;
(statearr_11083[(20)] = inst_10980);

(statearr_11083[(9)] = inst_10981);

(statearr_11083[(10)] = inst_10983);

(statearr_11083[(29)] = inst_10972__$1);

(statearr_11083[(30)] = inst_10974);

(statearr_11083[(21)] = inst_10982);

return statearr_11083;
})();
var statearr_11084_11153 = state_11040__$1;
(statearr_11084_11153[(2)] = null);

(statearr_11084_11153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (28))){
var inst_10999 = (state_11040[(25)]);
var inst_10980 = (state_11040[(20)]);
var inst_10999__$1 = cljs.core.seq.call(null,inst_10980);
var state_11040__$1 = (function (){var statearr_11085 = state_11040;
(statearr_11085[(25)] = inst_10999__$1);

return statearr_11085;
})();
if(inst_10999__$1){
var statearr_11086_11154 = state_11040__$1;
(statearr_11086_11154[(1)] = (33));

} else {
var statearr_11087_11155 = state_11040__$1;
(statearr_11087_11155[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (25))){
var inst_10983 = (state_11040[(10)]);
var inst_10982 = (state_11040[(21)]);
var inst_10985 = (inst_10983 < inst_10982);
var inst_10986 = inst_10985;
var state_11040__$1 = state_11040;
if(cljs.core.truth_(inst_10986)){
var statearr_11088_11156 = state_11040__$1;
(statearr_11088_11156[(1)] = (27));

} else {
var statearr_11089_11157 = state_11040__$1;
(statearr_11089_11157[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (34))){
var state_11040__$1 = state_11040;
var statearr_11090_11158 = state_11040__$1;
(statearr_11090_11158[(2)] = null);

(statearr_11090_11158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (17))){
var state_11040__$1 = state_11040;
var statearr_11091_11159 = state_11040__$1;
(statearr_11091_11159[(2)] = null);

(statearr_11091_11159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (3))){
var inst_11038 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11040__$1,inst_11038);
} else {
if((state_val_11041 === (12))){
var inst_10967 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11092_11160 = state_11040__$1;
(statearr_11092_11160[(2)] = inst_10967);

(statearr_11092_11160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (2))){
var state_11040__$1 = state_11040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11040__$1,(4),ch);
} else {
if((state_val_11041 === (23))){
var state_11040__$1 = state_11040;
var statearr_11093_11161 = state_11040__$1;
(statearr_11093_11161[(2)] = null);

(statearr_11093_11161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (35))){
var inst_11022 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11094_11162 = state_11040__$1;
(statearr_11094_11162[(2)] = inst_11022);

(statearr_11094_11162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (19))){
var inst_10941 = (state_11040[(7)]);
var inst_10945 = cljs.core.chunk_first.call(null,inst_10941);
var inst_10946 = cljs.core.chunk_rest.call(null,inst_10941);
var inst_10947 = cljs.core.count.call(null,inst_10945);
var inst_10921 = inst_10946;
var inst_10922 = inst_10945;
var inst_10923 = inst_10947;
var inst_10924 = (0);
var state_11040__$1 = (function (){var statearr_11095 = state_11040;
(statearr_11095[(13)] = inst_10921);

(statearr_11095[(14)] = inst_10924);

(statearr_11095[(16)] = inst_10923);

(statearr_11095[(17)] = inst_10922);

return statearr_11095;
})();
var statearr_11096_11163 = state_11040__$1;
(statearr_11096_11163[(2)] = null);

(statearr_11096_11163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (11))){
var inst_10921 = (state_11040[(13)]);
var inst_10941 = (state_11040[(7)]);
var inst_10941__$1 = cljs.core.seq.call(null,inst_10921);
var state_11040__$1 = (function (){var statearr_11097 = state_11040;
(statearr_11097[(7)] = inst_10941__$1);

return statearr_11097;
})();
if(inst_10941__$1){
var statearr_11098_11164 = state_11040__$1;
(statearr_11098_11164[(1)] = (16));

} else {
var statearr_11099_11165 = state_11040__$1;
(statearr_11099_11165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (9))){
var inst_10969 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11100_11166 = state_11040__$1;
(statearr_11100_11166[(2)] = inst_10969);

(statearr_11100_11166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (5))){
var inst_10919 = cljs.core.deref.call(null,cs);
var inst_10920 = cljs.core.seq.call(null,inst_10919);
var inst_10921 = inst_10920;
var inst_10922 = null;
var inst_10923 = (0);
var inst_10924 = (0);
var state_11040__$1 = (function (){var statearr_11101 = state_11040;
(statearr_11101[(13)] = inst_10921);

(statearr_11101[(14)] = inst_10924);

(statearr_11101[(16)] = inst_10923);

(statearr_11101[(17)] = inst_10922);

return statearr_11101;
})();
var statearr_11102_11167 = state_11040__$1;
(statearr_11102_11167[(2)] = null);

(statearr_11102_11167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (14))){
var state_11040__$1 = state_11040;
var statearr_11103_11168 = state_11040__$1;
(statearr_11103_11168[(2)] = null);

(statearr_11103_11168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (45))){
var inst_11030 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11104_11169 = state_11040__$1;
(statearr_11104_11169[(2)] = inst_11030);

(statearr_11104_11169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (26))){
var inst_10972 = (state_11040[(29)]);
var inst_11026 = (state_11040[(2)]);
var inst_11027 = cljs.core.seq.call(null,inst_10972);
var state_11040__$1 = (function (){var statearr_11105 = state_11040;
(statearr_11105[(31)] = inst_11026);

return statearr_11105;
})();
if(inst_11027){
var statearr_11106_11170 = state_11040__$1;
(statearr_11106_11170[(1)] = (42));

} else {
var statearr_11107_11171 = state_11040__$1;
(statearr_11107_11171[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (16))){
var inst_10941 = (state_11040[(7)]);
var inst_10943 = cljs.core.chunked_seq_QMARK_.call(null,inst_10941);
var state_11040__$1 = state_11040;
if(inst_10943){
var statearr_11108_11172 = state_11040__$1;
(statearr_11108_11172[(1)] = (19));

} else {
var statearr_11109_11173 = state_11040__$1;
(statearr_11109_11173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (38))){
var inst_11019 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11110_11174 = state_11040__$1;
(statearr_11110_11174[(2)] = inst_11019);

(statearr_11110_11174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (30))){
var state_11040__$1 = state_11040;
var statearr_11111_11175 = state_11040__$1;
(statearr_11111_11175[(2)] = null);

(statearr_11111_11175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (10))){
var inst_10924 = (state_11040[(14)]);
var inst_10922 = (state_11040[(17)]);
var inst_10930 = cljs.core._nth.call(null,inst_10922,inst_10924);
var inst_10931 = cljs.core.nth.call(null,inst_10930,(0),null);
var inst_10932 = cljs.core.nth.call(null,inst_10930,(1),null);
var state_11040__$1 = (function (){var statearr_11112 = state_11040;
(statearr_11112[(26)] = inst_10931);

return statearr_11112;
})();
if(cljs.core.truth_(inst_10932)){
var statearr_11113_11176 = state_11040__$1;
(statearr_11113_11176[(1)] = (13));

} else {
var statearr_11114_11177 = state_11040__$1;
(statearr_11114_11177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (18))){
var inst_10965 = (state_11040[(2)]);
var state_11040__$1 = state_11040;
var statearr_11115_11178 = state_11040__$1;
(statearr_11115_11178[(2)] = inst_10965);

(statearr_11115_11178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (42))){
var state_11040__$1 = state_11040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11040__$1,(45),dchan);
} else {
if((state_val_11041 === (37))){
var inst_10999 = (state_11040[(25)]);
var inst_11008 = (state_11040[(23)]);
var inst_10912 = (state_11040[(12)]);
var inst_11008__$1 = cljs.core.first.call(null,inst_10999);
var inst_11009 = cljs.core.async.put_BANG_.call(null,inst_11008__$1,inst_10912,done);
var state_11040__$1 = (function (){var statearr_11116 = state_11040;
(statearr_11116[(23)] = inst_11008__$1);

return statearr_11116;
})();
if(cljs.core.truth_(inst_11009)){
var statearr_11117_11179 = state_11040__$1;
(statearr_11117_11179[(1)] = (39));

} else {
var statearr_11118_11180 = state_11040__$1;
(statearr_11118_11180[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11041 === (8))){
var inst_10924 = (state_11040[(14)]);
var inst_10923 = (state_11040[(16)]);
var inst_10926 = (inst_10924 < inst_10923);
var inst_10927 = inst_10926;
var state_11040__$1 = state_11040;
if(cljs.core.truth_(inst_10927)){
var statearr_11119_11181 = state_11040__$1;
(statearr_11119_11181[(1)] = (10));

} else {
var statearr_11120_11182 = state_11040__$1;
(statearr_11120_11182[(1)] = (11));

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
}
}
}
}
}
}
});})(c__7643__auto___11128,cs,m,dchan,dctr,done))
;
return ((function (switch__7578__auto__,c__7643__auto___11128,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7579__auto__ = null;
var cljs$core$async$mult_$_state_machine__7579__auto____0 = (function (){
var statearr_11124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11124[(0)] = cljs$core$async$mult_$_state_machine__7579__auto__);

(statearr_11124[(1)] = (1));

return statearr_11124;
});
var cljs$core$async$mult_$_state_machine__7579__auto____1 = (function (state_11040){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_11040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e11125){if((e11125 instanceof Object)){
var ex__7582__auto__ = e11125;
var statearr_11126_11183 = state_11040;
(statearr_11126_11183[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11184 = state_11040;
state_11040 = G__11184;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7579__auto__ = function(state_11040){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7579__auto____1.call(this,state_11040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7579__auto____0;
cljs$core$async$mult_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7579__auto____1;
return cljs$core$async$mult_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___11128,cs,m,dchan,dctr,done))
})();
var state__7645__auto__ = (function (){var statearr_11127 = f__7644__auto__.call(null);
(statearr_11127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___11128);

return statearr_11127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___11128,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args11185 = [];
var len__5619__auto___11188 = arguments.length;
var i__5620__auto___11189 = (0);
while(true){
if((i__5620__auto___11189 < len__5619__auto___11188)){
args11185.push((arguments[i__5620__auto___11189]));

var G__11190 = (i__5620__auto___11189 + (1));
i__5620__auto___11189 = G__11190;
continue;
} else {
}
break;
}

var G__11187 = args11185.length;
switch (G__11187) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11185.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m);
} else {
var m__5217__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,state_map);
} else {
var m__5217__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5216__auto__ = (((m == null))?null:m);
var m__5217__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,m,mode);
} else {
var m__5217__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5626__auto__ = [];
var len__5619__auto___11202 = arguments.length;
var i__5620__auto___11203 = (0);
while(true){
if((i__5620__auto___11203 < len__5619__auto___11202)){
args__5626__auto__.push((arguments[i__5620__auto___11203]));

var G__11204 = (i__5620__auto___11203 + (1));
i__5620__auto___11203 = G__11204;
continue;
} else {
}
break;
}

var argseq__5627__auto__ = ((((3) < args__5626__auto__.length))?(new cljs.core.IndexedSeq(args__5626__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5627__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11196){
var map__11197 = p__11196;
var map__11197__$1 = ((((!((map__11197 == null)))?((((map__11197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11197):map__11197);
var opts = map__11197__$1;
var statearr_11199_11205 = state;
(statearr_11199_11205[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__11197,map__11197__$1,opts){
return (function (val){
var statearr_11200_11206 = state;
(statearr_11200_11206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11197,map__11197__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_11201_11207 = state;
(statearr_11201_11207[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11192){
var G__11193 = cljs.core.first.call(null,seq11192);
var seq11192__$1 = cljs.core.next.call(null,seq11192);
var G__11194 = cljs.core.first.call(null,seq11192__$1);
var seq11192__$2 = cljs.core.next.call(null,seq11192__$1);
var G__11195 = cljs.core.first.call(null,seq11192__$2);
var seq11192__$3 = cljs.core.next.call(null,seq11192__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11193,G__11194,G__11195,seq11192__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11371 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11372){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11372 = meta11372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11373,meta11372__$1){
var self__ = this;
var _11373__$1 = this;
return (new cljs.core.async.t_cljs$core$async11371(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11372__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11373){
var self__ = this;
var _11373__$1 = this;
return self__.meta11372;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11372","meta11372",-165904726,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11371";

cljs.core.async.t_cljs$core$async11371.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async11371");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11371 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11371(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11372){
return (new cljs.core.async.t_cljs$core$async11371(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11372));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11371(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7643__auto___11534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___11534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___11534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11471){
var state_val_11472 = (state_11471[(1)]);
if((state_val_11472 === (7))){
var inst_11389 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
var statearr_11473_11535 = state_11471__$1;
(statearr_11473_11535[(2)] = inst_11389);

(statearr_11473_11535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (20))){
var inst_11401 = (state_11471[(7)]);
var state_11471__$1 = state_11471;
var statearr_11474_11536 = state_11471__$1;
(statearr_11474_11536[(2)] = inst_11401);

(statearr_11474_11536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (27))){
var state_11471__$1 = state_11471;
var statearr_11475_11537 = state_11471__$1;
(statearr_11475_11537[(2)] = null);

(statearr_11475_11537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (1))){
var inst_11377 = (state_11471[(8)]);
var inst_11377__$1 = calc_state.call(null);
var inst_11379 = (inst_11377__$1 == null);
var inst_11380 = cljs.core.not.call(null,inst_11379);
var state_11471__$1 = (function (){var statearr_11476 = state_11471;
(statearr_11476[(8)] = inst_11377__$1);

return statearr_11476;
})();
if(inst_11380){
var statearr_11477_11538 = state_11471__$1;
(statearr_11477_11538[(1)] = (2));

} else {
var statearr_11478_11539 = state_11471__$1;
(statearr_11478_11539[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (24))){
var inst_11431 = (state_11471[(9)]);
var inst_11424 = (state_11471[(10)]);
var inst_11445 = (state_11471[(11)]);
var inst_11445__$1 = inst_11424.call(null,inst_11431);
var state_11471__$1 = (function (){var statearr_11479 = state_11471;
(statearr_11479[(11)] = inst_11445__$1);

return statearr_11479;
})();
if(cljs.core.truth_(inst_11445__$1)){
var statearr_11480_11540 = state_11471__$1;
(statearr_11480_11540[(1)] = (29));

} else {
var statearr_11481_11541 = state_11471__$1;
(statearr_11481_11541[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (4))){
var inst_11392 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
if(cljs.core.truth_(inst_11392)){
var statearr_11482_11542 = state_11471__$1;
(statearr_11482_11542[(1)] = (8));

} else {
var statearr_11483_11543 = state_11471__$1;
(statearr_11483_11543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (15))){
var inst_11418 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
if(cljs.core.truth_(inst_11418)){
var statearr_11484_11544 = state_11471__$1;
(statearr_11484_11544[(1)] = (19));

} else {
var statearr_11485_11545 = state_11471__$1;
(statearr_11485_11545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (21))){
var inst_11423 = (state_11471[(12)]);
var inst_11423__$1 = (state_11471[(2)]);
var inst_11424 = cljs.core.get.call(null,inst_11423__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11425 = cljs.core.get.call(null,inst_11423__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11426 = cljs.core.get.call(null,inst_11423__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11471__$1 = (function (){var statearr_11486 = state_11471;
(statearr_11486[(10)] = inst_11424);

(statearr_11486[(13)] = inst_11425);

(statearr_11486[(12)] = inst_11423__$1);

return statearr_11486;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11471__$1,(22),inst_11426);
} else {
if((state_val_11472 === (31))){
var inst_11453 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
if(cljs.core.truth_(inst_11453)){
var statearr_11487_11546 = state_11471__$1;
(statearr_11487_11546[(1)] = (32));

} else {
var statearr_11488_11547 = state_11471__$1;
(statearr_11488_11547[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (32))){
var inst_11430 = (state_11471[(14)]);
var state_11471__$1 = state_11471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11471__$1,(35),out,inst_11430);
} else {
if((state_val_11472 === (33))){
var inst_11423 = (state_11471[(12)]);
var inst_11401 = inst_11423;
var state_11471__$1 = (function (){var statearr_11489 = state_11471;
(statearr_11489[(7)] = inst_11401);

return statearr_11489;
})();
var statearr_11490_11548 = state_11471__$1;
(statearr_11490_11548[(2)] = null);

(statearr_11490_11548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (13))){
var inst_11401 = (state_11471[(7)]);
var inst_11408 = inst_11401.cljs$lang$protocol_mask$partition0$;
var inst_11409 = (inst_11408 & (64));
var inst_11410 = inst_11401.cljs$core$ISeq$;
var inst_11411 = (inst_11409) || (inst_11410);
var state_11471__$1 = state_11471;
if(cljs.core.truth_(inst_11411)){
var statearr_11491_11549 = state_11471__$1;
(statearr_11491_11549[(1)] = (16));

} else {
var statearr_11492_11550 = state_11471__$1;
(statearr_11492_11550[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (22))){
var inst_11431 = (state_11471[(9)]);
var inst_11430 = (state_11471[(14)]);
var inst_11429 = (state_11471[(2)]);
var inst_11430__$1 = cljs.core.nth.call(null,inst_11429,(0),null);
var inst_11431__$1 = cljs.core.nth.call(null,inst_11429,(1),null);
var inst_11432 = (inst_11430__$1 == null);
var inst_11433 = cljs.core._EQ_.call(null,inst_11431__$1,change);
var inst_11434 = (inst_11432) || (inst_11433);
var state_11471__$1 = (function (){var statearr_11493 = state_11471;
(statearr_11493[(9)] = inst_11431__$1);

(statearr_11493[(14)] = inst_11430__$1);

return statearr_11493;
})();
if(cljs.core.truth_(inst_11434)){
var statearr_11494_11551 = state_11471__$1;
(statearr_11494_11551[(1)] = (23));

} else {
var statearr_11495_11552 = state_11471__$1;
(statearr_11495_11552[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (36))){
var inst_11423 = (state_11471[(12)]);
var inst_11401 = inst_11423;
var state_11471__$1 = (function (){var statearr_11496 = state_11471;
(statearr_11496[(7)] = inst_11401);

return statearr_11496;
})();
var statearr_11497_11553 = state_11471__$1;
(statearr_11497_11553[(2)] = null);

(statearr_11497_11553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (29))){
var inst_11445 = (state_11471[(11)]);
var state_11471__$1 = state_11471;
var statearr_11498_11554 = state_11471__$1;
(statearr_11498_11554[(2)] = inst_11445);

(statearr_11498_11554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (6))){
var state_11471__$1 = state_11471;
var statearr_11499_11555 = state_11471__$1;
(statearr_11499_11555[(2)] = false);

(statearr_11499_11555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (28))){
var inst_11441 = (state_11471[(2)]);
var inst_11442 = calc_state.call(null);
var inst_11401 = inst_11442;
var state_11471__$1 = (function (){var statearr_11500 = state_11471;
(statearr_11500[(7)] = inst_11401);

(statearr_11500[(15)] = inst_11441);

return statearr_11500;
})();
var statearr_11501_11556 = state_11471__$1;
(statearr_11501_11556[(2)] = null);

(statearr_11501_11556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (25))){
var inst_11467 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
var statearr_11502_11557 = state_11471__$1;
(statearr_11502_11557[(2)] = inst_11467);

(statearr_11502_11557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (34))){
var inst_11465 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
var statearr_11503_11558 = state_11471__$1;
(statearr_11503_11558[(2)] = inst_11465);

(statearr_11503_11558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (17))){
var state_11471__$1 = state_11471;
var statearr_11504_11559 = state_11471__$1;
(statearr_11504_11559[(2)] = false);

(statearr_11504_11559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (3))){
var state_11471__$1 = state_11471;
var statearr_11505_11560 = state_11471__$1;
(statearr_11505_11560[(2)] = false);

(statearr_11505_11560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (12))){
var inst_11469 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11471__$1,inst_11469);
} else {
if((state_val_11472 === (2))){
var inst_11377 = (state_11471[(8)]);
var inst_11382 = inst_11377.cljs$lang$protocol_mask$partition0$;
var inst_11383 = (inst_11382 & (64));
var inst_11384 = inst_11377.cljs$core$ISeq$;
var inst_11385 = (inst_11383) || (inst_11384);
var state_11471__$1 = state_11471;
if(cljs.core.truth_(inst_11385)){
var statearr_11506_11561 = state_11471__$1;
(statearr_11506_11561[(1)] = (5));

} else {
var statearr_11507_11562 = state_11471__$1;
(statearr_11507_11562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (23))){
var inst_11430 = (state_11471[(14)]);
var inst_11436 = (inst_11430 == null);
var state_11471__$1 = state_11471;
if(cljs.core.truth_(inst_11436)){
var statearr_11508_11563 = state_11471__$1;
(statearr_11508_11563[(1)] = (26));

} else {
var statearr_11509_11564 = state_11471__$1;
(statearr_11509_11564[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (35))){
var inst_11456 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
if(cljs.core.truth_(inst_11456)){
var statearr_11510_11565 = state_11471__$1;
(statearr_11510_11565[(1)] = (36));

} else {
var statearr_11511_11566 = state_11471__$1;
(statearr_11511_11566[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (19))){
var inst_11401 = (state_11471[(7)]);
var inst_11420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11401);
var state_11471__$1 = state_11471;
var statearr_11512_11567 = state_11471__$1;
(statearr_11512_11567[(2)] = inst_11420);

(statearr_11512_11567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (11))){
var inst_11401 = (state_11471[(7)]);
var inst_11405 = (inst_11401 == null);
var inst_11406 = cljs.core.not.call(null,inst_11405);
var state_11471__$1 = state_11471;
if(inst_11406){
var statearr_11513_11568 = state_11471__$1;
(statearr_11513_11568[(1)] = (13));

} else {
var statearr_11514_11569 = state_11471__$1;
(statearr_11514_11569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (9))){
var inst_11377 = (state_11471[(8)]);
var state_11471__$1 = state_11471;
var statearr_11515_11570 = state_11471__$1;
(statearr_11515_11570[(2)] = inst_11377);

(statearr_11515_11570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (5))){
var state_11471__$1 = state_11471;
var statearr_11516_11571 = state_11471__$1;
(statearr_11516_11571[(2)] = true);

(statearr_11516_11571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (14))){
var state_11471__$1 = state_11471;
var statearr_11517_11572 = state_11471__$1;
(statearr_11517_11572[(2)] = false);

(statearr_11517_11572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (26))){
var inst_11431 = (state_11471[(9)]);
var inst_11438 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11431);
var state_11471__$1 = state_11471;
var statearr_11518_11573 = state_11471__$1;
(statearr_11518_11573[(2)] = inst_11438);

(statearr_11518_11573[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (16))){
var state_11471__$1 = state_11471;
var statearr_11519_11574 = state_11471__$1;
(statearr_11519_11574[(2)] = true);

(statearr_11519_11574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (38))){
var inst_11461 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
var statearr_11520_11575 = state_11471__$1;
(statearr_11520_11575[(2)] = inst_11461);

(statearr_11520_11575[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (30))){
var inst_11431 = (state_11471[(9)]);
var inst_11424 = (state_11471[(10)]);
var inst_11425 = (state_11471[(13)]);
var inst_11448 = cljs.core.empty_QMARK_.call(null,inst_11424);
var inst_11449 = inst_11425.call(null,inst_11431);
var inst_11450 = cljs.core.not.call(null,inst_11449);
var inst_11451 = (inst_11448) && (inst_11450);
var state_11471__$1 = state_11471;
var statearr_11521_11576 = state_11471__$1;
(statearr_11521_11576[(2)] = inst_11451);

(statearr_11521_11576[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (10))){
var inst_11377 = (state_11471[(8)]);
var inst_11397 = (state_11471[(2)]);
var inst_11398 = cljs.core.get.call(null,inst_11397,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11399 = cljs.core.get.call(null,inst_11397,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11400 = cljs.core.get.call(null,inst_11397,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11401 = inst_11377;
var state_11471__$1 = (function (){var statearr_11522 = state_11471;
(statearr_11522[(16)] = inst_11400);

(statearr_11522[(17)] = inst_11398);

(statearr_11522[(7)] = inst_11401);

(statearr_11522[(18)] = inst_11399);

return statearr_11522;
})();
var statearr_11523_11577 = state_11471__$1;
(statearr_11523_11577[(2)] = null);

(statearr_11523_11577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (18))){
var inst_11415 = (state_11471[(2)]);
var state_11471__$1 = state_11471;
var statearr_11524_11578 = state_11471__$1;
(statearr_11524_11578[(2)] = inst_11415);

(statearr_11524_11578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (37))){
var state_11471__$1 = state_11471;
var statearr_11525_11579 = state_11471__$1;
(statearr_11525_11579[(2)] = null);

(statearr_11525_11579[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11472 === (8))){
var inst_11377 = (state_11471[(8)]);
var inst_11394 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11377);
var state_11471__$1 = state_11471;
var statearr_11526_11580 = state_11471__$1;
(statearr_11526_11580[(2)] = inst_11394);

(statearr_11526_11580[(1)] = (10));


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
});})(c__7643__auto___11534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7578__auto__,c__7643__auto___11534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7579__auto__ = null;
var cljs$core$async$mix_$_state_machine__7579__auto____0 = (function (){
var statearr_11530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11530[(0)] = cljs$core$async$mix_$_state_machine__7579__auto__);

(statearr_11530[(1)] = (1));

return statearr_11530;
});
var cljs$core$async$mix_$_state_machine__7579__auto____1 = (function (state_11471){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_11471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e11531){if((e11531 instanceof Object)){
var ex__7582__auto__ = e11531;
var statearr_11532_11581 = state_11471;
(statearr_11532_11581[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11582 = state_11471;
state_11471 = G__11582;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7579__auto__ = function(state_11471){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7579__auto____1.call(this,state_11471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7579__auto____0;
cljs$core$async$mix_$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7579__auto____1;
return cljs$core$async$mix_$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___11534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7645__auto__ = (function (){var statearr_11533 = f__7644__auto__.call(null);
(statearr_11533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___11534);

return statearr_11533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___11534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5217__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p,v,ch);
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11583 = [];
var len__5619__auto___11586 = arguments.length;
var i__5620__auto___11587 = (0);
while(true){
if((i__5620__auto___11587 < len__5619__auto___11586)){
args11583.push((arguments[i__5620__auto___11587]));

var G__11588 = (i__5620__auto___11587 + (1));
i__5620__auto___11587 = G__11588;
continue;
} else {
}
break;
}

var G__11585 = args11583.length;
switch (G__11585) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11583.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p);
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5216__auto__ = (((p == null))?null:p);
var m__5217__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5216__auto__)]);
if(!((m__5217__auto__ == null))){
return m__5217__auto__.call(null,p,v);
} else {
var m__5217__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5217__auto____$1 == null))){
return m__5217__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args11591 = [];
var len__5619__auto___11716 = arguments.length;
var i__5620__auto___11717 = (0);
while(true){
if((i__5620__auto___11717 < len__5619__auto___11716)){
args11591.push((arguments[i__5620__auto___11717]));

var G__11718 = (i__5620__auto___11717 + (1));
i__5620__auto___11717 = G__11718;
continue;
} else {
}
break;
}

var G__11593 = args11591.length;
switch (G__11593) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11591.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4561__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4561__auto__)){
return or__4561__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4561__auto__,mults){
return (function (p1__11590_SHARP_){
if(cljs.core.truth_(p1__11590_SHARP_.call(null,topic))){
return p1__11590_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11590_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4561__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11594 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11595){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11595 = meta11595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11596,meta11595__$1){
var self__ = this;
var _11596__$1 = this;
return (new cljs.core.async.t_cljs$core$async11594(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11595__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11596){
var self__ = this;
var _11596__$1 = this;
return self__.meta11595;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11595","meta11595",-571501425,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11594";

cljs.core.async.t_cljs$core$async11594.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async11594");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11594 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11595){
return (new cljs.core.async.t_cljs$core$async11594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11595));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11594(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7643__auto___11720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___11720,mults,ensure_mult,p){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___11720,mults,ensure_mult,p){
return (function (state_11668){
var state_val_11669 = (state_11668[(1)]);
if((state_val_11669 === (7))){
var inst_11664 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
var statearr_11670_11721 = state_11668__$1;
(statearr_11670_11721[(2)] = inst_11664);

(statearr_11670_11721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (20))){
var state_11668__$1 = state_11668;
var statearr_11671_11722 = state_11668__$1;
(statearr_11671_11722[(2)] = null);

(statearr_11671_11722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (1))){
var state_11668__$1 = state_11668;
var statearr_11672_11723 = state_11668__$1;
(statearr_11672_11723[(2)] = null);

(statearr_11672_11723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (24))){
var inst_11647 = (state_11668[(7)]);
var inst_11656 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11647);
var state_11668__$1 = state_11668;
var statearr_11673_11724 = state_11668__$1;
(statearr_11673_11724[(2)] = inst_11656);

(statearr_11673_11724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (4))){
var inst_11599 = (state_11668[(8)]);
var inst_11599__$1 = (state_11668[(2)]);
var inst_11600 = (inst_11599__$1 == null);
var state_11668__$1 = (function (){var statearr_11674 = state_11668;
(statearr_11674[(8)] = inst_11599__$1);

return statearr_11674;
})();
if(cljs.core.truth_(inst_11600)){
var statearr_11675_11725 = state_11668__$1;
(statearr_11675_11725[(1)] = (5));

} else {
var statearr_11676_11726 = state_11668__$1;
(statearr_11676_11726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (15))){
var inst_11641 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
var statearr_11677_11727 = state_11668__$1;
(statearr_11677_11727[(2)] = inst_11641);

(statearr_11677_11727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (21))){
var inst_11661 = (state_11668[(2)]);
var state_11668__$1 = (function (){var statearr_11678 = state_11668;
(statearr_11678[(9)] = inst_11661);

return statearr_11678;
})();
var statearr_11679_11728 = state_11668__$1;
(statearr_11679_11728[(2)] = null);

(statearr_11679_11728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (13))){
var inst_11623 = (state_11668[(10)]);
var inst_11625 = cljs.core.chunked_seq_QMARK_.call(null,inst_11623);
var state_11668__$1 = state_11668;
if(inst_11625){
var statearr_11680_11729 = state_11668__$1;
(statearr_11680_11729[(1)] = (16));

} else {
var statearr_11681_11730 = state_11668__$1;
(statearr_11681_11730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (22))){
var inst_11653 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
if(cljs.core.truth_(inst_11653)){
var statearr_11682_11731 = state_11668__$1;
(statearr_11682_11731[(1)] = (23));

} else {
var statearr_11683_11732 = state_11668__$1;
(statearr_11683_11732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (6))){
var inst_11647 = (state_11668[(7)]);
var inst_11649 = (state_11668[(11)]);
var inst_11599 = (state_11668[(8)]);
var inst_11647__$1 = topic_fn.call(null,inst_11599);
var inst_11648 = cljs.core.deref.call(null,mults);
var inst_11649__$1 = cljs.core.get.call(null,inst_11648,inst_11647__$1);
var state_11668__$1 = (function (){var statearr_11684 = state_11668;
(statearr_11684[(7)] = inst_11647__$1);

(statearr_11684[(11)] = inst_11649__$1);

return statearr_11684;
})();
if(cljs.core.truth_(inst_11649__$1)){
var statearr_11685_11733 = state_11668__$1;
(statearr_11685_11733[(1)] = (19));

} else {
var statearr_11686_11734 = state_11668__$1;
(statearr_11686_11734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (25))){
var inst_11658 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
var statearr_11687_11735 = state_11668__$1;
(statearr_11687_11735[(2)] = inst_11658);

(statearr_11687_11735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (17))){
var inst_11623 = (state_11668[(10)]);
var inst_11632 = cljs.core.first.call(null,inst_11623);
var inst_11633 = cljs.core.async.muxch_STAR_.call(null,inst_11632);
var inst_11634 = cljs.core.async.close_BANG_.call(null,inst_11633);
var inst_11635 = cljs.core.next.call(null,inst_11623);
var inst_11609 = inst_11635;
var inst_11610 = null;
var inst_11611 = (0);
var inst_11612 = (0);
var state_11668__$1 = (function (){var statearr_11688 = state_11668;
(statearr_11688[(12)] = inst_11611);

(statearr_11688[(13)] = inst_11609);

(statearr_11688[(14)] = inst_11610);

(statearr_11688[(15)] = inst_11634);

(statearr_11688[(16)] = inst_11612);

return statearr_11688;
})();
var statearr_11689_11736 = state_11668__$1;
(statearr_11689_11736[(2)] = null);

(statearr_11689_11736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (3))){
var inst_11666 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11668__$1,inst_11666);
} else {
if((state_val_11669 === (12))){
var inst_11643 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
var statearr_11690_11737 = state_11668__$1;
(statearr_11690_11737[(2)] = inst_11643);

(statearr_11690_11737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (2))){
var state_11668__$1 = state_11668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11668__$1,(4),ch);
} else {
if((state_val_11669 === (23))){
var state_11668__$1 = state_11668;
var statearr_11691_11738 = state_11668__$1;
(statearr_11691_11738[(2)] = null);

(statearr_11691_11738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (19))){
var inst_11649 = (state_11668[(11)]);
var inst_11599 = (state_11668[(8)]);
var inst_11651 = cljs.core.async.muxch_STAR_.call(null,inst_11649);
var state_11668__$1 = state_11668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11668__$1,(22),inst_11651,inst_11599);
} else {
if((state_val_11669 === (11))){
var inst_11609 = (state_11668[(13)]);
var inst_11623 = (state_11668[(10)]);
var inst_11623__$1 = cljs.core.seq.call(null,inst_11609);
var state_11668__$1 = (function (){var statearr_11692 = state_11668;
(statearr_11692[(10)] = inst_11623__$1);

return statearr_11692;
})();
if(inst_11623__$1){
var statearr_11693_11739 = state_11668__$1;
(statearr_11693_11739[(1)] = (13));

} else {
var statearr_11694_11740 = state_11668__$1;
(statearr_11694_11740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (9))){
var inst_11645 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
var statearr_11695_11741 = state_11668__$1;
(statearr_11695_11741[(2)] = inst_11645);

(statearr_11695_11741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (5))){
var inst_11606 = cljs.core.deref.call(null,mults);
var inst_11607 = cljs.core.vals.call(null,inst_11606);
var inst_11608 = cljs.core.seq.call(null,inst_11607);
var inst_11609 = inst_11608;
var inst_11610 = null;
var inst_11611 = (0);
var inst_11612 = (0);
var state_11668__$1 = (function (){var statearr_11696 = state_11668;
(statearr_11696[(12)] = inst_11611);

(statearr_11696[(13)] = inst_11609);

(statearr_11696[(14)] = inst_11610);

(statearr_11696[(16)] = inst_11612);

return statearr_11696;
})();
var statearr_11697_11742 = state_11668__$1;
(statearr_11697_11742[(2)] = null);

(statearr_11697_11742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (14))){
var state_11668__$1 = state_11668;
var statearr_11701_11743 = state_11668__$1;
(statearr_11701_11743[(2)] = null);

(statearr_11701_11743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (16))){
var inst_11623 = (state_11668[(10)]);
var inst_11627 = cljs.core.chunk_first.call(null,inst_11623);
var inst_11628 = cljs.core.chunk_rest.call(null,inst_11623);
var inst_11629 = cljs.core.count.call(null,inst_11627);
var inst_11609 = inst_11628;
var inst_11610 = inst_11627;
var inst_11611 = inst_11629;
var inst_11612 = (0);
var state_11668__$1 = (function (){var statearr_11702 = state_11668;
(statearr_11702[(12)] = inst_11611);

(statearr_11702[(13)] = inst_11609);

(statearr_11702[(14)] = inst_11610);

(statearr_11702[(16)] = inst_11612);

return statearr_11702;
})();
var statearr_11703_11744 = state_11668__$1;
(statearr_11703_11744[(2)] = null);

(statearr_11703_11744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (10))){
var inst_11611 = (state_11668[(12)]);
var inst_11609 = (state_11668[(13)]);
var inst_11610 = (state_11668[(14)]);
var inst_11612 = (state_11668[(16)]);
var inst_11617 = cljs.core._nth.call(null,inst_11610,inst_11612);
var inst_11618 = cljs.core.async.muxch_STAR_.call(null,inst_11617);
var inst_11619 = cljs.core.async.close_BANG_.call(null,inst_11618);
var inst_11620 = (inst_11612 + (1));
var tmp11698 = inst_11611;
var tmp11699 = inst_11609;
var tmp11700 = inst_11610;
var inst_11609__$1 = tmp11699;
var inst_11610__$1 = tmp11700;
var inst_11611__$1 = tmp11698;
var inst_11612__$1 = inst_11620;
var state_11668__$1 = (function (){var statearr_11704 = state_11668;
(statearr_11704[(12)] = inst_11611__$1);

(statearr_11704[(17)] = inst_11619);

(statearr_11704[(13)] = inst_11609__$1);

(statearr_11704[(14)] = inst_11610__$1);

(statearr_11704[(16)] = inst_11612__$1);

return statearr_11704;
})();
var statearr_11705_11745 = state_11668__$1;
(statearr_11705_11745[(2)] = null);

(statearr_11705_11745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (18))){
var inst_11638 = (state_11668[(2)]);
var state_11668__$1 = state_11668;
var statearr_11706_11746 = state_11668__$1;
(statearr_11706_11746[(2)] = inst_11638);

(statearr_11706_11746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11669 === (8))){
var inst_11611 = (state_11668[(12)]);
var inst_11612 = (state_11668[(16)]);
var inst_11614 = (inst_11612 < inst_11611);
var inst_11615 = inst_11614;
var state_11668__$1 = state_11668;
if(cljs.core.truth_(inst_11615)){
var statearr_11707_11747 = state_11668__$1;
(statearr_11707_11747[(1)] = (10));

} else {
var statearr_11708_11748 = state_11668__$1;
(statearr_11708_11748[(1)] = (11));

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
});})(c__7643__auto___11720,mults,ensure_mult,p))
;
return ((function (switch__7578__auto__,c__7643__auto___11720,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_11712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11712[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_11712[(1)] = (1));

return statearr_11712;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_11668){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_11668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e11713){if((e11713 instanceof Object)){
var ex__7582__auto__ = e11713;
var statearr_11714_11749 = state_11668;
(statearr_11714_11749[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11750 = state_11668;
state_11668 = G__11750;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_11668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_11668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___11720,mults,ensure_mult,p))
})();
var state__7645__auto__ = (function (){var statearr_11715 = f__7644__auto__.call(null);
(statearr_11715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___11720);

return statearr_11715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___11720,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args11751 = [];
var len__5619__auto___11754 = arguments.length;
var i__5620__auto___11755 = (0);
while(true){
if((i__5620__auto___11755 < len__5619__auto___11754)){
args11751.push((arguments[i__5620__auto___11755]));

var G__11756 = (i__5620__auto___11755 + (1));
i__5620__auto___11755 = G__11756;
continue;
} else {
}
break;
}

var G__11753 = args11751.length;
switch (G__11753) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11751.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args11758 = [];
var len__5619__auto___11761 = arguments.length;
var i__5620__auto___11762 = (0);
while(true){
if((i__5620__auto___11762 < len__5619__auto___11761)){
args11758.push((arguments[i__5620__auto___11762]));

var G__11763 = (i__5620__auto___11762 + (1));
i__5620__auto___11762 = G__11763;
continue;
} else {
}
break;
}

var G__11760 = args11758.length;
switch (G__11760) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11758.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args11765 = [];
var len__5619__auto___11836 = arguments.length;
var i__5620__auto___11837 = (0);
while(true){
if((i__5620__auto___11837 < len__5619__auto___11836)){
args11765.push((arguments[i__5620__auto___11837]));

var G__11838 = (i__5620__auto___11837 + (1));
i__5620__auto___11837 = G__11838;
continue;
} else {
}
break;
}

var G__11767 = args11765.length;
switch (G__11767) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11765.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7643__auto___11840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___11840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___11840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11806){
var state_val_11807 = (state_11806[(1)]);
if((state_val_11807 === (7))){
var state_11806__$1 = state_11806;
var statearr_11808_11841 = state_11806__$1;
(statearr_11808_11841[(2)] = null);

(statearr_11808_11841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (1))){
var state_11806__$1 = state_11806;
var statearr_11809_11842 = state_11806__$1;
(statearr_11809_11842[(2)] = null);

(statearr_11809_11842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (4))){
var inst_11770 = (state_11806[(7)]);
var inst_11772 = (inst_11770 < cnt);
var state_11806__$1 = state_11806;
if(cljs.core.truth_(inst_11772)){
var statearr_11810_11843 = state_11806__$1;
(statearr_11810_11843[(1)] = (6));

} else {
var statearr_11811_11844 = state_11806__$1;
(statearr_11811_11844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (15))){
var inst_11802 = (state_11806[(2)]);
var state_11806__$1 = state_11806;
var statearr_11812_11845 = state_11806__$1;
(statearr_11812_11845[(2)] = inst_11802);

(statearr_11812_11845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (13))){
var inst_11795 = cljs.core.async.close_BANG_.call(null,out);
var state_11806__$1 = state_11806;
var statearr_11813_11846 = state_11806__$1;
(statearr_11813_11846[(2)] = inst_11795);

(statearr_11813_11846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (6))){
var state_11806__$1 = state_11806;
var statearr_11814_11847 = state_11806__$1;
(statearr_11814_11847[(2)] = null);

(statearr_11814_11847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (3))){
var inst_11804 = (state_11806[(2)]);
var state_11806__$1 = state_11806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11806__$1,inst_11804);
} else {
if((state_val_11807 === (12))){
var inst_11792 = (state_11806[(8)]);
var inst_11792__$1 = (state_11806[(2)]);
var inst_11793 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11792__$1);
var state_11806__$1 = (function (){var statearr_11815 = state_11806;
(statearr_11815[(8)] = inst_11792__$1);

return statearr_11815;
})();
if(cljs.core.truth_(inst_11793)){
var statearr_11816_11848 = state_11806__$1;
(statearr_11816_11848[(1)] = (13));

} else {
var statearr_11817_11849 = state_11806__$1;
(statearr_11817_11849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (2))){
var inst_11769 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11770 = (0);
var state_11806__$1 = (function (){var statearr_11818 = state_11806;
(statearr_11818[(7)] = inst_11770);

(statearr_11818[(9)] = inst_11769);

return statearr_11818;
})();
var statearr_11819_11850 = state_11806__$1;
(statearr_11819_11850[(2)] = null);

(statearr_11819_11850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (11))){
var inst_11770 = (state_11806[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11806,(10),Object,null,(9));
var inst_11779 = chs__$1.call(null,inst_11770);
var inst_11780 = done.call(null,inst_11770);
var inst_11781 = cljs.core.async.take_BANG_.call(null,inst_11779,inst_11780);
var state_11806__$1 = state_11806;
var statearr_11820_11851 = state_11806__$1;
(statearr_11820_11851[(2)] = inst_11781);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11806__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (9))){
var inst_11770 = (state_11806[(7)]);
var inst_11783 = (state_11806[(2)]);
var inst_11784 = (inst_11770 + (1));
var inst_11770__$1 = inst_11784;
var state_11806__$1 = (function (){var statearr_11821 = state_11806;
(statearr_11821[(7)] = inst_11770__$1);

(statearr_11821[(10)] = inst_11783);

return statearr_11821;
})();
var statearr_11822_11852 = state_11806__$1;
(statearr_11822_11852[(2)] = null);

(statearr_11822_11852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (5))){
var inst_11790 = (state_11806[(2)]);
var state_11806__$1 = (function (){var statearr_11823 = state_11806;
(statearr_11823[(11)] = inst_11790);

return statearr_11823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11806__$1,(12),dchan);
} else {
if((state_val_11807 === (14))){
var inst_11792 = (state_11806[(8)]);
var inst_11797 = cljs.core.apply.call(null,f,inst_11792);
var state_11806__$1 = state_11806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11806__$1,(16),out,inst_11797);
} else {
if((state_val_11807 === (16))){
var inst_11799 = (state_11806[(2)]);
var state_11806__$1 = (function (){var statearr_11824 = state_11806;
(statearr_11824[(12)] = inst_11799);

return statearr_11824;
})();
var statearr_11825_11853 = state_11806__$1;
(statearr_11825_11853[(2)] = null);

(statearr_11825_11853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (10))){
var inst_11774 = (state_11806[(2)]);
var inst_11775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11806__$1 = (function (){var statearr_11826 = state_11806;
(statearr_11826[(13)] = inst_11774);

return statearr_11826;
})();
var statearr_11827_11854 = state_11806__$1;
(statearr_11827_11854[(2)] = inst_11775);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11806__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11807 === (8))){
var inst_11788 = (state_11806[(2)]);
var state_11806__$1 = state_11806;
var statearr_11828_11855 = state_11806__$1;
(statearr_11828_11855[(2)] = inst_11788);

(statearr_11828_11855[(1)] = (5));


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
}
}
}
});})(c__7643__auto___11840,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7578__auto__,c__7643__auto___11840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_11832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11832[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_11832[(1)] = (1));

return statearr_11832;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_11806){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_11806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e11833){if((e11833 instanceof Object)){
var ex__7582__auto__ = e11833;
var statearr_11834_11856 = state_11806;
(statearr_11834_11856[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11857 = state_11806;
state_11806 = G__11857;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_11806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_11806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___11840,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7645__auto__ = (function (){var statearr_11835 = f__7644__auto__.call(null);
(statearr_11835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___11840);

return statearr_11835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___11840,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11859 = [];
var len__5619__auto___11915 = arguments.length;
var i__5620__auto___11916 = (0);
while(true){
if((i__5620__auto___11916 < len__5619__auto___11915)){
args11859.push((arguments[i__5620__auto___11916]));

var G__11917 = (i__5620__auto___11916 + (1));
i__5620__auto___11916 = G__11917;
continue;
} else {
}
break;
}

var G__11861 = args11859.length;
switch (G__11861) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11859.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7643__auto___11919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___11919,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___11919,out){
return (function (state_11891){
var state_val_11892 = (state_11891[(1)]);
if((state_val_11892 === (7))){
var inst_11870 = (state_11891[(7)]);
var inst_11871 = (state_11891[(8)]);
var inst_11870__$1 = (state_11891[(2)]);
var inst_11871__$1 = cljs.core.nth.call(null,inst_11870__$1,(0),null);
var inst_11872 = cljs.core.nth.call(null,inst_11870__$1,(1),null);
var inst_11873 = (inst_11871__$1 == null);
var state_11891__$1 = (function (){var statearr_11893 = state_11891;
(statearr_11893[(7)] = inst_11870__$1);

(statearr_11893[(9)] = inst_11872);

(statearr_11893[(8)] = inst_11871__$1);

return statearr_11893;
})();
if(cljs.core.truth_(inst_11873)){
var statearr_11894_11920 = state_11891__$1;
(statearr_11894_11920[(1)] = (8));

} else {
var statearr_11895_11921 = state_11891__$1;
(statearr_11895_11921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (1))){
var inst_11862 = cljs.core.vec.call(null,chs);
var inst_11863 = inst_11862;
var state_11891__$1 = (function (){var statearr_11896 = state_11891;
(statearr_11896[(10)] = inst_11863);

return statearr_11896;
})();
var statearr_11897_11922 = state_11891__$1;
(statearr_11897_11922[(2)] = null);

(statearr_11897_11922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (4))){
var inst_11863 = (state_11891[(10)]);
var state_11891__$1 = state_11891;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11891__$1,(7),inst_11863);
} else {
if((state_val_11892 === (6))){
var inst_11887 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
var statearr_11898_11923 = state_11891__$1;
(statearr_11898_11923[(2)] = inst_11887);

(statearr_11898_11923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (3))){
var inst_11889 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11891__$1,inst_11889);
} else {
if((state_val_11892 === (2))){
var inst_11863 = (state_11891[(10)]);
var inst_11865 = cljs.core.count.call(null,inst_11863);
var inst_11866 = (inst_11865 > (0));
var state_11891__$1 = state_11891;
if(cljs.core.truth_(inst_11866)){
var statearr_11900_11924 = state_11891__$1;
(statearr_11900_11924[(1)] = (4));

} else {
var statearr_11901_11925 = state_11891__$1;
(statearr_11901_11925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (11))){
var inst_11863 = (state_11891[(10)]);
var inst_11880 = (state_11891[(2)]);
var tmp11899 = inst_11863;
var inst_11863__$1 = tmp11899;
var state_11891__$1 = (function (){var statearr_11902 = state_11891;
(statearr_11902[(10)] = inst_11863__$1);

(statearr_11902[(11)] = inst_11880);

return statearr_11902;
})();
var statearr_11903_11926 = state_11891__$1;
(statearr_11903_11926[(2)] = null);

(statearr_11903_11926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (9))){
var inst_11871 = (state_11891[(8)]);
var state_11891__$1 = state_11891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11891__$1,(11),out,inst_11871);
} else {
if((state_val_11892 === (5))){
var inst_11885 = cljs.core.async.close_BANG_.call(null,out);
var state_11891__$1 = state_11891;
var statearr_11904_11927 = state_11891__$1;
(statearr_11904_11927[(2)] = inst_11885);

(statearr_11904_11927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (10))){
var inst_11883 = (state_11891[(2)]);
var state_11891__$1 = state_11891;
var statearr_11905_11928 = state_11891__$1;
(statearr_11905_11928[(2)] = inst_11883);

(statearr_11905_11928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11892 === (8))){
var inst_11870 = (state_11891[(7)]);
var inst_11872 = (state_11891[(9)]);
var inst_11871 = (state_11891[(8)]);
var inst_11863 = (state_11891[(10)]);
var inst_11875 = (function (){var cs = inst_11863;
var vec__11868 = inst_11870;
var v = inst_11871;
var c = inst_11872;
return ((function (cs,vec__11868,v,c,inst_11870,inst_11872,inst_11871,inst_11863,state_val_11892,c__7643__auto___11919,out){
return (function (p1__11858_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11858_SHARP_);
});
;})(cs,vec__11868,v,c,inst_11870,inst_11872,inst_11871,inst_11863,state_val_11892,c__7643__auto___11919,out))
})();
var inst_11876 = cljs.core.filterv.call(null,inst_11875,inst_11863);
var inst_11863__$1 = inst_11876;
var state_11891__$1 = (function (){var statearr_11906 = state_11891;
(statearr_11906[(10)] = inst_11863__$1);

return statearr_11906;
})();
var statearr_11907_11929 = state_11891__$1;
(statearr_11907_11929[(2)] = null);

(statearr_11907_11929[(1)] = (2));


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
});})(c__7643__auto___11919,out))
;
return ((function (switch__7578__auto__,c__7643__auto___11919,out){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_11911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11911[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_11911[(1)] = (1));

return statearr_11911;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_11891){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_11891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e11912){if((e11912 instanceof Object)){
var ex__7582__auto__ = e11912;
var statearr_11913_11930 = state_11891;
(statearr_11913_11930[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11931 = state_11891;
state_11891 = G__11931;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_11891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_11891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___11919,out))
})();
var state__7645__auto__ = (function (){var statearr_11914 = f__7644__auto__.call(null);
(statearr_11914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___11919);

return statearr_11914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___11919,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11932 = [];
var len__5619__auto___11981 = arguments.length;
var i__5620__auto___11982 = (0);
while(true){
if((i__5620__auto___11982 < len__5619__auto___11981)){
args11932.push((arguments[i__5620__auto___11982]));

var G__11983 = (i__5620__auto___11982 + (1));
i__5620__auto___11982 = G__11983;
continue;
} else {
}
break;
}

var G__11934 = args11932.length;
switch (G__11934) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11932.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7643__auto___11985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___11985,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___11985,out){
return (function (state_11958){
var state_val_11959 = (state_11958[(1)]);
if((state_val_11959 === (7))){
var inst_11940 = (state_11958[(7)]);
var inst_11940__$1 = (state_11958[(2)]);
var inst_11941 = (inst_11940__$1 == null);
var inst_11942 = cljs.core.not.call(null,inst_11941);
var state_11958__$1 = (function (){var statearr_11960 = state_11958;
(statearr_11960[(7)] = inst_11940__$1);

return statearr_11960;
})();
if(inst_11942){
var statearr_11961_11986 = state_11958__$1;
(statearr_11961_11986[(1)] = (8));

} else {
var statearr_11962_11987 = state_11958__$1;
(statearr_11962_11987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (1))){
var inst_11935 = (0);
var state_11958__$1 = (function (){var statearr_11963 = state_11958;
(statearr_11963[(8)] = inst_11935);

return statearr_11963;
})();
var statearr_11964_11988 = state_11958__$1;
(statearr_11964_11988[(2)] = null);

(statearr_11964_11988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (4))){
var state_11958__$1 = state_11958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11958__$1,(7),ch);
} else {
if((state_val_11959 === (6))){
var inst_11953 = (state_11958[(2)]);
var state_11958__$1 = state_11958;
var statearr_11965_11989 = state_11958__$1;
(statearr_11965_11989[(2)] = inst_11953);

(statearr_11965_11989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (3))){
var inst_11955 = (state_11958[(2)]);
var inst_11956 = cljs.core.async.close_BANG_.call(null,out);
var state_11958__$1 = (function (){var statearr_11966 = state_11958;
(statearr_11966[(9)] = inst_11955);

return statearr_11966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11958__$1,inst_11956);
} else {
if((state_val_11959 === (2))){
var inst_11935 = (state_11958[(8)]);
var inst_11937 = (inst_11935 < n);
var state_11958__$1 = state_11958;
if(cljs.core.truth_(inst_11937)){
var statearr_11967_11990 = state_11958__$1;
(statearr_11967_11990[(1)] = (4));

} else {
var statearr_11968_11991 = state_11958__$1;
(statearr_11968_11991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (11))){
var inst_11935 = (state_11958[(8)]);
var inst_11945 = (state_11958[(2)]);
var inst_11946 = (inst_11935 + (1));
var inst_11935__$1 = inst_11946;
var state_11958__$1 = (function (){var statearr_11969 = state_11958;
(statearr_11969[(8)] = inst_11935__$1);

(statearr_11969[(10)] = inst_11945);

return statearr_11969;
})();
var statearr_11970_11992 = state_11958__$1;
(statearr_11970_11992[(2)] = null);

(statearr_11970_11992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (9))){
var state_11958__$1 = state_11958;
var statearr_11971_11993 = state_11958__$1;
(statearr_11971_11993[(2)] = null);

(statearr_11971_11993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (5))){
var state_11958__$1 = state_11958;
var statearr_11972_11994 = state_11958__$1;
(statearr_11972_11994[(2)] = null);

(statearr_11972_11994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (10))){
var inst_11950 = (state_11958[(2)]);
var state_11958__$1 = state_11958;
var statearr_11973_11995 = state_11958__$1;
(statearr_11973_11995[(2)] = inst_11950);

(statearr_11973_11995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11959 === (8))){
var inst_11940 = (state_11958[(7)]);
var state_11958__$1 = state_11958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11958__$1,(11),out,inst_11940);
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
});})(c__7643__auto___11985,out))
;
return ((function (switch__7578__auto__,c__7643__auto___11985,out){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_11977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11977[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_11977[(1)] = (1));

return statearr_11977;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_11958){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_11958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e11978){if((e11978 instanceof Object)){
var ex__7582__auto__ = e11978;
var statearr_11979_11996 = state_11958;
(statearr_11979_11996[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11997 = state_11958;
state_11958 = G__11997;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_11958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_11958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___11985,out))
})();
var state__7645__auto__ = (function (){var statearr_11980 = f__7644__auto__.call(null);
(statearr_11980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___11985);

return statearr_11980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___11985,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12005 = (function (map_LT_,f,ch,meta12006){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12006 = meta12006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12007,meta12006__$1){
var self__ = this;
var _12007__$1 = this;
return (new cljs.core.async.t_cljs$core$async12005(self__.map_LT_,self__.f,self__.ch,meta12006__$1));
});

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12007){
var self__ = this;
var _12007__$1 = this;
return self__.meta12006;
});

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12008 = (function (map_LT_,f,ch,meta12006,_,fn1,meta12009){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12006 = meta12006;
this._ = _;
this.fn1 = fn1;
this.meta12009 = meta12009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12010,meta12009__$1){
var self__ = this;
var _12010__$1 = this;
return (new cljs.core.async.t_cljs$core$async12008(self__.map_LT_,self__.f,self__.ch,self__.meta12006,self__._,self__.fn1,meta12009__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12010){
var self__ = this;
var _12010__$1 = this;
return self__.meta12009;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12008.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11998_SHARP_){
return f1.call(null,(((p1__11998_SHARP_ == null))?null:self__.f.call(null,p1__11998_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12008.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12006","meta12006",1610903474,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12005","cljs.core.async/t_cljs$core$async12005",-1504789520,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12009","meta12009",-2020095617,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12008";

cljs.core.async.t_cljs$core$async12008.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async12008");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12008 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12008(map_LT___$1,f__$1,ch__$1,meta12006__$1,___$2,fn1__$1,meta12009){
return (new cljs.core.async.t_cljs$core$async12008(map_LT___$1,f__$1,ch__$1,meta12006__$1,___$2,fn1__$1,meta12009));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12008(self__.map_LT_,self__.f,self__.ch,self__.meta12006,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4549__auto__ = ret;
if(cljs.core.truth_(and__4549__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4549__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12006","meta12006",1610903474,null)], null);
});

cljs.core.async.t_cljs$core$async12005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12005";

cljs.core.async.t_cljs$core$async12005.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async12005");
});

cljs.core.async.__GT_t_cljs$core$async12005 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12005(map_LT___$1,f__$1,ch__$1,meta12006){
return (new cljs.core.async.t_cljs$core$async12005(map_LT___$1,f__$1,ch__$1,meta12006));
});

}

return (new cljs.core.async.t_cljs$core$async12005(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12014 = (function (map_GT_,f,ch,meta12015){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12015 = meta12015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12016,meta12015__$1){
var self__ = this;
var _12016__$1 = this;
return (new cljs.core.async.t_cljs$core$async12014(self__.map_GT_,self__.f,self__.ch,meta12015__$1));
});

cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12016){
var self__ = this;
var _12016__$1 = this;
return self__.meta12015;
});

cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12015","meta12015",1167350513,null)], null);
});

cljs.core.async.t_cljs$core$async12014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12014";

cljs.core.async.t_cljs$core$async12014.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async12014");
});

cljs.core.async.__GT_t_cljs$core$async12014 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12014(map_GT___$1,f__$1,ch__$1,meta12015){
return (new cljs.core.async.t_cljs$core$async12014(map_GT___$1,f__$1,ch__$1,meta12015));
});

}

return (new cljs.core.async.t_cljs$core$async12014(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12020 = (function (filter_GT_,p,ch,meta12021){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12021 = meta12021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12022,meta12021__$1){
var self__ = this;
var _12022__$1 = this;
return (new cljs.core.async.t_cljs$core$async12020(self__.filter_GT_,self__.p,self__.ch,meta12021__$1));
});

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12022){
var self__ = this;
var _12022__$1 = this;
return self__.meta12021;
});

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12021","meta12021",444852063,null)], null);
});

cljs.core.async.t_cljs$core$async12020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12020";

cljs.core.async.t_cljs$core$async12020.cljs$lang$ctorPrWriter = (function (this__5159__auto__,writer__5160__auto__,opt__5161__auto__){
return cljs.core._write.call(null,writer__5160__auto__,"cljs.core.async/t_cljs$core$async12020");
});

cljs.core.async.__GT_t_cljs$core$async12020 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12020(filter_GT___$1,p__$1,ch__$1,meta12021){
return (new cljs.core.async.t_cljs$core$async12020(filter_GT___$1,p__$1,ch__$1,meta12021));
});

}

return (new cljs.core.async.t_cljs$core$async12020(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args12023 = [];
var len__5619__auto___12067 = arguments.length;
var i__5620__auto___12068 = (0);
while(true){
if((i__5620__auto___12068 < len__5619__auto___12067)){
args12023.push((arguments[i__5620__auto___12068]));

var G__12069 = (i__5620__auto___12068 + (1));
i__5620__auto___12068 = G__12069;
continue;
} else {
}
break;
}

var G__12025 = args12023.length;
switch (G__12025) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12023.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7643__auto___12071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___12071,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___12071,out){
return (function (state_12046){
var state_val_12047 = (state_12046[(1)]);
if((state_val_12047 === (7))){
var inst_12042 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12048_12072 = state_12046__$1;
(statearr_12048_12072[(2)] = inst_12042);

(statearr_12048_12072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (1))){
var state_12046__$1 = state_12046;
var statearr_12049_12073 = state_12046__$1;
(statearr_12049_12073[(2)] = null);

(statearr_12049_12073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (4))){
var inst_12028 = (state_12046[(7)]);
var inst_12028__$1 = (state_12046[(2)]);
var inst_12029 = (inst_12028__$1 == null);
var state_12046__$1 = (function (){var statearr_12050 = state_12046;
(statearr_12050[(7)] = inst_12028__$1);

return statearr_12050;
})();
if(cljs.core.truth_(inst_12029)){
var statearr_12051_12074 = state_12046__$1;
(statearr_12051_12074[(1)] = (5));

} else {
var statearr_12052_12075 = state_12046__$1;
(statearr_12052_12075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (6))){
var inst_12028 = (state_12046[(7)]);
var inst_12033 = p.call(null,inst_12028);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_12033)){
var statearr_12053_12076 = state_12046__$1;
(statearr_12053_12076[(1)] = (8));

} else {
var statearr_12054_12077 = state_12046__$1;
(statearr_12054_12077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (3))){
var inst_12044 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12046__$1,inst_12044);
} else {
if((state_val_12047 === (2))){
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(4),ch);
} else {
if((state_val_12047 === (11))){
var inst_12036 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12055_12078 = state_12046__$1;
(statearr_12055_12078[(2)] = inst_12036);

(statearr_12055_12078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (9))){
var state_12046__$1 = state_12046;
var statearr_12056_12079 = state_12046__$1;
(statearr_12056_12079[(2)] = null);

(statearr_12056_12079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (5))){
var inst_12031 = cljs.core.async.close_BANG_.call(null,out);
var state_12046__$1 = state_12046;
var statearr_12057_12080 = state_12046__$1;
(statearr_12057_12080[(2)] = inst_12031);

(statearr_12057_12080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (10))){
var inst_12039 = (state_12046[(2)]);
var state_12046__$1 = (function (){var statearr_12058 = state_12046;
(statearr_12058[(8)] = inst_12039);

return statearr_12058;
})();
var statearr_12059_12081 = state_12046__$1;
(statearr_12059_12081[(2)] = null);

(statearr_12059_12081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (8))){
var inst_12028 = (state_12046[(7)]);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12046__$1,(11),out,inst_12028);
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
});})(c__7643__auto___12071,out))
;
return ((function (switch__7578__auto__,c__7643__auto___12071,out){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_12063 = [null,null,null,null,null,null,null,null,null];
(statearr_12063[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_12063[(1)] = (1));

return statearr_12063;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_12046){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_12046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e12064){if((e12064 instanceof Object)){
var ex__7582__auto__ = e12064;
var statearr_12065_12082 = state_12046;
(statearr_12065_12082[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12083 = state_12046;
state_12046 = G__12083;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_12046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_12046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___12071,out))
})();
var state__7645__auto__ = (function (){var statearr_12066 = f__7644__auto__.call(null);
(statearr_12066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___12071);

return statearr_12066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___12071,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12084 = [];
var len__5619__auto___12087 = arguments.length;
var i__5620__auto___12088 = (0);
while(true){
if((i__5620__auto___12088 < len__5619__auto___12087)){
args12084.push((arguments[i__5620__auto___12088]));

var G__12089 = (i__5620__auto___12088 + (1));
i__5620__auto___12088 = G__12089;
continue;
} else {
}
break;
}

var G__12086 = args12084.length;
switch (G__12086) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12084.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7643__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto__){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto__){
return (function (state_12256){
var state_val_12257 = (state_12256[(1)]);
if((state_val_12257 === (7))){
var inst_12252 = (state_12256[(2)]);
var state_12256__$1 = state_12256;
var statearr_12258_12299 = state_12256__$1;
(statearr_12258_12299[(2)] = inst_12252);

(statearr_12258_12299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (20))){
var inst_12222 = (state_12256[(7)]);
var inst_12233 = (state_12256[(2)]);
var inst_12234 = cljs.core.next.call(null,inst_12222);
var inst_12208 = inst_12234;
var inst_12209 = null;
var inst_12210 = (0);
var inst_12211 = (0);
var state_12256__$1 = (function (){var statearr_12259 = state_12256;
(statearr_12259[(8)] = inst_12209);

(statearr_12259[(9)] = inst_12208);

(statearr_12259[(10)] = inst_12211);

(statearr_12259[(11)] = inst_12233);

(statearr_12259[(12)] = inst_12210);

return statearr_12259;
})();
var statearr_12260_12300 = state_12256__$1;
(statearr_12260_12300[(2)] = null);

(statearr_12260_12300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (1))){
var state_12256__$1 = state_12256;
var statearr_12261_12301 = state_12256__$1;
(statearr_12261_12301[(2)] = null);

(statearr_12261_12301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (4))){
var inst_12197 = (state_12256[(13)]);
var inst_12197__$1 = (state_12256[(2)]);
var inst_12198 = (inst_12197__$1 == null);
var state_12256__$1 = (function (){var statearr_12262 = state_12256;
(statearr_12262[(13)] = inst_12197__$1);

return statearr_12262;
})();
if(cljs.core.truth_(inst_12198)){
var statearr_12263_12302 = state_12256__$1;
(statearr_12263_12302[(1)] = (5));

} else {
var statearr_12264_12303 = state_12256__$1;
(statearr_12264_12303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (15))){
var state_12256__$1 = state_12256;
var statearr_12268_12304 = state_12256__$1;
(statearr_12268_12304[(2)] = null);

(statearr_12268_12304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (21))){
var state_12256__$1 = state_12256;
var statearr_12269_12305 = state_12256__$1;
(statearr_12269_12305[(2)] = null);

(statearr_12269_12305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (13))){
var inst_12209 = (state_12256[(8)]);
var inst_12208 = (state_12256[(9)]);
var inst_12211 = (state_12256[(10)]);
var inst_12210 = (state_12256[(12)]);
var inst_12218 = (state_12256[(2)]);
var inst_12219 = (inst_12211 + (1));
var tmp12265 = inst_12209;
var tmp12266 = inst_12208;
var tmp12267 = inst_12210;
var inst_12208__$1 = tmp12266;
var inst_12209__$1 = tmp12265;
var inst_12210__$1 = tmp12267;
var inst_12211__$1 = inst_12219;
var state_12256__$1 = (function (){var statearr_12270 = state_12256;
(statearr_12270[(8)] = inst_12209__$1);

(statearr_12270[(9)] = inst_12208__$1);

(statearr_12270[(10)] = inst_12211__$1);

(statearr_12270[(14)] = inst_12218);

(statearr_12270[(12)] = inst_12210__$1);

return statearr_12270;
})();
var statearr_12271_12306 = state_12256__$1;
(statearr_12271_12306[(2)] = null);

(statearr_12271_12306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (22))){
var state_12256__$1 = state_12256;
var statearr_12272_12307 = state_12256__$1;
(statearr_12272_12307[(2)] = null);

(statearr_12272_12307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (6))){
var inst_12197 = (state_12256[(13)]);
var inst_12206 = f.call(null,inst_12197);
var inst_12207 = cljs.core.seq.call(null,inst_12206);
var inst_12208 = inst_12207;
var inst_12209 = null;
var inst_12210 = (0);
var inst_12211 = (0);
var state_12256__$1 = (function (){var statearr_12273 = state_12256;
(statearr_12273[(8)] = inst_12209);

(statearr_12273[(9)] = inst_12208);

(statearr_12273[(10)] = inst_12211);

(statearr_12273[(12)] = inst_12210);

return statearr_12273;
})();
var statearr_12274_12308 = state_12256__$1;
(statearr_12274_12308[(2)] = null);

(statearr_12274_12308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (17))){
var inst_12222 = (state_12256[(7)]);
var inst_12226 = cljs.core.chunk_first.call(null,inst_12222);
var inst_12227 = cljs.core.chunk_rest.call(null,inst_12222);
var inst_12228 = cljs.core.count.call(null,inst_12226);
var inst_12208 = inst_12227;
var inst_12209 = inst_12226;
var inst_12210 = inst_12228;
var inst_12211 = (0);
var state_12256__$1 = (function (){var statearr_12275 = state_12256;
(statearr_12275[(8)] = inst_12209);

(statearr_12275[(9)] = inst_12208);

(statearr_12275[(10)] = inst_12211);

(statearr_12275[(12)] = inst_12210);

return statearr_12275;
})();
var statearr_12276_12309 = state_12256__$1;
(statearr_12276_12309[(2)] = null);

(statearr_12276_12309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (3))){
var inst_12254 = (state_12256[(2)]);
var state_12256__$1 = state_12256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12256__$1,inst_12254);
} else {
if((state_val_12257 === (12))){
var inst_12242 = (state_12256[(2)]);
var state_12256__$1 = state_12256;
var statearr_12277_12310 = state_12256__$1;
(statearr_12277_12310[(2)] = inst_12242);

(statearr_12277_12310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (2))){
var state_12256__$1 = state_12256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12256__$1,(4),in$);
} else {
if((state_val_12257 === (23))){
var inst_12250 = (state_12256[(2)]);
var state_12256__$1 = state_12256;
var statearr_12278_12311 = state_12256__$1;
(statearr_12278_12311[(2)] = inst_12250);

(statearr_12278_12311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (19))){
var inst_12237 = (state_12256[(2)]);
var state_12256__$1 = state_12256;
var statearr_12279_12312 = state_12256__$1;
(statearr_12279_12312[(2)] = inst_12237);

(statearr_12279_12312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (11))){
var inst_12208 = (state_12256[(9)]);
var inst_12222 = (state_12256[(7)]);
var inst_12222__$1 = cljs.core.seq.call(null,inst_12208);
var state_12256__$1 = (function (){var statearr_12280 = state_12256;
(statearr_12280[(7)] = inst_12222__$1);

return statearr_12280;
})();
if(inst_12222__$1){
var statearr_12281_12313 = state_12256__$1;
(statearr_12281_12313[(1)] = (14));

} else {
var statearr_12282_12314 = state_12256__$1;
(statearr_12282_12314[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (9))){
var inst_12244 = (state_12256[(2)]);
var inst_12245 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12256__$1 = (function (){var statearr_12283 = state_12256;
(statearr_12283[(15)] = inst_12244);

return statearr_12283;
})();
if(cljs.core.truth_(inst_12245)){
var statearr_12284_12315 = state_12256__$1;
(statearr_12284_12315[(1)] = (21));

} else {
var statearr_12285_12316 = state_12256__$1;
(statearr_12285_12316[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (5))){
var inst_12200 = cljs.core.async.close_BANG_.call(null,out);
var state_12256__$1 = state_12256;
var statearr_12286_12317 = state_12256__$1;
(statearr_12286_12317[(2)] = inst_12200);

(statearr_12286_12317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (14))){
var inst_12222 = (state_12256[(7)]);
var inst_12224 = cljs.core.chunked_seq_QMARK_.call(null,inst_12222);
var state_12256__$1 = state_12256;
if(inst_12224){
var statearr_12287_12318 = state_12256__$1;
(statearr_12287_12318[(1)] = (17));

} else {
var statearr_12288_12319 = state_12256__$1;
(statearr_12288_12319[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (16))){
var inst_12240 = (state_12256[(2)]);
var state_12256__$1 = state_12256;
var statearr_12289_12320 = state_12256__$1;
(statearr_12289_12320[(2)] = inst_12240);

(statearr_12289_12320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12257 === (10))){
var inst_12209 = (state_12256[(8)]);
var inst_12211 = (state_12256[(10)]);
var inst_12216 = cljs.core._nth.call(null,inst_12209,inst_12211);
var state_12256__$1 = state_12256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12256__$1,(13),out,inst_12216);
} else {
if((state_val_12257 === (18))){
var inst_12222 = (state_12256[(7)]);
var inst_12231 = cljs.core.first.call(null,inst_12222);
var state_12256__$1 = state_12256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12256__$1,(20),out,inst_12231);
} else {
if((state_val_12257 === (8))){
var inst_12211 = (state_12256[(10)]);
var inst_12210 = (state_12256[(12)]);
var inst_12213 = (inst_12211 < inst_12210);
var inst_12214 = inst_12213;
var state_12256__$1 = state_12256;
if(cljs.core.truth_(inst_12214)){
var statearr_12290_12321 = state_12256__$1;
(statearr_12290_12321[(1)] = (10));

} else {
var statearr_12291_12322 = state_12256__$1;
(statearr_12291_12322[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__7579__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7579__auto____0 = (function (){
var statearr_12295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7579__auto__);

(statearr_12295[(1)] = (1));

return statearr_12295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7579__auto____1 = (function (state_12256){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_12256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e12296){if((e12296 instanceof Object)){
var ex__7582__auto__ = e12296;
var statearr_12297_12323 = state_12256;
(statearr_12297_12323[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12324 = state_12256;
state_12256 = G__12324;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7579__auto__ = function(state_12256){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7579__auto____1.call(this,state_12256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7579__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7579__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto__))
})();
var state__7645__auto__ = (function (){var statearr_12298 = f__7644__auto__.call(null);
(statearr_12298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto__);

return statearr_12298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto__))
);

return c__7643__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12325 = [];
var len__5619__auto___12328 = arguments.length;
var i__5620__auto___12329 = (0);
while(true){
if((i__5620__auto___12329 < len__5619__auto___12328)){
args12325.push((arguments[i__5620__auto___12329]));

var G__12330 = (i__5620__auto___12329 + (1));
i__5620__auto___12329 = G__12330;
continue;
} else {
}
break;
}

var G__12327 = args12325.length;
switch (G__12327) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12325.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args12332 = [];
var len__5619__auto___12335 = arguments.length;
var i__5620__auto___12336 = (0);
while(true){
if((i__5620__auto___12336 < len__5619__auto___12335)){
args12332.push((arguments[i__5620__auto___12336]));

var G__12337 = (i__5620__auto___12336 + (1));
i__5620__auto___12336 = G__12337;
continue;
} else {
}
break;
}

var G__12334 = args12332.length;
switch (G__12334) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12332.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args12339 = [];
var len__5619__auto___12390 = arguments.length;
var i__5620__auto___12391 = (0);
while(true){
if((i__5620__auto___12391 < len__5619__auto___12390)){
args12339.push((arguments[i__5620__auto___12391]));

var G__12392 = (i__5620__auto___12391 + (1));
i__5620__auto___12391 = G__12392;
continue;
} else {
}
break;
}

var G__12341 = args12339.length;
switch (G__12341) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12339.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7643__auto___12394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___12394,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___12394,out){
return (function (state_12365){
var state_val_12366 = (state_12365[(1)]);
if((state_val_12366 === (7))){
var inst_12360 = (state_12365[(2)]);
var state_12365__$1 = state_12365;
var statearr_12367_12395 = state_12365__$1;
(statearr_12367_12395[(2)] = inst_12360);

(statearr_12367_12395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12366 === (1))){
var inst_12342 = null;
var state_12365__$1 = (function (){var statearr_12368 = state_12365;
(statearr_12368[(7)] = inst_12342);

return statearr_12368;
})();
var statearr_12369_12396 = state_12365__$1;
(statearr_12369_12396[(2)] = null);

(statearr_12369_12396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12366 === (4))){
var inst_12345 = (state_12365[(8)]);
var inst_12345__$1 = (state_12365[(2)]);
var inst_12346 = (inst_12345__$1 == null);
var inst_12347 = cljs.core.not.call(null,inst_12346);
var state_12365__$1 = (function (){var statearr_12370 = state_12365;
(statearr_12370[(8)] = inst_12345__$1);

return statearr_12370;
})();
if(inst_12347){
var statearr_12371_12397 = state_12365__$1;
(statearr_12371_12397[(1)] = (5));

} else {
var statearr_12372_12398 = state_12365__$1;
(statearr_12372_12398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12366 === (6))){
var state_12365__$1 = state_12365;
var statearr_12373_12399 = state_12365__$1;
(statearr_12373_12399[(2)] = null);

(statearr_12373_12399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12366 === (3))){
var inst_12362 = (state_12365[(2)]);
var inst_12363 = cljs.core.async.close_BANG_.call(null,out);
var state_12365__$1 = (function (){var statearr_12374 = state_12365;
(statearr_12374[(9)] = inst_12362);

return statearr_12374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12365__$1,inst_12363);
} else {
if((state_val_12366 === (2))){
var state_12365__$1 = state_12365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12365__$1,(4),ch);
} else {
if((state_val_12366 === (11))){
var inst_12345 = (state_12365[(8)]);
var inst_12354 = (state_12365[(2)]);
var inst_12342 = inst_12345;
var state_12365__$1 = (function (){var statearr_12375 = state_12365;
(statearr_12375[(10)] = inst_12354);

(statearr_12375[(7)] = inst_12342);

return statearr_12375;
})();
var statearr_12376_12400 = state_12365__$1;
(statearr_12376_12400[(2)] = null);

(statearr_12376_12400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12366 === (9))){
var inst_12345 = (state_12365[(8)]);
var state_12365__$1 = state_12365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12365__$1,(11),out,inst_12345);
} else {
if((state_val_12366 === (5))){
var inst_12342 = (state_12365[(7)]);
var inst_12345 = (state_12365[(8)]);
var inst_12349 = cljs.core._EQ_.call(null,inst_12345,inst_12342);
var state_12365__$1 = state_12365;
if(inst_12349){
var statearr_12378_12401 = state_12365__$1;
(statearr_12378_12401[(1)] = (8));

} else {
var statearr_12379_12402 = state_12365__$1;
(statearr_12379_12402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12366 === (10))){
var inst_12357 = (state_12365[(2)]);
var state_12365__$1 = state_12365;
var statearr_12380_12403 = state_12365__$1;
(statearr_12380_12403[(2)] = inst_12357);

(statearr_12380_12403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12366 === (8))){
var inst_12342 = (state_12365[(7)]);
var tmp12377 = inst_12342;
var inst_12342__$1 = tmp12377;
var state_12365__$1 = (function (){var statearr_12381 = state_12365;
(statearr_12381[(7)] = inst_12342__$1);

return statearr_12381;
})();
var statearr_12382_12404 = state_12365__$1;
(statearr_12382_12404[(2)] = null);

(statearr_12382_12404[(1)] = (2));


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
});})(c__7643__auto___12394,out))
;
return ((function (switch__7578__auto__,c__7643__auto___12394,out){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_12386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12386[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_12386[(1)] = (1));

return statearr_12386;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_12365){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_12365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e12387){if((e12387 instanceof Object)){
var ex__7582__auto__ = e12387;
var statearr_12388_12405 = state_12365;
(statearr_12388_12405[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12406 = state_12365;
state_12365 = G__12406;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_12365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_12365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___12394,out))
})();
var state__7645__auto__ = (function (){var statearr_12389 = f__7644__auto__.call(null);
(statearr_12389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___12394);

return statearr_12389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___12394,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12407 = [];
var len__5619__auto___12477 = arguments.length;
var i__5620__auto___12478 = (0);
while(true){
if((i__5620__auto___12478 < len__5619__auto___12477)){
args12407.push((arguments[i__5620__auto___12478]));

var G__12479 = (i__5620__auto___12478 + (1));
i__5620__auto___12478 = G__12479;
continue;
} else {
}
break;
}

var G__12409 = args12407.length;
switch (G__12409) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12407.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7643__auto___12481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___12481,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___12481,out){
return (function (state_12447){
var state_val_12448 = (state_12447[(1)]);
if((state_val_12448 === (7))){
var inst_12443 = (state_12447[(2)]);
var state_12447__$1 = state_12447;
var statearr_12449_12482 = state_12447__$1;
(statearr_12449_12482[(2)] = inst_12443);

(statearr_12449_12482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (1))){
var inst_12410 = (new Array(n));
var inst_12411 = inst_12410;
var inst_12412 = (0);
var state_12447__$1 = (function (){var statearr_12450 = state_12447;
(statearr_12450[(7)] = inst_12412);

(statearr_12450[(8)] = inst_12411);

return statearr_12450;
})();
var statearr_12451_12483 = state_12447__$1;
(statearr_12451_12483[(2)] = null);

(statearr_12451_12483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (4))){
var inst_12415 = (state_12447[(9)]);
var inst_12415__$1 = (state_12447[(2)]);
var inst_12416 = (inst_12415__$1 == null);
var inst_12417 = cljs.core.not.call(null,inst_12416);
var state_12447__$1 = (function (){var statearr_12452 = state_12447;
(statearr_12452[(9)] = inst_12415__$1);

return statearr_12452;
})();
if(inst_12417){
var statearr_12453_12484 = state_12447__$1;
(statearr_12453_12484[(1)] = (5));

} else {
var statearr_12454_12485 = state_12447__$1;
(statearr_12454_12485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (15))){
var inst_12437 = (state_12447[(2)]);
var state_12447__$1 = state_12447;
var statearr_12455_12486 = state_12447__$1;
(statearr_12455_12486[(2)] = inst_12437);

(statearr_12455_12486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (13))){
var state_12447__$1 = state_12447;
var statearr_12456_12487 = state_12447__$1;
(statearr_12456_12487[(2)] = null);

(statearr_12456_12487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (6))){
var inst_12412 = (state_12447[(7)]);
var inst_12433 = (inst_12412 > (0));
var state_12447__$1 = state_12447;
if(cljs.core.truth_(inst_12433)){
var statearr_12457_12488 = state_12447__$1;
(statearr_12457_12488[(1)] = (12));

} else {
var statearr_12458_12489 = state_12447__$1;
(statearr_12458_12489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (3))){
var inst_12445 = (state_12447[(2)]);
var state_12447__$1 = state_12447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12447__$1,inst_12445);
} else {
if((state_val_12448 === (12))){
var inst_12411 = (state_12447[(8)]);
var inst_12435 = cljs.core.vec.call(null,inst_12411);
var state_12447__$1 = state_12447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12447__$1,(15),out,inst_12435);
} else {
if((state_val_12448 === (2))){
var state_12447__$1 = state_12447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12447__$1,(4),ch);
} else {
if((state_val_12448 === (11))){
var inst_12427 = (state_12447[(2)]);
var inst_12428 = (new Array(n));
var inst_12411 = inst_12428;
var inst_12412 = (0);
var state_12447__$1 = (function (){var statearr_12459 = state_12447;
(statearr_12459[(10)] = inst_12427);

(statearr_12459[(7)] = inst_12412);

(statearr_12459[(8)] = inst_12411);

return statearr_12459;
})();
var statearr_12460_12490 = state_12447__$1;
(statearr_12460_12490[(2)] = null);

(statearr_12460_12490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (9))){
var inst_12411 = (state_12447[(8)]);
var inst_12425 = cljs.core.vec.call(null,inst_12411);
var state_12447__$1 = state_12447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12447__$1,(11),out,inst_12425);
} else {
if((state_val_12448 === (5))){
var inst_12415 = (state_12447[(9)]);
var inst_12412 = (state_12447[(7)]);
var inst_12420 = (state_12447[(11)]);
var inst_12411 = (state_12447[(8)]);
var inst_12419 = (inst_12411[inst_12412] = inst_12415);
var inst_12420__$1 = (inst_12412 + (1));
var inst_12421 = (inst_12420__$1 < n);
var state_12447__$1 = (function (){var statearr_12461 = state_12447;
(statearr_12461[(12)] = inst_12419);

(statearr_12461[(11)] = inst_12420__$1);

return statearr_12461;
})();
if(cljs.core.truth_(inst_12421)){
var statearr_12462_12491 = state_12447__$1;
(statearr_12462_12491[(1)] = (8));

} else {
var statearr_12463_12492 = state_12447__$1;
(statearr_12463_12492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (14))){
var inst_12440 = (state_12447[(2)]);
var inst_12441 = cljs.core.async.close_BANG_.call(null,out);
var state_12447__$1 = (function (){var statearr_12465 = state_12447;
(statearr_12465[(13)] = inst_12440);

return statearr_12465;
})();
var statearr_12466_12493 = state_12447__$1;
(statearr_12466_12493[(2)] = inst_12441);

(statearr_12466_12493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (10))){
var inst_12431 = (state_12447[(2)]);
var state_12447__$1 = state_12447;
var statearr_12467_12494 = state_12447__$1;
(statearr_12467_12494[(2)] = inst_12431);

(statearr_12467_12494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12448 === (8))){
var inst_12420 = (state_12447[(11)]);
var inst_12411 = (state_12447[(8)]);
var tmp12464 = inst_12411;
var inst_12411__$1 = tmp12464;
var inst_12412 = inst_12420;
var state_12447__$1 = (function (){var statearr_12468 = state_12447;
(statearr_12468[(7)] = inst_12412);

(statearr_12468[(8)] = inst_12411__$1);

return statearr_12468;
})();
var statearr_12469_12495 = state_12447__$1;
(statearr_12469_12495[(2)] = null);

(statearr_12469_12495[(1)] = (2));


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
}
}
});})(c__7643__auto___12481,out))
;
return ((function (switch__7578__auto__,c__7643__auto___12481,out){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_12473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12473[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_12473[(1)] = (1));

return statearr_12473;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_12447){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_12447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e12474){if((e12474 instanceof Object)){
var ex__7582__auto__ = e12474;
var statearr_12475_12496 = state_12447;
(statearr_12475_12496[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12497 = state_12447;
state_12447 = G__12497;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_12447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_12447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___12481,out))
})();
var state__7645__auto__ = (function (){var statearr_12476 = f__7644__auto__.call(null);
(statearr_12476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___12481);

return statearr_12476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___12481,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12498 = [];
var len__5619__auto___12572 = arguments.length;
var i__5620__auto___12573 = (0);
while(true){
if((i__5620__auto___12573 < len__5619__auto___12572)){
args12498.push((arguments[i__5620__auto___12573]));

var G__12574 = (i__5620__auto___12573 + (1));
i__5620__auto___12573 = G__12574;
continue;
} else {
}
break;
}

var G__12500 = args12498.length;
switch (G__12500) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12498.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7643__auto___12576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7643__auto___12576,out){
return (function (){
var f__7644__auto__ = (function (){var switch__7578__auto__ = ((function (c__7643__auto___12576,out){
return (function (state_12542){
var state_val_12543 = (state_12542[(1)]);
if((state_val_12543 === (7))){
var inst_12538 = (state_12542[(2)]);
var state_12542__$1 = state_12542;
var statearr_12544_12577 = state_12542__$1;
(statearr_12544_12577[(2)] = inst_12538);

(statearr_12544_12577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (1))){
var inst_12501 = [];
var inst_12502 = inst_12501;
var inst_12503 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12542__$1 = (function (){var statearr_12545 = state_12542;
(statearr_12545[(7)] = inst_12502);

(statearr_12545[(8)] = inst_12503);

return statearr_12545;
})();
var statearr_12546_12578 = state_12542__$1;
(statearr_12546_12578[(2)] = null);

(statearr_12546_12578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (4))){
var inst_12506 = (state_12542[(9)]);
var inst_12506__$1 = (state_12542[(2)]);
var inst_12507 = (inst_12506__$1 == null);
var inst_12508 = cljs.core.not.call(null,inst_12507);
var state_12542__$1 = (function (){var statearr_12547 = state_12542;
(statearr_12547[(9)] = inst_12506__$1);

return statearr_12547;
})();
if(inst_12508){
var statearr_12548_12579 = state_12542__$1;
(statearr_12548_12579[(1)] = (5));

} else {
var statearr_12549_12580 = state_12542__$1;
(statearr_12549_12580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (15))){
var inst_12532 = (state_12542[(2)]);
var state_12542__$1 = state_12542;
var statearr_12550_12581 = state_12542__$1;
(statearr_12550_12581[(2)] = inst_12532);

(statearr_12550_12581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (13))){
var state_12542__$1 = state_12542;
var statearr_12551_12582 = state_12542__$1;
(statearr_12551_12582[(2)] = null);

(statearr_12551_12582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (6))){
var inst_12502 = (state_12542[(7)]);
var inst_12527 = inst_12502.length;
var inst_12528 = (inst_12527 > (0));
var state_12542__$1 = state_12542;
if(cljs.core.truth_(inst_12528)){
var statearr_12552_12583 = state_12542__$1;
(statearr_12552_12583[(1)] = (12));

} else {
var statearr_12553_12584 = state_12542__$1;
(statearr_12553_12584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (3))){
var inst_12540 = (state_12542[(2)]);
var state_12542__$1 = state_12542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12542__$1,inst_12540);
} else {
if((state_val_12543 === (12))){
var inst_12502 = (state_12542[(7)]);
var inst_12530 = cljs.core.vec.call(null,inst_12502);
var state_12542__$1 = state_12542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12542__$1,(15),out,inst_12530);
} else {
if((state_val_12543 === (2))){
var state_12542__$1 = state_12542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12542__$1,(4),ch);
} else {
if((state_val_12543 === (11))){
var inst_12510 = (state_12542[(10)]);
var inst_12506 = (state_12542[(9)]);
var inst_12520 = (state_12542[(2)]);
var inst_12521 = [];
var inst_12522 = inst_12521.push(inst_12506);
var inst_12502 = inst_12521;
var inst_12503 = inst_12510;
var state_12542__$1 = (function (){var statearr_12554 = state_12542;
(statearr_12554[(11)] = inst_12520);

(statearr_12554[(7)] = inst_12502);

(statearr_12554[(12)] = inst_12522);

(statearr_12554[(8)] = inst_12503);

return statearr_12554;
})();
var statearr_12555_12585 = state_12542__$1;
(statearr_12555_12585[(2)] = null);

(statearr_12555_12585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (9))){
var inst_12502 = (state_12542[(7)]);
var inst_12518 = cljs.core.vec.call(null,inst_12502);
var state_12542__$1 = state_12542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12542__$1,(11),out,inst_12518);
} else {
if((state_val_12543 === (5))){
var inst_12510 = (state_12542[(10)]);
var inst_12506 = (state_12542[(9)]);
var inst_12503 = (state_12542[(8)]);
var inst_12510__$1 = f.call(null,inst_12506);
var inst_12511 = cljs.core._EQ_.call(null,inst_12510__$1,inst_12503);
var inst_12512 = cljs.core.keyword_identical_QMARK_.call(null,inst_12503,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12513 = (inst_12511) || (inst_12512);
var state_12542__$1 = (function (){var statearr_12556 = state_12542;
(statearr_12556[(10)] = inst_12510__$1);

return statearr_12556;
})();
if(cljs.core.truth_(inst_12513)){
var statearr_12557_12586 = state_12542__$1;
(statearr_12557_12586[(1)] = (8));

} else {
var statearr_12558_12587 = state_12542__$1;
(statearr_12558_12587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (14))){
var inst_12535 = (state_12542[(2)]);
var inst_12536 = cljs.core.async.close_BANG_.call(null,out);
var state_12542__$1 = (function (){var statearr_12560 = state_12542;
(statearr_12560[(13)] = inst_12535);

return statearr_12560;
})();
var statearr_12561_12588 = state_12542__$1;
(statearr_12561_12588[(2)] = inst_12536);

(statearr_12561_12588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (10))){
var inst_12525 = (state_12542[(2)]);
var state_12542__$1 = state_12542;
var statearr_12562_12589 = state_12542__$1;
(statearr_12562_12589[(2)] = inst_12525);

(statearr_12562_12589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12543 === (8))){
var inst_12510 = (state_12542[(10)]);
var inst_12502 = (state_12542[(7)]);
var inst_12506 = (state_12542[(9)]);
var inst_12515 = inst_12502.push(inst_12506);
var tmp12559 = inst_12502;
var inst_12502__$1 = tmp12559;
var inst_12503 = inst_12510;
var state_12542__$1 = (function (){var statearr_12563 = state_12542;
(statearr_12563[(14)] = inst_12515);

(statearr_12563[(7)] = inst_12502__$1);

(statearr_12563[(8)] = inst_12503);

return statearr_12563;
})();
var statearr_12564_12590 = state_12542__$1;
(statearr_12564_12590[(2)] = null);

(statearr_12564_12590[(1)] = (2));


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
}
}
});})(c__7643__auto___12576,out))
;
return ((function (switch__7578__auto__,c__7643__auto___12576,out){
return (function() {
var cljs$core$async$state_machine__7579__auto__ = null;
var cljs$core$async$state_machine__7579__auto____0 = (function (){
var statearr_12568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12568[(0)] = cljs$core$async$state_machine__7579__auto__);

(statearr_12568[(1)] = (1));

return statearr_12568;
});
var cljs$core$async$state_machine__7579__auto____1 = (function (state_12542){
while(true){
var ret_value__7580__auto__ = (function (){try{while(true){
var result__7581__auto__ = switch__7578__auto__.call(null,state_12542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7581__auto__;
}
break;
}
}catch (e12569){if((e12569 instanceof Object)){
var ex__7582__auto__ = e12569;
var statearr_12570_12591 = state_12542;
(statearr_12570_12591[(5)] = ex__7582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12592 = state_12542;
state_12542 = G__12592;
continue;
} else {
return ret_value__7580__auto__;
}
break;
}
});
cljs$core$async$state_machine__7579__auto__ = function(state_12542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7579__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7579__auto____1.call(this,state_12542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7579__auto____0;
cljs$core$async$state_machine__7579__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7579__auto____1;
return cljs$core$async$state_machine__7579__auto__;
})()
;})(switch__7578__auto__,c__7643__auto___12576,out))
})();
var state__7645__auto__ = (function (){var statearr_12571 = f__7644__auto__.call(null);
(statearr_12571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7643__auto___12576);

return statearr_12571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7645__auto__);
});})(c__7643__auto___12576,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1442777972102