/*
Created by : Fire360Boy
Email : Fire360Boy@gmail.com
Strat Script: *//*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module. 
define(["jquery"],a):
// Node/CommonJS 
a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */
/**
 * Private static constants
 */
var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",// As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(
// converts "mfpEventName" to "eventName" callback and triggers it if it's present
c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},
// Initialize Magnific Popup only when called at least once
A=function(){a.magnificPopup.instance||(/*jshint -W020 */
b=new t,b.init(),a.magnificPopup.instance=b)},
// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
B=function(){var a=document.createElement("p").style,// 's' for style. better to create an element if body yet to exist
b=["ms","O","Moz","Webkit"];// 'v' for vendor
if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};/**
 * Public functions
 */
t.prototype={constructor:t,/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),
// We disable fixed positioned lightbox on devices that don't handle it nicely.
// If you know a better way of detecting this - let me know.
b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},/**
	 * Opens popup
	 * @param  data [description]
	 */
open:function(c){var e;if(c.isObj===!1){
// convert jQuery collection to array to avoid conflicts later
b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;
// if popup is already opened - we just update the content
if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),
// Building markup
// main containers are created only once
b.bgOverlay||(
// Dark overlay
b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));
// Initializing modules
var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(
// Close button
b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&
// Close on ESC key
d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);
// this triggers recalculation of layout, so we get it once to not to trigger twice
var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?
// ie7 double-scroll bug
a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;
// add content
// remove scrollbar, add margin e.t.c
// add everything to DOM
// Save last focused element
// Wait for next cycle to allow CSS transition
return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):
// if content is not defined (not loaded e.t.c) we add class only for BG
b.bgOverlay.addClass(q),
// Trap the focus in popup
d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},/**
	 * Closes the popup
	 */
close:function(){b.isOpen&&(y(i),b.isOpen=!1,
// for CSS3 animation
b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},/**
	 * Helper for close() function
	 */
_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),
// clean up DOM elements that aren't removed
b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),
// remove close button from target element
!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){
// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();
// Fixes #84: popup incorrectly positioned with position:relative on body
b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},/**
	 * Set content of popup based on current index
	 */
updateItemHTML:function(){var c=b.items[b.index];
// Detach and perform modifications
b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),
// BeforeChange event works like so:
// _mfpOn('BeforeChange', function(e, prevType, newType) { });
b.currItem=c,!b.currTemplate[d]){var f=!!b.st[d]&&b.st[d].markup;
// allows to modify markup
y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):
// if there is no markup found we just define that template is parsed
b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,
// Append container back after its content changed
b.container.prepend(b.contentContainer),y("AfterChange")},/**
	 * Set HTML content of popup
	 */
appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?
// if there is no markup, we just append close button element inside
b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){
// check for 'mfp-TYPE' class
for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},/**
	 * Initializes single popup or a group of popups
	 */
addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else// else it's number
if(v.width()<g)return!0;c.type&&(c.preventDefault(),
// This will prevent popup from closing if element is inside and popup is already opened
b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},/**
	 * Updates text on preloader
	 */
updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};
// allows to modify status
y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},/*
		"Private" helpers that aren't private at all
	 */
// Check to close popup or not
// "target" is an element that was clicked
_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;
// We close the popup if click is on close button or on preloader. Or if there is no content.
if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;
// if click is outside the content
if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){if(c.target!==b.wrap[0]&&!a.contains(b.wrap[0],c.target))return b._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){
// thx David
if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},/* MagnificPopup core prototype end */
/**
 * Public static functions
 */
a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{
// Info about options is in docs:
// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",// CSS selector of input to focus after popup is opened
closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);
// We call some API method of first param is a string
if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else
// clone options obj
c=a.extend(!0,{},c),/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};/*>>core*/
/*>>inline*/
var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",// will be appended with `mfp-` prefix
markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){
// If target element has parent - we replace it with placeholder and put it back after popup is closed
var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),
// replace target inline element with placeholder
E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});/*>>inline*/
/*>>ajax*/
var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});/*>>ajax*/
/*>>image*/
var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;
// fix box-sizing in ie7/8
b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),
// decelerating interval that checks for size of an image
L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,
// image load complete handler
f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(
// if image complete check fails 200 times (20 sec), we assume that there was an error.
e++,e<200?setTimeout(f,100):g()))},
// image error handler
g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,
// without clone() "error" event is not firing when IMG is replaced by new IMG
// TODO: find a way to avoid such cloning
i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});/*>>image*/
/*>>zoom*/
var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),
// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return!!b.currItem.hasSize&&b.currItem.img},
// Get element postion relative to viewport
_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
var h={width:d.width(),
// fix Zepto height+padding issue
height:(u?d.innerHeight():d[0].offsetHeight)-g-f};
// I hate to do this, but there is no another option
return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});/*>>zoom*/
/*>>iframe*/
var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(
// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
a||(c[0].src=Q),
// IE8 black screen bug fix
b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",
// we don't care and support only one default type of URL by default
patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){if(e.indexOf(this.index)>-1)return this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});/*>>iframe*/
/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var S=function(a){var c=b.items.length;return a>c-1?a-c:a<0?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";// true - next, false - prev
// true - next, false - prev
return b.direction=!0,!(!c||!c.enabled)&&(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){if(b.items.length>1)return b.next(),!1}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null}))},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});/*>>gallery*/
/*>>retina*/
var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),/*>>retina*/
A()}),/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/
function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):"object"==typeof module&&"object"==typeof module.exports?exports=a(require("jquery")):a(jQuery)}(function(a){
// x is the fraction of animation progress, in the range 0..1
function b(a){var b=7.5625,c=2.75;return a<1/c?b*a*a:a<2/c?b*(a-=1.5/c)*a+.75:a<2.5/c?b*(a-=2.25/c)*a+.9375:b*(a-=2.625/c)*a+.984375}
// Preserve the original jQuery "swing" easing as "jswing"
a.easing.jswing=a.easing.swing;var c=Math.pow,d=Math.sqrt,e=Math.sin,f=Math.cos,g=Math.PI,h=1.70158,i=1.525*h,j=h+1,k=2*g/3,l=2*g/4.5;a.extend(a.easing,{def:"easeOutQuad",swing:function(b){return a.easing[a.easing.def](b)},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return 1-(1-a)*(1-a)},easeInOutQuad:function(a){return a<.5?2*a*a:1-c(-2*a+2,2)/2},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1-c(1-a,3)},easeInOutCubic:function(a){return a<.5?4*a*a*a:1-c(-2*a+2,3)/2},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return 1-c(1-a,4)},easeInOutQuart:function(a){return a<.5?8*a*a*a*a:1-c(-2*a+2,4)/2},easeInQuint:function(a){return a*a*a*a*a},easeOutQuint:function(a){return 1-c(1-a,5)},easeInOutQuint:function(a){return a<.5?16*a*a*a*a*a:1-c(-2*a+2,5)/2},easeInSine:function(a){return 1-f(a*g/2)},easeOutSine:function(a){return e(a*g/2)},easeInOutSine:function(a){return-(f(g*a)-1)/2},easeInExpo:function(a){return 0===a?0:c(2,10*a-10)},easeOutExpo:function(a){return 1===a?1:1-c(2,-10*a)},easeInOutExpo:function(a){return 0===a?0:1===a?1:a<.5?c(2,20*a-10)/2:(2-c(2,-20*a+10))/2},easeInCirc:function(a){return 1-d(1-c(a,2))},easeOutCirc:function(a){return d(1-c(a-1,2))},easeInOutCirc:function(a){return a<.5?(1-d(1-c(2*a,2)))/2:(d(1-c(-2*a+2,2))+1)/2},easeInElastic:function(a){return 0===a?0:1===a?1:-c(2,10*a-10)*e((10*a-10.75)*k)},easeOutElastic:function(a){return 0===a?0:1===a?1:c(2,-10*a)*e((10*a-.75)*k)+1},easeInOutElastic:function(a){return 0===a?0:1===a?1:a<.5?-(c(2,20*a-10)*e((20*a-11.125)*l))/2:c(2,-20*a+10)*e((20*a-11.125)*l)/2+1},easeInBack:function(a){return j*a*a*a-h*a*a},easeOutBack:function(a){return 1+j*c(a-1,3)+h*c(a-1,2)},easeInOutBack:function(a){return a<.5?c(2*a,2)*(2*(i+1)*a-i)/2:(c(2*a-2,2)*((i+1)*(2*a-2)+i)+2)/2},easeInBounce:function(a){return 1-b(1-a)},easeOutBounce:b,easeInOutBounce:function(a){return a<.5?(1-b(1-2*a))/2:(1+b(2*a-1))/2}})}),/*
 * Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery/easing
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
function(a){a.extend(a.easing,{easeIn:function(b,c,d,e,f){return a.easing.easeInQuad(b,c,d,e,f)},easeOut:function(b,c,d,e,f){return a.easing.easeOutQuad(b,c,d,e,f)},easeInOut:function(b,c,d,e,f){return a.easing.easeInOutQuad(b,c,d,e,f)},expoin:function(b,c,d,e,f){return a.easing.easeInExpo(b,c,d,e,f)},expoout:function(b,c,d,e,f){return a.easing.easeOutExpo(b,c,d,e,f)},expoinout:function(b,c,d,e,f){return a.easing.easeInOutExpo(b,c,d,e,f)},bouncein:function(b,c,d,e,f){return a.easing.easeInBounce(b,c,d,e,f)},bounceout:function(b,c,d,e,f){return a.easing.easeOutBounce(b,c,d,e,f)},bounceinout:function(b,c,d,e,f){return a.easing.easeInOutBounce(b,c,d,e,f)},elasin:function(b,c,d,e,f){return a.easing.easeInElastic(b,c,d,e,f)},elasout:function(b,c,d,e,f){return a.easing.easeOutElastic(b,c,d,e,f)},elasinout:function(b,c,d,e,f){return a.easing.easeInOutElastic(b,c,d,e,f)},backin:function(b,c,d,e,f){return a.easing.easeInBack(b,c,d,e,f)},backout:function(b,c,d,e,f){return a.easing.easeOutBack(b,c,d,e,f)},backinout:function(b,c,d,e,f){return a.easing.easeInOutBack(b,c,d,e,f)}})}(jQuery),function(){"use strict";function a(c){
// Support instantiation without the `new` keyword.
// Support instantiation without the `new` keyword.
// Save reference to instance.
// *required utilities
// Note: IE9 only supports console if devtools are open.
return"undefined"==typeof this||Object.getPrototypeOf(this)!==a.prototype?new a(c):(y=this,y.version="3.3.1",y.tools=new x,y.isSupported()?(y.tools.extend(y.defaults,c||{}),b(y.defaults),y.store={elements:{},containers:[]},y.sequences={},y.history=[],y.uid=0,y.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),y)}/**
   * Private Methods
   * ---------------
   */
function b(a){if(a&&a.container){if("string"==typeof a.container)return window.document.documentElement.querySelector(a.container);if(y.tools.isNode(a.container))return a.container;console.log('ScrollReveal: invalid container "'+a.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return y.defaults.container}/**
   * check to see if a node or node list was passed in as the target,
   * otherwise query the container using target as a selector.
   *
   * @param {Node|NodeList|string} [target]    client input for reveal target.
   * @param {Node}                 [container] parent element for selector queries.
   *
   * @return {array} elements to be revealed.
   */
function c(a,b){return"string"==typeof a?Array.prototype.slice.call(b.querySelectorAll(a)):y.tools.isNode(a)?[a]:y.tools.isNodeList(a)?Array.prototype.slice.call(a):[]}/**
   * A consistent way of creating unique IDs.
   * @returns {number}
   */
function d(){return++y.uid}function e(a,b,c){
// If a container was passed as a part of the config object,
// let’s overwrite it with the resolved container passed in.
b.container&&(b.container=c),
// If the element hasn’t already been configured, let’s use a clone of the
// defaults extended by the configuration passed as the second argument.
a.config?
// Otherwise, let’s use a clone of the existing element configuration extended
// by the configuration passed as the second argument.
a.config=y.tools.extendClone(a.config,b):a.config=y.tools.extendClone(y.defaults,b),
// Infer CSS Transform axis from origin string.
"top"===a.config.origin||"bottom"===a.config.origin?a.config.axis="Y":a.config.axis="X"}function f(a){var b=window.getComputedStyle(a.domEl);a.styles||(a.styles={transition:{},transform:{},computed:{}},
// Capture any existing inline styles, and add our visibility override.
// --
// See section 4.2. in the Documentation:
// https://github.com/jlmakes/scrollreveal.js#42-improve-user-experience
a.styles.inline=a.domEl.getAttribute("style")||"",a.styles.inline+="; visibility: visible; ",
// grab the elements existing opacity.
a.styles.computed.opacity=b.opacity,
// grab the elements existing transitions.
b.transition&&"all 0s ease 0s"!==b.transition?a.styles.computed.transition=b.transition+", ":a.styles.computed.transition=""),
// Create transition styles
a.styles.transition.instant=g(a,0),a.styles.transition.delayed=g(a,a.config.delay),
// Generate transform styles, first with the webkit prefix.
a.styles.transform.initial=" -webkit-transform:",a.styles.transform.target=" -webkit-transform:",h(a),
// And again without any prefix.
a.styles.transform.initial+="transform:",a.styles.transform.target+="transform:",h(a)}function g(a,b){var c=a.config;return"-webkit-transition: "+a.styles.computed.transition+"-webkit-transform "+c.duration/1e3+"s "+c.easing+" "+b/1e3+"s, opacity "+c.duration/1e3+"s "+c.easing+" "+b/1e3+"s; transition: "+a.styles.computed.transition+"transform "+c.duration/1e3+"s "+c.easing+" "+b/1e3+"s, opacity "+c.duration/1e3+"s "+c.easing+" "+b/1e3+"s; "}function h(a){var b,c=a.config,d=a.styles.transform;
// Let’s make sure our our pixel distances are negative for top and left.
// e.g. origin = 'top' and distance = '25px' starts at `top: -25px` in CSS.
b="top"===c.origin||"left"===c.origin?/^-/.test(c.distance)?c.distance.substr(1):"-"+c.distance:c.distance,parseInt(c.distance)&&(d.initial+=" translate"+c.axis+"("+b+")",d.target+=" translate"+c.axis+"(0)"),c.scale&&(d.initial+=" scale("+c.scale+")",d.target+=" scale(1)"),c.rotate.x&&(d.initial+=" rotateX("+c.rotate.x+"deg)",d.target+=" rotateX(0)"),c.rotate.y&&(d.initial+=" rotateY("+c.rotate.y+"deg)",d.target+=" rotateY(0)"),c.rotate.z&&(d.initial+=" rotateZ("+c.rotate.z+"deg)",d.target+=" rotateZ(0)"),d.initial+="; opacity: "+c.opacity+";",d.target+="; opacity: "+a.styles.computed.opacity+";"}function i(a){var b=a.config.container;
// If this element’s container isn’t already in the store, let’s add it.
b&&y.store.containers.indexOf(b)===-1&&y.store.containers.push(a.config.container),
// Update the element stored with our new element.
y.store.elements[a.id]=a}function j(a,b,c){
// Save the `reveal()` arguments that triggered this `_record()` call, so we
// can re-trace our steps when calling the `sync()` method.
var d={target:a,config:b,interval:c};y.history.push(d)}function k(){if(y.isSupported()){
// Initial animate call triggers valid reveal animations on first load.
// Subsequent animate calls are made inside the event handler.
n();
// Then we loop through all container nodes in the store and bind event
// listeners to each.
for(var a=0;a<y.store.containers.length;a++)y.store.containers[a].addEventListener("scroll",l),y.store.containers[a].addEventListener("resize",l);
// Let’s also do a one-time binding of window event listeners.
y.initialized||(window.addEventListener("scroll",l),window.addEventListener("resize",l),y.initialized=!0)}return y}function l(){z(n)}function m(){var a,b,c,d;
// Loop through all sequences
y.tools.forOwn(y.sequences,function(e){d=y.sequences[e],a=!1;
// For each sequenced elemenet, let’s check visibility and if
// any are visible, set it’s sequence to active.
for(var f=0;f<d.elemIds.length;f++)c=d.elemIds[f],b=y.store.elements[c],w(b)&&!a&&(a=!0);d.active=a})}function n(){var a,b;m(),
// Loop through all elements in the store
y.tools.forOwn(y.store.elements,function(c){b=y.store.elements[c],a=r(b),
// Let’s see if we should revealand if so,
// trigger the `beforeReveal` callback and
// determine whether or not to use delay.
q(b)?(b.config.beforeReveal(b.domEl),a?b.domEl.setAttribute("style",b.styles.inline+b.styles.transform.target+b.styles.transition.delayed):b.domEl.setAttribute("style",b.styles.inline+b.styles.transform.target+b.styles.transition.instant),
// Let’s queue the `afterReveal` callback
// and mark the element as seen and revealing.
p("reveal",b,a),b.revealing=!0,b.seen=!0,b.sequence&&o(b,a)):s(b)&&(
//Otherwise reset our element and
// trigger the `beforeReset` callback.
b.config.beforeReset(b.domEl),b.domEl.setAttribute("style",b.styles.inline+b.styles.transform.initial+b.styles.transition.instant),
// And queue the `afterReset` callback.
p("reset",b),b.revealing=!1)})}function o(a,b){var c=0,d=0,e=y.sequences[a.sequence.id];
// We’re processing a sequenced element, so let's block other elements in this sequence.
e.blocked=!0,
// Since we’re triggering animations a part of a sequence after animations on first load,
// we need to check for that condition and explicitly add the delay to our timer.
b&&"onload"===a.config.useDelay&&(d=a.config.delay),
// If a sequence timer is already running, capture the elapsed time and clear it.
a.sequence.timer&&(c=Math.abs(a.sequence.timer.started-new Date),window.clearTimeout(a.sequence.timer)),
// Start a new timer.
a.sequence.timer={started:new Date},a.sequence.timer.clock=window.setTimeout(function(){
// Sequence interval has passed, so unblock the sequence and re-run the handler.
e.blocked=!1,a.sequence.timer=null,l()},Math.abs(e.interval)+d-c)}function p(a,b,c){var d=0,e=0,f="after";
// Check which callback we’re working with.
switch(a){case"reveal":e=b.config.duration,c&&(e+=b.config.delay),f+="Reveal";break;case"reset":e=b.config.duration,f+="Reset"}
// If a timer is already running, capture the elapsed time and clear it.
b.timer&&(d=Math.abs(b.timer.started-new Date),window.clearTimeout(b.timer.clock)),
// Start a new timer.
b.timer={started:new Date},b.timer.clock=window.setTimeout(function(){
// The timer completed, so let’s fire the callback and null the timer.
b.config[f](b.domEl),b.timer=null},e-d)}function q(a){if(a.sequence){var b=y.sequences[a.sequence.id];return b.active&&!b.blocked&&!a.revealing&&!a.disabled}return w(a)&&!a.revealing&&!a.disabled}function r(a){var b=a.config.useDelay;return"always"===b||"onload"===b&&!y.initialized||"once"===b&&!a.seen}function s(a){if(a.sequence){var b=y.sequences[a.sequence.id];return!b.active&&a.config.reset&&a.revealing&&!a.disabled}return!w(a)&&a.config.reset&&a.revealing&&!a.disabled}function t(a){return{width:a.clientWidth,height:a.clientHeight}}function u(a){
// Return the container scroll values, plus the its offset.
if(a&&a!==window.document.documentElement){var b=v(a);return{x:a.scrollLeft+b.left,y:a.scrollTop+b.top}}
// Otherwise, default to the window object’s scroll values.
return{x:window.pageXOffset,y:window.pageYOffset}}function v(a){var b=0,c=0,d=a.offsetHeight,e=a.offsetWidth;
// Now calculate the distance between the element and its parent, then
// again for the parent to its parent, and again etc... until we have the
// total distance of the element to the document’s top and left origin.
do isNaN(a.offsetTop)||(b+=a.offsetTop),isNaN(a.offsetLeft)||(c+=a.offsetLeft),a=a.offsetParent;while(a);return{top:b,left:c,height:d,width:e}}function w(a){function b(){
// Define the element’s functional boundaries using its view factor.
var b=j+h*g,c=k+i*g,d=l-h*g,n=m-i*g,o=f.y+a.config.viewOffset.top,p=f.x+a.config.viewOffset.left,q=f.y-a.config.viewOffset.bottom+e.height,r=f.x-a.config.viewOffset.right+e.width;return b<q&&d>o&&c>p&&n<r}function c(){return"fixed"===window.getComputedStyle(a.domEl).position}var d=v(a.domEl),e=t(a.config.container),f=u(a.config.container),g=a.config.viewFactor,h=d.height,i=d.width,j=d.top,k=d.left,l=j+h,m=k+i;return b()||c()}/**
   * Utilities
   * ---------
   */
function x(){}var y,z;/**
   * Configuration
   * -------------
   * This object signature can be passed directly to the ScrollReveal constructor,
   * or as the second argument of the `reveal()` method.
   */
a.prototype.defaults={
// 'bottom', 'left', 'top', 'right'
origin:"bottom",
// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
distance:"20px",
// Time in milliseconds.
duration:500,delay:0,
// Starting angles in degrees, will transition from these values to 0 in all axes.
rotate:{x:0,y:0,z:0},
// Starting opacity value, before transitioning to the computed opacity.
opacity:0,
// Starting scale value, will transition from this value to 1
scale:.9,
// Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",
// `<html>` is the default reveal container. You can pass either:
// DOM Node, e.g. document.querySelector('.fooContainer')
// Selector, e.g. '.fooContainer'
container:window.document.documentElement,
// true/false to control reveal animations on mobile.
mobile:!0,
// true:  reveals occur every time elements become visible
// false: reveals occur once as elements become visible
reset:!1,
// 'always' — delay for all reveal animations
// 'once'   — delay only the first time reveals occur
// 'onload' - delay only for animations triggered by first load
useDelay:"always",
// Change when an element is considered in the viewport. The default value
// of 0.20 means 20% of an element must be visible for its reveal to occur.
viewFactor:.2,
// Pixel values that alter the container boundaries.
// e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
// --
// Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
viewOffset:{top:0,right:0,bottom:0,left:0},
// Callbacks that fire for each completed element reveal, and if
// `config.reset = true`, for each completed element reset. When creating your
// callbacks, remember they are passed the element’s DOM node that triggered
// it as the first argument.
beforeReveal:function(a){},afterReveal:function(a){},beforeReset:function(a){},afterReset:function(a){}},/**
   * Check if client supports CSS Transform and CSS Transition.
   * @return {boolean}
   */
a.prototype.isSupported=function(){var a=document.documentElement.style;return"WebkitTransition"in a&&"WebkitTransform"in a||"transition"in a&&"transform"in a},/**
   * Creates a reveal set, a group of elements that will animate when they
   * become visible. If [interval] is provided, a new sequence is created
   * that will ensure elements reveal in the order they appear in the DOM.
   *
   * @param {Node|NodeList|string} [target]   The node, node list or selector to use for animation.
   * @param {Object}               [config]   Override the defaults for this reveal set.
   * @param {number}               [interval] Time between sequenced element animations (milliseconds).
   * @param {boolean}              [sync]     Used internally when updating reveals for async content.
   *
   * @return {Object} The current ScrollReveal instance.
   */
a.prototype.reveal=function(a,g,h,l){var m,n,o,p,q,r;if(
// No custom configuration was passed, but a sequence interval instead.
// let’s shuffle things around to make sure everything works.
void 0!==g&&"number"==typeof g?(h=g,g={}):void 0!==g&&null!==g||(g={}),m=b(g),n=c(a,m),!n.length)return console.log('ScrollReveal: reveal on "'+a+'" failed, no elements found.'),y;
// Prepare a new sequence if an interval is passed.
h&&"number"==typeof h&&(r=d(),q=y.sequences[r]={id:r,interval:h,elemIds:[],active:!1});
// Begin main loop to configure ScrollReveal elements.
for(var s=0;s<n.length;s++)
// Check if the element has already been configured and grab it from the store.
p=n[s].getAttribute("data-sr-id"),p?o=y.store.elements[p]:(
// Otherwise, let’s do some basic setup.
o={id:d(),domEl:n[s],seen:!1,revealing:!1},o.domEl.setAttribute("data-sr-id",o.id)),
// Sequence only setup
q&&(o.sequence={id:q.id,index:q.elemIds.length},q.elemIds.push(o.id)),
// New or existing element, it’s time to update its configuration, styles,
// and send the updates to our store.
e(o,g,m),f(o),i(o),
// We need to make sure elements are set to visibility: visible, even when
// on mobile and `config.mobile === false`, or if unsupported.
y.tools.isMobile()&&!o.config.mobile||!y.isSupported()?(o.domEl.setAttribute("style",o.styles.inline),o.disabled=!0):o.revealing||
// Otherwise, proceed normally.
o.domEl.setAttribute("style",o.styles.inline+o.styles.transform.initial);
// Each `reveal()` is recorded so that when calling `sync()` while working
// with asynchronously loaded content, it can re-trace your steps but with
// all your new elements now in the DOM.
// Since `reveal()` is called internally by `sync()`, we don’t want to
// record or intiialize each reveal during syncing.
// We push initialization to the event queue using setTimeout, so that we can
// give ScrollReveal room to process all reveal calls before putting things into motion.
// --
// Philip Roberts - What the heck is the event loop anyway? (JSConf EU 2014)
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
return!l&&y.isSupported()&&(j(a,g,h),y.initTimeout&&window.clearTimeout(y.initTimeout),y.initTimeout=window.setTimeout(k,0)),y},/**
   * Re-runs `reveal()` for each record stored in history, effectively capturing
   * any content loaded asynchronously that matches existing reveal set targets.
   * @return {Object} The current ScrollReveal instance.
   */
a.prototype.sync=function(){if(y.history.length&&y.isSupported()){for(var a=0;a<y.history.length;a++){var b=y.history[a];y.reveal(b.target,b.config,b.interval,!0)}k()}else console.log("ScrollReveal: sync failed, no reveals found.");return y},x.prototype.isObject=function(a){return null!==a&&"object"==typeof a&&a.constructor===Object},x.prototype.isNode=function(a){return"object"==typeof window.Node?a instanceof window.Node:a&&"object"==typeof a&&"number"==typeof a.nodeType&&"string"==typeof a.nodeName},x.prototype.isNodeList=function(a){var b=Object.prototype.toString.call(a),c=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?a instanceof window.NodeList:a&&"object"==typeof a&&c.test(b)&&"number"==typeof a.length&&(0===a.length||this.isNode(a[0]))},x.prototype.forOwn=function(a,b){if(!this.isObject(a))throw new TypeError('Expected "object", but received "'+typeof a+'".');for(var c in a)a.hasOwnProperty(c)&&b(c)},x.prototype.extend=function(a,b){return this.forOwn(b,function(c){this.isObject(b[c])?(a[c]&&this.isObject(a[c])||(a[c]={}),this.extend(a[c],b[c])):a[c]=b[c]}.bind(this)),a},x.prototype.extendClone=function(a,b){return this.extend(this.extend({},a),b)},x.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},/**
   * Polyfills
   * --------
   */
z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},/**
   * Module Wrapper
   * --------------
   */
"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.ScrollReveal=a}(),function(){}.call(this),function(a){"use strict";window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(window).scroll(function(){a(this).scrollTop()>50?a("#back-to-top").fadeIn():a("#back-to-top").fadeOut()}),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}}),a("#mainNav").affix({offset:{top:50}})}(jQuery);
// Finish Script.