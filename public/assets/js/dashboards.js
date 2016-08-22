/*
Created by : Fire360Boy
Email : Fire360Boy@gmail.com
Strat Script: *//*! X-editable - v1.5.1 
* In-place editing with Twitter Bootstrap, jQuery UI or pure jQuery
* http://github.com/vitalets/x-editable
* Copyright (c) 2013 Vitaliy Potapov; Licensed MIT */
/**
Form with single input element, two buttons and two states: normal/loading.
Applied as jQuery method to DIV tag (not to form tag!). This is because form can be in loading state when spinner shown.
Editableform is linked with one of input types, e.g. 'text', 'select' etc.

@class editableform
@uses text
@uses textarea
**/
!function(a){"use strict";var b=function(b,c){this.options=a.extend({},a.fn.editableform.defaults,c),this.$div=a(b),//div, containing form. Not form tag. Not editable-element.
this.options.scope||(this.options.scope=this)};b.prototype={constructor:b,initInput:function(){//called once
//take input from options (as it is created in editable-element)
this.input=this.options.input,
//set initial value
//todo: may be add check: typeof str === 'string' ? 
this.value=this.input.str2value(this.options.value),
//prerender: get input.$input
this.input.prerender()},initTemplate:function(){this.$form=a(a.fn.editableform.template)},initButtons:function(){var b=this.$form.find(".editable-buttons");b.append(a.fn.editableform.buttons),"bottom"===this.options.showbuttons&&b.addClass("editable-buttons-bottom")},/**
        Renders editableform

        @method render
        **/
render:function(){
//init loader
this.$loading=a(a.fn.editableform.loading),this.$div.empty().append(this.$loading),
//init form template and buttons
this.initTemplate(),this.options.showbuttons?this.initButtons():this.$form.find(".editable-buttons").remove(),
//show loading state
this.showLoading(),
//flag showing is form now saving value to server. 
//It is needed to wait when closing form.
this.isSaving=!1,/**        
            Fired when rendering starts
            @event rendering 
            @param {Object} event event object
            **/
this.$div.triggerHandler("rendering"),
//init input
this.initInput(),
//append input to form
this.$form.find("div.editable-input").append(this.input.$tpl),
//append form to container
this.$div.append(this.$form),
//render input
a.when(this.input.render()).then(a.proxy(function(){if(
//setup input to submit automatically when no buttons shown
this.options.showbuttons||this.input.autosubmit(),
//attach 'cancel' handler
this.$form.find(".editable-cancel").click(a.proxy(this.cancel,this)),this.input.error)this.error(this.input.error),this.$form.find(".editable-submit").attr("disabled",!0),this.input.$input.attr("disabled",!0),
//prevent form from submitting
this.$form.submit(function(a){a.preventDefault()});else{this.error(!1),this.input.$input.removeAttr("disabled"),this.$form.find(".editable-submit").removeAttr("disabled");var b=null===this.value||void 0===this.value||""===this.value?this.options.defaultValue:this.value;this.input.value2input(b),
//attach submit handler
this.$form.submit(a.proxy(this.submit,this))}/**        
                Fired when form is rendered
                @event rendered
                @param {Object} event event object
                **/
this.$div.triggerHandler("rendered"),this.showForm(),
//call postrender method to perform actions required visibility of form
this.input.postrender&&this.input.postrender()},this))},cancel:function(){/**        
            Fired when form was cancelled by user
            @event cancel 
            @param {Object} event event object
            **/
this.$div.triggerHandler("cancel")},showLoading:function(){var a,b;this.$form?(
//set loading size equal to form
a=this.$form.outerWidth(),b=this.$form.outerHeight(),a&&this.$loading.width(a),b&&this.$loading.height(b),this.$form.hide()):(
//stretch loading to fill container width
a=this.$loading.parent().width(),a&&this.$loading.width(a)),this.$loading.show()},showForm:function(a){this.$loading.hide(),this.$form.show(),a!==!1&&this.input.activate(),/**        
            Fired when form is shown
            @event show 
            @param {Object} event event object
            **/
this.$div.triggerHandler("show")},error:function(b){var c,d=this.$form.find(".control-group"),e=this.$form.find(".editable-error-block");if(b===!1)d.removeClass(a.fn.editableform.errorGroupClass),e.removeClass(a.fn.editableform.errorBlockClass).empty().hide();else{
//convert newline to <br> for more pretty error display
if(b){c=(""+b).split("\n");for(var f=0;f<c.length;f++)c[f]=a("<div>").text(c[f]).html();b=c.join("<br>")}d.addClass(a.fn.editableform.errorGroupClass),e.addClass(a.fn.editableform.errorBlockClass).html(b).show()}},submit:function(b){b.stopPropagation(),b.preventDefault();
//get new value from input
var c=this.input.input2value(),d=this.validate(c);if("object"===a.type(d)&&void 0!==d.newValue){if(c=d.newValue,this.input.value2input(c),"string"==typeof d.msg)return this.error(d.msg),void this.showForm()}else if(d)return this.error(d),void this.showForm();
//if value not changed --> trigger 'nochange' event and return
/*jslint eqeq: true*/
if(!this.options.savenochange&&this.input.value2str(c)==this.input.value2str(this.value))/*jslint eqeq: false*/
/**        
                Fired when value not changed but form is submitted. Requires savenochange = false.
                @event nochange 
                @param {Object} event event object
                **/
return void this.$div.triggerHandler("nochange");
//convert value for submitting to server
var e=this.input.value2submit(c);this.isSaving=!0,
//sending data to server
a.when(this.save(e)).done(a.proxy(function(a){this.isSaving=!1;
//run success callback
var b="function"==typeof this.options.success?this.options.success.call(this.options.scope,a,c):null;
//if success callback returns false --> keep form open and do not activate input
//if success callback returns false --> keep form open and do not activate input
//if success callback returns string -->  keep form open, show error and activate input               
//if success callback returns object like {newValue: <something>} --> use that value instead of submitted
//it is usefull if you want to chnage value in url-function
//clear error message
/**        
                Fired when form is submitted
                @event save 
                @param {Object} event event object
                @param {Object} params additional params
                @param {mixed} params.newValue raw new value
                @param {mixed} params.submitValue submitted value as string
                @param {Object} params.response ajax response

                @example
                $('#form-div').on('save'), function(e, params){
                    if(params.newValue === 'username') {...}
                });
                **/
return b===!1?(this.error(!1),void this.showForm(!1)):"string"==typeof b?(this.error(b),void this.showForm()):(b&&"object"==typeof b&&b.hasOwnProperty("newValue")&&(c=b.newValue),this.error(!1),this.value=c,void this.$div.triggerHandler("save",{newValue:c,submitValue:e,response:a}))},this)).fail(a.proxy(function(a){this.isSaving=!1;var b;b="function"==typeof this.options.error?this.options.error.call(this.options.scope,a,c):"string"==typeof a?a:a.responseText||a.statusText||"Unknown error!",this.error(b),this.showForm()},this))},save:function(b){
//try parse composite pk defined as json string in data-pk 
this.options.pk=a.fn.editableutils.tryParseJson(this.options.pk,!0);var c,d="function"==typeof this.options.pk?this.options.pk.call(this.options.scope):this.options.pk,/*
              send on server in following cases:
              1. url is function
              2. url is string AND (pk defined OR send option = always) 
            */
e=!!("function"==typeof this.options.url||this.options.url&&("always"===this.options.send||"auto"===this.options.send&&null!==d&&void 0!==d));if(e)//send to server
//standard params
//additional params
//try parse json in single quotes (from data-params attribute)
return this.showLoading(),c={name:this.options.name||"",value:b,pk:d},"function"==typeof this.options.params?c=this.options.params.call(this.options.scope,c):(this.options.params=a.fn.editableutils.tryParseJson(this.options.params,!0),a.extend(c,this.options.params)),"function"==typeof this.options.url?this.options.url.call(this.options.scope,c):a.ajax(a.extend({url:this.options.url,data:c,type:"POST"},this.options.ajaxOptions))},validate:function(a){if(void 0===a&&(a=this.value),"function"==typeof this.options.validate)return this.options.validate.call(this.options.scope,a)},option:function(a,b){a in this.options&&(this.options[a]=b),"value"===a&&this.setValue(b)},setValue:function(a,b){b?this.value=this.input.str2value(a):this.value=a,
//if form is visible, update input
this.$form&&this.$form.is(":visible")&&this.input.value2input(this.value)}},/*
    Initialize editableform. Applied to jQuery object.

    @method $().editableform(options)
    @params {Object} options
    @example
    var $form = $('&lt;div&gt;').editableform({
        type: 'text',
        name: 'username',
        url: '/post',
        value: 'vitaliy'
    });

    //to display form you should call 'render' method
    $form.editableform('render');     
    */
a.fn.editableform=function(c){var d=arguments;return this.each(function(){var e=a(this),f=e.data("editableform"),g="object"==typeof c&&c;f||e.data("editableform",f=new b(this,g)),"string"==typeof c&&//call method 
f[c].apply(f,Array.prototype.slice.call(d,1))})},
//keep link to constructor to allow inheritance
a.fn.editableform.Constructor=b,
//defaults
a.fn.editableform.defaults={/* see also defaults for input */
/**
        Type of input. Can be <code>text|textarea|select|date|checklist</code>

        @property type 
        @type string
        @default 'text'
        **/
type:"text",/**
        Url for submit, e.g. <code>'/post'</code>  
        If function - it will be called instead of ajax. Function should return deferred object to run fail/done callbacks.

        @property url 
        @type string|function
        @default null
        @example
        url: function(params) {
            var d = new $.Deferred;
            if(params.value === 'abc') {
                return d.reject('error message'); //returning error via deferred object
            } else {
                //async saving data in js model
                someModel.asyncSaveMethod({
                   ..., 
                   success: function(){
                      d.resolve();
                   }
                }); 
                return d.promise();
            }
        } 
        **/
url:null,/**
        Additional params for submit. If defined as <code>object</code> - it is **appended** to original ajax data (pk, name and value).  
        If defined as <code>function</code> - returned object **overwrites** original ajax data.
        @example
        params: function(params) {
            //originally params contain pk, name and value
            params.a = 1;
            return params;
        }

        @property params 
        @type object|function
        @default null
        **/
params:null,/**
        Name of field. Will be submitted on server. Can be taken from <code>id</code> attribute

        @property name 
        @type string
        @default null
        **/
name:null,/**
        Primary key of editable object (e.g. record id in database). For composite keys use object, e.g. <code>{id: 1, lang: 'en'}</code>.
        Can be calculated dynamically via function.

        @property pk 
        @type string|object|function
        @default null
        **/
pk:null,/**
        Initial value. If not defined - will be taken from element's content.
        For __select__ type should be defined (as it is ID of shown text).

        @property value 
        @type string|object
        @default null
        **/
value:null,/**
        Value that will be displayed in input if original field value is empty (`null|undefined|''`).

        @property defaultValue 
        @type string|object
        @default null
        @since 1.4.6
        **/
defaultValue:null,/**
        Strategy for sending data on server. Can be `auto|always|never`.
        When 'auto' data will be sent on server **only if pk and url defined**, otherwise new value will be stored locally.

        @property send 
        @type string
        @default 'auto'
        **/
send:"auto",/**
        Function for client-side validation. If returns string - means validation not passed and string showed as error.
        Since 1.5.1 you can modify submitted value by returning object from `validate`: 
        `{newValue: '...'}` or `{newValue: '...', msg: '...'}`

        @property validate 
        @type function
        @default null
        @example
        validate: function(value) {
            if($.trim(value) == '') {
                return 'This field is required';
            }
        }
        **/
validate:null,/**
        Success callback. Called when value successfully sent on server and **response status = 200**.  
        Usefull to work with json response. For example, if your backend response can be <code>{success: true}</code>
        or <code>{success: false, msg: "server error"}</code> you can check it inside this callback.  
        If it returns **string** - means error occured and string is shown as error message.  
        If it returns **object like** <code>{newValue: &lt;something&gt;}</code> - it overwrites value, submitted by user.  
        Otherwise newValue simply rendered into element.
        
        @property success 
        @type function
        @default null
        @example
        success: function(response, newValue) {
            if(!response.success) return response.msg;
        }
        **/
success:null,/**
        Error callback. Called when request failed (response status != 200).  
        Usefull when you want to parse error response and display a custom message.
        Must return **string** - the message to be displayed in the error block.
                
        @property error 
        @type function
        @default null
        @since 1.4.4
        @example
        error: function(response, newValue) {
            if(response.status === 500) {
                return 'Service unavailable. Please try later.';
            } else {
                return response.responseText;
            }
        }
        **/
error:null,/**
        Additional options for submit ajax request.
        List of values: http://api.jquery.com/jQuery.ajax
        
        @property ajaxOptions 
        @type object
        @default null
        @since 1.1.1        
        @example 
        ajaxOptions: {
            type: 'put',
            dataType: 'json'
        }        
        **/
ajaxOptions:null,/**
        Where to show buttons: left(true)|bottom|false  
        Form without buttons is auto-submitted.

        @property showbuttons 
        @type boolean|string
        @default true
        @since 1.1.1
        **/
showbuttons:!0,/**
        Scope for callback methods (success, validate).  
        If <code>null</code> means editableform instance itself. 

        @property scope 
        @type DOMElement|object
        @default null
        @since 1.2.0
        @private
        **/
scope:null,/**
        Whether to save or cancel value when it was not changed but form was submitted

        @property savenochange 
        @type boolean
        @default false
        @since 1.2.0
        **/
savenochange:!1},/*
    Note: following params could redefined in engine: bootstrap or jqueryui:
    Classes 'control-group' and 'editable-error-block' must always present!
    */
a.fn.editableform.template='<form class="form-inline editableform"><div class="control-group"><div><div class="editable-input"></div><div class="editable-buttons"></div></div><div class="editable-error-block"></div></div></form>',
//loading div
a.fn.editableform.loading='<div class="editableform-loading"></div>',
//buttons
a.fn.editableform.buttons='<button type="submit" class="editable-submit">ok</button><button type="button" class="editable-cancel">cancel</button>',
//error class attached to control-group
a.fn.editableform.errorGroupClass=null,
//error class attached to editable-error-block
a.fn.editableform.errorBlockClass="editable-error",
//engine
a.fn.editableform.engine="jquery"}(window.jQuery),/**
* EditableForm utilites
*/
function(a){"use strict";
//utils
a.fn.editableutils={/**
        * classic JS inheritance function
        */
inherit:function(a,b){var c=function(){};c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.superclass=b.prototype},/**
        * set caret position in input
        * see http://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area
        */
setCursorPosition:function(a,b){if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}},/**
        * function to parse JSON in *single* quotes. (jquery automatically parse only double quotes)
        * That allows such code as: <a data-source="{'a': 'b', 'c': 'd'}">
        * safe = true --> means no exception will be thrown
        * for details see http://stackoverflow.com/questions/7410348/how-to-set-json-format-to-html5-data-attributes-in-the-jquery
        */
tryParseJson:function(a,b){if("string"==typeof a&&a.length&&a.match(/^[\{\[].*[\}\]]$/))if(b)try{/*jslint evil: true*/
a=new Function("return "+a)()}catch(c){}finally{return a}else/*jslint evil: true*/
a=new Function("return "+a)();return a},/**
        * slice object by specified keys
        */
sliceObj:function(b,c,d){var e,f,g={};if(!a.isArray(c)||!c.length)return g;for(var h=0;h<c.length;h++)e=c[h],b.hasOwnProperty(e)&&(g[e]=b[e]),d!==!0&&(
//when getting data-* attributes via $.data() it's converted to lowercase.
//details: http://stackoverflow.com/questions/7602565/using-data-attributes-with-jquery
//workaround is code below.
f=e.toLowerCase(),b.hasOwnProperty(f)&&(g[e]=b[f]));return g},/*
        exclude complex objects from $.data() before pass to config
        */
getConfigData:function(b){var c={};return a.each(b.data(),function(a,b){("object"!=typeof b||b&&"object"==typeof b&&(b.constructor===Object||b.constructor===Array))&&(c[a]=b)}),c},/*
         returns keys of object
        */
objectKeys:function(a){if(Object.keys)return Object.keys(a);if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c},/**
        method to escape html.
       **/
escape:function(b){return a("<div>").text(b).html()},/*
        returns array items from sourceData having value property equal or inArray of 'value'
       */
itemsByValue:function(b,c,d){if(!c||null===b)return[];if("function"!=typeof d){var e=d||"value";d=function(a){return a[e]}}var f=a.isArray(b),g=[],h=this;return a.each(c,function(c,e){if(e.children)g=g.concat(h.itemsByValue(b,e.children,d));else/*jslint eqeq: true*/
if(f)a.grep(b,function(a){return a==(e&&"object"==typeof e?d(e):e)}).length&&g.push(e);else{var i=e&&"object"==typeof e?d(e):e;b==i&&g.push(e)}}),g},/*
       Returns input by options: type, mode. 
       */
createInput:function(b){var c,d,e,f=b.type;
//create input of specified type. Input will be used for converting value, not in form
//`date` is some kind of virtual type that is transformed to one of exact types
//depending on mode and core lib
//inline
//if type still `date` and not exist in types, replace with `combodate` that is base input
//`datetime` should be datetimefield in 'inline' mode
//change wysihtml5 to textarea for jquery UI and plain versions
//create input of specified type. Input will be used for converting value, not in form
return"date"===f&&("inline"===b.mode?a.fn.editabletypes.datefield?f="datefield":a.fn.editabletypes.dateuifield&&(f="dateuifield"):a.fn.editabletypes.date?f="date":a.fn.editabletypes.dateui&&(f="dateui"),"date"!==f||a.fn.editabletypes.date||(f="combodate")),"datetime"===f&&"inline"===b.mode&&(f="datetimefield"),"wysihtml5"!==f||a.fn.editabletypes[f]||(f="textarea"),"function"==typeof a.fn.editabletypes[f]?(c=a.fn.editabletypes[f],d=this.sliceObj(b,this.objectKeys(c.defaults)),e=new c(d)):(a.error("Unknown type: "+f),!1)},
//see http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
supportsTransitions:function(){var a=document.body||document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;
// Tests for vendor specific prop
c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}}}(window.jQuery),/**
Attaches stand-alone container with editable-form to HTML element. Element is used only for positioning, value is not stored anywhere.<br>
This method applied internally in <code>$().editable()</code>. You should subscribe on it's events (save / cancel) to get profit of it.<br>
Final realization can be different: bootstrap-popover, jqueryui-tooltip, poshytip, inline-div. It depends on which js file you include.<br>
Applied as jQuery method.

@class editableContainer
@uses editableform
**/
function(a){"use strict";var b=function(a,b){this.init(a,b)},c=function(a,b){this.init(a,b)};
//methods
b.prototype={containerName:null,//method to call container on element
containerDataName:null,//object name in element's .data()
innerCss:null,//tbd in child class
containerClass:"editable-container editable-popup",//css class applied to container element
defaults:{},//container itself defaults
init:function(c,d){this.$element=a(c),
//since 1.4.1 container do not use data-* directly as they already merged into options.
this.options=a.extend({},a.fn.editableContainer.defaults,d),this.splitOptions(),
//set scope of form callbacks to element
this.formOptions.scope=this.$element[0],this.initContainer(),
//flag to hide container, when saving value will finish
this.delayedHide=!1,
//bind 'destroyed' listener to destroy container when element is removed from dom
this.$element.on("destroyed",a.proxy(function(){this.destroy()},this)),
//attach document handler to close containers on click / escape
a(document).data("editable-handlers-attached")||(
//close all on escape
a(document).on("keyup.editable",function(b){27===b.which&&a(".editable-open").editableContainer("hide")}),
//close containers when click outside 
//(mousedown could be better than click, it closes everything also on drag drop)
a(document).on("click.editable",function(c){var d,e=a(c.target),f=[".editable-container",".ui-datepicker-header",".datepicker",//in inline mode datepicker is rendered into body
".modal-backdrop",".bootstrap-wysihtml5-insert-image-modal",".bootstrap-wysihtml5-insert-link-modal"];
//check if element is detached. It occurs when clicking in bootstrap datepicker
if(a.contains(document.documentElement,c.target)&&!e.is(document))
//for some reason FF 20 generates extra event (click) in select2 widget with e.target = document
//we need to filter it via construction below. See https://github.com/vitalets/x-editable/issues/199
//Possibly related to http://stackoverflow.com/questions/10119793/why-does-firefox-react-differently-from-webkit-and-ie-to-click-event-on-selec
{
//if click inside one of exclude classes --> no nothing
for(d=0;d<f.length;d++)if(e.is(f[d])||e.parents(f[d]).length)return;
//close all open containers (except one - target)
b.prototype.closeOthers(c.target)}}),a(document).data("editable-handlers-attached",!0))},
//split options on containerOptions and formOptions
splitOptions:function(){if(this.containerOptions={},this.formOptions={},!a.fn[this.containerName])throw new Error(this.containerName+" not found. Have you included corresponding js file?");
//keys defined in container defaults go to container, others go to form
for(var b in this.options)b in this.defaults?this.containerOptions[b]=this.options[b]:this.formOptions[b]=this.options[b]},/*
        Returns jquery object of container
        @method tip()
        */
tip:function(){return this.container()?this.container().$tip:null},/* returns container object */
container:function(){var a;
//first, try get it by `containerDataName`
//first, try get it by `containerDataName`
//second, try `containerName`
return this.containerDataName&&(a=this.$element.data(this.containerDataName))?a:a=this.$element.data(this.containerName)},/* call native method of underlying container, e.g. this.$element.popover('method') */
call:function(){this.$element[this.containerName].apply(this.$element,arguments)},initContainer:function(){this.call(this.containerOptions)},renderForm:function(){this.$form.editableform(this.formOptions).on({save:a.proxy(this.save,this),//click on submit button (value changed)
nochange:a.proxy(function(){this.hide("nochange")},this),//click on submit button (value NOT changed)                
cancel:a.proxy(function(){this.hide("cancel")},this),//click on calcel button
show:a.proxy(function(){this.delayedHide?(this.hide(this.delayedHide.reason),this.delayedHide=!1):this.setPosition()},this),//re-position container every time form is shown (occurs each time after loading state)
rendering:a.proxy(this.setPosition,this),//this allows to place container correctly when loading shown
resize:a.proxy(this.setPosition,this),//this allows to re-position container when form size is changed 
rendered:a.proxy(function(){/**        
                    Fired when container is shown and form is rendered (for select will wait for loading dropdown options).  
                    **Note:** Bootstrap popover has own `shown` event that now cannot be separated from x-editable's one.
                    The workaround is to check `arguments.length` that is always `2` for x-editable.                     
                    
                    @event shown 
                    @param {Object} event event object
                    @example
                    $('#username').on('shown', function(e, editable) {
                        editable.input.$input.val('overwriting value of input..');
                    });                     
                    **/
/*
                     TODO: added second param mainly to distinguish from bootstrap's shown event. It's a hotfix that will be solved in future versions via namespaced events.  
                    */
this.$element.triggerHandler("shown",a(this.options.scope).data("editable"))},this)}).editableform("render")},/**
        Shows container with form
        @method show()
        @param {boolean} closeAll Whether to close all other editable containers when showing this one. Default true.
        **/
/* Note: poshytip owerwrites this method totally! */
show:function(b){this.$element.addClass("editable-open"),b!==!1&&
//close all open containers (except this)
this.closeOthers(this.$element[0]),
//show container itself
this.innerShow(),this.tip().addClass(this.containerClass),this.$form,this.$form=a("<div>"),
//insert form into container body
this.tip().is(this.innerCss)?
//for inline container
this.tip().append(this.$form):this.tip().find(this.innerCss).append(this.$form),
//render form
this.renderForm()},/**
        Hides container with form
        @method hide()
        @param {string} reason Reason caused hiding. Can be <code>save|cancel|onblur|nochange|undefined (=manual)</code>
        **/
hide:function(a){if(this.tip()&&this.tip().is(":visible")&&this.$element.hasClass("editable-open")){
//if form is saving value, schedule hide
if(this.$form.data("editableform").isSaving)return void(this.delayedHide={reason:a});this.delayedHide=!1,this.$element.removeClass("editable-open"),this.innerHide(),/**
            Fired when container was hidden. It occurs on both save or cancel.  
            **Note:** Bootstrap popover has own `hidden` event that now cannot be separated from x-editable's one.
            The workaround is to check `arguments.length` that is always `2` for x-editable. 

            @event hidden 
            @param {object} event event object
            @param {string} reason Reason caused hiding. Can be <code>save|cancel|onblur|nochange|manual</code>
            @example
            $('#username').on('hidden', function(e, reason) {
                if(reason === 'save' || reason === 'cancel') {
                    //auto-open next editable
                    $(this).closest('tr').next().find('.editable').editable('show');
                } 
            });
            **/
this.$element.triggerHandler("hidden",a||"manual")}},/* internal show method. To be overwritten in child classes */
innerShow:function(){},/* internal hide method. To be overwritten in child classes */
innerHide:function(){},/**
        Toggles container visibility (show / hide)
        @method toggle()
        @param {boolean} closeAll Whether to close all other editable containers when showing this one. Default true.
        **/
toggle:function(a){this.container()&&this.tip()&&this.tip().is(":visible")?this.hide():this.show(a)},/*
        Updates the position of container when content changed.
        @method setPosition()
        */
setPosition:function(){},save:function(a,b){/**        
            Fired when new value was submitted. You can use <code>$(this).data('editableContainer')</code> inside handler to access to editableContainer instance
            
            @event save 
            @param {Object} event event object
            @param {Object} params additional params
            @param {mixed} params.newValue submitted value
            @param {Object} params.response ajax response
            @example
            $('#username').on('save', function(e, params) {
                //assuming server response: '{success: true}'
                var pk = $(this).data('editableContainer').options.pk;
                if(params.response && params.response.success) {
                    alert('value: ' + params.newValue + ' with pk: ' + pk + ' saved!');
                } else {
                    alert('error!'); 
                } 
            });
            **/
this.$element.triggerHandler("save",b),
//hide must be after trigger, as saving value may require methods of plugin, applied to input
this.hide("save")},/**
        Sets new option
        
        @method option(key, value)
        @param {string} key 
        @param {mixed} value 
        **/
option:function(a,b){this.options[a]=b,a in this.containerOptions?(this.containerOptions[a]=b,this.setContainerOption(a,b)):(this.formOptions[a]=b,this.$form&&this.$form.editableform("option",a,b))},setContainerOption:function(a,b){this.call("option",a,b)},/**
        Destroys the container instance
        @method destroy()
        **/
destroy:function(){this.hide(),this.innerDestroy(),this.$element.off("destroyed"),this.$element.removeData("editableContainer")},/* to be overwritten in child classes */
innerDestroy:function(){},/*
        Closes other containers except one related to passed element. 
        Other containers can be cancelled or submitted (depends on onblur option)
        */
closeOthers:function(b){a(".editable-open").each(function(c,d){
//do nothing with passed element and it's children
if(d!==b&&!a(d).find(b).length){
//otherwise cancel or submit all open containers 
var e=a(d),f=e.data("editableContainer");f&&("cancel"===f.options.onblur?e.data("editableContainer").hide("onblur"):"submit"===f.options.onblur&&e.data("editableContainer").tip().find("form").submit())}})},/**
        Activates input of visible container (e.g. set focus)
        @method activate()
        **/
activate:function(){this.tip&&this.tip().is(":visible")&&this.$form&&this.$form.data("editableform").input.activate()}},/**
    jQuery method to initialize editableContainer.
    
    @method $().editableContainer(options)
    @params {Object} options
    @example
    $('#edit').editableContainer({
        type: 'text',
        url: '/post',
        pk: 1,
        value: 'hello'
    });
    **/
a.fn.editableContainer=function(d){var e=arguments;return this.each(function(){var f=a(this),g="editableContainer",h=f.data(g),i="object"==typeof d&&d,j="inline"===i.mode?c:b;h||f.data(g,h=new j(this,i)),"string"==typeof d&&//call method 
h[d].apply(h,Array.prototype.slice.call(e,1))})},
//store constructors
a.fn.editableContainer.Popup=b,a.fn.editableContainer.Inline=c,
//defaults
a.fn.editableContainer.defaults={/**
        Initial value of form input

        @property value 
        @type mixed
        @default null
        @private
        **/
value:null,/**
        Placement of container relative to element. Can be <code>top|right|bottom|left</code>. Not used for inline container.

        @property placement 
        @type string
        @default 'top'
        **/
placement:"top",/**
        Whether to hide container on save/cancel.

        @property autohide 
        @type boolean
        @default true
        @private 
        **/
autohide:!0,/**
        Action when user clicks outside the container. Can be <code>cancel|submit|ignore</code>.  
        Setting <code>ignore</code> allows to have several containers open. 

        @property onblur 
        @type string
        @default 'cancel'
        @since 1.1.1
        **/
onblur:"cancel",/**
        Animation speed (inline mode only)
        @property anim 
        @type string
        @default false
        **/
anim:!1,/**
        Mode of editable, can be `popup` or `inline` 
        
        @property mode 
        @type string         
        @default 'popup'
        @since 1.4.0        
        **/
mode:"popup"},/* 
    * workaround to have 'destroyed' event to destroy popover when element is destroyed
    * see http://stackoverflow.com/questions/2200494/jquery-trigger-event-when-an-element-is-removed-from-the-dom
    */
jQuery.event.special.destroyed={remove:function(a){a.handler&&a.handler()}}}(window.jQuery),/**
* Editable Inline 
* ---------------------
*/
function(a){"use strict";
//copy prototype from EditableContainer
//extend methods
a.extend(a.fn.editableContainer.Inline.prototype,a.fn.editableContainer.Popup.prototype,{containerName:"editableform",innerCss:".editable-inline",containerClass:"editable-container editable-inline",//css class applied to container element
initContainer:function(){
//container is <span> element
this.$tip=a("<span></span>"),
//convert anim to miliseconds (int)
this.options.anim||(this.options.anim=0)},splitOptions:function(){
//all options are passed to form
this.containerOptions={},this.formOptions=this.options},tip:function(){return this.$tip},innerShow:function(){this.$element.hide(),this.tip().insertAfter(this.$element).show()},innerHide:function(){this.$tip.hide(this.options.anim,a.proxy(function(){this.$element.show(),this.innerDestroy()},this))},innerDestroy:function(){this.tip()&&this.tip().empty().remove()}})}(window.jQuery),/**
Makes editable any HTML element on the page. Applied as jQuery method.

@class editable
@uses editableContainer
**/
function(a){"use strict";var b=function(b,c){this.$element=a(b),
//data-* has more priority over js options: because dynamically created elements may change data-* 
this.options=a.extend({},a.fn.editable.defaults,c,a.fn.editableutils.getConfigData(this.$element)),this.options.selector?this.initLive():this.init(),
//check for transition support
this.options.highlight&&!a.fn.editableutils.supportsTransitions()&&(this.options.highlight=!1)};b.prototype={constructor:b,init:function(){var b,c=!1;if(
//name
this.options.name=this.options.name||this.$element.attr("id"),
//create input of specified type. Input needed already here to convert value for initial display (e.g. show text by id for select)
//also we set scope option to have access to element inside input specific callbacks (e. g. source as function)
this.options.scope=this.$element[0],this.input=a.fn.editableutils.createInput(this.options),this.input){
//check conditions for autotext:
switch(
//set value from settings or by element's text
void 0===this.options.value||null===this.options.value?(this.value=this.input.html2value(a.trim(this.$element.html())),c=!0):(/*
                  value can be string when received from 'data-value' attribute
                  for complext objects value can be set as json string in data-value attribute, 
                  e.g. data-value="{city: 'Moscow', street: 'Lenina'}"
                */
this.options.value=a.fn.editableutils.tryParseJson(this.options.value,!0),"string"==typeof this.options.value?this.value=this.input.str2value(this.options.value):this.value=this.options.value),
//add 'editable' class to every editable element
this.$element.addClass("editable"),
//specifically for "textarea" add class .editable-pre-wrapped to keep linebreaks
"textarea"===this.input.type&&this.$element.addClass("editable-pre-wrapped"),
//attach handler activating editable. In disabled mode it just prevent default action (useful for links)
"manual"!==this.options.toggle?(this.$element.addClass("editable-click"),this.$element.on(this.options.toggle+".editable",a.proxy(function(a){
//stop propagation not required because in document click handler it checks event target
//e.stopPropagation();
if(
//prevent following link if editable enabled
this.options.disabled||a.preventDefault(),"mouseenter"===this.options.toggle)
//for hover only show container
this.show();else{
//when toggle='click' we should not close all other containers as they will be closed automatically in document click listener
var b="click"!==this.options.toggle;this.toggle(b)}},this))):this.$element.attr("tabindex",-1),
//if display is function it's far more convinient to have autotext = always to render correctly on init
//see https://github.com/vitalets/x-editable-yii/issues/34
"function"==typeof this.options.display&&(this.options.autotext="always"),this.options.autotext){case"always":b=!0;break;case"auto":
//if element text is empty and value is defined and value not generated by text --> run autotext
b=!a.trim(this.$element.text()).length&&null!==this.value&&void 0!==this.value&&!c;break;default:b=!1}
//depending on autotext run render() or just finilize init
a.when(!b||this.render()).then(a.proxy(function(){this.options.disabled?this.disable():this.enable(),/**        
               Fired when element was initialized by `$().editable()` method. 
               Please note that you should setup `init` handler **before** applying `editable`. 
                              
               @event init 
               @param {Object} event event object
               @param {Object} editable editable instance (as here it cannot accessed via data('editable'))
               @since 1.2.0
               @example
               $('#username').on('init', function(e, editable) {
                   alert('initialized ' + editable.options.name);
               });
               $('#username').editable();
               **/
this.$element.triggerHandler("init",this)},this))}},/*
         Initializes parent element for live editables 
        */
initLive:function(){
//store selector 
var b=this.options.selector;
//modify options for child elements
this.options.selector=!1,this.options.autotext="never",
//listen toggle events
this.$element.on(this.options.toggle+".editable",b,a.proxy(function(b){var c=a(b.target);c.data("editable")||(
//if delegated element initially empty, we need to clear it's text (that was manually set to `empty` by user)
//see https://github.com/vitalets/x-editable/issues/137 
c.hasClass(this.options.emptyclass)&&c.empty(),c.editable(this.options).trigger(b))},this))},/*
        Renders value into element's text.
        Can call custom display method from options.
        Can return deferred object.
        @method render()
        @param {mixed} response server response (if exist) to pass into display function
        */
render:function(a){
//do not display anything
if(this.options.display!==!1)
//if input has `value2htmlFinal` method, we pass callback in third param to be called when source is loaded
//if input has `value2htmlFinal` method, we pass callback in third param to be called when source is loaded
return this.input.value2htmlFinal?this.input.value2html(this.value,this.$element[0],this.options.display,a):"function"==typeof this.options.display?this.options.display.call(this.$element[0],this.value,a):this.input.value2html(this.value,this.$element[0])},/**
        Enables editable
        @method enable()
        **/
enable:function(){this.options.disabled=!1,this.$element.removeClass("editable-disabled"),this.handleEmpty(this.isEmpty),"manual"!==this.options.toggle&&"-1"===this.$element.attr("tabindex")&&this.$element.removeAttr("tabindex")},/**
        Disables editable
        @method disable()
        **/
disable:function(){this.options.disabled=!0,this.hide(),this.$element.addClass("editable-disabled"),this.handleEmpty(this.isEmpty),
//do not stop focus on this element
this.$element.attr("tabindex",-1)},/**
        Toggles enabled / disabled state of editable element
        @method toggleDisabled()
        **/
toggleDisabled:function(){this.options.disabled?this.enable():this.disable()},/**
        Sets new option
        
        @method option(key, value)
        @param {string|object} key option name or object with several options
        @param {mixed} value option new value
        @example
        $('.editable').editable('option', 'pk', 2);
        **/
option:function(b,c){
//set option(s) by object
//set option(s) by object
//set option by string             
//disabled
//value
//transfer new option to container! 
//pass option to input directly (as it points to the same in form)
return b&&"object"==typeof b?void a.each(b,a.proxy(function(b,c){this.option(a.trim(b),c)},this)):(this.options[b]=c,"disabled"===b?c?this.disable():this.enable():("value"===b&&this.setValue(c),this.container&&this.container.option(b,c),void(this.input.option&&this.input.option(b,c))))},/*
        * set emptytext if element is empty
        */
handleEmpty:function(b){
//do not handle empty if we do not display anything
this.options.display!==!1&&(/* 
            isEmpty may be set directly as param of method.
            It is required when we enable/disable field and can't rely on content 
            as node content is text: "Empty" that is not empty %)
            */
void 0!==b?this.isEmpty=b:
//detect empty
//for some inputs we need more smart check
//e.g. wysihtml5 may have <br>, <p></p>, <img>
"function"==typeof this.input.isEmpty?this.isEmpty=this.input.isEmpty(this.$element):this.isEmpty=""===a.trim(this.$element.html()),
//emptytext shown only for enabled
this.options.disabled?
//below required if element disable property was changed
this.isEmpty&&(this.$element.empty(),this.options.emptyclass&&this.$element.removeClass(this.options.emptyclass)):this.isEmpty?(this.$element.html(this.options.emptytext),this.options.emptyclass&&this.$element.addClass(this.options.emptyclass)):this.options.emptyclass&&this.$element.removeClass(this.options.emptyclass))},/**
        Shows container with form
        @method show()
        @param {boolean} closeAll Whether to close all other editable containers when showing this one. Default true.
        **/
show:function(b){if(!this.options.disabled){
//init editableContainer: popover, tooltip, inline, etc..
if(this.container){if(this.container.tip().is(":visible"))return}else{var c=a.extend({},this.options,{value:this.value,input:this.input});this.$element.editableContainer(c),
//listen `save` event 
this.$element.on("save.internal",a.proxy(this.save,this)),this.container=this.$element.data("editableContainer")}
//show container
this.container.show(b)}},/**
        Hides container with form
        @method hide()
        **/
hide:function(){this.container&&this.container.hide()},/**
        Toggles container visibility (show / hide)
        @method toggle()
        @param {boolean} closeAll Whether to close all other editable containers when showing this one. Default true.
        **/
toggle:function(a){this.container&&this.container.tip().is(":visible")?this.hide():this.show(a)},/*
        * called when form was submitted
        */
save:function(a,b){
//mark element with unsaved class if needed
if(this.options.unsavedclass){/*
                 Add unsaved css to element if:
                  - url is not user's function 
                  - value was not sent to server
                  - params.response === undefined, that means data was not sent
                  - value changed 
                */
var c=!1;c=c||"function"==typeof this.options.url,c=c||this.options.display===!1,c=c||void 0!==b.response,c=c||this.options.savenochange&&this.input.value2str(this.value)!==this.input.value2str(b.newValue),c?this.$element.removeClass(this.options.unsavedclass):this.$element.addClass(this.options.unsavedclass)}
//highlight when saving
if(this.options.highlight){var d=this.$element,e=d.css("background-color");d.css("background-color",this.options.highlight),setTimeout(function(){"transparent"===e&&(e=""),d.css("background-color",e),d.addClass("editable-bg-transition"),setTimeout(function(){d.removeClass("editable-bg-transition")},1700)},10)}
//set new value
this.setValue(b.newValue,!1,b.response)},validate:function(){if("function"==typeof this.options.validate)return this.options.validate.call(this,this.value)},/**
        Sets new value of editable
        @method setValue(value, convertStr)
        @param {mixed} value new value 
        @param {boolean} convertStr whether to convert value from string to internal format
        **/
setValue:function(b,c,d){c?this.value=this.input.str2value(b):this.value=b,this.container&&this.container.option("value",this.value),a.when(this.render(d)).then(a.proxy(function(){this.handleEmpty()},this))},/**
        Activates input of visible container (e.g. set focus)
        @method activate()
        **/
activate:function(){this.container&&this.container.activate()},/**
        Removes editable feature from element
        @method destroy()
        **/
destroy:function(){this.disable(),this.container&&this.container.destroy(),this.input.destroy(),"manual"!==this.options.toggle&&(this.$element.removeClass("editable-click"),this.$element.off(this.options.toggle+".editable")),this.$element.off("save.internal"),this.$element.removeClass("editable editable-open editable-disabled"),this.$element.removeData("editable")}},/* EDITABLE PLUGIN DEFINITION
    * ======================= */
/**
    jQuery method to initialize editable element.
    
    @method $().editable(options)
    @params {Object} options
    @example
    $('#username').editable({
        type: 'text',
        url: '/post',
        pk: 1
    });
    **/
a.fn.editable=function(c){
//special API methods returning non-jquery object
var d={},e=arguments,f="editable";switch(c){/**
            Runs client-side validation for all matched editables
            
            @method validate()
            @returns {Object} validation errors map
            @example
            $('#username, #fullname').editable('validate');
            // possible result:
            {
              username: "username is required",
              fullname: "fullname should be minimum 3 letters length"
            }
            **/
case"validate":return this.each(function(){var b,c=a(this),e=c.data(f);e&&(b=e.validate())&&(d[e.options.name]=b)}),d;/**
            Returns current values of editable elements.   
            Note that it returns an **object** with name-value pairs, not a value itself. It allows to get data from several elements.    
            If value of some editable is `null` or `undefined` it is excluded from result object.
            When param `isSingle` is set to **true** - it is supposed you have single element and will return value of editable instead of object.   
             
            @method getValue()
            @param {bool} isSingle whether to return just value of single element
            @returns {Object} object of element names and values
            @example
            $('#username, #fullname').editable('getValue');
            //result:
            {
            username: "superuser",
            fullname: "John"
            }
            //isSingle = true
            $('#username').editable('getValue', true);
            //result "superuser" 
            **/
case"getValue"://isSingle = true
return 2===arguments.length&&arguments[1]===!0?d=this.eq(0).data(f).value:this.each(function(){var b=a(this),c=b.data(f);c&&void 0!==c.value&&null!==c.value&&(d[c.options.name]=c.input.value2submit(c.value))}),d;/**
            This method collects values from several editable elements and submit them all to server.   
            Internally it runs client-side validation for all fields and submits only in case of success.  
            See <a href="#newrecord">creating new records</a> for details.  
            Since 1.5.1 `submit` can be applied to single element to send data programmatically. In that case
            `url`, `success` and `error` is taken from initial options and you can just call `$('#username').editable('submit')`. 
            
            @method submit(options)
            @param {object} options 
            @param {object} options.url url to submit data 
            @param {object} options.data additional data to submit
            @param {object} options.ajaxOptions additional ajax options
            @param {function} options.error(obj) error handler 
            @param {function} options.success(obj,config) success handler
            @returns {Object} jQuery object
            **/
case"submit"://collects value, validate and submit to server for creating new record
var g=arguments[1]||{},h=this,i=this.editable("validate");
// validation ok
if(a.isEmptyObject(i)){var j={};
// for single element use url, success etc from options
if(1===h.length){var k=h.data("editable"),l={name:k.options.name||"",value:k.input.value2submit(k.value),pk:"function"==typeof k.options.pk?k.options.pk.call(k.options.scope):k.options.pk};
//additional params
"function"==typeof k.options.params?l=k.options.params.call(k.options.scope,l):(
//try parse json in single quotes (from data-params attribute)
k.options.params=a.fn.editableutils.tryParseJson(k.options.params,!0),a.extend(l,k.options.params)),j={url:k.options.url,data:l,type:"POST"},
// use success / error from options 
g.success=g.success||k.options.success,g.error=g.error||k.options.error}else{var m=this.editable("getValue");j={url:g.url,data:m,type:"POST"}}
// ajax success callabck (response 200 OK)
j.success="function"==typeof g.success?function(a){g.success.call(h,a,g)}:a.noop,
// ajax error callabck
j.error="function"==typeof g.error?function(){g.error.apply(h,arguments)}:a.noop,
// extend ajaxOptions    
g.ajaxOptions&&a.extend(j,g.ajaxOptions),
// extra data 
g.data&&a.extend(j.data,g.data),
// perform ajax request
a.ajax(j)}else//client-side validation error
"function"==typeof g.error&&g.error.call(h,i);return this}
//return jquery object
return this.each(function(){var d=a(this),g=d.data(f),h="object"==typeof c&&c;
//for delegated targets do not store `editable` object for element
//it's allows several different selectors.
//see: https://github.com/vitalets/x-editable/issues/312    
//for delegated targets do not store `editable` object for element
//it's allows several different selectors.
//see: https://github.com/vitalets/x-editable/issues/312    
//call method 
return h&&h.selector?void(g=new b(this,h)):(g||d.data(f,g=new b(this,h)),void("string"==typeof c&&g[c].apply(g,Array.prototype.slice.call(e,1))))})},a.fn.editable.defaults={/**
        Type of input. Can be <code>text|textarea|select|date|checklist</code> and more

        @property type 
        @type string
        @default 'text'
        **/
type:"text",/**
        Sets disabled state of editable

        @property disabled 
        @type boolean
        @default false
        **/
disabled:!1,/**
        How to toggle editable. Can be <code>click|dblclick|mouseenter|manual</code>.   
        When set to <code>manual</code> you should manually call <code>show/hide</code> methods of editable.    
        **Note**: if you call <code>show</code> or <code>toggle</code> inside **click** handler of some DOM element, 
        you need to apply <code>e.stopPropagation()</code> because containers are being closed on any click on document.
        
        @example
        $('#edit-button').click(function(e) {
            e.stopPropagation();
            $('#username').editable('toggle');
        });

        @property toggle 
        @type string
        @default 'click'
        **/
toggle:"click",/**
        Text shown when element is empty.

        @property emptytext 
        @type string
        @default 'Empty'
        **/
emptytext:"Empty",/**
        Allows to automatically set element's text based on it's value. Can be <code>auto|always|never</code>. Useful for select and date.
        For example, if dropdown list is <code>{1: 'a', 2: 'b'}</code> and element's value set to <code>1</code>, it's html will be automatically set to <code>'a'</code>.  
        <code>auto</code> - text will be automatically set only if element is empty.  
        <code>always|never</code> - always(never) try to set element's text.

        @property autotext 
        @type string
        @default 'auto'
        **/
autotext:"auto",/**
        Initial value of input. If not set, taken from element's text.  
        Note, that if element's text is empty - text is automatically generated from value and can be customized (see `autotext` option).  
        For example, to display currency sign:
        @example
        <a id="price" data-type="text" data-value="100"></a>
        <script>
        $('#price').editable({
            ...
            display: function(value) {
              $(this).text(value + '$');
            } 
        }) 
        </script>
                
        @property value 
        @type mixed
        @default element's text
        **/
value:null,/**
        Callback to perform custom displaying of value in element's text.  
        If `null`, default input's display used.  
        If `false`, no displaying methods will be called, element's text will never change.  
        Runs under element's scope.  
        _**Parameters:**_  
        
        * `value` current value to be displayed
        * `response` server response (if display called after ajax submit), since 1.4.0
         
        For _inputs with source_ (select, checklist) parameters are different:  
          
        * `value` current value to be displayed
        * `sourceData` array of items for current input (e.g. dropdown items) 
        * `response` server response (if display called after ajax submit), since 1.4.0
                  
        To get currently selected items use `$.fn.editableutils.itemsByValue(value, sourceData)`.
        
        @property display 
        @type function|boolean
        @default null
        @since 1.2.0
        @example
        display: function(value, sourceData) {
           //display checklist as comma-separated values
           var html = [],
               checked = $.fn.editableutils.itemsByValue(value, sourceData);
               
           if(checked.length) {
               $.each(checked, function(i, v) { html.push($.fn.editableutils.escape(v.text)); });
               $(this).html(html.join(', '));
           } else {
               $(this).empty(); 
           }
        }
        **/
display:null,/**
        Css class applied when editable text is empty.

        @property emptyclass 
        @type string
        @since 1.4.1        
        @default editable-empty
        **/
emptyclass:"editable-empty",/**
        Css class applied when value was stored but not sent to server (`pk` is empty or `send = 'never'`).  
        You may set it to `null` if you work with editables locally and submit them together.  

        @property unsavedclass 
        @type string
        @since 1.4.1        
        @default editable-unsaved
        **/
unsavedclass:"editable-unsaved",/**
        If selector is provided, editable will be delegated to the specified targets.  
        Usefull for dynamically generated DOM elements.  
        **Please note**, that delegated targets can't be initialized with `emptytext` and `autotext` options, 
        as they actually become editable only after first click.  
        You should manually set class `editable-click` to these elements.  
        Also, if element originally empty you should add class `editable-empty`, set `data-value=""` and write emptytext into element:

        @property selector 
        @type string
        @since 1.4.1        
        @default null
        @example
        <div id="user">
          <!-- empty -->
          <a href="#" data-name="username" data-type="text" class="editable-click editable-empty" data-value="" title="Username">Empty</a>
          <!-- non-empty -->
          <a href="#" data-name="group" data-type="select" data-source="/groups" data-value="1" class="editable-click" title="Group">Operator</a>
        </div>     
        
        <script>
        $('#user').editable({
            selector: 'a',
            url: '/post',
            pk: 1
        });
        </script>
        **/
selector:null,/**
        Color used to highlight element after update. Implemented via CSS3 transition, works in modern browsers.
        
        @property highlight 
        @type string|boolean
        @since 1.4.5        
        @default #FFFF80 
        **/
highlight:"#FFFF80"}}(window.jQuery),/**
AbstractInput - base class for all editable inputs.
It defines interface to be implemented by any input type.
To create your own input you can inherit from this class.

@class abstractinput
**/
function(a){"use strict";
//types
a.fn.editabletypes={};var b=function(){};b.prototype={/**
        Initializes input

        @method init() 
        **/
init:function(b,c,d){this.type=b,this.options=a.extend({},d,c)},/*
       this method called before render to init $tpl that is inserted in DOM
       */
prerender:function(){this.$tpl=a(this.options.tpl),//whole tpl as jquery object    
this.$input=this.$tpl,//control itself, can be changed in render method
this.$clear=null,//clear button
this.error=null},/**
        Renders input from tpl. Can return jQuery deferred object.
        Can be overwritten in child objects

        @method render()
       **/
render:function(){},/**
        Sets element's html by value. 

        @method value2html(value, element)
        @param {mixed} value
        @param {DOMElement} element
       **/
value2html:function(b,c){a(c)[this.options.escape?"text":"html"](a.trim(b))},/**
        Converts element's html to value

        @method html2value(html)
        @param {string} html
        @returns {mixed}
       **/
html2value:function(b){return a("<div>").html(b).text()},/**
        Converts value to string (for internal compare). For submitting to server used value2submit().

        @method value2str(value) 
        @param {mixed} value
        @returns {string}
       **/
value2str:function(a){return a},/**
        Converts string received from server into value. Usually from `data-value` attribute.

        @method str2value(str)
        @param {string} str
        @returns {mixed}
       **/
str2value:function(a){return a},/**
        Converts value for submitting to server. Result can be string or object.

        @method value2submit(value) 
        @param {mixed} value
        @returns {mixed}
       **/
value2submit:function(a){return a},/**
        Sets value of input.

        @method value2input(value) 
        @param {mixed} value
       **/
value2input:function(a){this.$input.val(a)},/**
        Returns value of input. Value can be object (e.g. datepicker)

        @method input2value() 
       **/
input2value:function(){return this.$input.val()},/**
        Activates input. For text it sets focus.

        @method activate() 
       **/
activate:function(){this.$input.is(":visible")&&this.$input.focus()},/**
        Creates input.

        @method clear() 
       **/
clear:function(){this.$input.val(null)},/**
        method to escape html.
       **/
escape:function(b){return a("<div>").text(b).html()},/**
        attach handler to automatically submit form when value changed (useful when buttons not shown)
       **/
autosubmit:function(){},/**
       Additional actions when destroying element 
       **/
destroy:function(){},
// -------- helper functions --------
setClass:function(){this.options.inputclass&&this.$input.addClass(this.options.inputclass)},setAttr:function(a){void 0!==this.options[a]&&null!==this.options[a]&&this.$input.attr(a,this.options[a])},option:function(a,b){this.options[a]=b}},b.defaults={/**
        HTML template of input. Normally you should not change it.

        @property tpl 
        @type string
        @default ''
        **/
tpl:"",/**
        CSS class automatically applied to input
        
        @property inputclass 
        @type string
        @default null
        **/
inputclass:null,/**
        If `true` - html will be escaped in content of element via $.text() method.  
        If `false` - html will not be escaped, $.html() used.  
        When you use own `display` function, this option obviosly has no effect.
        
        @property escape 
        @type boolean
        @since 1.5.0
        @default true
        **/
escape:!0,
//scope for external methods (e.g. source defined as function)
//for internal use only
scope:null,
//need to re-declare showbuttons here to get it's value from common config (passed only options existing in defaults)
showbuttons:!0},a.extend(a.fn.editabletypes,{abstractinput:b})}(window.jQuery),/**
List - abstract class for inputs that have source option loaded from js array or via ajax

@class list
@extends abstractinput
**/
function(a){"use strict";var b=function(a){};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){var b=a.Deferred();return this.error=null,this.onSourceReady(function(){this.renderList(),b.resolve()},function(){this.error=this.options.sourceError,b.resolve()}),b.promise()},html2value:function(a){return null},value2html:function(b,c,d,e){var f=a.Deferred(),g=function(){"function"==typeof d?
//custom display method
d.call(c,b,this.sourceData,e):this.value2htmlFinal(b,c),f.resolve()};
//for null value just call success without loading source
return null===b?g.call(this):this.onSourceReady(g,function(){f.resolve()}),f.promise()},
// ------------- additional functions ------------
onSourceReady:function(b,c){
//run source if it function
var d;
//if allready loaded just call success
if(a.isFunction(this.options.source)?(d=this.options.source.call(this.options.scope),this.sourceData=null):d=this.options.source,this.options.sourceCache&&a.isArray(this.sourceData))return void b.call(this);
//try parse json in single quotes (for double quotes jquery does automatically)
try{d=a.fn.editableutils.tryParseJson(d,!1)}catch(e){return void c.call(this)}
//loading from url
if("string"==typeof d){
//try to get sourceData from cache
if(this.options.sourceCache){var f,g=d;
//check for cached data
if(a(document).data(g)||a(document).data(g,{}),f=a(document).data(g),f.loading===!1&&f.sourceData)//take source from cache
return this.sourceData=f.sourceData,this.doPrepend(),void b.call(this);if(f.loading===!0)//cache is loading, put callback in stack to be called later
//also collecting error callbacks
return f.callbacks.push(a.proxy(function(){this.sourceData=f.sourceData,this.doPrepend(),b.call(this)},this)),void f.err_callbacks.push(a.proxy(c,this));//no cache yet, activate it
f.loading=!0,f.callbacks=[],f.err_callbacks=[]}
//ajaxOptions for source. Can be overwritten bt options.sourceOptions
var h=a.extend({url:d,type:"get",cache:!1,dataType:"json",success:a.proxy(function(d){f&&(f.loading=!1),this.sourceData=this.makeArray(d),a.isArray(this.sourceData)?(f&&(
//store result in cache
f.sourceData=this.sourceData,
//run success callbacks for other fields waiting for this source
a.each(f.callbacks,function(){this.call()})),this.doPrepend(),b.call(this)):(c.call(this),f&&
//run error callbacks for other fields waiting for this source
a.each(f.err_callbacks,function(){this.call()}))},this),error:a.proxy(function(){c.call(this),f&&(f.loading=!1,
//run error callbacks for other fields
a.each(f.err_callbacks,function(){this.call()}))},this)},this.options.sourceOptions);
//loading sourceData from server
a.ajax(h)}else//options as json/array
this.sourceData=this.makeArray(d),a.isArray(this.sourceData)?(this.doPrepend(),b.call(this)):c.call(this)},doPrepend:function(){null!==this.options.prepend&&void 0!==this.options.prepend&&(a.isArray(this.prependData)||(
//run prepend if it is function (once)
a.isFunction(this.options.prepend)&&(this.options.prepend=this.options.prepend.call(this.options.scope)),
//try parse json in single quotes
this.options.prepend=a.fn.editableutils.tryParseJson(this.options.prepend,!0),
//convert prepend from string to object
"string"==typeof this.options.prepend&&(this.options.prepend={"":this.options.prepend}),this.prependData=this.makeArray(this.options.prepend)),a.isArray(this.prependData)&&a.isArray(this.sourceData)&&(this.sourceData=this.prependData.concat(this.sourceData)))},/*
         renders input list
        */
renderList:function(){},/*
         set element's html by value
        */
value2htmlFinal:function(a,b){},/**
        * convert data to array suitable for sourceData, e.g. [{value: 1, text: 'abc'}, {...}]
        */
makeArray:function(b){var c,d,e,f,g=[];if(!b||"string"==typeof b)return null;if(a.isArray(b)){//array
/* 
                   function to iterate inside item of array if item is object.
                   Caclulates count of keys in item and store in obj. 
                */
f=function(a,b){if(d={value:a,text:b},c++>=2)return!1};for(var h=0;h<b.length;h++)e=b[h],"object"==typeof e?(c=0,//count of keys inside item
a.each(e,f),
//case: [{val1: 'text1'}, {val2: 'text2} ...]
1===c?g.push(d):c>1&&(
//removed check of existance: item.hasOwnProperty('value') && item.hasOwnProperty('text')
e.children&&(e.children=this.makeArray(e.children)),g.push(e))):
//case: ['text1', 'text2' ...]
g.push({value:e,text:e})}else//case: {val1: 'text1', val2: 'text2, ...}
a.each(b,function(a,b){g.push({value:a,text:b})});return g},option:function(a,b){this.options[a]=b,"source"===a&&(this.sourceData=null),"prepend"===a&&(this.prependData=null)}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{/**
        Source data for list.  
        If **array** - it should be in format: `[{value: 1, text: "text1"}, {value: 2, text: "text2"}, ...]`  
        For compability, object format is also supported: `{"1": "text1", "2": "text2" ...}` but it does not guarantee elements order.
        
        If **string** - considered ajax url to load items. In that case results will be cached for fields with the same source and name. See also `sourceCache` option.
          
        If **function**, it should return data in format above (since 1.4.0).
        
        Since 1.4.1 key `children` supported to render OPTGROUP (for **select** input only).  
        `[{text: "group1", children: [{value: 1, text: "text1"}, {value: 2, text: "text2"}]}, ...]` 

		
        @property source 
        @type string | array | object | function
        @default null
        **/
source:null,/**
        Data automatically prepended to the beginning of dropdown list.
        
        @property prepend 
        @type string | array | object | function
        @default false
        **/
prepend:!1,/**
        Error message when list cannot be loaded (e.g. ajax error)
        
        @property sourceError 
        @type string
        @default Error when loading list
        **/
sourceError:"Error when loading list",/**
        if <code>true</code> and source is **string url** - results will be cached for fields with the same source.    
        Usefull for editable column in grid to prevent extra requests.
        
        @property sourceCache 
        @type boolean
        @default true
        @since 1.2.0
        **/
sourceCache:!0,/**
        Additional ajax options to be used in $.ajax() when loading list from server.
        Useful to send extra parameters (`data` key) or change request method (`type` key).
        
        @property sourceOptions 
        @type object|function
        @default null
        @since 1.5.0
        **/
sourceOptions:null}),a.fn.editabletypes.list=b}(window.jQuery),/**
Text input

@class text
@extends abstractinput
@final
@example
<a href="#" id="username" data-type="text" data-pk="1">awesome</a>
<script>
$(function(){
    $('#username').editable({
        url: '/post',
        title: 'Enter username'
    });
});
</script>
**/
function(a){"use strict";var b=function(a){this.init("text",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.renderClear(),this.setClass(),this.setAttr("placeholder")},activate:function(){this.$input.is(":visible")&&(this.$input.focus(),a.fn.editableutils.setCursorPosition(this.$input.get(0),this.$input.val().length),this.toggleClear&&this.toggleClear())},
//render clear button
renderClear:function(){this.options.clear&&(this.$clear=a('<span class="editable-clear-x"></span>'),this.$input.after(this.$clear).css("padding-right",24).keyup(a.proxy(function(b){
//arrows, enter, tab, etc
if(!~a.inArray(b.keyCode,[40,38,9,13,27])){clearTimeout(this.t);var c=this;this.t=setTimeout(function(){c.toggleClear(b)},100)}},this)).parent().css("position","relative"),this.$clear.click(a.proxy(this.clear,this)))},postrender:function(){},
//show / hide clear button
toggleClear:function(a){if(this.$clear){var b=this.$input.val().length,c=this.$clear.is(":visible");b&&!c&&this.$clear.show(),!b&&c&&this.$clear.hide()}},clear:function(){this.$clear.hide(),this.$input.val("").focus()}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{/**
        @property tpl 
        @default <input type="text">
        **/
tpl:'<input type="text">',/**
        Placeholder attribute of input. Shown when input is empty.

        @property placeholder 
        @type string
        @default null
        **/
placeholder:null,/**
        Whether to show `clear` button 
        
        @property clear 
        @type boolean
        @default true        
        **/
clear:!0}),a.fn.editabletypes.text=b}(window.jQuery),/**
Textarea input

@class textarea
@extends abstractinput
@final
@example
<a href="#" id="comments" data-type="textarea" data-pk="1">awesome comment!</a>
<script>
$(function(){
    $('#comments').editable({
        url: '/post',
        title: 'Enter comments',
        rows: 10
    });
});
</script>
**/
function(a){"use strict";var b=function(a){this.init("textarea",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass(),this.setAttr("placeholder"),this.setAttr("rows"),
//ctrl + enter
this.$input.keydown(function(b){b.ctrlKey&&13===b.which&&a(this).closest("form").submit()})},
//using `white-space: pre-wrap` solves \n  <--> BR conversion very elegant!
/* 
       value2html: function(value, element) {
            var html = '', lines;
            if(value) {
                lines = value.split("\n");
                for (var i = 0; i < lines.length; i++) {
                    lines[i] = $('<div>').text(lines[i]).html();
                }
                html = lines.join('<br>');
            }
            $(element).html(html);
        },
       
        html2value: function(html) {
            if(!html) {
                return '';
            }

            var regex = new RegExp(String.fromCharCode(10), 'g');
            var lines = html.split(/<br\s*\/?>/i);
            for (var i = 0; i < lines.length; i++) {
                var text = $('<div>').html(lines[i]).text();

                // Remove newline characters (\n) to avoid them being converted by value2html() method
                // thus adding extra <br> tags
                text = text.replace(regex, '');

                lines[i] = text;
            }
            return lines.join("\n");
        },
         */
activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{/**
        @property tpl
        @default <textarea></textarea>
        **/
tpl:"<textarea></textarea>",/**
        @property inputclass
        @default input-large
        **/
inputclass:"input-large",/**
        Placeholder attribute of input. Shown when input is empty.

        @property placeholder
        @type string
        @default null
        **/
placeholder:null,/**
        Number of rows in textarea

        @property rows
        @type integer
        @default 7
        **/
rows:7}),a.fn.editabletypes.textarea=b}(window.jQuery),/**
Select (dropdown)

@class select
@extends list
@final
@example
<a href="#" id="status" data-type="select" data-pk="1" data-url="/post" data-title="Select status"></a>
<script>
$(function(){
    $('#status').editable({
        value: 2,    
        source: [
              {value: 1, text: 'Active'},
              {value: 2, text: 'Blocked'},
              {value: 3, text: 'Deleted'}
           ]
    });
});
</script>
**/
function(a){"use strict";var b=function(a){this.init("select",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.list),a.extend(b.prototype,{renderList:function(){this.$input.empty();var b=function(c,d){var e;if(a.isArray(d))for(var f=0;f<d.length;f++)e={},d[f].children?(e.label=d[f].text,c.append(b(a("<optgroup>",e),d[f].children))):(e.value=d[f].value,d[f].disabled&&(e.disabled=!0),c.append(a("<option>",e).text(d[f].text)));return c};b(this.$input,this.sourceData),this.setClass(),
//enter submit
this.$input.on("keydown.editable",function(b){13===b.which&&a(this).closest("form").submit()})},value2htmlFinal:function(b,c){var d="",e=a.fn.editableutils.itemsByValue(b,this.sourceData);e.length&&(d=e[0].text),
//$(element).text(text);
a.fn.editabletypes.abstractinput.prototype.value2html.call(this,d,c)},autosubmit:function(){this.$input.off("keydown.editable").on("change.editable",function(){a(this).closest("form").submit()})}}),b.defaults=a.extend({},a.fn.editabletypes.list.defaults,{/**
        @property tpl 
        @default <select></select>
        **/
tpl:"<select></select>"}),a.fn.editabletypes.select=b}(window.jQuery),/**
List of checkboxes. 
Internally value stored as javascript array of values.

@class checklist
@extends list
@final
@example
<a href="#" id="options" data-type="checklist" data-pk="1" data-url="/post" data-title="Select options"></a>
<script>
$(function(){
    $('#options').editable({
        value: [2, 3],    
        source: [
              {value: 1, text: 'option1'},
              {value: 2, text: 'option2'},
              {value: 3, text: 'option3'}
           ]
    });
});
</script>
**/
function(a){"use strict";var b=function(a){this.init("checklist",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.list),a.extend(b.prototype,{renderList:function(){var b;if(this.$tpl.empty(),a.isArray(this.sourceData)){for(var c=0;c<this.sourceData.length;c++)b=a("<label>").append(a("<input>",{type:"checkbox",value:this.sourceData[c].value})).append(a("<span>").text(" "+this.sourceData[c].text)),a("<div>").append(b).appendTo(this.$tpl);this.$input=this.$tpl.find('input[type="checkbox"]'),this.setClass()}},value2str:function(b){return a.isArray(b)?b.sort().join(a.trim(this.options.separator)):""},
//parse separated string
str2value:function(b){var c,d=null;return"string"==typeof b&&b.length?(c=new RegExp("\\s*"+a.trim(this.options.separator)+"\\s*"),d=b.split(c)):d=a.isArray(b)?b:[b],d},
//set checked on required checkboxes
value2input:function(b){this.$input.prop("checked",!1),a.isArray(b)&&b.length&&this.$input.each(function(c,d){var e=a(d);
// cannot use $.inArray as it performs strict comparison
a.each(b,function(a,b){/*jslint eqeq: true*/
e.val()==b&&/*jslint eqeq: false*/
e.prop("checked",!0)})})},input2value:function(){var b=[];return this.$input.filter(":checked").each(function(c,d){b.push(a(d).val())}),b},
//collect text of checked boxes
value2htmlFinal:function(b,c){var d=[],e=a.fn.editableutils.itemsByValue(b,this.sourceData),f=this.options.escape;e.length?(a.each(e,function(b,c){var e=f?a.fn.editableutils.escape(c.text):c.text;d.push(e)}),a(c).html(d.join("<br>"))):a(c).empty()},activate:function(){this.$input.first().focus()},autosubmit:function(){this.$input.on("keydown",function(b){13===b.which&&a(this).closest("form").submit()})}}),b.defaults=a.extend({},a.fn.editabletypes.list.defaults,{/**
        @property tpl 
        @default <div></div>
        **/
tpl:'<div class="editable-checklist"></div>',/**
        @property inputclass 
        @type string
        @default null
        **/
inputclass:null,/**
        Separator of values when reading from `data-value` attribute

        @property separator 
        @type string
        @default ','
        **/
separator:","}),a.fn.editabletypes.checklist=b}(window.jQuery),/**
HTML5 input types.
Following types are supported:

* password
* email
* url
* tel
* number
* range
* time

Learn more about html5 inputs:  
http://www.w3.org/wiki/HTML5_form_additions  
To check browser compatibility please see:  
https://developer.mozilla.org/en-US/docs/HTML/Element/Input
            
@class html5types 
@extends text
@final
@since 1.3.0
@example
<a href="#" id="email" data-type="email" data-pk="1">admin@example.com</a>
<script>
$(function(){
    $('#email').editable({
        url: '/post',
        title: 'Enter email'
    });
});
</script>
**/
/**
@property tpl 
@default depends on type
**/
/*
Password
*/
function(a){"use strict";var b=function(a){this.init("password",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),a.extend(b.prototype,{
//do not display password, show '[hidden]' instead
value2html:function(b,c){b?a(c).text("[hidden]"):a(c).empty()},
//as password not displayed, should not set value by html
html2value:function(a){return null}}),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="password">'}),a.fn.editabletypes.password=b}(window.jQuery),/*
Email
*/
function(a){"use strict";var b=function(a){this.init("email",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="email">'}),a.fn.editabletypes.email=b}(window.jQuery),/*
Url
*/
function(a){"use strict";var b=function(a){this.init("url",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="url">'}),a.fn.editabletypes.url=b}(window.jQuery),/*
Tel
*/
function(a){"use strict";var b=function(a){this.init("tel",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="tel">'}),a.fn.editabletypes.tel=b}(window.jQuery),/*
Number
*/
function(a){"use strict";var b=function(a){this.init("number",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.text),a.extend(b.prototype,{render:function(){b.superclass.render.call(this),this.setAttr("min"),this.setAttr("max"),this.setAttr("step")},postrender:function(){this.$clear&&
//increase right ffset  for up/down arrows
this.$clear.css({right:24})}}),b.defaults=a.extend({},a.fn.editabletypes.text.defaults,{tpl:'<input type="number">',inputclass:"input-mini",min:null,max:null,step:null}),a.fn.editabletypes.number=b}(window.jQuery),/*
Range (inherit from number)
*/
function(a){"use strict";var b=function(a){this.init("range",a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.number),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.filter("input"),this.setClass(),this.setAttr("min"),this.setAttr("max"),this.setAttr("step"),this.$input.on("input",function(){a(this).siblings("output").text(a(this).val())})},activate:function(){this.$input.focus()}}),b.defaults=a.extend({},a.fn.editabletypes.number.defaults,{tpl:'<input type="range"><output style="width: 30px; display: inline-block"></output>',inputclass:"input-medium"}),a.fn.editabletypes.range=b}(window.jQuery),/*
Time
*/
function(a){"use strict";var b=function(a){this.init("time",a,b.defaults)};
//inherit from abstract, as inheritance from text gives selection error.
a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass()}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{tpl:'<input type="time">'}),a.fn.editabletypes.time=b}(window.jQuery),/**
Select2 input. Based on amazing work of Igor Vaynberg https://github.com/ivaynberg/select2.  
Please see [original select2 docs](http://ivaynberg.github.com/select2) for detailed description and options.  
 
You should manually download and include select2 distributive:  

    <link href="select2/select2.css" rel="stylesheet" type="text/css"></link>  
    <script src="select2/select2.js"></script>  
    
To make it **bootstrap-styled** you can use css from [here](https://github.com/t0m/select2-bootstrap-css): 

    <link href="select2-bootstrap.css" rel="stylesheet" type="text/css"></link>    
    
**Note:** currently `autotext` feature does not work for select2 with `ajax` remote source.    
You need initially put both `data-value` and element's text youself:    

    <a href="#" data-type="select2" data-value="1">Text1</a>
    
    
@class select2
@extends abstractinput
@since 1.4.1
@final
@example
<a href="#" id="country" data-type="select2" data-pk="1" data-value="ru" data-url="/post" data-title="Select country"></a>
<script>
$(function(){
    //local source
    $('#country').editable({
        source: [
              {id: 'gb', text: 'Great Britain'},
              {id: 'us', text: 'United States'},
              {id: 'ru', text: 'Russia'}
           ],
        select2: {
           multiple: true
        }
    });
    //remote source (simple)
    $('#country').editable({
        source: '/getCountries',
        select2: {
            placeholder: 'Select Country',
            minimumInputLength: 1
        }
    });
    //remote source (advanced)
    $('#country').editable({
        select2: {
            placeholder: 'Select Country',
            allowClear: true,
            minimumInputLength: 3,
            id: function (item) {
                return item.CountryId;
            },
            ajax: {
                url: '/getCountries',
                dataType: 'json',
                data: function (term, page) {
                    return { query: term };
                },
                results: function (data, page) {
                    return { results: data };
                }
            },
            formatResult: function (item) {
                return item.CountryName;
            },
            formatSelection: function (item) {
                return item.CountryName;
            },
            initSelection: function (element, callback) {
                return $.get('/getCountryById', { query: element.val() }, function (data) {
                    callback(data);
                });
            } 
        }  
    });
});
</script>
**/
function(a){"use strict";var b=function(c){
//if not `tags` mode, use source
if(this.init("select2",c,b.defaults),c.select2=c.select2||{},this.sourceData=null,
//placeholder
c.placeholder&&(c.select2.placeholder=c.placeholder),!c.select2.tags&&c.source){var d=c.source;
//if source is function, call it (once!)
a.isFunction(c.source)&&(d=c.source.call(c.scope)),"string"==typeof d?(c.select2.ajax=c.select2.ajax||{},
//some default ajax params
c.select2.ajax.data||(c.select2.ajax.data=function(a){return{query:a}}),c.select2.ajax.results||(c.select2.ajax.results=function(a){return{results:a}}),c.select2.ajax.url=d):(
//check format and convert x-editable format to select2 format (if needed)
this.sourceData=this.convertSource(d),c.select2.data=this.sourceData)}if(
//overriding objects in config (as by default jQuery extend() is not recursive)
this.options.select2=a.extend({},b.defaults.select2,c.select2),
//detect whether it is multi-valued
this.isMultiple=this.options.select2.tags||this.options.select2.multiple,this.isRemote="ajax"in this.options.select2,
//store function returning ID of item
//should be here as used inautotext for local source
this.idFunc=this.options.select2.id,"function"!=typeof this.idFunc){var e=this.idFunc||"id";this.idFunc=function(a){return a[e]}}
//store function that renders text in select2
this.formatSelection=this.options.select2.formatSelection,"function"!=typeof this.formatSelection&&(this.formatSelection=function(a){return a.text})};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.setClass(),
//can not apply select2 here as it calls initSelection 
//over input that does not have correct value yet.
//apply select2 only in value2input
//this.$input.select2(this.options.select2);
//when data is loaded via ajax, we need to know when it's done to populate listData
this.isRemote&&
//listen to loaded event to populate data
this.$input.on("select2-loaded",a.proxy(function(a){this.sourceData=a.items.results},this)),
//trigger resize of editableform to re-position container in multi-valued mode
this.isMultiple&&this.$input.on("change",function(){a(this).closest("form").parent().triggerHandler("resize")})},value2html:function(c,d){var e,f="",g=this;this.options.select2.tags?//in tags mode just assign value
e=c:this.sourceData&&(e=a.fn.editableutils.itemsByValue(c,this.sourceData,this.idFunc)),
//data may be array (when multiple values allowed)
a.isArray(e)?(
//collect selected data and show with separator
f=[],a.each(e,function(a,b){f.push(b&&"object"==typeof b?g.formatSelection(b):b)})):e&&(f=g.formatSelection(e)),f=a.isArray(f)?f.join(this.options.viewseparator):f,
//$(element).text(text);
b.superclass.value2html.call(this,f,d)},html2value:function(a){return this.options.select2.tags?this.str2value(a,this.options.viewseparator):null},value2input:function(b){
// if defined remote source AND no multiple mode AND no user's initSelection provided --> 
// we should somehow get text for provided id.
// The solution is to use element's text as text for that id (exclude empty)
if(
// if value array => join it anyway
a.isArray(b)&&(b=b.join(this.getSeparator())),
//for remote source just set value, text is updated by initSelection
this.$input.data("select2")?
//second argument needed to separate initial change from user's click (for autosubmit)   
this.$input.val(b).trigger("change",!0):(this.$input.val(b),this.$input.select2(this.options.select2)),this.isRemote&&!this.isMultiple&&!this.options.select2.initSelection){
// customId and customText are methods to extract `id` and `text` from data object
// we can use this workaround only if user did not define these methods
// otherwise we cant construct data object
var c=this.options.select2.id,d=this.options.select2.formatSelection;if(!c&&!d){var e=a(this.options.scope);if(!e.data("editable").isEmpty){var f={id:b,text:e.text()};this.$input.select2("data",f)}}}},input2value:function(){return this.$input.select2("val")},str2value:function(b,c){if("string"!=typeof b||!this.isMultiple)return b;c=c||this.getSeparator();var d,e,f;if(null===b||b.length<1)return null;for(d=b.split(c),e=0,f=d.length;e<f;e+=1)d[e]=a.trim(d[e]);return d},autosubmit:function(){this.$input.on("change",function(b,c){c||a(this).closest("form").submit()})},getSeparator:function(){return this.options.select2.separator||a.fn.select2.defaults.separator},/*
        Converts source from x-editable format: {value: 1, text: "1"} to
        select2 format: {id: 1, text: "1"}
        */
convertSource:function(b){if(a.isArray(b)&&b.length&&void 0!==b[0].value)for(var c=0;c<b.length;c++)void 0!==b[c].value&&(b[c].id=b[c].value,delete b[c].value);return b},destroy:function(){this.$input.data("select2")&&this.$input.select2("destroy")}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{/**
        @property tpl 
        @default <input type="hidden">
        **/
tpl:'<input type="hidden">',/**
        Configuration of select2. [Full list of options](http://ivaynberg.github.com/select2).

        @property select2 
        @type object
        @default null
        **/
select2:null,/**
        Placeholder attribute of select

        @property placeholder 
        @type string
        @default null
        **/
placeholder:null,/**
        Source data for select. It will be assigned to select2 `data` property and kept here just for convenience.
        Please note, that format is different from simple `select` input: use 'id' instead of 'value'.
        E.g. `[{id: 1, text: "text1"}, {id: 2, text: "text2"}, ...]`.

        @property source 
        @type array|string|function
        @default null        
        **/
source:null,/**
        Separator used to display tags.

        @property viewseparator 
        @type string
        @default ', '        
        **/
viewseparator:", "}),a.fn.editabletypes.select2=b}(window.jQuery),/**
* Combodate - 1.0.5
* Dropdown date and time picker.
* Converts text input into dropdowns to pick day, month, year, hour, minute and second.
* Uses momentjs as datetime library http://momentjs.com.
* For i18n include corresponding file from https://github.com/timrwood/moment/tree/master/lang 
*
* Confusion at noon and midnight - see http://en.wikipedia.org/wiki/12-hour_clock#Confusion_at_noon_and_midnight
* In combodate: 
* 12:00 pm --> 12:00 (24-h format, midday)
* 12:00 am --> 00:00 (24-h format, midnight, start of day)
* 
* Differs from momentjs parse rules:
* 00:00 pm, 12:00 pm --> 12:00 (24-h format, day not change)
* 00:00 am, 12:00 am --> 00:00 (24-h format, day not change)
* 
* 
* Author: Vitaliy Potapov
* Project page: http://github.com/vitalets/combodate
* Copyright (c) 2012 Vitaliy Potapov. Released under MIT License.
**/
function(a){var b=function(b,c){return this.$element=a(b),this.$element.is("input")?(this.options=a.extend({},a.fn.combodate.defaults,c,this.$element.data()),void this.init()):void a.error("Combodate should be applied to INPUT element")};b.prototype={constructor:b,init:function(){this.map={
//key   regexp    moment.method
day:["D","date"],month:["M","month"],year:["Y","year"],hour:["[Hh]","hours"],minute:["m","minutes"],second:["s","seconds"],ampm:["[Aa]",""]},this.$widget=a('<span class="combodate"></span>').html(this.getTemplate()),this.initCombos(),
//update original input on change 
this.$widget.on("change","select",a.proxy(function(b){this.$element.val(this.getValue()).change(),
// update days count if month or year changes
this.options.smartDays&&(a(b.target).is(".month")||a(b.target).is(".year"))&&this.fillCombo("day")},this)),this.$widget.find("select").css("width","auto"),
// hide original input and insert widget                                       
this.$element.hide().after(this.$widget),
// set initial value
this.setValue(this.$element.val()||this.options.value)},/*
         Replace tokens in template with <select> elements 
        */
getTemplate:function(){var b=this.options.template;
//first pass
//replace spaces with &nbsp;
//second pass
return a.each(this.map,function(a,c){c=c[0];var d=new RegExp(c+"+"),e=c.length>1?c.substring(1,2):c;b=b.replace(d,"{"+e+"}")}),b=b.replace(/ /g,"&nbsp;"),a.each(this.map,function(a,c){c=c[0];var d=c.length>1?c.substring(1,2):c;b=b.replace("{"+d+"}",'<select class="'+a+'"></select>')}),b},/*
         Initialize combos that presents in template 
        */
initCombos:function(){for(var a in this.map){var b=this.$widget.find("."+a);
// set properties like this.$day, this.$month etc.
this["$"+a]=b.length?b:null,
// fill with items
this.fillCombo(a)}},/*
         Fill combo with items 
        */
fillCombo:function(a){var b=this["$"+a];if(b){
// define method name to fill items, e.g `fillDays`
var c="fill"+a.charAt(0).toUpperCase()+a.slice(1),d=this[c](),e=b.val();b.empty();for(var f=0;f<d.length;f++)b.append('<option value="'+d[f][0]+'">'+d[f][1]+"</option>");b.val(e)}},/*
         Initialize items of combos. Handles `firstItem` option 
        */
fillCommon:function(a){var b,c=[];if("name"===this.options.firstItem){
//need both to support moment ver < 2 and  >= 2
b=moment.relativeTime||moment.langData()._relativeTime;var d="function"==typeof b[a]?b[a](1,!0,a,!1):b[a];
//take last entry (see momentjs lang files structure) 
d=d.split(" ").reverse()[0],c.push(["",d])}else"empty"===this.options.firstItem&&c.push(["",""]);return c},/*
        fill day
        */
fillDay:function(){var a,b,c=this.fillCommon("d"),d=this.options.template.indexOf("DD")!==-1,e=31;
// detect days count (depends on month and year)
// originally https://github.com/vitalets/combodate/pull/7
if(this.options.smartDays&&this.$month&&this.$year){var f=parseInt(this.$month.val(),10),g=parseInt(this.$year.val(),10);isNaN(f)||isNaN(g)||(e=moment([g,f]).daysInMonth())}for(b=1;b<=e;b++)a=d?this.leadZero(b):b,c.push([b,a]);return c},/*
        fill month
        */
fillMonth:function(){var a,b,c=this.fillCommon("M"),d=this.options.template.indexOf("MMMM")!==-1,e=this.options.template.indexOf("MMM")!==-1,f=this.options.template.indexOf("MM")!==-1;for(b=0;b<=11;b++)
//see https://github.com/timrwood/momentjs.com/pull/36
a=d?moment().date(1).month(b).format("MMMM"):e?moment().date(1).month(b).format("MMM"):f?this.leadZero(b+1):b+1,c.push([b,a]);return c},/*
        fill year
        */
fillYear:function(){var a,b,c=[],d=this.options.template.indexOf("YYYY")!==-1;for(b=this.options.maxYear;b>=this.options.minYear;b--)a=d?b:(b+"").substring(2),c[this.options.yearDescending?"push":"unshift"]([b,a]);return c=this.fillCommon("y").concat(c)},/*
        fill hour
        */
fillHour:function(){var a,b,c=this.fillCommon("h"),d=this.options.template.indexOf("h")!==-1,e=(this.options.template.indexOf("H")!==-1,this.options.template.toLowerCase().indexOf("hh")!==-1),f=d?1:0,g=d?12:23;for(b=f;b<=g;b++)a=e?this.leadZero(b):b,c.push([b,a]);return c},/*
        fill minute
        */
fillMinute:function(){var a,b,c=this.fillCommon("m"),d=this.options.template.indexOf("mm")!==-1;for(b=0;b<=59;b+=this.options.minuteStep)a=d?this.leadZero(b):b,c.push([b,a]);return c},/*
        fill second
        */
fillSecond:function(){var a,b,c=this.fillCommon("s"),d=this.options.template.indexOf("ss")!==-1;for(b=0;b<=59;b+=this.options.secondStep)a=d?this.leadZero(b):b,c.push([b,a]);return c},/*
        fill ampm
        */
fillAmpm:function(){var a=this.options.template.indexOf("a")!==-1,b=(this.options.template.indexOf("A")!==-1,[["am",a?"am":"AM"],["pm",a?"pm":"PM"]]);return b},/*
         Returns current date value from combos. 
         If format not specified - `options.format` used.
         If format = `null` - Moment object returned.
        */
getValue:function(b){var c,d={},e=this,f=!1;
//if at least one visible combo not selected - return empty string
//getting selected values    
//if at least one visible combo not selected - return empty string
//convert hours 12h --> 24h 
//12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
//highlight invalid date
return a.each(this.map,function(a,b){if("ampm"!==a){var c="day"===a?1:0;return d[a]=e["$"+a]?parseInt(e["$"+a].val(),10):c,isNaN(d[a])?(f=!0,!1):void 0}}),f?"":(this.$ampm&&(12===d.hour?d.hour="am"===this.$ampm.val()?0:12:d.hour="am"===this.$ampm.val()?d.hour:d.hour+12),c=moment([d.year,d.month,d.day,d.hour,d.minute,d.second]),this.highlight(c),b=void 0===b?this.options.format:b,null===b?c.isValid()?c:null:c.isValid()?c.format(b):"")},setValue:function(b){
//function to find nearest value in select options
function c(b,c){var d={};return b.children("option").each(function(b,e){var f,g=a(e).attr("value");""!==g&&(f=Math.abs(g-c),("undefined"==typeof d.distance||f<d.distance)&&(d={value:g,distance:f}))}),d.value}if(b){var d="string"==typeof b?moment(b,this.options.format):moment(b),e=this,f={};d.isValid()&&(
//read values from date object
a.each(this.map,function(a,b){"ampm"!==a&&(f[a]=d[b[1]]())}),this.$ampm&&(
//12:00 pm --> 12:00 (24-h format, midday), 12:00 am --> 00:00 (24-h format, midnight, start of day)
f.hour>=12?(f.ampm="pm",f.hour>12&&(f.hour-=12)):(f.ampm="am",0===f.hour&&(f.hour=12))),a.each(f,function(a,b){
//call val() for each existing combo, e.g. this.$hour.val()
e["$"+a]&&("minute"===a&&e.options.minuteStep>1&&e.options.roundTime&&(b=c(e["$"+a],b)),"second"===a&&e.options.secondStep>1&&e.options.roundTime&&(b=c(e["$"+a],b)),e["$"+a].val(b))}),
// update days count
this.options.smartDays&&this.fillCombo("day"),this.$element.val(d.format(this.options.format)).change())}},/*
         highlight combos if date is invalid
        */
highlight:function(a){a.isValid()?this.options.errorClass?this.$widget.removeClass(this.options.errorClass):this.$widget.find("select").css("border-color",this.borderColor):this.options.errorClass?this.$widget.addClass(this.options.errorClass):(
//store original border color
this.borderColor||(this.borderColor=this.$widget.find("select").css("border-color")),this.$widget.find("select").css("border-color","red"))},leadZero:function(a){return a<=9?"0"+a:a},destroy:function(){this.$widget.remove(),this.$element.removeData("combodate").show()}},a.fn.combodate=function(c){var d,e=Array.apply(null,arguments);
//getValue returns date as string / object (not jQuery object)
//getValue returns date as string / object (not jQuery object)
return e.shift(),"getValue"===c&&this.length&&(d=this.eq(0).data("combodate"))?d.getValue.apply(d,e):this.each(function(){var d=a(this),f=d.data("combodate"),g="object"==typeof c&&c;f||d.data("combodate",f=new b(this,g)),"string"==typeof c&&"function"==typeof f[c]&&f[c].apply(f,e)})},a.fn.combodate.defaults={
//in this format value stored in original input
format:"DD-MM-YYYY HH:mm",
//in this format items in dropdowns are displayed
template:"D / MMM / YYYY   H : mm",
//initial value, can be `new Date()`    
value:null,minYear:1970,maxYear:2015,yearDescending:!0,minuteStep:5,secondStep:1,firstItem:"empty",//'name', 'empty', 'none'
errorClass:null,roundTime:!0,// whether to round minutes and seconds if step > 1
smartDays:!1}}(window.jQuery),/**
Combodate input - dropdown date and time picker.    
Based on [combodate](http://vitalets.github.com/combodate) plugin (included). To use it you should manually include [momentjs](http://momentjs.com).

    <script src="js/moment.min.js"></script>
   
Allows to input:

* only date
* only time 
* both date and time  

Please note, that format is taken from momentjs and **not compatible** with bootstrap-datepicker / jquery UI datepicker.  
Internally value stored as `momentjs` object. 

@class combodate
@extends abstractinput
@final
@since 1.4.0
@example
<a href="#" id="dob" data-type="combodate" data-pk="1" data-url="/post" data-value="1984-05-15" data-title="Select date"></a>
<script>
$(function(){
    $('#dob').editable({
        format: 'YYYY-MM-DD',    
        viewformat: 'DD.MM.YYYY',    
        template: 'D / MMMM / YYYY',    
        combodate: {
                minYear: 2000,
                maxYear: 2015,
                minuteStep: 1
           }
        }
    });
});
</script>
**/
/*global moment*/
function(a){"use strict";var b=function(c){this.init("combodate",c,b.defaults),
//by default viewformat equals to format
this.options.viewformat||(this.options.viewformat=this.options.format),
//try parse combodate config defined as json string in data-combodate
c.combodate=a.fn.editableutils.tryParseJson(c.combodate,!0),
//overriding combodate config (as by default jQuery extend() is not recursive)
this.options.combodate=a.extend({},b.defaults.combodate,c.combodate,{format:this.options.format,template:this.options.template})};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{render:function(){this.$input.combodate(this.options.combodate),"bs3"===a.fn.editableform.engine&&this.$input.siblings().find("select").addClass("form-control"),this.options.inputclass&&this.$input.siblings().find("select").addClass(this.options.inputclass)},value2html:function(a,c){var d=a?a.format(this.options.viewformat):"";
//$(element).text(text);
b.superclass.value2html.call(this,d,c)},html2value:function(a){return a?moment(a,this.options.viewformat):null},value2str:function(a){return a?a.format(this.options.format):""},str2value:function(a){return a?moment(a,this.options.format):null},value2submit:function(a){return this.value2str(a)},value2input:function(a){this.$input.combodate("setValue",a)},input2value:function(){return this.$input.combodate("getValue",null)},activate:function(){this.$input.siblings(".combodate").find("select").eq(0).focus()},/*
       clear:  function() {
          this.$input.data('datepicker').date = null;
          this.$input.find('.active').removeClass('active');
       },
       */
autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{/**
        @property tpl 
        @default <input type="text">
        **/
tpl:'<input type="text">',/**
        @property inputclass 
        @default null
        **/
inputclass:null,/**
        Format used for sending value to server. Also applied when converting date from <code>data-value</code> attribute.<br>
        See list of tokens in [momentjs docs](http://momentjs.com/docs/#/parsing/string-format)  
        
        @property format 
        @type string
        @default YYYY-MM-DD
        **/
format:"YYYY-MM-DD",/**
        Format used for displaying date. Also applied when converting date from element's text on init.   
        If not specified equals to `format`.
        
        @property viewformat 
        @type string
        @default null
        **/
viewformat:null,/**
        Template used for displaying dropdowns.
        
        @property template 
        @type string
        @default D / MMM / YYYY
        **/
template:"D / MMM / YYYY",/**
        Configuration of combodate.
        Full list of options: http://vitalets.github.com/combodate/#docs
        
        @property combodate 
        @type object
        @default null
        **/
combodate:null}),a.fn.editabletypes.combodate=b}(window.jQuery),/*
Editableform based on Twitter Bootstrap 3
*/
function(a){"use strict";
//store parent methods
var b=a.fn.editableform.Constructor.prototype.initInput;a.extend(a.fn.editableform.Constructor.prototype,{initTemplate:function(){this.$form=a(a.fn.editableform.template),this.$form.find(".control-group").addClass("form-group"),this.$form.find(".editable-error-block").addClass("help-block")},initInput:function(){b.apply(this);
//for bs3 set default class `input-sm` to standard inputs
var c=null===this.input.options.inputclass||this.input.options.inputclass===!1,d="input-sm",e="text,select,textarea,password,email,url,tel,number,range,time,typeaheadjs".split(",");~a.inArray(this.input.type,e)&&(this.input.$input.addClass("form-control"),c&&(this.input.options.inputclass=d,this.input.$input.addClass(d)));for(var f=this.$form.find(".editable-buttons"),g=c?[d]:this.input.options.inputclass.split(" "),h=0;h<g.length;h++)
// `btn-sm` is default now
/*
                if(classes[i].toLowerCase() === 'input-sm') { 
                    $btn.find('button').addClass('btn-sm');  
                }
                */
"input-lg"===g[h].toLowerCase()&&f.find("button").removeClass("btn-sm").addClass("btn-lg")}}),
//buttons
a.fn.editableform.buttons='<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="glyphicon glyphicon-ok"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="glyphicon glyphicon-remove"></i></button>',
//error classes
a.fn.editableform.errorGroupClass="has-error",a.fn.editableform.errorBlockClass=null,
//engine
a.fn.editableform.engine="bs3"}(window.jQuery),/**
* Editable Popover3 (for Bootstrap 3) 
* ---------------------
* requires bootstrap-popover.js
*/
function(a){"use strict";
//extend methods
a.extend(a.fn.editableContainer.Popup.prototype,{containerName:"popover",containerDataName:"bs.popover",innerCss:".popover-content",defaults:a.fn.popover.Constructor.DEFAULTS,initContainer:function(){a.extend(this.containerOptions,{trigger:"manual",selector:!1,content:" ",template:this.defaults.template});
//as template property is used in inputs, hide it from popover
var b;this.$element.data("template")&&(b=this.$element.data("template"),this.$element.removeData("template")),this.call(this.containerOptions),b&&
//restore data('template')
this.$element.data("template",b)},/* show */
innerShow:function(){this.call("show")},/* hide */
innerHide:function(){this.call("hide")},/* destroy */
innerDestroy:function(){this.call("destroy")},setContainerOption:function(a,b){this.container().options[a]=b},/**
        * move popover to new position. This function mainly copied from bootstrap-popover.
        */
/*jshint laxcomma: true, eqeqeq: false*/
setPosition:function(){(function(){/*    
                var $tip = this.tip()
                , inside
                , pos
                , actualWidth
                , actualHeight
                , placement
                , tp
                , tpt
                , tpb
                , tpl
                , tpr;

                placement = typeof this.options.placement === 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                this.options.placement;

                inside = /in/.test(placement);
               
                $tip
              //  .detach()
              //vitalets: remove any placement class because otherwise they dont influence on re-positioning of visible popover
                .removeClass('top right bottom left')
                .css({ top: 0, left: 0, display: 'block' });
              //  .insertAfter(this.$element);
               
                pos = this.getPosition(inside);

                actualWidth = $tip[0].offsetWidth;
                actualHeight = $tip[0].offsetHeight;

                placement = inside ? placement.split(' ')[1] : placement;

                tpb = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2};
                tpt = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2};
                tpl = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth};
                tpr = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width};

                switch (placement) {
                    case 'bottom':
                        if ((tpb.top + actualHeight) > ($(window).scrollTop() + $(window).height())) {
                            if (tpt.top > $(window).scrollTop()) {
                                placement = 'top';
                            } else if ((tpr.left + actualWidth) < ($(window).scrollLeft() + $(window).width())) {
                                placement = 'right';
                            } else if (tpl.left > $(window).scrollLeft()) {
                                placement = 'left';
                            } else {
                                placement = 'right';
                            }
                        }
                        break;
                    case 'top':
                        if (tpt.top < $(window).scrollTop()) {
                            if ((tpb.top + actualHeight) < ($(window).scrollTop() + $(window).height())) {
                                placement = 'bottom';
                            } else if ((tpr.left + actualWidth) < ($(window).scrollLeft() + $(window).width())) {
                                placement = 'right';
                            } else if (tpl.left > $(window).scrollLeft()) {
                                placement = 'left';
                            } else {
                                placement = 'right';
                            }
                        }
                        break;
                    case 'left':
                        if (tpl.left < $(window).scrollLeft()) {
                            if ((tpr.left + actualWidth) < ($(window).scrollLeft() + $(window).width())) {
                                placement = 'right';
                            } else if (tpt.top > $(window).scrollTop()) {
                                placement = 'top';
                            } else if (tpt.top > $(window).scrollTop()) {
                                placement = 'bottom';
                            } else {
                                placement = 'right';
                            }
                        }
                        break;
                    case 'right':
                        if ((tpr.left + actualWidth) > ($(window).scrollLeft() + $(window).width())) {
                            if (tpl.left > $(window).scrollLeft()) {
                                placement = 'left';
                            } else if (tpt.top > $(window).scrollTop()) {
                                placement = 'top';
                            } else if (tpt.top > $(window).scrollTop()) {
                                placement = 'bottom';
                            }
                        }
                        break;
                }

                switch (placement) {
                    case 'bottom':
                        tp = tpb;
                        break;
                    case 'top':
                        tp = tpt;
                        break;
                    case 'left':
                        tp = tpl;
                        break;
                    case 'right':
                        tp = tpr;
                        break;
                }

                $tip
                .offset(tp)
                .addClass(placement)
                .addClass('in');
           */
var a=this.tip(),b="function"==typeof this.options.placement?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,c=/\s?auto?\s?/i,d=c.test(b);d&&(b=b.replace(c,"")||"top");var e=this.getPosition(),f=a[0].offsetWidth,g=a[0].offsetHeight;if(d){var h=this.$element.parent(),i=b,j=document.documentElement.scrollTop||document.body.scrollTop,k="body"==this.options.container?window.innerWidth:h.outerWidth(),l="body"==this.options.container?window.innerHeight:h.outerHeight(),m="body"==this.options.container?0:h.offset().left;b="bottom"==b&&e.top+e.height+g-j>l?"top":"top"==b&&e.top-j-g<0?"bottom":"right"==b&&e.right+f>k?"left":"left"==b&&e.left-f<m?"right":b,a.removeClass(i).addClass(b)}var n=this.getCalculatedOffset(b,e,f,g);this.applyPlacement(n,b)}).call(this.container())}})}(window.jQuery),/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
function(a){function b(){return new Date(Date.UTC.apply(Date,arguments))}function c(b,c){
// Derive options from element data-attrs
var d,e=a(b).data(),f={},g=new RegExp("^"+c.toLowerCase()+"([A-Z])"),c=new RegExp("^"+c.toLowerCase());for(var h in e)c.test(h)&&(d=h.replace(g,function(a,b){return b.toLowerCase()}),f[d]=e[h]);return f}function d(b){
// Derive options from locale plugins
var c={};
// Check if "de-DE" style date is available, if not language should
// fallback to 2 letter code eg "de"
if(k[b]||(b=b.split("-")[0],k[b])){var d=k[b];return a.each(j,function(a,b){b in d&&(c[b]=d[b])}),c}}
// Picker object
var e=function(b,c){this._process_options(c),this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=!!this.element.is(".date")&&this.element.find(".add-on, .btn"),this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(l.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this.o.startDate),this.setEndDate(this.o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};e.prototype={constructor:e,_process_options:function(b){
// Store raw options for reference
this._o=a.extend({},this._o,b);
// Processed options
var c=this.o=a.extend({},this._o),d=c.language;switch(k[d]||(d=d.split("-")[0],k[d]||(d=i.language)),c.language=d,c.startView){case 2:case"decade":c.startView=2;break;case 1:case"year":c.startView=1;break;default:c.startView=0}switch(c.minViewMode){case 1:case"months":c.minViewMode=1;break;case 2:case"years":c.minViewMode=2;break;default:c.minViewMode=0}c.startView=Math.max(c.startView,c.minViewMode),c.weekStart%=7,c.weekEnd=(c.weekStart+6)%7;var e=l.parseFormat(c.format);c.startDate!==-(1/0)&&(c.startDate=l.parseDate(c.startDate,e,c.language)),c.endDate!==1/0&&(c.endDate=l.parseDate(c.endDate,e,c.language)),c.daysOfWeekDisabled=c.daysOfWeekDisabled||[],a.isArray(c.daysOfWeekDisabled)||(c.daysOfWeekDisabled=c.daysOfWeekDisabled.split(/[,\s]*/)),c.daysOfWeekDisabled=a.map(c.daysOfWeekDisabled,function(a){return parseInt(a,10)})},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var b,c,d=0;d<a.length;d++)b=a[d][0],c=a[d][1],b.on(c)},_unapplyEvents:function(a){for(var b,c,d=0;d<a.length;d++)b=a[d][0],c=a[d][1],b.off(c)},_buildEvents:function(){this.isInput?// single input
this._events=[[this.element,{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}]]:this.component&&this.hasInput?// component: input + button
this._events=[
// For components that are not readonly, allow keyboard nav
[this.element.find("input"),{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?// inline datepicker
this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){
// Clicked outside the datepicker, hide it
this.element.is(a.target)||this.element.find(a.target).size()||this.picker.is(a.target)||this.picker.find(a.target).size()||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.date,e=new Date(d.getTime()+6e4*d.getTimezoneOffset());this.element.trigger({type:b,date:e,format:a.proxy(function(a){var b=a||this.o.format;return l.formatDate(d,b,this.o.language)},this)})},show:function(a){this.isInline||this.picker.appendTo("body"),this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),this._attachSecondaryEvents(),a&&a.preventDefault(),this._trigger("show")},hide:function(a){this.isInline||this.picker.is(":visible")&&(this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"))},remove:function(){this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date},getDate:function(){var a=this.getUTCDate();return new Date(a.getTime()+6e4*a.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(a){this.setUTCDate(new Date(a.getTime()-6e4*a.getTimezoneOffset()))},setUTCDate:function(a){this.date=a,this.setValue()},setValue:function(){var a=this.getFormattedDate();this.isInput?this.element.val(a):this.component&&this.element.find("input").val(a)},getFormattedDate:function(a){return void 0===a&&(a=this.o.format),l.formatDate(this.date,a,this.o.language)},setStartDate:function(a){this._process_options({startDate:a}),this.update(),this.updateNavArrows()},setEndDate:function(a){this._process_options({endDate:a}),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(a){this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var b=parseInt(this.element.parents().filter(function(){return"auto"!=a(this).css("z-index")}).first().css("z-index"))+10,c=this.component?this.component.parent().offset():this.element.offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!0);this.picker.css({top:c.top+d,left:c.left,zIndex:b})}},_allow_update:!0,update:function(){if(this._allow_update){var a,b=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(a=arguments[0],b=!0):(a=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),delete this.element.data().date),this.date=l.parseDate(a,this.o.format,this.o.language),b&&this.setValue(),this.date<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.date>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=new Date(this.date),this.fill()}},fillDow:function(){var a=this.o.weekStart,b="<tr>";if(this.o.calendarWeeks){var c='<th class="cw">&nbsp;</th>';b+=c,this.picker.find(".datepicker-days thead tr:first-child").prepend(c)}for(;a<this.o.weekStart+7;)b+='<th class="dow">'+k[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;b<12;)a+='<span class="month">'+k[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=this.date.valueOf(),g=new Date;
// Compare internal UTC date with local today, not UTC today
return b.getUTCFullYear()<d||b.getUTCFullYear()==d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()==d&&b.getUTCMonth()>e)&&c.push("new"),this.o.todayHighlight&&b.getUTCFullYear()==g.getFullYear()&&b.getUTCMonth()==g.getMonth()&&b.getUTCDate()==g.getDate()&&c.push("today"),f&&b.valueOf()==f&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)!==-1)&&c.push("disabled"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),a.inArray(b.valueOf(),this.range)!=-1&&c.push("selected")),c},fill:function(){var c,d=new Date(this.viewDate),e=d.getUTCFullYear(),f=d.getUTCMonth(),g=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),h=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),i=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,j=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0;this.date&&this.date.valueOf();this.picker.find(".datepicker-days thead th.datepicker-switch").text(k[this.o.language].months[f]+" "+e),this.picker.find("tfoot th.today").text(k[this.o.language].today).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot th.clear").text(k[this.o.language].clear).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var m=b(e,f-1,28,0,0,0,0),n=l.getDaysInMonth(m.getUTCFullYear(),m.getUTCMonth());m.setUTCDate(n),m.setUTCDate(n-(m.getUTCDay()-this.o.weekStart+7)%7);var o=new Date(m);o.setUTCDate(o.getUTCDate()+42),o=o.valueOf();for(var p,q=[];m.valueOf()<o;){if(m.getUTCDay()==this.o.weekStart&&(q.push("<tr>"),this.o.calendarWeeks)){
// ISO 8601: First week contains first thursday.
// ISO also states week starts on Monday, but we can be more abstract here.
var
// Start of current week: based on weekstart/current date
r=new Date(+m+(this.o.weekStart-m.getUTCDay()-7)%7*864e5),
// Thursday of this week
s=new Date(+r+(11-r.getUTCDay())%7*864e5),
// First Thursday of year, year from thursday
t=new Date(+(t=b(s.getUTCFullYear(),0,1))+(11-t.getUTCDay())%7*864e5),
// Calendar week: ms between thursdays, div ms per day, div 7 days
u=(s-t)/864e5/7+1;q.push('<td class="cw">'+u+"</td>")}p=this.getClassNames(m),p.push("day");var v=this.o.beforeShowDay(m);void 0===v?v={}:"boolean"==typeof v?v={enabled:v}:"string"==typeof v&&(v={classes:v}),v.enabled===!1&&p.push("disabled"),v.classes&&(p=p.concat(v.classes.split(/\s+/))),v.tooltip&&(c=v.tooltip),p=a.unique(p),q.push('<td class="'+p.join(" ")+'"'+(c?' title="'+c+'"':"")+">"+m.getUTCDate()+"</td>"),m.getUTCDay()==this.o.weekEnd&&q.push("</tr>"),m.setUTCDate(m.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(q.join(""));var w=this.date&&this.date.getUTCFullYear(),x=this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");w&&w==e&&x.eq(this.date.getUTCMonth()).addClass("active"),(e<g||e>i)&&x.addClass("disabled"),e==g&&x.slice(0,h).addClass("disabled"),e==i&&x.slice(j+1).addClass("disabled"),q="",e=10*parseInt(e/10,10);var y=this.picker.find(".datepicker-years").find("th:eq(1)").text(e+"-"+(e+9)).end().find("td");e-=1;for(var z=-1;z<11;z++)q+='<span class="year'+(z==-1?" old":10==z?" new":"")+(w==e?" active":"")+(e<g||e>i?" disabled":"")+'">'+e+"</span>",e+=1;y.html(q)},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(c){c.preventDefault();var d=a(c.target).closest("span, td, th");if(1==d.length)switch(d[0].nodeName.toLowerCase()){case"th":switch(d[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var e=l.modes[this.viewMode].navStep*("prev"==d[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,e);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,e)}this.fill();break;case"today":var f=new Date;f=b(f.getFullYear(),f.getMonth(),f.getDate(),0,0,0),this.showMode(-2);var g="linked"==this.o.todayBtn?null:"view";this._setDate(f,g);break;case"clear":var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.val("").change(),this._trigger("changeDate"),this.update(),this.o.autoclose&&this.hide()}break;case"span":if(!d.is(".disabled")){if(this.viewDate.setUTCDate(1),d.is(".month")){var i=1,j=d.parent().find("span").index(d),k=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(j),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(b(k,j,i,0,0,0,0))}else{var k=parseInt(d.text(),10)||0,i=1,j=0;this.viewDate.setUTCFullYear(k),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(b(k,j,i,0,0,0,0))}this.showMode(-1),this.fill()}break;case"td":if(d.is(".day")&&!d.is(".disabled")){var i=parseInt(d.text(),10)||1,k=this.viewDate.getUTCFullYear(),j=this.viewDate.getUTCMonth();d.is(".old")?0===j?(j=11,k-=1):j-=1:d.is(".new")&&(11==j?(j=0,k+=1):j+=1),this._setDate(b(k,j,i,0,0,0,0))}}},_setDate:function(a,b){b&&"date"!=b||(this.date=new Date(a)),b&&"view"!=b||(this.viewDate=new Date(a)),this.fill(),this.setValue(),this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&(c.change(),!this.o.autoclose||b&&"date"!=b||this.hide())},moveMonth:function(a,b){if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),g=e.getUTCMonth(),h=Math.abs(b);if(b=b>0?1:-1,1==h)d=b==-1?function(){return e.getUTCMonth()==g}:function(){return e.getUTCMonth()!=c},c=g+b,e.setUTCMonth(c),
// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
(c<0||c>11)&&(c=(c+12)%12);else{
// For magnitudes >1, move one month at a time...
for(var i=0;i<h;i++)
// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
e=this.moveMonth(e,b);
// ...then reset the day, keeping it in the new month
c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!=e.getUTCMonth()}}
// Common date-resetting loop -- if date is beyond end of month, make it
// end of month
for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(this.picker.is(":not(:visible)"))// allow escape to hide and re-show picker
return void(27==a.keyCode&&this.show());var b,c,d,e=!1;switch(a.keyCode){case 27:// escape
this.hide(),a.preventDefault();break;case 37:// left
case 39:// right
if(!this.o.keyboardNavigation)break;b=37==a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.date,b),d=this.moveYear(this.viewDate,b)):a.shiftKey?(c=this.moveMonth(this.date,b),d=this.moveMonth(this.viewDate,b)):(c=new Date(this.date),c.setUTCDate(this.date.getUTCDate()+b),d=new Date(this.viewDate),d.setUTCDate(this.viewDate.getUTCDate()+b)),this.dateWithinRange(c)&&(this.date=c,this.viewDate=d,this.setValue(),this.update(),a.preventDefault(),e=!0);break;case 38:// up
case 40:// down
if(!this.o.keyboardNavigation)break;b=38==a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.date,b),d=this.moveYear(this.viewDate,b)):a.shiftKey?(c=this.moveMonth(this.date,b),d=this.moveMonth(this.viewDate,b)):(c=new Date(this.date),c.setUTCDate(this.date.getUTCDate()+7*b),d=new Date(this.viewDate),d.setUTCDate(this.viewDate.getUTCDate()+7*b)),this.dateWithinRange(c)&&(this.date=c,this.viewDate=d,this.setValue(),this.update(),a.preventDefault(),e=!0);break;case 13:// enter
this.hide(),a.preventDefault();break;case 9:// tab
this.hide()}if(e){this._trigger("changeDate");var f;this.isInput?f=this.element:this.component&&(f=this.element.find("input")),f&&f.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+a))),/*
				vitalets: fixing bug of very special conditions:
				jquery 1.7.1 + webkit + show inline datepicker in bootstrap popover.
				Method show() does not set display css correctly and datepicker is not shown.
				Changed to .css('display', 'block') solve the problem.
				See https://github.com/vitalets/x-editable/issues/37

				In jquery 1.7.2+ everything works fine.
			*/
//this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
this.picker.find(">div").hide().filter(".datepicker-"+l.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var f=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,a(this.inputs).datepicker(c).bind("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};f.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.date}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){var c=a(b.target).data("datepicker"),d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=this.inputs.length;if(e!=-1){if(d<this.dates[e])
// Date being moved earlier/left
for(;e>=0&&d<this.dates[e];)this.pickers[e--].setUTCDate(d);else if(d>this.dates[e])
// Date being moved later/right
for(;e<f&&d>this.dates[e];)this.pickers[e++].setUTCDate(d);this.updateDates()}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var g=a.fn.datepicker,h=a.fn.datepicker=function(b){var g=Array.apply(null,arguments);g.shift();var h;return this.each(function(){var j=a(this),k=j.data("datepicker"),l="object"==typeof b&&b;if(!k){var m=c(this,"date"),
// Preliminary otions
n=a.extend({},i,m,l),o=d(n.language),
// Options priority: js args, data-attrs, locales, defaults
p=a.extend({},i,o,m,l);if(j.is(".input-daterange")||p.inputs){var q={inputs:p.inputs||j.find("input").toArray()};j.data("datepicker",k=new f(this,a.extend(p,q)))}else j.data("datepicker",k=new e(this,p))}if("string"==typeof b&&"function"==typeof k[b]&&(h=k[b].apply(k,g),void 0!==h))return!1}),void 0!==h?h:this},i=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,calendarWeeks:!1,clearBtn:!1,daysOfWeekDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0},j=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=e;var k=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},l={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,l.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){
// IE treats \0 as a string end in inputs (truncating the value),
// so it's a bad format delimiter, anyway
var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,d,f){if(c instanceof Date)return c;if("string"==typeof d&&(d=l.parseFormat(d)),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(c)){var g,h,i=/([\-+]\d+)([dmwy])/,j=c.match(/([\-+]\d+)([dmwy])/g);c=new Date;for(var m=0;m<j.length;m++)switch(g=i.exec(j[m]),h=parseInt(g[1]),g[2]){case"d":c.setUTCDate(c.getUTCDate()+h);break;case"m":c=e.prototype.moveMonth.call(e.prototype,c,h);break;case"w":c.setUTCDate(c.getUTCDate()+7*h);break;case"y":c=e.prototype.moveYear.call(e.prototype,c,h)}return b(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),0,0,0)}var n,o,g,j=c&&c.match(this.nonpunctuation)||[],c=new Date,p={},q=["yyyy","yy","M","MM","m","mm","d","dd"],r={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){for(b-=1;b<0;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!=b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};r.M=r.MM=r.mm=r.m,r.dd=r.d,c=b(c.getFullYear(),c.getMonth(),c.getDate(),0,0,0);var s=d.parts.slice();
// Process remainder
if(
// Remove noop parts
j.length!=s.length&&(s=a(s).filter(function(b,c){return a.inArray(c,q)!==-1}).toArray()),j.length==s.length){for(var m=0,t=s.length;m<t;m++){if(n=parseInt(j[m],10),g=s[m],isNaN(n))switch(g){case"MM":o=a(k[f].months).filter(function(){var a=this.slice(0,j[m].length),b=j[m].slice(0,a.length);return a==b}),n=a.inArray(o[0],k[f].months)+1;break;case"M":o=a(k[f].monthsShort).filter(function(){var a=this.slice(0,j[m].length),b=j[m].slice(0,a.length);return a==b}),n=a.inArray(o[0],k[f].monthsShort)+1}p[g]=n}for(var u,m=0;m<q.length;m++)u=q[m],u in p&&!isNaN(p[u])&&r[u](c,p[u])}return c},formatDate:function(b,c,d){"string"==typeof c&&(c=l.parseFormat(c));var e={d:b.getUTCDate(),D:k[d].daysShort[b.getUTCDay()],DD:k[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:k[d].monthsShort[b.getUTCMonth()],MM:k[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m;for(var b=[],f=a.extend([],c.separators),g=0,h=c.parts.length;g<=h;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="datepicker-switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};l.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+l.headTemplate+"<tbody></tbody>"+l.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+l.headTemplate+l.contTemplate+l.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+l.headTemplate+l.contTemplate+l.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=l,/* DATEPICKER NO CONFLICT
	* =================== */
a.fn.datepicker.noConflict=function(){return a.fn.datepicker=g,this},/* DATEPICKER DATA-API
	* ================== */
a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),
// component click requires us to explicitly show it
h.call(c,"show"))}),a(function(){
//$('[data-provide="datepicker-inline"]').datepicker();
//vit: changed to support noConflict()
h.call(a('[data-provide="datepicker-inline"]'))})}(window.jQuery),/**
Bootstrap-datepicker.  
Description and examples: https://github.com/eternicode/bootstrap-datepicker.  
For **i18n** you should include js file from here: https://github.com/eternicode/bootstrap-datepicker/tree/master/js/locales
and set `language` option.  
Since 1.4.0 date has different appearance in **popup** and **inline** modes. 

@class date
@extends abstractinput
@final
@example
<a href="#" id="dob" data-type="date" data-pk="1" data-url="/post" data-title="Select date">15/05/1984</a>
<script>
$(function(){
    $('#dob').editable({
        format: 'yyyy-mm-dd',    
        viewformat: 'dd/mm/yyyy',    
        datepicker: {
                weekStart: 1
           }
        }
    });
});
</script>
**/
function(a){"use strict";
//store bootstrap-datepicker as bdateicker to exclude conflict with jQuery UI one
a.fn.bdatepicker=a.fn.datepicker.noConflict(),a.fn.datepicker||(//if there were no other datepickers, keep also original name
a.fn.datepicker=a.fn.bdatepicker);var b=function(a){this.init("date",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{initPicker:function(b,c){
//'format' is set directly from settings or data-* attributes
//by default viewformat equals to format
this.options.viewformat||(this.options.viewformat=this.options.format),
//try parse datepicker config defined as json string in data-datepicker
b.datepicker=a.fn.editableutils.tryParseJson(b.datepicker,!0),
//overriding datepicker config (as by default jQuery extend() is not recursive)
//since 1.4 datepicker internally uses viewformat instead of format. Format is for submit only
this.options.datepicker=a.extend({},c.datepicker,b.datepicker,{format:this.options.viewformat}),
//language
this.options.datepicker.language=this.options.datepicker.language||"en",
//store DPglobal
this.dpg=a.fn.bdatepicker.DPGlobal,
//store parsed formats
this.parsedFormat=this.dpg.parseFormat(this.options.format),this.parsedViewFormat=this.dpg.parseFormat(this.options.viewformat)},render:function(){this.$input.bdatepicker(this.options.datepicker),
//"clear" link
this.options.clear&&(this.$clear=a('<a href="#"></a>').html(this.options.clear).click(a.proxy(function(a){a.preventDefault(),a.stopPropagation(),this.clear()},this)),this.$tpl.parent().append(a('<div class="editable-clear">').append(this.$clear)))},value2html:function(a,c){var d=a?this.dpg.formatDate(a,this.parsedViewFormat,this.options.datepicker.language):"";b.superclass.value2html.call(this,d,c)},html2value:function(a){return this.parseDate(a,this.parsedViewFormat)},value2str:function(a){return a?this.dpg.formatDate(a,this.parsedFormat,this.options.datepicker.language):""},str2value:function(a){return this.parseDate(a,this.parsedFormat)},value2submit:function(a){return this.value2str(a)},value2input:function(a){this.$input.bdatepicker("update",a)},input2value:function(){return this.$input.data("datepicker").date},activate:function(){},clear:function(){this.$input.data("datepicker").date=null,this.$input.find(".active").removeClass("active"),this.options.showbuttons||this.$input.closest("form").submit()},autosubmit:function(){this.$input.on("mouseup",".day",function(b){if(!a(b.currentTarget).is(".old")&&!a(b.currentTarget).is(".new")){var c=a(this).closest("form");setTimeout(function(){c.submit()},200)}})},/*
        For incorrect date bootstrap-datepicker returns current date that is not suitable
        for datefield.
        This function returns null for incorrect date.  
       */
parseDate:function(a,b){var c,d=null;return a&&(d=this.dpg.parseDate(a,b,this.options.datepicker.language),"string"==typeof a&&(c=this.dpg.formatDate(d,b,this.options.datepicker.language),a!==c&&(d=null))),d}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{/**
        @property tpl 
        @default <div></div>
        **/
tpl:'<div class="editable-date well"></div>',/**
        @property inputclass 
        @default null
        **/
inputclass:null,/**
        Format used for sending value to server. Also applied when converting date from <code>data-value</code> attribute.<br>
        Possible tokens are: <code>d, dd, m, mm, yy, yyyy</code>  

        @property format 
        @type string
        @default yyyy-mm-dd
        **/
format:"yyyy-mm-dd",/**
        Format used for displaying date. Also applied when converting date from element's text on init.   
        If not specified equals to <code>format</code>

        @property viewformat 
        @type string
        @default null
        **/
viewformat:null,/**
        Configuration of datepicker.
        Full list of options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html

        @property datepicker 
        @type object
        @default {
            weekStart: 0,
            startView: 0,
            minViewMode: 0,
            autoclose: false
        }
        **/
datepicker:{weekStart:0,startView:0,minViewMode:0,autoclose:!1},/**
        Text shown as clear date button. 
        If <code>false</code> clear button will not be rendered.

        @property clear 
        @type boolean|string
        @default 'x clear'
        **/
clear:"&times; clear"}),a.fn.editabletypes.date=b}(window.jQuery),/**
Bootstrap datefield input - modification for inline mode.
Shows normal <input type="text"> and binds popup datepicker.  
Automatically shown in inline mode.

@class datefield
@extends date

@since 1.4.0
**/
function(a){"use strict";var b=function(a){this.init("datefield",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.date),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.find("input"),this.setClass(),this.setAttr("placeholder"),
//bootstrap-datepicker is set `bdateicker` to exclude conflict with jQuery UI one. (in date.js)        
this.$tpl.bdatepicker(this.options.datepicker),
//need to disable original event handlers
this.$input.off("focus keydown"),
//update value of datepicker
this.$input.keyup(a.proxy(function(){this.$tpl.removeData("date"),this.$tpl.bdatepicker("update")},this))},value2input:function(a){this.$input.val(a?this.dpg.formatDate(a,this.parsedViewFormat,this.options.datepicker.language):""),this.$tpl.bdatepicker("update")},input2value:function(){return this.html2value(this.$input.val())},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.date.defaults,{/**
        @property tpl 
        **/
tpl:'<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',/**
        @property inputclass 
        @default 'input-small'
        **/
inputclass:"input-small",/* datepicker config */
datepicker:{weekStart:0,startView:0,minViewMode:0,autoclose:!0}}),a.fn.editabletypes.datefield=b}(window.jQuery),/**
Bootstrap-datetimepicker.  
Based on [smalot bootstrap-datetimepicker plugin](https://github.com/smalot/bootstrap-datetimepicker). 
Before usage you should manually include dependent js and css:

    <link href="css/datetimepicker.css" rel="stylesheet" type="text/css"></link> 
    <script src="js/bootstrap-datetimepicker.js"></script>

For **i18n** you should include js file from here: https://github.com/smalot/bootstrap-datetimepicker/tree/master/js/locales
and set `language` option.  

@class datetime
@extends abstractinput
@final
@since 1.4.4
@example
<a href="#" id="last_seen" data-type="datetime" data-pk="1" data-url="/post" title="Select date & time">15/03/2013 12:45</a>
<script>
$(function(){
    $('#last_seen').editable({
        format: 'yyyy-mm-dd hh:ii',    
        viewformat: 'dd/mm/yyyy hh:ii',    
        datetimepicker: {
                weekStart: 1
           }
        }
    });
});
</script>
**/
function(a){"use strict";var b=function(a){this.init("datetime",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.abstractinput),a.extend(b.prototype,{initPicker:function(b,c){
//'format' is set directly from settings or data-* attributes
//by default viewformat equals to format
this.options.viewformat||(this.options.viewformat=this.options.format),
//try parse datetimepicker config defined as json string in data-datetimepicker
b.datetimepicker=a.fn.editableutils.tryParseJson(b.datetimepicker,!0),
//overriding datetimepicker config (as by default jQuery extend() is not recursive)
//since 1.4 datetimepicker internally uses viewformat instead of format. Format is for submit only
this.options.datetimepicker=a.extend({},c.datetimepicker,b.datetimepicker,{format:this.options.viewformat}),
//language
this.options.datetimepicker.language=this.options.datetimepicker.language||"en",
//store DPglobal
this.dpg=a.fn.datetimepicker.DPGlobal,
//store parsed formats
this.parsedFormat=this.dpg.parseFormat(this.options.format,this.options.formatType),this.parsedViewFormat=this.dpg.parseFormat(this.options.viewformat,this.options.formatType)},render:function(){this.$input.datetimepicker(this.options.datetimepicker),
//adjust container position when viewMode changes
//see https://github.com/smalot/bootstrap-datetimepicker/pull/80
this.$input.on("changeMode",function(b){var c=a(this).closest("form").parent();
//timeout here, otherwise container changes position before form has new size
setTimeout(function(){c.triggerHandler("resize")},0)}),
//"clear" link
this.options.clear&&(this.$clear=a('<a href="#"></a>').html(this.options.clear).click(a.proxy(function(a){a.preventDefault(),a.stopPropagation(),this.clear()},this)),this.$tpl.parent().append(a('<div class="editable-clear">').append(this.$clear)))},value2html:function(a,c){
//formatDate works with UTCDate!
var d=a?this.dpg.formatDate(this.toUTC(a),this.parsedViewFormat,this.options.datetimepicker.language,this.options.formatType):"";return c?void b.superclass.value2html.call(this,d,c):d},html2value:function(a){
//parseDate return utc date!
var b=this.parseDate(a,this.parsedViewFormat);return b?this.fromUTC(b):null},value2str:function(a){
//formatDate works with UTCDate!
return a?this.dpg.formatDate(this.toUTC(a),this.parsedFormat,this.options.datetimepicker.language,this.options.formatType):""},str2value:function(a){
//parseDate return utc date!
var b=this.parseDate(a,this.parsedFormat);return b?this.fromUTC(b):null},value2submit:function(a){return this.value2str(a)},value2input:function(a){a&&this.$input.data("datetimepicker").setDate(a)},input2value:function(){
//date may be cleared, in that case getDate() triggers error
var a=this.$input.data("datetimepicker");return a.date?a.getDate():null},activate:function(){},clear:function(){this.$input.data("datetimepicker").date=null,this.$input.find(".active").removeClass("active"),this.options.showbuttons||this.$input.closest("form").submit()},autosubmit:function(){this.$input.on("mouseup",".minute",function(b){var c=a(this).closest("form");setTimeout(function(){c.submit()},200)})},
//convert date from local to utc
toUTC:function(a){return a?new Date(a.valueOf()-6e4*a.getTimezoneOffset()):a},
//convert date from utc to local
fromUTC:function(a){return a?new Date(a.valueOf()+6e4*a.getTimezoneOffset()):a},/*
        For incorrect date bootstrap-datetimepicker returns current date that is not suitable
        for datetimefield.
        This function returns null for incorrect date.  
       */
parseDate:function(a,b){var c,d=null;return a&&(d=this.dpg.parseDate(a,b,this.options.datetimepicker.language,this.options.formatType),"string"==typeof a&&(c=this.dpg.formatDate(d,b,this.options.datetimepicker.language,this.options.formatType),a!==c&&(d=null))),d}}),b.defaults=a.extend({},a.fn.editabletypes.abstractinput.defaults,{/**
        @property tpl 
        @default <div></div>
        **/
tpl:'<div class="editable-date well"></div>',/**
        @property inputclass 
        @default null
        **/
inputclass:null,/**
        Format used for sending value to server. Also applied when converting date from <code>data-value</code> attribute.<br>
        Possible tokens are: <code>d, dd, m, mm, yy, yyyy, h, i</code>  
        
        @property format 
        @type string
        @default yyyy-mm-dd hh:ii
        **/
format:"yyyy-mm-dd hh:ii",formatType:"standard",/**
        Format used for displaying date. Also applied when converting date from element's text on init.   
        If not specified equals to <code>format</code>
        
        @property viewformat 
        @type string
        @default null
        **/
viewformat:null,/**
        Configuration of datetimepicker.
        Full list of options: https://github.com/smalot/bootstrap-datetimepicker

        @property datetimepicker 
        @type object
        @default { }
        **/
datetimepicker:{todayHighlight:!1,autoclose:!1},/**
        Text shown as clear date button. 
        If <code>false</code> clear button will not be rendered.

        @property clear 
        @type boolean|string
        @default 'x clear'
        **/
clear:"&times; clear"}),a.fn.editabletypes.datetime=b}(window.jQuery),/**
Bootstrap datetimefield input - datetime input for inline mode.
Shows normal <input type="text"> and binds popup datetimepicker.  
Automatically shown in inline mode.

@class datetimefield
@extends datetime

**/
function(a){"use strict";var b=function(a){this.init("datetimefield",a,b.defaults),this.initPicker(a,b.defaults)};a.fn.editableutils.inherit(b,a.fn.editabletypes.datetime),a.extend(b.prototype,{render:function(){this.$input=this.$tpl.find("input"),this.setClass(),this.setAttr("placeholder"),this.$tpl.datetimepicker(this.options.datetimepicker),
//need to disable original event handlers
this.$input.off("focus keydown"),
//update value of datepicker
this.$input.keyup(a.proxy(function(){this.$tpl.removeData("date"),this.$tpl.datetimepicker("update")},this))},value2input:function(a){this.$input.val(this.value2html(a)),this.$tpl.datetimepicker("update")},input2value:function(){return this.html2value(this.$input.val())},activate:function(){a.fn.editabletypes.text.prototype.activate.call(this)},autosubmit:function(){}}),b.defaults=a.extend({},a.fn.editabletypes.datetime.defaults,{/**
        @property tpl 
        **/
tpl:'<div class="input-append date"><input type="text"/><span class="add-on"><i class="icon-th"></i></span></div>',/**
        @property inputclass 
        @default 'input-medium'
        **/
inputclass:"input-medium",/* datetimepicker config */
datetimepicker:{todayHighlight:!1,autoclose:!0}}),a.fn.editabletypes.datetimefield=b}(window.jQuery),/**
 * alertify
 * An unobtrusive customizable JavaScript notification system
 *
 * @author Fabien Doiron <fabien.doiron@gmail.com>
 * @copyright Fabien Doiron 2013
 * @license MIT <http://opensource.org/licenses/mit-license.php>
 * @link http://fabien-d.github.com/alertify.js/
 * @module alertify
 * @version 0.3.11
 */
function(a,b){"use strict";var c,d=a.document;c=function(){var c,e,f,g,h,i,j,k,l,m,n,o,p,q={},r={},s=!1,t={ENTER:13,ESC:27,SPACE:32},u=[];/**
		 * Markup pieces
		 * @type {Object}
		 */
/**
		 * Return the proper transitionend event
		 * @return {String}    Transition type string
		 */
/**
		 * Shorthand for document.getElementById()
		 *
		 * @param  {String} id    A specific element ID
		 * @return {Object}       HTML element
		 */
/**
		 * Alertify private object
		 * @type {Object}
		 */
return r={buttons:{holder:'<nav class="alertify-buttons">{{buttons}}</nav>',submit:'<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',ok:'<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',cancel:'<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'},input:'<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',message:'<p class="alertify-message">{{message}}</p>',log:'<article class="alertify-log{{class}}">{{message}}</article>'},p=function(){var a,c,e=!1,f=d.createElement("fakeelement"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(a in g)if(f.style[a]!==b){c=g[a],e=!0;break}return{type:c,supported:e}},c=function(a){return d.getElementById(a)},q={/**
			 * Labels object
			 * @type {Object}
			 */
labels:{ok:"OK",cancel:"Cancel"},/**
			 * Delay number
			 * @type {Number}
			 */
delay:5e3,/**
			 * Whether buttons are reversed (default is secondary/primary)
			 * @type {Boolean}
			 */
buttonReverse:!1,/**
			 * Which button should be focused by default
			 * @type {String}	"ok" (default), "cancel", or "none"
			 */
buttonFocus:"ok",/**
			 * Set the transition event on load
			 * @type {[type]}
			 */
transition:b,/**
			 * Set the proper button click events
			 *
			 * @param {Function} fn    [Optional] Callback function
			 *
			 * @return {undefined}
			 */
addListeners:function(a){var b,c,i,j,k,l="undefined"!=typeof f,m="undefined"!=typeof e,n="undefined"!=typeof o,p="",q=this;
// ok event handler
b=function(b){return"undefined"!=typeof b.preventDefault&&b.preventDefault(),i(b),"undefined"!=typeof o&&(p=o.value),"function"==typeof a&&("undefined"!=typeof o?a(!0,p):a(!0)),!1},
// cancel event handler
c=function(b){return"undefined"!=typeof b.preventDefault&&b.preventDefault(),i(b),"function"==typeof a&&a(!1),!1},
// common event handler (keyup, ok and cancel)
i=function(a){q.hide(),q.unbind(d.body,"keyup",j),q.unbind(g,"focus",k),l&&q.unbind(f,"click",b),m&&q.unbind(e,"click",c)},
// keyup handler
j=function(a){var d=a.keyCode;(d===t.SPACE&&!n||n&&d===t.ENTER)&&b(a),d===t.ESC&&m&&c(a)},
// reset focus to first item in the dialog
k=function(a){n?o.focus():!m||q.buttonReverse?f.focus():e.focus()},
// handle reset focus link
// this ensures that the keyboard focus does not
// ever leave the dialog box until an action has
// been taken
this.bind(g,"focus",k),this.bind(h,"focus",k),
// handle OK click
l&&this.bind(f,"click",b),
// handle Cancel click
m&&this.bind(e,"click",c),
// listen for keys, Cancel => ESC
this.bind(d.body,"keyup",j),this.transition.supported||this.setFocus()},/**
			 * Bind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to attach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
bind:function(a,b,c){"function"==typeof a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},/**
			 * Use alertify as the global error handler (using window.onerror)
			 *
			 * @return {boolean} success
			 */
handleErrors:function(){if("undefined"!=typeof a.onerror){var b=this;return a.onerror=function(a,c,d){b.error("["+a+" on line "+d+" of "+c+"]",0)},!0}return!1},/**
			 * Append button HTML strings
			 *
			 * @param {String} secondary    The secondary button HTML string
			 * @param {String} primary      The primary button HTML string
			 *
			 * @return {String}             The appended button HTML strings
			 */
appendButtons:function(a,b){return this.buttonReverse?b+a:a+b},/**
			 * Build the proper message box
			 *
			 * @param  {Object} item    Current object in the queue
			 *
			 * @return {String}         An HTML string of the message box
			 */
build:function(a){var b="",c=a.type,d=a.message,e=a.cssClass||"";switch(b+='<div class="alertify-dialog">',b+='<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>',"none"===q.buttonFocus&&(b+='<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'),
// doens't require an actual form
"prompt"===c&&(b+='<div id="alertify-form">'),b+='<article class="alertify-inner">',b+=r.message.replace("{{message}}",d),"prompt"===c&&(b+=r.input),b+=r.buttons.holder,b+="</article>","prompt"===c&&(b+="</div>"),b+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>',b+="</div>",c){case"confirm":b=b.replace("{{buttons}}",this.appendButtons(r.buttons.cancel,r.buttons.ok)),b=b.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"prompt":b=b.replace("{{buttons}}",this.appendButtons(r.buttons.cancel,r.buttons.submit)),b=b.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"alert":b=b.replace("{{buttons}}",r.buttons.ok),b=b.replace("{{ok}}",this.labels.ok)}return l.className="alertify alertify-"+c+" "+e,k.className="alertify-cover",b},/**
			 * Close the log messages
			 *
			 * @param  {Object} elem    HTML Element of log message to close
			 * @param  {Number} wait    [optional] Time (in ms) to wait before automatically hiding the message, if 0 never hide
			 *
			 * @return {undefined}
			 */
close:function(a,b){
// Unary Plus: +"2" === 2
var c,d,e=b&&!isNaN(b)?+b:this.delay,f=this;
// set click event on log messages
this.bind(a,"click",function(){c(a)}),
// Hide the dialog box after transition
// This ensure it doens't block any element from being clicked
d=function(a){a.stopPropagation(),
// unbind event so function only gets called once
f.unbind(this,f.transition.type,d),
// remove log message
m.removeChild(this),m.hasChildNodes()||(m.className+=" alertify-logs-hidden")},
// this sets the hide class to transition out
// or removes the child if css transitions aren't supported
c=function(a){
// ensure element exists
"undefined"!=typeof a&&a.parentNode===m&&(
// whether CSS transition exists
f.transition.supported?(f.bind(a,f.transition.type,d),a.className+=" alertify-log-hide"):(m.removeChild(a),m.hasChildNodes()||(m.className+=" alertify-logs-hidden")))},
// never close (until click) if wait is set to 0
0!==b&&
// set timeout to auto close the log message
setTimeout(function(){c(a)},e)},/**
			 * Create a dialog box
			 *
			 * @param  {String}   message        The message passed from the callee
			 * @param  {String}   type           Type of dialog to create
			 * @param  {Function} fn             [Optional] Callback function
			 * @param  {String}   placeholder    [Optional] Default value for prompt input field
			 * @param  {String}   cssClass       [Optional] Class(es) to append to dialog box
			 *
			 * @return {Object}
			 */
dialog:function(a,b,c,e,f){
// set the current active element
// this allows the keyboard focus to be resetted
// after the dialog box is closed
j=d.activeElement;
// check to ensure the alertify dialog element
// has been successfully created
var g=function(){m&&null!==m.scrollTop&&k&&null!==k.scrollTop||g()};
// error catching
if("string"!=typeof a)throw new Error("message must be a string");if("string"!=typeof b)throw new Error("type must be a string");if("undefined"!=typeof c&&"function"!=typeof c)throw new Error("fn must be a function");
// initialize alertify if it hasn't already been done
return this.init(),g(),u.push({type:b,message:a,callback:c,placeholder:e,cssClass:f}),s||this.setup(),this},/**
			 * Extend the log method to create custom methods
			 *
			 * @param  {String} type    Custom method name
			 *
			 * @return {Function}
			 */
extend:function(a){if("string"!=typeof a)throw new Error("extend method must have exactly one paramter");return function(b,c){return this.log(b,a,c),this}},/**
			 * Hide the dialog and rest to defaults
			 *
			 * @return {undefined}
			 */
hide:function(){var a,b=this;
// remove reference from queue
u.splice(0,1),
// if items remaining in the queue
u.length>0?this.setup(!0):(s=!1,
// Hide the dialog box after transition
// This ensure it doens't block any element from being clicked
a=function(c){c.stopPropagation(),
// unbind event so function only gets called once
b.unbind(l,b.transition.type,a)},
// whether CSS transition exists
this.transition.supported?(this.bind(l,this.transition.type,a),l.className="alertify alertify-hide alertify-hidden"):l.className="alertify alertify-hide alertify-hidden alertify-isHidden",k.className="alertify-cover alertify-cover-hidden",
// set focus to the last element or body
// after the dialog is closed
j.focus())},/**
			 * Initialize Alertify
			 * Create the 2 main elements
			 *
			 * @return {undefined}
			 */
init:function(){
// ensure legacy browsers support html5 tags
d.createElement("nav"),d.createElement("article"),d.createElement("section"),
// cover
null==c("alertify-cover")&&(k=d.createElement("div"),k.setAttribute("id","alertify-cover"),k.className="alertify-cover alertify-cover-hidden",d.body.appendChild(k)),
// main element
null==c("alertify")&&(s=!1,u=[],l=d.createElement("section"),l.setAttribute("id","alertify"),l.className="alertify alertify-hidden",d.body.appendChild(l)),
// log element
null==c("alertify-logs")&&(m=d.createElement("section"),m.setAttribute("id","alertify-logs"),m.className="alertify-logs alertify-logs-hidden",d.body.appendChild(m)),
// set tabindex attribute on body element
// this allows script to give it focus
// after the dialog is closed
d.body.setAttribute("tabindex","0"),
// set transition type
this.transition=p()},/**
			 * Show a new log message box
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Optional type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding the log
			 *
			 * @return {Object}
			 */
log:function(a,b,c){
// check to ensure the alertify dialog element
// has been successfully created
var d=function(){m&&null!==m.scrollTop||d()};
// initialize alertify if it hasn't already been done
return this.init(),d(),m.className="alertify-logs",this.notify(a,b,c),this},/**
			 * Add new log message
			 * If a type is passed, a class name "alertify-log-{type}" will get added.
			 * This allows for custom look and feel for various types of notifications.
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding
			 *
			 * @return {undefined}
			 */
notify:function(a,b,c){var e=d.createElement("article");e.className="alertify-log"+("string"==typeof b&&""!==b?" alertify-log-"+b:""),e.innerHTML=a,
// append child
m.appendChild(e),
// triggers the CSS animation
setTimeout(function(){e.className=e.className+" alertify-log-show"},50),this.close(e,c)},/**
			 * Set properties
			 *
			 * @param {Object} args     Passing parameters
			 *
			 * @return {undefined}
			 */
set:function(a){var b;
// error catching
if("object"!=typeof a&&a instanceof Array)throw new Error("args must be an object");
// set parameters
for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},/**
			 * Common place to set focus to proper element
			 *
			 * @return {undefined}
			 */
setFocus:function(){o?(o.focus(),o.select()):i.focus()},/**
			 * Initiate all the required pieces for the dialog box
			 *
			 * @return {undefined}
			 */
setup:function(a){var d,j=u[0],k=this;
// dialog is open
s=!0,
// Set button focus after transition
d=function(a){a.stopPropagation(),k.setFocus(),
// unbind event so function only gets called once
k.unbind(l,k.transition.type,d)},
// whether CSS transition exists
this.transition.supported&&!a&&this.bind(l,this.transition.type,d),
// build the proper dialog HTML
l.innerHTML=this.build(j),
// assign all the common elements
g=c("alertify-resetFocus"),h=c("alertify-resetFocusBack"),f=c("alertify-ok")||b,e=c("alertify-cancel")||b,i="cancel"===q.buttonFocus?e:"none"===q.buttonFocus?c("alertify-noneFocus"):f,o=c("alertify-text")||b,n=c("alertify-form")||b,
// add placeholder value to the input field
"string"==typeof j.placeholder&&""!==j.placeholder&&(o.value=j.placeholder),a&&this.setFocus(),this.addListeners(j.callback)},/**
			 * Unbind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to detach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
unbind:function(a,b,c){"function"==typeof a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}},{alert:function(a,b,c){return q.dialog(a,"alert",b,"",c),this},confirm:function(a,b,c){return q.dialog(a,"confirm",b,"",c),this},extend:q.extend,init:q.init,log:function(a,b,c){return q.log(a,b,c),this},prompt:function(a,b,c,d){return q.dialog(a,"prompt",b,c,d),this},success:function(a,b){return q.log(a,"success",b),this},error:function(a,b){return q.log(a,"error",b),this},set:function(a){q.set(a)},labels:q.labels,debug:q.handleErrors}},
// AMD and window support
"function"==typeof define?define([],function(){return new c}):"undefined"==typeof a.alertify&&(a.alertify=new c)}(this),/*
 * A colorselector for Twitter Bootstrap which lets you select a color from a predefined set of colors only.
 * https://github.com/flaute/bootstrap-colorselector
 *
 * Copyright (C) 2014 Flaute
 *
 * Licensed under the MIT license
 */
function(a){"use strict";var b=function(b,c){this.options=c,this.$select=a(b),this._init()};b.prototype={constructor:b,_init:function(){var b=this.options.callback,c=this.$select.val(),d=this.$select.find("option:selected").data("color"),e=a("<ul>").addClass("dropdown-menu").addClass("dropdown-caret"),f=a("<div>").addClass("dropdown").addClass("dropdown-colorselector"),g=a("<span>").addClass("btn-colorselector").css("background-color",d),h=a("<a>").attr("data-toggle","dropdown").addClass("dropdown-toggle").attr("href","#").append(g);
// create an li-tag for every option of the select
a("option",this.$select).each(function(){var b=a(this),d=b.attr("value"),f=b.data("color"),g=b.text(),h=a("<a>").addClass("color-btn");b.prop("selected")!==!0&&c!==f||h.addClass("selected"),h.css("background-color",f),h.attr("href","#").attr("data-color",f).attr("data-value",d).attr("title",g),
// create li-tag
e.append(a("<li>").append(h))}),
// append the colorselector
f.append(h),
// append the colorselector-dropdown
f.append(e),
// hide the select
this.$select.hide(),
// insert the colorselector
this.$selector=a(f).insertAfter(this.$select),
// register change handler
this.$select.on("change",function(){var c=a(this).val(),d=a(this).find("option[value='"+c+"']").data("color"),e=a(this).find("option[value='"+c+"']").text();
// remove old and set new selected color
a(this).next().find("ul").find("li").find(".selected").removeClass("selected"),a(this).next().find("ul").find("li").find("a[data-color='"+d+"']").addClass("selected"),a(this).next().find(".btn-colorselector").css("background-color",d),b(c,d,e)}),
// register click handler
e.on("click.colorselector",a.proxy(this._clickColor,this))},_clickColor:function(b){var c=a(b.target);return!!c.is(".color-btn")&&(this.$select.val(c.data("value")).change(),b.preventDefault(),!0)},setColor:function(b){
// find value for color
var c=a(this.$selector).find("li").find("a[data-color='"+b+"']").data("value");this.setValue(c)},setValue:function(a){this.$select.val(a).change()}},a.fn.colorselector=function(c){var d=Array.apply(null,arguments);return d.shift(),this.each(function(){var e=a(this),f=e.data("colorselector"),g=a.extend({},a.fn.colorselector.defaults,e.data(),"object"==typeof c&&c);f||e.data("colorselector",f=new b(this,g)),"string"==typeof c&&f[c].apply(f,d)})},a.fn.colorselector.defaults={callback:function(a,b,c){},colorsPerRow:8},a.fn.colorselector.Constructor=b}(jQuery,window,document),function(a,b){if("function"==typeof define&&define.amd)define(function(){return b(a)});else if("undefined"!=typeof exports){var c=b(a);"undefined"!=typeof module&&module.exports&&(module.exports=c),exports=dmoJSON}else window.domJSON=b(a)}(this,function(a){"use strict";var b={},c={href:a.location.href||null,userAgent:window.navigator&&window.navigator.userAgent?window.navigator.userAgent:null,version:"0.1.2"},d={absolutePaths:["action","data","href","src"],attributes:!0,computedStyle:!1,cull:!0,deep:!0,domProperties:!0,filter:!1,htmlOnly:!1,metadata:!0,serialProperties:!1,stringify:!1},e={noMeta:!1},f=["link","script"],g=["nodeType","nodeValue","tagName"],h=["attributes","childNodes","children","classList","dataset","style"],i=["innerHTML","innerText","outerHTML","outerText","prefix","text","textContent","wholeText"],j=function(a){if(!arguments.length)return arguments[0]||{};for(var b in arguments[1])a[b]=arguments[1][b];if(arguments.length>2){var c=[a].concat(Array.prototype.slice.call(arguments,2));return j.apply(null,c)}return a},k=function(){if(!arguments.length)return[];for(var a=Array.prototype.concat.apply([],arguments),b=0;b<a.length;b++)a.indexOf(a[b])<b&&(a.splice(b,1),b--);return a},l=function(a){if(a instanceof Array)return a.slice();var b={};for(var c in a)b[c]=a[c];return b},m=function(a,b){var c;if(a instanceof Array)c=k(a.filter(function(a){return b.indexOf(a)>-1}));else{c={};for(var d in b)a.hasOwnProperty(b[d])&&(c[b[d]]=a[b[d]])}return c},n=function(a,b){var c;if(a instanceof Array)c=k(a.filter(function(a){return b.indexOf(a)===-1}));else{c={};for(var d in a)c[d]=a[d];for(var e in b)c.hasOwnProperty(b[e])&&delete c[b[e]]}return c},o=function(a,b){return b===!1?a instanceof Array?[]:{}:b instanceof Array&&b.length?"boolean"==typeof b[0]?1==b.length&&"boolean"==typeof b[0]?b[0]===!0?l(a):a instanceof Array?[]:{}:b[0]===!0?n(a,b.slice(1)):m(a,b.slice(1)):m(a,b):l(a)},p=function(a){var b;return"boolean"==typeof a?a:"object"==typeof a&&null!==a?a instanceof Array?a.filter(function(a,b){return"string"==typeof a||0===b&&a===!0}):a.values instanceof Array&&(b=a.values.filter(function(a){return"string"==typeof a}),!!b.length&&(a.exclude&&b.unshift(a.exclude),b)):!!a},q=function(a,b){var c,d,e;if(a.match(/(?:^data\:|^[\w\-\+\.]*?\:\/\/|^\/\/)/i))return a;if("/"===a.charAt(0))return b+a.substr(1);c=b.indexOf("://")>-1?b.substring(0,b.indexOf("://")+3):"",d=(c.length?b.substring(c.length):b).split("/"),e=a.split("/"),d.pop();for(var f=0;f<e.length;f++)"."!=e[f]&&(".."==e[f]?d.length>1&&d.pop():d.push(e[f]));return c+d.join("/")},r=function(a,b){var c={};for(var d in a)"undefined"!=typeof a[d]&&"function"!=typeof a[d]&&d.charAt(0).toLowerCase()===d.charAt(0)&&("object"!=typeof a[d]||a[d]instanceof Array)&&(b.cull?(a[d]||0===a[d]||a[d]===!1)&&(c[d]=a[d]):c[d]=a[d]);return c=o(c,b.domProperties)},s=function(a,b){for(var c,d={},e=a.attributes,f=e.length,g=0;g<f;g++)d[e[g].name]=e[g].value;d=b.attributes?o(d,b.attributes):null,c=o(d,b.absolutePaths);for(var g in c)d[g]=q(c[g],b.absoluteBase);return d},t=function(b,c){var d,e={};if(!(c.computedStyle&&b.style instanceof CSSStyleDeclaration))return null;d=a.getComputedStyle(b);for(var f in d)"cssText"!==f&&!f.match(/\d/)&&"string"==typeof d[f]&&d[f].length&&(e[f]=d[f]);return c.computedStyle instanceof Array?o(e,c.computedStyle):e},u=function(a,b,c){var d,e,g,h,i,j=r(a,b);if(1===a.nodeType){for(var k in f)if(a.tagName.toLowerCase()===f[k])return null}else if(3===a.nodeType&&!a.nodeValue.trim())return null;if(b.attributes&&a.attributes&&(j.attributes=s(a,b)),b.computedStyle&&(d=t(a,b))&&(j.style=d),b.deep===!0||"number"==typeof b.deep&&b.deep>c){i=[],e=b.htmlOnly?a.children:a.childNodes,g=e.length;for(var l=0;l<g;l++)h=u(e[l],b,c+1),h&&i.push(h);j.childNodes=i}return j};b.toJSON=function(b,e){var f,l={},o={},q=(new Date).getTime(),r=g.slice(),s=h.slice();return l=j({},d,e),l.absolutePaths=p(l.absolutePaths),l.attributes=p(l.attributes),l.computedStyle=p(l.computedStyle),l.domProperties=p(l.domProperties),l.serialProperties=p(l.serialProperties),l.absoluteBase=a.location.origin+"/",l.serialProperties!==!0&&(s=l.serialProperties instanceof Array&&l.serialProperties.length?l.serialProperties[0]===!0?s.concat(n(i,l.serialProperties)):s.concat(m(i,l.serialProperties)):s.concat(i)),l.domProperties instanceof Array?l.domProperties[0]===!0?l.domProperties=n(k(l.domProperties,s),r):l.domProperties=n(k(l.domProperties,r),s):l.domProperties===!1?l.domProperties=r:l.domProperties=[!0].concat(s),f=u(b,l,0),l.metadata?(o.meta=j({},c,{clock:(new Date).getTime()-q,date:(new Date).toISOString(),dimensions:{inner:{x:window.innerWidth,y:window.innerHeight},outer:{x:window.outerWidth,y:window.outerHeight}},options:l}),o.node=f):o=f,l.stringify?JSON.stringify(o):o};var v=function(a,b,c){switch(b instanceof DocumentFragment&&(b=b.ownerDocument),a){case 1:return"string"==typeof c.tagName&&b.createElement(c.tagName);case 3:return"string"==typeof c.nodeValue&&c.nodeValue.length?b.createTextNode(c.nodeValue):b.createTextNode("");case 7:return!(!c.hasOwnProperty("target")||!c.hasOwnProperty("data"))&&b.createProcessingInstruction(c.target,c.data);case 8:return"string"==typeof c.nodeValue?b.createComment(c.nodeValue):b.createComment("");case 9:return b.implementation.createHTMLDocument(c);case 11:return b;default:return!1}},w=function(a,b,c){if(!a.nodeType)return!1;var d=v(a.nodeType,c,a);b.appendChild(d);for(var e in a)if("object"!=typeof a[e]&&"isContentEditable"!==e&&"childNodes"!==e)try{d[e]=a[e]}catch(f){continue}if(1===a.nodeType&&a.tagName&&a.attributes)for(var g in a.attributes)d.setAttribute(g,a.attributes[g]);if(a.childNodes&&a.childNodes.length)for(var h in a.childNodes)w(a.childNodes[h],d,c)};return b.toDOM=function(a,b){var c,d;return"string"==typeof a&&(a=JSON.parse(a)),c=j({},e,b),d=document.createDocumentFragment(),c.noMeta?w(a,d,d):w(a.node,d,d),d},b}),function(){var a;a=function(b,c){var d,e,f,g,h,j,k,l,m;for(g=$(b),c={tagName:g.tagName},l=g.attributes,h=0,k=l.length;h<k;h++){f=l[h],c[f.name]=f.value,e=g.childElements(),e.length&&(c.children=[]);for(m in e)j=e[m],d=$(e[m]),c.children[i]=a(d,c.children)}return c}}.call(this);/**
 * Created by Fire360Boy on 20-Jul-16.
 */
var box=function(a,b){switch(b){case"red":b="panel-danger";break;case"blue":b="panel-primary";break;case"orange":b="panel-warning";break;case"gray":b="panel-default";break;case"green":b="panel-success";break;case"cyan":b="panel-info";break;case"black":b="panel-inverse";break;default:b=""}const c='<li class="ui-state-default" >                        <div class="col-xs-10 col-xs-offset-1" >                            <div class="panel ${color}" >                                <div class="panel-heading" >                                    <div style="padding-top: 8px;" class="glyphicon glyphicon-move pull-left" ></div >                                    &nbsp;                                    <h3 class="panel-title  pull-left editable searchable" data-type="text"                                        data-title="Please Enter a Title : " >                                        ${boxTitle}                                    </h3 >                                    <div class="btn-group pull-right " >                                        <button class="btn btn-sm btn-success fa fa-plus btnAddItem" ></button >                                        <button class="btn btn-sm btn-danger fa fa-trash btnRemoveCategory" ></button >                                    </div >                                    <div class="clearfix" ></div >                                </div >                                <div class="panel-body" >                                    <div >                                        <ul class="sortable-item connected-item" style="padding-left: 0px;min-height: 50px;" >                                        </ul >                                    </div >                                </div >                            </div >                        </div >                    </li >';return Mustache.parse(c,["${","}"]),Mustache.render(c,{boxTitle:a,color:b})},itemTem=function(a,b){""!=b&&null!=b&&void 0!=b||(b="#");const c='<li style="padding-left: 35px; padding-bottom: 20px;" >                    <div class="pull-left editable searchable" data-type="text">${itemTitle}</div >                    <a  href="${href}" target="_blank" style="margin-top: 0px;" class="searchable btn btn-info btn-sm glyphicon glyphicon-link"></a>                             <div class="pull-right" >                                <button style="margin: 0;" class="btn btn-sm btn-danger glyphicon glyphicon-trash btnRemoveItem" ></button >                    </div >                 </li >';return Mustache.parse(c,["${","}"]),Mustache.render(c,{itemTitle:a,href:b})},hookEditable=function(){$(".editable").editable({success:save})},hookItemBtns=function(){$(".btnRemoveItem").unbind("click"),$(".btnRemoveItem").click(function(){var a=$(this).parent().prev().text().trim(),b=$(this).closest("li");alertify.confirm('Are you sure to delete : "'+a+'"',function(c){c?(b.remove(),save(),alertify.success('"'+a+'" Removed.')):alertify.error('Aborted to Delete : "'+a+'".')})})},hookBoxBtns=function(){$(".btnRemoveCategory").unbind("click"),$(".btnRemoveCategory").click(function(){var a=$(this).parent().prev().text().trim(),b=$(this).closest("li");alertify.confirm('Are you sure to delete : "'+a+'"',function(c){c?(b.remove(),save(),alertify.success('"'+a+'" Removed.')):alertify.error('Aborted to Delete : "'+a+'".')})}),$(".btnAddItem").unbind("click"),$(".btnAddItem").click(function(){var a=$(this).parent().parent().nextUntil("ul").find("ul");alertify.prompt("Please inser item name",function(b,c){b?alertify.prompt("Please enter a link",function(b,d){b?(alertify.success('"'+c+" with "+d+'" item added.'),a.append(itemTem(c,d)),hookEditable(),hookItemBtns(),hookSortable(),save()):alertify.error("Cancel adding item")},"Http://"):alertify.error("Cancel adding item")},"")})},hookSortable=function(){$("#right-sortable, #left-sortable").sortable({connectWith:".connected",placeholder:"ui-sortable-placeholder",change:save}),$(".sortable-item").sortable({connectWith:".connected-item",change:save})},clearSearch=function(){$(".searchable").removeClass("animated jello infinite")},save=function(){function a(){data=JSON.stringify(domJSON.toJSON($("#catGroup").get(0))),$.post("data/save",{data:data,_token:$("input[name=_token]").val()})}clearSearch(),setTimeout(a,100)};$(function(){if($("#searchInput").on("keyup",function(a){var b=this;setTimeout(function(){clearSearch();var a=$(b).val().trim();a&&$(".searchable").filter(function(b){
// console.log($(this).text() + " include " + searched + " ? " + $(this).text().includes(searched));
var c=$(this).text().includes(a)||$(this).val().includes(a)||$(this).attr("href")&&$(this).attr("href").includes(a);
// if (!res)
//   $(this).addClass('notSelectSearch');
return c}).addClass("animated jello infinite")},0)}),""!=$("#data").text()&&"{}"!=$("#data").text()&&(json=$.parseJSON($("#data").text()),!$.isEmptyObject(json))){var a=domJSON.toDOM(json);$("#catGroup").wrapAll(a),hookEditable(),hookSortable(),hookItemBtns(),hookBoxBtns()}$("#btnSeialize").click(function(){save()}),$.fn.editable.defaults.mode="popup",hookEditable(),hookBoxBtns(),hookSortable(),$("#btnModalAdd").click(function(){var a=$("#categoryName").val(),b=$("#categoryColor").val(),c=$("input[name=rightLeftRadio]:checked").val();"right"==c?$("#right-panel>ul").append(box(a,b)):$("#left-panel>ul").append(box(a,b)),$("#mdlCategory").modal("toggle"),alertify.success('Created "'+a+'" category with "'+b+'" color on "'+c+'-Side".'),hookEditable(),hookBoxBtns(),hookSortable(),save()}),$("#btnAddBox").click(function(){$("#categoryColor").closest("form")[0].reset(),$("#categoryColor").colorselector()}),$("#categoryColor").colorselector(),$(".collapse").on("hidden.bs.collapse",function(){$(this).removeClass("glyphicon-collapse-up"),$(this).addClass("glyphicon-collapse-down")})});
// Finish Script.