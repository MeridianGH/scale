/*! For license information please see 35.95b83f10.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-button.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_button",(function(){return Button}));__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../components/dist/esm/index-3408babe.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../components/dist/esm/utils-004d7b05.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var buttonIconSizeMap={small:16},Button=function(){function Button(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Button),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.h)(this,hostRef),this.size="large",this.variant="primary",this.disabled=!1,this.iconOnly=!1,this.iconPosition="before",this.target="_self",this.handleClick=function(ev){if(Object(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_12__.d)(_this.hostElement)){var parentForm=_this.hostElement.closest("form");if(parentForm){ev.preventDefault();var fakeButton=document.createElement("button");_this.type&&(fakeButton.type=_this.type),fakeButton.style.display="none",parentForm.appendChild(fakeButton),fakeButton.click(),fakeButton.remove()}}}}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Button,[{key:"handleHostClick",value:function handleHostClick(event){!0===this.disabled&&event.stopImmediatePropagation()}},{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.focusableElement.focus();case 1:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(){return _setFocus.apply(this,arguments)})},{key:"connectedCallback",value:function connectedCallback(){this.setIconPositionProp(),this.appendEnterKeySubmitFallback()}},{key:"componentDidLoad",value:function componentDidLoad(){this.setChildrenIconSize()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.cleanUpEnterKeySubmitFallback()}},{key:"appendEnterKeySubmitFallback",value:function appendEnterKeySubmitFallback(){if(Object(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_12__.d)(this.hostElement)){var parentForm=this.hostElement.closest("form");if(null==parentForm)return;if(null!=parentForm.querySelector('input[type="submit"]'))return;this.fallbackSubmitInputElement=document.createElement("input"),this.fallbackSubmitInputElement.type="submit",this.fallbackSubmitInputElement.hidden=!0,parentForm.appendChild(this.fallbackSubmitInputElement)}}},{key:"cleanUpEnterKeySubmitFallback",value:function cleanUpEnterKeySubmitFallback(){if(null!=this.fallbackSubmitInputElement)try{this.fallbackSubmitInputElement.remove(),this.fallbackSubmitInputElement=null}catch(err){}}},{key:"setIconPositionProp",value:function setIconPositionProp(){var nodes=Array.from(this.hostElement.childNodes).filter((function(node){return!(3===node.nodeType&&""===node.nodeValue.trim())})),lastNode=nodes.length>1?nodes[nodes.length-1]:null;!this.iconOnly&&lastNode&&Object(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_12__.e)(lastNode)&&(this.iconPosition="after")}},{key:"setChildrenIconSize",value:function setChildrenIconSize(){var _this2=this;null!=this.size&&null!=buttonIconSizeMap[this.size]&&Array.from(this.hostElement.children).filter(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_12__.e).forEach((function(icon){24===icon.size&&(icon.size=buttonIconSizeMap[_this2.size])}))}},{key:"render",value:function render(){var _this3=this,basePart=Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_11__.a)("base",this.variant&&"variant-"+this.variant,this.iconOnly&&"icon-only",!this.iconOnly&&this.iconPosition,this.disabled&&"disabled");return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.f)(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.b,null,this.styles&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.f)("style",null,this.styles),this.href?Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.f)("a",{ref:function ref(el){return _this3.focusableElement=el},class:this.getCssClassMap(),href:this.href,download:this.download,target:this.target,rel:"_blank"===this.target?"noopener noreferrer":void 0,part:basePart,tabIndex:this.innerTabindex},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.f)("slot",null)):Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.f)("button",{ref:function ref(el){return _this3.focusableElement=el},class:this.getCssClassMap(),onClick:this.handleClick,disabled:this.disabled,type:this.type,part:basePart,tabIndex:this.innerTabindex,name:this.name,value:this.value},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.f)("slot",null)))}},{key:"getCssClassMap",value:function getCssClassMap(){return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_11__.a)("button",this.size&&"button--size-"+this.size,this.variant&&"button--variant-"+this.variant,this.iconOnly&&"button--icon-only",!this.iconOnly&&this.iconPosition&&"button--icon-"+this.iconPosition,this.disabled&&!this.href&&"button--disabled")}},{key:"hostElement",get:function get(){return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_10__.e)(this)}}]),Button}();Button.style=":host{--width:auto;--spacing-x:var(--telekom-spacing-unit-x6);--spacing-x-icon-only:var(--telekom-spacing-unit-x2);--min-height:var(--telekom-spacing-unit-x10);--radius:var(--telekom-radius-standard);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus);--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing-icon-x:var(--telekom-spacing-unit-x2);--vertical-align:middle;--font-size-small:var(--telekom-typography-font-size-small);--line-height-small:var(--telekom-typography-line-spacing-standard);--min-height-small:var(--telekom-spacing-unit-x8);--radius-primary:var(--radius);--background-primary:var(--telekom-color-primary-standard);--background-primary-hover:var(--telekom-color-primary-hovered);--background-primary-active:var(--telekom-color-primary-pressed);--background-primary-disabled:var(--telekom-color-ui-disabled);--color-primary:var(--telekom-color-text-and-icon-white-standard);--color-primary-disabled:var(--telekom-color-text-and-icon-disabled);--radius-secondary:var(--radius);--border-width-secondary:var(--telekom-spacing-unit-x025);--background-secondary:transparent;--color-secondary:var(--telekom-color-text-and-icon-standard);--color-secondary-hover:var(--telekom-color-text-and-icon-standard);--color-secondary-active:var(--telekom-color-text-and-icon-standard);--color-secondary-disabled:var(--telekom-color-text-and-icon-disabled);--background-secondary:var(--telekom-color-ui-state-fill-standard);--background-secondary-hover:var(--telekom-color-ui-state-fill-hovered);--background-secondary-active:var(--telekom-color-ui-state-fill-pressed);--background-secondary-disabled:none;--border-secondary:var(--telekom-color-ui-border-standard);--border-secondary-hover:var(--telekom-color-ui-border-hovered);--border-secondary-active:var(--telekom-color-ui-border-pressed);--border-secondary-focus:var(--telekom-color-functional-focus);--radius-ghost:var(--radius);--border-width-ghost:var(--telekom-spacing-unit-x025);--spacing-x-ghost:var(--telekom-spacing-unit-x2);--color-ghost:var(--telekom-color-text-and-icon-primary-standard);--color-ghost-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-ghost-active:var(--telekom-color-text-and-icon-primary-pressed);--color-ghost-disabled:var(--telekom-color-text-and-icon-disabled);--background-ghost-hover:var(--telekom-color-ui-state-fill-hovered);--background-ghost-active:var(--telekom-color-ui-state-fill-pressed);display:inline-flex}.button{box-sizing:border-box;display:inline-flex;align-items:center;position:relative;border:0;outline:none;cursor:pointer;user-select:none;font-family:inherit;word-spacing:inherit;letter-spacing:inherit;justify-content:center;text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);min-height:var(--min-height);width:var(--width);padding-left:var(--spacing-x);padding-right:var(--spacing-x);vertical-align:var(--vertical-align);transition:var(--transition)}.button:not(.button--disabled):focus{box-shadow:var(--box-shadow-focus)}.button.button--icon-before ::slotted(*){margin-right:var(--spacing-icon-x)}.button.button--icon-after ::slotted(*){margin-left:var(--spacing-icon-x)}.button:after{top:0;left:0;width:100%;border:var(--telekom-spacing-unit-x025) solid transparent;height:100%;content:'';display:block;position:absolute;box-sizing:border-box;pointer-events:none;border-radius:var(--radius)}.button--size-small{font-size:var(--font-size-small);line-height:var(--line-height-small);min-height:var(--min-height-small)}.button--icon-only{padding-left:var(--spacing-x-icon-only);padding-right:var(--spacing-x-icon-only)}.button--disabled{cursor:not-allowed}.button--variant-primary{text-align:center;border-radius:var(--radius);background:var(--background-primary);color:var(--color-primary)}.button--variant-primary:not(.button--disabled):hover{background:var(--background-primary-hover)}.button--variant-primary:not(.button--disabled):active{background:var(--background-primary-active)}.button--disabled.button--variant-primary{background:var(--background-primary-disabled);color:var(--color-primary-disabled)}.button--variant-secondary{background:var(--background-secondary);text-align:center;border-radius:var(--radius-secondary);border:var(--border-width-secondary) solid currentColor;color:var(--color-secondary);background-color:var(--background-secondary);border-color:var(--border-secondary)}.button--variant-secondary:not(.button--disabled):hover{color:var(--color-secondary-hover);background-color:var(--background-secondary-hover);border-color:var(--border-secondary-hover)}.button--variant-secondary:not(.button--disabled):active{color:var(--color-secondary-active);background-color:var(--background-secondary-active);border-color:var(--border-secondary-active)}.button--disabled.button--variant-secondary{color:var(--color-secondary-disabled);background-color:var(--background-secondary-disabled)}.button--variant-ghost{background:transparent;text-align:center;border-radius:var(--radius-ghost);border:var(--border-width-ghost) solid transparent;color:var(--color-ghost);padding-left:var(--spacing-x-ghost);padding-right:var(--spacing-x-ghost)}.button--variant-ghost:not(.button--disabled):hover{color:var(--color-ghost-hover);background-color:var(--background-ghost-hover)}.button--variant-ghost:not(.button--disabled):active{color:var(--color-ghost-active);background-color:var(--background-ghost-active)}.button--disabled.button--variant-ghost{color:var(--color-ghost-disabled)}"},"../components/dist/esm/utils-004d7b05.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"c",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"e",(function(){return isScaleIcon}));var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)}}}]);
//# sourceMappingURL=35.95b83f10.iframe.bundle.js.map