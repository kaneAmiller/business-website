(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4471:(e,t,r)=>{Promise.resolve().then(r.bind(r,1029))},6451:(e,t,r)=>{"use strict";var n=r(2659),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return n.isMemo(e)?s:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=s;var l=Object.defineProperty,d=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(f){var o=h(r);o&&o!==f&&e(t,o,n)}var s=d(r);p&&(s=s.concat(p(r)));for(var i=c(t),m=c(r),y=0;y<s.length;++y){var g=s[y];if(!a[g]&&!(n&&n[g])&&!(m&&m[g])&&!(i&&i[g])){var b=u(r,g);try{l(t,g,b)}catch(e){}}}}return t}},7449:(e,t)=>{"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9949:(e,t,r)=>{"use strict";var n=r(8877);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,s){if(s!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},1448:(e,t,r)=>{e.exports=r(9949)()},8877:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4332:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case p:case a:case i:case s:case h:return e;default:switch(e=e&&e.$$typeof){case l:case u:case y:case m:case c:return e;default:return t}}case o:return t}}}function w(e){return j(e)===p}t.AsyncMode=d,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=u,t.Fragment=a,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=i,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return w(e)||j(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return j(e)===l},t.isContextProvider=function(e){return j(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return j(e)===u},t.isFragment=function(e){return j(e)===a},t.isLazy=function(e){return j(e)===y},t.isMemo=function(e){return j(e)===m},t.isPortal=function(e){return j(e)===o},t.isProfiler=function(e){return j(e)===i},t.isStrictMode=function(e){return j(e)===s},t.isSuspense=function(e){return j(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===i||e===s||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===x||e.$$typeof===v||e.$$typeof===g)},t.typeOf=j},2659:(e,t,r)=>{"use strict";e.exports=r(4332)},1029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var n=r(7437),o=r(2265),a=r(7449),s=r.n(a),i=r(6341),c=r(9966),l=r(1448),d=r.n(l),p=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(h(t)),t.handleErrored=t.handleErrored.bind(h(t)),t.handleChange=t.handleChange.bind(h(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(h(t)),t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,f(t,e);var r=t.prototype;return r.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},r.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},r.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var e=this;return new Promise(function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()})},r.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},r.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.handleRecaptchaRef=function(e){this.captcha=e},r.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,p));return o.createElement("div",u({},t,{ref:this.handleRecaptchaRef}))},t}(o.Component);m.displayName="ReCAPTCHA",m.propTypes={sitekey:d().string.isRequired,onChange:d().func,grecaptcha:d().object,theme:d().oneOf(["dark","light"]),type:d().oneOf(["image","audio"]),tabindex:d().number,onExpired:d().func,onErrored:d().func,size:d().oneOf(["compact","normal","invisible"]),stoken:d().string,hl:d().string,badge:d().oneOf(["bottomright","bottomleft","inline"]),isolated:d().bool},m.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var y=r(6451),g=r.n(y);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var x={},v=0,j="onloadcallback";function w(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}let S=(function(e,t){return t=t||{},function(r){var n=r.displayName||r.name||"Component",a=function(n){function a(e,t){var r;return(r=n.call(this,e,t)||this).state={},r.__scriptURL="",r}a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var s=a.prototype;return s.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+v++),this.__scriptLoaderID},s.setupScriptURL=function(){return this.__scriptURL="function"==typeof e?e():e,this.__scriptURL},s.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)})},s.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=x[this.__scriptURL];if(!e||!e.loaded)throw Error("Script is not loaded.");for(var r in e.observers)e.observers[r](e);delete window[t.callbackName]},s.componentDidMount=function(){var e=this,r=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),o=t,a=o.globalName,s=o.callbackName,i=o.scriptId;if(a&&void 0!==window[a]&&(x[r]={loaded:!0,observers:{}}),x[r]){var c=x[r];if(c&&(c.loaded||c.errored)){this.asyncScriptLoaderHandleLoad(c);return}c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)};return}var l={};l[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},x[r]={loaded:!1,observers:l};var d=document.createElement("script");for(var p in d.src=r,d.async=!0,t.attributes)d.setAttribute(p,t.attributes[p]);i&&(d.id=i);var u=function(e){if(x[r]){var t=x[r].observers;for(var n in t)e(t[n])&&delete t[n]}};s&&"undefined"!=typeof window&&(window[s]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=x[r];e&&(e.loaded=!0,u(function(t){return!s&&(t(e),!0)}))},d.onerror=function(){var e=x[r];e&&(e.errored=!0,u(function(t){return t(e),!0}))},document.body.appendChild(d)},s.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===t.removeOnUnmount)for(var r=document.getElementsByTagName("script"),n=0;n<r.length;n+=1)r[n].src.indexOf(e)>-1&&r[n].parentNode&&r[n].parentNode.removeChild(r[n]);var o=x[e];o&&(delete o.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===t.removeOnUnmount&&delete x[e])},s.render=function(){var e=t.globalName,n=this.props,a=(n.asyncScriptOnLoad,n.forwardedRef),s=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return e&&"undefined"!=typeof window&&(s[e]=void 0!==window[e]?window[e]:void 0),s.ref=a,(0,o.createElement)(r,s)},a}(o.Component),s=(0,o.forwardRef)(function(e,t){return(0,o.createElement)(a,b({},e,{forwardedRef:t}))});return s.displayName="AsyncScriptLoader("+n+")",s.propTypes={asyncScriptOnLoad:d().func},g()(s,r)}})(function(){var e=w(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+j+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+j+"&render=explicit"},{callbackName:j,globalName:"grecaptcha",attributes:w().nonce?{nonce:w().nonce}:{}})(m);function _(){let[e,t]=(0,o.useState)({name:"",email:"",message:""}),[r,a]=(0,o.useState)(!1),[l,d]=(0,o.useState)(null),[p,u]=(0,o.useState)({name:"",email:"",message:""}),h=(0,o.useRef)(null),f=r=>{t({...e,[r.target.name]:r.target.value}),u({...p,[r.target.name]:""})},m=()=>{let t={name:"",email:"",message:""},r=!0;return e.name.trim()||(t.name="Name is required",r=!1),e.email.trim()?/\S+@\S+\.\S+/.test(e.email)||(t.email="Please enter a valid email address",r=!1):(t.email="Email is required",r=!1),e.message.trim()||(t.message="Message is required",r=!1),u(t),r},y=async e=>{var t;e.preventDefault(),d(null),m()&&(a(!0),null===(t=h.current)||void 0===t||t.execute())},g=async r=>{if(!r){d("reCAPTCHA verification failed. Please try again."),a(!1);return}try{let n=await fetch("https://formspree.io/f/xkgnggpz",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,"g-recaptcha-response":r})});if(n.ok)d("Your message was sent successfully."),t({name:"",email:"",message:""});else{let e=await n.json();d(e.error||"There was an issue with the submission.")}}catch(e){d("There was an error submitting the form.")}finally{var n;a(!1),null===(n=h.current)||void 0===n||n.reset()}};return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Contact KM Project Solutions | Get in Touch"}),(0,n.jsx)("meta",{name:"description",content:"Contact KM Project Solutions for inquiries related to IT support, project management, and web development services."}),(0,n.jsx)("meta",{name:"keywords",content:"contact KM Project Solutions, IT support, project management, web development services"}),(0,n.jsx)("meta",{property:"og:title",content:"Contact KM Project Solutions | Get in Touch"}),(0,n.jsx)("meta",{property:"og:description",content:"Reach out to KM Project Solutions for customized IT, project management, and web development services tailored to small businesses."}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.kmprojectsolutions.com/contact"}),(0,n.jsx)("meta",{name:"robots",content:"index, follow"})]}),(0,n.jsx)(i.default,{}),(0,n.jsxs)("main",{className:"flex-grow container mx-auto p-8",children:[(0,n.jsx)("h1",{className:"text-5xl font-bold mb-8 text-center",children:"Contact Us"}),(0,n.jsxs)("form",{onSubmit:y,className:"max-w-md mx-auto space-y-4","aria-label":"Contact form",children:[(0,n.jsx)("label",{htmlFor:"name",className:"sr-only",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:e.name,onChange:f,required:!0,className:"w-full p-2 border rounded ".concat(p.name?"border-red-500":"")}),p.name&&(0,n.jsx)("p",{className:"text-red-500 text-sm",children:p.name}),(0,n.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",value:e.email,onChange:f,required:!0,className:"w-full p-2 border rounded ".concat(p.email?"border-red-500":"")}),p.email&&(0,n.jsx)("p",{className:"text-red-500 text-sm",children:p.email}),(0,n.jsx)("label",{htmlFor:"message",className:"sr-only",children:"Message"}),(0,n.jsx)("textarea",{id:"message",name:"message",placeholder:"Message",value:e.message,onChange:f,required:!0,className:"w-full p-2 border rounded ".concat(p.message?"border-red-500":"")}),p.message&&(0,n.jsx)("p",{className:"text-red-500 text-sm",children:p.message}),(0,n.jsx)("button",{type:"submit",disabled:r,className:"w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-300",children:r?"Sending...":"Send Message"})]}),l&&(0,n.jsx)("p",{className:"text-center mt-4",children:l}),(0,n.jsx)(S,{sitekey:"6Ld54HAqAAAAAJdtN7NcplrQnRDcIbdYo0OCPtTB",size:"invisible",ref:h,onChange:g})]}),(0,n.jsx)(c.Z,{})]})}},9966:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(7437),o=r(6648);function a(){return(0,n.jsxs)("footer",{className:"site-footer p-4 bg-blue-900 text-white flex flex-col items-center text-center",children:[(0,n.jsxs)("p",{className:"text-sm",children:["\xa9 ",new Date().getFullYear()," KM Project Solutions. All rights reserved."]}),(0,n.jsxs)("div",{className:"flex justify-center space-x-4 mt-2",children:[(0,n.jsx)("a",{href:"https://linkedin.com/company/km-project-solutions-llc",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o.default,{src:"/images/LI-In-Bug-white.png",alt:"LinkedIn",width:24,height:24})}),(0,n.jsx)("a",{href:"https://github.com/kaneAmiller",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o.default,{src:"/images/github-mark-white.svg",alt:"GitHub",width:24,height:24})}),(0,n.jsx)("a",{href:"https://instagram.com/kmprojectsolutions",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o.default,{src:"/images/Instagram_Glyph_White.svg",alt:"Instagram",width:24,height:24})})]})]})}},6341:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(7437),o=r(2265),a=r(7138),s=r(6648);let i=()=>{let[e,t]=(0,o.useState)(!1),r=(0,o.useRef)(null);(0,o.useEffect)(()=>{let e=e=>{r.current&&!r.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let i=()=>{t(!1)};return(0,n.jsxs)("header",{className:"site-header relative",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(s.default,{src:"/images/secondary-logo.png",alt:"KM Project Solutions Logo",width:90,height:60}),(0,n.jsx)("h1",{className:"site-title ml-4",children:"KM Project Solutions"})]}),(0,n.jsx)("nav",{className:"site-navigation ".concat(e?"open":""),ref:r,children:(0,n.jsxs)("ul",{className:"nav-list",children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:"/",onClick:i,children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:"/about",onClick:i,children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:"/services",onClick:i,children:"Services"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:"/projects",onClick:i,children:"Projects"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:"/contact",onClick:i,children:"Contact"})})]})}),(0,n.jsxs)("button",{className:"hamburger",onClick:()=>{t(!e)},"aria-label":"Toggle menu",children:[(0,n.jsx)("span",{className:"bar"}),(0,n.jsx)("span",{className:"bar"}),(0,n.jsx)("span",{className:"bar"})]}),e&&(0,n.jsx)("div",{className:"overlay",onClick:()=>t(!1)})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[138,648,130,215,744],()=>t(4471)),_N_E=e.O()}]);