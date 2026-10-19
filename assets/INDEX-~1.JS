(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Xg={exports:{}},fc={},jg={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),lx=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),fx=Symbol.for("react.profiler"),hx=Symbol.for("react.provider"),dx=Symbol.for("react.context"),px=Symbol.for("react.forward_ref"),mx=Symbol.for("react.suspense"),gx=Symbol.for("react.memo"),vx=Symbol.for("react.lazy"),up=Symbol.iterator;function _x(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$g=Object.assign,qg={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Yg}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zg(){}Zg.prototype=Zs.prototype;function Bh(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Yg}var Vh=Bh.prototype=new Zg;Vh.constructor=Bh;$g(Vh,Zs.prototype);Vh.isPureReactComponent=!0;var fp=Array.isArray,Kg=Object.prototype.hasOwnProperty,Hh={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kg.call(e,i)&&!Jg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ha,type:t,key:s,ref:o,props:r,_owner:Hh.current}}function xx(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function yx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yx(""+t.key):e.toString(36)}function vl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case lx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Fc(o,0):i,fp(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),vl(r,e,n,"",function(c){return c})):r!=null&&(Gh(r)&&(r=xx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Fc(s,a);o+=vl(s,e,n,l,r)}else if(l=_x(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Fc(s,a++),o+=vl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var i=[],r=0;return vl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Sx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},_l={transition:null},Mx={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Hh};function e0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!Gh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Zs;Ye.Fragment=cx;Ye.Profiler=fx;Ye.PureComponent=Bh;Ye.StrictMode=ux;Ye.Suspense=mx;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mx;Ye.act=e0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$g({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kg.call(e,l)&&!Jg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ha,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:dx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hx,_context:t},t.Consumer=t};Ye.createElement=Qg;Ye.createFactory=function(t){var e=Qg.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:px,render:t}};Ye.isValidElement=Gh;Ye.lazy=function(t){return{$$typeof:vx,_payload:{_status:-1,_result:t},_init:Sx}};Ye.memo=function(t,e){return{$$typeof:gx,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};Ye.unstable_act=e0;Ye.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ye.useContext=function(t){return Qt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ye.useId=function(){return Qt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Qt.current.useRef(t)};Ye.useState=function(t){return Qt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Qt.current.useTransition()};Ye.version="18.3.1";jg.exports=Ye;var pe=jg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=pe,wx=Symbol.for("react.element"),Tx=Symbol.for("react.fragment"),Ax=Object.prototype.hasOwnProperty,Cx=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rx={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ax.call(e,i)&&!Rx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:wx,type:t,key:s,ref:o,props:r,_owner:Cx.current}}fc.Fragment=Tx;fc.jsx=t0;fc.jsxs=t0;Xg.exports=fc;var he=Xg.exports,n0={exports:{}},yn={},i0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,j){var Z=N.length;N.push(j);e:for(;0<Z;){var ie=Z-1>>>1,ve=N[ie];if(0<r(ve,j))N[ie]=j,N[Z]=ve,Z=ie;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var j=N[0],Z=N.pop();if(Z!==j){N[0]=Z;e:for(var ie=0,ve=N.length,ke=ve>>>1;ie<ke;){var X=2*(ie+1)-1,q=N[X],le=X+1,ne=N[le];if(0>r(q,Z))le<ve&&0>r(ne,q)?(N[ie]=ne,N[le]=Z,ie=le):(N[ie]=q,N[X]=Z,ie=X);else if(le<ve&&0>r(ne,Z))N[ie]=ne,N[le]=Z,ie=le;else break e}}return j}function r(N,j){var Z=N.sortIndex-j.sortIndex;return Z!==0?Z:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=N)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function x(N){if(y=!1,_(N),!g)if(n(l)!==null)g=!0,V(L);else{var j=n(c);j!==null&&$(x,j.startTime-N)}}function L(N,j){g=!1,y&&(y=!1,f(P),P=-1),p=!0;var Z=d;try{for(_(j),h=n(l);h!==null&&(!(h.expirationTime>j)||N&&!R());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var ve=ie(h.expirationTime<=j);j=t.unstable_now(),typeof ve=="function"?h.callback=ve:h===n(l)&&i(l),_(j)}else i(l);h=n(l)}if(h!==null)var ke=!0;else{var X=n(c);X!==null&&$(x,X.startTime-j),ke=!1}return ke}finally{h=null,d=Z,p=!1}}var T=!1,C=null,P=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function I(){if(C!==null){var N=t.unstable_now();S=N;var j=!0;try{j=C(!0,N)}finally{j?U():(T=!1,C=null)}}else T=!1}var U;if(typeof v=="function")U=function(){v(I)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=I,U=function(){W.postMessage(null)}}else U=function(){m(I,0)};function V(N){C=N,T||(T=!0,U())}function $(N,j){P=m(function(){N(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,V(L))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var Z=d;d=j;try{return N()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=d;d=N;try{return j()}finally{d=Z}},t.unstable_scheduleCallback=function(N,j,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,N){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,N={id:u++,callback:j,priorityLevel:N,startTime:Z,expirationTime:ve,sortIndex:-1},Z>ie?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(y?(f(P),P=-1):y=!0,$(x,Z-ie))):(N.sortIndex=ve,e(l,N),g||p||(g=!0,V(L))),N},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(N){var j=d;return function(){var Z=d;d=j;try{return N.apply(this,arguments)}finally{d=Z}}}})(r0);i0.exports=r0;var Px=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx=pe,xn=Px;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Wo={};function Wr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Wo[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=Object.prototype.hasOwnProperty,Lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},pp={};function Dx(t){return qu.call(pp,t)?!0:qu.call(dp,t)?!1:Lx.test(t)?pp[t]=!0:(dp[t]=!0,!1)}function Nx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ix(t,e,n,i){if(e===null||typeof e>"u"||Nx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wh=/[\-:]([a-z])/g;function Xh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wh,Xh);zt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wh,Xh);zt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wh,Xh);zt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function jh(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ix(e,n,r,i)&&(n=null),i||r===null?Dx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),Ku=Symbol.for("react.suspense"),Ju=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),mp=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Oc;function Eo(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var kc=!1;function zc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function Ux(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case Zu:return"Profiler";case Yh:return"StrictMode";case Ku:return"Suspense";case Ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a0:return(t.displayName||"Context")+".Consumer";case o0:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:Qu(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Qu(t(e))}catch{}}return null}function Fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qu(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ox(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=Ox(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f0(t,e){e=e.checked,e!=null&&jh(t,"checked",e,!1)}function tf(t,e){f0(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(wo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function h0(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function d0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?d0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,p0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kx=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(t){kx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bo[e]=bo[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bo.hasOwnProperty(t)&&bo[t]?(""+e).trim():e+"px"}function g0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zx=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(zx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cf=null,Ps=null,bs=null;function yp(t){if(t=ma(t)){if(typeof cf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=gc(e),cf(t.stateNode,t.type,e))}}function v0(t){Ps?bs?bs.push(t):bs=[t]:Ps=t}function _0(){if(Ps){var t=Ps,e=bs;if(bs=Ps=null,yp(t),e)for(t=0;t<e.length;t++)yp(e[t])}}function x0(t,e){return t(e)}function y0(){}var Bc=!1;function S0(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return x0(t,e,n)}finally{Bc=!1,(Ps!==null||bs!==null)&&(y0(),_0())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var i=gc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var uf=!1;if(Ei)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){uf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{uf=!1}function Bx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Lo=!1,Ol=null,kl=!1,ff=null,Vx={onError:function(t){Lo=!0,Ol=t}};function Hx(t,e,n,i,r,s,o,a,l){Lo=!1,Ol=null,Bx.apply(Vx,arguments)}function Gx(t,e,n,i,r,s,o,a,l){if(Hx.apply(this,arguments),Lo){if(Lo){var c=Ol;Lo=!1,Ol=null}else throw Error(re(198));kl||(kl=!0,ff=c)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(Xr(t)!==t)throw Error(re(188))}function Wx(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sp(r),t;if(s===i)return Sp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function E0(t){return t=Wx(t),t!==null?w0(t):null}function w0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w0(t);if(e!==null)return e;t=t.sibling}return null}var T0=xn.unstable_scheduleCallback,Mp=xn.unstable_cancelCallback,Xx=xn.unstable_shouldYield,jx=xn.unstable_requestPaint,wt=xn.unstable_now,Yx=xn.unstable_getCurrentPriorityLevel,Kh=xn.unstable_ImmediatePriority,A0=xn.unstable_UserBlockingPriority,zl=xn.unstable_NormalPriority,$x=xn.unstable_LowPriority,C0=xn.unstable_IdlePriority,hc=null,ti=null;function qx(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:Jx,Zx=Math.log,Kx=Math.LN2;function Jx(t){return t>>>=0,t===0?32:31-(Zx(t)/Kx|0)|0}var Ca=64,Ra=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function Qx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ey(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Qx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R0(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function ty(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function P0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b0,Qh,L0,D0,N0,df=!1,Pa=[],$i=null,qi=null,Zi=null,Yo=new Map,$o=new Map,Hi=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ma(e),e!==null&&Qh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function iy(t,e,n,i,r){switch(e){case"focusin":return $i=ao($i,t,e,n,i,r),!0;case"dragenter":return qi=ao(qi,t,e,n,i,r),!0;case"mouseover":return Zi=ao(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Yo.set(s,ao(Yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$o.set(s,ao($o.get(s)||null,t,e,n,i,r)),!0}return!1}function I0(t){var e=Pr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=M0(n),e!==null){t.blockedOn=e,N0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lf=i,n.target.dispatchEvent(i),lf=null}else return e=ma(n),e!==null&&Qh(e),t.blockedOn=n,!1;e.shift()}return!0}function wp(t,e,n){xl(t)&&n.delete(e)}function ry(){df=!1,$i!==null&&xl($i)&&($i=null),qi!==null&&xl(qi)&&(qi=null),Zi!==null&&xl(Zi)&&(Zi=null),Yo.forEach(wp),$o.forEach(wp)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,ry)))}function qo(t){function e(r){return lo(r,t)}if(0<Pa.length){lo(Pa[0],t);for(var n=1;n<Pa.length;n++){var i=Pa[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&lo($i,t),qi!==null&&lo(qi,t),Zi!==null&&lo(Zi,t),Yo.forEach(e),$o.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&Hi.shift()}var Ls=Ri.ReactCurrentBatchConfig,Vl=!0;function sy(t,e,n,i){var r=rt,s=Ls.transition;Ls.transition=null;try{rt=1,ed(t,e,n,i)}finally{rt=r,Ls.transition=s}}function oy(t,e,n,i){var r=rt,s=Ls.transition;Ls.transition=null;try{rt=4,ed(t,e,n,i)}finally{rt=r,Ls.transition=s}}function ed(t,e,n,i){if(Vl){var r=pf(t,e,n,i);if(r===null)Kc(t,e,i,Hl,n),Ep(t,i);else if(iy(r,t,e,n,i))i.stopPropagation();else if(Ep(t,i),e&4&&-1<ny.indexOf(t)){for(;r!==null;){var s=ma(r);if(s!==null&&b0(s),s=pf(t,e,n,i),s===null&&Kc(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kc(t,e,i,null,n)}}var Hl=null;function pf(t,e,n,i){if(Hl=null,t=Zh(i),t=Pr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function U0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yx()){case Kh:return 1;case A0:return 4;case zl:case $x:return 16;case C0:return 536870912;default:return 16}default:return 16}}var Xi=null,td=null,yl=null;function F0(){if(yl)return yl;var t,e=td,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return yl=r.slice(t,1<i?1-i:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Tp(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ba:Tp,this.isPropagationStopped=Tp,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=Sn(Ks),pa=St({},Ks,{view:0,detail:0}),ay=Sn(pa),Hc,Gc,co,dc=St({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Hc=t.screenX-co.screenX,Gc=t.screenY-co.screenY):Gc=Hc=0,co=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Ap=Sn(dc),ly=St({},dc,{dataTransfer:0}),cy=Sn(ly),uy=St({},pa,{relatedTarget:0}),Wc=Sn(uy),fy=St({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=Sn(fy),dy=St({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=Sn(dy),my=St({},Ks,{data:0}),Cp=Sn(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_y[t])?!!e[t]:!1}function id(){return xy}var yy=St({},pa,{key:function(t){if(t.key){var e=gy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sy=Sn(yy),My=St({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=Sn(My),Ey=St({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),wy=Sn(Ey),Ty=St({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=Sn(Ty),Cy=St({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=Sn(Cy),Py=[9,13,27,32],rd=Ei&&"CompositionEvent"in window,Do=null;Ei&&"documentMode"in document&&(Do=document.documentMode);var by=Ei&&"TextEvent"in window&&!Do,O0=Ei&&(!rd||Do&&8<Do&&11>=Do),Pp=" ",bp=!1;function k0(t,e){switch(t){case"keyup":return Py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Ly(t,e){switch(t){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:(bp=!0,Pp);case"textInput":return t=e.data,t===Pp&&bp?null:t;default:return null}}function Dy(t,e){if(gs)return t==="compositionend"||!rd&&k0(t,e)?(t=F0(),yl=td=Xi=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ny[t.type]:e==="textarea"}function B0(t,e,n,i){v0(i),e=Gl(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,Zo=null;function Iy(t){K0(t,0)}function pc(t){var e=xs(t);if(u0(e))return t}function Uy(t,e){if(t==="change")return e}var V0=!1;if(Ei){var Xc;if(Ei){var jc="oninput"in document;if(!jc){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),jc=typeof Dp.oninput=="function"}Xc=jc}else Xc=!1;V0=Xc&&(!document.documentMode||9<document.documentMode)}function Np(){No&&(No.detachEvent("onpropertychange",H0),Zo=No=null)}function H0(t){if(t.propertyName==="value"&&pc(Zo)){var e=[];B0(e,Zo,t,Zh(t)),S0(Iy,e)}}function Fy(t,e,n){t==="focusin"?(Np(),No=e,Zo=n,No.attachEvent("onpropertychange",H0)):t==="focusout"&&Np()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(Zo)}function ky(t,e){if(t==="click")return pc(e)}function zy(t,e){if(t==="input"||t==="change")return pc(e)}function By(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:By;function Ko(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,e){var n=Ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ip(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W0(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vy(t){var e=W0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(i!==null&&sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Up(n,s);var o=Up(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hy=Ei&&"documentMode"in document&&11>=document.documentMode,vs=null,mf=null,Io=null,gf=!1;function Fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||vs==null||vs!==Fl(i)||(i=vs,"selectionStart"in i&&sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&Ko(Io,i)||(Io=i,i=Gl(mf,"onSelect"),0<i.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vs)))}function La(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Yc={},X0={};Ei&&(X0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function mc(t){if(Yc[t])return Yc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in X0)return Yc[t]=e[n];return t}var j0=mc("animationend"),Y0=mc("animationiteration"),$0=mc("animationstart"),q0=mc("transitionend"),Z0=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Z0.set(t,e),Wr(e,[t])}for(var $c=0;$c<Op.length;$c++){var qc=Op[$c],Gy=qc.toLowerCase(),Wy=qc[0].toUpperCase()+qc.slice(1);fr(Gy,"on"+Wy)}fr(j0,"onAnimationEnd");fr(Y0,"onAnimationIteration");fr($0,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(q0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function kp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Gx(i,e,void 0,t),t.currentTarget=null}function K0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kp(r,a,c),s=l}}}if(kl)throw t=ff,kl=!1,ff=null,t}function mt(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var i=t+"__bubble";n.has(i)||(J0(e,t,2,!1),n.add(i))}function Zc(t,e,n){var i=0;e&&(i|=4),J0(n,t,i,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[Da]){t[Da]=!0,s0.forEach(function(n){n!=="selectionchange"&&(Xy.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Da]||(e[Da]=!0,Zc("selectionchange",!1,e))}}function J0(t,e,n,i){switch(U0(e)){case 1:var r=sy;break;case 4:r=oy;break;default:r=ed}n=r.bind(null,e,n,t),r=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Kc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}S0(function(){var c=s,u=Zh(n),h=[];e:{var d=Z0.get(t);if(d!==void 0){var p=nd,g=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":p=Sy;break;case"focusin":g="focus",p=Wc;break;case"focusout":g="blur",p=Wc;break;case"beforeblur":case"afterblur":p=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wy;break;case j0:case Y0:case $0:p=hy;break;case q0:p=Ay;break;case"scroll":p=ay;break;case"wheel":p=Ry;break;case"copy":case"cut":case"paste":p=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rp}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,f!==null&&(x=jo(v,f),x!=null&&y.push(Qo(v,x,_)))),m)break;v=v.return}0<y.length&&(d=new p(d,g,null,n,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==lf&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[wi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Pr(g):null,g!==null&&(m=Xr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=Ap,x="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rp,x="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:xs(p),_=g==null?d:xs(g),d=new y(x,v+"leave",p,n,u),d.target=m,d.relatedTarget=_,x=null,Pr(u)===c&&(y=new y(f,v+"enter",g,n,u),y.target=_,y.relatedTarget=m,x=y),m=x,p&&g)t:{for(y=p,f=g,v=0,_=y;_;_=Yr(_))v++;for(_=0,x=f;x;x=Yr(x))_++;for(;0<v-_;)y=Yr(y),v--;for(;0<_-v;)f=Yr(f),_--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=Yr(y),f=Yr(f)}y=null}else y=null;p!==null&&zp(h,d,p,y,!1),g!==null&&m!==null&&zp(h,m,g,y,!0)}}e:{if(d=c?xs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var L=Uy;else if(Lp(d))if(V0)L=zy;else{L=Oy;var T=Fy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(L=ky);if(L&&(L=L(t,c))){B0(h,L,n,u);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&nf(d,"number",d.value)}switch(T=c?xs(c):window,t){case"focusin":(Lp(T)||T.contentEditable==="true")&&(vs=T,mf=c,Io=null);break;case"focusout":Io=mf=vs=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Fp(h,n,u);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":Fp(h,n,u)}var C;if(rd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else gs?k0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(O0&&n.locale!=="ko"&&(gs||P!=="onCompositionStart"?P==="onCompositionEnd"&&gs&&(C=F0()):(Xi=u,td="value"in Xi?Xi.value:Xi.textContent,gs=!0)),T=Gl(c,P),0<T.length&&(P=new Cp(P,t,null,n,u),h.push({event:P,listeners:T}),C?P.data=C:(C=z0(n),C!==null&&(P.data=C)))),(C=by?Ly(t,n):Dy(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(u=new Cp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=C))}K0(h,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(t,n),s!=null&&i.unshift(Qo(t,s,r)),s=jo(t,e),s!=null&&i.push(Qo(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=jo(n,s),l!=null&&o.unshift(Qo(n,l,a))):r||(l=jo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function Bp(t){return(typeof t=="string"?t:""+t).replace(jy,`
`).replace(Yy,"")}function Na(t,e,n){if(e=Bp(e),Bp(t)!==e&&n)throw Error(re(425))}function Wl(){}var vf=null,_f=null;function xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(t){return Vp.resolve(null).then(t).catch(Zy)}:yf;function Zy(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qo(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Js,ea="__reactProps$"+Js,wi="__reactContainer$"+Js,Sf="__reactEvents$"+Js,Ky="__reactListeners$"+Js,Jy="__reactHandles$"+Js;function Pr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[Jn])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[Jn]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function gc(t){return t[ea]||null}var Mf=[],ys=-1;function hr(t){return{current:t}}function gt(t){0>ys||(t.current=Mf[ys],Mf[ys]=null,ys--)}function ht(t,e){ys++,Mf[ys]=t.current,t.current=e}var ar={},jt=hr(ar),ln=hr(!1),Fr=ar;function ks(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Xl(){gt(ln),gt(jt)}function Gp(t,e,n){if(jt.current!==ar)throw Error(re(168));ht(jt,e),ht(ln,n)}function Q0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Fx(t)||"Unknown",r));return St({},n,i)}function jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Fr=jt.current,ht(jt,t),ht(ln,ln.current),!0}function Wp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Q0(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,gt(ln),gt(jt),ht(jt,t)):gt(ln),ht(ln,n)}var mi=null,vc=!1,Qc=!1;function ev(t){mi===null?mi=[t]:mi.push(t)}function Qy(t){vc=!0,ev(t)}function dr(){if(!Qc&&mi!==null){Qc=!0;var t=0,e=rt;try{var n=mi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,vc=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),T0(Kh,dr),r}finally{rt=e,Qc=!1}}return null}var Ss=[],Ms=0,Yl=null,$l=0,Tn=[],An=0,Or=null,gi=1,vi="";function Mr(t,e){Ss[Ms++]=$l,Ss[Ms++]=Yl,Yl=t,$l=e}function tv(t,e,n){Tn[An++]=gi,Tn[An++]=vi,Tn[An++]=Or,Or=t;var i=gi;t=vi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gi=1<<32-Wn(e)+r|n<<r|i,vi=s+t}else gi=1<<s|n<<r|i,vi=t}function od(t){t.return!==null&&(Mr(t,1),tv(t,1,0))}function ad(t){for(;t===Yl;)Yl=Ss[--Ms],Ss[Ms]=null,$l=Ss[--Ms],Ss[Ms]=null;for(;t===Or;)Or=Tn[--An],Tn[An]=null,vi=Tn[--An],Tn[An]=null,gi=Tn[--An],Tn[An]=null}var vn=null,gn=null,vt=!1,Vn=null;function nv(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:gi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wf(t){if(vt){var e=gn;if(e){var n=e;if(!Xp(t,e)){if(Ef(t))throw Error(re(418));e=Ki(n.nextSibling);var i=vn;e&&Xp(t,e)?nv(i,n):(t.flags=t.flags&-4097|2,vt=!1,vn=t)}}else{if(Ef(t))throw Error(re(418));t.flags=t.flags&-4097|2,vt=!1,vn=t}}}function jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Ia(t){if(t!==vn)return!1;if(!vt)return jp(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xf(t.type,t.memoizedProps)),e&&(e=gn)){if(Ef(t))throw iv(),Error(re(418));for(;e;)nv(t,e),e=Ki(e.nextSibling)}if(jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Ki(t.stateNode.nextSibling):null;return!0}function iv(){for(var t=gn;t;)t=Ki(t.nextSibling)}function zs(){gn=vn=null,vt=!1}function ld(t){Vn===null?Vn=[t]:Vn.push(t)}var eS=Ri.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function rv(t){function e(f,v){if(t){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=tr(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,x){return v===null||v.tag!==6?(v=ou(_,f.mode,x),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,x){var L=_.type;return L===ms?u(f,v,_.props.children,x,_.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===zi&&Yp(L)===v.type)?(x=r(v,_.props),x.ref=uo(f,v,_),x.return=f,x):(x=Rl(_.type,_.key,_.props,null,f.mode,x),x.ref=uo(f,v,_),x.return=f,x)}function c(f,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=au(_,f.mode,x),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function u(f,v,_,x,L){return v===null||v.tag!==7?(v=Ur(_,f.mode,x,L),v.return=f,v):(v=r(v,_),v.return=f,v)}function h(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ou(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return _=Rl(v.type,v.key,v.props,null,f.mode,_),_.ref=uo(f,null,v),_.return=f,_;case ps:return v=au(v,f.mode,_),v.return=f,v;case zi:var x=v._init;return h(f,x(v._payload),_)}if(wo(v)||so(v))return v=Ur(v,f.mode,_,null),v.return=f,v;Ua(f,v)}return null}function d(f,v,_,x){var L=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:a(f,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wa:return _.key===L?l(f,v,_,x):null;case ps:return _.key===L?c(f,v,_,x):null;case zi:return L=_._init,d(f,v,L(_._payload),x)}if(wo(_)||so(_))return L!==null?null:u(f,v,_,x,null);Ua(f,_)}return null}function p(f,v,_,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(_)||null,a(v,f,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wa:return f=f.get(x.key===null?_:x.key)||null,l(v,f,x,L);case ps:return f=f.get(x.key===null?_:x.key)||null,c(v,f,x,L);case zi:var T=x._init;return p(f,v,_,T(x._payload),L)}if(wo(x)||so(x))return f=f.get(_)||null,u(v,f,x,L,null);Ua(v,x)}return null}function g(f,v,_,x){for(var L=null,T=null,C=v,P=v=0,w=null;C!==null&&P<_.length;P++){C.index>P?(w=C,C=null):w=C.sibling;var S=d(f,C,_[P],x);if(S===null){C===null&&(C=w);break}t&&C&&S.alternate===null&&e(f,C),v=s(S,v,P),T===null?L=S:T.sibling=S,T=S,C=w}if(P===_.length)return n(f,C),vt&&Mr(f,P),L;if(C===null){for(;P<_.length;P++)C=h(f,_[P],x),C!==null&&(v=s(C,v,P),T===null?L=C:T.sibling=C,T=C);return vt&&Mr(f,P),L}for(C=i(f,C);P<_.length;P++)w=p(C,f,P,_[P],x),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?P:w.key),v=s(w,v,P),T===null?L=w:T.sibling=w,T=w);return t&&C.forEach(function(R){return e(f,R)}),vt&&Mr(f,P),L}function y(f,v,_,x){var L=so(_);if(typeof L!="function")throw Error(re(150));if(_=L.call(_),_==null)throw Error(re(151));for(var T=L=null,C=v,P=v=0,w=null,S=_.next();C!==null&&!S.done;P++,S=_.next()){C.index>P?(w=C,C=null):w=C.sibling;var R=d(f,C,S.value,x);if(R===null){C===null&&(C=w);break}t&&C&&R.alternate===null&&e(f,C),v=s(R,v,P),T===null?L=R:T.sibling=R,T=R,C=w}if(S.done)return n(f,C),vt&&Mr(f,P),L;if(C===null){for(;!S.done;P++,S=_.next())S=h(f,S.value,x),S!==null&&(v=s(S,v,P),T===null?L=S:T.sibling=S,T=S);return vt&&Mr(f,P),L}for(C=i(f,C);!S.done;P++,S=_.next())S=p(C,f,P,S.value,x),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?P:S.key),v=s(S,v,P),T===null?L=S:T.sibling=S,T=S);return t&&C.forEach(function(I){return e(f,I)}),vt&&Mr(f,P),L}function m(f,v,_,x){if(typeof _=="object"&&_!==null&&_.type===ms&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case wa:e:{for(var L=_.key,T=v;T!==null;){if(T.key===L){if(L=_.type,L===ms){if(T.tag===7){n(f,T.sibling),v=r(T,_.props.children),v.return=f,f=v;break e}}else if(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===zi&&Yp(L)===T.type){n(f,T.sibling),v=r(T,_.props),v.ref=uo(f,T,_),v.return=f,f=v;break e}n(f,T);break}else e(f,T);T=T.sibling}_.type===ms?(v=Ur(_.props.children,f.mode,x,_.key),v.return=f,f=v):(x=Rl(_.type,_.key,_.props,null,f.mode,x),x.ref=uo(f,v,_),x.return=f,f=x)}return o(f);case ps:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=au(_,f.mode,x),v.return=f,f=v}return o(f);case zi:return T=_._init,m(f,v,T(_._payload),x)}if(wo(_))return g(f,v,_,x);if(so(_))return y(f,v,_,x);Ua(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,_),v.return=f,f=v):(n(f,v),v=ou(_,f.mode,x),v.return=f,f=v),o(f)):n(f,v)}return m}var Bs=rv(!0),sv=rv(!1),ql=hr(null),Zl=null,Es=null,cd=null;function ud(){cd=Es=Zl=null}function fd(t){var e=ql.current;gt(ql),t._currentValue=e}function Tf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Zl=t,cd=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(cd!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(Zl===null)throw Error(re(308));Es=t,Zl.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var br=null;function hd(t){br===null?br=[t]:br.push(t)}function ov(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,hd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jh(t,n)}}function $p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=St({},h,d);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=h}}function qp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var ga={},ni=hr(ga),ta=hr(ga),na=hr(ga);function Lr(t){if(t===ga)throw Error(re(174));return t}function pd(t,e){switch(ht(na,e),ht(ta,t),ht(ni,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}gt(ni),ht(ni,e)}function Vs(){gt(ni),gt(ta),gt(na)}function lv(t){Lr(na.current);var e=Lr(ni.current),n=sf(e,t.type);e!==n&&(ht(ta,t),ht(ni,n))}function md(t){ta.current===t&&(gt(ni),gt(ta))}var _t=hr(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function gd(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var El=Ri.ReactCurrentDispatcher,tu=Ri.ReactCurrentBatchConfig,kr=0,yt=null,Rt=null,Ut=null,Ql=!1,Uo=!1,ia=0,tS=0;function Vt(){throw Error(re(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function _d(t,e,n,i,r,s){if(kr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=t===null||t.memoizedState===null?sS:oS,t=n(i,r),Uo){s=0;do{if(Uo=!1,ia=0,25<=s)throw Error(re(301));s+=1,Ut=Rt=null,e.updateQueue=null,El.current=aS,t=n(i,r)}while(Uo)}if(El.current=ec,e=Rt!==null&&Rt.next!==null,kr=0,Ut=Rt=yt=null,Ql=!1,e)throw Error(re(300));return t}function xd(){var t=ia!==0;return ia=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ln(){if(Rt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?yt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(re(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ra(t,e){return typeof e=="function"?e(t):e}function nu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,yt.lanes|=u,zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function iu(t){var e=Ln(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cv(){}function uv(t,e){var n=yt,i=Ln(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,yd(dv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,sa(9,hv.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(re(349));kr&30||fv(n,e,r)}return r}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hv(t,e,n,i){e.value=n,e.getSnapshot=i,pv(e)&&mv(t)}function dv(t,e,n){return n(function(){pv(e)&&mv(t)})}function pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function mv(t){var e=Ti(t,1);e!==null&&Xn(e,t,1,-1)}function Zp(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=rS.bind(null,yt,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gv(){return Ln().memoizedState}function wl(t,e,n,i){var r=Zn();yt.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function _c(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&vd(i,o.deps)){r.memoizedState=sa(e,n,s,i);return}}yt.flags|=t,r.memoizedState=sa(1|e,n,s,i)}function Kp(t,e){return wl(8390656,8,t,e)}function yd(t,e){return _c(2048,8,t,e)}function vv(t,e){return _c(4,2,t,e)}function _v(t,e){return _c(4,4,t,e)}function xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yv(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,xv.bind(null,e,t),n)}function Sd(){}function Sv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mv(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ev(t,e,n){return kr&21?(Yn(n,e)||(n=R0(),yt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function nS(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=tu.transition;tu.transition={};try{t(!1),e()}finally{rt=n,tu.transition=i}}function wv(){return Ln().memoizedState}function iS(t,e,n){var i=er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(t))Av(e,n);else if(n=ov(t,e,n,i),n!==null){var r=Zt();Xn(n,t,i,r),Cv(n,e,i)}}function rS(t,e,n){var i=er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(t))Av(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,hd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ov(t,e,r,i),n!==null&&(r=Zt(),Xn(n,t,i,r),Cv(n,e,i))}}function Tv(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Av(t,e){Uo=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jh(t,n)}}var ec={readContext:bn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},sS={readContext:bn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:Kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=iS.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Zp,useDebugValue:Sd,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Zp(!1),e=t[0];return t=nS.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=Zn();if(vt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ft===null)throw Error(re(349));kr&30||fv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kp(dv.bind(null,i,s,t),[t]),i.flags|=2048,sa(9,hv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ft.identifierPrefix;if(vt){var n=vi,i=gi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oS={readContext:bn,useCallback:Sv,useContext:bn,useEffect:yd,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Mv,useReducer:nu,useRef:gv,useState:function(){return nu(ra)},useDebugValue:Sd,useDeferredValue:function(t){var e=Ln();return Ev(e,Rt.memoizedState,t)},useTransition:function(){var t=nu(ra)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:uv,useId:wv,unstable_isNewReconciler:!1},aS={readContext:bn,useCallback:Sv,useContext:bn,useEffect:yd,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Mv,useReducer:iu,useRef:gv,useState:function(){return iu(ra)},useDebugValue:Sd,useDeferredValue:function(t){var e=Ln();return Rt===null?e.memoizedState=t:Ev(e,Rt.memoizedState,t)},useTransition:function(){var t=iu(ra)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:cv,useSyncExternalStore:uv,useId:wv,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Af(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=er(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Xn(e,t,r,i),Ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=er(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Xn(e,t,r,i),Ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=er(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Xn(e,t,i,n),Ml(e,t,i))}};function Jp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,i)||!Ko(r,s):!0}function Rv(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=cn(e)?Fr:jt.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},dd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=cn(e)?Fr:jt.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Af(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),Kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=Ux(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lS=typeof WeakMap=="function"?WeakMap:Map;function Pv(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,kf=i),Rf(t,e)},n}function bv(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rf(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function em(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new lS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var cS=Ri.ReactCurrentOwner,an=!1;function qt(t,e,n,i){e.child=t===null?sv(e,null,n,i):Bs(e,t.child,n,i)}function im(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=_d(t,e,n,i,s,r),n=xd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(vt&&n&&od(e),e.flags|=1,qt(t,e,i,r),e.child)}function rm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Lv(t,e,s,i,r)):(t=Rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ko(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return Pf(t,e,n,i,r)}function Dv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ts,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ts,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ts,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ts,pn),pn|=i;return qt(t,e,r,n),e.child}function Nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,i,r){var s=cn(n)?Fr:jt.current;return s=ks(e,s),Ds(e,r),n=_d(t,e,n,i,s,r),i=xd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(vt&&i&&od(e),e.flags|=1,qt(t,e,n,r),e.child)}function sm(t,e,n,i,r){if(cn(n)){var s=!0;jl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)Tl(t,e),Rv(e,n,i),Cf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=cn(n)?Fr:jt.current,c=ks(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qp(e,o,i,c),Bi=!1;var d=e.memoizedState;o.state=d,Kl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||ln.current||Bi?(typeof u=="function"&&(Af(e,n,u,i),l=e.memoizedState),(a=Bi||Jp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,av(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=cn(n)?Fr:jt.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Qp(e,o,i,l),Bi=!1,d=e.memoizedState,o.state=d,Kl(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||ln.current||Bi?(typeof p=="function"&&(Af(e,n,p,i),g=e.memoizedState),(c=Bi||Jp(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return bf(t,e,n,i,s,r)}function bf(t,e,n,i,r,s){Nv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wp(e,n,!1),Ai(t,e,s);i=e.stateNode,cS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Wp(e,n,!0),e.child}function Iv(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),pd(t,e.containerInfo)}function om(t,e,n,i,r){return zs(),ld(r),e.flags|=256,qt(t,e,n,i),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Df(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uv(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(_t,r&1),t===null)return wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Df(n),e.memoizedState=Lf,t):Md(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return uS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=tr(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,i}return s=t.child,t=s.sibling,i=tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Md(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,i){return i!==null&&ld(i),Bs(e,t.child,null,n),t=Md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ru(Error(re(422))),Fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mc({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=Df(o),e.memoizedState=Lf,s);if(!(e.mode&1))return Fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=ru(s,i,void 0),Fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),Xn(i,t,r,-1))}return Rd(),i=ru(Error(re(421))),Fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ES.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Ki(r.nextSibling),vn=e,vt=!0,Vn=null,t!==null&&(Tn[An++]=gi,Tn[An++]=vi,Tn[An++]=Or,gi=t.id,vi=t.overflow,Or=e),e=Md(e,i.children),e.flags|=4096,e)}function am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Tf(t.return,e,n)}function su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Fv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,n,e);else if(t.tag===19)am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}su(e,!0,n,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fS(t,e,n){switch(e.tag){case 3:Iv(e),zs();break;case 5:lv(e);break;case 1:cn(e.type)&&jl(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Uv(t,e,n):(ht(_t,_t.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);ht(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Ai(t,e,n)}var Ov,Nf,kv,zv;Ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nf=function(){};kv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ni.current);var s=null;switch(n){case"input":r=ef(t,r),i=ef(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=rf(t,r),i=rf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}of(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function fo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function hS(t,e,n){var i=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return cn(e.type)&&Xl(),Ht(e),null;case 3:return i=e.stateNode,Vs(),gt(ln),gt(jt),gd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Vf(Vn),Vn=null))),Nf(t,e),Ht(e),null;case 5:md(e);var r=Lr(na.current);if(n=e.type,t!==null&&e.stateNode!=null)kv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Ht(e),null}if(t=Lr(ni.current),Ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[ea]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)mt(Ao[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":gp(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":_p(i,s),mt("invalid",i)}of(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":Ta(i),vp(i,s,!0);break;case"textarea":Ta(i),xp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=d0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[ea]=i,Ov(t,e,!1,!1),e.stateNode=t;e:{switch(o=af(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)mt(Ao[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":gp(t,i),r=ef(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),mt("invalid",t);break;case"textarea":_p(t,i),r=rf(t,i),mt("invalid",t);break;default:r=i}of(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xo(t,l):typeof l=="number"&&Xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&jh(t,s,l,o))}switch(n){case"input":Ta(t),vp(t,i,!1);break;case"textarea":Ta(t),xp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Lr(na.current),Lr(ni.current),Ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Ht(e),null;case 13:if(gt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&gn!==null&&e.mode&1&&!(e.flags&128))iv(),zs(),e.flags|=98560,s=!1;else if(s=Ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Jn]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Vn!==null&&(Vf(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?bt===0&&(bt=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Vs(),Nf(t,e),t===null&&Jo(e.stateNode.containerInfo),Ht(e),null;case 10:return fd(e.type._context),Ht(e),null;case 17:return cn(e.type)&&Xl(),Ht(e),null;case 19:if(gt(_t),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fo(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Gs&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Ht(e),null}else 2*wt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=_t.current,ht(_t,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Cd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function dS(t,e){switch(ad(e),e.tag){case 1:return cn(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),gt(ln),gt(jt),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(gt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(_t),null;case 4:return Vs(),null;case 10:return fd(e.type._context),null;case 22:case 23:return Cd(),null;case 24:return null;default:return null}}var Oa=!1,Xt=!1,pS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function If(t,e,n){try{n()}catch(i){Et(t,e,i)}}var lm=!1;function mS(t,e){if(vf=Vl,t=W0(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},Vl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){Et(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=lm,lm=!1,g}function Fo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&If(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bv(t){var e=t.alternate;e!==null&&(t.alternate=null,Bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[ea],delete e[Sf],delete e[Ky],delete e[Jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}var Ot=null,Bn=!1;function Li(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:Xt||ws(n,e);case 6:var i=Ot,r=Bn;Ot=null,Li(t,e,n),Ot=i,Bn=r,Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),qo(t)):Jc(Ot,n.stateNode));break;case 4:i=Ot,r=Bn,Ot=n.stateNode.containerInfo,Bn=!0,Li(t,e,n),Ot=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&If(n,e,o),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Xt&&(ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Li(t,e,n),Xt=i):Li(t,e,n);break;default:Li(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pS),e.forEach(function(i){var r=wS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Bn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Bn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Ot===null)throw Error(re(160));Hv(s,o,r),Ot=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),qn(t),i&4){try{Fo(3,t,t.return),yc(3,t)}catch(y){Et(t,t.return,y)}try{Fo(5,t,t.return)}catch(y){Et(t,t.return,y)}}break;case 1:In(e,t),qn(t),i&512&&n!==null&&ws(n,n.return);break;case 5:if(In(e,t),qn(t),i&512&&n!==null&&ws(n,n.return),t.flags&32){var r=t.stateNode;try{Xo(r,"")}catch(y){Et(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&f0(r,s),af(a,o);var c=af(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?g0(r,h):u==="dangerouslySetInnerHTML"?p0(r,h):u==="children"?Xo(r,h):jh(r,u,h,c)}switch(a){case"input":tf(r,s);break;case"textarea":h0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(y){Et(t,t.return,y)}}break;case 6:if(In(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Et(t,t.return,y)}}break;case 3:if(In(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(y){Et(t,t.return,y)}break;case 4:In(e,t),qn(t);break;case 13:In(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Td=wt())),i&4&&um(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,In(e,t),Xt=c):In(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(h=Ee=u;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:Fo(4,d,d.return);break;case 1:ws(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Et(i,n,y)}}break;case 5:ws(d,d.return);break;case 22:if(d.memoizedState!==null){hm(h);continue}}p!==null?(p.return=d,Ee=p):hm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m0("display",o))}catch(y){Et(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Et(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:In(e,t),qn(t),i&4&&um(t);break;case 21:break;default:In(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xo(r,""),i.flags&=-33);var s=cm(t);Of(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cm(t);Ff(t,a,o);break;default:throw Error(re(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gS(t,e,n){Ee=t,Wv(t)}function Wv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=Oa;var c=Xt;if(Oa=o,(Xt=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?dm(r):l!==null?(l.return=o,Ee=l):dm(r);for(;s!==null;)Ee=s,Wv(s),s=s.sibling;Ee=r,Oa=a,Xt=c}fm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):fm(t)}}function fm(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&qo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Xt||e.flags&512&&Uf(e)}catch(d){Et(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function hm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function dm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Uf(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Uf(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var vS=Math.ceil,tc=Ri.ReactCurrentDispatcher,Ed=Ri.ReactCurrentOwner,Pn=Ri.ReactCurrentBatchConfig,Je=0,Ft=null,Ct=null,kt=0,pn=0,Ts=hr(0),bt=0,oa=null,zr=0,Sc=0,wd=0,Oo=null,sn=null,Td=0,Gs=1/0,pi=null,nc=!1,kf=null,Qi=null,ka=!1,ji=null,ic=0,ko=0,zf=null,Al=-1,Cl=0;function Zt(){return Je&6?wt():Al!==-1?Al:Al=wt()}function er(t){return t.mode&1?Je&2&&kt!==0?kt&-kt:eS.transition!==null?(Cl===0&&(Cl=R0()),Cl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:U0(t.type)),t):1}function Xn(t,e,n,i){if(50<ko)throw ko=0,zf=null,Error(re(185));da(t,n,i),(!(Je&2)||t!==Ft)&&(t===Ft&&(!(Je&2)&&(Sc|=n),bt===4&&Gi(t,kt)),un(t,i),n===1&&Je===0&&!(e.mode&1)&&(Gs=wt()+500,vc&&dr()))}function un(t,e){var n=t.callbackNode;ey(t,e);var i=Bl(t,t===Ft?kt:0);if(i===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?Qy(pm.bind(null,t)):ev(pm.bind(null,t)),qy(function(){!(Je&6)&&dr()}),n=null;else{switch(P0(i)){case 1:n=Kh;break;case 4:n=A0;break;case 16:n=zl;break;case 536870912:n=C0;break;default:n=zl}n=Jv(n,Xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xv(t,e){if(Al=-1,Cl=0,Je&6)throw Error(re(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Bl(t,t===Ft?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=Je;Je|=2;var s=Yv();(Ft!==t||kt!==e)&&(pi=null,Gs=wt()+500,Ir(t,e));do try{yS();break}catch(a){jv(t,a)}while(!0);ud(),tc.current=s,Je=r,Ct!==null?e=0:(Ft=null,kt=0,e=bt)}if(e!==0){if(e===2&&(r=hf(t),r!==0&&(i=r,e=Bf(t,r))),e===1)throw n=oa,Ir(t,0),Gi(t,i),un(t,wt()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!_S(r)&&(e=rc(t,i),e===2&&(s=hf(t),s!==0&&(i=s,e=Bf(t,s))),e===1))throw n=oa,Ir(t,0),Gi(t,i),un(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Er(t,sn,pi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=Td+500-wt(),10<e)){if(Bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yf(Er.bind(null,t,sn,pi),e);break}Er(t,sn,pi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vS(i/1960))-i,10<i){t.timeoutHandle=yf(Er.bind(null,t,sn,pi),i);break}Er(t,sn,pi);break;case 5:Er(t,sn,pi);break;default:throw Error(re(329))}}}return un(t,wt()),t.callbackNode===n?Xv.bind(null,t):null}function Bf(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=rc(t,e),t!==2&&(e=sn,sn=n,e!==null&&Vf(e)),t}function Vf(t){sn===null?sn=t:sn.push.apply(sn,t)}function _S(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~wd,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function pm(t){if(Je&6)throw Error(re(327));Ns();var e=Bl(t,0);if(!(e&1))return un(t,wt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=hf(t);i!==0&&(e=i,n=Bf(t,i))}if(n===1)throw n=oa,Ir(t,0),Gi(t,e),un(t,wt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,sn,pi),un(t,wt()),null}function Ad(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Gs=wt()+500,vc&&dr())}}function Br(t){ji!==null&&ji.tag===0&&!(Je&6)&&Ns();var e=Je;Je|=1;var n=Pn.transition,i=rt;try{if(Pn.transition=null,rt=1,t)return t()}finally{rt=i,Pn.transition=n,Je=e,!(Je&6)&&dr()}}function Cd(){pn=Ts.current,gt(Ts)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$y(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xl();break;case 3:Vs(),gt(ln),gt(jt),gd();break;case 5:md(i);break;case 4:Vs();break;case 13:gt(_t);break;case 19:gt(_t);break;case 10:fd(i.type._context);break;case 22:case 23:Cd()}n=n.return}if(Ft=t,Ct=t=tr(t.current,null),kt=pn=e,bt=0,oa=null,wd=Sc=zr=0,sn=Oo=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}br=null}return t}function jv(t,e){do{var n=Ct;try{if(ud(),El.current=ec,Ql){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(kr=0,Ut=Rt=yt=null,Uo=!1,ia=0,Ed.current=null,n===null||n.return===null){bt=1,oa=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=tm(o);if(p!==null){p.flags&=-257,nm(p,o,a,s,e),p.mode&1&&em(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){em(s,c,e),Rd();break e}l=Error(re(426))}}else if(vt&&a.mode&1){var m=tm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),nm(m,o,a,s,e),ld(Hs(l,a));break e}}s=l=Hs(l,a),bt!==4&&(bt=2),Oo===null?Oo=[s]:Oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Pv(s,l,e);$p(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Qi===null||!Qi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=bv(s,a,e);$p(s,x);break e}}s=s.return}while(s!==null)}qv(n)}catch(L){e=L,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Yv(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Rd(){(bt===0||bt===3||bt===2)&&(bt=4),Ft===null||!(zr&268435455)&&!(Sc&268435455)||Gi(Ft,kt)}function rc(t,e){var n=Je;Je|=2;var i=Yv();(Ft!==t||kt!==e)&&(pi=null,Ir(t,e));do try{xS();break}catch(r){jv(t,r)}while(!0);if(ud(),Je=n,tc.current=i,Ct!==null)throw Error(re(261));return Ft=null,kt=0,bt}function xS(){for(;Ct!==null;)$v(Ct)}function yS(){for(;Ct!==null&&!Xx();)$v(Ct)}function $v(t){var e=Kv(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?qv(t):Ct=e,Ed.current=null}function qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dS(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Ct=null;return}}else if(n=hS(n,e,pn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);bt===0&&(bt=5)}function Er(t,e,n){var i=rt,r=Pn.transition;try{Pn.transition=null,rt=1,SS(t,e,n,i)}finally{Pn.transition=r,rt=i}return null}function SS(t,e,n,i){do Ns();while(ji!==null);if(Je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ty(t,s),t===Ft&&(Ct=Ft=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,Jv(zl,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=rt;rt=1;var a=Je;Je|=4,Ed.current=null,mS(t,n),Gv(n,t),Vy(_f),Vl=!!vf,_f=vf=null,t.current=n,gS(n),jx(),Je=a,rt=o,Pn.transition=s}else t.current=n;if(ka&&(ka=!1,ji=t,ic=r),s=t.pendingLanes,s===0&&(Qi=null),qx(n.stateNode),un(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=kf,kf=null,t;return ic&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===zf?ko++:(ko=0,zf=t):ko=0,dr(),null}function Ns(){if(ji!==null){var t=P0(ic),e=Pn.transition,n=rt;try{if(Pn.transition=null,rt=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,ic=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:Fo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ee=h;else for(;Ee!==null;){u=Ee;var d=u.sibling,p=u.return;if(Bv(u),u===c){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(L){Et(a,a.return,L)}if(a===o){Ee=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ee=x;break e}Ee=a.return}}if(Je=r,dr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(hc,t)}catch{}i=!0}return i}finally{rt=n,Pn.transition=e}}return!1}function mm(t,e,n){e=Hs(n,e),e=Pv(t,e,1),t=Ji(t,e,1),e=Zt(),t!==null&&(da(t,1,e),un(t,e))}function Et(t,e,n){if(t.tag===3)mm(t,t,n);else for(;e!==null;){if(e.tag===3){mm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Hs(n,t),t=bv(e,t,1),e=Ji(e,t,1),t=Zt(),e!==null&&(da(e,1,t),un(e,t));break}}e=e.return}}function MS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(kt&n)===n&&(bt===4||bt===3&&(kt&130023424)===kt&&500>wt()-Td?Ir(t,0):wd|=n),un(t,e)}function Zv(t,e){e===0&&(t.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var n=Zt();t=Ti(t,e),t!==null&&(da(t,e,n),un(t,n))}function ES(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zv(t,n)}function wS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Zv(t,n)}var Kv;Kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,fS(t,e,n);an=!!(t.flags&131072)}else an=!1,vt&&e.flags&1048576&&tv(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Tl(t,e),t=e.pendingProps;var r=ks(e,jt.current);Ds(e,n),r=_d(null,e,i,t,r,n);var s=xd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dd(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,Cf(e,i,t,n),e=bf(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&od(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=AS(i),t=zn(i,t),r){case 0:e=Pf(null,e,i,t,n);break e;case 1:e=sm(null,e,i,t,n);break e;case 11:e=im(null,e,i,t,n);break e;case 14:e=rm(null,e,i,zn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),sm(t,e,i,r,n);case 3:e:{if(Iv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,av(t,e),Kl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(re(423)),e),e=om(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(re(424)),e),e=om(t,e,i,n,r);break e}else for(gn=Ki(e.stateNode.containerInfo.firstChild),vn=e,vt=!0,Vn=null,n=sv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=Ai(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return lv(e),t===null&&wf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,xf(i,r)?o=null:s!==null&&xf(i,s)&&(e.flags|=32),Nv(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&wf(e),null;case 13:return Uv(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),im(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(ql,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!ln.current){e=Ai(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Tf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=bn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),rm(t,e,i,r,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Tl(t,e),e.tag=1,cn(i)?(t=!0,jl(e)):t=!1,Ds(e,n),Rv(e,i,r),Cf(e,i,r,n),bf(null,e,i,!0,t,n);case 19:return Fv(t,e,n);case 22:return Dv(t,e,n)}throw Error(re(156,e.tag))};function Jv(t,e){return T0(t,e)}function TS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new TS(t,e,n,i)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AS(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===qh)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Ur(n.children,r,s,e);case Yh:o=8,r|=8;break;case Zu:return t=Rn(12,n,e,r|2),t.elementType=Zu,t.lanes=s,t;case Ku:return t=Rn(13,n,e,r),t.elementType=Ku,t.lanes=s,t;case Ju:return t=Rn(19,n,e,r),t.elementType=Ju,t.lanes=s,t;case l0:return Mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o0:o=10;break e;case a0:o=9;break e;case $h:o=11;break e;case qh:o=14;break e;case zi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Mc(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=l0,t.lanes=n,t.stateNode={isHidden:!1},t}function ou(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function au(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bd(t,e,n,i,r,s,o,a,l){return t=new CS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(s),t}function RS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return ar;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(cn(n))return Q0(t,n,e)}return e}function e_(t,e,n,i,r,s,o,a,l){return t=bd(n,i,!0,t,r,s,o,a,l),t.context=Qv(null),n=t.current,i=Zt(),r=er(n),s=yi(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,da(t,r,i),un(t,i),t}function Ec(t,e,n,i){var r=e.current,s=Zt(),o=er(r);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,o),t!==null&&(Xn(t,r,o,s),Ml(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ld(t,e){gm(t,e),(t=t.alternate)&&gm(t,e)}function PS(){return null}var t_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}wc.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Ec(t,e,null,null)};wc.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Ec(null,t,null,null)}),e[wi]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=D0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&I0(t)}};function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function bS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(o);s.call(c)}}var o=e_(e,i,t,0,null,!1,!1,"",vm);return t._reactRootContainer=o,t[wi]=o.current,Jo(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sc(l);a.call(c)}}var l=bd(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[wi]=l.current,Jo(t.nodeType===8?t.parentNode:t),Br(function(){Ec(e,l,n,i)}),l}function Ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}Ec(e,o,t,r)}else o=bS(n,e,t,r,i);return sc(o)}b0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(Jh(e,n|1),un(e,wt()),!(Je&6)&&(Gs=wt()+500,dr()))}break;case 13:Br(function(){var i=Ti(t,1);if(i!==null){var r=Zt();Xn(i,t,1,r)}}),Ld(t,1)}};Qh=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=Zt();Xn(e,t,134217728,n)}Ld(t,134217728)}};L0=function(t){if(t.tag===13){var e=er(t),n=Ti(t,e);if(n!==null){var i=Zt();Xn(n,t,e,i)}Ld(t,e)}};D0=function(){return rt};N0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};cf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gc(i);if(!r)throw Error(re(90));u0(i),tf(i,r)}}}break;case"textarea":h0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};x0=Ad;y0=Br;var LS={usingClientEntryPoint:!1,Events:[ma,xs,gc,v0,_0,Ad]},ho={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DS={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E0(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{hc=za.inject(DS),ti=za}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LS;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(re(200));return RS(t,e,null,n)};yn.createRoot=function(t,e){if(!Nd(t))throw Error(re(299));var n=!1,i="",r=t_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bd(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,Jo(t.nodeType===8?t.parentNode:t),new Dd(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=E0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Br(t)};yn.hydrate=function(t,e,n){if(!Tc(e))throw Error(re(200));return Ac(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Nd(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=t_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=e_(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,Jo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wc(e)};yn.render=function(t,e,n){if(!Tc(e))throw Error(re(200));return Ac(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(re(40));return t._reactRootContainer?(Br(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};yn.unstable_batchedUpdates=Ad;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Ac(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function n_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n_)}catch(t){console.error(t)}}n_(),n0.exports=yn;var NS=n0.exports,i_,_m=NS;i_=_m.createRoot,_m.hydrateRoot;const IS={intro:{EXPAND:"expanding"},expanding:{EXPANDED:"names"},names:{OPEN:"opening",CONTRACT:"contracting"},contracting:{CONTRACTED:"intro"},opening:{OPENED:"invitation"},invitation:{CLOSE:"closing"},closing:{CLOSED:"names"}};function US(t,e){return IS[t][e.type]??t}const FS={names:6500,invitation:15e3},OS=['100px "Great Vibes"','500 40px "Cormorant Garamond"','500 14px "DM Sans"'];let lu=null;function r_(){if(!lu){const t="fonts"in document?Promise.all(OS.map(e=>document.fonts.load(e))).then(()=>{}):Promise.resolve();lu=Promise.race([t,new Promise(e=>setTimeout(e,3500))]).catch(()=>{})}return lu}function kS(){const[t,e]=pe.useState(!1);return pe.useEffect(()=>{let n=!0;return r_().then(()=>n&&e(!0)),()=>{n=!1}},[]),t}const xm="(prefers-reduced-motion: reduce)";function zS(){const[t,e]=pe.useState(()=>typeof matchMedia<"u"&&matchMedia(xm).matches);return pe.useEffect(()=>{const n=matchMedia(xm),i=()=>e(n.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}const s_="vm-invite-sound";let ct=null,Si=null,Id=BS();function BS(){try{return localStorage.getItem(s_)!=="off"}catch{return!0}}function VS(){return Id}function HS(t){Id=t;try{localStorage.setItem(s_,t?"on":"off")}catch{}}function ds(){try{if(!ct){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;ct=new t,Si=ct.createGain(),Si.gain.value=.22;const e=ct.createBiquadFilter();e.type="lowpass",e.frequency.value=5200,Si.connect(e).connect(ct.destination)}ct.state==="suspended"&&ct.resume()}catch{}}function Ba(t,e,n,i,r="sine",s){if(!ct||!Si)return;const o=ct.createOscillator(),a=ct.createGain();o.type=r,o.frequency.setValueAtTime(t,e),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(i,e+.008),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(a).connect(Si),o.start(e),o.stop(e+n+.05)}const ym=new Map;function GS(t){if(!ct)return null;const e=ym.get(t);if(e)return e;const n=ct.sampleRate,i=Math.floor(n*2.2),r=ct.createBuffer(1,i,n),s=r.getChannelData(0),o=Math.max(2,Math.round(n/t)),a=new Float32Array(o);let l=0;for(let h=0;h<o;h++){const d=Math.random()*2-1;l=l*.55+d*.45,a[h]=l}let c=0;for(let h=0;h<i;h++){const d=(c+1)%o;s[h]=a[c],a[c]=.4985*(a[c]+a[d]),c=d}const u=Math.floor(n*.4);for(let h=0;h<u;h++)s[i-u+h]*=1-h/u;return ym.set(t,r),r}function po(t,e,n){if(!ct||!Si)return;const i=GS(t);if(!i)return;const r=ct.createBufferSource();r.buffer=i;const s=ct.createBiquadFilter();s.type="lowpass",s.frequency.value=Math.min(4200,t*6);const o=ct.createGain();o.gain.setValueAtTime(n,e),o.gain.exponentialRampToValueAtTime(1e-4,e+2.1),r.connect(s).connect(o).connect(Si),r.start(e)}function cu(t,e,n=2400){if(!ct||!Si)return;const r=ct.createBuffer(1,Math.floor(ct.sampleRate*.05),ct.sampleRate),s=r.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*Math.pow(1-c/s.length,3);const o=ct.createBufferSource();o.buffer=r;const a=ct.createBiquadFilter();a.type="bandpass",a.frequency.value=n,a.Q.value=1.2;const l=ct.createGain();l.gain.value=e,o.connect(a).connect(l).connect(Si),o.start(t)}function wr(t){if(!Id||!ct||ct.state!=="running")return;const e=ct.currentTime+.005;switch(t){case"pluck":po(293.66,e,.55),po(440,e+.07,.45),po(587.33,e+.14,.38);break;case"unpluck":po(440,e,.28),po(293.66,e+.09,.28);break;case"tap":cu(e,.16,1800),Ba(1318.5,e,.18,.04);break;case"open":cu(e,.18,900),[1046.5,1318.5,1568,2093].forEach((n,i)=>Ba(n,e+.18+i*.11,1.6,.07));break;case"close":cu(e+.55,.14,700),Ba(784,e,.5,.05),Ba(587.33,e+.12,.7,.05);break}}const WS="rgba(118,142,112,0.55)",XS="rgba(108,134,104,0.5)",jS="rgba(147,168,142,0.28)",uu="rgba(244,200,210,0.62)",Sm="rgba(201,130,146,0.5)",Mm="180,138,69",kn=Math.PI*2,YS=t=>()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function o_(t,e,n){const i=[],r=Math.max(3,Math.round(e/24));for(let o=0;o<r;o++){const a=.12+.8*(o/r)+t()*.05;i.push({t:a,side:o%2?1:-1,size:(10+t()*7)*(1-a*.35)*(n?.82:1),phase:t()*kn})}const s=[];if(n<2){const o=n===0?2:1;for(let a=0;a<o;a++){const l=o_(t,e*(.4+t()*.15),n+1);l.t=.34+a*.26+t()*.06,l.angle=(a%2?1:-1)*(.55+t()*.25),s.push(l)}}return{len:e,curve:(t()-.5)*.5,angle:0,t:0,leaves:i,kids:s,flower:n<2||t()<.5?6+t()*4:0,bud:t()<.5,period:9e3+t()*9e3,phase:t()*kn}}class $S{constructor(e,n){this.canvas=e,this.reduced=n,this.roots=[],this.motes=[],this.petals=[],this.w=0,this.h=0,this.raf=0,this.last=0,this.par={x:0,y:0,tx:0,ty:0},this.onResize=()=>{this.build(),this.reduced&&this.paint(0)},this.onPointer=i=>{i.pointerType==="mouse"&&(this.par.tx=i.clientX/this.w*2-1,this.par.ty=i.clientY/this.h*2-1)},this.frame=i=>{this.raf=requestAnimationFrame(this.frame);const r=Math.min(50,i-(this.last||i))/16.7;this.last=i,this.par.x+=(this.par.tx-this.par.x)*.035,this.par.y+=(this.par.ty-this.par.y)*.035;for(const s of this.petals)s.x+=s.vx*r,s.y+=s.vy*r,s.rot+=s.vr*r,(s.y>this.h+20||s.x>this.w+20)&&Object.assign(s,this.newPetal(Math.random,!1));this.paint(i)},this.ctx=e.getContext("2d"),this.build(),window.addEventListener("resize",this.onResize),n?this.paint(0):(window.addEventListener("pointermove",this.onPointer),this.raf=requestAnimationFrame(this.frame))}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),window.removeEventListener("pointermove",this.onPointer)}build(){const e=Math.min(2,window.devicePixelRatio||1);if(this.w=window.innerWidth,this.h=window.innerHeight,this.w<2)return;this.canvas.width=this.w*e,this.canvas.height=this.h*e,this.ctx.setTransform(e,0,0,e,0,0);const n=YS(291126),i=Math.min(this.w,this.h),r=this.w<640,s=l=>l*Math.PI/180,o=Math.min(1.6,Math.max(.85,i/560)),a=(l,c,u,h,d,p)=>{const g=o_(n,h/o,0);return g.angle=u+Math.PI/2,{x:l,y:c,branch:g,depth:d,alpha:p,k:o}};for(this.roots=[a(-14,-14,s(58),i*(r?.46:.5),10,.95),a(-14,-8,s(16),i*(r?.3:.36),10,.85),a(this.w+14,this.h+14,s(236),i*(r?.3:.34),6,.62),a(this.w+12,this.h+6,s(204),i*.2,6,.55)],this.motes=[];this.motes.length<(r?8:14);){const l=n()*this.w,c=n()*this.h,u=(l-this.w/2)/(this.w*.34),h=(c-this.h/2)/(this.h*.34);u*u+h*h<1||this.motes.push({x:l,y:c,r:.6+n()*1,period:8e3+n()*7e3,phase:n()*kn})}this.petals=Array.from({length:r?3:5},()=>this.newPetal(n,!0))}newPetal(e,n){return{x:n?e()*this.w:-20+e()*this.w*.4,y:n?e()*this.h:-20,s:4+e()*4,rot:e()*kn,vr:(e()-.5)*.004,vx:.05+e()*.1,vy:.1+e()*.12,phase:e()*kn}}paint(e){const{ctx:n}=this,i=this.reduced?0:1;n.clearRect(0,0,this.w,this.h);for(const r of this.roots)n.save(),n.globalAlpha=r.alpha,n.translate(r.x+this.par.x*r.depth,r.y+this.par.y*r.depth),n.scale(r.k,r.k),this.drawBranch(r.branch,e,i),n.restore();for(const r of this.motes){const s=.18+.4*(.5+.5*Math.sin(e/r.period*kn+r.phase)*i);n.fillStyle=`rgba(${Mm},${s.toFixed(3)})`,n.beginPath(),n.arc(r.x+this.par.x*4,r.y+this.par.y*4,r.r,0,kn),n.fill()}for(const r of this.petals)n.save(),n.translate(r.x+Math.sin(e/2600+r.phase)*10*i,r.y),n.rotate(r.rot),n.scale(1,.6+.4*Math.abs(Math.sin(e/1900+r.phase))),n.beginPath(),n.moveTo(0,-r.s),n.bezierCurveTo(r.s*.85,-r.s*.5,r.s*.6,r.s*.7,0,r.s),n.bezierCurveTo(-r.s*.6,r.s*.7,-r.s*.85,-r.s*.5,0,-r.s),n.fillStyle=uu,n.fill(),n.strokeStyle="rgba(201,130,146,0.35)",n.lineWidth=.6,n.stroke(),n.restore()}drawBranch(e,n,i){const{ctx:r}=this;r.rotate(e.angle+Math.sin(n/e.period*kn+e.phase)*.03*i);const s=e.curve*e.len,o=e.curve*e.len*.4,a=c=>{const u=1-c;return{x:2*u*c*s+c*c*o,y:2*u*c*(-e.len/2)+c*c*-e.len,a:Math.atan2(2*u*(-e.len/2)+2*c*(-e.len/2),2*u*s+2*c*(o-s))}};r.beginPath(),r.moveTo(0,0),r.quadraticCurveTo(s,-e.len/2,o,-e.len),r.strokeStyle=WS,r.lineWidth=.9,r.stroke();for(const c of e.leaves){const u=a(c.t);this.leaf(u.x,u.y,u.a+c.side*.8+Math.sin(n/7e3+c.phase)*.05*i,c.size)}for(const c of e.kids){const u=a(c.t);r.save(),r.translate(u.x,u.y),r.rotate(u.a+Math.PI/2),this.drawBranch(c,n,i),r.restore()}const l=a(1);e.flower?this.flower(l.x,l.y,e.flower,e.phase+Math.sin(n/15e3+e.phase)*.1*i):e.bud&&this.bud(l.x,l.y,l.a)}leaf(e,n,i,r){const{ctx:s}=this;s.save(),s.translate(e,n),s.rotate(i),s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(r*.5,-r*.32,r,0),s.quadraticCurveTo(r*.5,r*.32,0,0),s.fillStyle=jS,s.fill(),s.strokeStyle=XS,s.lineWidth=.75,s.stroke(),s.beginPath(),s.moveTo(r*.12,0),s.quadraticCurveTo(r*.5,-r*.04,r*.85,0),s.lineWidth=.45,s.stroke(),s.restore()}flower(e,n,i,r){const{ctx:s}=this;s.save(),s.translate(e,n),s.rotate(r);for(let o=0;o<5;o++)s.save(),s.rotate(o*kn/5),s.beginPath(),s.moveTo(0,0),s.bezierCurveTo(-i*.55,-i*.35,-i*.42,-i*1.05,0,-i),s.bezierCurveTo(i*.42,-i*1.05,i*.55,-i*.35,0,0),s.fillStyle=uu,s.fill(),s.strokeStyle=Sm,s.lineWidth=.7,s.stroke(),s.restore();s.fillStyle=`rgba(${Mm},0.8)`;for(let o=0;o<6;o++){const a=o*kn/6;s.beginPath(),s.arc(Math.cos(a)*i*.22,Math.sin(a)*i*.22,i*.06,0,kn),s.fill()}s.restore()}bud(e,n,i){const{ctx:r}=this;r.save(),r.translate(e,n),r.rotate(i+Math.PI/2),r.beginPath(),r.moveTo(0,0),r.bezierCurveTo(-3,-3,-2,-8,0,-9),r.bezierCurveTo(2,-8,3,-3,0,0),r.fillStyle=uu,r.fill(),r.strokeStyle=Sm,r.lineWidth=.7,r.stroke(),r.restore()}}function qS({receded:t,reduced:e}){const n=pe.useRef(null);return pe.useEffect(()=>{const i=new $S(n.current,e);return()=>i.dispose()},[e]),he.jsx("div",{className:`floral ${t?"is-receded":""}`,"aria-hidden":"true",children:he.jsx("canvas",{ref:n})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="170",ZS=0,Em=1,KS=2,a_=1,l_=2,di=3,lr=0,Kt=1,Qn=2,nr=0,Is=1,Hf=2,wm=3,Tm=4,JS=5,Ar=100,QS=101,eM=102,tM=103,nM=104,iM=200,rM=201,sM=202,oM=203,Gf=204,Wf=205,aM=206,lM=207,cM=208,uM=209,fM=210,hM=211,dM=212,pM=213,mM=214,Xf=0,jf=1,Yf=2,Ws=3,$f=4,qf=5,Zf=6,Kf=7,c_=0,gM=1,vM=2,ir=0,_M=1,xM=2,yM=3,SM=4,MM=5,EM=6,u_=7,f_=300,Xs=301,js=302,Jf=303,Qf=304,Cc=306,eh=1e3,Dr=1001,th=1002,jn=1003,wM=1004,Va=1005,ei=1006,fu=1007,Nr=1008,Ci=1009,h_=1010,d_=1011,aa=1012,Fd=1013,Vr=1014,_i=1015,va=1016,Od=1017,kd=1018,Ys=1020,p_=35902,m_=1021,g_=1022,Gn=1023,v_=1024,__=1025,Us=1026,$s=1027,x_=1028,zd=1029,y_=1030,Bd=1031,Vd=1033,Pl=33776,bl=33777,Ll=33778,Dl=33779,nh=35840,ih=35841,rh=35842,sh=35843,oh=36196,ah=37492,lh=37496,ch=37808,uh=37809,fh=37810,hh=37811,dh=37812,ph=37813,mh=37814,gh=37815,vh=37816,_h=37817,xh=37818,yh=37819,Sh=37820,Mh=37821,Nl=36492,Eh=36494,wh=36495,S_=36283,Th=36284,Ah=36285,Ch=36286,TM=3200,AM=3201,M_=0,CM=1,Wi="",rn="srgb",Qs="srgb-linear",Rc="linear",st="srgb",$r=7680,Am=519,RM=512,PM=513,bM=514,E_=515,LM=516,DM=517,NM=518,IM=519,Rh=35044,Cm="300 es",xi=2e3,oc=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rm=1234567;const zo=Math.PI/180,la=180/Math.PI;function ii(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Pt(t,e,n){return Math.max(e,Math.min(n,t))}function Hd(t,e){return(t%e+e)%e}function UM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function FM(t,e,n){return t!==e?(n-t)/(e-t):0}function Bo(t,e,n){return(1-n)*t+n*e}function OM(t,e,n,i){return Bo(t,e,1-Math.exp(-n*i))}function kM(t,e=1){return e-Math.abs(Hd(t,e*2)-e)}function zM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function BM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function VM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function HM(t,e){return t+Math.random()*(e-t)}function GM(t){return t*(.5-Math.random())}function WM(t){t!==void 0&&(Rm=t);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XM(t){return t*zo}function jM(t){return t*la}function YM(t){return(t&t-1)===0&&t!==0}function $M(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function qM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ZM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Pc={DEG2RAD:zo,RAD2DEG:la,generateUUID:ii,clamp:Pt,euclideanModulo:Hd,mapLinear:UM,inverseLerp:FM,lerp:Bo,damp:OM,pingpong:kM,smoothstep:zM,smootherstep:BM,randInt:VM,randFloat:HM,randFloatSpread:GM,seededRandom:WM,degToRad:XM,radToDeg:jM,isPowerOfTwo:YM,ceilPowerOfTwo:$M,floorPowerOfTwo:qM,setQuaternionFromProperEuler:ZM,normalize:it,denormalize:Hn};class oe{constructor(e=0,n=0){oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],f=r[6],v=r[1],_=r[4],x=r[7],L=r[2],T=r[5],C=r[8];return s[0]=o*y+a*v+l*L,s[3]=o*m+a*_+l*T,s[6]=o*f+a*x+l*C,s[1]=c*y+u*v+h*L,s[4]=c*m+u*_+h*T,s[7]=c*f+u*x+h*C,s[2]=d*y+p*v+g*L,s[5]=d*m+p*_+g*T,s[8]=d*f+p*x+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hu.makeScale(e,n)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hu=new Ge;function w_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KM(){const t=ac("canvas");return t.style.display="block",t}const Pm={};function Co(t){t in Pm||(Pm[t]=!0,console.warn(t))}function JM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function QM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function e1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===st&&(t.r=Mi(t.r),t.g=Mi(t.g),t.b=Mi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===st&&(t.r=Fs(t.r),t.g=Fs(t.g),t.b=Fs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Wi?Rc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const bm=[.64,.33,.3,.6,.15,.06],Lm=[.2126,.7152,.0722],Dm=[.3127,.329],Nm=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Qs]:{primaries:bm,whitePoint:Dm,transfer:Rc,toXYZ:Nm,fromXYZ:Im,luminanceCoefficients:Lm,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:bm,whitePoint:Dm,transfer:st,toXYZ:Nm,fromXYZ:Im,luminanceCoefficients:Lm,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let qr;class t1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=ac("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Mi(n[i]/255)*255):n[i]=Mi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n1=0;class T_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(du(r[o].image)):s.push(du(r[o]))}else s=du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?t1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i1=0;class Jt extends eo{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=Dr,r=Dr,s=ei,o=Nr,a=Gn,l=Ci,c=Jt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=ii(),this.name="",this.source=new T_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=f_;Jt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(p+1)/2,L=(f+1)/2,T=(u+d)/4,C=(h+y)/4,P=(g+m)/4;return _>x&&_>L?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=P/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=C/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r1 extends eo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new T_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends r1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class A_ extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s1 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(h!==y||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*y,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const L=Math.sqrt(_),T=Math.atan2(L,f*v);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}const x=a*v;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+y*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new D,Um=new _a;class xa{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ga.subVectors(this.max,mo),Zr.subVectors(e.a,mo),Kr.subVectors(e.b,mo),Jr.subVectors(e.c,mo),Di.subVectors(Kr,Zr),Ni.subVectors(Jr,Kr),gr.subVectors(Zr,Jr);let n=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-gr.z,gr.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,gr.z,0,-gr.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-gr.y,gr.x,0];return!mu(n,Zr,Kr,Jr,Ga)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,Zr,Kr,Jr,Ga))?!1:(Wa.crossVectors(Di,Ni),n=[Wa.x,Wa.y,Wa.z],mu(n,Zr,Kr,Jr,Ga))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,Ha=new xa,Zr=new D,Kr=new D,Jr=new D,Di=new D,Ni=new D,gr=new D,mo=new D,Ga=new D,Wa=new D,vr=new D;function mu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){vr.fromArray(t,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const o1=new xa,go=new D,gu=new D;class bc{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):o1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(gu)),this.expandByPoint(go.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new D,vu=new D,Xa=new D,Ii=new D,_u=new D,ja=new D,xu=new D;class Gd{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vu.copy(e).add(n).multiplyScalar(.5),Xa.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(vu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xa),a=Ii.dot(this.direction),l=-Ii.dot(Xa),c=Ii.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vu).addScaledVector(Xa,d),p}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){_u.subVectors(n,e),ja.subVectors(i,e),xu.crossVectors(_u,ja);let o=this.direction.dot(xu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(ja.crossVectors(Ii,ja));if(l<0)return null;const c=a*this.direction.dot(_u.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(xu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),o=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,y=c*h;n[0]=d+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,y=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,l1)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ui.crossVectors(i,hn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ui.crossVectors(i,hn)),Ui.normalize(),Ya.crossVectors(hn,Ui),r[0]=Ui.x,r[4]=Ya.x,r[8]=hn.x,r[1]=Ui.y,r[5]=Ya.y,r[9]=hn.y,r[2]=Ui.z,r[6]=Ya.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],v=i[3],_=i[7],x=i[11],L=i[15],T=r[0],C=r[4],P=r[8],w=r[12],S=r[1],R=r[5],I=r[9],U=r[13],z=r[2],W=r[6],V=r[10],$=r[14],N=r[3],j=r[7],Z=r[11],ie=r[15];return s[0]=o*T+a*S+l*z+c*N,s[4]=o*C+a*R+l*W+c*j,s[8]=o*P+a*I+l*V+c*Z,s[12]=o*w+a*U+l*$+c*ie,s[1]=u*T+h*S+d*z+p*N,s[5]=u*C+h*R+d*W+p*j,s[9]=u*P+h*I+d*V+p*Z,s[13]=u*w+h*U+d*$+p*ie,s[2]=g*T+y*S+m*z+f*N,s[6]=g*C+y*R+m*W+f*j,s[10]=g*P+y*I+m*V+f*Z,s[14]=g*w+y*U+m*$+f*ie,s[3]=v*T+_*S+x*z+L*N,s[7]=v*C+_*R+x*W+L*j,s[11]=v*P+_*I+x*V+L*Z,s[15]=v*w+_*U+x*$+L*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],v=h*m*c-y*d*c+y*l*p-a*m*p-h*l*f+a*d*f,_=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,x=u*y*c-g*h*c+g*a*p-o*y*p-u*a*f+o*h*f,L=g*h*l-u*y*l-g*a*d+o*y*d+u*a*m-o*h*m,T=n*v+i*_+r*x+s*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(y*d*s-h*m*s-y*r*p+i*m*p+h*r*f-i*d*f)*C,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*C,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=_*C,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*f+n*d*f)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*f-n*l*f)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*C,e[8]=x*C,e[9]=(g*h*s-u*y*s-g*i*p+n*y*p+u*i*f-n*h*f)*C,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*f+n*a*f)*C,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*C,e[12]=L*C,e[13]=(u*y*r-g*h*r+g*i*d-n*y*d-u*i*m+n*h*m)*C,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*C,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,y=o*u,m=o*h,f=a*h,v=l*c,_=l*u,x=l*h,L=i.x,T=i.y,C=i.z;return r[0]=(1-(y+f))*L,r[1]=(p+x)*L,r[2]=(g-_)*L,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+_)*C,r[9]=(m-v)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,u=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=xi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===xi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===oc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,y;if(a===xi)g=(o+s)*h,y=-2*h;else if(a===oc)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new D,Fn=new lt,a1=new D(0,0,0),l1=new D(1,1,1),Ui=new D,Ya=new D,hn=new D,Fm=new lt,Om=new _a;class ri{constructor(e=0,n=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c1=0;const km=new D,es=new _a,ui=new lt,$a=new D,vo=new D,u1=new D,f1=new _a,zm=new D(1,0,0),Bm=new D(0,1,0),Vm=new D(0,0,1),Hm={type:"added"},h1={type:"removed"},ts={type:"childadded",child:null},yu={type:"childremoved",child:null};class Lt extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new D,n=new ri,i=new _a,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ge}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,n){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(vo,$a,this.up):ui.lookAt($a,vo,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),es.setFromRotationMatrix(ui),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(h1),yu.child=e,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,u1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,f1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new D,fi=new D,Su=new D,hi=new D,ns=new D,is=new D,Gm=new D,Mu=new D,Eu=new D,wu=new D,Tu=new at,Au=new at,Cu=new at;class Cn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),fi.subVectors(i,n),Su.subVectors(e,n);const o=On.dot(On),a=On.dot(fi),l=On.dot(Su),c=fi.dot(fi),u=fi.dot(Su),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Tu.setScalar(0),Au.setScalar(0),Cu.setScalar(0),Tu.fromBufferAttribute(e,n),Au.fromBufferAttribute(e,i),Cu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Tu,s.x),o.addScaledVector(Au,s.y),o.addScaledVector(Cu,s.z),o}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),fi.subVectors(e,n),On.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),On.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ns.subVectors(r,i),is.subVectors(s,i),Mu.subVectors(e,i);const l=ns.dot(Mu),c=is.dot(Mu);if(l<=0&&c<=0)return n.copy(i);Eu.subVectors(e,r);const u=ns.dot(Eu),h=is.dot(Eu);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ns,o);wu.subVectors(e,s);const p=ns.dot(wu),g=is.dot(wu);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(is,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Gm.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(Gm,a);const f=1/(m+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=Hd(e,1),n=Pt(n,0,1),i=Pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=rn){const i=C_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Ke.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Pt(Wt.r*255,0,255))*65536+Math.round(Pt(Wt.g*255,0,255))*256+Math.round(Pt(Wt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=rn){Ke.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(qa);const i=Bo(Fi.h,qa.h,n),r=Bo(Fi.s,qa.s,n),s=Bo(Fi.l,qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new We;We.NAMES=C_;let d1=0;class pr extends eo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=ii(),this.name="",this.blending=Is,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Wf,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gf&&(i.blendSrc=this.blendSrc),this.blendDst!==Wf&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lc extends pr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=c_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new D,Za=new oe;class _n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hn(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hn(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hn(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),e}}class R_ extends _n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class P_ extends _n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tt extends _n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let p1=0;const En=new lt,Pu=new Lt,rs=new D,dn=new xa,_o=new xa,It=new D;class tn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w_(e)?P_:R_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Pu.lookAt(e),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(dn.min,_o.min),dn.expandByPoint(It),It.addVectors(dn.max,_o.max),dn.expandByPoint(It)):(dn.expandByPoint(_o.min),dn.expandByPoint(_o.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),It.add(rs)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new D,l[P]=new D;const c=new D,u=new D,h=new D,d=new oe,p=new oe,g=new oe,y=new D,m=new D;function f(P,w,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(y),a[w].add(y),a[S].add(y),l[P].add(m),l[w].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){const S=v[P],R=S.start,I=S.count;for(let U=R,z=R+I;U<z;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new D,x=new D,L=new D,T=new D;function C(P){L.fromBufferAttribute(r,P),T.copy(L);const w=a[P];_.copy(w),_.sub(L.multiplyScalar(L.dot(w))).normalize(),x.crossVectors(T,w);const R=x.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,w=v.length;P<w;++P){const S=v[P],R=S.start,I=S.count;for(let U=R,z=R+I;U<z;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new _n(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new lt,_r=new Gd,Ka=new bc,Xm=new D,Ja=new D,Qa=new D,el=new D,bu=new D,tl=new D,jm=new D,nl=new D;class ot extends Lt{constructor(e=new tn,n=new Lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(bu.fromBufferAttribute(h,e),o?tl.addScaledVector(bu,u):tl.addScaledVector(bu.sub(n),u))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Ka.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ka,Xm)===null||_r.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,L=_;x<L;x+=3){const T=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);r=il(this,f,e,i,c,u,h,T,C,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=il(this,o,e,i,c,u,h,v,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,L=_;x<L;x+=3){const T=x,C=x+1,P=x+2;r=il(this,f,e,i,c,u,h,T,C,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=m,_=m+1,x=m+2;r=il(this,o,e,i,c,u,h,v,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function m1(t,e,n,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;nl.copy(a),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ja),t.getVertexPosition(l,Qa),t.getVertexPosition(c,el);const u=m1(t,e,n,i,Ja,Qa,el,jm);if(u){const h=new D;Cn.getBarycoord(jm,Ja,Qa,el,h),r&&(u.uv=Cn.getInterpolatedAttribute(r,a,l,c,h,new oe)),s&&(u.uv1=Cn.getInterpolatedAttribute(s,a,l,c,h,new oe)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Cn.getNormal(Ja,Qa,el,d.normal),u.face=d,u.barycoord=h}return u}class cr extends tn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function g(y,m,f,v,_,x,L,T,C,P,w){const S=x/C,R=L/P,I=x/2,U=L/2,z=T/2,W=C+1,V=P+1;let $=0,N=0;const j=new D;for(let Z=0;Z<V;Z++){const ie=Z*R-U;for(let ve=0;ve<W;ve++){const ke=ve*S-I;j[y]=ke*v,j[m]=ie*_,j[f]=z,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[f]=T>0?1:-1,u.push(j.x,j.y,j.z),h.push(ve/C),h.push(1-Z/P),$+=1}}for(let Z=0;Z<P;Z++)for(let ie=0;ie<C;ie++){const ve=d+ie+W*Z,ke=d+ie+W*(Z+1),X=d+(ie+1)+W*(Z+1),q=d+(ie+1)+W*Z;l.push(ve,ke,q),l.push(ke,X,q),N+=6}a.addGroup(p,N,w),p+=N,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function g1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function b_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const v1={clone:qs,merge:$t};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends pr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=x1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=g1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class L_ extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new D,Ym=new oe,$m=new oe;class on extends L_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,n){return this.getViewBounds(e,Ym,$m),n.subVectors($m,Ym)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,os=1;class y1 extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(ss,os,e,n);r.layers=this.layers,this.add(r);const s=new on(ss,os,e,n);s.layers=this.layers,this.add(s);const o=new on(ss,os,e,n);o.layers=this.layers,this.add(o);const a=new on(ss,os,e,n);a.layers=this.layers,this.add(a);const l=new on(ss,os,e,n);l.layers=this.layers,this.add(l);const c=new on(ss,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class D_ extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S1 extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new D_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cr(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:nr});s.uniforms.tEquirect.value=n;const o=new ot(r,s),a=n.minFilter;return n.minFilter===Nr&&(n.minFilter=ei),new y1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lu=new D,M1=new D,E1=new Ge;class Vi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lu.subVectors(i,n).cross(M1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||E1.getNormalMatrix(e),r=this.coplanarPoint(Lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new bc,rl=new D;class Xd{constructor(e=new Vi,n=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],v=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-f).normalize(),i[1].setComponents(l+s,d+c,m+p,x+f).normalize(),i[2].setComponents(l+o,d+u,m+g,x+v).normalize(),i[3].setComponents(l-o,d-u,m-g,x-v).normalize(),i[4].setComponents(l-a,d-h,m-y,x-_).normalize(),n===xi)i[5].setComponents(l+a,d+h,m+y,x+_).normalize();else if(n===oc)i[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function N_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function w1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Yi extends tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){const v=f*d-o;for(let _=0;_<c;_++){const x=_*h-s;g.push(x,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+c*f,x=v+c*(f+1),L=v+1+c*(f+1),T=v+1+c*f;p.push(_,x,T),p.push(x,L,T)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var T1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,D1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,I1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:T1,alphahash_pars_fragment:A1,alphamap_fragment:C1,alphamap_pars_fragment:R1,alphatest_fragment:P1,alphatest_pars_fragment:b1,aomap_fragment:L1,aomap_pars_fragment:D1,batching_pars_vertex:N1,batching_vertex:I1,begin_vertex:U1,beginnormal_vertex:F1,bsdfs:O1,iridescence_fragment:k1,bumpmap_pars_fragment:z1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:G1,color_fragment:W1,color_pars_fragment:X1,color_pars_vertex:j1,color_vertex:Y1,common:$1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:K1,displacementmap_vertex:J1,emissivemap_fragment:Q1,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:fE,gradientmap_pars_fragment:hE,lightmap_pars_fragment:dE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:_E,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:SE,lights_physical_fragment:ME,lights_physical_pars_fragment:EE,lights_fragment_begin:wE,lights_fragment_maps:TE,lights_fragment_end:AE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:bE,map_fragment:LE,map_pars_fragment:DE,map_particle_fragment:NE,map_particle_pars_fragment:IE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:FE,morphinstance_vertex:OE,morphcolor_vertex:kE,morphnormal_vertex:zE,morphtarget_pars_vertex:BE,morphtarget_vertex:VE,normal_fragment_begin:HE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:jE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:ZE,iridescence_pars_fragment:KE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:ew,project_vertex:tw,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:aw,shadowmap_vertex:lw,shadowmask_pars_fragment:cw,skinbase_vertex:uw,skinning_pars_vertex:fw,skinning_vertex:hw,skinnormal_vertex:dw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:vw,transmission_fragment:_w,transmission_pars_fragment:xw,uv_pars_fragment:yw,uv_pars_vertex:Sw,uv_vertex:Mw,worldpos_vertex:Ew,background_vert:ww,background_frag:Tw,backgroundCube_vert:Aw,backgroundCube_frag:Cw,cube_vert:Rw,cube_frag:Pw,depth_vert:bw,depth_frag:Lw,distanceRGBA_vert:Dw,distanceRGBA_frag:Nw,equirect_vert:Iw,equirect_frag:Uw,linedashed_vert:Fw,linedashed_frag:Ow,meshbasic_vert:kw,meshbasic_frag:zw,meshlambert_vert:Bw,meshlambert_frag:Vw,meshmatcap_vert:Hw,meshmatcap_frag:Gw,meshnormal_vert:Ww,meshnormal_frag:Xw,meshphong_vert:jw,meshphong_frag:Yw,meshphysical_vert:$w,meshphysical_frag:qw,meshtoon_vert:Zw,meshtoon_frag:Kw,points_vert:Jw,points_frag:Qw,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Kn={basic:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:$t([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:$t([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:$t([de.points,de.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:$t([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:$t([de.common,de.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:$t([de.sprite,de.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:$t([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:$t([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Kn.physical={uniforms:$t([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const sl={r:0,b:0,g:0},yr=new ri,rT=new lt;function sT(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const x=g(v);x===null?f(a,l):x&&x.isColor&&(f(x,1),_=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Cc)?(u===void 0&&(u=new ot(new cr(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:qs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yr.copy(_.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(yr)),u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==st,(h!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ot(new Yi(2,2),new ur({name:"BackgroundMaterial",uniforms:qs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(sl,b_(t)),i.buffers.color.setClear(sl.r,sl.g,sl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:y,addToRenderList:m}}function oT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,R,I,U,z){let W=!1;const V=h(U,I,R);s!==V&&(s=V,c(s.object)),W=p(S,U,I,z),W&&g(S,U,I,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(S,R,I,U),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,R,I){const U=I.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let W=z[R.id];W===void 0&&(W={},z[R.id]=W);let V=W[U];return V===void 0&&(V=d(l()),W[U]=V),V}function d(S){const R=[],I=[],U=[];for(let z=0;z<n;z++)R[z]=0,I[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,R,I,U){const z=s.attributes,W=R.attributes;let V=0;const $=I.getAttributes();for(const N in $)if($[N].location>=0){const Z=z[N];let ie=W[N];if(ie===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function g(S,R,I,U){const z={},W=R.attributes;let V=0;const $=I.getAttributes();for(const N in $)if($[N].location>=0){let Z=W[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),z[N]=ie,V++}s.attributes=z,s.attributesNum=V,s.index=U}function y(){const S=s.newAttributes;for(let R=0,I=S.length;R<I;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const I=s.newAttributes,U=s.enabledAttributes,z=s.attributeDivisors;I[S]=1,U[S]===0&&(t.enableVertexAttribArray(S),U[S]=1),z[S]!==R&&(t.vertexAttribDivisor(S,R),z[S]=R)}function v(){const S=s.newAttributes,R=s.enabledAttributes;for(let I=0,U=R.length;I<U;I++)R[I]!==S[I]&&(t.disableVertexAttribArray(I),R[I]=0)}function _(S,R,I,U,z,W,V){V===!0?t.vertexAttribIPointer(S,R,I,z,W):t.vertexAttribPointer(S,R,I,U,z,W)}function x(S,R,I,U){y();const z=U.attributes,W=I.getAttributes(),V=R.defaultAttributeValues;for(const $ in W){const N=W[$];if(N.location>=0){let j=z[$];if(j===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const Z=j.normalized,ie=j.itemSize,ve=e.get(j);if(ve===void 0)continue;const ke=ve.buffer,X=ve.type,q=ve.bytesPerElement,le=X===t.INT||X===t.UNSIGNED_INT||j.gpuType===Fd;if(j.isInterleavedBufferAttribute){const ne=j.data,Ce=ne.stride,ze=j.offset;if(ne.isInstancedInterleavedBuffer){for(let Fe=0;Fe<N.locationSize;Fe++)f(N.location+Fe,ne.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Fe=0;Fe<N.locationSize;Fe++)m(N.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Fe=0;Fe<N.locationSize;Fe++)_(N.location+Fe,ie/N.locationSize,X,Z,Ce*q,(ze+ie/N.locationSize*Fe)*q,le)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<N.locationSize;ne++)f(N.location+ne,j.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<N.locationSize;ne++)m(N.location+ne);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let ne=0;ne<N.locationSize;ne++)_(N.location+ne,ie/N.locationSize,X,Z,ie*q,ie/N.locationSize*ne*q,le)}}else if(V!==void 0){const Z=V[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}v()}function L(){P();for(const S in i){const R=i[S];for(const I in R){const U=R[I];for(const z in U)u(U[z].object),delete U[z];delete R[I]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const I in R){const U=R[I];for(const z in U)u(U[z].object),delete U[z];delete R[I]}delete i[S.id]}function C(S){for(const R in i){const I=i[R];if(I[S.id]===void 0)continue;const U=I[S.id];for(const z in U)u(U[z].object),delete U[z];delete I[S.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function aT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Gn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ci&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!P)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:L,maxSamples:T}}function cT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Vi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let x=f.clippingState||null;l.value=x,x=u(g,d,_,p);for(let L=0;L!==_;++L)x[L]=n[L];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function uT(t){let e=new WeakMap;function n(o,a){return a===Jf?o.mapping=Xs:a===Qf&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jf||a===Qf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new S1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class I_ extends L_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,qm=[.125,.215,.35,.446,.526,.582],Cr=20,Du=new I_,Zm=new We;let Nu=null,Iu=0,Uu=0,Fu=!1;const Tr=(1+Math.sqrt(5))/2,as=1/Tr,Km=[new D(-Tr,as,0),new D(Tr,as,0),new D(-as,0,Tr),new D(as,0,Tr),new D(0,Tr,-as),new D(0,Tr,as),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Iu,Uu),this._renderer.xr.enabled=Fu,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:va,format:Gn,colorSpace:Qs,depthBuffer:!1},r=Jm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(s)),this._blurMaterial=hT(s,e,n)}return r}_compileMaterial(e){const n=new ot(this._lodPlanes[0],e);this._renderer.compile(n,Du)}_sceneToCubeUV(e,n,i,r){const a=new on(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zm),u.toneMapping=ir,u.autoClear=!1;const p=new Lc({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new ot(new cr,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Zm),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;ol(r,v*_,f>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Km[(r-s-1)%Km.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ot(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):Cr;m>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const f=[];let v=0;for(let C=0;C<Cr;++C){const P=C/y,w=Math.exp(-P*P/2);f.push(w),C===0?v+=w:C<m&&(v+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const x=this._sizeLods[r],L=3*x*(r>_-As?r-_+As:0),T=4*(this._cubeSize-x);ol(n,L,T,3*x,2*x),l.setRenderTarget(n),l.render(h,Du)}}function fT(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+qm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-As?l=qm[o-t+As-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,f=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,P=T>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(w,y*g*T),_.set(d,m*g*T);const S=[T,T,T,T,T,T];x.set(S,f*g*T)}const L=new tn;L.setAttribute("position",new _n(v,y)),L.setAttribute("uv",new _n(_,m)),L.setAttribute("faceIndex",new _n(x,f)),e.push(L),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jm(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hT(t,e,n){const i=new Float32Array(Cr),r=new D(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Qm(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function eg(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jf||l===Qf,u=l===Xs||l===js;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Ph(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Ph(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Co("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,x=v.length;_<x;_+=3){const L=v[_+0],T=v[_+1],C=v[_+2];d.push(L,T,T,C,C,L)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const L=_+0,T=_+1,C=_+2;d.push(L,T,T,C,C,L)}}else return;const m=new(w_(d)?P_:R_)(d,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function gT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function h(d,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*y[v];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _T(t,e,n){const i=new WeakMap,r=new at;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,T=1;L>e.maxTextureSize&&(T=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*T*4*h),P=new A_(C,L,T,h);P.type=_i,P.needsUpdate=!0;const w=x*4;for(let R=0;R<h;R++){const I=f[R],U=v[R],z=_[R],W=L*T*4*R;for(let V=0;V<I.count;V++){const $=V*w;g===!0&&(r.fromBufferAttribute(I,V),C[W+$+0]=r.x,C[W+$+1]=r.y,C[W+$+2]=r.z,C[W+$+3]=0),y===!0&&(r.fromBufferAttribute(U,V),C[W+$+4]=r.x,C[W+$+5]=r.y,C[W+$+6]=r.z,C[W+$+7]=0),m===!0&&(r.fromBufferAttribute(z,V),C[W+$+8]=r.x,C[W+$+9]=r.y,C[W+$+10]=r.z,C[W+$+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new oe(L,T)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function xT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class U_ extends Jt{constructor(e,n,i,r,s,o,a,l,c,u=Us){if(u!==Us&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Us&&(i=Vr),i===void 0&&u===$s&&(i=Ys),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const F_=new Jt,tg=new U_(1,1),O_=new A_,k_=new s1,z_=new D_,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function to(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ng[r];if(s===void 0&&(s=new Float32Array(r),ng[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Dc(t,e){let n=ig[e];n===void 0&&(n=new Int32Array(e),ig[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;og.set(i),t.uniformMatrix2fv(this.addr,!1,og),Nt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;sg.set(i),t.uniformMatrix3fv(this.addr,!1,sg),Nt(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;rg.set(i),t.uniformMatrix4fv(this.addr,!1,rg),Nt(n,i)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(tg.compareFunction=E_,s=tg):s=F_,n.setTexture2D(e||s,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||k_,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||z_,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||O_,r)}function zT(t){switch(t){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return wT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return PT;case 35669:case 35673:return bT;case 5125:return LT;case 36294:return DT;case 36295:return NT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return kT}}function BT(t,e){t.uniform1fv(this.addr,e)}function VT(t,e){const n=to(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){const n=to(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=to(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=to(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=to(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jT(t,e){const n=to(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YT(t,e){t.uniform1iv(this.addr,e)}function $T(t,e){t.uniform2iv(this.addr,e)}function qT(t,e){t.uniform3iv(this.addr,e)}function ZT(t,e){t.uniform4iv(this.addr,e)}function KT(t,e){t.uniform1uiv(this.addr,e)}function JT(t,e){t.uniform2uiv(this.addr,e)}function QT(t,e){t.uniform3uiv(this.addr,e)}function eA(t,e){t.uniform4uiv(this.addr,e)}function tA(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||F_,s[o])}function nA(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||k_,s[o])}function iA(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||z_,s[o])}function rA(t,e,n){const i=this.cache,r=e.length,s=Dc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||O_,s[o])}function sA(t){switch(t){case 5126:return BT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return YT;case 35667:case 35671:return $T;case 35668:case 35672:return qT;case 35669:case 35673:return ZT;case 5125:return KT;case 36294:return JT;case 36295:return QT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class oA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zT(n.type)}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sA(n.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ou=/(\w+)(\])?(\[|\.)?/g;function ag(t,e){t.seq.push(e),t.map[e.id]=e}function cA(t,e,n){const i=t.name,r=i.length;for(Ou.lastIndex=0;;){const s=Ou.exec(i),o=Ou.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ag(n,c===void 0?new oA(a,t,e):new aA(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new lA(a),ag(n,h)),n=h}}}class Il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);cA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function lg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uA=37297;let fA=0;function hA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const cg=new Ge;function dA(t){Ke._getMatrix(cg,Ke.workingColorSpace,t);const e=`mat3( ${cg.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case Rc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ug(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+hA(t.getShaderSource(e),o)}else return r}function pA(t,e){const n=dA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mA(t,e){let n;switch(e){case _M:n="Linear";break;case xM:n="Reinhard";break;case yM:n="Cineon";break;case SM:n="ACESFilmic";break;case EM:n="AgX";break;case u_:n="Neutral";break;case MM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const al=new D;function gA(){Ke.getLuminanceCoefficients(al);const t=al.x.toFixed(4),e=al.y.toFixed(4),n=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function _A(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ro(t){return t!==""}function fg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(t){return t.replace(yA,MA)}const SA=new Map;function MA(t,e){let n=je[e];if(n===void 0){const i=SA.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bh(n)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(t){return t.replace(EA,wA)}function wA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function AA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case js:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function RA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case c_:e="ENVMAP_BLENDING_MULTIPLY";break;case gM:e="ENVMAP_BLENDING_MIX";break;case vM:e="ENVMAP_BLENDING_ADD";break}return e}function PA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TA(n),c=AA(n),u=CA(n),h=RA(n),d=PA(n),p=vA(n),g=_A(s),y=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ro).join(`
`),f.length>0&&(f+=`
`)):(m=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),f=[pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ir?"#define TONE_MAPPING":"",n.toneMapping!==ir?je.tonemapping_pars_fragment:"",n.toneMapping!==ir?mA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,pA("linearToOutputTexel",n.outputColorSpace),gA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),o=bh(o),o=fg(o,n),o=hg(o,n),a=bh(a),a=fg(a,n),a=hg(a,n),o=dg(o),a=dg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=v+m+o,x=v+f+a,L=lg(r,r.VERTEX_SHADER,_),T=lg(r,r.FRAGMENT_SHADER,x);r.attachShader(y,L),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(R){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(L).trim(),z=r.getShaderInfoLog(T).trim();let W=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,L,T);else{const $=ug(r,L,"vertex"),N=ug(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+$+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||z==="")&&(V=!1);V&&(R.diagnostics={runnable:W,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:f}})}r.deleteShader(L),r.deleteShader(T),P=new Il(r,y),w=xA(r,y)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,uA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=T,this}let LA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NA(e),n.set(e,i)),i}}class NA{constructor(e){this.id=LA++,this.code=e,this.usedTimes=0}}function IA(t,e,n,i,r,s,o){const a=new Wd,l=new DA,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,R,I,U){const z=I.fog,W=U.geometry,V=w.isMeshStandardMaterial?I.environment:null,$=(w.isMeshStandardMaterial?n:e).get(w.envMap||V),N=$&&$.mapping===Cc?$.image.height:null,j=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=Z!==void 0?Z.length:0;let ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let ke,X,q,le;if(j){const nt=Kn[j];ke=nt.vertexShader,X=nt.fragmentShader}else ke=w.vertexShader,X=w.fragmentShader,l.update(w),q=l.getVertexShaderID(w),le=l.getFragmentShaderID(w);const ne=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,Fe=U.isBatchedMesh===!0,Ze=!!w.map,ee=!!w.matcap,ce=!!$,b=!!w.aoMap,De=!!w.lightMap,se=!!w.bumpMap,we=!!w.normalMap,fe=!!w.displacementMap,Ie=!!w.emissiveMap,Se=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,B=w.clearcoat>0,K=w.dispersion>0,te=w.iridescence>0,J=w.sheen>0,Re=w.transmission>0,me=M&&!!w.anisotropyMap,Me=B&&!!w.clearcoatMap,$e=B&&!!w.clearcoatNormalMap,ae=B&&!!w.clearcoatRoughnessMap,Te=te&&!!w.iridescenceMap,Ue=te&&!!w.iridescenceThicknessMap,Oe=J&&!!w.sheenColorMap,Ae=J&&!!w.sheenRoughnessMap,qe=!!w.specularMap,Xe=!!w.specularColorMap,ut=!!w.specularIntensityMap,F=Re&&!!w.transmissionMap,ge=Re&&!!w.thicknessMap,Y=!!w.gradientMap,Q=!!w.alphaMap,ye=w.alphaTest>0,_e=!!w.alphaHash,Ve=!!w.extensions;let Mt=ir;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const Bt={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:ke,fragmentShader:X,defines:w.defines,customVertexShaderID:q,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Qs,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:ee,envMap:ce,envMapMode:ce&&$.mapping,envMapCubeUVHeight:N,aoMap:b,lightMap:De,bumpMap:se,normalMap:we,displacementMap:d&&fe,emissiveMap:Ie,normalMapObjectSpace:we&&w.normalMapType===CM,normalMapTangentSpace:we&&w.normalMapType===M_,metalnessMap:Se,roughnessMap:A,anisotropy:M,anisotropyMap:me,clearcoat:B,clearcoatMap:Me,clearcoatNormalMap:$e,clearcoatRoughnessMap:ae,dispersion:K,iridescence:te,iridescenceMap:Te,iridescenceThicknessMap:Ue,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:Ae,specularMap:qe,specularColorMap:Xe,specularIntensityMap:ut,transmission:Re,transmissionMap:F,thicknessMap:ge,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Is&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:ye,alphaHash:_e,combine:w.combine,mapUv:Ze&&y(w.map.channel),aoMapUv:b&&y(w.aoMap.channel),lightMapUv:De&&y(w.lightMap.channel),bumpMapUv:se&&y(w.bumpMap.channel),normalMapUv:we&&y(w.normalMap.channel),displacementMapUv:fe&&y(w.displacementMap.channel),emissiveMapUv:Ie&&y(w.emissiveMap.channel),metalnessMapUv:Se&&y(w.metalnessMap.channel),roughnessMapUv:A&&y(w.roughnessMap.channel),anisotropyMapUv:me&&y(w.anisotropyMap.channel),clearcoatMapUv:Me&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(w.sheenRoughnessMap.channel),specularMapUv:qe&&y(w.specularMap.channel),specularColorMapUv:Xe&&y(w.specularColorMap.channel),specularIntensityMapUv:ut&&y(w.specularIntensityMap.channel),transmissionMapUv:F&&y(w.transmissionMap.channel),thicknessMapUv:ge&&y(w.thicknessMap.channel),alphaMapUv:Q&&y(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(we||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Ze||Q),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===st,decodeVideoTextureEmissive:Ie&&w.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(w.emissiveMap.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qn,flipSided:w.side===Kt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(v(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=g[w.type];let R;if(S){const I=Kn[S];R=v1.clone(I.uniforms)}else R=w.uniforms;return R}function L(w,S){let R;for(let I=0,U=u.length;I<U;I++){const z=u[I];if(z.cacheKey===S){R=z,++R.usedTimes;break}}return R===void 0&&(R=new bA(t,S,w,s),u.push(R)),R}function T(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:P}}function UA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function FA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,g,y,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function a(h,d,p,g,y,m){const f=o(h,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,g,y,m){const f=o(h,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||FA),i.length>1&&i.sort(d||mg),r.length>1&&r.sort(d||mg)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function OA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new gg,t.set(i,[o])):r>=s.length?(o=new gg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function kA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new We};break;case"SpotLight":n={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BA=0;function VA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HA(t){const e=new kA,n=zA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new lt,o=new lt;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,v=0,_=0,x=0,L=0,T=0,C=0;c.sort(VA);for(let w=0,S=c.length;w<S;w++){const R=c[w],I=R.color,U=R.intensity,z=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],U);C++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,N=n.get(R);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(I).multiplyScalar(U),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[y]=V;const $=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,$.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[y]=$.matrix,R.castShadow){const N=n.get(R);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=W,x++}y++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(I).multiplyScalar(U),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const $=R.shadow,N=n.get(R);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,N.shadowCameraNear=$.camera.near,N.shadowCameraFar=$.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=R.shadow.matrix,_++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(U),V.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[f]=V,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+L-T,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=C,i.version=BA++)}function l(c,u){let h=0,d=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const _=c[f];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function vg(t){const e=new HA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new vg(t),e.set(r,[a])):s>=o.length?(a=new vg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class WA extends pr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XA extends pr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $A(t,e,n){let i=new Xd;const r=new oe,s=new oe,o=new at,a=new WA({depthPacking:AM}),l=new XA,c={},u=n.maxTextureSize,h={[lr]:Kt,[Kt]:lr,[Qn]:Qn},d=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:jA,fragmentShader:YA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a_;let f=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),I=t.state;I.setBlending(nr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=f!==di&&this.type===di,z=f===di&&this.type!==di;for(let W=0,V=T.length;W<V;W++){const $=T[W],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const j=N.getFrameExtents();if(r.multiply(j),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null||U===!0||z===!0){const ie=this.type!==di?{minFilter:jn,magFilter:jn}:{};N.map!==null&&N.map.dispose(),N.map=new Hr(r.x,r.y,ie),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let ie=0;ie<Z;ie++){const ve=N.getViewport(ie);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),I.viewport(o),N.updateMatrices($,ie),i=N.getFrustum(),x(C,P,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===di&&v(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,R)};function v(T,C){const P=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,P,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,P,p,y,null)}function _(T,C,P,w){let S=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const I=S.uuid,U=C.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let W=z[U];W===void 0&&(W=S.clone(),z[U]=W,C.addEventListener("dispose",L)),S=W}if(S.visible=C.visible,S.wireframe=C.wireframe,w===di?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=P}return S}function x(T,C,P,w,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===di)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=e.update(T),z=T.material;if(Array.isArray(z)){const W=U.groups;for(let V=0,$=W.length;V<$;V++){const N=W[V],j=z[N.materialIndex];if(j&&j.visible){const Z=_(T,j,w,S);T.onBeforeShadow(t,T,C,P,U,Z,N),t.renderBufferDirect(P,null,U,Z,T,N),T.onAfterShadow(t,T,C,P,U,Z,N)}}}else if(z.visible){const W=_(T,z,w,S);T.onBeforeShadow(t,T,C,P,U,W,null),t.renderBufferDirect(P,null,U,W,T,null),T.onAfterShadow(t,T,C,P,U,W,null)}}const I=T.children;for(let U=0,z=I.length;U<z;U++)x(I[U],C,P,w,S)}function L(T){T.target.removeEventListener("dispose",L);for(const P in c){const w=c[P],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const qA={[Xf]:jf,[Yf]:Zf,[$f]:Kf,[Ws]:qf,[jf]:Xf,[Zf]:Yf,[Kf]:$f,[qf]:Ws};function ZA(t,e){function n(){let F=!1;const ge=new at;let Y=null;const Q=new at(0,0,0,0);return{setMask:function(ye){Y!==ye&&!F&&(t.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){F=ye},setClear:function(ye,_e,Ve,Mt,Bt){Bt===!0&&(ye*=Mt,_e*=Mt,Ve*=Mt),ge.set(ye,_e,Ve,Mt),Q.equals(ge)===!1&&(t.clearColor(ye,_e,Ve,Mt),Q.copy(ge))},reset:function(){F=!1,Y=null,Q.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,Y=null,Q=null,ye=null;return{setReversed:function(_e){if(ge!==_e){const Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const Mt=ye;ye=null,this.setClear(Mt)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?ne(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!F&&(t.depthMask(_e),Y=_e)},setFunc:function(_e){if(ge&&(_e=qA[_e]),Q!==_e){switch(_e){case Xf:t.depthFunc(t.NEVER);break;case jf:t.depthFunc(t.ALWAYS);break;case Yf:t.depthFunc(t.LESS);break;case Ws:t.depthFunc(t.LEQUAL);break;case $f:t.depthFunc(t.EQUAL);break;case qf:t.depthFunc(t.GEQUAL);break;case Zf:t.depthFunc(t.GREATER);break;case Kf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=_e}},setLocked:function(_e){F=_e},setClear:function(_e){ye!==_e&&(ge&&(_e=1-_e),t.clearDepth(_e),ye=_e)},reset:function(){F=!1,Y=null,Q=null,ye=null,ge=!1}}}function r(){let F=!1,ge=null,Y=null,Q=null,ye=null,_e=null,Ve=null,Mt=null,Bt=null;return{setTest:function(nt){F||(nt?ne(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!F&&(t.stencilMask(nt),ge=nt)},setFunc:function(nt,Dn,oi){(Y!==nt||Q!==Dn||ye!==oi)&&(t.stencilFunc(nt,Dn,oi),Y=nt,Q=Dn,ye=oi)},setOp:function(nt,Dn,oi){(_e!==nt||Ve!==Dn||Mt!==oi)&&(t.stencilOp(nt,Dn,oi),_e=nt,Ve=Dn,Mt=oi)},setLocked:function(nt){F=nt},setClear:function(nt){Bt!==nt&&(t.clearStencil(nt),Bt=nt)},reset:function(){F=!1,ge=null,Y=null,Q=null,ye=null,_e=null,Ve=null,Mt=null,Bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,v=null,_=null,x=null,L=null,T=null,C=new We(0,0,0),P=0,w=!1,S=null,R=null,I=null,U=null,z=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=$>=1):N.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=$>=2);let j=null,Z={};const ie=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),ke=new at().fromArray(ie),X=new at().fromArray(ve);function q(F,ge,Y,Q){const ye=new Uint8Array(4),_e=t.createTexture();t.bindTexture(F,_e),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Y;Ve++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(ge+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return _e}const le={};le[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),o.setFunc(Ws),se(!1),we(Em),ne(t.CULL_FACE),b(nr);function ne(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function Ce(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function ze(F,ge){return h[F]!==ge?(t.bindFramebuffer(F,ge),h[F]=ge,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ge),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Fe(F,ge){let Y=p,Q=!1;if(F){Y=d.get(ge),Y===void 0&&(Y=[],d.set(ge,Y));const ye=F.textures;if(Y.length!==ye.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,Ve=ye.length;_e<Ve;_e++)Y[_e]=t.COLOR_ATTACHMENT0+_e;Y.length=ye.length,Q=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,Q=!0);Q&&t.drawBuffers(Y)}function Ze(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const ee={[Ar]:t.FUNC_ADD,[QS]:t.FUNC_SUBTRACT,[eM]:t.FUNC_REVERSE_SUBTRACT};ee[tM]=t.MIN,ee[nM]=t.MAX;const ce={[iM]:t.ZERO,[rM]:t.ONE,[sM]:t.SRC_COLOR,[Gf]:t.SRC_ALPHA,[fM]:t.SRC_ALPHA_SATURATE,[cM]:t.DST_COLOR,[aM]:t.DST_ALPHA,[oM]:t.ONE_MINUS_SRC_COLOR,[Wf]:t.ONE_MINUS_SRC_ALPHA,[uM]:t.ONE_MINUS_DST_COLOR,[lM]:t.ONE_MINUS_DST_ALPHA,[hM]:t.CONSTANT_COLOR,[dM]:t.ONE_MINUS_CONSTANT_COLOR,[pM]:t.CONSTANT_ALPHA,[mM]:t.ONE_MINUS_CONSTANT_ALPHA};function b(F,ge,Y,Q,ye,_e,Ve,Mt,Bt,nt){if(F===nr){y===!0&&(Ce(t.BLEND),y=!1);return}if(y===!1&&(ne(t.BLEND),y=!0),F!==JS){if(F!==m||nt!==w){if((f!==Ar||x!==Ar)&&(t.blendEquation(t.FUNC_ADD),f=Ar,x=Ar),nt)switch(F){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hf:t.blendFunc(t.ONE,t.ONE);break;case wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,_=null,L=null,T=null,C.set(0,0,0),P=0,m=F,w=nt}return}ye=ye||ge,_e=_e||Y,Ve=Ve||Q,(ge!==f||ye!==x)&&(t.blendEquationSeparate(ee[ge],ee[ye]),f=ge,x=ye),(Y!==v||Q!==_||_e!==L||Ve!==T)&&(t.blendFuncSeparate(ce[Y],ce[Q],ce[_e],ce[Ve]),v=Y,_=Q,L=_e,T=Ve),(Mt.equals(C)===!1||Bt!==P)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Bt),C.copy(Mt),P=Bt),m=F,w=!1}function De(F,ge){F.side===Qn?Ce(t.CULL_FACE):ne(t.CULL_FACE);let Y=F.side===Kt;ge&&(Y=!Y),se(Y),F.blending===Is&&F.transparent===!1?b(nr):b(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function we(F){F!==ZS?(ne(t.CULL_FACE),F!==R&&(F===Em?t.cullFace(t.BACK):F===KS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),R=F}function fe(F){F!==I&&(V&&t.lineWidth(F),I=F)}function Ie(F,ge,Y){F?(ne(t.POLYGON_OFFSET_FILL),(U!==ge||z!==Y)&&(t.polygonOffset(ge,Y),U=ge,z=Y)):Ce(t.POLYGON_OFFSET_FILL)}function Se(F){F?ne(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function A(F){F===void 0&&(F=t.TEXTURE0+W-1),j!==F&&(t.activeTexture(F),j=F)}function M(F,ge,Y){Y===void 0&&(j===null?Y=t.TEXTURE0+W-1:Y=j);let Q=Z[Y];Q===void 0&&(Q={type:void 0,texture:void 0},Z[Y]=Q),(Q.type!==F||Q.texture!==ge)&&(j!==Y&&(t.activeTexture(Y),j=Y),t.bindTexture(F,ge||le[F]),Q.type=F,Q.texture=ge)}function B(){const F=Z[j];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){ke.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ke.copy(F))}function Ae(F){X.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),X.copy(F))}function qe(F,ge){let Y=c.get(ge);Y===void 0&&(Y=new WeakMap,c.set(ge,Y));let Q=Y.get(F);Q===void 0&&(Q=t.getUniformBlockIndex(ge,F.name),Y.set(F,Q))}function Xe(F,ge){const Q=c.get(ge).get(F);l.get(ge)!==Q&&(t.uniformBlockBinding(ge,Q,F.__bindingPointIndex),l.set(ge,Q))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},j=null,Z={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,v=null,_=null,x=null,L=null,T=null,C=new We(0,0,0),P=0,w=!1,S=null,R=null,I=null,U=null,z=null,ke.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:Ce,bindFramebuffer:ze,drawBuffers:Fe,useProgram:Ze,setBlending:b,setMaterial:De,setFlipSided:se,setCullFace:we,setLineWidth:fe,setPolygonOffset:Ie,setScissorTest:Se,activeTexture:A,bindTexture:M,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:Te,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:Xe,texStorage2D:$e,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:Oe,viewport:Ae,reset:ut}}function _g(t,e,n,i){const r=KA(i);switch(n){case m_:return t*e;case v_:return t*e;case __:return t*e*2;case x_:return t*e/r.components*r.byteLength;case zd:return t*e/r.components*r.byteLength;case y_:return t*e*2/r.components*r.byteLength;case Bd:return t*e*2/r.components*r.byteLength;case g_:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case Vd:return t*e*4/r.components*r.byteLength;case Pl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(t,16)*Math.max(e,8)/4;case nh:case rh:return Math.max(t,8)*Math.max(e,8)/2;case oh:case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Eh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case S_:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ah:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KA(t){switch(t){case Ci:case h_:return{byteLength:1,components:1};case aa:case d_:case va:return{byteLength:2,components:1};case Od:case kd:return{byteLength:2,components:4};case Vr:case Fd:case _i:return{byteLength:4,components:1};case p_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function JA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):ac("canvas")}function y(A,M,B){let K=1;const te=Se(A);if((te.width>B||te.height>B)&&(K=B/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(K*te.width),Re=Math.floor(K*te.height);h===void 0&&(h=g(J,Re));const me=M?g(J,Re):h;return me.width=J,me.height=Re,me.getContext("2d").drawImage(A,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Re+")."),me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(A,M,B,K,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=M;if(M===t.RED&&(B===t.FLOAT&&(J=t.R32F),B===t.HALF_FLOAT&&(J=t.R16F),B===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.R8UI),B===t.UNSIGNED_SHORT&&(J=t.R16UI),B===t.UNSIGNED_INT&&(J=t.R32UI),B===t.BYTE&&(J=t.R8I),B===t.SHORT&&(J=t.R16I),B===t.INT&&(J=t.R32I)),M===t.RG&&(B===t.FLOAT&&(J=t.RG32F),B===t.HALF_FLOAT&&(J=t.RG16F),B===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RG8UI),B===t.UNSIGNED_SHORT&&(J=t.RG16UI),B===t.UNSIGNED_INT&&(J=t.RG32UI),B===t.BYTE&&(J=t.RG8I),B===t.SHORT&&(J=t.RG16I),B===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGB8UI),B===t.UNSIGNED_SHORT&&(J=t.RGB16UI),B===t.UNSIGNED_INT&&(J=t.RGB32UI),B===t.BYTE&&(J=t.RGB8I),B===t.SHORT&&(J=t.RGB16I),B===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),B===t.UNSIGNED_INT&&(J=t.RGBA32UI),B===t.BYTE&&(J=t.RGBA8I),B===t.SHORT&&(J=t.RGBA16I),B===t.INT&&(J=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Re=te?Rc:Ke.getTransfer(K);B===t.FLOAT&&(J=t.RGBA32F),B===t.HALF_FLOAT&&(J=t.RGBA16F),B===t.UNSIGNED_BYTE&&(J=Re===st?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(A,M){let B;return A?M===null||M===Vr||M===Ys?B=t.DEPTH24_STENCIL8:M===_i?B=t.DEPTH32F_STENCIL8:M===aa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vr||M===Ys?B=t.DEPTH_COMPONENT24:M===_i?B=t.DEPTH_COMPONENT32F:M===aa&&(B=t.DEPTH_COMPONENT16),B}function L(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==jn&&A.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),P(M),M.isVideoTexture&&u.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),S(M)}function P(A){const M=i.get(A);if(M.__webglInit===void 0)return;const B=A.source,K=d.get(B);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(A),Object.keys(K).length===0&&d.delete(B)}i.remove(A)}function w(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const B=A.source,K=d.get(B);delete K[M.__cacheKey],o.memory.textures--}function S(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[K][te]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,te=B.length;K<te;K++){const J=i.get(B[K]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(A)}let R=0;function I(){R=0}function U(){const A=R;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const B=i.get(A);if(A.isVideoTexture&&fe(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,A,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function V(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function $(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function N(A,M){const B=i.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const j={[eh]:t.REPEAT,[Dr]:t.CLAMP_TO_EDGE,[th]:t.MIRRORED_REPEAT},Z={[jn]:t.NEAREST,[wM]:t.NEAREST_MIPMAP_NEAREST,[Va]:t.NEAREST_MIPMAP_LINEAR,[ei]:t.LINEAR,[fu]:t.LINEAR_MIPMAP_NEAREST,[Nr]:t.LINEAR_MIPMAP_LINEAR},ie={[RM]:t.NEVER,[IM]:t.ALWAYS,[PM]:t.LESS,[E_]:t.LEQUAL,[bM]:t.EQUAL,[NM]:t.GEQUAL,[LM]:t.GREATER,[DM]:t.NOTEQUAL};function ve(A,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===fu||M.magFilter===Va||M.magFilter===Nr||M.minFilter===ei||M.minFilter===fu||M.minFilter===Va||M.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,j[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,j[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,j[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jn||M.minFilter!==Va&&M.minFilter!==Nr||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ke(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const K=M.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const J=z(M);if(J!==A.__cacheKey){te[J]===void 0&&(te[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[J].usedTimes++;const Re=te[A.__cacheKey];Re!==void 0&&(te[A.__cacheKey].usedTimes--,Re.usedTimes===0&&w(M)),A.__cacheKey=J,A.__webglTexture=te[J].texture}return B}function X(A,M,B){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const te=ke(A,M),J=M.source;n.bindTexture(K,A.__webglTexture,t.TEXTURE0+B);const Re=i.get(J);if(J.version!==Re.__version||te===!0){n.activeTexture(t.TEXTURE0+B);const me=Ke.getPrimaries(Ke.workingColorSpace),Me=M.colorSpace===Wi?null:Ke.getPrimaries(M.colorSpace),$e=M.colorSpace===Wi||me===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ae=y(M.image,!1,r.maxTextureSize);ae=Ie(M,ae);const Te=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type);let Oe=_(M.internalFormat,Te,Ue,M.colorSpace,M.isVideoTexture);ve(K,M);let Ae;const qe=M.mipmaps,Xe=M.isVideoTexture!==!0,ut=Re.__version===void 0||te===!0,F=J.dataReady,ge=L(M,ae);if(M.isDepthTexture)Oe=x(M.format===$s,M.type),ut&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,Oe,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Te,Ue,null));else if(M.isDataTexture)if(qe.length>0){Xe&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,Oe,qe[0].width,qe[0].height);for(let Y=0,Q=qe.length;Y<Q;Y++)Ae=qe[Y],Xe?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Te,Ue,Ae.data):n.texImage2D(t.TEXTURE_2D,Y,Oe,Ae.width,Ae.height,0,Te,Ue,Ae.data);M.generateMipmaps=!1}else Xe?(ut&&n.texStorage2D(t.TEXTURE_2D,ge,Oe,ae.width,ae.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,Ue,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Te,Ue,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Oe,qe[0].width,qe[0].height,ae.depth);for(let Y=0,Q=qe.length;Y<Q;Y++)if(Ae=qe[Y],M.format!==Gn)if(Te!==null)if(Xe){if(F)if(M.layerUpdates.size>0){const ye=_g(Ae.width,Ae.height,M.format,M.type);for(const _e of M.layerUpdates){const Ve=Ae.data.subarray(_e*ye/Ae.data.BYTES_PER_ELEMENT,(_e+1)*ye/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,_e,Ae.width,Ae.height,1,Te,Ve)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,ae.depth,Te,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Oe,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,ae.depth,Te,Ue,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Oe,Ae.width,Ae.height,ae.depth,0,Te,Ue,Ae.data)}else{Xe&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,Oe,qe[0].width,qe[0].height);for(let Y=0,Q=qe.length;Y<Q;Y++)Ae=qe[Y],M.format!==Gn?Te!==null?Xe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Te,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,Te,Ue,Ae.data):n.texImage2D(t.TEXTURE_2D,Y,Oe,Ae.width,Ae.height,0,Te,Ue,Ae.data)}else if(M.isDataArrayTexture)if(Xe){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Oe,ae.width,ae.height,ae.depth),F)if(M.layerUpdates.size>0){const Y=_g(ae.width,ae.height,M.format,M.type);for(const Q of M.layerUpdates){const ye=ae.data.subarray(Q*Y/ae.data.BYTES_PER_ELEMENT,(Q+1)*Y/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,Te,Ue,ye)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ue,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,Te,Ue,ae.data);else if(M.isData3DTexture)Xe?(ut&&n.texStorage3D(t.TEXTURE_3D,ge,Oe,ae.width,ae.height,ae.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ue,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,Te,Ue,ae.data);else if(M.isFramebufferTexture){if(ut)if(Xe)n.texStorage2D(t.TEXTURE_2D,ge,Oe,ae.width,ae.height);else{let Y=ae.width,Q=ae.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,Oe,Y,Q,0,Te,Ue,null),Y>>=1,Q>>=1}}else if(qe.length>0){if(Xe&&ut){const Y=Se(qe[0]);n.texStorage2D(t.TEXTURE_2D,ge,Oe,Y.width,Y.height)}for(let Y=0,Q=qe.length;Y<Q;Y++)Ae=qe[Y],Xe?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Te,Ue,Ae):n.texImage2D(t.TEXTURE_2D,Y,Oe,Te,Ue,Ae);M.generateMipmaps=!1}else if(Xe){if(ut){const Y=Se(ae);n.texStorage2D(t.TEXTURE_2D,ge,Oe,Y.width,Y.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Ue,ae)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Te,Ue,ae);m(M)&&f(K),Re.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,B){if(M.image.length!==6)return;const K=ke(A,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const J=i.get(te);if(te.version!==J.__version||K===!0){n.activeTexture(t.TEXTURE0+B);const Re=Ke.getPrimaries(Ke.workingColorSpace),me=M.colorSpace===Wi?null:Ke.getPrimaries(M.colorSpace),Me=M.colorSpace===Wi||Re===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let Q=0;Q<6;Q++)!$e&&!ae?Te[Q]=y(M.image[Q],!0,r.maxCubemapSize):Te[Q]=ae?M.image[Q].image:M.image[Q],Te[Q]=Ie(M,Te[Q]);const Ue=Te[0],Oe=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),qe=_(M.internalFormat,Oe,Ae,M.colorSpace),Xe=M.isVideoTexture!==!0,ut=J.__version===void 0||K===!0,F=te.dataReady;let ge=L(M,Ue);ve(t.TEXTURE_CUBE_MAP,M);let Y;if($e){Xe&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){Y=Te[Q].mipmaps;for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];M.format!==Gn?Oe!==null?Xe?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,_e.width,_e.height,Oe,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,_e.width,_e.height,Oe,Ae,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,qe,_e.width,_e.height,0,Oe,Ae,_e.data)}}}else{if(Y=M.mipmaps,Xe&&ut){Y.length>0&&ge++;const Q=Se(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te[Q].width,Te[Q].height,Oe,Ae,Te[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Te[Q].width,Te[Q].height,0,Oe,Ae,Te[Q].data);for(let ye=0;ye<Y.length;ye++){const Ve=Y[ye].image[Q].image;Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Ve.width,Ve.height,Oe,Ae,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,qe,Ve.width,Ve.height,0,Oe,Ae,Ve.data)}}else{Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,Ae,Te[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Oe,Ae,Te[Q]);for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Oe,Ae,_e.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,qe,Oe,Ae,_e.image[Q])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function le(A,M,B,K,te,J){const Re=s.convert(B.format,B.colorSpace),me=s.convert(B.type),Me=_(B.internalFormat,Re,me,B.colorSpace),$e=i.get(M),ae=i.get(B);if(ae.__renderTarget=M,!$e.__hasExternalTextures){const Te=Math.max(1,M.width>>J),Ue=Math.max(1,M.height>>J);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,J,Me,Te,Ue,M.depth,0,Re,me,null):n.texImage2D(te,J,Me,Te,Ue,0,Re,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,ae.__webglTexture,0,se(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,ae.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(A,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=x(M.stencilBuffer,te),Re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=se(M);we(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,J,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,A)}else{const K=M.textures;for(let te=0;te<K.length;te++){const J=K[te],Re=s.convert(J.format,J.colorSpace),me=s.convert(J.type),Me=_(J.internalFormat,Re,me,J.colorSpace),$e=se(M);B&&we(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,Me,M.width,M.height):we(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,Me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const te=K.__webglTexture,J=se(M);if(M.depthTexture.format===Us)we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===$s)we(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ze(A){const M=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),ne(M.__webglDepthbuffer[K],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ne(M.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(A,M,B){const K=i.get(A);M!==void 0&&le(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ze(A)}function Ze(A){const M=A.texture,B=i.get(A),K=i.get(M);A.addEventListener("dispose",C);const te=A.textures,J=A.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let Me=0;Me<M.mipmaps.length;Me++)B.__webglFramebuffer[me][Me]=t.createFramebuffer()}else B.__webglFramebuffer[me]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)B.__webglFramebuffer[me]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Re)for(let me=0,Me=te.length;me<Me;me++){const $e=i.get(te[me]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&we(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){const Me=te[me];B.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[me]);const $e=s.convert(Me.format,Me.colorSpace),ae=s.convert(Me.type),Te=_(Me.internalFormat,$e,ae,Me.colorSpace,A.isXRRenderTarget===!0),Ue=se(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Te,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,B.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ve(t.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)le(B.__webglFramebuffer[me][Me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else le(B.__webglFramebuffer[me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let me=0,Me=te.length;me<Me;me++){const $e=te[me],ae=i.get($e);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),ve(t.TEXTURE_2D,$e),le(B.__webglFramebuffer,A,$e,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),m($e)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,K.__webglTexture),ve(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)le(B.__webglFramebuffer[Me],A,M,t.COLOR_ATTACHMENT0,me,Me);else le(B.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,me,0);m(M)&&f(me),n.unbindTexture()}A.depthBuffer&&ze(A)}function ee(A){const M=A.textures;for(let B=0,K=M.length;B<K;B++){const te=M[B];if(m(te)){const J=v(A),Re=i.get(te).__webglTexture;n.bindTexture(J,Re),f(J),n.unbindTexture()}}}const ce=[],b=[];function De(A){if(A.samples>0){if(we(A)===!1){const M=A.textures,B=A.width,K=A.height;let te=t.COLOR_BUFFER_BIT;const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(A),me=M.length>1;if(me)for(let Me=0;Me<M.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const $e=i.get(M[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,B,K,0,0,B,K,te,t.NEAREST),l===!0&&(ce.length=0,b.length=0,ce.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ce.push(J),b.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<M.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const $e=i.get(M[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function se(A){return Math.min(r.maxSamples,A.samples)}function we(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function fe(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Ie(A,M){const B=A.colorSpace,K=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Qs&&B!==Wi&&(Ke.getTransfer(B)===st?(K!==Gn||te!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=N,this.rebindTextures=Fe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=le,this.useMultisampledRTT=we}function QA(t,e){function n(i,r=Wi){let s;const o=Ke.getTransfer(r);if(i===Ci)return t.UNSIGNED_BYTE;if(i===Od)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===p_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===h_)return t.BYTE;if(i===d_)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===Fd)return t.INT;if(i===Vr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===va)return t.HALF_FLOAT;if(i===m_)return t.ALPHA;if(i===g_)return t.RGB;if(i===Gn)return t.RGBA;if(i===v_)return t.LUMINANCE;if(i===__)return t.LUMINANCE_ALPHA;if(i===Us)return t.DEPTH_COMPONENT;if(i===$s)return t.DEPTH_STENCIL;if(i===x_)return t.RED;if(i===zd)return t.RED_INTEGER;if(i===y_)return t.RG;if(i===Bd)return t.RG_INTEGER;if(i===Vd)return t.RGBA_INTEGER;if(i===Pl||i===bl||i===Ll||i===Dl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oh||i===ah)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ch||i===uh||i===fh||i===hh||i===dh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh||i===yh||i===Sh||i===Mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ch)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ph)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Eh||i===wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nl)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===S_||i===Th||i===Ah||i===Ch)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Th)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ah)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class eC extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tC={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ur({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ot(new Yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends eo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const y=new rC,m=n.getContextAttributes();let f=null,v=null;const _=[],x=[],L=new oe;let T=null;const C=new on;C.viewport=new at;const P=new on;P.viewport=new at;const w=[C,P],S=new eC;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let q=_[X];return q===void 0&&(q=new ku,_[X]=q),q.getTargetRaySpace()},this.getControllerGrip=function(X){let q=_[X];return q===void 0&&(q=new ku,_[X]=q),q.getGripSpace()},this.getHand=function(X){let q=_[X];return q===void 0&&(q=new ku,_[X]=q),q.getHandSpace()};function U(X){const q=x.indexOf(X.inputSource);if(q===-1)return;const le=_[q];le!==void 0&&(le.update(X.inputSource,X.frame,c||o),le.dispatchEvent({type:X.type,data:X.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",W);for(let X=0;X<_.length;X++){const q=x[X];q!==null&&(x[X]=null,_[X].disconnect(q))}R=null,I=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,v=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Hr(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,le=null,ne=null;m.depth&&(ne=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=m.stencil?$s:Us,le=m.stencil?Ys:Vr);const Ce={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Hr(d.textureWidth,d.textureHeight,{format:Gn,type:Ci,depthTexture:new U_(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(X){for(let q=0;q<X.removed.length;q++){const le=X.removed[q],ne=x.indexOf(le);ne>=0&&(x[ne]=null,_[ne].disconnect(le))}for(let q=0;q<X.added.length;q++){const le=X.added[q];let ne=x.indexOf(le);if(ne===-1){for(let ze=0;ze<_.length;ze++)if(ze>=x.length){x.push(le),ne=ze;break}else if(x[ze]===null){x[ze]=le,ne=ze;break}if(ne===-1)break}const Ce=_[ne];Ce&&Ce.connect(le)}}const V=new D,$=new D;function N(X,q,le){V.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const ne=V.distanceTo($),Ce=q.projectionMatrix.elements,ze=le.projectionMatrix.elements,Fe=Ce[14]/(Ce[10]-1),Ze=Ce[14]/(Ce[10]+1),ee=(Ce[9]+1)/Ce[5],ce=(Ce[9]-1)/Ce[5],b=(Ce[8]-1)/Ce[0],De=(ze[8]+1)/ze[0],se=Fe*b,we=Fe*De,fe=ne/(-b+De),Ie=fe*-b;if(q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ie),X.translateZ(fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Se=Fe+fe,A=Ze+fe,M=se-Ie,B=we+(ne-Ie),K=ee*Ze/A*Se,te=ce*Ze/A*Se;X.projectionMatrix.makePerspective(M,B,K,te,Se,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function j(X,q){q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let q=X.near,le=X.far;y.texture!==null&&(y.depthNear>0&&(q=y.depthNear),y.depthFar>0&&(le=y.depthFar)),S.near=P.near=C.near=q,S.far=P.far=C.far=le,(R!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,I=S.far),C.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const ne=X.parent,Ce=S.cameras;j(S,ne);for(let ze=0;ze<Ce.length;ze++)j(Ce[ze],ne);Ce.length===2?N(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),Z(X,S,ne)};function Z(X,q,le){le===null?X.matrix.copy(q.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=la*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ie=null;function ve(X,q){if(u=q.getViewerPose(c||o),g=q,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ne=!1;le.length!==S.cameras.length&&(S.cameras.length=0,ne=!0);for(let ze=0;ze<le.length;ze++){const Fe=le[ze];let Ze=null;if(p!==null)Ze=p.getViewport(Fe);else{const ce=h.getViewSubImage(d,Fe);Ze=ce.viewport,ze===0&&(e.setRenderTargetTextures(v,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(v))}let ee=w[ze];ee===void 0&&(ee=new on,ee.layers.enable(ze),ee.viewport=new at,w[ze]=ee),ee.matrix.fromArray(Fe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Fe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ze===0&&(S.matrix.copy(ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ne===!0&&S.cameras.push(ee)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const ze=h.getDepthInformation(le[0]);ze&&ze.isValid&&ze.texture&&y.init(e,ze,r.renderState)}}for(let le=0;le<_.length;le++){const ne=x[le],Ce=_[le];ne!==null&&Ce!==void 0&&Ce.update(ne,q,c||o)}ie&&ie(X,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const ke=new N_;ke.setAnimationLoop(ve),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const Sr=new ri,oC=new lt;function aC(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,b_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,Sr.copy(x),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),m.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(Sr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function c(v,_){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const L=_.program;i.updateUBOMapping(v,L);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const _=h();v.__bindingPointIndex=_;const x=t.createBuffer(),L=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,L,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],x=v.uniforms,L=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=x.length;T<C;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,S=P.length;w<S;w++){const R=P[w];if(p(R,T,w,L)===!0){const I=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let W=0;W<U.length;W++){const V=U[W],$=y(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,I+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,x,L){const T=v.value,C=_+"_"+x;if(L[C]===void 0)return typeof T=="number"||typeof T=="boolean"?L[C]=T:L[C]=T.clone(),!0;{const P=L[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const _=v.uniforms;let x=0;const L=16;for(let C=0,P=_.length;C<P;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,R=w.length;S<R;S++){const I=w[S],U=Array.isArray(I.value)?I.value:[I.value];for(let z=0,W=U.length;z<W;z++){const V=U[z],$=y(V),N=x%L,j=N%$.boundary,Z=N+j;x+=j,Z!==0&&L-Z<$.storage&&(x+=L-Z),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=$.storage}}}const T=x%L;return T>0&&(x+=L-T),v.__size=x,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class cC{constructor(e={}){const{canvas:n=KM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=ir,this.toneMappingExposure=1;const x=this;let L=!1,T=0,C=0,P=null,w=-1,S=null;const R=new at,I=new at;let U=null;const z=new We(0);let W=0,V=n.width,$=n.height,N=1,j=null,Z=null;const ie=new at(0,0,V,$),ve=new at(0,0,V,$);let ke=!1;const X=new Xd;let q=!1,le=!1;const ne=new lt,Ce=new lt,ze=new D,Fe=new at,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ce(){return P===null?N:1}let b=i;function De(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ud}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",_e,!1),b===null){const O="webgl2";if(b=De(O,E),b===null)throw De(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,we,fe,Ie,Se,A,M,B,K,te,J,Re,me,Me,$e,ae,Te,Ue,Oe,Ae,qe,Xe,ut,F;function ge(){se=new pT(b),se.init(),Xe=new QA(b,se),we=new lT(b,se,e,Xe),fe=new ZA(b,se),we.reverseDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),Ie=new vT(b),Se=new UA,A=new JA(b,se,fe,Se,we,Xe,Ie),M=new uT(x),B=new dT(x),K=new w1(b),ut=new oT(b,K),te=new mT(b,K,Ie,ut),J=new xT(b,te,K,Ie),Oe=new _T(b,we,A),ae=new cT(Se),Re=new IA(x,M,B,se,we,ut,ae),me=new aC(x,Se),Me=new OA,$e=new GA(se),Ue=new sT(x,M,B,fe,J,p,l),Te=new $A(x,J,we),F=new lC(b,Ie,we,fe),Ae=new aT(b,se,Ie),qe=new gT(b,se,Ie),Ie.programs=Re.programs,x.capabilities=we,x.extensions=se,x.properties=Se,x.renderLists=Me,x.shadowMap=Te,x.state=fe,x.info=Ie}ge();const Y=new sC(x,b);this.xr=Y,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(V,$,!1))},this.getSize=function(E){return E.set(V,$)},this.setSize=function(E,O,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,$=O,n.width=Math.floor(E*N),n.height=Math.floor(O*N),H===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(V*N,$*N).floor()},this.setDrawingBufferSize=function(E,O,H){V=E,$=O,N=H,n.width=Math.floor(E*H),n.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,O,H,G){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,O,H,G),fe.viewport(R.copy(ie).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(ve)},this.setScissor=function(E,O,H,G){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,O,H,G),fe.scissor(I.copy(ve).multiplyScalar(N).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(E){fe.setScissorTest(ke=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(E=!0,O=!0,H=!0){let G=0;if(E){let k=!1;if(P!==null){const ue=P.texture.format;k=ue===Vd||ue===Bd||ue===zd}if(k){const ue=P.texture.type,xe=ue===Ci||ue===Vr||ue===aa||ue===Ys||ue===Od||ue===kd,Pe=Ue.getClearColor(),be=Ue.getClearAlpha(),Be=Pe.r,He=Pe.g,Le=Pe.b;xe?(g[0]=Be,g[1]=He,g[2]=Le,g[3]=be,b.clearBufferuiv(b.COLOR,0,g)):(y[0]=Be,y[1]=He,y[2]=Le,y[3]=be,b.clearBufferiv(b.COLOR,0,y))}else G|=b.COLOR_BUFFER_BIT}O&&(G|=b.DEPTH_BUFFER_BIT),H&&(G|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Me.dispose(),$e.dispose(),Se.dispose(),M.dispose(),B.dispose(),J.dispose(),ut.dispose(),F.dispose(),Re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",np),Y.removeEventListener("sessionend",ip),mr.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Ie.autoReset,O=Te.enabled,H=Te.autoUpdate,G=Te.needsUpdate,k=Te.type;ge(),Ie.autoReset=E,Te.enabled=O,Te.autoUpdate=H,Te.needsUpdate=G,Te.type=k}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ve(E){const O=E.target;O.removeEventListener("dispose",Ve),Mt(O)}function Mt(E){Bt(E),Se.remove(E)}function Bt(E){const O=Se.get(E).programs;O!==void 0&&(O.forEach(function(H){Re.releaseProgram(H)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,G,k,ue){O===null&&(O=Ze);const xe=k.isMesh&&k.matrixWorld.determinant()<0,Pe=sx(E,O,H,G,k);fe.setMaterial(G,xe);let be=H.index,Be=1;if(G.wireframe===!0){if(be=te.getWireframeAttribute(H),be===void 0)return;Be=2}const He=H.drawRange,Le=H.attributes.position;let Qe=He.start*Be,ft=(He.start+He.count)*Be;ue!==null&&(Qe=Math.max(Qe,ue.start*Be),ft=Math.min(ft,(ue.start+ue.count)*Be)),be!==null?(Qe=Math.max(Qe,0),ft=Math.min(ft,be.count)):Le!=null&&(Qe=Math.max(Qe,0),ft=Math.min(ft,Le.count));const dt=ft-Qe;if(dt<0||dt===1/0)return;ut.setup(k,G,Pe,H,be);let nn,et=Ae;if(be!==null&&(nn=K.get(be),et=qe,et.setIndex(nn)),k.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*ce()),et.setMode(b.LINES)):et.setMode(b.TRIANGLES);else if(k.isLine){let Ne=G.linewidth;Ne===void 0&&(Ne=1),fe.setLineWidth(Ne*ce()),k.isLineSegments?et.setMode(b.LINES):k.isLineLoop?et.setMode(b.LINE_LOOP):et.setMode(b.LINE_STRIP)}else k.isPoints?et.setMode(b.POINTS):k.isSprite&&et.setMode(b.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)et.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))et.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,ai=k._multiDrawCounts,tt=k._multiDrawCount,Nn=be?K.get(be).bytesPerElement:1,jr=Se.get(G).currentProgram.getUniforms();for(let fn=0;fn<tt;fn++)jr.setValue(b,"_gl_DrawID",fn),et.render(Ne[fn]/Nn,ai[fn])}else if(k.isInstancedMesh)et.renderInstances(Qe,dt,k.count);else if(H.isInstancedBufferGeometry){const Ne=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ai=Math.min(H.instanceCount,Ne);et.renderInstances(Qe,dt,ai)}else et.render(Qe,dt)};function nt(E,O,H){E.transparent===!0&&E.side===Qn&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,Ma(E,O,H),E.side=lr,E.needsUpdate=!0,Ma(E,O,H),E.side=Qn):Ma(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),f=$e.get(H),f.init(O),_.push(f),H.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),E!==H&&E.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const G=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ue=k.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Pe=ue[xe];nt(Pe,H,k),G.add(Pe)}else nt(ue,H,k),G.add(ue)}),_.pop(),f=null,G},this.compileAsync=function(E,O,H=null){const G=this.compile(E,O,H);return new Promise(k=>{function ue(){if(G.forEach(function(xe){Se.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){k(E);return}setTimeout(ue,10)}se.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Dn=null;function oi(E){Dn&&Dn(E)}function np(){mr.stop()}function ip(){mr.start()}const mr=new N_;mr.setAnimationLoop(oi),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(E){Dn=E,Y.setAnimationLoop(E),E===null?mr.stop():mr.start()},Y.addEventListener("sessionstart",np),Y.addEventListener("sessionend",ip),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,P),f=$e.get(E,_.length),f.init(O),_.push(f),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(Ce),le=this.localClippingEnabled,q=ae.init(this.clippingPlanes,le),m=Me.get(E,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Uc(ue,O,-1/0,x.sortObjects)}Uc(E,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,Z),ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ee&&Ue.addToRenderList(m,E),this.info.render.frame++,q===!0&&ae.beginShadows();const H=f.state.shadowsArray;Te.render(H,E,O),q===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,k=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ue=O.cameras;if(k.length>0)for(let xe=0,Pe=ue.length;xe<Pe;xe++){const be=ue[xe];sp(G,k,E,be)}ee&&Ue.render(E);for(let xe=0,Pe=ue.length;xe<Pe;xe++){const be=ue[xe];rp(m,E,be,be.viewport)}}else k.length>0&&sp(G,k,E,O),ee&&Ue.render(E),rp(m,E,O);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,O),ut.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],q===!0&&ae.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Uc(E,O,H,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){G&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const xe=J.update(E),Pe=E.material;Pe.visible&&m.push(E,xe,Pe,H,Fe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const xe=J.update(E),Pe=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Fe.copy(xe.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(Pe)){const be=xe.groups;for(let Be=0,He=be.length;Be<He;Be++){const Le=be[Be],Qe=Pe[Le.materialIndex];Qe&&Qe.visible&&m.push(E,xe,Qe,H,Fe.z,Le)}}else Pe.visible&&m.push(E,xe,Pe,H,Fe.z,null)}}const ue=E.children;for(let xe=0,Pe=ue.length;xe<Pe;xe++)Uc(ue[xe],O,H,G)}function rp(E,O,H,G){const k=E.opaque,ue=E.transmissive,xe=E.transparent;f.setupLightsView(H),q===!0&&ae.setGlobalState(x.clippingPlanes,H),G&&fe.viewport(R.copy(G)),k.length>0&&Sa(k,O,H),ue.length>0&&Sa(ue,O,H),xe.length>0&&Sa(xe,O,H),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function sp(E,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Hr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?va:Ci,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ue=f.state.transmissionRenderTarget[G.id],xe=G.viewport||R;ue.setSize(xe.z,xe.w);const Pe=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),ee&&Ue.render(H);const be=x.toneMapping;x.toneMapping=ir;const Be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),q===!0&&ae.setGlobalState(x.clippingPlanes,G),Sa(E,H,G),A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue),se.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Le=0,Qe=O.length;Le<Qe;Le++){const ft=O[Le],dt=ft.object,nn=ft.geometry,et=ft.material,Ne=ft.group;if(et.side===Qn&&dt.layers.test(G.layers)){const ai=et.side;et.side=Kt,et.needsUpdate=!0,op(dt,H,G,nn,et,Ne),et.side=ai,et.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue))}x.setRenderTarget(Pe),x.setClearColor(z,W),Be!==void 0&&(G.viewport=Be),x.toneMapping=be}function Sa(E,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ue=E.length;k<ue;k++){const xe=E[k],Pe=xe.object,be=xe.geometry,Be=G===null?xe.material:G,He=xe.group;Pe.layers.test(H.layers)&&op(Pe,O,H,be,Be,He)}}function op(E,O,H,G,k,ue){E.onBeforeRender(x,O,H,G,k,ue),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,O,H,G,E,ue),k.transparent===!0&&k.side===Qn&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,x.renderBufferDirect(H,O,G,k,E,ue),k.side=lr,k.needsUpdate=!0,x.renderBufferDirect(H,O,G,k,E,ue),k.side=Qn):x.renderBufferDirect(H,O,G,k,E,ue),E.onAfterRender(x,O,H,G,k,ue)}function Ma(E,O,H){O.isScene!==!0&&(O=Ze);const G=Se.get(E),k=f.state.lights,ue=f.state.shadowsArray,xe=k.state.version,Pe=Re.getParameters(E,k.state,ue,O,H),be=Re.getProgramCacheKey(Pe);let Be=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",Ve),Be=new Map,G.programs=Be);let He=Be.get(be);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===xe)return lp(E,Pe),He}else Pe.uniforms=Re.getUniforms(E),E.onBeforeCompile(Pe,x),He=Re.acquireProgram(Pe,be),Be.set(be,He),G.uniforms=Pe.uniforms;const Le=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ae.uniform),lp(E,Pe),G.needsLights=ax(E),G.lightsStateVersion=xe,G.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function ap(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Il.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function lp(E,O){const H=Se.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function sx(E,O,H,G,k){O.isScene!==!0&&(O=Ze),A.resetTextureUnits();const ue=O.fog,xe=G.isMeshStandardMaterial?O.environment:null,Pe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qs,be=(G.isMeshStandardMaterial?B:M).get(G.envMap||xe),Be=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,ft=!!H.morphAttributes.color;let dt=ir;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=x.toneMapping);const nn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=nn!==void 0?nn.length:0,Ne=Se.get(G),ai=f.state.lights;if(q===!0&&(le===!0||E!==S)){const Mn=E===S&&G.id===w;ae.setState(G,E,Mn)}let tt=!1;G.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ai.state.version||Ne.outputColorSpace!==Pe||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==be||G.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ae.numPlanes||Ne.numIntersection!==ae.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==He||Ne.morphTargets!==Le||Ne.morphNormals!==Qe||Ne.morphColors!==ft||Ne.toneMapping!==dt||Ne.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ne.__version=G.version);let Nn=Ne.currentProgram;tt===!0&&(Nn=Ma(G,O,k));let jr=!1,fn=!1,io=!1;const pt=Nn.getUniforms(),$n=Ne.uniforms;if(fe.useProgram(Nn.program)&&(jr=!0,fn=!0,io=!0),G.id!==w&&(w=G.id,fn=!0),jr||S!==E){fe.buffers.depth.getReversed()?(ne.copy(E.projectionMatrix),QM(ne),e1(ne),pt.setValue(b,"projectionMatrix",ne)):pt.setValue(b,"projectionMatrix",E.projectionMatrix),pt.setValue(b,"viewMatrix",E.matrixWorldInverse);const Pi=pt.map.cameraPosition;Pi!==void 0&&Pi.setValue(b,ze.setFromMatrixPosition(E.matrixWorld)),we.logarithmicDepthBuffer&&pt.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,fn=!0,io=!0)}if(k.isSkinnedMesh){pt.setOptional(b,k,"bindMatrix"),pt.setOptional(b,k,"bindMatrixInverse");const Mn=k.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),pt.setValue(b,"boneTexture",Mn.boneTexture,A))}k.isBatchedMesh&&(pt.setOptional(b,k,"batchingTexture"),pt.setValue(b,"batchingTexture",k._matricesTexture,A),pt.setOptional(b,k,"batchingIdTexture"),pt.setValue(b,"batchingIdTexture",k._indirectTexture,A),pt.setOptional(b,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(b,"batchingColorTexture",k._colorsTexture,A));const ro=H.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0)&&Oe.update(k,H,Nn),(fn||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,pt.setValue(b,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&($n.envMap.value=be,$n.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&($n.envMapIntensity.value=O.environmentIntensity),fn&&(pt.setValue(b,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&ox($n,io),ue&&G.fog===!0&&me.refreshFogUniforms($n,ue),me.refreshMaterialUniforms($n,G,N,$,f.state.transmissionRenderTarget[E.id]),Il.upload(b,ap(Ne),$n,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Il.upload(b,ap(Ne),$n,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(b,"center",k.center),pt.setValue(b,"modelViewMatrix",k.modelViewMatrix),pt.setValue(b,"normalMatrix",k.normalMatrix),pt.setValue(b,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Mn=G.uniformsGroups;for(let Pi=0,bi=Mn.length;Pi<bi;Pi++){const cp=Mn[Pi];F.update(cp,Nn),F.bind(cp,Nn)}}return Nn}function ox(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ax(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,H){Se.get(E.texture).__webglTexture=O,Se.get(E.depthTexture).__webglTexture=H;const G=Se.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const H=Se.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){P=E,T=O,C=H;let G=!0,k=null,ue=!1,xe=!1;if(E){const be=Se.get(E);if(be.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(b.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(be.__hasExternalTextures)A.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Le=E.depthTexture;if(be.__boundDepthTexture!==Le){if(Le!==null&&Se.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const He=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[O])?k=He[O][H]:k=He[O],ue=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?k=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[H]:k=He,R.copy(E.viewport),I.copy(E.scissor),U=E.scissorTest}else R.copy(ie).multiplyScalar(N).floor(),I.copy(ve).multiplyScalar(N).floor(),U=ke;if(fe.bindFramebuffer(b.FRAMEBUFFER,k)&&G&&fe.drawBuffers(E,k),fe.viewport(R),fe.scissor(I),fe.setScissorTest(U),ue){const be=Se.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,H)}else if(xe){const be=Se.get(E.texture),Be=O||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,be.__webglTexture,H||0,Be)}w=-1},this.readRenderTargetPixels=function(E,O,H,G,k,ue,xe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){fe.bindFramebuffer(b.FRAMEBUFFER,Pe);try{const be=E.texture,Be=be.format,He=be.type;if(!we.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&H>=0&&H<=E.height-k&&b.readPixels(O,H,G,k,Xe.convert(Be),Xe.convert(He),ue)}finally{const be=P!==null?Se.get(P).__webglFramebuffer:null;fe.bindFramebuffer(b.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,G,k,ue,xe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Pe=Pe[xe]),Pe){const be=E.texture,Be=be.format,He=be.type;if(!we.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-G&&H>=0&&H<=E.height-k){fe.bindFramebuffer(b.FRAMEBUFFER,Pe);const Le=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Le),b.bufferData(b.PIXEL_PACK_BUFFER,ue.byteLength,b.STREAM_READ),b.readPixels(O,H,G,k,Xe.convert(Be),Xe.convert(He),0);const Qe=P!==null?Se.get(P).__webglFramebuffer:null;fe.bindFramebuffer(b.FRAMEBUFFER,Qe);const ft=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await JM(b,ft,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Le),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ue),b.deleteBuffer(Le),b.deleteSync(ft),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,H=0){E.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),k=Math.floor(E.image.width*G),ue=Math.floor(E.image.height*G),xe=O!==null?O.x:0,Pe=O!==null?O.y:0;A.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,H,0,0,xe,Pe,k,ue),fe.unbindTexture()},this.copyTextureToTexture=function(E,O,H=null,G=null,k=0){E.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],O=arguments[2],k=arguments[3]||0,H=null);let ue,xe,Pe,be,Be,He,Le,Qe,ft;const dt=E.isCompressedTexture?E.mipmaps[k]:E.image;H!==null?(ue=H.max.x-H.min.x,xe=H.max.y-H.min.y,Pe=H.isBox3?H.max.z-H.min.z:1,be=H.min.x,Be=H.min.y,He=H.isBox3?H.min.z:0):(ue=dt.width,xe=dt.height,Pe=dt.depth||1,be=0,Be=0,He=0),G!==null?(Le=G.x,Qe=G.y,ft=G.z):(Le=0,Qe=0,ft=0);const nn=Xe.convert(O.format),et=Xe.convert(O.type);let Ne;O.isData3DTexture?(A.setTexture3D(O,0),Ne=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ne=b.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ne=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const ai=b.getParameter(b.UNPACK_ROW_LENGTH),tt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Nn=b.getParameter(b.UNPACK_SKIP_PIXELS),jr=b.getParameter(b.UNPACK_SKIP_ROWS),fn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,dt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,dt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,be),b.pixelStorei(b.UNPACK_SKIP_ROWS,Be),b.pixelStorei(b.UNPACK_SKIP_IMAGES,He);const io=E.isDataArrayTexture||E.isData3DTexture,pt=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const $n=Se.get(E),ro=Se.get(O),Mn=Se.get($n.__renderTarget),Pi=Se.get(ro.__renderTarget);fe.bindFramebuffer(b.READ_FRAMEBUFFER,Mn.__webglFramebuffer),fe.bindFramebuffer(b.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let bi=0;bi<Pe;bi++)io&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,k,He+bi),E.isDepthTexture?(pt&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.get(O).__webglTexture,k,ft+bi),b.blitFramebuffer(be,Be,ue,xe,Le,Qe,ue,xe,b.DEPTH_BUFFER_BIT,b.NEAREST)):pt?b.copyTexSubImage3D(Ne,k,Le,Qe,ft+bi,be,Be,ue,xe):b.copyTexSubImage2D(Ne,k,Le,Qe,ft+bi,be,Be,ue,xe);fe.bindFramebuffer(b.READ_FRAMEBUFFER,null),fe.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Ne,k,Le,Qe,ft,ue,xe,Pe,nn,et,dt.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(Ne,k,Le,Qe,ft,ue,xe,Pe,nn,dt.data):b.texSubImage3D(Ne,k,Le,Qe,ft,ue,xe,Pe,nn,et,dt):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,k,Le,Qe,ue,xe,nn,et,dt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,k,Le,Qe,dt.width,dt.height,nn,dt.data):b.texSubImage2D(b.TEXTURE_2D,k,Le,Qe,ue,xe,nn,et,dt);b.pixelStorei(b.UNPACK_ROW_LENGTH,ai),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Nn),b.pixelStorei(b.UNPACK_SKIP_ROWS,jr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,fn),k===0&&O.generateMipmaps&&b.generateMipmap(Ne),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H=null,G=null,k=0){return E.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],O=arguments[3],k=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,H,G,k)},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,fe.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}class B_ extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class uC{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Rh,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new D;class lc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Hn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Hn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Hn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Hn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new _n(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yd extends pr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const xo=new D,cs=new D,us=new D,fs=new oe,yo=new oe,V_=new lt,ll=new D,So=new D,cl=new D,xg=new oe,zu=new oe,yg=new oe;class H_ extends Lt{constructor(e=new Yd){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new tn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uC(n,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new lc(i,3,0,!1)),ls.setAttribute("uv",new lc(i,2,3,!1))}this.geometry=ls,this.material=e,this.center=new oe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),V_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ul(ll.set(-.5,-.5,0),us,o,cs,r,s),ul(So.set(.5,-.5,0),us,o,cs,r,s),ul(cl.set(.5,.5,0),us,o,cs,r,s),xg.set(0,0),zu.set(1,0),yg.set(1,1);let a=e.ray.intersectTriangle(ll,So,cl,!1,xo);if(a===null&&(ul(So.set(-.5,.5,0),us,o,cs,r,s),zu.set(0,1),a=e.ray.intersectTriangle(ll,cl,So,!1,xo),a===null))return;const l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||n.push({distance:l,point:xo.clone(),uv:Cn.getInterpolation(xo,ll,So,cl,xg,zu,yg,new oe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ul(t,e,n,i,r,s){fs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(yo.x=s*fs.x-r*fs.y,yo.y=r*fs.x+s*fs.y):yo.copy(fs),t.copy(e),t.x+=yo.x,t.y+=yo.y,t.applyMatrix4(V_)}class G_ extends pr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sg=new lt,Lh=new Gd,fl=new bc,hl=new D;class fC extends Lt{constructor(e=new tn,n=new G_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;Sg.copy(r).invert(),Lh.copy(e.ray).applyMatrix4(Sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const m=c.getX(g);hl.fromBufferAttribute(h,m),Mg(hl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,y=p;g<y;g++)hl.fromBufferAttribute(h,g),Mg(hl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mg(t,e,n,i,r,s,o){const a=Lh.distanceSqToPoint(t);if(a<n){const l=new D;Lh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class hC extends Jt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new oe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],o=[],a=new D,l=new lt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $d extends si{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new oe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dC extends $d{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const dl=new D,Bu=new qd,Vu=new qd,Hu=new qd;class pC extends si{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(dl.subVectors(r[0],r[1]).add(r[0]),c=dl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=dl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,y,m),Vu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,y,m),Hu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Bu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Vu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Hu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Bu.calc(l),Vu.calc(l),Hu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eg(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function mC(t,e){const n=1-t;return n*n*e}function gC(t,e){return 2*(1-t)*t*e}function vC(t,e){return t*t*e}function Vo(t,e,n,i){return mC(t,e)+gC(t,n)+vC(t,i)}function _C(t,e){const n=1-t;return n*n*n*e}function xC(t,e){const n=1-t;return 3*n*n*t*e}function yC(t,e){return 3*(1-t)*t*t*e}function SC(t,e){return t*t*t*e}function Ho(t,e,n,i,r){return _C(t,e)+xC(t,n)+yC(t,i)+SC(t,r)}class W_ extends si{constructor(e=new oe,n=new oe,i=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new oe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,r.x,s.x,o.x,a.x),Ho(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class MC extends si{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ho(e,r.x,s.x,o.x,a.x),Ho(e,r.y,s.y,o.y,a.y),Ho(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X_ extends si{constructor(e=new oe,n=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new oe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new oe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class EC extends si{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j_ extends si{constructor(e=new oe,n=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new oe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Vo(e,r.x,s.x,o.x),Vo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wC extends si{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Vo(e,r.x,s.x,o.x),Vo(e,r.y,s.y,o.y),Vo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y_ extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new oe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Eg(a,l.x,c.x,u.x,h.x),Eg(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new oe().fromArray(r))}return this}}var Dh=Object.freeze({__proto__:null,ArcCurve:dC,CatmullRomCurve3:pC,CubicBezierCurve:W_,CubicBezierCurve3:MC,EllipseCurve:$d,LineCurve:X_,LineCurve3:EC,QuadraticBezierCurve:j_,QuadraticBezierCurve3:wC,SplineCurve:Y_});class TC extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Dh[r.type]().fromJSON(r))}return this}}class Nh extends TC{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new X_(this.currentPoint.clone(),new oe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new j_(this.currentPoint.clone(),new oe(e,n),new oe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new W_(this.currentPoint.clone(),new oe(e,n),new oe(i,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Y_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new $d(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nc extends tn{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Pt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,h=new D,d=new oe,p=new D,g=new D,y=new D;let m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let v=0;v<=n;v++){const _=i+v*u*r,x=Math.sin(_),L=Math.cos(_);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*x,h.y=e[T].y,h.z=e[T].x*L,o.push(h.x,h.y,h.z),d.x=v/n,d.y=T/(e.length-1),a.push(d.x,d.y);const C=l[3*T+0]*x,P=l[3*T+1],w=l[3*T+0]*L;c.push(C,P,w)}}for(let v=0;v<n;v++)for(let _=0;_<e.length-1;_++){const x=_+v*e.length,L=x,T=x+e.length,C=x+e.length+1,P=x+1;s.push(L,T,P),s.push(C,P,T)}this.setIndex(s),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(a,2)),this.setAttribute("normal",new Tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.points,e.segments,e.phiStart,e.phiLength)}}class Zd extends Nc{constructor(e=1,n=1,i=4,r=8){const s=new Nh;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Zd(e.radius,e.length,e.capSegments,e.radialSegments)}}class cc extends tn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const y=[],m=i/2;let f=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function v(){const x=new D,L=new D;let T=0;const C=(n-e)/i;for(let P=0;P<=s;P++){const w=[],S=P/s,R=S*(n-e)+e;for(let I=0;I<=r;I++){const U=I/r,z=U*l+a,W=Math.sin(z),V=Math.cos(z);L.x=R*W,L.y=-S*i+m,L.z=R*V,h.push(L.x,L.y,L.z),x.set(W,C,V).normalize(),d.push(x.x,x.y,x.z),p.push(U,1-S),w.push(g++)}y.push(w)}for(let P=0;P<r;P++)for(let w=0;w<s;w++){const S=y[w][P],R=y[w+1][P],I=y[w+1][P+1],U=y[w][P+1];(e>0||w!==0)&&(u.push(S,R,U),T+=3),(n>0||w!==s-1)&&(u.push(R,I,U),T+=3)}c.addGroup(f,T,0),f+=T}function _(x){const L=g,T=new oe,C=new D;let P=0;const w=x===!0?e:n,S=x===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const R=g;for(let I=0;I<=r;I++){const z=I/r*l+a,W=Math.cos(z),V=Math.sin(z);C.x=w*V,C.y=m*S,C.z=w*W,h.push(C.x,C.y,C.z),d.push(0,S,0),T.x=W*.5+.5,T.y=V*.5*S+.5,p.push(T.x,T.y),g++}for(let I=0;I<r;I++){const U=L+I,z=R+I;x===!0?u.push(z,z+1,U):u.push(z+1,z,U),P+=3}c.addGroup(f,P,x===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $_ extends Nh{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Nh().fromJSON(r))}return this}}const AC={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=q_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=LC(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)h=t[g],d=t[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ca(s,o,n,a,l,p,0),o}};function q_(t,e,n,i,r){let s,o;if(r===HC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=wg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=wg(s,t[s],t[s+1],o);return o&&Ic(o,o.next)&&(fa(o),o=o.next),o}function Gr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ic(n,n.next)||xt(n.prev,n,n.next)===0)){if(fa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ca(t,e,n,i,r,s,o){if(!t)return;!o&&s&&FC(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?RC(t,i,r,s):CC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),fa(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=PC(Gr(t),e,n),ca(t,e,n,i,r,s,2)):o===2&&bC(t,e,n,i,r,s):ca(Gr(t),e,n,i,r,s,1);break}}}function CC(t){const e=t.prev,n=t,i=t.next;if(xt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Cs(r,a,s,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function RC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(xt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,y=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=Ih(p,g,e,n,i),v=Ih(y,m,e,n,i);let _=t.prevZ,x=t.nextZ;for(;_&&_.z>=f&&x&&x.z<=v;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Cs(a,u,l,h,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Cs(a,u,l,h,c,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Cs(a,u,l,h,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Cs(a,u,l,h,c,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function PC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Ic(r,s)&&Z_(r,i,i.next,s)&&ua(r,s)&&ua(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),fa(i),fa(i.next),i=t=s),i=i.next}while(i!==t);return Gr(i)}function bC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zC(o,a)){let l=K_(o,a);o=Gr(o,o.next),l=Gr(l,l.next),ca(o,e,n,i,r,s,0),ca(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function LC(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=q_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(kC(c));for(r.sort(DC),s=0;s<r.length;s++)n=NC(r[s],n);return n}function DC(t,e){return t.x-e.x}function NC(t,e){const n=IC(t,e);if(!n)return e;const i=K_(n,t);return Gr(i,i.next),Gr(n,n.next)}function IC(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Cs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),ua(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&UC(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function UC(t,e){return xt(t.prev,t,e.prev)<0&&xt(e.next,t,t.next)<0}function FC(t,e,n,i){let r=t;do r.z===0&&(r.z=Ih(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,OC(r)}function OC(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Ih(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function kC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Cs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function zC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!BC(t,e)&&(ua(t,e)&&ua(e,t)&&VC(t,e)&&(xt(t.prev,t,e.prev)||xt(t,e.prev,e))||Ic(t,e)&&xt(t.prev,t,t.next)>0&&xt(e.prev,e,e.next)>0)}function xt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ic(t,e){return t.x===e.x&&t.y===e.y}function Z_(t,e,n,i){const r=ml(xt(t,e,n)),s=ml(xt(t,e,i)),o=ml(xt(n,i,t)),a=ml(xt(n,i,e));return!!(r!==s&&o!==a||r===0&&pl(t,n,e)||s===0&&pl(t,i,e)||o===0&&pl(n,t,i)||a===0&&pl(n,e,i))}function pl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ml(t){return t>0?1:t<0?-1:0}function BC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Z_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ua(t,e){return xt(t.prev,t,t.next)<0?xt(t,e,t.next)>=0&&xt(t,t.prev,e)>=0:xt(t,e,t.prev)<0||xt(t,t.next,e)<0}function VC(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function K_(t,e){const n=new Uh(t.i,t.x,t.y),i=new Uh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function wg(t,e,n,i){const r=new Uh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function fa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Uh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function HC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Go{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Go.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Tg(e),Ag(i,e);let o=e.length;n.forEach(Tg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Ag(i,n[l]);const a=AC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Tg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ag(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Kd extends tn{constructor(e=new $_([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(r,3)),this.setAttribute("uv",new Tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:GC;let _,x=!1,L,T,C,P;f&&(_=f.getSpacedPoints(u),x=!0,d=!1,L=f.computeFrenetFrames(u,!1),T=new D,C=new D,P=new D),d||(m=0,p=0,g=0,y=0);const w=a.extractPoints(c);let S=w.shape;const R=w.holes;if(!Go.isClockWise(S)){S=S.reverse();for(let ee=0,ce=R.length;ee<ce;ee++){const b=R[ee];Go.isClockWise(b)&&(R[ee]=b.reverse())}}const U=Go.triangulateShape(S,R),z=S;for(let ee=0,ce=R.length;ee<ce;ee++){const b=R[ee];S=S.concat(b)}function W(ee,ce,b){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ce,b)}const V=S.length,$=U.length;function N(ee,ce,b){let De,se,we;const fe=ee.x-ce.x,Ie=ee.y-ce.y,Se=b.x-ee.x,A=b.y-ee.y,M=fe*fe+Ie*Ie,B=fe*A-Ie*Se;if(Math.abs(B)>Number.EPSILON){const K=Math.sqrt(M),te=Math.sqrt(Se*Se+A*A),J=ce.x-Ie/K,Re=ce.y+fe/K,me=b.x-A/te,Me=b.y+Se/te,$e=((me-J)*A-(Me-Re)*Se)/(fe*A-Ie*Se);De=J+fe*$e-ee.x,se=Re+Ie*$e-ee.y;const ae=De*De+se*se;if(ae<=2)return new oe(De,se);we=Math.sqrt(ae/2)}else{let K=!1;fe>Number.EPSILON?Se>Number.EPSILON&&(K=!0):fe<-Number.EPSILON?Se<-Number.EPSILON&&(K=!0):Math.sign(Ie)===Math.sign(A)&&(K=!0),K?(De=-Ie,se=fe,we=Math.sqrt(M)):(De=fe,se=Ie,we=Math.sqrt(M/2))}return new oe(De/we,se/we)}const j=[];for(let ee=0,ce=z.length,b=ce-1,De=ee+1;ee<ce;ee++,b++,De++)b===ce&&(b=0),De===ce&&(De=0),j[ee]=N(z[ee],z[b],z[De]);const Z=[];let ie,ve=j.concat();for(let ee=0,ce=R.length;ee<ce;ee++){const b=R[ee];ie=[];for(let De=0,se=b.length,we=se-1,fe=De+1;De<se;De++,we++,fe++)we===se&&(we=0),fe===se&&(fe=0),ie[De]=N(b[De],b[we],b[fe]);Z.push(ie),ve=ve.concat(ie)}for(let ee=0;ee<m;ee++){const ce=ee/m,b=p*Math.cos(ce*Math.PI/2),De=g*Math.sin(ce*Math.PI/2)+y;for(let se=0,we=z.length;se<we;se++){const fe=W(z[se],j[se],De);ne(fe.x,fe.y,-b)}for(let se=0,we=R.length;se<we;se++){const fe=R[se];ie=Z[se];for(let Ie=0,Se=fe.length;Ie<Se;Ie++){const A=W(fe[Ie],ie[Ie],De);ne(A.x,A.y,-b)}}}const ke=g+y;for(let ee=0;ee<V;ee++){const ce=d?W(S[ee],ve[ee],ke):S[ee];x?(C.copy(L.normals[0]).multiplyScalar(ce.x),T.copy(L.binormals[0]).multiplyScalar(ce.y),P.copy(_[0]).add(C).add(T),ne(P.x,P.y,P.z)):ne(ce.x,ce.y,0)}for(let ee=1;ee<=u;ee++)for(let ce=0;ce<V;ce++){const b=d?W(S[ce],ve[ce],ke):S[ce];x?(C.copy(L.normals[ee]).multiplyScalar(b.x),T.copy(L.binormals[ee]).multiplyScalar(b.y),P.copy(_[ee]).add(C).add(T),ne(P.x,P.y,P.z)):ne(b.x,b.y,h/u*ee)}for(let ee=m-1;ee>=0;ee--){const ce=ee/m,b=p*Math.cos(ce*Math.PI/2),De=g*Math.sin(ce*Math.PI/2)+y;for(let se=0,we=z.length;se<we;se++){const fe=W(z[se],j[se],De);ne(fe.x,fe.y,h+b)}for(let se=0,we=R.length;se<we;se++){const fe=R[se];ie=Z[se];for(let Ie=0,Se=fe.length;Ie<Se;Ie++){const A=W(fe[Ie],ie[Ie],De);x?ne(A.x,A.y+_[u-1].y,_[u-1].x+b):ne(A.x,A.y,h+b)}}}X(),q();function X(){const ee=r.length/3;if(d){let ce=0,b=V*ce;for(let De=0;De<$;De++){const se=U[De];Ce(se[2]+b,se[1]+b,se[0]+b)}ce=u+m*2,b=V*ce;for(let De=0;De<$;De++){const se=U[De];Ce(se[0]+b,se[1]+b,se[2]+b)}}else{for(let ce=0;ce<$;ce++){const b=U[ce];Ce(b[2],b[1],b[0])}for(let ce=0;ce<$;ce++){const b=U[ce];Ce(b[0]+V*u,b[1]+V*u,b[2]+V*u)}}i.addGroup(ee,r.length/3-ee,0)}function q(){const ee=r.length/3;let ce=0;le(z,ce),ce+=z.length;for(let b=0,De=R.length;b<De;b++){const se=R[b];le(se,ce),ce+=se.length}i.addGroup(ee,r.length/3-ee,1)}function le(ee,ce){let b=ee.length;for(;--b>=0;){const De=b;let se=b-1;se<0&&(se=ee.length-1);for(let we=0,fe=u+m*2;we<fe;we++){const Ie=V*we,Se=V*(we+1),A=ce+De+Ie,M=ce+se+Ie,B=ce+se+Se,K=ce+De+Se;ze(A,M,B,K)}}}function ne(ee,ce,b){l.push(ee),l.push(ce),l.push(b)}function Ce(ee,ce,b){Fe(ee),Fe(ce),Fe(b);const De=r.length/3,se=v.generateTopUV(i,r,De-3,De-2,De-1);Ze(se[0]),Ze(se[1]),Ze(se[2])}function ze(ee,ce,b,De){Fe(ee),Fe(ce),Fe(De),Fe(ce),Fe(b),Fe(De);const se=r.length/3,we=v.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);Ze(we[0]),Ze(we[1]),Ze(we[3]),Ze(we[1]),Ze(we[2]),Ze(we[3])}function Fe(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function Ze(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return WC(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Dh[r.type]().fromJSON(r)),new Kd(i,e.options)}}const GC={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new oe(s,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-h),new oe(d,1-g),new oe(y,1-f)]:[new oe(a,1-l),new oe(u,1-h),new oe(p,1-g),new oe(m,1-f)]}};function WC(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Jd extends tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){const v=[],_=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let L=0;L<=n;L++){const T=L/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(T+x,1-_),v.push(c++)}u.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const _=u[f][v+1],x=u[f][v],L=u[f+1][v],T=u[f+1][v+1];(f!==0||o>0)&&p.push(_,x,T),(f!==i-1||l<Math.PI)&&p.push(x,L,T)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qd extends tn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new D,h=new D,d=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(y),h.y=(e+n*Math.cos(m))*Math.sin(y),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(y,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class XC extends pr{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Fh extends pr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=M_,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rr extends Fh{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ep extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class jC extends ep{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Gu=new lt,Cg=new D,Rg=new D;class J_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Cg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cg),Rg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rg),n.updateMatrixWorld(),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pg=new lt,Mo=new D,Wu=new D;class YC extends J_{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mo),Wu.copy(i.position),Wu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Wu),i.updateMatrixWorld(),r.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Pg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pg)}}class Q_ extends ep{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new YC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $C extends J_{constructor(){super(new I_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bg extends ep{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new $C}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lg=new lt;class qC{constructor(e,n,i=0,r=1/0){this.ray=new Gd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Wd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Lg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lg),this}intersectObject(e,n=!0,i=[]){return Oh(e,this,i,n),i.sort(Dg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Oh(e[r],this,i,n);return i.sort(Dg),i}}function Dg(t,e){return t.distance-e.distance}function Oh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Oh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);class ZC extends B_{constructor(){super();const e=new cr;e.deleteAttribute("uv");const n=new Fh({side:Kt}),i=new Fh,r=new Q_(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ot(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new ot(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ot(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ot(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ot(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new ot(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new ot(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new ot(e,hs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new ot(e,hs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new ot(e,hs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const y=new ot(e,hs(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const m=new ot(e,hs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new ot(e,hs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function hs(t){const e=new Lc;return e.color.setScalar(t),e}const KC={hers:{radius:.93,thickness:.072,width:.125,color:"#e9cc98",roughness:.1,clearcoat:.6},his:{radius:1,thickness:.082,width:.2,color:"#e9cc98",roughness:.12,clearcoat:.5}};function Ng(t){const e=KC[t],n=new mn,i=new mn;n.add(i);const r=new Qd(e.radius,e.thickness,56,240);r.applyMatrix4(new lt().makeScale(1,1,e.width/e.thickness));const s=new Rr({color:e.color,metalness:1,roughness:e.roughness,clearcoat:e.clearcoat,clearcoatRoughness:.05,envMapIntensity:1.4}),o=new ot(r,s);o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=[s];let l;if(t==="hers"){const c=e.radius+e.thickness,u=new ot(new cc(.1,.065,.15,40),s);u.position.y=c+.045,u.castShadow=!0,i.add(u);const h=[new oe(.001,-.14),new oe(.2,-.005),new oe(.2,.02),new oe(.125,.1),new oe(.001,.1)],d=new Nc(h,16),p=new Rr({color:"#ffffff",metalness:.15,roughness:0,ior:2.4,specularIntensity:1,clearcoat:1,clearcoatRoughness:0,iridescence:.5,iridescenceIOR:1.8,envMapIntensity:3.4,flatShading:!0,side:Qn}),g=new ot(d,p),y=c+.12+.14;g.position.y=y,g.castShadow=!0,i.add(g),a.push(p);const m=new cc(.018,.026,.24,12),f=new Jd(.026,12,10);for(let v=0;v<4;v++){const _=Math.PI/4+v*Math.PI/2,x=new ot(m,s);x.position.set(Math.cos(_)*.17,y-.04,Math.sin(_)*.17),x.rotation.set(Math.sin(_)*.18,0,-Math.cos(_)*.18);const L=new ot(f,s);L.position.set(Math.cos(_)*.185,y+.075,Math.sin(_)*.185),i.add(x,L)}l=new D(0,y+.1,.02)}return{outer:n,inner:i,metal:s,materials:a,stoneTop:l}}function ya(t,e,n=!0){const i=document.createElement("canvas");i.width=i.height=t;const r=i.getContext("2d"),s=new hC(i);n&&(s.colorSpace=rn),s.anisotropy=8;const o=()=>{r.clearRect(0,0,t,t),e(r,t),s.needsUpdate=!0};return o(),{texture:s,repaint:o}}const JC=()=>ya(256,(t,e)=>{const n=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(51,41,35,0.6)"),n.addColorStop(.45,"rgba(51,41,35,0.24)"),n.addColorStop(1,"rgba(51,41,35,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)}).texture,ex=()=>ya(256,(t,e)=>{const n=e/2,i=t.createRadialGradient(n,n,0,n,n,n*.45);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.3,"rgba(255,247,228,0.5)"),i.addColorStop(1,"rgba(255,240,214,0)"),t.fillStyle=i,t.fillRect(0,0,e,e);const r=[[0,1,3],[Math.PI/2,1,3],[Math.PI/4,.5,1.4],[-Math.PI/4,.5,1.4]];for(const[s,o,a]of r){t.save(),t.translate(n,n),t.rotate(s);const l=t.createLinearGradient(-n*o,0,n*o,0);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.5,"rgba(255,255,255,0.95)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(-n*o,-a/2,n*o*2,a),t.restore()}}).texture;function tx(t,e,n,i,r){t.font=`${i}px "Great Vibes", cursive`,t.textBaseline="alphabetic";const s=t.measureText("V").width,o=t.measureText("M").width,a=i*.15,l=e-(s+o-a)/2,c=n+i*.28;t.fillStyle=r,t.fillText("V",l,c),t.fillText("M",l+s-a,c)}const QC=()=>ya(1024,(t,e)=>{const n=t.createLinearGradient(0,0,e,e);n.addColorStop(0,"#fbf0ee"),n.addColorStop(.5,"#f3dfdf"),n.addColorStop(1,"#e8cdcf"),t.fillStyle=n,t.fillRect(0,0,e,e);for(let r=0;r<5;r++){const s=t.createLinearGradient(0,0,e,e*.6),o=.12+r*.18;s.addColorStop(Math.max(0,o-.06),"rgba(255,255,255,0)"),s.addColorStop(o,"rgba(255,255,255,0.22)"),s.addColorStop(Math.min(1,o+.06),"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,e,e)}const i=t.createLinearGradient(e*.35,e*.35,e*.65,e*.65);i.addColorStop(0,"#9c7f4c"),i.addColorStop(.5,"#d4bb86"),i.addColorStop(1,"#9c7f4c"),t.strokeStyle=i,t.lineWidth=3,t.beginPath(),t.arc(e/2,e/2,e*.2,0,Math.PI*2),t.stroke(),t.lineWidth=1.2,t.beginPath(),t.arc(e/2,e/2,e*.188,0,Math.PI*2),t.stroke(),tx(t,e/2,e/2,e*.21,i)});function e2(){return ya(512,(t,e)=>{t.fillStyle="#000",t.fillRect(0,0,e,e),t.strokeStyle="#fff",t.lineWidth=5,t.beginPath(),t.arc(e/2,e/2,e*.4,0,Math.PI*2),t.stroke(),t.lineWidth=2,t.beginPath(),t.arc(e/2,e/2,e*.375,0,Math.PI*2),t.stroke();for(const[n,i]of[[0,0],[2,0],[-2,0],[0,2],[0,-2]])tx(t,e/2+n,e/2+i,e*.46,"#fff")},!1)}const Po={W:5.6,D:4.4,HB:2.4,HL:1.5,T:.24,R:.55},t2=Pc.degToRad(104);function Ig(t,e,n){const i=new $_,r=-t/2,s=-e/2;return n=Math.min(n,t/2,e/2),i.moveTo(r+n,s),i.lineTo(r+t-n,s),i.quadraticCurveTo(r+t,s,r+t,s+n),i.lineTo(r+t,s+e-n),i.quadraticCurveTo(r+t,s+e,r+t-n,s+e),i.lineTo(r+n,s+e),i.quadraticCurveTo(r,s+e,r,s+e-n),i.lineTo(r,s+n),i.quadraticCurveTo(r,s,r+n,s),i}function ki(t,e,n,i,r,s=0,o){const a=Ig(t-2*s,e-2*s,Math.max(.02,n-s));o&&a.holes.push(Ig(o.w+2*s,o.d+2*s,o.r+s));const l=new Kd(a,{depth:Math.max(.001,i-2*s),bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:s>0?6:0,curveSegments:40});return l.rotateX(-Math.PI/2),l.translate(0,r+s,0),l}const n2=()=>ya(256,(t,e)=>{const n=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,244,214,1)"),n.addColorStop(.35,"rgba(255,214,150,0.45)"),n.addColorStop(1,"rgba(255,200,130,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)}).texture;function i2(){const{W:t,D:e,HB:n,HL:i,T:r,R:s}=Po,o=new mn,a=new mn,l=[],c=(q,le,ne=!0)=>{l.push(q);const Ce=new ot(q,le);return Ce.castShadow=ne,Ce.receiveShadow=ne,Ce},u=new Rr({color:"#5a1429",roughness:.8,sheen:.55,sheenColor:new We("#b9566f"),sheenRoughness:.5}),h=new Rr({color:"#f3dcdc",roughness:.34,sheen:1,sheenColor:new We("#fff2f2"),sheenRoughness:.26,clearcoat:.14,clearcoatRoughness:.4}),d=new Rr({color:"#d6b97f",metalness:1,roughness:.2,envMapIntensity:1.3}),p=QC(),g=new Rr({map:p.texture,roughness:.42,sheen:.7,sheenColor:new We("#fff7ea"),sheenRoughness:.3}),y=e2(),m=new Rr({color:"#c9aa6b",metalness:1,roughness:.3,alphaMap:y.texture,alphaTest:.45}),f=new Lc({map:JC(),transparent:!0,depthWrite:!1,opacity:.55});f.userData.base=.55;const v=new XC({opacity:.14});v.userData.base=.14;const _=new Yd({map:n2(),color:"#ffc46b",transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}),x={w:t-2*r,d:e-2*r,r:s-r},L={w:x.w-.09,d:x.d-.09,r:x.r-.04},T=new mn;T.add(c(ki(t,e,s,n,0,.07,x),u),c(ki(t,e,s,.35,0,.07),u),c(ki(x.w-.01,x.d-.01,x.r,n-.36,.3,0,L),h),c(ki(t+.014,e+.014,s+.007,.05,n-.2,0,{w:t-.12,d:e-.12,r:s-.06}),d),c(new cr(x.w-.04,.9,x.d-.04).translate(0,.75,0),h));const C=.95,P=new Zd(C,x.w-.06-2*C,16,48).rotateZ(Math.PI/2);for(const q of[-1,1]){const le=c(P.clone(),h);le.position.set(0,1.33,q),T.add(le)}l.push(P);const w=c(new cr(.62,.2,.05),d);w.position.set(0,n-.34,e/2+.015),T.add(w),o.add(T);const S=new mn;S.position.set(0,n,-e/2);const R=new mn;R.position.z=e/2,R.add(c(ki(t,e,s,i-.2,0,.07,x),u),c(ki(t,e,s,.4,i-.4,.16),u),c(ki(t+.014,e+.014,s+.007,.05,.14,0,{w:t-.12,d:e-.12,r:s-.06}),d),c(ki(x.w-.01,x.d-.01,x.r,i-.42,.04,0,L),h));const I=c(new Yi(x.w-.06,x.d-.06).rotateX(Math.PI/2),g,!1);I.receiveShadow=!0,I.position.y=i-.405;const U=c(new Yi(2.5,2.5).rotateX(-Math.PI/2),m,!1);U.position.y=i+.004,R.add(I,U),S.add(R),o.add(S);const z=Ng("hers");z.outer.position.set(-1.2,1.98,.02),z.outer.rotation.y=.15;const W=Ng("his");W.outer.position.set(1.22,2.06,.02),W.outer.rotation.y=-.14,o.add(z.outer,W.outer);const V=new Q_("#ffd9a8",0,9,2);V.position.set(0,n+1.1,.6);const $=new H_(_);$.position.set(0,n+.1,e/2+.3),$.scale.set(8.5,2.4,1),$.renderOrder=2,o.add(V,$);const N=c(new Yi(t*1.5,e*1.6).rotateX(-Math.PI/2),f,!1);N.position.y=.004;const j=c(new Yi(40,40).rotateX(-Math.PI/2),v,!1);j.receiveShadow=!0,a.add(N,j);const Z=[u,h,d,g,m,f,v,...z.materials,...W.materials];let ie=0,ve=1,ke=0;const X=()=>{const q=ie*ve;o.visible=a.visible=q>.001,o.position.y=-.5*(1-ie),o.scale.setScalar(.965+.035*ie);for(const le of Z){const ne=le.userData.base??1,Ce=ne<1||q<.999;le.transparent!==Ce&&(le.transparent=Ce,le.needsUpdate=!0),le.opacity=ne*q}_.opacity=ke*.42*q,V.intensity=7*ke*q};return X(),{group:o,floor:a,hers:z,his:W,setReveal(q){ie=q,X()},setFade(q){ve=q,X()},setLid(q){S.rotation.x=-t2*q},setGlow(q){ke=q,X()},setPresent(q,le){z.outer.position.set(-1.2,1.98+.6*q,.02+.25*q),z.outer.rotation.set(-.34*q,.15-.05*q,.04*q),W.outer.position.set(1.22,2.06+.5*le,.02+.2*le),W.outer.rotation.set(-.3*le,-.14+.04*le,-.04*le)},repaint(){p.repaint(),y.repaint()},dispose(){var q,le;l.forEach(ne=>ne.dispose()),Z.forEach(ne=>ne.dispose()),p.texture.dispose(),y.texture.dispose(),(q=f.map)==null||q.dispose(),(le=_.map)==null||le.dispose(),_.dispose()}}}class r2{constructor(e=160,n=.7){this.count=e,this.baseSize=n,this.opacity=1,this.next=0,this.p=new D,this.v=new D,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.vel=new Float32Array(e*3),this.age=new Float32Array(e).fill(99),this.life=new Float32Array(e).fill(1),this.seed=Float32Array.from({length:e},()=>Math.random()*10);const i=new tn;i.setAttribute("position",new _n(this.pos,3)),i.setAttribute("color",new _n(this.col,4)),this.material=new G_({size:n,map:ex(),vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0}),this.points=new fC(i,this.material),this.points.frustumCulled=!1}emit(e,n){for(let i=0;i<e;i++){const r=this.next++%this.count;n(this.p,this.v),this.pos.set([this.p.x,this.p.y,this.p.z],r*3),this.vel.set([this.v.x,this.v.y,this.v.z],r*3),this.age[r]=0,this.life[r]=1.1+Math.random()*1.1}}setScale(e){this.material.size=this.baseSize*e}update(e){const{pos:n,vel:i,col:r,age:s,life:o,seed:a}=this;for(let l=0;l<this.count;l++){if(s[l]>=o[l]){r[l*4+3]=0;continue}s[l]+=e;const c=l*3,u=l*4;i[c+1]+=.35*e,i[c]*=.985,i[c+1]*=.985,i[c+2]*=.985,n[c]+=i[c]*e,n[c+1]+=i[c+1]*e,n[c+2]+=i[c+2]*e;const h=s[l]/o[l],d=h<.12?h/.12:1-(h-.12)/.88,p=.65+.35*Math.sin(s[l]*18+a[l]),g=a[l]%1;r[u]=.86+.12*g,r[u+1]=.68+.2*g,r[u+2]=.32+.35*g,r[u+3]=Math.max(0,d*p*this.opacity)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}dispose(){var e;this.points.geometry.dispose(),(e=this.material.map)==null||e.dispose(),this.material.dispose()}}const nx=(t,e,n)=>Math.min(n,Math.max(e,t)),wn=t=>nx(t,0,1),Ug=(t,e,n)=>t+(e-t)*n;function uc(t,e,n,i){const r=3*t,s=3*(n-t)-r,o=1-r-s,a=3*e,l=3*(i-e)-a,c=1-a-l,u=p=>((o*p+s)*p+r)*p,h=p=>((c*p+l)*p+a)*p,d=p=>(3*o*p+2*s)*p+r;return p=>{if(p<=0)return 0;if(p>=1)return 1;let g=p;for(let f=0;f<8;f++){const v=u(g)-p;if(Math.abs(v)<1e-6)return h(g);const _=d(g);if(Math.abs(_)<1e-6)break;g-=v/_}let y=0,m=1;g=p;for(let f=0;f<40;f++){const v=u(g);if(Math.abs(v-p)<1e-6)break;v<p?y=g:m=g,g=(y+m)/2}return h(g)}}const gl=uc(.16,1,.3,1),Ul=uc(.45,0,.2,1);function kh(t,e=1){if(t<=0)return 0;if(t>=1)return 1;const n=t-1;return 1+(e+1)*n*n*n+e*n*n}const zh=28,Fg=Math.tan(Pc.degToRad(zh/2)),s2=new D(0,3,-.6),o2=[-2.8,2.8].flatMap(t=>[[t,0,2.2],[t,0,-2.2],[t,2.4,2.2],[t,2.4,-2.2],[t,6.67,-3.26],[t,6.31,-4.72],[t,2.04,-3.66]].map(([e,n,i])=>new D(e,n,i))),Og=0,Xu=Pc.degToRad(21),ju=new D(Math.sin(Og)*Math.cos(Xu),Math.sin(Xu),Math.cos(Og)*Math.cos(Xu)),kg=Pc.degToRad(19),zg=new D(0,Math.sin(kg),Math.cos(kg)),Bg=1.95,a2=0,Vg=3600;class l2{constructor(e,n,i,r){this.hooks=n,this.scene=new B_,this.camera=new on(zh,1,.5,600),this.probe=new on(zh,1,.5,600),this.dust=new r2,this.outer=new mn,this.inner=new mn,this.tracks=[],this.raf=0,this.last=performance.now(),this.w=1,this.h=1,this.phase="hidden",this.cleared=!0,this.slotPos=new D,this.slotScale=.2,this.floatAmp=.1,this.fly=0,this.flyScale=0,this.tilt=0,this.presentHers=0,this.presentHis=0,this.blend=0,this.openRect={left:0,top:0,width:0,height:0},this.warming=!1,this.disposed=!1,this.lidOpen=0,this.glowOpen=0,this.hover=0,this.hoverTarget=0,this.pressK=0,this.pulseStart=0,this.lastPulse=-1,this.emitDebt=0,this.glintStart=-1e9,this.nextGlint=0,this.intro={pos:new D,target:new D},this.final={pos:new D,target:new D},this.onResize=()=>this.resize(),this.raycaster=new qC,this.loop=c=>{var d;this.raf=requestAnimationFrame(this.loop);const u=Math.min(.05,(c-this.last)/1e3);this.last=c;for(const p of this.tracks){if(c<p.start)continue;const g=wn((c-p.start)/p.dur);p.step(p.ease(g)),g>=1&&(p.done=!0,(d=p.end)==null||d.call(p))}this.tracks=this.tracks.filter(p=>!p.done);const h=this.phase==="hidden"&&this.tracks.length===0;this.warming&&h||h&&this.cleared||(this.compose(c,u),this.applyCamera(),this.renderer.render(this.scene,this.camera),this.cleared=h)},this.motion=i?0:1,this.renderer=new cC({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.toneMapping=u_,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=rn,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=l_,this.pmrem=new Ph(this.renderer),this.scene.environment=this.pmrem.fromScene(new ZC,.04).texture,this.scene.environmentIntensity=.95;const s=new jC("#fffaf0","#d8c6a6",.6),o=new bg("#fff2dc",2.4);o.position.set(-4.5,11,7),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-7,o.shadow.camera.right=7,o.shadow.camera.top=7,o.shadow.camera.bottom=-7,o.shadow.camera.near=1,o.shadow.camera.far=30,o.shadow.bias=-4e-4,o.shadow.normalBias=.025,o.shadow.radius=5;const a=new bg("#ffe7c4",.9);a.position.set(6,5,-5),this.outer.add(o,o.target),o.target.position.set(0,1.5,0),this.scene.add(s,a,this.outer),this.box=i2(),this.box.setReveal(0),this.inner.add(this.box.group,this.dust.points),this.outer.add(this.inner,this.box.floor),this.glint=new H_(new Yd({map:ex(),transparent:!0,depthWrite:!1,blending:Hf,opacity:0}));const l=this.box.hers;l.stoneTop&&this.glint.position.copy(l.stoneTop),l.inner.add(this.glint),r.then(()=>{this.box.repaint(),this.cleared=!1}),this.resize(),window.addEventListener("resize",this.onResize),this.raf=requestAnimationFrame(this.loop),this.warmUp()}async warmUp(){this.warming=!0,this.box.setReveal(1),this.box.setLid(.6),this.box.setGlow(.5),this.applyCamera();try{await this.renderer.compileAsync(this.scene,this.camera)}catch{}this.disposed||(this.renderer.render(this.scene,this.camera),this.box.setFade(.5),this.renderer.render(this.scene,this.camera),this.box.setFade(1),this.phase==="hidden"&&this.tracks.length===0&&(this.box.setReveal(0),this.box.setLid(0),this.box.setGlow(0)),this.renderer.clear(),this.warming=!1,this.cleared=!1)}setReduced(e){this.motion=e?0:1}showBox(){this.phase==="hidden"&&(this.tracks=[],this.phase="floating",this.fly=this.flyScale=this.tilt=0,this.presentHers=this.presentHis=0,this.blend=0,this.lidOpen=0,this.glowOpen=0,this.dust.opacity=1,this.box.setFade(1),this.mapSlot(),this.add(0,this.dur(900),gl,e=>this.box.setReveal(e)),this.pulseStart=performance.now()+700,this.lastPulse=-1)}hideBox(){this.phase==="floating"&&(this.phase="hidden",this.tracks=[],this.add(0,this.dur(500),Ul,e=>{this.box.setReveal(1-e),this.dust.opacity=1-e},()=>{this.cleared=!1}))}hoverBox(e){this.hoverTarget=e?1:0}press(){this.add(0,200,e=>e,e=>{this.pressK=Math.sin(Math.PI*e)},()=>{this.pressK=0})}open(e){if(this.phase!=="floating")return;if(this.phase="opening",this.computePoses(),!this.motion){this.add(0,320,gl,i=>{this.fly=this.flyScale=1,this.blend=1,this.lidOpen=1,this.glowOpen=.2,this.presentHers=this.presentHis=1,this.box.setFade(i)},()=>{this.phase="open",e()});return}const n=uc(.2,.9,.25,1);this.add(60,560,n,i=>{this.fly=i,this.blend=i,this.tilt=Math.sin(Math.PI*i)*.08}),this.add(60,620,i=>kh(i,.45),i=>{this.flyScale=i}),this.add(140,520,i=>kh(i,.5),i=>{this.lidOpen=i,this.glowOpen=Math.sin(Math.PI*wn(i))*.95+.15*wn(i)}),this.add(260,1,i=>i,()=>{},()=>this.dust.emit(44,(i,r)=>this.openOrigin(i,r))),this.add(380,380,gl,i=>{this.presentHers=i}),this.add(440,380,gl,i=>{this.presentHis=i}),this.add(560,1,i=>i,()=>{},()=>{this.glintStart=performance.now()}),this.add(420,1,i=>i,()=>{},e),this.add(820,1,i=>i,()=>{},()=>{this.phase="open",this.nextGlint=performance.now()+2500})}openBoxRect(){return{...this.openRect}}close(e){if(this.phase!=="open")return;this.phase="closing",this.mapSlot();const n=this.glowOpen;this.add(0,this.dur(220),Ul,i=>{this.presentHers=this.presentHis=1-i}),this.add(this.motion?90:0,this.dur(360),Ul,i=>{this.lidOpen=1-i,this.glowOpen=n*(1-i)}),this.add(this.motion?180:0,this.dur(440),uc(.5,0,.2,1),i=>{this.fly=this.flyScale=1-i,this.blend=1-i},()=>{this.phase="floating",this.pulseStart=performance.now()+900,this.lastPulse=-1,e()})}dispose(){var e,n;this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),this.box.dispose(),this.dust.dispose(),(e=this.glint.material.map)==null||e.dispose(),this.glint.material.dispose(),(n=this.scene.environment)==null||n.dispose(),this.pmrem.dispose(),this.renderer.dispose()}dur(e){return this.motion?e:Math.min(e,300)}add(e,n,i,r,s){this.tracks.push({start:performance.now()+e,dur:n,ease:i,step:r,end:s})}seamOrigin(e,n){const i=Math.random()<.7;i?e.set((Math.random()-.5)*5,Po.HB+.06,Po.D/2-.05):e.set((Math.random()<.5?-1:1)*(Po.W/2-.05),Po.HB+.06,(Math.random()-.5)*3.6),n.set((Math.random()-.5)*.5,-.15+Math.random()*.45,i?.45+Math.random()*.55:0),i||(n.x=Math.sign(e.x)*(.35+Math.random()*.45))}openOrigin(e,n){e.set((Math.random()-.5)*4.4,2.2+Math.random()*.6,(Math.random()-.5)*2.6),n.set((Math.random()-.5)*.5,.7+Math.random()*.9,(Math.random()-.2)*.4)}resize(){const e=window.innerWidth,n=window.innerHeight;e<2||n<2||(this.w=e,this.h=n,this.renderer.setSize(e,n,!1),this.camera.aspect=this.probe.aspect=e/n,this.camera.updateProjectionMatrix(),this.probe.updateProjectionMatrix(),this.computePoses(),this.phase!=="hidden"&&this.mapSlot(),this.cleared=!1)}computePoses(){const{w:e,h:n}=this,i=this.hooks.getCardRect(),r=i&&i.bottom>0&&i.bottom<n*.6?i.bottom+10:n*.3,s=n-70,o=s-r,a=(r+s)/2,l=new D(0,1,0).addScaledVector(ju,-ju.y).normalize(),c=this.probe;let u=26,h=0;const d=new D;for(let p=0;p<6;p++){this.final.target.copy(s2).addScaledVector(l,-h),this.final.pos.copy(this.final.target).addScaledVector(ju,u),c.position.copy(this.final.pos),c.lookAt(this.final.target),c.updateMatrixWorld();let g=1/0,y=-1/0,m=1/0,f=-1/0;for(const v of o2){d.copy(v).project(c);const _=(d.x+1)/2*e,x=(1-d.y)/2*n;g=Math.min(g,_),y=Math.max(y,_),m=Math.min(m,x),f=Math.max(f,x)}this.openRect={left:g,top:m,width:y-g,height:f-m},u*=Math.max((f-m)/(o*.95),(y-g)/(e*.9)),h-=(a-(m+f)/2)/(n/(2*u*Fg))}this.intro.target.set(0,Bg,0),this.intro.pos.copy(this.intro.target).addScaledVector(zg,u*1.6)}mapSlot(){const e=this.hooks.getBoxSlot();if(!e||e.width===0)return;const n=this.probe;n.position.copy(this.intro.pos),n.lookAt(this.intro.target),n.updateMatrixWorld();const i=new oe((e.left+e.width/2)/this.w*2-1,-((e.top+e.height/2)/this.h*2-1));this.raycaster.setFromCamera(i,n);const r=new Vi().setFromNormalAndCoplanarPoint(zg,this.intro.target),s=new D;if(!this.raycaster.ray.intersectPlane(r,s))return;const o=this.h/(2*s.distanceTo(n.position)*Fg);this.slotScale=Math.min(e.width*.86/(6.9*o),e.height*.92/(5*o)),s.y-=Bg*this.slotScale,this.slotPos.copy(s),this.floatAmp=7/o/this.slotScale}applyCamera(){const e=this.blend;this.camera.position.lerpVectors(this.intro.pos,this.final.pos,e),this.camera.lookAt(new D().lerpVectors(this.intro.target,this.final.target,e))}compose(e,n){const i=e/1e3,r=Math.PI*2,s=this.motion,o=1-this.fly;this.hover+=(this.hoverTarget-this.hover)*.12;let a=0,l=0,c=0;if(this.phase==="floating"&&e>this.pulseStart){const y=Math.floor((e-this.pulseStart)/Vg),m=(e-this.pulseStart)%Vg/1e3;s?(a=m<1.1?Math.sin(Math.PI*m/1.1)**2:0,l=m>.05&&m<.7?Math.sin(Math.PI*(m-.05)/.65):0,c=m):a=.35*(.5+.5*Math.sin(r*m/3.6)),y!==this.lastPulse&&m>.3&&(this.lastPulse=y,this.dust.emit(s?22:6,(f,v)=>this.seamOrigin(f,v)))}const u=this.phase==="floating"?(a>.25?16*s:0)+.8:this.phase==="open"?5*s+1:0;for(this.emitDebt+=u*n;this.emitDebt>=1;)this.emitDebt-=1,this.dust.emit(1,(y,m)=>this.lidOpen>.5?this.openOrigin(y,m):this.seamOrigin(y,m));this.outer.position.lerpVectors(this.slotPos,new D,this.fly),this.outer.position.y+=Math.sin(Math.PI*this.fly)*.6*this.slotScale;const h=Ug(this.slotScale,1,this.flyScale);this.outer.scale.setScalar(h),this.dust.setScale(h),this.box.setPresent(this.presentHers,this.presentHis);const d=Math.sin(i*r/3.6)*s;this.inner.position.set(Math.sin(c*r*15)*.05*l,d*this.floatAmp*o,0),this.inner.rotation.set(this.tilt,Ug(0,a2+Math.sin(i*r/8)*.05*s,o),(Math.sin(c*r*11)*.045*l+Math.sin(i*r/10)*.02*s)*o);const p=1+.03*this.hover*o;this.inner.scale.set(p*(1+.03*this.pressK),p*(1-.07*this.pressK),p*(1+.03*this.pressK)),this.box.setLid(this.lidOpen+a*.06*(1-this.lidOpen)),this.box.setGlow(Math.max(this.glowOpen,(a*.95+.06)*o*(this.phase==="hidden"?0:1))),this.dust.update(n),this.phase==="open"&&s&&e>this.nextGlint&&(this.glintStart=e,this.nextGlint=e+4500+Math.random()*3e3);const g=Math.sin(Math.PI*wn((e-this.glintStart)/750));this.glint.material.opacity=g*.9*wn(this.lidOpen*1.5),this.glint.scale.setScalar(.35+.35*g),this.scene.environmentRotation.y=i*.06*s}}const c2=pe.forwardRef(function({reduced:e,getBoxSlot:n,getCardRect:i,onUnavailable:r},s){const o=pe.useRef(null),a=pe.useRef(null),l=pe.useRef({getBoxSlot:n,getCardRect:i});l.current={getBoxSlot:n,getCardRect:i};const c=pe.useRef(e),u=pe.useRef(r);return u.current=r,pe.useEffect(()=>{let h;try{h=new l2(o.current,{getBoxSlot:()=>l.current.getBoxSlot(),getCardRect:()=>l.current.getCardRect()},c.current,r_())}catch{u.current();return}return a.current=h,()=>{h.dispose(),a.current=null}},[]),pe.useEffect(()=>{var h;(h=a.current)==null||h.setReduced(e)},[e]),pe.useImperativeHandle(s,()=>({showBox:()=>{var h;return(h=a.current)==null?void 0:h.showBox()},hideBox:()=>{var h;return(h=a.current)==null?void 0:h.hideBox()},open:h=>a.current?a.current.open(h):h(),close:h=>a.current?a.current.close(h):h(),press:()=>{var h;return(h=a.current)==null?void 0:h.press()},hover:h=>{var d;return(d=a.current)==null?void 0:d.hoverBox(h)},openBoxRect:()=>{var h;return((h=a.current)==null?void 0:h.openBoxRect())??null}}),[]),he.jsx("canvas",{ref:o,className:"jewelry-canvas","aria-hidden":"true"})}),rr={monogram:"VM",names:{first:"Vishwas",second:"Madhumitha"},hint:"A story begins here",boxHint:"Tap to open",event:{title:"Reception Party",date:"29/11/26",isoDate:"2026-11-29",invite:"You are warmly invited to the",dayLine:"Sunday, 29 November 2026"}},sr={name:"Subz Banquet Hall",address:"3rd Floor, Cosmopolitan Club, 22nd Cross Rd, Jayanagar 3rd Block, Bengaluru, Karnataka 560011",mapsDestination:"Subz Banquet Hall, Cosmopolitan Club, 22nd Cross Rd, Jayanagar, Bengaluru 560011",mapsLink:"https://maps.google.com/?cid=13298904705969542961"};function u2(){return sr.mapsDestination.trim()!==""&&!sr.name.startsWith("[")}function f2(){return`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(sr.mapsDestination)}`}const h2=780,Yu=70,d2=620,ix=[150,110,50],p2=ix;let Hg=null;function $u(t,e){Hg??(Hg=document.createElement("canvas"));const n=Hg.getContext("2d");return n.font=`${e}px "Great Vibes"`,n.measureText(t).width}function Gg(t,e,n){if(e>=1){t.style.maskImage="none",t.style.webkitMaskImage="none";return}const i=Math.max(14,n*.12),r=e*(n+i),s=`linear-gradient(90deg, #000 ${r-i}px, transparent ${r}px)`;t.style.maskImage=s,t.style.webkitMaskImage=s}function m2({fontsReady:t,reduced:e,open:n,interactive:i,onRequestOpen:r,onSettled:s}){const{first:o,second:a}=rr.names,l=pe.useRef(null),c=pe.useRef(null),u=pe.useRef(null),h=pe.useRef(null),d=pe.useRef(null),p=pe.useRef(null),g=pe.useRef(null),y=pe.useRef(null),[m,f]=pe.useState(null),v=pe.useRef(0),_=pe.useRef(0),x=pe.useRef(null),L=pe.useRef(0),T=pe.useRef(s);T.current=s;const C=pe.useCallback(()=>{if(window.innerWidth<200)return;const R=Math.min(window.innerWidth-40,1040),I=$u(`${o} ${a}`,100)/100,U=Math.max($u(o,100),$u(a,100))/100;let z=Math.min(112,R*.88/I),W=!1;z<58&&(W=!0,z=Math.min(98,R*.84/U)),z=Math.round(z*10)/10,f(V=>V&&V.fs===z&&V.stacked===W?V:{fs:z,stacked:W})},[o,a]);pe.useEffect(()=>{if(!t)return;C();let R=0;const I=()=>{clearTimeout(R),R=window.setTimeout(C,120)};return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I),clearTimeout(R)}},[t,C]);const P=pe.useCallback(R=>{const I=x.current,U=c.current,z=u.current,W=d.current,V=h.current,$=p.current;if(!I||!U||!z||!W||!V||!$)return;U.style.transform=`scale(${(I.s0+(1-I.s0)*R)*(1-_.current)})`;const N=1-(R<1?Math.min(1,R/.86):R),j=1-R,Z=`translate3d(${I.dV.x*N}px, ${I.dV.y*N}px, 0)`,ie=`translate3d(${I.dM.x*j}px, ${I.dM.y*j}px, 0)`;z.style.transform=Z,V.style.transform=Z,W.style.transform=ie,$.style.transform=ie,Gg(V,wn(R),I.w1),Gg($,wn((R-.05)/.95),I.w2);const ve=wn(R),ke=ix.map((X,q)=>Math.round(X+(p2[q]-X)*ve));if(z.style.color=W.style.color=`rgb(${ke.join(",")})`,z.style.textShadow=W.style.textShadow=`0 1px 0 rgba(255,255,255,.65), 0 0 22px rgba(182,154,101,${(.32*(1-ve)).toFixed(3)})`,y.current){const X=wn((R-.5)/.5);y.current.style.transform=`scaleX(${X})`,y.current.style.opacity=String(X*.9)}g.current&&(g.current.style.transform=`translateY(${I.hintLift}px)`)},[]),w=pe.useCallback(()=>{const R=c.current,I=u.current,U=d.current,z=h.current,W=p.current;if(!R||!I||!U||!z||!W||!m)return;const V=R.offsetWidth,$=R.offsetHeight,N={x:I.offsetLeft,y:I.offsetTop,w:I.offsetWidth,h:I.offsetHeight},j={x:U.offsetLeft,y:U.offsetTop,w:U.offsetWidth,h:U.offsetHeight},Z=m.fs*.15,ie=N.w+j.w-Z,ve=V/2-ie/2,ke=$/2-N.h/2,X=nx(Math.min(window.innerWidth*.56,330)/ie,1,2.2);x.current={dV:{x:ve-N.x,y:ke-N.y},dM:{x:ve+N.w-Z-j.x,y:ke-j.y},s0:X,w1:z.offsetWidth,w2:W.offsetWidth,hintLift:Math.max(0,(N.h*.78*X-$)/2)}},[m]);pe.useLayoutEffect(()=>{m&&(w(),P(v.current))},[m,w,P]);const S=t&&m!==null;return pe.useEffect(()=>{if(!S)return;const R=n?1:0;if(Math.abs(v.current-R)<.001)return;if(cancelAnimationFrame(L.current),e){const V=l.current;V.style.transition="opacity 280ms ease",V.style.opacity="0";const $=window.setTimeout(()=>{v.current=R,P(R),V.style.opacity="1"},290),N=window.setTimeout(()=>T.current(n),600);return()=>{clearTimeout($),clearTimeout(N)}}const I=v.current,U=performance.now(),z=n?h2:d2,W=V=>{const $=V-U;if(n){_.current=Math.sin(Math.PI*wn($/(Yu*2)))*.04;const N=wn(($-Yu)/(z-Yu));v.current=I+(1-I)*kh(N,1.1)}else _.current=0,v.current=I*(1-Ul(wn($/z)));P(v.current),$<z?L.current=requestAnimationFrame(W):(_.current=0,v.current=R,P(R),T.current(n))};return L.current=requestAnimationFrame(W),()=>cancelAnimationFrame(L.current)},[n,S,e,P]),he.jsxs("div",{className:`names ${S?"is-ready":""} ${n?"is-open":""}`,ref:l,children:[he.jsx("h1",{className:"sr-only",children:`${o} ${a}`}),he.jsxs("span",{className:"names__frame","aria-hidden":"true",children:[he.jsxs("span",{ref:c,className:`names__line ${m!=null&&m.stacked?"is-stacked":""}`,style:{fontSize:m?`${m.fs}px`:void 0},children:[he.jsxs("span",{className:"names__word",children:[he.jsx("span",{ref:u,className:"names__glyph",children:o[0]}),he.jsx("span",{ref:h,className:"names__rest",children:o.slice(1)})]}),he.jsx("span",{className:"names__space"}),he.jsxs("span",{className:"names__word",children:[he.jsx("span",{ref:d,className:"names__glyph",children:a[0]}),he.jsx("span",{ref:p,className:"names__rest",children:a.slice(1)})]})]}),he.jsx("span",{ref:y,className:"names__rule"})]}),i&&he.jsx("button",{type:"button",className:"names__trigger",onClick:r,disabled:!S,"aria-label":`Open the ${rr.monogram} monogram`}),he.jsx("p",{ref:g,className:"names__hint","aria-hidden":"true",children:rr.hint})]})}const g2=pe.forwardRef(function({visible:e,fallback:n,onPress:i,onOpen:r,onHover:s},o){return he.jsxs("div",{className:`box-slot ${e?"is-visible":""}`,children:[he.jsx("button",{ref:o,type:"button",className:"box-slot__button","aria-label":"Open the ring box to see the invitation",disabled:!e,onPointerDown:i,onPointerEnter:()=>s(!0),onPointerLeave:()=>s(!1),onFocus:()=>s(!0),onBlur:()=>s(!1),onClick:a=>{a.detail===0&&i(),r()},children:n&&he.jsxs("svg",{className:"box-slot__fallback",viewBox:"0 0 120 90","aria-hidden":"true",children:[he.jsx("rect",{x:"14",y:"40",width:"92",height:"40",rx:"8",fill:"#f4ecdf",stroke:"#b69a65",strokeWidth:"1"}),he.jsx("rect",{x:"12",y:"22",width:"96",height:"22",rx:"9",fill:"#f7f0e4",stroke:"#b69a65",strokeWidth:"1"}),he.jsx("rect",{x:"54",y:"40",width:"12",height:"5",fill:"#c9aa6b"})]})}),he.jsx("span",{className:"box-slot__hint","aria-hidden":"true",children:rr.boxHint})]})});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=pe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>pe.createElement("svg",{ref:l,..._2,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:rx("lucide",r),...a},[...o.map(([c,u])=>pe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=(t,e)=>{const n=pe.forwardRef(({className:i,...r},s)=>pe.createElement(x2,{ref:s,iconNode:e,className:rx(`lucide-${v2(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=no("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=no("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=no("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=no("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=no("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=no("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function w2(t){const[e,n,i]=t.split("-").map(Number),r=new Date;return r.setHours(0,0,0,0),Math.round((new Date(e,n-1,i).getTime()-r.getTime())/864e5)}function T2(){const{title:t,isoDate:e}=rr.event,n=e.replace(/-/g,""),[i,r,s]=e.split("-").map(Number),o=new Date(i,r-1,s+1),a=`${o.getFullYear()}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getDate()).padStart(2,"0")}`;return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:`${t} · ${rr.names.first} & ${rr.names.second}`,dates:`${n}/${a}`,location:`${sr.name}, ${sr.address}`}).toString()}`}function A2(){const t=navigator.userAgent;return/iPhone|iPad|iPod|Macintosh/.test(t)&&!/Android/.test(t)?{href:"./reception.ics",download:"Vishwas-Madhumitha-Reception.ics"}:{href:T2(),target:"_blank",rel:"noopener noreferrer"}}const C2=pe.forwardRef(function({visible:e,onVenue:n},i){const{title:r,date:s,isoDate:o,invite:a,dayLine:l}=rr.event,c=pe.useMemo(()=>{const p=w2(o);return p>1?`${p} days to go`:p===1?"Tomorrow":p===0?"Today":"Celebrated with love"},[o]),[u,h,d]=s.split("/");return he.jsxs("section",{ref:i,className:"reception-card glass","data-visible":e,"aria-hidden":!e,"aria-labelledby":"reception-title",children:[he.jsx("p",{className:"reception-card__eyebrow",children:a}),he.jsx("h2",{id:"reception-title",className:"reception-card__title",children:r}),he.jsx("p",{className:"reception-card__date",children:he.jsxs("time",{dateTime:o,"aria-label":l,children:[u,he.jsx("span",{children:"/"}),h,he.jsx("span",{children:"/"}),d]})}),he.jsx("p",{className:"reception-card__day",children:l}),he.jsxs("svg",{className:"reception-card__flourish",viewBox:"0 0 120 14","aria-hidden":"true",children:[he.jsx("path",{d:"M2 7 H50 M70 7 H118",stroke:"currentColor",strokeWidth:".8",strokeLinecap:"round"}),he.jsx("path",{d:"M60 2 l5 5 -5 5 -5 -5z",fill:"none",stroke:"currentColor",strokeWidth:".9"}),he.jsx("circle",{cx:"60",cy:"7",r:"1.4",fill:"currentColor"})]}),he.jsx("p",{className:"reception-card__countdown",children:c}),he.jsxs("div",{className:"reception-card__actions",children:[he.jsxs("a",{className:"reception-card__pill",tabIndex:e?0:-1,...A2(),children:[he.jsx(y2,{size:15,strokeWidth:1.4,"aria-hidden":"true"}),"Add to calendar"]}),he.jsxs("button",{type:"button",className:"reception-card__pill",onClick:n,tabIndex:e?0:-1,children:[he.jsx(tp,{size:15,strokeWidth:1.4,"aria-hidden":"true"}),"Venue"]})]})]})}),R2=pe.forwardRef(function({open:e,onToggle:n},i){return he.jsx("button",{ref:i,type:"button",className:"location-toggle glass","aria-label":"View reception location","aria-expanded":e,"aria-controls":"location-card",onClick:n,children:he.jsx(tp,{size:20,strokeWidth:1.4,"aria-hidden":"true"})})});function P2({open:t,onClose:e,toggleRef:n}){const i=pe.useRef(null),r=pe.useRef(null),s=u2();return pe.useEffect(()=>{var l;if(!t)return;(l=r.current)==null||l.focus({preventScroll:!0});const o=c=>{var u;c.key==="Escape"&&(e(),(u=n.current)==null||u.focus())},a=c=>{var h,d;const u=c.target;(h=i.current)!=null&&h.contains(u)||(d=n.current)!=null&&d.contains(u)||e()};return document.addEventListener("keydown",o),document.addEventListener("pointerdown",a),()=>{document.removeEventListener("keydown",o),document.removeEventListener("pointerdown",a)}},[t,e,n]),he.jsxs("section",{ref:i,id:"location-card",className:"location-card glass","data-open":t,"aria-hidden":!t,"aria-labelledby":"location-name",role:"dialog",children:[he.jsx("button",{ref:r,type:"button",className:"location-card__close glass__abs",onClick:e,"aria-label":"Close location",children:he.jsx(E2,{size:16,strokeWidth:1.5,"aria-hidden":"true"})}),he.jsx("p",{className:"location-card__label",children:"Reception venue"}),he.jsx("h2",{id:"location-name",className:"location-card__name",children:sr.name}),he.jsx("p",{className:"location-card__address",children:sr.address}),s?he.jsxs("div",{className:"location-card__actions",children:[he.jsxs("a",{className:"location-card__action",href:f2(),target:"_blank",rel:"noopener noreferrer",children:[he.jsx(Wg,{size:15,strokeWidth:1.5,"aria-hidden":"true"}),"Get Directions"]}),he.jsxs("a",{className:"location-card__action is-quiet",href:sr.mapsLink,target:"_blank",rel:"noopener noreferrer",children:[he.jsx(tp,{size:15,strokeWidth:1.5,"aria-hidden":"true"}),"Open in Maps"]})]}):he.jsxs(he.Fragment,{children:[he.jsxs("button",{type:"button",className:"location-card__action",disabled:!0,"aria-describedby":"location-note",children:[he.jsx(Wg,{size:15,strokeWidth:1.5,"aria-hidden":"true"}),"Get Directions"]}),he.jsx("p",{id:"location-note",className:"location-card__note",children:"Directions will be available once the venue is confirmed."})]})]})}function b2(){const[t,e]=pe.useState(VS);return he.jsx("button",{type:"button",className:"sound-toggle glass","aria-pressed":t,"aria-label":t?"Mute touch sounds":"Turn on touch sounds",onClick:()=>{const n=!t;e(n),HS(n),ds(),n&&wr("tap")},children:t?he.jsx(S2,{size:18,strokeWidth:1.4,"aria-hidden":"true"}):he.jsx(M2,{size:18,strokeWidth:1.4,"aria-hidden":"true"})})}function L2(){const t=zS(),e=kS(),[n,i]=pe.useReducer(US,"intro"),[r,s]=pe.useState(!1),[o,a]=pe.useState(!1),[l,c]=pe.useState(!0),u=pe.useRef(null),h=pe.useRef(null),d=pe.useRef(null),p=pe.useRef(null),g=pe.useRef(n);g.current=n;const y=pe.useRef(performance.now()),m=pe.useCallback(()=>{var I;return((I=h.current)==null?void 0:I.getBoundingClientRect())??null},[]),f=pe.useCallback(()=>{var I;return((I=d.current)==null?void 0:I.getBoundingClientRect())??null},[]);pe.useEffect(()=>{const I=()=>{y.current=performance.now()},U=W=>{W.pointerType==="mouse"&&I()},z={passive:!0};return window.addEventListener("pointerdown",I,z),window.addEventListener("keydown",I),window.addEventListener("wheel",I,z),window.addEventListener("pointermove",U,z),()=>{window.removeEventListener("pointerdown",I),window.removeEventListener("keydown",I),window.removeEventListener("wheel",I),window.removeEventListener("pointermove",U)}},[]),pe.useEffect(()=>{if(n!=="names"||o)return;const I=window.setTimeout(()=>{var U;(U=u.current)==null||U.showBox(),a(!0)},t?0:160);return()=>clearTimeout(I)},[n,o,t]);const v=pe.useCallback(()=>{var I;g.current==="invitation"&&(ds(),wr("close"),i({type:"CLOSE"}),l?(I=u.current)==null||I.close(()=>i({type:"CLOSED"})):window.setTimeout(()=>i({type:"CLOSED"}),300))},[l]);pe.useEffect(()=>{if(n!=="names"&&n!=="invitation"||r)return;y.current=performance.now();const I=FS[n],U=window.setInterval(()=>{var z;if(document.hidden){y.current=performance.now();return}performance.now()-y.current<I||(clearInterval(U),g.current==="names"?(i({type:"CONTRACT"}),(z=u.current)==null||z.hideBox(),a(!1),wr("unpluck")):v())},250);return()=>clearInterval(U)},[n,r,v]);const[_,x]=pe.useState(null);pe.useEffect(()=>{if(n!=="invitation"){x(null);return}const I=()=>{var U;return x(((U=u.current)==null?void 0:U.openBoxRect())??null)};return I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[n]);const L=pe.useCallback(()=>{g.current==="intro"&&(ds(),wr("pluck"),i({type:"EXPAND"}))},[]),T=pe.useCallback(I=>{i({type:I?"EXPANDED":"CONTRACTED"})},[]),C=pe.useCallback(()=>{var I;if(g.current==="names"){if(ds(),wr("open"),i({type:"OPEN"}),!l){window.setTimeout(()=>i({type:"OPENED"}),t?120:700);return}(I=u.current)==null||I.open(()=>i({type:"OPENED"}))}},[l,t]),P=pe.useCallback(()=>{ds(),wr("tap"),s(I=>!I)},[]),w=pe.useCallback(()=>s(!1),[]),S=n!=="intro"&&n!=="contracting",R=n==="opening"||n==="invitation";return he.jsxs("div",{className:"invite","data-phase":n,children:[he.jsx("div",{className:"invite__paper","aria-hidden":"true"}),he.jsx(qS,{receded:R,reduced:t}),he.jsx("div",{className:"invite__veil","aria-hidden":"true"}),l&&he.jsx(c2,{ref:u,reduced:t,getBoxSlot:m,getCardRect:f,onUnavailable:()=>c(!1)}),he.jsx("main",{className:"invite__main",children:he.jsxs("div",{className:`invite__hero ${R?"is-receded":""}`,children:[he.jsx(m2,{fontsReady:e,reduced:t,open:S,interactive:n==="intro",onRequestOpen:L,onSettled:T}),he.jsx(g2,{ref:h,visible:o&&n==="names",fallback:!l,onPress:()=>{var I;return(I=u.current)==null?void 0:I.press()},onOpen:C,onHover:I=>{var U;return(U=u.current)==null?void 0:U.hover(I)}})]})}),he.jsx(C2,{ref:d,visible:n==="invitation",onVenue:()=>{ds(),wr("tap"),s(!0)}}),n==="invitation"&&_&&he.jsx("button",{type:"button",className:"invite__close-box","aria-label":"Close the ring box",style:{left:_.left,top:_.top,width:_.width,height:_.height},onClick:v}),he.jsx(b2,{}),he.jsx(R2,{ref:p,open:r,onToggle:P}),he.jsx(P2,{open:r,onClose:w,toggleRef:p})]})}i_(document.getElementById("root")).render(he.jsx(pe.StrictMode,{children:he.jsx(L2,{})}));
