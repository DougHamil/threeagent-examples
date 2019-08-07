goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16059){
var vec__16060 = p__16059;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16060,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__16069 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16069,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__16084 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(4),null);
var vec__16087 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16087,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16087,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16087,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16087,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16087,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__16092 = segmap;
var map__16092__$1 = (((((!((map__16092 == null))))?(((((map__16092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16092):map__16092);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16092__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16092__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16092__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16092__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16092,map__16092__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16092,map__16092__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16092,map__16092__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__16092,map__16092__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16092,map__16092__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__16092,map__16092__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__16105 = arguments.length;
switch (G__16105) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__16111 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__17545 = cljs.core.next(segs__$1);
var G__17546 = nrelseg;
var G__17547 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__17545;
relseg__$1 = G__17546;
result__$1 = G__17547;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(1),null);
var G__17548 = (gline + (1));
var G__17549 = cljs.core.next(lines__$1);
var G__17550 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__17551 = result__$1;
gline = G__17548;
lines__$1 = G__17549;
relseg = G__17550;
result = G__17551;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__16120 = segmap;
var map__16120__$1 = (((((!((map__16120 == null))))?(((((map__16120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16120):map__16120);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16120,map__16120__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__16120,map__16120__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__16119_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16119_SHARP_,d__$1);
});})(map__16120,map__16120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__16120,map__16120__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__16145 = arguments.length;
switch (G__16145) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__16166 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__17581 = cljs.core.next(segs__$1);
var G__17582 = nrelseg;
var G__17583 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__17581;
relseg__$1 = G__17582;
result__$1 = G__17583;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16166,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16166,(1),null);
var G__17587 = (gline + (1));
var G__17588 = cljs.core.next(lines__$1);
var G__17589 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__17590 = result__$1;
gline = G__17587;
lines__$1 = G__17588;
relseg = G__17589;
result = G__17590;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__16176){
var vec__16180 = p__16176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16180,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__16184){
var vec__16185 = p__16184;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16185,(4),null);
var seg = vec__16185;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__16185,gcol,sidx,line,col,name,seg,relseg){
return (function (p__16194){
var vec__16197 = p__16194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16197,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16197,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16197,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16197,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16197,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__16185,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__16208 = cljs.core.seq(infos);
var chunk__16209 = null;
var count__16210 = (0);
var i__16211 = (0);
while(true){
if((i__16211 < count__16210)){
var info = chunk__16209.cljs$core$IIndexed$_nth$arity$2(null,i__16211);
var segv_17601 = info__GT_segv(info,source_idx,line,col);
var gline_17602 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_17603 = cljs.core.count(cljs.core.deref(lines));
if((gline_17602 > (lc_17603 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16208,chunk__16209,count__16210,i__16211,segv_17601,gline_17602,lc_17603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_17602 - (lc_17603 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_17601], null));
});})(seq__16208,chunk__16209,count__16210,i__16211,segv_17601,gline_17602,lc_17603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16208,chunk__16209,count__16210,i__16211,segv_17601,gline_17602,lc_17603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17602], null),cljs.core.conj,segv_17601);
});})(seq__16208,chunk__16209,count__16210,i__16211,segv_17601,gline_17602,lc_17603,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__17610 = seq__16208;
var G__17611 = chunk__16209;
var G__17612 = count__16210;
var G__17613 = (i__16211 + (1));
seq__16208 = G__17610;
chunk__16209 = G__17611;
count__16210 = G__17612;
i__16211 = G__17613;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16208);
if(temp__5735__auto__){
var seq__16208__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16208__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__16208__$1);
var G__17620 = cljs.core.chunk_rest(seq__16208__$1);
var G__17621 = c__4550__auto__;
var G__17622 = cljs.core.count(c__4550__auto__);
var G__17623 = (0);
seq__16208 = G__17620;
chunk__16209 = G__17621;
count__16210 = G__17622;
i__16211 = G__17623;
continue;
} else {
var info = cljs.core.first(seq__16208__$1);
var segv_17624 = info__GT_segv(info,source_idx,line,col);
var gline_17625 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_17626 = cljs.core.count(cljs.core.deref(lines));
if((gline_17625 > (lc_17626 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16208,chunk__16209,count__16210,i__16211,segv_17624,gline_17625,lc_17626,info,seq__16208__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_17625 - (lc_17626 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_17624], null));
});})(seq__16208,chunk__16209,count__16210,i__16211,segv_17624,gline_17625,lc_17626,info,seq__16208__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__16208,chunk__16209,count__16210,i__16211,segv_17624,gline_17625,lc_17626,info,seq__16208__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17625], null),cljs.core.conj,segv_17624);
});})(seq__16208,chunk__16209,count__16210,i__16211,segv_17624,gline_17625,lc_17626,info,seq__16208__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__17627 = cljs.core.next(seq__16208__$1);
var G__17628 = null;
var G__17629 = (0);
var G__17630 = (0);
seq__16208 = G__17627;
chunk__16209 = G__17628;
count__16210 = G__17629;
i__16211 = G__17630;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__16225_17631 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__16226_17632 = null;
var count__16227_17633 = (0);
var i__16228_17634 = (0);
while(true){
if((i__16228_17634 < count__16227_17633)){
var vec__16446_17635 = chunk__16226_17632.cljs$core$IIndexed$_nth$arity$2(null,i__16228_17634);
var source_idx_17636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16446_17635,(0),null);
var vec__16449_17637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16446_17635,(1),null);
var __17638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16449_17637,(0),null);
var lines_17639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16449_17637,(1),null);
var seq__16453_17640 = cljs.core.seq(lines_17639__$1);
var chunk__16454_17641 = null;
var count__16455_17642 = (0);
var i__16456_17643 = (0);
while(true){
if((i__16456_17643 < count__16455_17642)){
var vec__16513_17644 = chunk__16454_17641.cljs$core$IIndexed$_nth$arity$2(null,i__16456_17643);
var line_17645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513_17644,(0),null);
var cols_17646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16513_17644,(1),null);
var seq__16516_17647 = cljs.core.seq(cols_17646);
var chunk__16517_17648 = null;
var count__16518_17649 = (0);
var i__16519_17650 = (0);
while(true){
if((i__16519_17650 < count__16518_17649)){
var vec__16527_17651 = chunk__16517_17648.cljs$core$IIndexed$_nth$arity$2(null,i__16519_17650);
var col_17652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16527_17651,(0),null);
var infos_17653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16527_17651,(1),null);
encode_cols(infos_17653,source_idx_17636,line_17645,col_17652);


var G__17655 = seq__16516_17647;
var G__17656 = chunk__16517_17648;
var G__17657 = count__16518_17649;
var G__17658 = (i__16519_17650 + (1));
seq__16516_17647 = G__17655;
chunk__16517_17648 = G__17656;
count__16518_17649 = G__17657;
i__16519_17650 = G__17658;
continue;
} else {
var temp__5735__auto___17659 = cljs.core.seq(seq__16516_17647);
if(temp__5735__auto___17659){
var seq__16516_17661__$1 = temp__5735__auto___17659;
if(cljs.core.chunked_seq_QMARK_(seq__16516_17661__$1)){
var c__4550__auto___17662 = cljs.core.chunk_first(seq__16516_17661__$1);
var G__17663 = cljs.core.chunk_rest(seq__16516_17661__$1);
var G__17664 = c__4550__auto___17662;
var G__17665 = cljs.core.count(c__4550__auto___17662);
var G__17666 = (0);
seq__16516_17647 = G__17663;
chunk__16517_17648 = G__17664;
count__16518_17649 = G__17665;
i__16519_17650 = G__17666;
continue;
} else {
var vec__16531_17667 = cljs.core.first(seq__16516_17661__$1);
var col_17668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16531_17667,(0),null);
var infos_17669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16531_17667,(1),null);
encode_cols(infos_17669,source_idx_17636,line_17645,col_17668);


var G__17670 = cljs.core.next(seq__16516_17661__$1);
var G__17671 = null;
var G__17672 = (0);
var G__17673 = (0);
seq__16516_17647 = G__17670;
chunk__16517_17648 = G__17671;
count__16518_17649 = G__17672;
i__16519_17650 = G__17673;
continue;
}
} else {
}
}
break;
}


var G__17674 = seq__16453_17640;
var G__17675 = chunk__16454_17641;
var G__17676 = count__16455_17642;
var G__17677 = (i__16456_17643 + (1));
seq__16453_17640 = G__17674;
chunk__16454_17641 = G__17675;
count__16455_17642 = G__17676;
i__16456_17643 = G__17677;
continue;
} else {
var temp__5735__auto___17678 = cljs.core.seq(seq__16453_17640);
if(temp__5735__auto___17678){
var seq__16453_17679__$1 = temp__5735__auto___17678;
if(cljs.core.chunked_seq_QMARK_(seq__16453_17679__$1)){
var c__4550__auto___17680 = cljs.core.chunk_first(seq__16453_17679__$1);
var G__17681 = cljs.core.chunk_rest(seq__16453_17679__$1);
var G__17682 = c__4550__auto___17680;
var G__17683 = cljs.core.count(c__4550__auto___17680);
var G__17684 = (0);
seq__16453_17640 = G__17681;
chunk__16454_17641 = G__17682;
count__16455_17642 = G__17683;
i__16456_17643 = G__17684;
continue;
} else {
var vec__16534_17688 = cljs.core.first(seq__16453_17679__$1);
var line_17689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16534_17688,(0),null);
var cols_17690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16534_17688,(1),null);
var seq__16537_17691 = cljs.core.seq(cols_17690);
var chunk__16538_17692 = null;
var count__16539_17693 = (0);
var i__16540_17694 = (0);
while(true){
if((i__16540_17694 < count__16539_17693)){
var vec__16548_17695 = chunk__16538_17692.cljs$core$IIndexed$_nth$arity$2(null,i__16540_17694);
var col_17696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548_17695,(0),null);
var infos_17697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548_17695,(1),null);
encode_cols(infos_17697,source_idx_17636,line_17689,col_17696);


var G__17698 = seq__16537_17691;
var G__17699 = chunk__16538_17692;
var G__17700 = count__16539_17693;
var G__17701 = (i__16540_17694 + (1));
seq__16537_17691 = G__17698;
chunk__16538_17692 = G__17699;
count__16539_17693 = G__17700;
i__16540_17694 = G__17701;
continue;
} else {
var temp__5735__auto___17702__$1 = cljs.core.seq(seq__16537_17691);
if(temp__5735__auto___17702__$1){
var seq__16537_17703__$1 = temp__5735__auto___17702__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16537_17703__$1)){
var c__4550__auto___17704 = cljs.core.chunk_first(seq__16537_17703__$1);
var G__17705 = cljs.core.chunk_rest(seq__16537_17703__$1);
var G__17706 = c__4550__auto___17704;
var G__17707 = cljs.core.count(c__4550__auto___17704);
var G__17708 = (0);
seq__16537_17691 = G__17705;
chunk__16538_17692 = G__17706;
count__16539_17693 = G__17707;
i__16540_17694 = G__17708;
continue;
} else {
var vec__16551_17709 = cljs.core.first(seq__16537_17703__$1);
var col_17710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16551_17709,(0),null);
var infos_17711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16551_17709,(1),null);
encode_cols(infos_17711,source_idx_17636,line_17689,col_17710);


var G__17712 = cljs.core.next(seq__16537_17703__$1);
var G__17713 = null;
var G__17714 = (0);
var G__17715 = (0);
seq__16537_17691 = G__17712;
chunk__16538_17692 = G__17713;
count__16539_17693 = G__17714;
i__16540_17694 = G__17715;
continue;
}
} else {
}
}
break;
}


var G__17716 = cljs.core.next(seq__16453_17679__$1);
var G__17717 = null;
var G__17718 = (0);
var G__17719 = (0);
seq__16453_17640 = G__17716;
chunk__16454_17641 = G__17717;
count__16455_17642 = G__17718;
i__16456_17643 = G__17719;
continue;
}
} else {
}
}
break;
}


var G__17720 = seq__16225_17631;
var G__17721 = chunk__16226_17632;
var G__17722 = count__16227_17633;
var G__17723 = (i__16228_17634 + (1));
seq__16225_17631 = G__17720;
chunk__16226_17632 = G__17721;
count__16227_17633 = G__17722;
i__16228_17634 = G__17723;
continue;
} else {
var temp__5735__auto___17729 = cljs.core.seq(seq__16225_17631);
if(temp__5735__auto___17729){
var seq__16225_17731__$1 = temp__5735__auto___17729;
if(cljs.core.chunked_seq_QMARK_(seq__16225_17731__$1)){
var c__4550__auto___17732 = cljs.core.chunk_first(seq__16225_17731__$1);
var G__17733 = cljs.core.chunk_rest(seq__16225_17731__$1);
var G__17734 = c__4550__auto___17732;
var G__17735 = cljs.core.count(c__4550__auto___17732);
var G__17736 = (0);
seq__16225_17631 = G__17733;
chunk__16226_17632 = G__17734;
count__16227_17633 = G__17735;
i__16228_17634 = G__17736;
continue;
} else {
var vec__16555_17737 = cljs.core.first(seq__16225_17731__$1);
var source_idx_17738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16555_17737,(0),null);
var vec__16558_17739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16555_17737,(1),null);
var __17740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16558_17739,(0),null);
var lines_17741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16558_17739,(1),null);
var seq__16561_17747 = cljs.core.seq(lines_17741__$1);
var chunk__16562_17748 = null;
var count__16563_17749 = (0);
var i__16564_17750 = (0);
while(true){
if((i__16564_17750 < count__16563_17749)){
var vec__16614_17751 = chunk__16562_17748.cljs$core$IIndexed$_nth$arity$2(null,i__16564_17750);
var line_17752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16614_17751,(0),null);
var cols_17753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16614_17751,(1),null);
var seq__16617_17754 = cljs.core.seq(cols_17753);
var chunk__16618_17755 = null;
var count__16619_17756 = (0);
var i__16620_17757 = (0);
while(true){
if((i__16620_17757 < count__16619_17756)){
var vec__16630_17758 = chunk__16618_17755.cljs$core$IIndexed$_nth$arity$2(null,i__16620_17757);
var col_17759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630_17758,(0),null);
var infos_17760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630_17758,(1),null);
encode_cols(infos_17760,source_idx_17738,line_17752,col_17759);


var G__17761 = seq__16617_17754;
var G__17762 = chunk__16618_17755;
var G__17763 = count__16619_17756;
var G__17764 = (i__16620_17757 + (1));
seq__16617_17754 = G__17761;
chunk__16618_17755 = G__17762;
count__16619_17756 = G__17763;
i__16620_17757 = G__17764;
continue;
} else {
var temp__5735__auto___17765__$1 = cljs.core.seq(seq__16617_17754);
if(temp__5735__auto___17765__$1){
var seq__16617_17766__$1 = temp__5735__auto___17765__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16617_17766__$1)){
var c__4550__auto___17767 = cljs.core.chunk_first(seq__16617_17766__$1);
var G__17768 = cljs.core.chunk_rest(seq__16617_17766__$1);
var G__17769 = c__4550__auto___17767;
var G__17770 = cljs.core.count(c__4550__auto___17767);
var G__17771 = (0);
seq__16617_17754 = G__17768;
chunk__16618_17755 = G__17769;
count__16619_17756 = G__17770;
i__16620_17757 = G__17771;
continue;
} else {
var vec__16636_17772 = cljs.core.first(seq__16617_17766__$1);
var col_17773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16636_17772,(0),null);
var infos_17774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16636_17772,(1),null);
encode_cols(infos_17774,source_idx_17738,line_17752,col_17773);


var G__17775 = cljs.core.next(seq__16617_17766__$1);
var G__17776 = null;
var G__17777 = (0);
var G__17778 = (0);
seq__16617_17754 = G__17775;
chunk__16618_17755 = G__17776;
count__16619_17756 = G__17777;
i__16620_17757 = G__17778;
continue;
}
} else {
}
}
break;
}


var G__17779 = seq__16561_17747;
var G__17780 = chunk__16562_17748;
var G__17781 = count__16563_17749;
var G__17782 = (i__16564_17750 + (1));
seq__16561_17747 = G__17779;
chunk__16562_17748 = G__17780;
count__16563_17749 = G__17781;
i__16564_17750 = G__17782;
continue;
} else {
var temp__5735__auto___17783__$1 = cljs.core.seq(seq__16561_17747);
if(temp__5735__auto___17783__$1){
var seq__16561_17784__$1 = temp__5735__auto___17783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16561_17784__$1)){
var c__4550__auto___17785 = cljs.core.chunk_first(seq__16561_17784__$1);
var G__17786 = cljs.core.chunk_rest(seq__16561_17784__$1);
var G__17787 = c__4550__auto___17785;
var G__17788 = cljs.core.count(c__4550__auto___17785);
var G__17789 = (0);
seq__16561_17747 = G__17786;
chunk__16562_17748 = G__17787;
count__16563_17749 = G__17788;
i__16564_17750 = G__17789;
continue;
} else {
var vec__16640_17790 = cljs.core.first(seq__16561_17784__$1);
var line_17791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16640_17790,(0),null);
var cols_17792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16640_17790,(1),null);
var seq__16645_17793 = cljs.core.seq(cols_17792);
var chunk__16646_17794 = null;
var count__16647_17795 = (0);
var i__16648_17796 = (0);
while(true){
if((i__16648_17796 < count__16647_17795)){
var vec__16659_17797 = chunk__16646_17794.cljs$core$IIndexed$_nth$arity$2(null,i__16648_17796);
var col_17798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16659_17797,(0),null);
var infos_17799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16659_17797,(1),null);
encode_cols(infos_17799,source_idx_17738,line_17791,col_17798);


var G__17800 = seq__16645_17793;
var G__17801 = chunk__16646_17794;
var G__17802 = count__16647_17795;
var G__17803 = (i__16648_17796 + (1));
seq__16645_17793 = G__17800;
chunk__16646_17794 = G__17801;
count__16647_17795 = G__17802;
i__16648_17796 = G__17803;
continue;
} else {
var temp__5735__auto___17804__$2 = cljs.core.seq(seq__16645_17793);
if(temp__5735__auto___17804__$2){
var seq__16645_17805__$1 = temp__5735__auto___17804__$2;
if(cljs.core.chunked_seq_QMARK_(seq__16645_17805__$1)){
var c__4550__auto___17806 = cljs.core.chunk_first(seq__16645_17805__$1);
var G__17807 = cljs.core.chunk_rest(seq__16645_17805__$1);
var G__17808 = c__4550__auto___17806;
var G__17809 = cljs.core.count(c__4550__auto___17806);
var G__17810 = (0);
seq__16645_17793 = G__17807;
chunk__16646_17794 = G__17808;
count__16647_17795 = G__17809;
i__16648_17796 = G__17810;
continue;
} else {
var vec__16665_17811 = cljs.core.first(seq__16645_17805__$1);
var col_17812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665_17811,(0),null);
var infos_17813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665_17811,(1),null);
encode_cols(infos_17813,source_idx_17738,line_17791,col_17812);


var G__17814 = cljs.core.next(seq__16645_17805__$1);
var G__17815 = null;
var G__17816 = (0);
var G__17817 = (0);
seq__16645_17793 = G__17814;
chunk__16646_17794 = G__17815;
count__16647_17795 = G__17816;
i__16648_17796 = G__17817;
continue;
}
} else {
}
}
break;
}


var G__17818 = cljs.core.next(seq__16561_17784__$1);
var G__17819 = null;
var G__17820 = (0);
var G__17821 = (0);
seq__16561_17747 = G__17818;
chunk__16562_17748 = G__17819;
count__16563_17749 = G__17820;
i__16564_17750 = G__17821;
continue;
}
} else {
}
}
break;
}


var G__17822 = cljs.core.next(seq__16225_17731__$1);
var G__17823 = null;
var G__17824 = (0);
var G__17825 = (0);
seq__16225_17631 = G__17822;
chunk__16226_17632 = G__17823;
count__16227_17633 = G__17824;
i__16228_17634 = G__17825;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__16669 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16205_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16205_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16206_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__16206_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__16207_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__16207_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__16672 = G__16669;
var G__16673_17826 = G__16672;
var G__16674_17827 = "sourcesContent";
var G__16675_17828 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__16673_17826,G__16674_17827,G__16675_17828);

return G__16672;
} else {
return G__16669;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__16681 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__16687 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16687,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16687,(1),null);
var G__17833 = cljs.core.next(col_map_seq);
var G__17834 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__16687,col,infos,vec__16681,line,col_map){
return (function (v,p__16695){
var map__16696 = p__16695;
var map__16696__$1 = (((((!((map__16696 == null))))?(((((map__16696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16696):map__16696);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__16687,col,infos,vec__16681,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__17833;
new_cols = G__17834;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__17835 = cljs.core.next(line_map_seq);
var G__17836 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__17835;
new_lines = G__17836;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__16703_17837 = cljs.core.seq(reverse_map);
var chunk__16704_17838 = null;
var count__16705_17839 = (0);
var i__16706_17840 = (0);
while(true){
if((i__16706_17840 < count__16705_17839)){
var vec__17126_17841 = chunk__16704_17838.cljs$core$IIndexed$_nth$arity$2(null,i__16706_17840);
var line_17842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17126_17841,(0),null);
var columns_17843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17126_17841,(1),null);
var seq__17129_17844 = cljs.core.seq(columns_17843);
var chunk__17130_17845 = null;
var count__17131_17846 = (0);
var i__17132_17847 = (0);
while(true){
if((i__17132_17847 < count__17131_17846)){
var vec__17235_17848 = chunk__17130_17845.cljs$core$IIndexed$_nth$arity$2(null,i__17132_17847);
var column_17849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17235_17848,(0),null);
var column_info_17850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17235_17848,(1),null);
var seq__17238_17854 = cljs.core.seq(column_info_17850);
var chunk__17239_17855 = null;
var count__17240_17856 = (0);
var i__17241_17857 = (0);
while(true){
if((i__17241_17857 < count__17240_17856)){
var map__17257_17858 = chunk__17239_17855.cljs$core$IIndexed$_nth$arity$2(null,i__17241_17857);
var map__17257_17859__$1 = (((((!((map__17257_17858 == null))))?(((((map__17257_17858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17257_17858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17257_17858):map__17257_17858);
var gline_17860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257_17859__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257_17859__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257_17859__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17860], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17238_17854,chunk__17239_17855,count__17240_17856,i__17241_17857,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17257_17858,map__17257_17859__$1,gline_17860,gcol_17861,name_17862,vec__17235_17848,column_17849,column_info_17850,vec__17126_17841,line_17842,columns_17843,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17861], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17842,new cljs.core.Keyword(null,"col","col",-1959363084),column_17849,new cljs.core.Keyword(null,"name","name",1843675177),name_17862], null));
});})(seq__17238_17854,chunk__17239_17855,count__17240_17856,i__17241_17857,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17257_17858,map__17257_17859__$1,gline_17860,gcol_17861,name_17862,vec__17235_17848,column_17849,column_info_17850,vec__17126_17841,line_17842,columns_17843,inverted))
,cljs.core.sorted_map()));


var G__17867 = seq__17238_17854;
var G__17868 = chunk__17239_17855;
var G__17869 = count__17240_17856;
var G__17870 = (i__17241_17857 + (1));
seq__17238_17854 = G__17867;
chunk__17239_17855 = G__17868;
count__17240_17856 = G__17869;
i__17241_17857 = G__17870;
continue;
} else {
var temp__5735__auto___17872 = cljs.core.seq(seq__17238_17854);
if(temp__5735__auto___17872){
var seq__17238_17876__$1 = temp__5735__auto___17872;
if(cljs.core.chunked_seq_QMARK_(seq__17238_17876__$1)){
var c__4550__auto___17877 = cljs.core.chunk_first(seq__17238_17876__$1);
var G__17878 = cljs.core.chunk_rest(seq__17238_17876__$1);
var G__17879 = c__4550__auto___17877;
var G__17880 = cljs.core.count(c__4550__auto___17877);
var G__17881 = (0);
seq__17238_17854 = G__17878;
chunk__17239_17855 = G__17879;
count__17240_17856 = G__17880;
i__17241_17857 = G__17881;
continue;
} else {
var map__17265_17882 = cljs.core.first(seq__17238_17876__$1);
var map__17265_17883__$1 = (((((!((map__17265_17882 == null))))?(((((map__17265_17882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17265_17882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17265_17882):map__17265_17882);
var gline_17884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17265_17883__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17265_17883__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17265_17883__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17884], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17238_17854,chunk__17239_17855,count__17240_17856,i__17241_17857,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17265_17882,map__17265_17883__$1,gline_17884,gcol_17885,name_17886,seq__17238_17876__$1,temp__5735__auto___17872,vec__17235_17848,column_17849,column_info_17850,vec__17126_17841,line_17842,columns_17843,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17885], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17842,new cljs.core.Keyword(null,"col","col",-1959363084),column_17849,new cljs.core.Keyword(null,"name","name",1843675177),name_17886], null));
});})(seq__17238_17854,chunk__17239_17855,count__17240_17856,i__17241_17857,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17265_17882,map__17265_17883__$1,gline_17884,gcol_17885,name_17886,seq__17238_17876__$1,temp__5735__auto___17872,vec__17235_17848,column_17849,column_info_17850,vec__17126_17841,line_17842,columns_17843,inverted))
,cljs.core.sorted_map()));


var G__17888 = cljs.core.next(seq__17238_17876__$1);
var G__17889 = null;
var G__17890 = (0);
var G__17891 = (0);
seq__17238_17854 = G__17888;
chunk__17239_17855 = G__17889;
count__17240_17856 = G__17890;
i__17241_17857 = G__17891;
continue;
}
} else {
}
}
break;
}


var G__17892 = seq__17129_17844;
var G__17893 = chunk__17130_17845;
var G__17894 = count__17131_17846;
var G__17895 = (i__17132_17847 + (1));
seq__17129_17844 = G__17892;
chunk__17130_17845 = G__17893;
count__17131_17846 = G__17894;
i__17132_17847 = G__17895;
continue;
} else {
var temp__5735__auto___17896 = cljs.core.seq(seq__17129_17844);
if(temp__5735__auto___17896){
var seq__17129_17897__$1 = temp__5735__auto___17896;
if(cljs.core.chunked_seq_QMARK_(seq__17129_17897__$1)){
var c__4550__auto___17898 = cljs.core.chunk_first(seq__17129_17897__$1);
var G__17899 = cljs.core.chunk_rest(seq__17129_17897__$1);
var G__17900 = c__4550__auto___17898;
var G__17901 = cljs.core.count(c__4550__auto___17898);
var G__17902 = (0);
seq__17129_17844 = G__17899;
chunk__17130_17845 = G__17900;
count__17131_17846 = G__17901;
i__17132_17847 = G__17902;
continue;
} else {
var vec__17274_17903 = cljs.core.first(seq__17129_17897__$1);
var column_17904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17274_17903,(0),null);
var column_info_17905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17274_17903,(1),null);
var seq__17277_17906 = cljs.core.seq(column_info_17905);
var chunk__17278_17907 = null;
var count__17279_17908 = (0);
var i__17280_17909 = (0);
while(true){
if((i__17280_17909 < count__17279_17908)){
var map__17306_17912 = chunk__17278_17907.cljs$core$IIndexed$_nth$arity$2(null,i__17280_17909);
var map__17306_17913__$1 = (((((!((map__17306_17912 == null))))?(((((map__17306_17912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17306_17912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17306_17912):map__17306_17912);
var gline_17914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17306_17913__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17306_17913__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17306_17913__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17914], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17277_17906,chunk__17278_17907,count__17279_17908,i__17280_17909,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17306_17912,map__17306_17913__$1,gline_17914,gcol_17915,name_17916,vec__17274_17903,column_17904,column_info_17905,seq__17129_17897__$1,temp__5735__auto___17896,vec__17126_17841,line_17842,columns_17843,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17915], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17842,new cljs.core.Keyword(null,"col","col",-1959363084),column_17904,new cljs.core.Keyword(null,"name","name",1843675177),name_17916], null));
});})(seq__17277_17906,chunk__17278_17907,count__17279_17908,i__17280_17909,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17306_17912,map__17306_17913__$1,gline_17914,gcol_17915,name_17916,vec__17274_17903,column_17904,column_info_17905,seq__17129_17897__$1,temp__5735__auto___17896,vec__17126_17841,line_17842,columns_17843,inverted))
,cljs.core.sorted_map()));


var G__17921 = seq__17277_17906;
var G__17922 = chunk__17278_17907;
var G__17923 = count__17279_17908;
var G__17924 = (i__17280_17909 + (1));
seq__17277_17906 = G__17921;
chunk__17278_17907 = G__17922;
count__17279_17908 = G__17923;
i__17280_17909 = G__17924;
continue;
} else {
var temp__5735__auto___17926__$1 = cljs.core.seq(seq__17277_17906);
if(temp__5735__auto___17926__$1){
var seq__17277_17930__$1 = temp__5735__auto___17926__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17277_17930__$1)){
var c__4550__auto___17931 = cljs.core.chunk_first(seq__17277_17930__$1);
var G__17932 = cljs.core.chunk_rest(seq__17277_17930__$1);
var G__17933 = c__4550__auto___17931;
var G__17934 = cljs.core.count(c__4550__auto___17931);
var G__17935 = (0);
seq__17277_17906 = G__17932;
chunk__17278_17907 = G__17933;
count__17279_17908 = G__17934;
i__17280_17909 = G__17935;
continue;
} else {
var map__17312_17944 = cljs.core.first(seq__17277_17930__$1);
var map__17312_17945__$1 = (((((!((map__17312_17944 == null))))?(((((map__17312_17944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17312_17944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17312_17944):map__17312_17944);
var gline_17946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17312_17945__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_17947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17312_17945__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_17948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17312_17945__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_17946], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17277_17906,chunk__17278_17907,count__17279_17908,i__17280_17909,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17312_17944,map__17312_17945__$1,gline_17946,gcol_17947,name_17948,seq__17277_17930__$1,temp__5735__auto___17926__$1,vec__17274_17903,column_17904,column_info_17905,seq__17129_17897__$1,temp__5735__auto___17896,vec__17126_17841,line_17842,columns_17843,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_17947], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17842,new cljs.core.Keyword(null,"col","col",-1959363084),column_17904,new cljs.core.Keyword(null,"name","name",1843675177),name_17948], null));
});})(seq__17277_17906,chunk__17278_17907,count__17279_17908,i__17280_17909,seq__17129_17844,chunk__17130_17845,count__17131_17846,i__17132_17847,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17312_17944,map__17312_17945__$1,gline_17946,gcol_17947,name_17948,seq__17277_17930__$1,temp__5735__auto___17926__$1,vec__17274_17903,column_17904,column_info_17905,seq__17129_17897__$1,temp__5735__auto___17896,vec__17126_17841,line_17842,columns_17843,inverted))
,cljs.core.sorted_map()));


var G__17962 = cljs.core.next(seq__17277_17930__$1);
var G__17963 = null;
var G__17964 = (0);
var G__17965 = (0);
seq__17277_17906 = G__17962;
chunk__17278_17907 = G__17963;
count__17279_17908 = G__17964;
i__17280_17909 = G__17965;
continue;
}
} else {
}
}
break;
}


var G__17966 = cljs.core.next(seq__17129_17897__$1);
var G__17967 = null;
var G__17968 = (0);
var G__17969 = (0);
seq__17129_17844 = G__17966;
chunk__17130_17845 = G__17967;
count__17131_17846 = G__17968;
i__17132_17847 = G__17969;
continue;
}
} else {
}
}
break;
}


var G__17971 = seq__16703_17837;
var G__17972 = chunk__16704_17838;
var G__17973 = count__16705_17839;
var G__17974 = (i__16706_17840 + (1));
seq__16703_17837 = G__17971;
chunk__16704_17838 = G__17972;
count__16705_17839 = G__17973;
i__16706_17840 = G__17974;
continue;
} else {
var temp__5735__auto___17983 = cljs.core.seq(seq__16703_17837);
if(temp__5735__auto___17983){
var seq__16703_17984__$1 = temp__5735__auto___17983;
if(cljs.core.chunked_seq_QMARK_(seq__16703_17984__$1)){
var c__4550__auto___17991 = cljs.core.chunk_first(seq__16703_17984__$1);
var G__17992 = cljs.core.chunk_rest(seq__16703_17984__$1);
var G__17993 = c__4550__auto___17991;
var G__17994 = cljs.core.count(c__4550__auto___17991);
var G__17995 = (0);
seq__16703_17837 = G__17992;
chunk__16704_17838 = G__17993;
count__16705_17839 = G__17994;
i__16706_17840 = G__17995;
continue;
} else {
var vec__17322_17996 = cljs.core.first(seq__16703_17984__$1);
var line_17997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17322_17996,(0),null);
var columns_17998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17322_17996,(1),null);
var seq__17325_17999 = cljs.core.seq(columns_17998);
var chunk__17326_18000 = null;
var count__17327_18001 = (0);
var i__17328_18002 = (0);
while(true){
if((i__17328_18002 < count__17327_18001)){
var vec__17409_18010 = chunk__17326_18000.cljs$core$IIndexed$_nth$arity$2(null,i__17328_18002);
var column_18011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17409_18010,(0),null);
var column_info_18012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17409_18010,(1),null);
var seq__17412_18013 = cljs.core.seq(column_info_18012);
var chunk__17413_18014 = null;
var count__17414_18015 = (0);
var i__17415_18016 = (0);
while(true){
if((i__17415_18016 < count__17414_18015)){
var map__17441_18017 = chunk__17413_18014.cljs$core$IIndexed$_nth$arity$2(null,i__17415_18016);
var map__17441_18018__$1 = (((((!((map__17441_18017 == null))))?(((((map__17441_18017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17441_18017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17441_18017):map__17441_18017);
var gline_18019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441_18018__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441_18018__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441_18018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18019], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17412_18013,chunk__17413_18014,count__17414_18015,i__17415_18016,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17441_18017,map__17441_18018__$1,gline_18019,gcol_18020,name_18021,vec__17409_18010,column_18011,column_info_18012,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18020], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17997,new cljs.core.Keyword(null,"col","col",-1959363084),column_18011,new cljs.core.Keyword(null,"name","name",1843675177),name_18021], null));
});})(seq__17412_18013,chunk__17413_18014,count__17414_18015,i__17415_18016,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17441_18017,map__17441_18018__$1,gline_18019,gcol_18020,name_18021,vec__17409_18010,column_18011,column_info_18012,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted))
,cljs.core.sorted_map()));


var G__18027 = seq__17412_18013;
var G__18028 = chunk__17413_18014;
var G__18029 = count__17414_18015;
var G__18030 = (i__17415_18016 + (1));
seq__17412_18013 = G__18027;
chunk__17413_18014 = G__18028;
count__17414_18015 = G__18029;
i__17415_18016 = G__18030;
continue;
} else {
var temp__5735__auto___18032__$1 = cljs.core.seq(seq__17412_18013);
if(temp__5735__auto___18032__$1){
var seq__17412_18035__$1 = temp__5735__auto___18032__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17412_18035__$1)){
var c__4550__auto___18036 = cljs.core.chunk_first(seq__17412_18035__$1);
var G__18037 = cljs.core.chunk_rest(seq__17412_18035__$1);
var G__18038 = c__4550__auto___18036;
var G__18039 = cljs.core.count(c__4550__auto___18036);
var G__18040 = (0);
seq__17412_18013 = G__18037;
chunk__17413_18014 = G__18038;
count__17414_18015 = G__18039;
i__17415_18016 = G__18040;
continue;
} else {
var map__17448_18041 = cljs.core.first(seq__17412_18035__$1);
var map__17448_18042__$1 = (((((!((map__17448_18041 == null))))?(((((map__17448_18041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17448_18041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17448_18041):map__17448_18041);
var gline_18043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448_18042__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448_18042__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448_18042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18043], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17412_18013,chunk__17413_18014,count__17414_18015,i__17415_18016,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17448_18041,map__17448_18042__$1,gline_18043,gcol_18044,name_18045,seq__17412_18035__$1,temp__5735__auto___18032__$1,vec__17409_18010,column_18011,column_info_18012,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18044], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17997,new cljs.core.Keyword(null,"col","col",-1959363084),column_18011,new cljs.core.Keyword(null,"name","name",1843675177),name_18045], null));
});})(seq__17412_18013,chunk__17413_18014,count__17414_18015,i__17415_18016,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17448_18041,map__17448_18042__$1,gline_18043,gcol_18044,name_18045,seq__17412_18035__$1,temp__5735__auto___18032__$1,vec__17409_18010,column_18011,column_info_18012,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted))
,cljs.core.sorted_map()));


var G__18057 = cljs.core.next(seq__17412_18035__$1);
var G__18058 = null;
var G__18059 = (0);
var G__18060 = (0);
seq__17412_18013 = G__18057;
chunk__17413_18014 = G__18058;
count__17414_18015 = G__18059;
i__17415_18016 = G__18060;
continue;
}
} else {
}
}
break;
}


var G__18061 = seq__17325_17999;
var G__18062 = chunk__17326_18000;
var G__18063 = count__17327_18001;
var G__18064 = (i__17328_18002 + (1));
seq__17325_17999 = G__18061;
chunk__17326_18000 = G__18062;
count__17327_18001 = G__18063;
i__17328_18002 = G__18064;
continue;
} else {
var temp__5735__auto___18065__$1 = cljs.core.seq(seq__17325_17999);
if(temp__5735__auto___18065__$1){
var seq__17325_18066__$1 = temp__5735__auto___18065__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17325_18066__$1)){
var c__4550__auto___18067 = cljs.core.chunk_first(seq__17325_18066__$1);
var G__18068 = cljs.core.chunk_rest(seq__17325_18066__$1);
var G__18069 = c__4550__auto___18067;
var G__18070 = cljs.core.count(c__4550__auto___18067);
var G__18071 = (0);
seq__17325_17999 = G__18068;
chunk__17326_18000 = G__18069;
count__17327_18001 = G__18070;
i__17328_18002 = G__18071;
continue;
} else {
var vec__17461_18072 = cljs.core.first(seq__17325_18066__$1);
var column_18073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17461_18072,(0),null);
var column_info_18074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17461_18072,(1),null);
var seq__17465_18075 = cljs.core.seq(column_info_18074);
var chunk__17466_18076 = null;
var count__17467_18077 = (0);
var i__17468_18078 = (0);
while(true){
if((i__17468_18078 < count__17467_18077)){
var map__17496_18079 = chunk__17466_18076.cljs$core$IIndexed$_nth$arity$2(null,i__17468_18078);
var map__17496_18080__$1 = (((((!((map__17496_18079 == null))))?(((((map__17496_18079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17496_18079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17496_18079):map__17496_18079);
var gline_18081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496_18080__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496_18080__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17496_18080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18081], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17465_18075,chunk__17466_18076,count__17467_18077,i__17468_18078,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17496_18079,map__17496_18080__$1,gline_18081,gcol_18082,name_18083,vec__17461_18072,column_18073,column_info_18074,seq__17325_18066__$1,temp__5735__auto___18065__$1,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18082], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17997,new cljs.core.Keyword(null,"col","col",-1959363084),column_18073,new cljs.core.Keyword(null,"name","name",1843675177),name_18083], null));
});})(seq__17465_18075,chunk__17466_18076,count__17467_18077,i__17468_18078,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17496_18079,map__17496_18080__$1,gline_18081,gcol_18082,name_18083,vec__17461_18072,column_18073,column_info_18074,seq__17325_18066__$1,temp__5735__auto___18065__$1,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted))
,cljs.core.sorted_map()));


var G__18084 = seq__17465_18075;
var G__18085 = chunk__17466_18076;
var G__18086 = count__17467_18077;
var G__18087 = (i__17468_18078 + (1));
seq__17465_18075 = G__18084;
chunk__17466_18076 = G__18085;
count__17467_18077 = G__18086;
i__17468_18078 = G__18087;
continue;
} else {
var temp__5735__auto___18088__$2 = cljs.core.seq(seq__17465_18075);
if(temp__5735__auto___18088__$2){
var seq__17465_18089__$1 = temp__5735__auto___18088__$2;
if(cljs.core.chunked_seq_QMARK_(seq__17465_18089__$1)){
var c__4550__auto___18090 = cljs.core.chunk_first(seq__17465_18089__$1);
var G__18091 = cljs.core.chunk_rest(seq__17465_18089__$1);
var G__18092 = c__4550__auto___18090;
var G__18093 = cljs.core.count(c__4550__auto___18090);
var G__18094 = (0);
seq__17465_18075 = G__18091;
chunk__17466_18076 = G__18092;
count__17467_18077 = G__18093;
i__17468_18078 = G__18094;
continue;
} else {
var map__17503_18095 = cljs.core.first(seq__17465_18089__$1);
var map__17503_18096__$1 = (((((!((map__17503_18095 == null))))?(((((map__17503_18095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17503_18095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17503_18095):map__17503_18095);
var gline_18097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503_18096__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_18098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503_18096__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_18099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17503_18096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_18097], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__17465_18075,chunk__17466_18076,count__17467_18077,i__17468_18078,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17503_18095,map__17503_18096__$1,gline_18097,gcol_18098,name_18099,seq__17465_18089__$1,temp__5735__auto___18088__$2,vec__17461_18072,column_18073,column_info_18074,seq__17325_18066__$1,temp__5735__auto___18065__$1,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_18098], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_17997,new cljs.core.Keyword(null,"col","col",-1959363084),column_18073,new cljs.core.Keyword(null,"name","name",1843675177),name_18099], null));
});})(seq__17465_18075,chunk__17466_18076,count__17467_18077,i__17468_18078,seq__17325_17999,chunk__17326_18000,count__17327_18001,i__17328_18002,seq__16703_17837,chunk__16704_17838,count__16705_17839,i__16706_17840,map__17503_18095,map__17503_18096__$1,gline_18097,gcol_18098,name_18099,seq__17465_18089__$1,temp__5735__auto___18088__$2,vec__17461_18072,column_18073,column_info_18074,seq__17325_18066__$1,temp__5735__auto___18065__$1,vec__17322_17996,line_17997,columns_17998,seq__16703_17984__$1,temp__5735__auto___17983,inverted))
,cljs.core.sorted_map()));


var G__18102 = cljs.core.next(seq__17465_18089__$1);
var G__18103 = null;
var G__18104 = (0);
var G__18105 = (0);
seq__17465_18075 = G__18102;
chunk__17466_18076 = G__18103;
count__17467_18077 = G__18104;
i__17468_18078 = G__18105;
continue;
}
} else {
}
}
break;
}


var G__18106 = cljs.core.next(seq__17325_18066__$1);
var G__18107 = null;
var G__18108 = (0);
var G__18109 = (0);
seq__17325_17999 = G__18106;
chunk__17326_18000 = G__18107;
count__17327_18001 = G__18108;
i__17328_18002 = G__18109;
continue;
}
} else {
}
}
break;
}


var G__18110 = cljs.core.next(seq__16703_17984__$1);
var G__18111 = null;
var G__18112 = (0);
var G__18113 = (0);
seq__16703_17837 = G__18110;
chunk__16704_17838 = G__18111;
count__16705_17839 = G__18112;
i__16706_17840 = G__18113;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
