/*
Created by : Fire360Boy
Email : Fire360Boy@gmail.com
Strat Script: *//*eslint-disable no-unused-vars*/
/*!
 * jQuery JavaScript Library v3.1.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-07-07T21:44Z
 */
function scaleVideoContainer(){var a=$(window).height()+5,b=parseInt(a)+"px";$(".homepage-hero-module").css("height",b)}function initBannerVideoSize(a){$(a).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),scaleBannerVideoSize(a)}function scaleBannerVideoSize(a){var b,c,d=$(window).width(),e=$(window).height()+5;/* console.log(windowHeight); */
$(a).each(function(){var a=$(this).data("height")/$(this).data("width");$(this).width(d),d<1e3&&(c=e,b=c/a,$(this).css({"margin-top":0,"margin-left":-(b-d)/2+"px"}),$(this).width(b).height(c)),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if(function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function c(a,b){b=b||_;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}function d(a){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var b=!!a&&"length"in a&&a.length,c=ma.type(a);return"function"!==c&&!ma.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}
// Implement the identical functionality for filter and not
function e(a,b,c){if(ma.isFunction(b))return ma.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return ma.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(wa.test(b))return ma.filter(b,a,c);b=ma.filter(b,a)}return ma.grep(a,function(a){return ea.call(b,a)>-1!==c&&1===a.nodeType})}function f(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}
// Convert String-formatted options into Object-formatted ones
function g(a){var b={};return ma.each(a.match(Ca)||[],function(a,c){b[c]=!0}),b}function h(a){return a}function i(a){throw a}function j(a,b,c){var d;try{
// Check for promise aspect first to privilege synchronous behavior
a&&ma.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&ma.isFunction(d=a.then)?d.call(a,b,c):
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
b.call(void 0,a)}catch(a){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
c.call(void 0,a)}}
// The ready event handler and self cleanup method
function k(){_.removeEventListener("DOMContentLoaded",k),a.removeEventListener("load",k),ma.ready()}function l(){this.expando=ma.expando+l.uid++}function m(a,b,c){var d;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Ka,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:
// Only convert to a number if it doesn't change the string
+c+""===c?+c:Ja.test(c)?JSON.parse(c):c)}catch(e){}
// Make sure we set the data so it isn't changed later
Ia.set(a,b,c)}else c=void 0;return c}function n(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return ma.css(a,b,"")},i=h(),j=c&&c[3]||(ma.cssNumber[b]?"":"px"),
// Starting value computation is required for potential unit mismatches
k=(ma.cssNumber[b]||"px"!==j&&+i)&&Ma.exec(ma.css(a,b));if(k&&k[3]!==j){
// Trust units reported by jQuery.css
j=j||k[3],
// Make sure we update the tween properties later on
c=c||[],
// Iteratively approximate from a nonzero starting point
k=+i||1;do
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
f=f||".5",
// Adjust and apply
k/=f,ma.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}
// Apply relative offset (+=/-=) if specified
return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function o(a){var b,c=a.ownerDocument,d=a.nodeName,e=Qa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=ma.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),Qa[d]=e,e)}function p(a,b){
// Determine new display value for elements that need to change
for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===c&&(e[f]=Ha.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&Oa(d)&&(e[f]=o(d))):"none"!==c&&(e[f]="none",
// Remember what we're overwriting
Ha.set(d,"display",c)));
// Set the display of the elements in a second loop to avoid constant reflow
for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}function q(a,b){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&ma.nodeName(a,b)?ma.merge([a],c):c}
// Mark scripts as having already been evaluated
function r(a,b){for(var c=0,d=a.length;c<d;c++)Ha.set(a[c],"globalEval",!b||Ha.get(b[c],"globalEval"))}function s(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)
// Add nodes directly
if("object"===ma.type(f))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ma.merge(m,f.nodeType?[f]:f);else if(Va.test(f)){for(g=g||l.appendChild(b.createElement("div")),
// Deserialize a standard representation
h=(Sa.exec(f)||["",""])[1].toLowerCase(),i=Ua[h]||Ua._default,g.innerHTML=i[1]+ma.htmlPrefilter(f)+i[2],
// Descend through wrappers to the right content
k=i[0];k--;)g=g.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ma.merge(m,g.childNodes),
// Remember the top-level container
g=l.firstChild,
// Ensure the created nodes are orphaned (#12392)
g.textContent=""}else m.push(b.createTextNode(f));for(
// Remove wrapper from fragment
l.textContent="",n=0;f=m[n++];)
// Skip elements already in the context collection (trac-4087)
if(d&&ma.inArray(f,d)>-1)e&&e.push(f);else
// Capture executables
if(j=ma.contains(f.ownerDocument,f),
// Append to fragment
g=q(l.appendChild(f),"script"),
// Preserve script evaluation history
j&&r(g),c)for(k=0;f=g[k++];)Ta.test(f.type||"")&&c.push(f);return l}function t(){return!0}function u(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function v(){try{return _.activeElement}catch(a){}}function w(a,b,c,d,e,f){var g,h;
// Types can be a map of types/handlers
if("object"==typeof b){
// ( types-Object, selector, data )
"string"!=typeof c&&(
// ( types-Object, data )
d=d||c,c=void 0);for(h in b)w(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(
// ( types, fn )
e=c,d=c=void 0):null==e&&("string"==typeof c?(
// ( types, selector, fn )
e=d,d=void 0):(
// ( types, data, fn )
e=d,d=c,c=void 0)),e===!1)e=u;else if(!e)return a;
// Use same guid so caller can remove using origFn
return 1===f&&(g=e,e=function(a){
// Can use an empty set, since event contains the info
return ma().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=ma.guid++)),a.each(function(){ma.event.add(this,b,e,d,c)})}function x(a,b){return ma.nodeName(a,"table")&&ma.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function y(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function z(a){var b=bb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function A(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Ha.hasData(a)&&(f=Ha.access(a),g=Ha.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)ma.event.add(b,e,j[e][c])}
// 2. Copy user data
Ia.hasData(a)&&(h=Ia.access(a),i=ma.extend({},h),Ia.set(b,i))}}
// Fix IE bugs, see support tests
function B(a,b){var c=b.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===c&&Ra.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function C(a,b,d,e){
// Flatten any nested arrays
b=ca.apply([],b);var f,g,h,i,j,k,l=0,m=a.length,n=m-1,o=b[0],p=ma.isFunction(o);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||m>1&&"string"==typeof o&&!ka.checkClone&&ab.test(o))return a.each(function(c){var f=a.eq(c);p&&(b[0]=o.call(this,c,f.html())),C(f,b,d,e)});if(m&&(f=s(b,a[0].ownerDocument,!1,a,e),g=f.firstChild,1===f.childNodes.length&&(f=g),g||e)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(h=ma.map(q(f,"script"),y),i=h.length;l<m;l++)j=f,l!==n&&(j=ma.clone(j,!0,!0),
// Keep references to cloned scripts for later restoration
i&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ma.merge(h,q(j,"script"))),d.call(a[l],j,l);if(i)
// Evaluate executable scripts on first document insertion
for(k=h[h.length-1].ownerDocument,
// Reenable scripts
ma.map(h,z),l=0;l<i;l++)j=h[l],Ta.test(j.type||"")&&!Ha.access(j,"globalEval")&&ma.contains(k,j)&&(j.src?
// Optional AJAX dependency, but won't run scripts if not present
ma._evalUrl&&ma._evalUrl(j.src):c(j.textContent.replace(cb,""),k))}return a}function D(a,b,c){for(var d,e=b?ma.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||ma.cleanData(q(d)),d.parentNode&&(c&&ma.contains(d.ownerDocument,d)&&r(q(d,"script")),d.parentNode.removeChild(d));return a}function E(a,b,c){var d,e,f,g,h=a.style;
// Support: IE <=9 only
// getPropertyValue is only needed for .css('filter') (#12537)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return c=c||fb(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||ma.contains(a.ownerDocument,a)||(g=ma.style(a,b)),!ka.pixelMarginRight()&&eb.test(g)&&db.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function F(a,b){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function G(a){
// Shortcut for names that are not vendor prefixed
if(a in kb)return a;for(
// Check for vendor prefixed names
var b=a[0].toUpperCase()+a.slice(1),c=jb.length;c--;)if(a=jb[c]+b,a in kb)return a}function H(a,b,c){
// Any relative (+/-) values have already been
// normalized at this point
var d=Ma.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function I(a,b,c,d,e){for(var f=c===(d?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===b?1:0,g=0;f<4;f+=2)
// Both box models exclude margin, so add it if we want it
"margin"===c&&(g+=ma.css(a,c+Na[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=ma.css(a,"padding"+Na[f],!0,e)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=ma.css(a,"border"+Na[f]+"Width",!0,e))):(
// At this point, extra isn't content, so add padding
g+=ma.css(a,"padding"+Na[f],!0,e),
// At this point, extra isn't content nor padding, so add border
"padding"!==c&&(g+=ma.css(a,"border"+Na[f]+"Width",!0,e)));return g}function J(a,b,c){
// Start with offset property, which is equivalent to the border-box value
var d,e=!0,f=fb(a),g="border-box"===ma.css(a,"boxSizing",!1,f);
// Some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
d=E(a,b,f),(d<0||null==d)&&(d=a.style[b]),eb.test(d))return d;
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
e=g&&(ka.boxSizingReliable()||d===a.style[b]),
// Normalize "", auto, and prepare for extra
d=parseFloat(d)||0}
// Use the active box-sizing model to add/subtract irrelevant styles
return d+I(a,b,c||(g?"border":"content"),e,f)+"px"}function K(a,b,c,d,e){return new K.prototype.init(a,b,c,d,e)}function L(){mb&&(a.requestAnimationFrame(L),ma.fx.tick())}
// Animations created synchronously will run synchronously
function M(){return a.setTimeout(function(){lb=void 0}),lb=ma.now()}
// Generate parameters to create a standard animation
function N(a,b){var c,d=0,e={height:a};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
b=b?1:0;d<4;d+=2-b)c=Na[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function O(a,b,c){for(var d,e=(R.tweeners[b]||[]).concat(R.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))
// We're done with this property
return d}function P(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,q=a.nodeType&&Oa(a),r=Ha.get(a,"fxshow");
// Queue-skipping animations hijack the fx hooks
c.queue||(g=ma._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){
// Ensure the complete handler is called before this completes
m.always(function(){g.unqueued--,ma.queue(a,"fx").length||g.empty.fire()})}));
// Detect show/hide animations
for(d in b)if(e=b[d],nb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==e||!r||void 0===r[d])continue;q=!0}n[d]=r&&r[d]||ma.style(a,d)}if(
// Bail out if this is a no-op like .hide().hide()
i=!ma.isEmptyObject(b),i||!ma.isEmptyObject(n)){
// Restrict "overflow" and "display" styles during box animations
l&&1===a.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
c.overflow=[o.overflow,o.overflowX,o.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
j=r&&r.display,null==j&&(j=Ha.get(a,"display")),k=ma.css(a,"display"),"none"===k&&(j?k=j:(
// Get nonempty value(s) by temporarily forcing visibility
p([a],!0),j=a.style.display||j,k=ma.css(a,"display"),p([a]))),
// Animate inline elements as inline-block
("inline"===k||"inline-block"===k&&null!=j)&&"none"===ma.css(a,"float")&&(
// Restore the original display value at the end of pure show/hide animations
i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),
// Implement show/hide animations
i=!1;for(d in n)
// General show/hide setup for this element animation
i||(r?"hidden"in r&&(q=r.hidden):r=Ha.access(a,"fxshow",{display:j}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
f&&(r.hidden=!q),
// Show elements before animating them
q&&p([a],!0),/* eslint-disable no-loop-func */
m.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
q||p([a]),Ha.remove(a,"fxshow");for(d in n)ma.style(a,d,n[d])})),
// Per-property setup
i=O(q?r[d]:0,d,m),d in r||(r[d]=i.start,q&&(i.end=i.start,i.start=0))}}function Q(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=ma.camelCase(c),e=b[d],f=a[c],ma.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=ma.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function R(a,b,c){var d,e,f=0,g=R.prefilters.length,h=ma.Deferred().always(function(){
// Don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=lb||M(),c=Math.max(0,j.startTime+j.duration-b),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:ma.extend({},b),opts:ma.extend(!0,{specialEasing:{},easing:ma.easing._default},c),originalProperties:b,originalOptions:c,startTime:lb||M(),duration:c.duration,tweens:[],createTween:function(b,c){var d=ma.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);
// Resolve when we played the last frame; otherwise, reject
return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Q(k,j.opts.specialEasing);f<g;f++)if(d=R.prefilters[f].call(j,a,k,j.opts))return ma.isFunction(d.stop)&&(ma._queueHooks(j.elem,j.opts.queue).stop=ma.proxy(d.stop,d)),d;
// attach callbacks from options
return ma.map(k,O,j),ma.isFunction(j.opts.start)&&j.opts.start.call(a,j),ma.fx.timer(ma.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function S(a){return a.getAttribute&&a.getAttribute("class")||""}function T(a,b,c,d){var e;if(ma.isArray(b))
// Serialize array item.
ma.each(b,function(b,e){c||Ab.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
T(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==ma.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)T(a+"["+e+"]",b[e],c,d)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function U(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Ca)||[];if(ma.isFunction(c))
// For each dataType in the dataTypeExpression
for(;d=f[e++];)
// Prepend if requested
"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function V(a,b,c,d){function e(h){var i;return f[h]=!0,ma.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===Mb;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function W(a,b){var c,d,e=ma.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&ma.extend(!0,a,d),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function X(a,b,c){
// Remove auto dataType and get content-type in the process
for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}
// Check to see if we have a response for the expected dataType
if(i[0]in c)f=i[0];else{
// Try convertible dataTypes
for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}
// Or just use first one
f=f||g}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(f)return f!==i[0]&&i.unshift(f),c[f]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function Y(a,b,c,d){var e,f,g,h,i,j={},
// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();
// Create converters map with lowercased keys
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];
// Convert to each sequential dataType
for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),
// Apply the dataFilter if provided
!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
// There's only work to do if current dataType is non-auto
if("*"===f)f=i;else if("*"!==i&&i!==f){
// If none found, seek a pair
if(
// Seek a direct converter
g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(
// If conv2 outputs current
h=e.split(" "),h[1]===f&&(
// If prev can be converted to accepted input
g=j[i+" "+h[0]]||j["* "+h[0]])){
// Condense equivalence converters
g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}
// Apply converter (if not an equivalence)
if(g!==!0)
// Unless errors are allowed to bubble, catch and return them
if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}/**
 * Gets a window from an element
 */
function Z(a){return ma.isWindow(a)?a:9===a.nodeType&&a.defaultView}var $=[],_=a.document,aa=Object.getPrototypeOf,ba=$.slice,ca=$.concat,da=$.push,ea=$.indexOf,fa={},ga=fa.toString,ha=fa.hasOwnProperty,ia=ha.toString,ja=ia.call(Object),ka={},la="3.1.0",
// Define a local copy of jQuery
ma=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new ma.fn.init(a,b)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
na=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
oa=/^-ms-/,pa=/-([a-z])/g,
// Used by jQuery.camelCase as callback to replace()
qa=function(a,b){return b.toUpperCase()};ma.fn=ma.prototype={
// The current version of jQuery being used
jquery:la,constructor:ma,
// The default length of a jQuery object is 0
length:0,toArray:function(){return ba.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return just the one element from the set
// Return all the elements in a clean array
return null!=a?a<0?this[a+this.length]:this[a]:ba.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=ma.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b},
// Execute a callback for every element in the matched set.
each:function(a){return ma.each(this,a)},map:function(a){return this.pushStack(ma.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ba.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:da,sort:$.sort,splice:$.splice},ma.extend=ma.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
// Handle a deep copy situation
"boolean"==typeof g&&(j=g,
// Skip the boolean and the target
g=arguments[h]||{},h++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof g||ma.isFunction(g)||(g={}),
// Extend jQuery itself if only one argument is passed
h===i&&(g=this,h--);h<i;h++)
// Only deal with non-null/undefined values
if(null!=(a=arguments[h]))
// Extend the base object
for(b in a)c=g[b],d=a[b],
// Prevent never-ending loop
g!==d&&(
// Recurse if we're merging plain objects or arrays
j&&d&&(ma.isPlainObject(d)||(e=ma.isArray(d)))?(e?(e=!1,f=c&&ma.isArray(c)?c:[]):f=c&&ma.isPlainObject(c)?c:{},
// Never move original objects, clone them
g[b]=ma.extend(j,f,d)):void 0!==d&&(g[b]=d));
// Return the modified object
return g},ma.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(la+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===ma.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var b=ma.type(a);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!a||"[object Object]"!==ga.call(a))&&(!(b=aa(a))||(c=ha.call(b,"constructor")&&b.constructor,"function"==typeof c&&ia.call(c)===ja))},isEmptyObject:function(a){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?fa[ga.call(a)]||"object":typeof a},
// Evaluates a script in a global context
globalEval:function(a){c(a)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(oa,"ms-").replace(pa,qa)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,e=0;if(d(a))for(c=a.length;e<c&&b.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(b.call(a[e],e,a[e])===!1)break;return a},
// Support: Android <=4.0 only
trim:function(a){return null==a?"":(a+"").replace(na,"")},
// results is for internal usage only
makeArray:function(a,b){var c=b||[];return null!=a&&(d(Object(a))?ma.merge(c,"string"==typeof a?[a]:a):da.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:ea.call(b,a,c)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){
// Go through the array, only saving the items
// that pass the validator function
for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},
// arg is for internal usage only
map:function(a,b,c){var e,f,g=0,h=[];
// Go through the array, translating each of the items to their new values
if(d(a))for(e=a.length;g<e;g++)f=b(a[g],g,c),null!=f&&h.push(f);else for(g in a)f=b(a[g],g,c),null!=f&&h.push(f);
// Flatten any nested arrays
return ca.apply([],h)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,d,e;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof b&&(c=a[b],b=a,a=c),ma.isFunction(a))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return d=ba.call(arguments,2),e=function(){return a.apply(b||this,d.concat(ba.call(arguments)))},e.guid=a.guid=a.guid||ma.guid++,e},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:ka}),"function"==typeof Symbol&&(ma.fn[Symbol.iterator]=$[Symbol.iterator]),
// Populate the class2type map
ma.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){fa["[object "+b+"]"]=b.toLowerCase()});var ra=/*!
 * Sizzle CSS Selector Engine v2.3.0
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-04
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,k,m=b&&b.ownerDocument,
// nodeType defaults to 9, since context defaults to document
o=b?b.nodeType:9;
// Return early from calls with invalid selector or context
if(c=c||[],"string"!=typeof a||!a||1!==o&&9!==o&&11!==o)return c;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!d&&((b?b.ownerDocument||b:P)!==H&&G(b),b=b||H,J)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==o&&(i=ra.exec(a)))
// ID selector
if(e=i[1]){
// Document context
if(9===o){if(!(g=b.getElementById(e)))return c;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(g.id===e)return c.push(g),c}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(m&&(g=m.getElementById(e))&&N(b,g)&&g.id===e)return c.push(g),c}else{if(i[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=i[3])&&w.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}
// Take advantage of querySelectorAll
if(w.qsa&&!U[a+" "]&&(!K||!K.test(a))){if(1!==o)m=b,k=a;else if("object"!==b.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(h=b.getAttribute("id"))?h=h.replace(va,wa):b.setAttribute("id",h=O),
// Prefix every selector in the list
j=A(a),f=j.length;f--;)j[f]="#"+h+" "+n(j[f]);k=j.join(","),
// Expand context for sibling selectors
m=sa.test(a)&&l(b.parentNode)||b}if(k)try{return $.apply(c,m.querySelectorAll(k)),c}catch(p){}finally{h===O&&b.removeAttribute("id")}}}
// All others
return C(a.replace(ha,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function c(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+" ")>x.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function d(a){return a[O]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function e(a){var b=H.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function f(a,b){for(var c=a.split("|"),d=c.length;d--;)x.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function j(a){
// Known :disabled false positives:
// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(b){
// Check form elements and option elements for explicit disabling
// Check non-disabled form elements for fieldset[disabled] ancestors
// Support: IE6-11+
// Ancestry is covered for us
// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
/* jshint -W018 */
return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ya(b))!==a)}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function k(a){return d(function(b){return b=+b,d(function(c,d){
// Match elements found at the specified indexes
for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function l(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}
// Easy API for creating new setFilters
function m(){}function n(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function o(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=R++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,e){for(;b=b[d];)if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[Q,h];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(i){for(;b=b[d];)if((1===b.nodeType||g)&&a(b,c,i))return!0}else for(;b=b[d];)if(1===b.nodeType||g)if(l=b[O]||(b[O]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===Q&&j[1]===h)
// Assign to newCache so results back-propagate to previous elements
return m[2]=j[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
k[f]=m,m[2]=a(b,c,i))return!0}}}function p(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function q(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function r(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function s(a,b,c,e,f,g){return e&&!e[O]&&(e=s(e)),f&&!f[O]&&(f=s(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,
// Get initial elements from seed or context
p=d||q(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
s=!a||!d&&b?p:r(p,m,a,h,i),t=c?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
f||(d?a:o||e)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
g:s;
// Apply postFilter
if(
// Find primary matches
c&&c(s,t,h,i),e)for(j=r(t,n),e(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=t.length;k--;)(l=t[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(s[k]=l);f(null,t=[],j,i)}for(
// Move matched elements from seed to results to keep them synchronized
k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=r(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function t(a){for(var b,c,d,e=a.length,f=x.relative[a[0].type],g=f||x.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=o(function(a){return a===b},g,!0),j=o(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==D)||((b=c).nodeType?i(a,c,d):j(a,c,d));
// Avoid hanging onto element (issue #299)
return b=null,e}];h<e;h++)if(c=x.relative[a[h].type])k=[o(p(k),c)];else{
// Return special upon seeing a positional matcher
if(c=x.filter[a[h].type].apply(null,a[h].matches),c[O]){for(
// Find the next relative operator (if any) for proper handling
d=++h;d<e&&!x.relative[a[d].type];d++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return s(h>1&&p(k),h>1&&n(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,h<d&&t(a.slice(h,d)),d<e&&t(a=a.slice(d)),d<e&&n(a))}k.push(c)}return p(k)}function u(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],q=[],s=D,
// We must always have either seed elements or outermost context
t=d||f&&x.find.TAG("*",j),
// Use integer dirruns iff this is the outermost matcher
u=Q+=null==s?1:Math.random()||.1,v=t.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(j&&(D=g===H||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===H||(G(k),h=!J);m=a[l++];)if(m(k,g||H,h)){i.push(k);break}j&&(Q=u)}
// Track unmatched elements for set filters
e&&(
// They will have gone through all possible matchers
(k=!m&&k)&&n--,
// Lengthen the array for every element, matched or not
d&&p.push(k))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,q,g,h);if(d){
// Reintegrate element matches to eliminate the need for sorting
if(n>0)for(;o--;)p[o]||q[o]||(q[o]=Y.call(i));
// Discard index placeholder values to get only actual matches
q=r(q)}
// Add matches to results
$.apply(i,q),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
j&&!d&&q.length>0&&n+c.length>1&&b.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return j&&(Q=u,D=s),p};return e?d(g):g}var v,w,x,y,z,A,B,C,D,E,F,
// Local document vars
G,H,I,J,K,L,M,N,
// Instance-specific data
O="sizzle"+1*new Date,P=a.document,Q=0,R=0,S=c(),T=c(),U=c(),V=function(a,b){return a===b&&(F=!0),0},
// Instance methods
W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
aa=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ca="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
da="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ea="\\["+ca+"*("+da+")(?:"+ca+
// Operator (capture 2)
"*([*^$|!~]?=)"+ca+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ta=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),ua=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
va=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,wa=function(a,b){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return b?"\0"===a?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
xa=function(){G()},ya=o(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{$.apply(X=_.call(P.childNodes),P.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
X[P.childNodes.length].nodeType}catch(za){$={apply:X.length?
// Leverage slice if possible
function(a,b){Z.apply(a,_.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){
// Can't trust NodeList.length
for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}
// Expose support vars for convenience
w=b.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
z=b.isXML=function(a){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
G=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:P;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return d!==H&&9===d.nodeType&&d.documentElement?(H=d,I=H.documentElement,J=!z(H),P!==H&&(c=H.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",xa,!1):c.attachEvent&&c.attachEvent("onunload",xa)),w.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),w.getElementsByTagName=e(function(a){return a.appendChild(H.createComment("")),!a.getElementsByTagName("*").length}),w.getElementsByClassName=qa.test(H.getElementsByClassName),w.getById=e(function(a){return I.appendChild(a).id=O,!H.getElementsByName||!H.getElementsByName(O).length}),w.getById?(x.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&J){var c=b.getElementById(a);return c?[c]:[]}},x.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){return a.getAttribute("id")===b}}):(delete x.find.ID,x.filter.ID=function(a){var b=a.replace(ta,ua);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),x.find.TAG=w.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):w.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
f=b.getElementsByTagName(a);
// Filter out possible comments
if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},x.find.CLASS=w.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&J)return b.getElementsByClassName(a)},L=[],K=[],(w.qsa=qa.test(H.querySelectorAll))&&(e(function(a){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
I.appendChild(a).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
a.querySelectorAll("[msallowcapture^='']").length&&K.push("[*^$]="+ca+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
a.querySelectorAll("[selected]").length||K.push("\\["+ca+"*(?:value|"+ba+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
a.querySelectorAll("[id~="+O+"-]").length||K.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
a.querySelectorAll(":checked").length||K.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
a.querySelectorAll("a#"+O+"+*").length||K.push(".#.+[+~]")}),e(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var b=H.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
a.querySelectorAll("[name=d]").length&&K.push("name"+ca+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==a.querySelectorAll(":enabled").length&&K.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
I.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&K.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x"),K.push(",.*:")})),(w.matchesSelector=qa.test(M=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&e(function(a){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
w.disconnectedMatch=M.call(a,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
M.call(a,"[s!='']:x"),L.push("!=",fa)}),K=K.length&&new RegExp(K.join("|")),L=L.length&&new RegExp(L.join("|")),b=qa.test(I.compareDocumentPosition),N=b||qa.test(I.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},V=b?function(a,b){
// Flag for duplicate removal
if(a===b)return F=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var c=!a.compareDocumentPosition-!b.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!w.sortDetached&&b.compareDocumentPosition(a)===c?a===H||a.ownerDocument===P&&N(P,a)?-1:b===H||b.ownerDocument===P&&N(P,b)?1:E?aa(E,a)-aa(E,b):0:4&c?-1:1)}:function(a,b){
// Exit early if the nodes are identical
if(a===b)return F=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];
// Parentless nodes are either documents or disconnected
if(!e||!f)return a===H?-1:b===H?1:e?-1:f?1:E?aa(E,a)-aa(E,b):0;if(e===f)return g(a,b);for(
// Otherwise we need full lists of their ancestors for comparison
c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);
// Walk down the tree looking for a discrepancy
for(;h[d]===i[d];)d++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return d?g(h[d],i[d]):h[d]===P?-1:i[d]===P?1:0},H):H},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if(
// Set document vars if needed
(a.ownerDocument||a)!==H&&G(a),
// Make sure that attribute selectors are quoted
c=c.replace(ka,"='$1']"),w.matchesSelector&&J&&!U[c+" "]&&(!L||!L.test(c))&&(!K||!K.test(c)))try{var d=M.call(a,c);
// IE 9's matchesSelector returns false on disconnected nodes
if(d||w.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,H,null,[a]).length>0},b.contains=function(a,b){
// Set document vars if needed
return(a.ownerDocument||a)!==H&&G(a),N(a,b)},b.attr=function(a,b){
// Set document vars if needed
(a.ownerDocument||a)!==H&&G(a);var c=x.attrHandle[b.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
d=c&&W.call(x.attrHandle,b.toLowerCase())?c(a,b,!J):void 0;return void 0!==d?d:w.attributes||!J?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.escape=function(a){return(a+"").replace(va,wa)},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(
// Unless we *know* we can detect duplicates, assume their presence
F=!w.detectDuplicates,E=!w.sortStable&&a.slice(0),a.sort(V),F){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return E=null,a},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
y=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof a.textContent)return a.textContent;
// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling)c+=y(a)}else if(3===e||4===e)return a.nodeValue}else
// If no nodeType, this is expected to be an array
for(;b=a[d++];)
// Do not traverse comment nodes
c+=y(b);
// Do not include comment or processing instruction nodes
return c},x=b.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
// Move the given value to match[3] whether quoted or unquoted
return a[1]=a[1].replace(ta,ua),a[3]=(a[3]||a[4]||a[5]||"").replace(ta,ua),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=A(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ta,ua).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=S[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&S(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
// Shortcut for :nth-*(n)
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){
// :(first|last|only)-(child|of-type)
if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
o=p="only"===a&&!o&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(o=[g?q.firstChild:q.lastChild],g&&s){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
m=q,l=m[O]||(m[O]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(
// Fallback to seeking `elem` from the start
t=n=0)||o.pop();)
// When found, cache indexes on `parent` and break
if(1===m.nodeType&&++t&&m===b){k[a]=[Q,n,t];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
s&&(
// ...in a gzip-friendly way
m=b,l=m[O]||(m[O]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===Q&&j[1],t=n),t===!1)
// Use the same loop as above to seek `elem` from the start
for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(
// Cache the index of each encountered element
s&&(l=m[O]||(m[O]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[Q,t]),m!==b)););
// Incorporate the offset, then check against cycle size
return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,c){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,f=x.pseudos[a]||x.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return f[O]?f(c):f.length>1?(e=[a,a,"",c],x.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{
// Potentially complex pseudos
not:d(function(a){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],e=B(a.replace(ha,"$1"));return e[O]?d(function(a,b,c,d){
// Match elements unmatched by `matcher`
for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){
// Don't keep the element (issue #299)
return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ta,ua),function(b){return(b.textContent||b.innerText||y(b)).indexOf(a)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:d(function(a){
// lang value must be a valid identifier
return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ta,ua).toLowerCase(),function(b){var c;do if(c=J?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),
// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===I},focus:function(a){return a===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
// Boolean properties
enabled:j(!1),disabled:j(!0),checked:function(a){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){
// Accessing this property makes selected-by-default
// options in Safari work properly
return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},
// Contents
empty:function(a){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!x.pseudos.empty(a)},
// Element/input types
header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},
// Position-in-collection
first:k(function(){return[0]}),last:k(function(a,b){return[b-1]}),eq:k(function(a,b,c){return[c<0?c+b:c]}),even:k(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:k(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:k(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:k(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},x.pseudos.nth=x.pseudos.eq;
// Add button/input type pseudos
for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[v]=h(v);for(v in{submit:!0,reset:!0})x.pseudos[v]=i(v);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return m.prototype=x.filters=x.pseudos,x.setFilters=new m,A=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=T[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=x.preFilter;h;){
// Comma and first run
d&&!(e=ia.exec(h))||(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,
// Cast descendant combinators to space
type:e[0].replace(ha," ")}),h=h.slice(d.length));
// Filters
for(g in x.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return c?h.length:h?b.error(a):T(a,i).slice(0)},B=b.compile=function(a,b){var c,d=[],e=[],f=U[a+" "];if(!f){for(
// Generate a function of recursive functions that can be used to check each element
b||(b=A(a)),c=b.length;c--;)f=t(b[c]),f[O]?d.push(f):e.push(f);
// Cache the compiled function
f=U(a,u(e,d)),
// Save selector and tokenization
f.selector=a}return f},C=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,k=!d&&A(a=j.selector||a);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(c=c||[],1===k.length){if(
// Reduce context if the leading compound selector is an ID
f=k[0]=k[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&w.getById&&9===b.nodeType&&J&&x.relative[f[1].type]){if(b=(x.find.ID(g.matches[0].replace(ta,ua),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!x.relative[h=g.type]);)if((i=x.find[h])&&(d=i(g.matches[0].replace(ta,ua),sa.test(f[0].type)&&l(b.parentNode)||b))){if(
// If seed is empty or no tokens remain, we can return early
f.splice(e,1),a=d.length&&n(f),!a)return $.apply(c,d),c;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(j||B(a,k))(d,b,!J,c,!b||sa.test(a)&&l(b.parentNode)||b),c},w.sortStable=O.split("").sort(V).join("")===O,w.detectDuplicates=!!F,G(),w.sortDetached=e(function(a){
// Should return 1, but returns 4 (following)
return 1&a.compareDocumentPosition(H.createElement("fieldset"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),w.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);ma.find=ra,ma.expr=ra.selectors,
// Deprecated
ma.expr[":"]=ma.expr.pseudos,ma.uniqueSort=ma.unique=ra.uniqueSort,ma.text=ra.getText,ma.isXMLDoc=ra.isXML,ma.contains=ra.contains,ma.escapeSelector=ra.escape;var sa=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&ma(a).is(c))break;d.push(a)}return d},ta=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},ua=ma.expr.match.needsContext,va=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,wa=/^.[^:#\[\.,]*$/;ma.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?ma.find.matchesSelector(d,a)?[d]:[]:ma.find.matches(a,ma.grep(b,function(a){return 1===a.nodeType}))},ma.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(ma(a).filter(function(){for(b=0;b<d;b++)if(ma.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)ma.find(a,e[b],c);return d>1?ma.uniqueSort(c):c},filter:function(a){return this.pushStack(e(this,a||[],!1))},not:function(a){return this.pushStack(e(this,a||[],!0))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!e(this,"string"==typeof a&&ua.test(a)?ma(a):a||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var xa,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
ya=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,za=ma.fn.init=function(a,b,c){var d,e;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
c=c||xa,"string"==typeof a){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
d="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:ya.exec(a),!d||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);
// HANDLE: $(html) -> $(array)
if(d[1]){
// HANDLE: $(html, props)
if(b=b instanceof ma?b[0]:b,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
ma.merge(this,ma.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:_,!0)),va.test(d[1])&&ma.isPlainObject(b))for(d in b)
// Properties of context are called as methods if possible
ma.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}
// Inject the element directly into the jQuery object
return e=_.getElementById(d[2]),e&&(this[0]=e,this.length=1),this}
// Execute immediately if ready is not present
return a.nodeType?(this[0]=a,this.length=1,this):ma.isFunction(a)?void 0!==c.ready?c.ready(a):a(ma):ma.makeArray(a,this)};
// Give the init function the jQuery prototype for later instantiation
za.prototype=ma.fn,
// Initialize central reference
xa=ma(_);var Aa=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Ba={children:!0,contents:!0,next:!0,prev:!0};ma.fn.extend({has:function(a){var b=ma(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(ma.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&ma(a);
// Positional selectors never match, since there's no _selection_ context
if(!ua.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:
// Don't pass non-elements to Sizzle
1===c.nodeType&&ma.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?ma.uniqueSort(f):f)},
// Determine the position of an element within the set
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?ea.call(ma(a),this[0]):ea.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(ma.uniqueSort(ma.merge(this.get(),ma(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),ma.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return sa(a,"parentNode")},parentsUntil:function(a,b,c){return sa(a,"parentNode",c)},next:function(a){return f(a,"nextSibling")},prev:function(a){return f(a,"previousSibling")},nextAll:function(a){return sa(a,"nextSibling")},prevAll:function(a){return sa(a,"previousSibling")},nextUntil:function(a,b,c){return sa(a,"nextSibling",c)},prevUntil:function(a,b,c){return sa(a,"previousSibling",c)},siblings:function(a){return ta((a.parentNode||{}).firstChild,a)},children:function(a){return ta(a.firstChild)},contents:function(a){return a.contentDocument||ma.merge([],a.childNodes)}},function(a,b){ma.fn[a]=function(c,d){var e=ma.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=ma.filter(d,e)),this.length>1&&(Ba[a]||ma.uniqueSort(e),Aa.test(a)&&e.reverse()),this.pushStack(e)}});var Ca=/\S+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
ma.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?g(a):ma.extend({},a);var// Flag to know if list is currently firing
b,
// Last fire value for non-forgettable lists
c,
// Flag to know if list was already fired
d,
// Flag to prevent firing
e,
// Actual callback list
f=[],
// Queue of execution data for repeatable lists
h=[],
// Index of currently firing callback (modified by add/remove as needed)
i=-1,
// Fire callbacks
j=function(){for(
// Enforce single-firing
e=a.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
d=b=!0;h.length;i=-1)for(c=h.shift();++i<f.length;)
// Run callback and check for early termination
f[i].apply(c[0],c[1])===!1&&a.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
i=f.length,c=!1);
// Forget the data if we're done with it
a.memory||(c=!1),b=!1,
// Clean up if we're done firing for good
e&&(
// Keep an empty list if we have data for future add calls
f=c?[]:"")},
// Actual Callbacks object
k={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return f&&(c&&!b&&(i=f.length-1,h.push(c)),function d(b){ma.each(b,function(b,c){ma.isFunction(c)?a.unique&&k.has(c)||f.push(c):c&&c.length&&"string"!==ma.type(c)&&
// Inspect recursively
d(c)})}(arguments),c&&!b&&j()),this},
// Remove a callback from the list
remove:function(){return ma.each(arguments,function(a,b){for(var c;(c=ma.inArray(b,f,c))>-1;)f.splice(c,1),
// Handle firing indexes
c<=i&&i--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?ma.inArray(a,f)>-1:f.length>0},
// Remove all callbacks from the list
empty:function(){return f&&(f=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return e=h=[],f=c="",this},disabled:function(){return!f},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return e=h=[],c||b||(f=c=""),this},locked:function(){return!!e},
// Call all callbacks with the given context and arguments
fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||j()),this},
// Call all the callbacks with the given arguments
fire:function(){return k.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!d}};return k},ma.extend({Deferred:function(b){var c=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",ma.Callbacks("memory"),ma.Callbacks("memory"),2],["resolve","done",ma.Callbacks("once memory"),ma.Callbacks("once memory"),0,"resolved"],["reject","fail",ma.Callbacks("once memory"),ma.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},
// Keep pipe for back-compat
pipe:function(){var a=arguments;return ma.Deferred(function(b){ma.each(c,function(c,d){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var e=ma.isFunction(a[d[4]])&&a[d[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&ma.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){function f(b,c,d,e){return function(){var j=this,k=arguments,l=function(){var a,l;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(b<g)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(a=d.apply(j,k),a===c.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=a&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof a||"function"==typeof a)&&a.then,
// Handle a returned thenable
ma.isFunction(l)?
// Special processors (notify) just wait for resolution
e?l.call(a,f(g,c,h,e),f(g,c,i,e)):(
// ...and disregard older resolution values
g++,l.call(a,f(g,c,h,e),f(g,c,i,e),f(g,c,h,c.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
d!==h&&(j=void 0,k=[a]),
// Process the value(s)
// Default process is resolve
(e||c.resolveWith)(j,k))}},
// Only normal processors (resolve) catch and reject exceptions
m=e?l:function(){try{l()}catch(a){ma.Deferred.exceptionHook&&ma.Deferred.exceptionHook(a,m.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
b+1>=g&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
d!==i&&(j=void 0,k=[a]),c.rejectWith(j,k))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
b?m():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
ma.Deferred.getStackHook&&(m.stackTrace=ma.Deferred.getStackHook()),a.setTimeout(m))}}var g=0;return ma.Deferred(function(a){
// progress_handlers.add( ... )
c[0][3].add(f(0,a,ma.isFunction(e)?e:h,a.notifyWith)),
// fulfilled_handlers.add( ... )
c[1][3].add(f(0,a,ma.isFunction(b)?b:h)),
// rejected_handlers.add( ... )
c[2][3].add(f(0,a,ma.isFunction(d)?d:i))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?ma.extend(a,e):e}},f={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return ma.each(c,function(a,b){var g=b[2],h=b[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
e[b[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
d=h},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
c[3-a][2].disable,
// progress_callbacks.lock
c[0][2].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
g.add(b[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},
// Deferred helper
when:function(a){var
// count of uncompleted subordinates
b=arguments.length,
// count of unprocessed arguments
c=b,
// subordinate fulfillment data
d=Array(c),e=ba.call(arguments),
// the master Deferred
f=ma.Deferred(),
// subordinate callback factory
g=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?ba.call(arguments):c,--b||f.resolveWith(d,e)}};
// Single- and empty arguments are adopted like Promise.resolve
if(b<=1&&(j(a,f.done(g(c)).resolve,f.reject),"pending"===f.state()||ma.isFunction(e[c]&&e[c].then)))return f.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;c--;)j(e[c],g(c),f.reject);return f.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Da=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ma.Deferred.exceptionHook=function(b,c){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
a.console&&a.console.warn&&b&&Da.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},ma.readyException=function(b){a.setTimeout(function(){throw b})};
// The deferred used on DOM ready
var Ea=ma.Deferred();ma.fn.ready=function(a){return Ea.then(a)["catch"](function(a){ma.readyException(a)}),this},ma.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(a){a?ma.readyWait++:ma.ready(!0)},
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
(a===!0?--ma.readyWait:ma.isReady)||(
// Remember that the DOM is ready
ma.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
a!==!0&&--ma.readyWait>0||
// If there are functions bound, to execute
Ea.resolveWith(_,[ma]))}}),ma.ready.then=Ea.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===_.readyState||"loading"!==_.readyState&&!_.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
a.setTimeout(ma.ready):(
// Use the handy event callback
_.addEventListener("DOMContentLoaded",k),
// A fallback to window.onload, that will always work
a.addEventListener("load",k));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Fa=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
// Sets many values
if("object"===ma.type(c)){e=!0;for(h in c)Fa(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,ma.isFunction(d)||(g=!0),j&&(
// Bulk operations run against the entire set
g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(ma(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
// Gets
return e?a:j?b.call(a):i?b(a[0],c):f},Ga=function(a){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===a.nodeType||9===a.nodeType||!+a.nodeType};l.uid=1,l.prototype={cache:function(a){
// Check if the owner object already has a cache
var b=a[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return b||(b={},Ga(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof b)e[ma.camelCase(b)]=c;else
// Copy the properties one-by-one to the cache object
for(d in b)e[ma.camelCase(d)]=b[d];return e},get:function(a,b){
// Always use camelCase key (gh-2257)
return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][ma.camelCase(b)]},access:function(a,b,c){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){
// Support array or space separated string of keys
ma.isArray(b)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
b=b.map(ma.camelCase):(b=ma.camelCase(b),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
b=b in d?[b]:b.match(Ca)||[]),c=b.length;for(;c--;)delete d[b[c]]}
// Remove the expando if there's no more data
(void 0===b||ma.isEmptyObject(d))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!ma.isEmptyObject(b)}};var Ha=new l,Ia=new l,Ja=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ka=/[A-Z]/g;ma.extend({hasData:function(a){return Ia.hasData(a)||Ha.hasData(a)},data:function(a,b,c){return Ia.access(a,b,c)},removeData:function(a,b){Ia.remove(a,b)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(a,b,c){return Ha.access(a,b,c)},_removeData:function(a,b){Ha.remove(a,b)}}),ma.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
// Gets all values
if(void 0===a){if(this.length&&(e=Ia.get(f),1===f.nodeType&&!Ha.get(f,"hasDataAttrs"))){for(c=g.length;c--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=ma.camelCase(d.slice(5)),m(f,d,e[d])));Ha.set(f,"hasDataAttrs",!0)}return e}
// Sets multiple values
// Sets multiple values
return"object"==typeof a?this.each(function(){Ia.set(this,a)}):Fa(this,function(b){var c;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(f&&void 0===b){if(
// Attempt to get data from the cache
// The key will always be camelCased in Data
c=Ia.get(f,a),void 0!==c)return c;if(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
c=m(f,a),void 0!==c)return c}else
// Set the data...
this.each(function(){
// We always store the camelCased key
Ia.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){Ia.remove(this,a)})}}),ma.extend({queue:function(a,b,c){var d;if(a)
// Speed up dequeue by getting out quickly if this is just a lookup
return b=(b||"fx")+"queue",d=Ha.get(a,b),c&&(!d||ma.isArray(c)?d=Ha.access(a,b,ma.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=ma.queue(a,b),d=c.length,e=c.shift(),f=ma._queueHooks(a,b),g=function(){ma.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// Clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return Ha.get(a,c)||Ha.access(a,c,{empty:ma.Callbacks("once memory").add(function(){Ha.remove(a,[b+"queue",c])})})}}),ma.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?ma.queue(this[0],a):void 0===b?this:this.each(function(){var c=ma.queue(this,a,b);
// Ensure a hooks for this queue
ma._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&ma.dequeue(this,a)})},dequeue:function(a){return this.each(function(){ma.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=ma.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=Ha.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var La=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ma=new RegExp("^(?:([+-])=|)("+La+")([a-z%]*)$","i"),Na=["Top","Right","Bottom","Left"],Oa=function(a,b){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return a=b||a,"none"===a.style.display||""===a.style.display&&ma.contains(a.ownerDocument,a)&&"none"===ma.css(a,"display")},Pa=function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e},Qa={};ma.fn.extend({show:function(){return p(this,!0)},hide:function(){return p(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Oa(this)?ma(this).show():ma(this).hide()})}});var Ra=/^(?:checkbox|radio)$/i,Sa=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ta=/^$|\/(?:java|ecma)script/i,Ua={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
Ua.optgroup=Ua.option,Ua.tbody=Ua.tfoot=Ua.colgroup=Ua.caption=Ua.thead,Ua.th=Ua.td;var Va=/<|&#?\w+;/;!function(){var a=_.createDocumentFragment(),b=a.appendChild(_.createElement("div")),c=_.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
ka.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
b.innerHTML="<textarea>x</textarea>",ka.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var Wa=_.documentElement,Xa=/^key/,Ya=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Za=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
ma.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Ha.get(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(q)for(
// Caller can pass in an object of custom data in lieu of the handler
c.handler&&(f=c,c=f.handler,e=f.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
e&&ma.find.matchesSelector(Wa,e),
// Make sure that the handler has a unique ID, used to find/remove it later
c.guid||(c.guid=ma.guid++),
// Init the element's event structure and main handler, if this is the first
(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"!=typeof ma&&ma.event.triggered!==b.type?ma.event.dispatch.apply(a,arguments):void 0}),
// Handle multiple events separated by a space
b=(b||"").match(Ca)||[""],j=b.length;j--;)h=Za.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
n&&(
// If event changes its type, use the special event handlers for the changed type
l=ma.event.special[n]||{},
// If selector defined, determine special event api type, otherwise given type
n=(e?l.delegateType:l.bindType)||n,
// Update special based on newly reset type
l=ma.event.special[n]||{},
// handleObj is passed to all event handlers
k=ma.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&ma.expr.match.needsContext.test(e),namespace:o.join(".")},f),
// Init the event handler queue if we're the first
(m=i[n])||(m=i[n]=[],m.delegateCount=0,
// Only use addEventListener if the special events handler returns false
l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),
// Add to the element's handler list, delegates in front
e?m.splice(m.delegateCount++,0,k):m.push(k),
// Keep track of which events have ever been used, for event optimization
ma.event.global[n]=!0)},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=Ha.hasData(a)&&Ha.get(a);if(q&&(i=q.events)){for(
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(Ca)||[""],j=b.length;j--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=Za.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=ma.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||ma.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)ma.event.remove(a,n+b[j],c,d,!0);
// Remove data and the expando if it's no longer used
ma.isEmptyObject(i)&&Ha.remove(a,"handle events")}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
var b,c,d,e,f,g,h=ma.event.fix(a),i=new Array(arguments.length),j=(Ha.get(this,"events")||{})[h.type]||[],k=ma.event.special[h.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
i[0]=h,b=1;b<arguments.length;b++)i[b]=arguments[b];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(h.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,h)!==!1){for(
// Determine handlers
g=ma.event.handlers.call(this,h,j),
// Run delegates first; they may want to stop propagation beneath us
b=0;(e=g[b++])&&!h.isPropagationStopped();)for(h.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!h.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
h.rnamespace&&!h.rnamespace.test(f.namespace)||(h.handleObj=f,h.data=f.data,d=((ma.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,i),void 0!==d&&(h.result=d)===!1&&(h.preventDefault(),h.stopPropagation()));
// Call the postDispatch hook for the mapped type
return k.postDispatch&&k.postDispatch.call(this,h),h.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
// Support: IE <=9
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
//
// Support: Firefox <=42
// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],
// Don't conflict with Object.prototype properties (#13203)
e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?ma(e,this).index(i)>-1:ma.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}
// Add the remaining (directly-bound) handlers
return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(ma.Event.prototype,a,{enumerable:!0,configurable:!0,get:ma.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[ma.expando]?a:new ma.Event(a)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==v()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===v()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&ma.nodeName(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return ma.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},ma.removeEvent=function(a,b,c){
// This "if" is needed for plain objects
a.removeEventListener&&a.removeEventListener(b,c)},ma.Event=function(a,b){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: Android <=2.3 only
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof ma.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?t:u,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&ma.extend(this,b),this.timeStamp=a&&a.timeStamp||ma.now(),void(this[ma.expando]=!0)):new ma.Event(a,b)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ma.Event.prototype={constructor:ma.Event,isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=t,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=t,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=t,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
ma.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==a.which&&Xa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&Ya.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},ma.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
ma.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){ma.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return e&&(e===d||ma.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),ma.fn.extend({on:function(a,b,c,d){return w(this,a,b,c,d)},one:function(a,b,c,d){return w(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return d=a.handleObj,ma(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(e in a)this.off(e,b,a[e]);return this}
// ( types [, fn] )
return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=u),this.each(function(){ma.event.remove(this,a,c,b)})}});var/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
$a=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
_a=/<script|<style|<link/i,
// checked="checked" or checked
ab=/checked\s*(?:[^=]|=\s*.checked.)/i,bb=/^true\/(.*)/,cb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ma.extend({htmlPrefilter:function(a){return a.replace($a,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=ma.contains(a.ownerDocument,a);
// Fix IE cloning issues
if(!(ka.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||ma.isXMLDoc(a)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
g=q(h),f=q(a),d=0,e=f.length;d<e;d++)B(f[d],g[d]);
// Copy the events from the original to the clone
if(b)if(c)for(f=f||q(a),g=g||q(h),d=0,e=f.length;d<e;d++)A(f[d],g[d]);else A(a,h);
// Return the cloned set
// Preserve script evaluation history
return g=q(h,"script"),g.length>0&&r(g,!i&&q(a,"script")),h},cleanData:function(a){for(var b,c,d,e=ma.event.special,f=0;void 0!==(c=a[f]);f++)if(Ga(c)){if(b=c[Ha.expando]){if(b.events)for(d in b.events)e[d]?ma.event.remove(c,d):ma.removeEvent(c,d,b.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
c[Ha.expando]=void 0}c[Ia.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
c[Ia.expando]=void 0)}}}),ma.fn.extend({detach:function(a){return D(this,a,!0)},remove:function(a){return D(this,a)},text:function(a){return Fa(this,function(a){return void 0===a?ma.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return C(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=x(this,a);b.appendChild(a)}})},prepend:function(){return C(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=x(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return C(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return C(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(
// Prevent memory leaks
ma.cleanData(q(a,!1)),
// Remove any remaining nodes
a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return ma.clone(this,a,b)})},html:function(a){return Fa(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof a&&!_a.test(a)&&!Ua[(Sa.exec(a)||["",""])[1].toLowerCase()]){a=ma.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},
// Remove element nodes and prevent memory leaks
1===b.nodeType&&(ma.cleanData(q(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];
// Make the changes, replacing each non-ignored context element with the new content
return C(this,arguments,function(b){var c=this.parentNode;ma.inArray(this,a)<0&&(ma.cleanData(q(this)),c&&c.replaceChild(b,this))},a)}}),ma.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){ma.fn[a]=function(a){for(var c,d=[],e=ma(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),ma(e[g])[b](c),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
da.apply(d,c.get());return this.pushStack(d)}});var db=/^margin/,eb=new RegExp("^("+La+")(?!px)[a-z%]+$","i"),fb=function(b){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function b(){
// This is a singleton, we need to execute it only once
if(h){h.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Wa.appendChild(g);var b=a.getComputedStyle(h);c="1%"!==b.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
f="2px"===b.marginLeft,d="4px"===b.width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
h.style.marginRight="50%",e="4px"===b.marginRight,Wa.removeChild(g),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
h=null}}var c,d,e,f,g=_.createElement("div"),h=_.createElement("div");
// Finish early in limited (non-browser) environments
h.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",ka.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h),ma.extend(ka,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),d},pixelMarginRight:function(){return b(),e},reliableMarginLeft:function(){return b(),f}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
gb=/^(none|table(?!-c[ea]).+)/,hb={position:"absolute",visibility:"hidden",display:"block"},ib={letterSpacing:"0",fontWeight:"400"},jb=["Webkit","Moz","ms"],kb=_.createElement("div").style;ma.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=E(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},
// Get and set the style property on a DOM Node
style:function(a,b,c,d){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var e,f,g,h=ma.camelCase(b),i=a.style;
// Check if we're setting a value
// Gets hook for the prefixed version, then unprefixed version
// Check if we're setting a value
// If a hook was provided get the non-computed value from there
// Convert "+=" or "-=" to relative numbers (#7345)
// Fixes bug #9237
// Make sure that null and NaN values aren't set (#7116)
// If a number was passed in, add the unit (except for certain CSS properties)
// background-* props affect original clone's values
// If a hook was provided, use that value, otherwise just set the specified value
return b=ma.cssProps[h]||(ma.cssProps[h]=G(h)||h),g=ma.cssHooks[b]||ma.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ma.exec(c))&&e[1]&&(c=n(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(ma.cssNumber[h]?"":"px")),ka.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=ma.camelCase(b);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return b=ma.cssProps[h]||(ma.cssProps[h]=G(h)||h),g=ma.cssHooks[b]||ma.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=E(a,b,d)),"normal"===e&&b in ib&&(e=ib[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),ma.each(["height","width"],function(a,b){ma.cssHooks[b]={get:function(a,c,d){if(c)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!gb.test(ma.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?J(a,b,d):Pa(a,hb,function(){return J(a,b,d)})},set:function(a,c,d){var e,f=d&&fb(a),g=d&&I(a,b,d,"border-box"===ma.css(a,"boxSizing",!1,f),f);
// Convert to pixels if value adjustment is needed
return g&&(e=Ma.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=ma.css(a,b)),H(a,c,g)}}}),ma.cssHooks.marginLeft=F(ka.reliableMarginLeft,function(a,b){if(b)return(parseFloat(E(a,"marginLeft"))||a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
ma.each({margin:"",padding:"",border:"Width"},function(a,b){ma.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// Assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+Na[d]+b]=f[d]||f[d-2]||f[0];return e}},db.test(a)||(ma.cssHooks[a+b].set=H)}),ma.fn.extend({css:function(a,b){return Fa(this,function(a,b,c){var d,e,f={},g=0;if(ma.isArray(b)){for(d=fb(a),e=b.length;g<e;g++)f[b[g]]=ma.css(a,b[g],!1,d);return f}return void 0!==c?ma.style(a,b,c):ma.css(a,b)},a,b,arguments.length>1)}}),ma.Tween=K,K.prototype={constructor:K,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||ma.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(ma.cssNumber[c]?"":"px")},cur:function(){var a=K.propHooks[this.prop];return a&&a.get?a.get(this):K.propHooks._default.get(this)},run:function(a){var b,c=K.propHooks[this.prop];return this.options.duration?this.pos=b=ma.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):K.propHooks._default.set(this),this}},K.prototype.init.prototype=K.prototype,K.propHooks={_default:{get:function(a){var b;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=ma.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
ma.fx.step[a.prop]?ma.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[ma.cssProps[a.prop]]&&!ma.cssHooks[a.prop]?a.elem[a.prop]=a.now:ma.style(a.elem,a.prop,a.now+a.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
K.propHooks.scrollTop=K.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},ma.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},ma.fx=K.prototype.init,
// Back compat <1.8 extension point
ma.fx.step={};var lb,mb,nb=/^(?:toggle|show|hide)$/,ob=/queueHooks$/;ma.Animation=ma.extend(R,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return n(c.elem,a,Ma.exec(b),c),c}]},tweener:function(a,b){ma.isFunction(a)?(b=a,a=["*"]):a=a.match(Ca);for(var c,d=0,e=a.length;d<e;d++)c=a[d],R.tweeners[c]=R.tweeners[c]||[],R.tweeners[c].unshift(b)},prefilters:[P],prefilter:function(a,b){b?R.prefilters.unshift(a):R.prefilters.push(a)}}),ma.speed=function(a,b,c){var d=a&&"object"==typeof a?ma.extend({},a):{complete:c||!c&&b||ma.isFunction(a)&&a,duration:a,easing:c&&b||b&&!ma.isFunction(b)&&b};
// Go to the end state if fx are off or if document is hidden
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return ma.fx.off||_.hidden?d.duration=0:d.duration="number"==typeof d.duration?d.duration:d.duration in ma.fx.speeds?ma.fx.speeds[d.duration]:ma.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){ma.isFunction(d.old)&&d.old.call(this),d.queue&&ma.dequeue(this,d.queue)},d},ma.fn.extend({fadeTo:function(a,b,c,d){
// Show any hidden elements after setting opacity to 0
return this.filter(Oa).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=ma.isEmptyObject(a),f=ma.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=R(this,ma.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||Ha.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=ma.timers,g=Ha.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ob.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!b&&c||ma.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=Ha.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=ma.timers,g=d?d.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
c.finish=!0,
// Empty the queue first
ma.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// Look for any animations in the old queue and finish them
for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// Turn off finishing flag
delete c.finish})}}),ma.each(["toggle","show","hide"],function(a,b){var c=ma.fn[b];ma.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(N(b,!0),a,d,e)}}),
// Generate shortcuts for custom animations
ma.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){ma.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),ma.timers=[],ma.fx.tick=function(){var a,b=0,c=ma.timers;for(lb=ma.now();b<c.length;b++)a=c[b],
// Checks the timer has not already been removed
a()||c[b]!==a||c.splice(b--,1);c.length||ma.fx.stop(),lb=void 0},ma.fx.timer=function(a){ma.timers.push(a),a()?ma.fx.start():ma.timers.pop()},ma.fx.interval=13,ma.fx.start=function(){mb||(mb=a.requestAnimationFrame?a.requestAnimationFrame(L):a.setInterval(ma.fx.tick,ma.fx.interval))},ma.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(mb):a.clearInterval(mb),mb=null},ma.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
ma.fn.delay=function(b,c){return b=ma.fx?ma.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=_.createElement("input"),b=_.createElement("select"),c=b.appendChild(_.createElement("option"));a.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
ka.checkOn=""!==a.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
ka.optSelected=c.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
a=_.createElement("input"),a.value="t",a.type="radio",ka.radioValue="t"===a.value}();var pb,qb=ma.expr.attrHandle;ma.fn.extend({attr:function(a,b){return Fa(this,ma.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){ma.removeAttr(this,a)})}}),ma.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return"undefined"==typeof a.getAttribute?ma.prop(a,b,c):(1===f&&ma.isXMLDoc(a)||(e=ma.attrHooks[b.toLowerCase()]||(ma.expr.match.bool.test(b)?pb:void 0)),void 0!==c?null===c?void ma.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=ma.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!ka.radioValue&&"radio"===b&&ma.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(Ca);if(e&&1===a.nodeType)for(;c=e[d++];)a.removeAttribute(c)}}),
// Hooks for boolean attributes
pb={set:function(a,b,c){
// Remove boolean attributes when set to false
return b===!1?ma.removeAttr(a,c):a.setAttribute(c,c),c}},ma.each(ma.expr.match.bool.source.match(/\w+/g),function(a,b){var c=qb[b]||ma.find.attr;qb[b]=function(a,b,d){var e,f,g=b.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return d||(f=qb[g],qb[g]=e,e=null!=c(a,b,d)?g:null,qb[g]=f),e}});var rb=/^(?:input|select|textarea|button)$/i,sb=/^(?:a|area)$/i;ma.fn.extend({prop:function(a,b){return Fa(this,ma.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[ma.propFix[a]||a]})}}),ma.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fix name and attach hooks
return 1===f&&ma.isXMLDoc(a)||(b=ma.propFix[b]||b,e=ma.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var b=ma.find.attr(a,"tabindex");return b?parseInt(b,10):rb.test(a.nodeName)||sb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
ka.optSelected||(ma.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),ma.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ma.propFix[this.toLowerCase()]=this});var tb=/[\t\r\n\f]/g;ma.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(ma.isFunction(a))return this.each(function(b){ma(this).addClass(a.call(this,b,S(this)))});if("string"==typeof a&&a)for(b=a.match(Ca)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(tb," ")){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");
// Only assign if different to avoid unneeded rendering.
h=ma.trim(d),e!==h&&c.setAttribute("class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(ma.isFunction(a))return this.each(function(b){ma(this).removeClass(a.call(this,b,S(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(Ca)||[];c=this[i++];)if(e=S(c),
// This expression is here for better compressibility (see addClass)
d=1===c.nodeType&&(" "+e+" ").replace(tb," ")){for(g=0;f=b[g++];)
// Remove *all* instances
for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");
// Only assign if different to avoid unneeded rendering.
h=ma.trim(d),e!==h&&c.setAttribute("class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):ma.isFunction(a)?this.each(function(c){ma(this).toggleClass(a.call(this,c,S(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c)for(
// Toggle individual class names
d=0,e=ma(this),f=a.match(Ca)||[];b=f[d++];)
// Check each className given, space separated list
e.hasClass(b)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||(b=S(this),b&&
// Store className if set
Ha.set(this,"__className__",b),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",b||a===!1?"":Ha.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+S(c)+" ").replace(tb," ").indexOf(b)>-1)return!0;return!1}});var ub=/\r/g,vb=/[\x20\t\r\n\f]+/g;ma.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=ma.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,ma(this).val()):a,
// Treat null/undefined as ""; convert numbers to string
null==e?e="":"number"==typeof e?e+="":ma.isArray(e)&&(e=ma.map(e,function(a){return null==a?"":a+""})),b=ma.valHooks[this.type]||ma.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)
// Handle most common string cases
// Handle cases where value is null/undef or number
return b=ma.valHooks[e.type]||ma.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ub,""):null==c?"":c)}}}),ma.extend({valHooks:{option:{get:function(a){var b=ma.find.attr(a,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=b?b:ma.trim(ma.text(a)).replace(vb," ")}},select:{get:function(a){
// Loop through all the selected options
for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(c=d[i],(c.selected||i===e)&&
// Don't return options that are disabled or in a disabled optgroup
!c.disabled&&(!c.parentNode.disabled||!ma.nodeName(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
b=ma(c).val(),f)return b;
// Multi-Selects return an array
g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=ma.makeArray(b),g=e.length;g--;)d=e[g],/* eslint-disable no-cond-assign */
(d.selected=ma.inArray(ma.valHooks.option.get(d),f)>-1)&&(c=!0);
// Force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),f}}}}),
// Radios and checkboxes getter/setter
ma.each(["radio","checkbox"],function(){ma.valHooks[this]={set:function(a,b){if(ma.isArray(b))return a.checked=ma.inArray(ma(a).val(),b)>-1}},ka.checkOn||(ma.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});
// Return jQuery for attributes-only inclusion
var wb=/^(?:focusinfocus|focusoutblur)$/;ma.extend(ma.event,{trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||_],n=ha.call(b,"type")?b.type:b,o=ha.call(b,"namespace")?b.namespace.split("."):[];
// Don't do events on text and comment nodes
if(g=h=d=d||_,3!==d.nodeType&&8!==d.nodeType&&!wb.test(n+ma.event.triggered)&&(n.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
b=b[ma.expando]?b:new ma.Event(n,"object"==typeof b&&b),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
b.result=void 0,b.target||(b.target=d),
// Clone any incoming data and prepend the event, creating the handler arg list
c=null==c?[b]:ma.makeArray(c,[b]),
// Allow special events to draw outside the lines
l=ma.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!l.noBubble&&!ma.isWindow(d)){for(i=l.delegateType||n,wb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
h===(d.ownerDocument||_)&&m.push(h.defaultView||h.parentWindow||a)}for(
// Fire handlers on the event path
f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,
// jQuery handler
k=(Ha.get(g,"events")||{})[b.type]&&Ha.get(g,"handle"),k&&k.apply(g,c),
// Native handler
k=j&&g[j],k&&k.apply&&Ga(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!Ga(d)||j&&ma.isFunction(d[n])&&!ma.isWindow(d)&&(h=d[j],h&&(d[j]=null),ma.event.triggered=n,d[n](),ma.event.triggered=void 0,h&&(d[j]=h)),b.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(a,b,c){var d=ma.extend(new ma.Event,c,{type:a,isSimulated:!0});ma.event.trigger(d,null,b)}}),ma.fn.extend({trigger:function(a,b){return this.each(function(){ma.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return ma.event.trigger(a,b,c,!0)}}),ma.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){
// Handle event binding
ma.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),ma.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),ka.focusin="onfocusin"in a,
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
ka.focusin||ma.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){ma.event.simulate(b,a.target,ma.event.fix(a))};ma.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=Ha.access(d,b);e||d.addEventListener(a,c,!0),Ha.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=Ha.access(d,b)-1;e?Ha.access(d,b,e):(d.removeEventListener(a,c,!0),Ha.remove(d,b))}}});var xb=a.location,yb=ma.now(),zb=/\?/;
// Cross-browser xml parsing
ma.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||ma.error("Invalid XML: "+b),c};var Ab=/\[\]$/,Bb=/\r?\n/g,Cb=/^(?:submit|button|image|reset|file)$/i,Db=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
ma.param=function(a,b){var c,d=[],e=function(a,b){
// If value is a function, invoke it and use its return value
var c=ma.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};
// If an array was passed in, assume that it is an array of form elements.
if(ma.isArray(a)||a.jquery&&!ma.isPlainObject(a))
// Serialize the form elements
ma.each(a,function(){e(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a)T(c,a[c],b,e);
// Return the resulting serialization
return d.join("&")},ma.fn.extend({serialize:function(){return ma.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=ma.prop(this,"elements");return a?ma.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!ma(this).is(":disabled")&&Db.test(this.nodeName)&&!Cb.test(a)&&(this.checked||!Ra.test(a))}).map(function(a,b){var c=ma(this).val();return null==c?null:ma.isArray(c)?ma.map(c,function(a){return{name:b.name,value:a.replace(Bb,"\r\n")}}):{name:b.name,value:c.replace(Bb,"\r\n")}}).get()}});var Eb=/%20/g,Fb=/#.*$/,Gb=/([?&])_=[^&]*/,Hb=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Ib=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Jb=/^(?:GET|HEAD)$/,Kb=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Lb={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Mb={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Nb="*/".concat("*"),
// Anchor tag for parsing the document origin
Ob=_.createElement("a");Ob.href=xb.href,ma.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:xb.href,type:"GET",isLocal:Ib.test(xb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":ma.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){
// Building a settings object
// Extending ajaxSettings
return b?W(W(a,ma.ajaxSettings),b):W(ma.ajaxSettings,a)},ajaxPrefilter:U(Lb),ajaxTransport:U(Mb),
// Main method
ajax:function(b,c){
// Callback for when everything is done
function d(b,c,d,h){var j,m,n,u,v,w=c;
// Ignore repeat invocations
k||(k=!0,
// Clear timeout if it exists
i&&a.clearTimeout(i),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
e=void 0,
// Cache response headers
g=h||"",
// Set readyState
x.readyState=b>0?4:0,
// Determine if successful
j=b>=200&&b<300||304===b,
// Get response data
d&&(u=X(o,x,d)),
// Convert no matter what (that way responseXXX fields are always set)
u=Y(o,u,x,j),
// If successful, handle type chaining
j?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
o.ifModified&&(v=x.getResponseHeader("Last-Modified"),v&&(ma.lastModified[f]=v),v=x.getResponseHeader("etag"),v&&(ma.etag[f]=v)),
// if no content
204===b||"HEAD"===o.type?w="nocontent":304===b?w="notmodified":(w=u.state,m=u.data,n=u.error,j=!n)):(
// Extract error from statusText and normalize for non-aborts
n=w,!b&&w||(w="error",b<0&&(b=0))),
// Set data for the fake xhr object
x.status=b,x.statusText=(c||w)+"",
// Success/Error
j?r.resolveWith(p,[m,w,x]):r.rejectWith(p,[x,w,n]),
// Status-dependent callbacks
x.statusCode(t),t=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[x,o,j?m:n]),
// Complete
s.fireWith(p,[x,w]),l&&(q.trigger("ajaxComplete",[x,o]),
// Handle the global AJAX counter
--ma.active||ma.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof b&&(c=b,b=void 0),
// Force options to be an object
c=c||{};var e,
// URL without anti-cache param
f,
// Response headers
g,h,
// timeout handle
i,
// Url cleanup var
j,
// Request state (becomes false upon send and true upon completion)
k,
// To know if global events are to be dispatched
l,
// Loop variable
m,
// uncached part of the url
n,
// Create the final options object
o=ma.ajaxSetup({},c),
// Callbacks context
p=o.context||o,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
q=o.context&&(p.nodeType||p.jquery)?ma(p):ma.event,
// Deferreds
r=ma.Deferred(),s=ma.Callbacks("once memory"),
// Status-dependent callbacks
t=o.statusCode||{},
// Headers (they are sent all at once)
u={},v={},
// Default abort message
w="canceled",
// Fake xhr
x={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(k){if(!h)for(h={};b=Hb.exec(g);)h[b[1].toLowerCase()]=b[2];b=h[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return k?g:null},
// Caches the header
setRequestHeader:function(a,b){return null==k&&(a=v[a.toLowerCase()]=v[a.toLowerCase()]||a,u[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(k)
// Execute the appropriate callbacks
x.always(a[x.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(b in a)t[b]=[t[b],a[b]];return this},
// Cancel the request
abort:function(a){var b=a||w;return e&&e.abort(b),d(0,b),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
r.promise(x),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
o.url=((b||o.url||xb.href)+"").replace(Kb,xb.protocol+"//"),
// Alias method option to type as per ticket #12004
o.type=c.method||c.type||o.method||o.type,
// Extract dataTypes list
o.dataTypes=(o.dataType||"*").toLowerCase().match(Ca)||[""],null==o.crossDomain){j=_.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{j.href=o.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
j.href=j.href,o.crossDomain=Ob.protocol+"//"+Ob.host!=j.protocol+"//"+j.host}catch(y){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
o.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
o.data&&o.processData&&"string"!=typeof o.data&&(o.data=ma.param(o.data,o.traditional)),
// Apply prefilters
V(Lb,o,c,x),k)return x;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
l=ma.event&&o.global,
// Watch for a new set of requests
l&&0===ma.active++&&ma.event.trigger("ajaxStart"),
// Uppercase the type
o.type=o.type.toUpperCase(),
// Determine if request has content
o.hasContent=!Jb.test(o.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
f=o.url.replace(Fb,""),
// More options handling for requests with no content
o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Eb,"+")):(
// Remember the hash so we can put it back
n=o.url.slice(f.length),
// If data is available, append data to url
o.data&&(f+=(zb.test(f)?"&":"?")+o.data,
// #9682: remove data so that it's not used in an eventual retry
delete o.data),
// Add anti-cache in uncached url if needed
o.cache===!1&&(f=f.replace(Gb,""),n=(zb.test(f)?"&":"?")+"_="+yb++ +n),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
o.url=f+n),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
o.ifModified&&(ma.lastModified[f]&&x.setRequestHeader("If-Modified-Since",ma.lastModified[f]),ma.etag[f]&&x.setRequestHeader("If-None-Match",ma.etag[f])),
// Set the correct header, if data is being sent
(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",o.contentType),
// Set the Accepts header for the server, depending on the dataType
x.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Nb+"; q=0.01":""):o.accepts["*"]);
// Check for headers option
for(m in o.headers)x.setRequestHeader(m,o.headers[m]);
// Allow custom headers/mimetypes and early abort
if(o.beforeSend&&(o.beforeSend.call(p,x,o)===!1||k))
// Abort if not done already and return
return x.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
w="abort",
// Install callbacks on deferreds
s.add(o.complete),x.done(o.success),x.fail(o.error),
// Get transport
e=V(Mb,o,c,x)){
// If request was aborted inside ajaxSend, stop there
if(x.readyState=1,
// Send global event
l&&q.trigger("ajaxSend",[x,o]),k)return x;
// Timeout
o.async&&o.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},o.timeout));try{k=!1,e.send(u,d)}catch(y){
// Rethrow post-completion exceptions
if(k)throw y;
// Propagate others as results
d(-1,y)}}else d(-1,"No Transport");return x},getJSON:function(a,b,c){return ma.get(a,b,c,"json")},getScript:function(a,b){return ma.get(a,void 0,b,"script")}}),ma.each(["get","post"],function(a,b){ma[b]=function(a,c,d,e){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return ma.isFunction(c)&&(e=e||d,d=c,c=void 0),ma.ajax(ma.extend({url:a,type:b,dataType:e,data:c,success:d},ma.isPlainObject(a)&&a))}}),ma._evalUrl=function(a){return ma.ajax({url:a,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},ma.fn.extend({wrapAll:function(a){var b;
// The elements to wrap the target around
return this[0]&&(ma.isFunction(a)&&(a=a.call(this[0])),b=ma(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return ma.isFunction(a)?this.each(function(b){ma(this).wrapInner(a.call(this,b))}):this.each(function(){var b=ma(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=ma.isFunction(a);return this.each(function(c){ma(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){ma(this).replaceWith(this.childNodes)}),this}}),ma.expr.pseudos.hidden=function(a){return!ma.expr.pseudos.visible(a)},ma.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},ma.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Pb={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Qb=ma.ajaxSettings.xhr();ka.cors=!!Qb&&"withCredentials"in Qb,ka.ajax=Qb=!!Qb,ma.ajaxTransport(function(b){var c,d;
// Cross domain only allowed if supported through XMLHttpRequest
if(ka.cors||Qb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();
// Apply custom fields if provided
if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];
// Override mime type if needed
b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(g in e)h.setRequestHeader(g,e[g]);
// Callback
c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof h.status?f(0,"error"):f(
// File: protocol always yields status 0; see #8605, #14207
h.status,h.statusText):f(Pb[h.status]||h.status,h.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},
// Listen to events
h.onload=c(),d=h.onerror=c("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===h.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
a.setTimeout(function(){c&&d()})},
// Create the abort callback
c=c("abort");try{
// Do send the request (this may raise an exception)
h.send(b.hasContent&&b.data||null)}catch(i){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(c)throw i}},abort:function(){c&&c()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
ma.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),
// Install script dataType
ma.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return ma.globalEval(a),a}}}),
// Handle cache's special case and crossDomain
ma.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),
// Bind script tag hack transport
ma.ajaxTransport("script",function(a){
// This transport only deals with cross domain requests
if(a.crossDomain){var b,c;return{send:function(d,e){b=ma("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
_.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Rb=[],Sb=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
ma.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Rb.pop()||ma.expando+"_"+yb++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
ma.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Sb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Sb.test(b.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(h||"jsonp"===b.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return e=b.jsonpCallback=ma.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Sb,"$1"+e):b.jsonp!==!1&&(b.url+=(zb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||ma.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){
// If previous value didn't exist - remove it
void 0===f?ma(a).removeProp(e):a[e]=f,
// Save back as free
b[e]&&(
// Make sure that re-using the options doesn't screw things around
b.jsonpCallback=c.jsonpCallback,
// Save the callback name for future use
Rb.push(e)),
// Call if it was a function and we have a response
g&&ma.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
ka.createHTMLDocument=function(){var a=_.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
ma.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var d,e,f;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return b||(ka.createHTMLDocument?(b=_.implementation.createHTMLDocument(""),d=b.createElement("base"),d.href=_.location.href,b.head.appendChild(d)):b=_),e=va.exec(a),f=!c&&[],e?[b.createElement(e[1])]:(e=s([a],b,f),f&&f.length&&ma(f).remove(),ma.merge([],e.childNodes))},/**
 * Load a url into a page
 */
ma.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>-1&&(d=ma.trim(a.slice(h)),a=a.slice(0,h)),ma.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&ma.ajax({url:a,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:e||"GET",dataType:"html",data:b}).done(function(a){
// Save response for use in complete callback
f=arguments,g.html(d?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ma("<div>").append(ma.parseHTML(a)).find(d):
// Otherwise use the full result
a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},
// Attach a bunch of functions for handling common AJAX events
ma.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){ma.fn[b]=function(a){return this.on(b,a)}}),ma.expr.pseudos.animated=function(a){return ma.grep(ma.timers,function(b){return a===b.elem}).length},ma.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=ma.css(a,"position"),l=ma(a),m={};
// Set position first, in-case top/left are set even on static elem
"static"===k&&(a.style.position="relative"),h=l.offset(),f=ma.css(a,"top"),i=ma.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),ma.isFunction(b)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
b=b.call(a,c,ma.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},ma.fn.extend({offset:function(a){
// Preserve chaining for setter
if(arguments.length)return void 0===a?this:this.each(function(b){ma.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Make sure element is not hidden (display: none)
return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Z(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===ma.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),ma.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+ma.css(a[0],"borderTopWidth",!0),left:d.left+ma.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-ma.css(c,"marginTop",!0),left:b.left-d.left-ma.css(c,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&"static"===ma.css(a,"position");)a=a.offsetParent;return a||Wa})}}),
// Create scrollLeft and scrollTop methods
ma.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;ma.fn[a]=function(d){return Fa(this,function(a,d,e){var f=Z(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
ma.each(["top","left"],function(a,b){ma.cssHooks[b]=F(ka.pixelPosition,function(a,c){if(c)
// If curCSS returns percentage, fallback to offset
return c=E(a,b),eb.test(c)?ma(a).position()[b]+"px":c})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ma.each({Height:"height",Width:"width"},function(a,b){ma.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
// Margin is only for outerHeight, outerWidth
ma.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return Fa(this,function(b,c,e){var f;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return ma.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?ma.css(b,c,h):ma.style(b,c,e,h)},b,g?e:void 0,g)}})}),ma.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),ma.parseJSON=JSON.parse,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return ma});var
// Map over jQuery in case of overwrite
Tb=a.jQuery,
// Map over the $ in case of overwrite
Ub=a.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return ma.noConflict=function(b){return a.$===ma&&(a.$=Ub),b&&a.jQuery===ma&&(a.jQuery=Tb),ma},b||(a.jQuery=a.$=ma),ma}),/*!
 * jQuery Migrate - v3.0.0 - 2016-07-16
 * Copyright jQuery Foundation and other contributors
 */
function(a,b){"use strict";function c(a){return!0}function d(a,b,d,e){Object.defineProperty(a,b,{configurable:!0,enumerable:!0,get:function(){return c(e),d}})}a.migrateVersion="3.0.0",function(){
// Support: IE9 only
// IE9 only creates console object when dev tools are first opened
// Also, avoid Function#bind here to simplify PhantomJS usage
var c=b.console&&b.console.log&&function(){b.console.log.apply(b.console,arguments)},d=/^[12]\./;c&&(!a||d.test(a.fn.jquery),a.migrateWarnings)}();var e={};
// List of warnings already given; public read only
a.migrateWarnings=[],
// Set to false to disable traces that appear with warnings
void 0===a.migrateTrace&&(a.migrateTrace=!0),
// Forget any warnings we've already given; public
a.migrateReset=function(){e={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&
// JQuery has never supported or tested Quirks Mode
c("jQuery is not compatible with Quirks Mode");var f=a.fn.init,g=a.isNumeric,h=a.find,i=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,j=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;a.fn.init=function(a){var b=Array.prototype.slice.call(arguments);
// JQuery( "#" ) is a bogus ID selector, but it returned an empty set before jQuery 3.0
return"string"==typeof a&&"#"===a&&(c("jQuery( '#' ) is not a valid selector"),b[0]=[]),f.apply(this,b)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);
// Support: PhantomJS 1.x
// String#match fails to match when used with a //g RegExp, only on some strings
if("string"==typeof a&&i.test(a))
// The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0
// First see if qS thinks it's a valid selector, if so avoid a false positive
try{document.querySelector(a)}catch(d){
// Didn't *look* valid to qSA, warn and try quoting what we think is the value
a=a.replace(j,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});
// If the regexp *may* have created an invalid selector, don't update it
// Note that there may be false alarms if selector uses jQuery extensions
try{document.querySelector(a),c("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){c("Attribute selector with '#' was not fixed: "+b[0])}}return h.apply(this,b)};
// Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)
var k;for(k in h)Object.prototype.hasOwnProperty.call(h,k)&&(a.find[k]=h[k]);
// The number of elements contained in the matched element set
a.fn.size=function(){return c("jQuery.fn.size() is deprecated; use the .length property"),this.length},a.parseJSON=function(){return c("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},a.isNumeric=function(b){
// The jQuery 2.2.3 implementation of isNumeric
function d(b){var c=b&&b.toString();return!a.isArray(b)&&c-parseFloat(c)+1>=0}var e=g(b),f=d(b);return e!==f&&c("jQuery.isNumeric() should not be called on constructed objects"),f},d(a,"unique",a.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),
// Now jQuery.expr.pseudos is the standard incantation
d(a.expr,"filters",a.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),d(a.expr,":",a.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var l=a.ajax;a.ajax=function(){var a=l.apply(this,arguments);
// Be sure we got a jQXHR (e.g., not sync)
return a.promise&&(d(a,"success",a.done,"jQXHR.success is deprecated and removed"),d(a,"error",a.fail,"jQXHR.error is deprecated and removed"),d(a,"complete",a.always,"jQXHR.complete is deprecated and removed")),a};var m=a.fn.removeAttr,n=a.fn.toggleClass,o=/\S+/g;a.fn.removeAttr=function(b){var d=this;return a.each(b.match(o),function(b,e){a.expr.match.bool.test(e)&&(c("jQuery.fn.removeAttr no longer sets boolean properties: "+e),d.prop(e,!1))}),m.apply(this,arguments)},a.fn.toggleClass=function(b){
// Only deprecating no-args or single boolean arg
// Only deprecating no-args or single boolean arg
return void 0!==b&&"boolean"!=typeof b?n.apply(this,arguments):(c("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var c=this.getAttribute&&this.getAttribute("class")||"";c&&a.data(this,"__className__",c),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",c||b===!1?"":a.data(this,"__className__")||"")}))};var p=!1;
// If this version of jQuery has .swap(), don't false-alarm on internal uses
a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return p=!0,a=d.apply(this,arguments),p=!1,a})}),a.swap=function(a,b,d,e){var f,g,h={};p||c("jQuery.swap() is undocumented and deprecated");
// Remember the old values, and insert the new ones
for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=d.apply(a,e||[]);
// Revert the old values
for(g in b)a.style[g]=h[g];return f};var q=a.data;a.data=function(b,d,e){var f;
// If the name is transformed, look for the un-transformed name in the data object
// If the name is transformed, look for the un-transformed name in the data object
return d&&d!==a.camelCase(d)&&(f=a.hasData(b)&&q.call(this,b),f&&d in f)?(c("jQuery.data() always sets/gets camelCased names: "+d),arguments.length>2&&(f[d]=e),f[d]):q.apply(this,arguments)};var r=a.Tween.prototype.run;a.Tween.prototype.run=function(b){a.easing[this.easing].length>1&&(c('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),a.easing[this.easing]=a.easing[this.easing].bind(a.easing,b,this.options.duration*b,0,1,this.options.duration)),r.apply(this,arguments)};var s=a.fn.load,t=a.event.fix;a.event.props=[],a.event.fixHooks={},a.event.fix=function(b){var d,e=b.type,f=this.fixHooks[e],g=a.event.props;if(g.length)for(c("jQuery.event.props are deprecated and removed: "+g.join());g.length;)a.event.addProp(g.pop());if(f&&!f._migrated_&&(f._migrated_=!0,c("jQuery.event.fixHooks are deprecated and removed: "+e),(g=f.props)&&g.length))for(;g.length;)a.event.addProp(g.pop());return d=t.call(this,b),f&&f.filter?f.filter(d,b):d},a.each(["load","unload","error"],function(b,d){a.fn[d]=function(){var a=Array.prototype.slice.call(arguments,0);
// If this is an ajax load() the first arg should be the string URL;
// technically this could also be the "Anything" arg of the event .load()
// which just goes to show why this dumb signature has been deprecated!
// jQuery custom builds that exclude the Ajax module justifiably die here.
// If this is an ajax load() the first arg should be the string URL;
// technically this could also be the "Anything" arg of the event .load()
// which just goes to show why this dumb signature has been deprecated!
// jQuery custom builds that exclude the Ajax module justifiably die here.
// Use .triggerHandler here because:
// - load and unload events don't need to bubble, only applied to window or image
// - error event should not bubble to window, although it does pre-1.7
// See http://bugs.jquery.com/ticket/11820
return"load"===d&&"string"==typeof a[0]?s.apply(this,a):(c("jQuery.fn."+d+"() is deprecated"),a.splice(0,0,d),arguments.length?this.on.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),
// Trigger "ready" event only once, on document ready
a(function(){a(document).triggerHandler("ready")}),a.event.special.ready={setup:function(){this===document&&c("'ready' event is deprecated")}},a.fn.extend({bind:function(a,b,d){return c("jQuery.fn.bind() is deprecated"),this.on(a,null,b,d)},unbind:function(a,b){return c("jQuery.fn.unbind() is deprecated"),this.off(a,null,b)},delegate:function(a,b,d,e){return c("jQuery.fn.delegate() is deprecated"),this.on(b,a,d,e)},undelegate:function(a,b,d){return c("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(a,"**"):this.off(b,a||"**",d)}});var u=a.fn.offset;a.fn.offset=function(){var b,d=this[0],e={top:0,left:0};return d&&d.nodeType?(b=(d.ownerDocument||document).documentElement,a.contains(b,d)?u.apply(this,arguments):(c("jQuery.fn.offset() requires an element connected to a document"),e)):(c("jQuery.fn.offset() requires a valid DOM element"),e)};var v=a.param;a.param=function(b,d){var e=a.ajaxSettings&&a.ajaxSettings.traditional;return void 0===d&&e&&(c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),d=e),v.call(this,b,d)};var w=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)};var x=a.Deferred,y=[
// Action, add listener, callbacks, .then handlers, final state
["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var d=x(),e=d.promise();return d.pipe=e.pipe=function(){var b=arguments;return c("deferred.pipe() is deprecated"),a.Deferred(function(c){a.each(y,function(f,g){var h=a.isFunction(b[f])&&b[f];
// Deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
// deferred.progress(function() { bind to newDefer or newDefer.notify })
d[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g[0]+"With"](this===e?c.promise():this,h?[b]:arguments)})}),b=null}).promise()},b&&b.call(d,d),d}}(jQuery,window),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";a.fn.jquery.split(" ")[0].split(".")}(jQuery),/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
// ============================================================
function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}
// http://blog.alexmaccaw.com/css-transitions
a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// ALERT PLUGIN DEFINITION
// =======================
function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}
// ALERT CLASS DEFINITION
// ======================
var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){
// detach from parent, fire event then clean up data
g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,
// ALERT NO CONFLICT
// =================
a.fn.alert.noConflict=function(){return a.fn.alert=e,this},
// ALERT DATA-API
// ==============
a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// BUTTON PLUGIN DEFINITION
// ========================
function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}
// BUTTON PUBLIC CLASS DEFINITION
// ==============================
var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),
// push to event loop to allow forms to submit
setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,
// BUTTON NO CONFLICT
// ==================
a.fn.button.noConflict=function(){return a.fn.button=d,this},
// BUTTON DATA-API
// ===============
a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// CAROUSEL PLUGIN DEFINITION
// ==========================
function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}
// CAROUSEL CLASS DEFINITION
// =========================
var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))// yes, "slid"
return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});// yes, "slid"
// force reflow
return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,
// CAROUSEL NO CONFLICT
// ====================
a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};
// CAROUSEL DATA-API
// =================
var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));// strip for ie7
if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");// strip for ie7
return a(d)}
// COLLAPSE PLUGIN DEFINITION
// ==========================
function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}
// COLLAPSE PUBLIC CLASS DEFINITION
// ================================
var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,
// COLLAPSE NO CONFLICT
// ====================
a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},
// COLLAPSE DATA-API
// =================
a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}
// DROPDOWN PLUGIN DEFINITION
// ==========================
function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}
// DROPDOWN CLASS DEFINITION
// =========================
var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&
// if mobile we use a backdrop because click events don't delegate
a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,// up
40==c.which&&j<i.length-1&&j++,// down
~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,
// DROPDOWN NO CONFLICT
// ====================
a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},
// APPLY TO STANDARD DROPDOWN ELEMENTS
// ===================================
a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// MODAL PLUGIN DEFINITION
// =======================
function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}
// MODAL CLASS DEFINITION
// ======================
var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,// force reflow
this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},
// these following methods are used to handle overflowing modals
c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){// workaround for missing window.innerWidth in IE8
var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){// thx walsh
var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,
// MODAL NO CONFLICT
// =================
a.fn.modal.noConflict=function(){return a.fn.modal=d,this},
// MODAL DATA-API
// ==============
a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||// only register focus restorer if modal will actually get shown
f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// TOOLTIP PLUGIN DEFINITION
// =========================
function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}
// TOOLTIP PUBLIC CLASS DEFINITION
// ===============================
var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);
// we must check for NaN for ie 8/9
isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,
// $.fn.offset doesn't round pixel values
// so we use setOffset directly with our own function B-0
a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");
// check to see if placing tip in new offset caused the tip to resize itself
var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(
// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){/* placement == 'right' */
return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?// top overflow
e.top=g.top-h:i>g.top+g.height&&(// bottom overflow
e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?// left overflow
e.left=g.left-j:k>g.right&&(// right overflow
e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,
// TOOLTIP NO CONFLICT
// ===================
a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// POPOVER PLUGIN DEFINITION
// =========================
function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}
// POPOVER PUBLIC CLASS DEFINITION
// ===============================
var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),
// NOTE: POPOVER EXTENDS tooltip.js
// ================================
c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[// we use append for html objects to maintain js events
this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),
// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
// this manually by checking the contents.
a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,
// POPOVER NO CONFLICT
// ===================
a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// SCROLLSPY CLASS DEFINITION
// ==========================
function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}
// SCROLLSPY PLUGIN DEFINITION
// ===========================
function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,
// SCROLLSPY NO CONFLICT
// =====================
a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},
// SCROLLSPY DATA-API
// ==================
a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// TAB PLUGIN DEFINITION
// =====================
function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}
// TAB CLASS DEFINITION
// ====================
var c=function(b){
// jscs:disable requireDollarBeforejQueryAssignment
this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,// reflow for transition
b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,
// TAB NO CONFLICT
// ===============
a.fn.tab.noConflict=function(){return a.fn.tab=d,this};
// TAB DATA-API
// ============
var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";
// AFFIX PLUGIN DEFINITION
// =======================
function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}
// AFFIX CLASS DEFINITION
// ======================
var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,
// AFFIX NO CONFLICT
// =================
a.fn.affix.noConflict=function(){return a.fn.affix=d,this},
// AFFIX DATA-API
// ==============
a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery),/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(a){"function"==typeof define&&define.amd?
// AMD
define(["jquery"],a):
// CommonJS
a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(
// This is a quoted cookie as according to RFC2068, unescape...
a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{
// Replace server-side written pluses with spaces.
// If we can't decode the cookie, ignore it, it's unusable.
// If we can't parse the cookie, ignore it, it's unusable.
return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){
// Write
if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",// use expires attribute, max-age is not supported by IE
i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;n<o;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){
// If second argument (value) is a function it's a converter...
l=f(r,g);break}
// Prevent storing a cookie that we couldn't decode.
e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){
// Must not alter options, thus extending a fresh object...
return void 0!==a.cookie(b)&&(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}}),/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*global define: false Mustache: true*/
function(a,b){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a.Mustache={},b(a.Mustache))}(this,function(a){function b(a){return"function"==typeof a}/**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
function c(a){return p(a)?"array":typeof a}function d(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}/**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
function e(a,b){return null!=a&&"object"==typeof a&&b in a}function f(a,b){return q.call(a,b)}function g(a){return!f(r,a)}function h(a){return String(a).replace(/[&<>"'`=\/]/g,function(a){return s[a]})}/**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
function i(b,c){// Is there a non-space char on the current line?
// Strips all whitespace tokens array for the current line
// if there was a {{#tag}} on it and otherwise only space.
function e(){if(r&&!s)for(;q.length;)delete o[q.pop()];else q=[];r=!1,s=!1}function f(a){if("string"==typeof a&&(a=a.split(u,2)),!p(a)||2!==a.length)throw new Error("Invalid tags: "+a);h=new RegExp(d(a[0])+"\\s*"),i=new RegExp("\\s*"+d(a[1])),m=new RegExp("\\s*"+d("}"+a[1]))}if(!b)return[];var h,i,m,n=[],o=[],q=[],r=!1,s=!1;f(c||a.tags);for(var y,z,A,B,C,D,E=new l(b);!E.eos();){if(y=E.pos,
// Match any text between tags.
A=E.scanUntil(h))for(var F=0,G=A.length;F<G;++F)B=A.charAt(F),g(B)?q.push(o.length):s=!0,o.push(["text",B,y,y+1]),y+=1,
// Check for whitespace on the current line.
"\n"===B&&e();
// Match the opening tag.
if(!E.scan(h))break;
// Match the closing tag.
if(r=!0,
// Get the tag type.
z=E.scan(x)||"name",E.scan(t),
// Get the tag value.
"="===z?(A=E.scanUntil(v),E.scan(v),E.scanUntil(i)):"{"===z?(A=E.scanUntil(m),E.scan(w),E.scanUntil(i),z="&"):A=E.scanUntil(i),!E.scan(i))throw new Error("Unclosed tag at "+E.pos);if(C=[z,A,y,E.pos],o.push(C),"#"===z||"^"===z)n.push(C);else if("/"===z){if(
// Check section nesting.
D=n.pop(),!D)throw new Error('Unopened section "'+A+'" at '+y);if(D[1]!==A)throw new Error('Unclosed section "'+D[1]+'" at '+y)}else"name"===z||"{"===z||"&"===z?s=!0:"="===z&&
// Set the tags for the next time around.
f(A)}if(
// Make sure there are no open sections when we're done.
D=n.pop())throw new Error('Unclosed section "'+D[1]+'" at '+E.pos);return k(j(o))}/**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
function j(a){for(var b,c,d=[],e=0,f=a.length;e<f;++e)b=a[e],b&&("text"===b[0]&&c&&"text"===c[0]?(c[1]+=b[1],c[3]=b[3]):(d.push(b),c=b));return d}/**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
function k(a){for(var b,c,d=[],e=d,f=[],g=0,h=a.length;g<h;++g)switch(b=a[g],b[0]){case"#":case"^":e.push(b),f.push(b),e=b[4]=[];break;case"/":c=f.pop(),c[5]=b[2],e=f.length>0?f[f.length-1][4]:d;break;default:e.push(b)}return d}/**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
function l(a){this.string=a,this.tail=a,this.pos=0}/**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
function m(a,b){this.view=a,this.cache={".":this.view},this.parent=b}/**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
function n(){this.cache={}}var o=Object.prototype.toString,p=Array.isArray||function(a){return"[object Array]"===o.call(a)},q=RegExp.prototype.test,r=/\S/,s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},t=/\s*/,u=/\s+/,v=/\s*=/,w=/\s*\}/,x=/#|\^|\/|>|\{|&|=|!/;/**
   * Returns `true` if the tail is empty (end of string).
   */
l.prototype.eos=function(){return""===this.tail},/**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
l.prototype.scan=function(a){var b=this.tail.match(a);if(!b||0!==b.index)return"";var c=b[0];return this.tail=this.tail.substring(c.length),this.pos+=c.length,c},/**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
l.prototype.scanUntil=function(a){var b,c=this.tail.search(a);switch(c){case-1:b=this.tail,this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,c),this.tail=this.tail.substring(c)}return this.pos+=b.length,b},/**
   * Creates a new context using the given view with this context
   * as the parent.
   */
m.prototype.push=function(a){return new m(a,this)},/**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
m.prototype.lookup=function(a){var c,d=this.cache;if(d.hasOwnProperty(a))c=d[a];else{for(var f,g,h=this,i=!1;h;){if(a.indexOf(".")>0)/**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
for(c=h.view,f=a.split("."),g=0;null!=c&&g<f.length;)g===f.length-1&&(i=e(c,f[g])),c=c[f[g++]];else c=h.view[a],i=e(h.view,a);if(i)break;h=h.parent}d[a]=c}return b(c)&&(c=c.call(this.view)),c},/**
   * Clears all cached templates in this writer.
   */
n.prototype.clearCache=function(){this.cache={}},/**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
n.prototype.parse=function(a,b){var c=this.cache,d=c[a];return null==d&&(d=c[a]=i(a,b)),d},/**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
n.prototype.render=function(a,b,c){var d=this.parse(a),e=b instanceof m?b:new m(b);return this.renderTokens(d,e,c,a)},/**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
n.prototype.renderTokens=function(a,b,c,d){for(var e,f,g,h="",i=0,j=a.length;i<j;++i)g=void 0,e=a[i],f=e[0],"#"===f?g=this.renderSection(e,b,c,d):"^"===f?g=this.renderInverted(e,b,c,d):">"===f?g=this.renderPartial(e,b,c,d):"&"===f?g=this.unescapedValue(e,b):"name"===f?g=this.escapedValue(e,b):"text"===f&&(g=this.rawValue(e)),void 0!==g&&(h+=g);return h},n.prototype.renderSection=function(a,c,d,e){
// This function is used to render an arbitrary template
// in the current context by higher-order sections.
function f(a){return g.render(a,c,d)}var g=this,h="",i=c.lookup(a[1]);if(i){if(p(i))for(var j=0,k=i.length;j<k;++j)h+=this.renderTokens(a[4],c.push(i[j]),d,e);else if("object"==typeof i||"string"==typeof i||"number"==typeof i)h+=this.renderTokens(a[4],c.push(i),d,e);else if(b(i)){if("string"!=typeof e)throw new Error("Cannot use higher-order sections without the original template");
// Extract the portion of the original template that the section contains.
i=i.call(c.view,e.slice(a[3],a[5]),f),null!=i&&(h+=i)}else h+=this.renderTokens(a[4],c,d,e);return h}},n.prototype.renderInverted=function(a,b,c,d){var e=b.lookup(a[1]);
// Use JavaScript's definition of falsy. Include empty arrays.
// See https://github.com/janl/mustache.js/issues/186
if(!e||p(e)&&0===e.length)return this.renderTokens(a[4],b,c,d)},n.prototype.renderPartial=function(a,c,d){if(d){var e=b(d)?d(a[1]):d[a[1]];return null!=e?this.renderTokens(this.parse(e),c,d,e):void 0}},n.prototype.unescapedValue=function(a,b){var c=b.lookup(a[1]);if(null!=c)return c},n.prototype.escapedValue=function(b,c){var d=c.lookup(b[1]);if(null!=d)return a.escape(d)},n.prototype.rawValue=function(a){return a[1]},a.name="mustache.js",a.version="2.2.1",a.tags=["{{","}}"];
// All high-level mustache.* functions use this writer.
var y=new n;/**
   * Clears all cached templates in the default writer.
   */
a.clearCache=function(){return y.clearCache()},/**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
a.parse=function(a,b){return y.parse(a,b)},/**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
a.render=function(a,b,d){if("string"!=typeof a)throw new TypeError('Invalid template! Template should be a "string" but "'+c(a)+'" was given as the first argument for mustache#render(template, view, partials)');return y.render(a,b,d)},
// This is here for backwards compatibility with 0.4.x.,
/*eslint-disable */
// eslint wants camel cased function name
a.to_html=function(c,d,e,f){/*eslint-enable*/
var g=a.render(c,d,e);return b(f)?void f(g):g},
// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
a.escape=h,
// Export these mainly for testing, but also for advanced usage.
a.Scanner=l,a.Context=m,a.Writer=n}),/*! jQuery UI - v1.12.0 - 2016-07-08
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(a){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(["jquery"],a):
// Browser globals
a(jQuery)}(function(a){
// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}function c(a){for(var b,c;a.length&&a[0]!==document;){if(
// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
b=a.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(
// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
c=parseInt(a.css("zIndex"),10),!isNaN(c)&&0!==c))return c;a=a.parent()}return 0}/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */
function d(){this._curInst=null,// The current instance in use
this._keyEvent=!1,// If the last event was a key event
this._disabledInputs=[],// List of date picker inputs that have been disabled
this._datepickerShowing=!1,// True if the popup picker is showing , false if not
this._inDialog=!1,// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div",// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline",// The name of the inline marker class
this._appendClass="ui-datepicker-append",// The name of the append marker class
this._triggerClass="ui-datepicker-trigger",// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog",// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled",// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable",// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day",// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over",// The name of the day hover marker class
this.regional=[],// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:!1,// True if right-to-left language, false if left-to-right
showMonthAfterYear:!1,// True if the year select precedes month, false for month then year
yearSuffix:""},this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:!1,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:!1,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:!1,// True if date formatting applied to prev/today/next links
gotoCurrent:!1,// True if today link goes back to current selection instead
changeMonth:!1,// True if month can be selected directly, false if only prev/next
changeYear:!1,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:!1,// True to show dates in other months, false to leave blank
selectOtherMonths:!1,// True to allow selection of dates in other months, false for unselectable
showWeek:!1,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:!0,// The input is constrained by the current date format
showButtonPanel:!1,// True to show button panel, false to not show it
autoSize:!1,// True to size the input for the date format, false to leave as is
disabled:!1},a.extend(this._defaults,this.regional[""]),this.regional.en=a.extend(!0,{},this.regional[""]),this.regional["en-US"]=a.extend(!0,{},this.regional.en),this.dpDiv=e(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function e(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.on("mouseout",c,function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",c,f)}function f(){a.datepicker._isDisabledDatepicker(q.inline?q.dpDiv.parent()[0]:q.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))}/* jQuery extend now ignores nulls! */
function g(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}/*!
 * jQuery UI Spinner 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Spinner
//>>group: Widgets
//>>description: Displays buttons to easily input numbers via the keyboard or mouse.
//>>docs: http://api.jqueryui.com/spinner/
//>>demos: http://jqueryui.com/spinner/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/spinner.css
//>>css.theme: ../../themes/base/theme.css
function h(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}a.ui=a.ui||{};var i=(a.ui.version="1.12.0",0),j=Array.prototype.slice;a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{
// Only trigger remove when necessary to save time
d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;
// Create selector for plugin
// Extend with the existing constructor to carry over any static properties
// We need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
// Remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){
// Allow instantiation without "new" keyword
// Allow instantiation without "new" keyword
// Allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,
// Copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:a.extend({},d),
// Track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{
// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;
// Redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var c,d,e=j.call(arguments,1),f=0,g=e.length;f<g;f++)for(c in e[f])d=e[f][c],e[f].hasOwnProperty(c)&&void 0!==d&&(
// Clone objects
a.isPlainObject(d)?b[c]=a.isPlainObject(b[c])?a.widget.extend({},b[c],d):
// Don't extend strings, arrays, etc. with objects
a.widget.extend({},d):b[c]=d);return b},a.widget.bridge=function(b,c){var d=c.prototype.widgetFullName||b;a.fn[b]=function(e){var f="string"==typeof e,g=j.call(arguments,1),h=this;
// Allow multiple hashes to be passed on init
return f?this.each(function(){var c,f=a.data(this,d);return"instance"===e?(h=f,!1):f?a.isFunction(f[e])&&"_"!==e.charAt(0)?(c=f[e].apply(f,g),c!==f&&void 0!==c?(h=c&&c.jquery?h.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+e+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'")}):(g.length&&(e=a.widget.extend.apply(null,[e].concat(g))),this.each(function(){var b=a.data(this,d);b?(b.option(e||{}),b._init&&b._init()):a.data(this,d,new c(e,this))})),h}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,
// Callbacks
create:null},_createWidget:function(b,c){c=a(c||this.defaultElement||this)[0],this.element=a(c),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},c!==this&&(a.data(c,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===c&&this.destroy()}}),this.document=a(c.style?
// Element within the document
c.ownerDocument:
// Element is window or document
c.document||c),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),
// We can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
// Clean up events and states
this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)
// Don't return a reference to the internal hash
return a.widget.extend({},this.options);if("string"==typeof b)if(
// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(
// We are doing this to create a new jQuery object because the _removeClass() call
// on the next line is going to destroy the reference to the current elements being
// tracked. We need to save a copy of this collection so that we can add the new classes
// below.
d=a(e.get()),this._removeClass(e,c),
// We don't use _addClass() here, because that uses this.options.classes
// for generating the string of classes. We want to use the value passed in from
// _setOption(), this is the new value of the classes option which was passed to
// _setOption(). We pass this value directly to _classes().
d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),
// If the widget is becoming disabled, then nothing is interactive
a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;
// No suppressDisabledCheck flag, shuffle arguments
"boolean"!=typeof b&&(d=c,c=b,b=!1),
// No element argument, shuffle and use this.element
d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){
// Allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}
// Copy the guid so direct unbinding works
"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),
// Clear the stack to avoid memory leaks (#10056)
this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),
// The original event may come from any element
// so we need to reset the target on the new event
c.target=this.element[0],
// Copy original event properties over to the new event
f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}});a.widget;/*!
 * jQuery UI Position 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/
!function(){function b(a,b,c){return[parseFloat(a[0])*(n.test(a[0])?b/100:1),parseFloat(a[1])*(n.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f,g=Math.max,h=Math.abs,i=Math.round,j=/left|center|right/,k=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,n=/%$/,o=a.fn.position;
// Support: IE <=9 only
f=function(){var b=a("<div>").css("position","absolute").appendTo("body").offset({top:1.5,left:1.5}),c=1.5===b.offset().top;return b.remove(),f=function(){return c},c},a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return o.apply(this,arguments);
// Make a copy, we don't want to modify arguments
e=a.extend({},e);var n,p,q,r,s,t,u=a(e.of),v=a.position.getWithinInfo(e.within),w=a.position.getScrollInfo(v),x=(e.collision||"flip").split(" "),y={};
// Force left top to allow flipping
// Clone to reuse original targetOffset later
// Force my and at to have valid horizontal and vertical positions
// if a value is missing or invalid, it will be converted to center
// Normalize collision option
return t=d(u),u[0].preventDefault&&(e.at="left top"),p=t.width,q=t.height,r=t.offset,s=a.extend({},r),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=j.test(c[0])?c.concat(["center"]):k.test(c[0])?["center"].concat(c):["center","center"]),c[0]=j.test(c[0])?c[0]:"center",c[1]=k.test(c[1])?c[1]:"center",
// Calculate offsets
a=l.exec(c[0]),b=l.exec(c[1]),y[this]=[a?a[0]:0,b?b[0]:0],
// Reduce to just the positions without the offsets
e[this]=[m.exec(c[0])[0],m.exec(c[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?s.left+=p:"center"===e.at[0]&&(s.left+=p/2),"bottom"===e.at[1]?s.top+=q:"center"===e.at[1]&&(s.top+=q/2),n=b(y.at,p,q),s.left+=n[0],s.top+=n[1],this.each(function(){var d,j,k=a(this),l=k.outerWidth(),m=k.outerHeight(),o=c(this,"marginLeft"),t=c(this,"marginTop"),z=l+o+c(this,"marginRight")+w.width,A=m+t+c(this,"marginBottom")+w.height,B=a.extend({},s),C=b(y.my,k.outerWidth(),k.outerHeight());"right"===e.my[0]?B.left-=l:"center"===e.my[0]&&(B.left-=l/2),"bottom"===e.my[1]?B.top-=m:"center"===e.my[1]&&(B.top-=m/2),B.left+=C[0],B.top+=C[1],
// If the browser doesn't support fractions, then round for consistent results
f()||(B.left=i(B.left),B.top=i(B.top)),d={marginLeft:o,marginTop:t},a.each(["left","top"],function(b,c){a.ui.position[x[b]]&&a.ui.position[x[b]][c](B,{targetWidth:p,targetHeight:q,elemWidth:l,elemHeight:m,collisionPosition:d,collisionWidth:z,collisionHeight:A,offset:[n[0]+C[0],n[1]+C[1]],my:e.my,at:e.at,within:v,elem:k})}),e.using&&(
// Adds feedback as second argument to using callback, if present
j=function(a){var b=r.left-B.left,c=b+p-l,d=r.top-B.top,f=d+q-m,i={target:{element:u,left:r.left,top:r.top,width:p,height:q},element:{element:k,left:B.left,top:B.top,width:l,height:m},horizontal:c<0?"left":b>0?"right":"center",vertical:f<0?"top":d>0?"bottom":"middle"};p<l&&h(b+c)<p&&(i.horizontal="center"),q<m&&h(d+f)<q&&(i.vertical="middle"),g(h(b),h(c))>g(h(d),h(f))?i.important="horizontal":i.important="vertical",e.using.call(this,a,i)}),k.offset(a.extend(B,{using:j}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,f=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-f-e;
// Element is wider than within
b.collisionWidth>f?
// Element is initially over the left side of within
i>0&&j<=0?(c=a.left+i+b.collisionWidth-f-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+f-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=g(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,f=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-f-e;
// Element is taller than within
b.collisionHeight>f?
// Element is initially over the top of within
i>0&&j<=0?(c=a.top+i+b.collisionHeight-f-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+f-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=g(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,g=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-g-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-g-f,(c<0||c<h(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||h(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,g=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-g-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-g-f,(d<0||d<h(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||h(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}();var k=(a.ui.position,a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):
// Support: jQuery <1.8
function(b,c,d){return!!a.data(b,d[3])}}),a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),"ui-effects-"),l="ui-effects-style",m="ui-effects-animated",
// Create a local jQuery because jQuery Color relies on it and the
// global may not exist with AMD and a custom build (#10199)
n=a;a.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(a,b){function c(a,b,c){var d=l[b.type]||{};
// ~~ is an short way of doing floor for positive numbers
// IE will pass in empty strings as value for alpha,
// which will hit this case
return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];
// Found a stringParser that handled it
// Found a stringParser that handled it
// If this came from a parsed string, force "transparent" when alpha is 0
// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";if(h)
// Exit each( stringParsers ) here because we matched
// If this was an rgba parse the assignment might happen twice
// oh well....
return f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}
// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
function e(a,b,c){return c=(c+1)%1,6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a}var
// Colors = jQuery.Color.names
f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
// Plusequals test for += 100 -= 100
h=/^([\-+])=\s*(\d+\.?\d*)/,
// A set of RE's that can match strings and generate color tuples.
i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{
// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{
// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],
// JQuery.Color( )
j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},
// Element for support tests
n=a("<p>")[0],
// Local aliases of functions called often
o=a.each;
// Determine rgba support immediately
n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,
// Define cache name and alpha properties
// for rgba and hsla spaces
o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];
// More than 1 argument specified - assume ( red, green, blue, alpha )
return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){
// If the cache doesn't exist, and we know how to convert
if(!l[f]&&d.to){
// If the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}
// This is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
l[f][b.idx]=c(e[a],b,!0)}),
// Everything defined but alpha?
l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(
// Use the default of 1
l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){if(null!=g[b.idx])return c=g[b.idx]===f[b.idx]})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};
// If null, don't override start value
null!==j&&(
// If null - use end
null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){
// If we are already opaque - return ourself
if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){
// Catch 1 and 2
return null==a&&(a=b>2?1:0),b&&b<3&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){
// Default to 0 when nulls exist
return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;
// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:l<=.5?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=d<=.5?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;
// Makes rgba() and hsla()
j.fn[d]=function(d){if(
// Generate a cache for this space if it doesn't exist
i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},
// Makes red() green() blue() alpha() hue() saturation() lightness()
o(f,function(b,c){
// Alpha is included in more than one space
j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),
// Add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},
// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
f=a.Color.names={
// 4.1. Basic color keywords
aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",
// 4.2.3. "transparent" color keyword
transparent:[null,null,null,0],_default:"#ffffff"}}(n),/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
function(){function b(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function c(b,c){var d,f,g={};for(d in c)f=c[d],b[d]!==f&&(e[d]||!a.fx.step[d]&&isNaN(parseFloat(f))||(g[d]=f));return g}var d=["add","remove","toggle"],e={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(n.style(a.elem,c,a.end),a.setAttr=!0)}}),
// Support: jQuery <1.8
a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(e,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr("class")||"",j=i.children?g.find("*").addBack():g;
// Map the animated objects to store the original styles.
j=j.map(function(){var c=a(this);return{el:c,start:b(this)}}),
// Apply class change
f=function(){a.each(d,function(a,b){e[b]&&g[b+"Class"](e[b])})},f(),
// Map all animated objects again - calculate new styles and diff
j=j.map(function(){return this.end=b(this.el[0]),this.diff=c(this.start,this.end),this}),
// Apply original class
g.attr("class",h),
// Map all animated objects again - this time collecting a promise
j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),
// Once all animations have completed:
a.when.apply(a,j.get()).done(function(){
// Set the final class
f(),
// For each animated element,
// clear all css properties that were animated
a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),
// This is guarnteed to be there if you use jQuery.speed()
// it also handles dequeuing the next anim...
i.complete.call(g[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(b){return function(c,d,e,f,g){return"boolean"==typeof d||void 0===d?e?a.effects.animateClass.call(this,d?{add:c}:{remove:c},e,f,g):b.apply(this,arguments):a.effects.animateClass.call(this,{toggle:c},d,e,f)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/
function(){
// Return an effect options object for the given parameters:
function b(b,c,d,e){
// Allow passing all options as the first parameter
// Convert to an object
// Catch (effect, null, ...)
// Catch (effect, callback)
// Catch (effect, speed, ?)
// Catch (effect, options, callback)
// Add options to effect
return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function c(b){
// Valid standard speeds (nothing, number, named speed)
// Valid standard speeds (nothing, number, named speed)
// Invalid strings - treat as "normal" speed
// Complete callback
return!(b&&"number"!=typeof b&&!a.fx.speeds[b])||("string"==typeof b&&!a.effects.effect[b]||(!!a.isFunction(b)||"object"==typeof b&&!b.effect))}function d(a,b){var c=b.outerWidth(),d=b.outerHeight(),e=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,f=e.exec(a)||["",0,c,d,0];return{top:parseFloat(f[1])||0,right:"auto"===f[2]?c:parseFloat(f[2]),bottom:"auto"===f[3]?d:parseFloat(f[3]),left:parseFloat(f[4])||0}}a.expr&&a.expr.filters&&a.expr.filters.animated&&(a.expr.filters.animated=function(b){return function(c){return!!a(c).data(m)||b(c)}}(a.expr.filters.animated)),a.uiBackCompat!==!1&&a.extend(a.effects,{
// Saves a set of properties in a data storage
save:function(a,b){for(var c=0,d=b.length;c<d;c++)null!==b[c]&&a.data(k+b[c],a[0].style[b[c]])},
// Restores a set of previously saved properties from a data storage
restore:function(a,b){for(var c,d=0,e=b.length;d<e;d++)null!==b[d]&&(c=a.data(k+b[d]),a.css(b[d],c))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},
// Wraps the element around a wrapper that copies position properties
createWrapper:function(b){
// If the element is already wrapped, return it
if(b.parent().is(".ui-effects-wrapper"))return b.parent();
// Wrap the element
var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
// Store the size in case width/height are defined in % - Fixes #5245
e={width:b.width(),height:b.height()},f=document.activeElement;
// Support: Firefox
// Firefox incorrectly exposes anonymous content
// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
try{f.id}catch(g){f=document.body}
// Fixes #7595 - Elements lose focus when wrapped.
// Hotfix for jQuery 1.4 since some change in wrap() seems to actually
// lose the reference to the wrapped element
// Transfer positioning properties to the wrapper
return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).trigger("focus"),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;
// Fixes #7595 - Elements lose focus when wrapped.
return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).trigger("focus")),b}}),a.extend(a.effects,{version:"1.12.0",define:function(b,c,d){return d||(d=c,c="effect"),a.effects.effect[b]=d,a.effects.effect[b].mode=c,d},scaledDimensions:function(a,b,c){if(0===b)return{height:0,width:0,outerHeight:0,outerWidth:0};var d="horizontal"!==c?(b||100)/100:1,e="vertical"!==c?(b||100)/100:1;return{height:a.height()*e,width:a.width()*d,outerHeight:a.outerHeight()*e,outerWidth:a.outerWidth()*d}},clipToBox:function(a){return{width:a.clip.right-a.clip.left,height:a.clip.bottom-a.clip.top,left:a.clip.left,top:a.clip.top}},
// Injects recently queued functions to be first in line (after "inprogress")
unshift:function(a,b,c){var d=a.queue();b>1&&d.splice.apply(d,[1,0].concat(d.splice(b,c))),a.dequeue()},saveStyle:function(a){a.data(l,a[0].style.cssText)},restoreStyle:function(a){a[0].style.cssText=a.data(l)||"",a.removeData(l)},mode:function(a,b){var c=a.is(":hidden");return"toggle"===b&&(b=c?"show":"hide"),(c?"hide"===b:"show"===b)&&(b="none"),b},
// Translates a [top,left] array into a baseline value
getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},
// Creates a placeholder element so that the original element can be made absolute
createPlaceholder:function(b){var c,d=b.css("position"),e=b.position();
// Lock in margins first to account for form elements, which
// will change margin if you explicitly set height
// see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
// Support: Safari
return b.css({marginTop:b.css("marginTop"),marginBottom:b.css("marginBottom"),marginLeft:b.css("marginLeft"),marginRight:b.css("marginRight")}).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()),/^(static|relative)/.test(d)&&(d="absolute",c=a("<"+b[0].nodeName+">").insertAfter(b).css({
// Convert inline to inline block to account for inline elements
// that turn to inline block based on content (like img)
display:/^(inline|ruby)/.test(b.css("display"))?"inline-block":"block",visibility:"hidden",
// Margins need to be set to account for margin collapse
marginTop:b.css("marginTop"),marginBottom:b.css("marginBottom"),marginLeft:b.css("marginLeft"),marginRight:b.css("marginRight"),"float":b.css("float")}).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).addClass("ui-effects-placeholder"),b.data(k+"placeholder",c)),b.css({position:d,left:e.left,top:e.top}),c},removePlaceholder:function(a){var b=k+"placeholder",c=a.data(b);c&&(c.remove(),a.removeData(b))},
// Removes a placeholder if it exists and restores
// properties that were modified during placeholder creation
cleanUp:function(b){a.effects.restoreStyle(b),a.effects.removePlaceholder(b)},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function c(b){function c(){h.removeData(m),a.effects.cleanUp(h),"hide"===d.mode&&h.hide(),g()}function g(){a.isFunction(i)&&i.call(h[0]),a.isFunction(b)&&b()}var h=a(this);
// Override mode option on a per element basis,
// as toggle can be either show or hide depending on element state
d.mode=k.shift(),a.uiBackCompat===!1||f?"none"===d.mode?(
// Call the core method to track "olddisplay" properly
h[j](),g()):e.call(h[0],d,c):(h.is(":hidden")?"hide"===j:"show"===j)?(
// Call the core method to track "olddisplay" properly
h[j](),g()):e.call(h[0],d,g)}var d=b.apply(this,arguments),e=a.effects.effect[d.effect],f=e.mode,g=d.queue,h=g||"fx",i=d.complete,j=d.mode,k=[],l=function(b){var c=a(this),d=a.effects.mode(c,j)||f;
// Sentinel for duck-punching the :animated psuedo-selector
c.data(m,!0),
// Save effect mode for later use,
// we can't just call $.effects.mode again later,
// as the .show() below destroys the initial state
k.push(d),
// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
f&&("show"===d||d===f&&"hide"===d)&&c.show(),f&&"none"===d||a.effects.saveStyle(c),a.isFunction(b)&&b()};
// Delegate to the original method (e.g., .show()) if possible
return a.fx.off||!e?j?this[j](d.duration,i):this.each(function(){i&&i.call(this)}):g===!1?this.each(l).each(c):this.queue(h,l).queue(h,c)},show:function(a){return function(d){if(c(d))return a.apply(this,arguments);var e=b.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}}(a.fn.show),hide:function(a){return function(d){if(c(d))return a.apply(this,arguments);var e=b.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}}(a.fn.hide),toggle:function(a){return function(d){if(c(d)||"boolean"==typeof d)return a.apply(this,arguments);var e=b.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d},cssClip:function(a){return a?this.css("clip","rect("+a.top+"px "+a.right+"px "+a.bottom+"px "+a.left+"px)"):d(this.css("clip"),this)},transfer:function(b,c){var d=a(this),e=a(b.to),f="fixed"===e.css("position"),g=a("body"),h=f?g.scrollTop():0,i=f?g.scrollLeft():0,j=e.offset(),k={top:j.top-h,left:j.left-i,height:e.innerHeight(),width:e.innerWidth()},l=d.offset(),m=a("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(b.className).css({top:l.top-h,left:l.left-i,height:d.innerHeight(),width:d.innerWidth(),position:f?"fixed":"absolute"}).animate(k,b.duration,b.easing,function(){m.remove(),a.isFunction(c)&&c()})}}),a.fx.step.clip=function(b){b.clipInit||(b.start=a(b.elem).cssClip(),"string"==typeof b.end&&(b.end=d(b.end,b.elem)),b.clipInit=!0),a(b.elem).cssClip({top:b.pos*(b.end.top-b.start.top)+b.start.top,right:b.pos*(b.end.right-b.start.right)+b.start.right,bottom:b.pos*(b.end.bottom-b.start.bottom)+b.start.bottom,left:b.pos*(b.end.left-b.start.left)+b.start.left})}}(),/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/
function(){
// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(2*a)/2:1-c(a*-2+2)/2}})}();var o,o=a.effects;a.effects.define("blind","hide",function(b,c){var d={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},e=a(this),f=b.direction||"up",g=e.cssClip(),h={clip:a.extend({},g)},i=a.effects.createPlaceholder(e);h.clip[d[f][0]]=h.clip[d[f][1]],"show"===b.mode&&(e.cssClip(h.clip),i&&i.css(a.effects.clipToBox(h)),h.clip=g),i&&i.animate(a.effects.clipToBox(h),b.duration,b.easing),e.animate(h,{queue:!1,duration:b.duration,easing:b.easing,complete:c})}),a.effects.define("bounce",function(b,c){var d,e,f,g=a(this),
// Defaults:
h=b.mode,i="hide"===h,j="show"===h,k=b.direction||"up",l=b.distance,m=b.times||5,
// Number of internal animations
n=2*m+(j||i?1:0),o=b.duration/n,p=b.easing,
// Utility:
q="up"===k||"down"===k?"top":"left",r="up"===k||"left"===k,s=0,t=g.queue().length;
// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
for(a.effects.createPlaceholder(g),f=g.css(q),
// Default distance for the BIGGEST bounce is the outer Distance / 3
l||(l=g["top"===q?"outerHeight":"outerWidth"]()/3),j&&(e={opacity:1},e[q]=f,
// If we are showing, force opacity 0 and set the initial position
// then do the "first" animation
g.css("opacity",0).css(q,r?2*-l:2*l).animate(e,o,p)),
// Start at the smallest distance if we are hiding
i&&(l/=Math.pow(2,m-1)),e={},e[q]=f;s<m;s++)d={},d[q]=(r?"-=":"+=")+l,g.animate(d,o,p).animate(e,o,p),l=i?2*l:l/2;
// Last Bounce when Hiding
i&&(d={opacity:0},d[q]=(r?"-=":"+=")+l,g.animate(d,o,p)),g.queue(c),a.effects.unshift(g,t,n+1)}),a.effects.define("clip","hide",function(b,c){var d,e={},f=a(this),g=b.direction||"vertical",h="both"===g,i=h||"horizontal"===g,j=h||"vertical"===g;d=f.cssClip(),e.clip={top:j?(d.bottom-d.top)/2:d.top,right:i?(d.right-d.left)/2:d.right,bottom:j?(d.bottom-d.top)/2:d.bottom,left:i?(d.right-d.left)/2:d.left},a.effects.createPlaceholder(f),"show"===b.mode&&(f.cssClip(e.clip),e.clip=d),f.animate(e,{queue:!1,duration:b.duration,easing:b.easing,complete:c})}),a.effects.define("drop","hide",function(b,c){var d,e=a(this),f=b.mode,g="show"===f,h=b.direction||"left",i="up"===h||"down"===h?"top":"left",j="up"===h||"left"===h?"-=":"+=",k="+="===j?"-=":"+=",l={opacity:0};a.effects.createPlaceholder(e),d=b.distance||e["top"===i?"outerHeight":"outerWidth"](!0)/2,l[i]=j+d,g&&(e.css(l),l[i]=k+d,l.opacity=1),
// Animate
e.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:c})}),a.effects.define("explode","hide",function(b,c){
// Children animate complete:
function d(){t.push(this),t.length===l*m&&e()}function e(){n.css({visibility:"visible"}),a(t).remove(),c()}var f,g,h,i,j,k,l=b.pieces?Math.round(Math.sqrt(b.pieces)):3,m=l,n=a(this),o=b.mode,p="show"===o,
// Show and then visibility:hidden the element before calculating offset
q=n.show().css("visibility","hidden").offset(),
// Width and height of a piece
r=Math.ceil(n.outerWidth()/m),s=Math.ceil(n.outerHeight()/l),t=[];
// Clone the element for each row and cell.
for(f=0;f<l;f++)for(// ===>
i=q.top+f*s,k=f-(l-1)/2,g=0;g<m;g++)// |||
h=q.left+g*r,j=g-(m-1)/2,
// Create a clone of the now hidden main element that will be absolute positioned
// within a wrapper div off the -left and -top equal to size of our pieces
n.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-g*r,top:-f*s}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:r,height:s,left:h+(p?j*r:0),top:i+(p?k*s:0),opacity:p?0:1}).animate({left:h+(p?0:j*r),top:i+(p?0:k*s),opacity:p?1:0},b.duration||500,b.easing,d)}),a.effects.define("fade","toggle",function(b,c){var d="show"===b.mode;a(this).css("opacity",d?0:1).animate({opacity:d?1:0},{queue:!1,duration:b.duration,easing:b.easing,complete:c})}),a.effects.define("fold","hide",function(b,c){
// Create element
var d=a(this),e=b.mode,f="show"===e,g="hide"===e,h=b.size||15,i=/([0-9]+)%/.exec(h),j=!!b.horizFirst,k=j?["right","bottom"]:["bottom","right"],l=b.duration/2,m=a.effects.createPlaceholder(d),n=d.cssClip(),o={clip:a.extend({},n)},p={clip:a.extend({},n)},q=[n[k[0]],n[k[1]]],r=d.queue().length;i&&(h=parseInt(i[1],10)/100*q[g?0:1]),o.clip[k[0]]=h,p.clip[k[0]]=h,p.clip[k[1]]=0,f&&(d.cssClip(p.clip),m&&m.css(a.effects.clipToBox(p)),p.clip=n),
// Animate
d.queue(function(c){m&&m.animate(a.effects.clipToBox(o),l,b.easing).animate(a.effects.clipToBox(p),l,b.easing),c()}).animate(o,l,b.easing).animate(p,l,b.easing).queue(c),a.effects.unshift(d,r,4)}),a.effects.define("highlight","show",function(b,c){var d=a(this),e={backgroundColor:d.css("backgroundColor")};"hide"===b.mode&&(e.opacity=0),a.effects.saveStyle(d),d.css({backgroundImage:"none",backgroundColor:b.color||"#ffff99"}).animate(e,{queue:!1,duration:b.duration,easing:b.easing,complete:c})}),a.effects.define("size",function(b,c){
// Create element
var d,e,f,g=a(this),
// Copy for children
h=["fontSize"],i=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],j=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
// Set options
k=b.mode,l="effect"!==k,m=b.scale||"both",n=b.origin||["middle","center"],o=g.css("position"),p=g.position(),q=a.effects.scaledDimensions(g),r=b.from||q,s=b.to||a.effects.scaledDimensions(g,0);a.effects.createPlaceholder(g),"show"===k&&(f=r,r=s,s=f),
// Set scaling factor
e={from:{y:r.height/q.height,x:r.width/q.width},to:{y:s.height/q.height,x:s.width/q.width}},
// Scale the css box
"box"!==m&&"both"!==m||(
// Vertical props scaling
e.from.y!==e.to.y&&(r=a.effects.setTransition(g,i,e.from.y,r),s=a.effects.setTransition(g,i,e.to.y,s)),
// Horizontal props scaling
e.from.x!==e.to.x&&(r=a.effects.setTransition(g,j,e.from.x,r),s=a.effects.setTransition(g,j,e.to.x,s))),
// Scale the content
"content"!==m&&"both"!==m||
// Vertical props scaling
e.from.y!==e.to.y&&(r=a.effects.setTransition(g,h,e.from.y,r),s=a.effects.setTransition(g,h,e.to.y,s)),
// Adjust the position properties based on the provided origin points
n&&(d=a.effects.getBaseline(n,q),r.top=(q.outerHeight-r.outerHeight)*d.y+p.top,r.left=(q.outerWidth-r.outerWidth)*d.x+p.left,s.top=(q.outerHeight-s.outerHeight)*d.y+p.top,s.left=(q.outerWidth-s.outerWidth)*d.x+p.left),g.css(r),
// Animate the children if desired
"content"!==m&&"both"!==m||(i=i.concat(["marginTop","marginBottom"]).concat(h),j=j.concat(["marginLeft","marginRight"]),
// Only animate children with width attributes specified
// TODO: is this right? should we include anything with css width specified as well
g.find("*[width]").each(function(){var c=a(this),d=a.effects.scaledDimensions(c),f={height:d.height*e.from.y,width:d.width*e.from.x,outerHeight:d.outerHeight*e.from.y,outerWidth:d.outerWidth*e.from.x},g={height:d.height*e.to.y,width:d.width*e.to.x,outerHeight:d.height*e.to.y,outerWidth:d.width*e.to.x};
// Vertical props scaling
e.from.y!==e.to.y&&(f=a.effects.setTransition(c,i,e.from.y,f),g=a.effects.setTransition(c,i,e.to.y,g)),
// Horizontal props scaling
e.from.x!==e.to.x&&(f=a.effects.setTransition(c,j,e.from.x,f),g=a.effects.setTransition(c,j,e.to.x,g)),l&&a.effects.saveStyle(c),
// Animate children
c.css(f),c.animate(g,b.duration,b.easing,function(){
// Restore children
l&&a.effects.restoreStyle(c)})})),
// Animate
g.animate(s,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){var b=g.offset();0===s.opacity&&g.css("opacity",r.opacity),l||(g.css("position","static"===o?"relative":o).offset(b),
// Need to save style here so that automatic style restoration
// doesn't restore to the original styles from before the animation.
a.effects.saveStyle(g)),c()}})}),a.effects.define("scale",function(b,c){
// Create element
var d=a(this),e=b.mode,f=parseInt(b.percent,10)||(0===parseInt(b.percent,10)?0:"effect"!==e?0:100),g=a.extend(!0,{from:a.effects.scaledDimensions(d),to:a.effects.scaledDimensions(d,f,b.direction||"both"),origin:b.origin||["middle","center"]},b);
// Fade option to support puff
b.fade&&(g.from.opacity=1,g.to.opacity=0),a.effects.effect.size.call(this,g,c)}),a.effects.define("puff","hide",function(b,c){var d=a.extend(!0,{},b,{fade:!0,percent:parseInt(b.percent,10)||150});a.effects.effect.scale.call(this,d,c)}),a.effects.define("pulsate","show",function(b,c){var d=a(this),e=b.mode,f="show"===e,g="hide"===e,h=f||g,
// Showing or hiding leaves off the "last" animation
i=2*(b.times||5)+(h?1:0),j=b.duration/i,k=0,l=1,m=d.queue().length;
// Anims - 1 opacity "toggles"
for(!f&&d.is(":visible")||(d.css("opacity",0).show(),k=1);l<i;l++)d.animate({opacity:k},j,b.easing),k=1-k;d.animate({opacity:k},j,b.easing),d.queue(c),a.effects.unshift(d,m,i+1)}),a.effects.define("shake",function(b,c){var d=1,e=a(this),f=b.direction||"left",g=b.distance||20,h=b.times||3,i=2*h+1,j=Math.round(b.duration/i),k="up"===f||"down"===f?"top":"left",l="up"===f||"left"===f,m={},n={},o={},p=e.queue().length;
// Shakes
for(a.effects.createPlaceholder(e),
// Animation
m[k]=(l?"-=":"+=")+g,n[k]=(l?"+=":"-=")+2*g,o[k]=(l?"-=":"+=")+2*g,
// Animate
e.animate(m,j,b.easing);d<h;d++)e.animate(n,j,b.easing).animate(o,j,b.easing);e.animate(n,j,b.easing).animate(m,j/2,b.easing).queue(c),a.effects.unshift(e,p,i+1)}),a.effects.define("slide","show",function(b,c){var d,e,f=a(this),g={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},h=b.mode,i=b.direction||"left",j="up"===i||"down"===i?"top":"left",k="up"===i||"left"===i,l=b.distance||f["top"===j?"outerHeight":"outerWidth"](!0),m={};a.effects.createPlaceholder(f),d=f.cssClip(),e=f.position()[j],
// Define hide animation
m[j]=(k?-1:1)*l+e,m.clip=f.cssClip(),m.clip[g[i][1]]=m.clip[g[i][0]],
// Reverse the animation if we're showing
"show"===h&&(f.cssClip(m.clip),f.css(j,m[j]),m.clip=d,m[j]=e),
// Actually animate
f.animate(m,{queue:!1,duration:b.duration,easing:b.easing,complete:c})});a.uiBackCompat!==!1&&(o=a.effects.define("transfer",function(b,c){a(this).transfer(b,c)}));/*!
 * jQuery UI Focusable 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/
// Selectors
a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();
// Form controls within a disabled fieldset are disabled.
// However, controls within the fieldset's legend do not get disabled.
// Since controls generally aren't placed inside legends, we skip
// this portion of the check.
return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}});a.ui.focusable,a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)},a.ui.formResetMixin={_formResetHandler:function(){var b=a(this);
// Wait for the form reset to actually happen before refreshing
setTimeout(function(){var c=b.data("ui-form-reset-instances");a.each(c,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];a.length||
// We don't use _on() here because we use a single event handler per form
this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var b=this.form.data("ui-form-reset-instances");b.splice(a.inArray(this,b),1),b.length?this.form.data("ui-form-reset-instances",b):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}};/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
//>>label: jQuery 1.7 Support
//>>group: Core
//>>description: Support version 1.7.x of jQuery core
// Support: jQuery 1.7 only
// Not a great way to check versions, but since we only support 1.7+ and only
// need to detect <1.8, this is a simple check that should suffice. Checking
// for "1.7." would be a bit safer, but the version string is 1.7, not 1.7.0
// and we'll never reach 1.70.0 (if we do, we certainly won't be supporting
// 1.7 anymore). See #11197 for why we're not using feature detection.
"1.7"===a.fn.jquery.substring(0,3)&&(
// Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
// Unlike jQuery Core 1.8+, these only support numeric values to set the
// dimensions in pixels
a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))});/*!
 * jQuery UI Keycode 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/
a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},a.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(b){return b.replace(a,"\\$1")}}(),a.fn.labels=function(){var b,c,d,e,f;
// Check control.labels first
// Check control.labels first
// Support: IE <= 11, FF <= 37, Android <= 2.3 only
// Above browsers do not support control.labels. Everything below is to support them
// as well as document fragments. control.labels does not work on document fragments
// Look for the label based on the id
// We don't search against the document in case the element
// is disconnected from the DOM
// Get a full set of top level ancestors
// Create a selector for the label based on the id
return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))},a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}}),a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.widget("ui.accordion",{version:"1.12.0",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},
// Callbacks
activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var b=this.options;this.prevShow=this.prevHide=a(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),
// Don't allow collapsible: false and active: false / null
b.collapsible||b.active!==!1&&null!=b.active||(b.active=0),this._processPanels(),
// handle negative values
b.active<0&&(b.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():a()}},_createIcons:function(){var b,c,d=this.options.icons;d&&(b=a("<span>"),this._addClass(b,"ui-accordion-header-icon","ui-icon "+d.header),b.prependTo(this.headers),c=this.active.children(".ui-accordion-header-icon"),this._removeClass(c,d.header)._addClass(c,null,d.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;
// Clean up main element
this.element.removeAttr("role"),
// Clean up headers
this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),
// Clean up content panels
a=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){
// _activate() will handle invalid values and update this.options
// Setting collapsible: false while collapsed; open first panel
return"active"===a?void this._activate(b):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),"collapsible"!==a||b||this.options.active!==!1||this._activate(0),void("icons"===a&&(this._destroyIcons(),b&&this._createIcons())))},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),
// Support: IE8 Only
// #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
this._toggleClass(null,"ui-state-disabled",!!a),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!a)},_keydown:function(b){if(!b.altKey&&!b.ctrlKey){var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._eventHandler(b);break;case c.HOME:f=this.headers[0];break;case c.END:f=this.headers[d-1]}f&&(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),a(f).trigger("focus"),b.preventDefault())}},_panelKeyDown:function(b){b.keyCode===a.ui.keyCode.UP&&b.ctrlKey&&a(b.currentTarget).prev().trigger("focus")},refresh:function(){var b=this.options;this._processPanels(),
// Was collapsed or no panel
b.active===!1&&b.collapsible===!0||!this.headers.length?(b.active=!1,this.active=a()):b.active===!1?this._activate(0):this.active.length&&!a.contains(this.element[0],this.active[0])?
// all remaining panel are disabled
this.headers.length===this.headers.find(".ui-state-disabled").length?(b.active=!1,this.active=a()):this._activate(Math.max(0,b.active-1)):
// make sure active index is correct
b.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var a=this.headers,b=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),
// Avoid memory leaks (#10056)
b&&(this._off(a.not(this.headers)),this._off(b.not(this.panels)))},_refresh:function(){var b,c=this.options,d=c.heightStyle,e=this.element.parent();this.active=this._findActive(c.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var b=a(this),c=b.uniqueId().attr("id"),d=b.next(),e=d.uniqueId().attr("id");b.attr("aria-controls",e),d.attr("aria-labelledby",c)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),
// Make sure at least one header is in the tab order
this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(c.event),"fill"===d?(b=e.height(),this.element.siblings(":visible").each(function(){var c=a(this),d=c.css("position");"absolute"!==d&&"fixed"!==d&&(b-=c.outerHeight(!0))}),this.headers.each(function(){b-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,b-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===d&&(b=0,this.headers.next().each(function(){var c=a(this).is(":visible");c||a(this).show(),b=Math.max(b,a(this).css("height","").height()),c||a(this).hide()}).height(b))},_activate:function(b){var c=this._findActive(b)[0];
// Trying to activate the already active panel
c!==this.active[0]&&(
// Trying to collapse, simulate a click on the currently active header
c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return"number"==typeof b?this.headers.eq(b):a()},_setupEvents:function(b){var c={keydown:"_keydown"};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,c),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(b){var c,d,e=this.options,f=this.active,g=a(b.currentTarget),h=g[0]===f[0],i=h&&e.collapsible,j=i?a():g.next(),k=f.next(),l={oldHeader:f,oldPanel:k,newHeader:i?a():g,newPanel:j};b.preventDefault(),
// click on active header, but not collapsible
h&&!e.collapsible||
// allow canceling activation
this._trigger("beforeActivate",b,l)===!1||(e.active=!i&&this.headers.index(g),
// When the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=h?a():g,this._toggle(l),
// Switch classes
// corner classes on the previously active header stay after the animation
this._removeClass(f,"ui-accordion-header-active","ui-state-active"),e.icons&&(c=f.children(".ui-accordion-header-icon"),this._removeClass(c,null,e.icons.activeHeader)._addClass(c,null,e.icons.header)),h||(this._removeClass(g,"ui-accordion-header-collapsed")._addClass(g,"ui-accordion-header-active","ui-state-active"),e.icons&&(d=g.children(".ui-accordion-header-icon"),this._removeClass(d,null,e.icons.header)._addClass(d,null,e.icons.activeHeader)),this._addClass(g.next(),"ui-accordion-content-active")))},_toggle:function(b){var c=b.newPanel,d=this.prevShow.length?this.prevShow:b.oldPanel;
// Handle activating a panel during the animation for another activation
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,b):(d.hide(),c.show(),this._toggleComplete(b)),d.attr({"aria-hidden":"true"}),d.prev().attr({"aria-selected":"false","aria-expanded":"false"}),
// if we're switching panels, remove the old header from the tab order
// if we're opening from collapsed state, remove the previous header from the tab order
// if we're collapsing, then keep the collapsing header in the tab order
c.length&&d.length?d.prev().attr({tabIndex:-1,"aria-expanded":"false"}):c.length&&this.headers.filter(function(){return 0===parseInt(a(this).attr("tabIndex"),10)}).attr("tabIndex",-1),c.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(a,b,c){var d,e,f,g=this,h=0,i=a.css("box-sizing"),j=a.length&&(!b.length||a.index()<b.index()),k=this.options.animate||{},l=j&&k.down||k,m=function(){g._toggleComplete(c)};
// fall back from options to animation in case of partial down settings
return"number"==typeof l&&(f=l),"string"==typeof l&&(e=l),e=e||l.easing||k.easing,f=f||l.duration||k.duration,b.length?a.length?(d=a.show().outerHeight(),b.animate(this.hideProps,{duration:f,easing:e,step:function(a,b){b.now=Math.round(a)}}),void a.hide().animate(this.showProps,{duration:f,easing:e,complete:m,step:function(a,c){c.now=Math.round(a),"height"!==c.prop?"content-box"===i&&(h+=c.now):"content"!==g.options.heightStyle&&(c.now=Math.round(d-b.outerHeight()-h),h=0)}})):b.animate(this.hideProps,f,e,m):a.animate(this.showProps,f,e,m)},_toggleComplete:function(a){var b=a.oldPanel,c=b.prev();this._removeClass(b,"ui-accordion-content-active"),this._removeClass(c,"ui-accordion-header-active")._addClass(c,"ui-accordion-header-collapsed"),
// Work around for rendering bug in IE (#5421)
b.length&&(b.parent()[0].className=b.parent()[0].className),this._trigger("activate",null,a)}}),a.ui.safeActiveElement=function(a){var b;
// Support: IE 9 only
// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
try{b=a.activeElement}catch(c){b=a.body}
// Support: IE 9 - 11 only
// IE may return null instead of an element
// Interestingly, this only seems to occur when NOT in an iframe
// Support: IE 11 only
// IE11 returns a seemingly empty object in some cases when accessing
// document.activeElement from an <iframe>
return b||(b=a.body),b.nodeName||(b=a.body),b},a.widget("ui.menu",{version:"1.12.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",
// Callbacks
blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,
// Flag used to prevent firing of the click handler
// as the event bubbles up through nested menus
this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({
// Prevent focus from sticking to links inside menu after clicking
// them (focus should always stay on UL during navigation).
"mousedown .ui-menu-item":function(a){a.preventDefault()},"click .ui-menu-item":function(b){var c=a(b.target),d=a(a.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(b),
// Only set the mouseHandled flag if the event will bubble, see #9469.
b.isPropagationStopped()||(this.mouseHandled=!0),
// Open submenu on click
c.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&d.closest(".ui-menu").length&&(
// Redirect focus to the menu
this.element.trigger("focus",[!0]),
// If the active item is on the top level, let it stay active.
// Otherwise, blur the active item since it is no longer visible.
this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){
// Ignore mouse events while typeahead is active, see #10458.
// Prevents focusing the wrong item when typeahead causes a scroll while the mouse
// is over an item in the menu
if(!this.previousFilter){var c=a(b.target).closest(".ui-menu-item"),d=a(b.currentTarget);
// Ignore bubbled events on parent items, see #11641
c[0]===d[0]&&(
// Remove ui-state-active class from siblings of the newly focused menu item
// to avoid a jump caused by adjacent elements both having a class with a border
this._removeClass(d.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(b,d))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){
// If there's already an active item, keep it active
// If not, activate the first item
var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){var c=!a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]));c&&this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),
// Clicks outside of a menu collapse any open menus
this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),
// Reset the mouseHandled flag
this.mouseHandled=!1}})},_destroy:function(){var b=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),c=b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
// Destroy (sub)menus
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),c.children().each(function(){var b=a(this);b.data("ui-menu-submenu-caret")&&b.remove()})},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||"",e=String.fromCharCode(b.keyCode),f=!1,clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,
// If no matches on the current filter, reset to the last character pressed
// to move down the menu to the first item that starts with that character
c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c,d,e,f,g=this,h=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),
// Initialize nested menus
d=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),c=b.prev(),d=a("<span>").data("ui-menu-submenu-caret",!0);g._addClass(d,"ui-menu-icon","ui-icon "+h),c.attr("aria-haspopup","true").prepend(d),b.attr("aria-labelledby",c.attr("id"))}),this._addClass(d,"ui-menu","ui-widget ui-widget-content ui-front"),b=i.add(this.element),c=b.find(this.options.items),
// Initialize menu-items containing spaces and/or dashes only as dividers
c.not(".ui-menu-item").each(function(){var b=a(this);g._isDivider(b)&&g._addClass(b,"ui-menu-divider","ui-widget-content")}),
// Don't refresh list items that are already adapted
e=c.not(".ui-menu-item, .ui-menu-divider"),f=e.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(e,"ui-menu-item")._addClass(f,"ui-menu-item-wrapper"),
// Add aria-disabled attribute to any disabled menu item
c.filter(".ui-state-disabled").attr("aria-disabled","true"),
// If the active item has been removed, blur the menu
this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){if("icons"===a){var c=this.element.find(".ui-menu-icon");this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,b.submenu)}this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",String(a)),this._toggleClass(null,"ui-state-disabled",!!a)},focus:function(a,b){var c,d,e;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),
// Only update aria-activedescendant if there's a role
// otherwise we assume focus is managed elsewhere
this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),
// Highlight active parent menu item, if any
e=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(e,null,"ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)},_startOpening:function(a){clearTimeout(this.timer),
// Don't open if already open fixes a Firefox bug that caused a .5 pixel
// shift in the submenu position when mousing over the caret icon
"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){
// If we were passed an event, look for the submenu that contains the event
var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));
// If we found no valid submenu ancestor, use the main menu to close all
// sub menus anyway
d.length||(d=this.element),this._close(d),this.blur(b),
// Work around active item staying active after menu is blurred
this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d},this.delay)},
// With no arguments, closes the currently active menu - if nothing is active
// it closes all menus.  If passed an argument, it will search for menus BELOW
_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(b){return!a(b.target).closest(".ui-menu").length},_isDivider:function(a){
// Match hyphen, em dash, en dash
return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();b&&b.length&&(this._open(b.parent()),
// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){
// TODO: It should never be possible to not have an active item at this
// point, but the tests don't trigger mouseenter before click.
this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)},_filterMenuItems:function(b){var c=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=new RegExp("^"+c,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))})}});/*!
 * jQuery UI Autocomplete 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css
a.widget("ui.autocomplete",{version:"1.12.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,
// Callbacks
change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){
// Some browsers only repeat keydown events, not keypress events,
// so we use the suppressKeyPress flag to determine if we've already
// handled the keydown event. #7269
// Unfortunately the code for & in keypress is the same as the up arrow,
// so we use the suppressKeyPressRepeat flag to avoid handling keypress
// events when we know the keydown event was used to modify the
// search term. #7799
var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;
// Textareas are always multi-line
// Inputs are always single-line, even if inside a contentEditable element
// IE also treats inputs as contentEditable
// All other element types are determined by whether or not they're contentEditable
this.isMultiLine=f||!g&&this._isContentEditable(this.element),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:
// when menu is open and has focus
this.menu.active&&(
// #6055 - Opera still allows the keypress to occur
// which causes forms to submit
b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),
// Different browsers have different default behavior for escape
// Single press can mean undo or clear
// Double press in IE means clear the whole form
e.preventDefault());break;default:c=!0,
// search timeout should be triggered before the input value is changed
this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){
// Replicate some key handlers to allow them to repeat in Firefox and Opera
var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").appendTo(this._appendTo()).menu({
// disable ARIA support, the live region takes care of that
role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(b){
// prevent moving focus out of the text field
b.preventDefault(),
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,
// Support: IE 8 only
// Right clicking a menu item or selecting text from the menu items will
// result in focus moving out of the input. However, we've already received
// and ignored the blur event because of the cancelBlur flag set above. So
// we restore focus to ensure that the menu closes properly based on the user's
// next actions.
this.element[0]!==a.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(b,c){var d,e;
// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
// Announce the value in the liveRegion
return this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)})):(e=c.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",b,{item:e})&&b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(e.value),d=c.item.attr("aria-label")||e.value,void(d&&a.trim(d).length&&(this.liveRegion.children().hide(),a("<div>").text(d).appendTo(this.liveRegion))))},menuselect:function(b,c){var d=c.item.data("ui-autocomplete-item"),e=this.previous;
// Only trigger when focus was lost (click on menu)
this.element[0]!==a.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=e,
// #6109 - IE triggers two focus events and the second
// is asynchronous, so we need to reset the previous
// term synchronously and asynchronously :-(
this._delay(function(){this.previous=e,this.selectedItem=d})),!1!==this._trigger("select",b,{item:d})&&this._value(d.value),
// reset the term after the select event
// this allows custom select handling to work properly
this.term=this._value(),this.close(b),this.selectedItem=d}}),this.liveRegion=a("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),
// Turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(b){var c=this.menu.element[0];return b.target===this.element[0]||b.target===c||a.contains(c,b.target)},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front, dialog")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){
// Search if the value has changed, or if the user retypes the same value (see #7434)
var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;b&&(!b||c||d)||(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){
// Always save the actual value, not the one passed as an argument
return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var b=++this.requestIndex;return a.proxy(function(a){b===this.requestIndex&&this.__response(a),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):
// use ._close() instead of .close() so we don't cancel future searches
this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){
// Remove the handler that closes the menu on outside clicks
this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){
// assume all items have the right format when the first item is complete
// assume all items have the right format when the first item is complete
return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({},b,{label:b.label||b.value,value:b.value||b.label})})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),
// Size and position menu
c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),
// Listen for interactions outside of the widget (#6642)
this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(
// Firefox wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping (#7513)
a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<div>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),
// Prevents moving cursor to beginning/end of the text field in some browsers
b.preventDefault())},
// Support: Chrome <=50
// We should be able to just use this.element.prop( "isContentEditable" )
// but hidden elements always report false in Chrome.
// https://code.google.com/p/chromium/issues/detail?id=313082
_isContentEditable:function(a){if(!a.length)return!1;var b=a.prop("contentEditable");return"inherit"===b?this._isContentEditable(a.parent()):"true"===b}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),
// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(b){var c;this._superApply(arguments),this.options.disabled||this.cancelSearch||(c=b&&b.length?this.options.messages.results(b.length):this.options.messages.noResults,this.liveRegion.children().hide(),a("<div>").text(c).appendTo(this.liveRegion))}});var p=(a.ui.autocomplete,/ui-corner-([a-z]){2,6}/g);a.widget("ui.controlgroup",{version:"1.12.0",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},
// To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,c=[];
// First we iterate over each of the items options
a.each(this.options.items,function(d,e){var f,g={};
// Make sure the widget has a selector set
if(e)
// Make sure the widget actually exists
// We assume everything is in the middle to start because we can't determine
// first / last elements until all enhancments are done.
// Find instances of this widget inside controlgroup and init them
return"controlgroupLabel"===d?(f=b.element.find(e),f.each(function(){var b=a(this);b.children(".ui-controlgroup-label-contents").length||b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),void(c=c.concat(f.get()))):void(a.fn[d]&&(b["_"+d+"Options"]&&(g=b["_"+d+"Options"]("middle")),b.element.find(e).each(function(){var e=a(this),f=e[d]("instance"),h=a.widget.extend({},g);
// If the button is the child of a spinner ignore it
// TODO: Find a more generic solution
if("button"!==d||!e.parent(".ui-spinner").length){
// Create the widget if it doesn't exist
f||(f=e[d]()[d]("instance")),f&&(h.classes=b._resolveClassesValues(h.classes,f)),e[d](h);
// Store an instance of the controlgroup to be able to reference
// from the outermost element for changing options and refresh
var i=e[d]("widget");a.data(i[0],"ui-controlgroup-data",f?f:e[d]("instance")),c.push(i[0])}})))}),this.childWidgets=a(a.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(b){this.childWidgets.each(function(){var c=a(this),d=c.data("ui-controlgroup-data");d&&d[b]&&d[b]()})},_updateCornerClass:function(a,b){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,c),this._addClass(a,null,d)},_buildSimpleOptions:function(a,b){var c="vertical"===this.options.direction,d={classes:{}};return d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a],d},_spinnerOptions:function(a){var b=this._buildSimpleOptions(a,"ui-spinner");return b.classes["ui-spinner-up"]="",b.classes["ui-spinner-down"]="",b},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:!!b&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},_resolveClassesValues:function(b,c){var d={};return a.each(b,function(a){var e=c.options.classes[a]||"";e=e.replace(p,"").trim(),d[a]=(e+" "+b[a]).replace(/\s+/g," ")}),d},_setOption:function(a,b){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a?void this._callChildMethod(b?"disable":"enable"):void this.refresh()},refresh:function(){var b,c=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),b=this.childWidgets,
// We filter here because we need to track all childWidgets not just the visible ones
this.options.onlyVisible&&(b=b.filter(":visible")),b.length&&(
// We do this last because we need to make sure all enhancment is done
// before determining first and last
a.each(["first","last"],function(a,d){var e=b[d]().data("ui-controlgroup-data");if(e&&c["_"+e.widgetName+"Options"]){var f=c["_"+e.widgetName+"Options"](1===b.length?"only":d);f.classes=c._resolveClassesValues(f.classes,e),e.element[e.widgetName](f)}else c._updateCornerClass(b[d](),d)}),
// Finally call the refresh method on each of the child widgets.
this._callChildMethod("refresh"))}});/*!
 * jQuery UI Checkboxradio 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Checkboxradio
//>>group: Widgets
//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
//>>docs: http://api.jqueryui.com/checkboxradio/
//>>demos: http://jqueryui.com/checkboxradio/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.structure: ../../themes/base/checkboxradio.css
//>>css.theme: ../../themes/base/theme.css
a.widget("ui.checkboxradio",[a.ui.formResetMixin,{version:"1.12.0",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var b,c,d=this,e=this._super()||{};
// We read the type here, because it makes more sense to throw a element type error first,
// rather then the error for lack of a label. Often if its the wrong type, it
// won't have a label (e.g. calling on a div, btn, etc)
// If there are multiple labels, use the last one
// We need to get the label text but this may also need to make sure it does not contain the
// input itself.
// Set the label option if we found label text
return this._readType(),c=this.element.labels(),this.label=a(c[c.length-1]),this.label.length||a.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element).each(function(){
// The label contents could be text, html, or a mix. We concat each element to get a
// string representation of the label, without the input as part of it.
d.originalLabel+=3===this.nodeType?a(this).text():this.outerHTML}),this.originalLabel&&(e.label=this.originalLabel),b=this.element[0].disabled,null!=b&&(e.disabled=b),e},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var b=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===b&&/radio|checkbox/.test(this.type)||a.error("Can't create checkboxradio on element.nodeName="+b+" and element.type="+this.type)},
// Support jQuery Mobile enhanced option
_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var b,c=this.element[0].name,d="input[name='"+a.ui.escapeSelector(c)+"']";return c?(b=this.form.length?a(this.form[0].elements).filter(d):a(d).filter(function(){return 0===a(this).form().length}),b.not(this.element)):a([])},_toggleClasses:function(){var b=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",b),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",b)._toggleClass(this.icon,null,"ui-icon-blank",!b),"radio"===this.type&&this._getRadioGroup().each(function(){var b=a(this).checkboxradio("instance");b&&b._removeClass(b.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(a,b){
// We don't allow the value to be set to nothing
if("label"!==a||b)return this._super(a,b),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",b),void(this.element[0].disabled=b)):void this.refresh()},_updateIcon:function(b){var c="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=a("<span>"),this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(c+=b?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,b?"ui-icon-blank":"ui-icon-check")):c+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",c),b||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){
// Remove the contents of the label ( minus the icon, icon space, and input )
this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(),this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),b!==this.options.disabled&&this._setOptions({disabled:b})}}]);a.ui.checkboxradio;/*!
 * jQuery UI Button 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css
a.widget("ui.button",{version:"1.12.0",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,
// This is to support cases like in jQuery Mobile where the base widget does have
// an implementation of _getCreateOptions
b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),
// We have to check the option again here even though we did in _getCreateOptions,
// because null may have been passed on init which would override what was set in
// _getCreateOptions
null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),
// Check to see if the label needs to be set or if its already correct
this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),
// Support: PhantomJS <= 1.9, IE 8 Only
// If a native click is available use it so we actually cause navigation
// otherwise just trigger a click event
this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;
// Create icon
this.icon?d&&
// If we are updating the icon remove the old icon class
this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),
// If we are updating the icon add the new icon class
d&&this._addClass(this.icon,null,c),this._attachIcon(e),
// If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
// the iconSpace if there is one.
f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(
// Position is beginning or end so remove the ui-widget-icon-block class and add the
// space if it does not exist
this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),
// Make sure we can't end up with a button that has neither text nor icon
"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(
// If there is an icon, append it, else nothing then append the value
// this avoids removal of the icon when setting label text
this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){
// Make sure to only check disabled if its an element that supports this otherwise
// check for the disabled class to determine state
var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),
// DEPRECATED
a.uiBackCompat!==!1&&(
// Text and Icons options
a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))});a.ui.button;
// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*!
 * jQuery UI Datepicker 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css
a.extend(a.ui,{datepicker:{version:"1.12.0"}});var q;a.extend(d.prototype,{/* Class name added to elements to indicate already configured with a date picker. */
markerClassName:"hasDatepicker",
//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,
// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function(){return this.dpDiv},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
setDefaults:function(a){return g(this._defaults,a||{}),this},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},/* Create a new instance object. */
_newInst:function(b,c){var d=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:d,input:b,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:c,// is datepicker inline or not
dpDiv:c?// presentation div
e(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},/* Attach the date picker to an input field. */
_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(c),a.data(b,"datepicker",c),
//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
c.settings.disabled&&this._disableDatepicker(b))},/* Make attachments based on settings. */
_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.off("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||// pop-up date picker when in the marked field
b.on("focus",this._showDatepicker),"button"!==d&&"both"!==d||(// pop-up date picker when button clicked
e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.on("click",function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},/* Apply the maximum length for the date format. */
_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),// Ensure double digits
g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},/* Attach an inline date picker to a div. */
_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),
//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
c.settings.disabled&&this._disableDatepicker(b),
// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
c.dpDiv.css("display","block"))},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
_dialogDatepicker:function(b,c,d,e,f){var h,i,j,k,l,m=this._dialogInst;// internal instance
// should use actual width/height below
// Move input on screen for focus, but hidden behind dialog
return m||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),a("body").append(this._dialogInput),m=this._dialogInst=this._newInst(this._dialogInput,!1),m.settings={},a.data(this._dialogInput[0],"datepicker",m)),g(m.settings,e||{}),c=c&&c.constructor===Date?this._formatDate(m,c):c,this._dialogInput.val(c),this._pos=f?f.length?f:[f.pageX,f.pageY]:null,this._pos||(i=document.documentElement.clientWidth,j=document.documentElement.clientHeight,k=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[i/2-100+k,j/2-150+l]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),m.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],"datepicker",m),this},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,"datepicker");d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,"datepicker"),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==c&&"span"!==c||d.removeClass(this.markerClassName).empty(),q===e&&(q=null))},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,"datepicker");e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),// delete entry
this._disabledInputs[this._disabledInputs.length]=b)},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
_getInst:function(b){try{return a.data(b,"datepicker")}catch(c){throw"Missing instance data for this datepicker"}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
_optionDatepicker:function(b,c,d){var e,f,h,i,j=this._getInst(b);
// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
return 2===arguments.length&&"string"==typeof c?"defaults"===c?a.extend({},a.datepicker._defaults):j?"all"===c?a.extend({},j.settings):this._get(j,c):null:(e=c||{},"string"==typeof c&&(e={},e[c]=d),void(j&&(this._curInst===j&&this._hideDatepicker(),f=this._getDateDatepicker(b,!0),h=this._getMinMaxDate(j,"min"),i=this._getMinMaxDate(j,"max"),g(j.settings,e),null!==h&&void 0!==e.dateFormat&&void 0===e.minDate&&(j.settings.minDate=this._formatDate(j,h)),null!==i&&void 0!==e.dateFormat&&void 0===e.maxDate&&(j.settings.maxDate=this._formatDate(j,i)),"disabled"in e&&(e.disabled?this._disableDatepicker(b):this._enableDatepicker(b)),this._attachments(a(b),j),this._autoSize(j),this._setDate(j,f),this._updateAlternate(j),this._updateDatepicker(j))))},
// Change method deprecated
_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},/* Handle keystrokes. */
_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;// hide on tab out
case 13:
// Trigger custom callback
return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;// don't submit the form
case 27:a.datepicker._hideDatepicker();break;// hide on escape
case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;// clear on ctrl or command +end
case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;// current on ctrl or command +home
case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,
// -1 day on ctrl or command +left
b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");
// next month/year on alt +left on Mac
break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;// -1 week on ctrl or command +up
case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,
// +1 day on ctrl or command +right
b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");
// next month/year on alt +right
break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;// +1 week on ctrl or command +down
default:g=!1}else 36===b.keyCode&&b.ctrlKey?// display the date picker on ctrl+home
a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},/* Filter entered characters - based on date format. */
_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},/* Synchronise manual entry and field/alternate field. */
_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(// only if valid
a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
_showDatepicker:function(b){if(b=b.target||b,"input"!==b.nodeName.toLowerCase()&&(// find from button/image trigger
b=a("input",b.parentNode)[0]),!a.datepicker._isDisabledDatepicker(b)&&a.datepicker._lastInput!==b){var d,e,f,h,i,j,k;d=a.datepicker._getInst(b),a.datepicker._curInst&&a.datepicker._curInst!==d&&(a.datepicker._curInst.dpDiv.stop(!0,!0),d&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),e=a.datepicker._get(d,"beforeShow"),f=e?e.apply(b,[b,d]):{},f!==!1&&(g(d.settings,f),d.lastVal=null,a.datepicker._lastInput=b,a.datepicker._setDateFromField(d),a.datepicker._inDialog&&(// hide cursor
b.value=""),a.datepicker._pos||(// position below input
a.datepicker._pos=a.datepicker._findPos(b),a.datepicker._pos[1]+=b.offsetHeight),h=!1,a(b).parents().each(function(){return h|="fixed"===a(this).css("position"),!h}),i={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,
//to avoid flashes on Firefox
d.dpDiv.empty(),
// determine sizing offscreen
d.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(d),
// fix width for dynamic number of date pickers
// and adjust position before showing
i=a.datepicker._checkOffset(d,i,h),d.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":h?"fixed":"absolute",display:"none",left:i.left+"px",top:i.top+"px"}),d.inline||(j=a.datepicker._get(d,"showAnim"),k=a.datepicker._get(d,"duration"),d.dpDiv.css("z-index",c(a(b))+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[j]?d.dpDiv.show(j,a.datepicker._get(d,"showOptions"),k):d.dpDiv[j||"show"](j?k:null),a.datepicker._shouldFocusInput(d)&&d.input.trigger("focus"),a.datepicker._curInst=d))}},/* Generate the date picker content. */
_updateDatepicker:function(b){this.maxRows=4,//Reset the max number of rows being displayed (see #7043)
q=b,// for delegate hover events
b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b);var c,d=this._getNumberOfMonths(b),e=d[1],g=17,h=b.dpDiv.find("."+this._dayOverClass+" a");h.length>0&&f.apply(h.get(0)),b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),e>1&&b.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",g*e+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.trigger("focus"),
// Deffered render of the years select (to avoid flashes on Firefox)
b.yearshtml&&(c=b.yearshtml,setTimeout(function(){
//assure that inst.yearshtml didn't change.
c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},
// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},/* Check positioning to remain on screen. */
_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());
// Now check if datepicker is showing outside window viewport - move to a better place if so.
return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},/* Find an object's position on the screen. */
_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
_hideDatepicker:function(b){var c,d,e,f,g=this._curInst;!g||b&&g!==a.data(b,"datepicker")||this._datepickerShowing&&(c=this._get(g,"showAnim"),d=this._get(g,"duration"),e=function(){a.datepicker._tidyDialog(g)},
// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
a.effects&&(a.effects.effect[c]||a.effects[c])?g.dpDiv.hide(c,a.datepicker._get(g,"showOptions"),d,e):g.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(g,"onClose"),f&&f.apply(g.input?g.input[0]:null,[g.input?g.input.val():"",g]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},/* Tidy up after a dialog display. */
_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},/* Close date picker if clicked elsewhere. */
_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},/* Adjust one of the date sub-fields. */
_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),// undo positioning
d),this._updateDatepicker(f))},/* Action for current link. */
_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},/* Action for selecting a new month/year. */
_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},/* Action for selecting a day. */
_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},/* Erase the input field and hide the date picker. */
_clearDate:function(b){var c=a(b);this._selectDate(c,"")},/* Update the input field with the selected date. */
_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.trigger("focus"),this._lastInput=null)},/* Update any alternate field to synchronise with the main field. */
_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(// update alternate field too
c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).val(e))},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
iso8601Week:function(a){var b,c=new Date(a.getTime());
// Find Thursday of this week starting on Monday
// Compare with Jan 1
return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,
// Check whether a format character is doubled
u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},
// Extract a number from the string value
v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e="y"===a?d:1,f=new RegExp("^\\d{"+e+","+d+"}"),g=c.substring(i).match(f);if(!g)throw"Missing number at position "+i;return i+=g[0].length,parseInt(g[0],10)},
// Extract a name from the string value and convert to an index
w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(i,d.length).toLowerCase()===d.toLowerCase())return f=b[0],i+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+i},
// Confirm that a literal character matches the string value
x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(p===-1?p=(new Date).getFullYear():p<100&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=k?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),r<=f)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},/* Standard date formats. */
ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,
// Check whether a format character is doubled
i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},
// Format a number, with leading zero if necessary
j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},
// Format a name, short or long as requested
k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getFullYear()%100<10?"0":"")+b.getFullYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},/* Extract all possible characters from the date format. */
_possibleChars:function(a){var b,c="",d=!1,
// Check whether a format character is doubled
e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},/* Get a setting value, defaulting if necessary. */
_get:function(a,b){return void 0!==a.settings[b]?a.settings[b]:this._defaults[b]},/* Parse existing date and initialise date picker. */
_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},/* Retrieve the default date shown on opening. */
_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},/* A date may be specified as an exact value or a relative one. */
_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},/* Set the date(s) directly. */
_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},/* Retrieve the date(s) directly. */
_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).on(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},/* Generate the HTML for the current state of the date picker. */
_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),// clear time
Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)// days of the week
D=(v+k)%7,C+="<th scope='col'"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),// calculate the number of rows to generate
H=X&&this.maxRows>G?this.maxRows:G,//If multiple months, use the higher number of rows (see #7043)
this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(// create date picker rows
B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)// create date picker days
L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
M?" ui-datepicker-other-month":"")+(// highlight days from other months
I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||// user pressed key
t.getTime()===I.getTime()&&t.getTime()===z.getTime()?
// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
N?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
M&&!r?"":" "+L[1]+(// highlight custom dates
I.getTime()===Y.getTime()?" "+this._currentClass:"")+(// highlight selected day
I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(// cell title
N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(// actions
M&&!r?"&#xa0;":// display for other months
N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(// highlight selected day
M?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+I.getDate()+"</a>")+"</td>",// display selectable date
I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},/* Generate the month and year header. */
_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";
// Month selection
if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}
// Year selection
if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(
// determine range of years to display
l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}// Close datepicker_header
return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},/* Adjust one of the date sub-fields. */
_adjustInstDate:function(a,b,c){var d=a.selectedYear+("Y"===c?b:0),e=a.selectedMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},/* Ensure a date is within any min/max bounds. */
_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},/* Notify change of month/year. */
_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},/* Determine the number of months to show. */
_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},/* Determine the current maximum date - ensure no time components are set. */
_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},/* Find the number of days in a given month. */
_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},/* Find the day of the week of the first of a month. */
_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},/* Determines if we should allow a "next/prev" month display change. */
_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},/* Is the given date in the accepted range? */
_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},/* Provide the configuration settings for formatting/parsing. */
_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},/* Format the given date for display. */
_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
a.fn.datepicker=function(b){/* Verify an empty collection wasn't passed - Fixes #6976 */
if(!this.length)return this;/* Initialise the date picker. */
a.datepicker.initialized||(a(document).on("mousedown",a.datepicker._checkExternalClick),a.datepicker.initialized=!0),/* Append datepicker main container to body if not exist. */
0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new d,// singleton instance
a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.12.0";var r=(a.datepicker,a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),!1);a(document).on("mouseup",function(){r=!1});a.widget("ui.mouse",{version:"1.12.0",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},
// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){
// don't let more than one widget handle mouseStart
if(!r){this._mouseMoved=!1,
// We may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var c=this,d=1===b.which,
// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
e=!("string"!=typeof this.options.cancel||!b.target.nodeName)&&a(b.target).closest(this.options.cancel).length;
// Click event may never have fired (Gecko & Opera)
// These delegates are required to keep context
return!(d&&!e&&this._mouseCapture(b))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return c._mouseMove(a)},this._mouseUpDelegate=function(a){return c._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),r=!0,!0))}},_mouseMove:function(b){
// Only check for mouseups outside the document if you've moved inside the document
// at least once. This prevents the firing of mouseup in the case of IE<9, which will
// fire a mousemove event if content is placed under the cursor. See #7778
// Support: IE <9
if(this._mouseMoved){
// IE mouseup check - mouseup happened when mouse was out of window
if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)
// Support: Safari <=8 - 9
// Safari sets which to 0 if you press any of the following keys
// during a drag (#14461)
if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,r=!1,b.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}},a.ui.safeBlur=function(b){
// Support: IE9 - 10 only
// If the <body> is blurred, IE will switch windows, see #9420
b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")};/*!
 * jQuery UI Draggable 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css
a.widget("ui.draggable",a.ui.mouse,{version:"1.12.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,
// Callbacks
drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;
// Among others, prevent a drag on a resizable-handle
// Among others, prevent a drag on a resizable-handle
//Quit if we're not on a valid handle
return this._blurActiveElement(b),!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);
// Only blur if the event occurred on an element that is:
// 1) within the draggable handle
// 2) but not within the currently focused element
// See #10527, #12472
this._getHandle(b)&&d.closest(c).length||
// Blur any element that currently has focus, see #4261
a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;
//Trigger event + callbacks
//Create and append the visible helper
//Cache the helper size
//If ddmanager is used for droppables, set the global draggable
/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
//Store the helper's css position
//The element's absolute position on the page minus margins
//Generate the original position
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
//Set a containment if given in the options
//Trigger event + callbacks
//Recache the helper size
//Prepare the droppable offsets
// Execute the drag once - this causes the helper not to be visible before getting its
// correct position
// If the ddmanager is used for droppables, inform the manager that dragging has started
// (see #5003)
return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){
//Call plugins and callbacks and use the resulting position if something is returned
if(
// reset any necessary cached properties (see #5009)
this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),
//Compute the helpers position
this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){
//If we are using droppables, inform the manager about the drop
var c=this,d=!1;
//if a drop comes from outside (a sortable)
return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){
// If the ddmanager is used for droppables, inform the manager that dragging has stopped
// (see #5003)
// Only need to focus if the event occurred on the draggable itself, see #10527
// The interaction is over; whether or not the click resulted in a drag,
// focus the element
return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;
// Http://bugs.jqueryui.com/ticket/9446
// a helper function can return the original element
// which wouldn't have been set to relative in _create
return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){
//Get the offsetParent and cache its position
var b=this.offsetParent.offset(),c=this.document[0];
// This is a special case where we need to modify a offset calculated on start, since the
// following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the
// next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
// the document, which means that the scroll is included in the initial calculation of the
// offset of the parent, and never recalculated upon drag
return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:
// The absolute mouse position
b.top+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top*c+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:
// The absolute mouse position
b.left+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left*c+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;
// Cache the scroll
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
// If we are not dragging yet, we won't check for options
//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
// argument errors in IE (see ticket #6950)
return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:
// The absolute mouse position
j-
// Click offset (relative to the element)
this.offset.click.top-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:
// The absolute mouse position
i-
// Click offset (relative to the element)
this.offset.click.left-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},
// From now on bulk stuff - mainly helpers
_trigger:function(b,c,d){
// Absolute position and offset (see #6884 ) have to be recalculated after plugins
return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),
// RefreshPositions is called at drag start to refresh the containerCache
// which is used in drag. This ensures it's initialized and synchronized
// with any changes that might have happened on the page since initialization.
c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,
// Allow this sortable to handle removing the helper
d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,
// Use _storedCSS To restore properties in the sortable,
// as this also handles revert (#9675) since the draggable
// may have modified them in unexpected ways (#8809)
a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),
// Once drag has ended, the sortable should return to using
// its original helper, not the shared helper from draggable
a.options.helper=a.options._helper):(
// Prevent this Sortable from removing the helper.
// However, don't set the draggable to remove the helper
// either as another connected Sortable may yet handle the removal.
a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;
// Copy over variables that sortable's _intersectsWith uses
f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){
// Copy over variables that sortable's _intersectsWith uses
return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(
// If it intersects, we use a little isOver variable and set it once,
// so that the move-in stuff gets fired only once.
f.isOver||(f.isOver=1,
// Store draggable's parent in case we need to reappend to it later.
d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),
// Store helper option to later restore it
f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},
// Fire the start events of the sortable with our passed browser event,
// and our own helper (so it doesn't create a new one)
b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),
// Because the browser event is way off the new appended portlet,
// modify necessary variables to reflect the changes
f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),
// Inform draggable that the helper is in a valid drop zone,
// used solely in the revert option to handle "valid/invalid".
d.dropped=f.element,
// Need to refreshPositions of all sortables in the case that
// adding to one sortable changes the location of the other sortables (#9675)
a.each(d.sortables,function(){this.refreshPositions()}),
// Hack so receive/update callbacks work (mostly)
d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),
// Copy the sortable's position because the draggable's can potentially reflect
// a relative position, while sortable is always absolute, which the dragged
// element has now become. (#8809)
c.position=f.position)):
// If it doesn't intersect with the sortable, and it intersected before,
// we fake the drag stop of the sortable, but make sure it doesn't remove
// the helper by using cancelHelperRemoval.
f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,
// Calling sortable's mouseStop would trigger a revert,
// so revert must be temporarily false until after mouseStop is called.
f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),
// Restore sortable behaviors that were modfied
// when the draggable entered the sortable area (#9481)
f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),
// Restore and recalculate the draggable's offset considering the sortable
// may have modified them in unexpected ways. (#8809, #10669)
c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),
// Inform draggable that the helper is no longer in a valid drop zone
d.dropped=!1,
// Need to refreshPositions of all sortables just in case removing
// from one sortable changes the location of other sortables (#9675)
a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}});a.ui.draggable;/*!
 * jQuery UI Resizable 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css
a.widget("ui.resizable",a.ui.mouse,{version:"1.12.0",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,
// See #7960
zIndex:90,
// Callbacks
resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;
// TODO: determine which cases actually cause this to happen
// if the element doesn't have the scroll set, see if it's possible to
// set the scroll
return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),
// Wrap the element if it cannot hold child nodes
this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),
// support: Safari
// Prevent Safari textarea resize
this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),
// Support: IE9
// avoid IE jump (hard set the margin)
this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};
// TODO: Unwrap at same DOM position
return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},
// TODO: make renderAxis a prototype function
this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);
// Fixing jump error on top/left - bug #2330
return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],
// TODO: Seems like a bug to cache this.outerDimensions
// considering that we are in a loop.
this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),/*
 * Resizable Extensions
 */
a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),
// Propagating resize, and updating values for each animation step
c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),
// DEPRECATED
// TODO: remove after 1.12
a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&
// Ghost option
b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}});a.ui.resizable;/*!
 * jQuery UI Dialog 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Dialog
//>>group: Widgets
//>>description: Displays customizable dialog windows.
//>>docs: http://api.jqueryui.com/dialog/
//>>demos: http://jqueryui.com/dialog/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/dialog.css
//>>css.theme: ../../themes/base/theme.css
a.widget("ui.dialog",{version:"1.12.0",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",
// Ensure the titlebar is always visible
using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,
// Callbacks
beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),
// Dialogs can't be disabled
this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),
// Don't try to place the dialog next to itself (#8613)
a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||
// Hiding a focused element doesn't trigger blur in WebKit
// so in case we have nothing to focus on, explicitly blur the active element
// https://bugs.webkit.org/show_bug.cgi?id=47182
a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;
// Ensure the overlay is moved to the top with the dialog, but only when
// opening. The overlay shouldn't move after the dialog is open so that
// modeless dialogs opened after the modal dialog stack properly.
// Track the dialog immediately upon openening in case a focus event
// somehow occurs outside of the dialog before an element inside the
// dialog is focused (#10152)
return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){
// Set focus to the first match:
// 1. An element that was focused previously
// 2. First element inside the dialog matching [autofocus]
// 3. Tabbable element inside the content element
// 4. Tabbable element inside the buttonpane
// 5. The close button
// 6. The dialog itself
var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),
// support: IE
// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
// so we check again later
this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({
// Setting tabIndex makes the div focusable
tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);
// Prevent tabbing out of dialogs
if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),
// We assume that any existing aria-describedby attribute means
// that the dialog content is marked up properly
// otherwise we brute force the content as the description
this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){
// Don't prevent click on close button (#8838)
// Focusing a dialog that is partially scrolled out of view
// causes the browser to scroll it into view, preventing the click event
a(b.target).closest(".ui-dialog-titlebar-close")||
// Dialog isn't getting focus when dragging (#8063)
this.uiDialog.trigger("focus")}}),
// Support: IE
// Use type="button" to prevent enter keypresses in textboxes from closing the
// dialog in IE (#9312)
this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;
// If we already have a button pane, remove it
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,
// Default to a non-submitting button
d=a.extend({type:"button"},d),
// Change the context for the click callback to be the main element
e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,
// .ui-resizable has position: relative defined in the stylesheet
// but dialogs have to use absolute or fixed positioning
f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){
// Need to show the dialog to get the actual offset in the position plugin
var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({
// Ensure that we always pass a string
label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(
// currently resizable, becoming non-resizable
e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),
// Currently resizable, changing handles
e&&"string"==typeof c&&f.resizable("option","handles",c),
// Currently non-resizable, becoming resizable
e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){
// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
// divs will both have width and height set, so we need to reset them
var a,b,c,d=this.options;
// Reset content sizing
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),
// Reset wrapper sizing
// determine the height of all the non-content elements
a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){
// We use a delay in case the overlay is created from an
// event that we're going to be cancelling (#2804)
var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||
// Prevent use of anchors and inputs
// Using _on() for an event handler shared across many instances is
// safe because the dialogs stack and must be closed in reverse order
this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),
// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
a.uiBackCompat!==!1&&
// Backcompat for dialogClass option
a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}});a.ui.dialog;/*!
 * jQuery UI Droppable 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Droppable
//>>group: Interactions
//>>description: Enables drop targets for draggable elements.
//>>docs: http://api.jqueryui.com/droppable/
//>>demos: http://jqueryui.com/droppable/
a.widget("ui.droppable",{version:"1.12.0",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",
// Callbacks
activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b,c=this.options,d=c.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(d)?d:function(a){return a.is(d)},this.proportions=function(){
// Store the droppable's proportions
return arguments.length?void(b=arguments[0]):b?b:b={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(c.scope),c.addClasses&&this._addClass("ui-droppable")},_addToManager:function(b){
// Add the reference and positions to the manager
a.ui.ddmanager.droppables[b]=a.ui.ddmanager.droppables[b]||[],a.ui.ddmanager.droppables[b].push(this)},_splice:function(a){for(var b=0;b<a.length;b++)a[b]===this&&a.splice(b,1)},_destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];this._splice(b)},_setOption:function(b,c){if("accept"===b)this.accept=a.isFunction(c)?c:function(a){return a.is(c)};else if("scope"===b){var d=a.ui.ddmanager.droppables[this.options.scope];this._splice(d),this._addToManager(c)}this._super(b,c)},_activate:function(b){var c=a.ui.ddmanager.current;this._addActiveClass(),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this._removeActiveClass(),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;
// Bail if draggable and droppable are same element
c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this._addHoverClass(),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;
// Bail if draggable and droppable are same element
c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this._removeHoverClass(),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;
// Bail if draggable and droppable are same element
// Bail if draggable and droppable are same element
return!(!d||(d.currentItem||d.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var c=a(this).droppable("instance");if(c.options.greedy&&!c.options.disabled&&c.options.scope===d.options.scope&&c.accept.call(c.element[0],d.currentItem||d.element)&&s(d,a.extend(c,{offset:c.element.offset()}),c.options.tolerance,b))return e=!0,!1}),!e&&(!!this.accept.call(this.element[0],d.currentItem||d.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",b,this.ui(d)),this.element)))},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}},
// Extension points just to make backcompat sane and avoid duplicating logic
// TODO: Remove in 1.13 along with call to it below
_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var s=a.ui.intersect=function(){function a(a,b,c){return a>=b&&a<b+c}return function(b,c,d,e){if(!c.offset)return!1;var f=(b.positionAbs||b.position.absolute).left+b.margins.left,g=(b.positionAbs||b.position.absolute).top+b.margins.top,h=f+b.helperProportions.width,i=g+b.helperProportions.height,j=c.offset.left,k=c.offset.top,l=j+c.proportions().width,m=k+c.proportions().height;switch(d){case"fit":return j<=f&&h<=l&&k<=g&&i<=m;case"intersect":// Right Half
// Left Half
// Bottom Half
return j<f+b.helperProportions.width/2&&h-b.helperProportions.width/2<l&&k<g+b.helperProportions.height/2&&i-b.helperProportions.height/2<m;// Top Half
case"pointer":return a(e.pageY,k,c.proportions().height)&&a(e.pageX,j,c.proportions().width);case"touch":// Top edge touching
// Bottom edge touching
// Left edge touching
// Right edge touching
return(g>=k&&g<=m||i>=k&&i<=m||g<k&&i>m)&&(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l);default:return!1}}}();/*
	This manager tracks offsets of draggables and droppables
*/
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,// workaround for #2317
h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();a:for(d=0;d<f.length;d++)
// No disabled and non-accepted
if(!(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))){
// Filter out elements in the current dragged item
for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions().height=0;continue a}f[d].visible="none"!==f[d].element.css("display"),f[d].visible&&(
// Activate the droppable if used directly from draggables
"mousedown"===g&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions({width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight}))}},drop:function(b,c){var d=!1;
// Create a copy of the droppables in case the list changes during the drop (#9116)
return a.each((a.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&s(b,this,this.options.tolerance,c)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart:function(b,c){
// Listen for scrolling so that if the dragging causes scrolling the position of the
// droppables can be recalculated (see #5003)
b.element.parentsUntil("body").on("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){
// If you have a highly dynamic page, you might try this option. It renders positions
// every time you move the mouse.
b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),
// Run through all droppables and check their positions based on specific tolerance options
a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,e,f,g=s(b,this,this.options.tolerance,c),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;h&&(this.options.greedy&&(
// find droppable parents with same scope
e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a(this).droppable("instance").options.scope===e}),f.length&&(d=a(f[0]).droppable("instance"),d.greedyChild="isover"===h)),
// We just moved into a greedy child
d&&"isover"===h&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this["isout"===h?"isover":"isout"]=!1,this["isover"===h?"_over":"_out"].call(this,c),
// We just moved out of a greedy child
d&&"isout"===h&&(d.isout=!1,d.isover=!0,d._over.call(d,c)))}})},dragStop:function(b,c){b.element.parentsUntil("body").off("scroll.droppable"),
// Call prepareOffsets one final time since IE does not fire return scroll events when
// overflow was caused by drag (see #5003)
b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}},
// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
a.uiBackCompat!==!1&&
// Backcompat for activeClass and hoverClass options
a.widget("ui.droppable",a.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}});a.ui.droppable,a.widget("ui.progressbar",{version:"1.12.0",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){
// Constrain initial value
this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({
// Only set static values; aria-valuenow and aria-valuemax are
// set inside _refreshValue()
role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=a("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(a){return void 0===a?this.options.value:(this.options.value=this._constrainedValue(a),void this._refreshValue())},_constrainedValue:function(a){
// Sanitize value
return void 0===a&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a){
// Ensure "value" option is set after other values (like max)
var b=a.value;delete a.value,this._super(a),this.options.value=this._constrainedValue(b),this._refreshValue()},_setOption:function(a,b){"max"===a&&(
// Don't allow a max less than min
b=Math.max(this.min,b)),this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var b=this.options.value,c=this._percentage();this.valueDiv.toggle(this.indeterminate||b>this.min).width(c.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,b===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=a("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==b&&(this.oldValue=b,this._trigger("change")),b===this.options.max&&this._trigger("complete")}}),a.widget("ui.selectable",a.ui.mouse,{version:"1.12.0",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",
// Callbacks
selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b=this;this._addClass("ui-selectable"),this.dragged=!1,
// Cache selectee children based on filter
this.refresh=function(){b.elementPos=a(b.element[0]).offset(),b.selectees=a(b.options.filter,b.element[0]),b._addClass(b.selectees,"ui-selectee"),b.selectees.each(function(){var c=a(this),d=c.offset(),e={left:d.left-b.elementPos.left,top:d.top-b.elementPos.top};a.data(this,"selectable-item",{element:this,$element:c,left:e.left,top:e.top,right:e.left+c.outerWidth(),bottom:e.top+c.outerHeight(),startselected:!1,selected:c.hasClass("ui-selected"),selecting:c.hasClass("ui-selecting"),unselecting:c.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=a("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(b){var c=this,d=this.options;this.opos=[b.pageX,b.pageY],this.elementPos=a(this.element[0]).offset(),this.options.disabled||(this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),
// position helper (lasso)
this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,b.metaKey||b.ctrlKey||(c._removeClass(d.$element,"ui-selected"),d.selected=!1,c._addClass(d.$element,"ui-unselecting"),d.unselecting=!0,
// selectable UNSELECTING callback
c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().addBack().each(function(){var d,e=a.data(this,"selectable-item");if(e)
// selectable (UN)SELECTING callback
return d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass("ui-selected"),c._removeClass(e.$element,d?"ui-unselecting":"ui-selected")._addClass(e.$element,d?"ui-selecting":"ui-unselecting"),e.unselecting=!d,e.selecting=d,e.selected=d,d?c._trigger("selecting",b,{selecting:e.element}):c._trigger("unselecting",b,{unselecting:e.element}),!1}))},_mouseDrag:function(b){if(this.dragged=!0,!this.options.disabled){var c,d=this,e=this.options,f=this.opos[0],g=this.opos[1],h=b.pageX,i=b.pageY;return f>h&&(c=h,h=f,f=c),g>i&&(c=i,i=g,g=c),this.helper.css({left:f,top:g,width:h-f,height:i-g}),this.selectees.each(function(){var c=a.data(this,"selectable-item"),j=!1,k={};
//prevent helper from being selected if appendTo: selectable
c&&c.element!==d.element[0]&&(k.left=c.left+d.elementPos.left,k.right=c.right+d.elementPos.left,k.top=c.top+d.elementPos.top,k.bottom=c.bottom+d.elementPos.top,"touch"===e.tolerance?j=!(k.left>h||k.right<f||k.top>i||k.bottom<g):"fit"===e.tolerance&&(j=k.left>f&&k.right<h&&k.top>g&&k.bottom<i),j?(
// SELECT
c.selected&&(d._removeClass(c.$element,"ui-selected"),c.selected=!1),c.unselecting&&(d._removeClass(c.$element,"ui-unselecting"),c.unselecting=!1),c.selecting||(d._addClass(c.$element,"ui-selecting"),c.selecting=!0,
// selectable SELECTING callback
d._trigger("selecting",b,{selecting:c.element}))):(
// UNSELECT
c.selecting&&((b.metaKey||b.ctrlKey)&&c.startselected?(d._removeClass(c.$element,"ui-selecting"),c.selecting=!1,d._addClass(c.$element,"ui-selected"),c.selected=!0):(d._removeClass(c.$element,"ui-selecting"),c.selecting=!1,c.startselected&&(d._addClass(c.$element,"ui-unselecting"),c.unselecting=!0),
// selectable UNSELECTING callback
d._trigger("unselecting",b,{unselecting:c.element}))),c.selected&&(b.metaKey||b.ctrlKey||c.startselected||(d._removeClass(c.$element,"ui-selected"),c.selected=!1,d._addClass(c.$element,"ui-unselecting"),c.unselecting=!0,
// selectable UNSELECTING callback
d._trigger("unselecting",b,{unselecting:c.element})))))}),!1}},_mouseStop:function(b){var c=this;return this.dragged=!1,a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");c._removeClass(d.$element,"ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");c._removeClass(d.$element,"ui-selecting")._addClass(d.$element,"ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.widget("ui.selectmenu",[a.ui.formResetMixin,{version:"1.12.0",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,
// Callbacks
change:null,close:null,focus:null,open:null,select:null},_create:function(){var b=this.element.uniqueId().attr("id");this.ids={element:b,button:b+"-button",menu:b+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=a()},_drawButton:function(){var b,c=this,d=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
// Associate existing label with the new button
this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(a){this.button.focus(),a.preventDefault()}}),
// Hide original select element
this.element.hide(),
// Create button
this.button=a("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),b=a("<span>").appendTo(this.button),this._addClass(b,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(d).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){
// Delay rendering the menu items until the button receives focus.
// The menu may have already been rendered via a programmatic open.
c._rendered||c._refreshMenu()})},_drawMenu:function(){var b=this;
// Create menu
this.menu=a("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),
// Wrap menu
this.menuWrap=a("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),
// Initialize menu widget
this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(a,c){a.preventDefault(),
// Support: IE8
// If the item was selected via a click, the text selection
// will be destroyed in IE
b._setSelection(),b._select(c.item.data("ui-selectmenu-item"),a)},focus:function(a,c){var d=c.item.data("ui-selectmenu-item");
// Prevent inital focus from firing and check if its a newly focused item
null!=b.focusIndex&&d.index!==b.focusIndex&&(b._trigger("focus",a,{item:d}),b.isOpen||b._select(d,a)),b.focusIndex=d.index,b.button.attr("aria-activedescendant",b.menuItems.eq(d.index).attr("id"))}}).menu("instance"),
// Don't close the menu on mouseleave
this.menuInstance._off(this.menu,"mouseleave"),
// Cancel the menu's collapseAll on document click
this.menuInstance._closeOnDocumentClick=function(){return!1},
// Selects often contain empty items, but never contain dividers
this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(
// Fall back to an empty object in case there are no options
this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var a,b=this.element.find("option");this.menu.empty(),this._parseOptions(b),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,b.length&&(a=this._getSelectedItem(),
// Update the menu to have the correct item focused
this.menuInstance.focus(null,a),this._setAria(a.data("ui-selectmenu-item")),
// Set disabled state
this._setOption("disabled",this.element.prop("disabled")))},open:function(a){this.options.disabled||(
// If this is the first time the menu is being opened, render the items
this._rendered?(
// Menu clears focus on close, reset focus to selected item
this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),
// If there are no options, don't open the menu
this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",a)))},_position:function(){this.menuWrap.position(a.extend({of:this.button},this.options.position))},close:function(a){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",a))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(b){var c=a("<span>");return this._setText(c,b.label),this._addClass(c,"ui-selectmenu-text"),c},_renderMenu:function(b,c){var d=this,e="";a.each(c,function(c,f){var g;f.optgroup!==e&&(g=a("<li>",{text:f.optgroup}),d._addClass(g,"ui-selectmenu-optgroup","ui-menu-divider"+(f.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),g.appendTo(b),e=f.optgroup),d._renderItemData(b,f)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-selectmenu-item",b)},_renderItem:function(b,c){var d=a("<li>"),e=a("<div>",{title:c.element.attr("title")});return c.disabled&&this._addClass(d,null,"ui-state-disabled"),this._setText(e,c.label),d.append(e).appendTo(b)},_setText:function(a,b){b?a.text(b):a.html("&#160;")},_move:function(a,b){var c,d,e=".ui-menu-item";this.isOpen?c=this.menuItems.eq(this.focusIndex).parent("li"):(c=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),e+=":not(.ui-state-disabled)"),d="first"===a||"last"===a?c["first"===a?"prevAll":"nextAll"](e).eq(-1):c[a+"All"](e).eq(0),d.length&&this.menuInstance.focus(b,d)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(a){this[this.isOpen?"close":"open"](a)},_setSelection:function(){var a;this.range&&(window.getSelection?(a=window.getSelection(),a.removeAllRanges(),a.addRange(this.range)):this.range.select(),
// Support: IE
// Setting the text selection kills the button focus in IE, but
// restoring the focus doesn't kill the selection.
this.button.focus())},_documentClick:{mousedown:function(b){this.isOpen&&(a(b.target).closest(".ui-selectmenu-menu, #"+a.ui.escapeSelector(this.ids.button)).length||this.close(b))}},_buttonEvents:{
// Prevent text selection from being reset when interacting with the selectmenu (#10144)
mousedown:function(){var a;window.getSelection?(a=window.getSelection(),a.rangeCount&&(this.range=a.getRangeAt(0))):this.range=document.selection.createRange()},click:function(a){this._setSelection(),this._toggle(a)},keydown:function(b){var c=!0;switch(b.keyCode){case a.ui.keyCode.TAB:case a.ui.keyCode.ESCAPE:this.close(b),c=!1;break;case a.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(b);break;case a.ui.keyCode.UP:b.altKey?this._toggle(b):this._move("prev",b);break;case a.ui.keyCode.DOWN:b.altKey?this._toggle(b):this._move("next",b);break;case a.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(b):this._toggle(b);break;case a.ui.keyCode.LEFT:this._move("prev",b);break;case a.ui.keyCode.RIGHT:this._move("next",b);break;case a.ui.keyCode.HOME:case a.ui.keyCode.PAGE_UP:this._move("first",b);break;case a.ui.keyCode.END:case a.ui.keyCode.PAGE_DOWN:this._move("last",b);break;default:this.menu.trigger(b),c=!1}c&&b.preventDefault()}},_selectFocusedItem:function(a){var b=this.menuItems.eq(this.focusIndex).parent("li");b.hasClass("ui-state-disabled")||this._select(b.data("ui-selectmenu-item"),a)},_select:function(a,b){var c=this.element[0].selectedIndex;
// Change native select element
this.element[0].selectedIndex=a.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(a)),this._setAria(a),this._trigger("select",b,{item:a}),a.index!==c&&this._trigger("change",b,{item:a}),this.close(b)},_setAria:function(a){var b=this.menuItems.eq(a.index).attr("id");this.button.attr({"aria-labelledby":b,"aria-activedescendant":b}),this.menu.attr("aria-activedescendant",b)},_setOption:function(a,b){if("icons"===a){var c=this.button.find("span.ui-icon");this._removeClass(c,null,this.options.icons.button)._addClass(c,null,b.button)}this._super(a,b),"appendTo"===a&&this.menuWrap.appendTo(this._appendTo()),"width"===a&&this._resizeButton()},_setOptionDisabled:function(a){this._super(a),this.menuInstance.option("disabled",a),this.button.attr("aria-disabled",a),this._toggleClass(this.button,null,"ui-state-disabled",a),this.element.prop("disabled",a),a?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b&&b[0]||(b=this.element.closest(".ui-front, dialog")),b.length||(b=this.document[0].body),b},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),
// We can't use two _toggleClass() calls here, because we need to make sure
// we always remove classes first and add them second, otherwise if both classes have the
// same theme class, it will be removed after we add it.
this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var a=this.options.width;
// For `width: false`, just remove inline style and stop
// For `width: false`, just remove inline style and stop
// For `width: null`, match the width of the original element
return a===!1?void this.button.css("width",""):(null===a&&(a=this.element.show().outerWidth(),this.element.hide()),void this.button.outerWidth(a))},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),
// Support: IE10
// IE10 wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping
this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var a=this._super();return a.disabled=this.element.prop("disabled"),a},_parseOptions:function(b){var c=this,d=[];b.each(function(b,e){d.push(c._parseOption(a(e),b))}),this.items=d},_parseOption:function(a,b){var c=a.parent("optgroup");return{element:a,index:b,value:a.val(),label:a.text(),optgroup:c.attr("label")||"",disabled:c.prop("disabled")||a.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),a.widget("ui.slider",a.ui.mouse,{version:"1.12.0",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all",
// Note: ui-widget-header isn't the most fittingly semantic framework class for this
// element, but worked best visually with a variety of themes
"ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,
// Callbacks
change:null,slide:null,start:null,stop:null},
// Number of pages in a slider
// (how many times can you page up/down to go through the whole range)
numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle"),f="<span tabindex='0'></span>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;b<c;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options;b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),
// Handle range switching from true to min/max
this.range.css({left:"",bottom:""})):(this.range=a("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==b.range&&"max"!==b.range||this._addClass(this.range,"ui-slider-range-"+b.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h!==!1&&(this._mouseSliding=!0,this._handleIndex=g,this._addClass(f,null,"ui-state-active"),f.trigger("focus"),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_uiHash:function(a,b,c){var d={handle:this.handles[a],handleIndex:a,value:void 0!==b?b:this.value()};return this._hasMultipleValues()&&(d.value=void 0!==b?b:this.values(a),d.values=c||this.values()),d},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(a,b){return this._trigger("start",a,this._uiHash(b))},_slide:function(a,b,c){var d,e,f=this.value(),g=this.values();this._hasMultipleValues()&&(e=this.values(b?0:1),f=this.values(b),2===this.options.values.length&&this.options.range===!0&&(c=0===b?Math.min(e,c):Math.max(e,c)),g[b]=c),c!==f&&(d=this._trigger("slide",a,this._uiHash(b,c,g)),
// A slide can be canceled by returning false from the slide callback
d!==!1&&(this._hasMultipleValues()?this.values(b,c):this.value(c)))},_stop:function(a,b){this._trigger("stop",a,this._uiHash(b))},_change:function(a,b){this._keySliding||this._mouseSliding||(
//store the last changed value index for reference when handles overlap
this._lastChangedValue=b,this._trigger("change",a,this._uiHash(b)))},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this._hasMultipleValues()?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),this._super(b,c),b){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(c),
// Reset positioning from previous orientation
this.handles.css("horizontal"===c?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":
// Start from the last handle to prevent unreachable handles (#9046)
for(this._animateOff=!0,this._refreshValue(),d=e-1;d>=0;d--)this._change(null,d);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(a){this._super(a),this._toggleClass(null,"ui-state-disabled",!!a)},
//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},
//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this._hasMultipleValues()){for(
// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},
// Returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;
// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_calculateNewMax:function(){var a=this.options.max,b=this._valueMin(),c=this.options.step,d=Math.round((a-b)/c)*c;a=d+b,a>this.options.max&&(
//If max is not divisible by step, rounding off may increase its value
a-=c),this.max=parseFloat(a.toFixed(this._precision()))},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(a){"vertical"===a&&this.range.css({width:"",left:""}),"horizontal"===a&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=!this._animateOff&&h.animate,k={};this._hasMultipleValues()?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:100-c+"%"},h.animate),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:100-c+"%"},h.animate))},_handleEvents:{keydown:function(b){var c,d,e,f,g=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(a(b.target),null,"ui-state-active"),c=this._start(b,g),c===!1))return}switch(f=this.options.step,d=e=this._hasMultipleValues()?this.values(g):this.value(),b.keyCode){case a.ui.keyCode.HOME:e=this._valueMin();break;case a.ui.keyCode.END:e=this._valueMax();break;case a.ui.keyCode.PAGE_UP:e=this._trimAlignValue(d+(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(d-(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(d===this._valueMax())return;e=this._trimAlignValue(d+f);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d===this._valueMin())return;e=this._trimAlignValue(d-f)}this._slide(b,g,e)},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),this._removeClass(a(b.target),null,"ui-state-active"))}}}),a.widget("ui.sortable",a.ui.mouse,{version:"1.12.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,
// Callbacks
activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&a<b+c},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),
//Get the items
this.refresh(),
//Let's determine the parent's offset
this.offset=this.element.offset(),
//Initialize mouse events for interaction
this._mouseInit(),this._setHandleClassName(),
//We're ready to go
this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){var b=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),a.each(this.items,function(){b._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(b,c){var d=null,e=!1,f=this;
//We have to refresh the items data once first
//Find out if the clicked node (or one of its parents) is a actual item in this.items
return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(b),a(b.target).parents().each(function(){if(a.data(this,f.widgetName+"-item")===f)return d=a(this),!1}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),!!d&&(!(this.options.handle&&!c&&(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),!e))&&(this.currentItem=d,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(b,c,d){var e,f,g=this.options;
//Post "activate" events to possible containers
if(this.currentContainer=this,
//We only need to call refreshPositions, because the refreshItems call has been moved to
// mouseCapture
this.refreshPositions(),
//Create and append the visible helper
this.helper=this._createHelper(b),
//Cache the helper size
this._cacheHelperProportions(),/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
this._cacheMargins(),
//Get the next scrolling parent
this.scrollParent=this.helper.scrollParent(),
//The element's absolute position on the page minus margins
this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{//Where the click happened, relative to the element
left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),
// This is a relative to absolute position minus the actual position calculation -
// only used for relative positioned helper
relative:this._getRelativeOffset()}),
// Only after we got the offset, we can change the helper's position to absolute
// TODO: Still need to figure out a way to make relative sorting possible
this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),
//Generate the original position
this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),
//Cache the former DOM position
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},
// If the helper is not the original, hide the original so it's not playing any role during
// the drag, won't cause anything bad this way
this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),
//Create the placeholder
this._createPlaceholder(),
//Set a containment if given in the options
g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(// cursor option
f=this.document.find("body"),
// Support: IE
this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(// opacity option
this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(// zIndex option
this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),
//Prepare scrolling
this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),
//Call callbacks
this._trigger("start",b,this._uiHash()),
//Recache the helper size
this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));
//Prepare possible droppables
// Execute the drag once - this causes the helper not to be visiblebefore getting its
// correct position
return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;
//Rearrange
for(
//Compute the helpers position
this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),
//Do scrolling
this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-this.document.scrollTop()<g.scrollSensitivity?h=this.document.scrollTop(this.document.scrollTop()-g.scrollSpeed):this.window.height()-(b.pageY-this.document.scrollTop())<g.scrollSensitivity&&(h=this.document.scrollTop(this.document.scrollTop()+g.scrollSpeed)),b.pageX-this.document.scrollLeft()<g.scrollSensitivity?h=this.document.scrollLeft(this.document.scrollLeft()-g.scrollSpeed):this.window.width()-(b.pageX-this.document.scrollLeft())<g.scrollSensitivity&&(h=this.document.scrollLeft(this.document.scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),
//Regenerate the absolute position used for position checks
this.positionAbs=this._convertPositionTo("absolute"),
//Set the helper position
this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(
//Cache variables and intersection, continue if no intersection
d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&!(e===this.currentItem[0]||this.placeholder[1===f?"next":"prev"]()[0]===e||a.contains(this.placeholder[0],e)||"semi-dynamic"===this.options.type&&a.contains(this.element[0],e))){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}
//Post events to containers
//Interconnect with droppables
//Call callbacks
return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(
//If we are using droppables, inform the manager about the drop
a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();
//Post deactivating events to containers
for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
// it unbinds ALL events from the original node!
return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},/* Be careful with the following core functions */
_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&d+j<i,m="y"===this.options.axis||b+k>f&&b+k<g,n=l&&m;// Right Half
// Left Half
// Bottom Half
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b,c,d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),e="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),f=d&&e;return!!f&&(b=this._getDragVerticalDirection(),c=this._getDragHorizontalDirection(),this.floating?"right"===c||"down"===b?2:1:b&&("down"===b?2:1))},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),d=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?"right"===e&&c||"left"===e&&!c:d&&("down"===d&&b||"up"===d&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){function c(){h.push(this)}var d,e,f,g,h=[],i=[],j=this._connectWith();if(j&&b)for(d=j.length-1;d>=0;d--)for(f=a(j[d],this.document[0]),e=f.length-1;e>=0;e--)g=a.data(f[e],this.widgetFullName),g&&g!==this&&!g.options.disabled&&i.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g]);for(i.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),d=i.length-1;d>=0;d--)i[d][0].each(c);return a(h)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();
//Shouldn't be run the first time through due to massive slow-down
if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c],this.document[0]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;d<j;d++)i=a(h[d]),
// Data for target checking (mouse manager)
i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){
// Determine whether items are being displayed horizontally
this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),
//This has to be redone because due to the item being moved out/into the offsetParent,
// the offsetParent's position will change
this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],
//We ignore calculating positions of all connected containers when we're not over them
d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]);return b._addClass(e,"ui-sortable-placeholder",c||b.currentItem[0].className)._removeClass(e,"ui-sortable-helper"),"tbody"===d?b._createTrPlaceholder(b.currentItem.find("tr").eq(0),a("<tr>",b.document[0]).appendTo(e)):"tr"===d?b._createTrPlaceholder(b.currentItem,e):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){
// 1. If a className is set as 'placeholder option, we don't force sizes -
// the class is responsible for that
// 2. The option 'forcePlaceholderSize can be enabled to force it even if a
// class name is specified
c&&!d.forcePlaceholderSize||(
//If the element doesn't have a actual height by itself (without styles coming
// from a stylesheet), it receives the inline height from the dragged item
e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),
//Create the placeholder
b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),
//Append it after the actual current item
b.currentItem.after(b.placeholder),
//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
d.placeholder.update(b,b.placeholder)},_createTrPlaceholder:function(b,c){var d=this;b.children().each(function(){a("<td>&#160;</td>",d.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(c)})},_contactContainers:function(b){var c,d,e,f,g,h,i,j,k,l,m=null,n=null;
// Get innermost container that intersects with item
for(c=this.containers.length-1;c>=0;c--)
// Never consider a container that's located within the item itself
if(!a.contains(this.currentItem[0],this.containers[c].element[0]))if(this._intersectsWith(this.containers[c].containerCache)){
// If we've already found a container and it's more "inner" than this, then continue
if(m&&a.contains(this.containers[c].element[0],m.element[0]))continue;m=this.containers[c],n=c}else
// container doesn't intersect. trigger "out" event if necessary
this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",b,this._uiHash(this)),this.containers[c].containerCache.over=0);
// If no intersecting containers found, return
if(m)
// Move the item into the container if it's not there already
if(1===this.containers.length)this.containers[n].containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1);else{for(
// When entering a new container, we will find the item with the least distance and
// append our item near it
e=1e4,f=null,k=m.floating||this._isFloating(this.currentItem),g=k?"left":"top",h=k?"width":"height",l=k?"pageX":"pageY",d=this.items.length-1;d>=0;d--)a.contains(this.containers[n].element[0],this.items[d].item[0])&&this.items[d].item[0]!==this.currentItem[0]&&(i=this.items[d].item.offset()[g],j=!1,b[l]-i>this.items[d][h]/2&&(j=!0),Math.abs(b[l]-i)<e&&(e=Math.abs(b[l]-i),f=this.items[d],this.direction=j?"up":"down"));
//Check if dropOnEmpty is enabled
if(!f&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[n])return void(this.currentContainer.containerCache.over||(this.containers[n]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1));f?this._rearrange(b,f,null,!0):this._rearrange(b,null,this.containers[n].element,!0),this._trigger("change",b,this._uiHash()),this.containers[n]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[n],
//Update the placeholder
this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[n]._trigger("over",b,this._uiHash(this)),this.containers[n].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;
//Add the helper to the DOM if that didn't happen already
return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),d[0].style.width&&!c.forceHelperSize||d.width(this.currentItem.width()),d[0].style.height&&!c.forceHelperSize||d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){
//Get the offsetParent and cache its position
this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();
// This is a special case where we need to modify a offset calculated on start, since the
// following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the
// next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
// the document, which means that the scroll is included in the initial calculation of the
// offset of the parent, and never recalculated upon drag
// This needs to be actually done for all browsers, since pageX/pageY includes this
// information with an ugly IE fix
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),"document"!==e.containment&&"window"!==e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===e.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===e.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:
// The absolute mouse position
c.top+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top*d+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:
// The absolute mouse position
c.left+
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left*d+
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);
// This is another very weird special case that only happens for relative elements:
// 1. If the css position is relative
// 2. and the scroll parent is the document or similar to the offset parent
// we have to refresh the relative offset during the scroll so there are no jumps
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
//If we are not dragging yet, we won't check for options
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:
// The absolute mouse position
g-
// Click offset (relative to the element)
this.offset.click.top-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.top-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:
// The absolute mouse position
f-
// Click offset (relative to the element)
this.offset.click.left-
// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.relative.left-
// The offsetParent's offset without borders (offset + border)
this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),
//Various things done here to improve the performance:
// 1. we create a setTimeout, that calls refreshPositions
// 2. on the instance, we have a counter variable, that get's higher after every append
// 3. on the local scope, we copy the counter variable, and check in the timeout,
// if it's still the same
// 4. this lets only the last addition to the timeout stack through
this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&
//Precompute after each DOM insertion, NOT on mousemove
this.refreshPositions(!d)})},_clear:function(a,b){
//Post events to containers
function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;
// We delay all events that have to be triggered to after the point where the placeholder
// has been removed and everything else normalized again
var d,e=[];if(
// We first have to update the dom position of the actual currentItem
// Note: don't do it if the current item is already removed (by a user), or it gets
// reappended (see #4088)
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)"auto"!==this._storedCSS[d]&&"static"!==this._storedCSS[d]||(this._storedCSS[d]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&e.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||
// Trigger update callback if the DOM position has changed
e.push(function(a){this._trigger("update",a,this._uiHash())}),
// Check if the items Container has Changed and trigger appropriate
// events.
this!==this.currentContainer&&(b||(e.push(function(a){this._trigger("remove",a,this._uiHash())}),e.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),e.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),d=this.containers.length-1;d>=0;d--)b||e.push(c("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(e.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);if(
//Do what was originally in plugins
this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",a,this._uiHash()),
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
// it unbinds ALL events from the original node!
this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(d=0;d<e.length;d++)
// Trigger all delayed events
e[d].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}});a.widget("ui.spinner",{version:"1.12.0",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){
// handle string values that need to be parsed
this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),
// Only format if there is a value, prevents the field from being marked
// as invalid in Firefox, see #9573.
""!==this.value()&&
// Format the value, but don't constrain.
this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),
// Turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var b=this._super(),c=this.element;return a.each(["min","max","step"],function(a,d){var e=c.attr(d);null!=e&&e.length&&(b[d]=e)}),b},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",a)))},mousewheel:function(a,b){if(b){if(!this.spinning&&!this._start(a))return!1;this._spin((b>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)},100),a.preventDefault()}},"mousedown .ui-spinner-button":function(b){function c(){var b=this.element[0]===a.ui.safeActiveElement(this.document[0]);b||(this.element.trigger("focus"),this.previous=d,
// support: IE
// IE sets focus asynchronously, so we need to check if focus
// moved off of the input because the user clicked on the button.
this._delay(function(){this.previous=d}))}var d;
// We never want the buttons to have focus; whenever the user is
// interacting with the spinner, the focus should be on the input.
// If the input is focused then this.previous is properly set from
// when the input first received focus. If the input is not focused
// then we need to set this.previous based on the value before spinning.
d=this.element[0]===a.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),
// Ensure focus is on (or stays on) the text field
b.preventDefault(),c.call(this),
// Support: IE
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
// and check (again) if focus moved off of the input.
this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,c.call(this)}),this._start(b)!==!1&&this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(b){
// button will add ui-state-active if mouse was down while mouseleave and kept down
if(a(b.currentTarget).hasClass("ui-state-active"))return this._start(b)!==!1&&void this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},
// TODO: do we really want to consider this a stop?
// shouldn't we just stop the repeater and wait until mouseup before
// we trigger the stop event?
"mouseleave .ui-spinner-button":"_stop"},
// Support mobile enhanced option and make backcompat more sane
_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),
// Button bindings
this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),
// TODO: Right now button does not support classes this is already updated in button PR
this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),
// IE 6 doesn't understand height: 50% for the buttons
// unless the wrapper has an explicit height
this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(b){var c=this.options,d=a.ui.keyCode;switch(b.keyCode){case d.UP:return this._repeat(null,1,b),!0;case d.DOWN:return this._repeat(null,-1,b),!0;case d.PAGE_UP:return this._repeat(null,c.page,b),!0;case d.PAGE_DOWN:return this._repeat(null,-c.page,b),!0}return!1},_start:function(a){return!(!this.spinning&&this._trigger("start",a)===!1)&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(a,b,c){a=a||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,c)},a),this._spin(b*this.options.step,c)},_spin:function(a,b){var c=this.value()||0;this.counter||(this.counter=1),c=this._adjustValue(c+a*this._increment(this.counter)),this.spinning&&this._trigger("spin",b,{value:c})===!1||(this._value(c),this.counter++)},_increment:function(b){var c=this.options.incremental;return c?a.isFunction(c)?c(b):Math.floor(b*b*b/5e4-b*b/500+17*b/200+1):1},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1},_adjustValue:function(a){var b,c,d=this.options;
// Clamp the value
// Make sure we're at a valid step
// - find out where we are relative to the base (min or 0)
// - round to the nearest step
// - rounding is based on 0, so adjust back to our base
// Fix precision from bad JS floating point math
// Clamp the value
return b=null!==d.min?d.min:0,c=a-b,c=Math.round(c/d.step)*d.step,a=b+c,a=parseFloat(a.toFixed(this._precision())),null!==d.max&&a>d.max?d.max:null!==d.min&&a<d.min?d.min:a},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))},_setOption:function(a,b){var c,d,e;return"culture"===a||"numberFormat"===a?(c=this._parse(this.element.val()),this.options[a]=b,void this.element.val(this._format(c))):("max"!==a&&"min"!==a&&"step"!==a||"string"==typeof b&&(b=this._parse(b)),"icons"===a&&(d=this.buttons.first().find(".ui-icon"),this._removeClass(d,null,this.options.icons.up),this._addClass(d,null,b.up),e=this.buttons.last().find(".ui-icon"),this._removeClass(e,null,this.options.icons.down),this._addClass(e,null,b.down)),void this._super(a,b))},_setOptionDisabled:function(a){this._super(a),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!a),this.element.prop("disabled",!!a),this.buttons.button(a?"disable":"enable")},_setOptions:h(function(a){this._super(a)}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,
// TODO: what should we do with values that can't be parsed?
"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var a=this.value();
// Null is invalid
// Null is invalid
return null!==a&&a===this._adjustValue(a)},
// Update the value without triggering change
_value:function(a,b){var c;""!==a&&(c=this._parse(a),null!==c&&(b||(c=this._adjustValue(c)),a=this._format(c))),this.element.val(a),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(a){this._stepUp(a)}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())},stepDown:h(function(a){this._stepDown(a)}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())},pageUp:h(function(a){this._stepUp((a||1)*this.options.page)}),pageDown:h(function(a){this._stepDown((a||1)*this.options.page)}),value:function(a){return arguments.length?void h(this._value).call(this,a):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),
// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
a.uiBackCompat!==!1&&
// Backcompat for spinner html extension points
a.widget("ui.spinner",a.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}});a.ui.spinner;/*!
 * jQuery UI Tabs 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css
a.widget("ui.tabs",{version:"1.12.0",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,
// Callbacks
activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;return function(b){var c,d;c=b.href.replace(a,""),d=location.href.replace(a,"");
// Decoding may throw an error if the URL isn't UTF-8 (#9518)
try{c=decodeURIComponent(c)}catch(e){}try{d=decodeURIComponent(d)}catch(e){}return b.hash.length>1&&c===d}}(),_create:function(){var b=this,c=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,c.collapsible),this._processTabs(),c.active=this._initialActive(),
// Take disabling tabs via class attribute from HTML
// into account and update option properly.
a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),
// Check for length avoids error when initializing empty list
this.options.active!==!1&&this.anchors.length?this.active=this._findActive(c.active):this.active=a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);
// check the fragment identifier in the URL
// Check for a tab marked active via a class
// No active tab, set to false
// Handle numbers: negative, out of range
// Don't allow collapsible: false and active: false
return null===b&&(d&&this.tabs.each(function(c,e){if(a(e).attr("aria-controls")===d)return b=c,!1}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==b&&b!==-1||(b=!!this.tabs.length&&0)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),b===-1&&(b=!c&&0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(a.ui.safeActiveElement(this.document[0])).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:
// Activate only, no collapsing
return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:
// Toggle (cancel delayed activation, allow collapsing)
// Determine if we should collapse or activate
return b.preventDefault(),clearTimeout(this.activating),void this._activate(d!==this.options.active&&d);default:return}
// Focus the appropriate tab, based on which key was pressed
b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),
// Navigating with control/command key will prevent automatic activation
b.ctrlKey||b.metaKey||(
// Update aria-selected immediately so that AT think the tab is already selected.
// Otherwise AT may confuse the user by stating that they need to activate the tab,
// but the tab will already be activated by the time the announcement finishes.
c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||
// Ctrl+up moves focus to the current tab
b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.trigger("focus"))},
// Alt+page up/down moves focus to the previous/next tab (and activates)
_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),b<0&&(b=e),b}for(var e=this.tabs.length-1;a.inArray(d(),this.options.disabled)!==-1;)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).trigger("focus"),a},_setOption:function(a,b){
// _activate() will handle invalid values and update this.options
// Setting collapsible: false while collapsed; open first panel
return"active"===a?void this._activate(b):(this._super(a,b),"collapsible"===a&&(this._toggleClass("ui-tabs-collapsible",null,b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");
// Get disabled tabs from class attribute from HTML
// this will get converted to a boolean if needed in _refresh()
b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),
// Was collapsed or no tabs
b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?
// all remaining tabs are disabled
this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):
// make sure active index is correct
b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),
// Make sure one tab is in the tab order
this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this,c=this.tabs,d=this.anchors,e=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),
// Prevent users from focusing disabled tabs via click
this.tablist.on("mousedown"+this.eventNamespace,"> li",function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=a(),this.anchors.each(function(c,d){var e,f,g,h=a(d).uniqueId().attr("id"),i=a(d).closest("li"),j=i.attr("aria-controls");
// Inline tab
b._isLocal(d)?(e=d.hash,g=e.substring(1),f=b.element.find(b._sanitizeSelector(e))):(
// If the tab doesn't already have aria-controls,
// generate an id by using a throw-away element
g=i.attr("aria-controls")||a({}).uniqueId()[0].id,e="#"+g,f=b.element.find(e),f.length||(f=b._createPanel(g),f.insertAfter(b.panels[c-1]||b.tablist)),f.attr("aria-live","polite")),f.length&&(b.panels=b.panels.add(f)),j&&i.data("ui-tabs-aria-controls",j),i.attr({"aria-controls":g,"aria-labelledby":h}),f.attr("aria-labelledby",h)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),
// Avoid memory leaks (#10056)
c&&(this._off(c.not(this.tabs)),this._off(d.not(this.anchors)),this._off(e.not(this.panels)))},
// Allow overriding how to find the list for rare usage scenarios (#7715)
_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(b){var c,d,e;
// Disable tabs
for(a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1),e=0;d=this.tabs[e];e++)c=a(d),b===!0||a.inArray(e,b)!==-1?(c.attr("aria-disabled","true"),this._addClass(c,null,"ui-state-disabled")):(c.removeAttr("aria-disabled"),this._removeClass(c,null,"ui-state-disabled"));this.options.disabled=b,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,b===!0)},_setupEvents:function(b){var c={};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),
// Always prevent the default action, even when disabled
this._on(!0,this.anchors,{click:function(a){a.preventDefault()}}),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||
// tab is already loading
f.hasClass("ui-tabs-loading")||
// can't switch durning an animation
this.running||
// click on active header, but not collapsible
g&&!c.collapsible||
// allow canceling activation
this._trigger("beforeActivate",b,k)===!1||(c.active=!h&&this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},
// Handles show/hide for selecting tabs
_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){f._addClass(c.newTab.closest("li"),"ui-tabs-active","ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,
// Start out by hiding, then showing, then completing
h.length&&this.options.hide?this._hide(h,this.options.hide,function(){f._removeClass(c.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),e()}):(this._removeClass(c.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),h.hide(),e()),h.attr("aria-hidden","true"),c.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),
// If we're switching tabs, remove the old tab from the tab order.
// If we're opening from collapsed state, remove the previous tab from the tab order.
// If we're collapsing, then keep the collapsing tab in the tab order.
g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr("aria-hidden","false"),c.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);
// Trying to activate the already active panel
d[0]!==this.active[0]&&(
// Trying to collapse, simulate a click on the current active header
d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(b){
// meta-function to give users option to provide a href string instead of a numerical index.
return"string"==typeof b&&(b=this.anchors.index(this.anchors.filter("[href$='"+a.ui.escapeSelector(b)+"']"))),b},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(b){var c=this.options.disabled;c!==!1&&(void 0===b?c=!1:(b=this._getIndex(b),c=a.isArray(c)?a.map(c,function(a){return a!==b?a:null}):a.map(this.tabs,function(a,c){return c!==b?c:null})),this._setOptionDisabled(c))},disable:function(b){var c=this.options.disabled;if(c!==!0){if(void 0===b)c=!0;else{if(b=this._getIndex(b),a.inArray(b,c)!==-1)return;c=a.isArray(c)?a.merge([b],c).sort():[b]}this._setOptionDisabled(c)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),f=e.find(".ui-tabs-anchor"),g=this._getPanelForTab(e),h={tab:e,panel:g},i=function(a,b){"abort"===b&&d.panels.stop(!1,!0),d._removeClass(e,"ui-tabs-loading"),g.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr};
// Not remote
this._isLocal(f[0])||(this.xhr=a.ajax(this._ajaxSettings(f,c,h)),
// Support: jQuery <1.8
// jQuery <1.8 returns false if the request is canceled in beforeSend,
// but as of 1.8, $.ajax() always returns a jqXHR object.
this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(e,"ui-tabs-loading"),g.attr("aria-busy","true"),this.xhr.done(function(a,b,e){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){g.html(a),d._trigger("load",c,h),i(e,b)},1)}).fail(function(a,b){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){i(a,b)},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}}),
// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
a.uiBackCompat!==!1&&
// Backcompat for ui-tab class (now ui-tabs-tab)
a.widget("ui.tabs",a.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}});a.ui.tabs;/*!
 * jQuery UI Tooltip 1.12.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Tooltip
//>>group: Widgets
//>>description: Shows additional information for any element on hover or focus.
//>>docs: http://api.jqueryui.com/tooltip/
//>>demos: http://jqueryui.com/tooltip/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tooltip.css
//>>css.theme: ../../themes/base/theme.css
a.widget("ui.tooltip",{version:"1.12.0",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){
// support: IE<9, Opera in jQuery <1.7
// .text() can't accept undefined, so coerce to a string
var b=a(this).attr("title")||"";
// Escape title, since we're going from an attribute to raw HTML
return a("<a>").text(b).html()},hide:!0,
// Disabled elements have inconsistent behavior across browsers (#8661)
items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,
// Callbacks
close:null,open:null},_addDescribedBy:function(b,c){var d=(b.attr("aria-describedby")||"").split(/\s+/);d.push(c),b.data("ui-tooltip-id",c).attr("aria-describedby",a.trim(d.join(" ")))},_removeDescribedBy:function(b){var c=b.data("ui-tooltip-id"),d=(b.attr("aria-describedby")||"").split(/\s+/),e=a.inArray(c,d);e!==-1&&d.splice(e,1),b.removeData("ui-tooltip-id"),d=a.trim(d.join(" ")),d?b.attr("aria-describedby",d):b.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),
// IDs of generated tooltips, needed for destroy
this.tooltips={},
// IDs of parent tooltips where we removed the title attribute
this.parents={},
// Append the aria-live region so tooltips announce correctly
this.liveRegion=a("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=a([])},_setOption:function(b,c){var d=this;this._super(b,c),"content"===b&&a.each(this.tooltips,function(a,b){d._updateContent(b.element)})},_setOptionDisabled:function(a){this[a?"_disable":"_enable"]()},_disable:function(){var b=this;
// Close open tooltips
a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d.element[0],b.close(e,!0)}),
// Remove title attributes to prevent native tooltips
this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var b=a(this);if(b.is("[title]"))return b.data("ui-tooltip-title",b.attr("title")).removeAttr("title")}))},_enable:function(){
// restore title attributes
this.disabledTitles.each(function(){var b=a(this);b.data("ui-tooltip-title")&&b.attr("title",b.data("ui-tooltip-title"))}),this.disabledTitles=a([])},open:function(b){var c=this,d=a(b?b.target:this.element).closest(this.options.items);
// No element to show a tooltip for or the tooltip is already open
d.length&&!d.data("ui-tooltip-id")&&(d.attr("title")&&d.data("ui-tooltip-title",d.attr("title")),d.data("ui-tooltip-open",!0),
// Kill parent tooltips, custom or native, for hover
b&&"mouseover"===b.type&&d.parents().each(function(){var b,d=a(this);d.data("ui-tooltip-open")&&(b=a.Event("blur"),b.target=b.currentTarget=this,c.close(b,!0)),d.attr("title")&&(d.uniqueId(),c.parents[this.id]={element:this,title:d.attr("title")},d.attr("title",""))}),this._registerCloseHandlers(b,d),this._updateContent(d,b))},_updateContent:function(a,b){var c,d=this.options.content,e=this,f=b?b.type:null;return"string"==typeof d||d.nodeType||d.jquery?this._open(b,a,d):(c=d.call(a[0],function(c){
// IE may instantly serve a cached response for ajax requests
// delay this call to _open so the other call to _open runs first
e._delay(function(){
// Ignore async response if tooltip was closed already
a.data("ui-tooltip-open")&&(
// JQuery creates a special event for focusin when it doesn't
// exist natively. To improve performance, the native event
// object is reused and the type is changed. Therefore, we can't
// rely on the type being correct after the event finished
// bubbling, so we set it back to the previous value. (#8740)
b&&(b.type=f),this._open(b,a,c))})}),void(c&&this._open(b,a,c)))},_open:function(b,c,d){function e(a){j.of=a,g.is(":hidden")||g.position(j)}var f,g,h,i,j=a.extend({},this.options.position);if(d){if(
// Content can be updated multiple times. If the tooltip already
// exists, then just update the content and bail.
f=this._find(c))return void f.tooltip.find(".ui-tooltip-content").html(d);
// If we have a title, clear it to prevent the native tooltip
// we have to check first to avoid defining a title if none exists
// (we don't want to cause an element to start matching [title])
//
// We use removeAttr only for key events, to allow IE to export the correct
// accessible attributes. For mouse events, set to empty string to avoid
// native tooltip showing up (happens only when removing inside mouseover).
c.is("[title]")&&(b&&"mouseover"===b.type?c.attr("title",""):c.removeAttr("title")),f=this._tooltip(c),g=f.tooltip,this._addDescribedBy(c,g.attr("id")),g.find(".ui-tooltip-content").html(d),
// Support: Voiceover on OS X, JAWS on IE <= 9
// JAWS announces deletions even when aria-relevant="additions"
// Voiceover will sometimes re-read the entire log region's contents from the beginning
this.liveRegion.children().hide(),i=a("<div>").html(g.find(".ui-tooltip-content").html()),i.removeAttr("name").find("[name]").removeAttr("name"),i.removeAttr("id").find("[id]").removeAttr("id"),i.appendTo(this.liveRegion),this.options.track&&b&&/^mouse/.test(b.type)?(this._on(this.document,{mousemove:e}),
// trigger once to override element-relative positioning
e(b)):g.position(a.extend({of:c},this.options.position)),g.hide(),this._show(g,this.options.show),
// Handle tracking tooltips that are shown with a delay (#8644). As soon
// as the tooltip is visible, position the tooltip using the most recent
// event.
// Adds the check to add the timers only when both delay and track options are set (#14682)
this.options.track&&this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){g.is(":visible")&&(e(j.of),clearInterval(h))},a.fx.interval)),this._trigger("open",b,{tooltip:g})}},_registerCloseHandlers:function(b,c){var d={keyup:function(b){if(b.keyCode===a.ui.keyCode.ESCAPE){var d=a.Event(b);d.currentTarget=c[0],this.close(d,!0)}}};
// Only bind remove handler for delegated targets. Non-delegated
// tooltips will handle this in destroy.
c[0]!==this.element[0]&&(d.remove=function(){this._removeTooltip(this._find(c).tooltip)}),b&&"mouseover"!==b.type||(d.mouseleave="close"),b&&"focusin"!==b.type||(d.focusout="close"),this._on(!0,c,d)},close:function(b){var c,d=this,e=a(b?b.currentTarget:this.element),f=this._find(e);
// The tooltip may already be closed
// The tooltip may already be closed
// Disabling closes the tooltip, so we need to track when we're closing
// to avoid an infinite loop in case the tooltip becomes disabled on close
// Clear the interval for delayed tracking tooltips
// Only set title if we had one before (see comment in _open())
// If the title attribute has changed since open(), don't restore
// Remove 'remove' binding only on delegated targets
// We set ui-tooltip-open immediately upon open (in open()), but only set the
// additional data once there's actually content to show (in _open()). So even if the
// tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
// the period between open() and _open().
return f?(c=f.tooltip,void(f.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&!e.attr("title")&&e.attr("title",e.data("ui-tooltip-title")),this._removeDescribedBy(e),f.hiding=!0,c.stop(!0),this._hide(c,this.options.hide,function(){d._removeTooltip(a(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),b&&"mouseleave"===b.type&&a.each(this.parents,function(b,c){a(c.element).attr("title",c.title),delete d.parents[b]}),f.closing=!0,this._trigger("close",b,{tooltip:c}),f.hiding||(f.closing=!1)))):void e.removeData("ui-tooltip-open")},_tooltip:function(b){var c=a("<div>").attr("role","tooltip"),d=a("<div>").appendTo(c),e=c.uniqueId().attr("id");return this._addClass(d,"ui-tooltip-content"),this._addClass(c,"ui-tooltip","ui-widget ui-widget-content"),c.appendTo(this._appendTo(b)),this.tooltips[e]={element:b,tooltip:c}},_find:function(a){var b=a.data("ui-tooltip-id");return b?this.tooltips[b]:null},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]},_appendTo:function(a){var b=a.closest(".ui-front, dialog");return b.length||(b=this.document[0].body),b},_destroy:function(){var b=this;
// Close open tooltips
a.each(this.tooltips,function(c,d){
// Delegate to close method to handle common cleanup
var e=a.Event("blur"),f=d.element;e.target=e.currentTarget=f[0],b.close(e,!0),
// Remove immediately; destroying an open tooltip doesn't use the
// hide animation
a("#"+c).remove(),
// Restore the title
f.data("ui-tooltip-title")&&(
// If the title attribute has changed since open(), don't restore
f.attr("title")||f.attr("title",f.data("ui-tooltip-title")),f.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),
// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
a.uiBackCompat!==!1&&
// Backcompat for tooltipClass option
a.widget("ui.tooltip",a.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var a=this._superApply(arguments);return this.options.tooltipClass&&a.tooltip.addClass(this.options.tooltipClass),a}});a.ui.tooltip}),/*! tether 1.3.3 */
function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b(require,exports,module):a.Tether=b()}(this,function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}
// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function e(a){var b=a.getBoundingClientRect(),c={};for(var d in b)c[d]=b[d];if(a.ownerDocument!==document){var f=a.ownerDocument.defaultView.frameElement;if(f){var g=e(f);c.top+=g.top,c.bottom+=g.top,c.left+=g.left,c.right+=g.left}}return c}function f(a){
// In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
// https://bugzilla.mozilla.org/show_bug.cgi?id=548397
var b=getComputedStyle(a)||{},c=b.position,d=[];if("fixed"===c)return[a];for(var e=a;(e=e.parentNode)&&e&&1===e.nodeType;){var f=void 0;try{f=getComputedStyle(e)}catch(g){}if("undefined"==typeof f||null===f)return d.push(e),d;var h=f,i=h.overflow,j=h.overflowX,k=h.overflowY;/(auto|scroll)/.test(i+k+j)&&("absolute"!==c||["relative","absolute","fixed"].indexOf(f.position)>=0)&&d.push(e)}
// If the node is within a frame, account for the parent window scroll
return d.push(a.ownerDocument.body),a.ownerDocument!==document&&d.push(a.ownerDocument.defaultView),d}function g(){z&&document.body.removeChild(z),z=null}function h(a){var b=void 0;a===document?(b=document,a=document.documentElement):b=a.ownerDocument;var c=b.documentElement,d=e(a),f=C();return d.top-=f.top,d.left-=f.left,"undefined"==typeof d.width&&(d.width=document.body.scrollWidth-d.left-d.right),"undefined"==typeof d.height&&(d.height=document.body.scrollHeight-d.top-d.bottom),d.top=d.top-c.clientTop,d.left=d.left-c.clientLeft,d.right=b.body.clientWidth-d.width-d.left,d.bottom=b.body.clientHeight-d.height-d.top,d}function i(a){return a.offsetParent||document.documentElement}function j(){var a=document.createElement("div");a.style.width="100%",a.style.height="200px";var b=document.createElement("div");k(b.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),b.appendChild(a),document.body.appendChild(b);var c=a.offsetWidth;b.style.overflow="scroll";var d=a.offsetWidth;c===d&&(d=b.clientWidth),document.body.removeChild(b);var e=c-d;return{width:e,height:e}}function k(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],b=[];return Array.prototype.push.apply(b,arguments),b.slice(1).forEach(function(b){if(b)for(var c in b)({}).hasOwnProperty.call(b,c)&&(a[c]=b[c])}),a}function l(a,b){if("undefined"!=typeof a.classList)b.split(" ").forEach(function(b){b.trim()&&a.classList.remove(b)});else{var c=new RegExp("(^| )"+b.split(" ").join("|")+"( |$)","gi"),d=o(a).replace(c," ");p(a,d)}}function m(a,b){if("undefined"!=typeof a.classList)b.split(" ").forEach(function(b){b.trim()&&a.classList.add(b)});else{l(a,b);var c=o(a)+(" "+b);p(a,c)}}function n(a,b){if("undefined"!=typeof a.classList)return a.classList.contains(b);var c=o(a);return new RegExp("(^| )"+b+"( |$)","gi").test(c)}function o(a){
// Can't use just SVGAnimatedString here since nodes within a Frame in IE have
// completely separately SVGAnimatedString base classes
// Can't use just SVGAnimatedString here since nodes within a Frame in IE have
// completely separately SVGAnimatedString base classes
return a.className instanceof a.ownerDocument.defaultView.SVGAnimatedString?a.className.baseVal:a.className}function p(a,b){a.setAttribute("class",b)}function q(a,b,c){
// Of the set of 'all' classes, we need the 'add' classes, and only the
// 'add' classes to be set.
c.forEach(function(c){b.indexOf(c)===-1&&n(a,c)&&l(a,c)}),b.forEach(function(b){n(a,b)||m(a,b)})}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function r(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function s(a,b){var c=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return a+c>=b&&b>=a-c}function t(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function u(){for(var a={top:0,left:0},b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return c.forEach(function(b){var c=b.top,d=b.left;"string"==typeof c&&(c=parseFloat(c,10)),"string"==typeof d&&(d=parseFloat(d,10)),a.top+=c,a.left+=d}),a}function v(a,b){return"string"==typeof a.left&&a.left.indexOf("%")!==-1&&(a.left=parseFloat(a.left,10)/100*b.width),"string"==typeof a.top&&a.top.indexOf("%")!==-1&&(a.top=parseFloat(a.top,10)/100*b.height),a}function w(a,b){return"scrollParent"===b?b=a.scrollParents[0]:"window"===b&&(b=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),b===document&&(b=b.documentElement),"undefined"!=typeof b.nodeType&&!function(){var a=b,c=h(b),d=c,e=getComputedStyle(b);
// Account any parent Frames scroll offset
if(b=[d.left,d.top,c.width+d.left,c.height+d.top],a.ownerDocument!==document){var f=a.ownerDocument.defaultView;b[0]+=f.pageXOffset,b[1]+=f.pageYOffset,b[2]+=f.pageXOffset,b[3]+=f.pageYOffset}W.forEach(function(a,c){a=a[0].toUpperCase()+a.substr(1),"Top"===a||"Left"===a?b[c]+=parseFloat(e["border"+a+"Width"]):b[c]-=parseFloat(e["border"+a+"Width"])})}(),b}var x=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),y=void 0;"undefined"==typeof y&&(y={modules:[]});var z=null,A=function(){var a=0;return function(){return++a}}(),B={},C=function(){
// getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
// jitter as the user scrolls that messes with our ability to detect if two positions
// are equivilant or not.  We place an element at the top left of the page that will
// get the same jitter, so we can cancel the two out.
var a=z;a||(a=document.createElement("div"),a.setAttribute("data-tether-id",A()),k(a.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(a),z=a);var b=a.getAttribute("data-tether-id");
// Clear the cache when this position call is done
return"undefined"==typeof B[b]&&(B[b]=e(a),E(function(){delete B[b]})),B[b]},D=[],E=function(a){D.push(a)},F=function(){for(var a=void 0;a=D.pop();)a()},G=function(){function a(){d(this,a)}return x(a,[{key:"on",value:function(a,b,c){var d=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[a]&&(this.bindings[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})}},{key:"once",value:function(a,b,c){this.on(a,b,c,!0)}},{key:"off",value:function(a,b){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[a])if("undefined"==typeof b)delete this.bindings[a];else for(var c=0;c<this.bindings[a].length;)this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):++c}},{key:"trigger",value:function(a){if("undefined"!=typeof this.bindings&&this.bindings[a]){for(var b=0,c=arguments.length,d=Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];for(;b<this.bindings[a].length;){var f=this.bindings[a][b],g=f.handler,h=f.ctx,i=f.once,j=h;"undefined"==typeof j&&(j=this),g.apply(j,d),i?this.bindings[a].splice(b,1):++b}}}}]),a}();y.Utils={getActualBoundingClientRect:e,getScrollParents:f,getBounds:h,getOffsetParent:i,extend:k,addClass:m,removeClass:l,hasClass:n,updateClasses:q,defer:E,flush:F,uniqueId:A,Evented:G,getScrollBarSize:j,removeUtilElements:g};var H=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),x=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),I=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}};if("undefined"==typeof y)throw new Error("You must include the utils.js file before tether.js");var J=y.Utils,f=J.getScrollParents,h=J.getBounds,i=J.getOffsetParent,k=J.extend,m=J.addClass,l=J.removeClass,q=J.updateClasses,E=J.defer,F=J.flush,j=J.getScrollBarSize,g=J.removeUtilElements,K=function(){if("undefined"==typeof document)return"";for(var a=document.createElement("div"),b=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],c=0;c<b.length;++c){var d=b[c];if(void 0!==a.style[d])return d}}(),L=[],M=function(){L.forEach(function(a){a.position(!1)}),F()};!function(){var a=null,b=null,c=null,d=function e(){
// We voluntarily throttle ourselves if we can't manage 60fps
// Just in case this is the last event, remember to position just once more
return"undefined"!=typeof b&&b>16?(b=Math.min(b-16,250),void(c=setTimeout(e,250))):void("undefined"!=typeof a&&t()-a<10||(null!=c&&(clearTimeout(c),c=null),a=t(),M(),b=t()-a))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(a){window.addEventListener(a,d)})}();var N={center:"center",left:"right",right:"left"},O={middle:"middle",top:"bottom",bottom:"top"},P={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},Q=function(a,b){var c=a.left,d=a.top;return"auto"===c&&(c=N[b.left]),"auto"===d&&(d=O[b.top]),{left:c,top:d}},R=function(a){var b=a.left,c=a.top;return"undefined"!=typeof P[a.left]&&(b=P[a.left]),"undefined"!=typeof P[a.top]&&(c=P[a.top]),{left:b,top:c}},S=function(a){var b=a.split(" "),c=H(b,2),d=c[0],e=c[1];return{top:d,left:e}},T=S,U=function(a){function b(a){var c=this;d(this,b),I(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.position=this.position.bind(this),L.push(this),this.history=[],this.setOptions(a,!1),y.modules.forEach(function(a){"undefined"!=typeof a.initialize&&a.initialize.call(c)}),this.position()}return r(b,a),x(b,[{key:"getClass",value:function(){var a=arguments.length<=0||void 0===arguments[0]?"":arguments[0],b=this.options.classes;return"undefined"!=typeof b&&b[a]?this.options.classes[a]:this.options.classPrefix?this.options.classPrefix+"-"+a:a}},{key:"setOptions",value:function(a){var b=this,c=arguments.length<=1||void 0===arguments[1]||arguments[1],d={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=k(d,a);var e=this.options,g=e.element,h=e.target,i=e.targetModifier;if(this.element=g,this.target=h,this.targetModifier=i,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(a){if("undefined"==typeof b[a])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof b[a].jquery?b[a]=b[a][0]:"string"==typeof b[a]&&(b[a]=document.querySelector(b[a]))}),m(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&m(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=T(this.options.targetAttachment),this.attachment=T(this.options.attachment),this.offset=S(this.options.offset),this.targetOffset=S(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=f(this.target),this.options.enabled!==!1&&this.enable(c)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return h(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var a=h(this.target),b={height:a.height,width:a.width,top:a.top,left:a.left};return b.height=Math.min(b.height,a.height-(pageYOffset-a.top)),b.height=Math.min(b.height,a.height-(a.top+a.height-(pageYOffset+innerHeight))),b.height=Math.min(innerHeight,b.height),b.height-=2,b.width=Math.min(b.width,a.width-(pageXOffset-a.left)),b.width=Math.min(b.width,a.width-(a.left+a.width-(pageXOffset+innerWidth))),b.width=Math.min(innerWidth,b.width),b.width-=2,b.top<pageYOffset&&(b.top=pageYOffset),b.left<pageXOffset&&(b.left=pageXOffset),b}if("scroll-handle"===this.targetModifier){var a=void 0,c=this.target;c===document.body?(c=document.documentElement,a={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):a=h(c);var d=getComputedStyle(c),e=c.scrollWidth>c.clientWidth||[d.overflow,d.overflowX].indexOf("scroll")>=0||this.target!==document.body,f=0;e&&(f=15);var g=a.height-parseFloat(d.borderTopWidth)-parseFloat(d.borderBottomWidth)-f,b={width:15,height:.975*g*(g/c.scrollHeight),left:a.left+a.width-parseFloat(d.borderLeftWidth)-15},i=0;g<408&&this.target===document.body&&(i=-11e-5*Math.pow(g,2)-.00727*g+22.58),this.target!==document.body&&(b.height=Math.max(b.height,24));var j=this.target.scrollTop/(c.scrollHeight-g);return b.top=j*(g-b.height-i)+a.top+parseFloat(d.borderTopWidth),this.target===document.body&&(b.height=Math.max(b.height,24)),b}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(a,b){
// More than one module will often need the same DOM info, so
// we keep a cache which is cleared on each position call
return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[a]&&(this._cache[a]=b.call(this)),this._cache[a]}},{key:"enable",value:function(){var a=this,b=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&m(this.target,this.getClass("enabled")),m(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(b){b!==a.target.ownerDocument&&b.addEventListener("scroll",a.position)}),b&&this.position()}},{key:"disable",value:function(){var a=this;l(this.target,this.getClass("enabled")),l(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(b){b.removeEventListener("scroll",a.position)})}},{key:"destroy",value:function(){var a=this;this.disable(),L.forEach(function(b,c){b===a&&L.splice(c,1)}),
// Remove any elements we were using for convenience from the DOM
0===L.length&&g()}},{key:"updateAttachClasses",value:function(a,b){var c=this;a=a||this.attachment,b=b||this.targetAttachment;var d=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&
// updateAttachClasses can be called more than once in a position call, so
// we need to clean up after ourselves such that when the last defer gets
// ran it doesn't add any extra classes from previous calls.
this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var e=this._addAttachClasses;a.top&&e.push(this.getClass("element-attached")+"-"+a.top),a.left&&e.push(this.getClass("element-attached")+"-"+a.left),b.top&&e.push(this.getClass("target-attached")+"-"+b.top),b.left&&e.push(this.getClass("target-attached")+"-"+b.left);var f=[];d.forEach(function(a){f.push(c.getClass("element-attached")+"-"+a),f.push(c.getClass("target-attached")+"-"+a)}),E(function(){"undefined"!=typeof c._addAttachClasses&&(q(c.element,c._addAttachClasses,f),c.options.addTargetClasses!==!1&&q(c.target,c._addAttachClasses,f),delete c._addAttachClasses)})}},{key:"position",value:function(){var a=this,b=arguments.length<=0||void 0===arguments[0]||arguments[0];
// flushChanges commits the changes immediately, leave true unless you are positioning multiple
// tethers (in which case call Tether.Utils.flush yourself when you're done)
if(this.enabled){this.clearCache();
// Turn 'auto' attachments into the appropriate corner or edge
var c=Q(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,c);var d=this.cache("element-bounds",function(){return h(a.element)}),e=d.width,f=d.height;if(0===e&&0===f&&"undefined"!=typeof this.lastSize){var g=this.lastSize;
// We cache the height and width to make it possible to position elements that are
// getting hidden.
e=g.width,f=g.height}else this.lastSize={width:e,height:f};var k=this.cache("target-bounds",function(){return a.getTargetBounds()}),l=k,m=v(R(this.attachment),{width:e,height:f}),n=v(R(c),l),o=v(this.offset,{width:e,height:f}),p=v(this.targetOffset,l);
// Add the manually provided offset
m=u(m,o),n=u(n,p);for(var q=k.left+n.left-m.left,r=k.top+n.top-m.top,s=0;s<y.modules.length;++s){var t=y.modules[s],w=t.position.call(this,{left:q,top:r,targetAttachment:c,targetPos:k,elementPos:d,offset:m,targetOffset:n,manualOffset:o,manualTargetOffset:p,scrollbarSize:B,attachment:this.attachment});if(w===!1)return!1;"undefined"!=typeof w&&"object"==typeof w&&(r=w.top,q=w.left)}
// We describe the position three different ways to give the optimizer
// a chance to decide the best possible way to position the element
// with the fewest repaints.
var x={
// It's position relative to the page (absolute positioning when
// the element is a child of the body)
page:{top:r,left:q},
// It's position relative to the viewport (fixed positioning)
viewport:{top:r-pageYOffset,bottom:pageYOffset-r-f+innerHeight,left:q-pageXOffset,right:pageXOffset-q-e+innerWidth}},z=this.target.ownerDocument,A=z.defaultView,B=void 0;
// Absolute positioning in the body will be relative to the page, not the 'initial containing block'
// We could also travel up the DOM and try each containing context, rather than only
// looking at the body, but we're gonna get diminishing returns.
return z.body.scrollWidth>A.innerWidth&&(B=this.cache("scrollbar-size",j),x.viewport.bottom-=B.height),z.body.scrollHeight>A.innerHeight&&(B=this.cache("scrollbar-size",j),x.viewport.right-=B.width),["","static"].indexOf(z.body.style.position)!==-1&&["","static"].indexOf(z.body.parentElement.style.position)!==-1||(x.page.bottom=z.body.scrollHeight-r-f,x.page.right=z.body.scrollWidth-q-e),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var b=a.cache("target-offsetparent",function(){return i(a.target)}),c=a.cache("target-offsetparent-bounds",function(){return h(b)}),d=getComputedStyle(b),e=c,f={};if(["Top","Left","Bottom","Right"].forEach(function(a){f[a.toLowerCase()]=parseFloat(d["border"+a+"Width"])}),c.right=z.body.scrollWidth-c.left-e.width+f.right,c.bottom=z.body.scrollHeight-c.top-e.height+f.bottom,x.page.top>=c.top+f.top&&x.page.bottom>=c.bottom&&x.page.left>=c.left+f.left&&x.page.right>=c.right){
// We're within the visible part of the target's scroll parent
var g=b.scrollTop,j=b.scrollLeft;
// It's position relative to the target's offset parent (absolute positioning when
// the element is moved to be a child of the target's offset parent).
x.offset={top:x.page.top-c.top+g-f.top,left:x.page.left-c.left+j-f.left}}}(),this.move(x),this.history.unshift(x),this.history.length>3&&this.history.pop(),b&&F(),!0}}},{key:"move",value:function(a){var b=this;if("undefined"!=typeof this.element.parentNode){var c={};for(var d in a){c[d]={};for(var e in a[d]){for(var f=!1,g=0;g<this.history.length;++g){var h=this.history[g];if("undefined"!=typeof h[d]&&!s(h[d][e],a[d][e])){f=!0;break}}f||(c[d][e]=!0)}}var j={top:"",left:"",right:"",bottom:""},l=function(a,c){var d="undefined"!=typeof b.options.optimizations,e=d?b.options.optimizations.gpu:null;if(e!==!1){var f=void 0,g=void 0;a.top?(j.top=0,f=c.top):(j.bottom=0,f=-c.bottom),a.left?(j.left=0,g=c.left):(j.right=0,g=-c.right),j[K]="translateX("+Math.round(g)+"px) translateY("+Math.round(f)+"px)","msTransform"!==K&&(
// The Z transform will keep this in the GPU (faster, and prevents artifacts),
// but IE9 doesn't support 3d transforms and will choke.
j[K]+=" translateZ(0)")}else a.top?j.top=c.top+"px":j.bottom=c.bottom+"px",a.left?j.left=c.left+"px":j.right=c.right+"px"},m=!1;if((c.page.top||c.page.bottom)&&(c.page.left||c.page.right)?(j.position="absolute",l(c.page,a.page)):(c.viewport.top||c.viewport.bottom)&&(c.viewport.left||c.viewport.right)?(j.position="fixed",l(c.viewport,a.viewport)):"undefined"!=typeof c.offset&&c.offset.top&&c.offset.left?!function(){j.position="absolute";var d=b.cache("target-offsetparent",function(){return i(b.target)});i(b.element)!==d&&E(function(){b.element.parentNode.removeChild(b.element),d.appendChild(b.element)}),l(c.offset,a.offset),m=!0}():(j.position="absolute",l({top:!0,left:!0},a.page)),!m){for(var n=!0,o=this.element.parentNode;o&&1===o.nodeType&&"BODY"!==o.tagName;){if("static"!==getComputedStyle(o).position){n=!1;break}o=o.parentNode}n||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}
// Any css change will trigger a repaint, so let's avoid one if nothing changed
var p={},q=!1;for(var e in j){var r=j[e],t=this.element.style[e];t!==r&&(q=!0,p[e]=r)}q&&E(function(){k(b.element.style,p)})}}}]),b}(G);U.modules=[],y.position=M;var V=k(U,y),H=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),J=y.Utils,h=J.getBounds,k=J.extend,q=J.updateClasses,E=J.defer,W=["left","top","right","bottom"];y.modules.push({position:function(a){var b=this,c=a.top,d=a.left,e=a.targetAttachment;if(!this.options.constraints)return!0;var f=this.cache("element-bounds",function(){return h(b.element)}),g=f.height,i=f.width;if(0===i&&0===g&&"undefined"!=typeof this.lastSize){var j=this.lastSize;
// Handle the item getting hidden as a result of our positioning without glitching
// the classes in and out
i=j.width,g=j.height}var l=this.cache("target-bounds",function(){return b.getTargetBounds()}),m=l.height,n=l.width,o=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(a){var b=a.outOfBoundsClass,c=a.pinnedClass;b&&o.push(b),c&&o.push(c)}),o.forEach(function(a){["left","top","right","bottom"].forEach(function(b){o.push(a+"-"+b)})});var p=[],r=k({},e),s=k({},this.attachment);return this.options.constraints.forEach(function(a){var f=a.to,h=a.attachment,j=a.pin;"undefined"==typeof h&&(h="");var k=void 0,l=void 0;if(h.indexOf(" ")>=0){var o=h.split(" "),q=H(o,2);l=q[0],k=q[1]}else k=l=h;var t=w(b,f);"target"!==l&&"both"!==l||(c<t[1]&&"top"===r.top&&(c+=m,r.top="bottom"),c+g>t[3]&&"bottom"===r.top&&(c-=m,r.top="top")),"together"===l&&("top"===r.top&&("bottom"===s.top&&c<t[1]?(c+=m,r.top="bottom",c+=g,s.top="top"):"top"===s.top&&c+g>t[3]&&c-(g-m)>=t[1]&&(c-=g-m,r.top="bottom",s.top="bottom")),"bottom"===r.top&&("top"===s.top&&c+g>t[3]?(c-=m,r.top="top",c-=g,s.top="bottom"):"bottom"===s.top&&c<t[1]&&c+(2*g-m)<=t[3]&&(c+=g-m,r.top="top",s.top="top")),"middle"===r.top&&(c+g>t[3]&&"top"===s.top?(c-=g,s.top="bottom"):c<t[1]&&"bottom"===s.top&&(c+=g,s.top="top"))),"target"!==k&&"both"!==k||(d<t[0]&&"left"===r.left&&(d+=n,r.left="right"),d+i>t[2]&&"right"===r.left&&(d-=n,r.left="left")),"together"===k&&(d<t[0]&&"left"===r.left?"right"===s.left?(d+=n,r.left="right",d+=i,s.left="left"):"left"===s.left&&(d+=n,r.left="right",d-=i,s.left="right"):d+i>t[2]&&"right"===r.left?"left"===s.left?(d-=n,r.left="left",d-=i,s.left="right"):"right"===s.left&&(d-=n,r.left="left",d+=i,s.left="left"):"center"===r.left&&(d+i>t[2]&&"left"===s.left?(d-=i,s.left="right"):d<t[0]&&"right"===s.left&&(d+=i,s.left="left"))),"element"!==l&&"both"!==l||(c<t[1]&&"bottom"===s.top&&(c+=g,s.top="top"),c+g>t[3]&&"top"===s.top&&(c-=g,s.top="bottom")),"element"!==k&&"both"!==k||(d<t[0]&&("right"===s.left?(d+=i,s.left="left"):"center"===s.left&&(d+=i/2,s.left="left")),d+i>t[2]&&("left"===s.left?(d-=i,s.left="right"):"center"===s.left&&(d-=i/2,s.left="right"))),"string"==typeof j?j=j.split(",").map(function(a){return a.trim()}):j===!0&&(j=["top","left","right","bottom"]),j=j||[];var u=[],v=[];c<t[1]&&(j.indexOf("top")>=0?(c=t[1],u.push("top")):v.push("top")),c+g>t[3]&&(j.indexOf("bottom")>=0?(c=t[3]-g,u.push("bottom")):v.push("bottom")),d<t[0]&&(j.indexOf("left")>=0?(d=t[0],u.push("left")):v.push("left")),d+i>t[2]&&(j.indexOf("right")>=0?(d=t[2]-i,u.push("right")):v.push("right")),u.length&&!function(){var a=void 0;a="undefined"!=typeof b.options.pinnedClass?b.options.pinnedClass:b.getClass("pinned"),p.push(a),u.forEach(function(b){p.push(a+"-"+b)})}(),v.length&&!function(){var a=void 0;a="undefined"!=typeof b.options.outOfBoundsClass?b.options.outOfBoundsClass:b.getClass("out-of-bounds"),p.push(a),v.forEach(function(b){p.push(a+"-"+b)})}(),(u.indexOf("left")>=0||u.indexOf("right")>=0)&&(s.left=r.left=!1),(u.indexOf("top")>=0||u.indexOf("bottom")>=0)&&(s.top=r.top=!1),r.top===e.top&&r.left===e.left&&s.top===b.attachment.top&&s.left===b.attachment.left||(b.updateAttachClasses(s,r),b.trigger("update",{attachment:s,targetAttachment:r}))}),E(function(){b.options.addTargetClasses!==!1&&q(b.target,p,o),q(b.element,p,o)}),{top:c,left:d}}});var J=y.Utils,h=J.getBounds,q=J.updateClasses,E=J.defer;y.modules.push({position:function(a){var b=this,c=a.top,d=a.left,e=this.cache("element-bounds",function(){return h(b.element)}),f=e.height,g=e.width,i=this.getTargetBounds(),j=c+f,k=d+g,l=[];c<=i.bottom&&j>=i.top&&["left","right"].forEach(function(a){var b=i[a];b!==d&&b!==k||l.push(a)}),d<=i.right&&k>=i.left&&["top","bottom"].forEach(function(a){var b=i[a];b!==c&&b!==j||l.push(a)});var m=[],n=[],o=["left","top","right","bottom"];return m.push(this.getClass("abutted")),o.forEach(function(a){m.push(b.getClass("abutted")+"-"+a)}),l.length&&n.push(this.getClass("abutted")),l.forEach(function(a){n.push(b.getClass("abutted")+"-"+a)}),E(function(){b.options.addTargetClasses!==!1&&q(b.target,n,m),q(b.element,n,m)}),!0}});var H=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return y.modules.push({position:function(a){var b=a.top,c=a.left;if(this.options.shift){var d=this.options.shift;"function"==typeof this.options.shift&&(d=this.options.shift.call(this,{top:b,left:c}));var e=void 0,f=void 0;if("string"==typeof d){d=d.split(" "),d[1]=d[1]||d[0];var g=d,h=H(g,2);e=h[0],f=h[1],e=parseFloat(e,10),f=parseFloat(f,10)}else e=d.top,f=d.left;return b+=e,c+=f,{top:b,left:c}}}}),V}),/*!
 * Material Design for Bootstrap 4
 * Version: MDB FREE: 4.0.1
 *
 *
 * Copyright: Material Design for Bootstrap
 * http://mdbootstrap.com/
 *
 * Read the license: http://mdbootstrap.com/license/
 *
 *
 * Documentation: http://mdbootstrap.com/
 *
 * Getting started: http://mdbootstrap.com/getting-started/
 *
 * Tutorials: http://mdbootstrap.com/bootstrap-tutorial/
 *
 * Templates: http://mdbootstrap.com/templates/
 *
 * Support: http://mdbootstrap.com/forums/forum/support/
 *
 * Contact: office@mdbootstrap.com
 *
 * Atribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js , Hammer.js
 *
 */
/*

jquery-easing.js
global.js
velocity.js

chart.js
video-bg.js
wow.js
scrolling-nav.js
waves.js
forms-basic.js

*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){
//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
// Required for Meteor package, the use of window prevents export by Meteor
function(a){a.Package?Materialize={}:a.Materialize={}}(window),
// Unique ID
Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){if("fixed"===$(this).css("position"))return d=!0,!1}),d};
// Velocity has conflicts when loaded with jQuery, this will check for it
var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):!(!p.isArray(a)||4!==a.length)&&i.apply(null,a),c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f!==!0&&b[2].queue!==f&&(s!==d||b[2].queue!==!1)||void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){
p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))})})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)})),/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
function(){"use strict";
//Declare root variable - window in the browser, global on the server
var a=this,b=a.Chart,c=function(a){this.canvas=a.canvas,this.ctx=a;
//Variables global to the chart
var b=function(a,b){return a["offset"+b]?a["offset"+b]:document.defaultView.getComputedStyle(a).getPropertyValue(b)},c=this.width=b(a.canvas,"Width")||a.canvas.width,e=this.height=b(a.canvas,"Height")||a.canvas.height;
//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
return c=this.width=a.canvas.width,e=this.height=a.canvas.height,this.aspectRatio=this.width/this.height,d.retinaScale(this),this};
//Globally expose the defaults to allow for user updating/changing
c.defaults={global:{
// Boolean - Whether to animate the chart
animation:!0,
// Number - Number of animation steps
animationSteps:60,
// String - Animation easing effect
animationEasing:"easeOutQuart",
// Boolean - If we should show the scale at all
showScale:!0,
// Boolean - If we want to override with a hard coded scale
scaleOverride:!1,
// ** Required if scaleOverride is true **
// Number - The number of steps in a hard coded scale
scaleSteps:null,
// Number - The value jump in the hard coded scale
scaleStepWidth:null,
// Number - The scale starting value
scaleStartValue:null,
// String - Colour of the scale line
scaleLineColor:"rgba(0,0,0,.1)",
// Number - Pixel width of the scale line
scaleLineWidth:1,
// Boolean - Whether to show labels on the scale
scaleShowLabels:!0,
// Interpolated JS string - can access value
scaleLabel:"<%=value%>",
// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
scaleIntegersOnly:!0,
// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
scaleBeginAtZero:!1,
// String - Scale label font declaration for the scale label
scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
// Number - Scale label font size in pixels
scaleFontSize:12,
// String - Scale label font weight style
scaleFontStyle:"normal",
// String - Scale label font colour
scaleFontColor:"#666",
// Boolean - whether or not the chart should be responsive and resize when the browser does.
responsive:!1,
// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
maintainAspectRatio:!0,
// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
showTooltips:!0,
// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
customTooltips:!1,
// Array - Array of string names to attach tooltip events
tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],
// String - Tooltip background colour
tooltipFillColor:"rgba(0,0,0,0.8)",
// String - Tooltip label font declaration for the scale label
tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
// Number - Tooltip label font size in pixels
tooltipFontSize:14,
// String - Tooltip font weight style
tooltipFontStyle:"normal",
// String - Tooltip label font colour
tooltipFontColor:"#fff",
// String - Tooltip title font declaration for the scale label
tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
// Number - Tooltip title font size in pixels
tooltipTitleFontSize:14,
// String - Tooltip title font weight style
tooltipTitleFontStyle:"bold",
// String - Tooltip title font colour
tooltipTitleFontColor:"#fff",
// String - Tooltip title template
tooltipTitleTemplate:"<%= label%>",
// Number - pixel width of padding around tooltip text
tooltipYPadding:6,
// Number - pixel width of padding around tooltip text
tooltipXPadding:6,
// Number - Size of the caret on the tooltip
tooltipCaretSize:8,
// Number - Pixel radius of the tooltip border
tooltipCornerRadius:6,
// Number - Pixel offset from point x to tooltip edge
tooltipXOffset:10,
// String - Template string for single tooltips
tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",
// String - Template string for single tooltips
multiTooltipTemplate:"<%= value %>",
// String - Colour behind the legend colour block
multiTooltipKeyBackground:"#fff",
// Array - A list of colors to use as the defaults
segmentColorDefault:["#A6CEE3","#1F78B4","#B2DF8A","#33A02C","#FB9A99","#E31A1C","#FDBF6F","#FF7F00","#CAB2D6","#6A3D9A","#B4B482","#B15928"],
// Array - A list of highlight colors to use as the defaults
segmentHighlightColorDefaults:["#CEF6FF","#47A0DC","#DAFFB2","#5BC854","#FFC2C1","#FF4244","#FFE797","#FFA728","#F2DAFE","#9265C2","#DCDCAA","#D98150"],
// Function - Will fire on animation progression.
onAnimationProgress:function(){},
// Function - Will fire on animation completion.
onAnimationComplete:function(){}}},
//Create a dictionary of chart types, to allow for extension of existing types
c.types={};
//Global Chart helpers object for utility methods and classes
var d=c.helpers={},e=d.each=function(a,b,c){var d=Array.prototype.slice.call(arguments,3);
// Check to see if null or undefined firstly.
if(a)if(a.length===+a.length){var e;for(e=0;e<a.length;e++)b.apply(c,[a[e],e].concat(d))}else for(var f in a)b.apply(c,[a[f],f].concat(d))},f=d.clone=function(a){var b={};return e(a,function(c,d){a.hasOwnProperty(d)&&(b[d]=c)}),b},g=d.extend=function(a){return e(Array.prototype.slice.call(arguments,1),function(b){e(b,function(c,d){b.hasOwnProperty(d)&&(a[d]=c)})}),a},h=d.merge=function(a,b){
//Merge properties in left object over to a shallow clone of object right.
var c=Array.prototype.slice.call(arguments,0);return c.unshift({}),g.apply(null,c)},i=d.indexOf=function(a,b){if(Array.prototype.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},j=(d.where=function(a,b){var c=[];return d.each(a,function(a){b(a)&&c.push(a)}),c},d.findNextWhere=function(a,b,c){
// Default to start of the array
c||(c=-1);for(var d=c+1;d<a.length;d++){var e=a[d];if(b(e))return e}},d.findPreviousWhere=function(a,b,c){
// Default to end of the array
c||(c=a.length);for(var d=c-1;d>=0;d--){var e=a[d];if(b(e))return e}},d.inherits=function(a){
//Basic javascript inheritance based on the model created in Backbone.js
var b=this,c=a&&a.hasOwnProperty("constructor")?a.constructor:function(){return b.apply(this,arguments)},d=function(){this.constructor=c};return d.prototype=b.prototype,c.prototype=new d,c.extend=j,a&&g(c.prototype,a),c.__super__=b.prototype,c}),k=d.noop=function(){},l=d.uid=function(){var a=0;return function(){return"chart-"+a++}}(),m=d.warn=function(a){
//Method for warning of errors
window.console&&"function"==typeof window.console.warn&&console.warn(a)},n=d.amd="function"==typeof define&&define.amd,
//-- Math methods
o=d.isNumber=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},p=d.max=function(a){return Math.max.apply(Math,a)},q=d.min=function(a){return Math.min.apply(Math,a)},r=(d.cap=function(a,b,c){if(o(b)){if(a>b)return b}else if(o(c)&&a<c)return c;return a},d.getDecimalPlaces=function(a){if(a%1!==0&&o(a)){var b=a.toString();if(b.indexOf("e-")<0)
// no exponent, e.g. 0.01
return b.split(".")[1].length;if(b.indexOf(".")<0)
// no decimal point, e.g. 1e-9
return parseInt(b.split("e-")[1]);
// exponent and decimal point, e.g. 1.23e-9
var c=b.split(".")[1].split("e-");return c[0].length+parseInt(c[1])}return 0}),s=d.radians=function(a){return a*(Math.PI/180)},t=(d.getAngleFromPoint=function(a,b){var c=b.x-a.x,d=b.y-a.y,e=Math.sqrt(c*c+d*d),f=2*Math.PI+Math.atan2(d,c);
//If the segment is in the top left quadrant, we need to add another rotation to the angle
return c<0&&d<0&&(f+=2*Math.PI),{angle:f,distance:e}},d.aliasPixel=function(a){return a%2===0?0:.5}),u=(d.splineCurve=function(a,b,c,d){
//Props to Rob Spencer at scaled innovation for his post on splining between points
//http://scaledinnovation.com/analytics/splines/aboutSplines.html
var e=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)),f=Math.sqrt(Math.pow(c.x-b.x,2)+Math.pow(c.y-b.y,2)),g=d*e/(e+f),// scaling factor for triangle Ta
h=d*f/(e+f);return{inner:{x:b.x-g*(c.x-a.x),y:b.y-g*(c.y-a.y)},outer:{x:b.x+h*(c.x-a.x),y:b.y+h*(c.y-a.y)}}},d.calculateOrderOfMagnitude=function(a){return Math.floor(Math.log(a)/Math.LN10)}),/* jshint ignore:start */
// Blows up jshint errors based on the new Function constructor
//Templating methods
//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
v=(d.calculateScaleRange=function(a,b,c,d,f){
//Set a minimum step of two - a point at the top of the graph, and a point at the base
var g=2,h=Math.floor(b/(1.5*c)),i=g>=h,j=[];e(a,function(a){null==a||j.push(a)});var k=q(j),l=p(j);
// We need some degree of separation here to calculate the scales if all the values are the same
// Adding/minusing 0.5 will give us a range of 1.
l===k&&(l+=.5,
// So we don't end up with a graph with a negative start value if we've said always start from zero
k>=.5&&!d?k-=.5:
// Make up a whole number above the values
l+=.5);
//If we have more space on the graph we'll use it to give more definition to the data
for(var m=Math.abs(l-k),n=u(m),o=Math.ceil(l/(1*Math.pow(10,n)))*Math.pow(10,n),r=d?0:Math.floor(k/(1*Math.pow(10,n)))*Math.pow(10,n),s=o-r,t=Math.pow(10,n),v=Math.round(s/t);(v>h||2*v<h)&&!i;)if(v>h)t*=2,v=Math.round(s/t),
// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
v%1!==0&&(i=!0);else
//If user has declared ints only, and the step value isn't a decimal
if(f&&n>=0){
//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
if(t/2%1!==0)break;t/=2,v=Math.round(s/t)}else t/=2,v=Math.round(s/t);return i&&(v=g,t=s/v),{steps:v,stepValue:t,min:r,max:r+v*t}},d.template=function(a,b){function c(a,b){
// Figure out if we're getting a template, or if we need to
// load the template - and be sure to cache the result.
var c=/\W/.test(a)?
// Generate a reusable function that will serve as a template
// generator (and which will be cached).
new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+
// Convert the template into pure JavaScript
a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):d[a]=d[a];
// Provide some basic currying to the user
return b?c(b):c}
// If templateString is function rather than string-template - call the function for valuesObject
if(a instanceof Function)return a(b);var d={};return c(a,b)}),
//--Animation methods
//Easing functions adapted from Robert Penner's easing equations
//http://www.robertpenner.com/easing/
w=(d.generateLabels=function(a,b,c,d){var f=new Array(b);return a&&e(f,function(b,e){f[e]=v(a,{value:c+d*(e+1)})}),f},d.easingEffects={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*a*(a-2)},easeInOutQuad:function(a){return(a/=.5)<1?.5*a*a:-.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return(a/=.5)<1?.5*a*a*a:.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return(a/=.5)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0===a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1===a?1:1*(-Math.pow(2,-10*a/1)+1)},easeInOutExpo:function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return a>=1?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:1==(a/=1)?1:(c||(c=.3),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),-(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c)))},easeOutElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:1==(a/=1)?1:(c||(c=.3),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),d*Math.pow(2,-10*a)*Math.sin((1*a-b)*(2*Math.PI)/c)+1)},easeInOutElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:2==(a/=.5)?1:(c||(c=1*(.3*1.5)),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),a<1?-.5*(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c)):d*Math.pow(2,-10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c)*.5+1)},easeInBack:function(a){var b=1.70158;return 1*(a/=1)*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return 1*((a=a/1-1)*a*((b+1)*a+b)+1)},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?.5*(a*a*(((b*=1.525)+1)*a-b)):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},easeInBounce:function(a){return 1-w.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?1*(7.5625*a*a):a<2/2.75?1*(7.5625*(a-=1.5/2.75)*a+.75):a<2.5/2.75?1*(7.5625*(a-=2.25/2.75)*a+.9375):1*(7.5625*(a-=2.625/2.75)*a+.984375)},easeInOutBounce:function(a){return a<.5?.5*w.easeInBounce(2*a):.5*w.easeOutBounce(2*a-1)+.5}}),
//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
x=d.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return window.setTimeout(a,1e3/60)}}(),y=(d.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(a){return window.clearTimeout(a,1e3/60)}}(),d.animationLoop=function(a,b,c,d,e,f){var g=0,h=w[c]||w.linear,i=function(){g++;var c=g/b,j=h(c);a.call(f,j,c,g),d.call(f,j,c),g<b?f.animationFrame=x(i):e.apply(f)};x(i)},d.getRelativePosition=function(a){var b,c,d=a.originalEvent||a,e=a.currentTarget||a.srcElement,f=e.getBoundingClientRect();return d.touches?(b=d.touches[0].clientX-f.left,c=d.touches[0].clientY-f.top):(b=d.clientX-f.left,c=d.clientY-f.top),{x:b,y:c}},d.addEvent=function(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}),z=d.removeEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=k},A=(d.bindEvents=function(a,b,c){
// Create the events object if it's not already present
a.events||(a.events={}),e(b,function(b){a.events[b]=function(){c.apply(a,arguments)},y(a.chart.canvas,b,a.events[b])})},d.unbindEvents=function(a,b){e(b,function(b,c){z(a.chart.canvas,c,b)})}),B=d.getMaximumWidth=function(a){var b=a.parentNode,c=parseInt(D(b,"padding-left"))+parseInt(D(b,"padding-right"));
// TODO = check cross browser stuff with this.
return b.clientWidth-c},C=d.getMaximumHeight=function(a){var b=a.parentNode,c=parseInt(D(b,"padding-bottom"))+parseInt(D(b,"padding-top"));
// TODO = check cross browser stuff with this.
return b.clientHeight-c},D=d.getStyle=function(a,b){return a.currentStyle?a.currentStyle[b]:document.defaultView.getComputedStyle(a,null).getPropertyValue(b)},// legacy support
E=(d.getMaximumSize=d.getMaximumWidth,d.retinaScale=function(a){var b=a.ctx,c=a.canvas.width,d=a.canvas.height;window.devicePixelRatio&&(b.canvas.style.width=c+"px",b.canvas.style.height=d+"px",b.canvas.height=d*window.devicePixelRatio,b.canvas.width=c*window.devicePixelRatio,b.scale(window.devicePixelRatio,window.devicePixelRatio))}),
//-- Canvas methods
F=d.clear=function(a){a.ctx.clearRect(0,0,a.width,a.height)},G=d.fontString=function(a,b,c){return b+" "+a+"px "+c},H=d.longestText=function(a,b,c){a.font=b;var d=0;return e(c,function(b){var c=a.measureText(b).width;d=c>d?c:d}),d},I=d.drawRoundedRectangle=function(a,b,c,d,e,f){a.beginPath(),a.moveTo(b+f,c),a.lineTo(b+d-f,c),a.quadraticCurveTo(b+d,c,b+d,c+f),a.lineTo(b+d,c+e-f),a.quadraticCurveTo(b+d,c+e,b+d-f,c+e),a.lineTo(b+f,c+e),a.quadraticCurveTo(b,c+e,b,c+e-f),a.lineTo(b,c+f),a.quadraticCurveTo(b,c,b+f,c),a.closePath()};
//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
//Destroy method on the chart will remove the instance of the chart from this reference.
c.instances={},c.Type=function(a,b,d){this.options=b,this.chart=d,this.id=l(),
//Add the chart instance to the global namespace
c.instances[this.id]=this,
// Initialize is always called when a chart type is created
// By default it is a no op, but it should be extended
b.responsive&&this.resize(),this.initialize.call(this,a)},
//Core methods that'll be a part of every chart type
g(c.Type.prototype,{initialize:function(){return this},clear:function(){return F(this.chart),this},stop:function(){
// Stops any current animation loop occuring
return c.animationService.cancelAnimation(this),this},resize:function(a){this.stop();var b=this.chart.canvas,c=B(this.chart.canvas),d=this.options.maintainAspectRatio?c/this.chart.aspectRatio:C(this.chart.canvas);return b.width=this.chart.width=c,b.height=this.chart.height=d,E(this.chart),"function"==typeof a&&a.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:k,render:function(a){if(a&&this.reflow(),this.options.animation&&!a){var b=new c.Animation;b.numSteps=this.options.animationSteps,b.easing=this.options.animationEasing,
// render function
b.render=function(a,b){var c=d.easingEffects[b.easing],e=b.currentStep/b.numSteps,f=c(e);a.draw(f,e,b.currentStep)},
// user events
b.onAnimationProgress=this.options.onAnimationProgress,b.onAnimationComplete=this.options.onAnimationComplete,c.animationService.addAnimation(this,b)}else this.draw(),this.options.onAnimationComplete.call(this);return this},generateLegend:function(){return v(this.options.legendTemplate,this)},destroy:function(){this.clear(),A(this,this.events);var a=this.chart.canvas;
// Reset canvas height/width attributes starts a fresh with the canvas context
a.width=this.chart.width,a.height=this.chart.height,
// < IE9 doesn't support removeProperty
a.style.removeProperty?(a.style.removeProperty("width"),a.style.removeProperty("height")):(a.style.removeAttribute("width"),a.style.removeAttribute("height")),delete c.instances[this.id]},showTooltip:function(a,b){
// Only redraw the chart if we've actually changed what we're hovering on.
"undefined"==typeof this.activeElements&&(this.activeElements=[]);var f=function(a){var b=!1;return a.length!==this.activeElements.length?b=!0:(e(a,function(a,c){a!==this.activeElements[c]&&(b=!0)},this),b)}.call(this,a);if(f||b){if(this.activeElements=a,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),a.length>0)
// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
if(this.datasets&&this.datasets.length>1){for(var g,h,j=this.datasets.length-1;j>=0&&(g=this.datasets[j].points||this.datasets[j].bars||this.datasets[j].segments,h=i(g,a[0]),h===-1);j--);var k=[],l=[],m=function(a){
// Get all the points at that particular index
var b,c,e,f,g,i=[],j=[],m=[];return d.each(this.datasets,function(a){b=a.points||a.bars||a.segments,b[h]&&b[h].hasValue()&&i.push(b[h])}),d.each(i,function(a){j.push(a.x),m.push(a.y),
//Include any colour information about the element
k.push(d.template(this.options.multiTooltipTemplate,a)),l.push({fill:a._saved.fillColor||a.fillColor,stroke:a._saved.strokeColor||a.strokeColor})},this),g=q(m),e=p(m),f=q(j),c=p(j),{x:f>this.chart.width/2?f:c,y:(g+e)/2}}.call(this,h);new c.MultiTooltip({x:m.x,y:m.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:k,legendColors:l,legendColorBackground:this.options.multiTooltipKeyBackground,title:v(this.options.tooltipTitleTemplate,a[0]),chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else e(a,function(a){var b=a.tooltipPosition();new c.Tooltip({x:Math.round(b.x),y:Math.round(b.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:v(this.options.tooltipTemplate,a),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),c.Type.extend=function(a){var b=this,d=function(){return b.apply(this,arguments)};if(
//Copy the prototype object of the this class
d.prototype=f(b.prototype),
//Now overwrite some of the properties in the base class with the new extensions
g(d.prototype,a),d.extend=c.Type.extend,a.name||b.prototype.name){var e=a.name||b.prototype.name,i=c.defaults[b.prototype.name]?f(c.defaults[b.prototype.name]):{};c.defaults[e]=g(i,a.defaults),c.types[e]=d,
//Register this new chart type in the Chart prototype
c.prototype[e]=function(a,b){var f=h(c.defaults.global,c.defaults[e],b||{});return new d(a,f,this)}}else m("Name not provided for this chart, so it hasn't been registered");return b},c.Element=function(a){g(this,a),this.initialize.apply(this,arguments),this.save()},g(c.Element.prototype,{initialize:function(){},restore:function(a){return a?e(a,function(a){this[a]=this._saved[a]},this):g(this,this._saved),this},save:function(){return this._saved=f(this),delete this._saved._saved,this},update:function(a){return e(a,function(a,b){this._saved[b]=this[b],this[b]=a},this),this},transition:function(a,b){return e(a,function(a,c){this[c]=(a-this._saved[c])*b+this._saved[c]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return o(this.value)}}),c.Element.extend=j,c.Point=c.Element.extend({display:!0,inRange:function(a,b){var c=this.hitDetectionRadius+this.radius;return Math.pow(a-this.x,2)+Math.pow(b-this.y,2)<Math.pow(c,2)},draw:function(){if(this.display){var a=this.ctx;a.beginPath(),a.arc(this.x,this.y,this.radius,0,2*Math.PI),a.closePath(),a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.fillStyle=this.fillColor,a.fill(),a.stroke()}}}),c.Arc=c.Element.extend({inRange:function(a,b){var c=d.getAngleFromPoint(this,{x:a,y:b}),e=c.angle%(2*Math.PI),f=(2*Math.PI+this.startAngle)%(2*Math.PI),g=(2*Math.PI+this.endAngle)%(2*Math.PI)||360,h=g<f?e<=g||e>=f:e>=f&&e<=g,i=c.distance>=this.innerRadius&&c.distance<=this.outerRadius;return h&&i},tooltipPosition:function(){var a=this.startAngle+(this.endAngle-this.startAngle)/2,b=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(a)*b,y:this.y+Math.sin(a)*b}},draw:function(a){var b=this.ctx;b.beginPath(),b.arc(this.x,this.y,this.outerRadius<0?0:this.outerRadius,this.startAngle,this.endAngle),b.arc(this.x,this.y,this.innerRadius<0?0:this.innerRadius,this.endAngle,this.startAngle,!0),b.closePath(),b.strokeStyle=this.strokeColor,b.lineWidth=this.strokeWidth,b.fillStyle=this.fillColor,b.fill(),b.lineJoin="bevel",this.showStroke&&b.stroke()}}),c.Rectangle=c.Element.extend({draw:function(){var a=this.ctx,b=this.width/2,c=this.x-b,d=this.x+b,e=this.base-(this.base-this.y),f=this.strokeWidth/2;
// Canvas doesn't allow us to stroke inside the width so we can
// adjust the sizes to fit if we're setting a stroke on the line
this.showStroke&&(c+=f,d-=f,e+=f),a.beginPath(),a.fillStyle=this.fillColor,a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,
// It'd be nice to keep this class totally generic to any rectangle
// and simply specify which border to miss out.
a.moveTo(c,this.base),a.lineTo(c,e),a.lineTo(d,e),a.lineTo(d,this.base),a.fill(),this.showStroke&&a.stroke()},height:function(){return this.base-this.y},inRange:function(a,b){return a>=this.x-this.width/2&&a<=this.x+this.width/2&&b>=this.y&&b<=this.base}}),c.Animation=c.Element.extend({currentStep:null,// the current animation step
numSteps:60,// default number of steps
easing:"",// the easing to use for this animation
render:null,// render function used by the animation service
onAnimationProgress:null,// user specified callback to fire on each step of the animation 
onAnimationComplete:null}),c.Tooltip=c.Element.extend({draw:function(){var a=this.chart.ctx;a.font=G(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";
//Distance between the actual element.y position and the start of the tooltip caret
var b=this.caretPadding=2,c=a.measureText(this.text).width+2*this.xPadding,d=this.fontSize+2*this.yPadding,e=d+this.caretHeight+b;this.x+c/2>this.chart.width?this.xAlign="left":this.x-c/2<0&&(this.xAlign="right"),this.y-e<0&&(this.yAlign="below");var f=this.x-c/2,g=this.y-e;
// Custom Tooltips
if(a.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":
//Draw a caret above the x/y
a.beginPath(),a.moveTo(this.x,this.y-b),a.lineTo(this.x+this.caretHeight,this.y-(b+this.caretHeight)),a.lineTo(this.x-this.caretHeight,this.y-(b+this.caretHeight)),a.closePath(),a.fill();break;case"below":g=this.y+b+this.caretHeight,
//Draw a caret below the x/y
a.beginPath(),a.moveTo(this.x,this.y+b),a.lineTo(this.x+this.caretHeight,this.y+b+this.caretHeight),a.lineTo(this.x-this.caretHeight,this.y+b+this.caretHeight),a.closePath(),a.fill()}switch(this.xAlign){case"left":f=this.x-c+(this.cornerRadius+this.caretHeight);break;case"right":f=this.x-(this.cornerRadius+this.caretHeight)}I(a,f,g,c,d,this.cornerRadius),a.fill(),a.fillStyle=this.textColor,a.textAlign="center",a.textBaseline="middle",a.fillText(this.text,f+c/2,g+d/2)}}}),c.MultiTooltip=c.Element.extend({initialize:function(){this.font=G(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=G(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.titleHeight=this.title?1.5*this.titleFontSize:0,this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+this.titleHeight,this.ctx.font=this.titleFont;var a=this.ctx.measureText(this.title).width,
//Label has a legend square as well so account for this.
b=H(this.ctx,this.font,this.labels)+this.fontSize+3,c=p([b,a]);this.width=c+2*this.xPadding;var d=this.height/2;
//Check to ensure the height will fit on the canvas
this.y-d<0?this.y=d:this.y+d>this.chart.height&&(this.y=this.chart.height-d),
//Decide whether to align left or right based on position on canvas
this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(a){var b=this.y-this.height/2+this.yPadding,c=a-1;
//If the index is zero, we're getting the title
//If the index is zero, we're getting the title
return 0===a?b+this.titleHeight/3:b+(1.5*this.fontSize*c+this.fontSize/2)+this.titleHeight},draw:function(){
// Custom Tooltips
if(this.custom)this.custom(this);else{I(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var a=this.ctx;a.fillStyle=this.fillColor,a.fill(),a.closePath(),a.textAlign="left",a.textBaseline="middle",a.fillStyle=this.titleTextColor,a.font=this.titleFont,a.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),a.font=this.font,d.each(this.labels,function(b,c){a.fillStyle=this.textColor,a.fillText(b,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(c+1)),
//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
//Instead we'll make a white filled block to put the legendColour palette over.
a.fillStyle=this.legendColorBackground,a.fillRect(this.x+this.xPadding,this.getLineHeight(c+1)-this.fontSize/2,this.fontSize,this.fontSize),a.fillStyle=this.legendColors[c].fill,a.fillRect(this.x+this.xPadding,this.getLineHeight(c+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),c.Scale=c.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var a=r(this.stepValue),b=0;b<=this.steps;b++)this.yLabels.push(v(this.templateString,{value:(this.min+b*this.stepValue).toFixed(a)}));this.yLabelWidth=this.display&&this.showLabels?H(this.ctx,this.font,this.yLabels)+10:0},addXLabel:function(a){this.xLabels.push(a),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},
// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
fit:function(){
// First we need the width of the yLabels, assuming the xLabels aren't rotated
// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,// -5 to pad labels
// Apply padding settings to the start and end point.
this.startPoint+=this.padding,this.endPoint-=this.padding;
// Cache the starting endpoint, excluding the space for x labels
var a,b=this.endPoint,c=this.endPoint-this.startPoint;for(
// Build the current yLabels so we have an idea of what size they'll be to start
/*
			 *	This sets what is returned from calculateScaleRange as static properties of this class:
			 *
				this.steps;
				this.stepValue;
				this.min;
				this.max;
			 *
			 */
this.calculateYRange(c),
// With these properties set we can now build the array of yLabels
// and also the width of the largest yLabel
this.buildYLabels(),this.calculateXLabelRotation();c>this.endPoint-this.startPoint;)c=this.endPoint-this.startPoint,a=this.yLabelWidth,this.calculateYRange(c),this.buildYLabels(),
// Only go through the xLabel loop again if the yLabel width has changed
a<this.yLabelWidth&&(this.endPoint=b,this.calculateXLabelRotation())},calculateXLabelRotation:function(){
//Get the width of each grid by calculating the difference
//between x offsets between 0 and 1.
this.ctx.font=this.font;var a,b,c=this.ctx.measureText(this.xLabels[0]).width,d=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=d/2+3,this.xScalePaddingLeft=c/2>this.yLabelWidth?c/2:this.yLabelWidth,this.xLabelRotation=0,this.display){var e,f=H(this.ctx,this.font,this.xLabels);this.xLabelWidth=f;
//Max label rotate should be 90 - also act as a loop counter
for(
//Allow 3 pixels x2 padding either side for label readability
var g=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>g&&0===this.xLabelRotation||this.xLabelWidth>g&&this.xLabelRotation<=90&&this.xLabelRotation>0;)e=Math.cos(s(this.xLabelRotation)),a=e*c,b=e*d,
// We're right aligning the text now.
a+this.fontSize/2>this.yLabelWidth&&(this.xScalePaddingLeft=a+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=e*f;this.xLabelRotation>0&&(this.endPoint-=Math.sin(s(this.xLabelRotation))*f+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},
// Needs to be overidden in each Chart type
// Otherwise we need to pass all the data into the scale class
calculateYRange:k,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(a){var b=this.drawingArea()/(this.min-this.max);return this.endPoint-b*(a-this.min)},calculateX:function(a){var
// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
b=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),c=b/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),d=c*a+this.xScalePaddingLeft;return this.offsetGridLines&&(d+=c/2),Math.round(d)},update:function(a){d.extend(this,a),this.fit()},draw:function(){var a=this.ctx,b=(this.endPoint-this.startPoint)/this.steps,c=Math.round(this.xScalePaddingLeft);this.display&&(a.fillStyle=this.textColor,a.font=this.font,e(this.yLabels,function(e,f){var g=this.endPoint-b*f,h=Math.round(g),i=this.showHorizontalLines;a.textAlign="right",a.textBaseline="middle",this.showLabels&&a.fillText(e,c-10,g),
// This is X axis, so draw it
0!==f||i||(i=!0),i&&a.beginPath(),f>0?(
// This is a grid line in the centre, so drop that
a.lineWidth=this.gridLineWidth,a.strokeStyle=this.gridLineColor):(
// This is the first line on the scale
a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor),h+=d.aliasPixel(a.lineWidth),i&&(a.moveTo(c,h),a.lineTo(this.width,h),a.stroke(),a.closePath()),a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor,a.beginPath(),a.moveTo(c-5,h),a.lineTo(c,h),a.stroke(),a.closePath()},this),e(this.xLabels,function(b,c){var d=this.calculateX(c)+t(this.lineWidth),
// Check to see if line/bar here and decide where to place the line
e=this.calculateX(c-(this.offsetGridLines?.5:0))+t(this.lineWidth),f=this.xLabelRotation>0,g=this.showVerticalLines;
// This is Y axis, so draw it
0!==c||g||(g=!0),g&&a.beginPath(),c>0?(
// This is a grid line in the centre, so drop that
a.lineWidth=this.gridLineWidth,a.strokeStyle=this.gridLineColor):(
// This is the first line on the scale
a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor),g&&(a.moveTo(e,this.endPoint),a.lineTo(e,this.startPoint-3),a.stroke(),a.closePath()),a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor,
// Small lines at the bottom of the base grid line
a.beginPath(),a.moveTo(e,this.endPoint),a.lineTo(e,this.endPoint+5),a.stroke(),a.closePath(),a.save(),a.translate(d,f?this.endPoint+12:this.endPoint+8),a.rotate(s(this.xLabelRotation)*-1),a.font=this.font,a.textAlign=f?"right":"center",a.textBaseline=f?"middle":"top",a.fillText(b,0,0),a.restore()},this))}}),c.RadialScale=c.Element.extend({initialize:function(){this.size=q([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(a){
// Take into account half font size + the yPadding of the top value
var b=this.drawingArea/(this.max-this.min);return(a-this.min)*b},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var a=r(this.stepValue),b=0;b<=this.steps;b++)this.yLabels.push(v(this.templateString,{value:(this.min+b*this.stepValue).toFixed(a)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){/*
			 * Right, this is really confusing and there is a lot of maths going on here
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
			 *
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
			 *
			 * Solution:
			 *
			 * We assume the radius of the polygon is half the size of the canvas at first
			 * at each index we check if the text overlaps.
			 *
			 * Where it does, we store that angle and that index.
			 *
			 * After finding the largest index and angle we calculate how much we need to remove
			 * from the shape radius to move the point inwards by that x.
			 *
			 * We average the left and right distances to get the maximum shape radius that can fit in the box
			 * along with labels.
			 *
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
			 *
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
			 * and position it in the most space efficient manner
			 *
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
			 */
// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
var a,b,c,d,e,f,g,h,i,j,k,l,m=q([this.height/2-this.pointLabelFontSize-5,this.width/2]),n=this.width,p=0;for(this.ctx.font=G(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),b=0;b<this.valuesCount;b++)
// 5px to space the text slightly out - similar to what we do in the draw function.
a=this.getPointPosition(b,m),c=this.ctx.measureText(v(this.templateString,{value:this.labels[b]})).width+5,0===b||b===this.valuesCount/2?(
// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
// of the radar chart, so text will be aligned centrally, so we'll half it and compare
// w/left and right text sizes
d=c/2,a.x+d>n&&(n=a.x+d,e=b),a.x-d<p&&(p=a.x-d,g=b)):b<this.valuesCount/2?
// Less than half the values means we'll left align the text
a.x+c>n&&(n=a.x+c,e=b):b>this.valuesCount/2&&a.x-c<p&&(p=a.x-c,g=b);i=p,j=Math.ceil(n-this.width),f=this.getIndexAngle(e),h=this.getIndexAngle(g),k=j/Math.sin(f+Math.PI/2),l=i/Math.sin(h+Math.PI/2),
// Ensure we actually need to reduce the size of the chart
k=o(k)?k:0,l=o(l)?l:0,this.drawingArea=m-(l+k)/2,
//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
this.setCenterPoint(l,k)},setCenterPoint:function(a,b){var c=this.width-b-this.drawingArea,d=a+this.drawingArea;this.xCenter=(d+c)/2,
// Always vertically in the centre as the text height doesn't change
this.yCenter=this.height/2},getIndexAngle:function(a){var b=2*Math.PI/this.valuesCount;
// Start from the top instead of right, so remove a quarter of the circle
return a*b-Math.PI/2},getPointPosition:function(a,b){var c=this.getIndexAngle(a);return{x:Math.cos(c)*b+this.xCenter,y:Math.sin(c)*b+this.yCenter}},draw:function(){if(this.display){var a=this.ctx;if(e(this.yLabels,function(b,c){
// Don't draw a centre value
if(c>0){var d,e=c*(this.drawingArea/this.steps),f=this.yCenter-e;
// Draw circular lines around the scale
if(this.lineWidth>0)if(a.strokeStyle=this.lineColor,a.lineWidth=this.lineWidth,this.lineArc)a.beginPath(),a.arc(this.xCenter,this.yCenter,e,0,2*Math.PI),a.closePath(),a.stroke();else{a.beginPath();for(var g=0;g<this.valuesCount;g++)d=this.getPointPosition(g,this.calculateCenterOffset(this.min+c*this.stepValue)),0===g?a.moveTo(d.x,d.y):a.lineTo(d.x,d.y);a.closePath(),a.stroke()}if(this.showLabels){if(a.font=G(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=a.measureText(b).width;a.fillStyle=this.backdropColor,a.fillRect(this.xCenter-h/2-this.backdropPaddingX,f-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}a.textAlign="center",a.textBaseline="middle",a.fillStyle=this.fontColor,a.fillText(b,this.xCenter,f)}}},this),!this.lineArc){a.lineWidth=this.angleLineWidth,a.strokeStyle=this.angleLineColor;for(var b=this.valuesCount-1;b>=0;b--){var c=null,d=null;if(this.angleLineWidth>0&&(c=this.calculateCenterOffset(this.max),d=this.getPointPosition(b,c),a.beginPath(),a.moveTo(this.xCenter,this.yCenter),a.lineTo(d.x,d.y),a.stroke(),a.closePath()),this.backgroundColors&&this.backgroundColors.length==this.valuesCount){null==c&&(c=this.calculateCenterOffset(this.max)),null==d&&(d=this.getPointPosition(b,c));var f=this.getPointPosition(0===b?this.valuesCount-1:b-1,c),g=this.getPointPosition(b===this.valuesCount-1?0:b+1,c),h={x:(f.x+d.x)/2,y:(f.y+d.y)/2},i={x:(d.x+g.x)/2,y:(d.y+g.y)/2};a.beginPath(),a.moveTo(this.xCenter,this.yCenter),a.lineTo(h.x,h.y),a.lineTo(d.x,d.y),a.lineTo(i.x,i.y),a.fillStyle=this.backgroundColors[b],a.fill(),a.closePath()}
// Extra 3px out for some label spacing
var j=this.getPointPosition(b,this.calculateCenterOffset(this.max)+5);a.font=G(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),a.fillStyle=this.pointLabelFontColor;var k=this.labels.length,l=this.labels.length/2,m=l/2,n=b<m||b>k-m,o=b===m||b===k-m;0===b?a.textAlign="center":b===l?a.textAlign="center":b<l?a.textAlign="left":a.textAlign="right",
// Set the correct text baseline based on outer positioning
o?a.textBaseline="middle":n?a.textBaseline="bottom":a.textBaseline="top",a.fillText(this.labels[b],j.x,j.y)}}}}}),c.animationService={frameDuration:17,animations:[],dropFrames:0,addAnimation:function(a,b){for(var c=0;c<this.animations.length;++c)if(this.animations[c].chartInstance===a)
// replacing an in progress animation
return void(this.animations[c].animationObject=b);this.animations.push({chartInstance:a,animationObject:b}),
// If there are no animations queued, manually kickstart a digest, for lack of a better word
1==this.animations.length&&d.requestAnimFrame.call(window,this.digestWrapper)},
// Cancel the animation for a given chart instance
cancelAnimation:function(a){var b=d.findNextWhere(this.animations,function(b){return b.chartInstance===a});b&&this.animations.splice(b,1)},
// calls startDigest with the proper context
digestWrapper:function(){c.animationService.startDigest.call(c.animationService)},startDigest:function(){var a=Date.now(),b=0;this.dropFrames>1&&(b=Math.floor(this.dropFrames),this.dropFrames-=b);for(var c=0;c<this.animations.length;c++)null===this.animations[c].animationObject.currentStep&&(this.animations[c].animationObject.currentStep=0),this.animations[c].animationObject.currentStep+=1+b,this.animations[c].animationObject.currentStep>this.animations[c].animationObject.numSteps&&(this.animations[c].animationObject.currentStep=this.animations[c].animationObject.numSteps),this.animations[c].animationObject.render(this.animations[c].chartInstance,this.animations[c].animationObject),
// Check if executed the last frame.
this.animations[c].animationObject.currentStep==this.animations[c].animationObject.numSteps&&(
// Call onAnimationComplete
this.animations[c].animationObject.onAnimationComplete.call(this.animations[c].chartInstance),
// Remove the animation.
this.animations.splice(c,1),
// Keep the index in place to offset the splice
c--);var e=Date.now(),f=e-a-this.frameDuration,g=f/this.frameDuration;g>1&&(this.dropFrames+=g),
// Do we have more stuff to animate?
this.animations.length>0&&d.requestAnimFrame.call(window,this.digestWrapper)}},
// Attach global event to resize each chart instance when the browser resizes
d.addEvent(window,"resize",function(){
// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
var a;return function(){clearTimeout(a),a=setTimeout(function(){e(c.instances,function(a){
// If the responsive flag is set in the chart instance config
// Cascade the resize event down to the chart.
a.options.responsive&&a.resize(a.render,!0)})},50)}}()),n?define(function(){return c}):"object"==typeof module&&module.exports&&(module.exports=c),a.Chart=c,c.noConflict=function(){return a.Chart=b,c}}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers,d={
//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
scaleBeginAtZero:!0,
//Boolean - Whether grid lines are shown across the chart
scaleShowGridLines:!0,
//String - Colour of the grid lines
scaleGridLineColor:"rgba(0,0,0,.05)",
//Number - Width of the grid lines
scaleGridLineWidth:1,
//Boolean - Whether to show horizontal lines (except X axis)
scaleShowHorizontalLines:!0,
//Boolean - Whether to show vertical lines (except Y axis)
scaleShowVerticalLines:!0,
//Boolean - If there is a stroke on each bar
barShowStroke:!0,
//Number - Pixel width of the bar stroke
barStrokeWidth:2,
//Number - Spacing between each of the X value sets
barValueSpacing:5,
//Number - Spacing between data sets within X values
barDatasetSpacing:1,
//String - A legend template
legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'};b.Type.extend({name:"Bar",defaults:d,initialize:function(a){
//Expose options as a scope variable here so we can access it in the ScaleClass
var d=this.options;this.ScaleClass=b.Scale.extend({offsetGridLines:!0,calculateBarX:function(a,b,c){
//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
var e=this.calculateBaseWidth(),f=this.calculateX(c)-e/2,g=this.calculateBarWidth(a);return f+g*b+b*d.barDatasetSpacing+g/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*d.barValueSpacing},calculateBarWidth:function(a){
//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
var b=this.calculateBaseWidth()-(a-1)*d.barDatasetSpacing;return b/a}}),this.datasets=[],
//Set up tooltip events on the chart
this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getBarsAtEvent(a):[];this.eachBars(function(a){a.restore(["fillColor","strokeColor"])}),c.each(b,function(a){a.fillColor=a.highlightFill,a.strokeColor=a.highlightStroke}),this.showTooltip(b)}),
//Declare the extension of the default point, to cater for the options passed in to the constructor
this.BarClass=b.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),
//Iterate through each of the datasets, and build this into a property of the chart
c.each(a.datasets,function(b,d){var e={label:b.label||null,fillColor:b.fillColor,strokeColor:b.strokeColor,bars:[]};this.datasets.push(e),c.each(b.data,function(c,d){
//Add a new point for each piece of data, passing any required data to draw.
e.bars.push(new this.BarClass({value:c,label:a.labels[d],datasetLabel:b.label,strokeColor:b.strokeColor,fillColor:b.fillColor,highlightFill:b.highlightFill||b.fillColor,highlightStroke:b.highlightStroke||b.strokeColor}))},this)},this),this.buildScale(a.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(a,b,d){c.extend(a,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,d,b),y:this.scale.endPoint}),a.save()},this),this.render()},update:function(){this.scale.update(),
// Reset any highlight colours before updating.
c.each(this.activeElements,function(a){a.restore(["fillColor","strokeColor"])}),this.eachBars(function(a){a.save()}),this.render()},eachBars:function(a){c.each(this.datasets,function(b,d){c.each(b.bars,a,this,d)},this)},getBarsAtEvent:function(a){for(var b,d=[],e=c.getRelativePosition(a),f=function(a){d.push(a.bars[b])},g=0;g<this.datasets.length;g++)for(b=0;b<this.datasets[g].bars.length;b++)if(this.datasets[g].bars[b].inRange(e.x,e.y))return c.each(this.datasets,f),d;return d},buildScale:function(a){var b=this,d=function(){var a=[];return b.eachBars(function(b){a.push(b.value)}),a},e={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:a.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(a){var b=c.calculateScaleRange(d(),a,this.fontSize,this.beginAtZero,this.integersOnly);c.extend(this,b)},xLabels:a,font:c.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&c.extend(e,{calculateYRange:c.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(e)},addData:function(a,b){
//Map the values array for each of the datasets
c.each(a,function(a,c){
//Add a new point for each piece of data, passing any required data to draw.
this.datasets[c].bars.push(new this.BarClass({value:a,label:b,datasetLabel:this.datasets[c].label,x:this.scale.calculateBarX(this.datasets.length,c,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[c].strokeColor,fillColor:this.datasets[c].fillColor}))},this),this.scale.addXLabel(b),
//Then re-render the chart.
this.update()},removeData:function(){this.scale.removeXLabel(),
//Then re-render the chart.
c.each(this.datasets,function(a){a.bars.shift()},this),this.update()},reflow:function(){c.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var a=c.extend({height:this.chart.height,width:this.chart.width});this.scale.update(a)},draw:function(a){var b=a||1;this.clear();this.chart.ctx;this.scale.draw(b),
//Draw all the bars for each dataset
c.each(this.datasets,function(a,d){c.each(a.bars,function(a,c){a.hasValue()&&(a.base=this.scale.endPoint,
//Transition then draw
a.transition({x:this.scale.calculateBarX(this.datasets.length,d,c),y:this.scale.calculateY(a.value),width:this.scale.calculateBarWidth(this.datasets.length)},b).draw())},this)},this)}})}.call(this),function(){"use strict";var a=this,b=a.Chart,
//Cache a local reference to Chart.helpers
c=b.helpers,d={
//Boolean - Whether we should show a stroke on each segment
segmentShowStroke:!0,
//String - The colour of each segment stroke
segmentStrokeColor:"#fff",
//Number - The width of each segment stroke
segmentStrokeWidth:2,
//The percentage of the chart that we cut out of the middle.
percentageInnerCutout:50,
//Number - Amount of animation steps
animationSteps:100,
//String - Animation easing effect
animationEasing:"easeOutBounce",
//Boolean - Whether we animate the rotation of the Doughnut
animateRotate:!0,
//Boolean - Whether we animate scaling the Doughnut from the centre
animateScale:!1,
//String - A legend template
legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'};b.Type.extend({
//Passing in a name registers this chart in the Chart namespace
name:"Doughnut",
//Providing a defaults will also register the deafults in the chart namespace
defaults:d,
//Initialize is fired when the chart is initialized - Data is passed in as a parameter
//Config is automatically merged by the core of Chart.js, and is available at this.options
initialize:function(a){
//Declare segments as a static property to prevent inheriting across the Chart type prototype
this.segments=[],this.outerRadius=(c.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=b.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),
//Set up tooltip events on the chart
this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getSegmentsAtEvent(a):[];c.each(this.segments,function(a){a.restore(["fillColor"])}),c.each(b,function(a){a.fillColor=a.highlightColor}),this.showTooltip(b)}),this.calculateTotal(a),c.each(a,function(b,c){b.color||(b.color="hsl("+360*c/a.length+", 100%, 50%)"),this.addData(b,c,!0)},this),this.render()},getSegmentsAtEvent:function(a){var b=[],d=c.getRelativePosition(a);return c.each(this.segments,function(a){a.inRange(d.x,d.y)&&b.push(a)},this),b},addData:function(a,c,d){var e=void 0!==c?c:this.segments.length;"undefined"==typeof a.color&&(a.color=b.defaults.global.segmentColorDefault[e%b.defaults.global.segmentColorDefault.length],a.highlight=b.defaults.global.segmentHighlightColorDefaults[e%b.defaults.global.segmentHighlightColorDefaults.length]),this.segments.splice(e,0,new this.SegmentArc({value:a.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:a.color,highlightColor:a.highlight||a.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(a.value),label:a.label})),d||(this.reflow(),this.update())},calculateCircumference:function(a){return this.total>0?2*Math.PI*(a/this.total):0},calculateTotal:function(a){this.total=0,c.each(a,function(a){this.total+=Math.abs(a.value)},this)},update:function(){this.calculateTotal(this.segments),
// Reset any highlight colours before updating.
c.each(this.activeElements,function(a){a.restore(["fillColor"])}),c.each(this.segments,function(a){a.save()}),this.render()},removeData:function(a){var b=c.isNumber(a)?a:this.segments.length-1;this.segments.splice(b,1),this.reflow(),this.update()},reflow:function(){c.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(c.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,c.each(this.segments,function(a){a.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(a){var b=a?a:1;this.clear(),c.each(this.segments,function(a,c){a.transition({circumference:this.calculateCircumference(a.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},b),a.endAngle=a.startAngle+a.circumference,a.draw(),0===c&&(a.startAngle=1.5*Math.PI),
//Check to see if it's the last segment, if not get the next and update the start angle
c<this.segments.length-1&&(this.segments[c+1].startAngle=a.endAngle)},this)}}),b.types.Doughnut.extend({name:"Pie",defaults:c.merge(d,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers,d={
///Boolean - Whether grid lines are shown across the chart
scaleShowGridLines:!0,
//String - Colour of the grid lines
scaleGridLineColor:"rgba(0,0,0,.05)",
//Number - Width of the grid lines
scaleGridLineWidth:1,
//Boolean - Whether to show horizontal lines (except X axis)
scaleShowHorizontalLines:!0,
//Boolean - Whether to show vertical lines (except Y axis)
scaleShowVerticalLines:!0,
//Boolean - Whether the line is curved between points
bezierCurve:!0,
//Number - Tension of the bezier curve between points
bezierCurveTension:.4,
//Boolean - Whether to show a dot for each point
pointDot:!0,
//Number - Radius of each point dot in pixels
pointDotRadius:4,
//Number - Pixel width of point dot stroke
pointDotStrokeWidth:1,
//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
pointHitDetectionRadius:20,
//Boolean - Whether to show a stroke for datasets
datasetStroke:!0,
//Number - Pixel width of dataset stroke
datasetStrokeWidth:2,
//Boolean - Whether to fill the dataset with a colour
datasetFill:!0,
//String - A legend template
legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
//Boolean - Whether to horizontally center the label and point dot inside the grid
offsetGridLines:!1};b.Type.extend({name:"Line",defaults:d,initialize:function(a){
//Declare the extension of the default point, to cater for the options passed in to the constructor
this.PointClass=b.Point.extend({offsetGridLines:this.options.offsetGridLines,strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(a){return Math.pow(a-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],
//Set up tooltip events on the chart
this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getPointsAtEvent(a):[];this.eachPoints(function(a){a.restore(["fillColor","strokeColor"])}),c.each(b,function(a){a.fillColor=a.highlightFill,a.strokeColor=a.highlightStroke}),this.showTooltip(b)}),
//Iterate through each of the datasets, and build this into a property of the chart
c.each(a.datasets,function(b){var d={label:b.label||null,fillColor:b.fillColor,strokeColor:b.strokeColor,pointColor:b.pointColor,pointStrokeColor:b.pointStrokeColor,points:[]};this.datasets.push(d),c.each(b.data,function(c,e){
//Add a new point for each piece of data, passing any required data to draw.
d.points.push(new this.PointClass({value:c,label:a.labels[e],datasetLabel:b.label,strokeColor:b.pointStrokeColor,fillColor:b.pointColor,highlightFill:b.pointHighlightFill||b.pointColor,highlightStroke:b.pointHighlightStroke||b.pointStrokeColor}))},this),this.buildScale(a.labels),this.eachPoints(function(a,b){c.extend(a,{x:this.scale.calculateX(b),y:this.scale.endPoint}),a.save()},this)},this),this.render()},update:function(){this.scale.update(),
// Reset any highlight colours before updating.
c.each(this.activeElements,function(a){a.restore(["fillColor","strokeColor"])}),this.eachPoints(function(a){a.save()}),this.render()},eachPoints:function(a){c.each(this.datasets,function(b){c.each(b.points,a,this)},this)},getPointsAtEvent:function(a){var b=[],d=c.getRelativePosition(a);return c.each(this.datasets,function(a){c.each(a.points,function(a){a.inRange(d.x,d.y)&&b.push(a)})},this),b},buildScale:function(a){var d=this,e=function(){var a=[];return d.eachPoints(function(b){a.push(b.value)}),a},f={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,offsetGridLines:this.options.offsetGridLines,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:a.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(a){var b=c.calculateScaleRange(e(),a,this.fontSize,this.beginAtZero,this.integersOnly);c.extend(this,b)},xLabels:a,font:c.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&c.extend(f,{calculateYRange:c.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new b.Scale(f)},addData:function(a,b){
//Map the values array for each of the datasets
c.each(a,function(a,c){
//Add a new point for each piece of data, passing any required data to draw.
this.datasets[c].points.push(new this.PointClass({value:a,label:b,datasetLabel:this.datasets[c].label,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[c].pointStrokeColor,fillColor:this.datasets[c].pointColor}))},this),this.scale.addXLabel(b),
//Then re-render the chart.
this.update()},removeData:function(){this.scale.removeXLabel(),
//Then re-render the chart.
c.each(this.datasets,function(a){a.points.shift()},this),this.update()},reflow:function(){var a=c.extend({height:this.chart.height,width:this.chart.width});this.scale.update(a)},draw:function(a){var b=a||1;this.clear();var d=this.chart.ctx,e=function(a){return null!==a.value},f=function(a,b,d){return c.findNextWhere(b,e,d)||a},g=function(a,b,d){return c.findPreviousWhere(b,e,d)||a};this.scale&&(this.scale.draw(b),c.each(this.datasets,function(a){var h=c.where(a.points,e);
//Transition each point first so that the line and point drawing isn't out of sync
//We can use this extra loop to calculate the control points of this dataset also in this loop
c.each(a.points,function(a,c){a.hasValue()&&a.transition({y:this.scale.calculateY(a.value),x:this.scale.calculateX(c)},b)},this),
// Control points need to be calculated in a separate loop, because we need to know the current x/y of the point
// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
this.options.bezierCurve&&c.each(h,function(a,b){var d=b>0&&b<h.length-1?this.options.bezierCurveTension:0;a.controlPoints=c.splineCurve(g(a,h,b),a,f(a,h,b),d),
// Prevent the bezier going outside of the bounds of the graph
// Cap puter bezier handles to the upper/lower scale bounds
a.controlPoints.outer.y>this.scale.endPoint?a.controlPoints.outer.y=this.scale.endPoint:a.controlPoints.outer.y<this.scale.startPoint&&(a.controlPoints.outer.y=this.scale.startPoint),
// Cap inner bezier handles to the upper/lower scale bounds
a.controlPoints.inner.y>this.scale.endPoint?a.controlPoints.inner.y=this.scale.endPoint:a.controlPoints.inner.y<this.scale.startPoint&&(a.controlPoints.inner.y=this.scale.startPoint)},this),
//Draw the line between all the points
d.lineWidth=this.options.datasetStrokeWidth,d.strokeStyle=a.strokeColor,d.beginPath(),c.each(h,function(a,b){if(0===b)d.moveTo(a.x,a.y);else if(this.options.bezierCurve){var c=g(a,h,b);d.bezierCurveTo(c.controlPoints.outer.x,c.controlPoints.outer.y,a.controlPoints.inner.x,a.controlPoints.inner.y,a.x,a.y)}else d.lineTo(a.x,a.y)},this),this.options.datasetStroke&&d.stroke(),this.options.datasetFill&&h.length>0&&(
//Round off the line by going to the base of the chart, back to the start, then fill.
d.lineTo(h[h.length-1].x,this.scale.endPoint),d.lineTo(h[0].x,this.scale.endPoint),d.fillStyle=a.fillColor,d.closePath(),d.fill()),
//Now draw the points over the line
//A little inefficient double looping, but better than the line
//lagging behind the point positions
c.each(h,function(a){a.draw()})},this))}})}.call(this),function(){"use strict";var a=this,b=a.Chart,
//Cache a local reference to Chart.helpers
c=b.helpers,d={
//Boolean - Show a backdrop to the scale label
scaleShowLabelBackdrop:!0,
//String - The colour of the label backdrop
scaleBackdropColor:"rgba(255,255,255,0.75)",
// Boolean - Whether the scale should begin at zero
scaleBeginAtZero:!0,
//Number - The backdrop padding above & below the label in pixels
scaleBackdropPaddingY:2,
//Number - The backdrop padding to the side of the label in pixels
scaleBackdropPaddingX:2,
//Boolean - Show line for each value in the scale
scaleShowLine:!0,
//Boolean - Stroke a line around each segment in the chart
segmentShowStroke:!0,
//String - The colour of the stroke on each segment.
segmentStrokeColor:"#fff",
//Number - The width of the stroke value in pixels
segmentStrokeWidth:2,
//Number - Amount of animation steps
animationSteps:100,
//String - Animation easing effect.
animationEasing:"easeOutBounce",
//Boolean - Whether to animate the rotation of the chart
animateRotate:!0,
//Boolean - Whether to animate scaling the chart from the centre
animateScale:!1,
//String - A legend template
legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'};b.Type.extend({
//Passing in a name registers this chart in the Chart namespace
name:"PolarArea",
//Providing a defaults will also register the deafults in the chart namespace
defaults:d,
//Initialize is fired when the chart is initialized - Data is passed in as a parameter
//Config is automatically merged by the core of Chart.js, and is available at this.options
initialize:function(a){this.segments=[],
//Declare segment class as a chart instance specific class, so it can share props for this instance
this.SegmentArc=b.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new b.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:a.length}),this.updateScaleRange(a),this.scale.update(),c.each(a,function(a,b){this.addData(a,b,!0)},this),
//Set up tooltip events on the chart
this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getSegmentsAtEvent(a):[];c.each(this.segments,function(a){a.restore(["fillColor"])}),c.each(b,function(a){a.fillColor=a.highlightColor}),this.showTooltip(b)}),this.render()},getSegmentsAtEvent:function(a){var b=[],d=c.getRelativePosition(a);return c.each(this.segments,function(a){a.inRange(d.x,d.y)&&b.push(a)},this),b},addData:function(a,b,c){var d=b||this.segments.length;this.segments.splice(d,0,new this.SegmentArc({fillColor:a.color,highlightColor:a.highlight||a.color,label:a.label,value:a.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(a.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),c||(this.reflow(),this.update())},removeData:function(a){var b=c.isNumber(a)?a:this.segments.length-1;this.segments.splice(b,1),this.reflow(),this.update()},calculateTotal:function(a){this.total=0,c.each(a,function(a){this.total+=a.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(a){var b=[];c.each(a,function(a){b.push(a.value)});var d=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:c.calculateScaleRange(b,c.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);c.extend(this.scale,d,{size:c.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),c.each(this.segments,function(a){a.save()}),this.reflow(),this.render()},reflow:function(){c.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),c.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),c.each(this.segments,function(a){a.update({outerRadius:this.scale.calculateCenterOffset(a.value)})},this)},draw:function(a){var b=a||1;
//Clear & draw the canvas
this.clear(),c.each(this.segments,function(a,c){a.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(a.value)},b),a.endAngle=a.startAngle+a.circumference,
// If we've removed the first segment we need to set the first one to
// start at the top.
0===c&&(a.startAngle=1.5*Math.PI),
//Check to see if it's the last segment, if not get the next and update the start angle
c<this.segments.length-1&&(this.segments[c+1].startAngle=a.endAngle),a.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var a=this,b=a.Chart,c=b.helpers;b.Type.extend({name:"Radar",defaults:{
//Boolean - Whether to show lines for each scale point
scaleShowLine:!0,
//Boolean - Whether we show the angle lines out of the radar
angleShowLineOut:!0,
//Boolean - Whether to show labels on the scale
scaleShowLabels:!1,
// Boolean - Whether the scale should begin at zero
scaleBeginAtZero:!0,
//String - Colour of the angle line
angleLineColor:"rgba(0,0,0,.1)",
//Number - Pixel width of the angle line
angleLineWidth:1,
//String - Point label font declaration
pointLabelFontFamily:"'Arial'",
//String - Point label font weight
pointLabelFontStyle:"normal",
//Number - Point label font size in pixels
pointLabelFontSize:10,
//String - Point label font colour
pointLabelFontColor:"#666",
//Boolean - Whether to show a dot for each point
pointDot:!0,
//Number - Radius of each point dot in pixels
pointDotRadius:3,
//Number - Pixel width of point dot stroke
pointDotStrokeWidth:1,
//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
pointHitDetectionRadius:20,
//Boolean - Whether to show a stroke for datasets
datasetStroke:!0,
//Number - Pixel width of dataset stroke
datasetStrokeWidth:2,
//Boolean - Whether to fill the dataset with a colour
datasetFill:!0,
//String - A legend template
legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'},initialize:function(a){this.PointClass=b.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(a),
//Set up tooltip events on the chart
this.options.showTooltips&&c.bindEvents(this,this.options.tooltipEvents,function(a){var b="mouseout"!==a.type?this.getPointsAtEvent(a):[];this.eachPoints(function(a){a.restore(["fillColor","strokeColor"])}),c.each(b,function(a){a.fillColor=a.highlightFill,a.strokeColor=a.highlightStroke}),this.showTooltip(b)}),
//Iterate through each of the datasets, and build this into a property of the chart
c.each(a.datasets,function(b){var d={label:b.label||null,fillColor:b.fillColor,strokeColor:b.strokeColor,pointColor:b.pointColor,pointStrokeColor:b.pointStrokeColor,points:[]};this.datasets.push(d),c.each(b.data,function(c,e){
//Add a new point for each piece of data, passing any required data to draw.
var f;this.scale.animation||(f=this.scale.getPointPosition(e,this.scale.calculateCenterOffset(c))),d.points.push(new this.PointClass({value:c,label:a.labels[e],datasetLabel:b.label,x:this.options.animation?this.scale.xCenter:f.x,y:this.options.animation?this.scale.yCenter:f.y,strokeColor:b.pointStrokeColor,fillColor:b.pointColor,highlightFill:b.pointHighlightFill||b.pointColor,highlightStroke:b.pointHighlightStroke||b.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(a){c.each(this.datasets,function(b){c.each(b.points,a,this)},this)},getPointsAtEvent:function(a){var b=c.getRelativePosition(a),d=c.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},b),e=2*Math.PI/this.scale.valuesCount,f=Math.round((d.angle-1.5*Math.PI)/e),g=[];
// If we're at the top, make the pointIndex 0 to get the first of the array.
return(f>=this.scale.valuesCount||f<0)&&(f=0),d.distance<=this.scale.drawingArea&&c.each(this.datasets,function(a){g.push(a.points[f])}),g},buildScale:function(a){this.scale=new b.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backgroundColors:this.options.scaleBackgroundColors,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,
// Point labels at the edge of each line
pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:a.labels,valuesCount:a.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(a.datasets),this.scale.buildYLabels()},updateScaleRange:function(a){var b=function(){var b=[];return c.each(a,function(a){a.data?b=b.concat(a.data):c.each(a.points,function(a){b.push(a.value)})}),b}(),d=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:c.calculateScaleRange(b,c.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);c.extend(this.scale,d)},addData:function(a,b){
//Map the values array for each of the datasets
this.scale.valuesCount++,c.each(a,function(a,c){var d=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(a));this.datasets[c].points.push(new this.PointClass({value:a,label:b,datasetLabel:this.datasets[c].label,x:d.x,y:d.y,strokeColor:this.datasets[c].pointStrokeColor,fillColor:this.datasets[c].pointColor}))},this),this.scale.labels.push(b),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),c.each(this.datasets,function(a){a.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(a){a.save()}),this.reflow(),this.render()},reflow:function(){c.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:c.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(a){var b=a||1,d=this.chart.ctx;this.clear(),this.scale.draw(),c.each(this.datasets,function(a){
//Transition each point first so that the line and point drawing isn't out of sync
c.each(a.points,function(a,c){a.hasValue()&&a.transition(this.scale.getPointPosition(c,this.scale.calculateCenterOffset(a.value)),b)},this),
//Draw the line between all the points
d.lineWidth=this.options.datasetStrokeWidth,d.strokeStyle=a.strokeColor,d.beginPath(),c.each(a.points,function(a,b){0===b?d.moveTo(a.x,a.y):d.lineTo(a.x,a.y)},this),d.closePath(),d.stroke(),d.fillStyle=a.fillColor,this.options.datasetFill&&d.fill(),
//Now draw the points over the line
//A little inefficient double looping, but better than the line
//lagging behind the point positions
c.each(a.points,function(a){a.hasValue()&&a.draw()})},this)}})}.call(this),
// VIDEO BACKGROUND
$(document).ready(function(){scaleVideoContainer(),initBannerVideoSize(".video-container .poster img"),initBannerVideoSize(".video-container .filter"),initBannerVideoSize(".video-container video"),$(window).on("resize",function(){scaleVideoContainer(),scaleBannerVideoSize(".video-container .poster img"),scaleBannerVideoSize(".video-container .filter"),scaleBannerVideoSize(".video-container video")})}),//WOW SCRIPT - REVEAL ANIMATIONS WHEN SCROLLING
function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;d<e;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;e<f;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;a<c;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;a<c;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;c<d;c++)b=e[c],this.applyStyle(b,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;c<d;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;a<b;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0})},e.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},e.prototype.sync=function(b){if(a.notSupported)return this.doSync(this.element)},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;c<d;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;b<c;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;if(a.type.toLowerCase().indexOf("animationend")>=0)return b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;b<d;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;c<e;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;b<c;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,d<=e&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}.call(this),/* SCROLLING NAVBAR */
//jQuery to collapse the navbar on scroll
$(window).scroll(function(){$(".navbar").offset()&&($(".navbar").offset().top>50?$(".scrolling-navbar").addClass("top-nav-collapse"):$(".scrolling-navbar").removeClass("top-nav-collapse"))}),
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function(){$("a.page-scroll").bind("click",function(a){var b=$(this);$("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),function(a,b){"use strict";
// AMD. Register as an anonymous module.  Wrap in function so we have access
// to root via `this`.
"function"==typeof define&&define.amd?define([],function(){return b.apply(a)}):"object"==typeof exports?module.exports=b.call(a):a.Waves=b.call(a)}("object"==typeof global?global:this,function(){"use strict";
// Find exact position of element
function a(a){return null!==a&&a===a.window}function b(b){return a(b)?b:9===b.nodeType&&b.defaultView}function c(a){var b=typeof a;return"function"===b||"object"===b&&!!a}function d(a){return c(a)&&a.nodeType>0}function e(a){var b=m.call(a);return"[object String]"===b?l(a):c(a)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(b)&&a.hasOwnProperty("length")?a:d(a)?[a]:[]}function f(a){var c,d,e={top:0,left:0},f=a&&a.ownerDocument;return c=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=b(f),{top:e.top+d.pageYOffset-c.clientTop,left:e.left+d.pageXOffset-c.clientLeft}}function g(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}/**
     * Hide the effect and remove the ripple. Must be
     * a separate function to pass the JSLint...
     */
function h(a,b,c){
// Check if the ripple still exist
if(c){c.classList.remove("waves-rippling");var d=c.getAttribute("data-x"),e=c.getAttribute("data-y"),f=c.getAttribute("data-scale"),h=c.getAttribute("data-translate"),i=Date.now()-Number(c.getAttribute("data-hold")),j=350-i;j<0&&(j=0),"mousemove"===a.type&&(j=150);
// Fade out ripple after delay
var k="mousemove"===a.type?2500:o.duration;setTimeout(function(){var a={top:e+"px",left:d+"px",opacity:"0",
// Duration
"-webkit-transition-duration":k+"ms","-moz-transition-duration":k+"ms","-o-transition-duration":k+"ms","transition-duration":k+"ms","-webkit-transform":f+" "+h,"-moz-transform":f+" "+h,"-ms-transform":f+" "+h,"-o-transform":f+" "+h,transform:f+" "+h};c.setAttribute("style",g(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},k)},j)}}/**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
function i(a){if(q.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(c.classList.contains("waves-effect")&&!(c instanceof SVGElement)){b=c;break}c=c.parentElement}return b}/**
     * Bubble the click and show effect if .waves-effect elem was found
     */
function j(a){
// Disable effect if element has "disabled" property on it
// In some cases, the event is not triggered by the current element
// if (e.target.getAttribute('disabled') !== null) {
//     return;
// }
var b=i(a);if(null!==b){
// Make it sure the element has either disabled property, disabled attribute or 'disabled' class
if(b.disabled||b.getAttribute("disabled")||b.classList.contains("disabled"))return;if(q.registerEvent(a),"touchstart"===a.type&&o.delay){var c=!1,d=setTimeout(function(){d=null,o.show(a,b)},o.delay),e=function(e){
// if touch hasn't moved, and effect not yet started: start effect now
d&&(clearTimeout(d),d=null,o.show(a,b)),c||(c=!0,o.hide(e,b))},f=function(a){d&&(clearTimeout(d),d=null),e(a)};b.addEventListener("touchmove",f,!1),b.addEventListener("touchend",e,!1),b.addEventListener("touchcancel",e,!1)}else o.show(a,b),n&&(b.addEventListener("touchend",o.hide,!1),b.addEventListener("touchcancel",o.hide,!1)),b.addEventListener("mouseup",o.hide,!1),b.addEventListener("mouseleave",o.hide,!1)}}var k=k||{},l=document.querySelectorAll.bind(document),m=Object.prototype.toString,n="ontouchstart"in window,o={
// Effect duration
duration:750,
// Effect delay (check for scroll before showing effect)
delay:200,show:function(a,b,c){
// Disable right click
if(2===a.button)return!1;b=b||this;
// Create ripple
var d=document.createElement("div");d.className="waves-ripple waves-rippling",b.appendChild(d);
// Get click coordinate and element width
var e=f(b),h=0,i=0;
// Support for touch devices
"touches"in a&&a.touches.length?(h=a.touches[0].pageY-e.top,i=a.touches[0].pageX-e.left):(h=a.pageY-e.top,i=a.pageX-e.left),
// Support for synthetic events
i=i>=0?i:0,h=h>=0?h:0;var j="scale("+b.clientWidth/100*3+")",k="translate(0,0)";c&&(k="translate("+c.x+"px, "+c.y+"px)"),
// Attach data to element
d.setAttribute("data-hold",Date.now()),d.setAttribute("data-x",i),d.setAttribute("data-y",h),d.setAttribute("data-scale",j),d.setAttribute("data-translate",k);
// Set ripple position
var l={top:h+"px",left:i+"px"};d.classList.add("waves-notransition"),d.setAttribute("style",g(l)),d.classList.remove("waves-notransition"),
// Scale the ripple
l["-webkit-transform"]=j+" "+k,l["-moz-transform"]=j+" "+k,l["-ms-transform"]=j+" "+k,l["-o-transform"]=j+" "+k,l.transform=j+" "+k,l.opacity="1";var m="mousemove"===a.type?2500:o.duration;l["-webkit-transition-duration"]=m+"ms",l["-moz-transition-duration"]=m+"ms",l["-o-transition-duration"]=m+"ms",l["transition-duration"]=m+"ms",d.setAttribute("style",g(l))},hide:function(a,b){b=b||this;for(var c=b.getElementsByClassName("waves-rippling"),d=0,e=c.length;d<e;d++)h(a,b,c[d])}},p={
// Wrap <input> tag so it can perform the effect
input:function(a){var b=a.parentNode;
// If input already have parent just pass through
if("i"!==b.tagName.toLowerCase()||!b.classList.contains("waves-effect")){
// Put element class and style to the specified parent
var c=document.createElement("i");c.className=a.className+" waves-input-wrapper",a.className="waves-button-input",
// Put element as child
b.replaceChild(c,a),c.appendChild(a);
// Apply element color and background color to wrapper
var d=window.getComputedStyle(a,null),e=d.color,f=d.backgroundColor;c.setAttribute("style","color:"+e+";background:"+f),a.setAttribute("style","background-color:rgba(0,0,0,0);")}},
// Wrap <img> tag so it can perform the effect
img:function(a){var b=a.parentNode;
// If input already have parent just pass through
if("i"!==b.tagName.toLowerCase()||!b.classList.contains("waves-effect")){
// Put element as child
var c=document.createElement("i");b.replaceChild(c,a),c.appendChild(a)}}},q={/* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
touches:0,allowEvent:function(a){var b=!0;return/^(mousedown|mousemove)$/.test(a.type)&&q.touches&&(b=!1),b},registerEvent:function(a){var b=a.type;"touchstart"===b?q.touches+=1:/^(touchend|touchcancel)$/.test(b)&&setTimeout(function(){q.touches&&(q.touches-=1)},500)}};/**
     * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
     * waves classes to a set of elements. Set drag to true if the ripple mouseover
     * or skimming effect should be applied to the elements.
     */
/**
     * Cause a ripple to appear in an element via code.
     */
/**
     * Remove all ripples from an element.
     */
/**
     * Deprecated API fallback
     */
return k.init=function(a){var b=document.body;a=a||{},"duration"in a&&(o.duration=a.duration),"delay"in a&&(o.delay=a.delay),n&&(b.addEventListener("touchstart",j,!1),b.addEventListener("touchcancel",q.registerEvent,!1),b.addEventListener("touchend",q.registerEvent,!1)),b.addEventListener("mousedown",j,!1)},k.attach=function(a,b){a=e(a),"[object Array]"===m.call(b)&&(b=b.join(" ")),b=b?" "+b:"";for(var c,d,f=0,g=a.length;f<g;f++)c=a[f],d=c.tagName.toLowerCase(),["input","img"].indexOf(d)!==-1&&(p[d](c),c=c.parentElement),c.className.indexOf("waves-effect")===-1&&(c.className+=" waves-effect"+b)},k.ripple=function(a,b){a=e(a);var c=a.length;// default = centre of element
if(b=b||{},b.wait=b.wait||0,b.position=b.position||null,c)for(var d,g,h,i={},j=0,k={type:"mousedown",button:1},l=function(a,b){return function(){o.hide(a,b)}};j<c;j++)if(d=a[j],g=b.position||{x:d.clientWidth/2,y:d.clientHeight/2},h=f(d),i.x=h.left+g.x,i.y=h.top+g.y,k.pageX=i.x,k.pageY=i.y,o.show(k,d),b.wait>=0&&null!==b.wait){var m={type:"mouseup",button:1};setTimeout(l(m,d),b.wait)}},k.calm=function(a){a=e(a);for(var b={type:"mouseup",button:1},c=0,d=a.length;c<d;c++)o.hide(b,a[c])},k.displayEffect=function(a){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),k.init(a)},k}),
//Initialization
Waves.attach(".btn, .btn-floating",["waves-light"]),Waves.attach(".view .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a, .navbar form",["waves-light"]),Waves.attach(".navbar-brand",["waves-light"]),Waves.attach(".double-nav li",["waves-light"]),Waves.init(),/* FORMS */
function(a){a(document).ready(function(){function b(b){
// Set font properties of hiddenDiv
var c=b.css("font-family"),e=b.css("font-size");e&&d.css("font-size",e),c&&d.css("font-family",c),"off"===b.attr("wrap")&&d.css("overflow-wrap","normal").css("white-space","pre"),d.text(b.val()+"\n");var f=d.html().replace(/\n/g,"<br>");d.html(f),
// When textarea is hidden, width goes crazy.
// Approximate with half of window size
b.is(":visible")?d.css("width",b.width()):d.css("width",a(window).width()/2),b.css("height",d.height())}
// Function to update labels of text fields
Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label, i").addClass("active"):a(this).siblings("label, i").removeClass("active")})};
// Text based inputs
var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
// Handle HTML5 autofocus
a("input[autofocus]").siblings("label, i").addClass("active"),
// Add active if form auto complete
a(document).on("change",c,function(){0===a(this).val().length&&void 0===a(this).attr("placeholder")||a(this).siblings("label, i").addClass("active"),validate_field(a(this))}),
// Add active if input element has been pre-populated on document ready
a(document).ready(function(){Materialize.updateTextFields()}),
// HTML DOM FORM RESET handling
a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label, i").removeClass("active")}),
// Reset select
d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),
// Add active when element has focus
a(document).on("focus",c,function(){a(this).siblings("label, i").addClass("active")}),a(document).on("blur",c,function(){var b=a(this);0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&b.siblings("label, i").removeClass("active"),validate_field(b)}),validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(
// Check for character counter attributes
a.is(":valid")&&b&&d<c||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};
// Textarea Auto Resize
var d=a(".hiddendiv").first();d.length||(d=a('<div class="hiddendiv common"></div>'),a("body").append(d));var e=".materialize-textarea";a(e).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown",e,function(){b(a(this))})})}(jQuery),function(){}.call(this),function(a){"use strict";a("a.page-scroll").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top-50},1250,"easeInOutExpo"),b.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:50}),a(".navbar-collapse ul li a:not(.dropdown-toggle)").click(function(){a(".navbar-toggle:visible").click()}),a("#back-to-top").click(function(){return a(this).tooltip(),a("body,html").animate({scrollTop:0},800),!1}),a("#back-to-top").tooltip()}(jQuery);
// Finish Script.