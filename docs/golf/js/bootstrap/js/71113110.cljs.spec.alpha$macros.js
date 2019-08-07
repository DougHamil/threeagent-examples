goog.provide('cljs.spec.alpha$macros');
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha$macros !== 'undefined') && (typeof cljs.spec.alpha$macros.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha$macros.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha$macros.__GT_sym = (function cljs$spec$alpha$macros$__GT_sym(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
cljs.spec.alpha$macros.unfn = (function cljs$spec$alpha$macros$unfn(expr){
if(((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr)))))){
var vec__20762 = cljs.core.rest(expr);
var seq__20763 = cljs.core.seq(vec__20762);
var first__20764 = cljs.core.first(seq__20763);
var seq__20763__$1 = cljs.core.next(seq__20763);
var vec__20766 = first__20764;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20766,(0),null);
var form = seq__20763__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",-950237169,null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)], 0));
} else {
return expr;
}
});
cljs.spec.alpha$macros.res = (function cljs$spec$alpha$macros$res(env,form){
if((form instanceof cljs.core.Keyword)){
return form;
} else {
if((form instanceof cljs.core.Symbol)){
var resolved = (function (){var or__4131__auto__ = cljs.spec.alpha$macros.__GT_sym(cljs.analyzer.api.resolve(env,form));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return form;
}
})();
var ns_name = cljs.core.namespace(resolved);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4120__auto__ = ns_name;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.ends_with_QMARK_(ns_name,"$macros");
} else {
return and__4120__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7))):ns_name),cljs.core.name(resolved));
} else {
if(cljs.core.sequential_QMARK_(form)){
return clojure.walk.postwalk((function (p1__20776_SHARP_){
if((p1__20776_SHARP_ instanceof cljs.core.Symbol)){
return (cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2(env,p1__20776_SHARP_) : cljs.spec.alpha$macros.res.call(null,env,p1__20776_SHARP_));
} else {
return p1__20776_SHARP_;
}
}),cljs.spec.alpha$macros.unfn(form));
} else {
return form;

}
}
}
});
var ret__4776__auto___21413 = /**
 * a compile time res, for use in cljs/spec/alpha.cljs
 */
cljs.spec.alpha$macros.mres = (function cljs$spec$alpha$macros$mres(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,form);
});
cljs.spec.alpha$macros.mres.cljs$lang$macro = true;

/**
 * Qualify symbol s by resolving it or using the current *ns*.
 */
cljs.spec.alpha$macros.ns_qualify = (function cljs$spec$alpha$macros$ns_qualify(env,s){
if(cljs.core.truth_(cljs.core.namespace(s))){
return cljs.spec.alpha$macros.__GT_sym((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__20788 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__20789 = true;
cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__20789;

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,s);
}finally {cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__20788;
}})());
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}
});
var ret__4776__auto___21415 = /**
 * Given a namespace-qualified keyword or resolveable symbol k, and a
 *   spec, spec-name, predicate or regex-op makes an entry in the
 *   registry mapping k to the spec. Use nil to remove an entry in
 *   the registry for k.
 */
cljs.spec.alpha$macros.def = (function cljs$spec$alpha$macros$def(_AMPERSAND_form,_AMPERSAND_env,k,spec_form){
var k__$1 = (((k instanceof cljs.core.Symbol))?cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,k):k);
var form = cljs.spec.alpha$macros.res(_AMPERSAND_env,spec_form);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha$macros.registry_ref,((function (k__$1,form){
return (function (r){
if((form == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,k__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k__$1,form);
}
});})(k__$1,form))
);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","def-impl","cljs.spec.alpha/def-impl",-940040760,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,spec_form,null,(1),null))], 0))));
});
cljs.spec.alpha$macros.def.cljs$lang$macro = true;

var ret__4776__auto___21420 = (function (){
/**
 * Takes a single predicate form, e.g. can be the name of a predicate,
 *   like even?, or a fn literal like #(< % 42). Note that it is not
 *   generally necessary to wrap predicates in spec when using the rest
 *   of the spec macros, only to attach a unique generator
 * 
 *   Can also be passed the result of one of the regex ops -
 *   cat, alt, *, +, ?, in which case it will return a regex-conforming
 *   spec, useful when nesting an independent regex.
 *   ---
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 * 
 *   Returns a spec.
 */
cljs.spec.alpha$macros.spec = (function cljs$spec$alpha$macros$spec(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21421 = arguments.length;
var i__4731__auto___21422 = (0);
while(true){
if((i__4731__auto___21422 < len__4730__auto___21421)){
args__4736__auto__.push((arguments[i__4731__auto___21422]));

var G__21423 = (i__4731__auto___21422 + (1));
i__4731__auto___21422 = G__21423;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,p__20806){
var map__20807 = p__20806;
var map__20807__$1 = (((((!((map__20807 == null))))?(((((map__20807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20807):map__20807);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20807__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
if(cljs.core.truth_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return null;
}
});

cljs.spec.alpha$macros.spec.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec.alpha$macros.spec.cljs$lang$applyTo = (function (seq20796){
var G__20797 = cljs.core.first(seq20796);
var seq20796__$1 = cljs.core.next(seq20796);
var G__20798 = cljs.core.first(seq20796__$1);
var seq20796__$2 = cljs.core.next(seq20796__$1);
var G__20799 = cljs.core.first(seq20796__$2);
var seq20796__$3 = cljs.core.next(seq20796__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20797,G__20798,G__20799,seq20796__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.spec.cljs$lang$macro = true;

var ret__4776__auto___21431 = /**
 * Takes the name of a spec/predicate-returning multimethod and a
 *   tag-restoring keyword or fn (retag).  Returns a spec that when
 *   conforming or explaining data will pass it to the multimethod to get
 *   an appropriate spec. You can e.g. use multi-spec to dynamically and
 *   extensibly associate specs with 'tagged' data (i.e. data where one
 *   of the fields indicates the shape of the rest of the structure).
 * 
 *   (defmulti mspec :tag)
 * 
 *   The methods should ignore their argument and return a predicate/spec:
 *   (defmethod mspec :int [_] (s/keys :req-un [::tag ::i]))
 * 
 *   retag is used during generation to retag generated values with
 *   matching tags. retag can either be a keyword, at which key the
 *   dispatch-tag will be assoc'ed, or a fn of generated value and
 *   dispatch-tag that should return an appropriately retagged value.
 * 
 *   Note that because the tags themselves comprise an open set,
 *   the tag key spec cannot enumerate the values, but can e.g.
 *   test for keyword?.
 * 
 *   Note also that the dispatch values of the multimethod will be
 *   included in the path, i.e. in reporting and gen overrides, even
 *   though those values are not evident in the spec.
 */
cljs.spec.alpha$macros.multi_spec = (function cljs$spec$alpha$macros$multi_spec(_AMPERSAND_form,_AMPERSAND_env,mm,retag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec-impl","cljs.spec.alpha/multi-spec-impl",-1581100244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,mm),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,mm,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,retag,null,(1),null))], 0))));
});
cljs.spec.alpha$macros.multi_spec.cljs$lang$macro = true;

var ret__4776__auto___21437 = (function (){
/**
 * Creates and returns a map validating spec. :req and :opt are both
 *   vectors of namespaced-qualified keywords. The validator will ensure
 *   the :req keys are present. The :opt keys serve as documentation and
 *   may be used by the generator.
 * 
 *   The :req key vector supports 'and' and 'or' for key groups:
 * 
 *   (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])
 * 
 *   There are also -un versions of :req and :opt. These allow
 *   you to connect unqualified keys to specs.  In each case, fully
 *   qualfied keywords are passed, which name the specs, but unqualified
 *   keys (with the same name component) are expected and checked at
 *   conform-time, and generated during gen:
 * 
 *   (s/keys :req-un [:my.ns/x :my.ns/y])
 * 
 *   The above says keys :x and :y are required, and will be validated
 *   and generated by specs (if they exist) named :my.ns/x :my.ns/y
 *   respectively.
 * 
 *   In addition, the values of *all* namespace-qualified keys will be validated
 *   (and possibly destructured) by any registered specs. Note: there is
 *   no support for inline value specification, by design.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 */
cljs.spec.alpha$macros.keys = (function cljs$spec$alpha$macros$keys(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21438 = arguments.length;
var i__4731__auto___21439 = (0);
while(true){
if((i__4731__auto___21439 < len__4730__auto___21438)){
args__4736__auto__.push((arguments[i__4731__auto___21439]));

var G__21440 = (i__4731__auto___21439 + (1));
i__4731__auto___21439 = G__21440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20834){
var map__20836 = p__20834;
var map__20836__$1 = (((((!((map__20836 == null))))?(((((map__20836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20836):map__20836);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var unk = ((function (map__20836,map__20836__$1,req,req_un,opt,opt_un,gen){
return (function (p1__20819_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__20819_SHARP_));
});})(map__20836,map__20836__$1,req,req_un,opt,opt_un,gen))
;
var req_keys = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req));
var req_un_specs = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req_un));
var _ = null;
var req_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,req_un_specs);
var req_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,req_un_specs));
var opt_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,opt_un));
var opt_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),opt_un);
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parse_req = ((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen){
return (function (rk,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen){
return (function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),null,(1),null))], 0))));
} else {
return clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen){
return (function (y){
if((y instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y)),null,(1),null))], 0))));
} else {
return y;
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen))
,x);
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen))
,rk);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen))
;
var pred_exprs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))))], null);
var pred_exprs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs,parse_req(req,cljs.core.identity));
var pred_exprs__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs__$1,parse_req(req_un,unk));
var keys_pred = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),pred_exprs__$2))),null,(1),null))], 0))));
var pred_exprs__$3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen){
return (function (e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$2);
var pred_forms = clojure.walk.postwalk(((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen){
return (function (p1__20821_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__20821_SHARP_);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__20836,map__20836__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$3);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-spec-impl","cljs.spec.alpha/map-spec-impl",1965627085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"req-un","req-un",1074571008),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_un,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_un,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"gfn","gfn",791517474),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),null,(1),null)),(new cljs.core.List(null,pred_exprs__$3,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),null,(1),null)),(new cljs.core.List(null,keys_pred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_keys,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-specs","req-specs",553962313),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_specs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req","req",-326448303),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-keys","req-keys",514319221),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_keys__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_specs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt","opt",-794706369),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)))));
});

cljs.spec.alpha$macros.keys.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.keys.cljs$lang$applyTo = (function (seq20823){
var G__20824 = cljs.core.first(seq20823);
var seq20823__$1 = cljs.core.next(seq20823);
var G__20827 = cljs.core.first(seq20823__$1);
var seq20823__$2 = cljs.core.next(seq20823__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20824,G__20827,seq20823__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.keys.cljs$lang$macro = true;

var ret__4776__auto___21454 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/or :even even? :small #(< % 42))
 * 
 *   Returns a destructuring spec that returns a map entry containing the
 *   key of the first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.or = (function cljs$spec$alpha$macros$or(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21455 = arguments.length;
var i__4731__auto___21456 = (0);
while(true){
if((i__4731__auto___21456 < len__4730__auto___21455)){
args__4736__auto__.push((arguments[i__4731__auto___21456]));

var G__21457 = (i__4731__auto___21456 + (1));
i__4731__auto___21456 = G__21457;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__20889_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__20889_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or-spec-impl","cljs.spec.alpha/or-spec-impl",174083152,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.or.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.or.cljs$lang$applyTo = (function (seq20892){
var G__20893 = cljs.core.first(seq20892);
var seq20892__$1 = cljs.core.next(seq20892);
var G__20894 = cljs.core.first(seq20892__$1);
var seq20892__$2 = cljs.core.next(seq20892__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20893,G__20894,seq20892__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.or.cljs$lang$macro = true;

var ret__4776__auto___21463 = (function (){
/**
 * Takes predicate/spec-forms, e.g.
 * 
 *   (s/and even? #(< % 42))
 * 
 *   Returns a spec that returns the conformed value. Successive
 *   conformed values propagate through rest of predicates.
 */
cljs.spec.alpha$macros.and = (function cljs$spec$alpha$macros$and(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21464 = arguments.length;
var i__4731__auto___21466 = (0);
while(true){
if((i__4731__auto___21466 < len__4730__auto___21464)){
args__4736__auto__.push((arguments[i__4731__auto___21466]));

var G__21470 = (i__4731__auto___21466 + (1));
i__4731__auto___21466 = G__21470;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and-spec-impl","cljs.spec.alpha/and-spec-impl",-492178340,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20905_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__20905_SHARP_);
}),pred_forms),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.and.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.and.cljs$lang$applyTo = (function (seq20906){
var G__20907 = cljs.core.first(seq20906);
var seq20906__$1 = cljs.core.next(seq20906);
var G__20908 = cljs.core.first(seq20906__$1);
var seq20906__$2 = cljs.core.next(seq20906__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20907,G__20908,seq20906__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.and.cljs$lang$macro = true;

cljs.spec.alpha$macros.res_kind = (function cljs$spec$alpha$macros$res_kind(env,opts){
var map__20918 = opts;
var map__20918__$1 = (((((!((map__20918 == null))))?(((((map__20918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20918):map__20918);
var mopts = map__20918__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(kind)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mopts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.spec.alpha$macros.res(env,kind)):mopts)], 0));
});
var ret__4776__auto___21471 = (function (){
/**
 * takes a pred and validates collection elements against that pred.
 * 
 *   Note that 'every' does not do exhaustive checking, rather it samples
 *   *coll-check-limit* elements. Nor (as a result) does it do any
 *   conforming of elements. 'explain' will report at most *coll-error-limit*
 *   problems.  Thus 'every' should be suitable for potentially large
 *   collections.
 * 
 *   Takes several kwargs options that further constrain the collection:
 * 
 *   :kind - a pred that the collection type must satisfy, e.g. vector?
 *        (default nil) Note that if :kind is specified and :into is
 *        not, this pred must generate in order for every to generate.
 *   :count - specifies coll has exactly this count (default nil)
 *   :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)
 *   :distinct - all the elements are distinct (default nil)
 * 
 *   And additional args that control gen
 * 
 *   :gen-max - the maximum coll size to generate (default 20)
 *   :into - one of [], (), {}, #{} - the default collection to generate into
 *    (default same as :kind if supplied, else []
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator
 * 
 *   See also - coll-of, every-kv
 */
cljs.spec.alpha$macros.every = (function cljs$spec$alpha$macros$every(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21472 = arguments.length;
var i__4731__auto___21477 = (0);
while(true){
if((i__4731__auto___21477 < len__4730__auto___21472)){
args__4736__auto__.push((arguments[i__4731__auto___21477]));

var G__21478 = (i__4731__auto___21477 + (1));
i__4731__auto___21477 = G__21478;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,p__20952){
var map__20953 = p__20952;
var map__20953__$1 = (((((!((map__20953 == null))))?(((((map__20953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20953):map__20953);
var opts = map__20953__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445));
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var desc = new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911).cljs$core$IFn$_invoke$arity$1(opts);
var nopts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)], 0)),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opts)),null,(1),null))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),(function (){var or__4131__auto__ = desc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)))),null,(1),null)))));
}
})()], 0));
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cpreds = (function (){var G__20963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,(function (){var or__4131__auto__ = kind;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})(),(new cljs.core.List(null,gx,null,(1),null)),(2),null))], null);
var G__20963__$1 = (cljs.core.truth_(count)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20963,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",355256728,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null))], 0))))):G__20963);
var G__20963__$2 = (cljs.core.truth_((function (){var or__4131__auto__ = min_count;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return max_count;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20963__$1,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",355256728,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","MAX_INT","cljs.spec.alpha/MAX_INT",1315428963,null),null,(1),null))], 0)))),null,(1),null))], 0))))):G__20963__$1);
if(cljs.core.truth_(distinct)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20963__$2,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","distinct?","cljs.core/distinct?",-1285807788,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null))], 0)))));
} else {
return G__20963__$2;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-impl","cljs.spec.alpha/every-impl",30419907,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nopts,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cpreds))),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.every.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec.alpha$macros.every.cljs$lang$applyTo = (function (seq20937){
var G__20938 = cljs.core.first(seq20937);
var seq20937__$1 = cljs.core.next(seq20937);
var G__20939 = cljs.core.first(seq20937__$1);
var seq20937__$2 = cljs.core.next(seq20937__$1);
var G__20940 = cljs.core.first(seq20937__$2);
var seq20937__$3 = cljs.core.next(seq20937__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20938,G__20939,G__20940,seq20937__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.every.cljs$lang$macro = true;

var ret__4776__auto___21516 = (function (){
/**
 * like 'every' but takes separate key and val preds and works on associative collections.
 * 
 *   Same options as 'every', :into defaults to {}
 * 
 *   See also - map-of
 */
cljs.spec.alpha$macros.every_kv = (function cljs$spec$alpha$macros$every_kv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21517 = arguments.length;
var i__4731__auto___21522 = (0);
while(true){
if((i__4731__auto___21522 < len__4730__auto___21517)){
args__4736__auto__.push((arguments[i__4731__auto___21522]));

var G__21523 = (i__4731__auto___21522 + (1));
i__4731__auto___21522 = G__21523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",-133428374,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred),null,(1),null)),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,vpred,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"i__20980__auto__","i__20980__auto__",-2030891369,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__20981__auto__","v__20981__auto__",-464630290,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__20981__auto__","v__20981__auto__",-464630290,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"into","into",-150836029),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
});

cljs.spec.alpha$macros.every_kv.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.spec.alpha$macros.every_kv.cljs$lang$applyTo = (function (seq20986){
var G__20987 = cljs.core.first(seq20986);
var seq20986__$1 = cljs.core.next(seq20986);
var G__20988 = cljs.core.first(seq20986__$1);
var seq20986__$2 = cljs.core.next(seq20986__$1);
var G__20989 = cljs.core.first(seq20986__$2);
var seq20986__$3 = cljs.core.next(seq20986__$2);
var G__20990 = cljs.core.first(seq20986__$3);
var seq20986__$4 = cljs.core.next(seq20986__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20987,G__20988,G__20989,G__20990,seq20986__$4);
});

return null;
})()
;
cljs.spec.alpha$macros.every_kv.cljs$lang$macro = true;

var ret__4776__auto___21539 = (function (){
/**
 * Returns a spec for a collection of items satisfying pred. Unlike
 *   generator will fill an empty init-coll.
 * 
 *   Same options as 'every'. conform will produce a collection
 *   corresponding to :into if supplied, else will match the input collection,
 *   avoiding rebuilding when possible.
 * 
 *   Same options as 'every'.
 * 
 *   See also - every, map-of
 */
cljs.spec.alpha$macros.coll_of = (function cljs$spec$alpha$macros$coll_of(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21540 = arguments.length;
var i__4731__auto___21541 = (0);
while(true){
if((i__4731__auto___21541 < len__4730__auto___21540)){
args__4736__auto__.push((arguments[i__4731__auto___21541]));

var G__21542 = (i__4731__auto___21541 + (1));
i__4731__auto___21541 = G__21542;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
});

cljs.spec.alpha$macros.coll_of.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec.alpha$macros.coll_of.cljs$lang$applyTo = (function (seq21016){
var G__21017 = cljs.core.first(seq21016);
var seq21016__$1 = cljs.core.next(seq21016);
var G__21019 = cljs.core.first(seq21016__$1);
var seq21016__$2 = cljs.core.next(seq21016__$1);
var G__21020 = cljs.core.first(seq21016__$2);
var seq21016__$3 = cljs.core.next(seq21016__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21017,G__21019,G__21020,seq21016__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.coll_of.cljs$lang$macro = true;

var ret__4776__auto___21547 = (function (){
/**
 * Returns a spec for a map whose keys satisfy kpred and vals satisfy
 *   vpred. Unlike 'every-kv', map-of will exhaustively conform every
 *   value.
 * 
 *   Same options as 'every', :kind defaults to map?, with the addition of:
 * 
 *   :conform-keys - conform keys as well as values (default false)
 * 
 *   See also - every-kv
 */
cljs.spec.alpha$macros.map_of = (function cljs$spec$alpha$macros$map_of(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21548 = arguments.length;
var i__4731__auto___21549 = (0);
while(true){
if((i__4731__auto___21549 < len__4730__auto___21548)){
args__4736__auto__.push((arguments[i__4731__auto___21549]));

var G__21552 = (i__4731__auto___21549 + (1));
i__4731__auto___21549 = G__21552;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred),null,(1),null)),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",-133428374,null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,vpred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
});

cljs.spec.alpha$macros.map_of.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.spec.alpha$macros.map_of.cljs$lang$applyTo = (function (seq21033){
var G__21034 = cljs.core.first(seq21033);
var seq21033__$1 = cljs.core.next(seq21033);
var G__21035 = cljs.core.first(seq21033__$1);
var seq21033__$2 = cljs.core.next(seq21033__$1);
var G__21036 = cljs.core.first(seq21033__$2);
var seq21033__$3 = cljs.core.next(seq21033__$2);
var G__21037 = cljs.core.first(seq21033__$3);
var seq21033__$4 = cljs.core.next(seq21033__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21034,G__21035,G__21036,G__21037,seq21033__$4);
});

return null;
})()
;
cljs.spec.alpha$macros.map_of.cljs$lang$macro = true;

var ret__4776__auto___21559 = /**
 * Returns a regex op that matches zero or more values matching
 *   pred. Produces a vector of matches iff there is at least one match
 */
cljs.spec.alpha$macros._STAR_ = (function cljs$spec$alpha$macros$_STAR_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","rep-impl","cljs.spec.alpha/rep-impl",272857093,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_form,null,(1),null))], 0))));
});
cljs.spec.alpha$macros._STAR_.cljs$lang$macro = true;

var ret__4776__auto___21564 = /**
 * Returns a regex op that matches one or more values matching
 *   pred. Produces a vector of matches
 */
cljs.spec.alpha$macros._PLUS_ = (function cljs$spec$alpha$macros$_PLUS_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","rep+impl","cljs.spec.alpha/rep+impl",1883292654,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_form,null,(1),null))], 0))));
});
cljs.spec.alpha$macros._PLUS_.cljs$lang$macro = true;

var ret__4776__auto___21567 = /**
 * Returns a regex op that matches zero or one value matching
 *   pred. Produces a single value (not a collection) if matched.
 */
cljs.spec.alpha$macros._QMARK_ = (function cljs$spec$alpha$macros$_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","maybe-impl","cljs.spec.alpha/maybe-impl",1618854020,null),null,(1),null)),(new cljs.core.List(null,pred_form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null))], 0))));
});
cljs.spec.alpha$macros._QMARK_.cljs$lang$macro = true;

var ret__4776__auto___21570 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/alt :even even? :small #(< % 42))
 * 
 *   Returns a regex op that returns a map entry containing the key of the
 *   first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.alt = (function cljs$spec$alpha$macros$alt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21571 = arguments.length;
var i__4731__auto___21572 = (0);
while(true){
if((i__4731__auto___21572 < len__4730__auto___21571)){
args__4736__auto__.push((arguments[i__4731__auto___21572]));

var G__21573 = (i__4731__auto___21572 + (1));
i__4731__auto___21572 = G__21573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__21076_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__21076_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","alt-impl","cljs.spec.alpha/alt-impl",1852741609,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.alt.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.alt.cljs$lang$applyTo = (function (seq21080){
var G__21081 = cljs.core.first(seq21080);
var seq21080__$1 = cljs.core.next(seq21080);
var G__21082 = cljs.core.first(seq21080__$1);
var seq21080__$2 = cljs.core.next(seq21080__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21081,G__21082,seq21080__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.alt.cljs$lang$macro = true;

var ret__4776__auto___21578 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/cat :e even? :o odd?)
 * 
 *   Returns a regex op that matches (all) values in sequence, returning a map
 *   containing the keys of each pred and the corresponding value.
 */
cljs.spec.alpha$macros.cat = (function cljs$spec$alpha$macros$cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21579 = arguments.length;
var i__4731__auto___21580 = (0);
while(true){
if((i__4731__auto___21580 < len__4730__auto___21579)){
args__4736__auto__.push((arguments[i__4731__auto___21580]));

var G__21581 = (i__4731__auto___21580 + (1));
i__4731__auto___21580 = G__21581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pairs,keys,pred_forms){
return (function (p1__21093_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__21093_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","cat-impl","cljs.spec.alpha/cat-impl",1256350867,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.cat.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.cat.cljs$lang$applyTo = (function (seq21094){
var G__21095 = cljs.core.first(seq21094);
var seq21094__$1 = cljs.core.next(seq21094);
var G__21096 = cljs.core.first(seq21094__$1);
var seq21094__$2 = cljs.core.next(seq21094__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21095,G__21096,seq21094__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.cat.cljs$lang$macro = true;

var ret__4776__auto___21585 = (function (){
/**
 * takes a regex op re, and predicates. Returns a regex-op that consumes
 *   input as per re but subjects the resulting value to the
 *   conjunction of the predicates, and any conforming they might perform.
 */
cljs.spec.alpha$macros._AMPERSAND_ = (function cljs$spec$alpha$macros$_AMPERSAND_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21586 = arguments.length;
var i__4731__auto___21587 = (0);
while(true){
if((i__4731__auto___21587 < len__4730__auto___21586)){
args__4736__auto__.push((arguments[i__4731__auto___21587]));

var G__21590 = (i__4731__auto___21587 + (1));
i__4731__auto___21587 = G__21590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,re,preds){
var pv = cljs.core.vec(preds);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","amp-impl","cljs.spec.alpha/amp-impl",1419577313,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,re),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,pv,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (pv){
return (function (p1__21105_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__21105_SHARP_);
});})(pv))
,pv),null,(1),null))))),null,(1),null))], 0))));
});

cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$applyTo = (function (seq21107){
var G__21108 = cljs.core.first(seq21107);
var seq21107__$1 = cljs.core.next(seq21107);
var G__21109 = cljs.core.first(seq21107__$1);
var seq21107__$2 = cljs.core.next(seq21107__$1);
var G__21110 = cljs.core.first(seq21107__$2);
var seq21107__$3 = cljs.core.next(seq21107__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21108,G__21109,G__21110,seq21107__$3);
});

return null;
})()
;
cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$macro = true;

var ret__4776__auto___21600 = (function (){
/**
 * takes a predicate function with the semantics of conform i.e. it should return either a
 *   (possibly converted) value or :cljs.spec.alpha/invalid, and returns a
 *   spec that uses it as a predicate/conformer. Optionally takes a
 *   second fn that does unform of result of first
 */
cljs.spec.alpha$macros.conformer = (function cljs$spec$alpha$macros$conformer(var_args){
var G__21117 = arguments.length;
switch (G__21117) {
case 3:
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,f),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,unf){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,f),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,unf),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,unf,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.conformer.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.spec.alpha$macros.conformer.cljs$lang$macro = true;

var ret__4776__auto___21609 = (function (){
/**
 * takes :args :ret and (optional) :fn kwargs whose values are preds
 *   and returns a spec whose conform/explain take a fn and validates it
 *   using generative testing. The conformed value is always the fn itself.
 * 
 *   See 'fdef' for a single operation that creates an fspec and
 *   registers it, as well as a full description of :args, :ret and :fn
 * 
 *   fspecs can generate functions that validate the arguments and
 *   fabricate a return value compliant with the :ret spec, ignoring
 *   the :fn spec if present.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args
 *   that returns a test.check generator.
 */
cljs.spec.alpha$macros.fspec = (function cljs$spec$alpha$macros$fspec(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21610 = arguments.length;
var i__4731__auto___21611 = (0);
while(true){
if((i__4731__auto___21611 < len__4730__auto___21610)){
args__4736__auto__.push((arguments[i__4731__auto___21611]));

var G__21612 = (i__4731__auto___21611 + (1));
i__4731__auto___21611 = G__21612;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21129){
var map__21133 = p__21129;
var map__21133__$1 = (((((!((map__21133 == null))))?(((((map__21133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21133):map__21133);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21133__$1,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var env = _AMPERSAND_env;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec-impl","cljs.spec.alpha/fspec-impl",-1748020611,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,args),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,ret),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,fn,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,fn),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.fspec.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.fspec.cljs$lang$applyTo = (function (seq21126){
var G__21127 = cljs.core.first(seq21126);
var seq21126__$1 = cljs.core.next(seq21126);
var G__21128 = cljs.core.first(seq21126__$1);
var seq21126__$2 = cljs.core.next(seq21126__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21127,G__21128,seq21126__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.fspec.cljs$lang$macro = true;

var ret__4776__auto___21622 = (function (){
/**
 * takes one or more preds and returns a spec for a tuple, a vector
 *   where each element conforms to the corresponding pred. Each element
 *   will be referred to in paths using its ordinal.
 */
cljs.spec.alpha$macros.tuple = (function cljs$spec$alpha$macros$tuple(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21623 = arguments.length;
var i__4731__auto___21624 = (0);
while(true){
if((i__4731__auto___21624 < len__4730__auto___21623)){
args__4736__auto__.push((arguments[i__4731__auto___21624]));

var G__21625 = (i__4731__auto___21624 + (1));
i__4731__auto___21624 = G__21625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,preds){

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple-impl","cljs.spec.alpha/tuple-impl",113790282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21152_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__21152_SHARP_);
}),preds),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(preds),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.tuple.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.tuple.cljs$lang$applyTo = (function (seq21157){
var G__21158 = cljs.core.first(seq21157);
var seq21157__$1 = cljs.core.next(seq21157);
var G__21159 = cljs.core.first(seq21157__$1);
var seq21157__$2 = cljs.core.next(seq21157__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21158,G__21159,seq21157__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.tuple.cljs$lang$macro = true;

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha$macros !== 'undefined') && (typeof cljs.spec.alpha$macros._speced_vars !== 'undefined')){
} else {
cljs.spec.alpha$macros._speced_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
cljs.spec.alpha$macros.speced_vars = (function cljs$spec$alpha$macros$speced_vars(){
return cljs.core.deref(cljs.spec.alpha$macros._speced_vars);
});
var ret__4776__auto___21630 = (function (){
/**
 * Takes a symbol naming a function, and one or more of the following:
 * 
 *   :args A regex spec for the function arguments as they were a list to be
 *  passed to apply - in this way, a single spec can handle functions with
 *  multiple arities
 *   :ret A spec for the function's return value
 *   :fn A spec of the relationship between args and ret - the
 *  value passed is {:args conformed-args :ret conformed-ret} and is
 *  expected to contain predicates that relate those values
 * 
 *   Qualifies fn-sym with resolve, or using *ns* if no resolution found.
 *   Registers an fspec in the global registry, where it can be retrieved
 *   by calling get-spec with the var or fully-qualified symbol.
 * 
 *   Once registered, function specs are included in doc, checked by
 *   instrument, tested by the runner cljs.spec.test.alpha/check, and (if
 *   a macro) used to explain errors during macroexpansion.
 * 
 *   Note that :fn specs require the presence of :args and :ret specs to
 *   conform values, and so :fn specs will be ignored if :args or :ret
 *   are missing.
 * 
 *   Returns the qualified fn-sym.
 * 
 *   For example, to register function specs for the symbol function:
 * 
 *   (s/fdef cljs.core/symbol
 *  :args (s/alt :separate (s/cat :ns string? :n string?)
 *               :str string?
 *               :sym symbol?)
 *  :ret symbol?)
 */
cljs.spec.alpha$macros.fdef = (function cljs$spec$alpha$macros$fdef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21631 = arguments.length;
var i__4731__auto___21632 = (0);
while(true){
if((i__4731__auto___21632 < len__4730__auto___21631)){
args__4736__auto__.push((arguments[i__4731__auto___21632]));

var G__21633 = (i__4731__auto___21632 + (1));
i__4731__auto___21632 = G__21633;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fn_sym,specs){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha$macros._speced_vars,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,fn_sym),cljs.core.assoc,new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","def","cljs.spec.alpha/def",1122970404,null),null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),specs))),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.fdef.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec.alpha$macros.fdef.cljs$lang$applyTo = (function (seq21178){
var G__21179 = cljs.core.first(seq21178);
var seq21178__$1 = cljs.core.next(seq21178);
var G__21180 = cljs.core.first(seq21178__$1);
var seq21178__$2 = cljs.core.next(seq21178__$1);
var G__21181 = cljs.core.first(seq21178__$2);
var seq21178__$3 = cljs.core.next(seq21178__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21179,G__21180,G__21181,seq21178__$3);
});

return null;
})()
;
cljs.spec.alpha$macros.fdef.cljs$lang$macro = true;

var ret__4776__auto___21635 = (function (){
/**
 * takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,
 *   converts them into a map, and conforms that map with a corresponding
 *   spec/keys call:
 * 
 *   user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})
 *   {:a 1, :c 2}
 *   user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])
 *   {:a 1, :c 2}
 * 
 *   the resulting regex op can be composed into a larger regex:
 * 
 *   user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])
 *   {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}
 */
cljs.spec.alpha$macros.keys_STAR_ = (function cljs$spec$alpha$macros$keys_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21636 = arguments.length;
var i__4731__auto___21637 = (0);
while(true){
if((i__4731__auto___21637 < len__4730__auto___21636)){
args__4736__auto__.push((arguments[i__4731__auto___21637]));

var G__21638 = (i__4731__auto___21637 + (1));
i__4731__auto___21637 = G__21638;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kspecs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__21194__auto__","mspec__21194__auto__",-2088061525,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),null,(1),null)),kspecs))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__21194__auto__","mspec__21194__auto__",-2088061525,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",1863255061,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m__21195__auto__","m__21195__auto__",549924648,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__21195__auto__","m__21195__auto__",549924648,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__21194__auto__","mspec__21194__auto__",-2088061525,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.keys_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.keys_STAR_.cljs$lang$applyTo = (function (seq21196){
var G__21197 = cljs.core.first(seq21196);
var seq21196__$1 = cljs.core.next(seq21196);
var G__21198 = cljs.core.first(seq21196__$1);
var seq21196__$2 = cljs.core.next(seq21196__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21197,G__21198,seq21196__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.keys_STAR_.cljs$lang$macro = true;

var ret__4776__auto___21643 = /**
 * returns a spec that accepts nil and values satisfiying pred
 */
cljs.spec.alpha$macros.nilable = (function cljs$spec$alpha$macros$nilable(_AMPERSAND_form,_AMPERSAND_env,pred){
var pf = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable-impl","cljs.spec.alpha/nilable-impl",1785777257,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
});
cljs.spec.alpha$macros.nilable.cljs$lang$macro = true;

var ret__4776__auto___21646 = /**
 * Returns a spec that validates insts in the range from start
 *   (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.inst_in = (function cljs$spec$alpha$macros$inst_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"st__21217__auto__","st__21217__auto__",1303548755,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",-515575156,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"et__21218__auto__","et__21218__auto__",-1439933295,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",-515575156,null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__21219__auto__","mkdate__21219__auto__",1056177550,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"d__21220__auto__","d__21220__auto__",-644799615,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"d__21220__auto__","d__21220__auto__",-644799615,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",1216133710,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21216__21221__auto__","p1__21216__21221__auto__",1767896598,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","inst-in-range?","cljs.spec.alpha/inst-in-range?",-1154968958,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21216__21221__auto__","p1__21216__21221__auto__",1767896598,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",1863255061,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__21219__auto__","mkdate__21219__auto__",1056177550,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",-227289663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__21217__auto__","st__21217__auto__",1303548755,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"et__21218__auto__","et__21218__auto__",-1439933295,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
cljs.spec.alpha$macros.inst_in.cljs$lang$macro = true;

var ret__4776__auto___21661 = /**
 * Returns a spec that validates fixed precision integers in the
 *   range from start (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.int_in = (function cljs$spec$alpha$macros$int_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21242__21243__auto__","p1__21242__21243__auto__",-1582317077,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","int-in-range?","cljs.spec.alpha/int-in-range?",92650900,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21242__21243__auto__","p1__21242__21243__auto__",-1582317077,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",-227289663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
cljs.spec.alpha$macros.int_in.cljs$lang$macro = true;

var ret__4776__auto___21672 = (function (){
/**
 * Specs a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity allowed (default true)
 *  :NaN?      - whether NaN allowed (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 */
cljs.spec.alpha$macros.double_in = (function cljs$spec$alpha$macros$double_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21673 = arguments.length;
var i__4731__auto___21674 = (0);
while(true){
if((i__4731__auto___21674 < len__4730__auto___21673)){
args__4736__auto__.push((arguments[i__4731__auto___21674]));

var G__21675 = (i__4731__auto___21674 + (1));
i__4731__auto___21674 = G__21675;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__21272){
var map__21273 = p__21272;
var map__21273__$1 = (((((!((map__21273 == null))))?(((((map__21273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21273):map__21273);
var m = map__21273__$1;
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21273__$1,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21273__$1,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,new cljs.core.Keyword(null,"max","max",61366548));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(infinite_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21260#","p1__21260#",671123538,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"p1__21260#","p1__21260#",671123538,null))))], null)),(cljs.core.truth_(NaN_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21261#","p1__21261#",-1544542538,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","isNaN","js/isNaN",74901299,null),new cljs.core.Symbol(null,"p1__21261#","p1__21261#",-1544542538,null))))], null)),(cljs.core.truth_(max)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21262__21263__auto__","p1__21262__21263__auto__",789428295,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21262__21263__auto__","p1__21262__21263__auto__",789428295,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,max,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))):null),(cljs.core.truth_(min)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21264__21265__auto__","p1__21264__21265__auto__",-576228137,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,min,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21264__21265__auto__","p1__21264__21265__auto__",-576228137,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))):null)], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","double*","cljs.spec.gen.alpha/double*",416548942,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.double_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.double_in.cljs$lang$applyTo = (function (seq21268){
var G__21269 = cljs.core.first(seq21268);
var seq21268__$1 = cljs.core.next(seq21268);
var G__21271 = cljs.core.first(seq21268__$1);
var seq21268__$2 = cljs.core.next(seq21268__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21269,G__21271,seq21268__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.double_in.cljs$lang$macro = true;

var ret__4776__auto___21680 = (function (){
/**
 * Takes map-validating specs (e.g. 'keys' specs) and
 *   returns a spec that returns a conformed map satisfying all of the
 *   specs.  Successive conformed values propagate through rest of
 *   predicates. Unlike 'and', merge can generate maps satisfying the
 *   union of the predicates.
 */
cljs.spec.alpha$macros.merge = (function cljs$spec$alpha$macros$merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___21681 = arguments.length;
var i__4731__auto___21682 = (0);
while(true){
if((i__4731__auto___21682 < len__4730__auto___21681)){
args__4736__auto__.push((arguments[i__4731__auto___21682]));

var G__21687 = (i__4731__auto___21682 + (1));
i__4731__auto___21682 = G__21687;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge-spec-impl","cljs.spec.alpha/merge-spec-impl",-1254890813,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21327_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__21327_SHARP_);
}),pred_forms),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.merge.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.alpha$macros.merge.cljs$lang$applyTo = (function (seq21334){
var G__21336 = cljs.core.first(seq21334);
var seq21334__$1 = cljs.core.next(seq21334);
var G__21337 = cljs.core.first(seq21334__$1);
var seq21334__$2 = cljs.core.next(seq21334__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21336,G__21337,seq21334__$2);
});

return null;
})()
;
cljs.spec.alpha$macros.merge.cljs$lang$macro = true;

var ret__4776__auto___21692 = (function (){
/**
 * exercises the fn named by sym (a symbol) by applying it to
 *   n (default 10) generated samples of its args spec. When fspec is
 *   supplied its arg spec is used, and sym-or-f can be a fn.  Returns a
 *   sequence of tuples of [args ret]. 
 */
cljs.spec.alpha$macros.exercise_fn = (function cljs$spec$alpha$macros$exercise_fn(var_args){
var G__21363 = arguments.length;
switch (G__21363) {
case 3:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",295872941,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(10),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",295872941,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
});

cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n,fspec){
var sym__$1 = (function (){var G__21367 = sym;
if(((cljs.core.sequential_QMARK_(sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))))){
return cljs.core.second(G__21367);
} else {
return G__21367;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__21356__auto__","fspec__21356__auto__",-1927538761,null),null,(1),null)),(new cljs.core.List(null,((cljs.core.not(fspec))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","get-spec","cljs.spec.alpha/get-spec",785931985,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(_AMPERSAND_env,sym__$1)),null,(1),null))))),null,(1),null))))):fspec),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"f__21357__auto__","f__21357__auto__",-953204799,null),null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"arg-spec__21358__auto__","arg-spec__21358__auto__",302857719,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__21356__auto__","fspec__21356__auto__",-1927538761,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__21356__auto__","fspec__21356__auto__",-1927538761,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__21359__auto__","args__21359__auto__",-1619488785,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","sample","cljs.spec.gen.alpha/sample",-2084840585,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arg-spec__21358__auto__","arg-spec__21358__auto__",302857719,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__21359__auto__","args__21359__auto__",-1619488785,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__21357__auto__","f__21357__auto__",-953204799,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21359__auto__","args__21359__auto__",-1619488785,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"No :args spec found, can't generate",null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

cljs.spec.alpha$macros.exercise_fn.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.spec.alpha$macros.exercise_fn.cljs$lang$macro = true;

var ret__4776__auto___21718 = cljs.spec.alpha$macros.init_compile_asserts = (function cljs$spec$alpha$macros$init_compile_asserts(_AMPERSAND_form,_AMPERSAND_env){
var compile_asserts = cljs.core.not(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))));
return compile_asserts;
});
cljs.spec.alpha$macros.init_compile_asserts.cljs$lang$macro = true;

var ret__4776__auto___21723 = /**
 * spec-checking assert expression. Returns x if x is valid? according
 * to spec, else throws an error with explain-data plus ::failure of
 * :assertion-failed.
 * Can be disabled at either compile time or runtime:
 * If *compile-asserts* is false at compile time, compiles to x. Defaults
 * to the negation value of the ':elide-asserts' compiler option, or true if
 * not set.
 * If (check-asserts?) is false at runtime, always returns x. Defaults to
 * value of 'cljs.spec.alpha/*runtime-asserts*', or false if not set. You can
 * toggle check-asserts? with (check-asserts bool).
 */
cljs.spec.alpha$macros.assert = (function cljs$spec$alpha$macros$assert(_AMPERSAND_form,_AMPERSAND_env,spec,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*compile-asserts*","cljs.spec.alpha/*compile-asserts*",-1808061440,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","assert*","cljs.spec.alpha/assert*",464381070,null),null,(1),null)),(new cljs.core.List(null,spec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))));
});
cljs.spec.alpha$macros.assert.cljs$lang$macro = true;

