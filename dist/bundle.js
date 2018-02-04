webpackJsonp([0],[/* 0 */
/***/
function(t,e,i){var n=i(2),r=i(25),a=i(15),o=i(16),s=i(21),c=function(t,e,i){var l,h,u,f,d=t&c.F,p=t&c.G,m=t&c.S,y=t&c.P,g=t&c.B,v=p?n:m?n[e]||(n[e]={}):(n[e]||{}).prototype,b=p?r:r[e]||(r[e]={}),P=b.prototype||(b.prototype={});p&&(i=e);for(l in i)
// contains in native
h=!d&&v&&void 0!==v[l],
// export native or passed
u=(h?v:i)[l],
// bind timers to global for call from export context
f=g&&h?s(u,n):y&&"function"==typeof u?s(Function.call,u):u,
// extend global
v&&o(v,l,u,t&c.U),
// export
b[l]!=u&&a(b,l,f),y&&P[l]!=u&&(P[l]=u)};n.core=r,
// type bitmap
c.F=1,// forced
c.G=2,// global
c.S=4,// static
c.P=8,// proto
c.B=16,// bind
c.W=32,// wrap
c.U=64,// safe
c.R=128,// real proto method for `library`
t.exports=c},/* 1 */
/***/
function(t,e,i){var n=i(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},/* 2 */
/***/
function(t,e){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:// eslint-disable-next-line no-new-func
Function("return this")();"number"==typeof __g&&(__g=i)},/* 3 */
/***/
function(t,e,i){!function(i,n){
// CommonJS
t.exports=e=n()}(0,function(){/**
	 * CryptoJS core components.
	 */
var t=t||function(t,e){/*
	     * Local polyfil of Object.create
	     */
var i=Object.create||function(){function t(){}return function(e){var i;return t.prototype=e,i=new t,t.prototype=null,i}}(),n={},r=n.lib={},a=r.Base=function(){return{/**
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
extend:function(t){
// Spawn
var e=i(this);
// Augment
// Create default initializer
// Initializer's prototype is the subtype object
// Reference supertype
return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},/**
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
clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=a.extend({/**
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
toString:function(t){return(t||c).stringify(this)},/**
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
for(var a=0;a<r;a++){var o=i[a>>>2]>>>24-a%4*8&255;e[n+a>>>2]|=o<<24-(n+a)%4*8}else
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
clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},/**
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
random:function(e){for(var i,n=[],r=0;r<e;r+=4){var a=function(e){var e=e,i=987654321,n=4294967295;return function(){i=36969*(65535&i)+(i>>16)&n,e=18e3*(65535&e)+(e>>16)&n;var r=(i<<16)+e&n;return r/=4294967296,(r+=.5)*(t.random()>.5?1:-1)}}(4294967296*(i||t.random()));i=987654071*a(),n.push(4294967296*a()|0)}return new o.init(n,e)}}),s=n.enc={},c=s.Hex={/**
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
parse:function(t){for(var e=t.length,i=[],n=0;n<e;n+=2)i[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new o.init(i,e/2)}},l=s.Latin1={/**
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
parse:function(t){for(var e=t.length,i=[],n=0;n<e;n++)i[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new o.init(i,e)}},h=s.Utf8={/**
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
parse:function(t){return l.parse(unescape(encodeURIComponent(t)))}},u=r.BufferedBlockAlgorithm=a.extend({/**
				 * Resets this block algorithm's data buffer to its initial state.
				 *
				 * @example
				 *
				 *     bufferedBlockAlgorithm.reset();
				 */
reset:function(){
// Initial values
this._data=new o.init,this._nDataBytes=0},/**
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
var i=this._data,n=i.words,r=i.sigBytes,a=this.blockSize,s=4*a,c=r/s;
// Round up to include partial blocks
c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);
// Count words ready
var l=c*a,h=t.min(4*l,r);
// Process blocks
if(l){for(var u=0;u<l;u+=a)
// Perform concrete-algorithm logic
this._doProcessBlock(n,u);
// Remove processed words
var f=n.splice(0,l);i.sigBytes-=h}
// Return processed words
return new o.init(f,h)},/**
				 * Creates a copy of this object.
				 *
				 * @return {Object} The clone.
				 *
				 * @example
				 *
				 *     var clone = bufferedBlockAlgorithm.clone();
				 */
clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),f=(r.Hasher=u.extend({/**
				 * Configuration options.
				 */
cfg:a.extend(),/**
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
_createHmacHelper:function(t){return function(e,i){return new f.HMAC.init(t,i).finalize(e)}}}),n.algo={});return n}(Math);return t})},/* 4 */
/***/
function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},/* 5 */
/***/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/* 6 */
,/* 7 */
/***/
function(t,e,i){var n=i(57)("wks"),r=i(36),a=i(2).Symbol,o="function"==typeof a;(t.exports=function(t){return n[t]||(n[t]=o&&a[t]||(o?a:r)("Symbol."+t))}).store=n},/* 8 */
/***/
function(t,e,i){
// Thank's IE8 for his funny defineProperty
t.exports=!i(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 9 */
/***/
function(t,e,i){var n=i(1),r=i(103),a=i(26),o=Object.defineProperty;e.f=i(8)?Object.defineProperty:function(t,e,i){if(n(t),e=a(e,!0),n(i),r)try{return o(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},/* 10 */
/***/
function(t,e,i){
// 7.1.15 ToLength
var n=i(28),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},/* 11 */
/***/
function(t,e,i){
// 7.1.13 ToObject(argument)
var n=i(27);t.exports=function(t){return Object(n(t))}},/* 12 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(46))}(0,function(t){/**
	 * Cipher core components.
	 */
t.lib.Cipher||function(e){
// Shortcuts
var i=t,n=i.lib,r=n.Base,a=n.WordArray,o=n.BufferedBlockAlgorithm,s=i.enc,c=(s.Utf8,s.Base64),l=i.algo,h=l.EvpKDF,u=n.Cipher=o.extend({/**
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
o.reset.call(this),
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
_createHelper:function(){function t(t){return"string"==typeof t?S:P}return function(e){return{encrypt:function(i,n,r){return t(n).encrypt(e,i,n,r)},decrypt:function(i,n,r){return t(n).decrypt(e,i,n,r)}}}}()}),f=(n.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),i.mode={}),d=n.BlockCipherMode=r.extend({/**
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
for(var o=0;o<n;o++)t[i+o]^=a[o]}/**
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
pad:function(t,e){for(var i=4*e,n=i-t.sigBytes%i,r=n<<24|n<<16|n<<8|n,o=[],s=0;s<n;s+=4)o.push(r);var c=a.create(o,n);
// Add padding
t.concat(c)},/**
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
t.sigBytes-=e}},g=(n.BlockCipher=u.extend({/**
				 * Configuration options.
				 *
				 * @property {Mode} mode The block mode to use. Default: CBC
				 * @property {Padding} padding The padding strategy to use. Default: Pkcs7
				 */
cfg:u.cfg.extend({mode:p,padding:y}),reset:function(){
// Reset cipher
u.reset.call(this);
// Shortcuts
var t=this.cfg,e=t.iv,i=t.mode;
// Reset block mode
if(this._xformMode==this._ENC_XFORM_MODE)var n=i.createEncryptor;else{/* if (this._xformMode == this._DEC_XFORM_MODE) */
var n=i.createDecryptor;
// Keep at least one block in the buffer for unpadding
this._minBufferSize=1}this._mode&&this._mode.__creator==n?this._mode.init(this,e&&e.words):(this._mode=n.call(i,this,e&&e.words),this._mode.__creator=n)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){
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
if(i)var n=a.create([1398893684,1701076831]).concat(i).concat(e);else var n=e;return n.toString(c)},/**
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
var e=c.parse(t),i=e.words;
// Test for salt
if(1398893684==i[0]&&1701076831==i[1]){
// Extract salt
var n=a.create(i.slice(2,4));
// Remove salt from ciphertext
i.splice(0,4),e.sigBytes-=16}return g.create({ciphertext:e,salt:n})}},P=n.SerializableCipher=r.extend({/**
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
var r=t.createEncryptor(i,n),a=r.finalize(e),o=r.cfg;
// Create and return serializable cipher params
return g.create({ciphertext:a,key:i,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:t.blockSize,formatter:n.format})},/**
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
_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),w=i.kdf={},x=w.OpenSSL={/**
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
var r=h.create({keySize:e+i}).compute(t,n),o=a.create(r.words.slice(e),4*i);
// Return params
return r.sigBytes=4*e,g.create({key:r,iv:o,salt:n})}},S=n.PasswordBasedCipher=P.extend({/**
				 * Configuration options.
				 *
				 * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
				 */
cfg:P.cfg.extend({kdf:x}),/**
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
var a=P.encrypt.call(this,t,e,r.key,n);
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
return n.iv=r.iv,P.decrypt.call(this,t,e,r.key,n)}})}()})},/* 13 */
/***/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/* 14 */
/***/
function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},/* 15 */
/***/
function(t,e,i){var n=i(9),r=i(35);t.exports=i(8)?function(t,e,i){return n.f(t,e,r(1,i))}:function(t,e,i){return t[e]=i,t}},/* 16 */
/***/
function(t,e,i){var n=i(2),r=i(15),a=i(14),o=i(36)("src"),s=Function.toString,c=(""+s).split("toString");i(25).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,i,s){var l="function"==typeof i;l&&(a(i,"name")||r(i,"name",e)),t[e]!==i&&(l&&(a(i,o)||r(i,o,t[e]?""+t[e]:c.join(String(e)))),t===n?t[e]=i:s?t[e]?t[e]=i:r(t,e,i):(delete t[e],r(t,e,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||s.call(this)})},/* 17 */
/***/
function(t,e,i){var n=i(0),r=i(4),a=i(27),o=/"/g,s=function(t,e,i,n){var r=String(a(t)),s="<"+e;return""!==i&&(s+=" "+i+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(s),n(n.P+n.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},/* 18 */
/***/
function(t,e,i){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var n=i(54),r=i(27);t.exports=function(t){return n(r(t))}},/* 19 */
/***/
function(t,e,i){var n=i(55),r=i(35),a=i(18),o=i(26),s=i(14),c=i(103),l=Object.getOwnPropertyDescriptor;e.f=i(8)?l:function(t,e){if(t=a(t),e=o(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return r(!n.f.call(t,e),t[e])}},/* 20 */
/***/
function(t,e,i){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var n=i(14),r=i(11),a=i(74)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),n(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},/* 21 */
/***/
function(t,e,i){
// optional / simple context binding
var n=i(13);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,r){return t.call(e,i,n,r)}}return function(){return t.apply(e,arguments)}}},/* 22 */
/***/
function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},/* 23 */
/***/
function(t,e,i){"use strict";var n=i(4);t.exports=function(t,e){return!!t&&n(function(){
// eslint-disable-next-line no-useless-call
e?t.call(null,function(){},1):t.call(null)})}},/* 24 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),
// Game Configuration
e.default={phaserConfig:{
// width: 1500,
width:580,height:280,renderer:Phaser.AUTO,antialias:!0,multiTexture:!1,enableDebug:!0},localStorageName:"prophecy",weather:!0,playerHealth:100,scaleRate:3,forceMobile:!1,night:!0,enemies:!0,startMap:"map3"}},/* 25 */
/***/
function(t,e){var i=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=i)},/* 26 */
/***/
function(t,e,i){
// 7.1.1 ToPrimitive(input [, PreferredType])
var n=i(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){if(!n(t))return t;var i,r;if(e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!n(r=i.call(t)))return r;if(!e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},/* 27 */
/***/
function(t,e){
// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/* 28 */
/***/
function(t,e){
// 7.1.4 ToInteger
var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},/* 29 */
/***/
function(t,e,i){
// most Object methods by ES6 should accept primitives
var n=i(0),r=i(25),a=i(4);t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],o={};o[t]=e(i),n(n.S+n.F*a(function(){i(1)}),"Object",o)}},/* 30 */
/***/
function(t,e,i){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var n=i(21),r=i(54),a=i(11),o=i(10),s=i(91);t.exports=function(t,e){var i=1==t,c=2==t,l=3==t,h=4==t,u=6==t,f=5==t||u,d=e||s;return function(e,s,p){for(var m,y,g=a(e),v=r(g),b=n(s,p,3),P=o(v.length),w=0,x=i?d(e,P):c?d(e,0):void 0;P>w;w++)if((f||w in v)&&(m=v[w],y=b(m,w,g),t))if(i)x[w]=y;else if(y)
// map
switch(t){case 3:return!0;// some
case 5:return m;// find
case 6:return w;// findIndex
case 2:x.push(m)}else if(h)return!1;return u?-1:l||h?h:x}}},/* 31 */
/***/
function(t,e,i){"use strict";if(i(8)){var n=i(37),r=i(2),a=i(4),o=i(0),s=i(67),c=i(97),l=i(21),h=i(43),u=i(35),f=i(15),d=i(45),p=i(28),m=i(10),y=i(129),g=i(39),v=i(26),b=i(14),P=i(56),w=i(5),x=i(11),S=i(88),_=i(40),k=i(20),T=i(41).f,O=i(90),E=i(36),M=i(7),A=i(30),D=i(58),B=i(65),C=i(93),L=i(49),I=i(62),N=i(42),R=i(92),j=i(119),F=i(9),G=i(19),V=F.f,H=G.f,U=r.RangeError,X=r.TypeError,q=r.Uint8Array,Y=Array.prototype,W=c.ArrayBuffer,z=c.DataView,J=A(0),Z=A(2),K=A(3),Q=A(4),$=A(5),tt=A(6),et=D(!0),it=D(!1),nt=C.values,rt=C.keys,at=C.entries,ot=Y.lastIndexOf,st=Y.reduce,ct=Y.reduceRight,lt=Y.join,ht=Y.sort,ut=Y.slice,ft=Y.toString,dt=Y.toLocaleString,pt=M("iterator"),mt=M("toStringTag"),yt=E("typed_constructor"),gt=E("def_constructor"),vt=s.CONSTR,bt=s.TYPED,Pt=s.VIEW,wt=A(1,function(t,e){return Tt(B(t,t[gt]),e)}),xt=a(function(){
// eslint-disable-next-line no-undef
return 1===new q(new Uint16Array([1]).buffer)[0]}),St=!!q&&!!q.prototype.set&&a(function(){new q(1).set({})}),_t=function(t,e){var i=p(t);if(i<0||i%e)throw U("Wrong offset!");return i},kt=function(t){if(w(t)&&bt in t)return t;throw X(t+" is not a typed array!")},Tt=function(t,e){if(!(w(t)&&yt in t))throw X("It is not a typed array constructor!");return new t(e)},Ot=function(t,e){return Et(B(t,t[gt]),e)},Et=function(t,e){for(var i=0,n=e.length,r=Tt(t,n);n>i;)r[i]=e[i++];return r},Mt=function(t,e,i){V(t,e,{get:function(){return this._d[i]}})},At=function(t){var e,i,n,r,a,o,s=x(t),c=arguments.length,h=c>1?arguments[1]:void 0,u=void 0!==h,f=O(s);if(void 0!=f&&!S(f)){for(o=f.call(s),n=[],e=0;!(a=o.next()).done;e++)n.push(a.value);s=n}for(u&&c>2&&(h=l(h,arguments[2],2)),e=0,i=m(s.length),r=Tt(this,i);i>e;e++)r[e]=u?h(s[e],e):s[e];return r},Dt=function(){for(var t=0,e=arguments.length,i=Tt(this,e);e>t;)i[t]=arguments[t++];return i},Bt=!!q&&a(function(){dt.call(new q(1))}),Ct=function(){return dt.apply(Bt?ut.call(kt(this)):kt(this),arguments)},Lt={copyWithin:function(t,e){return j.call(kt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return Q(kt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){
// eslint-disable-line no-unused-vars
return R.apply(kt(this),arguments)},filter:function(t){return Ot(this,Z(kt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return $(kt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(kt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){J(kt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return it(kt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(kt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){
// eslint-disable-line no-unused-vars
return lt.apply(kt(this),arguments)},lastIndexOf:function(t){
// eslint-disable-line no-unused-vars
return ot.apply(kt(this),arguments)},map:function(t){return wt(kt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){
// eslint-disable-line no-unused-vars
return st.apply(kt(this),arguments)},reduceRight:function(t){
// eslint-disable-line no-unused-vars
return ct.apply(kt(this),arguments)},reverse:function(){for(var t,e=this,i=kt(e).length,n=Math.floor(i/2),r=0;r<n;)t=e[r],e[r++]=e[--i],e[i]=t;return e},some:function(t){return K(kt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ht.call(kt(this),t)},subarray:function(t,e){var i=kt(this),n=i.length,r=g(t,n);return new(B(i,i[gt]))(i.buffer,i.byteOffset+r*i.BYTES_PER_ELEMENT,m((void 0===e?n:g(e,n))-r))}},It=function(t,e){return Ot(this,ut.call(kt(this),t,e))},Nt=function(t){kt(this);var e=_t(arguments[1],1),i=this.length,n=x(t),r=m(n.length),a=0;if(r+e>i)throw U("Wrong length!");for(;a<r;)this[e+a]=n[a++]},Rt={entries:function(){return at.call(kt(this))},keys:function(){return rt.call(kt(this))},values:function(){return nt.call(kt(this))}},jt=function(t,e){return w(t)&&t[bt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ft=function(t,e){return jt(t,e=v(e,!0))?u(2,t[e]):H(t,e)},Gt=function(t,e,i){return!(jt(t,e=v(e,!0))&&w(i)&&b(i,"value"))||b(i,"get")||b(i,"set")||i.configurable||b(i,"writable")&&!i.writable||b(i,"enumerable")&&!i.enumerable?V(t,e,i):(t[e]=i.value,t)};vt||(G.f=Ft,F.f=Gt),o(o.S+o.F*!vt,"Object",{getOwnPropertyDescriptor:Ft,defineProperty:Gt}),a(function(){ft.call({})})&&(ft=dt=function(){return lt.call(this)});var Vt=d({},Lt);d(Vt,Rt),f(Vt,pt,Rt.values),d(Vt,{slice:It,set:Nt,constructor:function(){},toString:ft,toLocaleString:Ct}),Mt(Vt,"buffer","b"),Mt(Vt,"byteOffset","o"),Mt(Vt,"byteLength","l"),Mt(Vt,"length","e"),V(Vt,mt,{get:function(){return this[bt]}}),
// eslint-disable-next-line max-statements
t.exports=function(t,e,i,c){c=!!c;var l=t+(c?"Clamped":"")+"Array",u="get"+t,d="set"+t,p=r[l],g=p||{},v=p&&k(p),b=!p||!s.ABV,x={},S=p&&p.prototype,O=function(t,i){var n=t._d;return n.v[u](i*e+n.o,xt)},E=function(t,i,n){var r=t._d;c&&(n=(n=Math.round(n))<0?0:n>255?255:255&n),r.v[d](i*e+r.o,n,xt)},M=function(t,e){V(t,e,{get:function(){return O(this,e)},set:function(t){return E(this,e,t)},enumerable:!0})};b?(p=i(function(t,i,n,r){h(t,p,l,"_d");var a,o,s,c,u=0,d=0;if(w(i)){if(!(i instanceof W||"ArrayBuffer"==(c=P(i))||"SharedArrayBuffer"==c))return bt in i?Et(p,i):At.call(p,i);a=i,d=_t(n,e);var g=i.byteLength;if(void 0===r){if(g%e)throw U("Wrong length!");if((o=g-d)<0)throw U("Wrong length!")}else if((o=m(r)*e)+d>g)throw U("Wrong length!");s=o/e}else s=y(i),o=s*e,a=new W(o);for(f(t,"_d",{b:a,o:d,l:o,e:s,v:new z(a)});u<s;)M(t,u++)}),S=p.prototype=_(Vt),f(S,"constructor",p)):a(function(){p(1)})&&a(function(){new p(-1)})&&I(function(t){new p,// eslint-disable-line no-new
new p(null),// eslint-disable-line no-new
new p(1.5),// eslint-disable-line no-new
new p(t)},!0)||(p=i(function(t,i,n,r){h(t,p,l);var a;
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
return w(i)?i instanceof W||"ArrayBuffer"==(a=P(i))||"SharedArrayBuffer"==a?void 0!==r?new g(i,_t(n,e),r):void 0!==n?new g(i,_t(n,e)):new g(i):bt in i?Et(p,i):At.call(p,i):new g(y(i))}),J(v!==Function.prototype?T(g).concat(T(v)):T(g),function(t){t in p||f(p,t,g[t])}),p.prototype=S,n||(S.constructor=p));var A=S[pt],D=!!A&&("values"==A.name||void 0==A.name),B=Rt.values;f(p,yt,!0),f(S,bt,l),f(S,Pt,!0),f(S,gt,p),(c?new p(1)[mt]==l:mt in S)||V(S,mt,{get:function(){return l}}),x[l]=p,o(o.G+o.W+o.F*(p!=g),x),o(o.S,l,{BYTES_PER_ELEMENT:e}),o(o.S+o.F*a(function(){g.of.call(p,1)}),l,{from:At,of:Dt}),"BYTES_PER_ELEMENT"in S||f(S,"BYTES_PER_ELEMENT",e),o(o.P,l,Lt),N(l),o(o.P+o.F*St,l,{set:Nt}),o(o.P+o.F*!D,l,Rt),n||S.toString==ft||(S.toString=ft),o(o.P+o.F*a(function(){new p(1).slice()}),l,{slice:It}),o(o.P+o.F*(a(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!a(function(){S.toLocaleString.call([1,2])})),l,{toLocaleString:Ct}),L[l]=D?A:B,n||D||f(S,pt,B)}}else t.exports=function(){}},/* 32 */
/***/
function(t,e,i){var n=i(124),r=i(0),a=i(57)("metadata"),o=a.store||(a.store=new(i(127))),s=function(t,e,i){var r=o.get(t);if(!r){if(!i)return;o.set(t,r=new n)}var a=r.get(e);if(!a){if(!i)return;r.set(e,a=new n)}return a},c=function(t,e,i){var n=s(e,i,!1);return void 0!==n&&n.has(t)},l=function(t,e,i){var n=s(e,i,!1);return void 0===n?void 0:n.get(t)},h=function(t,e,i,n){s(i,n,!0).set(t,e)},u=function(t,e){var i=s(t,e,!1),n=[];return i&&i.forEach(function(t,e){n.push(e)}),n},f=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},d=function(t){r(r.S,"Reflect",t)};t.exports={store:o,map:s,has:c,get:l,set:h,keys:u,key:f,exp:d}},/* 33 */
/***/
function(t,e,i){var n=i(36)("meta"),r=i(5),a=i(14),o=i(9).f,s=0,c=Object.isExtensible||function(){return!0},l=!i(4)(function(){return c(Object.preventExtensions({}))}),h=function(t){o(t,n,{value:{i:"O"+ ++s,// object ID
w:{}}})},u=function(t,e){
// return primitive with prefix
if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){
// can't set metadata to uncaught frozen object
if(!c(t))return"F";
// not necessary to add metadata
if(!e)return"E";
// add missing metadata
h(t)}return t[n].i},f=function(t,e){if(!a(t,n)){
// can't set metadata to uncaught frozen object
if(!c(t))return!0;
// not necessary to add metadata
if(!e)return!1;
// add missing metadata
h(t)}return t[n].w},d=function(t){return l&&p.NEED&&c(t)&&!a(t,n)&&h(t),t},p=t.exports={KEY:n,NEED:!1,fastKey:u,getWeak:f,onFreeze:d}},/* 34 */
/***/
function(t,e,i){
// 22.1.3.31 Array.prototype[@@unscopables]
var n=i(7)("unscopables"),r=Array.prototype;void 0==r[n]&&i(15)(r,n,{}),t.exports=function(t){r[n][t]=!0}},/* 35 */
/***/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/* 36 */
/***/
function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+n).toString(36))}},/* 37 */
/***/
function(t,e){t.exports=!1},/* 38 */
/***/
function(t,e,i){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var n=i(105),r=i(75);t.exports=Object.keys||function(t){return n(t,r)}},/* 39 */
/***/
function(t,e,i){var n=i(28),r=Math.max,a=Math.min;t.exports=function(t,e){return t=n(t),t<0?r(t+e,0):a(t,e)}},/* 40 */
/***/
function(t,e,i){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var n=i(1),r=i(106),a=i(75),o=i(74)("IE_PROTO"),s=function(){},c=function(){
// Thrash, waste and sodomy: IE GC bug
var t,e=i(72)("iframe"),n=a.length;for(e.style.display="none",i(76).appendChild(e),e.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[a[n]];return c()};t.exports=Object.create||function(t,e){var i;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==t?(s.prototype=n(t),i=new s,s.prototype=null,i[o]=t):i=c(),void 0===e?i:r(i,e)}},/* 41 */
/***/
function(t,e,i){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var n=i(105),r=i(75).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},/* 42 */
/***/
function(t,e,i){"use strict";var n=i(2),r=i(9),a=i(8),o=i(7)("species");t.exports=function(t){var e=n[t];a&&e&&!e[o]&&r.f(e,o,{configurable:!0,get:function(){return this}})}},/* 43 */
/***/
function(t,e){t.exports=function(t,e,i,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(i+": incorrect invocation!");return t}},/* 44 */
/***/
function(t,e,i){var n=i(21),r=i(117),a=i(88),o=i(1),s=i(10),c=i(90),l={},h={},e=t.exports=function(t,e,i,u,f){var d,p,m,y,g=f?function(){return t}:c(t),v=n(i,u,e?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");
// fast case for arrays with default iterator
if(a(g)){for(d=s(t.length);d>b;b++)if((y=e?v(o(p=t[b])[0],p[1]):v(t[b]))===l||y===h)return y}else for(m=g.call(t);!(p=m.next()).done;)if((y=r(m,v,p.value,e))===l||y===h)return y};e.BREAK=l,e.RETURN=h},/* 45 */
/***/
function(t,e,i){var n=i(16);t.exports=function(t,e,i){for(var r in e)n(t,r,e[r],i);return t}},/* 46 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(101),i(102))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.Base,r=i.WordArray,a=e.algo,o=a.MD5,s=a.EvpKDF=n.extend({/**
			 * Configuration options.
			 *
			 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
			 * @property {Hasher} hasher The hash algorithm to use. Default: MD5
			 * @property {number} iterations The number of iterations to perform. Default: 1
			 */
cfg:n.extend({keySize:4,hasher:o,iterations:1}),/**
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
var i=this.cfg,n=i.hasher.create(),a=r.create(),o=a.words,s=i.keySize,c=i.iterations;o.length<s;){l&&n.update(l);var l=n.update(t).finalize(e);n.reset();
// Iterations
for(var h=1;h<c;h++)l=n.finalize(l),n.reset();a.concat(l)}return a.sigBytes=4*s,a}});/**
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
e.EvpKDF=function(t,e,i){return s.create(i).compute(t,e)}}(),t.EvpKDF})},/* 47 */
/***/
function(t,e,i){var n=i(9).f,r=i(14),a=i(7)("toStringTag");t.exports=function(t,e,i){t&&!r(t=i?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},/* 48 */
/***/
function(t,e,i){var n=i(0),r=i(27),a=i(4),o=i(78),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),h=RegExp(s+s+"*$"),u=function(t,e,i){var r={},s=a(function(){return!!o[t]()||c[t]()!=c}),l=r[t]=s?e(f):o[t];i&&(r[i]=l),n(n.P+n.F*s,"String",r)},f=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(h,"")),t};t.exports=u},/* 49 */
/***/
function(t,e){t.exports={}},/* 50 */
/***/
function(t,e,i){var n=i(5);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},/* 51 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){return function(){function e(t,e,i){for(var n=[],a=0,o=0;o<e;o++)if(o%4){var s=i[t.charCodeAt(o-1)]<<o%4*2,c=i[t.charCodeAt(o)]>>>6-o%4*2;n[a>>>2]|=(s|c)<<24-a%4*8,a++}return r.create(n,a)}
// Shortcuts
var i=t,n=i.lib,r=n.WordArray,a=i.enc;a.Base64={/**
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
t.clamp();for(var r=[],a=0;a<i;a+=3)for(var o=e[a>>>2]>>>24-a%4*8&255,s=e[a+1>>>2]>>>24-(a+1)%4*8&255,c=e[a+2>>>2]>>>24-(a+2)%4*8&255,l=o<<16|s<<8|c,h=0;h<4&&a+.75*h<i;h++)r.push(n.charAt(l>>>6*(3-h)&63));
// Add padding
var u=n.charAt(64);if(u)for(;r.length%4;)r.push(u);return r.join("")},/**
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
var i=t.length,n=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var a=0;a<n.length;a++)r[n.charCodeAt(a)]=a}
// Ignore padding
var o=n.charAt(64);if(o){var s=t.indexOf(o);-1!==s&&(i=s)}
// Convert
return e(t,i,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64})},/* 52 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){return function(e){function i(t,e,i,n,r,a,o){var s=t+(e&i|~e&n)+r+o;return(s<<a|s>>>32-a)+e}function n(t,e,i,n,r,a,o){var s=t+(e&n|i&~n)+r+o;return(s<<a|s>>>32-a)+e}function r(t,e,i,n,r,a,o){var s=t+(e^i^n)+r+o;return(s<<a|s>>>32-a)+e}function a(t,e,i,n,r,a,o){var s=t+(i^(e|~n))+r+o;return(s<<a|s>>>32-a)+e}
// Shortcuts
var o=t,s=o.lib,c=s.WordArray,l=s.Hasher,h=o.algo,u=[];
// Compute constants
!function(){for(var t=0;t<64;t++)u[t]=4294967296*e.abs(e.sin(t+1))|0}();/**
		 * MD5 hash algorithm.
		 */
var f=h.MD5=l.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){
// Swap endian
for(var o=0;o<16;o++){
// Shortcuts
var s=e+o,c=t[s];t[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}
// Shortcuts
var l=this._hash.words,h=t[e+0],f=t[e+1],d=t[e+2],p=t[e+3],m=t[e+4],y=t[e+5],g=t[e+6],v=t[e+7],b=t[e+8],P=t[e+9],w=t[e+10],x=t[e+11],S=t[e+12],_=t[e+13],k=t[e+14],T=t[e+15],O=l[0],E=l[1],M=l[2],A=l[3];
// Computation
O=i(O,E,M,A,h,7,u[0]),A=i(A,O,E,M,f,12,u[1]),M=i(M,A,O,E,d,17,u[2]),E=i(E,M,A,O,p,22,u[3]),O=i(O,E,M,A,m,7,u[4]),A=i(A,O,E,M,y,12,u[5]),M=i(M,A,O,E,g,17,u[6]),E=i(E,M,A,O,v,22,u[7]),O=i(O,E,M,A,b,7,u[8]),A=i(A,O,E,M,P,12,u[9]),M=i(M,A,O,E,w,17,u[10]),E=i(E,M,A,O,x,22,u[11]),O=i(O,E,M,A,S,7,u[12]),A=i(A,O,E,M,_,12,u[13]),M=i(M,A,O,E,k,17,u[14]),E=i(E,M,A,O,T,22,u[15]),O=n(O,E,M,A,f,5,u[16]),A=n(A,O,E,M,g,9,u[17]),M=n(M,A,O,E,x,14,u[18]),E=n(E,M,A,O,h,20,u[19]),O=n(O,E,M,A,y,5,u[20]),A=n(A,O,E,M,w,9,u[21]),M=n(M,A,O,E,T,14,u[22]),E=n(E,M,A,O,m,20,u[23]),O=n(O,E,M,A,P,5,u[24]),A=n(A,O,E,M,k,9,u[25]),M=n(M,A,O,E,p,14,u[26]),E=n(E,M,A,O,b,20,u[27]),O=n(O,E,M,A,_,5,u[28]),A=n(A,O,E,M,d,9,u[29]),M=n(M,A,O,E,v,14,u[30]),E=n(E,M,A,O,S,20,u[31]),O=r(O,E,M,A,y,4,u[32]),A=r(A,O,E,M,b,11,u[33]),M=r(M,A,O,E,x,16,u[34]),E=r(E,M,A,O,k,23,u[35]),O=r(O,E,M,A,f,4,u[36]),A=r(A,O,E,M,m,11,u[37]),M=r(M,A,O,E,v,16,u[38]),E=r(E,M,A,O,w,23,u[39]),O=r(O,E,M,A,_,4,u[40]),A=r(A,O,E,M,h,11,u[41]),M=r(M,A,O,E,p,16,u[42]),E=r(E,M,A,O,g,23,u[43]),O=r(O,E,M,A,P,4,u[44]),A=r(A,O,E,M,S,11,u[45]),M=r(M,A,O,E,T,16,u[46]),E=r(E,M,A,O,d,23,u[47]),O=a(O,E,M,A,h,6,u[48]),A=a(A,O,E,M,v,10,u[49]),M=a(M,A,O,E,k,15,u[50]),E=a(E,M,A,O,y,21,u[51]),O=a(O,E,M,A,S,6,u[52]),A=a(A,O,E,M,p,10,u[53]),M=a(M,A,O,E,w,15,u[54]),E=a(E,M,A,O,f,21,u[55]),O=a(O,E,M,A,b,6,u[56]),A=a(A,O,E,M,T,10,u[57]),M=a(M,A,O,E,g,15,u[58]),E=a(E,M,A,O,_,21,u[59]),O=a(O,E,M,A,m,6,u[60]),A=a(A,O,E,M,x,10,u[61]),M=a(M,A,O,E,d,15,u[62]),E=a(E,M,A,O,P,21,u[63]),
// Intermediate hash value
l[0]=l[0]+O|0,l[1]=l[1]+E|0,l[2]=l[2]+M|0,l[3]=l[3]+A|0},_doFinalize:function(){
// Shortcuts
var t=this._data,i=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;
// Add padding
i[r>>>5]|=128<<24-r%32;var a=e.floor(n/4294967296),o=n;i[15+(r+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),i[14+(r+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t.sigBytes=4*(i.length+1),
// Hash final blocks
this._process();
// Swap endian
for(var s=this._hash,c=s.words,l=0;l<4;l++){
// Shortcut
var h=c[l];c[l]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}
// Return final computed hash
return s},clone:function(){var t=l.clone.call(this);return t._hash=this._hash.clone(),t}});/**
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
o.MD5=l._createHelper(f),/**
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
o.HmacMD5=l._createHmacHelper(f)}(Math),t.MD5})},/* 53 */
,/* 54 */
/***/
function(t,e,i){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var n=i(22);
// eslint-disable-next-line no-prototype-builtins
t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},/* 55 */
/***/
function(t,e){e.f={}.propertyIsEnumerable},/* 56 */
/***/
function(t,e,i){
// getting tag from 19.1.3.6 Object.prototype.toString()
var n=i(22),r=i(7)("toStringTag"),a="Arguments"==n(function(){return arguments}()),o=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,i,s;// @@toStringTag case
// builtinTag case
// ES3 arguments fallback
return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=o(e=Object(t),r))?i:a?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},/* 57 */
/***/
function(t,e,i){var n=i(2),r=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},/* 58 */
/***/
function(t,e,i){
// false -> Array#indexOf
// true  -> Array#includes
var n=i(18),r=i(10),a=i(39);t.exports=function(t){return function(e,i,o){var s,c=n(e),l=r(c.length),h=a(o,l);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(t&&i!=i){for(;l>h;)
// eslint-disable-next-line no-self-compare
if((s=c[h++])!=s)return!0}else for(;l>h;h++)if((t||h in c)&&c[h]===i)return t||h||0;return!t&&-1}}},/* 59 */
/***/
function(t,e){e.f=Object.getOwnPropertySymbols},/* 60 */
/***/
function(t,e,i){
// 7.2.2 IsArray(argument)
var n=i(22);t.exports=Array.isArray||function(t){return"Array"==n(t)}},/* 61 */
/***/
function(t,e,i){
// 7.2.8 IsRegExp(argument)
var n=i(5),r=i(22),a=i(7)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},/* 62 */
/***/
function(t,e,i){var n=i(7)("iterator"),r=!1;try{var a=[7][n]();a.return=function(){r=!0},
// eslint-disable-next-line no-throw-literal
Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var i=!1;try{var a=[7],o=a[n]();o.next=function(){return{done:i=!0}},a[n]=function(){return o},t(a)}catch(t){}return i}},/* 63 */
/***/
function(t,e,i){"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var n=i(1);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},/* 64 */
/***/
function(t,e,i){"use strict";var n=i(15),r=i(16),a=i(4),o=i(27),s=i(7);t.exports=function(t,e,i){var c=s(t),l=i(o,c,""[t]),h=l[0],u=l[1];a(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,h),n(RegExp.prototype,c,2==e?// 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
// 21.2.5.11 RegExp.prototype[@@split](string, limit)
function(t,e){return u.call(t,this,e)}:// 21.2.5.6 RegExp.prototype[@@match](string)
// 21.2.5.9 RegExp.prototype[@@search](string)
function(t){return u.call(t,this)}))}},/* 65 */
/***/
function(t,e,i){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var n=i(1),r=i(13),a=i(7)("species");t.exports=function(t,e){var i,o=n(t).constructor;return void 0===o||void 0==(i=n(o)[a])?e:r(i)}},/* 66 */
/***/
function(t,e,i){"use strict";var n=i(2),r=i(0),a=i(16),o=i(45),s=i(33),c=i(44),l=i(43),h=i(5),u=i(4),f=i(62),d=i(47),p=i(79);t.exports=function(t,e,i,m,y,g){var v=n[t],b=v,P=y?"set":"add",w=b&&b.prototype,x={},S=function(t){var e=w[t];a(w,t,"delete"==t?function(t){return!(g&&!h(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!h(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,i){return e.call(this,0===t?0:t,i),this})};if("function"==typeof b&&(g||w.forEach&&!u(function(){(new b).entries().next()}))){var _=new b,k=_[P](g?{}:-0,1)!=_,T=u(function(){_.has(1)}),O=f(function(t){new b(t)}),E=!g&&u(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var t=new b,e=5;e--;)t[P](e,e);return!t.has(-0)});O||(b=e(function(e,i){l(e,b,t);var n=p(new v,e,b);return void 0!=i&&c(i,y,n[P],n),n}),b.prototype=w,w.constructor=b),(T||E)&&(S("delete"),S("has"),y&&S("get")),(E||k)&&S(P),
// weak collections should not contains .clear method
g&&w.clear&&delete w.clear}else
// create collection constructor
b=m.getConstructor(e,t,y,P),o(b.prototype,i),s.NEED=!0;return d(b,t),x[t]=b,r(r.G+r.W+r.F*(b!=v),x),g||m.setStrong(b,t,y),b}},/* 67 */
/***/
function(t,e,i){for(var n,r=i(2),a=i(15),o=i(36),s=o("typed_array"),c=o("view"),l=!(!r.ArrayBuffer||!r.DataView),h=l,u=0,f="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");u<9;)(n=r[f[u++]])?(a(n.prototype,s,!0),a(n.prototype,c,!0)):h=!1;t.exports={ABV:l,CONSTR:h,TYPED:s,VIEW:c}},/* 68 */
/***/
function(t,e,i){"use strict";
// Forced replacement prototype accessors methods
t.exports=i(37)||!i(4)(function(){var t=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,t,function(){}),delete i(2)[t]})},/* 69 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=i(0);t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},/* 70 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=i(0),r=i(13),a=i(21),o=i(44);t.exports=function(t){n(n.S,t,{from:function(t){var e,i,n,s,c=arguments[1];return r(this),e=void 0!==c,e&&r(c),void 0==t?new this:(i=[],e?(n=0,s=a(c,arguments[2],2),o(t,!1,function(t){i.push(s(t,n++))})):o(t,!1,i.push,i),new this(i))}})}},/* 71 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){return function(e){
// Shortcuts
var i=t,n=i.lib,r=n.Base,a=n.WordArray,o=i.x64={};o.Word=r.extend({/**
			 * Initializes a newly created 64-bit word.
			 *
			 * @param {number} high The high 32 bits.
			 * @param {number} low The low 32 bits.
			 *
			 * @example
			 *
			 *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
			 */
init:function(t,e){this.high=t,this.low=e}}),o.WordArray=r.extend({/**
			 * Initializes a newly created word array.
			 *
			 * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
			 * @param {number} sigBytes (Optional) The number of significant bytes in the words.
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.x64.WordArray.create();
			 *
			 *     var wordArray = CryptoJS.x64.WordArray.create([
			 *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
			 *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
			 *     ]);
			 *
			 *     var wordArray = CryptoJS.x64.WordArray.create([
			 *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
			 *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
			 *     ], 10);
			 */
init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:8*t.length},/**
			 * Converts this 64-bit word array to a 32-bit word array.
			 *
			 * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
			 *
			 * @example
			 *
			 *     var x32WordArray = x64WordArray.toX32();
			 */
toX32:function(){for(var t=this.words,e=t.length,i=[],n=0;n<e;n++){var r=t[n];i.push(r.high),i.push(r.low)}return a.create(i,this.sigBytes)},/**
			 * Creates a copy of this word array.
			 *
			 * @return {X64WordArray} The clone.
			 *
			 * @example
			 *
			 *     var clone = x64WordArray.clone();
			 */
clone:function(){for(var t=r.clone.call(this),e=t.words=this.words.slice(0),i=e.length,n=0;n<i;n++)e[n]=e[n].clone();return t}})}(),t})},/* 72 */
/***/
function(t,e,i){var n=i(5),r=i(2).document,a=n(r)&&n(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},/* 73 */
/***/
function(t,e,i){var n=i(2),r=i(25),a=i(37),o=i(104),s=i(9).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},/* 74 */
/***/
function(t,e,i){var n=i(57)("keys"),r=i(36);t.exports=function(t){return n[t]||(n[t]=r(t))}},/* 75 */
/***/
function(t,e){
// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 76 */
/***/
function(t,e,i){var n=i(2).document;t.exports=n&&n.documentElement},/* 77 */
/***/
function(t,e,i){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var n=i(5),r=i(1),a=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i(21)(Function.call,i(19).f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return a(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:a}},/* 78 */
/***/
function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},/* 79 */
/***/
function(t,e,i){var n=i(5),r=i(77).set;t.exports=function(t,e,i){var a,o=e.constructor;return o!==i&&"function"==typeof o&&(a=o.prototype)!==i.prototype&&n(a)&&r&&r(t,a),t}},/* 80 */
/***/
function(t,e,i){"use strict";var n=i(28),r=i(27);t.exports=function(t){var e=String(r(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Count can't be negative");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},/* 81 */
/***/
function(t,e){
// 20.2.2.28 Math.sign(x)
t.exports=Math.sign||function(t){
// eslint-disable-next-line no-self-compare
return 0==(t=+t)||t!=t?t:t<0?-1:1}},/* 82 */
/***/
function(t,e){
// 20.2.2.14 Math.expm1(x)
var i=Math.expm1;t.exports=!i||
// Old FF bug
i(10)>22025.465794806718||i(10)<22025.465794806718||
// Tor Browser bug
-2e-17!=i(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:i},/* 83 */
/***/
function(t,e,i){var n=i(28),r=i(27);
// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,i){var a,o,s=String(r(e)),c=n(i),l=s.length;return c<0||c>=l?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}}},/* 84 */
/***/
function(t,e,i){"use strict";var n=i(37),r=i(0),a=i(16),o=i(15),s=i(14),c=i(49),l=i(85),h=i(47),u=i(20),f=i(7)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,i,m,y,g,v){l(i,e,m);var b,P,w,x=function(t){if(!d&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},S=e+" Iterator",_="values"==y,k=!1,T=t.prototype,O=T[f]||T["@@iterator"]||y&&T[y],E=!d&&O||x(y),M=y?_?x("entries"):E:void 0,A="Array"==e?T.entries||O:O;if(
// Fix native
A&&(w=u(A.call(new t)))!==Object.prototype&&w.next&&(
// Set @@toStringTag to native iterators
h(w,S,!0),
// fix for some old engines
n||s(w,f)||o(w,f,p)),
// fix Array#{values, @@iterator}.name in V8 / FF
_&&O&&"values"!==O.name&&(k=!0,E=function(){return O.call(this)}),
// Define iterator
n&&!v||!d&&!k&&T[f]||o(T,f,E),
// Plug for library
c[e]=E,c[S]=p,y)if(b={values:_?E:x("values"),keys:g?E:x("keys"),entries:M},v)for(P in b)P in T||a(T,P,b[P]);else r(r.P+r.F*(d||k),e,b);return b}},/* 85 */
/***/
function(t,e,i){"use strict";var n=i(40),r=i(35),a=i(47),o={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
i(15)(o,i(7)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=n(o,{next:r(1,i)}),a(t,e+" Iterator")}},/* 86 */
/***/
function(t,e,i){
// helper for String#{startsWith, endsWith, includes}
var n=i(61),r=i(27);t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(r(t))}},/* 87 */
/***/
function(t,e,i){var n=i(7)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},/* 88 */
/***/
function(t,e,i){
// check on default Array iterator
var n=i(49),r=i(7)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||a[r]===t)}},/* 89 */
/***/
function(t,e,i){"use strict";var n=i(9),r=i(35);t.exports=function(t,e,i){e in t?n.f(t,e,r(0,i)):t[e]=i}},/* 90 */
/***/
function(t,e,i){var n=i(56),r=i(7)("iterator"),a=i(49);t.exports=i(25).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||a[n(t)]}},/* 91 */
/***/
function(t,e,i){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var n=i(245);t.exports=function(t,e){return new(n(t))(e)}},/* 92 */
/***/
function(t,e,i){"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=i(11),r=i(39),a=i(10);t.exports=function(t){for(var e=n(this),i=a(e.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,i),c=o>2?arguments[2]:void 0,l=void 0===c?i:r(c,i);l>s;)e[s++]=t;return e}},/* 93 */
/***/
function(t,e,i){"use strict";var n=i(34),r=i(120),a=i(49),o=i(18);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
t.exports=i(84)(Array,"Array",function(t,e){this._t=o(t),// target
this._i=0,// next index
this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,i):"values"==e?r(0,t[i]):r(0,[i,t[i]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
a.Arguments=a.Array,n("keys"),n("values"),n("entries")},/* 94 */
/***/
function(t,e,i){var n,r,a,o=i(21),s=i(110),c=i(76),l=i(72),h=i(2),u=h.process,f=h.setImmediate,d=h.clearImmediate,p=h.MessageChannel,m=h.Dispatch,y=0,g={},v=function(){var t=+this;
// eslint-disable-next-line no-prototype-builtins
if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){v.call(t.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
f&&d||(f=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return g[++y]=function(){
// eslint-disable-next-line no-new-func
s("function"==typeof t?t:Function(t),e)},n(y),y},d=function(t){delete g[t]},
// Node.js 0.8-
"process"==i(22)(u)?n=function(t){u.nextTick(o(v,t,1))}:m&&m.now?n=function(t){m.now(o(v,t,1))}:p?(r=new p,a=r.port2,r.port1.onmessage=b,n=o(a.postMessage,a,1)):h.addEventListener&&"function"==typeof postMessage&&!h.importScripts?(n=function(t){h.postMessage(t+"","*")},h.addEventListener("message",b,!1)):n="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),v.call(t)}}:function(t){setTimeout(o(v,t,1),0)}),t.exports={set:f,clear:d}},/* 95 */
/***/
function(t,e,i){var n=i(2),r=i(94).set,a=n.MutationObserver||n.WebKitMutationObserver,o=n.process,s=n.Promise,c="process"==i(22)(o);t.exports=function(){var t,e,i,l=function(){var n,r;for(c&&(n=o.domain)&&n.exit();t;){r=t.fn,t=t.next;try{r()}catch(n){throw t?i():e=void 0,n}}e=void 0,n&&n.enter()};
// Node.js
if(c)i=function(){o.nextTick(l)};else if(!a||n.navigator&&n.navigator.standalone)if(s&&s.resolve){var h=s.resolve();i=function(){h.then(l)}}else i=function(){
// strange IE + webpack dev server bug - use .call(global)
r.call(n,l)};else{var u=!0,f=document.createTextNode("");new a(l).observe(f,{characterData:!0}),// eslint-disable-line no-new
i=function(){f.data=u=!u}}return function(n){var r={fn:n,next:void 0};e&&(e.next=r),t||(t=r,i()),e=r}}},/* 96 */
/***/
function(t,e,i){"use strict";function n(t){var e,i;this.promise=new t(function(t,n){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=n}),this.resolve=r(e),this.reject=r(i)}
// 25.4.1.5 NewPromiseCapability(C)
var r=i(13);t.exports.f=function(t){return new n(t)}},/* 97 */
/***/
function(t,e,i){"use strict";
// IEEE754 conversions based on https://github.com/feross/ieee754
function n(t,e,i){var n,r,a,o=new Array(i),s=8*i-e-1,c=(1<<s)-1,l=c>>1,h=23===e?j(2,-24)-j(2,-77):0,u=0,f=t<0||0===t&&1/t<0?1:0;for(t=R(t),
// eslint-disable-next-line no-self-compare
t!=t||t===I?(
// eslint-disable-next-line no-self-compare
r=t!=t?1:0,n=c):(n=F(G(t)/V),t*(a=j(2,-n))<1&&(n--,a*=2),t+=n+l>=1?h/a:h*j(2,1-l),t*a>=2&&(n++,a/=2),n+l>=c?(r=0,n=c):n+l>=1?(r=(t*a-1)*j(2,e),n+=l):(r=t*j(2,l-1)*j(2,e),n=0));e>=8;o[u++]=255&r,r/=256,e-=8);for(n=n<<e|r,s+=e;s>0;o[u++]=255&n,n/=256,s-=8);return o[--u]|=128*f,o}function r(t,e,i){var n,r=8*i-e-1,a=(1<<r)-1,o=a>>1,s=r-7,c=i-1,l=t[c--],h=127&l;for(l>>=7;s>0;h=256*h+t[c],c--,s-=8);for(n=h&(1<<-s)-1,h>>=-s,s+=e;s>0;n=256*n+t[c],c--,s-=8);if(0===h)h=1-o;else{if(h===a)return n?NaN:l?-I:I;n+=j(2,e),h-=o}return(l?-1:1)*n*j(2,h-e)}function a(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function o(t){return[255&t]}function s(t){return[255&t,t>>8&255]}function c(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function l(t){return n(t,52,8)}function h(t){return n(t,23,4)}function u(t,e,i){T(t[M],e,{get:function(){return this[i]}})}function f(t,e,i,n){var r=+i,a=_(r);if(a+e>t[U])throw L(A);var o=t[H]._b,s=a+t[X],c=o.slice(s,s+e);return n?c:c.reverse()}function d(t,e,i,n,r,a){var o=+i,s=_(o);if(s+e>t[U])throw L(A);for(var c=t[H]._b,l=s+t[X],h=n(+r),u=0;u<e;u++)c[l+u]=h[a?u:e-u-1]}var p=i(2),m=i(8),y=i(37),g=i(67),v=i(15),b=i(45),P=i(4),w=i(43),x=i(28),S=i(10),_=i(129),k=i(41).f,T=i(9).f,O=i(92),E=i(47),M="prototype",A="Wrong index!",D=p.ArrayBuffer,B=p.DataView,C=p.Math,L=p.RangeError,I=p.Infinity,N=D,R=C.abs,j=C.pow,F=C.floor,G=C.log,V=C.LN2,H=m?"_b":"buffer",U=m?"_l":"byteLength",X=m?"_o":"byteOffset";if(g.ABV){if(!P(function(){D(1)})||!P(function(){new D(-1)})||P(function(){// eslint-disable-line no-new
// eslint-disable-line no-new
// eslint-disable-line no-new
return new D,new D(1.5),new D(NaN),"ArrayBuffer"!=D.name})){D=function(t){return w(this,D),new N(_(t))};for(var q,Y=D[M]=N[M],W=k(N),z=0;W.length>z;)(q=W[z++])in D||v(D,q,N[q]);y||(Y.constructor=D)}
// iOS Safari 7.x bug
var J=new B(new D(2)),Z=B[M].setInt8;J.setInt8(0,2147483648),J.setInt8(1,2147483649),!J.getInt8(0)&&J.getInt8(1)||b(B[M],{setInt8:function(t,e){Z.call(this,t,e<<24>>24)},setUint8:function(t,e){Z.call(this,t,e<<24>>24)}},!0)}else D=function(t){w(this,D,"ArrayBuffer");var e=_(t);this._b=O.call(new Array(e),0),this[U]=e},B=function(t,e,i){w(this,B,"DataView"),w(t,D,"DataView");var n=t[U],r=x(e);if(r<0||r>n)throw L("Wrong offset!");if(i=void 0===i?n-r:S(i),r+i>n)throw L("Wrong length!");this[H]=t,this[X]=r,this[U]=i},m&&(u(D,"byteLength","_l"),u(B,"buffer","_b"),u(B,"byteLength","_l"),u(B,"byteOffset","_o")),b(B[M],{getInt8:function(t){return f(this,1,t)[0]<<24>>24},getUint8:function(t){return f(this,1,t)[0]},getInt16:function(t){var e=f(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=f(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return a(f(this,4,t,arguments[1]))},getUint32:function(t){return a(f(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return r(f(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return r(f(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){d(this,1,t,o,e)},setUint8:function(t,e){d(this,1,t,o,e)},setInt16:function(t,e){d(this,2,t,s,e,arguments[2])},setUint16:function(t,e){d(this,2,t,s,e,arguments[2])},setInt32:function(t,e){d(this,4,t,c,e,arguments[2])},setUint32:function(t,e){d(this,4,t,c,e,arguments[2])},setFloat32:function(t,e){d(this,4,t,h,e,arguments[2])},setFloat64:function(t,e){d(this,8,t,l,e,arguments[2])}});E(D,"ArrayBuffer"),E(B,"DataView"),v(B[M],g.VIEW,!0),e.ArrayBuffer=D,e.DataView=B},/* 98 */
/***/
function(t,e,i){var n=i(2),r=n.navigator;t.exports=r&&r.userAgent||""},/* 99 */
/***/
function(t,e){!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e,i){n(this,t),this.x=e||0,this.y=i||0}return r(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"equals",value:function(t){return t&&this.x===t.x&&this.y===t.y}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"normalized",value:function(){var e=this.length();return 0===e?new t(0,0):new t(this.x/e,this.y/e)}},{key:"perpendicular",value:function(){return new t(-this.y,this.x)}},{key:"rotated",value:function(e){var i=Math.cos(e),n=Math.sin(e);return new t(i*this.x+n*this.y,-n*this.x+i*this.y)}},{key:"plus",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"minus",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"perpDot",value:function(t){return this.x*t.y-this.y*t.x}},{key:"scale",value:function(e){return new t(this.x*e,this.y*e)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=function(t){return t&&t.__esModule?t:{default:t}}(o),c=function(){function t(e,i,n,a){r(this,t),this.left=void 0===e?Number.POSITIVE_INFINITY:e,this.right=void 0===n?Number.NEGATIVE_INFINITY:n,this.top=void 0===i?Number.POSITIVE_INFINITY:i,this.bottom=void 0===a?Number.NEGATIVE_INFINITY:a}return a(t,[{key:"isEmpty",value:function(){return this.left>this.right||this.top>this.bottom}},{key:"width",value:function(){var t=this.right-this.left;return t>=0?t:NaN}},{key:"height",value:function(){var t=this.bottom-this.top;return t>=0?t:NaN}},{key:"centre",value:function(){return new s.default(.5*(this.left+this.right),.5*(this.top+this.bottom))}},{key:"containsPoint",value:function(t){return this.left<=t.x&&t.x<=this.right&&this.top<=t.y&&t.y<=this.bottom}},{key:"containsPoints",value:function(t){var e=!0,i=!1,n=void 0;try{for(var r,a=t[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=r.value;if(!this.containsPoint(o))return!1}}catch(t){i=!0,n=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw n}}return!0}},{key:"intersects",value:function(t){return this.left<=t.right&&this.right>=t.left&&this.top<=t.bottom&&this.bottom>=t.top}},{key:"translated",value:function(e){return new t(this.left+e.x,this.top+e.y,this.right+e.x,this.bottom+e.y)}}],[{key:"fromPoints",value:function(e){var i=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(i=Math.min.apply(Math,n(e.map(function(t){return t.x}))),r=Math.min.apply(Math,n(e.map(function(t){return t.y}))),a=Math.max.apply(Math,n(e.map(function(t){return t.x}))),o=Math.max.apply(Math,n(e.map(function(t){return t.y})))):(i=e.x,r=e.y,a=e.x,o=e.y),new t(i,r,a,o)}},{key:"fromAABBs",value:function(e){var i=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;return Array.isArray(e)?(i=Math.min.apply(Math,n(e.map(function(t){return t.left}))),r=Math.min.apply(Math,n(e.map(function(t){return t.top}))),a=Math.max.apply(Math,n(e.map(function(t){return t.right}))),o=Math.max.apply(Math,n(e.map(function(t){return t.bottom})))):(i=Math.min(i,aabb.left),r=Math.min(r,aabb.top),a=Math.max(a,aabb.right),o=Math.max(o,aabb.bottom)),new t(i,r,a,o)}}]),t}();e.default=c},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(9),c=n(s),l=i(0),h=n(l),u=i(1),f=n(u),d=i(3),p=n(d),m=function(t){return t.reduce(function(t,e){return t+e},0)/t.length},y=function(t,e,i,n){if(t>i)throw new Error("Right must be greater than Left");if(e>n)throw new Error("Bottom must be greater than Top")},g=function(){function t(e){a(this,t),this.vertices=e,this.recompute()}return o(t,[{key:"recompute",value:function(){var t=this.vertices;if(this.aabb=f.default.fromPoints(t),this.edges=[],this.normals=[],this.count=t.length,this.centre=new h.default(m(t.map(function(t){return t.x})),m(t.map(function(t){return t.y}))),this.count>1)for(var e=0;e<this.count;e++){var i=(e+1)%this.count,n=t[i].minus(t[e]);this.edges.push(n);var r=n.normalized().perpendicular(),a=t[e].minus(this.centre);a.dot(r)<0&&(r=r.scale(-1)),this.normals.push(r)}}},{key:"isValid",value:function(){if(this.count<4)return!0;for(var t=0,e=0;e<this.count;e++){var i=(e+1)%this.count,n=this.edges[e].perpDot(this.edges[i]);if(n*t<0)return!1;t=n}return!0}},{key:"projectOntoAxis",value:function(t){var e=new p.default,i=!0,n=!1,r=void 0;try{for(var a,o=this.vertices[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var s=a.value,c=s.dot(t);e.extendTo(c)}}catch(t){n=!0,r=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw r}}return e}},{key:"rotated",value:function(e){var i=[],n=!0,r=!1,a=void 0;try{for(var o,s=this.vertices[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value,l=new h.default(c.x,c.y).minus(this.centre),u=l.rotated(e),f=this.centre.plus(u);i.push(f)}}catch(t){r=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}return new t(i)}},{key:"translated",value:function(e){return new t(this.vertices.map(function(t){return t.plus(e)}))}}],[{key:"fromRectangle",value:function(e,i,n,r){return y(e,i,n,r),new t([new h.default(e,i),new h.default(n,i),new h.default(n,r),new h.default(e,r)])}},{key:"fromCapsule",value:function(e,i,n,a,o){if(o<3)throw new Error("Specify at least 3 cap segments");y(e,i,n,a);var s=n-e;if(a-i<s)throw new Error("Capsule height must be larger than width");var c=.5*s,l=[].concat(r(Array(o).keys())).map(function(t){return-t*Math.PI/o}),u=.5*(e+n),f=l.map(function(t){return new h.default(Math.cos(t),Math.sin(t)).scale(c)}),d=new h.default(u,i+c),p=f.map(function(t){return d.plus(t)});p.push(new h.default(e,d.y));var m=new h.default(u,a-c);return p=p.concat(f.map(function(t){return m.minus(t)})),p.push(new h.default(n,m.y)),new t(p)}},{key:"generateConvexPolygons",value:function(e){var i=e.map(function(t){return[t.x,t.y]});return c.default.decomp(i).map(function(e){return new t(e.map(function(t){return new h.default(t[0],t[1])}))})}}]),t}();e.default=g},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t),this.makeEmpty()}return r(t,[{key:"extendTo",value:function(t){this.min>t&&(this.min=t),this.max<t&&(this.max=t)}},{key:"containsPoint",value:function(t){return this.min<=t&&t<=this.max}},{key:"containsRange",value:function(t){return this.min<=t.min&&this.max>t.max}},{key:"isEmpty",value:function(){return this.min>this.max}},{key:"makeEmpty",value:function(){this.min=Number.POSITIVE_INFINITY,this.max=Number.NEGATIVE_INFINITY}},{key:"length",value:function(){return this.min>this.max?Number.NaN:this.max-this.min}}],[{key:"intersection",value:function(e,i){var n=new t;return n.min=Math.max(e.min,i.min),n.max=Math.min(e.max,i.max),n.min>n.max&&n.makeEmpty(),n}},{key:"bound",value:function(e,i){var n=new t;return n.min=Math.min(e.min,i.min),n.max=Math.max(e.max,i.max),n}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=n(o),c=i(2),l=n(c),h=i(3),u=n(h),f=i(1),d=(n(f),i(10)),p=n(d),m=function(){function t(e){r(this,t),this.objectLayerJson=e,this.shapes=[];var i=!0,n=!1,a=void 0;try{for(var o,s=e.objects[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value;c.polygon?this.addPolygon(c):c.polyline||c.ellipse||c.gid||(c.text,this.addRectangle(c))}}catch(t){n=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}this.quadTree=new p.default(this.shapes,5,5)}return a(t,[{key:"addRectangle",value:function(t){var e=t.width,i=t.height,n=new s.default(e,0),r=new s.default(0,i),a=-t.rotation*Math.PI/180;a&&(n=n.rotated(a),r=r.rotated(a));var o={x:t.x,y:t.y,width:t.width,height:t.height,polygon:[{x:0,y:0},n,n.plus(r),r],properties:t.properties||{}};this.addPolygon(o)}},{key:"addPolygon",value:function(t){var e=t.polygon.map(function(e){return new s.default(t.x+e.x,t.y+e.y)}),i=l.default.generateConvexPolygons(e),n=!0,r=!1,a=void 0;try{for(var o,c=i[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var h=o.value;this.addConvexPolygon(h,t.properties||{})}}catch(t){r=!0,a=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw a}}}},{key:"addConvexPolygon",value:function(t,e){var i=t.aabb,n={type:"polygon",left:i.left,top:i.top,right:i.right,bottom:i.bottom,polygon:t,properties:e||{},collideWidth:function(t){var e=t.sprite,i=new s.default(e.x,e.y),n=t.x,r=t.x+t.width,a=t.y,o=t.y+t.height,c=void 0,h=void 0;t.plus&&t.plus.shape?(h=t.plus.shape.translated(i),c=h.normals.concat(this.polygon.normals)):(h=l.default.fromRectangle(n,a,r,o),c=[new s.default(1,0),new s.default(0,1)].concat(this.polygon.normals));var f=Number.POSITIVE_INFINITY,d=void 0,p=!0,m=!1,y=void 0;try{for(var g,v=c[Symbol.iterator]();!(p=(g=v.next()).done);p=!0){var b=g.value,P=this.polygon.projectOntoAxis(b),w=h.projectOntoAxis(b);if(u.default.intersection(P,w).isEmpty())return null;var x=Math.min(Math.abs(P.max-w.min),Math.abs(w.max-P.min));f>x&&(f=x,d=b)}}catch(t){m=!0,y=t}finally{try{!p&&v.return&&v.return()}finally{if(m)throw y}}return h.centre.minus(this.polygon.centre).dot(d)<0&&(d=d.scale(-1)),{penetration:d.scale(-f),normal:d}}};this.shapes.push(n)}}]),t}();e.default=m},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(6),a=n(r),o=i(14),s=n(o),c=i(15),l=n(c),h=i(16),u=n(h);Phaser.Plugin.TilemapPlus=function(t,e){function i(t){return t+"-TilemapPlus"}Phaser.Plugin.call(this,t,e);var n=Phaser.Loader.prototype.tilemap;Phaser.Loader.prototype.tilemap=function(t,e,r,a){n.call(this,t,e,r,a),this.json(i(t),e)};var r=Phaser.GameObjectFactory.prototype.tilemap;Phaser.GameObjectFactory.prototype.tilemap=function(t,e,n,o,s){var c=r.call(this,t,e,n,o,s),l=this.game.cache.getJSON(i(t));return c.plus=new a.default(l,this.game.time,c),c};var o=Phaser.Tilemap.prototype.createLayer;Phaser.Tilemap.prototype.createLayer=function(t,e,i,n){var r=o.call(this,t,e,i,n);return r.plus=new s.default(r),r};var c=Phaser.Tilemap.prototype.addTilesetImage;Phaser.Tilemap.prototype.addTilesetImage=function(t,e,i,n,r,a,o){var s=c.call(this,t,e,i,n,r,a,o);return s.plus=new l.default(s),s};var h=Phaser.GameObjectFactory.prototype.sprite;Phaser.GameObjectFactory.prototype.sprite=function(t,e,i,n,r){var a=h.call(this,t,e,i,n,r);return a.plus=new u.default(a),a}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=i(7),o=n(a),s=i(8),c=n(s),l=i(11),h=n(l),u=function t(e,i,n){r(this,t),this.tilemapJson=e,this.time=i,this.tilemap=n,this.timer=null,this.tileAnimations=[],this.game=i.game,this.animation=new o.default(e,i,n),this.events=new h.default(e),this.physics=new c.default(e,this.events),this.properties=e.properties||{}};e.default=u},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){var e=t.tiles;if(e){var i=!0,n=!1,r=void 0;try{for(var o,s=Object.keys(e)[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value,l=e[c],h=l.animation;h&&h.length>0&&a.bind(this)(t,c,h)}}catch(t){n=!0,r=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw r}}}}function a(t,e,i){var n=i.map(function(t){return{tileId:t.tileid,duration:t.duration}});if(0!==n.length){var r=this.tilemap.tilesets.find(function(e){return e.name===t.name}),a={frames:n,tileset:r,tileLocations:s.bind(this)(r.firstgid+parseInt(e)),currentFrame:0,currentDuration:0};this.tileAnimations.push(a)}}function o(){var t=this.time.elapsedMS,e=!1,i=!0,n=!1,r=void 0;try{for(var a,o=this.tileAnimations[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var s=a.value,c=s.frames,l=s.tileset,h=s.tileLocations,u=s.currentFrame,f=c[u].duration;if(s.currentDuration+=t,s.currentDuration>f){s.currentDuration-=f,s.currentFrame=(u+1)%c.length;var d=l.firstgid+c[s.currentFrame].tileId,p=!0,m=!1,y=void 0;try{for(var g,v=h[Symbol.iterator]();!(p=(g=v.next()).done);p=!0){var b=g.value;this.tilemap.getTile(b.x,b.y,b.layer,!0).index=d}}catch(t){m=!0,y=t}finally{try{!p&&v.return&&v.return()}finally{if(m)throw y}}e=!0}}}catch(t){n=!0,r=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw r}}if(e){var P=!0,w=!1,x=void 0;try{for(var S,_=this.tilemap.layers[Symbol.iterator]();!(P=(S=_.next()).done);P=!0)S.value.dirty=!0}catch(t){w=!0,x=t}finally{try{!P&&_.return&&_.return()}finally{if(w)throw x}}}}function s(t){var e=[],i=!0,n=!1,r=void 0;try{for(var a,o=this.tilemapJson.layers[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var s=a.value;if("tilelayer"===s.type)for(var c=s.data,l=s.width,h=s.height,u=0;u<h;u++)for(var f=0;f<l;f++)c[u*l+f]===t&&e.push({x:f,y:u,layer:s.name})}}catch(t){n=!0,r=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw r}}return e}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),l=function(){function t(e,i,r){n(this,t),this.tilemapJson=e,this.time=i,this.tilemap=r,this.timer=null,this.tileAnimations=[],this.game=i.game}return c(t,[{key:"enable",value:function(){var t=this;if(null==this.timer){var e=!0,i=!1,n=void 0;try{for(var a,s=this.tilemapJson.tilesets[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var c=a.value;c.tiles&&r.bind(this)(c)}}catch(t){i=!0,n=t}finally{try{!e&&s.return&&s.return()}finally{if(i)throw n}}this.timer=this.time.events.loop(20,function(){return o.bind(t)()})}}},{key:"disable",value:function(){null!=this.timer&&(this.time.events.remove(this.timer),this.timer=null,this.tileAnimations=[])}}]),t}();e.default=l},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=n(o),c=i(2),l=(n(c),i(3)),h=(n(l),i(1)),u=n(h),f=i(4),d=n(f),p=function(){function t(e,i){r(this,t),this.tilemapJson=e,this.events=i}return a(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new d.default(e)}},{key:"collideWith",value:function(t){if(this.shapeLayer){var e=t.body,i=t.game.physics.arcade.gravity,n=new s.default(i.x,i.y),r=(n.normalized(),new s.default(e.velocity.x,e.velocity.y));e.plus||(e.plus={});var a=e.plus;a.contactNormals=[],a.penetrations=[],a.contactNormal||(a.contactNormal=new s.default),a.contactNormal.x=a.contactNormal.y=0;var o=new s.default,c=0,l=new u.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),h=this.shapeLayer.quadTree.candidateShapes(l),f=[],d=!0,p=!1,m=void 0;try{for(var y,g=h[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var v=y.value,b=v.collideWidth(e);if(b){var P=b.normal;if(!(r.dot(P)>=0)){var w=b.penetration;if(new s.default(e.x-e.prev.x,e.y-e.prev.y).minus(w).dot(P)>=-1){var x=v.properties,S=x.collideOnly;if(S){if("down"===S&&(r.y<0||P.y>=0))continue;if("up"===S&&(r.y>0||P.y<=0))continue;if("right"===S&&(r.x<0||P.x>=0))continue;if("left"===S&&(r.x>0||P.x<=0))continue}a.contactNormal=a.contactNormal.plus(P),a.contactNormals.push(P),o=o.plus(w),a.penetrations.push(w);var _=x.bounce;_&&(c+=_),f.push(v)}}}}}catch(t){p=!0,m=t}finally{try{!d&&g.return&&g.return()}finally{if(p)throw m}}e.x-=o.x,e.y-=o.y,a.contactNormal=a.contactNormal.normalized();var k=a.contactNormal,T=r.dot(k),O=k.scale(T),E=r.minus(O),M=void 0;M=O.scale(-c);var A=E,D=M.plus(A);e.velocity.x=D.x,e.velocity.y=D.y,this.updateBlocked(t),this.events.collisions.notify(t,f,r,D,k)}}},{key:"updateBlocked",value:function(t){var e=t.body,i=e.plus.contactNormal;e.blocked.up=e.blocked.up||i.y>0,e.blocked.down=e.blocked.down||i.y<0,e.blocked.left=e.blocked.left||i.x>0,e.blocked.right=e.blocked.right||i.x<0,e.blocked.none=0==i.x&&0==i.y}}]),t}();e.default=p},function(t,e){function i(t,e,i){i=i||0;var n,r,a,o,s,c,l,h=[0,0];return n=t[1][1]-t[0][1],r=t[0][0]-t[1][0],a=n*t[0][0]+r*t[0][1],o=e[1][1]-e[0][1],s=e[0][0]-e[1][0],c=o*e[0][0]+s*e[0][1],l=n*s-o*r,T(l,0,i)||(h[0]=(s*a-r*c)/l,h[1]=(n*c-o*a)/l),h}function n(t,e,i,n){var r=e[0]-t[0],a=e[1]-t[1],o=n[0]-i[0],s=n[1]-i[1];if(o*a-s*r==0)return!1;var c=(r*(i[1]-t[1])+a*(t[0]-i[0]))/(o*a-s*r),l=(o*(t[1]-i[1])+s*(i[0]-t[0]))/(s*r-o*a);return c>=0&&c<=1&&l>=0&&l<=1}function r(t,e,i){return(e[0]-t[0])*(i[1]-t[1])-(i[0]-t[0])*(e[1]-t[1])}function a(t,e,i){return r(t,e,i)>0}function o(t,e,i){return r(t,e,i)>=0}function s(t,e,i){return r(t,e,i)<0}function c(t,e,i){return r(t,e,i)<=0}function l(t,e,i,n){if(n){var a=O,o=E;a[0]=e[0]-t[0],a[1]=e[1]-t[1],o[0]=i[0]-e[0],o[1]=i[1]-e[1];var s=a[0]*o[0]+a[1]*o[1],c=Math.sqrt(a[0]*a[0]+a[1]*a[1]),l=Math.sqrt(o[0]*o[0]+o[1]*o[1]);return Math.acos(s/(c*l))<n}return 0===r(t,e,i)}function h(t,e){var i=e[0]-t[0],n=e[1]-t[1];return i*i+n*n}function u(t,e){var i=t.length;return t[e<0?e%i+i:e%i]}function f(t){t.length=0}function d(t,e,i,n){for(var r=i;r<n;r++)t.push(e[r])}function p(t){for(var e=0,i=t,n=1;n<t.length;++n)(i[n][1]<i[e][1]||i[n][1]===i[e][1]&&i[n][0]>i[e][0])&&(e=n);a(u(t,e-1),u(t,e),u(t,e+1))||m(t)}function m(t){for(var e=[],i=t.length,n=0;n!==i;n++)e.push(t.pop());for(var n=0;n!==i;n++)t[n]=e[n]}function y(t,e){return s(u(t,e-1),u(t,e),u(t,e+1))}function g(t,e,n){var r,a,s=M,l=A;if(o(u(t,e+1),u(t,e),u(t,n))&&c(u(t,e-1),u(t,e),u(t,n)))return!1;a=h(u(t,e),u(t,n));for(var f=0;f!==t.length;++f)if((f+1)%t.length!==e&&f!==e&&o(u(t,e),u(t,n),u(t,f+1))&&c(u(t,e),u(t,n),u(t,f))&&(s[0]=u(t,e),s[1]=u(t,n),l[0]=u(t,f),l[1]=u(t,f+1),r=i(s,l),h(u(t,e),r)<a))return!1;return!0}function v(t,e,i,n){var r=n||[];if(f(r),e<i)for(var a=e;a<=i;a++)r.push(t[a]);else{for(var a=0;a<=i;a++)r.push(t[a]);for(var a=e;a<t.length;a++)r.push(t[a])}return r}function b(t){for(var e=[],i=[],n=[],r=[],a=Number.MAX_VALUE,o=0;o<t.length;++o)if(y(t,o))for(var s=0;s<t.length;++s)if(g(t,o,s)){i=b(v(t,o,s,r)),n=b(v(t,s,o,r));for(var c=0;c<n.length;c++)i.push(n[c]);i.length<a&&(e=i,a=i.length,e.push([u(t,o),u(t,s)]))}return e}function P(t){var e=b(t);return e.length>0?w(t,e):[t]}function w(t,e){if(0===e.length)return[t];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var i=[t],n=0;n<e.length;n++)for(var r=e[n],a=0;a<i.length;a++){var o=i[a],s=w(o,r);if(s){i.splice(a,1),i.push(s[0],s[1]);break}}return i}var r=e,n=t.indexOf(r[0]),a=t.indexOf(r[1]);return-1!==n&&-1!==a&&[v(t,n,a),v(t,a,n)]}function x(t){var e,i=t;for(e=0;e<i.length-1;e++)for(var r=0;r<e-1;r++)if(n(i[e],i[e+1],i[r],i[r+1]))return!1;for(e=1;e<i.length-2;e++)if(n(i[0],i[i.length-1],i[e],i[e+1]))return!1;return!0}function S(t,e,i,n,r){r=r||0;var a=e[1]-t[1],o=t[0]-e[0],s=a*t[0]+o*t[1],c=n[1]-i[1],l=i[0]-n[0],h=c*i[0]+l*i[1],u=a*l-c*o;return T(u,0,r)?[0,0]:[(l*s-o*h)/u,(a*h-c*s)/u]}function _(t,e,i,n,r,l,f){l=l||100,f=f||0,r=r||25,e=void 0!==e?e:[],i=i||[],n=n||[];var p=[0,0],m=[0,0],g=[0,0],v=0,b=0,P=0,w=0,x=0,k=0,T=0,O=[],E=[],M=t,A=t;if(A.length<3)return e;if(++f>l)return console.warn("quickDecomp: max level ("+l+") reached."),e;for(var D=0;D<t.length;++D)if(y(M,D)){i.push(M[D]),v=b=Number.MAX_VALUE;for(var B=0;B<t.length;++B)a(u(M,D-1),u(M,D),u(M,B))&&c(u(M,D-1),u(M,D),u(M,B-1))&&(g=S(u(M,D-1),u(M,D),u(M,B),u(M,B-1)),s(u(M,D+1),u(M,D),g)&&(P=h(M[D],g))<b&&(b=P,m=g,k=B)),a(u(M,D+1),u(M,D),u(M,B+1))&&c(u(M,D+1),u(M,D),u(M,B))&&(g=S(u(M,D+1),u(M,D),u(M,B),u(M,B+1)),a(u(M,D-1),u(M,D),g)&&(P=h(M[D],g))<v&&(v=P,p=g,x=B));if(k===(x+1)%t.length)g[0]=(m[0]+p[0])/2,g[1]=(m[1]+p[1])/2,n.push(g),D<x?(d(O,M,D,x+1),O.push(g),E.push(g),0!==k&&d(E,M,k,M.length),d(E,M,0,D+1)):(0!==D&&d(O,M,D,M.length),d(O,M,0,x+1),O.push(g),E.push(g),d(E,M,k,D+1));else{if(k>x&&(x+=t.length),w=Number.MAX_VALUE,x<k)return e;for(var B=k;B<=x;++B)o(u(M,D-1),u(M,D),u(M,B))&&c(u(M,D+1),u(M,D),u(M,B))&&(P=h(u(M,D),u(M,B)))<w&&(w=P,T=B%t.length);D<T?(d(O,M,D,T+1),0!==T&&d(E,M,T,A.length),d(E,M,0,D+1)):(0!==D&&d(O,M,D,A.length),d(O,M,0,T+1),d(E,M,T,D+1))}return O.length<E.length?(_(O,e,i,n,r,l,f),_(E,e,i,n,r,l,f)):(_(E,e,i,n,r,l,f),_(O,e,i,n,r,l,f)),e}return e.push(t),e}function k(t,e){for(var i=0,n=t.length-1;t.length>3&&n>=0;--n)l(u(t,n-1),u(t,n),u(t,n+1),e)&&(t.splice(n%t.length,1),i++);return i}function T(t,e,i){return i=i||0,Math.abs(t-e)<i}t.exports={decomp:P,quickDecomp:_,isSimple:x,removeCollinearPoints:k,makeCCW:p};var O=[],E=[],M=[],A=[]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=(n(o),i(1)),c=n(s),l=function(){function t(e,i,n){if(r(this,t),this.maxLevel=i,this.maxShapes=n,e.length<n||i<=1)this.shapes=e;else{var a=c.default.fromAABBs(e.map(function(t){return t.polygon.aabb})),o=a.centre();this.pivot=o;var s=[],l=[],h=[],u=[],f=[],d=!0,p=!1,m=void 0;try{for(var y,g=e[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var v=y.value,b=v.polygon.aabb;b.right<o.x&&b.bottom<o.y?l.push(v):b.left>o.x&&b.bottom<o.y?h.push(v):b.right<o.x&&b.top>o.y?u.push(v):b.left>o.x&&b.top>o.y?f.push(v):s.push(v)}}catch(t){p=!0,m=t}finally{try{!d&&g.return&&g.return()}finally{if(p)throw m}}this.shapes=s,l.length>0&&(this.topLeftNode=new t(l,i-1,n)),h.length>0&&(this.topRightNode=new t(h,i-1,n)),u.length>0&&(this.bottomLeftNode=new t(u,i-1,n)),f.length>0&&(this.bottomRightNode=new t(f,i-1,n))}}return a(t,[{key:"candidateShapes",value:function(t){var e=this.shapes.filter(function(e){return e.polygon.aabb.intersects(t)}),i=this.pivot;if(!i)return e;var n=this.topLeftNode;n&&t.left<=i.x&&t.top<=i.y&&(e=e.concat(n.candidateShapes(t)));var r=this.topRightNode;r&&t.right>=i.x&&t.top<=i.y&&(e=e.concat(r.candidateShapes(t)));var a=this.bottomLeftNode;a&&t.left<=i.x&&t.bottom>=i.y&&(e=e.concat(a.candidateShapes(t)));var o=this.bottomRightNode;return o&&t.right>=i.x&&t.bottom>=i.y&&(e=e.concat(o.candidateShapes(t))),e}}]),t}();e.default=l},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=i(12),o=n(a),s=i(13),c=n(s),l=function t(e){r(this,t),this.collisions=new o.default,this.regions=new c.default(e)};e.default=l},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(){n(this,t),this.spriteListeners=new Map,this.spriteCollisions=new Map}return r(t,[{key:"add",value:function(t,e){return this.getSpriteListeners(t).push(e),e}},{key:"remove",value:function(t,e){var i=this.getSpriteListeners(t);this.spriteListeners.set(t,i.filter(function(t){return t!=e}))}},{key:"notify",value:function(t,e,i,n,r){var a=this.spriteCollisions.has(t)?this.spriteCollisions.get(t):[],o=e.filter(function(t){return!a.find(function(e){return e===t})});this.spriteCollisions.set(t,e);var s=!0,c=!1,l=void 0;try{for(var h,u=o[Symbol.iterator]();!(s=(h=u.next()).done);s=!0){var f=h.value,d=!0,p=!1,m=void 0;try{for(var y,g=this.getSpriteListeners(t)[Symbol.iterator]();!(d=(y=g.next()).done);d=!0)(0,y.value)(f,i,n,r)}catch(t){p=!0,m=t}finally{try{!d&&g.return&&g.return()}finally{if(p)throw m}}}}catch(t){c=!0,l=t}finally{try{!s&&u.return&&u.return()}finally{if(c)throw l}}}},{key:"getSpriteListeners",value:function(t){return this.spriteListeners.has(t)||this.spriteListeners.set(t,[]),this.spriteListeners.get(t)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=(n(o),i(2)),c=(n(s),i(3)),l=(n(c),i(1)),h=n(l),u=i(4),f=n(u),d=function(){function t(e){r(this,t),this.tilemapJson=e,this.spriteStates=new Map}return a(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapeLayer=new f.default(e)}},{key:"onEnterAdd",value:function(t,e){return this.getSpriteState(t).enterListeners.push(e),e}},{key:"onEnterRemove",value:function(t,e){var i=this.getSpriteState(t);i.enterListeners=i.enterListeners.filter(function(t){return t!=e})}},{key:"onLeaveAdd",value:function(t,e){return this.getSpriteState(t).leaveListeners.push(e),e}},{key:"onLeaveRemove",value:function(t,e){var i=this.getSpriteState(t);i.leaveListeners=i.leaveListeners.filter(function(t){return t!=e})}},{key:"triggerWith",value:function(t){if(this.shapeLayer){var e=t.body,i=new h.default(e.x-1,e.y-1,e.x+e.width+1,e.y+e.height+1),n=this.shapeLayer.quadTree.candidateShapes(i),r=[],a=!0,o=!1,s=void 0;try{for(var c,l=n[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var u=c.value;u.collideWidth(e)&&r.push(u)}}catch(t){o=!0,s=t}finally{try{!a&&l.return&&l.return()}finally{if(o)throw s}}this.notify(t,r)}}},{key:"notify",value:function(t,e){var i=this.getSpriteState(t),n=i.collisions,r=e.filter(function(t){return!n.find(function(e){return e===t})}),a=n.filter(function(t){return!e.find(function(e){return e===t})});i.collisions=e;var o=!0,s=!1,c=void 0;try{for(var l,h=r[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var u=l.value,f=!0,d=!1,p=void 0;try{for(var m,y=i.enterListeners[Symbol.iterator]();!(f=(m=y.next()).done);f=!0)(0,m.value)(u)}catch(t){d=!0,p=t}finally{try{!f&&y.return&&y.return()}finally{if(d)throw p}}}}catch(t){s=!0,c=t}finally{try{!o&&h.return&&h.return()}finally{if(s)throw c}}var g=!0,v=!1,b=void 0;try{for(var P,w=a[Symbol.iterator]();!(g=(P=w.next()).done);g=!0){var x=P.value,S=!0,_=!1,k=void 0;try{for(var T,O=i.leaveListeners[Symbol.iterator]();!(S=(T=O.next()).done);S=!0)(0,T.value)(x)}catch(t){_=!0,k=t}finally{try{!S&&O.return&&O.return()}finally{if(_)throw k}}}}catch(t){v=!0,b=t}finally{try{!g&&w.return&&w.return()}finally{if(v)throw b}}}},{key:"getSpriteState",value:function(t){return this.spriteStates.has(t)||this.spriteStates.set(t,{collisions:[],enterListeners:[],leaveListeners:[]}),this.spriteStates.get(t)}}]),t}();e.default=d},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e){n(this,t),this.properties=e.layer.properties||{}};e.default=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e){n(this,t),this.properties=e.properties||{}};e.default=r},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(2),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(){function t(e){n(this,t),this.sprite=e}return r(t,[{key:"setBodyCapsule",value:function(t,e,i){var n=this.sprite;if(!n.body)throw new Error("Enable arcade physics before assigning body shape");var r=n.body;r.plus=r.plus||{};var a=.5*t,s=.5*e;r.plus.shape=o.default.fromCapsule(-a,-s,+a,+s,i)}}]),t}();e.default=s}])},/* 100 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=n(o),c=i(144),l=n(c),h=function(){function t(e,i,n,a,o,c,h,u){var f=this;r(this,t),this.game=e,this.map=i,this.player=n,this.layer=o,this.cornerCutting=c,this.target=a,this.movingSpeed=h,this.finderCallObject=u,this.showPaths=!1,this.pathToFollow=[],this.walkables=[2,9,11],this.blocked=!1,this.followingPath=!1,this.trail=e.add.group(),this.path,this.marker,this.movingTween=this.game.add.tween(this.player),this.movingTween.onComplete.add(function(){f.followingPath=!1,f.player.movable=!0,f.game.time.events.add(s.default.Timer.SECOND*f.game.rnd.integerInRange(3,8),function(){this.followPath()},f)}),this.pathfinder=new l.default(this.game),this.cornerCutting&&(this.pathfinder.easystar.enableCornerCutting(),this.pathfinder.easystar.enableDiagonals()),this.pathfinder.easystar.setIterationsPerCalculation(1),this.pathfinder.setGrid(this.map.layers[0].data,this.walkables),this.findPathTo(this.layer.getTileX(this.target.x),this.layer.getTileY(this.target.y))}return a(t,[{key:"findPathTo",value:function(t,e){var i=this;this.pathfinder.setCallbackFunction(function(t){if(i.trail.destroy(!0,!0),null!==t){if(i.showPaths)for(var e=t.length,n=0;n<e;n++)i.marker=i.game.add.graphics(36*t[n].x,36*t[n].y),i.marker.data.cellX=t[n].x,i.marker.data.cellY=t[n].y,i.trail.add(i.marker),i.marker.lineStyle(2,11224642,.5),i.marker.drawRect(8,8,16,16);i.pathToFollow=t}}),this.pathfinder.preparePathCalculation([this.layer.getTileX(this.player.x),this.layer.getTileY(this.player.y)],[t,e]),this.pathfinder.calculatePath()}},{key:"followPath",value:function(){if(this.pathToFollow.length&&!this.followingPath){1==this.pathToFollow.length&&void 0!==this.finderCallObject&&(this.finderCallObject.finderCall=!0),this.player.movable=!1;var t=this.pathToFollow.shift();if(t){this.showPaths&&this.trail.forEach(function(e){e.data.cellX===t.x&&e.data.cellY===t.y&&e.destroy()});var e=36*t.x+18,i=36*t.y+18;this.followingPath=!0,this.movingTween.target=this.player,this.movingTween.timeline=[],this.movingTween.to({x:e,y:i},this.movingSpeed),this.movingTween.start()}}}}]),t}();e.default=h},/* 101 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.WordArray,r=i.Hasher,a=e.algo,o=[],s=a.SHA1=r.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){
// Computation
for(var i=this._hash.words,n=i[0],r=i[1],a=i[2],s=i[3],c=i[4],l=0;l<80;l++){if(l<16)o[l]=0|t[e+l];else{var h=o[l-3]^o[l-8]^o[l-14]^o[l-16];o[l]=h<<1|h>>>31}var u=(n<<5|n>>>27)+c+o[l];u+=l<20?1518500249+(r&a|~r&s):l<40?1859775393+(r^a^s):l<60?(r&a|r&s|a&s)-1894007588:(r^a^s)-899497514,c=s,s=a,a=r<<30|r>>>2,r=n,n=u}
// Intermediate hash value
i[0]=i[0]+n|0,i[1]=i[1]+r|0,i[2]=i[2]+a|0,i[3]=i[3]+s|0,i[4]=i[4]+c|0},_doFinalize:function(){
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
e.SHA1=r._createHelper(s),/**
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
e.HmacSHA1=r._createHmacHelper(s)}(),t.SHA1})},/* 102 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){!function(){
// Shortcuts
var e=t,i=e.lib,n=i.Base,r=e.enc,a=r.Utf8,o=e.algo;o.HMAC=n.extend({/**
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
for(var r=this._oKey=e.clone(),o=this._iKey=e.clone(),s=r.words,c=o.words,l=0;l<i;l++)s[l]^=1549556828,c[l]^=909522486;r.sigBytes=o.sigBytes=n,
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
var e=this._hasher,i=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(i))}})}()})},/* 103 */
/***/
function(t,e,i){t.exports=!i(8)&&!i(4)(function(){return 7!=Object.defineProperty(i(72)("div"),"a",{get:function(){return 7}}).a})},/* 104 */
/***/
function(t,e,i){e.f=i(7)},/* 105 */
/***/
function(t,e,i){var n=i(14),r=i(18),a=i(58)(!1),o=i(74)("IE_PROTO");t.exports=function(t,e){var i,s=r(t),c=0,l=[];for(i in s)i!=o&&n(s,i)&&l.push(i);
// Don't enum bug & hidden keys
for(;e.length>c;)n(s,i=e[c++])&&(~a(l,i)||l.push(i));return l}},/* 106 */
/***/
function(t,e,i){var n=i(9),r=i(1),a=i(38);t.exports=i(8)?Object.defineProperties:function(t,e){r(t);for(var i,o=a(e),s=o.length,c=0;s>c;)n.f(t,i=o[c++],e[i]);return t}},/* 107 */
/***/
function(t,e,i){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var n=i(18),r=i(41).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):r(n(t))}},/* 108 */
/***/
function(t,e,i){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var n=i(38),r=i(59),a=i(55),o=i(11),s=i(54),c=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
t.exports=!c||i(4)(function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(
// eslint-disable-line no-unused-vars
var i=o(t),c=arguments.length,l=1,h=r.f,u=a.f;c>l;)for(var f,d=s(arguments[l++]),p=h?n(d).concat(h(d)):n(d),m=p.length,y=0;m>y;)u.call(d,f=p[y++])&&(i[f]=d[f]);return i}:c},/* 109 */
/***/
function(t,e,i){"use strict";var n=i(13),r=i(5),a=i(110),o=[].slice,s={},c=function(t,e,i){if(!(e in s)){for(var n=[],r=0;r<e;r++)n[r]="a["+r+"]";
// eslint-disable-next-line no-new-func
s[e]=Function("F,a","return new F("+n.join(",")+")")}return s[e](t,i)};t.exports=Function.bind||function(t){var e=n(this),i=o.call(arguments,1),s=function(){var n=i.concat(o.call(arguments));return this instanceof s?c(e,n.length,n):a(e,n,t)};return r(e.prototype)&&(s.prototype=e.prototype),s}},/* 110 */
/***/
function(t,e){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
t.exports=function(t,e,i){var n=void 0===i;switch(e.length){case 0:return n?t():t.call(i);case 1:return n?t(e[0]):t.call(i,e[0]);case 2:return n?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},/* 111 */
/***/
function(t,e,i){var n=i(2).parseInt,r=i(48).trim,a=i(78),o=/^[-+]?0[xX]/;t.exports=8!==n(a+"08")||22!==n(a+"0x16")?function(t,e){var i=r(String(t),3);return n(i,e>>>0||(o.test(i)?16:10))}:n},/* 112 */
/***/
function(t,e,i){var n=i(2).parseFloat,r=i(48).trim;t.exports=1/n(i(78)+"-0")!=-1/0?function(t){var e=r(String(t),3),i=n(e);return 0===i&&"-"==e.charAt(0)?-0:i}:n},/* 113 */
/***/
function(t,e,i){var n=i(22);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=n(t))throw TypeError(e);return+t}},/* 114 */
/***/
function(t,e,i){
// 20.1.2.3 Number.isInteger(number)
var n=i(5),r=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&r(t)===t}},/* 115 */
/***/
function(t,e){
// 20.2.2.20 Math.log1p(x)
t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},/* 116 */
/***/
function(t,e,i){
// 20.2.2.16 Math.fround(x)
var n=i(81),r=Math.pow,a=r(2,-52),o=r(2,-23),s=r(2,127)*(2-o),c=r(2,-126),l=function(t){return t+1/a-1/a};t.exports=Math.fround||function(t){var e,i,r=Math.abs(t),h=n(t);
// eslint-disable-next-line no-self-compare
return r<c?h*l(r/c/o)*c*o:(e=(1+o/a)*r,i=e-(e-r),i>s||i!=i?h*(1/0):h*i)}},/* 117 */
/***/
function(t,e,i){
// call something on iterator step with safe closing on error
var n=i(1);t.exports=function(t,e,i,r){try{return r?e(n(i)[0],i[1]):e(i)}catch(e){var a=t.return;throw void 0!==a&&n(a.call(t)),e}}},/* 118 */
/***/
function(t,e,i){var n=i(13),r=i(11),a=i(54),o=i(10);t.exports=function(t,e,i,s,c){n(e);var l=r(t),h=a(l),u=o(l.length),f=c?u-1:0,d=c?-1:1;if(i<2)for(;;){if(f in h){s=h[f],f+=d;break}if(f+=d,c?f<0:u<=f)throw TypeError("Reduce of empty array with no initial value")}for(;c?f>=0:u>f;f+=d)f in h&&(s=e(s,h[f],f,l));return s}},/* 119 */
/***/
function(t,e,i){"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=i(11),r=i(39),a=i(10);t.exports=[].copyWithin||function(t,e){var i=n(this),o=a(i.length),s=r(t,o),c=r(e,o),l=arguments.length>2?arguments[2]:void 0,h=Math.min((void 0===l?o:r(l,o))-c,o-s),u=1;for(c<s&&s<c+h&&(u=-1,c+=h-1,s+=h-1);h-- >0;)c in i?i[s]=i[c]:delete i[s],s+=u,c+=u;return i}},/* 120 */
/***/
function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},/* 121 */
/***/
function(t,e,i){
// 21.2.5.3 get RegExp.prototype.flags()
i(8)&&"g"!=/./g.flags&&i(9).f(RegExp.prototype,"flags",{configurable:!0,get:i(63)})},/* 122 */
/***/
function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},/* 123 */
/***/
function(t,e,i){var n=i(1),r=i(5),a=i(96);t.exports=function(t,e){if(n(t),r(e)&&e.constructor===t)return e;var i=a.f(t);return(0,i.resolve)(e),i.promise}},/* 124 */
/***/
function(t,e,i){"use strict";var n=i(125),r=i(50);
// 23.1 Map Objects
t.exports=i(66)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(t){var e=n.getEntry(r(this,"Map"),t);return e&&e.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(t,e){return n.def(r(this,"Map"),0===t?0:t,e)}},n,!0)},/* 125 */
/***/
function(t,e,i){"use strict";var n=i(9).f,r=i(40),a=i(45),o=i(21),s=i(43),c=i(44),l=i(84),h=i(120),u=i(42),f=i(8),d=i(33).fastKey,p=i(50),m=f?"_s":"size",y=function(t,e){
// fast case
var i,n=d(e);if("F"!==n)return t._i[n];
// frozen object case
for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,l){var h=t(function(t,n){s(t,h,e,"_i"),t._t=e,// collection type
t._i=r(null),// index
t._f=void 0,// first entry
t._l=void 0,// last entry
t[m]=0,// size
void 0!=n&&c(n,i,t[l],t)});return a(h.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var t=p(this,e),i=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete i[n.i];t._f=t._l=void 0,t[m]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(t){var i=p(this,e),n=y(i,t);if(n){var r=n.n,a=n.p;delete i._i[n.i],n.r=!0,a&&(a.n=r),r&&(r.p=a),i._f==n&&(i._f=r),i._l==n&&(i._l=a),i[m]--}return!!n},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(t){p(this,e);for(var i,n=o(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)
// revert to the last existing entry
for(n(i.v,i.k,this);i&&i.r;)i=i.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(t){return!!y(p(this,e),t)}}),f&&n(h.prototype,"size",{get:function(){return p(this,e)[m]}}),h},def:function(t,e,i){var n,r,a=y(t,e);
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
l(t,e,function(t,i){this._t=p(t,e),// target
this._k=i,// kind
this._l=void 0},function(){
// revert to the last existing entry
for(var t=this,e=t._k,i=t._l;i&&i.r;)i=i.p;
// get next entry
// get next entry
// return step by kind
// or finish the iteration
return t._t&&(t._l=i=i?i.n:t._t._f)?"keys"==e?h(0,i.k):"values"==e?h(0,i.v):h(0,[i.k,i.v]):(t._t=void 0,h(1))},i?"entries":"values",!i,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
u(e)}}},/* 126 */
/***/
function(t,e,i){"use strict";var n=i(125),r=i(50);
// 23.2 Set Objects
t.exports=i(66)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(t){return n.def(r(this,"Set"),t=0===t?0:t,t)}},n)},/* 127 */
/***/
function(t,e,i){"use strict";var n,r=i(30)(0),a=i(16),o=i(33),s=i(108),c=i(128),l=i(5),h=i(4),u=i(50),f=o.getWeak,d=Object.isExtensible,p=c.ufstore,m={},y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(t){if(l(t)){var e=f(t);return!0===e?p(u(this,"WeakMap")).get(t):e?e[this._i]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(t,e){return c.def(u(this,"WeakMap"),t,e)}},v=t.exports=i(66)("WeakMap",y,g,c,!0,!0);
// IE11 WeakMap frozen keys fix
h(function(){return 7!=(new v).set((Object.freeze||Object)(m),7).get(m)})&&(n=c.getConstructor(y,"WeakMap"),s(n.prototype,g),o.NEED=!0,r(["delete","has","get","set"],function(t){var e=v.prototype,i=e[t];a(e,t,function(e,r){
// store frozen objects on internal weakmap shim
if(l(e)&&!d(e)){this._f||(this._f=new n);var a=this._f[t](e,r);return"set"==t?this:a}return i.call(this,e,r)})}))},/* 128 */
/***/
function(t,e,i){"use strict";var n=i(45),r=i(33).getWeak,a=i(1),o=i(5),s=i(43),c=i(44),l=i(30),h=i(14),u=i(50),f=l(5),d=l(6),p=0,m=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,e){return f(t.a,function(t){return t[0]===e})};y.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var i=g(this,t);i?i[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,i,a){var l=t(function(t,n){s(t,l,e,"_i"),t._t=e,// collection type
t._i=p++,// collection id
t._l=void 0,// leak store for uncaught frozen objects
void 0!=n&&c(n,i,t[a],t)});return n(l.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(t){if(!o(t))return!1;var i=r(t);return!0===i?m(u(this,e)).delete(t):i&&h(i,this._i)&&delete i[this._i]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(t){if(!o(t))return!1;var i=r(t);return!0===i?m(u(this,e)).has(t):i&&h(i,this._i)}}),l},def:function(t,e,i){var n=r(a(e),!0);return!0===n?m(t).set(e,i):n[t._i]=i,t},ufstore:m}},/* 129 */
/***/
function(t,e,i){
// https://tc39.github.io/ecma262/#sec-toindex
var n=i(28),r=i(10);t.exports=function(t){if(void 0===t)return 0;var e=n(t),i=r(e);if(e!==i)throw RangeError("Wrong length!");return i}},/* 130 */
/***/
function(t,e,i){
// all object keys, includes non-enumerable and symbols
var n=i(41),r=i(59),a=i(1),o=i(2).Reflect;t.exports=o&&o.ownKeys||function(t){var e=n.f(a(t)),i=r.f;return i?e.concat(i(t)):e}},/* 131 */
/***/
function(t,e,i){"use strict";function n(t,e,i,l,h,u,f,d){for(var p,m,y=h,g=0,v=!!f&&s(f,d,3);g<l;){if(g in i){if(p=v?v(i[g],g,e):i[g],m=!1,a(p)&&(m=p[c],m=void 0!==m?!!m:r(p)),m&&u>0)y=n(t,e,p,o(p.length),y,u-1)-1;else{if(y>=9007199254740991)throw TypeError();t[y]=p}y++}g++}return y}
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var r=i(60),a=i(5),o=i(10),s=i(21),c=i(7)("isConcatSpreadable");t.exports=n},/* 132 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-string-pad-start-end
var n=i(10),r=i(80),a=i(27);t.exports=function(t,e,i,o){var s=String(a(t)),c=s.length,l=void 0===i?" ":String(i),h=n(e);if(h<=c||""==l)return s;var u=h-c,f=r.call(l,Math.ceil(u/l.length));return f.length>u&&(f=f.slice(0,u)),o?f+s:s+f}},/* 133 */
/***/
function(t,e,i){var n=i(38),r=i(18),a=i(55).f;t.exports=function(t){return function(e){for(var i,o=r(e),s=n(o),c=s.length,l=0,h=[];c>l;)a.call(o,i=s[l++])&&h.push(t?[i,o[i]]:o[i]);return h}}},/* 134 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=i(56),r=i(135);t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return r(this)}}},/* 135 */
/***/
function(t,e,i){var n=i(44);t.exports=function(t,e){var i=[];return n(t,!1,i.push,i,e),i}},/* 136 */
/***/
function(t,e){
// https://rwaldron.github.io/proposal-math-extensions/
t.exports=Math.scale||function(t,e,i,n,r){
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
// eslint-disable-next-line no-self-compare
return 0===arguments.length||t!=t||e!=e||i!=i||n!=n||r!=r?NaN:t===1/0||t===-1/0?t:(t-e)*(r-n)/(i-e)+n}},/* 137 */
,/* 138 */
,/* 139 */
,/* 140 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=n(o),c=i(141),l=(n(c),i(24)),h=n(l),u=function(){function t(e,i){r(this,t),this.game=e,void 0!==i&&(this.level=i,this.player=this.level.player),this.gamepadSupport=!1,this.useMobileControl=!1,this.pad1,this.maxSpeed=150,this.checkController()}return a(t,[{key:"showMessage",value:function(t,e){e?console.log("%c "+t+" ","background: #f00; color: #fff"):console.log("%c "+t+" ","background: #222; color: #bada55")}},{key:"checkController",value:function(){
// If gamepad.supported and gamepad.active
this.game.input.gamepad.supported&&this.game.input.gamepad.active?(this.gamepadSupport=!0,this.pad1=this.game.input.gamepad.pad1,
// If pad1 is connected
this.pad1.connected?(this.showMessage("Controller 1 connected 🎮"),this.noControllerConnected=!1,this.useController()):(this.showMessage("No Controller connected",!0),this.noControllerConnected=!0,this.isMobileDevice()||h.default.forceMobile?(console.log("Use Mobile"),this.useMobileControl=!0,this.useMobile()):this.useKeyboard())):this.isMobileDevice()||h.default.forceMobile?(console.log("Use Mobile"),this.useMobileControll=!0,this.useMobile()):this.useKeyboard()}},{key:"useMobile",value:function(){this.stick&&this.stick.destroy(),this.pad&&this.pad.destroy(),this.pad=this.game.plugins.add(s.default.VirtualJoystick),
// console.log(this.pad);
// this.stick = this.pad.addDPad(0, 0, 200, 'dpad');
// this.stick.scale = 0.5;
// this.stick.alignBottomLeft(0);
// this.stick.showOnTouch = true;
// console.log(this.stick);
this.stick=this.pad.addStick(0,0,200,"generic"),this.stick.scale=.5,this.stick.alignBottomLeft(0),this.stick.showOnTouch=!0}},{key:"isMobileDevice",value:function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"useKeyboard",value:function(){console.log("%c Use Keyboard! ","background: #222; color: #bada55"),this.addKeyboardKeys()}},{key:"useController",value:function(){console.log("%c Use Controller! ","background: #222; color: #bada55"),this.pad1.addCallbacks(this,{onConnect:this.addGamepadButtons()})}},{key:"addGamepadButtons",value:function(){this.pad1._rawPad.id.indexOf("360")&&(
// XBOX 360 Controller
// XYAB Buttons
this.gamepad_buttonA=this.pad1.getButton(s.default.Gamepad.XBOX360_A),this.gamepad_buttonB=this.pad1.getButton(s.default.Gamepad.XBOX360_B),this.gamepad_buttonX=this.pad1.getButton(s.default.Gamepad.XBOX360_X),this.gamepad_buttonY=this.pad1.getButton(s.default.Gamepad.XBOX360_Y),this.gamepad_buttonA.onDown.add(this.onGamepadDown,this),this.gamepad_buttonB.onDown.add(this.onGamepadDown,this),this.gamepad_buttonX.onDown.add(this.onGamepadDown,this),this.gamepad_buttonY.onDown.add(this.onGamepadDown,this),
// D-PAD Buttons
// this.gamepad_buttonDPadLeft = this.pad1.getButton(Phaser.Gamepad.XBOX360_DPAD_LEFT);
// this.gamepad_buttonDPadRight = this.pad1.getButton(Phaser.Gamepad.XBOX360_DPAD_RIGHT);
// this.gamepad_buttonDPadUp = this.pad1.getButton(Phaser.Gamepad.XBOX360_DPAD_UP);
// this.gamepad_buttonDPadDown = this.pad1.getButton(Phaser.Gamepad.XBOX360_DPAD_DOWN);
// this.gamepad_buttonDPadLeft.onDown.add(this.onGamepadDown, this);
// this.gamepad_buttonDPadRight.onDown.add(this.onGamepadDown, this);
// this.gamepad_buttonDPadUp.onDown.add(this.onGamepadDown, this);
// this.gamepad_buttonDPadDown.onDown.add(this.onGamepadDown, this);
// this.gamepad_buttonDPadLeft.onUp.add(this.onGamepadUp, this);
// this.gamepad_buttonDPadRight.onUp.add(this.onGamepadUp, this);
// this.gamepad_buttonDPadUp.onUp.add(this.onGamepadUp, this);
// this.gamepad_buttonDPadDown.onUp.add(this.onGamepadUp, this);
// LB and RB Buttons
this.gamepad_buttonLeftBumper=this.pad1.getButton(s.default.Gamepad.XBOX360_LEFT_BUMPER),this.gamepad_buttonRightBumper=this.pad1.getButton(s.default.Gamepad.XBOX360_RIGHT_BUMPER),this.gamepad_buttonLeftBumper.onDown.add(this.onGamepadDown,this),this.gamepad_buttonRightBumper.onDown.add(this.onGamepadDown,this),
// LT and RT Buttons
this.gamepad_buttonLeftTrigger=this.pad1.getButton(s.default.Gamepad.XBOX360_LEFT_TRIGGER),this.gamepad_buttonRightTrigger=this.pad1.getButton(s.default.Gamepad.XBOX360_RIGHT_TRIGGER),this.gamepad_buttonLeftTrigger.onDown.add(this.onGamepadDown,this),this.gamepad_buttonRightTrigger.onDown.add(this.onGamepadDown,this),
// Back and Start Buttons
this.gamepad_buttonBack=this.pad1.getButton(s.default.Gamepad.XBOX360_BACK),this.gamepad_buttonStart=this.pad1.getButton(s.default.Gamepad.XBOX360_START),this.gamepad_buttonBack.onDown.add(this.level.GUICLASS.questMap.toggleMap,this.level.GUICLASS.questMap),this.gamepad_buttonStart.onDown.add(this.onGamepadDown,this))}},{key:"addKeyboardKeys",value:function(){this.cursors=this.game.input.keyboard.createCursorKeys(),this.button_W=this.game.input.keyboard.addKey(s.default.Keyboard.W),
// this.button_W.onDown.add(this.onKeyboardDown, this);
// this.button_W.onUp.add(this.onKeyboardUp, this);
this.button_S=this.game.input.keyboard.addKey(s.default.Keyboard.S),
// this.button_S.onDown.add(this.onKeyboardDown, this);
// this.button_S.onUp.add(this.onKeyboardUp, this);
this.button_A=this.game.input.keyboard.addKey(s.default.Keyboard.A),
// this.button_A.onDown.add(this.onKeyboardDown, this);
// this.button_A.onUp.add(this.onKeyboardUp, this);
this.button_D=this.game.input.keyboard.addKey(s.default.Keyboard.D),
// this.button_D.onDown.add(this.onKeyboardDown, this);
// this.button_D.onUp.add(this.onKeyboardUp, this);
this.button_SPACEBAR=this.game.input.keyboard.addKey(s.default.Keyboard.SPACEBAR),this.button_TAB=this.game.input.keyboard.addKey(s.default.Keyboard.TAB),this.button_TAB.onDown.add(this.level.GUICLASS.questMap.toggleMap,this.level.GUICLASS.questMap)}},{key:"onGamepadDown",value:function(t){t.buttonCode===s.default.Gamepad.XBOX360_DPAD_LEFT?this.player.walk("left",200):t.buttonCode===s.default.Gamepad.XBOX360_DPAD_RIGHT?this.player.walk("right",200):t.buttonCode===s.default.Gamepad.XBOX360_DPAD_UP?this.player.walk("up",200):t.buttonCode===s.default.Gamepad.XBOX360_DPAD_DOWN&&this.player.walk("down",200)}},{key:"onGamepadUp",value:function(t){t.buttonCode===s.default.Gamepad.XBOX360_DPAD_LEFT?this.player.walk("idle"):t.buttonCode===s.default.Gamepad.XBOX360_DPAD_RIGHT?this.player.walk("idle"):t.buttonCode===s.default.Gamepad.XBOX360_DPAD_UP?this.player.walk("idle"):t.buttonCode===s.default.Gamepad.XBOX360_DPAD_DOWN&&this.player.walk("idle")}},{key:"update",value:function(){
// console.log("Y: " + this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y));
// console.log("X: " + this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X));
// Gamepad Controls
this.player&&(this.pad1.connected?(this.pad1.axis(s.default.Gamepad.XBOX360_STICK_LEFT_X)<-.1?(this.player.body.velocity.x=-100,console.log("left")):this.pad1.axis(s.default.Gamepad.XBOX360_STICK_LEFT_X)>.1?(this.player.body.velocity.x=100,console.log("right")):this.player.idle("x"),this.pad1.axis(s.default.Gamepad.XBOX360_STICK_LEFT_Y)<-.1?(
// this.player.walk('up', 200);
this.player.body.velocity.y=-100,this.player.animations.play("run"),console.log("up")):this.pad1.axis(s.default.Gamepad.XBOX360_STICK_LEFT_Y)>.1?(
// this.player.walk('down', 200);
this.player.body.velocity.y=100,this.player.animations.play("run"),console.log("down")):(this.player.idle("y"),this.player.animations.play("idle"))):this.useMobileControl?this.stick.isDown?(this.game.physics.arcade.velocityFromRotation(this.stick.rotation,this.stick.force*this.maxSpeed,this.player.body.velocity),
// this.player.rotation = this.stick.rotation;
// console.log(this.stick.force);
this.stickRotation=this.stick.rotation.toFixed(1),this.stickRotation<=2&&this.stickRotation>=1?(console.log("Down"),this.player.animations.play("run")):this.stickRotation>=-1&&this.stickRotation<=1?console.log("Right"):this.stickRotation<=-1&&this.stickRotation>=-2?console.log("Up"):console.log("Left")):(this.player.animations.play("idle"),this.player.body.velocity.set(0)):(
// Keyboard Movement
this.button_A.isDown||this.button_D.isDown||this.button_W.isDown||this.button_S.isDown?(this.button_A.isDown?(
// this.player.walk('left', 80);
this.player.animations.play("run"),this.player.body.velocity.x=-130):this.button_D.isDown?(
// this.player.walk('right', 80);
this.player.animations.play("run"),this.player.body.velocity.x=130):
// this.player.animations.play('idle');
this.player.body.velocity.x=0,this.button_W.isDown?(
// this.player.walk('up', 80);
this.player.animations.play("run"),this.player.body.velocity.y=-130):this.button_S.isDown?(
// this.player.walk('down', 80);
this.player.animations.play("run"),this.player.body.velocity.y=130):
// this.player.animations.play('idle');
this.player.body.velocity.y=0):(this.player.body.velocity.y=0,this.player.body.velocity.x=0,this.player.animations.play("idle")),this.button_SPACEBAR.isDown))}}]),t}();e.default=u},/* 141 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(6),l=n(c),h=i(142),u=n(h),f=i(143),d=(n(f),i(24)),p=(n(d),function(t){function e(t,i,n,o){r(this,e);var s=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n,"player"));return s.game=t,s.level=o,s.gameData=s.level.gameData,s.health=s.gameData.playerHealth,s.safe=s.level.safe,s.movable=!0,s.anchor.setTo(.5),s.playerSpeed=130,s.animations.add("idle",[0,1,2,3],5,!0),s.animations.add("run",[4,5,6,7,8,9],10,!0),s.animations.play("idle"),s.game.physics.enable(s),s.body.setSize(8,22,15,20),s.game.camera.roundPx=!1,s.game.renderer.renderSession.roundPixels=!0,s.game.camera.follow(s,l.default.Camera.FOLLOW_LOCKON,1,1),s.game.time.events.add(1*l.default.Timer.SECOND,function(){console.log("peng"),s.game.camera.follow(s,l.default.Camera.FOLLOW_LOCKON,.04,.04)}),t.add.existing(s),s}return o(e,t),s(e,[{key:"walk",value:function(t,e){if(this.movable){
//console.log("Direction: " + direction + ", Speed: " + speed);
switch(t){case"up":this.body.velocity.y=-this.playerSpeed;break;case"down":this.body.velocity.y=this.playerSpeed;break;case"idle":this.body.velocity.y=0;break;default:this.body.velocity.y=0}switch(t){case"left":this.body.velocity.x=-this.playerSpeed;break;case"right":this.body.velocity.x=this.playerSpeed;break;case"idle":this.body.velocity.x=0;break;default:this.body.velocity.x=0}}else this.body.velocity.set(0)}},{key:"idle",value:function(t){"x"==t?this.body.velocity.x=0:"y"==t?this.body.velocity.y=0:(this.body.velocity.x=0,this.body.velocity.y=0)}},{key:"fight",value:function(){}},{key:"getDamage",value:function(t,e){if(void 0!==t.itemType&&"key"==t.itemType){console.log(t.dropItemID);var i={};i.id=t.dropItemID,this.items.push(new u.default(this.game,t.x,t.y+40,"item",i))}void 0!==t.killQuestID&&this.questManager.checkKillCondition(t.killQuestID),this.player.health-=10,this.gameData.playerHealth=this.player.health,this.safe.setGameConfig(this.gameData),this.game.camera.flash(12648448,200),this.player.health<=0&&(this.gameData.playerHealth=100,this.safe.setGameConfig(this.gameData),this.inputClass.stick&&(this.inputClass.stick.alpha=0,this.inputClass.stick.enabled=!1),this.game.state.restart(!0,!1,{map:this.currentMap,targetID:this.lastTargetID,restartType:"revive"})),t.destroy()}},{key:"collideWithItem",value:function(t,e){if(
// this.lockGame = new LockGame(this.game, this.player.x, this.player.y, this.player);
console.log(e),this.itemIDs.includes(e.id)||(this.itemIDs.push(e.id),this.safe.setItemIDs(this.itemIDs)),void 0!==e.removeQuestID&&(console.log("Remove"),this.questManager.removeQuest(e.removeQuestID)),void 0!==e.questID){if(this.questManager.checkIfQuestExists(e.questID))return;var i={questID:e.questID,questMessage:e.questMessage,questKillEnemyType:void 0,questDeadEnemies:void 0,questKillEnemyAmount:void 0};this.questManager.addQuest(i),console.log("Questupdate"),this.GUICLASS.createNotification("quest","Questupdate")}e.destroy(),this.items.splice(e,1)}}]),e}(l.default.Sprite));e.default=p},/* 142 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(6),s=function(t){return t&&t.__esModule?t:{default:t}}(o),c=function(t){function e(t,i,a,o,s){n(this,e);var c=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,a,o));return c.game=t,c.type=o,c.id=s.id,c.questID=s.questID,c.questMessage=s.questMessage,c.removeQuestID=s.removeQuestID,c.anchor.setTo(.5),c.animations.add("play",[0,1,2,3],5,!0),c.animations.play("play"),c.game.physics.enable(c),c.game.add.existing(c),c}return a(e,t),e}(s.default.Sprite);e.default=c},/* 143 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=n(o),c=i(24),l=(n(c),function(){function t(e,i,n,a){r(this,t),this.game=e,this.x=i,this.y=n,this.player=a,
// this.bgColors = [0x62bd18, 0xff5300, 0xd21034, 0xff475c, 0x8f16b2, 0x588c7e, 0x8c4646];
// this.tintColor = game.rnd.pick(this.bgColors);
this.rotationSpeed=3,this.maxAngleDifference=10,this.scaleRate=.5,this.dead=!1,this.run=!0,this.firstSetup=!0,this.currentTry=1,this.setupGame()}return a(t,[{key:"setupGame",value:function(){this.player.movable=!1,this.ring=this.game.add.sprite(this.x,this.y,"LockGameRing"),this.ring.anchor.set(.5),this.ring.smoothed=!1,this.ring.alpha=.5,this.ring.scale.set(this.scaleRate),this.ball=this.game.add.sprite(this.x,this.y,"LockGameBall"),this.ball.anchor.set(.5),this.ball.ballAngle=-90,this.ball.smoothed=!1,this.ball.scale.set(this.scaleRate),this.placeBall(),this.bar=this.game.add.sprite(this.x,this.y,"LockGameBar"),this.bar.anchor.set(0,.5),this.bar.angle=-90,this.bar.crossingBall=!1,this.bar.smoothed=!1,this.bar.rotationDirection=0,this.bar.scale.set(this.scaleRate),this.firstTry=this.game.add.sprite(this.x-40,this.y,"LockGameBall"),this.firstTry.anchor.set(.5),this.firstTry.ballAngle=-90,this.firstTry.scale.set(this.scaleRate),this.secondTry=this.game.add.sprite(this.x,this.y,"LockGameBall"),this.secondTry.anchor.set(.5),this.secondTry.ballAngle=-90,this.secondTry.scale.set(this.scaleRate),this.thirdTry=this.game.add.sprite(this.x+40,this.y,"LockGameBall"),this.thirdTry.anchor.set(.5),this.thirdTry.ballAngle=-90,this.thirdTry.scale.set(this.scaleRate),this.firstSetup&&(this.ring.alpha=0,this.ball.alpha=0,this.bar.alpha=0,this.firstTry.alpha=0,this.secondTry.alpha=0,this.thirdTry.alpha=0,this.game.add.tween(this.ring).to({alpha:.5},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.bar).to({alpha:.5},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.ball).to({alpha:1},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.firstTry).to({alpha:1},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.secondTry).to({alpha:1},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.thirdTry).to({alpha:1},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.player).to({alpha:0},1e3,s.default.Easing.Linear.None,!0),this.player.body.immovable=!0,this.firstSetup=!1),this.game.input.onDown.add(this.startMoving,this)}},{key:"placeBall",value:function(){this.ball.x=200;do{this.newAngle=game.rnd.angle()}while(this.angleDifferenceFunc(this.newAngle,this.ball.ballAngle)<40);this.ball.ballAngle=this.newAngle,this.ball.x=this.ring.x+88*Math.cos(s.default.Math.degToRad(this.ball.ballAngle)),this.ball.y=this.ring.y+88*Math.sin(s.default.Math.degToRad(this.ball.ballAngle))}},{key:"startMoving",value:function(){this.dead=!1,this.game.input.onDown.remove(this.startMoving,this),this.game.input.onDown.add(this.changeDirection,this),this.bar.rotationDirection=1}},{key:"changeDirection",value:function(){if(this.angleDifference=Math.abs(this.ball.ballAngle-this.bar.angle),this.angleDifference>this.maxAngleDifference);else{switch(this.currentTry){case 1:this.firstTry.tint=65297,this.currentTry=2,this.rotationSpeed=4;break;case 2:this.secondTry.tint=65297,this.currentTry=3,this.rotationSpeed=5;break;case 3:this.thirdTry.tint=65297,this.run=!1,this.game.add.tween(this.ring).to({alpha:0},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.bar).to({alpha:0},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.ball).to({alpha:0},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.firstTry).to({alpha:0},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.secondTry).to({alpha:0},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.thirdTry).to({alpha:0},2e3,s.default.Easing.Linear.None,!0),this.game.add.tween(this.player).to({alpha:1},2e3,s.default.Easing.Linear.None,!0),this.player.body.immovable=!1,this.player.movable=!0}this.bar.crossingBall=!1,this.bar.rotationDirection*=-1,this.placeBall()}}},{key:"update",value:function(){this.run&&(this.bar.angle+=this.rotationSpeed*this.bar.rotationDirection,this.angleDifference=Math.abs(this.ball.ballAngle-this.bar.angle),this.angleDifference<this.maxAngleDifference&&!this.bar.crossingBall&&(this.bar.crossingBall=!0),this.angleDifference>this.maxAngleDifference&&this.bar.crossingBall&&this.fail())}},{key:"fail",value:function(){this.bar.rotationDirection=0,this.bar.tint=16711680,this.dead=!0,this.currentTry=1,this.rotationSpeed=3,this.game.camera.flash(16711680,200),void 0!==window.navigator.vibrate&&"vibrate"in window.navigator&&window.navigator.vibrate(500),this.bar.destroy(),this.ring.destroy(),this.ball.destroy(),this.firstTry.destroy(),this.secondTry.destroy(),this.thirdTry.destroy(),this.setupGame()}},{key:"angleDifferenceFunc",value:function(t,e){return Math.abs((t+180-e)%360-180)}}]),t}());e.default=l},/* 144 */
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
(function(){var e,i,n,r,a,o,s,c,l,h,u,f,d,p,m;n=Math.floor,h=Math.min,/*
  Default comparison function to be used
   */
i=function(t,e){return t<e?-1:t>e?1:0},/*
  Insert item x in list a, and keep it sorted assuming a is sorted.
  
  If x is already in a, insert it to the right of the rightmost x.
  
  Optional args lo (default 0) and hi (default a.length) bound the slice
  of a to be searched.
   */
l=function(t,e,r,a,o){var s;if(null==r&&(r=0),null==o&&(o=i),r<0)throw new Error("lo must be non-negative");for(null==a&&(a=t.length);r<a;)s=n((r+a)/2),o(e,t[s])<0?a=s:r=s+1;return[].splice.apply(t,[r,r-r].concat(e)),e},/*
  Push item onto heap, maintaining the heap invariant.
   */
o=function(t,e,n){return null==n&&(n=i),t.push(e),p(t,0,t.length-1,n)},/*
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
c=function(t,e,n){var r;return null==n&&(n=i),r=t[0],t[0]=e,m(t,0,n),r},/*
  Fast version of a heappush followed by a heappop.
   */
s=function(t,e,n){var r;return null==n&&(n=i),t.length&&n(t[0],e)<0&&(r=[t[0],e],e=r[0],t[0]=r[1],m(t,0,n)),e},/*
  Transform list into a heap, in-place, in O(array.length) time.
   */
r=function(t,e){var r,a,o,s,c,l;for(null==e&&(e=i),s=function(){l=[];for(var e=0,i=n(t.length/2);0<=i?e<i:e>i;0<=i?e++:e--)l.push(e);return l}.apply(this).reverse(),c=[],a=0,o=s.length;a<o;a++)r=s[a],c.push(m(t,r,e));return c},/*
  Update the position of the given item in the heap.
  This function should be called every time the item is being modified.
   */
d=function(t,e,n){var r;if(null==n&&(n=i),-1!==(r=t.indexOf(e)))return p(t,0,r,n),m(t,r,n)},/*
  Find the n largest elements in a dataset.
   */
u=function(t,e,n){var a,o,c,l,h;if(null==n&&(n=i),o=t.slice(0,e),!o.length)return o;for(r(o,n),h=t.slice(e),c=0,l=h.length;c<l;c++)a=h[c],s(o,a,n);return o.sort(n).reverse()},/*
  Find the n smallest elements in a dataset.
   */
f=function(t,e,n){var o,s,c,u,f,d,p,m,y;if(null==n&&(n=i),10*e<=t.length){if(c=t.slice(0,e).sort(n),!c.length)return c;for(s=c[c.length-1],p=t.slice(e),u=0,d=p.length;u<d;u++)o=p[u],n(o,s)<0&&(l(c,o,0,null,n),c.pop(),s=c[c.length-1]);return c}for(r(t,n),y=[],f=0,m=h(e,t.length);0<=m?f<m:f>m;0<=m?++f:--f)y.push(a(t,n));return y},p=function(t,e,n,r){var a,o,s;for(null==r&&(r=i),a=t[n];n>e&&(s=n-1>>1,o=t[s],r(a,o)<0);)t[n]=o,n=s;return t[n]=a},m=function(t,e,n){var r,a,o,s,c;for(null==n&&(n=i),a=t.length,c=e,o=t[e],r=2*e+1;r<a;)s=r+1,s<a&&!(n(t[r],t[s])<0)&&(r=s),t[e]=t[r],e=r,r=2*e+1;return t[e]=o,p(t,c,e,n)},e=function(){function t(t){this.cmp=null!=t?t:i,this.nodes=[]}return t.push=o,t.pop=a,t.replace=c,t.pushpop=s,t.heapify=r,t.updateItem=d,t.nlargest=u,t.nsmallest=f,t.prototype.push=function(t){return o(this.nodes,t,this.cmp)},t.prototype.pop=function(){return a(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return c(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return s(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return r(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return d(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return e=new t,e.nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),function(e,i){t.exports=i()}(0,function(){return e})}).call(this)}),o=a,s={};var c=s,l=1;s.js=function(){var t,e,i,a=!1,c={},h={},u={},f={},d=!0,p={},m=[],y=Number.MAX_VALUE,g=!1;/**
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
for(var i=0;i<t.length;i++)for(var n=0;n<t[0].length;n++)h[t[i][n]]||(h[t[i][n]]=1)},/**
	 * Sets the tile cost for a particular tile type.
	 *
	 * @param {Number} The tile type to set the cost for.
	 * @param {Number} The multiplicative cost associated with the given tile.
	 **/
this.setTileCost=function(t,e){h[t]=e},/**
	 * Sets the an additional cost for a particular point.
	 * Overrides the cost from setTileCost.
	 *
	 * @param {Number} x The x value of the point to cost.
	 * @param {Number} y The y value of the point to cost.
	 * @param {Number} The multiplicative cost associated with the given point.
	 **/
this.setAdditionalPointCost=function(t,e,i){void 0===u[e]&&(u[e]={}),u[e][t]=i},/**
	 * Remove the additional cost for a particular point.
	 *
	 * @param {Number} x The x value of the point to stop costing.
	 * @param {Number} y The y value of the point to stop costing.
	 **/
this.removeAdditionalPointCost=function(t,e){void 0!==u[e]&&delete u[e][t]},/**
	 * Remove all additional point costs.
	 **/
this.removeAllAdditionalPointCosts=function(){u={}},/**
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
this.avoidAdditionalPoint=function(t,e){void 0===c[e]&&(c[e]={}),c[e][t]=1},/**
	 * Stop avoiding a particular point on the grid.
	 *
	 * @param {Number} x The x value of the point to stop avoiding.
	 * @param {Number} y The y value of the point to stop avoiding.
	 **/
this.stopAvoidingAdditionalPoint=function(t,e){void 0!==c[e]&&delete c[e][t]},/**
	 * Enables corner cutting in diagonal movement.
	 **/
this.enableCornerCutting=function(){d=!0},/**
	 * Disables corner cutting in diagonal movement.
	 **/
this.disableCornerCutting=function(){d=!1},/**
	 * Stop avoiding all additional points on the grid.
	 **/
this.stopAvoidingAllAdditionalPoints=function(){c={}},/**
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
this.findPath=function(e,r,s,c,h){
// Wraps the callback for sync vs async logic
var u=function(t){a?h(t):setTimeout(function(){h(t)})};
// No acceptable tiles were set
if(void 0===i)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");
// No grid was set
if(void 0===t)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");
// Start or endpoint outside of scope.
if(e<0||r<0||s<0||c<0||e>t[0].length-1||r>t.length-1||s>t[0].length-1||c>t.length-1)throw new Error("Your start or end point is outside the scope of your grid.");
// Start and end are the same tile.
if(e===s&&r===c)return void u([]);for(var f=t[c][s],d=!1,y=0;y<i.length;y++)if(f===i[y]){d=!0;break}if(!1===d)return void u(null);
// Create the instance
var g=new n;g.openList=new o(function(t,e){return t.bestGuessDistance()-e.bestGuessDistance()}),g.isDoneCalculating=!1,g.nodeHash={},g.startX=e,g.startY=r,g.endX=s,g.endY=c,g.callback=u,g.openList.push(x(g,g.startX,g.startY,null,1));var v=l++;return p[v]=g,m.push(v),v},/**
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
if(0!==r.openList.size()){var o=r.openList.pop();
// Handles the case where we have found the destination
if(r.endX!==o.x||r.endY!==o.y)o.list=0,o.y>0&&v(r,o,0,-1,1*w(o.x,o.y-1)),o.x<t[0].length-1&&v(r,o,1,0,1*w(o.x+1,o.y)),o.y<t.length-1&&v(r,o,0,1,1*w(o.x,o.y+1)),o.x>0&&v(r,o,-1,0,1*w(o.x-1,o.y)),g&&(o.x>0&&o.y>0&&(d||b(t,i,o.x,o.y-1)&&b(t,i,o.x-1,o.y))&&v(r,o,-1,-1,1.4*w(o.x-1,o.y-1)),o.x<t[0].length-1&&o.y<t.length-1&&(d||b(t,i,o.x,o.y+1)&&b(t,i,o.x+1,o.y))&&v(r,o,1,1,1.4*w(o.x+1,o.y+1)),o.x<t[0].length-1&&o.y>0&&(d||b(t,i,o.x,o.y-1)&&b(t,i,o.x+1,o.y))&&v(r,o,1,-1,1.4*w(o.x+1,o.y-1)),o.x>0&&o.y<t.length-1&&(d||b(t,i,o.x,o.y+1)&&b(t,i,o.x-1,o.y))&&v(r,o,-1,1,1.4*w(o.x-1,o.y+1)));else{var s=[];s.push({x:o.x,y:o.y});for(var c=o.parent;null!=c;)s.push({x:c.x,y:c.y}),c=c.parent;s.reverse();var l=s;r.callback(l),delete p[n],m.shift()}}else r.callback(null),delete p[n],m.shift();else
// This instance was cancelled
m.shift()}};
// Private methods follow
var v=function(e,n,r,a,o){var s=n.x+r,l=n.y+a;if((void 0===c[l]||void 0===c[l][s])&&b(t,i,s,l,n)){var h=x(e,s,l,n,o);void 0===h.list?(h.list=1,e.openList.push(h)):n.costSoFar+o<h.costSoFar&&(h.costSoFar=n.costSoFar+o,h.parent=n,e.openList.updateItem(h))}},b=function(t,e,i,n,r){var a=f[n]&&f[n][i];if(a){var o=P(r.x-i,r.y-n);if(!function(){for(var t=0;t<a.length;t++)if(a[t]===o)return!0;return!1}())return!1}for(var s=0;s<e.length;s++)if(t[n][i]===e[s])return!0;return!1},P=function(t,e){if(0===t&&-1===e)return s.TOP;if(1===t&&-1===e)return s.TOP_RIGHT;if(1===t&&0===e)return s.RIGHT;if(1===t&&1===e)return s.BOTTOM_RIGHT;if(0===t&&1===e)return s.BOTTOM;if(-1===t&&1===e)return s.BOTTOM_LEFT;if(-1===t&&0===e)return s.LEFT;if(-1===t&&-1===e)return s.TOP_LEFT;throw new Error("These differences are not valid: "+t+", "+e)},w=function(e,i){return u[i]&&u[i][e]||h[t[i][e]]},x=function(t,e,i,n,a){if(void 0!==t.nodeHash[i]){if(void 0!==t.nodeHash[i][e])return t.nodeHash[i][e]}else t.nodeHash[i]={};var o=S(e,i,t.endX,t.endY);if(null!==n)var s=n.costSoFar+a;else s=0;var c=new r(n,e,i,s,o);return t.nodeHash[i][e]=c,c},S=function(t,e,i,n){if(g){
// Octile distance
var r=Math.abs(t-i),a=Math.abs(e-n);return r<a?1.4*r+a:1.4*a+r}
// Manhattan distance
var r=Math.abs(t-i),a=Math.abs(e-n);return r+a}},s.TOP="TOP",s.TOP_RIGHT="TOP_RIGHT",s.RIGHT="RIGHT",s.BOTTOM_RIGHT="BOTTOM_RIGHT",s.BOTTOM="BOTTOM",s.BOTTOM_LEFT="BOTTOM_LEFT",s.LEFT="LEFT",s.TOP_LEFT="TOP_LEFT";var h=c.js,u=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),f=/** @class */function(t){function e(e){var i=t.call(this,e,e.plugins)||this;return i.easystar=new h,i.callback=null,i.prepared=!1,i}/**
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
return u(e,t),e.prototype.setGrid=function(t,e,i){void 0===i&&(i=Number.MAX_VALUE),this.grid=[];for(var n=0;n<t.length;n++){this.grid[n]=[];for(var r=0;r<t[n].length;r++)this.grid[n][r]=t[n][r]?t[n][r].index:0}this.easystar.setGrid(this.grid),this.easystar.setAcceptableTiles(e);
// initiate all walkable tiles with cost 1 so they will be walkable even if they are not on the grid map, yet.
for(var a=0,o=e;a<o.length;a++){var s=o[a];this.easystar.setTileCost(s,1)}this.easystar.setIterationsPerCalculation(i)},e.prototype.setCallbackFunction=function(t){this.callback=t},e.prototype.preparePathCalculation=function(t,e){if(null===this.callback)throw new Error("no callback set");this.easystar.findPath(t[0],t[1],e[0],e[1],this.callback),this.prepared=!0},e.prototype.calculatePath=function(){if(!this.prepared)throw new Error("no calculation prepared!");this.easystar.calculate()},e}(Phaser.Plugin);t.exports=f},/* 145 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(6),l=n(c),h=i(24),u=(n(h),i(100)),f=n(u),d=function(t){function e(t,i,n,o,s,c,h){r(this,e);var u=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n,"enemy"));
// console.log(properties);
// this.body.enable = false;
// this.body.enable = true;
return u.game=t,u.player=o,u.map=s,u.layer=c,u.dropItemID=h.dropItemID,u.itemType=h.itemType,u.jumpDown=h.jumpDown,u.killQuestID=h.killQuestID,u.health=100,u.finderCall=!0,u.closeSpeed=u.game.rnd.integerInRange(10,70),u.farSpeed=u.game.rnd.integerInRange(400,600),u.startMoving=!1,u.anchor.setTo(.5),u.animations.add("walk",[0,1,2,3,4],15,!0),u.animations.add("idle",[0],1,!0),u.animations.play("walk"),u.game.physics.enable(u),u.body.setSize(13,10,5,7),u.body.bounce.set(1),u.body.drag.set(200),u.jumpDown?(u.startTween=u.game.add.tween(u).from({y:u.game.camera.height},1500,l.default.Easing.Bounce.Out,!0),u.startTween.onStart.add(function(){u.game.time.events.add(500,function(){})},u),u.startTween.onComplete.add(function(){
// this.body.enable = true;
u.startMoving=!0},u)):u.startMoving=!0,t.add.existing(u),u}return o(e,t),s(e,[{key:"update",value:function(){this.distanceBetweenEnemiePlayer=this.game.physics.arcade.distanceBetween(this,this.player),this.distanceBetweenEnemiePlayer<120&&(this.distanceBetweenEnemiePlayer<100?(this.game.physics.arcade.moveToObject(this,this.player,0),this.animations.play("idle"),
// Attack
this.distanceBetweenEnemiePlayer<50&&(this.animations.play("walk"),this.game.physics.arcade.moveToObject(this,this.player,150))):(this.animations.play("walk"),this.game.physics.arcade.moveToObject(this,this.player,this.closeSpeed)),this.finderCall=!0,this.pathfinder&&(this.pathfinder.pathToFollow.length=0)),this.distanceBetweenEnemiePlayer>120&&this.distanceBetweenEnemiePlayer<300&&this.finderCall&&(console.log("Calculate"),this.pathfinder=new f.default(this.game,this.map,this,{x:this.player.x,y:this.player.y},this.layer,!0,this.farSpeed,this),this.finderCall=!1),this.pathfinder&&this.startMoving&&this.pathfinder.followPath();
// console.log(Math.ceil(this.game.physics.arcade.angleToXY(this.player, this.x, this.y)));
var t=Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y));1==t||2==t||-0==t?this.scale.set(-1,1):this.scale.set(1,1),2==t&&this.game.world.bringToTop(this)}}]),e}(l.default.Sprite);e.default=d},/* 146 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(6),o=(function(t){t&&t.__esModule}(a),function(){function t(e,i,r,a,o,s){n(this,t),this.game=e,this.player=r,this.map=a,this.groundLayer=o,this.collisionLayer=s,this.region=i}return r(t,[{key:"buildBridge",value:function(){var t=this,e=this.region.properties.direction,i=this.region.properties.length,n=this.region.properties.duration;this.bridgeX=this.groundLayer.getTileX(this.region.left)+1,this.bridgeY=this.groundLayer.getTileY(this.region.top),this.collX=this.collisionLayer.getTileX(this.region.left)+1,this.collY=this.collisionLayer.getTileY(this.region.top);var r=0,a=setInterval(function(){"up"==e?(t.bridgeY--,t.collY--,t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX-1,t.collY,t.collisionLayer)):"down"==e?(t.bridgeY++,t.collY++,t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX-1,t.bridgeY,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX-1,t.collY,t.collisionLayer),r+1==i?(t.map.putTile(2,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(2,t.bridgeX-1,t.bridgeY+1,t.groundLayer)):(t.map.putTile(22,t.bridgeX,t.bridgeY+1,t.groundLayer),t.map.putTile(22,t.bridgeX-1,t.bridgeY+1,t.groundLayer))):"left"==e?(console.log("HEY"),t.bridgeX--,t.collX--,t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX,t.collY-1,t.collisionLayer),t.map.putTile(22,t.bridgeX,t.bridgeY+1,t.groundLayer)):"right"==e&&(t.map.putTile(2,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.groundLayer),t.map.removeTile(t.collX,t.collY,t.collisionLayer),t.map.removeTile(t.collX,t.collY-1,t.collisionLayer),t.map.putTile(22,t.bridgeX,t.bridgeY+1,t.groundLayer),t.bridgeX++,t.collX++),t.game.camera.shake(.0015,n),++r===i&&clearInterval(a)},n)}},{key:"removeBridge",value:function(){var t=this;console.log("remove bridge");var e=this.region.properties.direction,i=this.region.properties.length,n=this.region.properties.duration,r=this.region.properties.putBackgroundTile;this.bridgeX=this.groundLayer.getTileX(this.region.left)+1,this.bridgeY=this.groundLayer.getTileY(this.region.top),this.collX=this.collisionLayer.getTileX(this.region.left)+1,this.collY=this.collisionLayer.getTileY(this.region.top);var a=0,o=setInterval(function(){"up"==e?(t.bridgeY--,t.collY--,t.map.putTile(3,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(3,t.bridgeX-1,t.bridgeY,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX-1,t.collY,t.groundLayer),void 0!==r&&(t.map.putTile(r,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(r,t.bridgeX-1,t.bridgeY,t.groundLayer))):"down"==e?(console.log(a,i),t.bridgeY++,t.collY++,t.map.putTile(3,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(3,t.bridgeX-1,t.bridgeY,t.collisionLayer),0==a?(t.map.putTile(22,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(22,t.bridgeX-1,t.bridgeY,t.groundLayer)):(t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX-1,t.collY,t.groundLayer)),void 0!==r&&(t.map.putTile(r,t.bridgeX,t.bridgeY,t.groundLayer),t.map.putTile(r,t.bridgeX-1,t.bridgeY,t.groundLayer))):"left"==e?(t.bridgeX--,t.collX--,t.map.putTile(2,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX,t.collY-1,t.groundLayer)):"right"==e&&(t.bridgeX++,t.collX++,t.map.putTile(2,t.bridgeX,t.bridgeY,t.collisionLayer),t.map.putTile(2,t.bridgeX,t.bridgeY-1,t.collisionLayer),t.map.removeTile(t.collX,t.collY,t.groundLayer),t.map.removeTile(t.collX,t.collY-1,t.groundLayer)),t.game.camera.shake(.0015,n),++a===i&&clearInterval(o)},n)}}]),t}());e.default=o},/* 147 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=(n(o),i(24)),c=(n(s),i(369)),l=(n(c),function(){function t(e){r(this,t),this.game=e}return a(t,[{key:"setGameConfig",value:function(t){localStorage.setItem("playerData",JSON.stringify(t))}},{key:"getGameConfig",value:function(){var t=JSON.parse(localStorage.getItem("playerData"));if(null==t){return{playerHealth:100,currentMap:"map1"}}return t}},{key:"setItemIDs",value:function(t){localStorage.setItem("itemIDs",JSON.stringify(t))}},{key:"getItemIDs",value:function(){var t=JSON.parse(localStorage.getItem("itemIDs"));if(null==t){return[]}return t}},{key:"setPlayedDialogues",value:function(t){localStorage.setItem("playedDialogues",JSON.stringify(t))}},{key:"getPlayedDialogues",value:function(){var t=JSON.parse(localStorage.getItem("playedDialogues"));if(null==t){return[]}return t}},{key:"setQuests",value:function(t){localStorage.setItem("quests",JSON.stringify(t))}},{key:"getQuests",value:function(){var t=JSON.parse(localStorage.getItem("quests"));if(null==t){return{masteredQuests:{}}}return t}},{key:"removeQuest",value:function(t){for(var e=this.getQuests(),i=0;i<e.length;i++)e[i][0]==t&&(e[i][1]="");this.setQuests(e)}},{key:"resetLocalStorage",value:function(){localStorage.clear()}}]),t}());e.default=l},/* 148 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){return function(e){
// Shortcuts
var i=t,n=i.lib,r=n.WordArray,a=n.Hasher,o=i.algo,s=[],c=[];
// Compute constants
!function(){function t(t){return 4294967296*(t-(0|t))|0}for(var i=2,n=0;n<64;)(function(t){for(var i=e.sqrt(t),n=2;n<=i;n++)if(!(t%n))return!1;return!0})(i)&&(n<8&&(s[n]=t(e.pow(i,.5))),c[n]=t(e.pow(i,1/3)),n++),i++}();
// Reusable object
var l=[],h=o.SHA256=a.extend({_doReset:function(){this._hash=new r.init(s.slice(0))},_doProcessBlock:function(t,e){
// Computation
for(var i=this._hash.words,n=i[0],r=i[1],a=i[2],o=i[3],s=i[4],h=i[5],u=i[6],f=i[7],d=0;d<64;d++){if(d<16)l[d]=0|t[e+d];else{var p=l[d-15],m=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,y=l[d-2],g=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;l[d]=m+l[d-7]+g+l[d-16]}var v=s&h^~s&u,b=n&r^n&a^r&a,P=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),w=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),x=f+w+v+c[d]+l[d],S=P+b;f=u,u=h,h=s,s=o+x|0,o=a,a=r,r=n,n=x+S|0}
// Intermediate hash value
i[0]=i[0]+n|0,i[1]=i[1]+r|0,i[2]=i[2]+a|0,i[3]=i[3]+o|0,i[4]=i[4]+s|0,i[5]=i[5]+h|0,i[6]=i[6]+u|0,i[7]=i[7]+f|0},_doFinalize:function(){
// Shortcuts
var t=this._data,i=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;
// Return final computed hash
// Add padding
// Hash final blocks
return i[r>>>5]|=128<<24-r%32,i[14+(r+64>>>9<<4)]=e.floor(n/4294967296),i[15+(r+64>>>9<<4)]=n,t.sigBytes=4*i.length,this._process(),this._hash},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}});/**
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
		 *     var hash = CryptoJS.SHA256('message');
		 *     var hash = CryptoJS.SHA256(wordArray);
		 */
i.SHA256=a._createHelper(h),/**
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
		 *     var hmac = CryptoJS.HmacSHA256(message, key);
		 */
i.HmacSHA256=a._createHmacHelper(h)}(Math),t.SHA256})},/* 149 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(71))}(0,function(t){return function(){function e(){return o.create.apply(o,arguments)}
// Shortcuts
var i=t,n=i.lib,r=n.Hasher,a=i.x64,o=a.Word,s=a.WordArray,c=i.algo,l=[e(1116352408,3609767458),e(1899447441,602891725),e(3049323471,3964484399),e(3921009573,2173295548),e(961987163,4081628472),e(1508970993,3053834265),e(2453635748,2937671579),e(2870763221,3664609560),e(3624381080,2734883394),e(310598401,1164996542),e(607225278,1323610764),e(1426881987,3590304994),e(1925078388,4068182383),e(2162078206,991336113),e(2614888103,633803317),e(3248222580,3479774868),e(3835390401,2666613458),e(4022224774,944711139),e(264347078,2341262773),e(604807628,2007800933),e(770255983,1495990901),e(1249150122,1856431235),e(1555081692,3175218132),e(1996064986,2198950837),e(2554220882,3999719339),e(2821834349,766784016),e(2952996808,2566594879),e(3210313671,3203337956),e(3336571891,1034457026),e(3584528711,2466948901),e(113926993,3758326383),e(338241895,168717936),e(666307205,1188179964),e(773529912,1546045734),e(1294757372,1522805485),e(1396182291,2643833823),e(1695183700,2343527390),e(1986661051,1014477480),e(2177026350,1206759142),e(2456956037,344077627),e(2730485921,1290863460),e(2820302411,3158454273),e(3259730800,3505952657),e(3345764771,106217008),e(3516065817,3606008344),e(3600352804,1432725776),e(4094571909,1467031594),e(275423344,851169720),e(430227734,3100823752),e(506948616,1363258195),e(659060556,3750685593),e(883997877,3785050280),e(958139571,3318307427),e(1322822218,3812723403),e(1537002063,2003034995),e(1747873779,3602036899),e(1955562222,1575990012),e(2024104815,1125592928),e(2227730452,2716904306),e(2361852424,442776044),e(2428436474,593698344),e(2756734187,3733110249),e(3204031479,2999351573),e(3329325298,3815920427),e(3391569614,3928383900),e(3515267271,566280711),e(3940187606,3454069534),e(4118630271,4000239992),e(116418474,1914138554),e(174292421,2731055270),e(289380356,3203993006),e(460393269,320620315),e(685471733,587496836),e(852142971,1086792851),e(1017036298,365543100),e(1126000580,2618297676),e(1288033470,3409855158),e(1501505948,4234509866),e(1607167915,987167468),e(1816402316,1246189591)],h=[];!function(){for(var t=0;t<80;t++)h[t]=e()}();/**
		 * SHA-512 hash algorithm.
		 */
var u=c.SHA512=r.extend({_doReset:function(){this._hash=new s.init([new o.init(1779033703,4089235720),new o.init(3144134277,2227873595),new o.init(1013904242,4271175723),new o.init(2773480762,1595750129),new o.init(1359893119,2917565137),new o.init(2600822924,725511199),new o.init(528734635,4215389547),new o.init(1541459225,327033209)])},_doProcessBlock:function(t,e){
// Rounds
for(var i=this._hash.words,n=i[0],r=i[1],a=i[2],o=i[3],s=i[4],c=i[5],u=i[6],f=i[7],d=n.high,p=n.low,m=r.high,y=r.low,g=a.high,v=a.low,b=o.high,P=o.low,w=s.high,x=s.low,S=c.high,_=c.low,k=u.high,T=u.low,O=f.high,E=f.low,M=d,A=p,D=m,B=y,C=g,L=v,I=b,N=P,R=w,j=x,F=S,G=_,V=k,H=T,U=O,X=E,q=0;q<80;q++){
// Shortcut
var Y=h[q];
// Extend message
if(q<16)var W=Y.high=0|t[e+2*q],z=Y.low=0|t[e+2*q+1];else{
// Gamma0
var J=h[q-15],Z=J.high,K=J.low,Q=(Z>>>1|K<<31)^(Z>>>8|K<<24)^Z>>>7,$=(K>>>1|Z<<31)^(K>>>8|Z<<24)^(K>>>7|Z<<25),tt=h[q-2],et=tt.high,it=tt.low,nt=(et>>>19|it<<13)^(et<<3|it>>>29)^et>>>6,rt=(it>>>19|et<<13)^(it<<3|et>>>29)^(it>>>6|et<<26),at=h[q-7],ot=at.high,st=at.low,ct=h[q-16],lt=ct.high,ht=ct.low,z=$+st,W=Q+ot+(z>>>0<$>>>0?1:0),z=z+rt,W=W+nt+(z>>>0<rt>>>0?1:0),z=z+ht,W=W+lt+(z>>>0<ht>>>0?1:0);Y.high=W,Y.low=z}var ut=R&F^~R&V,ft=j&G^~j&H,dt=M&D^M&C^D&C,pt=A&B^A&L^B&L,mt=(M>>>28|A<<4)^(M<<30|A>>>2)^(M<<25|A>>>7),yt=(A>>>28|M<<4)^(A<<30|M>>>2)^(A<<25|M>>>7),gt=(R>>>14|j<<18)^(R>>>18|j<<14)^(R<<23|j>>>9),vt=(j>>>14|R<<18)^(j>>>18|R<<14)^(j<<23|R>>>9),bt=l[q],Pt=bt.high,wt=bt.low,xt=X+vt,St=U+gt+(xt>>>0<X>>>0?1:0),xt=xt+ft,St=St+ut+(xt>>>0<ft>>>0?1:0),xt=xt+wt,St=St+Pt+(xt>>>0<wt>>>0?1:0),xt=xt+z,St=St+W+(xt>>>0<z>>>0?1:0),_t=yt+pt,kt=mt+dt+(_t>>>0<yt>>>0?1:0);
// Update working variables
U=V,X=H,V=F,H=G,F=R,G=j,j=N+xt|0,R=I+St+(j>>>0<N>>>0?1:0)|0,I=C,N=L,C=D,L=B,D=M,B=A,A=xt+_t|0,M=St+kt+(A>>>0<xt>>>0?1:0)|0}
// Intermediate hash value
p=n.low=p+A,n.high=d+M+(p>>>0<A>>>0?1:0),y=r.low=y+B,r.high=m+D+(y>>>0<B>>>0?1:0),v=a.low=v+L,a.high=g+C+(v>>>0<L>>>0?1:0),P=o.low=P+N,o.high=b+I+(P>>>0<N>>>0?1:0),x=s.low=x+j,s.high=w+R+(x>>>0<j>>>0?1:0),_=c.low=_+G,c.high=S+F+(_>>>0<G>>>0?1:0),T=u.low=T+H,u.high=k+V+(T>>>0<H>>>0?1:0),E=f.low=E+X,f.high=O+U+(E>>>0<X>>>0?1:0)},_doFinalize:function(){
// Shortcuts
var t=this._data,e=t.words,i=8*this._nDataBytes,n=8*t.sigBytes;
// Return final computed hash
// Add padding
// Hash final blocks
return e[n>>>5]|=128<<24-n%32,e[30+(n+128>>>10<<5)]=Math.floor(i/4294967296),e[31+(n+128>>>10<<5)]=i,t.sigBytes=4*e.length,this._process(),this._hash.toX32()},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});/**
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
		 *     var hash = CryptoJS.SHA512('message');
		 *     var hash = CryptoJS.SHA512(wordArray);
		 */
i.SHA512=r._createHelper(u),/**
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
		 *     var hmac = CryptoJS.HmacSHA512(message, key);
		 */
i.HmacSHA512=r._createHmacHelper(u)}(),t.SHA512})},/* 150 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=n(o),c=i(24),l=(n(c),function(){function t(e,i){r(this,t),this.game=e,this.GUI=i,this.level=this.GUI.level,
// this.showMap();
this.activeOpen=!0,this.activeClose=!0,this.questmapBackground,this.show=!1}return a(t,[{key:"toggleMap",value:function(){this.show?(this.closeMap(),this.show=!1):(this.showMap(),this.show=!0)}},{key:"showMap",value:function(){console.log("Show Questmap"),this.level=this.GUI.level,this.quests=this.level.safe.getQuests(),console.log(this.quests);this.bmd=game.add.bitmapData(400,200),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,0,400,200),this.bmd.ctx.fillStyle="#000000",this.bmd.ctx.globalAlpha=.9,this.bmd.ctx.fill(),this.questmapBackground=game.add.sprite(this.game.camera.width/2,this.game.camera.height/2-this.bmd.height/2,this.bmd),this.questmapBackground.anchor.set(.5),this.questmapBackground.fixedToCamera=!0,this.text=this.game.add.bitmapText(this.questmapBackground.x-175,this.questmapBackground.y-80,"pxlfont","",20),this.text.text="",this.text.alpha=0,this.text.fixedToCamera=!0;for(var t in this.quests)isNaN(t)||(void 0!==this.quests[t].questKillEnemyAmount?this.text.text+=this.quests[t].questMessage+": "+this.quests[t].questDeadEnemies+"/"+this.quests[t].questKillEnemyAmount+"\n":this.text.text+=this.quests[t].questMessage+"\n");var e=0;for(var i in this.quests.masteredQuests)!isNaN(i)&&e<3&&(console.log(this.quests.masteredQuests[i].questMessage),e++);this.questmapBackground.alpha=0,this.text.alpha=0,this.game.add.tween(this.text.cameraOffset).to({y:this.text.y+120},800,s.default.Easing.Back.Out,!0),this.game.add.tween(this.text).to({alpha:1},500,s.default.Easing.Linear.None,!0),this.game.add.tween(this.questmapBackground.cameraOffset).to({y:this.questmapBackground.y+120},800,s.default.Easing.Back.Out,!0),this.game.add.tween(this.questmapBackground).to({alpha:1},800,s.default.Easing.Linear.None,!0)}},{key:"closeMap",value:function(){console.log("Close Questmap"),this.tween=this.game.add.tween(this.questmapBackground.cameraOffset).to({y:100},800,s.default.Easing.Back.Out,!0),this.game.add.tween(this.questmapBackground).to({alpha:0},500,s.default.Easing.Linear.None,!0),this.tween=this.game.add.tween(this.text.cameraOffset).to({y:10},800,s.default.Easing.Back.Out,!0),this.game.add.tween(this.text).to({alpha:0},500,s.default.Easing.Linear.None,!0),this.tween.onComplete.add(function(){},this)}}]),t}());e.default=l},/* 151 */
/***/
function(t,e){/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
t.exports=function(t){function e(t){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",t)}try{"undefined"!=typeof execScript&&
// Check for IE =< 8
function(){return"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener}()?execScript(t):"undefined"!=typeof eval?eval.call(null,t):e("EvalError: No eval function available")}catch(t){e(t)}}},/* 152 */
/***/
function(t,e,i){i(153),t.exports=i(355)},/* 153 */
/***/
function(t,e,i){"use strict";/* WEBPACK VAR INJECTION */
(function(t){function e(t,e,i){t[e]||Object[n](t,e,{writable:!0,configurable:!0,value:i})}if(i(154),i(351),i(352),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var n="defineProperty";e(String.prototype,"padLeft","".padStart),e(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&e(Array,t,Function.call.bind([][t]))})}).call(e,i(53))},/* 154 */
/***/
function(t,e,i){i(155),i(157),i(158),i(159),i(160),i(161),i(162),i(163),i(164),i(165),i(166),i(167),i(168),i(169),i(170),i(171),i(173),i(174),i(175),i(176),i(177),i(178),i(179),i(180),i(181),i(182),i(183),i(184),i(185),i(186),i(187),i(188),i(189),i(190),i(191),i(192),i(193),i(194),i(195),i(196),i(197),i(198),i(199),i(200),i(201),i(202),i(203),i(204),i(205),i(206),i(207),i(208),i(209),i(210),i(211),i(212),i(213),i(214),i(215),i(216),i(217),i(218),i(219),i(220),i(221),i(222),i(223),i(224),i(225),i(226),i(227),i(228),i(229),i(230),i(231),i(232),i(233),i(235),i(236),i(238),i(239),i(240),i(241),i(242),i(243),i(244),i(246),i(247),i(248),i(249),i(250),i(251),i(252),i(253),i(254),i(255),i(256),i(257),i(258),i(93),i(259),i(260),i(121),i(261),i(262),i(263),i(264),i(265),i(124),i(126),i(127),i(266),i(267),i(268),i(269),i(270),i(271),i(272),i(273),i(274),i(275),i(276),i(277),i(278),i(279),i(280),i(281),i(282),i(283),i(284),i(285),i(286),i(287),i(288),i(289),i(290),i(291),i(292),i(293),i(294),i(295),i(296),i(297),i(298),i(299),i(300),i(301),i(302),i(303),i(304),i(305),i(306),i(307),i(308),i(309),i(310),i(311),i(312),i(313),i(314),i(315),i(316),i(317),i(318),i(319),i(320),i(321),i(322),i(323),i(324),i(325),i(326),i(327),i(328),i(329),i(330),i(331),i(332),i(333),i(334),i(335),i(336),i(337),i(338),i(339),i(340),i(341),i(342),i(343),i(344),i(345),i(346),i(347),i(348),i(349),i(350),t.exports=i(25)},/* 155 */
/***/
function(t,e,i){"use strict";
// ECMAScript 6 symbols shim
var n=i(2),r=i(14),a=i(8),o=i(0),s=i(16),c=i(33).KEY,l=i(4),h=i(57),u=i(47),f=i(36),d=i(7),p=i(104),m=i(73),y=i(156),g=i(60),v=i(1),b=i(5),P=i(18),w=i(26),x=i(35),S=i(40),_=i(107),k=i(19),T=i(9),O=i(38),E=k.f,M=T.f,A=_.f,D=n.Symbol,B=n.JSON,C=B&&B.stringify,L=d("_hidden"),I=d("toPrimitive"),N={}.propertyIsEnumerable,R=h("symbol-registry"),j=h("symbols"),F=h("op-symbols"),G=Object.prototype,V="function"==typeof D,H=n.QObject,U=!H||!H.prototype||!H.prototype.findChild,X=a&&l(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,i){var n=E(G,e);n&&delete G[e],M(t,e,i),n&&t!==G&&M(G,e,n)}:M,q=function(t){var e=j[t]=S(D.prototype);return e._k=t,e},Y=V&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},W=function(t,e,i){return t===G&&W(F,e,i),v(t),e=w(e,!0),v(i),r(j,e)?(i.enumerable?(r(t,L)&&t[L][e]&&(t[L][e]=!1),i=S(i,{enumerable:x(0,!1)})):(r(t,L)||M(t,L,x(1,{})),t[L][e]=!0),X(t,e,i)):M(t,e,i)},z=function(t,e){v(t);for(var i,n=y(e=P(e)),r=0,a=n.length;a>r;)W(t,i=n[r++],e[i]);return t},J=function(t,e){return void 0===e?S(t):z(S(t),e)},Z=function(t){var e=N.call(this,t=w(t,!0));return!(this===G&&r(j,t)&&!r(F,t))&&(!(e||!r(this,t)||!r(j,t)||r(this,L)&&this[L][t])||e)},K=function(t,e){if(t=P(t),e=w(e,!0),t!==G||!r(j,e)||r(F,e)){var i=E(t,e);return!i||!r(j,e)||r(t,L)&&t[L][e]||(i.enumerable=!0),i}},Q=function(t){for(var e,i=A(P(t)),n=[],a=0;i.length>a;)r(j,e=i[a++])||e==L||e==c||n.push(e);return n},$=function(t){for(var e,i=t===G,n=A(i?F:P(t)),a=[],o=0;n.length>o;)!r(j,e=n[o++])||i&&!r(G,e)||a.push(j[e]);return a};
// 19.4.1.1 Symbol([description])
V||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(i){this===G&&e.call(F,i),r(this,L)&&r(this[L],t)&&(this[L][t]=!1),X(this,t,x(1,i))};return a&&U&&X(G,t,{configurable:!0,set:e}),q(t)},s(D.prototype,"toString",function(){return this._k}),k.f=K,T.f=W,i(41).f=_.f=Q,i(55).f=Z,i(59).f=$,a&&!i(37)&&s(G,"propertyIsEnumerable",Z,!0),p.f=function(t){return q(d(t))}),o(o.G+o.W+o.F*!V,{Symbol:D});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
","),et=0;tt.length>et;)d(tt[et++]);for(var it=O(d.store),nt=0;it.length>nt;)m(it[nt++]);o(o.S+o.F*!V,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(t){return r(R,t+="")?R[t]:R[t]=D(t)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),o(o.S+o.F*!V,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:J,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:W,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:z,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:K,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:Q,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
B&&o(o.S+o.F*(!V||l(function(){var t=D();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,i,n=[t],r=1;arguments.length>r;)n.push(arguments[r++]);if(i=e=n[1],(b(e)||void 0!==t)&&!Y(t))// IE8 returns string on undefined
return g(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!Y(e))return e}),n[1]=e,C.apply(B,n)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
D.prototype[I]||i(15)(D.prototype,I,D.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
u(D,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
u(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
u(n.JSON,"JSON",!0)},/* 156 */
/***/
function(t,e,i){
// all enumerable object keys, includes symbols
var n=i(38),r=i(59),a=i(55);t.exports=function(t){var e=n(t),i=r.f;if(i)for(var o,s=i(t),c=a.f,l=0;s.length>l;)c.call(t,o=s[l++])&&e.push(o);return e}},/* 157 */
/***/
function(t,e,i){var n=i(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
n(n.S,"Object",{create:i(40)})},/* 158 */
/***/
function(t,e,i){var n=i(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
n(n.S+n.F*!i(8),"Object",{defineProperty:i(9).f})},/* 159 */
/***/
function(t,e,i){var n=i(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
n(n.S+n.F*!i(8),"Object",{defineProperties:i(106)})},/* 160 */
/***/
function(t,e,i){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var n=i(18),r=i(19).f;i(29)("getOwnPropertyDescriptor",function(){return function(t,e){return r(n(t),e)}})},/* 161 */
/***/
function(t,e,i){
// 19.1.2.9 Object.getPrototypeOf(O)
var n=i(11),r=i(20);i(29)("getPrototypeOf",function(){return function(t){return r(n(t))}})},/* 162 */
/***/
function(t,e,i){
// 19.1.2.14 Object.keys(O)
var n=i(11),r=i(38);i(29)("keys",function(){return function(t){return r(n(t))}})},/* 163 */
/***/
function(t,e,i){
// 19.1.2.7 Object.getOwnPropertyNames(O)
i(29)("getOwnPropertyNames",function(){return i(107).f})},/* 164 */
/***/
function(t,e,i){
// 19.1.2.5 Object.freeze(O)
var n=i(5),r=i(33).onFreeze;i(29)("freeze",function(t){return function(e){return t&&n(e)?t(r(e)):e}})},/* 165 */
/***/
function(t,e,i){
// 19.1.2.17 Object.seal(O)
var n=i(5),r=i(33).onFreeze;i(29)("seal",function(t){return function(e){return t&&n(e)?t(r(e)):e}})},/* 166 */
/***/
function(t,e,i){
// 19.1.2.15 Object.preventExtensions(O)
var n=i(5),r=i(33).onFreeze;i(29)("preventExtensions",function(t){return function(e){return t&&n(e)?t(r(e)):e}})},/* 167 */
/***/
function(t,e,i){
// 19.1.2.12 Object.isFrozen(O)
var n=i(5);i(29)("isFrozen",function(t){return function(e){return!n(e)||!!t&&t(e)}})},/* 168 */
/***/
function(t,e,i){
// 19.1.2.13 Object.isSealed(O)
var n=i(5);i(29)("isSealed",function(t){return function(e){return!n(e)||!!t&&t(e)}})},/* 169 */
/***/
function(t,e,i){
// 19.1.2.11 Object.isExtensible(O)
var n=i(5);i(29)("isExtensible",function(t){return function(e){return!!n(e)&&(!t||t(e))}})},/* 170 */
/***/
function(t,e,i){
// 19.1.3.1 Object.assign(target, source)
var n=i(0);n(n.S+n.F,"Object",{assign:i(108)})},/* 171 */
/***/
function(t,e,i){
// 19.1.3.10 Object.is(value1, value2)
var n=i(0);n(n.S,"Object",{is:i(172)})},/* 172 */
/***/
function(t,e){
// 7.2.9 SameValue(x, y)
t.exports=Object.is||function(t,e){
// eslint-disable-next-line no-self-compare
return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},/* 173 */
/***/
function(t,e,i){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var n=i(0);n(n.S,"Object",{setPrototypeOf:i(77).set})},/* 174 */
/***/
function(t,e,i){"use strict";
// 19.1.3.6 Object.prototype.toString()
var n=i(56),r={};r[i(7)("toStringTag")]="z",r+""!="[object z]"&&i(16)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},/* 175 */
/***/
function(t,e,i){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var n=i(0);n(n.P,"Function",{bind:i(109)})},/* 176 */
/***/
function(t,e,i){var n=i(9).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;
// 19.2.4.2 name
"name"in r||i(8)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},/* 177 */
/***/
function(t,e,i){"use strict";var n=i(5),r=i(20),a=i(7)("hasInstance"),o=Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
a in o||i(9).f(o,a,{value:function(t){if("function"!=typeof this||!n(t))return!1;if(!n(this.prototype))return t instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=r(t);)if(this.prototype===t)return!0;return!1}})},/* 178 */
/***/
function(t,e,i){var n=i(0),r=i(111);
// 18.2.5 parseInt(string, radix)
n(n.G+n.F*(parseInt!=r),{parseInt:r})},/* 179 */
/***/
function(t,e,i){var n=i(0),r=i(112);
// 18.2.4 parseFloat(string)
n(n.G+n.F*(parseFloat!=r),{parseFloat:r})},/* 180 */
/***/
function(t,e,i){"use strict";var n=i(2),r=i(14),a=i(22),o=i(79),s=i(26),c=i(4),l=i(41).f,h=i(19).f,u=i(9).f,f=i(48).trim,d=n.Number,p=d,m=d.prototype,y="Number"==a(i(40)(m)),g="trim"in String.prototype,v=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var i,n,r,a=e.charCodeAt(0);if(43===a||45===a){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:n=8,r=55;break;// fast equal /^0o[0-7]+$/i
default:return+e}for(var o,c=e.slice(2),l=0,h=c.length;l<h;l++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((o=c.charCodeAt(l))<48||o>r)return NaN;return parseInt(c,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;
// check on 1..constructor(foo) case
return i instanceof d&&(y?c(function(){m.valueOf.call(i)}):"Number"!=a(i))?o(new p(v(e)),i,d):v(e)};for(var b,P=i(8)?l(p):// ES3:
"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;P.length>w;w++)r(p,b=P[w])&&!r(d,b)&&u(d,b,h(p,b));d.prototype=m,m.constructor=d,i(16)(n,"Number",d)}},/* 181 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(28),a=i(113),o=i(80),s=1..toFixed,c=Math.floor,l=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",u=function(t,e){for(var i=-1,n=e;++i<6;)n+=t*l[i],l[i]=n%1e7,n=c(n/1e7)},f=function(t){for(var e=6,i=0;--e>=0;)i+=l[e],l[e]=c(i/t),i=i%t*1e7},d=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==l[t]){var i=String(l[t]);e=""===e?i:e+o.call("0",7-i.length)+i}return e},p=function(t,e,i){return 0===e?i:e%2==1?p(t,e-1,i*t):p(t*t,e/2,i)},m=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e};n(n.P+n.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i(4)(function(){
// V8 ~ Android 4.3-
s.call({})})),"Number",{toFixed:function(t){var e,i,n,s,c=a(this,h),l=r(t),y="",g="0";if(l<0||l>20)throw RangeError(h);
// eslint-disable-next-line no-self-compare
if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(y="-",c=-c),c>1e-21)if(e=m(c*p(2,69,1))-69,i=e<0?c*p(2,-e,1):c/p(2,e,1),i*=4503599627370496,(e=52-e)>0){for(u(0,i),n=l;n>=7;)u(1e7,0),n-=7;for(u(p(10,n,1),0),n=e-1;n>=23;)f(1<<23),n-=23;f(1<<n),u(1,1),f(2),g=d()}else u(0,i),u(1<<-e,0),g=d()+o.call("0",l);return l>0?(s=g.length,g=y+(s<=l?"0."+o.call("0",l-s)+g:g.slice(0,s-l)+"."+g.slice(s-l))):g=y+g,g}})},/* 182 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(4),a=i(113),o=1..toPrecision;n(n.P+n.F*(r(function(){
// IE7-
return"1"!==o.call(1,void 0)})||!r(function(){
// V8 ~ Android 4.3-
o.call({})})),"Number",{toPrecision:function(t){var e=a(this,"Number#toPrecision: incorrect invocation!");return void 0===t?o.call(e):o.call(e,t)}})},/* 183 */
/***/
function(t,e,i){
// 20.1.2.1 Number.EPSILON
var n=i(0);n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},/* 184 */
/***/
function(t,e,i){
// 20.1.2.2 Number.isFinite(number)
var n=i(0),r=i(2).isFinite;n(n.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},/* 185 */
/***/
function(t,e,i){
// 20.1.2.3 Number.isInteger(number)
var n=i(0);n(n.S,"Number",{isInteger:i(114)})},/* 186 */
/***/
function(t,e,i){
// 20.1.2.4 Number.isNaN(number)
var n=i(0);n(n.S,"Number",{isNaN:function(t){
// eslint-disable-next-line no-self-compare
return t!=t}})},/* 187 */
/***/
function(t,e,i){
// 20.1.2.5 Number.isSafeInteger(number)
var n=i(0),r=i(114),a=Math.abs;n(n.S,"Number",{isSafeInteger:function(t){return r(t)&&a(t)<=9007199254740991}})},/* 188 */
/***/
function(t,e,i){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var n=i(0);n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},/* 189 */
/***/
function(t,e,i){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var n=i(0);n(n.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},/* 190 */
/***/
function(t,e,i){var n=i(0),r=i(112);
// 20.1.2.12 Number.parseFloat(string)
n(n.S+n.F*(Number.parseFloat!=r),"Number",{parseFloat:r})},/* 191 */
/***/
function(t,e,i){var n=i(0),r=i(111);
// 20.1.2.13 Number.parseInt(string, radix)
n(n.S+n.F*(Number.parseInt!=r),"Number",{parseInt:r})},/* 192 */
/***/
function(t,e,i){
// 20.2.2.3 Math.acosh(x)
var n=i(0),r=i(115),a=Math.sqrt,o=Math.acosh;n(n.S+n.F*!(o&&
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
710==Math.floor(o(Number.MAX_VALUE))&&
// Tor Browser bug: Math.acosh(Infinity) -> NaN
o(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:r(t-1+a(t-1)*a(t+1))}})},/* 193 */
/***/
function(t,e,i){function n(t){return isFinite(t=+t)&&0!=t?t<0?-n(-t):Math.log(t+Math.sqrt(t*t+1)):t}
// 20.2.2.5 Math.asinh(x)
var r=i(0),a=Math.asinh;
// Tor Browser bug: Math.asinh(0) -> -0
r(r.S+r.F*!(a&&1/a(0)>0),"Math",{asinh:n})},/* 194 */
/***/
function(t,e,i){
// 20.2.2.7 Math.atanh(x)
var n=i(0),r=Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
n(n.S+n.F*!(r&&1/r(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},/* 195 */
/***/
function(t,e,i){
// 20.2.2.9 Math.cbrt(x)
var n=i(0),r=i(81);n(n.S,"Math",{cbrt:function(t){return r(t=+t)*Math.pow(Math.abs(t),1/3)}})},/* 196 */
/***/
function(t,e,i){
// 20.2.2.11 Math.clz32(x)
var n=i(0);n(n.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},/* 197 */
/***/
function(t,e,i){
// 20.2.2.12 Math.cosh(x)
var n=i(0),r=Math.exp;n(n.S,"Math",{cosh:function(t){return(r(t=+t)+r(-t))/2}})},/* 198 */
/***/
function(t,e,i){
// 20.2.2.14 Math.expm1(x)
var n=i(0),r=i(82);n(n.S+n.F*(r!=Math.expm1),"Math",{expm1:r})},/* 199 */
/***/
function(t,e,i){
// 20.2.2.16 Math.fround(x)
var n=i(0);n(n.S,"Math",{fround:i(116)})},/* 200 */
/***/
function(t,e,i){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var n=i(0),r=Math.abs;n(n.S,"Math",{hypot:function(t,e){for(
// eslint-disable-line no-unused-vars
var i,n,a=0,o=0,s=arguments.length,c=0;o<s;)i=r(arguments[o++]),c<i?(n=c/i,a=a*n*n+1,c=i):i>0?(n=i/c,a+=n*n):a+=i;return c===1/0?1/0:c*Math.sqrt(a)}})},/* 201 */
/***/
function(t,e,i){
// 20.2.2.18 Math.imul(x, y)
var n=i(0),r=Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
n(n.S+n.F*i(4)(function(){return-5!=r(4294967295,5)||2!=r.length}),"Math",{imul:function(t,e){var i=+t,n=+e,r=65535&i,a=65535&n;return 0|r*a+((65535&i>>>16)*a+r*(65535&n>>>16)<<16>>>0)}})},/* 202 */
/***/
function(t,e,i){
// 20.2.2.21 Math.log10(x)
var n=i(0);n(n.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},/* 203 */
/***/
function(t,e,i){
// 20.2.2.20 Math.log1p(x)
var n=i(0);n(n.S,"Math",{log1p:i(115)})},/* 204 */
/***/
function(t,e,i){
// 20.2.2.22 Math.log2(x)
var n=i(0);n(n.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},/* 205 */
/***/
function(t,e,i){
// 20.2.2.28 Math.sign(x)
var n=i(0);n(n.S,"Math",{sign:i(81)})},/* 206 */
/***/
function(t,e,i){
// 20.2.2.30 Math.sinh(x)
var n=i(0),r=i(82),a=Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
n(n.S+n.F*i(4)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(r(t)-r(-t))/2:(a(t-1)-a(-t-1))*(Math.E/2)}})},/* 207 */
/***/
function(t,e,i){
// 20.2.2.33 Math.tanh(x)
var n=i(0),r=i(82),a=Math.exp;n(n.S,"Math",{tanh:function(t){var e=r(t=+t),i=r(-t);return e==1/0?1:i==1/0?-1:(e-i)/(a(t)+a(-t))}})},/* 208 */
/***/
function(t,e,i){
// 20.2.2.34 Math.trunc(x)
var n=i(0);n(n.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},/* 209 */
/***/
function(t,e,i){var n=i(0),r=i(39),a=String.fromCharCode,o=String.fromCodePoint;
// length should be 1, old FF problem
n(n.S+n.F*(!!o&&1!=o.length),"String",{
// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function(t){for(
// eslint-disable-line no-unused-vars
var e,i=[],n=arguments.length,o=0;n>o;){if(e=+arguments[o++],r(e,1114111)!==e)throw RangeError(e+" is not a valid code point");i.push(e<65536?a(e):a(55296+((e-=65536)>>10),e%1024+56320))}return i.join("")}})},/* 210 */
/***/
function(t,e,i){var n=i(0),r=i(18),a=i(10);n(n.S,"String",{
// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function(t){for(var e=r(t.raw),i=a(e.length),n=arguments.length,o=[],s=0;i>s;)o.push(String(e[s++])),s<n&&o.push(String(arguments[s]));return o.join("")}})},/* 211 */
/***/
function(t,e,i){"use strict";
// 21.1.3.25 String.prototype.trim()
i(48)("trim",function(t){return function(){return t(this,3)}})},/* 212 */
/***/
function(t,e,i){"use strict";var n=i(83)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
i(84)(String,"String",function(t){this._t=String(t),// target
this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=n(e,i),this._i+=t.length,{value:t,done:!1})})},/* 213 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(83)(!1);n(n.P,"String",{
// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function(t){return r(this,t)}})},/* 214 */
/***/
function(t,e,i){"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var n=i(0),r=i(10),a=i(86),o="".endsWith;n(n.P+n.F*i(87)("endsWith"),"String",{endsWith:function(t){var e=a(this,t,"endsWith"),i=arguments.length>1?arguments[1]:void 0,n=r(e.length),s=void 0===i?n:Math.min(r(i),n),c=String(t);return o?o.call(e,c,s):e.slice(s-c.length,s)===c}})},/* 215 */
/***/
function(t,e,i){"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var n=i(0),r=i(86);n(n.P+n.F*i(87)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},/* 216 */
/***/
function(t,e,i){var n=i(0);n(n.P,"String",{
// 21.1.3.13 String.prototype.repeat(count)
repeat:i(80)})},/* 217 */
/***/
function(t,e,i){"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var n=i(0),r=i(10),a=i(86),o="".startsWith;n(n.P+n.F*i(87)("startsWith"),"String",{startsWith:function(t){var e=a(this,t,"startsWith"),i=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return o?o.call(e,n,i):e.slice(i,i+n.length)===n}})},/* 218 */
/***/
function(t,e,i){"use strict";
// B.2.3.2 String.prototype.anchor(name)
i(17)("anchor",function(t){return function(e){return t(this,"a","name",e)}})},/* 219 */
/***/
function(t,e,i){"use strict";
// B.2.3.3 String.prototype.big()
i(17)("big",function(t){return function(){return t(this,"big","","")}})},/* 220 */
/***/
function(t,e,i){"use strict";
// B.2.3.4 String.prototype.blink()
i(17)("blink",function(t){return function(){return t(this,"blink","","")}})},/* 221 */
/***/
function(t,e,i){"use strict";
// B.2.3.5 String.prototype.bold()
i(17)("bold",function(t){return function(){return t(this,"b","","")}})},/* 222 */
/***/
function(t,e,i){"use strict";
// B.2.3.6 String.prototype.fixed()
i(17)("fixed",function(t){return function(){return t(this,"tt","","")}})},/* 223 */
/***/
function(t,e,i){"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
i(17)("fontcolor",function(t){return function(e){return t(this,"font","color",e)}})},/* 224 */
/***/
function(t,e,i){"use strict";
// B.2.3.8 String.prototype.fontsize(size)
i(17)("fontsize",function(t){return function(e){return t(this,"font","size",e)}})},/* 225 */
/***/
function(t,e,i){"use strict";
// B.2.3.9 String.prototype.italics()
i(17)("italics",function(t){return function(){return t(this,"i","","")}})},/* 226 */
/***/
function(t,e,i){"use strict";
// B.2.3.10 String.prototype.link(url)
i(17)("link",function(t){return function(e){return t(this,"a","href",e)}})},/* 227 */
/***/
function(t,e,i){"use strict";
// B.2.3.11 String.prototype.small()
i(17)("small",function(t){return function(){return t(this,"small","","")}})},/* 228 */
/***/
function(t,e,i){"use strict";
// B.2.3.12 String.prototype.strike()
i(17)("strike",function(t){return function(){return t(this,"strike","","")}})},/* 229 */
/***/
function(t,e,i){"use strict";
// B.2.3.13 String.prototype.sub()
i(17)("sub",function(t){return function(){return t(this,"sub","","")}})},/* 230 */
/***/
function(t,e,i){"use strict";
// B.2.3.14 String.prototype.sup()
i(17)("sup",function(t){return function(){return t(this,"sup","","")}})},/* 231 */
/***/
function(t,e,i){
// 20.3.3.1 / 15.9.4.4 Date.now()
var n=i(0);n(n.S,"Date",{now:function(){return(new Date).getTime()}})},/* 232 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(11),a=i(26);n(n.P+n.F*i(4)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{
// eslint-disable-next-line no-unused-vars
toJSON:function(t){var e=r(this),i=a(e);return"number"!=typeof i||isFinite(i)?e.toISOString():null}})},/* 233 */
/***/
function(t,e,i){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=i(0),r=i(234);
// PhantomJS / old WebKit has a broken implementations
n(n.P+n.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},/* 234 */
/***/
function(t,e,i){"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=i(4),r=Date.prototype.getTime,a=Date.prototype.toISOString,o=function(t){return t>9?t:"0"+t};
// PhantomJS / old WebKit has a broken implementations
t.exports=n(function(){return"0385-07-25T07:06:39.999Z"!=a.call(new Date(-5e13-1))})||!n(function(){a.call(new Date(NaN))})?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),i=t.getUTCMilliseconds(),n=e<0?"-":e>9999?"+":"";return n+("00000"+Math.abs(e)).slice(n?-6:-4)+"-"+o(t.getUTCMonth()+1)+"-"+o(t.getUTCDate())+"T"+o(t.getUTCHours())+":"+o(t.getUTCMinutes())+":"+o(t.getUTCSeconds())+"."+(i>99?i:"0"+o(i))+"Z"}:a},/* 235 */
/***/
function(t,e,i){var n=Date.prototype,r=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&i(16)(n,"toString",function(){var t=a.call(this);
// eslint-disable-next-line no-self-compare
return t===t?r.call(this):"Invalid Date"})},/* 236 */
/***/
function(t,e,i){var n=i(7)("toPrimitive"),r=Date.prototype;n in r||i(15)(r,n,i(237))},/* 237 */
/***/
function(t,e,i){"use strict";var n=i(1),r=i(26);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(n(this),"number"!=t)}},/* 238 */
/***/
function(t,e,i){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var n=i(0);n(n.S,"Array",{isArray:i(60)})},/* 239 */
/***/
function(t,e,i){"use strict";var n=i(21),r=i(0),a=i(11),o=i(117),s=i(88),c=i(10),l=i(89),h=i(90);r(r.S+r.F*!i(62)(function(t){Array.from(t)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(t){var e,i,r,u,f=a(t),d="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,y=void 0!==m,g=0,v=h(f);
// if object isn't iterable or it's array with default iterator - use simple case
if(y&&(m=n(m,p>2?arguments[2]:void 0,2)),void 0==v||d==Array&&s(v))for(e=c(f.length),i=new d(e);e>g;g++)l(i,g,y?m(f[g],g):f[g]);else for(u=v.call(f),i=new d;!(r=u.next()).done;g++)l(i,g,y?o(u,m,[r.value,g],!0):r.value);return i.length=g,i}})},/* 240 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(89);
// WebKit Array.of isn't generic
n(n.S+n.F*i(4)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{
// 22.1.2.3 Array.of( ...items)
of:function(){for(var t=0,e=arguments.length,i=new("function"==typeof this?this:Array)(e);e>t;)r(i,t,arguments[t++]);return i.length=e,i}})},/* 241 */
/***/
function(t,e,i){"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var n=i(0),r=i(18),a=[].join;
// fallback for not array-like strings
n(n.P+n.F*(i(54)!=Object||!i(23)(a)),"Array",{join:function(t){return a.call(r(this),void 0===t?",":t)}})},/* 242 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(76),a=i(22),o=i(39),s=i(10),c=[].slice;
// fallback for not array-like ES3 strings and DOM objects
n(n.P+n.F*i(4)(function(){r&&c.call(r)}),"Array",{slice:function(t,e){var i=s(this.length),n=a(this);if(e=void 0===e?i:e,"Array"==n)return c.call(this,t,e);for(var r=o(t,i),l=o(e,i),h=s(l-r),u=new Array(h),f=0;f<h;f++)u[f]="String"==n?this.charAt(r+f):this[r+f];return u}})},/* 243 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(13),a=i(11),o=i(4),s=[].sort,c=[1,2,3];n(n.P+n.F*(o(function(){
// IE8-
c.sort(void 0)})||!o(function(){
// V8 bug
c.sort(null)})||!i(23)(s)),"Array",{
// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),r(t))}})},/* 244 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(30)(0),a=i(23)([].forEach,!0);n(n.P+n.F*!a,"Array",{
// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(t){return r(this,t,arguments[1])}})},/* 245 */
/***/
function(t,e,i){var n=i(5),r=i(60),a=i(7)("species");t.exports=function(t){var e;
// cross-realm fallback
return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}},/* 246 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(30)(1);n(n.P+n.F*!i(23)([].map,!0),"Array",{
// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(t){return r(this,t,arguments[1])}})},/* 247 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(30)(2);n(n.P+n.F*!i(23)([].filter,!0),"Array",{
// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(t){return r(this,t,arguments[1])}})},/* 248 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(30)(3);n(n.P+n.F*!i(23)([].some,!0),"Array",{
// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(t){return r(this,t,arguments[1])}})},/* 249 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(30)(4);n(n.P+n.F*!i(23)([].every,!0),"Array",{
// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(t){return r(this,t,arguments[1])}})},/* 250 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(118);n(n.P+n.F*!i(23)([].reduce,!0),"Array",{
// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},/* 251 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(118);n(n.P+n.F*!i(23)([].reduceRight,!0),"Array",{
// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},/* 252 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(58)(!1),a=[].indexOf,o=!!a&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(o||!i(23)(a)),"Array",{
// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(t){// convert -0 to +0
return o?a.apply(this,arguments)||0:r(this,t,arguments[1])}})},/* 253 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(18),a=i(28),o=i(10),s=[].lastIndexOf,c=!!s&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(c||!i(23)(s)),"Array",{
// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(t){
// convert -0 to +0
if(c)return s.apply(this,arguments)||0;var e=r(this),i=o(e.length),n=i-1;for(arguments.length>1&&(n=Math.min(n,a(arguments[1]))),n<0&&(n=i+n);n>=0;n--)if(n in e&&e[n]===t)return n||0;return-1}})},/* 254 */
/***/
function(t,e,i){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=i(0);n(n.P,"Array",{copyWithin:i(119)}),i(34)("copyWithin")},/* 255 */
/***/
function(t,e,i){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=i(0);n(n.P,"Array",{fill:i(92)}),i(34)("fill")},/* 256 */
/***/
function(t,e,i){"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var n=i(0),r=i(30)(5),a=!0;
// Shouldn't skip holes
"find"in[]&&Array(1).find(function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(34)("find")},/* 257 */
/***/
function(t,e,i){"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var n=i(0),r=i(30)(6),a="findIndex",o=!0;
// Shouldn't skip holes
a in[]&&Array(1)[a](function(){o=!1}),n(n.P+n.F*o,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(34)(a)},/* 258 */
/***/
function(t,e,i){i(42)("Array")},/* 259 */
/***/
function(t,e,i){var n=i(2),r=i(79),a=i(9).f,o=i(41).f,s=i(61),c=i(63),l=n.RegExp,h=l,u=l.prototype,f=/a/g,d=/a/g,p=new l(f)!==f;if(i(8)&&(!p||i(4)(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return d[i(7)("match")]=!1,l(f)!=f||l(d)==d||"/a/i"!=l(f,"i")}))){l=function(t,e){var i=this instanceof l,n=s(t),a=void 0===e;return!i&&n&&t.constructor===l&&a?t:r(p?new h(n&&!a?t.source:t,e):h((n=t instanceof l)?t.source:t,n&&a?c.call(t):e),i?this:u,l)};for(var m=o(h),y=0;m.length>y;)!function(t){t in l||a(l,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})}(m[y++]);u.constructor=l,l.prototype=u,i(16)(n,"RegExp",l)}i(42)("RegExp")},/* 260 */
/***/
function(t,e,i){"use strict";i(121);var n=i(1),r=i(63),a=i(8),o=/./.toString,s=function(t){i(16)(RegExp.prototype,"toString",t,!0)};
// 21.2.5.14 RegExp.prototype.toString()
i(4)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},/* 261 */
/***/
function(t,e,i){
// @@match logic
i(64)("match",1,function(t,e,i){
// 21.1.3.11 String.prototype.match(regexp)
return[function(i){"use strict";var n=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,n):new RegExp(i)[e](String(n))},i]})},/* 262 */
/***/
function(t,e,i){
// @@replace logic
i(64)("replace",2,function(t,e,i){
// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function(n,r){"use strict";var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,r):i.call(String(a),n,r)},i]})},/* 263 */
/***/
function(t,e,i){
// @@search logic
i(64)("search",1,function(t,e,i){
// 21.1.3.15 String.prototype.search(regexp)
return[function(i){"use strict";var n=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,n):new RegExp(i)[e](String(n))},i]})},/* 264 */
/***/
function(t,e,i){
// @@split logic
i(64)("split",2,function(t,e,n){"use strict";var r=i(61),a=n,o=[].push,s="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[s]||2!="ab".split(/(?:ab)*/)[s]||4!=".".split(/(.?)(.?)/)[s]||".".split(/()()/)[s]>1||"".split(/.?/)[s]){var c=void 0===/()??/.exec("")[1];// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
n=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];
// If `separator` is not a regex, use native split
if(!r(t))return a.call(i,t,e);var n,l,h,u,f,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,y=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,p+"g");for(
// Doesn't need flags gy, but they don't hurt
c||(n=new RegExp("^"+g.source+"$(?!\\s)",p));(l=g.exec(i))&&!((
// `separatorCopy.lastIndex` is not reliable cross-browser
h=l.index+l[0][s])>m&&(d.push(i.slice(m,l.index)),
// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
!c&&l[s]>1&&l[0].replace(n,function(){for(f=1;f<arguments[s]-2;f++)void 0===arguments[f]&&(l[f]=void 0)}),l[s]>1&&l.index<i[s]&&o.apply(d,l.slice(1)),u=l[0][s],m=h,d[s]>=y));)g.lastIndex===l.index&&g.lastIndex++;return m===i[s]?!u&&g.test("")||d.push(""):d.push(i.slice(m)),d[s]>y?d.slice(0,y):d}}else"0".split(void 0,0)[s]&&(n=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});
// 21.1.3.17 String.prototype.split(separator, limit)
return[function(i,r){var a=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,a,r):n.call(String(a),i,r)},n]})},/* 265 */
/***/
function(t,e,i){"use strict";var n,r,a,o,s=i(37),c=i(2),l=i(21),h=i(56),u=i(0),f=i(5),d=i(13),p=i(43),m=i(44),y=i(65),g=i(94).set,v=i(95)(),b=i(96),P=i(122),w=i(123),x=c.TypeError,S=c.process,_=c.Promise,k="process"==h(S),T=function(){},O=r=b.f,E=!!function(){try{
// correct subclassing with @@species support
var t=_.resolve(1),e=(t.constructor={})[i(7)("species")]=function(t){t(T,T)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(k||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e}catch(t){}}(),M=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var i=t._c;v(function(){for(var n=t._v,r=1==t._s,a=0;i.length>a;)!function(e){var i,a,o=r?e.ok:e.fail,s=e.resolve,c=e.reject,l=e.domain;try{o?(r||(2==t._h&&C(t),t._h=1),!0===o?i=n:(l&&l.enter(),i=o(n),l&&l.exit()),i===e.promise?c(x("Promise-chain cycle")):(a=M(i))?a.call(i,s,c):s(i)):c(n)}catch(t){c(t)}}(i[a++]);// variable length - can't use forEach
t._c=[],t._n=!1,e&&!t._h&&D(t)})}},D=function(t){g.call(c,function(){var e,i,n,r=t._v,a=B(t);if(a&&(e=P(function(){k?S.emit("unhandledRejection",r,t):(i=c.onunhandledrejection)?i({promise:t,reason:r}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",r)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t._h=k||B(t)?2:1),t._a=void 0,a&&e.e)throw e.v})},B=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){g.call(c,function(){var e;k?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},L=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,// unwrap
e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},I=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;// unwrap
try{if(i===t)throw x("Promise can't be resolved itself");(e=M(t))?v(function(){var n={_w:i,_d:!1};// wrap
try{e.call(t,l(I,n,1),l(L,n,1))}catch(t){L.call(n,t)}}):(i._v=t,i._s=1,A(i,!1))}catch(t){L.call({_w:i,_d:!1},t)}}};
// constructor polyfill
E||(
// 25.4.3.1 Promise(executor)
_=function(t){p(this,_,"Promise","_h"),d(t),n.call(this);try{t(l(I,this,1),l(L,this,1))}catch(t){L.call(this,t)}},
// eslint-disable-next-line no-unused-vars
n=function(t){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},n.prototype=i(45)(_.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(t,e){var i=O(y(this,_));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=k?S.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&A(this,!1),i.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(t){return this.then(void 0,t)}}),a=function(){var t=new n;this.promise=t,this.resolve=l(I,t,1),this.reject=l(L,t,1)},b.f=O=function(t){return t===_||t===o?new a(t):r(t)}),u(u.G+u.W+u.F*!E,{Promise:_}),i(47)(_,"Promise"),i(42)("Promise"),o=i(25).Promise,
// statics
u(u.S+u.F*!E,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(t){var e=O(this);return(0,e.reject)(t),e.promise}}),u(u.S+u.F*(s||!E),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(t){return w(s&&this===o?_:this,t)}}),u(u.S+u.F*!(E&&i(62)(function(t){_.all(t).catch(T)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(t){var e=this,i=O(e),n=i.resolve,r=i.reject,a=P(function(){var i=[],a=0,o=1;m(t,!1,function(t){var s=a++,c=!1;i.push(void 0),o++,e.resolve(t).then(function(t){c||(c=!0,i[s]=t,--o||n(i))},r)}),--o||n(i)});return a.e&&r(a.v),i.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(t){var e=this,i=O(e),n=i.reject,r=P(function(){m(t,!1,function(t){e.resolve(t).then(i.resolve,n)})});return r.e&&n(r.v),i.promise}})},/* 266 */
/***/
function(t,e,i){"use strict";var n=i(128),r=i(50);
// 23.4 WeakSet Objects
i(66)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(t){return n.def(r(this,"WeakSet"),t,!0)}},n,!1,!0)},/* 267 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(67),a=i(97),o=i(1),s=i(39),c=i(10),l=i(5),h=i(2).ArrayBuffer,u=i(65),f=a.ArrayBuffer,d=a.DataView,p=r.ABV&&h.isView,m=f.prototype.slice,y=r.VIEW;n(n.G+n.W+n.F*(h!==f),{ArrayBuffer:f}),n(n.S+n.F*!r.CONSTR,"ArrayBuffer",{
// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function(t){return p&&p(t)||l(t)&&y in t}}),n(n.P+n.U+n.F*i(4)(function(){return!new f(2).slice(1,void 0).byteLength}),"ArrayBuffer",{
// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function(t,e){if(void 0!==m&&void 0===e)return m.call(o(this),t);for(// FF fix
var i=o(this).byteLength,n=s(t,i),r=s(void 0===e?i:e,i),a=new(u(this,f))(c(r-n)),l=new d(this),h=new d(a),p=0;n<r;)h.setUint8(p++,l.getUint8(n++));return a}}),i(42)("ArrayBuffer")},/* 268 */
/***/
function(t,e,i){var n=i(0);n(n.G+n.W+n.F*!i(67).ABV,{DataView:i(97).DataView})},/* 269 */
/***/
function(t,e,i){i(31)("Int8",1,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 270 */
/***/
function(t,e,i){i(31)("Uint8",1,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 271 */
/***/
function(t,e,i){i(31)("Uint8",1,function(t){return function(e,i,n){return t(this,e,i,n)}},!0)},/* 272 */
/***/
function(t,e,i){i(31)("Int16",2,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 273 */
/***/
function(t,e,i){i(31)("Uint16",2,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 274 */
/***/
function(t,e,i){i(31)("Int32",4,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 275 */
/***/
function(t,e,i){i(31)("Uint32",4,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 276 */
/***/
function(t,e,i){i(31)("Float32",4,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 277 */
/***/
function(t,e,i){i(31)("Float64",8,function(t){return function(e,i,n){return t(this,e,i,n)}})},/* 278 */
/***/
function(t,e,i){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var n=i(0),r=i(13),a=i(1),o=(i(2).Reflect||{}).apply,s=Function.apply;
// MS Edge argumentsList argument is optional
n(n.S+n.F*!i(4)(function(){o(function(){})}),"Reflect",{apply:function(t,e,i){var n=r(t),c=a(i);return o?o(n,e,c):s.call(n,e,c)}})},/* 279 */
/***/
function(t,e,i){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var n=i(0),r=i(40),a=i(13),o=i(1),s=i(5),c=i(4),l=i(109),h=(i(2).Reflect||{}).construct,u=c(function(){function t(){}return!(h(function(){},[],t)instanceof t)}),f=!c(function(){h(function(){})});n(n.S+n.F*(u||f),"Reflect",{construct:function(t,e){a(t),o(e);var i=arguments.length<3?t:a(arguments[2]);if(f&&!u)return h(t,e,i);if(t==i){
// w/o altered newTarget, optimization for 0-4 arguments
switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}
// w/o altered newTarget, lot of arguments case
var n=[null];return n.push.apply(n,e),new(l.apply(t,n))}
// with altered newTarget, not support built-in constructors
var c=i.prototype,d=r(s(c)?c:Object.prototype),p=Function.apply.call(t,d,e);return s(p)?p:d}})},/* 280 */
/***/
function(t,e,i){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var n=i(9),r=i(0),a=i(1),o=i(26);
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
r(r.S+r.F*i(4)(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(n.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,i){a(t),e=o(e,!0),a(i);try{return n.f(t,e,i),!0}catch(t){return!1}}})},/* 281 */
/***/
function(t,e,i){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var n=i(0),r=i(19).f,a=i(1);n(n.S,"Reflect",{deleteProperty:function(t,e){var i=r(a(t),e);return!(i&&!i.configurable)&&delete t[e]}})},/* 282 */
/***/
function(t,e,i){"use strict";
// 26.1.5 Reflect.enumerate(target)
var n=i(0),r=i(1),a=function(t){this._t=r(t),// target
this._i=0;// next index
var e,i=this._k=[];for(e in t)i.push(e)};i(85)(a,"Object",function(){var t,e=this,i=e._k;do{if(e._i>=i.length)return{value:void 0,done:!0}}while(!((t=i[e._i++])in e._t));return{value:t,done:!1}}),n(n.S,"Reflect",{enumerate:function(t){return new a(t)}})},/* 283 */
/***/
function(t,e,i){function n(t,e){var i,s,h=arguments.length<3?t:arguments[2];return l(t)===h?t[e]:(i=r.f(t,e))?o(i,"value")?i.value:void 0!==i.get?i.get.call(h):void 0:c(s=a(t))?n(s,e,h):void 0}
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var r=i(19),a=i(20),o=i(14),s=i(0),c=i(5),l=i(1);s(s.S,"Reflect",{get:n})},/* 284 */
/***/
function(t,e,i){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var n=i(19),r=i(0),a=i(1);r(r.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return n.f(a(t),e)}})},/* 285 */
/***/
function(t,e,i){
// 26.1.8 Reflect.getPrototypeOf(target)
var n=i(0),r=i(20),a=i(1);n(n.S,"Reflect",{getPrototypeOf:function(t){return r(a(t))}})},/* 286 */
/***/
function(t,e,i){
// 26.1.9 Reflect.has(target, propertyKey)
var n=i(0);n(n.S,"Reflect",{has:function(t,e){return e in t}})},/* 287 */
/***/
function(t,e,i){
// 26.1.10 Reflect.isExtensible(target)
var n=i(0),r=i(1),a=Object.isExtensible;n(n.S,"Reflect",{isExtensible:function(t){return r(t),!a||a(t)}})},/* 288 */
/***/
function(t,e,i){
// 26.1.11 Reflect.ownKeys(target)
var n=i(0);n(n.S,"Reflect",{ownKeys:i(130)})},/* 289 */
/***/
function(t,e,i){
// 26.1.12 Reflect.preventExtensions(target)
var n=i(0),r=i(1),a=Object.preventExtensions;n(n.S,"Reflect",{preventExtensions:function(t){r(t);try{return a&&a(t),!0}catch(t){return!1}}})},/* 290 */
/***/
function(t,e,i){function n(t,e,i){var c,f,d=arguments.length<4?t:arguments[3],p=a.f(h(t),e);if(!p){if(u(f=o(t)))return n(f,e,i,d);p=l(0)}return s(p,"value")?!(!1===p.writable||!u(d))&&(c=a.f(d,e)||l(0),c.value=i,r.f(d,e,c),!0):void 0!==p.set&&(p.set.call(d,i),!0)}
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var r=i(9),a=i(19),o=i(20),s=i(14),c=i(0),l=i(35),h=i(1),u=i(5);c(c.S,"Reflect",{set:n})},/* 291 */
/***/
function(t,e,i){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var n=i(0),r=i(77);r&&n(n.S,"Reflect",{setPrototypeOf:function(t,e){r.check(t,e);try{return r.set(t,e),!0}catch(t){return!1}}})},/* 292 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/Array.prototype.includes
var n=i(0),r=i(58)(!0);n(n.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(34)("includes")},/* 293 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var n=i(0),r=i(131),a=i(11),o=i(10),s=i(13),c=i(91);n(n.P,"Array",{flatMap:function(t){var e,i,n=a(this);return s(t),e=o(n.length),i=c(n,0),r(i,n,n,e,0,1,t,arguments[1]),i}}),i(34)("flatMap")},/* 294 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var n=i(0),r=i(131),a=i(11),o=i(10),s=i(28),c=i(91);n(n.P,"Array",{flatten:function(){var t=arguments[0],e=a(this),i=o(e.length),n=c(e,0);return r(n,e,e,i,0,void 0===t?1:s(t)),n}}),i(34)("flatten")},/* 295 */
/***/
function(t,e,i){"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var n=i(0),r=i(83)(!0);n(n.P,"String",{at:function(t){return r(this,t)}})},/* 296 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=i(0),r=i(132),a=i(98);
// https://github.com/zloirock/core-js/issues/280
n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(a),"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},/* 297 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=i(0),r=i(132),a=i(98);
// https://github.com/zloirock/core-js/issues/280
n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(a),"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},/* 298 */
/***/
function(t,e,i){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
i(48)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},/* 299 */
/***/
function(t,e,i){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
i(48)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},/* 300 */
/***/
function(t,e,i){"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var n=i(0),r=i(27),a=i(10),o=i(61),s=i(63),c=RegExp.prototype,l=function(t,e){this._r=t,this._s=e};i(85)(l,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),n(n.P,"String",{matchAll:function(t){if(r(this),!o(t))throw TypeError(t+" is not a regexp!");var e=String(this),i="flags"in c?String(t.flags):s.call(t),n=new RegExp(t.source,~i.indexOf("g")?i:"g"+i);return n.lastIndex=a(t.lastIndex),new l(n,e)}})},/* 301 */
/***/
function(t,e,i){i(73)("asyncIterator")},/* 302 */
/***/
function(t,e,i){i(73)("observable")},/* 303 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var n=i(0),r=i(130),a=i(18),o=i(19),s=i(89);n(n.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,i,n=a(t),c=o.f,l=r(n),h={},u=0;l.length>u;)void 0!==(i=c(n,e=l[u++]))&&s(h,e,i);return h}})},/* 304 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-values-entries
var n=i(0),r=i(133)(!1);n(n.S,"Object",{values:function(t){return r(t)}})},/* 305 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-object-values-entries
var n=i(0),r=i(133)(!0);n(n.S,"Object",{entries:function(t){return r(t)}})},/* 306 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(11),a=i(13),o=i(9);
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
i(8)&&n(n.P+i(68),"Object",{__defineGetter__:function(t,e){o.f(r(this),t,{get:a(e),enumerable:!0,configurable:!0})}})},/* 307 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(11),a=i(13),o=i(9);
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
i(8)&&n(n.P+i(68),"Object",{__defineSetter__:function(t,e){o.f(r(this),t,{set:a(e),enumerable:!0,configurable:!0})}})},/* 308 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(11),a=i(26),o=i(20),s=i(19).f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
i(8)&&n(n.P+i(68),"Object",{__lookupGetter__:function(t){var e,i=r(this),n=a(t,!0);do{if(e=s(i,n))return e.get}while(i=o(i))}})},/* 309 */
/***/
function(t,e,i){"use strict";var n=i(0),r=i(11),a=i(26),o=i(20),s=i(19).f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
i(8)&&n(n.P+i(68),"Object",{__lookupSetter__:function(t){var e,i=r(this),n=a(t,!0);do{if(e=s(i,n))return e.set}while(i=o(i))}})},/* 310 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=i(0);n(n.P+n.R,"Map",{toJSON:i(134)("Map")})},/* 311 */
/***/
function(t,e,i){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=i(0);n(n.P+n.R,"Set",{toJSON:i(134)("Set")})},/* 312 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
i(69)("Map")},/* 313 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
i(69)("Set")},/* 314 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
i(69)("WeakMap")},/* 315 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
i(69)("WeakSet")},/* 316 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
i(70)("Map")},/* 317 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
i(70)("Set")},/* 318 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
i(70)("WeakMap")},/* 319 */
/***/
function(t,e,i){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
i(70)("WeakSet")},/* 320 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-global
var n=i(0);n(n.G,{global:i(2)})},/* 321 */
/***/
function(t,e,i){
// https://github.com/tc39/proposal-global
var n=i(0);n(n.S,"System",{global:i(2)})},/* 322 */
/***/
function(t,e,i){
// https://github.com/ljharb/proposal-is-error
var n=i(0),r=i(22);n(n.S,"Error",{isError:function(t){return"Error"===r(t)}})},/* 323 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{clamp:function(t,e,i){return Math.min(i,Math.max(e,t))}})},/* 324 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{DEG_PER_RAD:Math.PI/180})},/* 325 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0),r=180/Math.PI;n(n.S,"Math",{degrees:function(t){return t*r}})},/* 326 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0),r=i(136),a=i(116);n(n.S,"Math",{fscale:function(t,e,i,n,o){return a(r(t,e,i,n,o))}})},/* 327 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{iaddh:function(t,e,i,n){var r=t>>>0,a=e>>>0,o=i>>>0;return a+(n>>>0)+((r&o|(r|o)&~(r+o>>>0))>>>31)|0}})},/* 328 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{isubh:function(t,e,i,n){var r=t>>>0,a=e>>>0,o=i>>>0;return a-(n>>>0)-((~r&o|~(r^o)&r-o>>>0)>>>31)|0}})},/* 329 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{imulh:function(t,e){var i=+t,n=+e,r=65535&i,a=65535&n,o=i>>16,s=n>>16,c=(o*a>>>0)+(r*a>>>16);return o*s+(c>>16)+((r*s>>>0)+(65535&c)>>16)}})},/* 330 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{RAD_PER_DEG:180/Math.PI})},/* 331 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0),r=Math.PI/180;n(n.S,"Math",{radians:function(t){return t*r}})},/* 332 */
/***/
function(t,e,i){
// https://rwaldron.github.io/proposal-math-extensions/
var n=i(0);n(n.S,"Math",{scale:i(136)})},/* 333 */
/***/
function(t,e,i){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=i(0);n(n.S,"Math",{umulh:function(t,e){var i=+t,n=+e,r=65535&i,a=65535&n,o=i>>>16,s=n>>>16,c=(o*a>>>0)+(r*a>>>16);return o*s+(c>>>16)+((r*s>>>0)+(65535&c)>>>16)}})},/* 334 */
/***/
function(t,e,i){
// http://jfbastien.github.io/papers/Math.signbit.html
var n=i(0);n(n.S,"Math",{signbit:function(t){
// eslint-disable-next-line no-self-compare
return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},/* 335 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-promise-finally
var n=i(0),r=i(25),a=i(2),o=i(65),s=i(123);n(n.P+n.R,"Promise",{finally:function(t){var e=o(this,r.Promise||a.Promise),i="function"==typeof t;return this.then(i?function(i){return s(e,t()).then(function(){return i})}:t,i?function(i){return s(e,t()).then(function(){throw i})}:t)}})},/* 336 */
/***/
function(t,e,i){"use strict";
// https://github.com/tc39/proposal-promise-try
var n=i(0),r=i(96),a=i(122);n(n.S,"Promise",{try:function(t){var e=r.f(this),i=a(t);return(i.e?e.reject:e.resolve)(i.v),e.promise}})},/* 337 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=n.key,o=n.set;n.exp({defineMetadata:function(t,e,i,n){o(t,e,r(i),a(n))}})},/* 338 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=n.key,o=n.map,s=n.store;n.exp({deleteMetadata:function(t,e){var i=arguments.length<3?void 0:a(arguments[2]),n=o(r(e),i,!1);if(void 0===n||!n.delete(t))return!1;if(n.size)return!0;var c=s.get(e);return c.delete(i),!!c.size||s.delete(e)}})},/* 339 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=i(20),o=n.has,s=n.get,c=n.key,l=function(t,e,i){if(o(t,e,i))return s(t,e,i);var n=a(e);return null!==n?l(t,n,i):void 0};n.exp({getMetadata:function(t,e){return l(t,r(e),arguments.length<3?void 0:c(arguments[2]))}})},/* 340 */
/***/
function(t,e,i){var n=i(126),r=i(135),a=i(32),o=i(1),s=i(20),c=a.keys,l=a.key,h=function(t,e){var i=c(t,e),a=s(t);if(null===a)return i;var o=h(a,e);return o.length?i.length?r(new n(i.concat(o))):o:i};a.exp({getMetadataKeys:function(t){return h(o(t),arguments.length<2?void 0:l(arguments[1]))}})},/* 341 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=n.get,o=n.key;n.exp({getOwnMetadata:function(t,e){return a(t,r(e),arguments.length<3?void 0:o(arguments[2]))}})},/* 342 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=n.keys,o=n.key;n.exp({getOwnMetadataKeys:function(t){return a(r(t),arguments.length<2?void 0:o(arguments[1]))}})},/* 343 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=i(20),o=n.has,s=n.key,c=function(t,e,i){if(o(t,e,i))return!0;var n=a(e);return null!==n&&c(t,n,i)};n.exp({hasMetadata:function(t,e){return c(t,r(e),arguments.length<3?void 0:s(arguments[2]))}})},/* 344 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=n.has,o=n.key;n.exp({hasOwnMetadata:function(t,e){return a(t,r(e),arguments.length<3?void 0:o(arguments[2]))}})},/* 345 */
/***/
function(t,e,i){var n=i(32),r=i(1),a=i(13),o=n.key,s=n.set;n.exp({metadata:function(t,e){return function(i,n){s(t,e,(void 0!==n?r:a)(i),o(n))}}})},/* 346 */
/***/
function(t,e,i){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var n=i(0),r=i(95)(),a=i(2).process,o="process"==i(22)(a);n(n.G,{asap:function(t){var e=o&&a.domain;r(e?e.bind(t):t)}})},/* 347 */
/***/
function(t,e,i){"use strict";
// https://github.com/zenparsing/es-observable
var n=i(0),r=i(2),a=i(25),o=i(95)(),s=i(7)("observable"),c=i(13),l=i(1),h=i(43),u=i(45),f=i(15),d=i(44),p=d.RETURN,m=function(t){return null==t?void 0:c(t)},y=function(t){var e=t._c;e&&(t._c=void 0,e())},g=function(t){return void 0===t._o},v=function(t){g(t)||(t._o=void 0,y(t))},b=function(t,e){l(t),this._c=void 0,this._o=t,t=new P(this);try{var i=e(t),n=i;null!=i&&("function"==typeof i.unsubscribe?i=function(){n.unsubscribe()}:c(i),this._c=i)}catch(e){return void t.error(e)}g(this)&&y(this)};b.prototype=u({},{unsubscribe:function(){v(this)}});var P=function(t){this._s=t};P.prototype=u({},{next:function(t){var e=this._s;if(!g(e)){var i=e._o;try{var n=m(i.next);if(n)return n.call(i,t)}catch(t){try{v(e)}finally{throw t}}}},error:function(t){var e=this._s;if(g(e))throw t;var i=e._o;e._o=void 0;try{var n=m(i.error);if(!n)throw t;t=n.call(i,t)}catch(t){try{y(e)}finally{throw t}}return y(e),t},complete:function(t){var e=this._s;if(!g(e)){var i=e._o;e._o=void 0;try{var n=m(i.complete);t=n?n.call(i,t):void 0}catch(t){try{y(e)}finally{throw t}}return y(e),t}}});var w=function(t){h(this,w,"Observable","_f")._f=c(t)};u(w.prototype,{subscribe:function(t){return new b(t,this._f)},forEach:function(t){var e=this;return new(a.Promise||r.Promise)(function(i,n){c(t);var r=e.subscribe({next:function(e){try{return t(e)}catch(t){n(t),r.unsubscribe()}},error:n,complete:i})})}}),u(w,{from:function(t){var e="function"==typeof this?this:w,i=m(l(t)[s]);if(i){var n=l(i.call(t));return n.constructor===e?n:new e(function(t){return n.subscribe(t)})}return new e(function(e){var i=!1;return o(function(){if(!i){try{if(d(t,!1,function(t){if(e.next(t),i)return p})===p)return}catch(t){if(i)throw t;return void e.error(t)}e.complete()}}),function(){i=!0}})},of:function(){for(var t=0,e=arguments.length,i=new Array(e);t<e;)i[t]=arguments[t++];return new("function"==typeof this?this:w)(function(t){var e=!1;return o(function(){if(!e){for(var n=0;n<i.length;++n)if(t.next(i[n]),e)return;t.complete()}}),function(){e=!0}})}}),f(w.prototype,s,function(){return this}),n(n.G,{Observable:w}),i(42)("Observable")},/* 348 */
/***/
function(t,e,i){
// ie9- setTimeout & setInterval additional parameters fix
var n=i(2),r=i(0),a=i(98),o=[].slice,s=/MSIE .\./.test(a),c=function(t){return function(e,i){var n=arguments.length>2,r=!!n&&o.call(arguments,2);return t(n?function(){
// eslint-disable-next-line no-new-func
("function"==typeof e?e:Function(e)).apply(this,r)}:e,i)}};r(r.G+r.B+r.F*s,{setTimeout:c(n.setTimeout),setInterval:c(n.setInterval)})},/* 349 */
/***/
function(t,e,i){var n=i(0),r=i(94);n(n.G+n.B,{setImmediate:r.set,clearImmediate:r.clear})},/* 350 */
/***/
function(t,e,i){for(var n=i(93),r=i(38),a=i(16),o=i(2),s=i(15),c=i(49),l=i(7),h=l("iterator"),u=l("toStringTag"),f=c.Array,d={CSSRuleList:!0,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,// TODO: Not spec compliant, should be false.
MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,// TODO: Not spec compliant, should be false.
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(d),m=0;m<p.length;m++){var y,g=p[m],v=d[g],b=o[g],P=b&&b.prototype;if(P&&(P[h]||s(P,h,f),P[u]||s(P,u,g),c[g]=f,v))for(y in n)P[y]||a(P,y,n[y],!0)}},/* 351 */
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
var a=e&&e.prototype instanceof r?e:r,o=Object.create(a.prototype),s=new d(n||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return o._invoke=l(t,i,s),o}
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
function r(){}function a(){}function o(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function i(e,r,a,o){var s=n(t[e],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&v.call(l,"__await")?Promise.resolve(l.__await).then(function(t){i("next",t,a,o)},function(t){i("throw",t,a,o)}):Promise.resolve(l).then(function(t){
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
c.value=t,a(c)},o)}o(s.arg)}function r(t,e){function n(){return new Promise(function(n,r){i(t,e,n,r)})}
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
this._invoke=r}function l(t,e,i){var r=k;return function(a,o){if(r===O)throw new Error("Generator is already running");if(r===E){if("throw"===a)throw o;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return m()}for(i.method=a,i.arg=o;;){var s=i.delegate;if(s){var c=h(s,i);if(c){if(c===M)continue;return c}}if("next"===i.method)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===k)throw r=E,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=O;var l=n(t,e,i);if("normal"===l.type){if(
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
r=i.done?E:T,l.arg===M)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(r=E,
// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
i.method="throw",i.arg=l.arg)}}}
// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function h(t,e){var i=t.iterator[e.method];if(i===y){if(
// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
e.delegate=null,"throw"===e.method){if(t.iterator.return&&(
// If the delegate iterator has a return method, give it a
// chance to clean up.
e.method="return",e.arg=y,h(t,e),"throw"===e.method))
// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return M;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return M}var r=n(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,M;var a=r.arg;
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
return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,M):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,M)}function u(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(u,this),this.reset(!0)}function p(t){if(t){var e=t[P];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,n=function e(){for(;++i<t.length;)if(v.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=y,e.done=!0,e};return n.next=n}}
// Return an iterator with no values.
return{next:m}}function m(){return{value:y,done:!0}}var y,g=Object.prototype,v=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},P=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",x=b.toStringTag||"@@toStringTag",S="object"==typeof t,_=e.regeneratorRuntime;if(_)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(S&&(t.exports=_));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
_=e.regeneratorRuntime=S?t.exports:{},_.wrap=i;var k="suspendedStart",T="suspendedYield",O="executing",E="completed",M={},A={};A[P]=function(){return this};var D=Object.getPrototypeOf,B=D&&D(D(p([])));B&&B!==g&&v.call(B,P)&&(
// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
A=B);var C=o.prototype=r.prototype=Object.create(A);a.prototype=C.constructor=o,o.constructor=a,o[x]=a.displayName="GeneratorFunction",_.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},_.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,o):(t.__proto__=o,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(C),t},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
_.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[w]=function(){return this},_.AsyncIterator=c,
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
_.async=function(t,e,n,r){var a=new c(i(t,e,n,r));return _.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
s(C),C[x]="Generator",
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
C[P]=function(){return this},C.toString=function(){return"[object Generator]"},_.keys=function(t){var e=[];for(var i in t)e.push(i);
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
return e("end");if(r.tryLoc<=this.prev){var o=v.call(r,"catchLoc"),s=v.call(r,"finallyLoc");if(o&&s){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&v.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,M):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),M},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),f(i),M}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;f(i)}return r}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:p(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=y),M}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,i(53))},/* 352 */
/***/
function(t,e,i){i(353),t.exports=i(25).RegExp.escape},/* 353 */
/***/
function(t,e,i){
// https://github.com/benjamingr/RexExp.escape
var n=i(0),r=i(354)(/[\\^$*+?.()|[\]{}]/g,"\\$&");n(n.S,"RegExp",{escape:function(t){return r(t)}})},/* 354 */
/***/
function(t,e){t.exports=function(t,e){var i=e===Object(e)?function(t){return e[t]}:e;return function(e){return String(e).replace(t,i)}}},/* 355 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i(137),i(138);var s=i(6),c=n(s),l=i(360),h=n(l),u=i(361),f=n(u),d=i(362),p=n(d),m=i(365),y=n(m),g=i(24),v=n(g);i(400),i(402);var b=function(t){function e(){if(r(this,e),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"))var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,480,280,c.default.CANVAS,!0,!1,!0));else var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,v.default.phaserConfig));
// with Cordova with need to wait that the device is ready so we will call the Boot state in another file
return t.state.add("Boot",h.default,!1),t.state.add("Preload",p.default,!1),t.state.add("MainMenu",f.default,!1),t.state.add("Game",y.default,!1),window.cordova||t.state.start("Boot"),a(t)}return o(e,t),e}(c.default.Game);if(window.game=new b,window.cordova){({initialize:function(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)},
// deviceready Event Handler
onDeviceReady:function(){this.receivedEvent("deviceready"),
// When the device is ready, start Phaser Boot state.
window.game.state.start("Boot")},receivedEvent:function(t){console.log("Received Event: "+t)}}).initialize()}},/* 356 */
,/* 357 */
,/* 358 */
,/* 359 */
,/* 360 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(6),c=function(t){return t&&t.__esModule?t:{default:t}}(s);i(99);var l=function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),o(e,[{key:"init",value:function(){
// Boot Log
console.log("%c Boot it up! ","background: #0061ff; color: #bada55")}},{key:"create",value:function(){
// Game Scaling
this.scale.fullScreenScaleMode=c.default.ScaleManager.SHOW_ALL,this.scale.scaleMode=c.default.ScaleManager.SHOW_ALL,this.game.scale.pageAlignVertically=!0,this.game.scale.pageAlignHorizontally=!0,
// enable crisp rendering
this.game.renderer.renderSession.roundPixels=!0,this.game.time.advancedTiming=!0,c.default.Canvas.setImageRenderingCrisp(this.game.canvas),
// Add Tilemap Plus Plugin
this.game.plugins.add(c.default.Plugin.TilemapPlus),
// Start Physics
this.game.physics.startSystem(c.default.Physics.ARCADE),
// Init Gamepads
this.input.gamepad.start(),
// Enable Pixel Rendering
this.stage.smoothed=!1,
// this.game.forceSingleRender = true;
// this.game.time.desiredFps = 60;
// Start the Preload State
this.state.start("Preload")}},{key:"preload",value:function(){}}]),e}(c.default.State);e.default=l},/* 361 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(6),c=function(t){return t&&t.__esModule?t:{default:t}}(s),l=function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),o(e,[{key:"init",value:function(){}},{key:"create",value:function(){this.game.camera.flash(0,5e3),this.game.soundManager.initSound("AtmoWindRain"),this.menuText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2,"pxlfont","PROPHECY",51),this.menuText.anchor.set(.5),this.subText=this.game.add.bitmapText(this.game.camera.width/2,this.game.camera.height/2+80,"pxlfont","Click To Move On",10),this.subText.anchor.set(.5);var t=this.game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-30,t.makeParticles("rain"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(200,310),t.setXSpeed(-5,5),t.minRotation=180,t.maxRotation=0,t.gravity=200,t.start(!1,2500,1,0),this.autumnGlimmerEmitter=this.game.add.emitter(-500,0,150),this.autumnGlimmerEmitter.fixedToCamera=!0,this.autumnGlimmerEmitter.width=this.game.world.bounds.width,this.autumnGlimmerEmitter.height=this.game.world.bounds.height,this.autumnGlimmerEmitter.minParticleScale=.1,this.autumnGlimmerEmitter.maxParticleScale=.5,this.autumnGlimmerEmitter.setScale(-2,2,1,1,3e3,c.default.Easing.Sinusoidal.InOut,!0),this.autumnGlimmerEmitter.setYSpeed(300),this.autumnGlimmerEmitter.setXSpeed(-300,300),this.autumnGlimmerEmitter.minParticleScale=.25,this.autumnGlimmerEmitter.maxParticleScale=1,this.autumnGlimmerEmitter.gravity=.5,this.autumnGlimmerEmitter.minRotation=25,this.autumnGlimmerEmitter.setAlpha(.5,1),this.autumnGlimmerEmitter.makeParticles("glimmerParticle"),this.autumnGlimmerEmitter.start(!1,5e3,5,0),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")||(this.input.onDown.add(this.toggleFullScreen,this),this.input.onTap.add(this.toggleFullScreen,this,null,"onTap")),this.input.onDown.add(function(){var t=this;this.game.camera.fade(0,4e3,!0),this.game.add.tween(this.subText).to({alpha:0},2e3,c.default.Easing.Back.Out,!0),this.game.time.events.add(6*c.default.Timer.SECOND,function(){t.state.start("Game",!0,!1)})},this)}},{key:"preload",value:function(){}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(c.default.State);e.default=l},/* 362 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(6),l=n(c),h=i(139),u=(n(h),i(140)),f=(n(u),i(363)),d=n(f),p=i(364),m=n(p),y=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),s(e,[{key:"init",value:function(){}},{key:"preload",value:function(){
// this.stage.backgroundColor = "#000000";
// this.text = this.game.add.bitmapText(300, 300, 'pxlfont', '', 51);
// this.text.anchor.set(0.5);
// this.text.tint = 0xFFFFFF;
// this.text.text = 'Loading';
// this.text.scale.set(0.26);
// Load Sprites
//this.load.image('player', 'assets/sprites/player.png');
// this.load.image('tileSpriteClouds', 'assets/sprites/tilespriteClouds3xblur.png');
this.load.image("LockGameRing","assets/sprites/LockGameRing.png"),this.load.image("LockGameBar","assets/sprites/LockGameBar.png"),this.load.image("LockGameBall","assets/sprites/LockGameBall.png"),
// Load Maps
this.load.tilemap("map1","assets/maps/map1.json",null,l.default.Tilemap.TILED_JSON),this.load.tilemap("map2","assets/maps/map2.json",null,l.default.Tilemap.TILED_JSON),this.load.tilemap("map3","assets/maps/map3.json",null,l.default.Tilemap.TILED_JSON),this.load.tilemap("map4","assets/maps/map4.json",null,l.default.Tilemap.TILED_JSON),this.load.tilemap("map5","assets/maps/map5.json",null,l.default.Tilemap.TILED_JSON),this.load.tilemap("map6","assets/maps/map6.json",null,l.default.Tilemap.TILED_JSON),
// Load Music
this.load.audio("LostMerged","assets/music/LostMerged.mp3"),
// Load Sounds
this.load.audio("AtmoWindRain","assets/sounds/AtmoWindRain.mp3"),
// this.load.audio('AtmoWaterStill', 'assets/sounds/AtmoWaterStill.mp3');
this.load.audio("ThunderNear1","assets/sounds/ThunderNear1.mp3"),this.load.audio("ThunderNear2","assets/sounds/ThunderNear2.mp3"),this.load.audio("ThunderNear3","assets/sounds/ThunderNear3.mp3"),this.load.audio("ThunderNear4","assets/sounds/ThunderNear4.mp3"),this.load.audio("ThunderNear5","assets/sounds/ThunderNear5.mp3"),
// Load Spritesheets
// this.load.spritesheet('player', 'assets/sprites/player.png', 46, 46);
this.load.spritesheet("player","assets/sprites/player.png",42,42),this.load.spritesheet("testman","assets/sprites/testman.png",46,46),this.load.spritesheet("priest","assets/sprites/priest.png",41,41),this.load.spritesheet("enemy","assets/sprites/enemy.png",18,18),this.load.spritesheet("item","assets/sprites/testitem.png",25,27),this.load.spritesheet("templeDoor","assets/sprites/templeDoor.png",72,108),
// Load Tilesets
this.load.image("gameTileset2","assets/tilesets/testtileset.png"),this.load.image("Clouds","assets/tilesets/Clouds.png"),
// Load Videos
// Load Mobile Controll
this.load.atlas("dpad","assets/input/dpad.png","assets/input/dpad.json"),this.load.atlas("generic","assets/input/generic-joystick.png","assets/input/generic-joystick.json"),
// Load Weather Sprites
this.load.image("rain","assets/sprites/rain.png"),this.load.image("snow","assets/sprites/snow.png"),this.load.image("fly","assets/sprites/fly.png"),this.load.image("glimmerParticle","assets/sprites/glimmerParticle.png"),this.load.image("leave","assets/sprites/leave.png"),this.load.image("cloud","assets/sprites/cloud.png"),
// Load Fonts
// this.load.bitmapFont('pxlfont', 'assets/fonts/font.png', 'assets/fonts/font.xml');
this.load.bitmapFont("pxlfont","assets/fonts/prophecy.png","assets/fonts/prophecy.fnt")}},{key:"create",value:function(){this.game.musicPlayer=new d.default(this.game),this.game.soundManager=new m.default(this.game),this.state.start("MainMenu",!0,!1)}},{key:"render",value:function(){}},{key:"loadUpdate",value:function(){
// Log Loadingprogress
this.loadingprogress=this.load.onFileComplete.add(function(t){
// this.text.text = progress;
console.log("%c Loadingprogress: "+t+" % ","background: #222; color: #bada55")})}}]),e}(l.default.State);e.default=y},/* 363 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(6),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(){function t(e){n(this,t),this.game=e,this.fadeDuration=2e3,this.globalVolume=0,this.fadeVolumeTo=.1,this.fadeDuration=3e3,
// this.music = this.game.add.audio('track1', this.globalVolume, true);
this.initMap()}return r(t,[{key:"initMap",value:function(t){var e=this;
// If Key is not undefined
if(void 0!==t)
// If Key is not a empty string
if(console.log("MusicKey is not undefined!"),""!==t)
// If music is currently playing
if(console.log(t),console.log(this.music),console.log("MusicKey is not a empty string!"),void 0!==this.music&&this.music.isPlaying){if(console.log(this.music.key,t),void 0!==this.music&&this.music.key==t)return void console.log("LET THE MUSIC CONTINUE OO");console.log("THIS SHOULD NOT FOLLOW IN LET THE MUSIC CON"),
// Fade it out
this.music.fadeOut(this.fadeDuration),
// Wait
this.game.time.events.add(o.default.Timer.SECOND*(this.fadeDuration/1e3),function(){
// Check if music is in cache
e.checkCache(t)?(
// Play music from cache
e.music=e.game.add.audio(t,e.globalVolume,!0),e.music.onDecoded.add(function(){e.music.play(),e.game.add.tween(e.music).to({volume:e.fadeVolumeTo},e.fadeDuration,o.default.Easing.Linear.None,!0)},e)):
// Load music and play it
e.loadMusic(t)})}else{if(void 0!==this.music&&this.music.key==t)return console.log(this.music.key,t),void console.log("LET THE MUSIC CONTINUE");console.log("INIT MUSIC"),
// Initalize music
// Check if music is in cache
this.checkCache(t)?(
// Play music from cache
this.music=this.game.add.audio(t,this.globalVolume,!0),this.music.onDecoded.add(function(){e.music.play(),e.game.add.tween(e.music).to({volume:e.fadeVolumeTo},e.fadeDuration,o.default.Easing.Linear.None,!0)},this)):
// Load music and play it
this.loadMusic(t)}else
// If no music is defined -> Fade out!
console.log("Empty String -> Fade out!"),console.log(t),this.music&&this.music.isPlaying&&(this.music.fadeOut(this.fadeDuration),this.game.time.events.add(o.default.Timer.SECOND*(this.fadeDuration/1e3),function(){console.log("DESTROY"),e.music.destroy(),e.music=void 0}));else console.warn("MusicKey undefined")}},{key:"checkCache",value:function(t){return!!this.game.cache.checkSoundKey(t)}},{key:"loadMusic",value:function(t){var e=this;this.game.load.audio(t,"assets/music/"+t+".mp3"),this.game.load.start(),this.game.load.onLoadStart.add(function(){},this),this.game.load.onLoadComplete.add(function(){e.music=e.game.add.audio(t,e.globalVolume,!0),e.music.onDecoded.add(function(){
// this.music.fadeIn(this.fadeDuration, true);
e.music.play(),e.game.add.tween(e.music).to({volume:e.fadeVolumeTo},e.fadeDuration,o.default.Easing.Linear.None,!0)},e)},this)}}]),t}();e.default=s},/* 364 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(6),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(){function t(e){n(this,t),this.game=e,this.fadeDuration=2e3,this.globalVolume=0,this.fadeVolumeTo=1,this.fadeDuration=2e3}return r(t,[{key:"initSound",value:function(t){var e=this;
// If Key is not undefined
void 0!==t?(console.log("SoundKey is not undefined!"),
// If Key is not a empty string
""!==t?(console.log("SoundKey is not a empty string!"),
// If Sound is currently playing
this.sound&&this.sound.isPlaying&&this.sound.key!==t?(
// Fade it out
this.sound.fadeOut(this.fadeDuration),
// Wait
this.game.time.events.add(o.default.Timer.SECOND*(this.fadeDuration/1e3),function(){
// Check if sound is in cache
e.checkCache(t)?(
// Play sound from cache
e.sound=e.game.add.audio(t,e.globalVolume,!0),e.sound.onDecoded.add(function(){e.sound.play(),e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,o.default.Easing.Linear.None,!0)},e)):
// Load Sound and play it
e.loadSound(t)})):
// Initalize Sound
// Check if sound is in cache
this.checkCache(t)?(
// Play sound from cache
this.sound=this.game.add.audio(t,this.globalVolume,!0),this.sound.onDecoded.add(function(){e.sound.play(),e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,o.default.Easing.Linear.None,!0)},this)):
// Load Sound and play it
this.loadSound(t)):(
// If no sound is defined -> Fade out!
console.log("Empty String -> Fade out!"),this.sound&&this.sound.isPlaying&&this.sound.fadeOut(this.fadeDuration))):console.warn("SoundKey undefined")}},{key:"checkCache",value:function(t){return!!this.game.cache.checkSoundKey(t)}},{key:"loadSound",value:function(t){var e=this;this.game.load.audio(t,"assets/sounds/"+t+".mp3"),this.game.load.start(),this.game.load.onLoadStart.add(function(){},this),this.game.load.onLoadComplete.add(function(){e.sound=e.game.add.audio(t,e.globalVolume,!0),e.sound.onDecoded.add(function(){e.sound.play(),e.game.add.tween(e.sound).to({volume:e.fadeVolumeTo},e.fadeDuration,o.default.Easing.Linear.None,!0)},e)},this)}}]),t}();e.default=s},/* 365 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(6),l=n(c),h=i(366),u=n(h),f=i(397),d=n(f),p=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),s(e,[{key:"init",value:function(t){this.instruction=void 0!=t&&t,console.log("%c GameState ","background: #0061ff; color: #bada55")}},{key:"create",value:function(){navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")||(this.input.onDown.add(this.toggleFullScreen,this),this.input.onTap.add(this.toggleFullScreen,this,null,"onTap")),
// Set GUIClass
this.GUI=new d.default(this.game),this.level=new u.default(this.game,this.GUI,this.instruction)}},{key:"update",value:function(){this.level.update()}},{key:"render",value:function(){}},{key:"toggleFullScreen",value:function(){this.game.scale.startFullScreen(!1,!1)}}]),e}(l.default.State);e.default=p},/* 366 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6);n(o);i(99);var s=i(144),c=(n(s),i(141)),l=n(c),h=i(145),u=n(h),f=i(367),d=n(f),p=i(100),m=(n(p),i(368)),y=n(m),g=i(146),v=(n(g),i(140)),b=n(v),P=i(143),w=(n(P),i(142)),x=n(w),S=i(147),_=n(S),k=i(393),T=n(k),O=i(395),E=n(O),M=i(396),A=n(M),D=i(24),B=n(D),C=function(){function t(e,i,n){r(this,t),this.game=e,this.GUICLASS=i,this.safe=new _.default(this.game),this.gameData=this.safe.getGameConfig(),this.currentMap=this.gameData.currentMap,this.restartType=n.restartType,this.questManager=new E.default(this.game,this),
// Arrays
this.characters=[],this.items=[],this.playedDialogues=this.safe.getPlayedDialogues(),this.activatedBridges=[],this.itemIDs=this.safe.getItemIDs(),this.enemies=[],
// Accesspoints
this.startPoint={},this.customStartPoints=[],this.defaultStartPoint={},
// Vars
this.dayCycle=!1,
// Method
this.loadLevel()}return a(t,[{key:"loadLevel",value:function(){
// Choose Start Points
if(
// Load Map
this.initMap(),this.game.musicPlayer.initMap(this.tilemapProperties.music),this.game.soundManager.initSound(this.tilemapProperties.athmoSound),"map1"==this.gameData.currentMap&&100==this.gameData.playerHealth?this.game.camera.flash(0,8e3,!0):this.game.camera.flash(0,2e3),
// Load Entry Points
this.loadEntryPoints(),void 0==this.gameData.targetID)this.startPoint.x=this.defaultStartPoint.x,this.startPoint.y=this.defaultStartPoint.y;else for(var t=0;t<this.customStartPoints.length;t++)this.customStartPoints[t].id==this.gameData.targetID&&(this.lastTargetID=this.gameData.targetID,this.startPoint.x=this.customStartPoints[t].x,this.startPoint.y=this.customStartPoints[t].y);
// Create Player
this.player=new l.default(this.game,this.startPoint.x,this.startPoint.y,this),
// Customizations
"map3"==this.currentMap&&(this.door=this.game.add.sprite(864,792,"templeDoor"),this.door.animations.add("open",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],8,!0),this.door.animations.add("idle",[17],1,!0)),
// Set Player inside GUIClass
this.GUICLASS.setLevel(this),
// Load Items
this.loadItems(),
// Load Enemies
B.default.enemies&&this.loadEnemies(),
// Load GamePeople
this.loadPeople(),
// EventManager
this.eventManager=new T.default(this.game,this),
// Create Weather
this.weather=new y.default(this.game,this.tilemapProperties.weather,this,this.backgroundLayer),
// Daycycle Class
this.dayCycleClass=new A.default(this.game,this),
// Saving Notification
this.GUICLASS.createNotification("saving","Saving ..."),
// Init InputClass
this.inputClass=new b.default(this.game,this)}},{key:"loadEntryPoints",value:function(){
// Find and map startpoints
this.findObjectsByType("startPointType",this.map,"EntryPoints").forEach(function(t){
// Find Custom Startpoints
if(
// Find Default Startpoint
"default"==t.properties.startPointType&&(this.defaultStartPoint={x:t.x,y:t.y}),"custom"==t.properties.startPointType){var e=[];e.id=t.properties.id,e.x=t.x,e.y=t.y,this.customStartPoints.push(e)}},this)}},{key:"loadPeople",value:function(){
// Find specific people
this.findObjectsByType("id",this.map,"People").forEach(function(t){this.characters.push(new d.default(this.game,t,this.player))},this)}},{key:"loadItems",value:function(){
// Find specific items
this.findObjectsByType("type",this.map,"Items").forEach(function(t){this.itemIDs.includes(t.properties.id)||"key"==t.properties.type&&this.items.push(new x.default(this.game,t.x,t.y,"item",t.properties))},this)}},{key:"loadEnemies",value:function(){
// Find specific enemy
this.findObjectsByType("type",this.map,"Enemies").forEach(function(t){var e=t.properties.killQuestID;void 0===e||this.questManager.checkIfQuestWasDone(e)||"seed"==t.properties.type&&this.enemies.push(new u.default(this.game,t.x,t.y,this.player,this.map,this.groundLayer,t.properties))},this)}},{key:"findObjectsByType",value:function(t,e,i){var n=[];return e.objects[i].forEach(function(i){var r=Object.keys(i.properties);(r.indexOf(t)||r.toString()==t)&&(i.y-=e.tileHeight/2,i.x+=e.tileHeight/2,n.push(i))},this),n}},{key:"update",value:function(){
// Update InputClass
this.inputClass.update(),
// If Pathfinder == true -> follow path
this.pathfinder&&this.pathfinder.followPath(),
// Collisionhandler
this.game.physics.arcade.collide(this.enemies,this.enemies),
// this.game.physics.arcade.collide(this.enemies, this.player);
this.game.physics.arcade.collide(this.enemies,this.player,this.player.getDamage,null,this),this.game.physics.arcade.collide(this.enemies,this.collisionLayer),this.game.physics.arcade.collide(this.characters,this.player),this.game.physics.arcade.collide(this.player,this.collisionLayer),this.game.physics.arcade.collide(this.player,this.items,this.player.collideWithItem,null,this),this.game.world.bringToTop(this.player),this.game.world.bringToTop(this.foregroundLayer),
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
this.GUICLASS.update()}},{key:"initMap",value:function(){console.log("LoadMap: "+this.gameData.currentMap),this.map=this.game.add.tilemap(this.gameData.currentMap),
// Background Cloud Layer
this.backgroundTileset=this.map.addTilesetImage("Clouds","Clouds"),this.backgroundLayer=this.map.createLayer("Clouds"),this.backgroundLayer.scrollFactorX=this.backgroundLayer.scrollFactorY=.5,
//  Connect with Tileset
this.map.addTilesetImage("Tileset","gameTileset2",36,36),
//  Define Layers
this.groundLayer=this.map.createLayer("BackgroundLayer"),this.collisionLayer=this.map.createLayer("CollisionLayer"),this.foregroundLayer=this.map.createLayer("ForegroundLayer"),
//  Resize the world
this.groundLayer.resizeWorld(),this.foregroundLayer.resizeWorld(),
// Set Collision Tiles
this.map.setCollisionBetween(0,20,!0,"CollisionLayer"),
// Get Map Properties
this.tilemapProperties=this.map.plus.properties,
// Get Properties for Nightmode
this.dayCycle=this.tilemapProperties.dayCycle,
// Enable Tile Animations
this.map.plus.animation.enable()}}]),t}();e.default=C},/* 367 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i(6),l=n(c),h=i(24),u=(n(h),function(t){function e(t,i,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i.x,i.y,i.properties.character));return o.game=t,o.id=i.properties.id,o.player=n,o.health=100,o.randomMovement=!0,o.anchor.setTo(.5),o.game.physics.enable(o),o.body.setSize(10,15,18,20),o.body.immovable=!0,o.body.drag.set(90),o.movementX=o.x+100,o.movementY=o.y+100,t.add.existing(o),o}return o(e,t),s(e,[{key:"update",value:function(){
// if(angle == 1 || angle == 2 || angle == -0){
//   this.scale.set(-1, 1);
//   // console.log('flip left');
// } else {
//   this.scale.set(1, 1);
//   // console.log('flip right');
// }
2==Math.ceil(this.game.physics.arcade.angleToXY(this.player,this.x,this.y))&&this.game.world.bringToTop(this)}}]),e}(l.default.Sprite));e.default=u},/* 368 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=n(o),c=i(24),l=n(c),h=function(){function t(e,i,n,a){r(this,t),this.game=e,this.level=n,this.currentWeather=i,this.backgroundLayer=a,this.isSafari=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS"),this.manager=this.game.plugins.add(s.default.ParticleStorm),l.default.weather&&this.createWeather(i)}return a(t,[{key:"createWeather",value:function(t){switch(t){case"Snow":this.addSnow();break;case"TempleFlies":this.addTempleFlies();break;case"Storm":this.addStorm();break;case"SnowWind":this.addSnowWind();break;case"Leaves":this.addLeaves();break;case"NiceWeather":
// this.addSun();
break;case"AutumnGlimmer":this.addAutumnGlimmer()}}},{key:"addSnow",value:function(){var t=game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-10,t.makeParticles("snow"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(0,.1),t.minRotation=0,t.maxRotation=0,t.start(!1,4600,5,0)}},{key:"addTempleFlies",value:function(){console.log("Testweather"),this.templeFliesEmitter=this.game.add.emitter(this.game.camera.width/2,1100,100),
// emitter.fixedToCamera = true;
this.templeFliesEmitter.width=2*this.game.camera.width,this.templeFliesEmitter.height=this.game.camera.height,this.templeFliesEmitter.angle=-10,this.templeFliesEmitter.minParticleScale=.1,this.templeFliesEmitter.maxParticleScale=.5,
// emitter.maxParticleSpeed.setTo(2, 2);
this.templeFliesEmitter.setYSpeed(5,10),this.templeFliesEmitter.setXSpeed(20,-20),this.templeFliesEmitter.gravity=.5,this.templeFliesEmitter.minRotation=0,this.templeFliesEmitter.maxRotation=0,this.templeFliesEmitter.setAlpha(.7,1,1e3,s.default.Easing.Exponential.In,!0),this.templeFliesEmitter.makeParticles("fly"),this.templeFliesEmitter.start(!1,1e4,5,0)}},{key:"addStorm",value:function(){this.backgroundLayer.tint=2500134;
// (x, y, maxParticles)
var t=this.game.add.emitter(-500,0,400);t.fixedToCamera=!0,t.width=2*this.game.camera.width,t.angle=-30,t.makeParticles("rain"),t.minParticleScale=.1,t.maxParticleScale=.5,t.setYSpeed(200,310),t.setXSpeed(-5,5),t.minRotation=180,t.maxRotation=0,t.gravity=200,
// (explode, lifespan, frequency, quantity)
t.start(!1,2500,1,0),this.lightningBitmap=this.game.add.bitmapData(window.innerWidth,window.innerHeight+500),this.lightning=this.game.add.image(this.game.camera.width/2,0,this.lightningBitmap),this.lightning.anchor.setTo(.5,.5),this.lightningSounds=[];for(var e=1;e<=5;e++){var i=this.game.add.audio("ThunderNear"+e,.2);this.lightningSounds.push(i)}var n=this.game.rnd.integerInRange(10,18);this.game.time.events.loop(s.default.Timer.SECOND*n,this.zap,this),this.isSafari||(this.addWindLeaves(),this.addClouds())}},{key:"addWindLeaves",value:function(){this.autumnGlimmerEmitter=this.game.add.emitter(-500,0,150),this.autumnGlimmerEmitter.fixedToCamera=!0,console.log(this.game.world.bounds.height),this.autumnGlimmerEmitter.width=this.game.world.bounds.width,this.autumnGlimmerEmitter.height=this.game.world.bounds.height,
// this.autumnGlimmerEmitter.angle = -10;
this.autumnGlimmerEmitter.minParticleScale=.1,this.autumnGlimmerEmitter.maxParticleScale=.5,
// emitter.maxParticleSpeed.setTo(2, 2);
this.autumnGlimmerEmitter.setScale(-2,2,1,1,3e3,s.default.Easing.Sinusoidal.InOut,!0),this.autumnGlimmerEmitter.setYSpeed(300),this.autumnGlimmerEmitter.setXSpeed(-300,300),this.autumnGlimmerEmitter.minParticleScale=.25,this.autumnGlimmerEmitter.maxParticleScale=1,this.autumnGlimmerEmitter.gravity=.5,this.autumnGlimmerEmitter.minRotation=25,
// this.autumnGlimmerEmitter.maxRotation = 0;
this.autumnGlimmerEmitter.setAlpha(.5,1),
// this.autumnGlimmerEmitter.autoAlpha = true;
// this.autumnGlimmerEmitter.setAlpha(0, 1, 5000, Phaser.Easing.Exponential.In, true);
this.autumnGlimmerEmitter.makeParticles("glimmerParticle"),this.autumnGlimmerEmitter.start(!1,5e3,5,0)}},{key:"zap",value:function(){this.lightningBitmap.x=this.game.camera.x,this.lightningBitmap.y=this.game.camera.y,this.lightning.x=this.game.camera.x,this.lightning.y=this.game.camera.y,this.createLightningTexture(this.game.rnd.integerInRange(this.game.camera.x,this.game.camera.x+this.game.camera.width),0,45,3,!1),this.lightning.alpha=1,this.game.add.tween(this.lightning).to({alpha:.5},100,s.default.Easing.Bounce.Out).to({alpha:1},100,s.default.Easing.Bounce.Out).to({alpha:.5},100,s.default.Easing.Bounce.Out).to({alpha:1},100,s.default.Easing.Bounce.Out).to({alpha:0},250,s.default.Easing.Cubic.In).start(),this.game.camera.flash(16777215,450),this.level.dayCycleClass.night&&this.game.add.tween(this.level.dayCycleClass.lightSprite).to({alpha:0},250,s.default.Easing.Linear.None,!0,0,0,!0),this.lightningSound=this.game.rnd.pick(this.lightningSounds),this.lightningSound.play(),this.game.camera.shake(.005,500)}},{key:"createLightningTexture",value:function(t,e,i,n,r){var a=this.lightningBitmap.context,o=this.lightningBitmap.width,s=this.lightningBitmap.height;r||a.clearRect(0,0,o,s);for(var c=0;c<i&&(a.strokeStyle="rgb(255, 255, 255)",a.lineWidth=n,a.beginPath(),a.moveTo(t,e),t+=r?this.game.rnd.integerInRange(-10,10):this.game.rnd.integerInRange(-30,30),t<=10&&(t=10),t>=o-10&&(t=o-10),e+=r?this.game.rnd.integerInRange(10,20):this.game.rnd.integerInRange(20,s/i),(!r&&c==i-1||e>s)&&(e=s),a.lineTo(t,e),a.stroke(),!(e>=s));c++)r||100*Math.random()<=20&&this.createLightningTexture(t,e,10,1,!0);this.lightningBitmap.dirty=!0}},{key:"addFog",value:function(){var t=this.game.add.bitmapData(this.game.width,this.game.height);t.ctx.rect(0,0,this.game.width,this.game.height),t.ctx.fillStyle="#000000",t.ctx.fill(),this.fogSprite=this.game.add.sprite(0,0,t),this.fogSprite.fixedToCamera=!0,this.fogSprite.alpha=.6,this.game.add.tween(this.fogSprite).to({alpha:.4},1e4,null,!0,0,0,!0)}},{key:"addClouds",value:function(){var t=this;this.clouds=this.game.add.group(),this.clouds.createMultiple(20,"cloud",0,!0),this.clouds.forEach(function(e){
// cloud.scale.set(this.game.rnd.realInRange(2, 8));
e.scale.set(2),e.x=t.game.world.randomX,e.y=t.game.world.randomY}),this.game.add.tween(this.clouds.scale).to({x:2,y:2},6e4,"Linear",!0,0,0,!0)}},{key:"addSnowWind",value:function(){}},{key:"updateWeather",value:function(){this.lightning&&this.game.world.bringToTop(this.lightning)}}]),t}();e.default=h},/* 369 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(71),i(370),i(371),i(51),i(52),i(101),i(148),i(372),i(149),i(373),i(374),i(375),i(102),i(376),i(46),i(12),i(377),i(378),i(379),i(380),i(381),i(382),i(383),i(384),i(385),i(386),i(387),i(388),i(389),i(390),i(391),i(392))}(0,function(t){return t})},/* 370 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){return function(){
// Check if typed arrays are supported
if("function"==typeof ArrayBuffer){
// Shortcuts
var e=t,i=e.lib,n=i.WordArray,r=n.init;(n.init=function(t){
// Handle Uint8Array
if(
// Convert buffers to uint8
t instanceof ArrayBuffer&&(t=new Uint8Array(t)),
// Convert other array views to uint8
(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var e=t.byteLength,i=[],n=0;n<e;n++)i[n>>>2]|=t[n]<<24-n%4*8;
// Initialize this word array
r.call(this,i,e)}else
// Else call normal init
r.apply(this,arguments)}).prototype=n}}(),t.lib.WordArray})},/* 371 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){return function(){function e(t){return t<<8&4278255360|t>>>8&16711935}
// Shortcuts
var i=t,n=i.lib,r=n.WordArray,a=i.enc;a.Utf16=a.Utf16BE={/**
			 * Converts a word array to a UTF-16 BE string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The UTF-16 BE string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
			 */
stringify:function(t){for(var e=t.words,i=t.sigBytes,n=[],r=0;r<i;r+=2){var a=e[r>>>2]>>>16-r%4*8&65535;n.push(String.fromCharCode(a))}return n.join("")},/**
			 * Converts a UTF-16 BE string to a word array.
			 *
			 * @param {string} utf16Str The UTF-16 BE string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
			 */
parse:function(t){for(var e=t.length,i=[],n=0;n<e;n++)i[n>>>1]|=t.charCodeAt(n)<<16-n%2*16;return r.create(i,2*e)}};/**
		 * UTF-16 LE encoding strategy.
		 */
a.Utf16LE={/**
			 * Converts a word array to a UTF-16 LE string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The UTF-16 LE string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
			 */
stringify:function(t){for(var i=t.words,n=t.sigBytes,r=[],a=0;a<n;a+=2){var o=e(i[a>>>2]>>>16-a%4*8&65535);r.push(String.fromCharCode(o))}return r.join("")},/**
			 * Converts a UTF-16 LE string to a word array.
			 *
			 * @param {string} utf16Str The UTF-16 LE string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
			 */
parse:function(t){for(var i=t.length,n=[],a=0;a<i;a++)n[a>>>1]|=e(t.charCodeAt(a)<<16-a%2*16);return r.create(n,2*i)}}}(),t.enc.Utf16})},/* 372 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(148))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.WordArray,r=e.algo,a=r.SHA256,o=r.SHA224=a.extend({_doReset:function(){this._hash=new n.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=a._doFinalize.call(this);return t.sigBytes-=4,t}});/**
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
		 *     var hash = CryptoJS.SHA224('message');
		 *     var hash = CryptoJS.SHA224(wordArray);
		 */
e.SHA224=a._createHelper(o),/**
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
		 *     var hmac = CryptoJS.HmacSHA224(message, key);
		 */
e.HmacSHA224=a._createHmacHelper(o)}(),t.SHA224})},/* 373 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(71),i(149))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.x64,n=i.Word,r=i.WordArray,a=e.algo,o=a.SHA512,s=a.SHA384=o.extend({_doReset:function(){this._hash=new r.init([new n.init(3418070365,3238371032),new n.init(1654270250,914150663),new n.init(2438529370,812702999),new n.init(355462360,4144912697),new n.init(1731405415,4290775857),new n.init(2394180231,1750603025),new n.init(3675008525,1694076839),new n.init(1203062813,3204075428)])},_doFinalize:function(){var t=o._doFinalize.call(this);return t.sigBytes-=16,t}});/**
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
		 *     var hash = CryptoJS.SHA384('message');
		 *     var hash = CryptoJS.SHA384(wordArray);
		 */
e.SHA384=o._createHelper(s),/**
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
		 *     var hmac = CryptoJS.HmacSHA384(message, key);
		 */
e.HmacSHA384=o._createHmacHelper(s)}(),t.SHA384})},/* 374 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(71))}(0,function(t){return function(e){
// Shortcuts
var i=t,n=i.lib,r=n.WordArray,a=n.Hasher,o=i.x64,s=o.Word,c=i.algo,l=[],h=[],u=[];
// Compute Constants
!function(){for(var t=1,e=0,i=0;i<24;i++){l[t+5*e]=(i+1)*(i+2)/2%64;var n=e%5,r=(2*t+3*e)%5;t=n,e=r}
// Compute pi index constants
for(var t=0;t<5;t++)for(var e=0;e<5;e++)h[t+5*e]=e+(2*t+3*e)%5*5;for(var a=1,o=0;o<24;o++){for(var c=0,f=0,d=0;d<7;d++){if(1&a){var p=(1<<d)-1;p<32?f^=1<<p:/* if (bitPosition >= 32) */
c^=1<<p-32}
// Compute next LFSR
128&a?
// Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
a=a<<1^113:a<<=1}u[o]=s.create(c,f)}}();
// Reusable objects for temporary values
var f=[];!function(){for(var t=0;t<25;t++)f[t]=s.create()}();/**
		 * SHA-3 hash algorithm.
		 */
var d=c.SHA3=a.extend({/**
			 * Configuration options.
			 *
			 * @property {number} outputLength
			 *   The desired number of bits in the output hash.
			 *   Only values permitted are: 224, 256, 384, 512.
			 *   Default: 512
			 */
cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new s.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){
// Absorb
for(var i=this._state,n=this.blockSize/2,r=0;r<n;r++){
// Shortcuts
var a=t[e+2*r],o=t[e+2*r+1];
// Swap endian
a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8);
// Absorb message into state
var s=i[r];s.high^=o,s.low^=a}
// Rounds
for(var c=0;c<24;c++){
// Theta
for(var d=0;d<5;d++){for(var p=0,m=0,y=0;y<5;y++){var s=i[d+5*y];p^=s.high,m^=s.low}
// Temporary values
var g=f[d];g.high=p,g.low=m}for(var d=0;d<5;d++)for(var v=f[(d+4)%5],b=f[(d+1)%5],P=b.high,w=b.low,p=v.high^(P<<1|w>>>31),m=v.low^(w<<1|P>>>31),y=0;y<5;y++){var s=i[d+5*y];s.high^=p,s.low^=m}
// Rho Pi
for(var x=1;x<25;x++){
// Shortcuts
var s=i[x],S=s.high,_=s.low,k=l[x];
// Rotate lanes
if(k<32)var p=S<<k|_>>>32-k,m=_<<k|S>>>32-k;else/* if (rhoOffset >= 32) */
var p=_<<k-32|S>>>64-k,m=S<<k-32|_>>>64-k;
// Transpose lanes
var T=f[h[x]];T.high=p,T.low=m}
// Rho pi at x = y = 0
var O=f[0],E=i[0];O.high=E.high,O.low=E.low;
// Chi
for(var d=0;d<5;d++)for(var y=0;y<5;y++){
// Shortcuts
var x=d+5*y,s=i[x],M=f[x],A=f[(d+1)%5+5*y],D=f[(d+2)%5+5*y];
// Mix rows
s.high=M.high^~A.high&D.high,s.low=M.low^~A.low&D.low}
// Iota
var s=i[0],B=u[c];s.high^=B.high,s.low^=B.low}},_doFinalize:function(){
// Shortcuts
var t=this._data,i=t.words,n=(this._nDataBytes,8*t.sigBytes),a=32*this.blockSize;
// Add padding
i[n>>>5]|=1<<24-n%32,i[(e.ceil((n+1)/a)*a>>>5)-1]|=128,t.sigBytes=4*i.length,
// Hash final blocks
this._process();for(var o=this._state,s=this.cfg.outputLength/8,c=s/8,l=[],h=0;h<c;h++){
// Shortcuts
var u=o[h],f=u.high,d=u.low;
// Swap endian
f=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),d=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8),
// Squeeze state to retrieve hash
l.push(d),l.push(f)}
// Return final computed hash
return new r.init(l,s)},clone:function(){for(var t=a.clone.call(this),e=t._state=this._state.slice(0),i=0;i<25;i++)e[i]=e[i].clone();return t}});/**
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
		 *     var hash = CryptoJS.SHA3('message');
		 *     var hash = CryptoJS.SHA3(wordArray);
		 */
i.SHA3=a._createHelper(d),/**
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
		 *     var hmac = CryptoJS.HmacSHA3(message, key);
		 */
i.HmacSHA3=a._createHmacHelper(d)}(Math),t.SHA3})},/* 375 */
/***/
function(t,e,i){!function(n,r){
// CommonJS
t.exports=e=r(i(3))}(0,function(t){/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
return function(e){function i(t,e,i){return t^e^i}function n(t,e,i){return t&e|~t&i}function r(t,e,i){return(t|~e)^i}function a(t,e,i){return t&i|e&~i}function o(t,e,i){return t^(e|~i)}function s(t,e){return t<<e|t>>>32-e}
// Shortcuts
var c=t,l=c.lib,h=l.WordArray,u=l.Hasher,f=c.algo,d=h.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),p=h.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),m=h.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),y=h.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),g=h.create([0,1518500249,1859775393,2400959708,2840853838]),v=h.create([1352829926,1548603684,1836072691,2053994217,0]),b=f.RIPEMD160=u.extend({_doReset:function(){this._hash=h.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){
// Swap endian
for(var c=0;c<16;c++){
// Shortcuts
var l=e+c,h=t[l];
// Swap
t[l]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}
// Shortcut
var u,f,b,P,w,x,S,_,k,T,O=this._hash.words,E=g.words,M=v.words,A=d.words,D=p.words,B=m.words,C=y.words;x=u=O[0],S=f=O[1],_=b=O[2],k=P=O[3],T=w=O[4];for(var L,c=0;c<80;c+=1)L=u+t[e+A[c]]|0,L+=c<16?i(f,b,P)+E[0]:c<32?n(f,b,P)+E[1]:c<48?r(f,b,P)+E[2]:c<64?a(f,b,P)+E[3]:o(f,b,P)+E[4],L|=0,L=s(L,B[c]),L=L+w|0,u=w,w=P,P=s(b,10),b=f,f=L,L=x+t[e+D[c]]|0,L+=c<16?o(S,_,k)+M[0]:c<32?a(S,_,k)+M[1]:c<48?r(S,_,k)+M[2]:c<64?n(S,_,k)+M[3]:i(S,_,k)+M[4],L|=0,L=s(L,C[c]),L=L+T|0,x=T,T=k,k=s(_,10),_=S,S=L;
// Intermediate hash value
L=O[1]+b+k|0,O[1]=O[2]+P+T|0,O[2]=O[3]+w+x|0,O[3]=O[4]+u+S|0,O[4]=O[0]+f+_|0,O[0]=L},_doFinalize:function(){
// Shortcuts
var t=this._data,e=t.words,i=8*this._nDataBytes,n=8*t.sigBytes;
// Add padding
e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t.sigBytes=4*(e.length+1),
// Hash final blocks
this._process();
// Swap endian
for(var r=this._hash,a=r.words,o=0;o<5;o++){
// Shortcut
var s=a[o];
// Swap
a[o]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}
// Return final computed hash
return r},clone:function(){var t=u.clone.call(this);return t._hash=this._hash.clone(),t}});/**
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
		 *     var hash = CryptoJS.RIPEMD160('message');
		 *     var hash = CryptoJS.RIPEMD160(wordArray);
		 */
c.RIPEMD160=u._createHelper(b),/**
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
		 *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
		 */
c.HmacRIPEMD160=u._createHmacHelper(b)}(Math),t.RIPEMD160})},/* 376 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(101),i(102))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.Base,r=i.WordArray,a=e.algo,o=a.SHA1,s=a.HMAC,c=a.PBKDF2=n.extend({/**
			 * Configuration options.
			 *
			 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
			 * @property {Hasher} hasher The hasher to use. Default: SHA1
			 * @property {number} iterations The number of iterations to perform. Default: 1
			 */
cfg:n.extend({keySize:4,hasher:o,iterations:1}),/**
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
var i=this.cfg,n=s.create(i.hasher,t),a=r.create(),o=r.create([1]),c=a.words,l=o.words,h=i.keySize,u=i.iterations;c.length<h;){var f=n.update(e).finalize(o);n.reset();for(var d=f.words,p=d.length,m=f,y=1;y<u;y++){m=n.finalize(m),n.reset();
// XOR intermediate with block
for(var g=m.words,v=0;v<p;v++)d[v]^=g[v]}a.concat(f),l[0]++}return a.sigBytes=4*h,a}});/**
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
e.PBKDF2=function(t,e,i){return c.create(i).compute(t,e)}}(),t.PBKDF2})},/* 377 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * Cipher Feedback block mode.
	 */
return t.mode.CFB=function(){function e(t,e,i,n){
// Shortcut
var r=this._iv;
// Generate keystream
if(r){var a=r.slice(0);
// Remove IV for subsequent blocks
this._iv=void 0}else var a=this._prevBlock;n.encryptBlock(a,0);
// Encrypt
for(var o=0;o<i;o++)t[e+o]^=a[o]}var i=t.lib.BlockCipherMode.extend();return i.Encryptor=i.extend({processBlock:function(t,i){
// Shortcuts
var n=this._cipher,r=n.blockSize;e.call(this,t,i,r,n),
// Remember this block to use with next block
this._prevBlock=t.slice(i,i+r)}}),i.Decryptor=i.extend({processBlock:function(t,i){
// Shortcuts
var n=this._cipher,r=n.blockSize,a=t.slice(i,i+r);e.call(this,t,i,r,n),
// This block becomes the previous block
this._prevBlock=a}}),i}(),t.mode.CFB})},/* 378 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * Counter block mode.
	 */
return t.mode.CTR=function(){var e=t.lib.BlockCipherMode.extend(),i=e.Encryptor=e.extend({processBlock:function(t,e){
// Shortcuts
var i=this._cipher,n=i.blockSize,r=this._iv,a=this._counter;
// Generate keystream
r&&(a=this._counter=r.slice(0),
// Remove IV for subsequent blocks
this._iv=void 0);var o=a.slice(0);i.encryptBlock(o,0),
// Increment counter
a[n-1]=a[n-1]+1|0;
// Encrypt
for(var s=0;s<n;s++)t[e+s]^=o[s]}});return e.Decryptor=i,e}(),t.mode.CTR})},/* 379 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
return t.mode.CTRGladman=function(){function e(t){if(255==(t>>24&255)){
//overflow
var e=t>>16&255,i=t>>8&255,n=255&t;255===e?(
// overflow b1
e=0,255===i?(i=0,255===n?n=0:++n):++i):++e,t=0,t+=e<<16,t+=i<<8,t+=n}else t+=1<<24;return t}function i(t){
// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
return 0===(t[0]=e(t[0]))&&(t[1]=e(t[1])),t}var n=t.lib.BlockCipherMode.extend(),r=n.Encryptor=n.extend({processBlock:function(t,e){
// Shortcuts
var n=this._cipher,r=n.blockSize,a=this._iv,o=this._counter;
// Generate keystream
a&&(o=this._counter=a.slice(0),
// Remove IV for subsequent blocks
this._iv=void 0),i(o);var s=o.slice(0);n.encryptBlock(s,0);
// Encrypt
for(var c=0;c<r;c++)t[e+c]^=s[c]}});return n.Decryptor=r,n}(),t.mode.CTRGladman})},/* 380 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * Output Feedback block mode.
	 */
return t.mode.OFB=function(){var e=t.lib.BlockCipherMode.extend(),i=e.Encryptor=e.extend({processBlock:function(t,e){
// Shortcuts
var i=this._cipher,n=i.blockSize,r=this._iv,a=this._keystream;
// Generate keystream
r&&(a=this._keystream=r.slice(0),
// Remove IV for subsequent blocks
this._iv=void 0),i.encryptBlock(a,0);
// Encrypt
for(var o=0;o<n;o++)t[e+o]^=a[o]}});return e.Decryptor=i,e}(),t.mode.OFB})},/* 381 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * Electronic Codebook block mode.
	 */
return t.mode.ECB=function(){var e=t.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),e.Decryptor=e.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),e}(),t.mode.ECB})},/* 382 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * ANSI X.923 padding strategy.
	 */
return t.pad.AnsiX923={pad:function(t,e){
// Shortcuts
var i=t.sigBytes,n=4*e,r=n-i%n,a=i+r-1;
// Pad
t.clamp(),t.words[a>>>2]|=r<<24-a%4*8,t.sigBytes+=r},unpad:function(t){
// Get number of padding bytes from last byte
var e=255&t.words[t.sigBytes-1>>>2];
// Remove padding
t.sigBytes-=e}},t.pad.Ansix923})},/* 383 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * ISO 10126 padding strategy.
	 */
return t.pad.Iso10126={pad:function(e,i){
// Shortcut
var n=4*i,r=n-e.sigBytes%n;
// Pad
e.concat(t.lib.WordArray.random(r-1)).concat(t.lib.WordArray.create([r<<24],1))},unpad:function(t){
// Get number of padding bytes from last byte
var e=255&t.words[t.sigBytes-1>>>2];
// Remove padding
t.sigBytes-=e}},t.pad.Iso10126})},/* 384 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
return t.pad.Iso97971={pad:function(e,i){
// Add 0x80 byte
e.concat(t.lib.WordArray.create([2147483648],1)),
// Zero pad the rest
t.pad.ZeroPadding.pad(e,i)},unpad:function(e){
// Remove zero padding
t.pad.ZeroPadding.unpad(e),
// Remove one more byte -- the 0x80 byte
e.sigBytes--}},t.pad.Iso97971})},/* 385 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * Zero padding strategy.
	 */
return t.pad.ZeroPadding={pad:function(t,e){
// Shortcut
var i=4*e;
// Pad
t.clamp(),t.sigBytes+=i-(t.sigBytes%i||i)},unpad:function(t){for(
// Shortcut
var e=t.words,i=t.sigBytes-1;!(e[i>>>2]>>>24-i%4*8&255);)i--;t.sigBytes=i+1}},t.pad.ZeroPadding})},/* 386 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){/**
	 * A noop padding strategy.
	 */
return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})},/* 387 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(12))}(0,function(t){return function(e){
// Shortcuts
var i=t,n=i.lib,r=n.CipherParams,a=i.enc,o=a.Hex,s=i.format;s.Hex={/**
			 * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
			 *
			 * @param {CipherParams} cipherParams The cipher params object.
			 *
			 * @return {string} The hexadecimally encoded string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
			 */
stringify:function(t){return t.ciphertext.toString(o)},/**
			 * Converts a hexadecimally encoded ciphertext string to a cipher params object.
			 *
			 * @param {string} input The hexadecimally encoded string.
			 *
			 * @return {CipherParams} The cipher params object.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
			 */
parse:function(t){var e=o.parse(t);return r.create({ciphertext:e})}}}(),t.format.Hex})},/* 388 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(51),i(52),i(46),i(12))}(0,function(t){return function(){
// Shortcuts
var e=t,i=e.lib,n=i.BlockCipher,r=e.algo,a=[],o=[],s=[],c=[],l=[],h=[],u=[],f=[],d=[],p=[];
// Compute lookup tables
!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;for(var i=0,n=0,e=0;e<256;e++){
// Compute sbox
var r=n^n<<1^n<<2^n<<3^n<<4;r=r>>>8^255&r^99,a[i]=r,o[r]=i;
// Compute multiplication
var m=t[i],y=t[m],g=t[y],v=257*t[r]^16843008*r;s[i]=v<<24|v>>>8,c[i]=v<<16|v>>>16,l[i]=v<<8|v>>>24,h[i]=v;
// Compute inv sub bytes, inv mix columns tables
var v=16843009*g^65537*y^257*m^16843008*i;u[r]=v<<24|v>>>8,f[r]=v<<16|v>>>16,d[r]=v<<8|v>>>24,p[r]=v,
// Compute next counter
i?(i=m^t[t[t[g^m]]],n^=t[t[n]]):i=n=1}}();
// Precomputed Rcon lookup
var m=[0,1,2,4,8,16,32,64,128,27,54],y=r.AES=n.extend({_doReset:function(){
// Skip reset of nRounds has been set before and key did not change
if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,i=t.sigBytes/4,n=this._nRounds=i+6,r=4*(n+1),o=this._keySchedule=[],s=0;s<r;s++)if(s<i)o[s]=e[s];else{var c=o[s-1];s%i?i>6&&s%i==4&&(
// Sub word
c=a[c>>>24]<<24|a[c>>>16&255]<<16|a[c>>>8&255]<<8|a[255&c]):(
// Rot word
c=c<<8|c>>>24,
// Sub word
c=a[c>>>24]<<24|a[c>>>16&255]<<16|a[c>>>8&255]<<8|a[255&c],
// Mix Rcon
c^=m[s/i|0]<<24),o[s]=o[s-i]^c}for(var l=this._invKeySchedule=[],h=0;h<r;h++){var s=r-h;if(h%4)var c=o[s];else var c=o[s-4];l[h]=h<4||s<=4?c:u[a[c>>>24]]^f[a[c>>>16&255]]^d[a[c>>>8&255]]^p[a[255&c]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,c,l,h,a)},decryptBlock:function(t,e){
// Swap 2nd and 4th rows
var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i,this._doCryptBlock(t,e,this._invKeySchedule,u,f,d,p,o);
// Inv swap 2nd and 4th rows
var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i},_doCryptBlock:function(t,e,i,n,r,a,o,s){
// Rounds
for(var c=this._nRounds,l=t[e]^i[0],h=t[e+1]^i[1],u=t[e+2]^i[2],f=t[e+3]^i[3],d=4,p=1;p<c;p++){
// Shift rows, sub bytes, mix columns, add round key
var m=n[l>>>24]^r[h>>>16&255]^a[u>>>8&255]^o[255&f]^i[d++],y=n[h>>>24]^r[u>>>16&255]^a[f>>>8&255]^o[255&l]^i[d++],g=n[u>>>24]^r[f>>>16&255]^a[l>>>8&255]^o[255&h]^i[d++],v=n[f>>>24]^r[l>>>16&255]^a[h>>>8&255]^o[255&u]^i[d++];
// Update state
l=m,h=y,u=g,f=v}
// Shift rows, sub bytes, add round key
var m=(s[l>>>24]<<24|s[h>>>16&255]<<16|s[u>>>8&255]<<8|s[255&f])^i[d++],y=(s[h>>>24]<<24|s[u>>>16&255]<<16|s[f>>>8&255]<<8|s[255&l])^i[d++],g=(s[u>>>24]<<24|s[f>>>16&255]<<16|s[l>>>8&255]<<8|s[255&h])^i[d++],v=(s[f>>>24]<<24|s[l>>>16&255]<<16|s[h>>>8&255]<<8|s[255&u])^i[d++];
// Set output
t[e]=m,t[e+1]=y,t[e+2]=g,t[e+3]=v},keySize:8});/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
		 */
e.AES=n._createHelper(y)}(),t.AES})},/* 389 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(51),i(52),i(46),i(12))}(0,function(t){return function(){
// Swap bits across the left and right words
function e(t,e){var i=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=i,this._lBlock^=i<<t}function i(t,e){var i=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=i,this._rBlock^=i<<t}
// Shortcuts
var n=t,r=n.lib,a=r.WordArray,o=r.BlockCipher,s=n.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],h=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],u=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=s.DES=o.extend({_doReset:function(){for(var t=this._key,e=t.words,i=[],n=0;n<56;n++){var r=c[n]-1;i[n]=e[r>>>5]>>>31-r%32&1}for(var a=this._subKeys=[],o=0;o<16;o++){
// Select 48 bits according to PC2
for(var s=a[o]=[],u=h[o],n=0;n<24;n++)
// Select from the left 28 key bits
s[n/6|0]|=i[(l[n]-1+u)%28]<<31-n%6,
// Select from the right 28 key bits
s[4+(n/6|0)]|=i[28+(l[n+24]-1+u)%28]<<31-n%6;
// Since each subkey is applied to an expanded 32-bit input,
// the subkey can be broken into 8 values scaled to 32-bits,
// which allows the key to be used without expansion
s[0]=s[0]<<1|s[0]>>>31;for(var n=1;n<7;n++)s[n]=s[n]>>>4*(n-1)+3;s[7]=s[7]<<5|s[7]>>>27}for(var f=this._invSubKeys=[],n=0;n<16;n++)f[n]=a[15-n]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,n,r){
// Get input
this._lBlock=t[n],this._rBlock=t[n+1],
// Initial permutation
e.call(this,4,252645135),e.call(this,16,65535),i.call(this,2,858993459),i.call(this,8,16711935),e.call(this,1,1431655765);
// Rounds
for(var a=0;a<16;a++){for(var o=r[a],s=this._lBlock,c=this._rBlock,l=0,h=0;h<8;h++)l|=u[h][((c^o[h])&f[h])>>>0];this._lBlock=c,this._rBlock=s^l}
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
n.DES=o._createHelper(d);/**
		 * Triple-DES block cipher algorithm.
		 */
var p=s.TripleDES=o.extend({_doReset:function(){
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
n.TripleDES=o._createHelper(p)}(),t.TripleDES})},/* 390 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(51),i(52),i(46),i(12))}(0,function(t){return function(){function e(){for(var t=this._S,e=this._i,i=this._j,n=0,r=0;r<4;r++){e=(e+1)%256,i=(i+t[e])%256;
// Swap
var a=t[e];t[e]=t[i],t[i]=a,n|=t[(t[e]+t[i])%256]<<24-8*r}
// Update counters
return this._i=e,this._j=i,n}
// Shortcuts
var i=t,n=i.lib,r=n.StreamCipher,a=i.algo,o=a.RC4=r.extend({_doReset:function(){for(var t=this._key,e=t.words,i=t.sigBytes,n=this._S=[],r=0;r<256;r++)n[r]=r;
// Key setup
for(var r=0,a=0;r<256;r++){var o=r%i,s=e[o>>>2]>>>24-o%4*8&255;a=(a+n[r]+s)%256;
// Swap
var c=n[r];n[r]=n[a],n[a]=c}
// Counters
this._i=this._j=0},_doProcessBlock:function(t,i){t[i]^=e.call(this)},keySize:8,ivSize:0});/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
		 */
i.RC4=r._createHelper(o);/**
		 * Modified RC4 stream cipher algorithm.
		 */
var s=a.RC4Drop=o.extend({/**
			 * Configuration options.
			 *
			 * @property {number} drop The number of keystream words to drop. Default 192
			 */
cfg:o.cfg.extend({drop:192}),_doReset:function(){o._doReset.call(this);
// Drop
for(var t=this.cfg.drop;t>0;t--)e.call(this)}});/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
		 */
i.RC4Drop=r._createHelper(s)}(),t.RC4})},/* 391 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(51),i(52),i(46),i(12))}(0,function(t){return function(){function e(){
// Save old counter values
for(var t=this._X,e=this._C,i=0;i<8;i++)s[i]=e[i];
// Calculate new counter values
e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<s[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<s[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<s[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<s[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<s[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<s[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<s[6]>>>0?1:0)|0,this._b=e[7]>>>0<s[7]>>>0?1:0;
// Calculate the g-values
for(var i=0;i<8;i++){var n=t[i]+e[i],r=65535&n,a=n>>>16,o=((r*r>>>17)+r*a>>>15)+a*a,l=((4294901760&n)*n|0)+((65535&n)*n|0);
// High XOR low
c[i]=o^l}
// Calculate new state values
t[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,t[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,t[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,t[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,t[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,t[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,t[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,t[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}
// Shortcuts
var i=t,n=i.lib,r=n.StreamCipher,a=i.algo,o=[],s=[],c=[],l=a.Rabbit=r.extend({_doReset:function(){
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
var o=i.words,s=o[0],c=o[1],l=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),h=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),u=l>>>16|4294901760&h,f=h<<16|65535&l;
// Modify counter values
a[0]^=l,a[1]^=u,a[2]^=h,a[3]^=f,a[4]^=l,a[5]^=u,a[6]^=h,a[7]^=f;
// Iterate the system four times
for(var n=0;n<4;n++)e.call(this)}},_doProcessBlock:function(t,i){
// Shortcut
var n=this._X;
// Iterate the system
e.call(this),
// Generate four keystream words
o[0]=n[0]^n[5]>>>16^n[3]<<16,o[1]=n[2]^n[7]>>>16^n[5]<<16,o[2]=n[4]^n[1]>>>16^n[7]<<16,o[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)
// Swap endian
o[r]=16711935&(o[r]<<8|o[r]>>>24)|4278255360&(o[r]<<24|o[r]>>>8),
// Encrypt
t[i+r]^=o[r]},blockSize:4,ivSize:2});/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
		 */
i.Rabbit=r._createHelper(l)}(),t.Rabbit})},/* 392 */
/***/
function(t,e,i){!function(n,r,a){
// CommonJS
t.exports=e=r(i(3),i(51),i(52),i(46),i(12))}(0,function(t){return function(){function e(){
// Save old counter values
for(var t=this._X,e=this._C,i=0;i<8;i++)s[i]=e[i];
// Calculate new counter values
e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<s[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<s[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<s[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<s[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<s[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<s[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<s[6]>>>0?1:0)|0,this._b=e[7]>>>0<s[7]>>>0?1:0;
// Calculate the g-values
for(var i=0;i<8;i++){var n=t[i]+e[i],r=65535&n,a=n>>>16,o=((r*r>>>17)+r*a>>>15)+a*a,l=((4294901760&n)*n|0)+((65535&n)*n|0);
// High XOR low
c[i]=o^l}
// Calculate new state values
t[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,t[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,t[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,t[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,t[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,t[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,t[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,t[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}
// Shortcuts
var i=t,n=i.lib,r=n.StreamCipher,a=i.algo,o=[],s=[],c=[],l=a.RabbitLegacy=r.extend({_doReset:function(){
// Shortcuts
var t=this._key.words,i=this.cfg.iv,n=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],r=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];
// Carry bit
this._b=0;
// Iterate the system four times
for(var a=0;a<4;a++)e.call(this);
// Modify the counters
for(var a=0;a<8;a++)r[a]^=n[a+4&7];
// IV setup
if(i){
// Shortcuts
var o=i.words,s=o[0],c=o[1],l=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),h=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),u=l>>>16|4294901760&h,f=h<<16|65535&l;
// Modify counter values
r[0]^=l,r[1]^=u,r[2]^=h,r[3]^=f,r[4]^=l,r[5]^=u,r[6]^=h,r[7]^=f;
// Iterate the system four times
for(var a=0;a<4;a++)e.call(this)}},_doProcessBlock:function(t,i){
// Shortcut
var n=this._X;
// Iterate the system
e.call(this),
// Generate four keystream words
o[0]=n[0]^n[5]>>>16^n[3]<<16,o[1]=n[2]^n[7]>>>16^n[5]<<16,o[2]=n[4]^n[1]>>>16^n[7]<<16,o[3]=n[6]^n[3]>>>16^n[1]<<16;for(var r=0;r<4;r++)
// Swap endian
o[r]=16711935&(o[r]<<8|o[r]>>>24)|4278255360&(o[r]<<24|o[r]>>>8),
// Encrypt
t[i+r]^=o[r]},blockSize:4,ivSize:2});/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
		 */
i.RabbitLegacy=r._createHelper(l)}(),t.RabbitLegacy})},/* 393 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=n(o);i(99);var c=i(100),l=n(c),h=i(146),u=n(h),f=i(150),d=(n(f),i(145)),p=n(d),m=i(394),y=n(m),g=function(){function t(e,i){var n=this;r(this,t),this.game=e,this.level=i,this.spawnEnemiesRunning=!1,this.level.map.plus.physics.enableObjectLayer("Collision"),this.level.map.plus.events.regions.enableObjectLayer("Events"),this.level.map.plus.events.regions.onEnterAdd(this.level.player,function(t){t.properties.message?n.addMessage(t):t.properties.addBridge?n.addBridge(t):t.properties.removeBridge?n.removeBridge(t):t.properties.pathfinderMessage?n.addPathfinderMessage(t):t.properties.port?n.addPort(t):t.properties.fightArea?n.fightArea(t):t.properties.showQuestmap?n.showQuestmap(t):t.properties.addQuest?n.addQuest(t):t.properties.openDoor?n.openDoor(t):t.properties.movePlayerToXY?n.movePlayerToXY(t):t.properties.spawnEnemies?n.spawnEnemies(t):t.properties.lockCamera&&n.lockCamera(t)}),this.level.map.plus.events.regions.onLeaveAdd(this.level.player,function(t){t.properties.lockCamera&&n.followPlayer(t)})}return a(t,[{key:"addMessage",value:function(t){for(var e=t.properties.id,i=Object.values(y.default.dialogues),n=0;n<i.length;n++)if(n+1==e){if(this.level.playedDialogues.includes(e))return;if(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),this.level.questManager.checkIfQuestExists(t.properties.questID))return;this.level.questManager.addQuest(t.properties),this.level.GUICLASS.createNotification("quest","Questupdate");var r=i[n];this.level.playedDialogues.push(e),this.level.safe.setPlayedDialogues(this.level.playedDialogues),this.level.GUICLASS.createMessage(r,t.properties.movable,t.properties.readable);break}}},{key:"addBridge",value:function(t){var e=t.properties.id,i=t.properties.requiredItemID,n=t.properties.requiredMasteredQuestID;(this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===n)&&(this.level.activatedBridges.includes(e)||(void 0===i||this.level.itemIDs.includes(i))&&(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),this.level.bridgebuilder=new u.default(this.game,t,this.level.player,this.level.map,this.level.groundLayer,this.level.collisionLayer),this.level.bridgebuilder.buildBridge(),this.level.activatedBridges.push(e)))}},{key:"removeBridge",value:function(t){var e=t.properties.id,i=(t.properties.requiredItemID,t.properties.requiredMasteredQuestID);(this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===i)&&(this.level.activatedBridges.includes(e)||(void 0!==t.properties.removeQuestID&&this.level.questManager.removeQuest(t.properties.removeQuestID),this.level.bridgebuilder=new u.default(this.game,t,this.level.player,this.level.map,this.level.groundLayer,this.level.collisionLayer),this.level.bridgebuilder.removeBridge(),this.level.activatedBridges.push(e)))}},{key:"movePlayerToXY",value:function(t){var e=t.properties.targetX,i=t.properties.targetY;void 0==this.level.pathfinder&&(this.level.pathfinder=new l.default(this.game,this.level.map,this.level.player,{x:e,y:i},this.level.groundLayer,!1,200))}},{key:"addPathfinderMessage",value:function(t){var e=this,i=t.properties.messageID,n=t.properties.characterID,r=t.properties.requiredMasteredQuestID;if((this.level.questManager.checkIfQuestWasDone(t.properties.requiredMasteredQuestID)||void 0===r)&&!this.level.playedDialogues.includes(i)){this.level.playedDialogues.push(i),this.level.safe.setPlayedDialogues(this.level.playedDialogues);for(var a=0;a<this.level.characters.length;a++)this.level.characters[a].id==n?this.pathfinderCharacter=this.level.characters[a]:console.warn("Character not found!");void 0==this.level.pathfinder&&(this.level.pathfinder=new l.default(this.game,this.level.map,this.pathfinderCharacter,{x:this.level.player.x,y:this.level.player.y-50},this.level.groundLayer,!1,200),this.game.camera.follow(this.level.characters[0],s.default.Camera.FOLLOW_LOCKON,.08,.08),this.level.player.movable=!1,this.game.time.events.add(s.default.Timer.SECOND*t.properties.messageWaitingDuration,function(){e.level.game.camera.follow(e.level.player,s.default.Camera.FOLLOW_LOCKON,.08,.08),e.level.player.movable=!0;for(var i=t.properties.messageID,n=Object.values(y.default.dialogues),r=0;r<n.length;r++)if(r+1==i){var a=n[r];e.level.GUICLASS.createMessage(a,t.properties.movable,t.properties.readable),e.game.time.events.add(8*s.default.Timer.SECOND,function(){e.level.questManager.checkIfQuestExists(t.properties.questID)||(e.level.questManager.addQuest(t.properties),e.level.GUICLASS.createNotification("quest","Questupdate"),"currentPosition"!==t.properties.endDestinationX&&"currentPosition"!==t.properties.endDestinationY&&(e.endDestinationX=t.properties.endDestinationX,e.endDestinationY=t.properties.endDestinationY,e.level.pathfinder=new l.default(e.game,e.level.map,e.pathfinderCharacter,{x:e.endDestinationX,y:e.endDestinationY},e.level.groundLayer,!1,300)))});break}},this))}}},{key:"addPort",value:function(t){var e=t.properties.targetMap,i=t.properties.targetID;this.level.inputClass.stick&&(this.level.inputClass.stick.alpha=0,this.level.inputClass.stick.enabled=!1),this.level.gameData.currentMap=e,this.level.gameData.targetID=i,this.level.safe.setGameConfig(this.level.gameData),console.log("TargetMap: "+e),console.log(this.level.weather.weatherSound),
// if (this.level.weather.weatherSound) {
// 	// this.level.weather.weatherSound.fadeOut(1000);
// 	// this.game.add.tween(this.level.weather.weatherSound).to( { volume: 0 }, 2000, Phaser.Easing.Linear.None, true);
// 	this.level.weather.weatherSound.stop();
// }
// if(this.game.soundManager.sound){
// 	this.game.soundManager.sound.fadeOut(2000);
// }
this.game.state.restart(!0,!1,{map:e,targetID:i})}},{key:"fightArea",value:function(t){this.game.add.tween(this.level.groundLayer).to({tint:0},1e4,s.default.Easing.Exponential.In,!0,0,!0,!0),this.game.add.tween(this.level.backgroundLayer).to({tint:0},1e4,s.default.Easing.Exponential.In,!0,0,!0,!0),this.game.add.tween(this.level.player).to({tint:0},1e4,s.default.Easing.Exponential.In,!0,0,!0,!0);for(var e=0;e<this.level.enemies.length;e++)this.game.add.tween(this.level.enemies[e]).to({tint:0},1e4,s.default.Easing.Exponential.In,!0,0,!0,!0)}},{key:"showQuestmap",value:function(t){this.level.GUICLASS.createQuestmap()}},{key:"addQuest",value:function(t){this.level.questManager.checkIfQuestExists(t.properties.questID)||(this.level.questManager.addQuest(t.properties),this.level.GUICLASS.createNotification("quest","Questupdate"))}},{key:"openDoor",value:function(t){3==this.level.gameData.targetID?this.level.door.animations.play("idle",1,!0):this.level.door.animations.play("open",8,!1)}},{key:"spawnEnemies",value:function(t){
// Prevent from always spawning when triggering event!
if(!this.spawnEnemiesRunning&&!this.level.questManager.checkIfQuestWasDone(t.properties.questID)){this.spawnEnemiesRunning=!0,this.level.questManager.checkIfQuestExists(t.properties.questID)||this.level.questManager.addQuest(t.properties);for(var e=0;e<t.properties.amount;e++){var i=this.game.rnd.integerInRange(0,1),n=this.game.rnd.integerInRange(0,1),r=i?t.left:t.right,a=n?t.top:t.bottom;
// const x = this.game.rnd.integerInRange(region.left, region.right);
// const y = this.game.rnd.integerInRange(region.top, region.bottom);
this.level.enemies.push(new p.default(this.game,r,a,this.level.player,this.level.map,this.level.groundLayer,t.properties))}}}},{key:"lockCamera",value:function(t){console.log(t);var e=t.right-t.left,i=t.bottom-t.top,n=t.left+e/2,r=t.bottom-i/2;console.log(n,r),this.game.camera.unfollow(),
// this.game.camera.lerp = 0.1;
// this.game.camera.focusOnXY(cameraX, cameraY);
this.game.add.tween(this.game.camera).to({x:n-this.game.camera.width/2,y:r-this.game.camera.height/2},750,s.default.Easing.Quadratic.InOut,!0)}},{key:"followPlayer",value:function(t){var e=this;this.followTween=this.game.add.tween(this.game.camera).to({x:this.level.player.x-this.game.camera.width/2,y:this.level.player.y-this.game.camera.height/2},400,s.default.Easing.Quadratic.InOut,!0),this.followTween.onComplete.add(function(){e.game.camera.follow(e.level.player,s.default.Camera.FOLLOW_LOCKON,.1,.1)},this)}}]),t}();e.default=g},/* 394 */
/***/
function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={dialogues:{1:["Test1","Test2"],2:["If a person who has an evil heart gets the Triforce, a Hero is destined to appear...","If the evil one destroys the Hero, nothing can save the world from his wicked reign. Only a person of the Knights Of Hyrule, who protected the royalty of Hylia,"],3:["Test3","Test4"],4:["Please help us! Our village is invaded by enemies","Kill eight of them and bring the found item to the oracle!"],5:["The oracle is already waiting for you!"],6:["I am the oracle!","Be our hero and prove your power!","Go into the dark forest and kill three Enemies!"]}}},/* 395 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=(n(o),i(24)),c=(n(s),i(147)),l=(n(c),function(){function t(e,i){r(this,t),this.game=e,this.level=i}return a(t,[{key:"addQuest",value:function(t){this.quests=this.level.safe.getQuests();var e={id:t.questID,questMessage:t.questMessage,questKillEnemyType:t.questKillEnemyType,questDeadEnemies:1,questKillEnemyAmount:t.questKillEnemyAmount};this.quests[t.questID]=e,console.log(this.quests),this.level.safe.setQuests(this.quests)}},{key:"removeQuest",value:function(t){console.log("removeInside"),this.quests=this.level.safe.getQuests();var e=this.quests[t];delete this.quests[t],this.quests.masteredQuests[t]=e,this.level.safe.setQuests(this.quests),console.log(this.quests)}},{key:"checkIfQuestExists",value:function(t){return this.quests=this.level.safe.getQuests(),t in this.quests||t in this.quests.masteredQuests}},{key:"checkIfQuestWasDone",value:function(t){return this.quests=this.level.safe.getQuests(),t in this.quests.masteredQuests&&(console.log("Quest was done!"),!0)}},{key:"checkKillCondition",value:function(t){this.quests=this.level.safe.getQuests(),t in this.quests&&(console.log(this.quests[t].questDeadEnemies,this.quests[t].questKillEnemyAmount),this.quests[t].questDeadEnemies==this.quests[t].questKillEnemyAmount?(this.level.GUICLASS.createNotification("quest","Questupdate"),this.removeQuest(t)):(this.quests[t].questDeadEnemies+=1,this.level.safe.setQuests(this.quests),console.log(this.quests)))}}]),t}());e.default=l},/* 396 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(6),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(){function t(e,i){n(this,t),this.game=e,this.level=i,this.night=!1,this.createDayCycle()}return r(t,[{key:"createDayCycle",value:function(){
// Create Night
if(this.level.dayCycle){if(this.shadowTexture=this.game.add.bitmapData(this.game.width+200,this.game.height+200),this.lightSprite=this.game.add.image(this.game.camera.x,this.game.camera.y,this.shadowTexture),this.time=new Date,this.timeValue=this.time.getHours(),this.timeValue=11,this.timeValue>=0&&this.timeValue<6){console.log("Night"),this.night=!0,this.lightSprite.alpha=.85,this.level.backgroundLayer.tint=460551,this.level.player.tint=8947848;for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=8947848;this.level.weather.clouds&&this.level.weather.clouds.destroy()}else if(this.timeValue>=6&&this.timeValue<8){console.log("Dawn"),this.level.backgroundLayer.tint=8684676,this.lightSprite.alpha=.7,this.level.player.tint=3684408;for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=3684408;this.level.weather.clouds&&this.level.weather.clouds.forEach(function(t){t.tint=3684408})}else if(this.timeValue>=8&&this.timeValue<18)console.log("Day"),
// Normal Player Tint: 16777215
this.lightSprite.alpha=0;else if(this.timeValue>=18&&this.timeValue<21){console.log("Dusk"),this.level.backgroundLayer.tint=8684676,this.lightSprite.alpha=.7,this.level.player.tint=3684408;for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=3684408;this.level.weather.clouds&&this.level.weather.clouds.forEach(function(t){t.tint=3684408})}else if(this.timeValue>=21&&this.timeValue<24){console.log("Night"),this.night=!0,this.level.backgroundLayer.tint=460551,this.lightSprite.alpha=.85,this.level.player.tint=8947848;for(var t=0;t<this.level.characters.length;t++)this.level.characters[t].tint=8947848;this.level.weather.clouds&&this.level.weather.clouds.destroy()}this.lightSprite.blendMode=o.default.blendModes.MULTIPLY,
// this.level.player.blendMode = Phaser.blendModes.MULTIPLY;
this.level.weather.lightning&&this.level.weather.lightning.bringToTop()}}},{key:"updateShadowTexture",value:function(){this.shadowTexture.context.fillStyle="rgb(0, 15, 119)",this.shadowTexture.context.fillRect(0,0,this.game.width+400,this.game.height+400)}}]),t}();e.default=s},/* 397 */
/***/
function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(6),s=(n(o),i(398)),c=n(s),l=i(399),h=n(l),u=i(150),f=n(u),d=function(){function t(e){r(this,t),this.game=e,this.createGUI()}return a(t,[{key:"createGUI",value:function(){this.questMap=new f.default(this.game,this)}},{key:"updateGUI",value:function(t,e){t}},{key:"update",value:function(){this.message&&(this.game.world.bringToTop(this.message.background),this.game.world.bringToTop(this.message.text),this.game.world.bringToTop(this.message.upperBar),this.game.world.bringToTop(this.message.downBar)),this.notification.notificationBar&&(this.game.world.bringToTop(this.notification.notificationBar),this.game.world.bringToTop(this.notification.text)),this.questMap.questmapBackground&&(this.game.world.bringToTop(this.questMap.questmapBackground),this.game.world.bringToTop(this.questMap.text))}},{key:"createMessage",value:function(t,e,i){this.message=new c.default(this.game,t,e,i,this.player)}},{key:"createNotification",value:function(t,e){this.notification=new h.default(this.game,t,e)}},{key:"setLevel",value:function(t){this.level=t,this.player=this.level.player}}]),t}();e.default=d},/* 398 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(6),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(){function t(e,i,r,a,o){n(this,t),this.game=e,this.message=i,this.movable=r,this.readable=a,this.player=o,this.line=[],this.wordIndex=0,this.lineIndex=0,this.wordDelay=100,this.lineDelay=2e3,this.addBars();var s=e.add.bitmapData(300,65);s.ctx.beginPath(),s.ctx.rect(0,0,300,65),s.ctx.fillStyle="#000000",s.ctx.globalAlpha=.8,s.ctx.fill(),this.background=e.add.sprite(this.game.camera.width/2-s.width/2,this.game.camera.height-90,s),this.background.fixedToCamera=!0,this.readable?this.text=this.game.add.bitmapText(this.background.x+20,this.game.camera.height-80,"pxlfont","",51):this.text=this.game.add.bitmapText(this.background.x+20,this.game.camera.height-60,"pxlfont","",32),this.text.scale.set(.26),this.text.maxWidth=1e3,this.text.textHeight=1500,this.game.cache.getBitmapFont("pxlfont").font.lineHeight=100,this.text.fixedToCamera=!0,this.text.smoothed=!1,this.movable||(this.player.movable=!1,this.player.body.immovable=!0),this.nextLine()}return r(t,[{key:"nextLine",value:function(){if(this.lineIndex===this.message.length)return void this.game.time.events.add(2*o.default.Timer.SECOND,this.removeMessage,this);this.line=this.message[this.lineIndex].split(" "),this.wordIndex=0,this.game.time.events.repeat(this.wordDelay,this.line.length,this.nextWord,this),this.text.text="",this.lineIndex++}},{key:"nextWord",value:function(){this.text.text=this.text.text.concat(this.line[this.wordIndex]+" "),++this.wordIndex===this.line.length&&(this.text.text=this.text.text.concat("\n"),this.game.time.events.add(this.lineDelay,this.nextLine,this))}},{key:"removeMessage",value:function(){this.text.destroy(),this.background.destroy(),this.removeBars(),this.movable||(this.player.movable=!0,this.player.body.immovable=!1)}},{key:"addBars",value:function(){var t=this.game.camera.width,e=game.add.bitmapData(t,20);e.ctx.beginPath(),e.ctx.rect(0,0,t,20),e.ctx.fillStyle="#000000",e.ctx.globalAlpha=1,e.ctx.fill(),this.upperBar=game.add.sprite(this.game.camera.width/2-e.width/2,this.game.camera.height,e),this.upperBar.fixedToCamera=!0,this.downBar=game.add.sprite(this.game.camera.width/2-e.width/2,this.game.camera.height-this.game.camera.height-20,e),this.downBar.fixedToCamera=!0,this.game.add.tween(this.upperBar.cameraOffset).to({y:this.upperBar.y-20},1e3,o.default.Easing.Linear.None,!0),this.game.add.tween(this.downBar.cameraOffset).to({y:this.downBar.y+20},1e3,o.default.Easing.Linear.None,!0)}},{key:"removeBars",value:function(){this.upperBarTween=this.game.add.tween(this.upperBar.cameraOffset).to({y:this.game.camera.height},1e3,o.default.Easing.Linear.None,!0),this.downBarTween=this.game.add.tween(this.downBar.cameraOffset).to({y:this.game.camera.height-this.game.camera.height-20},1e3,o.default.Easing.Linear.None,!0),this.upperBarTween.onComplete.add(function(){this.upperBar.destroy(),this.downBar.destroy(),this.upperBar=!1},this)}}]),t}();e.default=s},/* 399 */
/***/
function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=i(6),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(){function t(e,i,r){n(this,t),this.game=e,this.type=i,this.message=r,this.game.time.events.add(1*o.default.Timer.SECOND,this.createNotification,this)}return r(t,[{key:"createNotification",value:function(){this.bmd=game.add.bitmapData(50,20),this.bmd.ctx.beginPath(),this.bmd.ctx.rect(0,0,50,20),this.bmd.ctx.fillStyle="#000000",this.bmd.ctx.globalAlpha=.8,this.bmd.ctx.fill(),this.notificationBar=game.add.sprite(this.game.camera.width-this.bmd.width-20,-20,this.bmd),this.notificationBar.fixedToCamera=!0,this.notificationBar.alpha=0,this.text=this.game.add.bitmapText(this.notificationBar.x,-20,"pxlfont","",51),this.text.scale.set(.26),
// this.text = this.game.add.bitmapText(this.notificationBar.x, this.notificationBar.y - 4, 'pxlfont', '', 15);
this.text.text=this.message,this.text.alpha=0,this.text.fixedToCamera=!0,this.notificationBar.width=this.text.width+20,this.text.anchor.set(.5),this.notificationBar.anchor.set(.5),
// console.log('Beginn Text: ' + this.text.cameraOffset);
// console.log('Beginn notificationBar: ' + this.notificationBar.cameraOffset);
this.game.add.tween(this.text.cameraOffset).to({y:this.text.y+40},800,o.default.Easing.Back.Out,!0),this.game.add.tween(this.notificationBar.cameraOffset).to({y:this.notificationBar.y+40},800,o.default.Easing.Back.Out,!0),this.game.add.tween(this.text).to({alpha:1},500,o.default.Easing.Linear.None,!0),this.game.add.tween(this.notificationBar).to({alpha:1},500,o.default.Easing.Linear.None,!0),
// console.log('Beginn Text End: ' + this.text.cameraOffset);
// console.log('Beginn notificationBar End: ' + this.notificationBar.cameraOffset);
this.game.time.events.add(4*o.default.Timer.SECOND,this.removeNotification,this)}},{key:"removeNotification",value:function(){this.removeTween=this.game.add.tween(this.text).to({alpha:0},1e3,o.default.Easing.Back.Out,!0),this.game.add.tween(this.notificationBar).to({alpha:0},1e3,o.default.Easing.Back.Out,!0),this.notificationBar.cameraOffset.y=-20,this.text.cameraOffset.y=-20,this.removeTween.onComplete.add(function(){this.notificationBar.destroy(),this.notificationBar=!1,this.text.destroy(),this.bmd.destroy()},this)}}]),t}();e.default=s},/* 400 */
/***/
function(t,e,i){i(151)(i(401))},/* 401 */
/***/
function(t,e){t.exports="'use strict';\n\n/* Phaser Particle Storm Plugin v1.0.0 (C) Copyright 2015 Photon Storm Ltd. */\nPhaser.ParticleStorm = function (a, b) {\n\tPhaser.Plugin.call(this, a, b), this.emitters = [], this.dataList = {};\n\tvar c = PIXI.canUseNewCanvasBlendModes();\n\tthis.blendModeMap = {\n\t\tNORMAL: [0, 'source-over'],\n\t\tADD: [1, 'lighter'],\n\t\tMULTIPLY: [2, c ? 'multiply' : 'source-over'],\n\t\tSCREEN: [3, c ? 'screen' : 'source-over'],\n\t\tOVERLAY: [4, c ? 'overlay' : 'source-over'],\n\t\tDARKEN: [5, c ? 'darken' : 'source-over'],\n\t\tLIGHTEN: [6, c ? 'lighten' : 'source-over'],\n\t\tCOLOR_DODGE: [7, c ? 'color-dodge' : 'source-over'],\n\t\tCOLOR_BURN: [8, c ? 'color-burn' : 'source-over'],\n\t\tHARD_LIGHT: [9, c ? 'hard-light' : 'source-over'],\n\t\tSOFT_LIGHT: [10, c ? 'soft-light' : 'source-over'],\n\t\tDIFFERENCE: [11, c ? 'difference' : 'source-over'],\n\t\tEXCLUSION: [12, c ? 'exclusion' : 'source-over'],\n\t\tHUE: [13, c ? 'hue' : 'source-over'],\n\t\tSATURATION: [14, c ? 'saturation' : 'source-over'],\n\t\tCOLOR: [15, c ? 'color' : 'source-over'],\n\t\tLUMINOSITY: [16, c ? 'luminosity' : 'source-over']\n\t}, this.hsv = Phaser.Color.HSVColorWheel();\n}, Phaser.ParticleStorm.prototype = Object.create(Phaser.Plugin.prototype), Phaser.ParticleStorm.prototype.constructor = Phaser.ParticleStorm, Phaser.ParticleStorm.SPRITE = 'sprite', Phaser.ParticleStorm.PIXEL = 'pixel', Phaser.ParticleStorm.RENDERTEXTURE = 'render texture', Phaser.ParticleStorm.SPRITE_BATCH = 'sprite batch', Phaser.ParticleStorm.BITMAP_DATA = 'bitmap data', Phaser.ParticleStorm.BASE = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_1 = {\n\tvalue: 1,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 1\n}, Phaser.ParticleStorm.BASE_255 = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tmin: 0,\n\tmax: 255,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_359 = {\n\tvalue: 0,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tmin: 0,\n\tmax: 359,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_NULL = {\n\tvalue: null,\n\tinitial: 0,\n\tdelta: 0,\n\toffset: 0,\n\tcontrol: null,\n\tcalc: 0\n}, Phaser.ParticleStorm.BASE_EMIT = {\n\tname: null,\n\tvalue: 0,\n\tinitial: 0,\n\tcontrol: null,\n\tat: null,\n\tinherit: !0,\n\toffsetX: 0,\n\toffsetY: 0\n}, Phaser.ParticleStorm.Controls = {}, Phaser.ParticleStorm.Zones = {}, Phaser.ParticleStorm.prototype.createEmitter = function (a, b, c) {\n\tvar d = new Phaser.ParticleStorm.Emitter(this, a, b, c);\n\treturn this.emitters.push(d), d;\n}, Phaser.ParticleStorm.prototype.removeEmitter = function (a) {\n\tfor (var b = 0; b < this.emitters.length; b++) {\n\t\tif (this.emitters[b] === a) return void this.emitters.splice(b, 1);\n\t}\n}, Phaser.ParticleStorm.prototype.addData = function (a, b) {\n\tif (void 0 === a) return this;\n\tif (Array.isArray(a)) for (var c = 0; c < a.length; c++) {\n\t\tthis.dataList[a[c]] = this.game.cache.getJSON(a[c]);\n\t} else void 0 !== b ? this.dataList[a] = b : this.dataList[a] = this.game.cache.getJSON(a);\n\treturn this;\n}, Phaser.ParticleStorm.prototype.getData = function (a) {\n\treturn this.dataList[a];\n}, Phaser.ParticleStorm.prototype.clearData = function (a) {\n\tif (void 0 === a) this.dataList = {};else if (Array.isArray(a)) for (var b = 0; b < a.length; b++) {\n\t\tdelete this.dataList[a[b]];\n\t} else delete this.dataList[a];\n\treturn this;\n}, Phaser.ParticleStorm.prototype.cloneData = function (a, b) {\n\tif (void 0 === a) return this;\n\tif (Array.isArray(a)) for (var c = 0; c < a.length; c++) {\n\t\tthis.dataList[a[c]] = Phaser.Utils.extend(!0, this.game.cache.getJSON(a[c]));\n\t} else void 0 !== b ? this.dataList[a] = Phaser.Utils.extend(!0, b) : this.dataList[a] = Phaser.Utils.extend(!0, this.game.cache.getJSON(a));\n\treturn this;\n}, Phaser.ParticleStorm.prototype.createPointZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Point(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createLineZone = function (a, b, c, d) {\n\treturn new Phaser.ParticleStorm.Zones.Line(this.game, a, b, c, d);\n}, Phaser.ParticleStorm.prototype.createRectangleZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Rectangle(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createCircleZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Circle(this.game, a);\n}, Phaser.ParticleStorm.prototype.createEllipseZone = function (a, b) {\n\treturn new Phaser.ParticleStorm.Zones.Ellipse(this.game, a, b);\n}, Phaser.ParticleStorm.prototype.createLinearSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 0, a, b, c);\n}, Phaser.ParticleStorm.prototype.createBezierSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 1, a, b, c);\n}, Phaser.ParticleStorm.prototype.createCatmullSplineZone = function (a, b, c) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, 2, a, b, c);\n}, Phaser.ParticleStorm.prototype.createSplineZone = function (a, b, c, d) {\n\treturn new Phaser.ParticleStorm.Zones.Spline(this.game, a, b, c, d);\n}, Phaser.ParticleStorm.prototype.createTextZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Text(this.game, a);\n}, Phaser.ParticleStorm.prototype.createImageZone = function (a) {\n\treturn new Phaser.ParticleStorm.Zones.Image(this.game, a);\n}, Phaser.ParticleStorm.prototype.update = function () {\n\tif (this.active) for (var a = 0; a < this.emitters.length; a++) {\n\t\tthis.emitters[a].enabled && !this.emitters[a].manualUpdate && this.emitters[a].update();\n\t}\n}, Phaser.ParticleStorm.Emitter = function (a, b, c, d) {\n\tthis.game = a.game, this.parent = a, this.renderer = null, this.renderType = null, this.graph = Phaser.ParticleStorm.Graph, this.enabled = !1, this.manualUpdate = !1, this.scrollSpeed = new Phaser.Point(), this.force = new Phaser.Point(), this.onEmit = null, this.onComplete = null, this.onKill = null, this.particleClass = Phaser.ParticleStorm.Particle, this.timer = this.game.time.create(!1), this.timerEvent = null, this.list = [], this.pool = [], this.batch = [], this.wells = [], this._rnd = new Phaser.Point(), this._step = new Phaser.Point(), this._pCount = 0, this._delay = { enabled: !1, start: 0, inc: 0, visible: !1 }, this.init(b, c, d);\n}, Phaser.ParticleStorm.Emitter.prototype = {\n\tinit: function init(a, b, c) {\n\t\tvoid 0 === a && (a = Phaser.ParticleStorm.SPRITE);\n\t\tvar d = this.game.width,\n\t\t    e = this.game.height;\n\t\tswitch (a) {\n\t\t\tcase Phaser.ParticleStorm.SPRITE:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.Sprite(this);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.PIXEL:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.Pixel(this, d, e);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.RENDERTEXTURE:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.RenderTexture(this, d, e);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.SPRITE_BATCH:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.SpriteBatch(this);\n\t\t\t\tbreak;\n\t\t\tcase Phaser.ParticleStorm.BITMAP_DATA:\n\t\t\t\tthis.renderer = new Phaser.ParticleStorm.Renderer.BitmapData(this, d, e);\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\treturn !1;\n\t\t}\n\t\tthis.renderType = a, b && this.force.set(b.x, b.y), c && this.scrollSpeed.set(c.x, c.y), this.list = [], this.pool = [], this.wells = [], this.enabled = !0;\n\t},\n\taddToWorld: function addToWorld(a) {\n\t\treturn void 0 === a && (a = this.game.world), this.renderer.addToWorld(a);\n\t},\n\tcreateGravityWell: function createGravityWell(a, b, c, d, e) {\n\t\tvar f = new Phaser.ParticleStorm.GravityWell(this, a, b, c, d, e);\n\t\treturn this.wells.push(f), f;\n\t},\n\tseed: function seed(a) {\n\t\tfor (var b = 0; a > b; b++) {\n\t\t\tvar c = new Phaser.ParticleStorm.Particle(this);\n\t\t\tthis.pool.push(c);\n\t\t}\n\t\treturn this;\n\t},\n\temitDelayed: function emitDelayed(a, b, c, d, e) {\n\t\treturn !this.enabled || !this.parent.dataList[b] || 0 >= a ? null : (this.timerEvent = this.timer.add(a, this.emit, this, b, c, d, e), this.timer.start(), this.timerEvent);\n\t},\n\temit: function emit(a, b, c, d) {\n\t\tif (!this.enabled || !this.parent.dataList[a]) return null;\n\t\tif (this.batch = [], this._pCount = 0, this._step.x = 0, this._step.y = 0, void 0 === b && (b = 0), void 0 === c && (c = 0), !d) return this.emitParticle(a, b, c, null);\n\t\tvar e = d.hasOwnProperty('total') ? d.total : 1;\n\t\tif (d.xStep > 0 ? this._step.x = d.xStep : this._step.x = 0, d.yStep > 0 ? this._step.y = d.yStep : this._step.y = 0, this._delay.enabled = !1, d.delay && (this._delay.enabled = !0, 'number' == typeof d.delay ? (this._delay.start = d.delay, this._delay.step = 0, this._delay.visible = !1) : (this._delay.start = d.delay.start ? d.delay.start : 0, this._delay.step = d.delay.step ? d.delay.step : 0, this._delay.visible = d.delay.visible ? !0 : !1)), d.zone) {\n\t\t\tif (void 0 === d.random && void 0 === d.full && void 0 === d.percent || d.random) d.zone.emit(this, a, b, c, e, d.setAlpha, d.setColor);else if (void 0 !== d.percent || void 0 === d.full && d.random) {\n\t\t\t\tif (void 0 !== d.percent) {\n\t\t\t\t\tvar f = 0;\n\t\t\t\t\t'number' == typeof d.percent ? f = d.percent : d.percent.hasOwnProperty('min') ? f = this.game.rnd.between(d.percent.min, d.percent.max) : d.percent.callback && (f = d.percent.callback.call(d.percent.context, this)), d.zone.emitPercent(this, a, b, c, e, f);\n\t\t\t\t}\n\t\t\t} else d.zone.emitFull(this, a, b, c, d.step, d.spacing, d.setAlpha, d.setColor);\n\t\t} else for (var g = 0; e > g; g++) {\n\t\t\tthis.emitParticle(a, b, c, null);\n\t\t}if (d.radiate) for (var h = 0; h < this.batch.length; h++) {\n\t\t\tthis.batch[h].radiate(d.radiate.velocity, d.radiate.from, d.radiate.to);\n\t\t} else if (d.radiateFrom) for (var h = 0; h < this.batch.length; h++) {\n\t\t\tthis.batch[h].radiateFrom(d.radiateFrom.x, d.radiateFrom.y, d.radiateFrom.velocity);\n\t\t}var i = d.hasOwnProperty('repeat') ? d.repeat : 0;\n\t\tif (0 !== i) {\n\t\t\tvar j = d.hasOwnProperty('frequency') ? d.frequency : 250;\n\t\t\tdelete d.repeat, -1 === i ? this.timerEvent = this.timer.loop(j, this.emit, this, a, b, c, d) : i > 0 && (this.timerEvent = this.timer.repeat(j, i, this.emit, this, a, b, c, d)), this.timer.start();\n\t\t}\n\t\treturn this._pCount = 0, this.batch;\n\t},\n\temitParticle: function emitParticle(a, b, c, d) {\n\t\tvar e = this.pool.pop();\n\t\treturn e || (e = new this.particleClass(this)), e.parent = d, Array.isArray(b) && (b = this.game.rnd.between(b[0], b[1])), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), b += this._step.x * this._pCount, c += this._step.y * this._pCount, e.reset(this.renderer, b, c, this.parent.dataList[a]), e.alive ? (!d && this._delay.enabled && (e.delay += this._delay.start + this._pCount * this._delay.step, e.delayVisible = this._delay.visible), this.list.push(e), this.batch.push(e), d || this._pCount++) : (e.kill(), this.onKill && this.onKill.dispatch(this, e), this.pool.push(e)), e;\n\t},\n\tupdate: function update() {\n\t\tvar a = this.game.time.elapsed;\n\t\tthis.renderer.preUpdate();\n\t\tfor (var b = this.list.length - 1; b >= 0; b--) {\n\t\t\tvar c = this.list[b];\n\t\t\tc.ignoreScrollSpeed || (c.transform.x += this.scrollSpeed.x, c.transform.y += this.scrollSpeed.y);\n\t\t\tfor (var d = 0; d < this.wells.length; d++) {\n\t\t\t\tthis.wells[d].active && this.wells[d].step(c);\n\t\t\t}c.step(a, this.force) || (c.kill(), this.pool.push(c), this.list.splice(b, 1));\n\t\t}\n\t\treturn this.renderer.postUpdate(), this.list.length;\n\t},\n\tupdateFrequency: function updateFrequency(a, b, c, d) {\n\t\tif (a.at) {\n\t\t\tfor (var e = 0, f = 0; f < a.at.length; f++) {\n\t\t\t\tvar g = a.at[f];\n\t\t\t\t(g.time > c || 0 === g.time && 0 === c) && g.time <= d && (g.value > 0 && g.value < 1 ? Math.random() < g.value && (e += 1) : e += g.value);\n\t\t\t}\n\t\t\treturn e;\n\t\t}\n\t\treturn this.graph.getParamArea(a, c, d) * b;\n\t},\n\tforEach: function forEach(a, b) {\n\t\tif (arguments.length <= 2) for (var c = 0; c < this.list.length; c++) {\n\t\t\ta.call(b, this.list[c]);\n\t\t} else {\n\t\t\tfor (var d = [null], c = 2; c < arguments.length; c++) {\n\t\t\t\td.push(arguments[c]);\n\t\t\t}for (var c = 0; c < this.list.length; c++) {\n\t\t\t\td[0] = this.list[c], a.apply(b, d);\n\t\t\t}\n\t\t}\n\t},\n\tforEachNew: function forEachNew(a, b) {\n\t\tif (0 !== this.batch.length) if (arguments.length <= 2) for (var c = 0; c < this.batch.length; c++) {\n\t\t\ta.call(b, this.batch[c]);\n\t\t} else {\n\t\t\tfor (var d = [null], c = 2; c < arguments.length; c++) {\n\t\t\t\td.push(arguments[c]);\n\t\t\t}for (var c = 0; c < this.batch.length; c++) {\n\t\t\t\td[0] = this.batch[c], a.apply(b, d);\n\t\t\t}\n\t\t}\n\t},\n\tgetParticle: function getParticle(a) {\n\t\treturn void 0 === a && (a = 0), this.list[a] ? this.list[a] : null;\n\t},\n\tdebug: function debug(a, b) {\n\t\tvar c = this.game.debug;\n\t\tif (c) {\n\t\t\tc.start(a + 4, b + 16, 'rgb(255, 255, 255)', 132), c.context.fillStyle = 'rgba(0, 74, 128, 0.5)', c.context.fillRect(a, b, 360, 70);\n\t\t\tvar d = this.force.x + '',\n\t\t\t    e = this.force.y + '';\n\t\t\tc.line('Force:', d.substr(0, 8), e.substr(0, 8)), c.line('Scroll Speed:', this.scrollSpeed.x, this.scrollSpeed.y), c.line('Alive:', 'Dead:', 'Total:'), c.line(this.alive, this.dead, this.total), c.stop();\n\t\t}\n\t},\n\tdestroy: function destroy() {\n\t\tthis.renderer.clear && this.renderer.clear(), this.renderer.destroy(), this.renderer = null;\n\t\tfor (var a = this.list.length - 1; a >= 0; a--) {\n\t\t\tthis.list[a].kill(), this.list.splice(a, 1);\n\t\t}this.list = [], this.pool = [], this.batch = [], this.wells = [];\n\t}\n}, Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'paused', {\n\tget: function get() {\n\t\treturn !this.enabled;\n\t},\n\tset: function set(a) {\n\t\tthis.enabled = !a;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'total', {\n\tget: function get() {\n\t\treturn this.alive + this.dead;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'alive', {\n\tget: function get() {\n\t\treturn this.list.length;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Emitter.prototype, 'dead', {\n\tget: function get() {\n\t\treturn this.pool.length;\n\t}\n}), Phaser.ParticleStorm.Emitter.prototype.constructor = Phaser.ParticleStorm.Emitter, Phaser.ParticleStorm.Particle = function (a) {\n\tthis.emitter = a, this.renderer = null, this.graph = Phaser.ParticleStorm.Graph, this.transform = new Phaser.ParticleStorm.Controls.Transform(this), this.color = new Phaser.ParticleStorm.Controls.Color(this), this.texture = new Phaser.ParticleStorm.Controls.Texture(this), this.parent = null, this.lifespan = 2e3, this.keepAlive = !1, this.delay = 0, this.delayVisible = !1, this.life = 0, this.sprite = null, this.visible = !1, this.isComplete = !1, this.ignoreForce = !1, this.ignoreScrollSpeed = !1, this.emit = {}, this._age = 0, this._lastPercent = 0, this._numToEmit = 0;\n}, Phaser.ParticleStorm.Particle.prototype = {\n\treset: function reset(a, b, c, d) {\n\t\treturn this.renderer = a, this.transform.reset(), this.color.reset(), this.texture.reset(), this.emit = Object.create(Phaser.ParticleStorm.BASE_EMIT), this.isComplete = !1, this.keepAlive = !1, this.delay = 0, this.delayVisible = !1, this.ignoreForce = !1, this.ignoreScrollSpeed = !1, this.alive = !1, this.lifespan = 2e3, this.life = 0, this.visible = !1, this._age = 0, this._lastPercent = 0, this._numToEmit = 0, void 0 !== d && this.create(b, c, d), this;\n\t},\n\tcreate: function create(a, b, c) {\n\t\tif (c.hasOwnProperty('lifespan') && (this.lifespan = this.graph.getMinMax(c.lifespan)), this.keepAlive = c.keepAlive, c.hasOwnProperty('delay') && (this.delay = this.graph.getMinMax(c.delay)), this.ignoreForce = c.ignoreForce, this.ignoreScrollSpeed = c.ignoreScrollSpeed, this.transform.init(a, b, c), this.color.init(c), this.texture.init(c), c.emit && (this.emit = Object.create(c.emit)), this.visible = c.visible === !1 ? !1 : !0, this.alive = !0, this.parent && this.parent.emit && this.parent.emit.inherit && (this.alive = this.onInherit(this.parent)), this.alive) {\n\t\t\tthis.transform.step(), this.color.step();\n\t\t\tvar d = this.renderer.add(this);\n\t\t\td && this.texture.step(c, d), this.onEmit(), this.emitter.onEmit && this.emitter.onEmit.dispatch(this.emitter, this), this.renderer.update(this);\n\t\t}\n\t\treturn this;\n\t},\n\tstep: function step(a, b) {\n\t\tif (this._age += a, this.delay) {\n\t\t\tif (this._age < this.delay) return this.renderer.update(this), !0;\n\t\t\tthis.delay = 0, this._age = 0;\n\t\t}\n\t\tif (this._lastPercent = this.life, this.lifespan > 0 && (this.life = Math.min(this._age / this.lifespan, 1)), b && !this.ignoreForce && (this.transform.velocity.x.value += b.x, this.transform.velocity.y.value += b.y), this.transform.step(), this.color.step(), this.onUpdate(), this.alive) {\n\t\t\tfor (this._numToEmit += this.emitter.updateFrequency(this.emit, a, this._lastPercent, this.life); this._numToEmit >= 1;) {\n\t\t\t\tthis.emitChild();\n\t\t\t}this.renderer.update(this);\n\t\t}\n\t\treturn this.isComplete || 1 !== this.life || (this.isComplete = !0, this.emitter.onComplete && this.emitter.onComplete.dispatch(this.emitter, this)), this.life < 1 || this.keepAlive;\n\t},\n\temitChild: function emitChild() {\n\t\tvar a = 0 | this.graph.getMinMax(this.emit.offsetX),\n\t\t    b = 0 | this.graph.getMinMax(this.emit.offsetY);\n\t\tif (this.emit.rect) {\n\t\t\tvar c = this.emit.rect;\n\t\t\ta = Math.random() * c.width + c.x, b = Math.random() * c.height + c.y;\n\t\t} else if (this.emit.circle) {\n\t\t\tvar d = this.emit.circle;\n\t\t\tb = Math.random() * d * 2 - d;\n\t\t\tvar e = Math.sqrt(d * d - b * b);\n\t\t\ta = Math.random() * e * 2 - e;\n\t\t}\n\t\tvar f = this.emit.name;\n\t\tif ('string' != typeof f && (f = this.getChildKey(this.emit.name)), f) {\n\t\t\tvar g = this.emitter.emitParticle(f, this.transform.x + a, this.transform.y + b, this);\n\t\t\tg && this.emit.overwrite && this.applyOverwrite(this.emit.overwrite, g);\n\t\t}\n\t\tthis._numToEmit -= 1;\n\t},\n\tapplyOverwrite: function applyOverwrite(a, b) {\n\t\treturn b;\n\t},\n\tgetChildKey: function getChildKey(a) {\n\t\tif (Array.isArray(a)) return this.emitter.game.rnd.pick(a);\n\t\tif (void 0 !== a.at && a.at.length > 0) {\n\t\t\tfor (var b = a.at[0].value, c = 0; c < a.at.length && !(a.at[c].time > this.life); c++) {\n\t\t\t\tb = a.at[c].value;\n\t\t\t}return b;\n\t\t}\n\t\treturn null;\n\t},\n\tradiate: function radiate(a, b, c) {\n\t\tvoid 0 === c && void 0 !== b ? c = b : (void 0 === b && (b = 0), void 0 === c && (c = 359));\n\t\tvar d = a;\n\t\ta.hasOwnProperty('min') ? d = this.graph.getMinMax(a) : Array.isArray(a) && (d = parseFloat(this.emitter.game.rnd.pick(a), 10));\n\t\tvar e = (Math.random() * (c - b) + b) * Math.PI / 180;\n\t\treturn this.transform.velocity.x.value = Math.sin(e) * d, this.transform.velocity.y.value = -Math.cos(e) * d, this;\n\t},\n\tradiateFrom: function radiateFrom(a, b, c) {\n\t\tvar d = c;\n\t\tc.hasOwnProperty('min') ? d = this.graph.getMinMax(c) : Array.isArray(c) && (d = parseFloat(this.emitter.game.rnd.pick(c), 10));\n\t\tvar e = this.transform.x - a,\n\t\t    f = this.transform.y - b,\n\t\t    g = Math.sqrt(e * e + f * f);\n\t\treturn this.transform.velocity.x.value = e * d / g, this.transform.velocity.y.value = f * d / g, this;\n\t},\n\ttarget: function target(a) {\n\t\tvar b = 0,\n\t\t    c = 0,\n\t\t    d = this.transform;\n\t\tif (a.x && (b = a.x), a.y && (c = a.y), a.zone) {\n\t\t\tvar e = a.zone.getRandom();\n\t\t\tb += e.x, c += e.y;\n\t\t}\n\t\tvar f = Math.atan2(c - d.y, b - d.x),\n\t\t    g = d.x - b,\n\t\t    h = d.y - c,\n\t\t    i = Math.sqrt(g * g + h * h) / (this.lifespan / 1e3),\n\t\t    j = Math.cos(f) * i * d.time.physicsElapsed,\n\t\t    k = Math.sin(f) * i * d.time.physicsElapsed;\n\t\treturn a.speed ? (this.graph.fromControl({ value: 2 * j, control: a.speed }, d.velocity.x), this.graph.fromControl({ value: 2 * k, control: a.speed }, d.velocity.y)) : (d.velocity.x.value = j, d.velocity.y.value = k), this;\n\t},\n\tsetLife: function setLife(a, b) {\n\t\treturn this.lifespan = this.graph.getMinMax(a), this.life = 0, this._age = 0, this._lastPercent = 0, this.isComplete = !1, this.keepAlive = b, this;\n\t},\n\tkill: function kill() {\n\t\tthis.alive = !1, this.renderer.kill(this), this.onKill();\n\t},\n\tonEmit: function onEmit() {},\n\tonUpdate: function onUpdate() {},\n\tonInherit: function onInherit() {\n\t\treturn !0;\n\t},\n\tonKill: function onKill() {}\n}, Object.defineProperty(Phaser.ParticleStorm.Particle.prototype, 'lifePercent', {\n\tget: function get() {\n\t\treturn Math.round(100 * this.life);\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.Particle.prototype, 'frequency', {\n\tget: function get() {\n\t\treturn this.emit.value;\n\t},\n\tset: function set(a) {\n\t\tthis.emit.value = a;\n\t}\n}), Phaser.ParticleStorm.Particle.prototype.constructor = Phaser.ParticleStorm.Particle, Phaser.ParticleStorm.GravityWell = function (a, b, c, d, e, f) {\n\tvoid 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 100), void 0 === f && (f = 50), this.emitter = a, this.time = a.game.time, this.position = new Phaser.Point(b, c), this.active = !0, this._gravity = f, this._power = 0, this._epsilon = 0, this.power = d, this.epsilon = e;\n}, Phaser.ParticleStorm.GravityWell.prototype = {\n\tstep: function step(a) {\n\t\tvar b = this.position.x - a.transform.x,\n\t\t    c = this.position.y - a.transform.y,\n\t\t    d = b * b + c * c;\n\t\tif (0 !== d) {\n\t\t\tvar e = Math.sqrt(d);\n\t\t\td < this._epsilon && (d = this._epsilon);\n\t\t\tvar f = this._power * this.time.elapsed / (d * e);\n\t\t\ta.transform.velocity.x.value += b * f, a.transform.velocity.y.value += c * f;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'epsilon', {\n\tget: function get() {\n\t\treturn Math.sqrt(this._epsilon);\n\t},\n\tset: function set(a) {\n\t\tthis._epsilon = a * a;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'power', {\n\tget: function get() {\n\t\treturn this._power / this.gravity;\n\t},\n\tset: function set(a) {\n\t\tthis._power = a * this.gravity;\n\t}\n}), Object.defineProperty(Phaser.ParticleStorm.GravityWell.prototype, 'gravity', {\n\tget: function get() {\n\t\treturn this._gravity;\n\t},\n\tset: function set(a) {\n\t\tvar b = this.power;\n\t\tthis._gravity = a, this.power = b;\n\t}\n}), Phaser.ParticleStorm.GravityWell.prototype.constructor = Phaser.ParticleStorm.GravityWell, Phaser.ParticleStorm.Graph = {\n\tCONTROL_LINEAR: [{ x: 0, y: 1 }, { x: 1, y: 0 }],\n\tCONTROL_REVERSE: [{ x: 0, y: 0 }, { x: 1, y: 1 }],\n\tCONTROL_YOYO: [{ x: 0, y: 0 }, { x: 0.5, y: 1 }, { x: 1, y: 0 }],\n\tgetControlValue: function getControlValue(a, b) {\n\t\tvar c = 0,\n\t\t    d = a[c];\n\t\tif (d.x === b) return d.y;\n\t\tfor (; d.x <= b;) {\n\t\t\tif (c >= a.length - 1) return d.x;\n\t\t\td = a[++c];\n\t\t}\n\t\tvar e = a[c - 1];\n\t\treturn e.y + (b - e.x) * (d.y - e.y) / (d.x - e.x);\n\t},\n\tgetControlValues: function getControlValues(a, b, c) {\n\t\tvar d = Phaser.ParticleStorm.Graph.getControlValue(a, b),\n\t\t    e = [{ x: b, y: d }];\n\t\tif (b >= c) return e;\n\t\tfor (var f = 0; f < a.length; f++) {\n\t\t\tif (a[f].x > b) {\n\t\t\t\tif (!(a[f].x < c)) break;\n\t\t\t\te.push(a[f]);\n\t\t\t}\n\t\t}return e.push({ x: c, y: Phaser.ParticleStorm.Graph.getControlValue(a, c) }), e;\n\t},\n\tgetParamArea: function getParamArea(a, b, c) {\n\t\treturn a.control ? a.value * Phaser.ParticleStorm.Graph.getControlArea(a.control, b, c) : a.value;\n\t},\n\tgetControlArea: function getControlArea(a, b, c) {\n\t\tvar d = Phaser.ParticleStorm.Graph.getControlValues(a, b, c);\n\t\tif (b >= c) return d[0].y;\n\t\tfor (var e = d.length > 1 ? 0 : d.y, f = d[0], g = 1; g < d.length; g++) {\n\t\t\tvar h = d[g];\n\t\t\te += 0.5 * (h.x - f.x) * (f.y + h.y), f = h;\n\t\t}\n\t\treturn e;\n\t},\n\tgetMinMaxInitial: function getMinMaxInitial(a) {\n\t\treturn void 0 !== a.initial ? Phaser.ParticleStorm.Graph.getMinMax(a.initial) : 0;\n\t},\n\tisNumeric: function isNumeric(a) {\n\t\treturn !isNaN(parseFloat(a)) && isFinite(a);\n\t},\n\tgetMinMax: function getMinMax(a) {\n\t\treturn void 0 !== a && null !== a && void 0 !== a.min && void 0 !== a.max ? a.min + Math.random() * (a.max - a.min) : a;\n\t},\n\tclone: function clone(a, b) {\n\t\treturn b.value = a.value, b.initial = a.initial, b.delta = a.delta, b.offset = a.offset, b.min = a.min, b.max = a.max, b.control = a.control, b;\n\t},\n\tfromControl: function fromControl(a, b) {\n\t\tvoid 0 !== a.value && (b.value = Phaser.ParticleStorm.Graph.getMinMax(a.value)), a.control && ('linear' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_LINEAR : 'reverse' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_REVERSE : 'yoyo' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_YOYO : b.control = a.control);\n\t},\n\tfromData: function fromData(a, b) {\n\t\treturn void 0 === a || null === a ? !1 : 'number' == typeof a ? (b.value = a, !0) : (void 0 !== a.min ? b.value = Phaser.ParticleStorm.Graph.getMinMax(a) : void 0 !== a.value && (b.value = Phaser.ParticleStorm.Graph.getMinMax(a.value)), void 0 !== a.initial && (b.initial = Phaser.ParticleStorm.Graph.getMinMax(a.initial)), void 0 !== a.delta && (b.delta = Phaser.ParticleStorm.Graph.getMinMax(a.delta)), void 0 !== a.offset && (b.offset = Phaser.ParticleStorm.Graph.getMinMax(a.offset)), a.control && ('linear' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_LINEAR : 'reverse' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_REVERSE : 'yoyo' === a.control ? b.control = Phaser.ParticleStorm.Graph.CONTROL_YOYO : b.control = a.control), !0);\n\t},\n\tgetValue: function getValue(a, b) {\n\t\tif (!a.control || void 0 === b) return a.value;\n\t\tvar c = a.control[0];\n\t\tif (c.x === b) return c.y;\n\t\tvar d = a.control.length - 1,\n\t\t    e = a.control[d];\n\t\tif (e.x === b) return e.y;\n\t\tfor (d = 0; c.x <= b;) {\n\t\t\tif (d >= a.control.length - 1) return c.y;\n\t\t\tc = a.control[++d];\n\t\t}\n\t\tvar f = a.control[d - 1];\n\t\treturn a.value * (f.y + (b - f.x) * (c.y - f.y) / (c.x - f.x));\n\t},\n\tgetClampedValue: function getClampedValue(a, b) {\n\t\treturn Phaser.Math.clamp(Math.floor(a.initial + this.getValue(a, b)), a.min, a.max);\n\t}\n}, Phaser.ParticleStorm.Zones = {}, Phaser.ParticleStorm.Zones.Base = function (a) {\n\tthis.game = a, this.active = !0, this.scale = new Phaser.Point(1, 1), this.alphaThreshold = 0, this._rnd = new Phaser.Point();\n}, Phaser.ParticleStorm.Zones.Base.prototype = {\n\tgetRandom: function getRandom() {\n\t\treturn this.shape === Phaser.Point ? this._rnd = this.shape : this.shape.random(this._rnd), this._rnd.x *= this.scale.x, this._rnd.y *= this.scale.y, this._rnd;\n\t},\n\temit: function emit(a, b, c, d, e) {\n\t\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\t\tfor (var f = null, g = 0; e > g; g++) {\n\t\t\tthis.shape.random(this._rnd), f = a.emitParticle(b, c + this._rnd.x * this.scale.x, d + this._rnd.y * this.scale.y, null);\n\t\t}return f;\n\t}\n}, Phaser.ParticleStorm.Zones.Base.prototype.constructor = Phaser.ParticleStorm.Zones.Base, Phaser.ParticleStorm.Zones.Point = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Point(b, c);\n}, Phaser.ParticleStorm.Zones.Point.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Point.prototype.constructor = Phaser.ParticleStorm.Zones.Point, Phaser.ParticleStorm.Zones.Rectangle = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Rectangle(0, 0, b, c);\n}, Phaser.ParticleStorm.Zones.Rectangle.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Rectangle.prototype.constructor = Phaser.ParticleStorm.Zones.Rectangle, Phaser.ParticleStorm.Zones.Circle = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Circle(0, 0, 2 * b);\n}, Phaser.ParticleStorm.Zones.Circle.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Circle.prototype.constructor = Phaser.ParticleStorm.Zones.Circle, Phaser.ParticleStorm.Zones.Ellipse = function (a, b, c) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Ellipse(0, 0, b, c);\n}, Phaser.ParticleStorm.Zones.Ellipse.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Ellipse.prototype.constructor = Phaser.ParticleStorm.Zones.Ellipse, Phaser.ParticleStorm.Zones.Line = function (a, b, c, d, e) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.shape = new Phaser.Line(b, c, d, e);\n}, Phaser.ParticleStorm.Zones.Line.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Line.prototype.constructor = Phaser.ParticleStorm.Zones.Line, Phaser.ParticleStorm.Zones.Spline = function (a, b, c, d, e) {\n\tvoid 0 === b && (b = 0), void 0 === c && (c = 1e3), void 0 === d && (d = !0), Phaser.ParticleStorm.Zones.Base.call(this, a), this.math = this.game.math, this.points = { x: [], y: [] }, this.path = [], this.resolution = c, this.mode = b, this.closed = d, this.mult = 0, this.update(e);\n}, Phaser.ParticleStorm.Zones.Spline.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Spline.prototype.constructor = Phaser.ParticleStorm.Zones.Spline, Phaser.ParticleStorm.Zones.Spline.prototype.update = function (a) {\n\tthis.points = { x: [], y: [] }, this.path = [];\n\tfor (var b = 0; b < a.length; b++) {\n\t\tthis.points.x.push(a[b].x), this.points.y.push(a[b].y);\n\t}this.closed && (this.points.x.push(a[0].x), this.points.y.push(a[0].y));\n\tfor (var c = 0, d = 1 / this.resolution, b = 0; 1 >= b; b += d) {\n\t\tif (0 === this.mode) var e = this.math.linearInterpolation(this.points.x, b),\n\t\t    f = this.math.linearInterpolation(this.points.y, b);else if (1 === this.mode) var e = this.math.bezierInterpolation(this.points.x, b),\n\t\t    f = this.math.bezierInterpolation(this.points.y, b);else if (2 === this.mode) var e = this.math.catmullRomInterpolation(this.points.x, b),\n\t\t    f = this.math.catmullRomInterpolation(this.points.y, b);\n\t\tvar g = { x: e, y: f, angle: 0 };\n\t\tc > 0 && (g.angle = this.math.angleBetweenPoints(this.path[c - 1], g)), this.path.push(g), c++;\n\t}\n\treturn this.mult = this.path.length / 100, this;\n}, Phaser.ParticleStorm.Zones.Spline.prototype.getRandom = function () {\n\treturn this.game.rnd.pick(this.path);\n}, Phaser.ParticleStorm.Zones.Spline.prototype.emit = function (a, b, c, d, e) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var f = null, g = null, h = 0; e > h; h++) {\n\t\tf = this.game.rnd.pick(this.path), g = a.emitParticle(b, c + f.x, d + f.y);\n\t}return g;\n}, Phaser.ParticleStorm.Zones.Spline.prototype.emitPercent = function (a, b, c, d, e, f) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tvar g = null;\n\tf = Math.floor(f * this.mult);\n\tfor (var h = 0; e > h; h++) {\n\t\tvar i = this.path[f];\n\t\ti && (g = a.emitParticle(b, c + i.x, d + i.y));\n\t}\n\treturn g;\n}, Phaser.ParticleStorm.Zones.Text = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.bmd = new Phaser.BitmapData(a, 'ParticleStorm.Text'), this.text = b, this.points = [], this.update(b);\n}, Phaser.ParticleStorm.Zones.Text.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Text.prototype.constructor = Phaser.ParticleStorm.Zones.Text, Phaser.ParticleStorm.Zones.Text.prototype.update = function (a) {\n\tvoid 0 !== a ? this.text = a : a = this.text;\n\tvar b = a.x,\n\t    c = a.y,\n\t    d = a.scale.x,\n\t    e = a.scale.y;\n\treturn a.x = 0, a.y = 0, a.scale.set(1), this.points = [], this.bmd.load(a), this.bmd.processPixelRGB(this.addPixel, this), this.scale = new Phaser.Point(d, e), a.x = b, a.y = c, a.scale.set(d, e), this;\n}, Phaser.ParticleStorm.Zones.Text.prototype.addPixel = function (a, b, c) {\n\treturn a.a > this.alphaThreshold && this.points.push({\n\t\tx: b,\n\t\ty: c,\n\t\tcolor: { r: a.r, g: a.g, b: a.b, a: a.a / 255 }\n\t}), !1;\n}, Phaser.ParticleStorm.Zones.Text.prototype.getRandom = function () {\n\tvar a = this.game.rnd.pick(this.points);\n\treturn a.x *= this.scale.x, a.y *= this.scale.y, a;\n}, Phaser.ParticleStorm.Zones.Text.prototype.emit = function (a, b, c, d, e, f, g) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var h = null, i = null, j = 0; e > j; j++) {\n\t\th = this.game.rnd.pick(this.points), i = a.emitParticle(b, c + h.x * this.scale.x, d + h.y * this.scale.y), i && (f && h.color.a < 1 && (i.color.alpha.value = h.color.a), g && i.color.setColor(h.color.r, h.color.g, h.color.b, h.color.a));\n\t}return i;\n}, Phaser.ParticleStorm.Zones.Text.prototype.emitFull = function (a, b, c, d, e, f, g, h) {\n\tvoid 0 === e && (e = 1);\n\tvar i = 1,\n\t    j = 1;\n\tArray.isArray(f) ? (i = f[0], j = f[1]) : 'number' == typeof f && (i = f, j = f), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var k = null, l = null, m = 0; m < this.points.length; m += e) {\n\t\tk = this.points[m];\n\t\tvar n = c + k.x * this.scale.x * (i / e),\n\t\t    o = d + k.y * this.scale.y * (j / e);\n\t\tl = a.emitParticle(b, n, o), l && (g && k.color.a < 1 && (l.color.alpha.value = k.color.a), h && l.color.setColor(k.color.r, k.color.g, k.color.b, k.color.a));\n\t}\n\treturn l;\n}, Phaser.ParticleStorm.Zones.Image = function (a, b) {\n\tPhaser.ParticleStorm.Zones.Base.call(this, a), this.bmd = new Phaser.BitmapData(a, 'ParticleStorm.Image'), this.key = b, this.points = [], this.update(b);\n}, Phaser.ParticleStorm.Zones.Image.prototype = Object.create(Phaser.ParticleStorm.Zones.Base.prototype), Phaser.ParticleStorm.Zones.Image.prototype.constructor = Phaser.ParticleStorm.Zones.Image, Phaser.ParticleStorm.Zones.Image.prototype.update = function (a) {\n\treturn void 0 === a && (a = this.key), this.points = [], this.bmd.load(a), this.bmd.processPixelRGB(this.addPixel, this), this;\n}, Phaser.ParticleStorm.Zones.Image.prototype.addPixel = function (a, b, c) {\n\treturn a.a > this.alphaThreshold && this.points.push({\n\t\tx: b,\n\t\ty: c,\n\t\tcolor: { r: a.r, g: a.g, b: a.b, a: a.a / 255 }\n\t}), !1;\n}, Phaser.ParticleStorm.Zones.Image.prototype.getRandom = function () {\n\tvar a = this.game.rnd.pick(this.points);\n\treturn a.x *= this.scale.x, a.y *= this.scale.y, a;\n}, Phaser.ParticleStorm.Zones.Image.prototype.emit = function (a, b, c, d, e, f, g) {\n\tArray.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var h = null, i = null, j = 0; e > j; j++) {\n\t\th = this.game.rnd.pick(this.points), i = a.emitParticle(b, c + h.x * this.scale.x, d + h.y * this.scale.y), i && (f && h.color.a < 1 && (i.color.alpha.value = h.color.a), g && i.color.setColor(h.color.r, h.color.g, h.color.b, h.color.a));\n\t}return i;\n}, Phaser.ParticleStorm.Zones.Image.prototype.emitFull = function (a, b, c, d, e, f, g, h) {\n\tvoid 0 === e && (e = 1);\n\tvar i = 1,\n\t    j = 1;\n\tArray.isArray(f) ? (i = f[0], j = f[1]) : 'number' == typeof f && (i = f, j = f), Array.isArray(c) && (c = this.game.rnd.between(c[0], c[1])), Array.isArray(d) && (d = this.game.rnd.between(d[0], d[1]));\n\tfor (var k = null, l = null, m = 0; m < this.points.length; m += e) {\n\t\tk = this.points[m];\n\t\tvar n = c + k.x * this.scale.x * (i / e),\n\t\t    o = d + k.y * this.scale.y * (j / e);\n\t\tl = a.emitParticle(b, n, o), l && (g && k.color.a < 1 && (l.color.alpha.value = k.color.a), h && l.color.setColor(k.color.r, k.color.g, k.color.b, k.color.a));\n\t}\n\treturn l;\n}, Phaser.ParticleStorm.Controls.Texture = function (a) {\n\tthis.particle = a, this.rnd = a.emitter.game.rnd, this.graph = Phaser.ParticleStorm.Graph, this.sendToBack = !1, this.bringToTop = !0, this.key = null, this.frame = void 0, this.frameName = void 0, this.scaleMode = Phaser.scaleModes.DEFAULT;\n}, Phaser.ParticleStorm.Controls.Texture.prototype = {\n\treset: function reset() {\n\t\tthis.sendToBack = !1, this.bringToTop = !0, this.key = '__default', this.frame = void 0, this.frameName = void 0, this.scaleMode = Phaser.scaleModes.DEFAULT;\n\t},\n\tinit: function init(a) {\n\t\tif (a.sendToBack ? this.sendToBack = a.sendToBack : a.bringToTop && (this.bringToTop = a.bringToTop), a.image && (Array.isArray(a.image) ? this.key = this.rnd.pick(a.image) : this.key = a.image), void 0 !== a.frame) {\n\t\t\tvar b = a.frame;\n\t\t\tArray.isArray(a.frame) && (b = this.rnd.pick(a.frame)), this.graph.isNumeric(b) ? this.frame = b : this.frameName = b;\n\t\t}\n\t\tif (a.scaleMode) {\n\t\t\tvar c = a.scaleMode.toUpperCase();\n\t\t\t'LINEAR' === c ? this.scaleMode = Phaser.scaleModes.LINEAR : 'NEAREST' === c && (this.scaleMode = Phaser.scaleModes.NEAREST);\n\t\t}\n\t},\n\tstep: function step(a, b) {\n\t\tif (this.particle.emitter.renderType === Phaser.ParticleStorm.SPRITE && void 0 !== a.animations) {\n\t\t\tvar c = [];\n\t\t\tfor (var d in a.animations) {\n\t\t\t\tvar e = a.animations[d],\n\t\t\t\t    f = null,\n\t\t\t\t    g = !0;\n\t\t\t\tvoid 0 !== e.frames && (f = Array.isArray(e.frames) ? e.frames : Phaser.Animation.generateFrameNames(e.frames.prefix, e.frames.start, e.frames.stop, e.frames.suffix, e.frames.zeroPad), 'string' == typeof f[0] && (g = !1));\n\t\t\t\tvar h = void 0 === e.frameRate ? 60 : e.frameRate,\n\t\t\t\t    i = void 0 === e.loop ? !1 : e.loop;\n\t\t\t\tb.animations.add(d, f, h, i, g), c.push(d);\n\t\t\t}\n\t\t\tc.length > 0 && (void 0 !== a.play ? b.play(this.rnd.pick(c)) : b.play(c[0]));\n\t\t}\n\t\tthis.sendToBack ? b.sendToBack() : this.bringToTop && b.bringToTop();\n\t}\n}, Phaser.ParticleStorm.Controls.Texture.prototype.constructor = Phaser.ParticleStorm.Controls.Texture, Phaser.ParticleStorm.Controls.Color = function (a) {\n\tthis.particle = a, this.graph = Phaser.ParticleStorm.Graph, this.red = {}, this.green = {}, this.blue = {}, this.alpha = {}, this.hsv = {}, this.hsvData = this.particle.emitter.parent.hsv, this.tint = 0, this.isTinted = !1, this.rgba = 'rgba(0, 0, 0, 1)', this.blendMode = this.particle.emitter.parent.blendModeMap.NORMAL;\n}, Phaser.ParticleStorm.Controls.Color.prototype = {\n\treset: function reset() {\n\t\tthis.red = Object.create(Phaser.ParticleStorm.BASE_255), this.green = Object.create(Phaser.ParticleStorm.BASE_255), this.blue = Object.create(Phaser.ParticleStorm.BASE_255), this.alpha = Object.create(Phaser.ParticleStorm.BASE_1), this.tint = 16777215, this.isTinted = !1, this.isHSV = !1, this.hsv = Object.create(Phaser.ParticleStorm.BASE_359), this.rgba = 'rgba(0, 0, 0, 1)', this.blendMode = this.particle.emitter.parent.blendModeMap.NORMAL;\n\t},\n\tinit: function init(a) {\n\t\tvar b = !1;\n\t\ta.hasOwnProperty('hsv') ? ('number' == typeof a.hsv ? this.hsv.value = a.hsv : this.graph.fromData(a.hsv, this.hsv), b = !0, this.isHSV = !0) : (a.hasOwnProperty('red') && ('number' == typeof a.red ? this.red.value = a.red : this.graph.fromData(a.red, this.red), b = !0), a.hasOwnProperty('green') && ('number' == typeof a.green ? this.green.value = a.green : this.graph.fromData(a.green, this.green), b = !0), a.hasOwnProperty('blue') && ('number' == typeof a.blue ? this.blue.value = a.blue : this.graph.fromData(a.blue, this.blue), b = !0)), a.hasOwnProperty('alpha') && ('number' == typeof a.alpha ? this.alpha.value = a.alpha : this.graph.fromData(a.alpha, this.alpha)), this.red.value = Phaser.Math.clamp(this.red.value, 0, 255), this.green.value = Phaser.Math.clamp(this.green.value, 0, 255), this.blue.value = Phaser.Math.clamp(this.blue.value, 0, 255), this.alpha.value = Phaser.Math.clamp(this.alpha.value, 0, 1), this.hsv.value = Phaser.Math.clamp(this.hsv.value, 0, 359), this.particle.emitter.renderType !== Phaser.ParticleStorm.PIXEL && (this.isTinted = b), a.blendMode && (this.blendMode = this.particle.emitter.parent.blendModeMap[a.blendMode.toUpperCase()]);\n\t},\n\tstep: function step() {\n\t\tvar a = this.particle.life;\n\t\tthis.isHSV ? (this.hsv.value += this.hsv.delta, this.hsv.calc = Phaser.Math.clamp(Math.floor(this.hsv.initial + this.graph.getValue(this.hsv, a)), 0, 359), this.red.value = this.hsvData[this.hsv.calc].r, this.green.value = this.hsvData[this.hsv.calc].g, this.blue.value = this.hsvData[this.hsv.calc].b) : (this.red.value += this.red.delta, this.green.value += this.green.delta, this.blue.value += this.blue.delta), this.red.calc = this.graph.getClampedValue(this.red, a), this.green.calc = this.graph.getClampedValue(this.green, a), this.blue.calc = this.graph.getClampedValue(this.blue, a), this.isTinted && (this.tint = this.red.calc << 16 | this.green.calc << 8 | this.blue.calc), this.alpha.value += this.alpha.delta, this.alpha.calc = Phaser.Math.clamp(this.alpha.initial + this.graph.getValue(this.alpha, a), 0, 1), this.rgba = 'rgba(' + this.red.calc + ',' + this.green.calc + ',' + this.blue.calc + ',' + this.alpha.calc + ')';\n\t},\n\tsetColor: function setColor(a, b, c, d) {\n\t\tthis.red.value = a, this.green.value = b, this.blue.value = c, this.alpha.value = d, this.particle.emitter.renderType !== Phaser.ParticleStorm.PIXEL && (this.isTinted = !0), this.step();\n\t}\n}, Phaser.ParticleStorm.Controls.Color.prototype.constructor = Phaser.ParticleStorm.Controls.Color, Phaser.ParticleStorm.Controls.Transform = function (a) {\n\tthis.particle = a, this.time = a.emitter.game.time, this.graph = Phaser.ParticleStorm.Graph, this.x = 0, this.y = 0, this.velocity = { x: null, y: null, facing: null }, this.acceleration = { x: null, y: null, facing: null }, this.scale = { x: null, y: null }, this.rotation = {}, this.anchor = new Phaser.Point();\n}, Phaser.ParticleStorm.Controls.Transform.prototype = {\n\treset: function reset() {\n\t\tthis.velocity.x = Object.create(Phaser.ParticleStorm.BASE), this.velocity.y = Object.create(Phaser.ParticleStorm.BASE), this.velocity.facing = Object.create(Phaser.ParticleStorm.BASE_NULL), this.acceleration.x = Object.create(Phaser.ParticleStorm.BASE), this.acceleration.y = Object.create(Phaser.ParticleStorm.BASE), this.acceleration.facing = Object.create(Phaser.ParticleStorm.BASE_NULL), this.scale.x = Object.create(Phaser.ParticleStorm.BASE_1), this.scale.y = Object.create(Phaser.ParticleStorm.BASE_1), this.rotation = Object.create(Phaser.ParticleStorm.BASE), this.anchor.set(0.5);\n\t},\n\tinit: function init(a, b, c) {\n\t\tif (this.x = a, this.y = b, c.hasOwnProperty('anchor') ? this.anchor.set(c.anchor) : (c.hasOwnProperty('anchorX') && (this.anchor.x = c.anchorX), c.hasOwnProperty('anchorY') && (this.anchor.y = c.anchorY)), c.hasOwnProperty('velocity')) {\n\t\t\tif (this.graph.isNumeric(c.velocity)) this.velocity.x.value = c.velocity, this.velocity.y.value = c.velocity;else if (c.velocity.hasOwnProperty('min')) this.velocity.x.value = this.graph.getMinMax(c.velocity), this.velocity.y.value = this.velocity.x.value;else if (c.velocity.radial) {\n\t\t\t\tvar d = this.graph.getMinMaxInitial(c.velocity),\n\t\t\t\t    e = c.velocity.radial.arcStart,\n\t\t\t\t    f = c.velocity.radial.arcEnd;\n\t\t\t\tif (void 0 !== e && void 0 !== f) {\n\t\t\t\t\tvar g = (Math.random() * (f - e) + e) * Math.PI / 180,\n\t\t\t\t\t    h = Math.sin(g),\n\t\t\t\t\t    i = -Math.cos(g);\n\t\t\t\t\tthis.velocity.x.value = h * d, this.velocity.y.value = i * d;\n\t\t\t\t}\n\t\t\t} else this.velocity.x.initial = this.graph.getMinMaxInitial(c.velocity), this.velocity.y.initial = this.velocity.x.initial, this.velocity.x.value = this.graph.getMinMax(c.velocity.value), this.velocity.y.value = this.velocity.x.value;\n\t\t\tc.velocity.hasOwnProperty('delta') && (this.velocity.x.delta = this.graph.getMinMax(c.velocity.delta), this.velocity.y.delta = this.velocity.x.delta), c.velocity.hasOwnProperty('control') && (this.velocity.x.control = c.velocity.control, this.velocity.y.control = c.velocity.control), c.hasOwnProperty('vx') && this.graph.fromData(c.vx, this.velocity.x), c.hasOwnProperty('vy') && this.graph.fromData(c.vy, this.velocity.y);\n\t\t} else c.hasOwnProperty('target') ? this.particle.target(c.target) : ('number' == typeof c.vx ? this.velocity.x.value = c.vx : this.graph.fromData(c.vx, this.velocity.x), 'number' == typeof c.vy ? this.velocity.y.value = c.vy : this.graph.fromData(c.vy, this.velocity.y));\n\t\t'number' == typeof c.facingVelocity ? this.velocity.facing.value = c.facingVelocity : this.graph.fromData(c.facingVelocity, this.velocity.facing), 'number' == typeof c.facingAcceleration ? this.acceleration.facing.value = c.facingAcceleration : this.graph.fromData(c.facingAcceleration, this.acceleration.facing), c.hasOwnProperty('acceleration') ? (this.graph.fromData(c.acceleration, this.acceleration.x), this.graph.fromData(c.acceleration, this.acceleration.y)) : ('number' == typeof c.ax ? this.acceleration.x.value = c.ax : this.graph.fromData(c.ax, this.acceleration.x), 'number' == typeof c.ay ? this.acceleration.y.value = c.ay : this.graph.fromData(c.ay, this.acceleration.y)), c.hasOwnProperty('scale') ? (this.graph.fromData(c.scale, this.scale.x), this.graph.clone(this.scale.x, this.scale.y)) : ('number' == typeof c.scaleX ? this.scale.x.value = c.scaleX : this.graph.fromData(c.scaleX, this.scale.x), 'number' == typeof c.scaleY ? this.scale.y.value = c.scaleY : this.graph.fromData(c.scaleY, this.scale.y)), 'number' == typeof c.rotation ? this.rotation.value = c.rotation : this.graph.fromData(c.rotation, this.rotation);\n\t\tvar j = this.particle.parent;\n\t\tj && j.emit && j.emit.inherit && this.inherit(j);\n\t},\n\tinherit: function inherit(a) {\n\t\tvar b = a.emit.inherit,\n\t\t    c = !1;\n\t\tif ('boolean' == typeof b && (c = !0), (c || b.vx || b.velocity) && this.graph.clone(a.transform.velocity.x, this.velocity.x), (c || b.vy || b.velocity) && this.graph.clone(a.transform.velocity.y, this.velocity.y), (c || b.facingVelocity) && this.graph.clone(a.transform.velocity.facing, this.velocity.facing), (c || b.scaleX || b.scale) && this.graph.clone(a.transform.scale.x, this.scale.x), (c || b.scaleY || b.scale) && this.graph.clone(a.transform.scale.y, this.scale.y), (c || b.rotation) && this.graph.clone(a.transform.rotation, this.rotation), b.angularVelocity) {\n\t\t\tvar d = (a.transform.rotation.initial + a.transform.rotation.value) * Math.PI / 180;\n\t\t\tthis.velocity.x.initial = Math.sin(d), this.velocity.y.initial = -Math.cos(d);\n\t\t}\n\t},\n\tstep: function step() {\n\t\tvar a = this.particle.life;\n\t\tif (this.scale.x.value += this.scale.x.delta, this.scale.y.value += this.scale.y.delta, this.rotation.value += this.rotation.delta, this.rotation.calc = (this.rotation.initial + this.graph.getValue(this.rotation, a)) * Math.PI / 180, this.scale.x.calc = this.scale.x.initial + this.graph.getValue(this.scale.x, a), this.scale.y.calc = this.scale.y.initial + this.graph.getValue(this.scale.y, a), 0 !== a) {\n\t\t\tvar b = 0,\n\t\t\t    c = 0;\n\t\t\tnull !== this.acceleration.facing.value && (this.acceleration.facing.value += this.acceleration.facing.delta, b = this.rotation.calc + (90 + this.acceleration.facing.offset) * Math.PI / 180, c = this.acceleration.facing.initial + this.graph.getValue(this.acceleration.facing, a), this.velocity.x.value += c * Math.sin(b), this.velocity.y.value += c * -Math.cos(b)), this.acceleration.x.value += this.acceleration.x.delta, this.acceleration.y.value += this.acceleration.y.delta, this.velocity.x.value += this.velocity.x.delta + this.acceleration.x.initial + this.graph.getValue(this.acceleration.x, a), this.velocity.y.value += this.velocity.y.delta + this.acceleration.y.initial + this.graph.getValue(this.acceleration.y, a), null !== this.velocity.facing.value && (this.velocity.facing.value += this.velocity.facing.delta, b = this.rotation.calc + (90 + this.velocity.facing.offset) * Math.PI / 180, c = this.velocity.facing.initial + this.graph.getValue(this.velocity.facing, a), this.x += c * Math.sin(b), this.y += c * -Math.cos(b)), this.x += this.velocity.x.initial + this.graph.getValue(this.velocity.x, a), this.y += this.velocity.y.initial + this.graph.getValue(this.velocity.y, a);\n\t\t}\n\t}\n}, Phaser.ParticleStorm.Controls.Transform.prototype.constructor = Phaser.ParticleStorm.Controls.Transform, Phaser.ParticleStorm.Renderer = {}, Phaser.ParticleStorm.Renderer.Base = function (a) {\n\tthis.game = a.game, this.emitter = a, this.parent = a.parent, this.pixelSize = 1;\n}, Phaser.ParticleStorm.Renderer.Base.prototype = {\n\taddToWorld: function addToWorld(a) {\n\t\treturn a.add(this.display), this.display;\n\t},\n\tpreUpdate: function preUpdate() {},\n\tadd: function add() {\n\t\treturn null;\n\t},\n\tupdate: function update(a) {\n\t\treturn a;\n\t},\n\tpostUpdate: function postUpdate() {},\n\tkill: function kill(a) {\n\t\treturn a;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.game = null;\n\t}\n}, Phaser.ParticleStorm.Renderer.Base.prototype.constructor = Phaser.ParticleStorm.Renderer.Base, Phaser.ParticleStorm.Renderer.Sprite = function (a) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.display = this.game.make.group(null, 'particleStormSpriteRenderer');\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.Sprite.prototype.constructor = Phaser.ParticleStorm.Renderer.Sprite, Phaser.ParticleStorm.Renderer.Sprite.prototype.add = function (a) {\n\tvar b = a.sprite,\n\t    c = a.texture.key,\n\t    d = a.texture.frame;\n\treturn void 0 === d && void 0 !== a.texture.frameName && (d = a.texture.frameName), b ? (b.reset(a.transform.x, a.transform.y), b.key !== c ? b.loadTexture(c, d) : void 0 !== a.texture.frame ? b.frame = d : void 0 !== a.texture.frameName && (b.frameName = d)) : b = this.display.create(a.transform.x, a.transform.y, c, d), b.anchor.set(a.transform.anchor.x, a.transform.anchor.y), a.color.isTinted && (b.tint = a.color.tint), b.blendMode = a.color.blendMode[0], b.texture.baseTexture.scaleMode = a.texture.scaleMode, b.visible = a.visible, a.sprite = b, b;\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.update = function (a) {\n\tvar b = a.sprite;\n\treturn a.delay > 0 && !a.delayVisible ? void (b.visible = !1) : (b.visible = a.visible, b.alpha = a.color.alpha.calc, b.rotation = a.transform.rotation.calc, a.color.isTinted && (b.tint = a.color.tint), b.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), b.x = a.transform.x, void (b.y = a.transform.y));\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.kill = function (a) {\n\ta.sprite && a.sprite.kill();\n}, Phaser.ParticleStorm.Renderer.Sprite.prototype.destroy = function () {\n\tthis.display.destroy(!0), this.emitter = null, this.game = null;\n}, Phaser.ParticleStorm.Renderer.Pixel = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.bmd = this.game.make.bitmapData(b, c), this.display = this.game.make.image(0, 0, this.bmd), this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.Pixel.prototype.constructor = Phaser.ParticleStorm.Renderer.Pixel, Phaser.ParticleStorm.Renderer.Pixel.prototype.resize = function (a, b) {\n\treturn this.bmd.resize(a, b), this;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.clear = function (a) {\n\treturn this.bmd.fill(0, 0, 0, a), this.bmd.update(), this;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.preUpdate = function () {\n\tthis.autoClear && (this.bmd.clear(), this.bmd.update());\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.update = function (a) {\n\tif (!(a.delay > 0) || a.delayVisible) {\n\t\tvar b = Math.floor(a.transform.x),\n\t\t    c = Math.floor(a.transform.y),\n\t\t    d = a.color.red.calc,\n\t\t    e = a.color.green.calc,\n\t\t    f = a.color.blue.calc,\n\t\t    g = Math.floor(255 * a.color.alpha.calc);\n\t\tthis.pixelSize > 2 ? this.bmd.rect(b, c, this.pixelSize, this.pixelSize, a.color.rgba) : (this.bmd.setPixel32(b, c, d, e, f, g, !1), 2 === this.pixelSize && (this.bmd.setPixel32(b + 1, c, d, e, f, g, !1), this.bmd.setPixel32(b, c + 1, d, e, f, g, !1), this.bmd.setPixel32(b + 1, c + 1, d, e, f, g, !1)));\n\t}\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.postUpdate = function () {\n\tthis.pixelSize <= 2 && this.bmd.context.putImageData(this.bmd.imageData, 0, 0), this.bmd.dirty = !0;\n}, Phaser.ParticleStorm.Renderer.Pixel.prototype.destroy = function () {\n\tthis.game = null, this.display.destroy(), this.bmd.destroy();\n}, Phaser.ParticleStorm.Renderer.BitmapData = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.bmd = this.game.make.bitmapData(b, c), this.display = this.game.make.image(0, 0, this.bmd), this.roundPx = !0, this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.BitmapData.prototype.constructor = Phaser.ParticleStorm.Renderer.BitmapData, Phaser.ParticleStorm.Renderer.BitmapData.prototype.resize = function (a, b) {\n\treturn this.bmd.resize(a, b), this;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.clear = function (a) {\n\treturn this.bmd.fill(0, 0, 0, a), this;\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.preUpdate = function () {\n\tthis.autoClear && this.bmd.clear();\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.update = function (a) {\n\tif (!(a.delay > 0) || a.delayVisible) {\n\t\tvar b = a.transform;\n\t\tthis.bmd.copy(a.texture.key, 0, 0, null, null, b.x, b.y, null, null, b.rotation.calc, b.anchor.x, b.anchor.y, b.scale.x.calc, b.scale.y.calc, a.color.alpha.calc, a.color.blendMode[1], this.roundPx);\n\t}\n}, Phaser.ParticleStorm.Renderer.BitmapData.prototype.destroy = function () {\n\tthis.game = null, this.display.destroy(), this.bmd.destroy();\n}, Phaser.ParticleStorm.Renderer.RenderTexture = function (a, b, c) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.renderTexture = this.game.make.renderTexture(b, c), this.display = this.game.make.image(0, 0, this.renderTexture), this.stamp = this.game.make.image(0, 0), this.autoClear = !0;\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.RenderTexture.prototype.constructor = Phaser.ParticleStorm.Renderer.RenderTexture, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.clear = function () {\n\tthis.renderTexture.clear();\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.preUpdate = function () {\n\tthis.autoClear && this.renderTexture.clear();\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.update = function (a) {\n\tif (!(a.delay > 0 && !a.delayVisible || !a.visible || 0 === a.color.alpha.calc)) {\n\t\tvar b = a.texture.key,\n\t\t    c = a.texture.frame;\n\t\tvoid 0 === c && void 0 !== a.texture.frameName && (c = a.texture.frameName), this.stamp.key !== b ? this.stamp.loadTexture(b, c) : void 0 !== a.texture.frame ? this.stamp.frame = c : void 0 !== a.texture.frameName && (this.stamp.frameName = c), this.stamp.anchor.set(a.transform.anchor.x, a.transform.anchor.y), this.stamp.alpha = a.color.alpha.calc, this.stamp.rotation = a.transform.rotation.calc, a.color.isTinted && (this.stamp.tint = a.color.tint), this.stamp.blendMode = a.color.blendMode[0], this.stamp.texture.baseTexture.scaleMode = a.texture.scaleMode, this.stamp.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), this.renderTexture.renderXY(this.stamp, a.transform.x, a.transform.y, !1);\n\t}\n}, Phaser.ParticleStorm.Renderer.RenderTexture.prototype.destroy = function () {\n\tthis.display.destroy(), this.stamp.destroy(), this.renderTexture.destroy(), this.emitter = null, this.game = null;\n}, Phaser.ParticleStorm.Renderer.SpriteBatch = function (a) {\n\tPhaser.ParticleStorm.Renderer.Base.call(this, a), this.display = this.game.make.spriteBatch();\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype = Object.create(Phaser.ParticleStorm.Renderer.Base.prototype), Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.constructor = Phaser.ParticleStorm.Renderer.SpriteBatch, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.add = function (a) {\n\tvar b = a.sprite,\n\t    c = a.texture.key,\n\t    d = a.texture.frame;\n\treturn void 0 === d && void 0 !== a.texture.frameName && (d = a.texture.frameName), b ? (b.reset(a.transform.x, a.transform.y), b.key !== c ? b.loadTexture(c, d) : void 0 !== a.texture.frame ? b.frame = d : void 0 !== a.texture.frameName && (b.frameName = d)) : b = this.game.make.sprite(a.transform.x, a.transform.y, c, d), this.display.addChild(b), b.anchor.set(a.transform.anchor.x, a.transform.anchor.y), a.color.isTinted && (b.tint = a.color.tint), b.blendMode = a.color.blendMode[0], b.texture.baseTexture.scaleMode = a.texture.scaleMode, b.visible = a.visible, a.sprite = b, b;\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.update = function (a) {\n\tvar b = a.sprite;\n\treturn a.delay > 0 && !a.delayVisible ? void (b.visible = !1) : (b.visible = a.visible, b.alpha = a.color.alpha.calc, b.rotation = a.transform.rotation.calc, a.color.isTinted && (b.tint = a.color.tint), b.scale.setTo(a.transform.scale.x.calc, a.transform.scale.y.calc), b.x = a.transform.x, void (b.y = a.transform.y));\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.kill = function (a) {\n\ta.sprite && a.sprite.kill();\n}, Phaser.ParticleStorm.Renderer.SpriteBatch.prototype.destroy = function () {\n\tthis.display.destroy(!0), this.emitter = null, this.game = null;\n};"},/* 402 */
/***/
function(t,e,i){i(151)(i(403))},/* 403 */
/***/
function(t,e){t.exports="'use strict';\n\n/* Phaser Virtual Joystick Plugin (C) Copyright 2015 Photon Storm Ltd. */\nPhaser.VirtualJoystick = function (a, b) {\n\tPhaser.Plugin.call(this, a, b), this.sticks = null, this.buttons = null, this._pointerTotal = 0;\n}, Phaser.VirtualJoystick.prototype = Object.create(Phaser.Plugin.prototype), Phaser.VirtualJoystick.prototype.constructor = Phaser.VirtualJoystick, Phaser.VirtualJoystick.NONE = 0, Phaser.VirtualJoystick.HORIZONTAL = 1, Phaser.VirtualJoystick.VERTICAL = 2, Phaser.VirtualJoystick.CIRC_BUTTON = 0, Phaser.VirtualJoystick.RECT_BUTTON = 1, Phaser.VirtualJoystick.prototype.init = function () {\n\tthis.sticks = new Phaser.ArraySet(), this.buttons = new Phaser.ArraySet();\n}, Phaser.VirtualJoystick.prototype.addStick = function (a, b, c, d, e, f) {\n\t'undefined' == typeof e && (e = 'base'), 'undefined' == typeof f && (f = 'stick');\n\tvar g = new Phaser.VirtualJoystick.Stick(this, a, b, c, d, e, f);\n\treturn this.sticks.add(g), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), g;\n}, Phaser.VirtualJoystick.prototype.addDPad = function (a, b, c, d, e, f, g, h, i) {\n\t'undefined' == typeof e && (e = 'neutral'), 'undefined' == typeof f && (f = 'up'), 'undefined' == typeof g && (g = 'down'), 'undefined' == typeof h && (h = 'left'), 'undefined' == typeof i && (i = 'right');\n\tvar j = new Phaser.VirtualJoystick.DPad(this, a, b, c, d, e, f, g, h, i);\n\treturn this.sticks.add(j), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), j;\n}, Phaser.VirtualJoystick.prototype.removeStick = function (a) {\n\tthis.sticks.remove(a), a.destroy();\n}, Phaser.VirtualJoystick.prototype.addButton = function (a, b, c, d, e, f) {\n\t'undefined' == typeof f && (f = Phaser.VirtualJoystick.CIRC_BUTTON);\n\tvar g = new Phaser.VirtualJoystick.Button(this, f, a, b, c, d, e);\n\treturn this.buttons.add(g), this._pointerTotal++, this._pointerTotal > 2 && this.game.input.addPointer(), g;\n}, Phaser.VirtualJoystick.prototype.removeButton = function (a) {\n\tthis.buttons.remove(a), a.destroy();\n}, Phaser.VirtualJoystick.prototype.update = function () {\n\tthis.sticks.callAll('update'), this.buttons.callAll('update');\n}, Phaser.VirtualJoystick.prototype.destroy = function () {\n\tthis.sticks.removeAll(!0), this.buttons.removeAll(!0);\n}, Phaser.VirtualJoystick.Stick = function (a, b, c, d, e, f, g) {\n\tthis.pad = a, this.baseFrame = f, this.stickFrame = g, this.position = new Phaser.Point(b, c), this.line = new Phaser.Line(this.position.x, this.position.y, this.position.x, this.position.y), this.baseSprite = this.pad.game.make.sprite(this.position.x, this.position.y, e, f), this.baseSprite.anchor.set(0.5), this.stickSprite = this.pad.game.make.sprite(this.position.x, this.position.y, e, g), this.stickSprite.anchor.set(0.5), this.baseHitArea = new Phaser.Circle(this.position.x, this.position.y, d), this.stickHitArea = new Phaser.Circle(this.position.x, this.position.y, this.stickSprite.width), this.limitPoint = new Phaser.Point(), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.onMove = new Phaser.Signal(), this.onUpdate = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.angle = 0, this.angleFull = 0, this.quadrant = 0, this.octant = 0, this.motionLock = Phaser.VirtualJoystick.NONE, this._distance = d, this._deadZone = 0.15 * d, this._scale = 1, this._tracking = !1, this._showOnTouch = !1, this.pad.game.stage.addChild(this.baseSprite), this.pad.game.stage.addChild(this.stickSprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this), this.pad.game.input.addMoveCallback(this.moveStick, this);\n}, Phaser.VirtualJoystick.Stick.prototype = {\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && (this.pointer = a, this.motionLock === Phaser.VirtualJoystick.NONE ? this.line.end.copyFrom(this.pointer) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.line.end.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.line.end.y = this.pointer.y), this._showOnTouch ? (this.line.start.copyFrom(a), this.posX = a.x, this.posY = a.y, this.visible = !0, this.setDown()) : this.stickHitArea.contains(a.x, a.y) && (this.line.length <= this.deadZone ? this._tracking = !0 : (this.setDown(), this.moveStick())));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.stickHitArea.x = this.position.x, this.stickHitArea.y = this.position.y, this.stickSprite.x = this.stickHitArea.x, this.stickSprite.y = this.stickHitArea.y, this.line.end.copyFrom(this.line.start), this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a), this._showOnTouch && (this.visible = !1));\n\t},\n\tsetDown: function setDown() {\n\t\tthis.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this._tracking = !1, this.checkArea(), this.onDown.dispatch(this, this.pointer);\n\t},\n\tcheckArea: function checkArea() {\n\t\tthis.angle = this.pad.game.math.radToDeg(this.line.angle), this.angleFull = this.angle, this.angleFull < 0 && (this.angleFull += 360), this.octant = 45 * Math.round(this.angleFull / 45), this.quadrant = this.angleFull >= 45 && this.angleFull < 135 ? 1 : this.angleFull >= 135 && this.angleFull < 225 ? 2 : this.angleFull >= 225 && this.angleFull < 315 ? 3 : 0;\n\t},\n\tmoveStick: function moveStick() {\n\t\tthis.pointer && (this.isDown || this._tracking) && (this.motionLock === Phaser.VirtualJoystick.NONE ? this.line.end.copyFrom(this.pointer) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.line.end.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.line.end.y = this.pointer.y), this.checkArea(), !this.isDown && this.line.length <= this.deadZone || (this._tracking && this.setDown(), this.line.length < this.baseHitArea.radius ? this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.pointer.x, this.stickHitArea.y = this.pointer.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.pointer.y) : (this.baseHitArea.circumferencePoint(this.line.angle, !1, this.limitPoint), this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.limitPoint.x, this.stickHitArea.y = this.limitPoint.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.limitPoint.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.limitPoint.y)), this.stickSprite.x = this.stickHitArea.x, this.stickSprite.y = this.stickHitArea.y, this.onMove.dispatch(this, this.force, this.forceX, this.forceY)));\n\t},\n\tupdate: function update() {\n\t\tthis.isDown && !this._tracking && this.onUpdate.dispatch(this, this.force, this.forceX, this.forceY);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.baseSprite.width / 2 + a,\n\t\t    c = this.baseSprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.baseSprite.width / 2 + a,\n\t\t    c = this.baseSprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this);\n\t\tfor (var a = this.pad.game.input.moveCallbacks, b = 0; b < a.length; b++) {\n\t\t\tif (a.callback === this.moveStick && a.context === this) {\n\t\t\t\ta.splice(b, 1);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}this.stickSprite.destroy(), this.baseSprite.destroy(), this.stickHitArea = null, this.baseHitArea = null, this.line = null, this.limitPoint = null, this.onDown.dispose(), this.onUp.dispose(), this.onMove.dispose(), this.onUpdate.dispose(), this.pointer = null, this._scale = null, this.pad = null;\n\t},\n\tdebug: function debug(a, b, c) {\n\t\t'undefined' == typeof a && (a = !0), 'undefined' == typeof b && (b = !0), 'undefined' == typeof c && (c = this.baseSprite.right);\n\t\tvar d = this.pad.game.debug;\n\t\tif (a && (d.context.lineWidth = 2, d.geom(this.baseHitArea, 'rgba(255, 0, 0, 1)', !1), d.geom(this.stickHitArea, 'rgba(0, 255, 0, 1)', !1), d.geom(this.line, 'rgba(255, 255, 0, 1)'), d.context.lineWidth = 1), b) {\n\t\t\tvar e = d.renderShadow,\n\t\t\t    f = c,\n\t\t\t    g = this.baseSprite.y - 114;\n\t\t\td.renderShadow = !0, d.text('Force: ' + this.force.toFixed(2), f, g), d.text('ForceX: ' + this.forceX.toFixed(2), f, g + 24), d.text('ForceY: ' + this.forceY.toFixed(2), f, g + 48), d.text('Rotation: ' + this.rotation.toFixed(2), f, g + 96), d.text('Angle: ' + this.angle.toFixed(2), f, g + 120), d.text('Distance: ' + this.distance, f, g + 172), d.text('Quadrant: ' + this.quadrant, f, g + 196), d.text('Octant: ' + this.octant, f, g + 220), d.renderShadow = e;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'rotation', {\n\tget: function get() {\n\t\treturn this.line.angle;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.position.x;\n\t},\n\tset: function set(a) {\n\t\tthis.position.x !== a && (this.position.x = a, this.baseSprite.x = a, this.stickSprite.x = a, this.baseHitArea.x = a, this.stickHitArea.x = a, this.line.start.x = a, this.line.end.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.position.y;\n\t},\n\tset: function set(a) {\n\t\tthis.position.y !== a && (this.position.y = a, this.baseSprite.y = a, this.stickSprite.y = a, this.baseHitArea.y = a, this.stickHitArea.y = a, this.line.start.y = a, this.line.end.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'force', {\n\tget: function get() {\n\t\treturn Math.min(1, this.line.length / this.distance * 2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'forceX', {\n\tget: function get() {\n\t\treturn this.force * this.x;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'forceY', {\n\tget: function get() {\n\t\treturn this.force * this.y;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'x', {\n\tget: function get() {\n\t\treturn this.line.angle >= 0 ? this.line.angle <= 1.5707963267948966 ? (1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + (3.141592653589793 - this.line.angle) / 3.141592653589793 * 2 : this.line.angle >= -1.5707963267948966 ? Math.abs(-1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + Math.abs(-3.141592653589793 - this.line.angle) / 3.141592653589793 * 2;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'y', {\n\tget: function get() {\n\t\treturn this.line.angle >= 0 ? 1 - Math.abs(1.5707963267948966 - this.line.angle) / 1.5707963267948966 : -1 + Math.abs(-1.5707963267948966 - this.line.angle) / 1.5707963267948966;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'filterX', {\n\tget: function get() {\n\t\tif (0 === this.x) return 0.5;\n\t\tvar a = Math.abs(this.forceX) / 2;\n\t\treturn this.x < 0 ? (0.5 - a).toFixed(2) : (0.5 + a).toFixed(2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'filterY', {\n\tget: function get() {\n\t\tif (0 === this.y) return 0.5;\n\t\tvar a = Math.abs(this.forceY) / 2;\n\t\treturn this.y < 0 ? 1 - (0.5 - a).toFixed(2) : 1 - (0.5 + a).toFixed(2);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.stickSprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.stickSprite.alpha = a, this.baseSprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.stickSprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.stickSprite.visible = a, this.baseSprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'distance', {\n\tget: function get() {\n\t\treturn this._distance * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._distance !== a && (this._distance = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'deadZone', {\n\tget: function get() {\n\t\treturn this._deadZone * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._deadZone = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.stickSprite.scale.set(a), this.baseSprite.scale.set(a), this.baseHitArea.setTo(this.position.x, this.position.y, this.distance * a), this.stickHitArea.setTo(this.position.x, this.position.y, this.stickSprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Stick.prototype, 'showOnTouch', {\n\tget: function get() {\n\t\treturn this._showOnTouch;\n\t},\n\tset: function set(a) {\n\t\tthis._showOnTouch !== a && (this._showOnTouch = a, this._showOnTouch && this.visible && (this.visible = !1));\n\t}\n}), Phaser.VirtualJoystick.Button = function (a, b, c, d, e, f, g) {\n\tthis.pad = a, this.upFrame = f, this.downFrame = g, this.sprite = this.pad.game.make.sprite(c, d, e, f), this.sprite.anchor.set(0.5), b === Phaser.VirtualJoystick.CIRC_BUTTON ? this.hitArea = new Phaser.Circle(this.sprite.x, this.sprite.y, this.sprite.width) : b === Phaser.VirtualJoystick.RECT_BUTTON && (this.hitArea = new Phaser.Rectangle(this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height)), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.repeatRate = 0, this.key = null, this._timeNext = 0, this._scale = 1, this.pad.game.stage.addChild(this.sprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this);\n}, Phaser.VirtualJoystick.Button.prototype = {\n\taddKey: function addKey(a) {\n\t\tif (this.key) {\n\t\t\tif (this.key.keyCode === a) return !1;\n\t\t\tthis.key.onDown.removeAll(), this.key.onUp.removeAll(), this.pad.game.input.keyboard.removeKey(this.key), this.key = null;\n\t\t}\n\t\treturn a && (this.key = this.pad.game.input.keyboard.addKey(a), this.key.onDown.add(this.keyDown, this), this.key.onUp.add(this.keyUp, this)), this.key;\n\t},\n\tkeyDown: function keyDown() {\n\t\tthis.isDown || (this.sprite.frameName = this.downFrame, this.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this.onDown.dispatch(this, this.key));\n\t},\n\tkeyUp: function keyUp() {\n\t\tthis.isDown && (this.sprite.frameName = this.upFrame, this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, this.key, this.duration));\n\t},\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && this.hitArea.contains(a.x, a.y) && (this.pointer = a, this.sprite.frameName = this.downFrame, this.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this.onDown.dispatch(this, a));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.sprite.frameName = this.upFrame, this.isDown = !1, this.isUp = !0, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a, this.duration));\n\t},\n\tupdate: function update() {\n\t\tthis.repeatRate > 0 && this.isDown && this.pad.game.time.time >= this._timeNext && (this.onDown.dispatch(this, this.pointer), this._timeNext = this.pad.game.time.time + this.repeatRate);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this), this.sprite.destroy(), this.onDown.dispose(), this.onUp.dispose(), this.hitArea = null, this.pointer = null, this._scale = null, this.pad = null;\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.sprite.x;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.x !== a && (this.sprite.x = a, this.hitArea.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.sprite.y;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.y !== a && (this.sprite.y = a, this.hitArea.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.sprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.sprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.sprite.scale.set(a), this.hitArea.setTo(this.sprite.x, this.sprite.y, this.sprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.Button.prototype, 'duration', {\n\tget: function get() {\n\t\treturn this.isUp ? this.timeUp - this.timeDown : this.game.time.time - this.timeDown;\n\t}\n}), Phaser.VirtualJoystick.DPad = function (a, b, c, d, e, f, g, h, i, j) {\n\tthis.pad = a, this.neutralFrame = f, this.upFrame = g, this.downFrame = h, this.leftFrame = i, this.rightFrame = j, this.position = new Phaser.Point(b, c), this.line = new Phaser.Line(this.position.x, this.position.y, this.position.x, this.position.y), this.sprite = this.pad.game.make.sprite(b, c, e, f), this.sprite.anchor.set(0.5), this.baseHitArea = new Phaser.Circle(this.position.x, this.position.y, d), this.stickHitArea = new Phaser.Circle(this.position.x, this.position.y, this.sprite.width), this.limitPoint = new Phaser.Point(), this.pointer = null, this.enabled = !0, this.isDown = !1, this.isUp = !0, this.onDown = new Phaser.Signal(), this.onUp = new Phaser.Signal(), this.onMove = new Phaser.Signal(), this.onUpdate = new Phaser.Signal(), this.timeDown = 0, this.timeUp = 0, this.angle = 0, this.angleFull = 0, this.quadrant = 0, this.octant = 0, this.direction = Phaser.NONE, this._distance = d, this._deadZone = 0.15 * d, this._scale = 1, this._tracking = !1, this._showOnTouch = !1, this.pad.game.stage.addChild(this.sprite), this.pad.game.input.onDown.add(this.checkDown, this), this.pad.game.input.onUp.add(this.checkUp, this), this.pad.game.input.addMoveCallback(this.moveStick, this);\n}, Phaser.VirtualJoystick.DPad.prototype = {\n\tcheckDown: function checkDown(a) {\n\t\tthis.enabled && this.isUp && (this.pointer = a, this.line.end.copyFrom(a), this._showOnTouch ? (this.line.start.copyFrom(a), this.posX = a.x, this.posY = a.y, this.visible = !0, this.setDown()) : this.stickHitArea.contains(a.x, a.y) && (this.line.length <= this.deadZone ? this._tracking = !0 : (this.setDown(), this.moveStick())));\n\t},\n\tcheckUp: function checkUp(a) {\n\t\ta === this.pointer && (this.pointer = null, this.stickHitArea.x = this.position.x, this.stickHitArea.y = this.position.y, this.sprite.frameName = this.neutralFrame, this.line.end.copyFrom(this.line.start), this.isDown = !1, this.isUp = !0, this.direction = Phaser.NONE, this.timeUp = this.pad.game.time.time, this.onUp.dispatch(this, a), this._showOnTouch && (this.visible = !1));\n\t},\n\tsetDown: function setDown() {\n\t\tthis.isDown = !0, this.isUp = !1, this.timeDown = this.pad.game.time.time, this.timeUp = 0, this._tracking = !1, this.checkArea(), this.onDown.dispatch(this, this.pointer);\n\t},\n\tcheckArea: function checkArea() {\n\t\tthis.angle = this.pad.game.math.radToDeg(this.line.angle), this.angleFull = this.angle, this.angleFull < 0 && (this.angleFull += 360), this.octant = 45 * Math.round(this.angleFull / 45), this.quadrant = this.angleFull >= 45 && this.angleFull < 135 ? 1 : this.angleFull >= 135 && this.angleFull < 225 ? 2 : this.angleFull >= 225 && this.angleFull < 315 ? 3 : 0;\n\t},\n\tmoveStick: function moveStick() {\n\t\treturn this.pointer && (this.isDown || this._tracking) ? (this.line.end.copyFrom(this.pointer), this.checkArea(), !this.isDown && this.line.length <= this.deadZone ? (this.direction = Phaser.NONE, void (this.sprite.frameName = this.neutralFrame)) : (this._tracking && this.setDown(), this.line.length < this.baseHitArea.radius ? this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.pointer.x, this.stickHitArea.y = this.pointer.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.pointer.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.pointer.y) : (this.baseHitArea.circumferencePoint(this.line.angle, !1, this.limitPoint), this.motionLock === Phaser.VirtualJoystick.NONE ? (this.stickHitArea.x = this.limitPoint.x, this.stickHitArea.y = this.limitPoint.y) : this.motionLock === Phaser.VirtualJoystick.HORIZONTAL ? this.stickHitArea.x = this.limitPoint.x : this.motionLock === Phaser.VirtualJoystick.VERTICAL && (this.stickHitArea.y = this.limitPoint.y)), 1 === this.quadrant ? (this.sprite.frameName = this.downFrame, this.direction = Phaser.DOWN) : 2 === this.quadrant ? (this.sprite.frameName = this.leftFrame, this.direction = Phaser.LEFT) : 3 === this.quadrant ? (this.sprite.frameName = this.upFrame, this.direction = Phaser.UP) : (this.sprite.frameName = this.rightFrame, this.direction = Phaser.RIGHT), void this.onMove.dispatch(this, this.x, this.y))) : (this.direction = Phaser.NONE, void (this.sprite.frameName = this.neutralFrame));\n\t},\n\tupdate: function update() {\n\t\tthis.isDown && !this._tracking && this.onUpdate.dispatch(this, this.x, this.y);\n\t},\n\talignBottomLeft: function alignBottomLeft(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = b, this.posY = this.pad.game.height - c;\n\t},\n\talignBottomRight: function alignBottomRight(a) {\n\t\t'undefined' == typeof a && (a = 0);\n\t\tvar b = this.sprite.width / 2 + a,\n\t\t    c = this.sprite.height / 2 + a;\n\t\tthis.posX = this.pad.game.width - b, this.posY = this.pad.game.height - c;\n\t},\n\tdestroy: function destroy() {\n\t\tthis.pad.game.input.onDown.remove(this.checkDown, this), this.pad.game.input.onUp.remove(this.checkUp, this);\n\t\tfor (var a = this.pad.game.input.moveCallbacks, b = 0; b < a.length; b++) {\n\t\t\tif (a.callback === this.moveStick && a.context === this) {\n\t\t\t\ta.splice(b, 1);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}this.sprite.destroy(), this.stickHitArea = null, this.baseHitArea = null, this.line = null, this.limitPoint = null, this.onDown.dispose(), this.onUp.dispose(), this.pointer = null, this._scale = null, this.pad = null;\n\t},\n\tdebug: function debug(a, b, c) {\n\t\t'undefined' == typeof a && (a = !0), 'undefined' == typeof b && (b = !0), 'undefined' == typeof c && (c = this.sprite.right);\n\t\tvar d = this.pad.game.debug;\n\t\tif (a && (d.context.lineWidth = 2, d.geom(this.baseHitArea, 'rgba(255, 0, 0, 1)', !1), d.geom(this.stickHitArea, 'rgba(0, 255, 0, 1)', !1), d.geom(this.line, 'rgba(255, 255, 0, 1)'), d.context.lineWidth = 1), b) {\n\t\t\tvar e = d.renderShadow,\n\t\t\t    f = c,\n\t\t\t    g = this.sprite.y - 48;\n\t\t\td.renderShadow = !0, d.text('X: ' + this.x, f, g), d.text('Y: ' + this.y, f, g + 24), d.text('Distance: ' + this.distance, f, g + 48), d.text('Quadrant: ' + this.quadrant, f, g + 96), d.text('Octant: ' + this.octant, f, g + 120), d.renderShadow = e;\n\t\t}\n\t}\n}, Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'rotation', {\n\tget: function get() {\n\t\treturn this.line.angle;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'posX', {\n\tget: function get() {\n\t\treturn this.position.x;\n\t},\n\tset: function set(a) {\n\t\tthis.position.x !== a && (this.position.x = a, this.sprite.x = a, this.baseHitArea.x = a, this.stickHitArea.x = a, this.line.start.x = a, this.line.end.x = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'posY', {\n\tget: function get() {\n\t\treturn this.position.y;\n\t},\n\tset: function set(a) {\n\t\tthis.position.y !== a && (this.position.y = a, this.sprite.y = a, this.baseHitArea.y = a, this.stickHitArea.y = a, this.line.start.y = a, this.line.end.y = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'x', {\n\tget: function get() {\n\t\treturn this.direction === Phaser.LEFT ? -1 : this.direction === Phaser.RIGHT ? 1 : 0;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'y', {\n\tget: function get() {\n\t\treturn this.direction === Phaser.UP ? -1 : this.direction === Phaser.DOWN ? 1 : 0;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'alpha', {\n\tget: function get() {\n\t\treturn this.sprite.alpha;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.alpha = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'visible', {\n\tget: function get() {\n\t\treturn this.sprite.visible;\n\t},\n\tset: function set(a) {\n\t\tthis.sprite.visible = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'distance', {\n\tget: function get() {\n\t\treturn this._distance * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._distance !== a && (this._distance = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'deadZone', {\n\tget: function get() {\n\t\treturn this._deadZone * this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._deadZone = a;\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'scale', {\n\tget: function get() {\n\t\treturn this._scale;\n\t},\n\tset: function set(a) {\n\t\tthis._scale !== a && (this.sprite.scale.set(a), this.baseHitArea.setTo(this.position.x, this.position.y, this.distance * a), this.stickHitArea.setTo(this.position.x, this.position.y, this.sprite.width), this._scale = a);\n\t}\n}), Object.defineProperty(Phaser.VirtualJoystick.DPad.prototype, 'showOnTouch', {\n\tget: function get() {\n\t\treturn this._showOnTouch;\n\t},\n\tset: function set(a) {\n\t\tthis._showOnTouch !== a && (this._showOnTouch = a, this._showOnTouch && this.visible && (this.visible = !1));\n\t}\n});"}],[152]);