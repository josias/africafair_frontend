(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[93],{1768:function(e,t,n){"use strict";n.r(t);var r=n(171),i=n(0),a=n.n(i),o=n(10),c=n.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(d(t)),t.handleErrored=t.handleErrored.bind(d(t)),t.handleChange=t.handleChange.bind(d(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(d(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return a.a.createElement("div",s({},t,{ref:this.handleRecaptchaRef}))},r}(a.a.Component);p.displayName="ReCAPTCHA",p.propTypes={sitekey:c.a.string.isRequired,onChange:c.a.func,grecaptcha:c.a.object,theme:c.a.oneOf(["dark","light"]),type:c.a.oneOf(["image","audio"]),tabindex:c.a.number,onExpired:c.a.func,onErrored:c.a.func,size:c.a.oneOf(["compact","normal","invisible"]),stoken:c.a.string,hl:c.a.string,badge:c.a.oneOf(["bottomright","bottomleft","inline"])},p.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=n(75),h=n.n(l);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var f={},b=0;var g="onloadcallback";var m,v,y=(m=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+g+"&render=explicit"},v=(v={callbackName:g,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function a(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}r=t,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=a.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+b++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof m?m():m,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=f[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[v.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=v,i=r.globalName,a=r.callbackName,o=r.scriptId;if(i&&"undefined"!==typeof window[i]&&(f[t]={loaded:!0,observers:{}}),f[t]){var c=f[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},f[t]={loaded:!1,observers:s};var d=document.createElement("script");for(var p in d.src=t,d.async=!0,v.attributes)d.setAttribute(p,v.attributes[p]);o&&(d.id=o);var l=function(e){if(f[t]){var n=f[t].observers;for(var r in n)e(n[r])&&delete n[r]}};a&&"undefined"!==typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=f[t];e&&(e.loaded=!0,l((function(t){return!a&&(t(e),!0)})))},d.onerror=function(){var e=f[t];e&&(e.errored=!0,l((function(t){return t(e),!0})))},document.body.appendChild(d)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===v.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=f[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===v.removeOnUnmount&&delete f[e])},o.render=function(){var t=v.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),a=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(a[t]="undefined"!==typeof window[t]?window[t]:void 0),a.ref=r,Object(i.createElement)(e,a)},a}(i.Component),r=Object(i.forwardRef)((function(e,t){return Object(i.createElement)(n,u({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:c.a.func},h()(r,e)})(p),j=y,x=n(107),O=n(143),w=n(429),L=n(48),R=n(609),k=n.n(R),_=n(1);t.default=function(){return Object(_.jsx)(O.a,{title:"ReCaptcha",secondary:Object(_.jsx)(w.a,{icon:Object(_.jsx)(k.a,{fontSize:"small"}),link:"https://www.npmjs.com/package/react-google-recaptcha"}),children:Object(_.jsx)(r.a,{container:!0,spacing:L.c,children:Object(_.jsx)(r.a,{item:!0,xs:12,md:12,lg:6,children:Object(_.jsx)(x.a,{title:"ReCaptcha Example",children:Object(_.jsx)(j,{sitekey:"6LdzqbcaAAAAALrGEZWQHIHUhzJZc8O-KSTdTTh_",onChange:function(){}})})})})})}},428:function(e,t,n){"use strict";var r=n(4),i=n(63),a=n(24),o=n(398),c=n(1),s=["color","outline","size","sx"];t.a=function(e){var t=e.color,n=e.outline,d=e.size,p=e.sx,l=Object(i.a)(e,s),h=Object(a.a)(),u=t&&!n&&{color:h.palette.background.paper,bgcolor:"".concat(t,".main")},f=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:h.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},b={};switch(d){case"badge":b={width:h.spacing(3.5),height:h.spacing(3.5)};break;case"xs":b={width:h.spacing(4.25),height:h.spacing(4.25)};break;case"sm":b={width:h.spacing(5),height:h.spacing(5)};break;case"lg":b={width:h.spacing(9),height:h.spacing(9)};break;case"xl":b={width:h.spacing(10.25),height:h.spacing(10.25)};break;case"md":b={width:h.spacing(7.5),height:h.spacing(7.5)};break;default:b={}}return Object(c.jsx)(o.a,Object(r.a)({sx:Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},u),f),b),p)},l))}},429:function(e,t,n){"use strict";var r=n(24),i=n(422),a=n(331),o=n(432),c=n(428),s=n(1);t.a=function(e){var t=e.title,n=e.link,d=e.icon,p=Object(r.a)();return Object(s.jsx)(i.a,{title:t||"Reference",placement:"left",children:Object(s.jsxs)(a.a,{disableRipple:!0,children:[!d&&Object(s.jsx)(c.a,{component:o.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(s.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(s.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:p.palette.primary[800]}),Object(s.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:p.palette.primary.main}),Object(s.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:p.palette.primary[800]}),Object(s.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:p.palette.primary.main})]}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"clip0",children:Object(s.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),d&&Object(s.jsx)(c.a,{component:o.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:d})]})})}},432:function(e,t,n){"use strict";var r=n(13),i=n(5),a=n(7),o=n(2),c=n(0),s=(n(10),n(8)),d=n(125),p=n(15),l=n(105),h=n(9),u=n(6),f=n(11),b=n(108),g=n(19),m=n(58),v=n(86),y=n(106);function j(e){return Object(v.a)("MuiLink",e)}var x=Object(y.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),O=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],L={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=Object(u.a)(m.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(h.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(p.b)(t,"palette.".concat(function(e){return L[e]||e}(n.color)))||n.color;return Object(o.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(l.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(i.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(x.focusVisible),{outline:"auto"}))})),k=c.forwardRef((function(e,t){var n=Object(f.a)({props:e,name:"MuiLink"}),i=n.className,p=n.color,l=void 0===p?"primary":p,u=n.component,m=void 0===u?"a":u,v=n.onBlur,y=n.onFocus,x=n.TypographyClasses,L=n.underline,k=void 0===L?"always":L,_=n.variant,C=void 0===_?"inherit":_,S=Object(a.a)(n,w),E=Object(b.a)(),I=E.isFocusVisibleRef,V=E.onBlur,z=E.onFocus,N=E.ref,M=c.useState(!1),D=Object(r.a)(M,2),A=D[0],U=D[1],T=Object(g.a)(t,N),H=Object(o.a)({},n,{color:l,component:m,focusVisible:A,underline:k,variant:C}),P=function(e){var t=e.classes,n=e.component,r=e.focusVisible,i=e.underline,a={root:["root","underline".concat(Object(h.a)(i)),"button"===n&&"button",r&&"focusVisible"]};return Object(d.a)(a,j,t)}(H);return Object(O.jsx)(R,Object(o.a)({className:Object(s.default)(P.root,i),classes:x,color:l,component:m,onBlur:function(e){V(e),!1===I.current&&U(!1),v&&v(e)},onFocus:function(e){z(e),!0===I.current&&U(!0),y&&y(e)},ref:T,ownerState:H,variant:C},S))}));t.a=k},609:function(e,t,n){"use strict";var r=n(73);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(87)),a=n(1),o=(0,i.default)((0,a.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=o}}]);
//# sourceMappingURL=93.baeeb2ab.chunk.js.map