goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__20658 = s;
var map__20658__$1 = (((((!((map__20658 == null))))?(((((map__20658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20658):map__20658);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20658__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__20675 = info;
var map__20677 = G__20675;
var map__20677__$1 = (((((!((map__20677 == null))))?(((((map__20677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20677):map__20677);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20677__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__20675__$1 = G__20675;
while(true){
var d__$2 = d__$1;
var map__20702 = G__20675__$1;
var map__20702__$1 = (((((!((map__20702 == null))))?(((((map__20702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20702):map__20702);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20702__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__21891 = (d__$2 + (1));
var G__21892 = shadow__$1;
d__$1 = G__21891;
G__20675__$1 = G__21892;
continue;
} else {
if(cljs.core.truth_((cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)) : cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__20710){
var map__20712 = p__20710;
var map__20712__$1 = (((((!((map__20712 == null))))?(((((map__20712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20712):map__20712);
var name_var = map__20712__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20712__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__20716 = info;
var map__20716__$1 = (((((!((map__20716 == null))))?(((((map__20716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20716):map__20716);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20716__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20716__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__20718 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__20718) : cljs.compiler.munge.call(null,G__20718));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__20724 = arguments.length;
switch (G__20724) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__20733 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",17,1,11478,11478,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__20733.cljs$core$IFn$_invoke$arity$1 ? fexpr__20733.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__20733.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__20737 = cp;
switch (G__20737) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__20739_21913 = cljs.core.seq(s);
var chunk__20740_21914 = null;
var count__20741_21915 = (0);
var i__20742_21916 = (0);
while(true){
if((i__20742_21916 < count__20741_21915)){
var c_21917 = chunk__20740_21914.cljs$core$IIndexed$_nth$arity$2(null,i__20742_21916);
sb.append(cljs.compiler.escape_char(c_21917));


var G__21918 = seq__20739_21913;
var G__21919 = chunk__20740_21914;
var G__21920 = count__20741_21915;
var G__21921 = (i__20742_21916 + (1));
seq__20739_21913 = G__21918;
chunk__20740_21914 = G__21919;
count__20741_21915 = G__21920;
i__20742_21916 = G__21921;
continue;
} else {
var temp__5735__auto___21922 = cljs.core.seq(seq__20739_21913);
if(temp__5735__auto___21922){
var seq__20739_21925__$1 = temp__5735__auto___21922;
if(cljs.core.chunked_seq_QMARK_(seq__20739_21925__$1)){
var c__4550__auto___21926 = cljs.core.chunk_first(seq__20739_21925__$1);
var G__21927 = cljs.core.chunk_rest(seq__20739_21925__$1);
var G__21928 = c__4550__auto___21926;
var G__21929 = cljs.core.count(c__4550__auto___21926);
var G__21930 = (0);
seq__20739_21913 = G__21927;
chunk__20740_21914 = G__21928;
count__20741_21915 = G__21929;
i__20742_21916 = G__21930;
continue;
} else {
var c_21931 = cljs.core.first(seq__20739_21925__$1);
sb.append(cljs.compiler.escape_char(c_21931));


var G__21932 = cljs.core.next(seq__20739_21925__$1);
var G__21933 = null;
var G__21934 = (0);
var G__21935 = (0);
seq__20739_21913 = G__21932;
chunk__20740_21914 = G__21933;
count__20741_21915 = G__21934;
i__20742_21916 = G__21935;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20746 = cljs.core.get_global_hierarchy;
return (fexpr__20746.cljs$core$IFn$_invoke$arity$0 ? fexpr__20746.cljs$core$IFn$_invoke$arity$0() : fexpr__20746.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__20748_21940 = ast;
var map__20748_21941__$1 = (((((!((map__20748_21940 == null))))?(((((map__20748_21940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20748_21940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20748_21940):map__20748_21940);
var env_21942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748_21941__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_21942))){
var map__20752_21946 = env_21942;
var map__20752_21947__$1 = (((((!((map__20752_21946 == null))))?(((((map__20752_21946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20752_21946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20752_21946):map__20752_21946);
var line_21948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20752_21947__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20752_21947__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__20752_21946,map__20752_21947__$1,line_21948,column_21949,map__20748_21940,map__20748_21941__$1,env_21942){
return (function (m){
var minfo = (function (){var G__20755 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__20757 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__20756 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__20756.cljs$core$IFn$_invoke$arity$1 ? fexpr__20756.cljs$core$IFn$_invoke$arity$1(G__20757) : fexpr__20756.call(null,G__20757));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20755,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__20755;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_21948 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__20752_21946,map__20752_21947__$1,line_21948,column_21949,map__20748_21940,map__20748_21941__$1,env_21942){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_21949)?(column_21949 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__20752_21946,map__20752_21947__$1,line_21948,column_21949,map__20748_21940,map__20748_21941__$1,env_21942){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__20752_21946,map__20752_21947__$1,line_21948,column_21949,map__20748_21940,map__20748_21941__$1,env_21942))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__20752_21946,map__20752_21947__$1,line_21948,column_21949,map__20748_21940,map__20748_21941__$1,env_21942))
,cljs.core.sorted_map()));
});})(map__20752_21946,map__20752_21947__$1,line_21948,column_21949,map__20748_21940,map__20748_21941__$1,env_21942))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__20775 = arguments.length;
switch (G__20775) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___21974 = arguments.length;
var i__4731__auto___21975 = (0);
while(true){
if((i__4731__auto___21975 < len__4730__auto___21974)){
args_arr__4751__auto__.push((arguments[i__4731__auto___21975]));

var G__21976 = (i__4731__auto___21975 + (1));
i__4731__auto___21975 = G__21976;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_21979 = (function (){var G__20780 = a;
if((!(typeof a === 'string'))){
return G__20780.toString();
} else {
return G__20780;
}
})();
var temp__5739__auto___21980 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___21980 == null)){
} else {
var sm_data_21981 = temp__5739__auto___21980;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_21981,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_21981,temp__5739__auto___21980,s_21979){
return (function (p1__20759_SHARP_){
return (p1__20759_SHARP_ + s_21979.length);
});})(sm_data_21981,temp__5739__auto___21980,s_21979))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_21979], 0));

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__20790 = cljs.core.seq(xs);
var chunk__20791 = null;
var count__20792 = (0);
var i__20793 = (0);
while(true){
if((i__20793 < count__20792)){
var x = chunk__20791.cljs$core$IIndexed$_nth$arity$2(null,i__20793);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__21982 = seq__20790;
var G__21983 = chunk__20791;
var G__21984 = count__20792;
var G__21985 = (i__20793 + (1));
seq__20790 = G__21982;
chunk__20791 = G__21983;
count__20792 = G__21984;
i__20793 = G__21985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20790);
if(temp__5735__auto__){
var seq__20790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20790__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__20790__$1);
var G__21989 = cljs.core.chunk_rest(seq__20790__$1);
var G__21990 = c__4550__auto__;
var G__21991 = cljs.core.count(c__4550__auto__);
var G__21992 = (0);
seq__20790 = G__21989;
chunk__20791 = G__21990;
count__20792 = G__21991;
i__20793 = G__21992;
continue;
} else {
var x = cljs.core.first(seq__20790__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__21993 = cljs.core.next(seq__20790__$1);
var G__21994 = null;
var G__21995 = (0);
var G__21996 = (0);
seq__20790 = G__21993;
chunk__20791 = G__21994;
count__20792 = G__21995;
i__20793 = G__21996;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq20769){
var G__20770 = cljs.core.first(seq20769);
var seq20769__$1 = cljs.core.next(seq20769);
var G__20771 = cljs.core.first(seq20769__$1);
var seq20769__$2 = cljs.core.next(seq20769__$1);
var G__20772 = cljs.core.first(seq20769__$2);
var seq20769__$3 = cljs.core.next(seq20769__$2);
var G__20773 = cljs.core.first(seq20769__$3);
var seq20769__$4 = cljs.core.next(seq20769__$3);
var G__20774 = cljs.core.first(seq20769__$4);
var seq20769__$5 = cljs.core.next(seq20769__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20770,G__20771,G__20772,G__20773,G__20774,seq20769__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__20801){
var map__20802 = p__20801;
var map__20802__$1 = (((((!((map__20802 == null))))?(((((map__20802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20802):map__20802);
var m = map__20802__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20802__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__20816 = arguments.length;
switch (G__20816) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___22031 = arguments.length;
var i__4731__auto___22032 = (0);
while(true){
if((i__4731__auto___22032 < len__4730__auto___22031)){
args_arr__4751__auto__.push((arguments[i__4731__auto___22032]));

var G__22033 = (i__4731__auto___22032 + (1));
i__4731__auto___22032 = G__22033;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__20829_22040 = cljs.core.seq(xs);
var chunk__20830_22041 = null;
var count__20831_22042 = (0);
var i__20832_22043 = (0);
while(true){
if((i__20832_22043 < count__20831_22042)){
var x_22044 = chunk__20830_22041.cljs$core$IIndexed$_nth$arity$2(null,i__20832_22043);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_22044);


var G__22045 = seq__20829_22040;
var G__22046 = chunk__20830_22041;
var G__22047 = count__20831_22042;
var G__22048 = (i__20832_22043 + (1));
seq__20829_22040 = G__22045;
chunk__20830_22041 = G__22046;
count__20831_22042 = G__22047;
i__20832_22043 = G__22048;
continue;
} else {
var temp__5735__auto___22049 = cljs.core.seq(seq__20829_22040);
if(temp__5735__auto___22049){
var seq__20829_22050__$1 = temp__5735__auto___22049;
if(cljs.core.chunked_seq_QMARK_(seq__20829_22050__$1)){
var c__4550__auto___22051 = cljs.core.chunk_first(seq__20829_22050__$1);
var G__22052 = cljs.core.chunk_rest(seq__20829_22050__$1);
var G__22053 = c__4550__auto___22051;
var G__22054 = cljs.core.count(c__4550__auto___22051);
var G__22055 = (0);
seq__20829_22040 = G__22052;
chunk__20830_22041 = G__22053;
count__20831_22042 = G__22054;
i__20832_22043 = G__22055;
continue;
} else {
var x_22056 = cljs.core.first(seq__20829_22050__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_22056);


var G__22057 = cljs.core.next(seq__20829_22050__$1);
var G__22058 = null;
var G__22059 = (0);
var G__22060 = (0);
seq__20829_22040 = G__22057;
chunk__20830_22041 = G__22058;
count__20831_22042 = G__22059;
i__20832_22043 = G__22060;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq20810){
var G__20811 = cljs.core.first(seq20810);
var seq20810__$1 = cljs.core.next(seq20810);
var G__20812 = cljs.core.first(seq20810__$1);
var seq20810__$2 = cljs.core.next(seq20810__$1);
var G__20813 = cljs.core.first(seq20810__$2);
var seq20810__$3 = cljs.core.next(seq20810__$2);
var G__20814 = cljs.core.first(seq20810__$3);
var seq20810__$4 = cljs.core.next(seq20810__$3);
var G__20815 = cljs.core.first(seq20810__$4);
var seq20810__$5 = cljs.core.next(seq20810__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20811,G__20812,G__20813,G__20814,G__20815,seq20810__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20844_22061 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20845_22062 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20846_22063 = true;
var _STAR_print_fn_STAR__temp_val__20847_22064 = ((function (_STAR_print_newline_STAR__orig_val__20844_22061,_STAR_print_fn_STAR__orig_val__20845_22062,_STAR_print_newline_STAR__temp_val__20846_22063,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__20844_22061,_STAR_print_fn_STAR__orig_val__20845_22062,_STAR_print_newline_STAR__temp_val__20846_22063,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20846_22063;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20847_22064;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20845_22062;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20844_22061;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20853 = cljs.core.get_global_hierarchy;
return (fexpr__20853.cljs$core$IFn$_invoke$arity$0 ? fexpr__20853.cljs$core$IFn$_invoke$arity$0() : fexpr__20853.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__20868 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20868,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20868,(1),null);
var G__20871 = ns;
var G__20872 = name;
var G__20873 = ((function (G__20871,G__20872,vec__20868,ns,name){
return (function (){
var G__20875 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__20875) : cljs.compiler.emit_constant.call(null,G__20875));
});})(G__20871,G__20872,vec__20868,ns,name))
;
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__20871,G__20872,G__20873) : cljs.compiler.emit_record_value.call(null,G__20871,G__20872,G__20873));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__20877 = cljs.core.keys(x);
var G__20878 = cljs.core.vals(x);
var G__20879 = cljs.compiler.emit_constants_comma_sep;
var G__20880 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__20877,G__20878,G__20879,G__20880) : cljs.compiler.emit_map.call(null,G__20877,G__20878,G__20879,G__20880));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return (cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.compiler.emit_constant_STAR_.call(null,x));

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__20885 = ((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta(v);
});})(m))
;
var G__20886 = ((function (G__20885,m){
return (function (){
return cljs.compiler.emit_constant_no_meta(m);
});})(G__20885,m))
;
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__20885,G__20886) : cljs.compiler.emit_with_meta.call(null,G__20885,G__20886));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__20899 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20899,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20899,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20899,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__20910 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__20910) : x.call(null,G__20910));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__20911 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__20911) : x.call(null,G__20911));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__20927 = items;
var G__20928 = ((function (G__20927,items){
return (function (p1__20925_SHARP_){
return ((function (G__20927,items){
return (function (){
return cljs.compiler.emit_constant(p1__20925_SHARP_);
});
;})(G__20927,items))
});})(G__20927,items))
;
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__20927,G__20928) : cljs.compiler.emit_js_object.call(null,G__20927,G__20928));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__20945){
var map__20946 = p__20945;
var map__20946__$1 = (((((!((map__20946 == null))))?(((((map__20946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20946):map__20946);
var ast = map__20946__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20946__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20946__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__20954 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__20954__$1 = (((((!((map__20954 == null))))?(((((map__20954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20954):map__20954);
var cenv = map__20954__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20954__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__20957 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__20962 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__20962) : cljs.compiler.es5_GT__EQ_.call(null,G__20962));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__20957,cljs.analyzer.es5_allowed);
} else {
return G__20957;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4131__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__20964 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__20964,reserved);
} else {
return G__20964;
}
})();
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__20965_22122 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__20965_22123__$1 = (((G__20965_22122 instanceof cljs.core.Keyword))?G__20965_22122.fqn:null);
switch (G__20965_22123__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__20971){
var map__20972 = p__20971;
var map__20972__$1 = (((((!((map__20972 == null))))?(((((map__20972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20972):map__20972);
var arg = map__20972__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));


var map__20974 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__20974__$1 = (((((!((map__20974 == null))))?(((((map__20974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20974):map__20974);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__20977){
var map__20978 = p__20977;
var map__20978__$1 = (((((!((map__20978 == null))))?(((((map__20978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20978):map__20978);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_(((function (keys__$1){
return (function (p1__20995_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20995_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__21005 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__21005) : comma_sep.call(null,G__21005));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__21006 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__21006) : comma_sep.call(null,G__21006));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__21008){
var map__21010 = p__21008;
var map__21010__$1 = (((((!((map__21010 == null))))?(((((map__21010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21010):map__21010);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21010__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__21024){
var map__21025 = p__21024;
var map__21025__$1 = (((((!((map__21025 == null))))?(((((map__21025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21025):map__21025);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_(((function (items__$1){
return (function (p1__21028_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21028_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__21041 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__21041) : comma_sep.call(null,G__21041));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__21042){
var map__21043 = p__21042;
var map__21043__$1 = (((((!((map__21043 == null))))?(((((map__21043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21043):map__21043);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21043__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___22166 = cljs.core.seq(items);
if(temp__5735__auto___22166){
var items_22167__$1 = temp__5735__auto___22166;
var vec__21051_22168 = items_22167__$1;
var seq__21052_22169 = cljs.core.seq(vec__21051_22168);
var first__21053_22170 = cljs.core.first(seq__21052_22169);
var seq__21052_22171__$1 = cljs.core.next(seq__21052_22169);
var vec__21054_22172 = first__21053_22170;
var k_22173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21054_22172,(0),null);
var v_22174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21054_22172,(1),null);
var r_22175 = seq__21052_22171__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_22173),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_22174) : emit_js_object_val.call(null,v_22174)));

var seq__21057_22182 = cljs.core.seq(r_22175);
var chunk__21058_22183 = null;
var count__21059_22184 = (0);
var i__21060_22185 = (0);
while(true){
if((i__21060_22185 < count__21059_22184)){
var vec__21067_22186 = chunk__21058_22183.cljs$core$IIndexed$_nth$arity$2(null,i__21060_22185);
var k_22187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21067_22186,(0),null);
var v_22188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21067_22186,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_22187__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_22188__$1) : emit_js_object_val.call(null,v_22188__$1)));


var G__22189 = seq__21057_22182;
var G__22190 = chunk__21058_22183;
var G__22191 = count__21059_22184;
var G__22192 = (i__21060_22185 + (1));
seq__21057_22182 = G__22189;
chunk__21058_22183 = G__22190;
count__21059_22184 = G__22191;
i__21060_22185 = G__22192;
continue;
} else {
var temp__5735__auto___22193__$1 = cljs.core.seq(seq__21057_22182);
if(temp__5735__auto___22193__$1){
var seq__21057_22194__$1 = temp__5735__auto___22193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21057_22194__$1)){
var c__4550__auto___22195 = cljs.core.chunk_first(seq__21057_22194__$1);
var G__22196 = cljs.core.chunk_rest(seq__21057_22194__$1);
var G__22197 = c__4550__auto___22195;
var G__22198 = cljs.core.count(c__4550__auto___22195);
var G__22199 = (0);
seq__21057_22182 = G__22196;
chunk__21058_22183 = G__22197;
count__21059_22184 = G__22198;
i__21060_22185 = G__22199;
continue;
} else {
var vec__21070_22200 = cljs.core.first(seq__21057_22194__$1);
var k_22201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21070_22200,(0),null);
var v_22202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21070_22200,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_22201__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_22202__$1) : emit_js_object_val.call(null,v_22202__$1)));


var G__22206 = cljs.core.next(seq__21057_22194__$1);
var G__22207 = null;
var G__22208 = (0);
var G__22209 = (0);
seq__21057_22182 = G__22206;
chunk__21058_22183 = G__22207;
count__21059_22184 = G__22208;
i__21060_22185 = G__22209;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__21086){
var map__21087 = p__21086;
var map__21087__$1 = (((((!((map__21087 == null))))?(((((map__21087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21087):map__21087);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__21090){
var map__21091 = p__21090;
var map__21091__$1 = (((((!((map__21091 == null))))?(((((map__21091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21091):map__21091);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__21098){
var map__21099 = p__21098;
var map__21099__$1 = (((((!((map__21099 == null))))?(((((map__21099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21099):map__21099);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21099__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__21101){
var map__21102 = p__21101;
var map__21102__$1 = (((((!((map__21102 == null))))?(((((map__21102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21102):map__21102);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21102__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__21104 = cljs.analyzer.unwrap_quote(expr);
var map__21104__$1 = (((((!((map__21104 == null))))?(((((map__21104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21104):map__21104);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21104__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__21114 = cljs.analyzer.unwrap_quote(expr);
var map__21114__$1 = (((((!((map__21114 == null))))?(((((map__21114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21114):map__21114);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4131__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4131__auto__ = (function (){var fexpr__21119 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__21119.cljs$core$IFn$_invoke$arity$1 ? fexpr__21119.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21119.call(null,tag));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__21120){
var map__21121 = p__21120;
var map__21121__$1 = (((((!((map__21121 == null))))?(((((map__21121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21121):map__21121);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__21135){
var map__21136 = p__21135;
var map__21136__$1 = (((((!((map__21136 == null))))?(((((map__21136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21136):map__21136);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__21138_22262 = cljs.core.seq(nodes);
var chunk__21139_22263 = null;
var count__21140_22264 = (0);
var i__21141_22265 = (0);
while(true){
if((i__21141_22265 < count__21140_22264)){
var map__21185_22266 = chunk__21139_22263.cljs$core$IIndexed$_nth$arity$2(null,i__21141_22265);
var map__21185_22267__$1 = (((((!((map__21185_22266 == null))))?(((((map__21185_22266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21185_22266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21185_22266):map__21185_22266);
var ts_22268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185_22267__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__21186_22269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185_22267__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__21186_22270__$1 = (((((!((map__21186_22269 == null))))?(((((map__21186_22269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21186_22269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21186_22269):map__21186_22269);
var then_22271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186_22270__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__21189_22275 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_22268));
var chunk__21190_22276 = null;
var count__21191_22277 = (0);
var i__21192_22278 = (0);
while(true){
if((i__21192_22278 < count__21191_22277)){
var test_22280 = chunk__21190_22276.cljs$core$IIndexed$_nth$arity$2(null,i__21192_22278);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_22280,":");


var G__22282 = seq__21189_22275;
var G__22283 = chunk__21190_22276;
var G__22284 = count__21191_22277;
var G__22285 = (i__21192_22278 + (1));
seq__21189_22275 = G__22282;
chunk__21190_22276 = G__22283;
count__21191_22277 = G__22284;
i__21192_22278 = G__22285;
continue;
} else {
var temp__5735__auto___22286 = cljs.core.seq(seq__21189_22275);
if(temp__5735__auto___22286){
var seq__21189_22287__$1 = temp__5735__auto___22286;
if(cljs.core.chunked_seq_QMARK_(seq__21189_22287__$1)){
var c__4550__auto___22288 = cljs.core.chunk_first(seq__21189_22287__$1);
var G__22289 = cljs.core.chunk_rest(seq__21189_22287__$1);
var G__22290 = c__4550__auto___22288;
var G__22291 = cljs.core.count(c__4550__auto___22288);
var G__22292 = (0);
seq__21189_22275 = G__22289;
chunk__21190_22276 = G__22290;
count__21191_22277 = G__22291;
i__21192_22278 = G__22292;
continue;
} else {
var test_22293 = cljs.core.first(seq__21189_22287__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_22293,":");


var G__22294 = cljs.core.next(seq__21189_22287__$1);
var G__22295 = null;
var G__22296 = (0);
var G__22297 = (0);
seq__21189_22275 = G__22294;
chunk__21190_22276 = G__22295;
count__21191_22277 = G__22296;
i__21192_22278 = G__22297;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_22271);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_22271);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__22299 = seq__21138_22262;
var G__22300 = chunk__21139_22263;
var G__22301 = count__21140_22264;
var G__22302 = (i__21141_22265 + (1));
seq__21138_22262 = G__22299;
chunk__21139_22263 = G__22300;
count__21140_22264 = G__22301;
i__21141_22265 = G__22302;
continue;
} else {
var temp__5735__auto___22303 = cljs.core.seq(seq__21138_22262);
if(temp__5735__auto___22303){
var seq__21138_22308__$1 = temp__5735__auto___22303;
if(cljs.core.chunked_seq_QMARK_(seq__21138_22308__$1)){
var c__4550__auto___22309 = cljs.core.chunk_first(seq__21138_22308__$1);
var G__22312 = cljs.core.chunk_rest(seq__21138_22308__$1);
var G__22313 = c__4550__auto___22309;
var G__22314 = cljs.core.count(c__4550__auto___22309);
var G__22315 = (0);
seq__21138_22262 = G__22312;
chunk__21139_22263 = G__22313;
count__21140_22264 = G__22314;
i__21141_22265 = G__22315;
continue;
} else {
var map__21199_22316 = cljs.core.first(seq__21138_22308__$1);
var map__21199_22317__$1 = (((((!((map__21199_22316 == null))))?(((((map__21199_22316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21199_22316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21199_22316):map__21199_22316);
var ts_22318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199_22317__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__21200_22319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21199_22317__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__21200_22320__$1 = (((((!((map__21200_22319 == null))))?(((((map__21200_22319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21200_22319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21200_22319):map__21200_22319);
var then_22321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200_22320__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__21203_22323 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_22318));
var chunk__21204_22324 = null;
var count__21205_22325 = (0);
var i__21206_22326 = (0);
while(true){
if((i__21206_22326 < count__21205_22325)){
var test_22327 = chunk__21204_22324.cljs$core$IIndexed$_nth$arity$2(null,i__21206_22326);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_22327,":");


var G__22328 = seq__21203_22323;
var G__22329 = chunk__21204_22324;
var G__22330 = count__21205_22325;
var G__22331 = (i__21206_22326 + (1));
seq__21203_22323 = G__22328;
chunk__21204_22324 = G__22329;
count__21205_22325 = G__22330;
i__21206_22326 = G__22331;
continue;
} else {
var temp__5735__auto___22333__$1 = cljs.core.seq(seq__21203_22323);
if(temp__5735__auto___22333__$1){
var seq__21203_22335__$1 = temp__5735__auto___22333__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21203_22335__$1)){
var c__4550__auto___22336 = cljs.core.chunk_first(seq__21203_22335__$1);
var G__22337 = cljs.core.chunk_rest(seq__21203_22335__$1);
var G__22338 = c__4550__auto___22336;
var G__22339 = cljs.core.count(c__4550__auto___22336);
var G__22340 = (0);
seq__21203_22323 = G__22337;
chunk__21204_22324 = G__22338;
count__21205_22325 = G__22339;
i__21206_22326 = G__22340;
continue;
} else {
var test_22344 = cljs.core.first(seq__21203_22335__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_22344,":");


var G__22345 = cljs.core.next(seq__21203_22335__$1);
var G__22346 = null;
var G__22347 = (0);
var G__22348 = (0);
seq__21203_22323 = G__22345;
chunk__21204_22324 = G__22346;
count__21205_22325 = G__22347;
i__21206_22326 = G__22348;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_22321);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_22321);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__22349 = cljs.core.next(seq__21138_22308__$1);
var G__22350 = null;
var G__22351 = (0);
var G__22352 = (0);
seq__21138_22262 = G__22349;
chunk__21139_22263 = G__22350;
count__21140_22264 = G__22351;
i__21141_22265 = G__22352;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__21210){
var map__21211 = p__21210;
var map__21211__$1 = (((((!((map__21211 == null))))?(((((map__21211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21211):map__21211);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21224 = env;
var G__21225 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21224,G__21225) : cljs.compiler.resolve_type.call(null,G__21224,G__21225));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__21227 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21227,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21227,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__21227,fstr,rstr,ret_t,axstr){
return (function (p1__21215_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__21215_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__21215_SHARP_));
});})(idx,vec__21227,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__21232 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__21232,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__21232;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21236 = env;
var G__21237 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__21236,G__21237) : cljs.compiler.resolve_type.call(null,G__21236,G__21237));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__21238_SHARP_){
return cljs.compiler.resolve_type(env,p1__21238_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__21244 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21245 = cljs.core.seq(vec__21244);
var first__21246 = cljs.core.first(seq__21245);
var seq__21245__$1 = cljs.core.next(seq__21245);
var p = first__21246;
var first__21246__$1 = cljs.core.first(seq__21245__$1);
var seq__21245__$2 = cljs.core.next(seq__21245__$1);
var ts = first__21246__$1;
var first__21246__$2 = cljs.core.first(seq__21245__$2);
var seq__21245__$3 = cljs.core.next(seq__21245__$2);
var n = first__21246__$2;
var xs = seq__21245__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__21254 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__21255 = cljs.core.seq(vec__21254);
var first__21256 = cljs.core.first(seq__21255);
var seq__21255__$1 = cljs.core.next(seq__21255);
var p = first__21256;
var first__21256__$1 = cljs.core.first(seq__21255__$1);
var seq__21255__$2 = cljs.core.next(seq__21255__$1);
var ts = first__21256__$1;
var xs = seq__21255__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__21258 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__21257 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__21257.cljs$core$IFn$_invoke$arity$1 ? fexpr__21257.cljs$core$IFn$_invoke$arity$1(G__21258) : fexpr__21257.call(null,G__21258));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__21267 = arguments.length;
switch (G__21267) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__21302 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__21259_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__21259_SHARP_);
} else {
return p1__21259_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__21303 = cljs.core.seq(vec__21302);
var first__21304 = cljs.core.first(seq__21303);
var seq__21303__$1 = cljs.core.next(seq__21303);
var x = first__21304;
var ys = seq__21303__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__21312 = cljs.core.seq(ys);
var chunk__21313 = null;
var count__21314 = (0);
var i__21315 = (0);
while(true){
if((i__21315 < count__21314)){
var next_line = chunk__21313.cljs$core$IIndexed$_nth$arity$2(null,i__21315);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__22406 = seq__21312;
var G__22407 = chunk__21313;
var G__22408 = count__21314;
var G__22409 = (i__21315 + (1));
seq__21312 = G__22406;
chunk__21313 = G__22407;
count__21314 = G__22408;
i__21315 = G__22409;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21312);
if(temp__5735__auto__){
var seq__21312__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21312__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21312__$1);
var G__22413 = cljs.core.chunk_rest(seq__21312__$1);
var G__22414 = c__4550__auto__;
var G__22415 = cljs.core.count(c__4550__auto__);
var G__22416 = (0);
seq__21312 = G__22413;
chunk__21313 = G__22414;
count__21314 = G__22415;
i__21315 = G__22416;
continue;
} else {
var next_line = cljs.core.first(seq__21312__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__22418 = cljs.core.next(seq__21312__$1);
var G__22419 = null;
var G__22420 = (0);
var G__22421 = (0);
seq__21312 = G__22418;
chunk__21313 = G__22419;
count__21314 = G__22420;
i__21315 = G__22421;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__21348_22425 = cljs.core.seq(docs__$2);
var chunk__21349_22426 = null;
var count__21350_22427 = (0);
var i__21351_22428 = (0);
while(true){
if((i__21351_22428 < count__21350_22427)){
var e_22429 = chunk__21349_22426.cljs$core$IIndexed$_nth$arity$2(null,i__21351_22428);
if(cljs.core.truth_(e_22429)){
print_comment_lines(e_22429);
} else {
}


var G__22430 = seq__21348_22425;
var G__22431 = chunk__21349_22426;
var G__22432 = count__21350_22427;
var G__22433 = (i__21351_22428 + (1));
seq__21348_22425 = G__22430;
chunk__21349_22426 = G__22431;
count__21350_22427 = G__22432;
i__21351_22428 = G__22433;
continue;
} else {
var temp__5735__auto___22434 = cljs.core.seq(seq__21348_22425);
if(temp__5735__auto___22434){
var seq__21348_22436__$1 = temp__5735__auto___22434;
if(cljs.core.chunked_seq_QMARK_(seq__21348_22436__$1)){
var c__4550__auto___22440 = cljs.core.chunk_first(seq__21348_22436__$1);
var G__22441 = cljs.core.chunk_rest(seq__21348_22436__$1);
var G__22442 = c__4550__auto___22440;
var G__22443 = cljs.core.count(c__4550__auto___22440);
var G__22444 = (0);
seq__21348_22425 = G__22441;
chunk__21349_22426 = G__22442;
count__21350_22427 = G__22443;
i__21351_22428 = G__22444;
continue;
} else {
var e_22445 = cljs.core.first(seq__21348_22436__$1);
if(cljs.core.truth_(e_22445)){
print_comment_lines(e_22445);
} else {
}


var G__22446 = cljs.core.next(seq__21348_22436__$1);
var G__22447 = null;
var G__22448 = (0);
var G__22449 = (0);
seq__21348_22425 = G__22446;
chunk__21349_22426 = G__22447;
count__21350_22427 = G__22448;
i__21351_22428 = G__22449;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4120__auto__ = cljs.core.some(((function (opts){
return (function (p1__21362_SHARP_){
return goog.string.startsWith(p1__21362_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4120__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__21364){
var map__21366 = p__21364;
var map__21366__$1 = (((((!((map__21366 == null))))?(((((map__21366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21366):map__21366);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21366__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__21377){
var map__21378 = p__21377;
var map__21378__$1 = (((((!((map__21378 == null))))?(((((map__21378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21378):map__21378);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__21380_22476 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__21381_22477 = null;
var count__21382_22478 = (0);
var i__21383_22479 = (0);
while(true){
if((i__21383_22479 < count__21382_22478)){
var vec__21393_22480 = chunk__21381_22477.cljs$core$IIndexed$_nth$arity$2(null,i__21383_22479);
var i_22481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393_22480,(0),null);
var param_22482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21393_22480,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_22482);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__22484 = seq__21380_22476;
var G__22485 = chunk__21381_22477;
var G__22486 = count__21382_22478;
var G__22487 = (i__21383_22479 + (1));
seq__21380_22476 = G__22484;
chunk__21381_22477 = G__22485;
count__21382_22478 = G__22486;
i__21383_22479 = G__22487;
continue;
} else {
var temp__5735__auto___22489 = cljs.core.seq(seq__21380_22476);
if(temp__5735__auto___22489){
var seq__21380_22491__$1 = temp__5735__auto___22489;
if(cljs.core.chunked_seq_QMARK_(seq__21380_22491__$1)){
var c__4550__auto___22493 = cljs.core.chunk_first(seq__21380_22491__$1);
var G__22494 = cljs.core.chunk_rest(seq__21380_22491__$1);
var G__22495 = c__4550__auto___22493;
var G__22496 = cljs.core.count(c__4550__auto___22493);
var G__22497 = (0);
seq__21380_22476 = G__22494;
chunk__21381_22477 = G__22495;
count__21382_22478 = G__22496;
i__21383_22479 = G__22497;
continue;
} else {
var vec__21397_22502 = cljs.core.first(seq__21380_22491__$1);
var i_22503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21397_22502,(0),null);
var param_22504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21397_22502,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_22504);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__22506 = cljs.core.next(seq__21380_22491__$1);
var G__22507 = null;
var G__22508 = (0);
var G__22509 = (0);
seq__21380_22476 = G__22506;
chunk__21381_22477 = G__22507;
count__21382_22478 = G__22508;
i__21383_22479 = G__22509;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__21400_22512 = cljs.core.seq(params);
var chunk__21401_22513 = null;
var count__21402_22514 = (0);
var i__21403_22515 = (0);
while(true){
if((i__21403_22515 < count__21402_22514)){
var param_22516 = chunk__21401_22513.cljs$core$IIndexed$_nth$arity$2(null,i__21403_22515);
cljs.compiler.emit(param_22516);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22516,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22517 = seq__21400_22512;
var G__22518 = chunk__21401_22513;
var G__22519 = count__21402_22514;
var G__22520 = (i__21403_22515 + (1));
seq__21400_22512 = G__22517;
chunk__21401_22513 = G__22518;
count__21402_22514 = G__22519;
i__21403_22515 = G__22520;
continue;
} else {
var temp__5735__auto___22522 = cljs.core.seq(seq__21400_22512);
if(temp__5735__auto___22522){
var seq__21400_22524__$1 = temp__5735__auto___22522;
if(cljs.core.chunked_seq_QMARK_(seq__21400_22524__$1)){
var c__4550__auto___22525 = cljs.core.chunk_first(seq__21400_22524__$1);
var G__22526 = cljs.core.chunk_rest(seq__21400_22524__$1);
var G__22527 = c__4550__auto___22525;
var G__22528 = cljs.core.count(c__4550__auto___22525);
var G__22529 = (0);
seq__21400_22512 = G__22526;
chunk__21401_22513 = G__22527;
count__21402_22514 = G__22528;
i__21403_22515 = G__22529;
continue;
} else {
var param_22530 = cljs.core.first(seq__21400_22524__$1);
cljs.compiler.emit(param_22530);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22530,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22531 = cljs.core.next(seq__21400_22524__$1);
var G__22532 = null;
var G__22533 = (0);
var G__22534 = (0);
seq__21400_22512 = G__22531;
chunk__21401_22513 = G__22532;
count__21402_22514 = G__22533;
i__21403_22515 = G__22534;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__21408_22537 = cljs.core.seq(params);
var chunk__21409_22538 = null;
var count__21410_22539 = (0);
var i__21411_22540 = (0);
while(true){
if((i__21411_22540 < count__21410_22539)){
var param_22542 = chunk__21409_22538.cljs$core$IIndexed$_nth$arity$2(null,i__21411_22540);
cljs.compiler.emit(param_22542);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22542,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22543 = seq__21408_22537;
var G__22544 = chunk__21409_22538;
var G__22545 = count__21410_22539;
var G__22546 = (i__21411_22540 + (1));
seq__21408_22537 = G__22543;
chunk__21409_22538 = G__22544;
count__21410_22539 = G__22545;
i__21411_22540 = G__22546;
continue;
} else {
var temp__5735__auto___22551 = cljs.core.seq(seq__21408_22537);
if(temp__5735__auto___22551){
var seq__21408_22552__$1 = temp__5735__auto___22551;
if(cljs.core.chunked_seq_QMARK_(seq__21408_22552__$1)){
var c__4550__auto___22553 = cljs.core.chunk_first(seq__21408_22552__$1);
var G__22555 = cljs.core.chunk_rest(seq__21408_22552__$1);
var G__22556 = c__4550__auto___22553;
var G__22557 = cljs.core.count(c__4550__auto___22553);
var G__22558 = (0);
seq__21408_22537 = G__22555;
chunk__21409_22538 = G__22556;
count__21410_22539 = G__22557;
i__21411_22540 = G__22558;
continue;
} else {
var param_22562 = cljs.core.first(seq__21408_22552__$1);
cljs.compiler.emit(param_22562);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22562,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22565 = cljs.core.next(seq__21408_22552__$1);
var G__22566 = null;
var G__22567 = (0);
var G__22568 = (0);
seq__21408_22537 = G__22565;
chunk__21409_22538 = G__22566;
count__21410_22539 = G__22567;
i__21411_22540 = G__22568;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__21416 = cljs.core.seq(params);
var chunk__21417 = null;
var count__21418 = (0);
var i__21419 = (0);
while(true){
if((i__21419 < count__21418)){
var param = chunk__21417.cljs$core$IIndexed$_nth$arity$2(null,i__21419);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22574 = seq__21416;
var G__22575 = chunk__21417;
var G__22576 = count__21418;
var G__22577 = (i__21419 + (1));
seq__21416 = G__22574;
chunk__21417 = G__22575;
count__21418 = G__22576;
i__21419 = G__22577;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21416);
if(temp__5735__auto__){
var seq__21416__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21416__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21416__$1);
var G__22580 = cljs.core.chunk_rest(seq__21416__$1);
var G__22581 = c__4550__auto__;
var G__22582 = cljs.core.count(c__4550__auto__);
var G__22583 = (0);
seq__21416 = G__22580;
chunk__21417 = G__22581;
count__21418 = G__22582;
i__21419 = G__22583;
continue;
} else {
var param = cljs.core.first(seq__21416__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22585 = cljs.core.next(seq__21416__$1);
var G__22586 = null;
var G__22587 = (0);
var G__22588 = (0);
seq__21416 = G__22585;
chunk__21417 = G__22586;
count__21418 = G__22587;
i__21419 = G__22588;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__21434){
var map__21435 = p__21434;
var map__21435__$1 = (((((!((map__21435 == null))))?(((((map__21435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21435):map__21435);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__21443){
var map__21444 = p__21443;
var map__21444__$1 = (((((!((map__21444 == null))))?(((((map__21444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21444):map__21444);
var f = map__21444__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_22611__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_22612 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_22611__$1);
var delegate_name_22613 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22612),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_22613," = function (");

var seq__21446_22618 = cljs.core.seq(params);
var chunk__21447_22619 = null;
var count__21448_22620 = (0);
var i__21449_22621 = (0);
while(true){
if((i__21449_22621 < count__21448_22620)){
var param_22623 = chunk__21447_22619.cljs$core$IIndexed$_nth$arity$2(null,i__21449_22621);
cljs.compiler.emit(param_22623);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22623,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22625 = seq__21446_22618;
var G__22626 = chunk__21447_22619;
var G__22627 = count__21448_22620;
var G__22628 = (i__21449_22621 + (1));
seq__21446_22618 = G__22625;
chunk__21447_22619 = G__22626;
count__21448_22620 = G__22627;
i__21449_22621 = G__22628;
continue;
} else {
var temp__5735__auto___22630 = cljs.core.seq(seq__21446_22618);
if(temp__5735__auto___22630){
var seq__21446_22631__$1 = temp__5735__auto___22630;
if(cljs.core.chunked_seq_QMARK_(seq__21446_22631__$1)){
var c__4550__auto___22632 = cljs.core.chunk_first(seq__21446_22631__$1);
var G__22633 = cljs.core.chunk_rest(seq__21446_22631__$1);
var G__22634 = c__4550__auto___22632;
var G__22635 = cljs.core.count(c__4550__auto___22632);
var G__22636 = (0);
seq__21446_22618 = G__22633;
chunk__21447_22619 = G__22634;
count__21448_22620 = G__22635;
i__21449_22621 = G__22636;
continue;
} else {
var param_22637 = cljs.core.first(seq__21446_22631__$1);
cljs.compiler.emit(param_22637);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22637,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22639 = cljs.core.next(seq__21446_22631__$1);
var G__22640 = null;
var G__22641 = (0);
var G__22642 = (0);
seq__21446_22618 = G__22639;
chunk__21447_22619 = G__22640;
count__21448_22620 = G__22641;
i__21449_22621 = G__22642;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_22612," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_22645 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_22645,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_22613,".call(this,");

var seq__21450_22647 = cljs.core.seq(params);
var chunk__21451_22648 = null;
var count__21452_22649 = (0);
var i__21453_22650 = (0);
while(true){
if((i__21453_22650 < count__21452_22649)){
var param_22652 = chunk__21451_22648.cljs$core$IIndexed$_nth$arity$2(null,i__21453_22650);
cljs.compiler.emit(param_22652);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22652,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22657 = seq__21450_22647;
var G__22658 = chunk__21451_22648;
var G__22659 = count__21452_22649;
var G__22660 = (i__21453_22650 + (1));
seq__21450_22647 = G__22657;
chunk__21451_22648 = G__22658;
count__21452_22649 = G__22659;
i__21453_22650 = G__22660;
continue;
} else {
var temp__5735__auto___22661 = cljs.core.seq(seq__21450_22647);
if(temp__5735__auto___22661){
var seq__21450_22662__$1 = temp__5735__auto___22661;
if(cljs.core.chunked_seq_QMARK_(seq__21450_22662__$1)){
var c__4550__auto___22663 = cljs.core.chunk_first(seq__21450_22662__$1);
var G__22664 = cljs.core.chunk_rest(seq__21450_22662__$1);
var G__22665 = c__4550__auto___22663;
var G__22666 = cljs.core.count(c__4550__auto___22663);
var G__22667 = (0);
seq__21450_22647 = G__22664;
chunk__21451_22648 = G__22665;
count__21452_22649 = G__22666;
i__21453_22650 = G__22667;
continue;
} else {
var param_22668 = cljs.core.first(seq__21450_22662__$1);
cljs.compiler.emit(param_22668);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_22668,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__22673 = cljs.core.next(seq__21450_22662__$1);
var G__22674 = null;
var G__22675 = (0);
var G__22676 = (0);
seq__21450_22647 = G__22673;
chunk__21451_22648 = G__22674;
count__21452_22649 = G__22675;
i__21453_22650 = G__22676;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_22612,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_22612,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_22611__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_22612,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_22613,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_22612,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__21465){
var map__21467 = p__21465;
var map__21467__$1 = (((((!((map__21467 == null))))?(((((map__21467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21467):map__21467);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__21459_SHARP_){
var and__4120__auto__ = p1__21459_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__21459_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_22691__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_22692 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_22691__$1);
var maxparams_22693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_22694 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_22691__$1,mname_22692,maxparams_22693,loop_locals,map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_22692),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_22691__$1,mname_22692,maxparams_22693,loop_locals,map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_22695 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_22691__$1,mname_22692,maxparams_22693,mmap_22694,loop_locals,map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__21461_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__21461_SHARP_)));
});})(name_22691__$1,mname_22692,maxparams_22693,mmap_22694,loop_locals,map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq(mmap_22694));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_22692," = null;");

var seq__21473_22708 = cljs.core.seq(ms_22695);
var chunk__21474_22709 = null;
var count__21475_22710 = (0);
var i__21476_22711 = (0);
while(true){
if((i__21476_22711 < count__21475_22710)){
var vec__21489_22712 = chunk__21474_22709.cljs$core$IIndexed$_nth$arity$2(null,i__21476_22711);
var n_22713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21489_22712,(0),null);
var meth_22714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21489_22712,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_22713," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22714))){
cljs.compiler.emit_variadic_fn_method(meth_22714);
} else {
cljs.compiler.emit_fn_method(meth_22714);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__22715 = seq__21473_22708;
var G__22716 = chunk__21474_22709;
var G__22717 = count__21475_22710;
var G__22718 = (i__21476_22711 + (1));
seq__21473_22708 = G__22715;
chunk__21474_22709 = G__22716;
count__21475_22710 = G__22717;
i__21476_22711 = G__22718;
continue;
} else {
var temp__5735__auto___22719 = cljs.core.seq(seq__21473_22708);
if(temp__5735__auto___22719){
var seq__21473_22721__$1 = temp__5735__auto___22719;
if(cljs.core.chunked_seq_QMARK_(seq__21473_22721__$1)){
var c__4550__auto___22722 = cljs.core.chunk_first(seq__21473_22721__$1);
var G__22724 = cljs.core.chunk_rest(seq__21473_22721__$1);
var G__22725 = c__4550__auto___22722;
var G__22726 = cljs.core.count(c__4550__auto___22722);
var G__22727 = (0);
seq__21473_22708 = G__22724;
chunk__21474_22709 = G__22725;
count__21475_22710 = G__22726;
i__21476_22711 = G__22727;
continue;
} else {
var vec__21492_22728 = cljs.core.first(seq__21473_22721__$1);
var n_22729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21492_22728,(0),null);
var meth_22730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21492_22728,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_22729," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22730))){
cljs.compiler.emit_variadic_fn_method(meth_22730);
} else {
cljs.compiler.emit_fn_method(meth_22730);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__22738 = cljs.core.next(seq__21473_22721__$1);
var G__22739 = null;
var G__22740 = (0);
var G__22741 = (0);
seq__21473_22708 = G__22738;
chunk__21474_22709 = G__22739;
count__21475_22710 = G__22740;
i__21476_22711 = G__22741;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_22692," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_22693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_22693)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_22693));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__21495_22747 = cljs.core.seq(ms_22695);
var chunk__21496_22748 = null;
var count__21497_22749 = (0);
var i__21498_22750 = (0);
while(true){
if((i__21498_22750 < count__21497_22749)){
var vec__21505_22751 = chunk__21496_22748.cljs$core$IIndexed$_nth$arity$2(null,i__21498_22750);
var n_22752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21505_22751,(0),null);
var meth_22753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21505_22751,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22753))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_22754 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_22754," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_22759 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_22754," = new cljs.core.IndexedSeq(",a_22759,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_22752,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_22693)),(((cljs.core.count(maxparams_22693) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_22754,");"], 0));
} else {
var pcnt_22762 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22753));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_22762,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_22752,".call(this",(((pcnt_22762 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_22762,maxparams_22693)),null,(1),null)),(2),null))),");");
}


var G__22768 = seq__21495_22747;
var G__22769 = chunk__21496_22748;
var G__22770 = count__21497_22749;
var G__22771 = (i__21498_22750 + (1));
seq__21495_22747 = G__22768;
chunk__21496_22748 = G__22769;
count__21497_22749 = G__22770;
i__21498_22750 = G__22771;
continue;
} else {
var temp__5735__auto___22772 = cljs.core.seq(seq__21495_22747);
if(temp__5735__auto___22772){
var seq__21495_22773__$1 = temp__5735__auto___22772;
if(cljs.core.chunked_seq_QMARK_(seq__21495_22773__$1)){
var c__4550__auto___22774 = cljs.core.chunk_first(seq__21495_22773__$1);
var G__22775 = cljs.core.chunk_rest(seq__21495_22773__$1);
var G__22776 = c__4550__auto___22774;
var G__22777 = cljs.core.count(c__4550__auto___22774);
var G__22778 = (0);
seq__21495_22747 = G__22775;
chunk__21496_22748 = G__22776;
count__21497_22749 = G__22777;
i__21498_22750 = G__22778;
continue;
} else {
var vec__21510_22779 = cljs.core.first(seq__21495_22773__$1);
var n_22780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21510_22779,(0),null);
var meth_22781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21510_22779,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22781))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_22783 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_22783," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_22785 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_22783," = new cljs.core.IndexedSeq(",a_22785,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_22780,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_22693)),(((cljs.core.count(maxparams_22693) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_22783,");"], 0));
} else {
var pcnt_22790 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22781));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_22790,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_22780,".call(this",(((pcnt_22790 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_22790,maxparams_22693)),null,(1),null)),(2),null))),");");
}


var G__22792 = cljs.core.next(seq__21495_22773__$1);
var G__22793 = null;
var G__22794 = (0);
var G__22795 = (0);
seq__21495_22747 = G__22792;
chunk__21496_22748 = G__22793;
count__21497_22749 = G__22794;
i__21498_22750 = G__22795;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_22796 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_22695)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_22796,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_22692,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_22692,".cljs$lang$applyTo = ",cljs.core.some(((function (name_22691__$1,mname_22692,maxparams_22693,mmap_22694,ms_22695,loop_locals,map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__21462_SHARP_){
var vec__21513 = p1__21462_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21513,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21513,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_22691__$1,mname_22692,maxparams_22693,mmap_22694,ms_22695,loop_locals,map__21467,map__21467__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_22695),".cljs$lang$applyTo;");
} else {
}

var seq__21518_22799 = cljs.core.seq(ms_22695);
var chunk__21519_22800 = null;
var count__21520_22801 = (0);
var i__21521_22802 = (0);
while(true){
if((i__21521_22802 < count__21520_22801)){
var vec__21530_22807 = chunk__21519_22800.cljs$core$IIndexed$_nth$arity$2(null,i__21521_22802);
var n_22808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21530_22807,(0),null);
var meth_22809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21530_22807,(1),null);
var c_22810 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22809));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22809))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_22692,".cljs$core$IFn$_invoke$arity$variadic = ",n_22808,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_22692,".cljs$core$IFn$_invoke$arity$",c_22810," = ",n_22808,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__22811 = seq__21518_22799;
var G__22812 = chunk__21519_22800;
var G__22813 = count__21520_22801;
var G__22814 = (i__21521_22802 + (1));
seq__21518_22799 = G__22811;
chunk__21519_22800 = G__22812;
count__21520_22801 = G__22813;
i__21521_22802 = G__22814;
continue;
} else {
var temp__5735__auto___22815 = cljs.core.seq(seq__21518_22799);
if(temp__5735__auto___22815){
var seq__21518_22816__$1 = temp__5735__auto___22815;
if(cljs.core.chunked_seq_QMARK_(seq__21518_22816__$1)){
var c__4550__auto___22819 = cljs.core.chunk_first(seq__21518_22816__$1);
var G__22820 = cljs.core.chunk_rest(seq__21518_22816__$1);
var G__22821 = c__4550__auto___22819;
var G__22822 = cljs.core.count(c__4550__auto___22819);
var G__22823 = (0);
seq__21518_22799 = G__22820;
chunk__21519_22800 = G__22821;
count__21520_22801 = G__22822;
i__21521_22802 = G__22823;
continue;
} else {
var vec__21533_22824 = cljs.core.first(seq__21518_22816__$1);
var n_22825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21533_22824,(0),null);
var meth_22826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21533_22824,(1),null);
var c_22827 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_22826));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_22826))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_22692,".cljs$core$IFn$_invoke$arity$variadic = ",n_22825,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_22692,".cljs$core$IFn$_invoke$arity$",c_22827," = ",n_22825,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__22828 = cljs.core.next(seq__21518_22816__$1);
var G__22829 = null;
var G__22830 = (0);
var G__22831 = (0);
seq__21518_22799 = G__22828;
chunk__21519_22800 = G__22829;
count__21520_22801 = G__22830;
i__21521_22802 = G__22831;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_22692,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__21536){
var map__21537 = p__21536;
var map__21537__$1 = (((((!((map__21537 == null))))?(((((map__21537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21537):map__21537);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21537__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21537__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21537__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__21543_22834 = cljs.core.seq(statements);
var chunk__21544_22835 = null;
var count__21545_22836 = (0);
var i__21546_22837 = (0);
while(true){
if((i__21546_22837 < count__21545_22836)){
var s_22838 = chunk__21544_22835.cljs$core$IIndexed$_nth$arity$2(null,i__21546_22837);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_22838);


var G__22840 = seq__21543_22834;
var G__22841 = chunk__21544_22835;
var G__22842 = count__21545_22836;
var G__22843 = (i__21546_22837 + (1));
seq__21543_22834 = G__22840;
chunk__21544_22835 = G__22841;
count__21545_22836 = G__22842;
i__21546_22837 = G__22843;
continue;
} else {
var temp__5735__auto___22844 = cljs.core.seq(seq__21543_22834);
if(temp__5735__auto___22844){
var seq__21543_22845__$1 = temp__5735__auto___22844;
if(cljs.core.chunked_seq_QMARK_(seq__21543_22845__$1)){
var c__4550__auto___22846 = cljs.core.chunk_first(seq__21543_22845__$1);
var G__22848 = cljs.core.chunk_rest(seq__21543_22845__$1);
var G__22849 = c__4550__auto___22846;
var G__22850 = cljs.core.count(c__4550__auto___22846);
var G__22851 = (0);
seq__21543_22834 = G__22848;
chunk__21544_22835 = G__22849;
count__21545_22836 = G__22850;
i__21546_22837 = G__22851;
continue;
} else {
var s_22876 = cljs.core.first(seq__21543_22845__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_22876);


var G__22878 = cljs.core.next(seq__21543_22845__$1);
var G__22879 = null;
var G__22880 = (0);
var G__22881 = (0);
seq__21543_22834 = G__22878;
chunk__21544_22835 = G__22879;
count__21545_22836 = G__22880;
i__21546_22837 = G__22881;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__21550){
var map__21551 = p__21550;
var map__21551__$1 = (((((!((map__21551 == null))))?(((((map__21551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21551):map__21551);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21551__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21551__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21551__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21551__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__21554,is_loop){
var map__21555 = p__21554;
var map__21555__$1 = (((((!((map__21555 == null))))?(((((map__21555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21555):map__21555);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21555__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21555__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__21557_22888 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__21558_22889 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR__orig_val__21557_22888,context,map__21555,map__21555__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__21557_22888,context,map__21555,map__21555__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__21558_22889;

try{var seq__21560_22898 = cljs.core.seq(bindings);
var chunk__21561_22899 = null;
var count__21562_22900 = (0);
var i__21563_22901 = (0);
while(true){
if((i__21563_22901 < count__21562_22900)){
var map__21574_22902 = chunk__21561_22899.cljs$core$IIndexed$_nth$arity$2(null,i__21563_22901);
var map__21574_22903__$1 = (((((!((map__21574_22902 == null))))?(((((map__21574_22902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21574_22902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21574_22902):map__21574_22902);
var binding_22904 = map__21574_22903__$1;
var init_22905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21574_22903__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_22904);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_22905,";");


var G__22907 = seq__21560_22898;
var G__22908 = chunk__21561_22899;
var G__22909 = count__21562_22900;
var G__22910 = (i__21563_22901 + (1));
seq__21560_22898 = G__22907;
chunk__21561_22899 = G__22908;
count__21562_22900 = G__22909;
i__21563_22901 = G__22910;
continue;
} else {
var temp__5735__auto___22911 = cljs.core.seq(seq__21560_22898);
if(temp__5735__auto___22911){
var seq__21560_22912__$1 = temp__5735__auto___22911;
if(cljs.core.chunked_seq_QMARK_(seq__21560_22912__$1)){
var c__4550__auto___22913 = cljs.core.chunk_first(seq__21560_22912__$1);
var G__22915 = cljs.core.chunk_rest(seq__21560_22912__$1);
var G__22916 = c__4550__auto___22913;
var G__22917 = cljs.core.count(c__4550__auto___22913);
var G__22918 = (0);
seq__21560_22898 = G__22915;
chunk__21561_22899 = G__22916;
count__21562_22900 = G__22917;
i__21563_22901 = G__22918;
continue;
} else {
var map__21576_22920 = cljs.core.first(seq__21560_22912__$1);
var map__21576_22921__$1 = (((((!((map__21576_22920 == null))))?(((((map__21576_22920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21576_22920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21576_22920):map__21576_22920);
var binding_22922 = map__21576_22921__$1;
var init_22923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21576_22921__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_22922);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_22923,";");


var G__22927 = cljs.core.next(seq__21560_22912__$1);
var G__22928 = null;
var G__22929 = (0);
var G__22930 = (0);
seq__21560_22898 = G__22927;
chunk__21561_22899 = G__22928;
count__21562_22900 = G__22929;
i__21563_22901 = G__22930;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__21557_22888;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__21582){
var map__21583 = p__21582;
var map__21583__$1 = (((((!((map__21583 == null))))?(((((map__21583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21583):map__21583);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21583__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21583__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21583__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___22932 = cljs.core.count(exprs);
var i_22933 = (0);
while(true){
if((i_22933 < n__4607__auto___22932)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_22933) : temps.call(null,i_22933))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_22933) : exprs.call(null,i_22933)),";");

var G__22934 = (i_22933 + (1));
i_22933 = G__22934;
continue;
} else {
}
break;
}

var n__4607__auto___22935 = cljs.core.count(exprs);
var i_22936 = (0);
while(true){
if((i_22936 < n__4607__auto___22935)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_22936) : params.call(null,i_22936)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_22936) : temps.call(null,i_22936)),";");

var G__22937 = (i_22936 + (1));
i_22936 = G__22937;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__21588){
var map__21589 = p__21588;
var map__21589__$1 = (((((!((map__21589 == null))))?(((((map__21589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21589):map__21589);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__21592_22943 = cljs.core.seq(bindings);
var chunk__21593_22944 = null;
var count__21594_22945 = (0);
var i__21595_22946 = (0);
while(true){
if((i__21595_22946 < count__21594_22945)){
var map__21602_22947 = chunk__21593_22944.cljs$core$IIndexed$_nth$arity$2(null,i__21595_22946);
var map__21602_22948__$1 = (((((!((map__21602_22947 == null))))?(((((map__21602_22947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21602_22947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21602_22947):map__21602_22947);
var binding_22949 = map__21602_22948__$1;
var init_22950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21602_22948__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_22949)," = ",init_22950,";");


var G__22973 = seq__21592_22943;
var G__22974 = chunk__21593_22944;
var G__22975 = count__21594_22945;
var G__22976 = (i__21595_22946 + (1));
seq__21592_22943 = G__22973;
chunk__21593_22944 = G__22974;
count__21594_22945 = G__22975;
i__21595_22946 = G__22976;
continue;
} else {
var temp__5735__auto___22977 = cljs.core.seq(seq__21592_22943);
if(temp__5735__auto___22977){
var seq__21592_22978__$1 = temp__5735__auto___22977;
if(cljs.core.chunked_seq_QMARK_(seq__21592_22978__$1)){
var c__4550__auto___22979 = cljs.core.chunk_first(seq__21592_22978__$1);
var G__22980 = cljs.core.chunk_rest(seq__21592_22978__$1);
var G__22981 = c__4550__auto___22979;
var G__22982 = cljs.core.count(c__4550__auto___22979);
var G__22983 = (0);
seq__21592_22943 = G__22980;
chunk__21593_22944 = G__22981;
count__21594_22945 = G__22982;
i__21595_22946 = G__22983;
continue;
} else {
var map__21604_22984 = cljs.core.first(seq__21592_22978__$1);
var map__21604_22985__$1 = (((((!((map__21604_22984 == null))))?(((((map__21604_22984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21604_22984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21604_22984):map__21604_22984);
var binding_22986 = map__21604_22985__$1;
var init_22987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604_22985__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_22986)," = ",init_22987,";");


var G__22988 = cljs.core.next(seq__21592_22978__$1);
var G__22989 = null;
var G__22990 = (0);
var G__22991 = (0);
seq__21592_22943 = G__22988;
chunk__21593_22944 = G__22989;
count__21594_22945 = G__22990;
i__21595_22946 = G__22991;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__21615){
var map__21616 = p__21615;
var map__21616__$1 = (((((!((map__21616 == null))))?(((((map__21616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21616):map__21616);
var expr = map__21616__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not((function (){var fexpr__21634 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__21634.cljs$core$IFn$_invoke$arity$1 ? fexpr__21634.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__21634.call(null,tag));
})());
if(and__4120__auto____$4){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag(env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__21618 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env){
return (function (p1__21613_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21613_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env){
return (function (p1__21614_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21614_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__21616,map__21616__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(1),null);
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_23025 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_23025,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_23031 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_23031,args)),(((mfa_23031 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_23031,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var G__21642 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__21641 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__21641.cljs$core$IFn$_invoke$arity$1 ? fexpr__21641.cljs$core$IFn$_invoke$arity$1(G__21642) : fexpr__21641.call(null,G__21642));
} else {
return and__4120__auto__;
}
})())){
var fprop_23054 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_23054," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_23054,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_23054," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_23054,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__21644){
var map__21645 = p__21644;
var map__21645__$1 = (((((!((map__21645 == null))))?(((((map__21645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21645):map__21645);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21645__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21645__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21645__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__21648){
var map__21649 = p__21648;
var map__21649__$1 = (((((!((map__21649 == null))))?(((((map__21649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21649):map__21649);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target," = ",val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__21654 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__21654__$1 = (((((!((map__21654 == null))))?(((((map__21654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21654):map__21654);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__21655 = options;
var map__21655__$1 = (((((!((map__21655 == null))))?(((((map__21655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21655):map__21655);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21655__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__21656 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__21662 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__21662__$1 = (((((!((map__21662 == null))))?(((((map__21662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21662):map__21662);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21656,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21656,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__21664_23087 = cljs.core.seq(libs_to_load);
var chunk__21665_23088 = null;
var count__21666_23089 = (0);
var i__21667_23090 = (0);
while(true){
if((i__21667_23090 < count__21666_23089)){
var lib_23091 = chunk__21665_23088.cljs$core$IIndexed$_nth$arity$2(null,i__21667_23090);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_23091)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23091),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23091),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23091),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23091),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_23091,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23091),"');");
}

}
}
}


var G__23094 = seq__21664_23087;
var G__23095 = chunk__21665_23088;
var G__23096 = count__21666_23089;
var G__23097 = (i__21667_23090 + (1));
seq__21664_23087 = G__23094;
chunk__21665_23088 = G__23095;
count__21666_23089 = G__23096;
i__21667_23090 = G__23097;
continue;
} else {
var temp__5735__auto___23098 = cljs.core.seq(seq__21664_23087);
if(temp__5735__auto___23098){
var seq__21664_23099__$1 = temp__5735__auto___23098;
if(cljs.core.chunked_seq_QMARK_(seq__21664_23099__$1)){
var c__4550__auto___23100 = cljs.core.chunk_first(seq__21664_23099__$1);
var G__23102 = cljs.core.chunk_rest(seq__21664_23099__$1);
var G__23103 = c__4550__auto___23100;
var G__23104 = cljs.core.count(c__4550__auto___23100);
var G__23105 = (0);
seq__21664_23087 = G__23102;
chunk__21665_23088 = G__23103;
count__21666_23089 = G__23104;
i__21667_23090 = G__23105;
continue;
} else {
var lib_23110 = cljs.core.first(seq__21664_23099__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_23110)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23110),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23110),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_23110),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23110),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_23110,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_23110),"');");
}

}
}
}


var G__23112 = cljs.core.next(seq__21664_23099__$1);
var G__23113 = null;
var G__23114 = (0);
var G__23115 = (0);
seq__21664_23087 = G__23112;
chunk__21665_23088 = G__23113;
count__21666_23089 = G__23114;
i__21667_23090 = G__23115;
continue;
}
} else {
}
}
break;
}

var seq__21676_23116 = cljs.core.seq(node_libs);
var chunk__21677_23117 = null;
var count__21678_23118 = (0);
var i__21679_23119 = (0);
while(true){
if((i__21679_23119 < count__21678_23118)){
var lib_23120 = chunk__21677_23117.cljs$core$IIndexed$_nth$arity$2(null,i__21679_23119);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_23120)," = require('",lib_23120,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__23121 = seq__21676_23116;
var G__23122 = chunk__21677_23117;
var G__23123 = count__21678_23118;
var G__23124 = (i__21679_23119 + (1));
seq__21676_23116 = G__23121;
chunk__21677_23117 = G__23122;
count__21678_23118 = G__23123;
i__21679_23119 = G__23124;
continue;
} else {
var temp__5735__auto___23125 = cljs.core.seq(seq__21676_23116);
if(temp__5735__auto___23125){
var seq__21676_23126__$1 = temp__5735__auto___23125;
if(cljs.core.chunked_seq_QMARK_(seq__21676_23126__$1)){
var c__4550__auto___23127 = cljs.core.chunk_first(seq__21676_23126__$1);
var G__23128 = cljs.core.chunk_rest(seq__21676_23126__$1);
var G__23129 = c__4550__auto___23127;
var G__23130 = cljs.core.count(c__4550__auto___23127);
var G__23131 = (0);
seq__21676_23116 = G__23128;
chunk__21677_23117 = G__23129;
count__21678_23118 = G__23130;
i__21679_23119 = G__23131;
continue;
} else {
var lib_23132 = cljs.core.first(seq__21676_23126__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_23132)," = require('",lib_23132,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__23133 = cljs.core.next(seq__21676_23126__$1);
var G__23134 = null;
var G__23135 = (0);
var G__23136 = (0);
seq__21676_23116 = G__23133;
chunk__21677_23117 = G__23134;
count__21678_23118 = G__23135;
i__21679_23119 = G__23136;
continue;
}
} else {
}
}
break;
}

var seq__21683_23137 = cljs.core.seq(global_exports_libs);
var chunk__21684_23138 = null;
var count__21685_23139 = (0);
var i__21686_23140 = (0);
while(true){
if((i__21686_23140 < count__21685_23139)){
var lib_23141 = chunk__21684_23138.cljs$core$IIndexed$_nth$arity$2(null,i__21686_23140);
var map__21693_23142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_23141));
var map__21693_23143__$1 = (((((!((map__21693_23142 == null))))?(((((map__21693_23142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21693_23142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21693_23142):map__21693_23142);
var global_exports_23144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693_23143__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_23144,lib_23141);


var G__23145 = seq__21683_23137;
var G__23146 = chunk__21684_23138;
var G__23147 = count__21685_23139;
var G__23148 = (i__21686_23140 + (1));
seq__21683_23137 = G__23145;
chunk__21684_23138 = G__23146;
count__21685_23139 = G__23147;
i__21686_23140 = G__23148;
continue;
} else {
var temp__5735__auto___23149 = cljs.core.seq(seq__21683_23137);
if(temp__5735__auto___23149){
var seq__21683_23150__$1 = temp__5735__auto___23149;
if(cljs.core.chunked_seq_QMARK_(seq__21683_23150__$1)){
var c__4550__auto___23151 = cljs.core.chunk_first(seq__21683_23150__$1);
var G__23152 = cljs.core.chunk_rest(seq__21683_23150__$1);
var G__23153 = c__4550__auto___23151;
var G__23154 = cljs.core.count(c__4550__auto___23151);
var G__23155 = (0);
seq__21683_23137 = G__23152;
chunk__21684_23138 = G__23153;
count__21685_23139 = G__23154;
i__21686_23140 = G__23155;
continue;
} else {
var lib_23156 = cljs.core.first(seq__21683_23150__$1);
var map__21696_23159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_23156));
var map__21696_23160__$1 = (((((!((map__21696_23159 == null))))?(((((map__21696_23159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21696_23159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21696_23159):map__21696_23159);
var global_exports_23161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696_23160__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_23161,lib_23156);


var G__23163 = cljs.core.next(seq__21683_23150__$1);
var G__23164 = null;
var G__23165 = (0);
var G__23166 = (0);
seq__21683_23137 = G__23163;
chunk__21684_23138 = G__23164;
count__21685_23139 = G__23165;
i__21686_23140 = G__23166;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__21698){
var map__21699 = p__21698;
var map__21699__$1 = (((((!((map__21699 == null))))?(((((map__21699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21699):map__21699);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__21701){
var map__21702 = p__21701;
var map__21702__$1 = (((((!((map__21702 == null))))?(((((map__21702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21702):map__21702);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__21705){
var map__21706 = p__21705;
var map__21706__$1 = (((((!((map__21706 == null))))?(((((map__21706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21706):map__21706);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__21708_23222 = cljs.core.seq(protocols);
var chunk__21709_23223 = null;
var count__21710_23224 = (0);
var i__21711_23225 = (0);
while(true){
if((i__21711_23225 < count__21710_23224)){
var protocol_23227 = chunk__21709_23223.cljs$core$IIndexed$_nth$arity$2(null,i__21711_23225);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23227)),"}");


var G__23229 = seq__21708_23222;
var G__23230 = chunk__21709_23223;
var G__23231 = count__21710_23224;
var G__23232 = (i__21711_23225 + (1));
seq__21708_23222 = G__23229;
chunk__21709_23223 = G__23230;
count__21710_23224 = G__23231;
i__21711_23225 = G__23232;
continue;
} else {
var temp__5735__auto___23233 = cljs.core.seq(seq__21708_23222);
if(temp__5735__auto___23233){
var seq__21708_23234__$1 = temp__5735__auto___23233;
if(cljs.core.chunked_seq_QMARK_(seq__21708_23234__$1)){
var c__4550__auto___23235 = cljs.core.chunk_first(seq__21708_23234__$1);
var G__23236 = cljs.core.chunk_rest(seq__21708_23234__$1);
var G__23237 = c__4550__auto___23235;
var G__23238 = cljs.core.count(c__4550__auto___23235);
var G__23239 = (0);
seq__21708_23222 = G__23236;
chunk__21709_23223 = G__23237;
count__21710_23224 = G__23238;
i__21711_23225 = G__23239;
continue;
} else {
var protocol_23240 = cljs.core.first(seq__21708_23234__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23240)),"}");


var G__23243 = cljs.core.next(seq__21708_23234__$1);
var G__23244 = null;
var G__23245 = (0);
var G__23246 = (0);
seq__21708_23222 = G__23243;
chunk__21709_23223 = G__23244;
count__21710_23224 = G__23245;
i__21711_23225 = G__23246;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__21712_23251 = cljs.core.seq(fields__$1);
var chunk__21713_23252 = null;
var count__21714_23253 = (0);
var i__21715_23254 = (0);
while(true){
if((i__21715_23254 < count__21714_23253)){
var fld_23255 = chunk__21713_23252.cljs$core$IIndexed$_nth$arity$2(null,i__21715_23254);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_23255," = ",fld_23255,";");


var G__23256 = seq__21712_23251;
var G__23257 = chunk__21713_23252;
var G__23258 = count__21714_23253;
var G__23259 = (i__21715_23254 + (1));
seq__21712_23251 = G__23256;
chunk__21713_23252 = G__23257;
count__21714_23253 = G__23258;
i__21715_23254 = G__23259;
continue;
} else {
var temp__5735__auto___23261 = cljs.core.seq(seq__21712_23251);
if(temp__5735__auto___23261){
var seq__21712_23262__$1 = temp__5735__auto___23261;
if(cljs.core.chunked_seq_QMARK_(seq__21712_23262__$1)){
var c__4550__auto___23263 = cljs.core.chunk_first(seq__21712_23262__$1);
var G__23264 = cljs.core.chunk_rest(seq__21712_23262__$1);
var G__23265 = c__4550__auto___23263;
var G__23266 = cljs.core.count(c__4550__auto___23263);
var G__23267 = (0);
seq__21712_23251 = G__23264;
chunk__21713_23252 = G__23265;
count__21714_23253 = G__23266;
i__21715_23254 = G__23267;
continue;
} else {
var fld_23277 = cljs.core.first(seq__21712_23262__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_23277," = ",fld_23277,";");


var G__23278 = cljs.core.next(seq__21712_23262__$1);
var G__23279 = null;
var G__23280 = (0);
var G__23281 = (0);
seq__21712_23251 = G__23278;
chunk__21713_23252 = G__23279;
count__21714_23253 = G__23280;
i__21715_23254 = G__23281;
continue;
}
} else {
}
}
break;
}

var seq__21719_23282 = cljs.core.seq(pmasks);
var chunk__21720_23283 = null;
var count__21721_23284 = (0);
var i__21722_23285 = (0);
while(true){
if((i__21722_23285 < count__21721_23284)){
var vec__21734_23286 = chunk__21720_23283.cljs$core$IIndexed$_nth$arity$2(null,i__21722_23285);
var pno_23287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21734_23286,(0),null);
var pmask_23288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21734_23286,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_23287,"$ = ",pmask_23288,";");


var G__23291 = seq__21719_23282;
var G__23292 = chunk__21720_23283;
var G__23293 = count__21721_23284;
var G__23294 = (i__21722_23285 + (1));
seq__21719_23282 = G__23291;
chunk__21720_23283 = G__23292;
count__21721_23284 = G__23293;
i__21722_23285 = G__23294;
continue;
} else {
var temp__5735__auto___23295 = cljs.core.seq(seq__21719_23282);
if(temp__5735__auto___23295){
var seq__21719_23296__$1 = temp__5735__auto___23295;
if(cljs.core.chunked_seq_QMARK_(seq__21719_23296__$1)){
var c__4550__auto___23297 = cljs.core.chunk_first(seq__21719_23296__$1);
var G__23298 = cljs.core.chunk_rest(seq__21719_23296__$1);
var G__23299 = c__4550__auto___23297;
var G__23300 = cljs.core.count(c__4550__auto___23297);
var G__23301 = (0);
seq__21719_23282 = G__23298;
chunk__21720_23283 = G__23299;
count__21721_23284 = G__23300;
i__21722_23285 = G__23301;
continue;
} else {
var vec__21737_23302 = cljs.core.first(seq__21719_23296__$1);
var pno_23303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737_23302,(0),null);
var pmask_23304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737_23302,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_23303,"$ = ",pmask_23304,";");


var G__23305 = cljs.core.next(seq__21719_23296__$1);
var G__23306 = null;
var G__23307 = (0);
var G__23308 = (0);
seq__21719_23282 = G__23305;
chunk__21720_23283 = G__23306;
count__21721_23284 = G__23307;
i__21722_23285 = G__23308;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__21742){
var map__21743 = p__21742;
var map__21743__$1 = (((((!((map__21743 == null))))?(((((map__21743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21743):map__21743);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__21749_23319 = cljs.core.seq(protocols);
var chunk__21750_23320 = null;
var count__21751_23321 = (0);
var i__21752_23322 = (0);
while(true){
if((i__21752_23322 < count__21751_23321)){
var protocol_23323 = chunk__21750_23320.cljs$core$IIndexed$_nth$arity$2(null,i__21752_23322);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23323)),"}");


var G__23324 = seq__21749_23319;
var G__23325 = chunk__21750_23320;
var G__23326 = count__21751_23321;
var G__23327 = (i__21752_23322 + (1));
seq__21749_23319 = G__23324;
chunk__21750_23320 = G__23325;
count__21751_23321 = G__23326;
i__21752_23322 = G__23327;
continue;
} else {
var temp__5735__auto___23329 = cljs.core.seq(seq__21749_23319);
if(temp__5735__auto___23329){
var seq__21749_23334__$1 = temp__5735__auto___23329;
if(cljs.core.chunked_seq_QMARK_(seq__21749_23334__$1)){
var c__4550__auto___23335 = cljs.core.chunk_first(seq__21749_23334__$1);
var G__23338 = cljs.core.chunk_rest(seq__21749_23334__$1);
var G__23339 = c__4550__auto___23335;
var G__23340 = cljs.core.count(c__4550__auto___23335);
var G__23341 = (0);
seq__21749_23319 = G__23338;
chunk__21750_23320 = G__23339;
count__21751_23321 = G__23340;
i__21752_23322 = G__23341;
continue;
} else {
var protocol_23344 = cljs.core.first(seq__21749_23334__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_23344)),"}");


var G__23345 = cljs.core.next(seq__21749_23334__$1);
var G__23346 = null;
var G__23347 = (0);
var G__23348 = (0);
seq__21749_23319 = G__23345;
chunk__21750_23320 = G__23346;
count__21751_23321 = G__23347;
i__21752_23322 = G__23348;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__21756_23350 = cljs.core.seq(fields__$1);
var chunk__21757_23351 = null;
var count__21758_23352 = (0);
var i__21759_23353 = (0);
while(true){
if((i__21759_23353 < count__21758_23352)){
var fld_23354 = chunk__21757_23351.cljs$core$IIndexed$_nth$arity$2(null,i__21759_23353);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_23354," = ",fld_23354,";");


var G__23355 = seq__21756_23350;
var G__23356 = chunk__21757_23351;
var G__23357 = count__21758_23352;
var G__23358 = (i__21759_23353 + (1));
seq__21756_23350 = G__23355;
chunk__21757_23351 = G__23356;
count__21758_23352 = G__23357;
i__21759_23353 = G__23358;
continue;
} else {
var temp__5735__auto___23359 = cljs.core.seq(seq__21756_23350);
if(temp__5735__auto___23359){
var seq__21756_23360__$1 = temp__5735__auto___23359;
if(cljs.core.chunked_seq_QMARK_(seq__21756_23360__$1)){
var c__4550__auto___23361 = cljs.core.chunk_first(seq__21756_23360__$1);
var G__23362 = cljs.core.chunk_rest(seq__21756_23360__$1);
var G__23363 = c__4550__auto___23361;
var G__23364 = cljs.core.count(c__4550__auto___23361);
var G__23365 = (0);
seq__21756_23350 = G__23362;
chunk__21757_23351 = G__23363;
count__21758_23352 = G__23364;
i__21759_23353 = G__23365;
continue;
} else {
var fld_23366 = cljs.core.first(seq__21756_23360__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_23366," = ",fld_23366,";");


var G__23367 = cljs.core.next(seq__21756_23360__$1);
var G__23368 = null;
var G__23369 = (0);
var G__23370 = (0);
seq__21756_23350 = G__23367;
chunk__21757_23351 = G__23368;
count__21758_23352 = G__23369;
i__21759_23353 = G__23370;
continue;
}
} else {
}
}
break;
}

var seq__21760_23374 = cljs.core.seq(pmasks);
var chunk__21761_23375 = null;
var count__21762_23376 = (0);
var i__21763_23377 = (0);
while(true){
if((i__21763_23377 < count__21762_23376)){
var vec__21784_23379 = chunk__21761_23375.cljs$core$IIndexed$_nth$arity$2(null,i__21763_23377);
var pno_23380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21784_23379,(0),null);
var pmask_23381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21784_23379,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_23380,"$ = ",pmask_23381,";");


var G__23382 = seq__21760_23374;
var G__23383 = chunk__21761_23375;
var G__23384 = count__21762_23376;
var G__23385 = (i__21763_23377 + (1));
seq__21760_23374 = G__23382;
chunk__21761_23375 = G__23383;
count__21762_23376 = G__23384;
i__21763_23377 = G__23385;
continue;
} else {
var temp__5735__auto___23388 = cljs.core.seq(seq__21760_23374);
if(temp__5735__auto___23388){
var seq__21760_23389__$1 = temp__5735__auto___23388;
if(cljs.core.chunked_seq_QMARK_(seq__21760_23389__$1)){
var c__4550__auto___23390 = cljs.core.chunk_first(seq__21760_23389__$1);
var G__23391 = cljs.core.chunk_rest(seq__21760_23389__$1);
var G__23392 = c__4550__auto___23390;
var G__23393 = cljs.core.count(c__4550__auto___23390);
var G__23394 = (0);
seq__21760_23374 = G__23391;
chunk__21761_23375 = G__23392;
count__21762_23376 = G__23393;
i__21763_23377 = G__23394;
continue;
} else {
var vec__21792_23395 = cljs.core.first(seq__21760_23389__$1);
var pno_23396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21792_23395,(0),null);
var pmask_23397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21792_23395,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_23396,"$ = ",pmask_23397,";");


var G__23398 = cljs.core.next(seq__21760_23389__$1);
var G__23399 = null;
var G__23400 = (0);
var G__23401 = (0);
seq__21760_23374 = G__23398;
chunk__21761_23375 = G__23399;
count__21762_23376 = G__23400;
i__21763_23377 = G__23401;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__21807){
var map__21808 = p__21807;
var map__21808__$1 = (((((!((map__21808 == null))))?(((((map__21808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21808):map__21808);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__21819){
var map__21820 = p__21819;
var map__21820__$1 = (((((!((map__21820 == null))))?(((((map__21820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21820):map__21820);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21820__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21820__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21820__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21820__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
var G__21822 = clojure.string.trim(code);
var G__21823 = "/*";
return goog.string.startsWith(G__21822,G__21823);
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__11730__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11730__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__21831 = cljs.core.seq(table);
var chunk__21832 = null;
var count__21833 = (0);
var i__21834 = (0);
while(true){
if((i__21834 < count__21833)){
var vec__21846 = chunk__21832.cljs$core$IIndexed$_nth$arity$2(null,i__21834);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21846,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21846,(1),null);
var ns_23411 = cljs.core.namespace(sym);
var name_23412 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__23413 = seq__21831;
var G__23414 = chunk__21832;
var G__23415 = count__21833;
var G__23416 = (i__21834 + (1));
seq__21831 = G__23413;
chunk__21832 = G__23414;
count__21833 = G__23415;
i__21834 = G__23416;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__21831);
if(temp__5735__auto__){
var seq__21831__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21831__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21831__$1);
var G__23417 = cljs.core.chunk_rest(seq__21831__$1);
var G__23418 = c__4550__auto__;
var G__23419 = cljs.core.count(c__4550__auto__);
var G__23420 = (0);
seq__21831 = G__23417;
chunk__21832 = G__23418;
count__21833 = G__23419;
i__21834 = G__23420;
continue;
} else {
var vec__21857 = cljs.core.first(seq__21831__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21857,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21857,(1),null);
var ns_23423 = cljs.core.namespace(sym);
var name_23424 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__23425 = cljs.core.next(seq__21831__$1);
var G__23426 = null;
var G__23427 = (0);
var G__23428 = (0);
seq__21831 = G__23425;
chunk__21832 = G__23426;
count__21833 = G__23427;
i__21834 = G__23428;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__21869 = arguments.length;
switch (G__21869) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_23433 = cljs.core.first(ks);
var vec__21884_23434 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_23433);
var top_23435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21884_23434,(0),null);
var prefix_SINGLEQUOTE__23436 = vec__21884_23434;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_23433)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__23436) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_23435)) || (cljs.core.contains_QMARK_(known_externs,top_23435)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__23436)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_23435);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__23436)),";");
}
} else {
}

var m_23437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_23433);
if(cljs.core.empty_QMARK_(m_23437)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__23436,m_23437,top_level,known_externs);
}

var G__23438 = cljs.core.next(ks);
ks = G__23438;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

