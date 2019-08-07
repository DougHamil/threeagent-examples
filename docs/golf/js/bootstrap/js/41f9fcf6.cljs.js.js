goog.provide('cljs.js');
goog.provide("cljs.core$macros");
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23439 = arguments.length;
var i__4731__auto___23440 = (0);
while(true){
if((i__4731__auto___23440 < len__4730__auto___23439)){
args__4736__auto__.push((arguments[i__4731__auto___23440]));

var G__23441 = (i__4731__auto___23440 + (1));
i__4731__auto___23440 = G__23441;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__21923 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__21924 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21924;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21923;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq21902){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21902));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__21972 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__21973 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__21973;

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__21972;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__21997){
var map__21998 = p__21997;
var map__21998__$1 = (((((!((map__21998 == null))))?(((((map__21998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21998):map__21998);
var resource = map__21998__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21998__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__22030 = arguments.length;
switch (G__22030) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__22034 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__22034,((function (G__22034){
return (function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),cljs.core.PersistentHashMap.EMPTY);
});})(G__22034))
);

return G__22034;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__22035 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__22035,init);

return G__22035;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map(),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__22071){
var map__22072 = p__22071;
var map__22072__$1 = (((((!((map__22072 == null))))?(((((map__22072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22072):map__22072);
var opts = map__22072__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22072__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22072__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22072__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__22074 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__22074,".","/");
} else {
return G__22074;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4131__auto__ = output_dir;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__22075 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__22075__$1 = ((source_map_timestamp === true)?[G__22075,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__22075);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__22075__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__22075__$1;
}
})();
var file = (function (){var G__22076 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__22076__$1 = ((source_map_timestamp === true)?[G__22076,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__22076);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__22076__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__22076__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22082 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__22072,map__22072__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__22083){
var vec__22084 = p__22083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22084,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22084,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__22072,map__22072__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__22082);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22099){
var vec__22104 = p__22099;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__22111 = cljs.core.first(coll);
var G__22112 = ((function (G__22111){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__22113 = proc;
var G__22114 = cljs.core.rest(coll);
var G__22115 = break_QMARK_;
var G__22116 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__22113,G__22114,G__22115,G__22116) : cljs.js.run_async_BANG_.call(null,G__22113,G__22114,G__22115,G__22116));
}
});})(G__22111))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__22111,G__22112) : proc.call(null,G__22111,G__22112));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"defs","defs",1398449717)], null));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var fexpr__22128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null);
return (fexpr__22128.cljs$core$IFn$_invoke$arity$1 ? fexpr__22128.cljs$core$IFn$_invoke$arity$1(name) : fexpr__22128.call(null,name));
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__22131 = arguments.length;
switch (G__22131) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__22138 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__22138);
} else {
return G__22138;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)," namespace"].join('')], 0));
} else {
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname)))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__22150 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name)], null);
var G__22151 = ((function (G__22150,env,bound_vars__$1,aname){
return (function (resource){

if(cljs.core.truth_(resource)){
var map__22152 = resource;
var map__22152__$1 = (((((!((map__22152 == null))))?(((((map__22152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22152):map__22152);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__22154 = cljs.core.keyword_identical_QMARK_;
var expr__22155 = lang;
if(cljs.core.truth_((function (){var G__22157 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__22158 = expr__22155;
return (pred__22154.cljs$core$IFn$_invoke$arity$2 ? pred__22154.cljs$core$IFn$_invoke$arity$2(G__22157,G__22158) : pred__22154.call(null,G__22157,G__22158));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__22154,expr__22155,map__22152,map__22152__$1,lang,source,cache,source_map,file,G__22150,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__22159 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22159) : cb.call(null,G__22159));
}
});})(pred__22154,expr__22155,map__22152,map__22152__$1,lang,source,cache,source_map,file,G__22150,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__22160 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__22161 = expr__22155;
return (pred__22154.cljs$core$IFn$_invoke$arity$2 ? pred__22154.cljs$core$IFn$_invoke$arity$2(G__22160,G__22161) : pred__22154.call(null,G__22160,G__22161));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__22154,expr__22155,map__22152,map__22152__$1,lang,source,cache,source_map,file,G__22150,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__22154,expr__22155,map__22152,map__22152__$1,lang,source,cache,source_map,file,G__22150,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__22163_23471 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__22163_23471.cljs$core$IFn$_invoke$arity$1 ? fexpr__22163_23471.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__22163_23471.call(null,resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e22162){var cause = e22162;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__22164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22164) : cb.call(null,G__22164));
}
}
});})(pred__22154,expr__22155,map__22152,map__22152__$1,lang,source,cache,source_map,file,G__22150,env,bound_vars__$1,aname))
);
}
});})(pred__22154,expr__22155,map__22152,map__22152__$1,lang,source,cache,source_map,file,G__22150,env,bound_vars__$1,aname))
);
} else {
var G__22165 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22165) : cb.call(null,G__22165));
}
}
} else {
var G__22176 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__22177 = (cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812));
var G__22178 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__22177,G__22178) : cljs.analyzer.error_message.call(null,G__22177,G__22178));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22176) : cb.call(null,G__22176));
}
});})(G__22150,env,bound_vars__$1,aname))
;
var fexpr__22149 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__22149.cljs$core$IFn$_invoke$arity$2 ? fexpr__22149.cljs$core$IFn$_invoke$arity$2(G__22150,G__22151) : fexpr__22149.call(null,G__22150,G__22151));
}catch (e22147){var cause = e22147;
var G__22148 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22148) : cb.call(null,G__22148));
}} else {
var G__22181 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22181) : cb.call(null,G__22181));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4120__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__22220){
var vec__22221 = p__22220;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22221,(1),null);
var entry = vec__22221;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch(new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames(new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames(new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4120__auto__ = new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4120__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4120__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__22244 = arguments.length;
switch (G__22244) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__22245 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__22246 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__22246;

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246){
return (function (p1__22236_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__22236_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246))
,deps)))){
var G__22251 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22251) : cb.call(null,G__22251));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__22258 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22258) : cb.call(null,G__22258));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22245,_STAR_cljs_dep_set_STAR__temp_val__22246))
);
} else {
var G__22260 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22260) : cb.call(null,G__22260));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__22245;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__22281 = arguments.length;
switch (G__22281) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__22310 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__22311 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__22311;

try{var compiler = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311){
return (function (p1__22261_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__22261_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311))
,deps)))){
var G__22322 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22322) : cb.call(null,G__22322));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__22342 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(dep)], null);
var G__22343 = ((function (G__22342,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311){
return (function (resource){

if(cljs.core.not(resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5733__auto__,G__22342,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__22353 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22353) : cb.call(null,G__22353));
}
});})(cljs_dep,temp__5733__auto__,G__22342,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311))
);
} else {
var G__22354 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__22355 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__22356 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__22355,G__22356) : cljs.analyzer.error_message.call(null,G__22355,G__22356));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22354) : cb.call(null,G__22354));
}
} else {
var map__22360 = resource;
var map__22360__$1 = (((((!((map__22360 == null))))?(((((map__22360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22360):map__22360);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__22363 = cljs.core.keyword_identical_QMARK_;
var expr__22364 = lang;
if(cljs.core.truth_((function (){var G__22366 = new cljs.core.Keyword(null,"clj","clj",-660495428);
var G__22367 = expr__22364;
return (pred__22363.cljs$core$IFn$_invoke$arity$2 ? pred__22363.cljs$core$IFn$_invoke$arity$2(G__22366,G__22367) : pred__22363.call(null,G__22366,G__22367));
})())){
cljs.js.pre_file_side_effects(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__22363,expr__22364,map__22360,map__22360__$1,name,lang,source,file,G__22342,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(pred__22363,expr__22364,map__22360,map__22360__$1,name,lang,source,file,G__22342,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311))
);
} else {
if(cljs.core.truth_((function (){var G__22368 = new cljs.core.Keyword(null,"js","js",1768080579);
var G__22369 = expr__22364;
return (pred__22363.cljs$core$IFn$_invoke$arity$2 ? pred__22363.cljs$core$IFn$_invoke$arity$2(G__22368,G__22369) : pred__22363.call(null,G__22368,G__22369));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__22342,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__22310,_STAR_cljs_dep_set_STAR__temp_val__22311))
;
var fexpr__22341 = new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__22341.cljs$core$IFn$_invoke$arity$2 ? fexpr__22341.cljs$core$IFn$_invoke$arity$2(G__22342,G__22343) : fexpr__22341.call(null,G__22342,G__22343));
}catch (e22332){var cause = e22332;
var G__22334 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22334) : cb.call(null,G__22334));
}} else {
var G__22370 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22370) : cb.call(null,G__22370));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__22310;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__4131__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
var G__22375 = bound_vars;
var G__22376 = k__$1;
var G__22377 = cljs.core.next(macros);
var G__22378 = lib;
var G__22379 = reload;
var G__22380 = reloads;
var G__22381 = opts;
var G__22382 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__22375,G__22376,G__22377,G__22378,G__22379,G__22380,G__22381,G__22382) : cljs.js.load_macros.call(null,G__22375,G__22376,G__22377,G__22378,G__22379,G__22380,G__22381,G__22382));
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__22387 = bound_vars;
var G__22388 = k__$1;
var G__22389 = cljs.core.next(macros);
var G__22390 = lib;
var G__22391 = reload;
var G__22392 = reloads;
var G__22393 = opts;
var G__22394 = ((function (G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__22395 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22395) : cb.call(null,G__22395));
}
});})(G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,G__22394) : cljs.js.load_macros.call(null,G__22387,G__22388,G__22389,G__22390,G__22391,G__22392,G__22393,G__22394));
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__22396 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22396) : cb.call(null,G__22396));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__22401 = arguments.length;
switch (G__22401) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__22410 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22410,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22410,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22410,(2),null);
var rewrite_renames = ((function (vec__22410,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22410,uk,rk,renk){
return (function (acc,p__22417){
var vec__22422 = p__22417;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22422,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22422,(1),null);
var entry = vec__22422;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__22410,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__22410,uk,rk,renk))
;
var rewrite_deps = ((function (vec__22410,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__22410,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__22410,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__22410,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__22410,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__22398_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__22398_SHARP_);
});})(vec__22410,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__22410,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__22399_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__22399_SHARP_)], 0));
});})(vec__22410,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__22450,cenv){
var map__22452 = p__22450;
var map__22452__$1 = (((((!((map__22452 == null))))?(((((map__22452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22452):map__22452);
var ast = map__22452__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22452__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__22452,map__22452__$1,ast,requires,name){
return (function (p__22457){
var vec__22458 = p__22457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22458,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22458,(1),null);
var map__22461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__22461__$1 = (((((!((map__22461 == null))))?(((((map__22461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22461):map__22461);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4131__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__22452,map__22452__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__22475 = arguments.length;
switch (G__22475) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__22488,opts,cb){
var map__22490 = p__22488;
var map__22490__$1 = (((((!((map__22490 == null))))?(((((map__22490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22490):map__22490);
var ast = map__22490__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22490__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__22505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__22505.cljs$core$IFn$_invoke$arity$1 ? fexpr__22505.cljs$core$IFn$_invoke$arity$1(op) : fexpr__22505.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__22490,map__22490__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__22589 = rewritten_ast;
var map__22589__$1 = (((((!((map__22589 == null))))?(((((map__22589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22589):map__22589);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__22589,map__22589__$1,uses,use_macros,reload,reloads,name,map__22490,map__22490__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__22591 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__22591__$1 = (((((!((map__22591 == null))))?(((((map__22591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22591):map__22591);
var rewritten_ast__$1 = map__22591__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22591__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__22591,map__22591__$1,rewritten_ast__$1,require_macros,env,map__22589,map__22589__$1,uses,use_macros,reload,reloads,name,map__22490,map__22490__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__22601 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__22601__$1 = (((((!((map__22601 == null))))?(((((map__22601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22601):map__22601);
var rewritten_ast__$2 = map__22601__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22601__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__22605_23501 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__22606_23502 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__22607_23503 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__22608_23504 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__22607_23503;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22608_23504;

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22606_23502;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__22605_23501;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e22604){var cause = e22604;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__22614 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__22615 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__22616 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__22617 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__22616;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22617;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__22622 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22622) : cb.call(null,G__22622));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22615;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__22614;
}}catch (e22609){var cause = e22609;
var G__22610 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22610) : cb.call(null,G__22610));
}}
}
});})(map__22591,map__22591__$1,rewritten_ast__$1,require_macros,env,map__22589,map__22589__$1,uses,use_macros,reload,reloads,name,map__22490,map__22490__$1,ast,op))
);
}
});})(env,map__22589,map__22589__$1,uses,use_macros,reload,reloads,name,map__22490,map__22490__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(uses);
} else {
return and__4120__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__22638 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22638) : cb.call(null,G__22638));
}catch (e22624){var cause = e22624;
var G__22629 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22629) : cb.call(null,G__22629));
}}
}
});})(map__22490,map__22490__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = load;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})())){
var map__22643 = ast;
var map__22643__$1 = (((((!((map__22643 == null))))?(((((map__22643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22643):map__22643);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22643__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22643__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22643__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__22643,map__22643__$1,reload,name,deps,map__22490,map__22490__$1,ast,op){
return (function (p1__22471_SHARP_){
return check_uses_and_load_macros(p1__22471_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__22471_SHARP_)));
});})(map__22643,map__22643__$1,reload,name,deps,map__22490,map__22490__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(load);
if(and__4120__auto__){
var and__4120__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__22490,map__22490__$1,ast,op){
return (function (p1__22472_SHARP_){
return check_uses_and_load_macros(p1__22472_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__22472_SHARP_)));
});})(map__22490,map__22490__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
var G__22651 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__22651) : cb.call(null,G__22651));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__22669_23522 = cljs.core.seq(deps);
var chunk__22670_23523 = null;
var count__22671_23524 = (0);
var i__22672_23525 = (0);
while(true){
if((i__22672_23525 < count__22671_23524)){
var dep_23526 = chunk__22670_23523.cljs$core$IIndexed$_nth$arity$2(null,i__22672_23525);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22687_23527 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22688_23528 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22689_23529 = true;
var _STAR_print_fn_STAR__temp_val__22690_23530 = ((function (seq__22669_23522,chunk__22670_23523,count__22671_23524,i__22672_23525,_STAR_print_newline_STAR__orig_val__22687_23527,_STAR_print_fn_STAR__orig_val__22688_23528,_STAR_print_newline_STAR__temp_val__22689_23529,sb__4661__auto__,dep_23526){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22669_23522,chunk__22670_23523,count__22671_23524,i__22672_23525,_STAR_print_newline_STAR__orig_val__22687_23527,_STAR_print_fn_STAR__orig_val__22688_23528,_STAR_print_newline_STAR__temp_val__22689_23529,sb__4661__auto__,dep_23526))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22689_23529;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22690_23530;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_23526)," = require('",dep_23526,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22688_23528;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22687_23527;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__23531 = seq__22669_23522;
var G__23532 = chunk__22670_23523;
var G__23533 = count__22671_23524;
var G__23534 = (i__22672_23525 + (1));
seq__22669_23522 = G__23531;
chunk__22670_23523 = G__23532;
count__22671_23524 = G__23533;
i__22672_23525 = G__23534;
continue;
} else {
var temp__5735__auto___23535 = cljs.core.seq(seq__22669_23522);
if(temp__5735__auto___23535){
var seq__22669_23536__$1 = temp__5735__auto___23535;
if(cljs.core.chunked_seq_QMARK_(seq__22669_23536__$1)){
var c__4550__auto___23537 = cljs.core.chunk_first(seq__22669_23536__$1);
var G__23538 = cljs.core.chunk_rest(seq__22669_23536__$1);
var G__23539 = c__4550__auto___23537;
var G__23540 = cljs.core.count(c__4550__auto___23537);
var G__23541 = (0);
seq__22669_23522 = G__23538;
chunk__22670_23523 = G__23539;
count__22671_23524 = G__23540;
i__22672_23525 = G__23541;
continue;
} else {
var dep_23542 = cljs.core.first(seq__22669_23536__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22704_23543 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22705_23544 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22706_23545 = true;
var _STAR_print_fn_STAR__temp_val__22707_23546 = ((function (seq__22669_23522,chunk__22670_23523,count__22671_23524,i__22672_23525,_STAR_print_newline_STAR__orig_val__22704_23543,_STAR_print_fn_STAR__orig_val__22705_23544,_STAR_print_newline_STAR__temp_val__22706_23545,sb__4661__auto__,dep_23542,seq__22669_23536__$1,temp__5735__auto___23535){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22669_23522,chunk__22670_23523,count__22671_23524,i__22672_23525,_STAR_print_newline_STAR__orig_val__22704_23543,_STAR_print_fn_STAR__orig_val__22705_23544,_STAR_print_newline_STAR__temp_val__22706_23545,sb__4661__auto__,dep_23542,seq__22669_23536__$1,temp__5735__auto___23535))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22706_23545;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22707_23546;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_23542)," = require('",dep_23542,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22705_23544;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22704_23543;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__23547 = cljs.core.next(seq__22669_23536__$1);
var G__23548 = null;
var G__23549 = (0);
var G__23550 = (0);
seq__22669_23522 = G__23547;
chunk__22670_23523 = G__23548;
count__22671_23524 = G__23549;
i__22672_23525 = G__23550;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__22720 = cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__22720__$1 = (((((!((map__22720 == null))))?(((((map__22720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22720):map__22720);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22720__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__22731_23551 = cljs.core.seq(deps);
var chunk__22732_23552 = null;
var count__22733_23553 = (0);
var i__22734_23554 = (0);
while(true){
if((i__22734_23554 < count__22733_23553)){
var dep_23555 = chunk__22732_23552.cljs$core$IIndexed$_nth$arity$2(null,i__22734_23554);
var map__22782_23556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_23555));
var map__22782_23557__$1 = (((((!((map__22782_23556 == null))))?(((((map__22782_23556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22782_23556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22782_23556):map__22782_23556);
var global_exports_23558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22782_23557__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22786_23565 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22787_23566 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22788_23567 = true;
var _STAR_print_fn_STAR__temp_val__22789_23568 = ((function (seq__22731_23551,chunk__22732_23552,count__22733_23553,i__22734_23554,_STAR_print_newline_STAR__orig_val__22786_23565,_STAR_print_fn_STAR__orig_val__22787_23566,_STAR_print_newline_STAR__temp_val__22788_23567,sb__4661__auto__,map__22782_23556,map__22782_23557__$1,global_exports_23558,dep_23555,map__22720,map__22720__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22731_23551,chunk__22732_23552,count__22733_23553,i__22734_23554,_STAR_print_newline_STAR__orig_val__22786_23565,_STAR_print_fn_STAR__orig_val__22787_23566,_STAR_print_newline_STAR__temp_val__22788_23567,sb__4661__auto__,map__22782_23556,map__22782_23557__$1,global_exports_23558,dep_23555,map__22720,map__22720__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22788_23567;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22789_23568;

try{cljs.compiler.emit_global_export(ns_name,global_exports_23558,dep_23555);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22787_23566;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22786_23565;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__23570 = seq__22731_23551;
var G__23571 = chunk__22732_23552;
var G__23572 = count__22733_23553;
var G__23573 = (i__22734_23554 + (1));
seq__22731_23551 = G__23570;
chunk__22732_23552 = G__23571;
count__22733_23553 = G__23572;
i__22734_23554 = G__23573;
continue;
} else {
var temp__5735__auto___23574 = cljs.core.seq(seq__22731_23551);
if(temp__5735__auto___23574){
var seq__22731_23575__$1 = temp__5735__auto___23574;
if(cljs.core.chunked_seq_QMARK_(seq__22731_23575__$1)){
var c__4550__auto___23576 = cljs.core.chunk_first(seq__22731_23575__$1);
var G__23577 = cljs.core.chunk_rest(seq__22731_23575__$1);
var G__23578 = c__4550__auto___23576;
var G__23579 = cljs.core.count(c__4550__auto___23576);
var G__23580 = (0);
seq__22731_23551 = G__23577;
chunk__22732_23552 = G__23578;
count__22733_23553 = G__23579;
i__22734_23554 = G__23580;
continue;
} else {
var dep_23581 = cljs.core.first(seq__22731_23575__$1);
var map__22797_23582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_23581));
var map__22797_23583__$1 = (((((!((map__22797_23582 == null))))?(((((map__22797_23582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22797_23582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22797_23582):map__22797_23582);
var global_exports_23584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797_23583__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22803_23585 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22804_23586 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22805_23587 = true;
var _STAR_print_fn_STAR__temp_val__22806_23588 = ((function (seq__22731_23551,chunk__22732_23552,count__22733_23553,i__22734_23554,_STAR_print_newline_STAR__orig_val__22803_23585,_STAR_print_fn_STAR__orig_val__22804_23586,_STAR_print_newline_STAR__temp_val__22805_23587,sb__4661__auto__,map__22797_23582,map__22797_23583__$1,global_exports_23584,dep_23581,seq__22731_23575__$1,temp__5735__auto___23574,map__22720,map__22720__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__22731_23551,chunk__22732_23552,count__22733_23553,i__22734_23554,_STAR_print_newline_STAR__orig_val__22803_23585,_STAR_print_fn_STAR__orig_val__22804_23586,_STAR_print_newline_STAR__temp_val__22805_23587,sb__4661__auto__,map__22797_23582,map__22797_23583__$1,global_exports_23584,dep_23581,seq__22731_23575__$1,temp__5735__auto___23574,map__22720,map__22720__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22805_23587;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22806_23588;

try{cljs.compiler.emit_global_export(ns_name,global_exports_23584,dep_23581);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22804_23586;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22803_23585;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__23589 = cljs.core.next(seq__22731_23575__$1);
var G__23590 = null;
var G__23591 = (0);
var G__23592 = (0);
seq__22731_23551 = G__23589;
chunk__22732_23552 = G__23590;
count__22733_23553 = G__23591;
i__22734_23554 = G__23592;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__22839 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22839,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__22839;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__22852 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__22853 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__22854 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__22855 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__22856 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__22857 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__22858 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__22859 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__22860 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__22861 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__22862 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__22863 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__22864 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__22865 = ns;
var _STAR_checked_arrays_STAR__temp_val__22866 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__22867 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__22868 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__22869 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__22870 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__22871 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__22872 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__22873 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__22874 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__22875 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22864;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__22865;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__22866;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__22867;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__22868;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__22869;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__22870;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__22871;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__22872;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__22873;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__22874;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__22875;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e22883){var cause = e22883;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__22886 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22886__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22886,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__22886);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22886__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__22886__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22887){var cause = e22887;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__22891 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__22890 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__22890.cljs$core$IFn$_invoke$arity$1 ? fexpr__22890.cljs$core$IFn$_invoke$arity$1(G__22891) : fexpr__22890.call(null,G__22891));
})())){
var G__22893 = bound_vars__$1;
var G__22894 = aenv__$1;
var G__22895 = ast;
var G__22896 = opts;
var G__22897 = ((function (G__22893,G__22894,G__22895,G__22896,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22852,_STAR_cljs_ns_STAR__orig_val__22853,_STAR_checked_arrays_STAR__orig_val__22854,_STAR_cljs_static_fns_STAR__orig_val__22855,_STAR_fn_invoke_direct_STAR__orig_val__22856,_STAR_ns_STAR__orig_val__22857,_STAR_passes_STAR__orig_val__22858,_STAR_alias_map_STAR__orig_val__22859,_STAR_data_readers_STAR__orig_val__22860,resolve_symbol_orig_val__22861,_STAR_source_map_data_STAR__orig_val__22862,_STAR_cljs_file_STAR__orig_val__22863,_STAR_compiler_STAR__temp_val__22864,_STAR_cljs_ns_STAR__temp_val__22865,_STAR_checked_arrays_STAR__temp_val__22866,_STAR_cljs_static_fns_STAR__temp_val__22867,_STAR_fn_invoke_direct_STAR__temp_val__22868,_STAR_ns_STAR__temp_val__22869,_STAR_passes_STAR__temp_val__22870,_STAR_alias_map_STAR__temp_val__22871,_STAR_data_readers_STAR__temp_val__22872,resolve_symbol_temp_val__22873,_STAR_source_map_data_STAR__temp_val__22874,_STAR_cljs_file_STAR__temp_val__22875,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});})(G__22893,G__22894,G__22895,G__22896,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22852,_STAR_cljs_ns_STAR__orig_val__22853,_STAR_checked_arrays_STAR__orig_val__22854,_STAR_cljs_static_fns_STAR__orig_val__22855,_STAR_fn_invoke_direct_STAR__orig_val__22856,_STAR_ns_STAR__orig_val__22857,_STAR_passes_STAR__orig_val__22858,_STAR_alias_map_STAR__orig_val__22859,_STAR_data_readers_STAR__orig_val__22860,resolve_symbol_orig_val__22861,_STAR_source_map_data_STAR__orig_val__22862,_STAR_cljs_file_STAR__orig_val__22863,_STAR_compiler_STAR__temp_val__22864,_STAR_cljs_ns_STAR__temp_val__22865,_STAR_checked_arrays_STAR__temp_val__22866,_STAR_cljs_static_fns_STAR__temp_val__22867,_STAR_fn_invoke_direct_STAR__temp_val__22868,_STAR_ns_STAR__temp_val__22869,_STAR_passes_STAR__temp_val__22870,_STAR_alias_map_STAR__temp_val__22871,_STAR_data_readers_STAR__temp_val__22872,resolve_symbol_temp_val__22873,_STAR_source_map_data_STAR__temp_val__22874,_STAR_cljs_file_STAR__temp_val__22875,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
;
var fexpr__22892 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__22892.cljs$core$IFn$_invoke$arity$5 ? fexpr__22892.cljs$core$IFn$_invoke$arity$5(G__22893,G__22894,G__22895,G__22896,G__22897) : fexpr__22892.call(null,G__22893,G__22894,G__22895,G__22896,G__22897));
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22852,_STAR_cljs_ns_STAR__orig_val__22853,_STAR_checked_arrays_STAR__orig_val__22854,_STAR_cljs_static_fns_STAR__orig_val__22855,_STAR_fn_invoke_direct_STAR__orig_val__22856,_STAR_ns_STAR__orig_val__22857,_STAR_passes_STAR__orig_val__22858,_STAR_alias_map_STAR__orig_val__22859,_STAR_data_readers_STAR__orig_val__22860,resolve_symbol_orig_val__22861,_STAR_source_map_data_STAR__orig_val__22862,_STAR_cljs_file_STAR__orig_val__22863,_STAR_compiler_STAR__temp_val__22864,_STAR_cljs_ns_STAR__temp_val__22865,_STAR_checked_arrays_STAR__temp_val__22866,_STAR_cljs_static_fns_STAR__temp_val__22867,_STAR_fn_invoke_direct_STAR__temp_val__22868,_STAR_ns_STAR__temp_val__22869,_STAR_passes_STAR__temp_val__22870,_STAR_alias_map_STAR__temp_val__22871,_STAR_data_readers_STAR__temp_val__22872,resolve_symbol_temp_val__22873,_STAR_source_map_data_STAR__temp_val__22874,_STAR_cljs_file_STAR__temp_val__22875,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__22852,_STAR_cljs_ns_STAR__orig_val__22853,_STAR_checked_arrays_STAR__orig_val__22854,_STAR_cljs_static_fns_STAR__orig_val__22855,_STAR_fn_invoke_direct_STAR__orig_val__22856,_STAR_ns_STAR__orig_val__22857,_STAR_passes_STAR__orig_val__22858,_STAR_alias_map_STAR__orig_val__22859,_STAR_data_readers_STAR__orig_val__22860,resolve_symbol_orig_val__22861,_STAR_source_map_data_STAR__orig_val__22862,_STAR_cljs_file_STAR__orig_val__22863,_STAR_compiler_STAR__temp_val__22864,_STAR_cljs_ns_STAR__temp_val__22865,_STAR_checked_arrays_STAR__temp_val__22866,_STAR_cljs_static_fns_STAR__temp_val__22867,_STAR_fn_invoke_direct_STAR__temp_val__22868,_STAR_ns_STAR__temp_val__22869,_STAR_passes_STAR__temp_val__22870,_STAR_alias_map_STAR__temp_val__22871,_STAR_data_readers_STAR__temp_val__22872,resolve_symbol_temp_val__22873,_STAR_source_map_data_STAR__temp_val__22874,_STAR_cljs_file_STAR__temp_val__22875,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
var G__22906 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__22906) : cb__$1.call(null,G__22906));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__22863;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__22862;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__22861;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__22860;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__22859;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__22858;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__22857;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__22856;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__22855;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__22854;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__22853;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22852;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,the_ns], 0));
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__22925 = arguments.length;
switch (G__22925) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__22942 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22942,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__22942;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__22951 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__22952 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__22953 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__22954 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__22955 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__22956 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__22957 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__22958 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__22959 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__22960 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__22961 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__22962 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__22963 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__22964 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__22965 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__22966 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__22967 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__22968 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__22969 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__22970 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__22971 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__22972 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__22962;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__22963;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__22964;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__22965;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__22966;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__22967;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__22968;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__22969;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__22970;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__22971;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__22972;

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__22992 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__22992__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22992,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__22992);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22992__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__22992__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e22993){var cause = e22993;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__22994 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__22997 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__22997__$1 = (((((!((map__22997 == null))))?(((((map__22997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22997):map__22997);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22997__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22997__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22994,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22994,(1),null);
if(cljs.core.truth_((function (){var G__23000 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__22999 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__22999.cljs$core$IFn$_invoke$arity$1 ? fexpr__22999.cljs$core$IFn$_invoke$arity$1(G__23000) : fexpr__22999.call(null,G__23000));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__22994,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22951,_STAR_eval_fn_STAR__orig_val__22952,_STAR_cljs_ns_STAR__orig_val__22953,_STAR_checked_arrays_STAR__orig_val__22954,_STAR_cljs_static_fns_STAR__orig_val__22955,_STAR_fn_invoke_direct_STAR__orig_val__22956,_STAR_ns_STAR__orig_val__22957,_STAR_alias_map_STAR__orig_val__22958,_STAR_data_readers_STAR__orig_val__22959,resolve_symbol_orig_val__22960,_STAR_source_map_data_STAR__orig_val__22961,_STAR_compiler_STAR__temp_val__22962,_STAR_eval_fn_STAR__temp_val__22963,_STAR_cljs_ns_STAR__temp_val__22964,_STAR_checked_arrays_STAR__temp_val__22965,_STAR_cljs_static_fns_STAR__temp_val__22966,_STAR_fn_invoke_direct_STAR__temp_val__22967,_STAR_ns_STAR__temp_val__22968,_STAR_alias_map_STAR__temp_val__22969,_STAR_data_readers_STAR__temp_val__22970,resolve_symbol_temp_val__22971,_STAR_source_map_data_STAR__temp_val__22972,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23002_23622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23003_23623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23004_23624 = true;
var _STAR_print_fn_STAR__temp_val__23005_23625 = ((function (_STAR_print_newline_STAR__orig_val__23002_23622,_STAR_print_fn_STAR__orig_val__23003_23623,_STAR_print_newline_STAR__temp_val__23004_23624,sb__4661__auto__,ns_name,sb,ast,vec__22994,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22951,_STAR_eval_fn_STAR__orig_val__22952,_STAR_cljs_ns_STAR__orig_val__22953,_STAR_checked_arrays_STAR__orig_val__22954,_STAR_cljs_static_fns_STAR__orig_val__22955,_STAR_fn_invoke_direct_STAR__orig_val__22956,_STAR_ns_STAR__orig_val__22957,_STAR_alias_map_STAR__orig_val__22958,_STAR_data_readers_STAR__orig_val__22959,resolve_symbol_orig_val__22960,_STAR_source_map_data_STAR__orig_val__22961,_STAR_compiler_STAR__temp_val__22962,_STAR_eval_fn_STAR__temp_val__22963,_STAR_cljs_ns_STAR__temp_val__22964,_STAR_checked_arrays_STAR__temp_val__22965,_STAR_cljs_static_fns_STAR__temp_val__22966,_STAR_fn_invoke_direct_STAR__temp_val__22967,_STAR_ns_STAR__temp_val__22968,_STAR_alias_map_STAR__temp_val__22969,_STAR_data_readers_STAR__temp_val__22970,resolve_symbol_temp_val__22971,_STAR_source_map_data_STAR__temp_val__22972,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23002_23622,_STAR_print_fn_STAR__orig_val__23003_23623,_STAR_print_newline_STAR__temp_val__23004_23624,sb__4661__auto__,ns_name,sb,ast,vec__22994,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22951,_STAR_eval_fn_STAR__orig_val__22952,_STAR_cljs_ns_STAR__orig_val__22953,_STAR_checked_arrays_STAR__orig_val__22954,_STAR_cljs_static_fns_STAR__orig_val__22955,_STAR_fn_invoke_direct_STAR__orig_val__22956,_STAR_ns_STAR__orig_val__22957,_STAR_alias_map_STAR__orig_val__22958,_STAR_data_readers_STAR__orig_val__22959,resolve_symbol_orig_val__22960,_STAR_source_map_data_STAR__orig_val__22961,_STAR_compiler_STAR__temp_val__22962,_STAR_eval_fn_STAR__temp_val__22963,_STAR_cljs_ns_STAR__temp_val__22964,_STAR_checked_arrays_STAR__temp_val__22965,_STAR_cljs_static_fns_STAR__temp_val__22966,_STAR_fn_invoke_direct_STAR__temp_val__22967,_STAR_ns_STAR__temp_val__22968,_STAR_alias_map_STAR__temp_val__22969,_STAR_data_readers_STAR__temp_val__22970,resolve_symbol_temp_val__22971,_STAR_source_map_data_STAR__temp_val__22972,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23004_23624;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23005_23625;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23003_23623;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23002_23622;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

var G__23007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23007) : cb.call(null,G__23007));
}
});})(ast,vec__22994,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22951,_STAR_eval_fn_STAR__orig_val__22952,_STAR_cljs_ns_STAR__orig_val__22953,_STAR_checked_arrays_STAR__orig_val__22954,_STAR_cljs_static_fns_STAR__orig_val__22955,_STAR_fn_invoke_direct_STAR__orig_val__22956,_STAR_ns_STAR__orig_val__22957,_STAR_alias_map_STAR__orig_val__22958,_STAR_data_readers_STAR__orig_val__22959,resolve_symbol_orig_val__22960,_STAR_source_map_data_STAR__orig_val__22961,_STAR_compiler_STAR__temp_val__22962,_STAR_eval_fn_STAR__temp_val__22963,_STAR_cljs_ns_STAR__temp_val__22964,_STAR_checked_arrays_STAR__temp_val__22965,_STAR_cljs_static_fns_STAR__temp_val__22966,_STAR_fn_invoke_direct_STAR__temp_val__22967,_STAR_ns_STAR__temp_val__22968,_STAR_alias_map_STAR__temp_val__22969,_STAR_data_readers_STAR__temp_val__22970,resolve_symbol_temp_val__22971,_STAR_source_map_data_STAR__temp_val__22972,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23012_23633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23013_23634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23014_23635 = true;
var _STAR_print_fn_STAR__temp_val__23015_23636 = ((function (_STAR_print_newline_STAR__orig_val__23012_23633,_STAR_print_fn_STAR__orig_val__23013_23634,_STAR_print_newline_STAR__temp_val__23014_23635,sb__4661__auto__,ast,vec__22994,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22951,_STAR_eval_fn_STAR__orig_val__22952,_STAR_cljs_ns_STAR__orig_val__22953,_STAR_checked_arrays_STAR__orig_val__22954,_STAR_cljs_static_fns_STAR__orig_val__22955,_STAR_fn_invoke_direct_STAR__orig_val__22956,_STAR_ns_STAR__orig_val__22957,_STAR_alias_map_STAR__orig_val__22958,_STAR_data_readers_STAR__orig_val__22959,resolve_symbol_orig_val__22960,_STAR_source_map_data_STAR__orig_val__22961,_STAR_compiler_STAR__temp_val__22962,_STAR_eval_fn_STAR__temp_val__22963,_STAR_cljs_ns_STAR__temp_val__22964,_STAR_checked_arrays_STAR__temp_val__22965,_STAR_cljs_static_fns_STAR__temp_val__22966,_STAR_fn_invoke_direct_STAR__temp_val__22967,_STAR_ns_STAR__temp_val__22968,_STAR_alias_map_STAR__temp_val__22969,_STAR_data_readers_STAR__temp_val__22970,resolve_symbol_temp_val__22971,_STAR_source_map_data_STAR__temp_val__22972,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23012_23633,_STAR_print_fn_STAR__orig_val__23013_23634,_STAR_print_newline_STAR__temp_val__23014_23635,sb__4661__auto__,ast,vec__22994,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__22951,_STAR_eval_fn_STAR__orig_val__22952,_STAR_cljs_ns_STAR__orig_val__22953,_STAR_checked_arrays_STAR__orig_val__22954,_STAR_cljs_static_fns_STAR__orig_val__22955,_STAR_fn_invoke_direct_STAR__orig_val__22956,_STAR_ns_STAR__orig_val__22957,_STAR_alias_map_STAR__orig_val__22958,_STAR_data_readers_STAR__orig_val__22959,resolve_symbol_orig_val__22960,_STAR_source_map_data_STAR__orig_val__22961,_STAR_compiler_STAR__temp_val__22962,_STAR_eval_fn_STAR__temp_val__22963,_STAR_cljs_ns_STAR__temp_val__22964,_STAR_checked_arrays_STAR__temp_val__22965,_STAR_cljs_static_fns_STAR__temp_val__22966,_STAR_fn_invoke_direct_STAR__temp_val__22967,_STAR_ns_STAR__temp_val__22968,_STAR_alias_map_STAR__temp_val__22969,_STAR_data_readers_STAR__temp_val__22970,resolve_symbol_temp_val__22971,_STAR_source_map_data_STAR__temp_val__22972,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23014_23635;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23015_23636;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23013_23634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23012_23633;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var G__23016 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__23016) : cb.call(null,G__23016));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__22961;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__22960;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__22959;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__22958;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__22957;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__22956;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__22955;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__22954;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__22953;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__22952;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__22951;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__23018 = arguments.length;
switch (G__23018) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__23026 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23026,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__23026;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__23032 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__23033 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__23034 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__23035 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__23036 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__23037 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__23038 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__23039 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__23040 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__23041 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__23042 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__23043 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__23044 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__23045 = ns;
var _STAR_checked_arrays_STAR__temp_val__23046 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__23047 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__23048 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__23049 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__23050 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__23051 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__23052 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__23053 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__23043;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__23044;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__23045;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__23046;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__23047;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__23048;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__23049;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__23050;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__23051;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__23052;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__23053;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e23055){var cause = e23055;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__23057 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__23057__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23057,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__23057);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23057__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__23057__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e23058){var cause = e23058;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__23059 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__23062 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__23062__$1 = (((((!((map__23062 == null))))?(((((map__23062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23062):map__23062);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23062__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23062__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23059,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23059,(1),null);
if(cljs.core.truth_((function (){var G__23069 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__23068 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__23068.cljs$core$IFn$_invoke$arity$1 ? fexpr__23068.cljs$core$IFn$_invoke$arity$1(G__23069) : fexpr__23068.call(null,G__23069));
})())){
var G__23071 = bound_vars__$1;
var G__23072 = aenv__$1;
var G__23073 = ast__$1;
var G__23074 = opts;
var G__23075 = ((function (G__23071,G__23072,G__23073,G__23074,ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23076_23647 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23077_23648 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23078_23649 = true;
var _STAR_print_fn_STAR__temp_val__23079_23650 = ((function (_STAR_print_newline_STAR__orig_val__23076_23647,_STAR_print_fn_STAR__orig_val__23077_23648,_STAR_print_newline_STAR__temp_val__23078_23649,sb__4661__auto__,ns_name,G__23071,G__23072,G__23073,G__23074,ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23076_23647,_STAR_print_fn_STAR__orig_val__23077_23648,_STAR_print_newline_STAR__temp_val__23078_23649,sb__4661__auto__,ns_name,G__23071,G__23072,G__23073,G__23074,ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23078_23649;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23079_23650;

try{cljs.compiler.emit(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23077_23648;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23076_23647;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});})(G__23071,G__23072,G__23073,G__23074,ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
var fexpr__23070 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__23070.cljs$core$IFn$_invoke$arity$5 ? fexpr__23070.cljs$core$IFn$_invoke$arity$5(G__23071,G__23072,G__23073,G__23074,G__23075) : fexpr__23070.call(null,G__23071,G__23072,G__23073,G__23074,G__23075));
} else {
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23080_23658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23081_23659 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23082_23660 = true;
var _STAR_print_fn_STAR__temp_val__23083_23661 = ((function (_STAR_print_newline_STAR__orig_val__23080_23658,_STAR_print_fn_STAR__orig_val__23081_23659,_STAR_print_newline_STAR__temp_val__23082_23660,sb__4661__auto__,ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23080_23658,_STAR_print_fn_STAR__orig_val__23081_23659,_STAR_print_newline_STAR__temp_val__23082_23660,sb__4661__auto__,ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23082_23660;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23083_23661;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23081_23659;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23080_23658;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

return ((function (ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
;})(ast,vec__23059,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23032,_STAR_eval_fn_STAR__orig_val__23033,_STAR_cljs_ns_STAR__orig_val__23034,_STAR_checked_arrays_STAR__orig_val__23035,_STAR_cljs_static_fns_STAR__orig_val__23036,_STAR_fn_invoke_direct_STAR__orig_val__23037,_STAR_ns_STAR__orig_val__23038,_STAR_alias_map_STAR__orig_val__23039,_STAR_data_readers_STAR__orig_val__23040,resolve_symbol_orig_val__23041,_STAR_source_map_data_STAR__orig_val__23042,_STAR_compiler_STAR__temp_val__23043,_STAR_eval_fn_STAR__temp_val__23044,_STAR_cljs_ns_STAR__temp_val__23045,_STAR_checked_arrays_STAR__temp_val__23046,_STAR_cljs_static_fns_STAR__temp_val__23047,_STAR_fn_invoke_direct_STAR__temp_val__23048,_STAR_ns_STAR__temp_val__23049,_STAR_alias_map_STAR__temp_val__23050,_STAR_data_readers_STAR__temp_val__23051,resolve_symbol_temp_val__23052,_STAR_source_map_data_STAR__temp_val__23053,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__23086 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__23086) : cb__$1.call(null,G__23086));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__23042;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__23041;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__23040;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__23039;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__23038;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__23037;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__23036;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__23035;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__23034;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__23033;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__23032;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_ns], 0));
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__23093 = arguments.length;
switch (G__23093) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__23162 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23162,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data());
} else {
return G__23162;
}
})();
var aname = (function (){var G__23167 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__23167);
} else {
return G__23167;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__23175 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__23176 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__23177 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__23178 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__23179 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__23180 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__23181 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__23182 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__23183 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__23184 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__23185 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__23186 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__23187 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__23188 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__23189 = ns;
var _STAR_checked_arrays_STAR__temp_val__23190 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__23191 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__23192 = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__23193 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__23194 = cljs.js.alias_map(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__23195 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__23196 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__23197 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__23198 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__23187;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__23188;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__23189;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__23190;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__23191;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__23192;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__23193;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__23194;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__23195;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__23196;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__23197;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__23198;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read(eof,rdr)], null);
}catch (e23209){var cause = e23209;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__23211 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__23211__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23211,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__23211);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23211__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__23211__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e23217){var cause = e23217;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__23219 = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__23226 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__23226__$1 = (((((!((map__23226 == null))))?(((((map__23226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23226):map__23226);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23226__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23226__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23219,(1),null);
if(cljs.core.truth_((function (){var G__23242 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__23241 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null);
return (fexpr__23241.cljs$core$IFn$_invoke$arity$1 ? fexpr__23241.cljs$core$IFn$_invoke$arity$1(G__23242) : fexpr__23241.call(null,G__23242));
})())){
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23247_23686 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23248_23687 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23249_23688 = true;
var _STAR_print_fn_STAR__temp_val__23250_23689 = ((function (_STAR_print_newline_STAR__orig_val__23247_23686,_STAR_print_fn_STAR__orig_val__23248_23687,_STAR_print_newline_STAR__temp_val__23249_23688,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23247_23686,_STAR_print_fn_STAR__orig_val__23248_23687,_STAR_print_newline_STAR__temp_val__23249_23688,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23249_23688;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23250_23689;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23248_23687;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23247_23686;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

var G__23269 = true;
var G__23270 = bound_vars__$1;
var G__23271 = aenv__$1;
var G__23272 = ast__$1;
var G__23273 = opts;
var G__23274 = ((function (G__23269,G__23270,G__23271,G__23272,G__23273,ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$eval_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_SINGLEQUOTE_], 0));
}
});})(G__23269,G__23270,G__23271,G__23272,G__23273,ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var fexpr__23268 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__23268.cljs$core$IFn$_invoke$arity$6 ? fexpr__23268.cljs$core$IFn$_invoke$arity$6(G__23269,G__23270,G__23271,G__23272,G__23273,G__23274) : fexpr__23268.call(null,G__23269,G__23270,G__23271,G__23272,G__23273,G__23274));
} else {
var env__10537__auto___23690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__10537__auto___23691__$1 = ((cljs.core.map_QMARK_(env__10537__auto___23690))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__10537__auto___23690):(((((env__10537__auto___23690 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__10537__auto___23690)))))?env__10537__auto___23690:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__10537__auto___23690))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__23309_23692 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__23310_23693 = env__10537__auto___23691__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__23310_23693;

try{sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23311_23694 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23312_23695 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23313_23696 = true;
var _STAR_print_fn_STAR__temp_val__23314_23697 = ((function (_STAR_print_newline_STAR__orig_val__23311_23694,_STAR_print_fn_STAR__orig_val__23312_23695,_STAR_print_newline_STAR__temp_val__23313_23696,sb__4661__auto__,_STAR_compiler_STAR__orig_val__23309_23692,_STAR_compiler_STAR__temp_val__23310_23693,env__10537__auto___23690,env__10537__auto___23691__$1,ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23311_23694,_STAR_print_fn_STAR__orig_val__23312_23695,_STAR_print_newline_STAR__temp_val__23313_23696,sb__4661__auto__,_STAR_compiler_STAR__orig_val__23309_23692,_STAR_compiler_STAR__temp_val__23310_23693,env__10537__auto___23690,env__10537__auto___23691__$1,ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23313_23696;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23314_23697;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23312_23695;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23311_23694;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__23309_23692;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__23219,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath(name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e23336){var cause = e23336;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__23175,_STAR_eval_fn_STAR__orig_val__23176,_STAR_cljs_ns_STAR__orig_val__23177,_STAR_checked_arrays_STAR__orig_val__23178,_STAR_cljs_static_fns_STAR__orig_val__23179,_STAR_fn_invoke_direct_STAR__orig_val__23180,_STAR_ns_STAR__orig_val__23181,_STAR_alias_map_STAR__orig_val__23182,_STAR_data_readers_STAR__orig_val__23183,resolve_symbol_orig_val__23184,_STAR_source_map_data_STAR__orig_val__23185,_STAR_cljs_file_STAR__orig_val__23186,_STAR_compiler_STAR__temp_val__23187,_STAR_eval_fn_STAR__temp_val__23188,_STAR_cljs_ns_STAR__temp_val__23189,_STAR_checked_arrays_STAR__temp_val__23190,_STAR_cljs_static_fns_STAR__temp_val__23191,_STAR_fn_invoke_direct_STAR__temp_val__23192,_STAR_ns_STAR__temp_val__23193,_STAR_alias_map_STAR__temp_val__23194,_STAR_data_readers_STAR__temp_val__23195,resolve_symbol_temp_val__23196,_STAR_source_map_data_STAR__temp_val__23197,_STAR_cljs_file_STAR__temp_val__23198,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5733__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
var fexpr__23349 = cljs.js.trampoline_safe(f);
return (fexpr__23349.cljs$core$IFn$_invoke$arity$2 ? fexpr__23349.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__23349.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__23186;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__23185;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__23184;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__23183;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__23182;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__23181;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__23180;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__23179;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__23178;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__23177;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__23176;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__23175;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)], 0));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__23378 = arguments.length;
switch (G__23378) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){





return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_((0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_(cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.js.fn_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(cljs.js.fn_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
cljs.js.fn_refs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.js.fn_refs.cljs$core$IDeref$_deref$arity$1(null),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.js.get_fn(",cljs.js.put_fn(f),")"], 0));
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Function,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Var,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__23422 = arguments.length;
switch (G__23422) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2(form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var st_23721 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_23721,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_23721,result){
return (function (p__23430){
var map__23431 = p__23430;
var map__23431__$1 = (((((!((map__23431 == null))))?(((((map__23431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23431):map__23431);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23431__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23431__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
});})(st_23721,result))
);

return cljs.core.deref(result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;
