(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return promiseResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registerInstance; });
var __extends=undefined&&undefined.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=undefined&&undefined.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{i(r.next(e))}catch(e){o(e)}}function l(e){try{i(r["throw"](e))}catch(e){o(e)}}function i(e){e.done?n(e.value):a(e.value).then(s,l)}i((r=r.apply(e,t||[])).next())}))};var __generator=undefined&&undefined.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return i([e,t])}}function i(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(o=s[0]&2?a["return"]:s[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;if(a=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];a=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=undefined&&undefined.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e};var NAMESPACE="taro-components";var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var queuePending=false;var win=typeof window!=="undefined"?window:{};var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var addHostEventListeners=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],o=n[2];var s=getHostListenerTarget(e,r);var l=hostListenerProxy(t,o);var i=hostListenerOpts(r);plt.ael(s,a,l,i);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(s,a,l,i)}))}))}};var hostListenerProxy=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(e){consoleError(e)}}};var getHostListenerTarget=function(e,t){if(t&4)return doc;return e};var hostListenerOpts=function(e){return(e&2)!==0};var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var XLINK_NS="http://www.w3.org/1999/xlink";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,n){var r=styles.get(e);if(supportsConstructibleStylesheets&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}styles.set(e,r)};var addStyle=function(e,t,n,r){var a=getScopeId(t);var o=styles.get(a);e=e.nodeType===11?e:doc;if(o){if(typeof o==="string"){e=e.head||e;var s=rootAppliedStyles.get(e);var l=void 0;if(!s){rootAppliedStyles.set(e,s=new Set)}if(!s.has(a)){{{l=doc.createElement("style");l.innerHTML=o}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[o])}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=createTime("attachStyles",t.$tagName$);addStyle(n.getRootNode(),t);r()};var getScopeId=function(e,t){return"sc-"+e.$tagName$};var EMPTY_OBJ={};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var o=null;var s=null;var l=false;var i=false;var c=[];var f=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(l&&i){c[c.length-1].$text$+=a}else{c.push(l?newVNode(null,a):a)}i=l}}};f(n);if(t){if(t.key){o=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,c,vdomFnUtils)}var $=newVNode(e,null);$.$attrs$=t;if(c.length>0){$.$children$=c}{$.$key$=o}{$.$name$=s}return $};var newVNode=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}{n.$name$=null}return n};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var vdomFnUtils={forEach:function(e,t){return e.map(convertToPublic).forEach(t)},map:function(e,t){return e.map(convertToPublic).map(t).map(convertToPrivate)}};var convertToPublic=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return h.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var n=newVNode(e.vtag,e.vtext);n.$attrs$=e.vattrs;n.$children$=e.vchildren;n.$key$=e.vkey;n.$name$=e.vname;return n};var setAccessor=function(e,t,n,r,a,o){if(n!==r){var s=isMemberInElement(e,t);var l=t.toLowerCase();if(t==="class"){var i=e.classList;var c=parseClassList(n);var f=parseClassList(r);i.remove.apply(i,c.filter((function(e){return e&&!f.includes(e)})));i.add.apply(i,f.filter((function(e){return e&&!c.includes(e)})))}else if(t==="style"){{for(var u in n){if(!r||r[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in r){if(!n||r[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,r[u])}else{e.style[u]=r[u]}}}}else if(t==="key");else if(t==="ref"){if(r){r(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,l)){t=l.slice(2)}else{t=l[2]+t.slice(3)}if(n){plt.rel(e,t,n,false)}if(r){plt.ael(e,t,r,false)}}else{var $=isComplexType(r);if((s||$&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var d=r==null?"":r;if(t==="list"){s=false}else if(n==null||e[t]!=d){e[t]=d}}else{e[t]=r}}catch(e){}}var v=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){t=l;v=true}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){if(v){e.removeAttributeNS(XLINK_NS,t)}else{e.removeAttribute(t)}}}else if((!s||o&4||a)&&!$){r=r===true?"":r;if(v){e.setAttributeNS(XLINK_NS,t,r)}else{e.setAttribute(t,r)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var s=t.$attrs$||EMPTY_OBJ;{for(r in o){if(!(r in s)){setAccessor(a,r,o[r],undefined,n,t.$flags$)}}}for(r in s){setAccessor(a,r,o[r],s[r],n,t.$flags$)}};var createElm=function(e,t,n,r){var a=t.$children$[n];var o=0;var s;var l;var i;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){s=a.$elm$=doc.createTextNode(a.$text$)}else if(a.$flags$&1){s=a.$elm$=doc.createTextNode("")}else{s=a.$elm$=doc.createElement(a.$flags$&2?"slot-fb":a.$tag$);{updateElement(null,a,isSvgMode)}if(a.$children$){for(o=0;o<a.$children$.length;++o){l=createElm(e,a,o);if(l){s.appendChild(l)}}}}{s["s-hn"]=hostTagName;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=contentRef;s["s-sn"]=a.$name$||"";i=e&&e.$children$&&e.$children$[n];if(i&&i.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false)}}}return s};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true}if(t){putBackInOriginalLocation(a,t)}}plt.$flags$&=~1};var addVnodes=function(e,t,n,r,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=o;++a){if(r[a]){l=createElm(null,n,a);if(l){r[a].$elm$=l;s.insertBefore(l,referenceNode(t))}}}};var removeVnodes=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;callNodeRefs(r);{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove()}else{putBackInOriginalLocation(a,true)}}a.remove()}}};var updateChildren=function(e,t,n,r){var a=0;var o=0;var s=0;var l=0;var i=t.length-1;var c=t[0];var f=t[i];var u=r.length-1;var $=r[0];var d=r[u];var v;var p;while(a<=i&&o<=u){if(c==null){c=t[++a]}else if(f==null){f=t[--i]}else if($==null){$=r[++o]}else if(d==null){d=r[--u]}else if(isSameVnode(c,$)){patch(c,$);c=t[++a];$=r[++o]}else if(isSameVnode(f,d)){patch(f,d);f=t[--i];d=r[--u]}else if(isSameVnode(c,d)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(c.$elm$.parentNode,false)}patch(c,d);e.insertBefore(c.$elm$,f.$elm$.nextSibling);c=t[++a];d=r[--u]}else if(isSameVnode(f,$)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(f.$elm$.parentNode,false)}patch(f,$);e.insertBefore(f.$elm$,c.$elm$);f=t[--i];$=r[++o]}else{s=-1;{for(l=a;l<=i;++l){if(t[l]&&t[l].$key$!==null&&t[l].$key$===$.$key$){s=l;break}}}if(s>=0){p=t[s];if(p.$tag$!==$.$tag$){v=createElm(t&&t[o],n,s)}else{patch(p,$);t[s]=undefined;v=p.$elm$}$=r[++o]}else{v=createElm(t&&t[o],n,o);$=r[++o]}if(v){{parentReferenceNode(c.$elm$).insertBefore(v,referenceNode(c.$elm$))}}}}if(a>i){addVnodes(e,r[u+1]==null?null:r[u+1].$elm$,n,r,o,u)}else if(o>u){removeVnodes(t,a,i)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var o=t.$tag$;var s=t.$text$;var l;if(s===null){{if(o==="slot");else{updateElement(e,t,isSvgMode)}}if(r!==null&&a!==null){updateChildren(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}addVnodes(n,null,t,a,0,a.length-1)}else if(r!==null){removeVnodes(r,0,r.length-1)}}else if(l=n["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){n.data=s}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var n;var r;var a;var o;var s;var l;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(o=0;o<a;o++){l=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||s!==""){if(l===1&&s===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(l===1||l===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}updateFallbackSlotVisibility(n)}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var n;var r;var a;var o;var s;var l=0;var i=e.childNodes;var c=i.length;for(;l<c;l++){t=i[l];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){r=n.parentNode.childNodes;a=t["s-sn"];for(s=r.length-1;s>=0;s--){n=r[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(n,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));checkSlotFallbackVisibility=true;n["s-sn"]=n["s-sn"]||a;if(o){o.$slotRefNode$=t}else{relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:n})}if(n["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,n["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===n}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===n}))){relocateNodes.push({$nodeToRelocate$:n})}}}}if(t.nodeType===1){relocateSlotContent(t)}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var callNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(callNodeRefs)}};var renderVdom=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=n.tagName;o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=n;{contentRef=n["s-cr"];useNativeShadowDom=(r.$flags$&1)!==0;checkSlotFallbackVisibility=false}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var s=void 0;var l=void 0;var i=void 0;var c=void 0;var f=void 0;var u=void 0;var $=0;for(;$<relocateNodes.length;$++){s=relocateNodes[$];l=s.$nodeToRelocate$;if(!l["s-ol"]){i=doc.createTextNode("");i["s-nr"]=l;l.parentNode.insertBefore(l["s-ol"]=i,l)}}for($=0;$<relocateNodes.length;$++){s=relocateNodes[$];l=s.$nodeToRelocate$;if(s.$slotRefNode$){c=s.$slotRefNode$.parentNode;f=s.$slotRefNode$.nextSibling;i=l["s-ol"];while(i=i.previousSibling){u=i["s-nr"];if(u&&u["s-sn"]===l["s-sn"]&&c===u.parentNode){u=u.nextSibling;if(!u||!u["s-nr"]){f=u;break}}}if(!f&&c!==l.parentNode||l.nextSibling!==f){if(l!==f){if(!l["s-hn"]&&l["s-ol"]){l["s-hn"]=l["s-ol"].parentNode.nodeName}c.insertBefore(l,f)}}}else{if(l.nodeType===1){l.hidden=true}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$)}plt.$flags$&=~1;relocateNodes.length=0}};var getElement=function(e){return getHostRef(e).$hostElement$};var createEvent=function(e,t,n){var r=getElement(e);return{emit:function(e){return emitEvent(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}};var emitEvent=function(e,t,n){var r=plt.ce(t,n);e.dispatchEvent(r);return r};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var n=function(){return dispatchHooks(e,t)};return writeTask(n)};var dispatchHooks=function(e,t){var n=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return safeCall(r,t,n)}));e.$queuedListeners$=null}}{a=safeCall(r,"componentWillLoad")}}else{{a=safeCall(r,"componentWillUpdate")}}n();return then(a,(function(){return updateComponent(e,r,t)}))};var updateComponent=function(e,t,n){return __awaiter(void 0,void 0,void 0,(function(){var r,a,o,s,l,i;return __generator(this,(function(c){r=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);o=r["s-rc"];if(n){attachStyles(e)}s=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(o){o.map((function(e){return e()}));r["s-rc"]=undefined}s();a();{l=r["s-p"];i=function(){return postUpdateComponent(e)};if(l.length===0){i()}else{Promise.all(l).then(i);e.$flags$|=4;l.length=0}}return[2]}))}))};var callRender=function(e,t,n){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(t){consoleError(t,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=createTime("postUpdate",t);var a=e.$lazyInstance$;var o=e.$ancestorComponent$;{safeCall(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(n)}{safeCall(a,"componentDidLoad")}r();{e.$onReadyResolve$(n);if(!o){appDidLoad()}}}else{{safeCall(a,"componentDidUpdate")}r()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(e){consoleError(e)}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,n,r){var a=getHostRef(e);var o=a.$hostElement$;var s=a.$instanceValues$.get(t);var l=a.$flags$;var i=a.$lazyInstance$;n=parsePropertyValue(n,r.$members$[t][0]);if((!(l&8)||s===undefined)&&n!==s){a.$instanceValues$.set(t,n);if(i){if(r.$watchers$&&l&128){var c=r.$watchers$[t];if(c){c.map((function(e){try{i[e](n,s,t)}catch(e){consoleError(e,o)}}))}}if((l&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],o=e[1][0];if(o&31||n&2&&o&32){Object.defineProperty(a,r,{get:function(){return getValue(this,r)},set:function(e){setValue(this,r,e,t)},configurable:true,enumerable:true})}else if(n&1&&o&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=getHostRef(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})}}));if(n&1){var o=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;plt.jmp((function(){var t=o.get(e);if(r.hasOwnProperty(t)){n=r[t];delete r[t]}r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var t=e[0],n=e[1];var r=n[1]||t;o.set(r,t);return r}))}}return e};var initializeComponent=function(e,t,n,r,a){return __awaiter(void 0,void 0,void 0,(function(){var e,r,o,s,l,i,c;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(n);if(!a.then)return[3,2];e=uniqueTime();return[4,a];case 1:a=f.sent();e();f.label=2;case 2:if(!a.isProxied){{n.$watchers$=a.watchers}proxyComponent(a,n,2);a.isProxied=true}r=createTime("createInstance",n.$tagName$);{t.$flags$|=8}try{new a(t)}catch(e){consoleError(e)}{t.$flags$&=~8}{t.$flags$|=128}r();if(a.style){o=a.style;s=getScopeId(n);if(!styles.has(s)){l=createTime("registerStyles",n.$tagName$);registerStyle(s,o,!!(n.$flags$&1));l()}}f.label=3;case 3:i=t.$ancestorComponent$;c=function(){return scheduleUpdate(t,true)};if(i&&i["s-rc"]){i["s-rc"].push(c)}else{c()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$cmpMeta$;var r=createTime("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(n.$flags$&(4|8)){setContentReference(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){attachToAncestor(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{initializeComponent(e,t,n)}}else{addHostEventListeners(e,t,n.$listeners$)}r()}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var n=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{safeCall(n,"disconnectedCallback")}}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var n=createTime();var r=[];var a=t.exclude||[];var o=win.customElements;var s=doc.head;var l=s.querySelector("meta[charset]");var i=doc.createElement("style");var c=[];var f;var u=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}{n.$listeners$=t[3]}{n.$watchers$={}}var s=n.$tagName$;var l=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;registerHost(t,n);return r}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if(u){c.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(s)&&!o.get(s)){r.push(s);o.define(s,proxyComponent(l,n,1))}}))}));{i.innerHTML=r+HYDRATED_CSS;i.setAttribute("data-styles","");s.insertBefore(i,l?l.nextSibling:s.firstChild)}u=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return f=setTimeout(appDidLoad,30)}))}}n()};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,n,t.$listeners$);return hostRefs.set(e,n)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[r]}return __webpack_require__(46)("./"+a+".entry.js").then((function(e){{cmpModules.set(a,e)}return e[r]}),consoleError)};var styles=new Map;var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(n){e.push(n);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){consoleError(e)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMPTY_ARR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_OBJ; });
/* unused harmony export animationEvents */
/* unused harmony export box */
/* unused harmony export cacheDataGet */
/* unused harmony export cacheDataHas */
/* unused harmony export cacheDataSet */
/* unused harmony export capitalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return controlledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultReconciler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ensure; });
/* unused harmony export events */
/* unused harmony export focusComponents */
/* unused harmony export getUniqueKey */
/* unused harmony export hasOwn */
/* unused harmony export indent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return internalComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isBoolean; });
/* unused harmony export isBooleanStringLiteral */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isFunction; });
/* unused harmony export isNull */
/* unused harmony export isNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObject; });
/* unused harmony export isString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isUndefined; });
/* unused harmony export mergeInternalComponents */
/* unused harmony export mergeReconciler */
/* unused harmony export nestElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return noop; });
/* unused harmony export processApis */
/* unused harmony export queryToJson */
/* unused harmony export setUniqueKeyToRoute */
/* unused harmony export singleQuote */
/* unused harmony export styles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toDashed; });
/* unused harmony export toKebabCase */
/* unused harmony export touchEvents */
/* unused harmony export unbox */
/* unused harmony export unsupport */
/* unused harmony export voidElements */
/* unused harmony export warn */
function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isNull(o) {
    return o === null;
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isBoolean(o) {
    return o === true || o === false;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}
const isArray = Array.isArray;

const styles = {
    style: `i.${"st" /* Style */}`,
    class: `i.${"cl" /* Class */}`
};
const events = {
    bindtap: 'eh'
};
const touchEvents = {
    bindTouchStart: '',
    bindTouchMove: '',
    bindTouchEnd: '',
    bindTouchCancel: '',
    bindLongTap: ''
};
const animationEvents = {
    bindAnimationStart: '',
    bindAnimationIteration: '',
    bindAnimationEnd: '',
    bindTransitionEnd: ''
};
function singleQuote(s) {
    return `'${s}'`;
}
const View = Object.assign(Object.assign({ 'hover-class': singleQuote('none'), 'hover-stop-propagation': 'false', 'hover-start-time': '50', 'hover-stay-time': '400', animation: '' }, touchEvents), animationEvents);
const Icon = {
    type: '',
    size: '23',
    color: ''
};
const MapComp = Object.assign({ longitude: '', latitude: '', scale: '16', markers: '[]', covers: '', polyline: '[]', circles: '[]', controls: '[]', 'include-points': '[]', 'show-location': '', 'layer-style': '1', bindMarkerTap: '', bindControlTap: '', bindCalloutTap: '', bindUpdated: '' }, touchEvents);
const Progress = {
    percent: '',
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: 'false',
    'active-mode': singleQuote('backwards'),
    'show-info': 'false'
};
const RichText = {
    nodes: '[]'
};
const Text = {
    selectable: 'false',
    space: '',
    decode: 'false'
};
const Button = Object.assign({ size: singleQuote('default'), type: '', plain: 'false', disabled: '', loading: 'false', 'form-type': '', 'open-type': '', 'hover-class': singleQuote('button-hover'), 'hover-stop-propagation': 'false', 'hover-start-time': '20', 'hover-stay-time': '70', name: '' }, touchEvents);
const Checkbox = {
    value: '',
    disabled: '',
    checked: 'false',
    color: singleQuote('#09BB07'),
    name: ''
};
const CheckboxGroup = {
    bindChange: '',
    name: ''
};
const Form = {
    'report-submit': 'false',
    bindSubmit: '',
    bindReset: '',
    name: ''
};
const Input = {
    value: '',
    type: singleQuote(''),
    password: 'false',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: '',
    maxlength: '140',
    'cursor-spacing': '0',
    focus: 'false',
    'confirm-type': singleQuote('done'),
    'confirm-hold': 'false',
    cursor: 'i.value.length',
    'selection-start': '-1',
    'selection-end': '-1',
    bindInput: '',
    bindFocus: '',
    bindBlur: '',
    bindConfirm: '',
    name: ''
};
const Label = {
    for: '',
    name: ''
};
const Picker = {
    mode: singleQuote('selector'),
    disabled: '',
    range: '',
    'range-key': '',
    value: '',
    start: '',
    end: '',
    fields: singleQuote('day'),
    'custom-item': '',
    name: '',
    bindCancel: '',
    bindChange: '',
    bindColumnChange: ''
};
const PickerView = {
    value: '',
    'indicator-style': '',
    'indicator-class': '',
    'mask-style': '',
    'mask-class': '',
    bindChange: '',
    name: ''
};
const PickerViewColumn = {
    name: ''
};
const Radio = {
    value: '',
    checked: 'false',
    disabled: '',
    color: singleQuote('#09BB07'),
    name: ''
};
const RadioGroup = {
    bindChange: '',
    name: ''
};
const Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: '',
    value: '0',
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': 'false',
    bindChange: '',
    bindChanging: '',
    name: ''
};
const Switch = {
    checked: 'false',
    disabled: '',
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: '',
    name: ''
};
const Textarea = {
    value: '',
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': singleQuote('textarea-placeholder'),
    disabled: '',
    maxlength: '140',
    'auto-focus': 'false',
    focus: 'false',
    'auto-height': 'false',
    fixed: 'false',
    'cursor-spacing': '0',
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindFocus: '',
    bindBlur: '',
    bindLineChange: '',
    bindInput: '',
    bindConfirm: '',
    name: ''
};
const CoverImage = {
    src: '',
    bindLoad: 'eh',
    bindError: 'eh'
};
const CoverView = Object.assign({ 'scroll-top': 'false' }, touchEvents);
const MovableArea = {
    'scale-area': 'false'
};
const MovableView = Object.assign(Object.assign({ direction: 'none', inertia: 'false', 'out-of-bounds': 'false', x: '', y: '', damping: '20', friction: '2', disabled: '', scale: 'false', 'scale-min': '0.5', 'scale-max': '10', 'scale-value': '1', animation: 'true', bindChange: '', bindScale: '', bindHTouchMove: '', bindVTouchMove: '', width: singleQuote('10px'), height: singleQuote('10px') }, touchEvents), animationEvents);
const ScrollView = Object.assign(Object.assign({ 'scroll-x': 'false', 'scroll-y': 'false', 'upper-threshold': '50', 'lower-threshold': '50', 'scroll-top': '', 'scroll-left': '', 'scroll-into-view': '', 'scroll-with-animation': 'false', 'enable-back-to-top': 'false', bindScrollToUpper: '', bindScrollToLower: '', bindScroll: '' }, touchEvents), animationEvents);
const Swiper = Object.assign({ 'indicator-dots': 'false', 'indicator-color': singleQuote('rgba(0, 0, 0, .3)'), 'indicator-active-color': singleQuote('#000000'), autoplay: 'false', current: '0', interval: '5000', duration: '500', circular: 'false', vertical: 'false', 'previous-margin': '\'0px\'', 'next-margin': '\'0px\'', 'display-multiple-items': '1', bindChange: '', bindTransition: '', bindAnimationFinish: '' }, touchEvents);
const SwiperItem = {
    'item-id': ''
};
const Navigator = {
    url: '',
    'open-type': singleQuote('navigate'),
    delta: '1',
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': 'false',
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: '',
    bindFail: '',
    bindComplete: ''
};
const Audio = {
    id: '',
    src: '',
    loop: 'false',
    controls: 'false',
    poster: '',
    name: '',
    author: '',
    bindError: '',
    bindPlay: '',
    bindPause: '',
    bindTimeUpdate: '',
    bindEnded: ''
};
const Camera = {
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    bindStop: '',
    bindError: ''
};
const Image = Object.assign({ src: '', mode: singleQuote('scaleToFill'), 'lazy-load': 'false', bindError: '', bindLoad: '' }, touchEvents);
const LivePlayer = {
    src: '',
    autoplay: 'false',
    muted: 'false',
    orientation: singleQuote('vertical'),
    'object-fit': singleQuote('contain'),
    'background-mute': 'false',
    'min-cache': '1',
    'max-cache': '3',
    animation: '',
    bindStateChange: '',
    bindFullScreenChange: '',
    bindNetStatus: ''
};
const Video = {
    src: '',
    duration: '',
    controls: 'true',
    'danmu-list': '',
    'danmu-btn': '',
    'enable-danmu': '',
    autoplay: 'false',
    loop: 'false',
    muted: 'false',
    'initial-time': '0',
    'page-gesture': 'false',
    direction: '',
    'show-progress': 'true',
    'show-fullscreen-btn': 'true',
    'show-play-btn': 'true',
    'show-center-play-btn': 'true',
    'enable-progress-gesture': 'true',
    'object-fit': singleQuote('contain'),
    poster: '',
    'show-mute-btn': 'false',
    animation: '',
    bindPlay: '',
    bindPause: '',
    bindEnded: '',
    bindTimeUpdate: '',
    bindFullScreenChange: '',
    bindWaiting: '',
    bindError: ''
};
const Canvas = Object.assign({ 'canvas-id': '', 'disable-scroll': 'false', bindError: '' }, touchEvents);
const Ad = {
    'unit-id': '',
    'ad-intervals': '',
    bindLoad: '',
    bindError: '',
    bindClose: ''
};
const WebView = {
    src: '',
    bindMessage: '',
    bindLoad: '',
    bindError: ''
};
const Block = {};
// For Vue，因为 slot 标签被 vue 占用了
const SlotView = {
    name: ''
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
const Slot = {
    name: ''
};
const internalComponents = {
    View,
    Icon,
    Progress,
    RichText,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    Video,
    Canvas,
    Ad,
    WebView,
    Block,
    Map: MapComp,
    Slot,
    SlotView
};
const controlledComponent = new Set([
    'input',
    'checkbox',
    'picker',
    'picker-view',
    'radio',
    'slider',
    'switch',
    'textarea'
]);
const focusComponents = new Set([
    'input',
    'textarea'
]);
const voidElements = new Set([
    'progress',
    'icon',
    'rich-text',
    'input',
    'textarea',
    'slider',
    'switch',
    'audio',
    'ad',
    'official-account',
    'open-data',
    'navigation-bar'
]);
const nestElements = new Map([
    ['view', -1],
    ['catch-view', -1],
    ['cover-view', -1],
    ['static-view', -1],
    ['pure-view', -1],
    ['block', -1],
    ['text', -1],
    ['static-text', 6],
    ['slot', 8],
    ['slot-view', 8],
    ['label', 6],
    ['form', 4],
    ['scroll-view', 4],
    ['swiper', 4],
    ['swiper-item', 4]
]);

const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const noop = (..._) => { };
const defaultReconciler = Object.create(null);
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
const box = (v) => ({ v });
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
const unbox = (b) => b.v;
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
        else {
            nextCap = true;
        }
    }
    return camel;
}
const toKebabCase = function (string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
    if (!condition) {
        throw new Error(msg + '\n' + reportIssue);
    }
}
function warn(condition, msg) {
    if (false) {}
}
function queryToJson(str) {
    const dec = decodeURIComponent;
    const qp = str.split('&');
    const ret = {};
    let name;
    let val;
    for (let i = 0, l = qp.length, item; i < l; ++i) {
        item = qp[i];
        if (item.length) {
            const s = item.indexOf('=');
            if (s < 0) {
                name = dec(item);
                val = '';
            }
            else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
            }
            if (typeof ret[name] === 'string') { // inline'd type check
                ret[name] = [ret[name]];
            }
            if (Array.isArray(ret[name])) {
                ret[name].push(val);
            }
            else {
                ret[name] = val;
            }
        }
    }
    return ret; // Object
}
let _uniqueId = 1;
const _loadTime = (new Date()).getTime().toString();
function getUniqueKey() {
    return _loadTime + (_uniqueId++);
}
const cacheData = {};
function cacheDataSet(key, val) {
    cacheData[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
    const temp = cacheData[key];
    delelteAfterGet && delete cacheData[key];
    return temp;
}
function cacheDataHas(key) {
    return key in cacheData;
}
function mergeInternalComponents(components) {
    Object.keys(components).forEach(name => {
        if (name in internalComponents) {
            Object.assign(internalComponents[name], components[name]);
        }
        else {
            internalComponents[name] = components[name];
        }
    });
}
function mergeReconciler(hostConfig) {
    Object.keys(hostConfig).forEach(key => {
        const value = hostConfig[key];
        const raw = defaultReconciler[key];
        if (!raw) {
            defaultReconciler[key] = value;
        }
        else {
            if (isArray(raw)) {
                defaultReconciler[key] = raw.push(value);
            }
            else {
                defaultReconciler[key] = [raw, value];
            }
        }
    });
}
function unsupport(api) {
    return function () {
        console.warn(`小程序暂不支持 ${api}`);
    };
}
function setUniqueKeyToRoute(key, obj) {
    const routerParamsPrivateKey = '__key_';
    const useDataCacheApis = [
        'navigateTo',
        'redirectTo',
        'reLaunch',
        'switchTab'
    ];
    if (useDataCacheApis.indexOf(key) > -1) {
        const url = obj.url = obj.url || '';
        const hasMark = url.indexOf('?') > -1;
        const cacheKey = getUniqueKey();
        obj.url += (hasMark ? '&' : '?') + `${routerParamsPrivateKey}=${cacheKey}`;
    }
}
function indent(str, size) {
    return str.split('\n')
        .map((line, index) => {
        const indent = index === 0 ? '' : Array(size).fill(' ').join('');
        return indent + line;
    })
        .join('\n');
}

const needPromiseApis = new Set([
    'addPhoneContact',
    'authorize',
    'canvasGetImageData',
    'canvasPutImageData',
    'canvasToTempFilePath',
    'checkSession',
    'chooseAddress',
    'chooseImage',
    'chooseInvoiceTitle',
    'chooseLocation',
    'chooseVideo',
    'clearStorage',
    'closeBLEConnection',
    'closeBluetoothAdapter',
    'closeSocket',
    'compressImage',
    'connectSocket',
    'createBLEConnection',
    'downloadFile',
    'exitMiniProgram',
    'getAvailableAudioSources',
    'getBLEDeviceCharacteristics',
    'getBLEDeviceServices',
    'getBatteryInfo',
    'getBeacons',
    'getBluetoothAdapterState',
    'getBluetoothDevices',
    'getClipboardData',
    'getConnectedBluetoothDevices',
    'getConnectedWifi',
    'getExtConfig',
    'getFileInfo',
    'getImageInfo',
    'getLocation',
    'getNetworkType',
    'getSavedFileInfo',
    'getSavedFileList',
    'getScreenBrightness',
    'getSetting',
    'getStorage',
    'getStorageInfo',
    'getSystemInfo',
    'getUserInfo',
    'getWifiList',
    'hideHomeButton',
    'hideShareMenu',
    'hideTabBar',
    'hideTabBarRedDot',
    'loadFontFace',
    'login',
    'makePhoneCall',
    'navigateBack',
    'navigateBackMiniProgram',
    'navigateTo',
    'navigateToBookshelf',
    'navigateToMiniProgram',
    'notifyBLECharacteristicValueChange',
    'hideKeyboard',
    'hideLoading',
    'hideNavigationBarLoading',
    'hideToast',
    'openBluetoothAdapter',
    'openDocument',
    'openLocation',
    'openSetting',
    'pageScrollTo',
    'previewImage',
    'queryBookshelf',
    'reLaunch',
    'readBLECharacteristicValue',
    'redirectTo',
    'removeSavedFile',
    'removeStorage',
    'removeTabBarBadge',
    'requestSubscribeMessage',
    'saveFile',
    'saveImageToPhotosAlbum',
    'saveVideoToPhotosAlbum',
    'scanCode',
    'sendSocketMessage',
    'setBackgroundColor',
    'setBackgroundTextStyle',
    'setClipboardData',
    'setEnableDebug',
    'setInnerAudioOption',
    'setKeepScreenOn',
    'setNavigationBarColor',
    'setNavigationBarTitle',
    'setScreenBrightness',
    'setStorage',
    'setTabBarBadge',
    'setTabBarItem',
    'setTabBarStyle',
    'showActionSheet',
    'showFavoriteGuide',
    'showLoading',
    'showModal',
    'showShareMenu',
    'showTabBar',
    'showTabBarRedDot',
    'showToast',
    'startBeaconDiscovery',
    'startBluetoothDevicesDiscovery',
    'startDeviceMotionListening',
    'startPullDownRefresh',
    'stopBeaconDiscovery',
    'stopBluetoothDevicesDiscovery',
    'stopCompass',
    'startCompass',
    'startAccelerometer',
    'stopAccelerometer',
    'showNavigationBarLoading',
    'stopDeviceMotionListening',
    'stopPullDownRefresh',
    'switchTab',
    'uploadFile',
    'vibrateLong',
    'vibrateShort',
    'writeBLECharacteristicValue'
]);
function getCanIUseWebp(taro) {
    return function () {
        if (typeof taro.getSystemInfoSync !== 'function') {
            console.error('不支持 API canIUseWebp');
            return false;
        }
        const { platform } = taro.getSystemInfoSync();
        const platformLower = platform.toLowerCase();
        if (platformLower === 'android' || platformLower === 'devtools') {
            return true;
        }
        return false;
    };
}
function getNormalRequest(global) {
    return function request(options) {
        options = options || {};
        if (typeof options === 'string') {
            options = {
                url: options
            };
        }
        const originSuccess = options.success;
        const originFail = options.fail;
        const originComplete = options.complete;
        let requestTask;
        const p = new Promise((resolve, reject) => {
            options.success = res => {
                originSuccess && originSuccess(res);
                resolve(res);
            };
            options.fail = res => {
                originFail && originFail(res);
                reject(res);
            };
            options.complete = res => {
                originComplete && originComplete(res);
            };
            requestTask = global.request(options);
        });
        p.abort = (cb) => {
            cb && cb();
            if (requestTask) {
                requestTask.abort();
            }
            return p;
        };
        return p;
    };
}
function processApis(taro, global, config = {}) {
    const patchNeedPromiseApis = config.needPromiseApis || [];
    const _needPromiseApis = new Set([...patchNeedPromiseApis, ...needPromiseApis]);
    const preserved = [
        'getEnv',
        'interceptors',
        'Current',
        'getCurrentInstance',
        'options',
        'nextTick',
        'eventCenter',
        'Events',
        'preload',
        'webpackJsonp'
    ];
    const apis = new Set(!config.isOnlyPromisify
        ? Object.keys(global).filter(api => preserved.indexOf(api) === -1)
        : patchNeedPromiseApis);
    if (config.modifyApis) {
        config.modifyApis(apis);
    }
    apis.forEach(key => {
        if (_needPromiseApis.has(key)) {
            const originKey = key;
            taro[originKey] = (options = {}, ...args) => {
                let key = originKey;
                // 第一个参数 options 为字符串，单独处理
                if (typeof options === 'string') {
                    if (args.length) {
                        return global[key](options, ...args);
                    }
                    return global[key](options);
                }
                // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
                if (config.transformMeta) {
                    const transformResult = config.transformMeta(key, options);
                    key = transformResult.key;
                    options = transformResult.options;
                    // 新 key 可能不存在
                    if (!global.hasOwnProperty(key)) {
                        return unsupport(key)();
                    }
                }
                let task = null;
                const obj = Object.assign({}, options);
                // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。
                setUniqueKeyToRoute(key, options);
                // Promise 化
                const p = new Promise((resolve, reject) => {
                    obj.success = res => {
                        var _a, _b;
                        (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
                        (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                        if (key === 'connectSocket') {
                            resolve(Promise.resolve().then(() => task ? Object.assign(task, res) : res));
                        }
                        else {
                            resolve(res);
                        }
                    };
                    obj.fail = res => {
                        var _a;
                        (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                        reject(res);
                    };
                    obj.complete = res => {
                        var _a;
                        (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    };
                    if (args.length) {
                        task = global[key](obj, ...args);
                    }
                    else {
                        task = global[key](obj);
                    }
                });
                // 给 promise 对象挂载属性
                if (key === 'uploadFile' || key === 'downloadFile') {
                    p.progress = cb => {
                        task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
                        return p;
                    };
                    p.abort = cb => {
                        cb === null || cb === void 0 ? void 0 : cb();
                        task === null || task === void 0 ? void 0 : task.abort();
                        return p;
                    };
                }
                return p;
            };
        }
        else {
            let platformKey = key;
            // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
            if (config.transformMeta) {
                platformKey = config.transformMeta(key, {}).key;
            }
            // API 不存在
            if (!global.hasOwnProperty(platformKey)) {
                taro[key] = unsupport(key);
                return;
            }
            if (typeof global[key] === 'function') {
                taro[key] = (...args) => {
                    if (config.handleSyncApis) {
                        return config.handleSyncApis(key, global, args);
                    }
                    else {
                        return global[platformKey].apply(global, args);
                    }
                };
            }
            else {
                taro[key] = global[platformKey];
            }
        }
    });
    !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */
function equipCommonApis(taro, global, apis = {}) {
    taro.canIUseWebp = getCanIUseWebp(taro);
    taro.getCurrentPages = getCurrentPages || unsupport('getCurrentPages');
    taro.getApp = getApp || unsupport('getApp');
    taro.env = global.env || {};
    try {
        taro.requirePlugin = requirePlugin || unsupport('requirePlugin');
    }
    catch (error) {
        taro.requirePlugin = unsupport('requirePlugin');
    }
    // request & interceptors
    const request = apis.request ? apis.request : getNormalRequest(global);
    function taroInterceptor(chain) {
        return request(chain.requestParams);
    }
    const link = new taro.Link(taroInterceptor);
    taro.request = link.request.bind(link);
    taro.addInterceptor = link.addInterceptor.bind(link);
    taro.cleanInterceptors = link.cleanInterceptors.bind(link);
    taro.miniGlobal = taro.options.miniGlobal = global;
}


//# sourceMappingURL=shared.esm.js.map


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "r", function() { return /* binding */ View; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ Icon; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ Progress; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* binding */ Text; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Button; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Checkbox; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ Form; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ react_Input; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ Label; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ Picker; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ Radio; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ Slider; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ Switch; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* binding */ Textarea; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ ScrollView; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ Swiper; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ SwiperItem; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ Image; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* binding */ WebView; });

// UNUSED EXPORTS: RichText, CheckboxGroup, Editor, PickerView, PickerViewColumn, RadioGroup, CoverImage, CoverView, MovableArea, MovableView, FunctionalPageNavigator, Navigator, Audio, Camera, LivePlayer, Video, Map, Canvas, Ad, OfficialAccount, OpenData, NavigationBar, Block, CustomWrapper

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(22);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(24);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(25);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(7);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(11);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(32);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./node_modules/@tarojs/components/dist-h5/react/utils/reactify-wc.js










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * https://github.com/BBKolton/reactify-wc/
 * modified event naming
 **/
 // eslint-disable-next-line

var h = external_React_default.a.createElement;
var SCROLL_VIEW = 'taro-scroll-view-core'; // 为了不要覆盖 wc 中 host 内置的 class 和 stencil 加入的 class

function getClassName(wc, prevProps, props) {
  var classList = Array.from(wc.classList);
  var oldClassNames = (prevProps.className || prevProps.class || '').split(' ');
  var incomingClassNames = (props.className || props.class || '').split(' ');
  var finalClassNames = [];
  classList.forEach(function (classname) {
    if (incomingClassNames.indexOf(classname) > -1) {
      finalClassNames.push(classname);
      incomingClassNames = incomingClassNames.filter(function (name) {
        return name !== classname;
      });
    } else if (oldClassNames.indexOf(classname) === -1) {
      finalClassNames.push(classname);
    }
  });
  finalClassNames = [].concat(toConsumableArray_default()(finalClassNames), toConsumableArray_default()(incomingClassNames));
  return finalClassNames.join(' ');
}

function updateStyle(dom, key, val) {
  if (/^--/.test(key)) {
    // css variable
    dom.style.setProperty(key, val);
  } else {
    dom.style[key] = val;
  }
}

function updateProp(ctx, comp, propKey, prevProps, props) {
  var dom = ctx.ref.current;
  var val = props[propKey];
  var prevVal = prevProps ? prevProps[propKey] : undefined;

  if (propKey === 'children') {
    return;
  }

  if (propKey.toLowerCase() === 'classname') {
    dom.className = prevProps ? getClassName(dom, prevProps, props) : val;
    return;
  }

  if (propKey === 'style') {
    if (typeof val === 'string') {
      dom.setAttribute(propKey, val);
      return;
    }

    if (!val) {
      dom.removeAttribute(propKey);
      return;
    }

    if (prevProps) {
      if (typeof prevVal === 'string') {
        dom.style.cssText = '';
      } else {
        for (var styleKey in prevVal) {
          updateStyle(dom, styleKey, '');
        }
      }
    }

    for (var _styleKey in val) {
      updateStyle(dom, _styleKey, val[_styleKey]);
    }

    return;
  }

  if (/^data-.+/.test(propKey)) {
    dom.setAttribute(propKey, val);
  }

  if (comp === SCROLL_VIEW) {
    if (propKey === 'scrollTop') {
      dom.mpScrollTop = val;
      return;
    }

    if (propKey === 'scrollLeft') {
      dom.mpScrollLeft = val;
      return;
    }

    if (propKey === 'scrollIntoView') {
      dom.mpScrollIntoView = val;
      return;
    }
  }

  if (typeof val === 'function' && propKey.match(/^on[A-Z]/)) {
    var event = propKey.substr(2).toLowerCase();
    var fn = val; // 解决用户监听 ScrollView 的 onScroll 会监听到原生 onScroll 的问题

    if (comp === SCROLL_VIEW && event === 'scroll') {
      fn = function fn(e) {
        if (e instanceof CustomEvent) {
          val.apply(null, Array.from(arguments));
        }
      };
    }

    ctx.eventHandlers.push([event, fn]);
    return dom.addEventListener(event, fn);
  }

  if (typeof val === 'string' || typeof val === 'number') {
    dom.setAttribute(propKey, val);
    dom[propKey] = val;
    return;
  }

  if (typeof val === 'boolean') {
    if (val) {
      dom[propKey] = true;
      return dom.setAttribute(propKey, val);
    }

    dom[propKey] = false;
    return dom.removeAttribute(propKey);
  }

  dom[propKey] = val;
}

var reactify_wc_reactifyWebComponent = function reactifyWebComponent(WC) {
  var Index = /*#__PURE__*/function (_React$Component) {
    inherits_default()(Index, _React$Component);

    var _super = _createSuper(Index);

    function Index(props) {
      var _this;

      classCallCheck_default()(this, Index);

      _this = _super.call(this, props);
      _this.eventHandlers = [];
      _this.ref = /*#__PURE__*/Object(external_React_["createRef"])();
      return _this;
    }

    createClass_default()(Index, [{
      key: "update",
      value: function update(prevProps) {
        var _this2 = this;

        this.clearEventHandlers();
        if (!this.ref.current) return;
        Object.keys(prevProps || {}).forEach(function (key) {
          if (key !== 'children' && key !== 'key' && !(key in _this2.props)) {
            updateProp(_this2, WC, key, prevProps, _this2.props);
          }
        });
        Object.keys(this.props).forEach(function (key) {
          updateProp(_this2, WC, key, prevProps, _this2.props);
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this.update(prevProps);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var forwardRef = this.props.forwardRef;

        if (typeof forwardRef === 'function') {
          forwardRef(this.ref.current);
        } else if (forwardRef && typeof_default()(forwardRef) === 'object' && forwardRef.hasOwnProperty('current')) {
          forwardRef.current = this.ref.current;
        } else if (typeof forwardRef === 'string') {
          console.warn('内置组件不支持字符串 ref');
        }

        this.update();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearEventHandlers();
      }
    }, {
      key: "clearEventHandlers",
      value: function clearEventHandlers() {
        var _this3 = this;

        this.eventHandlers.forEach(function (_ref) {
          var _ref2 = slicedToArray_default()(_ref, 2),
              event = _ref2[0],
              handler = _ref2[1];

          if (!_this3.ref.current) return;

          _this3.ref.current.removeEventListener(event, handler);
        });
        this.eventHandlers = [];
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            dangerouslySetInnerHTML = _this$props.dangerouslySetInnerHTML;
        var props = {
          ref: this.ref
        };
        if (dangerouslySetInnerHTML) props.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
        return /*#__PURE__*/Object(external_React_["createElement"])(WC, props, children);
      }
    }]);

    return Index;
  }(external_React_default.a.Component);

  return /*#__PURE__*/external_React_default.a.forwardRef(function (props, ref) {
    return /*#__PURE__*/external_React_default.a.createElement(Index, _objectSpread(_objectSpread({}, props), {}, {
      forwardRef: ref
    }));
  });
};

/* harmony default export */ var reactify_wc = (reactify_wc_reactifyWebComponent);
// CONCATENATED MODULE: ./node_modules/@tarojs/components/dist-h5/react/components/input.js


function input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { input_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Input = reactify_wc('taro-input-core'); // eslint-disable-next-line

var input_h = external_React_default.a.createElement;
/* harmony default export */ var input = (/*#__PURE__*/external_React_default.a.forwardRef(function (props, ref) {
  var args = input_objectSpread({}, props);

  if (args.hasOwnProperty('focus')) {
    args.autoFocus = Boolean(args.focus);
    delete args.focus;
  }

  return /*#__PURE__*/external_React_default.a.createElement(Input, input_objectSpread(input_objectSpread({}, args), {}, {
    ref: ref
  }));
}));
// CONCATENATED MODULE: ./node_modules/@tarojs/components/dist-h5/react/index.js


var View = reactify_wc('taro-view-core');
var Icon = reactify_wc('taro-icon-core');
var Progress = reactify_wc('taro-progress-core');
var RichText = reactify_wc('taro-rich-text-core');
var Text = reactify_wc('taro-text-core');
var Button = reactify_wc('taro-button-core');
var Checkbox = reactify_wc('taro-checkbox-core');
var CheckboxGroup = reactify_wc('taro-checkbox-group-core');
var Editor = reactify_wc('taro-editor-core');
var Form = reactify_wc('taro-form-core');
var react_Input = input;
var Label = reactify_wc('taro-label-core');
var Picker = reactify_wc('taro-picker-core');
var PickerView = reactify_wc('taro-picker-view-core');
var PickerViewColumn = reactify_wc('taro-picker-view-column-core');
var Radio = reactify_wc('taro-radio-core');
var RadioGroup = reactify_wc('taro-radio-group-core');
var Slider = reactify_wc('taro-slider-core');
var Switch = reactify_wc('taro-switch-core');
var CoverImage = reactify_wc('taro-cover-image-core');
var Textarea = reactify_wc('taro-textarea-core');
var CoverView = reactify_wc('taro-cover-view-core');
var MovableArea = reactify_wc('taro-movable-area-core');
var MovableView = reactify_wc('taro-movable-view-core');
var ScrollView = reactify_wc('taro-scroll-view-core');
var Swiper = reactify_wc('taro-swiper-core');
var SwiperItem = reactify_wc('taro-swiper-item-core');
var FunctionalPageNavigator = reactify_wc('taro-functional-page-navigator-core');
var Navigator = reactify_wc('taro-navigator-core');
var Audio = reactify_wc('taro-audio-core');
var Camera = reactify_wc('taro-camera-core');
var Image = reactify_wc('taro-image-core');
var LivePlayer = reactify_wc('taro-live-player-core');
var Video = reactify_wc('taro-video-core');
var Map = reactify_wc('taro-map-core');
var Canvas = reactify_wc('taro-canvas-core');
var Ad = reactify_wc('taro-ad-core');
var OfficialAccount = reactify_wc('taro-official-account-core');
var OpenData = reactify_wc('taro-open-data-core');
var WebView = reactify_wc('taro-web-view-core');
var NavigationBar = reactify_wc('taro-navigation-bar-core');
var Block = reactify_wc('taro-block-core');
var CustomWrapper = reactify_wc('taro-custom-wrapper-core');

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classnames; });
function createCommonjsModule(r,e,o){return o={path:e,exports:{},require:function(r,e){return commonjsRequire()}},r(o,o.exports),o.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var classnames=createCommonjsModule((function(r){
/*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var e={}.hasOwnProperty;function o(){var r=[];for(var n=0;n<arguments.length;n++){var t=arguments[n];if(!t)continue;var s=typeof t;if(s==="string"||s==="number"){r.push(t)}else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);if(i){r.push(i)}}}else if(s==="object"){if(t.toString===Object.prototype.toString){for(var u in t){if(e.call(t,u)&&t[u]){r.push(u)}}}else{r.push(t.toString())}}}return r.join(" ")}if(r.exports){o.default=o;r.exports=o}else{window.classNames=o}})()}));

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementNames", function() { return ElementNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_IDENTIFIER", function() { return SERVICE_IDENTIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElement", function() { return SVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNativeComponentConfig", function() { return createNativeComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVue3App", function() { return createVue3App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPluginHooks", function() { return processPluginHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddToFavorites", function() { return useAddToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidHide", function() { return useDidHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidShow", function() { return useDidShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScope", function() { return useScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareTimeline", function() { return useShareTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() { return useTabItemTap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inversify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/** https://github.com/rbuckton/reflect-metadata */

if (process.env.TARO_ENV === 'h5') {
  __webpack_require__(130);
} else {
  // var Reflect;
  (function (Reflect) {
      // Metadata Proposal
      // https://rbuckton.github.io/reflect-metadata/
      (function (factory) {
          // var root = typeof global === "object" ? global :
          //     typeof self === "object" ? self :
          //         typeof this === "object" ? this :
          //             Function("return this;")();
          var exporter = makeExporter(Reflect);
          // if (typeof root.Reflect === "undefined") {
          //     root.Reflect = Reflect;
          // }
          // else {
          //     exporter = makeExporter(root.Reflect, exporter);
          // }
          factory(exporter);
          function makeExporter(target, previous) {
              return function (key, value) {
                  if (typeof target[key] !== "function") {
                      Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                  }
                  if (previous)
                      previous(key, value);
              };
          }
      })(function (exporter) {
          var hasOwn = Object.prototype.hasOwnProperty;
          // feature test for Symbol support
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
          var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
              // create an object in dictionary mode (a.k.a. "slow" mode in v8)
              create: supportsCreate
                  ? function () { return MakeDictionary(Object.create(null)); }
                  : supportsProto
                      ? function () { return MakeDictionary({ __proto__: null }); }
                      : function () { return MakeDictionary({}); },
              has: downLevel
                  ? function (map, key) { return hasOwn.call(map, key); }
                  : function (map, key) { return key in map; },
              get: downLevel
                  ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                  : function (map, key) { return map[key]; },
          };
          // Load global or shim versions of Map, Set, and WeakMap
          var functionPrototype = Object.getPrototypeOf(Function);
          var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
          var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          // [[Metadata]] internal slot
          // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
          var Metadata = new _WeakMap();
          /**
           * Applies a set of decorators to a property of a target object.
           * @param decorators An array of decorators.
           * @param target The target object.
           * @param propertyKey (Optional) The property key to decorate.
           * @param attributes (Optional) The property descriptor for the target key.
           * @remarks Decorators are applied in reverse order.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     Example = Reflect.decorate(decoratorsArray, Example);
           *
           *     // property (on constructor)
           *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
           *
           *     // property (on prototype)
           *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
           *
           *     // method (on constructor)
           *     Object.defineProperty(Example, "staticMethod",
           *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
           *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
           *
           *     // method (on prototype)
           *     Object.defineProperty(Example.prototype, "method",
           *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
           *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
           *
           */
          function decorate(decorators, target, propertyKey, attributes) {
              if (!IsUndefined(propertyKey)) {
                  if (!IsArray(decorators))
                      throw new TypeError();
                  if (!IsObject(target))
                      throw new TypeError();
                  if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                      throw new TypeError();
                  if (IsNull(attributes))
                      attributes = undefined;
                  propertyKey = ToPropertyKey(propertyKey);
                  return DecorateProperty(decorators, target, propertyKey, attributes);
              }
              else {
                  if (!IsArray(decorators))
                      throw new TypeError();
                  if (!IsConstructor(target))
                      throw new TypeError();
                  return DecorateConstructor(decorators, target);
              }
          }
          exporter("decorate", decorate);
          // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
          // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
          /**
           * A default metadata decorator factory that can be used on a class, class member, or parameter.
           * @param metadataKey The key for the metadata entry.
           * @param metadataValue The value for the metadata entry.
           * @returns A decorator function.
           * @remarks
           * If `metadataKey` is already defined for the target and target key, the
           * metadataValue for that key will be overwritten.
           * @example
           *
           *     // constructor
           *     @Reflect.metadata(key, value)
           *     class Example {
           *     }
           *
           *     // property (on constructor, TypeScript only)
           *     class Example {
           *         @Reflect.metadata(key, value)
           *         static staticProperty;
           *     }
           *
           *     // property (on prototype, TypeScript only)
           *     class Example {
           *         @Reflect.metadata(key, value)
           *         property;
           *     }
           *
           *     // method (on constructor)
           *     class Example {
           *         @Reflect.metadata(key, value)
           *         static staticMethod() { }
           *     }
           *
           *     // method (on prototype)
           *     class Example {
           *         @Reflect.metadata(key, value)
           *         method() { }
           *     }
           *
           */
          function metadata(metadataKey, metadataValue) {
              function decorator(target, propertyKey) {
                  if (!IsObject(target))
                      throw new TypeError();
                  if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                      throw new TypeError();
                  OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
              }
              return decorator;
          }
          exporter("metadata", metadata);
          /**
           * Define a unique metadata entry on the target.
           * @param metadataKey A key used to store and retrieve metadata.
           * @param metadataValue A value that contains attached metadata.
           * @param target The target object on which to define metadata.
           * @param propertyKey (Optional) The property key for the target.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     Reflect.defineMetadata("custom:annotation", options, Example);
           *
           *     // property (on constructor)
           *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
           *
           *     // property (on prototype)
           *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
           *
           *     // method (on constructor)
           *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
           *
           *     // method (on prototype)
           *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
           *
           *     // decorator factory as metadata-producing annotation.
           *     function MyAnnotation(options): Decorator {
           *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
           *     }
           *
           */
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          exporter("defineMetadata", defineMetadata);
          /**
           * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
           * @param metadataKey A key used to store and retrieve metadata.
           * @param target The target object on which the metadata is defined.
           * @param propertyKey (Optional) The property key for the target.
           * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     result = Reflect.hasMetadata("custom:annotation", Example);
           *
           *     // property (on constructor)
           *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
           *
           *     // property (on prototype)
           *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
           *
           *     // method (on constructor)
           *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
           *
           *     // method (on prototype)
           *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
           *
           */
          function hasMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasMetadata", hasMetadata);
          /**
           * Gets a value indicating whether the target object has the provided metadata key defined.
           * @param metadataKey A key used to store and retrieve metadata.
           * @param target The target object on which the metadata is defined.
           * @param propertyKey (Optional) The property key for the target.
           * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
           *
           *     // property (on constructor)
           *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
           *
           *     // property (on prototype)
           *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
           *
           *     // method (on constructor)
           *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
           *
           *     // method (on prototype)
           *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
           *
           */
          function hasOwnMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasOwnMetadata", hasOwnMetadata);
          /**
           * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
           * @param metadataKey A key used to store and retrieve metadata.
           * @param target The target object on which the metadata is defined.
           * @param propertyKey (Optional) The property key for the target.
           * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     result = Reflect.getMetadata("custom:annotation", Example);
           *
           *     // property (on constructor)
           *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
           *
           *     // property (on prototype)
           *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
           *
           *     // method (on constructor)
           *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
           *
           *     // method (on prototype)
           *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
           *
           */
          function getMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          exporter("getMetadata", getMetadata);
          /**
           * Gets the metadata value for the provided metadata key on the target object.
           * @param metadataKey A key used to store and retrieve metadata.
           * @param target The target object on which the metadata is defined.
           * @param propertyKey (Optional) The property key for the target.
           * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     result = Reflect.getOwnMetadata("custom:annotation", Example);
           *
           *     // property (on constructor)
           *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
           *
           *     // property (on prototype)
           *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
           *
           *     // method (on constructor)
           *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
           *
           *     // method (on prototype)
           *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
           *
           */
          function getOwnMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("getOwnMetadata", getOwnMetadata);
          /**
           * Gets the metadata keys defined on the target object or its prototype chain.
           * @param target The target object on which the metadata is defined.
           * @param propertyKey (Optional) The property key for the target.
           * @returns An array of unique metadata keys.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     result = Reflect.getMetadataKeys(Example);
           *
           *     // property (on constructor)
           *     result = Reflect.getMetadataKeys(Example, "staticProperty");
           *
           *     // property (on prototype)
           *     result = Reflect.getMetadataKeys(Example.prototype, "property");
           *
           *     // method (on constructor)
           *     result = Reflect.getMetadataKeys(Example, "staticMethod");
           *
           *     // method (on prototype)
           *     result = Reflect.getMetadataKeys(Example.prototype, "method");
           *
           */
          function getMetadataKeys(target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryMetadataKeys(target, propertyKey);
          }
          exporter("getMetadataKeys", getMetadataKeys);
          /**
           * Gets the unique metadata keys defined on the target object.
           * @param target The target object on which the metadata is defined.
           * @param propertyKey (Optional) The property key for the target.
           * @returns An array of unique metadata keys.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     result = Reflect.getOwnMetadataKeys(Example);
           *
           *     // property (on constructor)
           *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
           *
           *     // property (on prototype)
           *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
           *
           *     // method (on constructor)
           *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
           *
           *     // method (on prototype)
           *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
           *
           */
          function getOwnMetadataKeys(target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          /**
           * Deletes the metadata entry from the target object with the provided key.
           * @param metadataKey A key used to store and retrieve metadata.
           * @param target The target object on which the metadata is defined.
           * @param propertyKey (Optional) The property key for the target.
           * @returns `true` if the metadata entry was found and deleted; otherwise, false.
           * @example
           *
           *     class Example {
           *         // property declarations are not part of ES6, though they are valid in TypeScript:
           *         // static staticProperty;
           *         // property;
           *
           *         constructor(p) { }
           *         static staticMethod(p) { }
           *         method(p) { }
           *     }
           *
           *     // constructor
           *     result = Reflect.deleteMetadata("custom:annotation", Example);
           *
           *     // property (on constructor)
           *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
           *
           *     // property (on prototype)
           *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
           *
           *     // method (on constructor)
           *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
           *
           *     // method (on prototype)
           *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
           *
           */
          function deleteMetadata(metadataKey, target, propertyKey) {
              if (!IsObject(target))
                  throw new TypeError();
              if (!IsUndefined(propertyKey))
                  propertyKey = ToPropertyKey(propertyKey);
              var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
              if (IsUndefined(metadataMap))
                  return false;
              if (!metadataMap.delete(metadataKey))
                  return false;
              if (metadataMap.size > 0)
                  return true;
              var targetMetadata = Metadata.get(target);
              targetMetadata.delete(propertyKey);
              if (targetMetadata.size > 0)
                  return true;
              Metadata.delete(target);
              return true;
          }
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
              for (var i = decorators.length - 1; i >= 0; --i) {
                  var decorator = decorators[i];
                  var decorated = decorator(target);
                  if (!IsUndefined(decorated) && !IsNull(decorated)) {
                      if (!IsConstructor(decorated))
                          throw new TypeError();
                      target = decorated;
                  }
              }
              return target;
          }
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
              for (var i = decorators.length - 1; i >= 0; --i) {
                  var decorator = decorators[i];
                  var decorated = decorator(target, propertyKey, descriptor);
                  if (!IsUndefined(decorated) && !IsNull(decorated)) {
                      if (!IsObject(decorated))
                          throw new TypeError();
                      descriptor = decorated;
                  }
              }
              return descriptor;
          }
          function GetOrCreateMetadataMap(O, P, Create) {
              var targetMetadata = Metadata.get(O);
              if (IsUndefined(targetMetadata)) {
                  if (!Create)
                      return undefined;
                  targetMetadata = new _Map();
                  Metadata.set(O, targetMetadata);
              }
              var metadataMap = targetMetadata.get(P);
              if (IsUndefined(metadataMap)) {
                  if (!Create)
                      return undefined;
                  metadataMap = new _Map();
                  targetMetadata.set(P, metadataMap);
              }
              return metadataMap;
          }
          // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
          // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
          function OrdinaryHasMetadata(MetadataKey, O, P) {
              var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
              if (hasOwn)
                  return true;
              var parent = OrdinaryGetPrototypeOf(O);
              if (!IsNull(parent))
                  return OrdinaryHasMetadata(MetadataKey, parent, P);
              return false;
          }
          // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
          // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
              if (IsUndefined(metadataMap))
                  return false;
              return ToBoolean(metadataMap.has(MetadataKey));
          }
          // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
          // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
          function OrdinaryGetMetadata(MetadataKey, O, P) {
              var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
              if (hasOwn)
                  return OrdinaryGetOwnMetadata(MetadataKey, O, P);
              var parent = OrdinaryGetPrototypeOf(O);
              if (!IsNull(parent))
                  return OrdinaryGetMetadata(MetadataKey, parent, P);
              return undefined;
          }
          // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
          // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
              if (IsUndefined(metadataMap))
                  return undefined;
              return metadataMap.get(MetadataKey);
          }
          // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
          // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
              metadataMap.set(MetadataKey, MetadataValue);
          }
          // 3.1.6.1 OrdinaryMetadataKeys(O, P)
          // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
          function OrdinaryMetadataKeys(O, P) {
              var ownKeys = OrdinaryOwnMetadataKeys(O, P);
              var parent = OrdinaryGetPrototypeOf(O);
              if (parent === null)
                  return ownKeys;
              var parentKeys = OrdinaryMetadataKeys(parent, P);
              if (parentKeys.length <= 0)
                  return ownKeys;
              if (ownKeys.length <= 0)
                  return parentKeys;
              var set = new _Set();
              var keys = [];
              for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                  var key = ownKeys_1[_i];
                  var hasKey = set.has(key);
                  if (!hasKey) {
                      set.add(key);
                      keys.push(key);
                  }
              }
              for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                  var key = parentKeys_1[_a];
                  var hasKey = set.has(key);
                  if (!hasKey) {
                      set.add(key);
                      keys.push(key);
                  }
              }
              return keys;
          }
          // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
          // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
          function OrdinaryOwnMetadataKeys(O, P) {
              var keys = [];
              var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
              if (IsUndefined(metadataMap))
                  return keys;
              var keysObj = metadataMap.keys();
              var iterator = GetIterator(keysObj);
              var k = 0;
              while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                      keys.length = k;
                      return keys;
                  }
                  var nextValue = IteratorValue(next);
                  try {
                      keys[k] = nextValue;
                  }
                  catch (e) {
                      try {
                          IteratorClose(iterator);
                      }
                      finally {
                          throw e;
                      }
                  }
                  k++;
              }
          }
          // 6 ECMAScript Data Typ0es and Values
          // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
          function Type(x) {
              if (x === null)
                  return 1 /* Null */;
              switch (typeof x) {
                  case "undefined": return 0 /* Undefined */;
                  case "boolean": return 2 /* Boolean */;
                  case "string": return 3 /* String */;
                  case "symbol": return 4 /* Symbol */;
                  case "number": return 5 /* Number */;
                  case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                  default: return 6 /* Object */;
              }
          }
          // 6.1.1 The Undefined Type
          // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
          function IsUndefined(x) {
              return x === undefined;
          }
          // 6.1.2 The Null Type
          // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
          function IsNull(x) {
              return x === null;
          }
          // 6.1.5 The Symbol Type
          // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
          function IsSymbol(x) {
              return typeof x === "symbol";
          }
          // 6.1.7 The Object Type
          // https://tc39.github.io/ecma262/#sec-object-type
          function IsObject(x) {
              return typeof x === "object" ? x !== null : typeof x === "function";
          }
          // 7.1 Type Conversion
          // https://tc39.github.io/ecma262/#sec-type-conversion
          // 7.1.1 ToPrimitive(input [, PreferredType])
          // https://tc39.github.io/ecma262/#sec-toprimitive
          function ToPrimitive(input, PreferredType) {
              switch (Type(input)) {
                  case 0 /* Undefined */: return input;
                  case 1 /* Null */: return input;
                  case 2 /* Boolean */: return input;
                  case 3 /* String */: return input;
                  case 4 /* Symbol */: return input;
                  case 5 /* Number */: return input;
              }
              var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
              var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
              if (exoticToPrim !== undefined) {
                  var result = exoticToPrim.call(input, hint);
                  if (IsObject(result))
                      throw new TypeError();
                  return result;
              }
              return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          // 7.1.1.1 OrdinaryToPrimitive(O, hint)
          // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
          function OrdinaryToPrimitive(O, hint) {
              if (hint === "string") {
                  var toString_1 = O.toString;
                  if (IsCallable(toString_1)) {
                      var result = toString_1.call(O);
                      if (!IsObject(result))
                          return result;
                  }
                  var valueOf = O.valueOf;
                  if (IsCallable(valueOf)) {
                      var result = valueOf.call(O);
                      if (!IsObject(result))
                          return result;
                  }
              }
              else {
                  var valueOf = O.valueOf;
                  if (IsCallable(valueOf)) {
                      var result = valueOf.call(O);
                      if (!IsObject(result))
                          return result;
                  }
                  var toString_2 = O.toString;
                  if (IsCallable(toString_2)) {
                      var result = toString_2.call(O);
                      if (!IsObject(result))
                          return result;
                  }
              }
              throw new TypeError();
          }
          // 7.1.2 ToBoolean(argument)
          // https://tc39.github.io/ecma262/2016/#sec-toboolean
          function ToBoolean(argument) {
              return !!argument;
          }
          // 7.1.12 ToString(argument)
          // https://tc39.github.io/ecma262/#sec-tostring
          function ToString(argument) {
              return "" + argument;
          }
          // 7.1.14 ToPropertyKey(argument)
          // https://tc39.github.io/ecma262/#sec-topropertykey
          function ToPropertyKey(argument) {
              var key = ToPrimitive(argument, 3 /* String */);
              if (IsSymbol(key))
                  return key;
              return ToString(key);
          }
          // 7.2 Testing and Comparison Operations
          // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
          // 7.2.2 IsArray(argument)
          // https://tc39.github.io/ecma262/#sec-isarray
          function IsArray(argument) {
              return Array.isArray
                  ? Array.isArray(argument)
                  : argument instanceof Object
                      ? argument instanceof Array
                      : Object.prototype.toString.call(argument) === "[object Array]";
          }
          // 7.2.3 IsCallable(argument)
          // https://tc39.github.io/ecma262/#sec-iscallable
          function IsCallable(argument) {
              // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
              return typeof argument === "function";
          }
          // 7.2.4 IsConstructor(argument)
          // https://tc39.github.io/ecma262/#sec-isconstructor
          function IsConstructor(argument) {
              // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
              return typeof argument === "function";
          }
          // 7.2.7 IsPropertyKey(argument)
          // https://tc39.github.io/ecma262/#sec-ispropertykey
          function IsPropertyKey(argument) {
              switch (Type(argument)) {
                  case 3 /* String */: return true;
                  case 4 /* Symbol */: return true;
                  default: return false;
              }
          }
          // 7.3 Operations on Objects
          // https://tc39.github.io/ecma262/#sec-operations-on-objects
          // 7.3.9 GetMethod(V, P)
          // https://tc39.github.io/ecma262/#sec-getmethod
          function GetMethod(V, P) {
              var func = V[P];
              if (func === undefined || func === null)
                  return undefined;
              if (!IsCallable(func))
                  throw new TypeError();
              return func;
          }
          // 7.4 Operations on Iterator Objects
          // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
          function GetIterator(obj) {
              var method = GetMethod(obj, iteratorSymbol);
              if (!IsCallable(method))
                  throw new TypeError(); // from Call
              var iterator = method.call(obj);
              if (!IsObject(iterator))
                  throw new TypeError();
              return iterator;
          }
          // 7.4.4 IteratorValue(iterResult)
          // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
          function IteratorValue(iterResult) {
              return iterResult.value;
          }
          // 7.4.5 IteratorStep(iterator)
          // https://tc39.github.io/ecma262/#sec-iteratorstep
          function IteratorStep(iterator) {
              var result = iterator.next();
              return result.done ? false : result;
          }
          // 7.4.6 IteratorClose(iterator, completion)
          // https://tc39.github.io/ecma262/#sec-iteratorclose
          function IteratorClose(iterator) {
              var f = iterator["return"];
              if (f)
                  f.call(iterator);
          }
          // 9.1 Ordinary Object Internal Methods and Internal Slots
          // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
          // 9.1.1.1 OrdinaryGetPrototypeOf(O)
          // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
          function OrdinaryGetPrototypeOf(O) {
              var proto = Object.getPrototypeOf(O);
              if (typeof O !== "function" || O === functionPrototype)
                  return proto;
              // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
              // Try to determine the superclass constructor. Compatible implementations
              // must either set __proto__ on a subclass constructor to the superclass constructor,
              // or ensure each class has a valid `constructor` property on its prototype that
              // points back to the constructor.
              // If this is not the same as Function.[[Prototype]], then this is definately inherited.
              // This is the case when in ES6 or when using __proto__ in a compatible browser.
              if (proto !== functionPrototype)
                  return proto;
              // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
              var prototype = O.prototype;
              var prototypeProto = prototype && Object.getPrototypeOf(prototype);
              if (prototypeProto == null || prototypeProto === Object.prototype)
                  return proto;
              // If the constructor was not a function, then we cannot determine the heritage.
              var constructor = prototypeProto.constructor;
              if (typeof constructor !== "function")
                  return proto;
              // If we have some kind of self-reference, then we cannot determine the heritage.
              if (constructor === O)
                  return proto;
              // we have a pretty good guess at the heritage.
              return constructor;
          }
          // naive Map shim
          function CreateMapPolyfill() {
              var cacheSentinel = {};
              var arraySentinel = [];
              var MapIterator = /** @class */ (function () {
                  function MapIterator(keys, values, selector) {
                      this._index = 0;
                      this._keys = keys;
                      this._values = values;
                      this._selector = selector;
                  }
                  MapIterator.prototype["@@iterator"] = function () { return this; };
                  MapIterator.prototype[iteratorSymbol] = function () { return this; };
                  MapIterator.prototype.next = function () {
                      var index = this._index;
                      if (index >= 0 && index < this._keys.length) {
                          var result = this._selector(this._keys[index], this._values[index]);
                          if (index + 1 >= this._keys.length) {
                              this._index = -1;
                              this._keys = arraySentinel;
                              this._values = arraySentinel;
                          }
                          else {
                              this._index++;
                          }
                          return { value: result, done: false };
                      }
                      return { value: undefined, done: true };
                  };
                  MapIterator.prototype.throw = function (error) {
                      if (this._index >= 0) {
                          this._index = -1;
                          this._keys = arraySentinel;
                          this._values = arraySentinel;
                      }
                      throw error;
                  };
                  MapIterator.prototype.return = function (value) {
                      if (this._index >= 0) {
                          this._index = -1;
                          this._keys = arraySentinel;
                          this._values = arraySentinel;
                      }
                      return { value: value, done: true };
                  };
                  return MapIterator;
              }());
              return /** @class */ (function () {
                  function Map() {
                      this._keys = [];
                      this._values = [];
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                  }
                  Object.defineProperty(Map.prototype, "size", {
                      get: function () { return this._keys.length; },
                      enumerable: true,
                      configurable: true
                  });
                  Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                  Map.prototype.get = function (key) {
                      var index = this._find(key, /*insert*/ false);
                      return index >= 0 ? this._values[index] : undefined;
                  };
                  Map.prototype.set = function (key, value) {
                      var index = this._find(key, /*insert*/ true);
                      this._values[index] = value;
                      return this;
                  };
                  Map.prototype.delete = function (key) {
                      var index = this._find(key, /*insert*/ false);
                      if (index >= 0) {
                          var size = this._keys.length;
                          for (var i = index + 1; i < size; i++) {
                              this._keys[i - 1] = this._keys[i];
                              this._values[i - 1] = this._values[i];
                          }
                          this._keys.length--;
                          this._values.length--;
                          if (key === this._cacheKey) {
                              this._cacheKey = cacheSentinel;
                              this._cacheIndex = -2;
                          }
                          return true;
                      }
                      return false;
                  };
                  Map.prototype.clear = function () {
                      this._keys.length = 0;
                      this._values.length = 0;
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                  };
                  Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                  Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                  Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                  Map.prototype["@@iterator"] = function () { return this.entries(); };
                  Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                  Map.prototype._find = function (key, insert) {
                      if (this._cacheKey !== key) {
                          this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                      }
                      if (this._cacheIndex < 0 && insert) {
                          this._cacheIndex = this._keys.length;
                          this._keys.push(key);
                          this._values.push(undefined);
                      }
                      return this._cacheIndex;
                  };
                  return Map;
              }());
              function getKey(key, _) {
                  return key;
              }
              function getValue(_, value) {
                  return value;
              }
              function getEntry(key, value) {
                  return [key, value];
              }
          }
          // naive Set shim
          function CreateSetPolyfill() {
              return /** @class */ (function () {
                  function Set() {
                      this._map = new _Map();
                  }
                  Object.defineProperty(Set.prototype, "size", {
                      get: function () { return this._map.size; },
                      enumerable: true,
                      configurable: true
                  });
                  Set.prototype.has = function (value) { return this._map.has(value); };
                  Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                  Set.prototype.delete = function (value) { return this._map.delete(value); };
                  Set.prototype.clear = function () { this._map.clear(); };
                  Set.prototype.keys = function () { return this._map.keys(); };
                  Set.prototype.values = function () { return this._map.values(); };
                  Set.prototype.entries = function () { return this._map.entries(); };
                  Set.prototype["@@iterator"] = function () { return this.keys(); };
                  Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                  return Set;
              }());
          }
          // naive WeakMap shim
          function CreateWeakMapPolyfill() {
              var UUID_SIZE = 16;
              var keys = HashMap.create();
              var rootKey = CreateUniqueKey();
              return /** @class */ (function () {
                  function WeakMap() {
                      this._key = CreateUniqueKey();
                  }
                  WeakMap.prototype.has = function (target) {
                      var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                      return table !== undefined ? HashMap.has(table, this._key) : false;
                  };
                  WeakMap.prototype.get = function (target) {
                      var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                      return table !== undefined ? HashMap.get(table, this._key) : undefined;
                  };
                  WeakMap.prototype.set = function (target, value) {
                      var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                      table[this._key] = value;
                      return this;
                  };
                  WeakMap.prototype.delete = function (target) {
                      var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                      return table !== undefined ? delete table[this._key] : false;
                  };
                  WeakMap.prototype.clear = function () {
                      // NOTE: not a real clear, just makes the previous data unreachable
                      this._key = CreateUniqueKey();
                  };
                  return WeakMap;
              }());
              function CreateUniqueKey() {
                  var key;
                  do
                      key = "@@WeakMap@@" + CreateUUID();
                  while (HashMap.has(keys, key));
                  keys[key] = true;
                  return key;
              }
              function GetOrCreateWeakMapTable(target, create) {
                  if (!hasOwn.call(target, rootKey)) {
                      if (!create)
                          return undefined;
                      Object.defineProperty(target, rootKey, { value: HashMap.create() });
                  }
                  return target[rootKey];
              }
              function FillRandomBytes(buffer, size) {
                  for (var i = 0; i < size; ++i)
                      buffer[i] = Math.random() * 0xff | 0;
                  return buffer;
              }
              function GenRandomBytes(size) {
                  if (typeof Uint8Array === "function") {
                      if (typeof crypto !== "undefined")
                          return crypto.getRandomValues(new Uint8Array(size));
                      if (typeof msCrypto !== "undefined")
                          return msCrypto.getRandomValues(new Uint8Array(size));
                      return FillRandomBytes(new Uint8Array(size), size);
                  }
                  return FillRandomBytes(new Array(size), size);
              }
              function CreateUUID() {
                  var data = GenRandomBytes(UUID_SIZE);
                  // mark as random - RFC 4122 § 4.4
                  data[6] = data[6] & 0x4f | 0x40;
                  data[8] = data[8] & 0xbf | 0x80;
                  var result = "";
                  for (var offset = 0; offset < UUID_SIZE; ++offset) {
                      var byte = data[offset];
                      if (offset === 4 || offset === 6 || offset === 8)
                          result += "-";
                      if (byte < 16)
                          result += "0";
                      result += byte.toString(16).toLowerCase();
                  }
                  return result;
              }
          }
          // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
          function MakeDictionary(obj) {
              obj.__ = undefined;
              delete obj.__;
              return obj;
          }
      });
  })(Reflect || (Reflect = {}));
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

const SERVICE_IDENTIFIER = {
    TaroElement: 'TaroElement',
    TaroElementFactory: 'Factory<TaroElement>',
    TaroText: 'TaroText',
    TaroTextFactory: 'Factory<TaroText>',
    TaroNodeImpl: 'TaroNodeImpl',
    TaroElementImpl: 'TaroElementImpl',
    Hooks: 'hooks',
    onRemoveAttribute: 'onRemoveAttribute',
    getLifecycle: 'getLifecycle',
    getPathIndex: 'getPathIndex',
    getEventCenter: 'getEventCenter',
    isBubbleEvents: 'isBubbleEvents',
    getSpecialNodes: 'getSpecialNodes',
    eventCenter: 'eventCenter',
    modifyMpEvent: 'modifyMpEvent',
    modifyTaroEvent: 'modifyTaroEvent',
    batchedEventUpdates: 'batchedEventUpdates',
    mergePageInstance: 'mergePageInstance',
    createPullDownComponent: 'createPullDownComponent',
    getDOMNode: 'getDOMNode',
    initNativeApi: 'initNativeApi',
    modifyHydrateData: 'modifyHydrateData',
    modifySetAttrPayload: 'modifySetAttrPayload',
    modifyRmAttrPayload: 'modifyRmAttrPayload',
    onAddEvent: 'onAddEvent',
    patchElement: 'patchElement'
};

const PROPERTY_THRESHOLD = 2046;
const HOOKS_APP_ID = 'taro-app';
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';
const ROOT_STR = 'root';
const HTML = 'html';
const HEAD = 'head';
const BODY = 'body';
const APP = 'app';
const CONTAINER = 'container';
const DOCUMENT_ELEMENT_NAME = '#document';
const DOCUMENT_FRAGMENT = 'document-fragment';
const ID = 'id';
const UID = 'uid';
const CLASS = 'class';
const STYLE = 'style';
const FOCUS = 'focus';
const VIEW = 'view';
const STATIC_VIEW = 'static-view';
const PURE_VIEW = 'pure-view';
const PROPS = 'props';
const DATASET = 'dataset';
const OBJECT = 'object';
const VALUE = 'value';
const INPUT = 'input';
const CHANGE = 'change';
const CUSTOM_WRAPPER = 'custom-wrapper';
const TARGET = 'target';
const CURRENT_TARGET = 'currentTarget';
const TYPE = 'type';
const CONFIRM = 'confirm';
const TIME_STAMP = 'timeStamp';
const KEY_CODE = 'keyCode';
const TOUCHMOVE = 'touchmove';
const DATE = 'Date';
const CATCHMOVE = 'catchMove';
const CATCH_VIEW = 'catch-view';
const COMMENT = 'comment';

const incrementId = () => {
    let id = 0;
    return () => (id++).toString();
};
function isElement(node) {
    return node.nodeType === 1 /* ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* TEXT_NODE */;
}
function isComment(node) {
    return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
    const res = Object.keys(el.props).find(prop => {
        return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
    });
    return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
    var _a;
    let res = false;
    while ((node === null || node === void 0 ? void 0 : node.parentElement) && node.parentElement._path !== ROOT_STR) {
        if ((_a = node.parentElement.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
            res = true;
            break;
        }
        node = node.parentElement;
    }
    return res;
}
function shortcutAttr(key) {
    switch (key) {
        case STYLE:
            return "st" /* Style */;
        case ID:
            return UID;
        case CLASS:
            return "cl" /* Class */;
        default:
            return key;
    }
}

let TaroEventTarget = class TaroEventTarget {
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    hooks) {
        this.__handlers = {};
        this.hooks = hooks;
    }
    addEventListener(type, handler, options) {
        var _a, _b;
        (_b = (_a = this.hooks).onAddEvent) === null || _b === void 0 ? void 0 : _b.call(_a, type, handler, options, this);
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.addEventListener('begin', handler, options);
            this.addEventListener('end', handler, options);
            return;
        }
        type = type.toLowerCase();
        const handlers = this.__handlers[type];
        let isCapture = Boolean(options);
        let isOnce = false;
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "i"])(options)) {
            isCapture = Boolean(options.capture);
            isOnce = Boolean(options.once);
        }
        if (isOnce) {
            const wrapper = function () {
                handler.apply(this, arguments); // this 指向 Element
                this.removeEventListener(type, wrapper);
            };
            this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), { once: false }));
            return;
        }
         false && false;
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(handlers)) {
            handlers.push(handler);
        }
        else {
            this.__handlers[type] = [handler];
        }
    }
    removeEventListener(type, handler) {
        type = type.toLowerCase();
        if (handler == null) {
            return;
        }
        const handlers = this.__handlers[type];
        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(handlers)) {
            return;
        }
        const index = handlers.indexOf(handler);
         false && false;
        handlers.splice(index, 1);
    }
    isAnyEventBinded() {
        const handlers = this.__handlers;
        const isAnyEventBinded = Object.keys(handlers).find(key => handlers[key].length);
        return Boolean(isAnyEventBinded);
    }
};
TaroEventTarget = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.Hooks)),
    __metadata("design:paramtypes", [Object])
], TaroEventTarget);

/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
function hydrate(node) {
    var _a, _b;
    const nodeName = node.nodeName;
    if (isText(node)) {
        return {
            ["v" /* Text */]: node.nodeValue,
            ["nn" /* NodeName */]: nodeName
        };
    }
    const data = {
        ["nn" /* NodeName */]: nodeName,
        uid: node.uid
    };
    const { props } = node;
    const SPECIAL_NODES = node.hooks.getSpecialNodes();
    if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
        data["nn" /* NodeName */] = `static-${nodeName}`;
        if (nodeName === VIEW && !isHasExtractProp(node)) {
            data["nn" /* NodeName */] = PURE_VIEW;
        }
    }
    for (const prop in props) {
        const propInCamelCase = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(prop);
        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
            prop !== CLASS &&
            prop !== STYLE &&
            prop !== ID &&
            propInCamelCase !== CATCHMOVE) {
            data[propInCamelCase] = props[prop];
        }
        if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
            data["nn" /* NodeName */] = CATCH_VIEW;
        }
    }
    let { childNodes } = node;
    // 过滤 comment 节点
    childNodes = childNodes.filter(node => !isComment(node));
    if (childNodes.length > 0) {
        data["cn" /* Childnodes */] = childNodes.map(hydrate);
    }
    else {
        data["cn" /* Childnodes */] = [];
    }
    if (node.className !== '') {
        data["cl" /* Class */] = node.className;
    }
    if (node.cssText !== '' && nodeName !== 'swiper-item') {
        data["st" /* Style */] = node.cssText;
    }
    (_b = (_a = node.hooks).modifyHydrateData) === null || _b === void 0 ? void 0 : _b.call(_a, data);
    return data;
}

const eventSource = new Map();

var ElementNames;
(function (ElementNames) {
    ElementNames["Element"] = "Element";
    ElementNames["Document"] = "Document";
    ElementNames["RootElement"] = "RootElement";
    ElementNames["FormElement"] = "FormElement";
})(ElementNames || (ElementNames = {}));

const nodeId = incrementId();
let TaroNode = class TaroNode extends TaroEventTarget {
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    impl, getElement, hooks) {
        super(hooks);
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = (node) => () => hydrate(node);
        impl.bind(this);
        this._getElement = getElement;
        this.uid = `_n_${nodeId()}`;
        eventSource.set(this.uid, this);
    }
    /**
     * like jQuery's $.empty()
     */
    _empty() {
        while (this.childNodes.length > 0) {
            const child = this.childNodes[0];
            child.parentNode = null;
            eventSource.delete(child.uid);
            this.childNodes.shift();
        }
    }
    get _root() {
        var _a;
        return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
    findIndex(refChild) {
        const index = this.childNodes.indexOf(refChild);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* ensure */ "d"])(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    }
    get _path() {
        const parentNode = this.parentNode;
        if (parentNode) {
            // 计算路径时，先过滤掉 comment 节点
            const list = parentNode.childNodes.filter(node => !isComment(node));
            const indexOfNode = list.indexOf(this);
            const index = this.hooks.getPathIndex(indexOfNode);
            return `${parentNode._path}.${"cn" /* Childnodes */}.${index}`;
        }
        return '';
    }
    get nextSibling() {
        const parentNode = this.parentNode;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
    get previousSibling() {
        const parentNode = this.parentNode;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
    get parentElement() {
        const parentNode = this.parentNode;
        if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* ELEMENT_NODE */) {
            return parentNode;
        }
        return null;
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        const childNodes = this.childNodes;
        return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    set textContent(text) {
        this._empty();
        if (text === '') {
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => []
            });
        }
        else {
            const document = this._getElement(ElementNames.Document)();
            this.appendChild(document.createTextNode(text));
        }
    }
    insertBefore(newChild, refChild, isReplace) {
        if (newChild.nodeName === DOCUMENT_FRAGMENT) {
            newChild.childNodes.reduceRight((previousValue, currentValue) => {
                this.insertBefore(currentValue, previousValue);
                return currentValue;
            }, refChild);
            return newChild;
        }
        newChild.remove();
        newChild.parentNode = this;
        let payload;
        if (refChild) {
            const index = this.findIndex(refChild);
            this.childNodes.splice(index, 0, newChild);
            if (isReplace) {
                payload = {
                    path: newChild._path,
                    value: this.hydrate(newChild)
                };
            }
            else {
                payload = {
                    path: `${this._path}.${"cn" /* Childnodes */}`,
                    value: () => {
                        const childNodes = this.childNodes.filter(node => !isComment(node));
                        return childNodes.map(hydrate);
                    }
                };
            }
        }
        else {
            this.childNodes.push(newChild);
            payload = {
                path: newChild._path,
                value: this.hydrate(newChild)
            };
        }
        this.enqueueUpdate(payload);
        if (!eventSource.has(newChild.uid)) {
            eventSource.set(newChild.uid, newChild);
        }
        return newChild;
    }
    appendChild(child) {
        this.insertBefore(child);
    }
    replaceChild(newChild, oldChild) {
        if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild, true);
            oldChild.remove(true);
            return oldChild;
        }
    }
    removeChild(child, isReplace) {
        const index = this.findIndex(child);
        this.childNodes.splice(index, 1);
        if (!isReplace) {
            this.enqueueUpdate({
                path: `${this._path}.${"cn" /* Childnodes */}`,
                value: () => {
                    const childNodes = this.childNodes.filter(node => !isComment(node));
                    return childNodes.map(hydrate);
                }
            });
        }
        child.parentNode = null;
        eventSource.delete(child.uid);
        // @TODO: eventSource memory overflow
        // child._empty()
        return child;
    }
    remove(isReplace) {
        var _a;
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, isReplace);
    }
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    enqueueUpdate(payload) {
        var _a;
        (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
    contains(node) {
        let isContains = false;
        this.childNodes.some(childNode => {
            const { uid } = childNode;
            if (uid === node.uid || uid === node.id || childNode.contains(node)) {
                isContains = true;
                return true;
            }
        });
        return isContains;
    }
    get ownerDocument() {
        const document = this._getElement(ElementNames.Document)();
        return document;
    }
};
TaroNode = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.Hooks)),
    __metadata("design:paramtypes", [Function, Function, Function])
], TaroNode);

let TaroText = class TaroText extends TaroNode {
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    nodeImpl, getElement, hooks) {
        super(nodeImpl, getElement, hooks);
        this.nodeType = 3 /* TEXT_NODE */;
        this.nodeName = '#text';
    }
    set textContent(text) {
        this._value = text;
        this.enqueueUpdate({
            path: `${this._path}.${"v" /* Text */}`,
            value: text
        });
    }
    get textContent() {
        return this._value;
    }
    set nodeValue(text) {
        this.textContent = text;
    }
    get nodeValue() {
        return this._value;
    }
};
TaroText = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.Hooks)),
    __metadata("design:paramtypes", [Function, Function, Function])
], TaroText);

/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const styleProperties = [
    'all',
    'appearance',
    'blockOverflow',
    'blockSize',
    'bottom',
    'clear',
    'contain',
    'content',
    'continue',
    'cursor',
    'direction',
    'display',
    'filter',
    'float',
    'gap',
    'height',
    'inset',
    'isolation',
    'left',
    'letterSpacing',
    'lightingColor',
    'markerSide',
    'mixBlendMode',
    'opacity',
    'order',
    'position',
    'quotes',
    'resize',
    'right',
    'rowGap',
    'tabSize',
    'tableLayout',
    'top',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceFamily',
    'volume',
    'whiteSpace',
    'widows',
    'width',
    'zIndex',
    'pointerEvents'
    /** 非常用 style */
    // 'azimuth',
    // 'backfaceVisibility',
    // 'baselineShift',
    // 'captionSide',
    // 'chains',
    // 'dominantBaseline',
    // 'elevation',
    // 'emptyCells',
    // 'forcedColorAdjust',
    // 'glyphOrientationVertical',
    // 'hangingPunctuation',
    // 'hyphenateCharacter',
    // 'hyphens',
    // 'imageOrientation',
    // 'imageResolution',
    // 'orphans',
    // 'playDuring',
    // 'pointerEvents',
    // 'regionFragment',
    // 'richness',
    // 'running',
    // 'scrollBehavior',
    // 'speechRate',
    // 'stress',
    // 'stringSet',
    // 'unicodeBidi',
    // 'willChange',
    // 'writingMode',
];
// 减少文件体积
function combine(prefix, list, excludeSelf) {
    !excludeSelf && styleProperties.push(prefix);
    list.forEach(item => {
        styleProperties.push(prefix + item);
    });
}
const color = 'Color';
const style = 'Style';
const width = 'Width';
const image = 'Image';
const size = 'Size';
const color_style_width = [color, style, width];
const fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, 'Radius'];
const color_style_width_fitlength_fitwidth_image = [...color_style_width, ...fitlength_fitwidth_image];
const endRadius_startRadius = ['EndRadius', 'StartRadius'];
const bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
const end_start = ['End', 'Start'];
const content_items_self = ['Content', 'Items', 'Self'];
const blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
const after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [...color_style_width, 'Offset']);
combine('border', [...color_style_width, 'Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']);
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [...bottom_left_right_top, 'Trim']);
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('fontSynthesis', ['SmallCaps', style, 'Weight']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('lineStacking', ['Ruby', 'Shift', 'Strategy']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('speak', ['Header', 'Numeral', 'Punctuation']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [...after_before, ...end_start, 'Anchor', 'Distance', 'Path', 'Position', 'Rotate']);
combine('fontVariant', ['Alternates', 'Caps', 'EastAsian', 'Emoji', 'Ligatures', 'Numeric', 'Position']);
combine('perspective', ['Origin']);
combine('pitch', ['Range']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('bookmark', ['Label', 'Level', 'State'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [...after_before, 'Inside'], true);
combine('wrap', [...after_before, 'Flow', 'Inside', 'Through'], true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [...blockSize_height_inlineSize_width, 'Lines'], true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('nav', ['Down', 'Left', 'Right', 'Up'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);

function setStyle(newVal, styleKey) {
    const old = this[styleKey];
    if (newVal) {
        this._usedStyleProp.add(styleKey);
    }
     false && false;
    if (old !== newVal) {
        this._value[styleKey] = newVal;
        this._element.enqueueUpdate({
            path: `${this._element._path}.${"st" /* Style */}`,
            value: this.cssText
        });
    }
}
function initStyle(ctor) {
    const properties = {};
    for (let i = 0; i < styleProperties.length; i++) {
        const styleKey = styleProperties[i];
        properties[styleKey] = {
            get() {
                return this._value[styleKey] || '';
            },
            set(newVal) {
                setStyle.call(this, newVal, styleKey);
            }
        };
    }
    Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
    return /^--/.test(propertyName);
}
class Style {
    constructor(element) {
        this._element = element;
        this._usedStyleProp = new Set();
        this._value = {};
    }
    setCssVariables(styleKey) {
        this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._value[styleKey] || '';
            },
            set: (newVal) => {
                setStyle.call(this, newVal, styleKey);
            }
        });
    }
    get cssText() {
        let text = '';
        this._usedStyleProp.forEach(key => {
            const val = this[key];
            if (!val)
                return;
            const styleName = isCssVariable(key) ? key : Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toDashed */ "m"])(key);
            text += `${styleName}: ${val};`;
        });
        return text;
    }
    set cssText(str) {
        if (str == null) {
            str = '';
        }
        this._usedStyleProp.forEach(prop => {
            this.removeProperty(prop);
        });
        if (str === '') {
            return;
        }
        const rules = str.split(';');
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i].trim();
            if (rule === '') {
                continue;
            }
            // 可能存在 'background: url(http:x/y/z)' 的情况
            const [propName, ...valList] = rule.split(':');
            const val = valList.join(':');
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "j"])(val)) {
                continue;
            }
            this.setProperty(propName.trim(), val.trim());
        }
    }
    setProperty(propertyName, value) {
        if (propertyName[0] === '-') {
            // 支持 webkit 属性或 css 变量
            this.setCssVariables(propertyName);
        }
        else {
            propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(propertyName);
        }
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "j"])(value)) {
            return;
        }
        if (value === null || value === '') {
            this.removeProperty(propertyName);
        }
        else {
            this[propertyName] = value;
        }
    }
    removeProperty(propertyName) {
        propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(propertyName);
        if (!this._usedStyleProp.has(propertyName)) {
            return '';
        }
        const value = this[propertyName];
        this[propertyName] = '';
        this._usedStyleProp.delete(propertyName);
        return value;
    }
    getPropertyValue(propertyName) {
        propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(propertyName);
        const value = this[propertyName];
        if (!value) {
            return '';
        }
        return value;
    }
}
initStyle(Style);

function returnTrue() {
    return true;
}
function treeToArray(root, predict) {
    const array = [];
    const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
    let object = root;
    while (object) {
        if (object.nodeType === 1 /* ELEMENT_NODE */ && filter(object)) {
            array.push(object);
        }
        object = following(object, root);
    }
    return array;
}
function following(el, root) {
    const firstChild = el.firstChild;
    if (firstChild) {
        return firstChild;
    }
    let current = el;
    do {
        if (current === root) {
            return null;
        }
        const nextSibling = current.nextSibling;
        if (nextSibling) {
            return nextSibling;
        }
        current = current.parentElement;
    } while (current);
    return null;
}

class ClassList extends Set {
    constructor(className, el) {
        super();
        className.trim().split(/\s+/).forEach(super.add.bind(this));
        this.el = el;
    }
    get value() {
        return [...this].join(' ');
    }
    add(s) {
        super.add(s);
        this._update();
        return this;
    }
    get length() {
        return this.size;
    }
    remove(s) {
        super.delete(s);
        this._update();
    }
    toggle(s) {
        if (super.has(s)) {
            super.delete(s);
        }
        else {
            super.add(s);
        }
        this._update();
    }
    replace(s1, s2) {
        super.delete(s1);
        super.add(s2);
        this._update();
    }
    contains(s) {
        return super.has(s);
    }
    toString() {
        return this.value;
    }
    _update() {
        this.el.className = this.value;
    }
}

let TaroElement = class TaroElement extends TaroNode {
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    nodeImpl, getElement, hooks, elementImpl) {
        super(nodeImpl, getElement, hooks);
        this.props = {};
        this.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];
        elementImpl.bind(this);
        this.nodeType = 1 /* ELEMENT_NODE */;
        this.style = new Style(this);
        hooks.patchElement(this);
    }
    _stopPropagation(event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            const listeners = target.__handlers[event.type];
            if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(listeners)) {
                continue;
            }
            for (let i = listeners.length; i--;) {
                const l = listeners[i];
                l._stop = true;
            }
        }
    }
    get id() {
        return this.getAttribute(ID);
    }
    set id(val) {
        this.setAttribute(ID, val);
    }
    get className() {
        return this.getAttribute(CLASS) || '';
    }
    set className(val) {
        this.setAttribute(CLASS, val);
    }
    get cssText() {
        return this.getAttribute(STYLE) || '';
    }
    get classList() {
        return new ClassList(this.className, this);
    }
    get children() {
        return this.childNodes.filter(isElement);
    }
    get attributes() {
        const props = this.props;
        const propKeys = Object.keys(props);
        const style = this.style.cssText;
        const attrs = propKeys.map(key => ({ name: key, value: props[key] }));
        return attrs.concat(style ? { name: STYLE, value: style } : []);
    }
    get textContent() {
        let text = '';
        const childNodes = this.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            text += childNodes[i].textContent;
        }
        return text;
    }
    set textContent(text) {
        super.textContent = text;
    }
    hasAttribute(qualifiedName) {
        return !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "j"])(this.props[qualifiedName]);
    }
    hasAttributes() {
        return this.attributes.length > 0;
    }
    get focus() {
        return function () {
            this.setAttribute(FOCUS, true);
        };
    }
    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
    set focus(value) {
        this.setAttribute(FOCUS, value);
    }
    blur() {
        this.setAttribute(FOCUS, false);
    }
    setAttribute(qualifiedName, value) {
        var _a, _b;
         false && false;
        const isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
        switch (qualifiedName) {
            case STYLE:
                this.style.cssText = value;
                break;
            case ID:
                eventSource.delete(this.uid);
                value = String(value);
                this.props[qualifiedName] = this.uid = value;
                eventSource.set(value, this);
                break;
            default:
                this.props[qualifiedName] = value;
                if (qualifiedName.startsWith('data-')) {
                    if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"]) {
                        this.dataset = Object.create(null);
                    }
                    this.dataset[Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(qualifiedName.replace(/^data-/, ''))] = value;
                }
                break;
        }
        qualifiedName = shortcutAttr(qualifiedName);
        const payload = {
            path: `${this._path}.${Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(qualifiedName)}`,
            value
        };
        (_b = (_a = this.hooks).modifySetAttrPayload) === null || _b === void 0 ? void 0 : _b.call(_a, this, qualifiedName, payload);
        this.enqueueUpdate(payload);
        if (this.nodeName === VIEW) {
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(qualifiedName) === CATCHMOVE) {
                // catchMove = true: catch-view
                // catchMove = false: view or static-view
                this.enqueueUpdate({
                    path: `${this._path}.${"nn" /* NodeName */}`,
                    value: value ? CATCH_VIEW : (this.isAnyEventBinded() ? VIEW : STATIC_VIEW)
                });
            }
            else if (isPureView && isHasExtractProp(this)) {
                // pure-view => static-view
                this.enqueueUpdate({
                    path: `${this._path}.${"nn" /* NodeName */}`,
                    value: STATIC_VIEW
                });
            }
        }
    }
    removeAttribute(qualifiedName) {
        var _a, _b, _c, _d;
        const isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
        if (qualifiedName === STYLE) {
            this.style.cssText = '';
        }
        else {
            const isInterrupt = (_b = (_a = this.hooks).onRemoveAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, this, qualifiedName);
            if (isInterrupt) {
                return;
            }
            if (!this.props.hasOwnProperty(qualifiedName)) {
                return;
            }
            delete this.props[qualifiedName];
        }
        qualifiedName = shortcutAttr(qualifiedName);
        const payload = {
            path: `${this._path}.${Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(qualifiedName)}`,
            value: ''
        };
        (_d = (_c = this.hooks).modifyRmAttrPayload) === null || _d === void 0 ? void 0 : _d.call(_c, this, qualifiedName, payload);
        this.enqueueUpdate(payload);
        if (this.nodeName === VIEW) {
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* toCamelCase */ "l"])(qualifiedName) === CATCHMOVE) {
                // catch-view => view or static-view or pure-view
                this.enqueueUpdate({
                    path: `${this._path}.${"nn" /* NodeName */}`,
                    value: this.isAnyEventBinded() ? VIEW : (isHasExtractProp(this) ? STATIC_VIEW : PURE_VIEW)
                });
            }
            else if (isStaticView && !isHasExtractProp(this)) {
                // static-view => pure-view
                this.enqueueUpdate({
                    path: `${this._path}.${"nn" /* NodeName */}`,
                    value: PURE_VIEW
                });
            }
        }
    }
    getAttribute(qualifiedName) {
        const attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    }
    getElementsByTagName(tagName) {
        return treeToArray(this, (el) => {
            return el.nodeName === tagName || (tagName === '*' && this !== el);
        });
    }
    getElementsByClassName(className) {
        return treeToArray(this, (el) => {
            const classList = el.classList;
            const classNames = className.trim().split(/\s+/);
            return classNames.every(c => classList.has(c));
        });
    }
    dispatchEvent(event) {
        const cancelable = event.cancelable;
        const listeners = this.__handlers[event.type];
        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(listeners)) {
            return false;
        }
        for (let i = listeners.length; i--;) {
            const listener = listeners[i];
            let result;
            if (listener._stop) {
                listener._stop = false;
            }
            else {
                result = listener.call(this, event);
            }
            if ((result === false || event._end) && cancelable) {
                event.defaultPrevented = true;
            }
            if (event._end && event._stop) {
                break;
            }
        }
        if (event._stop) {
            this._stopPropagation(event);
        }
        else {
            event._stop = true;
        }
        return listeners != null;
    }
    addEventListener(type, handler, options) {
        const name = this.nodeName;
        const SPECIAL_NODES = this.hooks.getSpecialNodes();
        if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* NodeName */}`,
                value: name
            });
        }
        super.addEventListener(type, handler, options);
    }
    removeEventListener(type, handler) {
        super.removeEventListener(type, handler);
        const name = this.nodeName;
        const SPECIAL_NODES = this.hooks.getSpecialNodes();
        if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            this.enqueueUpdate({
                path: `${this._path}.${"nn" /* NodeName */}`,
                value: isHasExtractProp(this) ? `static-${name}` : `pure-${name}`
            });
        }
    }
};
TaroElement = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.Hooks)),
    __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementImpl)),
    __metadata("design:paramtypes", [Function, Function, Function, Function])
], TaroElement);

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

const options = {
    prerender: true,
    debug: false
};

class Performance {
    constructor() {
        this.recorder = new Map();
    }
    start(id) {
        if (!options.debug) {
            return;
        }
        this.recorder.set(id, Date.now());
    }
    stop(id) {
        if (!options.debug) {
            return;
        }
        const now = Date.now();
        const prev = this.recorder.get(id);
        const time = now - prev;
        // eslint-disable-next-line no-console
        console.log(`${id} 时长： ${time}ms`);
    }
}
const perf = new Performance();

const eventIncrementId = incrementId();
let TaroRootElement = class TaroRootElement extends TaroElement {
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    nodeImpl, getElement, hooks, elementImpl, eventCenter) {
        super(nodeImpl, getElement, hooks, elementImpl);
        this.pendingFlush = false;
        this.updatePayloads = [];
        this.updateCallbacks = [];
        this.pendingUpdate = false;
        this.ctx = null;
        this.nodeName = ROOT_STR;
        this.eventCenter = eventCenter;
    }
    get _path() {
        return ROOT_STR;
    }
    get _root() {
        return this;
    }
    enqueueUpdate(payload) {
        this.updatePayloads.push(payload);
        if (!this.pendingUpdate && this.ctx !== null) {
            this.performUpdate();
        }
    }
    performUpdate(initRender = false, prerender) {
        this.pendingUpdate = true;
        const ctx = this.ctx;
        setTimeout(() => {
            perf.start(SET_DATA);
            const data = Object.create(null);
            const resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this.updatePayloads.length > 0) {
                const { path, value } = this.updatePayloads.shift();
                if (path.endsWith("cn" /* Childnodes */)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            for (const path in data) {
                resetPaths.forEach(p => {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path.includes(p) && path !== p) {
                        delete data[path];
                    }
                });
                const value = data[path];
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(value)) {
                    data[path] = value();
                }
            }
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(prerender)) {
                prerender(data);
            }
            else {
                this.pendingUpdate = false;
                const customWrapperUpdate = [];
                const customWrapperMap = new Map();
                const normalUpdate = {};
                if (!initRender) {
                    for (const p in data) {
                        const dataPathArr = p.split('.');
                        let hasCustomWrapper = false;
                        for (let i = dataPathArr.length; i > 0; i--) {
                            const allPath = dataPathArr.slice(0, i).join('.');
                            const getData = get(ctx.__data__ || ctx.data, allPath);
                            if (getData && getData.nn && getData.nn === CUSTOM_WRAPPER) {
                                const customWrapperId = getData.uid;
                                const customWrapper = ctx.selectComponent(`#${customWrapperId}`);
                                const splitedPath = dataPathArr.slice(i).join('.');
                                if (customWrapper) {
                                    hasCustomWrapper = true;
                                    customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, (customWrapperMap.get(customWrapper) || {})), { [`i.${splitedPath}`]: data[p] }));
                                }
                                break;
                            }
                        }
                        if (!hasCustomWrapper) {
                            normalUpdate[p] = data[p];
                        }
                    }
                    if (customWrapperMap.size > 0) {
                        customWrapperMap.forEach((data, ctx) => {
                            customWrapperUpdate.push({ ctx, data });
                        });
                    }
                }
                const updateArrLen = customWrapperUpdate.length;
                if (updateArrLen) {
                    const eventId = `${this._path}_update_${eventIncrementId()}`;
                    const eventCenter = this.eventCenter;
                    let executeTime = 0;
                    eventCenter.once(eventId, () => {
                        executeTime++;
                        if (executeTime === updateArrLen + 1) {
                            perf.stop(SET_DATA);
                            if (!this.pendingFlush) {
                                this.flushUpdateCallback();
                            }
                            if (initRender) {
                                perf.stop(PAGE_INIT);
                            }
                        }
                    }, eventCenter);
                    customWrapperUpdate.forEach(item => {
                        if (false) {}
                        item.ctx.setData(item.data, () => {
                            eventCenter.trigger(eventId);
                        });
                    });
                    if (Object.keys(normalUpdate).length) {
                        if (false) {}
                        ctx.setData(normalUpdate, () => {
                            eventCenter.trigger(eventId);
                        });
                    }
                }
                else {
                    if (false) {}
                    ctx.setData(data, () => {
                        perf.stop(SET_DATA);
                        if (!this.pendingFlush) {
                            this.flushUpdateCallback();
                        }
                        if (initRender) {
                            perf.stop(PAGE_INIT);
                        }
                    });
                }
            }
        }, 0);
    }
    enqueueUpdateCallback(cb, ctx) {
        this.updateCallbacks.push(() => {
            ctx ? cb.call(ctx) : cb();
        });
    }
    flushUpdateCallback() {
        this.pendingFlush = false;
        const copies = this.updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
};
TaroRootElement = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.Hooks)),
    __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementImpl)),
    __param(4, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.eventCenter)),
    __metadata("design:paramtypes", [Function, Function, Function, Function, Function])
], TaroRootElement);

class FormElement extends TaroElement {
    get value() {
        // eslint-disable-next-line dot-notation
        const val = this.props[VALUE];
        return val == null ? '' : val;
    }
    set value(val) {
        this.setAttribute(VALUE, val);
    }
    dispatchEvent(event) {
        if (event.mpEvent) {
            const val = event.mpEvent.detail.value;
            if (event.type === CHANGE) {
                this.props.value = val;
            }
            else if (event.type === INPUT) {
                // Web 规范中表单组件的 value 应该跟着输入改变
                // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
                // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
                this.value = val;
            }
        }
        return super.dispatchEvent(event);
    }
}

// for Vue3
class SVGElement extends TaroElement {
}

function initPosition() {
    return {
        index: 0,
        column: 0,
        line: 0
    };
}
function feedPosition(position, str, len) {
    const start = position.index;
    const end = position.index = start + len;
    for (let i = start; i < end; i++) {
        const char = str.charAt(i);
        if (char === '\n') {
            position.line++;
            position.column = 0;
        }
        else {
            position.column++;
        }
    }
}
function jumpPosition(position, str, end) {
    const len = end - position.index;
    return feedPosition(position, str, len);
}
function copyPosition(position) {
    return {
        index: position.index,
        line: position.line,
        column: position.column
    };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
    return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
    return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
    const name = tagName.toLowerCase();
    if (options.html.skipElements.has(name)) {
        return true;
    }
    return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
    while (true) {
        const textEnd = str.indexOf('<', index);
        if (textEnd === -1) {
            return textEnd;
        }
        const char = str.charAt(textEnd + 1);
        if (char === '/' || char === '!' || alphanumeric.test(char)) {
            return textEnd;
        }
        index = textEnd + 1;
    }
}
function isWordEnd(cursor, wordBegin, html) {
    if (!isWhitespaceChar(html.charAt(cursor)))
        return false;
    const len = html.length;
    // backwrad
    for (let i = cursor - 1; i > wordBegin; i--) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            break;
        }
    }
    // forward
    for (let i = cursor + 1; i < len; i++) {
        const char = html.charAt(i);
        if (!isWhitespaceChar(char)) {
            if (isEqualSignChar(char))
                return false;
            return true;
        }
    }
}
class Scaner {
    constructor(html) {
        this.tokens = [];
        this.position = initPosition();
        this.html = html;
    }
    scan() {
        const { html, position } = this;
        const len = html.length;
        while (position.index < len) {
            const start = position.index;
            this.scanText();
            if (position.index === start) {
                const isComment = html.startsWith('!--', start + 1);
                if (isComment) {
                    this.scanComment();
                }
                else {
                    const tagName = this.scanTag();
                    if (shouldBeIgnore(tagName)) {
                        this.scanSkipTag(tagName);
                    }
                }
            }
        }
        return this.tokens;
    }
    scanText() {
        const type = 'text';
        const { html, position } = this;
        let textEnd = findTextEnd(html, position.index);
        if (textEnd === position.index) {
            return;
        }
        if (textEnd === -1) {
            textEnd = html.length;
        }
        const start = copyPosition(position);
        const content = html.slice(position.index, textEnd);
        jumpPosition(position, html, textEnd);
        const end = copyPosition(position);
        this.tokens.push({ type, content, position: { start, end } });
    }
    scanComment() {
        const type = 'comment';
        const { html, position } = this;
        const start = copyPosition(position);
        feedPosition(position, html, 4); // "<!--".length
        let contentEnd = html.indexOf('-->', position.index);
        let commentEnd = contentEnd + 3; // "-->".length
        if (contentEnd === -1) {
            contentEnd = commentEnd = html.length;
        }
        const content = html.slice(position.index, contentEnd);
        jumpPosition(position, html, commentEnd);
        this.tokens.push({
            type,
            content,
            position: {
                start,
                end: copyPosition(position)
            }
        });
    }
    scanTag() {
        this.scanTagStart();
        const tagName = this.scanTagName();
        this.scanAttrs();
        this.scanTagEnd();
        return tagName;
    }
    scanTagStart() {
        const type = 'tag-start';
        const { html, position } = this;
        const secondChar = html.charAt(position.index + 1);
        const close = secondChar === '/';
        const start = copyPosition(position);
        feedPosition(position, html, close ? 2 : 1);
        this.tokens.push({ type, close, position: { start } });
    }
    scanTagEnd() {
        const type = 'tag-end';
        const { html, position } = this;
        const firstChar = html.charAt(position.index);
        const close = firstChar === '/';
        feedPosition(position, html, close ? 2 : 1);
        const end = copyPosition(position);
        this.tokens.push({ type, close, position: { end } });
    }
    scanTagName() {
        const type = 'tag';
        const { html, position } = this;
        const len = html.length;
        let start = position.index;
        while (start < len) {
            const char = html.charAt(start);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (isTagChar)
                break;
            start++;
        }
        let end = start + 1;
        while (end < len) {
            const char = html.charAt(end);
            const isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
            if (!isTagChar)
                break;
            end++;
        }
        jumpPosition(position, html, end);
        const tagName = html.slice(start, end);
        this.tokens.push({
            type,
            content: tagName
        });
        return tagName;
    }
    scanAttrs() {
        const { html, position, tokens } = this;
        let cursor = position.index;
        let quote = null; // null, single-, or double-quote
        let wordBegin = cursor; // index of word start
        const words = []; // "key", "key=value", "key='value'", etc
        const len = html.length;
        while (cursor < len) {
            const char = html.charAt(cursor);
            if (quote) {
                const isQuoteEnd = char === quote;
                if (isQuoteEnd) {
                    quote = null;
                }
                cursor++;
                continue;
            }
            const isTagEnd = char === '/' || char === '>';
            if (isTagEnd) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                break;
            }
            if (isWordEnd(cursor, wordBegin, html)) {
                if (cursor !== wordBegin) {
                    words.push(html.slice(wordBegin, cursor));
                }
                wordBegin = cursor + 1;
                cursor++;
                continue;
            }
            const isQuoteStart = char === '\'' || char === '"';
            if (isQuoteStart) {
                quote = char;
                cursor++;
                continue;
            }
            cursor++;
        }
        jumpPosition(position, html, cursor);
        const wLen = words.length;
        const type = 'attribute';
        for (let i = 0; i < wLen; i++) {
            const word = words[i];
            const isNotPair = word.includes('=');
            if (isNotPair) {
                const secondWord = words[i + 1];
                if (secondWord && secondWord.startsWith('=')) {
                    if (secondWord.length > 1) {
                        const newWord = word + secondWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                    const thirdWord = words[i + 2];
                    i += 1;
                    if (thirdWord) {
                        const newWord = word + '=' + thirdWord;
                        tokens.push({ type, content: newWord });
                        i += 1;
                        continue;
                    }
                }
            }
            if (word.endsWith('=')) {
                const secondWord = words[i + 1];
                if (secondWord && !secondWord.includes('=')) {
                    const newWord = word + secondWord;
                    tokens.push({ type, content: newWord });
                    i += 1;
                    continue;
                }
                const newWord = word.slice(0, -1);
                tokens.push({ type, content: newWord });
                continue;
            }
            tokens.push({ type, content: word });
        }
    }
    scanSkipTag(tagName) {
        const { html, position } = this;
        const safeTagName = tagName.toLowerCase();
        const len = html.length;
        while (position.index < len) {
            const nextTag = html.indexOf('</', position.index);
            if (nextTag === -1) {
                this.scanText();
                break;
            }
            jumpPosition(position, html, nextTag);
            const name = this.scanTag();
            if (safeTagName === name.toLowerCase()) {
                break;
            }
        }
    }
}

function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}
const specialMiniElements = {
    img: 'image',
    iframe: 'web-view'
};
const internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* internalComponents */ "e"])
    .map(i => i.toLowerCase())
    .join(',');
// https://developers.weixin.qq.com/miniprogram/dev/component
const isMiniElements = makeMap(internalCompsList, true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true);
// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
const isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

function unquote(str) {
    const car = str.charAt(0);
    const end = str.length - 1;
    const isQuoteStart = car === '"' || car === "'";
    if (isQuoteStart && car === str.charAt(end)) {
        return str.slice(1, end);
    }
    return str;
}

const LEFT_BRACKET = '{';
const RIGHT_BRACKET = '}';
const CLASS_SELECTOR = '.';
const ID_SELECTOR = '#';
const CHILD_COMBINATOR = '>';
const GENERAL_SIBLING_COMBINATOR = '~';
const ADJACENT_SIBLING_COMBINATOR = '+';
class StyleTagParser {
    constructor() {
        this.styles = [];
    }
    extractStyle(src) {
        const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
        let html = src;
        // let html = src.replace(/\n/g, '')
        html = html.replace(REG_STYLE, (_, $1) => {
            const style = $1.trim();
            this.stringToSelector(style);
            return '';
        });
        return html.trim();
    }
    stringToSelector(style) {
        let lb = style.indexOf(LEFT_BRACKET);
        while (lb > -1) {
            const rb = style.indexOf(RIGHT_BRACKET);
            const selectors = style.slice(0, lb).trim();
            let content = style.slice(lb + 1, rb);
            content = content.replace(/:(.*);/g, function (_, $1) {
                const t = $1.trim().replace(/ +/g, '+++');
                return `:${t};`;
            });
            content = content.replace(/ /g, '');
            content = content.replace(/\+\+\+/g, ' ');
            if (!(/;$/.test(content))) {
                content += ';';
            }
            selectors.split(',').forEach(src => {
                const selectorList = this.parseSelector(src);
                this.styles.push({
                    content,
                    selectorList
                });
            });
            style = style.slice(rb + 1);
            lb = style.indexOf(LEFT_BRACKET);
        }
        // console.log('res this.styles: ', this.styles)
    }
    parseSelector(src) {
        // todo: 属性选择器里可以带空格：[a = "b"]，这里的 split(' ') 需要作兼容
        const list = src.trim().replace(/ *([>~+]) */g, ' $1').replace(/ +/g, ' ').split(' ');
        const selectors = list.map(item => {
            const firstChar = item.charAt(0);
            const selector = {
                isChild: firstChar === CHILD_COMBINATOR,
                isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
                isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
                tag: null,
                id: null,
                class: [],
                attrs: []
            };
            item = item.replace(/^[>~+]/, '');
            // 属性选择器
            item = item.replace(/\[(.+?)\]/g, function (_, $1) {
                const [key, value] = $1.split('=');
                const all = $1.indexOf('=') === -1;
                const attr = {
                    all,
                    key,
                    value: all ? null : value
                };
                selector.attrs.push(attr);
                return '';
            });
            item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
                if ($1[0] === ID_SELECTOR) {
                    // id 选择器
                    selector.id = $1.substr(1);
                }
                else if ($1[0] === CLASS_SELECTOR) {
                    // class 选择器
                    selector.class.push($1.substr(1));
                }
                return '';
            });
            // 标签选择器
            if (item !== '') {
                selector.tag = item;
            }
            return selector;
        });
        return selectors;
    }
    matchStyle(tagName, el, list) {
        const res = sortStyles(this.styles).reduce((str, { content, selectorList }, i) => {
            let idx = list[i];
            let selector = selectorList[idx];
            const nextSelector = selectorList[idx + 1];
            if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
                selector = nextSelector;
                idx += 1;
                list[i] += 1;
            }
            let isMatch = this.matchCurrent(tagName, el, selector);
            if (isMatch && selector.isGeneralSibling) {
                let prev = getPreviousElement(el);
                while (prev) {
                    if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
                        isMatch = true;
                        break;
                    }
                    prev = getPreviousElement(prev);
                    isMatch = false;
                }
            }
            if (isMatch && selector.isAdjacentSibling) {
                const prev = getPreviousElement(el);
                if (!prev || !prev.h5tagName) {
                    isMatch = false;
                }
                else {
                    const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
                    if (!isSiblingMatch) {
                        isMatch = false;
                    }
                }
            }
            if (isMatch) {
                if (idx === selectorList.length - 1) {
                    return str + content;
                }
                else if (idx < selectorList.length - 1) {
                    list[i] += 1;
                }
            }
            else {
                // 直接子代组合器: >
                if (selector.isChild && idx > 0) {
                    list[i] -= 1;
                    if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
                        list[i] += 1;
                    }
                }
            }
            return str;
        }, '');
        return res;
    }
    matchCurrent(tagName, el, selector) {
        // 标签选择器
        if (selector.tag && selector.tag !== tagName)
            return false;
        // id 选择器
        if (selector.id && selector.id !== el.id)
            return false;
        // class 选择器
        if (selector.class.length) {
            const classList = el.className.split(' ');
            for (let i = 0; i < selector.class.length; i++) {
                const cls = selector.class[i];
                if (classList.indexOf(cls) === -1) {
                    return false;
                }
            }
        }
        // 属性选择器
        if (selector.attrs.length) {
            for (let i = 0; i < selector.attrs.length; i++) {
                const { all, key, value } = selector.attrs[i];
                if (all && !el.hasAttribute(key)) {
                    return false;
                }
                else {
                    const attr = el.getAttribute(key);
                    if (attr !== unquote(value || '')) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
function getPreviousElement(el) {
    const parent = el.parentElement;
    if (!parent)
        return null;
    const prev = el.previousSibling;
    if (!prev)
        return null;
    if (prev.nodeType === 1 /* ELEMENT_NODE */) {
        return prev;
    }
    else {
        return getPreviousElement(prev);
    }
}
// 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
function sortStyles(styles) {
    return styles.sort((s1, s2) => {
        const hundreds1 = getHundredsWeight(s1.selectorList);
        const hundreds2 = getHundredsWeight(s2.selectorList);
        if (hundreds1 !== hundreds2)
            return hundreds1 - hundreds2;
        const tens1 = getTensWeight(s1.selectorList);
        const tens2 = getTensWeight(s2.selectorList);
        if (tens1 !== tens2)
            return tens1 - tens2;
        const ones1 = getOnesWeight(s1.selectorList);
        const ones2 = getOnesWeight(s2.selectorList);
        return ones1 - ones2;
    });
}
function getHundredsWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
}
function getTensWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + cur.class.length + cur.attrs.length, 0);
}
function getOnesWeight(selectors) {
    return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
}

const closingTagAncestorBreakers = {
    li: ['ul', 'ol', 'menu'],
    dt: ['dl'],
    dd: ['dl'],
    tbody: ['table'],
    thead: ['table'],
    tfoot: ['table'],
    tr: ['table'],
    td: ['table']
};
function hasTerminalParent(tagName, stack) {
    const tagParents = closingTagAncestorBreakers[tagName];
    if (tagParents) {
        let currentIndex = stack.length - 1;
        while (currentIndex >= 0) {
            const parentTagName = stack[currentIndex].tagName;
            if (parentTagName === tagName) {
                break;
            }
            if (tagParents && tagParents.includes(parentTagName)) {
                return true;
            }
            currentIndex--;
        }
    }
    return false;
}
function getTagName(tag) {
    if (options.html.renderHTMLTag) {
        return tag;
    }
    if (specialMiniElements[tag]) {
        return specialMiniElements[tag];
    }
    else if (isMiniElements(tag)) {
        return tag;
    }
    else if (isBlockElements(tag)) {
        return 'view';
    }
    else if (isInlineElements(tag)) {
        return 'text';
    }
    return 'view';
}
function splitEqual(str) {
    const sep = '=';
    const idx = str.indexOf(sep);
    if (idx === -1)
        return [str];
    const key = str.slice(0, idx).trim();
    const value = str.slice(idx + sep.length).trim();
    return [key, value];
}
function format(children, document, styleOptions, parent) {
    return children
        .filter(child => {
        // 过滤注释和空文本节点
        if (child.type === 'comment') {
            return false;
        }
        else if (child.type === 'text') {
            return child.content !== '';
        }
        return true;
    })
        .map((child) => {
        // 文本节点
        if (child.type === 'text') {
            let text = document.createTextNode(child.content);
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(options.html.transformText)) {
                text = options.html.transformText(text, child);
            }
            parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
            return text;
        }
        const el = document.createElement(getTagName(child.tagName));
        el.h5tagName = child.tagName;
        parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
        if (!options.html.renderHTMLTag) {
            el.className = `h5-${child.tagName}`;
        }
        for (let i = 0; i < child.attributes.length; i++) {
            const attr = child.attributes[i];
            const [key, value] = splitEqual(attr);
            if (key === 'class') {
                el.className += ' ' + unquote(value);
            }
            else if (key[0] === 'o' && key[1] === 'n') {
                continue;
            }
            else {
                el.setAttribute(key, value == null ? true : unquote(value));
            }
        }
        const { styleTagParser, descendantList } = styleOptions;
        const list = descendantList.slice();
        const style = styleTagParser.matchStyle(child.tagName, el, list);
        el.setAttribute('style', style + el.style.cssText);
        // console.log('style, ', style)
        format(child.children, document, {
            styleTagParser,
            descendantList: list
        }, el);
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(options.html.transformElement)) {
            return options.html.transformElement(el, child);
        }
        return el;
    });
}
function parser(html, document) {
    const styleTagParser = new StyleTagParser();
    html = styleTagParser.extractStyle(html);
    const tokens = new Scaner(html).scan();
    const root = { tagName: '', children: [], type: 'element', attributes: [] };
    const state = { tokens, options, cursor: 0, stack: [root] };
    parse(state);
    return format(root.children, document, {
        styleTagParser,
        descendantList: Array(styleTagParser.styles.length).fill(0)
    });
}
function parse(state) {
    const { tokens, stack } = state;
    let { cursor } = state;
    const len = tokens.length;
    let nodes = stack[stack.length - 1].children;
    while (cursor < len) {
        const token = tokens[cursor];
        if (token.type !== 'tag-start') {
            // comment or text
            nodes.push(token);
            cursor++;
            continue;
        }
        const tagToken = tokens[++cursor];
        cursor++;
        const tagName = tagToken.content.toLowerCase();
        if (token.close) {
            let index = stack.length;
            let shouldRewind = false;
            while (--index > -1) {
                if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                }
            }
            while (cursor < len) {
                const endToken = tokens[cursor];
                if (endToken.type !== 'tag-end')
                    break;
                cursor++;
            }
            if (shouldRewind) {
                stack.splice(index);
                break;
            }
            else {
                continue;
            }
        }
        const isClosingTag = options.html.closingElements.has(tagName);
        let shouldRewindToAutoClose = isClosingTag;
        if (shouldRewindToAutoClose) {
            shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
        }
        if (shouldRewindToAutoClose) {
            let currentIndex = stack.length - 1;
            while (currentIndex > 0) {
                if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    const previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                }
                currentIndex = currentIndex - 1;
            }
        }
        const attributes = [];
        let attrToken;
        while (cursor < len) {
            attrToken = tokens[cursor];
            if (attrToken.type === 'tag-end')
                break;
            attributes.push(attrToken.content);
            cursor++;
        }
        cursor++;
        const children = [];
        const element = {
            type: 'element',
            tagName: tagToken.content,
            attributes,
            children
        };
        nodes.push(element);
        const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
        if (hasChildren) {
            stack.push({ tagName, children });
            const innerState = { tokens, cursor, stack };
            parse(innerState);
            cursor = innerState.cursor;
        }
    }
    state.cursor = cursor;
}

options.html = {
    skipElements: new Set(['style', 'script']),
    voidElements: new Set([
        '!doctype', 'area', 'base', 'br', 'col', 'command',
        'embed', 'hr', 'img', 'input', 'keygen', 'link',
        'meta', 'param', 'source', 'track', 'wbr'
    ]),
    closingElements: new Set([
        'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',
        'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'
    ]),
    renderHTMLTag: false
};
function setInnerHTML(element, html, getDoc) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    const children = parser(html, getDoc());
    for (let i = 0; i < children.length; i++) {
        element.appendChild(children[i]);
    }
}

/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */
function insertAdjacentHTMLImpl(position, html, getDoc) {
    var _a, _b;
    const parsedNodes = parser(html, getDoc());
    for (let i = 0; i < parsedNodes.length; i++) {
        const n = parsedNodes[i];
        switch (position) {
            case 'beforebegin':
                (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
                break;
            case 'afterbegin':
                if (this.hasChildNodes()) {
                    this.insertBefore(n, this.childNodes[0]);
                }
                else {
                    this.appendChild(n);
                }
                break;
            case 'beforeend':
                this.appendChild(n);
                break;
            case 'afterend':
                (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
                break;
        }
    }
}
function cloneNode(ctx, getDoc, isDeep = false) {
    const document = getDoc();
    let newNode;
    if (ctx.nodeType === 1 /* ELEMENT_NODE */) {
        newNode = document.createElement(ctx.nodeName);
    }
    else if (ctx.nodeType === 3 /* TEXT_NODE */) {
        newNode = document.createTextNode('');
    }
    for (const key in this) {
        const value = this[key];
        if ([PROPS, DATASET].includes(key) && typeof value === OBJECT) {
            newNode[key] = Object.assign({}, value);
        }
        else if (key === '_value') {
            newNode[key] = value;
        }
        else if (key === STYLE) {
            newNode.style._value = Object.assign({}, value._value);
            newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
        }
    }
    if (isDeep) {
        newNode.childNodes = ctx.childNodes.map(node => node.cloneNode(true));
    }
    return newNode;
}

let TaroNodeImpl = class TaroNodeImpl {
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    getElement) {
        this.getDoc = () => getElement(ElementNames.Document)();
    }
    bind(ctx) {
        const getDoc = this.getDoc;
        if (ENABLE_INNER_HTML) {
            bindInnerHTML(ctx, getDoc);
            if (ENABLE_ADJACENT_HTML) {
                bindAdjacentHTML(ctx, getDoc);
            }
        }
        if (ENABLE_CLONE_NODE) {
            ctx.cloneNode = cloneNode.bind(ctx, ctx, getDoc);
        }
    }
};
TaroNodeImpl = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementFactory)),
    __metadata("design:paramtypes", [Function])
], TaroNodeImpl);
function bindInnerHTML(ctx, getDoc) {
    Object.defineProperty(ctx, 'innerHTML', {
        configurable: true,
        enumerable: true,
        set(html) {
            setInnerHTML.call(ctx, ctx, html, getDoc);
        },
        get() {
            return '';
        }
    });
}
function bindAdjacentHTML(ctx, getDoc) {
    ctx.insertAdjacentHTML = function (position, html) {
        insertAdjacentHTMLImpl.call(ctx, position, html, getDoc);
    };
}

function getBoundingClientRectImpl() {
    if (!options.miniGlobal)
        return Promise.resolve(null);
    return new Promise(resolve => {
        const query = options.miniGlobal.createSelectorQuery();
        query.select(`#${this.uid}`).boundingClientRect(res => {
            resolve(res);
        }).exec();
    });
}
function getTemplateContent(ctx) {
    if (ctx.nodeName === 'template') {
        const content = ctx._getElement(ElementNames.Element)(DOCUMENT_FRAGMENT);
        content.childNodes = ctx.childNodes;
        ctx.childNodes = [content];
        content.parentNode = ctx;
        content.childNodes.forEach(nodes => {
            nodes.parentNode = content;
        });
        return content;
    }
}

let TaroElementImpl = class TaroElementImpl {
    bind(ctx) {
        if (ENABLE_SIZE_APIS) {
            ctx.getBoundingClientRect = async function (...args) {
                return await getBoundingClientRectImpl.apply(ctx, args);
            };
        }
        if (ENABLE_TEMPLATE_CONTENT) {
            bindContent(ctx);
        }
    }
};
TaroElementImpl = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])()
], TaroElementImpl);
function bindContent(ctx) {
    Object.defineProperty(ctx, 'content', {
        configurable: true,
        enumerable: true,
        get() {
            return getTemplateContent(ctx);
        }
    });
}

let TaroDocument = class TaroDocument extends TaroElement {
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    nodeImpl, getElement, hooks, elementImpl, getText) {
        super(nodeImpl, getElement, hooks, elementImpl);
        this._getText = getText;
        this.nodeType = 9 /* DOCUMENT_NODE */;
        this.nodeName = DOCUMENT_ELEMENT_NAME;
    }
    createElement(type) {
        if (type === ROOT_STR) {
            return this._getElement(ElementNames.RootElement)();
        }
        if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* controlledComponent */ "b"].has(type)) {
            return this._getElement(ElementNames.FormElement)(type);
        }
        return this._getElement(ElementNames.Element)(type);
    }
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
    createElementNS(_svgNS, type) {
        return this.createElement(type);
    }
    createTextNode(text) {
        return this._getText(text);
    }
    getElementById(id) {
        const el = eventSource.get(id);
        return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "j"])(el) ? null : el;
    }
    querySelector(query) {
        // 为了 Vue3 的乞丐版实现
        if (/^#/.test(query)) {
            return this.getElementById(query.slice(1));
        }
        return null;
    }
    querySelectorAll() {
        // fake hack
        return [];
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment() {
        const textnode = this._getText('');
        textnode.nodeName = COMMENT;
        return textnode;
    }
};
TaroDocument = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])(),
    __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroNodeImpl)),
    __param(1, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementFactory)),
    __param(2, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.Hooks)),
    __param(3, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroElementImpl)),
    __param(4, Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.TaroTextFactory)),
    __metadata("design:paramtypes", [Function, Function, Function, Function, Function])
], TaroDocument);

let Hooks = class Hooks {
    modifyMpEvent(e) {
        var _a;
        (_a = this.modifyMpEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(fn => fn(e));
    }
    modifyTaroEvent(e, element) {
        var _a;
        (_a = this.modifyTaroEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(fn => fn(e, element));
    }
    initNativeApi(taro) {
        var _a;
        (_a = this.initNativeApiImpls) === null || _a === void 0 ? void 0 : _a.forEach(fn => fn(taro));
    }
    patchElement(element) {
        var _a;
        (_a = this.patchElementImpls) === null || _a === void 0 ? void 0 : _a.forEach(fn => fn(element));
    }
};
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.getLifecycle),
    __metadata("design:type", Function)
], Hooks.prototype, "getLifecycle", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.getPathIndex),
    __metadata("design:type", Function)
], Hooks.prototype, "getPathIndex", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.getEventCenter),
    __metadata("design:type", Function)
], Hooks.prototype, "getEventCenter", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.isBubbleEvents),
    __metadata("design:type", Function)
], Hooks.prototype, "isBubbleEvents", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.getSpecialNodes),
    __metadata("design:type", Function)
], Hooks.prototype, "getSpecialNodes", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.onRemoveAttribute),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "onRemoveAttribute", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.batchedEventUpdates),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "batchedEventUpdates", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.mergePageInstance),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "mergePageInstance", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.createPullDownComponent),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "createPullDownComponent", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.getDOMNode),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "getDOMNode", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.modifyHydrateData),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "modifyHydrateData", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.modifySetAttrPayload),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "modifySetAttrPayload", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.modifyRmAttrPayload),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "modifyRmAttrPayload", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVICE_IDENTIFIER.onAddEvent),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Function)
], Hooks.prototype, "onAddEvent", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["multiInject"])(SERVICE_IDENTIFIER.modifyMpEvent),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Array)
], Hooks.prototype, "modifyMpEventImpls", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["multiInject"])(SERVICE_IDENTIFIER.modifyTaroEvent),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Array)
], Hooks.prototype, "modifyTaroEventImpls", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["multiInject"])(SERVICE_IDENTIFIER.initNativeApi),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Array)
], Hooks.prototype, "initNativeApiImpls", void 0);
__decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["multiInject"])(SERVICE_IDENTIFIER.patchElement),
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["optional"])(),
    __metadata("design:type", Array)
], Hooks.prototype, "patchElementImpls", void 0);
Hooks = __decorate([
    Object(inversify__WEBPACK_IMPORTED_MODULE_0__["injectable"])()
], Hooks);

/**
 * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
 * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
 */
const BUBBLE_EVENTS = new Set([
    'touchstart',
    'touchmove',
    'touchcancel',
    'touchend',
    'touchforcechange',
    'tap',
    'longpress',
    'longtap',
    'transitionend',
    'animationstart',
    'animationiteration',
    'animationend'
]);

const getLifecycle = function (instance, lifecycle) {
    return instance[lifecycle];
};
const getPathIndex = function (indexOfNode) {
    return `[${indexOfNode}]`;
};
const getEventCenter = function (Events) {
    return new Events();
};
const isBubbleEvents = function (eventName) {
    return BUBBLE_EVENTS.has(eventName);
};
const getSpecialNodes = function () {
    return ['view', 'text', 'image'];
};
const DefaultHooksContainer = new inversify__WEBPACK_IMPORTED_MODULE_0__["ContainerModule"](bind => {
    bind(SERVICE_IDENTIFIER.getLifecycle).toFunction(getLifecycle);
    bind(SERVICE_IDENTIFIER.getPathIndex).toFunction(getPathIndex);
    bind(SERVICE_IDENTIFIER.getEventCenter).toFunction(getEventCenter);
    bind(SERVICE_IDENTIFIER.isBubbleEvents).toFunction(isBubbleEvents);
    bind(SERVICE_IDENTIFIER.getSpecialNodes).toFunction(getSpecialNodes);
});

function processPluginHooks(container) {
    const keys = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* defaultReconciler */ "c"]);
    keys.forEach(key => {
        if (key in SERVICE_IDENTIFIER) {
            // is hooks
            const identifier = SERVICE_IDENTIFIER[key];
            const fn = _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* defaultReconciler */ "c"][key];
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(fn)) {
                // is multi
                fn.forEach(item => container.bind(identifier).toFunction(item));
            }
            else {
                if (container.isBound(identifier)) {
                    // 之前有绑定过，需要重新绑定以覆盖前者
                    container.rebind(identifier).toFunction(fn);
                }
                else {
                    container.bind(identifier).toFunction(fn);
                }
            }
        }
    });
}

const container = new inversify__WEBPACK_IMPORTED_MODULE_0__["Container"]();
if (process.env.TARO_ENV !== 'h5') {
    container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroElement).whenTargetNamed(ElementNames.Element);
    container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroDocument).inSingletonScope().whenTargetNamed(ElementNames.Document);
    container.bind(SERVICE_IDENTIFIER.TaroElement).to(TaroRootElement).whenTargetNamed(ElementNames.RootElement);
    container.bind(SERVICE_IDENTIFIER.TaroElement).to(FormElement).whenTargetNamed(ElementNames.FormElement);
    container.bind(SERVICE_IDENTIFIER.TaroElementFactory).toFactory((context) => {
        return (named) => (nodeName) => {
            const el = context.container.getNamed(SERVICE_IDENTIFIER.TaroElement, named);
            if (nodeName) {
                el.nodeName = nodeName;
            }
            el.tagName = el.nodeName.toUpperCase();
            return el;
        };
    });
    container.bind(SERVICE_IDENTIFIER.TaroText).to(TaroText);
    container.bind(SERVICE_IDENTIFIER.TaroTextFactory).toFactory((context) => {
        return (text) => {
            const textNode = context.container.get(SERVICE_IDENTIFIER.TaroText);
            textNode._value = text;
            return textNode;
        };
    });
    container.bind(SERVICE_IDENTIFIER.TaroNodeImpl).to(TaroNodeImpl).inSingletonScope();
    container.bind(SERVICE_IDENTIFIER.TaroElementImpl).to(TaroElementImpl).inSingletonScope();
}
container.bind(SERVICE_IDENTIFIER.Hooks).to(Hooks).inSingletonScope();
container.load(DefaultHooksContainer);
processPluginHooks(container);

let hooks;
let getElement;
let document$1;
if (process.env.TARO_ENV !== 'h5') {
    hooks = container.get(SERVICE_IDENTIFIER.Hooks);
    getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
    document$1 = getElement(ElementNames.Document)();
}
// Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
class TaroEvent {
    constructor(type, opts, event) {
        this._stop = false;
        this._end = false;
        this.defaultPrevented = false;
        // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
        // here use hi-res timestamp
        this.timeStamp = Date.now();
        this.type = type.toLowerCase();
        this.mpEvent = event;
        this.bubbles = Boolean(opts && opts.bubbles);
        this.cancelable = Boolean(opts && opts.cancelable);
    }
    stopPropagation() {
        this._stop = true;
    }
    stopImmediatePropagation() {
        this._end = this._stop = true;
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    get target() {
        var _a, _b, _c;
        const element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
        return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"] });
    }
    get currentTarget() {
        var _a, _b, _c;
        const element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);
        if (element === null) {
            return this.target;
        }
        return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), { dataset: element.dataset });
    }
}
function createEvent(event, node) {
    if (typeof event === 'string') {
        // For Vue3 using document.createEvent
        return new TaroEvent(event, { bubbles: true, cancelable: true });
    }
    const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
    for (const key in event) {
        if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
            continue;
        }
        else {
            domEv[key] = event[key];
        }
    }
    if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
        // eslint-disable-next-line dot-notation
        domEv[KEY_CODE] = 13;
    }
    return domEv;
}
const eventsBatch = {};
// 小程序的事件代理回调函数
function eventHandler(event) {
    var _a;
    (_a = hooks.modifyMpEvent) === null || _a === void 0 ? void 0 : _a.call(hooks, event);
    if (event.currentTarget == null) {
        event.currentTarget = event.target;
    }
    const node = document$1.getElementById(event.currentTarget.id);
    if (node) {
        const dispatch = () => {
            var _a;
            const e = createEvent(event, node);
            (_a = hooks.modifyTaroEvent) === null || _a === void 0 ? void 0 : _a.call(hooks, e, node);
            node.dispatchEvent(e);
        };
        if (typeof hooks.batchedEventUpdates === 'function') {
            const type = event.type;
            if (!hooks.isBubbleEvents(type) ||
                !isParentBinded(node, type) ||
                (type === TOUCHMOVE && !!node.props.catchMove)) {
                // 最上层组件统一 batchUpdate
                hooks.batchedEventUpdates(() => {
                    if (eventsBatch[type]) {
                        eventsBatch[type].forEach(fn => fn());
                        delete eventsBatch[type];
                    }
                    dispatch();
                });
            }
            else {
                // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
            }
        }
        else {
            dispatch();
        }
    }
}

const isBrowser = typeof document !== 'undefined' && !!document.scripts;
const doc = isBrowser ? document : _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];
const win = isBrowser ? window : _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];

function createDocument() {
    /**
     * <document>
     *   <html>
     *     <head></head>
     *     <body>
     *       <container>
     *         <app id="app" />
     *       </container>
     *     </body>
     *   </html>
     * </document>
     */
    const getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
    const doc = getElement(ElementNames.Document)();
    const documentCreateElement = doc.createElement.bind(doc);
    const html = documentCreateElement(HTML);
    const head = documentCreateElement(HEAD);
    const body = documentCreateElement(BODY);
    const app = documentCreateElement(APP);
    app.id = APP;
    const container$1 = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
    doc.appendChild(html);
    html.appendChild(head);
    html.appendChild(body);
    body.appendChild(container$1);
    container$1.appendChild(app);
    doc.documentElement = html;
    doc.head = head;
    doc.body = body;
    doc.createEvent = createEvent;
    return doc;
}
const document$2 = (isBrowser ? doc : createDocument());

const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const navigator = isBrowser ? win.navigator : {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
    cookieEnabled: true,
    mimeTypes: [],
    onLine: true,
    platform: 'MacIntel',
    plugins: [],
    product: 'Taro',
    productSub: '20030107',
    userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
    vendor: 'Joyent',
    vendorSub: ''
};

// https://github.com/myrne/performance-now
let now;
(function () {
    let loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        now = function () {
            return performance.now();
        };
    }
    else if (Date.now) {
        now = function () {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    }
    else {
        now = function () {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
const raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
    const _now = now();
    const nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
    return setTimeout(function () { callback(lastTime = nextTime); }, nextTime - _now);
};
const caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null
    ? cancelAnimationFrame
    : function (seed) {
        // fix https://github.com/NervJS/taro/issues/7749
        clearTimeout(seed);
    };

function getComputedStyle(element) {
    return element.style;
}

const window$1 = isBrowser ? win : {
    navigator,
    document: document$2
};
if (!isBrowser) {
    const globalProperties = [
        ...Object.getOwnPropertyNames(global || win),
        ...Object.getOwnPropertySymbols(global || win)
    ];
    globalProperties.forEach(property => {
        if (property === 'atob')
            return;
        if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
            window$1[property] = global[property];
        }
    });
    document$2.defaultView = window$1;
}
if (process.env.TARO_ENV && process.env.TARO_ENV !== 'h5') {
    window$1.requestAnimationFrame = raf;
    window$1.cancelAnimationFrame = caf;
    window$1.getComputedStyle = getComputedStyle;
    window$1.addEventListener = function () { };
    window$1.removeEventListener = function () { };
    if (!(DATE in window$1)) {
        window$1.Date = Date;
    }
    window$1.setTimeout = function (cb, delay) {
        setTimeout(cb, delay);
    };
    window$1.clearTimeout = function (seed) {
        clearTimeout(seed);
    };
}

const Current = {
    app: null,
    router: null,
    page: null
};
const getCurrentInstance = () => Current;

class Events {
    constructor(opts) {
        if (typeof opts !== 'undefined' && opts.callbacks) {
            this.callbacks = opts.callbacks;
        }
        else {
            this.callbacks = {};
        }
    }
    on(eventName, callback, context) {
        let event, node, tail, list;
        if (!callback) {
            return this;
        }
        eventName = eventName.split(Events.eventSplitter);
        this.callbacks || (this.callbacks = {});
        const calls = this.callbacks;
        while ((event = eventName.shift())) {
            list = calls[event];
            node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event, calls, node, tail, cb, ctx;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        while ((event = events.shift())) {
            node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            tail = node.tail;
            while ((node = node.next) !== tail) {
                cb = node.callback;
                ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events) {
        let event, node, calls, tail;
        if (!(calls = this.callbacks)) {
            return this;
        }
        events = events.split(Events.eventSplitter);
        const rest = [].slice.call(arguments, 1);
        while ((event = events.shift())) {
            if ((node = calls[event])) {
                tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, rest);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = /\s+/;
const hooks$1 = container.get(SERVICE_IDENTIFIER.Hooks);
const eventCenter = hooks$1.getEventCenter(Events);
container.bind(SERVICE_IDENTIFIER.eventCenter).toConstantValue(eventCenter);

/* eslint-disable dot-notation */
const instances = new Map();
const pageId = incrementId();
const hooks$2 = container.get(SERVICE_IDENTIFIER.Hooks);
function injectPageInstance(inst, id) {
    var _a;
    (_a = hooks$2.mergePageInstance) === null || _a === void 0 ? void 0 : _a.call(hooks$2, instances.get(id), inst);
    instances.set(id, inst);
}
function getPageInstance(id) {
    return instances.get(id);
}
function addLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path : '/' + path;
}
function safeExecute(path, lifecycle, ...args) {
    const instance = instances.get(path);
    if (instance == null) {
        return;
    }
    const func = hooks$2.getLifecycle(instance, lifecycle);
    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(func)) {
        const res = func.map(fn => fn.apply(instance, args));
        return res[0];
    }
    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(func)) {
        return;
    }
    return func.apply(instance, args);
}
function stringify(obj) {
    if (obj == null) {
        return '';
    }
    const path = Object.keys(obj).map((key) => {
        return key + '=' + obj[key];
    }).join('&');
    return path === '' ? path : '?' + path;
}
function getPath(id, options) {
    let path = id;
    if (!isBrowser) {
        path = id + stringify(options);
    }
    return path;
}
function getOnReadyEventKey(path) {
    return path + '.' + 'onReady';
}
function getOnShowEventKey(path) {
    return path + '.' + 'onShow';
}
function getOnHideEventKey(path) {
    return path + '.' + 'onHide';
}
function createPageConfig(component, pageName, data, pageConfig) {
    var _a, _b;
    const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
    let pageElement = null;
    let unmounting = false;
    let prepareMountList = [];
    let loadResolver;
    let hasLoaded;
    const config = {
        onLoad(options, cb) {
            hasLoaded = new Promise(resolve => { loadResolver = resolve; });
            perf.start(PAGE_INIT);
            Current.page = this;
            this.config = pageConfig || {};
            options.$taroTimestamp = Date.now();
            // this.$taroPath 是页面唯一标识，不可变，因此页面参数 options 也不可变
            this.$taroPath = getPath(id, options);
            // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
            if (this.$taroParams == null) {
                this.$taroParams = Object.assign({}, options);
            }
            const router = isBrowser ? this.$taroPath : this.route || this.__route__;
            Current.router = {
                params: this.$taroParams,
                path: addLeadingSlash(router),
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
            };
            const mount = () => {
                Current.app.mount(component, this.$taroPath, () => {
                    pageElement = document$2.getElementById(this.$taroPath);
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* ensure */ "d"])(pageElement !== null, '没有找到页面实例。');
                    safeExecute(this.$taroPath, 'onLoad', this.$taroParams);
                    loadResolver();
                    if (!isBrowser) {
                        pageElement.ctx = this;
                        pageElement.performUpdate(true, cb);
                    }
                    else {
                        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(cb) && cb();
                    }
                });
            };
            if (unmounting) {
                prepareMountList.push(mount);
            }
            else {
                mount();
            }
        },
        onReady() {
            raf(() => {
                eventCenter.trigger(getOnReadyEventKey(id));
            });
            safeExecute(this.$taroPath, 'onReady');
            this.onReady.called = true;
        },
        onUnload() {
            unmounting = true;
            Current.app.unmount(this.$taroPath, () => {
                unmounting = false;
                instances.delete(this.$taroPath);
                if (pageElement) {
                    pageElement.ctx = null;
                }
                if (prepareMountList.length) {
                    prepareMountList.forEach(fn => fn());
                    prepareMountList = [];
                }
            });
        },
        onShow() {
            hasLoaded.then(() => {
                Current.page = this;
                this.config = pageConfig || {};
                const router = isBrowser ? this.$taroPath : this.route || this.__route__;
                Current.router = {
                    params: this.$taroParams,
                    path: addLeadingSlash(router),
                    onReady: getOnReadyEventKey(id),
                    onShow: getOnShowEventKey(id),
                    onHide: getOnHideEventKey(id)
                };
                raf(() => {
                    eventCenter.trigger(getOnShowEventKey(id));
                });
                safeExecute(this.$taroPath, 'onShow');
            });
        },
        onHide() {
            Current.page = null;
            Current.router = null;
            safeExecute(this.$taroPath, 'onHide');
            eventCenter.trigger(getOnHideEventKey(id));
        },
        onPullDownRefresh() {
            return safeExecute(this.$taroPath, 'onPullDownRefresh');
        },
        onReachBottom() {
            return safeExecute(this.$taroPath, 'onReachBottom');
        },
        onPageScroll(options) {
            return safeExecute(this.$taroPath, 'onPageScroll', options);
        },
        onResize(options) {
            return safeExecute(this.$taroPath, 'onResize', options);
        },
        onTabItemTap(options) {
            return safeExecute(this.$taroPath, 'onTabItemTap', options);
        },
        onTitleClick() {
            return safeExecute(this.$taroPath, 'onTitleClick');
        },
        onOptionMenuClick() {
            return safeExecute(this.$taroPath, 'onOptionMenuClick');
        },
        onPopMenuClick() {
            return safeExecute(this.$taroPath, 'onPopMenuClick');
        },
        onPullIntercept() {
            return safeExecute(this.$taroPath, 'onPullIntercept');
        },
        onAddToFavorites() {
            return safeExecute(this.$taroPath, 'onAddToFavorites');
        }
    };
    // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
    if (component.onShareAppMessage ||
        ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) ||
        component.enableShareAppMessage) {
        config.onShareAppMessage = function (options) {
            const target = options === null || options === void 0 ? void 0 : options.target;
            if (target != null) {
                const id = target.id;
                const element = document$2.getElementById(id);
                if (element != null) {
                    options.target.dataset = element.dataset;
                }
            }
            return safeExecute(this.$taroPath, 'onShareAppMessage', options);
        };
    }
    if (component.onShareTimeline ||
        ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) ||
        component.enableShareTimeline) {
        config.onShareTimeline = function () {
            return safeExecute(this.$taroPath, 'onShareTimeline');
        };
    }
    config.eh = eventHandler;
    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "j"])(data)) {
        config.data = data;
    }
    if (isBrowser) {
        config.path = id;
    }
    return config;
}
function createComponentConfig(component, componentName, data) {
    var _a, _b, _c;
    const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
    let componentElement = null;
    const config = {
        attached() {
            var _a;
            perf.start(PAGE_INIT);
            const path = getPath(id, { id: ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId() });
            Current.app.mount(component, path, () => {
                componentElement = document$2.getElementById(path);
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* ensure */ "d"])(componentElement !== null, '没有找到组件实例。');
                safeExecute(path, 'onLoad');
                if (!isBrowser) {
                    componentElement.ctx = this;
                    componentElement.performUpdate(true);
                }
            });
        },
        detached() {
            const path = getPath(id, { id: this.getPageId() });
            Current.app.unmount(path, () => {
                instances.delete(path);
                if (componentElement) {
                    componentElement.ctx = null;
                }
            });
        },
        methods: {
            eh: eventHandler
        }
    };
    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "j"])(data)) {
        config.data = data;
    }
    config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];
    config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];
    config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];
    return config;
}
function createRecursiveComponentConfig(componentName) {
    return {
        properties: {
            i: {
                type: Object,
                value: {
                    ["nn" /* NodeName */]: 'view'
                }
            },
            l: {
                type: String,
                value: ''
            }
        },
        options: {
            addGlobalClass: true,
            virtualHost: componentName !== 'custom-wrapper'
        },
        methods: {
            eh: eventHandler
        }
    };
}

const hooks$3 = container.get(SERVICE_IDENTIFIER.Hooks);
function isClassComponent(R, component) {
    var _a;
    return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(component.render) ||
        !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) ||
        component.prototype instanceof R.Component; // compat for some others react-like library
}
// 初始值设置为 any 主要是为了过 TS 的校验
let R = _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];
let PageContext = _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"];
function connectReactPage(R, id) {
    const h = R.createElement;
    return (component) => {
        // eslint-disable-next-line dot-notation
        const isReactComponent = isClassComponent(R, component);
        const inject = (node) => node && injectPageInstance(node, id);
        const refs = isReactComponent ? { ref: inject } : {
            forwardedRef: inject,
            // 兼容 react-redux 7.20.1+
            reactReduxForwardedRef: inject
        };
        if (PageContext === _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* EMPTY_OBJ */ "a"]) {
            PageContext = R.createContext('');
        }
        return class Page extends R.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    hasError: false
                };
            }
            static getDerivedStateFromError(error) {
                 false && false;
                return { hasError: true };
            }
            // React 16 uncaught error 会导致整个应用 crash，
            // 目前把错误缩小到页面
            componentDidCatch(error, info) {
                 false && false;
                 false && false;
            }
            render() {
                const children = this.state.hasError
                    ? []
                    : h(PageContext.Provider, { value: id }, h(component, Object.assign(Object.assign({}, this.props), refs)));
                if (isBrowser) {
                    return h('div', { id, className: 'taro_page' }, children);
                }
                return h('root', { id }, children);
            }
        };
    };
}
let ReactDOM;
function setReconciler() {
    const getLifecycle = function (instance, lifecycle) {
        lifecycle = lifecycle.replace(/^on(Show|Hide)$/, 'componentDid$1');
        return instance[lifecycle];
    };
    const modifyMpEvent = function (event) {
        event.type = event.type.replace(/-/g, '');
    };
    const batchedEventUpdates = function (cb) {
        ReactDOM.unstable_batchedUpdates(cb);
    };
    const mergePageInstance = function (prev, next) {
        if (!prev || !next)
            return;
        // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
        // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
        if ('constructor' in prev)
            return;
        Object.keys(prev).forEach(item => {
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(next[item])) {
                next[item] = [next[item], ...prev[item]];
            }
            else {
                next[item] = [...(next[item] || []), ...prev[item]];
            }
        });
    };
    hooks$3.getLifecycle = getLifecycle;
    hooks$3.modifyMpEvent = modifyMpEvent;
    hooks$3.batchedEventUpdates = batchedEventUpdates;
    hooks$3.mergePageInstance = mergePageInstance;
    if (process.env.TARO_ENV === 'h5') {
        hooks$3.createPullDownComponent = (el, _, R, customWrapper) => {
            const isReactComponent = isClassComponent(R, el);
            return R.forwardRef((props, ref) => {
                const newProps = Object.assign({}, props);
                const refs = isReactComponent ? { ref: ref } : {
                    forwardedRef: ref,
                    // 兼容 react-redux 7.20.1+
                    reactReduxForwardedRef: ref
                };
                return R.createElement(customWrapper || 'taro-pull-to-refresh', null, R.createElement(el, Object.assign(Object.assign({}, newProps), refs)));
            });
        };
        hooks$3.getDOMNode = (inst) => {
            return ReactDOM.findDOMNode(inst);
        };
    }
}
const pageKeyId = incrementId();
function createReactApp(App, react, reactdom, config) {
    R = react;
    ReactDOM = reactdom;
    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* ensure */ "d"])(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
    const ref = R.createRef();
    const isReactComponent = isClassComponent(R, App);
    setReconciler();
    class AppWrapper extends R.Component {
        constructor() {
            super(...arguments);
            // run createElement() inside the render function to make sure that owner is right
            this.pages = [];
            this.elements = [];
        }
        mount(component, id, cb) {
            const key = id + pageKeyId();
            const page = () => R.createElement(component, { key, tid: id });
            this.pages.push(page);
            this.forceUpdate(cb);
        }
        unmount(id, cb) {
            for (let i = 0; i < this.elements.length; i++) {
                const element = this.elements[i];
                if (element.props.tid === id) {
                    this.elements.splice(i, 1);
                    break;
                }
            }
            this.forceUpdate(cb);
        }
        render() {
            while (this.pages.length > 0) {
                const page = this.pages.pop();
                this.elements.push(page());
            }
            let props = null;
            if (isReactComponent) {
                props = { ref };
            }
            return R.createElement(App, props, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
        }
    }
    let wrapper;
    if (!isBrowser) {
        // eslint-disable-next-line react/no-render-return-value
        wrapper = ReactDOM.render(R.createElement(AppWrapper), document$2.getElementById('app'));
    }
    const app = Object.create({
        render(cb) {
            wrapper.forceUpdate(cb);
        },
        mount(component, id, cb) {
            const page = connectReactPage(R, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount(id, cb) {
            wrapper.unmount(id, cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            enumerable: true,
            writable: true,
            value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (isBrowser) {
                    // 由于 H5 路由初始化的时候会清除 app 下的 dom 元素，所以需要在路由初始化后执行 render
                    // eslint-disable-next-line react/no-render-return-value
                    wrapper = ReactDOM.render(R.createElement(AppWrapper), document$2.getElementById('app'));
                }
                const app = ref.current;
                // For taroize
                // 把 App Class 上挂载的额外属性同步到全局 app 对象中
                if (app === null || app === void 0 ? void 0 : app.taroGlobalData) {
                    const globalData = app.taroGlobalData;
                    const keys = Object.keys(globalData);
                    const descriptors = Object.getOwnPropertyDescriptors(globalData);
                    keys.forEach(key => {
                        Object.defineProperty(this, key, {
                            configurable: true,
                            enumerable: true,
                            get() {
                                return globalData[key];
                            },
                            set(value) {
                                globalData[key] = value;
                            }
                        });
                    });
                    Object.defineProperties(this, descriptors);
                }
                this.$app = app;
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(app.onLaunch)) {
                    app.onLaunch(options);
                }
            }
        },
        onShow: {
            enumerable: true,
            writable: true,
            value(options) {
                const app = ref.current;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(app.componentDidShow)) {
                    app.componentDidShow(options);
                }
                // app useDidShow
                triggerAppHook('onShow');
            }
        },
        onHide: {
            enumerable: true,
            writable: true,
            value(options) {
                const app = ref.current;
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(app.componentDidHide)) {
                    app.componentDidHide(options);
                }
                // app useDidHide
                triggerAppHook('onHide');
            }
        },
        onPageNotFound: {
            enumerable: true,
            writable: true,
            value(res) {
                const app = ref.current;
                if (app != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(app.onPageNotFound)) {
                    app.onPageNotFound(res);
                }
            }
        }
    });
    function triggerAppHook(lifecycle) {
        const instance = getPageInstance(HOOKS_APP_ID);
        if (instance) {
            const app = ref.current;
            const func = hooks$3.getLifecycle(instance, lifecycle);
            if (Array.isArray(func)) {
                func.forEach(cb => cb.apply(app));
            }
        }
    }
    Current.app = app;
    return Current.app;
}
const getNativeCompId = incrementId();
function initNativeComponentEntry(R, ReactDOM) {
    class NativeComponentWrapper extends R.Component {
        constructor() {
            super(...arguments);
            this.root = R.createRef();
            this.ctx = this.props.getCtx();
        }
        componentDidMount() {
            this.ctx.component = this;
            const rootElement = this.root.current;
            rootElement.ctx = this.ctx;
            rootElement.performUpdate(true);
        }
        render() {
            return (R.createElement('root', {
                ref: this.root
            }, this.props.renderComponent(this.ctx)));
        }
    }
    class Entry extends R.Component {
        constructor() {
            super(...arguments);
            this.state = {
                components: []
            };
        }
        componentDidMount() {
            Current.app = this;
        }
        mount(Component, compId, getCtx) {
            const isReactComponent = isClassComponent(R, Component);
            const inject = (node) => node && injectPageInstance(node, compId);
            const refs = isReactComponent ? { ref: inject } : {
                forwardedRef: inject,
                reactReduxForwardedRef: inject
            };
            const item = {
                compId,
                element: R.createElement(NativeComponentWrapper, {
                    key: compId,
                    getCtx,
                    renderComponent(ctx) {
                        return R.createElement(Component, Object.assign(Object.assign({}, (ctx.data || (ctx.data = {})).props), refs));
                    }
                })
            };
            this.setState({
                components: [...this.state.components, item]
            });
        }
        unmount(compId) {
            const components = this.state.components;
            const index = components.findIndex(item => item.compId === compId);
            const next = [...components.slice(0, index), ...components.slice(index + 1)];
            this.setState({
                components: next
            });
        }
        render() {
            const components = this.state.components;
            return (components.map(({ element }) => element));
        }
    }
    setReconciler();
    const app = document$2.getElementById('app');
    ReactDOM.render(R.createElement(Entry, {}), app);
}
function createNativeComponentConfig(Component, react, reactdom, componentConfig) {
    R = react;
    ReactDOM = reactdom;
    setReconciler();
    const config = {
        properties: {
            props: {
                type: null,
                value: null,
                observer(_newVal, oldVal) {
                    oldVal && this.component.forceUpdate();
                }
            }
        },
        created() {
            if (!Current.app) {
                initNativeComponentEntry(R, ReactDOM);
            }
        },
        attached() {
            setCurrent();
            this.compId = getNativeCompId();
            this.config = componentConfig;
            Current.app.mount(Component, this.compId, () => this);
        },
        ready() {
            safeExecute(this.compId, 'onReady');
        },
        detached() {
            Current.app.unmount(this.compId);
        },
        pageLifetimes: {
            show() {
                safeExecute(this.compId, 'onShow');
            },
            hide() {
                safeExecute(this.compId, 'onHide');
            }
        },
        methods: {
            eh: eventHandler
        }
    };
    function setCurrent() {
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        if (Current.page === currentPage)
            return;
        Current.page = currentPage;
        const route = currentPage.route || currentPage.__route__;
        const router = {
            params: currentPage.options || {},
            path: addLeadingSlash(route),
            onReady: '',
            onHide: '',
            onShow: ''
        };
        Current.router = router;
        if (!currentPage.options) {
            // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
            Object.defineProperty(currentPage, 'options', {
                enumerable: true,
                configurable: true,
                get() {
                    return this._optionsValue;
                },
                set(value) {
                    router.params = value;
                    this._optionsValue = value;
                }
            });
        }
    }
    return config;
}

function connectVuePage(Vue, id) {
    return (component) => {
        const injectedPage = Vue.extend({
            props: {
                tid: String
            },
            mixins: [component, {
                    created() {
                        injectPageInstance(this, id);
                    }
                }]
        });
        const options = {
            render(h) {
                return h(isBrowser ? 'div' : 'root', {
                    attrs: {
                        id,
                        class: isBrowser ? 'taro_page' : ''
                    }
                }, [
                    h(injectedPage, { props: { tid: id } })
                ]);
            }
        };
        return options;
    };
}
function setReconciler$1() {
    const hooks = container.get(SERVICE_IDENTIFIER.Hooks);
    const onRemoveAttribute = function (dom, qualifiedName) {
        // 处理原因: https://github.com/NervJS/taro/pull/5990
        const props = dom.props;
        if (!props.hasOwnProperty(qualifiedName) || Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isBoolean */ "g"])(props[qualifiedName])) {
            dom.setAttribute(qualifiedName, false);
            return true;
        }
    };
    const getLifecycle = function (instance, lifecycle) {
        return instance.$options[lifecycle];
    };
    hooks.onRemoveAttribute = onRemoveAttribute;
    hooks.getLifecycle = getLifecycle;
    if (process.env.TARO_ENV === 'h5') {
        hooks.createPullDownComponent = (el, path, vue) => {
            const injectedPage = vue.extend({
                props: {
                    tid: String
                },
                mixins: [el, {
                        created() {
                            injectPageInstance(this, path);
                        }
                    }]
            });
            const options = {
                name: 'PullToRefresh',
                render(h) {
                    return h('taro-pull-to-refresh', {
                        class: ['hydrated']
                    }, [h(injectedPage, this.$slots.default)]);
                }
            };
            return options;
        };
        hooks.getDOMNode = (el) => {
            return el.$el;
        };
    }
}
let Vue;
function createVueApp(App, vue, config) {
    Vue = vue;
    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* ensure */ "d"])(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
    setReconciler$1();
    Vue.config.getTagNamespace = _tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "k"];
    const elements = [];
    const pages = [];
    let appInstance;
    const wrapper = new Vue({
        render(h) {
            while (pages.length > 0) {
                const page = pages.pop();
                elements.push(page(h));
            }
            return h(App, { ref: 'app' }, elements.slice());
        },
        methods: {
            mount(component, id, cb) {
                pages.push((h) => h(component, { key: id }));
                this.updateSync(cb);
            },
            updateSync(cb) {
                this._update(this._render(), false);
                this.$children.forEach((child) => child._update(child._render(), false));
                cb();
            },
            unmount(id, cb) {
                for (let i = 0; i < elements.length; i++) {
                    const element = elements[i];
                    if (element.key === id) {
                        elements.splice(i, 1);
                        break;
                    }
                }
                this.updateSync(cb);
            }
        }
    });
    if (!isBrowser) {
        wrapper.$mount(document$2.getElementById('app'));
    }
    const app = Object.create({
        mount(component, id, cb) {
            const page = connectVuePage(Vue, id)(component);
            wrapper.mount(page, id, cb);
        },
        unmount(id, cb) {
            wrapper.unmount(id, cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            writable: true,
            enumerable: true,
            value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (isBrowser) {
                    // 由于 H5 路由初始化的时候会清除 app 下的 dom 元素，所以需要在路由初始化后再执行 render
                    wrapper.$mount(document$2.getElementById('app'));
                }
                appInstance = wrapper.$refs.app;
                if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(appInstance.$options.onLaunch)) {
                    appInstance.$options.onLaunch.call(appInstance, options);
                }
            }
        },
        onShow: {
            writable: true,
            enumerable: true,
            value(options) {
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(appInstance.$options.onShow)) {
                    appInstance.$options.onShow.call(appInstance, options);
                }
            }
        },
        onHide: {
            writable: true,
            enumerable: true,
            value(options) {
                if (appInstance != null && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(appInstance.$options.onHide)) {
                    appInstance.$options.onHide.call(appInstance, options);
                }
            }
        }
    });
    Current.app = app;
    return Current.app;
}

function createVue3Page(h, id) {
    return function (component) {
        var _a;
        const inject = {
            props: {
                tid: String
            },
            created() {
                injectPageInstance(this, id);
                // vue3 组件 created 时机比小程序页面 onShow 慢，因此在 created 后再手动触发一次 onShow。
                this.$nextTick(() => {
                    safeExecute(id, 'onShow');
                });
            }
        };
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(component.mixins)) {
            const mixins = component.mixins;
            const idx = mixins.length - 1;
            if (!((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)) {
                // mixins 里还没注入过，直接推入数组
                component.mixins.push(inject);
            }
            else {
                // mixins 里已经注入过，代替前者
                component.mixins[idx] = inject;
            }
        }
        else {
            component.mixins = [inject];
        }
        return h(isBrowser ? 'div' : 'root', {
            key: id,
            id,
            class: isBrowser ? 'taro_page' : ''
        }, [
            h(Object.assign({}, component), {
                tid: id
            })
        ]);
    };
}
function setReconciler$2() {
    const hooks = container.get(SERVICE_IDENTIFIER.Hooks);
    const getLifecycle = function (instance, lifecycle) {
        return instance.$options[lifecycle];
    };
    const modifyMpEvent = function (event) {
        event.type = event.type.replace(/-/g, '');
    };
    hooks.getLifecycle = getLifecycle;
    hooks.modifyMpEvent = modifyMpEvent;
    if (process.env.TARO_ENV === 'h5') {
        hooks.createPullDownComponent = (component, path, h) => {
            const inject = {
                props: {
                    tid: String
                },
                created() {
                    injectPageInstance(this, path);
                }
            };
            component.mixins = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(component.mixins)
                ? component.mixins.push(inject)
                : [inject];
            return {
                render() {
                    return h('taro-pull-to-refresh', {
                        class: 'hydrated'
                    }, [h(component, this.$slots.default)]);
                }
            };
        };
        hooks.getDOMNode = (el) => {
            return el.$el;
        };
    }
}
function createVue3App(app, h, config) {
    let pages = [];
    let appInstance;
    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* ensure */ "d"])(!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(app._component), '入口组件不支持使用函数式组件');
    setReconciler$2();
    app._component.render = function () {
        return pages.slice();
    };
    if (!isBrowser) {
        appInstance = app.mount('#app');
    }
    const appConfig = Object.create({
        mount(component, id, cb) {
            const page = createVue3Page(h, id)(component);
            pages.push(page);
            this.updateAppInstance(cb);
        },
        unmount(id, cb) {
            pages = pages.filter(page => page.key !== id);
            this.updateAppInstance(cb);
        },
        updateAppInstance(cb) {
            appInstance.$forceUpdate();
            appInstance.$nextTick(cb);
        }
    }, {
        config: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: config
        },
        onLaunch: {
            writable: true,
            enumerable: true,
            value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                if (isBrowser) {
                    appInstance = app.mount('#app');
                }
                // 把 App Class 上挂载的额外属性同步到全局 app 对象中
                // eslint-disable-next-line dot-notation
                if (app['taroGlobalData']) {
                    // eslint-disable-next-line dot-notation
                    const globalData = app['taroGlobalData'];
                    const keys = Object.keys(globalData);
                    const descriptors = Object.getOwnPropertyDescriptors(globalData);
                    keys.forEach(key => {
                        Object.defineProperty(this, key, {
                            configurable: true,
                            enumerable: true,
                            get() {
                                return globalData[key];
                            },
                            set(value) {
                                globalData[key] = value;
                            }
                        });
                    });
                    Object.defineProperties(this, descriptors);
                }
                const onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(onLaunch) && onLaunch.call(appInstance, options);
            }
        },
        onShow: {
            writable: true,
            enumerable: true,
            value(options) {
                var _a;
                Current.router = Object.assign({ params: options === null || options === void 0 ? void 0 : options.query }, options);
                const onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(onShow) && onShow.call(appInstance, options);
            }
        },
        onHide: {
            writable: true,
            enumerable: true,
            value(options) {
                var _a;
                const onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(onHide) && onHide.call(appInstance, options);
            }
        }
    });
    Current.app = appConfig;
    return Current.app;
}

const taroHooks = (lifecycle) => {
    return (fn) => {
        const id = R.useContext(PageContext) || HOOKS_APP_ID;
        // hold fn ref and keep up to date
        const fnRef = R.useRef(fn);
        if (fnRef.current !== fn)
            fnRef.current = fn;
        R.useLayoutEffect(() => {
            let inst = getPageInstance(id);
            let first = false;
            if (inst == null) {
                first = true;
                inst = Object.create(null);
            }
            inst = inst;
            // callback is immutable but inner function is up to date
            const callback = (...args) => fnRef.current(...args);
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(inst[lifecycle])) {
                inst[lifecycle] = [inst[lifecycle], callback];
            }
            else {
                inst[lifecycle] = [
                    ...(inst[lifecycle] || []),
                    callback
                ];
            }
            if (first) {
                injectPageInstance(inst, id);
            }
            return () => {
                const inst = getPageInstance(id);
                const list = inst[lifecycle];
                if (list === callback) {
                    inst[lifecycle] = undefined;
                }
                else if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(list)) {
                    inst[lifecycle] = list.filter(item => item !== callback);
                }
            };
        }, []);
    };
};
const useDidShow = taroHooks('componentDidShow');
const useDidHide = taroHooks('componentDidHide');
const usePullDownRefresh = taroHooks('onPullDownRefresh');
const useReachBottom = taroHooks('onReachBottom');
const usePageScroll = taroHooks('onPageScroll');
const useResize = taroHooks('onResize');
const useShareAppMessage = taroHooks('onShareAppMessage');
const useTabItemTap = taroHooks('onTabItemTap');
const useTitleClick = taroHooks('onTitleClick');
const useOptionMenuClick = taroHooks('onOptionMenuClick');
const usePullIntercept = taroHooks('onPullIntercept');
const useShareTimeline = taroHooks('onShareTimeline');
const useAddToFavorites = taroHooks('onAddToFavorites');
const useReady = taroHooks('onReady');
const useRouter = (dynamic = false) => {
    return dynamic ? Current.router : R.useMemo(() => Current.router, []);
};
const useScope = () => undefined;

function removeLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path.slice(1) : path;
}
const nextTick = (cb, ctx) => {
    var _a, _b, _c;
    const router = Current.router;
    const timerFunc = () => {
        setTimeout(function () {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (router !== null) {
        let pageElement = null;
        const path = getPath(removeLeadingSlash(router.path), router.params);
        pageElement = document$2.getElementById(path);
        if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
            if (isBrowser) {
                // eslint-disable-next-line dot-notation
                (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(() => {
                    timerFunc();
                })) !== null && _c !== void 0 ? _c : timerFunc();
            }
            else {
                pageElement.enqueueUpdateCallback(cb, ctx);
            }
        }
        else {
            timerFunc();
        }
    }
    else {
        timerFunc();
    }
};


//# sourceMappingURL=runtime.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35), __webpack_require__(23)))

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const { container, SERVICE_IDENTIFIER } = __webpack_require__(18)
const taro = __webpack_require__(108).default

const hooks = container.get(SERVICE_IDENTIFIER.Hooks)
if (typeof hooks.initNativeApi === 'function') {
  hooks.initNativeApi(taro)
}

module.exports = taro
module.exports.default = module.exports


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ applyPolyfills; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ defineCustomElements; });

// CONCATENATED MODULE: ./node_modules/@tarojs/components/dist/esm/polyfills/index.js
function applyPolyfills() {
  var promises = [];
  if (typeof window !== 'undefined') {
    var win = window;

    if (!win.customElements ||
      (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode))) {
      promises.push(__webpack_require__.e(/* import() | polyfills-dom */ 0).then(__webpack_require__.t.bind(null, 133, 7)));
    }

    var checkIfURLIsSupported = function() {
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        return (u.href === 'http://a/c%20d') && u.searchParams;
      } catch (e) {
        return false;
      }
    };

    if (
      'function' !== typeof Object.assign || !Object.entries ||
      !Array.prototype.find || !Array.prototype.includes ||
      !String.prototype.startsWith || !String.prototype.endsWith ||
      (win.NodeList && !win.NodeList.prototype.forEach) ||
      !win.fetch ||
      !checkIfURLIsSupported() ||
      typeof WeakMap == 'undefined'
    ) {
      promises.push(__webpack_require__.e(/* import() | polyfills-core-js */ 0).then(__webpack_require__.t.bind(null, 134, 7)));
    }
  }
  return Promise.all(promises);
}

// EXTERNAL MODULE: ./node_modules/@tarojs/components/dist/esm-es5/index-165a6222.js
var index_165a6222 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@tarojs/components/dist/esm-es5/loader.js
var patchEsm=function(){return Object(index_165a6222["f" /* p */])()};var defineCustomElements=function(o,e){if(typeof window==="undefined")return Promise.resolve();return patchEsm().then((function(){return Object(index_165a6222["b"])([["taro-checkbox-core_2",[[4,"taro-checkbox-core",{name:[1],value:[1],color:[1],id:[1025],checked:[4],disabled:[4],nativeProps:[16],isWillLoadCalled:[32]}],[0,"taro-checkbox-group-core",{name:[8]},[[0,"checkboxchange","function"]]]]],["taro-radio-core_2",[[4,"taro-radio-core",{name:[1],value:[1],id:[1025],checked:[1028],disabled:[4],nativeProps:[16],isWillLoadCalled:[32]}],[0,"taro-radio-group-core",{name:[8]},[[0,"radiochange","function"]]]]],["taro-swiper-core_2",[[4,"taro-swiper-core",{indicatorDots:[4,"indicator-dots"],indicatorColor:[1,"indicator-color"],indicatorActiveColor:[1,"indicator-active-color"],autoplay:[4],current:[2],interval:[2],duration:[2],circular:[4],vertical:[4],previousMargin:[1,"previous-margin"],nextMargin:[1,"next-margin"],displayMultipleItems:[2,"display-multiple-items"],full:[4],swiperWrapper:[32],swiper:[32],isWillLoadCalled:[32],observer:[32],observerFirst:[32],observerLast:[32]}],[0,"taro-swiper-item-core",{itemId:[1,"item-id"]}]]],["taro-audio-core",[[0,"taro-audio-core",{src:[1],controls:[4],autoplay:[4],loop:[4],muted:[4],nativeProps:[16]}]]],["taro-block-core",[[0,"taro-block-core"]]],["taro-button-core",[[4,"taro-button-core",{disabled:[4],hoverClass:[1,"hover-class"],type:[1],hoverStartTime:[2,"hover-start-time"],hoverStayTime:[2,"hover-stay-time"],size:[1],plain:[4],loading:[4],formType:[1,"form-type"],hover:[32],touch:[32]},[[1,"touchstart","onTouchStart"],[1,"touchend","onTouchEnd"]]]]],["taro-camera-core",[[0,"taro-camera-core"]]],["taro-canvas-core",[[0,"taro-canvas-core",{canvasId:[1,"canvas-id"],nativeProps:[16]}]]],["taro-cover-image-core",[[0,"taro-cover-image-core",{src:[1],nativeProps:[16]}]]],["taro-cover-view-core",[[4,"taro-cover-view-core",{animation:[1],hoverClass:[1,"hover-class"],hoverStartTime:[2,"hover-start-time"],hoverStayTime:[2,"hover-stay-time"],hover:[32],touch:[32]},[[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]]],["taro-custom-wrapper-core",[[0,"taro-custom-wrapper-core"]]],["taro-form-core",[[4,"taro-form-core",{slotParent:[32]},[[0,"tarobuttonsubmit","onButtonSubmit"],[0,"tarobuttonreset","onButtonReset"]]]]],["taro-icon-core",[[0,"taro-icon-core",{type:[1],size:[8],color:[1]}]]],["taro-image-core",[[0,"taro-image-core",{src:[1],mode:[1],lazyLoad:[4,"lazy-load"],nativeProps:[16],aspectFillMode:[32]}]]],["taro-input-core",[[0,"taro-input-core",{value:[1],type:[1],password:[4],placeholder:[1],disabled:[4],maxlength:[2],autoFocus:[4,"auto-focus"],confirmType:[1,"confirm-type"],name:[1],nativeProps:[16],_value:[32]}]]],["taro-label-core",[[4,"taro-label-core",{for:[1]}]]],["taro-movable-area-core",[[0,"taro-movable-area-core"]]],["taro-movable-view-core",[[0,"taro-movable-view-core"]]],["taro-navigator-core",[[0,"taro-navigator-core",{hoverClass:[1,"hover-class"],url:[1],openType:[1,"open-type"],isHover:[4,"is-hover"],delta:[2]},[[0,"click","onClick"]]]]],["taro-open-data-core",[[0,"taro-open-data-core"]]],["taro-picker-view-column-core",[[0,"taro-picker-view-column-core"]]],["taro-picker-view-core",[[0,"taro-picker-view-core"]]],["taro-progress-core",[[0,"taro-progress-core",{percent:[2],showInfo:[4,"show-info"],borderRadius:[8,"border-radius"],fontSize:[8,"font-size"],strokeWidth:[8,"stroke-width"],activeColor:[1,"active-color"],backgroundColor:[1,"background-color"],active:[4]}]]],["taro-pull-to-refresh",[[4,"taro-pull-to-refresh",{prefixCls:[1,"prefix-cls"],distanceToRefresh:[2,"distance-to-refresh"],damping:[2],indicator:[16],currSt:[32],dragOnEdge:[32]}]]],["taro-rich-text-core",[[0,"taro-rich-text-core",{nodes:[1]}]]],["taro-scroll-view-core",[[4,"taro-scroll-view-core",{scrollX:[4,"scroll-x"],scrollY:[4,"scroll-y"],upperThreshold:[8,"upper-threshold"],lowerThreshold:[8,"lower-threshold"],mpScrollTop:[8,"scroll-top"],mpScrollLeft:[8,"scroll-left"],mpScrollIntoView:[1,"scroll-into-view"],scrollWithAnimation:[4,"scroll-with-animation"]}]]],["taro-slider-core",[[0,"taro-slider-core",{min:[2],max:[2],step:[2],disabled:[4],value:[1026],activeColor:[1,"active-color"],backgroundColor:[1,"background-color"],blockSize:[2,"block-size"],blockColor:[1,"block-color"],showValue:[4,"show-value"],name:[1],val:[32],totalWidth:[32],touching:[32],ogX:[32],touchId:[32],percent:[32],ogPercent:[32],isWillLoadCalled:[32]}]]],["taro-switch-core",[[0,"taro-switch-core",{type:[1],checked:[4],color:[1],name:[1],disabled:[4],nativeProps:[16],isChecked:[32],isWillLoadCalled:[32]}]]],["taro-tabbar",[[0,"taro-tabbar",{conf:[16],list:[32],borderStyle:[32],backgroundColor:[32],color:[32],selectedColor:[32],selectedIndex:[32],status:[32]}]]],["taro-text-core",[[4,"taro-text-core",{selectable:[4]}]]],["taro-textarea-core",[[0,"taro-textarea-core",{value:[1],placeholder:[1],disabled:[4],maxlength:[2],autoFocus:[4,"auto-focus"],autoHeight:[4,"auto-height"],name:[1],nativeProps:[16],line:[32]}]]],["taro-view-core",[[4,"taro-view-core",{animation:[1],hoverClass:[1,"hover-class"],hoverStartTime:[2,"hover-start-time"],hoverStayTime:[2,"hover-stay-time"],hover:[32],touch:[32]},[[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]]],["taro-web-view-core",[[0,"taro-web-view-core",{src:[1]}]]],["taro-picker-core_2",[[4,"taro-picker-core",{mode:[1],disabled:[4],range:[16],rangeKey:[1,"range-key"],value:[8],start:[1],end:[1],fields:[1],name:[1],pickerValue:[32],height:[32],hidden:[32],fadeOut:[32],isWillLoadCalled:[32]}],[0,"taro-picker-group",{mode:[1],range:[16],rangeKey:[1,"range-key"],height:[2],columnId:[1,"column-id"],updateHeight:[16],onColumnChange:[16],updateDay:[16],startY:[32],preY:[32],hadMove:[32],touchEnd:[32],isMove:[32]},[[1,"mousedown","onMouseDown"],[1,"mousemove","onMouseMove"],[1,"mouseup","onMouseMoveEnd"],[1,"mouseleave","onMouseMoveEnd"],[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]]],["taro-video-control_3",[[0,"taro-video-core",{src:[1],duration:[2],controls:[4],autoplay:[4],loop:[4],muted:[4],initialTime:[2,"initial-time"],poster:[1],objectFit:[1,"object-fit"],showProgress:[4,"show-progress"],showFullscreenBtn:[4,"show-fullscreen-btn"],showPlayBtn:[4,"show-play-btn"],showCenterPlayBtn:[4,"show-center-play-btn"],showMuteBtn:[4,"show-mute-btn"],danmuList:[16],danmuBtn:[4,"danmu-btn"],enableDanmu:[4,"enable-danmu"],enablePlayGesture:[4,"enable-play-gesture"],enableProgressGesture:[4,"enable-progress-gesture"],vslideGesture:[4,"vslide-gesture"],vslideGestureInFullscreen:[4,"vslide-gesture-in-fullscreen"],nativeProps:[16],_duration:[32],_enableDanmu:[32],isPlaying:[32],isFirst:[32],isFullScreen:[32],fullScreenTimestamp:[32],isMute:[32],play:[64],pause:[64],stop:[64],seek:[64],requestFullScreen:[64],exitFullScreen:[64]},[[5,"touchmove","onDocumentTouchMove"],[5,"touchend","onDocumentTouchEnd"],[5,"touchcancel","onDocumentTouchEnd"]]],[4,"taro-video-control",{controls:[4],currentTime:[2,"current-time"],duration:[2],isPlaying:[4,"is-playing"],pauseFunc:[16],playFunc:[16],seekFunc:[16],showPlayBtn:[4,"show-play-btn"],showProgress:[4,"show-progress"],setProgressBall:[64],toggleVisibility:[64],getIsDraggingProgressBall:[64],setCurrentTime:[64]},[[5,"touchmove","onDocumentTouchMove"],[5,"touchend","onDocumentTouchEnd"],[5,"touchcancel","onDocumentTouchEnd"]]],[0,"taro-video-danmu",{enable:[4],danmuList:[32],sendDanmu:[64],tick:[64]}]]]],e)}))};
// CONCATENATED MODULE: ./node_modules/@tarojs/components/loader/index.js

(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,a)}})();




/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_audio_core", function() { return Audio; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss="audio{max-width:100%;outline:none}";var Audio=function(){function t(t){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,t);this.onError=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"error",7);this.onPlay=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"play",7);this.onPause=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"pause",7);this.onTimeUpdate=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"timeupdate",7);this.onEnded=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ended",7);this.controls=true;this.autoplay=false;this.loop=false;this.muted=false;this.nativeProps={}}t.prototype.bindevent=function(){var t=this;this.audio.addEventListener("timeupdate",(function(e){t.onTimeUpdate.emit({duration:e.srcElement.duration,currentTime:e.srcElement.duration})}));this.audio.addEventListener("ended",(function(){t.onEnded.emit()}));this.audio.addEventListener("play",(function(){t.onPlay.emit()}));this.audio.addEventListener("pause",(function(e){t.onPause.emit(e)}));this.audio.addEventListener("error",(function(e){var n;t.onError.emit({errMsg:(n=e.srcElement.error)===null||n===void 0?void 0:n.code})}))};t.prototype.componentDidLoad=function(){this.bindevent()};t.prototype.render=function(){var t=this;var e=this,n=e.src,i=e.controls,o=e.autoplay,r=e.loop,s=e.muted,a=e.nativeProps;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("audio",Object.assign({src:n,controls:i,autoplay:o,loop:r,muted:s,ref:function(e){t.audio=e}},a))};return t}();Audio.style=indexCss;

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_block_core", function() { return Block; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var Block=function(){function r(r){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r)}r.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return r}();

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_button_core", function() { return Button; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var indexCss='taro-button-core{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#000000;background-color:#F8F8F8;line-height:2.55555556;border-radius:5px;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);overflow:hidden;width:100%;border-width:0;outline:0;-webkit-appearance:none}taro-button-core:not([disabled]):active{color:rgba(0, 0, 0, 0.6);background-color:#DEDEDE}taro-button-core:focus{outline:0}taro-button-core:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0, 0, 0, 0.2);-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:10px}taro-button-core+taro-button-core{margin-top:15px}taro-button-core[type=default]{color:#000000;background-color:#F8F8F8}taro-button-core[type=default]:not([disabled]):visited{color:#000000}taro-button-core[type=default]:not([disabled]):active{color:rgba(0, 0, 0, 0.6);background-color:#DEDEDE}taro-button-core[size=mini]{width:auto;display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}taro-button-core[plain],taro-button-core[plain][type=default],taro-button-core[plain][type=primary]{border-width:1px;background-color:transparent}taro-button-core[disabled]{color:rgba(255, 255, 255, 0.6)}taro-button-core[disabled][type=default]{color:rgba(0, 0, 0, 0.3);background-color:#F7F7F7}taro-button-core[disabled][type=primary]{background-color:#9ED99D}taro-button-core[disabled][type=warn]{background-color:#EC8B89}taro-button-core[loading] .weui-loading{margin:-0.2em 0.34em 0 0}taro-button-core[loading][type=primary],taro-button-core[loading][type=warn]{color:rgba(255, 255, 255, 0.6)}taro-button-core[loading][type=primary]{background-color:#179B16}taro-button-core[loading][type=warn]{background-color:#CE3C39}taro-button-core[plain][type=primary]{color:#1aad19;border:1px solid #1aad19}taro-button-core[plain][type=primary]:not([disabled]):active{color:rgba(26, 173, 25, 0.6);border-color:rgba(26, 173, 25, 0.6);background-color:transparent}taro-button-core[plain][type=primary]:after{border-width:0}taro-button-core[plain],taro-button-core[plain][type=default]{color:#353535;border:1px solid #353535}taro-button-core[plain]:not([disabled]):active,taro-button-core[plain][type=default]:not([disabled]):active{color:rgba(53, 53, 53, 0.6);border-color:rgba(53, 53, 53, 0.6);background-color:transparent}taro-button-core[plain]:after,taro-button-core[plain][type=default]:after{border-width:0}taro-button-core[type=primary]{color:#fff;background-color:#1AAD19}taro-button-core[type=primary]:not([disabled]):visited{color:#FFFFFF}taro-button-core[type=primary]:not([disabled]):active{color:rgba(255, 255, 255, 0.6);background-color:#179B16}taro-button-core[type=warn]{color:#fff;background-color:#E64340}taro-button-core[type=warn]:not([disabled]):visited{color:#FFFFFF}taro-button-core[type=warn]:not([disabled]):active{color:rgba(255, 255, 255, 0.6);background-color:#CE3C39}taro-button-core[plain][disabled]{color:rgba(0, 0, 0, 0.3);border:1px solid rgba(0, 0, 0, 0.2);background-color:#F7F7F7}taro-button-core[plain][disabled][type=primary]{color:rgba(0, 0, 0, 0.3);border:1px solid rgba(0, 0, 0, 0.2);background-color:#F7F7F7}';var Button=function(){function o(o){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,o);this.onSubmit=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"tarobuttonsubmit",7);this.onReset=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"tarobuttonreset",7);this.hoverClass="button-hover";this.type="";this.hoverStartTime=20;this.hoverStayTime=70;this.loading=false;this.formType=null;this.hover=false;this.touch=false}o.prototype.onTouchStart=function(){var o=this;if(this.disabled){return}this.touch=true;if(this.hoverClass&&!this.disabled){setTimeout((function(){if(o.touch){o.hover=true}}),this.hoverStartTime)}};o.prototype.onTouchEnd=function(){var o=this;if(this.disabled){return}this.touch=false;if(this.hoverClass&&!this.disabled){setTimeout((function(){if(!o.touch){o.hover=false}}),this.hoverStayTime)}if(this.formType==="submit"){this.onSubmit.emit()}else if(this.formType==="reset"){this.onReset.emit()}};o.prototype.render=function(){var o;var t=this,r=t.disabled,e=t.hoverClass,a=t.type,i=t.size,n=t.plain,l=t.loading,c=t.hover;var b=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((o={},o[""+e]=c&&!r,o));return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:b,type:a,plain:n,loading:l,size:i,disabled:r},l&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("i",{class:"weui-loading"}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};Object.defineProperty(o.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return o}();Button.style=indexCss;

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_camera_core", function() { return Camera; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var Camera=function(){function r(r){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r)}r.prototype.componentDidLoad=function(){console.error("H5 暂不支持 Camera 组件！")};r.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return r}();

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_canvas_core", function() { return Canvas; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss="taro-canvas-core{position:relative;display:block;width:300px;height:150px}";var LONG_TAP_DELAY=500;var Canvas=function(){function t(t){var e=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,t);this.onLongTap=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"longtap",7);this.nativeProps={};this.onTouchStart=function(){e.timer=setTimeout((function(){e.onLongTap.emit()}),LONG_TAP_DELAY)};this.onTouchMove=function(){clearTimeout(e.timer)};this.onTouchEnd=function(){clearTimeout(e.timer)}}t.prototype.render=function(){var t=this,e=t.canvasId,n=t.nativeProps;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("canvas",Object.assign({"canvas-id":e,style:{width:"100%",height:"100%"},onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd},n))};Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return t}();Canvas.style=indexCss;

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_checkbox_core", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_checkbox_group_core", function() { return CheckboxGroup; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss='@charset "UTF-8";.taro-checkbox{position:relative;display:inline-block}.taro-checkbox_checked{display:inline-block;min-height:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;font-size:23px;border:1px solid #d1d1d1;background-color:#ffffff;border-radius:3px;color:#1AAD19;width:23px;height:23px;position:relative;vertical-align:0;top:5px}.taro-checkbox_checked:checked::before{font-family:"weui";font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;text-align:center;speak:none;display:inline-block;vertical-align:middle;text-decoration:inherit;content:"";color:inherit;font-size:inherit;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -48%) scale(0.73);transform:translate(-50%, -48%) scale(0.73)}';var Checkbox=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"checkboxchange",7);this.value="";this.checked=false;this.disabled=false;this.nativeProps={};this.isWillLoadCalled=false;this.handleChange=function(e){e.stopPropagation();t.onChange.emit({value:t.value})}}e.prototype.watchId=function(e){if(!this.isWillLoadCalled)return;if(e)this.inputEl.setAttribute("id",e)};e.prototype.componentWillLoad=function(){this.isWillLoadCalled=true};e.prototype.componentDidRender=function(){this.id&&this.el.removeAttribute("id")};e.prototype.render=function(){var e=this;var t=this,n=t.checked,o=t.name,r=t.color,i=t.value,a=t.disabled,c=t.nativeProps;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{className:"weui-cells_checkbox"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("input",Object.assign({ref:function(t){if(!t)return;e.inputEl=t;if(e.id)t.setAttribute("id",e.id)},type:"checkbox",value:i,name:o,class:"taro-checkbox_checked",style:{color:r},checked:n,disabled:a,onChange:this.handleChange},c)),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{id:["watchId"]}},enumerable:false,configurable:true});return e}();Checkbox.style=indexCss;var CheckboxGroup=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.uniqueName=Date.now().toString(36)}e.prototype.function=function(e){e.stopPropagation();if(e.target.tagName!=="TARO-CHECKBOX-CORE")return;var t=this.el.querySelectorAll("taro-checkbox-core");this.value=this.getValues(t);this.onChange.emit({value:this.value})};e.prototype.componentDidLoad=function(){var e=this;var t=this.el.querySelectorAll("taro-checkbox-core");t.forEach((function(t){t.setAttribute("name",e.name||e.uniqueName)}));Object.defineProperty(this.el,"value",{get:function(){if(!e.value){var t=e.el.querySelectorAll("taro-checkbox-core");e.value=e.getValues(t)}return e.value},configurable:true})};e.prototype.getValues=function(e){return Array.from(e).filter((function(e){var t=e.querySelector("input");return t===null||t===void 0?void 0:t.checked})).map((function(e){return e.value}))};e.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return e}();

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_cover_image_core", function() { return CoverImage; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss="taro-cover-image-core{overflow:hidden;width:320px;height:240px}";var CoverImage=function(){function r(r){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r);this.onLoad=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"load",7);this.onError=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"error",7);this.nativeProps={}}r.prototype.imageOnLoad=function(){var r=this.imgRef,e=r.width,t=r.height;this.onLoad.emit({width:e,height:t})};r.prototype.imageOnError=function(){this.onError.emit()};r.prototype.render=function(){var r=this;var e=this,t=e.src,i=e.imageOnLoad,o=e.imageOnError,n=e.nativeProps;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("img",Object.assign({ref:function(e){return r.imgRef=e},src:t,onLoad:i.bind(this),onError:o.bind(this)},n))};return r}();CoverImage.style=indexCss;

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_cover_view_core", function() { return CoverView; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var coverViewCss="taro-cover-view-core{display:block}";var CoverView=function(){function t(t){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,t);this.onLongPress=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"longpress",7);this.hoverStartTime=50;this.hoverStayTime=400;this.hover=false;this.touch=false;this.startTime=0}t.prototype.onTouchStart=function(){var t=this;if(this.hoverClass){this.touch=true;setTimeout((function(){if(t.touch){t.hover=true}}),this.hoverStartTime)}this.timeoutEvent=setTimeout((function(){t.onLongPress.emit()}),350);this.startTime=Date.now()};t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)};t.prototype.onTouchEnd=function(){var t=this;var e=Date.now()-this.startTime;if(e<350){clearTimeout(this.timeoutEvent)}if(this.hoverClass){this.touch=false;setTimeout((function(){if(!t.touch){t.hover=false}}),this.hoverStayTime)}};t.prototype.render=function(){var t;var e=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((t={},t[""+this.hoverClass]=this.hover,t));var i={};if(!!this.animation){i["animation"]=this.animation;i["data-animation"]=this.animation}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],Object.assign({class:e},i),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};return t}();CoverView.style=coverViewCss;

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_custom_wrapper_core", function() { return CustomWrapper; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var CustomWrapper=function(){function r(r){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r)}r.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return r}();

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_form_core", function() { return Form; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var Form=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onSubmit=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"submit",7);this.value={}}e.prototype.watchSlotParent=function(e){if(!this.orginalAppendChild){this.orginalAppendChild=this.el.appendChild;this.orginalInsertBefore=this.el.insertBefore;this.orginalReplaceChild=this.el.replaceChild;this.orginalRemoveChild=this.el.removeChild}if(!e){this.el.appendChild=this.orginalAppendChild;this.el.insertBefore=this.orginalInsertBefore;this.el.replaceChild=this.orginalReplaceChild;this.el.removeChild=this.orginalRemoveChild;return}this.el.appendChild=function(t){return e.appendChild(t)};this.el.insertBefore=function(t,r){return e.insertBefore(t,r)};this.el.replaceChild=function(t,r){return e.replaceChild(t,r)};this.el.removeChild=function(t){return e.removeChild(t)}};e.prototype.onButtonSubmit=function(e){e.stopPropagation();this.value=this.getFormValue();this.onSubmit.emit({value:this.value})};e.prototype.onButtonReset=function(e){e.stopPropagation();this.form.reset()};e.prototype.componentDidLoad=function(){var e=this;this.value=this.getFormValue();Object.defineProperty(this.el,"value",{get:function(){return e.value},configurable:true})};e.prototype.componentDidRender=function(){this.setSlotParent(this.form)};e.prototype.getFormValue=function(){var e=this.el;var t=[];var r=e.getElementsByTagName("input");for(var n=0;n<r.length;n++){t.push(r[n])}var i={};var o={};t.forEach((function(e){if(e.className.indexOf("weui-switch")!==-1){i[e.name]=e.checked;return}if(e.type==="radio"){if(e.checked){o[e.name]=true;i[e.name]=e.value}else{if(!o[e.name]){i[e.name]=""}}return}if(e.type==="checkbox"){if(e.checked){if(o[e.name]){i[e.name].push(e.value)}else{o[e.name]=true;i[e.name]=[e.value]}}else{if(!o[e.name]){i[e.name]=[]}}return}i[e.name]=e.value}));var a=e.getElementsByTagName("textarea");var l=[];for(var s=0;s<a.length;s++){l.push(a[s])}l.forEach((function(e){i[e.name]=e.value}));return i};e.prototype.setSlotParent=function(e){this.slotParent=e};e.prototype.render=function(){var e=this;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("form",{ref:function(t){if(t){e.form=t}}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{slotParent:["watchSlotParent"]}},enumerable:false,configurable:true});return e}();

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_icon_core", function() { return Icon; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var Icon=function(){function r(r){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r);this.size="23"}r.prototype.render=function(){var r;var e=this,s=e.type,o=e.size,t=e.color;var n=s===null||s===void 0?void 0:s.replace(/_/g,"-");var a=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((r={},r["weui-icon-"+n]=true,r));var i={"font-size":o+"px",color:t};return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:a,style:i})};return r}();

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_image_core", function() { return Image; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var indexCss='img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;font-size:0;width:320px;height:240px}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{width:100%;position:absolute;bottom:0}.taro-img__mode-left{height:100%}.taro-img__mode-right{position:absolute;height:100%;right:0}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}';__webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, 128, 7));var Image=function(){function t(t){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,t);this.onLoad=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"load",7);this.onError=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"error",7);this.mode="scaleToFill";this.lazyLoad=false;this.nativeProps={};this.aspectFillMode="width"}t.prototype.componentDidLoad=function(){var t=this;if(!this.lazyLoad)return;var i=new IntersectionObserver((function(o){if(o[o.length-1].isIntersecting){i.unobserve(t.imgRef);t.imgRef.src=t.src}}),{rootMargin:"300px 0px"});i.observe(this.imgRef)};t.prototype.imageOnLoad=function(){var t=this.imgRef,i=t.width,o=t.height,e=t.naturalWidth,r=t.naturalHeight;this.onLoad.emit({width:i,height:o});this.aspectFillMode=e>r?"width":"height"};t.prototype.imageOnError=function(){this.onError.emit()};t.prototype.render=function(){var t;var i=this;var o=this,e=o.src,r=o.mode,a=o.lazyLoad,s=o.aspectFillMode,n=o.imageOnLoad,m=o.imageOnError,g=o.nativeProps;var d=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])({"taro-img__widthfix":r==="widthFix"});var l=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("taro-img__mode-"+r.toLowerCase().replace(/\s/g,""),(t={},t["taro-img__mode-aspectfill--"+s]=r==="aspectFill",t));return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:d},a?Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("img",Object.assign({ref:function(t){return i.imgRef=t},class:l,onLoad:n.bind(this),onError:m.bind(this)},g)):Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("img",Object.assign({ref:function(t){return i.imgRef=t},class:l,src:e,onLoad:n.bind(this),onError:m.bind(this)},g)))};return t}();Image.style=indexCss;

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_input_core", function() { return Input; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss="taro-input-core{display:block}input{display:block;height:1.4rem;text-align:inherit;text-overflow:clip;overflow:hidden;white-space:nowrap}";function getTrueType(e,t,n){if(t==="search")e="search";if(n)e="password";if(typeof e==="undefined"){return"text"}if(!e){throw new Error("unexpected type")}if(e==="digit")e="number";return e}function fixControlledValue(e){return e!==null&&e!==void 0?e:""}var Input=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onInput=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"input",7);this.onFocus=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"focus",7);this.onBlur=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"blur",7);this.onConfirm=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"confirm",7);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.onKeyDown=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"keydown",7);this.isOnComposition=false;this.onInputExcuted=false;this.password=false;this.disabled=false;this.maxlength=140;this.autoFocus=false;this.confirmType="done";this.nativeProps={};this.handleInput=function(e){e.stopPropagation();var n=t,i=n.type,o=n.maxlength,a=n.confirmType,s=n.password;if(!t.isOnComposition&&!t.onInputExcuted){var r=e.target.value;var u=getTrueType(i,a,s);t.onInputExcuted=true;if(u==="number"&&r&&o<=r.length){r=r.substring(0,o);e.target.value=r}t._value=r;t.onInput.emit({value:r,cursor:r.length})}};this.handleFocus=function(e){t.onInputExcuted=false;t.onFocus.emit({value:e.target.value})};this.handleBlur=function(e){t.onBlur.emit({value:e.target.value})};this.handleChange=function(e){e.stopPropagation();t.onChange.emit({value:e.target.value})};this.handleKeyDown=function(e){var n=e.target.value;var i=e.keyCode||e.code;t.onInputExcuted=false;e.stopPropagation();t.onKeyDown.emit({value:n,cursor:n.length,keyCode:i});i===13&&t.onConfirm.emit({value:n})};this.handleComposition=function(e){if(!(e.target instanceof HTMLInputElement))return;if(e.type==="compositionend"){t.isOnComposition=false;t.onInput.emit({value:e.target.value})}else{t.isOnComposition=true}}}e.prototype.watchHandler=function(e,t){if(e!==t){this._value=e}};e.prototype.watchFocus=function(e,t){var n;if(!t&&e){(n=this.inputRef)===null||n===void 0?void 0:n.focus()}};e.prototype.componentWillLoad=function(){this._value=this.value};e.prototype.componentDidLoad=function(){var e=this;var t,n,i,o;if(this.type==="file"){this.fileListener=function(){e.onInput.emit()};(t=this.inputRef)===null||t===void 0?void 0:t.addEventListener("change",this.fileListener)}else{(n=this.inputRef)===null||n===void 0?void 0:n.addEventListener("compositionstart",this.handleComposition);(i=this.inputRef)===null||i===void 0?void 0:i.addEventListener("compositionend",this.handleComposition)}Object.defineProperty(this.el,"value",{get:function(){var t;return(t=e.inputRef)===null||t===void 0?void 0:t.value},set:function(t){e._value=t},configurable:true});this.autoFocus&&((o=this.inputRef)===null||o===void 0?void 0:o.focus())};e.prototype.disconnectedCallback=function(){var e;if(this.type==="file"){(e=this.inputRef)===null||e===void 0?void 0:e.removeEventListener("change",this.fileListener)}};e.prototype.render=function(){var e=this;var t=this,n=t._value,i=t.type,o=t.password,a=t.placeholder,s=t.disabled,r=t.maxlength,u=t.confirmType,l=t.name,p=t.nativeProps;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("input",Object.assign({ref:function(t){e.inputRef=t},class:"weui-input",value:fixControlledValue(n),type:getTrueType(i,u,o),placeholder:a,disabled:s,maxlength:r,name:l,onInput:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleKeyDown},p))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["watchHandler"],autoFocus:["watchFocus"]}},enumerable:false,configurable:true});return e}();Input.style=indexCss;

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_label_core", function() { return Label; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var Label=function(){function r(r){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r)}r.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("label",{htmlFor:this.for},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};return r}();

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_movable_area_core", function() { return MovableArea; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var MovableArea=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e)}e.prototype.componentDidLoad=function(){console.error("H5 暂不支持 MovableArea 组件！")};e.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return e}();

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_movable_view_core", function() { return MovableView; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var MovableView=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e)}e.prototype.componentDidLoad=function(){console.error("H5 暂不支持 MovableView 组件！")};e.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return e}();

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_navigator_core", function() { return Navigator; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var navigatorCss=".navigator-hover{background:#efefef}";var Taro=__webpack_require__(30);var Navigator=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onSuccess=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"cuccess",7);this.onFail=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"fail",7);this.onComplete=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"Complete",7);this.openType="navigate";this.isHover=false;this.delta=0}e.prototype.onClick=function(){var e=this,a=e.openType,t=e.onSuccess,r=e.onFail,s=e.onComplete;var i=Promise.resolve();switch(a){case"navigate":i=Taro.navigateTo({url:this.url});break;case"redirect":i=Taro.redirectTo({url:this.url});break;case"switchTab":i=Taro.switchTab({url:this.url});break;case"reLaunch":i=Taro.reLaunch({url:this.url});break;case"navigateBack":i=Taro.navigateBack({delta:this.delta});break;case"exit":i=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'));break}if(i){i.then((function(e){t.emit(e)})).catch((function(e){r.emit(e)})).finally((function(){s.emit()}))}};e.prototype.render=function(){var e;var a=this,t=a.isHover,r=a.hoverClass;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((e={},e[r]=t,e))})};return e}();Navigator.style=navigatorCss;

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(109);
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);







if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var _i = 0; _i < descs.length; _i++) {
      Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
    }

    return obj;
  };
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD',
  KWAI: 'KWAI'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof ks !== 'undefined' && ks.getSystemInfo) {
    _env = ENV_TYPE.KWAI;
    return ENV_TYPE.KWAI;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

var Chain = /*#__PURE__*/function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p.catch(function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default()({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    }).catch(function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (p !== undefined && typeof p.abort === 'function') res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url; // eslint-disable-next-line no-console

  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

function Behavior(options) {
  return options;
}
function getPreload(current) {
  return function (key, val) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(key) === 'object') {
      current.preloadData = key;
    } else if (key !== undefined && val !== undefined) {
      current.preloadData = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()({}, key, val);
    }
  };
}
function getInitPxTransform(taro) {
  return function (config) {
    var _config$designWidth = config.designWidth,
        designWidth = _config$designWidth === void 0 ? 750 : _config$designWidth,
        _config$deviceRatio = config.deviceRatio,
        deviceRatio = _config$deviceRatio === void 0 ? {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    } : _config$deviceRatio;
    taro.config = taro.config || {};
    taro.config.designWidth = designWidth;
    taro.config.deviceRatio = deviceRatio;
  };
}
function getPxTransform(taro) {
  return function (size) {
    var _ref = taro.config || {},
        _ref$designWidth = _ref.designWidth,
        designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
        _ref$deviceRatio = _ref.deviceRatio,
        deviceRatio = _ref$deviceRatio === void 0 ? {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2
    } : _ref$deviceRatio;

    if (!(designWidth in deviceRatio)) {
      throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
    }

    return parseInt(size, 10) * deviceRatio[designWidth] + 'rpx';
  };
}

/* eslint-disable camelcase */
var Taro = {
  Behavior: Behavior,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  Link: Link,
  interceptors: interceptors,
  Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["Current"],
  getCurrentInstance: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["getCurrentInstance"],
  options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["options"],
  nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["nextTick"],
  eventCenter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["eventCenter"],
  Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["Events"],
  useDidShow: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useDidShow"],
  useDidHide: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useDidHide"],
  usePullDownRefresh: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["usePullDownRefresh"],
  useReachBottom: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useReachBottom"],
  usePageScroll: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["usePageScroll"],
  useResize: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useResize"],
  useShareAppMessage: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useShareAppMessage"],
  useTabItemTap: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useTabItemTap"],
  useTitleClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useTitleClick"],
  useOptionMenuClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useOptionMenuClick"],
  usePullIntercept: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["usePullIntercept"],
  useShareTimeline: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useShareTimeline"],
  useAddToFavorites: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useAddToFavorites"],
  useReady: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useReady"],
  useRouter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["useRouter"],
  getInitPxTransform: getInitPxTransform
};
Taro.initPxTransform = getInitPxTransform(Taro);
Taro.preload = getPreload(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["Current"]);
Taro.pxTransform = getPxTransform(Taro);

/* harmony default export */ __webpack_exports__["default"] = (Taro);
//# sourceMappingURL=index.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 109 */,
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_open_data_core", function() { return OpenData; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var OpenData=function(){function t(t){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,t)}t.prototype.componentDidLoad=function(){console.error("H5 暂不支持 OpenData 组件！")};t.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return t}();

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_picker_core", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_picker_group", function() { return TaroPickerGroup; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var __spreadArray=undefined&&undefined.__spreadArray||function(e,t){for(var i=0,r=t.length,a=e.length;i<r;i++,a++)e[a]=t[i];return e};function getTimeRange(e,t){var i=[];for(var r=e;r<=t;r++){i.push(""+(r<10?"0":"")+r)}return i}var hoursRange=__spreadArray(__spreadArray(["20","21","22","23"],getTimeRange(0,23)),["00","01","02","03"]);var minutesRange=__spreadArray(__spreadArray(["56","57","58","59"],getTimeRange(0,59)),["00","01","02","03"]);function verifyValue(e,t){if(!isNaN(+e)&&e>=0&&e<t.length)return true;return false}function verifyTime(e){if(!/^\d{1,2}:\d{1,2}$/.test(e))return false;var t=e.split(":").map((function(e){return+e}));if(t[0]<0||t[0]>23)return false;if(t[1]<0||t[1]>59)return false;return true}function compareTime(e,t){var i=e.split(":").map((function(e){return+e}));var r=t.split(":").map((function(e){return+e}));if(i[0]<r[0])return true;if(i[0]===r[0]&&i[1]<=r[1])return true;return false}function verifyDate(e){if(!e)return false;var t=new Date(e.replace(/-/g,"/"));return isNaN(t.getMonth())?false:t}function getMaxDay(e,t){if(t===4||t===6||t===9||t===11)return 30;if(t===2){if(e%4===0&&e%100!==0||e%400===0)return 29;else return 28}return 31}function formatValue(e){var t;if(Array.isArray(e)){t=e.map((function(e){return String(e)}))}else{t=e}return t}function getDateRange(e,t){var i=[];for(var r=e;r<=t;r++){i.push(r)}return i}function getYearRange(e,t){return getDateRange(e,t)}function getMonthRange(e,t,i){var r=1;var a=12;if(e.getFullYear()===i){r=e.getMonth()+1}if(t.getFullYear()===i){a=t.getMonth()+1}return getDateRange(r,a)}function getDayRange(e,t,i,r){var a=1;var n=getMaxDay(i,r);if(e.getFullYear()===i&&e.getMonth()+1===r){a=e.getDate()}if(t.getFullYear()===i&&t.getMonth()+1===r){n=t.getDate()}return getDateRange(a,n)}var TOP=102;var LINE_HEIGHT=34;var MASK_HEIGHT=LINE_HEIGHT*7;var indexCss=".weui-picker,.weui-picker__hd{font-size:12px}";var Picker=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.onColumnChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"columnchange",7);this.onCancel=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"cancel",7);this.index=[];this.mode="selector";this.disabled=false;this.range=[];this.start="";this.end="";this.fields="day";this.name="";this.pickerValue=[];this.height=[];this.hidden=true;this.fadeOut=false;this.isWillLoadCalled=false;this.showPicker=function(){if(t.disabled)return;t.height=t.getHeightByIndex();t.hidden=false};this.getHeightByIndex=function(){var e=t.index.map((function(e){var i=0;if(t.mode==="time"){i=LINE_HEIGHT*4}return TOP-LINE_HEIGHT*e-i}));return e};this.hidePicker=function(){t.fadeOut=true;setTimeout((function(){t.hidden=true;t.fadeOut=false}),350)};this.handleChange=function(){t.hidePicker();t.index=t.height.map((function(e){return(TOP-e)/LINE_HEIGHT}));var e=t.index.length&&t.mode!=="selector"?t.index:t.index[0];if(t.mode==="time"){var i=[hoursRange.slice(),minutesRange.slice()];var r=t.index.map((function(e,t){return i[t][e]}));t.index=r.map((function(e){return parseInt(e)}));e=r.join(":")}if(t.mode==="date"){var a=t.pickerDate,n=a._start,o=a._end,u=a._updateValue;var s=u[0];var h=u[1];var l=getYearRange(n.getFullYear(),o.getFullYear());var c=getMonthRange(n,o,s);var d=getDayRange(n,o,s,h);var f=l[t.index[0]];var g=c[t.index[1]];var p=d[t.index[2]];if(t.fields==="year"){e=[f]}else if(t.fields==="month"){e=[f,g]}else{e=[f,g,p]}e=e.map((function(e){return e<10?"0"+e:e})).join("-")}t.pickerValue=e;t.onChange.emit({value:e})};this.handleCancel=function(){t.hidePicker();t.onCancel.emit()};this.updateHeight=function(e,i,r){if(r===void 0){r=false}var a=__spreadArray([],t.height);a[i]=e;t.height=a;if(r){var n=t,o=n.start,u=n.end;if(!verifyTime(o))o="00:00";if(!verifyTime(u))u="23:59";if(!compareTime(o,u))return;var s=[hoursRange.slice(),minutesRange.slice()];var h=t.height.map((function(e){return(TOP-e)/LINE_HEIGHT}));var l=h.map((function(e,t){return s[t][e]})).join(":");if(!compareTime(o,l)){var c=o.split(":").map((function(e){return TOP-LINE_HEIGHT*(+e+4)}));requestAnimationFrame((function(){return t.height=c}))}else if(!compareTime(l,u)){var d=u.split(":").map((function(e){return TOP-LINE_HEIGHT*(+e+4)}));requestAnimationFrame((function(){return t.height=d}))}}};this.handleColumnChange=function(e,i){t.onColumnChange.emit({column:Number(i),value:(TOP-e)/LINE_HEIGHT})};this.updateDay=function(e,i){var r=t.pickerDate,a=r._start,n=r._end,o=r._updateValue;o[i]=e;var u=o[0];var s=o[1];var h=o[2];if(i===0){var l=getMonthRange(a,n,u);var c=l[l.length-1];var d=l[0];if(s>c)o[1]=c;if(s<d)o[1]=d;var f=l.indexOf(o[1]);var g=TOP-LINE_HEIGHT*f;t.updateDay(o[1],1);t.updateHeight(g,"1")}else if(i===1){var p=getDayRange(a,n,u,s);var c=p[p.length-1];var d=p[0];if(h>c)o[2]=c;if(h<d)o[2]=d;var f=p.indexOf(o[2]);var g=TOP-LINE_HEIGHT*f;t.updateDay(o[2],2);t.updateHeight(g,"2")}};this.getSelector=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-picker-group",{range:t.range,rangeKey:t.rangeKey,height:t.height[0],updateHeight:t.updateHeight,columnId:"0"})};this.getMultiSelector=function(){return t.range.map((function(e,i){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-picker-group",{range:e,rangeKey:t.rangeKey,height:t.height[i],updateHeight:t.updateHeight,onColumnChange:t.handleColumnChange,columnId:String(i)})}))};this.getTimeSelector=function(){var e=hoursRange.slice();var i=minutesRange.slice();return[Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-picker-group",{mode:"time",range:e,height:t.height[0],updateHeight:t.updateHeight,columnId:"0"}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-picker-group",{mode:"time",range:i,height:t.height[1],updateHeight:t.updateHeight,columnId:"1"})]};this.getDateSelector=function(){var e=t,i=e.fields,r=e.height;var a=t.pickerDate,n=a._start,o=a._end,u=a._updateValue;var s=u[0];var l=u[1];var c=getYearRange(n.getFullYear(),o.getFullYear()).map((function(e){return e+"年"}));var d=getMonthRange(n,o,s).map((function(e){return(e<10?"0"+e:e)+"月"}));var f=getDayRange(n,o,s,l).map((function(e){return(e<10?"0"+e:e)+"日"}));var g=[Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-picker-group",{mode:"date",range:c,height:r[0],updateDay:t.updateDay,updateHeight:t.updateHeight,columnId:"0"})];if(i==="month"||i==="day"){g.push(Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-picker-group",{mode:"date",range:d,height:r[1],updateDay:t.updateDay,updateHeight:t.updateHeight,columnId:"1"}))}if(i==="day"){g.push(Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-picker-group",{mode:"date",range:f,height:r[2],updateDay:t.updateDay,updateHeight:t.updateHeight,columnId:"2"}))}return g}}e.prototype.componentWillLoad=function(){this.isWillLoadCalled=true;this.handleProps()};e.prototype.componentDidLoad=function(){var e=this;Object.defineProperty(this.el,"value",{get:function(){return e.pickerValue},set:function(t){return e.value=t},configurable:true});if(this.overlay){document.body.appendChild(this.overlay)}};e.prototype.disconnectedCallback=function(){var e;if(this.overlay){(e=this.overlay.parentNode)===null||e===void 0?void 0:e.removeChild(this.overlay)}};e.prototype.onPropsChange=function(){if(!this.isWillLoadCalled)return;this.handleProps()};e.prototype.handleProps=function(){var e=this;var t=this,i=t.mode,r=t.start,a=t.end;if(i==="selector"){var n=this.value;this.index=[verifyValue(n,this.range)?Math.floor(n):0]}else if(i==="multiSelector"){var o=this.value;this.index=[];this.range.forEach((function(t,i){var r=o===null||o===void 0?void 0:o[i];var a=verifyValue(r,t)?Math.floor(r):0;e.index.push(a)}))}else if(i==="time"){var n=this.value;if(!verifyTime(n)){console.warn("time picker value illegal");n="0:0"}var u=n.split(":").map((function(e){return+e}));this.index=u}else if(i==="date"){var n=this.value;var s=verifyDate(n)||new Date((new Date).setHours(0,0,0,0));var h=verifyDate(r)||new Date("1970/01/01");var l=verifyDate(a)||new Date("2999/01/01");if(s>=h&&s<=l){var c=s.getFullYear();var d=s.getMonth()+1;var f=s.getDate();var g=getYearRange(h.getFullYear(),l.getFullYear());var p=getMonthRange(h,l,c);var v=getDayRange(h,l,c,d);this.index=[g.indexOf(c),p.indexOf(d),v.indexOf(f)];if(!this.pickerDate||this.pickerDate._value.getTime()!==s.getTime()||this.pickerDate._start.getTime()!==h.getTime()||this.pickerDate._end.getTime()!==l.getTime()){this.pickerDate={_value:s,_start:h,_end:l,_updateValue:[c,d,f]}}}else{throw new Error("Date Interval Error")}}this.height=this.getHeightByIndex();this.pickerValue=this.value;if(i==="date"){var m=this.pickerValue;if(this.fields==="month"){this.pickerValue=m.split("-").slice(0,2).join("-")}else if(this.fields==="year"){this.pickerValue=m.split("-")[0]}}};e.prototype.render=function(){var e=this;var t=this,i=t.name,r=t.mode,a=t.fadeOut,n=t.hidden;var o;switch(r){case"multiSelector":o=this.getMultiSelector();break;case"time":o=this.getTimeSelector();break;case"date":o=this.getDateSelector();break;default:o=this.getSelector()}var u=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("weui-mask","weui-animate-fade-in",{"weui-animate-fade-out":a});var s=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("weui-picker","weui-animate-slide-up",{"weui-animate-slide-down":a});var l=n?{display:"none"}:{};return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null,Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{onClick:this.showPicker},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("input",{type:"hidden",name:i,value:formatValue(this.pickerValue)})),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__overlay",style:l,ref:function(t){e.overlay=t}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:u,onClick:this.handleCancel}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:s},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__hd"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__action",onClick:this.handleCancel},"取消"),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__action",onClick:this.handleChange},"确定")),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__bd"},o),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("input",{type:"hidden",name:i,value:formatValue(this.pickerValue)}))))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{mode:["onPropsChange"],value:["onPropsChange"],range:["onPropsChange"],start:["onPropsChange"],end:["onPropsChange"]}},enumerable:false,configurable:true});return e}();Picker.style=indexCss;var TaroPickerGroup=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.range=[]}e.prototype.getPosition=function(){var e=this.touchEnd?.3:0;var t="translate3d(0, "+this.height+"px, 0)";var i="transform "+e+"s";return{transform:t,"-webkit-transform":t,transition:i,"-webkit-transition":i}};e.prototype.formulaUnlimitedScroll=function(e,t,i){var r=this;var a=this,n=a.height,o=a.updateHeight,u=a.columnId;var s=i==="up"?1:-1;this.touchEnd=false;o(-e*s*LINE_HEIGHT+n,u);requestAnimationFrame((function(){r.touchEnd=true;var i=Math.round(t/-LINE_HEIGHT)+e*s;var a=TOP-LINE_HEIGHT*i;o(a,u,true)}))};e.prototype.handleMoveStart=function(e){this.startY=e;this.preY=e;this.hadMove=false};e.prototype.handleMoving=function(e){var t=e;var i=t-this.preY;this.preY=t;this.touchEnd=false;if(Math.abs(t-this.startY)>10)this.hadMove=true;var r=this.height+i;if(this.mode==="time"){if(this.columnId==="0"){if(r>TOP-LINE_HEIGHT*3){r=TOP-LINE_HEIGHT*27+i}if(r<TOP-LINE_HEIGHT*28){r=TOP-LINE_HEIGHT*4+i}}else if(this.columnId==="1"){if(r>TOP-LINE_HEIGHT*3){r=TOP-LINE_HEIGHT*63+i}if(r<TOP-LINE_HEIGHT*64){r=TOP-LINE_HEIGHT*4+i}}}this.updateHeight(r,this.columnId)};e.prototype.handleMoveEnd=function(e){var t=this,i=t.mode,r=t.range,a=t.height,n=t.updateHeight,o=t.onColumnChange,u=t.columnId;var s=0;var h=-LINE_HEIGHT*(r.length-1);var l=e;this.touchEnd=true;var c;if(!this.hadMove){var d=window.innerHeight;var f=d-MASK_HEIGHT/2;c=a-TOP-(l-f);if(i==="time"){if(u==="0"){if(c>-LINE_HEIGHT*2.5){return this.formulaUnlimitedScroll(24,c,"up")}if(c<-LINE_HEIGHT*28.5){return this.formulaUnlimitedScroll(24,c,"down")}}else if(u==="1"){if(c>-LINE_HEIGHT*2.5){return this.formulaUnlimitedScroll(60,c,"up")}if(c<-LINE_HEIGHT*64.5){return this.formulaUnlimitedScroll(60,c,"down")}}}}else{c=a-TOP}if(c>s)c=0;if(c<h)c=h;var g=Math.round(c/-LINE_HEIGHT);var p=TOP-LINE_HEIGHT*g;if(this.mode==="date"){if(this.columnId==="0"){this.updateDay(+this.range[g].replace(/[^0-9]/gi,""),0)}if(this.columnId==="1"){this.updateDay(+this.range[g].replace(/[^0-9]/gi,""),1)}if(this.columnId==="2"){this.updateDay(+this.range[g].replace(/[^0-9]/gi,""),2)}}n(p,u,i==="time");o&&o(p,u)};e.prototype.onMouseDown=function(e){this.isMove=true;this.handleMoveStart(e.clientY)};e.prototype.onMouseMove=function(e){e.preventDefault();if(!this.isMove)return;this.handleMoving(e.clientY)};e.prototype.onMouseMoveEnd=function(e){if(!this.isMove)return;this.isMove=false;this.handleMoveEnd(e.clientY)};e.prototype.onTouchStart=function(e){this.handleMoveStart(e.changedTouches[0].clientY)};e.prototype.onTouchMove=function(e){e.preventDefault();this.handleMoving(e.changedTouches[0].clientY)};e.prototype.onTouchEnd=function(e){this.handleMoveEnd(e.changedTouches[0].clientY)};e.prototype.render=function(){var e=this,t=e.range,i=e.rangeKey;var r=t.map((function(e){var t=i?e[i]:e;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__item"},t)}));return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"weui-picker__group"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__mask"}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__indicator"}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-picker__content",style:this.getPosition()},r))};return e}();

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_picker_view_column_core", function() { return PickerViewColumn; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var PickerViewColumn=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e)}e.prototype.componentDidLoad=function(){console.error("H5 暂不支持 PickerViewColumn 组件！")};e.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return e}();

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_picker_view_core", function() { return PickerView; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var PickerView=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e)}e.prototype.componentDidLoad=function(){console.error("H5 暂不支持 PickerView 组件！")};e.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null)};return e}();

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_progress_core", function() { return Index; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var Index=function(){function r(r){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r);this.percent=0;this.showInfo=false;this.borderRadius=0;this.fontSize=16;this.strokeWidth=6;this.activeColor="#09BB07";this.backgroundColor="#EBEBEB";this.active=false}r.prototype.render=function(){var r=this,s=r.percent,e=r.showInfo,o=r.borderRadius,t=r.fontSize,i=r.strokeWidth,n=r.activeColor,a=r.backgroundColor,d=r.active;var c=s>100?100:s<0?0:s;var u={height:i+"px",backgroundColor:a};var l=d?"width 1s ease-in-out":"none";var p={width:c+"%",transition:l,WebkitTransition:l,backgroundColor:n,borderRadius:o?o+"px":"0px"};return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"weui-progress"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-progress__bar",style:u},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-progress__inner-bar",style:p})),e&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-progress__opr",style:{"font-size":t+"px"}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("span",null,c,"%")))};return r}();

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_pull_to_refresh", function() { return PullToRefresh; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var indexCss=".rmc-pull-to-refresh-content{-webkit-transform-origin:left top 0px;transform-origin:left top 0px}.rmc-pull-to-refresh-content-wrapper{overflow:hidden}.rmc-pull-to-refresh-transition{-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s}@-webkit-keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}@keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}.rmc-pull-to-refresh-indicator{text-align:center;height:30px;line-height:10px}.rmc-pull-to-refresh-indicator>div{background-color:grey;width:6px;height:6px;border-radius:100%;margin:3px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block;-webkit-animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear;animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear}.rmc-pull-to-refresh-indicator>div:nth-child(0){-webkit-animation-delay:-0.1s !important;animation-delay:-0.1s !important}.rmc-pull-to-refresh-indicator>div:nth-child(1){-webkit-animation-delay:-0.2s !important;animation-delay:-0.2s !important}.rmc-pull-to-refresh-indicator>div:nth-child(2){-webkit-animation-delay:-0.3s !important;animation-delay:-0.3s !important}.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator{margin-top:-25px}";var Taro=__webpack_require__(30);function setTransform(e,t){e.transform=t;e.webkitTransform=t;e.MozTransform=t}var isWebView=typeof navigator!=="undefined"&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);var INDICATOR={activate:"release",deactivate:"pull",release:"loading",finish:"finish"};var supportsPassive=false;try{var opts=Object.defineProperty({},"passive",{get:function(){supportsPassive=true}});window.addEventListener("cancel",(function(){return{}}),opts)}catch(e){}var willPreventDefault=supportsPassive?{passive:false}:false;var PullToRefresh=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onRefresh=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"refresh",7);this.prefixCls="rmc-pull-to-refresh";this.distanceToRefresh=50;this.damping=100;this.indicator=INDICATOR;this.currSt="deactivate";this.dragOnEdge=false;this._ScreenY=0;this._startScreenY=0;this._lastScreenY=0;this._isMounted=false;this.triggerPullDownRefresh=function(e){if(!t.dragOnEdge&&t._isMounted){if(e){t._lastScreenY=t.distanceToRefresh+1;t.currSt="release";t.setContentStyle(t._lastScreenY)}else{t.currSt="finish";t.reset()}}};this.init=function(){var e=t.scrollContainer;t._to={touchstart:t.onTouchStart.bind(t,e),touchmove:t.onTouchMove.bind(t,e),touchend:t.onTouchEnd.bind(t,e),touchcancel:t.onTouchEnd.bind(t,e)};Object.keys(t._to).forEach((function(r){e.addEventListener(r,t._to[r],willPreventDefault)}))};this.destroy=function(){var e=t.scrollContainer;Object.keys(t._to).forEach((function(r){e.removeEventListener(r,t._to[r])}))};this.onTouchStart=function(e,r){t._ScreenY=t._startScreenY=r.touches[0].screenY;t._lastScreenY=t._lastScreenY||0};this.isEdge=function(e){var r=t.scrollContainer;if(r&&r===document.body){var n=document.scrollingElement?document.scrollingElement:document.body;return n.scrollTop<=0}return e.scrollTop<=0};this.damp=function(e){if(Math.abs(t._lastScreenY)>t.damping){return 0}var r=Math.abs(t._ScreenY-t._startScreenY)/window.screen.height;e*=(1-r)*.6;return e};this.onTouchMove=function(e,r){var n=r.touches[0].screenY;if(t._startScreenY>n){return}if(t.isEdge(e)){if(!t.dragOnEdge){t._ScreenY=t._startScreenY=r.touches[0].screenY;t.dragOnEdge=true}if(r.cancelable){r.preventDefault()}var i=Math.round(n-t._ScreenY);t._ScreenY=n;t._lastScreenY+=t.damp(i);t.setContentStyle(t._lastScreenY);if(Math.abs(t._lastScreenY)<t.distanceToRefresh){if(t.currSt!=="deactivate"){t.currSt="deactivate"}}else{if(t.currSt==="deactivate"){t.currSt="activate"}}if(isWebView&&r.changedTouches[0].clientY<0){t.onTouchEnd()}}};this.onTouchEnd=function(){if(t.dragOnEdge){t.dragOnEdge=false}if(t.currSt==="activate"){t.currSt="release";t.onRefresh.emit(t);t._lastScreenY=t.distanceToRefresh+1;t.setContentStyle(t._lastScreenY)}else if(t.currSt==="release"){t._lastScreenY=t.distanceToRefresh+1;t.setContentStyle(t._lastScreenY)}else{t.reset()}};this.reset=function(){t._lastScreenY=0;t.setContentStyle(0)};this.setContentStyle=function(e){if(t.contentRef){if(e){setTransform(t.contentRef.style,"translate3d(0px,"+e+"px,0)")}else{setTransform(t.contentRef.style,"")}}}}Object.defineProperty(e.prototype,"scrollContainer",{get:function(){return document.querySelector(".taro-tabbar__panel")||document.body},enumerable:false,configurable:true});e.prototype.statusChange=function(){if(this.currSt==="release"){var e=this.el.closest(".taro_page");if(e&&e.__page){e.__page.onPullDownRefresh()}}};e.prototype.disconnectedCallback=function(){this.destroy()};e.prototype.componentDidLoad=function(){var e=this;this.init();this._isMounted=true;Taro.eventCenter.on("__taroStartPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(true);r({errMsg:"startPullDownRefresh: ok"})}catch(e){n({errMsg:"startPullDownRefresh: fail"})}}));Taro.eventCenter.on("__taroStopPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(false);r({errMsg:"stopPullDownRefresh: ok"})}catch(e){n({errMsg:"stopPullDownRefresh: fail"})}}))};e.prototype.render=function(){var e=this;var t=function(t){var r=e,n=r.currSt,i=r.dragOnEdge,s=r.prefixCls;var o=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])(t,!i&&s+"-transition");var a=n==="activate"||n==="release";return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:s+"-content-wrapper"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:o,ref:function(t){e.contentRef=t}},a&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:s+"-indicator"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",null),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",null),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",null)),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null)))};if(this.scrollContainer){return t(this.prefixCls+"-content "+this.prefixCls+"-down")}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])(this.prefixCls,this.prefixCls+"-down")},t(this.prefixCls+"-content"))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{currSt:["statusChange"]}},enumerable:false,configurable:true});return e}();PullToRefresh.style=indexCss;

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_radio_core", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_radio_group_core", function() { return RadioGroup; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var Radio=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"radiochange",7);this.value="";this.checked=false;this.disabled=false;this.nativeProps={};this.isWillLoadCalled=false;this.handleClick=function(){if(t.disabled)return;if(!t.checked)t.checked=true}}e.prototype.watchChecked=function(e){if(!this.isWillLoadCalled)return;e&&this.onChange.emit({value:this.value})};e.prototype.watchId=function(e){if(!this.isWillLoadCalled)return;if(e)this.inputEl.setAttribute("id",e)};e.prototype.componentDidRender=function(){this.id&&this.el.removeAttribute("id")};e.prototype.componentWillLoad=function(){this.isWillLoadCalled=true};e.prototype.render=function(){var e=this;var t=this,i=t.checked,r=t.name,n=t.value,a=t.disabled,o=t.nativeProps;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{className:"weui-cells_checkbox",onClick:this.handleClick},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("input",Object.assign({ref:function(t){if(!t)return;e.inputEl=t;if(e.id)t.setAttribute("id",e.id)},type:"radio",name:r,value:n,class:"weui-check",checked:i,disabled:a,onChange:function(e){return e.stopPropagation()}},o)),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("i",{class:"weui-icon-checked"}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["watchChecked"],id:["watchId"]}},enumerable:false,configurable:true});return e}();var RadioGroup=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.uniqueName=Date.now().toString(36)}e.prototype.function=function(e){e.stopPropagation();if(e.target.tagName!=="TARO-RADIO-CORE")return;var t=e.target;if(t.checked){var i=this.el.querySelectorAll("taro-radio-core");i.forEach((function(e){if(e!==t){e.checked=false}}));this.value=e.detail.value;this.onChange.emit({value:this.value})}};e.prototype.componentDidLoad=function(){var e=this;var t=this.el.querySelectorAll("taro-radio-core");t.forEach((function(t){t.setAttribute("name",e.name||e.uniqueName)}));Object.defineProperty(this.el,"value",{get:function(){if(!e.value){var t=e.el.querySelectorAll("taro-radio-core");e.value=e.getValues(t)}return e.value},configurable:true})};e.prototype.getValues=function(e){var t="";Array.from(e).forEach((function(e){var i=e.querySelector("input");if(i===null||i===void 0?void 0:i.checked){t=i.value||""}}));return t};e.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"weui-cells_radiogroup"})};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return e}();

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_rich_text_core", function() { return RichText; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var RichText=function(){function r(r){var e=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,r);this.renderNode=function(r){if("type"in r&&r.type==="text"){var t=(r.text||"").replace(/&nbsp;/g," ");return t}else if("name"in r&&r.name){var n=r.name,i=r.attrs,a=r.children;var o={};var u=[];if(i&&typeof i==="object"){var f=function(r){var e=i[r];if(r==="style"&&typeof e==="string"){var t=e.split(";").map((function(r){return r.trim()})).filter((function(r){return r}));var n={};t.forEach((function(r){if(!r)return;var e=/(.+): *(.+)/g.exec(r);if(!e)return;var t=e[1],i=e[2];var a=t.replace(/-([a-z])/g,(function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}return r[1].toUpperCase()}));n[a]=i}));if(Object.keys(n).length){o.style=n}return"continue"}o[r]=e};for(var s in i){f(s)}}if(a&&a.length){u=a.map((function(r){return e.renderNode(r)}))}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(n,o,u)}return null}}r.prototype.render=function(){var r=this,e=r.nodes,t=r.renderNode;if(Array.isArray(e)){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],null,e.map((function(r){return t(r)})))}else{return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{innerHTML:e})}};return r}();

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_scroll_view_core", function() { return ScrollView; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var indexCss="taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}";function easeOutScroll(l,o,r){if(l===o||typeof l!=="number"){return}var e=o-l;var t=500;var s=Date.now();var i=o>=l;function c(l,o,r,e){return r*l/e+o}function n(){l=c(Date.now()-s,l,e,t);if(i&&l>=o||!i&&o>=l){r(o);return}r(l);requestAnimationFrame(n)}n()}function debounce(l,o){var r;return function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}clearTimeout(r);r=setTimeout((function(){l.apply(void 0,e)}),o)}}var ScrollView=function(){function l(l){var o=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,l);this.onScroll=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"scroll",7);this.onScrollToUpper=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"scrolltoupper",7);this.onScrollToLower=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"scrolltolower",7);this.scrollX=false;this.scrollY=false;this.upperThreshold=50;this.lowerThreshold=50;this.scrollWithAnimation=false;this.handleScroll=function(l){if(l instanceof CustomEvent)return;var r=o.el,e=r.scrollLeft,t=r.scrollTop,s=r.scrollHeight,i=r.scrollWidth;o._scrollLeft=e;o._scrollTop=t;o.uperAndLower();o.onScroll.emit({scrollLeft:e,scrollTop:t,scrollHeight:s,scrollWidth:i})};this.uperAndLower=debounce((function(){var l=o.el,r=l.offsetWidth,e=l.offsetHeight,t=l.scrollLeft,s=l.scrollTop,i=l.scrollHeight,c=l.scrollWidth;var n=Number(o.lowerThreshold);var a=Number(o.upperThreshold);if(!isNaN(n)&&(o.scrollY&&e+s+n>=i||o.scrollX&&r+t+n>=c)){o.onScrollToLower.emit({direction:o.scrollX?"right":o.scrollY?"bottom":""})}if(!isNaN(a)&&(o.scrollY&&s<=a||o.scrollX&&t<=a)){o.onScrollToUpper.emit({direction:o.scrollX?"left":o.scrollY?"top":""})}}),200)}l.prototype.watchScrollLeft=function(l){var o=this;var r=Number(l);if(this.scrollX&&!isNaN(r)&&r!==this._scrollLeft){if(this.scrollWithAnimation){easeOutScroll(this._scrollLeft,r,(function(l){return o.el.scrollLeft=l}))}else{this.el.scrollLeft=r}this._scrollLeft=r}};l.prototype.watchScrollTop=function(l){var o=this;var r=Number(l);if(this.scrollY&&!isNaN(r)&&r!==this._scrollTop){if(this.scrollWithAnimation){easeOutScroll(this._scrollTop,r,(function(l){return o.el.scrollTop=l}))}else{this.el.scrollTop=r}this._scrollTop=r}};l.prototype.watchScrollIntoView=function(l){var o;if(typeof l==="string"&&l){(o=document.querySelector("#"+l))===null||o===void 0?void 0:o.scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}};l.prototype.componentDidLoad=function(){var l=this;var o=this,r=o.scrollY,e=o.scrollX,t=o.scrollWithAnimation;var s=Number(this.mpScrollTop);var i=Number(this.mpScrollLeft);if(r&&!isNaN(s)){if(t){easeOutScroll(0,s,(function(o){return l.el.scrollTop=o}))}else{this.el.scrollTop=s}this._scrollTop=s}if(e&&!isNaN(i)){if(t){easeOutScroll(0,i,(function(o){return l.el.scrollLeft=o}))}else{this.el.scrollLeft=i}this._scrollLeft=i}};l.prototype.render=function(){var l=this,o=l.scrollX,r=l.scrollY;var e=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])({"taro-scroll-view__scroll-x":o,"taro-scroll-view__scroll-y":r});return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:e,onScroll:this.handleScroll},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};Object.defineProperty(l.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(l,"watchers",{get:function(){return{mpScrollLeft:["watchScrollLeft"],mpScrollTop:["watchScrollTop"],mpScrollIntoView:["watchScrollIntoView"]}},enumerable:false,configurable:true});return l}();ScrollView.style=indexCss;

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_slider_core", function() { return Slider; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var Slider=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.onChanging=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"changing",7);this.min=0;this.max=100;this.step=1;this.disabled=false;this.value=0;this.activeColor="#1aad19";this.backgroundColor="#e9e9e9";this.blockSize=28;this.blockColor="#ffffff";this.showValue=false;this.name="";this.totalWidth=0;this.touching=false;this.ogX=0;this.touchId=null;this.percent=0;this.isWillLoadCalled=false;this.handleTouchStart=function(e){if(t.touching||t.disabled)return;t.touching=true;t.touchId=e.targetTouches[0].identifier;t.totalWidth=t.sliderInsRef.clientWidth;t.ogX=e.targetTouches[0].pageX;t.ogPercent=t.percent};this.handleTouchMove=function(e){var i=t,a=i.disabled,n=i.touching,r=i.touchId,o=i.totalWidth,l=i.max,h=i.min,s=i.ogX,u=i.ogPercent;if(!n||a)return;if(e.targetTouches[0].identifier!==r)return;e.preventDefault();var c=e.targetTouches[0].pageX;var d=c-s;var f=d/o*100+u;f=Math.max(0,Math.min(f,100));var v=h+f*.01*(l-h);t.updateByStep(v);t.onChanging.emit({detail:e.detail,value:t.val})};this.handleTouchEnd=function(e){var i=t,a=i.disabled,n=i.touching;if(!n||a)return;if(t.percent!==t.ogPercent){t.onChange.emit({detail:e.detail,value:t.val})}t.touching=false;t.touchId=null;t.ogX=0;t.ogPercent=0}}e.prototype.function=function(e){if(!this.isWillLoadCalled)return;var t=this,i=t.max,a=t.min;if(e!==null&&e!==this.val){var n=Math.max(a,Math.min(e,i));this.updateByStep(n)}};e.prototype.componentDidLoad=function(){var e=this;Object.defineProperty(this.el,"value",{get:function(){return e.val},set:function(t){return e.value=t},configurable:true});this.handler.addEventListener("touchstart",this.handleTouchStart);this.handler.addEventListener("touchmove",this.handleTouchMove);this.handler.addEventListener("touchend",this.handleTouchEnd)};e.prototype.componentDidUpdate=function(){this.value=null};e.prototype.componentWillLoad=function(){this.isWillLoadCalled=true;var e=this,t=e.value,i=e.max,a=e.min;if(t===null)return;var n=Math.max(a,Math.min(t,i));this.updateByStep(n)};e.prototype.updateByStep=function(e){var t=this,i=t.max,a=t.min,n=t.step;var r=Math.floor((i-a)/n);for(var o=0;o<=r;o++){var l=a+n*o;var h=o===r?null:a+n*(o+1);if(e===l)break;if(!h&&e>l){e=l}if(h&&e>l&&e<h){if(e-l<n/2){e=l}else{e=h}break}}var s=(e-a)/(i-a)*100;this.val=e;this.percent=s};e.prototype.render=function(){var e=this;var t=this,i=t.showValue,a=t.backgroundColor,n=t.activeColor,r=t.blockColor,o=t.name,l=t.percent,s=t.val;var u=this.blockSize;var c={backgroundColor:a};var d=l>100?100:l;var f={width:d+"%",backgroundColor:n};if(u<12){u=12}if(u>28){u=28}var v={left:d+"%",width:u+"px",height:u+"px",backgroundColor:r,marginTop:"-"+Math.floor(u/2)+"px",marginLeft:"-"+Math.floor(u/2)+"px"};return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"weui-slider-box"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-slider"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-slider__inner",style:c,ref:function(t){return e.sliderInsRef=t}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{style:f,class:"weui-slider__track"}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-slider__handler",ref:function(t){if(t)e.handler=t},style:v}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("input",{type:"hidden",name:o,value:s}))),i&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"weui-slider-box__value"},s))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["function"]}},enumerable:false,configurable:true});return e}();

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_swiper_core", function() { return Swiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_swiper_item_core", function() { return SwiperItem; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
function isObject$1(e){return e!==null&&typeof e==="object"&&"constructor"in e&&e.constructor===Object}function extend$1(e,t){if(e===void 0){e={}}if(t===void 0){t={}}Object.keys(t).forEach((function(a){if(typeof e[a]==="undefined")e[a]=t[a];else if(isObject$1(t[a])&&isObject$1(e[a])&&Object.keys(t[a]).length>0){extend$1(e[a],t[a])}}))}var ssrDocument={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function getDocument(){var e=typeof document!=="undefined"?document:{};extend$1(e,ssrDocument);return e}var ssrWindow={document:ssrDocument,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function e(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){if(typeof setTimeout==="undefined"){e();return null}return setTimeout(e,0)},cancelAnimationFrame:function(e){if(typeof setTimeout==="undefined"){return}clearTimeout(e)}};function getWindow(){var e=typeof window!=="undefined"?window:{};extend$1(e,ssrWindow);return e}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;e.__proto__=t}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return _getPrototypeOf(e)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function e(t,a){t.__proto__=a;return t};return _setPrototypeOf(e,t)}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _construct(e,t,a){if(_isNativeReflectConstruct()){_construct=Reflect.construct}else{_construct=function e(t,a,r){var i=[null];i.push.apply(i,a);var s=Function.bind.apply(t,i);var n=new s;if(r)_setPrototypeOf(n,r.prototype);return n}}return _construct.apply(null,arguments)}function _isNativeFunction(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function _wrapNativeSuper(e){var t=typeof Map==="function"?new Map:undefined;_wrapNativeSuper=function e(a){if(a===null||!_isNativeFunction(a))return a;if(typeof a!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof t!=="undefined"){if(t.has(a))return t.get(a);t.set(a,r)}function r(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}r.prototype=Object.create(a.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(r,a)};return _wrapNativeSuper(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function makeReactive(e){var t=e.__proto__;Object.defineProperty(e,"__proto__",{get:function e(){return t},set:function e(a){t.__proto__=a}})}var Dom7=function(e){_inheritsLoose(t,e);function t(t){var a;a=e.call.apply(e,[this].concat(t))||this;makeReactive(_assertThisInitialized(a));return a}return t}(_wrapNativeSuper(Array));function arrayFlat(e){if(e===void 0){e=[]}var t=[];e.forEach((function(e){if(Array.isArray(e)){t.push.apply(t,arrayFlat(e))}else{t.push(e)}}));return t}function arrayFilter(e,t){return Array.prototype.filter.call(e,t)}function arrayUnique(e){var t=[];for(var a=0;a<e.length;a+=1){if(t.indexOf(e[a])===-1)t.push(e[a])}return t}function qsa(e,t){if(typeof e!=="string"){return[e]}var a=[];var r=t.querySelectorAll(e);for(var i=0;i<r.length;i+=1){a.push(r[i])}return a}function $(e,t){var a=getWindow();var r=getDocument();var i=[];if(!t&&e instanceof Dom7){return e}if(!e){return new Dom7(i)}if(typeof e==="string"){var s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){var n="div";if(s.indexOf("<li")===0)n="ul";if(s.indexOf("<tr")===0)n="tbody";if(s.indexOf("<td")===0||s.indexOf("<th")===0)n="tr";if(s.indexOf("<tbody")===0)n="table";if(s.indexOf("<option")===0)n="select";var o=r.createElement(n);o.innerHTML=s;for(var l=0;l<o.childNodes.length;l+=1){i.push(o.childNodes[l])}}else{i=qsa(e.trim(),t||r)}}else if(e.nodeType||e===a||e===r){i.push(e)}else if(Array.isArray(e)){if(e instanceof Dom7)return e;i=e}return new Dom7(arrayUnique(i))}$.fn=Dom7.prototype;function addClass(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++){t[a]=arguments[a]}var r=arrayFlat(t.map((function(e){return e.split(" ")})));this.forEach((function(e){var t;(t=e.classList).add.apply(t,r)}));return this}function removeClass(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++){t[a]=arguments[a]}var r=arrayFlat(t.map((function(e){return e.split(" ")})));this.forEach((function(e){var t;(t=e.classList).remove.apply(t,r)}));return this}function toggleClass(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++){t[a]=arguments[a]}var r=arrayFlat(t.map((function(e){return e.split(" ")})));this.forEach((function(e){r.forEach((function(t){e.classList.toggle(t)}))}))}function hasClass(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++){t[a]=arguments[a]}var r=arrayFlat(t.map((function(e){return e.split(" ")})));return arrayFilter(this,(function(e){return r.filter((function(t){return e.classList.contains(t)})).length>0})).length>0}function attr(e,t){if(arguments.length===1&&typeof e==="string"){if(this[0])return this[0].getAttribute(e);return undefined}for(var a=0;a<this.length;a+=1){if(arguments.length===2){this[a].setAttribute(e,t)}else{for(var r in e){this[a][r]=e[r];this[a].setAttribute(r,e[r])}}}return this}function removeAttr(e){for(var t=0;t<this.length;t+=1){this[t].removeAttribute(e)}return this}function transform(e){for(var t=0;t<this.length;t+=1){this[t].style.transform=e}return this}function transition$1(e){for(var t=0;t<this.length;t+=1){this[t].style.transitionDuration=typeof e!=="string"?e+"ms":e}return this}function on(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++){t[a]=arguments[a]}var r=t[0],i=t[1],s=t[2],n=t[3];if(typeof t[1]==="function"){r=t[0];s=t[1];n=t[2];i=undefined}if(!n)n=false;function o(e){var t=e.target;if(!t)return;var a=e.target.dom7EventData||[];if(a.indexOf(e)<0){a.unshift(e)}if($(t).is(i))s.apply(t,a);else{var r=$(t).parents();for(var n=0;n<r.length;n+=1){if($(r[n]).is(i))s.apply(r[n],a)}}}function l(e){var t=e&&e.target?e.target.dom7EventData||[]:[];if(t.indexOf(e)<0){t.unshift(e)}s.apply(this,t)}var d=r.split(" ");var p;for(var u=0;u<this.length;u+=1){var f=this[u];if(!i){for(p=0;p<d.length;p+=1){var c=d[p];if(!f.dom7Listeners)f.dom7Listeners={};if(!f.dom7Listeners[c])f.dom7Listeners[c]=[];f.dom7Listeners[c].push({listener:s,proxyListener:l});f.addEventListener(c,l,n)}}else{for(p=0;p<d.length;p+=1){var v=d[p];if(!f.dom7LiveListeners)f.dom7LiveListeners={};if(!f.dom7LiveListeners[v])f.dom7LiveListeners[v]=[];f.dom7LiveListeners[v].push({listener:s,proxyListener:o});f.addEventListener(v,o,n)}}}return this}function off(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++){t[a]=arguments[a]}var r=t[0],i=t[1],s=t[2],n=t[3];if(typeof t[1]==="function"){r=t[0];s=t[1];n=t[2];i=undefined}if(!n)n=false;var o=r.split(" ");for(var l=0;l<o.length;l+=1){var d=o[l];for(var p=0;p<this.length;p+=1){var u=this[p];var f=void 0;if(!i&&u.dom7Listeners){f=u.dom7Listeners[d]}else if(i&&u.dom7LiveListeners){f=u.dom7LiveListeners[d]}if(f&&f.length){for(var c=f.length-1;c>=0;c-=1){var v=f[c];if(s&&v.listener===s){u.removeEventListener(d,v.proxyListener,n);f.splice(c,1)}else if(s&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===s){u.removeEventListener(d,v.proxyListener,n);f.splice(c,1)}else if(!s){u.removeEventListener(d,v.proxyListener,n);f.splice(c,1)}}}}}return this}function trigger(){var e=getWindow();for(var t=arguments.length,a=new Array(t),r=0;r<t;r++){a[r]=arguments[r]}var i=a[0].split(" ");var s=a[1];for(var n=0;n<i.length;n+=1){var o=i[n];for(var l=0;l<this.length;l+=1){var d=this[l];if(e.CustomEvent){var p=new e.CustomEvent(o,{detail:s,bubbles:true,cancelable:true});d.dom7EventData=a.filter((function(e,t){return t>0}));d.dispatchEvent(p);d.dom7EventData=[];delete d.dom7EventData}}}return this}function transitionEnd$1(e){var t=this;function a(r){if(r.target!==this)return;e.call(this,r);t.off("transitionend",a)}if(e){t.on("transitionend",a)}return this}function outerWidth(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function outerHeight(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function offset(){if(this.length>0){var e=getWindow();var t=getDocument();var a=this[0];var r=a.getBoundingClientRect();var i=t.body;var s=a.clientTop||i.clientTop||0;var n=a.clientLeft||i.clientLeft||0;var o=a===e?e.scrollY:a.scrollTop;var l=a===e?e.scrollX:a.scrollLeft;return{top:r.top+o-s,left:r.left+l-n}}return null}function styles(){var e=getWindow();if(this[0])return e.getComputedStyle(this[0],null);return{}}function css(e,t){var a=getWindow();var r;if(arguments.length===1){if(typeof e==="string"){if(this[0])return a.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(r=0;r<this.length;r+=1){for(var i in e){this[r].style[i]=e[i]}}return this}}if(arguments.length===2&&typeof e==="string"){for(r=0;r<this.length;r+=1){this[r].style[e]=t}return this}return this}function each(e){if(!e)return this;this.forEach((function(t,a){e.apply(t,[t,a])}));return this}function filter(e){var t=arrayFilter(this,e);return $(t)}function html(e){if(typeof e==="undefined"){return this[0]?this[0].innerHTML:null}for(var t=0;t<this.length;t+=1){this[t].innerHTML=e}return this}function text(e){if(typeof e==="undefined"){return this[0]?this[0].textContent.trim():null}for(var t=0;t<this.length;t+=1){this[t].textContent=e}return this}function is(e){var t=getWindow();var a=getDocument();var r=this[0];var i;var s;if(!r||typeof e==="undefined")return false;if(typeof e==="string"){if(r.matches)return r.matches(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);i=$(e);for(s=0;s<i.length;s+=1){if(i[s]===r)return true}return false}if(e===a){return r===a}if(e===t){return r===t}if(e.nodeType||e instanceof Dom7){i=e.nodeType?[e]:e;for(s=0;s<i.length;s+=1){if(i[s]===r)return true}return false}return false}function index(){var e=this[0];var t;if(e){t=0;while((e=e.previousSibling)!==null){if(e.nodeType===1)t+=1}return t}return undefined}function eq(e){if(typeof e==="undefined")return this;var t=this.length;if(e>t-1){return $([])}if(e<0){var a=t+e;if(a<0)return $([]);return $([this[a]])}return $([this[e]])}function append(){var e;var t=getDocument();for(var a=0;a<arguments.length;a+=1){e=a<0||arguments.length<=a?undefined:arguments[a];for(var r=0;r<this.length;r+=1){if(typeof e==="string"){var i=t.createElement("div");i.innerHTML=e;while(i.firstChild){this[r].appendChild(i.firstChild)}}else if(e instanceof Dom7){for(var s=0;s<e.length;s+=1){this[r].appendChild(e[s])}}else{this[r].appendChild(e)}}}return this}function prepend(e){var t=getDocument();var a;var r;for(a=0;a<this.length;a+=1){if(typeof e==="string"){var i=t.createElement("div");i.innerHTML=e;for(r=i.childNodes.length-1;r>=0;r-=1){this[a].insertBefore(i.childNodes[r],this[a].childNodes[0])}}else if(e instanceof Dom7){for(r=0;r<e.length;r+=1){this[a].insertBefore(e[r],this[a].childNodes[0])}}else{this[a].insertBefore(e,this[a].childNodes[0])}}return this}function next(e){if(this.length>0){if(e){if(this[0].nextElementSibling&&$(this[0].nextElementSibling).is(e)){return $([this[0].nextElementSibling])}return $([])}if(this[0].nextElementSibling)return $([this[0].nextElementSibling]);return $([])}return $([])}function nextAll(e){var t=[];var a=this[0];if(!a)return $([]);while(a.nextElementSibling){var r=a.nextElementSibling;if(e){if($(r).is(e))t.push(r)}else t.push(r);a=r}return $(t)}function prev(e){if(this.length>0){var t=this[0];if(e){if(t.previousElementSibling&&$(t.previousElementSibling).is(e)){return $([t.previousElementSibling])}return $([])}if(t.previousElementSibling)return $([t.previousElementSibling]);return $([])}return $([])}function prevAll(e){var t=[];var a=this[0];if(!a)return $([]);while(a.previousElementSibling){var r=a.previousElementSibling;if(e){if($(r).is(e))t.push(r)}else t.push(r);a=r}return $(t)}function parent(e){var t=[];for(var a=0;a<this.length;a+=1){if(this[a].parentNode!==null){if(e){if($(this[a].parentNode).is(e))t.push(this[a].parentNode)}else{t.push(this[a].parentNode)}}}return $(t)}function parents(e){var t=[];for(var a=0;a<this.length;a+=1){var r=this[a].parentNode;while(r){if(e){if($(r).is(e))t.push(r)}else{t.push(r)}r=r.parentNode}}return $(t)}function closest(e){var t=this;if(typeof e==="undefined"){return $([])}if(!t.is(e)){t=t.parents(e).eq(0)}return t}function find(e){var t=[];for(var a=0;a<this.length;a+=1){var r=this[a].querySelectorAll(e);for(var i=0;i<r.length;i+=1){t.push(r[i])}}return $(t)}function children(e){var t=[];for(var a=0;a<this.length;a+=1){var r=this[a].children;for(var i=0;i<r.length;i+=1){if(!e||$(r[i]).is(e)){t.push(r[i])}}}return $(t)}function remove(){for(var e=0;e<this.length;e+=1){if(this[e].parentNode)this[e].parentNode.removeChild(this[e])}return this}var Methods={addClass:addClass,removeClass:removeClass,hasClass:hasClass,toggleClass:toggleClass,attr:attr,removeAttr:removeAttr,transform:transform,transition:transition$1,on:on,off:off,trigger:trigger,transitionEnd:transitionEnd$1,outerWidth:outerWidth,outerHeight:outerHeight,styles:styles,offset:offset,css:css,each:each,html:html,text:text,is:is,index:index,eq:eq,append:append,prepend:prepend,next:next,nextAll:nextAll,prev:prev,prevAll:prevAll,parent:parent,parents:parents,closest:closest,find:find,children:children,filter:filter,remove:remove};Object.keys(Methods).forEach((function(e){Object.defineProperty($.fn,e,{value:Methods[e],writable:true})}));function deleteProps(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function nextTick(e,t){if(t===void 0){t=0}return setTimeout(e,t)}function now(){return Date.now()}function getComputedStyle$1(e){var t=getWindow();var a;if(t.getComputedStyle){a=t.getComputedStyle(e,null)}if(!a&&e.currentStyle){a=e.currentStyle}if(!a){a=e.style}return a}function getTranslate(e,t){if(t===void 0){t="x"}var a=getWindow();var r;var i;var s;var n=getComputedStyle$1(e);if(a.WebKitCSSMatrix){i=n.transform||n.webkitTransform;if(i.split(",").length>6){i=i.split(", ").map((function(e){return e.replace(",",".")})).join(", ")}s=new a.WebKitCSSMatrix(i==="none"?"":i)}else{s=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,");r=s.toString().split(",")}if(t==="x"){if(a.WebKitCSSMatrix)i=s.m41;else if(r.length===16)i=parseFloat(r[12]);else i=parseFloat(r[4])}if(t==="y"){if(a.WebKitCSSMatrix)i=s.m42;else if(r.length===16)i=parseFloat(r[13]);else i=parseFloat(r[5])}return i||0}function isObject(e){return typeof e==="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function isNode(e){if(typeof window!=="undefined"){return e instanceof HTMLElement}return e&&(e.nodeType===1||e.nodeType===11)}function extend(){var e=Object(arguments.length<=0?undefined:arguments[0]);var t=["__proto__","constructor","prototype"];for(var a=1;a<arguments.length;a+=1){var r=a<0||arguments.length<=a?undefined:arguments[a];if(r!==undefined&&r!==null&&!isNode(r)){var i=Object.keys(Object(r)).filter((function(e){return t.indexOf(e)<0}));for(var s=0,n=i.length;s<n;s+=1){var o=i[s];var l=Object.getOwnPropertyDescriptor(r,o);if(l!==undefined&&l.enumerable){if(isObject(e[o])&&isObject(r[o])){if(r[o].__swiper__){e[o]=r[o]}else{extend(e[o],r[o])}}else if(!isObject(e[o])&&isObject(r[o])){e[o]={};if(r[o].__swiper__){e[o]=r[o]}else{extend(e[o],r[o])}}else{e[o]=r[o]}}}}}return e}function bindModuleMethods(e,t){Object.keys(t).forEach((function(a){if(isObject(t[a])){Object.keys(t[a]).forEach((function(r){if(typeof t[a][r]==="function"){t[a][r]=t[a][r].bind(e)}}))}e[a]=t[a]}))}function classesToSelector(e){if(e===void 0){e=""}return"."+e.trim().replace(/([\.:\/])/g,"\\$1").replace(/ /g,".")}function createElementIfNotDefined(e,t,a,r){var i=getDocument();if(a){Object.keys(r).forEach((function(a){if(!t[a]&&t.auto===true){var s=i.createElement("div");s.className=r[a];e.append(s);t[a]=s}}))}return t}var support;function calcSupport(){var e=getWindow();var t=getDocument();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:function t(){return"MutationObserver"in e||"WebkitMutationObserver"in e}(),passiveListener:function t(){var a=false;try{var r=Object.defineProperty({},"passive",{get:function e(){a=true}});e.addEventListener("testPassiveListener",null,r)}catch(e){}return a}(),gestures:function t(){return"ongesturestart"in e}()}}function getSupport(){if(!support){support=calcSupport()}return support}var device;function calcDevice(e){var t=e===void 0?{}:e,a=t.userAgent;var r=getSupport();var i=getWindow();var s=i.navigator.platform;var n=a||i.navigator.userAgent;var o={ios:false,android:false};var l=i.screen.width;var d=i.screen.height;var p=n.match(/(Android);?[\s\/]+([\d.]+)?/);var u=n.match(/(iPad).*OS\s([\d_]+)/);var f=n.match(/(iPod)(.*OS\s([\d_]+))?/);var c=!u&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);var v=s==="Win32";var h=s==="MacIntel";var m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];if(!u&&h&&r.touch&&m.indexOf(l+"x"+d)>=0){u=n.match(/(Version)\/([\d.]+)/);if(!u)u=[0,1,"13_0_0"];h=false}if(p&&!v){o.os="android";o.android=true}if(u||c||f){o.os="ios";o.ios=true}return o}function getDevice(e){if(e===void 0){e={}}if(!device){device=calcDevice(e)}return device}var browser;function calcBrowser(){var e=getWindow();function t(){var t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}return{isEdge:!!e.navigator.userAgent.match(/Edge/g),isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function getBrowser(){if(!browser){browser=calcBrowser()}return browser}var supportsResizeObserver=function e(){var t=getWindow();return typeof t.ResizeObserver!=="undefined"};var Resize={name:"resize",create:function e(){var t=this;extend(t,{resize:{observer:null,createObserver:function e(){if(!t||t.destroyed||!t.initialized)return;t.resize.observer=new ResizeObserver((function(e){var a=t.width,r=t.height;var i=a;var s=r;e.forEach((function(e){var a=e.contentBoxSize,r=e.contentRect,n=e.target;if(n&&n!==t.el)return;i=r?r.width:(a[0]||a).inlineSize;s=r?r.height:(a[0]||a).blockSize}));if(i!==a||s!==r){t.resize.resizeHandler()}}));t.resize.observer.observe(t.el)},removeObserver:function e(){if(t.resize.observer&&t.resize.observer.unobserve&&t.el){t.resize.observer.unobserve(t.el);t.resize.observer=null}},resizeHandler:function e(){if(!t||t.destroyed||!t.initialized)return;t.emit("beforeResize");t.emit("resize")},orientationChangeHandler:function e(){if(!t||t.destroyed||!t.initialized)return;t.emit("orientationchange")}}})},on:{init:function e(t){var a=getWindow();if(t.params.resizeObserver&&supportsResizeObserver()){t.resize.createObserver();return}a.addEventListener("resize",t.resize.resizeHandler);a.addEventListener("orientationchange",t.resize.orientationChangeHandler)},destroy:function e(t){var a=getWindow();t.resize.removeObserver();a.removeEventListener("resize",t.resize.resizeHandler);a.removeEventListener("orientationchange",t.resize.orientationChangeHandler)}}};function _extends$i(){_extends$i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$i.apply(this,arguments)}var Observer={attach:function e(t,a){if(a===void 0){a={}}var r=getWindow();var i=this;var s=r.MutationObserver||r.WebkitMutationObserver;var n=new s((function(e){if(e.length===1){i.emit("observerUpdate",e[0]);return}var t=function t(){i.emit("observerUpdate",e[0])};if(r.requestAnimationFrame){r.requestAnimationFrame(t)}else{r.setTimeout(t,0)}}));n.observe(t,{attributes:typeof a.attributes==="undefined"?true:a.attributes,childList:typeof a.childList==="undefined"?true:a.childList,characterData:typeof a.characterData==="undefined"?true:a.characterData});i.observer.observers.push(n)},init:function e(){var t=this;if(!t.support.observer||!t.params.observer)return;if(t.params.observeParents){var a=t.$el.parents();for(var r=0;r<a.length;r+=1){t.observer.attach(a[r])}}t.observer.attach(t.$el[0],{childList:t.params.observeSlideChildren});t.observer.attach(t.$wrapperEl[0],{attributes:false})},destroy:function e(){var t=this;t.observer.observers.forEach((function(e){e.disconnect()}));t.observer.observers=[]}};var Observer$1={name:"observer",params:{observer:false,observeParents:false,observeSlideChildren:false},create:function e(){var t=this;bindModuleMethods(t,{observer:_extends$i({},Observer,{observers:[]})})},on:{init:function e(t){t.observer.init()},destroy:function e(t){t.observer.destroy()}}};var modular={useParams:function e(t){var a=this;if(!a.modules)return;Object.keys(a.modules).forEach((function(e){var r=a.modules[e];if(r.params){extend(t,r.params)}}))},useModules:function e(t){if(t===void 0){t={}}var a=this;if(!a.modules)return;Object.keys(a.modules).forEach((function(e){var r=a.modules[e];var i=t[e]||{};if(r.on&&a.on){Object.keys(r.on).forEach((function(e){a.on(e,r.on[e])}))}if(r.create){r.create.bind(a)(i)}}))}};var eventsEmitter={on:function e(t,a,r){var i=this;if(typeof a!=="function")return i;var s=r?"unshift":"push";t.split(" ").forEach((function(e){if(!i.eventsListeners[e])i.eventsListeners[e]=[];i.eventsListeners[e][s](a)}));return i},once:function e(t,a,r){var i=this;if(typeof a!=="function")return i;function s(){i.off(t,s);if(s.__emitterProxy){delete s.__emitterProxy}for(var e=arguments.length,r=new Array(e),n=0;n<e;n++){r[n]=arguments[n]}a.apply(i,r)}s.__emitterProxy=a;return i.on(t,s,r)},onAny:function e(t,a){var r=this;if(typeof t!=="function")return r;var i=a?"unshift":"push";if(r.eventsAnyListeners.indexOf(t)<0){r.eventsAnyListeners[i](t)}return r},offAny:function e(t){var a=this;if(!a.eventsAnyListeners)return a;var r=a.eventsAnyListeners.indexOf(t);if(r>=0){a.eventsAnyListeners.splice(r,1)}return a},off:function e(t,a){var r=this;if(!r.eventsListeners)return r;t.split(" ").forEach((function(e){if(typeof a==="undefined"){r.eventsListeners[e]=[]}else if(r.eventsListeners[e]){r.eventsListeners[e].forEach((function(t,i){if(t===a||t.__emitterProxy&&t.__emitterProxy===a){r.eventsListeners[e].splice(i,1)}}))}}));return r},emit:function e(){var t=this;if(!t.eventsListeners)return t;var a;var r;var i;for(var s=arguments.length,n=new Array(s),o=0;o<s;o++){n[o]=arguments[o]}if(typeof n[0]==="string"||Array.isArray(n[0])){a=n[0];r=n.slice(1,n.length);i=t}else{a=n[0].events;r=n[0].data;i=n[0].context||t}r.unshift(i);var l=Array.isArray(a)?a:a.split(" ");l.forEach((function(e){if(t.eventsAnyListeners&&t.eventsAnyListeners.length){t.eventsAnyListeners.forEach((function(t){t.apply(i,[e].concat(r))}))}if(t.eventsListeners&&t.eventsListeners[e]){t.eventsListeners[e].forEach((function(e){e.apply(i,r)}))}}));return t}};function updateSize(){var e=this;var t;var a;var r=e.$el;if(typeof e.params.width!=="undefined"&&e.params.width!==null){t=e.params.width}else{t=r[0].clientWidth}if(typeof e.params.height!=="undefined"&&e.params.height!==null){a=e.params.height}else{a=r[0].clientHeight}if(t===0&&e.isHorizontal()||a===0&&e.isVertical()){return}t=t-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10);a=a-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10);if(Number.isNaN(t))t=0;if(Number.isNaN(a))a=0;extend(e,{width:t,height:a,size:e.isHorizontal()?t:a})}function updateSlides(){var e=this;function t(t){if(e.isHorizontal()){return t}return{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function a(e,a){return parseFloat(e.getPropertyValue(t(a))||0)}var r=e.params;var i=e.$wrapperEl,s=e.size,n=e.rtlTranslate,o=e.wrongRTL;var l=e.virtual&&r.virtual.enabled;var d=l?e.virtual.slides.length:e.slides.length;var p=i.children("."+e.params.slideClass);var u=l?e.virtual.slides.length:p.length;var f=[];var c=[];var v=[];var h=r.slidesOffsetBefore;if(typeof h==="function"){h=r.slidesOffsetBefore.call(e)}var m=r.slidesOffsetAfter;if(typeof m==="function"){m=r.slidesOffsetAfter.call(e)}var g=e.snapGrid.length;var w=e.slidesGrid.length;var b=r.spaceBetween;var y=-h;var x=0;var E=0;if(typeof s==="undefined"){return}if(typeof b==="string"&&b.indexOf("%")>=0){b=parseFloat(b.replace("%",""))/100*s}e.virtualSize=-b;if(n)p.css({marginLeft:"",marginTop:""});else p.css({marginRight:"",marginBottom:""});var C;if(r.slidesPerColumn>1){if(Math.floor(u/r.slidesPerColumn)===u/e.params.slidesPerColumn){C=u}else{C=Math.ceil(u/r.slidesPerColumn)*r.slidesPerColumn}if(r.slidesPerView!=="auto"&&r.slidesPerColumnFill==="row"){C=Math.max(C,r.slidesPerView*r.slidesPerColumn)}}var T;var S=r.slidesPerColumn;var A=C/S;var M=Math.floor(u/r.slidesPerColumn);for(var $=0;$<u;$+=1){T=0;var k=p.eq($);if(r.slidesPerColumn>1){var z=void 0;var P=void 0;var O=void 0;if(r.slidesPerColumnFill==="row"&&r.slidesPerGroup>1){var L=Math.floor($/(r.slidesPerGroup*r.slidesPerColumn));var I=$-r.slidesPerColumn*r.slidesPerGroup*L;var D=L===0?r.slidesPerGroup:Math.min(Math.ceil((u-L*S*r.slidesPerGroup)/S),r.slidesPerGroup);O=Math.floor(I/D);P=I-O*D+L*r.slidesPerGroup;z=P+O*C/S;k.css({"-webkit-box-ordinal-group":z,"-moz-box-ordinal-group":z,"-ms-flex-order":z,"-webkit-order":z,order:z})}else if(r.slidesPerColumnFill==="column"){P=Math.floor($/S);O=$-P*S;if(P>M||P===M&&O===S-1){O+=1;if(O>=S){O=0;P+=1}}}else{O=Math.floor($/A);P=$-O*A}k.css(t("margin-top"),O!==0?r.spaceBetween&&r.spaceBetween+"px":"")}if(k.css("display")==="none")continue;if(r.slidesPerView==="auto"){var B=getComputedStyle(k[0]);var N=k[0].style.transform;var _=k[0].style.webkitTransform;if(N){k[0].style.transform="none"}if(_){k[0].style.webkitTransform="none"}if(r.roundLengths){T=e.isHorizontal()?k.outerWidth(true):k.outerHeight(true)}else{var G=a(B,"width");var Y=a(B,"padding-left");var H=a(B,"padding-right");var W=a(B,"margin-left");var R=a(B,"margin-right");var j=B.getPropertyValue("box-sizing");if(j&&j==="border-box"){T=G+W+R}else{var F=k[0],X=F.clientWidth,V=F.offsetWidth;T=G+Y+H+W+R+(V-X)}}if(N){k[0].style.transform=N}if(_){k[0].style.webkitTransform=_}if(r.roundLengths)T=Math.floor(T)}else{T=(s-(r.slidesPerView-1)*b)/r.slidesPerView;if(r.roundLengths)T=Math.floor(T);if(p[$]){p[$].style[t("width")]=T+"px"}}if(p[$]){p[$].swiperSlideSize=T}v.push(T);if(r.centeredSlides){y=y+T/2+x/2+b;if(x===0&&$!==0)y=y-s/2-b;if($===0)y=y-s/2-b;if(Math.abs(y)<1/1e3)y=0;if(r.roundLengths)y=Math.floor(y);if(E%r.slidesPerGroup===0)f.push(y);c.push(y)}else{if(r.roundLengths)y=Math.floor(y);if((E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0)f.push(y);c.push(y);y=y+T+b}e.virtualSize+=T+b;x=T;E+=1}e.virtualSize=Math.max(e.virtualSize,s)+m;var q;if(n&&o&&(r.effect==="slide"||r.effect==="coverflow")){i.css({width:e.virtualSize+r.spaceBetween+"px"})}if(r.setWrapperSize){var U;i.css((U={},U[t("width")]=e.virtualSize+r.spaceBetween+"px",U))}if(r.slidesPerColumn>1){var K;e.virtualSize=(T+r.spaceBetween)*C;e.virtualSize=Math.ceil(e.virtualSize/r.slidesPerColumn)-r.spaceBetween;i.css((K={},K[t("width")]=e.virtualSize+r.spaceBetween+"px",K));if(r.centeredSlides){q=[];for(var Z=0;Z<f.length;Z+=1){var Q=f[Z];if(r.roundLengths)Q=Math.floor(Q);if(f[Z]<e.virtualSize+f[0])q.push(Q)}f=q}}if(!r.centeredSlides){q=[];for(var J=0;J<f.length;J+=1){var ee=f[J];if(r.roundLengths)ee=Math.floor(ee);if(f[J]<=e.virtualSize-s){q.push(ee)}}f=q;if(Math.floor(e.virtualSize-s)-Math.floor(f[f.length-1])>1){f.push(e.virtualSize-s)}}if(f.length===0)f=[0];if(r.spaceBetween!==0){var te;var ae=e.isHorizontal()&&n?"marginLeft":t("marginRight");p.filter((function(e,t){if(!r.cssMode)return true;if(t===p.length-1){return false}return true})).css((te={},te[ae]=b+"px",te))}if(r.centeredSlides&&r.centeredSlidesBounds){var re=0;v.forEach((function(e){re+=e+(r.spaceBetween?r.spaceBetween:0)}));re-=r.spaceBetween;var ie=re-s;f=f.map((function(e){if(e<0)return-h;if(e>ie)return ie+m;return e}))}if(r.centerInsufficientSlides){var se=0;v.forEach((function(e){se+=e+(r.spaceBetween?r.spaceBetween:0)}));se-=r.spaceBetween;if(se<s){var ne=(s-se)/2;f.forEach((function(e,t){f[t]=e-ne}));c.forEach((function(e,t){c[t]=e+ne}))}}extend(e,{slides:p,snapGrid:f,slidesGrid:c,slidesSizesGrid:v});if(u!==d){e.emit("slidesLengthChange")}if(f.length!==g){if(e.params.watchOverflow)e.checkOverflow();e.emit("snapGridLengthChange")}if(c.length!==w){e.emit("slidesGridLengthChange")}if(r.watchSlidesProgress||r.watchSlidesVisibility){e.updateSlidesOffset()}}function updateAutoHeight(e){var t=this;var a=[];var r=t.virtual&&t.params.virtual.enabled;var i=0;var s;if(typeof e==="number"){t.setTransition(e)}else if(e===true){t.setTransition(t.params.speed)}var n=function e(a){if(r){return t.slides.filter((function(e){return parseInt(e.getAttribute("data-swiper-slide-index"),10)===a}))[0]}return t.slides.eq(a)[0]};if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1){if(t.params.centeredSlides){t.visibleSlides.each((function(e){a.push(e)}))}else{for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){var o=t.activeIndex+s;if(o>t.slides.length&&!r)break;a.push(n(o))}}}else{a.push(n(t.activeIndex))}for(s=0;s<a.length;s+=1){if(typeof a[s]!=="undefined"){var l=a[s].offsetHeight;i=l>i?l:i}}if(i)t.$wrapperEl.css("height",i+"px")}function updateSlidesOffset(){var e=this;var t=e.slides;for(var a=0;a<t.length;a+=1){t[a].swiperSlideOffset=e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop}}function updateSlidesProgress(e){if(e===void 0){e=this&&this.translate||0}var t=this;var a=t.params;var r=t.slides,i=t.rtlTranslate;if(r.length===0)return;if(typeof r[0].swiperSlideOffset==="undefined")t.updateSlidesOffset();var s=-e;if(i)s=e;r.removeClass(a.slideVisibleClass);t.visibleSlidesIndexes=[];t.visibleSlides=[];for(var n=0;n<r.length;n+=1){var o=r[n];var l=(s+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility||a.centeredSlides&&a.autoHeight){var d=-(s-o.swiperSlideOffset);var p=d+t.slidesSizesGrid[n];var u=d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size;if(u){t.visibleSlides.push(o);t.visibleSlidesIndexes.push(n);r.eq(n).addClass(a.slideVisibleClass)}}o.progress=i?-l:l}t.visibleSlides=$(t.visibleSlides)}function updateProgress(e){var t=this;if(typeof e==="undefined"){var a=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*a||0}var r=t.params;var i=t.maxTranslate()-t.minTranslate();var s=t.progress,n=t.isBeginning,o=t.isEnd;var l=n;var d=o;if(i===0){s=0;n=true;o=true}else{s=(e-t.minTranslate())/i;n=s<=0;o=s>=1}extend(t,{progress:s,isBeginning:n,isEnd:o});if(r.watchSlidesProgress||r.watchSlidesVisibility||r.centeredSlides&&r.autoHeight)t.updateSlidesProgress(e);if(n&&!l){t.emit("reachBeginning toEdge")}if(o&&!d){t.emit("reachEnd toEdge")}if(l&&!n||d&&!o){t.emit("fromEdge")}t.emit("progress",s)}function updateSlidesClasses(){var e=this;var t=e.slides,a=e.params,r=e.$wrapperEl,i=e.activeIndex,s=e.realIndex;var n=e.virtual&&a.virtual.enabled;t.removeClass(a.slideActiveClass+" "+a.slideNextClass+" "+a.slidePrevClass+" "+a.slideDuplicateActiveClass+" "+a.slideDuplicateNextClass+" "+a.slideDuplicatePrevClass);var o;if(n){o=e.$wrapperEl.find("."+a.slideClass+'[data-swiper-slide-index="'+i+'"]')}else{o=t.eq(i)}o.addClass(a.slideActiveClass);if(a.loop){if(o.hasClass(a.slideDuplicateClass)){r.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+s+'"]').addClass(a.slideDuplicateActiveClass)}else{r.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+s+'"]').addClass(a.slideDuplicateActiveClass)}}var l=o.nextAll("."+a.slideClass).eq(0).addClass(a.slideNextClass);if(a.loop&&l.length===0){l=t.eq(0);l.addClass(a.slideNextClass)}var d=o.prevAll("."+a.slideClass).eq(0).addClass(a.slidePrevClass);if(a.loop&&d.length===0){d=t.eq(-1);d.addClass(a.slidePrevClass)}if(a.loop){if(l.hasClass(a.slideDuplicateClass)){r.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass)}else{r.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicateNextClass)}if(d.hasClass(a.slideDuplicateClass)){r.children("."+a.slideClass+":not(."+a.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass)}else{r.children("."+a.slideClass+"."+a.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(a.slideDuplicatePrevClass)}}e.emitSlidesClasses()}function updateActiveIndex(e){var t=this;var a=t.rtlTranslate?t.translate:-t.translate;var r=t.slidesGrid,i=t.snapGrid,s=t.params,n=t.activeIndex,o=t.realIndex,l=t.snapIndex;var d=e;var p;if(typeof d==="undefined"){for(var u=0;u<r.length;u+=1){if(typeof r[u+1]!=="undefined"){if(a>=r[u]&&a<r[u+1]-(r[u+1]-r[u])/2){d=u}else if(a>=r[u]&&a<r[u+1]){d=u+1}}else if(a>=r[u]){d=u}}if(s.normalizeSlideIndex){if(d<0||typeof d==="undefined")d=0}}if(i.indexOf(a)>=0){p=i.indexOf(a)}else{var f=Math.min(s.slidesPerGroupSkip,d);p=f+Math.floor((d-f)/s.slidesPerGroup)}if(p>=i.length)p=i.length-1;if(d===n){if(p!==l){t.snapIndex=p;t.emit("snapIndexChange")}return}var c=parseInt(t.slides.eq(d).attr("data-swiper-slide-index")||d,10);extend(t,{snapIndex:p,realIndex:c,previousIndex:n,activeIndex:d});t.emit("activeIndexChange");t.emit("snapIndexChange");if(o!==c){t.emit("realIndexChange")}if(t.initialized||t.params.runCallbacksOnInit){t.emit("slideChange")}}function updateClickedSlide(e){var t=this;var a=t.params;var r=$(e.target).closest("."+a.slideClass)[0];var i=false;var s;if(r){for(var n=0;n<t.slides.length;n+=1){if(t.slides[n]===r){i=true;s=n;break}}}if(r&&i){t.clickedSlide=r;if(t.virtual&&t.params.virtual.enabled){t.clickedIndex=parseInt($(r).attr("data-swiper-slide-index"),10)}else{t.clickedIndex=s}}else{t.clickedSlide=undefined;t.clickedIndex=undefined;return}if(a.slideToClickedSlide&&t.clickedIndex!==undefined&&t.clickedIndex!==t.activeIndex){t.slideToClickedSlide()}}var update={updateSize:updateSize,updateSlides:updateSlides,updateAutoHeight:updateAutoHeight,updateSlidesOffset:updateSlidesOffset,updateSlidesProgress:updateSlidesProgress,updateProgress:updateProgress,updateSlidesClasses:updateSlidesClasses,updateActiveIndex:updateActiveIndex,updateClickedSlide:updateClickedSlide};function getSwiperTranslate(e){if(e===void 0){e=this.isHorizontal()?"x":"y"}var t=this;var a=t.params,r=t.rtlTranslate,i=t.translate,s=t.$wrapperEl;if(a.virtualTranslate){return r?-i:i}if(a.cssMode){return i}var n=getTranslate(s[0],e);if(r)n=-n;return n||0}function setTranslate(e,t){var a=this;var r=a.rtlTranslate,i=a.params,s=a.$wrapperEl,n=a.wrapperEl,o=a.progress;var l=0;var d=0;var p=0;if(a.isHorizontal()){l=r?-e:e}else{d=e}if(i.roundLengths){l=Math.floor(l);d=Math.floor(d)}if(i.cssMode){n[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-l:-d}else if(!i.virtualTranslate){s.transform("translate3d("+l+"px, "+d+"px, "+p+"px)")}a.previousTranslate=a.translate;a.translate=a.isHorizontal()?l:d;var u;var f=a.maxTranslate()-a.minTranslate();if(f===0){u=0}else{u=(e-a.minTranslate())/f}if(u!==o){a.updateProgress(e)}a.emit("setTranslate",a.translate,t)}function minTranslate(){return-this.snapGrid[0]}function maxTranslate(){return-this.snapGrid[this.snapGrid.length-1]}function translateTo(e,t,a,r,i){if(e===void 0){e=0}if(t===void 0){t=this.params.speed}if(a===void 0){a=true}if(r===void 0){r=true}var s=this;var n=s.params,o=s.wrapperEl;if(s.animating&&n.preventInteractionOnTransition){return false}var l=s.minTranslate();var d=s.maxTranslate();var p;if(r&&e>l)p=l;else if(r&&e<d)p=d;else p=e;s.updateProgress(p);if(n.cssMode){var u=s.isHorizontal();if(t===0){o[u?"scrollLeft":"scrollTop"]=-p}else{if(o.scrollTo){var f;o.scrollTo((f={},f[u?"left":"top"]=-p,f.behavior="smooth",f))}else{o[u?"scrollLeft":"scrollTop"]=-p}}return true}if(t===0){s.setTransition(0);s.setTranslate(p);if(a){s.emit("beforeTransitionStart",t,i);s.emit("transitionEnd")}}else{s.setTransition(t);s.setTranslate(p);if(a){s.emit("beforeTransitionStart",t,i);s.emit("transitionStart")}if(!s.animating){s.animating=true;if(!s.onTranslateToWrapperTransitionEnd){s.onTranslateToWrapperTransitionEnd=function e(t){if(!s||s.destroyed)return;if(t.target!==this)return;s.$wrapperEl[0].removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd);s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd);s.onTranslateToWrapperTransitionEnd=null;delete s.onTranslateToWrapperTransitionEnd;if(a){s.emit("transitionEnd")}}}s.$wrapperEl[0].addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd);s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd)}}return true}var translate={getTranslate:getSwiperTranslate,setTranslate:setTranslate,minTranslate:minTranslate,maxTranslate:maxTranslate,translateTo:translateTo};function setTransition(e,t){var a=this;if(!a.params.cssMode){a.$wrapperEl.transition(e)}a.emit("setTransition",e,t)}function transitionStart(e,t){if(e===void 0){e=true}var a=this;var r=a.activeIndex,i=a.params,s=a.previousIndex;if(i.cssMode)return;if(i.autoHeight){a.updateAutoHeight()}var n=t;if(!n){if(r>s)n="next";else if(r<s)n="prev";else n="reset"}a.emit("transitionStart");if(e&&r!==s){if(n==="reset"){a.emit("slideResetTransitionStart");return}a.emit("slideChangeTransitionStart");if(n==="next"){a.emit("slideNextTransitionStart")}else{a.emit("slidePrevTransitionStart")}}}function transitionEnd(e,t){if(e===void 0){e=true}var a=this;var r=a.activeIndex,i=a.previousIndex,s=a.params;a.animating=false;if(s.cssMode)return;a.setTransition(0);var n=t;if(!n){if(r>i)n="next";else if(r<i)n="prev";else n="reset"}a.emit("transitionEnd");if(e&&r!==i){if(n==="reset"){a.emit("slideResetTransitionEnd");return}a.emit("slideChangeTransitionEnd");if(n==="next"){a.emit("slideNextTransitionEnd")}else{a.emit("slidePrevTransitionEnd")}}}var transition={setTransition:setTransition,transitionStart:transitionStart,transitionEnd:transitionEnd};function slideTo(e,t,a,r,i){if(e===void 0){e=0}if(t===void 0){t=this.params.speed}if(a===void 0){a=true}if(typeof e!=="number"&&typeof e!=="string"){throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.")}if(typeof e==="string"){var s=parseInt(e,10);var n=isFinite(s);if(!n){throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.")}e=s}var o=this;var l=e;if(l<0)l=0;var d=o.params,p=o.snapGrid,u=o.slidesGrid,f=o.previousIndex,c=o.activeIndex,v=o.rtlTranslate,h=o.wrapperEl,m=o.enabled;if(o.animating&&d.preventInteractionOnTransition||!m&&!r&&!i){return false}var g=Math.min(o.params.slidesPerGroupSkip,l);var w=g+Math.floor((l-g)/o.params.slidesPerGroup);if(w>=p.length)w=p.length-1;if((c||d.initialSlide||0)===(f||0)&&a){o.emit("beforeSlideChangeStart")}var b=-p[w];o.updateProgress(b);if(d.normalizeSlideIndex){for(var y=0;y<u.length;y+=1){var x=-Math.floor(b*100);var E=Math.floor(u[y]*100);var C=Math.floor(u[y+1]*100);if(typeof u[y+1]!=="undefined"){if(x>=E&&x<C-(C-E)/2){l=y}else if(x>=E&&x<C){l=y+1}}else if(x>=E){l=y}}}if(o.initialized&&l!==c){if(!o.allowSlideNext&&b<o.translate&&b<o.minTranslate()){return false}if(!o.allowSlidePrev&&b>o.translate&&b>o.maxTranslate()){if((c||0)!==l)return false}}var T;if(l>c)T="next";else if(l<c)T="prev";else T="reset";if(v&&-b===o.translate||!v&&b===o.translate){o.updateActiveIndex(l);if(d.autoHeight){o.updateAutoHeight()}o.updateSlidesClasses();if(d.effect!=="slide"){o.setTranslate(b)}if(T!=="reset"){o.transitionStart(a,T);o.transitionEnd(a,T)}return false}if(d.cssMode){var S=o.isHorizontal();var A=-b;if(v){A=h.scrollWidth-h.offsetWidth-A}if(t===0){h[S?"scrollLeft":"scrollTop"]=A}else{if(h.scrollTo){var M;h.scrollTo((M={},M[S?"left":"top"]=A,M.behavior="smooth",M))}else{h[S?"scrollLeft":"scrollTop"]=A}}return true}if(t===0){o.setTransition(0);o.setTranslate(b);o.updateActiveIndex(l);o.updateSlidesClasses();o.emit("beforeTransitionStart",t,r);o.transitionStart(a,T);o.transitionEnd(a,T)}else{o.setTransition(t);o.setTranslate(b);o.updateActiveIndex(l);o.updateSlidesClasses();o.emit("beforeTransitionStart",t,r);o.transitionStart(a,T);if(!o.animating){o.animating=true;if(!o.onSlideToWrapperTransitionEnd){o.onSlideToWrapperTransitionEnd=function e(t){if(!o||o.destroyed)return;if(t.target!==this)return;o.$wrapperEl[0].removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd);o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd);o.onSlideToWrapperTransitionEnd=null;delete o.onSlideToWrapperTransitionEnd;o.transitionEnd(a,T)}}o.$wrapperEl[0].addEventListener("transitionend",o.onSlideToWrapperTransitionEnd);o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd)}}return true}function slideToLoop(e,t,a,r){if(e===void 0){e=0}if(t===void 0){t=this.params.speed}if(a===void 0){a=true}var i=this;var s=e;if(i.params.loop){s+=i.loopedSlides}return i.slideTo(s,t,a,r)}function slideNext(e,t,a){if(e===void 0){e=this.params.speed}if(t===void 0){t=true}var r=this;var i=r.params,s=r.animating,n=r.enabled;if(!n)return r;var o=r.activeIndex<i.slidesPerGroupSkip?1:i.slidesPerGroup;if(i.loop){if(s&&i.loopPreventsSlide)return false;r.loopFix();r._clientLeft=r.$wrapperEl[0].clientLeft}return r.slideTo(r.activeIndex+o,e,t,a)}function slidePrev(e,t,a){if(e===void 0){e=this.params.speed}if(t===void 0){t=true}var r=this;var i=r.params,s=r.animating,n=r.snapGrid,o=r.slidesGrid,l=r.rtlTranslate,d=r.enabled;if(!d)return r;if(i.loop){if(s&&i.loopPreventsSlide)return false;r.loopFix();r._clientLeft=r.$wrapperEl[0].clientLeft}var p=l?r.translate:-r.translate;function u(e){if(e<0)return-Math.floor(Math.abs(e));return Math.floor(e)}var f=u(p);var c=n.map((function(e){return u(e)}));var v=n[c.indexOf(f)-1];if(typeof v==="undefined"&&i.cssMode){n.forEach((function(e){if(!v&&f>=e)v=e}))}var h;if(typeof v!=="undefined"){h=o.indexOf(v);if(h<0)h=r.activeIndex-1}return r.slideTo(h,e,t,a)}function slideReset(e,t,a){if(e===void 0){e=this.params.speed}if(t===void 0){t=true}var r=this;return r.slideTo(r.activeIndex,e,t,a)}function slideToClosest(e,t,a,r){if(e===void 0){e=this.params.speed}if(t===void 0){t=true}if(r===void 0){r=.5}var i=this;var s=i.activeIndex;var n=Math.min(i.params.slidesPerGroupSkip,s);var o=n+Math.floor((s-n)/i.params.slidesPerGroup);var l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[o]){var d=i.snapGrid[o];var p=i.snapGrid[o+1];if(l-d>(p-d)*r){s+=i.params.slidesPerGroup}}else{var u=i.snapGrid[o-1];var f=i.snapGrid[o];if(l-u<=(f-u)*r){s-=i.params.slidesPerGroup}}s=Math.max(s,0);s=Math.min(s,i.slidesGrid.length-1);return i.slideTo(s,e,t,a)}function slideToClickedSlide(){var e=this;var t=e.params,a=e.$wrapperEl;var r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;var i=e.clickedIndex;var s;if(t.loop){if(e.animating)return;s=parseInt($(e.clickedSlide).attr("data-swiper-slide-index"),10);if(t.centeredSlides){if(i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2){e.loopFix();i=a.children("."+t.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.'+t.slideDuplicateClass+")").eq(0).index();nextTick((function(){e.slideTo(i)}))}else{e.slideTo(i)}}else if(i>e.slides.length-r){e.loopFix();i=a.children("."+t.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.'+t.slideDuplicateClass+")").eq(0).index();nextTick((function(){e.slideTo(i)}))}else{e.slideTo(i)}}else{e.slideTo(i)}}var slide={slideTo:slideTo,slideToLoop:slideToLoop,slideNext:slideNext,slidePrev:slidePrev,slideReset:slideReset,slideToClosest:slideToClosest,slideToClickedSlide:slideToClickedSlide};function loopCreate(){var e=this;var t=getDocument();var a=e.params,r=e.$wrapperEl;r.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var i=r.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var s=a.slidesPerGroup-i.length%a.slidesPerGroup;if(s!==a.slidesPerGroup){for(var n=0;n<s;n+=1){var o=$(t.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);r.append(o)}i=r.children("."+a.slideClass)}}if(a.slidesPerView==="auto"&&!a.loopedSlides)a.loopedSlides=i.length;e.loopedSlides=Math.ceil(parseFloat(a.loopedSlides||a.slidesPerView,10));e.loopedSlides+=a.loopAdditionalSlides;if(e.loopedSlides>i.length){e.loopedSlides=i.length}var l=[];var d=[];i.each((function(t,a){var r=$(t);if(a<e.loopedSlides){d.push(t)}if(a<i.length&&a>=i.length-e.loopedSlides){l.push(t)}r.attr("data-swiper-slide-index",a)}));for(var p=0;p<d.length;p+=1){r.append($(d[p].cloneNode(true)).addClass(a.slideDuplicateClass))}for(var u=l.length-1;u>=0;u-=1){r.prepend($(l[u].cloneNode(true)).addClass(a.slideDuplicateClass))}}function loopFix(){var e=this;e.emit("beforeLoopFix");var t=e.activeIndex,a=e.slides,r=e.loopedSlides,i=e.allowSlidePrev,s=e.allowSlideNext,n=e.snapGrid,o=e.rtlTranslate;var l;e.allowSlidePrev=true;e.allowSlideNext=true;var d=-n[t];var p=d-e.getTranslate();if(t<r){l=a.length-r*3+t;l+=r;var u=e.slideTo(l,0,false,true);if(u&&p!==0){e.setTranslate((o?-e.translate:e.translate)-p)}}else if(t>=a.length-r){l=-a.length+t+r;l+=r;var f=e.slideTo(l,0,false,true);if(f&&p!==0){e.setTranslate((o?-e.translate:e.translate)-p)}}e.allowSlidePrev=i;e.allowSlideNext=s;e.emit("loopFix")}function loopDestroy(){var e=this;var t=e.$wrapperEl,a=e.params,r=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass+",."+a.slideClass+"."+a.slideBlankClass).remove();r.removeAttr("data-swiper-slide-index")}var loop={loopCreate:loopCreate,loopFix:loopFix,loopDestroy:loopDestroy};function setGrabCursor(e){var t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;var a=t.el;a.style.cursor="move";a.style.cursor=e?"-webkit-grabbing":"-webkit-grab";a.style.cursor=e?"-moz-grabbin":"-moz-grab";a.style.cursor=e?"grabbing":"grab"}function unsetGrabCursor(){var e=this;if(e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode){return}e.el.style.cursor=""}var grabCursor={setGrabCursor:setGrabCursor,unsetGrabCursor:unsetGrabCursor};function appendSlide(e){var t=this;var a=t.$wrapperEl,r=t.params;if(r.loop){t.loopDestroy()}if(typeof e==="object"&&"length"in e){for(var i=0;i<e.length;i+=1){if(e[i])a.append(e[i])}}else{a.append(e)}if(r.loop){t.loopCreate()}if(!(r.observer&&t.support.observer)){t.update()}}function prependSlide(e){var t=this;var a=t.params,r=t.$wrapperEl,i=t.activeIndex;if(a.loop){t.loopDestroy()}var s=i+1;if(typeof e==="object"&&"length"in e){for(var n=0;n<e.length;n+=1){if(e[n])r.prepend(e[n])}s=i+e.length}else{r.prepend(e)}if(a.loop){t.loopCreate()}if(!(a.observer&&t.support.observer)){t.update()}t.slideTo(s,0,false)}function addSlide(e,t){var a=this;var r=a.$wrapperEl,i=a.params,s=a.activeIndex;var n=s;if(i.loop){n-=a.loopedSlides;a.loopDestroy();a.slides=r.children("."+i.slideClass)}var o=a.slides.length;if(e<=0){a.prependSlide(t);return}if(e>=o){a.appendSlide(t);return}var l=n>e?n+1:n;var d=[];for(var p=o-1;p>=e;p-=1){var u=a.slides.eq(p);u.remove();d.unshift(u)}if(typeof t==="object"&&"length"in t){for(var f=0;f<t.length;f+=1){if(t[f])r.append(t[f])}l=n>e?n+t.length:n}else{r.append(t)}for(var c=0;c<d.length;c+=1){r.append(d[c])}if(i.loop){a.loopCreate()}if(!(i.observer&&a.support.observer)){a.update()}if(i.loop){a.slideTo(l+a.loopedSlides,0,false)}else{a.slideTo(l,0,false)}}function removeSlide(e){var t=this;var a=t.params,r=t.$wrapperEl,i=t.activeIndex;var s=i;if(a.loop){s-=t.loopedSlides;t.loopDestroy();t.slides=r.children("."+a.slideClass)}var n=s;var o;if(typeof e==="object"&&"length"in e){for(var l=0;l<e.length;l+=1){o=e[l];if(t.slides[o])t.slides.eq(o).remove();if(o<n)n-=1}n=Math.max(n,0)}else{o=e;if(t.slides[o])t.slides.eq(o).remove();if(o<n)n-=1;n=Math.max(n,0)}if(a.loop){t.loopCreate()}if(!(a.observer&&t.support.observer)){t.update()}if(a.loop){t.slideTo(n+t.loopedSlides,0,false)}else{t.slideTo(n,0,false)}}function removeAllSlides(){var e=this;var t=[];for(var a=0;a<e.slides.length;a+=1){t.push(a)}e.removeSlide(t)}var manipulation={appendSlide:appendSlide,prependSlide:prependSlide,addSlide:addSlide,removeSlide:removeSlide,removeAllSlides:removeAllSlides};function onTouchStart(e){var t=this;var a=getDocument();var r=getWindow();var i=t.touchEventsData;var s=t.params,n=t.touches,o=t.enabled;if(!o)return;if(t.animating&&s.preventInteractionOnTransition){return}var l=e;if(l.originalEvent)l=l.originalEvent;var d=$(l.target);if(s.touchEventsTarget==="wrapper"){if(!d.closest(t.wrapperEl).length)return}i.isTouchEvent=l.type==="touchstart";if(!i.isTouchEvent&&"which"in l&&l.which===3)return;if(!i.isTouchEvent&&"button"in l&&l.button>0)return;if(i.isTouched&&i.isMoved)return;var p=!!s.noSwipingClass&&s.noSwipingClass!=="";if(p&&l.target&&l.target.shadowRoot&&e.path&&e.path[0]){d=$(e.path[0])}if(s.noSwiping&&d.closest(s.noSwipingSelector?s.noSwipingSelector:"."+s.noSwipingClass)[0]){t.allowClick=true;return}if(s.swipeHandler){if(!d.closest(s.swipeHandler)[0])return}n.currentX=l.type==="touchstart"?l.targetTouches[0].pageX:l.pageX;n.currentY=l.type==="touchstart"?l.targetTouches[0].pageY:l.pageY;var u=n.currentX;var f=n.currentY;var c=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection;var v=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(c&&(u<=v||u>=r.innerWidth-v)){if(c==="prevent"){e.preventDefault()}else{return}}extend(i,{isTouched:true,isMoved:false,allowTouchCallbacks:true,isScrolling:undefined,startMoving:undefined});n.startX=u;n.startY=f;i.touchStartTime=now();t.allowClick=true;t.updateSize();t.swipeDirection=undefined;if(s.threshold>0)i.allowThresholdMove=false;if(l.type!=="touchstart"){var h=true;if(d.is(i.focusableElements))h=false;if(a.activeElement&&$(a.activeElement).is(i.focusableElements)&&a.activeElement!==d[0]){a.activeElement.blur()}var m=h&&t.allowTouchMove&&s.touchStartPreventDefault;if((s.touchStartForcePreventDefault||m)&&!d[0].isContentEditable){l.preventDefault()}}t.emit("touchStart",l)}function onTouchMove(e){var t=getDocument();var a=this;var r=a.touchEventsData;var i=a.params,s=a.touches,n=a.rtlTranslate,o=a.enabled;if(!o)return;var l=e;if(l.originalEvent)l=l.originalEvent;if(!r.isTouched){if(r.startMoving&&r.isScrolling){a.emit("touchMoveOpposite",l)}return}if(r.isTouchEvent&&l.type!=="touchmove")return;var d=l.type==="touchmove"&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]);var p=l.type==="touchmove"?d.pageX:l.pageX;var u=l.type==="touchmove"?d.pageY:l.pageY;if(l.preventedByNestedSwiper){s.startX=p;s.startY=u;return}if(!a.allowTouchMove){a.allowClick=false;if(r.isTouched){extend(s,{startX:p,startY:u,currentX:p,currentY:u});r.touchStartTime=now()}return}if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(a.isVertical()){if(u<s.startY&&a.translate<=a.maxTranslate()||u>s.startY&&a.translate>=a.minTranslate()){r.isTouched=false;r.isMoved=false;return}}else if(p<s.startX&&a.translate<=a.maxTranslate()||p>s.startX&&a.translate>=a.minTranslate()){return}}if(r.isTouchEvent&&t.activeElement){if(l.target===t.activeElement&&$(l.target).is(r.focusableElements)){r.isMoved=true;a.allowClick=false;return}}if(r.allowTouchCallbacks){a.emit("touchMove",l)}if(l.targetTouches&&l.targetTouches.length>1)return;s.currentX=p;s.currentY=u;var f=s.currentX-s.startX;var c=s.currentY-s.startY;if(a.params.threshold&&Math.sqrt(Math.pow(f,2)+Math.pow(c,2))<a.params.threshold)return;if(typeof r.isScrolling==="undefined"){var v;if(a.isHorizontal()&&s.currentY===s.startY||a.isVertical()&&s.currentX===s.startX){r.isScrolling=false}else{if(f*f+c*c>=25){v=Math.atan2(Math.abs(c),Math.abs(f))*180/Math.PI;r.isScrolling=a.isHorizontal()?v>i.touchAngle:90-v>i.touchAngle}}}if(r.isScrolling){a.emit("touchMoveOpposite",l)}if(typeof r.startMoving==="undefined"){if(s.currentX!==s.startX||s.currentY!==s.startY){r.startMoving=true}}if(r.isScrolling){r.isTouched=false;return}if(!r.startMoving){return}a.allowClick=false;if(!i.cssMode&&l.cancelable){l.preventDefault()}if(i.touchMoveStopPropagation&&!i.nested){l.stopPropagation()}if(!r.isMoved){if(i.loop){a.loopFix()}r.startTranslate=a.getTranslate();a.setTransition(0);if(a.animating){a.$wrapperEl.trigger("webkitTransitionEnd transitionend")}r.allowMomentumBounce=false;if(i.grabCursor&&(a.allowSlideNext===true||a.allowSlidePrev===true)){a.setGrabCursor(true)}a.emit("sliderFirstMove",l)}a.emit("sliderMove",l);r.isMoved=true;var h=a.isHorizontal()?f:c;s.diff=h;h*=i.touchRatio;if(n)h=-h;a.swipeDirection=h>0?"prev":"next";r.currentTranslate=h+r.startTranslate;var m=true;var g=i.resistanceRatio;if(i.touchReleaseOnEdges){g=0}if(h>0&&r.currentTranslate>a.minTranslate()){m=false;if(i.resistance)r.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+r.startTranslate+h,g)}else if(h<0&&r.currentTranslate<a.maxTranslate()){m=false;if(i.resistance)r.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-r.startTranslate-h,g)}if(m){l.preventedByNestedSwiper=true}if(!a.allowSlideNext&&a.swipeDirection==="next"&&r.currentTranslate<r.startTranslate){r.currentTranslate=r.startTranslate}if(!a.allowSlidePrev&&a.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate){r.currentTranslate=r.startTranslate}if(!a.allowSlidePrev&&!a.allowSlideNext){r.currentTranslate=r.startTranslate}if(i.threshold>0){if(Math.abs(h)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=true;s.startX=s.currentX;s.startY=s.currentY;r.currentTranslate=r.startTranslate;s.diff=a.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}}if(!i.followFinger||i.cssMode)return;if(i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility){a.updateActiveIndex();a.updateSlidesClasses()}if(i.freeMode){if(r.velocities.length===0){r.velocities.push({position:s[a.isHorizontal()?"startX":"startY"],time:r.touchStartTime})}r.velocities.push({position:s[a.isHorizontal()?"currentX":"currentY"],time:now()})}a.updateProgress(r.currentTranslate);a.setTranslate(r.currentTranslate)}function onTouchEnd(e){var t=this;var a=t.touchEventsData;var r=t.params,i=t.touches,s=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=t.enabled;if(!d)return;var p=e;if(p.originalEvent)p=p.originalEvent;if(a.allowTouchCallbacks){t.emit("touchEnd",p)}a.allowTouchCallbacks=false;if(!a.isTouched){if(a.isMoved&&r.grabCursor){t.setGrabCursor(false)}a.isMoved=false;a.startMoving=false;return}if(r.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===true||t.allowSlidePrev===true)){t.setGrabCursor(false)}var u=now();var f=u-a.touchStartTime;if(t.allowClick){t.updateClickedSlide(p);t.emit("tap click",p);if(f<300&&u-a.lastClickTime<300){t.emit("doubleTap doubleClick",p)}}a.lastClickTime=now();nextTick((function(){if(!t.destroyed)t.allowClick=true}));if(!a.isTouched||!a.isMoved||!t.swipeDirection||i.diff===0||a.currentTranslate===a.startTranslate){a.isTouched=false;a.isMoved=false;a.startMoving=false;return}a.isTouched=false;a.isMoved=false;a.startMoving=false;var c;if(r.followFinger){c=s?t.translate:-t.translate}else{c=-a.currentTranslate}if(r.cssMode){return}if(r.freeMode){if(c<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(c>-t.maxTranslate()){if(t.slides.length<l.length){t.slideTo(l.length-1)}else{t.slideTo(t.slides.length-1)}return}if(r.freeModeMomentum){if(a.velocities.length>1){var v=a.velocities.pop();var h=a.velocities.pop();var m=v.position-h.position;var g=v.time-h.time;t.velocity=m/g;t.velocity/=2;if(Math.abs(t.velocity)<r.freeModeMinimumVelocity){t.velocity=0}if(g>150||now()-v.time>300){t.velocity=0}}else{t.velocity=0}t.velocity*=r.freeModeMomentumVelocityRatio;a.velocities.length=0;var w=1e3*r.freeModeMomentumRatio;var b=t.velocity*w;var y=t.translate+b;if(s)y=-y;var x=false;var E;var C=Math.abs(t.velocity)*20*r.freeModeMomentumBounceRatio;var T;if(y<t.maxTranslate()){if(r.freeModeMomentumBounce){if(y+t.maxTranslate()<-C){y=t.maxTranslate()-C}E=t.maxTranslate();x=true;a.allowMomentumBounce=true}else{y=t.maxTranslate()}if(r.loop&&r.centeredSlides)T=true}else if(y>t.minTranslate()){if(r.freeModeMomentumBounce){if(y-t.minTranslate()>C){y=t.minTranslate()+C}E=t.minTranslate();x=true;a.allowMomentumBounce=true}else{y=t.minTranslate()}if(r.loop&&r.centeredSlides)T=true}else if(r.freeModeSticky){var S;for(var A=0;A<l.length;A+=1){if(l[A]>-y){S=A;break}}if(Math.abs(l[S]-y)<Math.abs(l[S-1]-y)||t.swipeDirection==="next"){y=l[S]}else{y=l[S-1]}y=-y}if(T){t.once("transitionEnd",(function(){t.loopFix()}))}if(t.velocity!==0){if(s){w=Math.abs((-y-t.translate)/t.velocity)}else{w=Math.abs((y-t.translate)/t.velocity)}if(r.freeModeSticky){var M=Math.abs((s?-y:y)-t.translate);var $=t.slidesSizesGrid[t.activeIndex];if(M<$){w=r.speed}else if(M<2*$){w=r.speed*1.5}else{w=r.speed*2.5}}}else if(r.freeModeSticky){t.slideToClosest();return}if(r.freeModeMomentumBounce&&x){t.updateProgress(E);t.setTransition(w);t.setTranslate(y);t.transitionStart(true,t.swipeDirection);t.animating=true;n.transitionEnd((function(){if(!t||t.destroyed||!a.allowMomentumBounce)return;t.emit("momentumBounce");t.setTransition(r.speed);setTimeout((function(){t.setTranslate(E);n.transitionEnd((function(){if(!t||t.destroyed)return;t.transitionEnd()}))}),0)}))}else if(t.velocity){t.updateProgress(y);t.setTransition(w);t.setTranslate(y);t.transitionStart(true,t.swipeDirection);if(!t.animating){t.animating=true;n.transitionEnd((function(){if(!t||t.destroyed)return;t.transitionEnd()}))}}else{t.emit("_freeModeNoMomentumRelease");t.updateProgress(y)}t.updateActiveIndex();t.updateSlidesClasses()}else if(r.freeModeSticky){t.slideToClosest();return}else if(r.freeMode){t.emit("_freeModeNoMomentumRelease")}if(!r.freeModeMomentum||f>=r.longSwipesMs){t.updateProgress();t.updateActiveIndex();t.updateSlidesClasses()}return}var k=0;var z=t.slidesSizesGrid[0];for(var P=0;P<o.length;P+=P<r.slidesPerGroupSkip?1:r.slidesPerGroup){var O=P<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(typeof o[P+O]!=="undefined"){if(c>=o[P]&&c<o[P+O]){k=P;z=o[P+O]-o[P]}}else if(c>=o[P]){k=P;z=o[o.length-1]-o[o.length-2]}}var L=(c-o[k])/z;var I=k<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(f>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}if(t.swipeDirection==="next"){if(L>=r.longSwipesRatio)t.slideTo(k+I);else t.slideTo(k)}if(t.swipeDirection==="prev"){if(L>1-r.longSwipesRatio)t.slideTo(k+I);else t.slideTo(k)}}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}var D=t.navigation&&(p.target===t.navigation.nextEl||p.target===t.navigation.prevEl);if(!D){if(t.swipeDirection==="next"){t.slideTo(k+I)}if(t.swipeDirection==="prev"){t.slideTo(k)}}else if(p.target===t.navigation.nextEl){t.slideTo(k+I)}else{t.slideTo(k)}}}function onResize(){var e=this;var t=e.params,a=e.el;if(a&&a.offsetWidth===0)return;if(t.breakpoints){e.setBreakpoint()}var r=e.allowSlideNext,i=e.allowSlidePrev,s=e.snapGrid;e.allowSlideNext=true;e.allowSlidePrev=true;e.updateSize();e.updateSlides();e.updateSlidesClasses();if((t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides){e.slideTo(e.slides.length-1,0,false,true)}else{e.slideTo(e.activeIndex,0,false,true)}if(e.autoplay&&e.autoplay.running&&e.autoplay.paused){e.autoplay.run()}e.allowSlidePrev=i;e.allowSlideNext=r;if(e.params.watchOverflow&&s!==e.snapGrid){e.checkOverflow()}}function onClick(e){var t=this;if(!t.enabled)return;if(!t.allowClick){if(t.params.preventClicks)e.preventDefault();if(t.params.preventClicksPropagation&&t.animating){e.stopPropagation();e.stopImmediatePropagation()}}}function onScroll(){var e=this;var t=e.wrapperEl,a=e.rtlTranslate,r=e.enabled;if(!r)return;e.previousTranslate=e.translate;if(e.isHorizontal()){if(a){e.translate=t.scrollWidth-t.offsetWidth-t.scrollLeft}else{e.translate=-t.scrollLeft}}else{e.translate=-t.scrollTop}if(e.translate===-0)e.translate=0;e.updateActiveIndex();e.updateSlidesClasses();var i;var s=e.maxTranslate()-e.minTranslate();if(s===0){i=0}else{i=(e.translate-e.minTranslate())/s}if(i!==e.progress){e.updateProgress(a?-e.translate:e.translate)}e.emit("setTranslate",e.translate,false)}var dummyEventAttached=false;function dummyEventListener(){}function attachEvents(){var e=this;var t=getDocument();var a=e.params,r=e.touchEvents,i=e.el,s=e.wrapperEl,n=e.device,o=e.support;e.onTouchStart=onTouchStart.bind(e);e.onTouchMove=onTouchMove.bind(e);e.onTouchEnd=onTouchEnd.bind(e);if(a.cssMode){e.onScroll=onScroll.bind(e)}e.onClick=onClick.bind(e);var l=!!a.nested;if(!o.touch&&o.pointerEvents){i.addEventListener(r.start,e.onTouchStart,false);t.addEventListener(r.move,e.onTouchMove,l);t.addEventListener(r.end,e.onTouchEnd,false)}else{if(o.touch){var d=r.start==="touchstart"&&o.passiveListener&&a.passiveListeners?{passive:true,capture:false}:false;i.addEventListener(r.start,e.onTouchStart,d);i.addEventListener(r.move,e.onTouchMove,o.passiveListener?{passive:false,capture:l}:l);i.addEventListener(r.end,e.onTouchEnd,d);if(r.cancel){i.addEventListener(r.cancel,e.onTouchEnd,d)}if(!dummyEventAttached){t.addEventListener("touchstart",dummyEventListener);dummyEventAttached=true}}if(a.simulateTouch&&!n.ios&&!n.android||a.simulateTouch&&!o.touch&&n.ios){i.addEventListener("mousedown",e.onTouchStart,false);t.addEventListener("mousemove",e.onTouchMove,l);t.addEventListener("mouseup",e.onTouchEnd,false)}}if(a.preventClicks||a.preventClicksPropagation){i.addEventListener("click",e.onClick,true)}if(a.cssMode){s.addEventListener("scroll",e.onScroll)}if(a.updateOnWindowResize){e.on(n.ios||n.android?"resize orientationchange observerUpdate":"resize observerUpdate",onResize,true)}else{e.on("observerUpdate",onResize,true)}}function detachEvents(){var e=this;var t=getDocument();var a=e.params,r=e.touchEvents,i=e.el,s=e.wrapperEl,n=e.device,o=e.support;var l=!!a.nested;if(!o.touch&&o.pointerEvents){i.removeEventListener(r.start,e.onTouchStart,false);t.removeEventListener(r.move,e.onTouchMove,l);t.removeEventListener(r.end,e.onTouchEnd,false)}else{if(o.touch){var d=r.start==="onTouchStart"&&o.passiveListener&&a.passiveListeners?{passive:true,capture:false}:false;i.removeEventListener(r.start,e.onTouchStart,d);i.removeEventListener(r.move,e.onTouchMove,l);i.removeEventListener(r.end,e.onTouchEnd,d);if(r.cancel){i.removeEventListener(r.cancel,e.onTouchEnd,d)}}if(a.simulateTouch&&!n.ios&&!n.android||a.simulateTouch&&!o.touch&&n.ios){i.removeEventListener("mousedown",e.onTouchStart,false);t.removeEventListener("mousemove",e.onTouchMove,l);t.removeEventListener("mouseup",e.onTouchEnd,false)}}if(a.preventClicks||a.preventClicksPropagation){i.removeEventListener("click",e.onClick,true)}if(a.cssMode){s.removeEventListener("scroll",e.onScroll)}e.off(n.ios||n.android?"resize orientationchange observerUpdate":"resize observerUpdate",onResize)}var events={attachEvents:attachEvents,detachEvents:detachEvents};function setBreakpoint(){var e=this;var t=e.activeIndex,a=e.initialized,r=e.loopedSlides,i=r===void 0?0:r,s=e.params,n=e.$el;var o=s.breakpoints;if(!o||o&&Object.keys(o).length===0)return;var l=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;var d=l in o?o[l]:undefined;if(d){["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=d[e];if(typeof t==="undefined")return;if(e==="slidesPerView"&&(t==="AUTO"||t==="auto")){d[e]="auto"}else if(e==="slidesPerView"){d[e]=parseFloat(t)}else{d[e]=parseInt(t,10)}}))}var p=d||e.originalParams;var u=s.slidesPerColumn>1;var f=p.slidesPerColumn>1;var c=s.enabled;if(u&&!f){n.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column");e.emitContainerClasses()}else if(!u&&f){n.addClass(s.containerModifierClass+"multirow");if(p.slidesPerColumnFill==="column"){n.addClass(s.containerModifierClass+"multirow-column")}e.emitContainerClasses()}var v=p.direction&&p.direction!==s.direction;var h=s.loop&&(p.slidesPerView!==s.slidesPerView||v);if(v&&a){e.changeDirection()}extend(e.params,p);var m=e.params.enabled;extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev});if(c&&!m){e.disable()}else if(!c&&m){e.enable()}e.currentBreakpoint=l;e.emit("_beforeBreakpoint",p);if(h&&a){e.loopDestroy();e.loopCreate();e.updateSlides();e.slideTo(t-i+e.loopedSlides,0,false)}e.emit("breakpoint",p)}function getBreakpoint(e,t,a){if(t===void 0){t="window"}if(!e||t==="container"&&!a)return undefined;var r=false;var i=getWindow();var s=t==="window"?i.innerHeight:a.clientHeight;var n=Object.keys(e).map((function(e){if(typeof e==="string"&&e.indexOf("@")===0){var t=parseFloat(e.substr(1));var a=s*t;return{value:a,point:e}}return{value:e,point:e}}));n.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var o=0;o<n.length;o+=1){var l=n[o],d=l.point,p=l.value;if(t==="window"){if(i.matchMedia("(min-width: "+p+"px)").matches){r=d}}else if(p<=a.clientWidth){r=d}}return r||"max"}var breakpoints={setBreakpoint:setBreakpoint,getBreakpoint:getBreakpoint};function prepareClasses(e,t){var a=[];e.forEach((function(e){if(typeof e==="object"){Object.keys(e).forEach((function(r){if(e[r]){a.push(t+r)}}))}else if(typeof e==="string"){a.push(t+e)}}));return a}function addClasses(){var e=this;var t=e.classNames,a=e.params,r=e.rtl,i=e.$el,s=e.device,n=e.support;var o=prepareClasses(["initialized",a.direction,{"pointer-events":n.pointerEvents&&!n.touch},{"free-mode":a.freeMode},{autoheight:a.autoHeight},{rtl:r},{multirow:a.slidesPerColumn>1},{"multirow-column":a.slidesPerColumn>1&&a.slidesPerColumnFill==="column"},{android:s.android},{ios:s.ios},{"css-mode":a.cssMode}],a.containerModifierClass);t.push.apply(t,o);i.addClass([].concat(t).join(" "));e.emitContainerClasses()}function removeClasses(){var e=this;var t=e.$el,a=e.classNames;t.removeClass(a.join(" "));e.emitContainerClasses()}var classes={addClasses:addClasses,removeClasses:removeClasses};function loadImage(e,t,a,r,i,s){var n=getWindow();var o;function l(){if(s)s()}var d=$(e).parent("picture")[0];if(!d&&(!e.complete||!i)){if(t){o=new n.Image;o.onload=l;o.onerror=l;if(r){o.sizes=r}if(a){o.srcset=a}if(t){o.src=t}}else{l()}}else{l()}}function preloadImages(){var e=this;e.imagesToLoad=e.$el.find("img");function t(){if(typeof e==="undefined"||e===null||!e||e.destroyed)return;if(e.imagesLoaded!==undefined)e.imagesLoaded+=1;if(e.imagesLoaded===e.imagesToLoad.length){if(e.params.updateOnImagesReady)e.update();e.emit("imagesReady")}}for(var a=0;a<e.imagesToLoad.length;a+=1){var r=e.imagesToLoad[a];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),true,t)}}var images={loadImage:loadImage,preloadImages:preloadImages};function checkOverflow(){var e=this;var t=e.params;var a=e.isLocked;var r=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;if(t.slidesOffsetBefore&&t.slidesOffsetAfter&&r){e.isLocked=r<=e.size}else{e.isLocked=e.snapGrid.length===1}e.allowSlideNext=!e.isLocked;e.allowSlidePrev=!e.isLocked;if(a!==e.isLocked)e.emit(e.isLocked?"lock":"unlock");if(a&&a!==e.isLocked){e.isEnd=false;if(e.navigation)e.navigation.update()}}var checkOverflow$1={checkOverflow:checkOverflow};var defaults={init:true,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:false,updateOnWindowResize:true,resizeObserver:false,nested:false,createElements:false,enabled:true,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:false,userAgent:null,url:null,edgeSwipeDetection:false,edgeSwipeThreshold:20,freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:false,freeModeMinimumVelocity:.02,autoHeight:false,setWrapperSize:false,virtualTranslate:false,effect:"slide",breakpoints:undefined,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:false,centeredSlidesBounds:false,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:true,centerInsufficientSlides:false,watchOverflow:false,roundLengths:false,touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:.5,longSwipesMs:300,followFinger:true,allowTouchMove:true,threshold:0,touchMoveStopPropagation:false,touchStartPreventDefault:true,touchStartForcePreventDefault:false,touchReleaseOnEdges:false,uniqueNavElements:true,resistance:true,resistanceRatio:.85,watchSlidesProgress:false,watchSlidesVisibility:false,grabCursor:false,preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,preloadImages:true,updateOnImagesReady:true,loop:false,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:false,loopPreventsSlide:true,allowSlidePrev:true,allowSlideNext:true,swipeHandler:null,noSwiping:true,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:true,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:true,_emitClasses:false};function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){if(t)_defineProperties(e.prototype,t);if(a)_defineProperties(e,a);return e}var prototypes={modular:modular,eventsEmitter:eventsEmitter,update:update,translate:translate,transition:transition,slide:slide,loop:loop,grabCursor:grabCursor,manipulation:manipulation,events:events,breakpoints:breakpoints,checkOverflow:checkOverflow$1,classes:classes,images:images};var extendedDefaults={};var Swiper$1=function(){function e(){var t;var a;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++){i[s]=arguments[s]}if(i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"){a=i[0]}else{t=i[0];a=i[1]}if(!a)a={};a=extend({},a);if(t&&!a.el)a.el=t;if(a.el&&$(a.el).length>1){var n=[];$(a.el).each((function(t){var r=extend({},a,{el:t});n.push(new e(r))}));return n}var o=this;o.__swiper__=true;o.support=getSupport();o.device=getDevice({userAgent:a.userAgent});o.browser=getBrowser();o.eventsListeners={};o.eventsAnyListeners=[];if(typeof o.modules==="undefined"){o.modules={}}Object.keys(o.modules).forEach((function(e){var t=o.modules[e];if(t.params){var r=Object.keys(t.params)[0];var i=t.params[r];if(typeof i!=="object"||i===null)return;if(["navigation","pagination","scrollbar"].indexOf(r)>=0&&a[r]===true){a[r]={auto:true}}if(!(r in a&&"enabled"in i))return;if(a[r]===true){a[r]={enabled:true}}if(typeof a[r]==="object"&&!("enabled"in a[r])){a[r].enabled=true}if(!a[r])a[r]={enabled:false}}}));var l=extend({},defaults);o.useParams(l);o.params=extend({},l,extendedDefaults,a);o.originalParams=extend({},o.params);o.passedParams=extend({},a);if(o.params&&o.params.on){Object.keys(o.params.on).forEach((function(e){o.on(e,o.params.on[e])}))}if(o.params&&o.params.onAny){o.onAny(o.params.onAny)}o.$=$;extend(o,{enabled:o.params.enabled,el:t,classNames:[],slides:$(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function e(){return o.params.direction==="horizontal"},isVertical:function e(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:true,isEnd:false,translate:0,previousTranslate:0,progress:0,velocity:0,animating:false,allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEvents:function e(){var t=["touchstart","touchmove","touchend","touchcancel"];var a=["mousedown","mousemove","mouseup"];if(o.support.pointerEvents){a=["pointerdown","pointermove","pointerup"]}o.touchEventsTouch={start:t[0],move:t[1],end:t[2],cancel:t[3]};o.touchEventsDesktop={start:a[0],move:a[1],end:a[2]};return o.support.touch||!o.params.simulateTouch?o.touchEventsTouch:o.touchEventsDesktop}(),touchEventsData:{isTouched:undefined,isMoved:undefined,allowTouchCallbacks:undefined,touchStartTime:undefined,isScrolling:undefined,currentTranslate:undefined,startTranslate:undefined,allowThresholdMove:undefined,focusableElements:o.params.focusableElements,lastClickTime:now(),clickTimeout:undefined,velocities:[],allowMomentumBounce:undefined,isTouchEvent:undefined,startMoving:undefined},allowClick:true,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0});o.useModules();o.emit("_swiper");if(o.params.init){o.init()}return o}var t=e.prototype;t.enable=function e(){var t=this;if(t.enabled)return;t.enabled=true;if(t.params.grabCursor){t.setGrabCursor()}t.emit("enable")};t.disable=function e(){var t=this;if(!t.enabled)return;t.enabled=false;if(t.params.grabCursor){t.unsetGrabCursor()}t.emit("disable")};t.setProgress=function e(t,a){var r=this;t=Math.min(Math.max(t,0),1);var i=r.minTranslate();var s=r.maxTranslate();var n=(s-i)*t+i;r.translateTo(n,typeof a==="undefined"?0:a);r.updateActiveIndex();r.updateSlidesClasses()};t.emitContainerClasses=function e(){var t=this;if(!t.params._emitClasses||!t.el)return;var a=t.el.className.split(" ").filter((function(e){return e.indexOf("swiper-container")===0||e.indexOf(t.params.containerModifierClass)===0}));t.emit("_containerClasses",a.join(" "))};t.getSlideClasses=function e(t){var a=this;return t.className.split(" ").filter((function(e){return e.indexOf("swiper-slide")===0||e.indexOf(a.params.slideClass)===0})).join(" ")};t.emitSlidesClasses=function e(){var t=this;if(!t.params._emitClasses||!t.el)return;var a=[];t.slides.each((function(e){var r=t.getSlideClasses(e);a.push({slideEl:e,classNames:r});t.emit("_slideClass",e,r)}));t.emit("_slideClasses",a)};t.slidesPerViewDynamic=function e(){var t=this;var a=t.params,r=t.slides,i=t.slidesGrid,s=t.size,n=t.activeIndex;var o=1;if(a.centeredSlides){var l=r[n].swiperSlideSize;var d;for(var p=n+1;p<r.length;p+=1){if(r[p]&&!d){l+=r[p].swiperSlideSize;o+=1;if(l>s)d=true}}for(var u=n-1;u>=0;u-=1){if(r[u]&&!d){l+=r[u].swiperSlideSize;o+=1;if(l>s)d=true}}}else{for(var f=n+1;f<r.length;f+=1){if(i[f]-i[n]<s){o+=1}}}return o};t.update=function e(){var t=this;if(!t||t.destroyed)return;var a=t.snapGrid,r=t.params;if(r.breakpoints){t.setBreakpoint()}t.updateSize();t.updateSlides();t.updateProgress();t.updateSlidesClasses();function i(){var e=t.rtlTranslate?t.translate*-1:t.translate;var a=Math.min(Math.max(e,t.maxTranslate()),t.minTranslate());t.setTranslate(a);t.updateActiveIndex();t.updateSlidesClasses()}var s;if(t.params.freeMode){i();if(t.params.autoHeight){t.updateAutoHeight()}}else{if((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides){s=t.slideTo(t.slides.length-1,0,false,true)}else{s=t.slideTo(t.activeIndex,0,false,true)}if(!s){i()}}if(r.watchOverflow&&a!==t.snapGrid){t.checkOverflow()}t.emit("update")};t.changeDirection=function e(t,a){if(a===void 0){a=true}var r=this;var i=r.params.direction;if(!t){t=i==="horizontal"?"vertical":"horizontal"}if(t===i||t!=="horizontal"&&t!=="vertical"){return r}r.$el.removeClass(""+r.params.containerModifierClass+i).addClass(""+r.params.containerModifierClass+t);r.emitContainerClasses();r.params.direction=t;r.slides.each((function(e){if(t==="vertical"){e.style.width=""}else{e.style.height=""}}));r.emit("changeDirection");if(a)r.update();return r};t.mount=function e(t){var a=this;if(a.mounted)return true;var r=$(t||a.params.el);t=r[0];if(!t){return false}t.swiper=a;var i=function e(){return"."+(a.params.wrapperClass||"").trim().split(" ").join(".")};var s=function e(){if(t&&t.shadowRoot&&t.shadowRoot.querySelector){var a=$(t.shadowRoot.querySelector(i()));a.children=function(e){return r.children(e)};return a}return r.children(i())};var n=s();if(n.length===0&&a.params.createElements){var o=getDocument();var l=o.createElement("div");n=$(l);l.className=a.params.wrapperClass;r.append(l);r.children("."+a.params.slideClass).each((function(e){n.append(e)}))}extend(a,{$el:r,el:t,$wrapperEl:n,wrapperEl:n[0],mounted:true,rtl:t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl"),wrongRTL:n.css("display")==="-webkit-box"});return true};t.init=function e(t){var a=this;if(a.initialized)return a;var r=a.mount(t);if(r===false)return a;a.emit("beforeInit");if(a.params.breakpoints){a.setBreakpoint()}a.addClasses();if(a.params.loop){a.loopCreate()}a.updateSize();a.updateSlides();if(a.params.watchOverflow){a.checkOverflow()}if(a.params.grabCursor&&a.enabled){a.setGrabCursor()}if(a.params.preloadImages){a.preloadImages()}if(a.params.loop){a.slideTo(a.params.initialSlide+a.loopedSlides,0,a.params.runCallbacksOnInit,false,true)}else{a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,false,true)}a.attachEvents();a.initialized=true;a.emit("init");a.emit("afterInit");return a};t.destroy=function e(t,a){if(t===void 0){t=true}if(a===void 0){a=true}var r=this;var i=r.params,s=r.$el,n=r.$wrapperEl,o=r.slides;if(typeof r.params==="undefined"||r.destroyed){return null}r.emit("beforeDestroy");r.initialized=false;r.detachEvents();if(i.loop){r.loopDestroy()}if(a){r.removeClasses();s.removeAttr("style");n.removeAttr("style");if(o&&o.length){o.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")}}r.emit("destroy");Object.keys(r.eventsListeners).forEach((function(e){r.off(e)}));if(t!==false){r.$el[0].swiper=null;deleteProps(r)}r.destroyed=true;return null};e.extendDefaults=function e(t){extend(extendedDefaults,t)};e.installModule=function t(a){if(!e.prototype.modules)e.prototype.modules={};var r=a.name||Object.keys(e.prototype.modules).length+"_"+now();e.prototype.modules[r]=a};e.use=function t(a){if(Array.isArray(a)){a.forEach((function(t){return e.installModule(t)}));return e}e.installModule(a);return e};_createClass(e,null,[{key:"extendedDefaults",get:function e(){return extendedDefaults}},{key:"defaults",get:function e(){return defaults}}]);return e}();Object.keys(prototypes).forEach((function(e){Object.keys(prototypes[e]).forEach((function(t){Swiper$1.prototype[t]=prototypes[e][t]}))}));Swiper$1.use([Resize,Observer$1]);function _extends$h(){_extends$h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$h.apply(this,arguments)}var Virtual={update:function e(t){var a=this;var r=a.params,i=r.slidesPerView,s=r.slidesPerGroup,n=r.centeredSlides;var o=a.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter;var p=a.virtual,u=p.from,f=p.to,c=p.slides,v=p.slidesGrid,h=p.renderSlide,m=p.offset;a.updateActiveIndex();var g=a.activeIndex||0;var w;if(a.rtlTranslate)w="right";else w=a.isHorizontal()?"left":"top";var b;var y;if(n){b=Math.floor(i/2)+s+d;y=Math.floor(i/2)+s+l}else{b=i+(s-1)+d;y=s+l}var x=Math.max((g||0)-y,0);var E=Math.min((g||0)+b,c.length-1);var C=(a.slidesGrid[x]||0)-(a.slidesGrid[0]||0);extend(a.virtual,{from:x,to:E,offset:C,slidesGrid:a.slidesGrid});function T(){a.updateSlides();a.updateProgress();a.updateSlidesClasses();if(a.lazy&&a.params.lazy.enabled){a.lazy.load()}}if(u===x&&f===E&&!t){if(a.slidesGrid!==v&&C!==m){a.slides.css(w,C+"px")}a.updateProgress();return}if(a.params.virtual.renderExternal){a.params.virtual.renderExternal.call(a,{offset:C,from:x,to:E,slides:function e(){var t=[];for(var a=x;a<=E;a+=1){t.push(c[a])}return t}()});if(a.params.virtual.renderExternalUpdate){T()}return}var S=[];var A=[];if(t){a.$wrapperEl.find("."+a.params.slideClass).remove()}else{for(var M=u;M<=f;M+=1){if(M<x||M>E){a.$wrapperEl.find("."+a.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove()}}}for(var $=0;$<c.length;$+=1){if($>=x&&$<=E){if(typeof f==="undefined"||t){A.push($)}else{if($>f)A.push($);if($<u)S.push($)}}}A.forEach((function(e){a.$wrapperEl.append(h(c[e],e))}));S.sort((function(e,t){return t-e})).forEach((function(e){a.$wrapperEl.prepend(h(c[e],e))}));a.$wrapperEl.children(".swiper-slide").css(w,C+"px");T()},renderSlide:function e(t,a){var r=this;var i=r.params.virtual;if(i.cache&&r.virtual.cache[a]){return r.virtual.cache[a]}var s=i.renderSlide?$(i.renderSlide.call(r,t,a)):$('<div class="'+r.params.slideClass+'" data-swiper-slide-index="'+a+'">'+t+"</div>");if(!s.attr("data-swiper-slide-index"))s.attr("data-swiper-slide-index",a);if(i.cache)r.virtual.cache[a]=s;return s},appendSlide:function e(t){var a=this;if(typeof t==="object"&&"length"in t){for(var r=0;r<t.length;r+=1){if(t[r])a.virtual.slides.push(t[r])}}else{a.virtual.slides.push(t)}a.virtual.update(true)},prependSlide:function e(t){var a=this;var r=a.activeIndex;var i=r+1;var s=1;if(Array.isArray(t)){for(var n=0;n<t.length;n+=1){if(t[n])a.virtual.slides.unshift(t[n])}i=r+t.length;s=t.length}else{a.virtual.slides.unshift(t)}if(a.params.virtual.cache){var o=a.virtual.cache;var l={};Object.keys(o).forEach((function(e){var t=o[e];var a=t.attr("data-swiper-slide-index");if(a){t.attr("data-swiper-slide-index",parseInt(a,10)+1)}l[parseInt(e,10)+s]=t}));a.virtual.cache=l}a.virtual.update(true);a.slideTo(i,0)},removeSlide:function e(t){var a=this;if(typeof t==="undefined"||t===null)return;var r=a.activeIndex;if(Array.isArray(t)){for(var i=t.length-1;i>=0;i-=1){a.virtual.slides.splice(t[i],1);if(a.params.virtual.cache){delete a.virtual.cache[t[i]]}if(t[i]<r)r-=1;r=Math.max(r,0)}}else{a.virtual.slides.splice(t,1);if(a.params.virtual.cache){delete a.virtual.cache[t]}if(t<r)r-=1;r=Math.max(r,0)}a.virtual.update(true);a.slideTo(r,0)},removeAllSlides:function e(){var t=this;t.virtual.slides=[];if(t.params.virtual.cache){t.virtual.cache={}}t.virtual.update(true);t.slideTo(0,0)}};var Virtual$1={name:"virtual",params:{virtual:{enabled:false,slides:[],cache:true,renderSlide:null,renderExternal:null,renderExternalUpdate:true,addSlidesBefore:0,addSlidesAfter:0}},create:function e(){var t=this;bindModuleMethods(t,{virtual:_extends$h({},Virtual,{slides:t.params.virtual.slides,cache:{}})})},on:{beforeInit:function e(t){if(!t.params.virtual.enabled)return;t.classNames.push(t.params.containerModifierClass+"virtual");var a={watchSlidesProgress:true};extend(t.params,a);extend(t.originalParams,a);if(!t.params.initialSlide){t.virtual.update()}},setTranslate:function e(t){if(!t.params.virtual.enabled)return;t.virtual.update()}}};function _extends$g(){_extends$g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$g.apply(this,arguments)}var Keyboard={handle:function e(t){var a=this;if(!a.enabled)return;var r=getWindow();var i=getDocument();var s=a.rtlTranslate;var n=t;if(n.originalEvent)n=n.originalEvent;var o=n.keyCode||n.charCode;var l=a.params.keyboard.pageUpDown;var d=l&&o===33;var p=l&&o===34;var u=o===37;var f=o===39;var c=o===38;var v=o===40;if(!a.allowSlideNext&&(a.isHorizontal()&&f||a.isVertical()&&v||p)){return false}if(!a.allowSlidePrev&&(a.isHorizontal()&&u||a.isVertical()&&c||d)){return false}if(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey){return undefined}if(i.activeElement&&i.activeElement.nodeName&&(i.activeElement.nodeName.toLowerCase()==="input"||i.activeElement.nodeName.toLowerCase()==="textarea")){return undefined}if(a.params.keyboard.onlyInViewport&&(d||p||u||f||c||v)){var h=false;if(a.$el.parents("."+a.params.slideClass).length>0&&a.$el.parents("."+a.params.slideActiveClass).length===0){return undefined}var m=a.$el;var g=m[0].clientWidth;var w=m[0].clientHeight;var b=r.innerWidth;var y=r.innerHeight;var x=a.$el.offset();if(s)x.left-=a.$el[0].scrollLeft;var E=[[x.left,x.top],[x.left+g,x.top],[x.left,x.top+w],[x.left+g,x.top+w]];for(var C=0;C<E.length;C+=1){var T=E[C];if(T[0]>=0&&T[0]<=b&&T[1]>=0&&T[1]<=y){if(T[0]===0&&T[1]===0)continue;h=true}}if(!h)return undefined}if(a.isHorizontal()){if(d||p||u||f){if(n.preventDefault)n.preventDefault();else n.returnValue=false}if((p||f)&&!s||(d||u)&&s)a.slideNext();if((d||u)&&!s||(p||f)&&s)a.slidePrev()}else{if(d||p||c||v){if(n.preventDefault)n.preventDefault();else n.returnValue=false}if(p||v)a.slideNext();if(d||c)a.slidePrev()}a.emit("keyPress",o);return undefined},enable:function e(){var t=this;var a=getDocument();if(t.keyboard.enabled)return;$(a).on("keydown",t.keyboard.handle);t.keyboard.enabled=true},disable:function e(){var t=this;var a=getDocument();if(!t.keyboard.enabled)return;$(a).off("keydown",t.keyboard.handle);t.keyboard.enabled=false}};var Keyboard$1={name:"keyboard",params:{keyboard:{enabled:false,onlyInViewport:true,pageUpDown:true}},create:function e(){var t=this;bindModuleMethods(t,{keyboard:_extends$g({enabled:false},Keyboard)})},on:{init:function e(t){if(t.params.keyboard.enabled){t.keyboard.enable()}},destroy:function e(t){if(t.keyboard.enabled){t.keyboard.disable()}}}};function isEventSupported(){var e=getDocument();var t="onwheel";var a=t in e;if(!a){var r=e.createElement("div");r.setAttribute(t,"return;");a=typeof r[t]==="function"}if(!a&&e.implementation&&e.implementation.hasFeature&&e.implementation.hasFeature("","")!==true){a=e.implementation.hasFeature("Events.wheel","3.0")}return a}var Mousewheel={lastScrollTime:now(),lastEventBeforeSnap:undefined,recentWheelEvents:[],event:function e(){var t=getWindow();if(t.navigator.userAgent.indexOf("firefox")>-1)return"DOMMouseScroll";return isEventSupported()?"wheel":"mousewheel"},normalize:function e(t){var a=10;var r=40;var i=800;var s=0;var n=0;var o=0;var l=0;if("detail"in t){n=t.detail}if("wheelDelta"in t){n=-t.wheelDelta/120}if("wheelDeltaY"in t){n=-t.wheelDeltaY/120}if("wheelDeltaX"in t){s=-t.wheelDeltaX/120}if("axis"in t&&t.axis===t.HORIZONTAL_AXIS){s=n;n=0}o=s*a;l=n*a;if("deltaY"in t){l=t.deltaY}if("deltaX"in t){o=t.deltaX}if(t.shiftKey&&!o){o=l;l=0}if((o||l)&&t.deltaMode){if(t.deltaMode===1){o*=r;l*=r}else{o*=i;l*=i}}if(o&&!s){s=o<1?-1:1}if(l&&!n){n=l<1?-1:1}return{spinX:s,spinY:n,pixelX:o,pixelY:l}},handleMouseEnter:function e(){var t=this;if(!t.enabled)return;t.mouseEntered=true},handleMouseLeave:function e(){var t=this;if(!t.enabled)return;t.mouseEntered=false},handle:function e(t){var a=t;var r=true;var i=this;if(!i.enabled)return;var s=i.params.mousewheel;if(i.params.cssMode){a.preventDefault()}var n=i.$el;if(i.params.mousewheel.eventsTarget!=="container"){n=$(i.params.mousewheel.eventsTarget)}if(!i.mouseEntered&&!n[0].contains(a.target)&&!s.releaseOnEdges)return true;if(a.originalEvent)a=a.originalEvent;var o=0;var l=i.rtlTranslate?-1:1;var d=Mousewheel.normalize(a);if(s.forceToAxis){if(i.isHorizontal()){if(Math.abs(d.pixelX)>Math.abs(d.pixelY))o=-d.pixelX*l;else return true}else if(Math.abs(d.pixelY)>Math.abs(d.pixelX))o=-d.pixelY;else return true}else{o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY}if(o===0)return true;if(s.invert)o=-o;var p=i.getTranslate()+o*s.sensitivity;if(p>=i.minTranslate())p=i.minTranslate();if(p<=i.maxTranslate())p=i.maxTranslate();r=i.params.loop?true:!(p===i.minTranslate()||p===i.maxTranslate());if(r&&i.params.nested)a.stopPropagation();if(!i.params.freeMode){var u={time:now(),delta:Math.abs(o),direction:Math.sign(o),raw:t};var f=i.mousewheel.recentWheelEvents;if(f.length>=2){f.shift()}var c=f.length?f[f.length-1]:undefined;f.push(u);if(c){if(u.direction!==c.direction||u.delta>c.delta||u.time>c.time+150){i.mousewheel.animateSlider(u)}}else{i.mousewheel.animateSlider(u)}if(i.mousewheel.releaseScroll(u)){return true}}else{var v={time:now(),delta:Math.abs(o),direction:Math.sign(o)};var h=i.mousewheel.lastEventBeforeSnap;var m=h&&v.time<h.time+500&&v.delta<=h.delta&&v.direction===h.direction;if(!m){i.mousewheel.lastEventBeforeSnap=undefined;if(i.params.loop){i.loopFix()}var g=i.getTranslate()+o*s.sensitivity;var w=i.isBeginning;var b=i.isEnd;if(g>=i.minTranslate())g=i.minTranslate();if(g<=i.maxTranslate())g=i.maxTranslate();i.setTransition(0);i.setTranslate(g);i.updateProgress();i.updateActiveIndex();i.updateSlidesClasses();if(!w&&i.isBeginning||!b&&i.isEnd){i.updateSlidesClasses()}if(i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout);i.mousewheel.timeout=undefined;var y=i.mousewheel.recentWheelEvents;if(y.length>=15){y.shift()}var x=y.length?y[y.length-1]:undefined;var E=y[0];y.push(v);if(x&&(v.delta>x.delta||v.direction!==x.direction)){y.splice(0)}else if(y.length>=15&&v.time-E.time<500&&E.delta-v.delta>=1&&v.delta<=6){var C=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=v;y.splice(0);i.mousewheel.timeout=nextTick((function(){i.slideToClosest(i.params.speed,true,undefined,C)}),0)}if(!i.mousewheel.timeout){i.mousewheel.timeout=nextTick((function(){var e=.5;i.mousewheel.lastEventBeforeSnap=v;y.splice(0);i.slideToClosest(i.params.speed,true,undefined,e)}),500)}}if(!m)i.emit("scroll",a);if(i.params.autoplay&&i.params.autoplayDisableOnInteraction)i.autoplay.stop();if(g===i.minTranslate()||g===i.maxTranslate())return true}}if(a.preventDefault)a.preventDefault();else a.returnValue=false;return false},animateSlider:function e(t){var a=this;var r=getWindow();if(this.params.mousewheel.thresholdDelta&&t.delta<this.params.mousewheel.thresholdDelta){return false}if(this.params.mousewheel.thresholdTime&&now()-a.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime){return false}if(t.delta>=6&&now()-a.mousewheel.lastScrollTime<60){return true}if(t.direction<0){if((!a.isEnd||a.params.loop)&&!a.animating){a.slideNext();a.emit("scroll",t.raw)}}else if((!a.isBeginning||a.params.loop)&&!a.animating){a.slidePrev();a.emit("scroll",t.raw)}a.mousewheel.lastScrollTime=(new r.Date).getTime();return false},releaseScroll:function e(t){var a=this;var r=a.params.mousewheel;if(t.direction<0){if(a.isEnd&&!a.params.loop&&r.releaseOnEdges){return true}}else if(a.isBeginning&&!a.params.loop&&r.releaseOnEdges){return true}return false},enable:function e(){var t=this;var a=Mousewheel.event();if(t.params.cssMode){t.wrapperEl.removeEventListener(a,t.mousewheel.handle);return true}if(!a)return false;if(t.mousewheel.enabled)return false;var r=t.$el;if(t.params.mousewheel.eventsTarget!=="container"){r=$(t.params.mousewheel.eventsTarget)}r.on("mouseenter",t.mousewheel.handleMouseEnter);r.on("mouseleave",t.mousewheel.handleMouseLeave);r.on(a,t.mousewheel.handle);t.mousewheel.enabled=true;return true},disable:function e(){var t=this;var a=Mousewheel.event();if(t.params.cssMode){t.wrapperEl.addEventListener(a,t.mousewheel.handle);return true}if(!a)return false;if(!t.mousewheel.enabled)return false;var r=t.$el;if(t.params.mousewheel.eventsTarget!=="container"){r=$(t.params.mousewheel.eventsTarget)}r.off(a,t.mousewheel.handle);t.mousewheel.enabled=false;return true}};var Mousewheel$1={name:"mousewheel",params:{mousewheel:{enabled:false,releaseOnEdges:false,invert:false,forceToAxis:false,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function e(){var t=this;bindModuleMethods(t,{mousewheel:{enabled:false,lastScrollTime:now(),lastEventBeforeSnap:undefined,recentWheelEvents:[],enable:Mousewheel.enable,disable:Mousewheel.disable,handle:Mousewheel.handle,handleMouseEnter:Mousewheel.handleMouseEnter,handleMouseLeave:Mousewheel.handleMouseLeave,animateSlider:Mousewheel.animateSlider,releaseScroll:Mousewheel.releaseScroll}})},on:{init:function e(t){if(!t.params.mousewheel.enabled&&t.params.cssMode){t.mousewheel.disable()}if(t.params.mousewheel.enabled)t.mousewheel.enable()},destroy:function e(t){if(t.params.cssMode){t.mousewheel.enable()}if(t.mousewheel.enabled)t.mousewheel.disable()}}};function _extends$f(){_extends$f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$f.apply(this,arguments)}var Navigation={toggleEl:function e(t,a){t[a?"addClass":"removeClass"](this.params.navigation.disabledClass);if(t[0]&&t[0].tagName==="BUTTON")t[0].disabled=a},update:function e(){var t=this;var a=t.params.navigation;var r=t.navigation.toggleEl;if(t.params.loop)return;var i=t.navigation,s=i.$nextEl,n=i.$prevEl;if(n&&n.length>0){if(t.isBeginning){r(n,true)}else{r(n,false)}if(t.params.watchOverflow&&t.enabled){n[t.isLocked?"addClass":"removeClass"](a.lockClass)}}if(s&&s.length>0){if(t.isEnd){r(s,true)}else{r(s,false)}if(t.params.watchOverflow&&t.enabled){s[t.isLocked?"addClass":"removeClass"](a.lockClass)}}},onPrevClick:function e(t){var a=this;t.preventDefault();if(a.isBeginning&&!a.params.loop)return;a.slidePrev()},onNextClick:function e(t){var a=this;t.preventDefault();if(a.isEnd&&!a.params.loop)return;a.slideNext()},init:function e(){var t=this;var a=t.params.navigation;t.params.navigation=createElementIfNotDefined(t.$el,t.params.navigation,t.params.createElements,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"});if(!(a.nextEl||a.prevEl))return;var r;var i;if(a.nextEl){r=$(a.nextEl);if(t.params.uniqueNavElements&&typeof a.nextEl==="string"&&r.length>1&&t.$el.find(a.nextEl).length===1){r=t.$el.find(a.nextEl)}}if(a.prevEl){i=$(a.prevEl);if(t.params.uniqueNavElements&&typeof a.prevEl==="string"&&i.length>1&&t.$el.find(a.prevEl).length===1){i=t.$el.find(a.prevEl)}}if(r&&r.length>0){r.on("click",t.navigation.onNextClick)}if(i&&i.length>0){i.on("click",t.navigation.onPrevClick)}extend(t.navigation,{$nextEl:r,nextEl:r&&r[0],$prevEl:i,prevEl:i&&i[0]});if(!t.enabled){if(r)r.addClass(a.lockClass);if(i)i.addClass(a.lockClass)}},destroy:function e(){var t=this;var a=t.navigation,r=a.$nextEl,i=a.$prevEl;if(r&&r.length){r.off("click",t.navigation.onNextClick);r.removeClass(t.params.navigation.disabledClass)}if(i&&i.length){i.off("click",t.navigation.onPrevClick);i.removeClass(t.params.navigation.disabledClass)}}};var Navigation$1={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:false,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function e(){var t=this;bindModuleMethods(t,{navigation:_extends$f({},Navigation)})},on:{init:function e(t){t.navigation.init();t.navigation.update()},toEdge:function e(t){t.navigation.update()},fromEdge:function e(t){t.navigation.update()},destroy:function e(t){t.navigation.destroy()},"enable disable":function e(t){var a=t.navigation,r=a.$nextEl,i=a.$prevEl;if(r){r[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}if(i){i[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}},click:function e(t,a){var r=t.navigation,i=r.$nextEl,s=r.$prevEl;var n=a.target;if(t.params.navigation.hideOnClick&&!$(n).is(s)&&!$(n).is(i)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;var o;if(i){o=i.hasClass(t.params.navigation.hiddenClass)}else if(s){o=s.hasClass(t.params.navigation.hiddenClass)}if(o===true){t.emit("navigationShow")}else{t.emit("navigationHide")}if(i){i.toggleClass(t.params.navigation.hiddenClass)}if(s){s.toggleClass(t.params.navigation.hiddenClass)}}}}};function _extends$e(){_extends$e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$e.apply(this,arguments)}var Pagination={update:function e(){var t=this;var a=t.rtl;var r=t.params.pagination;if(!r.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0)return;var i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;var s=t.pagination.$el;var n;var o=t.params.loop?Math.ceil((i-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop){n=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup);if(n>i-1-t.loopedSlides*2){n-=i-t.loopedSlides*2}if(n>o-1)n-=o;if(n<0&&t.params.paginationType!=="bullets")n=o+n}else if(typeof t.snapIndex!=="undefined"){n=t.snapIndex}else{n=t.activeIndex||0}if(r.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){var l=t.pagination.bullets;var d;var p;var u;if(r.dynamicBullets){t.pagination.bulletSize=l.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](true);s.css(t.isHorizontal()?"width":"height",t.pagination.bulletSize*(r.dynamicMainBullets+4)+"px");if(r.dynamicMainBullets>1&&t.previousIndex!==undefined){t.pagination.dynamicBulletIndex+=n-t.previousIndex;if(t.pagination.dynamicBulletIndex>r.dynamicMainBullets-1){t.pagination.dynamicBulletIndex=r.dynamicMainBullets-1}else if(t.pagination.dynamicBulletIndex<0){t.pagination.dynamicBulletIndex=0}}d=n-t.pagination.dynamicBulletIndex;p=d+(Math.min(l.length,r.dynamicMainBullets)-1);u=(p+d)/2}l.removeClass(r.bulletActiveClass+" "+r.bulletActiveClass+"-next "+r.bulletActiveClass+"-next-next "+r.bulletActiveClass+"-prev "+r.bulletActiveClass+"-prev-prev "+r.bulletActiveClass+"-main");if(s.length>1){l.each((function(e){var t=$(e);var a=t.index();if(a===n){t.addClass(r.bulletActiveClass)}if(r.dynamicBullets){if(a>=d&&a<=p){t.addClass(r.bulletActiveClass+"-main")}if(a===d){t.prev().addClass(r.bulletActiveClass+"-prev").prev().addClass(r.bulletActiveClass+"-prev-prev")}if(a===p){t.next().addClass(r.bulletActiveClass+"-next").next().addClass(r.bulletActiveClass+"-next-next")}}}))}else{var f=l.eq(n);var c=f.index();f.addClass(r.bulletActiveClass);if(r.dynamicBullets){var v=l.eq(d);var h=l.eq(p);for(var m=d;m<=p;m+=1){l.eq(m).addClass(r.bulletActiveClass+"-main")}if(t.params.loop){if(c>=l.length-r.dynamicMainBullets){for(var g=r.dynamicMainBullets;g>=0;g-=1){l.eq(l.length-g).addClass(r.bulletActiveClass+"-main")}l.eq(l.length-r.dynamicMainBullets-1).addClass(r.bulletActiveClass+"-prev")}else{v.prev().addClass(r.bulletActiveClass+"-prev").prev().addClass(r.bulletActiveClass+"-prev-prev");h.next().addClass(r.bulletActiveClass+"-next").next().addClass(r.bulletActiveClass+"-next-next")}}else{v.prev().addClass(r.bulletActiveClass+"-prev").prev().addClass(r.bulletActiveClass+"-prev-prev");h.next().addClass(r.bulletActiveClass+"-next").next().addClass(r.bulletActiveClass+"-next-next")}}}if(r.dynamicBullets){var w=Math.min(l.length,r.dynamicMainBullets+4);var b=(t.pagination.bulletSize*w-t.pagination.bulletSize)/2-u*t.pagination.bulletSize;var y=a?"right":"left";l.css(t.isHorizontal()?y:"top",b+"px")}}if(r.type==="fraction"){s.find(classesToSelector(r.currentClass)).text(r.formatFractionCurrent(n+1));s.find(classesToSelector(r.totalClass)).text(r.formatFractionTotal(o))}if(r.type==="progressbar"){var x;if(r.progressbarOpposite){x=t.isHorizontal()?"vertical":"horizontal"}else{x=t.isHorizontal()?"horizontal":"vertical"}var E=(n+1)/o;var C=1;var T=1;if(x==="horizontal"){C=E}else{T=E}s.find(classesToSelector(r.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+C+") scaleY("+T+")").transition(t.params.speed)}if(r.type==="custom"&&r.renderCustom){s.html(r.renderCustom(t,n+1,o));t.emit("paginationRender",s[0])}else{t.emit("paginationUpdate",s[0])}if(t.params.watchOverflow&&t.enabled){s[t.isLocked?"addClass":"removeClass"](r.lockClass)}},render:function e(){var t=this;var a=t.params.pagination;if(!a.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0)return;var r=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;var i=t.pagination.$el;var s="";if(a.type==="bullets"){var n=t.params.loop?Math.ceil((r-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.freeMode&&!t.params.loop&&n>r){n=r}for(var o=0;o<n;o+=1){if(a.renderBullet){s+=a.renderBullet.call(t,o,a.bulletClass)}else{s+="<"+a.bulletElement+' class="'+a.bulletClass+'"></'+a.bulletElement+">"}}i.html(s);t.pagination.bullets=i.find(classesToSelector(a.bulletClass))}if(a.type==="fraction"){if(a.renderFraction){s=a.renderFraction.call(t,a.currentClass,a.totalClass)}else{s='<span class="'+a.currentClass+'"></span>'+" / "+('<span class="'+a.totalClass+'"></span>')}i.html(s)}if(a.type==="progressbar"){if(a.renderProgressbar){s=a.renderProgressbar.call(t,a.progressbarFillClass)}else{s='<span class="'+a.progressbarFillClass+'"></span>'}i.html(s)}if(a.type!=="custom"){t.emit("paginationRender",t.pagination.$el[0])}},init:function e(){var t=this;t.params.pagination=createElementIfNotDefined(t.$el,t.params.pagination,t.params.createElements,{el:"swiper-pagination"});var a=t.params.pagination;if(!a.el)return;var r=$(a.el);if(r.length===0)return;if(t.params.uniqueNavElements&&typeof a.el==="string"&&r.length>1){r=t.$el.find(a.el)}if(a.type==="bullets"&&a.clickable){r.addClass(a.clickableClass)}r.addClass(a.modifierClass+a.type);if(a.type==="bullets"&&a.dynamicBullets){r.addClass(""+a.modifierClass+a.type+"-dynamic");t.pagination.dynamicBulletIndex=0;if(a.dynamicMainBullets<1){a.dynamicMainBullets=1}}if(a.type==="progressbar"&&a.progressbarOpposite){r.addClass(a.progressbarOppositeClass)}if(a.clickable){r.on("click",classesToSelector(a.bulletClass),(function e(a){a.preventDefault();var r=$(this).index()*t.params.slidesPerGroup;if(t.params.loop)r+=t.loopedSlides;t.slideTo(r)}))}extend(t.pagination,{$el:r,el:r[0]});if(!t.enabled){r.addClass(a.lockClass)}},destroy:function e(){var t=this;var a=t.params.pagination;if(!a.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0)return;var r=t.pagination.$el;r.removeClass(a.hiddenClass);r.removeClass(a.modifierClass+a.type);if(t.pagination.bullets)t.pagination.bullets.removeClass(a.bulletActiveClass);if(a.clickable){r.off("click",classesToSelector(a.bulletClass))}}};var Pagination$1={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:false,hideOnClick:false,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:false,type:"bullets",dynamicBullets:false,dynamicMainBullets:1,formatFractionCurrent:function e(t){return t},formatFractionTotal:function e(t){return t},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function e(){var t=this;bindModuleMethods(t,{pagination:_extends$e({dynamicBulletIndex:0},Pagination)})},on:{init:function e(t){t.pagination.init();t.pagination.render();t.pagination.update()},activeIndexChange:function e(t){if(t.params.loop){t.pagination.update()}else if(typeof t.snapIndex==="undefined"){t.pagination.update()}},snapIndexChange:function e(t){if(!t.params.loop){t.pagination.update()}},slidesLengthChange:function e(t){if(t.params.loop){t.pagination.render();t.pagination.update()}},snapGridLengthChange:function e(t){if(!t.params.loop){t.pagination.render();t.pagination.update()}},destroy:function e(t){t.pagination.destroy()},"enable disable":function e(t){var a=t.pagination.$el;if(a){a[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}},click:function e(t,a){var r=a.target;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&t.pagination.$el.length>0&&!$(r).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&r===t.navigation.nextEl||t.navigation.prevEl&&r===t.navigation.prevEl))return;var i=t.pagination.$el.hasClass(t.params.pagination.hiddenClass);if(i===true){t.emit("paginationShow")}else{t.emit("paginationHide")}t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)}}}};function _extends$d(){_extends$d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$d.apply(this,arguments)}var Scrollbar={setTranslate:function e(){var t=this;if(!t.params.scrollbar.el||!t.scrollbar.el)return;var a=t.scrollbar,r=t.rtlTranslate,i=t.progress;var s=a.dragSize,n=a.trackSize,o=a.$dragEl,l=a.$el;var d=t.params.scrollbar;var p=s;var u=(n-s)*i;if(r){u=-u;if(u>0){p=s-u;u=0}else if(-u+s>n){p=n+u}}else if(u<0){p=s+u;u=0}else if(u+s>n){p=n-u}if(t.isHorizontal()){o.transform("translate3d("+u+"px, 0, 0)");o[0].style.width=p+"px"}else{o.transform("translate3d(0px, "+u+"px, 0)");o[0].style.height=p+"px"}if(d.hide){clearTimeout(t.scrollbar.timeout);l[0].style.opacity=1;t.scrollbar.timeout=setTimeout((function(){l[0].style.opacity=0;l.transition(400)}),1e3)}},setTransition:function e(t){var a=this;if(!a.params.scrollbar.el||!a.scrollbar.el)return;a.scrollbar.$dragEl.transition(t)},updateSize:function e(){var t=this;if(!t.params.scrollbar.el||!t.scrollbar.el)return;var a=t.scrollbar;var r=a.$dragEl,i=a.$el;r[0].style.width="";r[0].style.height="";var s=t.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight;var n=t.size/t.virtualSize;var o=n*(s/t.size);var l;if(t.params.scrollbar.dragSize==="auto"){l=s*n}else{l=parseInt(t.params.scrollbar.dragSize,10)}if(t.isHorizontal()){r[0].style.width=l+"px"}else{r[0].style.height=l+"px"}if(n>=1){i[0].style.display="none"}else{i[0].style.display=""}if(t.params.scrollbar.hide){i[0].style.opacity=0}extend(a,{trackSize:s,divider:n,moveDivider:o,dragSize:l});if(t.params.watchOverflow&&t.enabled){a.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}},getPointerPosition:function e(t){var a=this;if(a.isHorizontal()){return t.type==="touchstart"||t.type==="touchmove"?t.targetTouches[0].clientX:t.clientX}return t.type==="touchstart"||t.type==="touchmove"?t.targetTouches[0].clientY:t.clientY},setDragPosition:function e(t){var a=this;var r=a.scrollbar,i=a.rtlTranslate;var s=r.$el,n=r.dragSize,o=r.trackSize,l=r.dragStartPos;var d;d=(r.getPointerPosition(t)-s.offset()[a.isHorizontal()?"left":"top"]-(l!==null?l:n/2))/(o-n);d=Math.max(Math.min(d,1),0);if(i){d=1-d}var p=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*d;a.updateProgress(p);a.setTranslate(p);a.updateActiveIndex();a.updateSlidesClasses()},onDragStart:function e(t){var a=this;var r=a.params.scrollbar;var i=a.scrollbar,s=a.$wrapperEl;var n=i.$el,o=i.$dragEl;a.scrollbar.isTouched=true;a.scrollbar.dragStartPos=t.target===o[0]||t.target===o?i.getPointerPosition(t)-t.target.getBoundingClientRect()[a.isHorizontal()?"left":"top"]:null;t.preventDefault();t.stopPropagation();s.transition(100);o.transition(100);i.setDragPosition(t);clearTimeout(a.scrollbar.dragTimeout);n.transition(0);if(r.hide){n.css("opacity",1)}if(a.params.cssMode){a.$wrapperEl.css("scroll-snap-type","none")}a.emit("scrollbarDragStart",t)},onDragMove:function e(t){var a=this;var r=a.scrollbar,i=a.$wrapperEl;var s=r.$el,n=r.$dragEl;if(!a.scrollbar.isTouched)return;if(t.preventDefault)t.preventDefault();else t.returnValue=false;r.setDragPosition(t);i.transition(0);s.transition(0);n.transition(0);a.emit("scrollbarDragMove",t)},onDragEnd:function e(t){var a=this;var r=a.params.scrollbar;var i=a.scrollbar,s=a.$wrapperEl;var n=i.$el;if(!a.scrollbar.isTouched)return;a.scrollbar.isTouched=false;if(a.params.cssMode){a.$wrapperEl.css("scroll-snap-type","");s.transition("")}if(r.hide){clearTimeout(a.scrollbar.dragTimeout);a.scrollbar.dragTimeout=nextTick((function(){n.css("opacity",0);n.transition(400)}),1e3)}a.emit("scrollbarDragEnd",t);if(r.snapOnRelease){a.slideToClosest()}},enableDraggable:function e(){var t=this;if(!t.params.scrollbar.el)return;var a=getDocument();var r=t.scrollbar,i=t.touchEventsTouch,s=t.touchEventsDesktop,n=t.params,o=t.support;var l=r.$el;var d=l[0];var p=o.passiveListener&&n.passiveListeners?{passive:false,capture:false}:false;var u=o.passiveListener&&n.passiveListeners?{passive:true,capture:false}:false;if(!d)return;if(!o.touch){d.addEventListener(s.start,t.scrollbar.onDragStart,p);a.addEventListener(s.move,t.scrollbar.onDragMove,p);a.addEventListener(s.end,t.scrollbar.onDragEnd,u)}else{d.addEventListener(i.start,t.scrollbar.onDragStart,p);d.addEventListener(i.move,t.scrollbar.onDragMove,p);d.addEventListener(i.end,t.scrollbar.onDragEnd,u)}},disableDraggable:function e(){var t=this;if(!t.params.scrollbar.el)return;var a=getDocument();var r=t.scrollbar,i=t.touchEventsTouch,s=t.touchEventsDesktop,n=t.params,o=t.support;var l=r.$el;var d=l[0];var p=o.passiveListener&&n.passiveListeners?{passive:false,capture:false}:false;var u=o.passiveListener&&n.passiveListeners?{passive:true,capture:false}:false;if(!d)return;if(!o.touch){d.removeEventListener(s.start,t.scrollbar.onDragStart,p);a.removeEventListener(s.move,t.scrollbar.onDragMove,p);a.removeEventListener(s.end,t.scrollbar.onDragEnd,u)}else{d.removeEventListener(i.start,t.scrollbar.onDragStart,p);d.removeEventListener(i.move,t.scrollbar.onDragMove,p);d.removeEventListener(i.end,t.scrollbar.onDragEnd,u)}},init:function e(){var t=this;var a=t.scrollbar,r=t.$el;t.params.scrollbar=createElementIfNotDefined(r,t.params.scrollbar,t.params.createElements,{el:"swiper-scrollbar"});var i=t.params.scrollbar;if(!i.el)return;var s=$(i.el);if(t.params.uniqueNavElements&&typeof i.el==="string"&&s.length>1&&r.find(i.el).length===1){s=r.find(i.el)}var n=s.find("."+t.params.scrollbar.dragClass);if(n.length===0){n=$('<div class="'+t.params.scrollbar.dragClass+'"></div>');s.append(n)}extend(a,{$el:s,el:s[0],$dragEl:n,dragEl:n[0]});if(i.draggable){a.enableDraggable()}if(s){s[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}},destroy:function e(){var t=this;t.scrollbar.disableDraggable()}};var Scrollbar$1={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:false,draggable:false,snapOnRelease:true,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function e(){var t=this;bindModuleMethods(t,{scrollbar:_extends$d({isTouched:false,timeout:null,dragTimeout:null},Scrollbar)})},on:{init:function e(t){t.scrollbar.init();t.scrollbar.updateSize();t.scrollbar.setTranslate()},update:function e(t){t.scrollbar.updateSize()},resize:function e(t){t.scrollbar.updateSize()},observerUpdate:function e(t){t.scrollbar.updateSize()},setTranslate:function e(t){t.scrollbar.setTranslate()},setTransition:function e(t,a){t.scrollbar.setTransition(a)},"enable disable":function e(t){var a=t.scrollbar.$el;if(a){a[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}},destroy:function e(t){t.scrollbar.destroy()}}};function _extends$c(){_extends$c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$c.apply(this,arguments)}var Parallax={setTransform:function e(t,a){var r=this;var i=r.rtl;var s=$(t);var n=i?-1:1;var o=s.attr("data-swiper-parallax")||"0";var l=s.attr("data-swiper-parallax-x");var d=s.attr("data-swiper-parallax-y");var p=s.attr("data-swiper-parallax-scale");var u=s.attr("data-swiper-parallax-opacity");if(l||d){l=l||"0";d=d||"0"}else if(r.isHorizontal()){l=o;d="0"}else{d=o;l="0"}if(l.indexOf("%")>=0){l=parseInt(l,10)*a*n+"%"}else{l=l*a*n+"px"}if(d.indexOf("%")>=0){d=parseInt(d,10)*a+"%"}else{d=d*a+"px"}if(typeof u!=="undefined"&&u!==null){var f=u-(u-1)*(1-Math.abs(a));s[0].style.opacity=f}if(typeof p==="undefined"||p===null){s.transform("translate3d("+l+", "+d+", 0px)")}else{var c=p-(p-1)*(1-Math.abs(a));s.transform("translate3d("+l+", "+d+", 0px) scale("+c+")")}},setTranslate:function e(){var t=this;var a=t.$el,r=t.slides,i=t.progress,s=t.snapGrid;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(e){t.parallax.setTransform(e,i)}));r.each((function(e,a){var r=e.progress;if(t.params.slidesPerGroup>1&&t.params.slidesPerView!=="auto"){r+=Math.ceil(a/2)-i*(s.length-1)}r=Math.min(Math.max(r,-1),1);$(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(e){t.parallax.setTransform(e,r)}))}))},setTransition:function e(t){if(t===void 0){t=this.params.speed}var a=this;var r=a.$el;r.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(e){var a=$(e);var r=parseInt(a.attr("data-swiper-parallax-duration"),10)||t;if(t===0)r=0;a.transition(r)}))}};var Parallax$1={name:"parallax",params:{parallax:{enabled:false}},create:function e(){var t=this;bindModuleMethods(t,{parallax:_extends$c({},Parallax)})},on:{beforeInit:function e(t){if(!t.params.parallax.enabled)return;t.params.watchSlidesProgress=true;t.originalParams.watchSlidesProgress=true},init:function e(t){if(!t.params.parallax.enabled)return;t.parallax.setTranslate()},setTranslate:function e(t){if(!t.params.parallax.enabled)return;t.parallax.setTranslate()},setTransition:function e(t,a){if(!t.params.parallax.enabled)return;t.parallax.setTransition(a)}}};function _extends$b(){_extends$b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$b.apply(this,arguments)}var Zoom={getDistanceBetweenTouches:function e(t){if(t.targetTouches.length<2)return 1;var a=t.targetTouches[0].pageX;var r=t.targetTouches[0].pageY;var i=t.targetTouches[1].pageX;var s=t.targetTouches[1].pageY;var n=Math.sqrt(Math.pow(i-a,2)+Math.pow(s-r,2));return n},onGestureStart:function e(t){var a=this;var r=a.support;var i=a.params.zoom;var s=a.zoom;var n=s.gesture;s.fakeGestureTouched=false;s.fakeGestureMoved=false;if(!r.gestures){if(t.type!=="touchstart"||t.type==="touchstart"&&t.targetTouches.length<2){return}s.fakeGestureTouched=true;n.scaleStart=Zoom.getDistanceBetweenTouches(t)}if(!n.$slideEl||!n.$slideEl.length){n.$slideEl=$(t.target).closest("."+a.params.slideClass);if(n.$slideEl.length===0)n.$slideEl=a.slides.eq(a.activeIndex);n.$imageEl=n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");n.$imageWrapEl=n.$imageEl.parent("."+i.containerClass);n.maxRatio=n.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio;if(n.$imageWrapEl.length===0){n.$imageEl=undefined;return}}if(n.$imageEl){n.$imageEl.transition(0)}a.zoom.isScaling=true},onGestureChange:function e(t){var a=this;var r=a.support;var i=a.params.zoom;var s=a.zoom;var n=s.gesture;if(!r.gestures){if(t.type!=="touchmove"||t.type==="touchmove"&&t.targetTouches.length<2){return}s.fakeGestureMoved=true;n.scaleMove=Zoom.getDistanceBetweenTouches(t)}if(!n.$imageEl||n.$imageEl.length===0){if(t.type==="gesturechange")s.onGestureStart(t);return}if(r.gestures){s.scale=t.scale*s.currentScale}else{s.scale=n.scaleMove/n.scaleStart*s.currentScale}if(s.scale>n.maxRatio){s.scale=n.maxRatio-1+Math.pow(s.scale-n.maxRatio+1,.5)}if(s.scale<i.minRatio){s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)}n.$imageEl.transform("translate3d(0,0,0) scale("+s.scale+")")},onGestureEnd:function e(t){var a=this;var r=a.device;var i=a.support;var s=a.params.zoom;var n=a.zoom;var o=n.gesture;if(!i.gestures){if(!n.fakeGestureTouched||!n.fakeGestureMoved){return}if(t.type!=="touchend"||t.type==="touchend"&&t.changedTouches.length<2&&!r.android){return}n.fakeGestureTouched=false;n.fakeGestureMoved=false}if(!o.$imageEl||o.$imageEl.length===0)return;n.scale=Math.max(Math.min(n.scale,o.maxRatio),s.minRatio);o.$imageEl.transition(a.params.speed).transform("translate3d(0,0,0) scale("+n.scale+")");n.currentScale=n.scale;n.isScaling=false;if(n.scale===1)o.$slideEl=undefined},onTouchStart:function e(t){var a=this;var r=a.device;var i=a.zoom;var s=i.gesture,n=i.image;if(!s.$imageEl||s.$imageEl.length===0)return;if(n.isTouched)return;if(r.android&&t.cancelable)t.preventDefault();n.isTouched=true;n.touchesStart.x=t.type==="touchstart"?t.targetTouches[0].pageX:t.pageX;n.touchesStart.y=t.type==="touchstart"?t.targetTouches[0].pageY:t.pageY},onTouchMove:function e(t){var a=this;var r=a.zoom;var i=r.gesture,s=r.image,n=r.velocity;if(!i.$imageEl||i.$imageEl.length===0)return;a.allowClick=false;if(!s.isTouched||!i.$slideEl)return;if(!s.isMoved){s.width=i.$imageEl[0].offsetWidth;s.height=i.$imageEl[0].offsetHeight;s.startX=getTranslate(i.$imageWrapEl[0],"x")||0;s.startY=getTranslate(i.$imageWrapEl[0],"y")||0;i.slideWidth=i.$slideEl[0].offsetWidth;i.slideHeight=i.$slideEl[0].offsetHeight;i.$imageWrapEl.transition(0)}var o=s.width*r.scale;var l=s.height*r.scale;if(o<i.slideWidth&&l<i.slideHeight)return;s.minX=Math.min(i.slideWidth/2-o/2,0);s.maxX=-s.minX;s.minY=Math.min(i.slideHeight/2-l/2,0);s.maxY=-s.minY;s.touchesCurrent.x=t.type==="touchmove"?t.targetTouches[0].pageX:t.pageX;s.touchesCurrent.y=t.type==="touchmove"?t.targetTouches[0].pageY:t.pageY;if(!s.isMoved&&!r.isScaling){if(a.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x)){s.isTouched=false;return}if(!a.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y)){s.isTouched=false;return}}if(t.cancelable){t.preventDefault()}t.stopPropagation();s.isMoved=true;s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX;s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY;if(s.currentX<s.minX){s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)}if(s.currentX>s.maxX){s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)}if(s.currentY<s.minY){s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)}if(s.currentY>s.maxY){s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)}if(!n.prevPositionX)n.prevPositionX=s.touchesCurrent.x;if(!n.prevPositionY)n.prevPositionY=s.touchesCurrent.y;if(!n.prevTime)n.prevTime=Date.now();n.x=(s.touchesCurrent.x-n.prevPositionX)/(Date.now()-n.prevTime)/2;n.y=(s.touchesCurrent.y-n.prevPositionY)/(Date.now()-n.prevTime)/2;if(Math.abs(s.touchesCurrent.x-n.prevPositionX)<2)n.x=0;if(Math.abs(s.touchesCurrent.y-n.prevPositionY)<2)n.y=0;n.prevPositionX=s.touchesCurrent.x;n.prevPositionY=s.touchesCurrent.y;n.prevTime=Date.now();i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")},onTouchEnd:function e(){var t=this;var a=t.zoom;var r=a.gesture,i=a.image,s=a.velocity;if(!r.$imageEl||r.$imageEl.length===0)return;if(!i.isTouched||!i.isMoved){i.isTouched=false;i.isMoved=false;return}i.isTouched=false;i.isMoved=false;var n=300;var o=300;var l=s.x*n;var d=i.currentX+l;var p=s.y*o;var u=i.currentY+p;if(s.x!==0)n=Math.abs((d-i.currentX)/s.x);if(s.y!==0)o=Math.abs((u-i.currentY)/s.y);var f=Math.max(n,o);i.currentX=d;i.currentY=u;var c=i.width*a.scale;var v=i.height*a.scale;i.minX=Math.min(r.slideWidth/2-c/2,0);i.maxX=-i.minX;i.minY=Math.min(r.slideHeight/2-v/2,0);i.maxY=-i.minY;i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX);i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY);r.$imageWrapEl.transition(f).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")},onTransitionEnd:function e(){var t=this;var a=t.zoom;var r=a.gesture;if(r.$slideEl&&t.previousIndex!==t.activeIndex){if(r.$imageEl){r.$imageEl.transform("translate3d(0,0,0) scale(1)")}if(r.$imageWrapEl){r.$imageWrapEl.transform("translate3d(0,0,0)")}a.scale=1;a.currentScale=1;r.$slideEl=undefined;r.$imageEl=undefined;r.$imageWrapEl=undefined}},toggle:function e(t){var a=this;var r=a.zoom;if(r.scale&&r.scale!==1){r.out()}else{r.in(t)}},in:function e(t){var a=this;var r=getWindow();var i=a.zoom;var s=a.params.zoom;var n=i.gesture,o=i.image;if(!n.$slideEl){if(t&&t.target){n.$slideEl=$(t.target).closest("."+a.params.slideClass)}if(!n.$slideEl){if(a.params.virtual&&a.params.virtual.enabled&&a.virtual){n.$slideEl=a.$wrapperEl.children("."+a.params.slideActiveClass)}else{n.$slideEl=a.slides.eq(a.activeIndex)}}n.$imageEl=n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");n.$imageWrapEl=n.$imageEl.parent("."+s.containerClass)}if(!n.$imageEl||n.$imageEl.length===0||!n.$imageWrapEl||n.$imageWrapEl.length===0)return;n.$slideEl.addClass(""+s.zoomedSlideClass);var l;var d;var p;var u;var f;var c;var v;var h;var m;var g;var w;var b;var y;var x;var E;var C;var T;var S;if(typeof o.touchesStart.x==="undefined"&&t){l=t.type==="touchend"?t.changedTouches[0].pageX:t.pageX;d=t.type==="touchend"?t.changedTouches[0].pageY:t.pageY}else{l=o.touchesStart.x;d=o.touchesStart.y}i.scale=n.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio;i.currentScale=n.$imageWrapEl.attr("data-swiper-zoom")||s.maxRatio;if(t){T=n.$slideEl[0].offsetWidth;S=n.$slideEl[0].offsetHeight;p=n.$slideEl.offset().left+r.scrollX;u=n.$slideEl.offset().top+r.scrollY;f=p+T/2-l;c=u+S/2-d;m=n.$imageEl[0].offsetWidth;g=n.$imageEl[0].offsetHeight;w=m*i.scale;b=g*i.scale;y=Math.min(T/2-w/2,0);x=Math.min(S/2-b/2,0);E=-y;C=-x;v=f*i.scale;h=c*i.scale;if(v<y){v=y}if(v>E){v=E}if(h<x){h=x}if(h>C){h=C}}else{v=0;h=0}n.$imageWrapEl.transition(300).transform("translate3d("+v+"px, "+h+"px,0)");n.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+i.scale+")")},out:function e(){var t=this;var a=t.zoom;var r=t.params.zoom;var i=a.gesture;if(!i.$slideEl){if(t.params.virtual&&t.params.virtual.enabled&&t.virtual){i.$slideEl=t.$wrapperEl.children("."+t.params.slideActiveClass)}else{i.$slideEl=t.slides.eq(t.activeIndex)}i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");i.$imageWrapEl=i.$imageEl.parent("."+r.containerClass)}if(!i.$imageEl||i.$imageEl.length===0||!i.$imageWrapEl||i.$imageWrapEl.length===0)return;a.scale=1;a.currentScale=1;i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");i.$slideEl.removeClass(""+r.zoomedSlideClass);i.$slideEl=undefined},toggleGestures:function e(t){var a=this;var r=a.zoom;var i=r.slideSelector,s=r.passiveListener;a.$wrapperEl[t]("gesturestart",i,r.onGestureStart,s);a.$wrapperEl[t]("gesturechange",i,r.onGestureChange,s);a.$wrapperEl[t]("gestureend",i,r.onGestureEnd,s)},enableGestures:function e(){if(this.zoom.gesturesEnabled)return;this.zoom.gesturesEnabled=true;this.zoom.toggleGestures("on")},disableGestures:function e(){if(!this.zoom.gesturesEnabled)return;this.zoom.gesturesEnabled=false;this.zoom.toggleGestures("off")},enable:function e(){var t=this;var a=t.support;var r=t.zoom;if(r.enabled)return;r.enabled=true;var i=t.touchEvents.start==="touchstart"&&a.passiveListener&&t.params.passiveListeners?{passive:true,capture:false}:false;var s=a.passiveListener?{passive:false,capture:true}:true;var n="."+t.params.slideClass;t.zoom.passiveListener=i;t.zoom.slideSelector=n;if(a.gestures){t.$wrapperEl.on(t.touchEvents.start,t.zoom.enableGestures,i);t.$wrapperEl.on(t.touchEvents.end,t.zoom.disableGestures,i)}else if(t.touchEvents.start==="touchstart"){t.$wrapperEl.on(t.touchEvents.start,n,r.onGestureStart,i);t.$wrapperEl.on(t.touchEvents.move,n,r.onGestureChange,s);t.$wrapperEl.on(t.touchEvents.end,n,r.onGestureEnd,i);if(t.touchEvents.cancel){t.$wrapperEl.on(t.touchEvents.cancel,n,r.onGestureEnd,i)}}t.$wrapperEl.on(t.touchEvents.move,"."+t.params.zoom.containerClass,r.onTouchMove,s)},disable:function e(){var t=this;var a=t.zoom;if(!a.enabled)return;var r=t.support;t.zoom.enabled=false;var i=t.touchEvents.start==="touchstart"&&r.passiveListener&&t.params.passiveListeners?{passive:true,capture:false}:false;var s=r.passiveListener?{passive:false,capture:true}:true;var n="."+t.params.slideClass;if(r.gestures){t.$wrapperEl.off(t.touchEvents.start,t.zoom.enableGestures,i);t.$wrapperEl.off(t.touchEvents.end,t.zoom.disableGestures,i)}else if(t.touchEvents.start==="touchstart"){t.$wrapperEl.off(t.touchEvents.start,n,a.onGestureStart,i);t.$wrapperEl.off(t.touchEvents.move,n,a.onGestureChange,s);t.$wrapperEl.off(t.touchEvents.end,n,a.onGestureEnd,i);if(t.touchEvents.cancel){t.$wrapperEl.off(t.touchEvents.cancel,n,a.onGestureEnd,i)}}t.$wrapperEl.off(t.touchEvents.move,"."+t.params.zoom.containerClass,a.onTouchMove,s)}};var Zoom$1={name:"zoom",params:{zoom:{enabled:false,maxRatio:3,minRatio:1,toggle:true,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function e(){var t=this;bindModuleMethods(t,{zoom:_extends$b({enabled:false,scale:1,currentScale:1,isScaling:false,gesture:{$slideEl:undefined,slideWidth:undefined,slideHeight:undefined,$imageEl:undefined,$imageWrapEl:undefined,maxRatio:3},image:{isTouched:undefined,isMoved:undefined,currentX:undefined,currentY:undefined,minX:undefined,minY:undefined,maxX:undefined,maxY:undefined,width:undefined,height:undefined,startX:undefined,startY:undefined,touchesStart:{},touchesCurrent:{}},velocity:{x:undefined,y:undefined,prevPositionX:undefined,prevPositionY:undefined,prevTime:undefined}},Zoom)});var a=1;Object.defineProperty(t.zoom,"scale",{get:function e(){return a},set:function e(r){if(a!==r){var i=t.zoom.gesture.$imageEl?t.zoom.gesture.$imageEl[0]:undefined;var s=t.zoom.gesture.$slideEl?t.zoom.gesture.$slideEl[0]:undefined;t.emit("zoomChange",r,i,s)}a=r}})},on:{init:function e(t){if(t.params.zoom.enabled){t.zoom.enable()}},destroy:function e(t){t.zoom.disable()},touchStart:function e(t,a){if(!t.zoom.enabled)return;t.zoom.onTouchStart(a)},touchEnd:function e(t,a){if(!t.zoom.enabled)return;t.zoom.onTouchEnd(a)},doubleTap:function e(t,a){if(!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle){t.zoom.toggle(a)}},transitionEnd:function e(t){if(t.zoom.enabled&&t.params.zoom.enabled){t.zoom.onTransitionEnd()}},slideChange:function e(t){if(t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode){t.zoom.onTransitionEnd()}}}};function _extends$a(){_extends$a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$a.apply(this,arguments)}var Lazy={loadInSlide:function e(t,a){if(a===void 0){a=true}var r=this;var i=r.params.lazy;if(typeof t==="undefined")return;if(r.slides.length===0)return;var s=r.virtual&&r.params.virtual.enabled;var n=s?r.$wrapperEl.children("."+r.params.slideClass+'[data-swiper-slide-index="'+t+'"]'):r.slides.eq(t);var o=n.find("."+i.elementClass+":not(."+i.loadedClass+"):not(."+i.loadingClass+")");if(n.hasClass(i.elementClass)&&!n.hasClass(i.loadedClass)&&!n.hasClass(i.loadingClass)){o.push(n[0])}if(o.length===0)return;o.each((function(e){var t=$(e);t.addClass(i.loadingClass);var s=t.attr("data-background");var o=t.attr("data-src");var l=t.attr("data-srcset");var d=t.attr("data-sizes");var p=t.parent("picture");r.loadImage(t[0],o||s,l,d,false,(function(){if(typeof r==="undefined"||r===null||!r||r&&!r.params||r.destroyed)return;if(s){t.css("background-image",'url("'+s+'")');t.removeAttr("data-background")}else{if(l){t.attr("srcset",l);t.removeAttr("data-srcset")}if(d){t.attr("sizes",d);t.removeAttr("data-sizes")}if(p.length){p.children("source").each((function(e){var t=$(e);if(t.attr("data-srcset")){t.attr("srcset",t.attr("data-srcset"));t.removeAttr("data-srcset")}}))}if(o){t.attr("src",o);t.removeAttr("data-src")}}t.addClass(i.loadedClass).removeClass(i.loadingClass);n.find("."+i.preloaderClass).remove();if(r.params.loop&&a){var e=n.attr("data-swiper-slide-index");if(n.hasClass(r.params.slideDuplicateClass)){var u=r.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+r.params.slideDuplicateClass+")");r.lazy.loadInSlide(u.index(),false)}else{var f=r.$wrapperEl.children("."+r.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');r.lazy.loadInSlide(f.index(),false)}}r.emit("lazyImageReady",n[0],t[0]);if(r.params.autoHeight){r.updateAutoHeight()}}));r.emit("lazyImageLoad",n[0],t[0])}))},load:function e(){var t=this;var a=t.$wrapperEl,r=t.params,i=t.slides,s=t.activeIndex;var n=t.virtual&&r.virtual.enabled;var o=r.lazy;var l=r.slidesPerView;if(l==="auto"){l=0}function d(e){if(n){if(a.children("."+r.slideClass+'[data-swiper-slide-index="'+e+'"]').length){return true}}else if(i[e])return true;return false}function p(e){if(n){return $(e).attr("data-swiper-slide-index")}return $(e).index()}if(!t.lazy.initialImageLoaded)t.lazy.initialImageLoaded=true;if(t.params.watchSlidesVisibility){a.children("."+r.slideVisibleClass).each((function(e){var a=n?$(e).attr("data-swiper-slide-index"):$(e).index();t.lazy.loadInSlide(a)}))}else if(l>1){for(var u=s;u<s+l;u+=1){if(d(u))t.lazy.loadInSlide(u)}}else{t.lazy.loadInSlide(s)}if(o.loadPrevNext){if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){var f=o.loadPrevNextAmount;var c=l;var v=Math.min(s+c+Math.max(f,c),i.length);var h=Math.max(s-Math.max(c,f),0);for(var m=s+l;m<v;m+=1){if(d(m))t.lazy.loadInSlide(m)}for(var g=h;g<s;g+=1){if(d(g))t.lazy.loadInSlide(g)}}else{var w=a.children("."+r.slideNextClass);if(w.length>0)t.lazy.loadInSlide(p(w));var b=a.children("."+r.slidePrevClass);if(b.length>0)t.lazy.loadInSlide(p(b))}}},checkInViewOnLoad:function e(){var t=getWindow();var a=this;if(!a||a.destroyed)return;var r=a.params.lazy.scrollingElement?$(a.params.lazy.scrollingElement):$(t);var i=r[0]===t;var s=i?t.innerWidth:r[0].offsetWidth;var n=i?t.innerHeight:r[0].offsetHeight;var o=a.$el.offset();var l=a.rtlTranslate;var d=false;if(l)o.left-=a.$el[0].scrollLeft;var p=[[o.left,o.top],[o.left+a.width,o.top],[o.left,o.top+a.height],[o.left+a.width,o.top+a.height]];for(var u=0;u<p.length;u+=1){var f=p[u];if(f[0]>=0&&f[0]<=s&&f[1]>=0&&f[1]<=n){if(f[0]===0&&f[1]===0)continue;d=true}}var c=a.touchEvents.start==="touchstart"&&a.support.passiveListener&&a.params.passiveListeners?{passive:true,capture:false}:false;if(d){a.lazy.load();r.off("scroll",a.lazy.checkInViewOnLoad,c)}else if(!a.lazy.scrollHandlerAttached){a.lazy.scrollHandlerAttached=true;r.on("scroll",a.lazy.checkInViewOnLoad,c)}}};var Lazy$1={name:"lazy",params:{lazy:{checkInView:false,enabled:false,loadPrevNext:false,loadPrevNextAmount:1,loadOnTransitionStart:false,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function e(){var t=this;bindModuleMethods(t,{lazy:_extends$a({initialImageLoaded:false},Lazy)})},on:{beforeInit:function e(t){if(t.params.lazy.enabled&&t.params.preloadImages){t.params.preloadImages=false}},init:function e(t){if(t.params.lazy.enabled&&!t.params.loop&&t.params.initialSlide===0){if(t.params.lazy.checkInView){t.lazy.checkInViewOnLoad()}else{t.lazy.load()}}},scroll:function e(t){if(t.params.freeMode&&!t.params.freeModeSticky){t.lazy.load()}},"scrollbarDragMove resize _freeModeNoMomentumRelease":function e(t){if(t.params.lazy.enabled){t.lazy.load()}},transitionStart:function e(t){if(t.params.lazy.enabled){if(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!t.lazy.initialImageLoaded){t.lazy.load()}}},transitionEnd:function e(t){if(t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart){t.lazy.load()}},slideChange:function e(t){var a=t.params,r=a.lazy,i=a.cssMode,s=a.watchSlidesVisibility,n=a.watchSlidesProgress,o=a.touchReleaseOnEdges,l=a.resistanceRatio;if(r.enabled&&(i||(s||n)&&(o||l===0))){t.lazy.load()}}}};function _extends$9(){_extends$9=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$9.apply(this,arguments)}var Controller={LinearSpline:function e(t,a){var r=function e(){var t;var a;var r;return function(e,i){a=-1;t=e.length;while(t-a>1){r=t+a>>1;if(e[r]<=i){a=r}else{t=r}}return t}}();this.x=t;this.y=a;this.lastIndex=t.length-1;var i;var s;this.interpolate=function e(t){if(!t)return 0;s=r(this.x,t);i=s-1;return(t-this.x[i])*(this.y[s]-this.y[i])/(this.x[s]-this.x[i])+this.y[i]};return this},getInterpolateFunction:function e(t){var a=this;if(!a.controller.spline){a.controller.spline=a.params.loop?new Controller.LinearSpline(a.slidesGrid,t.slidesGrid):new Controller.LinearSpline(a.snapGrid,t.snapGrid)}},setTranslate:function e(t,a){var r=this;var i=r.controller.control;var s;var n;var o=r.constructor;function l(e){var t=r.rtlTranslate?-r.translate:r.translate;if(r.params.controller.by==="slide"){r.controller.getInterpolateFunction(e);n=-r.controller.spline.interpolate(-t)}if(!n||r.params.controller.by==="container"){s=(e.maxTranslate()-e.minTranslate())/(r.maxTranslate()-r.minTranslate());n=(t-r.minTranslate())*s+e.minTranslate()}if(r.params.controller.inverse){n=e.maxTranslate()-n}e.updateProgress(n);e.setTranslate(n,r);e.updateActiveIndex();e.updateSlidesClasses()}if(Array.isArray(i)){for(var d=0;d<i.length;d+=1){if(i[d]!==a&&i[d]instanceof o){l(i[d])}}}else if(i instanceof o&&a!==i){l(i)}},setTransition:function e(t,a){var r=this;var i=r.constructor;var s=r.controller.control;var n;function o(e){e.setTransition(t,r);if(t!==0){e.transitionStart();if(e.params.autoHeight){nextTick((function(){e.updateAutoHeight()}))}e.$wrapperEl.transitionEnd((function(){if(!s)return;if(e.params.loop&&r.params.controller.by==="slide"){e.loopFix()}e.transitionEnd()}))}}if(Array.isArray(s)){for(n=0;n<s.length;n+=1){if(s[n]!==a&&s[n]instanceof i){o(s[n])}}}else if(s instanceof i&&a!==s){o(s)}}};var Controller$1={name:"controller",params:{controller:{control:undefined,inverse:false,by:"slide"}},create:function e(){var t=this;bindModuleMethods(t,{controller:_extends$9({control:t.params.controller.control},Controller)})},on:{update:function e(t){if(!t.controller.control)return;if(t.controller.spline){t.controller.spline=undefined;delete t.controller.spline}},resize:function e(t){if(!t.controller.control)return;if(t.controller.spline){t.controller.spline=undefined;delete t.controller.spline}},observerUpdate:function e(t){if(!t.controller.control)return;if(t.controller.spline){t.controller.spline=undefined;delete t.controller.spline}},setTranslate:function e(t,a,r){if(!t.controller.control)return;t.controller.setTranslate(a,r)},setTransition:function e(t,a,r){if(!t.controller.control)return;t.controller.setTransition(a,r)}}};function _extends$8(){_extends$8=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$8.apply(this,arguments)}var A11y={getRandomNumber:function e(t){if(t===void 0){t=16}var a=function e(){return Math.round(16*Math.random()).toString(16)};return"x".repeat(t).replace(/x/g,a)},makeElFocusable:function e(t){t.attr("tabIndex","0");return t},makeElNotFocusable:function e(t){t.attr("tabIndex","-1");return t},addElRole:function e(t,a){t.attr("role",a);return t},addElRoleDescription:function e(t,a){t.attr("aria-roledescription",a);return t},addElControls:function e(t,a){t.attr("aria-controls",a);return t},addElLabel:function e(t,a){t.attr("aria-label",a);return t},addElId:function e(t,a){t.attr("id",a);return t},addElLive:function e(t,a){t.attr("aria-live",a);return t},disableEl:function e(t){t.attr("aria-disabled",true);return t},enableEl:function e(t){t.attr("aria-disabled",false);return t},onEnterOrSpaceKey:function e(t){if(t.keyCode!==13&&t.keyCode!==32)return;var a=this;var r=a.params.a11y;var i=$(t.target);if(a.navigation&&a.navigation.$nextEl&&i.is(a.navigation.$nextEl)){if(!(a.isEnd&&!a.params.loop)){a.slideNext()}if(a.isEnd){a.a11y.notify(r.lastSlideMessage)}else{a.a11y.notify(r.nextSlideMessage)}}if(a.navigation&&a.navigation.$prevEl&&i.is(a.navigation.$prevEl)){if(!(a.isBeginning&&!a.params.loop)){a.slidePrev()}if(a.isBeginning){a.a11y.notify(r.firstSlideMessage)}else{a.a11y.notify(r.prevSlideMessage)}}if(a.pagination&&i.is(classesToSelector(a.params.pagination.bulletClass))){i[0].click()}},notify:function e(t){var a=this;var r=a.a11y.liveRegion;if(r.length===0)return;r.html("");r.html(t)},updateNavigation:function e(){var t=this;if(t.params.loop||!t.navigation)return;var a=t.navigation,r=a.$nextEl,i=a.$prevEl;if(i&&i.length>0){if(t.isBeginning){t.a11y.disableEl(i);t.a11y.makeElNotFocusable(i)}else{t.a11y.enableEl(i);t.a11y.makeElFocusable(i)}}if(r&&r.length>0){if(t.isEnd){t.a11y.disableEl(r);t.a11y.makeElNotFocusable(r)}else{t.a11y.enableEl(r);t.a11y.makeElFocusable(r)}}},updatePagination:function e(){var t=this;var a=t.params.a11y;if(t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length){t.pagination.bullets.each((function(e){var r=$(e);t.a11y.makeElFocusable(r);if(!t.params.pagination.renderBullet){t.a11y.addElRole(r,"button");t.a11y.addElLabel(r,a.paginationBulletMessage.replace(/\{\{index\}\}/,r.index()+1))}}))}},init:function e(){var t=this;var a=t.params.a11y;t.$el.append(t.a11y.liveRegion);var r=t.$el;if(a.containerRoleDescriptionMessage){t.a11y.addElRoleDescription(r,a.containerRoleDescriptionMessage)}if(a.containerMessage){t.a11y.addElLabel(r,a.containerMessage)}var i=t.$wrapperEl;var s=i.attr("id")||"swiper-wrapper-"+t.a11y.getRandomNumber(16);var n=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";t.a11y.addElId(i,s);t.a11y.addElLive(i,n);if(a.itemRoleDescriptionMessage){t.a11y.addElRoleDescription($(t.slides),a.itemRoleDescriptionMessage)}t.a11y.addElRole($(t.slides),a.slideRole);var o=t.params.loop?t.slides.filter((function(e){return!e.classList.contains(t.params.slideDuplicateClass)})).length:t.slides.length;t.slides.each((function(e,r){var i=$(e);var s=t.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):r;var n=a.slideLabelMessage.replace(/\{\{index\}\}/,s+1).replace(/\{\{slidesLength\}\}/,o);t.a11y.addElLabel(i,n)}));var l;var d;if(t.navigation&&t.navigation.$nextEl){l=t.navigation.$nextEl}if(t.navigation&&t.navigation.$prevEl){d=t.navigation.$prevEl}if(l&&l.length){t.a11y.makeElFocusable(l);if(l[0].tagName!=="BUTTON"){t.a11y.addElRole(l,"button");l.on("keydown",t.a11y.onEnterOrSpaceKey)}t.a11y.addElLabel(l,a.nextSlideMessage);t.a11y.addElControls(l,s)}if(d&&d.length){t.a11y.makeElFocusable(d);if(d[0].tagName!=="BUTTON"){t.a11y.addElRole(d,"button");d.on("keydown",t.a11y.onEnterOrSpaceKey)}t.a11y.addElLabel(d,a.prevSlideMessage);t.a11y.addElControls(d,s)}if(t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length){t.pagination.$el.on("keydown",classesToSelector(t.params.pagination.bulletClass),t.a11y.onEnterOrSpaceKey)}},destroy:function e(){var t=this;if(t.a11y.liveRegion&&t.a11y.liveRegion.length>0)t.a11y.liveRegion.remove();var a;var r;if(t.navigation&&t.navigation.$nextEl){a=t.navigation.$nextEl}if(t.navigation&&t.navigation.$prevEl){r=t.navigation.$prevEl}if(a){a.off("keydown",t.a11y.onEnterOrSpaceKey)}if(r){r.off("keydown",t.a11y.onEnterOrSpaceKey)}if(t.pagination&&t.params.pagination.clickable&&t.pagination.bullets&&t.pagination.bullets.length){t.pagination.$el.off("keydown",classesToSelector(t.params.pagination.bulletClass),t.a11y.onEnterOrSpaceKey)}}};var A11y$1={name:"a11y",params:{a11y:{enabled:true,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}},create:function e(){var t=this;bindModuleMethods(t,{a11y:_extends$8({},A11y,{liveRegion:$('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')})})},on:{afterInit:function e(t){if(!t.params.a11y.enabled)return;t.a11y.init();t.a11y.updateNavigation()},toEdge:function e(t){if(!t.params.a11y.enabled)return;t.a11y.updateNavigation()},fromEdge:function e(t){if(!t.params.a11y.enabled)return;t.a11y.updateNavigation()},paginationUpdate:function e(t){if(!t.params.a11y.enabled)return;t.a11y.updatePagination()},destroy:function e(t){if(!t.params.a11y.enabled)return;t.a11y.destroy()}}};function _extends$7(){_extends$7=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$7.apply(this,arguments)}var History={init:function e(){var t=this;var a=getWindow();if(!t.params.history)return;if(!a.history||!a.history.pushState){t.params.history.enabled=false;t.params.hashNavigation.enabled=true;return}var r=t.history;r.initialized=true;r.paths=History.getPathValues(t.params.url);if(!r.paths.key&&!r.paths.value)return;r.scrollToSlide(0,r.paths.value,t.params.runCallbacksOnInit);if(!t.params.history.replaceState){a.addEventListener("popstate",t.history.setHistoryPopState)}},destroy:function e(){var t=this;var a=getWindow();if(!t.params.history.replaceState){a.removeEventListener("popstate",t.history.setHistoryPopState)}},setHistoryPopState:function e(){var t=this;t.history.paths=History.getPathValues(t.params.url);t.history.scrollToSlide(t.params.speed,t.history.paths.value,false)},getPathValues:function e(t){var a=getWindow();var r;if(t){r=new URL(t)}else{r=a.location}var i=r.pathname.slice(1).split("/").filter((function(e){return e!==""}));var s=i.length;var n=i[s-2];var o=i[s-1];return{key:n,value:o}},setHistory:function e(t,a){var r=this;var i=getWindow();if(!r.history.initialized||!r.params.history.enabled)return;var s;if(r.params.url){s=new URL(r.params.url)}else{s=i.location}var n=r.slides.eq(a);var o=History.slugify(n.attr("data-history"));if(r.params.history.root.length>0){var l=r.params.history.root;if(l[l.length-1]==="/")l=l.slice(0,l.length-1);o=l+"/"+t+"/"+o}else if(!s.pathname.includes(t)){o=t+"/"+o}var d=i.history.state;if(d&&d.value===o){return}if(r.params.history.replaceState){i.history.replaceState({value:o},null,o)}else{i.history.pushState({value:o},null,o)}},slugify:function e(t){return t.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function e(t,a,r){var i=this;if(a){for(var s=0,n=i.slides.length;s<n;s+=1){var o=i.slides.eq(s);var l=History.slugify(o.attr("data-history"));if(l===a&&!o.hasClass(i.params.slideDuplicateClass)){var d=o.index();i.slideTo(d,t,r)}}}else{i.slideTo(0,t,r)}}};var History$1={name:"history",params:{history:{enabled:false,root:"",replaceState:false,key:"slides"}},create:function e(){var t=this;bindModuleMethods(t,{history:_extends$7({},History)})},on:{init:function e(t){if(t.params.history.enabled){t.history.init()}},destroy:function e(t){if(t.params.history.enabled){t.history.destroy()}},"transitionEnd _freeModeNoMomentumRelease":function e(t){if(t.history.initialized){t.history.setHistory(t.params.history.key,t.activeIndex)}},slideChange:function e(t){if(t.history.initialized&&t.params.cssMode){t.history.setHistory(t.params.history.key,t.activeIndex)}}}};function _extends$6(){_extends$6=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$6.apply(this,arguments)}var HashNavigation={onHashChange:function e(){var t=this;var a=getDocument();t.emit("hashChange");var r=a.location.hash.replace("#","");var i=t.slides.eq(t.activeIndex).attr("data-hash");if(r!==i){var s=t.$wrapperEl.children("."+t.params.slideClass+'[data-hash="'+r+'"]').index();if(typeof s==="undefined")return;t.slideTo(s)}},setHash:function e(){var t=this;var a=getWindow();var r=getDocument();if(!t.hashNavigation.initialized||!t.params.hashNavigation.enabled)return;if(t.params.hashNavigation.replaceState&&a.history&&a.history.replaceState){a.history.replaceState(null,null,"#"+t.slides.eq(t.activeIndex).attr("data-hash")||false);t.emit("hashSet")}else{var i=t.slides.eq(t.activeIndex);var s=i.attr("data-hash")||i.attr("data-history");r.location.hash=s||"";t.emit("hashSet")}},init:function e(){var t=this;var a=getDocument();var r=getWindow();if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;t.hashNavigation.initialized=true;var i=a.location.hash.replace("#","");if(i){var s=0;for(var n=0,o=t.slides.length;n<o;n+=1){var l=t.slides.eq(n);var d=l.attr("data-hash")||l.attr("data-history");if(d===i&&!l.hasClass(t.params.slideDuplicateClass)){var p=l.index();t.slideTo(p,s,t.params.runCallbacksOnInit,true)}}}if(t.params.hashNavigation.watchState){$(r).on("hashchange",t.hashNavigation.onHashChange)}},destroy:function e(){var t=this;var a=getWindow();if(t.params.hashNavigation.watchState){$(a).off("hashchange",t.hashNavigation.onHashChange)}}};var HashNavigation$1={name:"hash-navigation",params:{hashNavigation:{enabled:false,replaceState:false,watchState:false}},create:function e(){var t=this;bindModuleMethods(t,{hashNavigation:_extends$6({initialized:false},HashNavigation)})},on:{init:function e(t){if(t.params.hashNavigation.enabled){t.hashNavigation.init()}},destroy:function e(t){if(t.params.hashNavigation.enabled){t.hashNavigation.destroy()}},"transitionEnd _freeModeNoMomentumRelease":function e(t){if(t.hashNavigation.initialized){t.hashNavigation.setHash()}},slideChange:function e(t){if(t.hashNavigation.initialized&&t.params.cssMode){t.hashNavigation.setHash()}}}};function _extends$5(){_extends$5=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$5.apply(this,arguments)}var Autoplay={run:function e(){var t=this;var a=t.slides.eq(t.activeIndex);var r=t.params.autoplay.delay;if(a.attr("data-swiper-autoplay")){r=a.attr("data-swiper-autoplay")||t.params.autoplay.delay}clearTimeout(t.autoplay.timeout);t.autoplay.timeout=nextTick((function(){var e;if(t.params.autoplay.reverseDirection){if(t.params.loop){t.loopFix();e=t.slidePrev(t.params.speed,true,true);t.emit("autoplay")}else if(!t.isBeginning){e=t.slidePrev(t.params.speed,true,true);t.emit("autoplay")}else if(!t.params.autoplay.stopOnLastSlide){e=t.slideTo(t.slides.length-1,t.params.speed,true,true);t.emit("autoplay")}else{t.autoplay.stop()}}else if(t.params.loop){t.loopFix();e=t.slideNext(t.params.speed,true,true);t.emit("autoplay")}else if(!t.isEnd){e=t.slideNext(t.params.speed,true,true);t.emit("autoplay")}else if(!t.params.autoplay.stopOnLastSlide){e=t.slideTo(0,t.params.speed,true,true);t.emit("autoplay")}else{t.autoplay.stop()}if(t.params.cssMode&&t.autoplay.running)t.autoplay.run();else if(e===false){t.autoplay.run()}}),r)},start:function e(){var t=this;if(typeof t.autoplay.timeout!=="undefined")return false;if(t.autoplay.running)return false;t.autoplay.running=true;t.emit("autoplayStart");t.autoplay.run();return true},stop:function e(){var t=this;if(!t.autoplay.running)return false;if(typeof t.autoplay.timeout==="undefined")return false;if(t.autoplay.timeout){clearTimeout(t.autoplay.timeout);t.autoplay.timeout=undefined}t.autoplay.running=false;t.emit("autoplayStop");return true},pause:function e(t){var a=this;if(!a.autoplay.running)return;if(a.autoplay.paused)return;if(a.autoplay.timeout)clearTimeout(a.autoplay.timeout);a.autoplay.paused=true;if(t===0||!a.params.autoplay.waitForTransition){a.autoplay.paused=false;a.autoplay.run()}else{["transitionend","webkitTransitionEnd"].forEach((function(e){a.$wrapperEl[0].addEventListener(e,a.autoplay.onTransitionEnd)}))}},onVisibilityChange:function e(){var t=this;var a=getDocument();if(a.visibilityState==="hidden"&&t.autoplay.running){t.autoplay.pause()}if(a.visibilityState==="visible"&&t.autoplay.paused){t.autoplay.run();t.autoplay.paused=false}},onTransitionEnd:function e(t){var a=this;if(!a||a.destroyed||!a.$wrapperEl)return;if(t.target!==a.$wrapperEl[0])return;["transitionend","webkitTransitionEnd"].forEach((function(e){a.$wrapperEl[0].removeEventListener(e,a.autoplay.onTransitionEnd)}));a.autoplay.paused=false;if(!a.autoplay.running){a.autoplay.stop()}else{a.autoplay.run()}},onMouseEnter:function e(){var t=this;if(t.params.autoplay.disableOnInteraction){t.autoplay.stop()}else{t.autoplay.pause()}["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].removeEventListener(e,t.autoplay.onTransitionEnd)}))},onMouseLeave:function e(){var t=this;if(t.params.autoplay.disableOnInteraction){return}t.autoplay.paused=false;t.autoplay.run()},attachMouseEvents:function e(){var t=this;if(t.params.autoplay.pauseOnMouseEnter){t.$el.on("mouseenter",t.autoplay.onMouseEnter);t.$el.on("mouseleave",t.autoplay.onMouseLeave)}},detachMouseEvents:function e(){var t=this;t.$el.off("mouseenter",t.autoplay.onMouseEnter);t.$el.off("mouseleave",t.autoplay.onMouseLeave)}};var Autoplay$1={name:"autoplay",params:{autoplay:{enabled:false,delay:3e3,waitForTransition:true,disableOnInteraction:true,stopOnLastSlide:false,reverseDirection:false,pauseOnMouseEnter:false}},create:function e(){var t=this;bindModuleMethods(t,{autoplay:_extends$5({},Autoplay,{running:false,paused:false})})},on:{init:function e(t){if(t.params.autoplay.enabled){t.autoplay.start();var a=getDocument();a.addEventListener("visibilitychange",t.autoplay.onVisibilityChange);t.autoplay.attachMouseEvents()}},beforeTransitionStart:function e(t,a,r){if(t.autoplay.running){if(r||!t.params.autoplay.disableOnInteraction){t.autoplay.pause(a)}else{t.autoplay.stop()}}},sliderFirstMove:function e(t){if(t.autoplay.running){if(t.params.autoplay.disableOnInteraction){t.autoplay.stop()}else{t.autoplay.pause()}}},touchEnd:function e(t){if(t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction){t.autoplay.run()}},destroy:function e(t){t.autoplay.detachMouseEvents();if(t.autoplay.running){t.autoplay.stop()}var a=getDocument();a.removeEventListener("visibilitychange",t.autoplay.onVisibilityChange)}}};function _extends$4(){_extends$4=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$4.apply(this,arguments)}var Fade={setTranslate:function e(){var t=this;var a=t.slides;for(var r=0;r<a.length;r+=1){var i=t.slides.eq(r);var s=i[0].swiperSlideOffset;var n=-s;if(!t.params.virtualTranslate)n-=t.translate;var o=0;if(!t.isHorizontal()){o=n;n=0}var l=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:l}).transform("translate3d("+n+"px, "+o+"px, 0px)")}},setTransition:function e(t){var a=this;var r=a.slides,i=a.$wrapperEl;r.transition(t);if(a.params.virtualTranslate&&t!==0){var s=false;r.transitionEnd((function(){if(s)return;if(!a||a.destroyed)return;s=true;a.animating=false;var e=["webkitTransitionEnd","transitionend"];for(var t=0;t<e.length;t+=1){i.trigger(e[t])}}))}}};var EffectFade={name:"effect-fade",params:{fadeEffect:{crossFade:false}},create:function e(){var t=this;bindModuleMethods(t,{fadeEffect:_extends$4({},Fade)})},on:{beforeInit:function e(t){if(t.params.effect!=="fade")return;t.classNames.push(t.params.containerModifierClass+"fade");var a={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,spaceBetween:0,virtualTranslate:true};extend(t.params,a);extend(t.originalParams,a)},setTranslate:function e(t){if(t.params.effect!=="fade")return;t.fadeEffect.setTranslate()},setTransition:function e(t,a){if(t.params.effect!=="fade")return;t.fadeEffect.setTransition(a)}}};function _extends$3(){_extends$3=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$3.apply(this,arguments)}var Cube={setTranslate:function e(){var t=this;var a=t.$el,r=t.$wrapperEl,i=t.slides,s=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.browser;var p=t.params.cubeEffect;var u=t.isHorizontal();var f=t.virtual&&t.params.virtual.enabled;var c=0;var v;if(p.shadow){if(u){v=r.find(".swiper-cube-shadow");if(v.length===0){v=$('<div class="swiper-cube-shadow"></div>');r.append(v)}v.css({height:s+"px"})}else{v=a.find(".swiper-cube-shadow");if(v.length===0){v=$('<div class="swiper-cube-shadow"></div>');a.append(v)}}}for(var h=0;h<i.length;h+=1){var m=i.eq(h);var g=h;if(f){g=parseInt(m.attr("data-swiper-slide-index"),10)}var w=g*90;var b=Math.floor(w/360);if(o){w=-w;b=Math.floor(-w/360)}var y=Math.max(Math.min(m[0].progress,1),-1);var x=0;var E=0;var C=0;if(g%4===0){x=-b*4*l;C=0}else if((g-1)%4===0){x=0;C=-b*4*l}else if((g-2)%4===0){x=l+b*4*l;C=l}else if((g-3)%4===0){x=-l;C=3*l+l*4*b}if(o){x=-x}if(!u){E=x;x=0}var T="rotateX("+(u?0:-w)+"deg) rotateY("+(u?w:0)+"deg) translate3d("+x+"px, "+E+"px, "+C+"px)";if(y<=1&&y>-1){c=g*90+y*90;if(o)c=-g*90-y*90}m.transform(T);if(p.slideShadows){var S=u?m.find(".swiper-slide-shadow-left"):m.find(".swiper-slide-shadow-top");var A=u?m.find(".swiper-slide-shadow-right"):m.find(".swiper-slide-shadow-bottom");if(S.length===0){S=$('<div class="swiper-slide-shadow-'+(u?"left":"top")+'"></div>');m.append(S)}if(A.length===0){A=$('<div class="swiper-slide-shadow-'+(u?"right":"bottom")+'"></div>');m.append(A)}if(S.length)S[0].style.opacity=Math.max(-y,0);if(A.length)A[0].style.opacity=Math.max(y,0)}}r.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"});if(p.shadow){if(u){v.transform("translate3d(0px, "+(s/2+p.shadowOffset)+"px, "+-s/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")")}else{var M=Math.abs(c)-Math.floor(Math.abs(c)/90)*90;var k=1.5-(Math.sin(M*2*Math.PI/360)/2+Math.cos(M*2*Math.PI/360)/2);var z=p.shadowScale;var P=p.shadowScale/k;var O=p.shadowOffset;v.transform("scale3d("+z+", 1, "+P+") translate3d(0px, "+(n/2+O)+"px, "+-n/2/P+"px) rotateX(-90deg)")}}var L=d.isSafari||d.isWebView?-l/2:0;r.transform("translate3d(0px,0,"+L+"px) rotateX("+(t.isHorizontal()?0:c)+"deg) rotateY("+(t.isHorizontal()?-c:0)+"deg)")},setTransition:function e(t){var a=this;var r=a.$el,i=a.slides;i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);if(a.params.cubeEffect.shadow&&!a.isHorizontal()){r.find(".swiper-cube-shadow").transition(t)}}};var EffectCube={name:"effect-cube",params:{cubeEffect:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:.94}},create:function e(){var t=this;bindModuleMethods(t,{cubeEffect:_extends$3({},Cube)})},on:{beforeInit:function e(t){if(t.params.effect!=="cube")return;t.classNames.push(t.params.containerModifierClass+"cube");t.classNames.push(t.params.containerModifierClass+"3d");var a={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,resistanceRatio:0,spaceBetween:0,centeredSlides:false,virtualTranslate:true};extend(t.params,a);extend(t.originalParams,a)},setTranslate:function e(t){if(t.params.effect!=="cube")return;t.cubeEffect.setTranslate()},setTransition:function e(t,a){if(t.params.effect!=="cube")return;t.cubeEffect.setTransition(a)}}};function _extends$2(){_extends$2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$2.apply(this,arguments)}var Flip={setTranslate:function e(){var t=this;var a=t.slides,r=t.rtlTranslate;for(var i=0;i<a.length;i+=1){var s=a.eq(i);var n=s[0].progress;if(t.params.flipEffect.limitRotation){n=Math.max(Math.min(s[0].progress,1),-1)}var o=s[0].swiperSlideOffset;var l=-180*n;var d=l;var p=0;var u=-o;var f=0;if(!t.isHorizontal()){f=u;u=0;p=-d;d=0}else if(r){d=-d}s[0].style.zIndex=-Math.abs(Math.round(n))+a.length;if(t.params.flipEffect.slideShadows){var c=t.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top");var v=t.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");if(c.length===0){c=$('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"left":"top")+'"></div>');s.append(c)}if(v.length===0){v=$('<div class="swiper-slide-shadow-'+(t.isHorizontal()?"right":"bottom")+'"></div>');s.append(v)}if(c.length)c[0].style.opacity=Math.max(-n,0);if(v.length)v[0].style.opacity=Math.max(n,0)}s.transform("translate3d("+u+"px, "+f+"px, 0px) rotateX("+p+"deg) rotateY("+d+"deg)")}},setTransition:function e(t){var a=this;var r=a.slides,i=a.activeIndex,s=a.$wrapperEl;r.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);if(a.params.virtualTranslate&&t!==0){var n=false;r.eq(i).transitionEnd((function e(){if(n)return;if(!a||a.destroyed)return;n=true;a.animating=false;var t=["webkitTransitionEnd","transitionend"];for(var r=0;r<t.length;r+=1){s.trigger(t[r])}}))}}};var EffectFlip={name:"effect-flip",params:{flipEffect:{slideShadows:true,limitRotation:true}},create:function e(){var t=this;bindModuleMethods(t,{flipEffect:_extends$2({},Flip)})},on:{beforeInit:function e(t){if(t.params.effect!=="flip")return;t.classNames.push(t.params.containerModifierClass+"flip");t.classNames.push(t.params.containerModifierClass+"3d");var a={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:true,spaceBetween:0,virtualTranslate:true};extend(t.params,a);extend(t.originalParams,a)},setTranslate:function e(t){if(t.params.effect!=="flip")return;t.flipEffect.setTranslate()},setTransition:function e(t,a){if(t.params.effect!=="flip")return;t.flipEffect.setTransition(a)}}};function _extends$1(){_extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends$1.apply(this,arguments)}var Coverflow={setTranslate:function e(){var t=this;var a=t.width,r=t.height,i=t.slides,s=t.slidesSizesGrid;var n=t.params.coverflowEffect;var o=t.isHorizontal();var l=t.translate;var d=o?-l+a/2:-l+r/2;var p=o?n.rotate:-n.rotate;var u=n.depth;for(var f=0,c=i.length;f<c;f+=1){var v=i.eq(f);var h=s[f];var m=v[0].swiperSlideOffset;var g=(d-m-h/2)/h*n.modifier;var w=o?p*g:0;var b=o?0:p*g;var y=-u*Math.abs(g);var x=n.stretch;if(typeof x==="string"&&x.indexOf("%")!==-1){x=parseFloat(n.stretch)/100*h}var E=o?0:x*g;var C=o?x*g:0;var T=1-(1-n.scale)*Math.abs(g);if(Math.abs(C)<.001)C=0;if(Math.abs(E)<.001)E=0;if(Math.abs(y)<.001)y=0;if(Math.abs(w)<.001)w=0;if(Math.abs(b)<.001)b=0;if(Math.abs(T)<.001)T=0;var S="translate3d("+C+"px,"+E+"px,"+y+"px)  rotateX("+b+"deg) rotateY("+w+"deg) scale("+T+")";v.transform(S);v[0].style.zIndex=-Math.abs(Math.round(g))+1;if(n.slideShadows){var A=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top");var M=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");if(A.length===0){A=$('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>');v.append(A)}if(M.length===0){M=$('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>');v.append(M)}if(A.length)A[0].style.opacity=g>0?g:0;if(M.length)M[0].style.opacity=-g>0?-g:0}}},setTransition:function e(t){var a=this;a.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)}};var EffectCoverflow={name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:true}},create:function e(){var t=this;bindModuleMethods(t,{coverflowEffect:_extends$1({},Coverflow)})},on:{beforeInit:function e(t){if(t.params.effect!=="coverflow")return;t.classNames.push(t.params.containerModifierClass+"coverflow");t.classNames.push(t.params.containerModifierClass+"3d");t.params.watchSlidesProgress=true;t.originalParams.watchSlidesProgress=true},setTranslate:function e(t){if(t.params.effect!=="coverflow")return;t.coverflowEffect.setTranslate()},setTransition:function e(t,a){if(t.params.effect!=="coverflow")return;t.coverflowEffect.setTransition(a)}}};function _extends(){_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};return _extends.apply(this,arguments)}var Thumbs={init:function e(){var t=this;var a=t.params.thumbs;if(t.thumbs.initialized)return false;t.thumbs.initialized=true;var r=t.constructor;if(a.swiper instanceof r){t.thumbs.swiper=a.swiper;extend(t.thumbs.swiper.originalParams,{watchSlidesProgress:true,slideToClickedSlide:false});extend(t.thumbs.swiper.params,{watchSlidesProgress:true,slideToClickedSlide:false})}else if(isObject(a.swiper)){t.thumbs.swiper=new r(extend({},a.swiper,{watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:false}));t.thumbs.swiperCreated=true}t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass);t.thumbs.swiper.on("tap",t.thumbs.onThumbClick);return true},onThumbClick:function e(){var t=this;var a=t.thumbs.swiper;if(!a)return;var r=a.clickedIndex;var i=a.clickedSlide;if(i&&$(i).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(typeof r==="undefined"||r===null)return;var s;if(a.params.loop){s=parseInt($(a.clickedSlide).attr("data-swiper-slide-index"),10)}else{s=r}if(t.params.loop){var n=t.activeIndex;if(t.slides.eq(n).hasClass(t.params.slideDuplicateClass)){t.loopFix();t._clientLeft=t.$wrapperEl[0].clientLeft;n=t.activeIndex}var o=t.slides.eq(n).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();var l=t.slides.eq(n).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();if(typeof o==="undefined")s=l;else if(typeof l==="undefined")s=o;else if(l-n<n-o)s=l;else s=o}t.slideTo(s)},update:function e(t){var a=this;var r=a.thumbs.swiper;if(!r)return;var i=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():r.params.slidesPerView;var s=a.params.thumbs.autoScrollOffset;var n=s&&!r.params.loop;if(a.realIndex!==r.realIndex||n){var o=r.activeIndex;var l;var d;if(r.params.loop){if(r.slides.eq(o).hasClass(r.params.slideDuplicateClass)){r.loopFix();r._clientLeft=r.$wrapperEl[0].clientLeft;o=r.activeIndex}var p=r.slides.eq(o).prevAll('[data-swiper-slide-index="'+a.realIndex+'"]').eq(0).index();var u=r.slides.eq(o).nextAll('[data-swiper-slide-index="'+a.realIndex+'"]').eq(0).index();if(typeof p==="undefined"){l=u}else if(typeof u==="undefined"){l=p}else if(u-o===o-p){l=r.params.slidesPerGroup>1?u:o}else if(u-o<o-p){l=u}else{l=p}d=a.activeIndex>a.previousIndex?"next":"prev"}else{l=a.realIndex;d=l>a.previousIndex?"next":"prev"}if(n){l+=d==="next"?s:-1*s}if(r.visibleSlidesIndexes&&r.visibleSlidesIndexes.indexOf(l)<0){if(r.params.centeredSlides){if(l>o){l=l-Math.floor(i/2)+1}else{l=l+Math.floor(i/2)-1}}r.slideTo(l,t?0:undefined)}}var f=1;var c=a.params.thumbs.slideThumbActiveClass;if(a.params.slidesPerView>1&&!a.params.centeredSlides){f=a.params.slidesPerView}if(!a.params.thumbs.multipleActiveThumbs){f=1}f=Math.floor(f);r.slides.removeClass(c);if(r.params.loop||r.params.virtual&&r.params.virtual.enabled){for(var v=0;v<f;v+=1){r.$wrapperEl.children('[data-swiper-slide-index="'+(a.realIndex+v)+'"]').addClass(c)}}else{for(var h=0;h<f;h+=1){r.slides.eq(a.realIndex+h).addClass(c)}}}};var Thumbs$1={name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:true,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function e(){var t=this;bindModuleMethods(t,{thumbs:_extends({swiper:null,initialized:false},Thumbs)})},on:{beforeInit:function e(t){var a=t.params.thumbs;if(!a||!a.swiper)return;t.thumbs.init();t.thumbs.update(true)},slideChange:function e(t){if(!t.thumbs.swiper)return;t.thumbs.update()},update:function e(t){if(!t.thumbs.swiper)return;t.thumbs.update()},resize:function e(t){if(!t.thumbs.swiper)return;t.thumbs.update()},observerUpdate:function e(t){if(!t.thumbs.swiper)return;t.thumbs.update()},setTransition:function e(t,a){var r=t.thumbs.swiper;if(!r)return;r.setTransition(a)},beforeDestroy:function e(t){var a=t.thumbs.swiper;if(!a)return;if(t.thumbs.swiperCreated&&a){a.destroy()}}}};var components=[Virtual$1,Keyboard$1,Mousewheel$1,Navigation$1,Pagination$1,Scrollbar$1,Parallax$1,Zoom$1,Lazy$1,Controller$1,A11y$1,History$1,HashNavigation$1,Autoplay$1,EffectFade,EffectCube,EffectFlip,EffectCoverflow,Thumbs$1];Swiper$1.use(components);var indexCss="@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px,0,0);transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-slide{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top, right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px,-50%,0);transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s transform,.2s top;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s left;transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s right;transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s infinite linear;animation:swiper-preloader-spin 1s infinite linear;-webkit-box-sizing:border-box;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;-webkit-filter:blur(50px);filter:blur(50px)}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}taro-swiper-core{display:block;height:150px}.swiper-container{height:100%}.swiper-pagination{font-size:0}.swiper-pagination-bullet{opacity:1}";var INSTANCE_ID=0;var Swiper=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.onAnimationFinish=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"animationfinish",7);this._id=INSTANCE_ID++;this.isWillLoadCalled=false;this.indicatorDots=false;this.indicatorColor="rgba(0, 0, 0, .3)";this.indicatorActiveColor="#000000";this.autoplay=false;this.current=0;this.interval=5e3;this.duration=500;this.circular=false;this.vertical=false;this.previousMargin="0px";this.nextMargin="0px";this.displayMultipleItems=1;this.full=false;this.handleSwiperLoopListen=function(){var e,a;((e=t.observerFirst)===null||e===void 0?void 0:e.disconnect)&&t.observerFirst.disconnect();((a=t.observerLast)===null||a===void 0?void 0:a.disconnect)&&t.observerLast.disconnect();t.observerFirst=new MutationObserver(t.handleSwiperLoop);t.observerLast=new MutationObserver(t.handleSwiperLoop);var r=t.swiper.$wrapperEl[0];var i=r.querySelectorAll("taro-swiper-item-core:not(.swiper-slide-duplicate)");if(i.length>=1){t.observerFirst.observe(i[0],{characterData:true})}else if(i.length>=2){t.observerLast.observe(i[i.length-1],{characterData:true})}};this.handleSwiperLoop=debounce((function(){if(t.swiper&&t.circular){t.swiper.loopDestroy();t.swiper.loopCreate()}}),500)}e.prototype.watchCurrent=function(e){if(!this.isWillLoadCalled)return;var t=parseInt(e,10);if(isNaN(t))return;if(this.circular){if(!this.swiper.isBeginning&&!this.swiper.isEnd){this.swiper.slideToLoop(t)}}else{this.swiper.slideTo(t)}};e.prototype.watchAutoplay=function(e){if(!this.isWillLoadCalled||!this.swiper)return;if(this.swiper.autoplay.running===e)return;if(e){if(this.swiper.params&&typeof this.swiper.params.autoplay==="object"){if(this.swiper.params.autoplay.disableOnInteraction===true){this.swiper.params.autoplay.disableOnInteraction=false}this.swiper.params.autoplay.delay=this.interval}this.swiper.autoplay.start()}else{this.swiper.autoplay.stop()}};e.prototype.watchDuration=function(e){if(!this.isWillLoadCalled)return;this.swiper.params.speed=e};e.prototype.watchInterval=function(e){if(!this.isWillLoadCalled)return;if(typeof this.swiper.params.autoplay==="object"){this.swiper.params.autoplay.delay=e}};e.prototype.watchSwiperWrapper=function(e){if(!this.isWillLoadCalled)return;if(!e)return;this.el.appendChild=function(t){return e.appendChild(t)};this.el.insertBefore=function(t,a){return e.insertBefore(t,a)};this.el.replaceChild=function(t,a){return e.replaceChild(t,a)};this.el.removeChild=function(t){return e.removeChild(t)}};e.prototype.watchCircular=function(){if(this.swiper){this.swiper.destroy();this.handleInit()}};e.prototype.componentWillLoad=function(){this.isWillLoadCalled=true};e.prototype.componentDidLoad=function(){this.handleInit();if(!this.swiper||!this.circular)return;var e=this.swiper.$wrapperEl[0];this.observer=new MutationObserver(this.handleSwiperLoopListen);this.observer.observe(e,{childList:true})};e.prototype.componentWillUpdate=function(){if(!this.swiper)return;if(this.autoplay&&!this.swiper.autoplay.running){this.swiper.autoplay.start()}this.swiper.update()};e.prototype.componentDidRender=function(){this.handleSwiperLoop()};e.prototype.disconnectedCallback=function(){var e,t,a,r,i,s;(t=(e=this.observer)===null||e===void 0?void 0:e.disconnect)===null||t===void 0?void 0:t.call(e);(r=(a=this.observerFirst)===null||a===void 0?void 0:a.disconnect)===null||r===void 0?void 0:r.call(a);(s=(i=this.observerLast)===null||i===void 0?void 0:i.disconnect)===null||s===void 0?void 0:s.call(i)};e.prototype.handleInit=function(){var e=this,t=e.autoplay,a=e.current,r=e.interval,i=e.duration,s=e.circular,n=e.vertical,o=e.displayMultipleItems;var l=this;var d={pagination:{el:".taro-swiper-"+this._id+" > .swiper-container > .swiper-pagination"},direction:n?"vertical":"horizontal",loop:s,slidesPerView:o,initialSlide:a,speed:i,observer:true,observeParents:true,on:{slideTo:function(){l.current=this.realIndex},slideChangeTransitionEnd:function(e){if(s){if(e.isBeginning||e.isEnd){e.slideToLoop(this.realIndex,0);return}}l.onChange.emit({current:this.realIndex,source:""})},transitionEnd:function(){l.onAnimationFinish.emit({current:this.realIndex,source:""})},observerUpdate:function(e,t){var a=t.target;var r=a&&typeof a.className==="string"?a.className:"";if(r.includes("taro_page")&&a.style.display==="block"){if(l.autoplay&&a.contains(e.$el[0])){e.slideTo(l.current)}}}}};if(t){d.autoplay={delay:r,disableOnInteraction:false}}this.swiper=new Swiper$1(".taro-swiper-"+this._id+" > .swiper-container",d);this.swiperWrapper=this.el.querySelector(".taro-swiper-"+this._id+" > .swiper-container > .swiper-wrapper")};e.prototype.render=function(){var e=this,t=e.vertical,a=e.indicatorDots,r=e.indicatorColor,i=e.indicatorActiveColor;var s={overflow:"hidden"};var n={overflow:"visible"};if(this.full){s.height="100%";n.height="100%"}var o=/^(\d+)px/.exec(this.previousMargin)||[],l=o[1];var d=/^(\d+)px/.exec(this.nextMargin)||[],p=d[1];var u=parseInt(l)||0;var f=parseInt(p)||0;if(t){n.marginTop=u+"px";n.marginBottom=f+"px"}else{n.marginRight=f+"px";n.marginLeft=u+"px"}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"taro-swiper-"+this._id,style:s},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"swiper-container",style:n},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("style",{type:"text/css"},"\n              .taro-swiper-"+this._id+" > .swiper-container > .swiper-pagination > .swiper-pagination-bullet { background: "+r+" }\n              .taro-swiper-"+this._id+" > .swiper-container > .swiper-pagination > .swiper-pagination-bullet-active { background: "+i+" }\n            "),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"swiper-wrapper"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null)),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("swiper-pagination",{"swiper-pagination-hidden":!a,"swiper-pagination-bullets":a})})))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{current:["watchCurrent"],autoplay:["watchAutoplay"],duration:["watchDuration"],interval:["watchInterval"],swiperWrapper:["watchSwiperWrapper"],circular:["watchCircular"]}},enumerable:false,configurable:true});return e}();function debounce(e,t){var a;return function(){var r=[];for(var i=0;i<arguments.length;i++){r[i]=arguments[i]}clearTimeout(a);a=setTimeout((function(){e.apply(void 0,r)}),t)}}Swiper.style=indexCss;var SwiperItem=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e)}e.prototype.render=function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"swiper-slide","item-id":this.itemId})};return e}();

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_switch_core", function() { return Switch; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss="taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}";var Switch=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.type="switch";this.checked=false;this.color="#04BE02";this.disabled=false;this.nativeProps={};this.isWillLoadCalled=false;this.switchChange=function(e){e.stopPropagation();var i=e.target.checked;t.isChecked=i;t.onChange.emit({value:i})}}e.prototype.function=function(e,t){if(!this.isWillLoadCalled)return;if(e!==t)this.isChecked=e};e.prototype.componentWillLoad=function(){this.isWillLoadCalled=true;this.isChecked=this.checked};e.prototype.componentDidLoad=function(){var e=this;Object.defineProperty(this.el,"value",{get:function(){return e.isChecked},configurable:true})};e.prototype.render=function(){var e=this,t=e.type,i=e.color,n=e.isChecked,r=e.name,s=e.disabled,o=e.nativeProps;var c=n?{borderColor:i||"04BE02",backgroundColor:i||"04BE02"}:{};return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("input",Object.assign({type:"checkbox",class:"weui-"+t,style:c,checked:n,name:r,disabled:s,onChange:this.switchChange},o))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{checked:["function"]}},enumerable:false,configurable:true});return e}();Switch.style=indexCss;

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_tabbar", function() { return Tabbar; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var __spreadArray=undefined&&undefined.__spreadArray||function(e,a){for(var t=0,r=a.length,o=e.length;t<r;t++,o++)e[o]=a[t];return e};function isAbsolute(e){return e.charAt(0)==="/"}function spliceOne(e,a){for(var t=a,r=t+1,o=e.length;r<o;t+=1,r+=1){e[t]=e[r]}e.pop()}function resolvePathname(e,a){if(a===undefined)a="";var t=e&&e.split("/")||[];var r=a&&a.split("/")||[];var o=e&&isAbsolute(e);var n=a&&isAbsolute(a);var s=o||n;if(e&&isAbsolute(e)){r=t}else if(t.length){r.pop();r=r.concat(t)}if(!r.length)return"/";var i;if(r.length){var l=r[r.length-1];i=l==="."||l===".."||l===""}else{i=false}var b=0;for(var d=r.length;d>=0;d--){var h=r[d];if(h==="."){spliceOne(r,d)}else if(h===".."){spliceOne(r,d);b++}else if(b){spliceOne(r,d);b--}}if(!s)for(;b--;b)r.unshift("..");if(s&&r[0]!==""&&(!r[0]||!isAbsolute(r[0])))r.unshift("");var c=r.join("/");if(i&&c.substr(-1)!=="/")c+="/";return c}var splitUrl=function(e){var a=e||"";var t;var r={path:null,query:null,fragment:null};t=a.indexOf("#");if(t>-1){r.fragment=a.substring(t+1);a=a.substring(0,t)}t=a.indexOf("?");if(t>-1){r.query=a.substring(t+1);a=a.substring(0,t)}r.path=a;return r};var TabbarItem=function(e){var a=e.index,t=e.isSelected,r=t===void 0?false:t,o=e.textColor,n=e.iconPath,s=e.badgeText,i=e.showRedDot,l=i===void 0?false:i,b=e.text,d=e.onSelect;var c=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("weui-tabbar__item",{"weui-bar__item_on":r});var f={position:"absolute",top:"-2px",right:"-13px"};var u={position:"absolute",top:"0",right:"-6px"};function v(){d(a)}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("a",{key:a,href:"javascript:;",class:c,onClick:v},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("span",{style:{display:"inline-block",position:"relative"}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("img",{src:n,alt:"",class:"weui-tabbar__icon"}),!!s&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("span",{class:"weui-badge taro-tabbar-badge",style:f},s),l&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("span",{class:"weui-badge weui-badge_dot",style:u})),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("p",{class:"weui-tabbar__label",style:{color:o}},b))};var indexCss="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.taro-tabbar__panel{-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}.taro-tabbar__tabbar{position:relative;height:50px;width:100%;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}";var Taro=__webpack_require__(30);var addLeadingSlash=function(e){return e[0]==="/"?e:"/"+e};var hasBasename=function(e,a){return new RegExp("^"+a+"(\\/|\\?|#|$)","i").test(e)};var stripBasename=function(e,a){return hasBasename(e,a)?e.substr(a.length):e};var STATUS_SHOW=0;var STATUS_HIDE=1;var STATUS_SLIDEOUT=2;var basicTabBarClassName="taro-tabbar__tabbar";var hideTabBarClassName="taro-tabbar__tabbar-hide";var hideTabBarWithAnimationClassName="taro-tabbar__tabbar-slideout";var Tabbar=function(){function e(e){var a=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onLongPress=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"longpress",7);this.homePage="";this.customRoutes=[];this.tabbarPos="bottom";this.selectedIndex=-1;this.status=STATUS_SHOW;this.getOriginUrl=function(e){var t=a.customRoutes.filter((function(a){var t=a[1];var r=splitUrl(t).path;var o=splitUrl(e).path;return r===o}));return t.length?t[0][0]:e};this.getSelectedIndex=function(e){var t=-1;a.list.forEach((function(a,r){var o=a.pagePath;var n=splitUrl(e).path;var s=splitUrl(o).path;if(n===s){t=r}}));return t};this.switchTab=function(e){a.selectedIndex=e;Taro.switchTab({url:a.list[e].pagePath})};this.switchTabHandler=function(e){var t=e.url,r=e.successHandler,o=e.errorHandler;var n=a.getOriginUrl(a.getCurrentUrl()||a.homePage);var s=resolvePathname(t,n);var i=a.getSelectedIndex(s);if(i>-1){a.switchTab(i);r({errMsg:"switchTab:ok"})}else{o({errMsg:'switchTab:fail page "'+s+'" is not found'})}};this.routerChangeHandler=function(e){var t;var r;if(e){t=e.toLocation}if(t&&t.path){var o=addLeadingSlash(t.path);r=stripBasename(o==="/"?a.homePage:o,a.conf.basename||"/")}else{r=a.getCurrentUrl()}a.selectedIndex=a.getSelectedIndex(a.getOriginUrl(r))};this.setTabBarBadgeHandler=function(e){var t=e.index,r=e.text,o=e.successHandler,n=e.errorHandler;var s=__spreadArray([],a.list);if(t in s){s[t].showRedDot=false;s[t].badgeText=r;o({errMsg:"setTabBarBadge:ok"})}else{n({errMsg:"setTabBarBadge:fail tabbar item not found"})}a.list=s};this.removeTabBarBadgeHandler=function(e){var t=e.index,r=e.successHandler,o=e.errorHandler;var n=__spreadArray([],a.list);if(t in n){n[t].badgeText=null;n[t].badgeText=null;r({errMsg:"removeTabBarBadge:ok"})}else{o({errMsg:"removeTabBarBadge:fail tabbar item not found"})}a.list=n};this.showTabBarRedDotHandler=function(e){var t=e.index,r=e.successHandler,o=e.errorHandler;var n=__spreadArray([],a.list);if(t in n){n[t].badgeText=null;n[t].showRedDot=true;r({errMsg:"showTabBarRedDot:ok"})}else{o({errMsg:"showTabBarRedDot:fail tabbar item not found"})}a.list=n};this.hideTabBarRedDotHandler=function(e){var t=e.index,r=e.successHandler,o=e.errorHandler;var n=__spreadArray([],a.list);if(t in n){n[t].showRedDot=false;r({errMsg:"hideTabBarRedDot:ok"})}else{o({errMsg:"hideTabBarRedDot:fail tabbar item not found"})}a.list=n};this.showTabBarHandler=function(e){var t=e.successHandler;a.status=STATUS_SHOW;t({errMsg:"showTabBar:ok"})};this.hideTabBarHandler=function(e){var t=e.animation,r=e.successHandler;a.status=t?STATUS_SLIDEOUT:STATUS_HIDE;r({errMsg:"hideTabBar:ok"})};this.setTabBarStyleHandler=function(e){var t=e.color,r=e.selectedColor,o=e.backgroundColor,n=e.borderStyle,s=e.successHandler;if(o)a.backgroundColor=o;if(n)a.borderStyle=n;if(t)a.color=t;if(r)a.selectedColor=r;s({errMsg:"setTabBarStyle:ok"})};this.setTabBarItemHandler=function(e){var t=e.index,r=e.iconPath,o=e.selectedIconPath,n=e.text,s=e.successHandler,i=e.errorHandler;var l=__spreadArray([],a.list);if(t in l){if(r)l[t].iconPath=r;if(o)l[t].selectedIconPath=o;if(n)l[t].text=n;s({errMsg:"setTabBarItem:ok"})}else{i({errMsg:"setTabBarItem:fail tabbar item not found"})}a.list=l};var t=this.conf.list;var r=this.conf.customRoutes;if(Object.prototype.toString.call(t)!=="[object Array]"||t.length<2||t.length>5){throw new Error("tabBar 配置错误")}this.homePage=addLeadingSlash(this.conf.homePage);for(var o in r){this.customRoutes.push([o,r[o]])}t.forEach((function(e){if(e.pagePath.indexOf("/")!==0){e.pagePath="/"+e.pagePath}}));this.list=t;this.borderStyle=this.conf.borderStyle;this.backgroundColor=this.conf.backgroundColor;this.color=this.conf.color;this.selectedColor=this.conf.selectedColor}e.prototype.getCurrentUrl=function(){var e=this.conf.mode;var a=this.conf.basename||"/";var t;if(e==="hash"){var r=window.location.href;var o=r.indexOf("#");t=o===-1?"":r.substring(o+1)}else{t=location.pathname}var n=addLeadingSlash(stripBasename(t,a));return n==="/"?this.homePage:n};e.prototype.bindEvent=function(){Taro.eventCenter.on("__taroRouterChange",this.routerChangeHandler);Taro.eventCenter.on("__taroSwitchTab",this.switchTabHandler);Taro.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler);Taro.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler);Taro.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler);Taro.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler);Taro.eventCenter.on("__taroShowTabBar",this.showTabBarHandler);Taro.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler);Taro.eventCenter.on("__taroSetTabBarStyle",this.setTabBarStyleHandler);Taro.eventCenter.on("__taroSetTabBarItem",this.setTabBarItemHandler)};e.prototype.removeEvent=function(){Taro.eventCenter.off("__taroRouterChange",this.routerChangeHandler);Taro.eventCenter.off("__taroSwitchTab",this.switchTabHandler);Taro.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler);Taro.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler);Taro.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler);Taro.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler);Taro.eventCenter.off("__taroShowTabBar",this.showTabBarHandler);Taro.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler);Taro.eventCenter.off("__taroSetTabBarStyle",this.setTabBarStyleHandler);Taro.eventCenter.off("__taroSetTabBarItem",this.setTabBarItemHandler)};e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom";this.bindEvent();this.routerChangeHandler()};e.prototype.disconnectedCallback=function(){this.removeEvent()};e.prototype.render=function(){var e,a;var t=this;var r=this.tabbarPos,o=r===void 0?"bottom":r;var n=this.status;var s=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("weui-tabbar",(e={},e["taro-tabbar__border-"+(this.borderStyle||"black")]=true,e));var i=this.selectedIndex===-1||n===STATUS_HIDE;var l=n===STATUS_SLIDEOUT;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])(basicTabBarClassName,basicTabBarClassName+"-"+o,(a={},a[hideTabBarClassName]=i,a[hideTabBarWithAnimationClassName]=l,a))},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:s,style:{backgroundColor:this.backgroundColor||""}},this.list.map((function(e,a){var r=t.selectedIndex===a;var o;var n;if(r){o=t.selectedColor||"";n=e.selectedIconPath}else{o=t.color||"";n=e.iconPath}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(TabbarItem,{index:a,onSelect:t.switchTab.bind(t),isSelected:r,textColor:o,iconPath:n,text:e.text,badgeText:e.badgeText,showRedDot:e.showRedDot})}))))};Object.defineProperty(e.prototype,"tabbar",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return e}();Tabbar.style=indexCss;

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_text_core", function() { return Text; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var indexCss="taro-text-core{display:inline;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:pre-wrap}.taro-text__selectable{-moz-user-select:text;-webkit-user-select:text;-ms-user-select:text;user-select:text}";var Text=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.selectable=false}e.prototype.render=function(){var e=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])({"taro-text__selectable":this.selectable});return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:e},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};return e}();Text.style=indexCss;

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_textarea_core", function() { return Textarea; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss="taro-textarea-core{display:block;width:300px}taro-textarea-core .auto-height{height:auto}.taro-textarea{-webkit-appearance:none;cursor:auto;width:100%;height:150px;border:0;display:block;position:relative;line-height:1.5}.taro-textarea:focus{outline:none}";function fixControlledValue(e){return e!==null&&e!==void 0?e:""}var Textarea=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onInput=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"input",7);this.onFocus=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"focus",7);this.onBlur=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"blur",7);this.onChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"change",7);this.onLineChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"linechange",7);this.disabled=false;this.maxlength=140;this.autoFocus=false;this.autoHeight=false;this.nativeProps={};this.line=1;this.hanldeInput=function(e){e.stopPropagation();t.handleLineChange();t.onInput.emit({value:e.target.value,cursor:e.target.value.length})};this.handleFocus=function(e){t.onFocus.emit({value:e.target.value})};this.handleBlur=function(e){t.onBlur.emit({value:e.target.value})};this.handleChange=function(e){e.stopPropagation();t.onChange.emit({value:e.target.value})};this.handleLineChange=function(){var e=t.getNumberOfLines();if(e!==t.line){t.line=e;t.onLineChange.emit({height:t.textareaRef.clientHeight,lineCount:t.line})}};this.calculateContentHeight=function(e,t){var n=e.style.height,a=e.offsetHeight,i=e.scrollHeight,o=e.style.overflow;if(a>=i){e.style.height=a+t+"px";e.style.overflow="hidden";if(i<e.scrollHeight){while(e.offsetHeight>=e.scrollHeight){e.style.height=(a-=t)+"px"}while(e.offsetHeight<e.scrollHeight){e.style.height=a+++"px"}e.style.height=n;e.style.overflow=o;return a}}else{return i}};this.getNumberOfLines=function(){var e=t.textareaRef,n=window.getComputedStyle?window.getComputedStyle(e):e.style,a=parseInt(n.lineHeight,10),i=t.calculateContentHeight(e,a),o=Math.floor(i/a);return o}}e.prototype.componentDidLoad=function(){var e=this;Object.defineProperty(this.el,"value",{get:function(){return e.textareaRef.value},set:function(t){return e.value=t},configurable:true});this.autoFocus&&this.textareaRef.focus()};e.prototype.render=function(){var e=this;var t=this,n=t.value,a=t.placeholder,i=t.disabled,o=t.maxlength,r=t.autoFocus,l=t.autoHeight,s=t.name,u=t.nativeProps,c=t.hanldeInput,g=t.handleFocus,f=t.handleBlur,d=t.handleChange;var p={};if(l){p.rows=this.line}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("textarea",Object.assign({ref:function(t){if(t){e.textareaRef=t}},class:"taro-textarea "+(l?"auto-height":""),value:fixControlledValue(n),placeholder:a,name:s,disabled:i,maxlength:o,autofocus:r,onInput:c,onFocus:g,onBlur:f,onChange:d},u,p))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return e}();Textarea.style=indexCss;

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_video_control", function() { return VideoControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_video_core", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_video_danmu", function() { return VideoDanmu; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var __awaiter=undefined&&undefined.__awaiter||function(e,t,i,o){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function a(e){try{l(o.next(e))}catch(e){n(e)}}function s(e){try{l(o["throw"](e))}catch(e){n(e)}}function l(e){e.done?i(e.value):r(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};var __generator=undefined&&undefined.__generator||function(e,t){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,r,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,r&&(n=a[0]&2?r["return"]:a[0]?r["throw"]||((n=r["return"])&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;if(r=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(a[0]===6&&i.label<n[1]){i.label=n[1];n=a;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(a);break}if(n[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e];r=0}finally{o=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=undefined&&undefined.__spreadArray||function(e,t){for(var i=0,o=t.length,r=e.length;i<o;i++,r++)e[r]=t[i];return e};var formatTime=function(e){if(e==null)return"";var t=Math.round(e%60);var i=Math.round((e-t)/60);return(i<10?"0"+i:i)+":"+(t<10?"0"+t:t)};var calcDist=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))};var normalizeNumber=function(e){return Math.max(-1,Math.min(e,1))};var throttle=function(e,t){var i=0;return function(){var o=Date.now();if(o-i>t){e.apply(this,arguments);i=o}}};var screenFn=function(){var e;var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];var i=["webkitEnterFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"];var o=0;var r=t.length;var n={};for(;o<r;o++){e=t[o];if(e&&e[1]in document){for(o=0;o<e.length;o++){n[t[0][o]]=e[o]}return n}}if(!n[t[0][0]]){for(o=0;o<i.length;o++){n[t[0][o]]=i[o]}}return n}();var VideoControl=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.visible=false;this.isDraggingProgressBall=false;this.percentage=0;this.progressDimentions={left:0,width:0};this.calcPercentage=function(e){var i=e-t.progressDimentions.left;i=Math.max(i,0);i=Math.min(i,t.progressDimentions.width);return i/t.progressDimentions.width};this.onDragProgressBallStart=function(){t.isDraggingProgressBall=true;t.hideControlsTimer&&clearTimeout(t.hideControlsTimer)};this.onClickProgress=function(e){e.stopPropagation();var i=t.calcPercentage(e.pageX);t.seekFunc(i*t.duration);t.toggleVisibility(true)}}e.prototype.onDocumentTouchMove=function(e){if(!this.isDraggingProgressBall)return;var t=e.touches[0].pageX;this.percentage=this.calcPercentage(t);this.setProgressBall(this.percentage);this.setCurrentTime(this.percentage*this.duration)};e.prototype.onDocumentTouchEnd=function(){if(!this.isDraggingProgressBall)return;this.isDraggingProgressBall=false;this.seekFunc(this.percentage*this.duration);this.toggleVisibility(true)};e.prototype.setProgressBall=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.progressBallRef){this.progressBallRef.style.left=e*100+"%"}return[2]}))}))};e.prototype.toggleVisibility=function(e){return __awaiter(this,void 0,void 0,(function(){var t;var i=this;return __generator(this,(function(o){t=e===undefined?!this.visible:e;if(t){this.hideControlsTimer&&clearTimeout(this.hideControlsTimer);if(this.isPlaying){this.hideControlsTimer=setTimeout((function(){i.toggleVisibility(false)}),2e3)}this.controlsRef.style.visibility="visible"}else{this.controlsRef.style.visibility="hidden"}this.visible=!!t;return[2]}))}))};e.prototype.getIsDraggingProgressBall=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.isDraggingProgressBall]}))}))};e.prototype.setCurrentTime=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.currentTimeRef.innerHTML=formatTime(e);return[2]}))}))};e.prototype.render=function(){var e=this;var t=this,i=t.controls,o=t.currentTime,r=t.duration,n=t.isPlaying,a=t.pauseFunc,s=t.playFunc,l=t.showPlayBtn,u=t.showProgress;var c=formatTime(r);var d;if(!l){d=null}else if(n){d=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-control-button taro-video-control-button-pause",onClick:a})}else{d=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-control-button taro-video-control-button-play",onClick:s})}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"taro-video-bar taro-video-bar-full"},i&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-controls"},d,u&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-current-time",ref:function(t){return e.currentTimeRef=t}},formatTime(o)),u&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-progress-container",onClick:this.onClickProgress},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-progress",ref:function(t){if(!t)return;var i=t.getBoundingClientRect();e.progressDimentions.left=i.left;e.progressDimentions.width=i.width}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-progress-buffered",style:{width:"100%"}}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-ball",ref:function(t){return e.progressBallRef=t},onTouchStart:this.onDragProgressBallStart,style:{left:(c?this.currentTime/r*100:0)+"%"}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-inner"})))),u&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-duration"},c)),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};Object.defineProperty(e.prototype,"controlsRef",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return e}();var indexCss='.taro-video{width:100%;height:225px;display:inline-block;line-height:0;overflow:hidden;position:relative}.taro-video[hidden]{display:none}.taro-video-container{width:100%;height:100%;background-color:#000;display:inline-block;position:absolute;top:0;left:0;overflow:hidden;-o-object-position:inherit;object-position:inherit}.taro-video-container.taro-video-type-fullscreen{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-left{-webkit-transform:translate(-50%, -50%) rotate(-90deg);transform:translate(-50%, -50%) rotate(-90deg)}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-right{-webkit-transform:translate(-50%, -50%) rotate(90deg);transform:translate(-50%, -50%) rotate(90deg)}.taro-video-video{width:100%;height:100%;-o-object-position:inherit;object-position:inherit}.taro-video-cover{position:absolute;top:0;left:0;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:rgba(1, 1, 1, 0.5);z-index:1}.taro-video-cover-play-button{width:40px;height:40px;background-size:50%;background-repeat:no-repeat;background-position:50% 50%}.taro-video-cover-duration{color:#fff;font-size:16px;line-height:1;margin-top:10px}.taro-video-bar{visibility:hidden;height:44px;background-color:rgba(0, 0, 0, 0.5);overflow:hidden;position:absolute;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 10px;z-index:1}.taro-video-bar.taro-video-bar-full{left:0}.taro-video-controls{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin:0 8.5px}.taro-video-control-button{width:13px;height:15px;padding:14.5px 12.5px 14.5px 12.5px;margin-left:-8.5px;-webkit-box-sizing:content-box;box-sizing:content-box}.taro-video-control-button:after{content:"";display:block;width:100%;height:100%;background-size:100%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-control-button.taro-video-control-button-play:after,.taro-video-cover-play-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAWhJREFUSA1j+P///0cgBoHjQGzCQCsAtgJB/AMy5wCxGNXtQ9iBwvoA5BUCMQvVLEQxHpNzDSjkRhXLMM3GKrIeKKpEkYVYjcUu+AMo3ALE3GRZiN1MvKKPgbIRJFuG10j8koeA0gZEW4jfLIKyf4EqpgOxMEELCRpFnIJ3QGU5QMyM00LizCFa1SWgSkeslhFtBGkKVwGVy6FYSJp+klR/A6quB2JOkIWMIK0oNlOf8xBoZDE9LAI7nYn6HsBq4l96WHQEaLUpAyiOaASeAM2NgvuPBpaACt82IEYtfKls0UagecpwXyAzqGTRdaA57sjmYrAptAjUsCkGYlYMg9EFyLQI1IiZB8Ti6Obh5JNh0QmgHlOcBuKSIMGi50C18UDMiMssvOJEWPQLqKYbiHnxGkRIkoBF24DyaoTMIEoeh0W3geI+RBlArCI0iz4D+RVAzEasfqLVAQ19AcSg5LoYiKWI1kiiQgCMBLnEEcfDSgAAAABJRU5ErkJggg==)}.taro-video-control-button.taro-video-control-button-pause:after{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAAAXNSR0IArs4c6QAAAFlJREFUSA3tksEKACAIQ7X//5zq98wOgQayum8QaGweHhMzG/6OujzKAymn+0LMqivu1XznWmX8/echTIyMyAgTwA72iIwwAexgj8gIE8CO3aMRbDPMaEy5BRGaKcZv8YxRAAAAAElFTkSuQmCC)}.taro-video-current-time,.taro-video-duration{height:14.5px;line-height:14.5px;margin-top:15px;margin-bottom:14.5px;font-size:12px;color:#cbcbcb}.taro-video-progress-container{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;position:relative}.taro-video-progress{height:2px;margin:21px 12px;background-color:rgba(255, 255, 255, 0.4);position:relative}.taro-video-progress-buffered{position:absolute;left:0;top:0;width:0;height:100%;-webkit-transition:width 0.1s;transition:width 0.1s;background-color:rgba(255, 255, 255, 0.8)}.taro-video-ball{width:16px;height:16px;padding:14px;position:absolute;top:-21px;-webkit-box-sizing:content-box;box-sizing:content-box;left:0;margin-left:-22px}.taro-video-inner{width:100%;height:100%;background-color:#fff;border-radius:50%}.taro-video-danmu-button{white-space:nowrap;line-height:1;padding:2px 10px;border:1px solid #fff;border-radius:5px;font-size:13px;color:#fff;margin:0 8.5px}.taro-video-danmu-button.taro-video-danmu-button-active{border-color:#48c23d;color:#48c23d}.taro-video-fullscreen,.taro-video-mute{width:17px;height:17px;padding:8.5px;-webkit-box-sizing:content-box;box-sizing:content-box;background-size:50%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-fullscreen{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhUlEQVRYR+2WSwrAMAhEnZO3PfmULLooGEFTiIXJ2s/kRY2wzQeb85sE9CRA8jSzY1YfAFzhJBnU1AVgxH2dSiArCnD9QgGzRNnOech48SRABHoSyFb5in3PSbhyo6yvCPQkEM3u7BsPe/0FIvBfAh/vhKmVbO9SWun1qk/PSVi9TcVPBG6R1YIhgWwNpQAAAABJRU5ErkJggg==)}.taro-video-fullscreen.taro-video-type-fullscreen{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+2Xu0pDURBF1/ZLxNcHKNiIlfhA7C0UBSEE8RNEBNFPUEQEEbGxFiSSSrCwEHsf5E/ccsSUuWfUhKQ40947+y42Z8+ZK/pcinzf9hhwD1xJ2q/qsb0JHAOzkl5y+lGAGnCWICQtZgAS6DxQk3TeLYA6cAo0JSXxjmW7CcwBdUkJurKiDhSA4kBvHbA9CqwBQx2O7BSw8ssU3ALPFRF4knT3nQLbr8B4LjLBOdAAFgJaLUkjbYC9n+zm+i4kXWbmwCqwnRMCHiXthuZAQOzPrxSA4kBxYDAcsH0EzATCfCLpJjOINoCtgFZabg7bk7AFDAeaGpKWgitZTu5N0kQbYBmYrujo9mX0CVxL+gidAdu9vY5zXhWA4sAgOND3X7NJ4AHYCaxkB8B62gslvecSFpoDOZH/PP8Cnt7hIaM5xCEAAAAASUVORK5CYII=)}.taro-video-mute{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTg6MjArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3YmE4Yjg0LTFhNTYtNGM1MS04NDVkLTNiZmYyMGI0ZDc0ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg1NGQ3MjlkLWUwNjctZjU0OC1hMTlhLTBlZjQ4OGRkYjJiOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA1ODY3ZDFlLWQ3NGEtNDgyNC04MDU3LTYzYmRmMTdjODk5ZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDU4NjdkMWUtZDc0YS00ODI0LTgwNTctNjNiZGYxN2M4OTllIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE4OjIwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTdiYThiODQtMWE1Ni00YzUxLTg0NWQtM2JmZjIwYjRkNzRmIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz459+FoAAABqElEQVRYhc2XPWsVQRSGnxPjF4oGRfxoRQKGWCU2Ft7CykrQWosEyf/If0hhIPgHDEmbNJZqCFxiQEgTUGxsBUVEHgvnyrjZZJO92V1fGIaZnTPvszPszNlQ6VIjnbr/DwCoDLMNak/dUVfUK0f2rQugnlcX/FevWgFQH6gf3autRgHUC+piiXHzAOmtPx9gXgug8itQx9SXwDpw47AGKXZWvXvQmNFCwE3gCXA2dY0Az4GrRzHONA9cU/vAbERsllEOyh31e8USV2mrMPdG9uyn+rDom2/BHHCm5puWKiKmgdtAnz+rvaxO5mNygEvHaZ5BfADuARvAaWBpP4DGFBHfgBngFzClTrUKkCDeA+9S837rAEnbqb7VFcCpVJ/oCmCw959aB1AfAROpudYqgDoOLKRmPyLelAF8bcD4pPoMeAtcB34AT4uDBqXXwFG8XXUU/72MIuK1OgE8Bs6l7mEvo8up7lN1Ge0n9aK6VHMFZvJTr9S3CiALaCQhqZOSvegMIAvu2UVSWpigLC1fbQ0gm6in7qpfLCQbhwGIYcyPQ53/G3YO8BtUtd35bvKcVwAAAABJRU5ErkJggg==)}.taro-video-mute.taro-video-type-mute{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTk6MDMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzYjJmNjE2LTZmZTUtNDJjNC1iNTgwLTczNzZjZjI2NzdmNSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYzZjQ2NTYzLWE0ZjktOGQ0Mi1hM2FhLTY3ODJhNDBhYWNjMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyYWNjMWFlLTg4ZmMtNDBlZi1iMWM1LTNmODgwY2QzYWI2MiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjJhY2MxYWUtODhmYy00MGVmLWIxYzUtM2Y4ODBjZDNhYjYyIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE5OjAzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDNiMmY2MTYtNmZlNS00MmM0LWI1ODAtNzM3NmNmMjY3N2Y1IiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PmxYVAAACLklEQVRYhc2XP2sVQRRHz40hKoqaQgVBCy1EozFlGiVFxMLGh4piYWEh+hkEP4YKAVFEEFTyughaCH6DqIVpAhYWEgIxoJE8cywyi5tNHu/tJmvyg2WZO3dmzt47/zZUtoJ6Nhsg09YDiYhKDzACTAFNYH9lEpUq80TdrT5wpV5n/ZV9KoGoo+pXV2uyKkipOaLuUceAt8DhUvQd1FsCYhR4ChzaSIBMHSOi7lOfsByFWiCgEBH1GHAF2JlMPcBt4GC3HUYEaj9wF3gVEVPtfNVTwAXgWX7CDKq/1piAZTSZBmim8qJ6sQ3EgDqb/L7kU3MH2NHtl3dQX3r3Ak21UYAYAj4A/cl0JB+RF+uMRj4iQ+p8zt7KYFLdXKHuRi0gacBhV6a6pd5bA6KRNagFJPU9qv5u47toLmW1HnoR8Q5oAK1CVQu4FBHj/wUkaXsb+4pzpVaQFPqXrN7Be4Fx9VztIOr1BLEtmX4A94E/qdwHTKjDWYM6lu81dSlnn3V570BtuLxaMs2rZ/IgYxsBovaoPwsQA4VoFWEm8ql5DiysNyURsQTMpOIMcDYiPhd8xoGr/FtNC2G6FKXD6ihwGdiVHMoeeh8jYlA9ANwE3kTEp3bO6vE03qOONzR1r/q4RGrquaFFxFxE3ALOA9+6jExpdb180y55AhirhaRTatq0GXEzL8+ZIuI9cBJ4WKiartJf9nWV/mty7UfUafW7erpqRGI9EBuprffvu9n6C1KOmsqwI5A1AAAAAElFTkSuQmCC)}.taro-video-danmu{position:absolute;top:0;left:0;bottom:0;width:100%;margin-top:14px;margin-bottom:44px;font-size:14px;line-height:14px;overflow:visible}.taro-video-danmu-item{line-height:1;position:absolute;color:#fff;white-space:nowrap;left:100%;-webkit-transform:translatex(0);transform:translatex(0);-webkit-transition-property:left, -webkit-transform;transition-property:left, -webkit-transform;transition-property:left, transform;transition-property:left, transform, -webkit-transform;-webkit-transition-duration:3s;transition-duration:3s;-webkit-transition-timing-function:linear;transition-timing-function:linear}.taro-video-toast{pointer-events:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border-radius:5px;background-color:rgba(255, 255, 255, 0.8);color:#000;display:block;visibility:hidden}.taro-video-toast.taro-video-toast-volume{width:100px;height:100px;display:block}.taro-video-toast-volume .taro-video-toast-title{width:100%;font-size:12px;line-height:16px;text-align:center;margin-top:10px;display:block}.taro-video-toast-volume .taro-video-toast-icon{fill:#000;width:50%;height:50%;margin-left:25%;display:block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFhklEQVR4Xu2aeaxfQxTHP1VBES0NIQitWtpaaxeCUkQtaYVa0tiClAq1ExIiQTVppaWxt8RWSa2tWkJQRGgtQaSIpUKEpG0ssbbk28yV2+mZO/e9e3vvu/e98897mZnfzPl+75mZs0wvurn06ub46SGgxwLqZaA3sB/wO/A+8G/V6tS5BU4BJgJbO9DvAMOB36okoQ4CNgAeBEYbQK8Bbm4zAdsBc4EdAyA/APZoKwHHAA8DG2UA/AnYrG0ErAVcD1yXA9gfQJ8c40obsqbPgH7AY8CROTVuFQFD3X7fJid4DWsNAWOAGZ0w58YTsDZwKzChA189PbTRBGwKzAYO6iT4srbAMHfTfAksjulS1iG4JzAH2Dy2YKS/qAVcCdzi1vgZOBZ4PWvNGAG6wgYCW0IwctzNmf06BcEXtYABwOeA4otEfgEOdnGGqV6IAAUopwM6zDYuAVjeKYpYwCjgCWOhH513+b2lhE+Avrj89NPyalzyuCIE6EN9BfQ1dHoPOAD40+9LE6D/5aoqSqtLsgiQC60DTiHzfGCFoaSsQAexZdlTgEuyCDgLuK8u5G7dEAHyKN8CBrtxLwDHAX8Z+l4N3GS0L3db4aN0X5opmc+2XZQAfb2LPd2eciG1lUSRJZ9qYHkZONwiYAjwSc3gs24BXWWWfzEVuMjQez13HljX8v7A28lvEgsInaBVcxLaAvr6sgJLtBWeNTrOB+4w2p8DRvoEnAPcXTVaY70QAbrbXwIONX7zBSAL/tvrk1+iviTllnRry2irr/QSEws4D7izCxMg1XQLLAQGGXpeCkw22kOWI49RMUujCJC+uwAfGtfcImAng4AtAMsBeg04pIkESOfbgQsMsNoGnxrtSrfv7rXrSlwXWN6kLZBgEBiB8iWUUZZPIN/AF1nMoiYSICDfAlt5iB4CxhpAzwXuMtqPBuY1lYB5wFEeqFeAwwyguvIUqvuiQO/xphJwP3Cmhyh0EKrOoGDIF7n+M5pKwEwXrqdBCaQSM77Ig7SSIicDs5pKwIvACA+pzFwZIF9OlKm36QyQV7jEqDDJk5VD58uFgGIGX1Se+6yJFqAKsqI6X84GdDb4Mh0Y5zUqjFYFakUTCXja5QLSmBQHbAL8ahAgT1AeYVreSKLLphGwF/CuAfLJQLldGSTFD75c5d4mNCoWyAqG9gYWGED1AOMKo12ZbiWA/idA++deY2DVTZ0Jh5UJPsFQtD/wDaAHGWl5EzgwaUi2gK4UXS11S0cTIjrMFBtYQdAk4DID0BnAAz4B6wNLgTKKG0VIDBHwqitwpOcW+OOB540FdeipNKbUWFrUtn06o5xOij4KyDuqU0IE3Obl/rLA63pTzm9XA8jKACjdniZAaSKFmUpB1yUhAlTsUEpMh913wEkuTe7rKTzPAHqO44vpKPkFhH3cWWBVV6ogJVYZUgz/tXtIYelzI3Ct0fExIGx6j7iKWBUUveyYBehv1RIjIEsfqziq8Xp4pSBJOYTVJFQcVY3wCFeKUjVGyYfQWB00+5bEVBECrNS+qsOKBpVHNCVWHs+LS7H5PV5pOu9v0+OKEOAXR39w1e1C7wM6AkJ1eLmkRcrpRQiQrqobXO5S3vL3/4kBKMsCknV0k+iasVLUMV3UX5SAPGtED8EOT+L9YENnCasUIXNO2goChFWHqAIRyxXN4qI1BCQg9dJESYq8LnbrCBAR8t50Lig6i0krCRBoVWhVlt45wkBrCRBuRZyPuAguxIPe9lXqhpd9DcZMXOvdkPF0Xu/8dohNUmZ/1QQkuitXr+d4fryuFx3jywQYm6suAqSX8vLTXKJDt4QqO6rtLYspXWZ/nQQkOJTAUJZGIav19q9MvKvN1RUIWKMAY5P3EBBjqO393d4C/gMVHwRQlpx21QAAAABJRU5ErkJggg==);background-size:50%;background-position:50% 50%;background-repeat:no-repeat}.taro-video-toast-volume .taro-video-toast-value{width:80px;height:5px;margin-top:5px;margin-left:10px}.taro-video-toast-volume .taro-video-toast-value>.taro-video-toast-value-content{overflow:hidden}.taro-video-toast-volume-grids{width:80px;height:5px}.taro-video-toast-volume-grids-item{float:left;width:7.1px;height:5px;background-color:#000}.taro-video-toast-volume-grids-item:not(:first-child){margin-left:1px}.taro-video-toast.taro-video-toast-progress{background-color:rgba(0, 0, 0, 0.8);color:#fff;font-size:14px;line-height:18px;padding:6px}';var Video=function(){function e(e){var t=this;Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onPlay=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"play",7);this.onPause=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"pause",7);this.onEnded=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"ended",7);this.onTimeUpdate=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"timeupdate",7);this.onError=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"error",7);this.onFullScreenChange=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"fullscreenchange",7);this.onProgress=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"progress",7);this.onLoadedMetaData=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"loadedmetadata",7);this.currentTime=0;this.isDraggingProgress=false;this.gestureType="none";this.controls=true;this.autoplay=false;this.loop=false;this.muted=false;this.initialTime=0;this.objectFit="contain";this.showProgress=true;this.showFullscreenBtn=true;this.showPlayBtn=true;this.showCenterPlayBtn=true;this.showMuteBtn=false;this.danmuBtn=false;this.enableDanmu=false;this.enablePlayGesture=false;this.enableProgressGesture=true;this.vslideGesture=false;this.vslideGestureInFullscreen=true;this.nativeProps={};this._enableDanmu=false;this.isPlaying=false;this.isFirst=true;this.isFullScreen=false;this.fullScreenTimestamp=(new Date).getTime();this.isMute=false;this.analyseGesture=function(e){var i;var o={type:"none"};var r=e.touches[0].screenX;var n=e.touches[0].screenY;var a=r-t.lastTouchScreenX;var s=n-t.lastTouchScreenY;var l=t.isFullScreen?t.vslideGestureInFullscreen:t.vslideGesture;if(t.gestureType==="none"){var u=calcDist(a,s);if(u<10)return o;if(Math.abs(s)>=Math.abs(a)){if(l){t.gestureType="adjustVolume";t.lastVolume=t.videoRef.volume}else{return o}}else if(Math.abs(s)<Math.abs(a)){if(t.enableProgressGesture){t.gestureType="adjustProgress";t.lastPercentage=t.currentTime/((i=t.duration)!==null&&i!==void 0?i:t._duration)}else{return o}}}o.type=t.gestureType;o.dataX=normalizeNumber(a/200);o.dataY=normalizeNumber(s/200);return o};this.handlePlay=function(){t.isPlaying=true;t.isFirst=false;t.controlsRef.toggleVisibility(true);t.onPlay.emit()};this.handlePause=function(){t.isPlaying=false;t.controlsRef.toggleVisibility(true);t.onPause.emit()};this.handleEnded=function(){t.isFirst=true;t.pause();t.controlsRef.toggleVisibility();t.onEnded.emit()};this.handleTimeUpdate=throttle((function(e){return __awaiter(t,void 0,void 0,(function(){var t,i,o,r;return __generator(this,(function(n){switch(n.label){case 0:this.currentTime=this.videoRef.currentTime;o=this.duration||this._duration;return[4,this.controlsRef.getIsDraggingProgressBall()];case 1:r=n.sent();if(this.controls&&this.showProgress){if(!r&&!this.isDraggingProgress){this.controlsRef.setProgressBall(this.currentTime/o);this.controlsRef.setCurrentTime(this.currentTime)}}this.danmuRef.tick(this.currentTime);this.onTimeUpdate.emit({duration:(t=e.target)===null||t===void 0?void 0:t.duration,currentTime:(i=e.target)===null||i===void 0?void 0:i.currentTime});if(this.duration){if(this.currentTime>=this.duration){this.seek(0);this.handleEnded()}}return[2]}}))}))}),250);this.handleError=function(e){var i,o;t.onError.emit({errMsg:(o=(i=e.target)===null||i===void 0?void 0:i.error)===null||o===void 0?void 0:o.message})};this.handleDurationChange=function(){t._duration=t.videoRef.duration};this.handleProgress=function(){t.onProgress.emit()};this.handleLoadedMetaData=function(e){var i=e.target;t.onLoadedMetaData.emit({width:i.videoWidth,height:i.videoHeight,duration:i.duration})};this._play=function(){return t.videoRef.play()};this._pause=function(){return t.videoRef.pause()};this._stop=function(){t.videoRef.pause();t._seek(0)};this._seek=function(e){t.videoRef.currentTime=e};this.onTouchStartContainer=function(e){t.lastTouchScreenX=e.touches[0].screenX;t.lastTouchScreenY=e.touches[0].screenY};this.onClickContainer=function(){if(t.enablePlayGesture){var e=Date.now();if(e-t.lastClickedTime<300){t.isPlaying?t.pause():t.play()}t.lastClickedTime=e}t.controlsRef.toggleVisibility()};this.onClickFullScreenBtn=function(e){e.stopPropagation();t.toggleFullScreen()};this.handleFullScreenChange=function(e){var i=(new Date).getTime();if(!e.detail&&t.isFullScreen&&!document[screenFn.fullscreenElement]&&i-t.fullScreenTimestamp>100){t.toggleFullScreen(false)}};this.toggleFullScreen=function(e){if(e===void 0){e=!t.isFullScreen}t.isFullScreen=e;t.controlsRef.toggleVisibility(true);t.fullScreenTimestamp=(new Date).getTime();t.onFullScreenChange.emit({fullScreen:t.isFullScreen,direction:"vertical"});if(t.isFullScreen&&!document[screenFn.fullscreenElement]){setTimeout((function(){t.videoRef[screenFn.requestFullscreen]({navigationUI:"show"})}),0)}};this.toggleMute=function(e){e.stopPropagation();t.videoRef.muted=!t.isMute;t.controlsRef.toggleVisibility(true);t.isMute=!t.isMute};this.toggleDanmu=function(e){e.stopPropagation();t.controlsRef.toggleVisibility(true);t._enableDanmu=!t._enableDanmu}}e.prototype.componentWillLoad=function(){this._enableDanmu=this.enableDanmu};e.prototype.componentDidLoad=function(){if(this.initialTime){this.videoRef.currentTime=this.initialTime}this.danmuRef.sendDanmu(this.danmuList);if(document.addEventListener){document.addEventListener(screenFn.fullscreenchange,this.handleFullScreenChange)}};e.prototype.componentDidRender=function(){};e.prototype.disconnectedCallback=function(){if(document.removeEventListener){document.removeEventListener(screenFn.fullscreenchange,this.handleFullScreenChange)}};e.prototype.watchEnableDanmu=function(e){this._enableDanmu=e};e.prototype.onDocumentTouchMove=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i,o;return __generator(this,(function(r){switch(r.label){case 0:if(this.lastTouchScreenX===undefined||this.lastTouchScreenY===undefined)return[2];return[4,this.controlsRef.getIsDraggingProgressBall()];case 1:if(r.sent())return[2];t=this.analyseGesture(e);if(t.type==="adjustVolume"){this.toastVolumeRef.style.visibility="visible";i=Math.max(Math.min(this.lastVolume-t.dataY,1),0);this.videoRef.volume=i;this.toastVolumeBarRef.style.width=i*100+"%"}else if(t.type==="adjustProgress"){this.isDraggingProgress=true;this.nextPercentage=Math.max(Math.min(this.lastPercentage+t.dataX,1),0);if(this.controls&&this.showProgress){this.controlsRef.setProgressBall(this.nextPercentage);this.controlsRef.toggleVisibility(true)}o=this.duration||this._duration;this.toastProgressTitleRef.innerHTML=formatTime(this.nextPercentage*o)+" / "+formatTime(o);this.toastProgressRef.style.visibility="visible"}return[2]}}))}))};e.prototype.onDocumentTouchEnd=function(){var e;if(this.gestureType==="adjustVolume"){this.toastVolumeRef.style.visibility="hidden"}else if(this.gestureType==="adjustProgress"){this.toastProgressRef.style.visibility="hidden"}if(this.isDraggingProgress){this.isDraggingProgress=false;this.seek(this.nextPercentage*((e=this.duration)!==null&&e!==void 0?e:this._duration))}this.gestureType="none";this.lastTouchScreenX=undefined;this.lastTouchScreenY=undefined};e.prototype.play=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this._play();return[2]}))}))};e.prototype.pause=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this._pause();return[2]}))}))};e.prototype.stop=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this._stop();return[2]}))}))};e.prototype.seek=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._seek(e);return[2]}))}))};e.prototype.requestFullScreen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.toggleFullScreen(true);return[2]}))}))};e.prototype.exitFullScreen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.toggleFullScreen(false);return[2]}))}))};e.prototype.render=function(){var e=this;var t=this,i=t.src,o=t.controls,r=t.autoplay,n=t.loop,a=t.muted,s=t.poster,l=t.objectFit,u=t.isFirst,c=t.isMute,d=t.isFullScreen,g=t.duration,f=t._duration,A=t.showCenterPlayBtn,p=t.isPlaying,v=t._enableDanmu,m=t.showMuteBtn,b=t.danmuBtn,y=t.showFullscreenBtn,w=t.nativeProps;var E=formatTime(g||f||null);return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("taro-video-container",{"taro-video-type-fullscreen":d}),onTouchStart:this.onTouchStartContainer,onClick:this.onClickContainer},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("video",Object.assign({class:"taro-video-video",style:{"object-fit":l},ref:function(t){if(t){e.videoRef=t}},src:i,autoplay:r,loop:n,muted:a,poster:o?s:undefined,playsinline:true,"webkit-playsinline":true,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onTimeUpdate:this.handleTimeUpdate,onError:this.handleError,onDurationChange:this.handleDurationChange,onProgress:this.handleProgress,onLoadedMetaData:this.handleLoadedMetaData},w),"暂时不支持播放该视频"),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-video-danmu",{ref:function(t){if(t){e.danmuRef=t}},enable:v}),u&&A&&!p&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-cover"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-cover-play-button",onClick:function(){return e.play()}}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("p",{class:"taro-video-cover-duration"},E)),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("taro-video-control",{ref:function(t){if(t){e.controlsRef=t}},controls:o,currentTime:this.currentTime,duration:this.duration||this._duration||undefined,isPlaying:this.isPlaying,pauseFunc:this._pause,playFunc:this._play,seekFunc:this._seek,showPlayBtn:this.showPlayBtn,showProgress:this.showProgress},m&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("taro-video-mute",{"taro-video-type-mute":c}),onClick:this.toggleMute}),b&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("taro-video-danmu-button",{"taro-video-danmu-button-active":v}),onClick:this.toggleDanmu},"弹幕"),y&&Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])("taro-video-fullscreen",{"taro-video-type-fullscreen":d}),onClick:this.onClickFullScreenBtn})),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast taro-video-toast-volume",ref:function(t){if(t){e.toastVolumeRef=t}}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast-title"},"音量"),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast-icon"}),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast-value"},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast-value-content",ref:function(t){if(t){e.toastVolumeBarRef=t}}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast-volume-grids"},Array(10).fill(1).map((function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast-volume-grids-item"})})))))),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast taro-video-toast-progress",ref:function(t){if(t){e.toastProgressRef=t}}},Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("div",{class:"taro-video-toast-title",ref:function(t){if(t){e.toastProgressTitleRef=t}}})))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{enableDanmu:["watchEnableDanmu"]}},enumerable:false,configurable:true});return e}();Video.style=indexCss;var VideoDanmu=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.list=[];this.danmuElList=[];this.currentTime=0;this.enable=false;this.danmuList=[]}e.prototype.ensureProperties=function(e){var t=Object.assign({},e);if(!("time"in e)){t.time=this.currentTime}t.key=Math.random();t.bottom=Math.random()*90+5+"%";return t};e.prototype.sendDanmu=function(e){if(e===void 0){e=[]}return __awaiter(this,void 0,void 0,(function(){var t;var i=this;return __generator(this,(function(o){if(Array.isArray(e)){this.list=__spreadArray(__spreadArray([],this.list),e.map((function(e){return i.ensureProperties(e)})))}else{t=e;this.list=__spreadArray(__spreadArray([],this.list),[Object.assign({},this.ensureProperties(t))])}return[2]}))}))};e.prototype.tick=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i,o,r;return __generator(this,(function(n){this.currentTime=e;if(!this.enable)return[2];t=this.list;i=t.filter((function(t){var i=t.time;return e-i<4&&e>i}));o=false;r=this.danmuList;if(i.length!==r.length){o=true}else{o=i.some((function(e){var t=e.key;return r.every((function(e){return t!==e.key}))}))}if(o){this.danmuList=i}return[2]}))}))};e.prototype.componentDidUpdate=function(){var e=this;requestAnimationFrame((function(){setTimeout((function(){var t=e.danmuElList.splice(0);t.forEach((function(e){e.style.left="0";e.style.webkitTransform="translateX(-100%)";e.style.transform="translateX(-100%)"}))}))}))};e.prototype.render=function(){var e=this;if(!this.enable)return"";return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],{class:"taro-video-danmu"},this.danmuList.map((function(t){var i=t.text,o=t.color,r=t.bottom,n=t.key;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("p",{class:"taro-video-danmu-item",key:n,style:{color:o,bottom:r},ref:function(t){if(t){e.danmuElList.push(t)}}},i)})))};return e}();

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_view_core", function() { return View; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
var indexCss="body,html{-webkit-tap-highlight-color:rgba(0, 0, 0, 0);user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}taro-view-core{display:block}";var View=function(){function t(t){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,t);this.onLongPress=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"longpress",7);this.hoverStartTime=50;this.hoverStayTime=400;this.hover=false;this.touch=false;this.startTime=0}t.prototype.onTouchStart=function(){var t=this;if(this.hoverClass){this.touch=true;setTimeout((function(){if(t.touch){t.hover=true}}),this.hoverStartTime)}this.timeoutEvent=setTimeout((function(){t.onLongPress.emit()}),350);this.startTime=Date.now()};t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)};t.prototype.onTouchEnd=function(){var t=this;var e=Date.now()-this.startTime;if(e<350){clearTimeout(this.timeoutEvent)}if(this.hoverClass){this.touch=false;setTimeout((function(){if(!t.touch){t.hover=false}}),this.hoverStayTime)}};t.prototype.componentDidRender=function(){var t=this.el;t.childNodes.forEach((function(e){if(e.nodeType===document.COMMENT_NODE)t.removeChild(e)}))};t.prototype.render=function(){var t;var e=Object(_index_85e10859_js__WEBPACK_IMPORTED_MODULE_1__[/* c */ "a"])((t={},t[""+this.hoverClass]=this.hover,t));var i={};if(!!this.animation){i["animation"]=this.animation;i["data-animation"]=this.animation}return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "a"],Object.assign({class:e},i),Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* g */ "d"])(this)},enumerable:false,configurable:true});return t}();View.style=indexCss;

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taro_web_view_core", function() { return WebView; });
/* harmony import */ var _index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var indexCss="iframe{border:none}.taro-webview{position:fixed;top:0;bottom:0;width:100%;height:100%;z-index:999}";var WebView=function(){function e(e){Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "g"])(this,e);this.onLoad=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"load",7);this.onError=Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"error",7)}e.prototype.render=function(){var e=this,r=e.src,t=e.onLoad,o=e.onError;return Object(_index_165a6222_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "e"])("iframe",{class:"taro-webview",onLoad:function(e){e.stopPropagation();t.emit({src:r})},onError:function(e){e.stopPropagation();o.emit({src:r})},src:r})};return e}();WebView.style=indexCss;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

(function(){if(typeof window!=="object"){return}if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){if(!("isIntersecting"in window.IntersectionObserverEntry.prototype)){Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}})}return}var t=window.document;function e(t){this.time=t.time;this.target=t.target;this.rootBounds=t.rootBounds;this.boundingClientRect=t.boundingClientRect;this.intersectionRect=t.intersectionRect||a();this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect;var n=e.width*e.height;var r=this.intersectionRect;var i=r.width*r.height;if(n){this.intersectionRatio=Number((i/n).toFixed(4))}else{this.intersectionRatio=this.isIntersecting?1:0}}function n(t,e){var n=e||{};if(typeof t!="function"){throw new Error("callback must be a function")}if(n.root&&n.root.nodeType!=1){throw new Error("root must be an Element")}this._checkForIntersections=i(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=t;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(n.rootMargin);this.thresholds=this._initThresholds(n.threshold);this.root=n.root||null;this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}n.prototype.THROTTLE_TIMEOUT=100;n.prototype.POLL_INTERVAL=null;n.prototype.USE_MUTATION_OBSERVER=true;n.prototype.observe=function(t){var e=this._observationTargets.some((function(e){return e.element==t}));if(e){return}if(!(t&&t.nodeType==1)){throw new Error("target must be an Element")}this._registerInstance();this._observationTargets.push({element:t,entry:null});this._monitorIntersections();this._checkForIntersections()};n.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t}));if(!this._observationTargets.length){this._unmonitorIntersections();this._unregisterInstance()}};n.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance()};n.prototype.takeRecords=function(){var t=this._queuedEntries.slice();this._queuedEntries=[];return t};n.prototype._initThresholds=function(t){var e=t||[0];if(!Array.isArray(e))e=[e];return e.sort().filter((function(t,e,n){if(typeof t!="number"||isNaN(t)||t<0||t>1){throw new Error("threshold must be a number between 0 and 1 inclusively")}return t!==n[e-1]}))};n.prototype._parseRootMargin=function(t){var e=t||"0px";var n=e.split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e){throw new Error("rootMargin must be specified in pixels or percent")}return{value:parseFloat(e[1]),unit:e[2]}}));n[1]=n[1]||n[0];n[2]=n[2]||n[0];n[3]=n[3]||n[1];return n};n.prototype._monitorIntersections=function(){if(!this._monitoringIntersections){this._monitoringIntersections=true;if(this.POLL_INTERVAL){this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL)}else{o(window,"resize",this._checkForIntersections,true);o(t,"scroll",this._checkForIntersections,true);if(this.USE_MUTATION_OBSERVER&&"MutationObserver"in window){this._domObserver=new MutationObserver(this._checkForIntersections);this._domObserver.observe(t,{attributes:true,childList:true,characterData:true,subtree:true})}}}};n.prototype._unmonitorIntersections=function(){if(this._monitoringIntersections){this._monitoringIntersections=false;clearInterval(this._monitoringInterval);this._monitoringInterval=null;s(window,"resize",this._checkForIntersections,true);s(t,"scroll",this._checkForIntersections,true);if(this._domObserver){this._domObserver.disconnect();this._domObserver=null}}};n.prototype._checkForIntersections=function(){var t=this._rootIsInDom();var n=t?this._getRootRect():a();this._observationTargets.forEach((function(i){var o=i.element;var s=c(o);var h=this._rootContainsTarget(o);var a=i.entry;var u=t&&h&&this._computeTargetAndRootIntersection(o,n);var f=i.entry=new e({time:r(),target:o,boundingClientRect:s,rootBounds:n,intersectionRect:u});if(!a){this._queuedEntries.push(f)}else if(t&&h){if(this._hasCrossedThreshold(a,f)){this._queuedEntries.push(f)}}else{if(a&&a.isIntersecting){this._queuedEntries.push(f)}}}),this);if(this._queuedEntries.length){this._callback(this.takeRecords(),this)}};n.prototype._computeTargetAndRootIntersection=function(e,n){if(window.getComputedStyle(e).display=="none")return;var r=c(e);var i=r;var o=f(e);var s=false;while(!s){var a=null;var u=o.nodeType==1?window.getComputedStyle(o):{};if(u.display=="none")return;if(o==this.root||o==t){s=true;a=n}else{if(o!=t.body&&o!=t.documentElement&&u.overflow!="visible"){a=c(o)}}if(a){i=h(a,i);if(!i)break}o=f(o)}return i};n.prototype._getRootRect=function(){var e;if(this.root){e=c(this.root)}else{var n=t.documentElement;var r=t.body;e={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)};n.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return e.unit=="px"?e.value:e.value*(n%2?t.width:t.height)/100}));var n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};n.width=n.right-n.left;n.height=n.bottom-n.top;return n};n.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1;var r=e.isIntersecting?e.intersectionRatio||0:-1;if(n===r)return;for(var i=0;i<this.thresholds.length;i++){var o=this.thresholds[i];if(o==n||o==r||o<n!==o<r){return true}}};n.prototype._rootIsInDom=function(){return!this.root||u(t,this.root)};n.prototype._rootContainsTarget=function(e){return u(this.root||t,e)};n.prototype._registerInstance=function(){};n.prototype._unregisterInstance=function(){};function r(){return window.performance&&performance.now&&performance.now()}function i(t,e){var n=null;return function(){if(!n){n=setTimeout((function(){t();n=null}),e)}}}function o(t,e,n,r){if(typeof t.addEventListener=="function"){t.addEventListener(e,n,r||false)}else if(typeof t.attachEvent=="function"){t.attachEvent("on"+e,n)}}function s(t,e,n,r){if(typeof t.removeEventListener=="function"){t.removeEventListener(e,n,r||false)}else if(typeof t.detatchEvent=="function"){t.detatchEvent("on"+e,n)}}function h(t,e){var n=Math.max(t.top,e.top);var r=Math.min(t.bottom,e.bottom);var i=Math.max(t.left,e.left);var o=Math.min(t.right,e.right);var s=o-i;var h=r-n;return s>=0&&h>=0&&{top:n,bottom:r,left:i,right:o,width:s,height:h}}function c(t){var e;try{e=t.getBoundingClientRect()}catch(t){}if(!e)return a();if(!(e.width&&e.height)){e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}}return e}function a(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function u(t,e){var n=e;while(n){if(n==t)return true;n=f(n)}return false}function f(t){var e=t.parentNode;if(e&&e.nodeType==11&&e.host){return e.host}if(e&&e.assignedSlot){return e.assignedSlot.parentNode}return e}window.IntersectionObserver=n;window.IntersectionObserverEntry=e})();

/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports) {

(function(){
  /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(a){var b=aa.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function l(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
  function n(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
  function p(a,b,d){d=void 0===d?new Set:d;for(var c=a;c;){if(c.nodeType===Node.ELEMENT_NODE){var e=c;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){c=e.import;if(c instanceof Node&&!d.has(c))for(d.add(c),c=c.firstChild;c;c=c.nextSibling)p(c,b,d);c=n(a,e);continue}else if("template"===f){c=n(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)p(e,b,d)}c=c.firstChild?c.firstChild:n(a,c)}}function r(a,b,d){a[b]=d};function u(){this.a=new Map;this.g=new Map;this.c=[];this.f=[];this.b=!1}function ba(a,b,d){a.a.set(b,d);a.g.set(d.constructorFunction,d)}function ca(a,b){a.b=!0;a.c.push(b)}function da(a,b){a.b=!0;a.f.push(b)}function v(a,b){a.b&&p(b,function(b){return w(a,b)})}function w(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var d=0;d<a.c.length;d++)a.c[d](b);for(d=0;d<a.f.length;d++)a.f[d](b)}}
  function x(a,b){var d=[];p(b,function(b){return d.push(b)});for(b=0;b<d.length;b++){var c=d[b];1===c.__CE_state?a.connectedCallback(c):y(a,c)}}function z(a,b){var d=[];p(b,function(b){return d.push(b)});for(b=0;b<d.length;b++){var c=d[b];1===c.__CE_state&&a.disconnectedCallback(c)}}
  function A(a,b,d){d=void 0===d?{}:d;var c=d.u||new Set,e=d.i||function(b){return y(a,b)},f=[];p(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var d=b.import;d instanceof Node&&(d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0);d&&"complete"===d.readyState?d.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var d=b.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;var f=new Set(c);f.delete(d);A(a,d,{u:f,i:e})}})}else f.push(b)},c);if(a.b)for(b=
  0;b<f.length;b++)w(a,f[b]);for(b=0;b<f.length;b++)e(f[b])}
  function y(a,b){if(void 0===b.__CE_state){var d=b.ownerDocument;if(d.defaultView||d.__CE_isImportDocument&&d.__CE_hasRegistry)if(d=a.a.get(b.localName)){d.constructionStack.push(b);var c=d.constructorFunction;try{try{if(new c!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(t){throw b.__CE_state=2,t;}b.__CE_state=1;b.__CE_definition=d;if(d.attributeChangedCallback)for(d=d.observedAttributes,c=0;c<d.length;c++){var e=
  d[c],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}l(b)&&a.connectedCallback(b)}}}u.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};u.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
  u.prototype.attributeChangedCallback=function(a,b,d,c,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,d,c,e)};function B(a){var b=document;this.c=a;this.a=b;this.b=void 0;A(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function C(a){a.b&&a.b.disconnect()}B.prototype.f=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||C(this);for(b=0;b<a.length;b++)for(var d=a[b].addedNodes,c=0;c<d.length;c++)A(this.c,d[c])};function ea(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a)})}function D(a){if(a.a)throw Error("Already resolved.");a.a=void 0;a.b&&a.b(void 0)};function E(a){this.c=!1;this.a=a;this.j=new Map;this.f=function(b){return b()};this.b=!1;this.g=[];this.o=new B(a)}
  E.prototype.l=function(a,b){var d=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var c=function(b){var a=e[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
  return a},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=c("connectedCallback");var t=c("disconnectedCallback");var k=c("adoptedCallback");var h=c("attributeChangedCallback");var m=b.observedAttributes||[]}catch(q){return}finally{this.c=!1}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:t,adoptedCallback:k,attributeChangedCallback:h,observedAttributes:m,constructionStack:[]};ba(this.a,
  a,b);this.g.push(b);this.b||(this.b=!0,this.f(function(){return fa(d)}))};E.prototype.i=function(a){A(this.a,a)};
  function fa(a){if(!1!==a.b){a.b=!1;for(var b=a.g,d=[],c=new Map,e=0;e<b.length;e++)c.set(b[e].localName,[]);A(a.a,document,{i:function(b){if(void 0===b.__CE_state){var e=b.localName,f=c.get(e);f?f.push(b):a.a.a.get(e)&&d.push(b)}}});for(e=0;e<d.length;e++)y(a.a,d[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=c.get(f.localName);for(var t=0;t<f.length;t++)y(a.a,f[t]);(e=a.j.get(e))&&D(e)}}}E.prototype.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
  E.prototype.m=function(a){if(!g(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.j.get(a);if(b)return b.c;b=new ea;this.j.set(a,b);this.a.a.get(a)&&!this.g.some(function(b){return b.localName===a})&&D(b);return b.c};E.prototype.s=function(a){C(this.o);var b=this.f;this.f=function(d){return a(function(){return b(d)})}};window.CustomElementRegistry=E;E.prototype.define=E.prototype.l;E.prototype.upgrade=E.prototype.i;E.prototype.get=E.prototype.get;
  E.prototype.whenDefined=E.prototype.m;E.prototype.polyfillWrapFlushCallback=E.prototype.s;var F=window.Document.prototype.createElement,G=window.Document.prototype.createElementNS,ha=window.Document.prototype.importNode,ia=window.Document.prototype.prepend,ja=window.Document.prototype.append,ka=window.DocumentFragment.prototype.prepend,la=window.DocumentFragment.prototype.append,H=window.Node.prototype.cloneNode,I=window.Node.prototype.appendChild,J=window.Node.prototype.insertBefore,K=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,
  "textContent"),N=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,ma=window.Element.prototype.insertAdjacentElement,na=window.Element.prototype.insertAdjacentHTML,oa=window.Element.prototype.prepend,
  pa=window.Element.prototype.append,V=window.Element.prototype.before,qa=window.Element.prototype.after,ra=window.Element.prototype.replaceWith,sa=window.Element.prototype.remove,ta=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ua=window.HTMLElement.prototype.insertAdjacentElement,va=window.HTMLElement.prototype.insertAdjacentHTML;var wa=new function(){};function xa(){var a=X;window.HTMLElement=function(){function b(){var b=this.constructor,c=a.g.get(b);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var e=c.constructionStack;if(0===e.length)return e=F.call(document,c.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=c,w(a,e),e;c=e.length-1;var f=e[c];if(f===wa)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
  e[c]=wa;Object.setPrototypeOf(f,b.prototype);w(a,f);return f}b.prototype=ta.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function Y(a,b,d){function c(b){return function(d){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var f=[],m=0;m<e.length;m++){var q=e[m];q instanceof Element&&l(q)&&f.push(q);if(q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)c.push(q);else c.push(q)}b.apply(this,e);for(e=0;e<f.length;e++)z(a,f[e]);if(l(this))for(e=0;e<c.length;e++)f=c[e],f instanceof Element&&x(a,f)}}void 0!==d.h&&(b.prepend=c(d.h));void 0!==d.append&&(b.append=c(d.append))};function ya(){var a=X;r(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var d=a.a.get(b);if(d)return new d.constructorFunction}b=F.call(this,b);w(a,b);return b});r(Document.prototype,"importNode",function(b,d){b=ha.call(this,b,!!d);this.__CE_hasRegistry?A(a,b):v(a,b);return b});r(Document.prototype,"createElementNS",function(b,d){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var c=a.a.get(d);if(c)return new c.constructorFunction}b=G.call(this,b,
  d);w(a,b);return b});Y(a,Document.prototype,{h:ia,append:ja})};function za(){function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var d=void 0;if(this.firstChild){var e=this.childNodes,k=e.length;if(0<k&&l(this)){d=Array(k);for(var h=0;h<k;h++)d[h]=e[h]}}c.set.call(this,a);if(d)for(a=0;a<d.length;a++)z(b,d[a])}}})}var b=X;r(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);
  a=J.call(this,a,c);if(l(this))for(c=0;c<e.length;c++)x(b,e[c]);return a}e=l(a);c=J.call(this,a,c);e&&z(b,a);l(this)&&x(b,a);return c});r(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=I.call(this,a);if(l(this))for(var e=0;e<c.length;e++)x(b,c[e]);return a}c=l(a);e=I.call(this,a);c&&z(b,a);l(this)&&x(b,a);return e});r(Node.prototype,"cloneNode",function(a){a=H.call(this,!!a);this.ownerDocument.__CE_hasRegistry?A(b,a):v(b,
  a);return a});r(Node.prototype,"removeChild",function(a){var c=l(a),e=K.call(this,a);c&&z(b,a);return e});r(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=L.call(this,a,c);if(l(this))for(z(b,c),c=0;c<e.length;c++)x(b,e[c]);return a}e=l(a);var f=L.call(this,a,c),d=l(this);d&&z(b,c);e&&z(b,a);d&&x(b,a);return f});M&&M.get?a(Node.prototype,M):ca(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],
  b=0;b<this.childNodes.length;b++){var f=this.childNodes[b];f.nodeType!==Node.COMMENT_NODE&&a.push(f.textContent)}return a.join("")},set:function(a){for(;this.firstChild;)K.call(this,this.firstChild);null!=a&&""!==a&&I.call(this,document.createTextNode(a))}})})};function Aa(a){function b(b){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var k=[],h=0;h<c.length;h++){var m=c[h];m instanceof Element&&l(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)d.push(m);else d.push(m)}b.apply(this,c);for(c=0;c<k.length;c++)z(a,k[c]);if(l(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&x(a,k)}}var d=Element.prototype;void 0!==V&&(d.before=b(V));void 0!==V&&(d.after=b(qa));void 0!==ra&&
  r(d,"replaceWith",function(b){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var d=[],k=0;k<e.length;k++){var h=e[k];h instanceof Element&&l(h)&&d.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)c.push(h);else c.push(h)}k=l(this);ra.apply(this,e);for(e=0;e<d.length;e++)z(a,d[e]);if(k)for(z(a,this),e=0;e<c.length;e++)d=c[e],d instanceof Element&&x(a,d)});void 0!==sa&&r(d,"remove",function(){var b=l(this);sa.call(this);b&&z(a,this)})};function Ba(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var e=this,d=void 0;l(this)&&(d=[],p(this,function(a){a!==e&&d.push(a)}));b.set.call(this,a);if(d)for(var f=0;f<d.length;f++){var t=d[f];1===t.__CE_state&&c.disconnectedCallback(t)}this.ownerDocument.__CE_hasRegistry?A(c,this):v(c,this);return a}})}function b(a,b){r(a,"insertAdjacentElement",function(a,e){var d=l(e);a=b.call(this,a,e);d&&z(c,e);l(a)&&x(c,e);return a})}
  function d(a,b){function e(a,b){for(var e=[];a!==b;a=a.nextSibling)e.push(a);for(b=0;b<e.length;b++)A(c,e[b])}r(a,"insertAdjacentHTML",function(a,c){a=a.toLowerCase();if("beforebegin"===a){var d=this.previousSibling;b.call(this,a,c);e(d||this.parentNode.firstChild,this)}else if("afterbegin"===a)d=this.firstChild,b.call(this,a,c),e(this.firstChild,d);else if("beforeend"===a)d=this.lastChild,b.call(this,a,c),e(d||this.firstChild,null);else if("afterend"===a)d=this.nextSibling,b.call(this,a,c),e(this.nextSibling,
  d);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var c=X;N&&r(Element.prototype,"attachShadow",function(a){a=N.call(this,a);var b=c;if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var e=0;e<b.c.length;e++)b.c[e](a)}return this.__CE_shadowRoot=a});O&&O.get?a(Element.prototype,O):W&&W.get?a(HTMLElement.prototype,W):da(c,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return H.call(this,!0).innerHTML},
  set:function(a){var b="template"===this.localName,c=b?this.content:this,e=G.call(document,this.namespaceURI,this.localName);for(e.innerHTML=a;0<c.childNodes.length;)K.call(c,c.childNodes[0]);for(a=b?e.content:e;0<a.childNodes.length;)I.call(c,a.childNodes[0])}})});r(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return Q.call(this,a,b);var e=P.call(this,a);Q.call(this,a,b);b=P.call(this,a);c.attributeChangedCallback(this,a,e,b,null)});r(Element.prototype,"setAttributeNS",function(a,
  b,d){if(1!==this.__CE_state)return T.call(this,a,b,d);var e=S.call(this,a,b);T.call(this,a,b,d);d=S.call(this,a,b);c.attributeChangedCallback(this,b,e,d,a)});r(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return R.call(this,a);var b=P.call(this,a);R.call(this,a);null!==b&&c.attributeChangedCallback(this,a,b,null,null)});r(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return U.call(this,a,b);var d=S.call(this,a,b);U.call(this,a,b);var e=S.call(this,
  a,b);d!==e&&c.attributeChangedCallback(this,b,d,e,a)});ua?b(HTMLElement.prototype,ua):ma?b(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");va?d(HTMLElement.prototype,va):na?d(Element.prototype,na):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Y(c,Element.prototype,{h:oa,append:pa});Aa(c)};var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new u;xa();ya();Y(X,DocumentFragment.prototype,{h:ka,append:la});za();Ba();document.__CE_hasRegistry=!0;var customElements=new E(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

// Polyfill document.baseURI
"string"!==typeof document.baseURI&&Object.defineProperty(Document.prototype,"baseURI",{enumerable:!0,configurable:!0,get:function(){var a=document.querySelector("base");return a&&a.href?a.href:document.URL}});

// Polyfill CustomEvent
"function"!==typeof window.CustomEvent&&(window.CustomEvent=function(c,a){a=a||{bubbles:!1,cancelable:!1,detail:void 0};var b=document.createEvent("CustomEvent");b.initCustomEvent(c,a.bubbles,a.cancelable,a.detail);return b},window.CustomEvent.prototype=window.Event.prototype);

// Event.composedPath
(function(b,c,d){b.composedPath||(b.composedPath=function(){if(this.path)return this.path;var a=this.target;for(this.path=[];null!==a.parentNode;)this.path.push(a),a=a.parentNode;this.path.push(c,d);return this.path})})(Event.prototype,document,window);

/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
(function(a){"function"!==typeof a.matches&&(a.matches=a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=0;a[b]&&a[b]!==this;)++b;return!!a[b]});"function"!==typeof a.closest&&(a.closest=function(a){for(var b=this;b&&1===b.nodeType;){if(b.matches(a))return b;b=b.parentNode}return null})})(window.Element.prototype);

/*!
Element.getRootNode()
*/
(function(c){function d(a){a=b(a);return a&&11===a.nodeType?d(a.host):a}function b(a){return a&&a.parentNode?b(a.parentNode):a}"function"!==typeof c.getRootNode&&(c.getRootNode=function(a){return a&&a.composed?d(this):b(this)})})(Element.prototype);

/*!
Element.isConnected()
*/
(function(a){"isConnected"in a||Object.defineProperty(a,"isConnected",{configurable:!0,enumerable:!0,get:function(){var a=this.getRootNode({composed:!0});return a&&9===a.nodeType}})})(Element.prototype);

/*!
Element.remove()
*/
(function(b){b.forEach(function(a){a.hasOwnProperty("remove")||Object.defineProperty(a,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})})})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);

/*!
Element.classList
*/
!function(e){'classList'in e||Object.defineProperty(e,"classList",{get:function(){var e=this,t=(e.getAttribute("class")||"").replace(/^\s+|\s$/g,"").split(/\s+/g);function n(){t.length>0?e.setAttribute("class",t.join(" ")):e.removeAttribute("class")}return""===t[0]&&t.splice(0,1),t.toggle=function(e,i){void 0!==i?i?t.add(e):t.remove(e):-1!==t.indexOf(e)?t.splice(t.indexOf(e),1):t.push(e),n()},t.add=function(){for(var e=[].slice.call(arguments),i=0,s=e.length;i<s;i++)-1===t.indexOf(e[i])&&t.push(e[i]);n()},t.remove=function(){for(var e=[].slice.call(arguments),i=0,s=e.length;i<s;i++)-1!==t.indexOf(e[i])&&t.splice(t.indexOf(e[i]),1);n()},t.item=function(e){return t[e]},t.contains=function(e){return-1!==t.indexOf(e)},t.replace=function(e,i){-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1,i),n()},t.value=e.getAttribute("class")||"",t}})}(Element.prototype);

/*!
DOMTokenList
*/
(function(b){try{document.body.classList.add()}catch(e){var c=b.add,d=b.remove;b.add=function(){for(var a=0;a<arguments.length;a++)c.call(this,arguments[a])};b.remove=function(){for(var a=0;a<arguments.length;a++)d.call(this,arguments[a])}}})(DOMTokenList.prototype);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * core-js 3.6.5
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev (zloirock.ru)
 */
!function(t){"use strict";!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){e(1),e(55),e(62),e(68),e(70),e(71),e(72),e(73),e(75),e(76),e(78),e(87),e(88),e(89),e(98),e(99),e(101),e(102),e(103),e(105),e(106),e(107),e(108),e(110),e(111),e(112),e(113),e(114),e(115),e(116),e(117),e(118),e(127),e(130),e(131),e(133),e(135),e(136),e(137),e(138),e(139),e(141),e(143),e(146),e(148),e(150),e(151),e(153),e(154),e(155),e(156),e(157),e(159),e(160),e(162),e(163),e(164),e(165),e(166),e(167),e(168),e(169),e(170),e(172),e(173),e(183),e(184),e(185),e(189),e(191),e(192),e(193),e(194),e(195),e(196),e(198),e(201),e(202),e(203),e(204),e(208),e(209),e(212),e(213),e(214),e(215),e(216),e(217),e(218),e(219),e(221),e(222),e(223),e(226),e(227),e(228),e(229),e(230),e(231),e(232),e(233),e(234),e(235),e(236),e(237),e(238),e(240),e(241),e(243),e(248),t.exports=e(246)},function(t,n,e){var r=e(2),o=e(6),i=e(45),a=e(14),u=e(46),c=e(39),f=e(47),s=e(48),l=e(52),p=e(49),h=e(53),v=p("isConcatSpreadable"),g=h>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),d=l("concat"),y=function(t){if(!a(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!g||!d},{concat:function(t){var n,e,r,o,i,a=u(this),l=s(a,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?a:arguments[n],y(i)){if(p+(o=c(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,e){var r=e(3),o=e(4).f,i=e(18),a=e(21),u=e(22),c=e(32),f=e(44);t.exports=function(t,n){var e,s,l,p,h,v=t.target,g=t.global,d=t.stat;if(e=g?r:d?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(h=o(e,s))&&h.value:e[s],!f(g?s:v+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,s,p,t)}}},function(t,n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof global&&global)||Function("return this")()},function(t,n,e){var r=e(5),o=e(7),i=e(8),a=e(9),u=e(13),c=e(15),f=e(16),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=a(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(6);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(10),o=e(12);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(6),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(14);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(5),o=e(6),i=e(17);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),o=e(14),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,n,e){var r=e(5),o=e(19),i=e(8);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(5),o=e(16),i=e(20),a=e(13),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=a(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(14);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(3),o=e(18),i=e(15),a=e(22),u=e(23),c=e(25),f=c.get,s=c.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var c=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(c?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(3),o=e(18);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(24),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(3),o=e(22),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r,o,i,a=e(26),u=e(3),c=e(14),f=e(18),s=e(15),l=e(27),p=e(31),h=u.WeakMap;if(a){var v=new h,g=v.get,d=v.has,y=v.set;r=function(t,n){return y.call(v,t,n),n},o=function(t){return g.call(v,t)||{}},i=function(t){return d.call(v,t)}}else{var x=l("state");p[x]=!0,r=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!c(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(3),o=e(23),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(28),o=e(30),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(29),o=e(24);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(15),o=e(33),i=e(4),a=e(19);t.exports=function(t,n){for(var e=o(n),u=a.f,c=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,c(n,s))}}},function(t,n,e){var r=e(34),o=e(36),i=e(43),a=e(20);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(a(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(35),o=e(3),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(3);t.exports=r},function(t,n,e){var r=e(37),o=e(42).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(15),o=e(9),i=e(38).indexOf,a=e(31);t.exports=function(t,n){var e,u=o(t),c=0,f=[];for(e in u)!r(a,e)&&r(u,e)&&f.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(9),o=e(39),i=e(41),a=function(t){return function(n,e,a){var u,c=r(n),f=o(c.length),s=i(a,f);if(t&&e!=e){for(;f>s;)if((u=c[s++])!=u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,n,e){var r=e(40),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(40),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(6),o=/#|\.prototype\./,i=function(t,n){var e=u[a(t)];return e==f||e!=c&&("function"==typeof n?r(n):!!n)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(12);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(13),o=e(19),i=e(8);t.exports=function(t,n,e){var a=r(n);a in t?o.f(t,a,i(0,e)):t[a]=e}},function(t,n,e){var r=e(14),o=e(45),i=e(49)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(3),o=e(28),i=e(15),a=e(30),u=e(50),c=e(51),f=o("wks"),s=r.Symbol,l=c?s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,e){var r=e(6);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(50);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(6),o=e(49),i=e(53),a=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(3),a=e(54),u=i.process,c=u&&u.versions,f=c&&c.v8;f?o=(r=f.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(34);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(2),o=e(56),i=e(57);r({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},function(t,n,e){var r=e(46),o=e(41),i=e(39),a=Math.min;t.exports=[].copyWithin||function(t,n){var e=r(this),u=i(e.length),c=o(t,u),f=o(n,u),s=arguments.length>2?arguments[2]:void 0,l=a((void 0===s?u:o(s,u))-f,u-c),p=1;for(f<c&&c<f+l&&(p=-1,f+=l-1,c+=l-1);l-- >0;)f in e?e[c]=e[f]:delete e[c],c+=p,f+=p;return e}},function(t,n,e){var r=e(49),o=e(58),i=e(19),a=r("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},function(t,n,e){var r,o=e(20),i=e(59),a=e(42),u=e(31),c=e(61),f=e(17),s=e(27),l=s("IE_PROTO"),p=function(){},h=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(h("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F);for(var e=a.length;e--;)delete v.prototype[a[e]];return v()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=v(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(5),o=e(19),i=e(20),a=e(60);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=a(n),u=r.length,c=0;u>c;)o.f(t,e=r[c++],n[e]);return t}},function(t,n,e){var r=e(37),o=e(42);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(34);t.exports=r("document","documentElement")},function(t,n,e){var r=e(2),o=e(63).every,i=e(66),a=e(67),u=i("every"),c=a("every");r({target:"Array",proto:!0,forced:!u||!c},{every:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(64),o=e(10),i=e(46),a=e(39),u=e(48),c=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(h,v,g,d){for(var y,x,m=i(h),b=o(m),S=r(v,g,3),E=a(b.length),w=0,O=d||u,R=n?O(h,E):e?O(h,0):void 0;E>w;w++)if((p||w in b)&&(x=S(y=b[w],w,m),t))if(n)R[w]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:c.call(R,y)}else if(s)return!1;return l?-1:f||s?s:R}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(65);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(6);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(5),o=e(6),i=e(15),a=Object.defineProperty,u={},c=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:c,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?a(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){var r=e(2),o=e(69),i=e(57);r({target:"Array",proto:!0},{fill:o}),i("fill")},function(t,n,e){var r=e(46),o=e(41),i=e(39);t.exports=function(t){for(var n=r(this),e=i(n.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,e),c=a>2?arguments[2]:void 0,f=void 0===c?e:o(c,e);f>u;)n[u++]=t;return n}},function(t,n,e){var r=e(2),o=e(63).filter,i=e(52),a=e(67),u=i("filter"),c=a("filter");r({target:"Array",proto:!0,forced:!u||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(2),o=e(63).find,i=e(57),a=e(67),u=!0,c=a("find");"find"in[]&&Array(1).find((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,n,e){var r=e(2),o=e(63).findIndex,i=e(57),a=e(67),u=!0,c=a("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(t,n,e){var r=e(2),o=e(74),i=e(46),a=e(39),u=e(40),c=e(48);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=i(this),e=a(n.length),r=c(n,0);return r.length=o(r,n,n,e,0,void 0===t?1:u(t)),r}})},function(t,n,e){var r=e(45),o=e(39),i=e(64),a=function(t,n,e,u,c,f,s,l){for(var p,h=c,v=0,g=!!s&&i(s,l,3);v<u;){if(v in e){if(p=g?g(e[v],v,n):e[v],f>0&&r(p))h=a(t,n,p,o(p.length),h,f-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=p}h++}v++}return h};t.exports=a},function(t,n,e){var r=e(2),o=e(74),i=e(46),a=e(39),u=e(65),c=e(48);r({target:"Array",proto:!0},{flatMap:function(t){var n,e=i(this),r=a(e.length);return u(t),(n=c(e,0)).length=o(n,e,e,r,0,1,t,arguments.length>1?arguments[1]:void 0),n}})},function(t,n,e){var r=e(2),o=e(77);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(63).forEach,o=e(66),i=e(67),a=o("forEach"),u=i("forEach");t.exports=a&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(2),o=e(79);r({target:"Array",stat:!0,forced:!e(86)((function(t){Array.from(t)}))},{from:o})},function(t,n,e){var r=e(64),o=e(46),i=e(80),a=e(81),u=e(39),c=e(47),f=e(83);t.exports=function(t){var n,e,s,l,p,h,v=o(t),g="function"==typeof this?this:Array,d=arguments.length,y=d>1?arguments[1]:void 0,x=void 0!==y,m=f(v),b=0;if(x&&(y=r(y,d>2?arguments[2]:void 0,2)),null==m||g==Array&&a(m))for(e=new g(n=u(v.length));n>b;b++)h=x?y(v[b],b):v[b],c(e,b,h);else for(p=(l=m.call(v)).next,e=new g;!(s=p.call(l)).done;b++)h=x?i(l,y,[s.value,b],!0):s.value,c(e,b,h);return e.length=b,e}},function(t,n,e){var r=e(20);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(49),o=e(82),i=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,n){t.exports={}},function(t,n,e){var r=e(84),o=e(82),i=e(49)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(85),o=e(11),i=e(49)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:a?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){var r={};r[e(49)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(49)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(2),o=e(38).includes,i=e(57);r({target:"Array",proto:!0,forced:!e(67)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n,e){var r=e(2),o=e(38).indexOf,i=e(66),a=e(67),u=[].indexOf,c=!!u&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:c||!f||!s},{indexOf:function(t){return c?u.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(9),o=e(57),i=e(82),a=e(25),u=e(90),c=a.set,f=a.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,n){c(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){var r=e(2),o=e(91),i=e(93),a=e(96),u=e(95),c=e(18),f=e(21),s=e(49),l=e(29),p=e(82),h=e(92),v=h.IteratorPrototype,g=h.BUGGY_SAFARI_ITERATORS,d=s("iterator"),y=function(){return this};t.exports=function(t,n,e,s,h,x,m){o(e,n,s);var b,S,E,w=function(t){if(t===h&&I)return I;if(!g&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},O=n+" Iterator",R=!1,A=t.prototype,j=A[d]||A["@@iterator"]||h&&A[h],I=!g&&j||w(h),k="Array"==n&&A.entries||j;if(k&&(b=i(k.call(new t)),v!==Object.prototype&&b.next&&(l||i(b)===v||(a?a(b,v):"function"!=typeof b[d]&&c(b,d,y)),u(b,O,!0,!0),l&&(p[O]=y))),"values"==h&&j&&"values"!==j.name&&(R=!0,I=function(){return j.call(this)}),l&&!m||A[d]===I||c(A,d,I),p[n]=I,h)if(S={values:w("values"),keys:x?I:w("keys"),entries:w("entries")},m)for(E in S)(g||R||!(E in A))&&f(A,E,S[E]);else r({target:n,proto:!0,forced:g||R},S);return S}},function(t,n,e){var r=e(92).IteratorPrototype,o=e(58),i=e(8),a=e(95),u=e(82),c=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),a(t,f,!1,!0),u[f]=c,t}},function(t,n,e){var r,o,i,a=e(93),u=e(18),c=e(15),f=e(49),s=e(29),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||c(r,l)||u(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(15),o=e(46),i=e(27),a=e(94),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(6);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(19).f,o=e(15),i=e(49)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(20),o=e(97);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(14);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){var r=e(2),o=e(10),i=e(9),a=e(66),u=[].join,c=o!=Object,f=a("join",",");r({target:"Array",proto:!0,forced:c||!f},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},function(t,n,e){var r=e(2),o=e(100);r({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},function(t,n,e){var r=e(9),o=e(40),i=e(39),a=e(66),u=e(67),c=Math.min,f=[].lastIndexOf,s=!!f&&1/[1].lastIndexOf(1,-0)<0,l=a("lastIndexOf"),p=u("indexOf",{ACCESSORS:!0,1:0}),h=s||!l||!p;t.exports=h?function(t){if(s)return f.apply(this,arguments)||0;var n=r(this),e=i(n.length),a=e-1;for(arguments.length>1&&(a=c(a,o(arguments[1]))),a<0&&(a=e+a);a>=0;a--)if(a in n&&n[a]===t)return a||0;return-1}:f},function(t,n,e){var r=e(2),o=e(63).map,i=e(52),a=e(67),u=i("map"),c=a("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(2),o=e(6),i=e(47);r({target:"Array",stat:!0,forced:o((function(){function t(){}return!(Array.of.call(t)instanceof t)}))},{of:function(){for(var t=0,n=arguments.length,e=new("function"==typeof this?this:Array)(n);n>t;)i(e,t,arguments[t++]);return e.length=n,e}})},function(t,n,e){var r=e(2),o=e(104).left,i=e(66),a=e(67),u=i("reduce"),c=a("reduce",{1:0});r({target:"Array",proto:!0,forced:!u||!c},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(65),o=e(46),i=e(10),a=e(39),u=function(t){return function(n,e,u,c){r(e);var f=o(n),s=i(f),l=a(f.length),p=t?l-1:0,h=t?-1:1;if(u<2)for(;;){if(p in s){c=s[p],p+=h;break}if(p+=h,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=h)p in s&&(c=e(c,s[p],p,f));return c}};t.exports={left:u(!1),right:u(!0)}},function(t,n,e){var r=e(2),o=e(104).right,i=e(66),a=e(67),u=i("reduceRight"),c=a("reduce",{1:0});r({target:"Array",proto:!0,forced:!u||!c},{reduceRight:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(2),o=e(14),i=e(45),a=e(41),u=e(39),c=e(9),f=e(47),s=e(49),l=e(52),p=e(67),h=l("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),g=s("species"),d=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!h||!v},{slice:function(t,n){var e,r,s,l=c(this),p=u(l.length),h=a(t,p),v=a(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(e=l.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[g])&&(e=void 0):e=void 0,e===Array||void 0===e))return d.call(l,h,v);for(r=new(void 0===e?Array:e)(y(v-h,0)),s=0;h<v;h++,s++)h in l&&f(r,s,l[h]);return r.length=s,r}})},function(t,n,e){var r=e(2),o=e(63).some,i=e(66),a=e(67),u=i("some"),c=a("some");r({target:"Array",proto:!0,forced:!u||!c},{some:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){e(109)("Array")},function(t,n,e){var r=e(34),o=e(19),i=e(49),a=e(5),u=i("species");t.exports=function(t){var n=r(t),e=o.f;a&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(2),o=e(41),i=e(40),a=e(39),u=e(46),c=e(48),f=e(47),s=e(52),l=e(67),p=s("splice"),h=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!p||!h},{splice:function(t,n){var e,r,s,l,p,h,d=u(this),y=a(d.length),x=o(t,y),m=arguments.length;if(0===m?e=r=0:1===m?(e=0,r=y-x):(e=m-2,r=g(v(i(n),0),y-x)),y+e-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=c(d,r),l=0;l<r;l++)(p=x+l)in d&&f(s,l,d[p]);if(s.length=r,e<r){for(l=x;l<y-r;l++)h=l+e,(p=l+r)in d?d[h]=d[p]:delete d[h];for(l=y;l>y-r+e;l--)delete d[l-1]}else if(e>r)for(l=y-r;l>x;l--)h=l+e-1,(p=l+r-1)in d?d[h]=d[p]:delete d[h];for(l=0;l<e;l++)d[l+x]=arguments[l+2];return d.length=y-r+e,s}})},function(t,n,e){e(57)("flat")},function(t,n,e){e(57)("flatMap")},function(t,n,e){var r=e(14),o=e(19),i=e(93),a=e(49)("hasInstance"),u=Function.prototype;a in u||o.f(u,a,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,e){var r=e(5),o=e(19).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},function(t,n,e){e(2)({global:!0},{globalThis:e(3)})},function(t,n,e){var r=e(2),o=e(34),i=e(6),a=o("JSON","stringify"),u=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,f=/^[\uDC00-\uDFFF]$/,s=function(t,n,e){var r=e.charAt(n-1),o=e.charAt(n+1);return c.test(t)&&!f.test(o)||f.test(t)&&!c.test(r)?"\\u"+t.charCodeAt(0).toString(16):t},l=i((function(){return'"\\udf06\\ud834"'!==a("\udf06\ud834")||'"\\udead"'!==a("\udead")}));a&&r({target:"JSON",stat:!0,forced:l},{stringify:function(t,n,e){var r=a.apply(null,arguments);return"string"==typeof r?r.replace(u,s):r}})},function(t,n,e){var r=e(3);e(95)(r.JSON,"JSON",!0)},function(t,n,e){var r=e(119),o=e(125);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){var r=e(2),o=e(3),i=e(44),a=e(21),u=e(120),c=e(122),f=e(123),s=e(14),l=e(6),p=e(86),h=e(95),v=e(124);t.exports=function(t,n,e){var g=-1!==t.indexOf("Map"),d=-1!==t.indexOf("Weak"),y=g?"set":"add",x=o[t],m=x&&x.prototype,b=x,S={},E=function(t){var n=m[t];a(m,t,"add"==t?function(t){return n.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(d&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return d&&!s(t)?void 0:n.call(this,0===t?0:t)}:"has"==t?function(t){return!(d&&!s(t))&&n.call(this,0===t?0:t)}:function(t,e){return n.call(this,0===t?0:t,e),this})};if(i(t,"function"!=typeof x||!(d||m.forEach&&!l((function(){(new x).entries().next()})))))b=e.getConstructor(n,t,g,y),u.REQUIRED=!0;else if(i(t,!0)){var w=new b,O=w[y](d?{}:-0,1)!=w,R=l((function(){w.has(1)})),A=p((function(t){new x(t)})),j=!d&&l((function(){for(var t=new x,n=5;n--;)t[y](n,n);return!t.has(-0)}));A||((b=n((function(n,e){f(n,b,t);var r=v(new x,n,b);return null!=e&&c(e,r[y],r,g),r}))).prototype=m,m.constructor=b),(R||j)&&(E("delete"),E("has"),g&&E("get")),(j||O)&&E(y),d&&m.clear&&delete m.clear}return S[t]=b,r({global:!0,forced:b!=x},S),h(b,t),d||e.setStrong(b,t,g),b}},function(t,n,e){var r=e(31),o=e(14),i=e(15),a=e(19).f,u=e(30),c=e(121),f=u("meta"),s=0,l=Object.isExtensible||function(){return!0},p=function(t){a(t,f,{value:{objectID:"O"+ ++s,weakData:{}}})},h=t.exports={REQUIRED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,f)){if(!l(t))return"F";if(!n)return"E";p(t)}return t[f].objectID},getWeakData:function(t,n){if(!i(t,f)){if(!l(t))return!0;if(!n)return!1;p(t)}return t[f].weakData},onFreeze:function(t){return c&&h.REQUIRED&&l(t)&&!i(t,f)&&p(t),t}};r[f]=!0},function(t,n,e){var r=e(6);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,n,e){var r=e(20),o=e(81),i=e(39),a=e(64),u=e(83),c=e(80),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,h,v,g,d,y,x,m=a(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(h=u(t)))throw TypeError("Target is not iterable");if(o(h)){for(v=0,g=i(t.length);g>v;v++)if((d=s?m(r(x=t[v])[0],x[1]):m(t[v]))&&d instanceof f)return d;return new f(!1)}p=h.call(t)}for(y=p.next;!(x=y.call(p)).done;)if("object"==typeof(d=c(p,m,x.value,s))&&d&&d instanceof f)return d;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(14),o=e(96);t.exports=function(t,n,e){var i,a;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(a=i.prototype)&&a!==e.prototype&&o(t,a),t}},function(t,n,e){var r=e(19).f,o=e(58),i=e(126),a=e(64),u=e(123),c=e(122),f=e(90),s=e(109),l=e(5),p=e(120).fastKey,h=e(25),v=h.set,g=h.getterFor;t.exports={getConstructor:function(t,n,e,f){var s=t((function(t,r){u(t,s,n),v(t,{type:n,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&c(r,t[f],t,e)})),h=g(n),d=function(t,n,e){var r,o,i=h(t),a=y(t,n);return a?a.value=e:(i.last=a={index:o=p(n,!0),key:n,value:e,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=a),r&&(r.next=a),l?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t},y=function(t,n){var e,r=h(t),o=p(n);if("F"!==o)return r.index[o];for(e=r.first;e;e=e.next)if(e.key==n)return e};return i(s.prototype,{clear:function(){for(var t=h(this),n=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete n[e.index],e=e.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var n=h(this),e=y(this,t);if(e){var r=e.next,o=e.previous;delete n.index[e.index],e.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==e&&(n.first=r),n.last==e&&(n.last=o),l?n.size--:this.size--}return!!e},forEach:function(t){for(var n,e=h(this),r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.next:e.first;)for(r(n.value,n.key,this);n&&n.removed;)n=n.previous},has:function(t){return!!y(this,t)}}),i(s.prototype,e?{get:function(t){var n=y(this,t);return n&&n.value},set:function(t,n){return d(this,0===t?0:t,n)}}:{add:function(t){return d(this,t=0===t?0:t,t)}}),l&&r(s.prototype,"size",{get:function(){return h(this).size}}),s},setStrong:function(t,n,e){var r=n+" Iterator",o=g(n),i=g(r);f(t,n,(function(t,n){v(this,{type:r,target:t,state:o(t),kind:n,last:void 0})}),(function(){for(var t=i(this),n=t.kind,e=t.last;e&&e.removed;)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==n?{value:e.key,done:!1}:"values"==n?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),s(n)}}},function(t,n,e){var r=e(21);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(5),o=e(3),i=e(44),a=e(21),u=e(15),c=e(11),f=e(124),s=e(13),l=e(6),p=e(58),h=e(36).f,v=e(4).f,g=e(19).f,d=e(128).trim,y=o.Number,x=y.prototype,m="Number"==c(p(x)),b=function(t){var n,e,r,o,i,a,u,c,f=s(t,!1);if("string"==typeof f&&f.length>2)if(43===(n=(f=d(f)).charCodeAt(0))||45===n){if(88===(e=f.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(a=(i=f.slice(2)).length,u=0;u<a;u++)if((c=i.charCodeAt(u))<48||c>o)return NaN;return parseInt(i,r)}return+f};if(i("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var S,E=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof E&&(m?l((function(){x.valueOf.call(e)})):"Number"!=c(e))?f(new y(b(n)),e,E):b(n)},w=r?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;w.length>O;O++)u(y,S=w[O])&&!u(E,S)&&g(E,S,v(y,S));E.prototype=x,x.constructor=E,a(o,"Number",E)}},function(t,n,e){var r=e(12),o="["+e(129)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,e){e(2)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},function(t,n,e){e(2)({target:"Number",stat:!0},{isFinite:e(132)})},function(t,n,e){var r=e(3).isFinite;t.exports=Number.isFinite||function(t){return"number"==typeof t&&r(t)}},function(t,n,e){e(2)({target:"Number",stat:!0},{isInteger:e(134)})},function(t,n,e){var r=e(14),o=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&o(t)===t}},function(t,n,e){e(2)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},function(t,n,e){var r=e(2),o=e(134),i=Math.abs;r({target:"Number",stat:!0},{isSafeInteger:function(t){return o(t)&&i(t)<=9007199254740991}})},function(t,n,e){e(2)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,e){e(2)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,e){var r=e(2),o=e(140);r({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},function(t,n,e){var r=e(3),o=e(128).trim,i=e(129),a=r.parseFloat,u=1/a(i+"-0")!=-1/0;t.exports=u?function(t){var n=o(String(t)),e=a(n);return 0===e&&"-"==n.charAt(0)?-0:e}:a},function(t,n,e){var r=e(2),o=e(142);r({target:"Number",stat:!0,forced:Number.parseInt!=o},{parseInt:o})},function(t,n,e){var r=e(3),o=e(128).trim,i=e(129),a=r.parseInt,u=/^[+-]?0[Xx]/,c=8!==a(i+"08")||22!==a(i+"0x16");t.exports=c?function(t,n){var e=o(String(t));return a(e,n>>>0||(u.test(e)?16:10))}:a},function(t,n,e){var r=e(2),o=e(40),i=e(144),a=e(145),u=e(6),c=1..toFixed,f=Math.floor,s=function(t,n,e){return 0===n?e:n%2==1?s(t,n-1,e*t):s(t*t,n/2,e)};r({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){c.call({})}))},{toFixed:function(t){var n,e,r,u,c=i(this),l=o(t),p=[0,0,0,0,0,0],h="",v="0",g=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*p[e],p[e]=r%1e7,r=f(r/1e7)},d=function(t){for(var n=6,e=0;--n>=0;)e+=p[n],p[n]=f(e/t),e=e%t*1e7},y=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==p[t]){var e=String(p[t]);n=""===n?e:n+a.call("0",7-e.length)+e}return n};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(c*s(2,69,1))-69)<0?c*s(2,-n,1):c/s(2,n,1),e*=4503599627370496,(n=52-n)>0){for(g(0,e),r=l;r>=7;)g(1e7,0),r-=7;for(g(s(10,r,1),0),r=n-1;r>=23;)d(1<<23),r-=23;d(1<<r),g(1,1),d(2),v=y()}else g(0,e),g(1<<-n,0),v=y()+a.call("0",l);return v=l>0?h+((u=v.length)<=l?"0."+a.call("0",l-u)+v:v.slice(0,u-l)+"."+v.slice(u-l)):h+v}})},function(t,n,e){var r=e(11);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},function(t,n,e){var r=e(40),o=e(12);t.exports="".repeat||function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},function(t,n,e){var r=e(2),o=e(147);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,n,e){var r=e(5),o=e(6),i=e(60),a=e(43),u=e(7),c=e(46),f=e(10),s=Object.assign,l=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol();return t[e]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||"abcdefghijklmnopqrst"!=i(s({},n)).join("")}))?function(t,n){for(var e=c(t),o=arguments.length,s=1,l=a.f,p=u.f;o>s;)for(var h,v=f(arguments[s++]),g=l?i(v).concat(l(v)):i(v),d=g.length,y=0;d>y;)h=g[y++],r&&!p.call(v,h)||(e[h]=v[h]);return e}:s},function(t,n,e){var r=e(2),o=e(5),i=e(149),a=e(46),u=e(65),c=e(19);o&&r({target:"Object",proto:!0,forced:i},{__defineGetter__:function(t,n){c.f(a(this),t,{get:u(n),enumerable:!0,configurable:!0})}})},function(t,n,e){var r=e(29),o=e(3),i=e(6);t.exports=r||!i((function(){var t=Math.random();__defineSetter__.call(null,t,(function(){})),delete o[t]}))},function(t,n,e){var r=e(2),o=e(5),i=e(149),a=e(46),u=e(65),c=e(19);o&&r({target:"Object",proto:!0,forced:i},{__defineSetter__:function(t,n){c.f(a(this),t,{set:u(n),enumerable:!0,configurable:!0})}})},function(t,n,e){var r=e(2),o=e(152).entries;r({target:"Object",stat:!0},{entries:function(t){return o(t)}})},function(t,n,e){var r=e(5),o=e(60),i=e(9),a=e(7).f,u=function(t){return function(n){for(var e,u=i(n),c=o(u),f=c.length,s=0,l=[];f>s;)e=c[s++],r&&!a.call(u,e)||l.push(t?[e,u[e]]:u[e]);return l}};t.exports={entries:u(!0),values:u(!1)}},function(t,n,e){var r=e(2),o=e(121),i=e(6),a=e(14),u=e(120).onFreeze,c=Object.freeze;r({target:"Object",stat:!0,forced:i((function(){c(1)})),sham:!o},{freeze:function(t){return c&&a(t)?c(u(t)):t}})},function(t,n,e){var r=e(2),o=e(122),i=e(47);r({target:"Object",stat:!0},{fromEntries:function(t){var n={};return o(t,(function(t,e){i(n,t,e)}),void 0,!0),n}})},function(t,n,e){var r=e(2),o=e(6),i=e(9),a=e(4).f,u=e(5),c=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!u||c,sham:!u},{getOwnPropertyDescriptor:function(t,n){return a(i(t),n)}})},function(t,n,e){var r=e(2),o=e(5),i=e(33),a=e(9),u=e(4),c=e(47);r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var n,e,r=a(t),o=u.f,f=i(r),s={},l=0;f.length>l;)void 0!==(e=o(r,n=f[l++]))&&c(s,n,e);return s}})},function(t,n,e){var r=e(2),o=e(6),i=e(158).f;r({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},function(t,n,e){var r=e(9),o=e(36).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(2),o=e(6),i=e(46),a=e(93),u=e(94);r({target:"Object",stat:!0,forced:o((function(){a(1)})),sham:!u},{getPrototypeOf:function(t){return a(i(t))}})},function(t,n,e){e(2)({target:"Object",stat:!0},{is:e(161)})},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){var r=e(2),o=e(6),i=e(14),a=Object.isExtensible;r({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isExtensible:function(t){return!!i(t)&&(!a||a(t))}})},function(t,n,e){var r=e(2),o=e(6),i=e(14),a=Object.isFrozen;r({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isFrozen:function(t){return!i(t)||!!a&&a(t)}})},function(t,n,e){var r=e(2),o=e(6),i=e(14),a=Object.isSealed;r({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isSealed:function(t){return!i(t)||!!a&&a(t)}})},function(t,n,e){var r=e(2),o=e(46),i=e(60);r({target:"Object",stat:!0,forced:e(6)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,e){var r=e(2),o=e(5),i=e(149),a=e(46),u=e(13),c=e(93),f=e(4).f;o&&r({target:"Object",proto:!0,forced:i},{__lookupGetter__:function(t){var n,e=a(this),r=u(t,!0);do{if(n=f(e,r))return n.get}while(e=c(e))}})},function(t,n,e){var r=e(2),o=e(5),i=e(149),a=e(46),u=e(13),c=e(93),f=e(4).f;o&&r({target:"Object",proto:!0,forced:i},{__lookupSetter__:function(t){var n,e=a(this),r=u(t,!0);do{if(n=f(e,r))return n.set}while(e=c(e))}})},function(t,n,e){var r=e(2),o=e(14),i=e(120).onFreeze,a=e(121),u=e(6),c=Object.preventExtensions;r({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{preventExtensions:function(t){return c&&o(t)?c(i(t)):t}})},function(t,n,e){var r=e(2),o=e(14),i=e(120).onFreeze,a=e(121),u=e(6),c=Object.seal;r({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{seal:function(t){return c&&o(t)?c(i(t)):t}})},function(t,n,e){var r=e(85),o=e(21),i=e(171);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(85),o=e(84);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){var r=e(2),o=e(152).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},function(t,n,e){var r,o,i,a,u=e(2),c=e(29),f=e(3),s=e(34),l=e(174),p=e(21),h=e(126),v=e(95),g=e(109),d=e(14),y=e(65),x=e(123),m=e(11),b=e(23),S=e(122),E=e(86),w=e(175),O=e(176).set,R=e(178),A=e(179),j=e(181),I=e(180),k=e(182),P=e(25),L=e(44),T=e(49),_=e(53),U=T("species"),N="Promise",C=P.get,F=P.set,M=P.getterFor(N),z=l,D=f.TypeError,q=f.document,B=f.process,W=s("fetch"),$=I.f,G=$,V="process"==m(B),X=!!(q&&q.createEvent&&f.dispatchEvent),Y=L(N,(function(){if(!(b(z)!==String(z))){if(66===_)return!0;if(!V&&"function"!=typeof PromiseRejectionEvent)return!0}if(c&&!z.prototype.finally)return!0;if(_>=51&&/native code/.test(z))return!1;var t=z.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[U]=n,!(t.then((function(){}))instanceof n)})),K=Y||!E((function(t){z.all(t).catch((function(){}))})),J=function(t){var n;return!(!d(t)||"function"!=typeof(n=t.then))&&n},H=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;R((function(){for(var o=n.value,i=1==n.state,a=0;r.length>a;){var u,c,f,s=r[a++],l=i?s.ok:s.fail,p=s.resolve,h=s.reject,v=s.domain;try{l?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===l?u=o:(v&&v.enter(),u=l(o),v&&(v.exit(),f=!0)),u===s.promise?h(D("Promise-chain cycle")):(c=J(u))?c.call(u,p,h):p(u)):h(o)}catch(t){v&&!f&&v.exit(),h(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&Z(t,n)}))}},Q=function(t,n,e){var r,o;X?((r=q.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&j("Unhandled promise rejection",e)},Z=function(t,n){O.call(f,(function(){var e,r=n.value;if(tt(n)&&(e=k((function(){V?B.emit("unhandledRejection",r,t):Q("unhandledrejection",t,r)})),n.rejection=V||tt(n)?2:1,e.error))throw e.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){O.call(f,(function(){V?B.emit("rejectionHandled",t):Q("rejectionhandled",t,n.value)}))},et=function(t,n,e,r){return function(o){t(n,e,o,r)}},rt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,H(t,n,!0))},ot=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw D("Promise can't be resolved itself");var o=J(e);o?R((function(){var r={done:!1};try{o.call(e,et(ot,t,r,n),et(rt,t,r,n))}catch(e){rt(t,r,e,n)}})):(n.value=e,n.state=1,H(t,n,!1))}catch(e){rt(t,{done:!1},e,n)}}};Y&&(z=function(t){x(this,z,N),y(t),r.call(this);var n=C(this);try{t(et(ot,this,n),et(rt,this,n))}catch(t){rt(this,n,t)}},(r=function(t){F(this,{type:N,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(z.prototype,{then:function(t,n){var e=M(this),r=$(w(this,z));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=V?B.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&H(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=C(t);this.promise=t,this.resolve=et(ot,t,n),this.reject=et(rt,t,n)},I.f=$=function(t){return t===z||t===i?new o(t):G(t)},c||"function"!=typeof l||(a=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new z((function(t,n){a.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof W&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return A(z,W.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:Y},{Promise:z}),v(z,N,!1,!0),g(N),i=s(N),u({target:N,stat:!0,forced:Y},{reject:function(t){var n=$(this);return n.reject.call(void 0,t),n.promise}}),u({target:N,stat:!0,forced:c||Y},{resolve:function(t){return A(c&&this===i?z:this,t)}}),u({target:N,stat:!0,forced:K},{all:function(t){var n=this,e=$(n),r=e.resolve,o=e.reject,i=k((function(){var e=y(n.resolve),i=[],a=0,u=1;S(t,(function(t){var c=a++,f=!1;i.push(void 0),u++,e.call(n,t).then((function(t){f||(f=!0,i[c]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=$(n),r=e.reject,o=k((function(){var o=y(n.resolve);S(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(3);t.exports=r.Promise},function(t,n,e){var r=e(20),o=e(65),i=e(49)("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||null==(e=r(a)[i])?n:o(e)}},function(t,n,e){var r,o,i,a=e(3),u=e(6),c=e(11),f=e(64),s=e(61),l=e(17),p=e(177),h=a.location,v=a.setImmediate,g=a.clearImmediate,d=a.process,y=a.MessageChannel,x=a.Dispatch,m=0,b={},S=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},E=function(t){return function(){S(t)}},w=function(t){S(t.data)},O=function(t){a.postMessage(t+"",h.protocol+"//"+h.host)};v&&g||(v=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return b[++m]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(m),m},g=function(t){delete b[t]},"process"==c(d)?r=function(t){d.nextTick(E(t))}:x&&x.now?r=function(t){x.now(E(t))}:y&&!p?(i=(o=new y).port2,o.port1.onmessage=w,r=f(i.postMessage,i,1)):!a.addEventListener||"function"!=typeof postMessage||a.importScripts||u(O)||"file:"===h.protocol?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),S(t)}}:function(t){setTimeout(E(t),0)}:(r=O,a.addEventListener("message",w,!1))),t.exports={set:v,clear:g}},function(t,n,e){var r=e(54);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){var r,o,i,a,u,c,f,s,l=e(3),p=e(4).f,h=e(11),v=e(176).set,g=e(177),d=l.MutationObserver||l.WebKitMutationObserver,y=l.process,x=l.Promise,m="process"==h(y),b=p(l,"queueMicrotask"),S=b&&b.value;S||(r=function(){var t,n;for(m&&(t=y.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},m?a=function(){y.nextTick(r)}:d&&!g?(u=!0,c=document.createTextNode(""),new d(r).observe(c,{characterData:!0}),a=function(){c.data=u=!u}):x&&x.resolve?(f=x.resolve(void 0),s=f.then,a=function(){s.call(f,r)}):a=function(){v.call(l,r)}),t.exports=S||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,a()),i=n}},function(t,n,e){var r=e(20),o=e(14),i=e(180);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(65),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){var r=e(3);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r=e(2),o=e(65),i=e(180),a=e(182),u=e(122);r({target:"Promise",stat:!0},{allSettled:function(t){var n=this,e=i.f(n),r=e.resolve,c=e.reject,f=a((function(){var e=o(n.resolve),i=[],a=0,c=1;u(t,(function(t){var o=a++,u=!1;i.push(void 0),c++,e.call(n,t).then((function(t){u||(u=!0,i[o]={status:"fulfilled",value:t},--c||r(i))}),(function(t){u||(u=!0,i[o]={status:"rejected",reason:t},--c||r(i))}))})),--c||r(i)}));return f.error&&c(f.value),e.promise}})},function(t,n,e){var r=e(2),o=e(29),i=e(174),a=e(6),u=e(34),c=e(175),f=e(179),s=e(21);r({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=c(this,u("Promise")),e="function"==typeof t;return this.then(e?function(e){return f(n,t()).then((function(){return e}))}:t,e?function(e){return f(n,t()).then((function(){throw e}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||s(i.prototype,"finally",u("Promise").prototype.finally)},function(t,n,e){var r=e(5),o=e(3),i=e(44),a=e(124),u=e(19).f,c=e(36).f,f=e(186),s=e(187),l=e(188),p=e(21),h=e(6),v=e(25).set,g=e(109),d=e(49)("match"),y=o.RegExp,x=y.prototype,m=/a/g,b=/a/g,S=new y(m)!==m,E=l.UNSUPPORTED_Y;if(r&&i("RegExp",!S||E||h((function(){return b[d]=!1,y(m)!=m||y(b)==b||"/a/i"!=y(m,"i")})))){for(var w=function(t,n){var e,r=this instanceof w,o=f(t),i=void 0===n;if(!r&&o&&t.constructor===w&&i)return t;S?o&&!i&&(t=t.source):t instanceof w&&(i&&(n=s.call(t)),t=t.source),E&&(e=!!n&&n.indexOf("y")>-1)&&(n=n.replace(/y/g,""));var u=a(S?new y(t,n):y(t,n),r?this:x,w);return E&&e&&v(u,{sticky:e}),u},O=function(t){t in w||u(w,t,{configurable:!0,get:function(){return y[t]},set:function(n){y[t]=n}})},R=c(y),A=0;R.length>A;)O(R[A++]);x.constructor=w,w.prototype=x,p(o,"RegExp",w)}g("RegExp")},function(t,n,e){var r=e(14),o=e(11),i=e(49)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){var r=e(20);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=e(6);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){var r=e(2),o=e(190);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){var r,o,i=e(187),a=e(188),u=RegExp.prototype.exec,c=String.prototype.replace,f=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(f=function(t){var n,e,r,o,a=this,f=l&&a.sticky,h=i.call(a),v=a.source,g=0,d=t;return f&&(-1===(h=h.replace("y","")).indexOf("g")&&(h+="g"),d=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(v="(?: "+v+")",d=" "+d,g++),e=new RegExp("^(?:"+v+")",h)),p&&(e=new RegExp("^"+v+"$(?!\\s)",h)),s&&(n=a.lastIndex),r=u.call(f?e:a,d),f?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:s&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),p&&r&&r.length>1&&c.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,n,e){var r=e(5),o=e(19),i=e(187),a=e(188).UNSUPPORTED_Y;r&&("g"!=/./g.flags||a)&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})},function(t,n,e){var r=e(5),o=e(188).UNSUPPORTED_Y,i=e(19).f,a=e(25).get,u=RegExp.prototype;r&&o&&i(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==u){if(this instanceof RegExp)return!!a(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},function(t,n,e){e(189);var r,o,i=e(2),a=e(14),u=(r=!1,(o=/[ac]/).exec=function(){return r=!0,/./.exec.apply(this,arguments)},!0===o.test("abc")&&r),c=/./.test;i({target:"RegExp",proto:!0,forced:!u},{test:function(t){if("function"!=typeof this.exec)return c.call(this,t);var n=this.exec(t);if(null!==n&&!a(n))throw new Error("RegExp exec method returned something other than an Object or null");return!!n}})},function(t,n,e){var r=e(21),o=e(20),i=e(6),a=e(187),u=RegExp.prototype,c=u.toString,f=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),s="toString"!=c.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in u)?a.call(t):e)}),{unsafe:!0})},function(t,n,e){var r=e(119),o=e(125);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){var r=e(2),o=e(197).codeAt;r({target:"String",proto:!0},{codePointAt:function(t){return o(this,t)}})},function(t,n,e){var r=e(40),o=e(12),i=function(t){return function(n,e){var i,a,u=String(o(n)),c=r(e),f=u.length;return c<0||c>=f?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===f||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r,o=e(2),i=e(4).f,a=e(39),u=e(199),c=e(12),f=e(200),s=e(29),l="".endsWith,p=Math.min,h=f("endsWith");o({target:"String",proto:!0,forced:!!(s||h||(r=i(String.prototype,"endsWith"),!r||r.writable))&&!h},{endsWith:function(t){var n=String(c(this));u(t);var e=arguments.length>1?arguments[1]:void 0,r=a(n.length),o=void 0===e?r:p(a(e),r),i=String(t);return l?l.call(n,i,o):n.slice(o-i.length,o)===i}})},function(t,n,e){var r=e(186);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,e){var r=e(49)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,e){var r=e(2),o=e(41),i=String.fromCharCode,a=String.fromCodePoint;r({target:"String",stat:!0,forced:!!a&&1!=a.length},{fromCodePoint:function(t){for(var n,e=[],r=arguments.length,a=0;r>a;){if(n=+arguments[a++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");e.push(n<65536?i(n):i(55296+((n-=65536)>>10),n%1024+56320))}return e.join("")}})},function(t,n,e){var r=e(2),o=e(199),i=e(12);r({target:"String",proto:!0,forced:!e(200)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(197).charAt,o=e(25),i=e(90),a=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=u(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(205),o=e(20),i=e(39),a=e(12),u=e(206),c=e(207);r("match",1,(function(t,n,e){return[function(n){var e=a(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var a=o(t),f=String(this);if(!a.global)return c(a,f);var s=a.unicode;a.lastIndex=0;for(var l,p=[],h=0;null!==(l=c(a,f));){var v=String(l[0]);p[h]=v,""===v&&(a.lastIndex=u(f,i(a.lastIndex),s)),h++}return 0===h?null:p}]}))},function(t,n,e){e(189);var r=e(21),o=e(6),i=e(49),a=e(190),u=e(18),c=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),h=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var v=i(t),g=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),d=g&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[c]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!g||!d||"replace"===t&&(!f||!s||p)||"split"===t&&!h){var y=/./[v],x=e(v,""[t],(function(t,n,e,r,o){return n.exec===a?g&&!o?{done:!0,value:y.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=x[0],b=x[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}l&&u(RegExp.prototype[v],"sham",!0)}},function(t,n,e){var r=e(197).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(11),o=e(190);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){var r=e(2),o=e(91),i=e(12),a=e(39),u=e(65),c=e(20),f=e(11),s=e(186),l=e(187),p=e(18),h=e(6),v=e(49),g=e(175),d=e(206),y=e(25),x=e(29),m=v("matchAll"),b=y.set,S=y.getterFor("RegExp String Iterator"),E=RegExp.prototype,w=E.exec,O="".matchAll,R=!!O&&!h((function(){"a".matchAll(/./)})),A=o((function(t,n,e,r){b(this,{type:"RegExp String Iterator",regexp:t,string:n,global:e,unicode:r,done:!1})}),"RegExp String",(function(){var t=S(this);if(t.done)return{value:void 0,done:!0};var n=t.regexp,e=t.string,r=function(t,n){var e,r=t.exec;if("function"==typeof r){if("object"!=typeof(e=r.call(t,n)))throw TypeError("Incorrect exec result");return e}return w.call(t,n)}(n,e);return null===r?{value:void 0,done:t.done=!0}:t.global?(""==String(r[0])&&(n.lastIndex=d(e,a(n.lastIndex),t.unicode)),{value:r,done:!1}):(t.done=!0,{value:r,done:!1})})),j=function(t){var n,e,r,o,i,u,f=c(this),s=String(t);return n=g(f,RegExp),void 0===(e=f.flags)&&f instanceof RegExp&&!("flags"in E)&&(e=l.call(f)),r=void 0===e?"":String(e),o=new n(n===RegExp?f.source:f,r),i=!!~r.indexOf("g"),u=!!~r.indexOf("u"),o.lastIndex=a(f.lastIndex),new A(o,s,i,u)};r({target:"String",proto:!0,forced:R},{matchAll:function(t){var n,e,r,o=i(this);if(null!=t){if(s(t)&&!~String(i("flags"in E?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.matchAll` does not allow non-global regexes");if(R)return O.apply(o,arguments);if(void 0===(e=t[m])&&x&&"RegExp"==f(t)&&(e=j),null!=e)return u(e).call(t,o)}else if(R)return O.apply(o,arguments);return n=String(o),r=new RegExp(t,"g"),x?j.call(r,n):r[m](n)}}),x||m in E||p(E,m,j)},function(t,n,e){var r=e(2),o=e(210).end;r({target:"String",proto:!0,forced:e(211)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(39),o=e(145),i=e(12),a=Math.ceil,u=function(t){return function(n,e,u){var c,f,s=String(i(n)),l=s.length,p=void 0===u?" ":String(u),h=r(e);return h<=l||""==p?s:(c=h-l,(f=o.call(p,a(c/p.length))).length>c&&(f=f.slice(0,c)),t?s+f:f+s)}};t.exports={start:u(!1),end:u(!0)}},function(t,n,e){var r=e(54);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},function(t,n,e){var r=e(2),o=e(210).start;r({target:"String",proto:!0,forced:e(211)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(2),o=e(9),i=e(39);r({target:"String",stat:!0},{raw:function(t){for(var n=o(t.raw),e=i(n.length),r=arguments.length,a=[],u=0;e>u;)a.push(String(n[u++])),u<r&&a.push(String(arguments[u]));return a.join("")}})},function(t,n,e){e(2)({target:"String",proto:!0},{repeat:e(145)})},function(t,n,e){var r=e(205),o=e(20),i=e(46),a=e(39),u=e(40),c=e(12),f=e(206),s=e(207),l=Math.max,p=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,n,e,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=d?"$":"$0";return[function(e,r){var o=c(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!d&&y||"string"==typeof r&&-1===r.indexOf(x)){var i=e(n,t,this,r);if(i.done)return i.value}var c=o(t),h=String(this),v="function"==typeof r;v||(r=String(r));var g=c.global;if(g){var b=c.unicode;c.lastIndex=0}for(var S=[];;){var E=s(c,h);if(null===E)break;if(S.push(E),!g)break;""===String(E[0])&&(c.lastIndex=f(h,a(c.lastIndex),b))}for(var w,O="",R=0,A=0;A<S.length;A++){E=S[A];for(var j=String(E[0]),I=l(p(u(E.index),h.length),0),k=[],P=1;P<E.length;P++)k.push(void 0===(w=E[P])?w:String(w));var L=E.groups;if(v){var T=[j].concat(k,I,h);void 0!==L&&T.push(L);var _=String(r.apply(void 0,T))}else _=m(j,h,I,k,L,r);I>=R&&(O+=h.slice(R,I)+_,R=I+j.length)}return O+h.slice(R)}];function m(t,e,r,o,a,u){var c=r+t.length,f=o.length,s=g;return void 0!==a&&(a=i(a),s=v),n.call(u,s,(function(n,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":u=a[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var l=h(s/10);return 0===l?n:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}u=o[s-1]}return void 0===u?"":u}))}}))},function(t,n,e){var r=e(205),o=e(20),i=e(12),a=e(161),u=e(207);r("search",1,(function(t,n,e){return[function(n){var e=i(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var i=o(t),c=String(this),f=i.lastIndex;a(f,0)||(i.lastIndex=0);var s=u(i,c);return a(i.lastIndex,f)||(i.lastIndex=f),null===s?-1:s.index}]}))},function(t,n,e){var r=e(205),o=e(186),i=e(20),a=e(12),u=e(175),c=e(206),f=e(39),s=e(207),l=e(190),p=e(6),h=[].push,v=Math.min,g=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(a(this)),i=void 0===e?4294967295:e>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return n.call(r,t,i);for(var u,c,f,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,p+"g");(u=l.call(g,r))&&!((c=g.lastIndex)>v&&(s.push(r.slice(v,u.index)),u.length>1&&u.index<r.length&&h.apply(s,u.slice(1)),f=u[0].length,v=c,s.length>=i));)g.lastIndex===u.index&&g.lastIndex++;return v===r.length?!f&&g.test("")||s.push(""):s.push(r.slice(v)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var o=a(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var a=e(r,t,this,o,r!==n);if(a.done)return a.value;var l=i(t),p=String(this),h=u(l,RegExp),d=l.unicode,y=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),x=new h(g?l:"^(?:"+l.source+")",y),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===p.length)return null===s(x,p)?[p]:[];for(var b=0,S=0,E=[];S<p.length;){x.lastIndex=g?S:0;var w,O=s(x,g?p:p.slice(S));if(null===O||(w=v(f(x.lastIndex+(g?0:S)),p.length))===b)S=c(p,S,d);else{if(E.push(p.slice(b,S)),E.length===m)return E;for(var R=1;R<=O.length-1;R++)if(E.push(O[R]),E.length===m)return E;S=b=w}}return E.push(p.slice(b)),E}]}),!g)},function(t,n,e){var r,o=e(2),i=e(4).f,a=e(39),u=e(199),c=e(12),f=e(200),s=e(29),l="".startsWith,p=Math.min,h=f("startsWith");o({target:"String",proto:!0,forced:!!(s||h||(r=i(String.prototype,"startsWith"),!r||r.writable))&&!h},{startsWith:function(t){var n=String(c(this));u(t);var e=a(p(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return l?l.call(n,r,e):n.slice(e,e+r.length)===r}})},function(t,n,e){var r=e(2),o=e(128).trim;r({target:"String",proto:!0,forced:e(220)("trim")},{trim:function(){return o(this)}})},function(t,n,e){var r=e(6),o=e(129);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,n,e){var r=e(2),o=e(128).end,i=e(220)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;r({target:"String",proto:!0,forced:i},{trimEnd:a,trimRight:a})},function(t,n,e){var r=e(2),o=e(128).start,i=e(220)("trimStart"),a=i?function(){return o(this)}:"".trimStart;r({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},function(t,n,e){var r=e(12),o=/"/g;t.exports=function(t,n,e,i){var a=String(r(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(i).replace(o,"&quot;")+'"'),u+">"+a+"</"+n+">"}},function(t,n,e){var r=e(6);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("big")},{big:function(){return o(this,"big","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("blink")},{blink:function(){return o(this,"blink","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("bold")},{bold:function(){return o(this,"b","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("fixed")},{fixed:function(){return o(this,"tt","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("fontcolor")},{fontcolor:function(t){return o(this,"font","color",t)}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("fontsize")},{fontsize:function(t){return o(this,"font","size",t)}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("italics")},{italics:function(){return o(this,"i","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("link")},{link:function(t){return o(this,"a","href",t)}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("small")},{small:function(){return o(this,"small","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("strike")},{strike:function(){return o(this,"strike","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("sub")},{sub:function(){return o(this,"sub","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("sup")},{sup:function(){return o(this,"sup","","")}})},function(t,n,e){var r,o=e(3),i=e(126),a=e(120),u=e(119),c=e(239),f=e(14),s=e(25).enforce,l=e(26),p=!o.ActiveXObject&&"ActiveXObject"in o,h=Object.isExtensible,v=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},g=t.exports=u("WeakMap",v,c);if(l&&p){r=c.getConstructor(v,"WeakMap",!0),a.REQUIRED=!0;var d=g.prototype,y=d.delete,x=d.has,m=d.get,b=d.set;i(d,{delete:function(t){if(f(t)&&!h(t)){var n=s(this);return n.frozen||(n.frozen=new r),y.call(this,t)||n.frozen.delete(t)}return y.call(this,t)},has:function(t){if(f(t)&&!h(t)){var n=s(this);return n.frozen||(n.frozen=new r),x.call(this,t)||n.frozen.has(t)}return x.call(this,t)},get:function(t){if(f(t)&&!h(t)){var n=s(this);return n.frozen||(n.frozen=new r),x.call(this,t)?m.call(this,t):n.frozen.get(t)}return m.call(this,t)},set:function(t,n){if(f(t)&&!h(t)){var e=s(this);e.frozen||(e.frozen=new r),x.call(this,t)?b.call(this,t,n):e.frozen.set(t,n)}else b.call(this,t,n);return this}})}},function(t,n,e){var r=e(126),o=e(120).getWeakData,i=e(20),a=e(14),u=e(123),c=e(122),f=e(63),s=e(15),l=e(25),p=l.set,h=l.getterFor,v=f.find,g=f.findIndex,d=0,y=function(t){return t.frozen||(t.frozen=new x)},x=function(){this.entries=[]},m=function(t,n){return v(t.entries,(function(t){return t[0]===n}))};x.prototype={get:function(t){var n=m(this,t);if(n)return n[1]},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.entries.push([t,n])},delete:function(t){var n=g(this.entries,(function(n){return n[0]===t}));return~n&&this.entries.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,f){var l=t((function(t,r){u(t,l,n),p(t,{type:n,id:d++,frozen:void 0}),null!=r&&c(r,t[f],t,e)})),v=h(n),g=function(t,n,e){var r=v(t),a=o(i(n),!0);return!0===a?y(r).set(n,e):a[r.id]=e,t};return r(l.prototype,{delete:function(t){var n=v(this);if(!a(t))return!1;var e=o(t);return!0===e?y(n).delete(t):e&&s(e,n.id)&&delete e[n.id]},has:function(t){var n=v(this);if(!a(t))return!1;var e=o(t);return!0===e?y(n).has(t):e&&s(e,n.id)}}),r(l.prototype,e?{get:function(t){var n=v(this);if(a(t)){var e=o(t);return!0===e?y(n).get(t):e?e[n.id]:void 0}},set:function(t,n){return g(this,t,n)}}:{add:function(t){return g(this,t,!0)}}),l}}},function(t,n,e){e(119)("WeakSet",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),e(239))},function(t,n,e){var r=e(3),o=e(242),i=e(77),a=e(18);for(var u in o){var c=r[u],f=c&&c.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){e(203);var r,o=e(2),i=e(5),a=e(244),u=e(3),c=e(59),f=e(21),s=e(123),l=e(15),p=e(147),h=e(79),v=e(197).codeAt,g=e(245),d=e(95),y=e(246),x=e(25),m=u.URL,b=y.URLSearchParams,S=y.getState,E=x.set,w=x.getterFor("URL"),O=Math.floor,R=Math.pow,A=/[A-Za-z]/,j=/[\d+-.A-Za-z]/,I=/\d/,k=/^(0x|0X)/,P=/^[0-7]+$/,L=/^\d+$/,T=/^[\dA-Fa-f]+$/,_=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,U=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,N=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,C=/[\u0009\u000A\u000D]/g,F=function(t,n){var e,r,o;if("["==n.charAt(0)){if("]"!=n.charAt(n.length-1))return"Invalid host";if(!(e=z(n.slice(1,-1))))return"Invalid host";t.host=e}else if(X(t)){if(n=g(n),_.test(n))return"Invalid host";if(null===(e=M(n)))return"Invalid host";t.host=e}else{if(U.test(n))return"Invalid host";for(e="",r=h(n),o=0;o<r.length;o++)e+=G(r[o],q);t.host=e}},M=function(t){var n,e,r,o,i,a,u,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),(n=c.length)>4)return t;for(e=[],r=0;r<n;r++){if(""==(o=c[r]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=k.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?L:8==i?P:T).test(o))return t;a=parseInt(o,i)}e.push(a)}for(r=0;r<n;r++)if(a=e[r],r==n-1){if(a>=R(256,5-n))return null}else if(a>255)return null;for(u=e.pop(),r=0;r<e.length;r++)u+=e[r]*R(256,3-r);return u},z=function(t){var n,e,r,o,i,a,u,c=[0,0,0,0,0,0,0,0],f=0,s=null,l=0,p=function(){return t.charAt(l)};if(":"==p()){if(":"!=t.charAt(1))return;l+=2,s=++f}for(;p();){if(8==f)return;if(":"!=p()){for(n=e=0;e<4&&T.test(p());)n=16*n+parseInt(p(),16),l++,e++;if("."==p()){if(0==e)return;if(l-=e,f>6)return;for(r=0;p();){if(o=null,r>0){if(!("."==p()&&r<4))return;l++}if(!I.test(p()))return;for(;I.test(p());){if(i=parseInt(p(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}c[f]=256*c[f]+o,2!=++r&&4!=r||f++}if(4!=r)return;break}if(":"==p()){if(l++,!p())return}else if(p())return;c[f++]=n}else{if(null!==s)return;l++,s=++f}}if(null!==s)for(a=f-s,f=7;0!=f&&a>0;)u=c[f],c[f--]=c[s+a-1],c[s+--a]=u;else if(8!=f)return;return c},D=function(t){var n,e,r,o;if("number"==typeof t){for(n=[],e=0;e<4;e++)n.unshift(t%256),t=O(t/256);return n.join(".")}if("object"==typeof t){for(n="",r=function(t){for(var n=null,e=1,r=null,o=0,i=0;i<8;i++)0!==t[i]?(o>e&&(n=r,e=o),r=null,o=0):(null===r&&(r=i),++o);return o>e&&(n=r,e=o),n}(t),e=0;e<8;e++)o&&0===t[e]||(o&&(o=!1),r===e?(n+=e?":":"::",o=!0):(n+=t[e].toString(16),e<7&&(n+=":")));return"["+n+"]"}return t},q={},B=p({},q,{" ":1,'"':1,"<":1,">":1,"`":1}),W=p({},B,{"#":1,"?":1,"{":1,"}":1}),$=p({},W,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),G=function(t,n){var e=v(t,0);return e>32&&e<127&&!l(n,t)?t:encodeURIComponent(t)},V={ftp:21,file:null,http:80,https:443,ws:80,wss:443},X=function(t){return l(V,t.scheme)},Y=function(t){return""!=t.username||""!=t.password},K=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},J=function(t,n){var e;return 2==t.length&&A.test(t.charAt(0))&&(":"==(e=t.charAt(1))||!n&&"|"==e)},H=function(t){var n;return t.length>1&&J(t.slice(0,2))&&(2==t.length||"/"===(n=t.charAt(2))||"\\"===n||"?"===n||"#"===n)},Q=function(t){var n=t.path,e=n.length;!e||"file"==t.scheme&&1==e&&J(n[0],!0)||n.pop()},Z=function(t){return"."===t||"%2e"===t.toLowerCase()},tt={},nt={},et={},rt={},ot={},it={},at={},ut={},ct={},ft={},st={},lt={},pt={},ht={},vt={},gt={},dt={},yt={},xt={},mt={},bt={},St=function(t,n,e,o){var i,a,u,c,f,s=e||tt,p=0,v="",g=!1,d=!1,y=!1;for(e||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,n=n.replace(N,"")),n=n.replace(C,""),i=h(n);p<=i.length;){switch(a=i[p],s){case tt:if(!a||!A.test(a)){if(e)return"Invalid scheme";s=et;continue}v+=a.toLowerCase(),s=nt;break;case nt:if(a&&(j.test(a)||"+"==a||"-"==a||"."==a))v+=a.toLowerCase();else{if(":"!=a){if(e)return"Invalid scheme";v="",s=et,p=0;continue}if(e&&(X(t)!=l(V,v)||"file"==v&&(Y(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=v,e)return void(X(t)&&V[t.scheme]==t.port&&(t.port=null));v="","file"==t.scheme?s=ht:X(t)&&o&&o.scheme==t.scheme?s=rt:X(t)?s=ut:"/"==i[p+1]?(s=ot,p++):(t.cannotBeABaseURL=!0,t.path.push(""),s=xt)}break;case et:if(!o||o.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(o.cannotBeABaseURL&&"#"==a){t.scheme=o.scheme,t.path=o.path.slice(),t.query=o.query,t.fragment="",t.cannotBeABaseURL=!0,s=bt;break}s="file"==o.scheme?ht:it;continue;case rt:if("/"!=a||"/"!=i[p+1]){s=it;continue}s=ct,p++;break;case ot:if("/"==a){s=ft;break}s=yt;continue;case it:if(t.scheme=o.scheme,a==r)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query;else if("/"==a||"\\"==a&&X(t))s=at;else if("?"==a)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query="",s=mt;else{if("#"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.path.pop(),s=yt;continue}t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query,t.fragment="",s=bt}break;case at:if(!X(t)||"/"!=a&&"\\"!=a){if("/"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,s=yt;continue}s=ft}else s=ct;break;case ut:if(s=ct,"/"!=a||"/"!=v.charAt(p+1))continue;p++;break;case ct:if("/"!=a&&"\\"!=a){s=ft;continue}break;case ft:if("@"==a){g&&(v="%40"+v),g=!0,u=h(v);for(var x=0;x<u.length;x++){var m=u[x];if(":"!=m||y){var b=G(m,$);y?t.password+=b:t.username+=b}else y=!0}v=""}else if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&X(t)){if(g&&""==v)return"Invalid authority";p-=h(v).length+1,v="",s=st}else v+=a;break;case st:case lt:if(e&&"file"==t.scheme){s=gt;continue}if(":"!=a||d){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&X(t)){if(X(t)&&""==v)return"Invalid host";if(e&&""==v&&(Y(t)||null!==t.port))return;if(c=F(t,v))return c;if(v="",s=dt,e)return;continue}"["==a?d=!0:"]"==a&&(d=!1),v+=a}else{if(""==v)return"Invalid host";if(c=F(t,v))return c;if(v="",s=pt,e==lt)return}break;case pt:if(!I.test(a)){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&X(t)||e){if(""!=v){var S=parseInt(v,10);if(S>65535)return"Invalid port";t.port=X(t)&&S===V[t.scheme]?null:S,v=""}if(e)return;s=dt;continue}return"Invalid port"}v+=a;break;case ht:if(t.scheme="file","/"==a||"\\"==a)s=vt;else{if(!o||"file"!=o.scheme){s=yt;continue}if(a==r)t.host=o.host,t.path=o.path.slice(),t.query=o.query;else if("?"==a)t.host=o.host,t.path=o.path.slice(),t.query="",s=mt;else{if("#"!=a){H(i.slice(p).join(""))||(t.host=o.host,t.path=o.path.slice(),Q(t)),s=yt;continue}t.host=o.host,t.path=o.path.slice(),t.query=o.query,t.fragment="",s=bt}}break;case vt:if("/"==a||"\\"==a){s=gt;break}o&&"file"==o.scheme&&!H(i.slice(p).join(""))&&(J(o.path[0],!0)?t.path.push(o.path[0]):t.host=o.host),s=yt;continue;case gt:if(a==r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!e&&J(v))s=yt;else if(""==v){if(t.host="",e)return;s=dt}else{if(c=F(t,v))return c;if("localhost"==t.host&&(t.host=""),e)return;v="",s=dt}continue}v+=a;break;case dt:if(X(t)){if(s=yt,"/"!=a&&"\\"!=a)continue}else if(e||"?"!=a)if(e||"#"!=a){if(a!=r&&(s=yt,"/"!=a))continue}else t.fragment="",s=bt;else t.query="",s=mt;break;case yt:if(a==r||"/"==a||"\\"==a&&X(t)||!e&&("?"==a||"#"==a)){if(".."===(f=(f=v).toLowerCase())||"%2e."===f||".%2e"===f||"%2e%2e"===f?(Q(t),"/"==a||"\\"==a&&X(t)||t.path.push("")):Z(v)?"/"==a||"\\"==a&&X(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&J(v)&&(t.host&&(t.host=""),v=v.charAt(0)+":"),t.path.push(v)),v="","file"==t.scheme&&(a==r||"?"==a||"#"==a))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==a?(t.query="",s=mt):"#"==a&&(t.fragment="",s=bt)}else v+=G(a,W);break;case xt:"?"==a?(t.query="",s=mt):"#"==a?(t.fragment="",s=bt):a!=r&&(t.path[0]+=G(a,q));break;case mt:e||"#"!=a?a!=r&&("'"==a&&X(t)?t.query+="%27":t.query+="#"==a?"%23":G(a,q)):(t.fragment="",s=bt);break;case bt:a!=r&&(t.fragment+=G(a,B))}p++}},Et=function(t){var n,e,r=s(this,Et,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),u=E(r,{type:"URL"});if(void 0!==o)if(o instanceof Et)n=w(o);else if(e=St(n={},String(o)))throw TypeError(e);if(e=St(u,a,null,n))throw TypeError(e);var c=u.searchParams=new b,f=S(c);f.updateSearchParams(u.query),f.updateURL=function(){u.query=String(c)||null},i||(r.href=Ot.call(r),r.origin=Rt.call(r),r.protocol=At.call(r),r.username=jt.call(r),r.password=It.call(r),r.host=kt.call(r),r.hostname=Pt.call(r),r.port=Lt.call(r),r.pathname=Tt.call(r),r.search=_t.call(r),r.searchParams=Ut.call(r),r.hash=Nt.call(r))},wt=Et.prototype,Ot=function(){var t=w(this),n=t.scheme,e=t.username,r=t.password,o=t.host,i=t.port,a=t.path,u=t.query,c=t.fragment,f=n+":";return null!==o?(f+="//",Y(t)&&(f+=e+(r?":"+r:"")+"@"),f+=D(o),null!==i&&(f+=":"+i)):"file"==n&&(f+="//"),f+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(f+="?"+u),null!==c&&(f+="#"+c),f},Rt=function(){var t=w(this),n=t.scheme,e=t.port;if("blob"==n)try{return new URL(n.path[0]).origin}catch(t){return"null"}return"file"!=n&&X(t)?n+"://"+D(t.host)+(null!==e?":"+e:""):"null"},At=function(){return w(this).scheme+":"},jt=function(){return w(this).username},It=function(){return w(this).password},kt=function(){var t=w(this),n=t.host,e=t.port;return null===n?"":null===e?D(n):D(n)+":"+e},Pt=function(){var t=w(this).host;return null===t?"":D(t)},Lt=function(){var t=w(this).port;return null===t?"":String(t)},Tt=function(){var t=w(this),n=t.path;return t.cannotBeABaseURL?n[0]:n.length?"/"+n.join("/"):""},_t=function(){var t=w(this).query;return t?"?"+t:""},Ut=function(){return w(this).searchParams},Nt=function(){var t=w(this).fragment;return t?"#"+t:""},Ct=function(t,n){return{get:t,set:n,configurable:!0,enumerable:!0}};if(i&&c(wt,{href:Ct(Ot,(function(t){var n=w(this),e=String(t),r=St(n,e);if(r)throw TypeError(r);S(n.searchParams).updateSearchParams(n.query)})),origin:Ct(Rt),protocol:Ct(At,(function(t){var n=w(this);St(n,String(t)+":",tt)})),username:Ct(jt,(function(t){var n=w(this),e=h(String(t));if(!K(n)){n.username="";for(var r=0;r<e.length;r++)n.username+=G(e[r],$)}})),password:Ct(It,(function(t){var n=w(this),e=h(String(t));if(!K(n)){n.password="";for(var r=0;r<e.length;r++)n.password+=G(e[r],$)}})),host:Ct(kt,(function(t){var n=w(this);n.cannotBeABaseURL||St(n,String(t),st)})),hostname:Ct(Pt,(function(t){var n=w(this);n.cannotBeABaseURL||St(n,String(t),lt)})),port:Ct(Lt,(function(t){var n=w(this);K(n)||(""==(t=String(t))?n.port=null:St(n,t,pt))})),pathname:Ct(Tt,(function(t){var n=w(this);n.cannotBeABaseURL||(n.path=[],St(n,t+"",dt))})),search:Ct(_t,(function(t){var n=w(this);""==(t=String(t))?n.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),n.query="",St(n,t,mt)),S(n.searchParams).updateSearchParams(n.query)})),searchParams:Ct(Ut),hash:Ct(Nt,(function(t){var n=w(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),n.fragment="",St(n,t,bt)):n.fragment=null}))}),f(wt,"toJSON",(function(){return Ot.call(this)}),{enumerable:!0}),f(wt,"toString",(function(){return Ot.call(this)}),{enumerable:!0}),m){var Ft=m.createObjectURL,Mt=m.revokeObjectURL;Ft&&f(Et,"createObjectURL",(function(t){return Ft.apply(m,arguments)})),Mt&&f(Et,"revokeObjectURL",(function(t){return Mt.apply(m,arguments)}))}d(Et,"URL"),o({global:!0,forced:!a,sham:!i},{URL:Et})},function(t,n,e){var r=e(6),o=e(49),i=e(29),a=o("iterator");t.exports=!r((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),n=t.searchParams,e="";return t.pathname="c%20d",n.forEach((function(t,r){n.delete("b"),e+=r+t})),i&&!t.toJSON||!n.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==n.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!n[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==e||"x"!==new URL("http://x",void 0).host}))},function(t,n,e){var r=/[^\0-\u007E]/,o=/[.\u3002\uFF0E\uFF61]/g,i="Overflow: input needs wider integers to process",a=Math.floor,u=String.fromCharCode,c=function(t){return t+22+75*(t<26)},f=function(t,n,e){var r=0;for(t=e?a(t/700):t>>1,t+=a(t/n);t>455;r+=36)t=a(t/35);return a(r+36*t/(t+38))},s=function(t){var n,e,r=[],o=(t=function(t){for(var n=[],e=0,r=t.length;e<r;){var o=t.charCodeAt(e++);if(o>=55296&&o<=56319&&e<r){var i=t.charCodeAt(e++);56320==(64512&i)?n.push(((1023&o)<<10)+(1023&i)+65536):(n.push(o),e--)}else n.push(o)}return n}(t)).length,s=128,l=0,p=72;for(n=0;n<t.length;n++)(e=t[n])<128&&r.push(u(e));var h=r.length,v=h;for(h&&r.push("-");v<o;){var g=2147483647;for(n=0;n<t.length;n++)(e=t[n])>=s&&e<g&&(g=e);var d=v+1;if(g-s>a((2147483647-l)/d))throw RangeError(i);for(l+=(g-s)*d,s=g,n=0;n<t.length;n++){if((e=t[n])<s&&++l>2147483647)throw RangeError(i);if(e==s){for(var y=l,x=36;;x+=36){var m=x<=p?1:x>=p+26?26:x-p;if(y<m)break;var b=y-m,S=36-m;r.push(u(c(m+b%S))),y=a(b/S)}r.push(u(c(y))),p=f(l,d,v==h),l=0,++v}}++l,++s}return r.join("")};t.exports=function(t){var n,e,i=[],a=t.toLowerCase().replace(o,".").split(".");for(n=0;n<a.length;n++)e=a[n],i.push(r.test(e)?"xn--"+s(e):e);return i.join(".")}},function(t,n,e){e(89);var r=e(2),o=e(34),i=e(244),a=e(21),u=e(126),c=e(95),f=e(91),s=e(25),l=e(123),p=e(15),h=e(64),v=e(84),g=e(20),d=e(14),y=e(58),x=e(8),m=e(247),b=e(83),S=e(49),E=o("fetch"),w=o("Headers"),O=S("iterator"),R=s.set,A=s.getterFor("URLSearchParams"),j=s.getterFor("URLSearchParamsIterator"),I=/\+/g,k=Array(4),P=function(t){return k[t-1]||(k[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},L=function(t){try{return decodeURIComponent(t)}catch(n){return t}},T=function(t){var n=t.replace(I," "),e=4;try{return decodeURIComponent(n)}catch(t){for(;e;)n=n.replace(P(e--),L);return n}},_=/[!'()~]|%20/g,U={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},N=function(t){return U[t]},C=function(t){return encodeURIComponent(t).replace(_,N)},F=function(t,n){if(n)for(var e,r,o=n.split("&"),i=0;i<o.length;)(e=o[i++]).length&&(r=e.split("="),t.push({key:T(r.shift()),value:T(r.join("="))}))},M=function(t){this.entries.length=0,F(this.entries,t)},z=function(t,n){if(t<n)throw TypeError("Not enough arguments")},D=f((function(t,n){R(this,{type:"URLSearchParamsIterator",iterator:m(A(t).entries),kind:n})}),"Iterator",(function(){var t=j(this),n=t.kind,e=t.iterator.next(),r=e.value;return e.done||(e.value="keys"===n?r.key:"values"===n?r.value:[r.key,r.value]),e})),q=function(){l(this,q,"URLSearchParams");var t,n,e,r,o,i,a,u,c,f=arguments.length>0?arguments[0]:void 0,s=this,h=[];if(R(s,{type:"URLSearchParams",entries:h,updateURL:function(){},updateSearchParams:M}),void 0!==f)if(d(f))if("function"==typeof(t=b(f)))for(e=(n=t.call(f)).next;!(r=e.call(n)).done;){if((a=(i=(o=m(g(r.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");h.push({key:a.value+"",value:u.value+""})}else for(c in f)p(f,c)&&h.push({key:c,value:f[c]+""});else F(h,"string"==typeof f?"?"===f.charAt(0)?f.slice(1):f:f+"")},B=q.prototype;u(B,{append:function(t,n){z(arguments.length,2);var e=A(this);e.entries.push({key:t+"",value:n+""}),e.updateURL()},delete:function(t){z(arguments.length,1);for(var n=A(this),e=n.entries,r=t+"",o=0;o<e.length;)e[o].key===r?e.splice(o,1):o++;n.updateURL()},get:function(t){z(arguments.length,1);for(var n=A(this).entries,e=t+"",r=0;r<n.length;r++)if(n[r].key===e)return n[r].value;return null},getAll:function(t){z(arguments.length,1);for(var n=A(this).entries,e=t+"",r=[],o=0;o<n.length;o++)n[o].key===e&&r.push(n[o].value);return r},has:function(t){z(arguments.length,1);for(var n=A(this).entries,e=t+"",r=0;r<n.length;)if(n[r++].key===e)return!0;return!1},set:function(t,n){z(arguments.length,1);for(var e,r=A(this),o=r.entries,i=!1,a=t+"",u=n+"",c=0;c<o.length;c++)(e=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,e.value=u));i||o.push({key:a,value:u}),r.updateURL()},sort:function(){var t,n,e,r=A(this),o=r.entries,i=o.slice();for(o.length=0,e=0;e<i.length;e++){for(t=i[e],n=0;n<e;n++)if(o[n].key>t.key){o.splice(n,0,t);break}n===e&&o.push(t)}r.updateURL()},forEach:function(t){for(var n,e=A(this).entries,r=h(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<e.length;)r((n=e[o++]).value,n.key,this)},keys:function(){return new D(this,"keys")},values:function(){return new D(this,"values")},entries:function(){return new D(this,"entries")}},{enumerable:!0}),a(B,O,B.entries),a(B,"toString",(function(){for(var t,n=A(this).entries,e=[],r=0;r<n.length;)t=n[r++],e.push(C(t.key)+"="+C(t.value));return e.join("&")}),{enumerable:!0}),c(q,"URLSearchParams"),r({global:!0,forced:!i},{URLSearchParams:q}),i||"function"!=typeof E||"function"!=typeof w||r({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var n,e,r,o=[t];return arguments.length>1&&(n=arguments[1],d(n)&&(e=n.body,"URLSearchParams"===v(e)&&((r=n.headers?new w(n.headers):new w).has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),n=y(n,{body:x(0,String(e)),headers:x(0,r)}))),o.push(n)),E.apply(this,o)}}),t.exports={URLSearchParams:q,getState:A}},function(t,n,e){var r=e(20),o=e(83);t.exports=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(String(t)+" is not iterable");return r(n.call(t))}},function(t,n,e){e(2)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})}])}();

//!fetch 3.0.0, global "this" must be replaced with "window"
// IIFE version
!function(t){"use strict";var e="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,o="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),n="FormData"in self,i="ArrayBuffer"in self;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var r;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():i&&o&&((r=t)&&DataView.prototype.isPrototypeOf(r))?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r,o=c(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=h(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[h(t)]},d.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},d.prototype.set=function(t,e){this.map[h(t)]=u(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var r,o,n=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),m.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},b.call(w.prototype),b.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];E.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},t.DOMException=self.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function _(e,r){return new Promise((function(n,i){var s=new w(e,r);if(s.signal&&s.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new E(o,r))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",h)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=d,self.Request=w,self.Response=E),t.Headers=d,t.Request=w,t.Response=E,t.fetch=_}({});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ })
]]);