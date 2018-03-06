webpackJsonp([0],[/* 0 */
/***/
function(t,e,i){var n=i(2),r=i(23),a=i(13),s=i(14),o=i(20),l=function(t,e,i){var h,u,c,f,d=t&l.F,p=t&l.G,m=t&l.S,y=t&l.P,g=t&l.B,v=p?n:m?n[e]||(n[e]={}):(n[e]||{}).prototype,b=p?r:r[e]||(r[e]={}),w=b.prototype||(b.prototype={});p&&(i=e);for(h in i)
// contains in native
u=!d&&v&&void 0!==v[h],
// export native or passed
c=(u?v:i)[h],
// bind timers to global for call from export context
f=g&&u?o(c,n):y&&"function"==typeof c?o(Function.call,c):c,
// extend global
v&&s(v,h,c,t&l.U),
// export
b[h]!=c&&a(b,h,f),y&&w[h]!=c&&(w[h]=c)};n.core=r,
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
/***/
function(t,e,i){var n=i(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},/* 2 */
/***/
function(t,e){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:// eslint-disable-next-line no-new-func
Function("return this")();"number"==typeof __g&&(__g=i)},/* 3 */
,/* 4 */
/***/
function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},/* 5 */
/***/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/* 6 */
/***/
function(t,e,i){var n=i(52)("wks"),r=i(34),a=i(2).Symbol,s="function"==typeof a;(t.exports=function(t){return n[t]||(n[t]=s&&a[t]||(s?a:r)("Symbol."+t))}).store=n},/* 7 */
/***/
function(t,e,i){
// Thank's IE8 for his funny defineProperty
t.exports=!i(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 8 */
/***/
function(t,e,i){var n=i(1),r=i(97),a=i(24),s=Object.defineProperty;e.f=i(7)?Object.defineProperty:function(t,e,i){if(n(t),e=a(e,!0),n(i),r)try{return s(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},/* 9 */
/***/
function(t,e,i){
// 7.1.15 ToLength
var n=i(26),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},/* 10 */
/***/
function(t,e,i){
// 7.1.13 ToObject(argument)
var n=i(25);t.exports=function(t){return Object(n(t))}},/* 11 */
/***/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/* 12 */
/***/
function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},/* 13 */
/***/
function(t,e,i){var n=i(8),r=i(33);t.exports=i(7)?function(t,e,i){return n.f(t,e,r(1,i))}:function(t,e,i){return t[e]=i,t}},/* 14 */
/***/
function(t,e,i){var n=i(2),r=i(13),a=i(12),s=i(34)("src"),o=Function.toString,l=(""+o).split("toString");i(23).inspectSource=function(t){return o.call(t)},(t.exports=function(t,e,i,o){var h="function"==typeof i;h&&(a(i,"name")||r(i,"name",e)),t[e]!==i&&(h&&(a(i,s)||r(i,s,t[e]?""+t[e]:l.join(String(e)))),t===n?t[e]=i:o?t[e]?t[e]=i:r(t,e,i):(delete t[e],r(t,e,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||o.call(this)})},/* 15 */
/***/
function(t,e,i){var n=i(0),r=i(4),a=i(25),s=/"/g,o=function(t,e,i,n){var r=String(a(t)),o="<"+e;return""!==i&&(o+=" "+i+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(o),n(n.P+n.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},/* 16 */
/***/
function(t,e,i){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var n=i(49),r=i(25);t.exports=function(t){return n(r(t))}},/* 17 */
/***/
function(t,e,i){var n=i(50),r=i(33),a=i(16),s=i(24),o=i(12),l=i(97),h=Object.getOwnPropertyDescriptor;e.f=i(7)?h:function(t,e){if(t=a(t),e=s(e,!0),l)try{return h(t,e)}catch(t){}if(o(t,e))return r(!n.f.call(t,e),t[e])}},/* 18 */
/***/
function(t,e,i){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var n=i(12),r=i(10),a=i(68)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),n(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},/* 19 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),
// Game Configuration
e.default={phaserConfig:{
// width: 800,
width:580,
// height: 500,
height:280,renderer:Phaser.AUTO,antialias:!0,multiTexture:!1,enableDebug:!1},localStorageName:"prophecy",weather:!0,playerHealth:100,scaleRate:3,forceMobile:!1,night:!0,enemies:!0,startMap:"map3",lucy:!1,secureLS:!1}},/* 20 */
/***/
function(t,e,i){
// optional / simple context binding
var n=i(11);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,r){return t.call(e,i,n,r)}}return function(){return t.apply(e,arguments)}}},/* 21 */
/***/
function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},/* 22 */
/***/
function(t,e,i){"use strict";var n=i(4);t.exports=function(t,e){return!!t&&n(function(){
// eslint-disable-next-line no-useless-call
e?t.call(null,function(){},1):t.call(null)})}},/* 23 */
/***/
function(t,e){var i=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=i)},/* 24 */
/***/
function(t,e,i){
// 7.1.1 ToPrimitive(input [, PreferredType])
var n=i(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){if(!n(t))return t;var i,r;if(e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!n(r=i.call(t)))return r;if(!e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},/* 25 */
/***/
function(t,e){
// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/* 26 */
/***/
function(t,e){
// 7.1.4 ToInteger
var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},/* 27 */
/***/
function(t,e,i){
// most Object methods by ES6 should accept primitives
var n=i(0),r=i(23),a=i(4);t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],s={};s[t]=e(i),n(n.S+n.F*a(function(){i(1)}),"Object",s)}},/* 28 */
/***/
function(t,e,i){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var n=i(20),r=i(49),a=i(10),s=i(9),o=i(85);t.exports=function(t,e){var i=1==t,l=2==t,h=3==t,u=4==t,c=6==t,f=5==t||c,d=e||o;return function(e,o,p){for(var m,y,g=a(e),v=r(g),b=n(o,p,3),w=s(v.length),S=0,P=i?d(e,w):l?d(e,0):void 0;w>S;S++)if((f||S in v)&&(m=v[S],y=b(m,S,g),t))if(i)P[S]=y;else if(y)
// map
switch(t){case 3:return!0;// some
case 5:return m;// find
case 6:return S;// findIndex
case 2:P.push(m)}else if(u)return!1;return c?-1:h||u?u:P}}},/* 29 */
/***/
function(t,e,i){"use strict";if(i(7)){var n=i(35),r=i(2),a=i(4),s=i(0),o=i(62),l=i(91),h=i(20),u=i(41),c=i(33),f=i(13),d=i(43),p=i(26),m=i(9),y=i(123),g=i(37),v=i(24),b=i(12),w=i(51),S=i(5),P=i(10),x=i(82),_=i(38),k=i(18),T=i(39).f,M=i(84),O=i(34),E=i(6),D=i(28),C=i(53),A=i(60),B=i(87),L=i(46),I=i(57),N=i(40),F=i(86),R=i(113),j=i(8),G=i(17),U=j.f,V=G.f,X=r.RangeError,q=r.TypeError,Y=r.Uint8Array,W=Array.prototype,H=l.ArrayBuffer,K=l.DataView,J=D(0),z=D(2),Z=D(3),Q=D(4),$=D(5),tt=D(6),et=C(!0),it=C(!1),nt=B.values,rt=B.keys,at=B.entries,st=W.lastIndexOf,ot=W.reduce,lt=W.reduceRight,ht=W.join,ut=W.sort,ct=W.slice,ft=W.toString,dt=W.toLocaleString,pt=E("iterator"),mt=E("toStringTag"),yt=O("typed_constructor"),gt=O("def_constructor"),vt=o.CONSTR,bt=o.TYPED,wt=o.VIEW,St=D(1,function(t,e){return Tt(A(t,t[gt]),e)}),Pt=a(function(){
// eslint-disable-next-line no-undef
return 1===new Y(new Uint16Array([1]).buffer)[0]}),xt=!!Y&&!!Y.prototype.set&&a(function(){new Y(1).set({})}),_t=function(t,e){var i=p(t);if(i<0||i%e)throw X("Wrong offset!");return i},kt=function(t){if(S(t)&&bt in t)return t;throw q(t+" is not a typed array!")},Tt=function(t,e){if(!(S(t)&&yt in t))throw q("It is not a typed array constructor!");return new t(e)},Mt=function(t,e){return Ot(A(t,t[gt]),e)},Ot=function(t,e){for(var i=0,n=e.length,r=Tt(t,n);n>i;)r[i]=e[i++];return r},Et=function(t,e,i){U(t,e,{get:function(){return this._d[i]}})},Dt=function(t){var e,i,n,r,a,s,o=P(t),l=arguments.length,u=l>1?arguments[1]:void 0,c=void 0!==u,f=M(o);if(void 0!=f&&!x(f)){for(s=f.call(o),n=[],e=0;!(a=s.next()).done;e++)n.push(a.value);o=n}for(c&&l>2&&(u=h(u,arguments[2],2)),e=0,i=m(o.length),r=Tt(this,i);i>e;e++)r[e]=c?u(o[e],e):o[e];return r},Ct=function(){for(var t=0,e=arguments.length,i=Tt(this,e);e>t;)i[t]=arguments[t++];return i},At=!!Y&&a(function(){dt.call(new Y(1))}),Bt=function(){return dt.apply(At?ct.call(kt(this)):kt(this),arguments)},Lt={copyWithin:function(t,e){return R.call(kt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return Q(kt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){
// eslint-disable-line no-unused-vars
return F.apply(kt(this),arguments)},filter:function(t){return Mt(this,z(kt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return $(kt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(kt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){J(kt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return it(kt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(kt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){
// eslint-disable-line no-unused-vars
return ht.apply(kt(this),arguments)},lastIndexOf:function(t){
// eslint-disable-line no-unused-vars
return st.apply(kt(this),arguments)},map:function(t){return St(kt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){
// eslint-disable-line no-unused-vars
return ot.apply(kt(this),arguments)},reduceRight:function(t){
// eslint-disable-line no-unused-vars
return lt.apply(kt(this),arguments)},reverse:function(){for(var t,e=this,i=kt(e).length,n=Math.floor(i/2),r=0;r<n;)t=e[r],e[r++]=e[--i],e[i]=t;return e},some:function(t){return Z(kt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(kt(this),t)},subarray:function(t,e){var i=kt(this),n=i.length,r=g(t,n);return new(A(i,i[gt]))(i.buffer,i.byteOffset+r*i.BYTES_PER_ELEMENT,m((void 0===e?n:g(e,n))-r))}},It=function(t,e){return Mt(this,ct.call(kt(this),t,e))},Nt=function(t){kt(this);var e=_t(arguments[1],1),i=this.length,n=P(t),r=m(n.length),a=0;if(r+e>i)throw X("Wrong length!");for(;a<r;)this[e+a]=n[a++]},Ft={entries:function(){return at.call(kt(this))},keys:function(){return rt.call(kt(this))},values:function(){return nt.call(kt(this))}},Rt=function(t,e){return S(t)&&t[bt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},jt=function(t,e){return Rt(t,e=v(e,!0))?c(2,t[e]):V(t,e)},Gt=function(t,e,i){return!(Rt(t,e=v(e,!0))&&S(i)&&b(i,"value"))||b(i,"get")||b(i,"set")||i.configurable||b(i,"writable")&&!i.writable||b(i,"enumerable")&&!i.enumerable?U(t,e,i):(t[e]=i.value,t)};vt||(G.f=jt,j.f=Gt),s(s.S+s.F*!vt,"Object",{getOwnPropertyDescriptor:jt,defineProperty:Gt}),a(function(){ft.call({})})&&(ft=dt=function(){return ht.call(this)});var Ut=d({},Lt);d(Ut,Ft),f(Ut,pt,Ft.values),d(Ut,{slice:It,set:Nt,constructor:function(){},toString:ft,toLocaleString:Bt}),Et(Ut,"buffer","b"),Et(Ut,"byteOffset","o"),Et(Ut,"byteLength","l"),Et(Ut,"length","e"),U(Ut,mt,{get:function(){return this[bt]}}),
// eslint-disable-next-line max-statements
t.exports=function(t,e,i,l){l=!!l;var h=t+(l?"Clamped":"")+"Array",c="get"+t,d="set"+t,p=r[h],g=p||{},v=p&&k(p),b=!p||!o.ABV,P={},x=p&&p.prototype,M=function(t,i){var n=t._d;return n.v[c](i*e+n.o,Pt)},O=function(t,i,n){var r=t._d;l&&(n=(n=Math.round(n))<0?0:n>255?255:255&n),r.v[d](i*e+r.o,n,Pt)},E=function(t,e){U(t,e,{get:function(){return M(this,e)},set:function(t){return O(this,e,t)},enumerable:!0})};b?(p=i(function(t,i,n,r){u(t,p,h,"_d");var a,s,o,l,c=0,d=0;if(S(i)){if(!(i instanceof H||"ArrayBuffer"==(l=w(i))||"SharedArrayBuffer"==l))return bt in i?Ot(p,i):Dt.call(p,i);a=i,d=_t(n,e);var g=i.byteLength;if(void 0===r){if(g%e)throw X("Wrong length!");if((s=g-d)<0)throw X("Wrong length!")}else if((s=m(r)*e)+d>g)throw X("Wrong length!");o=s/e}else o=y(i),s=o*e,a=new H(s);for(f(t,"_d",{b:a,o:d,l:s,e:o,v:new K(a)});c<o;)E(t,c++)}),x=p.prototype=_(Ut),f(x,"constructor",p)):a(function(){p(1)})&&a(function(){new p(-1)})&&I(function(t){new p,// eslint-disable-line no-new
new p(null),// eslint-disable-line no-new
new p(1.5),// eslint-disable-line no-new
new p(t)},!0)||(p=i(function(t,i,n,r){u(t,p,h);var a;
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
return S(i)?i instanceof H||"ArrayBuffer"==(a=w(i))||"SharedArrayBuffer"==a?void 0!==r?new g(i,_t(n,e),r):void 0!==n?new g(i,_t(n,e)):new g(i):bt in i?Ot(p,i):Dt.call(p,i):new g(y(i))}),J(v!==Function.prototype?T(g).concat(T(v)):T(g),function(t){t in p||f(p,t,g[t])}),p.prototype=x,n||(x.constructor=p));var D=x[pt],C=!!D&&("values"==D.name||void 0==D.name),A=Ft.values;f(p,yt,!0),f(x,bt,h),f(x,wt,!0),f(x,gt,p),(l?new p(1)[mt]==h:mt in x)||U(x,mt,{get:function(){return h}}),P[h]=p,s(s.G+s.W+s.F*(p!=g),P),s(s.S,h,{BYTES_PER_ELEMENT:e}),s(s.S+s.F*a(function(){g.of.call(p,1)}),h,{from:Dt,of:Ct}),"BYTES_PER_ELEMENT"in x||f(x,"BYTES_PER_ELEMENT",e),s(s.P,h,Lt),N(h),s(s.P+s.F*xt,h,{set:Nt}),s(s.P+s.F*!C,h,Ft),n||x.toString==ft||(x.toString=ft),s(s.P+s.F*a(function(){new p(1).slice()}),h,{slice:It}),s(s.P+s.F*(a(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!a(function(){x.toLocaleString.call([1,2])})),h,{toLocaleString:Bt}),L[h]=C?D:A,n||C||f(x,pt,A)}}else t.exports=function(){}},/* 30 */
/***/
function(t,e,i){var n=i(118),r=i(0),a=i(52)("metadata"),s=a.store||(a.store=new(i(121))),o=function(t,e,i){var r=s.get(t);if(!r){if(!i)return;s.set(t,r=new n)}var a=r.get(e);if(!a){if(!i)return;r.set(e,a=new n)}return a},l=function(t,e,i){var n=o(e,i,!1);return void 0!==n&&n.has(t)},h=function(t,e,i){var n=o(e,i,!1);return void 0===n?void 0:n.get(t)},u=function(t,e,i,n){o(i,n,!0).set(t,e)},c=function(t,e){var i=o(t,e,!1),n=[];return i&&i.forEach(function(t,e){n.push(e)}),n},f=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},d=function(t){r(r.S,"Reflect",t)};t.exports={store:s,map:o,has:l,get:h,set:u,keys:c,key:f,exp:d}},/* 31 */
/***/
function(t,e,i){var n=i(34)("meta"),r=i(5),a=i(12),s=i(8).f,o=0,l=Object.isExtensible||function(){return!0},h=!i(4)(function(){return l(Object.preventExtensions({}))}),u=function(t){s(t,n,{value:{i:"O"+ ++o,// object ID
w:{}}})},c=function(t,e){
// return primitive with prefix
if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){
// can't set metadata to uncaught frozen object
if(!l(t))return"F";
// not necessary to add metadata
if(!e)return"E";
// add missing metadata
u(t)}return t[n].i},f=function(t,e){if(!a(t,n)){
// can't set metadata to uncaught frozen object
if(!l(t))return!0;
// not necessary to add metadata
if(!e)return!1;
// add missing metadata
u(t)}return t[n].w},d=function(t){return h&&p.NEED&&l(t)&&!a(t,n)&&u(t),t},p=t.exports={KEY:n,NEED:!1,fastKey:c,getWeak:f,onFreeze:d}},/* 32 */
/***/
function(t,e,i){
// 22.1.3.31 Array.prototype[@@unscopables]
var n=i(6)("unscopables"),r=Array.prototype;void 0==r[n]&&i(13)(r,n,{}),t.exports=function(t){r[n][t]=!0}},/* 33 */
/***/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/* 34 */
/***/
function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+n).toString(36))}},/* 35 */
/***/
function(t,e){t.exports=!1},/* 36 */
/***/
function(t,e,i){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var n=i(99),r=i(69);t.exports=Object.keys||function(t){return n(t,r)}},/* 37 */
/***/
function(t,e,i){var n=i(26),r=Math.max,a=Math.min;t.exports=function(t,e){return t=n(t),t<0?r(t+e,0):a(t,e)}},/* 38 */
/***/
function(t,e,i){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var n=i(1),r=i(100),a=i(69),s=i(68)("IE_PROTO"),o=function(){},l=function(){
// Thrash, waste and sodomy: IE GC bug
var t,e=i(66)("iframe"),n=a.length;for(e.style.display="none",i(70).appendChild(e),e.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[a[n]];return l()};t.exports=Object.create||function(t,e){var i;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==t?(o.prototype=n(t),i=new o,o.prototype=null,i[s]=t):i=l(),void 0===e?i:r(i,e)}},/* 39 */
/***/
function(t,e,i){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var n=i(99),r=i(69).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},/* 40 */
/***/
function(t,e,i){"use strict";var n=i(2),r=i(8),a=i(7),s=i(6)("species");t.exports=function(t){var e=n[t];a&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},/* 41 */
/***/
function(t,e){t.exports=function(t,e,i,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(i+": incorrect invocation!");return t}},/* 42 */
/***/
function(t,e,i){var n=i(20),r=i(111),a=i(82),s=i(1),o=i(9),l=i(84),h={},u={},e=t.exports=function(t,e,i,c,f){var d,p,m,y,g=f?function(){return t}:l(t),v=n(i,c,e?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");
// fast case for arrays with default iterator
if(a(g)){for(d=o(t.length);d>b;b++)if((y=e?v(s(p=t[b])[0],p[1]):v(t[b]))===h||y===u)return y}else for(m=g.call(t);!(p=m.next()).done;)if((y=r(m,v,p.value,e))===h||y===u)return y};e.BREAK=h,e.RETURN=u},/* 43 */
/***/
function(t,e,i){var n=i(14);t.exports=function(t,e,i){for(var r in e)n(t,r,e[r],i);return t}},/* 44 */
/***/
function(t,e,i){var n=i(8).f,r=i(12),a=i(6)("toStringTag");t.exports=function(t,e,i){t&&!r(t=i?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},/* 45 */
/***/
function(t,e,i){var n=i(0),r=i(25),a=i(4),s=i(72),o="["+s+"]",l="​",h=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,i){var r={},o=a(function(){return!!s[t]()||l[t]()!=l}),h=r[t]=o?e(f):s[t];i&&(r[i]=h),n(n.P+n.F*o,"String",r)},f=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},/* 46 */
/***/
function(t,e){t.exports={}},/* 47 */
/***/
function(t,e,i){var n=i(5);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},/* 48 */
,/* 49 */
/***/
function(t,e,i){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var n=i(21);
// eslint-disable-next-line no-prototype-builtins
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},/* 50 */
/***/
function(t,e){e.f={}.propertyIsEnumerable},/* 51 */
/***/
function(t,e,i){
// getting tag from 19.1.3.6 Object.prototype.toString()
var n=i(21),r=i(6)("toStringTag"),a="Arguments"==n(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,i,o;// @@toStringTag case
// builtinTag case
// ES3 arguments fallback
return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=s(e=Object(t),r))?i:a?n(e):"Object"==(o=n(e))&&"function"==typeof e.callee?"Arguments":o}},/* 52 */
/***/
function(t,e,i){var n=i(2),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},/* 53 */
/***/
function(t,e,i){
// false -> Array#indexOf
// true  -> Array#includes
var n=i(16),r=i(9),a=i(37);t.exports=function(t){return function(e,i,s){var o,l=n(e),h=r(l.length),u=a(s,h);
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
var n=i(21);t.exports=Array.isArray||function(t){return"Array"==n(t)}},/* 56 */
/***/
function(t,e,i){
// 7.2.8 IsRegExp(argument)
var n=i(5),r=i(21),a=i(6)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},/* 57 */
/***/
function(t,e,i){var n=i(6)("iterator"),r=!1;try{var a=[7][n]();a.return=function(){r=!0},
// eslint-disable-next-line no-throw-literal
Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var i=!1;try{var a=[7],s=a[n]();s.next=function(){return{done:i=!0}},a[n]=function(){return s},t(a)}catch(t){}return i}},/* 58 */
/***/
function(t,e,i){"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var n=i(1);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},/* 59 */
/***/
function(t,e,i){"use strict";var n=i(13),r=i(14),a=i(4),s=i(25),o=i(6);t.exports=function(t,e,i){var l=o(t),h=i(s,l,""[t]),u=h[0],c=h[1];a(function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,u),n(RegExp.prototype,l,2==e?// 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
// 21.2.5.11 RegExp.prototype[@@split](string, limit)
function(t,e){return c.call(t,this,e)}:// 21.2.5.6 RegExp.prototype[@@match](string)
// 21.2.5.9 RegExp.prototype[@@search](string)
function(t){return c.call(t,this)}))}},/* 60 */
/***/
function(t,e,i){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var n=i(1),r=i(11),a=i(6)("species");t.exports=function(t,e){var i,s=n(t).constructor;return void 0===s||void 0==(i=n(s)[a])?e:r(i)}},/* 61 */
/***/
function(t,e,i){"use strict";var n=i(2),r=i(0),a=i(14),s=i(43),o=i(31),l=i(42),h=i(41),u=i(5),c=i(4),f=i(57),d=i(44),p=i(73);t.exports=function(t,e,i,m,y,g){var v=n[t],b=v,w=y?"set":"add",S=b&&b.prototype,P={},x=function(t){var e=S[t];a(S,t,"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,i){return e.call(this,0===t?0:t,i),this})};if("function"==typeof b&&(g||S.forEach&&!c(function(){(new b).entries().next()}))){var _=new b,k=_[w](g?{}:-0,1)!=_,T=c(function(){_.has(1)}),M=f(function(t){new b(t)}),O=!g&&c(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var t=new b,e=5;e--;)t[w](e,e);return!t.has(-0)});M||(b=e(function(e,i){h(e,b,t);var n=p(new v,e,b);return void 0!=i&&l(i,y,n[w],n),n}),b.prototype=S,S.constructor=b),(T||O)&&(x("delete"),x("has"),y&&x("get")),(O||k)&&x(w),
// weak collections should not contains .clear method
g&&S.clear&&delete S.clear}else
// create collection constructor
b=m.getConstructor(e,t,y,w),s(b.prototype,i),o.NEED=!0;return d(b,t),P[t]=b,r(r.G+r.W+r.F*(b!=v),P),g||m.setStrong(b,t,y),b}},/* 62 */
/***/
function(t,e,i){for(var n,r=i(2),a=i(13),s=i(34),o=s("typed_array"),l=s("view"),h=!(!r.ArrayBuffer||!r.DataView),u=h,c=0,f="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");c<9;)(n=r[f[c++]])?(a(n.prototype,o,!0),a(n.prototype,l,!0)):u=!1;t.exports={ABV:h,CONSTR:u,TYPED:o,VIEW:l}},/* 63 */
/***/
function(t,e,i){"use strict";
// Forced replacement prototype accessors methods
t.exports=i(35)||!i(4)(function(){var t=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,t,function(){}),delete i(2)[t]})},/* 64 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=i(0);t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},/* 65 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=i(0),r=i(11),a=i(20),s=i(42);t.exports=function(t){n(n.S,t,{from:function(t){var e,i,n,o,l=arguments[1];return r(this),e=void 0!==l,e&&r(l),void 0==t?new this:(i=[],e?(n=0,o=a(l,arguments[2],2),s(t,!1,function(t){i.push(o(t,n++))})):s(t,!1,i.push,i),new this(i))}})}},/* 66 */
/***/
function(t,e,i){var n=i(5),r=i(2).document,a=n(r)&&n(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},/* 67 */
/***/
function(t,e,i){var n=i(2),r=i(23),a=i(35),s=i(98),o=i(8).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:s.f(t)})}},/* 68 */
/***/
function(t,e,i){var n=i(52)("keys"),r=i(34);t.exports=function(t){return n[t]||(n[t]=r(t))}},/* 69 */
/***/
function(t,e){
// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 70 */
/***/
function(t,e,i){var n=i(2).document;t.exports=n&&n.documentElement},/* 71 */
/***/
function(t,e,i){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var n=i(5),r=i(1),a=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i(20)(Function.call,i(17).f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return a(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:a}},/* 72 */
/***/
function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},/* 73 */
/***/
function(t,e,i){var n=i(5),r=i(71).set;t.exports=function(t,e,i){var a,s=e.constructor;return s!==i&&"function"==typeof s&&(a=s.prototype)!==i.prototype&&n(a)&&r&&r(t,a),t}},/* 74 */
/***/
function(t,e,i){"use strict";var n=i(26),r=i(25);t.exports=function(t){var e=String(r(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},/* 75 */
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
function(t,e,i){var n=i(26),r=i(25);
// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,i){var a,s,o=String(r(e)),l=n(i),h=o.length;return l<0||l>=h?t?"":void 0:(a=o.charCodeAt(l),a<55296||a>56319||l+1===h||(s=o.charCodeAt(l+1))<56320||s>57343?t?o.charAt(l):a:t?o.slice(l,l+2):s-56320+(a-55296<<10)+65536)}}},/* 78 */
/***/
function(t,e,i){"use strict";var n=i(35),r=i(0),a=i(14),s=i(13),o=i(12),l=i(46),h=i(79),u=i(44),c=i(18),f=i(6)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,i,m,y,g,v){h(i,e,m);var b,w,S,P=function(t){if(!d&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},x=e+" Iterator",_="values"==y,k=!1,T=t.prototype,M=T[f]||T["@@iterator"]||y&&T[y],O=!d&&M||P(y),E=y?_?P("entries"):O:void 0,D="Array"==e?T.entries||M:M;if(
// Fix native
D&&(S=c(D.call(new t)))!==Object.prototype&&S.next&&(
// Set @@toStringTag to native iterators
u(S,x,!0),
// fix for some old engines
n||o(S,f)||s(S,f,p)),
// fix Array#{values, @@iterator}.name in V8 / FF
_&&M&&"values"!==M.name&&(k=!0,O=function(){return M.call(this)}),
// Define iterator
n&&!v||!d&&!k&&T[f]||s(T,f,O),
// Plug for library
l[e]=O,l[x]=p,y)if(b={values:_?O:P("values"),keys:g?O:P("keys"),entries:E},v)for(w in b)w in T||a(T,w,b[w]);else r(r.P+r.F*(d||k),e,b);return b}},/* 79 */
/***/
function(t,e,i){"use strict";var n=i(38),r=i(33),a=i(44),s={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
i(13)(s,i(6)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=n(s,{next:r(1,i)}),a(t,e+" Iterator")}},/* 80 */
/***/
function(t,e,i){
// helper for String#{startsWith, endsWith, includes}
var n=i(56),r=i(25);t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(r(t))}},/* 81 */
/***/
function(t,e,i){var n=i(6)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},/* 82 */
/***/
function(t,e,i){
// check on default Array iterator
var n=i(46),r=i(6)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||a[r]===t)}},/* 83 */
/***/
function(t,e,i){"use strict";var n=i(8),r=i(33);t.exports=function(t,e,i){e in t?n.f(t,e,r(0,i)):t[e]=i}},/* 84 */
/***/
function(t,e,i){var n=i(51),r=i(6)("iterator"),a=i(46);t.exports=i(23).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||a[n(t)]}},/* 85 */
/***/
function(t,e,i){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var n=i(236);t.exports=function(t,e){return new(n(t))(e)}},/* 86 */
/***/
function(t,e,i){"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=i(10),r=i(37),a=i(9);t.exports=function(t){for(var e=n(this),i=a(e.length),s=arguments.length,o=r(s>1?arguments[1]:void 0,i),l=s>2?arguments[2]:void 0,h=void 0===l?i:r(l,i);h>o;)e[o++]=t;return e}},/* 87 */
/***/
function(t,e,i){"use strict";var n=i(32),r=i(114),a=i(46),s=i(16);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
t.exports=i(78)(Array,"Array",function(t,e){this._t=s(t),// target
this._i=0,// next index
this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,i):"values"==e?r(0,t[i]):r(0,[i,t[i]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
a.Arguments=a.Array,n("keys"),n("values"),n("entries")},/* 88 */
/***/
function(t,e,i){var n,r,a,s=i(20),o=i(104),l=i(70),h=i(66),u=i(2),c=u.process,f=u.setImmediate,d=u.clearImmediate,p=u.MessageChannel,m=u.Dispatch,y=0,g={},v=function(){var t=+this;
// eslint-disable-next-line no-prototype-builtins
if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){v.call(t.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
f&&d||(f=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return g[++y]=function(){
// eslint-disable-next-line no-new-func
o("function"==typeof t?t:Function(t),e)},n(y),y},d=function(t){delete g[t]},
// Node.js 0.8-
"process"==i(21)(c)?n=function(t){c.nextTick(s(v,t,1))}:m&&m.now?n=function(t){m.now(s(v,t,1))}:p?(r=new p,a=r.port2,r.port1.onmessage=b,n=s(a.postMessage,a,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(n=function(t){u.postMessage(t+"","*")},u.addEventListener("message",b,!1)):n="onreadystatechange"in h("script")?function(t){l.appendChild(h("script")).onreadystatechange=function(){l.removeChild(this),v.call(t)}}:function(t){setTimeout(s(v,t,1),0)}),t.exports={set:f,clear:d}},/* 89 */
/***/
function(t,e,i){var n=i(2),r=i(88).set,a=n.MutationObserver||n.WebKitMutationObserver,s=n.process,o=n.Promise,l="process"==i(21)(s);t.exports=function(){var t,e,i,h=function(){var n,r;for(l&&(n=s.domain)&&n.exit();t;){r=t.fn,t=t.next;try{r()}catch(n){throw t?i():e=void 0,n}}e=void 0,n&&n.enter()};
// Node.js
if(l)i=function(){s.nextTick(h)};else if(!a||n.navigator&&n.navigator.standalone)if(o&&o.resolve){var u=o.resolve();i=function(){u.then(h)}}else i=function(){
// strange IE + webpack dev server bug - use .call(global)
r.call(n,h)};else{var c=!0,f=document.createTextNode("");new a(h).observe(f,{characterData:!0}),// eslint-disable-line no-new
i=function(){f.data=c=!c}}return function(n){var r={fn:n,next:void 0};e&&(e.next=r),t||(t=r,i()),e=r}}},/* 90 */
/***/
function(t,e,i){"use strict";function n(t){var e,i;this.promise=new t(function(t,n){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=n}),this.resolve=r(e),this.reject=r(i)}
// 25.4.1.5 NewPromiseCapability(C)
var r=i(11);t.exports.f=function(t){return new n(t)}},/* 91 */
/***/
function(t,e,i){"use strict";
// IEEE754 conversions based on https://github.com/feross/ieee754
function n(t,e,i){var n,r,a,s=new Array(i),o=8*i-e-1,l=(1<<o)-1,h=l>>1,u=23===e?R(2,-24)-R(2,-77):0,c=0,f=t<0||0===t&&1/t<0?1:0;for(t=F(t),
// eslint-disable-next-line no-self-compare
t!=t||t===I?(
// eslint-disable-next-line no-self-compare
r=t!=t?1:0,n=l):(n=j(G(t)/U),t*(a=R(2,-n))<1&&(n--,a*=2),t+=n+h>=1?u/a:u*R(2,1-h),t*a>=2&&(n++,a/=2),n+h>=l?(r=0,n=l):n+h>=1?(r=(t*a-1)*R(2,e),n+=h):(r=t*R(2,h-1)*R(2,e),n=0));e>=8;s[c++]=255&r,r/=256,e-=8);for(n=n<<e|r,o+=e;o>0;s[c++]=255&n,n/=256,o-=8);return s[--c]|=128*f,s}function r(t,e,i){var n,r=8*i-e-1,a=(1<<r)-1,s=a>>1,o=r-7,l=i-1,h=t[l--],u=127&h;for(h>>=7;o>0;u=256*u+t[l],l--,o-=8);for(n=u&(1<<-o)-1,u>>=-o,o+=e;o>0;n=256*n+t[l],l--,o-=8);if(0===u)u=1-s;else{if(u===a)return n?NaN:h?-I:I;n+=R(2,e),u-=s}return(h?-1:1)*n*R(2,u-e)}function a(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function s(t){return[255&t]}function o(t){return[255&t,t>>8&255]}function l(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function h(t){return n(t,52,8)}function u(t){return n(t,23,4)}function c(t,e,i){T(t[E],e,{get:function(){return this[i]}})}function f(t,e,i,n){var r=+i,a=_(r);if(a+e>t[X])throw L(D);var s=t[V]._b,o=a+t[q],l=s.slice(o,o+e);return n?l:l.reverse()}function d(t,e,i,n,r,a){var s=+i,o=_(s);if(o+e>t[X])throw L(D);for(var l=t[V]._b,h=o+t[q],u=n(+r),c=0;c<e;c++)l[h+c]=u[a?c:e-c-1]}var p=i(2),m=i(7),y=i(35),g=i(62),v=i(13),b=i(43),w=i(4),S=i(41),P=i(26),x=i(9),_=i(123),k=i(39).f,T=i(8).f,M=i(86),O=i(44),E="prototype",D="Wrong index!",C=p.ArrayBuffer,A=p.DataView,B=p.Math,L=p.RangeError,I=p.Infinity,N=C,F=B.abs,R=B.pow,j=B.floor,G=B.log,U=B.LN2,V=m?"_b":"buffer",X=m?"_l":"byteLength",q=m?"_o":"byteOffset";if(g.ABV){if(!w(function(){C(1)})||!w(function(){new C(-1)})||w(function(){// eslint-disable-line no-new
// eslint-disable-line no-new
// eslint-disable-line no-new
return new C,new C(1.5),new C(NaN),"ArrayBuffer"!=C.name})){C=function(t){return S(this,C),new N(_(t))};for(var Y,W=C[E]=N[E],H=k(N),K=0;H.length>K;)(Y=H[K++])in C||v(C,Y,N[Y]);y||(W.constructor=C)}
// iOS Safari 7.x bug
var J=new A(new C(2)),z=A[E].setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||b(A[E],{setInt8:function(t,e){z.call(this,t,e<<24>>24)},setUint8:function(t,e){z.call(this,t,e<<24>>24)}},!0)}else C=function(t){S(this,C,"ArrayBuffer");var e=_(t);this._b=M.call(new Array(e),0),this[X]=e},A=function(t,e,i){S(this,A,"DataView"),S(t,C,"DataView");var n=t[X],r=P(e);if(r<0||r>n)throw L("Wrong offset!");if(i=void 0===i?n-r:x(i),r+i>n)throw L("Wrong length!");this[V]=t,this[q]=r,this[X]=i},m&&(c(C,"byteLength","_l"),c(A,"buffer","_b"),c(A,"byteLength","_l"),c(A,"byteOffset","_o")),b(A[E],{getInt8:function(t){return f(this,1,t)[0]<<24>>24},getUint8:function(t){return f(this,1,t)[0]},getInt16:function(t){var e=f(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=f(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return a(f(this,4,t,arguments[1]))},getUint32:function(t){return a(f(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return r(f(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return r(f(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){d(this,1,t,s,e)},setUint8:function(t,e){d(this,1,t,s,e)},setInt16:function(t,e){d(this,2,t,o,e,arguments[2])},setUint16:function(t,e){d(this,2,t,o,e,arguments[2])},setInt32:function(t,e){d(this,4,t,l,e,arguments[2])},setUint32:function(t,e){d(this,4,t,l,e,arguments[2])},setFloat32:function(t,e){d(this,4,t,u,e,arguments[2])},setFloat64:function(t,e){d(this,8,t,h,e,arguments[2])}});O(C,"ArrayBuffer"),O(A,"DataView"),v(A[E],g.VIEW,!0),e.ArrayBuffer=C,e.DataView=A},/* 92 */
/***/
function(t,e,i){var n=i(2),r=n.navigator;t.exports=r&&r.userAgent||""},/* 93 */
/***/
function(t,e){!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e,i){n(this,t),this.x=e||0,this.y=i||0}return r(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"equals",value:function(t){return t&&this.x===t.x&&this.y===t.y}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"normalized",value:function(){var e=this.length();return 0===e?new t(0,0):new t(this.x/e,this.y/e)}},{key:"perpendicular",value:function(){return new t(-this.y,this.x)}},{key:"rotated",value:function(e){var i=Math.cos(e),n=Math.sin(e);return new t(i*this.x+n*this.y,-n*this.x+i*this.y)}},{key:"plus",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"minus",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"perpDot",value:function(t){return this.x*t.y-this.y*t.x}},{key:"scale",value:function(e){return new t(this.x*e,this.y*e)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(t){return t&&t.__esModule?t:{default:t}}(s),l=function(){function t(e,i,n,a){r(this,t),this.left=void 0===e?Number.POSITIVE_INFINITY:e,this.right=void 0===n?Number.NEGATIVE_INFINITY:n,this.top=void 0===i?Number.POSITIVE_INFINITY:i,this.bottom=void 0===a?Number.NEGATIVE_INFINITY:a}return a(t,[{key:"isEmpty",value:function(){return this.left>this.right||this.top>this.bottom}},{key:"width",value:function(){var t=this.right-this.left;return t>=0?t:NaN}},{key:"height",value:function(){var t=this.bottom-this.top;return t>=0?t:NaN}},{key:"centre",value:function(){return new o.default(.5*(this.left+this.right),.5*(this.top+this.bottom))}},{key:"containsPoint",value:function(t){return this.left<=t.x&&t.x<=this.right&&this.top<=t.y&&t.y<=this.bottom}},{key:"containsPoints",value:function(t){var e=!0,i=!1,n=void 0;try{for(var r,a=t[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var s=r.value;if(!this.containsPoint(s))return!1}}catch(t){i=!0,n=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw n}}return!0}},{key:"intersects",value:function(t){return this.left<=t.right&&this.right>=t.left&&this.top<=t.bottom&&this.bottom>=t.top}},{key:"translated",value:function(e){return new t(this.left+e.x,this.top+e.y,this.right+e.x,this.bottom+e.y)}}],[{key:"fromPoints",value:function(e){var i=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(i=Math.min.apply(Math,n(e.map(function(t){return t.x}))),r=Math.min.apply(Math,n(e.map(function(t){return t.y}))),a=Math.max.apply(Math,n(e.map(function(t){return t.x}))),s=Math.max.apply(Math,n(e.map(function(t){return t.y})))):(i=e.x,r=e.y,a=e.x,s=e.y),new t(i,r,a,s)}},{key:"fromAABBs",value:function(e){var i=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(i=Math.min.apply(Math,n(e.map(function(t){return t.left}))),r=Math.min.apply(Math,n(e.map(function(t){return t.top}))),a=Math.max.apply(Math,n(e.map(function(t){return t.right}))),s=Math.max.apply(Math,n(e.map(function(t){return t.bottom})))):(i=Math.min(i,aabb.left),r=Math.min(r,aabb.top),a=Math.max(a,aabb.right),s=Math.max(s,aabb.bottom)),new t(i,r,a,s)}}]),t}();e.default=l},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(9),l=n(o),h=i(0),u=n(h),c=i(1),f=n(c),d=i(3),p=n(d),m=function(t){return t.reduce(function(t,e){return t+e},0)/t.length},y=function(t,e,i,n){if(t>i)throw new Error("Right must be greater than Left");if(e>n)throw new Error("Bottom must be greater than Top")},g=function(){function t(e){a(this,t),this.vertices=e,this.recompute()}return s(t,[{key:"recompute",value:function(){var t=this.vertices;if(this.aabb=f.default.fromPoints(t),this.edges=[],this.normals=[],this.count=t.length,this.centre=new u.default(m(t.map(function(t){return t.x})),m(t.map(function(t){return t.y}))),this.count>1)for(var e=0;e<this.count;e++){var i=(e+1)%this.count,n=t[i].minus(t[e]);this.edges.push(n);var r=n.normalized().perpendicular(),a=t[e].minus(this.centre);a.dot(r)<0&&(r=r.scale(-1)),this.normals.push(r)}}},{key:"isValid",value:function(){if(this.count<4)return!0;for(var t=0,e=0;e<this.count;e++){var i=(e+1)%this.count,n=this.edges[e].perpDot(this.edges[i]);if(n*t<0)return!1;t=n}return!0}},{key:"projectOntoAxis",value:function(t){var e=new p.default,i=!0,n=!1,r=void 0;try{for(var a,s=this.vertices[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var o=a.value,l=o.dot(t);e.extendTo(l)}}catch(t){n=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw r}}return e}},{key:"rotated",value:function(e){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=this.vertices[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var l=s.value,h=new u.default(l.x,l.y).minus(this.centre),c=h.rotated(e),f=this.centre.plus(c);i.push(f)}}catch(t){r=!0,a=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}return new t(i)}},{key:"translated",value:function(e){return new t(this.vertices.map(function(t){return t.plus(e)}))}}],[{key:"fromRectangle",value:function(e,i,n,r){return y(e,i,n,r),new t([new u.default(e,i),new u.default(n,i),new u.default(n,r),new u.default(e,r)])}},{key:"fromCapsule",value:function(e,i,n,a,s){if(s<3)throw new Error("Specify at least 3 cap segments");y(e,i,n,a);var o=n-e;if(a-i<o)throw new Error("Capsule height must be larger than width");var l=.5*o,h=[].concat(r(Array(s).keys())).map(function(t){return-t*Math.PI/s}),c=.5*(e+n),f=h.map(function(t){return new u.default(Math.cos(t),Math.sin(t)).scale(l)}),d=new u.default(c,i+l),p=f.map(function(t){return d.plus(t)});p.push(new u.default(e,d.y));var m=new u.default(c,a-l);return p=p.concat(f.map(function(t){return m.minus(t)})),p.push(new u.default(n,m.y)),new t(p)}},{key:"generateConvexPolygons",value:function(e){var i=e.map(function(t){return[t.x,t.y]});return l.default.decomp(i).map(function(e){return new t(e.map(function(t){return new u.default(t[0],t[1])}))})}}]),t}();e.default=g},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t),this.makeEmpty()}return r(t,[{key:"extendTo",value:function(t){this.min>t&&(this.min=t),this.max<t&&(this.max=t)}},{key:"containsPoint",value:function(t){return this.min<=t&&t<=this.max}},{key:"containsRange",value:function(t){return this.min<=t.min&&this.max>t.max}},{key:"isEmpty",value:function(){return this.min>this.max}},{key:"makeEmpty",value:function(){this.min=Number.POSITIVE_INFINITY,this.max=Number.NEGATIVE_INFINITY}},{key:"length",value:function(){return this.min>this.max?Number.NaN:this.max-this.min}}],[{key:"intersection",value:function(e,i){var n=new t;return n.min=Math.max(e.min,i.min),n.max=Math.min(e.max,i.max),n.min>n.max&&n.makeEmpty(),n}},{key:"bound",value:function(e,i){var n=new t;return n.min=Math.min(e.min,i.min),n.max=Math.max(e.max,i.max),n}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=n(s),l=i(2),h=n(l),u=i(3),c=n(u),f=i(1),d=(n(f),i(10)),p=n(d),m=function(){function t(e){r(this,t),this.objectLayerJson=e,this.shapes=[];var i=!0,n=!1,a=void 0;try{for(var s,o=e.objects[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var l=s.value;l.polygon?this.addPolygon(l):l.polyline||l.ellipse||l.gid||(l.text,this.addRectangle(l))}}catch(t){n=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw a}}this.quadTree=new p.default(this.shapes,5,5)}return a(t,[{key:"addRectangle",value:function(t){var e=t.width,i=t.height,n=new o.default(e,0),r=new o.default(0,i),a=-t.rotation*Math.PI/180;a&&(n=n.rotated(a),r=r.rotated(a));var s={x:t.x,y:t.y,width:t.width,height:t.height,polygon:[{x:0,y:0},n,n.plus(r),r],properties:t.properties||{}};this.addPolygon(s)}},{key:"addPolygon",value:function(t){var e=t.polygon.map(function(e){return new o.default(t.x+e.x,t.y+e.y)}),i=h.default.generateConvexPolygons(e),n=!0,r=!1,a=void 0;try{for(var s,l=i[Symbol.iterator]();!(n=(s=l.next()).done);n=!0){var u=s.value;this.addConvexPolygon(u,t.properties||{})}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}}},{key:"addConvexPolygon",value:function(t,e){var i=t.aabb,n={type:"polygon",left:i.left,top:i.top,right:i.right,bottom:i.bottom,polygon:t,properties:e||{},collideWidth:function(t){var e=t.sprite,i=new o.default(e.x,e.y),n=t.x,r=t.x+t.width,a=t.y,s=t.y+t.height,l=void 0,u=void 0;t.plus&&t.plus.shape?(u=t.plus.shape.translated(i),l=u.normals.concat(this.polygon.normals)):(u=h.default.fromRectangle(n,a,r,s),l=[new o.default(1,0),new o.default(0,1)].concat(this.polygon.normals));var f=Number.POSITIVE_INFINITY,d=void 0,p=!0,m=!1,y=void 0;try{for(var g,v=l[Symbol.iterator]();!(p=(g=v.next()).done);p=!0){var b=g.value,w=this.polygon.projectOntoAxis(b),S=u.projectOntoAxis(b);if(c.default.intersection(w,S).isEmpty())return null;var P=Math.min(Math.abs(w.max-S.min),Math.abs(S.max-w.min));f>P&&(f=P,d=b)}}catch(t){m=!0,y=t}finally{try{!p&&v.return&&v.return()}finally{if(m)throw y}}return u.centre.minus(this.polygon.centre).dot(d)<0&&(d=d.scale(-1)),{penetration:d.scale(-f),normal:d}}};this.shapes.push(n)}}]),t}();e.default=m},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(6),a=n(r),s=i(14),o=n(s),l=i(15),h=n(l),u=i(16),c=n(u);Phaser.Plugin.TilemapPlus=function(t,e){function i(t){return t+"-TilemapPlus"}Phaser.Plugin.call(this,t,e);var n=Phaser.Loader.prototype.tilemap;Phaser.Loader.prototype.tilemap=function(t,e,r,a){n.call(this,t,e,r,a),this.json(i(t),e)};var r=Phaser.GameObjectFactory.prototype.tilemap;Phaser.GameObjectFactory.prototype.tilemap=function(t,e,n,s,o){var l=r.call(this,t,e,n,s,o),h=this.game.cache.getJSON(i(t));return l.plus=new a.default(h,this.game.time,l),l};var s=Phaser.Tilemap.prototype.createLayer;Phaser.Tilemap.prototype.createLayer=function(t,e,i,n){var r=s.call(this,t,e,i,n);return r.plus=new o.default(r),r};var l=Phaser.Tilemap.prototype.addTilesetImage;Phaser.Tilemap.prototype.addTilesetImage=function(t,e,i,n,r,a,s){var o=l.call(this,t,e,i,n,r,a,s);return o.plus=new h.default(o),o};var u=Phaser.GameObjectFactory.prototype.sprite;Phaser.GameObjectFactory.prototype.sprite=function(t,e,i,n,r){var a=u.call(this,t,e,i,n,r);return a.plus=new c.default(a),a}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=i(7),s=n(a),o=i(8),l=n(o),h=i(11),u=n(h),c=function t(e,i,n){r(this,t),this.tilemapJson=e,this.time=i,this.tilemap=n,this.timer=null,this.tileAnimations=[],this.game=i.game,this.animation=new s.default(e,i,n),this.events=new u.default(e),this.physics=new l.default(e,this.events),this.properties=e.properties||{}};e.default=c},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){var e=t.tiles;if(e){var i=!0,n=!1,r=void 0;try{for(var s,o=Object.keys(e)[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var l=s.value,h=e[l],u=h.animation;u&&u.length>0&&a.bind(this)(t,l,u)}}catch(t){n=!0,r=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw r}}}}function a(t,e,i){var n=i.map(function(t){return{tileId:t.tileid,duration:t.duration}});if(0!==n.length){var r=this.tilemap.tilesets.find(function(e){return e.name===t.name}),a={frames:n,tileset:r,tileLocations:o.bind(this)(r.firstgid+parseInt(e)),currentFrame:0,currentDuration:0};this.tileAnimations.push(a)}}function s(){var t=this.time.elapsedMS,e=!1,i=!0,n=!1,r=void 0;try{for(var a,s=this.tileAnimations[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var o=a.value,l=o.frames,h=o.tileset,u=o.tileLocations,c=o.currentFrame,f=l[c].duration;if(o.currentDuration+=t,o.currentDuration>f){o.currentDuration-=f,o.currentFrame=(c+1)%l.length;var d=h.firstgid+l[o.currentFrame].tileId,p=!0,m=!1,y=void 0;try{for(var g,v=u[Symbol.iterator]();!(p=(g=v.next()).done);p=!0){var b=g.value;this.tilemap.getTile(b.x,b.y,b.layer,!0).index=d}}catch(t){m=!0,y=t}finally{try{!p&&v.return&&v.return()}finally{if(m)throw y}}e=!0}}}catch(t){n=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw r}}if(e){var w=!0,S=!1,P=void 0;try{for(var x,_=this.tilemap.layers[Symbol.iterator]();!(w=(x=_.next()).done);w=!0)x.value.dirty=!0}catch(t){S=!0,P=t}finally{try{!w&&_.return&&_.return()}finally{if(S)throw P}}}}function o(t){var e=[],i=!0,n=!1,r=void 0;try{for(var a,s=this.tilemapJson.layers[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var o=a.value;if("tilelayer"===o.type)for(var l=o.data,h=o.width,u=o.height,c=0;c<u;c++)for(var f=0;f<h;f++)l[c*h+f]===t&&e.push({x:f,y:c,layer:o.name})}}catch(t){n=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw r}}return e}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),h=function(){function t(e,i,r){n(this,t),this.tilemapJson=e,this.time=i,this.tilemap=r,this.timer=null,this.tileAnimations=[],this.game=i.game}return l(t,[{key:"enable",value:function(){var t=this;if(null==this.timer){var e=!0,i=!1,n=void 0;try{for(var a,o=this.tilemapJson.tilesets[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;l.tiles&&r.bind(this)(l)}}catch(t){i=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw n}}this.timer=this.time.events.loop(20,function(){return s.bind(t)()})}}},{key:"disable",value:function(){null!=this.timer&&(this.time.events.remove(this.timer),this.timer=null,this.tileAnimations=[])}}]),t}();e.default=h},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=n(s),l=i(2),h=(n(l),i(3)),u=(n(h),i(1)),c=n(u),f=i(4),d=n(f),p=function(){function t(e,i){r(this,t),this.tilemapJson=e,this.events=i}return a(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new d.default(e)}},{key:"collideWith",value:function(t){if(this.shapeLayer){var e=t.body,i=t.game.physics.arcade.gravity,n=new o.default(i.x,i.y),r=(n.normalized(),new o.default(e.velocity.x,e.velocity.y));e.plus||(e.plus={});var a=e.plus;a.contactNormals=[],a.penetrations=[],a.contactNormal||(a.contactNormal=new o.default),a.contactNormal.x=a.contactNormal.y=0;var s=new o.default,l=0,h=new c.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),u=this.shapeLayer.quadTree.candidateShapes(h),f=[],d=!0,p=!1,m=void 0;try{for(var y,g=u[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var v=y.value,b=v.collideWidth(e);if(b){var w=b.normal;if(!(r.dot(w)>=0)){var S=b.penetration;if(new o.default(e.x-e.prev.x,e.y-e.prev.y).minus(S).dot(w)>=-1){var P=v.properties,x=P.collideOnly;if(x){if("down"===x&&(r.y<0||w.y>=0))continue;if("up"===x&&(r.y>0||w.y<=0))continue;if("right"===x&&(r.x<0||w.x>=0))continue;if("left"===x&&(r.x>0||w.x<=0))continue}a.contactNormal=a.contactNormal.plus(w),a.contactNormals.push(w),s=s.plus(S),a.penetrations.push(S);var _=P.bounce;_&&(l+=_),f.push(v)}}}}}catch(t){p=!0,m=t}finally{try{!d&&g.return&&g.return()}finally{if(p)throw m}}e.x-=s.x,e.y-=s.y,a.contactNormal=a.contactNormal.normalized();var k=a.contactNormal,T=r.dot(k),M=k.scale(T),O=r.minus(M),E=void 0;E=M.scale(-l);var D=O,C=E.plus(D);e.velocity.x=C.x,e.velocity.y=C.y,this.updateBlocked(t),this.events.collisions.notify(t,f,r,C,k)}}},{key:"updateBlocked",value:function(t){var e=t.body,i=e.plus.contactNormal;e.blocked.up=e.blocked.up||i.y>0,e.blocked.down=e.blocked.down||i.y<0,e.blocked.left=e.blocked.left||i.x>0,e.blocked.right=e.blocked.right||i.x<0,e.blocked.none=0==i.x&&0==i.y}}]),t}();e.default=p},function(t,e){function i(t,e,i){i=i||0;var n,r,a,s,o,l,h,u=[0,0];return n=t[1][1]-t[0][1],r=t[0][0]-t[1][0],a=n*t[0][0]+r*t[0][1],s=e[1][1]-e[0][1],o=e[0][0]-e[1][0],l=s*e[0][0]+o*e[0][1],h=n*o-s*r,T(h,0,i)||(u[0]=(o*a-r*l)/h,u[1]=(n*l-s*a)/h),u}function n(t,e,i,n){var r=e[0]-t[0],a=e[1]-t[1],s=n[0]-i[0],o=n[1]-i[1];if(s*a-o*r==0)return!1;var l=(r*(i[1]-t[1])+a*(t[0]-i[0]))/(s*a-o*r),h=(s*(t[1]-i[1])+o*(i[0]-t[0]))/(o*r-s*a);return l>=0&&l<=1&&h>=0&&h<=1}function r(t,e,i){return(e[0]-t[0])*(i[1]-t[1])-(i[0]-t[0])*(e[1]-t[1])}function a(t,e,i){return r(t,e,i)>0}function s(t,e,i){return r(t,e,i)>=0}function o(t,e,i){return r(t,e,i)<0}function l(t,e,i){return r(t,e,i)<=0}function h(t,e,i,n){if(n){var a=M,s=O;a[0]=e[0]-t[0],a[1]=e[1]-t[1],s[0]=i[0]-e[0],s[1]=i[1]-e[1];var o=a[0]*s[0]+a[1]*s[1],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]),h=Math.sqrt(s[0]*s[0]+s[1]*s[1]);return Math.acos(o/(l*h))<n}return 0===r(t,e,i)}function u(t,e){var i=e[0]-t[0],n=e[1]-t[1];return i*i+n*n}function c(t,e){var i=t.length;return t[e<0?e%i+i:e%i]}function f(t){t.length=0}function d(t,e,i,n){for(var r=i;r<n;r++)t.push(e[r])}function p(t){for(var e=0,i=t,n=1;n<t.length;++n)(i[n][1]<i[e][1]||i[n][1]===i[e][1]&&i[n][0]>i[e][0])&&(e=n);a(c(t,e-1),c(t,e),c(t,e+1))||m(t)}function m(t){for(var e=[],i=t.length,n=0;n!==i;n++)e.push(t.pop());for(var n=0;n!==i;n++)t[n]=e[n]}function y(t,e){return o(c(t,e-1),c(t,e),c(t,e+1))}function g(t,e,n){var r,a,o=E,h=D;if(s(c(t,e+1),c(t,e),c(t,n))&&l(c(t,e-1),c(t,e),c(t,n)))return!1;a=u(c(t,e),c(t,n));for(var f=0;f!==t.length;++f)if((f+1)%t.length!==e&&f!==e&&s(c(t,e),c(t,n),c(t,f+1))&&l(c(t,e),c(t,n),c(t,f))&&(o[0]=c(t,e),o[1]=c(t,n),h[0]=c(t,f),h[1]=c(t,f+1),r=i(o,h),u(c(t,e),r)<a))return!1;return!0}function v(t,e,i,n){var r=n||[];if(f(r),e<i)for(var a=e;a<=i;a++)r.push(t[a]);else{for(var a=0;a<=i;a++)r.push(t[a]);for(var a=e;a<t.length;a++)r.push(t[a])}return r}function b(t){for(var e=[],i=[],n=[],r=[],a=Number.MAX_VALUE,s=0;s<t.length;++s)if(y(t,s))for(var o=0;o<t.length;++o)if(g(t,s,o)){i=b(v(t,s,o,r)),n=b(v(t,o,s,r));for(var l=0;l<n.length;l++)i.push(n[l]);i.length<a&&(e=i,a=i.length,e.push([c(t,s),c(t,o)]))}return e}function w(t){var e=b(t);return e.length>0?S(t,e):[t]}function S(t,e){if(0===e.length)return[t];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var i=[t],n=0;n<e.length;n++)for(var r=e[n],a=0;a<i.length;a++){var s=i[a],o=S(s,r);if(o){i.splice(a,1),i.push(o[0],o[1]);break}}return i}var r=e,n=t.indexOf(r[0]),a=t.indexOf(r[1]);return-1!==n&&-1!==a&&[v(t,n,a),v(t,a,n)]}function P(t){var e,i=t;for(e=0;e<i.length-1;e++)for(var r=0;r<e-1;r++)if(n(i[e],i[e+1],i[r],i[r+1]))return!1;for(e=1;e<i.length-2;e++)if(n(i[0],i[i.length-1],i[e],i[e+1]))return!1;return!0}function x(t,e,i,n,r){r=r||0;var a=e[1]-t[1],s=t[0]-e[0],o=a*t[0]+s*t[1],l=n[1]-i[1],h=i[0]-n[0],u=l*i[0]+h*i[1],c=a*h-l*s;return T(c,0,r)?[0,0]:[(h*o-s*u)/c,(a*u-l*o)/c]}function _(t,e,i,n,r,h,f){h=h||100,f=f||0,r=r||25,e=void 0!==e?e:[],i=i||[],n=n||[];var p=[0,0],m=[0,0],g=[0,0],v=0,b=0,w=0,S=0,P=0,k=0,T=0,M=[],O=[],E=t,D=t;if(D.length<3)return e;if(++f>h)return console.warn("quickDecomp: max level ("+h+") reached."),e;for(var C=0;C<t.length;++C)if(y(E,C)){i.push(E[C]),v=b=Number.MAX_VALUE;for(var A=0;A<t.length;++A)a(c(E,C-1),c(E,C),c(E,A))&&l(c(E,C-1),c(E,C),c(E,A-1))&&(g=x(c(E,C-1),c(E,C),c(E,A),c(E,A-1)),o(c(E,C+1),c(E,C),g)&&(w=u(E[C],g))<b&&(b=w,m=g,k=A)),a(c(E,C+1),c(E,C),c(E,A+1))&&l(c(E,C+1),c(E,C),c(E,A))&&(g=x(c(E,C+1),c(E,C),c(E,A),c(E,A+1)),a(c(E,C-1),c(E,C),g)&&(w=u(E[C],g))<v&&(v=w,p=g,P=A));if(k===(P+1)%t.length)g[0]=(m[0]+p[0])/2,g[1]=(m[1]+p[1])/2,n.push(g),C<P?(d(M,E,C,P+1),M.push(g),O.push(g),0!==k&&d(O,E,k,E.length),d(O,E,0,C+1)):(0!==C&&d(M,E,C,E.length),d(M,E,0,P+1),M.push(g),O.push(g),d(O,E,k,C+1));else{if(k>P&&(P+=t.length),S=Number.MAX_VALUE,P<k)return e;for(var A=k;A<=P;++A)s(c(E,C-1),c(E,C),c(E,A))&&l(c(E,C+1),c(E,C),c(E,A))&&(w=u(c(E,C),c(E,A)))<S&&(S=w,T=A%t.length);C<T?(d(M,E,C,T+1),0!==T&&d(O,E,T,D.length),d(O,E,0,C+1)):(0!==C&&d(M,E,C,D.length),d(M,E,0,T+1),d(O,E,T,C+1))}return M.length<O.length?(_(M,e,i,n,r,h,f),_(O,e,i,n,r,h,f)):(_(O,e,i,n,r,h,f),_(M,e,i,n,r,h,f)),e}return e.push(t),e}function k(t,e){for(var i=0,n=t.length-1;t.length>3&&n>=0;--n)h(c(t,n-1),c(t,n),c(t,n+1),e)&&(t.splice(n%t.length,1),i++);return i}function T(t,e,i){return i=i||0,Math.abs(t-e)<i}t.exports={decomp:w,quickDecomp:_,isSimple:P,removeCollinearPoints:k,makeCCW:p};var M=[],O=[],E=[],D=[]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=(n(s),i(1)),l=n(o),h=function(){function t(e,i,n){if(r(this,t),this.maxLevel=i,this.maxShapes=n,e.length<n||i<=1)this.shapes=e;else{var a=l.default.fromAABBs(e.map(function(t){return t.polygon.aabb})),s=a.centre();this.pivot=s;var o=[],h=[],u=[],c=[],f=[],d=!0,p=!1,m=void 0;try{for(var y,g=e[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var v=y.value,b=v.polygon.aabb;b.right<s.x&&b.bottom<s.y?h.push(v):b.left>s.x&&b.bottom<s.y?u.push(v):b.right<s.x&&b.top>s.y?c.push(v):b.left>s.x&&b.top>s.y?f.push(v):o.push(v)}}catch(t){p=!0,m=t}finally{try{!d&&g.return&&g.return()}finally{if(p)throw m}}this.shapes=o,h.length>0&&(this.topLeftNode=new t(h,i-1,n)),u.length>0&&(this.topRightNode=new t(u,i-1,n)),c.length>0&&(this.bottomLeftNode=new t(c,i-1,n)),f.length>0&&(this.bottomRightNode=new t(f,i-1,n))}}return a(t,[{key:"candidateShapes",value:function(t){var e=this.shapes.filter(function(e){return e.polygon.aabb.intersects(t)}),i=this.pivot;if(!i)return e;var n=this.topLeftNode;n&&t.left<=i.x&&t.top<=i.y&&(e=e.concat(n.candidateShapes(t)));var r=this.topRightNode;r&&t.right>=i.x&&t.top<=i.y&&(e=e.concat(r.candidateShapes(t)));var a=this.bottomLeftNode;a&&t.left<=i.x&&t.bottom>=i.y&&(e=e.concat(a.candidateShapes(t)));var s=this.bottomRightNode;return s&&t.right>=i.x&&t.bottom>=i.y&&(e=e.concat(s.candidateShapes(t))),e}}]),t}();e.default=h},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=i(12),s=n(a),o=i(13),l=n(o),h=function t(e){r(this,t),this.collisions=new s.default,this.regions=new l.default(e)};e.default=h},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t),this.spriteListeners=new Map,this.spriteCollisions=new Map}return r(t,[{key:"add",value:function(t,e){return this.getSpriteListeners(t).push(e),e}},{key:"remove",value:function(t,e){var i=this.getSpriteListeners(t);this.spriteListeners.set(t,i.filter(function(t){return t!=e}))}},{key:"notify",value:function(t,e,i,n,r){var a=this.spriteCollisions.has(t)?this.spriteCollisions.get(t):[],s=e.filter(function(t){return!a.find(function(e){return e===t})});this.spriteCollisions.set(t,e);var o=!0,l=!1,h=void 0;try{for(var u,c=s[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var f=u.value,d=!0,p=!1,m=void 0;try{for(var y,g=this.getSpriteListeners(t)[Symbol.iterator]();!(d=(y=g.next()).done);d=!0)(0,y.value)(f,i,n,r)}catch(t){p=!0,m=t}finally{try{!d&&g.return&&g.return()}finally{if(p)throw m}}}}catch(t){l=!0,h=t}finally{try{!o&&c.return&&c.return()}finally{if(l)throw h}}}},{key:"getSpriteListeners",value:function(t){return this.spriteListeners.has(t)||this.spriteListeners.set(t,[]),this.spriteListeners.get(t)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=(n(s),i(2)),l=(n(o),i(3)),h=(n(l),i(1)),u=n(h),c=i(4),f=n(c),d=function(){function t(e){r(this,t),this.tilemapJson=e,this.spriteStates=new Map}return a(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new f.default(e)}},{key:"onEnterAdd",value:function(t,e){return this.getSpriteState(t).enterListeners.push(e),e}},{key:"onEnterRemove",value:function(t,e){var i=this.getSpriteState(t);i.enterListeners=i.enterListeners.filter(function(t){return t!=e})}},{key:"onLeaveAdd",value:function(t,e){return this.getSpriteState(t).leaveListeners.push(e),e}},{key:"onLeaveRemove",value:function(t,e){var i=this.getSpriteState(t);i.leaveListeners=i.leaveListeners.filter(function(t){return t!=e})}},{key:"triggerWith",value:function(t){if(this.shapeLayer){var e=t.body,i=new u.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),n=this.shapeLayer.quadTree.candidateShapes(i),r=[],a=!0,s=!1,o=void 0;try{for(var l,h=n[Symbol.iterator]();!(a=(l=h.next()).done);a=!0){var c=l.value;c.collideWidth(e)&&r.push(c)}}catch(t){s=!0,o=t}finally{try{!a&&h.return&&h.return()}finally{if(s)throw o}}this.notify(t,r)}}},{key:"notify",value:function(t,e){var i=this.getSpriteState(t),n=i.collisions,r=e.filter(function(t){return!n.find(function(e){return e===t})}),a=n.filter(function(t){return!e.find(function(e){return e===t})});i.collisions=e;var s=!0,o=!1,l=void 0;try{for(var h,u=r[Symbol.iterator]();!(s=(h=u.next()).done);s=!0){var c=h.value,f=!0,d=!1,p=void 0;try{for(var m,y=i.enterListeners[Symbol.iterator]();!(f=(m=y.next()).done);f=!0)(0,m.value)(c)}catch(t){d=!0,p=t}finally{try{!f&&y.return&&y.return()}finally{if(d)throw p}}}}catch(t){o=!0,l=t}finally{try{!s&&u.return&&u.return()}finally{if(o)throw l}}var g=!0,v=!1,b=void 0;try{for(var w,S=a[Symbol.iterator]();!(g=(w=S.next()).done);g=!0){var P=w.value,x=!0,_=!1,k=void 0;try{for(var T,M=i.leaveListeners[Symbol.iterator]();!(x=(T=M.next()).done);x=!0)(0,T.value)(P)}catch(t){_=!0,k=t}finally{try{!x&&M.return&&M.return()}finally{if(_)throw k}}}}catch(t){v=!0,b=t}finally{try{!g&&S.return&&S.return()}finally{if(v)throw b}}}},{key:"getSpriteState",value:function(t){return this.spriteStates.has(t)||this.spriteStates.set(t,{collisions:[],enterListeners:[],leaveListeners:[]}),this.spriteStates.get(t)}}]),t}();e.default=d},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e){n(this,t),this.properties=e.layer.properties||{}};e.default=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e){n(this,t),this.properties=e.properties||{}};e.default=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(2),s=function(t){return t&&t.__esModule?t:{default:t}}(a),o=function(){function t(e){n(this,t),this.sprite=e}return r(t,[{key:"setBodyCapsule",value:function(t,e,i){var n=this.sprite;if(!n.body)throw new Error("Enable arcade physics before assigning body shape");var r=n.body;r.plus=r.plus||{};var a=.5*t,o=.5*e;r.plus.shape=s.default.fromCapsule(-a,-o,+a,+o,i)}}]),t}();e.default=o}])},/* 94 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=(n(s),i(19)),l=n(o),h=i(356),u=n(h),c=function(){function t(e){r(this,t),this.game=e,this.secureLS=l.default.secureLS,console.log(this.secureLS),this.ls=new u.default({encodingType:"aes"})}return a(t,[{key:"setGameConfig",value:function(t){this.secureLS?this.ls.set("playerData",JSON.stringify(t)):localStorage.setItem("playerData",JSON.stringify(t))}},{key:"getGameConfig",value:function(){if(this.secureLS)var t=this.ls.get("playerData"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("playerData"));if(null==e){var e={playerHealth:100,currentMap:"map1"};return e}return e}},{key:"setItemIDs",value:function(t){this.secureLS?this.ls.set("itemIDs",JSON.stringify(t)):localStorage.setItem("itemIDs",JSON.stringify(t))}},{key:"getItemIDs",value:function(){if(this.secureLS)var t=this.ls.get("itemIDs"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("itemIDs"));if(null==e){var e=[];return e}return e}},{key:"setGamePreferences",value:function(t){this.secureLS?this.ls.set("gamePreferences",JSON.stringify(t)):localStorage.setItem("gamePreferences",JSON.stringify(t))}},{key:"getGamePreferences",value:function(){if(this.secureLS)var t=this.ls.get("gamePreferences"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("gamePreferences"));if(null==e){var e={muteMusic:!1,muteSound:!1};return e}return e}},{key:"setPlayedDialogues",value:function(t){this.secureLS?this.ls.set("playedDialogues",JSON.stringify(t)):localStorage.setItem("playedDialogues",JSON.stringify(t))}},{key:"getPlayedDialogues",value:function(){if(this.secureLS)var t=this.ls.get("playedDialogues"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("playedDialogues"));if(null==e){var e=[];return e}return e}},{key:"setQuests",value:function(t){this.secureLS?this.ls.set("quests",JSON.stringify(t)):localStorage.setItem("quests",JSON.stringify(t))}},{key:"getQuests",value:function(){if(this.secureLS)var t=this.ls.get("quests"),e=""!==t?JSON.parse(t):null;else var e=JSON.parse(localStorage.getItem("quests"));if(null==e){var e={masteredQuests:{}};return e}return e}},{key:"removeQuest",value:function(t){for(var e=this.getQuests(),i=0;i<e.length;i++)e[i][0]==t&&(e[i][1]="");this.setQuests(e)}},{key:"resetLocalStorage",value:function(){localStorage.clear()}}]),t}();e.default=c},/* 95 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s),l=i(138),h=n(l),u=function(){function t(e,i,n,a,s,l,u,c){var f=this;r(this,t),this.game=e,this.map=i,this.player=n,this.layer=s,this.cornerCutting=l,this.target=a,this.movingSpeed=u,this.finderCallObject=c,this.showPaths=!1,this.pathToFollow=[],this.walkables=[2,9,11,35],this.blocked=!1,this.followingPath=!1,this.trail=e.add.group(),this.path,this.marker,this.movingTween=this.game.add.tween(this.player),this.movingTween.onComplete.add(function(){f.followingPath=!1,f.player.movable=!0,f.game.time.events.add(o.default.Timer.SECOND*f.game.rnd.integerInRange(3,8),function(){this.followPath()},f)}),this.pathfinder=new h.default(this.game),this.cornerCutting&&(this.pathfinder.easystar.enableCornerCutting(),this.pathfinder.easystar.enableDiagonals()),this.pathfinder.easystar.setIterationsPerCalculation(1),this.pathfinder.setGrid(this.map.layers[0].data,this.walkables),console.log(this.map.layers[0].data),this.findPathTo(this.layer.getTileX(this.target.x),this.layer.getTileY(this.target.y))}return a(t,[{key:"findPathTo",value:function(t,e){var i=this;this.pathfinder.setCallbackFunction(function(t){if(console.log(t),i.trail.destroy(!0,!0),null!==t){if(i.showPaths)for(var e=t.length,n=0;n<e;n++)i.marker=i.game.add.graphics(36*t[n].x,36*t[n].y),i.marker.data.cellX=t[n].x,i.marker.data.cellY=t[n].y,i.trail.add(i.marker),i.marker.lineStyle(2,11224642,.5),i.marker.drawRect(8,8,16,16);i.pathToFollow=t}}),this.pathfinder.preparePathCalculation([this.layer.getTileX(this.player.x),this.layer.getTileY(this.player.y)],[t,e]),this.pathfinder.calculatePath()}},{key:"followPath",value:function(){if(this.pathToFollow.length&&!this.followingPath){1==this.pathToFollow.length&&void 0!==this.finderCallObject&&(this.finderCallObject.finderCall=!0),this.player.movable=!1;var t=this.pathToFollow.shift();if(t){this.showPaths&&this.trail.forEach(function(e){e.data.cellX===t.x&&e.data.cellY===t.y&&e.destroy()});var e=36*t.x+18,i=36*t.y+18;this.followingPath=!0,this.movingTween.target=this.player,this.movingTween.timeline=[],this.movingTween.to({x:e,y:i},this.movingSpeed),this.movingTween.start()}}}}]),t}();e.default=u},/* 96 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=(n(s),i(19)),l=(n(o),function(){function t(e,i){r(this,t),this.game=e,this.level=i,this.activeOpen=!0,this.activeClose=!0,this.show=!1,this.questmapBackground}return a(t,[{key:"toggleMap",value:function(){this.show?(this.closeMap(),this.show=!1):(this.showMap(),this.show=!0)}},{key:"showMap",value:function(){this.quests=this.level.safe.getQuests(),this.text=this.game.add.bitmapText(this.game.camera.width/2-180,this.game.camera.height/2-60,"pxlfont","",20),this.text.text="",this.text.fixedToCamera=!0;for(var t in this.quests)isNaN(t)||(void 0!==this.quests[t].questKillEnemyAmount?this.text.text+=this.quests[t].questMessage+": "+this.quests[t].questDeadEnemies+"/"+this.quests[t].questKillEnemyAmount+"\n":this.text.text+=this.quests[t].questMessage+"\n");var e=0;for(var i in this.quests.masteredQuests)!isNaN(i)&&e<3&&(console.log(this.quests.masteredQuests[i].questMessage),e++)}},{key:"closeMap",value:function(){console.log("Close Questmap")}}]),t}());e.default=l},/* 97 */
/***/
function(t,e,i){t.exports=!i(7)&&!i(4)(function(){return 7!=Object.defineProperty(i(66)("div"),"a",{get:function(){return 7}}).a})},/* 98 */
/***/
function(t,e,i){e.f=i(6)},/* 99 */
/***/
function(t,e,i){var n=i(12),r=i(16),a=i(53)(!1),s=i(68)("IE_PROTO");t.exports=function(t,e){var i,o=r(t),l=0,h=[];for(i in o)i!=s&&n(o,i)&&h.push(i);
// Don't enum bug & hidden keys
for(;e.length>l;)n(o,i=e[l++])&&(~a(h,i)||h.push(i));return h}},/* 100 */
/***/
function(t,e,i){var n=i(8),r=i(1),a=i(36);t.exports=i(7)?Object.defineProperties:function(t,e){r(t);for(var i,s=a(e),o=s.length,l=0;o>l;)n.f(t,i=s[l++],e[i]);return t}},/* 101 */
/***/
function(t,e,i){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var n=i(16),r=i(39).f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(t){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==a.call(t)?o(t):r(n(t))}},/* 102 */
/***/
function(t,e,i){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var n=i(36),r=i(54),a=i(50),s=i(10),o=i(49),l=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
t.exports=!l||i(4)(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=l({},t)[i]||Object.keys(l({},e)).join("")!=n})?function(t,e){for(
// eslint-disable-line no-unused-vars
var i=s(t),l=arguments.length,h=1,u=r.f,c=a.f;l>h;)for(var f,d=o(arguments[h++]),p=u?n(d).concat(u(d)):n(d),m=p.length,y=0;m>y;)c.call(d,f=p[y++])&&(i[f]=d[f]);return i}:l},/* 103 */
/***/
function(t,e,i){"use strict";var n=i(11),r=i(5),a=i(104),s=[].slice,o={},l=function(t,e,i){if(!(e in o)){for(var n=[],r=0;r<e;r++)n[r]="a["+r+"]";
// eslint-disable-next-line no-new-func
o[e]=Function("F,a","return new F("+n.join(",")+")")}return o[e](t,i)};t.exports=Function.bind||function(t){var e=n(this),i=s.call(arguments,1),o=function(){var n=i.concat(s.call(arguments));return this instanceof o?l(e,n.length,n):a(e,n,t)};return r(e.prototype)&&(o.prototype=e.prototype),o}},/* 104 */
/***/
function(t,e){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
t.exports=function(t,e,i){var n=void 0===i;switch(e.length){case 0:return n?t():t.call(i);case 1:return n?t(e[0]):t.call(i,e[0]);case 2:return n?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},/* 105 */
/***/
function(t,e,i){var n=i(2).parseInt,r=i(45).trim,a=i(72),s=/^[-+]?0[xX]/;t.exports=8!==n(a+"08")||22!==n(a+"0x16")?function(t,e){var i=r(String(t),3);return n(i,e>>>0||(s.test(i)?16:10))}:n},/* 106 */
/***/
function(t,e,i){var n=i(2).parseFloat,r=i(45).trim;t.exports=1/n(i(72)+"-0")!=-1/0?function(t){var e=r(String(t),3),i=n(e);return 0===i&&"-"==e.charAt(0)?-0:i}:n},/* 107 */
/***/
function(t,e,i){var n=i(21);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=n(t))throw TypeError(e);return+t}},/* 108 */
/***/
function(t,e,i){
// 20.1.2.3 Number.isInteger(number)
var n=i(5),r=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&r(t)===t}},/* 109 */
/***/
function(t,e){
// 20.2.2.20 Math.log1p(x)
t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},/* 110 */
/***/
function(t,e,i){
// 20.2.2.16 Math.fround(x)
var n=i(75),r=Math.pow,a=r(2,-52),s=r(2,-23),o=r(2,127)*(2-s),l=r(2,-126),h=function(t){return t+1/a-1/a};t.exports=Math.fround||function(t){var e,i,r=Math.abs(t),u=n(t);
// eslint-disable-next-line no-self-compare
return r<l?u*h(r/l/s)*l*s:(e=(1+s/a)*r,i=e-(e-r),i>o||i!=i?u*(1/0):u*i)}},/* 111 */
/***/
function(t,e,i){
// call something on iterator step with safe closing on error
var n=i(1);t.exports=function(t,e,i,r){try{return r?e(n(i)[0],i[1]):e(i)}catch(e){var a=t.return;throw void 0!==a&&n(a.call(t)),e}}},/* 112 */
/***/
function(t,e,i){var n=i(11),r=i(10),a=i(49),s=i(9);t.exports=function(t,e,i,o,l){n(e);var h=r(t),u=a(h),c=s(h.length),f=l?c-1:0,d=l?-1:1;if(i<2)for(;;){if(f in u){o=u[f],f+=d;break}if(f+=d,l?f<0:c<=f)throw TypeError("Reduce of empty array with no initial value")}for(;l?f>=0:c>f;f+=d)f in u&&(o=e(o,u[f],f,h));return o}},/* 113 */
/***/
function(t,e,i){"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=i(10),r=i(37),a=i(9);t.exports=[].copyWithin||function(t,e){var i=n(this),s=a(i.length),o=r(t,s),l=r(e,s),h=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===h?s:r(h,s))-l,s-o),c=1;for(l<o&&o<l+u&&(c=-1,l+=u-1,o+=u-1);u-- >0;)l in i?i[o]=i[l]:delete i[o],o+=c,l+=c;return i}},/* 114 */
/***/
function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},/* 115 */
/***/
function(t,e,i){
// 21.2.5.3 get RegExp.prototype.flags()
i(7)&&"g"!=/./g.flags&&i(8).f(RegExp.prototype,"flags",{configurable:!0,get:i(58)})},/* 116 */
/***/
function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},/* 117 */
/***/
function(t,e,i){var n=i(1),r=i(5),a=i(90);t.exports=function(t,e){if(n(t),r(e)&&e.constructor===t)return e;var i=a.f(t);return(0,i.resolve)(e),i.promise}},/* 118 */
/***/
function(t,e,i){"use strict";var n=i(119),r=i(47);
// 23.1 Map Objects
t.exports=i(61)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(t){var e=n.getEntry(r(this,"Map"),t);return e&&e.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(t,e){return n.def(r(this,"Map"),0===t?0:t,e)}},n,!0)},/* 119 */
/***/
function(t,e,i){"use strict";var n=i(8).f,r=i(38),a=i(43),s=i(20),o=i(41),l=i(42),h=i(78),u=i(114),c=i(40),f=i(7),d=i(31).fastKey,p=i(47),m=f?"_s":"size",y=function(t,e){
// fast case
var i,n=d(e);if("F"!==n)return t._i[n];
// frozen object case
for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,h){var u=t(function(t,n){o(t,u,e,"_i"),t._t=e,// collection type
t._i=r(null),// index
t._f=void 0,// first entry
t._l=void 0,// last entry
t[m]=0,// size
void 0!=n&&l(n,i,t[h],t)});return a(u.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var t=p(this,e),i=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete i[n.i];t._f=t._l=void 0,t[m]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(t){var i=p(this,e),n=y(i,t);if(n){var r=n.n,a=n.p;delete i._i[n.i],n.r=!0,a&&(a.n=r),r&&(r.p=a),i._f==n&&(i._f=r),i._l==n&&(i._l=a),i[m]--}return!!n},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(t){p(this,e);for(var i,n=s(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)
// revert to the last existing entry
for(n(i.v,i.k,this);i&&i.r;)i=i.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(t){return!!y(p(this,e),t)}}),f&&n(u.prototype,"size",{get:function(){return p(this,e)[m]}}),u},def:function(t,e,i){var n,r,a=y(t,e);
// change existing entry
// add to index
return a?a.v=i:(t._l=a={i:r=d(e,!0),// <- index
k:e,// <- key
v:i,// <- value
p:n=t._l,// <- previous entry
n:void 0,// <- next entry
r:!1},t._f||(t._f=a),n&&(n.n=a),t[m]++,"F"!==r&&(t._i[r]=a)),t},getEntry:y,setStrong:function(t,e,i){
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
h(t,e,function(t,i){this._t=p(t,e),// target
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
c(e)}}},/* 120 */
/***/
function(t,e,i){"use strict";var n=i(119),r=i(47);
// 23.2 Set Objects
t.exports=i(61)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(t){return n.def(r(this,"Set"),t=0===t?0:t,t)}},n)},/* 121 */
/***/
function(t,e,i){"use strict";var n,r=i(28)(0),a=i(14),s=i(31),o=i(102),l=i(122),h=i(5),u=i(4),c=i(47),f=s.getWeak,d=Object.isExtensible,p=l.ufstore,m={},y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(t){if(h(t)){var e=f(t);return!0===e?p(c(this,"WeakMap")).get(t):e?e[this._i]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(t,e){return l.def(c(this,"WeakMap"),t,e)}},v=t.exports=i(61)("WeakMap",y,g,l,!0,!0);
// IE11 WeakMap frozen keys fix
u(function(){return 7!=(new v).set((Object.freeze||Object)(m),7).get(m)})&&(n=l.getConstructor(y,"WeakMap"),o(n.prototype,g),s.NEED=!0,r(["delete","has","get","set"],function(t){var e=v.prototype,i=e[t];a(e,t,function(e,r){
// store frozen objects on internal weakmap shim
if(h(e)&&!d(e)){this._f||(this._f=new n);var a=this._f[t](e,r);return"set"==t?this:a}return i.call(this,e,r)})}))},/* 122 */
/***/
function(t,e,i){"use strict";var n=i(43),r=i(31).getWeak,a=i(1),s=i(5),o=i(41),l=i(42),h=i(28),u=i(12),c=i(47),f=h(5),d=h(6),p=0,m=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,e){return f(t.a,function(t){return t[0]===e})};y.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var i=g(this,t);i?i[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,i,a){var h=t(function(t,n){o(t,h,e,"_i"),t._t=e,// collection type
t._i=p++,// collection id
t._l=void 0,// leak store for uncaught frozen objects
void 0!=n&&l(n,i,t[a],t)});return n(h.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(t){if(!s(t))return!1;var i=r(t);return!0===i?m(c(this,e)).delete(t):i&&u(i,this._i)&&delete i[this._i]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(t){if(!s(t))return!1;var i=r(t);return!0===i?m(c(this,e)).has(t):i&&u(i,this._i)}}),h},def:function(t,e,i){var n=r(a(e),!0);return!0===n?m(t).set(e,i):n[t._i]=i,t},ufstore:m}},/* 123 */
/***/
function(t,e,i){
// https://tc39.github.io/ecma262/#sec-toindex
var n=i(26),r=i(9);t.exports=function(t){if(void 0===t)return 0;var e=n(t),i=r(e);if(e!==i)throw RangeError("Wrong length!");return i}},/* 124 */
/***/
function(t,e,i){
// all object keys, includes non-enumerable and symbols
var n=i(39),r=i(54),a=i(1),s=i(2).Reflect;t.exports=s&&s.ownKeys||function(t){var e=n.f(a(t)),i=r.f;return i?e.concat(i(t)):e}},/* 125 */
/***/
function(t,e,i){"use strict";function n(t,e,i,h,u,c,f,d){for(var p,m,y=u,g=0,v=!!f&&o(f,d,3);g<h;){if(g in i){if(p=v?v(i[g],g,e):i[g],m=!1,a(p)&&(m=p[l],m=void 0!==m?!!m:r(p)),m&&c>0)y=n(t,e,p,s(p.length),y,c-1)-1;else{if(y>=9007199254740991)throw TypeError();t[y]=p}y++}g++}return y}
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var r=i(55),a=i(5),s=i(9),o=i(20),l=i(6)("isConcatSpreadable");t.exports=n},/* 126 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-string-pad-start-end
var n=i(9),r=i(74),a=i(25);t.exports=function(t,e,i,s){var o=String(a(t)),l=o.length,h=void 0===i?" ":String(i),u=n(e);if(u<=l||""==h)return o;var c=u-l,f=r.call(h,Math.ceil(c/h.length));return f.length>c&&(f=f.slice(0,c)),s?f+o:o+f}},/* 127 */
/***/
function(t,e,i){var n=i(36),r=i(16),a=i(50).f;t.exports=function(t){return function(e){for(var i,s=r(e),o=n(s),l=o.length,h=0,u=[];l>h;)a.call(s,i=o[h++])&&u.push(t?[i,s[i]]:s[i]);return u}}},/* 128 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=i(51),r=i(129);t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return r(this)}}},/* 129 */
/***/
function(t,e,i){var n=i(42);t.exports=function(t,e){var i=[];return n(t,!1,i.push,i,e),i}},/* 130 */
/***/
function(t,e){
// https://rwaldron.github.io/proposal-math-extensions/
t.exports=Math.scale||function(t,e,i,n,r){
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
return 0===arguments.length||t!=t||e!=e||i!=i||n!=n||r!=r?NaN:t===1/0||t===-1/0?t:(t-e)*(r-n)/(i-e)+n}},/* 131 */
,/* 132 */
,/* 133 */
,/* 134 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s),l=i(135),h=(n(l),i(19)),u=n(h),c=function(){function t(e,i){r(this,t),this.game=e,void 0!==i&&(this.level=i,this.player=this.level.player),this.pad1,this.gamepadSupport=!1,this.useMobileControl=!1,this.dash=!1,this.playerSpeed=60,this.directon="down",this.currentUnderground="grass",this.pyfootsteps=this.game.add.audioSprite("PxFootsteps"),this.pyfootsteps.allowMultiple=!1,this.checkController()}return a(t,[{key:"showMessage",value:function(t,e){e?console.log("%c "+t+" ","background: #f00; color: #fff"):console.log("%c "+t+" ","background: #222; color: #bada55")}},{key:"checkController",value:function(){
// If gamepad.supported and gamepad.active
this.game.input.gamepad.supported&&this.game.input.gamepad.active?(this.gamepadSupport=!0,this.pad1=this.game.input.gamepad.pad1,
// If pad1 is connected
this.pad1.connected?(this.showMessage("Controller 1 connected 🎮"),this.noControllerConnected=!1,this.useController()):(this.showMessage("No Controller connected",!0),this.noControllerConnected=!0,this.isMobileDevice()||u.default.forceMobile?(console.log("Use Mobile"),this.useMobileControl=!0,this.useMobile()):this.useKeyboard())):this.isMobileDevice()||u.default.forceMobile?(console.log("Use Mobile"),this.useMobileControl=!0,this.useMobile()):this.useKeyboard()}},{key:"useMobile",value:function(){this.stick&&this.stick.destroy(),this.pad&&this.pad.destroy(),this.pad=this.game.plugins.add(o.default.VirtualJoystick),
// console.log(this.pad);
// this.stick = this.pad.addDPad(0, 0, 200, 'dpad');
// this.stick.scale = 0.5;
// this.stick.alignBottomLeft(0);
// this.stick.showOnTouch = true;
// console.log(this.stick);
this.stick=this.pad.addStick(0,0,200,"generic"),this.stick.scale=.5,this.stick.alignBottomLeft(0),this.stick.showOnTouch=!0,this.buttonA=this.pad.addButton(0,0,"generic","button1-up","button1-down"),this.buttonA.scale=.5,this.buttonA.alignBottomRight(50),this.buttonA.onDown.add(this.beginnDash,this)}},{key:"isMobileDevice",value:function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"useKeyboard",value:function(){console.log("%c Use Keyboard! ","background: #222; color: #bada55"),this.addKeyboardKeys()}},{key:"useController",value:function(){console.log("%c Use Controller! ","background: #222; color: #bada55"),this.pad1.addCallbacks(this,{onConnect:this.addGamepadButtons()})}},{key:"addGamepadButtons",value:function(){this.pad1._rawPad.id.indexOf("360")&&(
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
this.gamepad_buttonLeftTrigger=this.pad1.getButton(o.default.Gamepad.XBOX360_LEFT_TRIGGER),this.gamepad_buttonRightTrigger=this.pad1.getButton(o.default.Gamepad.XBOX360_RIGHT_TRIGGER),this.gamepad_buttonLeftTrigger.onDown.add(this.onGamepadDown,this),this.gamepad_buttonRightTrigger.onDown.add(this.onGamepadDown,this),
// Back and Start Buttons
this.gamepad_buttonBack=this.pad1.getButton(o.default.Gamepad.XBOX360_BACK),this.gamepad_buttonStart=this.pad1.getButton(o.default.Gamepad.XBOX360_START),this.gamepad_buttonBack.onDown.add(this.level.GUICLASS.ingameMenu.toggleMenu,this.level.GUICLASS.ingameMenu),this.gamepad_buttonStart.onDown.add(this.onGamepadDown,this))}},{key:"addKeyboardKeys",value:function(){this.cursors=this.game.input.keyboard.createCursorKeys(),this.button_W=this.game.input.keyboard.addKey(o.default.Keyboard.W),this.button_W.onDown.add(this.addMovementSound,this),this.button_W.onUp.add(this.removeMovementSound,this),this.button_S=this.game.input.keyboard.addKey(o.default.Keyboard.S),this.button_S.onDown.add(this.addMovementSound,this),this.button_S.onUp.add(this.removeMovementSound,this),this.button_A=this.game.input.keyboard.addKey(o.default.Keyboard.A),this.button_A.onDown.add(this.addMovementSound,this),this.button_A.onUp.add(this.removeMovementSound,this),this.button_D=this.game.input.keyboard.addKey(o.default.Keyboard.D),this.button_D.onDown.add(this.addMovementSound,this),this.button_D.onUp.add(this.removeMovementSound,this),this.button_SPACEBAR=this.game.input.keyboard.addKey(o.default.Keyboard.SPACEBAR),this.button_SPACEBAR.onDown.add(this.beginnDash,this),
// this.button_SPACEBAR.onUp.add(this.endDash, this);
this.button_0=this.game.input.keyboard.addKey(o.default.Keyboard.P),this.button_0.onDown.add(this.resetLocalStorage,this),"undefined"!=typeof ipc?(this.button_ESC=this.game.input.keyboard.addKey(o.default.Keyboard.ESC),this.button_ESC.onDown.add(this.level.GUICLASS.ingameMenu.toggleMenu,this.level.GUICLASS.ingameMenu)):(this.button_TAB=this.game.input.keyboard.addKey(o.default.Keyboard.TAB),this.button_TAB.onDown.add(this.level.GUICLASS.ingameMenu.toggleMenu,this.level.GUICLASS.ingameMenu))}},{key:"onGamepadDown",value:function(t){t.buttonCode===o.default.Gamepad.XBOX360_DPAD_LEFT?this.player.walk("left",200):t.buttonCode===o.default.Gamepad.XBOX360_DPAD_RIGHT?this.player.walk("right",200):t.buttonCode===o.default.Gamepad.XBOX360_DPAD_UP?this.player.walk("up",200):t.buttonCode===o.default.Gamepad.XBOX360_DPAD_DOWN?this.player.walk("down",200):t.buttonCode===o.default.Gamepad.XBOX360_A&&this.beginnDash()}},{key:"addMovementSound",value:function(){!this.level.muteSound&&this.player.movable&&(this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown)&&(this.pyfootsteps.isPlaying||("grass"==this.currentUnderground?this.pyfootsteps.play("gravel1",1):"stone"==this.currentUnderground&&this.pyfootsteps.play("grass1",1)))}},{key:"removeMovementSound",value:function(){this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown||("grass"==this.currentUnderground?this.pyfootsteps.stop("gravel1"):"stone"==this.currentUnderground&&this.pyfootsteps.stop("grass1"))}},{key:"resetLocalStorage",value:function(){var t=this;this.level.GUICLASS.createNotification("saving","Reset Account!"),localStorage.clear(),this.game.musicPlayer.fadeOut(),this.game.time.events.add(3*o.default.Timer.SECOND,function(){t.game.state.start("MainMenu",!0,!1)})}},{key:"beginnDash",value:function(){var t=this;this.dash=!0,this.player.addParticles(),this.playerSpeed=250,this.dashSound=this.game.add.audio("sfxfalldown",.25),this.dashSound.play(),this.game.time.events.add(400,function(){t.playerSpeed=60,t.dash=!1,t.player.removeParticles()})}},{key:"onGamepadUp",value:function(t){t.buttonCode===o.default.Gamepad.XBOX360_DPAD_LEFT?this.player.walk("idle"):t.buttonCode===o.default.Gamepad.XBOX360_DPAD_RIGHT?this.player.walk("idle"):t.buttonCode===o.default.Gamepad.XBOX360_DPAD_UP?this.player.walk("idle"):t.buttonCode===o.default.Gamepad.XBOX360_DPAD_DOWN&&this.player.walk("idle")}},{key:"update",value:function(){
// console.log("Y: " + this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y));
// console.log("X: " + this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X));
// Gamepad Controls
if(this.player){if(!this.player.movable)return this.player.animations.stop(),this.player.body.velocity.x=0,void(this.player.body.velocity.y=0);if(void 0!==this.pad1&&this.pad1.connected)
// console.log(this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X));
this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_Y)<-.1?("left"==this.direction||"right"==this.direction?this.player.body.velocity.y=-this.playerSpeed:(this.player.animations.play("run_up"),this.player.body.velocity.y=-this.playerSpeed),this.direction="up"):this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_Y)>.1?("left"==this.direction||"right"==this.direction?this.player.body.velocity.y=this.playerSpeed:(this.player.animations.play("run_down"),this.player.body.velocity.y=this.playerSpeed),this.direction="down"):(this.direction="",this.player.body.velocity.y=0),this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_X)<-.1?("up"==this.direction||"down"==this.direction?this.player.body.velocity.x=-this.playerSpeed:(this.player.animations.play("run_left"),this.player.body.velocity.x=-this.playerSpeed),this.direction="left"):this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_X)>.1?("up"==this.direction||"down"==this.direction?this.player.body.velocity.x=this.playerSpeed:(this.player.animations.play("run_right"),this.player.body.velocity.x=this.playerSpeed),this.direction="right"):(this.direction="",this.player.body.velocity.x=0),0==this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_Y)&&0==this.pad1.axis(o.default.Gamepad.XBOX360_STICK_LEFT_X)&&this.player.animations.stop();else if(this.useMobileControl)if(this.stick.isDown)console.log(this.stick.rotation),this.game.physics.arcade.velocityFromRotation(this.stick.rotation,this.stick.force*this.playerSpeed,this.player.body.velocity),
// this.player.rotation = this.stick.rotation;
this.player.animations._anims.run_right.speed=19,this.player.animations._anims.run_left.speed=19,this.player.animations._anims.run_down.speed=19,this.player.animations._anims.run_up.speed=19,
// console.log('HIER: ' + this.player.animations._anims.run_down.speed * this.stick.force);
this.player.animations._anims.run_down.speed=this.player.animations._anims.run_down.speed*this.stick.force+.1,this.player.animations._anims.run_up.speed=this.player.animations._anims.run_up.speed*this.stick.force+.1,this.player.animations._anims.run_right.speed=this.player.animations._anims.run_right.speed*this.stick.force+.1,this.player.animations._anims.run_left.speed=this.player.animations._anims.run_left.speed*this.stick.force+.1,
// console.log(this.player.animations._anims.run_down.speed)
// console.log(this.stick.force);
// if(this.game.input.pointer1.active && this.game.input.pointer2.active){
// 	console.log('2Finger');
// 	this.player.body.velocity.x = 200;
// }
"grass"==this.currentUnderground?this.pyfootsteps.play("gravel1",4):"stone"==this.currentUnderground&&this.pyfootsteps.play("grass1",4),this.stickRotation=this.stick.rotation.toFixed(1),this.stickRotation<=2&&this.stickRotation>=1?(
// console.log('Down');
this.player.animations.play("run_down"),this.direction="down"):this.stickRotation>=-1&&this.stickRotation<=1?(
// console.log('Right');
this.player.animations.play("run_right"),this.direction="right"):this.stickRotation<=-1&&this.stickRotation>=-2?(
// console.log('Up');
this.player.animations.play("run_up"),this.direction="up"):(
// console.log('Left');
this.player.animations.play("run_left"),this.direction="left");else{switch(this.direction){case"up":case"down":this.player.animations.play("idle");break;case"left":this.player.animations.play("idle_left");break;case"right":this.player.animations.play("idle_right")}
// this.player.animations._anims.run_down.speed = 19;
this.player.body.velocity.set(0),this.pyfootsteps.stop()}else
// Keyboard Movement
if(this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown)this.button_W.isDown?(this.direction="up",
// this.player.animations._anims.run_down.speed = 15;
this.player.body.velocity.y=-this.playerSpeed,this.button_A.isDown||this.button_D.isDown||this.player.animations.play("run_up")):this.button_S.isDown?(this.direction="down",
// this.player.animations._anims.run_down.speed = 15;
this.player.body.velocity.y=this.playerSpeed,this.button_A.isDown||this.button_D.isDown||this.player.animations.play("run_down")):
// this.player.animations.play('idle');
this.player.body.velocity.y=0,this.button_A.isDown?(
// this.player.animations._anims.run_left.speed = 15;
this.direction="left",this.button_W.isDown||this.button_S.isDown?this.player.body.velocity.x=-this.playerSpeed/2:(this.player.animations.play("run_left"),this.player.body.velocity.x=-this.playerSpeed)):this.button_D.isDown?(
// this.player.animations._anims.run_right.speed = 15;
this.direction="right",this.button_W.isDown||this.button_S.isDown?this.player.body.velocity.x=this.playerSpeed/2:(this.player.animations.play("run_right"),this.player.body.velocity.x=this.playerSpeed)):
// this.player.animations.play('idle');
this.player.body.velocity.x=0;else
// this.game.add
// 	.tween(this.player.body.velocity)
// 	.to({ x: 0 }, 100, Phaser.Easing.Circular.Out, true);
// this.game.add
// 	.tween(this.player.body.velocity)
// 	.to({ y: 0 }, 100, Phaser.Easing.Circular.Out, true);
// this.game.physics.arcade.computeVelocity(2, this.player.body, 20, 100, 20);
// console.log(this.direction);
switch(this.player.body.velocity.y=0,this.player.body.velocity.x=0,this.direction){case"up":case"down":case"left":this.player.animations.stop();
// this.player.animations.play('idle_left');
//   this.game.add
// .tween(this.player.animations._anims.run_left)
// .to({ speed: 0 }, 25, Phaser.Easing.Linear.None, true);
break;case"right":this.player.animations.stop()}}}}]),t}();e.default=c},/* 135 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(3),h=n(l),u=i(136),c=n(u),f=i(137),d=(n(f),i(19)),p=(n(d),function(t){function e(t,i,n,s){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n,"player_beta"));o.game=t,o.level=s,o.gameData=o.level.gameData,o.health=o.gameData.playerHealth,o.safe=o.level.safe,o.movable=!0,o.anchor.setTo(.5),o.playerSpeed=130,o.baseImages=[],o.zahl=200,
// this.movementBlocked = false;
o.animations.add("idle",[0,1,2,3],5,!0),o.animations.add("idle_right",[28],1,!0),o.animations.add("idle_left",[29],1,!0),o.animations.add("run_up",[30,31,32,33,34,35,36,37],19,!0),o.animations.add("run_down",[4,5,6,7,8,9,10,11],19,!0),o.animations.add("run_right",[12,13,14,15,16,17,18,19],19,!0),o.animations.add("run_left",[20,21,22,23,24,25,26,27],19,!0),o.animations.play("idle"),o.game.physics.enable(o),o.body.setSize(8,10,21,40),o.game.camera.roundPx=!1,o.game.renderer.renderSession.roundPixels=!0,o.game.camera.follow(o,h.default.Camera.FOLLOW_LOCKON,1,1),o.game.time.events.add(1*h.default.Timer.SECOND,function(){o.game.camera.follow(o,h.default.Camera.FOLLOW_LOCKON,.07,.07)});var l=o.body.velocity.x,u=o.body.velocity.y;
// this.multiplySprite.tint = 0x4fd4b0;
return l*=-1,u*=-1,o.customEmitter=o.game.add.emitter(o.x,o.y,50),o.customEmitter.width=10,o.customEmitter.height=30,o.customEmitter.minParticleScale=1,o.customEmitter.maxParticleScale=4,o.customEmitter.gravity=.5,o.customEmitter.setAlpha(.5,1,1e3,null,!0),o.customEmitter.gravity=.5,o.customEmitter.minParticleSpeed.set(l,u),o.customEmitter.maxParticleSpeed.set(l,u),o.customEmitter.makeParticles("cyanParticle"),o.multiplySprite=t.make.sprite(0,0,o.key),o.multiplySprite.anchor.set(.5),o.multiplySprite.alpha=.1,o.bmd=o.game.add.bitmapData(100,100),o.baseImages.push(o.bmd.addToWorld(i,n,.5,.5)),o.bmd.smoothed=!1,o.bmd.draw(o.multiplySprite,50,50),t.add.existing(o),o}return s(e,t),o(e,[{key:"addParticles",value:function(){
// console.log('start');
this.customEmitter.on=!0,this.customEmitter.x=this.x,this.customEmitter.y=this.y,this.customEmitter.start(!1,500,1,0)}},{key:"removeParticles",value:function(){
// console.log('end');
this.customEmitter.on=!1}},{key:"walk",value:function(t,e){if(this.movable){
//console.log("Direction: " + direction + ", Speed: " + speed);
switch(t){case"up":this.body.velocity.y=-this.playerSpeed;break;case"down":this.body.velocity.y=this.playerSpeed;break;case"idle":this.body.velocity.y=0;break;default:this.body.velocity.y=0}switch(t){case"left":this.body.velocity.x=-this.playerSpeed;break;case"right":this.body.velocity.x=this.playerSpeed;break;case"idle":this.body.velocity.x=0;break;default:this.body.velocity.x=0}}else this.body.velocity.set(0)}},{key:"idle",value:function(t){"x"==t?this.body.velocity.x=0:"y"==t?this.body.velocity.y=0:(this.body.velocity.x=0,this.body.velocity.y=0)}},{key:"fight",value:function(){}},{key:"getDamage",value:function(t,e){if(void 0!==t.itemType&&"key"==t.itemType){console.log(t.dropItemID);var i={};i.id=t.dropItemID,this.items.push(new c.default(this.game,t.x,t.y+40,"item",i))}void 0!==t.killQuestID&&this.questManager.checkKillCondition(t.killQuestID),this.player.health-=10,this.gameData.playerHealth=this.player.health,this.safe.setGameConfig(this.gameData),this.game.camera.flash(12648448,200),this.player.health<=0&&(this.gameData.playerHealth=100,this.safe.setGameConfig(this.gameData),this.inputClass.stick&&(this.inputClass.stick.alpha=0,this.inputClass.stick.enabled=!1),this.game.state.restart(!0,!1,{map:this.currentMap,targetID:this.lastTargetID,restartType:"revive"})),t.destroy()}},{key:"collideWithItem",value:function(t,e){if(
// this.lockGame = new LockGame(this.game, this.player.x, this.player.y, this.player);
console.log(e),this.itemIDs.includes(e.id)||(this.itemIDs.push(e.id),this.safe.setItemIDs(this.itemIDs)),void 0!==e.removeQuestID&&(console.log("Remove"),this.questManager.removeQuest(e.removeQuestID)),void 0!==e.questID){if(this.questManager.checkIfQuestExists(e.questID))return;var i={questID:e.questID,questMessage:e.questMessage,questKillEnemyType:void 0,questDeadEnemies:void 0,questKillEnemyAmount:void 0};this.questManager.addQuest(i),console.log("Questupdate"),this.GUICLASS.createNotification("success","Questupdate")}this.itemPickUpSound=this.game.add.audio("sfxPickUp",1),this.itemPickUpSound.play(),e.destroy(),this.items.splice(e,1)}},{key:"update",value:function(){var t=this;this.game.world.bringToTop(this.customEmitter),this.customEmitter.x=this.x,this.customEmitter.y=this.y,this.level.inputClass.dash?(this.multiplySprite.frame=this.frame,this.multiplySprite.alpha=.03,this.bmd.draw(this.multiplySprite,50,50),this.baseImages.push(this.bmd.addToWorld(this.x,this.y,.5,.5)),void 0!==this.baseImages[0]&&this.game.time.events.add(100,function(){t.baseImages[0].alpha=0,t.baseImages[0].destroy(!0,!1),t.baseImages.shift()})):this.game.time.events.add(100,function(){t.bmd.clear()})}}]),e}(h.default.Sprite));e.default=p},/* 136 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),o=function(t){return t&&t.__esModule?t:{default:t}}(s),l=function(t){function e(t,i,a,s,o){n(this,e);var l=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,a,s));return l.game=t,l.type=s,l.id=o.id,l.questID=o.questID,l.questMessage=o.questMessage,l.removeQuestID=o.removeQuestID,l.anchor.setTo(.5),l.animations.add("play",[0,1,2,3],5,!0),l.animations.play("play"),l.game.physics.enable(l),l.game.add.existing(l),l}return a(e,t),e}(o.default.Sprite);e.default=l},/* 137 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s),l=i(19),h=(n(l),function(){function t(e,i,n,a){r(this,t),this.game=e,this.x=i,this.y=n,this.player=a,
// this.bgColors = [0x62bd18, 0xff5300, 0xd21034, 0xff475c, 0x8f16b2, 0x588c7e, 0x8c4646];
// this.tintColor = game.rnd.pick(this.bgColors);
this.rotationSpeed=3,this.maxAngleDifference=10,this.scaleRate=.5,this.dead=!1,this.run=!0,this.firstSetup=!0,this.currentTry=1,this.setupGame()}return a(t,[{key:"setupGame",value:function(){this.player.movable=!1,this.ring=this.game.add.sprite(this.x,this.y,"LockGameRing"),this.ring.anchor.set(.5),this.ring.smoothed=!1,this.ring.alpha=.5,this.ring.scale.set(this.scaleRate),this.ball=this.game.add.sprite(this.x,this.y,"LockGameBall"),this.ball.anchor.set(.5),this.ball.ballAngle=-90,this.ball.smoothed=!1,this.ball.scale.set(this.scaleRate),this.placeBall(),this.bar=this.game.add.sprite(this.x,this.y,"LockGameBar"),this.bar.anchor.set(0,.5),this.bar.angle=-90,this.bar.crossingBall=!1,this.bar.smoothed=!1,this.bar.rotationDirection=0,this.bar.scale.set(this.scaleRate),this.firstTry=this.game.add.sprite(this.x-40,this.y,"LockGameBall"),this.firstTry.anchor.set(.5),this.firstTry.ballAngle=-90,this.firstTry.scale.set(this.scaleRate),this.secondTry=this.game.add.sprite(this.x,this.y,"LockGameBall"),this.secondTry.anchor.set(.5),this.secondTry.ballAngle=-90,this.secondTry.scale.set(this.scaleRate),this.thirdTry=this.game.add.sprite(this.x+40,this.y,"LockGameBall"),this.thirdTry.anchor.set(.5),this.thirdTry.ballAngle=-90,this.thirdTry.scale.set(this.scaleRate),this.firstSetup&&(this.ring.alpha=0,this.ball.alpha=0,this.bar.alpha=0,this.firstTry.alpha=0,this.secondTry.alpha=0,this.thirdTry.alpha=0,this.game.add.tween(this.ring).to({alpha:.5},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.bar).to({alpha:.5},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.ball).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.firstTry).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.secondTry).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.thirdTry).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.player).to({alpha:0},1e3,o.default.Easing.Linear.None,!0),this.player.body.immovable=!0,this.firstSetup=!1),this.game.input.onDown.add(this.startMoving,this)}},{key:"placeBall",value:function(){this.ball.x=200;do{this.newAngle=game.rnd.angle()}while(this.angleDifferenceFunc(this.newAngle,this.ball.ballAngle)<40);this.ball.ballAngle=this.newAngle,this.ball.x=this.ring.x+88*Math.cos(o.default.Math.degToRad(this.ball.ballAngle)),this.ball.y=this.ring.y+88*Math.sin(o.default.Math.degToRad(this.ball.ballAngle))}},{key:"startMoving",value:function(){this.dead=!1,this.game.input.onDown.remove(this.startMoving,this),this.game.input.onDown.add(this.changeDirection,this),this.bar.rotationDirection=1}},{key:"changeDirection",value:function(){if(this.angleDifference=Math.abs(this.ball.ballAngle-this.bar.angle),this.angleDifference>this.maxAngleDifference);else{switch(this.currentTry){case 1:this.firstTry.tint=65297,this.currentTry=2,this.rotationSpeed=4;break;case 2:this.secondTry.tint=65297,this.currentTry=3,this.rotationSpeed=5;break;case 3:this.thirdTry.tint=65297,this.run=!1,this.game.add.tween(this.ring).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.bar).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.ball).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.firstTry).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.secondTry).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.thirdTry).to({alpha:0},2e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.player).to({alpha:1},2e3,o.default.Easing.Linear.None,!0),this.player.body.immovable=!1,this.player.movable=!0}this.bar.crossingBall=!1,this.bar.rotationDirection*=-1,this.placeBall()}}},{key:"update",value:function(){this.run&&(this.bar.angle+=this.rotationSpeed*this.bar.rotationDirection,this.angleDifference=Math.abs(this.ball.ballAngle-this.bar.angle),this.angleDifference<this.maxAngleDifference&&!this.bar.crossingBall&&(this.bar.crossingBall=!0),this.angleDifference>this.maxAngleDifference&&this.bar.crossingBall&&this.fail())}},{key:"fail",value:function(){this.bar.rotationDirection=0,this.bar.tint=16711680,this.dead=!0,this.currentTry=1,this.rotationSpeed=3,this.game.camera.flash(16711680,200),void 0!==window.navigator.vibrate&&"vibrate"in window.navigator&&window.navigator.vibrate(500),this.bar.destroy(),this.ring.destroy(),this.ball.destroy(),this.firstTry.destroy(),this.secondTry.destroy(),this.thirdTry.destroy(),this.setupGame()}},{key:"angleDifferenceFunc",value:function(t,e){return Math.abs((t+180-e)%360-180)}}]),t}());e.default=h},/* 138 */
/***/
function(t,e,i){"use strict";/**
 * Represents a single instance of EasyStar.
 * A path that is in the queue to eventually be found.
 */
var n=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList},r=function(t,e,i,n,r){this.parent=t,this.x=e,this.y=i,this.costSoFar=n,this.simpleDistanceToTarget=r,/**
	 * @return {Number} Best guess distance of a cost using this node.
	 **/
this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}},a=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){
// Generated by CoffeeScript 1.8.0
(function(){var e,i,n,r,a,s,o,l,h,u,c,f,d,p,m;n=Math.floor,u=Math.min,/*
  Default comparison function to be used
   */
i=function(t,e){return t<e?-1:t>e?1:0},/*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */
h=function(t,e,r,a,s){var o;if(null==r&&(r=0),null==s&&(s=i),r<0)throw new Error("lo must be non-negative");for(null==a&&(a=t.length);r<a;)o=n((r+a)/2),s(e,t[o])<0?a=o:r=o+1;return[].splice.apply(t,[r,r-r].concat(e)),e},/*
  Push item onto heap, maintaining the heap invariant.
   */
s=function(t,e,n){return null==n&&(n=i),t.push(e),p(t,0,t.length-1,n)},/*
  Pop the smallest item off the heap, maintaining the heap invariant.
   */
a=function(t,e){var n,r;return null==e&&(e=i),n=t.pop(),t.length?(r=t[0],t[0]=n,m(t,0,e)):r=n,r},/*
  Pop and return the current smallest value, and add the new item.
  
  This is more efficient than heappop() followed by heappush(), and can be
  more appropriate when using a fixed size heap. Note that the value
  returned may be larger than item! That constrains reasonable use of
  this routine unless written as part of a conditional replacement:
      if item > array[0]
        item = heapreplace(array, item)
   */
l=function(t,e,n){var r;return null==n&&(n=i),r=t[0],t[0]=e,m(t,0,n),r},/*
  Fast version of a heappush followed by a heappop.
   */
o=function(t,e,n){var r;return null==n&&(n=i),t.length&&n(t[0],e)<0&&(r=[t[0],e],e=r[0],t[0]=r[1],m(t,0,n)),e},/*
  Transform list into a heap, in-place, in O(array.length) time.
   */
r=function(t,e){var r,a,s,o,l,h;for(null==e&&(e=i),o=function(){h=[];for(var e=0,i=n(t.length/2);0<=i?e<i:e>i;0<=i?e++:e--)h.push(e);return h}.apply(this).reverse(),l=[],a=0,s=o.length;a<s;a++)r=o[a],l.push(m(t,r,e));return l},/*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */
d=function(t,e,n){var r;if(null==n&&(n=i),-1!==(r=t.indexOf(e)))return p(t,0,r,n),m(t,r,n)},/*
  Find the n largest elements in a dataset.
   */
c=function(t,e,n){var a,s,l,h,u;if(null==n&&(n=i),s=t.slice(0,e),!s.length)return s;for(r(s,n),u=t.slice(e),l=0,h=u.length;l<h;l++)a=u[l],o(s,a,n);return s.sort(n).reverse()},/*
  Find the n smallest elements in a dataset.
   */
f=function(t,e,n){var s,o,l,c,f,d,p,m,y;if(null==n&&(n=i),10*e<=t.length){if(l=t.slice(0,e).sort(n),!l.length)return l;for(o=l[l.length-1],p=t.slice(e),c=0,d=p.length;c<d;c++)s=p[c],n(s,o)<0&&(h(l,s,0,null,n),l.pop(),o=l[l.length-1]);return l}for(r(t,n),y=[],f=0,m=u(e,t.length);0<=m?f<m:f>m;0<=m?++f:--f)y.push(a(t,n));return y},p=function(t,e,n,r){var a,s,o;for(null==r&&(r=i),a=t[n];n>e&&(o=n-1>>1,s=t[o],r(a,s)<0);)t[n]=s,n=o;return t[n]=a},m=function(t,e,n){var r,a,s,o,l;for(null==n&&(n=i),a=t.length,l=e,s=t[e],r=2*e+1;r<a;)o=r+1,o<a&&!(n(t[r],t[o])<0)&&(r=o),t[e]=t[r],e=r,r=2*e+1;return t[e]=s,p(t,l,e,n)},e=function(){function t(t){this.cmp=null!=t?t:i,this.nodes=[]}return t.push=s,t.pop=a,t.replace=l,t.pushpop=o,t.heapify=r,t.updateItem=d,t.nlargest=c,t.nsmallest=f,t.prototype.push=function(t){return s(this.nodes,t,this.cmp)},t.prototype.pop=function(){return a(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return l(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return o(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return r(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return d(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return e=new t,e.nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),function(e,i){t.exports=i()}(0,function(){return e})}).call(this)}),s=a,o={};var l=o,h=1;o.js=function(){var t,e,i,a=!1,l={},u={},c={},f={},d=!0,p={},m=[],y=Number.MAX_VALUE,g=!1;/**
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
this.enableSync=function(){a=!0},/**
	 * Disables sync mode for this EasyStar instance.
	 **/
this.disableSync=function(){a=!1},/**
	 * Enable diagonal pathfinding.
	 */
this.enableDiagonals=function(){g=!0},/**
	 * Disable diagonal pathfinding.
	 */
this.disableDiagonals=function(){g=!1},/**
	 * Sets the collision grid that EasyStar uses.
	 *
	 * @param {Array} grid The collision grid that this EasyStar instance will read from.
	 * This should be a 2D Array of Numbers.
	 **/
this.setGrid=function(e){t=e;
//Setup cost map
for(var i=0;i<t.length;i++)for(var n=0;n<t[0].length;n++)u[t[i][n]]||(u[t[i][n]]=1)},/**
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
this.setDirectionalCondition=function(t,e,i){void 0===f[e]&&(f[e]={}),f[e][t]=i},/**
	 * Remove all directional conditions
	 **/
this.removeAllDirectionalConditions=function(){f={}},/**
	 * Sets the number of search iterations per calculation.
	 * A lower number provides a slower result, but more practical if you
	 * have a large tile-map and don't want to block your thread while
	 * finding a path.
	 *
	 * @param {Number} iterations The number of searches to prefrom per calculate() call.
	 **/
this.setIterationsPerCalculation=function(t){y=t},/**
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
this.enableCornerCutting=function(){d=!0},/**
	 * Disables corner cutting in diagonal movement.
	 **/
this.disableCornerCutting=function(){d=!1},/**
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
this.findPath=function(e,r,o,l,u){
// Wraps the callback for sync vs async logic
var c=function(t){a?u(t):setTimeout(function(){u(t)})};
// No acceptable tiles were set
if(void 0===i)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");
// No grid was set
if(void 0===t)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");
// Start or endpoint outside of scope.
if(e<0||r<0||o<0||l<0||e>t[0].length-1||r>t.length-1||o>t[0].length-1||l>t.length-1)throw new Error("Your start or end point is outside the scope of your grid.");
// Start and end are the same tile.
if(e===o&&r===l)return void c([]);for(var f=t[l][o],d=!1,y=0;y<i.length;y++)if(f===i[y]){d=!0;break}if(!1===d)return void c(null);
// Create the instance
var g=new n;g.openList=new s(function(t,e){return t.bestGuessDistance()-e.bestGuessDistance()}),g.isDoneCalculating=!1,g.nodeHash={},g.startX=e,g.startY=r,g.endX=o,g.endY=l,g.callback=c,g.openList.push(P(g,g.startX,g.startY,null,1));var v=h++;return p[v]=g,m.push(v),v},/**
	 * Cancel a path calculation.
	 *
	 * @param {Number} instanceId The instance ID of the path being calculated
	 * @return {Boolean} True if an instance was found and cancelled.
	 *
	 **/
this.cancelPath=function(t){return t in p&&(delete p[t],!0)},/**
	 * This method steps through the A* Algorithm in an attempt to
	 * find your path(s). It will search 4-8 tiles (depending on diagonals) for every calculation.
	 * You can change the number of calculations done in a call by using
	 * easystar.setIteratonsPerCalculation().
	 **/
this.calculate=function(){if(0!==m.length&&void 0!==t&&void 0!==i)for(e=0;e<y;e++){if(0===m.length)return;a&&(
// If this is a sync instance, we want to make sure that it calculates synchronously.
e=0);var n=m[0],r=p[n];if(void 0!==r)
// Couldn't find a path.
if(0!==r.openList.size()){var s=r.openList.pop();
// Handles the case where we have found the destination
if(r.endX!==s.x||r.endY!==s.y)s.list=0,s.y>0&&v(r,s,0,-1,1*S(s.x,s.y-1)),s.x<t[0].length-1&&v(r,s,1,0,1*S(s.x+1,s.y)),s.y<t.length-1&&v(r,s,0,1,1*S(s.x,s.y+1)),s.x>0&&v(r,s,-1,0,1*S(s.x-1,s.y)),g&&(s.x>0&&s.y>0&&(d||b(t,i,s.x,s.y-1)&&b(t,i,s.x-1,s.y))&&v(r,s,-1,-1,1.4*S(s.x-1,s.y-1)),s.x<t[0].length-1&&s.y<t.length-1&&(d||b(t,i,s.x,s.y+1)&&b(t,i,s.x+1,s.y))&&v(r,s,1,1,1.4*S(s.x+1,s.y+1)),s.x<t[0].length-1&&s.y>0&&(d||b(t,i,s.x,s.y-1)&&b(t,i,s.x+1,s.y))&&v(r,s,1,-1,1.4*S(s.x+1,s.y-1)),s.x>0&&s.y<t.length-1&&(d||b(t,i,s.x,s.y+1)&&b(t,i,s.x-1,s.y))&&v(r,s,-1,1,1.4*S(s.x-1,s.y+1)));else{var o=[];o.push({x:s.x,y:s.y});for(var l=s.parent;null!=l;)o.push({x:l.x,y:l.y}),l=l.parent;o.reverse();var h=o;r.callback(h),delete p[n],m.shift()}}else r.callback(null),delete p[n],m.shift();else
// This instance was cancelled
m.shift()}};
// Private methods follow
var v=function(e,n,r,a,s){var o=n.x+r,h=n.y+a;if((void 0===l[h]||void 0===l[h][o])&&b(t,i,o,h,n)){var u=P(e,o,h,n,s);void 0===u.list?(u.list=1,e.openList.push(u)):n.costSoFar+s<u.costSoFar&&(u.costSoFar=n.costSoFar+s,u.parent=n,e.openList.updateItem(u))}},b=function(t,e,i,n,r){var a=f[n]&&f[n][i];if(a){var s=w(r.x-i,r.y-n);if(!function(){for(var t=0;t<a.length;t++)if(a[t]===s)return!0;return!1}())return!1}for(var o=0;o<e.length;o++)if(t[n][i]===e[o])return!0;return!1},w=function(t,e){if(0===t&&-1===e)return o.TOP;if(1===t&&-1===e)return o.TOP_RIGHT;if(1===t&&0===e)return o.RIGHT;if(1===t&&1===e)return o.BOTTOM_RIGHT;if(0===t&&1===e)return o.BOTTOM;if(-1===t&&1===e)return o.BOTTOM_LEFT;if(-1===t&&0===e)return o.LEFT;if(-1===t&&-1===e)return o.TOP_LEFT;throw new Error("These differences are not valid: "+t+", "+e)},S=function(e,i){return c[i]&&c[i][e]||u[t[i][e]]},P=function(t,e,i,n,a){if(void 0!==t.nodeHash[i]){if(void 0!==t.nodeHash[i][e])return t.nodeHash[i][e]}else t.nodeHash[i]={};var s=x(e,i,t.endX,t.endY);if(null!==n)var o=n.costSoFar+a;else o=0;var l=new r(n,e,i,o,s);return t.nodeHash[i][e]=l,l},x=function(t,e,i,n){if(g){
// Octile distance
var r=Math.abs(t-i),a=Math.abs(e-n);return r<a?1.4*r+a:1.4*a+r}
// Manhattan distance
var r=Math.abs(t-i),a=Math.abs(e-n);return r+a}},o.TOP="TOP",o.TOP_RIGHT="TOP_RIGHT",o.RIGHT="RIGHT",o.BOTTOM_RIGHT="BOTTOM_RIGHT",o.BOTTOM="BOTTOM",o.BOTTOM_LEFT="BOTTOM_LEFT",o.LEFT="LEFT",o.TOP_LEFT="TOP_LEFT";var u=l.js,c=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),f=/** @class */function(t){function e(e){var i=t.call(this,e,e.plugins)||this;return i.easystar=new u,i.callback=null,i.prepared=!1,i}/**
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
return c(e,t),e.prototype.setGrid=function(t,e,i){void 0===i&&(i=Number.MAX_VALUE),this.grid=[];for(var n=0;n<t.length;n++){this.grid[n]=[];for(var r=0;r<t[n].length;r++)this.grid[n][r]=t[n][r]?t[n][r].index:0}this.easystar.setGrid(this.grid),this.easystar.setAcceptableTiles(e);
// initiate all walkable tiles with cost 1 so they will be walkable even if they are not on the grid map, yet.
for(var a=0,s=e;a<s.length;a++){var o=s[a];this.easystar.setTileCost(o,1)}this.easystar.setIterationsPerCalculation(i)},e.prototype.setCallbackFunction=function(t){this.callback=t},e.prototype.preparePathCalculation=function(t,e){if(null===this.callback)throw new Error("no callback set");this.easystar.findPath(t[0],t[1],e[0],e[1],this.callback),this.prepared=!0},e.prototype.calculatePath=function(){if(!this.prepared)throw new Error("no calculation prepared!");this.easystar.calculate()},e}(Phaser.Plugin);t.exports=f},/* 139 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(3),h=n(l),u=i(19),c=(n(u),i(95)),f=n(c),d=function(t){function e(t,i,n,s,o,l,u){r(this,e);var c=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n,"enemy"));
// console.log(properties);
// this.body.enable = false;
// this.body.enable = true;
return c.game=t,c.player=s,c.map=o,c.layer=l,c.dropItemID=u.dropItemID,c.itemType=u.itemType,c.jumpDown=u.jumpDown,c.killQuestID=u.killQuestID,c.health=100,c.finderCall=!0,c.closeSpeed=c.game.rnd.integerInRange(10,70),c.farSpeed=c.game.rnd.integerInRange(400,600),c.startMoving=!1,c.anchor.setTo(.5),c.animations.add("walk",[0,1,2,3,4],15,!0),c.animations.add("idle",[0],1,!0),c.animations.play("walk"),c.game.physics.enable(c),c.body.setSize(13,10,5,7),c.body.bounce.set(1),c.body.drag.set(200),c.jumpDown?(c.startTween=c.game.add.tween(c).from({y:c.game.camera.height},1500,h.default.Easing.Bounce.Out,!0),c.startTween.onStart.add(function(){c.game.time.events.add(500,function(){})},c),c.startTween.onComplete.add(function(){
// this.body.enable = true;
c.startMoving=!0},c)):c.startMoving=!0,t.add.existing(c),c}return s(e,t),o(e,[{key:"update",value:function(){this.distanceBetweenEnemiePlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenEnemiePlayer<120&&(this.distanceBetweenEnemiePlayer<100?(this.game.physics.arcade.moveToObject(this,this.player,0),this.animations.play("idle"),
// Attack
this.distanceBetweenEnemiePlayer<50&&(this.animations.play("walk"),this.game.physics.arcade.moveToObject(this,this.player,150))):(this.animations.play("walk"),this.game.physics.arcade.moveToObject(this,this.player,this.closeSpeed)),this.finderCall=!0,this.pathfinder&&(this.pathfinder.pathToFollow.length=0)),this.distanceBetweenEnemiePlayer>120&&this.distanceBetweenEnemiePlayer<300&&this.finderCall&&(console.log("Calculate"),this.pathfinder=new f.default(this.game,this.map,this,{x:this.player.x,y:this.player.y},this.layer,!0,this.farSpeed,this),this.finderCall=!1),this.pathfinder&&this.startMoving&&this.pathfinder.followPath();
// console.log(Math.ceil(this.game.physics.arcade.angleToXY(this.player, this.x, this.y)));
var t=Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y));1==t||2==t||-0==t?this.scale.set(-1,1):this.scale.set(1,1)}}]),e}(h.default.Sprite);e.default=d},/* 140 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=(function(t){t&&t.__esModule}(a),function(){function t(e,i,r,a,s,o){n(this,t),this.game=e,this.player=r,this.map=a,this.groundLayer=s,this.collisionLayer=o,this.region=i,this.bridgeSound=this.game.add.audio("sfxBridge",1),this.bridgeSound.allowMultiple=!0}return r(t,[{key:"buildBridge",value:function(){var t=this,e=this.region.properties.direction,i=this.region.properties.length,n=this.region.properties.duration;n<100&&(this.bridgeSound.volume=0),this.bridgeX=this.groundLayer.getTileX(this.region.left)+1,this.bridgeY=this.groundLayer.getTileY(this.region.top),this.collX=this.collisionLayer.getTileX(this.region.left)+1,this.collY=this.collisionLayer.getTileY(this.region.top);var r=0,a=setInterval(function(){"up"==e?(t.bridgeY--,t.collY--,t.bridgeSound.play(),
// if("vibrate" in window.navigator) {
// 	window.navigator.vibrate(100);
// }
t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX-1,t.collY,t.collisionLayer),r+1==i?(t.map.putTile(37,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(38,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(37,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(38,t.bridgeX-1,t.bridgeY+1,t.groundLayer)):(t.map.putTile(59,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(58,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(37,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(38,t.bridgeX-1,t.bridgeY+1,t.groundLayer))):"down"==e?(t.bridgeY++,t.collY++,t.bridgeSound.play(),
// this.map.putTile(48, this.bridgeX, this.bridgeY, this.groundLayer);
// this.map.putTile(47, this.bridgeX - 1, this.bridgeY, this.groundLayer);
// this.map.putTile(37, this.bridgeX, this.bridgeY-1, this.groundLayer);
// this.map.putTile(38, this.bridgeX - 1, this.bridgeY-1, this.groundLayer);
t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX-1,t.collY,t.collisionLayer),r+1==i?(t.map.putTile(37,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(38,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(37,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(38,t.bridgeX-1,t.bridgeY+1,t.groundLayer)):(t.map.putTile(37,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(38,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(48,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(47,t.bridgeX-1,t.bridgeY+1,t.groundLayer))):"left"==e?(console.log("HEY"),t.bridgeX--,t.collX--,t.bridgeSound.play(),t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX,t.collY-1,t.collisionLayer),t.map.putTile(22,t.bridgeX,t.bridgeY+1,t.groundLayer)):"right"==e&&(t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX,t.collY-1,t.collisionLayer),t.map.putTile(22,t.bridgeX,t.bridgeY+1,t.groundLayer),t.bridgeX++,t.collX++,t.bridgeSound.play()),t.game.camera.shake(.0015,n),++r===i&&clearInterval(a)},n)}},{key:"removeBridge",value:function(){var t=this;console.log("remove bridge");var e=this.region.properties.direction,i=this.region.properties.length,n=this.region.properties.duration,r=this.region.properties.putBackgroundTile;this.bridgeX=this.groundLayer.getTileX(this.region.left)+1,this.bridgeY=this.groundLayer.getTileY(this.region.top),this.collX=this.collisionLayer.getTileX(this.region.left)+1,this.collY=this.collisionLayer.getTileY(this.region.top);var a=0,s=setInterval(function(){"up"==e?(t.bridgeY--,t.collY--,t.bridgeSound.play(),t.map.putTile(3,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(3,t.bridgeX-1,t.bridgeY,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX-1,t.collY,t.groundLayer),void 0!==r&&(t.map.putTile(r,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(r,t.bridgeX-1,t.bridgeY,t.groundLayer))):"down"==e?(console.log(a,i),t.bridgeY++,t.collY++,t.bridgeSound.play(),t.map.putTile(3,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(3,t.bridgeX-1,t.bridgeY,t.collisionLayer),0==a?(t.map.putTile(36,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(36,t.bridgeX-1,t.bridgeY,t.groundLayer)):(t.map.putTile(3,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(3,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.putTile(49,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(49,t.bridgeX-1,t.bridgeY+1,t.groundLayer))):"left"==e?(t.bridgeX--,t.collX--,t.bridgeSound.play(),t.map.putTile(2,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX,t.collY-1,t.groundLayer)):"right"==e&&(t.bridgeX++,t.collX++,t.bridgeSound.play(),t.map.putTile(2,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX,t.collY-1,t.groundLayer)),t.game.camera.shake(.0015,n),++a===i&&clearInterval(s)},n)}}]),t}());e.default=s},/* 141 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=(function(t){t&&t.__esModule}(a),function(){function t(e,i,r){n(this,t),this.game=e,this.level=i,this.ingameMenu=r,this.show=!1,this.mapValues={map1:{x:112,y:128,width:64,height:64},map2:{x:92,y:66,width:64,height:64},map3:{x:91,y:2,width:64,height:64},map4:{x:27,y:85,width:64,height:64},map6:{x:27,y:21,width:64,height:64}}}return r(t,[{key:"toggleMap",value:function(){this.show?(this.removeMap(),this.show=!1):(this.show=!0,this.createMap())}},{key:"createMap",value:function(){this.calculateValues(),this.map=this.game.add.sprite(this.game.camera.width/2-100,this.game.camera.height/2-90,"newGameMap"),this.map.fixedToCamera=!0,this.map.inputEnabled=!0,this.map.input.enableDrag(!1),this.mask=this.game.add.graphics(300,180),this.mask.beginFill(16777215),this.mask.drawRect(this.game.camera.width/2-500,this.game.camera.height/2-259,400,180),this.mask.fixedToCamera=!0,this.map.mask=this.mask,this.bmdPlayer=game.add.bitmapData(6,6),this.bmdPlayer.ctx.beginPath(),this.bmdPlayer.ctx.rect(0,0,6,6),this.bmdPlayer.ctx.fillStyle="#FF00FF",this.bmdPlayer.ctx.fill(),this.playerDot&&this.playerDot.destroy();
// [this.level.currentMap]
for(var t in this.mapValues)t==this.level.currentMap&&(this.piece=this.mapValues[t]);this.playerPX=this.piece.x+this.valueX*this.piece.width,this.playerPY=this.piece.y+this.valueY*this.piece.height,this.playerDot=game.add.sprite(this.map.x+this.playerPX,this.map.y+this.playerPY,this.bmdPlayer),this.playerDot.anchor.set(.5),this.playerDot.mask=this.mask}},{key:"calculateValues",value:function(){
//Player Values from 0 to 1
this.valueX=Math.round(this.level.player.x/this.game.world.width/100*100*10)/10,this.valueY=Math.round(this.level.player.y/this.game.world.height/100*100*10)/10,console.log("ValuePlayerX: "+this.valueX),console.log("ValuePlayerY: "+this.valueY)}},{key:"update",value:function(){this.playerDot.x=this.map.x+this.playerPX,this.playerDot.y=this.map.y+this.playerPY}},{key:"removeMap",value:function(){this.map&&(this.gameMapbackground.destroy(),this.gameMapbackground=!1,this.map.destroy(),this.mask.destroy(),this.playerDot.destroy())}}]),t}());e.default=s},/* 142 */
/***/
function(t,e){/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
t.exports=function(t){function e(t){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",t)}try{"undefined"!=typeof execScript&&
// Check for IE =< 8
function(){return"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener}()?execScript(t):"undefined"!=typeof eval?eval.call(null,t):e("EvalError: No eval function available")}catch(t){e(t)}}},/* 143 */
/***/
function(t,e,i){i(144),t.exports=i(346)},/* 144 */
/***/
function(t,e,i){"use strict";/* WEBPACK VAR INJECTION */
(function(t){function e(t,e,i){t[e]||Object[n](t,e,{writable:!0,configurable:!0,value:i})}if(i(145),i(342),i(343),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var n="defineProperty";e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(e,i(48))},/* 145 */
/***/
function(t,e,i){i(146),i(148),i(149),i(150),i(151),i(152),i(153),i(154),i(155),i(156),i(157),i(158),i(159),i(160),i(161),i(162),i(164),i(165),i(166),i(167),i(168),i(169),i(170),i(171),i(172),i(173),i(174),i(175),i(176),i(177),i(178),i(179),i(180),i(181),i(182),i(183),i(184),i(185),i(186),i(187),i(188),i(189),i(190),i(191),i(192),i(193),i(194),i(195),i(196),i(197),i(198),i(199),i(200),i(201),i(202),i(203),i(204),i(205),i(206),i(207),i(208),i(209),i(210),i(211),i(212),i(213),i(214),i(215),i(216),i(217),i(218),i(219),i(220),i(221),i(222),i(223),i(224),i(226),i(227),i(229),i(230),i(231),i(232),i(233),i(234),i(235),i(237),i(238),i(239),i(240),i(241),i(242),i(243),i(244),i(245),i(246),i(247),i(248),i(249),i(87),i(250),i(251),i(115),i(252),i(253),i(254),i(255),i(256),i(118),i(120),i(121),i(257),i(258),i(259),i(260),i(261),i(262),i(263),i(264),i(265),i(266),i(267),i(268),i(269),i(270),i(271),i(272),i(273),i(274),i(275),i(276),i(277),i(278),i(279),i(280),i(281),i(282),i(283),i(284),i(285),i(286),i(287),i(288),i(289),i(290),i(291),i(292),i(293),i(294),i(295),i(296),i(297),i(298),i(299),i(300),i(301),i(302),i(303),i(304),i(305),i(306),i(307),i(308),i(309),i(310),i(311),i(312),i(313),i(314),i(315),i(316),i(317),i(318),i(319),i(320),i(321),i(322),i(323),i(324),i(325),i(326),i(327),i(328),i(329),i(330),i(331),i(332),i(333),i(334),i(335),i(336),i(337),i(338),i(339),i(340),i(341),t.exports=i(23)},/* 146 */
/***/
function(t,e,i){"use strict";
// ECMAScript 6 symbols shim
var n=i(2),r=i(12),a=i(7),s=i(0),o=i(14),l=i(31).KEY,h=i(4),u=i(52),c=i(44),f=i(34),d=i(6),p=i(98),m=i(67),y=i(147),g=i(55),v=i(1),b=i(5),w=i(16),S=i(24),P=i(33),x=i(38),_=i(101),k=i(17),T=i(8),M=i(36),O=k.f,E=T.f,D=_.f,C=n.Symbol,A=n.JSON,B=A&&A.stringify,L=d("_hidden"),I=d("toPrimitive"),N={}.propertyIsEnumerable,F=u("symbol-registry"),R=u("symbols"),j=u("op-symbols"),G=Object.prototype,U="function"==typeof C,V=n.QObject,X=!V||!V.prototype||!V.prototype.findChild,q=a&&h(function(){return 7!=x(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,i){var n=O(G,e);n&&delete G[e],E(t,e,i),n&&t!==G&&E(G,e,n)}:E,Y=function(t){var e=R[t]=x(C.prototype);return e._k=t,e},W=U&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},H=function(t,e,i){return t===G&&H(j,e,i),v(t),e=S(e,!0),v(i),r(R,e)?(i.enumerable?(r(t,L)&&t[L][e]&&(t[L][e]=!1),i=x(i,{enumerable:P(0,!1)})):(r(t,L)||E(t,L,P(1,{})),t[L][e]=!0),q(t,e,i)):E(t,e,i)},K=function(t,e){v(t);for(var i,n=y(e=w(e)),r=0,a=n.length;a>r;)H(t,i=n[r++],e[i]);return t},J=function(t,e){return void 0===e?x(t):K(x(t),e)},z=function(t){var e=N.call(this,t=S(t,!0));return!(this===G&&r(R,t)&&!r(j,t))&&(!(e||!r(this,t)||!r(R,t)||r(this,L)&&this[L][t])||e)},Z=function(t,e){if(t=w(t),e=S(e,!0),t!==G||!r(R,e)||r(j,e)){var i=O(t,e);return!i||!r(R,e)||r(t,L)&&t[L][e]||(i.enumerable=!0),i}},Q=function(t){for(var e,i=D(w(t)),n=[],a=0;i.length>a;)r(R,e=i[a++])||e==L||e==l||n.push(e);return n},$=function(t){for(var e,i=t===G,n=D(i?j:w(t)),a=[],s=0;n.length>s;)!r(R,e=n[s++])||i&&!r(G,e)||a.push(R[e]);return a};
// 19.4.1.1 Symbol([description])
U||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(i){this===G&&e.call(j,i),r(this,L)&&r(this[L],t)&&(this[L][t]=!1),q(this,t,P(1,i))};return a&&X&&q(G,t,{configurable:!0,set:e}),Y(t)},o(C.prototype,"toString",function(){return this._k}),k.f=Z,T.f=H,i(39).f=_.f=Q,i(50).f=z,i(54).f=$,a&&!i(35)&&o(G,"propertyIsEnumerable",z,!0),p.f=function(t){return Y(d(t))}),s(s.G+s.W+s.F*!U,{Symbol:C});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
","),et=0;tt.length>et;)d(tt[et++]);for(var it=M(d.store),nt=0;it.length>nt;)m(it[nt++]);s(s.S+s.F*!U,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(t){return r(F,t+="")?F[t]:F[t]=C(t)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){X=!0},useSimple:function(){X=!1}}),s(s.S+s.F*!U,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:J,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:H,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:K,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:Z,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:Q,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
A&&s(s.S+s.F*(!U||h(function(){var t=C();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))})),"JSON",{stringify:function(t){for(var e,i,n=[t],r=1;arguments.length>r;)n.push(arguments[r++]);if(i=e=n[1],(b(e)||void 0!==t)&&!W(t))// IE8 returns string on undefined
return g(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!W(e))return e}),n[1]=e,B.apply(A,n)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
C.prototype[I]||i(13)(C.prototype,I,C.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
c(C,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
c(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
c(n.JSON,"JSON",!0)},/* 147 */
/***/
function(t,e,i){
// all enumerable object keys, includes symbols
var n=i(36),r=i(54),a=i(50);t.exports=function(t){var e=n(t),i=r.f;if(i)for(var s,o=i(t),l=a.f,h=0;o.length>h;)l.call(t,s=o[h++])&&e.push(s);return e}},/* 148 */
/***/
function(t,e,i){var n=i(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
n(n.S,"Object",{create:i(38)})},/* 149 */
/***/
function(t,e,i){var n=i(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
n(n.S+n.F*!i(7),"Object",{defineProperty:i(8).f})},/* 150 */
/***/
function(t,e,i){var n=i(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
n(n.S+n.F*!i(7),"Object",{defineProperties:i(100)})},/* 151 */
/***/
function(t,e,i){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var n=i(16),r=i(17).f;i(27)("getOwnPropertyDescriptor",function(){return function(t,e){return r(n(t),e)}})},/* 152 */
/***/
function(t,e,i){
// 19.1.2.9 Object.getPrototypeOf(O)
var n=i(10),r=i(18);i(27)("getPrototypeOf",function(){return function(t){return r(n(t))}})},/* 153 */
/***/
function(t,e,i){
// 19.1.2.14 Object.keys(O)
var n=i(10),r=i(36);i(27)("keys",function(){return function(t){return r(n(t))}})},/* 154 */
/***/
function(t,e,i){
// 19.1.2.7 Object.getOwnPropertyNames(O)
i(27)("getOwnPropertyNames",function(){return i(101).f})},/* 155 */
/***/
function(t,e,i){
// 19.1.2.5 Object.freeze(O)
var n=i(5),r=i(31).onFreeze;i(27)("freeze",function(t){return function(e){return t&&n(e)?t(r(e)):e}})},/* 156 */
/***/
function(t,e,i){
// 19.1.2.17 Object.seal(O)
var n=i(5),r=i(31).onFreeze;i(27)("seal",function(t){return function(e){return t&&n(e)?t(r(e)):e}})},/* 157 */
/***/
function(t,e,i){
// 19.1.2.15 Object.preventExtensions(O)
var n=i(5),r=i(31).onFreeze;i(27)("preventExtensions",function(t){return function(e){return t&&n(e)?t(r(e)):e}})},/* 158 */
/***/
function(t,e,i){
// 19.1.2.12 Object.isFrozen(O)
var n=i(5);i(27)("isFrozen",function(t){return function(e){return!n(e)||!!t&&t(e)}})},/* 159 */
/***/
function(t,e,i){
// 19.1.2.13 Object.isSealed(O)
var n=i(5);i(27)("isSealed",function(t){return function(e){return!n(e)||!!t&&t(e)}})},/* 160 */
/***/
function(t,e,i){
// 19.1.2.11 Object.isExtensible(O)
var n=i(5);i(27)("isExtensible",function(t){return function(e){return!!n(e)&&(!t||t(e))}})},/* 161 */
/***/
function(t,e,i){
// 19.1.3.1 Object.assign(target, source)
var n=i(0);n(n.S+n.F,"Object",{assign:i(102)})},/* 162 */
/***/
function(t,e,i){
// 19.1.3.10 Object.is(value1, value2)
var n=i(0);n(n.S,"Object",{is:i(163)})},/* 163 */
/***/
function(t,e){
// 7.2.9 SameValue(x, y)
t.exports=Object.is||function(t,e){
// eslint-disable-next-line no-self-compare
return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},/* 164 */
/***/
function(t,e,i){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var n=i(0);n(n.S,"Object",{setPrototypeOf:i(71).set})},/* 165 */
/***/
function(t,e,i){"use strict";
// 19.1.3.6 Object.prototype.toString()
var n=i(51),r={};r[i(6)("toStringTag")]="z",r+""!="[object z]"&&i(14)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},/* 166 */
/***/
function(t,e,i){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var n=i(0);n(n.P,"Function",{bind:i(103)})},/* 167 */
/***/
function(t,e,i){var n=i(8).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;
// 19.2.4.2 name
"name"in r||i(7)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},/* 168 */
/***/
function(t,e,i){"use strict";var n=i(5),r=i(18),a=i(6)("hasInstance"),s=Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
a in s||i(8).f(s,a,{value:function(t){if("function"!=typeof this||!n(t))return!1;if(!n(this.prototype))return t instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=r(t);)if(this.prototype===t)return!0;return!1}})},/* 169 */
/***/
function(t,e,i){var n=i(0),r=i(105);
// 18.2.5 parseInt(string, radix)
n(n.G+n.F*(parseInt!=r),{parseInt:r})},/* 170 */
/***/
function(t,e,i){var n=i(0),r=i(106);
// 18.2.4 parseFloat(string)
n(n.G+n.F*(parseFloat!=r),{parseFloat:r})},/* 171 */
/***/
function(t,e,i){"use strict";var n=i(2),r=i(12),a=i(21),s=i(73),o=i(24),l=i(4),h=i(39).f,u=i(17).f,c=i(8).f,f=i(45).trim,d=n.Number,p=d,m=d.prototype,y="Number"==a(i(38)(m)),g="trim"in String.prototype,v=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var i,n,r,a=e.charCodeAt(0);if(43===a||45===a){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:n=8,r=55;break;// fast equal /^0o[0-7]+$/i
default:return+e}for(var s,l=e.slice(2),h=0,u=l.length;h<u;h++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((s=l.charCodeAt(h))<48||s>r)return NaN;return parseInt(l,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;
// check on 1..constructor(foo) case
return i instanceof d&&(y?l(function(){m.valueOf.call(i)}):"Number"!=a(i))?s(new p(v(e)),i,d):v(e)};for(var b,w=i(7)?h(p):// ES3:
"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)r(p,b=w[S])&&!r(d,b)&&c(d,b,u(p,b));d.prototype=m,m.constructor=d,i(14)(n,"Number",d)}},/* 172 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(26),a=i(107),s=i(74),o=1..toFixed,l=Math.floor,h=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",c=function(t,e){for(var i=-1,n=e;++i<6;)n+=t*h[i],h[i]=n%1e7,n=l(n/1e7)},f=function(t){for(var e=6,i=0;--e>=0;)i+=h[e],h[e]=l(i/t),i=i%t*1e7},d=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==h[t]){var i=String(h[t]);e=""===e?i:e+s.call("0",7-i.length)+i}return e},p=function(t,e,i){return 0===e?i:e%2==1?p(t,e-1,i*t):p(t*t,e/2,i)},m=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e};n(n.P+n.F*(!!o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i(4)(function(){
// V8 ~ Android 4.3-
o.call({})})),"Number",{toFixed:function(t){var e,i,n,o,l=a(this,u),h=r(t),y="",g="0";if(h<0||h>20)throw RangeError(u);
// eslint-disable-next-line no-self-compare
if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(y="-",l=-l),l>1e-21)if(e=m(l*p(2,69,1))-69,i=e<0?l*p(2,-e,1):l/p(2,e,1),i*=4503599627370496,(e=52-e)>0){for(c(0,i),n=h;n>=7;)c(1e7,0),n-=7;for(c(p(10,n,1),0),n=e-1;n>=23;)f(1<<23),n-=23;f(1<<n),c(1,1),f(2),g=d()}else c(0,i),c(1<<-e,0),g=d()+s.call("0",h);return h>0?(o=g.length,g=y+(o<=h?"0."+s.call("0",h-o)+g:g.slice(0,o-h)+"."+g.slice(o-h))):g=y+g,g}})},/* 173 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(4),a=i(107),s=1..toPrecision;n(n.P+n.F*(r(function(){
// IE7-
return"1"!==s.call(1,void 0)})||!r(function(){
// V8 ~ Android 4.3-
s.call({})})),"Number",{toPrecision:function(t){var e=a(this,"Number#toPrecision: incorrect invocation!");return void 0===t?s.call(e):s.call(e,t)}})},/* 174 */
/***/
function(t,e,i){
// 20.1.2.1 Number.EPSILON
var n=i(0);n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},/* 175 */
/***/
function(t,e,i){
// 20.1.2.2 Number.isFinite(number)
var n=i(0),r=i(2).isFinite;n(n.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},/* 176 */
/***/
function(t,e,i){
// 20.1.2.3 Number.isInteger(number)
var n=i(0);n(n.S,"Number",{isInteger:i(108)})},/* 177 */
/***/
function(t,e,i){
// 20.1.2.4 Number.isNaN(number)
var n=i(0);n(n.S,"Number",{isNaN:function(t){
// eslint-disable-next-line no-self-compare
return t!=t}})},/* 178 */
/***/
function(t,e,i){
// 20.1.2.5 Number.isSafeInteger(number)
var n=i(0),r=i(108),a=Math.abs;n(n.S,"Number",{isSafeInteger:function(t){return r(t)&&a(t)<=9007199254740991}})},/* 179 */
/***/
function(t,e,i){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var n=i(0);n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},/* 180 */
/***/
function(t,e,i){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var n=i(0);n(n.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},/* 181 */
/***/
function(t,e,i){var n=i(0),r=i(106);
// 20.1.2.12 Number.parseFloat(string)
n(n.S+n.F*(Number.parseFloat!=r),"Number",{parseFloat:r})},/* 182 */
/***/
function(t,e,i){var n=i(0),r=i(105);
// 20.1.2.13 Number.parseInt(string, radix)
n(n.S+n.F*(Number.parseInt!=r),"Number",{parseInt:r})},/* 183 */
/***/
function(t,e,i){
// 20.2.2.3 Math.acosh(x)
var n=i(0),r=i(109),a=Math.sqrt,s=Math.acosh;n(n.S+n.F*!(s&&
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
710==Math.floor(s(Number.MAX_VALUE))&&
// Tor Browser bug: Math.acosh(Infinity) -> NaN
s(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:r(t-1+a(t-1)*a(t+1))}})},/* 184 */
/***/
function(t,e,i){function n(t){return isFinite(t=+t)&&0!=t?t<0?-n(-t):Math.log(t+Math.sqrt(t*t+1)):t}
// 20.2.2.5 Math.asinh(x)
var r=i(0),a=Math.asinh;
// Tor Browser bug: Math.asinh(0) -> -0
r(r.S+r.F*!(a&&1/a(0)>0),"Math",{asinh:n})},/* 185 */
/***/
function(t,e,i){
// 20.2.2.7 Math.atanh(x)
var n=i(0),r=Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
n(n.S+n.F*!(r&&1/r(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},/* 186 */
/***/
function(t,e,i){
// 20.2.2.9 Math.cbrt(x)
var n=i(0),r=i(75);n(n.S,"Math",{cbrt:function(t){return r(t=+t)*Math.pow(Math.abs(t),1/3)}})},/* 187 */
/***/
function(t,e,i){
// 20.2.2.11 Math.clz32(x)
var n=i(0);n(n.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},/* 188 */
/***/
function(t,e,i){
// 20.2.2.12 Math.cosh(x)
var n=i(0),r=Math.exp;n(n.S,"Math",{cosh:function(t){return(r(t=+t)+r(-t))/2}})},/* 189 */
/***/
function(t,e,i){
// 20.2.2.14 Math.expm1(x)
var n=i(0),r=i(76);n(n.S+n.F*(r!=Math.expm1),"Math",{expm1:r})},/* 190 */
/***/
function(t,e,i){
// 20.2.2.16 Math.fround(x)
var n=i(0);n(n.S,"Math",{fround:i(110)})},/* 191 */
/***/
function(t,e,i){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var n=i(0),r=Math.abs;n(n.S,"Math",{hypot:function(t,e){for(
// eslint-disable-line no-unused-vars
var i,n,a=0,s=0,o=arguments.length,l=0;s<o;)i=r(arguments[s++]),l<i?(n=l/i,a=a*n*n+1,l=i):i>0?(n=i/l,a+=n*n):a+=i;return l===1/0?1/0:l*Math.sqrt(a)}})},/* 192 */
/***/
function(t,e,i){
// 20.2.2.18 Math.imul(x, y)
var n=i(0),r=Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
n(n.S+n.F*i(4)(function(){return-5!=r(4294967295,5)||2!=r.length}),"Math",{imul:function(t,e){var i=+t,n=+e,r=65535&i,a=65535&n;return 0|r*a+((65535&i>>>16)*a+r*(65535&n>>>16)<<16>>>0)}})},/* 193 */
/***/
function(t,e,i){
// 20.2.2.21 Math.log10(x)
var n=i(0);n(n.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},/* 194 */
/***/
function(t,e,i){
// 20.2.2.20 Math.log1p(x)
var n=i(0);n(n.S,"Math",{log1p:i(109)})},/* 195 */
/***/
function(t,e,i){
// 20.2.2.22 Math.log2(x)
var n=i(0);n(n.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},/* 196 */
/***/
function(t,e,i){
// 20.2.2.28 Math.sign(x)
var n=i(0);n(n.S,"Math",{sign:i(75)})},/* 197 */
/***/
function(t,e,i){
// 20.2.2.30 Math.sinh(x)
var n=i(0),r=i(76),a=Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
n(n.S+n.F*i(4)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(r(t)-r(-t))/2:(a(t-1)-a(-t-1))*(Math.E/2)}})},/* 198 */
/***/
function(t,e,i){
// 20.2.2.33 Math.tanh(x)
var n=i(0),r=i(76),a=Math.exp;n(n.S,"Math",{tanh:function(t){var e=r(t=+t),i=r(-t);return e==1/0?1:i==1/0?-1:(e-i)/(a(t)+a(-t))}})},/* 199 */
/***/
function(t,e,i){
// 20.2.2.34 Math.trunc(x)
var n=i(0);n(n.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},/* 200 */
/***/
function(t,e,i){var n=i(0),r=i(37),a=String.fromCharCode,s=String.fromCodePoint;
// length should be 1, old FF problem
n(n.S+n.F*(!!s&&1!=s.length),"String",{
// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function(t){for(
// eslint-disable-line no-unused-vars
var e,i=[],n=arguments.length,s=0;n>s;){if(e=+arguments[s++],r(e,1114111)!==e)throw RangeError(e+" is not a valid code point");i.push(e<65536?a(e):a(55296+((e-=65536)>>10),e%1024+56320))}return i.join("")}})},/* 201 */
/***/
function(t,e,i){var n=i(0),r=i(16),a=i(9);n(n.S,"String",{
// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function(t){for(var e=r(t.raw),i=a(e.length),n=arguments.length,s=[],o=0;i>o;)s.push(String(e[o++])),o<n&&s.push(String(arguments[o]));return s.join("")}})},/* 202 */
/***/
function(t,e,i){"use strict";
// 21.1.3.25 String.prototype.trim()
i(45)("trim",function(t){return function(){return t(this,3)}})},/* 203 */
/***/
function(t,e,i){"use strict";var n=i(77)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
i(78)(String,"String",function(t){this._t=String(t),// target
this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})})},/* 204 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(77)(!1);n(n.P,"String",{
// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function(t){return r(this,t)}})},/* 205 */
/***/
function(t,e,i){"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var n=i(0),r=i(9),a=i(80),s="".endsWith;n(n.P+n.F*i(81)("endsWith"),"String",{endsWith:function(t){var e=a(this,t,"endsWith"),i=arguments.length>1?arguments[1]:void 0,n=r(e.length),o=void 0===i?n:Math.min(r(i),n),l=String(t);return s?s.call(e,l,o):e.slice(o-l.length,o)===l}})},/* 206 */
/***/
function(t,e,i){"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var n=i(0),r=i(80);n(n.P+n.F*i(81)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},/* 207 */
/***/
function(t,e,i){var n=i(0);n(n.P,"String",{
// 21.1.3.13 String.prototype.repeat(count)
repeat:i(74)})},/* 208 */
/***/
function(t,e,i){"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var n=i(0),r=i(9),a=i(80),s="".startsWith;n(n.P+n.F*i(81)("startsWith"),"String",{startsWith:function(t){var e=a(this,t,"startsWith"),i=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return s?s.call(e,n,i):e.slice(i,i+n.length)===n}})},/* 209 */
/***/
function(t,e,i){"use strict";
// B.2.3.2 String.prototype.anchor(name)
i(15)("anchor",function(t){return function(e){return t(this,"a","name",e)}})},/* 210 */
/***/
function(t,e,i){"use strict";
// B.2.3.3 String.prototype.big()
i(15)("big",function(t){return function(){return t(this,"big","","")}})},/* 211 */
/***/
function(t,e,i){"use strict";
// B.2.3.4 String.prototype.blink()
i(15)("blink",function(t){return function(){return t(this,"blink","","")}})},/* 212 */
/***/
function(t,e,i){"use strict";
// B.2.3.5 String.prototype.bold()
i(15)("bold",function(t){return function(){return t(this,"b","","")}})},/* 213 */
/***/
function(t,e,i){"use strict";
// B.2.3.6 String.prototype.fixed()
i(15)("fixed",function(t){return function(){return t(this,"tt","","")}})},/* 214 */
/***/
function(t,e,i){"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
i(15)("fontcolor",function(t){return function(e){return t(this,"font","color",e)}})},/* 215 */
/***/
function(t,e,i){"use strict";
// B.2.3.8 String.prototype.fontsize(size)
i(15)("fontsize",function(t){return function(e){return t(this,"font","size",e)}})},/* 216 */
/***/
function(t,e,i){"use strict";
// B.2.3.9 String.prototype.italics()
i(15)("italics",function(t){return function(){return t(this,"i","","")}})},/* 217 */
/***/
function(t,e,i){"use strict";
// B.2.3.10 String.prototype.link(url)
i(15)("link",function(t){return function(e){return t(this,"a","href",e)}})},/* 218 */
/***/
function(t,e,i){"use strict";
// B.2.3.11 String.prototype.small()
i(15)("small",function(t){return function(){return t(this,"small","","")}})},/* 219 */
/***/
function(t,e,i){"use strict";
// B.2.3.12 String.prototype.strike()
i(15)("strike",function(t){return function(){return t(this,"strike","","")}})},/* 220 */
/***/
function(t,e,i){"use strict";
// B.2.3.13 String.prototype.sub()
i(15)("sub",function(t){return function(){return t(this,"sub","","")}})},/* 221 */
/***/
function(t,e,i){"use strict";
// B.2.3.14 String.prototype.sup()
i(15)("sup",function(t){return function(){return t(this,"sup","","")}})},/* 222 */
/***/
function(t,e,i){
// 20.3.3.1 / 15.9.4.4 Date.now()
var n=i(0);n(n.S,"Date",{now:function(){return(new Date).getTime()}})},/* 223 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(10),a=i(24);n(n.P+n.F*i(4)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{
// eslint-disable-next-line no-unused-vars
toJSON:function(t){var e=r(this),i=a(e);return"number"!=typeof i||isFinite(i)?e.toISOString():null}})},/* 224 */
/***/
function(t,e,i){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=i(0),r=i(225);
// PhantomJS / old WebKit has a broken implementations
n(n.P+n.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},/* 225 */
/***/
function(t,e,i){"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=i(4),r=Date.prototype.getTime,a=Date.prototype.toISOString,s=function(t){return t>9?t:"0"+t};
// PhantomJS / old WebKit has a broken implementations
t.exports=n(function(){return"0385-07-25T07:06:39.999Z"!=a.call(new Date(-5e13-1))})||!n(function(){a.call(new Date(NaN))})?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),i=t.getUTCMilliseconds(),n=e<0?"-":e>9999?"+":"";return n+("00000"+Math.abs(e)).slice(n?-6:-4)+"-"+s(t.getUTCMonth()+1)+"-"+s(t.getUTCDate())+"T"+s(t.getUTCHours())+":"+s(t.getUTCMinutes())+":"+s(t.getUTCSeconds())+"."+(i>99?i:"0"+s(i))+"Z"}:a},/* 226 */
/***/
function(t,e,i){var n=Date.prototype,r=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&i(14)(n,"toString",function(){var t=a.call(this);
// eslint-disable-next-line no-self-compare
return t===t?r.call(this):"Invalid Date"})},/* 227 */
/***/
function(t,e,i){var n=i(6)("toPrimitive"),r=Date.prototype;n in r||i(13)(r,n,i(228))},/* 228 */
/***/
function(t,e,i){"use strict";var n=i(1),r=i(24);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(n(this),"number"!=t)}},/* 229 */
/***/
function(t,e,i){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var n=i(0);n(n.S,"Array",{isArray:i(55)})},/* 230 */
/***/
function(t,e,i){"use strict";var n=i(20),r=i(0),a=i(10),s=i(111),o=i(82),l=i(9),h=i(83),u=i(84);r(r.S+r.F*!i(57)(function(t){Array.from(t)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(t){var e,i,r,c,f=a(t),d="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,y=void 0!==m,g=0,v=u(f);
// if object isn't iterable or it's array with default iterator - use simple case
if(y&&(m=n(m,p>2?arguments[2]:void 0,2)),void 0==v||d==Array&&o(v))for(e=l(f.length),i=new d(e);e>g;g++)h(i,g,y?m(f[g],g):f[g]);else for(c=v.call(f),i=new d;!(r=c.next()).done;g++)h(i,g,y?s(c,m,[r.value,g],!0):r.value);return i.length=g,i}})},/* 231 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(83);
// WebKit Array.of isn't generic
n(n.S+n.F*i(4)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{
// 22.1.2.3 Array.of( ...items)
of:function(){for(var t=0,e=arguments.length,i=new("function"==typeof this?this:Array)(e);e>t;)r(i,t,arguments[t++]);return i.length=e,i}})},/* 232 */
/***/
function(t,e,i){"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var n=i(0),r=i(16),a=[].join;
// fallback for not array-like strings
n(n.P+n.F*(i(49)!=Object||!i(22)(a)),"Array",{join:function(t){return a.call(r(this),void 0===t?",":t)}})},/* 233 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(70),a=i(21),s=i(37),o=i(9),l=[].slice;
// fallback for not array-like ES3 strings and DOM objects
n(n.P+n.F*i(4)(function(){r&&l.call(r)}),"Array",{slice:function(t,e){var i=o(this.length),n=a(this);if(e=void 0===e?i:e,"Array"==n)return l.call(this,t,e);for(var r=s(t,i),h=s(e,i),u=o(h-r),c=new Array(u),f=0;f<u;f++)c[f]="String"==n?this.charAt(r+f):this[r+f];return c}})},/* 234 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(11),a=i(10),s=i(4),o=[].sort,l=[1,2,3];n(n.P+n.F*(s(function(){
// IE8-
l.sort(void 0)})||!s(function(){
// V8 bug
l.sort(null)})||!i(22)(o)),"Array",{
// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(t){return void 0===t?o.call(a(this)):o.call(a(this),r(t))}})},/* 235 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(28)(0),a=i(22)([].forEach,!0);n(n.P+n.F*!a,"Array",{
// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(t){return r(this,t,arguments[1])}})},/* 236 */
/***/
function(t,e,i){var n=i(5),r=i(55),a=i(6)("species");t.exports=function(t){var e;
// cross-realm fallback
return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}},/* 237 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(28)(1);n(n.P+n.F*!i(22)([].map,!0),"Array",{
// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(t){return r(this,t,arguments[1])}})},/* 238 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(28)(2);n(n.P+n.F*!i(22)([].filter,!0),"Array",{
// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(t){return r(this,t,arguments[1])}})},/* 239 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(28)(3);n(n.P+n.F*!i(22)([].some,!0),"Array",{
// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(t){return r(this,t,arguments[1])}})},/* 240 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(28)(4);n(n.P+n.F*!i(22)([].every,!0),"Array",{
// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(t){return r(this,t,arguments[1])}})},/* 241 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(112);n(n.P+n.F*!i(22)([].reduce,!0),"Array",{
// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},/* 242 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(112);n(n.P+n.F*!i(22)([].reduceRight,!0),"Array",{
// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},/* 243 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(53)(!1),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(s||!i(22)(a)),"Array",{
// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(t){// convert -0 to +0
return s?a.apply(this,arguments)||0:r(this,t,arguments[1])}})},/* 244 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(16),a=i(26),s=i(9),o=[].lastIndexOf,l=!!o&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(l||!i(22)(o)),"Array",{
// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(t){
// convert -0 to +0
if(l)return o.apply(this,arguments)||0;var e=r(this),i=s(e.length),n=i-1;for(arguments.length>1&&(n=Math.min(n,a(arguments[1]))),n<0&&(n=i+n);n>=0;n--)if(n in e&&e[n]===t)return n||0;return-1}})},/* 245 */
/***/
function(t,e,i){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=i(0);n(n.P,"Array",{copyWithin:i(113)}),i(32)("copyWithin")},/* 246 */
/***/
function(t,e,i){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=i(0);n(n.P,"Array",{fill:i(86)}),i(32)("fill")},/* 247 */
/***/
function(t,e,i){"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var n=i(0),r=i(28)(5),a=!0;
// Shouldn't skip holes
"find"in[]&&Array(1).find(function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(32)("find")},/* 248 */
/***/
function(t,e,i){"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var n=i(0),r=i(28)(6),a="findIndex",s=!0;
// Shouldn't skip holes
a in[]&&Array(1)[a](function(){s=!1}),n(n.P+n.F*s,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(32)(a)},/* 249 */
/***/
function(t,e,i){i(40)("Array")},/* 250 */
/***/
function(t,e,i){var n=i(2),r=i(73),a=i(8).f,s=i(39).f,o=i(56),l=i(58),h=n.RegExp,u=h,c=h.prototype,f=/a/g,d=/a/g,p=new h(f)!==f;if(i(7)&&(!p||i(4)(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return d[i(6)("match")]=!1,h(f)!=f||h(d)==d||"/a/i"!=h(f,"i")}))){h=function(t,e){var i=this instanceof h,n=o(t),a=void 0===e;return!i&&n&&t.constructor===h&&a?t:r(p?new u(n&&!a?t.source:t,e):u((n=t instanceof h)?t.source:t,n&&a?l.call(t):e),i?this:c,h)};for(var m=s(u),y=0;m.length>y;)!function(t){t in h||a(h,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})}(m[y++]);c.constructor=h,h.prototype=c,i(14)(n,"RegExp",h)}i(40)("RegExp")},/* 251 */
/***/
function(t,e,i){"use strict";i(115);var n=i(1),r=i(58),a=i(7),s=/./.toString,o=function(t){i(14)(RegExp.prototype,"toString",t,!0)};
// 21.2.5.14 RegExp.prototype.toString()
i(4)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?o(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&o(function(){return s.call(this)})},/* 252 */
/***/
function(t,e,i){
// @@match logic
i(59)("match",1,function(t,e,i){
// 21.1.3.11 String.prototype.match(regexp)
return[function(i){"use strict";var n=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,n):new RegExp(i)[e](String(n))},i]})},/* 253 */
/***/
function(t,e,i){
// @@replace logic
i(59)("replace",2,function(t,e,i){
// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function(n,r){"use strict";var a=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,a,r):i.call(String(a),n,r)},i]})},/* 254 */
/***/
function(t,e,i){
// @@search logic
i(59)("search",1,function(t,e,i){
// 21.1.3.15 String.prototype.search(regexp)
return[function(i){"use strict";var n=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,n):new RegExp(i)[e](String(n))},i]})},/* 255 */
/***/
function(t,e,i){
// @@split logic
i(59)("split",2,function(t,e,n){"use strict";var r=i(56),a=n,s=[].push,o="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[o]||2!="ab".split(/(?:ab)*/)[o]||4!=".".split(/(.?)(.?)/)[o]||".".split(/()()/)[o]>1||"".split(/.?/)[o]){var l=void 0===/()??/.exec("")[1];// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
n=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];
// If `separator` is not a regex, use native split
if(!r(t))return a.call(i,t,e);var n,h,u,c,f,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,y=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,p+"g");for(
// Doesn't need flags gy, but they don't hurt
l||(n=new RegExp("^"+g.source+"$(?!\\s)",p));(h=g.exec(i))&&!((
// `separatorCopy.lastIndex` is not reliable cross-browser
u=h.index+h[0][o])>m&&(d.push(i.slice(m,h.index)),
// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
!l&&h[o]>1&&h[0].replace(n,function(){for(f=1;f<arguments[o]-2;f++)void 0===arguments[f]&&(h[f]=void 0)}),h[o]>1&&h.index<i[o]&&s.apply(d,h.slice(1)),c=h[0][o],m=u,d[o]>=y));)g.lastIndex===h.index&&g.lastIndex++;return m===i[o]?!c&&g.test("")||d.push(""):d.push(i.slice(m)),d[o]>y?d.slice(0,y):d}}else"0".split(void 0,0)[o]&&(n=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});
// 21.1.3.17 String.prototype.split(separator, limit)
return[function(i,r){var a=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,a,r):n.call(String(a),i,r)},n]})},/* 256 */
/***/
function(t,e,i){"use strict";var n,r,a,s,o=i(35),l=i(2),h=i(20),u=i(51),c=i(0),f=i(5),d=i(11),p=i(41),m=i(42),y=i(60),g=i(88).set,v=i(89)(),b=i(90),w=i(116),S=i(117),P=l.TypeError,x=l.process,_=l.Promise,k="process"==u(x),T=function(){},M=r=b.f,O=!!function(){try{
// correct subclassing with @@species support
var t=_.resolve(1),e=(t.constructor={})[i(6)("species")]=function(t){t(T,T)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(k||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e}catch(t){}}(),E=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var i=t._c;v(function(){for(var n=t._v,r=1==t._s,a=0;i.length>a;)!function(e){var i,a,s=r?e.ok:e.fail,o=e.resolve,l=e.reject,h=e.domain;try{s?(r||(2==t._h&&B(t),t._h=1),!0===s?i=n:(h&&h.enter(),i=s(n),h&&h.exit()),i===e.promise?l(P("Promise-chain cycle")):(a=E(i))?a.call(i,o,l):o(i)):l(n)}catch(t){l(t)}}(i[a++]);// variable length - can't use forEach
t._c=[],t._n=!1,e&&!t._h&&C(t)})}},C=function(t){g.call(l,function(){var e,i,n,r=t._v,a=A(t);if(a&&(e=w(function(){k?x.emit("unhandledRejection",r,t):(i=l.onunhandledrejection)?i({promise:t,reason:r}):(n=l.console)&&n.error&&n.error("Unhandled promise rejection",r)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t._h=k||A(t)?2:1),t._a=void 0,a&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},B=function(t){g.call(l,function(){var e;k?x.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})})},L=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,// unwrap
e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},I=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;// unwrap
try{if(i===t)throw P("Promise can't be resolved itself");(e=E(t))?v(function(){var n={_w:i,_d:!1};// wrap
try{e.call(t,h(I,n,1),h(L,n,1))}catch(t){L.call(n,t)}}):(i._v=t,i._s=1,D(i,!1))}catch(t){L.call({_w:i,_d:!1},t)}}};
// constructor polyfill
O||(
// 25.4.3.1 Promise(executor)
_=function(t){p(this,_,"Promise","_h"),d(t),n.call(this);try{t(h(I,this,1),h(L,this,1))}catch(t){L.call(this,t)}},
// eslint-disable-next-line no-unused-vars
n=function(t){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},n.prototype=i(43)(_.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(t,e){var i=M(y(this,_));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=k?x.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&D(this,!1),i.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(t){return this.then(void 0,t)}}),a=function(){var t=new n;this.promise=t,this.resolve=h(I,t,1),this.reject=h(L,t,1)},b.f=M=function(t){return t===_||t===s?new a(t):r(t)}),c(c.G+c.W+c.F*!O,{Promise:_}),i(44)(_,"Promise"),i(40)("Promise"),s=i(23).Promise,
// statics
c(c.S+c.F*!O,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(t){var e=M(this);return(0,e.reject)(t),e.promise}}),c(c.S+c.F*(o||!O),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(t){return S(o&&this===s?_:this,t)}}),c(c.S+c.F*!(O&&i(57)(function(t){_.all(t).catch(T)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(t){var e=this,i=M(e),n=i.resolve,r=i.reject,a=w(function(){var i=[],a=0,s=1;m(t,!1,function(t){var o=a++,l=!1;i.push(void 0),s++,e.resolve(t).then(function(t){l||(l=!0,i[o]=t,--s||n(i))},r)}),--s||n(i)});return a.e&&r(a.v),i.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(t){var e=this,i=M(e),n=i.reject,r=w(function(){m(t,!1,function(t){e.resolve(t).then(i.resolve,n)})});return r.e&&n(r.v),i.promise}})},/* 257 */
/***/
function(t,e,i){"use strict";var n=i(122),r=i(47);
// 23.4 WeakSet Objects
i(61)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(t){return n.def(r(this,"WeakSet"),t,!0)}},n,!1,!0)},/* 258 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(62),a=i(91),s=i(1),o=i(37),l=i(9),h=i(5),u=i(2).ArrayBuffer,c=i(60),f=a.ArrayBuffer,d=a.DataView,p=r.ABV&&u.isView,m=f.prototype.slice,y=r.VIEW;n(n.G+n.W+n.F*(u!==f),{ArrayBuffer:f}),n(n.S+n.F*!r.CONSTR,"ArrayBuffer",{
// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function(t){return p&&p(t)||h(t)&&y in t}}),n(n.P+n.U+n.F*i(4)(function(){return!new f(2).slice(1,void 0).byteLength}),"ArrayBuffer",{
// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function(t,e){if(void 0!==m&&void 0===e)return m.call(s(this),t);for(// FF fix
var i=s(this).byteLength,n=o(t,i),r=o(void 0===e?i:e,i),a=new(c(this,f))(l(r-n)),h=new d(this),u=new d(a),p=0;n<r;)u.setUint8(p++,h.getUint8(n++));return a}}),i(40)("ArrayBuffer")},/* 259 */
/***/
function(t,e,i){var n=i(0);n(n.G+n.W+n.F*!i(62).ABV,{DataView:i(91).DataView})},/* 260 */
/***/
function(t,e,i){i(29)("Int8",1,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 261 */
/***/
function(t,e,i){i(29)("Uint8",1,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 262 */
/***/
function(t,e,i){i(29)("Uint8",1,function(t){return function(e,i,n){return t(this,e,i,n)}},!0)},/* 263 */
/***/
function(t,e,i){i(29)("Int16",2,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 264 */
/***/
function(t,e,i){i(29)("Uint16",2,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 265 */
/***/
function(t,e,i){i(29)("Int32",4,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 266 */
/***/
function(t,e,i){i(29)("Uint32",4,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 267 */
/***/
function(t,e,i){i(29)("Float32",4,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 268 */
/***/
function(t,e,i){i(29)("Float64",8,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 269 */
/***/
function(t,e,i){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var n=i(0),r=i(11),a=i(1),s=(i(2).Reflect||{}).apply,o=Function.apply;
// MS Edge argumentsList argument is optional
n(n.S+n.F*!i(4)(function(){s(function(){})}),"Reflect",{apply:function(t,e,i){var n=r(t),l=a(i);return s?s(n,e,l):o.call(n,e,l)}})},/* 270 */
/***/
function(t,e,i){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var n=i(0),r=i(38),a=i(11),s=i(1),o=i(5),l=i(4),h=i(103),u=(i(2).Reflect||{}).construct,c=l(function(){function t(){}return!(u(function(){},[],t)instanceof t)}),f=!l(function(){u(function(){})});n(n.S+n.F*(c||f),"Reflect",{construct:function(t,e){a(t),s(e);var i=arguments.length<3?t:a(arguments[2]);if(f&&!c)return u(t,e,i);if(t==i){
// w/o altered newTarget, optimization for 0-4 arguments
switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}
// w/o altered newTarget, lot of arguments case
var n=[null];return n.push.apply(n,e),new(h.apply(t,n))}
// with altered newTarget, not support built-in constructors
var l=i.prototype,d=r(o(l)?l:Object.prototype),p=Function.apply.call(t,d,e);return o(p)?p:d}})},/* 271 */
/***/
function(t,e,i){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var n=i(8),r=i(0),a=i(1),s=i(24);
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
r(r.S+r.F*i(4)(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(n.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,i){a(t),e=s(e,!0),a(i);try{return n.f(t,e,i),!0}catch(t){return!1}}})},/* 272 */
/***/
function(t,e,i){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var n=i(0),r=i(17).f,a=i(1);n(n.S,"Reflect",{deleteProperty:function(t,e){var i=r(a(t),e);return!(i&&!i.configurable)&&delete t[e]}})},/* 273 */
/***/
function(t,e,i){"use strict";
// 26.1.5 Reflect.enumerate(target)
var n=i(0),r=i(1),a=function(t){this._t=r(t),// target
this._i=0;// next index
var e,i=this._k=[];for(e in t)i.push(e)};i(79)(a,"Object",function(){var t,e=this,i=e._k;do{if(e._i>=i.length)return{value:void 0,done:!0}}while(!((t=i[e._i++])in e._t));return{value:t,done:!1}}),n(n.S,"Reflect",{enumerate:function(t){return new a(t)}})},/* 274 */
/***/
function(t,e,i){function n(t,e){var i,o,u=arguments.length<3?t:arguments[2];return h(t)===u?t[e]:(i=r.f(t,e))?s(i,"value")?i.value:void 0!==i.get?i.get.call(u):void 0:l(o=a(t))?n(o,e,u):void 0}
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var r=i(17),a=i(18),s=i(12),o=i(0),l=i(5),h=i(1);o(o.S,"Reflect",{get:n})},/* 275 */
/***/
function(t,e,i){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var n=i(17),r=i(0),a=i(1);r(r.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return n.f(a(t),e)}})},/* 276 */
/***/
function(t,e,i){
// 26.1.8 Reflect.getPrototypeOf(target)
var n=i(0),r=i(18),a=i(1);n(n.S,"Reflect",{getPrototypeOf:function(t){return r(a(t))}})},/* 277 */
/***/
function(t,e,i){
// 26.1.9 Reflect.has(target, propertyKey)
var n=i(0);n(n.S,"Reflect",{has:function(t,e){return e in t}})},/* 278 */
/***/
function(t,e,i){
// 26.1.10 Reflect.isExtensible(target)
var n=i(0),r=i(1),a=Object.isExtensible;n(n.S,"Reflect",{isExtensible:function(t){return r(t),!a||a(t)}})},/* 279 */
/***/
function(t,e,i){
// 26.1.11 Reflect.ownKeys(target)
var n=i(0);n(n.S,"Reflect",{ownKeys:i(124)})},/* 280 */
/***/
function(t,e,i){
// 26.1.12 Reflect.preventExtensions(target)
var n=i(0),r=i(1),a=Object.preventExtensions;n(n.S,"Reflect",{preventExtensions:function(t){r(t);try{return a&&a(t),!0}catch(t){return!1}}})},/* 281 */
/***/
function(t,e,i){function n(t,e,i){var l,f,d=arguments.length<4?t:arguments[3],p=a.f(u(t),e);if(!p){if(c(f=s(t)))return n(f,e,i,d);p=h(0)}return o(p,"value")?!(!1===p.writable||!c(d))&&(l=a.f(d,e)||h(0),l.value=i,r.f(d,e,l),!0):void 0!==p.set&&(p.set.call(d,i),!0)}
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var r=i(8),a=i(17),s=i(18),o=i(12),l=i(0),h=i(33),u=i(1),c=i(5);l(l.S,"Reflect",{set:n})},/* 282 */
/***/
function(t,e,i){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var n=i(0),r=i(71);r&&n(n.S,"Reflect",{setPrototypeOf:function(t,e){r.check(t,e);try{return r.set(t,e),!0}catch(t){return!1}}})},/* 283 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/Array.prototype.includes
var n=i(0),r=i(53)(!0);n(n.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(32)("includes")},/* 284 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var n=i(0),r=i(125),a=i(10),s=i(9),o=i(11),l=i(85);n(n.P,"Array",{flatMap:function(t){var e,i,n=a(this);return o(t),e=s(n.length),i=l(n,0),r(i,n,n,e,0,1,t,arguments[1]),i}}),i(32)("flatMap")},/* 285 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var n=i(0),r=i(125),a=i(10),s=i(9),o=i(26),l=i(85);n(n.P,"Array",{flatten:function(){var t=arguments[0],e=a(this),i=s(e.length),n=l(e,0);return r(n,e,e,i,0,void 0===t?1:o(t)),n}}),i(32)("flatten")},/* 286 */
/***/
function(t,e,i){"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var n=i(0),r=i(77)(!0);n(n.P,"String",{at:function(t){return r(this,t)}})},/* 287 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=i(0),r=i(126),a=i(92);
// https://github.com/zloirock/core-js/issues/280
n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(a),"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},/* 288 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=i(0),r=i(126),a=i(92);
// https://github.com/zloirock/core-js/issues/280
n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(a),"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},/* 289 */
/***/
function(t,e,i){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
i(45)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},/* 290 */
/***/
function(t,e,i){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
i(45)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},/* 291 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var n=i(0),r=i(25),a=i(9),s=i(56),o=i(58),l=RegExp.prototype,h=function(t,e){this._r=t,this._s=e};i(79)(h,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),n(n.P,"String",{matchAll:function(t){if(r(this),!s(t))throw TypeError(t+" is not a regexp!");var e=String(this),i="flags"in l?String(t.flags):o.call(t),n=new RegExp(t.source,~i.indexOf("g")?i:"g"+i);return n.lastIndex=a(t.lastIndex),new h(n,e)}})},/* 292 */
/***/
function(t,e,i){i(67)("asyncIterator")},/* 293 */
/***/
function(t,e,i){i(67)("observable")},/* 294 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var n=i(0),r=i(124),a=i(16),s=i(17),o=i(83);n(n.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,i,n=a(t),l=s.f,h=r(n),u={},c=0;h.length>c;)void 0!==(i=l(n,e=h[c++]))&&o(u,e,i);return u}})},/* 295 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-values-entries
var n=i(0),r=i(127)(!1);n(n.S,"Object",{values:function(t){return r(t)}})},/* 296 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-values-entries
var n=i(0),r=i(127)(!0);n(n.S,"Object",{entries:function(t){return r(t)}})},/* 297 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(10),a=i(11),s=i(8);
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
i(7)&&n(n.P+i(63),"Object",{__defineGetter__:function(t,e){s.f(r(this),t,{get:a(e),enumerable:!0,configurable:!0})}})},/* 298 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(10),a=i(11),s=i(8);
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
i(7)&&n(n.P+i(63),"Object",{__defineSetter__:function(t,e){s.f(r(this),t,{set:a(e),enumerable:!0,configurable:!0})}})},/* 299 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(10),a=i(24),s=i(18),o=i(17).f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
i(7)&&n(n.P+i(63),"Object",{__lookupGetter__:function(t){var e,i=r(this),n=a(t,!0);do{if(e=o(i,n))return e.get}while(i=s(i))}})},/* 300 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(10),a=i(24),s=i(18),o=i(17).f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
i(7)&&n(n.P+i(63),"Object",{__lookupSetter__:function(t){var e,i=r(this),n=a(t,!0);do{if(e=o(i,n))return e.set}while(i=s(i))}})},/* 301 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=i(0);n(n.P+n.R,"Map",{toJSON:i(128)("Map")})},/* 302 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=i(0);n(n.P+n.R,"Set",{toJSON:i(128)("Set")})},/* 303 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
i(64)("Map")},/* 304 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
i(64)("Set")},/* 305 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
i(64)("WeakMap")},/* 306 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
i(64)("WeakSet")},/* 307 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
i(65)("Map")},/* 308 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
i(65)("Set")},/* 309 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
i(65)("WeakMap")},/* 310 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
i(65)("WeakSet")},/* 311 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-global
var n=i(0);n(n.G,{global:i(2)})},/* 312 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-global
var n=i(0);n(n.S,"System",{global:i(2)})},/* 313 */
/***/
function(t,e,i){
// https://github.com/ljharb/proposal-is-error
var n=i(0),r=i(21);n(n.S,"Error",{isError:function(t){return"Error"===r(t)}})},/* 314 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{clamp:function(t,e,i){return Math.min(i,Math.max(e,t))}})},/* 315 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{DEG_PER_RAD:Math.PI/180})},/* 316 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0),r=180/Math.PI;n(n.S,"Math",{degrees:function(t){return t*r}})},/* 317 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0),r=i(130),a=i(110);n(n.S,"Math",{fscale:function(t,e,i,n,s){return a(r(t,e,i,n,s))}})},/* 318 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{iaddh:function(t,e,i,n){var r=t>>>0,a=e>>>0,s=i>>>0;return a+(n>>>0)+((r&s|(r|s)&~(r+s>>>0))>>>31)|0}})},/* 319 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{isubh:function(t,e,i,n){var r=t>>>0,a=e>>>0,s=i>>>0;return a-(n>>>0)-((~r&s|~(r^s)&r-s>>>0)>>>31)|0}})},/* 320 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{imulh:function(t,e){var i=+t,n=+e,r=65535&i,a=65535&n,s=i>>16,o=n>>16,l=(s*a>>>0)+(r*a>>>16);return s*o+(l>>16)+((r*o>>>0)+(65535&l)>>16)}})},/* 321 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{RAD_PER_DEG:180/Math.PI})},/* 322 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0),r=Math.PI/180;n(n.S,"Math",{radians:function(t){return t*r}})},/* 323 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{scale:i(130)})},/* 324 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{umulh:function(t,e){var i=+t,n=+e,r=65535&i,a=65535&n,s=i>>>16,o=n>>>16,l=(s*a>>>0)+(r*a>>>16);return s*o+(l>>>16)+((r*o>>>0)+(65535&l)>>>16)}})},/* 325 */
/***/
function(t,e,i){
// http://jfbastien.github.io/papers/Math.signbit.html
var n=i(0);n(n.S,"Math",{signbit:function(t){
// eslint-disable-next-line no-self-compare
return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},/* 326 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-promise-finally
var n=i(0),r=i(23),a=i(2),s=i(60),o=i(117);n(n.P+n.R,"Promise",{finally:function(t){var e=s(this,r.Promise||a.Promise),i="function"==typeof t;return this.then(i?function(i){return o(e,t()).then(function(){return i})}:t,i?function(i){return o(e,t()).then(function(){throw i})}:t)}})},/* 327 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-promise-try
var n=i(0),r=i(90),a=i(116);n(n.S,"Promise",{try:function(t){var e=r.f(this),i=a(t);return(i.e?e.reject:e.resolve)(i.v),e.promise}})},/* 328 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=n.key,s=n.set;n.exp({defineMetadata:function(t,e,i,n){s(t,e,r(i),a(n))}})},/* 329 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=n.key,s=n.map,o=n.store;n.exp({deleteMetadata:function(t,e){var i=arguments.length<3?void 0:a(arguments[2]),n=s(r(e),i,!1);if(void 0===n||!n.delete(t))return!1;if(n.size)return!0;var l=o.get(e);return l.delete(i),!!l.size||o.delete(e)}})},/* 330 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=i(18),s=n.has,o=n.get,l=n.key,h=function(t,e,i){if(s(t,e,i))return o(t,e,i);var n=a(e);return null!==n?h(t,n,i):void 0};n.exp({getMetadata:function(t,e){return h(t,r(e),arguments.length<3?void 0:l(arguments[2]))}})},/* 331 */
/***/
function(t,e,i){var n=i(120),r=i(129),a=i(30),s=i(1),o=i(18),l=a.keys,h=a.key,u=function(t,e){var i=l(t,e),a=o(t);if(null===a)return i;var s=u(a,e);return s.length?i.length?r(new n(i.concat(s))):s:i};a.exp({getMetadataKeys:function(t){return u(s(t),arguments.length<2?void 0:h(arguments[1]))}})},/* 332 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=n.get,s=n.key;n.exp({getOwnMetadata:function(t,e){return a(t,r(e),arguments.length<3?void 0:s(arguments[2]))}})},/* 333 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=n.keys,s=n.key;n.exp({getOwnMetadataKeys:function(t){return a(r(t),arguments.length<2?void 0:s(arguments[1]))}})},/* 334 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=i(18),s=n.has,o=n.key,l=function(t,e,i){if(s(t,e,i))return!0;var n=a(e);return null!==n&&l(t,n,i)};n.exp({hasMetadata:function(t,e){return l(t,r(e),arguments.length<3?void 0:o(arguments[2]))}})},/* 335 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=n.has,s=n.key;n.exp({hasOwnMetadata:function(t,e){return a(t,r(e),arguments.length<3?void 0:s(arguments[2]))}})},/* 336 */
/***/
function(t,e,i){var n=i(30),r=i(1),a=i(11),s=n.key,o=n.set;n.exp({metadata:function(t,e){return function(i,n){o(t,e,(void 0!==n?r:a)(i),s(n))}}})},/* 337 */
/***/
function(t,e,i){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var n=i(0),r=i(89)(),a=i(2).process,s="process"==i(21)(a);n(n.G,{asap:function(t){var e=s&&a.domain;r(e?e.bind(t):t)}})},/* 338 */
/***/
function(t,e,i){"use strict";
// https://github.com/zenparsing/es-observable
var n=i(0),r=i(2),a=i(23),s=i(89)(),o=i(6)("observable"),l=i(11),h=i(1),u=i(41),c=i(43),f=i(13),d=i(42),p=d.RETURN,m=function(t){return null==t?void 0:l(t)},y=function(t){var e=t._c;e&&(t._c=void 0,e())},g=function(t){return void 0===t._o},v=function(t){g(t)||(t._o=void 0,y(t))},b=function(t,e){h(t),this._c=void 0,this._o=t,t=new w(this);try{var i=e(t),n=i;null!=i&&("function"==typeof i.unsubscribe?i=function(){n.unsubscribe()}:l(i),this._c=i)}catch(e){return void t.error(e)}g(this)&&y(this)};b.prototype=c({},{unsubscribe:function(){v(this)}});var w=function(t){this._s=t};w.prototype=c({},{next:function(t){var e=this._s;if(!g(e)){var i=e._o;try{var n=m(i.next);if(n)return n.call(i,t)}catch(t){try{v(e)}finally{throw t}}}},error:function(t){var e=this._s;if(g(e))throw t;var i=e._o;e._o=void 0;try{var n=m(i.error);if(!n)throw t;t=n.call(i,t)}catch(t){try{y(e)}finally{throw t}}return y(e),t},complete:function(t){var e=this._s;if(!g(e)){var i=e._o;e._o=void 0;try{var n=m(i.complete);t=n?n.call(i,t):void 0}catch(t){try{y(e)}finally{throw t}}return y(e),t}}});var S=function(t){u(this,S,"Observable","_f")._f=l(t)};c(S.prototype,{subscribe:function(t){return new b(t,this._f)},forEach:function(t){var e=this;return new(a.Promise||r.Promise)(function(i,n){l(t);var r=e.subscribe({next:function(e){try{return t(e)}catch(t){n(t),r.unsubscribe()}},error:n,complete:i})})}}),c(S,{from:function(t){var e="function"==typeof this?this:S,i=m(h(t)[o]);if(i){var n=h(i.call(t));return n.constructor===e?n:new e(function(t){return n.subscribe(t)})}return new e(function(e){var i=!1;return s(function(){if(!i){try{if(d(t,!1,function(t){if(e.next(t),i)return p})===p)return}catch(t){if(i)throw t;return void e.error(t)}e.complete()}}),function(){i=!0}})},of:function(){for(var t=0,e=arguments.length,i=new Array(e);t<e;)i[t]=arguments[t++];return new("function"==typeof this?this:S)(function(t){var e=!1;return s(function(){if(!e){for(var n=0;n<i.length;++n)if(t.next(i[n]),e)return;t.complete()}}),function(){e=!0}})}}),f(S.prototype,o,function(){return this}),n(n.G,{Observable:S}),i(40)("Observable")},/* 339 */
/***/
function(t,e,i){
// ie9- setTimeout & setInterval additional parameters fix
var n=i(2),r=i(0),a=i(92),s=[].slice,o=/MSIE .\./.test(a),l=function(t){return function(e,i){var n=arguments.length>2,r=!!n&&s.call(arguments,2);return t(n?function(){
// eslint-disable-next-line no-new-func
("function"==typeof e?e:Function(e)).apply(this,r)}:e,i)}};r(r.G+r.B+r.F*o,{setTimeout:l(n.setTimeout),setInterval:l(n.setInterval)})},/* 340 */
/***/
function(t,e,i){var n=i(0),r=i(88);n(n.G+n.B,{setImmediate:r.set,clearImmediate:r.clear})},/* 341 */
/***/
function(t,e,i){for(var n=i(87),r=i(36),a=i(14),s=i(2),o=i(13),l=i(46),h=i(6),u=h("iterator"),c=h("toStringTag"),f=l.Array,d={CSSRuleList:!0,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,// TODO: Not spec compliant, should be false.
MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,// TODO: Not spec compliant, should be false.
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(d),m=0;m<p.length;m++){var y,g=p[m],v=d[g],b=s[g],w=b&&b.prototype;if(w&&(w[u]||o(w,u,f),w[c]||o(w,c,g),l[g]=f,v))for(y in n)w[y]||a(w,y,n[y],!0)}},/* 342 */
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
!function(e){"use strict";function i(t,e,i,n){
// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var a=e&&e.prototype instanceof r?e:r,s=Object.create(a.prototype),o=new d(n||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return s._invoke=h(t,i,o),s}
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
function n(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}
// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function r(){}function a(){}function s(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function o(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function l(t){function i(e,r,a,s){var o=n(t[e],t,r);if("throw"!==o.type){var l=o.arg,h=l.value;return h&&"object"==typeof h&&v.call(h,"__await")?Promise.resolve(h.__await).then(function(t){i("next",t,a,s)},function(t){i("throw",t,a,s)}):Promise.resolve(h).then(function(t){
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
l.value=t,a(l)},s)}s(o.arg)}function r(t,e){function n(){return new Promise(function(n,r){i(t,e,n,r)})}
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
return a=a?a.then(n,n):n()}"object"==typeof e.process&&e.process.domain&&(i=e.process.domain.bind(i));var a;
// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=r}function h(t,e,i){var r=k;return function(a,s){if(r===M)throw new Error("Generator is already running");if(r===O){if("throw"===a)throw s;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return m()}for(i.method=a,i.arg=s;;){var o=i.delegate;if(o){var l=u(o,i);if(l){if(l===E)continue;return l}}if("next"===i.method)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===k)throw r=O,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=M;var h=n(t,e,i);if("normal"===h.type){if(
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
r=i.done?O:T,h.arg===E)continue;return{value:h.arg,done:i.done}}"throw"===h.type&&(r=O,
// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
i.method="throw",i.arg=h.arg)}}}
// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function u(t,e){var i=t.iterator[e.method];if(i===y){if(
// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
e.delegate=null,"throw"===e.method){if(t.iterator.return&&(
// If the delegate iterator has a return method, give it a
// chance to clean up.
e.method="return",e.arg=y,u(t,e),"throw"===e.method))
// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return E;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return E}var r=n(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,E;var a=r.arg;
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
return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,E):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,E)}function c(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(c,this),this.reset(!0)}function p(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,n=function e(){for(;++i<t.length;)if(v.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}
// Return an iterator with no values.
return{next:m}}function m(){return{value:y,done:!0}}var y,g=Object.prototype,v=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",S=b.asyncIterator||"@@asyncIterator",P=b.toStringTag||"@@toStringTag",x="object"==typeof t,_=e.regeneratorRuntime;if(_)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(x&&(t.exports=_));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
_=e.regeneratorRuntime=x?t.exports:{},_.wrap=i;var k="suspendedStart",T="suspendedYield",M="executing",O="completed",E={},D={};D[w]=function(){return this};var C=Object.getPrototypeOf,A=C&&C(C(p([])));A&&A!==g&&v.call(A,w)&&(
// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
D=A);var B=s.prototype=r.prototype=Object.create(D);a.prototype=B.constructor=s,s.constructor=a,s[P]=a.displayName="GeneratorFunction",_.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},_.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,s):(t.__proto__=s,P in t||(t[P]="GeneratorFunction")),t.prototype=Object.create(B),t},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
_.awrap=function(t){return{__await:t}},o(l.prototype),l.prototype[S]=function(){return this},_.AsyncIterator=l,
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
_.async=function(t,e,n,r){var a=new l(i(t,e,n,r));return _.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
o(B),B[P]="Generator",
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
B[w]=function(){return this},B.toString=function(){return"[object Generator]"},_.keys=function(t){var e=[];for(var i in t)e.push(i);
// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}
// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return i.done=!0,i}},_.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,
// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(f),!t)for(var e in this)
// Not sure about the optimal order of these conditions:
"t"===e.charAt(0)&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){
// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
return a.type="throw",a.arg=t,i.next=e,n&&(i.method="next",i.arg=y),!!n}if(this.done)throw t;for(var i=this,n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],a=r.completion;if("root"===r.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return e("end");if(r.tryLoc<=this.prev){var s=v.call(r,"catchLoc"),o=v.call(r,"finallyLoc");if(s&&o){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&v.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,E):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),E},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),f(i),E}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;f(i)}return r}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:p(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=y),E}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,i(48))},/* 343 */
/***/
function(t,e,i){i(344),t.exports=i(23).RegExp.escape},/* 344 */
/***/
function(t,e,i){
// https://github.com/benjamingr/RexExp.escape
var n=i(0),r=i(345)(/[\\^$*+?.()|[\]{}]/g,"\\$&");n(n.S,"RegExp",{escape:function(t){return r(t)}})},/* 345 */
/***/
function(t,e){t.exports=function(t,e){var i=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,i)}}},/* 346 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i(131),i(132);var o=i(3),l=n(o),h=i(351),u=n(h),c=i(352),f=n(c),d=i(353),p=n(d),m=i(354),y=n(m),g=i(358),v=n(g),b=i(19),w=n(b);i(373),i(375);var S=function(t){function e(){if(r(this,e),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"))var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,480,280,l.default.CANVAS,!0,!1,!0));else var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,w.default.phaserConfig));
// with Cordova with need to wait that the device is ready so we will call the Boot state in another file
return t.state.add("Boot",u.default,!1),t.state.add("Preload",y.default,!1),t.state.add("DeltaStorm",f.default,!1),t.state.add("MainMenu",p.default,!1),t.state.add("Game",v.default,!1),window.cordova||t.state.start("Boot"),a(t)}return s(e,t),e}(l.default.Game);if(window.game=new S,window.cordova){({initialize:function(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)},
// deviceready Event Handler
onDeviceReady:function(){this.receivedEvent("deviceready"),
// When the device is ready, start Phaser Boot state.
window.game.state.start("Boot")},receivedEvent:function(t){console.log("Received Event: "+t)}}).initialize()}},/* 347 */
,/* 348 */
,/* 349 */
,/* 350 */
,/* 351 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(3),l=function(t){return t&&t.__esModule?t:{default:t}}(o);i(93);var h=function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"init",value:function(){
// Boot Log
console.log("%c Boot it up! ","background: #0061ff; color: #bada55")}},{key:"create",value:function(){
// Game Scaling
this.scale.fullScreenScaleMode=l.default.ScaleManager.SHOW_ALL,this.scale.scaleMode=l.default.ScaleManager.SHOW_ALL,this.game.scale.pageAlignVertically=!0,this.game.scale.pageAlignHorizontally=!0,
// enable crisp rendering
this.game.renderer.renderSession.roundPixels=!0,this.game.time.advancedTiming=!0,l.default.Canvas.setImageRenderingCrisp(this.game.canvas),
// Add Tilemap Plus Plugin
this.game.plugins.add(l.default.Plugin.TilemapPlus),
// Start Physics
this.game.physics.startSystem(l.default.Physics.ARCADE),
// Enable Pixel Rendering
this.stage.smoothed=!1,
// Don't pause on lost focus
this.stage.disableVisibilityChange=!0,
// this.game.forceSingleRender = true;
// this.game.time.desiredFps = 60;
// Start the Preload State
this.state.start("Preload")}},{key:"preload",value:function(){this.load.bitmapFont("font","assets/fonts/font.png","assets/fonts/font.xml")}}]),e}(l.default.State);e.default=h},/* 352 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(3),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"init",value:function(){}},{key:"create",value:function(){var t=this;this.game.camera.flash(0,2e3),this.menuText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2,"pxlfont","Delta Storm",30),this.menuText.anchor.set(.5),this.subText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2+40,"pxlfont","presents",10),this.subText.smoothed=!1,this.subText.anchor.set(.5),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")||"undefined"!=typeof ipc||(this.input.onDown.add(this.toggleFullScreen,this),this.input.onTap.add(this.toggleFullScreen,this,null,"onTap")),this.game.time.events.add(2*l.default.Timer.SECOND,function(){t.game.camera.fade(0,2e3,!0),t.game.time.events.add(3*l.default.Timer.SECOND,function(){t.state.start("MainMenu",!0,!1)})})}},{key:"preload",value:function(){}},{key:"update",value:function(){}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(l.default.State);e.default=h},/* 353 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(3),l=function(t){return t&&t.__esModule?t:{default:t}}(o),h=function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"init",value:function(){}},{key:"create",value:function(){var t=this;this.notificationSwitch=!0,this.startSwitch=!0,this.playOnce=!1,this.game.camera.flash(0,3e3),this.game.soundManager.initSound("AtmoWindRain"),this.menuText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2,"pxlfont","PROPHECY",51),this.menuText.anchor.set(.5),this.subText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2+80,"pxlfont","Click To Move On",10),this.subText.smoothed=!1,this.subText.anchor.set(.5);var e=this.game.add.emitter(-500,0,400);e.fixedToCamera=!0,e.width=2*this.game.camera.width,e.angle=-30,e.makeParticles("rain"),e.minParticleScale=.1,e.maxParticleScale=.5,e.setYSpeed(200,310),e.setXSpeed(-5,5),e.minRotation=180,e.maxRotation=0,e.gravity=200,e.start(!1,2500,1,0),this.autumnGlimmerEmitter=this.game.add.emitter(-500,0,150),this.autumnGlimmerEmitter.fixedToCamera=!0,this.autumnGlimmerEmitter.width=this.game.world.bounds.width,this.autumnGlimmerEmitter.height=this.game.world.bounds.height,this.autumnGlimmerEmitter.minParticleScale=.1,this.autumnGlimmerEmitter.maxParticleScale=.5,this.autumnGlimmerEmitter.setScale(-2,2,1,1,3e3,l.default.Easing.Sinusoidal.InOut,!0),this.autumnGlimmerEmitter.setYSpeed(300),this.autumnGlimmerEmitter.setXSpeed(-300,300),this.autumnGlimmerEmitter.minParticleScale=.25,this.autumnGlimmerEmitter.maxParticleScale=1,this.autumnGlimmerEmitter.gravity=.5,this.autumnGlimmerEmitter.minRotation=25,this.autumnGlimmerEmitter.setAlpha(.5,1),this.autumnGlimmerEmitter.makeParticles("glimmerParticle"),this.autumnGlimmerEmitter.start(!1,5e3,5,0),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")||"undefined"!=typeof ipc||(this.input.onDown.add(this.toggleFullScreen,this),this.input.onTap.add(this.toggleFullScreen,this,null,"onTap")),this.input.onDown.add(function(){var t=this;this.playOnce||(this.playOnce=!0,this.game.camera.fade(0,4e3,!0),this.startSound=game.add.audio("startGame",.3),this.startSound.play(),this.game.add.tween(this.subText).to({alpha:0},2e3,l.default.Easing.Back.Out,!0),this.game.time.events.add(4*l.default.Timer.SECOND,function(){t.state.start("Game",!0,!1)}))},this),this.input.gamepad.start(),this.pad1=this.game.input.gamepad.pad1,this.pad1.addCallbacks(this,{onConnect:function(){"undefined"!=typeof ipc&&t.pad1.connected&&new Notification("Input",{body:"🎮 New Controller Connected",silent:!0}),t.subText.text="Press A-Button To Move On"}})}},{key:"preload",value:function(){}},{key:"update",value:function(){var t=this;if(this.pad1.connected||(this.subText.text="Click To Move On"),this.game.input.gamepad.supported){if(this.pad1=this.game.input.gamepad.pad1,this.notificationSwitch&&"undefined"!=typeof ipc&&this.pad1.connected){new Notification("Input",{body:"🎮 New Controller Connected",silent:!0});this.subText.text="Press A-Button To Move On",this.notificationSwitch=!1}this.pad1.isDown(l.default.Gamepad.XBOX360_A)&&this.startSwitch&&(this.startSwitch=!1,this.game.camera.fade(0,4e3,!0),this.startSound=game.add.audio("startGame",.3),this.startSound.play(),this.game.add.tween(this.subText).to({alpha:0},2e3,l.default.Easing.Back.Out,!0),this.game.time.events.add(4*l.default.Timer.SECOND,function(){t.state.start("Game",!0,!1)}))}}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(l.default.State);e.default=h},/* 354 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(3),h=n(l),u=i(133),c=(n(u),i(134)),f=(n(c),i(355)),d=n(f),p=i(357),m=n(p),y=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),o(e,[{key:"init",value:function(){this.AxThunderstrikeJSON={spritemap:{hit1:{start:1,end:4,loop:!1},hit2:{start:4,end:8,loop:!1},hit3:{start:8,end:12,loop:!1},hit4:{start:12,end:16,loop:!1},hit5:{start:16,end:20,loop:!1}}},this.pxFootstepsJSON={spritemap:{grass1:{start:0,end:.2,loop:!0},grass2:{start:.625,end:1.25,loop:!1},grass3:{start:1.25,end:1.875,loop:!1},hard1:{start:2,end:2.15,loop:!0},hard2:{start:2.625,end:3.25,loop:!1},hard3:{start:3.25,end:3.875,loop:!1},gravel1:{start:4,end:4.3,loop:!0},gravel2:{start:4.625,end:5.25,loop:!1},gravel3:{start:5.25,end:5.67,loop:!0}}}}},{key:"preload",value:function(){
// this.stage.backgroundColor = "#000000";
this.text=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2,"font","",20),this.text.anchor.set(.5),this.text.tint=16777215,this.text.text="",
// this.text.scale.set(0.26);
// Load Sprites
//this.load.image('player', 'assets/sprites/player.png');
// this.load.image('tileSpriteClouds', 'assets/sprites/tilespriteClouds3xblur.png');
this.load.image("lucy","assets/sprites/lucy.png"),this.load.image("blackParticle","assets/sprites/blackParticle.png"),this.load.image("cyanParticle","assets/sprites/cyanParticle.png"),this.load.spritesheet("lucyShadow","assets/sprites/lucyShadow.png",20,9),this.load.image("LockGameRing","assets/sprites/LockGameRing.png"),this.load.image("LockGameBar","assets/sprites/LockGameBar.png"),this.load.image("LockGameBall","assets/sprites/LockGameBall.png"),
// Load Maps
this.load.tilemap("map1","assets/maps/map1.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map2","assets/maps/map2.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map3","assets/maps/map3.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map4","assets/maps/map4.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map5","assets/maps/map5.json",null,h.default.Tilemap.TILED_JSON),this.load.tilemap("map6","assets/maps/map6.json",null,h.default.Tilemap.TILED_JSON),
// Load Music
this.load.audio("MainTitle","assets/music/MainTitle.mp3"),
// Load Sounds
this.load.audio("AtmoWindRain","assets/sounds/AtmoWindRain.mp3"),this.load.audio("startGame","assets/sounds/startGame.mp3"),this.load.audio("AxWaterfall","assets/sounds/AxWaterfall.mp3"),this.load.audio("AtmoWaterStill","assets/sounds/AtmoWaterStill.mp3"),this.load.audio("achivement","assets/sounds/achivement.mp3"),this.load.audio("sfxBridge","assets/sounds/sfxBridge.mp3"),this.load.audio("sfxPickUp","assets/sounds/sfxPickUp.mp3"),this.load.audio("sfxfalldown","assets/sounds/sfxfalldown.mp3"),
// this.load.audio('AtmoWaterStill', 'assets/sounds/AtmoWaterStill.mp3');
// Load AudioSpriteSheets
this.load.audiosprite("AxThunderstrike","assets/sounds/AxThunderstrike.mp3",null,this.AxThunderstrikeJSON),this.load.audiosprite("PxFootsteps","assets/sounds/PxFootsteps.mp3",null,this.pxFootstepsJSON),
// Load Spritesheets
// this.load.spritesheet('player', 'assets/sprites/player.png', 46, 46);
this.load.spritesheet("player","assets/sprites/player.png",42,42),this.load.spritesheet("player_beta","assets/sprites/player_beta.png",55,55),this.load.spritesheet("testman","assets/sprites/testman.png",46,46),this.load.spritesheet("priest","assets/sprites/priest.png",41,41),this.load.spritesheet("enemy","assets/sprites/enemy.png",18,18),this.load.spritesheet("item","assets/sprites/testitem.png",25,27),this.load.spritesheet("treeleaves","assets/sprites/treeleaves.png",3,3),this.load.spritesheet("templeDoor","assets/sprites/templeDoor.png",72,108),
// Load Tilesets
this.load.image("gameTileset2","assets/tilesets/testtileset.png"),this.load.image("Clouds","assets/tilesets/Clouds.png"),
// Load GameMaps
this.load.image("newGameMap","assets/sprites/newGameMap.png"),
// Load Videos
// Load Mobile Controll
this.load.atlas("dpad","assets/input/dpad.png","assets/input/dpad.json"),this.load.atlas("generic","assets/input/generic-joystick.png","assets/input/generic-joystick.json"),
// GameButtons
this.load.spritesheet("mapButton","assets/input/mapButton.png",60,20),this.load.spritesheet("questButton","assets/input/questButton.png",60,20),this.load.spritesheet("optionsButton","assets/input/optionsButton.png",60,20),this.load.spritesheet("muteMusicButton","assets/input/muteMusicButton.png",90,20),this.load.spritesheet("muteSoundButton","assets/input/muteSoundButton.png",90,20),
// Load Weather Sprites
this.load.image("rain","assets/sprites/rain.png"),this.load.image("snow","assets/sprites/snow.png"),this.load.image("fly","assets/sprites/fly.png"),this.load.image("glimmerParticle","assets/sprites/glimmerParticle.png"),this.load.image("leave","assets/sprites/leave.png"),this.load.image("cloud","assets/sprites/cloud.png"),
// Load Fonts
// this.load.bitmapFont('pxlfont', 'assets/fonts/font.png', 'assets/fonts/font.xml');
this.load.bitmapFont("pxlfont","assets/fonts/prophecy.png","assets/fonts/prophecy.fnt"),this.load.bitmapFont("minecraftia","assets/fonts/minecraftia-black.png","assets/fonts/minecraftia.xml")}},{key:"create",value:function(){this.game.musicPlayer=new d.default(this.game),this.game.soundManager=new m.default(this.game),this.state.start("DeltaStorm",!0,!1)}},{key:"render",value:function(){}},{key:"loadUpdate",value:function(){var t=this;
// Log Loadingprogress
this.loadingprogress=this.load.onFileComplete.add(function(e){"undefined"==typeof ipc&&(t.text.text=e+"%"),console.log("%c Loadingprogress: "+e+" % ","background: #222; color: #bada55")})}}]),e}(h.default.State);e.default=y},/* 355 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s),l=i(94),h=(n(l),function(){function t(e){r(this,t),this.game=e,this.fadeDuration=2e3,this.globalVolume=0,this.fadeVolumeTo=1}return a(t,[{key:"initMap",value:function(t,e,i){var n=this;this.fadeDuration=i;var r=t.music;if(void 0===e||e)
// If Key is not undefined
if(void 0!==r)
// If Key is not a empty string
if(console.log("MusicKey is not undefined!"),""!==r)
// If music is currently playing
if(console.log(r),console.log(this.music),console.log("MusicKey is not a empty string!"),void 0!==this.music&&this.music.isPlaying){if(console.log(this.music.key,r),void 0!==this.music&&this.music.key==r)return void console.log("LET THE MUSIC CONTINUE OO");console.log("THIS SHOULD NOT FOLLOW IN LET THE MUSIC CON"),
// Fade it out
this.music.fadeOut(this.fadeDuration),
// Wait
this.game.time.events.add(o.default.Timer.SECOND*(this.fadeDuration/1e3),function(){
// Check if music is in cache
n.checkCache(r)?(
// Play music from cache
n.music=n.game.add.audio(r,n.globalVolume,!0),n.music.allowMultiple=!1,n.music.onDecoded.add(function(){n.music.play(),n.game.add.tween(n.music).to({volume:n.fadeVolumeTo},n.fadeDuration,o.default.Easing.Linear.None,!0)},n)):
// Load music and play it
n.loadMusic(r)})}else{if(void 0!==this.music&&this.music.key==r)return console.log(this.music.key,r),void console.log("LET THE MUSIC CONTINUE");console.log("INIT MUSIC"),
// Initalize music
// Check if music is in cache
this.checkCache(r)?(
// Play music from cache
this.music=this.game.add.audio(r,this.globalVolume,!0),this.music.allowMultiple=!1,this.music.onDecoded.add(function(){n.music.play(),n.game.add.tween(n.music).to({volume:n.fadeVolumeTo},n.fadeDuration,o.default.Easing.Linear.None,!0)},this)):
// Load music and play it
this.loadMusic(r)}else
// If no music is defined -> Fade out!
console.log("Empty String -> Fade out!"),console.log(r),this.music&&this.music.isPlaying&&(this.music.fadeOut(this.fadeDuration),this.game.time.events.add(o.default.Timer.SECOND*(this.fadeDuration/1e3),function(){console.log("DESTROY"),n.music.destroy(),n.music=void 0}));else console.warn("MusicKey undefined")}},{key:"fadeOut",value:function(){var t=this;this.music&&this.music.isPlaying&&(this.music.fadeOut(3e3),this.game.time.events.add(3*o.default.Timer.SECOND,function(){t.music.destroy(),t.music=void 0}))}},{key:"checkCache",value:function(t){return!!this.game.cache.checkSoundKey(t)}},{key:"loadMusic",value:function(t){var e=this;this.game.load.audio(t,"assets/music/"+t+".mp3"),this.game.load.start(),this.game.load.onLoadStart.add(function(){},this),this.game.load.onLoadComplete.add(function(){e.music=e.game.add.audio(t,e.globalVolume,!0),e.music.allowMultiple=!1,e.music.onDecoded.add(function(){
// this.music.fadeIn(this.fadeDuration, true);
e.music.play(),e.game.add.tween(e.music).to({volume:e.fadeVolumeTo},e.fadeDuration,o.default.Easing.Linear.None,!0)},e)},this)}}]),t}());e.default=h},/* 356 */
/***/
function(t,e,i){!function(e,i){t.exports=i()}(0,function(){/******/
return function(t){/******/
/******/
// The require function
/******/
function e(n){/******/
/******/
// Check if module is in cache
/******/
if(i[n])/******/
return i[n].exports;/******/
/******/
// Create a new module (and put it into the cache)
/******/
var r=i[n]={/******/
exports:{},/******/
id:n,/******/
loaded:!1};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}// webpackBootstrap
/******/
// The module cache
/******/
var i={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// __webpack_public_path__
/******/
return e.m=t,e.c=i,e.p="",e(0)}([/* 0 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(1),o=n(s),l=i(2),h=n(l),u=i(8),c=n(u),f=i(9),d=n(f),p=i(10),m=n(p),y=i(11),g=n(y),v=i(16),b=n(v),w=i(17),S=n(w),P=i(18),x=n(P),_=function(){function t(e){r(this,t),e=e||{},this._name="secure-ls",this.utils=o.default,this.constants=h.default,this.Base64=d.default,this.LZString=m.default,this.AES=g.default,this.DES=b.default,this.RABBIT=S.default,this.RC4=x.default,this.enc=c.default,this.config={isCompression:!0,encodingType:h.default.EncrytionTypes.BASE64},this.config.isCompression=void 0===e.isCompression||e.isCompression,this.config.encodingType=void 0!==e.encodingType||""===e.encodingType?e.encodingType.toLowerCase():h.default.EncrytionTypes.BASE64,this.config.encryptionSecret=e.encryptionSecret,this.ls=localStorage,this.init()}return a(t,[{key:"init",value:function(){var t=this.getMetaData()||{};this.WarningEnum=this.constants.WarningEnum,this.WarningTypes=this.constants.WarningTypes,this.EncrytionTypes=this.constants.EncrytionTypes,this._isBase64=this._isBase64EncryptionType(),this._isAES=this._isAESEncryptionType(),this._isDES=this._isDESEncryptionType(),this._isRabbit=this._isRabbitEncryptionType(),this._isRC4=this._isRC4EncryptionType(),this._isCompression=this._isDataCompressionEnabled(),
// fill the already present keys to the list of keys being used by secure-ls
this.utils.allKeys=t.keys||this.resetAllKeys()}},{key:"_isBase64EncryptionType",value:function(){return d.default&&(void 0===this.config.encodingType||this.config.encodingType===this.constants.EncrytionTypes.BASE64)}},{key:"_isAESEncryptionType",value:function(){return g.default&&this.config.encodingType===this.constants.EncrytionTypes.AES}},{key:"_isDESEncryptionType",value:function(){return b.default&&this.config.encodingType===this.constants.EncrytionTypes.DES}},{key:"_isRabbitEncryptionType",value:function(){return S.default&&this.config.encodingType===this.constants.EncrytionTypes.RABBIT}},{key:"_isRC4EncryptionType",value:function(){return x.default&&this.config.encodingType===this.constants.EncrytionTypes.RC4}},{key:"_isDataCompressionEnabled",value:function(){return this.config.isCompression}},{key:"getEncyptionSecret",value:function(t){var e=this.getMetaData()||{},i=this.utils.getObjectFromKey(e.keys,t);i&&(this._isAES||this._isDES||this._isRabbit||this._isRC4)&&(void 0===this.config.encryptionSecret?(this.utils.encryptionSecret=i.s,this.utils.encryptionSecret||(this.utils.encryptionSecret=this.utils.generateSecretKey(),this.setMetaData())):this.utils.encryptionSecret=this.config.encryptionSecret||i.s||"")}},{key:"get",value:function(t,e){var i="",n="",r=void 0,a=void 0,s=void 0;if(!this.utils.is(t))return this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED),n;if(!(s=this.getDataFromLocalStorage(t)))return n;r=s,// saves else
(this._isCompression||e)&&(
// meta data always compressed
r=m.default.decompress(s)),i=r,// saves else
this._isBase64||e?
// meta data always Base64
i=d.default.decode(r):(this.getEncyptionSecret(t),this._isAES?a=g.default.decrypt(r.toString(),this.utils.encryptionSecret):this._isDES?a=b.default.decrypt(r.toString(),this.utils.encryptionSecret):this._isRabbit?a=S.default.decrypt(r.toString(),this.utils.encryptionSecret):this._isRC4&&(a=x.default.decrypt(r.toString(),this.utils.encryptionSecret)),a&&(i=a.toString(c.default._Utf8)));try{n=JSON.parse(i)}catch(t){throw new Error("Could not parse JSON")}return n}},{key:"getDataFromLocalStorage",value:function(t){return this.ls.getItem(t,!0)}},{key:"getAllKeys",value:function(){var t=this.getMetaData();return this.utils.extractKeyNames(t)||[]}},{key:"set",value:function(t,e){var i="";if(!this.utils.is(t))return void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED);this.getEncyptionSecret(t),
// add key(s) to Array if not already added, only for keys other than meta key
String(t)!==String(this.utils.metaKey)&&(this.utils.isKeyPresent(t)||(this.utils.addToKeysList(t),this.setMetaData())),i=this.processData(e),
// Store the data to localStorage
this.setDataToLocalStorage(t,i)}},{key:"setDataToLocalStorage",value:function(t,e){this.ls.setItem(t,e)}},{key:"remove",value:function(t){return this.utils.is(t)?t===this.utils.metaKey&&this.getAllKeys().length?void this.utils.warn(this.WarningEnum.META_KEY_REMOVE):(this.utils.isKeyPresent(t)&&(this.utils.removeFromKeysList(t),this.setMetaData()),void this.ls.removeItem(t)):void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED)}},{key:"removeAll",value:function(){var t=void 0,e=void 0;for(t=this.getAllKeys(),e=0;e<t.length;e++)this.ls.removeItem(t[e]);this.ls.removeItem(this.utils.metaKey),this.resetAllKeys()}},{key:"clear",value:function(){this.ls.clear(),this.resetAllKeys()}},{key:"resetAllKeys",value:function(){return this.utils.allKeys=[],[]}},{key:"processData",value:function(t,e){if(!t)return"";var i=void 0,n=void 0,r=void 0;try{i=JSON.stringify(t)}catch(t){throw new Error("Could not stringify data.")}
// Encode Based on encoding type
// If not set, default to Base64 for securing data
// Compress data if set to true
return n=i,this._isBase64||e?n=d.default.encode(i):(this._isAES?n=g.default.encrypt(i,this.utils.encryptionSecret):this._isDES?n=b.default.encrypt(i,this.utils.encryptionSecret):this._isRabbit?n=S.default.encrypt(i,this.utils.encryptionSecret):this._isRC4&&(n=x.default.encrypt(i,this.utils.encryptionSecret)),n=n&&n.toString()),r=n,(this._isCompression||e)&&(r=m.default.compress(n)),r}},{key:"setMetaData",value:function(){var t=this.processData({keys:this.utils.allKeys},!0);
// Store the data to localStorage
this.setDataToLocalStorage(this.utils.metaKey,t)}},{key:"getMetaData",value:function(){return this.get(this.utils.metaKey,!0)}}]),t}();e.default=_,t.exports=e.default},/* 1 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(2),a=n(r),s=i(3),o=n(s),l=i(4),h=n(l),u={metaKey:"_secure__ls__metadata",encryptionSecret:"",secretPhrase:"s3cr3t$#@135^&*246",allKeys:[],is:function(t){return!!t},warn:function(t){t=t||a.default.WarningEnum.DEFAULT_TEXT,console.warn(a.default.WarningTypes[t])},generateSecretKey:function(){var t=o.default.random(16),e=(0,h.default)(this.secretPhrase,t,{keySize:4});return e&&e.toString()},getObjectFromKey:function(t,e){if(!t||!t.length)return{};var i=void 0,n={};for(i=0;i<t.length;i++)if(t[i].k===e){n=t[i];break}return n},extractKeyNames:function(t){return t&&t.keys&&t.keys.length?t.keys.map(function(t){return t.k}):[]},getAllKeys:function(){return this.allKeys},isKeyPresent:function(t){for(var e=!1,i=0;i<this.allKeys.length;i++)if(String(this.allKeys[i].k)===String(t)){e=!0;// found
break}return e},addToKeysList:function(t){this.allKeys.push({k:t,s:this.encryptionSecret})},removeFromKeysList:function(t){var e=void 0,i=-1;for(e=0;e<this.allKeys.length;e++)if(this.allKeys[e].k===t){i=e;break}return-1!==i&&this.allKeys.splice(i,1),i}};t.exports=u},/* 2 */
/***/
function(t,e){"use strict";var i={KEY_NOT_PROVIDED:"keyNotProvided",META_KEY_REMOVE:"metaKeyRemove",DEFAULT_TEXT:"defaultText"},n={};n[i.KEY_NOT_PROVIDED]="Secure LS: Key not provided. Aborting operation!",n[i.META_KEY_REMOVE]="Secure LS: Meta key can not be removed\nunless all keys created by Secure LS are removed!",n[i.DEFAULT_TEXT]="Unexpected output";var r={WarningEnum:i,WarningTypes:n,EncrytionTypes:{BASE64:"base64",AES:"aes",DES:"des",RABBIT:"rabbit",RC4:"rc4"}};t.exports=r},/* 3 */
/***/
function(t,e){"use strict";/*
	 ES6 compatible port of CryptoJS - WordArray for PBKDF2 password key generation
	
	 Source: https://github.com/brix/crypto-js
	 LICENSE: MIT
	 */
var i={};i.random=function(t){for(var e,i=[],n=0;n<t;n+=4){var r=function(t){var e=987654321,i=4294967295;return function(){e=36969*(65535&e)+(e>>16)&i,t=18e3*(65535&t)+(t>>16)&i;var n=(e<<16)+t&i;return n/=4294967296,(n+=.5)*(Math.random()>.5?1:-1)}}(4294967296*(e||Math.random()));e=987654071*r(),i.push(4294967296*r()|0)}return new this.Set(i,t)},i.Set=function(t,e){t=this.words=t||[],this.sigBytes=void 0!==e?e:8*t.length},t.exports=i},/* 4 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(5),i(6),i(7))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.Base,r=i.WordArray,a=e.algo,s=a.SHA1,o=a.HMAC,l=a.PBKDF2=n.extend({/**
		         * Configuration options.
		         *
		         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
		         * @property {Hasher} hasher The hasher to use. Default: SHA1
		         * @property {number} iterations The number of iterations to perform. Default: 1
		         */
cfg:n.extend({keySize:4,hasher:s,iterations:1}),/**
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
var i=this.cfg,n=o.create(i.hasher,t),a=r.create(),s=r.create([1]),l=a.words,h=s.words,u=i.keySize,c=i.iterations;l.length<u;){var f=n.update(e).finalize(s);n.reset();for(var d=f.words,p=d.length,m=f,y=1;y<c;y++){m=n.finalize(m),n.reset();
// XOR intermediate with block
for(var g=m.words,v=0;v<p;v++)d[v]^=g[v]}a.concat(f),h[0]++}return a.sigBytes=4*u,a}});/**
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
function(t,e,i){!function(i,n){
// CommonJS
t.exports=e=n()}(0,function(){/**
		 * CryptoJS core components.
		 */
var t=t||function(t,e){/**
		     * CryptoJS namespace.
		     */
var i={},n=i.lib={},r=n.Base=function(){function t(){}return{/**
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
clone:function(){return this.init.prototype.extend(this)}}}(),a=n.WordArray=r.extend({/**
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
var e=this.words,i=t.words,n=this.sigBytes,r=t.sigBytes;
// Concat
if(
// Clamp excess bits
this.clamp(),n%4)
// Copy one byte at a time
for(var a=0;a<r;a++){var s=i[a>>>2]>>>24-a%4*8&255;e[n+a>>>2]|=s<<24-(n+a)%4*8}else
// Copy one word at a time
for(var a=0;a<r;a+=4)e[n+a>>>2]=i[a>>>2];
// Chainable
return this.sigBytes+=r,this},/**
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
clone:function(){var t=r.clone.call(this);return t.words=this.words.slice(0),t},/**
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
random:function(e){for(var i,n=[],r=0;r<e;r+=4){var s=function(e){var e=e,i=987654321,n=4294967295;return function(){i=36969*(65535&i)+(i>>16)&n,e=18e3*(65535&e)+(e>>16)&n;var r=(i<<16)+e&n;return r/=4294967296,(r+=.5)*(t.random()>.5?1:-1)}}(4294967296*(i||t.random()));i=987654071*s(),n.push(4294967296*s()|0)}return new a.init(n,e)}}),s=i.enc={},o=s.Hex={/**
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
stringify:function(t){for(var e=t.words,i=t.sigBytes,n=[],r=0;r<i;r++){var a=e[r>>>2]>>>24-r%4*8&255;n.push((a>>>4).toString(16)),n.push((15&a).toString(16))}return n.join("")},/**
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
parse:function(t){for(var e=t.length,i=[],n=0;n<e;n+=2)i[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new a.init(i,e/2)}},l=s.Latin1={/**
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
stringify:function(t){for(var e=t.words,i=t.sigBytes,n=[],r=0;r<i;r++){var a=e[r>>>2]>>>24-r%4*8&255;n.push(String.fromCharCode(a))}return n.join("")},/**
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
parse:function(t){for(var e=t.length,i=[],n=0;n<e;n++)i[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new a.init(i,e)}},h=s.Utf8={/**
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
parse:function(t){return l.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=r.extend({/**
		         * Resets this block algorithm's data buffer to its initial state.
		         *
		         * @example
		         *
		         *     bufferedBlockAlgorithm.reset();
		         */
reset:function(){
// Initial values
this._data=new a.init,this._nDataBytes=0},/**
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
var i=this._data,n=i.words,r=i.sigBytes,s=this.blockSize,o=4*s,l=r/o;
// Round up to include partial blocks
l=e?t.ceil(l):t.max((0|l)-this._minBufferSize,0);
// Count words ready
var h=l*s,u=t.min(4*h,r);
// Process blocks
if(h){for(var c=0;c<h;c+=s)
// Perform concrete-algorithm logic
this._doProcessBlock(n,c);
// Remove processed words
var f=n.splice(0,h);i.sigBytes-=u}
// Return processed words
return new a.init(f,u)},/**
		         * Creates a copy of this object.
		         *
		         * @return {Object} The clone.
		         *
		         * @example
		         *
		         *     var clone = bufferedBlockAlgorithm.clone();
		         */
clone:function(){var t=r.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),c=(n.Hasher=u.extend({/**
		         * Configuration options.
		         */
cfg:r.extend(),/**
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
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(5))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.WordArray,r=i.Hasher,a=e.algo,s=[],o=a.SHA1=r.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){
// Computation
for(var i=this._hash.words,n=i[0],r=i[1],a=i[2],o=i[3],l=i[4],h=0;h<80;h++){if(h<16)s[h]=0|t[e+h];else{var u=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=u<<1|u>>>31}var c=(n<<5|n>>>27)+l+s[h];c+=h<20?1518500249+(r&a|~r&o):h<40?1859775393+(r^a^o):h<60?(r&a|r&o|a&o)-1894007588:(r^a^o)-899497514,l=o,o=a,a=r<<30|r>>>2,r=n,n=c}
// Intermediate hash value
i[0]=i[0]+n|0,i[1]=i[1]+r|0,i[2]=i[2]+a|0,i[3]=i[3]+o|0,i[4]=i[4]+l|0},_doFinalize:function(){
// Shortcuts
var t=this._data,e=t.words,i=8*this._nDataBytes,n=8*t.sigBytes;
// Return final computed hash
// Add padding
// Hash final blocks
return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=Math.floor(i/4294967296),e[15+(n+64>>>9<<4)]=i,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t}});/**
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
e.SHA1=r._createHelper(o),/**
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
e.HmacSHA1=r._createHmacHelper(o)}(),t.SHA1})},/* 7 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(5))}(0,function(t){!function(){
// Shortcuts
var e=t,i=e.lib,n=i.Base,r=e.enc,a=r.Utf8,s=e.algo;s.HMAC=n.extend({/**
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
"string"==typeof e&&(e=a.parse(e));
// Shortcuts
var i=t.blockSize,n=4*i;
// Allow arbitrary length keys
e.sigBytes>n&&(e=t.finalize(e)),
// Clamp excess bits
e.clamp();
// XOR keys with pad constants
for(var r=this._oKey=e.clone(),s=this._iKey=e.clone(),o=r.words,l=s.words,h=0;h<i;h++)o[h]^=1549556828,l[h]^=909522486;r.sigBytes=s.sigBytes=n,
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
var e=t.words,i=t.sigBytes,n=[],r=void 0,a=void 0;
// Convert
for(r=0;r<i;r++)a=e[r>>>2]>>>24-r%4*8&255,n.push(String.fromCharCode(a));return n.join("")}},i._Utf8={stringify:function(t){try{return decodeURIComponent(escape(i.Latin1.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}}},t.exports=i},/* 9 */
/***/
function(t,e){"use strict";var i={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e="",n=void 0,r=void 0,a=void 0,s=void 0,o=void 0,l=void 0,h=void 0,u=0;for(t=i._utf8Encode(t);u<t.length;)n=t.charCodeAt(u++),r=t.charCodeAt(u++),a=t.charCodeAt(u++),s=n>>2,o=(3&n)<<4|r>>4,l=(15&r)<<2|a>>6,h=63&a,isNaN(r)?l=h=64:isNaN(a)&&(h=64),e=e+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(l)+this._keyStr.charAt(h);return e},decode:function(t){var e="",n=void 0,r=void 0,a=void 0,s=void 0,o=void 0,l=void 0,h=void 0,u=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)s=this._keyStr.indexOf(t.charAt(u++)),o=this._keyStr.indexOf(t.charAt(u++)),l=this._keyStr.indexOf(t.charAt(u++)),h=this._keyStr.indexOf(t.charAt(u++)),n=s<<2|o>>4,r=(15&o)<<4|l>>2,a=(3&l)<<6|h,e+=String.fromCharCode(n),64!==l&&(e+=String.fromCharCode(r)),64!==h&&(e+=String.fromCharCode(a));return e=i._utf8Decode(e)},_utf8Encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",i=0;i<t.length;i++){var n=t.charCodeAt(i);n<128?e+=String.fromCharCode(n):n>127&&n<2048?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128))}return e},_utf8Decode:function(t){var e="",i=0,n=void 0,r=void 0,a=void 0;for(n=r=0;i<t.length;)n=t.charCodeAt(i),n<128?(e+=String.fromCharCode(n),i++):n>191&&n<224?(r=t.charCodeAt(i+1),e+=String.fromCharCode((31&n)<<6|63&r),i+=2):(r=t.charCodeAt(i+1),a=t.charCodeAt(i+2),e+=String.fromCharCode((15&n)<<12|(63&r)<<6|63&a),i+=3);return e}};t.exports=i},/* 10 */
/***/
function(t,e,i){var n,r=function(){function t(t,e){if(!r[t]){r[t]={};for(var i=0;i<t.length;i++)r[t][t.charAt(i)]=i}return r[t][e]}
// private property
var e=String.fromCharCode,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={},a={compressToBase64:function(t){if(null==t)return"";var e=a._compress(t,6,function(t){return i.charAt(t)});switch(e.length%4){// To produce valid Base64
default:// When could this happen ?
case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:a._decompress(e.length,32,function(n){return t(i,e.charAt(n))})},compressToUTF16:function(t){return null==t?"":a._compress(t,15,function(t){return e(t+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:a._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},
//compress into uint8array (UCS-2 big endian format)
compressToUint8Array:function(t){// 2 bytes per character
for(var e=a.compress(t),i=new Uint8Array(2*e.length),n=0,r=e.length;n<r;n++){var s=e.charCodeAt(n);i[2*n]=s>>>8,i[2*n+1]=s%256}return i},
//decompress from uint8array (UCS-2 big endian format)
decompressFromUint8Array:function(t){if(null===t||void 0===t)return a.decompress(t);// 2 bytes per character
for(var i=new Array(t.length/2),n=0,r=i.length;n<r;n++)i[n]=256*t[2*n]+t[2*n+1];var s=[];return i.forEach(function(t){s.push(e(t))}),a.decompress(s.join(""))},
//compress into a string that is already URI encoded
compressToEncodedURIComponent:function(t){return null==t?"":a._compress(t,6,function(t){return n.charAt(t)})},
//decompress from an output of compressToEncodedURIComponent
decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),a._decompress(e.length,32,function(i){return t(n,e.charAt(i))}))},compress:function(t){return a._compress(t,16,function(t){return e(t)})},_compress:function(t,e,i){if(null==t)return"";var n,r,a,s={},o={},l="",h="",u="",c=2,// Compensate for the first entry which should not count
f=3,d=2,p=[],m=0,y=0;for(a=0;a<t.length;a+=1)if(l=t.charAt(a),Object.prototype.hasOwnProperty.call(s,l)||(s[l]=f++,o[l]=!0),h=u+l,Object.prototype.hasOwnProperty.call(s,h))u=h;else{if(Object.prototype.hasOwnProperty.call(o,u)){if(u.charCodeAt(0)<256){for(n=0;n<d;n++)m<<=1,y==e-1?(y=0,p.push(i(m)),m=0):y++;for(r=u.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r>>=1}else{for(r=1,n=0;n<d;n++)m=m<<1|r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r=0;for(r=u.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r>>=1}c--,0==c&&(c=Math.pow(2,d),d++),delete o[u]}else for(r=s[u],n=0;n<d;n++)m=m<<1|1&r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r>>=1;c--,0==c&&(c=Math.pow(2,d),d++),
// Add wc to the dictionary.
s[h]=f++,u=String(l)}
// Output the code for w.
if(""!==u){if(Object.prototype.hasOwnProperty.call(o,u)){if(u.charCodeAt(0)<256){for(n=0;n<d;n++)m<<=1,y==e-1?(y=0,p.push(i(m)),m=0):y++;for(r=u.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r>>=1}else{for(r=1,n=0;n<d;n++)m=m<<1|r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r=0;for(r=u.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r>>=1}c--,0==c&&(c=Math.pow(2,d),d++),delete o[u]}else for(r=s[u],n=0;n<d;n++)m=m<<1|1&r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r>>=1;c--,0==c&&(c=Math.pow(2,d),d++)}for(
// Mark the end of the stream
r=2,n=0;n<d;n++)m=m<<1|1&r,y==e-1?(y=0,p.push(i(m)),m=0):y++,r>>=1;
// Flush the last char
for(;;){if(m<<=1,y==e-1){p.push(i(m));break}y++}return p.join("")},decompress:function(t){return null==t?"":""==t?null:a._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(t,i,n){var r,a,s,o,l,h,u,c=[],f=4,d=4,p=3,m="",y=[],g={val:n(0),position:i,index:1};for(r=0;r<3;r+=1)c[r]=r;for(s=0,l=Math.pow(2,2),h=1;h!=l;)o=g.val&g.position,g.position>>=1,0==g.position&&(g.position=i,g.val=n(g.index++)),s|=(o>0?1:0)*h,h<<=1;switch(s){case 0:for(s=0,l=Math.pow(2,8),h=1;h!=l;)o=g.val&g.position,g.position>>=1,0==g.position&&(g.position=i,g.val=n(g.index++)),s|=(o>0?1:0)*h,h<<=1;u=e(s);break;case 1:for(s=0,l=Math.pow(2,16),h=1;h!=l;)o=g.val&g.position,g.position>>=1,0==g.position&&(g.position=i,g.val=n(g.index++)),s|=(o>0?1:0)*h,h<<=1;u=e(s);break;case 2:return""}for(c[3]=u,a=u,y.push(u);;){if(g.index>t)return"";for(s=0,l=Math.pow(2,p),h=1;h!=l;)o=g.val&g.position,g.position>>=1,0==g.position&&(g.position=i,g.val=n(g.index++)),s|=(o>0?1:0)*h,h<<=1;switch(u=s){case 0:for(s=0,l=Math.pow(2,8),h=1;h!=l;)o=g.val&g.position,g.position>>=1,0==g.position&&(g.position=i,g.val=n(g.index++)),s|=(o>0?1:0)*h,h<<=1;c[d++]=e(s),u=d-1,f--;break;case 1:for(s=0,l=Math.pow(2,16),h=1;h!=l;)o=g.val&g.position,g.position>>=1,0==g.position&&(g.position=i,g.val=n(g.index++)),s|=(o>0?1:0)*h,h<<=1;c[d++]=e(s),u=d-1,f--;break;case 2:return y.join("")}if(0==f&&(f=Math.pow(2,p),p++),c[u])m=c[u];else{if(u!==d)return null;m=a+a.charAt(0)}y.push(m),
// Add w+entry[0] to the dictionary.
c[d++]=a+m.charAt(0),f--,a=m,0==f&&(f=Math.pow(2,p),p++)}}};return a}();void 0!==(n=function(){return r}.call(e,i,e,t))&&(t.exports=n)},/* 11 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.BlockCipher,r=e.algo,a=[],s=[],o=[],l=[],h=[],u=[],c=[],f=[],d=[],p=[];
// Compute lookup tables
!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;for(var i=0,n=0,e=0;e<256;e++){
// Compute sbox
var r=n^n<<1^n<<2^n<<3^n<<4;r=r>>>8^255&r^99,a[i]=r,s[r]=i;
// Compute multiplication
var m=t[i],y=t[m],g=t[y],v=257*t[r]^16843008*r;o[i]=v<<24|v>>>8,l[i]=v<<16|v>>>16,h[i]=v<<8|v>>>24,u[i]=v;
// Compute inv sub bytes, inv mix columns tables
var v=16843009*g^65537*y^257*m^16843008*i;c[r]=v<<24|v>>>8,f[r]=v<<16|v>>>16,d[r]=v<<8|v>>>24,p[r]=v,
// Compute next counter
i?(i=m^t[t[t[g^m]]],n^=t[t[n]]):i=n=1}}();
// Precomputed Rcon lookup
var m=[0,1,2,4,8,16,32,64,128,27,54],y=r.AES=n.extend({_doReset:function(){for(var t=this._key,e=t.words,i=t.sigBytes/4,n=this._nRounds=i+6,r=4*(n+1),s=this._keySchedule=[],o=0;o<r;o++)if(o<i)s[o]=e[o];else{var l=s[o-1];o%i?i>6&&o%i==4&&(
// Sub word
l=a[l>>>24]<<24|a[l>>>16&255]<<16|a[l>>>8&255]<<8|a[255&l]):(
// Rot word
l=l<<8|l>>>24,
// Sub word
l=a[l>>>24]<<24|a[l>>>16&255]<<16|a[l>>>8&255]<<8|a[255&l],
// Mix Rcon
l^=m[o/i|0]<<24),s[o]=s[o-i]^l}for(var h=this._invKeySchedule=[],u=0;u<r;u++){var o=r-u;if(u%4)var l=s[o];else var l=s[o-4];h[u]=u<4||o<=4?l:c[a[l>>>24]]^f[a[l>>>16&255]]^d[a[l>>>8&255]]^p[a[255&l]]}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,l,h,u,a)},decryptBlock:function(t,e){
// Swap 2nd and 4th rows
var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i,this._doCryptBlock(t,e,this._invKeySchedule,c,f,d,p,s);
// Inv swap 2nd and 4th rows
var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i},_doCryptBlock:function(t,e,i,n,r,a,s,o){
// Rounds
for(var l=this._nRounds,h=t[e]^i[0],u=t[e+1]^i[1],c=t[e+2]^i[2],f=t[e+3]^i[3],d=4,p=1;p<l;p++){
// Shift rows, sub bytes, mix columns, add round key
var m=n[h>>>24]^r[u>>>16&255]^a[c>>>8&255]^s[255&f]^i[d++],y=n[u>>>24]^r[c>>>16&255]^a[f>>>8&255]^s[255&h]^i[d++],g=n[c>>>24]^r[f>>>16&255]^a[h>>>8&255]^s[255&u]^i[d++],v=n[f>>>24]^r[h>>>16&255]^a[u>>>8&255]^s[255&c]^i[d++];
// Update state
h=m,u=y,c=g,f=v}
// Shift rows, sub bytes, add round key
var m=(o[h>>>24]<<24|o[u>>>16&255]<<16|o[c>>>8&255]<<8|o[255&f])^i[d++],y=(o[u>>>24]<<24|o[c>>>16&255]<<16|o[f>>>8&255]<<8|o[255&h])^i[d++],g=(o[c>>>24]<<24|o[f>>>16&255]<<16|o[h>>>8&255]<<8|o[255&u])^i[d++],v=(o[f>>>24]<<24|o[h>>>16&255]<<16|o[u>>>8&255]<<8|o[255&c])^i[d++];
// Set output
t[e]=m,t[e+1]=y,t[e+2]=g,t[e+3]=v},keySize:8});/**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
		     */
e.AES=n._createHelper(y)}(),t.AES})},/* 12 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(5))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.WordArray,r=e.enc;r.Base64={/**
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
var e=t.words,i=t.sigBytes,n=this._map;
// Clamp excess bits
t.clamp();for(var r=[],a=0;a<i;a+=3)for(var s=e[a>>>2]>>>24-a%4*8&255,o=e[a+1>>>2]>>>24-(a+1)%4*8&255,l=e[a+2>>>2]>>>24-(a+2)%4*8&255,h=s<<16|o<<8|l,u=0;u<4&&a+.75*u<i;u++)r.push(n.charAt(h>>>6*(3-u)&63));
// Add padding
var c=n.charAt(64);if(c)for(;r.length%4;)r.push(c);return r.join("")},/**
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
var e=t.length,i=this._map,r=i.charAt(64);if(r){var a=t.indexOf(r);-1!=a&&(e=a)}for(var s=[],o=0,l=0;l<e;l++)if(l%4){var h=i.indexOf(t.charAt(l-1))<<l%4*2,u=i.indexOf(t.charAt(l))>>>6-l%4*2,c=h|u;s[o>>>2]|=c<<24-o%4*8,o++}return n.create(s,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64})},/* 13 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(5))}(0,function(t){return function(e){function i(t,e,i,n,r,a,s){var o=t+(e&i|~e&n)+r+s;return(o<<a|o>>>32-a)+e}function n(t,e,i,n,r,a,s){var o=t+(e&n|i&~n)+r+s;return(o<<a|o>>>32-a)+e}function r(t,e,i,n,r,a,s){var o=t+(e^i^n)+r+s;return(o<<a|o>>>32-a)+e}function a(t,e,i,n,r,a,s){var o=t+(i^(e|~n))+r+s;return(o<<a|o>>>32-a)+e}
// Shortcuts
var s=t,o=s.lib,l=o.WordArray,h=o.Hasher,u=s.algo,c=[];
// Compute constants
!function(){for(var t=0;t<64;t++)c[t]=4294967296*e.abs(e.sin(t+1))|0}();/**
		     * MD5 hash algorithm.
		     */
var f=u.MD5=h.extend({_doReset:function(){this._hash=new l.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){
// Swap endian
for(var s=0;s<16;s++){
// Shortcuts
var o=e+s,l=t[o];t[o]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}
// Shortcuts
var h=this._hash.words,u=t[e+0],f=t[e+1],d=t[e+2],p=t[e+3],m=t[e+4],y=t[e+5],g=t[e+6],v=t[e+7],b=t[e+8],w=t[e+9],S=t[e+10],P=t[e+11],x=t[e+12],_=t[e+13],k=t[e+14],T=t[e+15],M=h[0],O=h[1],E=h[2],D=h[3];
// Computation
M=i(M,O,E,D,u,7,c[0]),D=i(D,M,O,E,f,12,c[1]),E=i(E,D,M,O,d,17,c[2]),O=i(O,E,D,M,p,22,c[3]),M=i(M,O,E,D,m,7,c[4]),D=i(D,M,O,E,y,12,c[5]),E=i(E,D,M,O,g,17,c[6]),O=i(O,E,D,M,v,22,c[7]),M=i(M,O,E,D,b,7,c[8]),D=i(D,M,O,E,w,12,c[9]),E=i(E,D,M,O,S,17,c[10]),O=i(O,E,D,M,P,22,c[11]),M=i(M,O,E,D,x,7,c[12]),D=i(D,M,O,E,_,12,c[13]),E=i(E,D,M,O,k,17,c[14]),O=i(O,E,D,M,T,22,c[15]),M=n(M,O,E,D,f,5,c[16]),D=n(D,M,O,E,g,9,c[17]),E=n(E,D,M,O,P,14,c[18]),O=n(O,E,D,M,u,20,c[19]),M=n(M,O,E,D,y,5,c[20]),D=n(D,M,O,E,S,9,c[21]),E=n(E,D,M,O,T,14,c[22]),O=n(O,E,D,M,m,20,c[23]),M=n(M,O,E,D,w,5,c[24]),D=n(D,M,O,E,k,9,c[25]),E=n(E,D,M,O,p,14,c[26]),O=n(O,E,D,M,b,20,c[27]),M=n(M,O,E,D,_,5,c[28]),D=n(D,M,O,E,d,9,c[29]),E=n(E,D,M,O,v,14,c[30]),O=n(O,E,D,M,x,20,c[31]),M=r(M,O,E,D,y,4,c[32]),D=r(D,M,O,E,b,11,c[33]),E=r(E,D,M,O,P,16,c[34]),O=r(O,E,D,M,k,23,c[35]),M=r(M,O,E,D,f,4,c[36]),D=r(D,M,O,E,m,11,c[37]),E=r(E,D,M,O,v,16,c[38]),O=r(O,E,D,M,S,23,c[39]),M=r(M,O,E,D,_,4,c[40]),D=r(D,M,O,E,u,11,c[41]),E=r(E,D,M,O,p,16,c[42]),O=r(O,E,D,M,g,23,c[43]),M=r(M,O,E,D,w,4,c[44]),D=r(D,M,O,E,x,11,c[45]),E=r(E,D,M,O,T,16,c[46]),O=r(O,E,D,M,d,23,c[47]),M=a(M,O,E,D,u,6,c[48]),D=a(D,M,O,E,v,10,c[49]),E=a(E,D,M,O,k,15,c[50]),O=a(O,E,D,M,y,21,c[51]),M=a(M,O,E,D,x,6,c[52]),D=a(D,M,O,E,p,10,c[53]),E=a(E,D,M,O,S,15,c[54]),O=a(O,E,D,M,f,21,c[55]),M=a(M,O,E,D,b,6,c[56]),D=a(D,M,O,E,T,10,c[57]),E=a(E,D,M,O,g,15,c[58]),O=a(O,E,D,M,_,21,c[59]),M=a(M,O,E,D,m,6,c[60]),D=a(D,M,O,E,P,10,c[61]),E=a(E,D,M,O,d,15,c[62]),O=a(O,E,D,M,w,21,c[63]),
// Intermediate hash value
h[0]=h[0]+M|0,h[1]=h[1]+O|0,h[2]=h[2]+E|0,h[3]=h[3]+D|0},_doFinalize:function(){
// Shortcuts
var t=this._data,i=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;
// Add padding
i[r>>>5]|=128<<24-r%32;var a=e.floor(n/4294967296),s=n;i[15+(r+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),i[14+(r+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(i.length+1),
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
s.MD5=h._createHelper(f),/**
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
s.HmacMD5=h._createHmacHelper(f)}(Math),t.MD5})},/* 14 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(5),i(6),i(7))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.Base,r=i.WordArray,a=e.algo,s=a.MD5,o=a.EvpKDF=n.extend({/**
		         * Configuration options.
		         *
		         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
		         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
		         * @property {number} iterations The number of iterations to perform. Default: 1
		         */
cfg:n.extend({keySize:4,hasher:s,iterations:1}),/**
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
var i=this.cfg,n=i.hasher.create(),a=r.create(),s=a.words,o=i.keySize,l=i.iterations;s.length<o;){h&&n.update(h);var h=n.update(t).finalize(e);n.reset();
// Iterations
for(var u=1;u<l;u++)h=n.finalize(h),n.reset();a.concat(h)}return a.sigBytes=4*o,a}});/**
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
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(5))}(0,function(t){/**
		 * Cipher core components.
		 */
t.lib.Cipher||function(e){
// Shortcuts
var i=t,n=i.lib,r=n.Base,a=n.WordArray,s=n.BufferedBlockAlgorithm,o=i.enc,l=(o.Utf8,o.Base64),h=i.algo,u=h.EvpKDF,c=n.Cipher=s.extend({/**
		         * Configuration options.
		         *
		         * @property {WordArray} iv The IV to use for this operation.
		         */
cfg:r.extend(),/**
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
s.reset.call(this),
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
_createHelper:function(){function t(t){return"string"==typeof t?x:w}return function(e){return{encrypt:function(i,n,r){return t(n).encrypt(e,i,n,r)},decrypt:function(i,n,r){return t(n).decrypt(e,i,n,r)}}}}()}),f=(n.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),i.mode={}),d=n.BlockCipherMode=r.extend({/**
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
init:function(t,e){this._cipher=t,this._iv=e}}),p=f.CBC=function(){function t(t,i,n){
// Shortcut
var r=this._iv;
// Choose mixing block
if(r){var a=r;
// Remove IV for subsequent blocks
this._iv=e}else var a=this._prevBlock;
// XOR blocks
for(var s=0;s<n;s++)t[i+s]^=a[s]}/**
		         * Abstract base CBC mode.
		         */
var i=d.extend();/**
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
var n=this._cipher,r=n.blockSize;
// XOR and encrypt
t.call(this,e,i,r),n.encryptBlock(e,i),
// Remember this block to use with next block
this._prevBlock=e.slice(i,i+r)}}),i.Decryptor=i.extend({/**
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
var n=this._cipher,r=n.blockSize,a=e.slice(i,i+r);
// Decrypt and XOR
n.decryptBlock(e,i),t.call(this,e,i,r),
// This block becomes the previous block
this._prevBlock=a}}),i}(),m=i.pad={},y=m.Pkcs7={/**
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
pad:function(t,e){for(var i=4*e,n=i-t.sigBytes%i,r=n<<24|n<<16|n<<8|n,s=[],o=0;o<n;o+=4)s.push(r);var l=a.create(s,n);
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
t.sigBytes-=e}},g=(n.BlockCipher=c.extend({/**
		         * Configuration options.
		         *
		         * @property {Mode} mode The block mode to use. Default: CBC
		         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
		         */
cfg:c.cfg.extend({mode:p,padding:y}),reset:function(){
// Reset cipher
c.reset.call(this);
// Shortcuts
var t=this.cfg,e=t.iv,i=t.mode;
// Reset block mode
if(this._xformMode==this._ENC_XFORM_MODE)var n=i.createEncryptor;else/* if (this._xformMode == this._DEC_XFORM_MODE) */{var n=i.createDecryptor;
// Keep at least one block in the buffer for unpadding
this._minBufferSize=1}this._mode=n.call(i,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){
// Shortcut
var t=this.cfg.padding;
// Finalize
if(this._xformMode==this._ENC_XFORM_MODE){
// Pad data
t.pad(this._data,this.blockSize);
// Process final blocks
var e=this._process(!0)}else/* if (this._xformMode == this._DEC_XFORM_MODE) */{
// Process final blocks
var e=this._process(!0);
// Unpad data
t.unpad(e)}return e},blockSize:4}),n.CipherParams=r.extend({/**
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
if(i)var n=a.create([1398893684,1701076831]).concat(i).concat(e);else var n=e;return n.toString(l)},/**
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
var n=a.create(i.slice(2,4));
// Remove salt from ciphertext
i.splice(0,4),e.sigBytes-=16}return g.create({ciphertext:e,salt:n})}},w=n.SerializableCipher=r.extend({/**
		         * Configuration options.
		         *
		         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
		         */
cfg:r.extend({format:b}),/**
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
encrypt:function(t,e,i,n){
// Apply config defaults
n=this.cfg.extend(n);
// Encrypt
var r=t.createEncryptor(i,n),a=r.finalize(e),s=r.cfg;
// Create and return serializable cipher params
return g.create({ciphertext:a,key:i,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:n.format})},/**
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
decrypt:function(t,e,i,n){
// Apply config defaults
// Convert string to CipherParams
return n=this.cfg.extend(n),e=this._parse(e,n.format),t.createDecryptor(i,n).finalize(e.ciphertext)},/**
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
_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),S=i.kdf={},P=S.OpenSSL={/**
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
execute:function(t,e,i,n){
// Generate random salt
n||(n=a.random(8));
// Derive key and IV
var r=u.create({keySize:e+i}).compute(t,n),s=a.create(r.words.slice(e),4*i);
// Return params
return r.sigBytes=4*e,g.create({key:r,iv:s,salt:n})}},x=n.PasswordBasedCipher=w.extend({/**
		         * Configuration options.
		         *
		         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
		         */
cfg:w.cfg.extend({kdf:P}),/**
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
encrypt:function(t,e,i,n){
// Apply config defaults
n=this.cfg.extend(n);
// Derive key and other params
var r=n.kdf.execute(i,t.keySize,t.ivSize);
// Add IV to config
n.iv=r.iv;
// Encrypt
var a=w.encrypt.call(this,t,e,r.key,n);
// Mix in derived params
return a.mixIn(r),a},/**
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
decrypt:function(t,e,i,n){
// Apply config defaults
n=this.cfg.extend(n),
// Convert string to CipherParams
e=this._parse(e,n.format);
// Derive key and other params
var r=n.kdf.execute(i,t.keySize,t.ivSize,e.salt);
// Add IV to config
return n.iv=r.iv,w.decrypt.call(this,t,e,r.key,n)}})}()})},/* 16 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){
// Swap bits across the left and right words
function e(t,e){var i=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=i,this._lBlock^=i<<t}function i(t,e){var i=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=i,this._rBlock^=i<<t}
// Shortcuts
var n=t,r=n.lib,a=r.WordArray,s=r.BlockCipher,o=n.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],h=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],c=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=o.DES=s.extend({_doReset:function(){for(var t=this._key,e=t.words,i=[],n=0;n<56;n++){var r=l[n]-1;i[n]=e[r>>>5]>>>31-r%32&1}for(var a=this._subKeys=[],s=0;s<16;s++){
// Select 48 bits according to PC2
for(var o=a[s]=[],c=u[s],n=0;n<24;n++)
// Select from the left 28 key bits
o[n/6|0]|=i[(h[n]-1+c)%28]<<31-n%6,
// Select from the right 28 key bits
o[4+(n/6|0)]|=i[28+(h[n+24]-1+c)%28]<<31-n%6;
// Since each subkey is applied to an expanded 32-bit input,
// the subkey can be broken into 8 values scaled to 32-bits,
// which allows the key to be used without expansion
o[0]=o[0]<<1|o[0]>>>31;for(var n=1;n<7;n++)o[n]=o[n]>>>4*(n-1)+3;o[7]=o[7]<<5|o[7]>>>27}for(var f=this._invSubKeys=[],n=0;n<16;n++)f[n]=a[15-n]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,n,r){
// Get input
this._lBlock=t[n],this._rBlock=t[n+1],
// Initial permutation
e.call(this,4,252645135),e.call(this,16,65535),i.call(this,2,858993459),i.call(this,8,16711935),e.call(this,1,1431655765);
// Rounds
for(var a=0;a<16;a++){for(var s=r[a],o=this._lBlock,l=this._rBlock,h=0,u=0;u<8;u++)h|=c[u][((l^s[u])&f[u])>>>0];this._lBlock=l,this._rBlock=o^h}
// Undo swap from last round
var d=this._lBlock;this._lBlock=this._rBlock,this._rBlock=d,
// Final permutation
e.call(this,1,1431655765),i.call(this,8,16711935),i.call(this,2,858993459),e.call(this,16,65535),e.call(this,4,252645135),
// Set output
t[n]=this._lBlock,t[n+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});/**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
		     */
n.DES=s._createHelper(d);/**
		     * Triple-DES block cipher algorithm.
		     */
var p=o.TripleDES=s.extend({_doReset:function(){
// Shortcuts
var t=this._key,e=t.words;
// Create DES instances
this._des1=d.createEncryptor(a.create(e.slice(0,2))),this._des2=d.createEncryptor(a.create(e.slice(2,4))),this._des3=d.createEncryptor(a.create(e.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});/**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
		     */
n.TripleDES=s._createHelper(p)}(),t.TripleDES})},/* 17 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){function e(){
// Save old counter values
for(var t=this._X,e=this._C,i=0;i<8;i++)o[i]=e[i];
// Calculate new counter values
e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<o[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<o[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<o[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<o[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<o[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<o[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<o[6]>>>0?1:0)|0,this._b=e[7]>>>0<o[7]>>>0?1:0;
// Calculate the g-values
for(var i=0;i<8;i++){var n=t[i]+e[i],r=65535&n,a=n>>>16,s=((r*r>>>17)+r*a>>>15)+a*a,h=((4294901760&n)*n|0)+((65535&n)*n|0);
// High XOR low
l[i]=s^h}
// Calculate new state values
t[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,t[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,t[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,t[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,t[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,t[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,t[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,t[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}
// Shortcuts
var i=t,n=i.lib,r=n.StreamCipher,a=i.algo,s=[],o=[],l=[],h=a.Rabbit=r.extend({_doReset:function(){
// Swap endian
for(var t=this._key.words,i=this.cfg.iv,n=0;n<4;n++)t[n]=16711935&(t[n]<<8|t[n]>>>24)|4278255360&(t[n]<<24|t[n]>>>8);
// Generate initial state values
var r=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],a=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];
// Carry bit
this._b=0;
// Iterate the system four times
for(var n=0;n<4;n++)e.call(this);
// Modify the counters
for(var n=0;n<8;n++)a[n]^=r[n+4&7];
// IV setup
if(i){
// Shortcuts
var s=i.words,o=s[0],l=s[1],h=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),u=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8),c=h>>>16|4294901760&u,f=u<<16|65535&h;
// Modify counter values
a[0]^=h,a[1]^=c,a[2]^=u,a[3]^=f,a[4]^=h,a[5]^=c,a[6]^=u,a[7]^=f;
// Iterate the system four times
for(var n=0;n<4;n++)e.call(this)}},_doProcessBlock:function(t,i){
// Shortcut
var n=this._X;
// Iterate the system
e.call(this),
// Generate four keystream words
s[0]=n[0]^n[5]>>>16^n[3]<<16,s[1]=n[2]^n[7]>>>16^n[5]<<16,s[2]=n[4]^n[1]>>>16^n[7]<<16,s[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)
// Swap endian
s[r]=16711935&(s[r]<<8|s[r]>>>24)|4278255360&(s[r]<<24|s[r]>>>8),
// Encrypt
t[i+r]^=s[r]},blockSize:4,ivSize:2});/**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
		     */
i.Rabbit=r._createHelper(h)}(),t.Rabbit})},/* 18 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(5),i(12),i(13),i(14),i(15))}(0,function(t){return function(){function e(){for(var t=this._S,e=this._i,i=this._j,n=0,r=0;r<4;r++){e=(e+1)%256,i=(i+t[e])%256;
// Swap
var a=t[e];t[e]=t[i],t[i]=a,n|=t[(t[e]+t[i])%256]<<24-8*r}
// Update counters
return this._i=e,this._j=i,n}
// Shortcuts
var i=t,n=i.lib,r=n.StreamCipher,a=i.algo,s=a.RC4=r.extend({_doReset:function(){for(var t=this._key,e=t.words,i=t.sigBytes,n=this._S=[],r=0;r<256;r++)n[r]=r;
// Key setup
for(var r=0,a=0;r<256;r++){var s=r%i,o=e[s>>>2]>>>24-s%4*8&255;a=(a+n[r]+o)%256;
// Swap
var l=n[r];n[r]=n[a],n[a]=l}
// Counters
this._i=this._j=0},_doProcessBlock:function(t,i){t[i]^=e.call(this)},keySize:8,ivSize:0});/**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
		     */
i.RC4=r._createHelper(s);/**
		     * Modified RC4 stream cipher algorithm.
		     */
var o=a.RC4Drop=s.extend({/**
		         * Configuration options.
		         *
		         * @property {number} drop The number of keystream words to drop. Default 192
		         */
cfg:s.cfg.extend({drop:192}),_doReset:function(){s._doReset.call(this);
// Drop
for(var t=this.cfg.drop;t>0;t--)e.call(this)}});/**
		     * Shortcut functions to the cipher's object interface.
		     *
		     * @example
		     *
		     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
		     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
		     */
i.RC4Drop=r._createHelper(o)}(),t.RC4})}])})},/* 357 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=function(t){return t&&t.__esModule?t:{default:t}}(a),o=function(){function t(e){n(this,t),this.game=e,this.fadeDuration=2e3,this.globalVolume=0,this.fadeVolumeTo=1,this.fadeDuration=2e3}return r(t,[{key:"initSound",value:function(t){var e=this;
// If Key is not undefined
void 0!==t?(console.log("SoundKey is not undefined!"),
// If Key is not a empty string
""!==t?(console.log("SoundKey is not a empty string!"),
// If Sound is currently playing
this.sound&&this.sound.isPlaying&&this.sound.key!==t?(
// Fade it out
this.sound.fadeOut(this.fadeDuration),
// Wait
this.game.time.events.add(s.default.Timer.SECOND*(this.fadeDuration/1e3),function(){
// Check if sound is in cache
e.checkCache(t)?(
// Play sound from cache
e.sound=e.game.add.audio(t,e.globalVolume,!0),e.sound.onDecoded.add(function(){e.sound.play(),e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,s.default.Easing.Linear.None,!0)},e)):
// Load Sound and play it
e.loadSound(t)})):
// Initalize Sound
// Check if sound is in cache
this.checkCache(t)?(
// Play sound from cache
this.sound=this.game.add.audio(t,this.globalVolume,!0),this.sound.onDecoded.add(function(){e.sound.play(),e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,s.default.Easing.Linear.None,!0)},this)):
// Load Sound and play it
this.loadSound(t)):(
// If no sound is defined -> Fade out!
console.log("Empty String -> Fade out!"),this.sound&&this.sound.isPlaying&&this.sound.fadeOut(this.fadeDuration))):console.warn("SoundKey undefined")}},{key:"checkCache",value:function(t){return!!this.game.cache.checkSoundKey(t)}},{key:"loadSound",value:function(t){var e=this;this.game.load.audio(t,"assets/sounds/"+t+".mp3"),this.game.load.start(),this.game.load.onLoadStart.add(function(){},this),this.game.load.onLoadComplete.add(function(){e.sound=e.game.add.audio(t,e.globalVolume,!0),e.sound.onDecoded.add(function(){e.sound.play(),e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,s.default.Easing.Linear.None,!0)},e)},this)}},{key:"fadeOut",value:function(){var t=this;this.sound&&this.sound.isPlaying&&(this.sound.fadeOut(3e3),this.game.time.events.add(3*s.default.Timer.SECOND,function(){t.sound.destroy(),t.sound=void 0}))}}]),t}();e.default=o},/* 358 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(3),h=n(l),u=i(359),c=n(u),f=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),o(e,[{key:"init",value:function(t){this.instruction=void 0!=t&&t,console.log("%c GameState ","background: #0061ff; color: #bada55")}},{key:"create",value:function(){navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")||(this.input.onDown.add(this.toggleFullScreen,this),this.input.onTap.add(this.toggleFullScreen,this,null,"onTap")),this.level=new c.default(this.game,this.instruction)}},{key:"update",value:function(){this.level.update()}},{key:"paused",value:function(){console.log("PAUSED")}},{key:"resumed",value:function(){}},{key:"render",value:function(){}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(h.default.State);e.default=f},/* 359 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s);i(93);var l=i(138),h=(n(l),i(135)),u=n(h),c=i(139),f=n(c),d=i(360),p=n(d),m=i(95),y=(n(m),i(361)),g=n(y),v=i(140),b=(n(v),i(134)),w=n(b),S=i(137),P=(n(S),i(136)),x=n(P),_=i(94),k=n(_),T=i(362),M=n(T),O=i(363),E=n(O),D=i(365),C=n(D),A=i(366),B=n(A),L=i(367),I=n(L),N=i(372),F=n(N),R=i(19),j=n(R),G=function(){function t(e,i){r(this,t),this.game=e,this.GUICLASS=new I.default(this.game,this),this.battery=new F.default(this.game,this),this.safe=new k.default(this.game),this.questManager=new C.default(this.game,this),this.gameData=this.safe.getGameConfig(),this.itemIDs=this.safe.getItemIDs(),this.playedDialogues=this.safe.getPlayedDialogues(),this.currentMap=this.gameData.currentMap,this.restartType=i.restartType,this.dayCycle=!1,this.foreGroundShift=!1,this.fallDown=!1,this.fallDownSwitch=!0,this.fallDownCounter=0,this.fallDownLayer=0,
// Arrays
this.characters=[],this.items=[],this.activatedBridges=[],this.enemies=[],this.emitter=[],
// Accesspoints
this.startPoint={},this.customStartPoints=[],this.defaultStartPoint={},
// Method
this.loadLevel()}return a(t,[{key:"loadLevel",value:function(){
// Load Map
this.initMap(),
// Start Sound and Music
this.initSoundandMusic(),
// Load Entry Points
this.loadEntryPoints(),
// Create Player
this.player=new u.default(this.game,this.startPoint.x,this.startPoint.y,this),
// Create Lucy
this.lucy=!!j.default.lucy&&new M.default(this.game,this.player.x+10,this.player.y-10,this),
// Set Player inside GUIClass
this.GUICLASS.setLevel(this),
// Load Items
this.loadItems(),
// Load Enemies
j.default.enemies&&this.loadEnemies(),
// Load GamePeople
this.loadPeople(),
// Load Custom Emitter
this.loadEmitter(),
// EventManager
this.eventManager=new E.default(this.game,this),
// Create Weather
this.weather=new g.default(this.game,this.tilemapProperties.weather,this,this.backgroundLayer),
// Daycycle Class
this.dayCycleClass=new B.default(this.game,this),
// Saving Notification
this.GUICLASS.createNotification("saving","Saving ..."),
// Init InputClass
this.inputClass=new w.default(this.game,this)}},{key:"loadEntryPoints",value:function(){
// Choose Start Points
if(
// Find and map startpoints
this.findObjectsByType("startPointType",this.map,"EntryPoints").forEach(function(t){
// Find Custom Startpoints
if(
// Find Default Startpoint
"default"==t.properties.startPointType&&(this.defaultStartPoint={x:t.x,y:t.y}),"custom"==t.properties.startPointType){var e=[];e.id=t.properties.id,e.x=t.x,e.y=t.y,this.customStartPoints.push(e)}},this),void 0==this.gameData.targetID)this.startPoint.x=this.defaultStartPoint.x,this.startPoint.y=this.defaultStartPoint.y;else for(var t=0;t<this.customStartPoints.length;t++)this.customStartPoints[t].id==this.gameData.targetID&&(this.lastTargetID=this.gameData.targetID,this.startPoint.x=this.customStartPoints[t].x,this.startPoint.y=this.customStartPoints[t].y)}},{key:"loadPeople",value:function(){
// Find specific people
this.findObjectsByType("id",this.map,"People").forEach(function(t){this.characters.push(new p.default(this.game,t,this.player))},this)}},{key:"loadItems",value:function(){
// Find specific items
this.findObjectsByType("type",this.map,"Items").forEach(function(t){this.itemIDs.includes(t.properties.id)||"key"==t.properties.type&&this.items.push(new x.default(this.game,t.x,t.y,"item",t.properties))},this)}},{key:"loadEmitter",value:function(){
//Find specific emitter
this.findObjectsByType("type",this.map,"CustomEmitter").forEach(function(t){if("emitter"==t.properties.type){var e=t.x+t.width/2,i=t.y+t.height/2,n=this.game.add.emitter(e,i,10);n.width=t.width,n.height=t.height,n.minParticleScale=.5,n.maxParticleScale=1,n.gravity=.5,n.setScale(-1,1,1,1,3e3,o.default.Easing.Sinusoidal.InOut,!0),n.setYSpeed(100),n.setXSpeed(-100,100),n.gravity=.5,n.makeParticles("treeleaves",[0,1]),n.start(!1,3e3,400,0)}},this)}},{key:"loadEnemies",value:function(){
// Find specific enemy
this.findObjectsByType("type",this.map,"Enemies").forEach(function(t){var e=t.properties.killQuestID;void 0===e||this.questManager.checkIfQuestWasDone(e)||"seed"==t.properties.type&&this.enemies.push(new f.default(this.game,t.x,t.y,this.player,this.map,this.groundLayer,t.properties))},this)}},{key:"findObjectsByType",value:function(t,e,i){var n=[];return e.objects[i].forEach(function(i){var r=Object.keys(i.properties);(r.indexOf(t)||r.toString()==t)&&(i.y-=e.tileHeight/2,i.x+=e.tileHeight/2,n.push(i))},this),n}},{key:"update",value:function(){
// Update InputClass
this.inputClass.update(),
// If Pathfinder == true -> follow path
this.pathfinder&&this.pathfinder.followPath(),
// console.log(Phaser.Rectangle.intersects(this.player.getBounds(), this.collisionLayer.getBounds()));
// Collisionhandler
this.game.physics.arcade.collide(this.enemies,this.enemies),
// this.game.physics.arcade.collide(this.enemies, this.player);
this.game.physics.arcade.collide(this.enemies,this.player,this.player.getDamage,null,this),this.game.physics.arcade.collide(this.enemies,this.collisionLayer),this.game.physics.arcade.collide(this.characters,this.player),this.game.physics.arcade.collide(this.player,this.collisionLayer),this.game.physics.arcade.collide(this.player,this.items,this.player.collideWithItem,null,this),this.fallDown?this.fallDownLayer<20&&(this.game.world.moveDown(this.player),this.fallDownLayer++):(this.game.world.bringToTop(this.player),this.game.world.bringToTop(this.player.customEmitter)),this.lucy&&this.game.world.bringToTop(this.lucy),this.foreGroundShift||this.game.world.bringToTop(this.foregroundLayer),
// TilemapPlus Physics
this.map.plus.physics.collideWith(this.player),this.map.plus.events.regions.triggerWith(this.player),
// If night == true
this.dayCycle&&(this.game.world.bringToTop(this.dayCycleClass.lightSprite),this.dayCycleClass.lightSprite.reset(this.game.camera.x-5,this.game.camera.y-5),this.dayCycleClass.updateShadowTexture()),
// Update Weather
this.weather.updateWeather(),
// If clouds == true -> bringtoTop (Layer)
this.weather.clouds&&this.game.world.bringToTop(this.weather.clouds),
// If Lockpicker == true -> update()
this.lockGame&&this.lockGame.update(),this.weather.templeFliesEmitter&&this.game.world.bringToTop(this.weather.templeFliesEmitter),
// Update GUIClass
this.GUICLASS.update()}},{key:"fallDownFunction",value:function(t,e){var i=this;this.inputClass.dash||(t.body.x+t.body.width<e.worldX+e.width&&"left"==this.inputClass.direction&&this.fallDownSwitch&&(this.fallDown=!0,this.fallDownSound=this.game.add.audio("sfxfalldown"),this.fallDownSound.play(),this.inputClass.pyfootsteps.stop(),this.player.animations.stop(),this.player.movable=!1,this.game.camera.fade(0,1e3,!0),this.game.time.events.loop(1,function(){i.player.body.velocity.y=300,i.player.body.velocity.x=-50},this),this.game.time.events.add(1*o.default.Timer.SECOND,function(){console.log("restart"),i.eventManager.areaSound&&i.eventManager.areaSound.fadeOut(2e3),i.inputClass.stick&&(i.inputClass.stick.alpha=0,i.inputClass.stick.enabled=!1),i.fallDownCounter=0,i.game.state.restart(!0,!1)}),this.fallDownSwitch=!1),t.body.x>e.worldX&&"right"==this.inputClass.direction&&this.fallDownSwitch&&(this.fallDown=!0,this.fallDownSound=this.game.add.audio("sfxfalldown"),this.fallDownSound.play(),this.inputClass.pyfootsteps.stop(),this.player.animations.stop(),this.player.movable=!1,this.game.camera.fade(0,1e3,!0),this.game.time.events.loop(1,function(){i.player.body.velocity.y=300,i.player.body.velocity.x=50},this),this.game.time.events.add(1*o.default.Timer.SECOND,function(){console.log("restart"),i.eventManager.areaSound&&i.eventManager.areaSound.fadeOut(2e3),i.inputClass.stick&&(i.inputClass.stick.alpha=0,i.inputClass.stick.enabled=!1),i.fallDownCounter=0,i.game.state.restart(!0,!1)}),this.fallDownSwitch=!1),t.body.y+t.body.height<e.worldY+e.height-10&&"up"==this.inputClass.direction&&this.fallDownSwitch&&(this.fallDown=!0,this.fallDownSound=this.game.add.audio("sfxfalldown"),this.fallDownSound.play(),this.inputClass.pyfootsteps.stop(),this.player.animations.stop(),this.player.movable=!1,this.game.camera.fade(0,1e3,!0),this.game.time.events.loop(1,function(){i.player.body.velocity.y=300},this),this.game.time.events.add(1*o.default.Timer.SECOND,function(){i.inputClass.stick&&(i.inputClass.stick.alpha=0,i.inputClass.stick.enabled=!1),i.eventManager.areaSound&&i.eventManager.areaSound.fadeOut(2e3),console.log("restart"),i.fallDownCounter=0,i.game.state.restart(!0,!1)}),this.fallDownSwitch=!1),t.body.y>e.worldY&&"down"==this.inputClass.direction&&this.fallDownSwitch&&(this.fallDown=!0,this.fallDownSound=this.game.add.audio("sfxfalldown"),this.fallDownSound.play(),this.inputClass.pyfootsteps.stop(),this.player.animations.stop(),this.player.movable=!1,this.game.camera.fade(0,1e3,!0),this.game.time.events.loop(1,function(){i.player.body.velocity.y=300},this),this.game.time.events.add(1*o.default.Timer.SECOND,function(){i.inputClass.stick&&(i.inputClass.stick.alpha=0,i.inputClass.stick.enabled=!1),i.eventManager.areaSound&&i.eventManager.areaSound.fadeOut(2e3),console.log("restart"),i.fallDownCounter=0,i.game.state.restart(!0,!1)}),this.fallDownSwitch=!1))}},{key:"initMap",value:function(){this.fallDown=!1,console.log("LoadMap: "+this.gameData.currentMap),this.map=this.game.add.tilemap(this.gameData.currentMap),
// Background Cloud Layer
this.backgroundTileset=this.map.addTilesetImage("Clouds","Clouds"),this.backgroundLayer=this.map.createLayer("Clouds"),this.backgroundLayer.scrollFactorX=this.backgroundLayer.scrollFactorY=.5,
//  Connect with Tileset
this.map.addTilesetImage("Tileset","gameTileset2",36,36),
//  Define Layers
this.groundLayer=this.map.createLayer("BackgroundLayer"),this.detailGroundLayer=this.map.createLayer("DetailBackgroundLayer"),this.collisionLayer=this.map.createLayer("CollisionLayer"),this.foregroundLayer=this.map.createLayer("ForegroundLayer"),
//  Resize the world
this.groundLayer.resizeWorld(),this.detailGroundLayer.resizeWorld(),this.foregroundLayer.resizeWorld(),
// this.foregroundLayer.blendMode = Phaser.blendModes.MULTIPLY;
this.foregroundLayer.alpha=.9,
// Set Collision Tiles
this.map.setCollision(4,!0,"CollisionLayer"),this.map.setTileIndexCallback(3,this.fallDownFunction,this,this.collisionLayer),
// Get Map Properties
this.tilemapProperties=this.map.plus.properties,
// Get Properties for Nightmode
this.dayCycle=this.tilemapProperties.dayCycle,
// this.collisionLayer.debug = true;
// Enable Tile Animations
this.map.plus.animation.enable(),
// Flashduration from Settings (if map1)
"map1"==this.gameData.currentMap&&100==this.gameData.playerHealth?this.game.camera.flash(0,8e3,!0):this.game.camera.flash(0,2e3),
// Customizations
"map3"==this.currentMap&&(this.door=this.game.add.sprite(865,793,"templeDoor"),this.door.animations.add("open",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],8,!0),this.door.animations.add("idle",[17],1,!0))}},{key:"initSoundandMusic",value:function(){
// Get Settings
this.preferences=this.safe.getGamePreferences(),
// Mute Music or fadeIn Music
this.preferences.muteMusic?this.muteMusic=!0:(this.game.musicPlayer.initMap(this.tilemapProperties,this.tilemapProperties.startMusic,5e3),this.muteMusic=!1),
// Mute Sound or fadeIn Sound
this.preferences.muteSound?this.muteSound=!0:(this.game.soundManager.initSound(this.tilemapProperties.athmoSound),this.muteSound=!1)}}]),t}();e.default=G},/* 360 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(3),h=n(l),u=i(19),c=(n(u),function(t){function e(t,i,n){r(this,e);var s=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i.x,i.y,i.properties.character));return s.game=t,s.id=i.properties.id,s.player=n,s.health=100,s.randomMovement=!0,s.anchor.setTo(.5),s.game.physics.enable(s),s.body.setSize(10,15,18,20),s.body.immovable=!0,s.body.drag.set(90),s.movementX=s.x+100,s.movementY=s.y+100,t.add.existing(s),s}return s(e,t),o(e,[{key:"update",value:function(){
// console.log(this.game.physics.arcade.distanceBetween(this, this.player));
// if(this.game.physics.arcade.distanceBetween(this, this.player) < 100 && this.game.physics.arcade.distanceBetween(this, this.player) > 40){
//   this.game.physics.arcade.moveToObject(this, this.player, 30);
// }
// console.log(Math.ceil(this.game.physics.arcade.angleToXY(this.player, this.x, this.y)));
Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y))}}]),e}(h.default.Sprite));e.default=c},/* 361 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s),l=i(19),h=n(l),u=function(){function t(e,i,n,a){r(this,t),this.game=e,this.level=n,this.currentWeather=i,this.backgroundLayer=a,this.enableStorm=!0,this.isSafari=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"),this.manager=this.game.plugins.add(o.default.ParticleStorm),h.default.weather&&this.createWeather(i)}return a(t,[{key:"createWeather",value:function(t){switch(t){case"Snow":this.addSnow();break;case"TempleFlies":this.addTempleFlies();break;case"Storm":this.addStorm();break;case"SnowWind":this.addSnowWind();break;case"Leaves":this.addLeaves();break;case"NiceWeather":
// this.addSun();
break;case"AutumnGlimmer":this.addAutumnGlimmer()}}},{key:"addSnow",value:function(){var t=game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-10,t.makeParticles("snow"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(0,.1),t.minRotation=0,t.maxRotation=0,t.start(!1,4600,5,0)}},{key:"addTempleFlies",value:function(){console.log("Testweather"),this.templeFliesEmitter=this.game.add.emitter(this.game.camera.width/2,1100,100),
// emitter.fixedToCamera = true;
this.templeFliesEmitter.width=2*this.game.camera.width,this.templeFliesEmitter.height=this.game.camera.height,this.templeFliesEmitter.angle=-10,this.templeFliesEmitter.minParticleScale=.1,this.templeFliesEmitter.maxParticleScale=.5,
// emitter.maxParticleSpeed.setTo(2, 2);
this.templeFliesEmitter.setYSpeed(5,10),this.templeFliesEmitter.setXSpeed(20,-20),this.templeFliesEmitter.gravity=.5,this.templeFliesEmitter.minRotation=0,this.templeFliesEmitter.maxRotation=0,this.templeFliesEmitter.setAlpha(.7,1,1e3,o.default.Easing.Exponential.In,!0),this.templeFliesEmitter.makeParticles("fly"),this.templeFliesEmitter.start(!1,1e4,5,0)}},{key:"addStorm",value:function(){this.backgroundLayer.tint=3158064;
// (x, y, maxParticles)
var t=this.game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-30,t.makeParticles("rain"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(200,310),t.setXSpeed(-5,5),t.minRotation=180,t.maxRotation=0,t.gravity=200,
// (explode, lifespan, frequency, quantity)
t.start(!1,2500,1,0),this.lightningBitmap=this.game.add.bitmapData(window.innerWidth,window.innerHeight+500),this.lightning=this.game.add.image(this.game.camera.width/2,0,this.lightningBitmap),this.lightning.anchor.setTo(.5,.5);var e=this.game.rnd.integerInRange(10,18);this.game.time.events.loop(o.default.Timer.SECOND*e,this.zap,this),this.isSafari||
// this.addWindLeaves();
this.addClouds()}},{key:"addWindLeaves",value:function(){this.autumnGlimmerEmitter=this.game.add.emitter(-500,0,150),this.autumnGlimmerEmitter.fixedToCamera=!0,console.log(this.game.world.bounds.height),this.autumnGlimmerEmitter.width=this.game.world.bounds.width,this.autumnGlimmerEmitter.height=this.game.world.bounds.height,
// this.autumnGlimmerEmitter.angle = -10;
this.autumnGlimmerEmitter.minParticleScale=.1,this.autumnGlimmerEmitter.maxParticleScale=.5,
// emitter.maxParticleSpeed.setTo(2, 2);
this.autumnGlimmerEmitter.setScale(-2,2,1,1,3e3,o.default.Easing.Sinusoidal.InOut,!0),this.autumnGlimmerEmitter.setYSpeed(300),this.autumnGlimmerEmitter.setXSpeed(-300,300),this.autumnGlimmerEmitter.minParticleScale=.25,this.autumnGlimmerEmitter.maxParticleScale=1,this.autumnGlimmerEmitter.gravity=.5,this.autumnGlimmerEmitter.minRotation=25,
// this.autumnGlimmerEmitter.maxRotation = 0;
this.autumnGlimmerEmitter.setAlpha(.5,1),
// this.autumnGlimmerEmitter.autoAlpha = true;
// this.autumnGlimmerEmitter.setAlpha(0, 1, 5000, Phaser.Easing.Exponential.In, true);
this.autumnGlimmerEmitter.makeParticles("glimmerParticle"),this.autumnGlimmerEmitter.start(!1,5e3,5,0)}},{key:"zap",value:function(){this.enableStorm&&(this.lightningBitmap.x=this.game.camera.x,this.lightningBitmap.y=this.game.camera.y,this.lightning.x=this.game.camera.x,this.lightning.y=this.game.camera.y,this.createLightningTexture(this.game.rnd.integerInRange(this.game.camera.x,this.game.camera.x+this.game.camera.width),0,45,3,!1),this.lightning.alpha=1,this.game.add.tween(this.lightning).to({alpha:.5},100,o.default.Easing.Bounce.Out).to({alpha:1},100,o.default.Easing.Bounce.Out).to({alpha:.5},100,o.default.Easing.Bounce.Out).to({alpha:1},100,o.default.Easing.Bounce.Out).to({alpha:0},250,o.default.Easing.Cubic.In).start(),this.game.camera.flash(16777215,450),this.level.dayCycleClass.night&&(this.game.add.tween(this.level.dayCycleClass.lightSprite).to({alpha:0},250,o.default.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.clouds).to({alpha:100},250,o.default.Easing.Linear.None,!0,0,0,!0)),this.strike=this.game.rnd.pick(["hit1","hit2","hit3","hit4","hit5"]),this.thunderstrike=this.game.add.audioSprite("AxThunderstrike"),this.thunderstrike.allowMultiple=!0,this.thunderstrike.play(this.strike,.2),this.game.camera.shake(.005,500))}},{key:"createLightningTexture",value:function(t,e,i,n,r){var a=this.lightningBitmap.context,s=this.lightningBitmap.width,o=this.lightningBitmap.height;r||a.clearRect(0,0,s,o);for(var l=0;l<i&&(a.strokeStyle="rgb(255, 255, 255)",a.lineWidth=n,a.beginPath(),a.moveTo(t,e),t+=r?this.game.rnd.integerInRange(-10,10):this.game.rnd.integerInRange(-30,30),t<=10&&(t=10),t>=s-10&&(t=s-10),e+=r?this.game.rnd.integerInRange(10,20):this.game.rnd.integerInRange(20,o/i),(!r&&l==i-1||e>o)&&(e=o),a.lineTo(t,e),a.stroke(),!(e>=o));l++)r||100*Math.random()<=20&&this.createLightningTexture(t,e,10,1,!0);this.lightningBitmap.dirty=!0}},{key:"addFog",value:function(){var t=this.game.add.bitmapData(this.game.width,this.game.height);t.ctx.rect(0,0,this.game.width,this.game.height),t.ctx.fillStyle="#000000",t.ctx.fill(),this.fogSprite=this.game.add.sprite(0,0,t),this.fogSprite.fixedToCamera=!0,this.fogSprite.alpha=.6,this.game.add.tween(this.fogSprite).to({alpha:.4},1e4,null,!0,0,0,!0)}},{key:"addClouds",value:function(){var t=this;this.clouds=this.game.add.group(),this.clouds.createMultiple(20,"cloud",0,!0),this.clouds.forEach(function(e){
// cloud.scale.set(this.game.rnd.realInRange(2, 8));
e.scale.set(2),e.x=t.game.world.randomX,e.y=t.game.world.randomY}),this.game.add.tween(this.clouds.scale).to({x:2,y:2},6e4,"Linear",!0,0,0,!0).loop(!0)}},{key:"addSnowWind",value:function(){}},{key:"updateWeather",value:function(){this.lightning&&this.game.world.bringToTop(this.lightning)}}]),t}();e.default=u},/* 362 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=i(3),h=n(l),u=i(19),c=(n(u),function(t){function e(t,i,n,s){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n,"lucy"));o.game=t,o.level=s,o.player=o.level.player,o.anchor.set(.5),o.speed=100,o.game.physics.enable(o),o.tweenSwitch=!0;var l=o.body.velocity.x,h=o.body.velocity.y;
// this.customEmitter.setScale(-1, 1, 1, 1, 3000, Phaser.Easing.Sinusoidal.InOut, true);
// this.customEmitter.setYSpeed(100);
// this.customEmitter.setXSpeed(-100, 100);
// this.offsetY = this.offsetY + 2;
// console.log(this.offsetY);
// this.angle = 90;
return l*=-1,h*=-1,o.customEmitter=o.game.add.emitter(o.x,o.y,30),o.customEmitter.width=10,o.customEmitter.height=10,o.customEmitter.minParticleScale=1,o.customEmitter.maxParticleScale=2,o.customEmitter.gravity=.5,o.customEmitter.setAlpha(.5,1,1e3,null,!0),o.customEmitter.gravity=.5,o.customEmitter.minParticleSpeed.set(l,h),o.customEmitter.maxParticleSpeed.set(l,h),o.customEmitter.makeParticles("blackParticle"),o.customEmitter.start(!1,1500,50,0),o.shadow=o.game.add.sprite(o.x,o.y+30,"lucyShadow"),o.shadow.anchor.set(.5),o.shadow.animations.add("shadow",[6,5,4,3,2,1,0],3,!0),o.shadow.animations.play("shadow"),t.add.existing(o),o}return s(e,t),o(e,[{key:"update",value:function(){this.customEmitter.on=!0,this.customEmitter.x=this.x,this.customEmitter.y=this.y,this.distanceBetweenLucyPlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenLucyPlayer>40?(this.shadow.animations.stop(),this.shadow.x=this.x,this.shadow.y=this.y+30,this.tweenSwitch=!0,this.tween&&this.tween.stop(),this.distanceBetweenLucyPlayer>80?this.game.physics.arcade.moveToObject(this,this.player,80):this.game.physics.arcade.moveToObject(this,this.player,30)):(this.shadow.x=this.x,this.shadow.y=this.y+30,this.tweenSwitch&&(
// this.tweenShadow = this.game.add.tween(this.shadow).to( { y: this.player.y + 10}, 1000, "Linear", true, 0, 0, true).loop();
this.shadow.animations.play("shadow"),this.tween=this.game.add.tween(this).to({bottom:this.bottom+10},1050,"Linear",!0,0,0,!0).loop(),this.tweenSwitch=!1),this.customEmitter.on=!1,this.body.velocity.set(0)),
// console.log(this.distanceBetweenLucyPlayer);
// this.angle += 1;
this.rotation=this.game.physics.arcade.angleToXY(this,this.player.x,this.player.y)}}]),e}(h.default.Sprite));e.default=c},/* 363 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s);i(93);var l=i(95),h=n(l),u=i(140),c=n(u),f=i(96),d=(n(f),i(139)),p=n(d),m=i(364),y=n(m),g=function(){function t(e,i){var n=this;r(this,t),this.game=e,this.level=i,this.spawnEnemiesRunning=!1,this.level.map.plus.physics.enableObjectLayer("Collision"),this.level.map.plus.events.regions.enableObjectLayer("Events"),this.level.map.plus.events.regions.onEnterAdd(this.level.player,function(t){t.properties.message?n.addMessage(t):t.properties.addBridge?n.addBridge(t):t.properties.removeBridge?n.removeBridge(t):t.properties.pathfinderMessage?n.addPathfinderMessage(t):t.properties.port?n.addPort(t):t.properties.fightArea?n.fightArea(t):t.properties.showQuestmap?n.showQuestmap(t):t.properties.startMusic?n.startMusic(t):t.properties.addQuest?n.addQuest(t):t.properties.openDoor?n.openDoor(t):t.properties.movePlayerToXY?n.movePlayerToXY(t):t.properties.spawnEnemies?n.spawnEnemies(t):t.properties.lockCamera?n.lockCamera(t):t.properties.foreGroundShift?n.foreGroundShift(t):t.properties.stairs?n.stairsEnter(t):t.properties.soundArea&&n.soundAreaEnter(t)}),this.level.map.plus.events.regions.onLeaveAdd(this.level.player,function(t){t.properties.lockCamera?n.followPlayer(t):t.properties.foreGroundShift?n.foreGroundReset(t):t.properties.stairs?n.stairsLeave(t):t.properties.soundArea&&n.soundAreaLeave(t)})}return a(t,[{key:"addMessage",value:function(t){for(var e=t.properties.id,i=Object.values(y.default.dialogues),n=0;n<i.length;n++)if(n+1==e){if(this.level.playedDialogues.includes(e))return;if(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),this.level.questManager.checkIfQuestExists(t.properties.questID))return;this.level.questManager.addQuest(t.properties),this.level.GUICLASS.createNotification("quest","Questupdate");var r=i[n];this.level.playedDialogues.push(e),this.level.safe.setPlayedDialogues(this.level.playedDialogues),this.level.GUICLASS.createMessage(r,t.properties.movable,t.properties.readable);break}}},{key:"addBridge",value:function(t){var e=t.properties.id,i=t.properties.requiredItemID,n=t.properties.requiredMasteredQuestID;(this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===n)&&(this.level.activatedBridges.includes(e)||(void 0===i||this.level.itemIDs.includes(i))&&(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),this.level.bridgebuilder=new c.default(this.game,t,this.level.player,this.level.map,this.level.groundLayer,this.level.collisionLayer),this.level.bridgebuilder.buildBridge(),this.level.activatedBridges.push(e)))}},{key:"removeBridge",value:function(t){var e=t.properties.id,i=(t.properties.requiredItemID,t.properties.requiredMasteredQuestID);(this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===i)&&(this.level.activatedBridges.includes(e)||(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),this.level.bridgebuilder=new c.default(this.game,t,this.level.player,this.level.map,this.level.groundLayer,this.level.collisionLayer),this.level.bridgebuilder.removeBridge(),this.level.activatedBridges.push(e)))}},{key:"movePlayerToXY",value:function(t){var e=t.properties.targetX,i=t.properties.targetY;void 0==this.level.pathfinder&&(this.level.pathfinder=new h.default(this.game,this.level.map,this.level.player,{x:e,y:i},this.level.groundLayer,!1,200))}},{key:"addPathfinderMessage",value:function(t){var e=this,i=t.properties.messageID,n=t.properties.characterID,r=t.properties.requiredMasteredQuestID;if((this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===r)&&!this.level.playedDialogues.includes(i)){this.level.playedDialogues.push(i),this.level.safe.setPlayedDialogues(this.level.playedDialogues);for(var a=0;a<this.level.characters.length;a++)this.level.characters[a].id==n?this.pathfinderCharacter=this.level.characters[a]:console.warn("Character not found!");void 0==this.level.pathfinder&&(this.level.pathfinder=new h.default(this.game,this.level.map,this.pathfinderCharacter,{x:this.level.player.x,y:this.level.player.y-50},this.level.groundLayer,!0,400),this.game.camera.follow(this.level.characters[0],o.default.Camera.FOLLOW_LOCKON,.08,.08),this.level.player.movable=!1,this.game.time.events.add(o.default.Timer.SECOND*t.properties.messageWaitingDuration,function(){e.level.game.camera.follow(e.level.player,o.default.Camera.FOLLOW_LOCKON,.08,.08),e.level.player.movable=!0;for(var i=t.properties.messageID,n=Object.values(y.default.dialogues),r=0;r<n.length;r++)if(r+1==i){var a=n[r];e.level.GUICLASS.createMessage(a,t.properties.movable,t.properties.readable),e.game.time.events.add(8*o.default.Timer.SECOND,function(){e.level.questManager.checkIfQuestExists(t.properties.questID)||(e.level.questManager.addQuest(t.properties),e.level.GUICLASS.createNotification("quest","Questupdate"),"currentPosition"!==t.properties.endDestinationX&&"currentPosition"!==t.properties.endDestinationY&&(e.endDestinationX=t.properties.endDestinationX,e.endDestinationY=t.properties.endDestinationY,e.level.pathfinder=new h.default(e.game,e.level.map,e.pathfinderCharacter,{x:e.endDestinationX,y:e.endDestinationY},e.level.groundLayer,!1,400)))});break}},this))}}},{key:"addPort",value:function(t){var e=t.properties.targetMap,i=t.properties.targetID;this.level.inputClass.stick&&(this.level.inputClass.stick.alpha=0,this.level.inputClass.stick.enabled=!1),this.level.gameData.currentMap=e,this.level.gameData.targetID=i,this.level.safe.setGameConfig(this.level.gameData),console.log("TargetMap: "+e),this.level.inputClass.pyfootsteps&&this.level.inputClass.pyfootsteps.stop("gravel1"),this.game.state.restart(!0,!1,{map:e,targetID:i})}},{key:"fightArea",value:function(t){this.game.add.tween(this.level.groundLayer).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0),this.game.add.tween(this.level.backgroundLayer).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0),this.game.add.tween(this.level.player).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0);for(var e=0;e<this.level.enemies.length;e++)this.game.add.tween(this.level.enemies[e]).to({tint:0},1e4,o.default.Easing.Exponential.In,!0,0,!0,!0)}},{key:"showQuestmap",value:function(t){this.level.GUICLASS.createQuestmap()}},{key:"addQuest",value:function(t){this.level.questManager.checkIfQuestExists(t.properties.questID)||(this.level.questManager.addQuest(t.properties),this.level.GUICLASS.createNotification("quest","Questupdate"))}},{key:"openDoor",value:function(t){3==this.level.gameData.targetID?this.level.door.animations.play("idle",1,!0):this.level.door.animations.play("open",8,!1)}},{key:"spawnEnemies",value:function(t){
// Prevent from always spawning when triggering event!
if(!this.spawnEnemiesRunning&&!this.level.questManager.checkIfQuestWasDone(t.properties.questID)){this.spawnEnemiesRunning=!0,this.level.questManager.checkIfQuestExists(t.properties.questID)||this.level.questManager.addQuest(t.properties);for(var e=0;e<t.properties.amount;e++){var i=this.game.rnd.integerInRange(0,1),n=this.game.rnd.integerInRange(0,1),r=i?t.left:t.right,a=n?t.top:t.bottom;
// const x = this.game.rnd.integerInRange(region.left, region.right);
// const y = this.game.rnd.integerInRange(region.top, region.bottom);
this.level.enemies.push(new p.default(this.game,r,a,this.level.player,this.level.map,this.level.groundLayer,t.properties))}}}},{key:"lockCamera",value:function(t){console.log(t);var e=t.right-t.left,i=t.bottom-t.top,n=t.left+e/2,r=t.bottom-i/2;console.log(n,r),this.game.camera.unfollow(),
// this.game.camera.lerp = 0.1;
// this.game.camera.focusOnXY(cameraX, cameraY);
this.game.add.tween(this.game.camera).to({x:n-this.game.camera.width/2,y:r-this.game.camera.height/2},750,o.default.Easing.Quadratic.InOut,!0)}},{key:"followPlayer",value:function(t){var e=this;this.followTween=this.game.add.tween(this.game.camera).to({x:this.level.player.x-this.game.camera.width/2,y:this.level.player.y-this.game.camera.height/2},400,o.default.Easing.Quadratic.InOut,!0),this.followTween.onComplete.add(function(){e.game.camera.follow(e.level.player,o.default.Camera.FOLLOW_LOCKON,.1,.1)},this)}},{key:"startMusic",value:function(t){this.level.muteMusic||this.game.musicPlayer.initMap(this.level.tilemapProperties,!0,1e4)}},{key:"foreGroundShift",value:function(t){console.log("SHIFT"),this.level.foreGroundShift=!0}},{key:"foreGroundReset",value:function(t){this.level.foreGroundShift=!1}},{key:"stairsEnter",value:function(t){this.level.fallDown||(this.level.inputClass.playerSpeed-=30,this.level.player.animations._anims.run_up.speed+=10,this.level.player.animations._anims.run_down.speed+=10,this.level.inputClass.pyfootsteps.stop("gravel1"),this.level.inputClass.pyfootsteps.play("grass1",4),this.level.inputClass.currentUnderground="stone")}},{key:"stairsLeave",value:function(t){this.level.fallDown||(this.level.inputClass.playerSpeed+=30,
// this.level.player.animations._anims.run_down.speed -= 20;
// this.level.player.animations._anims.run_up.speed -= 20;
this.level.player.animations._anims.run_down.speed=15,this.level.player.animations._anims.run_up.speed=15,this.level.inputClass.pyfootsteps.stop("grass1"),this.level.inputClass.pyfootsteps.play("gravel1",4),this.level.inputClass.currentUnderground="grass")}},{key:"soundAreaEnter",value:function(t){console.log("ISDFJISDFJ"),this.areaSound=game.add.audio(t.properties.soundkey),this.areaSound.fadeIn(2e3)}},{key:"soundAreaLeave",value:function(t){this.areaSound.fadeOut(2e3)}}]),t}();e.default=g},/* 364 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={dialogues:{1:["Test1","Test2"],2:["If a person who has an evil heart gets the Triforce, a Hero is destined to appear...","If the evil one destroys the Hero, nothing can save the world from his wicked reign. Only a person of the Knights Of Hyrule, who protected the royalty of Hylia,"],3:["Test3","Test4"],4:["Please help us! Our village is invaded by enemies","Kill eight of them and bring the found item to the oracle!"],5:["The oracle is already waiting for you!"],6:["I am the oracle!","Be our hero and prove your power!","Go into the dark forest and kill three Enemies!"]}}},/* 365 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=(n(s),i(19)),l=(n(o),i(94)),h=(n(l),function(){function t(e,i){r(this,t),this.game=e,this.level=i}return a(t,[{key:"addQuest",value:function(t){this.quests=this.level.safe.getQuests();var e={id:t.questID,questMessage:t.questMessage,questKillEnemyType:t.questKillEnemyType,questDeadEnemies:1,questKillEnemyAmount:t.questKillEnemyAmount};this.quests[t.questID]=e,console.log(this.quests),this.level.safe.setQuests(this.quests)}},{key:"removeQuest",value:function(t){console.log("removeInside"),this.quests=this.level.safe.getQuests();var e=this.quests[t];delete this.quests[t],this.quests.masteredQuests[t]=e,this.level.safe.setQuests(this.quests),console.log(this.quests)}},{key:"checkIfQuestExists",value:function(t){return this.quests=this.level.safe.getQuests(),t in this.quests||t in this.quests.masteredQuests}},{key:"checkIfQuestWasDone",value:function(t){return this.quests=this.level.safe.getQuests(),t in this.quests.masteredQuests&&(console.log("Quest was done!"),!0)}},{key:"checkKillCondition",value:function(t){this.quests=this.level.safe.getQuests(),t in this.quests&&(console.log(this.quests[t].questDeadEnemies,this.quests[t].questKillEnemyAmount),this.quests[t].questDeadEnemies==this.quests[t].questKillEnemyAmount?(this.level.GUICLASS.createNotification("quest","Questupdate"),this.removeQuest(t)):(this.quests[t].questDeadEnemies+=1,this.level.safe.setQuests(this.quests),console.log(this.quests)))}}]),t}());e.default=h},/* 366 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=function(t){return t&&t.__esModule?t:{default:t}}(a),o=function(){function t(e,i){n(this,t),this.game=e,this.level=i,this.night=!1,this.createDayCycle()}return r(t,[{key:"createDayCycle",value:function(){if(this.level.dayCycle){if(this.shadowTexture=this.game.add.bitmapData(this.game.width+200,this.game.height+200),this.lightSprite=this.game.add.image(this.game.camera.x,this.game.camera.y,this.shadowTexture),this.time=new Date,this.timeValue=this.time.getHours(),this.timeValue>=0&&this.timeValue<6){console.log("Night"),this.night=!0,this.lightSprite.alpha=.9,this.level.backgroundLayer.tint=0,this.level.player.tint=10066329;for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=10066329;this.level.weather.clouds&&(this.level.weather.clouds.alpha=0)}else if(this.timeValue>=6&&this.timeValue<8){console.log("Dawn"),this.level.backgroundLayer.tint=8684676,this.lightSprite.alpha=.7;
// this.level.player.tint = 0x383838;
for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=3684408;this.level.weather.clouds&&this.level.weather.clouds.forEach(function(t){t.tint=3684408})}else if(this.timeValue>=8&&this.timeValue<18)console.log("Day"),
// Normal Player Tint: 16777215
this.lightSprite.alpha=0;else if(this.timeValue>=18&&this.timeValue<21){console.log("Dusk"),this.level.backgroundLayer.tint=8684676,this.lightSprite.alpha=.7;
// this.level.player.tint = 0x454545;
for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=3684408;this.level.weather.clouds&&this.level.weather.clouds.forEach(function(t){t.tint=3684408})}else if(this.timeValue>=21&&this.timeValue<24){console.log("Night"),this.night=!0,this.level.backgroundLayer.tint=0,this.lightSprite.alpha=.9,this.level.player.tint=14540253;for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=10066329;this.level.weather.clouds&&(this.level.weather.clouds.alpha=0)}this.lightSprite.blendMode=s.default.blendModes.MULTIPLY,this.level.weather.lightning&&this.level.weather.lightning.bringToTop()}}},{key:"updateShadowTexture",value:function(){this.shadowTexture.context.fillStyle="rgb(0, 15, 119)",this.shadowTexture.context.fillRect(0,0,this.game.width+400,this.game.height+400)}}]),t}();e.default=o},/* 367 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=(n(s),i(368)),l=n(o),h=i(369),u=n(h),c=i(370),f=n(c),d=i(96),p=n(d),m=i(141),y=n(m),g=function(){function t(e,i){r(this,t),this.game=e,this.level=i,this.createGUI()}return a(t,[{key:"createGUI",value:function(){this.questMap=new p.default(this.game,this),this.gameMap=new y.default(this.game,this,this.level),this.ingameMenu=new f.default(this.game,this.level)}},{key:"updateGUI",value:function(t,e){t}},{key:"update",value:function(){this.message&&(this.game.world.bringToTop(this.message.background),this.game.world.bringToTop(this.message.text),this.game.world.bringToTop(this.message.upperBar),this.game.world.bringToTop(this.message.downBar)),this.notification.notificationBar&&(this.game.world.bringToTop(this.notification.notificationBar),this.game.world.bringToTop(this.notification.text)),this.questMap.questmapBackground&&(this.game.world.bringToTop(this.questMap.questmapBackground),this.game.world.bringToTop(this.questMap.text)),this.gameMap.gameMapbackground&&(this.gameMap.update(),this.game.world.bringToTop(this.gameMap.gameMapbackground),this.game.world.bringToTop(this.gameMap.mapGroup),this.game.world.bringToTop(this.gameMap.playerDot)),this.ingameMenu.menuBackground&&(
// this.gameMap.update();
this.game.world.bringToTop(this.ingameMenu.menuBackground),this.game.world.bringToTop(this.ingameMenu.mapButton),this.game.world.bringToTop(this.ingameMenu.questButton),this.game.world.bringToTop(this.ingameMenu.optionsButton),this.ingameMenu.gameMap.map&&(this.game.world.bringToTop(this.ingameMenu.gameMap.mask),this.game.world.bringToTop(this.ingameMenu.gameMap.map),this.game.world.bringToTop(this.ingameMenu.gameMap.playerDot),this.ingameMenu.gameMap.update()),this.ingameMenu.questMap.text&&this.game.world.bringToTop(this.ingameMenu.questMap.text),this.ingameMenu.gameOptions.muteMusicButton&&(this.game.world.bringToTop(this.ingameMenu.gameOptions.muteMusicButton),this.game.world.bringToTop(this.ingameMenu.gameOptions.muteSoundButton)))}},{key:"createMessage",value:function(t,e,i){this.message=new l.default(this.game,t,e,i,this.player,this.level)}},{key:"createNotification",value:function(t,e){this.notification=new u.default(this.game,t,e)}},{key:"setLevel",value:function(t){this.level=t,this.player=this.level.player}}]),t}();e.default=g},/* 368 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=function(t){return t&&t.__esModule?t:{default:t}}(a),o=function(){function t(e,i,r,a,o,l){n(this,t),this.game=e,this.message=i,this.movable=r,this.readable=a,this.player=o,this.level=l,this.line=[],this.wordIndex=0,this.lineIndex=0,this.wordDelay=100,this.lineDelay=2e3,this.followTween=this.game.add,this.game.camera.follow(this.player,s.default.Camera.FOLLOW_LOCKON,.5,.5),this.addBars();var h=e.add.bitmapData(300,65);h.ctx.beginPath(),h.ctx.rect(0,0,300,65),h.ctx.fillStyle="#000000",h.ctx.globalAlpha=.8,h.ctx.fill(),this.background=e.add.sprite(this.game.camera.width/2-h.width/2,this.game.camera.height-90,h),this.background.fixedToCamera=!0,this.readable?this.text=this.game.add.bitmapText(this.background.x+20,this.game.camera.height-80,"pxlfont","",51):this.text=this.game.add.bitmapText(this.background.x+20,this.game.camera.height-60,"pxlfont","",32),this.text.scale.set(.26),this.text.maxWidth=1e3,this.text.textHeight=1500,this.game.cache.getBitmapFont("pxlfont").font.lineHeight=100,this.text.fixedToCamera=!0,this.text.smoothed=!1,this.movable||(this.player.movable=!1,this.player.body.immovable=!0),this.nextLine()}return r(t,[{key:"nextLine",value:function(){if(this.lineIndex===this.message.length)return void this.game.time.events.add(2*s.default.Timer.SECOND,this.removeMessage,this);this.line=this.message[this.lineIndex].split(" "),this.wordIndex=0,this.game.time.events.repeat(this.wordDelay,this.line.length,this.nextWord,this),this.text.text="",this.lineIndex++}},{key:"nextWord",value:function(){this.text.text=this.text.text.concat(this.line[this.wordIndex]+" "),++this.wordIndex===this.line.length&&(this.text.text=this.text.text.concat("\n"),this.game.time.events.add(this.lineDelay,this.nextLine,this))}},{key:"removeMessage",value:function(){this.text.destroy(),this.background.destroy(),this.removeBars(),this.movable||(this.player.movable=!0,this.player.body.immovable=!1)}},{key:"addBars",value:function(){var t=this.game.camera.width,e=game.add.bitmapData(t,20);e.ctx.beginPath(),e.ctx.rect(0,0,t,20),e.ctx.fillStyle="#000000",e.ctx.globalAlpha=1,e.ctx.fill(),this.upperBar=game.add.sprite(this.game.camera.width/2-e.width/2,this.game.camera.height,e),this.upperBar.fixedToCamera=!0,this.downBar=game.add.sprite(this.game.camera.width/2-e.width/2,this.game.camera.height-this.game.camera.height-20,e),this.downBar.fixedToCamera=!0,this.game.add.tween(this.upperBar.cameraOffset).to({y:this.upperBar.y-20},1e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.downBar.cameraOffset).to({y:this.downBar.y+20},1e3,s.default.Easing.Linear.None,!0)}},{key:"removeBars",value:function(){this.upperBarTween=this.game.add.tween(this.upperBar.cameraOffset).to({y:this.game.camera.height},1e3,s.default.Easing.Linear.None,!0),this.downBarTween=this.game.add.tween(this.downBar.cameraOffset).to({y:this.game.camera.height-this.game.camera.height-20},1e3,s.default.Easing.Linear.None,!0),this.upperBarTween.onComplete.add(function(){this.upperBar.destroy(),this.downBar.destroy(),this.upperBar=!1,this.game.camera.follow(this.player,s.default.Camera.FOLLOW_LOCKON,.07,.07)},this)}}]),t}();e.default=o},/* 369 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=function(t){return t&&t.__esModule?t:{default:t}}(a),o=function(){function t(e,i,r){n(this,t),this.game=e,this.type=i,this.message=r,this.game.time.events.add(3*s.default.Timer.SECOND,this.createNotification,this)}return r(t,[{key:"createNotification",value:function(){"success"==this.type&&(this.archivementSound=this.game.add.audio("achivement",2),this.archivementSound.play());this.bmd=game.add.bitmapData(50,20),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,0,50,20),this.bmd.ctx.fillStyle="#000000",this.bmd.ctx.globalAlpha=.8,this.bmd.ctx.fill(),this.notificationBar=game.add.sprite(this.game.camera.width-this.bmd.width-20,-20,this.bmd),this.notificationBar.fixedToCamera=!0,this.notificationBar.alpha=0,this.text=this.game.add.bitmapText(this.notificationBar.x,-20,"pxlfont","",51),this.text.scale.set(.26),
// this.text = this.game.add.bitmapText(this.notificationBar.x, this.notificationBar.y - 4, 'pxlfont', '', 15);
this.text.text=this.message,this.text.alpha=0,this.text.fixedToCamera=!0,this.notificationBar.width=this.text.width+20,this.text.anchor.set(.5),this.notificationBar.anchor.set(.5),
// console.log('Beginn Text: ' + this.text.cameraOffset);
// console.log('Beginn notificationBar: ' + this.notificationBar.cameraOffset);
this.game.add.tween(this.text.cameraOffset).to({y:this.text.y+40},800,s.default.Easing.Back.Out,!0),this.game.add.tween(this.notificationBar.cameraOffset).to({y:this.notificationBar.y+40},800,s.default.Easing.Back.Out,!0),this.game.add.tween(this.text).to({alpha:1},500,s.default.Easing.Linear.None,!0),this.game.add.tween(this.notificationBar).to({alpha:1},500,s.default.Easing.Linear.None,!0),
// console.log('Beginn Text End: ' + this.text.cameraOffset);
// console.log('Beginn notificationBar End: ' + this.notificationBar.cameraOffset);
this.game.time.events.add(4*s.default.Timer.SECOND,this.removeNotification,this)}},{key:"removeNotification",value:function(){this.removeTween=this.game.add.tween(this.text).to({alpha:0},1e3,s.default.Easing.Back.Out,!0),this.game.add.tween(this.notificationBar).to({alpha:0},1e3,s.default.Easing.Back.Out,!0),this.notificationBar.cameraOffset.y=-20,this.text.cameraOffset.y=-20,this.removeTween.onComplete.add(function(){this.notificationBar.destroy(),this.notificationBar=!1,this.text.destroy(),this.bmd.destroy()},this)}}]),t}();e.default=o},/* 370 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(3),o=n(s),l=i(96),h=n(l),u=i(141),c=n(u),f=i(371),d=n(f),p=function(){function t(e,i){r(this,t),this.game=e,this.level=i,this.show=!1,this.currentTab=1,this.gameMap=new c.default(this.game,this.level,this),this.questMap=new h.default(this.game,this.level,this),this.gameOptions=new d.default(this.game,this.level,this)}return a(t,[{key:"toggleMenu",value:function(){this.show?(this.closeMenu(),this.show=!1):(this.showMenu(),this.show=!0)}},{key:"showMenu",value:function(){
// Disable Storm, Disable Playermovement, No Camera Lerp
this.level.weather.enableStorm=!1,this.level.player.movable=!1,this.game.camera.follow(this.level.player,o.default.Camera.FOLLOW_LOCKON,1,1),
// Create BitmapData Background
this.bmd=this.game.add.bitmapData(400,200),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,0,400,200),this.bmd.ctx.fillStyle="#000000",this.bmd.ctx.globalAlpha=1,this.bmd.ctx.fill(),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,0,400,20),this.bmd.ctx.fillStyle="#404040",this.bmd.ctx.globalAlpha=1,this.bmd.ctx.fill(),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,18,400,2),this.bmd.ctx.fillStyle="#FFFFFF",this.bmd.ctx.globalAlpha=1,this.bmd.ctx.fill(),this.menuBackground=this.game.add.sprite(this.game.camera.width/2-this.bmd.width/2,this.game.camera.height/2-this.bmd.height/2,this.bmd),this.menuBackground.fixedToCamera=!0,
// Create Mapbutton
this.mapButton=this.game.add.button(this.menuBackground.x,this.menuBackground.y,"mapButton",this.actionOnClick,this,0,1,2),this.mapButton.fixedToCamera=!0,
// Create Questbutton
this.questButton=this.game.add.button(this.menuBackground.x+60,this.menuBackground.y,"questButton",this.actionOnClick,this,0,1,2),this.questButton.fixedToCamera=!0,
// Create OptionsButton
this.optionsButton=this.game.add.button(this.menuBackground.x+120,this.menuBackground.y,"optionsButton",this.actionOnClick,this,0,1,2),this.optionsButton.fixedToCamera=!0,
// Set Buttonframes
this.mapButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),
// Open Maptab by default
this.gameMap.createMap()}},{key:"closeMenu",value:function(){this.menuBackground&&(
// Enable Storm, Enable Playermovement, Add Camera Lerp
this.level.weather.enableStorm=!0,this.level.player.movable=!0,this.game.camera.follow(this.level.player,o.default.Camera.FOLLOW_LOCKON,.07,.07),
// Destroy menuBackground + all buttons
this.menuBackground.destroy(),this.mapButton.destroy(),this.questButton.destroy(),this.optionsButton.destroy(),this.menuBackground=!1,this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.muteMusicButton=!1))}},{key:"actionOnClick",value:function(t){if("mapButton"==t.key){
// If Map is active --> return
if(this.gameMap.map)return;this.mapButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.muteMusicButton=!1),this.gameMap.createMap()}else if("questButton"==t.key){
// If Questmap is active --> return
if(this.questMap.text)return;this.questButton.setFrames(2,2,2),this.mapButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.muteMusicButton=!1),this.questMap.showMap()}else"optionsButton"==t.key&&(this.optionsButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.showOptions())}},{key:"next",value:function(){if(this.show)if(this.currentTab++,this.currentTab>3&&(this.currentTab=1),1==this.currentTab){if(this.gameMap.map)return;this.mapButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.muteMusicButton=!1),this.gameMap.createMap()}else if(2==this.currentTab){if(this.questMap.text)return;this.questButton.setFrames(2,2,2),this.mapButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.muteMusicButton=!1),this.questMap.showMap()}else 3==this.currentTab&&(this.optionsButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.showOptions())}},{key:"prev",value:function(){if(this.show)if(this.currentTab--,this.currentTab<1&&(this.currentTab=3),1==this.currentTab){if(this.gameMap.map)return;this.mapButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.muteMusicButton=!1),this.gameMap.createMap()}else if(2==this.currentTab){if(this.questMap.text)return;this.questButton.setFrames(2,2,2),this.mapButton.setFrames(0,1,2),this.optionsButton.setFrames(0,1,2),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.muteMusicButton&&(this.gameOptions.muteMusicButton.destroy(),this.gameOptions.muteSoundButton.destroy(),this.gameOptions.muteMusicButton=!1),this.questMap.showMap()}else 3==this.currentTab&&(this.optionsButton.setFrames(2,2,2),this.questButton.setFrames(0,1,2),this.mapButton.setFrames(0,1,2),this.questMap.text&&(this.questMap.text.destroy(),this.questMap.text=!1),this.gameMap.map&&(this.gameMap.map.destroy(),this.gameMap.mask.destroy(),this.gameMap.playerDot.destroy(),this.gameMap.map=!1),this.gameOptions.showOptions())}},{key:"mapUp",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({y:this.gameMap.map.cameraOffset.y+40},200,o.default.Easing.Linear.None,!0))}},{key:"mapDown",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({y:this.gameMap.map.cameraOffset.y-40},200,o.default.Easing.Linear.None,!0))}},{key:"mapLeft",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({x:this.gameMap.map.cameraOffset.x+40},200,o.default.Easing.Linear.None,!0))}},{key:"mapRight",value:function(){this.show&&this.gameMap.map&&(console.log("move"),this.game.add.tween(this.gameMap.map.cameraOffset).to({x:this.gameMap.map.cameraOffset.x-40},200,o.default.Easing.Linear.None,!0))}}]),t}();e.default=p},/* 371 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=(function(t){t&&t.__esModule}(a),function(){function t(e,i,r){n(this,t),this.game=e,this.level=i,this.ingameMenu=r}return r(t,[{key:"showOptions",value:function(){this.muteMusicButton=this.game.add.button(110,80,"muteMusicButton",this.actionOnClick,this,0,2,1),this.muteMusicButton.fixedToCamera=!0,this.muteSoundButton=this.game.add.button(110,120,"muteSoundButton",this.actionOnClick,this,0,2,1),this.muteSoundButton.fixedToCamera=!0,this.getGamePreferences()}},{key:"getGamePreferences",value:function(){this.gamePreferences=this.level.safe.getGamePreferences(),this.gamePreferences.muteMusic?(this.muteMusic=!0,this.muteMusicButton.setFrames(0,1,2)):(this.muteMusic=!1,this.muteMusicButton.setFrames(0,2,1)),this.gamePreferences.muteSound?(this.muteSound=!0,this.muteSoundButton.setFrames(0,1,2)):(this.muteSound=!1,this.muteSoundButton.setFrames(0,2,1))}},{key:"setGamePreferences",value:function(t){this.level.safe.setGamePreferences(t)}},{key:"actionOnClick",value:function(t){"muteMusicButton"==t.key?this.muteMusic?(this.muteMusic=!1,this.muteMusicButton.setFrames(0,2,1),this.game.musicPlayer.initMap(this.level.tilemapProperties,!0,5e3)):(this.muteMusic=!0,this.muteMusicButton.setFrames(1,1,1),this.game.musicPlayer.fadeOut()):"muteSoundButton"==t.key&&(this.muteSound?(this.muteSound=!1,this.muteSoundButton.setFrames(0,2,1),this.game.soundManager.initSound(this.level.tilemapProperties.athmoSound)):(this.muteSound=!0,this.muteSoundButton.setFrames(1,1,1),this.game.soundManager.fadeOut())),this.setGamePreferences({muteMusic:this.muteMusic,muteSound:this.muteSound})}}]),t}());e.default=s},/* 372 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(3),s=(function(t){t&&t.__esModule}(a),function(){function t(e,i){n(this,t),this.game=e,this.level=i,"getBattery"in navigator?this.setup():console.log("Battery API not supported")}return r(t,[{key:"setup",value:function(){var t=this;this.batteryPromise=navigator.getBattery().then(function(t){function e(){return console.log("Battery charging? "+(t.charging?"Yes":"No")),t}function i(){return console.log("Battery level: "+100*t.level+"%"),t}return i(),e(),t.addEventListener("chargingchange",function(){e()}),t.addEventListener("levelchange",function(){i()}),t}).then(function(e){
// console.log(battery);
if(100*e.level<25&&!e.charging)if("undefined"!=typeof ipc){new Notification("Battery",{body:"🔋 Your Battery Level is low!",silent:!0})}else t.level.GUICLASS.createNotification("Battery","🔋 Your Battery Level is low!")})}}]),t}());e.default=s},/* 373 */
/***/
function(t,e,i){i(142)(i(374))},/* 374 */
/***/
function(t,e){t.exports="'use strict';\n\n/* Phaser Particle Storm Plugin v1.0.0 (C) Copyright 2015 Photon Storm Ltd. */\nPhaser.ParticleStorm = function (a, b) {\n\tPhaser.Plugin.call(this, a, b), this.emitters = [], this.dataList = {};\n\tvar c = PIXI.canUseNewCanvasBlendModes();\n\tthis.blendModeMap = {\n\t\tNORMAL: [0, 'source-over'],\n\t\tADD: [1, 'lighter'],\n\t\tMULTIPLY: [2, c ? 'multiply' : 'source-over'],\n\t\tSCREEN: [3, c ? 'screen' : 'source-over'],\n\t\tOVERLAY: [4, c ? 'overlay' : 'source-over'],\n\t\tDARKEN: [5, c ? 'darken' : 'source-over'],\n\t\tLIGHTEN: [6, c ? 'lighten' : 'source-over'],\n\t\tCOLOR_DODGE: [7, c ? 'color-dodge' : 'source-over'],\n\t\tCOLOR_BURN: [8, c ? 'color-burn' : 'source-over'],\n\t\tHARD_LIGHT: [9, c ? 'hard-light' : 'source-over'],\n\t\tSOFT_LIGHT: [10, c ? 'soft-light' : 'source-over'],\n\t\tDIFFERENCE: [11, c ? 'difference' : 'source-over'],\n\t\tEXCLUSION: [12, c ? 'exclusion' : 'source-over'],\n\t\tHUE: [13, c ? 'hue' : 'source-over'],\n\t\tSATURATION: [14, c ? 'saturation' : 'source-over'],\n\t\tCOLOR: [15, c ? 'color' : 'source-over'],\n\t\tLUMINOSITY: [16, c ? 'luminosity' : 'source-over']\n\t}, this.hsv = Phaser.Color.HSVColorWheel();\n}, Phaser.ParticleStorm.prototype = Object.create(Phaser.Plugin.prototype), Phaser.ParticleStorm.prototype.constructor = Phaser.ParticleStorm, Phaser.ParticleStorm.SPRITE = 'sprite', Phaser.ParticleStorm.PIXEL = 'pixel', Phaser.ParticleStorm.RENDERTEXTURE = 'render texture', Phaser.ParticleStorm.SPRITE_BATCH = 'sprite batch', Phaser.ParticleStorm.BITMAP_DATA = 'bitmap data', Phaser.ParticleStorm.BASE = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_1 = {\n\tvalue: 1,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 1\n}, Phaser.ParticleStorm.BASE_255 = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tmin: 0,\n\tmax: 255,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_359 = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tmin: 0,\n\tmax: 359,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_NULL = {\n\tvalue: null,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_EMIT = {\n\tname: null,\n\tvalue: 0,\n\tinitial: 0,\n\tcontrol: null,\n\tat: null,\n\tinherit: !0,\n\toffsetX: 0,\n\toffsetY: 0\n}, Phaser.ParticleStorm.Controls = {}, Phaser.ParticleStorm.Zones = {}, Phaser.ParticleStorm.prototype.createEmitter = function (a, b, c) {\n\tvar d = new Phaser.ParticleStorm.Emitter(this, a, b, c);\n\treturn this.emitters.push(d), d;\n}, Phaser.ParticleStorm.prototype.removeEmitter = function (a) {\n\tfor (var b = 0; b < this.emitters.length; b++) {\n\t\tif (this.emitters[b] === a) return void this.emitters.splice(b, 1);\n\t}\n}, Phaser.ParticleStorm.prototype.addData = function (a, b) {\n\tif (void 0 === a) return this;\n\tif (Array.isArray(a)) for (var c = 0; c < a.length; c++) {\n\t\tthis.dataList[a[c]] = this.game.cache.getJSON(a[c]);\n\t} else void 0 !== b ? this.dataList[a] = b : this.dataList[a] = this.game.cache.getJSON(a);\n\treturn this;\n}, Phaser.ParticleStorm.prototype.getData = function (a) {\n\treturn this.dataList[a];\n}, Phaser.ParticleStorm.prototype.clearData = function (a) {\n\tif (void 0 === a) this.dataList = {};else if (Array.isArray(a)) for (var b = 0; b < a.length; b++) {\n\t\tdelete this.dataList[a[b]];\n\t} else delete this.dataList[a];\n\treturn this;\n}, Phaser.ParticleStorm.prototype.cloneData = function (a, b) {\n\tif (void 0 === a) return this;\n\tif (Array.isArray(a)) for (var c = 0; c < a.length; c++) {\n\t\tthis.dataList[a[c]] = Phaser.Utils.extend(!0, this.game.cache.getJSON(a[c]));\n\t} else void 0 !== b ? this.dataList[a] = Phaser.Utils.extend(!0, b) : this.dataList[a] = Phaser.Utils.extend(!0, this.game.cache.getJSON(a));\n\treturn this;\n}, Phaser.ParticleStorm.prototype.createPointZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Point(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createLineZone = function (a, b, c, d) {\n\treturn new Phaser.ParticleStorm.Zones.Line(this.game, a, b, c, d);\n}, Phaser.ParticleStorm.prototype.createRectangleZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Rectangle(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createCircleZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Circle(this.game, a);\n}, Phaser.ParticleStorm.prototype.createEllipseZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Ellipse(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createLinearSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 0, a, b, c);\n}, Phaser.ParticleStorm.prototype.createBezierSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 1, a, b, c);\n}, Phaser.ParticleStorm.prototype.createCatmullSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 2, a, b, c);\n}, Phaser.ParticleStorm.prototype.createSplineZone = function (a, b, c, d) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, a, b, c, d);\n}, Phaser.ParticleStorm.prototype.createTextZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Text(this.game, a);\n}, Phaser.ParticleStorm.prototype.createImageZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Image(this.game, a);\n}, Phaser.ParticleStorm.prototype.update = function () {\n\tif (this.active) for (var a = 0; a < this.emitters.length; a++) {\n\t\tthis.emitters[a].enabled && !this.emitters[a].manualUpdate && this.emitters[a].update();\n\t}\n}, Phaser.ParticleStorm.Emitter = function (a, b, c, d) {\n\tthis.game = a.game, this.parent = a, this.renderer = null, this.renderType = null, this.graph = Phaser.ParticleStorm.Graph, this.enabled = !1, this.manualUpdate = !1, this.scrollSpeed = new Phaser.Point(), this.force = new Phaser.Point(), this.onEmit = null, this.onComplete = null, this.onKill = null, this.particleClass = Phaser.ParticleStorm.Particle, this.timer = this.game.time.create(!1), this.timerEvent = null, this.list = [], this.pool = [], this.batch = [], this.wells = [], this._rnd = new Phaser.Point(), this._step = new Phaser.Point(), this._pCount = 0, this._delay = { enabled: !1, start: 0, inc: 0, visible: !1 }, this.init(b, c, d);\n}, Phaser.ParticleStorm.Emitter.prototype = {\n\tinit: function init(a, b, c) {\n\t\tvoid 0 === a && (a = Phaser.ParticleStorm.SPRITE);\n\t\tvar d = this.game.width,\n\t\t    e = this.game.height;\n\t\tswitch (a) {\n\t\t\tcase Phaser.ParticleStorm.SPRITE:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.Sprite(this);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.PIXEL:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.Pixel(this, d, e);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.RENDERTEXTURE:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.RenderTexture(this, d, e);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.SPRITE_BATCH:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.SpriteBatch(this);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.BITMAP_DATA:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.BitmapData(this, d, e);\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\treturn !1;\n\t\t}\n\t\tthis.renderType = a, b && this.force.set(b.x, b.y), c && this.scrollSpeed.set(c.x, c.y), this.list = [], this.pool = [], this.wells = [], this.enabled = !0;\n\t},\n\taddToWorld: function addToWorld(a) {\n\t\treturn void 0 === a && (a = this.game.world), this.renderer.addToWorld(a);\n\t},\n\tcreateGravityWell: function createGravityWell(a, b, c, d, e) {\n\t\tvar f = new Phaser.ParticleStorm.GravityWell(this, a, b, c, d, e);\n\t\treturn this.wells.push(f), f;\n\t},\n\tseed: function seed(a) {\n\t\tfor (var b = 0; a > b; b++) {\n\t\t\tvar c = new Phaser.ParticleStorm.Particle(this);\n\t\t\tthis.pool.push(c);\n\t\t}\n\t\treturn this;\n\t},\n\temitDelayed: function emitDelayed(a, b, c, d, e) {\n\t\treturn !this.enabled || !this.parent.dataList[b] || 0 >= a ? null : (this.timerEvent = this.timer.add(a, this.emit, this, b, c, d, e), this.timer.start(), this.timerEvent);\n\t},\n\temit: function emit(a, b, c, d) {\n\t\tif (!this.enabled || !this.parent.dataList[a]) return null;\n\t\tif (this.batch = [], this._pCount = 0, this._step.x = 0, this._step.y = 0, void 0 === b && (b = 0), void 0 === c && (c = 0), !d) return this.emitParticle(a, b, c, null);\n\t\tvar e = d.hasOwnProperty('total') ? d.total : 1;\n\t\tif (d.xStep > 0 ? this._step.x = d.xStep : this._step.x = 0, d.yStep > 0 ? this._step.y = d.yStep : this._step.y = 0, this._delay.enabled = !1, d.delay && (this._delay.enabled = !0, 'number' == typeof d.delay ? (this._delay.start = d.delay, this._delay.step = 0, this._delay.visible = !1) : (this._delay.start = d.delay.start ? d.delay.start : 0, this._delay.step = d.delay.step ? d.delay.step : 0, this._delay.visible = d.delay.visible ? !0 : !1)), d.zone) {\n\t\t\tif (void 0 === d.random && void 0 === d.full && void 0 === d.percent || d.random) d.zone.emit(this, a, b, c, e, d.setAlpha, d.setColor);else if (void 0 !== d.percent || void 0 === d.full && d.random) {\n\t\t\t\tif (void 0 !== d.percent) {\n\t\t\t\t\tvar f = 0;\n\t\t\t\t\t'number' == typeof d.percent ? f = d.percent : d.percent.hasOwnProperty('min') ? f = this.game.rnd.between(d.percent.min, d.percent.max) : d.percent.callback && (f = d.percent.callback.call(d.percent.context, this)), d.zone.emitPercent(this, a, b, c, e, f);\n\t\t\t\t}\n\t\t\t} else d.zone.emitFull(this, a, b, c, d.step, d.spacing, d.setAlpha, d.setColor);\n\t\t} else for (var g = 0; e > g; g++) {\n\t\t\tthis.emitParticle(a, b, c, null);\n\t\t}if (d.radiate) for (var h = 0; h < this.batch.length; h++) {\n\t\t\tthis.batch[h].radiate(d.radiate.velocity, d.radiate.from, d.radiate.to);\n\t\t} else if (d.radiateFrom) for (var h = 0; h < this.batch.length; h++) {\n\t\t\tthis.batch[h].radiateFrom(d.radiateFrom.x, d.radiateFrom.y, d.radiateFrom.velocity);\n\t\t}var i = d.hasOwnProperty('repeat') ? d.repeat : 0;\n\t\tif (0 !== i) {\n\t\t\tvar j = d.hasOwnProperty('frequency') ? d.frequency : 250;\n\t\t\tdelete d.repeat, -1 === i ? this.timerEvent = this.timer.loop(j, this.emit, this, a, b, c, d) : i > 0 && (this.timerEvent = this.timer.repeat(j, i, this.emit, this, a, b, c, d)), this.timer.start();\n\t\t}\n\t\treturn this._pCount = 0, this.batch;\n\t},\n\temitParticle: function emitParticle(a, b, c, d) {\n\t\tvar e = this.pool.pop();\n\t\treturn e || (e = new this.particleClass(this)), e.parent = d, Array.isArray(b) && (b = this.game.rnd.between(b[0], b[1])), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), b += this._step.x * this._pCount, c += this._step.y * this._pCount, e.reset(this.renderer, b, c, this.parent.dataList[a]), e.alive ? (!d && this._delay.enabled && (e.delay += this._delay.start + this._pCount * this._delay.step, e.delayVisible = this._delay.visible), this.list.push(e), this.batch.push(e), d || this._pCount++) : (e.kill(), this.onKill && this.onKill.dispatch(this, e), this.pool.push(e)), e;\n\t},\n\tupdate: function update() {\n\t\tvar a = this.game.time.elapsed;\n\t\tthis.renderer.preUpdate();\n\t\tfor (var b = this.list.length - 1; b >= 0; b--) {\n\t\t\tvar c = this.list[b];\n\t\t\tc.ignoreScrollSpeed || (c.transform.x += this.scrollSpeed.x, c.transform.y += this.scrollSpeed.y);\n\t\t\tfor (var d = 0; d < this.wells.length; d++) {\n\t\t\t\tthis.wells[d].active && this.wells[d].step(c);\n\t\t\t}c.step(a, this.force) || (c.kill(), this.pool.push(c), this.list.splice(b, 1));\n\t\t}\n\t\treturn this.renderer.postUpdate(), this.list.length;\n\t},\n\tupdateFrequency: function updateFrequency(a, b, c, d) {\n\t\tif (a.at) {\n\t\t\tfor (var e = 0, f = 0; f < a.at.length; f++) {\n\t\t\t\tvar g = a.at[f];\n\t\t\t\t(g.time > c || 0 === g.time && 0 === c) && g.time <= d && (g.value > 0 && g.value < 1 ? Math.random() < g.value && (e += 1) : e += g.value);\n\t\t\t}\n\t\t\treturn e;\n\t\t}\n\t\treturn this.graph.getParamArea(a, c, d) * b;\n\t},\n\tforEach: function forEach(a, b) {\n\t\tif (arguments.length <= 2) for (var c = 0; c < this.list.length; c++) {\n\t\t\ta.call(b, this.list[c]);\n\t\t} else {\n\t\t\tfor (var d = [null], c = 2; c < arguments.length; c++) {\n\t\t\t\td.push(arguments[c]);\n\t\t\t}for (var c = 0; c < this.list.length; c++) {\n\t\t\t\td[0] = this.list[c], a.apply(b, d);\n\t\t\t}\n\t\t}\n\t},\n\tforEachNew: function forEachNew(a, b) {\n\t\tif (0 !== this.batch.length) if (arguments.length <= 2) for (var c = 0; c < this.batch.length; c++) {\n\t\t\ta.call(b, this.batch[c]);\n\t\t} else {\n\t\t\tfor (var d = [null], c = 2; c < arguments.length; c++) {\n\t\t\t\td.push(arguments[c]);\n\t\t\t}for (var c = 0; c < this.batch.length; c++) {\n\t\t\t\td[0] = this.batch[c], a.apply(b, d);\n\t\t\t}\n\t\t}\n\t},\n\tgetParticle: function getParticle(a) {\n\t\treturn void 0 === a && (a = 0), this.list[a] ? this.list[a] : null;\n\t},\n\tdebug: function debug(a, b) {\n\t\tvar c = this.game.debug;\n\t\tif (c) {\n\t\t\tc.start(a + 4, b + 16, 'rgb(255, 255, 255)', 132), c.context.fillStyle = 'rgba(0, 74, 128, 0.5)', c.context.fillRect(a, b, 360, 70);\n\t\t\tvar d = this.force.x + '',\n\t\t\t    e = this.force.y + '';\n\t\t\tc.line('Force:', d.substr(0, 8), e.substr(0, 8)), c.line('Scroll Speed:', this.scrollSpeed.x, this.scrollSpeed.y), c.line('Alive:', 'Dead:', 'Total:'), c.line(this.alive, this.dead, this.total), c.stop();\n\t\t}\n\t},\n\tdestroy: function destroy() {\n\t\tthis.renderer.clear && this.renderer.clear(), this.renderer.destroy(), this.renderer = null;\n\t\tfor (var a = this.list.length - 1; a >= 0; a--) {\n\t\t\tthis.list[a].kill(), this.list.splice(a, 1);\n\t\t}this.list = [], this.pool = [], this.batch = [], this.wells = [];\n\t}\n}, Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'paused', {\n\tget: function get() {\n\t\treturn !this.enabled;\n\t},\n\tset: function set(a) {\n\t\tthis.enabled = !a;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'total', {\n\tget: function get() {\n\t\treturn this.alive + this.dead;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'alive', {\n\tget: function get() {\n\t\treturn this.list.length;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'dead', {\n\tget: function get() {\n\t\treturn this.pool.length;\n\t}\n}), Phaser.ParticleStorm.Emitter.prototype.constructor = Phaser.ParticleStorm.Emitter, Phaser.ParticleStorm.Particle = function (a) {\n\tthis.emitter = a, this.renderer = null, this.graph = Phaser.ParticleStorm.Graph, this.transform = new Phaser.ParticleStorm.Controls.Transform(this), this.color = new Phaser.ParticleStorm.Controls.Color(this), this.texture = new Phaser.ParticleStorm.Controls.Texture(this), this.parent = null, this.lifespan = 2e3, this.keepAlive = !1, this.delay = 0, this.delayVisible = !1, this.life = 0, this.sprite = null, this.visible = !1, this.isComplete = !1, this.ignoreForce = !1, this.ignoreScrollSpeed = !1, this.emit = {}, this._age = 0, this._lastPercent = 0, this._numToEmit = 0;\n}, Phaser.ParticleStorm.Particle.prototype = {\n\treset: function reset(a, b, c, d) {\n\t\treturn this.renderer = a, this.transform.reset(), this.color.reset(), this.texture.reset(), this.emit = Object.create(Phaser.ParticleStorm.BASE_EMIT), this.isComplete = !1, this.keepAlive = !1, this.delay = 0, this.delayVisible = !1, this.ignoreForce = !1, this.ignoreScrollSpeed = !1, this.alive = !1, this.lifespan = 2e3, this.life = 0, this.visible = !1, this._age = 0, this._lastPercent = 0, this._numToEmit = 0, void 0 !== d && this.create(b, c, d), this;\n\t},\n\tcreate: function create(a, b, c) {\n\t\tif (c.hasOwnProperty('lifespan') && (this.lifespan = this.graph.getMinMax(c.lifespan)), this.keepAlive = c.keepAlive, c.hasOwnProperty('delay') && (this.delay = this.graph.getMinMax(c.delay)), this.ignoreForce = c.ignoreForce, this.ignoreScrollSpeed = c.ignoreScrollSpeed, this.transform.init(a, b, c), this.color.init(c), this.texture.init(c), c.emit && (this.emit = Object.create(c.emit)), this.visible = c.visible === !1 ? !1 : !0, this.alive = !0, this.parent && this.parent.emit && this.parent.emit.inherit && (this.alive = this.onInherit(this.parent)), this.alive) {\n\t\t\tthis.transform.step(), this.color.step();\n\t\t\tvar d = this.renderer.add(this);\n\t\t\td && this.texture.step(c, d), this.onEmit(), this.emitter.onEmit && this.emitter.onEmit.dispatch(this.emitter, this), this.renderer.update(this);\n\t\t}\n\t\treturn this;\n\t},\n\tstep: function step(a, b) {\n\t\tif (this._age += a, this.delay) {\n\t\t\tif (this._age < this.delay) return this.renderer.update(this), !0;\n\t\t\tthis.delay = 0, this._age = 0;\n\t\t}\n\t\tif (this._lastPercent = this.life, this.lifespan > 0 && (this.life = Math.min(this._age / this.lifespan, 1)), b && !this.ignoreForce && (this.transform.velocity.x.value += b.x, this.transform.velocity.y.value += b.y), this.transform.step(), this.color.step(), this.onUpdate(), this.alive) {\n\t\t\tfor (this._numToEmit += this.emitter.updateFrequency(this.emit, a, this._lastPercent, this.life); this._numToEmit >= 1;) {\n\t\t\t\tthis.emitChild();\n\t\t\t}this.renderer.update(this);\n\t\t}\n\t\treturn this.isComplete || 1 !== this.life || (this.isComplete = !0, this.emitter.onComplete && this.emitter.onComplete.dispatch(this.emitter, this)), this.life < 1 || this.keepAlive;\n\t},\n\temitChild: function emitChild() {\n\t\tvar a = 0 | this.graph.getMinMax(this.emit.offsetX),\n\t\t    b = 0 | this.graph.getMinMax(this.emit.offsetY);\n\t\tif (this.emit.rect) {\n\t\t\tvar c = this.emit.rect;\n\t\t\ta = Math.random() * c.width + c.x, b = Math.random() * c.height + c.y;\n\t\t} else if (this.emit.circle) {\n\t\t\tvar d = this.emit.circle;\n\t\t\tb = Math.random() * d * 2 - d;\n\t\t\tvar e = Math.sqrt(d * d - b * b);\n\t\t\ta = Math.random() * e * 2 - e;\n\t\t}\n\t\tvar f = this.emit.name;\n\t\tif ('string' != typeof f && (f = this.getChildKey(this.emit.name)), f) {\n\t\t\tvar g = this.emitter.emitParticle(f, this.transform.x + a, this.transform.y + b, this);\n\t\t\tg && this.emit.overwrite && this.applyOverwrite(this.emit.overwrite, g);\n\t\t}\n\t\tthis._numToEmit -= 1;\n\t},\n\tapplyOverwrite: function applyOverwrite(a, b) {\n\t\treturn b;\n\t},\n\tgetChildKey: function getChildKey(a) {\n\t\tif (Array.isArray(a)) return this.emitter.game.rnd.pick(a);\n\t\tif (void 0 !== a.at && a.at.length > 0) {\n\t\t\tfor (var b = a.at[0].value, c = 0; c < a.at.length && !(a.at[c].time > this.life); c++) {\n\t\t\t\tb = a.at[c].value;\n\t\t\t}return b;\n\t\t}\n\t\treturn null;\n\t},\n\tradiate: function radiate(a, b, c) {\n\t\tvoid 0 === c && void 0 !== b ? c = b : (void 0 === b && (b = 0), void 0 === c && (c = 359));\n\t\tvar d = a;\n\t\ta.hasOwnProperty('min') ? d = this.graph.getMinMax(a) : Array.isArray(a) && (d = parseFloat(this.emitter.game.rnd.pick(a), 10));\n\t\tvar e = (Math.random() * (c - b) + b) * Math.PI / 180;\n\t\treturn this.transform.velocity.x.value = Math.sin(e) * d, this.transform.velocity.y.value = -Math.cos(e) * d, this;\n\t},\n\tradiateFrom: function radiateFrom(a, b, c) {\n\t\tvar d = c;\n\t\tc.hasOwnProperty('min') ? d = this.graph.getMinMax(c) : Array.isArray(c) && (d = parseFloat(this.emitter.game.rnd.pick(c), 10));\n\t\tvar e = this.transform.x - a,\n\t\t    f = this.transform.y - b,\n\t\t    g = Math.sqrt(e * e + f * f);\n\t\treturn this.transform.velocity.x.value = e * d / g, this.transform.velocity.y.value = f * d / g, this;\n\t},\n\ttarget: function target(a) {\n\t\tvar b = 0,\n\t\t    c = 0,\n\t\t    d = this.transform;\n\t\tif (a.x && (b = a.x), a.y && (c = a.y), a.zone) {\n\t\t\tvar e = a.zone.getRandom();\n\t\t\tb += e.x, c += e.y;\n\t\t}\n\t\tvar f = Math.atan2(c - d.y, b - d.x),\n\t\t    g = d.x - b,\n\t\t    h = d.y - c,\n\t\t    i = Math.sqrt(g * g + h * h) / (this.lifespan / 1e3),\n\t\t    j = Math.cos(f) * i * d.time.physicsElapsed,\n\t\t    k = Math.sin(f) * i * d.time.physicsElapsed;\n\t\treturn a.speed ? (this.graph.fromControl({ value: 2 * j, control: a.speed }, d.velocity.x), this.graph.fromControl({ value: 2 * k, control: a.speed }, d.velocity.y)) : (d.velocity.x.value = j, d.velocity.y.value = k), this;\n\t},\n\tsetLife: function setLife(a, b) {\n\t\treturn this.lifespan = this.graph.getMinMax(a), this.life = 0, this._age = 0, this._lastPercent = 0, this.isComplete = !1, this.keepAlive = b, this;\n\t},\n\tkill: function kill() {\n\t\tthis.alive = !1, this.renderer.kill(this), this.onKill();\n\t},\n\tonEmit: function onEmit() {},\n\tonUpdate: function onUpdate() {},\n\tonInherit: function onInherit() {\n\t\treturn !0;\n\t},\n\tonKill: function onKill() {}\n}, Object.defineProperty(Phaser.ParticleStorm.Particle.prototype, 'lifePercent', {\n\tget: function get() {\n\t\treturn Math.round(100 * this.life);\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Particle.prototype, 'frequency', {\n\tget: function get() {\n\t\treturn this.emit.value;\n\t},\n\tset: function set(a) {\n\t\tthis.emit.value = a;\n\t}\n}), Phaser.ParticleStorm.Particle.prototype.constructor = Phaser.ParticleStorm.Particle, Phaser.ParticleStorm.GravityWell = function (a, b, c, d, e, f) {\n\tvoid 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 100), void 0 === f && (f = 50), this.emitter = a, this.time = a.game.time, this.position = new Phaser.Point(b, c), this.active = !0, this._gravity = f, this._power = 0, this._epsilon = 0, this.power = d, this.epsilon = e;\n}, Phaser.ParticleStorm.GravityWell.prototype = {\n\tstep: function step(a) {\n\t\tvar b = this.position.x - a.transform.x,\n\t\t    c = this.position.y - a.transform.y,\n\t\t    d = b * b + c * c;\n\t\tif (0 !== d) {\n\t\t\tvar e = Math.sqrt(d);\n\t\t\td < this._epsilon && (d = this._epsilon);\n\t\t\tvar f = this._power * this.time.elapsed / (d * e);\n\t\t\ta.transform.velocity.x.value += b * f, a.transform.velocity.y.value += c * f;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'epsilon', {\n\tget: function get() {\n\t\treturn Math.sqrt(this._epsilon);\n\t},\n\tset: function set(a) {\n\t\tthis._epsilon = a * a;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'power', {\n\tget: function get() {\n\t\treturn this._power / this.gravity;\n\t},\n\tset: function set(a) {\n\t\tthis._power = a * this.gravity;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'gravity', {\n\tget: function get() {\n\t\treturn this._gravity;\n\t},\n\tset: function set(a) {\n\t\tvar b = this.power;\n\t\tthis._gravity = a, this.power = b;\n\t}\n}), Phaser.ParticleStorm.GravityWell.prototype.constructor = Phaser.ParticleStorm.GravityWell, Phaser.ParticleStorm.Graph = {\n\tCONTROL_LINEAR: [{ x: 0, y: 1 }, { x: 1, y: 0 }],\n\tCONTROL_REVERSE: [{ x: 0, y: 0 }, { x: 1, y: 1 }],\n\tCONTROL_YOYO: [{ x: 0, y: 0 }, { x: 0.5, y: 1 }, { x: 1, y: 0 }],\n\tgetControlValue: function getControlValue(a, b) {\n\t\tvar c = 0,\n\t\t    d = a[c];\n\t\tif (d.x === b) return d.y;\n\t\tfor (; d.x <= b;) {\n\t\t\tif (c >= a.length - 1) return d.x;\n\t\t\td = a[++c];\n\t\t}\n\t\tvar e = a[c - 1];\n\t\treturn e.y + (b - e.x) * (d.y - e.y) / (d.x - e.x);\n\t},\n\tgetControlValues: function getControlValues(a, b, c) {\n\t\tvar d = Phaser.ParticleStorm.Graph.getControlValue(a, b),\n\t\t    e = [{ x: b, y: d }];\n\t\tif (b >= c) return e;\n\t\tfor (var f = 0; f < a.length; f++) {\n\t\t\tif (a[f].x > b) {\n\t\t\t\tif (!(a[f].x < c)) break;\n\t\t\t\te.push(a[f]);\n\t\t\t}\n\t\t}return e.push({ x: c, y: Phaser.ParticleStorm.Graph.getControlValue(a, c) }), e;\n\t},\n\tgetParamArea: function getParamArea(a, b, c) {\n\t\treturn a.control ? a.value * Phaser.ParticleStorm.Graph.getControlArea(a.control, b, c) : a.value;\n\t},\n\tgetControlArea: function getControlArea(a, b, c) {\n\t\tvar d = Phaser.ParticleStorm.Graph.getControlValues(a, b, c);\n\t\tif (b >= c) return d[0].y;\n\t\tfor (var e = d.length > 1 ? 0 : d.y, f = d[0], g = 1; g < d.length; g++) {\n\t\t\tvar h = d[g];\n\t\t\te += 0.5 * (h.x - f.x) * (f.y + h.y), f = h;\n\t\t}\n\t\treturn e;\n\t},\n\tgetMinMaxInitial: function getMinMaxInitial(a) {\n\t\treturn void 0 !== a.initial ? Phaser.ParticleStorm.Graph.getMinMax(a.initial) : 0;\n\t},\n\tisNumeric: function isNumeric(a) {\n\t\treturn !isNaN(parseFloat(a)) && isFinite(a);\n\t},\n\tgetMinMax: function getMinMax(a) {\n\t\treturn void 0 !== a && null !== a && void 0 !== a.min && void 0 !== a.max ? a.min + Math.random() * (a.max - a.min) : a;\n\t},\n\tclone: function clone(a, b) {\n\t\treturn b.value = a.value, b.initial = a.initial, b.delta = a.delta, b.offset = a.offset, b.min = a.min, b.max = a.max, b.control = a.control, b;\n\t},\n\tfromControl: function fromControl(a, b) {\n\t\tvoid 0 !== a.value && (b.value = Phaser.ParticleStorm.Graph.getMinMax(a.value)), a.control && ('linear' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_LINEAR : 'reverse' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_REVERSE : 'yoyo' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_YOYO : b.control = a.control);\n\t},\n\tfromData: function fromData(a, b) {\n\t\treturn void 0 === a || null === a ? !1 : 'number' == typeof a ? (b.value = a, !0) : (void 0 !== a.min ? b.value = Phaser.ParticleStorm.Graph.getMinMax(a) : void 0 !== a.value && (b.value = Phaser.ParticleStorm.Graph.getMinMax(a.value)), void 0 !== a.initial && (b.initial = Phaser.ParticleStorm.Graph.getMinMax(a.initial)), void 0 !== a.delta && (b.delta = Phaser.ParticleStorm.Graph.getMinMax(a.delta)), void 0 !== a.offset && (b.offset = Phaser.ParticleStorm.Graph.getMinMax(a.offset)), a.control && ('linear' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_LINEAR : 'reverse' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_REVERSE : 'yoyo' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_YOYO : b.control = a.control), !0);\n\t},\n\tgetValue: function getValue(a, b) {\n\t\tif (!a.control || void 0 === b) return a.value;\n\t\tvar c = a.control[0];\n\t\tif (c.x === b) return c.y;\n\t\tvar d = a.control.length - 1,\n\t\t    e = a.control[d];\n\t\tif (e.x === b) return e.y;\n\t\tfor (d = 0; c.x <= b;) {\n\t\t\tif (d >= a.control.length - 1) return c.y;\n\t\t\tc = a.control[++d];\n\t\t}\n\t\tvar f = a.control[d - 1];\n\t\treturn a.value * (f.y + (b - f.x) * (c.y - f.y) / (c.x - f.x));\n\t},\n\tgetClampedValue: function getClampedValue(a, b) {\n\t\treturn Phaser.Math.clamp(Math.floor(a.initial + this.getValue(a, b)), a.min, a.max);\n\t}\n}, Phaser.ParticleStorm.Zones = {}, Phaser.ParticleStorm.Zones.Base = function (a) {\n\tthis.game = a, this.active = !0, this.scale = new Phaser.Point(1, 1), this.alphaThreshold = 0, this._rnd = new Phaser.Point();\n}, Phaser.ParticleStorm.Zones.Base.prototype = {\n\tgetRandom: function getRandom() {\n\t\treturn this.shape === Phaser.Point ? this._rnd = this.shape : this.shape.random(this._rnd), this._rnd.x *= this.scale.x, this._rnd.y *= this.scale.y, this._rnd;\n\t},\n\temit: function emit(a, b, c, d, e) {\n\t\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\t\tfor (var f = null, g = 0; e > g; g++) {\n\t\t\tthis.shape.random(this._rnd), f = a.emitParticle(b, c + this._rnd.x * this.scale.x, d + this._rnd.y * this.scale.y, null);\n\t\t}return f;\n\t}\n}, Phaser.ParticleStorm.Zones.Base.prototype.constructor = Phaser.ParticleStorm.Zones.Base, Phaser.ParticleStorm.Zones.Point = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Point(b, c);\n}, Phaser.ParticleStorm.Zones.Point.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Point.prototype.constructor = Phaser.ParticleStorm.Zones.Point, Phaser.ParticleStorm.Zones.Rectangle = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Rectangle(0, 0, b, c);\n}, Phaser.ParticleStorm.Zones.Rectangle.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Rectangle.prototype.constructor = Phaser.ParticleStorm.Zones.Rectangle, Phaser.ParticleStorm.Zones.Circle = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Circle(0, 0, 2 * b);\n}, Phaser.ParticleStorm.Zones.Circle.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Circle.prototype.constructor = Phaser.ParticleStorm.Zones.Circle, Phaser.ParticleStorm.Zones.Ellipse = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Ellipse(0, 0, b, c);\n}, Phaser.ParticleStorm.Zones.Ellipse.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Ellipse.prototype.constructor = Phaser.ParticleStorm.Zones.Ellipse, Phaser.ParticleStorm.Zones.Line = function (a, b, c, d, e) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Line(b, c, d, e);\n}, Phaser.ParticleStorm.Zones.Line.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Line.prototype.constructor = Phaser.ParticleStorm.Zones.Line, Phaser.ParticleStorm.Zones.Spline = function (a, b, c, d, e) {\n\tvoid 0 === b && (b = 0), void 0 === c && (c = 1e3), void 0 === d && (d = !0), Phaser.ParticleStorm.Zones.Base.call(this, a), this.math = this.game.math, this.points = { x: [], y: [] }, this.path = [], this.resolution = c, this.mode = b, this.closed = d, this.mult = 0, this.update(e);\n}, Phaser.ParticleStorm.Zones.Spline.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Spline.prototype.constructor = Phaser.ParticleStorm.Zones.Spline, Phaser.ParticleStorm.Zones.Spline.prototype.update = function (a) {\n\tthis.points = { x: [], y: [] }, this.path = [];\n\tfor (var b = 0; b < a.length; b++) {\n\t\tthis.points.x.push(a[b].x), this.points.y.push(a[b].y);\n\t}this.closed && (this.points.x.push(a[0].x), this.points.y.push(a[0].y));\n\tfor (var c = 0, d = 1 / this.resolution, b = 0; 1 >= b; b += d) {\n\t\tif (0 === this.mode) var e = this.math.linearInterpolation(this.points.x, b),\n\t\t    f = this.math.linearInterpolation(this.points.y, b);else if (1 === this.mode) var e = this.math.bezierInterpolation(this.points.x, b),\n\t\t    f = this.math.bezierInterpolation(this.points.y, b);else if (2 === this.mode) var e = this.math.catmullRomInterpolation(this.points.x, b),\n\t\t    f = this.math.catmullRomInterpolation(this.points.y, b);\n\t\tvar g = { x: e, y: f, angle: 0 };\n\t\tc > 0 && (g.angle = this.math.angleBetweenPoints(this.path[c - 1], g)), this.path.push(g), c++;\n\t}\n\treturn this.mult = this.path.length / 100, this;\n}, Phaser.ParticleStorm.Zones.Spline.prototype.getRandom = function () {\n\treturn this.game.rnd.pick(this.path);\n}, Phaser.ParticleStorm.Zones.Spline.prototype.emit = function (a, b, c, d, e) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var f = null, g = null, h = 0; e > h; h++) {\n\t\tf = this.game.rnd.pick(this.path), g = a.emitParticle(b, c + f.x, d + f.y);\n\t}return g;\n}, Phaser.ParticleStorm.Zones.Spline.prototype.emitPercent = function (a, b, c, d, e, f) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tvar g = null;\n\tf = Math.floor(f * this.mult);\n\tfor (var h = 0; e > h; h++) {\n\t\tvar i = this.path[f];\n\t\ti && (g = a.emitParticle(b, c + i.x, d + i.y));\n\t}\n\treturn g;\n}, Phaser.ParticleStorm.Zones.Text = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.bmd = new Phaser.BitmapData(a, 'ParticleStorm.Text'), this.text = b, this.points = [], this.update(b);\n}, Phaser.ParticleStorm.Zones.Text.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Text.prototype.constructor = Phaser.ParticleStorm.Zones.Text, Phaser.ParticleStorm.Zones.Text.prototype.update = function (a) {\n\tvoid 0 !== a ? this.text = a : a = this.text;\n\tvar b = a.x,\n\t    c = a.y,\n\t    d = a.scale.x,\n\t    e = a.scale.y;\n\treturn a.x = 0, a.y = 0, a.scale.set(1), this.points = [], this.bmd.load(a), this.bmd.processPixelRGB(this.addPixel, this), this.scale = new Phaser.Point(d, e), a.x = b, a.y = c, a.scale.set(d, e), this;\n}, Phaser.ParticleStorm.Zones.Text.prototype.addPixel = function (a, b, c) {\n\treturn a.a > this.alphaThreshold && this.points.push({\n\t\tx: b,\n\t\ty: c,\n\t\tcolor: { r: a.r, g: a.g, b: a.b, a: a.a / 255 }\n\t}), !1;\n}, Phaser.ParticleStorm.Zones.Text.prototype.getRandom = function () {\n\tvar a = this.game.rnd.pick(this.points);\n\treturn a.x *= this.scale.x, a.y *= this.scale.y, a;\n}, Phaser.ParticleStorm.Zones.Text.prototype.emit = function (a, b, c, d, e, f, g) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var h = null, i = null, j = 0; e > j; j++) {\n\t\th = this.game.rnd.pick(this.points), i = a.emitParticle(b, c + h.x * this.scale.x, d + h.y * this.scale.y), i && (f && h.color.a < 1 && (i.color.alpha.value = h.color.a), g && i.color.setColor(h.color.r, h.color.g, h.color.b, h.color.a));\n\t}return i;\n}, Phaser.ParticleStorm.Zones.Text.prototype.emitFull = function (a, b, c, d, e, f, g, h) {\n\tvoid 0 === e && (e = 1);\n\tvar i = 1,\n\t    j = 1;\n\tArray.isArray(f) ? (i = f[0], j = f[1]) : 'number' == typeof f && (i = f, j = f), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var k = null, l = null, m = 0; m < this.points.length; m += e) {\n\t\tk = this.points[m];\n\t\tvar n = c + k.x * this.scale.x * (i / e),\n\t\t    o = d + k.y * this.scale.y * (j / e);\n\t\tl = a.emitParticle(b, n, o), l && (g && k.color.a < 1 && (l.color.alpha.value = k.color.a), h && l.color.setColor(k.color.r, k.color.g, k.color.b, k.color.a));\n\t}\n\treturn l;\n}, Phaser.ParticleStorm.Zones.Image = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.bmd = new Phaser.BitmapData(a, 'ParticleStorm.Image'), this.key = b, this.points = [], this.update(b);\n}, Phaser.ParticleStorm.Zones.Image.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Image.prototype.constructor = Phaser.ParticleStorm.Zones.Image, Phaser.ParticleStorm.Zones.Image.prototype.update = function (a) {\n\treturn void 0 === a && (a = this.key), this.points = [], this.bmd.load(a), this.bmd.processPixelRGB(this.addPixel, this), this;\n}, Phaser.ParticleStorm.Zones.Image.prototype.addPixel = function (a, b, c) {\n\treturn a.a > this.alphaThreshold && this.points.push({\n\t\tx: b,\n\t\ty: c,\n\t\tcolor: { r: a.r, g: a.g, b: a.b, a: a.a / 255 }\n\t}), !1;\n}, Phaser.ParticleStorm.Zones.Image.prototype.getRandom = function () {\n\tvar a = this.game.rnd.pick(this.points);\n\treturn a.x *= this.scale.x, a.y *= this.scale.y, a;\n}, Phaser.ParticleStorm.Zones.Image.prototype.emit = function (a, b, c, d, e, f, g) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var h = null, i = null, j = 0; e > j; j++) {\n\t\th = this.game.rnd.pick(this.points), i = a.emitParticle(b, c + h.x * this.scale.x, d + h.y * this.scale.y), i && (f && h.color.a < 1 && (i.color.alpha.value = h.color.a), g && i.color.setColor(h.color.r, h.color.g, h.color.b, h.color.a));\n\t}return i;\n}, Phaser.ParticleStorm.Zones.Image.prototype.emitFull = function (a, b, c, d, e, f, g, h) {\n\tvoid 0 === e && (e = 1);\n\tvar i = 1,\n\t    j = 1;\n\tArray.isArray(f) ? (i = f[0], j = f[1]) : 'number' == typeof f && (i = f, j = f), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var k = null, l = null, m = 0; m < this.points.length; m += e) {\n\t\tk = this.points[m];\n\t\tvar n = c + k.x * this.scale.x * (i / e),\n\t\t    o = d + k.y * this.scale.y * (j / e);\n\t\tl = a.emitParticle(b, n, o), l && (g && k.color.a < 1 && (l.color.alpha.value = k.color.a), h && l.color.setColor(k.color.r, k.color.g, k.color.b, k.color.a));\n\t}\n\treturn l;\n}, Phaser.ParticleStorm.Controls.Texture = function (a) {\n\tthis.particle = a, this.rnd = a.emitter.game.rnd, this.graph = Phaser.ParticleStorm.Graph, this.sendToBack = !1, this.bringToTop = !0, this.key = null, this.frame = void 0, this.frameName = void 0, this.scaleMode = Phaser.scaleModes.DEFAULT;\n}, Phaser.ParticleStorm.Controls.Texture.prototype = {\n\treset: function reset() {\n\t\tthis.sendToBack = !1, this.bringToTop = !0, this.key = '__default', this.frame = void 0, this.frameName = void 0, this.scaleMode = Phaser.scaleModes.DEFAULT;\n\t},\n\tinit: function init(a) {\n\t\tif (a.sendToBack ? this.sendToBack = a.sendToBack : a.bringToTop && (this.bringToTop = a.bringToTop), a.image && (Array.isArray(a.image) ? this.key = this.rnd.pick(a.image) : this.key = a.image), void 0 !== a.frame) {\n\t\t\tvar b = a.frame;\n\t\t\tArray.isArray(a.frame) && (b = this.rnd.pick(a.frame)), this.graph.isNumeric(b) ? this.frame = b : this.frameName = b;\n\t\t}\n\t\tif (a.scaleMode) {\n\t\t\tvar c = a.scaleMode.toUpperCase();\n\t\t\t'LINEAR' === c ? this.scaleMode = Phaser.scaleModes.LINEAR : 'NEAREST' === c && (this.scaleMode = Phaser.scaleModes.NEAREST);\n\t\t}\n\t},\n\tstep: function step(a, b) {\n\t\tif (this.particle.emitter.renderType === Phaser.ParticleStorm.SPRITE && void 0 !== a.animations) {\n\t\t\tvar c = [];\n\t\t\tfor (var d in a.animations) {\n\t\t\t\tvar e = a.animations[d],\n\t\t\t\t    f = null,\n\t\t\t\t    g = !0;\n\t\t\t\tvoid 0 !== e.frames && (f = Array.isArray(e.frames) ? e.frames : Phaser.Animation.generateFrameNames(e.frames.prefix, e.frames.start, e.frames.stop, e.frames.suffix, e.frames.zeroPad), 'string' == typeof f[0] && (g = !1));\n\t\t\t\tvar h = void 0 === e.frameRate ? 60 : e.frameRate,\n\t\t\t\t    i = void 0 === e.loop ? !1 : e.loop;\n\t\t\t\tb.animations.add(d, f, h, i, g), c.push(d);\n\t\t\t}\n\t\t\tc.length > 0 && (void 0 !== a.play ? b.play(this.rnd.pick(c)) : b.play(c[0]));\n\t\t}\n\t\tthis.sendToBack ? b.sendToBack() : this.bringToTop && b.bringToTop();\n\t}\n}, Phaser.ParticleStorm.Controls.Texture.prototype.constructor = Phaser.ParticleStorm.Controls.Texture, Phaser.ParticleStorm.Controls.Color = function (a) {\n\tthis.particle = a, this.graph = Phaser.ParticleStorm.Graph, this.red = {}, this.green = {}, this.blue = {}, this.alpha = {}, this.hsv = {}, this.hsvData = this.particle.emitter.parent.hsv, this.tint = 0, this.isTinted = !1, this.rgba = 'rgba(0, 0, 0, 1)', this.blendMode = this.particle.emitter.parent.blendModeMap.NORMAL;\n}, Phaser.ParticleStorm.Controls.Color.prototype = {\n\treset: function reset() {\n\t\tthis.red = Object.create(Phaser.ParticleStorm.BASE_255), this.green = Object.create(Phaser.ParticleStorm.BASE_255), this.blue = Object.create(Phaser.ParticleStorm.BASE_255), this.alpha = Object.create(Phaser.ParticleStorm.BASE_1), this.tint = 16777215, this.isTinted = !1, this.isHSV = !1, this.hsv = Object.create(Phaser.ParticleStorm.BASE_359), this.rgba = 'rgba(0, 0, 0, 1)', this.blendMode = this.particle.emitter.parent.blendModeMap.NORMAL;\n\t},\n\tinit: function init(a) {\n\t\tvar b = !1;\n\t\ta.hasOwnProperty('hsv') ? ('number' == typeof a.hsv ? this.hsv.value = a.hsv : this.graph.fromData(a.hsv, this.hsv), b = !0, this.isHSV = !0) : (a.hasOwnProperty('red') && ('number' == typeof a.red ? this.red.value = a.red : this.graph.fromData(a.red, this.red), b = !0), a.hasOwnProperty('green') && ('number' == typeof a.green ? this.green.value = a.green : this.graph.fromData(a.green, this.green), b = !0), a.hasOwnProperty('blue') && ('number' == typeof a.blue ? this.blue.value = a.blue : this.graph.fromData(a.blue, this.blue), b = !0)), a.hasOwnProperty('alpha') && ('number' == typeof a.alpha ? this.alpha.value = a.alpha : this.graph.fromData(a.alpha, this.alpha)), this.red.value = Phaser.Math.clamp(this.red.value, 0, 255), this.green.value = Phaser.Math.clamp(this.green.value, 0, 255), this.blue.value = Phaser.Math.clamp(this.blue.value, 0, 255), this.alpha.value = Phaser.Math.clamp(this.alpha.value, 0, 1), this.hsv.value = Phaser.Math.clamp(this.hsv.value, 0, 359), this.particle.emitter.renderType !== Phaser.ParticleStorm.PIXEL && (this.isTinted = b), a.blendMode && (this.blendMode = this.particle.emitter.parent.blendModeMap[a.blendMode.toUpperCase()]);\n\t},\n\tstep: function step() {\n\t\tvar a = this.particle.life;\n\t\tthis.isHSV ? (this.hsv.value += this.hsv.delta, this.hsv.calc = Phaser.Math.clamp(Math.floor(this.hsv.initial + this.graph.getValue(this.hsv, a)), 0, 359), this.red.value = this.hsvData[this.hsv.calc].r, this.green.value = this.hsvData[this.hsv.calc].g, this.blue.value = this.hsvData[this.hsv.calc].b) : (this.red.value += this.red.delta, this.green.value += this.green.delta, this.blue.value += this.blue.delta), this.red.calc = this.graph.getClampedValue(this.red, a), this.green.calc = this.graph.getClampedValue(this.green, a), this.blue.calc = this.graph.getClampedValue(this.blue, a), this.isTinted && (this.tint = this.red.calc << 16 | this.green.calc << 8 | this.blue.calc), this.alpha.value += this.alpha.delta, this.alpha.calc = Phaser.Math.clamp(this.alpha.initial + this.graph.getValue(this.alpha, a), 0, 1), this.rgba = 'rgba(' + this.red.calc + ',' + this.green.calc + ',' + this.blue.calc + ',' + this.alpha.calc + ')';\n\t},\n\tsetColor: function setColor(a, b, c, d) {\n\t\tthis.red.value = a, this.green.value = b, this.blue.value = c, this.alpha.value = d, this.particle.emitter.renderType !== Phaser.ParticleStorm.PIXEL && (this.isTinted = !0), this.step();\n\t}\n}, Phaser.ParticleStorm.Controls.Color.prototype.constructor = Phaser.ParticleStorm.Controls.Color, Phaser.ParticleStorm.Controls.Transform = function (a) {\n\tthis.particle = a, this.time = a.emitter.game.time, this.graph = Phaser.ParticleStorm.Graph, this.x = 0, this.y = 0, this.velocity = { x: null, y: null, facing: null }, this.acceleration = { x: null, y: null, facing: null }, this.scale = { x: null, y: null }, this.rotation = {}, this.anchor = new Phaser.Point();\n}, Phaser.ParticleStorm.Controls.Transform.prototype = {\n\treset: function reset() {\n\t\tthis.velocity.x = Object.create(Phaser.ParticleStorm.BASE), this.velocity.y = Object.create(Phaser.ParticleStorm.BASE), this.velocity.facing = Object.create(Phaser.ParticleStorm.BASE_NULL), this.acceleration.x = Object.create(Phaser.ParticleStorm.BASE), this.acceleration.y = Object.create(Phaser.ParticleStorm.BASE), this.acceleration.facing = Object.create(Phaser.ParticleStorm.BASE_NULL), this.scale.x = Object.create(Phaser.ParticleStorm.BASE_1), this.scale.y = Object.create(Phaser.ParticleStorm.BASE_1), this.rotation = Object.create(Phaser.ParticleStorm.BASE), this.anchor.set(0.5);\n\t},\n\tinit: function init(a, b, c) {\n\t\tif (this.x = a, this.y = b, c.hasOwnProperty('anchor') ? this.anchor.set(c.anchor) : (c.hasOwnProperty('anchorX') && (this.anchor.x = c.anchorX), c.hasOwnProperty('anchorY') && (this.anchor.y = c.anchorY)), c.hasOwnProperty('velocity')) {\n\t\t\tif (this.graph.isNumeric(c.velocity)) this.velocity.x.value = c.velocity, this.velocity.y.value = c.velocity;else if (c.velocity.hasOwnProperty('min')) this.velocity.x.value = this.graph.getMinMax(c.velocity), this.velocity.y.value = this.velocity.x.value;else if (c.velocity.radial) {\n\t\t\t\tvar d = this.graph.getMinMaxInitial(c.velocity),\n\t\t\t\t    e = c.velocity.radial.arcStart,\n\t\t\t\t    f = c.velocity.radial.arcEnd;\n\t\t\t\tif (void 0 !== e && void 0 !== f) {\n\t\t\t\t\tvar g = (Math.random() * (f - e) + e) * Math.PI / 180,\n\t\t\t\t\t    h = Math.sin(g),\n\t\t\t\t\t    i = -Math.cos(g);\n\t\t\t\t\tthis.velocity.x.value = h * d, this.velocity.y.value = i * d;\n\t\t\t\t}\n\t\t\t} else this.velocity.x.initial = this.graph.getMinMaxInitial(c.velocity), this.velocity.y.initial = this.velocity.x.initial, this.velocity.x.value = this.graph.getMinMax(c.velocity.value), this.velocity.y.value = this.velocity.x.value;\n\t\t\tc.velocity.hasOwnProperty('delta') && (this.velocity.x.delta = this.graph.getMinMax(c.velocity.delta), this.velocity.y.delta = this.velocity.x.delta), c.velocity.hasOwnProperty('control') && (this.velocity.x.control = c.velocity.control, this.velocity.y.control = c.velocity.control), c.hasOwnProperty('vx') && this.graph.fromData(c.vx, this.velocity.x), c.hasOwnProperty('vy') && this.graph.fromData(c.vy, this.velocity.y);\n\t\t} else c.hasOwnProperty('target') ? this.particle.target(c.target) : ('number' == typeof c.vx ? this.velocity.x.value = c.vx : this.graph.fromData(c.vx, this.velocity.x), 'number' == typeof c.vy ? this.velocity.y.value = c.vy : this.graph.fromData(c.vy, this.velocity.y));\n\t\t'number' == typeof c.facingVelocity ? this.velocity.facing.value = c.facingVelocity : this.graph.fromData(c.facingVelocity, this.velocity.facing), 'number' == typeof c.facingAcceleration ? this.acceleration.facing.value = c.facingAcceleration : this.graph.fromData(c.facingAcceleration, this.acceleration.facing), c.hasOwnProperty('acceleration') ? (this.graph.fromData(c.acceleration, this.acceleration.x), this.graph.fromData(c.acceleration, this.acceleration.y)) : ('number' == typeof c.ax ? this.acceleration.x.value = c.ax : this.graph.fromData(c.ax, this.acceleration.x), 'number' == typeof c.ay ? this.acceleration.y.value = c.ay : this.graph.fromData(c.ay, this.acceleration.y)), c.hasOwnProperty('scale') ? (this.graph.fromData(c.scale, this.scale.x), this.graph.clone(this.scale.x, this.scale.y)) : ('number' == typeof c.scaleX ? this.scale.x.value = c.scaleX : this.graph.fromData(c.scaleX, this.scale.x), 'number' == typeof c.scaleY ? this.scale.y.value = c.scaleY : this.graph.fromData(c.scaleY, this.scale.y)), 'number' == typeof c.rotation ? this.rotation.value = c.rotation : this.graph.fromData(c.rotation, this.rotation);\n\t\tvar j = this.particle.parent;\n\t\tj && j.emit && j.emit.inherit && this.inherit(j);\n\t},\n\tinherit: function inherit(a) {\n\t\tvar b = a.emit.inherit,\n\t\t    c = !1;\n\t\tif ('boolean' == typeof b && (c = !0), (c || b.vx || b.velocity) && this.graph.clone(a.transform.velocity.x, this.velocity.x), (c || b.vy || b.velocity) && this.graph.clone(a.transform.velocity.y, this.velocity.y), (c || b.facingVelocity) && this.graph.clone(a.transform.velocity.facing, this.velocity.facing), (c || b.scaleX || b.scale) && this.graph.clone(a.transform.scale.x, this.scale.x), (c || b.scaleY || b.scale) && this.graph.clone(a.transform.scale.y, this.scale.y), (c || b.rotation) && this.graph.clone(a.transform.rotation, this.rotation), b.angularVelocity) {\n\t\t\tvar d = (a.transform.rotation.initial + a.transform.rotation.value) * Math.PI / 180;\n\t\t\tthis.velocity.x.initial = Math.sin(d), this.velocity.y.initial = -Math.cos(d);\n\t\t}\n\t},\n\tstep: function step() {\n\t\tvar a = this.particle.life;\n\t\tif (this.scale.x.value += this.scale.x.delta, this.scale.y.value += this.scale.y.delta, this.rotation.value += this.rotation.delta, this.rotation.calc = (this.rotation.initial + this.graph.getValue(this.rotation, a)) * Math.PI / 180, this.scale.x.calc = this.scale.x.initial + this.graph.getValue(this.scale.x, a), this.scale.y.calc = this.scale.y.initial + this.graph.getValue(this.scale.y, a), 0 !== a) {\n\t\t\tvar b = 0,\n\t\t\t    c = 0;\n\t\t\tnull !== this.acceleration.facing.value && (this.acceleration.facing.value += this.acceleration.facing.delta, b = this.rotation.calc + (90 + this.acceleration.facing.offset) * Math.PI / 180, c = this.acceleration.facing.initial + this.graph.getValue(this.acceleration.facing, a), this.velocity.x.value += c * Math.sin(b), this.velocity.y.value += c * -Math.cos(b)), this.acceleration.x.value += this.acceleration.x.delta, this.acceleration.y.value += this.acceleration.y.delta, this.velocity.x.value += this.velocity.x.delta + this.acceleration.x.initial + this.graph.getValue(this.acceleration.x, a), this.velocity.y.value += this.velocity.y.delta + this.acceleration.y.initial + this.graph.getValue(this.acceleration.y, a), null !== this.velocity.facing.value && (this.velocity.facing.value += this.velocity.facing.delta, b = this.rotation.calc + (90 + this.velocity.facing.offset) * Math.PI / 180, c = this.velocity.facing.initial + this.graph.getValue(this.velocity.facing, a), this.x += c * Math.sin(b), this.y += c * -Math.cos(b)), this.x += this.velocity.x.initial + this.graph.getValue(this.velocity.x, a), this.y += this.velocity.y.initial + this.graph.getValue(this.velocity.y, a);\n\t\t}\n\t}\n}, Phaser.ParticleStorm.Controls.Transform.prototype.constructor = Phaser.ParticleStorm.Controls.Transform, Phaser.ParticleStorm.Renderer = {}, Phaser.ParticleStorm.Renderer.Base = function (a) {\n\tthis.game = a.game, this.emitter = a, this.parent = a.parent, this.pixelSize = 1;\n}, Phaser.ParticleStorm.Renderer.Base.prototype = {\n\taddToWorld: function addToWorld(a) {\n\t\treturn a.add(this.display), this.display;\n\t},\n\tpreUpdate: function preUpdate() {},\n\tadd: function add() {\n\t\treturn null;\n\t},\n\tupdate: function update(a) {\n\t\treturn a;\n\t},\n\tpostUpdate: function postUpdate() {},\n\tkill: function kill(a) {\n\t\treturn a;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.game = null;\n\t}\n}, Phaser.ParticleStorm.Renderer.Base.prototype.constructor = Phaser.ParticleStorm.Renderer.Base, Phaser.ParticleStorm.Renderer.Sprite = function (a) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.display = this.game.make.group(null, 'particleStormSpriteRenderer');\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.Sprite.prototype.constructor = Phaser.ParticleStorm.Renderer.Sprite, Phaser.ParticleStorm.Renderer.Sprite.prototype.add = function (a) {\n\tvar b = a.sprite,\n\t    c = a.texture.key,\n\t    d = a.texture.frame;\n\treturn void 0 === d && void 0 !== a.texture.frameName && (d = a.texture.frameName), b ? (b.reset(a.transform.x, a.transform.y), b.key !== c ? b.loadTexture(c, d) : void 0 !== a.texture.frame ? b.frame = d : void 0 !== a.texture.frameName && (b.frameName = d)) : b = this.display.create(a.transform.x, a.transform.y, c, d), b.anchor.set(a.transform.anchor.x, a.transform.anchor.y), a.color.isTinted && (b.tint = a.color.tint), b.blendMode = a.color.blendMode[0], b.texture.baseTexture.scaleMode = a.texture.scaleMode, b.visible = a.visible, a.sprite = b, b;\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.update = function (a) {\n\tvar b = a.sprite;\n\treturn a.delay > 0 && !a.delayVisible ? void (b.visible = !1) : (b.visible = a.visible, b.alpha = a.color.alpha.calc, b.rotation = a.transform.rotation.calc, a.color.isTinted && (b.tint = a.color.tint), b.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), b.x = a.transform.x, void (b.y = a.transform.y));\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.kill = function (a) {\n\ta.sprite && a.sprite.kill();\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.destroy = function () {\n\tthis.display.destroy(!0), this.emitter = null, this.game = null;\n}, Phaser.ParticleStorm.Renderer.Pixel = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.bmd = this.game.make.bitmapData(b, c), this.display = this.game.make.image(0, 0, this.bmd), this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.Pixel.prototype.constructor = Phaser.ParticleStorm.Renderer.Pixel, Phaser.ParticleStorm.Renderer.Pixel.prototype.resize = function (a, b) {\n\treturn this.bmd.resize(a, b), this;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.clear = function (a) {\n\treturn this.bmd.fill(0, 0, 0, a), this.bmd.update(), this;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.preUpdate = function () {\n\tthis.autoClear && (this.bmd.clear(), this.bmd.update());\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.update = function (a) {\n\tif (!(a.delay > 0) || a.delayVisible) {\n\t\tvar b = Math.floor(a.transform.x),\n\t\t    c = Math.floor(a.transform.y),\n\t\t    d = a.color.red.calc,\n\t\t    e = a.color.green.calc,\n\t\t    f = a.color.blue.calc,\n\t\t    g = Math.floor(255 * a.color.alpha.calc);\n\t\tthis.pixelSize > 2 ? this.bmd.rect(b, c, this.pixelSize, this.pixelSize, a.color.rgba) : (this.bmd.setPixel32(b, c, d, e, f, g, !1), 2 === this.pixelSize && (this.bmd.setPixel32(b + 1, c, d, e, f, g, !1), this.bmd.setPixel32(b, c + 1, d, e, f, g, !1), this.bmd.setPixel32(b + 1, c + 1, d, e, f, g, !1)));\n\t}\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.postUpdate = function () {\n\tthis.pixelSize <= 2 && this.bmd.context.putImageData(this.bmd.imageData, 0, 0), this.bmd.dirty = !0;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.destroy = function () {\n\tthis.game = null, this.display.destroy(), this.bmd.destroy();\n}, Phaser.ParticleStorm.Renderer.BitmapData = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.bmd = this.game.make.bitmapData(b, c), this.display = this.game.make.image(0, 0, this.bmd), this.roundPx = !0, this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.BitmapData.prototype.constructor = Phaser.ParticleStorm.Renderer.BitmapData, Phaser.ParticleStorm.Renderer.BitmapData.prototype.resize = function (a, b) {\n\treturn this.bmd.resize(a, b), this;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.clear = function (a) {\n\treturn this.bmd.fill(0, 0, 0, a), this;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.preUpdate = function () {\n\tthis.autoClear && this.bmd.clear();\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.update = function (a) {\n\tif (!(a.delay > 0) || a.delayVisible) {\n\t\tvar b = a.transform;\n\t\tthis.bmd.copy(a.texture.key, 0, 0, null, null, b.x, b.y, null, null, b.rotation.calc, b.anchor.x, b.anchor.y, b.scale.x.calc, b.scale.y.calc, a.color.alpha.calc, a.color.blendMode[1], this.roundPx);\n\t}\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.destroy = function () {\n\tthis.game = null, this.display.destroy(), this.bmd.destroy();\n}, Phaser.ParticleStorm.Renderer.RenderTexture = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.renderTexture = this.game.make.renderTexture(b, c), this.display = this.game.make.image(0, 0, this.renderTexture), this.stamp = this.game.make.image(0, 0), this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.RenderTexture.prototype.constructor = Phaser.ParticleStorm.Renderer.RenderTexture, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.clear = function () {\n\tthis.renderTexture.clear();\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.preUpdate = function () {\n\tthis.autoClear && this.renderTexture.clear();\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.update = function (a) {\n\tif (!(a.delay > 0 && !a.delayVisible || !a.visible || 0 === a.color.alpha.calc)) {\n\t\tvar b = a.texture.key,\n\t\t    c = a.texture.frame;\n\t\tvoid 0 === c && void 0 !== a.texture.frameName && (c = a.texture.frameName), this.stamp.key !== b ? this.stamp.loadTexture(b, c) : void 0 !== a.texture.frame ? this.stamp.frame = c : void 0 !== a.texture.frameName && (this.stamp.frameName = c), this.stamp.anchor.set(a.transform.anchor.x, a.transform.anchor.y), this.stamp.alpha = a.color.alpha.calc, this.stamp.rotation = a.transform.rotation.calc, a.color.isTinted && (this.stamp.tint = a.color.tint), this.stamp.blendMode = a.color.blendMode[0], this.stamp.texture.baseTexture.scaleMode = a.texture.scaleMode, this.stamp.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), this.renderTexture.renderXY(this.stamp, a.transform.x, a.transform.y, !1);\n\t}\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.destroy = function () {\n\tthis.display.destroy(), this.stamp.destroy(), this.renderTexture.destroy(), this.emitter = null, this.game = null;\n}, Phaser.ParticleStorm.Renderer.SpriteBatch = function (a) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.display = this.game.make.spriteBatch();\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.constructor = Phaser.ParticleStorm.Renderer.SpriteBatch, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.add = function (a) {\n\tvar b = a.sprite,\n\t    c = a.texture.key,\n\t    d = a.texture.frame;\n\treturn void 0 === d && void 0 !== a.texture.frameName && (d = a.texture.frameName), b ? (b.reset(a.transform.x, a.transform.y), b.key !== c ? b.loadTexture(c, d) : void 0 !== a.texture.frame ? b.frame = d : void 0 !== a.texture.frameName && (b.frameName = d)) : b = this.game.make.sprite(a.transform.x, a.transform.y, c, d), this.display.addChild(b), b.anchor.set(a.transform.anchor.x, a.transform.anchor.y), a.color.isTinted && (b.tint = a.color.tint), b.blendMode = a.color.blendMode[0], b.texture.baseTexture.scaleMode = a.texture.scaleMode, b.visible = a.visible, a.sprite = b, b;\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.update = function (a) {\n\tvar b = a.sprite;\n\treturn a.delay > 0 && !a.delayVisible ? void (b.visible = !1) : (b.visible = a.visible, b.alpha = a.color.alpha.calc, b.rotation = a.transform.rotation.calc, a.color.isTinted && (b.tint = a.color.tint), b.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), b.x = a.transform.x, void (b.y = a.transform.y));\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.kill = function (a) {\n\ta.sprite && a.sprite.kill();\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.destroy = function () {\n\tthis.display.destroy(!0), this.emitter = null, this.game = null;\n};"},/* 375 */
/***/
function(t,e,i){i(142)(i(376))},/* 376 */
/***/
function(t,e){t.exports="'use strict';\n\n/* Phaser Virtual Joystick Plugin (C) Copyright 2015 Photon Storm Ltd. */\nPhaser.VirtualJoystick = function (a, b) {\n\tPhaser.Plugin.call(this, a, b), this.sticks = null, this.buttons = null, this._pointerTotal = 0;\n}, Phaser.VirtualJoystick.prototype = Object.create(Phaser.Plugin.prototype), Phaser.VirtualJoystick.prototype.constructor = Phaser.VirtualJoystick, Phaser.VirtualJoystick.NONE = 0, Phaser.VirtualJoystick.HORIZONTAL = 1, Phaser.VirtualJoystick.VERTICAL = 2, Phaser.VirtualJoystick.CIRC_BUTTON = 0, Phaser.VirtualJoystick.RECT_BUTTON = 1, Phaser.VirtualJoystick.prototype.init = function () {\n\tthis.sticks = new Phaser.ArraySet(), this.buttons = new Phaser.ArraySet();\n}, Phaser.VirtualJoystick.prototype.addStick = function (a, b, c, d, e, f) {\n\t'undefined' == typeof e && (e = 'base'), 'undefined' == typeof f && (f = 'stick');\n\tvar g = new Phaser.VirtualJoystick.Stick(this, a, b, c, d, e, f);\n\treturn this.sticks.add(g), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), g;\n}, Phaser.VirtualJoystick.prototype.addDPad = function (a, b, c, d, e, f, g, h, i) {\n\t'undefined' == typeof e && (e = 'neutral'), 'undefined' == typeof f && (f = 'up'), 'undefined' == typeof g && (g = 'down'), 'undefined' == typeof h && (h = 'left'), 'undefined' == typeof i && (i = 'right');\n\tvar j = new Phaser.VirtualJoystick.DPad(this, a, b, c, d, e, f, g, h, i);\n\treturn this.sticks.add(j), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), j;\n}, Phaser.VirtualJoystick.prototype.removeStick = function (a) {\n\tthis.sticks.remove(a), a.destroy();\n}, Phaser.VirtualJoystick.prototype.addButton = function (a, b, c, d, e, f) {\n\t'undefined' == typeof f && (f = Phaser.VirtualJoystick.CIRC_BUTTON);\n\tvar g = new Phaser.VirtualJoystick.Button(this, f, a, b, c, d, e);\n\treturn this.buttons.add(g), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), g;\n}, Phaser.VirtualJoystick.prototype.removeButton = function (a) {\n\tthis.buttons.remove(a), a.destroy();\n}, Phaser.VirtualJoystick.prototype.update = function () {\n\tthis.sticks.callAll('update'), this.buttons.callAll('update');\n}, Phaser.VirtualJoystick.prototype.destroy = function () {\n\tthis.sticks.removeAll(!0), this.buttons.removeAll(!0);\n}, Phaser.VirtualJoystick.Stick = function (a, b, c, d, e, f, g) {\n\tthis.pad = a, this.baseFrame = f, this.stickFrame = g, this.position = new Phaser.Point(b, c), this.line = new Phaser.Line(this.position.x, this.position.y, this.position.x, this.position.y), this.baseSprite = this.pad.game.make.sprite(this.position.x, this.position.y, e, f), this.baseSprite.anchor.set(0.5), this.stickSprite = this.pad.game.make.sprite(this.position.x, this.position.y, e, g), this.stickSprite.anchor.set(0.5), this.baseHitArea = new Phaser.Circle(this.position.x, this.position.y, d), this.stickHitArea = new Phaser.Circle(this.position.x, this.position.y, this.stickSprite.width), this.limitPoint = new Phaser.Point(), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.onMove = new Phaser.Signal(), this.onUpdate = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.angle = 0, this.angleFull = 0, this.quadrant = 0, this.octant = 0, this.motionLock = Phaser.VirtualJoystick.NONE, this._distance = d, this._deadZone = 0.15 * d, this._scale = 1, this._tracking = !1, this._showOnTouch = !1, this.pad.game.stage.addChild(this.baseSprite), this.pad.game.stage.addChild(this.stickSprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this), this.pad.game.input.addMoveCallback(this.moveStick, this);\n}, Phaser.VirtualJoystick.Stick.prototype = {\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && (this.pointer = a, this.motionLock === Phaser.VirtualJoystick.NONE ? this.line.end.copyFrom(this.pointer) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.line.end.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.line.end.y = this.pointer.y), this._showOnTouch ? (this.line.start.copyFrom(a), this.posX = a.x, this.posY = a.y, this.visible = !0, this.setDown()) : this.stickHitArea.contains(a.x, a.y) && (this.line.length <= this.deadZone ? this._tracking = !0 : (this.setDown(), this.moveStick())));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.stickHitArea.x = this.position.x, this.stickHitArea.y = this.position.y, this.stickSprite.x = this.stickHitArea.x, this.stickSprite.y = this.stickHitArea.y, this.line.end.copyFrom(this.line.start), this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a), this._showOnTouch && (this.visible = !1));\n\t},\n\tsetDown: function setDown() {\n\t\tthis.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this._tracking = !1, this.checkArea(), this.onDown.dispatch(this, this.pointer);\n\t},\n\tcheckArea: function checkArea() {\n\t\tthis.angle = this.pad.game.math.radToDeg(this.line.angle), this.angleFull = this.angle, this.angleFull < 0 && (this.angleFull += 360), this.octant = 45 * Math.round(this.angleFull / 45), this.quadrant = this.angleFull >= 45 && this.angleFull < 135 ? 1 : this.angleFull >= 135 && this.angleFull < 225 ? 2 : this.angleFull >= 225 && this.angleFull < 315 ? 3 : 0;\n\t},\n\tmoveStick: function moveStick() {\n\t\tthis.pointer && (this.isDown || this._tracking) && (this.motionLock === Phaser.VirtualJoystick.NONE ? this.line.end.copyFrom(this.pointer) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.line.end.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.line.end.y = this.pointer.y), this.checkArea(), !this.isDown && this.line.length <= this.deadZone || (this._tracking && this.setDown(), this.line.length < this.baseHitArea.radius ? this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.pointer.x, this.stickHitArea.y = this.pointer.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.pointer.y) : (this.baseHitArea.circumferencePoint(this.line.angle, !1, this.limitPoint), this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.limitPoint.x, this.stickHitArea.y = this.limitPoint.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.limitPoint.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.limitPoint.y)), this.stickSprite.x = this.stickHitArea.x, this.stickSprite.y = this.stickHitArea.y, this.onMove.dispatch(this, this.force, this.forceX, this.forceY)));\n\t},\n\tupdate: function update() {\n\t\tthis.isDown && !this._tracking && this.onUpdate.dispatch(this, this.force, this.forceX, this.forceY);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.baseSprite.width / 2 + a,\n\t\t    c = this.baseSprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.baseSprite.width / 2 + a,\n\t\t    c = this.baseSprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this);\n\t\tfor (var a = this.pad.game.input.moveCallbacks, b = 0; b < a.length; b++) {\n\t\t\tif (a.callback === this.moveStick && a.context === this) {\n\t\t\t\ta.splice(b, 1);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}this.stickSprite.destroy(), this.baseSprite.destroy(), this.stickHitArea = null, this.baseHitArea = null, this.line = null, this.limitPoint = null, this.onDown.dispose(), this.onUp.dispose(), this.onMove.dispose(), this.onUpdate.dispose(), this.pointer = null, this._scale = null, this.pad = null;\n\t},\n\tdebug: function debug(a, b, c) {\n\t\t'undefined' == typeof a && (a = !0), 'undefined' == typeof b && (b = !0), 'undefined' == typeof c && (c = this.baseSprite.right);\n\t\tvar d = this.pad.game.debug;\n\t\tif (a && (d.context.lineWidth = 2, d.geom(this.baseHitArea, 'rgba(255, 0, 0, 1)', !1), d.geom(this.stickHitArea, 'rgba(0, 255, 0, 1)', !1), d.geom(this.line, 'rgba(255, 255, 0, 1)'), d.context.lineWidth = 1), b) {\n\t\t\tvar e = d.renderShadow,\n\t\t\t    f = c,\n\t\t\t    g = this.baseSprite.y - 114;\n\t\t\td.renderShadow = !0, d.text('Force: ' + this.force.toFixed(2), f, g), d.text('ForceX: ' + this.forceX.toFixed(2), f, g + 24), d.text('ForceY: ' + this.forceY.toFixed(2), f, g + 48), d.text('Rotation: ' + this.rotation.toFixed(2), f, g + 96), d.text('Angle: ' + this.angle.toFixed(2), f, g + 120), d.text('Distance: ' + this.distance, f, g + 172), d.text('Quadrant: ' + this.quadrant, f, g + 196), d.text('Octant: ' + this.octant, f, g + 220), d.renderShadow = e;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'rotation', {\n\tget: function get() {\n\t\treturn this.line.angle;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.position.x;\n\t},\n\tset: function set(a) {\n\t\tthis.position.x !== a && (this.position.x = a, this.baseSprite.x = a, this.stickSprite.x = a, this.baseHitArea.x = a, this.stickHitArea.x = a, this.line.start.x = a, this.line.end.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.position.y;\n\t},\n\tset: function set(a) {\n\t\tthis.position.y !== a && (this.position.y = a, this.baseSprite.y = a, this.stickSprite.y = a, this.baseHitArea.y = a, this.stickHitArea.y = a, this.line.start.y = a, this.line.end.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'force', {\n\tget: function get() {\n\t\treturn Math.min(1, this.line.length / this.distance * 2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'forceX', {\n\tget: function get() {\n\t\treturn this.force * this.x;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'forceY', {\n\tget: function get() {\n\t\treturn this.force * this.y;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'x', {\n\tget: function get() {\n\t\treturn this.line.angle >= 0 ? this.line.angle <= 1.5707963267948966 ? (1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + (3.141592653589793 - this.line.angle) / 3.141592653589793 * 2 : this.line.angle >= -1.5707963267948966 ? Math.abs(-1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + Math.abs(-3.141592653589793 - this.line.angle) / 3.141592653589793 * 2;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'y', {\n\tget: function get() {\n\t\treturn this.line.angle >= 0 ? 1 - Math.abs(1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + Math.abs(-1.5707963267948966 - this.line.angle) / 1.5707963267948966;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'filterX', {\n\tget: function get() {\n\t\tif (0 === this.x) return 0.5;\n\t\tvar a = Math.abs(this.forceX) / 2;\n\t\treturn this.x < 0 ? (0.5 - a).toFixed(2) : (0.5 + a).toFixed(2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'filterY', {\n\tget: function get() {\n\t\tif (0 === this.y) return 0.5;\n\t\tvar a = Math.abs(this.forceY) / 2;\n\t\treturn this.y < 0 ? 1 - (0.5 - a).toFixed(2) : 1 - (0.5 + a).toFixed(2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.stickSprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.stickSprite.alpha = a, this.baseSprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.stickSprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.stickSprite.visible = a, this.baseSprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'distance', {\n\tget: function get() {\n\t\treturn this._distance * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._distance !== a && (this._distance = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'deadZone', {\n\tget: function get() {\n\t\treturn this._deadZone * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._deadZone = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.stickSprite.scale.set(a), this.baseSprite.scale.set(a), this.baseHitArea.setTo(this.position.x, this.position.y, this.distance * a), this.stickHitArea.setTo(this.position.x, this.position.y, this.stickSprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'showOnTouch', {\n\tget: function get() {\n\t\treturn this._showOnTouch;\n\t},\n\tset: function set(a) {\n\t\tthis._showOnTouch !== a && (this._showOnTouch = a, this._showOnTouch && this.visible && (this.visible = !1));\n\t}\n}), Phaser.VirtualJoystick.Button = function (a, b, c, d, e, f, g) {\n\tthis.pad = a, this.upFrame = f, this.downFrame = g, this.sprite = this.pad.game.make.sprite(c, d, e, f), this.sprite.anchor.set(0.5), b === Phaser.VirtualJoystick.CIRC_BUTTON ? this.hitArea = new Phaser.Circle(this.sprite.x, this.sprite.y, this.sprite.width) : b === Phaser.VirtualJoystick.RECT_BUTTON && (this.hitArea = new Phaser.Rectangle(this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height)), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.repeatRate = 0, this.key = null, this._timeNext = 0, this._scale = 1, this.pad.game.stage.addChild(this.sprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this);\n}, Phaser.VirtualJoystick.Button.prototype = {\n\taddKey: function addKey(a) {\n\t\tif (this.key) {\n\t\t\tif (this.key.keyCode === a) return !1;\n\t\t\tthis.key.onDown.removeAll(), this.key.onUp.removeAll(), this.pad.game.input.keyboard.removeKey(this.key), this.key = null;\n\t\t}\n\t\treturn a && (this.key = this.pad.game.input.keyboard.addKey(a), this.key.onDown.add(this.keyDown, this), this.key.onUp.add(this.keyUp, this)), this.key;\n\t},\n\tkeyDown: function keyDown() {\n\t\tthis.isDown || (this.sprite.frameName = this.downFrame, this.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this.onDown.dispatch(this, this.key));\n\t},\n\tkeyUp: function keyUp() {\n\t\tthis.isDown && (this.sprite.frameName = this.upFrame, this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, this.key, this.duration));\n\t},\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && this.hitArea.contains(a.x, a.y) && (this.pointer = a, this.sprite.frameName = this.downFrame, this.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this.onDown.dispatch(this, a));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.sprite.frameName = this.upFrame, this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a, this.duration));\n\t},\n\tupdate: function update() {\n\t\tthis.repeatRate > 0 && this.isDown && this.pad.game.time.time >= this._timeNext && (this.onDown.dispatch(this, this.pointer), this._timeNext = this.pad.game.time.time + this.repeatRate);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this), this.sprite.destroy(), this.onDown.dispose(), this.onUp.dispose(), this.hitArea = null, this.pointer = null, this._scale = null, this.pad = null;\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.sprite.x;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.x !== a && (this.sprite.x = a, this.hitArea.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.sprite.y;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.y !== a && (this.sprite.y = a, this.hitArea.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.sprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.sprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.sprite.scale.set(a), this.hitArea.setTo(this.sprite.x, this.sprite.y, this.sprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'duration', {\n\tget: function get() {\n\t\treturn this.isUp ? this.timeUp - this.timeDown : this.game.time.time - this.timeDown;\n\t}\n}), Phaser.VirtualJoystick.DPad = function (a, b, c, d, e, f, g, h, i, j) {\n\tthis.pad = a, this.neutralFrame = f, this.upFrame = g, this.downFrame = h, this.leftFrame = i, this.rightFrame = j, this.position = new Phaser.Point(b, c), this.line = new Phaser.Line(this.position.x, this.position.y, this.position.x, this.position.y), this.sprite = this.pad.game.make.sprite(b, c, e, f), this.sprite.anchor.set(0.5), this.baseHitArea = new Phaser.Circle(this.position.x, this.position.y, d), this.stickHitArea = new Phaser.Circle(this.position.x, this.position.y, this.sprite.width), this.limitPoint = new Phaser.Point(), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.onMove = new Phaser.Signal(), this.onUpdate = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.angle = 0, this.angleFull = 0, this.quadrant = 0, this.octant = 0, this.direction = Phaser.NONE, this._distance = d, this._deadZone = 0.15 * d, this._scale = 1, this._tracking = !1, this._showOnTouch = !1, this.pad.game.stage.addChild(this.sprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this), this.pad.game.input.addMoveCallback(this.moveStick, this);\n}, Phaser.VirtualJoystick.DPad.prototype = {\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && (this.pointer = a, this.line.end.copyFrom(a), this._showOnTouch ? (this.line.start.copyFrom(a), this.posX = a.x, this.posY = a.y, this.visible = !0, this.setDown()) : this.stickHitArea.contains(a.x, a.y) && (this.line.length <= this.deadZone ? this._tracking = !0 : (this.setDown(), this.moveStick())));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.stickHitArea.x = this.position.x, this.stickHitArea.y = this.position.y, this.sprite.frameName = this.neutralFrame, this.line.end.copyFrom(this.line.start), this.isDown = !1, this.isUp = !0, this.direction = Phaser.NONE, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a), this._showOnTouch && (this.visible = !1));\n\t},\n\tsetDown: function setDown() {\n\t\tthis.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this._tracking = !1, this.checkArea(), this.onDown.dispatch(this, this.pointer);\n\t},\n\tcheckArea: function checkArea() {\n\t\tthis.angle = this.pad.game.math.radToDeg(this.line.angle), this.angleFull = this.angle, this.angleFull < 0 && (this.angleFull += 360), this.octant = 45 * Math.round(this.angleFull / 45), this.quadrant = this.angleFull >= 45 && this.angleFull < 135 ? 1 : this.angleFull >= 135 && this.angleFull < 225 ? 2 : this.angleFull >= 225 && this.angleFull < 315 ? 3 : 0;\n\t},\n\tmoveStick: function moveStick() {\n\t\treturn this.pointer && (this.isDown || this._tracking) ? (this.line.end.copyFrom(this.pointer), this.checkArea(), !this.isDown && this.line.length <= this.deadZone ? (this.direction = Phaser.NONE, void (this.sprite.frameName = this.neutralFrame)) : (this._tracking && this.setDown(), this.line.length < this.baseHitArea.radius ? this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.pointer.x, this.stickHitArea.y = this.pointer.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.pointer.y) : (this.baseHitArea.circumferencePoint(this.line.angle, !1, this.limitPoint), this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.limitPoint.x, this.stickHitArea.y = this.limitPoint.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.limitPoint.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.limitPoint.y)), 1 === this.quadrant ? (this.sprite.frameName = this.downFrame, this.direction = Phaser.DOWN) : 2 === this.quadrant ? (this.sprite.frameName = this.leftFrame, this.direction = Phaser.LEFT) : 3 === this.quadrant ? (this.sprite.frameName = this.upFrame, this.direction = Phaser.UP) : (this.sprite.frameName = this.rightFrame, this.direction = Phaser.RIGHT), void this.onMove.dispatch(this, this.x, this.y))) : (this.direction = Phaser.NONE, void (this.sprite.frameName = this.neutralFrame));\n\t},\n\tupdate: function update() {\n\t\tthis.isDown && !this._tracking && this.onUpdate.dispatch(this, this.x, this.y);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this);\n\t\tfor (var a = this.pad.game.input.moveCallbacks, b = 0; b < a.length; b++) {\n\t\t\tif (a.callback === this.moveStick && a.context === this) {\n\t\t\t\ta.splice(b, 1);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}this.sprite.destroy(), this.stickHitArea = null, this.baseHitArea = null, this.line = null, this.limitPoint = null, this.onDown.dispose(), this.onUp.dispose(), this.pointer = null, this._scale = null, this.pad = null;\n\t},\n\tdebug: function debug(a, b, c) {\n\t\t'undefined' == typeof a && (a = !0), 'undefined' == typeof b && (b = !0), 'undefined' == typeof c && (c = this.sprite.right);\n\t\tvar d = this.pad.game.debug;\n\t\tif (a && (d.context.lineWidth = 2, d.geom(this.baseHitArea, 'rgba(255, 0, 0, 1)', !1), d.geom(this.stickHitArea, 'rgba(0, 255, 0, 1)', !1), d.geom(this.line, 'rgba(255, 255, 0, 1)'), d.context.lineWidth = 1), b) {\n\t\t\tvar e = d.renderShadow,\n\t\t\t    f = c,\n\t\t\t    g = this.sprite.y - 48;\n\t\t\td.renderShadow = !0, d.text('X: ' + this.x, f, g), d.text('Y: ' + this.y, f, g + 24), d.text('Distance: ' + this.distance, f, g + 48), d.text('Quadrant: ' + this.quadrant, f, g + 96), d.text('Octant: ' + this.octant, f, g + 120), d.renderShadow = e;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'rotation', {\n\tget: function get() {\n\t\treturn this.line.angle;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.position.x;\n\t},\n\tset: function set(a) {\n\t\tthis.position.x !== a && (this.position.x = a, this.sprite.x = a, this.baseHitArea.x = a, this.stickHitArea.x = a, this.line.start.x = a, this.line.end.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.position.y;\n\t},\n\tset: function set(a) {\n\t\tthis.position.y !== a && (this.position.y = a, this.sprite.y = a, this.baseHitArea.y = a, this.stickHitArea.y = a, this.line.start.y = a, this.line.end.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'x', {\n\tget: function get() {\n\t\treturn this.direction === Phaser.LEFT ? -1 : this.direction === Phaser.RIGHT ? 1 : 0;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'y', {\n\tget: function get() {\n\t\treturn this.direction === Phaser.UP ? -1 : this.direction === Phaser.DOWN ? 1 : 0;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.sprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.sprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'distance', {\n\tget: function get() {\n\t\treturn this._distance * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._distance !== a && (this._distance = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'deadZone', {\n\tget: function get() {\n\t\treturn this._deadZone * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._deadZone = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.sprite.scale.set(a), this.baseHitArea.setTo(this.position.x, this.position.y, this.distance * a), this.stickHitArea.setTo(this.position.x, this.position.y, this.sprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'showOnTouch', {\n\tget: function get() {\n\t\treturn this._showOnTouch;\n\t},\n\tset: function set(a) {\n\t\tthis._showOnTouch !== a && (this._showOnTouch = a, this._showOnTouch && this.visible && (this.visible = !1));\n\t}\n});"}],[143]);