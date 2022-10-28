/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const t$1=window,e$4=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$4=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$4.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a$1};let d$1 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.4.1");

/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$2="?"+o$1,l$2=`<${n$2}>`,h=document,r=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_$b=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_$b):void 0!==u[3]&&(d=_$b):d===_$b?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_$b:'"'===u[3]?p:m):d===p||d===m?d=_$b:d===a||d===f?d=v:(d=_$b,h=void 0);const y=d===_$b&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$2:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$1+y):s+o$1+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$2?e$2.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$1),i=t.length-1;if(i>0){l.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r());}}}else if(8===l.nodeType)if(l.data===n$2)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$1,t+1));)c.push({type:7,index:h}),t+=o$1.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++);}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c(t)?this.k(t):this.g(t);}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}g(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else {const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r()),this.O(r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===b?void 0:t;}}const R=s$1?s$1.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=i$1.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t=i$1.litHtmlVersions)&&void 0!==t?t:i$1.litHtmlVersions=[]).push("2.4.0");const Z=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var l$1,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.2");

/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const l=l=>null!=l?l:b;

function _arrayWithHoles(arr) {
if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayLikeToArray(arr, len) {
if (len == null || len > arr.length) len = arr.length;
for (var i = 0, arr2 = new Array(len); i < len; i++) {
  arr2[i] = arr[i];
}
return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
if (!o) return;
if (typeof o === "string") return _arrayLikeToArray(o, minLen);
var n = Object.prototype.toString.call(o).slice(8, -1);
if (n === "Object" && o.constructor) n = o.constructor.name;
if (n === "Map" || n === "Set") return Array.from(o);
if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toArray(arr) {
return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _typeof(obj) {
"@babel/helpers - typeof";

return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
}, _typeof(obj);
}

function _toPrimitive(input, hint) {
if (_typeof(input) !== "object" || input === null) return input;
var prim = input[Symbol.toPrimitive];
if (prim !== undefined) {
  var res = prim.call(input, hint || "default");
  if (_typeof(res) !== "object") return res;
  throw new TypeError("@@toPrimitive must return a primitive value.");
}
return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
var key = _toPrimitive(arg, "string");
return _typeof(key) === "symbol" ? key : String(key);
}

function _decorate(decorators, factory, superClass, mixins) {
var api = _getDecoratorsApi();
if (mixins) {
  for (var i = 0; i < mixins.length; i++) {
    api = mixins[i](api);
  }
}
var r = factory(function initialize(O) {
  api.initializeInstanceElements(O, decorated.elements);
}, superClass);
var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
api.initializeClassElements(r.F, decorated.elements);
return api.runClassFinishers(r.F, decorated.finishers);
}
function _getDecoratorsApi() {
_getDecoratorsApi = function _getDecoratorsApi() {
  return api;
};
var api = {
  elementsDefinitionOrder: [["method"], ["field"]],
  initializeInstanceElements: function initializeInstanceElements(O, elements) {
    ["method", "field"].forEach(function (kind) {
      elements.forEach(function (element) {
        if (element.kind === kind && element.placement === "own") {
          this.defineClassElement(O, element);
        }
      }, this);
    }, this);
  },
  initializeClassElements: function initializeClassElements(F, elements) {
    var proto = F.prototype;
    ["method", "field"].forEach(function (kind) {
      elements.forEach(function (element) {
        var placement = element.placement;
        if (element.kind === kind && (placement === "static" || placement === "prototype")) {
          var receiver = placement === "static" ? F : proto;
          this.defineClassElement(receiver, element);
        }
      }, this);
    }, this);
  },
  defineClassElement: function defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
      var initializer = element.initializer;
      descriptor = {
        enumerable: descriptor.enumerable,
        writable: descriptor.writable,
        configurable: descriptor.configurable,
        value: initializer === void 0 ? void 0 : initializer.call(receiver)
      };
    }
    Object.defineProperty(receiver, element.key, descriptor);
  },
  decorateClass: function decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
      "static": [],
      prototype: [],
      own: []
    };
    elements.forEach(function (element) {
      this.addElementPlacement(element, placements);
    }, this);
    elements.forEach(function (element) {
      if (!_hasDecorators(element)) return newElements.push(element);
      var elementFinishersExtras = this.decorateElement(element, placements);
      newElements.push(elementFinishersExtras.element);
      newElements.push.apply(newElements, elementFinishersExtras.extras);
      finishers.push.apply(finishers, elementFinishersExtras.finishers);
    }, this);
    if (!decorators) {
      return {
        elements: newElements,
        finishers: finishers
      };
    }
    var result = this.decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
  },
  addElementPlacement: function addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) {
      throw new TypeError("Duplicated element (" + element.key + ")");
    }
    keys.push(element.key);
  },
  decorateElement: function decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
      var keys = placements[element.placement];
      keys.splice(keys.indexOf(element.key), 1);
      var elementObject = this.fromElementDescriptor(element);
      var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
      element = elementFinisherExtras.element;
      this.addElementPlacement(element, placements);
      if (elementFinisherExtras.finisher) {
        finishers.push(elementFinisherExtras.finisher);
      }
      var newExtras = elementFinisherExtras.extras;
      if (newExtras) {
        for (var j = 0; j < newExtras.length; j++) {
          this.addElementPlacement(newExtras[j], placements);
        }
        extras.push.apply(extras, newExtras);
      }
    }
    return {
      element: element,
      finishers: finishers,
      extras: extras
    };
  },
  decorateConstructor: function decorateConstructor(elements, decorators) {
    var finishers = [];
    for (var i = decorators.length - 1; i >= 0; i--) {
      var obj = this.fromClassDescriptor(elements);
      var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);
      if (elementsAndFinisher.finisher !== undefined) {
        finishers.push(elementsAndFinisher.finisher);
      }
      if (elementsAndFinisher.elements !== undefined) {
        elements = elementsAndFinisher.elements;
        for (var j = 0; j < elements.length - 1; j++) {
          for (var k = j + 1; k < elements.length; k++) {
            if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
              throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
          }
        }
      }
    }
    return {
      elements: elements,
      finishers: finishers
    };
  },
  fromElementDescriptor: function fromElementDescriptor(element) {
    var obj = {
      kind: element.kind,
      key: element.key,
      placement: element.placement,
      descriptor: element.descriptor
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
  },
  toElementDescriptors: function toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArray(elementObjects).map(function (elementObject) {
      var element = this.toElementDescriptor(elementObject);
      this.disallowProperty(elementObject, "finisher", "An element descriptor");
      this.disallowProperty(elementObject, "extras", "An element descriptor");
      return element;
    }, this);
  },
  toElementDescriptor: function toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") {
      throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
    }
    var key = _toPropertyKey(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") {
      throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
    }
    var descriptor = elementObject.descriptor;
    this.disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
      kind: kind,
      key: key,
      placement: placement,
      descriptor: Object.assign({}, descriptor)
    };
    if (kind !== "field") {
      this.disallowProperty(elementObject, "initializer", "A method descriptor");
    } else {
      this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
      this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
      this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
      element.initializer = elementObject.initializer;
    }
    return element;
  },
  toElementFinisherExtras: function toElementFinisherExtras(elementObject) {
    var element = this.toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = this.toElementDescriptors(elementObject.extras);
    return {
      element: element,
      finisher: finisher,
      extras: extras
    };
  },
  fromClassDescriptor: function fromClassDescriptor(elements) {
    var obj = {
      kind: "class",
      elements: elements.map(this.fromElementDescriptor, this)
    };
    var desc = {
      value: "Descriptor",
      configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
  },
  toClassDescriptor: function toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") {
      throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
    }
    this.disallowProperty(obj, "key", "A class descriptor");
    this.disallowProperty(obj, "placement", "A class descriptor");
    this.disallowProperty(obj, "descriptor", "A class descriptor");
    this.disallowProperty(obj, "initializer", "A class descriptor");
    this.disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = this.toElementDescriptors(obj.elements);
    return {
      elements: elements,
      finisher: finisher
    };
  },
  runClassFinishers: function runClassFinishers(constructor, finishers) {
    for (var i = 0; i < finishers.length; i++) {
      var newConstructor = (0, finishers[i])(constructor);
      if (newConstructor !== undefined) {
        if (typeof newConstructor !== "function") {
          throw new TypeError("Finishers must return a constructor.");
        }
        constructor = newConstructor;
      }
    }
    return constructor;
  },
  disallowProperty: function disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) {
      throw new TypeError(objectType + " can't have a ." + name + " property.");
    }
  }
};
return api;
}
function _createElementDescriptor(def) {
var key = _toPropertyKey(def.key);
var descriptor;
if (def.kind === "method") {
  descriptor = {
    value: def.value,
    writable: true,
    configurable: true,
    enumerable: false
  };
} else if (def.kind === "get") {
  descriptor = {
    get: def.value,
    configurable: true,
    enumerable: false
  };
} else if (def.kind === "set") {
  descriptor = {
    set: def.value,
    configurable: true,
    enumerable: false
  };
} else if (def.kind === "field") {
  descriptor = {
    configurable: true,
    writable: true,
    enumerable: true
  };
}
var element = {
  kind: def.kind === "field" ? "field" : "method",
  key: key,
  placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype",
  descriptor: descriptor
};
if (def.decorators) element.decorators = def.decorators;
if (def.kind === "field") element.initializer = def.value;
return element;
}
function _coalesceGetterSetter(element, other) {
if (element.descriptor.get !== undefined) {
  other.descriptor.get = element.descriptor.get;
} else {
  other.descriptor.set = element.descriptor.set;
}
}
function _coalesceClassElements(elements) {
var newElements = [];
var isSameElement = function isSameElement(other) {
  return other.kind === "method" && other.key === element.key && other.placement === element.placement;
};
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var other;
  if (element.kind === "method" && (other = newElements.find(isSameElement))) {
    if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
      if (_hasDecorators(element) || _hasDecorators(other)) {
        throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
      }
      other.descriptor = element.descriptor;
    } else {
      if (_hasDecorators(element)) {
        if (_hasDecorators(other)) {
          throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
        }
        other.decorators = element.decorators;
      }
      _coalesceGetterSetter(element, other);
    }
  } else {
    newElements.push(element);
  }
}
return newElements;
}
function _hasDecorators(element) {
return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _optionalCallableProperty(obj, name) {
var value = obj[name];
if (value !== undefined && typeof value !== "function") {
  throw new TypeError("Expected '" + name + "' to be a function");
}
return value;
}

/**
* Copyright IBM Corp. 2016, 2018
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
* Settings.
* @exports CarbonComponents.settings
* @type Object
* @property {boolean} [disableAutoInit]
*   Disables automatic instantiation of components.
*   By default (`CarbonComponents.disableAutoInit` is `false`),
*   carbon-components attempts to instantiate components automatically
*   by searching for elements with `data-component-name` (e.g. `data-loading`) attribute
*   or upon DOM events (e.g. clicking) on such elements.
*   See each components' static `.init()` methods for details.
* @property {string} [prefix=bx]
*   Brand prefix. Should be in sync with `$prefix` Sass variable in carbon-components/src/globals/scss/_vars.scss.
* // @todo given that the default value is so long, is it appropriate to put in the JSDoc?
* @property {string} [selectorTabbable]
*   A selector selecting tabbable/focusable nodes.
*   By default selectorTabbable references links, areas, inputs, buttons, selects, textareas,
*   iframes, objects, embeds, or elements explicitly using tabindex or contenteditable attributes
*   as long as the element is not `disabled` or the `tabindex="-1"`.
* @property {string} [selectorFocusable]
*   CSS selector that selects major nodes that are click focusable
*   This property is identical to selectorTabbable with the exception of
*   the `:not([tabindex='-1'])` pseudo class
*/
var settings = {
prefix: 'bx',
selectorTabbable: "\n    a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n    textarea:not([disabled]):not([tabindex='-1']),\n    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]\n  ",
selectorFocusable: "\n    a[href], area[href], input:not([disabled]),\n    button:not([disabled]),select:not([disabled]),\n    textarea:not([disabled]),\n    iframe, object, embed, *[tabindex], *[contenteditable=true]\n  "
};
var settings_1 = settings;

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
const directives = new WeakMap();
/**
* Brands a function as a directive factory function so that lit-html will call
* the function during template rendering, rather than passing as a value.
*
* A _directive_ is a function that takes a Part as an argument. It has the
* signature: `(part: Part) => void`.
*
* A directive _factory_ is a function that takes arguments for data and
* configuration and returns a directive. Users of directive usually refer to
* the directive factory as the directive. For example, "The repeat directive".
*
* Usually a template author will invoke a directive factory in their template
* with relevant arguments, which will then return a directive function.
*
* Here's an example of using the `repeat()` directive factory that takes an
* array and a function to render an item:
*
* ```js
* html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
* ```
*
* When `repeat` is invoked, it returns a directive function that closes over
* `items` and the template function. When the outer template is rendered, the
* return directive function is called with the Part for the expression.
* `repeat` then performs it's custom logic to render multiple items.
*
* @param f The directive factory function. Must be a function that returns a
* function of the signature `(part: Part) => void`. The returned function will
* be called with the part object.
*
* @example
*
* import {directive, html} from 'lit-html';
*
* const immutable = directive((v) => (part) => {
*   if (part.value !== v) {
*     part.setValue(v)
*   }
* });
*/
const directive = (f) => ((...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
});
const isDirective = (o) => {
  return typeof o === 'function' && directives.has(o);
};

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
/**
* True if the custom elements polyfill is in use.
*/
const isCEPolyfill = typeof window !== 'undefined' &&
  window.customElements != null &&
  window.customElements.polyfillWrapFlushCallback !==
      undefined;
/**
* Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
* into another container (could be the same container), before `before`. If
* `before` is null, it appends the nodes to the container.
*/
const reparentNodes = (container, start, end = null, before = null) => {
  while (start !== end) {
      const n = start.nextSibling;
      container.insertBefore(start, before);
      start = n;
  }
};
/**
* Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
* `container`.
*/
const removeNodes = (container, start, end = null) => {
  while (start !== end) {
      const n = start.nextSibling;
      container.removeChild(start);
      start = n;
  }
};

/**
* @license
* Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
/**
* A sentinel value that signals that a value was handled by a directive and
* should not be written to the DOM.
*/
const noChange = {};
/**
* A sentinel value that signals a NodePart to fully clear its content.
*/
const nothing = {};

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
/**
* An expression marker with embedded unique key to avoid collision with
* possible text in templates.
*/
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
* An expression marker used text-positions, multi-binding attributes, and
* attributes with markup-like text values.
*/
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
* Suffix appended to all bound attribute names.
*/
const boundAttributeSuffix = '$lit$';
/**
* An updatable Template that tracks the location of dynamic parts.
*/
class Template {
  constructor(result, element) {
      this.parts = [];
      this.element = element;
      const nodesToRemove = [];
      const stack = [];
      // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
      const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
      // Keeps track of the last index associated with a part. We try to delete
      // unnecessary nodes, but we never want to associate two different parts
      // to the same index. They must have a constant node between.
      let lastPartIndex = 0;
      let index = -1;
      let partIndex = 0;
      const { strings, values: { length } } = result;
      while (partIndex < length) {
          const node = walker.nextNode();
          if (node === null) {
              // We've exhausted the content inside a nested template element.
              // Because we still have parts (the outer for-loop), we know:
              // - There is a template in the stack
              // - The walker will find a nextNode outside the template
              walker.currentNode = stack.pop();
              continue;
          }
          index++;
          if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
              if (node.hasAttributes()) {
                  const attributes = node.attributes;
                  const { length } = attributes;
                  // Per
                  // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                  // attributes are not guaranteed to be returned in document order.
                  // In particular, Edge/IE can return them out of order, so we cannot
                  // assume a correspondence between part index and attribute index.
                  let count = 0;
                  for (let i = 0; i < length; i++) {
                      if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                          count++;
                      }
                  }
                  while (count-- > 0) {
                      // Get the template literal section leading up to the first
                      // expression in this attribute
                      const stringForPart = strings[partIndex];
                      // Find the attribute name
                      const name = lastAttributeNameRegex.exec(stringForPart)[2];
                      // Find the corresponding attribute
                      // All bound attributes have had a suffix added in
                      // TemplateResult#getHTML to opt out of special attribute
                      // handling. To look up the attribute value we also need to add
                      // the suffix.
                      const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                      const attributeValue = node.getAttribute(attributeLookupName);
                      node.removeAttribute(attributeLookupName);
                      const statics = attributeValue.split(markerRegex);
                      this.parts.push({ type: 'attribute', index, name, strings: statics });
                      partIndex += statics.length - 1;
                  }
              }
              if (node.tagName === 'TEMPLATE') {
                  stack.push(node);
                  walker.currentNode = node.content;
              }
          }
          else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
              const data = node.data;
              if (data.indexOf(marker) >= 0) {
                  const parent = node.parentNode;
                  const strings = data.split(markerRegex);
                  const lastIndex = strings.length - 1;
                  // Generate a new text node for each literal section
                  // These nodes are also used as the markers for node parts
                  for (let i = 0; i < lastIndex; i++) {
                      let insert;
                      let s = strings[i];
                      if (s === '') {
                          insert = createMarker();
                      }
                      else {
                          const match = lastAttributeNameRegex.exec(s);
                          if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                              s = s.slice(0, match.index) + match[1] +
                                  match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                          }
                          insert = document.createTextNode(s);
                      }
                      parent.insertBefore(insert, node);
                      this.parts.push({ type: 'node', index: ++index });
                  }
                  // If there's no text, we must insert a comment to mark our place.
                  // Else, we can trust it will stick around after cloning.
                  if (strings[lastIndex] === '') {
                      parent.insertBefore(createMarker(), node);
                      nodesToRemove.push(node);
                  }
                  else {
                      node.data = strings[lastIndex];
                  }
                  // We have a part for each match found
                  partIndex += lastIndex;
              }
          }
          else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
              if (node.data === marker) {
                  const parent = node.parentNode;
                  // Add a new marker node to be the startNode of the Part if any of
                  // the following are true:
                  //  * We don't have a previousSibling
                  //  * The previousSibling is already the start of a previous part
                  if (node.previousSibling === null || index === lastPartIndex) {
                      index++;
                      parent.insertBefore(createMarker(), node);
                  }
                  lastPartIndex = index;
                  this.parts.push({ type: 'node', index });
                  // If we don't have a nextSibling, keep this node so we have an end.
                  // Else, we can remove it to save future costs.
                  if (node.nextSibling === null) {
                      node.data = '';
                  }
                  else {
                      nodesToRemove.push(node);
                      index--;
                  }
                  partIndex++;
              }
              else {
                  let i = -1;
                  while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                      // Comment node has a binding marker inside, make an inactive part
                      // The binding won't work, but subsequent bindings will
                      // TODO (justinfagnani): consider whether it's even worth it to
                      // make bindings in comments work
                      this.parts.push({ type: 'node', index: -1 });
                      partIndex++;
                  }
              }
          }
      }
      // Remove text binding nodes after the walk to not disturb the TreeWalker
      for (const n of nodesToRemove) {
          n.parentNode.removeChild(n);
      }
  }
}
const endsWith = (str, suffix) => {
  const index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
* This regex extracts the attribute name preceding an attribute-position
* expression. It does this by matching the syntax allowed for attributes
* against the string literal directly preceding the expression, assuming that
* the expression is in an attribute-value position.
*
* See attributes in the HTML spec:
* https://www.w3.org/TR/html5/syntax.html#elements-attributes
*
* " \x09\x0a\x0c\x0d" are HTML space characters:
* https://www.w3.org/TR/html5/infrastructure.html#space-characters
*
* "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
* space character except " ".
*
* So an attribute is:
*  * The name: any character except a control character, space character, ('),
*    ("), ">", "=", or "/"
*  * Followed by zero or more space characters
*  * Followed by "="
*  * Followed by zero or more space characters
*  * Followed by:
*    * Any character except space, ('), ("), "<", ">", "=", (`), or
*    * (") then any non-("), or
*    * (') then any non-(')
*/
const lastAttributeNameRegex =
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
/**
* An instance of a `Template` that can be attached to the DOM and updated
* with new values.
*/
class TemplateInstance {
  constructor(template, processor, options) {
      this.__parts = [];
      this.template = template;
      this.processor = processor;
      this.options = options;
  }
  update(values) {
      let i = 0;
      for (const part of this.__parts) {
          if (part !== undefined) {
              part.setValue(values[i]);
          }
          i++;
      }
      for (const part of this.__parts) {
          if (part !== undefined) {
              part.commit();
          }
      }
  }
  _clone() {
      // There are a number of steps in the lifecycle of a template instance's
      // DOM fragment:
      //  1. Clone - create the instance fragment
      //  2. Adopt - adopt into the main document
      //  3. Process - find part markers and create parts
      //  4. Upgrade - upgrade custom elements
      //  5. Update - set node, attribute, property, etc., values
      //  6. Connect - connect to the document. Optional and outside of this
      //     method.
      //
      // We have a few constraints on the ordering of these steps:
      //  * We need to upgrade before updating, so that property values will pass
      //    through any property setters.
      //  * We would like to process before upgrading so that we're sure that the
      //    cloned fragment is inert and not disturbed by self-modifying DOM.
      //  * We want custom elements to upgrade even in disconnected fragments.
      //
      // Given these constraints, with full custom elements support we would
      // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
      //
      // But Safari does not implement CustomElementRegistry#upgrade, so we
      // can not implement that order and still have upgrade-before-update and
      // upgrade disconnected fragments. So we instead sacrifice the
      // process-before-upgrade constraint, since in Custom Elements v1 elements
      // must not modify their light DOM in the constructor. We still have issues
      // when co-existing with CEv0 elements like Polymer 1, and with polyfills
      // that don't strictly adhere to the no-modification rule because shadow
      // DOM, which may be created in the constructor, is emulated by being placed
      // in the light DOM.
      //
      // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
      // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
      // in one step.
      //
      // The Custom Elements v1 polyfill supports upgrade(), so the order when
      // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
      // Connect.
      const fragment = isCEPolyfill ?
          this.template.element.content.cloneNode(true) :
          document.importNode(this.template.element.content, true);
      const stack = [];
      const parts = this.template.parts;
      // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
      const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
      let partIndex = 0;
      let nodeIndex = 0;
      let part;
      let node = walker.nextNode();
      // Loop through all the nodes and parts of a template
      while (partIndex < parts.length) {
          part = parts[partIndex];
          if (!isTemplatePartActive(part)) {
              this.__parts.push(undefined);
              partIndex++;
              continue;
          }
          // Progress the tree walker until we find our next part's node.
          // Note that multiple parts may share the same node (attribute parts
          // on a single element), so this loop may not run at all.
          while (nodeIndex < part.index) {
              nodeIndex++;
              if (node.nodeName === 'TEMPLATE') {
                  stack.push(node);
                  walker.currentNode = node.content;
              }
              if ((node = walker.nextNode()) === null) {
                  // We've exhausted the content inside a nested template element.
                  // Because we still have parts (the outer for-loop), we know:
                  // - There is a template in the stack
                  // - The walker will find a nextNode outside the template
                  walker.currentNode = stack.pop();
                  node = walker.nextNode();
              }
          }
          // We've arrived at our part's node.
          if (part.type === 'node') {
              const part = this.processor.handleTextExpression(this.options);
              part.insertAfterNode(node.previousSibling);
              this.__parts.push(part);
          }
          else {
              this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
          }
          partIndex++;
      }
      if (isCEPolyfill) {
          document.adoptNode(fragment);
          customElements.upgrade(fragment);
      }
      return fragment;
  }
}

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
/**
* Our TrustedTypePolicy for HTML which is declared using the html template
* tag function.
*
* That HTML is a developer-authored constant, and is parsed with innerHTML
* before any untrusted expressions have been mixed in. Therefor it is
* considered safe by construction.
*/
const policy = window.trustedTypes &&
  trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
const commentMarker = ` ${marker} `;
/**
* The return type of `html`, which holds a Template and the values from
* interpolated expressions.
*/
class TemplateResult {
  constructor(strings, values, type, processor) {
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
      const l = this.strings.length - 1;
      let html = '';
      let isCommentBinding = false;
      for (let i = 0; i < l; i++) {
          const s = this.strings[i];
          // For each binding we want to determine the kind of marker to insert
          // into the template source before it's parsed by the browser's HTML
          // parser. The marker type is based on whether the expression is in an
          // attribute, text, or comment position.
          //   * For node-position bindings we insert a comment with the marker
          //     sentinel as its text content, like <!--{{lit-guid}}-->.
          //   * For attribute bindings we insert just the marker sentinel for the
          //     first binding, so that we support unquoted attribute bindings.
          //     Subsequent bindings can use a comment marker because multi-binding
          //     attributes must be quoted.
          //   * For comment bindings we insert just the marker sentinel so we don't
          //     close the comment.
          //
          // The following code scans the template source, but is *not* an HTML
          // parser. We don't need to track the tree structure of the HTML, only
          // whether a binding is inside a comment, and if not, if it appears to be
          // the first binding in an attribute.
          const commentOpen = s.lastIndexOf('<!--');
          // We're in comment position if we have a comment open with no following
          // comment close. Because <-- can appear in an attribute value there can
          // be false positives.
          isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
              s.indexOf('-->', commentOpen + 1) === -1;
          // Check to see if we have an attribute-like sequence preceding the
          // expression. This can match "name=value" like structures in text,
          // comments, and attribute values, so there can be false-positives.
          const attributeMatch = lastAttributeNameRegex.exec(s);
          if (attributeMatch === null) {
              // We're only in this branch if we don't have a attribute-like
              // preceding sequence. For comments, this guards against unusual
              // attribute values like <div foo="<!--${'bar'}">. Cases like
              // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
              // below.
              html += s + (isCommentBinding ? commentMarker : nodeMarker);
          }
          else {
              // For attributes we use just a marker sentinel, and also append a
              // $lit$ suffix to the name to opt-out of attribute-specific parsing
              // that IE and Edge do for style and certain SVG attributes.
              html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                  attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                  marker;
          }
      }
      html += this.strings[l];
      return html;
  }
  getTemplateElement() {
      const template = document.createElement('template');
      let value = this.getHTML();
      if (policy !== undefined) {
          // this is secure because `this.strings` is a TemplateStringsArray.
          // TODO: validate this when
          // https://github.com/tc39/proposal-array-is-template-object is
          // implemented.
          value = policy.createHTML(value);
      }
      template.innerHTML = value;
      return template;
  }
}
/**
* A TemplateResult for SVG fragments.
*
* This class wraps HTML in an `<svg>` tag in order to parse its contents in the
* SVG namespace, then modifies the template to remove the `<svg>` tag so that
* clones only container the original fragment.
*/
class SVGTemplateResult extends TemplateResult {
  getHTML() {
      return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
      const template = super.getTemplateElement();
      const content = template.content;
      const svgElement = content.firstChild;
      content.removeChild(svgElement);
      reparentNodes(content, svgElement.firstChild);
      return template;
  }
}

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
const isPrimitive = (value) => {
  return (value === null ||
      !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
  return Array.isArray(value) ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      !!(value && value[Symbol.iterator]);
};
/**
* Writes attribute values to the DOM for a group of AttributeParts bound to a
* single attribute. The value is only set once even if there are multiple parts
* for an attribute.
*/
class AttributeCommitter {
  constructor(element, name, strings) {
      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];
      for (let i = 0; i < strings.length - 1; i++) {
          this.parts[i] = this._createPart();
      }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */
  _createPart() {
      return new AttributePart(this);
  }
  _getValue() {
      const strings = this.strings;
      const l = strings.length - 1;
      const parts = this.parts;
      // If we're assigning an attribute via syntax like:
      //    attr="${foo}"  or  attr=${foo}
      // but not
      //    attr="${foo} ${bar}" or attr="${foo} baz"
      // then we don't want to coerce the attribute value into one long
      // string. Instead we want to just return the value itself directly,
      // so that sanitizeDOMValue can get the actual value rather than
      // String(value)
      // The exception is if v is an array, in which case we do want to smash
      // it together into a string without calling String() on the array.
      //
      // This also allows trusted values (when using TrustedTypes) being
      // assigned to DOM sinks without being stringified in the process.
      if (l === 1 && strings[0] === '' && strings[1] === '') {
          const v = parts[0].value;
          if (typeof v === 'symbol') {
              return String(v);
          }
          if (typeof v === 'string' || !isIterable(v)) {
              return v;
          }
      }
      let text = '';
      for (let i = 0; i < l; i++) {
          text += strings[i];
          const part = parts[i];
          if (part !== undefined) {
              const v = part.value;
              if (isPrimitive(v) || !isIterable(v)) {
                  text += typeof v === 'string' ? v : String(v);
              }
              else {
                  for (const t of v) {
                      text += typeof t === 'string' ? t : String(t);
                  }
              }
          }
      }
      text += strings[l];
      return text;
  }
  commit() {
      if (this.dirty) {
          this.dirty = false;
          this.element.setAttribute(this.name, this._getValue());
      }
  }
}
/**
* A Part that controls all or part of an attribute value.
*/
class AttributePart {
  constructor(committer) {
      this.value = undefined;
      this.committer = committer;
  }
  setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
          this.value = value;
          // If the value is a not a directive, dirty the committer so that it'll
          // call setAttribute. If the value is a directive, it'll dirty the
          // committer if it calls setValue().
          if (!isDirective(value)) {
              this.committer.dirty = true;
          }
      }
  }
  commit() {
      while (isDirective(this.value)) {
          const directive = this.value;
          this.value = noChange;
          directive(this);
      }
      if (this.value === noChange) {
          return;
      }
      this.committer.commit();
  }
}
/**
* A Part that controls a location within a Node tree. Like a Range, NodePart
* has start and end locations and can set and update the Nodes between those
* locations.
*
* NodeParts support several value types: primitives, Nodes, TemplateResults,
* as well as arrays and iterables of those types.
*/
class NodePart {
  constructor(options) {
      this.value = undefined;
      this.__pendingValue = undefined;
      this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(part) {
      part.__insert(this.startNode = createMarker());
      part.__insert(this.endNode = createMarker());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());
      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
  }
  setValue(value) {
      this.__pendingValue = value;
  }
  commit() {
      if (this.startNode.parentNode === null) {
          return;
      }
      while (isDirective(this.__pendingValue)) {
          const directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
      }
      const value = this.__pendingValue;
      if (value === noChange) {
          return;
      }
      if (isPrimitive(value)) {
          if (value !== this.value) {
              this.__commitText(value);
          }
      }
      else if (value instanceof TemplateResult) {
          this.__commitTemplateResult(value);
      }
      else if (value instanceof Node) {
          this.__commitNode(value);
      }
      else if (isIterable(value)) {
          this.__commitIterable(value);
      }
      else if (value === nothing) {
          this.value = nothing;
          this.clear();
      }
      else {
          // Fallback, will render the string representation
          this.__commitText(value);
      }
  }
  __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
  }
  __commitNode(value) {
      if (this.value === value) {
          return;
      }
      this.clear();
      this.__insert(value);
      this.value = value;
  }
  __commitText(value) {
      const node = this.startNode.nextSibling;
      value = value == null ? '' : value;
      // If `value` isn't already a string, we explicitly convert it here in case
      // it can't be implicitly converted - i.e. it's a symbol.
      const valueAsString = typeof value === 'string' ? value : String(value);
      if (node === this.endNode.previousSibling &&
          node.nodeType === 3 /* Node.TEXT_NODE */) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = valueAsString;
      }
      else {
          this.__commitNode(document.createTextNode(valueAsString));
      }
      this.value = value;
  }
  __commitTemplateResult(value) {
      const template = this.options.templateFactory(value);
      if (this.value instanceof TemplateInstance &&
          this.value.template === template) {
          this.value.update(value.values);
      }
      else {
          // Make sure we propagate the template processor from the TemplateResult
          // so that we use its syntax extension, etc. The template factory comes
          // from the render function options so that it can control template
          // caching and preprocessing.
          const instance = new TemplateInstance(template, value.processor, this.options);
          const fragment = instance._clone();
          instance.update(value.values);
          this.__commitNode(fragment);
          this.value = instance;
      }
  }
  __commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
          this.value = [];
          this.clear();
      }
      // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render
      const itemParts = this.value;
      let partIndex = 0;
      let itemPart;
      for (const item of value) {
          // Try to reuse an existing part
          itemPart = itemParts[partIndex];
          // If no existing part, create a new one
          if (itemPart === undefined) {
              itemPart = new NodePart(this.options);
              itemParts.push(itemPart);
              if (partIndex === 0) {
                  itemPart.appendIntoPart(this);
              }
              else {
                  itemPart.insertAfterPart(itemParts[partIndex - 1]);
              }
          }
          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
      }
      if (partIndex < itemParts.length) {
          // Truncate the parts array so _value reflects the current state
          itemParts.length = partIndex;
          this.clear(itemPart && itemPart.endNode);
      }
  }
  clear(startNode = this.startNode) {
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }
}
/**
* Implements a boolean attribute, roughly as defined in the HTML
* specification.
*
* If the value is truthy, then the attribute is present with a value of
* ''. If the value is falsey, the attribute is removed.
*/
class BooleanAttributePart {
  constructor(element, name, strings) {
      this.value = undefined;
      this.__pendingValue = undefined;
      if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
          throw new Error('Boolean attributes can only contain a single expression');
      }
      this.element = element;
      this.name = name;
      this.strings = strings;
  }
  setValue(value) {
      this.__pendingValue = value;
  }
  commit() {
      while (isDirective(this.__pendingValue)) {
          const directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
      }
      if (this.__pendingValue === noChange) {
          return;
      }
      const value = !!this.__pendingValue;
      if (this.value !== value) {
          if (value) {
              this.element.setAttribute(this.name, '');
          }
          else {
              this.element.removeAttribute(this.name);
          }
          this.value = value;
      }
      this.__pendingValue = noChange;
  }
}
/**
* Sets attribute values for PropertyParts, so that the value is only set once
* even if there are multiple parts for a property.
*
* If an expression controls the whole property value, then the value is simply
* assigned to the property under control. If there are string literals or
* multiple expressions, then the strings are expressions are interpolated into
* a string first.
*/
class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
      super(element, name, strings);
      this.single =
          (strings.length === 2 && strings[0] === '' && strings[1] === '');
  }
  _createPart() {
      return new PropertyPart(this);
  }
  _getValue() {
      if (this.single) {
          return this.parts[0].value;
      }
      return super._getValue();
  }
  commit() {
      if (this.dirty) {
          this.dirty = false;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.element[this.name] = this._getValue();
      }
  }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
  try {
      const options = {
          get capture() {
              eventOptionsSupported = true;
              return false;
          }
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.addEventListener('test', options, options);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.removeEventListener('test', options, options);
  }
  catch (_e) {
      // event options not supported
  }
})();
class EventPart {
  constructor(element, eventName, eventContext) {
      this.value = undefined;
      this.__pendingValue = undefined;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;
      this.__boundHandleEvent = (e) => this.handleEvent(e);
  }
  setValue(value) {
      this.__pendingValue = value;
  }
  commit() {
      while (isDirective(this.__pendingValue)) {
          const directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
      }
      if (this.__pendingValue === noChange) {
          return;
      }
      const newListener = this.__pendingValue;
      const oldListener = this.value;
      const shouldRemoveListener = newListener == null ||
          oldListener != null &&
              (newListener.capture !== oldListener.capture ||
                  newListener.once !== oldListener.once ||
                  newListener.passive !== oldListener.passive);
      const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
      if (shouldRemoveListener) {
          this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      if (shouldAddListener) {
          this.__options = getOptions(newListener);
          this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      this.value = newListener;
      this.__pendingValue = noChange;
  }
  handleEvent(event) {
      if (typeof this.value === 'function') {
          this.value.call(this.eventContext || this.element, event);
      }
      else {
          this.value.handleEvent(event);
      }
  }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
  (eventOptionsSupported ?
      { capture: o.capture, passive: o.passive, once: o.once } :
      o.capture);

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
/**
* Creates Parts when a template is instantiated.
*/
class DefaultTemplateProcessor {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(element, name, strings, options) {
      const prefix = name[0];
      if (prefix === '.') {
          const committer = new PropertyCommitter(element, name.slice(1), strings);
          return committer.parts;
      }
      if (prefix === '@') {
          return [new EventPart(element, name.slice(1), options.eventContext)];
      }
      if (prefix === '?') {
          return [new BooleanAttributePart(element, name.slice(1), strings)];
      }
      const committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */
  handleTextExpression(options) {
      return new NodePart(options);
  }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
/**
* The default TemplateFactory which caches Templates keyed on
* result.type and result.strings.
*/
function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);
  if (templateCache === undefined) {
      templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
  }
  let template = templateCache.stringsArray.get(result.strings);
  if (template !== undefined) {
      return template;
  }
  // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content
  const key = result.strings.join(marker);
  // Check if we already have a Template for this key
  template = templateCache.keyString.get(key);
  if (template === undefined) {
      // If we have not seen this key before, create a new Template
      template = new Template(result, result.getTemplateElement());
      // Cache the Template for this key
      templateCache.keyString.set(key, template);
  }
  // Cache all future queries for this TemplateStringsArray
  templateCache.stringsArray.set(result.strings, template);
  return template;
}
const templateCaches = new Map();

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
const parts = new WeakMap();
/**
* Renders a template result or other value to a container.
*
* To update a container with new values, reevaluate the template literal and
* call `render` with the new result.
*
* @param result Any value renderable by NodePart - typically a TemplateResult
*     created by evaluating a template tag like `html` or `svg`.
* @param container A DOM parent to render to. The entire contents are either
*     replaced, or efficiently updated if the same result type was previous
*     rendered there.
* @param options RenderOptions for the entire render tree rendered to this
*     container. Render options must *not* change between renders to the same
*     container, as those changes will not effect previously rendered DOM.
*/
const render$1 = (result, container, options) => {
  let part = parts.get(container);
  if (part === undefined) {
      removeNodes(container, container.firstChild);
      parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
      part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
* Interprets a template literal as an HTML template that can efficiently
* render to and update a container.
*/
const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
/**
* Interprets a template literal as an SVG template that can efficiently
* render to and update a container.
*/
const svg = (strings, ...values) => new SVGTemplateResult(strings, values, 'svg', defaultTemplateProcessor);

/**
* @license
* Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
// IE11 doesn't support classList on SVG elements, so we emulate it with a Set
class ClassList {
  constructor(element) {
      this.classes = new Set();
      this.changed = false;
      this.element = element;
      const classList = (element.getAttribute('class') || '').split(/\s+/);
      for (const cls of classList) {
          this.classes.add(cls);
      }
  }
  add(cls) {
      this.classes.add(cls);
      this.changed = true;
  }
  remove(cls) {
      this.classes.delete(cls);
      this.changed = true;
  }
  commit() {
      if (this.changed) {
          let classString = '';
          this.classes.forEach((cls) => classString += cls + ' ');
          this.element.setAttribute('class', classString);
      }
  }
}
/**
* Stores the ClassInfo object applied to a given AttributePart.
* Used to unset existing values when a new ClassInfo object is applied.
*/
const previousClassesCache = new WeakMap();
/**
* A directive that applies CSS classes. This must be used in the `class`
* attribute and must be the only part used in the attribute. It takes each
* property in the `classInfo` argument and adds the property name to the
* element's `class` if the property value is truthy; if the property value is
* falsey, the property name is removed from the element's `class`. For example
* `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
* @param classInfo {ClassInfo}
*/
const classMap = directive((classInfo) => (part) => {
  if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
      part.committer.name !== 'class' || part.committer.parts.length > 1) {
      throw new Error('The `classMap` directive must be used in the `class` attribute ' +
          'and must be the only part in the attribute.');
  }
  const { committer } = part;
  const { element } = committer;
  let previousClasses = previousClassesCache.get(part);
  if (previousClasses === undefined) {
      // Write static classes once
      // Use setAttribute() because className isn't a string on SVG elements
      element.setAttribute('class', committer.strings.join(' '));
      previousClassesCache.set(part, previousClasses = new Set());
  }
  const classList = (element.classList || new ClassList(element));
  // Remove old classes that no longer apply
  // We use forEach() instead of for-of so that re don't require down-level
  // iteration.
  previousClasses.forEach((name) => {
      if (!(name in classInfo)) {
          classList.remove(name);
          previousClasses.delete(name);
      }
  });
  // Add or remove classes based on their classMap value
  for (const name in classInfo) {
      const value = classInfo[name];
      if (value != previousClasses.has(name)) {
          // We explicitly want a loose truthy check of `value` because it seems
          // more convenient that '' and 0 are skipped.
          if (value) {
              classList.add(name);
              previousClasses.add(name);
          }
          else {
              classList.remove(name);
              previousClasses.delete(name);
          }
      }
  }
  if (typeof classList.commit === 'function') {
      classList.commit();
  }
});

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
* Removes the list of nodes from a Template safely. In addition to removing
* nodes from the Template, the Template part indices are updated to match
* the mutated Template DOM.
*
* As the template is walked the removal state is tracked and
* part indices are adjusted as needed.
*
* div
*   div#1 (remove) <-- start removing (removing node is div#1)
*     div
*       div#2 (remove)  <-- continue removing (removing node is still div#1)
*         div
* div <-- stop removing since previous sibling is the removing node (div#1,
* removed 4 nodes)
*/
function removeNodesFromTemplate(template, nodesToRemove) {
  const { element: { content }, parts } = template;
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let part = parts[partIndex];
  let nodeIndex = -1;
  let removeCount = 0;
  const nodesToRemoveInTemplate = [];
  let currentRemovingNode = null;
  while (walker.nextNode()) {
      nodeIndex++;
      const node = walker.currentNode;
      // End removal if stepped past the removing node
      if (node.previousSibling === currentRemovingNode) {
          currentRemovingNode = null;
      }
      // A node to remove was found in the template
      if (nodesToRemove.has(node)) {
          nodesToRemoveInTemplate.push(node);
          // Track node we're removing
          if (currentRemovingNode === null) {
              currentRemovingNode = node;
          }
      }
      // When removing, increment count by which to adjust subsequent part indices
      if (currentRemovingNode !== null) {
          removeCount++;
      }
      while (part !== undefined && part.index === nodeIndex) {
          // If part is in a removed node deactivate it by setting index to -1 or
          // adjust the index as needed.
          part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
          // go to the next active part.
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          part = parts[partIndex];
      }
  }
  nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
  let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
  const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
  while (walker.nextNode()) {
      count++;
  }
  return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
  for (let i = startIndex + 1; i < parts.length; i++) {
      const part = parts[i];
      if (isTemplatePartActive(part)) {
          return i;
      }
  }
  return -1;
};
/**
* Inserts the given node into the Template, optionally before the given
* refNode. In addition to inserting the node into the Template, the Template
* part indices are updated to match the mutated Template DOM.
*/
function insertNodeIntoTemplate(template, node, refNode = null) {
  const { element: { content }, parts } = template;
  // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.
  if (refNode === null || refNode === undefined) {
      content.appendChild(node);
      return;
  }
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let insertCount = 0;
  let walkerIndex = -1;
  while (walker.nextNode()) {
      walkerIndex++;
      const walkerNode = walker.currentNode;
      if (walkerNode === refNode) {
          insertCount = countNodes(node);
          refNode.parentNode.insertBefore(node, refNode);
      }
      while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
          // If we've inserted the node, simply adjust all subsequent parts
          if (insertCount > 0) {
              while (partIndex !== -1) {
                  parts[partIndex].index += insertCount;
                  partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
              }
              return;
          }
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      }
  }
}

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn(`Incompatible ShadyCSS version detected. ` +
      `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
      `@webcomponents/shadycss@1.3.1.`);
  compatibleShadyCSSVersion = false;
}
/**
* Template factory which scopes template DOM using ShadyCSS.
* @param scopeName {string}
*/
const shadyTemplateFactory = (scopeName) => (result) => {
  const cacheKey = getTemplateCacheKey(result.type, scopeName);
  let templateCache = templateCaches.get(cacheKey);
  if (templateCache === undefined) {
      templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
      };
      templateCaches.set(cacheKey, templateCache);
  }
  let template = templateCache.stringsArray.get(result.strings);
  if (template !== undefined) {
      return template;
  }
  const key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === undefined) {
      const element = result.getTemplateElement();
      if (compatibleShadyCSSVersion) {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }
      template = new Template(result, element);
      templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
* Removes all style elements from Templates for the given scopeName.
*/
const removeStylesFromLitTemplates = (scopeName) => {
  TEMPLATE_TYPES.forEach((type) => {
      const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
      if (templates !== undefined) {
          templates.keyString.forEach((template) => {
              const { element: { content } } = template;
              // IE 11 doesn't support the iterable param Set constructor
              const styles = new Set();
              Array.from(content.querySelectorAll('style')).forEach((s) => {
                  styles.add(s);
              });
              removeNodesFromTemplate(template, styles);
          });
      }
  });
};
const shadyRenderSet = new Set();
/**
* For the given scope name, ensures that ShadyCSS style scoping is performed.
* This is done just once per scope name so the fragment and template cannot
* be modified.
* (1) extracts styles from the rendered fragment and hands them to ShadyCSS
* to be scoped and appended to the document
* (2) removes style elements from all lit-html Templates for this scope name.
*
* Note, <style> elements can only be placed into templates for the
* initial rendering of the scope. If <style> elements are included in templates
* dynamically rendered to the scope (after the first scope render), they will
* not be scoped and the <style> will be left in the template and rendered
* output.
*/
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
  shadyRenderSet.add(scopeName);
  // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.
  const templateElement = !!template ? template.element : document.createElement('template');
  // Move styles out of rendered DOM and store.
  const styles = renderedDOM.querySelectorAll('style');
  const { length } = styles;
  // If there are no styles, skip unnecessary work
  if (length === 0) {
      // Ensure prepareTemplateStyles is called to support adding
      // styles via `prepareAdoptedCssText` since that requires that
      // `prepareTemplateStyles` is called.
      //
      // ShadyCSS will only update styles containing @apply in the template
      // given to `prepareTemplateStyles`. If no lit Template was given,
      // ShadyCSS will not be able to update uses of @apply in any relevant
      // template. However, this is not a problem because we only create the
      // template for the purpose of supporting `prepareAdoptedCssText`,
      // which doesn't support @apply at all.
      window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
      return;
  }
  const condensedStyle = document.createElement('style');
  // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.
  for (let i = 0; i < length; i++) {
      const style = styles[i];
      style.parentNode.removeChild(style);
      condensedStyle.textContent += style.textContent;
  }
  // Remove styles from nested templates in this scope.
  removeStylesFromLitTemplates(scopeName);
  // And then put the condensed style into the "root" template passed in as
  // `template`.
  const content = templateElement.content;
  if (!!template) {
      insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  }
  else {
      content.insertBefore(condensedStyle, content.firstChild);
  }
  // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).
  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  const style = content.querySelector('style');
  if (window.ShadyCSS.nativeShadow && style !== null) {
      // When in native Shadow DOM, ensure the style created by ShadyCSS is
      // included in initially rendered output (`renderedDOM`).
      renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  }
  else if (!!template) {
      // When no style is left in the template, parts will be broken as a
      // result. To fix this, we put back the style node ShadyCSS removed
      // and then tell lit to remove that node from the template.
      // There can be no style in the template in 2 cases (1) when Shady DOM
      // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
      // is in use ShadyCSS removes the style if it contains no content.
      // NOTE, ShadyCSS creates its own style so we can safely add/remove
      // `condensedStyle` here.
      content.insertBefore(condensedStyle, content.firstChild);
      const removes = new Set();
      removes.add(condensedStyle);
      removeNodesFromTemplate(template, removes);
  }
};
/**
* Extension to the standard `render` method which supports rendering
* to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
* and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
* or when the webcomponentsjs
* (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
*
* Adds a `scopeName` option which is used to scope element DOM and stylesheets
* when native ShadowDOM is unavailable. The `scopeName` will be added to
* the class attribute of all rendered DOM. In addition, any style elements will
* be automatically re-written with this `scopeName` selector and moved out
* of the rendered DOM and into the document `<head>`.
*
* It is common to use this render method in conjunction with a custom element
* which renders a shadowRoot. When this is done, typically the element's
* `localName` should be used as the `scopeName`.
*
* In addition to DOM scoping, ShadyCSS also supports a basic shim for css
* custom properties (needed only on older browsers like IE11) and a shim for
* a deprecated feature called `@apply` that supports applying a set of css
* custom properties to a given location.
*
* Usage considerations:
*
* * Part values in `<style>` elements are only applied the first time a given
* `scopeName` renders. Subsequent changes to parts in style elements will have
* no effect. Because of this, parts in style elements should only be used for
* values that will never change, for example parts that set scope-wide theme
* values or parts which render shared style elements.
*
* * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
* custom element's `constructor` is not supported. Instead rendering should
* either done asynchronously, for example at microtask timing (for example
* `Promise.resolve()`), or be deferred until the first time the element's
* `connectedCallback` runs.
*
* Usage considerations when using shimmed custom properties or `@apply`:
*
* * Whenever any dynamic changes are made which affect
* css custom properties, `ShadyCSS.styleElement(element)` must be called
* to update the element. There are two cases when this is needed:
* (1) the element is connected to a new parent, (2) a class is added to the
* element that causes it to match different custom properties.
* To address the first case when rendering a custom element, `styleElement`
* should be called in the element's `connectedCallback`.
*
* * Shimmed custom properties may only be defined either for an entire
* shadowRoot (for example, in a `:host` rule) or via a rule that directly
* matches an element with a shadowRoot. In other words, instead of flowing from
* parent to child as do native css custom properties, shimmed custom properties
* flow only from shadowRoots to nested shadowRoots.
*
* * When using `@apply` mixing css shorthand property names with
* non-shorthand names (for example `border` and `border-width`) is not
* supported.
*/
const render = (result, container, options) => {
  if (!options || typeof options !== 'object' || !options.scopeName) {
      throw new Error('The `scopeName` option is required.');
  }
  const scopeName = options.scopeName;
  const hasRendered = parts.has(container);
  const needsScoping = compatibleShadyCSSVersion &&
      container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
      !!container.host;
  // Handle first render to a scope specially...
  const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
  // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.
  const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  render$1(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
  // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.
  if (firstScopeRender) {
      const part = parts.get(renderContainer);
      parts.delete(renderContainer);
      // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
      // that should apply to `renderContainer` even if the rendered value is
      // not a TemplateInstance. However, it will only insert scoped styles
      // into the document if `prepareTemplateStyles` has already been called
      // for the given scope name.
      const template = part.value instanceof TemplateInstance ?
          part.value.template :
          undefined;
      prepareTemplateStyles(scopeName, renderContainer, template);
      removeNodes(container, container.firstChild);
      container.appendChild(renderContainer);
      parts.set(container, part);
  }
  // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.
  if (!hasRendered && needsScoping) {
      window.ShadyCSS.styleElement(container.host);
  }
};

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
var _a;
/**
* Use this module if you want to create your own base class extending
* [[UpdatingElement]].
* @packageDocumentation
*/
/*
* When using Closure Compiler, JSCompiler_renameProperty(property, object) is
* replaced at compile time by the munged name for object[property]. We cannot
* alias this function, so we have to use a small shim that has the same
* behavior when not compiling.
*/
window.JSCompiler_renameProperty =
  (prop, _obj) => prop;
const defaultConverter = {
  toAttribute(value, type) {
      switch (type) {
          case Boolean:
              return value ? '' : null;
          case Object:
          case Array:
              // if the value is `null` or `undefined` pass this through
              // to allow removing/no change behavior.
              return value == null ? value : JSON.stringify(value);
      }
      return value;
  },
  fromAttribute(value, type) {
      switch (type) {
          case Boolean:
              return value !== null;
          case Number:
              return value === null ? null : Number(value);
          case Object:
          case Array:
              // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
              return JSON.parse(value);
      }
      return value;
  }
};
/**
* Change function that returns true if `value` is different from `oldValue`.
* This method is used as the default for a property's `hasChanged` function.
*/
const notEqual = (value, old) => {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
* The Closure JS Compiler doesn't currently have good support for static
* property semantics where "this" is dynamic (e.g.
* https://github.com/google/closure-compiler/issues/3177 and others) so we use
* this hack to bypass any rewriting by the compiler.
*/
const finalized = 'finalized';
/**
* Base element class which manages element properties and attributes. When
* properties change, the `update` method is asynchronously called. This method
* should be supplied by subclassers to render updates as desired.
* @noInheritDoc
*/
class UpdatingElement extends HTMLElement {
  constructor() {
      super();
      this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */
  static get observedAttributes() {
      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      const attributes = [];
      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this._classProperties.forEach((v, p) => {
          const attr = this._attributeNameForProperty(p, v);
          if (attr !== undefined) {
              this._attributeToPropertyMap.set(attr, p);
              attributes.push(attr);
          }
      });
      return attributes;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */
  /** @nocollapse */
  static _ensureClassProperties() {
      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
          this._classProperties = new Map();
          // NOTE: Workaround IE11 not supporting Map constructor argument.
          const superProperties = Object.getPrototypeOf(this)._classProperties;
          if (superProperties !== undefined) {
              superProperties.forEach((v, k) => this._classProperties.set(k, v));
          }
      }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a PropertyDeclaration for the property with the given options.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   *
   * @nocollapse
   */
  static createProperty(name, options = defaultPropertyDeclaration) {
      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();
      this._classProperties.set(name, options);
      // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it
      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
          return;
      }
      const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== undefined) {
          Object.defineProperty(this.prototype, name, descriptor);
      }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   *   class MyElement extends LitElement {
   *     static getPropertyDescriptor(name, key, options) {
   *       const defaultDescriptor =
   *           super.getPropertyDescriptor(name, key, options);
   *       const setter = defaultDescriptor.set;
   *       return {
   *         get: defaultDescriptor.get,
   *         set(value) {
   *           setter.call(this, value);
   *           // custom action.
   *         },
   *         configurable: true,
   *         enumerable: true
   *       }
   *     }
   *   }
   *
   * @nocollapse
   */
  static getPropertyDescriptor(name, key, options) {
      return {
          // tslint:disable-next-line:no-any no symbol in index
          get() {
              return this[key];
          },
          set(value) {
              const oldValue = this[name];
              this[key] = value;
              this
                  .requestUpdateInternal(name, oldValue, options);
          },
          configurable: true,
          enumerable: true
      };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a PropertyDeclaration via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override `createProperty`.
   *
   * @nocollapse
   * @final
   */
  static getPropertyOptions(name) {
      return this._classProperties && this._classProperties.get(name) ||
          defaultPropertyDeclaration;
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */
  static finalize() {
      // finalize any superclasses
      const superCtor = Object.getPrototypeOf(this);
      if (!superCtor.hasOwnProperty(finalized)) {
          superCtor.finalize();
      }
      this[finalized] = true;
      this._ensureClassProperties();
      // initialize Map populated in observedAttributes
      this._attributeToPropertyMap = new Map();
      // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.
      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
          const props = this.properties;
          // support symbols in properties (IE11 does not support this)
          const propKeys = [
              ...Object.getOwnPropertyNames(props),
              ...(typeof Object.getOwnPropertySymbols === 'function') ?
                  Object.getOwnPropertySymbols(props) :
                  []
          ];
          // This for/of is ok because propKeys is an array
          for (const p of propKeys) {
              // note, use of `any` is due to TypeSript lack of support for symbol in
              // index types
              // tslint:disable-next-line:no-any no symbol in index
              this.createProperty(p, props[p]);
          }
      }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static _attributeNameForProperty(name, options) {
      const attribute = options.attribute;
      return attribute === false ?
          undefined :
          (typeof attribute === 'string' ?
              attribute :
              (typeof name === 'string' ? name.toLowerCase() : undefined));
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */
  static _valueHasChanged(value, old, hasChanged = notEqual) {
      return hasChanged(value, old);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */
  static _propertyValueFromAttribute(value, options) {
      const type = options.type;
      const converter = options.converter || defaultConverter;
      const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
      return fromAttribute ? fromAttribute(value, type) : value;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */
  static _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
          return;
      }
      const type = options.type;
      const converter = options.converter;
      const toAttribute = converter && converter.toAttribute ||
          defaultConverter.toAttribute;
      return toAttribute(value, type);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */
  initialize() {
      this._updateState = 0;
      this._updatePromise =
          new Promise((res) => this._enableUpdatingResolver = res);
      this._changedProperties = new Map();
      this._saveInstanceProperties();
      // ensures first update will be caught by an early access of
      // `updateComplete`
      this.requestUpdateInternal();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  _saveInstanceProperties() {
      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor
          ._classProperties.forEach((_v, p) => {
          if (this.hasOwnProperty(p)) {
              const value = this[p];
              delete this[p];
              if (!this._instanceProperties) {
                  this._instanceProperties = new Map();
              }
              this._instanceProperties.set(p, value);
          }
      });
  }
  /**
   * Applies previously saved instance properties.
   */
  _applyInstanceProperties() {
      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach((v, p) => this[p] = v);
      this._instanceProperties = undefined;
  }
  connectedCallback() {
      // Ensure first connection completes an update. Updates cannot complete
      // before connection.
      this.enableUpdating();
  }
  enableUpdating() {
      if (this._enableUpdatingResolver !== undefined) {
          this._enableUpdatingResolver();
          this._enableUpdatingResolver = undefined;
      }
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */
  disconnectedCallback() {
  }
  /**
   * Synchronizes property values when attributes change.
   */
  attributeChangedCallback(name, old, value) {
      if (old !== value) {
          this._attributeToProperty(name, value);
      }
  }
  _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
      const ctor = this.constructor;
      const attr = ctor._attributeNameForProperty(name, options);
      if (attr !== undefined) {
          const attrValue = ctor._propertyValueToAttribute(value, options);
          // an undefined value does not change the attribute.
          if (attrValue === undefined) {
              return;
          }
          // Track if the property is being reflected to avoid
          // setting the property again via `attributeChangedCallback`. Note:
          // 1. this takes advantage of the fact that the callback is synchronous.
          // 2. will behave incorrectly if multiple attributes are in the reaction
          // stack at time of calling. However, since we process attributes
          // in `update` this should not be possible (or an extreme corner case
          // that we'd like to discover).
          // mark state reflecting
          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
          if (attrValue == null) {
              this.removeAttribute(attr);
          }
          else {
              this.setAttribute(attr, attrValue);
          }
          // mark state not reflecting
          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
  }
  _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
          return;
      }
      const ctor = this.constructor;
      // Note, hint this as an `AttributeMap` so closure clearly understands
      // the type; it has issues with tracking types through statics
      // tslint:disable-next-line:no-unnecessary-type-assertion
      const propName = ctor._attributeToPropertyMap.get(name);
      if (propName !== undefined) {
          const options = ctor.getPropertyOptions(propName);
          // mark state reflecting
          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
          this[propName] =
              // tslint:disable-next-line:no-any
              ctor._propertyValueFromAttribute(value, options);
          // mark state not reflecting
          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
  }
  /**
   * This protected version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */
  requestUpdateInternal(name, oldValue, options) {
      let shouldRequestUpdate = true;
      // If we have a property key, perform property update steps.
      if (name !== undefined) {
          const ctor = this.constructor;
          options = options || ctor.getPropertyOptions(name);
          if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
              if (!this._changedProperties.has(name)) {
                  this._changedProperties.set(name, oldValue);
              }
              // Add to reflecting properties set.
              // Note, it's important that every change has a chance to add the
              // property to `_reflectingProperties`. This ensures setting
              // attribute + property reflects correctly.
              if (options.reflect === true &&
                  !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                  if (this._reflectingProperties === undefined) {
                      this._reflectingProperties = new Map();
                  }
                  this._reflectingProperties.set(name, options);
              }
          }
          else {
              // Abort the request if the property should not be considered changed.
              shouldRequestUpdate = false;
          }
      }
      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
          this._updatePromise = this._enqueueUpdate();
      }
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */
  requestUpdate(name, oldValue) {
      this.requestUpdateInternal(name, oldValue);
      return this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async _enqueueUpdate() {
      this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
      try {
          // Ensure any previous update has resolved before updating.
          // This `await` also ensures that property changes are batched.
          await this._updatePromise;
      }
      catch (e) {
          // Ignore any previous errors. We only care that the previous cycle is
          // done. Any error should have been handled in the previous update.
      }
      const result = this.performUpdate();
      // If `performUpdate` returns a Promise, we await it. This is done to
      // enable coordinating updates with a scheduler. Note, the result is
      // checked to avoid delaying an additional microtask unless we need to.
      if (result != null) {
          await result;
      }
      return !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
      return (this._updateState & STATE_UPDATE_REQUESTED);
  }
  get hasUpdated() {
      return (this._updateState & STATE_HAS_UPDATED);
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */
  performUpdate() {
      // Abort any update if one is not pending when this is called.
      // This can happen if `performUpdate` is called early to "flush"
      // the update.
      if (!this._hasRequestedUpdate) {
          return;
      }
      // Mixin instance properties once, if they exist.
      if (this._instanceProperties) {
          this._applyInstanceProperties();
      }
      let shouldUpdate = false;
      const changedProperties = this._changedProperties;
      try {
          shouldUpdate = this.shouldUpdate(changedProperties);
          if (shouldUpdate) {
              this.update(changedProperties);
          }
          else {
              this._markUpdated();
          }
      }
      catch (e) {
          // Prevent `firstUpdated` and `updated` from running when there's an
          // update exception.
          shouldUpdate = false;
          // Ensure element can accept additional updates after an exception.
          this._markUpdated();
          throw e;
      }
      if (shouldUpdate) {
          if (!(this._updateState & STATE_HAS_UPDATED)) {
              this._updateState = this._updateState | STATE_HAS_UPDATED;
              this.firstUpdated(changedProperties);
          }
          this.updated(changedProperties);
      }
  }
  _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `_getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super._getUpdateComplete()`, then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */
  get updateComplete() {
      return this._getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async _getUpdateComplete() {
   *       await super._getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   * @deprecated Override `getUpdateComplete()` instead for forward
   *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
   */
  _getUpdateComplete() {
      return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   *   class MyElement extends LitElement {
   *     async getUpdateComplete() {
   *       await super.getUpdateComplete();
   *       await this._myChild.updateComplete;
   *     }
   *   }
   */
  getUpdateComplete() {
      return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  shouldUpdate(_changedProperties) {
      return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  update(_changedProperties) {
      if (this._reflectingProperties !== undefined &&
          this._reflectingProperties.size > 0) {
          // Use forEach so this works even if for/of loops are compiled to for
          // loops expecting arrays
          this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
          this._reflectingProperties = undefined;
      }
      this._markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  updated(_changedProperties) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   */
  firstUpdated(_changedProperties) {
  }
}
_a = finalized;
/**
* Marks class as having finished creating properties.
*/
UpdatingElement[_a] = true;

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
const legacyCustomElement = (tagName, clazz) => {
  window.customElements.define(tagName, clazz);
  // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any
  return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
  const { kind, elements } = descriptor;
  return {
      kind,
      elements,
      // This callback is called once the class is otherwise fully defined
      finisher(clazz) {
          window.customElements.define(tagName, clazz);
      }
  };
};
/**
* Class decorator factory that defines the decorated class as a custom element.
*
* ```
* @customElement('my-element')
* class MyElement {
*   render() {
*     return html``;
*   }
* }
* ```
* @category Decorator
* @param tagName The name of the custom element to define.
*/
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
  legacyCustomElement(tagName, classOrDescriptor) :
  standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element) => {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor &&
      !('value' in element.descriptor)) {
      return Object.assign(Object.assign({}, element), { finisher(clazz) {
              clazz.createProperty(element.key, options);
          } });
  }
  else {
      // createProperty() takes care of defining the property, but we still
      // must return some kind of descriptor, so return a descriptor for an
      // unused prototype field. The finisher calls createProperty().
      return {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          // When @babel/plugin-proposal-decorators implements initializers,
          // do this instead of the initializer below. See:
          // https://github.com/babel/babel/issues/9260 extras: [
          //   {
          //     kind: 'initializer',
          //     placement: 'own',
          //     initializer: descriptor.initializer,
          //   }
          // ],
          initializer() {
              if (typeof element.initializer === 'function') {
                  this[element.key] = element.initializer.call(this);
              }
          },
          finisher(clazz) {
              clazz.createProperty(element.key, options);
          }
      };
  }
};
const legacyProperty = (options, proto, name) => {
  proto.constructor
      .createProperty(name, options);
};
/**
* A property decorator which creates a LitElement property which reflects a
* corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
* supplied to configure property features.
*
* This decorator should only be used for public fields. Private or protected
* fields should use the [[`internalProperty`]] decorator.
*
* @example
* ```ts
* class MyElement {
*   @property({ type: Boolean })
*   clicked = false;
* }
* ```
* @category Decorator
* @ExportDecoratedItems
*/
function property(options) {
  // tslint:disable-next-line:no-any decorator
  return (protoOrDescriptor, name) => (name !== undefined) ?
      legacyProperty(options, protoOrDescriptor, name) :
      standardProperty(options, protoOrDescriptor);
}
/**
* A property decorator that converts a class property into a getter that
* executes a querySelector on the element's renderRoot.
*
* @param selector A DOMString containing one or more selectors to match.
* @param cache An optional boolean which when true performs the DOM query only
* once and caches the result.
*
* See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
*
* @example
*
* ```ts
* class MyElement {
*   @query('#first')
*   first;
*
*   render() {
*     return html`
*       <div id="first"></div>
*       <div id="second"></div>
*     `;
*   }
* }
* ```
* @category Decorator
*/
function query(selector, cache) {
  return (protoOrDescriptor,
  // tslint:disable-next-line:no-any decorator
  name) => {
      const descriptor = {
          get() {
              return this.renderRoot.querySelector(selector);
          },
          enumerable: true,
          configurable: true,
      };
      if (cache) {
          const prop = name !== undefined ? name : protoOrDescriptor.key;
          const key = typeof prop === 'symbol' ? Symbol() : `__${prop}`;
          descriptor.get = function () {
              if (this[key] === undefined) {
                  (this[key] =
                      this.renderRoot.querySelector(selector));
              }
              return this[key];
          };
      }
      return (name !== undefined) ?
          legacyQuery(descriptor, protoOrDescriptor, name) :
          standardQuery(descriptor, protoOrDescriptor);
  };
}
const legacyQuery = (descriptor, proto, name) => {
  Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
  kind: 'method',
  placement: 'prototype',
  key: element.key,
  descriptor,
});

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
* Whether the current browser supports `adoptedStyleSheets`.
*/
const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
  (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
  ('adoptedStyleSheets' in Document.prototype) &&
  ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
  constructor(cssText, safeToken) {
      if (safeToken !== constructionToken) {
          throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
      }
      this.cssText = cssText;
  }
  // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.
  get styleSheet() {
      if (this._styleSheet === undefined) {
          // Note, if `supportsAdoptingStyleSheets` is true then we assume
          // CSSStyleSheet is constructable.
          if (supportsAdoptingStyleSheets) {
              this._styleSheet = new CSSStyleSheet();
              this._styleSheet.replaceSync(this.cssText);
          }
          else {
              this._styleSheet = null;
          }
      }
      return this._styleSheet;
  }
  toString() {
      return this.cssText;
  }
}
/**
* Wrap a value for interpolation in a [[`css`]] tagged template literal.
*
* This is unsafe because untrusted CSS text can be used to phone home
* or exfiltrate data to an attacker controlled site. Take care to only use
* this with trusted input.
*/
const unsafeCSS = (value) => {
  return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
  if (value instanceof CSSResult) {
      return value.cssText;
  }
  else if (typeof value === 'number') {
      return value;
  }
  else {
      throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
          take care to ensure page security.`);
  }
};
/**
* Template tag which which can be used with LitElement's [[LitElement.styles |
* `styles`]] property to set element styles. For security reasons, only literal
* string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
* may be used inside a template string part.
*/
const css = (strings, ...values) => {
  const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, constructionToken);
};

/**
* @license
* Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
  .push('2.5.1');
/**
* Sentinal value used to avoid calling lit-html's render function when
* subclasses do not implement `render`
*/
const renderNotImplemented = {};
/**
* Base element class that manages element properties and attributes, and
* renders a lit-html template.
*
* To define a component, subclass `LitElement` and implement a
* `render` method to provide the component's template. Define properties
* using the [[`properties`]] property or the [[`property`]] decorator.
*/
class LitElement extends UpdatingElement {
  /**
   * Return the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * @nocollapse
   */
  static getStyles() {
      return this.styles;
  }
  /** @nocollapse */
  static _getUniqueStyles() {
      // Only gather styles once per class
      if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
          return;
      }
      // Take care not to call `this.getStyles()` multiple times since this
      // generates new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.
      const userStyles = this.getStyles();
      if (Array.isArray(userStyles)) {
          // De-duplicate styles preserving the _last_ instance in the set.
          // This is a performance optimization to avoid duplicated styles that can
          // occur especially when composing via subclassing.
          // The last item is kept to try to preserve the cascade order with the
          // assumption that it's most important that last added styles override
          // previous styles.
          const addStyles = (styles, set) => styles.reduceRight((set, s) =>
          // Note: On IE set.add() does not return the set
          Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
          // Array.from does not work on Set in IE, otherwise return
          // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
          const set = addStyles(userStyles, new Set());
          const styles = [];
          set.forEach((v) => styles.unshift(v));
          this._styles = styles;
      }
      else {
          this._styles = userStyles === undefined ? [] : [userStyles];
      }
      // Ensure that there are no invalid CSSStyleSheet instances here. They are
      // invalid in two conditions.
      // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
      //     this is impossible to check except via .replaceSync or use
      // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
      //     false)
      this._styles = this._styles.map((s) => {
          if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
              // Flatten the cssText from the passed constructible stylesheet (or
              // undetectable non-constructible stylesheet). The user might have
              // expected to update their stylesheets over time, but the alternative
              // is a crash.
              const cssText = Array.prototype.slice.call(s.cssRules)
                  .reduce((css, rule) => css + rule.cssText, '');
              return unsafeCSS(cssText);
          }
          return s;
      });
  }
  /**
   * Performs element initialization. By default this calls
   * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
   * captures any pre-set values for registered properties.
   */
  initialize() {
      super.initialize();
      this.constructor._getUniqueStyles();
      this.renderRoot = this.createRenderRoot();
      // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.
      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
          this.adoptStyles();
      }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */
  createRenderRoot() {
      return this.attachShadow(this.constructor.shadowRootOptions);
  }
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */
  adoptStyles() {
      const styles = this.constructor._styles;
      if (styles.length === 0) {
          return;
      }
      // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering
      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
          window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
      }
      else if (supportsAdoptingStyleSheets) {
          this.renderRoot.adoptedStyleSheets =
              styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
      }
      else {
          // This must be done after rendering so the actual style insertion is done
          // in `update`.
          this._needsShimAdoptedStyleSheets = true;
      }
  }
  connectedCallback() {
      super.connectedCallback();
      // Note, first update/render handles styleElement so we only call this if
      // connected after first update.
      if (this.hasUpdated && window.ShadyCSS !== undefined) {
          window.ShadyCSS.styleElement(this);
      }
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param _changedProperties Map of changed properties with old values
   */
  update(changedProperties) {
      // Setting properties in `render` should not trigger an update. Since
      // updates are allowed after super.update, it's important to call `render`
      // before that.
      const templateResult = this.render();
      super.update(changedProperties);
      // If render is not implemented by the component, don't call lit-html render
      if (templateResult !== renderNotImplemented) {
          this.constructor
              .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
      }
      // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.
      if (this._needsShimAdoptedStyleSheets) {
          this._needsShimAdoptedStyleSheets = false;
          this.constructor._styles.forEach((s) => {
              const style = document.createElement('style');
              style.textContent = s.cssText;
              this.renderRoot.appendChild(style);
          });
      }
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `NodePart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   */
  render() {
      return renderNotImplemented;
  }
}
/**
* Ensure this class is marked as `finalized` as an optimization ensuring
* it will not needlessly try to `finalize`.
*
* Note this property name is a string to prevent breaking Closure JS Compiler
* optimizations. See updating-element.ts for more information.
*/
LitElement['finalized'] = true;
/**
* Reference to the underlying library method used to render the element's
* DOM. By default, points to the `render` method from lit-html's shady-render
* module.
*
* **Most users will never need to touch this property.**
*
* This  property should not be confused with the `render` instance method,
* which should be overridden to define a template for the element.
*
* Advanced users creating a new base class based on LitElement can override
* this property to point to a custom render method with a signature that
* matches [shady-render's `render`
* method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
*
* @nocollapse
*/
LitElement.render = render;
/** @nocollapse */
LitElement.shadowRootOptions = { mode: 'open' };

/**
* @license
*
* Copyright IBM Corp. 2019
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
const {
prefix: prefix$d
} = settings_1;
/**
* A selector selecting tabbable nodes.
* Borrowed from `carbon-angular`. tabbable === focusable.
*/

const selectorTabbable = `
a[href], area[href], input:not([disabled]):not([tabindex='-1']),
button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
textarea:not([disabled]):not([tabindex='-1']),
iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true],
${prefix$d}-accordion-item,
${prefix$d}-btn,
${prefix$d}-breadcrumb-link,
${prefix$d}-checkbox,
${prefix$d}-code-snippet,
${prefix$d}-combo-box,
${prefix$d}-content-switcher-item,
${prefix$d}-copy-button,
${prefix$d}-table-header-row,
${prefix$d}-table-row,
${prefix$d}-table-toolbar-search,
${prefix$d}-date-picker-input,
${prefix$d}-dropdown,
${prefix$d}-input,
${prefix$d}-link,
${prefix$d}-number-input,
${prefix$d}-modal,
${prefix$d}-modal-close-button,
${prefix$d}-multi-select,
${prefix$d}-inline-notification,
${prefix$d}-toast-notification,
${prefix$d}-overflow-menu,
${prefix$d}-overflow-menu-item,
${prefix$d}-page-sizes-select,
${prefix$d}-pages-select,
${prefix$d}-progress-step,
${prefix$d}-radio-button,
${prefix$d}-search,
${prefix$d}-slider,
${prefix$d}-slider-input,
${prefix$d}-structured-list,
${prefix$d}-tab,
${prefix$d}-filter-tag,
${prefix$d}-textarea,
${prefix$d}-clickable-tile,
${prefix$d}-expandable-tile,
${prefix$d}-radio-tile,
${prefix$d}-selectable-tile,
${prefix$d}-toggle,
${prefix$d}-tooltip,
${prefix$d}-tooltip-definition,
${prefix$d}-tooltip-icon,
${prefix$d}-header-menu,
${prefix$d}-header-menu-button,
${prefix$d}-header-menu-item,
${prefix$d}-header-name,
${prefix$d}-header-nav-item,
${prefix$d}-side-nav-link,
${prefix$d}-side-nav-menu,
${prefix$d}-side-nav-menu-item
`; // Because we're going to have a bunch of exports

/**
* @license
*
* Copyright IBM Corp. 2019
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @param Base The base class.
* @returns A mix-in implementing `.focus()` method that focuses on the first focusable element in the shadow DOM.
*/

const FocusMixin = Base => class extends Base {
/**
 * Focuses on the first focusable element in the shadow DOM.
 */
focus() {
  // @ts-ignore: Until `delegatesFocus` is added to `ShadowRoot` definition
  if (this.shadowRoot.delegatesFocus) {
    super.focus();
  } else {
    const delegateTarget = this.shadowRoot.querySelector(selectorTabbable) || this.querySelector(selectorTabbable);

    if (delegateTarget) {
      delegateTarget.focus();
    } else {
      super.focus();
    }
  }
}

};

/**
* @license
*
* Copyright IBM Corp. 2019, 2020
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
var styles$2 = css([
'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::after,blockquote::before,q::after,q::before{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:\'IBM Plex Sans\',\'Helvetica Neue\',Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:\'IBM Plex Mono\',Menlo,\'DejaVu Sans Mono\',\'Bitstream Vera Sans Mono\',Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);line-height:var(--cds-productive-heading-06-line-height,1.199);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);line-height:var(--cds-productive-heading-05-line-height,1.25);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);line-height:var(--cds-productive-heading-04-line-height,1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);line-height:var(--cds-productive-heading-03-line-height,1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);line-height:var(--cds-body-long-02-line-height,1.5);letter-spacing:var(--cds-body-long-02-letter-spacing,0)}a{color:#0f62fe}em{font-style:italic}.bx--assistive-text,.bx--visually-hidden{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:-1px;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}.bx--body{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);background-color:var(--cds-ui-background,#fff);color:var(--cds-text-01,#161616);line-height:1}.bx--body *,.bx--body ::after,.bx--body ::before{box-sizing:inherit}@-webkit-keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}@keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}.bx--text-truncate--end{display:inline-block;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--text-truncate--front{display:inline-block;overflow:hidden;width:100%;direction:rtl;text-overflow:ellipsis;white-space:nowrap}.bx--side-nav,:host(bx-side-nav){position:fixed;z-index:8000;top:0;bottom:0;left:0;overflow:hidden;width:3rem;max-width:16rem;background-color:#fff;color:#525252;transition:width .11s cubic-bezier(.2,0,1,.9);will-change:width}.bx--side-nav--ux,:host(bx-side-nav){top:var(--cds-spacing-09,3rem);width:16rem}@media (max-width:65.98rem){.bx--side-nav--ux,:host(bx-side-nav){width:0}}.bx--side-nav--rail{width:3rem}.bx--side-nav--hidden{width:0}.bx--side-nav--expanded,.bx--side-nav--rail:not(.bx--side-nav--fixed):hover:host(bx-side-nav),.bx--side-nav.bx--side-nav--rail:not(.bx--side-nav--fixed):hover,:host(bx-side-nav[collapse-mode][expanded]),:host(bx-side-nav[expanded]){width:16rem}.bx--side-nav__overlay{position:fixed;top:3rem;left:0;width:0;height:0;background-color:transparent;opacity:0;transition:opacity 240ms cubic-bezier(.2,0,.38,.9),background-color 240ms cubic-bezier(.2,0,.38,.9)}@media (max-width:65.98rem){.bx--side-nav__overlay-active{width:100vw;height:100vh;background-color:var(--cds-overlay-01,rgba(22,22,22,.5));opacity:1;transition:opacity 240ms cubic-bezier(.2,0,.38,.9),background-color 240ms cubic-bezier(.2,0,.38,.9)}}.bx--header~.bx--side-nav,.bx--header~:host(bx-side-nav){top:3rem;height:calc(100% - 48px)}.bx--side-nav--fixed{width:16rem}.bx--side-nav--collapsed{width:16rem;-webkit-transform:translateX(-16rem);transform:translateX(-16rem)}.bx--side-nav__navigation,:host(bx-side-nav){display:flex;height:100%;flex-direction:column}.bx--side-nav__header{display:flex;width:100%;max-width:100%;height:3rem;border-bottom:1px solid #393939}.bx--side-nav--expanded .bx--side-nav__header,.bx--side-nav--fixed .bx--side-nav__header,.bx--side-nav:hover .bx--side-nav__header,:host(bx-side-nav[expanded]) .bx--side-nav__header,:hover:host(bx-side-nav) .bx--side-nav__header{height:auto}.bx--side-nav--ux .bx--side-nav__header,:host(bx-side-nav) .bx--side-nav__header{height:auto}.bx--side-nav__details{display:flex;min-width:0;flex:1;flex-direction:column;padding-right:1rem;opacity:0;visibility:hidden}.bx--side-nav--expanded .bx--side-nav__details,.bx--side-nav--fixed .bx--side-nav__details,.bx--side-nav:hover .bx--side-nav__details,:host(bx-side-nav[expanded]) .bx--side-nav__details,:hover:host(bx-side-nav) .bx--side-nav__details{visibility:inherit;opacity:1}.bx--side-nav--ux .bx--side-nav__details,:host(bx-side-nav) .bx--side-nav__details{opacity:1;visibility:inherit}.bx--side-nav__title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1rem;font-size:.875rem;font-weight:600;letter-spacing:.1px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bx--side-nav__select,.bx--side-nav__title{padding-left:.5rem}.bx--side-nav__switcher{position:relative;display:flex;align-items:center;justify-content:space-between}.bx--side-nav__switcher-chevron{position:absolute;top:0;right:.5rem;bottom:0;display:flex;align-items:center;fill:#525252}.bx--side-nav__select{outline:2px solid transparent;outline-offset:-2px;min-width:0;height:2rem;flex:1 1 0%;padding-right:2rem;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#161616;border-radius:0;color:#f4f4f4;cursor:pointer;font-size:.75rem;transition:outline 110ms}.bx--side-nav__select:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--side-nav__select:focus{outline-style:dotted}}.bx--side-nav__footer{width:100%;flex:0 0 3rem;background-color:#fff}.bx--side-nav__toggle{outline:2px solid transparent;outline-offset:-2px;box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;width:100%;height:100%;padding-left:1rem;text-align:left;transition:outline 110ms}.bx--side-nav__toggle *,.bx--side-nav__toggle ::after,.bx--side-nav__toggle ::before{box-sizing:inherit}.bx--side-nav__toggle::-moz-focus-inner{border:0}.bx--side-nav__toggle:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--side-nav__toggle:focus{outline-style:dotted}}.bx--side-nav__items,:host(bx-side-nav-items){overflow:hidden;flex:1 1 0%;padding:1rem 0 0}.bx--side-nav--expanded .bx--side-nav__items,.bx--side-nav--expanded :host(bx-side-nav-items),.bx--side-nav--fixed .bx--side-nav__items,.bx--side-nav--fixed :host(bx-side-nav-items),.bx--side-nav:hover .bx--side-nav__items,.bx--side-nav:hover :host(bx-side-nav-items),:host(bx-side-nav[expanded]) .bx--side-nav__items,:host(bx-side-nav[expanded]) :host(bx-side-nav-items),:hover:host(bx-side-nav) .bx--side-nav__items,:hover:host(bx-side-nav) :host(bx-side-nav-items){overflow-y:auto}.bx--side-nav--ux .bx--side-nav__items,.bx--side-nav--ux :host(bx-side-nav-items),:host(bx-side-nav) .bx--side-nav__items,:host(bx-side-nav) :host(bx-side-nav-items){overflow-y:auto}.bx--side-nav__item,:host(bx-side-nav-link),:host(bx-side-nav-menu){overflow:hidden;width:auto;height:auto}.bx--side-nav--ux .bx--side-nav__item,.bx--side-nav--ux :host(bx-side-nav-link),.bx--side-nav--ux :host(bx-side-nav-menu),:host(bx-side-nav) .bx--side-nav__item,:host(bx-side-nav) :host(bx-side-nav-link),:host(bx-side-nav) :host(bx-side-nav-menu){width:auto;height:auto}.bx--side-nav .bx--header__menu-title[aria-expanded=true]:hover,.bx--side-nav a.bx--header__menu-item:hover,.bx--side-nav__item:not(.bx--side-nav__item--active):hover .bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__submenu:hover,.bx--side-nav__item:not(.bx--side-nav__item--active):hover :not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__submenu:hover,.bx--side-nav__item:not(.bx--side-nav__item--active):hover :not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__submenu:hover,.bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__link:hover,.bx--side-nav__menu a.bx--side-nav__link:not(.bx--side-nav__link--current):not([aria-current=page]):hover,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]:hover,:host(bx-side-nav) a.bx--header__menu-item:hover,:not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__link:hover,:not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__link:hover,:not(.bx--side-nav__item--active):hover:host(bx-side-nav-link) .bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__submenu:hover,:not(.bx--side-nav__item--active):hover:host(bx-side-nav-link) :not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__submenu:hover,:not(.bx--side-nav__item--active):hover:host(bx-side-nav-link) :not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__submenu:hover,:not(.bx--side-nav__item--active):hover:host(bx-side-nav-menu) .bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__submenu:hover,:not(.bx--side-nav__item--active):hover:host(bx-side-nav-menu) :not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__submenu:hover,:not(.bx--side-nav__item--active):hover:host(bx-side-nav-menu) :not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__submenu:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav__item:not(.bx--side-nav__item--active) .bx--side-nav__menu-item>.bx--side-nav__link:hover>span,.bx--side-nav__item:not(.bx--side-nav__item--active) :host(bx-side-nav-menu-item)>.bx--side-nav__link:hover>span,.bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-link) .bx--side-nav__menu-item>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-link) :host(bx-side-nav-menu-item)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-menu) .bx--side-nav__menu-item>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-menu) :host(bx-side-nav-menu-item)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__link:hover>span{color:#161616}.bx--side-nav__item--large{height:3rem}.bx--side-nav__divider,:host(bx-side-nav-divider){height:1px;margin:var(--cds-spacing-03,.5rem) var(--cds-spacing-05,1rem);background-color:#e0e0e0}.bx--side-nav__submenu{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;width:100%;font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);outline:2px solid transparent;outline-offset:-2px;display:flex;height:2rem;align-items:center;padding:0 1rem;color:#525252;transition:color 110ms,background-color 110ms,outline 110ms;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bx--side-nav__submenu *,.bx--side-nav__submenu ::after,.bx--side-nav__submenu ::before{box-sizing:inherit}.bx--side-nav__submenu::-moz-focus-inner{border:0}.bx--side-nav__submenu:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav__submenu:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--side-nav__submenu:focus{outline-style:dotted}}.bx--side-nav__submenu-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left}.bx--side-nav__icon.bx--side-nav__submenu-chevron{display:flex;flex:1;justify-content:flex-end}.bx--side-nav__submenu-chevron>svg{width:1rem;height:1rem;transition:-webkit-transform 110ms;transition:transform 110ms;transition:transform 110ms,-webkit-transform 110ms}.bx--side-nav__submenu[aria-expanded=true] .bx--side-nav__submenu-chevron>svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.bx--side-nav__item--large .bx--side-nav__submenu{height:3rem}.bx--side-nav__item--active .bx--side-nav__submenu:hover,:host(bx-side-nav-menu[active]) .bx--side-nav__submenu:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav__item--active .bx--side-nav__submenu[aria-expanded=false],:host(bx-side-nav-menu[active]) .bx--side-nav__submenu[aria-expanded=false]{position:relative;background-color:#e5e5e5;color:#161616}.bx--side-nav__item--active .bx--side-nav__submenu[aria-expanded=false]::before,:host(bx-side-nav-menu[active]) .bx--side-nav__submenu[aria-expanded=false]::before{position:absolute;top:0;bottom:0;left:0;width:4px;background-color:#0f62fe;content:""}.bx--side-nav__item--active .bx--side-nav__submenu-title,:host(bx-side-nav-menu[active]) .bx--side-nav__submenu-title{color:#161616;font-weight:600}.bx--side-nav__menu{display:block;max-height:0;visibility:hidden}.bx--side-nav__submenu[aria-expanded=true]+.bx--side-nav__menu{max-height:93.75rem;visibility:inherit}.bx--side-nav__menu a.bx--side-nav__link{height:2rem;min-height:2rem;padding-left:2rem;font-weight:400}.bx--side-nav__item--icon:host(bx-side-nav-link) a.bx--side-nav__link,.bx--side-nav__item--icon:host(bx-side-nav-menu) a.bx--side-nav__link,.bx--side-nav__item.bx--side-nav__item--icon a.bx--side-nav__link,:host(bx-side-nav-menu):host(bx-side-nav-menu[has-icon]) a.bx--side-nav__link{padding-left:4.5rem}.bx--side-nav__menu a.bx--side-nav__link--current,.bx--side-nav__menu a.bx--side-nav__link[aria-current=page],a.bx--side-nav__link--current{background-color:#e0e0e0}.bx--side-nav__menu a.bx--side-nav__link--current>span,.bx--side-nav__menu a.bx--side-nav__link[aria-current=page]>span,a.bx--side-nav__link--current>span{color:#161616;font-weight:600}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu,.bx--side-nav a.bx--header__menu-item,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu,:host(bx-side-nav) a.bx--header__menu-item,a.bx--side-nav__link{outline:2px solid transparent;outline-offset:-2px;font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px);position:relative;display:flex;min-height:2rem;align-items:center;padding:0 1rem;text-decoration:none;transition:color 110ms,background-color 110ms,outline 110ms}.bx--side-nav__item--large a.bx--side-nav__link{height:3rem}.bx--side-nav a.bx--header__menu-item .bx--text-truncate-end,:host(bx-side-nav) a.bx--header__menu-item .bx--text-truncate-end,a.bx--side-nav__link>.bx--side-nav__link-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#525252;font-size:.875rem;letter-spacing:.1px;line-height:1.25rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bx--side-nav a.bx--header__menu-item:focus,:host(bx-side-nav) a.bx--header__menu-item:focus,a.bx--side-nav__link:focus{outline:2px solid var(--cds-focus,#0f62fe);outline-offset:-2px}@media screen and (prefers-contrast){.bx--side-nav a.bx--header__menu-item:focus,:host(bx-side-nav) a.bx--header__menu-item:focus,a.bx--side-nav__link:focus{outline-style:dotted}}a.bx--side-nav__link--current,a.bx--side-nav__link[aria-current=page]{background-color:#e5e5e5;font-weight:600}a.bx--side-nav__link--current .bx--side-nav__link-text,a.bx--side-nav__link[aria-current=page] .bx--side-nav__link-text{color:#161616}a.bx--side-nav__link--current::before,a.bx--side-nav__link[aria-current=page]::before{position:absolute;top:0;bottom:0;left:0;width:4px;background-color:#0f62fe;content:""}.bx--side-nav__icon{display:flex;flex:0 0 1rem;align-items:center;justify-content:center}.bx--side-nav__icon:not(.bx--side-nav__submenu-chevron){margin-right:1.5rem}.bx--side-nav__icon>svg{width:1rem;height:1rem;fill:#525252}.bx--side-nav__icon>svg.bx--side-nav-collapse-icon{display:none}.bx--side-nav--expanded .bx--side-nav__icon>svg.bx--side-nav-expand-icon,:host(bx-side-nav[expanded]) .bx--side-nav__icon>svg.bx--side-nav-expand-icon{display:none}.bx--side-nav--expanded .bx--side-nav__icon>svg.bx--side-nav-collapse-icon,:host(bx-side-nav[expanded]) .bx--side-nav__icon>svg.bx--side-nav-collapse-icon{display:block}.bx--side-nav--fixed .bx--side-nav__submenu,.bx--side-nav--fixed a.bx--side-nav__link{padding-left:1rem}.bx--side-nav--fixed .bx--side-nav__item:not(.bx--side-nav__item--icon) .bx--side-nav__menu a.bx--side-nav__link,.bx--side-nav--fixed :not(.bx--side-nav__item--icon):host(bx-side-nav-link) .bx--side-nav__menu a.bx--side-nav__link,.bx--side-nav--fixed :not(.bx--side-nav__item--icon):host(bx-side-nav-menu) .bx--side-nav__menu a.bx--side-nav__link{padding-left:2rem}@media (max-width:65.98rem){.bx--side-nav .bx--header__nav,:host(bx-side-nav) .bx--header__nav{display:block}}.bx--side-nav__header-navigation{display:none}@media (max-width:65.98rem){.bx--side-nav__header-navigation{position:relative;display:block;margin-bottom:2rem}}.bx--side-nav__header-divider::after{position:absolute;bottom:-1rem;left:1rem;width:calc(100% - 32px);height:.0625rem;background:#e0e0e0;content:""}.bx--side-nav a.bx--header__menu-item,:host(bx-side-nav) a.bx--header__menu-item{justify-content:space-between;color:#525252;white-space:nowrap}.bx--side-nav a.bx--header__menu-item[aria-expanded=true],:host(bx-side-nav) a.bx--header__menu-item[aria-expanded=true]{background-color:transparent}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu{bottom:inherit;width:100%;padding:0;background-color:transparent;box-shadow:none;-webkit-transform:none;transform:none}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu li,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu li{width:100%}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item{padding-left:4.25rem;font-weight:400}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item:hover,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav .bx--header__menu a.bx--header__menu-item,:host(bx-side-nav) .bx--header__menu a.bx--header__menu-item{height:inherit}.bx--side-nav .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:focus .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:hover .bx--header__menu-arrow,:host(bx-side-nav) .bx--header__menu-arrow{fill:#525252}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--side-nav .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:focus .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:hover .bx--header__menu-arrow,.bx--side-nav__icon>svg,:host(bx-side-nav) .bx--header__menu-arrow{fill:ButtonText}}:host(bx-side-nav){top:0}:host(bx-side-nav[collapse-mode=fixed]){width:16rem}:host(bx-side-nav[collapse-mode=rail]){width:3rem}:host(bx-side-nav[collapse-mode=rail]):hover{width:16rem}:host(bx-side-nav[collapse-mode][usage-mode=header-nav]),:host(bx-side-nav[usage-mode=header-nav]){width:0}@media (max-width:65.98rem){:host(bx-side-nav[collapse-mode][expanded][usage-mode=header-nav]),:host(bx-side-nav[expanded][usage-mode=header-nav]){width:16rem}}:host(bx-side-nav-link){display:block;outline:0;width:auto;height:auto}:host(bx-side-nav-link) .bx--side-nav__icon{color:#525252}:host(bx-side-nav-link) .bx--side-nav__icon[hidden]{display:none}:host(bx-side-nav-divider){display:block}:host(bx-side-nav-menu){display:block;outline:0;width:auto;height:auto}:host(bx-side-nav-menu) .bx--side-nav__icon[hidden]{display:none}:host(bx-side-nav-menu[active]){background-color:#e5e5e5;color:#161616;position:relative}:host(bx-side-nav-menu[active])::before{content:"";position:absolute;top:0;bottom:0;left:0;width:4px;background-color:#0f62fe}:host(bx-side-nav-menu[active][expanded]){background-color:inherit;color:inherit;position:inherit}:host(bx-side-nav-menu[active][expanded])::before{content:none}:host(bx-side-nav-menu-item){display:block;outline:0;width:auto;height:auto}:host(bx-side-nav-menu-item) a.bx--side-nav__link{height:2rem;min-height:2rem;padding-left:2rem;font-weight:400}:host(bx-side-nav-menu-item[parent-has-icon]) a.bx--side-nav__link{padding-left:4.5rem}:host(bx-side-nav-item) .bx--side-nav__link:hover,:host(bx-side-nav-menu) .bx--side-nav__submenu:hover,:host(bx-side-nav-menu-item) .bx--side-nav__link:hover{background-color:#e5e5e5;color:#161616}',
]);

let _$a = t => t,
  _t$a;
const {
prefix: prefix$c
} = settings_1;
/**
* Side nav menu item.
* @element bx-side-nav-menu-item
* @csspart link The link.
* @csspart title The title.
*/

_decorate([customElement(`${prefix$c}-side-nav-menu-item`)], function (_initialize, _FocusMixin) {
class BXSideNavMenuItem extends _FocusMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXSideNavMenuItem,
  d: [{
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "active",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property()],
    key: "href",

    value() {
      return '';
    }

  }, {
    kind: "field",
    decorators: [property()],
    key: "title",
    value: void 0
  }, {
    kind: "method",
    key: "createRenderRoot",
    value:
    /**
     * `true` if the menu item should be active.
     */

    /**
     * Link `href`.
     */

    /**
     * The title.
     */
    function createRenderRoot() {
      var _$exec;

      return this.attachShadow({
        mode: 'open',
        delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
      });
    }
  }, {
    kind: "method",
    key: "shouldUpdate",
    value: function shouldUpdate(changedProperties) {
      if (changedProperties.has('active') && this.active) {
        const {
          selectorMenu
        } = this.constructor;
        const parent = this.closest(selectorMenu);

        if (parent) {
          parent.active = true;
        }
      }

      return true;
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        active,
        href,
        title
      } = this;
      const classes = classMap({
        [`${prefix$c}--side-nav__link`]: true,
        [`${prefix$c}--side-nav__link--current`]: active
      });
      return html(_t$a || (_t$a = _$a` <a part="link" class="${0}" href="${0}"> <span part="title" class="${0}--side-nav__link-text"> <slot>${0}</slot> </span> </a> `), classes, href, prefix$c, title);
    }
    /**
     * A selector that will return the parent menu.
     */

  }, {
    kind: "get",
    static: true,
    key: "selectorMenu",
    value: function selectorMenu() {
      return `${prefix$c}-side-nav-menu`;
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$2;
    }

  }]
};
}, FocusMixin(LitElement));

function _getPrototypeOf(o) {
_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
  return o.__proto__ || Object.getPrototypeOf(o);
};
return _getPrototypeOf(o);
}

function _superPropBase(object, property) {
while (!Object.prototype.hasOwnProperty.call(object, property)) {
  object = _getPrototypeOf(object);
  if (object === null) break;
}
return object;
}

function _get() {
if (typeof Reflect !== "undefined" && Reflect.get) {
  _get = Reflect.get.bind();
} else {
  _get = function _get(target, property, receiver) {
    var base = _superPropBase(target, property);
    if (!base) return;
    var desc = Object.getOwnPropertyDescriptor(base, property);
    if (desc.get) {
      return desc.get.call(arguments.length < 3 ? target : receiver);
    }
    return desc.value;
  };
}
return _get.apply(this, arguments);
}

/**
* @license
*
* Copyright IBM Corp. 2019, 2020
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
var styles$1 = css([
".bx--text-truncate--end{display:inline-block;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--text-truncate--front{display:inline-block;overflow:hidden;width:100%;direction:rtl;text-overflow:ellipsis;white-space:nowrap}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,input,select,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::after,blockquote::before,q::after,q::before{content:\"\"}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:'IBM Plex Mono',Menlo,'DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:var(--cds-productive-heading-06-font-size,2.625rem);font-weight:var(--cds-productive-heading-06-font-weight,300);line-height:var(--cds-productive-heading-06-line-height,1.199);letter-spacing:var(--cds-productive-heading-06-letter-spacing,0)}h2{font-size:var(--cds-productive-heading-05-font-size,2rem);font-weight:var(--cds-productive-heading-05-font-weight,400);line-height:var(--cds-productive-heading-05-line-height,1.25);letter-spacing:var(--cds-productive-heading-05-letter-spacing,0)}h3{font-size:var(--cds-productive-heading-04-font-size,1.75rem);font-weight:var(--cds-productive-heading-04-font-weight,400);line-height:var(--cds-productive-heading-04-line-height,1.28572);letter-spacing:var(--cds-productive-heading-04-letter-spacing,0)}h4{font-size:var(--cds-productive-heading-03-font-size,1.25rem);font-weight:var(--cds-productive-heading-03-font-weight,400);line-height:var(--cds-productive-heading-03-line-height,1.4);letter-spacing:var(--cds-productive-heading-03-letter-spacing,0)}h5{font-size:var(--cds-productive-heading-02-font-size,1rem);font-weight:var(--cds-productive-heading-02-font-weight,600);line-height:var(--cds-productive-heading-02-line-height,1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing,0)}h6{font-size:var(--cds-productive-heading-01-font-size,.875rem);font-weight:var(--cds-productive-heading-01-font-weight,600);line-height:var(--cds-productive-heading-01-line-height,1.28572);letter-spacing:var(--cds-productive-heading-01-letter-spacing,.16px)}p{font-size:var(--cds-body-long-02-font-size,1rem);font-weight:var(--cds-body-long-02-font-weight,400);line-height:var(--cds-body-long-02-line-height,1.5);letter-spacing:var(--cds-body-long-02-letter-spacing,0)}a{color:#0f62fe}em{font-style:italic}@-webkit-keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}@keyframes skeleton{0%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}20%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}28%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}51%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}58%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:right;transform-origin:right}82%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:right;transform-origin:right}83%{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:left;transform-origin:left}96%{-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}100%{opacity:.3;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:left;transform-origin:left}}.bx--header,:host(bx-header){position:fixed;z-index:8000;top:0;right:0;left:0;display:flex;height:3rem;align-items:center;border-bottom:1px solid #393939;background-color:#161616}.bx--header__action{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;cursor:pointer;width:100%;width:3rem;height:3rem;border:.0625rem solid transparent;transition:background-color 110ms,border-color 110ms}.bx--header__action *,.bx--header__action ::after,.bx--header__action ::before{box-sizing:inherit}.bx--header__action::-moz-focus-inner{border:0}.bx--header__action--active>svg.bx--navigation-menu-panel-expand-icon,.bx--header__action>svg.bx--navigation-menu-panel-collapse-icon{display:none}.bx--header__action--active>svg.bx--navigation-menu-panel-collapse-icon{display:inline}.bx--header__action:hover{background-color:#353535}.bx--header__action--active{border-right:1px solid #393939;border-bottom:1px solid #161616;border-left:1px solid #393939}.bx--header__action:focus{border-color:#fff;outline:0}.bx--header__action:active{background-color:#393939}.bx--header__action.bx--btn--icon-only.bx--tooltip__trigger{justify-content:center}.bx--header__action>svg{fill:#fff}.bx--header__menu-trigger>svg{fill:#f4f4f4}.bx--header__menu-trigger:hover{fill:#2c2c2c}.bx--header__menu-toggle{display:flex;align-items:center;justify-content:center}@media (min-width:66rem){.bx--header__menu-toggle__hidden{display:none}}a.bx--header__name{font-size:var(--cds-body-short-01-font-size,.875rem);font-weight:var(--cds-body-short-01-font-weight,400);line-height:var(--cds-body-short-01-line-height,1.28572);letter-spacing:var(--cds-body-short-01-letter-spacing,.16px);display:flex;height:100%;align-items:center;padding:0 2rem 0 1rem;border:.125rem solid transparent;font-weight:600;letter-spacing:.1px;line-height:1.25rem;outline:0;text-decoration:none;transition:border-color 110ms;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a.bx--header__name:focus{border-color:#fff}.bx--header__name--prefix{font-weight:400}a.bx--header__name,a.bx--header__name:hover{color:#f4f4f4}.bx--header__menu-toggle:not(.bx--header__menu-toggle__hidden)~.bx--header__name{padding-left:.5rem}.bx--header__nav,:host(bx-header-nav){position:relative;display:none;height:100%;padding-left:1rem}@media (min-width:66rem){.bx--header__nav,:host(bx-header-nav){display:block}}.bx--header__nav::before,:host(bx-header-nav)::before{position:absolute;top:50%;left:0;display:block;width:.0625rem;height:1.5rem;background-color:#393939;content:\"\";-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bx--header__menu-bar{display:flex;height:100%;padding:0;margin:0;list-style:none}a.bx--header__menu-item{position:relative;display:flex;height:100%;align-items:center;padding:0 1rem;border:2px solid transparent;color:#c6c6c6;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.125rem;text-decoration:none;transition:background-color 110ms,border-color 110ms,color 110ms;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}a.bx--header__menu-item:hover{background-color:#2c2c2c;color:#f4f4f4}.bx--header__action:active,a.bx--header__menu-item:active{background-color:#393939;color:#f4f4f4}a.bx--header__menu-item:focus{border-color:#fff;color:#f4f4f4;outline:0}a.bx--header__menu-item:active>svg,a.bx--header__menu-item:focus>svg,a.bx--header__menu-item:hover>svg{fill:#f4f4f4}.bx--header__menu-item--current::after,a.bx--header__menu-item[aria-current=page]::after{position:absolute;top:0;right:0;bottom:-2px;left:0;width:100%;border-bottom:3px solid var(--cds-inverse-support-04,#4589ff);content:\"\"}.bx--header__menu-item--current:focus::after,a.bx--header__menu-item[aria-current=page]:focus::after{border:0}a.bx--header__menu-item.bx--header__menu-item--current:focus,a.bx--header__menu-item[aria-current=page]:focus{border:2px solid #fff}.bx--header__submenu,:host(bx-header-menu){position:relative}.bx--header__submenu--current::after{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;border-bottom:3px solid var(--cds-border-interactive,#0f62fe);content:\"\"}.bx--header__submenu--current:focus{border:2px solid var(--cds-focus,#0f62fe)}.bx--header__submenu--current:focus::after{border:0}.bx--header__menu-title[aria-haspopup=true]{position:relative}.bx--header__menu-title[aria-expanded=true]{z-index:8001;background-color:#262626;color:#fff}.bx--header__menu-title[aria-expanded=true]>.bx--header__menu-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.bx--header__menu{display:none;padding:0;margin:0;list-style:none}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu{position:absolute;z-index:8000;bottom:0;left:0;display:flex;width:12.5rem;flex-direction:column;background-color:#262626;box-shadow:0 4px 8px 0 rgba(0,0,0,.5);-webkit-transform:translateY(100%);transform:translateY(100%)}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:hover{background-color:#353535}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:active{background-color:#393939}.bx--header__menu .bx--header__menu-item{height:3rem}.bx--header__menu .bx--header__menu-item:hover{background-color:#262626;color:#f4f4f4}.bx--header__menu-arrow{margin-left:.5rem;fill:#c6c6c6;transition:fill 110ms,-webkit-transform 110ms;transition:transform 110ms,fill 110ms;transition:transform 110ms,fill 110ms,-webkit-transform 110ms}.bx--header__global{display:flex;height:100%;flex:1 1 0%;justify-content:flex-end}.bx--skip-to-content{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:-1px;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}.bx--skip-to-content:focus{z-index:9999;top:0;left:0;display:flex;width:auto;height:3rem;align-items:center;padding:0 1rem;border:4px solid #0f62fe;background-color:#161616;clip:auto;color:#f4f4f4;outline:0}:host(bx-header-nav) .bx-ce--header__divider{position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:1.5rem;width:.0625rem;background-color:#393939}:host(bx-header-nav-item){outline:0}:host(bx-header-menu){outline:0}:host(bx-header-menu-item){outline:0}:host(bx-header-menu-item) a.bx--header__menu-item{height:3rem}:host(bx-header-menu-item) a.bx--header__menu-item:hover{background-color:#353535;color:#f4f4f4}:host(bx-header-menu-item) a.bx--header__menu-item:active{background-color:#393939}:host(bx-header-menu-button){display:inline-block;display:content;outline:0}@media (min-width:66rem){:host(bx-header-menu-button){display:none}}:host(bx-header-menu-button[collapse-mode=fixed]){display:none}@media (min-width:66rem){:host(bx-header-menu-button[collapse-mode=rail]){display:block}}:host(bx-header-name){display:inline;display:content;height:100%}",
]);

let _$9 = t => t,
  _t$9;
const {
prefix: prefix$b
} = settings_1;
/**
* Header.
* @element bx-header
*/

_decorate([customElement(`${prefix$b}-header`)], function (_initialize, _LitElement) {
class BXHeader extends _LitElement {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXHeader,
  d: [{
    kind: "method",
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'banner');
      }

      _get(_getPrototypeOf(BXHeader.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      return html(_t$9 || (_t$9 = _$9`<slot></slot>`));
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$1;
    }

  }]
};
}, LitElement);

/**
* Copyright IBM Corp. 2016, 2018
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
function on(element) {
for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
  args[_key - 1] = arguments[_key];
}

element.addEventListener.apply(element, args);
return {
  release: function release() {
    element.removeEventListener.apply(element, args);
    return null;
  }
};
}

function _defineProperty(obj, key, value) {
if (key in obj) {
  Object.defineProperty(obj, key, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: true
  });
} else {
  obj[key] = value;
}
return obj;
}

/**
* The format for the event name used by `@HostListener` decorator.
*/
const EVENT_NAME_FORMAT = /^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/;
/**
* @param Base The base class.
* @returns A mix-in that sets up and cleans up event listeners defined by `@HostListener` decorator.
*/

const HostListenerMixin = Base => {
/**
 * A mix-in class that sets up and cleans up event listeners defined by `@HostListener` decorator.
 */
class HostListenerMixinImpl extends Base {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_handles", new Set());
  }

  // Not using TypeScript `private` due to: microsoft/TypeScript#17744
  connectedCallback() {
    // @ts-ignore: Until `connectedCallback` is added to `HTMLElement` definition
    super.connectedCallback();
    const hostListeners = this.constructor._hostListeners;
    Object.keys(hostListeners).forEach(listenerName => {
      Object.keys(hostListeners[listenerName]).forEach(type => {
        var _unprefixedType;

        // Parses `document:click`/`window:click` format
        const tokens = EVENT_NAME_FORMAT.exec(type);

        if (!tokens) {
          throw new Error(`Could not parse the event name: ${listenerName}`);
        }

        const [,, targetName, unprefixedType] = tokens;
        const target = {
          document: this.ownerDocument,
          window: this.ownerDocument.defaultView,
          parentRoot: this.getRootNode(),
          shadowRoot: this.shadowRoot
        }[targetName] || this;
        const {
          options
        } = hostListeners[listenerName][type];

        this._handles.add(on(target, (_unprefixedType = this.constructor[unprefixedType]) !== null && _unprefixedType !== void 0 ? _unprefixedType : unprefixedType, this[listenerName], options));
      });
    });
  }

  disconnectedCallback() {
    this._handles.forEach(handle => {
      handle.release();

      this._handles.delete(handle);
    }); // @ts-ignore: Until `disconnectedCallback` is added to `HTMLElement` definition


    super.disconnectedCallback();
  }
  /**
   * The map, keyed by method name, of event listeners that should be attached to host element or host document.
   * @private
   */
  // Not using TypeScript `private` due to: microsoft/TypeScript#17744


}

_defineProperty(HostListenerMixinImpl, "_hostListeners", {});

return HostListenerMixinImpl;
};

function ownKeys(object, enumerableOnly) {
var keys = Object.keys(object);
if (Object.getOwnPropertySymbols) {
  var symbols = Object.getOwnPropertySymbols(object);
  enumerableOnly && (symbols = symbols.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  })), keys.push.apply(keys, symbols);
}
return keys;
}
function _objectSpread2(target) {
for (var i = 1; i < arguments.length; i++) {
  var source = null != arguments[i] ? arguments[i] : {};
  i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
    _defineProperty(target, key, source[key]);
  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
  });
}
return target;
}

/**
* @license
*
* Copyright IBM Corp. 2019
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
* Puts an event listener to an internal table for `@HostListener()`.
* @param type
*   The event type. Can be prefixed with `document:` or `window:`.
*   The event listener is attached to host element's owner document or its default view in such case.
* @param options The event listener options.
* @param Clazz The target class.
* @param name The method name in the given target class that works as the event listener.
*/
const setHostListener = (type, options, Clazz, name) => {
const hostListeners = Clazz._hostListeners;

if (!hostListeners) {
  throw new Error('The method `@HostListener()` is defined on has to be of a class that has `HostListerMixin`.');
}

if (!hostListeners[name]) {
  hostListeners[name] = {};
}

hostListeners[name][type] = {
  options
};
};
/**
* @param type
*   The event type. Can be prefixed with `document:` or `window:`.
*   The event listener is attached to host element's owner document or its default view in such case.
* @param options The event listener options.
* @param descriptor The original class element descriptor of the event listener method.
* @returns The updated class element descriptor with `@HostListener()` decorator.
*/


const HostListenerStandard = (type, options, descriptor) => {
const {
  kind,
  key,
  placement
} = descriptor;

if (!(kind === 'method' && placement === 'prototype' || kind === 'field' && placement === 'own')) {
  throw new Error('`@HostListener()` must be defined on instance methods, but you may have defined it on static, field, etc.');
}

return _objectSpread2(_objectSpread2({}, descriptor), {}, {
  finisher(Clazz) {
    setHostListener(type, options, Clazz, key);
  }

});
};
/**
* A decorator to add event listener to the host element, or its `document`/`window`, of a custom element.
* The `target` must extend `HostListenerMixin`.
* @param type
*   The event type. Can be prefixed with `document:` or `window:`.
*   The event listener is attached to host element's owner document or its default view in such case.
* @param options The event listener options.
*/


const HostListener = (type, options) => (targetOrDescriptor, name) => typeof name !== 'undefined' ? setHostListener(type, options, targetOrDescriptor.constructor, name) : HostListenerStandard(type, options, targetOrDescriptor);

/**
* @license
*
* Copyright IBM Corp. 2019
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* Walks through the given DOM collection and runs the given callback.
* @param a A DOM collection.
* @param predicate The callback function.
* @param [thisObject] The context object for the given callback function.
*/

const forEach = (a, predicate, thisObject) => Array.prototype.forEach.call(a, predicate, thisObject);

/**
* @license
*
* Copyright IBM Corp. 2020
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
* Collapse modes of side nav.
*/
let SIDE_NAV_COLLAPSE_MODE;
/**
* The usage purpose of side nav.
*/

(function (SIDE_NAV_COLLAPSE_MODE) {
SIDE_NAV_COLLAPSE_MODE["FIXED"] = "fixed";
SIDE_NAV_COLLAPSE_MODE["RAIL"] = "rail";
SIDE_NAV_COLLAPSE_MODE["RESPONSIVE"] = "responsive";
})(SIDE_NAV_COLLAPSE_MODE || (SIDE_NAV_COLLAPSE_MODE = {}));

let SIDE_NAV_USAGE_MODE;

(function (SIDE_NAV_USAGE_MODE) {
SIDE_NAV_USAGE_MODE["REGULAR"] = "";
SIDE_NAV_USAGE_MODE["HEADER_NAV"] = "header-nav";
})(SIDE_NAV_USAGE_MODE || (SIDE_NAV_USAGE_MODE = {}));

let _$8 = t => t,
  _t$8;
const {
prefix: prefix$a
} = settings_1;
/**
* Side nav.
* @element bx-side-nav
*/

_decorate([customElement(`${prefix$a}-side-nav`)], function (_initialize, _HostListenerMixin) {
class BXSideNav extends _HostListenerMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXSideNav,
  d: [{
    kind: "field",
    key: "_hovered",

    value() {
      return false;
    }

  }, {
    kind: "field",
    key: "_hTransition",

    value() {
      return null;
    }

  }, {
    kind: "field",
    key: "_transitionPromise",

    value() {
      return Promise.resolve();
    }

  }, {
    kind: "get",
    key: "_updateAndTransitionPromise",
    value:
    /**
     * `true` if this side nav is hovered.
     */

    /**
     * The handle for `transitionend` event listener.
     */

    /**
     * A promise that is resolved when the transition is complete.
     */

    /**
     * A promise that is resolved when the transition upon proprety update is complete.
     */
    function _updateAndTransitionPromise() {
      return this.updateComplete.then(() => this._transitionPromise);
    }
    /**
     * Cleans the handle for `transitionend` event listener.
     */

  }, {
    kind: "method",
    key: "_cleanHTransition",
    value: function _cleanHTransition() {
      if (this._hTransition) {
        this._hTransition = this._hTransition.release();
      }
    }
    /**
     * Handles `${prefix}-header-menu-button-toggle` event on the document.
     */

  }, {
    kind: "field",
    decorators: [HostListener('parentRoot:eventButtonToggle')],
    key: "_handleButtonToggle",

    value() {
      return async event => {
        this.expanded = event.detail.active;

        if (this.expanded) {
          await this._updateAndTransitionPromise; // Checks if the side nav is not collapsed during the animation

          if (this.expanded) {
            var _this$querySelector;

            (_this$querySelector = this.querySelector(this.constructor.selectorNavItems)) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.focus();
          }
        }
      };
    }

  }, {
    kind: "method",
    key: "_updatedSideNavMenuForceCollapsedState",
    value:
    /**
     * Force child side nav menus collapsed upon the hover/expanded state of this side nav.
     */
    function _updatedSideNavMenuForceCollapsedState() {
      const {
        expanded,
        _hovered: hovered
      } = this;
      forEach(this.querySelectorAll(this.constructor.selectorMenu), item => {
        item.forceCollapsed = !expanded && !hovered;
      });
    }
    /**
     * Handles `mouseover` event handler.
     */

  }, {
    kind: "method",
    decorators: [HostListener('mouseover')],
    key: "_handleMouseover",
    value: function _handleMouseover() {
      this._hovered = true;

      this._updatedSideNavMenuForceCollapsedState();
    }
    /**
     * Handles `mouseout` event handler.
     */

  }, {
    kind: "method",
    decorators: [HostListener('mouseout')],
    key: "_handleMouseout",
    value: function _handleMouseout() {
      this._hovered = false;

      this._updatedSideNavMenuForceCollapsedState();
    }
    /**
     * Collapse mode of the side nav.
     */

  }, {
    kind: "field",
    decorators: [property({
      reflect: true,
      attribute: 'collapse-mode'
    })],
    key: "collapseMode",

    value() {
      return SIDE_NAV_COLLAPSE_MODE.RESPONSIVE;
    }

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "expanded",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property({
      reflect: true,
      attribute: 'usage-mode'
    })],
    key: "usageMode",

    value() {
      return SIDE_NAV_USAGE_MODE.REGULAR;
    }

  }, {
    kind: "method",
    key: "connectedCallback",
    value:
    /**
     * `true` to expand the side nav.
     */

    /**
     * Usage mode of the side nav.
     */
    function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'navigation');
      }

      _get(_getPrototypeOf(BXSideNav.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this._cleanHTransition();

      _get(_getPrototypeOf(BXSideNav.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "shouldUpdate",
    value: function shouldUpdate(changedProperties) {
      if (changedProperties.has('expanded')) {
        this._transitionPromise = new Promise(resolve => {
          this._cleanHTransition();

          this._hTransition = on(this, 'transitionend', () => {
            this._cleanHTransition();

            resolve();
          });
        });
      }

      return true;
    }
  }, {
    kind: "method",
    key: "updated",
    value: function updated(changedProperties) {
      if (changedProperties.has('collapseMode') || changedProperties.has('usageMode')) {
        const {
          collapseMode,
          usageMode
        } = this;

        if ((collapseMode === SIDE_NAV_COLLAPSE_MODE.FIXED || collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL) && usageMode === SIDE_NAV_USAGE_MODE.HEADER_NAV) {
          console.warn('Fixed/rail modes of side nav cannot be used with header nav mode.'); // eslint-disable-line no-console
        }
      }

      const doc = this.getRootNode();

      if (changedProperties.has('collapseMode')) {
        forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
          item.collapseMode = this.collapseMode;
        });
      }

      if (changedProperties.has('expanded')) {
        this._updatedSideNavMenuForceCollapsedState();

        forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
          item.active = this.expanded;
        });
      }

      if (changedProperties.has('usageMode')) {
        forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
          item.usageMode = this.usageMode;
        });
      }
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      return html(_t$8 || (_t$8 = _$8`<slot></slot>`));
    }
    /**
     * A selector that will return the toggle buttons.
     */

  }, {
    kind: "get",
    static: true,
    key: "selectorButtonToggle",
    value: function selectorButtonToggle() {
      return `${prefix$a}-header-menu-button`;
    }
    /**
     * A selector that will return side nav focusable items.
     */

  }, {
    kind: "get",
    static: true,
    key: "selectorNavItems",
    value: function selectorNavItems() {
      return `${prefix$a}-side-nav-menu, ${prefix$a}-side-nav-menu-item, ${prefix$a}-side-nav-link`;
    }
    /**
     * A selector that will return side nav menus.
     */

  }, {
    kind: "get",
    static: true,
    key: "selectorMenu",
    value: function selectorMenu() {
      return `${prefix$a}-side-nav-menu`;
    }
    /**
     * The name of the custom event fired after the header menu button in the document is toggled upon a user gesture.
     */

  }, {
    kind: "get",
    static: true,
    key: "eventButtonToggle",
    value: function eventButtonToggle() {
      return `${prefix$a}-header-menu-button-toggled`;
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$2;
    }

  }]
};
}, HostListenerMixin(LitElement));

const {
prefix: prefix$9
} = settings_1;
/**
* A divider in side nav.
* @element bx-side-nav-divider
*/

_decorate([customElement(`${prefix$9}-side-nav-divider`)], function (_initialize, _LitElement) {
class BXSideNavDivider extends _LitElement {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXSideNavDivider,
  d: [{
    kind: "method",
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'separator');
      }

      _get(_getPrototypeOf(BXSideNavDivider.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$2;
    }

  }]
};
}, LitElement);

/**
* @license
* Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
* This code may only be used under the BSD style license found at
* http://polymer.github.io/LICENSE.txt
* The complete set of authors may be found at
* http://polymer.github.io/AUTHORS.txt
* The complete set of contributors may be found at
* http://polymer.github.io/CONTRIBUTORS.txt
* Code distributed by Google as part of the polymer project is also
* subject to an additional IP rights grant found at
* http://polymer.github.io/PATENTS.txt
*/
const previousValues = new WeakMap();
/**
* For AttributeParts, sets the attribute if the value is defined and removes
* the attribute if the value is undefined.
*
* For other part types, this directive is a no-op.
*/
const ifDefined = directive((value) => (part) => {
  const previousValue = previousValues.get(part);
  if (value === undefined && part instanceof AttributePart) {
      // If the value is undefined, remove the attribute, but only if the value
      // was previously defined.
      if (previousValue !== undefined || !previousValues.has(part)) {
          const name = part.committer.name;
          part.committer.element.removeAttribute(name);
      }
  }
  else if (value !== previousValue) {
      part.setValue(value);
  }
  previousValues.set(part, value);
});

let _$7 = t => t,
  _t$7,
  _t2;
const {
prefix: prefix$8
} = settings_1;
/**
* The product name UI in header nav.
* @element bx-header-name
* @csspart link The link.
* @csspart prefix The prefix content.
*/

_decorate([customElement(`${prefix$8}-header-name`)], function (_initialize, _FocusMixin) {
class BXHeaderName extends _FocusMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXHeaderName,
  d: [{
    kind: "field",
    decorators: [property()],
    key: "href",
    value: void 0
  }, {
    kind: "field",
    decorators: [property()],
    key: "prefix",
    value: void 0
  }, {
    kind: "method",
    key: "createRenderRoot",
    value:
    /**
     * Link `href`.
     */

    /**
     * The product name prefix.
     */
    function createRenderRoot() {
      var _$exec;

      return this.attachShadow({
        mode: 'open',
        delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
      });
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        href,
        prefix: namePrefix
      } = this;
      const namePrefixPart = !namePrefix ? undefined : html(_t$7 || (_t$7 = _$7` <span part="prefix" class="${0}--header__name--prefix">${0}</span> `), prefix$8, namePrefix);
      return html(_t2 || (_t2 = _$7` <a part="link" class="${0}--header__name" href="${0}">${0}&nbsp;<slot></slot></a> `), prefix$8, ifDefined(href), namePrefixPart);
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$1;
    }

  }]
};
}, FocusMixin(LitElement));

let _$6 = t => t,
  _t$6;
const {
prefix: prefix$7
} = settings_1;
/**
* Header.
* @element bx-header-nav
* @csspart menu-body The menu body.
* @csspart divider The divider.
*/

_decorate([customElement(`${prefix$7}-header-nav`)], function (_initialize, _LitElement) {
class BXHeaderNav extends _LitElement {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXHeaderNav,
  d: [{
    kind: "field",
    decorators: [property({
      attribute: 'menu-bar-label'
    })],
    key: "menuBarLabel",
    value: void 0
  }, {
    kind: "method",
    key: "connectedCallback",
    value:
    /**
     * The `aria-label` attribute for the menu bar UI.
     */
    function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'navigation');
      }

      _get(_getPrototypeOf(BXHeaderNav.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        menuBarLabel
      } = this;
      return html(_t$6 || (_t$6 = _$6` <div part="divider" class="${0}-ce--header__divider"></div> <ul part="menu-body" class="${0}--header__menu-bar" aria-label="${0}"> <slot></slot> </ul> `), prefix$7, prefix$7, menuBarLabel);
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$1;
    }

  }]
};
}, LitElement);

let _$5 = t => t,
  _t$5;
const {
prefix: prefix$6
} = settings_1;
/**
* Side nav menu item.
* @element bx-side-nav-link
* @slot link - The link.
* @slot title - The title.
* @slot title-icon-container - The title icon container.
*/

_decorate([customElement(`${prefix$6}-side-nav-link`)], function (_initialize, _FocusMixin) {
class BXSideNavLink extends _FocusMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXSideNavLink,
  d: [{
    kind: "field",
    decorators: [query('#title-icon-container')],
    key: "_titleIconContainerNode",
    value: void 0
  }, {
    kind: "method",
    key: "_handleSlotChangeTitleIcon",
    value:
    /**
     * The container for the title icon.
     */

    /**
     * Handles `slotchange` event on the `<slot>` for the title icon.
     */
    function _handleSlotChangeTitleIcon({
      target
    }) {
      var _this$_titleIconConta;

      (_this$_titleIconConta = this._titleIconContainerNode) === null || _this$_titleIconConta === void 0 ? void 0 : _this$_titleIconConta.toggleAttribute('hidden', target.assignedNodes().length === 0);
    }
    /**
     * `true` if the menu item should be active.
     */

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "active",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property()],
    key: "href",

    value() {
      return '';
    }

  }, {
    kind: "field",
    decorators: [property()],
    key: "title",
    value: void 0
  }, {
    kind: "method",
    key: "createRenderRoot",
    value:
    /**
     * Link `href`.
     */

    /**
     * The title.
     */
    function createRenderRoot() {
      var _$exec;

      return this.attachShadow({
        mode: 'open',
        delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
      });
    }
  }, {
    kind: "method",
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'listitem');
      }

      _get(_getPrototypeOf(BXSideNavLink.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        active,
        href,
        title,
        _handleSlotChangeTitleIcon: handleSlotChangeTitleIcon
      } = this;
      const classes = classMap({
        [`${prefix$6}--side-nav__link`]: true,
        [`${prefix$6}--side-nav__link--current`]: active
      });
      return html(_t$5 || (_t$5 = _$5` <a part="link" class="${0}" href="${0}"> <div id="title-icon-container" part="title-icon-container" hidden class="${0}--side-nav__icon"> <slot name="title-icon" @slotchange="${0}"></slot> </div> <span part="title" class="${0}--side-nav__link-text"> <slot>${0}</slot> </span> </a> `), classes, href, prefix$6, handleSlotChangeTitleIcon, prefix$6, title);
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$2;
    }

  }]
};
}, FocusMixin(LitElement));

/**
* @license
*
* Copyright IBM Corp. 2019
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
* Stores the ClassInfo object applied to a given AttributePart.
* Used to unset existing values when a new ClassInfo object is applied.
*/
const attributesMapCache = new WeakMap();
/**
* A directive that applies attributes from a key-value pairs.
* This must be used in the `...` name and must be the only part used in the attribute.
* It applies the key-value pairs in the `attributesInfo` argument
* and sets them as attribute name/value pairs.
* @param classInfo The key-value pair to be set as the attribute name/value pairs.
*/

const spread = directive(attributesInfo => part => {
// The first character of `...` is interpreted as one for `PropertyPart`
if (!(part instanceof PropertyPart) || part.committer.name !== '..' || part.committer.parts.length > 1) {
  throw new Error('The `spread` directive must be used in with `...` name and must be the only part in the attribute.');
}

const {
  committer
} = part;
const {
  element
} = committer; // Removes old attributes that are no longer there

const oldAttributesInfo = attributesMapCache.get(part);

if (oldAttributesInfo) {
  Object.keys(oldAttributesInfo).forEach(name => {
    if (!(name in attributesInfo)) {
      element.removeAttribute(name);
    }
  });
} // Adds new attributes


Object.keys(attributesInfo).forEach(name => {
  const value = attributesInfo[name];

  if ((!oldAttributesInfo || !Object.is(value, oldAttributesInfo[name])) && typeof value !== 'undefined') {
    element.setAttribute(name, value);
  }
}); // Updates the cache

attributesMapCache.set(part, attributesInfo);
});

/**
* @license
*
* Copyright IBM Corp. 2019, 2020
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
const svgResultCarbonIcon$3 = ({ children, ...attrs } = {}) =>
svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
  attrs
)}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}${children}${children}<path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>`;

let _$4 = t => t,
  _t$4;
const {
prefix: prefix$5
} = settings_1;
/**
* Header menu.
* @element bx-header-menu
* @csspart trigger The trigger button.
* @csspart trigger-icon The trigger button icon.
* @csspart menu-body The menu body.
*/

let BXHeaderMenu = _decorate([customElement(`${prefix$5}-header-menu`)], function (_initialize, _HostListenerMixin) {
class BXHeaderMenu extends _HostListenerMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXHeaderMenu,
  d: [{
    kind: "field",
    decorators: [query('a')],
    key: "_trigger",
    value: void 0
  }, {
    kind: "method",
    key: "_handleClick",
    value:
    /**
     * The trigger button.
     */

    /**
     * Handles `click` event handler on this element.
     */
    function _handleClick() {
      this._handleUserInitiatedToggle();
    }
    /**
     * Handler for the `keydown` event on the trigger button.
     */

  }, {
    kind: "method",
    key: "_handleKeydownTrigger",
    value: function _handleKeydownTrigger({
      key
    }) {
      if (key === 'Esc' || key === 'Escape') {
        this._handleUserInitiatedToggle(false);
      }
    }
    /**
     * Handles user-initiated toggling the open state.
     * @param [force] If specified, forces the open state to the given one.
     */

  }, {
    kind: "method",
    key: "_handleUserInitiatedToggle",
    value: function _handleUserInitiatedToggle(force = !this.expanded) {
      this.expanded = force;

      if (!force) {
        this._trigger.focus();
      }
    }
    /**
     * Handles `blur` event handler on this element.
     */

  }, {
    kind: "method",
    decorators: [HostListener('focusout')],
    key: "_handleBlur",
    value: function _handleBlur({
      relatedTarget
    }) {
      if (!this.contains(relatedTarget)) {
        this.expanded = false;
      }
    }
    /**
     * `true` if the menu should be expanded.
     */

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "expanded",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property({
      attribute: 'trigger-content'
    })],
    key: "triggerContent",

    value() {
      return '';
    }

  }, {
    kind: "field",
    decorators: [property({
      attribute: 'menu-label'
    })],
    key: "menuLabel",
    value: void 0
  }, {
    kind: "method",
    key: "createRenderRoot",
    value:
    /**
     * The content of the trigger button.
     */

    /**
     * The `aria-label` attribute for the menu UI.
     */
    function createRenderRoot() {
      return this.attachShadow({
        mode: 'open',
        delegatesFocus: true
      });
    }
  }, {
    kind: "method",
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'listitem');
      }

      _get(_getPrototypeOf(BXHeaderMenu.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "updated",
    value: function updated(changedProperties) {
      if (changedProperties.has('expanded')) {
        const {
          selectorItem
        } = this.constructor;
        const {
          expanded
        } = this;
        forEach(this.querySelectorAll(selectorItem), elem => {
          elem.tabIndex = expanded ? 0 : -1;
        });
      }
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        expanded,
        triggerContent,
        menuLabel,
        _handleClick: handleClick,
        _handleKeydownTrigger: handleKeydownTrigger
      } = this;
      return html(_t$4 || (_t$4 = _$4` <a part="trigger" tabindex="0" class="${0}--header__menu-item ${0}--header__menu-title" href="javascript:void 0" aria-haspopup="menu" aria-expanded="${0}" @click="${0}" @keydown="${0}"> ${0}${0} </a> <ul part="menu-body" class="${0}--header__menu" aria-label="${0}"> <slot></slot> </ul> `), prefix$5, prefix$5, String(Boolean(expanded)), handleClick, handleKeydownTrigger, triggerContent, svgResultCarbonIcon$3({
        part: 'trigger-icon',
        class: `${prefix$5}--header__menu-arrow`
      }), prefix$5, ifDefined(menuLabel));
    }
    /**
     * A selector that will return the menu items.
     */

  }, {
    kind: "get",
    static: true,
    key: "selectorItem",
    value: function selectorItem() {
      return `${prefix$5}-header-menu-item`;
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$1;
    }

  }]
};
}, HostListenerMixin(FocusMixin(LitElement)));

let _$3 = t => t,
  _t$3;
const {
prefix: prefix$4
} = settings_1;
/**
* Header nav item.
* @element bx-header-nav-item
* @csspart link The link.
* @csspart title The title.
*/

let BXHeaderNavItem = _decorate([customElement(`${prefix$4}-header-nav-item`)], function (_initialize, _FocusMixin) {
class BXHeaderNavItem extends _FocusMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXHeaderNavItem,
  d: [{
    kind: "field",
    decorators: [property()],
    key: "href",
    value: void 0
  }, {
    kind: "field",
    decorators: [property()],
    key: "title",
    value: void 0
  }, {
    kind: "field",
    decorators: [property({
      reflect: true
    })],
    key: "role",

    value() {
      return 'listitem';
    }

  }, {
    kind: "method",
    key: "createRenderRoot",
    value:
    /**
     * Link `href`.
     */

    /**
     * The title.
     */

    /**
     * As child of <ul>, this element must have role of listitem
     */
    function createRenderRoot() {
      var _$exec;

      return this.attachShadow({
        mode: 'open',
        delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
      });
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        href,
        title
      } = this;
      return html(_t$3 || (_t$3 = _$3` <a part="link" class="${0}--header__menu-item" tabindex="0" href="${0}"> <span part="title" class="${0}--text-truncate--end"><slot>${0}</slot></span> </a> `), prefix$4, ifDefined(href), prefix$4, title);
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$1;
    }

  }]
};
}, FocusMixin(LitElement));

const {
prefix: prefix$3
} = settings_1;
/**
* Header submenu item.
* @element bx-header-menu-item
*/

_decorate([customElement(`${prefix$3}-header-menu-item`)], function (_initialize, _BXHeaderNavItem) {
class BXHeaderMenuItem extends _BXHeaderNavItem {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXHeaderMenuItem,
  d: []
};
}, BXHeaderNavItem);

let _$2 = t => t,
  _t$2;
const {
prefix: prefix$2
} = settings_1;
/**
* Side nav items.
* @element bx-side-nav-items
*/

_decorate([customElement(`${prefix$2}-side-nav-items`)], function (_initialize, _LitElement) {
class BXSideNavItems extends _LitElement {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXSideNavItems,
  d: [{
    kind: "method",
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'list');
      }

      _get(_getPrototypeOf(BXSideNavItems.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      return html(_t$2 || (_t$2 = _$2`<slot></slot>`));
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$2;
    }

  }]
};
}, LitElement);

/**
* @license
*
* Copyright IBM Corp. 2019, 2020
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
const svgResultCarbonIcon$2 = ({ children, ...attrs } = {}) =>
svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
  attrs
)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}${children}${children}<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`;

/**
* @license
*
* Copyright IBM Corp. 2019, 2020
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
const svgResultCarbonIcon$1 = ({ children, ...attrs } = {}) =>
svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
  attrs
)}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${children}${children}${children}<path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"></path></svg>`;

/**
* @license
*
* Copyright IBM Corp. 2019
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* A variant of `lit-html/directives/if-defined` which stops rendering if the given value is `null` in addition to `undefined`.
* @param The value.
*/

var ifNonNull = (value => ifDefined(value !== null && value !== void 0 ? value : undefined));

let _$1 = t => t,
  _t$1;
const {
prefix: prefix$1
} = settings_1;
/**
* The trigger button for side nav in header nav.
* @element bx-header-menu-button
* @csspart button The button.
* @csspart toggle-icon The toggle icon.
* @fires bx-header-menu-button-toggled - The custom event fired after this header menu button is toggled upon a user gesture.
*/

let BXHeaderMenuButton = _decorate([customElement(`${prefix$1}-header-menu-button`)], function (_initialize, _FocusMixin) {
class BXHeaderMenuButton extends _FocusMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXHeaderMenuButton,
  d: [{
    kind: "method",
    key: "_handleClick",
    value: function _handleClick() {
      const active = !this.active;
      this.active = active;
      this.dispatchEvent(new CustomEvent(this.constructor.eventToggle, {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          active
        }
      }));
    }
    /**
     * `true` if the button should represent its active state.
     */

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "active",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property({
      attribute: 'button-label-active'
    })],
    key: "buttonLabelActive",

    value() {
      return 'Close navigation menu';
    }

  }, {
    kind: "field",
    decorators: [property({
      attribute: 'button-label-inactive'
    })],
    key: "buttonLabelInactive",

    value() {
      return 'Open navigation menu';
    }

  }, {
    kind: "field",
    decorators: [property({
      reflect: true,
      attribute: 'collapse-mode'
    })],
    key: "collapseMode",

    value() {
      return SIDE_NAV_COLLAPSE_MODE.RESPONSIVE;
    }

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "disabled",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property({
      reflect: true,
      attribute: 'usage-mode'
    })],
    key: "usageMode",

    value() {
      return SIDE_NAV_USAGE_MODE.REGULAR;
    }

  }, {
    kind: "method",
    key: "createRenderRoot",
    value:
    /**
     * The `aria-label` attribute for the button in its active state.
     */

    /**
     * The `aria-label` attribute for the button in its inactive state.
     */

    /**
     * Collapse mode of the side nav.
     */

    /**
     * `true` if the button should be disabled.
     */

    /**
     * Usage mode of the side nav.
     */
    function createRenderRoot() {
      var _$exec;

      return this.attachShadow({
        mode: 'open',
        delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
      });
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        active,
        buttonLabelActive,
        buttonLabelInactive,
        disabled,
        _handleClick: handleClick
      } = this;
      const buttonLabel = active ? buttonLabelActive : buttonLabelInactive;
      const classes = classMap({
        [`${prefix$1}--header__action`]: true,
        [`${prefix$1}--header__menu-trigger`]: true,
        [`${prefix$1}--header__menu-toggle`]: true,
        [`${prefix$1}--header__action--active`]: active
      });
      return html(_t$1 || (_t$1 = _$1` <button part="button" class="${0}" ?disabled="${0}" aria-label="${0}" @click="${0}"> ${0} </button> `), classes, disabled, ifNonNull(buttonLabel), handleClick, (active ? svgResultCarbonIcon$2 : svgResultCarbonIcon$1)({
        slot: 'toggle-icon'
      }));
    }
    /**
     * The name of the custom event fired after this header menu button is toggled upon a user gesture.
     */

  }, {
    kind: "get",
    static: true,
    key: "eventToggle",
    value: function eventToggle() {
      return `${prefix$1}-header-menu-button-toggled`;
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$1;
    }

  }]
};
}, FocusMixin(LitElement));

/**
* @license
*
* Copyright IBM Corp. 2019, 2020
*
* This source code is licensed under the Apache-2.0 license found in the
* LICENSE file in the root directory of this source tree.
*/
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
  attrs
)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}${children}${children}<path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;

let _ = t => t,
  _t;
const {
prefix
} = settings_1;
/**
* Side nav menu.
* @element bx-side-nav-menu
* @slot title-icon - The icon.
* @csspart expando The expando.
* @csspart expando-icon-container The expando icon container.
* @csspart expando-icon The expando icon.
* @csspart title The title.
* @csspart title-icon-container The title icon container.
* @csspart menu-body The menu body.
*/

_decorate([customElement(`${prefix}-side-nav-menu`)], function (_initialize, _FocusMixin) {
class BXSideNavMenu extends _FocusMixin {
  constructor(...args) {
    super(...args);

    _initialize(this);
  }

}

return {
  F: BXSideNavMenu,
  d: [{
    kind: "field",
    key: "_hasIcon",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [query('#title-icon-container')],
    key: "_titleIconContainerNode",
    value: void 0
  }, {
    kind: "method",
    key: "_handleUserInitiatedToggle",
    value:
    /**
     * `true` if this menu has an icon.
     */

    /**
     * The container for the title icon.
     */

    /**
     * Handles user-initiated toggle request of this side nav menu.
     * @param expanded The new expanded state.
     */
    function _handleUserInitiatedToggle(expanded = !this.expanded) {
      const {
        eventBeforeToggle,
        eventToggle
      } = this.constructor;
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          expanded
        }
      };

      if (this.dispatchEvent(new CustomEvent(eventBeforeToggle, init))) {
        this.expanded = expanded;
        this.dispatchEvent(new CustomEvent(eventToggle, init));
      }
    }
    /**
     * Handler for the `click` event on the expando button.
     */

  }, {
    kind: "method",
    key: "_handleClickExpando",
    value: function _handleClickExpando() {
      this._handleUserInitiatedToggle();
    }
    /**
     * Handles `slotchange` event on the non-named `<slot>`.
     */

  }, {
    kind: "method",
    key: "_handleSlotChange",
    value: function _handleSlotChange({
      target
    }) {
      const {
        _hasIcon: hasIcon
      } = this;
      forEach(target.assignedNodes(), item => {
        if (item.nodeType === Node.ELEMENT_NODE) {
          item.toggleAttribute(this.constructor.attribItemHasIcon, hasIcon);
        }
      });
    }
    /**
     * Handles `slotchange` event on the `<slot>` for the title icon.
     */

  }, {
    kind: "method",
    key: "_handleSlotChangeTitleIcon",
    value: function _handleSlotChangeTitleIcon({
      target
    }) {
      var _this$_titleIconConta;

      const constructor = this.constructor;
      const hasIcon = target.assignedNodes().length > 0;
      this._hasIcon = hasIcon;
      (_this$_titleIconConta = this._titleIconContainerNode) === null || _this$_titleIconConta === void 0 ? void 0 : _this$_titleIconConta.toggleAttribute('hidden', !hasIcon);
      forEach(this.querySelectorAll(constructor.selectorItem), item => {
        item.toggleAttribute(constructor.attribItemHasIcon, hasIcon);
      });
    }
    /**
     * `true` if the menu has active menu item.
     */

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "active",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true
    })],
    key: "expanded",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property({
      type: Boolean,
      reflect: true,
      attribute: 'force-collapsed'
    })],
    key: "forceCollapsed",

    value() {
      return false;
    }

  }, {
    kind: "field",
    decorators: [property()],
    key: "title",

    value() {
      return '';
    }

  }, {
    kind: "method",
    key: "createRenderRoot",
    value:
    /**
     * `true` if the menu should be open.
     */

    /**
     * `true` if the menu should be forced collapsed upon side nav's expanded state.
     */

    /**
     * The title text.
     */
    function createRenderRoot() {
      var _$exec;

      return this.attachShadow({
        mode: 'open',
        delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
      });
    }
  }, {
    kind: "method",
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.hasAttribute('role')) {
        this.setAttribute('role', 'listitem');
      }

      _get(_getPrototypeOf(BXSideNavMenu.prototype), "connectedCallback", this).call(this);
    }
  }, {
    kind: "method",
    key: "updated",
    value: function updated(changedProperties) {
      if (changedProperties.has('expanded')) {
        const {
          selectorItem
        } = this.constructor;
        const {
          expanded
        } = this;
        forEach(this.querySelectorAll(selectorItem), elem => {
          elem.tabIndex = expanded ? 0 : -1;
        });
      }
    }
  }, {
    kind: "method",
    key: "render",
    value: function render() {
      const {
        expanded,
        forceCollapsed,
        title,
        _handleClickExpando: handleClickExpando,
        _handleSlotChange: handleSlotChange,
        _handleSlotChangeTitleIcon: handleSlotChangeTitleIcon
      } = this;
      return html(_t || (_t = _` <button type="button" part="expando" aria-haspopup="true" aria-expanded="${0}" class="${0}--side-nav__submenu" @click="${0}"> <div id="title-icon-container" part="title-icon-container" hidden class="${0}--side-nav__icon"> <slot name="title-icon" @slotchange="${0}"></slot> </div> <span part="title" class="${0}--side-nav__submenu-title">${0}</span> <div part="expando-icon-container" class="${0}--side-nav__icon ${0}--side-nav__icon--small ${0}--side-nav__submenu-chevron"> ${0} </div> </button> <ul part="menu-body" class="${0}--side-nav__menu"> <slot @slotchange="${0}"></slot> </ul> `), String(Boolean(expanded && !forceCollapsed)), prefix, handleClickExpando, prefix, handleSlotChangeTitleIcon, prefix, title, prefix, prefix, prefix, svgResultCarbonIcon({
        part: 'expando-icon'
      }), prefix, handleSlotChange);
    }
    /**
     * The attribute name of the menu items, that is set if this menu has an icon.
     */

  }, {
    kind: "field",
    static: true,
    key: "attribItemHasIcon",

    value() {
      return 'parent-has-icon';
    }

  }, {
    kind: "get",
    static: true,
    key: "selectorItem",
    value:
    /**
     * A selector that will return the menu items.
     */
    function selectorItem() {
      return `${prefix}-side-nav-menu-item`;
    }
    /**
     * The name of the custom event fired before this side nav menu is being toggled upon a user gesture.
     * Cancellation of this event stops the user-initiated action of toggling this side nav menu.
     */

  }, {
    kind: "get",
    static: true,
    key: "eventBeforeToggle",
    value: function eventBeforeToggle() {
      return `${prefix}-side-nav-menu-beingtoggled`;
    }
    /**
     * The name of the custom event fired after this side nav menu is toggled upon a user gesture.
     */

  }, {
    kind: "get",
    static: true,
    key: "eventToggle",
    value: function eventToggle() {
      return `${prefix}-side-nav-menu-toggled`;
    }
  }, {
    kind: "field",
    static: true,
    key: "styles",

    value() {
      return styles$2;
    }

  }]
};
}, FocusMixin(LitElement));

const styles = i$2`.bx--text-truncate--end{display:inline-block;overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap}.bx--text-truncate--front{display:inline-block;overflow:hidden;width:100%;direction:rtl;text-overflow:ellipsis;white-space:nowrap}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;border:0;margin:0;font:inherit;font-size:100%;vertical-align:baseline}button,select,input,textarea{border-radius:0;font-family:inherit}input[type=text]::-ms-clear{display:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1}sup{vertical-align:super}sub{vertical-align:sub}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote::before,blockquote::after,q::before,q::after{content:""}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}button{margin:0}html{font-size:100%}body{font-weight:400;font-family:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}code{font-family:'IBM Plex Mono','Menlo','DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace}strong{font-weight:600}@media screen and (-ms-high-contrast:active){svg{fill:ButtonText}}h1{font-size:2rem;font-weight:300;line-height:1.199;letter-spacing:0}h2{font-size:2rem;font-weight:400;line-height:1.25;letter-spacing:0}h3{font-size:1.75rem;font-weight:400;line-height:1.29;letter-spacing:0}h4{font-size:1.25rem;font-weight:400;line-height:1.4;letter-spacing:0}h5{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0}h6{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px}p{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}a{color:#0f62fe}em{font-style:italic}@keyframes skeleton{0%{opacity:.3;transform:scaleX(0);transform-origin:left}20%{opacity:1;transform:scaleX(1);transform-origin:left}28%{transform:scaleX(1);transform-origin:right}51%{transform:scaleX(0);transform-origin:right}58%{transform:scaleX(0);transform-origin:right}82%{transform:scaleX(1);transform-origin:right}83%{transform:scaleX(1);transform-origin:left}96%{transform:scaleX(0);transform-origin:left}100%{opacity:.3;transform:scaleX(0);transform-origin:left}}.bx--header,:host(bx-header){position:fixed;z-index:8000;top:0;right:0;left:0;display:flex;height:3rem;align-items:center;border-bottom:1px solid #393939;background-color:#161616}.bx--header__action{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:0;cursor:pointer;width:100%;width:3rem;height:3rem;border:.0625rem solid transparent;transition:background-color 110ms,border-color 110ms}.bx--header__action *,.bx--header__action *::before,.bx--header__action *::after{box-sizing:inherit}.bx--header__action::-moz-focus-inner{border:0}.bx--header__action>svg.bx--navigation-menu-panel-collapse-icon,.bx--header__action--active>svg.bx--navigation-menu-panel-expand-icon{display:none}.bx--header__action--active>svg.bx--navigation-menu-panel-collapse-icon{display:inline}.bx--header__action:hover{background-color:#353535}.bx--header__action--active{border-right:1px solid #393939;border-bottom:1px solid #161616;border-left:1px solid #393939}.bx--header__action:focus{border-color:#fff;outline:0}.bx--header__action:active{background-color:#393939}.bx--header__action.bx--btn--icon-only.bx--tooltip__trigger{justify-content:center}.bx--header__action>svg{fill:#fff}.bx--header__menu-trigger>svg{fill:#f4f4f4}.bx--header__menu-trigger:hover{fill:#2c2c2c}.bx--header__menu-toggle{display:flex;align-items:center;justify-content:center}@media(min-width:66rem){.bx--header__menu-toggle__hidden{display:none}}a.bx--header__name{font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px;display:flex;height:100%;align-items:center;padding:0 2rem 0 1rem;border:.125rem solid transparent;font-weight:600;letter-spacing:.1px;line-height:1.25rem;outline:0;text-decoration:none;transition:border-color 110ms;user-select:none}a.bx--header__name:focus{border-color:#fff}.bx--header__name--prefix{font-weight:400}a.bx--header__name,a.bx--header__name:hover{color:#f4f4f4}.bx--header__menu-toggle:not(.bx--header__menu-toggle__hidden) ~ .bx--header__name{padding-left:.5rem}.bx--header__nav,:host(bx-header-nav){position:relative;display:none;height:100%;padding-left:1rem}@media(min-width:66rem){.bx--header__nav,:host(bx-header-nav){display:block}}.bx--header__nav::before{position:absolute;top:50%;left:0;display:block;width:.0625rem;height:1.5rem;background-color:#393939;content:"";transform:translateY(-50%)}.bx--header__menu-bar{display:flex;height:100%;padding:0;margin:0;list-style:none}a.bx--header__menu-item{position:relative;display:flex;height:100%;align-items:center;padding:0 1rem;border:2px solid transparent;color:#c6c6c6;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.125rem;text-decoration:none;transition:background-color 110ms,border-color 110ms,color 110ms;user-select:none}a.bx--header__menu-item:hover{background-color:#2c2c2c;color:#f4f4f4}.bx--header__action:active,a.bx--header__menu-item:active{background-color:#393939;color:#f4f4f4}a.bx--header__menu-item:focus{border-color:#fff;color:#f4f4f4;outline:0}a.bx--header__menu-item:hover>svg,a.bx--header__menu-item:active>svg,a.bx--header__menu-item:focus>svg{fill:#f4f4f4}a.bx--header__menu-item[aria-current=page]::after,.bx--header__menu-item--current::after{position:absolute;top:0;right:0;bottom:-2px;left:0;width:100%;border-bottom:3px solid #4589ff;content:""}a.bx--header__menu-item[aria-current=page]:focus::after,.bx--header__menu-item--current:focus::after{border:0}a.bx--header__menu-item[aria-current=page]:focus,a.bx--header__menu-item.bx--header__menu-item--current:focus{border:2px solid #fff}.bx--header__submenu,:host(bx-header-menu),:host(qiskit-header-menu-mega),:host(qiskit-header-menu){position:relative}.bx--header__submenu--current::after{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;border-bottom:3px solid #0f62fe;content:""}.bx--header__submenu--current:focus{border:2px solid #0f62fe}.bx--header__submenu--current:focus::after{border:0}.bx--header__menu-title[aria-haspopup=true]{position:relative}.bx--header__menu-title[aria-expanded=true]{z-index:8001;background-color:#262626;color:#fff}.bx--header__menu-title[aria-expanded=true]>.bx--header__menu-arrow{transform:rotate(180deg)}.bx--header__menu{display:none;padding:0;margin:0;list-style:none}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu{position:absolute;z-index:8000;bottom:0;left:0;display:flex;width:12.5rem;flex-direction:column;background-color:#262626;box-shadow:0 4px 8px 0 rgba(0,0,0,0.5);transform:translateY(100%)}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:hover{background-color:#353535}.bx--header__menu-title[aria-expanded=true]+.bx--header__menu .bx--header__menu-item:active{background-color:#393939}.bx--header__menu .bx--header__menu-item{height:3rem}.bx--header__menu .bx--header__menu-item:hover{background-color:#262626;color:#f4f4f4}.bx--header__menu-arrow{margin-left:.5rem;fill:#c6c6c6;transition:transform 110ms,fill 110ms}.bx--header__global{display:flex;height:100%;flex:1 1 0%;justify-content:flex-end}.bx--skip-to-content{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:-1px;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}.bx--skip-to-content:focus{z-index:9999;top:0;left:0;display:flex;width:auto;height:3rem;align-items:center;padding:0 1rem;border:4px solid #0f62fe;background-color:#161616;clip:auto;color:#f4f4f4;outline:0}:host(bx-header-nav) .bx-ce--header__divider{position:absolute;left:0;top:50%;transform:translateY(-50%);height:1.5rem;width:.0625rem;background-color:#393939}:host(bx-header-nav-item){outline:0}:host(bx-header-menu),:host(qiskit-header-menu-mega),:host(qiskit-header-menu){outline:0}:host(bx-header-menu-item){outline:0}:host(bx-header-menu-item) a.bx--header__menu-item{height:3rem}:host(bx-header-menu-item) a.bx--header__menu-item:hover{background-color:#353535;color:#f4f4f4}:host(bx-header-menu-item) a.bx--header__menu-item:active{background-color:#393939}:host(bx-header-menu-button),:host(qiskit-header-menu-button){display:inline-block;display:content;outline:0}@media(min-width:66rem){:host(bx-header-menu-button),:host(qiskit-header-menu-button){display:none}}:host(bx-header-menu-button[collapse-mode=fixed]){display:none}@media(min-width:66rem){:host(bx-header-menu-button[collapse-mode=rail]){display:block}}:host(bx-header-name){display:inline;display:content;height:100%}.bx--assistive-text,.bx--visually-hidden{position:absolute;overflow:hidden;width:1px;height:1px;padding:0;border:0;margin:-1px;clip:rect(0,0,0,0);visibility:inherit;white-space:nowrap}.bx--body{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;font-size:.875rem;font-weight:400;line-height:1.29;letter-spacing:.16px;background-color:#fff;color:#161616;line-height:1}.bx--body *,.bx--body *::before,.bx--body *::after{box-sizing:inherit}.bx--side-nav,:host(bx-side-nav){position:fixed;z-index:8000;top:0;bottom:0;left:0;overflow:hidden;width:3rem;max-width:16rem;background-color:#fff;color:#525252;transition:width .11s cubic-bezier(0.2,0,1,0.9);will-change:width}.bx--side-nav--ux,:host(bx-side-nav){top:3rem;width:16rem}@media(max-width:65.98rem){.bx--side-nav--ux,:host(bx-side-nav){width:0}}.bx--side-nav--rail{width:3rem}.bx--side-nav--hidden{width:0}.bx--side-nav.bx--side-nav--rail:not(.bx--side-nav--fixed):hover,.bx--side-nav--expanded,:host(bx-side-nav[expanded]),:host(bx-side-nav[collapse-mode][expanded]){width:16rem}.bx--side-nav__overlay{position:fixed;top:3rem;left:0;width:0;height:0;background-color:transparent;opacity:0;transition:opacity 240ms cubic-bezier(0.2,0,0.38,0.9),background-color 240ms cubic-bezier(0.2,0,0.38,0.9)}@media(max-width:65.98rem){.bx--side-nav__overlay-active{width:100vw;height:100vh;background-color:rgba(22,22,22,0.5);opacity:1;transition:opacity 240ms cubic-bezier(0.2,0,0.38,0.9),background-color 240ms cubic-bezier(0.2,0,0.38,0.9)}}.bx--header ~ .bx--side-nav,.bx--header ~ :host(bx-side-nav),:host(bx-header) ~ .bx--side-nav,:host(bx-header) ~ :host(bx-side-nav){top:3rem;height:calc(100% - 48px)}.bx--side-nav--fixed{width:16rem}.bx--side-nav--collapsed{width:16rem;transform:translateX(-16rem)}.bx--side-nav__navigation,:host(bx-side-nav){display:flex;height:100%;flex-direction:column}.bx--side-nav__header{display:flex;width:100%;max-width:100%;height:3rem;border-bottom:1px solid #393939}.bx--side-nav:hover .bx--side-nav__header,.bx--side-nav--fixed .bx--side-nav__header,.bx--side-nav--expanded .bx--side-nav__header,:host(bx-side-nav[expanded]) .bx--side-nav__header{height:auto}.bx--side-nav--ux .bx--side-nav__header,:host(bx-side-nav) .bx--side-nav__header{height:auto}.bx--side-nav__details{display:flex;min-width:0;flex:1;flex-direction:column;padding-right:1rem;opacity:0;visibility:hidden}.bx--side-nav:hover .bx--side-nav__details,.bx--side-nav--fixed .bx--side-nav__details,.bx--side-nav--expanded .bx--side-nav__details,:host(bx-side-nav[expanded]) .bx--side-nav__details{visibility:inherit;opacity:1}.bx--side-nav--ux .bx--side-nav__details,:host(bx-side-nav) .bx--side-nav__details{opacity:1;visibility:inherit}.bx--side-nav__title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1rem;font-size:.875rem;font-weight:600;letter-spacing:.1px;user-select:none}.bx--side-nav__title,.bx--side-nav__select{padding-left:.5rem}.bx--side-nav__switcher{position:relative;display:flex;align-items:center;justify-content:space-between}.bx--side-nav__switcher-chevron{position:absolute;top:0;right:.5rem;bottom:0;display:flex;align-items:center;fill:#525252}.bx--side-nav__select{outline:2px solid transparent;outline-offset:-2px;min-width:0;height:2rem;flex:1 1 0%;padding-right:2rem;border:0;appearance:none;background-color:#161616;border-radius:0;color:#f4f4f4;cursor:pointer;font-size:.75rem;transition:outline 110ms}.bx--side-nav__select:focus{outline:2px solid #0f62fe;outline-offset:-2px}@media screen and (prefers-contrast){.bx--side-nav__select:focus{outline-style:dotted}}.bx--side-nav__footer{width:100%;flex:0 0 3rem;background-color:#fff}.bx--side-nav__toggle{outline:2px solid transparent;outline-offset:-2px;box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:0;cursor:pointer;width:100%;height:100%;padding-left:1rem;text-align:left;transition:outline 110ms}.bx--side-nav__toggle *,.bx--side-nav__toggle *::before,.bx--side-nav__toggle *::after{box-sizing:inherit}.bx--side-nav__toggle::-moz-focus-inner{border:0}.bx--side-nav__toggle:focus{outline:2px solid #0f62fe;outline-offset:-2px}@media screen and (prefers-contrast){.bx--side-nav__toggle:focus{outline-style:dotted}}.bx--side-nav__items,:host(bx-side-nav-items){overflow:hidden;flex:1 1 0%;padding:1rem 0 0}.bx--side-nav:hover .bx--side-nav__items,.bx--side-nav:hover :host(bx-side-nav-items),.bx--side-nav--fixed .bx--side-nav__items,.bx--side-nav--fixed :host(bx-side-nav-items),.bx--side-nav--expanded .bx--side-nav__items,.bx--side-nav--expanded :host(bx-side-nav-items),:host(bx-side-nav[expanded]) .bx--side-nav__items,:host(bx-side-nav[expanded]) :host(bx-side-nav-items){overflow-y:auto}.bx--side-nav--ux .bx--side-nav__items,.bx--side-nav--ux :host(bx-side-nav-items),:host(bx-side-nav) .bx--side-nav__items,:host(bx-side-nav) :host(bx-side-nav-items){overflow-y:auto}.bx--side-nav__item,:host(bx-side-nav-menu),:host(bx-side-nav-link){overflow:hidden;width:auto;height:auto}.bx--side-nav--ux .bx--side-nav__item,.bx--side-nav--ux :host(bx-side-nav-menu),.bx--side-nav--ux :host(bx-side-nav-link),:host(bx-side-nav) .bx--side-nav__item,:host(bx-side-nav) :host(bx-side-nav-menu),:host(bx-side-nav) :host(bx-side-nav-link){width:auto;height:auto}.bx--side-nav__item:not(.bx--side-nav__item--active):hover .bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__submenu:hover,.bx--side-nav__item:not(.bx--side-nav__item--active):hover :not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__submenu:hover,.bx--side-nav__item:not(.bx--side-nav__item--active):hover :not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__submenu:hover,.bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__link:hover,:not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__link:hover,:not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__link:hover,.bx--side-nav__menu a.bx--side-nav__link:not(.bx--side-nav__link--current):not([aria-current=page]):hover,.bx--side-nav a.bx--header__menu-item:hover,:host(bx-side-nav) a.bx--header__menu-item:hover,.bx--side-nav .bx--header__menu-title[aria-expanded=true]:hover,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav__item:not(.bx--side-nav__item--active)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-menu)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-link)>.bx--side-nav__link:hover>span,.bx--side-nav__item:not(.bx--side-nav__item--active) .bx--side-nav__menu-item>.bx--side-nav__link:hover>span,.bx--side-nav__item:not(.bx--side-nav__item--active) :host(bx-side-nav-menu-item)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-menu) .bx--side-nav__menu-item>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-menu) :host(bx-side-nav-menu-item)>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-link) .bx--side-nav__menu-item>.bx--side-nav__link:hover>span,:not(.bx--side-nav__item--active):host(bx-side-nav-link) :host(bx-side-nav-menu-item)>.bx--side-nav__link:hover>span{color:#161616}.bx--side-nav__item--large{height:3rem}.bx--side-nav__divider,:host(bx-side-nav-divider){height:1px;margin:.5rem 1rem;background-color:#e0e0e0}.bx--side-nav__submenu{box-sizing:border-box;padding:0;border:0;margin:0;font-family:inherit;font-size:100%;vertical-align:baseline;display:inline-block;padding:0;border:0;appearance:none;background:0;cursor:pointer;width:100%;font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px;outline:2px solid transparent;outline-offset:-2px;display:flex;height:2rem;align-items:center;padding:0 1rem;color:#525252;transition:color 110ms,background-color 110ms,outline 110ms;user-select:none}.bx--side-nav__submenu *,.bx--side-nav__submenu *::before,.bx--side-nav__submenu *::after{box-sizing:inherit}.bx--side-nav__submenu::-moz-focus-inner{border:0}.bx--side-nav__submenu:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav__submenu:focus{outline:2px solid #0f62fe;outline-offset:-2px}@media screen and (prefers-contrast){.bx--side-nav__submenu:focus{outline-style:dotted}}.bx--side-nav__submenu-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left}.bx--side-nav__icon.bx--side-nav__submenu-chevron{display:flex;flex:1;justify-content:flex-end}.bx--side-nav__submenu-chevron>svg{width:1rem;height:1rem;transition:transform 110ms}.bx--side-nav__submenu[aria-expanded=true] .bx--side-nav__submenu-chevron>svg{transform:rotate(180deg)}.bx--side-nav__item--large .bx--side-nav__submenu{height:3rem}.bx--side-nav__item--active .bx--side-nav__submenu:hover,:host(bx-side-nav-menu[active]) .bx--side-nav__submenu:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav__item--active .bx--side-nav__submenu[aria-expanded=false],:host(bx-side-nav-menu[active]) .bx--side-nav__submenu[aria-expanded=false]{position:relative;background-color:#e5e5e5;color:#161616}.bx--side-nav__item--active .bx--side-nav__submenu[aria-expanded=false]::before,:host(bx-side-nav-menu[active]) .bx--side-nav__submenu[aria-expanded=false]::before{position:absolute;top:0;bottom:0;left:0;width:4px;background-color:#0f62fe;content:""}.bx--side-nav__item--active .bx--side-nav__submenu-title,:host(bx-side-nav-menu[active]) .bx--side-nav__submenu-title{color:#161616;font-weight:600}.bx--side-nav__menu{display:block;max-height:0;visibility:hidden}.bx--side-nav__submenu[aria-expanded=true]+.bx--side-nav__menu{max-height:93.75rem;visibility:inherit}.bx--side-nav__menu a.bx--side-nav__link{height:2rem;min-height:2rem;padding-left:2rem;font-weight:400}.bx--side-nav__item.bx--side-nav__item--icon a.bx--side-nav__link{padding-left:4.5rem}.bx--side-nav__menu a.bx--side-nav__link--current,.bx--side-nav__menu a.bx--side-nav__link[aria-current=page],a.bx--side-nav__link--current{background-color:#e0e0e0}.bx--side-nav__menu a.bx--side-nav__link--current>span,.bx--side-nav__menu a.bx--side-nav__link[aria-current=page]>span,a.bx--side-nav__link--current>span{color:#161616;font-weight:600}a.bx--side-nav__link,.bx--side-nav a.bx--header__menu-item,:host(bx-side-nav) a.bx--header__menu-item,.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu{outline:2px solid transparent;outline-offset:-2px;font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px;position:relative;display:flex;min-height:2rem;align-items:center;padding:0 1rem;text-decoration:none;transition:color 110ms,background-color 110ms,outline 110ms}.bx--side-nav__item--large a.bx--side-nav__link{height:3rem}a.bx--side-nav__link>.bx--side-nav__link-text,.bx--side-nav a.bx--header__menu-item .bx--text-truncate-end,:host(bx-side-nav) a.bx--header__menu-item .bx--text-truncate-end{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#525252;font-size:.875rem;letter-spacing:.1px;line-height:1.25rem;user-select:none}a.bx--side-nav__link:focus,.bx--side-nav a.bx--header__menu-item:focus,:host(bx-side-nav) a.bx--header__menu-item:focus{outline:2px solid #0f62fe;outline-offset:-2px}@media screen and (prefers-contrast){a.bx--side-nav__link:focus,.bx--side-nav a.bx--header__menu-item:focus,:host(bx-side-nav) a.bx--header__menu-item:focus{outline-style:dotted}}a.bx--side-nav__link[aria-current=page],a.bx--side-nav__link--current{background-color:#e5e5e5;font-weight:600}a.bx--side-nav__link[aria-current=page] .bx--side-nav__link-text,a.bx--side-nav__link--current .bx--side-nav__link-text{color:#161616}a.bx--side-nav__link[aria-current=page]::before,a.bx--side-nav__link--current::before{position:absolute;top:0;bottom:0;left:0;width:4px;background-color:#0f62fe;content:""}.bx--side-nav__icon{display:flex;flex:0 0 1rem;align-items:center;justify-content:center}.bx--side-nav__icon:not(.bx--side-nav__submenu-chevron){margin-right:1.5rem}.bx--side-nav__icon>svg{width:1rem;height:1rem;fill:#525252}.bx--side-nav__icon>svg.bx--side-nav-collapse-icon{display:none}.bx--side-nav--expanded .bx--side-nav__icon>svg.bx--side-nav-expand-icon,:host(bx-side-nav[expanded]) .bx--side-nav__icon>svg.bx--side-nav-expand-icon{display:none}.bx--side-nav--expanded .bx--side-nav__icon>svg.bx--side-nav-collapse-icon,:host(bx-side-nav[expanded]) .bx--side-nav__icon>svg.bx--side-nav-collapse-icon{display:block}.bx--side-nav--fixed a.bx--side-nav__link,.bx--side-nav--fixed .bx--side-nav__submenu{padding-left:1rem}.bx--side-nav--fixed .bx--side-nav__item:not(.bx--side-nav__item--icon) .bx--side-nav__menu a.bx--side-nav__link,.bx--side-nav--fixed :not(.bx--side-nav__item--icon):host(bx-side-nav-menu) .bx--side-nav__menu a.bx--side-nav__link,.bx--side-nav--fixed :not(.bx--side-nav__item--icon):host(bx-side-nav-link) .bx--side-nav__menu a.bx--side-nav__link{padding-left:2rem}@media(max-width:65.98rem){.bx--side-nav .bx--header__nav,:host(bx-side-nav) .bx--header__nav,.bx--side-nav:host(bx-header-nav),:host(bx-side-nav):host(bx-header-nav){display:block}}.bx--side-nav__header-navigation{display:none}@media(max-width:65.98rem){.bx--side-nav__header-navigation{position:relative;display:block;margin-bottom:2rem}}.bx--side-nav__header-divider::after{position:absolute;bottom:-1rem;left:1rem;width:calc(100% - 32px);height:.0625rem;background:#e0e0e0;content:""}.bx--side-nav a.bx--header__menu-item,:host(bx-side-nav) a.bx--header__menu-item{justify-content:space-between;color:#525252;white-space:nowrap}.bx--side-nav a.bx--header__menu-item[aria-expanded=true],:host(bx-side-nav) a.bx--header__menu-item[aria-expanded=true]{background-color:transparent}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu{bottom:inherit;width:100%;padding:0;background-color:transparent;box-shadow:none;transform:none}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu li,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu li{width:100%}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item{padding-left:4.25rem;font-weight:400}.bx--side-nav .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item:hover,:host(bx-side-nav) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu a.bx--header__menu-item:hover{background-color:#e5e5e5;color:#161616}.bx--side-nav .bx--header__menu a.bx--header__menu-item,:host(bx-side-nav) .bx--header__menu a.bx--header__menu-item{height:inherit}.bx--side-nav a.bx--header__menu-item:hover .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:focus .bx--header__menu-arrow,.bx--side-nav .bx--header__menu-arrow,:host(bx-side-nav) .bx--header__menu-arrow{fill:#525252}@media screen and (-ms-high-contrast:active),(forced-colors:active),(prefers-contrast){.bx--side-nav__icon>svg,.bx--side-nav a.bx--header__menu-item:hover .bx--header__menu-arrow,.bx--side-nav a.bx--header__menu-item:focus .bx--header__menu-arrow,.bx--side-nav .bx--header__menu-arrow,:host(bx-side-nav) .bx--header__menu-arrow{fill:ButtonText}}:host(bx-side-nav){top:0}:host(bx-side-nav[collapse-mode=fixed]){width:16rem}:host(bx-side-nav[collapse-mode=rail]){width:3rem}:host(bx-side-nav[collapse-mode=rail]):hover{width:16rem}:host(bx-side-nav[usage-mode=header-nav]),:host(bx-side-nav[collapse-mode][usage-mode=header-nav]){width:0}@media(max-width:65.98rem){:host(bx-side-nav[expanded][usage-mode=header-nav]),:host(bx-side-nav[collapse-mode][expanded][usage-mode=header-nav]){width:16rem}}:host(bx-side-nav-link){display:block;outline:0;width:auto;height:auto}:host(bx-side-nav-link) .bx--side-nav__icon{color:#525252}:host(bx-side-nav-link) .bx--side-nav__icon[hidden]{display:none}:host(bx-side-nav-divider){display:block}:host(bx-side-nav-menu){display:block;outline:0;width:auto;height:auto}:host(bx-side-nav-menu) .bx--side-nav__icon[hidden]{display:none}:host(bx-side-nav-menu[active]){background-color:#e5e5e5;color:#161616;position:relative}:host(bx-side-nav-menu[active])::before{content:"";position:absolute;top:0;bottom:0;left:0;width:4px;background-color:#0f62fe}:host(bx-side-nav-menu[active][expanded]){background-color:inherit;color:inherit;position:inherit}:host(bx-side-nav-menu[active][expanded])::before{content:none}:host(bx-side-nav-menu-item){display:block;outline:0;width:auto;height:auto}:host(bx-side-nav-menu-item) a.bx--side-nav__link{height:2rem;min-height:2rem;padding-left:2rem;font-weight:400}:host(bx-side-nav-menu-item[parent-has-icon]) a.bx--side-nav__link{padding-left:4.5rem}:host(bx-side-nav-item) .bx--side-nav__link:hover,:host(bx-side-nav-menu) .bx--side-nav__submenu:hover,:host(bx-side-nav-menu-item) .bx--side-nav__link:hover{background-color:#e5e5e5;color:#161616}:host{--cds-interactive-01:#0f62fe;--cds-interactive-02:#393939;--cds-interactive-03:#0f62fe;--cds-interactive-04:#0f62fe;--cds-ui-background:#fff;--cds-ui-01:#f4f4f4;--cds-ui-02:#fff;--cds-ui-03:#e0e0e0;--cds-ui-04:#8d8d8d;--cds-ui-05:#161616;--cds-text-01:#161616;--cds-text-02:#525252;--cds-text-03:#a8a8a8;--cds-text-04:#fff;--cds-text-05:#6f6f6f;--cds-text-error:#da1e28;--cds-icon-01:#161616;--cds-icon-02:#525252;--cds-icon-03:#fff;--cds-link-01:#0f62fe;--cds-link-02:#0043ce;--cds-inverse-link:#78a9ff;--cds-field-01:#f4f4f4;--cds-field-02:#fff;--cds-inverse-01:#fff;--cds-inverse-02:#393939;--cds-support-01:#da1e28;--cds-support-02:#198038;--cds-support-03:#f1c21b;--cds-support-04:#0043ce;--cds-inverse-support-01:#fa4d56;--cds-inverse-support-02:#42be65;--cds-inverse-support-03:#f1c21b;--cds-inverse-support-04:#4589ff;--cds-overlay-01:rgba(22,22,22,0.5);--cds-danger-01:#da1e28;--cds-danger-02:#da1e28;--cds-focus:#0f62fe;--cds-inverse-focus-ui:#fff;--cds-hover-primary:#0353e9;--cds-active-primary:#002d9c;--cds-hover-primary-text:#0043ce;--cds-hover-secondary:#4c4c4c;--cds-active-secondary:#6f6f6f;--cds-hover-tertiary:#0353e9;--cds-active-tertiary:#002d9c;--cds-hover-ui:#e5e5e5;--cds-hover-light-ui:#e5e5e5;--cds-hover-selected-ui:#cacaca;--cds-active-ui:#c6c6c6;--cds-active-light-ui:#c6c6c6;--cds-selected-ui:#e0e0e0;--cds-selected-light-ui:#e0e0e0;--cds-inverse-hover-ui:#4c4c4c;--cds-hover-danger:#b81921;--cds-active-danger:#750e13;--cds-hover-row:#e5e5e5;--cds-visited-link:#8a3ffc;--cds-disabled-01:#f4f4f4;--cds-disabled-02:#c6c6c6;--cds-disabled-03:#8d8d8d;--cds-highlight:#d0e2ff;--cds-decorative-01:#e0e0e0;--cds-button-separator:#e0e0e0;--cds-skeleton-01:#e5e5e5;--cds-skeleton-02:#c6c6c6;--cds-background:#fff;--cds-layer:#f4f4f4;--cds-layer-accent:#e0e0e0;--cds-layer-accent-hover:#d1d1d1;--cds-layer-accent-active:#a8a8a8;--cds-field:#f4f4f4;--cds-background-inverse:#393939;--cds-background-brand:#0f62fe;--cds-interactive:#0f62fe;--cds-border-subtle:#e0e0e0;--cds-border-strong:#8d8d8d;--cds-border-inverse:#161616;--cds-border-interactive:#0f62fe;--cds-text-primary:#161616;--cds-text-secondary:#525252;--cds-text-placeholder:#a8a8a8;--cds-text-helper:#6f6f6f;--cds-text-on-color:#fff;--cds-text-inverse:#fff;--cds-link-primary:#0f62fe;--cds-link-secondary:#0043ce;--cds-link-visited:#8a3ffc;--cds-link-inverse:#78a9ff;--cds-icon-primary:#161616;--cds-icon-secondary:#525252;--cds-icon-on-color:#fff;--cds-icon-inverse:#fff;--cds-support-error:#da1e28;--cds-support-success:#198038;--cds-support-warning:#f1c21b;--cds-support-info:#0043ce;--cds-support-error-inverse:#fa4d56;--cds-support-success-inverse:#42be65;--cds-support-warning-inverse:#f1c21b;--cds-support-info-inverse:#4589ff;--cds-overlay:rgba(22,22,22,0.5);--cds-toggle-off:#8d8d8d;--cds-shadow:rgba(0,0,0,0.3);--cds-button-primary:#0f62fe;--cds-button-secondary:#393939;--cds-button-tertiary:#0f62fe;--cds-button-danger-primary:#da1e28;--cds-button-danger-secondary:#da1e28;--cds-background-active:#c6c6c6;--cds-layer-active:#c6c6c6;--cds-button-danger-active:#750e13;--cds-button-primary-active:#002d9c;--cds-button-secondary-active:#6f6f6f;--cds-button-tertiary-active:#002d9c;--cds-focus-inset:#fff;--cds-focus-inverse:#fff;--cds-background-hover:#e5e5e5;--cds-layer-hover:#e5e5e5;--cds-field-hover:#e5e5e5;--cds-background-inverse-hover:#4c4c4c;--cds-link-primary-hover:#0043ce;--cds-button-danger-hover:#b81921;--cds-button-primary-hover:#0353e9;--cds-button-secondary-hover:#4c4c4c;--cds-button-tertiary-hover:#0353e9;--cds-background-selected:#e0e0e0;--cds-background-selected-hover:#cacaca;--cds-layer-selected:#e0e0e0;--cds-layer-selected-hover:#cacaca;--cds-layer-selected-inverse:#161616;--cds-border-subtle-selected:#c6c6c6;--cds-border-disabled:#f4f4f4;--cds-text-disabled:#c6c6c6;--cds-button-disabled:#c6c6c6;--cds-icon-disabled:#c6c6c6;--cds-text-on-color-disabled:#8d8d8d;--cds-icon-on-color-disabled:#8d8d8d;--cds-layer-selected-disabled:#8d8d8d;--cds-skeleton-background:#e5e5e5;--cds-skeleton-element:#c6c6c6;--cds-brand-01:#0f62fe;--cds-brand-02:#393939;--cds-brand-03:#0f62fe;--cds-active-01:#c6c6c6;--cds-hover-field:#e5e5e5;--cds-danger:#da1e28;--cds-caption-01-font-size:.75rem;--cds-caption-01-font-weight:400;--cds-caption-01-line-height:1.33333;--cds-caption-01-letter-spacing:.32px;--cds-caption-02-font-size:.875rem;--cds-caption-02-font-weight:400;--cds-caption-02-line-height:1.28572;--cds-caption-02-letter-spacing:.32px;--cds-label-01-font-size:.75rem;--cds-label-01-font-weight:400;--cds-label-01-line-height:1.33333;--cds-label-01-letter-spacing:.32px;--cds-label-02-font-size:.875rem;--cds-label-02-font-weight:400;--cds-label-02-line-height:1.28572;--cds-label-02-letter-spacing:.16px;--cds-helper-text-01-font-size:.75rem;--cds-helper-text-01-line-height:1.33333;--cds-helper-text-01-letter-spacing:.32px;--cds-helper-text-02-font-size:.875rem;--cds-helper-text-02-line-height:1.28572;--cds-helper-text-02-letter-spacing:.16px;--cds-body-short-01-font-size:.875rem;--cds-body-short-01-font-weight:400;--cds-body-short-01-line-height:1.28572;--cds-body-short-01-letter-spacing:.16px;--cds-body-long-01-font-size:.875rem;--cds-body-long-01-font-weight:400;--cds-body-long-01-line-height:1.42857;--cds-body-long-01-letter-spacing:.16px;--cds-body-short-02-font-size:1rem;--cds-body-short-02-font-weight:400;--cds-body-short-02-line-height:1.375;--cds-body-short-02-letter-spacing:0;--cds-body-long-02-font-size:1rem;--cds-body-long-02-font-weight:400;--cds-body-long-02-line-height:1.5;--cds-body-long-02-letter-spacing:0;--cds-code-01-font-family:'IBM Plex Mono','Menlo','DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace;--cds-code-01-font-size:.75rem;--cds-code-01-font-weight:400;--cds-code-01-line-height:1.33333;--cds-code-01-letter-spacing:.32px;--cds-code-02-font-family:'IBM Plex Mono','Menlo','DejaVu Sans Mono','Bitstream Vera Sans Mono',Courier,monospace;--cds-code-02-font-size:.875rem;--cds-code-02-font-weight:400;--cds-code-02-line-height:1.42857;--cds-code-02-letter-spacing:.32px;--cds-heading-01-font-size:.875rem;--cds-heading-01-font-weight:600;--cds-heading-01-line-height:1.42857;--cds-heading-01-letter-spacing:.16px;--cds-productive-heading-01-font-size:.875rem;--cds-productive-heading-01-font-weight:600;--cds-productive-heading-01-line-height:1.28572;--cds-productive-heading-01-letter-spacing:.16px;--cds-heading-02-font-size:1rem;--cds-heading-02-font-weight:600;--cds-heading-02-line-height:1.5;--cds-heading-02-letter-spacing:0;--cds-productive-heading-02-font-size:1rem;--cds-productive-heading-02-font-weight:600;--cds-productive-heading-02-line-height:1.375;--cds-productive-heading-02-letter-spacing:0;--cds-productive-heading-03-font-size:1.25rem;--cds-productive-heading-03-font-weight:400;--cds-productive-heading-03-line-height:1.4;--cds-productive-heading-03-letter-spacing:0;--cds-productive-heading-04-font-size:1.75rem;--cds-productive-heading-04-font-weight:400;--cds-productive-heading-04-line-height:1.28572;--cds-productive-heading-04-letter-spacing:0;--cds-productive-heading-05-font-size:2rem;--cds-productive-heading-05-font-weight:400;--cds-productive-heading-05-line-height:1.25;--cds-productive-heading-05-letter-spacing:0;--cds-productive-heading-06-font-size:2.625rem;--cds-productive-heading-06-font-weight:300;--cds-productive-heading-06-line-height:1.199;--cds-productive-heading-06-letter-spacing:0;--cds-productive-heading-07-font-size:3.375rem;--cds-productive-heading-07-font-weight:300;--cds-productive-heading-07-line-height:1.199;--cds-productive-heading-07-letter-spacing:0;--cds-expressive-heading-01-font-size:.875rem;--cds-expressive-heading-01-font-weight:600;--cds-expressive-heading-01-line-height:1.25;--cds-expressive-heading-01-letter-spacing:.16px;--cds-expressive-heading-02-font-size:1rem;--cds-expressive-heading-02-font-weight:600;--cds-expressive-heading-02-line-height:1.5;--cds-expressive-heading-02-letter-spacing:0;--cds-expressive-heading-03-font-size:1.25rem;--cds-expressive-heading-03-font-weight:400;--cds-expressive-heading-03-line-height:1.4;--cds-expressive-heading-03-letter-spacing:0;--cds-expressive-heading-04-font-size:1.75rem;--cds-expressive-heading-04-font-weight:400;--cds-expressive-heading-04-line-height:1.28572;--cds-expressive-heading-04-letter-spacing:0;--cds-expressive-heading-05-font-size:2rem;--cds-expressive-heading-05-font-weight:400;--cds-expressive-heading-05-line-height:1.25;--cds-expressive-heading-05-letter-spacing:0;--cds-expressive-heading-06-font-size:2rem;--cds-expressive-heading-06-font-weight:600;--cds-expressive-heading-06-line-height:1.25;--cds-expressive-heading-06-letter-spacing:0;--cds-expressive-paragraph-01-font-size:1.5rem;--cds-expressive-paragraph-01-font-weight:300;--cds-expressive-paragraph-01-line-height:1.334;--cds-expressive-paragraph-01-letter-spacing:0;--cds-quotation-01-font-family:'IBM Plex Serif','Georgia',Times,serif;--cds-quotation-01-font-size:1.25rem;--cds-quotation-01-font-weight:400;--cds-quotation-01-line-height:1.3;--cds-quotation-01-letter-spacing:0;--cds-quotation-02-font-family:'IBM Plex Serif','Georgia',Times,serif;--cds-quotation-02-font-size:2rem;--cds-quotation-02-font-weight:300;--cds-quotation-02-line-height:1.25;--cds-quotation-02-letter-spacing:0;--cds-display-01-font-size:2.625rem;--cds-display-01-font-weight:300;--cds-display-01-line-height:1.19;--cds-display-01-letter-spacing:0;--cds-display-02-font-size:2.625rem;--cds-display-02-font-weight:600;--cds-display-02-line-height:1.19;--cds-display-02-letter-spacing:0;--cds-display-03-font-size:2.625rem;--cds-display-03-font-weight:300;--cds-display-03-line-height:1.19;--cds-display-03-letter-spacing:0;--cds-display-04-font-size:2.625rem;--cds-display-04-font-weight:600;--cds-display-04-line-height:1.19;--cds-display-04-letter-spacing:0;--cds-legal-01-font-size:.75rem;--cds-legal-01-font-weight:400;--cds-legal-01-line-height:1.33333;--cds-legal-01-letter-spacing:.32px;--cds-legal-02-font-size:.875rem;--cds-legal-02-font-weight:400;--cds-legal-02-line-height:1.28572;--cds-legal-02-letter-spacing:.16px;--cds-body-compact-01-font-size:.875rem;--cds-body-compact-01-font-weight:400;--cds-body-compact-01-line-height:1.28572;--cds-body-compact-01-letter-spacing:.16px;--cds-body-compact-02-font-size:1rem;--cds-body-compact-02-font-weight:400;--cds-body-compact-02-line-height:1.375;--cds-body-compact-02-letter-spacing:0;--cds-body-01-font-size:.875rem;--cds-body-01-font-weight:400;--cds-body-01-line-height:1.42857;--cds-body-01-letter-spacing:.16px;--cds-body-02-font-size:1rem;--cds-body-02-font-weight:400;--cds-body-02-line-height:1.5;--cds-body-02-letter-spacing:0;--cds-heading-compact-01-font-size:.875rem;--cds-heading-compact-01-font-weight:600;--cds-heading-compact-01-line-height:1.28572;--cds-heading-compact-01-letter-spacing:.16px;--cds-heading-compact-02-font-size:1rem;--cds-heading-compact-02-font-weight:600;--cds-heading-compact-02-line-height:1.375;--cds-heading-compact-02-letter-spacing:0;--cds-heading-03-font-size:1.25rem;--cds-heading-03-font-weight:400;--cds-heading-03-line-height:1.4;--cds-heading-03-letter-spacing:0;--cds-heading-04-font-size:1.75rem;--cds-heading-04-font-weight:400;--cds-heading-04-line-height:1.28572;--cds-heading-04-letter-spacing:0;--cds-heading-05-font-size:2rem;--cds-heading-05-font-weight:400;--cds-heading-05-line-height:1.25;--cds-heading-05-letter-spacing:0;--cds-heading-06-font-size:2.625rem;--cds-heading-06-font-weight:300;--cds-heading-06-line-height:1.199;--cds-heading-06-letter-spacing:0;--cds-heading-07-font-size:3.375rem;--cds-heading-07-font-weight:300;--cds-heading-07-line-height:1.199;--cds-heading-07-letter-spacing:0;--cds-fluid-heading-03-font-size:1.25rem;--cds-fluid-heading-03-font-weight:400;--cds-fluid-heading-03-line-height:1.4;--cds-fluid-heading-03-letter-spacing:0;--cds-fluid-heading-04-font-size:1.75rem;--cds-fluid-heading-04-font-weight:400;--cds-fluid-heading-04-line-height:1.28572;--cds-fluid-heading-04-letter-spacing:0;--cds-fluid-heading-05-font-size:2rem;--cds-fluid-heading-05-font-weight:400;--cds-fluid-heading-05-line-height:1.25;--cds-fluid-heading-05-letter-spacing:0;--cds-fluid-heading-06-font-size:2rem;--cds-fluid-heading-06-font-weight:600;--cds-fluid-heading-06-line-height:1.25;--cds-fluid-heading-06-letter-spacing:0;--cds-fluid-paragraph-01-font-size:1.5rem;--cds-fluid-paragraph-01-font-weight:300;--cds-fluid-paragraph-01-line-height:1.334;--cds-fluid-paragraph-01-letter-spacing:0;--cds-fluid-quotation-01-font-family:'IBM Plex Serif','Georgia',Times,serif;--cds-fluid-quotation-01-font-size:1.25rem;--cds-fluid-quotation-01-font-weight:400;--cds-fluid-quotation-01-line-height:1.3;--cds-fluid-quotation-01-letter-spacing:0;--cds-fluid-quotation-02-font-family:'IBM Plex Serif','Georgia',Times,serif;--cds-fluid-quotation-02-font-size:2rem;--cds-fluid-quotation-02-font-weight:300;--cds-fluid-quotation-02-line-height:1.25;--cds-fluid-quotation-02-letter-spacing:0;--cds-fluid-display-01-font-size:2.625rem;--cds-fluid-display-01-font-weight:300;--cds-fluid-display-01-line-height:1.19;--cds-fluid-display-01-letter-spacing:0;--cds-fluid-display-02-font-size:2.625rem;--cds-fluid-display-02-font-weight:600;--cds-fluid-display-02-line-height:1.19;--cds-fluid-display-02-letter-spacing:0;--cds-fluid-display-03-font-size:2.625rem;--cds-fluid-display-03-font-weight:300;--cds-fluid-display-03-line-height:1.19;--cds-fluid-display-03-letter-spacing:0;--cds-fluid-display-04-font-size:2.625rem;--cds-fluid-display-04-font-weight:600;--cds-fluid-display-04-line-height:1.19;--cds-fluid-display-04-letter-spacing:0;--cds-spacing-01:.125rem;--cds-spacing-02:.25rem;--cds-spacing-03:.5rem;--cds-spacing-04:.75rem;--cds-spacing-05:1rem;--cds-spacing-06:1.5rem;--cds-spacing-07:2rem;--cds-spacing-08:2.5rem;--cds-spacing-09:3rem;--cds-spacing-10:4rem;--cds-spacing-11:5rem;--cds-spacing-12:6rem;--cds-spacing-13:10rem;--cds-fluid-spacing-01:0;--cds-fluid-spacing-02:2vw;--cds-fluid-spacing-03:5vw;--cds-fluid-spacing-04:10vw;--cds-layout-01:1rem;--cds-layout-02:1.5rem;--cds-layout-03:2rem;--cds-layout-04:3rem;--cds-layout-05:4rem;--cds-layout-06:6rem;--cds-layout-07:10rem;--cds-container-01:1.5rem;--cds-container-02:2rem;--cds-container-03:2.5rem;--cds-container-04:3rem;--cds-container-05:4rem;--cds-size-xsmall:1.5rem;--cds-size-small:2rem;--cds-size-medium:2.5rem;--cds-size-large:3rem;--cds-size-xlarge:4rem;--cds-size-2XLarge:5rem;--cds-icon-size-01:1rem;--cds-icon-size-02:1.25rem}:host{--header-height:3.5rem;--header-content-max-width:none;--cool-gray-10:#f2f4f8;--cool-gray-20:#dde1e6;--cool-gray-30:#c1c7cd;--cool-gray-60:#697077;--cool-gray-80:#343a3f;--purple-70:#6929c4;--sidenav-item-height:3.5rem;--sidenav-item-height-short:2.8rem;--box-shadow:rgb(0 0 0 / 10%) 0 2px 3px 0;font-family:'IBM Plex Sans','Helvetica Neue',Arial,sans-serif;display:block}:host(qiskit-ui-shell){margin-top:var(--header-height)}bx-header ~ bx-side-nav{height:calc(100% - var(--header-height));margin-top:var(--header-height)}bx-header{display:flex;justify-content:space-between;height:var(--header-height);border-color:var(--cds-border-subtle);background-color:var(--cds-ui-background);color:var(--cds-text-secondary)}bx-header svg.menu__account__icon{display:block;overflow:hidden;box-sizing:border-box;width:2rem;height:2rem;border:.125rem solid var(--cds-icon-on-color);border-radius:50%;fill:var(--cds-icon-on-color)}bx-header svg{width:100%;height:auto}bx-header .qiskit-header-content{display:flex;justify-content:space-between;width:100%;max-width:var(--header-content-max-width);margin-right:auto;margin-left:auto}bx-header-name::part(link){width:8.75rem;height:calc(var(--header-height) - 1px);fill:var(--cool-gray-80)}bx-header-nav{height:calc(var(--header-height) - 1px)}bx-header-nav::before,bx-header-nav::part(divider){display:none}bx-header-nav-item.qiskit-user-account-icon::part(link),bx-header-nav-item.qiskit-user-account-icon::part(link):focus,bx-header-nav-item.qiskit-user-account-icon::part(link):hover{background-color:var(--purple-70);color:var(--cds-ui-background)}bx-header-nav-item::part(link),bx-header-menu-item::part(link),qiskit-header-menu::part(trigger),qiskit-header-menu-mega::part(trigger){font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0;background:var(--cds-ui-background);color:var(--cds-text-secondary)}bx-header-nav-item::part(link):active,bx-header-nav-item::part(link):focus,bx-header-nav-item::part(link):hover,bx-header-menu-item::part(link):active,bx-header-menu-item::part(link):focus,bx-header-menu-item::part(link):hover,qiskit-header-menu::part(trigger):active,qiskit-header-menu::part(trigger):focus,qiskit-header-menu::part(trigger):hover,qiskit-header-menu-mega::part(trigger):active,qiskit-header-menu-mega::part(trigger):focus,qiskit-header-menu-mega::part(trigger):hover{background-color:var(--cds-ui-background);color:var(--cds-text-secondary)}bx-header-nav-item::part(link):hover,bx-header-menu-item::part(link):hover,qiskit-header-menu::part(trigger):hover,qiskit-header-menu-mega::part(trigger):hover{text-decoration:underline}bx-header-nav-item::part(link):focus,bx-header-menu-item::part(link):focus,qiskit-header-menu::part(trigger):focus,qiskit-header-menu-mega::part(trigger):focus{border-color:var(--cds-border-subtle)}:host(qiskit-header-menu)::part(trigger-icon){fill:var(--cds-text-secondary) !important}:host(qiskit-header-menu)::part(menu-body){box-shadow:var(--box-shadow)}:host(qiskit-header-menu) .bx--header__menu-title{background-color:var(--cds-ui-background);color:var(--cds-text-secondary)}:host(qiskit-header-menu) .bx--header__menu-title[aria-expanded=true]{background-color:var(--cool-gray-10)}bx-header-menu-item{height:3rem;background-color:var(--cds-ui-01);color:var(--cds-text-secondary)}bx-header-menu-item::part(link),bx-header-menu-item::part(link):focus,bx-header-menu-item::part(link):hover{background-color:var(--cool-gray-10)}:host(qiskit-header-menu-mega)::part(trigger-icon){fill:var(--cds-text-secondary) !important}:host(qiskit-header-menu-mega) .bx--header__menu-title{color:var(--cds-text-secondary)}:host(qiskit-header-menu-mega) .bx--header__menu-title[aria-expanded=true]{background-color:var(--cool-gray-10)}:host(qiskit-header-menu-mega) .bx--header__menu-title[aria-expanded=true]+.bx--header__menu{position:fixed;top:var(--header-height);bottom:auto;left:0;display:grid;grid-template-columns:repeat(7,1fr);width:100vw;height:auto;padding:var(--cds-spacing-05) var(--cds-spacing-03);background-color:var(--cool-gray-10);box-shadow:var(--box-shadow);transform:translateZ(0)}:host(qiskit-header-menu-item-mega){padding:0 var(--cds-spacing-04)}:host(qiskit-header-menu-item-mega) .qiskit-header-menu-item-mega-heading{font-size:1rem;font-weight:600;line-height:1.375;letter-spacing:0;margin-bottom:var(--cds-spacing-04);color:var(--cds-text-primary)}:host(qiskit-header-menu-item-mega) .qiskit-header-menu-item-mega-list{font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}:host(qiskit-header-menu-item-mega) .qiskit-header-menu-item-mega-list li{margin-bottom:var(--cds-spacing-03)}:host(qiskit-header-menu-item-mega) .qiskit-header-menu-item-mega-list a{color:var(--cds-text-primary);text-decoration:none}:host(qiskit-header-menu-item-mega) .qiskit-header-menu-item-mega-list a:hover{text-decoration:underline}:host(qiskit-header-menu-item-mega) .qiskit-header-menu-item-mega-list a:focus{outline:2px solid var(--cds-border-subtle)}:host(qiskit-header-menu-button) .bx--header__menu-toggle,:host(qiskit-header-menu-button) .bx--header__menu-trigger{width:var(--header-height);height:var(--header-height);border:0}:host(qiskit-header-menu-button) .bx--header__menu-toggle>svg,:host(qiskit-header-menu-button) .bx--header__menu-trigger>svg{fill:var(--cds-text-secondary)}:host(qiskit-header-menu-button) .bx--header__menu-toggle:focus,:host(qiskit-header-menu-button) .bx--header__menu-toggle:active,:host(qiskit-header-menu-button) .bx--header__menu-toggle:hover,:host(qiskit-header-menu-button) .bx--header__menu-trigger:focus,:host(qiskit-header-menu-button) .bx--header__menu-trigger:active,:host(qiskit-header-menu-button) .bx--header__menu-trigger:hover{background-color:var(--cds-ui-01)}bx-side-nav{right:0;left:auto;box-shadow:0 .5rem .5rem rgba(0,0,0,0.25)}@media(max-width:41.98rem){bx-side-nav[expanded]{width:100%;max-width:none}}bx-side-nav svg.menu__account__icon{display:block;overflow:hidden;box-sizing:border-box;width:2rem;height:2rem;margin-right:var(--cds-spacing-03);border:.125rem solid var(--purple-70);border-radius:50%;fill:var(--purple-70)}bx-side-nav bx-side-nav-divider{margin-top:-1px;margin-bottom:-1px}bx-side-nav bx-side-nav-items{overflow-y:scroll;padding:var(--cds-spacing-03) 0}bx-side-nav-link.qiskit-user-account-icon::part(link):hover,bx-side-nav-link.qiskit-user-account-icon::part(link){height:3rem;text-decoration-color:var(--purple-70)}bx-side-nav-link.qiskit-user-account-icon::part(title){display:flex;align-items:center;color:var(--purple-70)}bx-side-nav-link::part(link){min-height:var(--sidenav-item-height)}bx-side-nav-link::part(link):hover{text-decoration:underline;text-decoration-color:var(--cds-text-secondary)}bx-side-nav-link::part(link):focus{outline-color:var(--cds-border-subtle)}bx-side-nav-link::part(title){font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}bx-side-nav-menu::part(expando){font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0;min-height:var(--sidenav-item-height)}bx-side-nav-menu::part(expando):hover{background-color:transparent;text-decoration:underline;text-decoration-color:var(--cds-text-secondary)}bx-side-nav-menu::part(expando):focus{outline-color:var(--cds-border-subtle)}bx-side-nav-menu[expanded]:not(.qiskit-side-nav-submenu)::part(title){font-weight:500}bx-side-nav-menu.qiskit-side-nav-submenu::part(expando){min-height:var(--sidenav-item-height-short);background-color:var(--cool-gray-10)}bx-side-nav-menu-item::part(link){min-height:var(--sidenav-item-height-short) !important}bx-side-nav-menu-item::part(link):hover{text-decoration:underline;text-decoration-color:var(--cds-text-secondary)}bx-side-nav-menu-item::part(link):focus{outline-color:var(--cds-border-subtle)}bx-side-nav-menu-item::part(title){font-size:1rem;font-weight:400;line-height:1.5;letter-spacing:0}bx-side-nav-menu-item.qiskit-nav-menu-item::part(link){background-color:var(--cool-gray-10) !important}bx-side-nav-menu-item.qiskit-nav-submenu-item{position:relative}bx-side-nav-menu-item.qiskit-nav-submenu-item::part(link){background-color:var(--cool-gray-20) !important}bx-side-nav-menu-item.qiskit-nav-submenu-item::part(link):focus{outline-color:var(--cool-gray-30)}bx-side-nav-menu-item.qiskit-nav-submenu-item::after{content:"";position:absolute;right:var(--cds-spacing-07);left:var(--cds-spacing-07);z-index:1;height:1px;background-color:var(--cool-gray-30)}bx-side-nav-menu-item.qiskit-nav-submenu-item:first-of-type{border-top:1px solid var(--cool-gray-30)}bx-side-nav-menu-item.qiskit-nav-submenu-item:last-of-type{border-bottom:1px solid var(--cool-gray-30)}@media(min-width:42rem){.qiskit-side-nav-footer{display:none}}.qiskit-side-nav-footer__social-container{margin:var(--cds-spacing-03) var(--cds-spacing-05)}.qiskit-side-nav-footer__social-icons{display:grid;grid-template-rows:1fr 1fr;grid-template-columns:25px 25px;grid-gap:var(--cds-spacing-02) var(--cds-spacing-05)}.qiskit-side-nav-footer__social-icons__icon{color:var(--cool-gray-60)}.qiskit-side-nav-footer__social-heading{font-size:.875rem;font-weight:600;line-height:1.29;letter-spacing:.16px;margin-bottom:var(--cds-spacing-04);color:var(--cool-gray-60)}.qiskit-side-nav-footer__copyright{font-size:.75rem;font-weight:400;line-height:1.34;letter-spacing:.32px;padding:var(--cds-spacing-05);background-color:var(--cool-gray-10)}`;

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
let QiskitHeaderMenu = class QiskitHeaderMenu extends BXHeaderMenu {
};
QiskitHeaderMenu.styles = [styles];
QiskitHeaderMenu = __decorate([
  e$1('qiskit-header-menu')
], QiskitHeaderMenu);

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
let QiskitHeaderMenuButton = class QiskitHeaderMenuButton extends BXHeaderMenuButton {
};
QiskitHeaderMenuButton.styles = [styles];
QiskitHeaderMenuButton = __decorate([
  e$1('qiskit-header-menu-button')
], QiskitHeaderMenuButton);

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
let QiskitHeaderMenuMega = class QiskitHeaderMenuMega extends BXHeaderMenu {
};
QiskitHeaderMenuMega.styles = [styles];
QiskitHeaderMenuMega = __decorate([
  e$1('qiskit-header-menu-mega')
], QiskitHeaderMenuMega);

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
let QiskitHeaderMenuItemMega = class QiskitHeaderMenuItemMega extends s {
  constructor() {
      super(...arguments);
      this.item = {};
      this.parentLabel = '';
      this._handleClick = (item) => {
          this.dispatchEvent(new CustomEvent('on-click', {
              detail: {
                  label: `${this.parentLabel}-${item.label}`,
                  url: item.url,
              },
              bubbles: true,
              composed: true,
          }));
      };
  }
  render() {
      var _a, _b, _c;
      return y `
    <div class="qiskit-header-menu-item-mega">
      <p class="qiskit-header-menu-item-mega-heading">${(_a = this.item) === null || _a === void 0 ? void 0 : _a.label}</p>
      <ul class="qiskit-header-menu-item-mega-list">
        ${(_c = (_b = this.item) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.map((item) => {
          return y `<li>
            <a
              href="${l(item === null || item === void 0 ? void 0 : item.url)}"
              @click="${() => {
              this._handleClick(item);
          }}"
            >
              ${item.label}
            </a>
          </li>`;
      })}
      </ul>
    </div>
  `;
  }
};
QiskitHeaderMenuItemMega.styles = [styles];
__decorate([
  e({ type: Object }),
  __metadata("design:type", Object)
], QiskitHeaderMenuItemMega.prototype, "item", void 0);
__decorate([
  e({ type: String }),
  __metadata("design:type", Object)
], QiskitHeaderMenuItemMega.prototype, "parentLabel", void 0);
QiskitHeaderMenuItemMega = __decorate([
  e$1('qiskit-header-menu-item-mega')
], QiskitHeaderMenuItemMega);

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const qiskitLogoIcon = y `
<svg
  version="1.2"
  xmlns="http://www.w3.org/2000/svg"
  x="0"
  y="0"
  viewBox="0 0 451.7 140.8"
  xml:space="preserve"
>
  <defs>
    <radialGradient
      id="gradient-1"
      cx="63.5"
      cy="71.1"
      r="65"
      gradientTransform="matrix(.96 .21 -.14 .63 43 13.8)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".2" stop-opacity="0"></stop>
      <stop offset="1"></stop>
    </radialGradient>
    <radialGradient
      id="gradient-2"
      cx="40"
      cy="162.1"
      r="35"
      gradientTransform="matrix(.98 0 0 .6 31.7 16.5)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-opacity="0"></stop>
      <stop offset="1"></stop>
    </radialGradient>
    <radialGradient
      id="gradient-3"
      cx="40.5"
      cy="29.8"
      r="60.3"
      gradientTransform="matrix(.98 0 0 .75 31.6 9.5)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".2" stop-opacity="0"></stop>
      <stop offset="1"></stop>
    </radialGradient>
    <radialGradient
      id="gradient-4"
      cx="3.1"
      cy="-.4"
      r="40.7"
      gradientTransform="matrix(.4 .89 -1.26 .57 33 -.4)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".4" stop-opacity="0"></stop>
      <stop offset="1"></stop>
    </radialGradient>
    <radialGradient
      id="gradient-5"
      cx="-412.4"
      cy="-1203.4"
      r="1068.9"
      gradientTransform="matrix(.98 0 0 .98 31.7 2.6)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stop-opacity="0"></stop>
      <stop offset=".4"></stop>
    </radialGradient>
  </defs>
  <path
    d="M221.3 126.4h-11.6c-9.1 0-13.3-5-13.3-13v-6.2c-18.3-2.3-29.8-16.8-29.8-41.8 0-27.5 13.9-42.2 35.1-42.2S237 37.9 237 65.4c0 24.3-10.8 38.7-28.1 41.6v8.4H221zm1.5-54.6V59c0-14.8-8.4-24-21-24s-21 9.1-21 24v12.8c0 14.9 8.4 24 21 24s21-9.1 21-24zM246.3 30.3v-2c0-3.9 2.3-6.7 7.6-6.7s7.5 2.8 7.5 6.7v2c0 3.8-2.2 6.6-7.5 6.6s-7.6-2.8-7.6-6.6zM247.5 45.4h12.7v60.8h-12.7zM270.9 96.1l8.1-7.4c4.4 5.3 10 8.6 17.2 8.6s11-3 11-8.2c0-3.8-2.3-6.7-8.6-7.6l-5.6-.7c-12.4-1.5-20-6.9-20-18 0-11.9 9.3-18.8 22.6-18.8 11 0 17.2 3.6 22.7 9.7l-7.9 7.5a19.4 19.4 0 00-14.8-6.9c-7 0-10.3 3-10.3 7.6s3 6.8 9.3 7.8l5.7.7c13.3 2 19.2 7.9 19.2 17.7 0 11.7-9.4 19.5-24 19.5A29.3 29.3 0 01270.9 96zM328.2 19.7H341v53h.6L350 62l14.6-16.5h14.8L358.1 69l23.9 37.3h-15.2l-17.4-29-8.4 9.1v19.9h-12.8zM390.8 30.3v-2c0-3.9 2.4-6.7 7.6-6.7s7.5 2.8 7.5 6.7v2c0 3.8-2.2 6.6-7.5 6.6s-7.6-2.8-7.6-6.6zM392 45.4h12.7v60.8H392zM438.3 106.2c-8.8 0-13.5-5-13.5-13.2V55.8h-9.4V45.4h5.1c4.2 0 5.6-1.7 5.6-6V28.8h11.5v16.6h12.7v10.4h-12.7v40h11.8v10.4z"
  ></path>
  <path
    fill="url(#gradient-1)"
    d="M131.1 103.1C131 90.1 100.6 83 72 82.6c-30.4 0-61.8 7.6-61.9 20.5.2 13 30.6 20.3 59.2 20.6 30.3 0 61.7-7.7 61.8-20.5zM69.3 119c-32-.4-54.3-8.6-54.4-15.8.1-7.5 24.5-16 57.1-16 32 .5 54.3 8.7 54.4 16 0 7.4-24.5 15.8-57.1 15.8z"
  ></path>
  <path
    d="M70.8 140.3a70 70 0 1161.5-103 70 70 0 01-61.5 103zM70.5 5.2a65.2 65.2 0 1057.6 34.3A65.3 65.3 0 0070.7 5.2z"
  ></path>
  <path
    fill="url(#gradient-2)"
    d="M88.7 131c0-5.4-7.8-9.5-18-9.5s-18 4-18 9.4v.1c0 5.3 7.8 9.4 18 9.4s18-4 18-9.4zm-18 5c-8.1 0-13.3-3-13.3-5s5.2-5 13.3-5 13.2 2.9 13.3 5-5.3 4.9-13.3 4.9z"
  ></path>
  <path
    fill="url(#gradient-3)"
    d="M140.6 70.4c-.2-13.8-35.3-21.7-68.3-22-35 0-71.4 8.2-71.6 22C.9 84.5 36 92.3 69 92.7c35 0 71.4-8.3 71.6-22.1zM69.1 87.8c-37.4-.4-63.5-9.5-63.7-17.4C5.5 62.2 34.1 53 72.2 53c37.5.4 63.6 9.5 63.7 17.4-.1 8.2-28.7 17.4-66.8 17.4z"
  ></path>
  <path
    fill="url(#gradient-4)"
    d="M72 16.9c-30.4 0-61.8 7.7-61.8 20.6s30.4 20.3 59 20.6c30.4 0 61.8-7.7 61.8-20.6s-30.3-20.3-59-20.6zm-2.7 36.4C37.3 53 15 44.7 15 37.5c0-7.5 24.4-15.9 57-15.9 32 .4 54.3 8.7 54.3 15.9 0 7.5-24.4 15.8-57 15.8z"
  ></path>
  <path
    d="M70.4.4c-5 0-16.9.7-16.9 7.9s11.8 7.8 17 7.8 16.8-.7 16.8-7.8-11.8-8-16.9-8zm0 4.8c7.2 0 12.1 1.6 12.1 3s-5 3.2-12 3.2-12.2-1.7-12.2-3.1 5-3.1 12.1-3.1z"
  ></path>
  <path
    fill="url(#gradient-5)"
    d="M100 112.8a6.1 6.1 0 00-.9 0L72.8 67.6 48.8 26a6 6 0 10-4.5 2.2 6.6 6.6 0 00.8 0l24 41.3 10.8 18.7L95.3 115a6 6 0 104.7-2.2z"
  ></path>
</svg>
`;

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const userIcon = y `
<svg
  focusable="false"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  class="menu__account__icon"
  width="20"
  height="20"
  viewBox="0 0 32 32"
  aria-hidden="true"
  data-v-ddd07f88=""
>
  <path
    d="M16 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0016 2zM26 30H24V25a5 5 0 00-5-5H13a5 5 0 00-5 5v5H6V25a7 7 0 017-7h6a7 7 0 017 7z"
  ></path>
</svg>
`;

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const mediumIcon = y `
<svg
  focusable="false"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  width="20"
  height="20"
  viewBox="0 0 32 32"
  aria-hidden="true"
>
  <path
    d="M4,4V28H28V4ZM23.9385,9.6865,22.6514,10.92a.3766.3766,0,0,0-.1431.3613v9.0674a.3765.3765,0,0,0,.1431.3613l1.257,1.2339v.271h-6.323v-.271L18.8877,20.68c.1279-.128.1279-.1656.1279-.3609V12.99l-3.62,9.1958H14.906L10.6907,12.99v6.1631a.8505.8505,0,0,0,.2334.7071l1.6936,2.0547v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7071V12.0264A.6231.6231,0,0,0,9.5239,11.5L8.0186,9.6865v-.271h4.6743l3.613,7.9239,3.1765-7.9239h4.4561Z"
  ></path>
  <path
    fill="none"
    d="M9.7273,12.0266A.6246.6246,0,0,0,9.524,11.5L8.0186,9.6863V9.4154H12.693l3.613,7.9238,3.1764-7.9238h4.4561v.2709L22.6513,10.92a.3763.3763,0,0,0-.143.3612v9.0676a.3763.3763,0,0,0,.143.3612l1.2571,1.2341v.2709H17.5856v-.2709L18.8878,20.68c.1279-.1279.1279-.1656.1279-.3612V12.99l-3.62,9.1955h-.4893L10.6907,12.99v6.1629a.8506.8506,0,0,0,.2334.7074l1.6936,2.0543v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7074Z"
    data-icon-path="inner-path"
  ></path>
</svg>
`;

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const slackIcon = y `
<svg
  focusable="false"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  width="20"
  height="20"
  viewBox="0 0 32 32"
  aria-hidden="true"
>
  <path
    d="M9.0423 19.1661A2.5212 2.5212 0 116.5212 16.645H9.0423zM10.3127 19.1661a2.5212 2.5212 0 015.0423 0v6.3127a2.5212 2.5212 0 11-5.0423 0zM12.8339 9.0423A2.5212 2.5212 0 1115.355 6.5212V9.0423zM12.8339 10.3127a2.5212 2.5212 0 010 5.0423H6.5212a2.5212 2.5212 0 110-5.0423zM22.9577 12.8339a2.5212 2.5212 0 112.5211 2.5211H22.9577zM21.6873 12.8339a2.5212 2.5212 0 01-5.0423 0V6.5212a2.5212 2.5212 0 115.0423 0zM19.1661 22.9577a2.5212 2.5212 0 11-2.5211 2.5211V22.9577zM19.1661 21.6873a2.5212 2.5212 0 010-5.0423h6.3127a2.5212 2.5212 0 110 5.0423z"
  ></path>
</svg>
`;

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const twitterIcon = y `
<svg
  focusable="false"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  width="20"
  height="20"
  viewBox="0 0 32 32"
  aria-hidden="true"
>
  <path
    d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"
  ></path>
</svg>
`;

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
const youtubeIcon = y `
<svg
  focusable="false"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  width="20"
  height="20"
  viewBox="0 0 32 32"
  aria-hidden="true"
>
  <path
    d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z"
  ></path>
</svg>
`;

var Variant;
(function (Variant) {
  Variant["DEFAULT"] = "";
  Variant["HIDE_ACCOUNT"] = "hide-account";
})(Variant || (Variant = {}));
const SOCIAL_LINKS = [
  {
      icon: twitterIcon,
      label: 'Twitter',
      url: 'https://twitter.com/Qiskit',
  },
  {
      icon: slackIcon,
      label: 'Slack',
      url: 'https://ibm.co/joinqiskitslack',
  },
  {
      icon: youtubeIcon,
      label: 'YouTube',
      url: 'https://youtube.com/Qiskit',
  },
  {
      icon: mediumIcon,
      label: 'Medium',
      url: 'https://medium.com/Qiskit',
  },
];
const NAV_ITEMS = [
  {
      label: 'Overview',
      url: 'https://qiskit.org/overview/',
  },
  {
      label: 'Learn',
      url: 'https://qiskit.org/learn/',
  },
  {
      label: 'Community',
      children: [
          {
              label: 'Events',
              url: 'https://qiskit.org/events/',
          },
          {
              label: 'Advocates',
              url: 'https://qiskit.org/advocates/',
          },
          {
              label: 'Ecosystem',
              url: 'https://qiskit.org/ecosystem/',
          },
      ],
  },
  {
      label: 'Documentation',
      isMegaMenu: true,
      children: [
          {
              label: 'Getting Started',
              children: [
                  {
                      label: 'Overview',
                      url: 'https://qiskit.org/documentation/getting_started.html',
                  },
              ],
          },
          {
              label: 'Core',
              children: [
                  {
                      label: 'Qiskit Terra',
                      url: 'https://qiskit.org/documentation/',
                  },
              ],
          },
          {
              label: 'Providers',
              children: [
                  {
                      label: 'Qiskit Aer',
                      url: 'https://qiskit.org/documentation/apidoc/aer.html',
                  },
                  {
                      label: 'Qiskit IBM Runtime',
                      url: 'https://qiskit.org/documentation/partners/qiskit_ibm_runtime/',
                  },
                  {
                      label: 'Qiskit IBM Provider',
                      url: 'https://qiskit.org/documentation/apidoc/ibmq-provider.html',
                  },
                  {
                      label: 'Partners',
                      url: 'https://qiskit.org/documentation/partners/',
                  },
              ],
          },
          {
              label: 'Applications',
              children: [
                  {
                      label: 'Qiskit Nature',
                      url: 'https://qiskit.org/documentation/nature/',
                  },
                  {
                      label: 'Qiskit Finance',
                      url: 'https://qiskit.org/documentation/finance/',
                  },
                  {
                      label: 'Qiskit Optimization',
                      url: 'https://qiskit.org/documentation/optimization/',
                  },
                  {
                      label: 'Qiskit Machine learning',
                      url: 'https://qiskit.org/documentation/machine-learning/',
                  },
              ],
          },
          {
              label: 'Extensions',
              children: [
                  {
                      label: 'Qiskit Experiments',
                      url: 'https://qiskit.org/documentation/experiments/',
                  },
                  {
                      label: 'Qiskit Dynamics',
                      url: 'https://qiskit.org/documentation/dynamics/',
                  },
                  {
                      label: 'Qiskit Metal',
                      url: 'https://qiskit.org/documentation/metal/',
                  },
              ],
          },
          {
              label: 'Contributing',
              children: [
                  {
                      label: 'Contributor Guide',
                      url: 'https://qiskit.org/documentation/contributing_to_qiskit.html',
                  },
                  {
                      label: 'Deprecation Policy',
                      url: 'https://qiskit.org/documentation/deprecation_policy.html',
                  },
                  {
                      label: 'Maintainer Guide',
                      url: 'https://qiskit.org/documentation/maintainers_guide.html',
                  },
              ],
          },
          {
              label: 'Help and Learning',
              children: [
                  {
                      label: 'Stack Exchange',
                      url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit',
                  },
                  {
                      label: 'Qiskit Feedback',
                      url: 'https://github.com/Qiskit/feedback',
                  },
                  {
                      label: 'Slack',
                      url: 'https://ibm.co/joinqiskitslack',
                  },
                  {
                      label: 'Qiskit Textbook',
                      url: 'https://qiskit.org/learn/',
                  },
              ],
          },
      ],
  },
];

/**
* Copyright (c) IBM, Corp. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
let QiskitUIShell = class QiskitUIShell extends s {
  constructor() {
      super(...arguments);
      this.variant = Variant.DEFAULT;
      this._NAV_ITEMS = NAV_ITEMS;
      this._SOCIAL_LINKS = SOCIAL_LINKS;
      this._handleClick = (item, parentLabel) => {
          const label = parentLabel ? `${parentLabel}-${item.label}` : item.label;
          this.dispatchEvent(new CustomEvent('on-click', {
              detail: {
                  label,
                  url: item.url,
              },
              bubbles: true,
              composed: true,
          }));
      };
  }
  render() {
      return y `
    <bx-header aria-label="Qiskit">
      <div class="qiskit-header-content">
        <bx-header-name
          href="https://qiskit.org/"
          @click="${() => {
          this._handleClick({
              label: 'Home',
              url: 'https://qiskit.org',
          });
      }}"
        >
          ${qiskitLogoIcon}
        </bx-header-name>
        <bx-header-nav menu-bar-label="Qiskit">
          ${this._getHeaderItems()}
          ${this.variant === Variant.HIDE_ACCOUNT
          ? null
          : this._getAccountHeaderNavItem()}
        </bx-header-nav>
        <qiskit-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"
        >
        </qiskit-header-menu-button>
      </div>
    </bx-header>

    <bx-side-nav
      aria-label="Main mobile navigation"
      usage-mode="header-nav"
      tabindex="-1"
    >
      <bx-side-nav-items>
        ${this._getSideNavItems()}
        ${this.variant === Variant.HIDE_ACCOUNT
          ? null
          : this._getAccountSideNavLink()}
      </bx-side-nav-items>
      <div class="qiskit-side-nav-footer">
        <div class="qiskit-side-nav-footer__social-container">
          <p class="qiskit-side-nav-footer__social-heading">Stay connected</p>
          <div class="qiskit-side-nav-footer__social-icons">
            ${this._getSocialLinks()}
          </div>
        </div>
        <div class="qiskit-side-nav-footer__copyright">
          © Qiskit | All Rights Reserved
        </div>
      </div>
    </bx-side-nav>
  `;
  }
  _getHeaderItems() {
      return this._NAV_ITEMS.map((item) => {
          if (item.children) {
              return this._getHeaderMenu(item);
          }
          else {
              return this._getHeaderNavItem(item);
          }
      });
  }
  _getHeaderNavItem(item) {
      return y `
    <bx-header-nav-item
      href="${l(item === null || item === void 0 ? void 0 : item.url)}"
      @click="${() => {
          this._handleClick(item);
      }}"
    >
      ${item === null || item === void 0 ? void 0 : item.label}
    </bx-header-nav-item>
  `;
  }
  _getHeaderMenu(menu) {
      var _a, _b;
      const isMegaMenu = !!(menu === null || menu === void 0 ? void 0 : menu.isMegaMenu);
      if (isMegaMenu) {
          return y `
      <qiskit-header-menu-mega
        menu-label="${menu === null || menu === void 0 ? void 0 : menu.label}"
        trigger-content="${menu === null || menu === void 0 ? void 0 : menu.label}"
      >
        ${(_a = menu === null || menu === void 0 ? void 0 : menu.children) === null || _a === void 0 ? void 0 : _a.map((item) => this._getHeaderMenuItemMega(item, menu === null || menu === void 0 ? void 0 : menu.label))}
      </qiskit-header-menu-mega>
    `;
      }
      return y `
    <qiskit-header-menu
      menu-label="${menu === null || menu === void 0 ? void 0 : menu.label}"
      trigger-content="${menu === null || menu === void 0 ? void 0 : menu.label}"
    >
      ${(_b = menu === null || menu === void 0 ? void 0 : menu.children) === null || _b === void 0 ? void 0 : _b.map((item) => this._getHeaderMenuItem(item, menu === null || menu === void 0 ? void 0 : menu.label))}
    </qiskit-header-menu>
  `;
  }
  _getHeaderMenuItem(item, parentLabel) {
      return y `
    <bx-header-menu-item
      href="${l(item === null || item === void 0 ? void 0 : item.url)}"
      @click="${() => {
          this._handleClick(item, parentLabel);
      }}"
    >
      ${item === null || item === void 0 ? void 0 : item.label}
    </bx-header-menu-item>
  `;
  }
  _getHeaderMenuItemMega(item, parentLabel) {
      return y `
    <qiskit-header-menu-item-mega
      .item="${item}"
      .parentLabel="${parentLabel}"
    >
    </qiskit-header-menu-item-mega>
  `;
  }
  _getAccountHeaderNavItem() {
      return y `
    <bx-header-nav-item
      href="https://learn.qiskit.org/account/"
      class="qiskit-user-account-icon"
      @click="${() => {
          this._handleClick({
              label: 'Account',
              url: 'https://learn.qiskit.org/account/',
          });
      }}"
    >
      ${userIcon}
    </bx-header-nav-item>
  `;
  }
  _getSideNavItems() {
      return this._NAV_ITEMS.map((item) => {
          if (item === null || item === void 0 ? void 0 : item.children) {
              return this._getSideNavMenu(item);
          }
          else {
              return this._getSideNavLink(item);
          }
      });
  }
  _getSideNavLink(item) {
      return y `
    <bx-side-nav-link
      href="${l(item === null || item === void 0 ? void 0 : item.url)}"
      @click="${() => {
          this._handleClick(item);
      }}"
    >
      ${item === null || item === void 0 ? void 0 : item.label}
    </bx-side-nav-link>
    <bx-side-nav-divider></bx-side-nav-divider>
  `;
  }
  _getSideNavMenu(menu) {
      var _a;
      const isMegaMenu = !!(menu === null || menu === void 0 ? void 0 : menu.isMegaMenu);
      if (isMegaMenu) {
          const submenu = (menu === null || menu === void 0 ? void 0 : menu.children) || [];
          return y `
      <bx-side-nav-menu title="${menu === null || menu === void 0 ? void 0 : menu.label}">
        ${submenu === null || submenu === void 0 ? void 0 : submenu.map((submenuItem) => {
              var _a;
              return y `
            <bx-side-nav-menu
              title="${submenuItem === null || submenuItem === void 0 ? void 0 : submenuItem.label}"
              class="qiskit-side-nav-submenu"
            >
              ${(_a = submenuItem === null || submenuItem === void 0 ? void 0 : submenuItem.children) === null || _a === void 0 ? void 0 : _a.map((child) => this._getSideNavMenuItem(child, menu === null || menu === void 0 ? void 0 : menu.label, true))}
            </bx-side-nav-menu>
          `;
          })}
      </bx-side-nav-menu>
      <bx-side-nav-divider></bx-side-nav-divider>
    `;
      }
      return y `
    <bx-side-nav-menu title="${menu === null || menu === void 0 ? void 0 : menu.label}">
      ${(_a = menu === null || menu === void 0 ? void 0 : menu.children) === null || _a === void 0 ? void 0 : _a.map((item) => this._getSideNavMenuItem(item, menu === null || menu === void 0 ? void 0 : menu.label))}
    </bx-side-nav-menu>
    <bx-side-nav-divider></bx-side-nav-divider>
  `;
  }
  _getSideNavMenuItem(item, parentLabel, isSubmenuItem = false) {
      const submenuClass = isSubmenuItem
          ? 'qiskit-nav-submenu-item'
          : 'qiskit-nav-menu-item';
      return y `
    <bx-side-nav-menu-item
      href="${l(item === null || item === void 0 ? void 0 : item.url)}"
      class="${submenuClass}"
      @click="${() => {
          this._handleClick(item, parentLabel);
      }}"
    >
      ${item === null || item === void 0 ? void 0 : item.label}
    </bx-side-nav-menu-item>
  `;
  }
  _getAccountSideNavLink() {
      return y `
    <bx-side-nav-link
      href="https://learn.qiskit.org/account/"
      class="qiskit-user-account-icon"
      @click="${() => {
          this._handleClick({
              label: 'Account',
              url: 'https://learn.qiskit.org/account/',
          });
      }}"
    >
      ${userIcon} <span>Profile</span>
    </bx-side-nav-link>
  `;
  }
  _getSocialLinks() {
      return this._SOCIAL_LINKS.map((link) => y `
        <a
          class="qiskit-side-nav-footer__social-icons__icon"
          href="${l(link.url)}"
          rel="noopener"
          target="_blank"
          title="${link.label}"
        >
          ${link.icon}
        </a>
      `);
  }
};
QiskitUIShell.styles = [styles];
__decorate([
  e({ type: String }),
  __metadata("design:type", String)
], QiskitUIShell.prototype, "variant", void 0);
QiskitUIShell = __decorate([
  e$1('qiskit-ui-shell')
], QiskitUIShell);

export { QiskitUIShell };
