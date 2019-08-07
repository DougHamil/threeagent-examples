goog.provide('golf.host');
golf.host.my_comp = (function golf$host$my_comp(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sphere","sphere",384337120),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(-10)], null)], null)], null);
});
golf.host.ball = (function golf$host$ball(radius){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"physics-body","physics-body",-2046459230),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shape","shape",1190694006),"sphere",new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"mass","mass",-2138950046),60.0,new cljs.core.Keyword(null,"friction","friction",-1603603910),0.05,new cljs.core.Keyword(null,"restitution","restitution",364735539),0.2,new cljs.core.Keyword(null,"rollingFriction","rollingFriction",124269020),0.0], null)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sphere","sphere",384337120),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"width-segments","width-segments",25187827),(18),new cljs.core.Keyword(null,"height-segments","height-segments",1831894149),(18),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(16742178)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-added","on-added",-54041858),(function (o){
o.castShadow = true;

return o.receiveShadow = true;
})], null))], null);
});
golf.host.output = (function golf$host$output(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-48),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [golf.host.ball,(5)], null)], null);
});
