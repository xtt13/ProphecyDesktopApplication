webpackJsonp([0],[/* 0 */
/***/
function(t,e,i){var a=i(3),n=i(23),s=i(13),r=i(14),o=i(19),l=function(t,e,i){var h,u,c,d,p=t&l.F,f=t&l.G,m=t&l.S,g=t&l.P,y=t&l.B,v=f?a:m?a[e]||(a[e]={}):(a[e]||{}).prototype,b=f?n:n[e]||(n[e]={}),w=b.prototype||(b.prototype={});f&&(i=e);for(h in i)
// contains in native
u=!p&&v&&void 0!==v[h],
// export native or passed
c=(u?v:i)[h],
// bind timers to global for call from export context
d=y&&u?o(c,a):g&&"function"==typeof c?o(Function.call,c):c,
// extend global
v&&r(v,h,c,t&l.U),
// export
b[h]!=c&&s(b,h,d),g&&w[h]!=c&&(w[h]=c)};a.core=n,
// type bitmap
l.F=1,// forced
l.G=2,// global
l.S=4,// static
l.P=8,// proto
l.B=16,// bind
l.W=32,// wrap
l.U=64,// safe
l.R=128,// real proto method for `library`
t.exports=l},/* 1 */
,/* 2 */
/***/
function(t,e,i){var a=i(5);t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},/* 3 */
/***/
function(t,e){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:// eslint-disable-next-line no-new-func
Function("return this")();"number"==typeof __g&&(__g=i)},/* 4 */
/***/
function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},/* 5 */
/***/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/* 6 */
/***/
function(t,e,i){var a=i(52)("wks"),n=i(34),s=i(3).Symbol,r="function"==typeof s;(t.exports=function(t){return a[t]||(a[t]=r&&s[t]||(r?s:n)("Symbol."+t))}).store=a},/* 7 */
/***/
function(t,e,i){
// Thank's IE8 for his funny defineProperty
t.exports=!i(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 8 */
/***/
function(t,e,i){var a=i(2),n=i(96),s=i(24),r=Object.defineProperty;e.f=i(7)?Object.defineProperty:function(t,e,i){if(a(t),e=s(e,!0),a(i),n)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},/* 9 */
/***/
function(t,e,i){
// 7.1.15 ToLength
var a=i(26),n=Math.min;t.exports=function(t){return t>0?n(a(t),9007199254740991):0}},/* 10 */
/***/
function(t,e,i){
// 7.1.13 ToObject(argument)
var a=i(25);t.exports=function(t){return Object(a(t))}},/* 11 */
/***/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/* 12 */
/***/
function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},/* 13 */
/***/
function(t,e,i){var a=i(8),n=i(33);t.exports=i(7)?function(t,e,i){return a.f(t,e,n(1,i))}:function(t,e,i){return t[e]=i,t}},/* 14 */
/***/
function(t,e,i){var a=i(3),n=i(13),s=i(12),r=i(34)("src"),o=Function.toString,l=(""+o).split("toString");i(23).inspectSource=function(t){return o.call(t)},(t.exports=function(t,e,i,o){var h="function"==typeof i;h&&(s(i,"name")||n(i,"name",e)),t[e]!==i&&(h&&(s(i,r)||n(i,r,t[e]?""+t[e]:l.join(String(e)))),t===a?t[e]=i:o?t[e]?t[e]=i:n(t,e,i):(delete t[e],n(t,e,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||o.call(this)})},/* 15 */
/***/
function(t,e,i){var a=i(0),n=i(4),s=i(25),r=/"/g,o=function(t,e,i,a){var n=String(s(t)),o="<"+e;return""!==i&&(o+=" "+i+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+n+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(o),a(a.P+a.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},/* 16 */
/***/
function(t,e,i){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var a=i(49),n=i(25);t.exports=function(t){return a(n(t))}},/* 17 */
/***/
function(t,e,i){var a=i(50),n=i(33),s=i(16),r=i(24),o=i(12),l=i(96),h=Object.getOwnPropertyDescriptor;e.f=i(7)?h:function(t,e){if(t=s(t),e=r(e,!0),l)try{return h(t,e)}catch(t){}if(o(t,e))return n(!a.f.call(t,e),t[e])}},/* 18 */
/***/
function(t,e,i){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var a=i(12),n=i(10),s=i(68)("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),a(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},/* 19 */
/***/
function(t,e,i){
// optional / simple context binding
var a=i(11);t.exports=function(t,e,i){if(a(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,a){return t.call(e,i,a)};case 3:return function(i,a,n){return t.call(e,i,a,n)}}return function(){return t.apply(e,arguments)}}},/* 20 */
/***/
function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},/* 21 */
/***/
function(t,e,i){"use strict";var a=i(4);t.exports=function(t,e){return!!t&&a(function(){
// eslint-disable-next-line no-useless-call
e?t.call(null,function(){},1):t.call(null)})}},/* 22 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),/*eslint no-undef: */
// Game Configuration Default w:580, h:280
e.default={phaserConfig:{
// width: 1400,
// height: 800,
// width: 900,
// height: 400,
//width: 790,
//height: 380,
width:580,height:280,multiTexture:!0,renderer:Phaser.WEBGL_MULTI,antialias:!0,
// enableDebug: false
enableDebug:!1},localStorageName:"prophecy",weather:!0,playerHealth:100,scaleRate:3,forceMobile:!1,night:!0,enemies:!0,startMap:"map1",secureLS:!1,devHour:11,devStartState:"Game",serviceWorker:!1,allowFastTravel:!1,buildMode:!1,showFPS:!0}},/* 23 */
/***/
function(t,e){var i=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=i)},/* 24 */
/***/
function(t,e,i){
// 7.1.1 ToPrimitive(input [, PreferredType])
var a=i(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){if(!a(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!a(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!a(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!a(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},/* 25 */
/***/
function(t,e){
// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/* 26 */
/***/
function(t,e){
// 7.1.4 ToInteger
var i=Math.ceil,a=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?a:i)(t)}},/* 27 */
/***/
function(t,e,i){
// most Object methods by ES6 should accept primitives
var a=i(0),n=i(23),s=i(4);t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],r={};r[t]=e(i),a(a.S+a.F*s(function(){i(1)}),"Object",r)}},/* 28 */
/***/
function(t,e,i){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var a=i(19),n=i(49),s=i(10),r=i(9),o=i(85);t.exports=function(t,e){var i=1==t,l=2==t,h=3==t,u=4==t,c=6==t,d=5==t||c,p=e||o;return function(e,o,f){for(var m,g,y=s(e),v=n(y),b=a(o,f,3),w=r(v.length),S=0,x=i?p(e,w):l?p(e,0):void 0;w>S;S++)if((d||S in v)&&(m=v[S],g=b(m,S,y),t))if(i)x[S]=g;else if(g)
// map
switch(t){case 3:return!0;// some
case 5:return m;// find
case 6:return S;// findIndex
case 2:x.push(m)}else if(u)return!1;return c?-1:h||u?u:x}}},/* 29 */
/***/
function(t,e,i){"use strict";if(i(7)){var a=i(35),n=i(3),s=i(4),r=i(0),o=i(62),l=i(91),h=i(19),u=i(41),c=i(33),d=i(13),p=i(43),f=i(26),m=i(9),g=i(122),y=i(37),v=i(24),b=i(12),w=i(51),S=i(5),x=i(10),k=i(82),P=i(38),_=i(18),T=i(39).f,M=i(84),E=i(34),O=i(6),B=i(28),D=i(53),A=i(60),C=i(87),I=i(46),L=i(57),F=i(40),R=i(86),q=i(112),j=i(8),N=i(17),G=j.f,V=N.f,K=n.RangeError,X=n.TypeError,U=n.Uint8Array,Y=Array.prototype,H=l.ArrayBuffer,W=l.DataView,Q=B(0),J=B(2),z=B(3),Z=B(4),$=B(5),tt=B(6),et=D(!0),it=D(!1),at=C.values,nt=C.keys,st=C.entries,rt=Y.lastIndexOf,ot=Y.reduce,lt=Y.reduceRight,ht=Y.join,ut=Y.sort,ct=Y.slice,dt=Y.toString,pt=Y.toLocaleString,ft=O("iterator"),mt=O("toStringTag"),gt=E("typed_constructor"),yt=E("def_constructor"),vt=o.CONSTR,bt=o.TYPED,wt=o.VIEW,St=B(1,function(t,e){return Tt(A(t,t[yt]),e)}),xt=s(function(){
// eslint-disable-next-line no-undef
return 1===new U(new Uint16Array([1]).buffer)[0]}),kt=!!U&&!!U.prototype.set&&s(function(){new U(1).set({})}),Pt=function(t,e){var i=f(t);if(i<0||i%e)throw K("Wrong offset!");return i},_t=function(t){if(S(t)&&bt in t)return t;throw X(t+" is not a typed array!")},Tt=function(t,e){if(!(S(t)&&gt in t))throw X("It is not a typed array constructor!");return new t(e)},Mt=function(t,e){return Et(A(t,t[yt]),e)},Et=function(t,e){for(var i=0,a=e.length,n=Tt(t,a);a>i;)n[i]=e[i++];return n},Ot=function(t,e,i){G(t,e,{get:function(){return this._d[i]}})},Bt=function(t){var e,i,a,n,s,r,o=x(t),l=arguments.length,u=l>1?arguments[1]:void 0,c=void 0!==u,d=M(o);if(void 0!=d&&!k(d)){for(r=d.call(o),a=[],e=0;!(s=r.next()).done;e++)a.push(s.value);o=a}for(c&&l>2&&(u=h(u,arguments[2],2)),e=0,i=m(o.length),n=Tt(this,i);i>e;e++)n[e]=c?u(o[e],e):o[e];return n},Dt=function(){for(var t=0,e=arguments.length,i=Tt(this,e);e>t;)i[t]=arguments[t++];return i},At=!!U&&s(function(){pt.call(new U(1))}),Ct=function(){return pt.apply(At?ct.call(_t(this)):_t(this),arguments)},It={copyWithin:function(t,e){return q.call(_t(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(_t(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){
// eslint-disable-line no-unused-vars
return R.apply(_t(this),arguments)},filter:function(t){return Mt(this,J(_t(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return $(_t(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(_t(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Q(_t(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return it(_t(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(_t(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){
// eslint-disable-line no-unused-vars
return ht.apply(_t(this),arguments)},lastIndexOf:function(t){
// eslint-disable-line no-unused-vars
return rt.apply(_t(this),arguments)},map:function(t){return St(_t(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){
// eslint-disable-line no-unused-vars
return ot.apply(_t(this),arguments)},reduceRight:function(t){
// eslint-disable-line no-unused-vars
return lt.apply(_t(this),arguments)},reverse:function(){for(var t,e=this,i=_t(e).length,a=Math.floor(i/2),n=0;n<a;)t=e[n],e[n++]=e[--i],e[i]=t;return e},some:function(t){return z(_t(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(_t(this),t)},subarray:function(t,e){var i=_t(this),a=i.length,n=y(t,a);return new(A(i,i[yt]))(i.buffer,i.byteOffset+n*i.BYTES_PER_ELEMENT,m((void 0===e?a:y(e,a))-n))}},Lt=function(t,e){return Mt(this,ct.call(_t(this),t,e))},Ft=function(t){_t(this);var e=Pt(arguments[1],1),i=this.length,a=x(t),n=m(a.length),s=0;if(n+e>i)throw K("Wrong length!");for(;s<n;)this[e+s]=a[s++]},Rt={entries:function(){return st.call(_t(this))},keys:function(){return nt.call(_t(this))},values:function(){return at.call(_t(this))}},qt=function(t,e){return S(t)&&t[bt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},jt=function(t,e){return qt(t,e=v(e,!0))?c(2,t[e]):V(t,e)},Nt=function(t,e,i){return!(qt(t,e=v(e,!0))&&S(i)&&b(i,"value"))||b(i,"get")||b(i,"set")||i.configurable||b(i,"writable")&&!i.writable||b(i,"enumerable")&&!i.enumerable?G(t,e,i):(t[e]=i.value,t)};vt||(N.f=jt,j.f=Nt),r(r.S+r.F*!vt,"Object",{getOwnPropertyDescriptor:jt,defineProperty:Nt}),s(function(){dt.call({})})&&(dt=pt=function(){return ht.call(this)});var Gt=p({},It);p(Gt,Rt),d(Gt,ft,Rt.values),p(Gt,{slice:Lt,set:Ft,constructor:function(){},toString:dt,toLocaleString:Ct}),Ot(Gt,"buffer","b"),Ot(Gt,"byteOffset","o"),Ot(Gt,"byteLength","l"),Ot(Gt,"length","e"),G(Gt,mt,{get:function(){return this[bt]}}),
// eslint-disable-next-line max-statements
t.exports=function(t,e,i,l){l=!!l;var h=t+(l?"Clamped":"")+"Array",c="get"+t,p="set"+t,f=n[h],y=f||{},v=f&&_(f),b=!f||!o.ABV,x={},k=f&&f.prototype,M=function(t,i){var a=t._d;return a.v[c](i*e+a.o,xt)},E=function(t,i,a){var n=t._d;l&&(a=(a=Math.round(a))<0?0:a>255?255:255&a),n.v[p](i*e+n.o,a,xt)},O=function(t,e){G(t,e,{get:function(){return M(this,e)},set:function(t){return E(this,e,t)},enumerable:!0})};b?(f=i(function(t,i,a,n){u(t,f,h,"_d");var s,r,o,l,c=0,p=0;if(S(i)){if(!(i instanceof H||"ArrayBuffer"==(l=w(i))||"SharedArrayBuffer"==l))return bt in i?Et(f,i):Bt.call(f,i);s=i,p=Pt(a,e);var y=i.byteLength;if(void 0===n){if(y%e)throw K("Wrong length!");if((r=y-p)<0)throw K("Wrong length!")}else if((r=m(n)*e)+p>y)throw K("Wrong length!");o=r/e}else o=g(i),r=o*e,s=new H(r);for(d(t,"_d",{b:s,o:p,l:r,e:o,v:new W(s)});c<o;)O(t,c++)}),k=f.prototype=P(Gt),d(k,"constructor",f)):s(function(){f(1)})&&s(function(){new f(-1)})&&L(function(t){new f,// eslint-disable-line no-new
new f(null),// eslint-disable-line no-new
new f(1.5),// eslint-disable-line no-new
new f(t)},!0)||(f=i(function(t,i,a,n){u(t,f,h);var s;
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
return S(i)?i instanceof H||"ArrayBuffer"==(s=w(i))||"SharedArrayBuffer"==s?void 0!==n?new y(i,Pt(a,e),n):void 0!==a?new y(i,Pt(a,e)):new y(i):bt in i?Et(f,i):Bt.call(f,i):new y(g(i))}),Q(v!==Function.prototype?T(y).concat(T(v)):T(y),function(t){t in f||d(f,t,y[t])}),f.prototype=k,a||(k.constructor=f));var B=k[ft],D=!!B&&("values"==B.name||void 0==B.name),A=Rt.values;d(f,gt,!0),d(k,bt,h),d(k,wt,!0),d(k,yt,f),(l?new f(1)[mt]==h:mt in k)||G(k,mt,{get:function(){return h}}),x[h]=f,r(r.G+r.W+r.F*(f!=y),x),r(r.S,h,{BYTES_PER_ELEMENT:e}),r(r.S+r.F*s(function(){y.of.call(f,1)}),h,{from:Bt,of:Dt}),"BYTES_PER_ELEMENT"in k||d(k,"BYTES_PER_ELEMENT",e),r(r.P,h,It),F(h),r(r.P+r.F*kt,h,{set:Ft}),r(r.P+r.F*!D,h,Rt),a||k.toString==dt||(k.toString=dt),r(r.P+r.F*s(function(){new f(1).slice()}),h,{slice:Lt}),r(r.P+r.F*(s(function(){return[1,2].toLocaleString()!=new f([1,2]).toLocaleString()})||!s(function(){k.toLocaleString.call([1,2])})),h,{toLocaleString:Ct}),I[h]=D?B:A,a||D||d(k,ft,A)}}else t.exports=function(){}},/* 30 */
/***/
function(t,e,i){var a=i(117),n=i(0),s=i(52)("metadata"),r=s.store||(s.store=new(i(120))),o=function(t,e,i){var n=r.get(t);if(!n){if(!i)return;r.set(t,n=new a)}var s=n.get(e);if(!s){if(!i)return;n.set(e,s=new a)}return s},l=function(t,e,i){var a=o(e,i,!1);return void 0!==a&&a.has(t)},h=function(t,e,i){var a=o(e,i,!1);return void 0===a?void 0:a.get(t)},u=function(t,e,i,a){o(i,a,!0).set(t,e)},c=function(t,e){var i=o(t,e,!1),a=[];return i&&i.forEach(function(t,e){a.push(e)}),a},d=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},p=function(t){n(n.S,"Reflect",t)};t.exports={store:r,map:o,has:l,get:h,set:u,keys:c,key:d,exp:p}},/* 31 */
/***/
function(t,e,i){var a=i(34)("meta"),n=i(5),s=i(12),r=i(8).f,o=0,l=Object.isExtensible||function(){return!0},h=!i(4)(function(){return l(Object.preventExtensions({}))}),u=function(t){r(t,a,{value:{i:"O"+ ++o,// object ID
w:{}}})},c=function(t,e){
// return primitive with prefix
if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,a)){
// can't set metadata to uncaught frozen object
if(!l(t))return"F";
// not necessary to add metadata
if(!e)return"E";
// add missing metadata
u(t)}return t[a].i},d=function(t,e){if(!s(t,a)){
// can't set metadata to uncaught frozen object
if(!l(t))return!0;
// not necessary to add metadata
if(!e)return!1;
// add missing metadata
u(t)}return t[a].w},p=function(t){return h&&f.NEED&&l(t)&&!s(t,a)&&u(t),t},f=t.exports={KEY:a,NEED:!1,fastKey:c,getWeak:d,onFreeze:p}},/* 32 */
/***/
function(t,e,i){
// 22.1.3.31 Array.prototype[@@unscopables]
var a=i(6)("unscopables"),n=Array.prototype;void 0==n[a]&&i(13)(n,a,{}),t.exports=function(t){n[a][t]=!0}},/* 33 */
/***/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/* 34 */
/***/
function(t,e){var i=0,a=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+a).toString(36))}},/* 35 */
/***/
function(t,e){t.exports=!1},/* 36 */
/***/
function(t,e,i){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var a=i(98),n=i(69);t.exports=Object.keys||function(t){return a(t,n)}},/* 37 */
/***/
function(t,e,i){var a=i(26),n=Math.max,s=Math.min;t.exports=function(t,e){return t=a(t),t<0?n(t+e,0):s(t,e)}},/* 38 */
/***/
function(t,e,i){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var a=i(2),n=i(99),s=i(69),r=i(68)("IE_PROTO"),o=function(){},l=function(){
// Thrash, waste and sodomy: IE GC bug
var t,e=i(66)("iframe"),a=s.length;for(e.style.display="none",i(70).appendChild(e),e.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;a--;)delete l.prototype[s[a]];return l()};t.exports=Object.create||function(t,e){var i;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==t?(o.prototype=a(t),i=new o,o.prototype=null,i[r]=t):i=l(),void 0===e?i:n(i,e)}},/* 39 */
/***/
function(t,e,i){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var a=i(98),n=i(69).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},/* 40 */
/***/
function(t,e,i){"use strict";var a=i(3),n=i(8),s=i(7),r=i(6)("species");t.exports=function(t){var e=a[t];s&&e&&!e[r]&&n.f(e,r,{configurable:!0,get:function(){return this}})}},/* 41 */
/***/
function(t,e){t.exports=function(t,e,i,a){if(!(t instanceof e)||void 0!==a&&a in t)throw TypeError(i+": incorrect invocation!");return t}},/* 42 */
/***/
function(t,e,i){var a=i(19),n=i(110),s=i(82),r=i(2),o=i(9),l=i(84),h={},u={},e=t.exports=function(t,e,i,c,d){var p,f,m,g,y=d?function(){return t}:l(t),v=a(i,c,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");
// fast case for arrays with default iterator
if(s(y)){for(p=o(t.length);p>b;b++)if((g=e?v(r(f=t[b])[0],f[1]):v(t[b]))===h||g===u)return g}else for(m=y.call(t);!(f=m.next()).done;)if((g=n(m,v,f.value,e))===h||g===u)return g};e.BREAK=h,e.RETURN=u},/* 43 */
/***/
function(t,e,i){var a=i(14);t.exports=function(t,e,i){for(var n in e)a(t,n,e[n],i);return t}},/* 44 */
/***/
function(t,e,i){var a=i(8).f,n=i(12),s=i(6)("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,s)&&a(t,s,{configurable:!0,value:e})}},/* 45 */
/***/
function(t,e,i){var a=i(0),n=i(25),s=i(4),r=i(72),o="["+r+"]",l="​",h=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,i){var n={},o=s(function(){return!!r[t]()||l[t]()!=l}),h=n[t]=o?e(d):r[t];i&&(n[i]=h),a(a.P+a.F*o,"String",n)},d=c.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},/* 46 */
/***/
function(t,e){t.exports={}},/* 47 */
/***/
function(t,e,i){var a=i(5);t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},/* 48 */
,/* 49 */
/***/
function(t,e,i){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var a=i(20);
// eslint-disable-next-line no-prototype-builtins
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==a(t)?t.split(""):Object(t)}},/* 50 */
/***/
function(t,e){e.f={}.propertyIsEnumerable},/* 51 */
/***/
function(t,e,i){
// getting tag from 19.1.3.6 Object.prototype.toString()
var a=i(20),n=i(6)("toStringTag"),s="Arguments"==a(function(){return arguments}()),r=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,i,o;// @@toStringTag case
// builtinTag case
// ES3 arguments fallback
return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=r(e=Object(t),n))?i:s?a(e):"Object"==(o=a(e))&&"function"==typeof e.callee?"Arguments":o}},/* 52 */
/***/
function(t,e,i){var a=i(3),n=a["__core-js_shared__"]||(a["__core-js_shared__"]={});t.exports=function(t){return n[t]||(n[t]={})}},/* 53 */
/***/
function(t,e,i){
// false -> Array#indexOf
// true  -> Array#includes
var a=i(16),n=i(9),s=i(37);t.exports=function(t){return function(e,i,r){var o,l=a(e),h=n(l.length),u=s(r,h);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(t&&i!=i){for(;h>u;)
// eslint-disable-next-line no-self-compare
if((o=l[u++])!=o)return!0}else for(;h>u;u++)if((t||u in l)&&l[u]===i)return t||u||0;return!t&&-1}}},/* 54 */
/***/
function(t,e){e.f=Object.getOwnPropertySymbols},/* 55 */
/***/
function(t,e,i){
// 7.2.2 IsArray(argument)
var a=i(20);t.exports=Array.isArray||function(t){return"Array"==a(t)}},/* 56 */
/***/
function(t,e,i){
// 7.2.8 IsRegExp(argument)
var a=i(5),n=i(20),s=i(6)("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},/* 57 */
/***/
function(t,e,i){var a=i(6)("iterator"),n=!1;try{var s=[7][a]();s.return=function(){n=!0},
// eslint-disable-next-line no-throw-literal
Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var i=!1;try{var s=[7],r=s[a]();r.next=function(){return{done:i=!0}},s[a]=function(){return r},t(s)}catch(t){}return i}},/* 58 */
/***/
function(t,e,i){"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var a=i(2);t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},/* 59 */
/***/
function(t,e,i){"use strict";var a=i(13),n=i(14),s=i(4),r=i(25),o=i(6);t.exports=function(t,e,i){var l=o(t),h=i(r,l,""[t]),u=h[0],c=h[1];s(function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})&&(n(String.prototype,t,u),a(RegExp.prototype,l,2==e?// 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
// 21.2.5.11 RegExp.prototype[@@split](string, limit)
function(t,e){return c.call(t,this,e)}:// 21.2.5.6 RegExp.prototype[@@match](string)
// 21.2.5.9 RegExp.prototype[@@search](string)
function(t){return c.call(t,this)}))}},/* 60 */
/***/
function(t,e,i){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var a=i(2),n=i(11),s=i(6)("species");t.exports=function(t,e){var i,r=a(t).constructor;return void 0===r||void 0==(i=a(r)[s])?e:n(i)}},/* 61 */
/***/
function(t,e,i){"use strict";var a=i(3),n=i(0),s=i(14),r=i(43),o=i(31),l=i(42),h=i(41),u=i(5),c=i(4),d=i(57),p=i(44),f=i(73);t.exports=function(t,e,i,m,g,y){var v=a[t],b=v,w=g?"set":"add",S=b&&b.prototype,x={},k=function(t){var e=S[t];s(S,t,"delete"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,i){return e.call(this,0===t?0:t,i),this})};if("function"==typeof b&&(y||S.forEach&&!c(function(){(new b).entries().next()}))){var P=new b,_=P[w](y?{}:-0,1)!=P,T=c(function(){P.has(1)}),M=d(function(t){new b(t)}),E=!y&&c(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var t=new b,e=5;e--;)t[w](e,e);return!t.has(-0)});M||(b=e(function(e,i){h(e,b,t);var a=f(new v,e,b);return void 0!=i&&l(i,g,a[w],a),a}),b.prototype=S,S.constructor=b),(T||E)&&(k("delete"),k("has"),g&&k("get")),(E||_)&&k(w),
// weak collections should not contains .clear method
y&&S.clear&&delete S.clear}else
// create collection constructor
b=m.getConstructor(e,t,g,w),r(b.prototype,i),o.NEED=!0;return p(b,t),x[t]=b,n(n.G+n.W+n.F*(b!=v),x),y||m.setStrong(b,t,g),b}},/* 62 */
/***/
function(t,e,i){for(var a,n=i(3),s=i(13),r=i(34),o=r("typed_array"),l=r("view"),h=!(!n.ArrayBuffer||!n.DataView),u=h,c=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");c<9;)(a=n[d[c++]])?(s(a.prototype,o,!0),s(a.prototype,l,!0)):u=!1;t.exports={ABV:h,CONSTR:u,TYPED:o,VIEW:l}},/* 63 */
/***/
function(t,e,i){"use strict";
// Forced replacement prototype accessors methods
t.exports=i(35)||!i(4)(function(){var t=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,t,function(){}),delete i(3)[t]})},/* 64 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var a=i(0);t.exports=function(t){a(a.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},/* 65 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var a=i(0),n=i(11),s=i(19),r=i(42);t.exports=function(t){a(a.S,t,{from:function(t){var e,i,a,o,l=arguments[1];return n(this),e=void 0!==l,e&&n(l),void 0==t?new this:(i=[],e?(a=0,o=s(l,arguments[2],2),r(t,!1,function(t){i.push(o(t,a++))})):r(t,!1,i.push,i),new this(i))}})}},/* 66 */
/***/
function(t,e,i){var a=i(5),n=i(3).document,s=a(n)&&a(n.createElement);t.exports=function(t){return s?n.createElement(t):{}}},/* 67 */
/***/
function(t,e,i){var a=i(3),n=i(23),s=i(35),r=i(97),o=i(8).f;t.exports=function(t){var e=n.Symbol||(n.Symbol=s?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:r.f(t)})}},/* 68 */
/***/
function(t,e,i){var a=i(52)("keys"),n=i(34);t.exports=function(t){return a[t]||(a[t]=n(t))}},/* 69 */
/***/
function(t,e){
// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 70 */
/***/
function(t,e,i){var a=i(3).document;t.exports=a&&a.documentElement},/* 71 */
/***/
function(t,e,i){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var a=i(5),n=i(2),s=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=i(19)(Function.call,i(17).f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:a(t,i),t}}({},!1):void 0),check:s}},/* 72 */
/***/
function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},/* 73 */
/***/
function(t,e,i){var a=i(5),n=i(71).set;t.exports=function(t,e,i){var s,r=e.constructor;return r!==i&&"function"==typeof r&&(s=r.prototype)!==i.prototype&&a(s)&&n&&n(t,s),t}},/* 74 */
/***/
function(t,e,i){"use strict";var a=i(26),n=i(25);t.exports=function(t){var e=String(n(this)),i="",s=a(t);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},/* 75 */
/***/
function(t,e){
// 20.2.2.28 Math.sign(x)
t.exports=Math.sign||function(t){
// eslint-disable-next-line no-self-compare
return 0==(t=+t)||t!=t?t:t<0?-1:1}},/* 76 */
/***/
function(t,e){
// 20.2.2.14 Math.expm1(x)
var i=Math.expm1;t.exports=!i||
// Old FF bug
i(10)>22025.465794806718||i(10)<22025.465794806718||
// Tor Browser bug
-2e-17!=i(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:i},/* 77 */
/***/
function(t,e,i){var a=i(26),n=i(25);
// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,i){var s,r,o=String(n(e)),l=a(i),h=o.length;return l<0||l>=h?t?"":void 0:(s=o.charCodeAt(l),s<55296||s>56319||l+1===h||(r=o.charCodeAt(l+1))<56320||r>57343?t?o.charAt(l):s:t?o.slice(l,l+2):r-56320+(s-55296<<10)+65536)}}},/* 78 */
/***/
function(t,e,i){"use strict";var a=i(35),n=i(0),s=i(14),r=i(13),o=i(12),l=i(46),h=i(79),u=i(44),c=i(18),d=i(6)("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,i,m,g,y,v){h(i,e,m);var b,w,S,x=function(t){if(!p&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},k=e+" Iterator",P="values"==g,_=!1,T=t.prototype,M=T[d]||T["@@iterator"]||g&&T[g],E=!p&&M||x(g),O=g?P?x("entries"):E:void 0,B="Array"==e?T.entries||M:M;if(
// Fix native
B&&(S=c(B.call(new t)))!==Object.prototype&&S.next&&(
// Set @@toStringTag to native iterators
u(S,k,!0),
// fix for some old engines
a||o(S,d)||r(S,d,f)),
// fix Array#{values, @@iterator}.name in V8 / FF
P&&M&&"values"!==M.name&&(_=!0,E=function(){return M.call(this)}),
// Define iterator
a&&!v||!p&&!_&&T[d]||r(T,d,E),
// Plug for library
l[e]=E,l[k]=f,g)if(b={values:P?E:x("values"),keys:y?E:x("keys"),entries:O},v)for(w in b)w in T||s(T,w,b[w]);else n(n.P+n.F*(p||_),e,b);return b}},/* 79 */
/***/
function(t,e,i){"use strict";var a=i(38),n=i(33),s=i(44),r={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
i(13)(r,i(6)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=a(r,{next:n(1,i)}),s(t,e+" Iterator")}},/* 80 */
/***/
function(t,e,i){
// helper for String#{startsWith, endsWith, includes}
var a=i(56),n=i(25);t.exports=function(t,e,i){if(a(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(t))}},/* 81 */
/***/
function(t,e,i){var a=i(6)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[a]=!1,!"/./"[t](e)}catch(t){}}return!0}},/* 82 */
/***/
function(t,e,i){
// check on default Array iterator
var a=i(46),n=i(6)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||s[n]===t)}},/* 83 */
/***/
function(t,e,i){"use strict";var a=i(8),n=i(33);t.exports=function(t,e,i){e in t?a.f(t,e,n(0,i)):t[e]=i}},/* 84 */
/***/
function(t,e,i){var a=i(51),n=i(6)("iterator"),s=i(46);t.exports=i(23).getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||s[a(t)]}},/* 85 */
/***/
function(t,e,i){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var a=i(232);t.exports=function(t,e){return new(a(t))(e)}},/* 86 */
/***/
function(t,e,i){"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var a=i(10),n=i(37),s=i(9);t.exports=function(t){for(var e=a(this),i=s(e.length),r=arguments.length,o=n(r>1?arguments[1]:void 0,i),l=r>2?arguments[2]:void 0,h=void 0===l?i:n(l,i);h>o;)e[o++]=t;return e}},/* 87 */
/***/
function(t,e,i){"use strict";var a=i(32),n=i(113),s=i(46),r=i(16);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
t.exports=i(78)(Array,"Array",function(t,e){this._t=r(t),// target
this._i=0,// next index
this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,n(1)):"keys"==e?n(0,i):"values"==e?n(0,t[i]):n(0,[i,t[i]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
s.Arguments=s.Array,a("keys"),a("values"),a("entries")},/* 88 */
/***/
function(t,e,i){var a,n,s,r=i(19),o=i(103),l=i(70),h=i(66),u=i(3),c=u.process,d=u.setImmediate,p=u.clearImmediate,f=u.MessageChannel,m=u.Dispatch,g=0,y={},v=function(){var t=+this;
// eslint-disable-next-line no-prototype-builtins
if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},b=function(t){v.call(t.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
d&&p||(d=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return y[++g]=function(){
// eslint-disable-next-line no-new-func
o("function"==typeof t?t:Function(t),e)},a(g),g},p=function(t){delete y[t]},
// Node.js 0.8-
"process"==i(20)(c)?a=function(t){c.nextTick(r(v,t,1))}:m&&m.now?a=function(t){m.now(r(v,t,1))}:f?(n=new f,s=n.port2,n.port1.onmessage=b,a=r(s.postMessage,s,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(a=function(t){u.postMessage(t+"","*")},u.addEventListener("message",b,!1)):a="onreadystatechange"in h("script")?function(t){l.appendChild(h("script")).onreadystatechange=function(){l.removeChild(this),v.call(t)}}:function(t){setTimeout(r(v,t,1),0)}),t.exports={set:d,clear:p}},/* 89 */
/***/
function(t,e,i){var a=i(3),n=i(88).set,s=a.MutationObserver||a.WebKitMutationObserver,r=a.process,o=a.Promise,l="process"==i(20)(r);t.exports=function(){var t,e,i,h=function(){var a,n;for(l&&(a=r.domain)&&a.exit();t;){n=t.fn,t=t.next;try{n()}catch(a){throw t?i():e=void 0,a}}e=void 0,a&&a.enter()};
// Node.js
if(l)i=function(){r.nextTick(h)};else if(!s||a.navigator&&a.navigator.standalone)if(o&&o.resolve){var u=o.resolve();i=function(){u.then(h)}}else i=function(){
// strange IE + webpack dev server bug - use .call(global)
n.call(a,h)};else{var c=!0,d=document.createTextNode("");new s(h).observe(d,{characterData:!0}),// eslint-disable-line no-new
i=function(){d.data=c=!c}}return function(a){var n={fn:a,next:void 0};e&&(e.next=n),t||(t=n,i()),e=n}}},/* 90 */
/***/
function(t,e,i){"use strict";function a(t){var e,i;this.promise=new t(function(t,a){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=a}),this.resolve=n(e),this.reject=n(i)}
// 25.4.1.5 NewPromiseCapability(C)
var n=i(11);t.exports.f=function(t){return new a(t)}},/* 91 */
/***/
function(t,e,i){"use strict";
// IEEE754 conversions based on https://github.com/feross/ieee754
function a(t,e,i){var a,n,s,r=new Array(i),o=8*i-e-1,l=(1<<o)-1,h=l>>1,u=23===e?q(2,-24)-q(2,-77):0,c=0,d=t<0||0===t&&1/t<0?1:0;for(t=R(t),
// eslint-disable-next-line no-self-compare
t!=t||t===L?(
// eslint-disable-next-line no-self-compare
n=t!=t?1:0,a=l):(a=j(N(t)/G),t*(s=q(2,-a))<1&&(a--,s*=2),t+=a+h>=1?u/s:u*q(2,1-h),t*s>=2&&(a++,s/=2),a+h>=l?(n=0,a=l):a+h>=1?(n=(t*s-1)*q(2,e),a+=h):(n=t*q(2,h-1)*q(2,e),a=0));e>=8;r[c++]=255&n,n/=256,e-=8);for(a=a<<e|n,o+=e;o>0;r[c++]=255&a,a/=256,o-=8);return r[--c]|=128*d,r}function n(t,e,i){var a,n=8*i-e-1,s=(1<<n)-1,r=s>>1,o=n-7,l=i-1,h=t[l--],u=127&h;for(h>>=7;o>0;u=256*u+t[l],l--,o-=8);for(a=u&(1<<-o)-1,u>>=-o,o+=e;o>0;a=256*a+t[l],l--,o-=8);if(0===u)u=1-r;else{if(u===s)return a?NaN:h?-L:L;a+=q(2,e),u-=r}return(h?-1:1)*a*q(2,u-e)}function s(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function r(t){return[255&t]}function o(t){return[255&t,t>>8&255]}function l(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function h(t){return a(t,52,8)}function u(t){return a(t,23,4)}function c(t,e,i){T(t[O],e,{get:function(){return this[i]}})}function d(t,e,i,a){var n=+i,s=P(n);if(s+e>t[K])throw I(B);var r=t[V]._b,o=s+t[X],l=r.slice(o,o+e);return a?l:l.reverse()}function p(t,e,i,a,n,s){var r=+i,o=P(r);if(o+e>t[K])throw I(B);for(var l=t[V]._b,h=o+t[X],u=a(+n),c=0;c<e;c++)l[h+c]=u[s?c:e-c-1]}var f=i(3),m=i(7),g=i(35),y=i(62),v=i(13),b=i(43),w=i(4),S=i(41),x=i(26),k=i(9),P=i(122),_=i(39).f,T=i(8).f,M=i(86),E=i(44),O="prototype",B="Wrong index!",D=f.ArrayBuffer,A=f.DataView,C=f.Math,I=f.RangeError,L=f.Infinity,F=D,R=C.abs,q=C.pow,j=C.floor,N=C.log,G=C.LN2,V=m?"_b":"buffer",K=m?"_l":"byteLength",X=m?"_o":"byteOffset";if(y.ABV){if(!w(function(){D(1)})||!w(function(){new D(-1)})||w(function(){// eslint-disable-line no-new
// eslint-disable-line no-new
// eslint-disable-line no-new
return new D,new D(1.5),new D(NaN),"ArrayBuffer"!=D.name})){D=function(t){return S(this,D),new F(P(t))};for(var U,Y=D[O]=F[O],H=_(F),W=0;H.length>W;)(U=H[W++])in D||v(D,U,F[U]);g||(Y.constructor=D)}
// iOS Safari 7.x bug
var Q=new A(new D(2)),J=A[O].setInt8;Q.setInt8(0,2147483648),Q.setInt8(1,2147483649),!Q.getInt8(0)&&Q.getInt8(1)||b(A[O],{setInt8:function(t,e){J.call(this,t,e<<24>>24)},setUint8:function(t,e){J.call(this,t,e<<24>>24)}},!0)}else D=function(t){S(this,D,"ArrayBuffer");var e=P(t);this._b=M.call(new Array(e),0),this[K]=e},A=function(t,e,i){S(this,A,"DataView"),S(t,D,"DataView");var a=t[K],n=x(e);if(n<0||n>a)throw I("Wrong offset!");if(i=void 0===i?a-n:k(i),n+i>a)throw I("Wrong length!");this[V]=t,this[X]=n,this[K]=i},m&&(c(D,"byteLength","_l"),c(A,"buffer","_b"),c(A,"byteLength","_l"),c(A,"byteOffset","_o")),b(A[O],{getInt8:function(t){return d(this,1,t)[0]<<24>>24},getUint8:function(t){return d(this,1,t)[0]},getInt16:function(t){var e=d(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=d(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return s(d(this,4,t,arguments[1]))},getUint32:function(t){return s(d(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return n(d(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return n(d(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){p(this,1,t,r,e)},setUint8:function(t,e){p(this,1,t,r,e)},setInt16:function(t,e){p(this,2,t,o,e,arguments[2])},setUint16:function(t,e){p(this,2,t,o,e,arguments[2])},setInt32:function(t,e){p(this,4,t,l,e,arguments[2])},setUint32:function(t,e){p(this,4,t,l,e,arguments[2])},setFloat32:function(t,e){p(this,4,t,u,e,arguments[2])},setFloat64:function(t,e){p(this,8,t,h,e,arguments[2])}});E(D,"ArrayBuffer"),E(A,"DataView"),v(A[O],y.VIEW,!0),e.ArrayBuffer=D,e.DataView=A},/* 92 */
/***/
function(t,e,i){var a=i(3),n=a.navigator;t.exports=n&&n.userAgent||""},/* 93 */
/***/
function(t,e){!function(t){function e(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=function(){function t(e,i){a(this,t),this.x=e||0,this.y=i||0}return n(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"equals",value:function(t){return t&&this.x===t.x&&this.y===t.y}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"normalized",value:function(){var e=this.length();return 0===e?new t(0,0):new t(this.x/e,this.y/e)}},{key:"perpendicular",value:function(){return new t(-this.y,this.x)}},{key:"rotated",value:function(e){var i=Math.cos(e),a=Math.sin(e);return new t(i*this.x+a*this.y,-a*this.x+i*this.y)}},{key:"plus",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"minus",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"perpDot",value:function(t){return this.x*t.y-this.y*t.x}},{key:"scale",value:function(e){return new t(this.x*e,this.y*e)}}]),t}();e.default=s},function(t,e,i){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),l=function(){function t(e,i,a,s){n(this,t),this.left=void 0===e?Number.POSITIVE_INFINITY:e,this.right=void 0===a?Number.NEGATIVE_INFINITY:a,this.top=void 0===i?Number.POSITIVE_INFINITY:i,this.bottom=void 0===s?Number.NEGATIVE_INFINITY:s}return s(t,[{key:"isEmpty",value:function(){return this.left>this.right||this.top>this.bottom}},{key:"width",value:function(){var t=this.right-this.left;return t>=0?t:NaN}},{key:"height",value:function(){var t=this.bottom-this.top;return t>=0?t:NaN}},{key:"centre",value:function(){return new o.default(.5*(this.left+this.right),.5*(this.top+this.bottom))}},{key:"containsPoint",value:function(t){return this.left<=t.x&&t.x<=this.right&&this.top<=t.y&&t.y<=this.bottom}},{key:"containsPoints",value:function(t){var e=!0,i=!1,a=void 0;try{for(var n,s=t[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var r=n.value;if(!this.containsPoint(r))return!1}}catch(t){i=!0,a=t}finally{try{!e&&s.return&&s.return()}finally{if(i)throw a}}return!0}},{key:"intersects",value:function(t){return this.left<=t.right&&this.right>=t.left&&this.top<=t.bottom&&this.bottom>=t.top}},{key:"translated",value:function(e){return new t(this.left+e.x,this.top+e.y,this.right+e.x,this.bottom+e.y)}}],[{key:"fromPoints",value:function(e){var i=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(i=Math.min.apply(Math,a(e.map(function(t){return t.x}))),n=Math.min.apply(Math,a(e.map(function(t){return t.y}))),s=Math.max.apply(Math,a(e.map(function(t){return t.x}))),r=Math.max.apply(Math,a(e.map(function(t){return t.y})))):(i=e.x,n=e.y,s=e.x,r=e.y),new t(i,n,s,r)}},{key:"fromAABBs",value:function(e){var i=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(i=Math.min.apply(Math,a(e.map(function(t){return t.left}))),n=Math.min.apply(Math,a(e.map(function(t){return t.top}))),s=Math.max.apply(Math,a(e.map(function(t){return t.right}))),r=Math.max.apply(Math,a(e.map(function(t){return t.bottom})))):(i=Math.min(i,aabb.left),n=Math.min(n,aabb.top),s=Math.max(s,aabb.right),r=Math.max(r,aabb.bottom)),new t(i,n,s,r)}}]),t}();e.default=l},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(9),l=a(o),h=i(0),u=a(h),c=i(1),d=a(c),p=i(3),f=a(p),m=function(t){return t.reduce(function(t,e){return t+e},0)/t.length},g=function(t,e,i,a){if(t>i)throw new Error("Right must be greater than Left");if(e>a)throw new Error("Bottom must be greater than Top")},y=function(){function t(e){s(this,t),this.vertices=e,this.recompute()}return r(t,[{key:"recompute",value:function(){var t=this.vertices;if(this.aabb=d.default.fromPoints(t),this.edges=[],this.normals=[],this.count=t.length,this.centre=new u.default(m(t.map(function(t){return t.x})),m(t.map(function(t){return t.y}))),this.count>1)for(var e=0;e<this.count;e++){var i=(e+1)%this.count,a=t[i].minus(t[e]);this.edges.push(a);var n=a.normalized().perpendicular(),s=t[e].minus(this.centre);s.dot(n)<0&&(n=n.scale(-1)),this.normals.push(n)}}},{key:"isValid",value:function(){if(this.count<4)return!0;for(var t=0,e=0;e<this.count;e++){var i=(e+1)%this.count,a=this.edges[e].perpDot(this.edges[i]);if(a*t<0)return!1;t=a}return!0}},{key:"projectOntoAxis",value:function(t){var e=new f.default,i=!0,a=!1,n=void 0;try{for(var s,r=this.vertices[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var o=s.value,l=o.dot(t);e.extendTo(l)}}catch(t){a=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(a)throw n}}return e}},{key:"rotated",value:function(e){var i=[],a=!0,n=!1,s=void 0;try{for(var r,o=this.vertices[Symbol.iterator]();!(a=(r=o.next()).done);a=!0){var l=r.value,h=new u.default(l.x,l.y).minus(this.centre),c=h.rotated(e),d=this.centre.plus(c);i.push(d)}}catch(t){n=!0,s=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw s}}return new t(i)}},{key:"translated",value:function(e){return new t(this.vertices.map(function(t){return t.plus(e)}))}}],[{key:"fromRectangle",value:function(e,i,a,n){return g(e,i,a,n),new t([new u.default(e,i),new u.default(a,i),new u.default(a,n),new u.default(e,n)])}},{key:"fromCapsule",value:function(e,i,a,s,r){if(r<3)throw new Error("Specify at least 3 cap segments");g(e,i,a,s);var o=a-e;if(s-i<o)throw new Error("Capsule height must be larger than width");var l=.5*o,h=[].concat(n(Array(r).keys())).map(function(t){return-t*Math.PI/r}),c=.5*(e+a),d=h.map(function(t){return new u.default(Math.cos(t),Math.sin(t)).scale(l)}),p=new u.default(c,i+l),f=d.map(function(t){return p.plus(t)});f.push(new u.default(e,p.y));var m=new u.default(c,s-l);return f=f.concat(d.map(function(t){return m.minus(t)})),f.push(new u.default(a,m.y)),new t(f)}},{key:"generateConvexPolygons",value:function(e){var i=e.map(function(t){return[t.x,t.y]});return l.default.decomp(i).map(function(e){return new t(e.map(function(t){return new u.default(t[0],t[1])}))})}}]),t}();e.default=y},function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=function(){function t(){a(this,t),this.makeEmpty()}return n(t,[{key:"extendTo",value:function(t){this.min>t&&(this.min=t),this.max<t&&(this.max=t)}},{key:"containsPoint",value:function(t){return this.min<=t&&t<=this.max}},{key:"containsRange",value:function(t){return this.min<=t.min&&this.max>t.max}},{key:"isEmpty",value:function(){return this.min>this.max}},{key:"makeEmpty",value:function(){this.min=Number.POSITIVE_INFINITY,this.max=Number.NEGATIVE_INFINITY}},{key:"length",value:function(){return this.min>this.max?Number.NaN:this.max-this.min}}],[{key:"intersection",value:function(e,i){var a=new t;return a.min=Math.max(e.min,i.min),a.max=Math.min(e.max,i.max),a.min>a.max&&a.makeEmpty(),a}},{key:"bound",value:function(e,i){var a=new t;return a.min=Math.min(e.min,i.min),a.max=Math.max(e.max,i.max),a}}]),t}();e.default=s},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(0),o=a(r),l=i(2),h=a(l),u=i(3),c=a(u),d=i(1),p=(a(d),i(10)),f=a(p),m=function(){function t(e){n(this,t),this.objectLayerJson=e,this.shapes=[];var i=!0,a=!1,s=void 0;try{for(var r,o=e.objects[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var l=r.value;l.polygon?this.addPolygon(l):l.polyline||l.ellipse||l.gid||(l.text,this.addRectangle(l))}}catch(t){a=!0,s=t}finally{try{!i&&o.return&&o.return()}finally{if(a)throw s}}this.quadTree=new f.default(this.shapes,5,5)}return s(t,[{key:"addRectangle",value:function(t){var e=t.width,i=t.height,a=new o.default(e,0),n=new o.default(0,i),s=-t.rotation*Math.PI/180;s&&(a=a.rotated(s),n=n.rotated(s));var r={x:t.x,y:t.y,width:t.width,height:t.height,polygon:[{x:0,y:0},a,a.plus(n),n],properties:t.properties||{}};this.addPolygon(r)}},{key:"addPolygon",value:function(t){var e=t.polygon.map(function(e){return new o.default(t.x+e.x,t.y+e.y)}),i=h.default.generateConvexPolygons(e),a=!0,n=!1,s=void 0;try{for(var r,l=i[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var u=r.value;this.addConvexPolygon(u,t.properties||{})}}catch(t){n=!0,s=t}finally{try{!a&&l.return&&l.return()}finally{if(n)throw s}}}},{key:"addConvexPolygon",value:function(t,e){var i=t.aabb,a={type:"polygon",left:i.left,top:i.top,right:i.right,bottom:i.bottom,polygon:t,properties:e||{},collideWidth:function(t){var e=t.sprite,i=new o.default(e.x,e.y),a=t.x,n=t.x+t.width,s=t.y,r=t.y+t.height,l=void 0,u=void 0;t.plus&&t.plus.shape?(u=t.plus.shape.translated(i),l=u.normals.concat(this.polygon.normals)):(u=h.default.fromRectangle(a,s,n,r),l=[new o.default(1,0),new o.default(0,1)].concat(this.polygon.normals));var d=Number.POSITIVE_INFINITY,p=void 0,f=!0,m=!1,g=void 0;try{for(var y,v=l[Symbol.iterator]();!(f=(y=v.next()).done);f=!0){var b=y.value,w=this.polygon.projectOntoAxis(b),S=u.projectOntoAxis(b);if(c.default.intersection(w,S).isEmpty())return null;var x=Math.min(Math.abs(w.max-S.min),Math.abs(S.max-w.min));d>x&&(d=x,p=b)}}catch(t){m=!0,g=t}finally{try{!f&&v.return&&v.return()}finally{if(m)throw g}}return u.centre.minus(this.polygon.centre).dot(p)<0&&(p=p.scale(-1)),{penetration:p.scale(-d),normal:p}}};this.shapes.push(a)}}]),t}();e.default=m},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=i(6),s=a(n),r=i(14),o=a(r),l=i(15),h=a(l),u=i(16),c=a(u);Phaser.Plugin.TilemapPlus=function(t,e){function i(t){return t+"-TilemapPlus"}Phaser.Plugin.call(this,t,e);var a=Phaser.Loader.prototype.tilemap;Phaser.Loader.prototype.tilemap=function(t,e,n,s){a.call(this,t,e,n,s),this.json(i(t),e)};var n=Phaser.GameObjectFactory.prototype.tilemap;Phaser.GameObjectFactory.prototype.tilemap=function(t,e,a,r,o){var l=n.call(this,t,e,a,r,o),h=this.game.cache.getJSON(i(t));return l.plus=new s.default(h,this.game.time,l),l};var r=Phaser.Tilemap.prototype.createLayer;Phaser.Tilemap.prototype.createLayer=function(t,e,i,a){var n=r.call(this,t,e,i,a);return n.plus=new o.default(n),n};var l=Phaser.Tilemap.prototype.addTilesetImage;Phaser.Tilemap.prototype.addTilesetImage=function(t,e,i,a,n,s,r){var o=l.call(this,t,e,i,a,n,s,r);return o.plus=new h.default(o),o};var u=Phaser.GameObjectFactory.prototype.sprite;Phaser.GameObjectFactory.prototype.sprite=function(t,e,i,a,n){var s=u.call(this,t,e,i,a,n);return s.plus=new c.default(s),s}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),r=a(s),o=i(8),l=a(o),h=i(11),u=a(h),c=function t(e,i,a){n(this,t),this.tilemapJson=e,this.time=i,this.tilemap=a,this.timer=null,this.tileAnimations=[],this.game=i.game,this.animation=new r.default(e,i,a),this.events=new u.default(e),this.physics=new l.default(e,this.events),this.properties=e.properties||{}};e.default=c},function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=t.tiles;if(e){var i=!0,a=!1,n=void 0;try{for(var r,o=Object.keys(e)[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var l=r.value,h=e[l],u=h.animation;u&&u.length>0&&s.bind(this)(t,l,u)}}catch(t){a=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(a)throw n}}}}function s(t,e,i){var a=i.map(function(t){return{tileId:t.tileid,duration:t.duration}});if(0!==a.length){var n=this.tilemap.tilesets.find(function(e){return e.name===t.name}),s={frames:a,tileset:n,tileLocations:o.bind(this)(n.firstgid+parseInt(e)),currentFrame:0,currentDuration:0};this.tileAnimations.push(s)}}function r(){var t=this.time.elapsedMS,e=!1,i=!0,a=!1,n=void 0;try{for(var s,r=this.tileAnimations[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var o=s.value,l=o.frames,h=o.tileset,u=o.tileLocations,c=o.currentFrame,d=l[c].duration;if(o.currentDuration+=t,o.currentDuration>d){o.currentDuration-=d,o.currentFrame=(c+1)%l.length;var p=h.firstgid+l[o.currentFrame].tileId,f=!0,m=!1,g=void 0;try{for(var y,v=u[Symbol.iterator]();!(f=(y=v.next()).done);f=!0){var b=y.value;this.tilemap.getTile(b.x,b.y,b.layer,!0).index=p}}catch(t){m=!0,g=t}finally{try{!f&&v.return&&v.return()}finally{if(m)throw g}}e=!0}}}catch(t){a=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(a)throw n}}if(e){var w=!0,S=!1,x=void 0;try{for(var k,P=this.tilemap.layers[Symbol.iterator]();!(w=(k=P.next()).done);w=!0)k.value.dirty=!0}catch(t){S=!0,x=t}finally{try{!w&&P.return&&P.return()}finally{if(S)throw x}}}}function o(t){var e=[],i=!0,a=!1,n=void 0;try{for(var s,r=this.tilemapJson.layers[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var o=s.value;if("tilelayer"===o.type)for(var l=o.data,h=o.width,u=o.height,c=0;c<u;c++)for(var d=0;d<h;d++)l[c*h+d]===t&&e.push({x:d,y:c,layer:o.name})}}catch(t){a=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(a)throw n}}return e}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),h=function(){function t(e,i,n){a(this,t),this.tilemapJson=e,this.time=i,this.tilemap=n,this.timer=null,this.tileAnimations=[],this.game=i.game}return l(t,[{key:"enable",value:function(){var t=this;if(null==this.timer){var e=!0,i=!1,a=void 0;try{for(var s,o=this.tilemapJson.tilesets[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var l=s.value;l.tiles&&n.bind(this)(l)}}catch(t){i=!0,a=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw a}}this.timer=this.time.events.loop(20,function(){return r.bind(t)()})}}},{key:"disable",value:function(){null!=this.timer&&(this.time.events.remove(this.timer),this.timer=null,this.tileAnimations=[])}}]),t}();e.default=h},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(0),o=a(r),l=i(2),h=(a(l),i(3)),u=(a(h),i(1)),c=a(u),d=i(4),p=a(d),f=function(){function t(e,i){n(this,t),this.tilemapJson=e,this.events=i}return s(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new p.default(e)}},{key:"collideWith",value:function(t){if(this.shapeLayer){var e=t.body,i=t.game.physics.arcade.gravity,a=new o.default(i.x,i.y),n=(a.normalized(),new o.default(e.velocity.x,e.velocity.y));e.plus||(e.plus={});var s=e.plus;s.contactNormals=[],s.penetrations=[],s.contactNormal||(s.contactNormal=new o.default),s.contactNormal.x=s.contactNormal.y=0;var r=new o.default,l=0,h=new c.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),u=this.shapeLayer.quadTree.candidateShapes(h),d=[],p=!0,f=!1,m=void 0;try{for(var g,y=u[Symbol.iterator]();!(p=(g=y.next()).done);p=!0){var v=g.value,b=v.collideWidth(e);if(b){var w=b.normal;if(!(n.dot(w)>=0)){var S=b.penetration;if(new o.default(e.x-e.prev.x,e.y-e.prev.y).minus(S).dot(w)>=-1){var x=v.properties,k=x.collideOnly;if(k){if("down"===k&&(n.y<0||w.y>=0))continue;if("up"===k&&(n.y>0||w.y<=0))continue;if("right"===k&&(n.x<0||w.x>=0))continue;if("left"===k&&(n.x>0||w.x<=0))continue}s.contactNormal=s.contactNormal.plus(w),s.contactNormals.push(w),r=r.plus(S),s.penetrations.push(S);var P=x.bounce;P&&(l+=P),d.push(v)}}}}}catch(t){f=!0,m=t}finally{try{!p&&y.return&&y.return()}finally{if(f)throw m}}e.x-=r.x,e.y-=r.y,s.contactNormal=s.contactNormal.normalized();var _=s.contactNormal,T=n.dot(_),M=_.scale(T),E=n.minus(M),O=void 0;O=M.scale(-l);var B=E,D=O.plus(B);e.velocity.x=D.x,e.velocity.y=D.y,this.updateBlocked(t),this.events.collisions.notify(t,d,n,D,_)}}},{key:"updateBlocked",value:function(t){var e=t.body,i=e.plus.contactNormal;e.blocked.up=e.blocked.up||i.y>0,e.blocked.down=e.blocked.down||i.y<0,e.blocked.left=e.blocked.left||i.x>0,e.blocked.right=e.blocked.right||i.x<0,e.blocked.none=0==i.x&&0==i.y}}]),t}();e.default=f},function(t,e){function i(t,e,i){i=i||0;var a,n,s,r,o,l,h,u=[0,0];return a=t[1][1]-t[0][1],n=t[0][0]-t[1][0],s=a*t[0][0]+n*t[0][1],r=e[1][1]-e[0][1],o=e[0][0]-e[1][0],l=r*e[0][0]+o*e[0][1],h=a*o-r*n,T(h,0,i)||(u[0]=(o*s-n*l)/h,u[1]=(a*l-r*s)/h),u}function a(t,e,i,a){var n=e[0]-t[0],s=e[1]-t[1],r=a[0]-i[0],o=a[1]-i[1];if(r*s-o*n==0)return!1;var l=(n*(i[1]-t[1])+s*(t[0]-i[0]))/(r*s-o*n),h=(r*(t[1]-i[1])+o*(i[0]-t[0]))/(o*n-r*s);return l>=0&&l<=1&&h>=0&&h<=1}function n(t,e,i){return(e[0]-t[0])*(i[1]-t[1])-(i[0]-t[0])*(e[1]-t[1])}function s(t,e,i){return n(t,e,i)>0}function r(t,e,i){return n(t,e,i)>=0}function o(t,e,i){return n(t,e,i)<0}function l(t,e,i){return n(t,e,i)<=0}function h(t,e,i,a){if(a){var s=M,r=E;s[0]=e[0]-t[0],s[1]=e[1]-t[1],r[0]=i[0]-e[0],r[1]=i[1]-e[1];var o=s[0]*r[0]+s[1]*r[1],l=Math.sqrt(s[0]*s[0]+s[1]*s[1]),h=Math.sqrt(r[0]*r[0]+r[1]*r[1]);return Math.acos(o/(l*h))<a}return 0===n(t,e,i)}function u(t,e){var i=e[0]-t[0],a=e[1]-t[1];return i*i+a*a}function c(t,e){var i=t.length;return t[e<0?e%i+i:e%i]}function d(t){t.length=0}function p(t,e,i,a){for(var n=i;n<a;n++)t.push(e[n])}function f(t){for(var e=0,i=t,a=1;a<t.length;++a)(i[a][1]<i[e][1]||i[a][1]===i[e][1]&&i[a][0]>i[e][0])&&(e=a);s(c(t,e-1),c(t,e),c(t,e+1))||m(t)}function m(t){for(var e=[],i=t.length,a=0;a!==i;a++)e.push(t.pop());for(var a=0;a!==i;a++)t[a]=e[a]}function g(t,e){return o(c(t,e-1),c(t,e),c(t,e+1))}function y(t,e,a){var n,s,o=O,h=B;if(r(c(t,e+1),c(t,e),c(t,a))&&l(c(t,e-1),c(t,e),c(t,a)))return!1;s=u(c(t,e),c(t,a));for(var d=0;d!==t.length;++d)if((d+1)%t.length!==e&&d!==e&&r(c(t,e),c(t,a),c(t,d+1))&&l(c(t,e),c(t,a),c(t,d))&&(o[0]=c(t,e),o[1]=c(t,a),h[0]=c(t,d),h[1]=c(t,d+1),n=i(o,h),u(c(t,e),n)<s))return!1;return!0}function v(t,e,i,a){var n=a||[];if(d(n),e<i)for(var s=e;s<=i;s++)n.push(t[s]);else{for(var s=0;s<=i;s++)n.push(t[s]);for(var s=e;s<t.length;s++)n.push(t[s])}return n}function b(t){for(var e=[],i=[],a=[],n=[],s=Number.MAX_VALUE,r=0;r<t.length;++r)if(g(t,r))for(var o=0;o<t.length;++o)if(y(t,r,o)){i=b(v(t,r,o,n)),a=b(v(t,o,r,n));for(var l=0;l<a.length;l++)i.push(a[l]);i.length<s&&(e=i,s=i.length,e.push([c(t,r),c(t,o)]))}return e}function w(t){var e=b(t);return e.length>0?S(t,e):[t]}function S(t,e){if(0===e.length)return[t];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var i=[t],a=0;a<e.length;a++)for(var n=e[a],s=0;s<i.length;s++){var r=i[s],o=S(r,n);if(o){i.splice(s,1),i.push(o[0],o[1]);break}}return i}var n=e,a=t.indexOf(n[0]),s=t.indexOf(n[1]);return-1!==a&&-1!==s&&[v(t,a,s),v(t,s,a)]}function x(t){var e,i=t;for(e=0;e<i.length-1;e++)for(var n=0;n<e-1;n++)if(a(i[e],i[e+1],i[n],i[n+1]))return!1;for(e=1;e<i.length-2;e++)if(a(i[0],i[i.length-1],i[e],i[e+1]))return!1;return!0}function k(t,e,i,a,n){n=n||0;var s=e[1]-t[1],r=t[0]-e[0],o=s*t[0]+r*t[1],l=a[1]-i[1],h=i[0]-a[0],u=l*i[0]+h*i[1],c=s*h-l*r;return T(c,0,n)?[0,0]:[(h*o-r*u)/c,(s*u-l*o)/c]}function P(t,e,i,a,n,h,d){h=h||100,d=d||0,n=n||25,e=void 0!==e?e:[],i=i||[],a=a||[];var f=[0,0],m=[0,0],y=[0,0],v=0,b=0,w=0,S=0,x=0,_=0,T=0,M=[],E=[],O=t,B=t;if(B.length<3)return e;if(++d>h)return console.warn("quickDecomp: max level ("+h+") reached."),e;for(var D=0;D<t.length;++D)if(g(O,D)){i.push(O[D]),v=b=Number.MAX_VALUE;for(var A=0;A<t.length;++A)s(c(O,D-1),c(O,D),c(O,A))&&l(c(O,D-1),c(O,D),c(O,A-1))&&(y=k(c(O,D-1),c(O,D),c(O,A),c(O,A-1)),o(c(O,D+1),c(O,D),y)&&(w=u(O[D],y))<b&&(b=w,m=y,_=A)),s(c(O,D+1),c(O,D),c(O,A+1))&&l(c(O,D+1),c(O,D),c(O,A))&&(y=k(c(O,D+1),c(O,D),c(O,A),c(O,A+1)),s(c(O,D-1),c(O,D),y)&&(w=u(O[D],y))<v&&(v=w,f=y,x=A));if(_===(x+1)%t.length)y[0]=(m[0]+f[0])/2,y[1]=(m[1]+f[1])/2,a.push(y),D<x?(p(M,O,D,x+1),M.push(y),E.push(y),0!==_&&p(E,O,_,O.length),p(E,O,0,D+1)):(0!==D&&p(M,O,D,O.length),p(M,O,0,x+1),M.push(y),E.push(y),p(E,O,_,D+1));else{if(_>x&&(x+=t.length),S=Number.MAX_VALUE,x<_)return e;for(var A=_;A<=x;++A)r(c(O,D-1),c(O,D),c(O,A))&&l(c(O,D+1),c(O,D),c(O,A))&&(w=u(c(O,D),c(O,A)))<S&&(S=w,T=A%t.length);D<T?(p(M,O,D,T+1),0!==T&&p(E,O,T,B.length),p(E,O,0,D+1)):(0!==D&&p(M,O,D,B.length),p(M,O,0,T+1),p(E,O,T,D+1))}return M.length<E.length?(P(M,e,i,a,n,h,d),P(E,e,i,a,n,h,d)):(P(E,e,i,a,n,h,d),P(M,e,i,a,n,h,d)),e}return e.push(t),e}function _(t,e){for(var i=0,a=t.length-1;t.length>3&&a>=0;--a)h(c(t,a-1),c(t,a),c(t,a+1),e)&&(t.splice(a%t.length,1),i++);return i}function T(t,e,i){return i=i||0,Math.abs(t-e)<i}t.exports={decomp:w,quickDecomp:P,isSimple:x,removeCollinearPoints:_,makeCCW:f};var M=[],E=[],O=[],B=[]},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(0),o=(a(r),i(1)),l=a(o),h=function(){function t(e,i,a){if(n(this,t),this.maxLevel=i,this.maxShapes=a,e.length<a||i<=1)this.shapes=e;else{var s=l.default.fromAABBs(e.map(function(t){return t.polygon.aabb})),r=s.centre();this.pivot=r;var o=[],h=[],u=[],c=[],d=[],p=!0,f=!1,m=void 0;try{for(var g,y=e[Symbol.iterator]();!(p=(g=y.next()).done);p=!0){var v=g.value,b=v.polygon.aabb;b.right<r.x&&b.bottom<r.y?h.push(v):b.left>r.x&&b.bottom<r.y?u.push(v):b.right<r.x&&b.top>r.y?c.push(v):b.left>r.x&&b.top>r.y?d.push(v):o.push(v)}}catch(t){f=!0,m=t}finally{try{!p&&y.return&&y.return()}finally{if(f)throw m}}this.shapes=o,h.length>0&&(this.topLeftNode=new t(h,i-1,a)),u.length>0&&(this.topRightNode=new t(u,i-1,a)),c.length>0&&(this.bottomLeftNode=new t(c,i-1,a)),d.length>0&&(this.bottomRightNode=new t(d,i-1,a))}}return s(t,[{key:"candidateShapes",value:function(t){var e=this.shapes.filter(function(e){return e.polygon.aabb.intersects(t)}),i=this.pivot;if(!i)return e;var a=this.topLeftNode;a&&t.left<=i.x&&t.top<=i.y&&(e=e.concat(a.candidateShapes(t)));var n=this.topRightNode;n&&t.right>=i.x&&t.top<=i.y&&(e=e.concat(n.candidateShapes(t)));var s=this.bottomLeftNode;s&&t.left<=i.x&&t.bottom>=i.y&&(e=e.concat(s.candidateShapes(t)));var r=this.bottomRightNode;return r&&t.right>=i.x&&t.bottom>=i.y&&(e=e.concat(r.candidateShapes(t))),e}}]),t}();e.default=h},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=i(12),r=a(s),o=i(13),l=a(o),h=function t(e){n(this,t),this.collisions=new r.default,this.regions=new l.default(e)};e.default=h},function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=function(){function t(){a(this,t),this.spriteListeners=new Map,this.spriteCollisions=new Map}return n(t,[{key:"add",value:function(t,e){return this.getSpriteListeners(t).push(e),e}},{key:"remove",value:function(t,e){var i=this.getSpriteListeners(t);this.spriteListeners.set(t,i.filter(function(t){return t!=e}))}},{key:"notify",value:function(t,e,i,a,n){var s=this.spriteCollisions.has(t)?this.spriteCollisions.get(t):[],r=e.filter(function(t){return!s.find(function(e){return e===t})});this.spriteCollisions.set(t,e);var o=!0,l=!1,h=void 0;try{for(var u,c=r[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var d=u.value,p=!0,f=!1,m=void 0;try{for(var g,y=this.getSpriteListeners(t)[Symbol.iterator]();!(p=(g=y.next()).done);p=!0)(0,g.value)(d,i,a,n)}catch(t){f=!0,m=t}finally{try{!p&&y.return&&y.return()}finally{if(f)throw m}}}}catch(t){l=!0,h=t}finally{try{!o&&c.return&&c.return()}finally{if(l)throw h}}}},{key:"getSpriteListeners",value:function(t){return this.spriteListeners.has(t)||this.spriteListeners.set(t,[]),this.spriteListeners.get(t)}}]),t}();e.default=s},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(0),o=(a(r),i(2)),l=(a(o),i(3)),h=(a(l),i(1)),u=a(h),c=i(4),d=a(c),p=function(){function t(e){n(this,t),this.tilemapJson=e,this.spriteStates=new Map}return s(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new d.default(e)}},{key:"onEnterAdd",value:function(t,e){return this.getSpriteState(t).enterListeners.push(e),e}},{key:"onEnterRemove",value:function(t,e){var i=this.getSpriteState(t);i.enterListeners=i.enterListeners.filter(function(t){return t!=e})}},{key:"onLeaveAdd",value:function(t,e){return this.getSpriteState(t).leaveListeners.push(e),e}},{key:"onLeaveRemove",value:function(t,e){var i=this.getSpriteState(t);i.leaveListeners=i.leaveListeners.filter(function(t){return t!=e})}},{key:"triggerWith",value:function(t){if(this.shapeLayer){var e=t.body,i=new u.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),a=this.shapeLayer.quadTree.candidateShapes(i),n=[],s=!0,r=!1,o=void 0;try{for(var l,h=a[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var c=l.value;c.collideWidth(e)&&n.push(c)}}catch(t){r=!0,o=t}finally{try{!s&&h.return&&h.return()}finally{if(r)throw o}}this.notify(t,n)}}},{key:"notify",value:function(t,e){var i=this.getSpriteState(t),a=i.collisions,n=e.filter(function(t){return!a.find(function(e){return e===t})}),s=a.filter(function(t){return!e.find(function(e){return e===t})});i.collisions=e;var r=!0,o=!1,l=void 0;try{for(var h,u=n[Symbol.iterator]();!(r=(h=u.next()).done);r=!0){var c=h.value,d=!0,p=!1,f=void 0;try{for(var m,g=i.enterListeners[Symbol.iterator]();!(d=(m=g.next()).done);d=!0)(0,m.value)(c)}catch(t){p=!0,f=t}finally{try{!d&&g.return&&g.return()}finally{if(p)throw f}}}}catch(t){o=!0,l=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw l}}var y=!0,v=!1,b=void 0;try{for(var w,S=s[Symbol.iterator]();!(y=(w=S.next()).done);y=!0){var x=w.value,k=!0,P=!1,_=void 0;try{for(var T,M=i.leaveListeners[Symbol.iterator]();!(k=(T=M.next()).done);k=!0)(0,T.value)(x)}catch(t){P=!0,_=t}finally{try{!k&&M.return&&M.return()}finally{if(P)throw _}}}}catch(t){v=!0,b=t}finally{try{!y&&S.return&&S.return()}finally{if(v)throw b}}}},{key:"getSpriteState",value:function(t){return this.spriteStates.has(t)||this.spriteStates.set(t,{collisions:[],enterListeners:[],leaveListeners:[]}),this.spriteStates.get(t)}}]),t}();e.default=p},function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function t(e){a(this,t),this.properties=e.layer.properties||{}};e.default=n},function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function t(e){a(this,t),this.properties=e.properties||{}};e.default=n},function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(2),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e){a(this,t),this.sprite=e}return n(t,[{key:"setBodyCapsule",value:function(t,e,i){var a=this.sprite;if(!a.body)throw new Error("Enable arcade physics before assigning body shape");var n=a.body;n.plus=n.plus||{};var s=.5*t,o=.5*e;n.plus.shape=r.default.fromCapsule(-s,-o,+s,+o,i)}}]),t}();e.default=o}])},/* 94 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=(a(r),i(356)),l=a(o),h=function(){function t(e,i,a,s,r,o,h,u){var c=this;n(this,t),this.game=e,this.map=i,this.player=a,this.layer=r,this.cornerCutting=o,this.target=s,this.movingSpeed=h,this.finderCallObject=u,
// FOR DEBUGGING
this.showPaths=!1,this.pathToFollow=[],this.walkables=[2521],this.blocked=!1,this.followingPath=!1,this.trail=e.add.group(),this.path,this.lastX=null,this.lastY=null,this.marker,this.movingTween=this.game.add.tween(this.player),this.movingTween.onComplete.add(function(){c.followingPath=!1,c.player.movable=!0,
// this.game.time.events.add(
// 	Phaser.Timer.SECOND * this.game.rnd.integerInRange(1, 2),
// 	function() {
// 		this.followPath();
// 	},
// 	this
// );
c.followPath()}),this.pathfinder=new l.default(this.game),this.cornerCutting&&(this.pathfinder.easystar.enableCornerCutting(),this.pathfinder.easystar.enableDiagonals()),
// this.pathfinder.easystar.setIterationsPerCalculation(1);
this.pathfinder.setGrid(this.layer.layer.data,this.walkables),
// console.log(this.map.layers[0].data);
// console.log(this.layer);
this.findPathTo(this.layer.getTileX(this.target.x),this.layer.getTileY(this.target.y))}return s(t,[{key:"findPathTo",value:function(t,e){var i=this;this.pathfinder.setCallbackFunction(function(t){if(
// console.log(path);
i.trail.destroy(!0,!0),null===t)return void console.warn("Path is null!");if(i.showPaths)for(var e=t.length,a=0;a<e;a++)i.marker=i.game.add.graphics(32*t[a].x,32*t[a].y),i.marker.data.cellX=t[a].x,i.marker.data.cellY=t[a].y,i.trail.add(i.marker),i.marker.lineStyle(2,11224642,.5),i.marker.drawRect(8,8,16,16);i.pathToFollow=t,i.followPath()}),this.pathfinder.preparePathCalculation([this.layer.getTileX(this.player.x),this.layer.getTileY(this.player.y)],[t,e]),this.pathfinder.calculatePath()}},{key:"followPath",value:function(){
// console.log('BUUM');
// console.log(this.pathToFollow);
if(this.pathToFollow.length&&!this.followingPath){1==this.pathToFollow.length&&void 0!==this.finderCallObject&&(this.finderCallObject.finderCall=!0),this.player.movable=!1;var t=this.pathToFollow.shift();if(t){this.showPaths&&this.trail.forEach(function(e){e.data.cellX===t.x&&e.data.cellY===t.y&&e.destroy()});var e=32*t.x+18,i=32*t.y+18;null!==this.lastX&&"priest"==this.player.name&&(
// Walk Right
e>this.lastX&&this.player.animations.play("walk_right"),
// Walk Left
e<this.lastX&&this.player.animations.play("walk_left"),
// Walk Down
i>this.lastY&&this.player.animations.play("walk_down"),
// Walk Up
i<this.lastY&&this.player.animations.play("walk_up")),null!==this.lastX&&"woman1"==this.player.name&&(
// Walk Right
e>this.lastX&&this.player.animations.play("walk_right"),
// Walk Left
e<this.lastX&&this.player.animations.play("walk_left"),
// Walk Down
i>this.lastY&&this.player.animations.play("walk_down"),
// Walk Up
i<this.lastY&&this.player.animations.play("walk_up")),this.lastX=e,this.lastY=i,this.followingPath=!0,this.movingTween.target=this.player,this.movingTween.timeline=[],this.movingTween.to({x:e,y:i},this.movingSpeed),this.movingTween.start()}}}}]),t}();e.default=h},/* 95 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={dialogues:{
//
1:["Hello? Are you okay?","My name is Lucy! Pleased to meet you! Uh...","Levi! Alright.","This? It's the Forest of Eritel! You seem to \nbe lost. There is a village nearby, just \nfollow the path!","Though! It must be scary around here for someone \nwho isn't familiar with these woods! ","How about that: \nI'll stay with you for now, Levi!"],
//
2:["Oh, seems like the path is falling apart! There \nare platforms you can reach by using \nthe Space-Button.","You should give it a try!"],3:["Great! You did it! Make sure you don't forget \nit, it can save your life."],
// Enter Map Dialogue
4:["The monsters around here are quite destructive!\nI'm surprised none took advantage of you when \nyou passed out! Seems like today is your lucky \nday.","The Forest of Eritel wasn't always like this, \nit was home of a great civilization once! Hence \nwhy sometimes you can find treasures, chests and \nother secrets when you look around closely.","Always pay attention to your surroundings."],
// Bridge Dialogue
5:["Oh, right! The villagers of Aalis use many \nmechanisms to keep the monsters out of their \ntown. This is one of said mechanisms.","To continue, you have to explore a little, \nmaybe you can find a way to activate \nthe bridge again."],6:["Lost? Go back to the path!"],
// Chest Dialogue
7:["There we go! Seems like they locked up the \nitem that could help us reactivate the bridge \nin this treasure chest!","... What are you waiting for? \nYou think you can just open it? \nThis isn't a video game, Levi.","You have to pick the lock by pressing the \nE-Button! Oh, one more thing! \nIf you fail three times, the chests will close \ntheir locks for a short period of time.","So if you mess up, you have to wait for a bit \nuntil you can try again."],
// Bridge Success
8:["You did it!"],9:["Oh no! Do you see this? These are the monsters\nI've been talking about! Seems like there \nis no way around. We have to get down \nthere and fight.","... You don't have a weapon? No worries! \nI will lend you my powers! I can not use them \nmyself because my form is too weak right \nnow, but you can!","All you have to do is press [BUTTON]. The best \nway to learn how to fight is to fight! \nYou got this!","Quick, we should leave this place, or else \nwe might be surrounded by monsters again in \nno time.","We're almost there! \nAalis is right over there..."],
//
10:["One last thing before we enter the village! \nYou will encounter many different people! \nMaybe they can help you figure out \nwhy you ended up here.","But to do so, you will have to talk to the them. \nUse the E-Button to interact with the towns folks.","Another thing! Especially the high priest and \nthe priestess don't like monsters. ","Since I, too, look like one, it will \nprobably be for the best if I stayed invisible \nand silent during our stay in the village.","You can still use my powers, but I will not \nbe able to interact with you, Levi. \nBe careful, young hero."],11:["Press the E-Button to collect items!"],12:["You got to be careful… This monster is different than anything you have faced before. Be on your guard.","Hide if necessary. You’d rather be a coward than dead, right?","I think that’s it… Good luck"],13:["AHHHHHHHHH!"]}}},/* 96 */
/***/
function(t,e,i){t.exports=!i(7)&&!i(4)(function(){return 7!=Object.defineProperty(i(66)("div"),"a",{get:function(){return 7}}).a})},/* 97 */
/***/
function(t,e,i){e.f=i(6)},/* 98 */
/***/
function(t,e,i){var a=i(12),n=i(16),s=i(53)(!1),r=i(68)("IE_PROTO");t.exports=function(t,e){var i,o=n(t),l=0,h=[];for(i in o)i!=r&&a(o,i)&&h.push(i);
// Don't enum bug & hidden keys
for(;e.length>l;)a(o,i=e[l++])&&(~s(h,i)||h.push(i));return h}},/* 99 */
/***/
function(t,e,i){var a=i(8),n=i(2),s=i(36);t.exports=i(7)?Object.defineProperties:function(t,e){n(t);for(var i,r=s(e),o=r.length,l=0;o>l;)a.f(t,i=r[l++],e[i]);return t}},/* 100 */
/***/
function(t,e,i){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var a=i(16),n=i(39).f,s={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(t){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==s.call(t)?o(t):n(a(t))}},/* 101 */
/***/
function(t,e,i){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var a=i(36),n=i(54),s=i(50),r=i(10),o=i(49),l=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
t.exports=!l||i(4)(function(){var t={},e={},i=Symbol(),a="abcdefghijklmnopqrst";return t[i]=7,a.split("").forEach(function(t){e[t]=t}),7!=l({},t)[i]||Object.keys(l({},e)).join("")!=a})?function(t,e){for(
// eslint-disable-line no-unused-vars
var i=r(t),l=arguments.length,h=1,u=n.f,c=s.f;l>h;)for(var d,p=o(arguments[h++]),f=u?a(p).concat(u(p)):a(p),m=f.length,g=0;m>g;)c.call(p,d=f[g++])&&(i[d]=p[d]);return i}:l},/* 102 */
/***/
function(t,e,i){"use strict";var a=i(11),n=i(5),s=i(103),r=[].slice,o={},l=function(t,e,i){if(!(e in o)){for(var a=[],n=0;n<e;n++)a[n]="a["+n+"]";
// eslint-disable-next-line no-new-func
o[e]=Function("F,a","return new F("+a.join(",")+")")}return o[e](t,i)};t.exports=Function.bind||function(t){var e=a(this),i=r.call(arguments,1),o=function(){var a=i.concat(r.call(arguments));return this instanceof o?l(e,a.length,a):s(e,a,t)};return n(e.prototype)&&(o.prototype=e.prototype),o}},/* 103 */
/***/
function(t,e){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
t.exports=function(t,e,i){var a=void 0===i;switch(e.length){case 0:return a?t():t.call(i);case 1:return a?t(e[0]):t.call(i,e[0]);case 2:return a?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return a?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return a?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},/* 104 */
/***/
function(t,e,i){var a=i(3).parseInt,n=i(45).trim,s=i(72),r=/^[-+]?0[xX]/;t.exports=8!==a(s+"08")||22!==a(s+"0x16")?function(t,e){var i=n(String(t),3);return a(i,e>>>0||(r.test(i)?16:10))}:a},/* 105 */
/***/
function(t,e,i){var a=i(3).parseFloat,n=i(45).trim;t.exports=1/a(i(72)+"-0")!=-1/0?function(t){var e=n(String(t),3),i=a(e);return 0===i&&"-"==e.charAt(0)?-0:i}:a},/* 106 */
/***/
function(t,e,i){var a=i(20);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=a(t))throw TypeError(e);return+t}},/* 107 */
/***/
function(t,e,i){
// 20.1.2.3 Number.isInteger(number)
var a=i(5),n=Math.floor;t.exports=function(t){return!a(t)&&isFinite(t)&&n(t)===t}},/* 108 */
/***/
function(t,e){
// 20.2.2.20 Math.log1p(x)
t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},/* 109 */
/***/
function(t,e,i){
// 20.2.2.16 Math.fround(x)
var a=i(75),n=Math.pow,s=n(2,-52),r=n(2,-23),o=n(2,127)*(2-r),l=n(2,-126),h=function(t){return t+1/s-1/s};t.exports=Math.fround||function(t){var e,i,n=Math.abs(t),u=a(t);
// eslint-disable-next-line no-self-compare
return n<l?u*h(n/l/r)*l*r:(e=(1+r/s)*n,i=e-(e-n),i>o||i!=i?u*(1/0):u*i)}},/* 110 */
/***/
function(t,e,i){
// call something on iterator step with safe closing on error
var a=i(2);t.exports=function(t,e,i,n){try{return n?e(a(i)[0],i[1]):e(i)}catch(e){var s=t.return;throw void 0!==s&&a(s.call(t)),e}}},/* 111 */
/***/
function(t,e,i){var a=i(11),n=i(10),s=i(49),r=i(9);t.exports=function(t,e,i,o,l){a(e);var h=n(t),u=s(h),c=r(h.length),d=l?c-1:0,p=l?-1:1;if(i<2)for(;;){if(d in u){o=u[d],d+=p;break}if(d+=p,l?d<0:c<=d)throw TypeError("Reduce of empty array with no initial value")}for(;l?d>=0:c>d;d+=p)d in u&&(o=e(o,u[d],d,h));return o}},/* 112 */
/***/
function(t,e,i){"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var a=i(10),n=i(37),s=i(9);t.exports=[].copyWithin||function(t,e){var i=a(this),r=s(i.length),o=n(t,r),l=n(e,r),h=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===h?r:n(h,r))-l,r-o),c=1;for(l<o&&o<l+u&&(c=-1,l+=u-1,o+=u-1);u-- >0;)l in i?i[o]=i[l]:delete i[o],o+=c,l+=c;return i}},/* 113 */
/***/
function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},/* 114 */
/***/
function(t,e,i){
// 21.2.5.3 get RegExp.prototype.flags()
i(7)&&"g"!=/./g.flags&&i(8).f(RegExp.prototype,"flags",{configurable:!0,get:i(58)})},/* 115 */
/***/
function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},/* 116 */
/***/
function(t,e,i){var a=i(2),n=i(5),s=i(90);t.exports=function(t,e){if(a(t),n(e)&&e.constructor===t)return e;var i=s.f(t);return(0,i.resolve)(e),i.promise}},/* 117 */
/***/
function(t,e,i){"use strict";var a=i(118),n=i(47);
// 23.1 Map Objects
t.exports=i(61)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(t){var e=a.getEntry(n(this,"Map"),t);return e&&e.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(t,e){return a.def(n(this,"Map"),0===t?0:t,e)}},a,!0)},/* 118 */
/***/
function(t,e,i){"use strict";var a=i(8).f,n=i(38),s=i(43),r=i(19),o=i(41),l=i(42),h=i(78),u=i(113),c=i(40),d=i(7),p=i(31).fastKey,f=i(47),m=d?"_s":"size",g=function(t,e){
// fast case
var i,a=p(e);if("F"!==a)return t._i[a];
// frozen object case
for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,h){var u=t(function(t,a){o(t,u,e,"_i"),t._t=e,// collection type
t._i=n(null),// index
t._f=void 0,// first entry
t._l=void 0,// last entry
t[m]=0,// size
void 0!=a&&l(a,i,t[h],t)});return s(u.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var t=f(this,e),i=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete i[a.i];t._f=t._l=void 0,t[m]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(t){var i=f(this,e),a=g(i,t);if(a){var n=a.n,s=a.p;delete i._i[a.i],a.r=!0,s&&(s.n=n),n&&(n.p=s),i._f==a&&(i._f=n),i._l==a&&(i._l=s),i[m]--}return!!a},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(t){f(this,e);for(var i,a=r(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)
// revert to the last existing entry
for(a(i.v,i.k,this);i&&i.r;)i=i.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(t){return!!g(f(this,e),t)}}),d&&a(u.prototype,"size",{get:function(){return f(this,e)[m]}}),u},def:function(t,e,i){var a,n,s=g(t,e);
// change existing entry
// add to index
return s?s.v=i:(t._l=s={i:n=p(e,!0),// <- index
k:e,// <- key
v:i,// <- value
p:a=t._l,// <- previous entry
n:void 0,// <- next entry
r:!1},t._f||(t._f=s),a&&(a.n=s),t[m]++,"F"!==n&&(t._i[n]=s)),t},getEntry:g,setStrong:function(t,e,i){
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
h(t,e,function(t,i){this._t=f(t,e),// target
this._k=i,// kind
this._l=void 0},function(){
// revert to the last existing entry
for(var t=this,e=t._k,i=t._l;i&&i.r;)i=i.p;
// get next entry
// get next entry
// return step by kind
// or finish the iteration
return t._t&&(t._l=i=i?i.n:t._t._f)?"keys"==e?u(0,i.k):"values"==e?u(0,i.v):u(0,[i.k,i.v]):(t._t=void 0,u(1))},i?"entries":"values",!i,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
c(e)}}},/* 119 */
/***/
function(t,e,i){"use strict";var a=i(118),n=i(47);
// 23.2 Set Objects
t.exports=i(61)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(t){return a.def(n(this,"Set"),t=0===t?0:t,t)}},a)},/* 120 */
/***/
function(t,e,i){"use strict";var a,n=i(28)(0),s=i(14),r=i(31),o=i(101),l=i(121),h=i(5),u=i(4),c=i(47),d=r.getWeak,p=Object.isExtensible,f=l.ufstore,m={},g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},y={
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(t){if(h(t)){var e=d(t);return!0===e?f(c(this,"WeakMap")).get(t):e?e[this._i]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(t,e){return l.def(c(this,"WeakMap"),t,e)}},v=t.exports=i(61)("WeakMap",g,y,l,!0,!0);
// IE11 WeakMap frozen keys fix
u(function(){return 7!=(new v).set((Object.freeze||Object)(m),7).get(m)})&&(a=l.getConstructor(g,"WeakMap"),o(a.prototype,y),r.NEED=!0,n(["delete","has","get","set"],function(t){var e=v.prototype,i=e[t];s(e,t,function(e,n){
// store frozen objects on internal weakmap shim
if(h(e)&&!p(e)){this._f||(this._f=new a);var s=this._f[t](e,n);return"set"==t?this:s}return i.call(this,e,n)})}))},/* 121 */
/***/
function(t,e,i){"use strict";var a=i(43),n=i(31).getWeak,s=i(2),r=i(5),o=i(41),l=i(42),h=i(28),u=i(12),c=i(47),d=h(5),p=h(6),f=0,m=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,e){return d(t.a,function(t){return t[0]===e})};g.prototype={get:function(t){var e=y(this,t);if(e)return e[1]},has:function(t){return!!y(this,t)},set:function(t,e){var i=y(this,t);i?i[1]=e:this.a.push([t,e])},delete:function(t){var e=p(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,i,s){var h=t(function(t,a){o(t,h,e,"_i"),t._t=e,// collection type
t._i=f++,// collection id
t._l=void 0,// leak store for uncaught frozen objects
void 0!=a&&l(a,i,t[s],t)});return a(h.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(t){if(!r(t))return!1;var i=n(t);return!0===i?m(c(this,e)).delete(t):i&&u(i,this._i)&&delete i[this._i]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(t){if(!r(t))return!1;var i=n(t);return!0===i?m(c(this,e)).has(t):i&&u(i,this._i)}}),h},def:function(t,e,i){var a=n(s(e),!0);return!0===a?m(t).set(e,i):a[t._i]=i,t},ufstore:m}},/* 122 */
/***/
function(t,e,i){
// https://tc39.github.io/ecma262/#sec-toindex
var a=i(26),n=i(9);t.exports=function(t){if(void 0===t)return 0;var e=a(t),i=n(e);if(e!==i)throw RangeError("Wrong length!");return i}},/* 123 */
/***/
function(t,e,i){
// all object keys, includes non-enumerable and symbols
var a=i(39),n=i(54),s=i(2),r=i(3).Reflect;t.exports=r&&r.ownKeys||function(t){var e=a.f(s(t)),i=n.f;return i?e.concat(i(t)):e}},/* 124 */
/***/
function(t,e,i){"use strict";function a(t,e,i,h,u,c,d,p){for(var f,m,g=u,y=0,v=!!d&&o(d,p,3);y<h;){if(y in i){if(f=v?v(i[y],y,e):i[y],m=!1,s(f)&&(m=f[l],m=void 0!==m?!!m:n(f)),m&&c>0)g=a(t,e,f,r(f.length),g,c-1)-1;else{if(g>=9007199254740991)throw TypeError();t[g]=f}g++}y++}return g}
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var n=i(55),s=i(5),r=i(9),o=i(19),l=i(6)("isConcatSpreadable");t.exports=a},/* 125 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-string-pad-start-end
var a=i(9),n=i(74),s=i(25);t.exports=function(t,e,i,r){var o=String(s(t)),l=o.length,h=void 0===i?" ":String(i),u=a(e);if(u<=l||""==h)return o;var c=u-l,d=n.call(h,Math.ceil(c/h.length));return d.length>c&&(d=d.slice(0,c)),r?d+o:o+d}},/* 126 */
/***/
function(t,e,i){var a=i(36),n=i(16),s=i(50).f;t.exports=function(t){return function(e){for(var i,r=n(e),o=a(r),l=o.length,h=0,u=[];l>h;)s.call(r,i=o[h++])&&u.push(t?[i,r[i]]:r[i]);return u}}},/* 127 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var a=i(51),n=i(128);t.exports=function(t){return function(){if(a(this)!=t)throw TypeError(t+"#toJSON isn't generic");return n(this)}}},/* 128 */
/***/
function(t,e,i){var a=i(42);t.exports=function(t,e){var i=[];return a(t,!1,i.push,i,e),i}},/* 129 */
/***/
function(t,e){
// https://rwaldron.github.io/proposal-math-extensions/
t.exports=Math.scale||function(t,e,i,a,n){
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
return 0===arguments.length||t!=t||e!=e||i!=i||a!=a||n!=n?NaN:t===1/0||t===-1/0?t:(t-e)*(n-a)/(i-e)+a}},/* 130 */
,/* 131 */
,/* 132 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r,o,l){a(this,e);var h=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,r));
// let itemEmitter = this.game.add.emitter(item.x, item.y, 200);
// itemEmitter.makeParticles('particleStart');
// itemEmitter.setRotation(0, 0);
// itemEmitter.setAlpha(0.3, 0.8);
// itemEmitter.setScale(0.5, 1);
// itemEmitter.gravity = -200;
// //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
// itemEmitter.start(true, 5000, 5);
// setSize(width, height, offsetX, offsetY)
return h.game=t,h.type=r,h.level=l,h.id=o.id,h.ifQuestID=o.ifQuestID,h.newQuestID=o.newQuestID,h.used=!1,h.questMessage=o.questMessage,h.removeQuestID=o.removeQuestID,h.anchor.setTo(.5),h.actionSymbol=h.game.add.sprite(h.x+5,h.y-15,"actionSymbol"),h.actionSymbol.smoothed=!1,h.actionSymbol.alpha=0,"potion"==h.type?h.animations.add("play",[0,1,2,3,4,5,6,7,8,9,10,11],12,!0):h.animations.add("play",[0,1,2,3],12,!0),h.animations.play("play"),h.game.physics.enable(h),h.body.setSize(10,18,10,18),h.body.immovable=!0,h.game.add.existing(h),h}return s(e,t),r(e,[{key:"update",value:function(){if(!this.used){
// this.game.physics.arcade.collide(this, this.level.player);
var t=Math.ceil(this.game.physics.arcade.angleToXY(this.level.player,this.x,this.y));if(this.game.physics.arcade.distanceBetween(this,this.level.player)<40?t>0?this.game.world.bringToTop(this):this.game.world.setChildIndex(this,25):this.game.world.bringToTop(this),this.game.physics.arcade.distanceBetween(this,this.level.player)<30){if(this.action)return void(this.actionSymbol.alpha=0);
// On E-click
if(this.game.world.bringToTop(this.actionSymbol),this.actionSymbol.alpha=1,this.level.inputClass.button_E.isDown)
// if(this.openSwitch) return;
// this.openSwitch = true;
// this.action = true;
return this.actionSymbol.alpha=0,void this.level.player.collideWithItem(this.level.player,this)}else this.actionSymbol.alpha=0}}}]),e}(l.default.Sprite);e.default=h},/* 133 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(94),c=a(u),d=function(t){function e(t,i,a,r,o,l,u){n(this,e);var c=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,a,"enemy"));
// console.log(properties);
// this.body.enable = false;
// this.body.enable = true;
return c.game=t,c.player=r,c.map=o,c.type=u.type,c.layer=l,c.dropItemID=u.dropItemID,c.itemType=u.itemType,c.jumpDown=u.jumpDown,c.killQuestID=u.killQuestID,c.health=1,c.dead=!1,c.paralyze=!1,c.attackSoundSwitch=!0,c.finderCall=!0,c.closeSpeed=c.game.rnd.integerInRange(100,150),c.farSpeed=c.game.rnd.integerInRange(200,400),c.startMoving=!1,c.anchor.setTo(.5),c.animations.add("walk",[0,1,2,3,4,5,6,7,8,9],15,!0),c.animations.add("wait",[0],15,!0),c.animations.add("idle",[10,11,12,13,14,14,14,14,14,14,14,14,14,14,14,14,14,15,16,17,18,19,20,21,22,23,24,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],10,!0),c.scale.set(1,1),c.game.time.events.add(h.default.Timer.SECOND*c.game.rnd.integerInRange(1,8),function(){
// if(this.game.rnd.integerInRange(0, 1)){
// 	this.scale.set(1, 1);
// }
c.animations.play("idle")},c),c.game.physics.enable(c),c.body.setSize(13,10,5,7),c.body.bounce.set(1),c.body.drag.set(1500),c.jumpDown?(c.startTween=c.game.add.tween(c).from({y:c.game.camera.height},1500,h.default.Easing.Bounce.Out,!0),c.startTween.onStart.add(function(){c.game.time.events.add(2e3,function(){
// this.game.camera.shake(0.005, 500);
c.startMoving=!0})},c),c.startTween.onComplete.add(function(){},c)):c.startMoving=!0,t.add.existing(c),c}return r(e,t),o(e,[{key:"update",value:function(){var t=this;if(!this.dead){if(this.paralyze)return void this.animations.play("wait");if(this.distanceBetweenEnemiePlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenEnemiePlayer<120){
// if (this.distanceBetweenEnemiePlayer < 100) {
// 	this.animations.play('walk');
// 	this.game.physics.arcade.moveToObject(this, this.player, 150);
// } else {
// 	this.animations.play('walk');
// 	this.game.physics.arcade.moveToObject(this, this.player, this.closeSpeed);
// }
var e=Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y));1==e||2==e||0==e?this.scale.set(-1,1):this.scale.set(1,1),this.attackSoundSwitch&&(this.attackSoundSwitch=!1,this.rndVoice=this.game.rnd.pick(["vx1","vx2","vx3","vx4","vx5","vx6","vx7","vx8","vx9","vx10","vx11","vx12","vx13","vx14","vx15"]),this.voice=this.game.add.audioSprite("VxSeeds"),this.voice.play(this.rndVoice,.1),this.game.time.events.add(2*h.default.Timer.SECOND,function(){t.attackSoundSwitch=!0},this)),this.finderCall=!0,this.pathfinder&&(this.pathfinder.pathToFollow.length=0),this.game.physics.arcade.moveToObject(this,this.player.body,this.closeSpeed),
// console.log(this.animations.currentAnim.currentFrame.index);
"idle"==this.animations.currentAnim.name&&this.animations._anims.idle.stop(),this.animations.play("walk")}if(this.distanceBetweenEnemiePlayer>120&&this.distanceBetweenEnemiePlayer<400&&this.finderCall){
// console.log('Calculate');
"idle"==this.animations.currentAnim.name&&this.animations._anims.idle.stop(),this.animations.play("walk"),this.attackSoundSwitch&&(this.attackSoundSwitch=!1,this.rndVoice=this.game.rnd.pick(["vx1","vx2","vx3","vx4","vx5","vx6","vx7","vx8","vx9","vx10","vx11","vx12","vx13","vx14","vx15"]),this.voice=this.game.add.audioSprite("VxSeeds"),this.voice.play(this.rndVoice,.1),this.game.time.events.add(2*h.default.Timer.SECOND,function(){t.attackSoundSwitch=!0},this));var i=Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y));1==i||2==i||0==i?this.scale.set(-1,1):this.scale.set(1,1),this.pathfinder=new c.default(this.game,this.map,this,{x:this.player.x,y:this.player.y},this.layer,!0,this.farSpeed,this),this.finderCall=!1}this.pathfinder&&this.startMoving&&this.pathfinder.followPath()}}}]),e}(h.default.Sprite);e.default=d},/* 134 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={dialogues:{
// ==================
// Standard Dialogues Villager
// ==================
// Botanic
1:["Hello! Do you need plant seeds?","No? Alright! Come back anytime you want!"],
// Veteran
2:["What do you want?","Say something or leave. I don't have time \nfor that."],
// Librarian
3:["Hmm","Oh, I havent even noticed you."],
// Smith
4:["If you need any armour or want to practice \nyour fighting skills, let me know.","I love my daughters. They are such precious\nsweethearts"],
// Girl3
5:["Hi! My dad is single because our mother died a \nwhile ago. But he is the best.","My sisters think I'm annoying but they are \njust jealous."],
// Woman1
6:["The temple is our sanctuary! The only people \nallowed here are priests, believers and heros, \nthose blessed by the oracle.","You need to prove yourself before you're \nallowed to step in front of the oracle."],
// Girl2
7:["My Dad made this hammer! He's the best!","I could easily fight these monsters but dad \ndoesn't let me."],
// Girl1
8:["...","... Dad said I shouldn't talk to strangers."],
// Fishlady (Woman2)
9:["You better buy my fish.","Ugh... A woman needs to make a living in this \ntown and you're just ruining my business if \nyou're only staring. Buy something or leave."],
// Priest
10:["Praise the Oracle!","The Oracle and it's followers are a very wise \nand incredible religion, following generations \nof worshipping each and every hero that gets \nchosen by our Oracle.","We still got our hopes up, praying for the next \nhero to save us from the plant monsters hiding \nin the woods..."],
// ============================
// Specific Dialogues Villager
// ============================
// Priest Quest 
11:["Please, save us from this plague! The whole \ntown needs you, young hero!"],12:["Thank you for saving us! May you be blessed by \nthe Oracle!","What? You don’t know how you ended up here? \nInteresting.","Maybe if you stay for a while your memory will \nreturn. ","Feel free to stay as long as you need to."],
// Molly
13:["I can not believe this! Some filthy thief got \nher or his hands on my fishing rods! \nI can’t catch fish without it. Tsk!","Hey! You! Have you seen my fishing rod? I will \ngive you a great reward if you find the thief \nand return my rod. It would mean the world to me."],14:["There it is! I hope this thief got what he deserved.","... Just an old man? Huh. Well, at least I got my rod back. Thanks.","Here, have one of my quality fish, my promised reward. The freshest fish you can find around Aalis."],
// Fisher
15:["Ugh... The fish just won’t bite lately...","...What do you mean, not my fishing rod?","I may or may not have found it around the forest. \nBut if you want it, you need to get me \na different tool to catch and kill fish. \nLike, a spear maybe. That could work..."],16:["Oh, this is excellent! Thank you so much, \nyoung man!","Now all I crave would be a tasty fish. \nLet’s hope I can get one soon."],17:["Oh my god, praise the Oracle, my deepest desires are fulfilled! You truly are a hero. Let me give you something in exchange for your efforts.","I found it a long time ago but I never found any lock it fitted. You will probably have a better use for it than me."],18:[],
// Schmied
19:["Blabla Get me some weed"],20:["There you go. Thank you for getting the \nmaterials needed. \nPleasure doing business with you."],
// Viden
21:["Would you mind helping me out a little? \nI need you to cut at least ten flowers \nand collect the petals for me.","It will help my research a lot."],22:["Thank you so much, young man. I appreciate your help."],
// Bromium
23:["Young man, you have proven that you mean no harm, even more, that you go out of your way to actively help the townsfolk.","Someone like you deserves a proper room to stay. Feel free to pass by the town hall to rest and take a break."],
// Ally
24:["Dad said I’m not allowed to leave the town but \nmy doll is gone!","I want my doll back. It must be somewhere. \nMaybe on the way to the temple? Or in the woods? \nI can not remember...","Can you help me, Sir? Please. Pleaaseee!"],25:["Thank you so much!! \nI will tell Dad and everyone else how \nawesome you are!"],
// Viden
26:["We need help! Quick! The plant monsters, they cornered Reya!","Please, young hero, we need your help again!"],
// Reya
27:["AHHHHHHHHH!!"],28:["Thank you so, so much! May you be blessed by the Oracle.","Let’s go back, Dad is probably worried sick."],
// Coppus
29:["Thank you for saving my daughter. I can not thank you enough. Just thinking what could’ve happened...","You were in the right place at the right time.","Take this. May it be a great help on the adventures and dangers you are about to face, brave hero."],
// Priest
30:["I haven’t seen someone as brave as you in a while. You have the true potential to be a hero... Maybe even a chosen one by the ancient prophecy.","I will let Wren know, she will inform you about the rules every hero has to follow when stepping in front of the oracle."],
// Wren
31:["Welcome in the temple, the Oracle’s sanctuary.","No use of weapons. No talking while the Almighty \nis speaking. It is very important that you \nshow respect towards our goddess. Understood?","If you are ready, you now may step in front of \nthe Oracle."],
// Oracle
32:["I can feel it... ","Your soul...","You are a hero, aren’t you? \nSuch an amazing, strong soul...","You have to be one of the heroes, \nchosen by an ancient prophecy... \nAnd as such, I have a request. ","To properly start your journey... \nTo become stronger and find your true purpose.","This request is...","Please, save my town. Monsters made of vines \nand leaves tried to attack and \ntake over my town.","My precious believers need you! \nDefeat the leader of these monstrosities. \nThey hide in the woods, deep in the darkness, \nhidden, unseen...","It is your destiny to save us..."],
// ##############################
// ## Village Attack Dialogues ##
// ##############################
// Viden
33:["I would love to properly research these monsters \nbut... These are too many. Nobody would survive \ngoing outside right now. It's way too dangerous."],
// Bromium
34:["Of course this has to happen when our village is without a hero! Let's pray to the Oracle that nobody gets seriously hurt and these monsters leave soon."],
// Librarian
35:["I already looked through all the books, but \nnothing! Not a single book holds the information \nto help me come up with a solution to this mess. ","Without someone strong enough to face these \nmonsters, it seems we can not do much besides \nawaiting, praying and hoping for the best."],
// Smith
36:["I would fight these monsters, but I can not risk \nit. If I get hurt or worse, who would take care \nof my beautiful daughters?"],
// Girl1
37:["I'm so scared. I hope everyone is alright. \nThis is terrible... \nMay the Oracle protect us all."],
// Girl2
38:["I would love to fight with my Dad, but he won't \nallow my sisters or me to leave the house. \nAt all. Ugh."],
// Girl3
39:["Nobody won't tell me what's going on outside... \nAnd we're not allowed to leave either. \nI just want to play outside again."],
// Molly (Woman2)
40:["I really hope someone gets rid of these beasts \nsoon. I was just about to go outside and get \nfresh fish and now this is happening. \nThese monsters ruin my business."],41:["Grmbl..."]}}},/* 135 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r){a(this,e);var o=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,"lucy"));o.game=t,o.level=r,o.player=o.level.player,o.anchor.set(.5),o.speed=100,o.game.physics.enable(o),o.tweenSwitch=!0;var l=o.body.velocity.x,h=o.body.velocity.y;
// this.customEmitter.setScale(-1, 1, 1, 1, 3000, Phaser.Easing.Sinusoidal.InOut, true);
// this.customEmitter.setYSpeed(100);
// this.customEmitter.setXSpeed(-100, 100);
// this.offsetY = this.offsetY + 2;
// console.log(this.offsetY);
// this.angle = 90;
return l*=-1,h*=-1,o.customEmitter=o.game.add.emitter(o.x,o.y,30),o.customEmitter.width=10,o.customEmitter.height=10,o.customEmitter.minParticleScale=1,o.customEmitter.maxParticleScale=2,o.customEmitter.gravity=.5,o.customEmitter.setAlpha(1,0,700,null,!0),o.customEmitter.gravity=.5,o.customEmitter.minParticleSpeed.set(l,h),o.customEmitter.maxParticleSpeed.set(l,h),o.customEmitter.makeParticles("blackParticle"),o.customEmitter.start(!1,1e3,50,0),o.shadow=o.game.add.sprite(o.x,o.y+30,"lucyShadow"),o.shadow.anchor.set(.5),o.game.physics.enable(o.shadow),o.shadow.animations.add("shadow",[6,5,4,3,2,1,0],3,!0),o.shadow.animations.play("shadow"),t.add.existing(o),o}return s(e,t),r(e,[{key:"addShadow",value:function(){}},{key:"update",value:function(){this.customEmitter.on=!0,this.customEmitter.x=this.x,this.customEmitter.y=this.y,this.game.physics.arcade.overlap(this.shadow,this.level.groundLayer,this.addShadow,null,this),this.distanceBetweenLucyPlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenLucyPlayer>40?(this.shadow.animations.stop(),this.shadow.x=this.x,this.shadow.y=this.y+30,this.tweenSwitch=!0,this.tween&&this.tween.stop(),this.distanceBetweenLucyPlayer>80?this.game.physics.arcade.moveToObject(this,this.player,80):this.game.physics.arcade.moveToObject(this,this.player,30)):(this.shadow.x=this.x,this.shadow.y=this.y+30,
// if (this.tweenSwitch) {
// 	// this.tweenShadow = this.game.add.tween(this.shadow).to( { y: this.player.y + 10}, 1000, "Linear", true, 0, 0, true).loop();
// 	this.shadow.animations.play('shadow');
// 	this.tween = this.game.add
// 		.tween(this)
// 		.to({ bottom: this.bottom + 10 }, 1050, 'Linear', true, 0, 0, true)
// 		.loop();
// 	this.shadowTween = this.game.add
// 		.tween(this.shadow)
// 		.to({ y: this.shadow.y - 2 }, 1050, 'Linear', true, 0, 0, true)
// 		.loop();
// 	this.tweenSwitch = false;
// }
this.customEmitter.on=!1,this.body.velocity.set(0)),
// console.log(this.distanceBetweenLucyPlayer);
// this.angle += 1;
this.rotation=this.game.physics.arcade.angleToXY(this,this.player.x,this.player.y)}}]),e}(l.default.Sprite);e.default=h},/* 136 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=function(){function t(e,i){a(this,t),this.game=e,this.level=i,this.activeOpen=!0,this.activeClose=!0,this.show=!1,this.questmapBackground}return n(t,[{key:"toggleMap",value:function(){this.show?(this.closeMap(),this.show=!1):(this.showMap(),this.show=!0)}},{key:"showMap",value:function(){this.quests=this.level.safe.getQuests(),this.heading1=game.add.retroFont("carinaFont",7,7,Phaser.RetroFont.TEXT_SET1,18,0,2,0,1),this.heading1.setText("Active Quests:",!0,-1,5,"left",!0),this.heading1Sprite=this.game.add.image(this.game.camera.width/2-190,this.game.camera.height/2-70,this.heading1),this.heading1Sprite.fixedToCamera=!0,this.text=game.add.retroFont("carinaFont",7,7,Phaser.RetroFont.TEXT_SET1,18,0,2,0,1),
// this.text.setText(content, true, -1, 5, 'left', true)
this.fontImage=this.game.add.image(this.game.camera.width/2-190,this.game.camera.height/2-50,this.text),this.fontImage.fixedToCamera=!0;var t="";for(var e in this.quests)if(!isNaN(e)){if(this.quests[e].silent)continue;void 0!==this.quests[e].questKillEnemyAmount&&!1!==this.quests[e].questKillEnemyAmount?t+="* "+this.quests[e].questMessage+": "+this.quests[e].questDeadEnemies+"/"+this.quests[e].questKillEnemyAmount+"\n":t+="* "+this.quests[e].questMessage+"\n"}this.text.setText(t,!0,-1,5,"left",!0);var i=0,a=this.quests.masteredQuests.reverse();this.heading2=game.add.retroFont("carinaFont",7,7,Phaser.RetroFont.TEXT_SET1,18,0,2,0,1),this.heading2.setText("Mastered Quests:",!0,-1,5,"left",!0),this.heading2Sprite=this.game.add.image(this.game.camera.width/2-190,this.game.camera.height/2+10,this.heading2),this.heading2Sprite.fixedToCamera=!0,this.textMastered=game.add.retroFont("carinaFont",7,7,Phaser.RetroFont.TEXT_SET1,18,0,2,0,1),
// this.text.setText(content, true, -1, 5, 'left', true)
this.fontImageMastered=this.game.add.image(this.game.camera.width/2-190,this.game.camera.height/2+30,this.textMastered),this.fontImageMastered.fixedToCamera=!0,this.fontImageMastered.alpha=.3;for(var n="",s=0;s<a.length;s++)if(i<3){var r=this.level.questManager.getQuestByID(a[s]);if(""==r.questMessage)continue;n+="* "+r.questMessage+"\n",i++}this.textMastered.setText(n,!0,-1,5,"left",!0)}},{key:"closeMap",value:function(){console.log("Close Questmap")}}]),t}();e.default=s},/* 137 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(1),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e,i,n){a(this,t),this.game=e,this.level=i,this.ingameMenu=n,this.show=!1,this.mapValues={map1:{x:504,y:592,width:159,height:242},map2:{x:342,y:464,width:150,height:144},map3:{x:370,y:241,width:106,height:223},map4:{x:27,y:85,width:64,height:64},map10:{x:308,y:747,width:211,height:139},map11:{x:339,y:608,width:149,height:139}}}return n(t,[{key:"toggleMap",value:function(){this.show?(this.removeMap(),this.show=!1):(this.show=!0,this.createMap())}},{key:"createMap",value:function(){this.calculateValues(),this.game.renderer.renderSession.roundPixels=!0,this.map=this.game.add.sprite(this.game.camera.width/2-470,this.game.camera.height/2-500,"newGameMap"),
// this.map.x = this.map.x - this.map.width/2;
// this.map.x = this.map.y - this.map.height/2;
this.map.fixedToCamera=!0,this.mask=this.game.add.graphics(300,180),this.mask.beginFill(16777215),this.mask.drawRect(this.game.camera.width/2-500,this.game.camera.height/2-259,400,180),this.mask.fixedToCamera=!0,this.map.mask=this.mask,this.bmdPlayer=this.game.add.bitmapData(6,6),this.bmdPlayer.ctx.beginPath(),this.bmdPlayer.ctx.rect(0,0,6,6),this.bmdPlayer.ctx.fillStyle="#FF00FF",this.bmdPlayer.ctx.fill(),this.playerDot&&this.playerDot.destroy();
// [this.level.currentMap]
for(var t in this.mapValues)t==this.level.currentMap&&(this.piece=this.mapValues[t]);this.playerPX=this.piece.x+this.valueX*this.piece.width,this.playerPY=this.piece.y+this.valueY*this.piece.height,this.playerDot=this.game.add.sprite(this.map.x+this.playerPX,this.map.y+this.playerPY,this.bmdPlayer),this.map.x=this.map.x+this.playerPX,this.map.y=this.map.y+this.playerPY,this.playerDot.anchor.set(.5),this.playerDot.mask=this.mask,
// this.map.hitArea = PIXI.Rectangle;
this.map.hitArea=new r.default.Rectangle(this.ingameMenu.menuBackground.x,this.ingameMenu.menuBackground.y,this.ingameMenu.menuBackground.width,this.ingameMenu.menuBackground.height),console.log(this.map.hitArea),console.log(this.ingameMenu.menuBackground.x,this.ingameMenu.menuBackground.y),this.map.inputEnabled=!0,this.map.input.enableDrag(!1)}},{key:"calculateValues",value:function(){
//Player Values from 0 to 1
this.valueX=Math.round(this.level.player.x/this.game.world.width/100*100*10)/10,this.valueY=Math.round(this.level.player.y/this.game.world.height/100*100*10)/10,console.log("ValuePlayerX: "+this.valueX),console.log("ValuePlayerY: "+this.valueY)}},{key:"update",value:function(){this.playerDot.x=this.map.x+this.playerPX,this.playerDot.y=this.map.y+this.playerPY}},{key:"removeMap",value:function(){this.game.renderer.renderSession.roundPixels=!1,this.map&&(this.gameMapbackground.destroy(),this.gameMapbackground=!1,this.map.destroy(),this.mask.destroy(),this.playerDot.destroy())}}]),t}();e.default=o},/* 138 */
/***/
function(t,e){/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
t.exports=function(t){function e(t){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",t)}try{"undefined"!=typeof execScript&&
// Check for IE =< 8
function(){return"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener}()?execScript(t):"undefined"!=typeof eval?eval.call(null,t):e("EvalError: No eval function available")}catch(t){e(t)}}},/* 139 */
/***/
function(t,e,i){i(140),t.exports=i(342)},/* 140 */
/***/
function(t,e,i){"use strict";/* WEBPACK VAR INJECTION */
(function(t){function e(t,e,i){t[e]||Object[a](t,e,{writable:!0,configurable:!0,value:i})}if(i(141),i(338),i(339),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var a="defineProperty";e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(e,i(48))},/* 141 */
/***/
function(t,e,i){i(142),i(144),i(145),i(146),i(147),i(148),i(149),i(150),i(151),i(152),i(153),i(154),i(155),i(156),i(157),i(158),i(160),i(161),i(162),i(163),i(164),i(165),i(166),i(167),i(168),i(169),i(170),i(171),i(172),i(173),i(174),i(175),i(176),i(177),i(178),i(179),i(180),i(181),i(182),i(183),i(184),i(185),i(186),i(187),i(188),i(189),i(190),i(191),i(192),i(193),i(194),i(195),i(196),i(197),i(198),i(199),i(200),i(201),i(202),i(203),i(204),i(205),i(206),i(207),i(208),i(209),i(210),i(211),i(212),i(213),i(214),i(215),i(216),i(217),i(218),i(219),i(220),i(222),i(223),i(225),i(226),i(227),i(228),i(229),i(230),i(231),i(233),i(234),i(235),i(236),i(237),i(238),i(239),i(240),i(241),i(242),i(243),i(244),i(245),i(87),i(246),i(247),i(114),i(248),i(249),i(250),i(251),i(252),i(117),i(119),i(120),i(253),i(254),i(255),i(256),i(257),i(258),i(259),i(260),i(261),i(262),i(263),i(264),i(265),i(266),i(267),i(268),i(269),i(270),i(271),i(272),i(273),i(274),i(275),i(276),i(277),i(278),i(279),i(280),i(281),i(282),i(283),i(284),i(285),i(286),i(287),i(288),i(289),i(290),i(291),i(292),i(293),i(294),i(295),i(296),i(297),i(298),i(299),i(300),i(301),i(302),i(303),i(304),i(305),i(306),i(307),i(308),i(309),i(310),i(311),i(312),i(313),i(314),i(315),i(316),i(317),i(318),i(319),i(320),i(321),i(322),i(323),i(324),i(325),i(326),i(327),i(328),i(329),i(330),i(331),i(332),i(333),i(334),i(335),i(336),i(337),t.exports=i(23)},/* 142 */
/***/
function(t,e,i){"use strict";
// ECMAScript 6 symbols shim
var a=i(3),n=i(12),s=i(7),r=i(0),o=i(14),l=i(31).KEY,h=i(4),u=i(52),c=i(44),d=i(34),p=i(6),f=i(97),m=i(67),g=i(143),y=i(55),v=i(2),b=i(5),w=i(16),S=i(24),x=i(33),k=i(38),P=i(100),_=i(17),T=i(8),M=i(36),E=_.f,O=T.f,B=P.f,D=a.Symbol,A=a.JSON,C=A&&A.stringify,I=p("_hidden"),L=p("toPrimitive"),F={}.propertyIsEnumerable,R=u("symbol-registry"),q=u("symbols"),j=u("op-symbols"),N=Object.prototype,G="function"==typeof D,V=a.QObject,K=!V||!V.prototype||!V.prototype.findChild,X=s&&h(function(){return 7!=k(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(t,e,i){var a=E(N,e);a&&delete N[e],O(t,e,i),a&&t!==N&&O(N,e,a)}:O,U=function(t){var e=q[t]=k(D.prototype);return e._k=t,e},Y=G&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},H=function(t,e,i){return t===N&&H(j,e,i),v(t),e=S(e,!0),v(i),n(q,e)?(i.enumerable?(n(t,I)&&t[I][e]&&(t[I][e]=!1),i=k(i,{enumerable:x(0,!1)})):(n(t,I)||O(t,I,x(1,{})),t[I][e]=!0),X(t,e,i)):O(t,e,i)},W=function(t,e){v(t);for(var i,a=g(e=w(e)),n=0,s=a.length;s>n;)H(t,i=a[n++],e[i]);return t},Q=function(t,e){return void 0===e?k(t):W(k(t),e)},J=function(t){var e=F.call(this,t=S(t,!0));return!(this===N&&n(q,t)&&!n(j,t))&&(!(e||!n(this,t)||!n(q,t)||n(this,I)&&this[I][t])||e)},z=function(t,e){if(t=w(t),e=S(e,!0),t!==N||!n(q,e)||n(j,e)){var i=E(t,e);return!i||!n(q,e)||n(t,I)&&t[I][e]||(i.enumerable=!0),i}},Z=function(t){for(var e,i=B(w(t)),a=[],s=0;i.length>s;)n(q,e=i[s++])||e==I||e==l||a.push(e);return a},$=function(t){for(var e,i=t===N,a=B(i?j:w(t)),s=[],r=0;a.length>r;)!n(q,e=a[r++])||i&&!n(N,e)||s.push(q[e]);return s};
// 19.4.1.1 Symbol([description])
G||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(i){this===N&&e.call(j,i),n(this,I)&&n(this[I],t)&&(this[I][t]=!1),X(this,t,x(1,i))};return s&&K&&X(N,t,{configurable:!0,set:e}),U(t)},o(D.prototype,"toString",function(){return this._k}),_.f=z,T.f=H,i(39).f=P.f=Z,i(50).f=J,i(54).f=$,s&&!i(35)&&o(N,"propertyIsEnumerable",J,!0),f.f=function(t){return U(p(t))}),r(r.G+r.W+r.F*!G,{Symbol:D});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
","),et=0;tt.length>et;)p(tt[et++]);for(var it=M(p.store),at=0;it.length>at;)m(it[at++]);r(r.S+r.F*!G,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(t){return n(R,t+="")?R[t]:R[t]=D(t)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),r(r.S+r.F*!G,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:Q,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:H,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:W,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:z,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:Z,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
A&&r(r.S+r.F*(!G||h(function(){var t=D();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,i,a=[t],n=1;arguments.length>n;)a.push(arguments[n++]);if(i=e=a[1],(b(e)||void 0!==t)&&!Y(t))// IE8 returns string on undefined
return y(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!Y(e))return e}),a[1]=e,C.apply(A,a)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
D.prototype[L]||i(13)(D.prototype,L,D.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
c(D,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
c(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
c(a.JSON,"JSON",!0)},/* 143 */
/***/
function(t,e,i){
// all enumerable object keys, includes symbols
var a=i(36),n=i(54),s=i(50);t.exports=function(t){var e=a(t),i=n.f;if(i)for(var r,o=i(t),l=s.f,h=0;o.length>h;)l.call(t,r=o[h++])&&e.push(r);return e}},/* 144 */
/***/
function(t,e,i){var a=i(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
a(a.S,"Object",{create:i(38)})},/* 145 */
/***/
function(t,e,i){var a=i(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
a(a.S+a.F*!i(7),"Object",{defineProperty:i(8).f})},/* 146 */
/***/
function(t,e,i){var a=i(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
a(a.S+a.F*!i(7),"Object",{defineProperties:i(99)})},/* 147 */
/***/
function(t,e,i){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var a=i(16),n=i(17).f;i(27)("getOwnPropertyDescriptor",function(){return function(t,e){return n(a(t),e)}})},/* 148 */
/***/
function(t,e,i){
// 19.1.2.9 Object.getPrototypeOf(O)
var a=i(10),n=i(18);i(27)("getPrototypeOf",function(){return function(t){return n(a(t))}})},/* 149 */
/***/
function(t,e,i){
// 19.1.2.14 Object.keys(O)
var a=i(10),n=i(36);i(27)("keys",function(){return function(t){return n(a(t))}})},/* 150 */
/***/
function(t,e,i){
// 19.1.2.7 Object.getOwnPropertyNames(O)
i(27)("getOwnPropertyNames",function(){return i(100).f})},/* 151 */
/***/
function(t,e,i){
// 19.1.2.5 Object.freeze(O)
var a=i(5),n=i(31).onFreeze;i(27)("freeze",function(t){return function(e){return t&&a(e)?t(n(e)):e}})},/* 152 */
/***/
function(t,e,i){
// 19.1.2.17 Object.seal(O)
var a=i(5),n=i(31).onFreeze;i(27)("seal",function(t){return function(e){return t&&a(e)?t(n(e)):e}})},/* 153 */
/***/
function(t,e,i){
// 19.1.2.15 Object.preventExtensions(O)
var a=i(5),n=i(31).onFreeze;i(27)("preventExtensions",function(t){return function(e){return t&&a(e)?t(n(e)):e}})},/* 154 */
/***/
function(t,e,i){
// 19.1.2.12 Object.isFrozen(O)
var a=i(5);i(27)("isFrozen",function(t){return function(e){return!a(e)||!!t&&t(e)}})},/* 155 */
/***/
function(t,e,i){
// 19.1.2.13 Object.isSealed(O)
var a=i(5);i(27)("isSealed",function(t){return function(e){return!a(e)||!!t&&t(e)}})},/* 156 */
/***/
function(t,e,i){
// 19.1.2.11 Object.isExtensible(O)
var a=i(5);i(27)("isExtensible",function(t){return function(e){return!!a(e)&&(!t||t(e))}})},/* 157 */
/***/
function(t,e,i){
// 19.1.3.1 Object.assign(target, source)
var a=i(0);a(a.S+a.F,"Object",{assign:i(101)})},/* 158 */
/***/
function(t,e,i){
// 19.1.3.10 Object.is(value1, value2)
var a=i(0);a(a.S,"Object",{is:i(159)})},/* 159 */
/***/
function(t,e){
// 7.2.9 SameValue(x, y)
t.exports=Object.is||function(t,e){
// eslint-disable-next-line no-self-compare
return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},/* 160 */
/***/
function(t,e,i){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var a=i(0);a(a.S,"Object",{setPrototypeOf:i(71).set})},/* 161 */
/***/
function(t,e,i){"use strict";
// 19.1.3.6 Object.prototype.toString()
var a=i(51),n={};n[i(6)("toStringTag")]="z",n+""!="[object z]"&&i(14)(Object.prototype,"toString",function(){return"[object "+a(this)+"]"},!0)},/* 162 */
/***/
function(t,e,i){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var a=i(0);a(a.P,"Function",{bind:i(102)})},/* 163 */
/***/
function(t,e,i){var a=i(8).f,n=Function.prototype,s=/^\s*function ([^ (]*)/;
// 19.2.4.2 name
"name"in n||i(7)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},/* 164 */
/***/
function(t,e,i){"use strict";var a=i(5),n=i(18),s=i(6)("hasInstance"),r=Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
s in r||i(8).f(r,s,{value:function(t){if("function"!=typeof this||!a(t))return!1;if(!a(this.prototype))return t instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=n(t);)if(this.prototype===t)return!0;return!1}})},/* 165 */
/***/
function(t,e,i){var a=i(0),n=i(104);
// 18.2.5 parseInt(string, radix)
a(a.G+a.F*(parseInt!=n),{parseInt:n})},/* 166 */
/***/
function(t,e,i){var a=i(0),n=i(105);
// 18.2.4 parseFloat(string)
a(a.G+a.F*(parseFloat!=n),{parseFloat:n})},/* 167 */
/***/
function(t,e,i){"use strict";var a=i(3),n=i(12),s=i(20),r=i(73),o=i(24),l=i(4),h=i(39).f,u=i(17).f,c=i(8).f,d=i(45).trim,p=a.Number,f=p,m=p.prototype,g="Number"==s(i(38)(m)),y="trim"in String.prototype,v=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():d(e,3);var i,a,n,s=e.charCodeAt(0);if(43===s||45===s){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:a=8,n=55;break;// fast equal /^0o[0-7]+$/i
default:return+e}for(var r,l=e.slice(2),h=0,u=l.length;h<u;h++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((r=l.charCodeAt(h))<48||r>n)return NaN;return parseInt(l,a)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,i=this;
// check on 1..constructor(foo) case
return i instanceof p&&(g?l(function(){m.valueOf.call(i)}):"Number"!=s(i))?r(new f(v(e)),i,p):v(e)};for(var b,w=i(7)?h(f):// ES3:
"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)n(f,b=w[S])&&!n(p,b)&&c(p,b,u(f,b));p.prototype=m,m.constructor=p,i(14)(a,"Number",p)}},/* 168 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(26),s=i(106),r=i(74),o=1..toFixed,l=Math.floor,h=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",c=function(t,e){for(var i=-1,a=e;++i<6;)a+=t*h[i],h[i]=a%1e7,a=l(a/1e7)},d=function(t){for(var e=6,i=0;--e>=0;)i+=h[e],h[e]=l(i/t),i=i%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==h[t]){var i=String(h[t]);e=""===e?i:e+r.call("0",7-i.length)+i}return e},f=function(t,e,i){return 0===e?i:e%2==1?f(t,e-1,i*t):f(t*t,e/2,i)},m=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e};a(a.P+a.F*(!!o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i(4)(function(){
// V8 ~ Android 4.3-
o.call({})})),"Number",{toFixed:function(t){var e,i,a,o,l=s(this,u),h=n(t),g="",y="0";if(h<0||h>20)throw RangeError(u);
// eslint-disable-next-line no-self-compare
if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(g="-",l=-l),l>1e-21)if(e=m(l*f(2,69,1))-69,i=e<0?l*f(2,-e,1):l/f(2,e,1),i*=4503599627370496,(e=52-e)>0){for(c(0,i),a=h;a>=7;)c(1e7,0),a-=7;for(c(f(10,a,1),0),a=e-1;a>=23;)d(1<<23),a-=23;d(1<<a),c(1,1),d(2),y=p()}else c(0,i),c(1<<-e,0),y=p()+r.call("0",h);return h>0?(o=y.length,y=g+(o<=h?"0."+r.call("0",h-o)+y:y.slice(0,o-h)+"."+y.slice(o-h))):y=g+y,y}})},/* 169 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(4),s=i(106),r=1..toPrecision;a(a.P+a.F*(n(function(){
// IE7-
return"1"!==r.call(1,void 0)})||!n(function(){
// V8 ~ Android 4.3-
r.call({})})),"Number",{toPrecision:function(t){var e=s(this,"Number#toPrecision: incorrect invocation!");return void 0===t?r.call(e):r.call(e,t)}})},/* 170 */
/***/
function(t,e,i){
// 20.1.2.1 Number.EPSILON
var a=i(0);a(a.S,"Number",{EPSILON:Math.pow(2,-52)})},/* 171 */
/***/
function(t,e,i){
// 20.1.2.2 Number.isFinite(number)
var a=i(0),n=i(3).isFinite;a(a.S,"Number",{isFinite:function(t){return"number"==typeof t&&n(t)}})},/* 172 */
/***/
function(t,e,i){
// 20.1.2.3 Number.isInteger(number)
var a=i(0);a(a.S,"Number",{isInteger:i(107)})},/* 173 */
/***/
function(t,e,i){
// 20.1.2.4 Number.isNaN(number)
var a=i(0);a(a.S,"Number",{isNaN:function(t){
// eslint-disable-next-line no-self-compare
return t!=t}})},/* 174 */
/***/
function(t,e,i){
// 20.1.2.5 Number.isSafeInteger(number)
var a=i(0),n=i(107),s=Math.abs;a(a.S,"Number",{isSafeInteger:function(t){return n(t)&&s(t)<=9007199254740991}})},/* 175 */
/***/
function(t,e,i){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var a=i(0);a(a.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},/* 176 */
/***/
function(t,e,i){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var a=i(0);a(a.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},/* 177 */
/***/
function(t,e,i){var a=i(0),n=i(105);
// 20.1.2.12 Number.parseFloat(string)
a(a.S+a.F*(Number.parseFloat!=n),"Number",{parseFloat:n})},/* 178 */
/***/
function(t,e,i){var a=i(0),n=i(104);
// 20.1.2.13 Number.parseInt(string, radix)
a(a.S+a.F*(Number.parseInt!=n),"Number",{parseInt:n})},/* 179 */
/***/
function(t,e,i){
// 20.2.2.3 Math.acosh(x)
var a=i(0),n=i(108),s=Math.sqrt,r=Math.acosh;a(a.S+a.F*!(r&&
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
710==Math.floor(r(Number.MAX_VALUE))&&
// Tor Browser bug: Math.acosh(Infinity) -> NaN
r(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:n(t-1+s(t-1)*s(t+1))}})},/* 180 */
/***/
function(t,e,i){function a(t){return isFinite(t=+t)&&0!=t?t<0?-a(-t):Math.log(t+Math.sqrt(t*t+1)):t}
// 20.2.2.5 Math.asinh(x)
var n=i(0),s=Math.asinh;
// Tor Browser bug: Math.asinh(0) -> -0
n(n.S+n.F*!(s&&1/s(0)>0),"Math",{asinh:a})},/* 181 */
/***/
function(t,e,i){
// 20.2.2.7 Math.atanh(x)
var a=i(0),n=Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
a(a.S+a.F*!(n&&1/n(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},/* 182 */
/***/
function(t,e,i){
// 20.2.2.9 Math.cbrt(x)
var a=i(0),n=i(75);a(a.S,"Math",{cbrt:function(t){return n(t=+t)*Math.pow(Math.abs(t),1/3)}})},/* 183 */
/***/
function(t,e,i){
// 20.2.2.11 Math.clz32(x)
var a=i(0);a(a.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},/* 184 */
/***/
function(t,e,i){
// 20.2.2.12 Math.cosh(x)
var a=i(0),n=Math.exp;a(a.S,"Math",{cosh:function(t){return(n(t=+t)+n(-t))/2}})},/* 185 */
/***/
function(t,e,i){
// 20.2.2.14 Math.expm1(x)
var a=i(0),n=i(76);a(a.S+a.F*(n!=Math.expm1),"Math",{expm1:n})},/* 186 */
/***/
function(t,e,i){
// 20.2.2.16 Math.fround(x)
var a=i(0);a(a.S,"Math",{fround:i(109)})},/* 187 */
/***/
function(t,e,i){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var a=i(0),n=Math.abs;a(a.S,"Math",{hypot:function(t,e){for(
// eslint-disable-line no-unused-vars
var i,a,s=0,r=0,o=arguments.length,l=0;r<o;)i=n(arguments[r++]),l<i?(a=l/i,s=s*a*a+1,l=i):i>0?(a=i/l,s+=a*a):s+=i;return l===1/0?1/0:l*Math.sqrt(s)}})},/* 188 */
/***/
function(t,e,i){
// 20.2.2.18 Math.imul(x, y)
var a=i(0),n=Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
a(a.S+a.F*i(4)(function(){return-5!=n(4294967295,5)||2!=n.length}),"Math",{imul:function(t,e){var i=+t,a=+e,n=65535&i,s=65535&a;return 0|n*s+((65535&i>>>16)*s+n*(65535&a>>>16)<<16>>>0)}})},/* 189 */
/***/
function(t,e,i){
// 20.2.2.21 Math.log10(x)
var a=i(0);a(a.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},/* 190 */
/***/
function(t,e,i){
// 20.2.2.20 Math.log1p(x)
var a=i(0);a(a.S,"Math",{log1p:i(108)})},/* 191 */
/***/
function(t,e,i){
// 20.2.2.22 Math.log2(x)
var a=i(0);a(a.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},/* 192 */
/***/
function(t,e,i){
// 20.2.2.28 Math.sign(x)
var a=i(0);a(a.S,"Math",{sign:i(75)})},/* 193 */
/***/
function(t,e,i){
// 20.2.2.30 Math.sinh(x)
var a=i(0),n=i(76),s=Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
a(a.S+a.F*i(4)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(n(t)-n(-t))/2:(s(t-1)-s(-t-1))*(Math.E/2)}})},/* 194 */
/***/
function(t,e,i){
// 20.2.2.33 Math.tanh(x)
var a=i(0),n=i(76),s=Math.exp;a(a.S,"Math",{tanh:function(t){var e=n(t=+t),i=n(-t);return e==1/0?1:i==1/0?-1:(e-i)/(s(t)+s(-t))}})},/* 195 */
/***/
function(t,e,i){
// 20.2.2.34 Math.trunc(x)
var a=i(0);a(a.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},/* 196 */
/***/
function(t,e,i){var a=i(0),n=i(37),s=String.fromCharCode,r=String.fromCodePoint;
// length should be 1, old FF problem
a(a.S+a.F*(!!r&&1!=r.length),"String",{
// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function(t){for(
// eslint-disable-line no-unused-vars
var e,i=[],a=arguments.length,r=0;a>r;){if(e=+arguments[r++],n(e,1114111)!==e)throw RangeError(e+" is not a valid code point");i.push(e<65536?s(e):s(55296+((e-=65536)>>10),e%1024+56320))}return i.join("")}})},/* 197 */
/***/
function(t,e,i){var a=i(0),n=i(16),s=i(9);a(a.S,"String",{
// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function(t){for(var e=n(t.raw),i=s(e.length),a=arguments.length,r=[],o=0;i>o;)r.push(String(e[o++])),o<a&&r.push(String(arguments[o]));return r.join("")}})},/* 198 */
/***/
function(t,e,i){"use strict";
// 21.1.3.25 String.prototype.trim()
i(45)("trim",function(t){return function(){return t(this,3)}})},/* 199 */
/***/
function(t,e,i){"use strict";var a=i(77)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
i(78)(String,"String",function(t){this._t=String(t),// target
this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=a(e,i),this._i+=t.length,{value:t,done:!1})})},/* 200 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(77)(!1);a(a.P,"String",{
// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function(t){return n(this,t)}})},/* 201 */
/***/
function(t,e,i){"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var a=i(0),n=i(9),s=i(80),r="".endsWith;a(a.P+a.F*i(81)("endsWith"),"String",{endsWith:function(t){var e=s(this,t,"endsWith"),i=arguments.length>1?arguments[1]:void 0,a=n(e.length),o=void 0===i?a:Math.min(n(i),a),l=String(t);return r?r.call(e,l,o):e.slice(o-l.length,o)===l}})},/* 202 */
/***/
function(t,e,i){"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var a=i(0),n=i(80);a(a.P+a.F*i(81)("includes"),"String",{includes:function(t){return!!~n(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},/* 203 */
/***/
function(t,e,i){var a=i(0);a(a.P,"String",{
// 21.1.3.13 String.prototype.repeat(count)
repeat:i(74)})},/* 204 */
/***/
function(t,e,i){"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var a=i(0),n=i(9),s=i(80),r="".startsWith;a(a.P+a.F*i(81)("startsWith"),"String",{startsWith:function(t){var e=s(this,t,"startsWith"),i=n(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return r?r.call(e,a,i):e.slice(i,i+a.length)===a}})},/* 205 */
/***/
function(t,e,i){"use strict";
// B.2.3.2 String.prototype.anchor(name)
i(15)("anchor",function(t){return function(e){return t(this,"a","name",e)}})},/* 206 */
/***/
function(t,e,i){"use strict";
// B.2.3.3 String.prototype.big()
i(15)("big",function(t){return function(){return t(this,"big","","")}})},/* 207 */
/***/
function(t,e,i){"use strict";
// B.2.3.4 String.prototype.blink()
i(15)("blink",function(t){return function(){return t(this,"blink","","")}})},/* 208 */
/***/
function(t,e,i){"use strict";
// B.2.3.5 String.prototype.bold()
i(15)("bold",function(t){return function(){return t(this,"b","","")}})},/* 209 */
/***/
function(t,e,i){"use strict";
// B.2.3.6 String.prototype.fixed()
i(15)("fixed",function(t){return function(){return t(this,"tt","","")}})},/* 210 */
/***/
function(t,e,i){"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
i(15)("fontcolor",function(t){return function(e){return t(this,"font","color",e)}})},/* 211 */
/***/
function(t,e,i){"use strict";
// B.2.3.8 String.prototype.fontsize(size)
i(15)("fontsize",function(t){return function(e){return t(this,"font","size",e)}})},/* 212 */
/***/
function(t,e,i){"use strict";
// B.2.3.9 String.prototype.italics()
i(15)("italics",function(t){return function(){return t(this,"i","","")}})},/* 213 */
/***/
function(t,e,i){"use strict";
// B.2.3.10 String.prototype.link(url)
i(15)("link",function(t){return function(e){return t(this,"a","href",e)}})},/* 214 */
/***/
function(t,e,i){"use strict";
// B.2.3.11 String.prototype.small()
i(15)("small",function(t){return function(){return t(this,"small","","")}})},/* 215 */
/***/
function(t,e,i){"use strict";
// B.2.3.12 String.prototype.strike()
i(15)("strike",function(t){return function(){return t(this,"strike","","")}})},/* 216 */
/***/
function(t,e,i){"use strict";
// B.2.3.13 String.prototype.sub()
i(15)("sub",function(t){return function(){return t(this,"sub","","")}})},/* 217 */
/***/
function(t,e,i){"use strict";
// B.2.3.14 String.prototype.sup()
i(15)("sup",function(t){return function(){return t(this,"sup","","")}})},/* 218 */
/***/
function(t,e,i){
// 20.3.3.1 / 15.9.4.4 Date.now()
var a=i(0);a(a.S,"Date",{now:function(){return(new Date).getTime()}})},/* 219 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(10),s=i(24);a(a.P+a.F*i(4)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{
// eslint-disable-next-line no-unused-vars
toJSON:function(t){var e=n(this),i=s(e);return"number"!=typeof i||isFinite(i)?e.toISOString():null}})},/* 220 */
/***/
function(t,e,i){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var a=i(0),n=i(221);
// PhantomJS / old WebKit has a broken implementations
a(a.P+a.F*(Date.prototype.toISOString!==n),"Date",{toISOString:n})},/* 221 */
/***/
function(t,e,i){"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var a=i(4),n=Date.prototype.getTime,s=Date.prototype.toISOString,r=function(t){return t>9?t:"0"+t};
// PhantomJS / old WebKit has a broken implementations
t.exports=a(function(){return"0385-07-25T07:06:39.999Z"!=s.call(new Date(-5e13-1))})||!a(function(){s.call(new Date(NaN))})?function(){if(!isFinite(n.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),i=t.getUTCMilliseconds(),a=e<0?"-":e>9999?"+":"";return a+("00000"+Math.abs(e)).slice(a?-6:-4)+"-"+r(t.getUTCMonth()+1)+"-"+r(t.getUTCDate())+"T"+r(t.getUTCHours())+":"+r(t.getUTCMinutes())+":"+r(t.getUTCSeconds())+"."+(i>99?i:"0"+r(i))+"Z"}:s},/* 222 */
/***/
function(t,e,i){var a=Date.prototype,n=a.toString,s=a.getTime;new Date(NaN)+""!="Invalid Date"&&i(14)(a,"toString",function(){var t=s.call(this);
// eslint-disable-next-line no-self-compare
return t===t?n.call(this):"Invalid Date"})},/* 223 */
/***/
function(t,e,i){var a=i(6)("toPrimitive"),n=Date.prototype;a in n||i(13)(n,a,i(224))},/* 224 */
/***/
function(t,e,i){"use strict";var a=i(2),n=i(24);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return n(a(this),"number"!=t)}},/* 225 */
/***/
function(t,e,i){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var a=i(0);a(a.S,"Array",{isArray:i(55)})},/* 226 */
/***/
function(t,e,i){"use strict";var a=i(19),n=i(0),s=i(10),r=i(110),o=i(82),l=i(9),h=i(83),u=i(84);n(n.S+n.F*!i(57)(function(t){Array.from(t)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(t){var e,i,n,c,d=s(t),p="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,g=void 0!==m,y=0,v=u(d);
// if object isn't iterable or it's array with default iterator - use simple case
if(g&&(m=a(m,f>2?arguments[2]:void 0,2)),void 0==v||p==Array&&o(v))for(e=l(d.length),i=new p(e);e>y;y++)h(i,y,g?m(d[y],y):d[y]);else for(c=v.call(d),i=new p;!(n=c.next()).done;y++)h(i,y,g?r(c,m,[n.value,y],!0):n.value);return i.length=y,i}})},/* 227 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(83);
// WebKit Array.of isn't generic
a(a.S+a.F*i(4)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{
// 22.1.2.3 Array.of( ...items)
of:function(){for(var t=0,e=arguments.length,i=new("function"==typeof this?this:Array)(e);e>t;)n(i,t,arguments[t++]);return i.length=e,i}})},/* 228 */
/***/
function(t,e,i){"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var a=i(0),n=i(16),s=[].join;
// fallback for not array-like strings
a(a.P+a.F*(i(49)!=Object||!i(21)(s)),"Array",{join:function(t){return s.call(n(this),void 0===t?",":t)}})},/* 229 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(70),s=i(20),r=i(37),o=i(9),l=[].slice;
// fallback for not array-like ES3 strings and DOM objects
a(a.P+a.F*i(4)(function(){n&&l.call(n)}),"Array",{slice:function(t,e){var i=o(this.length),a=s(this);if(e=void 0===e?i:e,"Array"==a)return l.call(this,t,e);for(var n=r(t,i),h=r(e,i),u=o(h-n),c=new Array(u),d=0;d<u;d++)c[d]="String"==a?this.charAt(n+d):this[n+d];return c}})},/* 230 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(11),s=i(10),r=i(4),o=[].sort,l=[1,2,3];a(a.P+a.F*(r(function(){
// IE8-
l.sort(void 0)})||!r(function(){
// V8 bug
l.sort(null)})||!i(21)(o)),"Array",{
// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),n(t))}})},/* 231 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(28)(0),s=i(21)([].forEach,!0);a(a.P+a.F*!s,"Array",{
// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(t){return n(this,t,arguments[1])}})},/* 232 */
/***/
function(t,e,i){var a=i(5),n=i(55),s=i(6)("species");t.exports=function(t){var e;
// cross-realm fallback
return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)||(e=void 0),a(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},/* 233 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(28)(1);a(a.P+a.F*!i(21)([].map,!0),"Array",{
// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(t){return n(this,t,arguments[1])}})},/* 234 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(28)(2);a(a.P+a.F*!i(21)([].filter,!0),"Array",{
// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(t){return n(this,t,arguments[1])}})},/* 235 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(28)(3);a(a.P+a.F*!i(21)([].some,!0),"Array",{
// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(t){return n(this,t,arguments[1])}})},/* 236 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(28)(4);a(a.P+a.F*!i(21)([].every,!0),"Array",{
// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(t){return n(this,t,arguments[1])}})},/* 237 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(111);a(a.P+a.F*!i(21)([].reduce,!0),"Array",{
// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(t){return n(this,t,arguments.length,arguments[1],!1)}})},/* 238 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(111);a(a.P+a.F*!i(21)([].reduceRight,!0),"Array",{
// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(t){return n(this,t,arguments.length,arguments[1],!0)}})},/* 239 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(53)(!1),s=[].indexOf,r=!!s&&1/[1].indexOf(1,-0)<0;a(a.P+a.F*(r||!i(21)(s)),"Array",{
// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(t){// convert -0 to +0
return r?s.apply(this,arguments)||0:n(this,t,arguments[1])}})},/* 240 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(16),s=i(26),r=i(9),o=[].lastIndexOf,l=!!o&&1/[1].lastIndexOf(1,-0)<0;a(a.P+a.F*(l||!i(21)(o)),"Array",{
// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(t){
// convert -0 to +0
if(l)return o.apply(this,arguments)||0;var e=n(this),i=r(e.length),a=i-1;for(arguments.length>1&&(a=Math.min(a,s(arguments[1]))),a<0&&(a=i+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}})},/* 241 */
/***/
function(t,e,i){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var a=i(0);a(a.P,"Array",{copyWithin:i(112)}),i(32)("copyWithin")},/* 242 */
/***/
function(t,e,i){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var a=i(0);a(a.P,"Array",{fill:i(86)}),i(32)("fill")},/* 243 */
/***/
function(t,e,i){"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var a=i(0),n=i(28)(5),s=!0;
// Shouldn't skip holes
"find"in[]&&Array(1).find(function(){s=!1}),a(a.P+a.F*s,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(32)("find")},/* 244 */
/***/
function(t,e,i){"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var a=i(0),n=i(28)(6),s="findIndex",r=!0;
// Shouldn't skip holes
s in[]&&Array(1)[s](function(){r=!1}),a(a.P+a.F*r,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(32)(s)},/* 245 */
/***/
function(t,e,i){i(40)("Array")},/* 246 */
/***/
function(t,e,i){var a=i(3),n=i(73),s=i(8).f,r=i(39).f,o=i(56),l=i(58),h=a.RegExp,u=h,c=h.prototype,d=/a/g,p=/a/g,f=new h(d)!==d;if(i(7)&&(!f||i(4)(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return p[i(6)("match")]=!1,h(d)!=d||h(p)==p||"/a/i"!=h(d,"i")}))){h=function(t,e){var i=this instanceof h,a=o(t),s=void 0===e;return!i&&a&&t.constructor===h&&s?t:n(f?new u(a&&!s?t.source:t,e):u((a=t instanceof h)?t.source:t,a&&s?l.call(t):e),i?this:c,h)};for(var m=r(u),g=0;m.length>g;)!function(t){t in h||s(h,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})}(m[g++]);c.constructor=h,h.prototype=c,i(14)(a,"RegExp",h)}i(40)("RegExp")},/* 247 */
/***/
function(t,e,i){"use strict";i(114);var a=i(2),n=i(58),s=i(7),r=/./.toString,o=function(t){i(14)(RegExp.prototype,"toString",t,!0)};
// 21.2.5.14 RegExp.prototype.toString()
i(4)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)}):"toString"!=r.name&&o(function(){return r.call(this)})},/* 248 */
/***/
function(t,e,i){
// @@match logic
i(59)("match",1,function(t,e,i){
// 21.1.3.11 String.prototype.match(regexp)
return[function(i){"use strict";var a=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,a):new RegExp(i)[e](String(a))},i]})},/* 249 */
/***/
function(t,e,i){
// @@replace logic
i(59)("replace",2,function(t,e,i){
// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function(a,n){"use strict";var s=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,s,n):i.call(String(s),a,n)},i]})},/* 250 */
/***/
function(t,e,i){
// @@search logic
i(59)("search",1,function(t,e,i){
// 21.1.3.15 String.prototype.search(regexp)
return[function(i){"use strict";var a=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,a):new RegExp(i)[e](String(a))},i]})},/* 251 */
/***/
function(t,e,i){
// @@split logic
i(59)("split",2,function(t,e,a){"use strict";var n=i(56),s=a,r=[].push,o="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[o]||2!="ab".split(/(?:ab)*/)[o]||4!=".".split(/(.?)(.?)/)[o]||".".split(/()()/)[o]>1||"".split(/.?/)[o]){var l=void 0===/()??/.exec("")[1];// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
a=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];
// If `separator` is not a regex, use native split
if(!n(t))return s.call(i,t,e);var a,h,u,c,d,p=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=void 0===e?4294967295:e>>>0,y=new RegExp(t.source,f+"g");for(
// Doesn't need flags gy, but they don't hurt
l||(a=new RegExp("^"+y.source+"$(?!\\s)",f));(h=y.exec(i))&&!((
// `separatorCopy.lastIndex` is not reliable cross-browser
u=h.index+h[0][o])>m&&(p.push(i.slice(m,h.index)),
// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
!l&&h[o]>1&&h[0].replace(a,function(){for(d=1;d<arguments[o]-2;d++)void 0===arguments[d]&&(h[d]=void 0)}),h[o]>1&&h.index<i[o]&&r.apply(p,h.slice(1)),c=h[0][o],m=u,p[o]>=g));)y.lastIndex===h.index&&y.lastIndex++;return m===i[o]?!c&&y.test("")||p.push(""):p.push(i.slice(m)),p[o]>g?p.slice(0,g):p}}else"0".split(void 0,0)[o]&&(a=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});
// 21.1.3.17 String.prototype.split(separator, limit)
return[function(i,n){var s=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,s,n):a.call(String(s),i,n)},a]})},/* 252 */
/***/
function(t,e,i){"use strict";var a,n,s,r,o=i(35),l=i(3),h=i(19),u=i(51),c=i(0),d=i(5),p=i(11),f=i(41),m=i(42),g=i(60),y=i(88).set,v=i(89)(),b=i(90),w=i(115),S=i(116),x=l.TypeError,k=l.process,P=l.Promise,_="process"==u(k),T=function(){},M=n=b.f,E=!!function(){try{
// correct subclassing with @@species support
var t=P.resolve(1),e=(t.constructor={})[i(6)("species")]=function(t){t(T,T)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(_||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e}catch(t){}}(),O=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},B=function(t,e){if(!t._n){t._n=!0;var i=t._c;v(function(){for(var a=t._v,n=1==t._s,s=0;i.length>s;)!function(e){var i,s,r=n?e.ok:e.fail,o=e.resolve,l=e.reject,h=e.domain;try{r?(n||(2==t._h&&C(t),t._h=1),!0===r?i=a:(h&&h.enter(),i=r(a),h&&h.exit()),i===e.promise?l(x("Promise-chain cycle")):(s=O(i))?s.call(i,o,l):o(i)):l(a)}catch(t){l(t)}}(i[s++]);// variable length - can't use forEach
t._c=[],t._n=!1,e&&!t._h&&D(t)})}},D=function(t){y.call(l,function(){var e,i,a,n=t._v,s=A(t);if(s&&(e=w(function(){_?k.emit("unhandledRejection",n,t):(i=l.onunhandledrejection)?i({promise:t,reason:n}):(a=l.console)&&a.error&&a.error("Unhandled promise rejection",n)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t._h=_||A(t)?2:1),t._a=void 0,s&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){y.call(l,function(){var e;_?k.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,// unwrap
e._v=t,e._s=2,e._a||(e._a=e._c.slice()),B(e,!0))},L=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;// unwrap
try{if(i===t)throw x("Promise can't be resolved itself");(e=O(t))?v(function(){var a={_w:i,_d:!1};// wrap
try{e.call(t,h(L,a,1),h(I,a,1))}catch(t){I.call(a,t)}}):(i._v=t,i._s=1,B(i,!1))}catch(t){I.call({_w:i,_d:!1},t)}}};
// constructor polyfill
E||(
// 25.4.3.1 Promise(executor)
P=function(t){f(this,P,"Promise","_h"),p(t),a.call(this);try{t(h(L,this,1),h(I,this,1))}catch(t){I.call(this,t)}},
// eslint-disable-next-line no-unused-vars
a=function(t){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},a.prototype=i(43)(P.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(t,e){var i=M(g(this,P));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=_?k.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&B(this,!1),i.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(t){return this.then(void 0,t)}}),s=function(){var t=new a;this.promise=t,this.resolve=h(L,t,1),this.reject=h(I,t,1)},b.f=M=function(t){return t===P||t===r?new s(t):n(t)}),c(c.G+c.W+c.F*!E,{Promise:P}),i(44)(P,"Promise"),i(40)("Promise"),r=i(23).Promise,
// statics
c(c.S+c.F*!E,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(t){var e=M(this);return(0,e.reject)(t),e.promise}}),c(c.S+c.F*(o||!E),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(t){return S(o&&this===r?P:this,t)}}),c(c.S+c.F*!(E&&i(57)(function(t){P.all(t).catch(T)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(t){var e=this,i=M(e),a=i.resolve,n=i.reject,s=w(function(){var i=[],s=0,r=1;m(t,!1,function(t){var o=s++,l=!1;i.push(void 0),r++,e.resolve(t).then(function(t){l||(l=!0,i[o]=t,--r||a(i))},n)}),--r||a(i)});return s.e&&n(s.v),i.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(t){var e=this,i=M(e),a=i.reject,n=w(function(){m(t,!1,function(t){e.resolve(t).then(i.resolve,a)})});return n.e&&a(n.v),i.promise}})},/* 253 */
/***/
function(t,e,i){"use strict";var a=i(121),n=i(47);
// 23.4 WeakSet Objects
i(61)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(t){return a.def(n(this,"WeakSet"),t,!0)}},a,!1,!0)},/* 254 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(62),s=i(91),r=i(2),o=i(37),l=i(9),h=i(5),u=i(3).ArrayBuffer,c=i(60),d=s.ArrayBuffer,p=s.DataView,f=n.ABV&&u.isView,m=d.prototype.slice,g=n.VIEW;a(a.G+a.W+a.F*(u!==d),{ArrayBuffer:d}),a(a.S+a.F*!n.CONSTR,"ArrayBuffer",{
// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function(t){return f&&f(t)||h(t)&&g in t}}),a(a.P+a.U+a.F*i(4)(function(){return!new d(2).slice(1,void 0).byteLength}),"ArrayBuffer",{
// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function(t,e){if(void 0!==m&&void 0===e)return m.call(r(this),t);for(// FF fix
var i=r(this).byteLength,a=o(t,i),n=o(void 0===e?i:e,i),s=new(c(this,d))(l(n-a)),h=new p(this),u=new p(s),f=0;a<n;)u.setUint8(f++,h.getUint8(a++));return s}}),i(40)("ArrayBuffer")},/* 255 */
/***/
function(t,e,i){var a=i(0);a(a.G+a.W+a.F*!i(62).ABV,{DataView:i(91).DataView})},/* 256 */
/***/
function(t,e,i){i(29)("Int8",1,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 257 */
/***/
function(t,e,i){i(29)("Uint8",1,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 258 */
/***/
function(t,e,i){i(29)("Uint8",1,function(t){return function(e,i,a){return t(this,e,i,a)}},!0)},/* 259 */
/***/
function(t,e,i){i(29)("Int16",2,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 260 */
/***/
function(t,e,i){i(29)("Uint16",2,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 261 */
/***/
function(t,e,i){i(29)("Int32",4,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 262 */
/***/
function(t,e,i){i(29)("Uint32",4,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 263 */
/***/
function(t,e,i){i(29)("Float32",4,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 264 */
/***/
function(t,e,i){i(29)("Float64",8,function(t){return function(e,i,a){return t(this,e,i,a)}})},/* 265 */
/***/
function(t,e,i){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var a=i(0),n=i(11),s=i(2),r=(i(3).Reflect||{}).apply,o=Function.apply;
// MS Edge argumentsList argument is optional
a(a.S+a.F*!i(4)(function(){r(function(){})}),"Reflect",{apply:function(t,e,i){var a=n(t),l=s(i);return r?r(a,e,l):o.call(a,e,l)}})},/* 266 */
/***/
function(t,e,i){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var a=i(0),n=i(38),s=i(11),r=i(2),o=i(5),l=i(4),h=i(102),u=(i(3).Reflect||{}).construct,c=l(function(){function t(){}return!(u(function(){},[],t)instanceof t)}),d=!l(function(){u(function(){})});a(a.S+a.F*(c||d),"Reflect",{construct:function(t,e){s(t),r(e);var i=arguments.length<3?t:s(arguments[2]);if(d&&!c)return u(t,e,i);if(t==i){
// w/o altered newTarget, optimization for 0-4 arguments
switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}
// w/o altered newTarget, lot of arguments case
var a=[null];return a.push.apply(a,e),new(h.apply(t,a))}
// with altered newTarget, not support built-in constructors
var l=i.prototype,p=n(o(l)?l:Object.prototype),f=Function.apply.call(t,p,e);return o(f)?f:p}})},/* 267 */
/***/
function(t,e,i){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var a=i(8),n=i(0),s=i(2),r=i(24);
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
n(n.S+n.F*i(4)(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(a.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,i){s(t),e=r(e,!0),s(i);try{return a.f(t,e,i),!0}catch(t){return!1}}})},/* 268 */
/***/
function(t,e,i){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var a=i(0),n=i(17).f,s=i(2);a(a.S,"Reflect",{deleteProperty:function(t,e){var i=n(s(t),e);return!(i&&!i.configurable)&&delete t[e]}})},/* 269 */
/***/
function(t,e,i){"use strict";
// 26.1.5 Reflect.enumerate(target)
var a=i(0),n=i(2),s=function(t){this._t=n(t),// target
this._i=0;// next index
var e,i=this._k=[];for(e in t)i.push(e)};i(79)(s,"Object",function(){var t,e=this,i=e._k;do{if(e._i>=i.length)return{value:void 0,done:!0}}while(!((t=i[e._i++])in e._t));return{value:t,done:!1}}),a(a.S,"Reflect",{enumerate:function(t){return new s(t)}})},/* 270 */
/***/
function(t,e,i){function a(t,e){var i,o,u=arguments.length<3?t:arguments[2];return h(t)===u?t[e]:(i=n.f(t,e))?r(i,"value")?i.value:void 0!==i.get?i.get.call(u):void 0:l(o=s(t))?a(o,e,u):void 0}
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var n=i(17),s=i(18),r=i(12),o=i(0),l=i(5),h=i(2);o(o.S,"Reflect",{get:a})},/* 271 */
/***/
function(t,e,i){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var a=i(17),n=i(0),s=i(2);n(n.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return a.f(s(t),e)}})},/* 272 */
/***/
function(t,e,i){
// 26.1.8 Reflect.getPrototypeOf(target)
var a=i(0),n=i(18),s=i(2);a(a.S,"Reflect",{getPrototypeOf:function(t){return n(s(t))}})},/* 273 */
/***/
function(t,e,i){
// 26.1.9 Reflect.has(target, propertyKey)
var a=i(0);a(a.S,"Reflect",{has:function(t,e){return e in t}})},/* 274 */
/***/
function(t,e,i){
// 26.1.10 Reflect.isExtensible(target)
var a=i(0),n=i(2),s=Object.isExtensible;a(a.S,"Reflect",{isExtensible:function(t){return n(t),!s||s(t)}})},/* 275 */
/***/
function(t,e,i){
// 26.1.11 Reflect.ownKeys(target)
var a=i(0);a(a.S,"Reflect",{ownKeys:i(123)})},/* 276 */
/***/
function(t,e,i){
// 26.1.12 Reflect.preventExtensions(target)
var a=i(0),n=i(2),s=Object.preventExtensions;a(a.S,"Reflect",{preventExtensions:function(t){n(t);try{return s&&s(t),!0}catch(t){return!1}}})},/* 277 */
/***/
function(t,e,i){function a(t,e,i){var l,d,p=arguments.length<4?t:arguments[3],f=s.f(u(t),e);if(!f){if(c(d=r(t)))return a(d,e,i,p);f=h(0)}return o(f,"value")?!(!1===f.writable||!c(p))&&(l=s.f(p,e)||h(0),l.value=i,n.f(p,e,l),!0):void 0!==f.set&&(f.set.call(p,i),!0)}
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var n=i(8),s=i(17),r=i(18),o=i(12),l=i(0),h=i(33),u=i(2),c=i(5);l(l.S,"Reflect",{set:a})},/* 278 */
/***/
function(t,e,i){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var a=i(0),n=i(71);n&&a(a.S,"Reflect",{setPrototypeOf:function(t,e){n.check(t,e);try{return n.set(t,e),!0}catch(t){return!1}}})},/* 279 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/Array.prototype.includes
var a=i(0),n=i(53)(!0);a(a.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(32)("includes")},/* 280 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var a=i(0),n=i(124),s=i(10),r=i(9),o=i(11),l=i(85);a(a.P,"Array",{flatMap:function(t){var e,i,a=s(this);return o(t),e=r(a.length),i=l(a,0),n(i,a,a,e,0,1,t,arguments[1]),i}}),i(32)("flatMap")},/* 281 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var a=i(0),n=i(124),s=i(10),r=i(9),o=i(26),l=i(85);a(a.P,"Array",{flatten:function(){var t=arguments[0],e=s(this),i=r(e.length),a=l(e,0);return n(a,e,e,i,0,void 0===t?1:o(t)),a}}),i(32)("flatten")},/* 282 */
/***/
function(t,e,i){"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var a=i(0),n=i(77)(!0);a(a.P,"String",{at:function(t){return n(this,t)}})},/* 283 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var a=i(0),n=i(125),s=i(92);
// https://github.com/zloirock/core-js/issues/280
a(a.P+a.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(s),"String",{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},/* 284 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var a=i(0),n=i(125),s=i(92);
// https://github.com/zloirock/core-js/issues/280
a(a.P+a.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(s),"String",{padEnd:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},/* 285 */
/***/
function(t,e,i){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
i(45)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},/* 286 */
/***/
function(t,e,i){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
i(45)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},/* 287 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var a=i(0),n=i(25),s=i(9),r=i(56),o=i(58),l=RegExp.prototype,h=function(t,e){this._r=t,this._s=e};i(79)(h,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),a(a.P,"String",{matchAll:function(t){if(n(this),!r(t))throw TypeError(t+" is not a regexp!");var e=String(this),i="flags"in l?String(t.flags):o.call(t),a=new RegExp(t.source,~i.indexOf("g")?i:"g"+i);return a.lastIndex=s(t.lastIndex),new h(a,e)}})},/* 288 */
/***/
function(t,e,i){i(67)("asyncIterator")},/* 289 */
/***/
function(t,e,i){i(67)("observable")},/* 290 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var a=i(0),n=i(123),s=i(16),r=i(17),o=i(83);a(a.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,i,a=s(t),l=r.f,h=n(a),u={},c=0;h.length>c;)void 0!==(i=l(a,e=h[c++]))&&o(u,e,i);return u}})},/* 291 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-values-entries
var a=i(0),n=i(126)(!1);a(a.S,"Object",{values:function(t){return n(t)}})},/* 292 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-values-entries
var a=i(0),n=i(126)(!0);a(a.S,"Object",{entries:function(t){return n(t)}})},/* 293 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(10),s=i(11),r=i(8);
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
i(7)&&a(a.P+i(63),"Object",{__defineGetter__:function(t,e){r.f(n(this),t,{get:s(e),enumerable:!0,configurable:!0})}})},/* 294 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(10),s=i(11),r=i(8);
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
i(7)&&a(a.P+i(63),"Object",{__defineSetter__:function(t,e){r.f(n(this),t,{set:s(e),enumerable:!0,configurable:!0})}})},/* 295 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(10),s=i(24),r=i(18),o=i(17).f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
i(7)&&a(a.P+i(63),"Object",{__lookupGetter__:function(t){var e,i=n(this),a=s(t,!0);do{if(e=o(i,a))return e.get}while(i=r(i))}})},/* 296 */
/***/
function(t,e,i){"use strict";var a=i(0),n=i(10),s=i(24),r=i(18),o=i(17).f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
i(7)&&a(a.P+i(63),"Object",{__lookupSetter__:function(t){var e,i=n(this),a=s(t,!0);do{if(e=o(i,a))return e.set}while(i=r(i))}})},/* 297 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var a=i(0);a(a.P+a.R,"Map",{toJSON:i(127)("Map")})},/* 298 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var a=i(0);a(a.P+a.R,"Set",{toJSON:i(127)("Set")})},/* 299 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
i(64)("Map")},/* 300 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
i(64)("Set")},/* 301 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
i(64)("WeakMap")},/* 302 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
i(64)("WeakSet")},/* 303 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
i(65)("Map")},/* 304 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
i(65)("Set")},/* 305 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
i(65)("WeakMap")},/* 306 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
i(65)("WeakSet")},/* 307 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-global
var a=i(0);a(a.G,{global:i(3)})},/* 308 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-global
var a=i(0);a(a.S,"System",{global:i(3)})},/* 309 */
/***/
function(t,e,i){
// https://github.com/ljharb/proposal-is-error
var a=i(0),n=i(20);a(a.S,"Error",{isError:function(t){return"Error"===n(t)}})},/* 310 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var a=i(0);a(a.S,"Math",{clamp:function(t,e,i){return Math.min(i,Math.max(e,t))}})},/* 311 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var a=i(0);a(a.S,"Math",{DEG_PER_RAD:Math.PI/180})},/* 312 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var a=i(0),n=180/Math.PI;a(a.S,"Math",{degrees:function(t){return t*n}})},/* 313 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var a=i(0),n=i(129),s=i(109);a(a.S,"Math",{fscale:function(t,e,i,a,r){return s(n(t,e,i,a,r))}})},/* 314 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var a=i(0);a(a.S,"Math",{iaddh:function(t,e,i,a){var n=t>>>0,s=e>>>0,r=i>>>0;return s+(a>>>0)+((n&r|(n|r)&~(n+r>>>0))>>>31)|0}})},/* 315 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var a=i(0);a(a.S,"Math",{isubh:function(t,e,i,a){var n=t>>>0,s=e>>>0,r=i>>>0;return s-(a>>>0)-((~n&r|~(n^r)&n-r>>>0)>>>31)|0}})},/* 316 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var a=i(0);a(a.S,"Math",{imulh:function(t,e){var i=+t,a=+e,n=65535&i,s=65535&a,r=i>>16,o=a>>16,l=(r*s>>>0)+(n*s>>>16);return r*o+(l>>16)+((n*o>>>0)+(65535&l)>>16)}})},/* 317 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var a=i(0);a(a.S,"Math",{RAD_PER_DEG:180/Math.PI})},/* 318 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var a=i(0),n=Math.PI/180;a(a.S,"Math",{radians:function(t){return t*n}})},/* 319 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var a=i(0);a(a.S,"Math",{scale:i(129)})},/* 320 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var a=i(0);a(a.S,"Math",{umulh:function(t,e){var i=+t,a=+e,n=65535&i,s=65535&a,r=i>>>16,o=a>>>16,l=(r*s>>>0)+(n*s>>>16);return r*o+(l>>>16)+((n*o>>>0)+(65535&l)>>>16)}})},/* 321 */
/***/
function(t,e,i){
// http://jfbastien.github.io/papers/Math.signbit.html
var a=i(0);a(a.S,"Math",{signbit:function(t){
// eslint-disable-next-line no-self-compare
return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},/* 322 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-promise-finally
var a=i(0),n=i(23),s=i(3),r=i(60),o=i(116);a(a.P+a.R,"Promise",{finally:function(t){var e=r(this,n.Promise||s.Promise),i="function"==typeof t;return this.then(i?function(i){return o(e,t()).then(function(){return i})}:t,i?function(i){return o(e,t()).then(function(){throw i})}:t)}})},/* 323 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-promise-try
var a=i(0),n=i(90),s=i(115);a(a.S,"Promise",{try:function(t){var e=n.f(this),i=s(t);return(i.e?e.reject:e.resolve)(i.v),e.promise}})},/* 324 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=a.key,r=a.set;a.exp({defineMetadata:function(t,e,i,a){r(t,e,n(i),s(a))}})},/* 325 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=a.key,r=a.map,o=a.store;a.exp({deleteMetadata:function(t,e){var i=arguments.length<3?void 0:s(arguments[2]),a=r(n(e),i,!1);if(void 0===a||!a.delete(t))return!1;if(a.size)return!0;var l=o.get(e);return l.delete(i),!!l.size||o.delete(e)}})},/* 326 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=i(18),r=a.has,o=a.get,l=a.key,h=function(t,e,i){if(r(t,e,i))return o(t,e,i);var a=s(e);return null!==a?h(t,a,i):void 0};a.exp({getMetadata:function(t,e){return h(t,n(e),arguments.length<3?void 0:l(arguments[2]))}})},/* 327 */
/***/
function(t,e,i){var a=i(119),n=i(128),s=i(30),r=i(2),o=i(18),l=s.keys,h=s.key,u=function(t,e){var i=l(t,e),s=o(t);if(null===s)return i;var r=u(s,e);return r.length?i.length?n(new a(i.concat(r))):r:i};s.exp({getMetadataKeys:function(t){return u(r(t),arguments.length<2?void 0:h(arguments[1]))}})},/* 328 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=a.get,r=a.key;a.exp({getOwnMetadata:function(t,e){return s(t,n(e),arguments.length<3?void 0:r(arguments[2]))}})},/* 329 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=a.keys,r=a.key;a.exp({getOwnMetadataKeys:function(t){return s(n(t),arguments.length<2?void 0:r(arguments[1]))}})},/* 330 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=i(18),r=a.has,o=a.key,l=function(t,e,i){if(r(t,e,i))return!0;var a=s(e);return null!==a&&l(t,a,i)};a.exp({hasMetadata:function(t,e){return l(t,n(e),arguments.length<3?void 0:o(arguments[2]))}})},/* 331 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=a.has,r=a.key;a.exp({hasOwnMetadata:function(t,e){return s(t,n(e),arguments.length<3?void 0:r(arguments[2]))}})},/* 332 */
/***/
function(t,e,i){var a=i(30),n=i(2),s=i(11),r=a.key,o=a.set;a.exp({metadata:function(t,e){return function(i,a){o(t,e,(void 0!==a?n:s)(i),r(a))}}})},/* 333 */
/***/
function(t,e,i){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var a=i(0),n=i(89)(),s=i(3).process,r="process"==i(20)(s);a(a.G,{asap:function(t){var e=r&&s.domain;n(e?e.bind(t):t)}})},/* 334 */
/***/
function(t,e,i){"use strict";
// https://github.com/zenparsing/es-observable
var a=i(0),n=i(3),s=i(23),r=i(89)(),o=i(6)("observable"),l=i(11),h=i(2),u=i(41),c=i(43),d=i(13),p=i(42),f=p.RETURN,m=function(t){return null==t?void 0:l(t)},g=function(t){var e=t._c;e&&(t._c=void 0,e())},y=function(t){return void 0===t._o},v=function(t){y(t)||(t._o=void 0,g(t))},b=function(t,e){h(t),this._c=void 0,this._o=t,t=new w(this);try{var i=e(t),a=i;null!=i&&("function"==typeof i.unsubscribe?i=function(){a.unsubscribe()}:l(i),this._c=i)}catch(e){return void t.error(e)}y(this)&&g(this)};b.prototype=c({},{unsubscribe:function(){v(this)}});var w=function(t){this._s=t};w.prototype=c({},{next:function(t){var e=this._s;if(!y(e)){var i=e._o;try{var a=m(i.next);if(a)return a.call(i,t)}catch(t){try{v(e)}finally{throw t}}}},error:function(t){var e=this._s;if(y(e))throw t;var i=e._o;e._o=void 0;try{var a=m(i.error);if(!a)throw t;t=a.call(i,t)}catch(t){try{g(e)}finally{throw t}}return g(e),t},complete:function(t){var e=this._s;if(!y(e)){var i=e._o;e._o=void 0;try{var a=m(i.complete);t=a?a.call(i,t):void 0}catch(t){try{g(e)}finally{throw t}}return g(e),t}}});var S=function(t){u(this,S,"Observable","_f")._f=l(t)};c(S.prototype,{subscribe:function(t){return new b(t,this._f)},forEach:function(t){var e=this;return new(s.Promise||n.Promise)(function(i,a){l(t);var n=e.subscribe({next:function(e){try{return t(e)}catch(t){a(t),n.unsubscribe()}},error:a,complete:i})})}}),c(S,{from:function(t){var e="function"==typeof this?this:S,i=m(h(t)[o]);if(i){var a=h(i.call(t));return a.constructor===e?a:new e(function(t){return a.subscribe(t)})}return new e(function(e){var i=!1;return r(function(){if(!i){try{if(p(t,!1,function(t){if(e.next(t),i)return f})===f)return}catch(t){if(i)throw t;return void e.error(t)}e.complete()}}),function(){i=!0}})},of:function(){for(var t=0,e=arguments.length,i=new Array(e);t<e;)i[t]=arguments[t++];return new("function"==typeof this?this:S)(function(t){var e=!1;return r(function(){if(!e){for(var a=0;a<i.length;++a)if(t.next(i[a]),e)return;t.complete()}}),function(){e=!0}})}}),d(S.prototype,o,function(){return this}),a(a.G,{Observable:S}),i(40)("Observable")},/* 335 */
/***/
function(t,e,i){
// ie9- setTimeout & setInterval additional parameters fix
var a=i(3),n=i(0),s=i(92),r=[].slice,o=/MSIE .\./.test(s),l=function(t){return function(e,i){var a=arguments.length>2,n=!!a&&r.call(arguments,2);return t(a?function(){
// eslint-disable-next-line no-new-func
("function"==typeof e?e:Function(e)).apply(this,n)}:e,i)}};n(n.G+n.B+n.F*o,{setTimeout:l(a.setTimeout),setInterval:l(a.setInterval)})},/* 336 */
/***/
function(t,e,i){var a=i(0),n=i(88);a(a.G+a.B,{setImmediate:n.set,clearImmediate:n.clear})},/* 337 */
/***/
function(t,e,i){for(var a=i(87),n=i(36),s=i(14),r=i(3),o=i(13),l=i(46),h=i(6),u=h("iterator"),c=h("toStringTag"),d=l.Array,p={CSSRuleList:!0,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,// TODO: Not spec compliant, should be false.
MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,// TODO: Not spec compliant, should be false.
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=n(p),m=0;m<f.length;m++){var g,y=f[m],v=p[y],b=r[y],w=b&&b.prototype;if(w&&(w[u]||o(w,u,d),w[c]||o(w,c,y),l[y]=d,v))for(g in a)w[g]||s(w,g,a[g],!0)}},/* 338 */
/***/
function(t,e,i){/* WEBPACK VAR INJECTION */
(function(e){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
!function(e){"use strict";function i(t,e,i,a){
// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var s=e&&e.prototype instanceof n?e:n,r=Object.create(s.prototype),o=new p(a||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return r._invoke=h(t,i,o),r}
// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function a(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}
// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function n(){}function s(){}function r(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function o(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function l(t){function i(e,n,s,r){var o=a(t[e],t,n);if("throw"!==o.type){var l=o.arg,h=l.value;return h&&"object"==typeof h&&v.call(h,"__await")?Promise.resolve(h.__await).then(function(t){i("next",t,s,r)},function(t){i("throw",t,s,r)}):Promise.resolve(h).then(function(t){
// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
l.value=t,s(l)},r)}r(o.arg)}function n(t,e){function a(){return new Promise(function(a,n){i(t,e,a,n)})}
// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
return s=s?s.then(a,a):a()}"object"==typeof e.process&&e.process.domain&&(i=e.process.domain.bind(i));var s;
// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=n}function h(t,e,i){var n=_;return function(s,r){if(n===M)throw new Error("Generator is already running");if(n===E){if("throw"===s)throw r;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return m()}for(i.method=s,i.arg=r;;){var o=i.delegate;if(o){var l=u(o,i);if(l){if(l===O)continue;return l}}if("next"===i.method)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===_)throw n=E,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=M;var h=a(t,e,i);if("normal"===h.type){if(
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
n=i.done?E:T,h.arg===O)continue;return{value:h.arg,done:i.done}}"throw"===h.type&&(n=E,
// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
i.method="throw",i.arg=h.arg)}}}
// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function u(t,e){var i=t.iterator[e.method];if(i===g){if(
// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
e.delegate=null,"throw"===e.method){if(t.iterator.return&&(
// If the delegate iterator has a return method, give it a
// chance to clean up.
e.method="return",e.arg=g,u(t,e),"throw"===e.method))
// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var n=a(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,O;var s=n.arg;
// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
// Resume execution at the desired location (see delegateYield).
// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,O):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function c(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(c,this),this.reset(!0)}function f(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(v.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=g,e.done=!0,e};return a.next=a}}
// Return an iterator with no values.
return{next:m}}function m(){return{value:g,done:!0}}var g,y=Object.prototype,v=y.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",S=b.asyncIterator||"@@asyncIterator",x=b.toStringTag||"@@toStringTag",k="object"==typeof t,P=e.regeneratorRuntime;if(P)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(k&&(t.exports=P));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
P=e.regeneratorRuntime=k?t.exports:{},P.wrap=i;var _="suspendedStart",T="suspendedYield",M="executing",E="completed",O={},B={};B[w]=function(){return this};var D=Object.getPrototypeOf,A=D&&D(D(f([])));A&&A!==y&&v.call(A,w)&&(
// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
B=A);var C=r.prototype=n.prototype=Object.create(B);s.prototype=C.constructor=r,r.constructor=s,r[x]=s.displayName="GeneratorFunction",P.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!e&&(e===s||"GeneratorFunction"===(e.displayName||e.name))},P.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,r):(t.__proto__=r,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(C),t},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
P.awrap=function(t){return{__await:t}},o(l.prototype),l.prototype[S]=function(){return this},P.AsyncIterator=l,
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
P.async=function(t,e,a,n){var s=new l(i(t,e,a,n));return P.isGeneratorFunction(e)?s:s.next().then(function(t){return t.done?t.value:s.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
o(C),C[x]="Generator",
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
C[w]=function(){return this},C.toString=function(){return"[object Generator]"},P.keys=function(t){var e=[];for(var i in t)e.push(i);
// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function i(){for(;e.length;){var a=e.pop();if(a in t)return i.value=a,i.done=!1,i}
// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return i.done=!0,i}},P.values=f,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,
// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(d),!t)for(var e in this)
// Not sure about the optimal order of these conditions:
"t"===e.charAt(0)&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,a){
// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
return s.type="throw",s.arg=t,i.next=e,a&&(i.method="next",i.arg=g),!!a}if(this.done)throw t;for(var i=this,a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a],s=n.completion;if("root"===n.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return e("end");if(n.tryLoc<=this.prev){var r=v.call(n,"catchLoc"),o=v.call(n,"finallyLoc");if(r&&o){if(this.prev<n.catchLoc)return e(n.catchLoc,!0);if(this.prev<n.finallyLoc)return e(n.finallyLoc)}else if(r){if(this.prev<n.catchLoc)return e(n.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return e(n.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&v.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,O):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),d(i),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var n=a.arg;d(i)}return n}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:f(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=g),O}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,i(48))},/* 339 */
/***/
function(t,e,i){i(340),t.exports=i(23).RegExp.escape},/* 340 */
/***/
function(t,e,i){
// https://github.com/benjamingr/RexExp.escape
var a=i(0),n=i(341)(/[\\^$*+?.()|[\]{}]/g,"\\$&");a(a.S,"RegExp",{escape:function(t){return n(t)}})},/* 341 */
/***/
function(t,e){t.exports=function(t,e){var i=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,i)}}},/* 342 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i(130),i(131);var o=i(1),l=a(o),h=i(347),u=a(h),c=i(348),d=a(c),p=i(349),f=a(p),m=i(350),g=a(m),y=i(353),v=a(y),b=i(386),w=a(b),S=i(22),x=a(S);i(387),i(389);
// import NameState from './states/Name';
var k=function(t){function e(){if(n(this,e),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"))var t=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,480,280,l.default.CANVAS,!0,!1,!0));else var t=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,x.default.phaserConfig));return t.state.add("Boot",u.default,!1),t.state.add("Preload",g.default,!1),t.state.add("DeltaStorm",d.default,!1),t.state.add("MainMenu",f.default,!1),t.state.add("Credits",w.default,!1),t.state.add("Game",v.default,!1),document.addEventListener("contextmenu",function(t){return t.preventDefault()}),window.cordova||t.state.start("Boot"),s(t)}return r(e,t),e}(l.default.Game);
// window.onload = function() {
// };
window.game=new k,x.default.serviceWorker&&"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js")},/* 343 */
,/* 344 */
,/* 345 */
,/* 346 */
,/* 347 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o);i(93);var h=function(t){function e(){return a(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),r(e,[{key:"init",value:function(){
// Boot Log
console.log("%c Boot it up! ","background: #0061ff; color: #bada55")}},{key:"create",value:function(){
// Game Scaling
this.scale.fullScreenScaleMode=l.default.ScaleManager.SHOW_ALL,this.scale.scaleMode=l.default.ScaleManager.SHOW_ALL,this.game.scale.pageAlignVertically=!0,this.game.scale.pageAlignHorizontally=!0,
// enable crisp rendering
// this.game.renderer.renderSession.roundPixels = true;
this.game.time.advancedTiming=!0,l.default.Canvas.setImageRenderingCrisp(this.game.canvas),
// Add Tilemap Plus Plugin
this.game.plugins.add(l.default.Plugin.TilemapPlus),
// Start Physics
this.game.physics.startSystem(l.default.Physics.ARCADE),
// Enable Pixel Rendering
this.stage.smoothed=!1,
// if(typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1) {
// 	PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST;
// 	// Phaser.Canvas.setSmoothingEnabled(this.game.context, false);
// }
// Don't pause on lost focus
// this.stage.disableVisibilityChange = true;
// this.game.time.desiredFps = 100;
// this.game.forceSingleUpdate = true;
// Start the Preload State
this.state.start("Preload")}},{key:"preload",value:function(){
// this.load.bitmapFont('font', 'assets/fonts/font.png', 'assets/fonts/font.xml');
this.load.image("carinaFont","assets/fonts/carinaFont.png"),this.load.image("instructions","assets/sprites/gui/instructions.png"),this.load.image("preloadBar","assets/sprites/gui/preloadBar.png")}}]),e}(l.default.State);e.default=h},/* 348 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(){return a(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),r(e,[{key:"init",value:function(){}},{key:"create",value:function(){var t=this;this.game.camera.flash(0,2e3),this.menuText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2,"pxlfont","WingLab Studios",30),this.menuText.anchor.set(.5),this.subText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2+40,"pxlfont","present",10),this.subText.smoothed=!1,this.subText.anchor.set(.5),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")||"undefined"!=typeof ipc||(this.input.onDown.add(this.toggleFullScreen,this),this.input.onTap.add(this.toggleFullScreen,this,null,"onTap")),this.game.time.events.add(2*l.default.Timer.SECOND,function(){t.game.camera.fade(0,2e3,!0),t.game.time.events.add(3*l.default.Timer.SECOND,function(){t.state.start("MainMenu",!0,!1)})})}},{key:"preload",value:function(){}},{key:"update",value:function(){}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(l.default.State);e.default=h},/* 349 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(){return a(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),r(e,[{key:"init",value:function(){}},{key:"create",value:function(){var t=this;this.notificationSwitch=!0,this.startSwitch=!0,this.playOnce=!1,this.game.camera.flash(0,3e3),
// this.menuText = this.game.add.bitmapText(
// 	this.game.camera.width / 2,
// 	this.game.camera.height / 2,
// 	'pxlfont',
// 	'PROPHECY',
// 	51
// );
// this.menuText.anchor.set(0.5);
this.logo=this.game.add.sprite(this.game.camera.width/2,this.game.camera.height/2-10,"logo"),this.logo.anchor.set(.5),
// this.logo.scale.setTo(0.2);
this.logo.smoothed=!1,this.credits=this.game.add.sprite(20,this.game.camera.height-10,"credits"),this.credits.smoothed=!1,this.credits.inputEnabled=!0,this.credits.events.onInputDown.add(function(){t.state.start("Credits",!0,!1,"skip")},this),this.credits.events.onInputOver.add(function(){t.credits.tint=65499},this),this.credits.events.onInputOut.add(function(){t.credits.tint=16777215},this),this.versionText=this.game.add.retroFont("carinaFont",7,7,l.default.RetroFont.TEXT_SET1,18,0,2,0,1),this.versionText.setText("Beta 1.0",!0,-1,5,"left",!0),this.versionImage=this.game.add.image(this.game.camera.width-90,this.game.camera.height-10,this.versionText),
// this.subText = this.game.add.bitmapText(
// 	this.game.camera.width / 2,
// 	this.game.camera.height / 2 + 107,
// 	'pxlfont',
// 	'Click To Move On',
// 	10
// );
// this.subText.smoothed = false;
// this.subText.anchor.set(0.5);
this.subText=this.game.add.retroFont("carinaFont",7,7,l.default.RetroFont.TEXT_SET1,18,0,2,0,1),
// this.subText.text = 'Click To Move On';
this.subText.setText("Click!",!0,-1,5,"left",!0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(this.subText.text="Mobile Version coming soon!"),this.fontImage=this.game.add.image(this.game.camera.width/2-15,this.game.camera.height/2+107,this.subText),this.game.add.tween(this.fontImage).to({tint:14728704},1e4,l.default.Easing.Exponential.In,!0,0,0,!1).loop(),
// this.fontImage.anchor.set(0.5);
this.variation1();this.game.rnd.integerInRange(0,3);
// switch (chosenValue) {
// 	case 0:
// 		this.variation1();
// 		break;
// 	case 1:
// 	this.variation2();
// 		break;
// 	case 2:
// 	this.variation3();
// 		break;
// 	case 3:
// 	this.variation4();
// 		break;
// 	default:
// 		break;
// }
this.button_C=this.game.input.keyboard.addKey(l.default.Keyboard.C),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")||"undefined"!=typeof ipc||(this.input.onDown.add(this.toggleFullScreen,this),this.input.onTap.add(this.toggleFullScreen,this,null,"onTap")),this.input.onDown.add(function(){var t=this;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||this.playOnce||(this.playOnce=!0,void 0!==this.sfxheartbeat&&this.sfxheartbeat.fadeOut(),this.game.soundManager.fadeOut(),this.game.camera.fade(0,4e3,!0),this.startSound=this.game.add.audio("startGame",.3),this.startSound.allowMultiple=!1,this.startSound.play(),this.game.add.tween(this.fontImage).to({alpha:0},2e3,l.default.Easing.Back.Out,!0),this.game.time.events.add(4*l.default.Timer.SECOND,function(){t.state.start("Game",!0,!1)}))},this),this.input.gamepad.start(),this.pad1=this.game.input.gamepad.pad1,this.pad1.addCallbacks(this,{onConnect:function(){"undefined"!=typeof ipc&&t.pad1.connected&&
// let myNotification = 
new Notification("Input",{body:"🎮 New Controller Connected",silent:!0}),t.subText.text="Press A-Button To Move On",t.game.canvas.style.cursor="none"}})}},{key:"variation1",value:function(){this.game.soundManager.initSound({athmoSound:"AtmoWindRain"},!0,2e3);var t=this.game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-30,t.makeParticles("rain"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(200,310),t.setXSpeed(-5,5),t.minRotation=180,t.maxRotation=0,t.gravity=200,t.start(!1,2500,1,0),this.autumnGlimmerEmitter=this.game.add.emitter(-500,0,150),this.autumnGlimmerEmitter.fixedToCamera=!0,this.autumnGlimmerEmitter.width=this.game.world.bounds.width,this.autumnGlimmerEmitter.height=this.game.world.bounds.height,this.autumnGlimmerEmitter.minParticleScale=.1,this.autumnGlimmerEmitter.maxParticleScale=.5,this.autumnGlimmerEmitter.setScale(-2,2,1,1,3e3,l.default.Easing.Sinusoidal.InOut,!0),this.autumnGlimmerEmitter.setYSpeed(300),this.autumnGlimmerEmitter.setXSpeed(-300,300),this.autumnGlimmerEmitter.minParticleScale=.25,this.autumnGlimmerEmitter.maxParticleScale=1,this.autumnGlimmerEmitter.gravity=.5,this.autumnGlimmerEmitter.minRotation=25,this.autumnGlimmerEmitter.setAlpha(.5,1),this.autumnGlimmerEmitter.makeParticles("glimmerParticle"),this.autumnGlimmerEmitter.start(!1,5e3,5,0)}},{key:"variation2",value:function(){this.game.soundManager.initSound({athmoSound:"AxTemple"},!0,2e3),this.addVillageGlimmer=this.game.add.emitter(this.game.camera.width/2,this.game.camera.height/2,600),this.addVillageGlimmer.width=2*this.game.camera.width,this.addVillageGlimmer.height=2*this.game.camera.height,this.addVillageGlimmer.minParticleScale=5,this.addVillageGlimmer.gravity=0,this.addVillageGlimmer.setYSpeed(-4,4),this.addVillageGlimmer.setXSpeed(-4,4),this.addVillageGlimmer.maxRotation=0,this.addVillageGlimmer.minRotation=0,this.addVillageGlimmer.setAlpha(0,1,4e3,l.default.Easing.Exponential.In,!0),this.addVillageGlimmer.makeParticles("particle"),this.addVillageGlimmer.start(!1,1e4,5,0)}},{key:"variation3",value:function(){this.game.soundManager.initSound({athmoSound:"AxBotanic"},!0,2e3),this.sfxheartbeat=this.game.add.audio("sfxheartbeat",.05),this.sfxheartbeat.loop=!0,this.sfxheartbeat.play(),this.tweenTint(this.subText,16777215,4849605,850),this.manager=this.game.plugins.add(l.default.ParticleStorm);var t={lifespan:3e3,
// red: { min: 200, max: 255 },
// green: 50,
// blue: { min: 200, max: 255 },
red:73,green:255,blue:197,
// alpha: { initial: 0, value: 1, control: [ { x: 0, y: 0 }, { x: 0.5, y: 1 }, { x: 1, y: 0 } ] }
alpha:{min:.5,max:1}};this.manager.addData("basic",t);var e=this.manager.createLineZone(0,-30,this.game.camera.width,-30);
//  This creates a Pixel Renderer.
//  It works by rendering just pixels (it can't render images or textures)
//  The red, green and blue properties of the particle data control the
//  color of the pixel particles.
this.emitter=this.manager.createEmitter(l.default.ParticleStorm.PIXEL,new l.default.Point(0,.03)),
//  The autoClear property tells the Pixel emitter to not clear ifself before
//  rendering. You can then clear it yourself via renderer.clear() (see the update method)
this.emitter.renderer.autoClear=!1,this.emitter.renderer.pixelSize=1,this.emitter.addToWorld(),this.emitter.emit("basic",0,0,{zone:e,total:1,repeat:-1,frequency:1e3})}},{key:"variation4",value:function(){this.game.soundManager.initSound({athmoSound:"AtmoWaterStill"},!0,2e3),this.templeFliesEmitter=this.game.add.emitter(this.logo.x-40,this.logo.y+40,100),
// emitter.fixedToCamera = true;
this.templeFliesEmitter.width=100,this.templeFliesEmitter.height=200,this.templeFliesEmitter.angle=-10,this.templeFliesEmitter.minParticleScale=.1,this.templeFliesEmitter.maxParticleScale=.5,
// emitter.maxParticleSpeed.setTo(2, 2);
this.templeFliesEmitter.setYSpeed(2,6),this.templeFliesEmitter.setXSpeed(10,-10),this.templeFliesEmitter.gravity=.5,this.templeFliesEmitter.minRotation=0,this.templeFliesEmitter.maxRotation=0,this.templeFliesEmitter.setAlpha(.7,1,1e3,l.default.Easing.Exponential.In,!0),this.templeFliesEmitter.makeParticles("fly"),this.templeFliesEmitter.start(!1,5e3,5,0)}},{key:"tweenTint",value:function(t,e,i,a){
// create an object to tween with our step value at 0    
var n={step:0},s=this.game.add.tween(n).to({step:100},a,l.default.Easing.Bounce.Out,!0,0,0,!0).loop();
// run the interpolateColor function every time the tween updates, feeding it the    
// updated value of our tween each time, and set the result as our tint    
s.onUpdateCallback(function(){t.tint=l.default.Color.interpolateColor(e,i,100,n.step)}),
// set the object to the start color straight away    
t.tint=e,
// start the tween    
s.start()}},{key:"preload",value:function(){}},{key:"update",value:function(){var t=this;this.button_C.isDown&&this.state.start("Credits",!0,!1,"skip"),this.pad1.connected||(this.subText.text="Click!"),this.addVillageGlimmer&&this.game.world.bringToTop(this.addVillageGlimmer),this.templeFliesEmitter&&this.game.world.bringToTop(this.templeFliesEmitter),this.manager&&(
// this.game.world.bringToTop(this.logo);
this.emitter.renderer.clear(.01),
// this.logo.reset(this.game.camera.width / 2, this.game.camera.height / 2);
// this.logo.resetFrame();
// this.subText.resetFrame();
this.game.world.bringToTop(this.logo),this.game.world.bringToTop(this.subText)),this.game.input.gamepad.supported&&(this.pad1=this.game.input.gamepad.pad1,this.notificationSwitch&&"undefined"!=typeof ipc&&this.pad1.connected&&(
// let myNotification = 
new Notification("Input",{body:"🎮 New Controller Connected",silent:!0}),this.subText.text="Press A-Button To Move On",this.notificationSwitch=!1),this.pad1.isDown(l.default.Gamepad.XBOX360_A)&&this.startSwitch&&(this.startSwitch=!1,this.game.camera.fade(0,4e3,!0),this.startSound=this.game.add.audio("startGame",.3),this.startSound.allowMultiple=!1,this.startSound.play(),this.game.add.tween(this.fontImage).to({alpha:0},2e3,l.default.Easing.Back.Out,!0),this.game.time.events.add(4*l.default.Timer.SECOND,function(){t.state.start("Game",!0,!1)})))}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(l.default.State);e.default=h},/* 350 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(351),c=a(u),d=i(352),p=a(d),f=i(22),m=(a(f),function(t){function e(){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),o(e,[{key:"init",value:function(){this.sfxswordmulti={spritemap:{vx1:{start:0,end:1,loop:!1},vx2:{start:1,end:2,loop:!1},vx3:{start:2,end:3,loop:!1},vx4:{start:3,end:4,loop:!1},vx5:{start:4,end:5,loop:!1},vx6:{start:5,end:6,loop:!1},vx7:{start:6,end:7,loop:!1},vx8:{start:7,end:8,loop:!1},vx9:{start:8,end:9,loop:!1},vx10:{start:9,end:10,loop:!1},death1:{start:10,end:12,loop:!1},death2:{start:12,end:14,loop:!1},death3:{start:14,end:16,loop:!1},death4:{start:16,end:18,loop:!1},cut1:{start:18,end:19,loop:!1},cut2:{start:19,end:20,loop:!1},reflect1:{start:20,end:21,loop:!1},reflect2:{start:21,end:22,loop:!1}}},this.VxBotanic={spritemap:{vx1:{start:0,end:2,loop:!1},vx2:{start:2,end:4,loop:!1},vx3:{start:4,end:6,loop:!1},vx4:{start:6,end:8,loop:!1},vx5:{start:8,end:10,loop:!1}}},this.VxDog={spritemap:{vx1:{start:0,end:2,loop:!1},vx2:{start:2,end:4,loop:!1},vx3:{start:4,end:6,loop:!1},vx4:{start:6,end:8,loop:!1},vx5:{start:8,end:10,loop:!1},vx7:{start:10,end:12,loop:!1},vx8:{start:12,end:14,loop:!1}}},this.VxSeeds={spritemap:{vx1:{start:0,end:2,loop:!1},vx2:{start:2,end:4,loop:!1},vx3:{start:4,end:6,loop:!1},vx4:{start:6,end:8,loop:!1},vx5:{start:8,end:10,loop:!1},vx6:{start:10,end:12,loop:!1},vx7:{start:12,end:14,loop:!1},vx8:{start:14,end:16,loop:!1},vx9:{start:16,end:18,loop:!1},vx10:{start:18,end:20,loop:!1},vx11:{start:20,end:22,loop:!1},vx12:{start:22,end:24,loop:!1},vx13:{start:24,end:26,loop:!1},vx14:{start:26,end:28,loop:!1},vx15:{start:28,end:29,loop:!1}}},this.VxSmith={spritemap:{vx1:{start:0,end:1,loop:!1},vx2:{start:1,end:2,loop:!1},vx3:{start:2,end:3,loop:!1},vx4:{start:3,end:4,loop:!1},vx5:{start:4,end:5,loop:!1}}},this.VxOracleJSON={spritemap:{vx1:{start:0,end:3,loop:!1},vx2:{start:3,end:6,loop:!1},vx3:{start:6,end:9,loop:!1},vx4:{start:9,end:12,loop:!1},vx5:{start:12,end:15,loop:!1},vx6:{start:15,end:18,loop:!1},vx7:{start:18,end:21,loop:!1},vx8:{start:22,end:25,loop:!1},vx9:{start:25,end:28,loop:!1},vx10:{start:28,end:33,loop:!1}}},this.VxPriest={spritemap:{vx1:{start:0,end:2,loop:!1},vx2:{start:2,end:4,loop:!1},vx3:{start:4,end:6,loop:!1}}},this.AxThunderstrikeJSON={spritemap:{hit1:{start:1,end:4,loop:!1},hit2:{start:4,end:8,loop:!1},hit3:{start:8,end:12,loop:!1},hit4:{start:12,end:16,loop:!1},hit5:{start:16,end:20,loop:!1}}},this.pxFootstepsJSON={spritemap:{grass1:{start:0,end:.2,loop:!1},grass2:{start:.625,end:1.25,loop:!1},grass3:{start:1.25,end:1.875,loop:!1},hard1:{start:2,end:2.15,loop:!1},hard2:{start:2.625,end:3.25,loop:!1},hard3:{start:3.25,end:3.875,loop:!1},gravel1:{start:4,end:4.3,loop:!1},gravel2:{start:4.625,end:5.25,loop:!1},gravel3:{start:5.25,end:5.67,loop:!1}}},this.sfxUIJSON={spritemap:{openMenu:{start:0,end:1,loop:!1},UI1:{start:1,end:2,loop:!1},UI2:{start:2,end:3,loop:!1}}},this.sfxChestJSON={spritemap:{open:{start:0,end:1,loop:!1},close:{start:1,end:3,loop:!1}}},this.sfxLockPickJSON={spritemap:{win:{start:0,end:1,loop:!1},break:{start:1,end:2,loop:!1},roll:{start:2,end:6,loop:!1}}},this.sfxBirdsJSON={spritemap:{flyAway:{start:0,end:4,loop:!1},twitter1:{start:4,end:5,loop:!1},twitter2:{start:5,end:6,loop:!1},twitter3:{start:6,end:7,loop:!1},twitter4:{start:7,end:8,loop:!1},twitter5:{start:8,end:9,loop:!1}}}}},{key:"preload",value:function(){this.instructions=this.game.add.image(0,0,"instructions"),
// this.text = this.game.add.retroFont('carinaFont', 7, 7, Phaser.RetroFont.TEXT_SET1, 18, 0, 2, 0, 1);
// this.text.setText(content, true, -1, 5, 'left', true)
// this.text.fixedWidth = 200;
this.fontImage=this.game.add.image(this.game.camera.width/2,this.game.camera.height/2,this.text),this.fontImage.anchor.setTo(.5),
// this.fontImage.fixedToCamera = true;
this.fontImage.scale.set(2),this.preloadBar=this.game.add.image(172,220,"preloadBar"),this.load.setPreloadSprite(this.preloadBar),
// this.game.canvas.oncontextmenu = function (e) {
// 	e.preventDefault();
// };
// this.addVillageGlimmer = this.game.add.emitter(this.game.camera.width/2, this.game.camera.height/2, 2000);
// this.addVillageGlimmer.width = this.game.camera.width;
// this.addVillageGlimmer.height = this.game.camera.height;
// this.addVillageGlimmer.minParticleScale = 5;
// this.addVillageGlimmer.gravity = 0;
// this.addVillageGlimmer.setYSpeed(-4, 4);
// this.addVillageGlimmer.setXSpeed(-4, 4);
// this.addVillageGlimmer.maxRotation = 0;
// this.addVillageGlimmer.minRotation = 0;
// this.addVillageGlimmer.setAlpha(0, 1, 4000, Phaser.Easing.Exponential.In, true);
// this.addVillageGlimmer.makeParticles('particle');
// this.addVillageGlimmer.start(false, 10000, 1, 0);
// RAIN AND GLIMMER
// let emitter = this.game.add.emitter(-500, 0, 400);
// emitter.fixedToCamera = true;
// emitter.width = this.game.camera.width * 2;
// emitter.angle = -30;
// emitter.makeParticles('rain');
// emitter.minParticleScale = 0.1;
// emitter.maxParticleScale = 0.5;
// emitter.setYSpeed(200, 310);
// emitter.setXSpeed(-5, 5);
// emitter.minRotation = 180;
// emitter.maxRotation = 0;
// emitter.gravity = 200;
// emitter.start(false, 2500, 1, 0);
// this.autumnGlimmerEmitter = this.game.add.emitter(-500, 0, 150);
// this.autumnGlimmerEmitter.fixedToCamera = true;
// this.autumnGlimmerEmitter.width = this.game.world.bounds.width;
// this.autumnGlimmerEmitter.height = this.game.world.bounds.height;
// this.autumnGlimmerEmitter.minParticleScale = 0.1;
// this.autumnGlimmerEmitter.maxParticleScale = 0.5;
// this.autumnGlimmerEmitter.setScale(-2, 2, 1, 1, 3000, Phaser.Easing.Sinusoidal.InOut, true);
// this.autumnGlimmerEmitter.setYSpeed(300);
// this.autumnGlimmerEmitter.setXSpeed(-300, 300);
// this.autumnGlimmerEmitter.minParticleScale = 0.25;
// this.autumnGlimmerEmitter.maxParticleScale = 1;
// this.autumnGlimmerEmitter.gravity = 0.5;
// this.autumnGlimmerEmitter.minRotation = 25;
// this.autumnGlimmerEmitter.setAlpha(0.5, 1);
// this.autumnGlimmerEmitter.makeParticles('glimmerParticle');
// this.autumnGlimmerEmitter.start(false, 5000, 5, 0);
this.graphics=game.add.graphics(this.game.camera.width/2,this.game.camera.height/2),this.graphics.lineStyle(8,4849605),this.graphics.scale.setTo(.5),
// Lucy
this.load.image("lucy","assets/sprites/lucy/lucy.png"),this.load.spritesheet("lucyShadow","assets/sprites/lucy/lucyShadow.png",20,9),
// Endboss
this.load.image("endBoss","assets/sprites/endboss/endBoss.png"),this.load.image("endBossHead","assets/sprites/endboss/endBossHead.png"),this.load.image("endBossHeadShadow","assets/sprites/endboss/endBossHeadShadow.png"),this.load.image("endBossNeck","assets/sprites/endboss/endBossNeck.png"),this.load.image("endBossClaw1","assets/sprites/endboss/endBossClaw1.png"),this.load.image("endBossClaw2","assets/sprites/endboss/endBossClaw2.png"),
// LockGame Sprites
this.load.image("LockGameRing","assets/sprites/lockgame/LockGameRing.png"),this.load.image("LockGameBar","assets/sprites/lockgame/LockGameBar.png"),this.load.image("LockGameBall","assets/sprites/lockgame/LockGameBall.png"),
// Load Maps
this.load.tilemap("map1","assets/maps/map1.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map2","assets/maps/map2.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map3","assets/maps/map3.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map4","assets/maps/map4.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map5","assets/maps/map5.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map6","assets/maps/map6.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map7","assets/maps/map7.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map8","assets/maps/map8.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map9","assets/maps/map9.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map10","assets/maps/map10.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map11","assets/maps/map11.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map12","assets/maps/map12.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map13","assets/maps/map13.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map14","assets/maps/map14.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map15","assets/maps/map15.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map16","assets/maps/map16.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map17","assets/maps/map17.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map18","assets/maps/map18.json",null,h.default.Tilemap.TILED_JSON),
// Load Music
this.load.audio("MainTitle","assets/music/MxBeginn.mp3"),
// Load Sounds
this.load.audio("AtmoWindRain","assets/sounds/AtmoWindRain.mp3"),this.load.audio("startGame","assets/sounds/startGame.mp3"),this.load.audio("AxWaterfall","assets/sounds/AxWaterfall.mp3"),this.load.audio("AtmoWaterStill","assets/sounds/AtmoWaterStill.mp3"),this.load.audio("achivement","assets/sounds/achivement.mp3"),this.load.audio("sfxBridge","assets/sounds/sfxBridge.mp3"),this.load.audio("sfxPickUp","assets/sounds/sfxPickUp.mp3"),this.load.audio("sfxfalldown","assets/sounds/sfxfalldown.mp3"),this.load.audio("sfxGameOver","assets/sounds/sfxGameOver.mp3"),this.load.audio("sfxstonedoor","assets/sounds/sfxstonedoor.mp3"),this.load.audio("sfxTempleDoor","assets/sounds/sfxTempleDoor.mp3"),this.load.audio("sfxheartbeat","assets/sounds/sfxheartbeat.mp3"),this.load.audio("sfxletters","assets/sounds/sfxletters.mp3"),this.load.audio("sfxBossReverb","assets/sounds/sfxBossReverb.mp3"),this.load.audio("AxBotanic","assets/sounds/AxBotanic.mp3"),this.load.audio("AxEmber","assets/sounds/AxEmber.mp3"),this.load.audio("sfxSword","assets/sounds/sfxSword.mp3"),this.load.audio("AxForest","assets/sounds/AxForest.mp3"),this.load.audio("AxOracleArea","assets/sounds/AxOracleArea.mp3"),this.load.audio("AxCrickets","assets/sounds/AxCrickets.mp3"),this.load.audio("sfxShot","assets/sounds/sfxShot.mp3"),
// Load AudioSpriteSheets
this.load.audiosprite("AxThunderstrike","assets/sounds/AxThunderstrike.mp3",null,this.AxThunderstrikeJSON),this.load.audiosprite("PxFootsteps","assets/sounds/PxFootsteps.mp3",null,this.pxFootstepsJSON),this.load.audiosprite("VxSmith","assets/sounds/VxSmith.mp3",null,this.VxSmith),this.load.audiosprite("VxPriest","assets/sounds/VxPriest.mp3",null,this.VxPriest),this.load.audiosprite("VxSeeds","assets/sounds/vxSeeds.mp3",null,this.VxSeeds),this.load.audiosprite("VxBotanic","assets/sounds/VxBotanic.mp3",null,this.VxBotanic),this.load.audiosprite("sfxswordmulti","assets/sounds/sfxswordmulti.mp3",null,this.sfxswordmulti),this.load.audiosprite("sfxUI","assets/sounds/sfxUI.mp3",null,this.sfxUIJSON),this.load.audiosprite("sfxBirds","assets/sounds/sfxBirds.mp3",null,this.sfxBirdsJSON),this.sfxChestJSON,this.load.audiosprite("sfxChest","assets/sounds/sfxChest.mp3",null,this.sfxChestJSON),this.load.audiosprite("sfxLockPick","assets/sounds/sfxLockPick.mp3",null,this.sfxLockPickJSON),this.load.audiosprite("VxOracle","assets/sounds/VxOracle.mp3",null,this.VxOracleJSON),this.load.audiosprite("VxDog","assets/sounds/VxDog.mp3",null,this.VxDog),
// Particles
this.load.image("particle","assets/sprites/particles/particle.png"),this.load.image("rain","assets/sprites/particles/rain.png"),this.load.image("snow","assets/sprites/particles/snow.png"),this.load.image("fly","assets/sprites/particles/fly.png"),this.load.image("waterdrop","assets/sprites/particles/waterdrop.png"),this.load.image("glimmerParticle","assets/sprites/particles/glimmerParticle.png"),this.load.image("particleStart","assets/sprites/particles/particleStart.png"),this.load.image("leave","assets/sprites/particles/leave.png"),this.load.image("blackParticle","assets/sprites/particles/blackParticle.png"),this.load.image("cyanParticle","assets/sprites/particles/cyanParticle.png"),this.load.image("blood","assets/sprites/particles/blood.png"),this.load.image("bloodEnemy","assets/sprites/particles/bloodEnemy.png"),this.load.image("bloodHeart","assets/sprites/particles/bloodHeart.png"),this.load.image("bulletParticle","assets/sprites/particles/bulletParticle.png"),this.load.image("fishingLineChain","assets/sprites/fishingLineChain.png"),this.load.image("bulletBeam","assets/sprites/particles/bulletBeam.png"),this.load.spritesheet("treeleaves","assets/sprites/particles/treeleaves.png",3,3),this.load.spritesheet("fireSpritesheet","assets/sprites/particles/fireSpritesheet.png",1,1),this.load.spritesheet("emberSpritesheet","assets/sprites/particles/emberSpritesheet.png",1,1),this.load.spritesheet("sparklingSpritesheet","assets/sprites/particles/sparklingSpritesheet.png",1,1),
// Player
this.load.spritesheet("player","assets/sprites/player/player.png",55,55),this.load.spritesheet("dustAnimation","assets/sprites/player/dustAnimation.png",20,15),this.load.image("playerArm","assets/sprites/player/playerArm.png"),this.load.image("invisibleAttack","assets/sprites/player/invisibleAttack.png"),this.load.image("bulletPlayer","assets/sprites/player/bulletPlayer.png"),
// Villager		
this.load.spritesheet("priest","assets/sprites/villager/priest.png",35,50),this.load.spritesheet("smith","assets/sprites/villager/smith.png",31,48),this.load.spritesheet("botanist","assets/sprites/villager/botanist.png",25,50),this.load.spritesheet("librarian","assets/sprites/villager/librarian.png",16,48),this.load.spritesheet("girl1","assets/sprites/villager/girl1.png",14,35),this.load.spritesheet("girl2","assets/sprites/villager/girl2.png",15,35),this.load.spritesheet("girl3","assets/sprites/villager/girl3.png",15,30),this.load.spritesheet("veteran","assets/sprites/villager/veteran.png",34,50),this.load.spritesheet("woman1","assets/sprites/villager/woman1.png",13,35),this.load.spritesheet("woman2","assets/sprites/villager/woman2.png",17,40),this.load.spritesheet("fisher","assets/sprites/villager/fisher.png",43,44),this.load.spritesheet("oracle","assets/sprites/villager/oracle.png",192,224),
// Enemies
this.load.spritesheet("enemy","assets/sprites/enemies/enemy.png",18,18),this.load.spritesheet("bird","assets/sprites/enemies/bird.png",16,16),this.load.spritesheet("enemyPartsSpritesheet","assets/sprites/enemies/enemyPartsSpritesheet.png",16,16),this.load.spritesheet("predatorPartsSpritesheet","assets/sprites/enemies/predatorPartsSpritesheet.png",16,16),this.load.spritesheet("rock","assets/sprites/enemies/rock.png",96,128),this.load.spritesheet("raptor","assets/sprites/enemies/raptor.png",64,64),this.load.image("bulletRock","assets/sprites/enemies/bulletRock.png"),this.load.image("sprout","assets/sprites/enemies/sprout.png"),
// Doors
this.load.spritesheet("templeDoor","assets/sprites/doors/templeDoor.png",72,108),this.load.spritesheet("bossDoor","assets/sprites/doors/bossDoor.png",96,128),
// Items
this.load.spritesheet("item","assets/sprites/items/testitem.png",25,27),this.load.spritesheet("potion","assets/sprites/items/potion.png",32,32),this.load.image("doll","assets/sprites/items/doll.png"),this.load.image("energyStone","assets/sprites/items/energyStone.png"),
// Load Tilesets
this.load.image("tileset","assets/tilesets/tileset.png"),this.load.image("Clouds","assets/tilesets/Clouds.png"),this.load.image("Godrays","assets/tilesets/godrays.png"),
// Load Videos
// Load Mobile Control
this.load.atlas("dpad","assets/input/dpad.png","assets/input/dpad.json"),this.load.atlas("generic","assets/input/generic-joystick.png","assets/input/generic-joystick.json"),
// GameButtons
this.load.spritesheet("mapButton","assets/input/mapButton.png",60,20),this.load.spritesheet("controllsButton","assets/input/controllsButton.png",60,20),this.load.spritesheet("questButton","assets/input/questButton.png",60,20),this.load.spritesheet("optionsButton","assets/input/optionsButton.png",60,20),this.load.spritesheet("inventoryButton","assets/input/inventoryButton.png",60,20),this.load.spritesheet("muteMusicButton","assets/input/muteMusicButton.png",90,20),this.load.spritesheet("muteSoundButton","assets/input/muteSoundButton.png",90,20),this.load.spritesheet("FSmodeButton","assets/input/FSmodeButton.png",90,20),
// Load Weather Sprites
this.load.image("cloud","assets/sprites/cloud.png"),
// Load GUI
this.load.image("logo","assets/sprites/gui/logo.png"),this.load.image("heart","assets/sprites/gui/heart.png"),this.load.image("dashBar","assets/sprites/gui/dashBar.png"),this.load.image("newGameMap","assets/sprites/gui/newGameMap.png"),this.load.image("gamePadHelper","assets/sprites/gui/gamePadHelper.png"),this.load.image("actionSymbol","assets/sprites/gui/actionSymbol.png"),this.load.image("credits","assets/sprites/gui/credits.png"),this.load.image("instructionsInGame","assets/sprites/gui/instructionsInGame.png"),this.load.spritesheet("characterTalk","assets/sprites/gui/talk.png",15,12),this.load.spritesheet("nextGUI","assets/sprites/gui/nextGUI.png",7,7),
// this.load.image('cursor', 'assets/sprites/gui/cursor.png');
// Other
this.load.image("island","assets/sprites/island.png"),this.load.image("branch","assets/sprites/branch.png"),this.load.spritesheet("chest","assets/sprites/chest.png",30,30),this.load.image("flower","assets/sprites/flower.png"),this.load.spritesheet("flowerPieces","assets/sprites/flowerPieces.png",8,8)}},{key:"create",value:function(){this.game.renderer.setTexturePriority(["tileset"]),this.game.musicPlayer=new c.default(this.game),this.game.soundManager=new p.default(this.game),this.state.start("MainMenu",!0,!1)}},{key:"render",value:function(){}},{key:"loadUpdate",value:function(){
// Log Loadingprogress
this.loadingprogress=this.load.onFileComplete.add(function(t){if("undefined"==typeof ipc);console.log("%c Loadingprogress: "+t+" % ","background: #222; color: #49ffc5")})}}]),e}(h.default.State));e.default=m},/* 351 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(1),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e){a(this,t),this.game=e,this.fadeDuration=2e3,this.globalVolume=0,this.fadeVolumeTo=.5}return n(t,[{key:"initMap",value:function(t,e,i){
// Checks
if(
// Set Values
this.fadeDuration=i,this.key=t.music,this.start=e,(void 0===this.start||this.start)&&void 0!=this.key)
// Continue if same key
// FadeOut on empty string
// If Music isPlaying -> Fade Out -> FadeIn
return void 0==this.music?void this.playMusic(this.key):this.music.key==this.key?void console.log("Continue Music"):""==this.key&&(console.log("Empty String -> Fade out && destroy!"),this.music&&this.music.isPlaying)?(this.music.allowMultiple=!1,void this.music.fadeOut(this.fadeDuration)):void this.fadeOutFadeIn(this.key)}},{key:"playMusic",value:function(t){var e=this;this.checkCache(t)?(
// Play music from cache
this.music=this.game.add.audio(t,this.globalVolume,!0),this.music.allowMultiple=!1,this.music.onDecoded.add(function(){e.music.play(),console.log("play"),e.game.add.tween(e.music).to({volume:e.fadeVolumeTo},e.fadeDuration,r.default.Easing.Linear.None,!0)},this)):
// Load music and play it
this.loadMusic(t)}},{key:"fadeOutFadeIn",value:function(t){var e=this;this.music.fadeOut(2e3),this.music.onFadeComplete.add(function(){console.log("Fade Out Complete Fade In!"),e.music&&(e.music.destroy(),e.music=null),e.playMusic(t),
// Cannot set property 'allowMultiple' of undefined
// this.music.allowMultiple = false;
console.log(e.music)},this)}},{key:"fadeOut",value:function(){var t=this;this.music.fadeOut(2e3),this.music.onFadeComplete.add(function(){console.log("Fade Out Complete Destroy!"),t.music.destroy(),t.music=void 0},this)}},{key:"checkCache",value:function(t){return!!this.game.cache.checkSoundKey(t)}},{key:"loadMusic",value:function(t){var e=this;console.log("Load Music"),this.game.load.audio(t,"assets/music/"+t+".mp3"),this.game.load.start(),
// this.game.load.onLoadStart.add(function() {}, this);
this.game.load.onLoadComplete.add(function(){console.log("Loading Complete"),e.music=e.game.add.audio(t,e.globalVolume,!0),e.music.stop(),e.music.allowMultiple=!1,e.music.onDecoded.add(function(){
// this.music.fadeIn(this.fadeDuration, true);
e.music.play(),e.music.volume=0,console.log("Loaded play"),e.volumeTween=e.game.add.tween(e.music).to({volume:e.fadeVolumeTo},e.fadeDuration,r.default.Easing.Linear.None,!0)},e)},this)}}]),t}();e.default=o},/* 352 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(1),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e){a(this,t),this.game=e,this.fadeDuration=2e3,this.globalVolume=0,this.fadeVolumeTo=.5}return n(t,[{key:"initSound",value:function(t,e,i,a){
// Checks
if(
// Set Values
this.fadeDuration=i,a&&"AtmoWindRain"!==t.athmoSound?this.key=t.athmoSoundNight:this.key=t.athmoSound,this.start=!0,(void 0===this.start||this.start)&&void 0!=this.key)
// Continue if same key
// FadeOut on empty string
// If Music isPlaying -> Fade Out -> FadeIn
return void 0==this.sound?(this.playSound(this.key),void console.log("this.sound is not defined")):this.sound.key==this.key?void console.log("Continue Sound"):""==this.key&&(console.log("Empty String -> Fade out && destroy!"),this.sound&&this.sound.isPlaying)?(this.sound.allowMultiple=!1,void this.sound.fadeOut(this.fadeDuration)):void this.fadeOutFadeIn(this.key)}},{key:"playSound",value:function(t){var e=this;this.checkCache(t)?(
// Play music from cache
this.sound=this.game.add.audio(t,this.globalVolume,!0),this.sound.allowMultiple=!1,this.sound.onDecoded.add(function(){e.sound.play(),console.log("play"),e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,r.default.Easing.Linear.None,!0)},this)):
// Load music and play it
this.loadSound(t),console.log(this.sound)}},{key:"fadeOutFadeIn",value:function(t){var e=this;this.sound.fadeOut(2e3),this.sound.onFadeComplete.add(function(){console.log("Fade Out Sound Complete Fade In!"),e.sound&&(e.sound.destroy(),e.sound=null),e.playSound(t),console.log(e.sound)},this)}},{key:"fadeOut",value:function(){var t=this;this.sound.fadeOut(2e3),this.sound.onFadeComplete.add(function(){console.log("Fade Out Sound Complete Destroy!"),t.sound.destroy(),t.sound=void 0},this)}},{key:"checkCache",value:function(t){return!!this.game.cache.checkSoundKey(t)}},{key:"loadSound",value:function(t){var e=this;console.log("Load Sound"),this.game.load.audio(t,"assets/sounds/"+t+".mp3"),this.game.load.start(),
// this.game.load.onLoadStart.add(function() {}, this);
this.game.load.onLoadComplete.add(function(){e.sound=e.game.add.audio(t,e.globalVolume,!0),e.sound.allowMultiple=!1,e.sound.onDecoded.add(function(){
// this.sound.fadeIn(this.fadeDuration, true);
e.sound.play(),e.sound.volume=0,console.log("Loaded Sound play"),e.volumeTween=e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,r.default.Easing.Linear.None,!0)},e)},this)}}]),t}();e.default=o},/* 353 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(354),c=a(u),d=i(22),p=(a(d),function(t){function e(){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),o(e,[{key:"init",value:function(t){this.instruction=void 0!=t&&t,console.log("%c GameState ","background: #0061ff; color: #bada55")}},{key:"create",value:function(){
// // iOS & Safari Check
// let isSafari =
// 	navigator.vendor &&
// 	navigator.vendor.indexOf('Apple') > -1 &&
// 	navigator.userAgent &&
// 	!navigator.userAgent.match('CriOS');
// if (!isSafari) {
// 	this.input.onDown.add(this.toggleFullScreen, this);
// 	// this.input.onTap.add(this.toggleFullScreen, this, null, 'onTap');
// }
this.level=new c.default(this.game,this.instruction)}},{key:"update",value:function(){this.level.update()}},{key:"paused",value:function(){console.log("PAUSED")}},{key:"resumed",value:function(){}},{key:"render",value:function(){}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(h.default.State));e.default=p},/* 354 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(22),o=a(r),l=i(1),h=a(l);i(93);var u=i(355),c=a(u),d=i(133),p=a(d),f=i(357),m=a(f),g=i(358),y=a(g),v=i(359),b=a(v),w=i(132),S=a(w),x=i(360),k=a(x),P=i(363),_=a(P),T=i(365),M=a(T),E=i(135),O=a(E),B=i(367),D=a(B),A=i(369),C=a(A),I=i(371),L=a(I),F=i(372),R=a(F),q=i(378),j=a(q),N=i(379),G=a(N),V=i(380),K=a(V),X=i(381),U=a(X),Y=i(382),H=a(Y),W=i(384),Q=a(W),J=i(385),z=a(J),Z=function(){function t(e,i){n(this,t),this.game=e;
// this.game.time.slowMotion = 1.0;
var a,s=new Date,a=s.getHours();a>=0&&a<6?this.night=!0:a>=6&&a<8?this.night=!1:a>=8&&a<18?this.night=!1:a>=18&&a<21?this.night=!1:a>=21&&a<24&&(this.night=!0),this.battery=new j.default(this.game,this),this.safe=new _.default(this.game),this.questManager=new C.default(this.game,this),this.gameData=this.safe.getGameConfig(),this.itemIDs=this.safe.getItemIDs(),this.currentMap=this.gameData.currentMap,this.restartType=i.restartType,this.dayCycle=!1,this.foreGroundShift=!1,this.fallDown=!1,this.fallDownSwitch=!0,this.fallDownLayer=0,this.lastDirection=null,this.game.forceSingleUpdate=!0,
// Arrays
this.characters=[],this.items=[],this.chests=[],this.activatedBridges=[],this.enemies=[],this.birds=[],this.emitter=[],
// Accesspoints
this.startPoint={},this.customStartPoints=[],this.defaultStartPoint={},
// Method
this.loadLevel()}return s(t,[{key:"loadLevel",value:function(){
// Load Map
this.initMap(),
// Start Sound and Music
this.initSoundandMusic(),
// Load Entry Points
this.loadEntryPoints();
// Set Player Direction
switch(
// Create Player
this.player=new c.default(this.game,this.startPoint.x,this.startPoint.y,this),this.sfxheartbeat=this.game.add.audio("sfxheartbeat"),this.sfxheartbeat.loop=!0,
// this.sfxheartbeat.allowMultiple = false;
this.player.health<2&&this.sfxheartbeat.play(),this.GUICLASS=new R.default(this.game,this),this.dayCycle||this.GUICLASS.healthBar.fadeOut(),this.gameData.direction){case"up":this.player.animations.play("static_idle_up");break;case"down":this.player.animations.play("static_idle_down");break;case"left":this.player.animations.play("static_idle_left");break;case"right":this.player.animations.play("static_idle_right");break;default:this.player.animations.play("static_idle_down")}
// Create Lucy
this.lucy=!!this.tilemapProperties.lucy&&new O.default(this.game,this.player.x+10,this.player.y-10,this),
// Set Player inside GUIClass
this.GUICLASS.setLevel(this),
// Load Items
this.loadItems(),
// Load Chests
this.loadChests(),
// Load Enemies
o.default.enemies&&this.loadEnemies(),
// // Load GamePeople
// this.loadPeople();
// Load Custom Emitter
this.loadEmitter(),
// EventManager
this.eventManager=new D.default(this.game,this),
// Create Weather
this.weather=new y.default(this.game,this.tilemapProperties.weather,this,this.backgroundLayer),
// Daycycle Class
this.dayCycleClass=new L.default(this.game,this),
// Load GamePeople
this.loadPeople(),
// Saving Notification
// this.GUICLASS.createNotification('saving', 'Saving ...');
// Init InputClass
this.inputClass=new b.default(this.game,this),void 0!==this.tilemapProperties.disableAttack&&this.tilemapProperties.disableAttack&&(this.inputClass.disableAttack=!0),this.levelBuilder=new M.default(this.game,this,this.currentMap)}},{key:"loadEntryPoints",value:function(){
// Choose Start Points
if(
// Find and map startpoints
this.findObjectsByType("startPointType",this.map,"EntryPoints").forEach(function(t){
// Find Custom Startpoints
if(
// Find Default Startpoint
"default"==t.properties.startPointType&&(this.defaultStartPoint={x:t.x,y:t.y}),"custom"==t.properties.startPointType){var e=[];e.id=t.properties.id,e.x=t.x-5,e.y=t.y,this.customStartPoints.push(e)}},this),void 0==this.gameData.targetID)this.startPoint.x=this.defaultStartPoint.x,this.startPoint.y=this.defaultStartPoint.y;else for(var t=0;t<this.customStartPoints.length;t++)this.customStartPoints[t].id==this.gameData.targetID&&(this.lastTargetID=this.gameData.targetID,this.startPoint.x=this.customStartPoints[t].x,this.startPoint.y=this.customStartPoints[t].y)}},{key:"loadPeople",value:function(){
// Find specific people
this.findObjectsByType("id",this.map,"People").forEach(function(t){
// Nicht bei Nacht und nightVersion == false
if(!("Storm"==this.tilemapProperties.weather&&!t.properties.nightVersion||this.night&&!t.properties.nightVersion)&&(this.night||!t.properties.nightVersion)){
// Da bei QuestID
if(void 0!==t.properties.ifQuestID&&!this.questManager.checkIfQuestExists(t.properties.ifQuestID))return;
// Nicht bei QuestID
if(void 0!==t.properties.ifNotQuestID)for(var e=t.properties.ifNotQuestID,i=e.split(","),a=0;a<i.length;a++){var n=this.questManager.checkIfQuestExists(parseInt(i[a]));if(n)return}this.characters.push(new m.default(this.game,t,this.player,this))}},this)}},{key:"loadItems",value:function(){
// Find specific items
this.findObjectsByType("type",this.map,"Items").forEach(function(t){if((void 0===t.properties.ifQuestID||this.questManager.checkIfQuestExists(t.properties.ifQuestID))&&!this.itemIDs.includes(t.properties.id)){if("key"==t.properties.type){var e=t.x-10,i=t.y+10;this.items.push(new S.default(this.game,e,i,"item",t.properties,this))}if("doll"==t.properties.type){var a=t.x-10,n=t.y+10;this.items.push(new S.default(this.game,a,n,"doll",t.properties,this))}if("potion"==t.properties.type){var s=t.x,r=t.y;this.items.push(new S.default(this.game,s,r,"potion",t.properties,this))}if("flower"==t.properties.type){var o=t.x,l=t.y;new H.default(this.game,o,l,"flower",t.properties,this)}}},this)}},{key:"loadChests",value:function(){
// Find specific items
this.findObjectsByType(!0,this.map,"Chests").forEach(function(t){
// if (this.itemIDs.includes(element.properties.id)) return;
var e=t.x-10,i=t.y+10;this.chests.push(new k.default(this.game,e,i,t.properties,this))},this)}},{key:"loadEmitter",value:function(){
//Find specific emitter
this.findObjectsByType("type",this.map,"CustomEmitter").forEach(function(t){if("tree"==t.properties.type){var e=t.x+t.width/2,i=t.y+t.height/2,a=this.game.add.emitter(e,i,10);a.width=t.width,a.height=t.height,a.minParticleScale=.5,a.maxParticleScale=1,a.gravity=.5,a.setScale(-1,1,1,1,3e3,h.default.Easing.Sinusoidal.InOut,!0),a.setYSpeed(100),a.setXSpeed(-100,100),a.gravity=.5,a.makeParticles("treeleaves",[0,1]),a.start(!1,3e3,400,0)}else if("water"==t.properties.type){var n=t.x+this.map.tileWidth,s=t.y+this.map.tileHeight;this.waterEmitter=this.game.add.emitter(n,s,50),this.waterEmitter.width=t.width,this.waterEmitter.height=t.height,
// this.waterEmitter.minParticleScale = 0.1;
// this.waterEmitter.maxParticleScale = 0.8;
// waterEmitter.maxParticleSpeed.setTo(2, 2);
this.waterEmitter.setYSpeed(.1,-.1),this.waterEmitter.setXSpeed(.1,-.1),this.waterEmitter.rotation=0,this.waterEmitter.gravity=0,this.waterEmitter.setAlpha(.3,.8,1e3,h.default.Easing.Exponential.In,!0),this.waterEmitter.makeParticles("waterdrop"),
//(explode, lifespan, frequency, quantity, forceQuantity)
this.waterEmitter.start(!1,3e3,20)}else if("fire"==t.properties.type){var r=t.x,o=t.y;this.fireEmitter=this.game.add.emitter(r,o,100),this.fireEmitter.width=t.width,this.fireEmitter.height=t.height,
// this.fireEmitter.maxParticleScale = 1;
this.fireEmitter.gravity=.5,this.fireEmitter.setAlpha(0,1,300,null,!0),
// this.fireEmitter.minParticleSpeed.set(100);
this.fireEmitter.setXSpeed(-1,1),this.fireEmitter.setYSpeed(.8),
// this.fireEmitter.maxParticleSpeed.set(100);
this.fireEmitter.gravity=-20,this.fireEmitter.makeParticles("fireSpritesheet",[0,1,2,3],100),this.fireEmitter.start(!1,1e3,.1,0)}else if("fountainSparkling"==t.properties.type){var l=t.x+t.width/2,u=t.y+t.height/2;this.fountainSparkling=this.game.add.emitter(l,u,100),this.fountainSparkling.width=t.width,this.fountainSparkling.height=t.height,this.fountainSparkling.maxParticleScale=1,this.fountainSparkling.maxRotation=0,
// this.fountainSparkling.maxParticleScale = 1;
this.fountainSparkling.gravity=0,
// this.fountainSparkling.setAlpha(0.5, 1, 300, null, true);
// this.fountainSparkling.minParticleSpeed.set(100);
this.fountainSparkling.setXSpeed(0,0),this.fountainSparkling.setYSpeed(0),this.fountainSparkling.maxParticleSpeed.set(1),this.fountainSparkling.makeParticles("sparklingSpritesheet",[0,1,2,3],100),this.fountainSparkling.start(!1,1e3,.1,0)}else if("flies"==t.properties.type){var c=t.x+t.width/2,d=t.y+t.height/2;this.templeFliesEmitter=this.game.add.emitter(c,d,30),
// emitter.fixedToCamera = true;
this.templeFliesEmitter.width=t.width,this.templeFliesEmitter.height=t.height,
// this.templeFliesEmitter.angle = -10;
this.templeFliesEmitter.minParticleScale=.1,this.templeFliesEmitter.maxParticleScale=.5,
// emitter.maxParticleSpeed.setTo(2, 2);
this.templeFliesEmitter.setYSpeed(-5,5),this.templeFliesEmitter.setXSpeed(5,-5),this.templeFliesEmitter.gravity=.5,this.templeFliesEmitter.minRotation=0,this.templeFliesEmitter.maxRotation=0,this.templeFliesEmitter.setAlpha(.7,1,1e3,h.default.Easing.Exponential.In,!0),this.templeFliesEmitter.makeParticles("fly"),this.templeFliesEmitter.start(!1,1e4,5,0)}else if("startGlimmer"==t.properties.type){var p=t.x+t.width/2,f=t.y+t.height/2;this.addVillageGlimmer=this.game.add.emitter(p,f,30),this.addVillageGlimmer.width=t.width,this.addVillageGlimmer.height=t.height,this.addVillageGlimmer.minParticleScale=2,this.addVillageGlimmer.gravity=0,this.addVillageGlimmer.setYSpeed(-.5,.5),this.addVillageGlimmer.setXSpeed(-.5,.5),this.addVillageGlimmer.maxRotation=0,this.addVillageGlimmer.minRotation=0,
// this.addVillageGlimmer.setAlpha(0, 1, 5000, Phaser.Easing.Exponential.In, true);
this.addVillageGlimmer.makeParticles("particleStart"),this.addVillageGlimmer.start(!1,0,5,0)}else if("villageGlimmer"==t.properties.type){var m=t.x+t.width/2,g=t.y+t.height/2;this.VillageGlimmer=this.game.add.emitter(m,g,100),this.VillageGlimmer.width=t.width,this.VillageGlimmer.height=t.height,this.VillageGlimmer.minParticleScale=5,this.VillageGlimmer.gravity=0,this.VillageGlimmer.setYSpeed(-4,4),this.VillageGlimmer.setXSpeed(-4,4),this.VillageGlimmer.maxRotation=0,this.VillageGlimmer.minRotation=0,this.VillageGlimmer.setAlpha(0,1,5e3,h.default.Easing.Exponential.In,!0),this.VillageGlimmer.makeParticles("particle"),this.VillageGlimmer.start(!1,1e4,5,0)}else if("ember"==t.properties.type){var y=t.x,v=t.y;console.log(y,v),console.log(this.map),console.log(this.groundLayer);var b=this.map.getTile(746,747,this.groundLayer);console.log(b),this.emberEmitter=this.game.add.emitter(y,v,100),this.emberEmitter.width=t.width,this.emberEmitter.height=t.height,
// this.fireEmitter.maxParticleScale = 1;
this.emberEmitter.gravity=.5,this.emberEmitter.setAlpha(0,1,300,null,!0),
// this.fireEmitter.minParticleSpeed.set(100);
this.emberEmitter.setXSpeed(-1,1),this.emberEmitter.setYSpeed(.8),
// this.fireEmitter.maxParticleSpeed.set(100);
this.emberEmitter.gravity=-20,this.emberEmitter.makeParticles("emberSpritesheet",[0,1,2,3],100),this.emberEmitter.start(!1,1e3,.1,0)}},this)}},{key:"loadEnemies",value:function(){
// Find specific enemy
this.findObjectsByType("type",this.map,"Enemies").forEach(function(t){
// if (killQuestID !== undefined && !this.questManager.checkIfQuestWasDone(killQuestID)) {
// if (ifQuestID !== undefined && !this.questManager.checkIfQuestExists(ifQuestID)) return;
// Nicht bei QuestID
if(t.properties.killQuestID,void 0!==t.properties.ifQuestID){var e=t.properties.ifQuestID;console.log(e);var i=e.split(",");
// console.log(questEntries);
// for (var e = 0; e < questEntries.length; e++) {
// 	console.log(e);
// 	console.log(questEntries[e]);
// 	let check = this.questManager.checkIfQuestExists(parseInt(questEntries[e]));
// 	console.log(check);
// 	if (!check) return;
// }
console.log(i[0],i[1]);var a=this.questManager.checkIfQuestExists(parseInt(i[0])),n=this.questManager.checkIfQuestExists(parseInt(i[1]));if(!a&&!n)return}
// }
if("seed"==t.properties.type&&this.enemies.push(new p.default(this.game,t.x,t.y,this.player,this.map,this.EnemyMovingTiles,t.properties)),"bird"==t.properties.type){if(this.night)return;this.birds.push(new U.default(this.game,t.x,t.y,this.player,this.map,this.groundLayer,t.properties))}"sprout"==t.properties.type&&this.enemies.push(new Q.default(this.game,t.x,t.y,this.player,this.map,this.collisionLayer,t.properties,this)),"rock"==t.properties.type&&this.enemies.push(new G.default(this.game,t.x,t.y,this.player,this.map,this.collisionLayer,t.properties,this)),"raptor"==t.properties.type&&this.enemies.push(new K.default(this.game,t.x,t.y,this.player,this.map,this.collisionLayer,t.properties,this))},this)}},{key:"findObjectsByType",value:function(t,e,i){var a=[];return e.objects[i].forEach(function(i){var n=Object.keys(i.properties);(n.indexOf(t)||n.toString()==t)&&(i.y-=e.tileHeight/2,i.x+=e.tileHeight/2,
// element.width += tilemap.tileHeight / 2;
// element.height -= tilemap.tileHeight / 2;
a.push(i))},this),a}},{key:"enemyCollision",value:function(){}},{key:"weaponGunWallCollision",value:function(t){this.game.camera.shake(.003,100);var e=this.game.add.emitter(t.x,t.y,100);e.fixedToCamera=!0,e.setAlpha(1,0,2e3,null,!1),e.setXSpeed(this.game.rnd.integerInRange(-100,100)),e.gravity=150,e.setYSpeed(-100),e.makeParticles("bulletParticle",100),e.start(!0,0,null,10),this.game.time.events.add(2e3,function(){e.destroy()},this),t.kill()}},{key:"update",value:function(){
// Update InputClass
this.inputClass.update(),
// If Pathfinder == true -> follow path
this.pathfinder&&this.pathfinder.followPath(),
// Collisionhandler
this.game.physics.arcade.collide(this.enemies,this.enemies,this.enemyCollision),this.game.physics.arcade.collide(this.player,this.enemies,this.player.getDamage,null,this),this.game.physics.arcade.collide(this.player.weapon.bullets,this.enemies,this.player.fight,null,this),this.game.physics.arcade.collide(this.player.weaponGun.bullets,this.collisionLayer,this.weaponGunWallCollision,null,this),this.game.physics.arcade.collide(this.enemies,this.collisionLayer),this.game.physics.arcade.collide(this.player,this.characters),this.game.physics.arcade.collide(this.player,this.collisionLayer,this.enemyCollision),
// this.game.physics.arcade.collide(this.player, this.items, this.player.collideWithItem, null, this);
// If the player is not falling down
this.fallDown?
// Shift the player to the last layer
this.game.world.setChildIndex(this.player,1):(this.game.world.bringToTop(this.player),this.game.world.bringToTop(this.player.customEmitter)),
// If there is no foreGroundShift
this.foreGroundShift||(this.game.world.bringToTop(this.foregroundLayer),this.game.world.bringToTop(this.foregroundLayer2),this.game.world.bringToTop(this.trees)),
// this.game.world.bringToTop(this.foregroundLayer2);
this.game.world.bringToTop(this.godrays),
// TilemapPlus Physics
this.map.plus.physics.collideWith(this.player);for(var t=0,e=this.player.weaponGun.bullets.children.length;t<e;t++)this.map.plus.physics.collideWith(this.player.weaponGun.bullets.children[t]);this.map.plus.events.regions.triggerWith(this.player),
// If night == true && Daycycle is enabled
this.dayCycle&&(this.game.world.bringToTop(this.dayCycleClass.lightSprite),this.dayCycleClass.lightSprite.reset(this.game.camera.x-5,this.game.camera.y-5),
// if(this.night){
this.dayCycleClass.updateShadowTexture()),
// Update Weather
this.weather.updateWeather(),
// If clouds == true -> bringtoTop (Layer)
this.weather.clouds&&this.game.world.bringToTop(this.weather.clouds),
// If Templeflies -> bringToTop
this.weather.templeFliesEmitter&&this.game.world.bringToTop(this.weather.templeFliesEmitter),
// Here cause of NightTexture
this.eventManager.spotViewerPlayed||this.game.world.bringToTop(this.treeDetails),this.levelBuilder.update(),
// If lucy exists -> bringToTop
this.lucy&&this.game.world.bringToTop(this.lucy),
// Update GUIClass
this.GUICLASS.update(),
// If Lockpicker == true -> update()
this.lockGame&&(this.lockGame.update(),this.game.world.bringToTop(this.lockGame.ring),this.game.world.bringToTop(this.lockGame.ball),this.game.world.bringToTop(this.lockGame.bar),this.game.world.bringToTop(this.lockGame.firstTry),this.game.world.bringToTop(this.lockGame.secondTry),this.game.world.bringToTop(this.lockGame.thirdTry))}},{key:"slowDownTile",value:function(t,e){}},{key:"fallDownCheck",value:function(t,e){var i=this;if("player"===t.key){if(this.inputClass.dash)return void(this.lastDirection=null);if(null==this.lastDirection&&(this.lastDirection=this.inputClass.direction),"left"==this.lastDirection){if(t.body.x+t.body.width<e.worldX+e.width)return void this.fallDownProcess(t,e);parseInt(t.body.x)==e.worldX+e.width-2&&"right"==this.inputClass.direction&&setTimeout(function(){i.lastDirection=null},500)}else if("right"==this.lastDirection){if(t.body.x>e.worldX)return void this.fallDownProcess(t,e);parseInt(t.body.x+t.body.width)==e.worldX&&"left"==this.inputClass.direction&&setTimeout(function(){i.lastDirection=null},500)}else if("up"==this.lastDirection){if(t.body.y+t.body.height<e.worldY+e.height-5)return void this.fallDownProcess(t,e);parseInt(t.body.y+t.body.height)==e.worldY&&"down"==this.inputClass.direction&&setTimeout(function(){i.lastDirection=null},500)}else if("down"==this.lastDirection){if(t.body.y>e.worldY)return void this.fallDownProcess(t,e);this.inputClass.direction!==this.lastDirection&&setTimeout(function(){i.lastDirection=null},1e3)}}}},{key:"fallDownProcess",value:function(t,e){var i=this;if(this.game.camera.unfollow(),this.fallDownSwitch){if(void 0==this.fallDownTween||!this.fallDownTween.isRunning){t.body.enable=!1;var a=t.y+400;this.fallDownTween=this.game.add.tween(t).to({y:a},8e3,h.default.Easing.Elastic.Out,!0)}if("enemy"==t.key)return void this.game.world.setChildIndex(t,1);"down"==this.inputClass.direction?setTimeout(function(){i.fallDown=!0},500):this.fallDown=!0,this.fallDownSound=this.game.add.audio("sfxfalldown"),this.fallDownSound.play(),this.inputClass.pyfootsteps.stop(),t.animations.stop(),t.movable=!1,this.game.camera.fade(0,1e3,!0),this.game.time.events.add(1*h.default.Timer.SECOND,function(){i.inputClass.stick&&(i.inputClass.stick.alpha=0,i.inputClass.stick.enabled=!1),i.eventManager.areaSound&&i.eventManager.areaSound.fadeOut(2e3),i.sfxheartbeat.isPlaying&&i.sfxheartbeat.stop(),console.log("Restart"),i.game.state.restart(!0,!1)}),this.fallDownSwitch=!1}}},{key:"initMap",value:function(){
// Add current map
this.map=this.game.add.tilemap(this.gameData.currentMap),
// this.map = this.game.add.tilemap('map4');
this.map.plus.properties.dayCycle&&(
// Background Cloud Layer
// if(this.gameData.currentMap !== 'map2'){
this.backgroundTileset=this.map.addTilesetImage("Clouds","Clouds"),this.backgroundLayer=this.map.createLayer("Clouds"),this.backgroundLayer.resizeWorld(),this.backgroundLayer.scrollFactorX=this.backgroundLayer.scrollFactorY=.5),this.map.plus.properties.customSize?this.gameScaler=new z.default(this.game,this,this.map.plus.properties.customWidth,this.map.plus.properties.customHeight):this.gameScaler=new z.default(this.game,this,o.default.phaserConfig.width,o.default.phaserConfig.height),
//  Connect with Tileset
this.map.addTilesetImage("tileset","tileset",32,32),
//  Define Layers
this.groundLayer=this.map.createLayer("BackgroundLayer"),
// this.groundLayer.enableScrollDelta = false;
this.detailGroundLayer=this.map.createLayer("DetailBackgroundLayer"),this.collisionLayer=this.map.createLayer("CollisionLayer"),this.foregroundLayer=this.map.createLayer("ForegroundLayer"),this.treeDetails=this.map.createLayer("TreeDetails"),this.trees=this.map.createLayer("Trees"),this.EnemyMovingTiles=this.map.createLayer("EnemyMovingTiles"),this.EnemyMovingTiles.visible=!1,this.EnemyMovingTiles.renderable=!1,
// if (this.map.layers[3].name == 'ForegroundLayer2') {
this.foregroundLayer2=this.map.createLayer("ForegroundLayer2"),
// }
//  Resize the world
this.groundLayer.resizeWorld(),this.detailGroundLayer.resizeWorld(),this.foregroundLayer.resizeWorld(),"ForegroundLayer2"==this.map.layers[3].name&&this.foregroundLayer2.resizeWorld(),this.godrays=this.map.addTilesetImage("Godrays","Godrays"),this.godrays=this.map.createLayer("Godrays"),this.godrays.smoothed=!1,
// this.godrays.tint = 0x8cfff7;
// this.game.add.tween(this.godrays).to( { alpha: 0.3 }, 5000, 'Linear', true, 0, 0, true).loop();
// Alpha of Foregroundlayer 0.9
this.foregroundLayer.alpha=1,this.foregroundLayer2.alpha=1,
// Set Collision Tiles
this.map.setCollision(2482,!0,"CollisionLayer"),
// Set tileCallback for abyss
this.map.setTileIndexCallback(2481,this.fallDownCheck,this,this.collisionLayer),
// // Set SlowDownTile
// this.map.setTileIndexCallback(4, this.slowDownTile, this, this.collisionLayer);
// this.collisionLayer.debug = true;
// Get Map Properties
this.tilemapProperties=this.map.plus.properties,4==this.game.rnd.integerInRange(1,3)&&this.tilemapProperties.dayCycle?(this.tilemapProperties.weather="Storm",this.tilemapProperties.athmoSound="AtmoWindRain"):(this.tilemapProperties.weather=this.map.plus.properties.weather,this.tilemapProperties.athmoSound=this.map.plus.properties.athmoSound),
// Get Properties for Nightmode
this.dayCycle=this.tilemapProperties.dayCycle,
// this.collisionLayer.debug = true;
// Enable Tile Animations
this.map.plus.animation.enable(),void 0==this.gameData.targetID?this.game.camera.flash(0,1e4):this.game.camera.flash(0,1500)}},{key:"gameOver",value:function(t){this.sfxheartbeat=this.game.add.audio("sfxheartbeat"),this.sfxheartbeat.play(),this.sfxheartbeat.fadeOut(2e3);var e=t,i=h.default.Easing.Circular.InOut;void 0!==this.backgroundLayer&&this.game.add.tween(this.backgroundLayer).to({alpha:0},e,i,!0),this.game.add.tween(this.groundLayer).to({alpha:0},e,i,!0),this.game.add.tween(this.detailGroundLayer).to({alpha:0},e,i,!0),this.game.add.tween(this.collisionLayer).to({alpha:0},e,i,!0),this.game.add.tween(this.foregroundLayer).to({alpha:0},e,i,!0),this.game.add.tween(this.treeDetails).to({alpha:0},e,i,!0),this.game.add.tween(this.trees).to({alpha:0},e,i,!0),this.game.add.tween(this.foregroundLayer2).to({alpha:0},e,i,!0),this.game.add.tween(this.godrays).to({alpha:0},e,i,!0)}},{key:"initSoundandMusic",value:function(){
// Get Settings
this.preferences=this.safe.getGamePreferences(),
// Mute Music or fadeIn Music
this.preferences.muteMusic||this.night?this.muteMusic=!0:(this.game.musicPlayer.initMap(this.tilemapProperties,this.tilemapProperties.startMusic,5e3),this.muteMusic=!1),
// Mute Sound or fadeIn Sound
this.preferences.muteSound?this.muteSound=!0:(this.game.soundManager.initSound(this.tilemapProperties,!0,2e3,this.night),this.muteSound=!1)}}]),t}();e.default=Z},/* 355 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(132),c=a(u),d=function(t){function e(t,i,a,r){n(this,e);var o=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,a,"player"));o.game=t,o.level=r,o.anchor.setTo(.5),o.gameData=o.level.gameData,o.health=o.gameData.playerHealth,o.safe=o.level.safe,o.movable=!0,o.playerSpeed=130,o.talking=!1,o.attack=!1,
// if(this.health < 2){
// 	if (this.level.sfxheartbeat == undefined) {
// 		this.level.sfxheartbeat.play();
// 	}
// } else {
// 	if (this.level.sfxheartbeat !== undefined) {
// 		this.level.sfxheartbeat.stop();
// 	}
// }
// this.blendMode = PIXI.blendModes.OVERLAY;
// this.tint = 0x00000FF;
o.damageSwitch=!1,o.baseImages=[],
// this.movementBlocked = false;
o.frameRate=17,o.animations.add("dash_left",[71],1,!0),o.animations.add("dash_right",[72],1,!0),o.animations.add("dash_up",[82],1,!0),o.animations.add("dash_down",[81],1,!0),o.animations.add("static_idle_up",[34],1,!0),o.animations.add("static_idle_down",[16],1,!0),o.animations.add("static_idle_left",[50],1,!0),o.animations.add("static_idle_right",[69],1,!0),o.animations.add("static_shoot_up",[116],1,!0),o.animations.add("static_shoot_down",[115],1,!0),o.animations.add("static_shoot_left",[117],1,!0),o.animations.add("static_shoot_right",[118],1,!0),o.animations.add("walk_up",[17,18,19,20,21,22,23,24],o.frameRate,!0),o.animations.add("walk_down",[0,1,2,3,4,5,6,7],o.frameRate,!0),o.animations.add("walk_right",[54,55,56,57,58,59,60,61],o.frameRate,!0),o.animations.add("walk_left",[37,38,39,40,41,42,43,44],o.frameRate,!0),o.animations.add("walk_up_idle",[25,26,27,28,29,30,31,32,33,34,35],o.frameRate,!1),o.animations.add("walk_down_idle",[8,9,10,11,12,13,14,15],o.frameRate,!1),o.animations.add("walk_right_idle",[62,63,64,65,66,67,68,69],o.frameRate,!1),o.animations.add("walk_left_idle",[45,46,47,48,49,50,51,52],o.frameRate,!1),o.animations.add("idle_walk_up",[36,35,34,33,32,31,30,29,28,27,26,25],o.frameRate,!1),o.animations.add("idle_walk_down",[16,15,14,13,12,11,10,9,8],o.frameRate,!1),o.animations.add("idle_walk_right",[70,69,68,67,66,65,64,63,62],o.frameRate,!1),o.animations.add("idle_walk_left",[53,52,51,50,49,48,47,46,45],o.frameRate,!1),o.animations.add("run_up",[91,92,93,94,95,96,97,98],o.frameRate,!0),o.animations.add("run_down",[83,84,85,86,87,88,89,90],o.frameRate,!0),o.animations.add("run_right",[107,108,109,110,111,112,113,114],o.frameRate,!0),o.animations.add("run_left",[99,100,101,102,103,104,105,106],o.frameRate,!0),o.animations.add("fight_right",[73,74,75,76],o.frameRate,!1),o.animations.add("fight_left",[77,78,79,80],o.frameRate,!1),o.animations.add("fight_up",[119,120,121,122,123,124,125,126],35,!1),o.animations.add("sleep",[127],1,!1),o.animations.add("standUp",[127,128,127,127,127,127,127,127,128,127,127,128,127,127,127,127,127,127,127,127,128,128,128,128,128,128,129,130,131,132,133,133,134,135,136],5,!1),o.animations.add("standUpFast",[127,127,127,128,127,127,127,127,128,129,130,131,132,133,133,134,135,136],5,!1),o.animations.add("die",[136,135,134,133,133,132,131,130,129,128,127],8,!1),
// this.animations.play('idle');
o.dustAnimation=o.game.add.sprite(o.x,o.y,"dustAnimation"),o.dustAnimation.animations.add("run",[0,1,2,3,4,5,6,7,8],10,!1),o.dustAnimation.alpha=0,o.dustAnimationLoop=o.game.time.events.loop(2*h.default.Timer.SECOND,function(){o.playDustAnimation()},o),o.game.physics.enable(o),o.body.setSize(10,6,21,47),
// this.body.bounce.set(2);
o.body.drag.set(1e3),o.body.collideWorldBounds=!0,
// No Glitch on Camera
o.game.camera.roundPx=!0,o.game.renderer.renderSession.roundPixels=!1,o.game.camera.follow(o,h.default.Camera.FOLLOW_LOCKON,1,1),
// this.game.camera.follow(this, Phaser.Camera.FOLLOW_TOPDOWN, 0.07, 0.07);
// this.game.camera.follow(this, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT, 0.07, 0.07);
// Add Lerp after 1 Second
o.game.time.events.add(1*h.default.Timer.SECOND,function(){if("map1"!=o.gameData.currentMap)switch(o.level.tilemapProperties.cameraMode){case"follow":
// ORIGINAL
o.game.camera.follow(o,h.default.Camera.FOLLOW_LOCKON,.025,.025);
// this.game.camera.follow(this, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
break;case"topdown":
// Original
// this.game.camera.follow(this, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT, 0.1, 0.1);
o.game.camera.follow(o,h.default.Camera.FOLLOW_TOPDOWN_TIGHT,1,1);break;default:console.warn("Default Camera Mode!"),o.game.camera.follow(o,h.default.Camera.FOLLOW_LOCKON,1,1)}});
// -1 Velocity
var l=o.body.velocity.x,u=o.body.velocity.y;l*=-2,u*=-2,o.customEmitter=o.game.add.emitter(o.x,o.y,500),o.customEmitter.width=10,o.customEmitter.height=30,o.customEmitter.minParticleScale=1,o.customEmitter.maxParticleScale=1,o.customEmitter.gravity=0,o.customEmitter.setAlpha(.5,1,500,null,!0),o.customEmitter.minParticleSpeed.set(l,u),o.customEmitter.maxParticleSpeed.set(l,u),
// this.customEmitter.gravity = -10;
o.customEmitter.makeParticles("cyanParticle",500),o.multiplySprite=t.make.sprite(0,0,o.key),o.multiplySprite.anchor.set(.5),o.multiplySprite.alpha=.1,o.bmd=o.game.add.bitmapData(100,100),o.baseImages.push(o.bmd.addToWorld(i,a,.5,.5)),o.bmd.smoothed=!0,o.bmd.shadow("#000000",10,-1,-1),o.bmd.draw(o.multiplySprite,50,50),o.weapon=o.game.add.weapon(10,"invisibleAttack"),o.weapon.bulletKillType=h.default.Weapon.KILL_LIFESPAN,o.weapon.bulletLifespan=100,o.weapon.bulletSpeed=400,
// this.weapon.fireRate = 200;
o.weapon.trackSprite(o,0,0,!1),o.playerArm=o.game.add.sprite(o.x,o.y,"playerArm"),o.playerArm.anchor.set(.5,0),o.playerArm.visible=!1,o.weaponGun=o.game.add.weapon(30,"bulletBeam"),o.weaponGun.bulletKillType=h.default.Weapon.KILL_LIFESPAN,o.weaponGun.bulletLifespan=2e3,o.weaponGun.bulletSpeed=400,o.weaponGun.fireRate=1e3,
// this.weaponGun.bulletAngleVariance = 10;
o.weaponGun.trackSprite(o.playerArm,0,10,!0);for(var c=0;c<o.weaponGun.bullets.children.length;c++)
// this.weaponGun.bullets.children[i].scale.setTo(2);
o.weaponGun.bullets.children[c].smoothed=!1;
// this.teleport();
return o.sfxShot=o.game.add.audio("sfxShot",.05),o.sfxShot.allowMultiple=!1,o.weaponGun.onFire.add(function(){
// console.log('BOOOM');
o.sfxShot.play(),o.game.camera.shake(.003,100)},o),t.add.existing(o),o}return r(e,t),o(e,[{key:"playDustAnimation",value:function(){this.level.inputClass.standing||(this.dustAnimation.alpha=1,"left"==this.level.inputClass.direction?(this.dustAnimation.x=this.x,this.dustAnimation.y=this.y+8):"right"==this.level.inputClass.direction?(this.dustAnimation.x=this.x-18,this.dustAnimation.y=this.y+7):"up"==this.level.inputClass.direction?(this.dustAnimation.x=this.x-12,this.dustAnimation.y=this.y+10):"down"==this.level.inputClass.direction&&(this.dustAnimation.x=this.x-12,this.dustAnimation.y=this.y-8),this.dustAnimation.play("run",!1))}},{key:"teleport",value:function(){this.alpha=0,this.game.forceSingleUpdate=!0,this.manager=this.game.plugins.add(h.default.ParticleStorm);var t={lifespan:0};this.manager.addData("burst",t),this.teleportEmitter=this.manager.createEmitter(h.default.ParticleStorm.PIXEL),this.teleportEmitter.renderer.pixelSize=8,this.teleportEmitter.addToWorld(),this.image=this.manager.createImageZone("player"),this.teleportEmitter.emit("burst",this.x,this.y,{zone:this.image,full:!0,spacing:8,setColor:!0}),this.teleportEmitter.forEachNew(this.setVelocity,this,this.x,this.y)}},{key:"setVelocity",value:function(t,e,i){console.log(e,i),t.setLife(3e3),t.radiateFrom(e,i,3)}},{key:"addParticles",value:function(){var t=this;this.customEmitter.on=!0,this.customEmitter.x=this.x,this.customEmitter.y=this.y,this.emitterLoop=this.game.time.events.loop(1,function(){t.customEmitter.start(!0)},this)}},{key:"removeParticles",value:function(){this.game.time.events.remove(this.emitterLoop),this.customEmitter.on=!1}},{key:"fight",value:function(t,e){
// console.log('collide');
// this.inputClass.muteAttack = true;
// bullet.kill();
t.paralyze=!0,t.tint=16711680,this.game.time.events.add(350,function(){t.paralyze=!1}),this.game.time.events.add(75,function(){t.tint=16777215});var i=t.body.velocity.x,a=t.body.velocity.y;
// console.log(enemy.health, enemy.health <= 0);
if(i*=2,a*=2,this.bloodAnimation=this.game.add.emitter(t.x,t.y,100),
// this.bloodAnimation.angularDrag = 500;
this.bloodAnimation.minParticleScale=1,this.bloodAnimation.maxParticleScale=1,this.bloodAnimation.maxRotation=0,this.bloodAnimation.minRotation=0,this.bloodAnimation.particleDrag.set(1800),this.bloodAnimation.setAlpha(1,0,1e3,null,!1),
// console.log(this.bloodAnimation);
"left"==this.inputClass.direction||"right"==this.inputClass.direction?(this.bloodAnimation.setXSpeed(i),this.bloodAnimation.setYSpeed(-400)):(this.bloodAnimation.setXSpeed(400),this.bloodAnimation.setYSpeed(a)),this.bloodAnimation.makeParticles("bloodEnemy",100),this.bloodAnimation.start(!0,3e3,null,10),
// if (player.attack) {
// 	console.log('punsh');
// 	enemy.paralyze = true;
// 	this.game.time.events.add(400, () => {
// 		enemy.paralyze = false;
// 	});
// 	enemy.body.velocity.x = player.body.velocity.x * 2;
// 	enemy.body.velocity.y = player.body.velocity.y * 2;
// enemy.health -= 1;
// console.log(enemy.health, enemy.health <= 0);
// if (enemy.health <= 0) {
// 	console.log('die');
// 	enemy.dead = true;
// 	enemy.body.moves = false;
// 	enemy.body.enable = false;
// 	enemy.animations.stop();
// 	if (enemy.itemType !== undefined && enemy.itemType == 'key') {
// 		let properties = {};
// 		properties.id = enemy.dropItemID;
// 		this.items.push(new Item(this.game, enemy.x, enemy.y + 40, 'item', properties));
// 	}
// 	if (enemy.killQuestID !== undefined) {
// 		this.questManager.checkKillCondition(enemy.killQuestID);
// 	}
// }
t.health-=1,t.health<=0){if(
// console.log('die');
t.dead=!0,t.body.moves=!1,t.body.enable=!1,t.animations.stop(),void 0!==t.itemType&&"key"==t.itemType){var n={};n.id=t.dropItemID,this.items.push(new c.default(this.game,t.x,t.y+40,"item",n))}void 0!==t.killQuestID&&this.questManager.checkKillCondition(t.killQuestID);var s=t.body.velocity.x,r=t.body.velocity.y;s*=2,r*=2,this.killAnimation=this.game.add.emitter(t.x,t.y,4),this.killAnimation.angularDrag=500,this.killAnimation.particleDrag.set(1800),"left"==this.inputClass.direction||"right"==this.inputClass.direction?(this.killAnimation.setXSpeed(s),this.killAnimation.setYSpeed(400)):(this.killAnimation.setXSpeed(400),this.killAnimation.setYSpeed(r)),"seed"==t.type?this.killAnimation.makeParticles("enemyPartsSpritesheet",[0,1,2,3],4):this.killAnimation.makeParticles("predatorPartsSpritesheet",[0,1,2,3],4),this.killAnimation.setAlpha(1,0,5e3,null,!1),this.killAnimation.start(!0,0,null,10),this.game.world.setChildIndex(this.killAnimation,10),t.kill(),this.bloodAnimation=this.game.add.emitter(t.x,t.y,100),this.bloodAnimation.angularDrag=500,this.bloodAnimation.particleDrag.set(1800),this.bloodAnimation.setAlpha(1,0,1e3,null,!1),
// this.bloodAnimation.minParticleSpeed.set(px, 400);
"left"==this.inputClass.direction||"right"==this.inputClass.direction?(this.bloodAnimation.setXSpeed(s),this.bloodAnimation.setYSpeed(300)):(this.bloodAnimation.setXSpeed(400),this.bloodAnimation.setYSpeed(r)),this.bloodAnimation.makeParticles("blood",100),this.bloodAnimation.start(!0,0,null,10),this.rndVoice=this.game.rnd.pick(["death1","death2","death3","death4"]),this.voice=this.game.add.audioSprite("sfxswordmulti"),this.voice.play(this.rndVoice,.1)}else this.rndVoiceSword=this.game.rnd.pick(["vx3","vx4","vx5","vx6","vx7","vx8","vx9","vx10"]),this.voiceSword=this.game.add.audioSprite("sfxswordmulti"),this.voiceSword.play(this.rndVoiceSword,.2),this.rndVoice=this.game.rnd.pick(["vx1","vx2","vx3","vx4","vx5"]),this.voice=this.game.add.audioSprite("VxSeeds"),this.voice.play(this.rndVoice,.1)}},{key:"turnPlayer",value:function(t){
// console.log('turn');
var e=this.game.physics.arcade.angleToXY(this,t.x,t.y);e>-2.5&&e<-.5?(this.level.GUICLASS.direction="up",this.animations.play("static_idle_up")):e>1&&e<2.5?(this.level.GUICLASS.direction="down",this.animations.play("static_idle_down")):e>-.5&&e<1?(this.level.GUICLASS.direction="right",this.animations.play("static_idle_right")):(e>2.5||e<-2.5)&&(this.level.GUICLASS.direction="left",this.animations.play("static_idle_left"))}},{key:"getDamage",value:function(t,e){var i=this;
// console.log('collide');
this.damageSwitch||(this.damageSwitch=!0,e.paralyze=!0,this.game.time.events.add(1e3,function(){i.damageSwitch=!1,e.paralyze=!1},this),this.game.camera.flash(12648448,200),this.GUICLASS.healthBar.removeHeart(1,!0),
// return;
// 5-1 = 4
// enemy.destroy();
// if (enemy.itemType !== undefined && enemy.itemType == 'key') {
// 	let properties = {};
// 	properties.id = enemy.dropItemID;
// 	this.items.push(new Item(this.game, enemy.x, enemy.y + 40, 'item', properties));
// }
// if (enemy.killQuestID !== undefined) {
// 	this.questManager.checkKillCondition(enemy.killQuestID);
// }
// console.log(this.player.health);
this.player.health-=1,this.gameData.playerHealth=this.player.health,this.safe.setGameConfig(this.gameData),
// this.GUICLASS.healthBar.removeHeart(1, true);
// this.game.camera.flash(0xc10000, 200);
this.player.health<2?void 0==this.sfxheartbeat&&this.sfxheartbeat.play():void 0!==this.sfxheartbeat&&this.sfxheartbeat.fadeOut(),this.player.health<=0&&(this.gameData.playerHealth=5,this.safe.setGameConfig(this.gameData),this.inputClass.stick&&(this.inputClass.stick.alpha=0,this.inputClass.stick.enabled=!1),console.log(this.sfxheartbeat),this.sfxheartbeat.isPlaying&&this.sfxheartbeat.stop(),this.game.state.restart(!0,!1,{map:this.currentMap,targetID:this.lastTargetID,restartType:"revive"})))}},{key:"collideWithItem",value:function(t,e){
// this.lockGame = new LockGame(this.game, this.player.x, this.player.y, this.player);
// console.log(item);
this.level.itemIDs.includes(e.id)||(this.level.itemIDs.push(e.id),this.level.safe.setItemIDs(this.level.itemIDs)),"potion"==e.type&&(this.level.GUICLASS.healthBar.addHeart(5),this.level.player.health=5,this.level.gameData.playerHealth=5,this.level.safe.setGameConfig(this.level.gameData),this.level.player.health>1&&(this.level.sfxheartbeat.stop(),this.level.GUICLASS.healthBar.flashingLoop&&this.game.time.events.remove(this.level.GUICLASS.healthBar.flashingLoop))),void 0!==e.removeQuestID&&
// console.log('Remove');
this.level.questManager.removeQuest(e.removeQuestID),void 0!==e.ifQuestID&&(this.level.questManager.checkIfQuestExists(e.ifQuestID)&&(this.level.questManager.removeQuest(e.ifQuestID),console.log("NewQuestID: "+e.newQuestID),this.level.questManager.addQuest(e.newQuestID)),console.log("Questupdate"),this.level.GUICLASS.createNotification("success","Questupdate")),this.level.itemPickUpSound=this.game.add.audio("sfxPickUp",1),this.level.itemPickUpSound.play(),e.used=!0,e.destroy(),this.level.items.splice(e,1)}},{key:"bulletHit",value:function(t,e){e.kill(),t.tint=16711680,this.game.time.events.add(200,function(){t.tint=16777215}),this.game.camera.flash(12648448,200),this.level.GUICLASS.healthBar.removeHeart(1,!0),t.health-=1,this.level.gameData.playerHealth=t.health,this.level.safe.setGameConfig(this.level.gameData),
// this.GUICLASS.healthBar.removeHeart(1, true);
// this.game.camera.flash(0xc10000, 200);
t.health<2?void 0==this.level.sfxheartbeat&&this.level.sfxheartbeat.play():void 0!==this.level.sfxheartbeat&&this.level.sfxheartbeat.fadeOut(),t.health<=0&&(this.level.gameData.playerHealth=5,this.level.safe.setGameConfig(this.level.gameData),this.level.inputClass.stick&&(this.level.inputClass.stick.alpha=0,this.level.inputClass.stick.enabled=!1),this.level.sfxheartbeat.isPlaying&&this.level.sfxheartbeat.stop(),this.game.state.restart(!0,!1,{map:this.currentMap,targetID:this.lastTargetID,restartType:"revive"}))}},{key:"update",value:function(){var t=this;
// console.log(this.animations.currentFrame.index);
this.game.world.bringToTop(this.customEmitter),"right"!=this.level.inputClass.direction&&"down"!=this.level.inputClass.direction||this.game.world.bringToTop(this.playerArm),this.playerArm.rotation=this.game.physics.arcade.angleToPointer(this.playerArm)-360,
// this.game.world.setChildIndex(this.customEmitter, 5);
this.customEmitter.x=this.x,this.customEmitter.y=this.y,this.level.inputClass.dash?(this.multiplySprite.frame=this.frame,this.multiplySprite.alpha=.01,this.bmd.draw(this.multiplySprite,50,50),this.baseImages.push(this.bmd.addToWorld(this.x,this.y,.5,.5)),
// this.game.world.setChildIndex(this.bmd, 1);
void 0!==this.baseImages[0]&&(this.game.world.setChildIndex(this.baseImages[0],1),
// this.game.world.setChildIndex(this.baseImages[1], 1);
this.game.time.events.add(100,function(){t.baseImages[0].alpha=0,t.baseImages[0].destroy(!0,!1),t.baseImages.shift()}))):this.game.time.events.add(200,function(){t.bmd.clear()})}}]),e}(h.default.Sprite);e.default=d},/* 356 */
/***/
function(t,e,i){"use strict";/**
 * Represents a single instance of EasyStar.
 * A path that is in the queue to eventually be found.
 */
var a=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList},n=function(t,e,i,a,n){this.parent=t,this.x=e,this.y=i,this.costSoFar=a,this.simpleDistanceToTarget=n,/**
	 * @return {Number} Best guess distance of a cost using this node.
	 **/
this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}},s=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){
// Generated by CoffeeScript 1.8.0
(function(){var e,i,a,n,s,r,o,l,h,u,c,d,p,f,m;a=Math.floor,u=Math.min,/*
  Default comparison function to be used
   */
i=function(t,e){return t<e?-1:t>e?1:0},/*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */
h=function(t,e,n,s,r){var o;if(null==n&&(n=0),null==r&&(r=i),n<0)throw new Error("lo must be non-negative");for(null==s&&(s=t.length);n<s;)o=a((n+s)/2),r(e,t[o])<0?s=o:n=o+1;return[].splice.apply(t,[n,n-n].concat(e)),e},/*
  Push item onto heap, maintaining the heap invariant.
   */
r=function(t,e,a){return null==a&&(a=i),t.push(e),f(t,0,t.length-1,a)},/*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */
s=function(t,e){var a,n;return null==e&&(e=i),a=t.pop(),t.length?(n=t[0],t[0]=a,m(t,0,e)):n=a,n},/*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */
l=function(t,e,a){var n;return null==a&&(a=i),n=t[0],t[0]=e,m(t,0,a),n},/*
  Fast version of a heappush followed by a heappop.
   */
o=function(t,e,a){var n;return null==a&&(a=i),t.length&&a(t[0],e)<0&&(n=[t[0],e],e=n[0],t[0]=n[1],m(t,0,a)),e},/*
  Transform list into a heap, in-place, in O(array.length) time.
   */
n=function(t,e){var n,s,r,o,l,h;for(null==e&&(e=i),o=function(){h=[];for(var e=0,i=a(t.length/2);0<=i?e<i:e>i;0<=i?e++:e--)h.push(e);return h}.apply(this).reverse(),l=[],s=0,r=o.length;s<r;s++)n=o[s],l.push(m(t,n,e));return l},/*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */
p=function(t,e,a){var n;if(null==a&&(a=i),-1!==(n=t.indexOf(e)))return f(t,0,n,a),m(t,n,a)},/*
  Find the n largest elements in a dataset.
   */
c=function(t,e,a){var s,r,l,h,u;if(null==a&&(a=i),r=t.slice(0,e),!r.length)return r;for(n(r,a),u=t.slice(e),l=0,h=u.length;l<h;l++)s=u[l],o(r,s,a);return r.sort(a).reverse()},/*
  Find the n smallest elements in a dataset.
   */
d=function(t,e,a){var r,o,l,c,d,p,f,m,g;if(null==a&&(a=i),10*e<=t.length){if(l=t.slice(0,e).sort(a),!l.length)return l;for(o=l[l.length-1],f=t.slice(e),c=0,p=f.length;c<p;c++)r=f[c],a(r,o)<0&&(h(l,r,0,null,a),l.pop(),o=l[l.length-1]);return l}for(n(t,a),g=[],d=0,m=u(e,t.length);0<=m?d<m:d>m;0<=m?++d:--d)g.push(s(t,a));return g},f=function(t,e,a,n){var s,r,o;for(null==n&&(n=i),s=t[a];a>e&&(o=a-1>>1,r=t[o],n(s,r)<0);)t[a]=r,a=o;return t[a]=s},m=function(t,e,a){var n,s,r,o,l;for(null==a&&(a=i),s=t.length,l=e,r=t[e],n=2*e+1;n<s;)o=n+1,o<s&&!(a(t[n],t[o])<0)&&(n=o),t[e]=t[n],e=n,n=2*e+1;return t[e]=r,f(t,l,e,a)},e=function(){function t(t){this.cmp=null!=t?t:i,this.nodes=[]}return t.push=r,t.pop=s,t.replace=l,t.pushpop=o,t.heapify=n,t.updateItem=p,t.nlargest=c,t.nsmallest=d,t.prototype.push=function(t){return r(this.nodes,t,this.cmp)},t.prototype.pop=function(){return s(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return l(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return o(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return n(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return p(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return e=new t,e.nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),function(e,i){t.exports=i()}(0,function(){return e})}).call(this)}),r=s,o={};var l=o,h=1;o.js=function(){var t,e,i,s=!1,l={},u={},c={},d={},p=!0,f={},m=[],g=Number.MAX_VALUE,y=!1;/**
	 * Sets the collision grid that EasyStar uses.
	 *
	 * @param {Array|Number} tiles An array of numbers that represent
	 * which tiles in your grid should be considered
	 * acceptable, or "walkable".
	 **/
this.setAcceptableTiles=function(t){t instanceof Array?
// Array
i=t:!isNaN(parseFloat(t))&&isFinite(t)&&(
// Number
i=[t])},/**
	 * Enables sync mode for this EasyStar instance..
	 * if you're into that sort of thing.
	 **/
this.enableSync=function(){s=!0},/**
	 * Disables sync mode for this EasyStar instance.
	 **/
this.disableSync=function(){s=!1},/**
	 * Enable diagonal pathfinding.
	 */
this.enableDiagonals=function(){y=!0},/**
	 * Disable diagonal pathfinding.
	 */
this.disableDiagonals=function(){y=!1},/**
	 * Sets the collision grid that EasyStar uses.
	 *
	 * @param {Array} grid The collision grid that this EasyStar instance will read from.
	 * This should be a 2D Array of Numbers.
	 **/
this.setGrid=function(e){t=e;
//Setup cost map
for(var i=0;i<t.length;i++)for(var a=0;a<t[0].length;a++)u[t[i][a]]||(u[t[i][a]]=1)},/**
	 * Sets the tile cost for a particular tile type.
	 *
	 * @param {Number} The tile type to set the cost for.
	 * @param {Number} The multiplicative cost associated with the given tile.
	 **/
this.setTileCost=function(t,e){u[t]=e},/**
	 * Sets the an additional cost for a particular point.
	 * Overrides the cost from setTileCost.
	 *
	 * @param {Number} x The x value of the point to cost.
	 * @param {Number} y The y value of the point to cost.
	 * @param {Number} The multiplicative cost associated with the given point.
	 **/
this.setAdditionalPointCost=function(t,e,i){void 0===c[e]&&(c[e]={}),c[e][t]=i},/**
	 * Remove the additional cost for a particular point.
	 *
	 * @param {Number} x The x value of the point to stop costing.
	 * @param {Number} y The y value of the point to stop costing.
	 **/
this.removeAdditionalPointCost=function(t,e){void 0!==c[e]&&delete c[e][t]},/**
	 * Remove all additional point costs.
	 **/
this.removeAllAdditionalPointCosts=function(){c={}},/**
	 * Sets a directional condition on a tile
	 *
	 * @param {Number} x The x value of the point.
	 * @param {Number} y The y value of the point.
	 * @param {Array.<String>} allowedDirections A list of all the allowed directions that can access
	 * the tile.
	 **/
this.setDirectionalCondition=function(t,e,i){void 0===d[e]&&(d[e]={}),d[e][t]=i},/**
	 * Remove all directional conditions
	 **/
this.removeAllDirectionalConditions=function(){d={}},/**
	 * Sets the number of search iterations per calculation.
	 * A lower number provides a slower result, but more practical if you
	 * have a large tile-map and don't want to block your thread while
	 * finding a path.
	 *
	 * @param {Number} iterations The number of searches to prefrom per calculate() call.
	 **/
this.setIterationsPerCalculation=function(t){g=t},/**
	 * Avoid a particular point on the grid,
	 * regardless of whether or not it is an acceptable tile.
	 *
	 * @param {Number} x The x value of the point to avoid.
	 * @param {Number} y The y value of the point to avoid.
	 **/
this.avoidAdditionalPoint=function(t,e){void 0===l[e]&&(l[e]={}),l[e][t]=1},/**
	 * Stop avoiding a particular point on the grid.
	 *
	 * @param {Number} x The x value of the point to stop avoiding.
	 * @param {Number} y The y value of the point to stop avoiding.
	 **/
this.stopAvoidingAdditionalPoint=function(t,e){void 0!==l[e]&&delete l[e][t]},/**
	 * Enables corner cutting in diagonal movement.
	 **/
this.enableCornerCutting=function(){p=!0},/**
	 * Disables corner cutting in diagonal movement.
	 **/
this.disableCornerCutting=function(){p=!1},/**
	 * Stop avoiding all additional points on the grid.
	 **/
this.stopAvoidingAllAdditionalPoints=function(){l={}},/**
	 * Find a path.
	 *
	 * @param {Number} startX The X position of the starting point.
	 * @param {Number} startY The Y position of the starting point.
	 * @param {Number} endX The X position of the ending point.
	 * @param {Number} endY The Y position of the ending point.
	 * @param {Function} callback A function that is called when your path
	 * is found, or no path is found.
	 * @return {Number} A numeric, non-zero value which identifies the created instance. This value can be passed to cancelPath to cancel the path calculation.
	 *
	 **/
this.findPath=function(e,n,o,l,u){
// Wraps the callback for sync vs async logic
var c=function(t){s?u(t):setTimeout(function(){u(t)})};
// No acceptable tiles were set
if(void 0===i)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");
// No grid was set
if(void 0===t)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");
// Start or endpoint outside of scope.
if(e<0||n<0||o<0||l<0||e>t[0].length-1||n>t.length-1||o>t[0].length-1||l>t.length-1)throw new Error("Your start or end point is outside the scope of your grid.");
// Start and end are the same tile.
if(e===o&&n===l)return void c([]);for(var d=t[l][o],p=!1,g=0;g<i.length;g++)if(d===i[g]){p=!0;break}if(!1===p)return void c(null);
// Create the instance
var y=new a;y.openList=new r(function(t,e){return t.bestGuessDistance()-e.bestGuessDistance()}),y.isDoneCalculating=!1,y.nodeHash={},y.startX=e,y.startY=n,y.endX=o,y.endY=l,y.callback=c,y.openList.push(x(y,y.startX,y.startY,null,1));var v=h++;return f[v]=y,m.push(v),v},/**
	 * Cancel a path calculation.
	 *
	 * @param {Number} instanceId The instance ID of the path being calculated
	 * @return {Boolean} True if an instance was found and cancelled.
	 *
	 **/
this.cancelPath=function(t){return t in f&&(delete f[t],!0)},/**
	 * This method steps through the A* Algorithm in an attempt to
	 * find your path(s). It will search 4-8 tiles (depending on diagonals) for every calculation.
	 * You can change the number of calculations done in a call by using
	 * easystar.setIteratonsPerCalculation().
	 **/
this.calculate=function(){if(0!==m.length&&void 0!==t&&void 0!==i)for(e=0;e<g;e++){if(0===m.length)return;s&&(
// If this is a sync instance, we want to make sure that it calculates synchronously.
e=0);var a=m[0],n=f[a];if(void 0!==n)
// Couldn't find a path.
if(0!==n.openList.size()){var r=n.openList.pop();
// Handles the case where we have found the destination
if(n.endX!==r.x||n.endY!==r.y)r.list=0,r.y>0&&v(n,r,0,-1,1*S(r.x,r.y-1)),r.x<t[0].length-1&&v(n,r,1,0,1*S(r.x+1,r.y)),r.y<t.length-1&&v(n,r,0,1,1*S(r.x,r.y+1)),r.x>0&&v(n,r,-1,0,1*S(r.x-1,r.y)),y&&(r.x>0&&r.y>0&&(p||b(t,i,r.x,r.y-1)&&b(t,i,r.x-1,r.y))&&v(n,r,-1,-1,1.4*S(r.x-1,r.y-1)),r.x<t[0].length-1&&r.y<t.length-1&&(p||b(t,i,r.x,r.y+1)&&b(t,i,r.x+1,r.y))&&v(n,r,1,1,1.4*S(r.x+1,r.y+1)),r.x<t[0].length-1&&r.y>0&&(p||b(t,i,r.x,r.y-1)&&b(t,i,r.x+1,r.y))&&v(n,r,1,-1,1.4*S(r.x+1,r.y-1)),r.x>0&&r.y<t.length-1&&(p||b(t,i,r.x,r.y+1)&&b(t,i,r.x-1,r.y))&&v(n,r,-1,1,1.4*S(r.x-1,r.y+1)));else{var o=[];o.push({x:r.x,y:r.y});for(var l=r.parent;null!=l;)o.push({x:l.x,y:l.y}),l=l.parent;o.reverse();var h=o;n.callback(h),delete f[a],m.shift()}}else n.callback(null),delete f[a],m.shift();else
// This instance was cancelled
m.shift()}};
// Private methods follow
var v=function(e,a,n,s,r){var o=a.x+n,h=a.y+s;if((void 0===l[h]||void 0===l[h][o])&&b(t,i,o,h,a)){var u=x(e,o,h,a,r);void 0===u.list?(u.list=1,e.openList.push(u)):a.costSoFar+r<u.costSoFar&&(u.costSoFar=a.costSoFar+r,u.parent=a,e.openList.updateItem(u))}},b=function(t,e,i,a,n){var s=d[a]&&d[a][i];if(s){var r=w(n.x-i,n.y-a);if(!function(){for(var t=0;t<s.length;t++)if(s[t]===r)return!0;return!1}())return!1}for(var o=0;o<e.length;o++)if(t[a][i]===e[o])return!0;return!1},w=function(t,e){if(0===t&&-1===e)return o.TOP;if(1===t&&-1===e)return o.TOP_RIGHT;if(1===t&&0===e)return o.RIGHT;if(1===t&&1===e)return o.BOTTOM_RIGHT;if(0===t&&1===e)return o.BOTTOM;if(-1===t&&1===e)return o.BOTTOM_LEFT;if(-1===t&&0===e)return o.LEFT;if(-1===t&&-1===e)return o.TOP_LEFT;throw new Error("These differences are not valid: "+t+", "+e)},S=function(e,i){return c[i]&&c[i][e]||u[t[i][e]]},x=function(t,e,i,a,s){if(void 0!==t.nodeHash[i]){if(void 0!==t.nodeHash[i][e])return t.nodeHash[i][e]}else t.nodeHash[i]={};var r=k(e,i,t.endX,t.endY);if(null!==a)var o=a.costSoFar+s;else o=0;var l=new n(a,e,i,o,r);return t.nodeHash[i][e]=l,l},k=function(t,e,i,a){if(y){
// Octile distance
var n=Math.abs(t-i),s=Math.abs(e-a);return n<s?1.4*n+s:1.4*s+n}
// Manhattan distance
var n=Math.abs(t-i),s=Math.abs(e-a);return n+s}},o.TOP="TOP",o.TOP_RIGHT="TOP_RIGHT",o.RIGHT="RIGHT",o.BOTTOM_RIGHT="BOTTOM_RIGHT",o.BOTTOM="BOTTOM",o.BOTTOM_LEFT="BOTTOM_LEFT",o.LEFT="LEFT",o.TOP_LEFT="TOP_LEFT";var u=l.js,c=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function a(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a)}}(),d=/** @class */function(t){function e(e){var i=t.call(this,e,e.plugins)||this;return i.easystar=new u,i.callback=null,i.prepared=!1,i}/**
	 * Set Grid for Pathfinding.
	 * @param grid              Map data. (Phaser.TilemapLayer.data)
	 * @param walkables         An array of numbers that represent which tiles in your grid should be considered acceptable, or "walkable".
	 * @param iterationsPerCalc The number of searches to perfrom per calculate() call.
	 */
/**
	 * @param callback A function that is called when your path is found, or no path is found.
	 */
/**
	 * Prepare path calculation for easystar.
	 *
	 * @param from  0: x-coords, 1: y-coords ([x,y])
	 * @param to    0: x-coords, 1: y-coords ([x,y])
	 */
/**
	 * Start path calculation.
	 */
return c(e,t),e.prototype.setGrid=function(t,e,i){void 0===i&&(i=Number.MAX_VALUE),this.grid=[];for(var a=0;a<t.length;a++){this.grid[a]=[];for(var n=0;n<t[a].length;n++)this.grid[a][n]=t[a][n]?t[a][n].index:0}this.easystar.setGrid(this.grid),this.easystar.setAcceptableTiles(e);
// initiate all walkable tiles with cost 1 so they will be walkable even if they are not on the grid map, yet.
for(var s=0,r=e;s<r.length;s++){var o=r[s];this.easystar.setTileCost(o,1)}this.easystar.setIterationsPerCalculation(i)},e.prototype.setCallbackFunction=function(t){this.callback=t},e.prototype.preparePathCalculation=function(t,e){if(null===this.callback)throw new Error("no callback set");this.easystar.findPath(t[0],t[1],e[0],e[1],this.callback),this.prepared=!0},e.prototype.calculatePath=function(){if(!this.prepared)throw new Error("no calculation prepared!");this.easystar.calculate()},e}(Phaser.Plugin);t.exports=d},/* 357 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(95),c=(a(u),i(134)),d=a(c),p=function(t){function e(t,i,a,r){n(this,e);
// console.log(element);
var o=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i.x,i.y+i.height/2,i.properties.character));
// setSize(width, height, offsetX, offsetY)
switch(o.game=t,o.id=i.properties.id,o.name=i.properties.character,o.disableMovement=i.properties.disableMovement,o.player=a,o.level=r,o.health=100,o.radius=60,o.randomMovement=!0,o.anchor.setTo(.5),o.talkSwitch=!1,o.game.physics.enable(o),o.body.immovable=!0,o.body.drag.set(200),
// console.log(this);
o.talkSymbol=o.game.add.sprite(o.body.x+15,o.body.y-30,"characterTalk"),o.talkSymbol.smoothed=!1,o.talkSymbol.alpha=0,o.talkSymbol.animations.add("play"),o.talkSymbol.animations.play("play",2,!0),i.properties.character){case"priest":o.body.setSize(30,30,-3,20),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1),o.animations.add("walk_right",[4,5,6,7,8,9,10,11],19,!1),o.animations.add("walk_left",[12,13,14,15,16,17,18,19],19,!1),o.animations.add("walk_up",[20,21,22,23,24,25,26,27],19,!1),o.animations.add("walk_down",[28,29,30,31,32,33,34,35],19,!1);break;case"smith":o.body.setSize(40,30,-5,22),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1),o.animations.add("walk_right",[4,5,6,7,8,9,10,11],19,!1),o.animations.add("walk_left",[12,13,14,15,16,17,18,19],19,!1);break;case"botanist":o.body.setSize(25,25,0,30),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1);break;case"veteran":o.body.setSize(40,30,-5,22),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1),o.animations.add("walk_right",[4,5,6,7,8,9,10,11],19,!1),o.animations.add("walk_left",[12,13,14,15,16,17,18,19],19,!1),o.animations.add("walk_up",[20,21,22,23,24,25,26,27],19,!1),o.animations.add("walk_down",[28,29,30,31,32,33,34,35],19,!1);break;case"librarian":o.body.setSize(10,10,5,28),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1);break;case"woman1":"map3"==o.level.gameData.currentMap?(o.body.setSize(80,30,-30,20),o.talkSymbol.x=o.body.x+40,o.talkSymbol.y=o.body.y-1):o.body.setSize(30,30,-8,20),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1),o.animations.add("walk_right",[4,5,6,7,8,9,10,11],19,!1),o.animations.add("walk_left",[12,13,14,15,16,17,18,19],19,!1),o.animations.add("walk_up",[20,21,22,23,24,25,26,27],19,!1),o.animations.add("walk_down",[28,29,30,31,32,33,34,35],19,!1);break;case"woman2":o.body.setSize(30,30,-8,20),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1);
// this.animations.add('walk_right', [4, 5, 6, 7, 8, 9, 10, 11], 19, false);
// this.animations.add('walk_left', [12, 13, 14, 15, 16, 17, 18, 19], 19, false);
break;case"girl1":o.body.setSize(25,25,-5,18),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("right",[2],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("walk_right",[4,5,6,7,8,9,10,11],19,!1),o.animations.add("walk_left",[12,13,14,15,16,17,18,19],19,!1);
// this.animations.play('walk_right');
break;case"girl2":o.body.setSize(25,25,-5,18),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1);break;case"girl3":o.body.setSize(25,25,-5,18),o.animations.add("down",[0],1,!1),o.animations.add("up",[1],1,!1),o.animations.add("left",[3],1,!1),o.animations.add("right",[2],1,!1),o.animations.add("walk_right",[4,5,6,7,8,9,10,11],19,!1),o.animations.add("walk_left",[12,13,14,15,16,17,18,19],19,!1);break;case"fisher":o.body.setSize(10,10,25,25),o.animations.add("down",[0],1,!1),o.animations.add("up",[0],1,!1),o.animations.add("left",[0],1,!1),o.animations.add("right",[0],1,!1),
// Length, xAnchor, yAnchor
o.fishingLine(120,o.x-22,o.y-18);break;case"oracle":o.animations.add("down",[0],1,!1),o.animations.add("up",[0],1,!1),o.animations.add("left",[0],1,!1),o.animations.add("right",[0],1,!1),o.radius=150,o.body.setSize(40,-20,100,60),o.talkSymbol.x=o.body.x+10,o.talkSymbol.y=o.body.y-1;
// this.floatTween = this.game.add
// 	.tween(this)
// 	.to({
// 		y: this.y - 2
// 	}, 2000, 'Linear', true, 0, 0, true)
// 	.loop();
break;default:o.body.setSize(10,15,0,0)}return o.movementX=o.x+100,o.movementY=o.y+100,o.runIdleLoop(),t.add.existing(o),o}return r(e,t),o(e,[{key:"runIdleLoop",value:function(){var t=this;void 0!==this.disableMovement&&this.disableMovement||(this.idleLoop=this.game.time.events.loop(this.game.rnd.integerInRange(4e3,8e3),function(){t.randomDirection()},this))}},{key:"stopIdleLoop",value:function(){this.game.time.events.remove(this.idleLoop)}},{key:"fishingLine",value:function(t,e,i){this.game.physics.startSystem(h.default.Physics.P2JS),this.game.physics.p2.gravity.y=600;for(var a,n,s=0;s<=t;s++){var r=e,o=i+4*s;//  Every new rect is positioned below the last
s%2==0?(
//  Add sprite (and switch frame every 2nd time)
n=this.game.add.sprite(r,o,"fishingLineChain",1),n.smoothed=!1):(n=this.game.add.sprite(r,o,"fishingLineChain",0),n.smoothed=!1,a.bringToTop()),
//  Enable physicsbody
this.game.physics.p2.enable(n,!1),
//  Set custom rectangle
n.body.setRectangle(8,4),0===s?n.body.static=!0:(
//  Anchor the first one created
n.body.velocity.x=50,//  Give it a push :) just for fun
n.body.mass=t/s),
//  After the first rectangle is created we can add the constraint
a&&this.game.physics.p2.createRevoluteConstraint(n,[0,-1],a,[0,1],2e4),a=n}}},{key:"talk",value:function(){var t=this;if(!this.talkSwitch){this.talkSwitch=!0,this.stopIdleLoop(),this.player.talking=!0,this.player.turnPlayer(this);var e=this.game.physics.arcade.angleToXY(this,this.player.x,this.player.y);e>-2.5&&e<-.5?this.animations.play("up"):e>1&&e<2.5?this.animations.play("down"):e>-.5&&e<1?this.animations.play("right"):(e>2.5||e<-2.5)&&this.animations.play("left");
// let playerValue = this.game.physics.arcade.angleToXY(this.player, this.x, this.y);
// if ((playerValue > -2.5 && playerValue < -0.5)) {
// 	console.log('up');
// 	this.level.GUICLASS.direction = 'up';
// 	this.player.animations.play('up');
// } else if (playerValue > 1 && playerValue < 2.5) {
// 	console.log('down');
// 	this.level.GUICLASS.direction = 'down';
// 	this.player.animations.play('down');
// } else if (playerValue > -0.5 && playerValue < 1) {
// 	console.log('right');
// 	this.level.GUICLASS.direction = 'right';
// 	this.player.animations.play('right');
// } else if (playerValue > 2.5 || playerValue < -2.5) {
// 	console.log('left');
// 	this.level.GUICLASS.direction = 'left';
// 	this.player.animations.play('left');
// }
// Check if name is in quest, if true -> get dialogueID
var i=this.level.questManager.checkQuestDialogue(this.name),a=i[0],n=i[1],s=i[2];
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// this.voice.allowMultiple = true;
switch(console.log(i,a,n),void 0!==n&&!1!==n&&(this.level.questManager.checkIfQuestWasDone(n)?a=!1:this.level.questManager.addQuest(n)),void 0!==s&&!1!==s&&this.level.questManager.removeQuest(s),this.name){case"priest":this.rndVoice=this.game.rnd.pick(["vx1","vx2","vx3"]),this.voice=this.game.add.audioSprite("VxPriest"),this.voice.play(this.rndVoice,2);break;case"smith":this.rndVoice=this.game.rnd.pick(["vx1","vx2","vx3","vx4","vx5"]),this.voice=this.game.add.audioSprite("VxSmith"),this.voice.play(this.rndVoice,1);break;case"botanist":this.rndVoice=this.game.rnd.pick(["vx1","vx2","vx3","vx4","vx5"]),this.voice=this.game.add.audioSprite("VxBotanic"),this.voice.play(this.rndVoice,.4);break;case"oracle":this.rndVoice=this.game.rnd.pick(["vx1","vx2","vx3","vx4","vx5","vx6","vx7","vx8","vx9","vx10"]),this.voice=this.game.add.audioSprite("VxOracle"),this.voice.play(this.rndVoice,.4)}
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// If there's a number
if(void 0!==a&&!1!==a){
// search for dialogue
for(var r=Object.values(d.default.dialogues),o=0;o<r.length;o++)if(o+1==a){var l=r[o];this.level.GUICLASS.createMessage(l,!1,!0);break}}else{var h=void 0;switch(this.name){case"priest":h=10;break;case"smith":h=4;break;case"botanist":h=1;break;case"veteran":h=2;break;case"librarian":h=3;break;case"woman1":h=6;break;case"woman2":h=9;break;case"girl1":h=8;break;case"girl2":h=7;break;case"girl3":h=5;break;case"fisher":h=41;break;case"oracle":h=32}
// search for dialogue
for(var u=Object.values(d.default.dialogues),c=0;c<u.length;c++)if(c+1==h){var p=u[c];
// this.animations.play('down');
// this.game.time.events.remove(character.idleLoop);
this.level.GUICLASS.createMessage(p,!1,!0);break}this.game.time.events.add(5e3,function(){t.game.time.events.remove(t.vxLoop),t.talkSwitch=!1,t.runIdleLoop()})}}}},{key:"randomDirection",value:function(){var t=this;switch(this.game.rnd.integerInRange(0,3)){case 0:if(void 0!==this.animations._anims.walk_down){var e=this.game.time.events.loop(1,function(){t.animations.play("walk_down"),t.body.velocity.y=30},this);this.body.onCollide=new h.default.Signal,this.body.onCollide.add(function(){t.game.time.events.remove(e),t.animations.play("down")},this),this.game.time.events.add(1e3,function(){t.game.time.events.remove(e),t.animations.play("down")})}else this.animations.play("down");break;case 1:if(void 0!==this.animations._anims.walk_up){var e=this.game.time.events.loop(1,function(){t.animations.play("walk_up"),t.body.velocity.y=-30},this);this.body.onCollide=new h.default.Signal,this.body.onCollide.add(function(){t.game.time.events.remove(e),t.animations.play("up")},this),this.game.time.events.add(1e3,function(){t.game.time.events.remove(e),t.animations.play("up")})}else this.animations.play("up");break;case 2:if(void 0!==this.animations._anims.walk_right){var i=this.game.time.events.loop(1,function(){t.animations.play("walk_left"),t.body.velocity.x=-30},this);this.body.onCollide=new h.default.Signal,this.body.onCollide.add(function(){t.game.time.events.remove(i),t.animations.play("left")},this),this.game.time.events.add(1e3,function(){t.game.time.events.remove(i),t.animations.play("left")})}else this.animations.play("left");break;case 3:if(void 0!==this.animations._anims.walk_right){var a=this.game.time.events.loop(1,function(){t.animations.play("walk_right"),t.body.velocity.x=30},this);this.body.onCollide=new h.default.Signal,this.body.onCollide.add(function(){t.game.time.events.remove(a),t.animations.play("right")},this),this.game.time.events.add(1e3,function(){t.game.time.events.remove(a),t.animations.play("right")})}else this.animations.play("right");break;default:this.animations.play("down")}}},{key:"update",value:function(){if(this.game.physics.arcade.distanceBetween(this,this.player)<this.radius){if(this.player.talking)return void(this.talkSymbol.alpha=0);if(this.level.GUICLASS.ingameMenu.show)return;this.game.world.bringToTop(this.talkSymbol),
// this.game.world.setChildIndex(this.talkSymbol, 30);
"oracle"==this.name?(this.talkSymbol.x=this.x+6,this.talkSymbol.y=this.y-60):(this.talkSymbol.x=this.x+3,this.talkSymbol.y=this.y-30),this.talkSymbol.alpha=1,
// On E-click
this.level.inputClass.button_E.isDown&&this.talk()}else this.talkSymbol.alpha=0;2==Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y))&&this.y>this.player.body.y&&this.game.world.moveUp(this),this.game.physics.arcade.collide(this,this.level.collisionLayer)}}]),e}(h.default.Sprite);e.default=p},/* 358 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=a(r),l=i(22),h=a(l),u=function(){function t(e,i,a,s){n(this,t),this.game=e,this.level=a,this.currentWeather=i,this.backgroundLayer=s,this.enableStorm=!0,this.isSafari=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"),this.manager=this.game.plugins.add(o.default.ParticleStorm),h.default.weather&&this.createWeather(i)}return s(t,[{key:"createWeather",value:function(t){switch(t){case"Snow":this.addSnow();break;case"TempleFlies":this.addTempleFlies();break;case"Storm":this.addStorm();break;case"SnowWind":this.addSnowWind();break;case"Leaves":this.addWindLeaves();break;case"NiceWeather":
// this.addSun();
break;case"Village":this.addVillageGlimmer();break;case"AutumnGlimmer":this.addAutumnGlimmer()}}},{key:"addSnow",value:function(){var t=this.game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-10,t.makeParticles("snow"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(0,.1),t.minRotation=0,t.maxRotation=0,t.start(!1,4600,5,0)}},{key:"addVillageGlimmer",value:function(){this.addVillageGlimmer=this.game.add.emitter(700,640,600),this.addVillageGlimmer.width=this.game.world.bounds.width,this.addVillageGlimmer.height=this.game.world.bounds.height,this.addVillageGlimmer.minParticleScale=5,this.addVillageGlimmer.gravity=0,this.addVillageGlimmer.setYSpeed(-4,4),this.addVillageGlimmer.setXSpeed(-4,4),this.addVillageGlimmer.maxRotation=0,this.addVillageGlimmer.minRotation=0,this.addVillageGlimmer.setAlpha(0,1,5e3,o.default.Easing.Exponential.In,!0),this.addVillageGlimmer.makeParticles("particle"),this.addVillageGlimmer.start(!1,1e4,5,0)}},{key:"addTempleFlies",value:function(){console.log("Testweather"),this.templeFliesEmitter=this.game.add.emitter(this.game.camera.width/2,1100,100),
// emitter.fixedToCamera = true;
this.templeFliesEmitter.width=2*this.game.camera.width,this.templeFliesEmitter.height=this.game.camera.height,this.templeFliesEmitter.angle=-10,this.templeFliesEmitter.minParticleScale=.1,this.templeFliesEmitter.maxParticleScale=.5,
// emitter.maxParticleSpeed.setTo(2, 2);
this.templeFliesEmitter.setYSpeed(5,10),this.templeFliesEmitter.setXSpeed(20,-20),this.templeFliesEmitter.gravity=.5,this.templeFliesEmitter.minRotation=0,this.templeFliesEmitter.maxRotation=0,this.templeFliesEmitter.setAlpha(.7,1,1e3,o.default.Easing.Exponential.In,!0),this.templeFliesEmitter.makeParticles("fly"),this.templeFliesEmitter.start(!1,1e4,5,0)}},{key:"addStorm",value:function(){this.backgroundLayer.tint=3158064;
// (x, y, maxParticles)
var t=this.game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-30,t.makeParticles("rain"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(200,310),t.setXSpeed(-5,5),t.minRotation=180,t.maxRotation=0,t.gravity=200,
// (explode, lifespan, frequency, quantity)
t.start(!1,2500,1,0),this.lightningBitmap=this.game.add.bitmapData(window.innerWidth,window.innerHeight+500),this.lightning=this.game.add.image(this.game.camera.width/2,0,this.lightningBitmap),this.lightning.anchor.setTo(.5,.5);var e=this.game.rnd.integerInRange(10,18);this.game.time.events.loop(o.default.Timer.SECOND*e,this.zap,this),this.isSafari||
// this.addWindLeaves();
this.addClouds()}},{key:"addWindLeaves",value:function(){this.autumnGlimmerEmitter=this.game.add.emitter(-500,0,50),this.autumnGlimmerEmitter.fixedToCamera=!0,this.autumnGlimmerEmitter.width=this.game.world.bounds.width,this.autumnGlimmerEmitter.height=this.game.world.bounds.height,this.autumnGlimmerEmitter.minParticleScale=.1,this.autumnGlimmerEmitter.maxParticleScale=.5,this.autumnGlimmerEmitter.setScale(-2,2,1,1,3e3,o.default.Easing.Sinusoidal.InOut,!0),this.autumnGlimmerEmitter.setYSpeed(200),this.autumnGlimmerEmitter.setXSpeed(-200,200),this.autumnGlimmerEmitter.minParticleScale=.25,this.autumnGlimmerEmitter.maxParticleScale=1,this.autumnGlimmerEmitter.gravity=.5,this.autumnGlimmerEmitter.minRotation=25,this.autumnGlimmerEmitter.setAlpha(.5,1),this.autumnGlimmerEmitter.makeParticles("glimmerParticle"),this.autumnGlimmerEmitter.start(!1,5e3,5,0)}},{key:"zap",value:function(){this.enableStorm&&(this.lightningBitmap.x=this.game.camera.x,this.lightningBitmap.y=this.game.camera.y,this.lightning.x=this.game.camera.x,this.lightning.y=this.game.camera.y,this.createLightningTexture(this.game.rnd.integerInRange(this.game.camera.x,this.game.camera.x+this.game.camera.width),0,45,3,!1),this.lightning.alpha=1,this.game.add.tween(this.lightning).to({alpha:.5},100,o.default.Easing.Bounce.Out).to({alpha:1},100,o.default.Easing.Bounce.Out).to({alpha:.5},100,o.default.Easing.Bounce.Out).to({alpha:1},100,o.default.Easing.Bounce.Out).to({alpha:0},250,o.default.Easing.Cubic.In).start(),this.game.camera.flash(16777215,450),this.level.dayCycleClass.night&&(this.game.add.tween(this.level.dayCycleClass.lightSprite).to({alpha:0},250,o.default.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.clouds).to({alpha:100},250,o.default.Easing.Linear.None,!0,0,0,!0)),this.strike=this.game.rnd.pick(["hit1","hit2","hit3","hit4","hit5"]),this.thunderstrike=this.game.add.audioSprite("AxThunderstrike"),this.thunderstrike.allowMultiple=!0,this.thunderstrike.play(this.strike,.2),this.game.camera.shake(.005,500))}},{key:"createLightningTexture",value:function(t,e,i,a,n){var s=this.lightningBitmap.context,r=this.lightningBitmap.width,o=this.lightningBitmap.height;n||s.clearRect(0,0,r,o);for(var l=0;l<i&&(s.strokeStyle="rgb(255, 255, 255)",s.lineWidth=a,s.beginPath(),s.moveTo(t,e),t+=n?this.game.rnd.integerInRange(-10,10):this.game.rnd.integerInRange(-30,30),t<=10&&(t=10),t>=r-10&&(t=r-10),e+=n?this.game.rnd.integerInRange(10,20):this.game.rnd.integerInRange(20,o/i),(!n&&l==i-1||e>o)&&(e=o),s.lineTo(t,e),s.stroke(),!(e>=o));l++)n||100*Math.random()<=20&&this.createLightningTexture(t,e,10,1,!0);this.lightningBitmap.dirty=!0}},{key:"addFog",value:function(){var t=this.game.add.bitmapData(this.game.width,this.game.height);t.ctx.rect(0,0,this.game.width,this.game.height),t.ctx.fillStyle="#000000",t.ctx.fill(),this.fogSprite=this.game.add.sprite(0,0,t),this.fogSprite.fixedToCamera=!0,this.fogSprite.alpha=.6,this.game.add.tween(this.fogSprite).to({alpha:.4},1e4,null,!0,0,0,!0)}},{key:"addClouds",value:function(){var t=this;this.clouds=this.game.add.group(),this.clouds.createMultiple(20,"cloud",0,!0),this.clouds.forEach(function(e){
// cloud.scale.set(this.game.rnd.realInRange(2, 8));
e.scale.set(2),e.x=t.game.world.randomX,e.y=t.game.world.randomY}),this.game.add.tween(this.clouds.scale).to({x:2,y:2},6e4,"Linear",!0,0,0,!0).loop(!0)}},{key:"addSnowWind",value:function(){}},{key:"updateWeather",value:function(){this.lightning&&this.game.world.bringToTop(this.lightning),"Village"==this.currentWeather&&this.game.world.bringToTop(this.addVillageGlimmer)}}]),t}();e.default=u},/* 359 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=a(r),l=i(22),h=a(l),u=function(){function t(e,i){n(this,t),this.game=e,void 0!==i&&(this.level=i,this.player=this.level.player),this.pad1,this.gamepadSupport=!1,this.useMobileControl=!1,this.walkSwitch=!0,this.disableAttack=!1,this.dash=!1,this.aiming=!1,this.movableSwitch=!0,
// this.loop = false;
this.movementloop=null,this.collision=!1,this.muteAttack=!1,this.running=!1,this.playerSpeed=120,this.playerSpeedDefault=120,this.playerControllerSpeed=100,this.playerControllerSpeedDefault=100,this.gamePadLoopIdleTime=10,this.gamePadLoopIdleWaitTime=200,this.directon="down",this.standing=!0,this.currentAttack=!1,this.movementloopSpeedDefault=290,this.movementloopSpeed=290,this.loopFrequency=50,this.timerMS=150,this.movementSound=this.level.map.plus.properties.ground,this.pyfootsteps=this.game.add.audioSprite("PxFootsteps"),this.pyfootsteps.allowMultiple=!1,this.voiceSword=this.game.add.audioSprite("sfxswordmulti"),
// this.game.input.gamepad.start();
// this.pad1 = this.game.input.gamepad.pad1;
this.checkController()}return s(t,[{key:"showMessage",value:function(t,e){e?console.log("%c "+t+" ","background: #f00; color: #fff"):console.log("%c "+t+" ","background: #222; color: #bada55")}},{key:"checkController",value:function(){
// If gamepad.supported and gamepad.active
this.game.input.gamepad.supported&&this.game.input.gamepad.active?(this.gamepadSupport=!0,this.pad1=this.game.input.gamepad.pad1,console.log(this.pad1),
// If pad1 is connected
this.pad1.connected?(this.showMessage("Controller 1 connected 🎮"),this.noControllerConnected=!1,this.useController()):(this.showMessage("No Controller connected",!0),this.noControllerConnected=!0,this.isMobileDevice()||h.default.forceMobile?(console.log("Use Mobile"),this.useMobileControl=!0,this.useMobile()):this.useKeyboard())):this.isMobileDevice()||h.default.forceMobile?(console.log("Use Mobile"),this.useMobileControl=!0,this.useMobile()):this.useKeyboard()}},{key:"useMobile",value:function(){this.stick&&this.stick.destroy(),this.pad&&this.pad.destroy(),this.pad=this.game.plugins.add(o.default.VirtualJoystick),
// console.log(this.pad);
// this.stick = this.pad.addDPad(0, 0, 200, 'dpad');
// this.stick.scale = 0.5;
// this.stick.alignBottomLeft(0);
// this.stick.showOnTouch = true;
// console.log(this.stick);
this.stick=this.pad.addStick(0,0,200,"generic"),this.stick.scale=.5,this.stick.alignBottomLeft(0),this.stick.showOnTouch=!0,this.buttonA=this.pad.addButton(0,0,"generic","button1-up","button1-down"),this.buttonA.scale=.5,this.buttonA.alignBottomRight(50),this.buttonA.onDown.add(this.beginnDash,this)}},{key:"isMobileDevice",value:function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"useKeyboard",value:function(){console.log("%c Use Keyboard! ","background: #222; color: #bada55"),this.addKeyboardKeys()}},{key:"useController",value:function(){console.log("%c Use Controller! ","background: #222; color: #bada55"),this.pad1.addCallbacks(this,{onConnect:this.addGamepadButtons()}),this.game.input.gamepad.setDeadZones(.5),this.game.input.gamepad.pad1.deadZone=.5,this.gamePadHelper=this.game.add.sprite(this.player.x,this.player.y,"gamePadHelper")}},{key:"addGamepadButtons",value:function(){this.pad1._rawPad.id.indexOf("360")&&(
// XBOX 360 Controller
// XYAB Buttons
this.gamepad_buttonA=this.pad1.getButton(o.default.Gamepad.XBOX360_A),this.gamepad_buttonB=this.pad1.getButton(o.default.Gamepad.XBOX360_B),this.gamepad_buttonX=this.pad1.getButton(o.default.Gamepad.XBOX360_X),this.gamepad_buttonY=this.pad1.getButton(o.default.Gamepad.XBOX360_Y),this.gamepad_buttonA.onDown.add(this.onGamepadDown,this),this.gamepad_buttonB.onDown.add(this.onGamepadDown,this),this.gamepad_buttonX.onDown.add(this.onGamepadDown,this),this.gamepad_buttonY.onDown.add(this.onGamepadDown,this),
// D-PAD Buttons
this.gamepad_buttonDPadLeft=this.pad1.getButton(o.default.Gamepad.XBOX360_DPAD_LEFT),this.gamepad_buttonDPadRight=this.pad1.getButton(o.default.Gamepad.XBOX360_DPAD_RIGHT),this.gamepad_buttonDPadUp=this.pad1.getButton(o.default.Gamepad.XBOX360_DPAD_UP),this.gamepad_buttonDPadDown=this.pad1.getButton(o.default.Gamepad.XBOX360_DPAD_DOWN),this.gamepad_buttonDPadLeft.onDown.add(this.level.GUICLASS.ingameMenu.mapLeft,this.level.GUICLASS.ingameMenu),this.gamepad_buttonDPadRight.onDown.add(this.level.GUICLASS.ingameMenu.mapRight,this.level.GUICLASS.ingameMenu),this.gamepad_buttonDPadUp.onDown.add(this.level.GUICLASS.ingameMenu.mapUp,this.level.GUICLASS.ingameMenu),this.gamepad_buttonDPadDown.onDown.add(this.level.GUICLASS.ingameMenu.mapDown,this.level.GUICLASS.ingameMenu),
// this.gamepad_buttonDPadLeft.onUp.add(this.onGamepadUp, this);
// this.gamepad_buttonDPadRight.onUp.add(this.onGamepadUp, this);
// this.gamepad_buttonDPadUp.onUp.add(this.onGamepadUp, this);
// this.gamepad_buttonDPadDown.onUp.add(this.onGamepadUp, this);
// LB and RB Buttons
this.gamepad_buttonLeftBumper=this.pad1.getButton(o.default.Gamepad.XBOX360_LEFT_BUMPER),this.gamepad_buttonRightBumper=this.pad1.getButton(o.default.Gamepad.XBOX360_RIGHT_BUMPER),this.gamepad_buttonLeftBumper.onDown.add(this.level.GUICLASS.ingameMenu.prev,this.level.GUICLASS.ingameMenu),this.gamepad_buttonRightBumper.onDown.add(this.level.GUICLASS.ingameMenu.next,this.level.GUICLASS.ingameMenu),
// LT and RT Buttons
this.gamepad_buttonLeftTrigger=this.pad1.getButton(o.default.Gamepad.XBOX360_LEFT_TRIGGER),this.gamepad_buttonRightTrigger=this.pad1.getButton(o.default.Gamepad.XBOX360_RIGHT_TRIGGER),this.gamepad_buttonLeftTrigger.onDown.add(this.onGamepadDown,this),this.gamepad_buttonRightTrigger.onDown.add(this.onGamepadDown,this),this.gamepad_buttonLeftTrigger.onDown.add(this.onGamepadDown,this),this.gamepad_buttonRightTrigger.onDown.add(this.onGamepadDown,this),
// Back and Start Buttons
this.gamepad_buttonBack=this.pad1.getButton(o.default.Gamepad.XBOX360_BACK),this.gamepad_buttonStart=this.pad1.getButton(o.default.Gamepad.XBOX360_START),this.gamepad_buttonBack.onDown.add(this.level.GUICLASS.ingameMenu.toggleMenu,this.level.GUICLASS.ingameMenu),this.gamepad_buttonStart.onDown.add(this.onGamepadDown,this))}},{key:"addKeyboardKeys",value:function(){this.cursors=this.game.input.keyboard.createCursorKeys(),this.button_W=this.game.input.keyboard.addKey(o.default.Keyboard.W),this.button_W.onDown.add(this.addMovementSound,this),this.button_W.onUp.add(this.removeMovementSound,this),this.button_S=this.game.input.keyboard.addKey(o.default.Keyboard.S),this.button_S.onDown.add(this.addMovementSound,this),this.button_S.onUp.add(this.removeMovementSound,this),this.button_A=this.game.input.keyboard.addKey(o.default.Keyboard.A),this.button_A.onDown.add(this.addMovementSound,this),this.button_A.onUp.add(this.removeMovementSound,this),this.button_D=this.game.input.keyboard.addKey(o.default.Keyboard.D),this.button_D.onDown.add(this.addMovementSound,this),this.button_D.onUp.add(this.removeMovementSound,this),
// this.button_F = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
// this.button_F.onDown.add(this.attack, this);
this.button_E=this.game.input.keyboard.addKey(o.default.Keyboard.E),
// this.button_E.onDown.add(this.attack, this);
this.button_SPACEBAR=this.game.input.keyboard.addKey(o.default.Keyboard.SPACEBAR),this.button_SPACEBAR.onDown.add(this.beginnDash,this),
// this.button_SHIFT = this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
// this.button_SHIFT.onDown.add(this.addRunning, this);
// this.button_SHIFT.onUp.add(this.removeRunning, this);
this.button_0=this.game.input.keyboard.addKey(o.default.Keyboard.P),this.button_0.onDown.add(this.resetLocalStorage,this),this.button_1=this.game.input.keyboard.addKey(o.default.Keyboard.ONE),this.button_1.onDown.add(this.numberKey,this),this.button_2=this.game.input.keyboard.addKey(o.default.Keyboard.TWO),this.button_2.onDown.add(this.numberKey,this),this.button_3=this.game.input.keyboard.addKey(o.default.Keyboard.THREE),this.button_3.onDown.add(this.numberKey,this),this.button_4=this.game.input.keyboard.addKey(o.default.Keyboard.FOUR),this.button_4.onDown.add(this.numberKey,this),this.button_5=this.game.input.keyboard.addKey(o.default.Keyboard.FIVE),this.button_5.onDown.add(this.numberKey,this),this.button_6=this.game.input.keyboard.addKey(o.default.Keyboard.SIX),this.button_6.onDown.add(this.numberKey,this),this.button_7=this.game.input.keyboard.addKey(o.default.Keyboard.SEVEN),this.button_7.onDown.add(this.numberKey,this),this.button_8=this.game.input.keyboard.addKey(o.default.Keyboard.EIGHT),this.button_8.onDown.add(this.numberKey,this),this.button_9=this.game.input.keyboard.addKey(o.default.Keyboard.NINE),this.button_9.onDown.add(this.numberKey,this),"undefined"!=typeof ipc?(this.button_ESC=this.game.input.keyboard.addKey(o.default.Keyboard.ESC),this.button_ESC.onDown.add(this.level.GUICLASS.ingameMenu.toggleMenu,this.level.GUICLASS.ingameMenu)):(this.button_TAB=this.game.input.keyboard.addKey(o.default.Keyboard.TAB),this.button_TAB.onDown.add(this.level.GUICLASS.ingameMenu.toggleMenu,this.level.GUICLASS.ingameMenu))}},{key:"addRunning",value:function(){this.running=!0,this.playerSpeed=100,this.playerSpeedDefault=100}},{key:"removeRunning",value:function(){this.running=!1,this.playerSpeed=40,this.playerSpeedDefault=40}},{key:"attack",value:function(){var t=this;switch(this.currentAttack=!0,this.direction){case"up":this.player.animations.play("fight_up"),this.player.weapon.fireAtXY(this.player.x,this.player.y-10),this.standing||(this.player.body.velocity.y=-200);break;case"down":this.player.weapon.fireAtXY(this.player.x,this.player.y+10),this.standing||(this.player.body.velocity.y=200);break;case"left":this.player.animations.play("fight_left"),this.player.weapon.fireAtXY(this.player.x-10,this.player.y),this.standing||(this.player.body.velocity.x=-200);break;case"right":this.player.animations.play("fight_right"),this.player.weapon.fireAtXY(this.player.x+10,this.player.y),this.standing||(this.player.body.velocity.x=200)}this.game.time.events.add(300,function(){t.currentAttack=!1},this),this.muteAttack||(this.rndVoiceSword=this.game.rnd.pick(["vx1","vx2"]),this.voiceSword=this.game.add.audioSprite("sfxswordmulti"),this.voiceSword.play(this.rndVoiceSword,.5))}},{key:"onGamepadDown",value:function(t){t.buttonCode===o.default.Gamepad.XBOX360_A&&this.beginnDash(),t.buttonCode===o.default.Gamepad.XBOX360_X&&this.attack(),6===t.buttonCode&&(this.aiming=!0),console.log(t)}},{key:"addMovementSound",value:function(){var t=this;!this.level.muteSound&&this.player.movable&&(this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown)&&null==this.movementloop&&(this.movementloop=this.game.time.events.loop(this.movementloopSpeed,function(){t.pyfootsteps.play(t.movementSound,.3)},this))}},{key:"removeMovementSound",value:function(){this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown||(this.game.time.events.remove(this.movementloop),this.movementloop=null)}},{key:"numberKey",value:function(t){if(void 0!=this.level&&h.default.allowFastTravel)switch(t.event.key){case"1":
// Start
this.level.gameData.currentMap="map1",this.level.gameData.targetID="1",this.level.gameData.direction="down",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"2":
// Forest1
this.level.gameData.currentMap="map10",this.level.gameData.targetID="1",this.level.gameData.direction="left",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"3":
// Forest2
this.level.gameData.currentMap="map11",this.level.gameData.targetID="1",this.level.gameData.direction="up",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"4":
// Village
this.level.gameData.currentMap="map2",this.level.gameData.targetID="1",this.level.gameData.direction="up",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"5":
// Village2
this.level.gameData.currentMap="map2",this.level.gameData.targetID="3",this.level.gameData.direction="down",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"6":
// Village
this.level.gameData.currentMap="map2",this.level.gameData.targetID="2",this.level.gameData.direction="up",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"7":
// Boss
this.level.gameData.currentMap="map9",this.level.gameData.targetID="1",this.level.gameData.direction="up",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"8":
// Temple Entrance
this.level.gameData.currentMap="map4",this.level.gameData.targetID="1",this.level.gameData.direction="up",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1);break;case"9":
// Temple Entrance
this.level.gameData.currentMap="map5",this.level.gameData.targetID="1",this.level.gameData.direction="up",this.level.safe.setGameConfig(this.level.gameData),this.game.state.restart(!0,!1)}}},{key:"resetLocalStorage",value:function(){this.level.GUICLASS.createNotification("saving","Reset Account!"),localStorage.clear(),this.game.musicPlayer.fadeOut(),
// this.game.time.events.add(Phaser.Timer.SECOND * 3, () => {
this.game.state.start("MainMenu",!0,!1)}},{key:"beginnDash",value:function(){var t=this;switch(
// if (this.level.GUICLASS.healthBar.dashRatio.value <= 0.1) return;
this.dash=!0,
// this.player.addParticles();
this.playerSpeed=250,this.playerControllerSpeed=250,this.dashSound=this.game.add.audio("sfxfalldown",.25),this.dashSound.play(),this.level.GUICLASS.healthBar.dash(),
// this.player.playDustAnimation();
// this.player.alpha = 0.5;
this.game.add.tween(this.player).to({alpha:.1},250,o.default.Easing.Elastic.Out,!0),this.direction){case"up":this.player.animations.play("dash_up");break;case"down":this.player.animations.play("dash_down");break;case"left":this.player.animations.play("dash_left");break;case"right":this.player.animations.play("dash_right")}
// this.dashTween = this.game.add
// 	.tween(this)
// 	.to({ playerSpeed: playerSpeed + 190 }, 200, Phaser.Easing.Exponential.In, true, 0, 0, true);
this.game.time.events.add(400,function(){
// Bugfix
switch(t.player.alpha=1,t.playerSpeed=t.playerSpeedDefault,t.playerControllerSpeed=t.playerControllerSpeedDefault,t.dash=!1,
// this.player.removeParticles();
t.game.add.tween(t.player).to({alpha:1},250,o.default.Easing.Elastic.Out,!0),t.direction){case"up":t.player.animations.play("walk_up",19,!0);break;case"down":t.player.animations.play("walk_down",19,!0);break;case"left":t.player.animations.play("walk_left",19,!0);break;case"right":t.player.animations.play("walk_right",19,!0)}})}},{key:"onGamepadUp",value:function(){}},{key:"gamepadUpdate",value:function(){var t=this;if(
// console.log(this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X), this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y));
this.pad1.axis(o.default.Gamepad.XBOX360_STICK_RIGHT_X)<-.1?this.gamePadHelper.x=this.player.x-20:this.pad1.axis(o.default.Gamepad.XBOX360_STICK_RIGHT_X)>.1&&(this.gamePadHelper.x=this.player.x+20),this.pad1.axis(o.default.Gamepad.XBOX360_STICK_RIGHT_Y)<-.1?this.gamePadHelper.y=this.player.y-20:this.pad1.axis(o.default.Gamepad.XBOX360_STICK_RIGHT_Y)>.1&&(this.gamePadHelper.y=this.player.y+20),this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_Y)<-.1){if(this.currentAttack)return;"left"==this.direction||"right"==this.direction?this.player.body.velocity.y=-this.playerControllerSpeed:(this.player.animations.play("run_up"),this.player.body.velocity.y=-this.playerControllerSpeed),this.direction="up"}else if(this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_Y)>.1){if(this.currentAttack)return;"left"==this.direction||"right"==this.direction?this.player.body.velocity.y=this.playerControllerSpeed:(this.player.animations.play("run_down"),this.player.body.velocity.y=this.playerControllerSpeed),this.direction="down"}else
// this.direction = '';
this.player.body.velocity.y=0;if(this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_X)<-.1){if(this.currentAttack)return;if("up"==this.direction||"down"==this.direction)this.player.body.velocity.x=-this.playerControllerSpeed;else{if(this.player.body.velocity.x=-this.playerControllerSpeed,this.dash)return;this.player.animations.play("run_left")}this.direction="left"}else if(this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_X)>.1){if(this.currentAttack)return;if("up"==this.direction||"down"==this.direction)this.player.body.velocity.x=this.playerControllerSpeed;else{if(this.player.body.velocity.x=this.playerControllerSpeed,this.dash)return;this.player.animations.play("run_right")}this.direction="right"}else
// this.direction = '';
this.player.body.velocity.x=0;if(0==this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_Y)&&0==this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_X)){if(this.dash)return;if(this.currentAttack)return;switch(this.direction){case"up":for(this.standing=!0;this.player.animations.currentFrame.index<24;)this.player.animations.next();if(this.player.animations.play("walk_up_idle"),this.collision)return;var e=this.game.time.events.loop(this.gamePadLoopIdleTime,function(){t.player.body.velocity.y=-t.playerSpeed},this);this.game.time.events.add(this.gamePadLoopIdleWaitTime,function(){t.game.time.events.remove(e),t.player.body.velocity.y=0,t.player.body.velocity.x=0,t.direction=""});break;case"down":for(this.standing=!0;this.player.animations.currentFrame.index<7;)this.player.animations.next();if(this.player.animations.play("walk_down_idle"),this.collision)return;var i=this.game.time.events.loop(this.gamePadLoopIdleTime,function(){t.player.body.velocity.y=t.playerSpeed},this);this.game.time.events.add(this.gamePadLoopIdleWaitTime,function(){t.game.time.events.remove(i),t.player.body.velocity.y=0,t.player.body.velocity.x=0,t.direction=""});break;case"left":if(this.standing=!0,this.player.animations.play("walk_left_idle"),this.collision)return;var a=this.game.time.events.loop(this.gamePadLoopIdleTime,function(){t.player.body.velocity.x=-t.playerSpeed},this);this.game.time.events.add(this.gamePadLoopIdleWaitTime,function(){t.game.time.events.remove(a),t.player.body.velocity.y=0,t.player.body.velocity.x=0,t.direction=""});break;case"right":if(this.standing=!0,this.player.animations.play("walk_right_idle",19,!1),this.collision)return;var n=this.game.time.events.loop(this.gamePadLoopIdleTime,function(){t.player.body.velocity.x=t.playerSpeed},this);this.game.time.events.add(this.gamePadLoopIdleWaitTime,function(){t.game.time.events.remove(n),t.player.body.velocity.y=0,t.player.body.velocity.x=0,t.direction=""})}}}},{key:"mobileUpdate",value:function(){if(this.stick.isDown){
// console.log(this.player.animations._anims.walk_down.speed)
// console.log(this.stick.force);
// if(this.game.input.pointer1.active && this.game.input.pointer2.active){
// 	console.log('2Finger');
// 	this.player.body.velocity.x = 200;
// }
if(console.log(this.stick.rotation),this.game.physics.arcade.velocityFromRotation(this.stick.rotation,this.stick.force*this.playerSpeed,this.player.body.velocity),
// this.player.rotation = this.stick.rotation;
this.player.animations._anims.walk_right.speed=19,this.player.animations._anims.walk_left.speed=19,this.player.animations._anims.walk_down.speed=19,this.player.animations._anims.walk_up.speed=19,
// console.log('HIER: ' + this.player.animations._anims.walk_down.speed * this.stick.force);
this.player.animations._anims.walk_down.speed=this.player.animations._anims.walk_down.speed*this.stick.force+.1,this.player.animations._anims.walk_up.speed=this.player.animations._anims.walk_up.speed*this.stick.force+.1,this.player.animations._anims.walk_right.speed=this.player.animations._anims.walk_right.speed*this.stick.force+.1,this.player.animations._anims.walk_left.speed=this.player.animations._anims.walk_left.speed*this.stick.force+.1,this.dash)return;this.stickRotation=this.stick.rotation.toFixed(1),this.stickRotation<=2&&this.stickRotation>=1?(console.log("Down"),this.player.animations.play("walk_down"),this.direction="down"):this.stickRotation>=-1&&this.stickRotation<=1?(console.log("Right"),this.player.animations.play("walk_right"),this.direction="right"):this.stickRotation<=-1&&this.stickRotation>=-2?(console.log("Up"),this.player.animations.play("walk_up"),this.direction="up"):(console.log("Left"),this.player.animations.play("walk_left"),this.direction="left")}else this.player.animations._anims.walk_right.speed=19,this.player.animations._anims.walk_left.speed=19,this.player.animations._anims.walk_down.speed=19,this.player.animations._anims.walk_up.speed=19,this.player.animations.stop(),this.player.body.velocity.set(0),
// this.player.body.velocity.set(0);
this.pyfootsteps.stop()}},{key:"keyboardUpdate",value:function(){var t=this;if(this.game.input.activePointer.rightButton.isDown&&(this.aiming=!0,this.player.weaponGun.fireAtPointer()),this.aiming){this.player.playerArm.visible=!0;var e=this.game.physics.arcade.angleToPointer(this.player);e>-2.5&&e<-.5?(this.player.animations.play("static_shoot_up"),this.direction="up",this.player.playerArm.x=this.player.x+2,this.player.playerArm.y=this.player.y+6):e>1&&e<2.5?(this.player.animations.play("static_shoot_down"),this.direction="down",this.player.playerArm.x=this.player.x-7,this.player.playerArm.y=this.player.y+6):e>-.5&&e<1?(this.player.animations.play("static_shoot_right"),this.direction="right",this.player.playerArm.x=this.player.x-3,this.player.playerArm.y=this.player.y+6):(e>2.5||e<-2.5)&&(this.player.animations.play("static_shoot_left"),this.direction="left",this.player.playerArm.x=this.player.x-5,this.player.playerArm.y=this.player.y+4),this.player.body.velocity.y=0,this.player.body.velocity.x=0,this.game.input.activePointer.rightButton.isDown&&this.player.weaponGun.fireAtPointer()}if(this.game.input.activePointer.leftButton.isDown&&!this.disableAttack){if(this.aiming=!1,this.player.playerArm.visible=!1,this.currentAttack)return;if(this.currentAttack=!0,
// let value = this.game.physics.arcade.angleToPointer(this.player);
// if ((value > -2.5 && value < -0.5)) {
// 	// this.player.animations.play('static_shoot_up');
// 	this.player.animations.play('fight_up', false);
// 	this.direction = 'up';
// } else if (value > 1 && value < 2.5) {
// 	this.player.animations.play('static_idle_down');
// 	this.direction = 'down';
// } else if (value > -0.5 && value < 1) {
// 	this.player.animations.play('fight_right', false);
// 	this.direction = 'right';
// 	// this.player.body.velocity.x = 70;
// } else if (value > 2.5 || value < -2.5) {
// 	this.player.animations.play('fight_left', false);
// 	this.direction = 'left';
// }
// this.game.physics.arcade.moveToPointer(this.player, 150);
// this.game.physics.arcade.accelerateToPointer(this.player, Phaser.Input.activePointer, 500, 500, 500)
// this.player.weapon.fireAtPointer();
// this.player.playDustAnimation();
this.attack(),this.game.time.events.add(300,function(){t.currentAttack=!1},this),this.muteAttack)return}
// If any Movementkey isDown
if(this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown){if(this.standing=!1,this.currentAttack)return;
// if (this.game.input.activePointer.leftButton.isDown || this.game.input.activePointer.leftButton.isDown) {
// 	this.player.body.velocity.y = 0;
// 	this.player.body.velocity.x = 0;
// 	return;
// }
// If Up-Button isDown
if(this.player.playerArm.visible=!1,this.aiming=!1,this.walkSwitch=!1,this.button_W.isDown){if(this.direction="up",this.button_A.isDown||this.button_D.isDown?this.player.body.velocity.y=-this.playerSpeed/1.3:this.player.body.velocity.y=-this.playerSpeed,!this.button_A.isDown&&!this.button_D.isDown){if(this.dash)return;this.running,this.player.animations.play("run_up")}}else if(this.button_S.isDown){if(this.direction="down",this.button_A.isDown||this.button_D.isDown?this.player.body.velocity.y=this.playerSpeed/1.3:this.player.body.velocity.y=this.playerSpeed,!this.button_A.isDown&&!this.button_D.isDown){if(this.dash)return;this.running,this.player.animations.play("run_down")}}else this.player.body.velocity.y=0;
// If Left-Button isDown
if(this.button_A.isDown)if(this.direction="left",this.button_W.isDown||this.button_S.isDown)this.player.body.velocity.x=-this.playerSpeed/1.3,this.player.animations.play("run_left");else{if(this.player.body.velocity.x=-this.playerSpeed,this.dash)return;this.running,this.player.animations.play("run_left")}else if(this.button_D.isDown)if(this.direction="right",this.button_W.isDown||this.button_S.isDown)this.player.body.velocity.x=this.playerSpeed/1.3,this.player.animations.play("run_right");else{if(this.player.body.velocity.x=this.playerSpeed,this.dash)return;this.running,this.player.animations.play("run_right")}else this.player.body.velocity.x=0}else{
// If no Movementkey isDown
// this.player.body.velocity.y = 0;
// this.player.body.velocity.x = 0;
if(this.dash)return;
// if (this.running) return;
if(this.walkSwitch)return;if(this.walkSwitch=!0,this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown)return;switch(this.standing=!0,this.direction){case"up":for(;this.player.animations.currentFrame.index<24;)this.player.animations.next();if(this.player.animations.play("walk_up_idle"),this.collision)return;var i=this.game.time.events.loop(this.loopFrequency,function(){t.player.body.velocity.y=-t.playerSpeed},this);this.game.time.events.add(this.timerMS,function(){t.game.time.events.remove(i)});break;case"down":for(;this.player.animations.currentFrame.index<7;)this.player.animations.next();if(this.player.animations.play("walk_down_idle"),this.collision)return;var a=this.game.time.events.loop(this.loopFrequency,function(){t.player.body.velocity.y=t.playerSpeed},this);this.game.time.events.add(this.timerMS,function(){t.game.time.events.remove(a)});break;case"left":if(this.player.animations.play("walk_left_idle"),this.collision)return;var n=this.game.time.events.loop(this.loopFrequency,function(){t.player.body.velocity.x=-t.playerSpeed},this);this.game.time.events.add(this.timerMS,function(){t.game.time.events.remove(n)});break;case"right":if(this.player.animations.play("walk_right_idle",19,!1),this.collision)return;var s=this.game.time.events.loop(this.loopFrequency,function(){t.player.body.velocity.x=t.playerSpeed},this);this.game.time.events.add(this.timerMS,function(){t.game.time.events.remove(s)})}}}},{key:"update",value:function(){var t=this;
// console.log("Y: " + this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y));
// console.log("X: " + this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X));
// If Player exists
if(this.player){
// Bugfix Talking Move
if(!this.player.movable)
// this.player.animations.stop();
return;
// If the Player should not walk
if(!this.player.movable){if(this.movableSwitch){switch(this.movableSwitch=!1,this.direction){case"up":this.player.animations.play("walk_up_idle");break;case"down":this.player.animations.play("walk_down_idle");break;case"left":this.player.animations.play("walk_left_idle");break;case"right":this.player.animations.play("walk_right_idle")}this.game.time.events.add(10*o.default.Timer.SECOND,function(){t.movableSwitch=!0})}return this.player.body.velocity.x=0,void(this.player.body.velocity.y=0)}void 0!==this.pad1&&this.pad1.connected?
//Gamepad Movement
this.gamepadUpdate():this.useMobileControl?
// Mobile Movement
this.mobileUpdate():
// Keyboard Movement
this.keyboardUpdate()}}}]),t}();e.default=u},/* 360 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(361),c=a(u),d=function(t){function e(t,i,a,r,o){n(this,e);var l=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,parseInt(i),parseInt(a),"chest"));
// this.anchor.setTo(0.5);
// this.scale.setTo(1.25);
// this.actionSymbol.animations.add('play');
// this.actionSymbol.animations.play('play', 2, true);
return l.game=t,l.id=r.id,l.level=o,l.action=!1,l.openSwitch=!1,l.disableActionSymbol=!1,l.properties=r,l.actionSymbol=l.game.add.sprite(l.x+22,l.y-8,"actionSymbol"),l.actionSymbol.smoothed=!1,l.actionSymbol.alpha=0,l.animations.add("open",[0,1,2,3,4],15,!1),l.animations.add("close",[4,3,2,1,0],15,!1),l.game.physics.enable(l),l.body.immovable=!0,l.body.setSize(14,20,8,15),l.chestSound=l.game.add.audioSprite("sfxChest"),l.game.add.existing(l),l}return r(e,t),o(e,[{key:"openChest",value:function(){for(var t=this.id,e=null,i=0;i<this.level.chests.length;i++){var a=this.level.chests[i];if(a.id==t){e=a;break}}var n=this.game.camera.x+this.game.camera.width/2,s=this.game.camera.y+this.game.camera.height/2;this.level.lockGame=new c.default(this.game,n,s,this.level.player,e,this.level,this.properties)}},{key:"closeChest",value:function(){if(this.action){this.chestSound.play("close",1);var t=this.id,e=null;this.action=!1,this.openSwitch=!1;for(var i=0;i<this.level.chests.length;i++){var a=this.level.chests[i];if(a.id==t){e=a;break}}e.animations.play("close")}}},{key:"update",value:function(){if(this.game.physics.arcade.collide(this,this.level.player),this.game.physics.arcade.distanceBetween(this,this.level.player)<40){if(this.action)return void(this.actionSymbol.alpha=0);
// On E-click
if(this.game.world.bringToTop(this.actionSymbol),this.actionSymbol.alpha=1,this.level.inputClass.button_E.isDown){if(this.openSwitch)return;this.openSwitch=!0,this.action=!0,this.openChest()}}else this.actionSymbol.alpha=0,this.closeChest();Math.ceil(this.game.physics.arcade.angleToXY(this.level.player,this.x,this.y))<0?
// this.game.world.moveUp(this);
this.game.world.setChildIndex(this,10):this.game.world.bringToTop(this)}}]),e}(h.default.Sprite);e.default=d},/* 361 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=a(r),l=i(362),h=a(l),u=function(){function t(e,i,a,s,r,o,l){n(this,t),this.game=e,this.x=i,this.y=a,this.player=s,this.chest=r,this.level=o,this.properties=l,this.successQuestID=this.properties.successQuestID,this.removeQuestID=this.properties.removeQuestID,this.ifQuestID=this.properties.ifQuestID,
// this.bgColors = [0x62bd18, 0xff5300, 0xd21034, 0xff475c, 0x8f16b2, 0x588c7e, 0x8c4646];
// this.tintColor = game.rnd.pick(this.bgColors);
this.rotationSpeed=3,this.maxAngleDifference=10,this.scaleRate=.25,this.dead=!1,this.run=!0,this.firstSetup=!0,this.currentTry=1,this.moving=!1,
// if(this.ifQuestID !== undefined && !this.level.questManager.checkIfQuestExists(this.ifQuestID)) return;
this.lockPickSound=this.game.add.audioSprite("sfxLockPick"),this.setupGame()}return s(t,[{key:"setupGame",value:function(){this.player.movable=!1,this.ring=this.game.add.sprite(this.x,this.y,"LockGameRing"),this.ring.anchor.set(.5),this.ring.smoothed=!1,
// this.ring.alpha = 0.5;
// this.ring.scale.set(this.scaleRate);
this.ball=this.game.add.sprite(this.x,this.y,"LockGameBall"),this.ball.anchor.set(.5),this.ball.ballAngle=-90,this.ball.smoothed=!1,
// this.ball.scale.set(this.scaleRate);
this.placeBall(),this.bar=this.game.add.sprite(this.x-12,this.y+23,"LockGameBar"),this.bar.anchor.set(0,.5),this.bar.angle=-90,this.bar.crossingBall=!1,this.bar.smoothed=!1,this.bar.rotationDirection=0,
// this.bar.scale.set(this.scaleRate);
this.firstTry=this.game.add.sprite(this.x-42,this.y+29,"LockGameBar"),this.firstTry.angle=-90,this.firstTry.anchor.set(.5),
// this.firstTry.ballAngle = -90;
// this.firstTry.scale.set(this.scaleRate);
this.secondTry=this.game.add.sprite(this.x-12,this.y+29,"LockGameBar"),this.secondTry.angle=-90,this.secondTry.anchor.set(.5),
// this.secondTry.ballAngle = -90;
// this.secondTry.scale.set(this.scaleRate);
this.thirdTry=this.game.add.sprite(this.x+18,this.y+29,"LockGameBar"),this.thirdTry.angle=-90,this.thirdTry.anchor.set(.5),
// this.thirdTry.ballAngle = -90;
// this.thirdTry.scale.set(this.scaleRate);
this.firstSetup&&(this.ring.alpha=0,this.ball.alpha=0,this.bar.alpha=0,this.firstTry.alpha=0,this.secondTry.alpha=0,this.thirdTry.alpha=0,this.game.add.tween(this.ring).to({alpha:.5},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.bar).to({alpha:.5},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.ball).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.firstTry).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.secondTry).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.thirdTry).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),
// this.game.add.tween(this.player).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
this.player.body.immovable=!0,this.firstSetup=!1)}},{key:"placeBall",value:function(){this.ball.x=100;do{this.newAngle=this.game.rnd.angle()}while(this.angleDifferenceFunc(this.newAngle,this.ball.ballAngle)<40);this.ball.ballAngle=this.newAngle,this.ball.x=this.ring.x+88*Math.cos(o.default.Math.degToRad(this.ball.ballAngle)),this.ball.y=this.ring.y+88*Math.sin(o.default.Math.degToRad(this.ball.ballAngle)),this.ball.rotation=this.game.physics.arcade.angleBetween(this.ball,this.ring)+1.5}},{key:"startMoving",value:function(){this.dead=!1,this.moving=!0,
// this.game.input.onDown.remove(this.startMoving, this);
// this.game.input.onDown.add(this.changeDirection, this);
this.bar.rotationDirection=1,this.lockPickSound.play("roll",2)}},{key:"changeDirection",value:function(){var t=this;if(this.angleDifference=Math.abs(this.ball.ballAngle-this.bar.angle),this.angleDifference>this.maxAngleDifference);else{switch(this.currentTry){case 1:this.lockPickSound.play("win"),this.firstTry.tint=65297,this.currentTry=2,this.rotationSpeed=4;break;case 2:this.lockPickSound.play("win"),this.secondTry.tint=65297,this.currentTry=3,this.rotationSpeed=5;break;case 3:this.thirdTry.tint=65297,this.run=!1,this.game.add.tween(this.ring).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.bar).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.ball).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.firstTry).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.secondTry).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.thirdTry).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),
// this.game.add.tween(this.player).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
this.player.body.immovable=!1,this.player.movable=!0,this.chest.animations.play("open"),this.lockPickSound.stop("roll"),this.chestSound=this.game.add.audioSprite("sfxChest"),this.chestSound.play("open",1),this.game.time.events.add(500,function(){t.energyStone=new h.default(t.game,t.chest.x+18,t.chest.y-15,t.level,t.chest)},this),void 0!==this.successQuestID&&this.level.questManager.addQuest(this.successQuestID),void 0!==this.removeQuestID&&this.level.questManager.removeQuest(this.removeQuestID)}this.bar.crossingBall=!1,this.bar.rotationDirection*=-1,this.placeBall()}}},{key:"update",value:function(){this.level.inputClass.button_E.isDown&&(
// if(this.ifQuestID !== undefined && !this.level.questManager.checkIfQuestExists(this.ifQuestID)) return;
this.moving&&!this.dead?this.changeDirection():this.startMoving()),this.run&&(this.bar.angle+=this.rotationSpeed*this.bar.rotationDirection,this.angleDifference=Math.abs(this.ball.ballAngle-this.bar.angle),this.angleDifference<this.maxAngleDifference&&!this.bar.crossingBall&&(this.bar.crossingBall=!0),this.angleDifference>this.maxAngleDifference&&this.bar.crossingBall&&this.fail())}},{key:"fail",value:function(){this.lockPickSound.stop("roll"),this.lockPickSound.play("break"),this.bar.rotationDirection=0,this.bar.tint=16711680,this.dead=!0,this.currentTry=1,this.rotationSpeed=3,this.game.camera.flash(16711680,200),void 0!==window.navigator.vibrate&&"vibrate"in window.navigator&&window.navigator.vibrate(500),this.bar.destroy(),this.ring.destroy(),this.ball.destroy(),this.firstTry.destroy(),this.secondTry.destroy(),this.thirdTry.destroy(),this.setupGame()}},{key:"angleDifferenceFunc",value:function(t,e){return Math.abs((t+180-e)%360-180)}}]),t}();e.default=u},/* 362 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r,o){a(this,e);var l=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,"energyStone"));
// setSize(width, height, offsetX, offsetY)
return l.game=t,l.level=r,l.chest=o,l.id=3,l.used=!1,l.anchor.setTo(.5),l.actionSymbol=l.game.add.sprite(l.x+5,l.y-15,"actionSymbol"),l.actionSymbol.smoothed=!1,l.actionSymbol.alpha=0,l.game.physics.enable(l),l.body.setSize(10,18,10,18),l.body.immovable=!0,l.alpha=0,l.game.add.existing(l),l.fadeIn(),l}return s(e,t),r(e,[{key:"fadeIn",value:function(){this.alphaTween=this.game.add.tween(this).to({alpha:1},500,l.default.Easing.Cubic.Out,!0),this.game.add.tween(this).to({y:this.y+5},1e3,"Linear",!0,0,0,!0).loop()}},{key:"update",value:function(){if(!this.used)
// this.game.world.bringToTop(this.itemEmitter);
if(this.chest.actionSymbol.alpha=0,
// this.game.physics.arcade.collide(this, this.level.player);
this.game.world.bringToTop(this),this.game.physics.arcade.distanceBetween(this,this.level.player)<50){if(this.action)return void(this.actionSymbol.alpha=0);
// On E-click
if(this.game.world.bringToTop(this.actionSymbol),this.actionSymbol.alpha=1,this.level.inputClass.button_E.isDown)
// if(this.openSwitch) return;
// this.openSwitch = true;
// this.action = true;
return this.actionSymbol.alpha=0,void this.level.player.collideWithItem(this.level.player,this)}else this.actionSymbol.alpha=0}}]),e}(l.default.Sprite);e.default=h},/* 363 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(22),o=a(r),l=i(364),h=a(l),u=function(){function t(e){n(this,t),this.game=e,this.secureLS=o.default.secureLS,this.ls=new h.default({encodingType:"aes"})}return s(t,[{key:"setGameConfig",value:function(t){this.secureLS?this.ls.set("playerData",JSON.stringify(t)):localStorage.setItem("playerData",JSON.stringify(t))}},{key:"getGameConfig",value:function(){if(this.secureLS)var t=this.ls.get("playerData"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("playerData"));if(null==e){var e={playerHealth:5,currentMap:o.default.startMap};return e}return e}},{key:"setItemIDs",value:function(t){this.secureLS?this.ls.set("itemIDs",JSON.stringify(t)):localStorage.setItem("itemIDs",JSON.stringify(t))}},{key:"getItemIDs",value:function(){if(this.secureLS)var t=this.ls.get("itemIDs"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("itemIDs"));if(null==e){var e=[];return e}return e}},{key:"setGamePreferences",value:function(t){this.secureLS?this.ls.set("gamePreferences",JSON.stringify(t)):localStorage.setItem("gamePreferences",JSON.stringify(t))}},{key:"getGamePreferences",value:function(){if(this.secureLS)var t=this.ls.get("gamePreferences"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("gamePreferences"));if(null==e){var e={muteMusic:!1,muteSound:!1};return e}return e}},{key:"setQuests",value:function(t){this.secureLS?this.ls.set("quests",JSON.stringify(t)):localStorage.setItem("quests",JSON.stringify(t))}},{key:"getQuests",value:function(){if(this.secureLS)var t=this.ls.get("quests"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("quests"));if(null==e){var e={masteredQuests:[]};return e}return e}},{key:"removeQuest",value:function(t){for(var e=this.getQuests(),i=0;i<e.length;i++)e[i][0]==t&&(e[i][1]="");this.setQuests(e)}},{key:"resetLocalStorage",value:function(){localStorage.clear()}},{key:"setDEVCoordinates",value:function(t){localStorage.setItem("devXY",JSON.stringify({x:parseInt(t.x),y:parseInt(t.y)}))}},{key:"getDEVCoordinates",value:function(){return JSON.parse(localStorage.getItem("devXY"))}}]),t}();e.default=u},/* 364 */
/***/
function(t,e,i){!function(e,i){t.exports=i()}(0,function(){/******/
/************************************************************************/
/******/
return function(t){// The require function
/******/
/******/
/******/
function e(a){/******/
/******/
// Check if module is in cache
/******/
if(i[a])/******/return i[a].exports;// Create a new module (and put it into the cache)
/******/
/******/
/******/
var n=i[a]={/******/
exports:{},/******/
id:a,/******/
loaded:!1};// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
/******/
/******/
return t[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}
// webpackBootstrap
/******/
// The module cache
/******/
var i={};// Load entry module and return exports
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// __webpack_public_path__
/******/
/******/
/******/
return e.m=t,e.c=i,e.p="",e(0)}([/* 0 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=a(r),l=i(2),h=a(l),u=i(8),c=a(u),d=i(9),p=a(d),f=i(10),m=a(f),g=i(11),y=a(g),v=i(16),b=a(v),w=i(17),S=a(w),x=i(18),k=a(x),P=function(){function t(e){n(this,t),e=e||{},this._name="secure-ls",this.utils=o.default,this.constants=h.default,this.Base64=p.default,this.LZString=m.default,this.AES=y.default,this.DES=b.default,this.RABBIT=S.default,this.RC4=k.default,this.enc=c.default,this.config={isCompression:!0,encodingType:h.default.EncrytionTypes.BASE64},this.config.isCompression=void 0===e.isCompression||e.isCompression,this.config.encodingType=void 0!==e.encodingType||""===e.encodingType?e.encodingType.toLowerCase():h.default.EncrytionTypes.BASE64,this.config.encryptionSecret=e.encryptionSecret,this.ls=localStorage,this.init()}return s(t,[{key:"init",value:function(){var t=this.getMetaData()||{};this.WarningEnum=this.constants.WarningEnum,this.WarningTypes=this.constants.WarningTypes,this.EncrytionTypes=this.constants.EncrytionTypes,this._isBase64=this._isBase64EncryptionType(),this._isAES=this._isAESEncryptionType(),this._isDES=this._isDESEncryptionType(),this._isRabbit=this._isRabbitEncryptionType(),this._isRC4=this._isRC4EncryptionType(),this._isCompression=this._isDataCompressionEnabled(),
// fill the already present keys to the list of keys being used by secure-ls
this.utils.allKeys=t.keys||this.resetAllKeys()}},{key:"_isBase64EncryptionType",value:function(){return p.default&&(void 0===this.config.encodingType||this.config.encodingType===this.constants.EncrytionTypes.BASE64)}},{key:"_isAESEncryptionType",value:function(){return y.default&&this.config.encodingType===this.constants.EncrytionTypes.AES}},{key:"_isDESEncryptionType",value:function(){return b.default&&this.config.encodingType===this.constants.EncrytionTypes.DES}},{key:"_isRabbitEncryptionType",value:function(){return S.default&&this.config.encodingType===this.constants.EncrytionTypes.RABBIT}},{key:"_isRC4EncryptionType",value:function(){return k.default&&this.config.encodingType===this.constants.EncrytionTypes.RC4}},{key:"_isDataCompressionEnabled",value:function(){return this.config.isCompression}},{key:"getEncyptionSecret",value:function(t){var e=this.getMetaData()||{},i=this.utils.getObjectFromKey(e.keys,t);i&&(this._isAES||this._isDES||this._isRabbit||this._isRC4)&&(void 0===this.config.encryptionSecret?(this.utils.encryptionSecret=i.s,this.utils.encryptionSecret||(this.utils.encryptionSecret=this.utils.generateSecretKey(),this.setMetaData())):this.utils.encryptionSecret=this.config.encryptionSecret||i.s||"")}},{key:"get",value:function(t,e){var i="",a="",n=void 0,s=void 0,r=void 0;if(!this.utils.is(t))return this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED),a;if(!(r=this.getDataFromLocalStorage(t)))return a;n=r,// saves else
(this._isCompression||e)&&(
// meta data always compressed
n=m.default.decompress(r)),i=n,// saves else
this._isBase64||e?
// meta data always Base64
i=p.default.decode(n):(this.getEncyptionSecret(t),this._isAES?s=y.default.decrypt(n.toString(),this.utils.encryptionSecret):this._isDES?s=b.default.decrypt(n.toString(),this.utils.encryptionSecret):this._isRabbit?s=S.default.decrypt(n.toString(),this.utils.encryptionSecret):this._isRC4&&(s=k.default.decrypt(n.toString(),this.utils.encryptionSecret)),s&&(i=s.toString(c.default._Utf8)));try{a=JSON.parse(i)}catch(t){throw new Error("Could not parse JSON")}return a}},{key:"getDataFromLocalStorage",value:function(t){return this.ls.getItem(t,!0)}},{key:"getAllKeys",value:function(){var t=this.getMetaData();return this.utils.extractKeyNames(t)||[]}},{key:"set",value:function(t,e){var i="";if(!this.utils.is(t))return void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED);this.getEncyptionSecret(t),
// add key(s) to Array if not already added, only for keys other than meta key
String(t)!==String(this.utils.metaKey)&&(this.utils.isKeyPresent(t)||(this.utils.addToKeysList(t),this.setMetaData())),i=this.processData(e),
// Store the data to localStorage
this.setDataToLocalStorage(t,i)}},{key:"setDataToLocalStorage",value:function(t,e){this.ls.setItem(t,e)}},{key:"remove",value:function(t){return this.utils.is(t)?t===this.utils.metaKey&&this.getAllKeys().length?void this.utils.warn(this.WarningEnum.META_KEY_REMOVE):(this.utils.isKeyPresent(t)&&(this.utils.removeFromKeysList(t),this.setMetaData()),void this.ls.removeItem(t)):void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED)}},{key:"removeAll",value:function(){var t=void 0,e=void 0;for(t=this.getAllKeys(),e=0;e<t.length;e++)this.ls.removeItem(t[e]);this.ls.removeItem(this.utils.metaKey),this.resetAllKeys()}},{key:"clear",value:function(){this.ls.clear(),this.resetAllKeys()}},{key:"resetAllKeys",value:function(){return this.utils.allKeys=[],[]}},{key:"processData",value:function(t,e){if(!t)return"";var i=void 0,a=void 0,n=void 0;try{i=JSON.stringify(t)}catch(t){throw new Error("Could not stringify data.")}
// Encode Based on encoding type
// If not set, default to Base64 for securing data
// Compress data if set to true
return a=i,this._isBase64||e?a=p.default.encode(i):(this._isAES?a=y.default.encrypt(i,this.utils.encryptionSecret):this._isDES?a=b.default.encrypt(i,this.utils.encryptionSecret):this._isRabbit?a=S.default.encrypt(i,this.utils.encryptionSecret):this._isRC4&&(a=k.default.encrypt(i,this.utils.encryptionSecret)),a=a&&a.toString()),n=a,(this._isCompression||e)&&(n=m.default.compress(a)),n}},{key:"setMetaData",value:function(){var t=this.processData({keys:this.utils.allKeys},!0);
// Store the data to localStorage
this.setDataToLocalStorage(this.utils.metaKey,t)}},{key:"getMetaData",value:function(){return this.get(this.utils.metaKey,!0)}}]),t}();e.default=P,t.exports=e.default},/* 1 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=i(2),s=a(n),r=i(3),o=a(r),l=i(4),h=a(l),u={metaKey:"_secure__ls__metadata",encryptionSecret:"",secretPhrase:"s3cr3t$#@135^&*246",allKeys:[],is:function(t){return!!t},warn:function(t){t=t||s.default.WarningEnum.DEFAULT_TEXT,console.warn(s.default.WarningTypes[t])},generateSecretKey:function(){var t=o.default.random(16),e=(0,h.default)(this.secretPhrase,t,{keySize:4});return e&&e.toString()},getObjectFromKey:function(t,e){if(!t||!t.length)return{};var i=void 0,a={};for(i=0;i<t.length;i++)if(t[i].k===e){a=t[i];break}return a},extractKeyNames:function(t){return t&&t.keys&&t.keys.length?t.keys.map(function(t){return t.k}):[]},getAllKeys:function(){return this.allKeys},isKeyPresent:function(t){for(var e=!1,i=0;i<this.allKeys.length;i++)if(String(this.allKeys[i].k)===String(t)){e=!0;// found
break}return e},addToKeysList:function(t){this.allKeys.push({k:t,s:this.encryptionSecret})},removeFromKeysList:function(t){var e=void 0,i=-1;for(e=0;e<this.allKeys.length;e++)if(this.allKeys[e].k===t){i=e;break}return-1!==i&&this.allKeys.splice(i,1),i}};t.exports=u},/* 2 */
/***/
function(t,e){"use strict";var i={KEY_NOT_PROVIDED:"keyNotProvided",META_KEY_REMOVE:"metaKeyRemove",DEFAULT_TEXT:"defaultText"},a={};a[i.KEY_NOT_PROVIDED]="Secure LS: Key not provided. Aborting operation!",a[i.META_KEY_REMOVE]="Secure LS: Meta key can not be removed\nunless all keys created by Secure LS are removed!",a[i.DEFAULT_TEXT]="Unexpected output";var n={WarningEnum:i,WarningTypes:a,EncrytionTypes:{BASE64:"base64",AES:"aes",DES:"des",RABBIT:"rabbit",RC4:"rc4"}};t.exports=n},/* 3 */
/***/
function(t,e){"use strict";/*
	 ES6 compatible port of CryptoJS - WordArray for PBKDF2 password key generation
	
	 Source: https://github.com/brix/crypto-js
	 LICENSE: MIT
	 */
var i={};i.random=function(t){for(var e,i=[],a=0;a<t;a+=4){var n=function(t){var e=987654321,i=4294967295;return function(){e=36969*(65535&e)+(e>>16)&i,t=18e3*(65535&t)+(t>>16)&i;var a=(e<<16)+t&i;return a/=4294967296,(a+=.5)*(Math.random()>.5?1:-1)}}(4294967296*(e||Math.random()));e=987654071*n(),i.push(4294967296*n()|0)}return new this.Set(i,t)},i.Set=function(t,e){t=this.words=t||[],this.sigBytes=void 0!==e?e:8*t.length},t.exports=i},/* 4 */
/***/
function(t,e,i){!function(a,n,s){
// CommonJS
t.exports=e=n(i(5),i(6),i(7))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,a=i.Base,n=i.WordArray,s=e.algo,r=s.SHA1,o=s.HMAC,l=s.PBKDF2=a.extend({/**
							 * Configuration options.
							 *
							 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
							 * @property {Hasher} hasher The hasher to use. Default: SHA1
							 * @property {number} iterations The number of iterations to perform. Default: 1
							 */
cfg:a.extend({keySize:4,hasher:r,iterations:1}),/**
							 * Initializes a newly created key derivation function.
							 *
							 * @param {Object} cfg (Optional) The configuration options to use for the derivation.
							 *
							 * @example
							 *
							 *     var kdf = CryptoJS.algo.PBKDF2.create();
							 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
							 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
							 */
init:function(t){this.cfg=this.cfg.extend(t)},/**
							 * Computes the Password-Based Key Derivation Function 2.
							 *
							 * @param {WordArray|string} password The password.
							 * @param {WordArray|string} salt A salt.
							 *
							 * @return {WordArray} The derived key.
							 *
							 * @example
							 *
							 *     var key = kdf.compute(password, salt);
							 */
compute:function(t,e){
// Generate key
for(
// Shortcut
var i=this.cfg,a=o.create(i.hasher,t),s=n.create(),r=n.create([1]),l=s.words,h=r.words,u=i.keySize,c=i.iterations;l.length<u;){var d=a.update(e).finalize(r);a.reset();for(var p=d.words,f=p.length,m=d,g=1;g<c;g++){m=a.finalize(m),a.reset();
// XOR intermediate with block
for(var y=m.words,v=0;v<f;v++)p[v]^=y[v]}s.concat(d),h[0]++}return s.sigBytes=4*u,s}});/**
						 * Computes the Password-Based Key Derivation Function 2.
						 *
						 * @param {WordArray|string} password The password.
						 * @param {WordArray|string} salt A salt.
						 * @param {Object} cfg (Optional) The configuration options to use for this computation.
						 *
						 * @return {WordArray} The derived key.
						 *
						 * @static
						 *
						 * @example
						 *
						 *     var key = CryptoJS.PBKDF2(password, salt);
						 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
						 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
						 */
e.PBKDF2=function(t,e,i){return l.create(i).compute(t,e)}}(),t.PBKDF2})},/* 5 */
/***/
function(t,e,i){!function(i,a){
// CommonJS
t.exports=e=a()}(0,function(){/**
					 * CryptoJS core components.
					 */
var t=t||function(t,e){/**
							 * CryptoJS namespace.
							 */
var i={},a=i.lib={},n=a.Base=function(){function t(){}return{/**
									 * Creates a new object that inherits from this object.
									 *
									 * @param {Object} overrides Properties to copy into the new object.
									 *
									 * @return {Object} The new object.
									 *
									 * @static
									 *
									 * @example
									 *
									 *     var MyType = CryptoJS.lib.Base.extend({
									 *         field: 'value',
									 *
									 *         method: function () {
									 *         }
									 *     });
									 */
extend:function(e){
// Spawn
t.prototype=this;var i=new t;
// Augment
// Create default initializer
// Initializer's prototype is the subtype object
// Reference supertype
return e&&i.mixIn(e),i.hasOwnProperty("init")||(i.init=function(){i.$super.init.apply(this,arguments)}),i.init.prototype=i,i.$super=this,i},/**
									 * Extends this object and runs the init method.
									 * Arguments to create() will be passed to init().
									 *
									 * @return {Object} The new object.
									 *
									 * @static
									 *
									 * @example
									 *
									 *     var instance = MyType.create();
									 */
create:function(){var t=this.extend();return t.init.apply(t,arguments),t},/**
									 * Initializes a newly created object.
									 * Override this method to add some logic when your objects are created.
									 *
									 * @example
									 *
									 *     var MyType = CryptoJS.lib.Base.extend({
									 *         init: function () {
									 *             // ...
									 *         }
									 *     });
									 */
init:function(){},/**
									 * Copies properties into this object.
									 *
									 * @param {Object} properties The properties to mix in.
									 *
									 * @example
									 *
									 *     MyType.mixIn({
									 *         field: 'value'
									 *     });
									 */
mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);
// IE won't copy toString using the loop above
t.hasOwnProperty("toString")&&(this.toString=t.toString)},/**
									 * Creates a copy of this object.
									 *
									 * @return {Object} The clone.
									 *
									 * @example
									 *
									 *     var clone = instance.clone();
									 */
clone:function(){return this.init.prototype.extend(this)}}}(),s=a.WordArray=n.extend({/**
								 * Initializes a newly created word array.
								 *
								 * @param {Array} words (Optional) An array of 32-bit words.
								 * @param {number} sigBytes (Optional) The number of significant bytes in the words.
								 *
								 * @example
								 *
								 *     var wordArray = CryptoJS.lib.WordArray.create();
								 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
								 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
								 */
init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},/**
								 * Converts this word array to a string.
								 *
								 * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
								 *
								 * @return {string} The stringified word array.
								 *
								 * @example
								 *
								 *     var string = wordArray + '';
								 *     var string = wordArray.toString();
								 *     var string = wordArray.toString(CryptoJS.enc.Utf8);
								 */
toString:function(t){return(t||o).stringify(this)},/**
								 * Concatenates a word array to this word array.
								 *
								 * @param {WordArray} wordArray The word array to append.
								 *
								 * @return {WordArray} This word array.
								 *
								 * @example
								 *
								 *     wordArray1.concat(wordArray2);
								 */
concat:function(t){
// Shortcuts
var e=this.words,i=t.words,a=this.sigBytes,n=t.sigBytes;
// Concat
if(
// Clamp excess bits
this.clamp(),a%4)
// Copy one byte at a time
for(var s=0;s<n;s++){var r=i[s>>>2]>>>24-s%4*8&255;e[a+s>>>2]|=r<<24-(a+s)%4*8}else
// Copy one word at a time
for(var s=0;s<n;s+=4)e[a+s>>>2]=i[s>>>2];
// Chainable
return this.sigBytes+=n,this},/**
								 * Removes insignificant bits.
								 *
								 * @example
								 *
								 *     wordArray.clamp();
								 */
clamp:function(){
// Shortcuts
var e=this.words,i=this.sigBytes;
// Clamp
e[i>>>2]&=4294967295<<32-i%4*8,e.length=t.ceil(i/4)},/**
								 * Creates a copy of this word array.
								 *
								 * @return {WordArray} The clone.
								 *
								 * @example
								 *
								 *     var clone = wordArray.clone();
								 */
clone:function(){var t=n.clone.call(this);return t.words=this.words.slice(0),t},/**
								 * Creates a word array filled with random bytes.
								 *
								 * @param {number} nBytes The number of random bytes to generate.
								 *
								 * @return {WordArray} The random word array.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var wordArray = CryptoJS.lib.WordArray.random(16);
								 */
random:function(e){for(var i,a=[],n=0;n<e;n+=4){var r=function(e){var e=e,i=987654321,a=4294967295;return function(){i=36969*(65535&i)+(i>>16)&a,e=18e3*(65535&e)+(e>>16)&a;var n=(i<<16)+e&a;return n/=4294967296,(n+=.5)*(t.random()>.5?1:-1)}}(4294967296*(i||t.random()));i=987654071*r(),a.push(4294967296*r()|0)}return new s.init(a,e)}}),r=i.enc={},o=r.Hex={/**
								 * Converts a word array to a hex string.
								 *
								 * @param {WordArray} wordArray The word array.
								 *
								 * @return {string} The hex string.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
								 */
stringify:function(t){for(var e=t.words,i=t.sigBytes,a=[],n=0;n<i;n++){var s=e[n>>>2]>>>24-n%4*8&255;a.push((s>>>4).toString(16)),a.push((15&s).toString(16))}return a.join("")},/**
								 * Converts a hex string to a word array.
								 *
								 * @param {string} hexStr The hex string.
								 *
								 * @return {WordArray} The word array.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
								 */
parse:function(t){for(var e=t.length,i=[],a=0;a<e;a+=2)i[a>>>3]|=parseInt(t.substr(a,2),16)<<24-a%8*4;return new s.init(i,e/2)}},l=r.Latin1={/**
								 * Converts a word array to a Latin1 string.
								 *
								 * @param {WordArray} wordArray The word array.
								 *
								 * @return {string} The Latin1 string.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
								 */
stringify:function(t){for(var e=t.words,i=t.sigBytes,a=[],n=0;n<i;n++){var s=e[n>>>2]>>>24-n%4*8&255;a.push(String.fromCharCode(s))}return a.join("")},/**
								 * Converts a Latin1 string to a word array.
								 *
								 * @param {string} latin1Str The Latin1 string.
								 *
								 * @return {WordArray} The word array.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
								 */
parse:function(t){for(var e=t.length,i=[],a=0;a<e;a++)i[a>>>2]|=(255&t.charCodeAt(a))<<24-a%4*8;return new s.init(i,e)}},h=r.Utf8={/**
								 * Converts a word array to a UTF-8 string.
								 *
								 * @param {WordArray} wordArray The word array.
								 *
								 * @return {string} The UTF-8 string.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
								 */
stringify:function(t){try{return decodeURIComponent(escape(l.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},/**
								 * Converts a UTF-8 string to a word array.
								 *
								 * @param {string} utf8Str The UTF-8 string.
								 *
								 * @return {WordArray} The word array.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
								 */
parse:function(t){return l.parse(unescape(encodeURIComponent(t)))}},u=a.BufferedBlockAlgorithm=n.extend({/**
								 * Resets this block algorithm's data buffer to its initial state.
								 *
								 * @example
								 *
								 *     bufferedBlockAlgorithm.reset();
								 */
reset:function(){
// Initial values
this._data=new s.init,this._nDataBytes=0},/**
								 * Adds new data to this block algorithm's buffer.
								 *
								 * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
								 *
								 * @example
								 *
								 *     bufferedBlockAlgorithm._append('data');
								 *     bufferedBlockAlgorithm._append(wordArray);
								 */
_append:function(t){
// Convert string to WordArray, else assume WordArray already
"string"==typeof t&&(t=h.parse(t)),
// Append
this._data.concat(t),this._nDataBytes+=t.sigBytes},/**
								 * Processes available data blocks.
								 *
								 * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
								 *
								 * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
								 *
								 * @return {WordArray} The processed data.
								 *
								 * @example
								 *
								 *     var processedData = bufferedBlockAlgorithm._process();
								 *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
								 */
_process:function(e){
// Shortcuts
var i=this._data,a=i.words,n=i.sigBytes,r=this.blockSize,o=4*r,l=n/o;
// Round up to include partial blocks
l=e?t.ceil(l):t.max((0|l)-this._minBufferSize,0);
// Count words ready
var h=l*r,u=t.min(4*h,n);
// Process blocks
if(h){for(var c=0;c<h;c+=r)
// Perform concrete-algorithm logic
this._doProcessBlock(a,c);
// Remove processed words
var d=a.splice(0,h);i.sigBytes-=u}
// Return processed words
return new s.init(d,u)},/**
								 * Creates a copy of this object.
								 *
								 * @return {Object} The clone.
								 *
								 * @example
								 *
								 *     var clone = bufferedBlockAlgorithm.clone();
								 */
clone:function(){var t=n.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),c=(a.Hasher=u.extend({/**
								 * Configuration options.
								 */
cfg:n.extend(),/**
								 * Initializes a newly created hasher.
								 *
								 * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
								 *
								 * @example
								 *
								 *     var hasher = CryptoJS.algo.SHA256.create();
								 */
init:function(t){
// Apply config defaults
this.cfg=this.cfg.extend(t),
// Set initial values
this.reset()},/**
								 * Resets this hasher to its initial state.
								 *
								 * @example
								 *
								 *     hasher.reset();
								 */
reset:function(){
// Reset data buffer
u.reset.call(this),
// Perform concrete-hasher logic
this._doReset()},/**
								 * Updates this hasher with a message.
								 *
								 * @param {WordArray|string} messageUpdate The message to append.
								 *
								 * @return {Hasher} This hasher.
								 *
								 * @example
								 *
								 *     hasher.update('message');
								 *     hasher.update(wordArray);
								 */
update:function(t){
// Chainable
// Append
// Update the hash
return this._append(t),this._process(),this},/**
								 * Finalizes the hash computation.
								 * Note that the finalize operation is effectively a destructive, read-once operation.
								 *
								 * @param {WordArray|string} messageUpdate (Optional) A final message update.
								 *
								 * @return {WordArray} The hash.
								 *
								 * @example
								 *
								 *     var hash = hasher.finalize();
								 *     var hash = hasher.finalize('message');
								 *     var hash = hasher.finalize(wordArray);
								 */
finalize:function(t){
// Final message update
return t&&this._append(t),this._doFinalize()},blockSize:16,/**
								 * Creates a shortcut function to a hasher's object interface.
								 *
								 * @param {Hasher} hasher The hasher to create a helper for.
								 *
								 * @return {Function} The shortcut function.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
								 */
_createHelper:function(t){return function(e,i){return new t.init(i).finalize(e)}},/**
								 * Creates a shortcut function to the HMAC's object interface.
								 *
								 * @param {Hasher} hasher The hasher to use in this HMAC helper.
								 *
								 * @return {Function} The shortcut function.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
								 */
_createHmacHelper:function(t){return function(e,i){return new c.HMAC.init(t,i).finalize(e)}}}),i.algo={});return i}(Math);return t})},/* 6 */
/***/
function(t,e,i){!function(a,n){
// CommonJS
t.exports=e=n(i(5))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,a=i.WordArray,n=i.Hasher,s=e.algo,r=[],o=s.SHA1=n.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){
// Computation
for(var i=this._hash.words,a=i[0],n=i[1],s=i[2],o=i[3],l=i[4],h=0;h<80;h++){if(h<16)r[h]=0|t[e+h];else{var u=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=u<<1|u>>>31}var c=(a<<5|a>>>27)+l+r[h];c+=h<20?1518500249+(n&s|~n&o):h<40?1859775393+(n^s^o):h<60?(n&s|n&o|s&o)-1894007588:(n^s^o)-899497514,l=o,o=s,s=n<<30|n>>>2,n=a,a=c}
// Intermediate hash value
i[0]=i[0]+a|0,i[1]=i[1]+n|0,i[2]=i[2]+s|0,i[3]=i[3]+o|0,i[4]=i[4]+l|0},_doFinalize:function(){
// Shortcuts
var t=this._data,e=t.words,i=8*this._nDataBytes,a=8*t.sigBytes;
// Return final computed hash
// Add padding
// Hash final blocks
return e[a>>>5]|=128<<24-a%32,e[14+(a+64>>>9<<4)]=Math.floor(i/4294967296),e[15+(a+64>>>9<<4)]=i,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});/**
						 * Shortcut function to the hasher's object interface.
						 *
						 * @param {WordArray|string} message The message to hash.
						 *
						 * @return {WordArray} The hash.
						 *
						 * @static
						 *
						 * @example
						 *
						 *     var hash = CryptoJS.SHA1('message');
						 *     var hash = CryptoJS.SHA1(wordArray);
						 */
e.SHA1=n._createHelper(o),/**
						 * Shortcut function to the HMAC's object interface.
						 *
						 * @param {WordArray|string} message The message to hash.
						 * @param {WordArray|string} key The secret key.
						 *
						 * @return {WordArray} The HMAC.
						 *
						 * @static
						 *
						 * @example
						 *
						 *     var hmac = CryptoJS.HmacSHA1(message, key);
						 */
e.HmacSHA1=n._createHmacHelper(o)}(),t.SHA1})},/* 7 */
/***/
function(t,e,i){!function(a,n){
// CommonJS
t.exports=e=n(i(5))}(0,function(t){!function(){
// Shortcuts
var e=t,i=e.lib,a=i.Base,n=e.enc,s=n.Utf8,r=e.algo;r.HMAC=a.extend({/**
							 * Initializes a newly created HMAC.
							 *
							 * @param {Hasher} hasher The hash algorithm to use.
							 * @param {WordArray|string} key The secret key.
							 *
							 * @example
							 *
							 *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
							 */
init:function(t,e){
// Init hasher
t=this._hasher=new t.init,
// Convert string to WordArray, else assume WordArray already
"string"==typeof e&&(e=s.parse(e));
// Shortcuts
var i=t.blockSize,a=4*i;
// Allow arbitrary length keys
e.sigBytes>a&&(e=t.finalize(e)),
// Clamp excess bits
e.clamp();
// XOR keys with pad constants
for(var n=this._oKey=e.clone(),r=this._iKey=e.clone(),o=n.words,l=r.words,h=0;h<i;h++)o[h]^=1549556828,l[h]^=909522486;n.sigBytes=r.sigBytes=a,
// Set initial values
this.reset()},/**
							 * Resets this HMAC to its initial state.
							 *
							 * @example
							 *
							 *     hmacHasher.reset();
							 */
reset:function(){
// Shortcut
var t=this._hasher;
// Reset
t.reset(),t.update(this._iKey)},/**
							 * Updates this HMAC with a message.
							 *
							 * @param {WordArray|string} messageUpdate The message to append.
							 *
							 * @return {HMAC} This HMAC instance.
							 *
							 * @example
							 *
							 *     hmacHasher.update('message');
							 *     hmacHasher.update(wordArray);
							 */
update:function(t){
// Chainable
return this._hasher.update(t),this},/**
							 * Finalizes the HMAC computation.
							 * Note that the finalize operation is effectively a destructive, read-once operation.
							 *
							 * @param {WordArray|string} messageUpdate (Optional) A final message update.
							 *
							 * @return {WordArray} The HMAC.
							 *
							 * @example
							 *
							 *     var hmac = hmacHasher.finalize();
							 *     var hmac = hmacHasher.finalize('message');
							 *     var hmac = hmacHasher.finalize(wordArray);
							 */
finalize:function(t){
// Shortcut
var e=this._hasher,i=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(i))}})}()})},/* 8 */
/***/
function(t,e){"use strict";/*
	 ES6 compatible port of CryptoJS - encoding
	
	 Source: https://github.com/brix/crypto-js
	 LICENSE: MIT
	 */
var i={};i.Latin1={stringify:function(t){
// Shortcuts
var e=t.words,i=t.sigBytes,a=[],n=void 0,s=void 0;
// Convert
for(n=0;n<i;n++)s=e[n>>>2]>>>24-n%4*8&255,a.push(String.fromCharCode(s));return a.join("")}},i._Utf8={stringify:function(t){try{return decodeURIComponent(escape(i.Latin1.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}}},t.exports=i},/* 9 */
/***/
function(t,e){"use strict";var i={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e="",a=void 0,n=void 0,s=void 0,r=void 0,o=void 0,l=void 0,h=void 0,u=0;for(t=i._utf8Encode(t);u<t.length;)a=t.charCodeAt(u++),n=t.charCodeAt(u++),s=t.charCodeAt(u++),r=a>>2,o=(3&a)<<4|n>>4,l=(15&n)<<2|s>>6,h=63&s,isNaN(n)?l=h=64:isNaN(s)&&(h=64),e=e+this._keyStr.charAt(r)+this._keyStr.charAt(o)+this._keyStr.charAt(l)+this._keyStr.charAt(h);return e},decode:function(t){var e="",a=void 0,n=void 0,s=void 0,r=void 0,o=void 0,l=void 0,h=void 0,u=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)r=this._keyStr.indexOf(t.charAt(u++)),o=this._keyStr.indexOf(t.charAt(u++)),l=this._keyStr.indexOf(t.charAt(u++)),h=this._keyStr.indexOf(t.charAt(u++)),a=r<<2|o>>4,n=(15&o)<<4|l>>2,s=(3&l)<<6|h,e+=String.fromCharCode(a),64!==l&&(e+=String.fromCharCode(n)),64!==h&&(e+=String.fromCharCode(s));return e=i._utf8Decode(e)},_utf8Encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",i=0;i<t.length;i++){var a=t.charCodeAt(i);a<128?e+=String.fromCharCode(a):a>127&&a<2048?(e+=String.fromCharCode(a>>6|192),e+=String.fromCharCode(63&a|128)):(e+=String.fromCharCode(a>>12|224),e+=String.fromCharCode(a>>6&63|128),e+=String.fromCharCode(63&a|128))}return e},_utf8Decode:function(t){var e="",i=0,a=void 0,n=void 0,s=void 0;for(a=n=0;i<t.length;)a=t.charCodeAt(i),a<128?(e+=String.fromCharCode(a),i++):a>191&&a<224?(n=t.charCodeAt(i+1),e+=String.fromCharCode((31&a)<<6|63&n),i+=2):(n=t.charCodeAt(i+1),s=t.charCodeAt(i+2),e+=String.fromCharCode((15&a)<<12|(63&n)<<6|63&s),i+=3);return e}};t.exports=i},/* 10 */
/***/
function(t,e,i){var a,n=function(){function t(t,e){if(!n[t]){n[t]={};for(var i=0;i<t.length;i++)n[t][t.charAt(i)]=i}return n[t][e]}
// private property
var e=String.fromCharCode,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={},s={compressToBase64:function(t){if(null==t)return"";var e=s._compress(t,6,function(t){return i.charAt(t)});switch(e.length%4){// To produce valid Base64
default:// When could this happen ?
case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,function(a){return t(i,e.charAt(a))})},compressToUTF16:function(t){return null==t?"":s._compress(t,15,function(t){return e(t+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:s._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},
//compress into uint8array (UCS-2 big endian format)
compressToUint8Array:function(t){// 2 bytes per character
for(var e=s.compress(t),i=new Uint8Array(2*e.length),a=0,n=e.length;a<n;a++){var r=e.charCodeAt(a);i[2*a]=r>>>8,i[2*a+1]=r%256}return i},
//decompress from uint8array (UCS-2 big endian format)
decompressFromUint8Array:function(t){if(null===t||void 0===t)return s.decompress(t);// 2 bytes per character
for(var i=new Array(t.length/2),a=0,n=i.length;a<n;a++)i[a]=256*t[2*a]+t[2*a+1];var r=[];return i.forEach(function(t){r.push(e(t))}),s.decompress(r.join(""))},
//compress into a string that is already URI encoded
compressToEncodedURIComponent:function(t){return null==t?"":s._compress(t,6,function(t){return a.charAt(t)})},
//decompress from an output of compressToEncodedURIComponent
decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,function(i){return t(a,e.charAt(i))}))},compress:function(t){return s._compress(t,16,function(t){return e(t)})},_compress:function(t,e,i){if(null==t)return"";var a,n,s,r={},o={},l="",h="",u="",c=2,// Compensate for the first entry which should not count
d=3,p=2,f=[],m=0,g=0;for(s=0;s<t.length;s+=1)if(l=t.charAt(s),Object.prototype.hasOwnProperty.call(r,l)||(r[l]=d++,o[l]=!0),h=u+l,Object.prototype.hasOwnProperty.call(r,h))u=h;else{if(Object.prototype.hasOwnProperty.call(o,u)){if(u.charCodeAt(0)<256){for(a=0;a<p;a++)m<<=1,g==e-1?(g=0,f.push(i(m)),m=0):g++;for(n=u.charCodeAt(0),a=0;a<8;a++)m=m<<1|1&n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n>>=1}else{for(n=1,a=0;a<p;a++)m=m<<1|n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n=0;for(n=u.charCodeAt(0),a=0;a<16;a++)m=m<<1|1&n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n>>=1}c--,0==c&&(c=Math.pow(2,p),p++),delete o[u]}else for(n=r[u],a=0;a<p;a++)m=m<<1|1&n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n>>=1;c--,0==c&&(c=Math.pow(2,p),p++),
// Add wc to the dictionary.
r[h]=d++,u=String(l)}
// Output the code for w.
if(""!==u){if(Object.prototype.hasOwnProperty.call(o,u)){if(u.charCodeAt(0)<256){for(a=0;a<p;a++)m<<=1,g==e-1?(g=0,f.push(i(m)),m=0):g++;for(n=u.charCodeAt(0),a=0;a<8;a++)m=m<<1|1&n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n>>=1}else{for(n=1,a=0;a<p;a++)m=m<<1|n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n=0;for(n=u.charCodeAt(0),a=0;a<16;a++)m=m<<1|1&n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n>>=1}c--,0==c&&(c=Math.pow(2,p),p++),delete o[u]}else for(n=r[u],a=0;a<p;a++)m=m<<1|1&n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n>>=1;c--,0==c&&(c=Math.pow(2,p),p++)}for(
// Mark the end of the stream
n=2,a=0;a<p;a++)m=m<<1|1&n,g==e-1?(g=0,f.push(i(m)),m=0):g++,n>>=1;
// Flush the last char
for(;;){if(m<<=1,g==e-1){f.push(i(m));break}g++}return f.join("")},decompress:function(t){return null==t?"":""==t?null:s._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(t,i,a){var n,s,r,o,l,h,u,c=[],d=4,p=4,f=3,m="",g=[],y={val:a(0),position:i,index:1};for(n=0;n<3;n+=1)c[n]=n;for(r=0,l=Math.pow(2,2),h=1;h!=l;)o=y.val&y.position,y.position>>=1,0==y.position&&(y.position=i,y.val=a(y.index++)),r|=(o>0?1:0)*h,h<<=1;switch(r){case 0:for(r=0,l=Math.pow(2,8),h=1;h!=l;)o=y.val&y.position,y.position>>=1,0==y.position&&(y.position=i,y.val=a(y.index++)),r|=(o>0?1:0)*h,h<<=1;u=e(r);break;case 1:for(r=0,l=Math.pow(2,16),h=1;h!=l;)o=y.val&y.position,y.position>>=1,0==y.position&&(y.position=i,y.val=a(y.index++)),r|=(o>0?1:0)*h,h<<=1;u=e(r);break;case 2:return""}for(c[3]=u,s=u,g.push(u);;){if(y.index>t)return"";for(r=0,l=Math.pow(2,f),h=1;h!=l;)o=y.val&y.position,y.position>>=1,0==y.position&&(y.position=i,y.val=a(y.index++)),r|=(o>0?1:0)*h,h<<=1;switch(u=r){case 0:for(r=0,l=Math.pow(2,8),h=1;h!=l;)o=y.val&y.position,y.position>>=1,0==y.position&&(y.position=i,y.val=a(y.index++)),r|=(o>0?1:0)*h,h<<=1;c[p++]=e(r),u=p-1,d--;break;case 1:for(r=0,l=Math.pow(2,16),h=1;h!=l;)o=y.val&y.position,y.position>>=1,0==y.position&&(y.position=i,y.val=a(y.index++)),r|=(o>0?1:0)*h,h<<=1;c[p++]=e(r),u=p-1,d--;break;case 2:return g.join("")}if(0==d&&(d=Math.pow(2,f),f++),c[u])m=c[u];else{if(u!==p)return null;m=s+s.charAt(0)}g.push(m),
// Add w+entry[0] to the dictionary.
c[p++]=s+m.charAt(0),d--,s=m,0==d&&(d=Math.pow(2,f),f++)}}};return s}();void 0!==(a=function(){return n}.call(e,i,e,t))&&(t.exports=a)},/* 11 */
/***/
function(t,e,i){!function(a,n,s){
// CommonJS
t.exports=e=n(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,a=i.BlockCipher,n=e.algo,s=[],r=[],o=[],l=[],h=[],u=[],c=[],d=[],p=[],f=[];
// Compute lookup tables
!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;for(var i=0,a=0,e=0;e<256;e++){
// Compute sbox
var n=a^a<<1^a<<2^a<<3^a<<4;n=n>>>8^255&n^99,s[i]=n,r[n]=i;
// Compute multiplication
var m=t[i],g=t[m],y=t[g],v=257*t[n]^16843008*n;o[i]=v<<24|v>>>8,l[i]=v<<16|v>>>16,h[i]=v<<8|v>>>24,u[i]=v;
// Compute inv sub bytes, inv mix columns tables
var v=16843009*y^65537*g^257*m^16843008*i;c[n]=v<<24|v>>>8,d[n]=v<<16|v>>>16,p[n]=v<<8|v>>>24,f[n]=v,
// Compute next counter
i?(i=m^t[t[t[y^m]]],a^=t[t[a]]):i=a=1}}();
// Precomputed Rcon lookup
var m=[0,1,2,4,8,16,32,64,128,27,54],g=n.AES=a.extend({_doReset:function(){for(var t=this._key,e=t.words,i=t.sigBytes/4,a=this._nRounds=i+6,n=4*(a+1),r=this._keySchedule=[],o=0;o<n;o++)if(o<i)r[o]=e[o];else{var l=r[o-1];o%i?i>6&&o%i==4&&(
// Sub word
l=s[l>>>24]<<24|s[l>>>16&255]<<16|s[l>>>8&255]<<8|s[255&l]):(
// Rot word
l=l<<8|l>>>24,
// Sub word
l=s[l>>>24]<<24|s[l>>>16&255]<<16|s[l>>>8&255]<<8|s[255&l],
// Mix Rcon
l^=m[o/i|0]<<24),r[o]=r[o-i]^l}for(var h=this._invKeySchedule=[],u=0;u<n;u++){var o=n-u;if(u%4)var l=r[o];else var l=r[o-4];h[u]=u<4||o<=4?l:c[s[l>>>24]]^d[s[l>>>16&255]]^p[s[l>>>8&255]]^f[s[255&l]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,l,h,u,s)},decryptBlock:function(t,e){
// Swap 2nd and 4th rows
var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i,this._doCryptBlock(t,e,this._invKeySchedule,c,d,p,f,r);
// Inv swap 2nd and 4th rows
var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i},_doCryptBlock:function(t,e,i,a,n,s,r,o){
// Rounds
for(var l=this._nRounds,h=t[e]^i[0],u=t[e+1]^i[1],c=t[e+2]^i[2],d=t[e+3]^i[3],p=4,f=1;f<l;f++){
// Shift rows, sub bytes, mix columns, add round key
var m=a[h>>>24]^n[u>>>16&255]^s[c>>>8&255]^r[255&d]^i[p++],g=a[u>>>24]^n[c>>>16&255]^s[d>>>8&255]^r[255&h]^i[p++],y=a[c>>>24]^n[d>>>16&255]^s[h>>>8&255]^r[255&u]^i[p++],v=a[d>>>24]^n[h>>>16&255]^s[u>>>8&255]^r[255&c]^i[p++];
// Update state
h=m,u=g,c=y,d=v}
// Shift rows, sub bytes, add round key
var m=(o[h>>>24]<<24|o[u>>>16&255]<<16|o[c>>>8&255]<<8|o[255&d])^i[p++],g=(o[u>>>24]<<24|o[c>>>16&255]<<16|o[d>>>8&255]<<8|o[255&h])^i[p++],y=(o[c>>>24]<<24|o[d>>>16&255]<<16|o[h>>>8&255]<<8|o[255&u])^i[p++],v=(o[d>>>24]<<24|o[h>>>16&255]<<16|o[u>>>8&255]<<8|o[255&c])^i[p++];
// Set output
t[e]=m,t[e+1]=g,t[e+2]=y,t[e+3]=v},keySize:8});/**
						 * Shortcut functions to the cipher's object interface.
						 *
						 * @example
						 *
						 *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
						 *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
						 */
e.AES=a._createHelper(g)}(),t.AES})},/* 12 */
/***/
function(t,e,i){!function(a,n){
// CommonJS
t.exports=e=n(i(5))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,a=i.WordArray,n=e.enc;n.Base64={/**
							 * Converts a word array to a Base64 string.
							 *
							 * @param {WordArray} wordArray The word array.
							 *
							 * @return {string} The Base64 string.
							 *
							 * @static
							 *
							 * @example
							 *
							 *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
							 */
stringify:function(t){
// Shortcuts
var e=t.words,i=t.sigBytes,a=this._map;
// Clamp excess bits
t.clamp();for(var n=[],s=0;s<i;s+=3)for(var r=e[s>>>2]>>>24-s%4*8&255,o=e[s+1>>>2]>>>24-(s+1)%4*8&255,l=e[s+2>>>2]>>>24-(s+2)%4*8&255,h=r<<16|o<<8|l,u=0;u<4&&s+.75*u<i;u++)n.push(a.charAt(h>>>6*(3-u)&63));
// Add padding
var c=a.charAt(64);if(c)for(;n.length%4;)n.push(c);return n.join("")},/**
							 * Converts a Base64 string to a word array.
							 *
							 * @param {string} base64Str The Base64 string.
							 *
							 * @return {WordArray} The word array.
							 *
							 * @static
							 *
							 * @example
							 *
							 *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
							 */
parse:function(t){
// Shortcuts
var e=t.length,i=this._map,n=i.charAt(64);if(n){var s=t.indexOf(n);-1!=s&&(e=s)}for(var r=[],o=0,l=0;l<e;l++)if(l%4){var h=i.indexOf(t.charAt(l-1))<<l%4*2,u=i.indexOf(t.charAt(l))>>>6-l%4*2,c=h|u;r[o>>>2]|=c<<24-o%4*8,o++}return a.create(r,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64})},/* 13 */
/***/
function(t,e,i){!function(a,n){
// CommonJS
t.exports=e=n(i(5))}(0,function(t){return function(e){function i(t,e,i,a,n,s,r){var o=t+(e&i|~e&a)+n+r;return(o<<s|o>>>32-s)+e}function a(t,e,i,a,n,s,r){var o=t+(e&a|i&~a)+n+r;return(o<<s|o>>>32-s)+e}function n(t,e,i,a,n,s,r){var o=t+(e^i^a)+n+r;return(o<<s|o>>>32-s)+e}function s(t,e,i,a,n,s,r){var o=t+(i^(e|~a))+n+r;return(o<<s|o>>>32-s)+e}
// Shortcuts
var r=t,o=r.lib,l=o.WordArray,h=o.Hasher,u=r.algo,c=[];
// Compute constants
!function(){for(var t=0;t<64;t++)c[t]=4294967296*e.abs(e.sin(t+1))|0}();/**
						 * MD5 hash algorithm.
						 */
var d=u.MD5=h.extend({_doReset:function(){this._hash=new l.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){
// Swap endian
for(var r=0;r<16;r++){
// Shortcuts
var o=e+r,l=t[o];t[o]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}
// Shortcuts
var h=this._hash.words,u=t[e+0],d=t[e+1],p=t[e+2],f=t[e+3],m=t[e+4],g=t[e+5],y=t[e+6],v=t[e+7],b=t[e+8],w=t[e+9],S=t[e+10],x=t[e+11],k=t[e+12],P=t[e+13],_=t[e+14],T=t[e+15],M=h[0],E=h[1],O=h[2],B=h[3];
// Computation
M=i(M,E,O,B,u,7,c[0]),B=i(B,M,E,O,d,12,c[1]),O=i(O,B,M,E,p,17,c[2]),E=i(E,O,B,M,f,22,c[3]),M=i(M,E,O,B,m,7,c[4]),B=i(B,M,E,O,g,12,c[5]),O=i(O,B,M,E,y,17,c[6]),E=i(E,O,B,M,v,22,c[7]),M=i(M,E,O,B,b,7,c[8]),B=i(B,M,E,O,w,12,c[9]),O=i(O,B,M,E,S,17,c[10]),E=i(E,O,B,M,x,22,c[11]),M=i(M,E,O,B,k,7,c[12]),B=i(B,M,E,O,P,12,c[13]),O=i(O,B,M,E,_,17,c[14]),E=i(E,O,B,M,T,22,c[15]),M=a(M,E,O,B,d,5,c[16]),B=a(B,M,E,O,y,9,c[17]),O=a(O,B,M,E,x,14,c[18]),E=a(E,O,B,M,u,20,c[19]),M=a(M,E,O,B,g,5,c[20]),B=a(B,M,E,O,S,9,c[21]),O=a(O,B,M,E,T,14,c[22]),E=a(E,O,B,M,m,20,c[23]),M=a(M,E,O,B,w,5,c[24]),B=a(B,M,E,O,_,9,c[25]),O=a(O,B,M,E,f,14,c[26]),E=a(E,O,B,M,b,20,c[27]),M=a(M,E,O,B,P,5,c[28]),B=a(B,M,E,O,p,9,c[29]),O=a(O,B,M,E,v,14,c[30]),E=a(E,O,B,M,k,20,c[31]),M=n(M,E,O,B,g,4,c[32]),B=n(B,M,E,O,b,11,c[33]),O=n(O,B,M,E,x,16,c[34]),E=n(E,O,B,M,_,23,c[35]),M=n(M,E,O,B,d,4,c[36]),B=n(B,M,E,O,m,11,c[37]),O=n(O,B,M,E,v,16,c[38]),E=n(E,O,B,M,S,23,c[39]),M=n(M,E,O,B,P,4,c[40]),B=n(B,M,E,O,u,11,c[41]),O=n(O,B,M,E,f,16,c[42]),E=n(E,O,B,M,y,23,c[43]),M=n(M,E,O,B,w,4,c[44]),B=n(B,M,E,O,k,11,c[45]),O=n(O,B,M,E,T,16,c[46]),E=n(E,O,B,M,p,23,c[47]),M=s(M,E,O,B,u,6,c[48]),B=s(B,M,E,O,v,10,c[49]),O=s(O,B,M,E,_,15,c[50]),E=s(E,O,B,M,g,21,c[51]),M=s(M,E,O,B,k,6,c[52]),B=s(B,M,E,O,f,10,c[53]),O=s(O,B,M,E,S,15,c[54]),E=s(E,O,B,M,d,21,c[55]),M=s(M,E,O,B,b,6,c[56]),B=s(B,M,E,O,T,10,c[57]),O=s(O,B,M,E,y,15,c[58]),E=s(E,O,B,M,P,21,c[59]),M=s(M,E,O,B,m,6,c[60]),B=s(B,M,E,O,x,10,c[61]),O=s(O,B,M,E,p,15,c[62]),E=s(E,O,B,M,w,21,c[63]),
// Intermediate hash value
h[0]=h[0]+M|0,h[1]=h[1]+E|0,h[2]=h[2]+O|0,h[3]=h[3]+B|0},_doFinalize:function(){
// Shortcuts
var t=this._data,i=t.words,a=8*this._nDataBytes,n=8*t.sigBytes;
// Add padding
i[n>>>5]|=128<<24-n%32;var s=e.floor(a/4294967296),r=a;i[15+(n+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),i[14+(n+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(i.length+1),
// Hash final blocks
this._process();
// Swap endian
for(var o=this._hash,l=o.words,h=0;h<4;h++){
// Shortcut
var u=l[h];l[h]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}
// Return final computed hash
return o},clone:function(){var t=h.clone.call(this);return t._hash=this._hash.clone(),t}});/**
						 * Shortcut function to the hasher's object interface.
						 *
						 * @param {WordArray|string} message The message to hash.
						 *
						 * @return {WordArray} The hash.
						 *
						 * @static
						 *
						 * @example
						 *
						 *     var hash = CryptoJS.MD5('message');
						 *     var hash = CryptoJS.MD5(wordArray);
						 */
r.MD5=h._createHelper(d),/**
						 * Shortcut function to the HMAC's object interface.
						 *
						 * @param {WordArray|string} message The message to hash.
						 * @param {WordArray|string} key The secret key.
						 *
						 * @return {WordArray} The HMAC.
						 *
						 * @static
						 *
						 * @example
						 *
						 *     var hmac = CryptoJS.HmacMD5(message, key);
						 */
r.HmacMD5=h._createHmacHelper(d)}(Math),t.MD5})},/* 14 */
/***/
function(t,e,i){!function(a,n,s){
// CommonJS
t.exports=e=n(i(5),i(6),i(7))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,a=i.Base,n=i.WordArray,s=e.algo,r=s.MD5,o=s.EvpKDF=a.extend({/**
							 * Configuration options.
							 *
							 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
							 * @property {Hasher} hasher The hash algorithm to use. Default: MD5
							 * @property {number} iterations The number of iterations to perform. Default: 1
							 */
cfg:a.extend({keySize:4,hasher:r,iterations:1}),/**
							 * Initializes a newly created key derivation function.
							 *
							 * @param {Object} cfg (Optional) The configuration options to use for the derivation.
							 *
							 * @example
							 *
							 *     var kdf = CryptoJS.algo.EvpKDF.create();
							 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
							 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
							 */
init:function(t){this.cfg=this.cfg.extend(t)},/**
							 * Derives a key from a password.
							 *
							 * @param {WordArray|string} password The password.
							 * @param {WordArray|string} salt A salt.
							 *
							 * @return {WordArray} The derived key.
							 *
							 * @example
							 *
							 *     var key = kdf.compute(password, salt);
							 */
compute:function(t,e){
// Generate key
for(
// Shortcut
var i=this.cfg,a=i.hasher.create(),s=n.create(),r=s.words,o=i.keySize,l=i.iterations;r.length<o;){h&&a.update(h);var h=a.update(t).finalize(e);a.reset();
// Iterations
for(var u=1;u<l;u++)h=a.finalize(h),a.reset();s.concat(h)}return s.sigBytes=4*o,s}});/**
						 * Derives a key from a password.
						 *
						 * @param {WordArray|string} password The password.
						 * @param {WordArray|string} salt A salt.
						 * @param {Object} cfg (Optional) The configuration options to use for this computation.
						 *
						 * @return {WordArray} The derived key.
						 *
						 * @static
						 *
						 * @example
						 *
						 *     var key = CryptoJS.EvpKDF(password, salt);
						 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
						 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
						 */
e.EvpKDF=function(t,e,i){return o.create(i).compute(t,e)}}(),t.EvpKDF})},/* 15 */
/***/
function(t,e,i){!function(a,n){
// CommonJS
t.exports=e=n(i(5))}(0,function(t){/**
					 * Cipher core components.
					 */
t.lib.Cipher||function(e){
// Shortcuts
var i=t,a=i.lib,n=a.Base,s=a.WordArray,r=a.BufferedBlockAlgorithm,o=i.enc,l=(o.Utf8,o.Base64),h=i.algo,u=h.EvpKDF,c=a.Cipher=r.extend({/**
								 * Configuration options.
								 *
								 * @property {WordArray} iv The IV to use for this operation.
								 */
cfg:n.extend(),/**
								 * Creates this cipher in encryption mode.
								 *
								 * @param {WordArray} key The key.
								 * @param {Object} cfg (Optional) The configuration options to use for this operation.
								 *
								 * @return {Cipher} A cipher instance.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
								 */
createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},/**
								 * Creates this cipher in decryption mode.
								 *
								 * @param {WordArray} key The key.
								 * @param {Object} cfg (Optional) The configuration options to use for this operation.
								 *
								 * @return {Cipher} A cipher instance.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
								 */
createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},/**
								 * Initializes a newly created cipher.
								 *
								 * @param {number} xformMode Either the encryption or decryption transormation mode constant.
								 * @param {WordArray} key The key.
								 * @param {Object} cfg (Optional) The configuration options to use for this operation.
								 *
								 * @example
								 *
								 *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
								 */
init:function(t,e,i){
// Apply config defaults
this.cfg=this.cfg.extend(i),
// Store transform mode and key
this._xformMode=t,this._key=e,
// Set initial values
this.reset()},/**
								 * Resets this cipher to its initial state.
								 *
								 * @example
								 *
								 *     cipher.reset();
								 */
reset:function(){
// Reset data buffer
r.reset.call(this),
// Perform concrete-cipher logic
this._doReset()},/**
								 * Adds data to be encrypted or decrypted.
								 *
								 * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
								 *
								 * @return {WordArray} The data after processing.
								 *
								 * @example
								 *
								 *     var encrypted = cipher.process('data');
								 *     var encrypted = cipher.process(wordArray);
								 */
process:function(t){
// Process available blocks
// Append
return this._append(t),this._process()},/**
								 * Finalizes the encryption or decryption process.
								 * Note that the finalize operation is effectively a destructive, read-once operation.
								 *
								 * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
								 *
								 * @return {WordArray} The data after final processing.
								 *
								 * @example
								 *
								 *     var encrypted = cipher.finalize();
								 *     var encrypted = cipher.finalize('data');
								 *     var encrypted = cipher.finalize(wordArray);
								 */
finalize:function(t){
// Final data update
return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,/**
								 * Creates shortcut functions to a cipher's object interface.
								 *
								 * @param {Cipher} cipher The cipher to create a helper for.
								 *
								 * @return {Object} An object with encrypt and decrypt shortcut functions.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
								 */
_createHelper:function(){function t(t){return"string"==typeof t?k:w}return function(e){return{encrypt:function(i,a,n){return t(a).encrypt(e,i,a,n)},decrypt:function(i,a,n){return t(a).decrypt(e,i,a,n)}}}}()}),d=(a.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),i.mode={}),p=a.BlockCipherMode=n.extend({/**
								 * Creates this mode for encryption.
								 *
								 * @param {Cipher} cipher A block cipher instance.
								 * @param {Array} iv The IV words.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
								 */
createEncryptor:function(t,e){return this.Encryptor.create(t,e)},/**
								 * Creates this mode for decryption.
								 *
								 * @param {Cipher} cipher A block cipher instance.
								 * @param {Array} iv The IV words.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
								 */
createDecryptor:function(t,e){return this.Decryptor.create(t,e)},/**
								 * Initializes a newly created mode.
								 *
								 * @param {Cipher} cipher A block cipher instance.
								 * @param {Array} iv The IV words.
								 *
								 * @example
								 *
								 *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
								 */
init:function(t,e){this._cipher=t,this._iv=e}}),f=d.CBC=function(){function t(t,i,a){
// Shortcut
var n=this._iv;
// Choose mixing block
if(n){var s=n;
// Remove IV for subsequent blocks
this._iv=e}else var s=this._prevBlock;
// XOR blocks
for(var r=0;r<a;r++)t[i+r]^=s[r]}/**
								 * Abstract base CBC mode.
								 */
var i=p.extend();/**
								 * CBC encryptor.
								 */
/**
								 * CBC decryptor.
								 */
return i.Encryptor=i.extend({/**
									 * Processes the data block at offset.
									 *
									 * @param {Array} words The data words to operate on.
									 * @param {number} offset The offset where the block starts.
									 *
									 * @example
									 *
									 *     mode.processBlock(data.words, offset);
									 */
processBlock:function(e,i){
// Shortcuts
var a=this._cipher,n=a.blockSize;
// XOR and encrypt
t.call(this,e,i,n),a.encryptBlock(e,i),
// Remember this block to use with next block
this._prevBlock=e.slice(i,i+n)}}),i.Decryptor=i.extend({/**
									 * Processes the data block at offset.
									 *
									 * @param {Array} words The data words to operate on.
									 * @param {number} offset The offset where the block starts.
									 *
									 * @example
									 *
									 *     mode.processBlock(data.words, offset);
									 */
processBlock:function(e,i){
// Shortcuts
var a=this._cipher,n=a.blockSize,s=e.slice(i,i+n);
// Decrypt and XOR
a.decryptBlock(e,i),t.call(this,e,i,n),
// This block becomes the previous block
this._prevBlock=s}}),i}(),m=i.pad={},g=m.Pkcs7={/**
								 * Pads data using the algorithm defined in PKCS #5/7.
								 *
								 * @param {WordArray} data The data to pad.
								 * @param {number} blockSize The multiple that the data should be padded to.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
								 */
pad:function(t,e){for(var i=4*e,a=i-t.sigBytes%i,n=a<<24|a<<16|a<<8|a,r=[],o=0;o<a;o+=4)r.push(n);var l=s.create(r,a);
// Add padding
t.concat(l)},/**
								 * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
								 *
								 * @param {WordArray} data The data to unpad.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     CryptoJS.pad.Pkcs7.unpad(wordArray);
								 */
unpad:function(t){
// Get number of padding bytes from last byte
var e=255&t.words[t.sigBytes-1>>>2];
// Remove padding
t.sigBytes-=e}},y=(a.BlockCipher=c.extend({/**
								 * Configuration options.
								 *
								 * @property {Mode} mode The block mode to use. Default: CBC
								 * @property {Padding} padding The padding strategy to use. Default: Pkcs7
								 */
cfg:c.cfg.extend({mode:f,padding:g}),reset:function(){
// Reset cipher
c.reset.call(this);
// Shortcuts
var t=this.cfg,e=t.iv,i=t.mode;
// Reset block mode
if(this._xformMode==this._ENC_XFORM_MODE)var a=i.createEncryptor;else{/* if (this._xformMode == this._DEC_XFORM_MODE) */
var a=i.createDecryptor;
// Keep at least one block in the buffer for unpadding
this._minBufferSize=1}this._mode=a.call(i,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){
// Shortcut
var t=this.cfg.padding;
// Finalize
if(this._xformMode==this._ENC_XFORM_MODE){
// Pad data
t.pad(this._data,this.blockSize);
// Process final blocks
var e=this._process(!0)}else{/* if (this._xformMode == this._DEC_XFORM_MODE) */
// Process final blocks
var e=this._process(!0);
// Unpad data
t.unpad(e)}return e},blockSize:4}),a.CipherParams=n.extend({/**
								 * Initializes a newly created cipher params object.
								 *
								 * @param {Object} cipherParams An object with any of the possible cipher parameters.
								 *
								 * @example
								 *
								 *     var cipherParams = CryptoJS.lib.CipherParams.create({
								 *         ciphertext: ciphertextWordArray,
								 *         key: keyWordArray,
								 *         iv: ivWordArray,
								 *         salt: saltWordArray,
								 *         algorithm: CryptoJS.algo.AES,
								 *         mode: CryptoJS.mode.CBC,
								 *         padding: CryptoJS.pad.PKCS7,
								 *         blockSize: 4,
								 *         formatter: CryptoJS.format.OpenSSL
								 *     });
								 */
init:function(t){this.mixIn(t)},/**
								 * Converts this cipher params object to a string.
								 *
								 * @param {Format} formatter (Optional) The formatting strategy to use.
								 *
								 * @return {string} The stringified cipher params.
								 *
								 * @throws Error If neither the formatter nor the default formatter is set.
								 *
								 * @example
								 *
								 *     var string = cipherParams + '';
								 *     var string = cipherParams.toString();
								 *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
								 */
toString:function(t){return(t||this.formatter).stringify(this)}})),v=i.format={},b=v.OpenSSL={/**
								 * Converts a cipher params object to an OpenSSL-compatible string.
								 *
								 * @param {CipherParams} cipherParams The cipher params object.
								 *
								 * @return {string} The OpenSSL-compatible string.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
								 */
stringify:function(t){
// Shortcuts
var e=t.ciphertext,i=t.salt;
// Format
if(i)var a=s.create([1398893684,1701076831]).concat(i).concat(e);else var a=e;return a.toString(l)},/**
								 * Converts an OpenSSL-compatible string to a cipher params object.
								 *
								 * @param {string} openSSLStr The OpenSSL-compatible string.
								 *
								 * @return {CipherParams} The cipher params object.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
								 */
parse:function(t){
// Parse base64
var e=l.parse(t),i=e.words;
// Test for salt
if(1398893684==i[0]&&1701076831==i[1]){
// Extract salt
var a=s.create(i.slice(2,4));
// Remove salt from ciphertext
i.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:a})}},w=a.SerializableCipher=n.extend({/**
								 * Configuration options.
								 *
								 * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
								 */
cfg:n.extend({format:b}),/**
								 * Encrypts a message.
								 *
								 * @param {Cipher} cipher The cipher algorithm to use.
								 * @param {WordArray|string} message The message to encrypt.
								 * @param {WordArray} key The key.
								 * @param {Object} cfg (Optional) The configuration options to use for this operation.
								 *
								 * @return {CipherParams} A cipher params object.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
								 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
								 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
								 */
encrypt:function(t,e,i,a){
// Apply config defaults
a=this.cfg.extend(a);
// Encrypt
var n=t.createEncryptor(i,a),s=n.finalize(e),r=n.cfg;
// Create and return serializable cipher params
return y.create({ciphertext:s,key:i,iv:r.iv,algorithm:t,mode:r.mode,padding:r.padding,blockSize:t.blockSize,formatter:a.format})},/**
								 * Decrypts serialized ciphertext.
								 *
								 * @param {Cipher} cipher The cipher algorithm to use.
								 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
								 * @param {WordArray} key The key.
								 * @param {Object} cfg (Optional) The configuration options to use for this operation.
								 *
								 * @return {WordArray} The plaintext.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
								 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
								 */
decrypt:function(t,e,i,a){
// Apply config defaults
// Convert string to CipherParams
return a=this.cfg.extend(a),e=this._parse(e,a.format),t.createDecryptor(i,a).finalize(e.ciphertext)},/**
								 * Converts serialized ciphertext to CipherParams,
								 * else assumed CipherParams already and returns ciphertext unchanged.
								 *
								 * @param {CipherParams|string} ciphertext The ciphertext.
								 * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
								 *
								 * @return {CipherParams} The unserialized ciphertext.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
								 */
_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),S=i.kdf={},x=S.OpenSSL={/**
								 * Derives a key and IV from a password.
								 *
								 * @param {string} password The password to derive from.
								 * @param {number} keySize The size in words of the key to generate.
								 * @param {number} ivSize The size in words of the IV to generate.
								 * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
								 *
								 * @return {CipherParams} A cipher params object with the key, IV, and salt.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
								 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
								 */
execute:function(t,e,i,a){
// Generate random salt
a||(a=s.random(8));
// Derive key and IV
var n=u.create({keySize:e+i}).compute(t,a),r=s.create(n.words.slice(e),4*i);
// Return params
return n.sigBytes=4*e,y.create({key:n,iv:r,salt:a})}},k=a.PasswordBasedCipher=w.extend({/**
								 * Configuration options.
								 *
								 * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
								 */
cfg:w.cfg.extend({kdf:x}),/**
								 * Encrypts a message using a password.
								 *
								 * @param {Cipher} cipher The cipher algorithm to use.
								 * @param {WordArray|string} message The message to encrypt.
								 * @param {string} password The password.
								 * @param {Object} cfg (Optional) The configuration options to use for this operation.
								 *
								 * @return {CipherParams} A cipher params object.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
								 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
								 */
encrypt:function(t,e,i,a){
// Apply config defaults
a=this.cfg.extend(a);
// Derive key and other params
var n=a.kdf.execute(i,t.keySize,t.ivSize);
// Add IV to config
a.iv=n.iv;
// Encrypt
var s=w.encrypt.call(this,t,e,n.key,a);
// Mix in derived params
return s.mixIn(n),s},/**
								 * Decrypts serialized ciphertext using a password.
								 *
								 * @param {Cipher} cipher The cipher algorithm to use.
								 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
								 * @param {string} password The password.
								 * @param {Object} cfg (Optional) The configuration options to use for this operation.
								 *
								 * @return {WordArray} The plaintext.
								 *
								 * @static
								 *
								 * @example
								 *
								 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
								 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
								 */
decrypt:function(t,e,i,a){
// Apply config defaults
a=this.cfg.extend(a),
// Convert string to CipherParams
e=this._parse(e,a.format);
// Derive key and other params
var n=a.kdf.execute(i,t.keySize,t.ivSize,e.salt);
// Add IV to config
return a.iv=n.iv,w.decrypt.call(this,t,e,n.key,a)}})}()})},/* 16 */
/***/
function(t,e,i){!function(a,n,s){
// CommonJS
t.exports=e=n(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){
// Swap bits across the left and right words
function e(t,e){var i=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=i,this._lBlock^=i<<t}function i(t,e){var i=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=i,this._rBlock^=i<<t}
// Shortcuts
var a=t,n=a.lib,s=n.WordArray,r=n.BlockCipher,o=a.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],h=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],c=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],d=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],p=o.DES=r.extend({_doReset:function(){for(var t=this._key,e=t.words,i=[],a=0;a<56;a++){var n=l[a]-1;i[a]=e[n>>>5]>>>31-n%32&1}for(var s=this._subKeys=[],r=0;r<16;r++){
// Select 48 bits according to PC2
for(var o=s[r]=[],c=u[r],a=0;a<24;a++)
// Select from the left 28 key bits
o[a/6|0]|=i[(h[a]-1+c)%28]<<31-a%6,
// Select from the right 28 key bits
o[4+(a/6|0)]|=i[28+(h[a+24]-1+c)%28]<<31-a%6;
// Since each subkey is applied to an expanded 32-bit input,
// the subkey can be broken into 8 values scaled to 32-bits,
// which allows the key to be used without expansion
o[0]=o[0]<<1|o[0]>>>31;for(var a=1;a<7;a++)o[a]=o[a]>>>4*(a-1)+3;o[7]=o[7]<<5|o[7]>>>27}for(var d=this._invSubKeys=[],a=0;a<16;a++)d[a]=s[15-a]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,a,n){
// Get input
this._lBlock=t[a],this._rBlock=t[a+1],
// Initial permutation
e.call(this,4,252645135),e.call(this,16,65535),i.call(this,2,858993459),i.call(this,8,16711935),e.call(this,1,1431655765);
// Rounds
for(var s=0;s<16;s++){for(var r=n[s],o=this._lBlock,l=this._rBlock,h=0,u=0;u<8;u++)h|=c[u][((l^r[u])&d[u])>>>0];this._lBlock=l,this._rBlock=o^h}
// Undo swap from last round
var p=this._lBlock;this._lBlock=this._rBlock,this._rBlock=p,
// Final permutation
e.call(this,1,1431655765),i.call(this,8,16711935),i.call(this,2,858993459),e.call(this,16,65535),e.call(this,4,252645135),
// Set output
t[a]=this._lBlock,t[a+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});/**
						 * Shortcut functions to the cipher's object interface.
						 *
						 * @example
						 *
						 *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
						 *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
						 */
a.DES=r._createHelper(p);/**
						 * Triple-DES block cipher algorithm.
						 */
var f=o.TripleDES=r.extend({_doReset:function(){
// Shortcuts
var t=this._key,e=t.words;
// Create DES instances
this._des1=p.createEncryptor(s.create(e.slice(0,2))),this._des2=p.createEncryptor(s.create(e.slice(2,4))),this._des3=p.createEncryptor(s.create(e.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});/**
						 * Shortcut functions to the cipher's object interface.
						 *
						 * @example
						 *
						 *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
						 *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
						 */
a.TripleDES=r._createHelper(f)}(),t.TripleDES})},/* 17 */
/***/
function(t,e,i){!function(a,n,s){
// CommonJS
t.exports=e=n(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){function e(){
// Save old counter values
for(var t=this._X,e=this._C,i=0;i<8;i++)o[i]=e[i];
// Calculate new counter values
e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<o[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<o[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<o[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<o[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<o[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<o[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<o[6]>>>0?1:0)|0,this._b=e[7]>>>0<o[7]>>>0?1:0;
// Calculate the g-values
for(var i=0;i<8;i++){var a=t[i]+e[i],n=65535&a,s=a>>>16,r=((n*n>>>17)+n*s>>>15)+s*s,h=((4294901760&a)*a|0)+((65535&a)*a|0);
// High XOR low
l[i]=r^h}
// Calculate new state values
t[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,t[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,t[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,t[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,t[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,t[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,t[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,t[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}
// Shortcuts
var i=t,a=i.lib,n=a.StreamCipher,s=i.algo,r=[],o=[],l=[],h=s.Rabbit=n.extend({_doReset:function(){
// Swap endian
for(var t=this._key.words,i=this.cfg.iv,a=0;a<4;a++)t[a]=16711935&(t[a]<<8|t[a]>>>24)|4278255360&(t[a]<<24|t[a]>>>8);
// Generate initial state values
var n=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],s=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];
// Carry bit
this._b=0;
// Iterate the system four times
for(var a=0;a<4;a++)e.call(this);
// Modify the counters
for(var a=0;a<8;a++)s[a]^=n[a+4&7];
// IV setup
if(i){
// Shortcuts
var r=i.words,o=r[0],l=r[1],h=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),u=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8),c=h>>>16|4294901760&u,d=u<<16|65535&h;
// Modify counter values
s[0]^=h,s[1]^=c,s[2]^=u,s[3]^=d,s[4]^=h,s[5]^=c,s[6]^=u,s[7]^=d;
// Iterate the system four times
for(var a=0;a<4;a++)e.call(this)}},_doProcessBlock:function(t,i){
// Shortcut
var a=this._X;
// Iterate the system
e.call(this),
// Generate four keystream words
r[0]=a[0]^a[5]>>>16^a[3]<<16,r[1]=a[2]^a[7]>>>16^a[5]<<16,r[2]=a[4]^a[1]>>>16^a[7]<<16,r[3]=a[6]^a[3]>>>16^a[1]<<16;for(var n=0;n<4;n++)
// Swap endian
r[n]=16711935&(r[n]<<8|r[n]>>>24)|4278255360&(r[n]<<24|r[n]>>>8),
// Encrypt
t[i+n]^=r[n]},blockSize:4,ivSize:2});/**
						 * Shortcut functions to the cipher's object interface.
						 *
						 * @example
						 *
						 *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
						 *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
						 */
i.Rabbit=n._createHelper(h)}(),t.Rabbit})},/* 18 */
/***/
function(t,e,i){!function(a,n,s){
// CommonJS
t.exports=e=n(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){function e(){for(var t=this._S,e=this._i,i=this._j,a=0,n=0;n<4;n++){e=(e+1)%256,i=(i+t[e])%256;
// Swap
var s=t[e];t[e]=t[i],t[i]=s,a|=t[(t[e]+t[i])%256]<<24-8*n}
// Update counters
return this._i=e,this._j=i,a}
// Shortcuts
var i=t,a=i.lib,n=a.StreamCipher,s=i.algo,r=s.RC4=n.extend({_doReset:function(){for(var t=this._key,e=t.words,i=t.sigBytes,a=this._S=[],n=0;n<256;n++)a[n]=n;
// Key setup
for(var n=0,s=0;n<256;n++){var r=n%i,o=e[r>>>2]>>>24-r%4*8&255;s=(s+a[n]+o)%256;
// Swap
var l=a[n];a[n]=a[s],a[s]=l}
// Counters
this._i=this._j=0},_doProcessBlock:function(t,i){t[i]^=e.call(this)},keySize:8,ivSize:0});/**
						 * Shortcut functions to the cipher's object interface.
						 *
						 * @example
						 *
						 *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
						 *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
						 */
i.RC4=n._createHelper(r);/**
						 * Modified RC4 stream cipher algorithm.
						 */
var o=s.RC4Drop=r.extend({/**
							 * Configuration options.
							 *
							 * @property {number} drop The number of keystream words to drop. Default 192
							 */
cfg:r.cfg.extend({drop:192}),_doReset:function(){r._doReset.call(this);
// Drop
for(var t=this.cfg.drop;t>0;t--)e.call(this)}});/**
						 * Shortcut functions to the cipher's object interface.
						 *
						 * @example
						 *
						 *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
						 *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
						 */
i.RC4Drop=n._createHelper(o)}(),t.RC4})}])})},/* 365 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(22),o=(a(r),i(135)),l=a(o),h=i(366),u=a(h),c=i(95),d=a(c),p=function(){function t(e,i,a){n(this,t),this.game=e,this.level=i,this[a]()}return s(t,[{key:"map1",value:function(){var t=this;this.sleeping=!0,this.standUpApproval=!1,console.log(this.level.gameData.targetID),void 0!=this.level.gameData.targetID&&1!=this.level.gameData.targetID||(this.level.player.movable=!1,this.standUpApproval=!0,this.level.player.animations.play("sleep")),3==this.level.gameData.targetID&&this.level.player.animations.play("sleep"),this.level.questManager.checkIfQuestWasDone(1)?(this.branch=this.game.add.sprite(1131,1210,"branch"),this.branch.anchor.set(.5),this.bringBranchToTop=!1,this.branch.alpha=0):(this.branch=this.game.add.sprite(1131,1210,"branch"),this.branch.anchor.set(.5),this.bringBranchToTop=!0),this.level.questManager.checkIfQuestExists(2)&&(this.level.player.movable=!1),this.level.questManager.checkIfQuestWasDone(1)&&this.level.questManager.checkIfQuestExists(2)&&(this.game.time.events.add(1*Phaser.Timer.SECOND,function(){t.level.player.animations.play("standUpFast")},this),this.game.time.events.add(4*Phaser.Timer.SECOND,function(){t.level.inputClass.direction="up",t.level.player.animations.play("static_idle_up")},this),this.game.time.events.add(5*Phaser.Timer.SECOND,function(){for(var e=Object.values(d.default.dialogues),i=0;i<e.length;i++)if(i+1==1){var a=e[i];t.level.GUICLASS.createMessage(a,!1,!0);break}t.level.questManager.removeQuest(2),t.level.questManager.addQuest(3)},this)),this.level.questManager.checkIfQuestExists(2)?(this.game.camera.flash(0,1e4,!0),this.level.lucy=new l.default(this.game,this.level.player.x,this.level.player.y-500,this.level)):this.level.questManager.checkIfQuestWasDone(2)&&(this.level.lucy=new l.default(this.game,this.level.player.x,this.level.player.y-20,this.level))}},{key:"map1update",value:function(){var t=this;if(this.bringBranchToTop&&this.game.world.bringToTop(this.branch),void 0!==this.level.items[0]&&this.game.world.bringToTop(this.level.items[0]),this.game.world.bringToTop(this.level.templeFliesEmitter),this.game.world.bringToTop(this.level.fountainSparkling),this.level.inputClass.button_A.isDown||this.level.inputClass.button_D.isDown||this.level.inputClass.button_W.isDown||this.level.inputClass.button_S.isDown){if(!this.sleeping)return;if(!this.standUpApproval)return;this.sleeping=!1,this.level.player.animations.play("standUp"),this.level.player.animations._anims.standUp.onComplete.add(function(){t.level.player.movable=!0},this)}}},{key:"map2",value:function(){}},{key:"map2update",value:function(){this.game.world.bringToTop(this.level.emberEmitter)}},{key:"map3",value:function(){}},{key:"map3update",value:function(){this.game.world.bringToTop(this.level.fountainSparkling)}},{key:"map4",value:function(){this.templeDoor=this.game.add.sprite(253,-12,"templeDoor"),this.templeDoor.animations.add("open",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],18,!0),this.templeDoor.animations.add("idle",[39],1,!0),this.game.physics.enable(this.templeDoor),this.templeDoor.body.immovable=!0}},{key:"map4update",value:function(){
// this.game.world.setChildIndex(this.templeDoor, 10);
this.level.eventManager.templeDoorOpen?this.game.world.setChildIndex(this.templeDoor,1):(this.game.physics.arcade.collide(this.level.player,this.templeDoor),this.game.world.setChildIndex(this.templeDoor,10))}},{key:"map5",value:function(){}},{key:"map5update",value:function(){}},{key:"map6",value:function(){}},{key:"map6update",value:function(){}},{key:"map7",value:function(){}},{key:"map7update",value:function(){}},{key:"map8",value:function(){}},{key:"map8update",value:function(){}},{key:"map9",value:function(){var t=this;this.level.GUICLASS.healthBar.healthBarGroup.scale.setTo(1.5),this.level.GUICLASS.healthBar.healthBarGroup.x=0,this.level.GUICLASS.healthBar.healthBarGroup.y=-140,console.log(this.game.camera),this.deadSprouts=0,this.headGroup=this.game.add.group(),this.endBoss=this.game.add.sprite(497,0,"endBoss"),this.endBoss.scale.setTo(1.1,1),this.endBoss.anchor.set(.5),this.endBossNeck=this.game.add.sprite(472,-130,"endBossNeck"),this.endBossNeck.anchor.set(.5,0),
// this.endBossNeck.tint = 0xFF0000;
this.endBossHeadShadow=this.game.add.sprite(472,0,"endBossHeadShadow"),this.endBossHeadShadow.anchor.set(.5),this.endBossClaw1=this.game.add.sprite(370,-145,"endBossClaw1"),
// this.endBossClaw1.anchor.set(1, 0);
this.headGroup.add(this.endBossClaw1),
// this.endBossClaw1.anchor.set(3, 0);
// this.endBossClaw1.x += 100;
this.endBossClaw2=this.game.add.sprite(518,-145,"endBossClaw2"),
// this.endBossClaw2.anchor.set(0, 0);
this.headGroup.add(this.endBossClaw2),this.endBossHead=new u.default(this.game,472,-90,this.level.player,this),this.headGroup.add(this.endBossHead),this.headGroup.x=410,this.headGroup.y=400,this.headGroup.pivot.x=420,this.headGroup.pivot.y=420,
// this.headGroup.pivot.set(20);
this.headGroupIdle=this.game.add.tween(this.headGroup).to({y:this.headGroup.y+20},5e3,"Linear",!0,0,0,!0).loop(),this.bossMovement=this.game.add.tween(this.endBoss).to({y:this.endBoss.y+470},12e3,"Linear",!0,0,0,!1),this.game.camera.shake(.0015,12e3,!0),this.bossNeckMovement=this.game.add.tween(this.endBossNeck).to({y:this.endBossNeck.y+470},12e3,"Linear",!0,0,0,!1),this.game.camera.shake(.0015,12e3,!0),this.bossClaw1Movement=this.game.add.tween(this.endBossClaw1).to({y:this.endBossClaw1.y+470},12e3,"Linear",!0,0,0,!1),this.game.camera.shake(.0015,12e3,!0),this.bossClaw2Movement=this.game.add.tween(this.endBossClaw2).to({y:this.endBossClaw2.y+470},12e3,"Linear",!0,0,0,!1),this.game.camera.shake(.0015,12e3,!0),this.endBossHeadShadowMovement=this.game.add.tween(this.endBossHeadShadow).to({y:this.endBossHeadShadow.y+470},12e3,"Linear",!0,0,0,!1),this.game.camera.shake(.0015,12e3,!0),this.bossMovement.onComplete.add(function(){for(var e=0;e<t.level.enemies.length;e++){"sprout"==t.level.enemies[e].type&&(t.level.enemies[e].addLevelBuilder(t),t.level.enemies[e].grow()),t.game.add.tween(t.endBoss.scale).to({x:1.05,y:1},5e3,"Linear",!0,0,0,!0).loop()}},this),this.bossHeadMovement=this.game.add.tween(this.endBossHead).to({y:this.endBossHead.y+470},12e3,"Linear",!0,0,0,!1)}},{key:"map9update",value:function(){this.headGroup.rotation=(this.game.physics.arcade.angleToXY(this.headGroup,this.level.player.x,this.level.player.y)-1.5)/3,
// this.headGroup.rotation = (this.game.physics.arcade.angleToXY(this.endBossHead, this.level.player.x, this.level.player.y));
// this.headGroup.angle += 1;
// this.endBossHeadShadow.x = this.headGroup.x;
// this.endBossHeadShadow.y = this.headGroup.y;
this.endBossHeadShadow.rotation=this.headGroup.rotation,this.game.world.bringToTop(this.headGroup)}},{key:"map10",value:function(){this.bossDoor=this.game.add.sprite(321,960,"bossDoor"),this.game.physics.enable(this.bossDoor),this.bossDoor.body.immovable=!0,this.bossDoor.animations.add("open",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],8,!0),this.bossDoor.animations.add("close",[32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],8,!0),this.bossDoor.animations.add("idle",[32],1,!0)}},{key:"map10update",value:function(){this.level.eventManager.bossDoorOpen?this.game.world.setChildIndex(this.bossDoor,14):(this.game.physics.arcade.collide(this.level.player,this.bossDoor),this.game.world.setChildIndex(this.bossDoor,10)),this.game.world.bringToTop(this.level.templeFliesEmitter)}},{key:"map11",value:function(){}},{key:"map11update",value:function(){}},{key:"map12",value:function(){}},{key:"map12update",value:function(){}},{key:"map13",value:function(){}},{key:"map13update",value:function(){}},{key:"map14",value:function(){}},{key:"map14update",value:function(){}},{key:"map15",value:function(){}},{key:"map15update",value:function(){}},{key:"map16",value:function(){}},{key:"map16update",value:function(){}},{key:"map17",value:function(){}},{key:"map17update",value:function(){}},{key:"map18",value:function(){}},{key:"map18update",value:function(){}},{key:"map19",value:function(){}},{key:"map19update",value:function(){}},{key:"update",value:function(){this[this.level.currentMap+"update"]()}}]),t}();e.default=p},/* 366 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r,o){a(this,e);var h=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,"endBossHead"));h.game=t,h.player=r,h.levelBuilder=o,h.health=3,h.dead=!1,h.paralyze=!1,h.snapRunning=!1,
// this.anchor.setTo(0, 0.5);
h.anchor.setTo(.5),h.game.physics.enable(h),h.body.immovable=!0,h.body.setSize(130,130,50,30),h.weapon=t.add.weapon(400,"bulletBeam"),h.weapon.bulletKillType=l.default.Weapon.KILL_WORLD_BOUNDS,h.weapon.bulletSpeed=200,
// this.weapon.bulletCollideWorldBounds = true;
h.weapon.fireRate=100,h.weapon.bulletAngleVariance=90,h.weapon.bulletRotateToVelocity=!0,h.weapon.trackSprite(h,0,100,!0);for(var u=0;u<h.weapon.bullets.children.length;u++)h.weapon.bullets.children[u].body.bounce.set(.5),h.weapon.bullets.children[u].scale.setTo(2),h.weapon.bullets.children[u].smoothed=!1,h.game.add.tween(h.weapon.bullets.children[u]).to({tint:0},9e3,l.default.Easing.Exponential.In,!0,0,0,!0).loop();return t.add.existing(h),h}return s(e,t),r(e,[{key:"startHead",value:function(){var t=this,e=(this.game.time.events.loop(1,function(){t.weapon.fireAtXY(478,713)},this),this.game.add.emitter(this.weapon.x,this.weapon.y+30,200));
// explosion.fixedToCamera = true;
e.setAlpha(1,0,2e3,null,!1),
// explosion.setXSpeed(this.game.rnd.integerInRange(-100, 100));
e.gravity=10,e.setYSpeed(100),e.setXSpeed(-30,30),e.minParticleScale=2,e.makeParticles("bulletParticle"),e.start(!1,2e3,1)}},{key:"snap",value:function(){var t=this;this.snapRunning||(this.snapRunning=!0,this.snapTween=this.game.add.tween(this).to({y:this.y+150},400,l.default.Easing.Back.Out,!0,0,0,!0),this.snapTween=this.game.add.tween(this.levelBuilder.endBossHeadShadow).to({y:this.levelBuilder.endBossHeadShadow.y+150},400,l.default.Easing.Back.Out,!0,0,0,!0),this.snapClaw1Tween=this.game.add.tween(this.levelBuilder.endBossClaw1).to({y:this.levelBuilder.endBossClaw1.y+150},400,l.default.Easing.Back.Out,!0,0,0,!0),this.snapClaw2Tween=this.game.add.tween(this.levelBuilder.endBossClaw2).to({y:this.levelBuilder.endBossClaw2.y+150},400,l.default.Easing.Back.Out,!0,0,0,!0),this.rotateClaw1Tween=this.game.add.tween(this.levelBuilder.endBossClaw1).to({rotation:this.levelBuilder.endBossClaw1.rotation-.3},400,l.default.Easing.Back.Out,!0,0,0,!0),this.rotateClaw2Tween=this.game.add.tween(this.levelBuilder.endBossClaw2).to({rotation:this.levelBuilder.endBossClaw2.rotation+.3},400,l.default.Easing.Back.Out,!0,0,0,!0),this.snapTween=this.game.add.tween(this.levelBuilder.endBossNeck.scale).to({y:2},400,l.default.Easing.Back.Out,!0,0,0,!0),this.snapTween.onComplete.add(function(){t.game.time.events.add(3*l.default.Timer.SECOND,function(){t.snapRunning=!1})},this))}},{key:"hit",value:function(){this.game.camera.flash(12648448,600),
// this.levelBuilder.level.gameOver(1000);
this.game.state.restart(!0,!1)}},{key:"endBosshit",value:function(t,e){var i=this;this.game.camera.flash(12648448,200),t.tint=16711680,this.game.time.events.add(150,function(){t.tint=16777215}),this.game.camera.shake(.003,100),this.explosion=this.game.add.emitter(e.x,e.y,100),this.explosion.fixedToCamera=!0,this.explosion.setAlpha(1,0,2e3,null,!1),this.explosion.setXSpeed(this.game.rnd.integerInRange(-100,100)),this.explosion.gravity=150,this.explosion.setYSpeed(-100),this.explosion.makeParticles("blood",100),this.explosion.start(!0,0,null,100),this.game.time.events.add(2e3,function(){null!==i.explosion&&i.explosion.destroy()},this)}},{key:"reverse",value:function(t,e){t.body.velocity.x*=-1.8,t.body.velocity.y*=-3}},{key:"update",value:function(){this.game.physics.arcade.collide(this,this.player,this.hit,null,this),this.game.physics.arcade.collide(this.weapon.bullets,this.player.weapon.bullets,this.reverse,null,this),this.game.physics.arcade.collide(this.weapon.bullets,this,this.endBosshit,null,this),this.explosion&&this.game.world.bringToTop(this.explosion),this.distanceBetweenEnemiePlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenEnemiePlayer<200&&this.snap()}}]),e}(l.default.Sprite);e.default=h},/* 367 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=a(r);i(93);var l=i(22),h=a(l),u=i(94),c=a(u),d=i(368),p=a(d),f=i(133),m=a(f),g=i(95),y=a(g),v=i(134),b=a(v),w=function(){function t(e,i){var a=this;n(this,t),this.game=e,this.level=i,this.spawnEnemiesRunning=!1,this.templeDoorOpen=!1,this.bossDoorOpen=!1,this.spotViewerPlayed=!1,this.spotViewerPlayedSwitch=!1,this.areaSoundOnce=!1,this.lockCameraActive=!1,this.level.map.plus.physics.enableObjectLayer("Collision"),this.level.map.plus.events.regions.enableObjectLayer("Events"),this.level.map.plus.events.collisions.add(this.level.player,function(t,e,i,n){a.level.inputClass.collision=!0,a.game.time.events.add(500,function(){a.level.inputClass.collision=!1})});for(var s=0;s<this.level.player.weaponGun.bullets.children.length;s++)!function(){var t=a.level.player.weaponGun.bullets.children[s];a.level.map.plus.events.collisions.add(t,function(e,i,n,s){a.game.camera.shake(.003,100);var r=a.game.add.emitter(t.x,t.y,100);r.fixedToCamera=!0,r.setAlpha(1,0,2e3,null,!1),r.setXSpeed(a.game.rnd.integerInRange(-100,100)),r.gravity=150,r.setYSpeed(-100),r.makeParticles("bulletParticle",100),r.start(!0,0,null,10),a.game.time.events.add(2e3,function(){r.destroy()},a),t.kill()})}();this.level.map.plus.events.regions.onEnterAdd(this.level.player,function(t){t.properties.message?a.message(t):t.properties.addBridge?a.addBridge(t):t.properties.removeBridge?a.removeBridge(t):t.properties.pathfinderMessage?a.pathfinderMessage(t):t.properties.port?a.port(t):t.properties.fightArea?a.fightArea(t):t.properties.showQuestmap?a.showQuestmap(t):t.properties.startMusic?a.startMusic(t):t.properties.addQuest?a.addQuest(t):t.properties.openTempleDoor?a.openTempleDoor(t):t.properties.movePlayerToXY?a.movePlayerToXY(t):t.properties.spawnEnemies?a.spawnEnemies(t):t.properties.lockCamera?a.lockCamera(t):t.properties.foreGroundShift?a.foreGroundShift(t):t.properties.stairs?a.stairs(t):t.properties.soundArea?a.soundArea(t):t.properties.quickSave?a.quickSave(t):t.properties.branch?a.branch(t):t.properties.openBossDoor?a.openBossDoor(t):t.properties.spotViewer?a.spotViewer(t):t.properties.alternateLockCamera?a.alternateLockCamera(t):t.properties.soundAreaDog&&a.soundAreaDog(t)}),this.level.map.plus.events.regions.onLeaveAdd(this.level.player,function(t){t.properties.lockCamera?a.followPlayer(t):t.properties.foreGroundShift?a.foreGroundReset(t):t.properties.stairs?a.stairsLeave(t):t.properties.soundArea?a.soundAreaLeave(t):t.properties.openBossDoor?a.closeBossDoor(t):t.properties.spotViewer?a.followPlayer(t):t.properties.alternateLockCamera&&a.alternateFollowPlayer(t)})}return s(t,[{key:"message",value:function(t){var e=t.properties.id,i=Object.values(y.default.dialogues),a=t.properties.ifQuestID,n=t.properties.removeQuestID,s=t.properties.addQuestID;if((this.level.questManager.checkIfQuestExists(a)||void 0===a)&&!this.level.questManager.checkIfQuestWasDone(a)){console.log("New QuestID: "+s),void 0!==s&&this.level.questManager.addQuest(s),void 0!==n&&this.level.questManager.removeQuest(n);for(var r=0;r<i.length;r++)if(r+1==e){
// if (region.properties.removeQuestID !== undefined) {
// 	this.level.questManager.removeQuest(region.properties.removeQuestID);
// }
// if (this.level.questManager.checkIfQuestExists(region.properties.questID)) return;
// this.level.questManager.addQuest(region.properties.questID);
// this.level.GUICLASS.createNotification('quest', 'Questupdate');
var o=i[r];this.level.GUICLASS.createMessage(o,t.properties.movable,t.properties.readable);break}}}},{key:"addBridge",value:function(t){var e=t.properties.id,i=t.properties.requiredItemID,a=t.properties.requiredMasteredQuestID;(this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===a)&&(this.level.activatedBridges.includes(e)||(void 0===i||this.level.itemIDs.includes(i))&&(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),void 0!==t.properties.addQuestID&&this.level.questManager.checkIfQuestExists(t.properties.addQuestID)&&this.level.questManager.checkIfQuestWasDone(t.properties.addQuestID)&&this.level.questManager.addQuest(t.properties.addQuestID),this.level.bridgebuilder=new p.default(this.game,t,this.level.player,this.level.map,this.level.groundLayer,this.level.collisionLayer),this.level.bridgebuilder.buildBridge(),this.level.activatedBridges.push(e)))}},{key:"removeBridge",value:function(t){var e=this,i=t.properties.id,a=t.properties.requiredMasteredQuestID;(this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===a)&&(this.level.activatedBridges.includes(i)||(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),this.bridgebuilderRemove=new p.default(this.game,t,this.level.player,this.level.map,this.level.groundLayer,this.level.collisionLayer),
// If Wait -> Wait
void 0!==t.properties.wait?this.game.time.events.add(t.properties.wait,function(){e.bridgebuilderRemove.removeBridge()}):this.bridgebuilderRemove.removeBridge(),this.level.activatedBridges.push(i)))}},{key:"movePlayerToXY",value:function(t){var e=t.properties.targetX,i=t.properties.targetY;void 0==this.level.movePlayerPathfinder&&(this.level.movePlayerPathfinder=new c.default(this.game,this.level.map,this.level.player,{x:e,y:i},this.level.groundLayer,!1,400)),
// this.level.player.animations.stop();
this.level.player.animations.play("walk_up",19,!0)}},{key:"pathfinderMessage",value:function(t){var e=this,i=t.properties.characterID,a=t.properties.ifQuestID;if(this.level.questManager.checkIfQuestExists(a)||void 0===a){
// if (!this.level.questManager.checkIfQuestWasDone(region.properties.requiredMasteredQuestID) &&
// 	requiredMasteredQuestID !== undefined
// ){
// 	return;
// }
for(var n=0;n<this.level.characters.length;n++)this.level.characters[n].id==i?(this.pathfinderCharacter=this.level.characters[n],this.pathfinderCharacter.stopIdleLoop()):console.warn("Character not found!");void 0==this.level.pathfinder&&(this.pathfinderCharacter.animations.play("walk_down",25),this.level.pathfinder=new c.default(this.game,this.level.map,this.pathfinderCharacter,{x:this.level.player.x,y:this.level.player.y-50},this.level.EnemyMovingTiles,!0,400),
// this.game.camera.follow(this.level.characters[0], Phaser.Camera.FOLLOW_LOCKON, 0.08, 0.08);
this.followTarget(this.level.characters[0]),this.level.player.movable=!1,
//1641
this.game.time.events.add(o.default.Timer.SECOND*t.properties.messageWaitingDuration,function(){
// ORIGINAL
e.level.game.camera.follow(e.level.player,o.default.Camera.FOLLOW_LOCKON,.08,.08),
// this.level.game.camera.follow(this.level.player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
e.level.player.movable=!0,e.level.player.animations.play("idle_up");
/////////////////
// // get all dialogues
// const all_messages = Object.values(dialoguesVillager.dialogues);
// // search for dialogue
// for (let i = 0; i < all_messages.length; i++) {
// 	if (i + 1 == dialogueID) {
// 		const message = all_messages[i];
// 		this.level.GUICLASS.createMessage(message, false, true);
// 		break;
// 	}
// }
// /////////////////
for(var i=t.properties.characterName,a=e.level.questManager.checkQuestDialogue(i),n=a[0],s=Object.values(b.default.dialogues),r=0;r<s.length;r++)if(r+1==n){var l=s[r];e.level.GUICLASS.createMessage(l,t.properties.movable,t.properties.readable),e.game.time.events.add(8*o.default.Timer.SECOND,function(){"currentPosition"!==t.properties.endDestinationX&&"currentPosition"!==t.properties.endDestinationY&&(e.endDestinationX=t.properties.endDestinationX,e.endDestinationY=t.properties.endDestinationY,e.pathfinderCharacter.animations.play("walk_up"),e.level.pathfinder=new c.default(e.game,e.level.map,e.pathfinderCharacter,{x:e.endDestinationX,y:e.endDestinationY},e.level.EnemyMovingTiles,!0,400)),console.log(t.properties.removeQuestID),void 0!==t.properties.removeQuestID&&e.level.questManager.removeQuest(t.properties.removeQuestID),e.level.questManager.checkIfQuestExists(t.properties.questID)||(e.level.questManager.addQuest(t.properties.questID),e.level.GUICLASS.createNotification("quest","Questupdate"))});break}},this))}}},{key:"quickSave",value:function(t){var e=t.properties.targetID,i=t.properties.direction;this.level.gameData.targetID=e,this.level.gameData.direction=i,this.level.safe.setGameConfig(this.level.gameData)}},{key:"port",value:function(t){var e=t.properties.targetMap,i=t.properties.targetID,a=t.properties.direction;h.default.buildMode=!1,this.level.inputClass.stick&&(this.level.inputClass.stick.alpha=0,this.level.inputClass.stick.enabled=!1),void 0!==this.level.sfxheartbeat&&this.level.sfxheartbeat.isPlaying&&this.level.sfxheartbeat.stop(),this.level.gameData.currentMap=e,this.level.gameData.targetID=i,this.level.gameData.direction=a,this.level.safe.setGameConfig(this.level.gameData),console.log("TargetMap: "+e),this.level.inputClass.pyfootsteps&&this.level.inputClass.pyfootsteps.stop("gravel1"),this.game.state.restart(!0,!1,{map:e,targetID:i,direction:a})}},{key:"fightArea",value:function(){this.game.add.tween(this.level.groundLayer).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0),this.game.add.tween(this.level.backgroundLayer).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0),this.game.add.tween(this.level.player).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0);for(var t=0;t<this.level.enemies.length;t++)this.game.add.tween(this.level.enemies[t]).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0)}},{key:"showQuestmap",value:function(){this.level.GUICLASS.createQuestmap()}},{key:"addQuest",value:function(t){this.level.questManager.checkIfQuestExists(t.properties.questID)||this.level.questManager.checkIfQuestWasDone(t.properties.questID)||(this.level.questManager.addQuest(t.properties.questID),this.level.GUICLASS.createNotification("quest","Questupdate"))}},{key:"openTempleDoor",value:function(){var t=this;if(2==this.level.gameData.targetID)this.level.levelBuilder.templeDoor.animations.play("idle",1,!0);else{
// if(!this.level.questManager.checkIfQuestExists(20)) return;
if(this.templeDoorOpen)return;this.doorOpenSound=this.game.add.audio("sfxTempleDoor"),this.doorOpenSound.play(),this.level.levelBuilder.templeDoor.animations.play("open",12,!1),this.game.camera.shake(.001,3700,!0),this.level.levelBuilder.templeDoor.animations._anims.open.onComplete.add(function(){t.templeDoorOpen=!0},this)}}},{key:"spawnEnemies",value:function(t){
// Prevent from always spawning when triggering event!
if(!this.spawnEnemiesRunning&&!this.level.questManager.checkIfQuestWasDone(t.properties.questID)){this.spawnEnemiesRunning=!0,this.level.questManager.checkIfQuestExists(t.properties.questID)||this.level.questManager.addQuest(t.properties.questID);for(var e=0;e<t.properties.amount;e++){var i=this.game.rnd.integerInRange(0,1),a=this.game.rnd.integerInRange(0,1),n=i?t.left:t.right,s=a?t.top:t.bottom;
// const x = this.game.rnd.integerInRange(region.left, region.right);
// const y = this.game.rnd.integerInRange(region.top, region.bottom);
this.level.enemies.push(new m.default(this.game,n,s,this.level.player,this.level.map,this.level.groundLayer,t.properties))}}}},{key:"lockCamera",value:function(t){var e=t.right-t.left,i=t.bottom-t.top,a=t.left+e/2,n=t.bottom-i/2;
// if(this.level.questManager.checkIfQuestWasDone(1) && !this.level.questManager.checkIfQuestWasDone(2)) return;
console.log(this.level.gameData.currentMap),void 0==this.level.gameData.currentMap?this.transitionTime=1:"map3"==this.level.gameData.currentMap&&2==this.level.gameData.targetID&&2==t.properties.id?this.transitionTime=1:this.transitionTime=2e3,void 0!==t.properties.fast&&t.properties.fast&&(this.lockCameraActive||(this.transitionTime=1,this.lockCameraActive=!0)),console.log(t),this.game.camera.unfollow(),this.game.add.tween(this.game.camera).to({x:a-this.game.camera.width/2,y:n-this.game.camera.height/2},this.transitionTime,o.default.Easing.Quadratic.InOut,!0)}},{key:"followTarget",value:function(t,e){var i=this;this.followDuration=e||2e3,this.followTween=this.game.add.tween(this.game.camera).to({x:t.x-this.game.camera.width/2-20,y:t.y-this.game.camera.height/2},this.followDuration,o.default.Easing.Quadratic.InOut,!0),this.followTween.onComplete.add(function(){
// ORIGINAL
// this.game.camera.follow(target, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT, 0.07, 0.07);
i.game.camera.follow(t,o.default.Camera.FOLLOW_FOLLOW,1,1)},this)}},{key:"followPlayer",value:function(t,e){var i=this;
// this.followDuration = duration  || 1000;
this.followDuration=e||2e3,this.followTween=this.game.add.tween(this.game.camera).to({x:this.level.player.x-this.game.camera.width/2,y:this.level.player.y-this.game.camera.height/2+30},this.followDuration,o.default.Easing.Quadratic.InOut,!0),this.followTween.onComplete.add(function(){switch(i.level.tilemapProperties.cameraMode){case"follow":i.game.camera.follow(i.level.player,o.default.Camera.FOLLOW_LOCKON,.025,.025);
// this.game.camera.follow(this.level.player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
break;case"topdown":
// ORIGINAL
// this.game.camera.follow(this.level.player, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT, 0.07, 0.07);
i.game.camera.follow(i.level.player,o.default.Camera.FOLLOW_LOCKON,1,1);break;default:console.warn("Default Camera Mode!"),i.game.camera.follow(i.level.player,o.default.Camera.FOLLOW_LOCKON,1,1)}},this)}},{key:"startMusic",value:function(){this.level.muteMusic||this.game.musicPlayer.initMap(this.level.tilemapProperties,!0,1e4)}},{key:"foreGroundShift",value:function(){this.level.foreGroundShift=!0}},{key:"foreGroundReset",value:function(){this.level.foreGroundShift=!1}},{key:"stairs",value:function(){
// Return on Fall Down
this.level.fallDown||(
// Clear and set new Loop-Speed
this.game.time.events.remove(this.level.inputClass.movementloop),this.level.inputClass.movementloop=null,this.level.inputClass.movementloopSpeed=190,this.level.inputClass.addMovementSound(),
// Set new Sound-Type
this.level.inputClass.movementSound="grass1",
// Set Player-Speed
this.level.inputClass.playerSpeed-=20,
// Set Animation Speed
this.level.player.animations._anims.run_up.speed+=13,this.level.player.animations._anims.run_down.speed+=13,this.level.player.animations._anims.run_left.speed+=8,this.level.player.animations._anims.run_right.speed+=8)}},{key:"soundAreaDog",value:function(t){void 0!==this.voiceDog&&this.voiceDog.isPlaying||(this.rndVoiceDog=this.game.rnd.pick(["vx1","vx2","vx3","vx4","vx5","vx6","vx7","vx8"]),this.voiceDog=this.game.add.audioSprite("VxDog"),this.voiceDog.play(this.rndVoiceDog,.3))}},{key:"stairsLeave",value:function(){
// Return on Fall Down
this.level.fallDown||(
// Clear and set new Loop-Speed
this.game.time.events.remove(this.level.inputClass.movementloop),this.level.inputClass.movementloop=null,this.level.inputClass.movementloopSpeed=this.level.inputClass.movementloopSpeedDefault,this.level.inputClass.addMovementSound(),
// Set new Sound-Type
this.level.inputClass.movementSound=this.level.map.plus.properties.ground,
// Set Player-Speed
this.level.inputClass.playerSpeed=this.level.inputClass.playerSpeedDefault,
// Set Animation Speed
this.level.player.animations._anims.run_down.speed=19,this.level.player.animations._anims.run_up.speed=19,this.level.player.animations._anims.run_left.speed=19,this.level.player.animations._anims.run_right.speed=19)}},{key:"soundArea",value:function(t){t.properties.nightMode&&this.level.night||t.properties.once&&this.areaSoundOnce||(this.areaSoundOnce=!0,this.areaSound=this.game.add.audio(t.properties.soundkey),void 0!==t.properties.fadeDuration?this.areaSound.fadeIn(t.properties.fadeDuration,!0):this.areaSound.fadeIn(4e3,!0))}},{key:"soundAreaLeave",value:function(t){t.properties.nightMode&&this.level.night||this.areaSound.fadeOut(500)}},{key:"soundAreaVillager",value:function(t){}},{key:"soundAreaVillagerLeave",value:function(t){this.areaSound.fadeOut(4e3)}},{key:"branch",value:function(t){var e=this;this.level.questManager.checkIfQuestWasDone(1)||(this.game.musicPlayer.fadeOut(),this.level.GUICLASS.healthBar.fadeOut(),this.level.levelBuilder.branch.alpha=1,this.gameOverSound=this.game.add.audio("sfxGameOver"),this.gameOverSound.play(),
// this.followPlayer(null, 4000);
this.level.questManager.addQuest(1),this.level.questManager.removeQuest(1),this.level.questManager.addQuest(2),this.level.GUICLASS.healthBar.removeHeart(5,!1),this.level.player.health=2,this.level.gameData.playerHealth=2,this.level.safe.setGameConfig(this.level.gameData),
// this.game.camera.follow(this.level.player, Phaser.Camera.FOLLOW_LOCKON, 0.01, 0.01);
// this.level.GUICLASS.createMessage([' WTF?'], false, true);
this.level.player.movable=!1,this.branchTween=this.game.add.tween(this.level.levelBuilder.branch).to({y:this.level.player.y-20,angle:this.level.levelBuilder.branch.angle+10},500,o.default.Easing.Bounce.Out,!0,0,0,!1),this.game.time.events.add(250,function(){e.level.player.animations.play("die"),e.game.camera.shake(.015,500,!0),e.game.camera.flash(12648448,400,!0)},this),this.game.time.events.add(2e3,function(){e.game.add.tween(e.level.levelBuilder.branch).to({alpha:0},250,o.default.Easing.Bounce.Out,!0),e.game.canvas.classList.add("greyscale"),e.level.gameOver(),e.game.time.events.add(5e3,function(){e.game.camera.fade(0,5e3,!0)},e)},this),this.game.time.events.add(13e3,function(){e.game.canvas.classList.remove("greyscale"),e.game.state.restart(!0,!1)},this))}},{key:"openBossDoor",value:function(){var t=this;this.level.questManager.checkIfQuestExists(43)&&(this.bossDoorOpen||(this.doorOpenSound=this.game.add.audio("sfxstonedoor"),this.level.levelBuilder.bossDoor.animations._anims.close.isPlaying||(this.doorOpenSound.play(),this.game.camera.shake(.0015,2500,!0),this.level.levelBuilder.bossDoor.play("open",15,!1)),this.level.levelBuilder.bossDoor.animations._anims.open.onComplete.add(function(){t.bossDoorOpen=!0},this)))}},{key:"closeBossDoor",value:function(){}},{key:"spotViewer",value:function(t){var e=this;if((void 0===t.properties.ifQuestID||this.level.questManager.checkIfQuestExists(t.properties.ifQuestID))&&!this.spotViewerPlayedSwitch){this.spotViewerPlayed=!0,this.spotViewerPlayedSwitch=!0;var i=t.properties.focusX,a=t.properties.focusY,n=t.properties.addQuestID,s=t.properties.removeQuestID;if(void 0!==n&&this.level.questManager.addQuest(n),void 0!==s&&this.level.questManager.removeQuest(s),void 0!==t.properties.messageID)for(var r=Object.values(y.default.dialogues),l=0;l<r.length;l++)if(l+1==t.properties.messageID){var h=r[l];this.level.GUICLASS.createMessage(h,t.properties.movable,t.properties.readable);break}this.game.camera.unfollow(),this.level.player.movable=!1;
// BARS
var u=this.game.camera.width,c=this.game.add.bitmapData(u,20);c.ctx.beginPath(),c.ctx.rect(0,0,u,20),c.ctx.fillStyle="#000000",c.ctx.globalAlpha=1,c.ctx.fill(),this.level.GUICLASS.healthBar.fadeOut(),this.upperBar=this.game.add.sprite(this.game.camera.width/2-c.width/2,this.game.camera.height,c),this.upperBar.fixedToCamera=!0,this.downBar=this.game.add.sprite(this.game.camera.width/2-c.width/2,this.game.camera.height-this.game.camera.height-20,c),this.downBar.fixedToCamera=!0,this.game.add.tween(this.upperBar.cameraOffset).to({y:this.upperBar.y-20},1e3,o.default.Easing.Linear.None,!0),this.downBarTween=this.game.add.tween(this.downBar.cameraOffset).to({y:this.downBar.y+20},1e3,o.default.Easing.Linear.None,!0),this.downBarTween.onComplete.add(function(){e.game.add.tween(e.game.camera).to({x:i-e.game.camera.width/2,y:a-e.game.camera.height/2},2e3,o.default.Easing.Quadratic.InOut,!0)},this),this.game.time.events.add(4e3,function(){e.level.player.movable=!0,e.upperBarTween=e.game.add.tween(e.upperBar.cameraOffset).to({y:e.game.camera.height},1e3,o.default.Easing.Linear.None,!0),e.downBarTween=e.game.add.tween(e.downBar.cameraOffset).to({y:e.game.camera.height-e.game.camera.height-20},1e3,o.default.Easing.Linear.None,!0),e.upperBarTween.onComplete.add(function(){this.upperBar.destroy(),this.downBar.destroy(),this.upperBar=!1,this.spotViewerPlayed=!1,this.followPlayer(),this.level.GUICLASS.healthBar.fadeIn()},e)},this)}}},{key:"alternateLockCamera",value:function(t){var e=this;this.game.time.events.add(t.properties.timer,function(){e.game.camera.unfollow()})}},{key:"alternateFollowPlayer",value:function(t){this.game.camera.follow(this.level.player,o.default.Camera.FOLLOW_LOCKON,.025,.025)}}]),t}();e.default=w},/* 368 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=function(){function t(e,i,n,s,r,o){a(this,t),this.game=e,this.player=n,this.map=s,this.groundLayer=r,this.collisionLayer=o,this.region=i,this.bridgeSound=this.game.add.audio("sfxBridge",1),this.bridgeSound.allowMultiple=!0}return n(t,[{key:"buildBridge",value:function(){var t=this,e=this.region.properties.direction,i=this.region.properties.length,a=this.region.properties.duration;a<100&&(this.bridgeSound.volume=0),this.bridgeX=this.groundLayer.getTileX(this.region.left)+1,this.bridgeY=this.groundLayer.getTileY(this.region.top),this.collX=this.collisionLayer.getTileX(this.region.left)+1,this.collY=this.collisionLayer.getTileY(this.region.top),console.log(this.collX);var n=0,s=setInterval(function(){"up"==e?(t.bridgeY--,t.collY--,t.bridgeSound.play(),
// if("vibrate" in window.navigator) {
// 	window.navigator.vibrate(100);
// }
t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX-1,t.collY,t.collisionLayer),
// let currentTile = this.map.getTile(this.collX, this.collY, this.groundLayer);
// console.log(currentTile);
// let currentTileIndex = currentTile.index;
// if(currentTileIndex !== 36){
n+1==i?(t.map.putTile(2656,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2652,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(2656,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(2652,t.bridgeX-1,t.bridgeY+1,t.groundLayer)):(t.map.putTile(2557,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2555,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(2656,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(2652,t.bridgeX-1,t.bridgeY+1,t.groundLayer))):"down"==e?(t.bridgeY++,t.collY++,t.bridgeSound.play(),
// this.map.putTile(48, this.bridgeX, this.bridgeY, this.groundLayer);
// this.map.putTile(47, this.bridgeX - 1, this.bridgeY, this.groundLayer);
// this.map.putTile(37, this.bridgeX, this.bridgeY-1, this.groundLayer);
// this.map.putTile(38, this.bridgeX - 1, this.bridgeY-1, this.groundLayer);
t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX-1,t.collY,t.collisionLayer),n+1==i?(t.map.putTile(2656,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2652,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(2656,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(2652,t.bridgeX-1,t.bridgeY+1,t.groundLayer)):(t.map.putTile(2656,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2652,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(2676,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(2672,t.bridgeX-1,t.bridgeY+1,t.groundLayer))):"left"==e?(console.log("HEY"),t.bridgeX--,t.collX--,t.bridgeSound.play(),t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX,t.collY-1,t.collisionLayer),t.map.putTile(22,t.bridgeX,t.bridgeY+1,t.groundLayer)):"right"==e&&(t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX,t.collY-1,t.collisionLayer),t.map.putTile(22,t.bridgeX,t.bridgeY+1,t.groundLayer),t.bridgeX++,t.collX++,t.bridgeSound.play()),t.game.camera.shake(.0015,a),++n===i&&clearInterval(s)},a)}},{key:"removeBridge",value:function(){var t=this;console.log("remove bridge");var e=this.region.properties.direction,i=this.region.properties.length,a=this.region.properties.duration,n=this.region.properties.width;console.log(a),
// const putBackgroundTile = this.region.properties.putBackgroundTile;
this.bridgeX=this.groundLayer.getTileX(this.region.left)+1,this.bridgeY=this.groundLayer.getTileY(this.region.top),this.collX=this.collisionLayer.getTileX(this.region.left)+1,this.collY=this.collisionLayer.getTileY(this.region.top);var s=0,r=setInterval(function(){if("up"==e){t.bridgeY--,t.collY--,t.bridgeSound.play(),console.log("REMOVE");
// this.map.putTile(3, this.bridgeX, this.bridgeY, this.collisionLayer);
// this.map.putTile(3, this.bridgeX - 1, this.bridgeY, this.collisionLayer);
// this.map.removeTile(this.collX, this.collY, this.groundLayer);
// this.map.removeTile(this.collX - 1, this.collY, this.groundLayer);
for(var o=0;o<n;o++)console.log(o),t.map.putTile(3,t.bridgeX-n+o,t.bridgeY,t.collisionLayer),t.map.putTile(3,t.bridgeX+o,t.bridgeY,t.collisionLayer),t.map.removeTile(t.collX-n+o,t.collY,t.groundLayer),t.map.removeTile(t.collX+o,t.collY,t.groundLayer)}else"down"==e?(console.log(s,i),t.bridgeY++,t.collY++,t.bridgeSound.play(),t.map.putTile(3,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(3,t.bridgeX-1,t.bridgeY,t.collisionLayer),0==s?(t.map.putTile(36,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(36,t.bridgeX-1,t.bridgeY,t.groundLayer)):(t.map.putTile(3,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(3,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(49,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(49,t.bridgeX-1,t.bridgeY+1,t.groundLayer))):"left"==e?(t.bridgeX--,t.collX--,t.bridgeSound.play(),t.map.putTile(2,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX,t.collY-1,t.groundLayer)):"right"==e&&(t.bridgeX++,t.collX++,t.bridgeSound.play(),t.map.putTile(2,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX,t.collY-1,t.groundLayer));t.game.camera.shake(.0015,a),++s===i&&clearInterval(r)},a)}}]),t}();e.default=s},/* 369 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(370),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e,i){a(this,t),this.game=e,this.level=i}
// Add quest with properties
return n(t,[{key:"addQuest",value:function(t){
// Get Quests
this.quests=this.level.safe.getQuests(),this.quests[t]=r.default.quests[t],console.table(this.quests),
// Set and overwrite Quests
this.level.safe.setQuests(this.quests)}},{key:"removeQuest",value:function(t){
// Get Quests
this.quests=this.level.safe.getQuests(),
// Delete questItem
delete this.quests[t],
// Push the saved quest to masteredQuests
this.quests.masteredQuests.push(t),
// Set and overwrite Quests
this.level.safe.setQuests(this.quests)}},{key:"getQuestByID",value:function(t){return r.default.quests[t]}},{key:"checkIfQuestExists",value:function(t){
// Check if questID in quests
// Get Quests
return this.quests=this.level.safe.getQuests(),t in this.quests}},{key:"checkIfQuestWasDone",value:function(t){
// Check if masteredQuestID in masteredQuests
// Get Quests
return this.quests=this.level.safe.getQuests(),!!this.quests.masteredQuests.includes(t)}},{key:"checkQuestDialogue",value:function(t){
// Get Quests
this.quests=this.level.safe.getQuests();
// Return Dialogue Array
for(var e=Object.values(this.quests),i=e.reverse(),a=0;a<i.length;a++)if(0!=a&&i[a].dialogues[t])return i[a].dialogues[t];return!1}},{key:"checkKillCondition",value:function(t){
// Get Quests
this.quests=this.level.safe.getQuests(),
// Get searched quest
t in this.quests&&(console.log(this.quests[t].questDeadEnemies,this.quests[t].questKillEnemyAmount),console.log(this.quests[t].questDeadEnemies==this.quests[t].questKillEnemyAmount),
// Current Quest -> questDeadEnemies + 1
this.quests[t].questDeadEnemies+=1,
// Save the change
this.level.safe.setQuests(this.quests),
// if questDeadEnemies == questKillEnemyAmount (current dead enemies == needed deaths)
this.quests[t].questDeadEnemies==this.quests[t].questKillEnemyAmount&&(
// Add new Quest
this.addQuest(this.quests[t].fightFinishAddQuestID),
//Remove current Quest
this.removeQuest(t),
// Create Notification
this.level.GUICLASS.createNotification("success","Questupdate")))}}]),t}();e.default=o},/* 370 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={quests:{
// Not Set
1:{silent:!1,questMessage:"",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Branch falls down
2:{silent:!0,questMessage:"",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// First Lucy Dialogue
3:{silent:!1,questMessage:"Talk to Lucy!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Dash Tutorial
4:{silent:!1,questMessage:"Try to dash!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Dash Try it again!
5:{silent:!1,questMessage:"Great! Try it again!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Lucy Intro Forest
6:{silent:!1,questMessage:"Find the village!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Find the Box
7:{silent:!1,questMessage:"Search for a helpful item",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Open the box
8:{silent:!1,questMessage:"Try to open the box",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Go back to the bridge
9:{silent:!1,questMessage:"Go back to the bridge!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Find the village!
10:{silent:!1,questMessage:"Find the village!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Tutorial Kill All Seeds
11:{silent:!1,questMessage:"Kill all enemies!",questKillEnemyType:"seed",questKillEnemyAmount:3,questKillEnemyMap:"map11",questDeadEnemies:0,fightFinishAddQuestID:12,dialogues:{}},12:{silent:!1,questMessage:"Find the village!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},13:{silent:!1,questMessage:"Enter the village!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
priest:[11,14,13]}},14:{silent:!1,questMessage:"Kill all enemies!",questKillEnemyType:"seed",questKillEnemyAmount:9,questKillEnemyMap:"map2",questDeadEnemies:0,fightFinishAddQuestID:15,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
librarian:[35,!1,!1],veteran:[34,!1,!1],smith:[36,!1,!1],girl1:[37,!1,!1],girl2:[38,!1,!1],girl3:[39,!1,!1],woman2:[40,!1,!1],botanist:[33,!1,!1]}},15:{silent:!1,questMessage:"Talk to the priest!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
priest:[12,16,15]}},16:{silent:!1,questMessage:"Talk to the villager!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
woman2:[13,17,!1],botanist:[21,18,!1],girl3:[24,19,!1]}},17:{silent:!1,questMessage:"Find the fishing rod!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
woman2:[13,!1,!1],fisher:[15,21,17]}},18:{silent:!1,questMessage:"Get the flowers",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},19:{silent:!1,questMessage:"Find the doll!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},20:{silent:!1,questMessage:"Return the doll!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
girl3:[25,!1,20]}},21:{silent:!1,questMessage:"Talk with the smith!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
fisher:[15,!1,!1],smith:[19,22,21],woman2:[13,!1,!1]}},22:{silent:!1,questMessage:"Get weed!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
fisher:[15,!1,!1],
// Nur zeitweise
smith:[41,23,22],woman2:[13,!1,!1]}},23:{silent:!1,questMessage:"Return weed!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
fisher:[15,!1,!1],smith:[20,24,23],woman2:[13,!1,!1]}},24:{silent:!1,questMessage:"Return spear!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
fisher:[16,25,24],woman2:[13,!1,!1]}},25:{silent:!1,questMessage:"Return Fishing Rod!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
woman2:[14,26,25]}},26:{silent:!0,questMessage:"Return Fish!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
fisher:[17,!1,26]}},
// Description
27:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
28:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
29:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
30:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
31:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
32:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
33:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
34:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
35:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
36:{silent:!1,questMessage:"Talk with Viden!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
botanist:[26,37,36]}},
// Description
37:{silent:!1,questMessage:"Free Reya!",questKillEnemyType:"seed",questKillEnemyAmount:6,questKillEnemyMap:"map11",questDeadEnemies:0,fightFinishAddQuestID:38,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
girl3:[27,!1,!1],botanist:[26,!1,!1]}},
// Description
38:{silent:!1,questMessage:"Talk with Reya!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
girl3:[28,39,38]}},
// Description
39:{silent:!1,questMessage:"Talk with Coppus!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
smith:[29,40,39]}},
// Talk with the Priest
40:{silent:!1,questMessage:"Talk to the priest!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
priest:[30,41,40]}},
// Description
41:{silent:!1,questMessage:"Enter the temple!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
priest:[30,!1,!1],woman1:[31,42,41]}},
// Description
42:{silent:!1,questMessage:"Talk to the oracle!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{
// [dialogueID, newQuestID, removeQuestID] no value -> false
oracle:[32,43,42]}},
// Description
43:{silent:!1,questMessage:"Find and Kill the boss!",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
44:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
45:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}},
// Description
46:{silent:!1,questMessage:"Questmessage",questKillEnemyType:!1,questKillEnemyAmount:!1,questKillEnemyMap:!1,questDeadEnemies:0,dialogues:{}}}}},/* 371 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=a(r),l=i(22),h=(a(l),function(){function t(e,i){n(this,t),this.game=e,this.level=i,this.night=!1,this.darkness=.9,this.createDayCycle()}return s(t,[{key:"createDayCycle",value:function(){if(this.level.dayCycle){if(this.shadowTexture=this.game.add.bitmapData(this.game.width+200,this.game.height+200),this.lightSprite=this.game.add.image(this.game.camera.x,this.game.camera.y,this.shadowTexture),this.time=new Date,
// this.timeValue = 11;
this.timeValue=this.time.getHours(),this.timeValue>=0&&this.timeValue<6)console.log("Night"),this.night=!0,this.lightSprite.alpha=this.darkness,
// Tint Clouds
this.level.backgroundLayer.tint=0,this.level.godrays.visible=!1,this.level.godrays.renderable=!1,
// for (var i = 0; i < this.level.characters.length; i++) {
// 	this.level.characters[i].tint = 0x999999;
// }
this.level.weather.clouds&&(this.level.weather.clouds.alpha=0);else if(this.timeValue>=6&&this.timeValue<8){console.log("Dawn"),this.level.backgroundLayer.tint=8684676,this.lightSprite.alpha=.5,this.night=!1;
// this.level.player.tint = 0x383838;
for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=3684408;this.level.weather.clouds&&this.level.weather.clouds.forEach(function(t){t.tint=3684408})}else if(this.timeValue>=8&&this.timeValue<18)console.log("Day"),this.night=!1,
// Normal Player Tint: 16777215
this.lightSprite.alpha=0;else if(this.timeValue>=18&&this.timeValue<21){console.log("Dusk"),this.night=!1,this.level.backgroundLayer.tint=8684676,this.lightSprite.alpha=.5;
// this.level.player.tint = 0x454545;
for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=3684408;this.level.weather.clouds&&this.level.weather.clouds.forEach(function(t){t.tint=3684408})}else this.timeValue>=21&&this.timeValue<24&&(console.log("Night"),this.night=!0,this.level.godrays.visible=!1,this.level.godrays.renderable=!1,this.level.backgroundLayer.tint=0,this.lightSprite.alpha=this.darkness,
// for (var i = 0; i < this.level.characters.length; i++) {
// 	this.level.characters[i].tint = 0x999999;
// }
this.level.weather.clouds&&(this.level.weather.clouds.alpha=0));
// if(this.night){
// 	this.crickets = this.game.add.audio('AxCrickets');
// 	this.crickets.play();
// }
this.lightSprite.blendMode=o.default.blendModes.MULTIPLY,this.level.weather.lightning&&this.level.weather.lightning.bringToTop()}}},{key:"updateShadowTexture",value:function(){this.shadowTexture.context.fillStyle="rgb(0, 15, 119)",this.shadowTexture.context.fillRect(0,0,this.game.width+400,this.game.height+400);var t=60+this.game.rnd.integerInRange(1,2),e=this.level.player.x-this.game.camera.x,i=this.level.player.y-this.game.camera.y,a=this.shadowTexture.context.createRadialGradient(e,i,45,e,i,t);a.addColorStop(0,"rgba(150, 150, 150, 1.0)"),a.addColorStop(1,"rgba(150, 150, 150, 0.0)"),this.shadowTexture.context.beginPath(),this.shadowTexture.context.fillStyle=a,this.shadowTexture.context.arc(e,i,t,0,2*Math.PI,!1),this.shadowTexture.context.fill(),this.shadowTexture.dirty=!0}}]),t}());e.default=h},/* 372 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(373),o=a(r),l=i(374),h=a(l),u=i(375),c=a(u),d=i(136),p=a(d),f=i(137),m=a(f),g=i(377),y=a(g),v=function(){function t(e,i){n(this,t),this.game=e,this.level=i,this.notification=!1,this.healthBar=new y.default(this.game,this.level),this.createGUI()}return s(t,[{key:"createGUI",value:function(){this.questMap=new p.default(this.game,this),this.gameMap=new m.default(this.game,this,this.level),this.ingameMenu=new c.default(this.game,this.level)}},{key:"updateGUI",value:function(t,e){t}},{key:"update",value:function(){this.message&&(this.message.update(),this.game.world.bringToTop(this.message.background),this.game.world.bringToTop(this.message.text),this.game.world.bringToTop(this.message.upperBar),this.game.world.bringToTop(this.message.downBar),this.game.world.bringToTop(this.message.nextGUI),this.game.world.bringToTop(this.message.fontImage)),this.notification.notificationBar&&(this.game.world.bringToTop(this.notification.notificationBar),this.game.world.bringToTop(this.notification.fontImage)),this.questMap.questmapBackground&&(this.game.world.bringToTop(this.questMap.questmapBackground),this.game.world.bringToTop(this.questMap.text)),this.gameMap.gameMapbackground&&(this.gameMap.update(),this.game.world.bringToTop(this.gameMap.gameMapbackground),this.game.world.bringToTop(this.gameMap.mapGroup),this.game.world.bringToTop(this.gameMap.playerDot)),this.ingameMenu.menuBackground&&(
// this.gameMap.update();
this.game.world.bringToTop(this.ingameMenu.blackBG),this.game.world.bringToTop(this.ingameMenu.menuBackground),this.game.world.bringToTop(this.ingameMenu.mapButton),this.game.world.bringToTop(this.ingameMenu.questButton),this.game.world.bringToTop(this.ingameMenu.inventoryButton),this.game.world.bringToTop(this.ingameMenu.controllsButton),this.game.world.bringToTop(this.ingameMenu.optionsButton),this.ingameMenu.gameMap.map&&(this.game.world.bringToTop(this.ingameMenu.gameMap.mask),this.game.world.bringToTop(this.ingameMenu.gameMap.map),this.game.world.bringToTop(this.ingameMenu.gameMap.playerDot),this.ingameMenu.gameMap.update()),this.ingameMenu.controllsSprite&&this.game.world.bringToTop(this.ingameMenu.controllsSprite),this.ingameMenu.questMap.text&&(this.game.world.bringToTop(this.ingameMenu.questMap.text),this.game.world.bringToTop(this.ingameMenu.questMap.fontImage),this.game.world.bringToTop(this.ingameMenu.questMap.fontImageMastered),this.game.world.bringToTop(this.ingameMenu.questMap.heading1Sprite),this.game.world.bringToTop(this.ingameMenu.questMap.heading2Sprite)),this.ingameMenu.gameOptions.muteMusicButton&&(this.game.world.bringToTop(this.ingameMenu.gameOptions.muteMusicButton),this.game.world.bringToTop(this.ingameMenu.gameOptions.muteSoundButton),this.game.world.bringToTop(this.ingameMenu.gameOptions.FSmodeButton))),this.healthBar.update(),this.game.world.bringToTop(this.healthBar.healthBarGroup)}},{key:"createMessage",value:function(t,e,i){this.message=new o.default(this.game,t,e,i,this.player,this.level)}},{key:"createNotification",value:function(t,e){this.notification=new h.default(this.game,t,e)}},{key:"setLevel",value:function(t){this.level=t,this.player=this.level.player}}]),t}();e.default=v},/* 373 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(1),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e,i,n,s,o,l){var h=this;a(this,t),this.game=e,this.message=i,this.movable=n,this.readable=s,this.player=o,this.level=l,this.line=[],this.wordIndex=0,this.lineIndex=0,this.endTime=2e3,this.playFast=!1,this.wordDelay=100,this.lineDelay=2e3,this.counter=0,this.followTween=this.game.add,this.wordSound=this.game.add.audio("sfxletters"),this.wordSound.volume=.2,this.wordSound.allowMultiple=!0,console.log(this.wordSound),
// this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.5, 0.5);
this.addBars();var u=e.add.bitmapData(300,65);u.ctx.beginPath(),u.ctx.rect(0,0,300,65),u.ctx.fillStyle="#000000",u.ctx.globalAlpha=.5,u.ctx.fill(),u.ctx.fill(),u.ctx.beginPath(),u.line(0,0,300,0,"#49ffc5",4),u.ctx.fill(),this.background=e.add.sprite(this.game.camera.width/2-u.width/2,this.game.camera.height-90,u),this.background.fixedToCamera=!0,this.background.x=Math.floor(this.background.x),this.background.y=Math.floor(this.background.y),
//FIX?
// this.game.renderer.renderSession.roundPixels = true;
this.text=e.add.retroFont("carinaFont",7,7,r.default.RetroFont.TEXT_SET1,18,0,2,0,1);this.text.setText("",!0,-1,5,"left",!0),
// this.text.fixedWidth = 200;
this.fontImage=this.game.add.image(this.background.x+10,this.game.camera.height-80,this.text),this.fontImage.fixedToCamera=!0,this.nextGUI=e.add.sprite(this.background.x+this.background.width-10,this.game.camera.height-35,"nextGUI"),this.nextGUI.animations.add("run",[0,1,2],3,!0),this.nextGUI.animations.play("run"),this.nextGUI.fixedToCamera=!0,this.level.inputClass.button_E.onDown.add(function(){
// this.endTime = 500;
if(
// this.counter++;
// console.log(this.counter);
// if(this.counter == 1) return;
// console.log('faster');
h.lineDelay=0,h.lineIndex===h.message.length)return void h.game.time.events.add(300,h.removeMessage,h);h.wordRepeat=h.game.time.events.repeat(100,h.line.length,h.nextWord,h),
// if (this.wordIndex === this.line.length) {
h.nextLine()},this),this.movable||(this.player.movable=!1,this.player.body.immovable=!0),this.level.GUICLASS.healthBar.fadeOut(),this.nextLine()}return n(t,[{key:"nextLine",value:function(){if(this.lineIndex===this.message.length)return void this.game.time.events.add(this.endTime,this.removeMessage,this);
// Split Line from Message Array
this.line=this.message[this.lineIndex].split(" "),this.wordIndex=0,this.text.text="",this.lineIndex++,
// if(this.playFast){
// 	this.game.time.events.remove(this.wordRepeat);
// 	for (let i = 0; i < this.line.length; i++) {
// 		this.nextWord.call(this);
// 	}
// 	this.playFast = false;
// } else {
// 	// repeat(delay, repeatCount, callback, callbackContext, arguments)
// 	this.wordRepeat = this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);
// }
// repeat(delay, repeatCount, callback, callbackContext, arguments)
this.wordRepeat=this.game.time.events.repeat(this.wordDelay,this.line.length,this.nextWord,this),this.playFast=!1}},{key:"nextWord",value:function(){void 0!==this.line[this.wordIndex]&&(this.text.text=this.text.text.concat(this.line[this.wordIndex]+" "),this.wordIndex++,this.wordSound.play("",0,.2,!1,!1),
// If Character Count === Line Count --> Next Line
this.wordIndex===this.line.length&&(this.text.text=this.text.text.concat("\n"),console.log(this.text)))}},{key:"removeMessage",value:function(){var t=this;
//FIX END
// this.game.renderer.renderSession.roundPixels = false;
this.counter=0,this.nextGUI.destroy(),this.fontImage.destroy(),this.text.destroy(),this.background.destroy(),this.removeBars(),this.level.GUICLASS.healthBar.fadeIn(),this.movable||(this.player.movable=!0,this.player.body.immovable=!1,this.game.time.events.add(this.endTime,function(){t.player.talking=!1}))}},{key:"update",value:function(){}},{key:"addBars",value:function(){var t=this.game.camera.width,e=this.game.add.bitmapData(t,20);e.ctx.beginPath(),e.ctx.rect(0,0,t,20),e.ctx.fillStyle="#000000",e.ctx.globalAlpha=1,e.ctx.fill(),this.upperBar=this.game.add.sprite(this.game.camera.width/2-e.width/2,this.game.camera.height,e),this.upperBar.fixedToCamera=!0,this.downBar=this.game.add.sprite(this.game.camera.width/2-e.width/2,this.game.camera.height-this.game.camera.height-20,e),this.downBar.fixedToCamera=!0,this.game.add.tween(this.upperBar.cameraOffset).to({y:this.upperBar.y-20},1e3,r.default.Easing.Linear.None,!0),this.game.add.tween(this.downBar.cameraOffset).to({y:this.downBar.y+20},1e3,r.default.Easing.Linear.None,!0)}},{key:"removeBars",value:function(){var t=this;!1!==this.upperBar&&(this.upperBarTween=this.game.add.tween(this.upperBar.cameraOffset).to({y:this.game.camera.height},1e3,r.default.Easing.Linear.None,!0)),!1!==this.downBar&&(this.downBarTween=this.game.add.tween(this.downBar.cameraOffset).to({y:this.game.camera.height-this.game.camera.height-20},1e3,r.default.Easing.Linear.None,!0)),this.upperBarTween.onComplete.add(function(){void 0!==t.upperBar&&(
// this.upperBar.destroy();
t.downBar.destroy(),t.upperBar=!1)},this)}}]),t}();e.default=o},/* 374 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(1),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e,i,n){a(this,t),this.game=e,this.type=i,this.message=n,this.game.time.events.add(3*r.default.Timer.SECOND,this.createNotification,this)}return n(t,[{key:"createNotification",value:function(){this.archivementSound=this.game.add.audio("achivement",2),"success"==this.type&&this.archivementSound.play(),"quest"==this.type&&this.archivementSound.play();this.bmd=this.game.add.bitmapData(50,20),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,0,50,20),this.bmd.ctx.fillStyle="#000000",this.bmd.ctx.globalAlpha=.8,this.bmd.ctx.fill(),this.notificationBar=this.game.add.sprite(this.game.camera.width-this.bmd.width-20,-20,this.bmd),this.notificationBar.fixedToCamera=!0,this.notificationBar.alpha=0,
// this.text = this.game.add.bitmapText(this.notificationBar.x, -20, 'pxlfont', '', 51);
// this.text.scale.set(0.26);
this.text=game.add.retroFont("carinaFont",7,7,r.default.RetroFont.TEXT_SET1,18,0,2,0,1),
// this.text.setText(content, true, -1, 5, 'left', true)
this.fontImage=this.game.add.image(this.notificationBar.x,-20,this.text),this.fontImage.fixedToCamera=!0,this.text.setText(this.message,!0,-1,5,"left",!0),this.fontImage.alpha=0,this.fontImage.anchor.set(.5),
// this.text = this.game.add.bitmapText(this.notificationBar.x, this.notificationBar.y - 4, 'pxlfont', '', 15);
// this.text.text = this.message;
this.notificationBar.width=this.text.width+20,this.notificationBar.anchor.set(.5),
// console.log('Beginn Text: ' + this.text.cameraOffset);
// console.log('Beginn notificationBar: ' + this.notificationBar.cameraOffset);
this.game.add.tween(this.fontImage.cameraOffset).to({y:this.fontImage.y+40},800,r.default.Easing.Back.Out,!0),this.game.add.tween(this.notificationBar.cameraOffset).to({y:this.notificationBar.y+40},800,r.default.Easing.Back.Out,!0),this.game.add.tween(this.fontImage).to({alpha:1},500,r.default.Easing.Linear.None,!0),this.game.add.tween(this.notificationBar).to({alpha:1},500,r.default.Easing.Linear.None,!0),
// console.log('Beginn Text End: ' + this.text.cameraOffset);
// console.log('Beginn notificationBar End: ' + this.notificationBar.cameraOffset);
this.game.time.events.add(4*r.default.Timer.SECOND,this.removeNotification,this)}},{key:"removeNotification",value:function(){this.removeTween=this.game.add.tween(this.fontImage).to({alpha:0},1e3,r.default.Easing.Back.Out,!0),this.game.add.tween(this.notificationBar).to({alpha:0},1e3,r.default.Easing.Back.Out,!0),this.notificationBar.cameraOffset.y=-20,this.fontImage.cameraOffset.y=-20,this.removeTween.onComplete.add(function(){this.notificationBar.destroy(),this.notificationBar=!1,this.fontImage.destroy(),this.bmd.destroy()},this)}}]),t}();e.default=o},/* 375 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=a(r),l=i(136),h=a(l),u=i(137),c=a(u),d=i(376),p=a(d),f=function(){function t(e,i){n(this,t),this.game=e,this.level=i,this.show=!1,this.currentTab=2,this.gameMap=new c.default(this.game,this.level,this),this.questMap=new h.default(this.game,this.level,this),this.gameOptions=new p.default(this.game,this.level,this),this.UISounds=this.game.add.audioSprite("sfxUI"),this.UISounds.sounds.UI1.allowMultiple=!0,this.UISounds.sounds.UI2.allowMultiple=!0,this.UISounds.sounds.openMenu.allowMultiple=!0,console.log(this.UISounds)}return s(t,[{key:"toggleMenu",value:function(){this.show?(this.game.renderer.renderSession.roundPixels=!1,this.closeMenu(),this.openMenuSound(),this.show=!1,this.currentTab=2):(
// this.game.renderer.renderSession.roundPixels = true;
this.showMenu(),this.openMenuSound(),this.show=!0)}},{key:"showMenu",value:function(){
// this.level.GUICLASS.healthBar.fadeOut();
// Disable Storm, Disable Playermovement, No Camera Lerp
this.level.weather.enableStorm=!1,this.level.player.movable=!1,this.level.player.alpha=0,
// this.game.camera.follow(this.level.player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
this.blackBGbmd=this.game.add.bitmapData(window.innerWidth,window.innerHeight),this.blackBGbmd.ctx.beginPath(),this.blackBGbmd.ctx.rect(0,0,window.innerWidth,window.innerHeight),this.blackBGbmd.ctx.fillStyle="#000000",this.blackBGbmd.ctx.globalAlpha=1,this.blackBGbmd.ctx.fill(),this.blackBG=this.game.add.sprite(0,0,this.blackBGbmd),this.blackBG.fixedToCamera=!0,this.blackBG.alpha=0,this.alphaTween=this.game.add.tween(this.blackBG).to({alpha:.6},350,o.default.Easing.Cubic.Out,!0),
// Create BitmapData Background
this.bmd=this.game.add.bitmapData(400,200),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,20,400,200),this.bmd.ctx.fillStyle="#000000",this.bmd.ctx.globalAlpha=1,this.bmd.ctx.fill(),
// this.bmd.ctx.beginPath();
// this.bmd.ctx.rect(0, 0, 400, 20);
// this.bmd.ctx.fillStyle = '#404040';
// this.bmd.ctx.globalAlpha = 1;
// this.bmd.ctx.fill();
// this.bmd.ctx.beginPath();
// this.bmd.ctx.rect(0, 18, 400, 2);
// this.bmd.ctx.fillStyle = '#FFFFFF';
// this.bmd.ctx.globalAlpha = 1;
// this.bmd.ctx.fill();
this.menuBackground=this.game.add.sprite(this.game.camera.width/2-this.bmd.width/2,this.game.camera.height/2-this.bmd.height/2,this.bmd),this.menuBackground.fixedToCamera=!0,
// Create Mapbutton
this.mapButton=this.game.add.button(this.menuBackground.x,this.menuBackground.y,"mapButton",this.actionOnClick,this,0,1,2),this.mapButton.fixedToCamera=!0,this.mapButton.onInputOver.add(this.over,this),
// Create Questbutton
this.questButton=this.game.add.button(this.menuBackground.x+60,this.menuBackground.y,"questButton",this.actionOnClick,this,0,1,2),this.questButton.fixedToCamera=!0,this.questButton.onInputOver.add(this.over,this),
// Create inventoryButton
this.inventoryButton=this.game.add.button(this.menuBackground.x+120,this.menuBackground.y,"inventoryButton",this.actionOnClick,this,0,1,2),this.inventoryButton.fixedToCamera=!0,this.inventoryButton.onInputOver.add(this.over,this),
// Create Controlls Button
this.controllsButton=this.game.add.button(this.menuBackground.x+180,this.menuBackground.y,"controllsButton",this.actionOnClick,this,0,1,2),this.controllsButton.fixedToCamera=!0,this.controllsButton.onInputOver.add(this.over,this),
// Create Controlls Button
this.optionsButton=this.game.add.button(this.menuBackground.x+240,this.menuBackground.y,"optionsButton",this.actionOnClick,this,0,1,2),this.optionsButton.fixedToCamera=!0,this.optionsButton.onInputOver.add(this.over,this),
// Set Buttonframes
this.mapButton.setFrames(0,1,2),this.questButton.setFrames(2,2,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),
// Open Maptab by default
// this.gameMap.createMap();
this.questMap.showMap()}},{key:"openMenuSound",value:function(){this.UISounds.play("openMenu",.1)}},{key:"over",value:function(){this.UISounds.play("UI1",.1)}},{key:"down",value:function(){this.UISounds.play("UI2",.1)}},{key:"closeMenu",value:function(){
// this.level.GUICLASS.healthBar.fadeIn();
this.menuBackground&&(
// Enable Storm, Enable Playermovement, Add Camera Lerp
this.level.weather.enableStorm=!0,this.level.player.movable=!0,this.level.player.alpha=1,
// this.game.camera.follow(this.level.player, Phaser.Camera.FOLLOW_LOCKON, 0.07, 0.07);
// Destroy menuBackground + all buttons
this.alphaTween=this.game.add.tween(this.blackBG).to({alpha:0},350,o.default.Easing.Cubic.Out,!0),this.menuBackground.destroy(),this.mapButton.destroy(),this.questButton.destroy(),this.inventoryButton.destroy(),this.controllsButton.destroy(),this.optionsButton.destroy(),this.menuBackground=!1,this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1),this.controllsSprite&&this.controllsSprite.destroy())}},{key:"actionOnClick",value:function(t){if(this.down(),"mapButton"==t.key){
// // If Map is active --> return
if(this.gameMap.map)return;this.questButton.setFrames(0,1,2),this.mapButton.setFrames(2,2,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1),this.gameMap.createMap()}else if("questButton"==t.key){
// If Questmap is active --> return
if(this.questMap.text)return;this.questButton.setFrames(2,2,2),this.mapButton.setFrames(0,1,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1),this.questMap.showMap()}else"inventoryButton"==t.key?(this.inventoryButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1)):"controllsButton"==t.key?(this.controllsButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.inventoryButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1),this.controllsSprite=this.game.add.sprite(720,470,"instructionsInGame")):"optionsButton"==t.key&&(this.optionsButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.showOptions())}},{key:"next",value:function(){if(this.show)if(this.currentTab++,this.currentTab>5&&(this.currentTab=1),console.log(this.currentTab),1==this.currentTab){if(this.gameMap.map)return;this.mapButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1)}else if(2==this.currentTab){if(this.questMap.text)return;this.questButton.setFrames(2,2,2),this.mapButton.setFrames(0,1,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1),this.questMap.showMap()}else 3==this.currentTab?(this.inventoryButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.showOptions()):4==this.currentTab?(this.inventoryButton.setFrames(0,1,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.controllsButton.setFrames(2,2,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1)):5==this.currentTab&&(this.inventoryButton.setFrames(0,1,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(2,2,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1))}},{key:"prev",value:function(){if(this.show)if(this.currentTab--,this.currentTab<1&&(this.currentTab=5),1==this.currentTab){if(this.gameMap.map)return;this.mapButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1)}else if(2==this.currentTab){if(this.questMap.text)return;this.questButton.setFrames(2,2,2),this.mapButton.setFrames(0,1,2),this.inventoryButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.FSmodeButton.destroy(),this.gameOptions.muteMusicButton=!1),this.questMap.showMap()}else 3==this.currentTab?(this.inventoryButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.fontImage.destroy(),this.questMap.fontImage=!1,this.questMap.text.destroy(),this.questMap.text=!1,this.questMap.fontImageMastered.destroy(),this.questMap.fontImageMastered=!1,this.questMap.heading1Sprite.destroy(),this.questMap.heading1Sprite=!1,this.questMap.heading2Sprite.destroy(),this.questMap.heading2Sprite=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.showOptions()):4==this.currentTab?(this.inventoryButton.setFrames(0,1,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.controllsButton.setFrames(2,2,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1)):5==this.currentTab&&(this.inventoryButton.setFrames(0,1,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.controllsButton.setFrames(0,1,2),this.optionsButton.setFrames(2,2,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.controllsSprite&&this.controllsSprite.destroy(),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1))}},{key:"mapUp",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({y:this.gameMap.map.cameraOffset.y+40},200,o.default.Easing.Linear.None,!0))}},{key:"mapDown",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({y:this.gameMap.map.cameraOffset.y-40},200,o.default.Easing.Linear.None,!0))}},{key:"mapLeft",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({x:this.gameMap.map.cameraOffset.x+40},200,o.default.Easing.Linear.None,!0))}},{key:"mapRight",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({x:this.gameMap.map.cameraOffset.x-40},200,o.default.Easing.Linear.None,!0))}}]),t}();e.default=f},/* 376 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=function(){function t(e,i,n){a(this,t),this.game=e,this.level=i,this.ingameMenu=n}return n(t,[{key:"showOptions",value:function(){this.muteMusicButton=this.game.add.button(240,100,"muteMusicButton",this.actionOnClick,this,0,2,1),this.muteMusicButton.fixedToCamera=!0,this.muteSoundButton=this.game.add.button(240,130,"muteSoundButton",this.actionOnClick,this,0,2,1),this.muteSoundButton.fixedToCamera=!0,this.FSmodeButton=this.game.add.button(240,160,"FSmodeButton",this.actionOnClick,this,0,2,1),this.FSmodeButton.fixedToCamera=!0,this.getGamePreferences()}},{key:"getGamePreferences",value:function(){this.gamePreferences=this.level.safe.getGamePreferences(),this.gamePreferences.muteMusic?(this.muteMusic=!0,this.muteMusicButton.setFrames(0,1,2)):(this.muteMusic=!1,this.muteMusicButton.setFrames(0,2,1)),this.gamePreferences.muteSound?(this.muteSound=!0,this.muteSoundButton.setFrames(0,1,2)):(this.muteSound=!1,this.muteSoundButton.setFrames(0,2,1)),this.game.scale.isFullScreen?
// this.muteSound = true;
this.FSmodeButton.setFrames(1,1,1):
// this.muteSound = false;
this.FSmodeButton.setFrames(0,2,1)}},{key:"setGamePreferences",value:function(t){this.level.safe.setGamePreferences(t)}},{key:"actionOnClick",value:function(t){"muteMusicButton"==t.key?this.muteMusic?(this.muteMusic=!1,this.muteMusicButton.setFrames(0,2,1),this.game.musicPlayer.initMap(this.level.tilemapProperties,!0,5e3)):(this.muteMusic=!0,this.muteMusicButton.setFrames(1,1,1),this.game.musicPlayer.fadeOut()):"muteSoundButton"==t.key?this.muteSound?(this.muteSound=!1,this.muteSoundButton.setFrames(0,2,1),this.game.soundManager.initSound(this.level.tilemapProperties.athmoSound)):(this.muteSound=!0,this.muteSoundButton.setFrames(1,1,1),this.game.soundManager.fadeOut()):"FSmodeButton"==t.key&&(this.game.scale.isFullScreen?(this.game.scale.stopFullScreen(),this.FSmodeButton.setFrames(0,2,1)):(this.game.scale.startFullScreen(!1,!1),this.FSmodeButton.setFrames(1,1,1))),this.setGamePreferences({muteMusic:this.muteMusic,muteSound:this.muteSound})}}]),t}();e.default=s},/* 377 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=i(1),r=function(t){return t&&t.__esModule?t:{default:t}}(s),o=function(){function t(e,i){var n=this;a(this,t),this.game=e,this.level=i,this.player=this.level.player,this.tweenMS=300,this.dashRatio={value:1},this.waitTimer=this.game.time.events.add(100,function(){}),this.level.player.health<=1&&(this.flashingLoop=this.game.time.events.loop(850,function(){n.game.camera.flash(9633792,200,!0)},this)),this.buildHealthBar(this.level.player.health),this.reloadRatioTween=this.game.add.tween(this.dashBar.scale).to({x:1,y:1},1,"Linear",!0,0,0,!1),this.reloadRatio=this.game.add.tween(this.dashRatio).to({value:1},1,"Linear",!0,0,0,!1),this.reduceTween=this.game.add.tween(this.dashBar.scale).to({x:this.dashRatio.value,y:1},1,r.default.Easing.Cubic.Out,!0,0,0,!1)}return n(t,[{key:"buildHealthBar",value:function(t){this.healthBarGroup=this.game.add.group(),this.heartExplosion=this.game.add.emitter(0,0,100);var e=13,i=13,a=this.game.add.bitmapData(e,i);a.ctx.beginPath(),a.ctx.rect(0,0,e,i),
// if(this.level.map.plus.properties.dayCycle){
a.ctx.fillStyle="#000000",a.ctx.globalAlpha=1,
// } else {
// bmd.ctx.fillStyle = '#49ffc5';
// bmd.ctx.globalAlpha = 0.2;
// }
a.ctx.fill(),a.ctx.beginPath(),a.line(0,0,13,0,"#49ffc5",2),a.ctx.fill(),this.healthBarIcon=this.game.add.sprite(17,17,a),this.healthBarIcon.fixedToCamera=!0,this.healthBarIcon.alpha=.8;var e=53,i=13,a=this.game.add.bitmapData(e,i);a.ctx.beginPath(),a.ctx.rect(0,0,e,i),
// if(this.level.map.plus.properties.dayCycle){
a.ctx.fillStyle="#000000",a.ctx.globalAlpha=1,
// } else {
// bmd.ctx.fillStyle = '#49ffc5';
// bmd.ctx.globalAlpha = 0.2;
// }
a.ctx.fill(),a.ctx.beginPath(),a.line(0,0,53,0,"#49ffc5",2),a.ctx.fill(),this.healthBar=this.game.add.sprite(34,17,a),this.healthBar.fixedToCamera=!0,this.healthBar.alpha=.8;var e=53,i=3,n=this.game.add.bitmapData(e,i);n.ctx.beginPath(),n.ctx.rect(0,0,e,i),n.ctx.fillStyle="#000000",n.ctx.globalAlpha=1,n.ctx.fill(),
// bmd_dashBar.ctx.beginPath();
// bmd_dashBar.line(0, 0, 53, 0, '#49ffc5', 2);
// bmd_dashBar.ctx.fill();
this.dashBarFrame=this.game.add.sprite(34,32,n),this.dashBarFrame.fixedToCamera=!0,this.dashBarFrame.alpha=.8,this.dashBar=this.game.add.sprite(35,33,"dashBar"),this.dashBar.fixedToCamera=!0,this.hearts=this.game.add.group();for(var s=41,o=0;o<5;o++){var l=this.game.add.sprite(s,24,"heart");l.scale.set(1),l.anchor.set(.5),l.fixedToCamera=!0,s+=10,l.alpha=1,
// this.game.add.tween(heart).to({ alpha: 1 }, 10000, 'Linear', true);
this.game.add.tween(l.scale).to({x:1.1,y:1.1},850,r.default.Easing.Bounce.Out,!0,0,0,!1).loop(),o>=t&&(l.scale.set(0),l.alpha=0),this.hearts.add(l)}this.heartsShaddow=this.game.add.group();for(var h=41,u=0;u<5;u++){var c=this.game.add.sprite(h,24,"heart");c.scale.set(1),c.anchor.set(.5),c.fixedToCamera=!0,c.alpha=.2,h+=10,this.heartsShaddow.add(c)}
// this.removeHeart(3);
this.healthBarGroup.add(this.healthBarIcon),this.healthBarGroup.add(this.healthBar),this.healthBarGroup.add(this.heartsShaddow),this.healthBarGroup.add(this.hearts),this.healthBarGroup.add(this.dashBarFrame),this.healthBarGroup.add(this.dashBar),this.healthBarGroup.add(this.heartExplosion)}},{key:"removeHeart",value:function(t,e){var i=this;e&&this.game.camera.shake(.005,500),
// If Health == 1 --> Flash
this.level.player.health<=1&&(this.flashingLoop=this.game.time.events.loop(850,function(){i.game.camera.flash(12648448,100,!0)},this),void 0==this.level.sfxheartbeat&&(this.level.sfxheartbeat=this.game.add.audio("sfxheartbeat"),this.level.sfxheartbeat.loop=!0,this.level.sfxheartbeat.play()));var a=this.level.safe.getGameConfig(),n=a.playerHealth,s=n-1;this.game.add.tween(this.hearts.children[s].scale).to({x:0,y:0},500,r.default.Easing.Bounce.Out,!0,0,0,!1);this.hearts.children[s].alpha=0,this.hearts.children[s].scale.set(0),this.heartExplosion=this.game.add.emitter(this.hearts.children[s].x,this.hearts.children[s].y,100),this.heartExplosion.fixedToCamera=!0,this.heartExplosion.setAlpha(1,0,2e3,null,!1),this.heartExplosion.setXSpeed(100),this.heartExplosion.setYSpeed(-100),this.heartExplosion.makeParticles("bloodHeart",100),this.heartExplosion.start(!0,0,null,10)}},{key:"dash",value:function(){var t=this;if(this.dashRatio.value<=.1)return this.reloadRatioTween.stop(!0),void this.reloadRatio.stop(!0);this.game.time.events.remove(this.waitTimer),this.reloadRatioTween.isRunning?(this.reloadRatioTween.stop(!0),this.reloadRatio.stop(!0),this.dashRatio.value-=.1,this.dashRatio.value<=.1&&(this.dashRatio.value=0),this.reduceTween=this.game.add.tween(this.dashBar.scale).to({x:this.dashRatio.value,y:1},600,r.default.Easing.Cubic.Out,!0,0,0,!1),this.waitTimer=this.game.time.events.add(4e3,function(){t.level.inputClass.dash||(t.reloadRatioTween=t.game.add.tween(t.dashBar.scale).to({x:1,y:1},5e3,"Linear",!0,0,0,!1),t.reloadRatio=t.game.add.tween(t.dashRatio).to({value:1},5e3,"Linear",!0,0,0,!1))})):(this.reloadRatioTween.stop(),this.reloadRatio.stop(),this.dashRatio.value-=.1,this.dashRatio.value<=.1&&(this.dashRatio.value=0),this.game.add.tween(this.dashBar.scale).to({x:this.dashRatio.value,y:1},600,r.default.Easing.Cubic.Out,!0,0,0,!1),this.waitTimer=this.game.time.events.add(4e3,function(){t.reloadRatioTween=t.game.add.tween(t.dashBar.scale).to({x:1,y:1},5e3,"Linear",!0,0,0,!1),t.reloadRatio=t.game.add.tween(t.dashRatio).to({value:1},5e3,"Linear",!0,0,0,!1)}))}},{key:"addHeart",value:function(t){var e=this;this.level.player.health<=1&&(this.level.sfxheartbeat.stop(),this.game.time.events.remove(this.flashingLoop)),this.counter=1,this.buildLoop=this.game.time.events.loop(500,function(){e.game.add.tween(e.hearts.getChildAt(e.counter)).to({alpha:1},500,r.default.Easing.Bounce.Out,!0),e.game.add.tween(e.hearts.getChildAt(e.counter).scale).to({x:1,y:1},500,r.default.Easing.Bounce.Out,!0,2e3,0,!1),++e.counter==t&&e.game.time.events.remove(e.buildLoop)},this)}},{key:"fadeOut",value:function(){this.game.add.tween(this.healthBar).to({alpha:0},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.healthBarIcon).to({alpha:0},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.heartsShaddow).to({alpha:0},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.hearts).to({alpha:0},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.dashBarFrame).to({alpha:0},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.dashBar).to({alpha:0},this.tweenMS,r.default.Easing.Cubic.Out,!0)}},{key:"fadeIn",value:function(){this.game.add.tween(this.healthBar).to({alpha:1},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.healthBarIcon).to({alpha:1},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.heartsShaddow).to({alpha:1},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.hearts).to({alpha:1},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.dashBarFrame).to({alpha:1},this.tweenMS,r.default.Easing.Cubic.Out,!0),this.game.add.tween(this.dashBar).to({alpha:1},this.tweenMS,r.default.Easing.Cubic.Out,!0)}},{key:"update",value:function(){this.level.inputClass.dash&&this.dashRatio.value<=.1&&(this.reloadRatioTween.stop(),this.reloadRatio.stop())}}]),t}();e.default=o},/* 378 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),s=function(){function t(e,i){a(this,t),this.game=e,this.level=i,"getBattery"in navigator?this.setup():console.log("Battery API not supported")}return n(t,[{key:"setup",value:function(){var t=this;this.batteryPromise=navigator.getBattery().then(function(t){function e(){
// console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
return t}function i(){return console.log("Battery level: "+100*t.level+"%"),t}return i(),e(),t.addEventListener("chargingchange",function(){e()}),t.addEventListener("levelchange",function(){i()}),t}).then(function(e){
// console.log(battery);
100*e.level<25&&!e.charging&&("undefined"!=typeof ipc?
// let myNotification = 
new Notification("Battery",{body:"🔋 Your Battery Level is low!",silent:!0}):t.level.GUICLASS.createNotification("Battery","🔋 Your Battery Level is low!"))})}}]),t}();e.default=s},/* 379 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r,o,h,u,c){a(this,e);var d=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,"rock"));return d.game=t,d.player=r,d.map=o,d.layer=h,d.level=c,d.open=!1,d.health=3,d.dead=!1,d.paralyze=!1,d.anchor.setTo(.5),d.animations.add("open",[0,1,2,3,4,5,6,7,8,9,10,11,12,13],15,!1),d.animations.add("close",[13,14,15,16,17,18,19,20],15,!1),d.game.physics.enable(d),d.body.immovable=!0,d.body.setSize(80,40,10,60),d.weapon=t.add.weapon(10,"bulletRock"),d.weapon.bulletKillType=l.default.Weapon.KILL_LIFESPAN,d.weapon.bulletLifespan=2e3,d.weapon.bulletSpeed=200,d.weapon.fireRate=400,d.weapon.trackSprite(d,0,35,!1),t.add.existing(d),d}return s(e,t),r(e,[{key:"update",value:function(){var t=this;if(!this.dead&&!this.paralyze){this.game.world.setChildIndex(this.weapon.bullets,20);
// console.log(Math.ceil(this.game.physics.arcade.angleToXY(this.player, this.x, this.y)));
var e=Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y));this.distanceBetweenEnemiePlayer=this.game.physics.arcade.distanceBetween(this,this.player),(1==e||2==e||3==e)&&this.y>this.player.body.y&&
// this.game.world.moveUp(this);
// this.game.world.setChildIndex(this.player, 1);
this.game.world.bringToTop(this),this.distanceBetweenEnemiePlayer<150&&2!==e?(this.animations._anims.open.isPlaying||this.open||(this.animations.play("open"),this.animations._anims.open.onComplete.add(function(){t.open=!0},this)),this.open&&this.weapon.fireAtXY(this.player.body.x,this.player.body.y)):!this.animations._anims.close.isPlaying&&this.open&&(this.animations.play("close"),this.open=!1),this.game.physics.arcade.collide(this.weapon.bullets,this.player.weapon.bullets,this.reverse,null,this),this.game.physics.arcade.collide(this.weapon.bullets,this.player,this.player.bulletHit,null,this)}}},{key:"reverse",value:function(t,e){t.body.velocity.x*=-2.8,t.body.velocity.y*=-2.8}}]),e}(l.default.Sprite);e.default=h},/* 380 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(94),c=(a(u),function(t){function e(t,i,a,r,o,l,h){n(this,e);var u=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,a,"raptor"));
// this.animations.add('wait', [0], 15, true);
// this.animations.add('idle', [10, 11, 12, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10, true);
// this.game.time.events.add(Phaser.Timer.SECOND * this.game.rnd.integerInRange(1, 3), () => {
// }, this);
// this.body.enable = false;
// this.blendMode = Phaser.blendModes.MULTIPLY;
return u.game=t,u.player=r,u.map=o,u.layer=l,u.type=h.type,u.dropItemID=h.dropItemID,u.itemType=h.itemType,u.killQuestID=h.killQuestID,u.health=2,u.dead=!1,u.paralyze=!1,u.attackSoundSwitch=!0,u.speed=180,u.anchor.setTo(.5),u.animations.add("fly",[0,1,2,3,4,5,6],15,!0),u.scale.set(1,1),u.animations.play("fly"),u.game.physics.enable(u),u.body.setSize(13,10,27,27),u.body.bounce.set(1.7),u.body.drag.set(1500),t.add.existing(u),u}return r(e,t),o(e,[{key:"update",value:function(){if(!this.dead&&!this.paralyze&&(this.distanceBetweenEnemiePlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenEnemiePlayer<170)){
// if (this.distanceBetweenEnemiePlayer < 100) {
// 	this.animations.play('walk');
// 	this.game.physics.arcade.moveToObject(this, this.player, 150);
// } else {
// 	this.animations.play('walk');
// 	this.game.physics.arcade.moveToObject(this, this.player, this.closeSpeed);
// }
var t=Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y));1==t||2==t||0==t?this.scale.set(-1,1):this.scale.set(1,1),
// if(this.attackSoundSwitch){
// 	this.attackSoundSwitch = false;
// 	this.rndVoice = this.game.rnd.pick(['vx1', 'vx2', 'vx3', 'vx4', 'vx5', 'vx6', 'vx7', 'vx8', 'vx9', 'vx10', 'vx11', 'vx12', 'vx13', 'vx14', 'vx15']);
// 	this.voice = this.game.add.audioSprite('VxSeeds');
// 	this.voice.play(this.rndVoice, 0.1);
// 	this.game.time.events.add(Phaser.Timer.SECOND * 2, () => {
// 		this.attackSoundSwitch = true;
// 	}, this);
// }
this.game.physics.arcade.moveToObject(this,this.player.body,this.speed)}}}]),e}(h.default.Sprite));e.default=c},/* 381 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r,o,l,h){a(this,e);var u=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,"bird"));return u.game=t,u.player=r,u.map=o,u.layer=l,u.startFlying=!1,u.anchor.setTo(.5),u.animations.add("fly",[0,1,2,3,4],30,!0),u.animations.add("idle",[9],1,!0),u.animations.play("idle"),u.scale.set(-1,1),u.game.physics.enable(u),u.body.checkCollision.none=!0,u.birdSounds=u.game.add.audioSprite("sfxBirds"),u.birdSounds.allowMultiple=!0,u.game.time.events.add(u.game.rnd.integerInRange(0,2e3),function(){u.twitter()},u),t.add.existing(u),u}return s(e,t),r(e,[{key:"twitter",value:function(){var t=this;this.birdInterval=this.game.time.events.loop(this.game.rnd.integerInRange(3e3,5e3),function(){null!=t.game&&(t.rndBirdSounds=t.game.rnd.pick(["twitter1","twitter2","twitter3","twitter4","twitter5"]),t.birdSounds.play(t.rndBirdSounds))},this)}},{key:"update",value:function(){var t=this;if(
// console.log(this.game.world.children);
// this.game.world.bringToTop(this);
this.game.world.setChildIndex(this,this.game.world.children.length-2),this.body.checkCollision.none=!0,this.startFlying)return this.scale.set(-1,1),this.angle=1,this.animations.play("fly"),this.body.velocity.y=-100,void(this.body.velocity.x=100);if(this.distanceBetweenEnemiePlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenEnemiePlayer<130?this.birdSounds.volume=1:
// console.log('Quit BSound');
this.birdSounds.stop(),this.distanceBetweenEnemiePlayer<70)this.startFlying=!0,this.game.time.events.remove(this.birdInterval),this.birdSounds.play("flyAway"),this.game.time.events.add(6e3,function(){t.destroy()},this);else{this.game.physics.arcade.angleToXY(this.player,this.x,this.y)>-1.6?this.scale.set(1,1):this.scale.set(-1,1)}}}]),e}(l.default.Sprite);e.default=h},/* 382 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),l=i(1),h=a(l),u=i(383),c=a(u),d=function(t){function e(t,i,a,r,o,l){n(this,e);var h=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,a,"flower"));return h.game=t,h.type=r,h.level=l,h.anchor.setTo(.5),h.used=!1,h.game.physics.enable(h),h.body.drag.set(1e3),h.game.add.existing(h),h}return r(e,t),o(e,[{key:"update",value:function(){
// this.game.physics.arcade.collide(this, this.level.player);
this.game.physics.arcade.collide(this.level.player.weapon.bullets,this,this.cut,null,this),2==Math.ceil(this.game.physics.arcade.angleToXY(this.level.player,this.x,this.y))&&this.y>this.level.player.body.y&&this.game.world.moveUp(this)}},{key:"cut",value:function(){var t=this;if(!this.used){this.used=!0,this.rndVoice=this.game.rnd.pick(["cut1","cut2"]),this.voice=this.game.add.audioSprite("sfxswordmulti"),this.voice.play(this.rndVoice,.5),this.alpha=0;var e=this.body.velocity.x,i=this.body.velocity.y;e*=2,i*=2,this.cutAnimation=this.game.add.emitter(this.x,this.y,2),this.cutAnimation.angularDrag=500,this.cutAnimation.particleDrag.set(1800),"left"==this.level.inputClass.direction||"right"==this.level.inputClass.direction?(this.cutAnimation.setXSpeed(e),this.cutAnimation.setYSpeed(400)):(this.cutAnimation.setXSpeed(400),this.cutAnimation.setYSpeed(i)),this.cutAnimation.minParticleScale=.5,this.cutAnimation.maxParticleScale=1,this.cutAnimation.makeParticles("flowerPieces",[0,1,2,3],2),this.cutAnimation.setAlpha(1,0,5e3,null,!1),this.cutAnimation.start(!0,0,null,10),4==this.game.rnd.integerInRange(1,4)&&new c.default(this.game,this.x,this.y-20,this.level),this.game.time.events.add(500,function(){t.body.enable=!1},this)}}}]),e}(h.default.Sprite);e.default=d},/* 383 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r){a(this,e);var o=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,"heart"));
// this.id = 4;
// setSize(width, height, offsetX, offsetY)
return o.game=t,o.level=r,o.used=!1,o.anchor.setTo(.5),o.game.physics.enable(o),o.body.setSize(10,18,10,18),o.body.immovable=!0,o.alpha=0,o.game.add.existing(o),o.fadeIn(),o}return s(e,t),r(e,[{key:"fadeIn",value:function(){this.alphaTween=this.game.add.tween(this).to({alpha:1},500,l.default.Easing.Cubic.Out,!0),this.game.add.tween(this).to({y:this.y+5},1e3,"Linear",!0,0,0,!0).loop()}},{key:"heartUp",value:function(){this.used=!0}},{key:"update",value:function(){if(this.used)
// if(this.level.player.health < 5){
//     this.level.GUICLASS.healthBar.addHeart(this.level.player.health++);
//     this.level.player.health += 1;
//     this.level.gameData.playerHealth += 1;
//     this.level.safe.setGameConfig(this.level.gameData);
// }
// if (this.level.player.health > 1) {
// 	this.level.sfxheartbeat.stop();
// 	if (this.level.GUICLASS.healthBar.flashingLoop) {
// 		this.game.time.events.remove(this.level.GUICLASS.healthBar.flashingLoop);
// 	}
// }
return void this.destroy();
// this.game.world.bringToTop(this.itemEmitter);
if(this.game.physics.arcade.collide(this,this.level.player,this.heartUp,null,this),this.game.world.bringToTop(this),this.game.physics.arcade.distanceBetween(this,this.level.player)<50){if(this.action)return;
// On E-click
if(this.level.inputClass.button_E.isDown)
// if(this.openSwitch) return;
// this.openSwitch = true;
// this.action = true;
return void this.level.player.collideWithItem(this.level.player,this)}}}]),e}(l.default.Sprite);e.default=h},/* 384 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(t,i,s,r,o,h,u,c){a(this,e);var d=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s,"sprout"));d.game=t,d.player=r,d.map=o,d.layer=h,d.type="sprout",d.mirror=u.mirror,d.id=u.id,d.level=c,d.shootX=u.shootX,d.shootY=u.shootY,d.health=5,d.grown=!1,d.mirrorBeamRunning=!1,d.shootAtPlayerRunning=!1,d.rotationShootRunning=!1,d.shootAtPlayerCounter=0,d.jailAttackRunning=!0,d.health=3,d.dead=!1,d.paralyze=!1,d.angleSwitch=!0,d.anchor.setTo(0,.5),d.game.physics.enable(d),d.body.allowRotation=!0,d.body.immovable=!0,u.mirror?(
// this.scale.setTo(1, 1);
d.scale.setTo(0),d.angle+=60,d.body.setSize(70,45,-20,0)):(d.body.setSize(70,45,-38,0),d.scale.setTo(0),d.angle+=120),
// this.animations.add('walk', [0, 1, 2, 3, 4], 15, true);
// this.animations.add('idle', [0], 1, true);
// this.animations.play('walk');
d.weapon=t.add.weapon(400,"bulletBeam"),d.weapon.bulletKillType=l.default.Weapon.KILL_LIFESPAN,d.weapon.bulletLifespan=3e3,d.weapon.bulletSpeed=700,d.weapon.bulletCollideWorldBounds=!0,d.weapon.fireRate=1,
// this.weapon.bulletAngleVariance = 10;
d.weapon.bulletRotateToVelocity=!0,d.weapon.trackSprite(d,20,0,!0),console.log(d.weapon.bullets);for(var p=0;p<d.weapon.bullets.children.length;p++)d.weapon.bullets.children[p].body.bounce.set(.5),d.weapon.bullets.children[p].scale.setTo(2),d.weapon.bullets.children[p].smoothed=!1,d.game.add.tween(d.weapon.bullets.children[p]).to({tint:0},9e3,l.default.Easing.Exponential.In,!0,0,0,!0).loop();return d.game.add.existing(d),d}return s(e,t),r(e,[{key:"addLevelBuilder",value:function(t){this.levelBuilder=t}},{key:"hit",value:function(t,e){e.kill(),t.health-=1,t.tint=16711680,this.game.time.events.add(100,function(){t.tint=16777215}),t.health<=0&&(t.kill(),t.dead=!0,this.levelBuilder.deadSprouts+=1,4==this.levelBuilder.deadSprouts&&this.levelBuilder.endBossHead.startHead(),t.weapon=this.game.add.weapon(0,"bulletBeam"))}},{key:"grow",value:function(){var t=this;this.mirror?this.growTween=this.game.add.tween(this.scale).to({x:1,y:1},3e3,l.default.Easing.Back.Out,!0,0,0,!1):this.growTween=this.game.add.tween(this.scale).to({x:1,y:-1},3e3,l.default.Easing.Back.Out,!0,0,0,!1),this.growTween.onComplete.add(function(){t.grown=!0,
// FIRST ATTACK
// this.mirrorBeam();
t.jailAttack()},this)}},{key:"mirrorBeam",value:function(){var t=this;if(!this.dead){this.mirrorBeamRunning=!0;var e=this.game.physics.arcade.angleToXY(this,this.shootX,this.shootY);this.rotationTween=this.game.add.tween(this).to({rotation:e},2e3,l.default.Easing.Back.Out,!0,0,0,!1),this.rotationTween.onComplete.add(function(){var e=t.game.time.events.loop(1,function(){t.weapon.fireAtXY(t.shootX,t.shootY)},t);t.game.time.events.add(5*l.default.Timer.SECOND,function(){t.mirrorBeamRunning=!1,t.game.time.events.remove(e),
// SECOND ATTACK
t.shootAtPlayer(3)})},this)}}},{key:"shootAtPlayer",value:function(t){var e=this;if(!this.dead){this.shootAtPlayerRunning=!0;var i=this.player.body.x,a=this.player.body.y,n=this.game.physics.arcade.angleToXY(this,this.player.x,this.player.y);this.rotationTween=this.game.add.tween(this).to({rotation:n},500,l.default.Easing.Back.Out,!0,0,0,!1),this.rotationTween.onComplete.add(function(){var n=e.game.time.events.loop(1,function(){e.weapon.fireAtXY(i,a)},e);e.game.time.events.add(1*l.default.Timer.SECOND,function(){e.shootAtPlayerCounter++,e.game.time.events.remove(n),console.log(e.shootAtPlayerCounter,t),e.shootAtPlayerCounter==t?(e.shootAtPlayerRunning=!1,e.shootAtPlayerCounter=0,
// THIRD ATTACK
e.rotationShoot(5e3)):e.shootAtPlayer(t)})},this)}}},{key:"rotationShoot",value:function(t){var e=this;if(!this.dead){this.rotationShootRunning=!0;var i=this.game.physics.arcade.angleToXY(this,0,500);this.rotationTween=this.game.add.tween(this).to({rotation:i},1e3,l.default.Easing.Back.Out,!0,0,0,!1),this.rotationTween.onComplete.add(function(){var i=e.game.time.events.loop(1,function(){e.angle>=160?e.angleSwitch=!1:!e.angleSwitch&&e.angle<=30&&(e.angleSwitch=!0),e.angleSwitch?e.angle+=1:e.angle-=1,e.weapon.fire()},e);e.game.time.events.add(t,function(){e.game.time.events.remove(i),e.rotationShootRunning=!1,e.jailAttack()})},this)}}},{key:"jailAttack",value:function(){var t=this;if(!this.dead){this.shootAtPlayerRunning=!0;var e=this.game.physics.arcade.angleToXY(this,this.x,760);this.rotationTween=this.game.add.tween(this).to({rotation:e},1e3,l.default.Easing.Back.Out,!0,0,0,!1),this.rotationTween.onComplete.add(function(){var e=t.game.add.emitter(t.x,t.y+30,200);
// explosion.fixedToCamera = true;
e.setAlpha(1,0,2e3,null,!1),
// explosion.setXSpeed(this.game.rnd.integerInRange(-100, 100));
e.gravity=10,e.setYSpeed(100),e.setXSpeed(-30,30),e.minParticleScale=2,e.makeParticles("bulletParticle"),e.start(!1,2e3,1),t.game.time.events.add(4e3,function(){e.on=!1},t),t.game.time.events.add(3*l.default.Timer.SECOND,function(){if(1==t.id||4==t.id)var i=t.x,a=t.x,n=t.game.time.events.loop(1,function(){1==t.id&&(i+=1,t.rotation=t.game.physics.arcade.angleToXY(t,i,760),t.weapon.fireAtXY(i,760)),4==t.id&&(a-=1,t.rotation=t.game.physics.arcade.angleToXY(t,a,760),t.weapon.fireAtXY(a,760))},t);if(2==t.id||3==t.id)var n=t.game.time.events.loop(1,function(){t.weapon.fireAtXY(t.x,760)},t);t.game.time.events.add(6*l.default.Timer.SECOND,function(){e.destroy(),t.game.time.events.remove(n),t.shootAtPlayerRunning=!1,t.mirrorBeam()})})},this)}}},{key:"update",value:function(){this.dead||this.paralyze||(this.game.physics.arcade.collide(this,this.player.weaponGun.bullets,this.hit,null,this),
// this.game.world.bringToTop(this.weapon.bullets); 
this.game.world.bringToTop(this),this.game.world.setChildIndex(this.weapon.bullets,13),this.game.physics.arcade.collide(this.weapon.bullets,this.layer,this.collisionHandler,null,this),this.game.physics.arcade.collide(this.weapon.bullets,this.player.weapon.bullets,this.reverse,null,this),this.game.physics.arcade.collide(this.weapon.bullets,this.player,this.player.bulletHit,null,this))}},{key:"reverse",value:function(t,e){t.body.velocity.x*=-1.8,t.body.velocity.y*=-1.8}},{key:"collisionHandler",value:function(t,e){this.game.camera.shake(.003,100),this.jailAttackRunning&&t.kill();var i=this.game.add.emitter(t.x,t.y,2);i.fixedToCamera=!0,i.setAlpha(1,0,2e3,null,!1),i.setXSpeed(this.game.rnd.integerInRange(-100,100)),i.gravity=150,i.minParticleScale=.1,i.maxParticleScale=.5,i.setYSpeed(-100),i.makeParticles("bulletBeam",100),i.start(!0,0,null,10),this.game.time.events.add(2e3,function(){i.destroy()},this)}}]),e}(l.default.Sprite);e.default=h},/* 385 */
/***/
function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),r=i(1),o=(a(r),i(22)),l=a(o),h=function(){function t(e,i,a,s){n(this,t),this.game=e,this.level=i,this.width=a,this.height=s,this.scaleRatio={width:l.default.phaserConfig.width,height:l.default.phaserConfig.height},this.game.scale.setGameSize(this.width,this.height)}return s(t,[{key:"startScaling",value:function(){var t=this;this.scaleTween=this.game.add.tween(this.scaleRatio).to({width:this.width,height:this.height},3e3,"Linear",!0,0,0,!1),this.scaleLoop=this.game.time.events.loop(10,function(){t.game.scale.setGameSize(t.scaleRatio.width,t.scaleRatio.height),t.level.groundLayer.resizeWorld()},this),this.scaleTween.onComplete.add(function(){t.level.initMap(),t.game.time.events.remove(t.scaleLoop)},this)}}]),t}();e.default=h},/* 386 */
/***/
function(t,e,i){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(){return a(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),r(e,[{key:"init",value:function(t){this.param=t}},{key:"create",value:function(){var t=this,e=this.game.add.emitter(-500,0,400);e.fixedToCamera=!0,e.width=2*this.game.camera.width,e.angle=-30,e.makeParticles("rain"),e.minParticleScale=.1,e.maxParticleScale=.5,e.setYSpeed(200,310),e.setXSpeed(-5,5),e.minRotation=180,e.maxRotation=0,e.gravity=200,e.start(!1,2500,1,0),this.autumnGlimmerEmitter=this.game.add.emitter(-500,0,150),this.autumnGlimmerEmitter.fixedToCamera=!0,this.autumnGlimmerEmitter.width=this.game.world.bounds.width,this.autumnGlimmerEmitter.height=this.game.world.bounds.height,this.autumnGlimmerEmitter.minParticleScale=.1,this.autumnGlimmerEmitter.maxParticleScale=.5,this.autumnGlimmerEmitter.setScale(-2,2,1,1,3e3,l.default.Easing.Sinusoidal.InOut,!0),this.autumnGlimmerEmitter.setYSpeed(300),this.autumnGlimmerEmitter.setXSpeed(-300,300),this.autumnGlimmerEmitter.minParticleScale=.25,this.autumnGlimmerEmitter.maxParticleScale=1,this.autumnGlimmerEmitter.gravity=.5,this.autumnGlimmerEmitter.minRotation=25,this.autumnGlimmerEmitter.setAlpha(.5,1),this.autumnGlimmerEmitter.makeParticles("glimmerParticle"),this.autumnGlimmerEmitter.start(!1,5e3,5,0),
// if(this.game.soundManager.sound !== undefined){
//     this.game.soundManager.fadeOut();
// }
this.game.musicPlayer.playMusic("MxTrailer"),void 0!==this.param&&"skip"!==this.param&&this.game.camera.flash(0,8e3),this.logo=this.game.add.sprite(this.game.camera.width/2,this.game.camera.height/2-10,"logo"),this.logo.anchor.set(.5),
// this.logo.scale.setTo(0.2);
this.logo.smoothed=!1,this.game.time.events.add(4e3,function(){t.logoTween=t.game.add.tween(t.logo).to({alpha:0},5e3,"Linear",!0,0),t.logoTween.onComplete.add(function(){t.textFade("Development","Michael Dorn"),t.game.time.events.add(8e3,function(){t.textFade("Game Art","Kang Wang\nSabine Rimmer\nNina Leinwatter\nCarina Bichler\nIsabella Griessenberger")},t),t.game.time.events.add(2e4,function(){t.textFade("Sound and Music","Roland K$stler")},t),t.game.time.events.add(28e3,function(){t.textFade("Project Management","Manuela Abdalla")},t),t.game.time.events.add(35e3,function(){t.textFade("Story","Lia Lembacher")},t),t.game.time.events.add(42e3,function(){t.textFade("Video","Jan Rogner")},t),t.game.time.events.add(5e4,function(){t.textFade("Social Media","Felix Kirsch")},t),t.game.time.events.add(57e3,function(){t.textFade("Voices","Priest: Samuel Luftensteiner \n Smith: Michael Hauptmann")},t),t.game.time.events.add(65e3,function(){t.textFade("Special Thanks To:","Richard Davey (Creater of Phaser)\nColin Vella (Creater of Tilemap Plus)")},t),t.game.time.events.add(72e3,function(){t.textFade("Thank You!","For playing Prophecy of the Fallen!")},t),t.game.time.events.add(95e4,function(){
// Redirect Menu
t.state.start("MainMenu",!0,!1)},t)},t)},this)}},{key:"textFade",value:function(t,e){var i=this;this.headline=game.add.retroFont("carinaFont",7,7,l.default.RetroFont.TEXT_SET1,18,0,2,0,1),this.headline.setText(t,!0,-1,5,"left",!0),this.text=game.add.retroFont("carinaFont",7,7,l.default.RetroFont.TEXT_SET1,18,0,2,0,1),this.text.setText(e,!0,-1,5,"center",!0),this.headlineImage=this.game.add.image(this.game.camera.width/2,this.game.camera.height/2-50,this.headline),this.headlineImage.anchor.setTo(.5),this.headlineImage.alpha=0,this.headlineImage.scale.set(2),this.textImage=this.game.add.image(this.game.camera.width/2,this.game.camera.height/2-20,this.text),this.textImage.anchor.setTo(.5,0),this.textImage.alpha=0,this.textImage.scale.set(1),
// Headline Alpha Tween In
this.fadeInTweenHeadline=this.game.add.tween(this.headlineImage).to({alpha:1},5e3,l.default.Easing.Exponential.In,!0,0),
// Text Alpha Tween In
this.game.time.events.add(1e3,function(){i.fadeInTweenText=i.game.add.tween(i.textImage).to({alpha:1},4e3,l.default.Easing.Exponential.In,!0,0)},this),this.game.time.events.add(5e3,function(){i.fadeOutTweenHeadline=i.game.add.tween(i.headlineImage).to({alpha:0},4e3,"Linear",!0,0),i.fadeOutTweenText=i.game.add.tween(i.textImage).to({alpha:0},4e3,"Linear",!0,0)},this)}},{key:"update",value:function(){}},{key:"render",value:function(){}}]),e}(l.default.State);e.default=h},/* 387 */
/***/
function(t,e,i){i(138)(i(388))},/* 388 */
/***/
function(t,e){t.exports="'use strict';\n\n/* Phaser Particle Storm Plugin v1.0.0 (C) Copyright 2015 Photon Storm Ltd. */\nPhaser.ParticleStorm = function (a, b) {\n\tPhaser.Plugin.call(this, a, b), this.emitters = [], this.dataList = {};\n\tvar c = PIXI.canUseNewCanvasBlendModes();\n\tthis.blendModeMap = {\n\t\tNORMAL: [0, 'source-over'],\n\t\tADD: [1, 'lighter'],\n\t\tMULTIPLY: [2, c ? 'multiply' : 'source-over'],\n\t\tSCREEN: [3, c ? 'screen' : 'source-over'],\n\t\tOVERLAY: [4, c ? 'overlay' : 'source-over'],\n\t\tDARKEN: [5, c ? 'darken' : 'source-over'],\n\t\tLIGHTEN: [6, c ? 'lighten' : 'source-over'],\n\t\tCOLOR_DODGE: [7, c ? 'color-dodge' : 'source-over'],\n\t\tCOLOR_BURN: [8, c ? 'color-burn' : 'source-over'],\n\t\tHARD_LIGHT: [9, c ? 'hard-light' : 'source-over'],\n\t\tSOFT_LIGHT: [10, c ? 'soft-light' : 'source-over'],\n\t\tDIFFERENCE: [11, c ? 'difference' : 'source-over'],\n\t\tEXCLUSION: [12, c ? 'exclusion' : 'source-over'],\n\t\tHUE: [13, c ? 'hue' : 'source-over'],\n\t\tSATURATION: [14, c ? 'saturation' : 'source-over'],\n\t\tCOLOR: [15, c ? 'color' : 'source-over'],\n\t\tLUMINOSITY: [16, c ? 'luminosity' : 'source-over']\n\t}, this.hsv = Phaser.Color.HSVColorWheel();\n}, Phaser.ParticleStorm.prototype = Object.create(Phaser.Plugin.prototype), Phaser.ParticleStorm.prototype.constructor = Phaser.ParticleStorm, Phaser.ParticleStorm.SPRITE = 'sprite', Phaser.ParticleStorm.PIXEL = 'pixel', Phaser.ParticleStorm.RENDERTEXTURE = 'render texture', Phaser.ParticleStorm.SPRITE_BATCH = 'sprite batch', Phaser.ParticleStorm.BITMAP_DATA = 'bitmap data', Phaser.ParticleStorm.BASE = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_1 = {\n\tvalue: 1,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 1\n}, Phaser.ParticleStorm.BASE_255 = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tmin: 0,\n\tmax: 255,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_359 = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tmin: 0,\n\tmax: 359,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_NULL = {\n\tvalue: null,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_EMIT = {\n\tname: null,\n\tvalue: 0,\n\tinitial: 0,\n\tcontrol: null,\n\tat: null,\n\tinherit: !0,\n\toffsetX: 0,\n\toffsetY: 0\n}, Phaser.ParticleStorm.Controls = {}, Phaser.ParticleStorm.Zones = {}, Phaser.ParticleStorm.prototype.createEmitter = function (a, b, c) {\n\tvar d = new Phaser.ParticleStorm.Emitter(this, a, b, c);\n\treturn this.emitters.push(d), d;\n}, Phaser.ParticleStorm.prototype.removeEmitter = function (a) {\n\tfor (var b = 0; b < this.emitters.length; b++) {\n\t\tif (this.emitters[b] === a) return void this.emitters.splice(b, 1);\n\t}\n}, Phaser.ParticleStorm.prototype.addData = function (a, b) {\n\tif (void 0 === a) return this;\n\tif (Array.isArray(a)) for (var c = 0; c < a.length; c++) {\n\t\tthis.dataList[a[c]] = this.game.cache.getJSON(a[c]);\n\t} else void 0 !== b ? this.dataList[a] = b : this.dataList[a] = this.game.cache.getJSON(a);\n\treturn this;\n}, Phaser.ParticleStorm.prototype.getData = function (a) {\n\treturn this.dataList[a];\n}, Phaser.ParticleStorm.prototype.clearData = function (a) {\n\tif (void 0 === a) this.dataList = {};else if (Array.isArray(a)) for (var b = 0; b < a.length; b++) {\n\t\tdelete this.dataList[a[b]];\n\t} else delete this.dataList[a];\n\treturn this;\n}, Phaser.ParticleStorm.prototype.cloneData = function (a, b) {\n\tif (void 0 === a) return this;\n\tif (Array.isArray(a)) for (var c = 0; c < a.length; c++) {\n\t\tthis.dataList[a[c]] = Phaser.Utils.extend(!0, this.game.cache.getJSON(a[c]));\n\t} else void 0 !== b ? this.dataList[a] = Phaser.Utils.extend(!0, b) : this.dataList[a] = Phaser.Utils.extend(!0, this.game.cache.getJSON(a));\n\treturn this;\n}, Phaser.ParticleStorm.prototype.createPointZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Point(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createLineZone = function (a, b, c, d) {\n\treturn new Phaser.ParticleStorm.Zones.Line(this.game, a, b, c, d);\n}, Phaser.ParticleStorm.prototype.createRectangleZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Rectangle(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createCircleZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Circle(this.game, a);\n}, Phaser.ParticleStorm.prototype.createEllipseZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Ellipse(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createLinearSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 0, a, b, c);\n}, Phaser.ParticleStorm.prototype.createBezierSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 1, a, b, c);\n}, Phaser.ParticleStorm.prototype.createCatmullSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 2, a, b, c);\n}, Phaser.ParticleStorm.prototype.createSplineZone = function (a, b, c, d) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, a, b, c, d);\n}, Phaser.ParticleStorm.prototype.createTextZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Text(this.game, a);\n}, Phaser.ParticleStorm.prototype.createImageZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Image(this.game, a);\n}, Phaser.ParticleStorm.prototype.update = function () {\n\tif (this.active) for (var a = 0; a < this.emitters.length; a++) {\n\t\tthis.emitters[a].enabled && !this.emitters[a].manualUpdate && this.emitters[a].update();\n\t}\n}, Phaser.ParticleStorm.Emitter = function (a, b, c, d) {\n\tthis.game = a.game, this.parent = a, this.renderer = null, this.renderType = null, this.graph = Phaser.ParticleStorm.Graph, this.enabled = !1, this.manualUpdate = !1, this.scrollSpeed = new Phaser.Point(), this.force = new Phaser.Point(), this.onEmit = null, this.onComplete = null, this.onKill = null, this.particleClass = Phaser.ParticleStorm.Particle, this.timer = this.game.time.create(!1), this.timerEvent = null, this.list = [], this.pool = [], this.batch = [], this.wells = [], this._rnd = new Phaser.Point(), this._step = new Phaser.Point(), this._pCount = 0, this._delay = { enabled: !1, start: 0, inc: 0, visible: !1 }, this.init(b, c, d);\n}, Phaser.ParticleStorm.Emitter.prototype = {\n\tinit: function init(a, b, c) {\n\t\tvoid 0 === a && (a = Phaser.ParticleStorm.SPRITE);\n\t\tvar d = this.game.width,\n\t\t    e = this.game.height;\n\t\tswitch (a) {\n\t\t\tcase Phaser.ParticleStorm.SPRITE:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.Sprite(this);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.PIXEL:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.Pixel(this, d, e);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.RENDERTEXTURE:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.RenderTexture(this, d, e);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.SPRITE_BATCH:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.SpriteBatch(this);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.BITMAP_DATA:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.BitmapData(this, d, e);\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\treturn !1;\n\t\t}\n\t\tthis.renderType = a, b && this.force.set(b.x, b.y), c && this.scrollSpeed.set(c.x, c.y), this.list = [], this.pool = [], this.wells = [], this.enabled = !0;\n\t},\n\taddToWorld: function addToWorld(a) {\n\t\treturn void 0 === a && (a = this.game.world), this.renderer.addToWorld(a);\n\t},\n\tcreateGravityWell: function createGravityWell(a, b, c, d, e) {\n\t\tvar f = new Phaser.ParticleStorm.GravityWell(this, a, b, c, d, e);\n\t\treturn this.wells.push(f), f;\n\t},\n\tseed: function seed(a) {\n\t\tfor (var b = 0; a > b; b++) {\n\t\t\tvar c = new Phaser.ParticleStorm.Particle(this);\n\t\t\tthis.pool.push(c);\n\t\t}\n\t\treturn this;\n\t},\n\temitDelayed: function emitDelayed(a, b, c, d, e) {\n\t\treturn !this.enabled || !this.parent.dataList[b] || 0 >= a ? null : (this.timerEvent = this.timer.add(a, this.emit, this, b, c, d, e), this.timer.start(), this.timerEvent);\n\t},\n\temit: function emit(a, b, c, d) {\n\t\tif (!this.enabled || !this.parent.dataList[a]) return null;\n\t\tif (this.batch = [], this._pCount = 0, this._step.x = 0, this._step.y = 0, void 0 === b && (b = 0), void 0 === c && (c = 0), !d) return this.emitParticle(a, b, c, null);\n\t\tvar e = d.hasOwnProperty('total') ? d.total : 1;\n\t\tif (d.xStep > 0 ? this._step.x = d.xStep : this._step.x = 0, d.yStep > 0 ? this._step.y = d.yStep : this._step.y = 0, this._delay.enabled = !1, d.delay && (this._delay.enabled = !0, 'number' == typeof d.delay ? (this._delay.start = d.delay, this._delay.step = 0, this._delay.visible = !1) : (this._delay.start = d.delay.start ? d.delay.start : 0, this._delay.step = d.delay.step ? d.delay.step : 0, this._delay.visible = d.delay.visible ? !0 : !1)), d.zone) {\n\t\t\tif (void 0 === d.random && void 0 === d.full && void 0 === d.percent || d.random) d.zone.emit(this, a, b, c, e, d.setAlpha, d.setColor);else if (void 0 !== d.percent || void 0 === d.full && d.random) {\n\t\t\t\tif (void 0 !== d.percent) {\n\t\t\t\t\tvar f = 0;\n\t\t\t\t\t'number' == typeof d.percent ? f = d.percent : d.percent.hasOwnProperty('min') ? f = this.game.rnd.between(d.percent.min, d.percent.max) : d.percent.callback && (f = d.percent.callback.call(d.percent.context, this)), d.zone.emitPercent(this, a, b, c, e, f);\n\t\t\t\t}\n\t\t\t} else d.zone.emitFull(this, a, b, c, d.step, d.spacing, d.setAlpha, d.setColor);\n\t\t} else for (var g = 0; e > g; g++) {\n\t\t\tthis.emitParticle(a, b, c, null);\n\t\t}if (d.radiate) for (var h = 0; h < this.batch.length; h++) {\n\t\t\tthis.batch[h].radiate(d.radiate.velocity, d.radiate.from, d.radiate.to);\n\t\t} else if (d.radiateFrom) for (var h = 0; h < this.batch.length; h++) {\n\t\t\tthis.batch[h].radiateFrom(d.radiateFrom.x, d.radiateFrom.y, d.radiateFrom.velocity);\n\t\t}var i = d.hasOwnProperty('repeat') ? d.repeat : 0;\n\t\tif (0 !== i) {\n\t\t\tvar j = d.hasOwnProperty('frequency') ? d.frequency : 250;\n\t\t\tdelete d.repeat, -1 === i ? this.timerEvent = this.timer.loop(j, this.emit, this, a, b, c, d) : i > 0 && (this.timerEvent = this.timer.repeat(j, i, this.emit, this, a, b, c, d)), this.timer.start();\n\t\t}\n\t\treturn this._pCount = 0, this.batch;\n\t},\n\temitParticle: function emitParticle(a, b, c, d) {\n\t\tvar e = this.pool.pop();\n\t\treturn e || (e = new this.particleClass(this)), e.parent = d, Array.isArray(b) && (b = this.game.rnd.between(b[0], b[1])), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), b += this._step.x * this._pCount, c += this._step.y * this._pCount, e.reset(this.renderer, b, c, this.parent.dataList[a]), e.alive ? (!d && this._delay.enabled && (e.delay += this._delay.start + this._pCount * this._delay.step, e.delayVisible = this._delay.visible), this.list.push(e), this.batch.push(e), d || this._pCount++) : (e.kill(), this.onKill && this.onKill.dispatch(this, e), this.pool.push(e)), e;\n\t},\n\tupdate: function update() {\n\t\tvar a = this.game.time.elapsed;\n\t\tthis.renderer.preUpdate();\n\t\tfor (var b = this.list.length - 1; b >= 0; b--) {\n\t\t\tvar c = this.list[b];\n\t\t\tc.ignoreScrollSpeed || (c.transform.x += this.scrollSpeed.x, c.transform.y += this.scrollSpeed.y);\n\t\t\tfor (var d = 0; d < this.wells.length; d++) {\n\t\t\t\tthis.wells[d].active && this.wells[d].step(c);\n\t\t\t}c.step(a, this.force) || (c.kill(), this.pool.push(c), this.list.splice(b, 1));\n\t\t}\n\t\treturn this.renderer.postUpdate(), this.list.length;\n\t},\n\tupdateFrequency: function updateFrequency(a, b, c, d) {\n\t\tif (a.at) {\n\t\t\tfor (var e = 0, f = 0; f < a.at.length; f++) {\n\t\t\t\tvar g = a.at[f];\n\t\t\t\t(g.time > c || 0 === g.time && 0 === c) && g.time <= d && (g.value > 0 && g.value < 1 ? Math.random() < g.value && (e += 1) : e += g.value);\n\t\t\t}\n\t\t\treturn e;\n\t\t}\n\t\treturn this.graph.getParamArea(a, c, d) * b;\n\t},\n\tforEach: function forEach(a, b) {\n\t\tif (arguments.length <= 2) for (var c = 0; c < this.list.length; c++) {\n\t\t\ta.call(b, this.list[c]);\n\t\t} else {\n\t\t\tfor (var d = [null], c = 2; c < arguments.length; c++) {\n\t\t\t\td.push(arguments[c]);\n\t\t\t}for (var c = 0; c < this.list.length; c++) {\n\t\t\t\td[0] = this.list[c], a.apply(b, d);\n\t\t\t}\n\t\t}\n\t},\n\tforEachNew: function forEachNew(a, b) {\n\t\tif (0 !== this.batch.length) if (arguments.length <= 2) for (var c = 0; c < this.batch.length; c++) {\n\t\t\ta.call(b, this.batch[c]);\n\t\t} else {\n\t\t\tfor (var d = [null], c = 2; c < arguments.length; c++) {\n\t\t\t\td.push(arguments[c]);\n\t\t\t}for (var c = 0; c < this.batch.length; c++) {\n\t\t\t\td[0] = this.batch[c], a.apply(b, d);\n\t\t\t}\n\t\t}\n\t},\n\tgetParticle: function getParticle(a) {\n\t\treturn void 0 === a && (a = 0), this.list[a] ? this.list[a] : null;\n\t},\n\tdebug: function debug(a, b) {\n\t\tvar c = this.game.debug;\n\t\tif (c) {\n\t\t\tc.start(a + 4, b + 16, 'rgb(255, 255, 255)', 132), c.context.fillStyle = 'rgba(0, 74, 128, 0.5)', c.context.fillRect(a, b, 360, 70);\n\t\t\tvar d = this.force.x + '',\n\t\t\t    e = this.force.y + '';\n\t\t\tc.line('Force:', d.substr(0, 8), e.substr(0, 8)), c.line('Scroll Speed:', this.scrollSpeed.x, this.scrollSpeed.y), c.line('Alive:', 'Dead:', 'Total:'), c.line(this.alive, this.dead, this.total), c.stop();\n\t\t}\n\t},\n\tdestroy: function destroy() {\n\t\tthis.renderer.clear && this.renderer.clear(), this.renderer.destroy(), this.renderer = null;\n\t\tfor (var a = this.list.length - 1; a >= 0; a--) {\n\t\t\tthis.list[a].kill(), this.list.splice(a, 1);\n\t\t}this.list = [], this.pool = [], this.batch = [], this.wells = [];\n\t}\n}, Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'paused', {\n\tget: function get() {\n\t\treturn !this.enabled;\n\t},\n\tset: function set(a) {\n\t\tthis.enabled = !a;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'total', {\n\tget: function get() {\n\t\treturn this.alive + this.dead;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'alive', {\n\tget: function get() {\n\t\treturn this.list.length;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'dead', {\n\tget: function get() {\n\t\treturn this.pool.length;\n\t}\n}), Phaser.ParticleStorm.Emitter.prototype.constructor = Phaser.ParticleStorm.Emitter, Phaser.ParticleStorm.Particle = function (a) {\n\tthis.emitter = a, this.renderer = null, this.graph = Phaser.ParticleStorm.Graph, this.transform = new Phaser.ParticleStorm.Controls.Transform(this), this.color = new Phaser.ParticleStorm.Controls.Color(this), this.texture = new Phaser.ParticleStorm.Controls.Texture(this), this.parent = null, this.lifespan = 2e3, this.keepAlive = !1, this.delay = 0, this.delayVisible = !1, this.life = 0, this.sprite = null, this.visible = !1, this.isComplete = !1, this.ignoreForce = !1, this.ignoreScrollSpeed = !1, this.emit = {}, this._age = 0, this._lastPercent = 0, this._numToEmit = 0;\n}, Phaser.ParticleStorm.Particle.prototype = {\n\treset: function reset(a, b, c, d) {\n\t\treturn this.renderer = a, this.transform.reset(), this.color.reset(), this.texture.reset(), this.emit = Object.create(Phaser.ParticleStorm.BASE_EMIT), this.isComplete = !1, this.keepAlive = !1, this.delay = 0, this.delayVisible = !1, this.ignoreForce = !1, this.ignoreScrollSpeed = !1, this.alive = !1, this.lifespan = 2e3, this.life = 0, this.visible = !1, this._age = 0, this._lastPercent = 0, this._numToEmit = 0, void 0 !== d && this.create(b, c, d), this;\n\t},\n\tcreate: function create(a, b, c) {\n\t\tif (c.hasOwnProperty('lifespan') && (this.lifespan = this.graph.getMinMax(c.lifespan)), this.keepAlive = c.keepAlive, c.hasOwnProperty('delay') && (this.delay = this.graph.getMinMax(c.delay)), this.ignoreForce = c.ignoreForce, this.ignoreScrollSpeed = c.ignoreScrollSpeed, this.transform.init(a, b, c), this.color.init(c), this.texture.init(c), c.emit && (this.emit = Object.create(c.emit)), this.visible = c.visible === !1 ? !1 : !0, this.alive = !0, this.parent && this.parent.emit && this.parent.emit.inherit && (this.alive = this.onInherit(this.parent)), this.alive) {\n\t\t\tthis.transform.step(), this.color.step();\n\t\t\tvar d = this.renderer.add(this);\n\t\t\td && this.texture.step(c, d), this.onEmit(), this.emitter.onEmit && this.emitter.onEmit.dispatch(this.emitter, this), this.renderer.update(this);\n\t\t}\n\t\treturn this;\n\t},\n\tstep: function step(a, b) {\n\t\tif (this._age += a, this.delay) {\n\t\t\tif (this._age < this.delay) return this.renderer.update(this), !0;\n\t\t\tthis.delay = 0, this._age = 0;\n\t\t}\n\t\tif (this._lastPercent = this.life, this.lifespan > 0 && (this.life = Math.min(this._age / this.lifespan, 1)), b && !this.ignoreForce && (this.transform.velocity.x.value += b.x, this.transform.velocity.y.value += b.y), this.transform.step(), this.color.step(), this.onUpdate(), this.alive) {\n\t\t\tfor (this._numToEmit += this.emitter.updateFrequency(this.emit, a, this._lastPercent, this.life); this._numToEmit >= 1;) {\n\t\t\t\tthis.emitChild();\n\t\t\t}this.renderer.update(this);\n\t\t}\n\t\treturn this.isComplete || 1 !== this.life || (this.isComplete = !0, this.emitter.onComplete && this.emitter.onComplete.dispatch(this.emitter, this)), this.life < 1 || this.keepAlive;\n\t},\n\temitChild: function emitChild() {\n\t\tvar a = 0 | this.graph.getMinMax(this.emit.offsetX),\n\t\t    b = 0 | this.graph.getMinMax(this.emit.offsetY);\n\t\tif (this.emit.rect) {\n\t\t\tvar c = this.emit.rect;\n\t\t\ta = Math.random() * c.width + c.x, b = Math.random() * c.height + c.y;\n\t\t} else if (this.emit.circle) {\n\t\t\tvar d = this.emit.circle;\n\t\t\tb = Math.random() * d * 2 - d;\n\t\t\tvar e = Math.sqrt(d * d - b * b);\n\t\t\ta = Math.random() * e * 2 - e;\n\t\t}\n\t\tvar f = this.emit.name;\n\t\tif ('string' != typeof f && (f = this.getChildKey(this.emit.name)), f) {\n\t\t\tvar g = this.emitter.emitParticle(f, this.transform.x + a, this.transform.y + b, this);\n\t\t\tg && this.emit.overwrite && this.applyOverwrite(this.emit.overwrite, g);\n\t\t}\n\t\tthis._numToEmit -= 1;\n\t},\n\tapplyOverwrite: function applyOverwrite(a, b) {\n\t\treturn b;\n\t},\n\tgetChildKey: function getChildKey(a) {\n\t\tif (Array.isArray(a)) return this.emitter.game.rnd.pick(a);\n\t\tif (void 0 !== a.at && a.at.length > 0) {\n\t\t\tfor (var b = a.at[0].value, c = 0; c < a.at.length && !(a.at[c].time > this.life); c++) {\n\t\t\t\tb = a.at[c].value;\n\t\t\t}return b;\n\t\t}\n\t\treturn null;\n\t},\n\tradiate: function radiate(a, b, c) {\n\t\tvoid 0 === c && void 0 !== b ? c = b : (void 0 === b && (b = 0), void 0 === c && (c = 359));\n\t\tvar d = a;\n\t\ta.hasOwnProperty('min') ? d = this.graph.getMinMax(a) : Array.isArray(a) && (d = parseFloat(this.emitter.game.rnd.pick(a), 10));\n\t\tvar e = (Math.random() * (c - b) + b) * Math.PI / 180;\n\t\treturn this.transform.velocity.x.value = Math.sin(e) * d, this.transform.velocity.y.value = -Math.cos(e) * d, this;\n\t},\n\tradiateFrom: function radiateFrom(a, b, c) {\n\t\tvar d = c;\n\t\tc.hasOwnProperty('min') ? d = this.graph.getMinMax(c) : Array.isArray(c) && (d = parseFloat(this.emitter.game.rnd.pick(c), 10));\n\t\tvar e = this.transform.x - a,\n\t\t    f = this.transform.y - b,\n\t\t    g = Math.sqrt(e * e + f * f);\n\t\treturn this.transform.velocity.x.value = e * d / g, this.transform.velocity.y.value = f * d / g, this;\n\t},\n\ttarget: function target(a) {\n\t\tvar b = 0,\n\t\t    c = 0,\n\t\t    d = this.transform;\n\t\tif (a.x && (b = a.x), a.y && (c = a.y), a.zone) {\n\t\t\tvar e = a.zone.getRandom();\n\t\t\tb += e.x, c += e.y;\n\t\t}\n\t\tvar f = Math.atan2(c - d.y, b - d.x),\n\t\t    g = d.x - b,\n\t\t    h = d.y - c,\n\t\t    i = Math.sqrt(g * g + h * h) / (this.lifespan / 1e3),\n\t\t    j = Math.cos(f) * i * d.time.physicsElapsed,\n\t\t    k = Math.sin(f) * i * d.time.physicsElapsed;\n\t\treturn a.speed ? (this.graph.fromControl({ value: 2 * j, control: a.speed }, d.velocity.x), this.graph.fromControl({ value: 2 * k, control: a.speed }, d.velocity.y)) : (d.velocity.x.value = j, d.velocity.y.value = k), this;\n\t},\n\tsetLife: function setLife(a, b) {\n\t\treturn this.lifespan = this.graph.getMinMax(a), this.life = 0, this._age = 0, this._lastPercent = 0, this.isComplete = !1, this.keepAlive = b, this;\n\t},\n\tkill: function kill() {\n\t\tthis.alive = !1, this.renderer.kill(this), this.onKill();\n\t},\n\tonEmit: function onEmit() {},\n\tonUpdate: function onUpdate() {},\n\tonInherit: function onInherit() {\n\t\treturn !0;\n\t},\n\tonKill: function onKill() {}\n}, Object.defineProperty(Phaser.ParticleStorm.Particle.prototype, 'lifePercent', {\n\tget: function get() {\n\t\treturn Math.round(100 * this.life);\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Particle.prototype, 'frequency', {\n\tget: function get() {\n\t\treturn this.emit.value;\n\t},\n\tset: function set(a) {\n\t\tthis.emit.value = a;\n\t}\n}), Phaser.ParticleStorm.Particle.prototype.constructor = Phaser.ParticleStorm.Particle, Phaser.ParticleStorm.GravityWell = function (a, b, c, d, e, f) {\n\tvoid 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 100), void 0 === f && (f = 50), this.emitter = a, this.time = a.game.time, this.position = new Phaser.Point(b, c), this.active = !0, this._gravity = f, this._power = 0, this._epsilon = 0, this.power = d, this.epsilon = e;\n}, Phaser.ParticleStorm.GravityWell.prototype = {\n\tstep: function step(a) {\n\t\tvar b = this.position.x - a.transform.x,\n\t\t    c = this.position.y - a.transform.y,\n\t\t    d = b * b + c * c;\n\t\tif (0 !== d) {\n\t\t\tvar e = Math.sqrt(d);\n\t\t\td < this._epsilon && (d = this._epsilon);\n\t\t\tvar f = this._power * this.time.elapsed / (d * e);\n\t\t\ta.transform.velocity.x.value += b * f, a.transform.velocity.y.value += c * f;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'epsilon', {\n\tget: function get() {\n\t\treturn Math.sqrt(this._epsilon);\n\t},\n\tset: function set(a) {\n\t\tthis._epsilon = a * a;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'power', {\n\tget: function get() {\n\t\treturn this._power / this.gravity;\n\t},\n\tset: function set(a) {\n\t\tthis._power = a * this.gravity;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'gravity', {\n\tget: function get() {\n\t\treturn this._gravity;\n\t},\n\tset: function set(a) {\n\t\tvar b = this.power;\n\t\tthis._gravity = a, this.power = b;\n\t}\n}), Phaser.ParticleStorm.GravityWell.prototype.constructor = Phaser.ParticleStorm.GravityWell, Phaser.ParticleStorm.Graph = {\n\tCONTROL_LINEAR: [{ x: 0, y: 1 }, { x: 1, y: 0 }],\n\tCONTROL_REVERSE: [{ x: 0, y: 0 }, { x: 1, y: 1 }],\n\tCONTROL_YOYO: [{ x: 0, y: 0 }, { x: 0.5, y: 1 }, { x: 1, y: 0 }],\n\tgetControlValue: function getControlValue(a, b) {\n\t\tvar c = 0,\n\t\t    d = a[c];\n\t\tif (d.x === b) return d.y;\n\t\tfor (; d.x <= b;) {\n\t\t\tif (c >= a.length - 1) return d.x;\n\t\t\td = a[++c];\n\t\t}\n\t\tvar e = a[c - 1];\n\t\treturn e.y + (b - e.x) * (d.y - e.y) / (d.x - e.x);\n\t},\n\tgetControlValues: function getControlValues(a, b, c) {\n\t\tvar d = Phaser.ParticleStorm.Graph.getControlValue(a, b),\n\t\t    e = [{ x: b, y: d }];\n\t\tif (b >= c) return e;\n\t\tfor (var f = 0; f < a.length; f++) {\n\t\t\tif (a[f].x > b) {\n\t\t\t\tif (!(a[f].x < c)) break;\n\t\t\t\te.push(a[f]);\n\t\t\t}\n\t\t}return e.push({ x: c, y: Phaser.ParticleStorm.Graph.getControlValue(a, c) }), e;\n\t},\n\tgetParamArea: function getParamArea(a, b, c) {\n\t\treturn a.control ? a.value * Phaser.ParticleStorm.Graph.getControlArea(a.control, b, c) : a.value;\n\t},\n\tgetControlArea: function getControlArea(a, b, c) {\n\t\tvar d = Phaser.ParticleStorm.Graph.getControlValues(a, b, c);\n\t\tif (b >= c) return d[0].y;\n\t\tfor (var e = d.length > 1 ? 0 : d.y, f = d[0], g = 1; g < d.length; g++) {\n\t\t\tvar h = d[g];\n\t\t\te += 0.5 * (h.x - f.x) * (f.y + h.y), f = h;\n\t\t}\n\t\treturn e;\n\t},\n\tgetMinMaxInitial: function getMinMaxInitial(a) {\n\t\treturn void 0 !== a.initial ? Phaser.ParticleStorm.Graph.getMinMax(a.initial) : 0;\n\t},\n\tisNumeric: function isNumeric(a) {\n\t\treturn !isNaN(parseFloat(a)) && isFinite(a);\n\t},\n\tgetMinMax: function getMinMax(a) {\n\t\treturn void 0 !== a && null !== a && void 0 !== a.min && void 0 !== a.max ? a.min + Math.random() * (a.max - a.min) : a;\n\t},\n\tclone: function clone(a, b) {\n\t\treturn b.value = a.value, b.initial = a.initial, b.delta = a.delta, b.offset = a.offset, b.min = a.min, b.max = a.max, b.control = a.control, b;\n\t},\n\tfromControl: function fromControl(a, b) {\n\t\tvoid 0 !== a.value && (b.value = Phaser.ParticleStorm.Graph.getMinMax(a.value)), a.control && ('linear' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_LINEAR : 'reverse' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_REVERSE : 'yoyo' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_YOYO : b.control = a.control);\n\t},\n\tfromData: function fromData(a, b) {\n\t\treturn void 0 === a || null === a ? !1 : 'number' == typeof a ? (b.value = a, !0) : (void 0 !== a.min ? b.value = Phaser.ParticleStorm.Graph.getMinMax(a) : void 0 !== a.value && (b.value = Phaser.ParticleStorm.Graph.getMinMax(a.value)), void 0 !== a.initial && (b.initial = Phaser.ParticleStorm.Graph.getMinMax(a.initial)), void 0 !== a.delta && (b.delta = Phaser.ParticleStorm.Graph.getMinMax(a.delta)), void 0 !== a.offset && (b.offset = Phaser.ParticleStorm.Graph.getMinMax(a.offset)), a.control && ('linear' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_LINEAR : 'reverse' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_REVERSE : 'yoyo' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_YOYO : b.control = a.control), !0);\n\t},\n\tgetValue: function getValue(a, b) {\n\t\tif (!a.control || void 0 === b) return a.value;\n\t\tvar c = a.control[0];\n\t\tif (c.x === b) return c.y;\n\t\tvar d = a.control.length - 1,\n\t\t    e = a.control[d];\n\t\tif (e.x === b) return e.y;\n\t\tfor (d = 0; c.x <= b;) {\n\t\t\tif (d >= a.control.length - 1) return c.y;\n\t\t\tc = a.control[++d];\n\t\t}\n\t\tvar f = a.control[d - 1];\n\t\treturn a.value * (f.y + (b - f.x) * (c.y - f.y) / (c.x - f.x));\n\t},\n\tgetClampedValue: function getClampedValue(a, b) {\n\t\treturn Phaser.Math.clamp(Math.floor(a.initial + this.getValue(a, b)), a.min, a.max);\n\t}\n}, Phaser.ParticleStorm.Zones = {}, Phaser.ParticleStorm.Zones.Base = function (a) {\n\tthis.game = a, this.active = !0, this.scale = new Phaser.Point(1, 1), this.alphaThreshold = 0, this._rnd = new Phaser.Point();\n}, Phaser.ParticleStorm.Zones.Base.prototype = {\n\tgetRandom: function getRandom() {\n\t\treturn this.shape === Phaser.Point ? this._rnd = this.shape : this.shape.random(this._rnd), this._rnd.x *= this.scale.x, this._rnd.y *= this.scale.y, this._rnd;\n\t},\n\temit: function emit(a, b, c, d, e) {\n\t\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\t\tfor (var f = null, g = 0; e > g; g++) {\n\t\t\tthis.shape.random(this._rnd), f = a.emitParticle(b, c + this._rnd.x * this.scale.x, d + this._rnd.y * this.scale.y, null);\n\t\t}return f;\n\t}\n}, Phaser.ParticleStorm.Zones.Base.prototype.constructor = Phaser.ParticleStorm.Zones.Base, Phaser.ParticleStorm.Zones.Point = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Point(b, c);\n}, Phaser.ParticleStorm.Zones.Point.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Point.prototype.constructor = Phaser.ParticleStorm.Zones.Point, Phaser.ParticleStorm.Zones.Rectangle = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Rectangle(0, 0, b, c);\n}, Phaser.ParticleStorm.Zones.Rectangle.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Rectangle.prototype.constructor = Phaser.ParticleStorm.Zones.Rectangle, Phaser.ParticleStorm.Zones.Circle = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Circle(0, 0, 2 * b);\n}, Phaser.ParticleStorm.Zones.Circle.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Circle.prototype.constructor = Phaser.ParticleStorm.Zones.Circle, Phaser.ParticleStorm.Zones.Ellipse = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Ellipse(0, 0, b, c);\n}, Phaser.ParticleStorm.Zones.Ellipse.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Ellipse.prototype.constructor = Phaser.ParticleStorm.Zones.Ellipse, Phaser.ParticleStorm.Zones.Line = function (a, b, c, d, e) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Line(b, c, d, e);\n}, Phaser.ParticleStorm.Zones.Line.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Line.prototype.constructor = Phaser.ParticleStorm.Zones.Line, Phaser.ParticleStorm.Zones.Spline = function (a, b, c, d, e) {\n\tvoid 0 === b && (b = 0), void 0 === c && (c = 1e3), void 0 === d && (d = !0), Phaser.ParticleStorm.Zones.Base.call(this, a), this.math = this.game.math, this.points = { x: [], y: [] }, this.path = [], this.resolution = c, this.mode = b, this.closed = d, this.mult = 0, this.update(e);\n}, Phaser.ParticleStorm.Zones.Spline.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Spline.prototype.constructor = Phaser.ParticleStorm.Zones.Spline, Phaser.ParticleStorm.Zones.Spline.prototype.update = function (a) {\n\tthis.points = { x: [], y: [] }, this.path = [];\n\tfor (var b = 0; b < a.length; b++) {\n\t\tthis.points.x.push(a[b].x), this.points.y.push(a[b].y);\n\t}this.closed && (this.points.x.push(a[0].x), this.points.y.push(a[0].y));\n\tfor (var c = 0, d = 1 / this.resolution, b = 0; 1 >= b; b += d) {\n\t\tif (0 === this.mode) var e = this.math.linearInterpolation(this.points.x, b),\n\t\t    f = this.math.linearInterpolation(this.points.y, b);else if (1 === this.mode) var e = this.math.bezierInterpolation(this.points.x, b),\n\t\t    f = this.math.bezierInterpolation(this.points.y, b);else if (2 === this.mode) var e = this.math.catmullRomInterpolation(this.points.x, b),\n\t\t    f = this.math.catmullRomInterpolation(this.points.y, b);\n\t\tvar g = { x: e, y: f, angle: 0 };\n\t\tc > 0 && (g.angle = this.math.angleBetweenPoints(this.path[c - 1], g)), this.path.push(g), c++;\n\t}\n\treturn this.mult = this.path.length / 100, this;\n}, Phaser.ParticleStorm.Zones.Spline.prototype.getRandom = function () {\n\treturn this.game.rnd.pick(this.path);\n}, Phaser.ParticleStorm.Zones.Spline.prototype.emit = function (a, b, c, d, e) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var f = null, g = null, h = 0; e > h; h++) {\n\t\tf = this.game.rnd.pick(this.path), g = a.emitParticle(b, c + f.x, d + f.y);\n\t}return g;\n}, Phaser.ParticleStorm.Zones.Spline.prototype.emitPercent = function (a, b, c, d, e, f) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tvar g = null;\n\tf = Math.floor(f * this.mult);\n\tfor (var h = 0; e > h; h++) {\n\t\tvar i = this.path[f];\n\t\ti && (g = a.emitParticle(b, c + i.x, d + i.y));\n\t}\n\treturn g;\n}, Phaser.ParticleStorm.Zones.Text = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.bmd = new Phaser.BitmapData(a, 'ParticleStorm.Text'), this.text = b, this.points = [], this.update(b);\n}, Phaser.ParticleStorm.Zones.Text.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Text.prototype.constructor = Phaser.ParticleStorm.Zones.Text, Phaser.ParticleStorm.Zones.Text.prototype.update = function (a) {\n\tvoid 0 !== a ? this.text = a : a = this.text;\n\tvar b = a.x,\n\t    c = a.y,\n\t    d = a.scale.x,\n\t    e = a.scale.y;\n\treturn a.x = 0, a.y = 0, a.scale.set(1), this.points = [], this.bmd.load(a), this.bmd.processPixelRGB(this.addPixel, this), this.scale = new Phaser.Point(d, e), a.x = b, a.y = c, a.scale.set(d, e), this;\n}, Phaser.ParticleStorm.Zones.Text.prototype.addPixel = function (a, b, c) {\n\treturn a.a > this.alphaThreshold && this.points.push({\n\t\tx: b,\n\t\ty: c,\n\t\tcolor: { r: a.r, g: a.g, b: a.b, a: a.a / 255 }\n\t}), !1;\n}, Phaser.ParticleStorm.Zones.Text.prototype.getRandom = function () {\n\tvar a = this.game.rnd.pick(this.points);\n\treturn a.x *= this.scale.x, a.y *= this.scale.y, a;\n}, Phaser.ParticleStorm.Zones.Text.prototype.emit = function (a, b, c, d, e, f, g) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var h = null, i = null, j = 0; e > j; j++) {\n\t\th = this.game.rnd.pick(this.points), i = a.emitParticle(b, c + h.x * this.scale.x, d + h.y * this.scale.y), i && (f && h.color.a < 1 && (i.color.alpha.value = h.color.a), g && i.color.setColor(h.color.r, h.color.g, h.color.b, h.color.a));\n\t}return i;\n}, Phaser.ParticleStorm.Zones.Text.prototype.emitFull = function (a, b, c, d, e, f, g, h) {\n\tvoid 0 === e && (e = 1);\n\tvar i = 1,\n\t    j = 1;\n\tArray.isArray(f) ? (i = f[0], j = f[1]) : 'number' == typeof f && (i = f, j = f), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var k = null, l = null, m = 0; m < this.points.length; m += e) {\n\t\tk = this.points[m];\n\t\tvar n = c + k.x * this.scale.x * (i / e),\n\t\t    o = d + k.y * this.scale.y * (j / e);\n\t\tl = a.emitParticle(b, n, o), l && (g && k.color.a < 1 && (l.color.alpha.value = k.color.a), h && l.color.setColor(k.color.r, k.color.g, k.color.b, k.color.a));\n\t}\n\treturn l;\n}, Phaser.ParticleStorm.Zones.Image = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.bmd = new Phaser.BitmapData(a, 'ParticleStorm.Image'), this.key = b, this.points = [], this.update(b);\n}, Phaser.ParticleStorm.Zones.Image.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Image.prototype.constructor = Phaser.ParticleStorm.Zones.Image, Phaser.ParticleStorm.Zones.Image.prototype.update = function (a) {\n\treturn void 0 === a && (a = this.key), this.points = [], this.bmd.load(a), this.bmd.processPixelRGB(this.addPixel, this), this;\n}, Phaser.ParticleStorm.Zones.Image.prototype.addPixel = function (a, b, c) {\n\treturn a.a > this.alphaThreshold && this.points.push({\n\t\tx: b,\n\t\ty: c,\n\t\tcolor: { r: a.r, g: a.g, b: a.b, a: a.a / 255 }\n\t}), !1;\n}, Phaser.ParticleStorm.Zones.Image.prototype.getRandom = function () {\n\tvar a = this.game.rnd.pick(this.points);\n\treturn a.x *= this.scale.x, a.y *= this.scale.y, a;\n}, Phaser.ParticleStorm.Zones.Image.prototype.emit = function (a, b, c, d, e, f, g) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var h = null, i = null, j = 0; e > j; j++) {\n\t\th = this.game.rnd.pick(this.points), i = a.emitParticle(b, c + h.x * this.scale.x, d + h.y * this.scale.y), i && (f && h.color.a < 1 && (i.color.alpha.value = h.color.a), g && i.color.setColor(h.color.r, h.color.g, h.color.b, h.color.a));\n\t}return i;\n}, Phaser.ParticleStorm.Zones.Image.prototype.emitFull = function (a, b, c, d, e, f, g, h) {\n\tvoid 0 === e && (e = 1);\n\tvar i = 1,\n\t    j = 1;\n\tArray.isArray(f) ? (i = f[0], j = f[1]) : 'number' == typeof f && (i = f, j = f), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var k = null, l = null, m = 0; m < this.points.length; m += e) {\n\t\tk = this.points[m];\n\t\tvar n = c + k.x * this.scale.x * (i / e),\n\t\t    o = d + k.y * this.scale.y * (j / e);\n\t\tl = a.emitParticle(b, n, o), l && (g && k.color.a < 1 && (l.color.alpha.value = k.color.a), h && l.color.setColor(k.color.r, k.color.g, k.color.b, k.color.a));\n\t}\n\treturn l;\n}, Phaser.ParticleStorm.Controls.Texture = function (a) {\n\tthis.particle = a, this.rnd = a.emitter.game.rnd, this.graph = Phaser.ParticleStorm.Graph, this.sendToBack = !1, this.bringToTop = !0, this.key = null, this.frame = void 0, this.frameName = void 0, this.scaleMode = Phaser.scaleModes.DEFAULT;\n}, Phaser.ParticleStorm.Controls.Texture.prototype = {\n\treset: function reset() {\n\t\tthis.sendToBack = !1, this.bringToTop = !0, this.key = '__default', this.frame = void 0, this.frameName = void 0, this.scaleMode = Phaser.scaleModes.DEFAULT;\n\t},\n\tinit: function init(a) {\n\t\tif (a.sendToBack ? this.sendToBack = a.sendToBack : a.bringToTop && (this.bringToTop = a.bringToTop), a.image && (Array.isArray(a.image) ? this.key = this.rnd.pick(a.image) : this.key = a.image), void 0 !== a.frame) {\n\t\t\tvar b = a.frame;\n\t\t\tArray.isArray(a.frame) && (b = this.rnd.pick(a.frame)), this.graph.isNumeric(b) ? this.frame = b : this.frameName = b;\n\t\t}\n\t\tif (a.scaleMode) {\n\t\t\tvar c = a.scaleMode.toUpperCase();\n\t\t\t'LINEAR' === c ? this.scaleMode = Phaser.scaleModes.LINEAR : 'NEAREST' === c && (this.scaleMode = Phaser.scaleModes.NEAREST);\n\t\t}\n\t},\n\tstep: function step(a, b) {\n\t\tif (this.particle.emitter.renderType === Phaser.ParticleStorm.SPRITE && void 0 !== a.animations) {\n\t\t\tvar c = [];\n\t\t\tfor (var d in a.animations) {\n\t\t\t\tvar e = a.animations[d],\n\t\t\t\t    f = null,\n\t\t\t\t    g = !0;\n\t\t\t\tvoid 0 !== e.frames && (f = Array.isArray(e.frames) ? e.frames : Phaser.Animation.generateFrameNames(e.frames.prefix, e.frames.start, e.frames.stop, e.frames.suffix, e.frames.zeroPad), 'string' == typeof f[0] && (g = !1));\n\t\t\t\tvar h = void 0 === e.frameRate ? 60 : e.frameRate,\n\t\t\t\t    i = void 0 === e.loop ? !1 : e.loop;\n\t\t\t\tb.animations.add(d, f, h, i, g), c.push(d);\n\t\t\t}\n\t\t\tc.length > 0 && (void 0 !== a.play ? b.play(this.rnd.pick(c)) : b.play(c[0]));\n\t\t}\n\t\tthis.sendToBack ? b.sendToBack() : this.bringToTop && b.bringToTop();\n\t}\n}, Phaser.ParticleStorm.Controls.Texture.prototype.constructor = Phaser.ParticleStorm.Controls.Texture, Phaser.ParticleStorm.Controls.Color = function (a) {\n\tthis.particle = a, this.graph = Phaser.ParticleStorm.Graph, this.red = {}, this.green = {}, this.blue = {}, this.alpha = {}, this.hsv = {}, this.hsvData = this.particle.emitter.parent.hsv, this.tint = 0, this.isTinted = !1, this.rgba = 'rgba(0, 0, 0, 1)', this.blendMode = this.particle.emitter.parent.blendModeMap.NORMAL;\n}, Phaser.ParticleStorm.Controls.Color.prototype = {\n\treset: function reset() {\n\t\tthis.red = Object.create(Phaser.ParticleStorm.BASE_255), this.green = Object.create(Phaser.ParticleStorm.BASE_255), this.blue = Object.create(Phaser.ParticleStorm.BASE_255), this.alpha = Object.create(Phaser.ParticleStorm.BASE_1), this.tint = 16777215, this.isTinted = !1, this.isHSV = !1, this.hsv = Object.create(Phaser.ParticleStorm.BASE_359), this.rgba = 'rgba(0, 0, 0, 1)', this.blendMode = this.particle.emitter.parent.blendModeMap.NORMAL;\n\t},\n\tinit: function init(a) {\n\t\tvar b = !1;\n\t\ta.hasOwnProperty('hsv') ? ('number' == typeof a.hsv ? this.hsv.value = a.hsv : this.graph.fromData(a.hsv, this.hsv), b = !0, this.isHSV = !0) : (a.hasOwnProperty('red') && ('number' == typeof a.red ? this.red.value = a.red : this.graph.fromData(a.red, this.red), b = !0), a.hasOwnProperty('green') && ('number' == typeof a.green ? this.green.value = a.green : this.graph.fromData(a.green, this.green), b = !0), a.hasOwnProperty('blue') && ('number' == typeof a.blue ? this.blue.value = a.blue : this.graph.fromData(a.blue, this.blue), b = !0)), a.hasOwnProperty('alpha') && ('number' == typeof a.alpha ? this.alpha.value = a.alpha : this.graph.fromData(a.alpha, this.alpha)), this.red.value = Phaser.Math.clamp(this.red.value, 0, 255), this.green.value = Phaser.Math.clamp(this.green.value, 0, 255), this.blue.value = Phaser.Math.clamp(this.blue.value, 0, 255), this.alpha.value = Phaser.Math.clamp(this.alpha.value, 0, 1), this.hsv.value = Phaser.Math.clamp(this.hsv.value, 0, 359), this.particle.emitter.renderType !== Phaser.ParticleStorm.PIXEL && (this.isTinted = b), a.blendMode && (this.blendMode = this.particle.emitter.parent.blendModeMap[a.blendMode.toUpperCase()]);\n\t},\n\tstep: function step() {\n\t\tvar a = this.particle.life;\n\t\tthis.isHSV ? (this.hsv.value += this.hsv.delta, this.hsv.calc = Phaser.Math.clamp(Math.floor(this.hsv.initial + this.graph.getValue(this.hsv, a)), 0, 359), this.red.value = this.hsvData[this.hsv.calc].r, this.green.value = this.hsvData[this.hsv.calc].g, this.blue.value = this.hsvData[this.hsv.calc].b) : (this.red.value += this.red.delta, this.green.value += this.green.delta, this.blue.value += this.blue.delta), this.red.calc = this.graph.getClampedValue(this.red, a), this.green.calc = this.graph.getClampedValue(this.green, a), this.blue.calc = this.graph.getClampedValue(this.blue, a), this.isTinted && (this.tint = this.red.calc << 16 | this.green.calc << 8 | this.blue.calc), this.alpha.value += this.alpha.delta, this.alpha.calc = Phaser.Math.clamp(this.alpha.initial + this.graph.getValue(this.alpha, a), 0, 1), this.rgba = 'rgba(' + this.red.calc + ',' + this.green.calc + ',' + this.blue.calc + ',' + this.alpha.calc + ')';\n\t},\n\tsetColor: function setColor(a, b, c, d) {\n\t\tthis.red.value = a, this.green.value = b, this.blue.value = c, this.alpha.value = d, this.particle.emitter.renderType !== Phaser.ParticleStorm.PIXEL && (this.isTinted = !0), this.step();\n\t}\n}, Phaser.ParticleStorm.Controls.Color.prototype.constructor = Phaser.ParticleStorm.Controls.Color, Phaser.ParticleStorm.Controls.Transform = function (a) {\n\tthis.particle = a, this.time = a.emitter.game.time, this.graph = Phaser.ParticleStorm.Graph, this.x = 0, this.y = 0, this.velocity = { x: null, y: null, facing: null }, this.acceleration = { x: null, y: null, facing: null }, this.scale = { x: null, y: null }, this.rotation = {}, this.anchor = new Phaser.Point();\n}, Phaser.ParticleStorm.Controls.Transform.prototype = {\n\treset: function reset() {\n\t\tthis.velocity.x = Object.create(Phaser.ParticleStorm.BASE), this.velocity.y = Object.create(Phaser.ParticleStorm.BASE), this.velocity.facing = Object.create(Phaser.ParticleStorm.BASE_NULL), this.acceleration.x = Object.create(Phaser.ParticleStorm.BASE), this.acceleration.y = Object.create(Phaser.ParticleStorm.BASE), this.acceleration.facing = Object.create(Phaser.ParticleStorm.BASE_NULL), this.scale.x = Object.create(Phaser.ParticleStorm.BASE_1), this.scale.y = Object.create(Phaser.ParticleStorm.BASE_1), this.rotation = Object.create(Phaser.ParticleStorm.BASE), this.anchor.set(0.5);\n\t},\n\tinit: function init(a, b, c) {\n\t\tif (this.x = a, this.y = b, c.hasOwnProperty('anchor') ? this.anchor.set(c.anchor) : (c.hasOwnProperty('anchorX') && (this.anchor.x = c.anchorX), c.hasOwnProperty('anchorY') && (this.anchor.y = c.anchorY)), c.hasOwnProperty('velocity')) {\n\t\t\tif (this.graph.isNumeric(c.velocity)) this.velocity.x.value = c.velocity, this.velocity.y.value = c.velocity;else if (c.velocity.hasOwnProperty('min')) this.velocity.x.value = this.graph.getMinMax(c.velocity), this.velocity.y.value = this.velocity.x.value;else if (c.velocity.radial) {\n\t\t\t\tvar d = this.graph.getMinMaxInitial(c.velocity),\n\t\t\t\t    e = c.velocity.radial.arcStart,\n\t\t\t\t    f = c.velocity.radial.arcEnd;\n\t\t\t\tif (void 0 !== e && void 0 !== f) {\n\t\t\t\t\tvar g = (Math.random() * (f - e) + e) * Math.PI / 180,\n\t\t\t\t\t    h = Math.sin(g),\n\t\t\t\t\t    i = -Math.cos(g);\n\t\t\t\t\tthis.velocity.x.value = h * d, this.velocity.y.value = i * d;\n\t\t\t\t}\n\t\t\t} else this.velocity.x.initial = this.graph.getMinMaxInitial(c.velocity), this.velocity.y.initial = this.velocity.x.initial, this.velocity.x.value = this.graph.getMinMax(c.velocity.value), this.velocity.y.value = this.velocity.x.value;\n\t\t\tc.velocity.hasOwnProperty('delta') && (this.velocity.x.delta = this.graph.getMinMax(c.velocity.delta), this.velocity.y.delta = this.velocity.x.delta), c.velocity.hasOwnProperty('control') && (this.velocity.x.control = c.velocity.control, this.velocity.y.control = c.velocity.control), c.hasOwnProperty('vx') && this.graph.fromData(c.vx, this.velocity.x), c.hasOwnProperty('vy') && this.graph.fromData(c.vy, this.velocity.y);\n\t\t} else c.hasOwnProperty('target') ? this.particle.target(c.target) : ('number' == typeof c.vx ? this.velocity.x.value = c.vx : this.graph.fromData(c.vx, this.velocity.x), 'number' == typeof c.vy ? this.velocity.y.value = c.vy : this.graph.fromData(c.vy, this.velocity.y));\n\t\t'number' == typeof c.facingVelocity ? this.velocity.facing.value = c.facingVelocity : this.graph.fromData(c.facingVelocity, this.velocity.facing), 'number' == typeof c.facingAcceleration ? this.acceleration.facing.value = c.facingAcceleration : this.graph.fromData(c.facingAcceleration, this.acceleration.facing), c.hasOwnProperty('acceleration') ? (this.graph.fromData(c.acceleration, this.acceleration.x), this.graph.fromData(c.acceleration, this.acceleration.y)) : ('number' == typeof c.ax ? this.acceleration.x.value = c.ax : this.graph.fromData(c.ax, this.acceleration.x), 'number' == typeof c.ay ? this.acceleration.y.value = c.ay : this.graph.fromData(c.ay, this.acceleration.y)), c.hasOwnProperty('scale') ? (this.graph.fromData(c.scale, this.scale.x), this.graph.clone(this.scale.x, this.scale.y)) : ('number' == typeof c.scaleX ? this.scale.x.value = c.scaleX : this.graph.fromData(c.scaleX, this.scale.x), 'number' == typeof c.scaleY ? this.scale.y.value = c.scaleY : this.graph.fromData(c.scaleY, this.scale.y)), 'number' == typeof c.rotation ? this.rotation.value = c.rotation : this.graph.fromData(c.rotation, this.rotation);\n\t\tvar j = this.particle.parent;\n\t\tj && j.emit && j.emit.inherit && this.inherit(j);\n\t},\n\tinherit: function inherit(a) {\n\t\tvar b = a.emit.inherit,\n\t\t    c = !1;\n\t\tif ('boolean' == typeof b && (c = !0), (c || b.vx || b.velocity) && this.graph.clone(a.transform.velocity.x, this.velocity.x), (c || b.vy || b.velocity) && this.graph.clone(a.transform.velocity.y, this.velocity.y), (c || b.facingVelocity) && this.graph.clone(a.transform.velocity.facing, this.velocity.facing), (c || b.scaleX || b.scale) && this.graph.clone(a.transform.scale.x, this.scale.x), (c || b.scaleY || b.scale) && this.graph.clone(a.transform.scale.y, this.scale.y), (c || b.rotation) && this.graph.clone(a.transform.rotation, this.rotation), b.angularVelocity) {\n\t\t\tvar d = (a.transform.rotation.initial + a.transform.rotation.value) * Math.PI / 180;\n\t\t\tthis.velocity.x.initial = Math.sin(d), this.velocity.y.initial = -Math.cos(d);\n\t\t}\n\t},\n\tstep: function step() {\n\t\tvar a = this.particle.life;\n\t\tif (this.scale.x.value += this.scale.x.delta, this.scale.y.value += this.scale.y.delta, this.rotation.value += this.rotation.delta, this.rotation.calc = (this.rotation.initial + this.graph.getValue(this.rotation, a)) * Math.PI / 180, this.scale.x.calc = this.scale.x.initial + this.graph.getValue(this.scale.x, a), this.scale.y.calc = this.scale.y.initial + this.graph.getValue(this.scale.y, a), 0 !== a) {\n\t\t\tvar b = 0,\n\t\t\t    c = 0;\n\t\t\tnull !== this.acceleration.facing.value && (this.acceleration.facing.value += this.acceleration.facing.delta, b = this.rotation.calc + (90 + this.acceleration.facing.offset) * Math.PI / 180, c = this.acceleration.facing.initial + this.graph.getValue(this.acceleration.facing, a), this.velocity.x.value += c * Math.sin(b), this.velocity.y.value += c * -Math.cos(b)), this.acceleration.x.value += this.acceleration.x.delta, this.acceleration.y.value += this.acceleration.y.delta, this.velocity.x.value += this.velocity.x.delta + this.acceleration.x.initial + this.graph.getValue(this.acceleration.x, a), this.velocity.y.value += this.velocity.y.delta + this.acceleration.y.initial + this.graph.getValue(this.acceleration.y, a), null !== this.velocity.facing.value && (this.velocity.facing.value += this.velocity.facing.delta, b = this.rotation.calc + (90 + this.velocity.facing.offset) * Math.PI / 180, c = this.velocity.facing.initial + this.graph.getValue(this.velocity.facing, a), this.x += c * Math.sin(b), this.y += c * -Math.cos(b)), this.x += this.velocity.x.initial + this.graph.getValue(this.velocity.x, a), this.y += this.velocity.y.initial + this.graph.getValue(this.velocity.y, a);\n\t\t}\n\t}\n}, Phaser.ParticleStorm.Controls.Transform.prototype.constructor = Phaser.ParticleStorm.Controls.Transform, Phaser.ParticleStorm.Renderer = {}, Phaser.ParticleStorm.Renderer.Base = function (a) {\n\tthis.game = a.game, this.emitter = a, this.parent = a.parent, this.pixelSize = 1;\n}, Phaser.ParticleStorm.Renderer.Base.prototype = {\n\taddToWorld: function addToWorld(a) {\n\t\treturn a.add(this.display), this.display;\n\t},\n\tpreUpdate: function preUpdate() {},\n\tadd: function add() {\n\t\treturn null;\n\t},\n\tupdate: function update(a) {\n\t\treturn a;\n\t},\n\tpostUpdate: function postUpdate() {},\n\tkill: function kill(a) {\n\t\treturn a;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.game = null;\n\t}\n}, Phaser.ParticleStorm.Renderer.Base.prototype.constructor = Phaser.ParticleStorm.Renderer.Base, Phaser.ParticleStorm.Renderer.Sprite = function (a) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.display = this.game.make.group(null, 'particleStormSpriteRenderer');\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.Sprite.prototype.constructor = Phaser.ParticleStorm.Renderer.Sprite, Phaser.ParticleStorm.Renderer.Sprite.prototype.add = function (a) {\n\tvar b = a.sprite,\n\t    c = a.texture.key,\n\t    d = a.texture.frame;\n\treturn void 0 === d && void 0 !== a.texture.frameName && (d = a.texture.frameName), b ? (b.reset(a.transform.x, a.transform.y), b.key !== c ? b.loadTexture(c, d) : void 0 !== a.texture.frame ? b.frame = d : void 0 !== a.texture.frameName && (b.frameName = d)) : b = this.display.create(a.transform.x, a.transform.y, c, d), b.anchor.set(a.transform.anchor.x, a.transform.anchor.y), a.color.isTinted && (b.tint = a.color.tint), b.blendMode = a.color.blendMode[0], b.texture.baseTexture.scaleMode = a.texture.scaleMode, b.visible = a.visible, a.sprite = b, b;\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.update = function (a) {\n\tvar b = a.sprite;\n\treturn a.delay > 0 && !a.delayVisible ? void (b.visible = !1) : (b.visible = a.visible, b.alpha = a.color.alpha.calc, b.rotation = a.transform.rotation.calc, a.color.isTinted && (b.tint = a.color.tint), b.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), b.x = a.transform.x, void (b.y = a.transform.y));\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.kill = function (a) {\n\ta.sprite && a.sprite.kill();\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.destroy = function () {\n\tthis.display.destroy(!0), this.emitter = null, this.game = null;\n}, Phaser.ParticleStorm.Renderer.Pixel = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.bmd = this.game.make.bitmapData(b, c), this.display = this.game.make.image(0, 0, this.bmd), this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.Pixel.prototype.constructor = Phaser.ParticleStorm.Renderer.Pixel, Phaser.ParticleStorm.Renderer.Pixel.prototype.resize = function (a, b) {\n\treturn this.bmd.resize(a, b), this;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.clear = function (a) {\n\treturn this.bmd.fill(0, 0, 0, a), this.bmd.update(), this;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.preUpdate = function () {\n\tthis.autoClear && (this.bmd.clear(), this.bmd.update());\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.update = function (a) {\n\tif (!(a.delay > 0) || a.delayVisible) {\n\t\tvar b = Math.floor(a.transform.x),\n\t\t    c = Math.floor(a.transform.y),\n\t\t    d = a.color.red.calc,\n\t\t    e = a.color.green.calc,\n\t\t    f = a.color.blue.calc,\n\t\t    g = Math.floor(255 * a.color.alpha.calc);\n\t\tthis.pixelSize > 2 ? this.bmd.rect(b, c, this.pixelSize, this.pixelSize, a.color.rgba) : (this.bmd.setPixel32(b, c, d, e, f, g, !1), 2 === this.pixelSize && (this.bmd.setPixel32(b + 1, c, d, e, f, g, !1), this.bmd.setPixel32(b, c + 1, d, e, f, g, !1), this.bmd.setPixel32(b + 1, c + 1, d, e, f, g, !1)));\n\t}\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.postUpdate = function () {\n\tthis.pixelSize <= 2 && this.bmd.context.putImageData(this.bmd.imageData, 0, 0), this.bmd.dirty = !0;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.destroy = function () {\n\tthis.game = null, this.display.destroy(), this.bmd.destroy();\n}, Phaser.ParticleStorm.Renderer.BitmapData = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.bmd = this.game.make.bitmapData(b, c), this.display = this.game.make.image(0, 0, this.bmd), this.roundPx = !0, this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.BitmapData.prototype.constructor = Phaser.ParticleStorm.Renderer.BitmapData, Phaser.ParticleStorm.Renderer.BitmapData.prototype.resize = function (a, b) {\n\treturn this.bmd.resize(a, b), this;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.clear = function (a) {\n\treturn this.bmd.fill(0, 0, 0, a), this;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.preUpdate = function () {\n\tthis.autoClear && this.bmd.clear();\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.update = function (a) {\n\tif (!(a.delay > 0) || a.delayVisible) {\n\t\tvar b = a.transform;\n\t\tthis.bmd.copy(a.texture.key, 0, 0, null, null, b.x, b.y, null, null, b.rotation.calc, b.anchor.x, b.anchor.y, b.scale.x.calc, b.scale.y.calc, a.color.alpha.calc, a.color.blendMode[1], this.roundPx);\n\t}\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.destroy = function () {\n\tthis.game = null, this.display.destroy(), this.bmd.destroy();\n}, Phaser.ParticleStorm.Renderer.RenderTexture = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.renderTexture = this.game.make.renderTexture(b, c), this.display = this.game.make.image(0, 0, this.renderTexture), this.stamp = this.game.make.image(0, 0), this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.RenderTexture.prototype.constructor = Phaser.ParticleStorm.Renderer.RenderTexture, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.clear = function () {\n\tthis.renderTexture.clear();\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.preUpdate = function () {\n\tthis.autoClear && this.renderTexture.clear();\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.update = function (a) {\n\tif (!(a.delay > 0 && !a.delayVisible || !a.visible || 0 === a.color.alpha.calc)) {\n\t\tvar b = a.texture.key,\n\t\t    c = a.texture.frame;\n\t\tvoid 0 === c && void 0 !== a.texture.frameName && (c = a.texture.frameName), this.stamp.key !== b ? this.stamp.loadTexture(b, c) : void 0 !== a.texture.frame ? this.stamp.frame = c : void 0 !== a.texture.frameName && (this.stamp.frameName = c), this.stamp.anchor.set(a.transform.anchor.x, a.transform.anchor.y), this.stamp.alpha = a.color.alpha.calc, this.stamp.rotation = a.transform.rotation.calc, a.color.isTinted && (this.stamp.tint = a.color.tint), this.stamp.blendMode = a.color.blendMode[0], this.stamp.texture.baseTexture.scaleMode = a.texture.scaleMode, this.stamp.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), this.renderTexture.renderXY(this.stamp, a.transform.x, a.transform.y, !1);\n\t}\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.destroy = function () {\n\tthis.display.destroy(), this.stamp.destroy(), this.renderTexture.destroy(), this.emitter = null, this.game = null;\n}, Phaser.ParticleStorm.Renderer.SpriteBatch = function (a) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.display = this.game.make.spriteBatch();\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.constructor = Phaser.ParticleStorm.Renderer.SpriteBatch, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.add = function (a) {\n\tvar b = a.sprite,\n\t    c = a.texture.key,\n\t    d = a.texture.frame;\n\treturn void 0 === d && void 0 !== a.texture.frameName && (d = a.texture.frameName), b ? (b.reset(a.transform.x, a.transform.y), b.key !== c ? b.loadTexture(c, d) : void 0 !== a.texture.frame ? b.frame = d : void 0 !== a.texture.frameName && (b.frameName = d)) : b = this.game.make.sprite(a.transform.x, a.transform.y, c, d), this.display.addChild(b), b.anchor.set(a.transform.anchor.x, a.transform.anchor.y), a.color.isTinted && (b.tint = a.color.tint), b.blendMode = a.color.blendMode[0], b.texture.baseTexture.scaleMode = a.texture.scaleMode, b.visible = a.visible, a.sprite = b, b;\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.update = function (a) {\n\tvar b = a.sprite;\n\treturn a.delay > 0 && !a.delayVisible ? void (b.visible = !1) : (b.visible = a.visible, b.alpha = a.color.alpha.calc, b.rotation = a.transform.rotation.calc, a.color.isTinted && (b.tint = a.color.tint), b.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), b.x = a.transform.x, void (b.y = a.transform.y));\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.kill = function (a) {\n\ta.sprite && a.sprite.kill();\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.destroy = function () {\n\tthis.display.destroy(!0), this.emitter = null, this.game = null;\n};"},/* 389 */
/***/
function(t,e,i){i(138)(i(390))},/* 390 */
/***/
function(t,e){t.exports="'use strict';\n\n/* Phaser Virtual Joystick Plugin (C) Copyright 2015 Photon Storm Ltd. */\nPhaser.VirtualJoystick = function (a, b) {\n\tPhaser.Plugin.call(this, a, b), this.sticks = null, this.buttons = null, this._pointerTotal = 0;\n}, Phaser.VirtualJoystick.prototype = Object.create(Phaser.Plugin.prototype), Phaser.VirtualJoystick.prototype.constructor = Phaser.VirtualJoystick, Phaser.VirtualJoystick.NONE = 0, Phaser.VirtualJoystick.HORIZONTAL = 1, Phaser.VirtualJoystick.VERTICAL = 2, Phaser.VirtualJoystick.CIRC_BUTTON = 0, Phaser.VirtualJoystick.RECT_BUTTON = 1, Phaser.VirtualJoystick.prototype.init = function () {\n\tthis.sticks = new Phaser.ArraySet(), this.buttons = new Phaser.ArraySet();\n}, Phaser.VirtualJoystick.prototype.addStick = function (a, b, c, d, e, f) {\n\t'undefined' == typeof e && (e = 'base'), 'undefined' == typeof f && (f = 'stick');\n\tvar g = new Phaser.VirtualJoystick.Stick(this, a, b, c, d, e, f);\n\treturn this.sticks.add(g), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), g;\n}, Phaser.VirtualJoystick.prototype.addDPad = function (a, b, c, d, e, f, g, h, i) {\n\t'undefined' == typeof e && (e = 'neutral'), 'undefined' == typeof f && (f = 'up'), 'undefined' == typeof g && (g = 'down'), 'undefined' == typeof h && (h = 'left'), 'undefined' == typeof i && (i = 'right');\n\tvar j = new Phaser.VirtualJoystick.DPad(this, a, b, c, d, e, f, g, h, i);\n\treturn this.sticks.add(j), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), j;\n}, Phaser.VirtualJoystick.prototype.removeStick = function (a) {\n\tthis.sticks.remove(a), a.destroy();\n}, Phaser.VirtualJoystick.prototype.addButton = function (a, b, c, d, e, f) {\n\t'undefined' == typeof f && (f = Phaser.VirtualJoystick.CIRC_BUTTON);\n\tvar g = new Phaser.VirtualJoystick.Button(this, f, a, b, c, d, e);\n\treturn this.buttons.add(g), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), g;\n}, Phaser.VirtualJoystick.prototype.removeButton = function (a) {\n\tthis.buttons.remove(a), a.destroy();\n}, Phaser.VirtualJoystick.prototype.update = function () {\n\tthis.sticks.callAll('update'), this.buttons.callAll('update');\n}, Phaser.VirtualJoystick.prototype.destroy = function () {\n\tthis.sticks.removeAll(!0), this.buttons.removeAll(!0);\n}, Phaser.VirtualJoystick.Stick = function (a, b, c, d, e, f, g) {\n\tthis.pad = a, this.baseFrame = f, this.stickFrame = g, this.position = new Phaser.Point(b, c), this.line = new Phaser.Line(this.position.x, this.position.y, this.position.x, this.position.y), this.baseSprite = this.pad.game.make.sprite(this.position.x, this.position.y, e, f), this.baseSprite.anchor.set(0.5), this.stickSprite = this.pad.game.make.sprite(this.position.x, this.position.y, e, g), this.stickSprite.anchor.set(0.5), this.baseHitArea = new Phaser.Circle(this.position.x, this.position.y, d), this.stickHitArea = new Phaser.Circle(this.position.x, this.position.y, this.stickSprite.width), this.limitPoint = new Phaser.Point(), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.onMove = new Phaser.Signal(), this.onUpdate = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.angle = 0, this.angleFull = 0, this.quadrant = 0, this.octant = 0, this.motionLock = Phaser.VirtualJoystick.NONE, this._distance = d, this._deadZone = 0.15 * d, this._scale = 1, this._tracking = !1, this._showOnTouch = !1, this.pad.game.stage.addChild(this.baseSprite), this.pad.game.stage.addChild(this.stickSprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this), this.pad.game.input.addMoveCallback(this.moveStick, this);\n}, Phaser.VirtualJoystick.Stick.prototype = {\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && (this.pointer = a, this.motionLock === Phaser.VirtualJoystick.NONE ? this.line.end.copyFrom(this.pointer) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.line.end.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.line.end.y = this.pointer.y), this._showOnTouch ? (this.line.start.copyFrom(a), this.posX = a.x, this.posY = a.y, this.visible = !0, this.setDown()) : this.stickHitArea.contains(a.x, a.y) && (this.line.length <= this.deadZone ? this._tracking = !0 : (this.setDown(), this.moveStick())));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.stickHitArea.x = this.position.x, this.stickHitArea.y = this.position.y, this.stickSprite.x = this.stickHitArea.x, this.stickSprite.y = this.stickHitArea.y, this.line.end.copyFrom(this.line.start), this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a), this._showOnTouch && (this.visible = !1));\n\t},\n\tsetDown: function setDown() {\n\t\tthis.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this._tracking = !1, this.checkArea(), this.onDown.dispatch(this, this.pointer);\n\t},\n\tcheckArea: function checkArea() {\n\t\tthis.angle = this.pad.game.math.radToDeg(this.line.angle), this.angleFull = this.angle, this.angleFull < 0 && (this.angleFull += 360), this.octant = 45 * Math.round(this.angleFull / 45), this.quadrant = this.angleFull >= 45 && this.angleFull < 135 ? 1 : this.angleFull >= 135 && this.angleFull < 225 ? 2 : this.angleFull >= 225 && this.angleFull < 315 ? 3 : 0;\n\t},\n\tmoveStick: function moveStick() {\n\t\tthis.pointer && (this.isDown || this._tracking) && (this.motionLock === Phaser.VirtualJoystick.NONE ? this.line.end.copyFrom(this.pointer) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.line.end.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.line.end.y = this.pointer.y), this.checkArea(), !this.isDown && this.line.length <= this.deadZone || (this._tracking && this.setDown(), this.line.length < this.baseHitArea.radius ? this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.pointer.x, this.stickHitArea.y = this.pointer.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.pointer.y) : (this.baseHitArea.circumferencePoint(this.line.angle, !1, this.limitPoint), this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.limitPoint.x, this.stickHitArea.y = this.limitPoint.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.limitPoint.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.limitPoint.y)), this.stickSprite.x = this.stickHitArea.x, this.stickSprite.y = this.stickHitArea.y, this.onMove.dispatch(this, this.force, this.forceX, this.forceY)));\n\t},\n\tupdate: function update() {\n\t\tthis.isDown && !this._tracking && this.onUpdate.dispatch(this, this.force, this.forceX, this.forceY);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.baseSprite.width / 2 + a,\n\t\t    c = this.baseSprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.baseSprite.width / 2 + a,\n\t\t    c = this.baseSprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this);\n\t\tfor (var a = this.pad.game.input.moveCallbacks, b = 0; b < a.length; b++) {\n\t\t\tif (a.callback === this.moveStick && a.context === this) {\n\t\t\t\ta.splice(b, 1);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}this.stickSprite.destroy(), this.baseSprite.destroy(), this.stickHitArea = null, this.baseHitArea = null, this.line = null, this.limitPoint = null, this.onDown.dispose(), this.onUp.dispose(), this.onMove.dispose(), this.onUpdate.dispose(), this.pointer = null, this._scale = null, this.pad = null;\n\t},\n\tdebug: function debug(a, b, c) {\n\t\t'undefined' == typeof a && (a = !0), 'undefined' == typeof b && (b = !0), 'undefined' == typeof c && (c = this.baseSprite.right);\n\t\tvar d = this.pad.game.debug;\n\t\tif (a && (d.context.lineWidth = 2, d.geom(this.baseHitArea, 'rgba(255, 0, 0, 1)', !1), d.geom(this.stickHitArea, 'rgba(0, 255, 0, 1)', !1), d.geom(this.line, 'rgba(255, 255, 0, 1)'), d.context.lineWidth = 1), b) {\n\t\t\tvar e = d.renderShadow,\n\t\t\t    f = c,\n\t\t\t    g = this.baseSprite.y - 114;\n\t\t\td.renderShadow = !0, d.text('Force: ' + this.force.toFixed(2), f, g), d.text('ForceX: ' + this.forceX.toFixed(2), f, g + 24), d.text('ForceY: ' + this.forceY.toFixed(2), f, g + 48), d.text('Rotation: ' + this.rotation.toFixed(2), f, g + 96), d.text('Angle: ' + this.angle.toFixed(2), f, g + 120), d.text('Distance: ' + this.distance, f, g + 172), d.text('Quadrant: ' + this.quadrant, f, g + 196), d.text('Octant: ' + this.octant, f, g + 220), d.renderShadow = e;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'rotation', {\n\tget: function get() {\n\t\treturn this.line.angle;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.position.x;\n\t},\n\tset: function set(a) {\n\t\tthis.position.x !== a && (this.position.x = a, this.baseSprite.x = a, this.stickSprite.x = a, this.baseHitArea.x = a, this.stickHitArea.x = a, this.line.start.x = a, this.line.end.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.position.y;\n\t},\n\tset: function set(a) {\n\t\tthis.position.y !== a && (this.position.y = a, this.baseSprite.y = a, this.stickSprite.y = a, this.baseHitArea.y = a, this.stickHitArea.y = a, this.line.start.y = a, this.line.end.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'force', {\n\tget: function get() {\n\t\treturn Math.min(1, this.line.length / this.distance * 2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'forceX', {\n\tget: function get() {\n\t\treturn this.force * this.x;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'forceY', {\n\tget: function get() {\n\t\treturn this.force * this.y;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'x', {\n\tget: function get() {\n\t\treturn this.line.angle >= 0 ? this.line.angle <= 1.5707963267948966 ? (1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + (3.141592653589793 - this.line.angle) / 3.141592653589793 * 2 : this.line.angle >= -1.5707963267948966 ? Math.abs(-1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + Math.abs(-3.141592653589793 - this.line.angle) / 3.141592653589793 * 2;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'y', {\n\tget: function get() {\n\t\treturn this.line.angle >= 0 ? 1 - Math.abs(1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + Math.abs(-1.5707963267948966 - this.line.angle) / 1.5707963267948966;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'filterX', {\n\tget: function get() {\n\t\tif (0 === this.x) return 0.5;\n\t\tvar a = Math.abs(this.forceX) / 2;\n\t\treturn this.x < 0 ? (0.5 - a).toFixed(2) : (0.5 + a).toFixed(2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'filterY', {\n\tget: function get() {\n\t\tif (0 === this.y) return 0.5;\n\t\tvar a = Math.abs(this.forceY) / 2;\n\t\treturn this.y < 0 ? 1 - (0.5 - a).toFixed(2) : 1 - (0.5 + a).toFixed(2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.stickSprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.stickSprite.alpha = a, this.baseSprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.stickSprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.stickSprite.visible = a, this.baseSprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'distance', {\n\tget: function get() {\n\t\treturn this._distance * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._distance !== a && (this._distance = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'deadZone', {\n\tget: function get() {\n\t\treturn this._deadZone * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._deadZone = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.stickSprite.scale.set(a), this.baseSprite.scale.set(a), this.baseHitArea.setTo(this.position.x, this.position.y, this.distance * a), this.stickHitArea.setTo(this.position.x, this.position.y, this.stickSprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'showOnTouch', {\n\tget: function get() {\n\t\treturn this._showOnTouch;\n\t},\n\tset: function set(a) {\n\t\tthis._showOnTouch !== a && (this._showOnTouch = a, this._showOnTouch && this.visible && (this.visible = !1));\n\t}\n}), Phaser.VirtualJoystick.Button = function (a, b, c, d, e, f, g) {\n\tthis.pad = a, this.upFrame = f, this.downFrame = g, this.sprite = this.pad.game.make.sprite(c, d, e, f), this.sprite.anchor.set(0.5), b === Phaser.VirtualJoystick.CIRC_BUTTON ? this.hitArea = new Phaser.Circle(this.sprite.x, this.sprite.y, this.sprite.width) : b === Phaser.VirtualJoystick.RECT_BUTTON && (this.hitArea = new Phaser.Rectangle(this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height)), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.repeatRate = 0, this.key = null, this._timeNext = 0, this._scale = 1, this.pad.game.stage.addChild(this.sprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this);\n}, Phaser.VirtualJoystick.Button.prototype = {\n\taddKey: function addKey(a) {\n\t\tif (this.key) {\n\t\t\tif (this.key.keyCode === a) return !1;\n\t\t\tthis.key.onDown.removeAll(), this.key.onUp.removeAll(), this.pad.game.input.keyboard.removeKey(this.key), this.key = null;\n\t\t}\n\t\treturn a && (this.key = this.pad.game.input.keyboard.addKey(a), this.key.onDown.add(this.keyDown, this), this.key.onUp.add(this.keyUp, this)), this.key;\n\t},\n\tkeyDown: function keyDown() {\n\t\tthis.isDown || (this.sprite.frameName = this.downFrame, this.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this.onDown.dispatch(this, this.key));\n\t},\n\tkeyUp: function keyUp() {\n\t\tthis.isDown && (this.sprite.frameName = this.upFrame, this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, this.key, this.duration));\n\t},\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && this.hitArea.contains(a.x, a.y) && (this.pointer = a, this.sprite.frameName = this.downFrame, this.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this.onDown.dispatch(this, a));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.sprite.frameName = this.upFrame, this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a, this.duration));\n\t},\n\tupdate: function update() {\n\t\tthis.repeatRate > 0 && this.isDown && this.pad.game.time.time >= this._timeNext && (this.onDown.dispatch(this, this.pointer), this._timeNext = this.pad.game.time.time + this.repeatRate);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this), this.sprite.destroy(), this.onDown.dispose(), this.onUp.dispose(), this.hitArea = null, this.pointer = null, this._scale = null, this.pad = null;\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.sprite.x;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.x !== a && (this.sprite.x = a, this.hitArea.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.sprite.y;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.y !== a && (this.sprite.y = a, this.hitArea.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.sprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.sprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.sprite.scale.set(a), this.hitArea.setTo(this.sprite.x, this.sprite.y, this.sprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'duration', {\n\tget: function get() {\n\t\treturn this.isUp ? this.timeUp - this.timeDown : this.game.time.time - this.timeDown;\n\t}\n}), Phaser.VirtualJoystick.DPad = function (a, b, c, d, e, f, g, h, i, j) {\n\tthis.pad = a, this.neutralFrame = f, this.upFrame = g, this.downFrame = h, this.leftFrame = i, this.rightFrame = j, this.position = new Phaser.Point(b, c), this.line = new Phaser.Line(this.position.x, this.position.y, this.position.x, this.position.y), this.sprite = this.pad.game.make.sprite(b, c, e, f), this.sprite.anchor.set(0.5), this.baseHitArea = new Phaser.Circle(this.position.x, this.position.y, d), this.stickHitArea = new Phaser.Circle(this.position.x, this.position.y, this.sprite.width), this.limitPoint = new Phaser.Point(), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.onMove = new Phaser.Signal(), this.onUpdate = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.angle = 0, this.angleFull = 0, this.quadrant = 0, this.octant = 0, this.direction = Phaser.NONE, this._distance = d, this._deadZone = 0.15 * d, this._scale = 1, this._tracking = !1, this._showOnTouch = !1, this.pad.game.stage.addChild(this.sprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this), this.pad.game.input.addMoveCallback(this.moveStick, this);\n}, Phaser.VirtualJoystick.DPad.prototype = {\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && (this.pointer = a, this.line.end.copyFrom(a), this._showOnTouch ? (this.line.start.copyFrom(a), this.posX = a.x, this.posY = a.y, this.visible = !0, this.setDown()) : this.stickHitArea.contains(a.x, a.y) && (this.line.length <= this.deadZone ? this._tracking = !0 : (this.setDown(), this.moveStick())));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.stickHitArea.x = this.position.x, this.stickHitArea.y = this.position.y, this.sprite.frameName = this.neutralFrame, this.line.end.copyFrom(this.line.start), this.isDown = !1, this.isUp = !0, this.direction = Phaser.NONE, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a), this._showOnTouch && (this.visible = !1));\n\t},\n\tsetDown: function setDown() {\n\t\tthis.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this._tracking = !1, this.checkArea(), this.onDown.dispatch(this, this.pointer);\n\t},\n\tcheckArea: function checkArea() {\n\t\tthis.angle = this.pad.game.math.radToDeg(this.line.angle), this.angleFull = this.angle, this.angleFull < 0 && (this.angleFull += 360), this.octant = 45 * Math.round(this.angleFull / 45), this.quadrant = this.angleFull >= 45 && this.angleFull < 135 ? 1 : this.angleFull >= 135 && this.angleFull < 225 ? 2 : this.angleFull >= 225 && this.angleFull < 315 ? 3 : 0;\n\t},\n\tmoveStick: function moveStick() {\n\t\treturn this.pointer && (this.isDown || this._tracking) ? (this.line.end.copyFrom(this.pointer), this.checkArea(), !this.isDown && this.line.length <= this.deadZone ? (this.direction = Phaser.NONE, void (this.sprite.frameName = this.neutralFrame)) : (this._tracking && this.setDown(), this.line.length < this.baseHitArea.radius ? this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.pointer.x, this.stickHitArea.y = this.pointer.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.pointer.y) : (this.baseHitArea.circumferencePoint(this.line.angle, !1, this.limitPoint), this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.limitPoint.x, this.stickHitArea.y = this.limitPoint.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.limitPoint.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.limitPoint.y)), 1 === this.quadrant ? (this.sprite.frameName = this.downFrame, this.direction = Phaser.DOWN) : 2 === this.quadrant ? (this.sprite.frameName = this.leftFrame, this.direction = Phaser.LEFT) : 3 === this.quadrant ? (this.sprite.frameName = this.upFrame, this.direction = Phaser.UP) : (this.sprite.frameName = this.rightFrame, this.direction = Phaser.RIGHT), void this.onMove.dispatch(this, this.x, this.y))) : (this.direction = Phaser.NONE, void (this.sprite.frameName = this.neutralFrame));\n\t},\n\tupdate: function update() {\n\t\tthis.isDown && !this._tracking && this.onUpdate.dispatch(this, this.x, this.y);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this);\n\t\tfor (var a = this.pad.game.input.moveCallbacks, b = 0; b < a.length; b++) {\n\t\t\tif (a.callback === this.moveStick && a.context === this) {\n\t\t\t\ta.splice(b, 1);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}this.sprite.destroy(), this.stickHitArea = null, this.baseHitArea = null, this.line = null, this.limitPoint = null, this.onDown.dispose(), this.onUp.dispose(), this.pointer = null, this._scale = null, this.pad = null;\n\t},\n\tdebug: function debug(a, b, c) {\n\t\t'undefined' == typeof a && (a = !0), 'undefined' == typeof b && (b = !0), 'undefined' == typeof c && (c = this.sprite.right);\n\t\tvar d = this.pad.game.debug;\n\t\tif (a && (d.context.lineWidth = 2, d.geom(this.baseHitArea, 'rgba(255, 0, 0, 1)', !1), d.geom(this.stickHitArea, 'rgba(0, 255, 0, 1)', !1), d.geom(this.line, 'rgba(255, 255, 0, 1)'), d.context.lineWidth = 1), b) {\n\t\t\tvar e = d.renderShadow,\n\t\t\t    f = c,\n\t\t\t    g = this.sprite.y - 48;\n\t\t\td.renderShadow = !0, d.text('X: ' + this.x, f, g), d.text('Y: ' + this.y, f, g + 24), d.text('Distance: ' + this.distance, f, g + 48), d.text('Quadrant: ' + this.quadrant, f, g + 96), d.text('Octant: ' + this.octant, f, g + 120), d.renderShadow = e;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'rotation', {\n\tget: function get() {\n\t\treturn this.line.angle;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.position.x;\n\t},\n\tset: function set(a) {\n\t\tthis.position.x !== a && (this.position.x = a, this.sprite.x = a, this.baseHitArea.x = a, this.stickHitArea.x = a, this.line.start.x = a, this.line.end.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.position.y;\n\t},\n\tset: function set(a) {\n\t\tthis.position.y !== a && (this.position.y = a, this.sprite.y = a, this.baseHitArea.y = a, this.stickHitArea.y = a, this.line.start.y = a, this.line.end.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'x', {\n\tget: function get() {\n\t\treturn this.direction === Phaser.LEFT ? -1 : this.direction === Phaser.RIGHT ? 1 : 0;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'y', {\n\tget: function get() {\n\t\treturn this.direction === Phaser.UP ? -1 : this.direction === Phaser.DOWN ? 1 : 0;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.sprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.sprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'distance', {\n\tget: function get() {\n\t\treturn this._distance * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._distance !== a && (this._distance = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'deadZone', {\n\tget: function get() {\n\t\treturn this._deadZone * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._deadZone = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.sprite.scale.set(a), this.baseHitArea.setTo(this.position.x, this.position.y, this.distance * a), this.stickHitArea.setTo(this.position.x, this.position.y, this.sprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'showOnTouch', {\n\tget: function get() {\n\t\treturn this._showOnTouch;\n\t},\n\tset: function set(a) {\n\t\tthis._showOnTouch !== a && (this._showOnTouch = a, this._showOnTouch && this.visible && (this.visible = !1));\n\t}\n});"}],[139]);