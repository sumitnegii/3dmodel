(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function mx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sh={exports:{}},ne={};var Kg;function gx(){if(Kg)return ne;Kg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function v(N,nt,St){this.props=N,this.context=nt,this.refs=M,this.updater=St||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=v.prototype;function U(N,nt,St){this.props=N,this.context=nt,this.refs=M,this.updater=St||E}var C=U.prototype=new O;C.constructor=U,R(C,v.prototype),C.isPureReactComponent=!0;var k=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function D(N,nt,St){var j=St.ref;return{$$typeof:r,type:N,key:nt,ref:j!==void 0?j:null,props:St}}function w(N,nt){return D(N.type,nt,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function rt(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return nt[St]})}var at=/\/+/g;function ft(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?rt(""+N.key):nt.toString(36)}function pt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,nt,St,j,ct){var Et=typeof N;(Et==="undefined"||Et==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(Et){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case r:case t:yt=!0;break;case g:return yt=N._init,P(yt(N._payload),nt,St,j,ct)}}if(yt)return ct=ct(N),yt=j===""?"."+ft(N,0):j,k(ct)?(St="",yt!=null&&(St=yt.replace(at,"$&/")+"/"),P(ct,nt,St,"",function(ie){return ie})):ct!=null&&(F(ct)&&(ct=w(ct,St+(ct.key==null||N&&N.key===ct.key?"":(""+ct.key).replace(at,"$&/")+"/")+yt)),nt.push(ct)),1;yt=0;var Vt=j===""?".":j+":";if(k(N))for(var Ht=0;Ht<N.length;Ht++)j=N[Ht],Et=Vt+ft(j,Ht),yt+=P(j,nt,St,Et,ct);else if(Ht=x(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(j=N.next()).done;)j=j.value,Et=Vt+ft(j,Ht++),yt+=P(j,nt,St,Et,ct);else if(Et==="object"){if(typeof N.then=="function")return P(pt(N),nt,St,j,ct);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function Q(N,nt,St){if(N==null)return N;var j=[],ct=0;return P(N,j,"","",function(Et){return nt.call(St,Et,ct++)}),j}function K(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},bt={map:Q,forEach:function(N,nt,St){Q(N,function(){nt.apply(this,arguments)},St)},count:function(N){var nt=0;return Q(N,function(){nt++}),nt},toArray:function(N){return Q(N,function(nt){return nt})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ne.Activity=_,ne.Children=bt,ne.Component=v,ne.Fragment=n,ne.Profiler=l,ne.PureComponent=U,ne.StrictMode=a,ne.Suspense=p,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ne.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},ne.cache=function(N){return function(){return N.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(N,nt,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var j=R({},N.props),ct=N.key;if(nt!=null)for(Et in nt.key!==void 0&&(ct=""+nt.key),nt)!X.call(nt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&nt.ref===void 0||(j[Et]=nt[Et]);var Et=arguments.length-2;if(Et===1)j.children=St;else if(1<Et){for(var yt=Array(Et),Vt=0;Vt<Et;Vt++)yt[Vt]=arguments[Vt+2];j.children=yt}return D(N.type,ct,j)},ne.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ne.createElement=function(N,nt,St){var j,ct={},Et=null;if(nt!=null)for(j in nt.key!==void 0&&(Et=""+nt.key),nt)X.call(nt,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ct[j]=nt[j]);var yt=arguments.length-2;if(yt===1)ct.children=St;else if(1<yt){for(var Vt=Array(yt),Ht=0;Ht<yt;Ht++)Vt[Ht]=arguments[Ht+2];ct.children=Vt}if(N&&N.defaultProps)for(j in yt=N.defaultProps,yt)ct[j]===void 0&&(ct[j]=yt[j]);return D(N,Et,ct)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(N){return{$$typeof:h,render:N}},ne.isValidElement=F,ne.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},ne.memo=function(N,nt){return{$$typeof:m,type:N,compare:nt===void 0?null:nt}},ne.startTransition=function(N){var nt=z.T,St={};z.T=St;try{var j=N(),ct=z.S;ct!==null&&ct(St,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(B,xt)}catch(Et){xt(Et)}finally{nt!==null&&St.types!==null&&(nt.types=St.types),z.T=nt}},ne.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ne.use=function(N){return z.H.use(N)},ne.useActionState=function(N,nt,St){return z.H.useActionState(N,nt,St)},ne.useCallback=function(N,nt){return z.H.useCallback(N,nt)},ne.useContext=function(N){return z.H.useContext(N)},ne.useDebugValue=function(){},ne.useDeferredValue=function(N,nt){return z.H.useDeferredValue(N,nt)},ne.useEffect=function(N,nt){return z.H.useEffect(N,nt)},ne.useEffectEvent=function(N){return z.H.useEffectEvent(N)},ne.useId=function(){return z.H.useId()},ne.useImperativeHandle=function(N,nt,St){return z.H.useImperativeHandle(N,nt,St)},ne.useInsertionEffect=function(N,nt){return z.H.useInsertionEffect(N,nt)},ne.useLayoutEffect=function(N,nt){return z.H.useLayoutEffect(N,nt)},ne.useMemo=function(N,nt){return z.H.useMemo(N,nt)},ne.useOptimistic=function(N,nt){return z.H.useOptimistic(N,nt)},ne.useReducer=function(N,nt,St){return z.H.useReducer(N,nt,St)},ne.useRef=function(N){return z.H.useRef(N)},ne.useState=function(N){return z.H.useState(N)},ne.useSyncExternalStore=function(N,nt,St){return z.H.useSyncExternalStore(N,nt,St)},ne.useTransition=function(){return z.H.useTransition()},ne.version="19.2.6",ne}var Qg;function Kd(){return Qg||(Qg=1,Sh.exports=gx()),Sh.exports}var Br=Kd();const Di=mx(Br);var xh={exports:{}},Zo={},Mh={exports:{}},Eh={};var Jg;function _x(){return Jg||(Jg=1,(function(r){function t(P,Q){var K=P.length;P.push(Q);t:for(;0<K;){var xt=K-1>>>1,bt=P[xt];if(0<l(bt,Q))P[xt]=Q,P[K]=bt,K=xt;else break t}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var Q=P[0],K=P.pop();if(K!==Q){P[0]=K;t:for(var xt=0,bt=P.length,N=bt>>>1;xt<N;){var nt=2*(xt+1)-1,St=P[nt],j=nt+1,ct=P[j];if(0>l(St,K))j<bt&&0>l(ct,St)?(P[xt]=ct,P[j]=K,xt=j):(P[xt]=St,P[nt]=K,xt=nt);else if(j<bt&&0>l(ct,K))P[xt]=ct,P[j]=K,xt=j;else break t}}return Q}function l(P,Q){var K=P.sortIndex-Q.sortIndex;return K!==0?K:P.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var p=[],m=[],g=1,_=null,y=3,x=!1,E=!1,R=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var Q=n(m);Q!==null;){if(Q.callback===null)a(m);else if(Q.startTime<=P)a(m),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=n(m)}}function k(P){if(R=!1,C(P),!E)if(n(p)!==null)E=!0,B||(B=!0,rt());else{var Q=n(m);Q!==null&&pt(k,Q.startTime-P)}}var B=!1,z=-1,X=5,D=-1;function w(){return M?!0:!(r.unstable_now()-D<X)}function F(){if(M=!1,B){var P=r.unstable_now();D=P;var Q=!0;try{t:{E=!1,R&&(R=!1,O(z),z=-1),x=!0;var K=y;try{e:{for(C(P),_=n(p);_!==null&&!(_.expirationTime>P&&w());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,y=_.priorityLevel;var bt=xt(_.expirationTime<=P);if(P=r.unstable_now(),typeof bt=="function"){_.callback=bt,C(P),Q=!0;break e}_===n(p)&&a(p),C(P)}else a(p);_=n(p)}if(_!==null)Q=!0;else{var N=n(m);N!==null&&pt(k,N.startTime-P),Q=!1}}break t}finally{_=null,y=K,x=!1}Q=void 0}}finally{Q?rt():B=!1}}}var rt;if(typeof U=="function")rt=function(){U(F)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ft=at.port2;at.port1.onmessage=F,rt=function(){ft.postMessage(null)}}else rt=function(){v(F,0)};function pt(P,Q){z=v(function(){P(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(P){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var K=y;y=Q;try{return P()}finally{y=K}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var K=y;y=P;try{return Q()}finally{y=K}},r.unstable_scheduleCallback=function(P,Q,K){var xt=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xt+K:xt):K=xt,P){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=K+bt,P={id:g++,callback:Q,priorityLevel:P,startTime:K,expirationTime:bt,sortIndex:-1},K>xt?(P.sortIndex=K,t(m,P),n(p)===null&&P===n(m)&&(R?(O(z),z=-1):R=!0,pt(k,K-xt))):(P.sortIndex=bt,t(p,P),E||x||(E=!0,B||(B=!0,rt()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var Q=y;return function(){var K=y;y=Q;try{return P.apply(this,arguments)}finally{y=K}}}})(Eh)),Eh}var $g;function vx(){return $g||($g=1,Mh.exports=_x()),Mh.exports}var bh={exports:{}},Nn={};var t_;function yx(){if(t_)return Nn;t_=1;var r=Kd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Nn.flushSync=function(p){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=g,a.d.f()}},Nn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Nn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Nn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:y,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Nn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Nn.requestFormReset=function(p){a.d.r(p)},Nn.unstable_batchedUpdates=function(p,m){return p(m)},Nn.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},Nn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Nn.version="19.2.6",Nn}var e_;function Sx(){if(e_)return bh.exports;e_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bh.exports=yx(),bh.exports}var n_;function xx(){if(n_)return Zo;n_=1;var r=vx(),t=Kd(),n=Sx();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(o=f.return,o!==null){s=o;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return p(f),e;if(d===o)return p(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=f,o=d;else{for(var S=!1,b=f.child;b;){if(b===s){S=!0,s=f,o=d;break}if(b===o){S=!0,o=f,s=d;break}b=b.sibling}if(!S){for(b=d.child;b;){if(b===s){S=!0,s=d,o=f;break}if(b===o){S=!0,o=d,s=f;break}b=b.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:ft(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return ft(e(i))}catch{}}return null}var pt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},xt=[],bt=-1;function N(e){return{current:e}}function nt(e){0>bt||(e.current=xt[bt],xt[bt]=null,bt--)}function St(e,i){bt++,xt[bt]=e.current,e.current=i}var j=N(null),ct=N(null),Et=N(null),yt=N(null);function Vt(e,i){switch(St(Et,i),St(ct,e),St(j,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?yg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=yg(i),e=Sg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(j),St(j,e)}function Ht(){nt(j),nt(ct),nt(Et)}function ie(e){e.memoizedState!==null&&St(yt,e);var i=j.current,s=Sg(i,e.type);i!==s&&(St(ct,e),St(j,s))}function ze(e){ct.current===e&&(nt(j),nt(ct)),yt.current===e&&(nt(yt),Xo._currentValue=K)}var de,Ke;function H(e){if(de===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);de=i&&i[1]||"",Ke=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+e+Ke}var Un=!1;function he(e,i){if(!e||Un)return"";Un=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ot){tt=ot}e.call(gt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],b=d[1];if(S&&b){var I=S.split(`
`),$=b.split(`
`);for(f=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(o===I.length||f===$.length)for(o=I.length-1,f=$.length-1;1<=o&&0<=f&&I[o]!==$[f];)f--;for(;1<=o&&0<=f;o--,f--)if(I[o]!==$[f]){if(o!==1||f!==1)do if(o--,f--,0>f||I[o]!==$[f]){var ut=`
`+I[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=f);break}}}finally{Un=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?H(s):""}function ye(e,i){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==i&&i!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return H("Activity");default:return""}}function qt(e){try{var i="",s=null;do i+=ye(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ne=Object.prototype.hasOwnProperty,Yt=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,T=r.unstable_shouldYield,et=r.unstable_requestPaint,ht=r.unstable_now,Mt=r.unstable_getCurrentPriorityLevel,mt=r.unstable_ImmediatePriority,Xt=r.unstable_UserBlockingPriority,wt=r.unstable_NormalPriority,It=r.unstable_LowPriority,Se=r.unstable_IdlePriority,Tt=r.log,Bt=r.unstable_setDisableYieldValue,Zt=null,Wt=null;function Nt(e){if(typeof Tt=="function"&&Bt(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Zt,e)}catch{}}var $t=Math.clz32?Math.clz32:W,ae=Math.log,Ie=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(ae(e)/Ie|0)|0}var Rt=256,lt=262144,_t=4194304;function Ct(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var f=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?f=Ct(o):(S&=b,S!==0?f=Ct(S):s||(s=b&~e,s!==0&&(f=Ct(s))))):(b=o&~d,b!==0?f=Ct(b):S!==0?f=Ct(S):s||(s=o&~e,s!==0&&(f=Ct(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function te(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Qe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mn(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Ae(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function bn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,i,s,o,f,d){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(s=S&~s;0<s;){var ut=31-$t(s),gt=1<<ut;b[ut]=0,I[ut]=-1;var tt=$[ut];if(tt!==null)for($[ut]=null,ut=0;ut<tt.length;ut++){var ot=tt[ut];ot!==null&&(ot.lane&=-536870913)}s&=~gt}o!==0&&no(e,o,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function no(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-$t(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function io(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-$t(s),f=1<<o;f&i|e[o]&i&&(e[o]|=i),s&=~f}}function Oi(e,i){var s=i&-i;return s=(s&42)!==0?1:rs(s),(s&(e.suspendedLanes|i))!==0?0:s}function rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ao(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:kg(e.type))}function os(e,i){var s=Q.p;try{return Q.p=e,i()}finally{Q.p=s}}var Mi=Math.random().toString(36).slice(2),nn="__reactFiber$"+Mi,Tn="__reactProps$"+Mi,Yi="__reactContainer$"+Mi,so="__reactEvents$"+Mi,du="__reactListeners$"+Mi,pu="__reactHandles$"+Mi,pl="__reactResources$"+Mi,ls="__reactMarker$"+Mi;function A(e){delete e[nn],delete e[Tn],delete e[so],delete e[du],delete e[pu]}function Y(e){var i=e[nn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Yi]||s[nn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Rg(e);e!==null;){if(s=e[nn])return s;e=Rg(e)}return i}e=s,s=e.parentNode}return null}function it(e){if(e=e[nn]||e[Yi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function st(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function q(e){var i=e[pl];return i||(i=e[pl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vt(e){e[ls]=!0}var Ut=new Set,zt={};function Pt(e,i){Qt(e,i),Qt(e+"Capture",i)}function Qt(e,i){for(zt[e]=i,e=0;e<i.length;e++)Ut.add(i[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},xe={};function Re(e){return Ne.call(xe,e)?!0:Ne.call(jt,e)?!1:ee.test(e)?xe[e]=!0:(jt[e]=!0,!1)}function Ye(e,i,s){if(Re(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Xe(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function se(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cn(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Bn(e){if(!e._valueTracker){var i=cn(e)?"checked":"value";e._valueTracker=Ce(e,i,""+e[i])}}function qi(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=cn(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cs=/[\n"\\]/g;function pe(e){return e.replace(cs,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ln(e,i,s,o,f,d,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Gt(i)):e.value!==""+Gt(i)&&(e.value=""+Gt(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?gn(e,S,Gt(i)):s!=null?gn(e,S,Gt(s)):o!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Gt(b):e.removeAttribute("name")}function Fn(e,i,s,o,f,d,S,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Bn(e);return}s=s!=null?""+Gt(s):"",i=i!=null?""+Gt(i):s,b||i===e.value||(e.value=i),e.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Bn(e)}function gn(e,i,s){i==="number"&&xn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function rn(e,i,s,o){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Gt(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Xs(e,i,s){if(i!=null&&(i=""+Gt(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Gt(s):""}function Pi(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(pt(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=Gt(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),Bn(e)}function Ws(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var uy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gp(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||uy.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function _p(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&s[f]!==o&&gp(e,f,o)}else for(var d in i)i.hasOwnProperty(d)&&gp(e,d,i[d])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return hy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,qs=null;function vp(e){var i=it(e);if(i&&(e=i.stateNode)){var s=e[Tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ln(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+pe(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var f=o[Tn]||null;if(!f)throw Error(a(90));Ln(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&qi(o)}break t;case"textarea":Xs(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&rn(e,!!s.multiple,i,!1)}}}var vu=!1;function yp(e,i,s){if(vu)return e(i,s);vu=!0;try{var o=e(i);return o}finally{if(vu=!1,(Ys!==null||qs!==null)&&(nc(),Ys&&(i=Ys,e=qs,qs=Ys=null,vp(i),e)))for(i=0;i<e.length;i++)vp(e[i])}}function ro(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Tn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(ji)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){yu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{yu=!1}var Ea=null,Su=null,gl=null;function Sp(){if(gl)return gl;var e,i=Su,s=i.length,o,f="value"in Ea?Ea.value:Ea.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var S=s-e;for(o=1;o<=S&&i[s-o]===f[d-o];o++);return gl=f.slice(e,1<o?1-o:void 0)}function _l(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function xp(){return!1}function Xn(e){function i(s,o,f,d,S){this._reactName=s,this._targetInst=f,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:xp,this.isPropagationStopped=xp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Xn(us),lo=_({},us,{view:0,detail:0}),dy=Xn(lo),xu,Mu,co,Sl=_({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(xu=e.screenX-co.screenX,Mu=e.screenY-co.screenY):Mu=xu=0,co=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Mp=Xn(Sl),py=_({},Sl,{dataTransfer:0}),my=Xn(py),gy=_({},lo,{relatedTarget:0}),Eu=Xn(gy),_y=_({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=Xn(_y),yy=_({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sy=Xn(yy),xy=_({},us,{data:0}),Ep=Xn(xy),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=by[e])?!!i[e]:!1}function bu(){return Ty}var Ay=_({},lo,{key:function(e){if(e.key){var i=My[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ry=Xn(Ay),Cy=_({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Xn(Cy),wy=_({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Dy=Xn(wy),Uy=_({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ly=Xn(Uy),Ny=_({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=Xn(Ny),Py=_({},us,{newState:0,oldState:0}),zy=Xn(Py),Iy=[9,13,27,32],Tu=ji&&"CompositionEvent"in window,uo=null;ji&&"documentMode"in document&&(uo=document.documentMode);var By=ji&&"TextEvent"in window&&!uo,Tp=ji&&(!Tu||uo&&8<uo&&11>=uo),Ap=" ",Rp=!1;function Cp(e,i){switch(e){case"keyup":return Iy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function Fy(e,i){switch(e){case"compositionend":return wp(i);case"keypress":return i.which!==32?null:(Rp=!0,Ap);case"textInput":return e=i.data,e===Ap&&Rp?null:e;default:return null}}function Hy(e,i){if(Zs)return e==="compositionend"||!Tu&&Cp(e,i)?(e=Sp(),gl=Su=Ea=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tp&&i.locale!=="ko"?null:i.data;default:return null}}var Gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Gy[e.type]:i==="textarea"}function Up(e,i,s,o){Ys?qs?qs.push(o):qs=[o]:Ys=o,i=cc(i,"onChange"),0<i.length&&(s=new yl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var fo=null,ho=null;function Vy(e){dg(e,0)}function xl(e){var i=st(e);if(qi(i))return e}function Lp(e,i){if(e==="change")return i}var Np=!1;if(ji){var Au;if(ji){var Ru="oninput"in document;if(!Ru){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Ru=typeof Op.oninput=="function"}Au=Ru}else Au=!1;Np=Au&&(!document.documentMode||9<document.documentMode)}function Pp(){fo&&(fo.detachEvent("onpropertychange",zp),ho=fo=null)}function zp(e){if(e.propertyName==="value"&&xl(ho)){var i=[];Up(i,ho,e,_u(e)),yp(Vy,i)}}function ky(e,i,s){e==="focusin"?(Pp(),fo=i,ho=s,fo.attachEvent("onpropertychange",zp)):e==="focusout"&&Pp()}function Xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(ho)}function Wy(e,i){if(e==="click")return xl(i)}function Yy(e,i){if(e==="input"||e==="change")return xl(i)}function qy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ti=typeof Object.is=="function"?Object.is:qy;function po(e,i){if(ti(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var f=s[o];if(!Ne.call(i,f)||!ti(e[f],i[f]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bp(e,i){var s=Ip(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Ip(s)}}function Fp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Fp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=xn(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=xn(e.document)}return i}function Cu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Zy=ji&&"documentMode"in document&&11>=document.documentMode,js=null,wu=null,mo=null,Du=!1;function Gp(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Du||js==null||js!==xn(o)||(o=js,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=cc(wu,"onSelect"),0<o.length&&(i=new yl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=js)))}function fs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Ks={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Uu={},Vp={};ji&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function hs(e){if(Uu[e])return Uu[e];if(!Ks[e])return e;var i=Ks[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Vp)return Uu[e]=i[s];return e}var kp=hs("animationend"),Xp=hs("animationiteration"),Wp=hs("animationstart"),jy=hs("transitionrun"),Ky=hs("transitionstart"),Qy=hs("transitioncancel"),Yp=hs("transitionend"),qp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ei(e,i){qp.set(e,i),Pt(i,[e])}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Qs=0,Nu=0;function El(){for(var e=Qs,i=Nu=Qs=0;i<e;){var s=fi[i];fi[i++]=null;var o=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var d=fi[i];if(fi[i++]=null,o!==null&&f!==null){var S=o.pending;S===null?f.next=f:(f.next=S.next,S.next=f),o.pending=f}d!==0&&Zp(s,f,d)}}function bl(e,i,s,o){fi[Qs++]=e,fi[Qs++]=i,fi[Qs++]=s,fi[Qs++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,i,s,o){return bl(e,i,s,o),Tl(e)}function ds(e,i){return bl(e,null,null,i),Tl(e)}function Zp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-$t(s),e=d.hiddenUpdates,o=e[f],o===null?e[f]=[i]:o.push(i),i.lane=s|536870912),d):null}function Tl(e){if(50<Io)throw Io=0,Xf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Js={};function Jy(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,i,s,o){return new Jy(e,i,s,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var s=e.alternate;return s===null?(s=ei(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function jp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Al(e,i,s,o,f,d){var S=0;if(o=e,typeof e=="function")Pu(e)&&(S=1);else if(typeof e=="string")S=ix(e,s,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ei(31,s,i,f),e.elementType=D,e.lanes=d,e;case R:return ps(s.children,f,d,i);case M:S=8,f|=24;break;case v:return e=ei(12,s,i,f|2),e.elementType=v,e.lanes=d,e;case k:return e=ei(13,s,i,f),e.elementType=k,e.lanes=d,e;case B:return e=ei(19,s,i,f),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case O:S=9;break t;case C:S=11;break t;case z:S=14;break t;case X:S=16,o=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=ei(S,s,i,f),i.elementType=e,i.type=o,i.lanes=d,i}function ps(e,i,s,o){return e=ei(7,e,o,i),e.lanes=s,e}function zu(e,i,s){return e=ei(6,e,null,i),e.lanes=s,e}function Kp(e){var i=ei(18,null,null,0);return i.stateNode=e,i}function Iu(e,i,s){return i=ei(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Qp=new WeakMap;function hi(e,i){if(typeof e=="object"&&e!==null){var s=Qp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:qt(i)},Qp.set(e,i),i)}return{value:e,source:i,stack:qt(i)}}var $s=[],tr=0,Rl=null,go=0,di=[],pi=0,ba=null,zi=1,Ii="";function Qi(e,i){$s[tr++]=go,$s[tr++]=Rl,Rl=e,go=i}function Jp(e,i,s){di[pi++]=zi,di[pi++]=Ii,di[pi++]=ba,ba=e;var o=zi;e=Ii;var f=32-$t(o)-1;o&=~(1<<f),s+=1;var d=32-$t(i)+f;if(30<d){var S=f-f%5;d=(o&(1<<S)-1).toString(32),o>>=S,f-=S,zi=1<<32-$t(i)+f|s<<f|o,Ii=d+e}else zi=1<<d|s<<f|o,Ii=e}function Bu(e){e.return!==null&&(Qi(e,1),Jp(e,1,0))}function Fu(e){for(;e===Rl;)Rl=$s[--tr],$s[tr]=null,go=$s[--tr],$s[tr]=null;for(;e===ba;)ba=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null,zi=di[--pi],di[pi]=null}function $p(e,i){di[pi++]=zi,di[pi++]=Ii,di[pi++]=ba,zi=i.id,Ii=i.overflow,ba=e}var An=null,qe=null,be=!1,Ta=null,mi=!1,Hu=Error(a(519));function Aa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(hi(i,e)),Hu}function tm(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[nn]=e,i[Tn]=o,s){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(s=0;s<Fo.length;s++)ge(Fo[s],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":ge("invalid",i),Fn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",i);break;case"textarea":ge("invalid",i),Pi(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||_g(i.textContent,s)?(o.popover!=null&&(ge("beforetoggle",i),ge("toggle",i)),o.onScroll!=null&&ge("scroll",i),o.onScrollEnd!=null&&ge("scrollend",i),o.onClick!=null&&(i.onclick=Zi),i=!0):i=!1,i||Aa(e,!0)}function em(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:An=An.return}}function er(e){if(e!==An)return!1;if(!be)return em(e),be=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||sh(e.type,e.memoizedProps)),s=!s),s&&qe&&Aa(e),em(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));qe=Ag(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));qe=Ag(e)}else i===27?(i=qe,Ha(e.type)?(e=uh,uh=null,qe=e):qe=i):qe=An?_i(e.stateNode.nextSibling):null;return!0}function ms(){qe=An=null,be=!1}function Gu(){var e=Ta;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ta=null),e}function _o(e){Ta===null?Ta=[e]:Ta.push(e)}var Vu=N(null),gs=null,Ji=null;function Ra(e,i,s){St(Vu,i._currentValue),i._currentValue=s}function $i(e){e._currentValue=Vu.current,nt(Vu)}function ku(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Xu(e,i,s,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=f;for(var I=0;I<i.length;I++)if(b.context===i[I]){d.lanes|=s,b=d.alternate,b!==null&&(b.lanes|=s),ku(d.return,s,e),o||(S=null);break t}d=b.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),ku(S,s,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function nr(e,i,s,o){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var b=f.type;ti(f.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(f===yt.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}f=f.return}e!==null&&Xu(i,e,s,o),i.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return nm(gs,e)}function wl(e,i){return gs===null&&_s(e),nm(e,i)}function nm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ji===null){if(e===null)throw Error(a(308));Ji=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ji=Ji.next=i;return s}var $y=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},tS=r.unstable_scheduleCallback,eS=r.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new $y,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&tS(eS,function(){e.controller.abort()})}var yo=null,Yu=0,ir=0,ar=null;function nS(e,i){if(yo===null){var s=yo=[];Yu=0,ir=Kf(),ar={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Yu++,i.then(im,im),i}function im(){if(--Yu===0&&yo!==null){ar!==null&&(ar.status="fulfilled");var e=yo;yo=null,ir=0,ar=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function iS(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),o}var am=P.S;P.S=function(e,i){G0=ht(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&nS(e,i),am!==null&&am(e,i)};var vs=N(null);function qu(){var e=vs.current;return e!==null?e:We.pooledCache}function Dl(e,i){i===null?St(vs,vs.current):St(vs,i.pool)}function sm(){var e=qu();return e===null?null:{parent:un._currentValue,pool:e}}var sr=Error(a(460)),Zu=Error(a(474)),Ul=Error(a(542)),Ll={then:function(){}};function rm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function om(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Zi,Zi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,cm(e),e;default:if(typeof i.status=="string")i.then(Zi,Zi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,cm(e),e}throw Ss=i,sr}}function ys(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ss=s,sr):s}}var Ss=null;function lm(){if(Ss===null)throw Error(a(459));var e=Ss;return Ss=null,e}function cm(e){if(e===sr||e===Ul)throw Error(a(483))}var rr=null,So=0;function Nl(e){var i=So;return So+=1,rr===null&&(rr=[]),om(rr,e,i)}function xo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ol(e,i){throw i.$$typeof===y?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function um(e){function i(Z,G){if(e){var J=Z.deletions;J===null?(Z.deletions=[G],Z.flags|=16):J.push(G)}}function s(Z,G){if(!e)return null;for(;G!==null;)i(Z,G),G=G.sibling;return null}function o(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function f(Z,G){return Z=Ki(Z,G),Z.index=0,Z.sibling=null,Z}function d(Z,G,J){return Z.index=J,e?(J=Z.alternate,J!==null?(J=J.index,J<G?(Z.flags|=67108866,G):J):(Z.flags|=67108866,G)):(Z.flags|=1048576,G)}function S(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,G,J,dt){return G===null||G.tag!==6?(G=zu(J,Z.mode,dt),G.return=Z,G):(G=f(G,J),G.return=Z,G)}function I(Z,G,J,dt){var Kt=J.type;return Kt===R?ut(Z,G,J.props.children,dt,J.key):G!==null&&(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&ys(Kt)===G.type)?(G=f(G,J.props),xo(G,J),G.return=Z,G):(G=Al(J.type,J.key,J.props,null,Z.mode,dt),xo(G,J),G.return=Z,G)}function $(Z,G,J,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=Iu(J,Z.mode,dt),G.return=Z,G):(G=f(G,J.children||[]),G.return=Z,G)}function ut(Z,G,J,dt,Kt){return G===null||G.tag!==7?(G=ps(J,Z.mode,dt,Kt),G.return=Z,G):(G=f(G,J),G.return=Z,G)}function gt(Z,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=zu(""+G,Z.mode,J),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return J=Al(G.type,G.key,G.props,null,Z.mode,J),xo(J,G),J.return=Z,J;case E:return G=Iu(G,Z.mode,J),G.return=Z,G;case X:return G=ys(G),gt(Z,G,J)}if(pt(G)||rt(G))return G=ps(G,Z.mode,J,null),G.return=Z,G;if(typeof G.then=="function")return gt(Z,Nl(G),J);if(G.$$typeof===U)return gt(Z,wl(Z,G),J);Ol(Z,G)}return null}function tt(Z,G,J,dt){var Kt=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Kt!==null?null:b(Z,G,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return J.key===Kt?I(Z,G,J,dt):null;case E:return J.key===Kt?$(Z,G,J,dt):null;case X:return J=ys(J),tt(Z,G,J,dt)}if(pt(J)||rt(J))return Kt!==null?null:ut(Z,G,J,dt,null);if(typeof J.then=="function")return tt(Z,G,Nl(J),dt);if(J.$$typeof===U)return tt(Z,G,wl(Z,J),dt);Ol(Z,J)}return null}function ot(Z,G,J,dt,Kt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Z=Z.get(J)||null,b(G,Z,""+dt,Kt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return Z=Z.get(dt.key===null?J:dt.key)||null,I(G,Z,dt,Kt);case E:return Z=Z.get(dt.key===null?J:dt.key)||null,$(G,Z,dt,Kt);case X:return dt=ys(dt),ot(Z,G,J,dt,Kt)}if(pt(dt)||rt(dt))return Z=Z.get(J)||null,ut(G,Z,dt,Kt,null);if(typeof dt.then=="function")return ot(Z,G,J,Nl(dt),Kt);if(dt.$$typeof===U)return ot(Z,G,J,wl(G,dt),Kt);Ol(G,dt)}return null}function Ft(Z,G,J,dt){for(var Kt=null,we=null,kt=G,le=G=0,Ee=null;kt!==null&&le<J.length;le++){kt.index>le?(Ee=kt,kt=null):Ee=kt.sibling;var De=tt(Z,kt,J[le],dt);if(De===null){kt===null&&(kt=Ee);break}e&&kt&&De.alternate===null&&i(Z,kt),G=d(De,G,le),we===null?Kt=De:we.sibling=De,we=De,kt=Ee}if(le===J.length)return s(Z,kt),be&&Qi(Z,le),Kt;if(kt===null){for(;le<J.length;le++)kt=gt(Z,J[le],dt),kt!==null&&(G=d(kt,G,le),we===null?Kt=kt:we.sibling=kt,we=kt);return be&&Qi(Z,le),Kt}for(kt=o(kt);le<J.length;le++)Ee=ot(kt,Z,le,J[le],dt),Ee!==null&&(e&&Ee.alternate!==null&&kt.delete(Ee.key===null?le:Ee.key),G=d(Ee,G,le),we===null?Kt=Ee:we.sibling=Ee,we=Ee);return e&&kt.forEach(function(Wa){return i(Z,Wa)}),be&&Qi(Z,le),Kt}function Jt(Z,G,J,dt){if(J==null)throw Error(a(151));for(var Kt=null,we=null,kt=G,le=G=0,Ee=null,De=J.next();kt!==null&&!De.done;le++,De=J.next()){kt.index>le?(Ee=kt,kt=null):Ee=kt.sibling;var Wa=tt(Z,kt,De.value,dt);if(Wa===null){kt===null&&(kt=Ee);break}e&&kt&&Wa.alternate===null&&i(Z,kt),G=d(Wa,G,le),we===null?Kt=Wa:we.sibling=Wa,we=Wa,kt=Ee}if(De.done)return s(Z,kt),be&&Qi(Z,le),Kt;if(kt===null){for(;!De.done;le++,De=J.next())De=gt(Z,De.value,dt),De!==null&&(G=d(De,G,le),we===null?Kt=De:we.sibling=De,we=De);return be&&Qi(Z,le),Kt}for(kt=o(kt);!De.done;le++,De=J.next())De=ot(kt,Z,le,De.value,dt),De!==null&&(e&&De.alternate!==null&&kt.delete(De.key===null?le:De.key),G=d(De,G,le),we===null?Kt=De:we.sibling=De,we=De);return e&&kt.forEach(function(px){return i(Z,px)}),be&&Qi(Z,le),Kt}function He(Z,G,J,dt){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case x:t:{for(var Kt=J.key;G!==null;){if(G.key===Kt){if(Kt=J.type,Kt===R){if(G.tag===7){s(Z,G.sibling),dt=f(G,J.props.children),dt.return=Z,Z=dt;break t}}else if(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&ys(Kt)===G.type){s(Z,G.sibling),dt=f(G,J.props),xo(dt,J),dt.return=Z,Z=dt;break t}s(Z,G);break}else i(Z,G);G=G.sibling}J.type===R?(dt=ps(J.props.children,Z.mode,dt,J.key),dt.return=Z,Z=dt):(dt=Al(J.type,J.key,J.props,null,Z.mode,dt),xo(dt,J),dt.return=Z,Z=dt)}return S(Z);case E:t:{for(Kt=J.key;G!==null;){if(G.key===Kt)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){s(Z,G.sibling),dt=f(G,J.children||[]),dt.return=Z,Z=dt;break t}else{s(Z,G);break}else i(Z,G);G=G.sibling}dt=Iu(J,Z.mode,dt),dt.return=Z,Z=dt}return S(Z);case X:return J=ys(J),He(Z,G,J,dt)}if(pt(J))return Ft(Z,G,J,dt);if(rt(J)){if(Kt=rt(J),typeof Kt!="function")throw Error(a(150));return J=Kt.call(J),Jt(Z,G,J,dt)}if(typeof J.then=="function")return He(Z,G,Nl(J),dt);if(J.$$typeof===U)return He(Z,G,wl(Z,J),dt);Ol(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(s(Z,G.sibling),dt=f(G,J),dt.return=Z,Z=dt):(s(Z,G),dt=zu(J,Z.mode,dt),dt.return=Z,Z=dt),S(Z)):s(Z,G)}return function(Z,G,J,dt){try{So=0;var Kt=He(Z,G,J,dt);return rr=null,Kt}catch(kt){if(kt===sr||kt===Ul)throw kt;var we=ei(29,kt,null,Z.mode);return we.lanes=dt,we.return=Z,we}}}var xs=um(!0),fm=um(!1),Ca=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=Tl(e),Zp(e,null,s),i}return bl(e,o,i,s),Tl(e)}function Mo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,io(e,s)}}function Qu(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Ju=!1;function Eo(){if(Ju){var e=ar;if(e!==null)throw e}}function bo(e,i,s,o){Ju=!1;var f=e.updateQueue;Ca=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var I=b,$=I.next;I.next=null,S===null?d=$:S.next=$,S=I;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==S&&(b===null?ut.firstBaseUpdate=$:b.next=$,ut.lastBaseUpdate=I))}if(d!==null){var gt=f.baseState;S=0,ut=$=I=null,b=d;do{var tt=b.lane&-536870913,ot=tt!==b.lane;if(ot?(Me&tt)===tt:(o&tt)===tt){tt!==0&&tt===ir&&(Ju=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ft=e,Jt=b;tt=i;var He=s;switch(Jt.tag){case 1:if(Ft=Jt.payload,typeof Ft=="function"){gt=Ft.call(He,gt,tt);break t}gt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Jt.payload,tt=typeof Ft=="function"?Ft.call(He,gt,tt):Ft,tt==null)break t;gt=_({},gt,tt);break t;case 2:Ca=!0}}tt=b.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=f.callbacks,ot===null?f.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?($=ut=ot,I=gt):ut=ut.next=ot,S|=tt;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,f.lastBaseUpdate=ot,f.shared.pending=null}}while(!0);ut===null&&(I=gt),f.baseState=I,f.firstBaseUpdate=$,f.lastBaseUpdate=ut,d===null&&(f.shared.lanes=0),Pa|=S,e.lanes=S,e.memoizedState=gt}}function hm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function dm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)hm(s[e],i)}var or=N(null),Pl=N(0);function pm(e,i){e=la,St(Pl,e),St(or,i),la=e|i.baseLanes}function $u(){St(Pl,la),St(or,or.current)}function tf(){la=Pl.current,nt(or),nt(Pl)}var ni=N(null),gi=null;function Ua(e){var i=e.alternate;St(on,on.current&1),St(ni,e),gi===null&&(i===null||or.current!==null||i.memoizedState!==null)&&(gi=e)}function ef(e){St(on,on.current),St(ni,e),gi===null&&(gi=e)}function mm(e){e.tag===22?(St(on,on.current),St(ni,e),gi===null&&(gi=e)):La()}function La(){St(on,on.current),St(ni,ni.current)}function ii(e){nt(ni),gi===e&&(gi=null),nt(on)}var on=N(0);function zl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||lh(s)||ch(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ta=0,re=null,Be=null,fn=null,Il=!1,lr=!1,Ms=!1,Bl=0,To=0,cr=null,aS=0;function an(){throw Error(a(321))}function nf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ti(e[s],i[s]))return!1;return!0}function af(e,i,s,o,f,d){return ta=d,re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=e===null||e.memoizedState===null?Jm:yf,Ms=!1,d=s(o,f),Ms=!1,lr&&(d=_m(i,s,o,f)),gm(e),d}function gm(e){P.H=Co;var i=Be!==null&&Be.next!==null;if(ta=0,fn=Be=re=null,Il=!1,To=0,cr=null,i)throw Error(a(300));e===null||hn||(e=e.dependencies,e!==null&&Cl(e)&&(hn=!0))}function _m(e,i,s,o){re=e;var f=0;do{if(lr&&(cr=null),To=0,lr=!1,25<=f)throw Error(a(301));if(f+=1,fn=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=$m,d=i(s,o)}while(lr);return d}function sS(){var e=P.H,i=e.useState()[0];return i=typeof i.then=="function"?Ao(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(re.flags|=1024),i}function sf(){var e=Bl!==0;return Bl=0,e}function rf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function of(e){if(Il){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Il=!1}ta=0,fn=Be=re=null,lr=!1,To=Bl=0,cr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?re.memoizedState=fn=e:fn=fn.next=e,fn}function ln(){if(Be===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=fn===null?re.memoizedState:fn.next;if(i!==null)fn=i,Be=e;else{if(e===null)throw re.alternate===null?Error(a(467)):Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},fn===null?re.memoizedState=fn=e:fn=fn.next=e}return fn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var i=To;return To+=1,cr===null&&(cr=[]),e=om(cr,e,i),i=re,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Jm:yf),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===U)return Rn(e)}throw Error(a(438,String(e)))}function lf(e){var i=null,s=re.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Fl(),re.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=w;return i.index++,s}function ea(e,i){return typeof i=="function"?i(e):i}function Gl(e){var i=ln();return cf(i,Be,e)}function cf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var f=e.baseQueue,d=o.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,o.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var b=S=null,I=null,$=i,ut=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Me&gt)===gt:(ta&gt)===gt){var tt=$.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===ir&&(ut=!0);else if((ta&tt)===tt){$=$.next,tt===ir&&(ut=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=gt,S=d):I=I.next=gt,re.lanes|=tt,Pa|=tt;gt=$.action,Ms&&s(d,gt),d=$.hasEagerState?$.eagerState:s(d,gt)}else tt={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=tt,S=d):I=I.next=tt,re.lanes|=gt,Pa|=gt;$=$.next}while($!==null&&$!==i);if(I===null?S=d:I.next=b,!ti(d,e.memoizedState)&&(hn=!0,ut&&(s=ar,s!==null)))throw s;e.memoizedState=d,e.baseState=S,e.baseQueue=I,o.lastRenderedState=d}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var i=ln(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do d=e(d,S.action),S=S.next;while(S!==f);ti(d,i.memoizedState)||(hn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function vm(e,i,s){var o=re,f=ln(),d=be;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ti((Be||f).memoizedState,s);if(S&&(f.memoizedState=s,hn=!0),f=f.queue,df(xm.bind(null,o,f,e),[e]),f.getSnapshot!==i||S||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},Sm.bind(null,o,f,s,i),null),We===null)throw Error(a(349));d||(ta&127)!==0||ym(o,i,s)}return s}function ym(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=re.updateQueue,i===null?(i=Fl(),re.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Sm(e,i,s,o){i.value=s,i.getSnapshot=o,Mm(i)&&Em(e)}function xm(e,i,s){return s(function(){Mm(i)&&Em(e)})}function Mm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ti(e,s)}catch{return!0}}function Em(e){var i=ds(e,2);i!==null&&jn(i,e,2)}function ff(e){var i=Hn();if(typeof e=="function"){var s=e;if(e=s(),Ms){Nt(!0);try{s()}finally{Nt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},i}function bm(e,i,s,o){return e.baseState=s,cf(e,Be,typeof o=="function"?o:ea)}function rS(e,i,s,o,f){if(Xl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};P.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,Tm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Tm(e,i){var s=i.action,o=i.payload,f=e.state;if(i.isTransition){var d=P.T,S={};P.T=S;try{var b=s(f,o),I=P.S;I!==null&&I(S,b),Am(e,i,b)}catch($){hf(e,i,$)}finally{d!==null&&S.types!==null&&(d.types=S.types),P.T=d}}else try{d=s(f,o),Am(e,i,d)}catch($){hf(e,i,$)}}function Am(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Rm(e,i,o)},function(o){return hf(e,i,o)}):Rm(e,i,s)}function Rm(e,i,s){i.status="fulfilled",i.value=s,Cm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Tm(e,s)))}function hf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Cm(i),i=i.next;while(i!==o)}e.action=null}function Cm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function wm(e,i){return i}function Dm(e,i){if(be){var s=We.formState;if(s!==null){t:{var o=re;if(be){if(qe){e:{for(var f=qe,d=mi;f.nodeType!==8;){if(!d){f=null;break e}if(f=_i(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){qe=_i(f.nextSibling),o=f.data==="F!";break t}}Aa(o)}o=!1}o&&(i=s[0])}}return s=Hn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wm,lastRenderedState:i},s.queue=o,s=jm.bind(null,re,o),o.dispatch=s,o=ff(!1),d=vf.bind(null,re,!1,o.queue),o=Hn(),f={state:i,dispatch:null,action:e,pending:null},o.queue=f,s=rS.bind(null,re,f,d,s),f.dispatch=s,o.memoizedState=e,[i,s,!1]}function Um(e){var i=ln();return Lm(i,Be,e)}function Lm(e,i,s){if(i=cf(e,i,wm)[0],e=Gl(ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Ao(i)}catch(S){throw S===sr?Ul:S}else o=i;i=ln();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(re.flags|=2048,ur(9,{destroy:void 0},oS.bind(null,f,s),null)),[o,d,e]}function oS(e,i){e.action=i}function Nm(e){var i=ln(),s=Be;if(s!==null)return Lm(i,s,e);ln(),i=i.memoizedState,s=ln();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function ur(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=re.updateQueue,i===null&&(i=Fl(),re.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Om(){return ln().memoizedState}function Vl(e,i,s,o){var f=Hn();re.flags|=e,f.memoizedState=ur(1|i,{destroy:void 0},s,o===void 0?null:o)}function kl(e,i,s,o){var f=ln();o=o===void 0?null:o;var d=f.memoizedState.inst;Be!==null&&o!==null&&nf(o,Be.memoizedState.deps)?f.memoizedState=ur(i,d,s,o):(re.flags|=e,f.memoizedState=ur(1|i,d,s,o))}function Pm(e,i){Vl(8390656,8,e,i)}function df(e,i){kl(2048,8,e,i)}function lS(e){re.flags|=4;var i=re.updateQueue;if(i===null)i=Fl(),re.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function zm(e){var i=ln().memoizedState;return lS({ref:i,nextImpl:e}),function(){if((Le&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Im(e,i){return kl(4,2,e,i)}function Bm(e,i){return kl(4,4,e,i)}function Fm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Hm(e,i,s){s=s!=null?s.concat([e]):null,kl(4,4,Fm.bind(null,i,e),s)}function pf(){}function Gm(e,i){var s=ln();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&nf(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function Vm(e,i){var s=ln();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&nf(i,o[1]))return o[0];if(o=e(),Ms){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[o,i],o}function mf(e,i,s){return s===void 0||(ta&1073741824)!==0&&(Me&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=k0(),re.lanes|=e,Pa|=e,s)}function km(e,i,s,o){return ti(s,i)?s:or.current!==null?(e=mf(e,s,o),ti(e,i)||(hn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(Me&261930)===0?(hn=!0,e.memoizedState=s):(e=k0(),re.lanes|=e,Pa|=e,i)}function Xm(e,i,s,o,f){var d=Q.p;Q.p=d!==0&&8>d?d:8;var S=P.T,b={};P.T=b,vf(e,!1,i,s);try{var I=f(),$=P.S;if($!==null&&$(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=iS(I,o);Ro(e,i,ut,ri(e))}else Ro(e,i,o,ri(e))}catch(gt){Ro(e,i,{then:function(){},status:"rejected",reason:gt},ri())}finally{Q.p=d,S!==null&&b.types!==null&&(S.types=b.types),P.T=S}}function cS(){}function gf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var f=Wm(e).queue;Xm(e,f,i,K,s===null?cS:function(){return Ym(e),s(o)})}function Wm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:K},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ym(e){var i=Wm(e);i.next===null&&(i=e.alternate.memoizedState),Ro(e,i.next.queue,{},ri())}function _f(){return Rn(Xo)}function qm(){return ln().memoizedState}function Zm(){return ln().memoizedState}function uS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ri();e=wa(s);var o=Da(i,e,s);o!==null&&(jn(o,i,s),Mo(o,i,s)),i={cache:Wu()},e.payload=i;return}i=i.return}}function fS(e,i,s){var o=ri();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Xl(e)?Km(i,s):(s=Ou(e,i,s,o),s!==null&&(jn(s,e,o),Qm(s,i,o)))}function jm(e,i,s){var o=ri();Ro(e,i,s,o)}function Ro(e,i,s,o){var f={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))Km(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,b=d(S,s);if(f.hasEagerState=!0,f.eagerState=b,ti(b,S))return bl(e,i,f,0),We===null&&El(),!1}catch{}if(s=Ou(e,i,f,o),s!==null)return jn(s,e,o),Qm(s,i,o),!0}return!1}function vf(e,i,s,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(i)throw Error(a(479))}else i=Ou(e,s,o,2),i!==null&&jn(i,e,2)}function Xl(e){var i=e.alternate;return e===re||i!==null&&i===re}function Km(e,i){lr=Il=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Qm(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,io(e,s)}}var Co={readContext:Rn,use:Hl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Co.useEffectEvent=an;var Jm={readContext:Rn,use:Hl,useCallback:function(e,i){return Hn().memoizedState=[e,i===void 0?null:i],e},useContext:Rn,useEffect:Pm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Vl(4194308,4,Fm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Vl(4194308,4,e,i)},useInsertionEffect:function(e,i){Vl(4,2,e,i)},useMemo:function(e,i){var s=Hn();i=i===void 0?null:i;var o=e();if(Ms){Nt(!0);try{e()}finally{Nt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Hn();if(s!==void 0){var f=s(i);if(Ms){Nt(!0);try{s(i)}finally{Nt(!1)}}}else f=i;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=fS.bind(null,re,e),[o.memoizedState,e]},useRef:function(e){var i=Hn();return e={current:e},i.memoizedState=e},useState:function(e){e=ff(e);var i=e.queue,s=jm.bind(null,re,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:pf,useDeferredValue:function(e,i){var s=Hn();return mf(s,e,i)},useTransition:function(){var e=ff(!1);return e=Xm.bind(null,re,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=re,f=Hn();if(be){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),We===null)throw Error(a(349));(Me&127)!==0||ym(o,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,Pm(xm.bind(null,o,d,e),[e]),o.flags|=2048,ur(9,{destroy:void 0},Sm.bind(null,o,d,s,i),null),s},useId:function(){var e=Hn(),i=We.identifierPrefix;if(be){var s=Ii,o=zi;s=(o&~(1<<32-$t(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Bl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=aS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:_f,useFormState:Dm,useActionState:Dm,useOptimistic:function(e){var i=Hn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=vf.bind(null,re,!0,s),s.dispatch=i,[e,i]},useMemoCache:lf,useCacheRefresh:function(){return Hn().memoizedState=uS.bind(null,re)},useEffectEvent:function(e){var i=Hn(),s={impl:e};return i.memoizedState=s,function(){if((Le&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},yf={readContext:Rn,use:Hl,useCallback:Gm,useContext:Rn,useEffect:df,useImperativeHandle:Hm,useInsertionEffect:Im,useLayoutEffect:Bm,useMemo:Vm,useReducer:Gl,useRef:Om,useState:function(){return Gl(ea)},useDebugValue:pf,useDeferredValue:function(e,i){var s=ln();return km(s,Be.memoizedState,e,i)},useTransition:function(){var e=Gl(ea)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:_f,useFormState:Um,useActionState:Um,useOptimistic:function(e,i){var s=ln();return bm(s,Be,e,i)},useMemoCache:lf,useCacheRefresh:Zm};yf.useEffectEvent=zm;var $m={readContext:Rn,use:Hl,useCallback:Gm,useContext:Rn,useEffect:df,useImperativeHandle:Hm,useInsertionEffect:Im,useLayoutEffect:Bm,useMemo:Vm,useReducer:uf,useRef:Om,useState:function(){return uf(ea)},useDebugValue:pf,useDeferredValue:function(e,i){var s=ln();return Be===null?mf(s,e,i):km(s,Be.memoizedState,e,i)},useTransition:function(){var e=uf(ea)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:_f,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,i){var s=ln();return Be!==null?bm(s,Be,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Zm};$m.useEffectEvent=zm;function Sf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var xf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=ri(),f=wa(o);f.payload=i,s!=null&&(f.callback=s),i=Da(e,f,o),i!==null&&(jn(i,e,o),Mo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=ri(),f=wa(o);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Da(e,f,o),i!==null&&(jn(i,e,o),Mo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ri(),o=wa(s);o.tag=2,i!=null&&(o.callback=i),i=Da(e,o,s),i!==null&&(jn(i,e,s),Mo(i,e,s))}};function t0(e,i,s,o,f,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!po(s,o)||!po(f,d):!0}function e0(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function Es(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function n0(e){Ml(e)}function i0(e){console.error(e)}function a0(e){Ml(e)}function Wl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function s0(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Mf(e,i,s){return s=wa(s),s.tag=3,s.payload={element:null},s.callback=function(){Wl(e,i)},s}function r0(e){return e=wa(e),e.tag=3,e}function o0(e,i,s,o){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=o.value;e.payload=function(){return f(d)},e.callback=function(){s0(i,s,o)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){s0(i,s,o),typeof f!="function"&&(za===null?za=new Set([this]):za.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function hS(e,i,s,o,f){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&nr(i,s,f,!0),s=ni.current,s!==null){switch(s.tag){case 31:case 13:return gi===null?ic():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,o===Ll?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),qf(e,o,f)),!1;case 22:return s.flags|=65536,o===Ll?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),qf(e,o,f)),!1}throw Error(a(435,s.tag))}return qf(e,o,f),ic(),!1}if(be)return i=ni.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==Hu&&(e=Error(a(422),{cause:o}),_o(hi(e,s)))):(o!==Hu&&(i=Error(a(423),{cause:o}),_o(hi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=hi(o,s),f=Mf(e.stateNode,o,f),Qu(e,f),sn!==4&&(sn=2)),!1;var d=Error(a(520),{cause:o});if(d=hi(d,s),zo===null?zo=[d]:zo.push(d),sn!==4&&(sn=2),i===null)return!0;o=hi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Mf(s.stateNode,o,e),Qu(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(za===null||!za.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=r0(f),o0(f,e,s,o),Qu(s,f),!1}s=s.return}while(s!==null);return!1}var Ef=Error(a(461)),hn=!1;function Cn(e,i,s,o){i.child=e===null?fm(i,null,s,o):xs(i,e.child,s,o)}function l0(e,i,s,o,f){s=s.render;var d=i.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return _s(i),o=af(e,i,s,S,d,f),b=sf(),e!==null&&!hn?(rf(e,i,f),na(e,i,f)):(be&&b&&Bu(i),i.flags|=1,Cn(e,i,o,f),i.child)}function c0(e,i,s,o,f){if(e===null){var d=s.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,u0(e,i,d,o,f)):(e=Al(s.type,null,o,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Uf(e,f)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:po,s(S,o)&&e.ref===i.ref)return na(e,i,f)}return i.flags|=1,e=Ki(d,o),e.ref=i.ref,e.return=i,i.child=e}function u0(e,i,s,o,f){if(e!==null){var d=e.memoizedProps;if(po(d,o)&&e.ref===i.ref)if(hn=!1,i.pendingProps=o=d,Uf(e,f))(e.flags&131072)!==0&&(hn=!0);else return i.lanes=e.lanes,na(e,i,f)}return bf(e,i,s,o,f)}function f0(e,i,s,o){var f=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(o=i.child=e.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~d}else o=0,i.child=null;return h0(e,i,d,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(i,d!==null?d.cachePool:null),d!==null?pm(i,d):$u(),mm(i);else return o=i.lanes=536870912,h0(e,i,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(Dl(i,d.cachePool),pm(i,d),La(),i.memoizedState=null):(e!==null&&Dl(i,null),$u(),La());return Cn(e,i,f,s),i.child}function wo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function h0(e,i,s,o,f){var d=qu();return d=d===null?null:{parent:un._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&Dl(i,null),$u(),mm(i),e!==null&&nr(e,i,o,!0),i.childLanes=f,null}function Yl(e,i){return i=Zl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function d0(e,i,s){return xs(i,e.child,null,s),e=Yl(i,i.pendingProps),e.flags|=2,ii(i),i.memoizedState=null,e}function dS(e,i,s){var o=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=Yl(i,o),i.lanes=536870912,wo(null,e);if(ef(i),(e=qe)?(e=Tg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ba!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=Kp(e),s.return=i,i.child=s,An=i,qe=null)):e=null,e===null)throw Aa(i);return i.lanes=536870912,null}return Yl(i,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(ef(i),f)if(i.flags&256)i.flags&=-257,i=d0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(hn||nr(e,i,s,!1),f=(s&e.childLanes)!==0,hn||f){if(o=We,o!==null&&(S=Oi(o,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,ds(e,S),jn(o,e,S),Ef;ic(),i=d0(e,i,s)}else e=d.treeContext,qe=_i(S.nextSibling),An=i,be=!0,Ta=null,mi=!1,e!==null&&$p(i,e),i=Yl(i,o),i.flags|=4096;return i}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ql(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function bf(e,i,s,o,f){return _s(i),s=af(e,i,s,o,void 0,f),o=sf(),e!==null&&!hn?(rf(e,i,f),na(e,i,f)):(be&&o&&Bu(i),i.flags|=1,Cn(e,i,s,f),i.child)}function p0(e,i,s,o,f,d){return _s(i),i.updateQueue=null,s=_m(i,o,s,f),gm(e),o=sf(),e!==null&&!hn?(rf(e,i,d),na(e,i,d)):(be&&o&&Bu(i),i.flags|=1,Cn(e,i,s,d),i.child)}function m0(e,i,s,o,f){if(_s(i),i.stateNode===null){var d=Js,S=s.contextType;typeof S=="object"&&S!==null&&(d=Rn(S)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},ju(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?Rn(S):Js,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Sf(i,s,S,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&xf.enqueueReplaceState(d,d.state,null),bo(i,o,d,f),Eo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,I=Es(s,b);d.props=I;var $=d.context,ut=s.contextType;S=Js,typeof ut=="object"&&ut!==null&&(S=Rn(ut));var gt=s.getDerivedStateFromProps;ut=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,ut||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||$!==S)&&e0(i,d,o,S),Ca=!1;var tt=i.memoizedState;d.state=tt,bo(i,o,d,f),Eo(),$=i.memoizedState,b||tt!==$||Ca?(typeof gt=="function"&&(Sf(i,s,gt,o),$=i.memoizedState),(I=Ca||t0(i,s,I,o,tt,$,S))?(ut||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=$),d.props=o,d.state=$,d.context=S,o=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Ku(e,i),S=i.memoizedProps,ut=Es(s,S),d.props=ut,gt=i.pendingProps,tt=d.context,$=s.contextType,I=Js,typeof $=="object"&&$!==null&&(I=Rn($)),b=s.getDerivedStateFromProps,($=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==gt||tt!==I)&&e0(i,d,o,I),Ca=!1,tt=i.memoizedState,d.state=tt,bo(i,o,d,f),Eo();var ot=i.memoizedState;S!==gt||tt!==ot||Ca||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof b=="function"&&(Sf(i,s,b,o),ot=i.memoizedState),(ut=Ca||t0(i,s,ut,o,tt,ot,I)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ot,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ot,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ot),d.props=o,d.state=ot,d.context=I,o=ut):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,ql(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=xs(i,e.child,null,f),i.child=xs(i,null,s,f)):Cn(e,i,s,f),i.memoizedState=d.state,e=i.child):e=na(e,i,f),e}function g0(e,i,s,o){return ms(),i.flags|=256,Cn(e,i,s,o),i.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:sm()}}function Rf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=si),e}function _0(e,i,s){var o=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(be){if(f?Ua(i):La(),(e=qe)?(e=Tg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ba!==null?{id:zi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=Kp(e),s.return=i,i.child=s,An=i,qe=null)):e=null,e===null)throw Aa(i);return ch(e)?i.lanes=32:i.lanes=536870912,null}var b=o.children;return o=o.fallback,f?(La(),f=i.mode,b=Zl({mode:"hidden",children:b},f),o=ps(o,f,s,null),b.return=i,o.return=i,b.sibling=o,i.child=b,o=i.child,o.memoizedState=Af(s),o.childLanes=Rf(e,S,s),i.memoizedState=Tf,wo(null,o)):(Ua(i),Cf(i,b))}var I=e.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(d)i.flags&256?(Ua(i),i.flags&=-257,i=wf(e,i,s)):i.memoizedState!==null?(La(),i.child=e.child,i.flags|=128,i=null):(La(),b=o.fallback,f=i.mode,o=Zl({mode:"visible",children:o.children},f),b=ps(b,f,s,null),b.flags|=2,o.return=i,b.return=i,o.sibling=b,i.child=o,xs(i,e.child,null,s),o=i.child,o.memoizedState=Af(s),o.childLanes=Rf(e,S,s),i.memoizedState=Tf,i=wo(null,o));else if(Ua(i),ch(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(a(419)),o.stack="",o.digest=S,_o({value:o,source:null,stack:null}),i=wf(e,i,s)}else if(hn||nr(e,i,s,!1),S=(s&e.childLanes)!==0,hn||S){if(S=We,S!==null&&(o=Oi(S,s),o!==0&&o!==I.retryLane))throw I.retryLane=o,ds(e,o),jn(S,e,o),Ef;lh(b)||ic(),i=wf(e,i,s)}else lh(b)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,qe=_i(b.nextSibling),An=i,be=!0,Ta=null,mi=!1,e!==null&&$p(i,e),i=Cf(i,o.children),i.flags|=4096);return i}return f?(La(),b=o.fallback,f=i.mode,I=e.child,$=I.sibling,o=Ki(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?b=Ki($,b):(b=ps(b,f,s,null),b.flags|=2),b.return=i,o.return=i,o.sibling=b,i.child=o,wo(null,o),o=i.child,b=e.child.memoizedState,b===null?b=Af(s):(f=b.cachePool,f!==null?(I=un._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=sm(),b={baseLanes:b.baseLanes|s,cachePool:f}),o.memoizedState=b,o.childLanes=Rf(e,S,s),i.memoizedState=Tf,wo(e.child,o)):(Ua(i),s=e.child,e=s.sibling,s=Ki(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function Cf(e,i){return i=Zl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zl(e,i){return e=ei(22,e,null,i),e.lanes=0,e}function wf(e,i,s){return xs(i,e.child,null,s),e=Cf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function v0(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ku(e.return,i,s)}function Df(e,i,s,o,f,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=s,S.tailMode=f,S.treeForkCount=d)}function y0(e,i,s){var o=i.pendingProps,f=o.revealOrder,d=o.tail;o=o.children;var S=on.current,b=(S&2)!==0;if(b?(S=S&1|2,i.flags|=128):S&=1,St(on,S),Cn(e,i,o,s),o=be?go:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&v0(e,s,i);else if(e.tag===19)v0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&zl(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Df(i,!1,f,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&zl(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Df(i,!0,s,null,d,o);break;case"together":Df(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function na(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Pa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(nr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ki(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ki(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Uf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function pS(e,i,s){switch(i.tag){case 3:Vt(i,i.stateNode.containerInfo),Ra(i,un,e.memoizedState.cache),ms();break;case 27:case 5:ie(i);break;case 4:Vt(i,i.stateNode.containerInfo);break;case 10:Ra(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ef(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ua(i),i.flags|=128,null):(s&i.child.childLanes)!==0?_0(e,i,s):(Ua(i),e=na(e,i,s),e!==null?e.sibling:null);Ua(i);break;case 19:var f=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(nr(e,i,s,!1),o=(s&i.childLanes)!==0),f){if(o)return y0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),St(on,on.current),o)break;return null;case 22:return i.lanes=0,f0(e,i,s,i.pendingProps);case 24:Ra(i,un,e.memoizedState.cache)}return na(e,i,s)}function S0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)hn=!0;else{if(!Uf(e,s)&&(i.flags&128)===0)return hn=!1,pS(e,i,s);hn=(e.flags&131072)!==0}else hn=!1,be&&(i.flags&1048576)!==0&&Jp(i,go,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=ys(i.elementType),i.type=e,typeof e=="function")Pu(e)?(o=Es(e,o),i.tag=1,i=m0(null,i,e,o,s)):(i.tag=0,i=bf(null,i,e,o,s));else{if(e!=null){var f=e.$$typeof;if(f===C){i.tag=11,i=l0(null,i,e,o,s);break t}else if(f===z){i.tag=14,i=c0(null,i,e,o,s);break t}}throw i=ft(e)||e,Error(a(306,i,""))}}return i;case 0:return bf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,f=Es(o,i.pendingProps),m0(e,i,o,f,s);case 3:t:{if(Vt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var d=i.memoizedState;f=d.element,Ku(e,i),bo(i,o,null,s);var S=i.memoizedState;if(o=S.cache,Ra(i,un,o),o!==d.cache&&Xu(i,[un],s,!0),Eo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=g0(e,i,o,s);break t}else if(o!==f){f=hi(Error(a(424)),i),_o(f),i=g0(e,i,o,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=_i(e.firstChild),An=i,be=!0,Ta=null,mi=!0,s=fm(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),o===f){i=na(e,i,s);break t}Cn(e,i,o,s)}i=i.child}return i;case 26:return ql(e,i),e===null?(s=Ug(i.type,null,i.pendingProps,null))?i.memoizedState=s:be||(s=i.type,e=i.pendingProps,o=uc(Et.current).createElement(s),o[nn]=i,o[Tn]=e,wn(o,s,e),vt(o),i.stateNode=o):i.memoizedState=Ug(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ie(i),e===null&&be&&(o=i.stateNode=Cg(i.type,i.pendingProps,Et.current),An=i,mi=!0,f=qe,Ha(i.type)?(uh=f,qe=_i(o.firstChild)):qe=f),Cn(e,i,i.pendingProps.children,s),ql(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&be&&((f=o=qe)&&(o=XS(o,i.type,i.pendingProps,mi),o!==null?(i.stateNode=o,An=i,qe=_i(o.firstChild),mi=!1,f=!0):f=!1),f||Aa(i)),ie(i),f=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,sh(f,d)?o=null:S!==null&&sh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=af(e,i,sS,null,null,s),Xo._currentValue=f),ql(e,i),Cn(e,i,o,s),i.child;case 6:return e===null&&be&&((e=s=qe)&&(s=WS(s,i.pendingProps,mi),s!==null?(i.stateNode=s,An=i,qe=null,e=!0):e=!1),e||Aa(i)),null;case 13:return _0(e,i,s);case 4:return Vt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=xs(i,null,o,s):Cn(e,i,o,s),i.child;case 11:return l0(e,i,i.type,i.pendingProps,s);case 7:return Cn(e,i,i.pendingProps,s),i.child;case 8:return Cn(e,i,i.pendingProps.children,s),i.child;case 12:return Cn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ra(i,i.type,o.value),Cn(e,i,o.children,s),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,_s(i),f=Rn(f),o=o(f),i.flags|=1,Cn(e,i,o,s),i.child;case 14:return c0(e,i,i.type,i.pendingProps,s);case 15:return u0(e,i,i.type,i.pendingProps,s);case 19:return y0(e,i,s);case 31:return dS(e,i,s);case 22:return f0(e,i,s,i.pendingProps);case 24:return _s(i),o=Rn(un),e===null?(f=qu(),f===null&&(f=We,d=Wu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:o,cache:f},ju(i),Ra(i,un,f)):((e.lanes&s)!==0&&(Ku(e,i),bo(i,null,null,s),Eo()),f=e.memoizedState,d=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ra(i,un,o)):(o=d.cache,Ra(i,un,o),o!==f.cache&&Xu(i,[un],s,!0))),Cn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ia(e){e.flags|=4}function Lf(e,i,s,o,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(q0())e.flags|=8192;else throw Ss=Ll,Zu}else e.flags&=-16777217}function x0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zg(i))if(q0())e.flags|=8192;else throw Ss=Ll,Zu}function jl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?mn():536870912,e.lanes|=i,pr|=i)}function Do(e,i){if(!be)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function mS(e,i,s){var o=i.pendingProps;switch(Fu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return Ze(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),$i(un),Ht(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(er(i)?ia(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Gu())),Ze(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(ia(i),d!==null?(Ze(i),x0(i,d)):(Ze(i),Lf(i,f,null,o,s))):d?d!==e.memoizedState?(ia(i),Ze(i),x0(i,d)):(Ze(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&ia(i),Ze(i),Lf(i,f,e,o,s)),null;case 27:if(ze(i),s=Et.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ia(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}e=j.current,er(i)?tm(i):(e=Cg(f,o,s),i.stateNode=e,ia(i))}return Ze(i),null;case 5:if(ze(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ia(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}if(d=j.current,er(i))tm(i);else{var S=uc(Et.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(f,{is:o.is}):S.createElement(f)}}d[nn]=i,d[Tn]=o;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(wn(d,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ia(i)}}return Ze(i),Lf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ia(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=Et.current,er(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,f=An,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[nn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||_g(e.nodeValue,s)),e||Aa(i,!0)}else e=uc(e).createTextNode(o),e[nn]=i,i.stateNode=e}return Ze(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=er(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[nn]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),e=!1}else s=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ii(i),i):(ii(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ze(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=er(i),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[nn]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),f=!1}else f=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ii(i),i):(ii(i),null)}return ii(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==f&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),jl(i,i.updateQueue),Ze(i),null);case 4:return Ht(),e===null&&th(i.stateNode.containerInfo),Ze(i),null;case 10:return $i(i.type),Ze(i),null;case 19:if(nt(on),o=i.memoizedState,o===null)return Ze(i),null;if(f=(i.flags&128)!==0,d=o.rendering,d===null)if(f)Do(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=zl(e),d!==null){for(i.flags|=128,Do(o,!1),e=d.updateQueue,i.updateQueue=e,jl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)jp(s,e),s=s.sibling;return St(on,on.current&1|2),be&&Qi(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&ht()>tc&&(i.flags|=128,f=!0,Do(o,!1),i.lanes=4194304)}else{if(!f)if(e=zl(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,jl(i,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!be)return Ze(i),null}else 2*ht()-o.renderingStartTime>tc&&s!==536870912&&(i.flags|=128,f=!0,Do(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ht(),e.sibling=null,s=on.current,St(on,f?s&1|2:s&1),be&&Qi(i,o.treeForkCount),e):(Ze(i),null);case 22:case 23:return ii(i),tf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),s=i.updateQueue,s!==null&&jl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&nt(vs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),$i(un),Ze(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function gS(e,i){switch(Fu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return $i(un),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ze(i),null;case 31:if(i.memoizedState!==null){if(ii(i),i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ii(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(on),null;case 4:return Ht(),null;case 10:return $i(i.type),null;case 22:case 23:return ii(i),tf(),e!==null&&nt(vs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return $i(un),null;case 25:return null;default:return null}}function M0(e,i){switch(Fu(i),i.tag){case 3:$i(un),Ht();break;case 26:case 27:case 5:ze(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&ii(i);break;case 13:ii(i);break;case 19:nt(on);break;case 10:$i(i.type);break;case 22:case 23:ii(i),tf(),e!==null&&nt(vs);break;case 24:$i(un)}}function Uo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var f=o.next;s=f;do{if((s.tag&e)===e){o=void 0;var d=s.create,S=s.inst;o=d(),S.destroy=o}s=s.next}while(s!==f)}}catch(b){Pe(i,i.return,b)}}function Na(e,i,s){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var d=f.next;o=d;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,f=i;var I=s,$=b;try{$()}catch(ut){Pe(f,I,ut)}}}o=o.next}while(o!==d)}}catch(ut){Pe(i,i.return,ut)}}function E0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{dm(i,s)}catch(o){Pe(e,e.return,o)}}}function b0(e,i,s){s.props=Es(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Pe(e,i,o)}}function Lo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(f){Pe(e,i,f)}}function Bi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(f){Pe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Pe(e,i,f)}else s.current=null}function T0(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(f){Pe(e,e.return,f)}}function Nf(e,i,s){try{var o=e.stateNode;BS(o,e.type,s,i),o[Tn]=i}catch(f){Pe(e,e.return,f)}}function A0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||A0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Zi));else if(o!==4&&(o===27&&Ha(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Pf(e,i,s),e=e.sibling;e!==null;)Pf(e,i,s),e=e.sibling}function Kl(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Ha(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Kl(e,i,s),e=e.sibling;e!==null;)Kl(e,i,s),e=e.sibling}function R0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);wn(i,o,s),i[nn]=e,i[Tn]=s}catch(d){Pe(e,e.return,d)}}var aa=!1,dn=!1,zf=!1,C0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function _S(e,i){if(e=e.containerInfo,ih=_c,e=Hp(e),Cu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var f=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var S=0,b=-1,I=-1,$=0,ut=0,gt=e,tt=null;e:for(;;){for(var ot;gt!==s||f!==0&&gt.nodeType!==3||(b=S+f),gt!==d||o!==0&&gt.nodeType!==3||(I=S+o),gt.nodeType===3&&(S+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)tt=gt,gt=ot;for(;;){if(gt===e)break e;if(tt===s&&++$===f&&(b=S),tt===d&&++ut===o&&(I=S),(ot=gt.nextSibling)!==null)break;gt=tt,tt=gt.parentNode}gt=ot}s=b===-1||I===-1?null:{start:b,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(ah={focusedElem:e,selectionRange:s},_c=!1,Mn=i;Mn!==null;)if(i=Mn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Mn=e;else for(;Mn!==null;){switch(i=Mn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Ft=Es(s.type,f);e=o.getSnapshotBeforeUpdate(Ft,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Pe(s,s.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)oh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Mn=e;break}Mn=i.return}}function w0(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ra(e,s),o&4&&Uo(5,s);break;case 1:if(ra(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){Pe(s,s.return,S)}else{var f=Es(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Pe(s,s.return,S)}}o&64&&E0(s),o&512&&Lo(s,s.return);break;case 3:if(ra(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{dm(e,i)}catch(S){Pe(s,s.return,S)}}break;case 27:i===null&&o&4&&R0(s);case 26:case 5:ra(e,s),i===null&&o&4&&T0(s),o&512&&Lo(s,s.return);break;case 12:ra(e,s);break;case 31:ra(e,s),o&4&&L0(e,s);break;case 13:ra(e,s),o&4&&N0(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=AS.bind(null,s),YS(e,s))));break;case 22:if(o=s.memoizedState!==null||aa,!o){i=i!==null&&i.memoizedState!==null||dn,f=aa;var d=dn;aa=o,(dn=i)&&!d?oa(e,s,(s.subtreeFlags&8772)!==0):ra(e,s),aa=f,dn=d}break;case 30:break;default:ra(e,s)}}function D0(e){var i=e.alternate;i!==null&&(e.alternate=null,D0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&A(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Wn=!1;function sa(e,i,s){for(s=s.child;s!==null;)U0(e,i,s),s=s.sibling}function U0(e,i,s){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Zt,s)}catch{}switch(s.tag){case 26:dn||Bi(s,i),sa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:dn||Bi(s,i);var o=Je,f=Wn;Ha(s.type)&&(Je=s.stateNode,Wn=!1),sa(e,i,s),Go(s.stateNode),Je=o,Wn=f;break;case 5:dn||Bi(s,i);case 6:if(o=Je,f=Wn,Je=null,sa(e,i,s),Je=o,Wn=f,Je!==null)if(Wn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(s.stateNode)}catch(d){Pe(s,i,d)}else try{Je.removeChild(s.stateNode)}catch(d){Pe(s,i,d)}break;case 18:Je!==null&&(Wn?(e=Je,Eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Mr(e)):Eg(Je,s.stateNode));break;case 4:o=Je,f=Wn,Je=s.stateNode.containerInfo,Wn=!0,sa(e,i,s),Je=o,Wn=f;break;case 0:case 11:case 14:case 15:Na(2,s,i),dn||Na(4,s,i),sa(e,i,s);break;case 1:dn||(Bi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&b0(s,i,o)),sa(e,i,s);break;case 21:sa(e,i,s);break;case 22:dn=(o=dn)||s.memoizedState!==null,sa(e,i,s),dn=o;break;default:sa(e,i,s)}}function L0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(s){Pe(i,i.return,s)}}}function N0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(s){Pe(i,i.return,s)}}function vS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new C0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new C0),i;default:throw Error(a(435,e.tag))}}function Ql(e,i){var s=vS(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var f=RS.bind(null,e,o);o.then(f,f)}})}function Yn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var f=s[o],d=e,S=i,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Ha(b.type)){Je=b.stateNode,Wn=!1;break t}break;case 5:Je=b.stateNode,Wn=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,Wn=!0;break t}b=b.return}if(Je===null)throw Error(a(160));U0(d,S,f),Je=null,Wn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)O0(i,e),i=i.sibling}var bi=null;function O0(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(i,e),qn(e),o&4&&(Na(3,e,e.return),Uo(3,e),Na(5,e,e.return));break;case 1:Yn(i,e),qn(e),o&512&&(dn||s===null||Bi(s,s.return)),o&64&&aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var f=bi;if(Yn(i,e),qn(e),o&512&&(dn||s===null||Bi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(o){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ls]||d[nn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(o),f.head.insertBefore(d,f.querySelector("head > title"))),wn(d,o,s),d[nn]=e,vt(d),o=d;break t;case"link":var S=Og("link","href",f).get(o+(s.href||""));if(S){for(var b=0;b<S.length;b++)if(d=S[b],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(b,1);break e}}d=f.createElement(o),wn(d,o,s),f.head.appendChild(d);break;case"meta":if(S=Og("meta","content",f).get(o+(s.content||""))){for(b=0;b<S.length;b++)if(d=S[b],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(b,1);break e}}d=f.createElement(o),wn(d,o,s),f.head.appendChild(d);break;default:throw Error(a(468,o))}d[nn]=e,vt(d),o=d}e.stateNode=o}else Pg(f,e.type,e.stateNode);else e.stateNode=Ng(f,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?Pg(f,e.type,e.stateNode):Ng(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Yn(i,e),qn(e),o&512&&(dn||s===null||Bi(s,s.return)),s!==null&&o&4&&Nf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Yn(i,e),qn(e),o&512&&(dn||s===null||Bi(s,s.return)),e.flags&32){f=e.stateNode;try{Ws(f,"")}catch(Ft){Pe(e,e.return,Ft)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,Nf(e,f,s!==null?s.memoizedProps:f)),o&1024&&(zf=!0);break;case 6:if(Yn(i,e),qn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Ft){Pe(e,e.return,Ft)}}break;case 3:if(dc=null,f=bi,bi=fc(i.containerInfo),Yn(i,e),bi=f,qn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Mr(i.containerInfo)}catch(Ft){Pe(e,e.return,Ft)}zf&&(zf=!1,P0(e));break;case 4:o=bi,bi=fc(e.stateNode.containerInfo),Yn(i,e),qn(e),bi=o;break;case 12:Yn(i,e),qn(e);break;case 31:Yn(i,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 13:Yn(i,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($l=ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 22:f=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,$=aa,ut=dn;if(aa=$||f,dn=ut||I,Yn(i,e),dn=ut,aa=$,qn(e),o&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||aa||dn||bs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(d=I.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=I.stateNode;var gt=I.memoizedProps.style,tt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ft){Pe(I,I.return,Ft)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(Ft){Pe(I,I.return,Ft)}}}else if(i.tag===18){if(s===null){I=i;try{var ot=I.stateNode;f?bg(ot,!0):bg(I.stateNode,!1)}catch(Ft){Pe(I,I.return,Ft)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Ql(e,s))));break;case 19:Yn(i,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 30:break;case 21:break;default:Yn(i,e),qn(e)}}function qn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(A0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=Of(e);Kl(e,d,f);break;case 5:var S=s.stateNode;s.flags&32&&(Ws(S,""),s.flags&=-33);var b=Of(e);Kl(e,b,S);break;case 3:case 4:var I=s.stateNode.containerInfo,$=Of(e);Pf(e,$,I);break;default:throw Error(a(161))}}catch(ut){Pe(e,e.return,ut)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function P0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;P0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ra(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)w0(e,i.alternate,i),i=i.sibling}function bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Na(4,i,i.return),bs(i);break;case 1:Bi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&b0(i,i.return,s),bs(i);break;case 27:Go(i.stateNode);case 26:case 5:Bi(i,i.return),bs(i);break;case 22:i.memoizedState===null&&bs(i);break;case 30:bs(i);break;default:bs(i)}e=e.sibling}}function oa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:oa(f,d,s),Uo(4,d);break;case 1:if(oa(f,d,s),o=d,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){Pe(o,o.return,$)}if(o=d,f=o.updateQueue,f!==null){var b=o.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)hm(I[f],b)}catch($){Pe(o,o.return,$)}}s&&S&64&&E0(d),Lo(d,d.return);break;case 27:R0(d);case 26:case 5:oa(f,d,s),s&&o===null&&S&4&&T0(d),Lo(d,d.return);break;case 12:oa(f,d,s);break;case 31:oa(f,d,s),s&&S&4&&L0(f,d);break;case 13:oa(f,d,s),s&&S&4&&N0(f,d);break;case 22:d.memoizedState===null&&oa(f,d,s),Lo(d,d.return);break;case 30:break;default:oa(f,d,s)}i=i.sibling}}function If(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&vo(s))}function Bf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e))}function Ti(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)z0(e,i,s,o),i=i.sibling}function z0(e,i,s,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ti(e,i,s,o),f&2048&&Uo(9,i);break;case 1:Ti(e,i,s,o);break;case 3:Ti(e,i,s,o),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e)));break;case 12:if(f&2048){Ti(e,i,s,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,b=d.onPostCommit;typeof b=="function"&&b(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Pe(i,i.return,I)}}else Ti(e,i,s,o);break;case 31:Ti(e,i,s,o);break;case 13:Ti(e,i,s,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ti(e,i,s,o):No(e,i):d._visibility&2?Ti(e,i,s,o):(d._visibility|=2,fr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),f&2048&&If(S,i);break;case 24:Ti(e,i,s,o),f&2048&&Bf(i.alternate,i);break;default:Ti(e,i,s,o)}}function fr(e,i,s,o,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,b=s,I=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:fr(d,S,b,I,f),Uo(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?fr(d,S,b,I,f):No(d,S):(ut._visibility|=2,fr(d,S,b,I,f)),f&&$&2048&&If(S.alternate,S);break;case 24:fr(d,S,b,I,f),f&&$&2048&&Bf(S.alternate,S);break;default:fr(d,S,b,I,f)}i=i.sibling}}function No(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,f=o.flags;switch(o.tag){case 22:No(s,o),f&2048&&If(o.alternate,o);break;case 24:No(s,o),f&2048&&Bf(o.alternate,o);break;default:No(s,o)}i=i.sibling}}var Oo=8192;function hr(e,i,s){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)I0(e,i,s),e=e.sibling}function I0(e,i,s){switch(e.tag){case 26:hr(e,i,s),e.flags&Oo&&e.memoizedState!==null&&ax(s,bi,e.memoizedState,e.memoizedProps);break;case 5:hr(e,i,s);break;case 3:case 4:var o=bi;bi=fc(e.stateNode.containerInfo),hr(e,i,s),bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,hr(e,i,s),Oo=o):hr(e,i,s));break;default:hr(e,i,s)}}function B0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Po(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Mn=o,H0(o,e)}B0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)F0(e),e=e.sibling}function F0(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Jl(e)):Po(e);break;default:Po(e)}}function Jl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Mn=o,H0(o,e)}B0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Na(8,i,i.return),Jl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Jl(i));break;default:Jl(i)}e=e.sibling}}function H0(e,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Na(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Mn=o;else t:for(s=e;Mn!==null;){o=Mn;var f=o.sibling,d=o.return;if(D0(o),o===s){Mn=null;break t}if(f!==null){f.return=d,Mn=f;break t}Mn=d}}}var yS={getCacheForType:function(e){var i=Rn(un),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Rn(un).controller.signal}},SS=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,me=null,Me=0,Oe=0,ai=null,Oa=!1,dr=!1,Ff=!1,la=0,sn=0,Pa=0,Ts=0,Hf=0,si=0,pr=0,zo=null,Zn=null,Gf=!1,$l=0,G0=0,tc=1/0,ec=null,za=null,_n=0,Ia=null,mr=null,ca=0,Vf=0,kf=null,V0=null,Io=0,Xf=null;function ri(){return(Le&2)!==0&&Me!==0?Me&-Me:P.T!==null?Kf():ao()}function k0(){if(si===0)if((Me&536870912)===0||be){var e=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function jn(e,i,s){(e===We&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(gr(e,0),Ba(e,Me,si,!1)),bn(e,s),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(Ts|=s),sn===4&&Ba(e,Me,si,!1)),Fi(e))}function X0(e,i,s){if((Le&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||te(e,i),f=o?ES(e,i):Yf(e,i,!0),d=o;do{if(f===0){dr&&!o&&Ba(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!xS(s)){f=Yf(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var b=e;f=zo;var I=b.current.memoizedState.isDehydrated;if(I&&(gr(b,S).flags|=256),S=Yf(b,S,!1),S!==2){if(Ff&&!I){b.errorRecoveryDisabledLanes|=d,Ts|=d,f=4;break t}d=Zn,Zn=f,d!==null&&(Zn===null?Zn=d:Zn.push.apply(Zn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){gr(e,0),Ba(e,i,0,!0);break}t:{switch(o=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ba(o,i,si,!Oa);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=$l+300-ht(),10<f)){if(Ba(o,i,si,!Oa),Dt(o,0,!0)!==0)break t;ca=i,o.timeoutHandle=xg(W0.bind(null,o,s,Zn,ec,Gf,i,si,Ts,pr,Oa,d,"Throttled",-0,0),f);break t}W0(o,s,Zn,ec,Gf,i,si,Ts,pr,Oa,d,null,-0,0)}}break}while(!0);Fi(e)}function W0(e,i,s,o,f,d,S,b,I,$,ut,gt,tt,ot){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},I0(i,d,gt);var Ft=(d&62914560)===d?$l-ht():(d&4194048)===d?G0-ht():0;if(Ft=sx(gt,Ft),Ft!==null){ca=d,e.cancelPendingCommit=Ft($0.bind(null,e,i,d,s,o,f,S,b,I,ut,gt,null,tt,ot)),Ba(e,d,S,!$);return}}$0(e,i,d,s,o,f,S,b,I)}function xS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var f=s[o],d=f.getSnapshot;f=f.value;try{if(!ti(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ba(e,i,s,o){i&=~Hf,i&=~Ts,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var f=i;0<f;){var d=31-$t(f),S=1<<d;o[d]=-1,f&=~S}s!==0&&no(e,s,i)}function nc(){return(Le&6)===0?(Bo(0),!1):!0}function Wf(){if(me!==null){if(Oe===0)var e=me.return;else e=me,Ji=gs=null,of(e),rr=null,So=0,e=me;for(;e!==null;)M0(e.alternate,e),e=e.return;me=null}}function gr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,GS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ca=0,Wf(),We=e,me=s=Ki(e.current,null),Me=i,Oe=0,ai=null,Oa=!1,dr=te(e,i),Ff=!1,pr=si=Hf=Ts=Pa=sn=0,Zn=zo=null,Gf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var f=31-$t(o),d=1<<f;i|=e[f],o&=~d}return la=i,El(),s}function Y0(e,i){re=null,P.H=Co,i===sr||i===Ul?(i=lm(),Oe=3):i===Zu?(i=lm(),Oe=4):Oe=i===Ef?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,me===null&&(sn=1,Wl(e,hi(i,e.current)))}function q0(){var e=ni.current;return e===null?!0:(Me&4194048)===Me?gi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===gi:!1}function Z0(){var e=P.H;return P.H=Co,e===null?Co:e}function j0(){var e=P.A;return P.A=yS,e}function ic(){sn=4,Oa||(Me&4194048)!==Me&&ni.current!==null||(dr=!0),(Pa&134217727)===0&&(Ts&134217727)===0||We===null||Ba(We,Me,si,!1)}function Yf(e,i,s){var o=Le;Le|=2;var f=Z0(),d=j0();(We!==e||Me!==i)&&(ec=null,gr(e,i)),i=!1;var S=sn;t:do try{if(Oe!==0&&me!==null){var b=me,I=ai;switch(Oe){case 8:Wf(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(i=!0);var $=Oe;if(Oe=0,ai=null,_r(e,b,I,$),s&&dr){S=0;break t}break;default:$=Oe,Oe=0,ai=null,_r(e,b,I,$)}}MS(),S=sn;break}catch(ut){Y0(e,ut)}while(!0);return i&&e.shellSuspendCounter++,Ji=gs=null,Le=o,P.H=f,P.A=d,me===null&&(We=null,Me=0,El()),S}function MS(){for(;me!==null;)K0(me)}function ES(e,i){var s=Le;Le|=2;var o=Z0(),f=j0();We!==e||Me!==i?(ec=null,tc=ht()+500,gr(e,i)):dr=te(e,i);t:do try{if(Oe!==0&&me!==null){i=me;var d=ai;e:switch(Oe){case 1:Oe=0,ai=null,_r(e,i,d,1);break;case 2:case 9:if(rm(d)){Oe=0,ai=null,Q0(i);break}i=function(){Oe!==2&&Oe!==9||We!==e||(Oe=7),Fi(e)},d.then(i,i);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:rm(d)?(Oe=0,ai=null,Q0(i)):(Oe=0,ai=null,_r(e,i,d,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var b=me;if(S?zg(S):b.stateNode.complete){Oe=0,ai=null;var I=b.sibling;if(I!==null)me=I;else{var $=b.return;$!==null?(me=$,ac($)):me=null}break e}}Oe=0,ai=null,_r(e,i,d,5);break;case 6:Oe=0,ai=null,_r(e,i,d,6);break;case 8:Wf(),sn=6;break t;default:throw Error(a(462))}}bS();break}catch(ut){Y0(e,ut)}while(!0);return Ji=gs=null,P.H=o,P.A=f,Le=s,me!==null?0:(We=null,Me=0,El(),sn)}function bS(){for(;me!==null&&!T();)K0(me)}function K0(e){var i=S0(e.alternate,e,la);e.memoizedProps=e.pendingProps,i===null?ac(e):me=i}function Q0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=p0(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=p0(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:of(i);default:M0(s,i),i=me=jp(i,la),i=S0(s,i,la)}e.memoizedProps=e.pendingProps,i===null?ac(e):me=i}function _r(e,i,s,o){Ji=gs=null,of(i),rr=null,So=0;var f=i.return;try{if(hS(e,f,i,s,Me)){sn=1,Wl(e,hi(s,e.current)),me=null;return}}catch(d){if(f!==null)throw me=f,d;sn=1,Wl(e,hi(s,e.current)),me=null;return}i.flags&32768?(be||o===1?e=!0:dr||(Me&536870912)!==0?e=!1:(Oa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),J0(i,e)):ac(i)}function ac(e){var i=e;do{if((i.flags&32768)!==0){J0(i,Oa);return}e=i.return;var s=mS(i.alternate,i,la);if(s!==null){me=s;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);sn===0&&(sn=5)}function J0(e,i){do{var s=gS(e.alternate,e);if(s!==null){s.flags&=32767,me=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=s}while(e!==null);sn=6,me=null}function $0(e,i,s,o,f,d,S,b,I){e.cancelPendingCommit=null;do sc();while(_n!==0);if((Le&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Nu,xi(e,s,d,S,b,I),e===We&&(me=We=null,Me=0),mr=i,Ia=e,ca=s,Vf=d,kf=f,V0=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CS(wt,function(){return ag(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,f=Q.p,Q.p=2,S=Le,Le|=4;try{_S(e,i,s)}finally{Le=S,Q.p=f,P.T=o}}_n=1,tg(),eg(),ng()}}function tg(){if(_n===1){_n=0;var e=Ia,i=mr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var o=Q.p;Q.p=2;var f=Le;Le|=4;try{O0(i,e);var d=ah,S=Hp(e.containerInfo),b=d.focusedElem,I=d.selectionRange;if(S!==b&&b&&b.ownerDocument&&Fp(b.ownerDocument.documentElement,b)){if(I!==null&&Cu(b)){var $=I.start,ut=I.end;if(ut===void 0&&(ut=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ut,b.value.length);else{var gt=b.ownerDocument||document,tt=gt&&gt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Ft=b.textContent.length,Jt=Math.min(I.start,Ft),He=I.end===void 0?Jt:Math.min(I.end,Ft);!ot.extend&&Jt>He&&(S=He,He=Jt,Jt=S);var Z=Bp(b,Jt),G=Bp(b,He);if(Z&&G&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var J=gt.createRange();J.setStart(Z.node,Z.offset),ot.removeAllRanges(),Jt>He?(ot.addRange(J),ot.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),ot.addRange(J))}}}}for(gt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var dt=gt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}_c=!!ih,ah=ih=null}finally{Le=f,Q.p=o,P.T=s}}e.current=i,_n=2}}function eg(){if(_n===2){_n=0;var e=Ia,i=mr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var o=Q.p;Q.p=2;var f=Le;Le|=4;try{w0(e,i.alternate,i)}finally{Le=f,Q.p=o,P.T=s}}_n=3}}function ng(){if(_n===4||_n===3){_n=0,et();var e=Ia,i=mr,s=ca,o=V0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,mr=Ia=null,ig(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(za=null),ks(s),i=i.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Zt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=P.T,f=Q.p,Q.p=2,P.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];d(b.value,{componentStack:b.stack})}}finally{P.T=i,Q.p=f}}(ca&3)!==0&&sc(),Fi(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===Xf?Io++:(Io=0,Xf=e):Io=0,Bo(0)}}function ig(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,vo(i)))}function sc(){return tg(),eg(),ng(),ag()}function ag(){if(_n!==5)return!1;var e=Ia,i=Vf;Vf=0;var s=ks(ca),o=P.T,f=Q.p;try{Q.p=32>s?32:s,P.T=null,s=kf,kf=null;var d=Ia,S=ca;if(_n=0,mr=Ia=null,ca=0,(Le&6)!==0)throw Error(a(331));var b=Le;if(Le|=4,F0(d.current),z0(d,d.current,S,s),Le=b,Bo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Zt,d)}catch{}return!0}finally{Q.p=f,P.T=o,ig(e,i)}}function sg(e,i,s){i=hi(s,i),i=Mf(e.stateNode,i,2),e=Da(e,i,2),e!==null&&(bn(e,2),Fi(e))}function Pe(e,i,s){if(e.tag===3)sg(e,e,s);else for(;i!==null;){if(i.tag===3){sg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){e=hi(s,e),s=r0(2),o=Da(i,s,2),o!==null&&(o0(s,o,i,e),bn(o,2),Fi(o));break}}i=i.return}}function qf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new SS;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(s)||(Ff=!0,f.add(s),e=TS.bind(null,e,i,s),i.then(e,e))}function TS(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,We===e&&(Me&s)===s&&(sn===4||sn===3&&(Me&62914560)===Me&&300>ht()-$l?(Le&2)===0&&gr(e,0):Hf|=s,pr===Me&&(pr=0)),Fi(e)}function rg(e,i){i===0&&(i=mn()),e=ds(e,i),e!==null&&(bn(e,i),Fi(e))}function AS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),rg(e,s)}function RS(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),rg(e,s)}function CS(e,i){return Yt(e,i)}var rc=null,vr=null,Zf=!1,oc=!1,jf=!1,Fa=0;function Fi(e){e!==vr&&e.next===null&&(vr===null?rc=vr=e:vr=vr.next=e),oc=!0,Zf||(Zf=!0,DS())}function Bo(e,i){if(!jf&&oc){jf=!0;do for(var s=!1,o=rc;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var d=0;else{var S=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-$t(42|e)+1)-1,d&=f&~(S&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,ug(o,d))}else d=Me,d=Dt(o,o===We?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||te(o,d)||(s=!0,ug(o,d));o=o.next}while(s);jf=!1}}function wS(){og()}function og(){oc=Zf=!1;var e=0;Fa!==0&&HS()&&(e=Fa);for(var i=ht(),s=null,o=rc;o!==null;){var f=o.next,d=lg(o,i);d===0?(o.next=null,s===null?rc=f:s.next=f,f===null&&(vr=s)):(s=o,(e!==0||(d&3)!==0)&&(oc=!0)),o=f}_n!==0&&_n!==5||Bo(e),Fa!==0&&(Fa=0)}function lg(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-$t(d),b=1<<S,I=f[S];I===-1?((b&s)===0||(b&o)!==0)&&(f[S]=Qe(b,i)):I<=i&&(e.expiredLanes|=b),d&=~b}if(i=We,s=Me,s=Dt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||te(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&L(o),ks(s)){case 2:case 8:s=Xt;break;case 32:s=wt;break;case 268435456:s=Se;break;default:s=wt}return o=cg.bind(null,e),s=Yt(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function cg(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(sc()&&e.callbackNode!==s)return null;var o=Me;return o=Dt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(X0(e,o,i),lg(e,ht()),e.callbackNode!=null&&e.callbackNode===s?cg.bind(null,e):null)}function ug(e,i){if(sc())return null;X0(e,i,!0)}function DS(){VS(function(){(Le&6)!==0?Yt(mt,wS):og()})}function Kf(){if(Fa===0){var e=ir;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Fa=e}return Fa}function fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function hg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function US(e,i,s,o,f){if(i==="submit"&&s&&s.stateNode===f){var d=fg((f[Tn]||null).action),S=o.submitter;S&&(i=(i=S[Tn]||null)?fg(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var b=new yl("action","action",null,o,f);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fa!==0){var I=S?hg(f,S):new FormData(f);gf(s,{pending:!0,data:I,method:f.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=S?hg(f,S):new FormData(f),gf(s,{pending:!0,data:I,method:f.method,action:d},d,I))},currentTarget:f}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var Jf=Lu[Qf],LS=Jf.toLowerCase(),NS=Jf[0].toUpperCase()+Jf.slice(1);Ei(LS,"on"+NS)}Ei(kp,"onAnimationEnd"),Ei(Xp,"onAnimationIteration"),Ei(Wp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(jy,"onTransitionRun"),Ei(Ky,"onTransitionStart"),Ei(Qy,"onTransitionCancel"),Ei(Yp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function dg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],f=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var b=o[S],I=b.instance,$=b.currentTarget;if(b=b.listener,I!==d&&f.isPropagationStopped())break t;d=b,f.currentTarget=$;try{d(f)}catch(ut){Ml(ut)}f.currentTarget=null,d=I}else for(S=0;S<o.length;S++){if(b=o[S],I=b.instance,$=b.currentTarget,b=b.listener,I!==d&&f.isPropagationStopped())break t;d=b,f.currentTarget=$;try{d(f)}catch(ut){Ml(ut)}f.currentTarget=null,d=I}}}}function ge(e,i){var s=i[so];s===void 0&&(s=i[so]=new Set);var o=e+"__bubble";s.has(o)||(pg(i,e,2,!1),s.add(o))}function $f(e,i,s){var o=0;i&&(o|=4),pg(s,e,o,i)}var lc="_reactListening"+Math.random().toString(36).slice(2);function th(e){if(!e[lc]){e[lc]=!0,Ut.forEach(function(s){s!=="selectionchange"&&(OS.has(s)||$f(s,!1,e),$f(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[lc]||(i[lc]=!0,$f("selectionchange",!1,i))}}function pg(e,i,s,o){switch(kg(i)){case 2:var f=lx;break;case 8:f=cx;break;default:f=mh}s=f.bind(null,i,s,e),f=void 0,!yu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function eh(e,i,s,o,f){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===f)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;b!==null;){if(S=Y(b),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=d=S;continue t}b=b.parentNode}}o=o.return}yp(function(){var $=d,ut=_u(s),gt=[];t:{var tt=qp.get(e);if(tt!==void 0){var ot=yl,Ft=e;switch(e){case"keypress":if(_l(s)===0)break t;case"keydown":case"keyup":ot=Ry;break;case"focusin":Ft="focus",ot=Eu;break;case"focusout":Ft="blur",ot=Eu;break;case"beforeblur":case"afterblur":ot=Eu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Dy;break;case kp:case Xp:case Wp:ot=vy;break;case Yp:ot=Ly;break;case"scroll":case"scrollend":ot=dy;break;case"wheel":ot=Oy;break;case"copy":case"cut":case"paste":ot=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=bp;break;case"toggle":case"beforetoggle":ot=zy}var Jt=(i&4)!==0,He=!Jt&&(e==="scroll"||e==="scrollend"),Z=Jt?tt!==null?tt+"Capture":null:tt;Jt=[];for(var G=$,J;G!==null;){var dt=G;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||Z===null||(dt=ro(G,Z),dt!=null&&Jt.push(Ho(G,dt,J))),He)break;G=G.return}0<Jt.length&&(tt=new ot(tt,Ft,null,s,ut),gt.push({event:tt,listeners:Jt}))}}if((i&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&s!==gu&&(Ft=s.relatedTarget||s.fromElement)&&(Y(Ft)||Ft[Yi]))break t;if((ot||tt)&&(tt=ut.window===ut?ut:(tt=ut.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Ft=s.relatedTarget||s.toElement,ot=$,Ft=Ft?Y(Ft):null,Ft!==null&&(He=c(Ft),Jt=Ft.tag,Ft!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(Ft=null)):(ot=null,Ft=$),ot!==Ft)){if(Jt=Mp,dt="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=bp,dt="onPointerLeave",Z="onPointerEnter",G="pointer"),He=ot==null?tt:st(ot),J=Ft==null?tt:st(Ft),tt=new Jt(dt,G+"leave",ot,s,ut),tt.target=He,tt.relatedTarget=J,dt=null,Y(ut)===$&&(Jt=new Jt(Z,G+"enter",Ft,s,ut),Jt.target=J,Jt.relatedTarget=He,dt=Jt),He=dt,ot&&Ft)e:{for(Jt=PS,Z=ot,G=Ft,J=0,dt=Z;dt;dt=Jt(dt))J++;dt=0;for(var Kt=G;Kt;Kt=Jt(Kt))dt++;for(;0<J-dt;)Z=Jt(Z),J--;for(;0<dt-J;)G=Jt(G),dt--;for(;J--;){if(Z===G||G!==null&&Z===G.alternate){Jt=Z;break e}Z=Jt(Z),G=Jt(G)}Jt=null}else Jt=null;ot!==null&&mg(gt,tt,ot,Jt,!1),Ft!==null&&He!==null&&mg(gt,He,Ft,Jt,!0)}}t:{if(tt=$?st($):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var we=Lp;else if(Dp(tt))if(Np)we=Yy;else{we=Xy;var kt=ky}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?$&&mu($.elementType)&&(we=Lp):we=Wy;if(we&&(we=we(e,$))){Up(gt,we,s,ut);break t}kt&&kt(e,tt,$),e==="focusout"&&$&&tt.type==="number"&&$.memoizedProps.value!=null&&gn(tt,"number",tt.value)}switch(kt=$?st($):window,e){case"focusin":(Dp(kt)||kt.contentEditable==="true")&&(js=kt,wu=$,mo=null);break;case"focusout":mo=wu=js=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Gp(gt,s,ut);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":Gp(gt,s,ut)}var le;if(Tu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Zs?Cp(e,s)&&(Ee="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ee="onCompositionStart");Ee&&(Tp&&s.locale!=="ko"&&(Zs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Zs&&(le=Sp()):(Ea=ut,Su="value"in Ea?Ea.value:Ea.textContent,Zs=!0)),kt=cc($,Ee),0<kt.length&&(Ee=new Ep(Ee,e,null,s,ut),gt.push({event:Ee,listeners:kt}),le?Ee.data=le:(le=wp(s),le!==null&&(Ee.data=le)))),(le=By?Fy(e,s):Hy(e,s))&&(Ee=cc($,"onBeforeInput"),0<Ee.length&&(kt=new Ep("onBeforeInput","beforeinput",null,s,ut),gt.push({event:kt,listeners:Ee}),kt.data=le)),US(gt,e,$,s,ut)}dg(gt,i)})}function Ho(e,i,s){return{instance:e,listener:i,currentTarget:s}}function cc(e,i){for(var s=i+"Capture",o=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ro(e,s),f!=null&&o.unshift(Ho(e,f,d)),f=ro(e,i),f!=null&&o.push(Ho(e,f,d))),e.tag===3)return o;e=e.return}return[]}function PS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mg(e,i,s,o,f){for(var d=i._reactName,S=[];s!==null&&s!==o;){var b=s,I=b.alternate,$=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||$===null||(I=$,f?($=ro(s,d),$!=null&&S.unshift(Ho(s,$,I))):f||($=ro(s,d),$!=null&&S.push(Ho(s,$,I)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var zS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(zS,`
`).replace(IS,"")}function _g(e,i){return i=gg(i),gg(e)===i}function Fe(e,i,s,o,f,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Ws(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Ws(e,""+o);break;case"className":Xe(e,"class",o);break;case"tabIndex":Xe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(e,s,o);break;case"style":_p(e,o,d);break;case"data":if(i!=="object"){Xe(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ml(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Fe(e,i,"name",f.name,f,null),Fe(e,i,"formEncType",f.formEncType,f,null),Fe(e,i,"formMethod",f.formMethod,f,null),Fe(e,i,"formTarget",f.formTarget,f,null)):(Fe(e,i,"encType",f.encType,f,null),Fe(e,i,"method",f.method,f,null),Fe(e,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ml(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":se(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":se(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":se(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":se(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":se(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":se(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":se(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":se(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":se(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=fy.get(s)||s,Ye(e,s,o))}}function nh(e,i,s,o,f,d){switch(s){case"style":_p(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Ws(e,o):(typeof o=="number"||typeof o=="bigint")&&Ws(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[Tn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,f);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Ye(e,s,o)}}}function wn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,d,S,s,null)}}f&&Fe(e,i,"srcSet",s.srcSet,s,null),o&&Fe(e,i,"src",s.src,s,null);return;case"input":ge("invalid",e);var b=d=S=f=null,I=null,$=null;for(o in s)if(s.hasOwnProperty(o)){var ut=s[o];if(ut!=null)switch(o){case"name":f=ut;break;case"type":S=ut;break;case"checked":I=ut;break;case"defaultChecked":$=ut;break;case"value":d=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:Fe(e,i,o,ut,s,null)}}Fn(e,d,b,I,$,S,f,!1);return;case"select":ge("invalid",e),o=S=d=null;for(f in s)if(s.hasOwnProperty(f)&&(b=s[f],b!=null))switch(f){case"value":d=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Fe(e,i,f,b,s,null)}i=d,s=S,e.multiple=!!o,i!=null?rn(e,!!o,i,!1):s!=null&&rn(e,!!o,s,!0);return;case"textarea":ge("invalid",e),d=f=o=null;for(S in s)if(s.hasOwnProperty(S)&&(b=s[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":f=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Fe(e,i,S,b,s,null)}Pi(e,o,f,d);return;case"option":for(I in s)s.hasOwnProperty(I)&&(o=s[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Fe(e,i,I,o,s,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Fo.length;o++)ge(Fo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(o=s[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,$,o,s,null)}return;default:if(mu(i)){for(ut in s)s.hasOwnProperty(ut)&&(o=s[ut],o!==void 0&&nh(e,i,ut,o,s,void 0));return}}for(b in s)s.hasOwnProperty(b)&&(o=s[b],o!=null&&Fe(e,i,b,o,s,null))}function BS(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,b=null,I=null,$=null,ut=null;for(ot in s){var gt=s[ot];if(s.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=gt;default:o.hasOwnProperty(ot)||Fe(e,i,ot,null,o,gt)}}for(var tt in o){var ot=o[tt];if(gt=s[tt],o.hasOwnProperty(tt)&&(ot!=null||gt!=null))switch(tt){case"type":d=ot;break;case"name":f=ot;break;case"checked":$=ot;break;case"defaultChecked":ut=ot;break;case"value":S=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:ot!==gt&&Fe(e,i,tt,ot,o,gt)}}Ln(e,S,b,I,$,ut,d,f);return;case"select":ot=S=b=tt=null;for(d in s)if(I=s[d],s.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":ot=I;default:o.hasOwnProperty(d)||Fe(e,i,d,null,o,I)}for(f in o)if(d=o[f],I=s[f],o.hasOwnProperty(f)&&(d!=null||I!=null))switch(f){case"value":tt=d;break;case"defaultValue":b=d;break;case"multiple":S=d;default:d!==I&&Fe(e,i,f,d,o,I)}i=b,s=S,o=ot,tt!=null?rn(e,!!s,tt,!1):!!o!=!!s&&(i!=null?rn(e,!!s,i,!0):rn(e,!!s,s?[]:"",!1));return;case"textarea":ot=tt=null;for(b in s)if(f=s[b],s.hasOwnProperty(b)&&f!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Fe(e,i,b,null,o,f)}for(S in o)if(f=o[S],d=s[S],o.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":tt=f;break;case"defaultValue":ot=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Fe(e,i,S,f,o,d)}Xs(e,tt,ot);return;case"option":for(var Ft in s)tt=s[Ft],s.hasOwnProperty(Ft)&&tt!=null&&!o.hasOwnProperty(Ft)&&(Ft==="selected"?e.selected=!1:Fe(e,i,Ft,null,o,tt));for(I in o)tt=o[I],ot=s[I],o.hasOwnProperty(I)&&tt!==ot&&(tt!=null||ot!=null)&&(I==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Fe(e,i,I,tt,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in s)tt=s[Jt],s.hasOwnProperty(Jt)&&tt!=null&&!o.hasOwnProperty(Jt)&&Fe(e,i,Jt,null,o,tt);for($ in o)if(tt=o[$],ot=s[$],o.hasOwnProperty($)&&tt!==ot&&(tt!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,i));break;default:Fe(e,i,$,tt,o,ot)}return;default:if(mu(i)){for(var He in s)tt=s[He],s.hasOwnProperty(He)&&tt!==void 0&&!o.hasOwnProperty(He)&&nh(e,i,He,void 0,o,tt);for(ut in o)tt=o[ut],ot=s[ut],!o.hasOwnProperty(ut)||tt===ot||tt===void 0&&ot===void 0||nh(e,i,ut,tt,o,ot);return}}for(var Z in s)tt=s[Z],s.hasOwnProperty(Z)&&tt!=null&&!o.hasOwnProperty(Z)&&Fe(e,i,Z,null,o,tt);for(gt in o)tt=o[gt],ot=s[gt],!o.hasOwnProperty(gt)||tt===ot||tt==null&&ot==null||Fe(e,i,gt,tt,o,ot)}function vg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function FS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var f=s[o],d=f.transferSize,S=f.initiatorType,b=f.duration;if(d&&b&&vg(S)){for(S=0,b=f.responseEnd,o+=1;o<s.length;o++){var I=s[o],$=I.startTime;if($>b)break;var ut=I.transferSize,gt=I.initiatorType;ut&&vg(gt)&&(I=I.responseEnd,S+=ut*(I<b?1:(b-$)/(I-$)))}if(--o,i+=8*(d+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ih=null,ah=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function sh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rh=null;function HS(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(e){return Mg.resolve(null).then(e).catch(kS)}:xg;function kS(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Eg(e,i){var s=i,o=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(f),Mr(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Go(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Go(s);for(var d=s.firstChild;d;){var S=d.nextSibling,b=d.nodeName;d[ls]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&Go(e.ownerDocument.body);s=f}while(s);Mr(i)}function bg(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function oh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":oh(s),A(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function XS(e,i,s,o){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ls])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function WS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=_i(e.nextSibling),e===null))return null;return e}function Tg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=_i(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function YS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var uh=null;function Ag(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return _i(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function Rg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function Cg(e,i,s){switch(i=uc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Go(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);A(e)}var vi=new Map,wg=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=Q.d;Q.d={f:qS,r:ZS,D:jS,C:KS,L:QS,m:JS,X:tx,S:$S,M:ex};function qS(){var e=ua.f(),i=nc();return e||i}function ZS(e){var i=it(e);i!==null&&i.tag===5&&i.type==="form"?Ym(i):ua.r(e)}var yr=typeof document>"u"?null:document;function Dg(e,i,s){var o=yr;if(o&&typeof i=="string"&&i){var f=pe(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),wg.has(f)||(wg.add(f),e={rel:e,crossOrigin:s,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),wn(i,"link",e),vt(i),o.head.appendChild(i)))}}function jS(e){ua.D(e),Dg("dns-prefetch",e,null)}function KS(e,i){ua.C(e,i),Dg("preconnect",e,i)}function QS(e,i,s){ua.L(e,i,s);var o=yr;if(o&&e&&i){var f='link[rel="preload"][as="'+pe(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+pe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+pe(s.imageSizes)+'"]')):f+='[href="'+pe(e)+'"]';var d=f;switch(i){case"style":d=Sr(e);break;case"script":d=xr(e)}vi.has(d)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),vi.set(d,e),o.querySelector(f)!==null||i==="style"&&o.querySelector(Vo(d))||i==="script"&&o.querySelector(ko(d))||(i=o.createElement("link"),wn(i,"link",e),vt(i),o.head.appendChild(i)))}}function JS(e,i){ua.m(e,i);var s=yr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+pe(o)+'"][href="'+pe(e)+'"]',d=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=xr(e)}if(!vi.has(d)&&(e=_({rel:"modulepreload",href:e},i),vi.set(d,e),s.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ko(d)))return}o=s.createElement("link"),wn(o,"link",e),vt(o),s.head.appendChild(o)}}}function $S(e,i,s){ua.S(e,i,s);var o=yr;if(o&&e){var f=q(o).hoistableStyles,d=Sr(e);i=i||"default";var S=f.get(d);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(Vo(d)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=vi.get(d))&&fh(e,s);var I=S=o.createElement("link");vt(I),wn(I,"link",e),I._p=new Promise(function($,ut){I.onload=$,I.onerror=ut}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,hc(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:b},f.set(d,S)}}}function tx(e,i){ua.X(e,i);var s=yr;if(s&&e){var o=q(s).hoistableScripts,f=xr(e),d=o.get(f);d||(d=s.querySelector(ko(f)),d||(e=_({src:e,async:!0},i),(i=vi.get(f))&&hh(e,i),d=s.createElement("script"),vt(d),wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function ex(e,i){ua.M(e,i);var s=yr;if(s&&e){var o=q(s).hoistableScripts,f=xr(e),d=o.get(f);d||(d=s.querySelector(ko(f)),d||(e=_({src:e,async:!0,type:"module"},i),(i=vi.get(f))&&hh(e,i),d=s.createElement("script"),vt(d),wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function Ug(e,i,s,o){var f=(f=Et.current)?fc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Sr(s.href),s=q(f).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Sr(s.href);var d=q(f).hoistableStyles,S=d.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=f.querySelector(Vo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),vi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(e,s),d||nx(f,e,s,S.state))),i&&o===null)throw Error(a(528,""));return S}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=xr(s),s=q(f).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Sr(e){return'href="'+pe(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function Lg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function nx(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),wn(i,"link",s),vt(i),e.head.appendChild(i))}function xr(e){return'[src="'+pe(e)+'"]'}function ko(e){return"script[async]"+e}function Ng(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+pe(s.href)+'"]');if(o)return i.instance=o,vt(o),o;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),vt(o),wn(o,"style",f),hc(o,s.precedence,e),i.instance=o;case"stylesheet":f=Sr(s.href);var d=e.querySelector(Vo(f));if(d)return i.state.loading|=4,i.instance=d,vt(d),d;o=Lg(s),(f=vi.get(f))&&fh(o,f),d=(e.ownerDocument||e).createElement("link"),vt(d);var S=d;return S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),wn(d,"link",o),i.state.loading|=4,hc(d,s.precedence,e),i.instance=d;case"script":return d=xr(s.src),(f=e.querySelector(ko(d)))?(i.instance=f,vt(f),f):(o=s,(f=vi.get(d))&&(o=_({},s),hh(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),vt(f),wn(f,"link",o),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,hc(o,s.precedence,e));return i.instance}function hc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,d=f,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===i)d=b;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function fh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function hh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var dc=null;function Og(e,i,s){if(dc===null){var o=new Map,f=dc=new Map;f.set(s,o)}else f=dc,o=f.get(s),o||(o=new Map,f.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[ls]||d[nn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var b=o.get(S);b?b.push(d):o.set(S,[d])}}return o}function Pg(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function ix(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ax(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Sr(o.href),d=i.querySelector(Vo(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=pc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,vt(d);return}d=i.ownerDocument||i,o=Lg(o),(f=vi.get(f))&&fh(o,f),d=d.createElement("link"),vt(d);var S=d;S._p=new Promise(function(b,I){S.onload=b,S.onerror=I}),wn(d,"link",o),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=pc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var dh=0;function sx(e,i){return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&dh===0&&(dh=62500*FS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>dh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mc=null;function gc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mc=new Map,i.forEach(rx,e),mc=null,pc.call(e))}function rx(e,i){if(!(i.state.loading&4)){var s=mc.get(e);if(s)var o=s.get(null);else{s=new Map,mc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),o=S)}o&&s.set(null,o)}f=i.instance,S=f.getAttribute("data-precedence"),d=s.get(S)||o,d===o&&s.set(null,f),s.set(S,f),this.count++,o=pc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Xo={$$typeof:U,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function ox(e,i,s,o,f,d,S,b,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ig(e,i,s,o,f,d,S,b,I,$,ut,gt){return e=new ox(e,i,s,S,I,$,ut,gt,b),i=1,d===!0&&(i|=24),d=ei(3,null,null,i),e.current=d,d.stateNode=e,i=Wu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},ju(d),e}function Bg(e){return e?(e=Js,e):Js}function Fg(e,i,s,o,f,d){f=Bg(f),o.context===null?o.context=f:o.pendingContext=f,o=wa(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Da(e,o,i),s!==null&&(jn(s,e,i),Mo(s,e,i))}function Hg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function ph(e,i){Hg(e,i),(e=e.alternate)&&Hg(e,i)}function Gg(e){if(e.tag===13||e.tag===31){var i=ds(e,67108864);i!==null&&jn(i,e,67108864),ph(e,67108864)}}function Vg(e){if(e.tag===13||e.tag===31){var i=ri();i=rs(i);var s=ds(e,i);s!==null&&jn(s,e,i),ph(e,i)}}var _c=!0;function lx(e,i,s,o){var f=P.T;P.T=null;var d=Q.p;try{Q.p=2,mh(e,i,s,o)}finally{Q.p=d,P.T=f}}function cx(e,i,s,o){var f=P.T;P.T=null;var d=Q.p;try{Q.p=8,mh(e,i,s,o)}finally{Q.p=d,P.T=f}}function mh(e,i,s,o){if(_c){var f=gh(o);if(f===null)eh(e,i,o,vc,s),Xg(e,o);else if(fx(f,e,i,s,o))o.stopPropagation();else if(Xg(e,o),i&4&&-1<ux.indexOf(e)){for(;f!==null;){var d=it(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ct(d.pendingLanes);if(S!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var I=1<<31-$t(S);b.entanglements[1]|=I,S&=~I}Fi(d),(Le&6)===0&&(tc=ht()+500,Bo(0))}}break;case 31:case 13:b=ds(d,2),b!==null&&jn(b,d,2),nc(),ph(d,2)}if(d=gh(o),d===null&&eh(e,i,o,vc,s),d===f)break;f=d}f!==null&&o.stopPropagation()}else eh(e,i,o,null,s)}}function gh(e){return e=_u(e),_h(e)}var vc=null;function _h(e){if(vc=null,e=Y(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return vc=e,null}function kg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case Xt:return 8;case wt:case It:return 32;case Se:return 268435456;default:return 32}default:return 32}}var vh=!1,Ga=null,Va=null,ka=null,Wo=new Map,Yo=new Map,Xa=[],ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xg(e,i){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(i.pointerId)}}function qo(e,i,s,o,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[f]},i!==null&&(i=it(i),i!==null&&Gg(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function fx(e,i,s,o,f){switch(i){case"focusin":return Ga=qo(Ga,e,i,s,o,f),!0;case"dragenter":return Va=qo(Va,e,i,s,o,f),!0;case"mouseover":return ka=qo(ka,e,i,s,o,f),!0;case"pointerover":var d=f.pointerId;return Wo.set(d,qo(Wo.get(d)||null,e,i,s,o,f)),!0;case"gotpointercapture":return d=f.pointerId,Yo.set(d,qo(Yo.get(d)||null,e,i,s,o,f)),!0}return!1}function Wg(e){var i=Y(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,os(e.priority,function(){Vg(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,os(e.priority,function(){Vg(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=gh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);gu=o,s.target.dispatchEvent(o),gu=null}else return i=it(s),i!==null&&Gg(i),e.blockedOn=s,!1;i.shift()}return!0}function Yg(e,i,s){yc(e)&&s.delete(i)}function hx(){vh=!1,Ga!==null&&yc(Ga)&&(Ga=null),Va!==null&&yc(Va)&&(Va=null),ka!==null&&yc(ka)&&(ka=null),Wo.forEach(Yg),Yo.forEach(Yg)}function Sc(e,i){e.blockedOn===i&&(e.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hx)))}var xc=null;function qg(e){xc!==e&&(xc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],f=e[i+2];if(typeof o!="function"){if(_h(o||s)===null)continue;break}var d=it(s);d!==null&&(e.splice(i,3),i-=3,gf(d,{pending:!0,data:f,method:s.method,action:o},o,f))}}))}function Mr(e){function i(I){return Sc(I,e)}Ga!==null&&Sc(Ga,e),Va!==null&&Sc(Va,e),ka!==null&&Sc(ka,e),Wo.forEach(i),Yo.forEach(i);for(var s=0;s<Xa.length;s++){var o=Xa[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Xa.length&&(s=Xa[0],s.blockedOn===null);)Wg(s),s.blockedOn===null&&Xa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var f=s[o],d=s[o+1],S=f[Tn]||null;if(typeof d=="function")S||qg(s);else if(S){var b=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[Tn]||null)b=S.formAction;else if(_h(f)!==null)continue}else b=S.action;typeof b=="function"?s[o+1]=b:(s.splice(o,3),o-=3),qg(s)}}}function Zg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function yh(e){this._internalRoot=e}Mc.prototype.render=yh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=ri();Fg(s,o,e,i,null,null)},Mc.prototype.unmount=yh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Fg(e.current,2,null,e,null,null),nc(),i[Yi]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=ao();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Xa.length&&i!==0&&i<Xa[s].priority;s++);Xa.splice(s,0,e),s===0&&Wg(e)}};var jg=t.version;if(jg!=="19.2.6")throw Error(a(527,jg,"19.2.6"));Q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var dx={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Zt=Ec.inject(dx),Wt=Ec}catch{}}return Zo.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",f=n0,d=i0,S=a0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=Ig(e,1,!1,null,null,s,o,null,f,d,S,Zg),e[Yi]=i.current,th(e),new yh(i)},Zo.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,f="",d=n0,S=i0,b=a0,I=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.formState!==void 0&&(I=s.formState)),i=Ig(e,1,!0,i,s??null,o,f,I,d,S,b,Zg),i.context=Bg(null),s=i.current,o=ri(),o=rs(o),f=wa(o),f.callback=null,Da(s,f,o),s=o,i.current.lanes=s,bn(i,s),Fi(i),e[Yi]=i.current,th(e),new Mc(i)},Zo.version="19.2.6",Zo}var i_;function Mx(){if(i_)return xh.exports;i_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xh.exports=xx(),xh.exports}var Ex=Mx();const Qd="171",kr={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bx=0,a_=1,Tx=2,_v=1,vv=2,ga=3,as=0,Vn=1,va=2,ns=0,Xr=1,s_=2,r_=3,o_=4,Ax=5,Os=100,Rx=101,Cx=102,wx=103,Dx=104,Ux=200,Lx=201,Nx=202,Ox=203,od=204,ld=205,Px=206,zx=207,Ix=208,Bx=209,Fx=210,Hx=211,Gx=212,Vx=213,kx=214,cd=0,ud=1,fd=2,qr=3,hd=4,dd=5,pd=6,md=7,yv=0,Xx=1,Wx=2,is=0,Yx=1,qx=2,Zx=3,Sv=4,jx=5,Kx=6,Qx=7,xv=300,Zr=301,jr=302,gd=303,_d=304,lu=306,_a=1e3,zs=1001,vd=1002,Ni=1003,Jx=1004,bc=1005,Gi=1006,Th=1007,Is=1008,Ma=1009,Mv=1010,Ev=1011,rl=1012,Jd=1013,Bs=1014,ya=1015,ul=1016,$d=1017,tp=1018,Kr=1020,bv=35902,Tv=1021,Av=1022,Li=1023,Rv=1024,Cv=1025,Wr=1026,Qr=1027,wv=1028,ep=1029,Dv=1030,np=1031,ip=1033,Jc=33776,$c=33777,tu=33778,eu=33779,yd=35840,Sd=35841,xd=35842,Md=35843,Ed=36196,bd=37492,Td=37496,Ad=37808,Rd=37809,Cd=37810,wd=37811,Dd=37812,Ud=37813,Ld=37814,Nd=37815,Od=37816,Pd=37817,zd=37818,Id=37819,Bd=37820,Fd=37821,nu=36492,Hd=36494,Gd=36495,Uv=36283,Vd=36284,kd=36285,Xd=36286,$x=3200,tM=3201,Lv=0,eM=1,ts="",ci="srgb",Jr="srgb-linear",su="linear",Ge="srgb",Er=7680,l_=519,nM=512,iM=513,aM=514,Nv=515,sM=516,rM=517,oM=518,lM=519,c_=35044,u_="300 es",Sa=2e3,ru=2001;class Vs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,Wd=180/Math.PI;function to(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]).toLowerCase()}function fe(r,t,n){return Math.max(t,Math.min(n,r))}function cM(r,t){return(r%t+t)%t}function Ah(r,t,n){return(1-n)*r+n*t}function jo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uM={DEG2RAD:iu};class Ot{constructor(t=0,n=0){Ot.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(fe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*l+t.x,this.y=c*l+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,n,a,l,c,u,h,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,h,p,m)}set(t,n,a,l,c,u,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],m=a[1],g=a[4],_=a[7],y=a[2],x=a[5],E=a[8],R=l[0],M=l[3],v=l[6],O=l[1],U=l[4],C=l[7],k=l[2],B=l[5],z=l[8];return c[0]=u*R+h*O+p*k,c[3]=u*M+h*U+p*B,c[6]=u*v+h*C+p*z,c[1]=m*R+g*O+_*k,c[4]=m*M+g*U+_*B,c[7]=m*v+g*C+_*z,c[2]=y*R+x*O+E*k,c[5]=y*M+x*U+E*B,c[8]=y*v+x*C+E*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*u*g-n*h*m-a*c*g+a*h*p+l*c*m-l*u*p}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*u-h*m,y=h*p-g*c,x=m*c-u*p,E=n*_+a*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(l*m-g*a)*R,t[2]=(h*a-l*u)*R,t[3]=y*R,t[4]=(g*n-l*p)*R,t[5]=(l*c-h*n)*R,t[6]=x*R,t[7]=(a*p-m*n)*R,t[8]=(u*n-a*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,u,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*u+m*h)+u+t,-l*m,l*p,-l*(-m*u+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Rh.makeScale(t,n)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new ce;function Ov(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ou(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fM(){const r=ou("canvas");return r.style.display="block",r}const f_={};function Fr(r){r in f_||(f_[r]=!0,console.warn(r))}function hM(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function dM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const h_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const r={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ge&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ge&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?su:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Jr]:{primaries:t,whitePoint:a,transfer:su,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:a,transfer:Ge,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const Ue=mM();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class gM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{br===void 0&&(br=ou("canvas")),br.width=t.width,br.height=t.height;const a=br.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ou("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=xa(c[u]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(xa(n[a]/255)*255):n[a]=xa(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class Pv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=to(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,h=l.length;u<h;u++)l[u].isDataTexture?c.push(Ch(l[u].image)):c.push(Ch(l[u]))}else c=Ch(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class kn extends Vs{constructor(t=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,a=zs,l=zs,c=Gi,u=Is,h=Li,p=Ma,m=kn.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=to(),this.name="",this.source=new Pv(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case zs:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case zs:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=xv;kn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,n=0,a=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*l+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*l+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*l+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*l+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],y=p[1],x=p[5],E=p[9],R=p[2],M=p[6],v=p[10];if(Math.abs(g-y)<.01&&Math.abs(_-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+x+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,C=(x+1)/2,k=(v+1)/2,B=(g+y)/4,z=(_+R)/4,X=(E+M)/4;return U>C&&U>k?U<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(U),l=B/a,c=z/a):C>k?C<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),a=B/l,c=X/l):k<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),a=z/c,l=X/c),this.set(a,l,c,n),this}let O=Math.sqrt((M-E)*(M-E)+(_-R)*(_-R)+(y-g)*(y-g));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(_-R)/O,this.z=(y-g)/O,this.w=Math.acos((m+x+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this.w=fe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this.w=fe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Vs{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ke(0,0,t,n),this.scissorTest=!1,this.viewport=new ke(0,0,t,n);const l={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new kn(l,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,l=t.textures.length;a<l;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Pv(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends yM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class zv extends kn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends kn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,u,h){let p=a[l+0],m=a[l+1],g=a[l+2],_=a[l+3];const y=c[u+0],x=c[u+1],E=c[u+2],R=c[u+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=y,t[n+1]=x,t[n+2]=E,t[n+3]=R;return}if(_!==R||p!==y||m!==x||g!==E){let M=1-h;const v=p*y+m*x+g*E+_*R,O=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const k=Math.sqrt(U),B=Math.atan2(k,v*O);M=Math.sin(M*B)/k,h=Math.sin(h*B)/k}const C=h*O;if(p=p*M+y*C,m=m*M+x*C,g=g*M+E*C,_=_*M+R*C,M===1-h){const k=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=k,m*=k,g*=k,_*=k}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,l,c,u){const h=a[l],p=a[l+1],m=a[l+2],g=a[l+3],_=c[u],y=c[u+1],x=c[u+2],E=c[u+3];return t[n]=h*E+g*_+p*x-m*y,t[n+1]=p*E+g*y+m*_-h*x,t[n+2]=m*E+g*x+h*y-p*_,t[n+3]=g*E-h*_-p*y-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(l/2),_=h(c/2),y=p(a/2),x=p(l/2),E=p(c/2);switch(u){case"XYZ":this._x=y*g*_+m*x*E,this._y=m*x*_-y*g*E,this._z=m*g*E+y*x*_,this._w=m*g*_-y*x*E;break;case"YXZ":this._x=y*g*_+m*x*E,this._y=m*x*_-y*g*E,this._z=m*g*E-y*x*_,this._w=m*g*_+y*x*E;break;case"ZXY":this._x=y*g*_-m*x*E,this._y=m*x*_+y*g*E,this._z=m*g*E+y*x*_,this._w=m*g*_-y*x*E;break;case"ZYX":this._x=y*g*_-m*x*E,this._y=m*x*_+y*g*E,this._z=m*g*E-y*x*_,this._w=m*g*_+y*x*E;break;case"YZX":this._x=y*g*_+m*x*E,this._y=m*x*_+y*g*E,this._z=m*g*E-y*x*_,this._w=m*g*_-y*x*E;break;case"XZY":this._x=y*g*_-m*x*E,this._y=m*x*_-y*g*E,this._z=m*g*E+y*x*_,this._w=m*g*_+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],u=n[1],h=n[5],p=n[9],m=n[2],g=n[6],_=n[10],y=a+h+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-m)*x,this._z=(u-l)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-p)/x,this._x=.25*x,this._y=(l+u)/x,this._z=(c+m)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-m)/x,this._x=(l+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-l)/x,this._x=(c+m)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,u=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+u*h+l*m-c*p,this._y=l*g+u*p+c*h-a*m,this._z=c*g+u*m+a*p-l*h,this._w=u*g-a*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*l+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-n)*g)/m,y=Math.sin(n*g)/m;return this._w=u*_+this._w*y,this._x=a*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,n=0,a=0){V.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(p_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,u=t.y,h=t.z,p=t.w,m=2*(u*l-h*a),g=2*(h*n-c*l),_=2*(c*a-u*n);return this.x=n+p*m+u*_-h*g,this.y=a+p*g+h*m-c*_,this.z=l+p*_+c*g-u*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=fe(this.x,t.x,n.x),this.y=fe(this.y,t.y,n.y),this.z=fe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=fe(this.x,t,n),this.y=fe(this.y,t,n),this.z=fe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(fe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*u-a*p,this.z=a*h-l*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(fe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new V,p_=new Hs;class fl{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ai):Ai.fromBufferAttribute(c,u),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Tc.copy(a.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),Ac.subVectors(this.max,Ko),Tr.subVectors(t.a,Ko),Ar.subVectors(t.b,Ko),Rr.subVectors(t.c,Ko),Ya.subVectors(Ar,Tr),qa.subVectors(Rr,Ar),As.subVectors(Tr,Rr);let n=[0,-Ya.z,Ya.y,0,-qa.z,qa.y,0,-As.z,As.y,Ya.z,0,-Ya.x,qa.z,0,-qa.x,As.z,0,-As.x,-Ya.y,Ya.x,0,-qa.y,qa.x,0,-As.y,As.x,0];return!Dh(n,Tr,Ar,Rr,Ac)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,Tr,Ar,Rr,Ac))?!1:(Rc.crossVectors(Ya,qa),n=[Rc.x,Rc.y,Rc.z],Dh(n,Tr,Ar,Rr,Ac))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fa=[new V,new V,new V,new V,new V,new V,new V,new V],Ai=new V,Tc=new fl,Tr=new V,Ar=new V,Rr=new V,Ya=new V,qa=new V,As=new V,Ko=new V,Ac=new V,Rc=new V,Rs=new V;function Dh(r,t,n,a,l){for(let c=0,u=r.length-3;c<=u;c+=3){Rs.fromArray(r,c);const h=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),p=t.dot(Rs),m=n.dot(Rs),g=a.dot(Rs);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const xM=new fl,Qo=new V,Uh=new V;class ap{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):xM.setFromPoints(t).getCenter(a);let l=0;for(let c=0,u=t.length;c<u;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(Qo,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(Uh)),this.expandByPoint(Qo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ha=new V,Lh=new V,Cc=new V,Za=new V,Nh=new V,wc=new V,Oh=new V;class Iv{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ha.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,n),ha.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){Lh.copy(t).add(n).multiplyScalar(.5),Cc.copy(n).sub(t).normalize(),Za.copy(this.origin).sub(Lh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Cc),h=Za.dot(this.direction),p=-Za.dot(Cc),m=Za.lengthSq(),g=Math.abs(1-u*u);let _,y,x,E;if(g>0)if(_=u*p-h,y=u*h-p,E=c*g,_>=0)if(y>=-E)if(y<=E){const R=1/g;_*=R,y*=R,x=_*(_+u*y+2*h)+y*(u*_+y+2*p)+m}else y=c,_=Math.max(0,-(u*y+h)),x=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(u*y+h)),x=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-u*c+h)),y=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-c,-p),c),x=y*(y+2*p)+m):(_=Math.max(0,-(u*c+h)),y=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+y*(y+2*p)+m);else y=u>0?-c:c,_=Math.max(0,-(u*y+h)),x=-_*_+y*(y+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Lh).addScaledVector(Cc,y),x}intersectSphere(t,n){ha.subVectors(t.center,this.origin);const a=ha.dot(this.direction),l=ha.dot(ha)-a*a,c=t.radius*t.radius;if(l>c)return null;const u=Math.sqrt(c-l),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,u,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(a=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(a=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),g>=0?(c=(t.min.y-y.y)*g,u=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,u=(t.min.y-y.y)*g),a>u||c>l||((c>a||isNaN(a))&&(a=c),(u<l||isNaN(l))&&(l=u),_>=0?(h=(t.min.z-y.z)*_,p=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,p=(t.min.z-y.z)*_),a>p||h>l)||((h>a||a!==a)&&(a=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,n,a,l,c){Nh.subVectors(n,t),wc.subVectors(a,t),Oh.crossVectors(Nh,wc);let u=this.direction.dot(Oh),h;if(u>0){if(l)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Za.subVectors(this.origin,t);const p=h*this.direction.dot(wc.crossVectors(Za,wc));if(p<0)return null;const m=h*this.direction.dot(Nh.cross(Za));if(m<0||p+m>u)return null;const g=-h*Za.dot(Oh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,n,a,l,c,u,h,p,m,g,_,y,x,E,R,M){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,h,p,m,g,_,y,x,E,R,M)}set(t,n,a,l,c,u,h,p,m,g,_,y,x,E,R,M){const v=this.elements;return v[0]=t,v[4]=n,v[8]=a,v[12]=l,v[1]=c,v[5]=u,v[9]=h,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=y,v[3]=x,v[7]=E,v[11]=R,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),c=1/Cr.setFromMatrixColumn(t,1).length(),u=1/Cr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=u*g,x=u*_,E=h*g,R=h*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=x+E*m,n[5]=y-R*m,n[9]=-h*p,n[2]=R-y*m,n[6]=E+x*m,n[10]=u*p}else if(t.order==="YXZ"){const y=p*g,x=p*_,E=m*g,R=m*_;n[0]=y+R*h,n[4]=E*h-x,n[8]=u*m,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-E,n[6]=R+y*h,n[10]=u*p}else if(t.order==="ZXY"){const y=p*g,x=p*_,E=m*g,R=m*_;n[0]=y-R*h,n[4]=-u*_,n[8]=E+x*h,n[1]=x+E*h,n[5]=u*g,n[9]=R-y*h,n[2]=-u*m,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const y=u*g,x=u*_,E=h*g,R=h*_;n[0]=p*g,n[4]=E*m-x,n[8]=y*m+R,n[1]=p*_,n[5]=R*m+y,n[9]=x*m-E,n[2]=-m,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const y=u*p,x=u*m,E=h*p,R=h*m;n[0]=p*g,n[4]=R-y*_,n[8]=E*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-m*g,n[6]=x*_+E,n[10]=y-R*_}else if(t.order==="XZY"){const y=u*p,x=u*m,E=h*p,R=h*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=y*_+R,n[5]=u*g,n[9]=x*_-E,n[2]=E*_-x,n[6]=h*g,n[10]=R*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(MM,t,EM)}lookAt(t,n,a){const l=this.elements;return oi.subVectors(t,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ja.crossVectors(a,oi),ja.lengthSq()===0&&(Math.abs(a.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ja.crossVectors(a,oi)),ja.normalize(),Dc.crossVectors(oi,ja),l[0]=ja.x,l[4]=Dc.x,l[8]=oi.x,l[1]=ja.y,l[5]=Dc.y,l[9]=oi.y,l[2]=ja.z,l[6]=Dc.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],m=a[12],g=a[1],_=a[5],y=a[9],x=a[13],E=a[2],R=a[6],M=a[10],v=a[14],O=a[3],U=a[7],C=a[11],k=a[15],B=l[0],z=l[4],X=l[8],D=l[12],w=l[1],F=l[5],rt=l[9],at=l[13],ft=l[2],pt=l[6],P=l[10],Q=l[14],K=l[3],xt=l[7],bt=l[11],N=l[15];return c[0]=u*B+h*w+p*ft+m*K,c[4]=u*z+h*F+p*pt+m*xt,c[8]=u*X+h*rt+p*P+m*bt,c[12]=u*D+h*at+p*Q+m*N,c[1]=g*B+_*w+y*ft+x*K,c[5]=g*z+_*F+y*pt+x*xt,c[9]=g*X+_*rt+y*P+x*bt,c[13]=g*D+_*at+y*Q+x*N,c[2]=E*B+R*w+M*ft+v*K,c[6]=E*z+R*F+M*pt+v*xt,c[10]=E*X+R*rt+M*P+v*bt,c[14]=E*D+R*at+M*Q+v*N,c[3]=O*B+U*w+C*ft+k*K,c[7]=O*z+U*F+C*pt+k*xt,c[11]=O*X+U*rt+C*P+k*bt,c[15]=O*D+U*at+C*Q+k*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],u=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],y=t[10],x=t[14],E=t[3],R=t[7],M=t[11],v=t[15];return E*(+c*p*_-l*m*_-c*h*y+a*m*y+l*h*x-a*p*x)+R*(+n*p*x-n*m*y+c*u*y-l*u*x+l*m*g-c*p*g)+M*(+n*m*_-n*h*x-c*u*_+a*u*x+c*h*g-a*m*g)+v*(-l*h*g-n*p*_+n*h*y+l*u*_-a*u*y+a*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],y=t[10],x=t[11],E=t[12],R=t[13],M=t[14],v=t[15],O=_*M*m-R*y*m+R*p*x-h*M*x-_*p*v+h*y*v,U=E*y*m-g*M*m-E*p*x+u*M*x+g*p*v-u*y*v,C=g*R*m-E*_*m+E*h*x-u*R*x-g*h*v+u*_*v,k=E*_*p-g*R*p-E*h*y+u*R*y+g*h*M-u*_*M,B=n*O+a*U+l*C+c*k;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=O*z,t[1]=(R*y*c-_*M*c-R*l*x+a*M*x+_*l*v-a*y*v)*z,t[2]=(h*M*c-R*p*c+R*l*m-a*M*m-h*l*v+a*p*v)*z,t[3]=(_*p*c-h*y*c-_*l*m+a*y*m+h*l*x-a*p*x)*z,t[4]=U*z,t[5]=(g*M*c-E*y*c+E*l*x-n*M*x-g*l*v+n*y*v)*z,t[6]=(E*p*c-u*M*c-E*l*m+n*M*m+u*l*v-n*p*v)*z,t[7]=(u*y*c-g*p*c+g*l*m-n*y*m-u*l*x+n*p*x)*z,t[8]=C*z,t[9]=(E*_*c-g*R*c-E*a*x+n*R*x+g*a*v-n*_*v)*z,t[10]=(u*R*c-E*h*c+E*a*m-n*R*m-u*a*v+n*h*v)*z,t[11]=(g*h*c-u*_*c-g*a*m+n*_*m+u*a*x-n*h*x)*z,t[12]=k*z,t[13]=(g*R*l-E*_*l+E*a*y-n*R*y-g*a*M+n*_*M)*z,t[14]=(E*h*l-u*R*l-E*a*p+n*R*p+u*a*M-n*h*M)*z,t[15]=(u*_*l-g*h*l+g*a*p-n*_*p-u*a*y+n*h*y)*z,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,u=t.x,h=t.y,p=t.z,m=c*u,g=c*h;return this.set(m*u+a,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+a,g*p-l*u,0,m*p-l*h,g*p+l*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,u){return this.set(1,a,c,0,t,1,u,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,m=c+c,g=u+u,_=h+h,y=c*m,x=c*g,E=c*_,R=u*g,M=u*_,v=h*_,O=p*m,U=p*g,C=p*_,k=a.x,B=a.y,z=a.z;return l[0]=(1-(R+v))*k,l[1]=(x+C)*k,l[2]=(E-U)*k,l[3]=0,l[4]=(x-C)*B,l[5]=(1-(y+v))*B,l[6]=(M+O)*B,l[7]=0,l[8]=(E+U)*z,l[9]=(M-O)*z,l[10]=(1-(y+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;let c=Cr.set(l[0],l[1],l[2]).length();const u=Cr.set(l[4],l[5],l[6]).length(),h=Cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const m=1/c,g=1/u,_=1/h;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,n.setFromRotationMatrix(Ri),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,l,c,u,h=Sa){const p=this.elements,m=2*c/(n-t),g=2*c/(a-l),_=(n+t)/(n-t),y=(a+l)/(a-l);let x,E;if(h===Sa)x=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===ru)x=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,u,h=Sa){const p=this.elements,m=1/(n-t),g=1/(a-l),_=1/(u-c),y=(n+t)*m,x=(a+l)*g;let E,R;if(h===Sa)E=(u+c)*_,R=-2*_;else if(h===ru)E=c*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Cr=new V,Ri=new $e,MM=new V(0,0,0),EM=new V(1,1,1),ja=new V,Dc=new V,oi=new V,m_=new $e,g_=new Hs;class ki{constructor(t=0,n=0,a=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],y=l[6],x=l[10];switch(n){case"XYZ":this._y=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(fe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-fe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(fe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return m_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(m_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return g_.setFromEuler(this),this.setFromQuaternion(g_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Bv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bM=0;const __=new V,wr=new Hs,da=new $e,Uc=new V,Jo=new V,TM=new V,AM=new Hs,v_=new V(1,0,0),y_=new V(0,1,0),S_=new V(0,0,1),x_={type:"added"},RM={type:"removed"},Dr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Dn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new V,n=new ki,a=new Hs,l=new V(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ce}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return wr.setFromAxisAngle(t,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,n){return wr.setFromAxisAngle(t,n),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(v_,t)}rotateY(t){return this.rotateOnAxis(y_,t)}rotateZ(t){return this.rotateOnAxis(S_,t)}translateOnAxis(t,n){return __.copy(t).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(v_,t)}translateY(t){return this.translateOnAxis(y_,t)}translateZ(t){return this.translateOnAxis(S_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Uc.copy(t):Uc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Jo,Uc,this.up):da.lookAt(Uc,Jo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(da),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(x_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(RM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(x_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,TM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,AM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),m=u(t.textures),g=u(t.images),_=u(t.shapes),y=u(t.skeletons),x=u(t.animations),E=u(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),y.length>0&&(a.skeletons=y),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=l,a;function u(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new V(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new V,pa=new V,zh=new V,ma=new V,Ur=new V,Lr=new V,M_=new V,Ih=new V,Bh=new V,Fh=new V,Hh=new ke,Gh=new ke,Vh=new ke;class Ui{constructor(t=new V,n=new V,a=new V){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Ci.subVectors(t,n),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Ci.subVectors(l,n),pa.subVectors(a,n),zh.subVectors(t,n);const u=Ci.dot(Ci),h=Ci.dot(pa),p=Ci.dot(zh),m=pa.dot(pa),g=pa.dot(zh),_=u*m-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,x=(m*p-h*g)*y,E=(u*g-h*p)*y;return c.set(1-x-E,E,x)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,n,a,l,c,u,h,p){return this.getBarycoord(t,n,a,l,ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ma.x),p.addScaledVector(u,ma.y),p.addScaledVector(h,ma.z),p)}static getInterpolatedAttribute(t,n,a,l,c,u){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,a),Vh.fromBufferAttribute(t,l),u.setScalar(0),u.addScaledVector(Hh,c.x),u.addScaledVector(Gh,c.y),u.addScaledVector(Vh,c.z),u}static isFrontFacing(t,n,a,l){return Ci.subVectors(a,n),pa.subVectors(t,n),Ci.cross(pa).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let u,h;Ur.subVectors(l,a),Lr.subVectors(c,a),Ih.subVectors(t,a);const p=Ur.dot(Ih),m=Lr.dot(Ih);if(p<=0&&m<=0)return n.copy(a);Bh.subVectors(t,l);const g=Ur.dot(Bh),_=Lr.dot(Bh);if(g>=0&&_<=g)return n.copy(l);const y=p*_-g*m;if(y<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Ur,u);Fh.subVectors(t,c);const x=Ur.dot(Fh),E=Lr.dot(Fh);if(E>=0&&x<=E)return n.copy(c);const R=x*m-p*E;if(R<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(a).addScaledVector(Lr,h);const M=g*E-x*_;if(M<=0&&_-g>=0&&x-E>=0)return M_.subVectors(c,l),h=(_-g)/(_-g+(x-E)),n.copy(l).addScaledVector(M_,h);const v=1/(M+R+y);return u=R*v,h=y*v,n.copy(a).addScaledVector(Ur,u).addScaledVector(Lr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class ve{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,n),this}setRGB(t,n,a,l=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ue.toWorkingColorSpace(this,l),this}setHSL(t,n,a,l=Ue.workingColorSpace){if(t=cM(t,1),n=fe(n,0,1),a=fe(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=kh(u,c,t+1/3),this.g=kh(u,c,t),this.b=kh(u,c,t-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(t,n=ci){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=l[1],h=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ci){const a=Fv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ue.fromWorkingColorSpace(Pn.copy(this),t),Math.round(fe(Pn.r*255,0,255))*65536+Math.round(fe(Pn.g*255,0,255))*256+Math.round(fe(Pn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Pn.copy(this),n);const a=Pn.r,l=Pn.g,c=Pn.b,u=Math.max(a,l,c),h=Math.min(a,l,c);let p,m;const g=(h+u)/2;if(h===u)p=0,m=0;else{const _=u-h;switch(m=g<=.5?_/(u+h):_/(2-u-h),u){case a:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-a)/_+2;break;case c:p=(a-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Pn.copy(this),n),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=ci){Ue.fromWorkingColorSpace(Pn.copy(this),t);const n=Pn.r,a=Pn.g,l=Pn.b;return t!==ci?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+n,Ka.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ka),t.getHSL(Lc);const a=Ah(Ka.h,Lc.h,n),l=Ah(Ka.s,Lc.s,n),c=Ah(Ka.l,Lc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ve;ve.NAMES=Fv;let CM=0;class hl extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Xr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(a.blending=this.blending),this.side!==as&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==od&&(a.blendSrc=this.blendSrc),this.blendDst!==ld&&(a.blendDst=this.blendDst),this.blendEquation!==Os&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==l_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=l(t.textures),u=l(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cu extends hl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=yv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new V,Nc=new Ot;class Vi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=c_,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Nc.fromBufferAttribute(this,n),Nc.applyMatrix3(t),this.setXY(n,Nc.x,Nc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=jo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),l=Kn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==c_&&(t.usage=this.usage),t}}class Hv extends Vi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Gv extends Vi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class In extends Vi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let wM=0;const yi=new $e,Xh=new Dn,Nr=new V,li=new fl,$o=new fl,En=new V;class Xi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ov(t)?Gv:Hv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ce().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,a){return yi.makeTranslation(t,n,a),this.applyMatrix4(yi),this}scale(t,n,a){return yi.makeScale(t,n,a),this.applyMatrix4(yi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const u=t[l];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new In(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const a=this.boundingSphere.center;if(li.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];$o.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(li.min,$o.min),li.expandByPoint(En),En.addVectors(li.max,$o.max),li.expandByPoint(En)):(li.expandByPoint($o.min),li.expandByPoint($o.max))}li.getCenter(a);let l=0;for(let c=0,u=t.count;c<u;c++)En.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(En));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)En.fromBufferAttribute(h,m),p&&(Nr.fromBufferAttribute(t,m),En.add(Nr)),l=Math.max(l,a.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new V,p[X]=new V;const m=new V,g=new V,_=new V,y=new Ot,x=new Ot,E=new Ot,R=new V,M=new V;function v(X,D,w){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,w),y.fromBufferAttribute(c,X),x.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(m),_.sub(m),x.sub(y),E.sub(y);const F=1/(x.x*E.y-E.x*x.y);isFinite(F)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(F),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(F),h[X].add(R),h[D].add(R),h[w].add(R),p[X].add(M),p[D].add(M),p[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,D=O.length;X<D;++X){const w=O[X],F=w.start,rt=w.count;for(let at=F,ft=F+rt;at<ft;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const U=new V,C=new V,k=new V,B=new V;function z(X){k.fromBufferAttribute(l,X),B.copy(k);const D=h[X];U.copy(D),U.sub(k.multiplyScalar(k.dot(D))).normalize(),C.crossVectors(B,D);const F=C.dot(p[X])<0?-1:1;u.setXYZW(X,U.x,U.y,U.z,F)}for(let X=0,D=O.length;X<D;++X){const w=O[X],F=w.start,rt=w.count;for(let at=F,ft=F+rt;at<ft;at+=3)z(t.getX(at+0)),z(t.getX(at+1)),z(t.getX(at+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Vi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let y=0,x=a.count;y<x;y++)a.setXYZ(y,0,0,0);const l=new V,c=new V,u=new V,h=new V,p=new V,m=new V,g=new V,_=new V;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),R=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,R),m.fromBufferAttribute(a,M),h.add(g),p.add(g),m.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(R,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,x=n.count;y<x;y+=3)l.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),g.subVectors(u,c),_.subVectors(l,c),g.cross(_),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)En.fromBufferAttribute(t,n),En.normalize(),t.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,y=new m.constructor(p.length*g);let x=0,E=0;for(let R=0,M=p.length;R<M;R++){h.isInterleavedBufferAttribute?x=p[R]*h.data.stride+h.offset:x=p[R]*g;for(let v=0;v<g;v++)y[E++]=m[x++]}return new Vi(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xi,a=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,a);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const y=m[g],x=t(y,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,y=m.length;_<y;_++){const x=m[_];g.push(x.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let y=0,x=_.length;y<x;y++)g.push(_[y].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let m=0,g=u.length;m<g;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const E_=new $e,Cs=new Iv,Oc=new ap,b_=new V,Pc=new V,zc=new V,Ic=new V,Wh=new V,Bc=new V,T_=new V,Fc=new V;class Te extends Dn{constructor(t=new Xi,n=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Bc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(Wh.fromBufferAttribute(_,t),u?Bc.addScaledVector(Wh,g):Bc.addScaledVector(Wh.sub(n),g))}n.add(Bc)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Oc.copy(a.boundingSphere),Oc.applyMatrix4(c),Cs.copy(t.ray).recast(t.near),!(Oc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Oc,b_)===null||Cs.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(E_.copy(c).invert(),Cs.copy(t.ray).applyMatrix4(E_),!(a.boundingBox!==null&&Cs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Cs)))}_computeIntersections(t,n,a){let l;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,R=y.length;E<R;E++){const M=y[E],v=u[M.materialIndex],O=Math.max(M.start,x.start),U=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let C=O,k=U;C<k;C+=3){const B=h.getX(C),z=h.getX(C+1),X=h.getX(C+2);l=Hc(this,v,t,a,m,g,_,B,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),R=Math.min(h.count,x.start+x.count);for(let M=E,v=R;M<v;M+=3){const O=h.getX(M),U=h.getX(M+1),C=h.getX(M+2);l=Hc(this,u,t,a,m,g,_,O,U,C),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,R=y.length;E<R;E++){const M=y[E],v=u[M.materialIndex],O=Math.max(M.start,x.start),U=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let C=O,k=U;C<k;C+=3){const B=C,z=C+1,X=C+2;l=Hc(this,v,t,a,m,g,_,B,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),R=Math.min(p.count,x.start+x.count);for(let M=E,v=R;M<v;M+=3){const O=M,U=M+1,C=M+2;l=Hc(this,u,t,a,m,g,_,O,U,C),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function DM(r,t,n,a,l,c,u,h){let p;if(t.side===Vn?p=a.intersectTriangle(u,c,l,!0,h):p=a.intersectTriangle(l,c,u,t.side===as,h),p===null)return null;Fc.copy(h),Fc.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Fc);return m<n.near||m>n.far?null:{distance:m,point:Fc.clone(),object:r}}function Hc(r,t,n,a,l,c,u,h,p,m){r.getVertexPosition(h,Pc),r.getVertexPosition(p,zc),r.getVertexPosition(m,Ic);const g=DM(r,t,n,a,Pc,zc,Ic,T_);if(g){const _=new V;Ui.getBarycoord(T_,Pc,zc,Ic,_),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,p,m,_,new Ot)),c&&(g.uv1=Ui.getInterpolatedAttribute(c,h,p,m,_,new Ot)),u&&(g.normal=Ui.getInterpolatedAttribute(u,h,p,m,_,new V),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new V,materialIndex:0};Ui.getNormal(Pc,zc,Ic,y.normal),g.face=y,g.barycoord=_}return g}class $n extends Xi{constructor(t=1,n=1,a=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:u};const h=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],g=[],_=[];let y=0,x=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,l,u,2),E("x","z","y",1,-1,t,a,-n,l,u,3),E("x","y","z",1,-1,t,n,a,l,c,4),E("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new In(m,3)),this.setAttribute("normal",new In(g,3)),this.setAttribute("uv",new In(_,2));function E(R,M,v,O,U,C,k,B,z,X,D){const w=C/z,F=k/X,rt=C/2,at=k/2,ft=B/2,pt=z+1,P=X+1;let Q=0,K=0;const xt=new V;for(let bt=0;bt<P;bt++){const N=bt*F-at;for(let nt=0;nt<pt;nt++){const St=nt*w-rt;xt[R]=St*O,xt[M]=N*U,xt[v]=ft,m.push(xt.x,xt.y,xt.z),xt[R]=0,xt[M]=0,xt[v]=B>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(nt/z),_.push(1-bt/X),Q+=1}}for(let bt=0;bt<X;bt++)for(let N=0;N<z;N++){const nt=y+N+pt*bt,St=y+N+pt*(bt+1),j=y+(N+1)+pt*(bt+1),ct=y+(N+1)+pt*bt;p.push(nt,St,ct),p.push(St,j,ct),K+=6}h.addGroup(x,K,D),x+=K,y+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $r(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function Gn(r){const t={};for(let n=0;n<r.length;n++){const a=$r(r[n]);for(const l in a)t[l]=a[l]}return t}function UM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Vv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const LM={clone:$r,merge:Gn};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends hl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$r(t.uniforms),this.uniformsGroups=UM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?n.uniforms[l]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[l]={type:"m4",value:u.toArray()}:n.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class kv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Sa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new V,A_=new Ot,R_=new Ot;class ui extends kv{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,n){return this.getViewBounds(t,A_,R_),n.subVectors(R_,A_)}setViewOffset(t,n,a,l,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(iu*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*l/p,n-=u.offsetY*a/m,l*=u.width/p,a*=u.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,Pr=1;class PM extends Dn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Or,Pr,t,n);l.layers=this.layers,this.add(l);const c=new ui(Or,Pr,t,n);c.layers=this.layers,this.add(c);const u=new ui(Or,Pr,t,n);u.layers=this.layers,this.add(u);const h=new ui(Or,Pr,t,n);h.layers=this.layers,this.add(h);const p=new ui(Or,Pr,t,n);p.layers=this.layers,this.add(p);const m=new ui(Or,Pr,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,u,h,p]=n;for(const m of n)this.remove(m);if(t===Sa)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ru)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,m,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,c),t.setRenderTarget(a,1,l),t.render(n,u),t.setRenderTarget(a,2,l),t.render(n,h),t.setRenderTarget(a,3,l),t.render(n,p),t.setRenderTarget(a,4,l),t.render(n,m),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,l),t.render(n,g),t.setRenderTarget(_,y,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Xv extends kn{constructor(t,n,a,l,c,u,h,p,m,g){t=t!==void 0?t:[],n=n!==void 0?n:Zr,super(t,n,a,l,c,u,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zM extends Fs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Xv(l,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $n(5,5,5),c=new ss({name:"CubemapFromEquirect",uniforms:$r(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Vn,blending:ns});c.uniforms.tEquirect.value=n;const u=new Te(l,c),h=n.minFilter;return n.minFilter===Is&&(n.minFilter=Gi),new PM(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n,a,l){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,l);t.setRenderTarget(c)}}class sp{constructor(t,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new ve(t),this.near=n,this.far=a}clone(){return new sp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wv extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yh=new V,IM=new V,BM=new ce;class $a{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=Yh.subVectors(a,n).cross(IM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Yh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||BM.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new ap,Gc=new V;class rp{constructor(t=new $a,n=new $a,a=new $a,l=new $a,c=new $a,u=new $a){this.planes=[t,n,a,l,c,u]}set(t,n,a,l,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Sa){const a=this.planes,l=t.elements,c=l[0],u=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],y=l[7],x=l[8],E=l[9],R=l[10],M=l[11],v=l[12],O=l[13],U=l[14],C=l[15];if(a[0].setComponents(p-c,y-m,M-x,C-v).normalize(),a[1].setComponents(p+c,y+m,M+x,C+v).normalize(),a[2].setComponents(p+u,y+g,M+E,C+O).normalize(),a[3].setComponents(p-u,y-g,M-E,C-O).normalize(),a[4].setComponents(p-h,y-_,M-R,C-U).normalize(),n===Sa)a[5].setComponents(p+h,y+_,M+R,C+U).normalize();else if(n===ru)a[5].setComponents(h,_,R,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jn extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class FM extends kn{constructor(t,n,a,l,c,u,h,p,m){super(t,n,a,l,c,u,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yv extends kn{constructor(t,n,a,l,c,u,h,p,m,g=Wr){if(g!==Wr&&g!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===Wr&&(a=Bs),a===void 0&&g===Qr&&(a=Kr),super(null,l,c,u,h,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=h!==void 0?h:Ni,this.minFilter=p!==void 0?p:Ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,l=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(l),n.push(c),l=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const a=this.getLengths();let l=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=a[l]-u,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,a[l]===u)return l/(c-1);const g=a[l],y=a[l+1]-g,x=(u-g)/y;return(l+x)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const u=this.getPoint(l),h=this.getPoint(c),p=n||(u.isVector2?new Ot:new V);return p.copy(h).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n){const a=new V,l=[],c=[],u=[],h=new V,p=new $e;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new V)}c[0]=new V,u[0]=new V;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),y=Math.abs(l[0].z);g<=m&&(m=g,a.set(1,0,0)),_<=m&&(m=_,a.set(0,1,0)),y<=m&&a.set(0,0,1),h.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],h),u[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(fe(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(h,E))}u[x].crossVectors(l[x],c[x])}if(n===!0){let x=Math.acos(fe(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],x*E)),u[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class op extends Wi{constructor(t=0,n=0,a=1,l=1,c=0,u=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new Ot){const a=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(u?c=0:c=l),this.aClockwise===!0&&!u&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=p-this.aX,x=m-this.aY;p=y*g-x*_+this.aX,m=y*_+x*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class HM extends op{constructor(t,n,a,l,c,u){super(t,n,a,a,l,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function lp(){let r=0,t=0,n=0,a=0;function l(c,u,h,p){r=c,t=h,n=-3*c+3*u-2*h-p,a=2*c-2*u+h+p}return{initCatmullRom:function(c,u,h,p,m){l(u,h,m*(h-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,h,p,m,g,_){let y=(u-c)/m-(h-c)/(m+g)+(h-u)/g,x=(h-u)/g-(p-u)/(g+_)+(p-h)/_;y*=g,x*=g,l(u,h,y,x)},calc:function(c){const u=c*c,h=u*c;return r+t*c+n*u+a*h}}}const Vc=new V,qh=new lp,Zh=new lp,jh=new lp;class GM extends Wi{constructor(t=[],n=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=l}getPoint(t,n=new V){const a=n,l=this.points,c=l.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),p=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=l[(h-1)%c]:(Vc.subVectors(l[0],l[1]).add(l[0]),m=Vc);const _=l[h%c],y=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Vc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Vc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),x),R=Math.pow(_.distanceToSquared(y),x),M=Math.pow(y.distanceToSquared(g),x);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),qh.initNonuniformCatmullRom(m.x,_.x,y.x,g.x,E,R,M),Zh.initNonuniformCatmullRom(m.y,_.y,y.y,g.y,E,R,M),jh.initNonuniformCatmullRom(m.z,_.z,y.z,g.z,E,R,M)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(m.x,_.x,y.x,g.x,this.tension),Zh.initCatmullRom(m.y,_.y,y.y,g.y,this.tension),jh.initCatmullRom(m.z,_.z,y.z,g.z,this.tension));return a.set(qh.calc(p),Zh.calc(p),jh.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new V().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function C_(r,t,n,a,l){const c=(a-t)*.5,u=(l-n)*.5,h=r*r,p=r*h;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*h+c*r+n}function VM(r,t){const n=1-r;return n*n*t}function kM(r,t){return 2*(1-r)*r*t}function XM(r,t){return r*r*t}function il(r,t,n,a){return VM(r,t)+kM(r,n)+XM(r,a)}function WM(r,t){const n=1-r;return n*n*n*t}function YM(r,t){const n=1-r;return 3*n*n*r*t}function qM(r,t){return 3*(1-r)*r*r*t}function ZM(r,t){return r*r*r*t}function al(r,t,n,a,l){return WM(r,t)+YM(r,n)+qM(r,a)+ZM(r,l)}class qv extends Wi{constructor(t=new Ot,n=new Ot,a=new Ot,l=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new Ot){const a=n,l=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(al(t,l.x,c.x,u.x,h.x),al(t,l.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jM extends Wi{constructor(t=new V,n=new V,a=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new V){const a=n,l=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(al(t,l.x,c.x,u.x,h.x),al(t,l.y,c.y,u.y,h.y),al(t,l.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zv extends Wi{constructor(t=new Ot,n=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ot){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ot){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class KM extends Wi{constructor(t=new V,n=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new V){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new V){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jv extends Wi{constructor(t=new Ot,n=new Ot,a=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Ot){const a=n,l=this.v0,c=this.v1,u=this.v2;return a.set(il(t,l.x,c.x,u.x),il(t,l.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class QM extends Wi{constructor(t=new V,n=new V,a=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new V){const a=n,l=this.v0,c=this.v1,u=this.v2;return a.set(il(t,l.x,c.x,u.x),il(t,l.y,c.y,u.y),il(t,l.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kv extends Wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ot){const a=n,l=this.points,c=(l.length-1)*t,u=Math.floor(c),h=c-u,p=l[u===0?u:u-1],m=l[u],g=l[u>l.length-2?l.length-1:u+1],_=l[u>l.length-3?l.length-1:u+2];return a.set(C_(h,p.x,m.x,g.x,_.x),C_(h,p.y,m.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new Ot().fromArray(l))}return this}}var w_=Object.freeze({__proto__:null,ArcCurve:HM,CatmullRomCurve3:GM,CubicBezierCurve:qv,CubicBezierCurve3:jM,EllipseCurve:op,LineCurve:Zv,LineCurve3:KM,QuadraticBezierCurve:jv,QuadraticBezierCurve3:QM,SplineCurve:Kv});class JM extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new w_[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=a){const u=l[c]-a,h=this.curves[c],p=h.getLength(),m=p===0?0:1-u/p;return h.getPointAt(m,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,l=this.curves.length;a<l;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let l=0,c=this.curves;l<c.length;l++){const u=c[l],h=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,p=u.getPoints(h);for(let m=0;m<p.length;m++){const g=p[m];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(new w_[l.type]().fromJSON(l))}return this}}class D_ extends JM{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Zv(this.currentPoint.clone(),new Ot(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,l){const c=new jv(this.currentPoint.clone(),new Ot(t,n),new Ot(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}bezierCurveTo(t,n,a,l,c,u){const h=new qv(this.currentPoint.clone(),new Ot(t,n),new Ot(a,l),new Ot(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new Kv(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,l,c,u){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+h,n+p,a,l,c,u),this}absarc(t,n,a,l,c,u){return this.absellipse(t,n,a,a,l,c,u),this}ellipse(t,n,a,l,c,u,h,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+m,n+g,a,l,c,u,h,p),this}absellipse(t,n,a,l,c,u,h,p){const m=new op(t,n,a,l,c,u,h,p);if(this.curves.length>0){const _=m.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cp extends Xi{constructor(t=1,n=1,a=1,l=32,c=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],y=[],x=[];let E=0;const R=[],M=a/2;let v=0;O(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new In(_,3)),this.setAttribute("normal",new In(y,3)),this.setAttribute("uv",new In(x,2));function O(){const C=new V,k=new V;let B=0;const z=(n-t)/a;for(let X=0;X<=c;X++){const D=[],w=X/c,F=w*(n-t)+t;for(let rt=0;rt<=l;rt++){const at=rt/l,ft=at*p+h,pt=Math.sin(ft),P=Math.cos(ft);k.x=F*pt,k.y=-w*a+M,k.z=F*P,_.push(k.x,k.y,k.z),C.set(pt,z,P).normalize(),y.push(C.x,C.y,C.z),x.push(at,1-w),D.push(E++)}R.push(D)}for(let X=0;X<l;X++)for(let D=0;D<c;D++){const w=R[D][X],F=R[D+1][X],rt=R[D+1][X+1],at=R[D][X+1];(t>0||D!==0)&&(g.push(w,F,at),B+=3),(n>0||D!==c-1)&&(g.push(F,rt,at),B+=3)}m.addGroup(v,B,0),v+=B}function U(C){const k=E,B=new Ot,z=new V;let X=0;const D=C===!0?t:n,w=C===!0?1:-1;for(let rt=1;rt<=l;rt++)_.push(0,M*w,0),y.push(0,w,0),x.push(.5,.5),E++;const F=E;for(let rt=0;rt<=l;rt++){const ft=rt/l*p+h,pt=Math.cos(ft),P=Math.sin(ft);z.x=D*P,z.y=M*w,z.z=D*pt,_.push(z.x,z.y,z.z),y.push(0,w,0),B.x=pt*.5+.5,B.y=P*.5*w+.5,x.push(B.x,B.y),E++}for(let rt=0;rt<l;rt++){const at=k+rt,ft=F+rt;C===!0?g.push(ft,ft+1,at):g.push(ft+1,ft,at),X+=3}m.addGroup(v,X,C===!0?1:2),v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qv extends D_{constructor(t){super(t),this.uuid=to(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,l=this.holes.length;a<l;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(new D_().fromJSON(l))}return this}}const $M={triangulate:function(r,t,n=2){const a=t&&t.length,l=a?t[0]*n:r.length;let c=Jv(r,0,l,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,p,m,g,_,y,x;if(a&&(c=a1(r,t,c,n)),r.length>80*n){h=m=r[0],p=g=r[1];for(let E=n;E<l;E+=n)_=r[E],y=r[E+1],_<h&&(h=_),y<p&&(p=y),_>m&&(m=_),y>g&&(g=y);x=Math.max(m-h,g-p),x=x!==0?32767/x:0}return ol(c,u,n,h,p,x,0),u}};function Jv(r,t,n,a,l){let c,u;if(l===m1(r,t,n,a)>0)for(c=t;c<n;c+=a)u=U_(c,r[c],r[c+1],u);else for(c=n-a;c>=t;c-=a)u=U_(c,r[c],r[c+1],u);return u&&uu(u,u.next)&&(cl(u),u=u.next),u}function Gs(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(uu(n,n.next)||en(n.prev,n,n.next)===0)){if(cl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function ol(r,t,n,a,l,c,u){if(!r)return;!u&&c&&c1(r,a,l,c);let h=r,p,m;for(;r.prev!==r.next;){if(p=r.prev,m=r.next,c?e1(r,a,l,c):t1(r)){t.push(p.i/n|0),t.push(r.i/n|0),t.push(m.i/n|0),cl(r),r=m.next,h=m.next;continue}if(r=m,r===h){u?u===1?(r=n1(Gs(r),t,n),ol(r,t,n,a,l,c,2)):u===2&&i1(r,t,n,a,l,c):ol(Gs(r),t,n,a,l,c,1);break}}}function t1(r){const t=r.prev,n=r,a=r.next;if(en(t,n,a)>=0)return!1;const l=t.x,c=n.x,u=a.x,h=t.y,p=n.y,m=a.y,g=l<c?l<u?l:u:c<u?c:u,_=h<p?h<m?h:m:p<m?p:m,y=l>c?l>u?l:u:c>u?c:u,x=h>p?h>m?h:m:p>m?p:m;let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=y&&E.y>=_&&E.y<=x&&Hr(l,h,c,p,u,m,E.x,E.y)&&en(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function e1(r,t,n,a){const l=r.prev,c=r,u=r.next;if(en(l,c,u)>=0)return!1;const h=l.x,p=c.x,m=u.x,g=l.y,_=c.y,y=u.y,x=h<p?h<m?h:m:p<m?p:m,E=g<_?g<y?g:y:_<y?_:y,R=h>p?h>m?h:m:p>m?p:m,M=g>_?g>y?g:y:_>y?_:y,v=Yd(x,E,t,n,a),O=Yd(R,M,t,n,a);let U=r.prevZ,C=r.nextZ;for(;U&&U.z>=v&&C&&C.z<=O;){if(U.x>=x&&U.x<=R&&U.y>=E&&U.y<=M&&U!==l&&U!==u&&Hr(h,g,p,_,m,y,U.x,U.y)&&en(U.prev,U,U.next)>=0||(U=U.prevZ,C.x>=x&&C.x<=R&&C.y>=E&&C.y<=M&&C!==l&&C!==u&&Hr(h,g,p,_,m,y,C.x,C.y)&&en(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;U&&U.z>=v;){if(U.x>=x&&U.x<=R&&U.y>=E&&U.y<=M&&U!==l&&U!==u&&Hr(h,g,p,_,m,y,U.x,U.y)&&en(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;C&&C.z<=O;){if(C.x>=x&&C.x<=R&&C.y>=E&&C.y<=M&&C!==l&&C!==u&&Hr(h,g,p,_,m,y,C.x,C.y)&&en(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function n1(r,t,n){let a=r;do{const l=a.prev,c=a.next.next;!uu(l,c)&&$v(l,a,a.next,c)&&ll(l,c)&&ll(c,l)&&(t.push(l.i/n|0),t.push(a.i/n|0),t.push(c.i/n|0),cl(a),cl(a.next),a=r=c),a=a.next}while(a!==r);return Gs(a)}function i1(r,t,n,a,l,c){let u=r;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&h1(u,h)){let p=ty(u,h);u=Gs(u,u.next),p=Gs(p,p.next),ol(u,t,n,a,l,c,0),ol(p,t,n,a,l,c,0);return}h=h.next}u=u.next}while(u!==r)}function a1(r,t,n,a){const l=[];let c,u,h,p,m;for(c=0,u=t.length;c<u;c++)h=t[c]*a,p=c<u-1?t[c+1]*a:r.length,m=Jv(r,h,p,a,!1),m===m.next&&(m.steiner=!0),l.push(f1(m));for(l.sort(s1),c=0;c<l.length;c++)n=r1(l[c],n);return n}function s1(r,t){return r.x-t.x}function r1(r,t){const n=o1(r,t);if(!n)return t;const a=ty(n,r);return Gs(a,a.next),Gs(n,n.next)}function o1(r,t){let n=t,a=-1/0,l;const c=r.x,u=r.y;do{if(u<=n.y&&u>=n.next.y&&n.next.y!==n.y){const y=n.x+(u-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(y<=c&&y>a&&(a=y,l=n.x<n.next.x?n:n.next,y===c))return l}n=n.next}while(n!==t);if(!l)return null;const h=l,p=l.x,m=l.y;let g=1/0,_;n=l;do c>=n.x&&n.x>=p&&c!==n.x&&Hr(u<m?c:a,u,p,m,u<m?a:c,u,n.x,n.y)&&(_=Math.abs(u-n.y)/(c-n.x),ll(n,r)&&(_<g||_===g&&(n.x>l.x||n.x===l.x&&l1(l,n)))&&(l=n,g=_)),n=n.next;while(n!==h);return l}function l1(r,t){return en(r.prev,r,t.prev)<0&&en(t.next,r,r.next)<0}function c1(r,t,n,a){let l=r;do l.z===0&&(l.z=Yd(l.x,l.y,t,n,a)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,u1(l)}function u1(r){let t,n,a,l,c,u,h,p,m=1;do{for(n=r,r=null,c=null,u=0;n;){for(u++,a=n,h=0,t=0;t<m&&(h++,a=a.nextZ,!!a);t++);for(p=m;h>0||p>0&&a;)h!==0&&(p===0||!a||n.z<=a.z)?(l=n,n=n.nextZ,h--):(l=a,a=a.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;n=a}c.nextZ=null,m*=2}while(u>1);return r}function Yd(r,t,n,a,l){return r=(r-n)*l|0,t=(t-a)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function f1(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function Hr(r,t,n,a,l,c,u,h){return(l-u)*(t-h)>=(r-u)*(c-h)&&(r-u)*(a-h)>=(n-u)*(t-h)&&(n-u)*(c-h)>=(l-u)*(a-h)}function h1(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!d1(r,t)&&(ll(r,t)&&ll(t,r)&&p1(r,t)&&(en(r.prev,r,t.prev)||en(r,t.prev,t))||uu(r,t)&&en(r.prev,r,r.next)>0&&en(t.prev,t,t.next)>0)}function en(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function uu(r,t){return r.x===t.x&&r.y===t.y}function $v(r,t,n,a){const l=Xc(en(r,t,n)),c=Xc(en(r,t,a)),u=Xc(en(n,a,r)),h=Xc(en(n,a,t));return!!(l!==c&&u!==h||l===0&&kc(r,n,t)||c===0&&kc(r,a,t)||u===0&&kc(n,r,a)||h===0&&kc(n,t,a))}function kc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Xc(r){return r>0?1:r<0?-1:0}function d1(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&$v(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function ll(r,t){return en(r.prev,r,r.next)<0?en(r,t,r.next)>=0&&en(r,r.prev,t)>=0:en(r,t,r.prev)<0||en(r,r.next,t)<0}function p1(r,t){let n=r,a=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function ty(r,t){const n=new qd(r.i,r.x,r.y),a=new qd(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function U_(r,t,n,a){const l=new qd(r,t,n);return a?(l.next=a.next,l.prev=a,a.next.prev=l,a.next=l):(l.prev=l,l.next=l),l}function cl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function qd(r,t,n){this.i=r,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m1(r,t,n,a){let l=0;for(let c=t,u=n-a;c<n;c+=a)l+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return l}class sl{static area(t){const n=t.length;let a=0;for(let l=n-1,c=0;c<n;l=c++)a+=t[l].x*t[c].y-t[c].x*t[l].y;return a*.5}static isClockWise(t){return sl.area(t)<0}static triangulateShape(t,n){const a=[],l=[],c=[];L_(t),N_(a,t);let u=t.length;n.forEach(L_);for(let p=0;p<n.length;p++)l.push(u),u+=n[p].length,N_(a,n[p]);const h=$M.triangulate(a,l);for(let p=0;p<h.length;p+=3)c.push(h.slice(p,p+3));return c}}function L_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function N_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class dl extends Xi{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,u=n/2,h=Math.floor(a),p=Math.floor(l),m=h+1,g=p+1,_=t/h,y=n/p,x=[],E=[],R=[],M=[];for(let v=0;v<g;v++){const O=v*y-u;for(let U=0;U<m;U++){const C=U*_-c;E.push(C,-O,0),R.push(0,0,1),M.push(U/h),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let O=0;O<h;O++){const U=O+m*v,C=O+m*(v+1),k=O+1+m*(v+1),B=O+1+m*v;x.push(U,C,B),x.push(C,k,B)}this.setIndex(x),this.setAttribute("position",new In(E,3)),this.setAttribute("normal",new In(R,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.widthSegments,t.heightSegments)}}class up extends Xi{constructor(t=new Qv([new Ot(0,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],l=[],c=[],u=[];let h=0,p=0;if(Array.isArray(t)===!1)m(t);else for(let g=0;g<t.length;g++)m(t[g]),this.addGroup(h,p,g),h+=p,p=0;this.setIndex(a),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(c,3)),this.setAttribute("uv",new In(u,2));function m(g){const _=l.length/3,y=g.extractPoints(n);let x=y.shape;const E=y.holes;sl.isClockWise(x)===!1&&(x=x.reverse());for(let M=0,v=E.length;M<v;M++){const O=E[M];sl.isClockWise(O)===!0&&(E[M]=O.reverse())}const R=sl.triangulateShape(x,E);for(let M=0,v=E.length;M<v;M++){const O=E[M];x=x.concat(O)}for(let M=0,v=x.length;M<v;M++){const O=x[M];l.push(O.x,O.y,0),c.push(0,0,1),u.push(O.x,O.y)}for(let M=0,v=R.length;M<v;M++){const O=R[M],U=O[0]+_,C=O[1]+_,k=O[2]+_;a.push(U,C,k),p+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return g1(n,t)}static fromJSON(t,n){const a=[];for(let l=0,c=t.shapes.length;l<c;l++){const u=n[t.shapes[l]];a.push(u)}return new up(a,t.curveSegments)}}function g1(r,t){if(t.shapes=[],Array.isArray(r))for(let n=0,a=r.length;n<a;n++){const l=r[n];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t}class fp extends Xi{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+h,Math.PI);let m=0;const g=[],_=new V,y=new V,x=[],E=[],R=[],M=[];for(let v=0;v<=a;v++){const O=[],U=v/a;let C=0;v===0&&u===0?C=.5/n:v===a&&p===Math.PI&&(C=-.5/n);for(let k=0;k<=n;k++){const B=k/n;_.x=-t*Math.cos(l+B*c)*Math.sin(u+U*h),_.y=t*Math.cos(u+U*h),_.z=t*Math.sin(l+B*c)*Math.sin(u+U*h),E.push(_.x,_.y,_.z),y.copy(_).normalize(),R.push(y.x,y.y,y.z),M.push(B+C,1-U),O.push(m++)}g.push(O)}for(let v=0;v<a;v++)for(let O=0;O<n;O++){const U=g[v][O+1],C=g[v][O],k=g[v+1][O],B=g[v+1][O+1];(v!==0||u>0)&&x.push(U,C,B),(v!==a-1||p<Math.PI)&&x.push(C,k,B)}this.setIndex(x),this.setAttribute("position",new In(E,3)),this.setAttribute("normal",new In(R,3)),this.setAttribute("uv",new In(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oe extends hl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lv,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wc extends oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class _1 extends hl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class v1 extends hl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hp extends Dn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class y1 extends hp{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Kh=new $e,O_=new V,P_=new V;class ey{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;O_.setFromMatrixPosition(t.matrixWorld),n.position.copy(O_),P_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(P_),n.updateMatrixWorld(),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const z_=new $e,tl=new V,Qh=new V;class S1 extends ey{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,l=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),tl.setFromMatrixPosition(t.matrixWorld),a.position.copy(tl),Qh.copy(a.position),Qh.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Qh),a.updateMatrixWorld(),l.makeTranslation(-tl.x,-tl.y,-tl.z),z_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(z_)}}class x1 extends hp{constructor(t,n,a=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new S1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ny extends kv{constructor(t=-1,n=1,a=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class M1 extends ey{constructor(){super(new ny(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class I_ extends hp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new M1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class E1 extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class B_{constructor(t=1,n=0,a=0){return this.radius=t,this.phi=n,this.theta=a,this}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(fe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b1 extends Vs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function F_(r,t,n,a){const l=T1(a);switch(n){case Tv:return r*t;case Rv:return r*t;case Cv:return r*t*2;case wv:return r*t/l.components*l.byteLength;case ep:return r*t/l.components*l.byteLength;case Dv:return r*t*2/l.components*l.byteLength;case np:return r*t*2/l.components*l.byteLength;case Av:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case ip:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:case Md:return Math.max(r,16)*Math.max(t,8)/4;case yd:case xd:return Math.max(r,8)*Math.max(t,8)/2;case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nu:case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Uv:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function T1(r){switch(r){case Ma:case Mv:return{byteLength:1,components:1};case rl:case Ev:case ul:return{byteLength:2,components:1};case $d:case tp:return{byteLength:2,components:4};case Bs:case Jd:case ya:return{byteLength:4,components:1};case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);function iy(){let r=null,t=!1,n=null,a=null;function l(c,u){n(c,u),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function A1(r){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,_=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,g),h.onUploadCallback();let x;if(m instanceof Float32Array)x=r.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=r.SHORT;else if(m instanceof Uint32Array)x=r.UNSIGNED_INT;else if(m instanceof Int32Array)x=r.INT;else if(m instanceof Int8Array)x=r.BYTE;else if(m instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,m){const g=p.array,_=p.updateRanges;if(r.bindBuffer(m,h),_.length===0)r.bufferSubData(m,0,g);else{_.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<_.length;x++){const E=_[y],R=_[x];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,_[y]=R)}_.length=y+1;for(let x=0,E=_.length;x<E;x++){const R=_[x];r.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:u}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C1=`#ifdef USE_ALPHAHASH
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
#endif`,w1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
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
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
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
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H1=`#ifdef USE_IRIDESCENCE
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
#endif`,G1=`#ifdef USE_BUMPMAP
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,K1=`#define PI 3.141592653589793
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
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J1=`vec3 transformedNormal = objectNormal;
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
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
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
	
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
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
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
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
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,SE=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bE=`PhysicalMaterial material;
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
#endif`,TE=`struct PhysicalMaterial {
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
}`,AE=`
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
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
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fb=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,Pb=`#define DISTANCE
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,kb=`#define LAMBERT
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
}`,Xb=`#define MATCAP
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
}`,Wb=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,qb=`#define NORMAL
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
}`,Zb=`#define PHONG
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
}`,jb=`#define PHONG
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
}`,Kb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define TOON
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
}`,$b=`#define TOON
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
}`,tT=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 color;
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
}`,aT=`uniform float rotation;
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
}`,sT=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:R1,alphahash_pars_fragment:C1,alphamap_fragment:w1,alphamap_pars_fragment:D1,alphatest_fragment:U1,alphatest_pars_fragment:L1,aomap_fragment:N1,aomap_pars_fragment:O1,batching_pars_vertex:P1,batching_vertex:z1,begin_vertex:I1,beginnormal_vertex:B1,bsdfs:F1,iridescence_fragment:H1,bumpmap_pars_fragment:G1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:k1,clipping_planes_pars_vertex:X1,clipping_planes_vertex:W1,color_fragment:Y1,color_pars_fragment:q1,color_pars_vertex:Z1,color_vertex:j1,common:K1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:J1,displacementmap_pars_vertex:$1,displacementmap_vertex:tE,emissivemap_fragment:eE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:sE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:yE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:dE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:SE,lights_toon_pars_fragment:xE,lights_phong_fragment:ME,lights_phong_pars_fragment:EE,lights_physical_fragment:bE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:RE,lights_fragment_end:CE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:LE,map_fragment:NE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:zE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:BE,morphinstance_vertex:FE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:YE,normal_pars_vertex:qE,normal_vertex:ZE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:tb,packing:eb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:ab,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:hb,skinning_pars_vertex:db,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:_b,tonemapping_fragment:vb,tonemapping_pars_fragment:yb,transmission_fragment:Sb,transmission_pars_fragment:xb,uv_pars_fragment:Mb,uv_pars_vertex:Eb,uv_vertex:bb,worldpos_vertex:Tb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:wb,cube_vert:Db,cube_frag:Ub,depth_vert:Lb,depth_frag:Nb,distanceRGBA_vert:Ob,distanceRGBA_frag:Pb,equirect_vert:zb,equirect_frag:Ib,linedashed_vert:Bb,linedashed_frag:Fb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:kb,meshmatcap_vert:Xb,meshmatcap_frag:Wb,meshnormal_vert:Yb,meshnormal_frag:qb,meshphong_vert:Zb,meshphong_frag:jb,meshphysical_vert:Kb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:$b,points_vert:tT,points_frag:eT,shadow_vert:nT,shadow_frag:iT,sprite_vert:aT,sprite_frag:sT},Lt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Hi={basic:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Gn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Gn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Gn([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Gn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Gn([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Gn([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Gn([Lt.common,Lt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Gn([Lt.lights,Lt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Hi.physical={uniforms:Gn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Yc={r:0,b:0,g:0},Ds=new ki,rT=new $e;function oT(r,t,n,a,l,c,u){const h=new ve(0);let p=c===!0?0:1,m,g,_=null,y=0,x=null;function E(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function R(U){let C=!1;const k=E(U);k===null?v(h,p):k&&k.isColor&&(v(k,1),C=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,C){const k=E(C);k&&(k.isCubeTexture||k.mapping===lu)?(g===void 0&&(g=new Te(new $n(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:$r(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ds.copy(C.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Ds)),g.material.toneMapped=Ue.getTransfer(k.colorSpace)!==Ge,(_!==k||y!==k.version||x!==r.toneMapping)&&(g.material.needsUpdate=!0,_=k,y=k.version,x=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new Te(new dl(2,2),new ss({name:"BackgroundMaterial",uniforms:$r(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(k.colorSpace)!==Ge,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||y!==k.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,_=k,y=k.version,x=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,C){U.getRGB(Yc,Vv(r)),a.buffers.color.setClear(Yc.r,Yc.g,Yc.b,C,u)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return h},setClearColor:function(U,C=1){h.set(U),p=C,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(h,p)},render:R,addToRenderList:M,dispose:O}}function lT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=y(null);let c=l,u=!1;function h(w,F,rt,at,ft){let pt=!1;const P=_(at,rt,F);c!==P&&(c=P,m(c.object)),pt=x(w,at,rt,ft),pt&&E(w,at,rt,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(pt||u)&&(u=!1,C(w,F,rt,at),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return r.createVertexArray()}function m(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,F,rt){const at=rt.wireframe===!0;let ft=a[w.id];ft===void 0&&(ft={},a[w.id]=ft);let pt=ft[F.id];pt===void 0&&(pt={},ft[F.id]=pt);let P=pt[at];return P===void 0&&(P=y(p()),pt[at]=P),P}function y(w){const F=[],rt=[],at=[];for(let ft=0;ft<n;ft++)F[ft]=0,rt[ft]=0,at[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:rt,attributeDivisors:at,object:w,attributes:{},index:null}}function x(w,F,rt,at){const ft=c.attributes,pt=F.attributes;let P=0;const Q=rt.getAttributes();for(const K in Q)if(Q[K].location>=0){const bt=ft[K];let N=pt[K];if(N===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),bt===void 0||bt.attribute!==N||N&&bt.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==at}function E(w,F,rt,at){const ft={},pt=F.attributes;let P=0;const Q=rt.getAttributes();for(const K in Q)if(Q[K].location>=0){let bt=pt[K];bt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor));const N={};N.attribute=bt,bt&&bt.data&&(N.data=bt.data),ft[K]=N,P++}c.attributes=ft,c.attributesNum=P,c.index=at}function R(){const w=c.newAttributes;for(let F=0,rt=w.length;F<rt;F++)w[F]=0}function M(w){v(w,0)}function v(w,F){const rt=c.newAttributes,at=c.enabledAttributes,ft=c.attributeDivisors;rt[w]=1,at[w]===0&&(r.enableVertexAttribArray(w),at[w]=1),ft[w]!==F&&(r.vertexAttribDivisor(w,F),ft[w]=F)}function O(){const w=c.newAttributes,F=c.enabledAttributes;for(let rt=0,at=F.length;rt<at;rt++)F[rt]!==w[rt]&&(r.disableVertexAttribArray(rt),F[rt]=0)}function U(w,F,rt,at,ft,pt,P){P===!0?r.vertexAttribIPointer(w,F,rt,ft,pt):r.vertexAttribPointer(w,F,rt,at,ft,pt)}function C(w,F,rt,at){R();const ft=at.attributes,pt=rt.getAttributes(),P=F.defaultAttributeValues;for(const Q in pt){const K=pt[Q];if(K.location>=0){let xt=ft[Q];if(xt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor)),xt!==void 0){const bt=xt.normalized,N=xt.itemSize,nt=t.get(xt);if(nt===void 0)continue;const St=nt.buffer,j=nt.type,ct=nt.bytesPerElement,Et=j===r.INT||j===r.UNSIGNED_INT||xt.gpuType===Jd;if(xt.isInterleavedBufferAttribute){const yt=xt.data,Vt=yt.stride,Ht=xt.offset;if(yt.isInstancedInterleavedBuffer){for(let ie=0;ie<K.locationSize;ie++)v(K.location+ie,yt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ie=0;ie<K.locationSize;ie++)M(K.location+ie);r.bindBuffer(r.ARRAY_BUFFER,St);for(let ie=0;ie<K.locationSize;ie++)U(K.location+ie,N/K.locationSize,j,bt,Vt*ct,(Ht+N/K.locationSize*ie)*ct,Et)}else{if(xt.isInstancedBufferAttribute){for(let yt=0;yt<K.locationSize;yt++)v(K.location+yt,xt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let yt=0;yt<K.locationSize;yt++)M(K.location+yt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let yt=0;yt<K.locationSize;yt++)U(K.location+yt,N/K.locationSize,j,bt,N*ct,N/K.locationSize*yt*ct,Et)}}else if(P!==void 0){const bt=P[Q];if(bt!==void 0)switch(bt.length){case 2:r.vertexAttrib2fv(K.location,bt);break;case 3:r.vertexAttrib3fv(K.location,bt);break;case 4:r.vertexAttrib4fv(K.location,bt);break;default:r.vertexAttrib1fv(K.location,bt)}}}}O()}function k(){X();for(const w in a){const F=a[w];for(const rt in F){const at=F[rt];for(const ft in at)g(at[ft].object),delete at[ft];delete F[rt]}delete a[w]}}function B(w){if(a[w.id]===void 0)return;const F=a[w.id];for(const rt in F){const at=F[rt];for(const ft in at)g(at[ft].object),delete at[ft];delete F[rt]}delete a[w.id]}function z(w){for(const F in a){const rt=a[F];if(rt[w.id]===void 0)continue;const at=rt[w.id];for(const ft in at)g(at[ft].object),delete at[ft];delete rt[w.id]}}function X(){D(),u=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:M,disableUnusedAttributes:O}}function cT(r,t,n){let a;function l(m){a=m}function c(m,g){r.drawArrays(a,m,g),n.update(g,a,1)}function u(m,g,_){_!==0&&(r.drawArraysInstanced(a,m,g,_),n.update(g,a,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];n.update(x,a,1)}function p(m,g,_,y){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)u(m[E],g[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(a,m,0,g,0,y,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*y[R];n.update(E,a,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function uT(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(z){return!(z!==Li&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const X=z===ul&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ma&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ya&&!X)}function p(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:k,maxSamples:B}}function fT(r){const t=this;let n=null,a=0,l=!1,c=!1;const u=new $a,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||a!==0||l;return l=y,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=g(_,y,0)},this.setState=function(_,y,x){const E=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const O=c?0:a,U=O*4;let C=v.clippingState||null;p.value=C,C=g(E,y,U,x);for(let k=0;k!==U;++k)C[k]=n[k];v.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,y,x,E){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const v=x+R*4,O=y.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,C=x;U!==R;++U,C+=4)u.copy(_[U]).applyMatrix4(O,h),u.normal.toArray(M,C),M[C+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function hT(r){let t=new WeakMap;function n(u,h){return h===gd?u.mapping=Zr:h===_d&&(u.mapping=jr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===gd||h===_d)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new zM(p.height);return m.fromEquirectangularTexture(r,u),t.set(u,m),u.addEventListener("dispose",l),n(m.texture,u.mapping)}else return null}}return u}function l(u){const h=u.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Gr=4,H_=[.125,.215,.35,.446,.526,.582],Ps=20,Jh=new ny,G_=new ve;let $h=null,td=0,ed=0,nd=!1;const Ns=(1+Math.sqrt(5))/2,zr=1/Ns,V_=[new V(-Ns,zr,0),new V(Ns,zr,0),new V(-zr,0,Ns),new V(zr,0,Ns),new V(0,Ns,-zr),new V(0,Ns,zr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,l=100){$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,a,l,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($h,td,ed),this._renderer.xr.enabled=nd,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Zr||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:ul,format:Li,colorSpace:Jr,depthBuffer:!1},l=k_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(c)),this._blurMaterial=pT(c,t,n)}return l}_compileMaterial(t){const n=new Te(this._lodPlanes[0],t);this._renderer.compile(n,Jh)}_sceneToCubeUV(t,n,a,l){const h=new ui(90,1,n,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(G_),g.toneMapping=is,g.autoClear=!1;const x=new cu({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),E=new Te(new $n,x);let R=!1;const M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,R=!0):(x.color.copy(G_),R=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(h.up.set(0,p[v],0),h.lookAt(m[v],0,0)):O===1?(h.up.set(0,0,p[v]),h.lookAt(0,m[v],0)):(h.up.set(0,p[v],0),h.lookAt(0,0,m[v]));const U=this._cubeSize;qc(l,O*U,v>2?U:0,U,U),g.setRenderTarget(l),R&&g.render(E,h),g.render(t,h)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,t.background=M}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===Zr||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const c=l?this._cubemapMaterial:this._equirectMaterial,u=new Te(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;qc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Jh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=V_[(l-c-1)%V_.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,l,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,l,"latitudinal",c),this._halfBlur(u,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,u,h){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Te(this._lodPlanes[l],m),y=m.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ps-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):Ps;M>Ps&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ps}`);const v=[];let O=0;for(let z=0;z<Ps;++z){const X=z/R,D=Math.exp(-X*X/2);v.push(D),z===0?O+=D:z<M&&(O+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=u==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-a;const C=this._sizeLods[l],k=3*C*(l>U-Gr?l-U+Gr:0),B=4*(this._cubeSize-C);qc(n,k,B,3*C,2*C),p.setRenderTarget(n),p.render(_,Jh)}}function dT(r){const t=[],n=[],a=[];let l=r;const c=r-Gr+1+H_.length;for(let u=0;u<c;u++){const h=Math.pow(2,l);n.push(h);let p=1/h;u>r-Gr?p=H_[u-r+Gr-1]:u===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,_=1+m,y=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,R=3,M=2,v=1,O=new Float32Array(R*E*x),U=new Float32Array(M*E*x),C=new Float32Array(v*E*x);for(let B=0;B<x;B++){const z=B%3*2/3-1,X=B>2?0:-1,D=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];O.set(D,R*E*B),U.set(y,M*E*B);const w=[B,B,B,B,B,B];C.set(w,v*E*B)}const k=new Xi;k.setAttribute("position",new Vi(O,R)),k.setAttribute("uv",new Vi(U,M)),k.setAttribute("faceIndex",new Vi(C,v)),t.push(k),l>Gr&&l--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function k_(r,t,n){const a=new Fs(r,t,n);return a.texture.mapping=lu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function qc(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function pT(r,t,n){const a=new Float32Array(Ps),l=new V(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dp(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function X_(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function W_(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function dp(){return`

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
	`}function mT(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===gd||p===_d,g=p===Zr||p===jr;if(m||g){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return n===null&&(n=new Zd(r)),_=m?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return m&&x&&x.height>0||g&&x&&l(x)?(n===null&&(n=new Zd(r)),_=m?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function gT(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(a)}return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Fr("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function _T(r,t,n,a){const l={},c=new WeakMap;function u(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",u),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",u),l[y.id]=!0,n.memory.geometries++),y}function p(_){const y=_.attributes;for(const x in y)t.update(y[x],r.ARRAY_BUFFER)}function m(_){const y=[],x=_.index,E=_.attributes.position;let R=0;if(x!==null){const O=x.array;R=x.version;for(let U=0,C=O.length;U<C;U+=3){const k=O[U+0],B=O[U+1],z=O[U+2];y.push(k,B,B,z,z,k)}}else if(E!==void 0){const O=E.array;R=E.version;for(let U=0,C=O.length/3-1;U<C;U+=3){const k=U+0,B=U+1,z=U+2;y.push(k,B,B,z,z,k)}}else return;const M=new(Ov(y)?Gv:Hv)(y,1);M.version=R;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const y=c.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function vT(r,t,n){let a;function l(y){a=y}let c,u;function h(y){c=y.type,u=y.bytesPerElement}function p(y,x){r.drawElements(a,x,c,y*u),n.update(x,a,1)}function m(y,x,E){E!==0&&(r.drawElementsInstanced(a,x,c,y*u,E),n.update(x,a,E))}function g(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,y,0,E);let M=0;for(let v=0;v<E;v++)M+=x[v];n.update(M,a,1)}function _(y,x,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)m(y[v]/u,x[v],R[v]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,y,0,R,0,E);let v=0;for(let O=0;O<E;O++)v+=x[O]*R[O];n.update(v,a,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function yT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function ST(r,t,n){const a=new WeakMap,l=new ke;function c(u,h,p){const m=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let y=a.get(h);if(y===void 0||y.count!==_){let w=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var x=w;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),M===!0&&(C=3);let k=h.attributes.position.count*C,B=1;k>t.maxTextureSize&&(B=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const z=new Float32Array(k*B*4*_),X=new zv(z,k,B,_);X.type=ya,X.needsUpdate=!0;const D=C*4;for(let F=0;F<_;F++){const rt=v[F],at=O[F],ft=U[F],pt=k*B*4*F;for(let P=0;P<rt.count;P++){const Q=P*D;E===!0&&(l.fromBufferAttribute(rt,P),z[pt+Q+0]=l.x,z[pt+Q+1]=l.y,z[pt+Q+2]=l.z,z[pt+Q+3]=0),R===!0&&(l.fromBufferAttribute(at,P),z[pt+Q+4]=l.x,z[pt+Q+5]=l.y,z[pt+Q+6]=l.z,z[pt+Q+7]=0),M===!0&&(l.fromBufferAttribute(ft,P),z[pt+Q+8]=l.x,z[pt+Q+9]=l.y,z[pt+Q+10]=l.z,z[pt+Q+11]=ft.itemSize===4?l.w:1)}}y={count:_,texture:X,size:new Ot(k,B)},a.set(h,y),h.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const R=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function xT(r,t,n,a){let l=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return _}function u(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const ay=new kn,Y_=new Yv(1,1),sy=new zv,ry=new SM,oy=new Xv,q_=[],Z_=[],j_=new Float32Array(16),K_=new Float32Array(9),Q_=new Float32Array(4);function eo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=q_[l];if(c===void 0&&(c=new Float32Array(l),q_[l]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Sn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function fu(r,t){let n=Z_[t];n===void 0&&(n=new Int32Array(t),Z_[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function MT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function ET(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2fv(this.addr,t),Sn(n,t)}}function bT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;r.uniform3fv(this.addr,t),Sn(n,t)}}function TT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4fv(this.addr,t),Sn(n,t)}}function AT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;Q_.set(a),r.uniformMatrix2fv(this.addr,!1,Q_),Sn(n,a)}}function RT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;K_.set(a),r.uniformMatrix3fv(this.addr,!1,K_),Sn(n,a)}}function CT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(yn(n,a))return;j_.set(a),r.uniformMatrix4fv(this.addr,!1,j_),Sn(n,a)}}function wT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function DT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2iv(this.addr,t),Sn(n,t)}}function UT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;r.uniform3iv(this.addr,t),Sn(n,t)}}function LT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4iv(this.addr,t),Sn(n,t)}}function NT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function OT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2uiv(this.addr,t),Sn(n,t)}}function PT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;r.uniform3uiv(this.addr,t),Sn(n,t)}}function zT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4uiv(this.addr,t),Sn(n,t)}}function IT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Y_.compareFunction=Nv,c=Y_):c=ay,n.setTexture2D(t||c,l)}function BT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||ry,l)}function FT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||oy,l)}function HT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||sy,l)}function GT(r){switch(r){case 5126:return MT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return LT;case 5125:return NT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return HT}}function VT(r,t){r.uniform1fv(this.addr,t)}function kT(r,t){const n=eo(t,this.size,2);r.uniform2fv(this.addr,n)}function XT(r,t){const n=eo(t,this.size,3);r.uniform3fv(this.addr,n)}function WT(r,t){const n=eo(t,this.size,4);r.uniform4fv(this.addr,n)}function YT(r,t){const n=eo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function qT(r,t){const n=eo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function ZT(r,t){const n=eo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function jT(r,t){r.uniform1iv(this.addr,t)}function KT(r,t){r.uniform2iv(this.addr,t)}function QT(r,t){r.uniform3iv(this.addr,t)}function JT(r,t){r.uniform4iv(this.addr,t)}function $T(r,t){r.uniform1uiv(this.addr,t)}function tA(r,t){r.uniform2uiv(this.addr,t)}function eA(r,t){r.uniform3uiv(this.addr,t)}function nA(r,t){r.uniform4uiv(this.addr,t)}function iA(r,t,n){const a=this.cache,l=t.length,c=fu(n,l);yn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==l;++u)n.setTexture2D(t[u]||ay,c[u])}function aA(r,t,n){const a=this.cache,l=t.length,c=fu(n,l);yn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==l;++u)n.setTexture3D(t[u]||ry,c[u])}function sA(r,t,n){const a=this.cache,l=t.length,c=fu(n,l);yn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==l;++u)n.setTextureCube(t[u]||oy,c[u])}function rA(r,t,n){const a=this.cache,l=t.length,c=fu(n,l);yn(a,c)||(r.uniform1iv(this.addr,c),Sn(a,c));for(let u=0;u!==l;++u)n.setTexture2DArray(t[u]||sy,c[u])}function oA(r){switch(r){case 5126:return VT;case 35664:return kT;case 35665:return XT;case 35666:return WT;case 35674:return YT;case 35675:return qT;case 35676:return ZT;case 5124:case 35670:return jT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return tA;case 36295:return eA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}class lA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=GT(n.type)}}class cA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oA(n.type)}}class uA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const h=l[c];h.setValue(t,n[h.id],a)}}}const id=/(\w+)(\])?(\[|\.)?/g;function J_(r,t){r.seq.push(t),r.map[t.id]=t}function fA(r,t,n){const a=r.name,l=a.length;for(id.lastIndex=0;;){const c=id.exec(a),u=id.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===l){J_(n,m===void 0?new lA(h,r,t):new cA(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new uA(h),J_(n,_)),n=_}}}class au{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(n,l),u=t.getUniformLocation(n,c.name);fA(c,u,this)}}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const u=t[l];u.id in n&&a.push(u)}return a}}function $_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const hA=37297;let dA=0;function pA(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=l;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const tv=new ce;function mA(r){Ue._getMatrix(tv,Ue.workingColorSpace,r);const t=`mat3( ${tv.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(r)){case su:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ev(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+pA(r.getShaderSource(t),u)}else return l}function gA(r,t){const n=mA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function _A(r,t){let n;switch(t){case Yx:n="Linear";break;case qx:n="Reinhard";break;case Zx:n="Cineon";break;case Sv:n="ACESFilmic";break;case Kx:n="AgX";break;case Qx:n="Neutral";break;case jx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zc=new V;function vA(){Ue.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),n=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function SA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function xA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function nl(r){return r!==""}function nv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(r){return r.replace(MA,bA)}const EA=new Map;function bA(r,t){let n=ue[t];if(n===void 0){const a=EA.get(t);if(a!==void 0)n=ue[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return jd(n)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(r){return r.replace(TA,AA)}function AA(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function sv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function RA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_v?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===vv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function CA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zr:case jr:t="ENVMAP_TYPE_CUBE";break;case lu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wA(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===jr&&(t="ENVMAP_MODE_REFRACTION"),t}function DA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case yv:t="ENVMAP_BLENDING_MULTIPLY";break;case Xx:t="ENVMAP_BLENDING_MIX";break;case Wx:t="ENVMAP_BLENDING_ADD";break}return t}function UA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function LA(r,t,n,a){const l=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=RA(n),m=CA(n),g=wA(n),_=DA(n),y=UA(n),x=yA(n),E=SA(c),R=l.createProgram();let M,v,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),v.length>0&&(v+=`
`)):(M=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),v=[sv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==is?"#define TONE_MAPPING":"",n.toneMapping!==is?ue.tonemapping_pars_fragment:"",n.toneMapping!==is?_A("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,gA("linearToOutputTexel",n.outputColorSpace),vA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),u=jd(u),u=nv(u,n),u=iv(u,n),h=jd(h),h=nv(h,n),h=iv(h,n),u=av(u),h=av(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",n.glslVersion===u_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===u_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+M+u,C=O+v+h,k=$_(l,l.VERTEX_SHADER,U),B=$_(l,l.FRAGMENT_SHADER,C);l.attachShader(R,k),l.attachShader(R,B),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(F){if(r.debug.checkShaderErrors){const rt=l.getProgramInfoLog(R).trim(),at=l.getShaderInfoLog(k).trim(),ft=l.getShaderInfoLog(B).trim();let pt=!0,P=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(pt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,k,B);else{const Q=ev(l,k,"vertex"),K=ev(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+Q+`
`+K)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(at===""||ft==="")&&(P=!1);P&&(F.diagnostics={runnable:pt,programLog:rt,vertexShader:{log:at,prefix:M},fragmentShader:{log:ft,prefix:v}})}l.deleteShader(k),l.deleteShader(B),X=new au(l,R),D=xA(l,R)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,hA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=B,this}let NA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(l)===!1&&(u.add(l),l.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new PA(t),n.set(t,a)),a}}class PA{constructor(t){this.id=NA++,this.code=t,this.usedTimes=0}}function zA(r,t,n,a,l,c,u){const h=new Bv,p=new OA,m=new Set,g=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,w,F,rt,at){const ft=rt.fog,pt=at.geometry,P=D.isMeshStandardMaterial?rt.environment:null,Q=(D.isMeshStandardMaterial?n:t).get(D.envMap||P),K=Q&&Q.mapping===lu?Q.image.height:null,xt=E[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const bt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,N=bt!==void 0?bt.length:0;let nt=0;pt.morphAttributes.position!==void 0&&(nt=1),pt.morphAttributes.normal!==void 0&&(nt=2),pt.morphAttributes.color!==void 0&&(nt=3);let St,j,ct,Et;if(xt){const Ae=Hi[xt];St=Ae.vertexShader,j=Ae.fragmentShader}else St=D.vertexShader,j=D.fragmentShader,p.update(D),ct=p.getVertexShaderID(D),Et=p.getFragmentShaderID(D);const yt=r.getRenderTarget(),Vt=r.state.buffers.depth.getReversed(),Ht=at.isInstancedMesh===!0,ie=at.isBatchedMesh===!0,ze=!!D.map,de=!!D.matcap,Ke=!!Q,H=!!D.aoMap,Un=!!D.lightMap,he=!!D.bumpMap,ye=!!D.normalMap,qt=!!D.displacementMap,Ne=!!D.emissiveMap,Yt=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,et=D.clearcoat>0,ht=D.dispersion>0,Mt=D.iridescence>0,mt=D.sheen>0,Xt=D.transmission>0,wt=T&&!!D.anisotropyMap,It=et&&!!D.clearcoatMap,Se=et&&!!D.clearcoatNormalMap,Tt=et&&!!D.clearcoatRoughnessMap,Bt=Mt&&!!D.iridescenceMap,Zt=Mt&&!!D.iridescenceThicknessMap,Wt=mt&&!!D.sheenColorMap,Nt=mt&&!!D.sheenRoughnessMap,$t=!!D.specularMap,ae=!!D.specularColorMap,Ie=!!D.specularIntensityMap,W=Xt&&!!D.transmissionMap,Rt=Xt&&!!D.thicknessMap,lt=!!D.gradientMap,_t=!!D.alphaMap,Ct=D.alphaTest>0,Dt=!!D.alphaHash,te=!!D.extensions;let Qe=is;D.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const mn={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:j,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:Et,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:ie,batchingColor:ie&&at._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&at.instanceColor!==null,instancingMorph:Ht&&at.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Jr,alphaToCoverage:!!D.alphaToCoverage,map:ze,matcap:de,envMap:Ke,envMapMode:Ke&&Q.mapping,envMapCubeUVHeight:K,aoMap:H,lightMap:Un,bumpMap:he,normalMap:ye,displacementMap:y&&qt,emissiveMap:Ne,normalMapObjectSpace:ye&&D.normalMapType===eM,normalMapTangentSpace:ye&&D.normalMapType===Lv,metalnessMap:Yt,roughnessMap:L,anisotropy:T,anisotropyMap:wt,clearcoat:et,clearcoatMap:It,clearcoatNormalMap:Se,clearcoatRoughnessMap:Tt,dispersion:ht,iridescence:Mt,iridescenceMap:Bt,iridescenceThicknessMap:Zt,sheen:mt,sheenColorMap:Wt,sheenRoughnessMap:Nt,specularMap:$t,specularColorMap:ae,specularIntensityMap:Ie,transmission:Xt,transmissionMap:W,thicknessMap:Rt,gradientMap:lt,opaque:D.transparent===!1&&D.blending===Xr&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:D.combine,mapUv:ze&&R(D.map.channel),aoMapUv:H&&R(D.aoMap.channel),lightMapUv:Un&&R(D.lightMap.channel),bumpMapUv:he&&R(D.bumpMap.channel),normalMapUv:ye&&R(D.normalMap.channel),displacementMapUv:qt&&R(D.displacementMap.channel),emissiveMapUv:Ne&&R(D.emissiveMap.channel),metalnessMapUv:Yt&&R(D.metalnessMap.channel),roughnessMapUv:L&&R(D.roughnessMap.channel),anisotropyMapUv:wt&&R(D.anisotropyMap.channel),clearcoatMapUv:It&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Se&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(D.sheenRoughnessMap.channel),specularMapUv:$t&&R(D.specularMap.channel),specularColorMapUv:ae&&R(D.specularColorMap.channel),specularIntensityMapUv:Ie&&R(D.specularIntensityMap.channel),transmissionMapUv:W&&R(D.transmissionMap.channel),thicknessMapUv:Rt&&R(D.thicknessMap.channel),alphaMapUv:_t&&R(D.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(ye||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!pt.attributes.uv&&(ze||_t),fog:!!ft,useFog:D.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Vt,skinning:at.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ze&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ne&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===va,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:te&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&D.extensions.multiDraw===!0||ie)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return mn.vertexUv1s=m.has(1),mn.vertexUv2s=m.has(2),mn.vertexUv3s=m.has(3),m.clear(),mn}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)w.push(F),w.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(O(w,D),U(w,D),w.push(r.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reverseDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function C(D){const w=E[D.type];let F;if(w){const rt=Hi[w];F=LM.clone(rt.uniforms)}else F=D.uniforms;return F}function k(D,w){let F;for(let rt=0,at=g.length;rt<at;rt++){const ft=g[rt];if(ft.cacheKey===w){F=ft,++F.usedTimes;break}}return F===void 0&&(F=new LA(r,w,D,c),g.push(F)),F}function B(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function z(D){p.remove(D)}function X(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:C,acquireProgram:k,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:X}}function IA(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function l(u,h,p){r.get(u)[h]=p}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function BA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function rv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ov(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function u(_,y,x,E,R,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:x,groupOrder:E,renderOrder:_.renderOrder,z:R,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=x,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=R,v.group=M),t++,v}function h(_,y,x,E,R,M){const v=u(_,y,x,E,R,M);x.transmission>0?a.push(v):x.transparent===!0?l.push(v):n.push(v)}function p(_,y,x,E,R,M){const v=u(_,y,x,E,R,M);x.transmission>0?a.unshift(v):x.transparent===!0?l.unshift(v):n.unshift(v)}function m(_,y){n.length>1&&n.sort(_||BA),a.length>1&&a.sort(y||rv),l.length>1&&l.sort(y||rv)}function g(){for(let _=t,y=r.length;_<y;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function FA(){let r=new WeakMap;function t(a,l){const c=r.get(a);let u;return c===void 0?(u=new ov,r.set(a,[u])):l>=c.length?(u=new ov,c.push(u)):u=c[l],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function HA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new ve};break;case"SpotLight":n={position:new V,direction:new V,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":n={color:new ve,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=n,n}}}function GA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let VA=0;function kA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function XA(r){const t=new HA,n=GA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new V);const l=new V,c=new $e,u=new $e;function h(m){let g=0,_=0,y=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let x=0,E=0,R=0,M=0,v=0,O=0,U=0,C=0,k=0,B=0,z=0;m.sort(kA);for(let D=0,w=m.length;D<w;D++){const F=m[D],rt=F.color,at=F.intensity,ft=F.distance,pt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=rt.r*at,_+=rt.g*at,y+=rt.b*at;else if(F.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(F.sh.coefficients[P],at);z++}else if(F.isDirectionalLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Q=F.shadow,K=n.get(F);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,a.directionalShadow[x]=K,a.directionalShadowMap[x]=pt,a.directionalShadowMatrix[x]=F.shadow.matrix,O++}a.directional[x]=P,x++}else if(F.isSpotLight){const P=t.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(rt).multiplyScalar(at),P.distance=ft,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,a.spot[R]=P;const Q=F.shadow;if(F.map&&(a.spotLightMap[k]=F.map,k++,Q.updateMatrices(F),F.castShadow&&B++),a.spotLightMatrix[R]=Q.matrix,F.castShadow){const K=n.get(F);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,a.spotShadow[R]=K,a.spotShadowMap[R]=pt,C++}R++}else if(F.isRectAreaLight){const P=t.get(F);P.color.copy(rt).multiplyScalar(at),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),a.rectArea[M]=P,M++}else if(F.isPointLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const Q=F.shadow,K=n.get(F);K.shadowIntensity=Q.intensity,K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,a.pointShadow[E]=K,a.pointShadowMap[E]=pt,a.pointShadowMatrix[E]=F.shadow.matrix,U++}a.point[E]=P,E++}else if(F.isHemisphereLight){const P=t.get(F);P.skyColor.copy(F.color).multiplyScalar(at),P.groundColor.copy(F.groundColor).multiplyScalar(at),a.hemi[v]=P,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_FLOAT_1,a.rectAreaLTC2=Lt.LTC_FLOAT_2):(a.rectAreaLTC1=Lt.LTC_HALF_1,a.rectAreaLTC2=Lt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=y;const X=a.hash;(X.directionalLength!==x||X.pointLength!==E||X.spotLength!==R||X.rectAreaLength!==M||X.hemiLength!==v||X.numDirectionalShadows!==O||X.numPointShadows!==U||X.numSpotShadows!==C||X.numSpotMaps!==k||X.numLightProbes!==z)&&(a.directional.length=x,a.spot.length=R,a.rectArea.length=M,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=C+k-B,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,X.directionalLength=x,X.pointLength=E,X.spotLength=R,X.rectAreaLength=M,X.hemiLength=v,X.numDirectionalShadows=O,X.numPointShadows=U,X.numSpotShadows=C,X.numSpotMaps=k,X.numLightProbes=z,a.version=VA++)}function p(m,g){let _=0,y=0,x=0,E=0,R=0;const M=g.matrixWorldInverse;for(let v=0,O=m.length;v<O;v++){const U=m[v];if(U.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),_++}else if(U.isSpotLight){const C=a.spot[x];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),x++}else if(U.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),u.identity(),c.copy(U.matrixWorld),c.premultiply(M),u.extractRotation(c),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(U.isPointLight){const C=a.point[y];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const C=a.hemi[R];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),R++}}}return{setup:h,setupView:p,state:a}}function lv(r){const t=new XA(r),n=[],a=[];function l(g){m.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function WA(r){let t=new WeakMap;function n(l,c=0){const u=t.get(l);let h;return u===void 0?(h=new lv(r),t.set(l,[h])):c>=u.length?(h=new lv(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
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
}`;function ZA(r,t,n){let a=new rp;const l=new Ot,c=new Ot,u=new ke,h=new _1({depthPacking:tM}),p=new v1,m={},g=n.maxTextureSize,_={[as]:Vn,[Vn]:as,[va]:va},y=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:YA,fragmentShader:qA}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new Xi;E.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Te(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_v;let v=this.type;this.render=function(B,z,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=r.getRenderTarget(),w=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),rt=r.state;rt.setBlending(ns),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const at=v!==ga&&this.type===ga,ft=v===ga&&this.type!==ga;for(let pt=0,P=B.length;pt<P;pt++){const Q=B[pt],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const xt=K.getFrameExtents();if(l.multiply(xt),c.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,K.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,K.mapSize.y=c.y)),K.map===null||at===!0||ft===!0){const N=this.type!==ga?{minFilter:Ni,magFilter:Ni}:{};K.map!==null&&K.map.dispose(),K.map=new Fs(l.x,l.y,N),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();const bt=K.getViewportCount();for(let N=0;N<bt;N++){const nt=K.getViewport(N);u.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),rt.viewport(u),K.updateMatrices(Q,N),a=K.getFrustum(),C(z,X,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===ga&&O(K,X),K.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(D,w,F)};function O(B,z){const X=t.update(R);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Fs(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,X,y,R,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,X,x,R,null)}function U(B,z,X,D){let w=null;const F=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)w=F;else if(w=X.isPointLight===!0?p:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const rt=w.uuid,at=z.uuid;let ft=m[rt];ft===void 0&&(ft={},m[rt]=ft);let pt=ft[at];pt===void 0&&(pt=w.clone(),ft[at]=pt,z.addEventListener("dispose",k)),w=pt}if(w.visible=z.visible,w.wireframe=z.wireframe,D===ga?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const rt=r.properties.get(w);rt.light=X}return w}function C(B,z,X,D,w){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===ga)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const at=t.update(B),ft=B.material;if(Array.isArray(ft)){const pt=at.groups;for(let P=0,Q=pt.length;P<Q;P++){const K=pt[P],xt=ft[K.materialIndex];if(xt&&xt.visible){const bt=U(B,xt,D,w);B.onBeforeShadow(r,B,z,X,at,bt,K),r.renderBufferDirect(X,null,at,bt,B,K),B.onAfterShadow(r,B,z,X,at,bt,K)}}}else if(ft.visible){const pt=U(B,ft,D,w);B.onBeforeShadow(r,B,z,X,at,pt,null),r.renderBufferDirect(X,null,at,pt,B,null),B.onAfterShadow(r,B,z,X,at,pt,null)}}const rt=B.children;for(let at=0,ft=rt.length;at<ft;at++)C(rt[at],z,X,D,w)}function k(B){B.target.removeEventListener("dispose",k);for(const X in m){const D=m[X],w=B.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const jA={[cd]:ud,[fd]:pd,[hd]:md,[qr]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:qr};function KA(r,t){function n(){let W=!1;const Rt=new ke;let lt=null;const _t=new ke(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!W&&(r.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){W=Ct},setClear:function(Ct,Dt,te,Qe,mn){mn===!0&&(Ct*=Qe,Dt*=Qe,te*=Qe),Rt.set(Ct,Dt,te,Qe),_t.equals(Rt)===!1&&(r.clearColor(Ct,Dt,te,Qe),_t.copy(Rt))},reset:function(){W=!1,lt=null,_t.set(-1,0,0,0)}}}function a(){let W=!1,Rt=!1,lt=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const te=t.get("EXT_clip_control");Rt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Qe=Ct;Ct=null,this.setClear(Qe)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?yt(r.DEPTH_TEST):Vt(r.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!W&&(r.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Rt&&(Dt=jA[Dt]),_t!==Dt){switch(Dt){case cd:r.depthFunc(r.NEVER);break;case ud:r.depthFunc(r.ALWAYS);break;case fd:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case hd:r.depthFunc(r.EQUAL);break;case dd:r.depthFunc(r.GEQUAL);break;case pd:r.depthFunc(r.GREATER);break;case md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Dt}},setLocked:function(Dt){W=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),r.clearDepth(Dt),Ct=Dt)},reset:function(){W=!1,lt=null,_t=null,Ct=null,Rt=!1}}}function l(){let W=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,te=null,Qe=null,mn=null;return{setTest:function(Ae){W||(Ae?yt(r.STENCIL_TEST):Vt(r.STENCIL_TEST))},setMask:function(Ae){Rt!==Ae&&!W&&(r.stencilMask(Ae),Rt=Ae)},setFunc:function(Ae,bn,xi){(lt!==Ae||_t!==bn||Ct!==xi)&&(r.stencilFunc(Ae,bn,xi),lt=Ae,_t=bn,Ct=xi)},setOp:function(Ae,bn,xi){(Dt!==Ae||te!==bn||Qe!==xi)&&(r.stencilOp(Ae,bn,xi),Dt=Ae,te=bn,Qe=xi)},setLocked:function(Ae){W=Ae},setClear:function(Ae){mn!==Ae&&(r.clearStencil(Ae),mn=Ae)},reset:function(){W=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,te=null,Qe=null,mn=null}}}const c=new n,u=new a,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},y=new WeakMap,x=[],E=null,R=!1,M=null,v=null,O=null,U=null,C=null,k=null,B=null,z=new ve(0,0,0),X=0,D=!1,w=null,F=null,rt=null,at=null,ft=null;const pt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(K)[1]),P=Q>=1):K.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),P=Q>=2);let xt=null,bt={};const N=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),St=new ke().fromArray(N),j=new ke().fromArray(nt);function ct(W,Rt,lt,_t){const Ct=new Uint8Array(4),Dt=r.createTexture();r.bindTexture(W,Dt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<lt;te++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(Rt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Dt}const Et={};Et[r.TEXTURE_2D]=ct(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),u.setFunc(qr),he(!1),ye(a_),yt(r.CULL_FACE),H(ns);function yt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Vt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Ht(W,Rt){return _[W]!==Rt?(r.bindFramebuffer(W,Rt),_[W]=Rt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Rt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ie(W,Rt){let lt=x,_t=!1;if(W){lt=y.get(Rt),lt===void 0&&(lt=[],y.set(Rt,lt));const Ct=W.textures;if(lt.length!==Ct.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Dt=0,te=Ct.length;Dt<te;Dt++)lt[Dt]=r.COLOR_ATTACHMENT0+Dt;lt.length=Ct.length,_t=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,_t=!0);_t&&r.drawBuffers(lt)}function ze(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const de={[Os]:r.FUNC_ADD,[Rx]:r.FUNC_SUBTRACT,[Cx]:r.FUNC_REVERSE_SUBTRACT};de[wx]=r.MIN,de[Dx]=r.MAX;const Ke={[Ux]:r.ZERO,[Lx]:r.ONE,[Nx]:r.SRC_COLOR,[od]:r.SRC_ALPHA,[Fx]:r.SRC_ALPHA_SATURATE,[Ix]:r.DST_COLOR,[Px]:r.DST_ALPHA,[Ox]:r.ONE_MINUS_SRC_COLOR,[ld]:r.ONE_MINUS_SRC_ALPHA,[Bx]:r.ONE_MINUS_DST_COLOR,[zx]:r.ONE_MINUS_DST_ALPHA,[Hx]:r.CONSTANT_COLOR,[Gx]:r.ONE_MINUS_CONSTANT_COLOR,[Vx]:r.CONSTANT_ALPHA,[kx]:r.ONE_MINUS_CONSTANT_ALPHA};function H(W,Rt,lt,_t,Ct,Dt,te,Qe,mn,Ae){if(W===ns){R===!0&&(Vt(r.BLEND),R=!1);return}if(R===!1&&(yt(r.BLEND),R=!0),W!==Ax){if(W!==M||Ae!==D){if((v!==Os||C!==Os)&&(r.blendEquation(r.FUNC_ADD),v=Os,C=Os),Ae)switch(W){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case s_:r.blendFunc(r.ONE,r.ONE);break;case r_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case o_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case s_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case r_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case o_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,U=null,k=null,B=null,z.set(0,0,0),X=0,M=W,D=Ae}return}Ct=Ct||Rt,Dt=Dt||lt,te=te||_t,(Rt!==v||Ct!==C)&&(r.blendEquationSeparate(de[Rt],de[Ct]),v=Rt,C=Ct),(lt!==O||_t!==U||Dt!==k||te!==B)&&(r.blendFuncSeparate(Ke[lt],Ke[_t],Ke[Dt],Ke[te]),O=lt,U=_t,k=Dt,B=te),(Qe.equals(z)===!1||mn!==X)&&(r.blendColor(Qe.r,Qe.g,Qe.b,mn),z.copy(Qe),X=mn),M=W,D=!1}function Un(W,Rt){W.side===va?Vt(r.CULL_FACE):yt(r.CULL_FACE);let lt=W.side===Vn;Rt&&(lt=!lt),he(lt),W.blending===Xr&&W.transparent===!1?H(ns):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const _t=W.stencilWrite;h.setTest(_t),_t&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function he(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function ye(W){W!==bx?(yt(r.CULL_FACE),W!==F&&(W===a_?r.cullFace(r.BACK):W===Tx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Vt(r.CULL_FACE),F=W}function qt(W){W!==rt&&(P&&r.lineWidth(W),rt=W)}function Ne(W,Rt,lt){W?(yt(r.POLYGON_OFFSET_FILL),(at!==Rt||ft!==lt)&&(r.polygonOffset(Rt,lt),at=Rt,ft=lt)):Vt(r.POLYGON_OFFSET_FILL)}function Yt(W){W?yt(r.SCISSOR_TEST):Vt(r.SCISSOR_TEST)}function L(W){W===void 0&&(W=r.TEXTURE0+pt-1),xt!==W&&(r.activeTexture(W),xt=W)}function T(W,Rt,lt){lt===void 0&&(xt===null?lt=r.TEXTURE0+pt-1:lt=xt);let _t=bt[lt];_t===void 0&&(_t={type:void 0,texture:void 0},bt[lt]=_t),(_t.type!==W||_t.texture!==Rt)&&(xt!==lt&&(r.activeTexture(lt),xt=lt),r.bindTexture(W,Rt||Et[W]),_t.type=W,_t.texture=Rt)}function et(){const W=bt[xt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xt(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(W){St.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),St.copy(W))}function Nt(W){j.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function $t(W,Rt){let lt=m.get(Rt);lt===void 0&&(lt=new WeakMap,m.set(Rt,lt));let _t=lt.get(W);_t===void 0&&(_t=r.getUniformBlockIndex(Rt,W.name),lt.set(W,_t))}function ae(W,Rt){const _t=m.get(Rt).get(W);p.get(Rt)!==_t&&(r.uniformBlockBinding(Rt,_t,W.__bindingPointIndex),p.set(Rt,_t))}function Ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},xt=null,bt={},_={},y=new WeakMap,x=[],E=null,R=!1,M=null,v=null,O=null,U=null,C=null,k=null,B=null,z=new ve(0,0,0),X=0,D=!1,w=null,F=null,rt=null,at=null,ft=null,St.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:yt,disable:Vt,bindFramebuffer:Ht,drawBuffers:ie,useProgram:ze,setBlending:H,setMaterial:Un,setFlipSided:he,setCullFace:ye,setLineWidth:qt,setPolygonOffset:Ne,setScissorTest:Yt,activeTexture:L,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:Mt,texImage2D:Bt,texImage3D:Zt,updateUBOMapping:$t,uniformBlockBinding:ae,texStorage2D:Se,texStorage3D:Tt,texSubImage2D:mt,texSubImage3D:Xt,compressedTexSubImage2D:wt,compressedTexSubImage3D:It,scissor:Wt,viewport:Nt,reset:Ie}}function QA(r,t,n,a,l,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ot,g=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return x?new OffscreenCanvas(L,T):ou("canvas")}function R(L,T,et){let ht=1;const Mt=Yt(L);if((Mt.width>et||Mt.height>et)&&(ht=et/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const mt=Math.floor(ht*Mt.width),Xt=Math.floor(ht*Mt.height);_===void 0&&(_=E(mt,Xt));const wt=T?E(mt,Xt):_;return wt.width=mt,wt.height=Xt,wt.getContext("2d").drawImage(L,0,0,mt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Xt+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,T,et,ht,Mt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let mt=T;if(T===r.RED&&(et===r.FLOAT&&(mt=r.R32F),et===r.HALF_FLOAT&&(mt=r.R16F),et===r.UNSIGNED_BYTE&&(mt=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(mt=r.R8UI),et===r.UNSIGNED_SHORT&&(mt=r.R16UI),et===r.UNSIGNED_INT&&(mt=r.R32UI),et===r.BYTE&&(mt=r.R8I),et===r.SHORT&&(mt=r.R16I),et===r.INT&&(mt=r.R32I)),T===r.RG&&(et===r.FLOAT&&(mt=r.RG32F),et===r.HALF_FLOAT&&(mt=r.RG16F),et===r.UNSIGNED_BYTE&&(mt=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(mt=r.RG8UI),et===r.UNSIGNED_SHORT&&(mt=r.RG16UI),et===r.UNSIGNED_INT&&(mt=r.RG32UI),et===r.BYTE&&(mt=r.RG8I),et===r.SHORT&&(mt=r.RG16I),et===r.INT&&(mt=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(mt=r.RGB8UI),et===r.UNSIGNED_SHORT&&(mt=r.RGB16UI),et===r.UNSIGNED_INT&&(mt=r.RGB32UI),et===r.BYTE&&(mt=r.RGB8I),et===r.SHORT&&(mt=r.RGB16I),et===r.INT&&(mt=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(mt=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(mt=r.RGBA16UI),et===r.UNSIGNED_INT&&(mt=r.RGBA32UI),et===r.BYTE&&(mt=r.RGBA8I),et===r.SHORT&&(mt=r.RGBA16I),et===r.INT&&(mt=r.RGBA32I)),T===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(mt=r.RGB9_E5),T===r.RGBA){const Xt=Mt?su:Ue.getTransfer(ht);et===r.FLOAT&&(mt=r.RGBA32F),et===r.HALF_FLOAT&&(mt=r.RGBA16F),et===r.UNSIGNED_BYTE&&(mt=Xt===Ge?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(mt=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(mt=r.RGB5_A1)}return(mt===r.R16F||mt===r.R32F||mt===r.RG16F||mt===r.RG32F||mt===r.RGBA16F||mt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function C(L,T){let et;return L?T===null||T===Bs||T===Kr?et=r.DEPTH24_STENCIL8:T===ya?et=r.DEPTH32F_STENCIL8:T===rl&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bs||T===Kr?et=r.DEPTH_COMPONENT24:T===ya?et=r.DEPTH_COMPONENT32F:T===rl&&(et=r.DEPTH_COMPONENT16),et}function k(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ni&&L.minFilter!==Gi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function B(L){const T=L.target;T.removeEventListener("dispose",B),X(T),T.isVideoTexture&&g.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),w(T)}function X(L){const T=a.get(L);if(T.__webglInit===void 0)return;const et=L.source,ht=y.get(et);if(ht){const Mt=ht[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(L),Object.keys(ht).length===0&&y.delete(et)}a.remove(L)}function D(L){const T=a.get(L);r.deleteTexture(T.__webglTexture);const et=L.source,ht=y.get(et);delete ht[T.__cacheKey],u.memory.textures--}function w(L){const T=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Mt=0;Mt<T.__webglFramebuffer[ht].length;Mt++)r.deleteFramebuffer(T.__webglFramebuffer[ht][Mt]);else r.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)r.deleteFramebuffer(T.__webglFramebuffer[ht]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=L.textures;for(let ht=0,Mt=et.length;ht<Mt;ht++){const mt=a.get(et[ht]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),u.memory.textures--),a.remove(et[ht])}a.remove(L)}let F=0;function rt(){F=0}function at(){const L=F;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),F+=1,L}function ft(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function pt(L,T){const et=a.get(L);if(L.isVideoTexture&&qt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(et,L,T);return}}n.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function P(L,T){const et=a.get(L);if(L.version>0&&et.__version!==L.version){j(et,L,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function Q(L,T){const et=a.get(L);if(L.version>0&&et.__version!==L.version){j(et,L,T);return}n.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function K(L,T){const et=a.get(L);if(L.version>0&&et.__version!==L.version){ct(et,L,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const xt={[_a]:r.REPEAT,[zs]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},bt={[Ni]:r.NEAREST,[Jx]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Gi]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[Is]:r.LINEAR_MIPMAP_LINEAR},N={[nM]:r.NEVER,[lM]:r.ALWAYS,[iM]:r.LESS,[Nv]:r.LEQUAL,[aM]:r.EQUAL,[oM]:r.GEQUAL,[sM]:r.GREATER,[rM]:r.NOTEQUAL};function nt(L,T){if(T.type===ya&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gi||T.magFilter===Th||T.magFilter===bc||T.magFilter===Is||T.minFilter===Gi||T.minFilter===Th||T.minFilter===bc||T.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,xt[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,xt[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,xt[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,bt[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ni||T.minFilter!==bc&&T.minFilter!==Is||T.type===ya&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function St(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const ht=T.source;let Mt=y.get(ht);Mt===void 0&&(Mt={},y.set(ht,Mt));const mt=ft(T);if(mt!==L.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,et=!0),Mt[mt].usedTimes++;const Xt=Mt[L.__cacheKey];Xt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(T)),L.__cacheKey=mt,L.__webglTexture=Mt[mt].texture}return et}function j(L,T,et){let ht=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=r.TEXTURE_3D);const Mt=St(L,T),mt=T.source;n.bindTexture(ht,L.__webglTexture,r.TEXTURE0+et);const Xt=a.get(mt);if(mt.version!==Xt.__version||Mt===!0){n.activeTexture(r.TEXTURE0+et);const wt=Ue.getPrimaries(Ue.workingColorSpace),It=T.colorSpace===ts?null:Ue.getPrimaries(T.colorSpace),Se=T.colorSpace===ts||wt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Tt=R(T.image,!1,l.maxTextureSize);Tt=Ne(T,Tt);const Bt=c.convert(T.format,T.colorSpace),Zt=c.convert(T.type);let Wt=U(T.internalFormat,Bt,Zt,T.colorSpace,T.isVideoTexture);nt(ht,T);let Nt;const $t=T.mipmaps,ae=T.isVideoTexture!==!0,Ie=Xt.__version===void 0||Mt===!0,W=mt.dataReady,Rt=k(T,Tt);if(T.isDepthTexture)Wt=C(T.format===Qr,T.type),Ie&&(ae?n.texStorage2D(r.TEXTURE_2D,1,Wt,Tt.width,Tt.height):n.texImage2D(r.TEXTURE_2D,0,Wt,Tt.width,Tt.height,0,Bt,Zt,null));else if(T.isDataTexture)if($t.length>0){ae&&Ie&&n.texStorage2D(r.TEXTURE_2D,Rt,Wt,$t[0].width,$t[0].height);for(let lt=0,_t=$t.length;lt<_t;lt++)Nt=$t[lt],ae?W&&n.texSubImage2D(r.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Zt,Nt.data):n.texImage2D(r.TEXTURE_2D,lt,Wt,Nt.width,Nt.height,0,Bt,Zt,Nt.data);T.generateMipmaps=!1}else ae?(Ie&&n.texStorage2D(r.TEXTURE_2D,Rt,Wt,Tt.width,Tt.height),W&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Bt,Zt,Tt.data)):n.texImage2D(r.TEXTURE_2D,0,Wt,Tt.width,Tt.height,0,Bt,Zt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Ie&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Wt,$t[0].width,$t[0].height,Tt.depth);for(let lt=0,_t=$t.length;lt<_t;lt++)if(Nt=$t[lt],T.format!==Li)if(Bt!==null)if(ae){if(W)if(T.layerUpdates.size>0){const Ct=F_(Nt.width,Nt.height,T.format,T.type);for(const Dt of T.layerUpdates){const te=Nt.data.subarray(Dt*Ct/Nt.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,Dt,Nt.width,Nt.height,1,Bt,te)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,Tt.depth,Bt,Nt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,Wt,Nt.width,Nt.height,Tt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?W&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,Tt.depth,Bt,Zt,Nt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,lt,Wt,Nt.width,Nt.height,Tt.depth,0,Bt,Zt,Nt.data)}else{ae&&Ie&&n.texStorage2D(r.TEXTURE_2D,Rt,Wt,$t[0].width,$t[0].height);for(let lt=0,_t=$t.length;lt<_t;lt++)Nt=$t[lt],T.format!==Li?Bt!==null?ae?W&&n.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Nt.data):n.compressedTexImage2D(r.TEXTURE_2D,lt,Wt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?W&&n.texSubImage2D(r.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Zt,Nt.data):n.texImage2D(r.TEXTURE_2D,lt,Wt,Nt.width,Nt.height,0,Bt,Zt,Nt.data)}else if(T.isDataArrayTexture)if(ae){if(Ie&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Wt,Tt.width,Tt.height,Tt.depth),W)if(T.layerUpdates.size>0){const lt=F_(Tt.width,Tt.height,T.format,T.type);for(const _t of T.layerUpdates){const Ct=Tt.data.subarray(_t*lt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*lt/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Bt,Zt,Ct)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Zt,Tt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,Tt.width,Tt.height,Tt.depth,0,Bt,Zt,Tt.data);else if(T.isData3DTexture)ae?(Ie&&n.texStorage3D(r.TEXTURE_3D,Rt,Wt,Tt.width,Tt.height,Tt.depth),W&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,Zt,Tt.data)):n.texImage3D(r.TEXTURE_3D,0,Wt,Tt.width,Tt.height,Tt.depth,0,Bt,Zt,Tt.data);else if(T.isFramebufferTexture){if(Ie)if(ae)n.texStorage2D(r.TEXTURE_2D,Rt,Wt,Tt.width,Tt.height);else{let lt=Tt.width,_t=Tt.height;for(let Ct=0;Ct<Rt;Ct++)n.texImage2D(r.TEXTURE_2D,Ct,Wt,lt,_t,0,Bt,Zt,null),lt>>=1,_t>>=1}}else if($t.length>0){if(ae&&Ie){const lt=Yt($t[0]);n.texStorage2D(r.TEXTURE_2D,Rt,Wt,lt.width,lt.height)}for(let lt=0,_t=$t.length;lt<_t;lt++)Nt=$t[lt],ae?W&&n.texSubImage2D(r.TEXTURE_2D,lt,0,0,Bt,Zt,Nt):n.texImage2D(r.TEXTURE_2D,lt,Wt,Bt,Zt,Nt);T.generateMipmaps=!1}else if(ae){if(Ie){const lt=Yt(Tt);n.texStorage2D(r.TEXTURE_2D,Rt,Wt,lt.width,lt.height)}W&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Zt,Tt)}else n.texImage2D(r.TEXTURE_2D,0,Wt,Bt,Zt,Tt);M(T)&&v(ht),Xt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ct(L,T,et){if(T.image.length!==6)return;const ht=St(L,T),Mt=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+et);const mt=a.get(Mt);if(Mt.version!==mt.__version||ht===!0){n.activeTexture(r.TEXTURE0+et);const Xt=Ue.getPrimaries(Ue.workingColorSpace),wt=T.colorSpace===ts?null:Ue.getPrimaries(T.colorSpace),It=T.colorSpace===ts||Xt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Se=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!Se&&!Tt?Bt[_t]=R(T.image[_t],!0,l.maxCubemapSize):Bt[_t]=Tt?T.image[_t].image:T.image[_t],Bt[_t]=Ne(T,Bt[_t]);const Zt=Bt[0],Wt=c.convert(T.format,T.colorSpace),Nt=c.convert(T.type),$t=U(T.internalFormat,Wt,Nt,T.colorSpace),ae=T.isVideoTexture!==!0,Ie=mt.__version===void 0||ht===!0,W=Mt.dataReady;let Rt=k(T,Zt);nt(r.TEXTURE_CUBE_MAP,T);let lt;if(Se){ae&&Ie&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,$t,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){lt=Bt[_t].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];T.format!==Li?Wt!==null?ae?W&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Wt,Dt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,$t,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Wt,Nt,Dt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,$t,Dt.width,Dt.height,0,Wt,Nt,Dt.data)}}}else{if(lt=T.mipmaps,ae&&Ie){lt.length>0&&Rt++;const _t=Yt(Bt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,$t,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){ae?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Wt,Nt,Bt[_t].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Bt[_t].width,Bt[_t].height,0,Wt,Nt,Bt[_t].data);for(let Ct=0;Ct<lt.length;Ct++){const te=lt[Ct].image[_t].image;ae?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,te.width,te.height,Wt,Nt,te.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,$t,te.width,te.height,0,Wt,Nt,te.data)}}else{ae?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,Nt,Bt[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Wt,Nt,Bt[_t]);for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];ae?W&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Wt,Nt,Dt.image[_t]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,$t,Wt,Nt,Dt.image[_t])}}}M(T)&&v(r.TEXTURE_CUBE_MAP),mt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Et(L,T,et,ht,Mt,mt){const Xt=c.convert(et.format,et.colorSpace),wt=c.convert(et.type),It=U(et.internalFormat,Xt,wt,et.colorSpace),Se=a.get(T),Tt=a.get(et);if(Tt.__renderTarget=T,!Se.__hasExternalTextures){const Bt=Math.max(1,T.width>>mt),Zt=Math.max(1,T.height>>mt);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?n.texImage3D(Mt,mt,It,Bt,Zt,T.depth,0,Xt,wt,null):n.texImage2D(Mt,mt,It,Bt,Zt,0,Xt,wt,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),ye(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,Mt,Tt.__webglTexture,0,he(T)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,Mt,Tt.__webglTexture,mt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(L,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const ht=T.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,mt=C(T.stencilBuffer,Mt),Xt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=he(T);ye(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,mt,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xt,r.RENDERBUFFER,L)}else{const ht=T.textures;for(let Mt=0;Mt<ht.length;Mt++){const mt=ht[Mt],Xt=c.convert(mt.format,mt.colorSpace),wt=c.convert(mt.type),It=U(mt.internalFormat,Xt,wt,mt.colorSpace),Se=he(T);et&&ye(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,It,T.width,T.height):ye(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,It,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,It,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const Mt=ht.__webglTexture,mt=he(T);if(T.depthTexture.format===Wr)ye(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,mt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Qr)ye(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,mt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Ht(L){const T=a.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ht}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Vt(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=r.createRenderbuffer(),yt(T.__webglDepthbuffer[ht],L,!1);else{const Mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,mt)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),yt(T.__webglDepthbuffer,L,!1);else{const ht=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,Mt)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(L,T,et){const ht=a.get(L);T!==void 0&&Et(ht.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Ht(L)}function ze(L){const T=L.texture,et=a.get(L),ht=a.get(T);L.addEventListener("dispose",z);const Mt=L.textures,mt=L.isWebGLCubeRenderTarget===!0,Xt=Mt.length>1;if(Xt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=T.version,u.memory.textures++),mt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let It=0;It<T.mipmaps.length;It++)et.__webglFramebuffer[wt][It]=r.createFramebuffer()}else et.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)et.__webglFramebuffer[wt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Xt)for(let wt=0,It=Mt.length;wt<It;wt++){const Se=a.get(Mt[wt]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&ye(L)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const It=Mt[wt];et.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const Se=c.convert(It.format,It.colorSpace),Tt=c.convert(It.type),Bt=U(It.internalFormat,Se,Tt,It.colorSpace,L.isXRRenderTarget===!0),Zt=he(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Bt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),yt(et.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){n.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(r.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)Et(et.__webglFramebuffer[wt][It],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It);else Et(et.__webglFramebuffer[wt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(T)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xt){for(let wt=0,It=Mt.length;wt<It;wt++){const Se=Mt[wt],Tt=a.get(Se);n.bindTexture(r.TEXTURE_2D,Tt.__webglTexture),nt(r.TEXTURE_2D,Se),Et(et.__webglFramebuffer,L,Se,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,0),M(Se)&&v(r.TEXTURE_2D)}n.unbindTexture()}else{let wt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(wt,ht.__webglTexture),nt(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)Et(et.__webglFramebuffer[It],L,T,r.COLOR_ATTACHMENT0,wt,It);else Et(et.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,wt,0);M(T)&&v(wt),n.unbindTexture()}L.depthBuffer&&Ht(L)}function de(L){const T=L.textures;for(let et=0,ht=T.length;et<ht;et++){const Mt=T[et];if(M(Mt)){const mt=O(L),Xt=a.get(Mt).__webglTexture;n.bindTexture(mt,Xt),v(mt),n.unbindTexture()}}}const Ke=[],H=[];function Un(L){if(L.samples>0){if(ye(L)===!1){const T=L.textures,et=L.width,ht=L.height;let Mt=r.COLOR_BUFFER_BIT;const mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xt=a.get(L),wt=T.length>1;if(wt)for(let It=0;It<T.length;It++)n.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let It=0;It<T.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[It]);const Se=a.get(T[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,et,ht,0,0,et,ht,Mt,r.NEAREST),p===!0&&(Ke.length=0,H.length=0,Ke.push(r.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ke.push(mt),H.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let It=0;It<T.length;It++){n.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Xt.__webglColorRenderbuffer[It]);const Se=a.get(T[It]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Se,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function he(L){return Math.min(l.maxSamples,L.samples)}function ye(L){const T=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qt(L){const T=u.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ne(L,T){const et=L.colorSpace,ht=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Jr&&et!==ts&&(Ue.getTransfer(et)===Ge?(ht!==Li||Mt!==Ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=at,this.resetTextureUnits=rt,this.setTexture2D=pt,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=K,this.rebindTextures=ie,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Un,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ye}function JA(r,t){function n(a,l=ts){let c;const u=Ue.getTransfer(l);if(a===Ma)return r.UNSIGNED_BYTE;if(a===$d)return r.UNSIGNED_SHORT_4_4_4_4;if(a===tp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===bv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Mv)return r.BYTE;if(a===Ev)return r.SHORT;if(a===rl)return r.UNSIGNED_SHORT;if(a===Jd)return r.INT;if(a===Bs)return r.UNSIGNED_INT;if(a===ya)return r.FLOAT;if(a===ul)return r.HALF_FLOAT;if(a===Tv)return r.ALPHA;if(a===Av)return r.RGB;if(a===Li)return r.RGBA;if(a===Rv)return r.LUMINANCE;if(a===Cv)return r.LUMINANCE_ALPHA;if(a===Wr)return r.DEPTH_COMPONENT;if(a===Qr)return r.DEPTH_STENCIL;if(a===wv)return r.RED;if(a===ep)return r.RED_INTEGER;if(a===Dv)return r.RG;if(a===np)return r.RG_INTEGER;if(a===ip)return r.RGBA_INTEGER;if(a===Jc||a===$c||a===tu||a===eu)if(u===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===yd||a===Sd||a===xd||a===Md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ed||a===bd||a===Td)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ed||a===bd)return u===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Td)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ad||a===Rd||a===Cd||a===wd||a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===Pd||a===zd||a===Id||a===Bd||a===Fd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ad)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Rd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Cd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===wd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Dd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ud)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ld)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Nd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Od)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===zd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Id)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Bd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Fd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===nu||a===Hd||a===Gd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===nu)return u===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Hd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Uv||a===Vd||a===kd||a===Xd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===nu)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Kr?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const $A={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){u=!0;for(const R of t.hand.values()){const M=n.getJointPose(R,a),v=this._getHandJoint(m,R);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=g.position.distanceTo(_.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent($A)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Jn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
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

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const l=new kn,c=t.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!=a.depthNear||n.depthFar!=a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ss({vertexShader:t2,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Te(new dl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i2 extends Vs{constructor(t,n){super();const a=this;let l=null,c=1,u=null,h="local-floor",p=1,m=null,g=null,_=null,y=null,x=null,E=null;const R=new n2,M=n.getContextAttributes();let v=null,O=null;const U=[],C=[],k=new Ot;let B=null;const z=new ui;z.viewport=new ke;const X=new ui;X.viewport=new ke;const D=[z,X],w=new E1;let F=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=U[j];return ct===void 0&&(ct=new ad,U[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=U[j];return ct===void 0&&(ct=new ad,U[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=U[j];return ct===void 0&&(ct=new ad,U[j]=ct),ct.getHandSpace()};function at(j){const ct=C.indexOf(j.inputSource);if(ct===-1)return;const Et=U[ct];Et!==void 0&&(Et.update(j.inputSource,j.frame,m||u),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function ft(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",pt);for(let j=0;j<U.length;j++){const ct=C[j];ct!==null&&(C[j]=null,U[j].disconnect(ct))}F=null,rt=null,R.reset(),t.setRenderTarget(v),x=null,y=null,_=null,l=null,O=null,St.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(k.width,k.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await n.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(k),l.renderState.layers===void 0){const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,n,ct),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new Fs(x.framebufferWidth,x.framebufferHeight,{format:Li,type:Ma,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ct=null,Et=null,yt=null;M.depth&&(yt=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ct=M.stencil?Qr:Wr,Et=M.stencil?Kr:Bs);const Vt={colorFormat:n.RGBA8,depthFormat:yt,scaleFactor:c};_=new XRWebGLBinding(l,n),y=_.createProjectionLayer(Vt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),O=new Fs(y.textureWidth,y.textureHeight,{format:Li,type:Ma,depthTexture:new Yv(y.textureWidth,y.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await l.requestReferenceSpace(h),St.setContext(l),St.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function pt(j){for(let ct=0;ct<j.removed.length;ct++){const Et=j.removed[ct],yt=C.indexOf(Et);yt>=0&&(C[yt]=null,U[yt].disconnect(Et))}for(let ct=0;ct<j.added.length;ct++){const Et=j.added[ct];let yt=C.indexOf(Et);if(yt===-1){for(let Ht=0;Ht<U.length;Ht++)if(Ht>=C.length){C.push(Et),yt=Ht;break}else if(C[Ht]===null){C[Ht]=Et,yt=Ht;break}if(yt===-1)break}const Vt=U[yt];Vt&&Vt.connect(Et)}}const P=new V,Q=new V;function K(j,ct,Et){P.setFromMatrixPosition(ct.matrixWorld),Q.setFromMatrixPosition(Et.matrixWorld);const yt=P.distanceTo(Q),Vt=ct.projectionMatrix.elements,Ht=Et.projectionMatrix.elements,ie=Vt[14]/(Vt[10]-1),ze=Vt[14]/(Vt[10]+1),de=(Vt[9]+1)/Vt[5],Ke=(Vt[9]-1)/Vt[5],H=(Vt[8]-1)/Vt[0],Un=(Ht[8]+1)/Ht[0],he=ie*H,ye=ie*Un,qt=yt/(-H+Un),Ne=qt*-H;if(ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ne),j.translateZ(qt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Vt[10]===-1)j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=ie+qt,L=ze+qt,T=he-Ne,et=ye+(yt-Ne),ht=de*ze/L*Yt,Mt=Ke*ze/L*Yt;j.projectionMatrix.makePerspective(T,et,ht,Mt,Yt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ct=j.near,Et=j.far;R.texture!==null&&(R.depthNear>0&&(ct=R.depthNear),R.depthFar>0&&(Et=R.depthFar)),w.near=X.near=z.near=ct,w.far=X.far=z.far=Et,(F!==w.near||rt!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,rt=w.far),z.layers.mask=j.layers.mask|2,X.layers.mask=j.layers.mask|4,w.layers.mask=z.layers.mask|X.layers.mask;const yt=j.parent,Vt=w.cameras;xt(w,yt);for(let Ht=0;Ht<Vt.length;Ht++)xt(Vt[Ht],yt);Vt.length===2?K(w,z,X):w.projectionMatrix.copy(z.projectionMatrix),bt(j,w,yt)};function bt(j,ct,Et){Et===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Wd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(j){p=j,y!==null&&(y.fixedFoveation=j),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=j)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let N=null;function nt(j,ct){if(g=ct.getViewerPose(m||u),E=ct,g!==null){const Et=g.views;x!==null&&(t.setRenderTargetFramebuffer(O,x.framebuffer),t.setRenderTarget(O));let yt=!1;Et.length!==w.cameras.length&&(w.cameras.length=0,yt=!0);for(let Ht=0;Ht<Et.length;Ht++){const ie=Et[Ht];let ze=null;if(x!==null)ze=x.getViewport(ie);else{const Ke=_.getViewSubImage(y,ie);ze=Ke.viewport,Ht===0&&(t.setRenderTargetTextures(O,Ke.colorTexture,y.ignoreDepthValues?void 0:Ke.depthStencilTexture),t.setRenderTarget(O))}let de=D[Ht];de===void 0&&(de=new ui,de.layers.enable(Ht),de.viewport=new ke,D[Ht]=de),de.matrix.fromArray(ie.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ie.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ze.x,ze.y,ze.width,ze.height),Ht===0&&(w.matrix.copy(de.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),yt===!0&&w.cameras.push(de)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")){const Ht=_.getDepthInformation(Et[0]);Ht&&Ht.isValid&&Ht.texture&&R.init(t,Ht,l.renderState)}}for(let Et=0;Et<U.length;Et++){const yt=C[Et],Vt=U[Et];yt!==null&&Vt!==void 0&&Vt.update(yt,ct,m||u)}N&&N(j,ct),ct.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ct}),E=null}const St=new iy;St.setAnimationLoop(nt),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}}const Us=new ki,a2=new $e;function s2(r,t){function n(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function a(M,v){v.color.getRGB(M.fogColor.value,Vv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,U,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&x(M,v,C)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),R(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(u(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?p(M,v,O,U):v.isSpriteMaterial?m(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,n(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Vn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,n(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Vn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,n(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,n(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=t.get(v),U=O.envMap,C=O.envMapRotation;U&&(M.envMap.value=U,Us.copy(C),Us.x*=-1,Us.y*=-1,Us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),M.envMapRotation.value.setFromMatrix4(a2.makeRotationFromEuler(Us)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,M.aoMapTransform))}function u(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,O,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=U*.5,v.map&&(M.map.value=v.map,n(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function m(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function x(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function R(M,v){const O=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function r2(r,t,n,a){let l={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,U){const C=U.program;a.uniformBlockBinding(O,C)}function m(O,U){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",M));const k=U.program;a.updateUBOMapping(O,k);const B=t.render.frame;c[O.id]!==B&&(y(O),c[O.id]=B)}function g(O){const U=_();O.__bindingPointIndex=U;const C=r.createBuffer(),k=O.__size,B=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,k,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,C),C}function _(){for(let O=0;O<h;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const U=l[O.id],C=O.uniforms,k=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,z=C.length;B<z;B++){const X=Array.isArray(C[B])?C[B]:[C[B]];for(let D=0,w=X.length;D<w;D++){const F=X[D];if(x(F,B,D,k)===!0){const rt=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let ft=0;for(let pt=0;pt<at.length;pt++){const P=at[pt],Q=R(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,rt+ft,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,ft),ft+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,rt,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(O,U,C,k){const B=O.value,z=U+"_"+C;if(k[z]===void 0)return typeof B=="number"||typeof B=="boolean"?k[z]=B:k[z]=B.clone(),!0;{const X=k[z];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return k[z]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(O){const U=O.uniforms;let C=0;const k=16;for(let z=0,X=U.length;z<X;z++){const D=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,F=D.length;w<F;w++){const rt=D[w],at=Array.isArray(rt.value)?rt.value:[rt.value];for(let ft=0,pt=at.length;ft<pt;ft++){const P=at[ft],Q=R(P),K=C%k,xt=K%Q.boundary,bt=K+xt;C+=xt,bt!==0&&k-bt<Q.storage&&(C+=k-bt),rt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=C,C+=Q.storage}}}const B=C%k;return B>0&&(C+=k-B),O.__size=C,O.__cache={},this}function R(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function M(O){const U=O.target;U.removeEventListener("dispose",M);const C=u.indexOf(U.__bindingPointIndex);u.splice(C,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const O in l)r.deleteBuffer(l[O]);u=[],l={},c={}}return{bind:p,update:m,dispose:v}}class o2{constructor(t={}){const{canvas:n=fM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,v=null;const O=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=is,this.toneMappingExposure=1;const C=this;let k=!1,B=0,z=0,X=null,D=-1,w=null;const F=new ke,rt=new ke;let at=null;const ft=new ve(0);let pt=0,P=n.width,Q=n.height,K=1,xt=null,bt=null;const N=new ke(0,0,P,Q),nt=new ke(0,0,P,Q);let St=!1;const j=new rp;let ct=!1,Et=!1;const yt=new $e,Vt=new $e,Ht=new V,ie=new ke,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Ke(){return X===null?K:1}let H=a;function Un(A,Y){return n.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",Ct,!1),n.addEventListener("webglcontextcreationerror",Dt,!1),H===null){const Y="webgl2";if(H=Un(Y,A),H===null)throw Un(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let he,ye,qt,Ne,Yt,L,T,et,ht,Mt,mt,Xt,wt,It,Se,Tt,Bt,Zt,Wt,Nt,$t,ae,Ie,W;function Rt(){he=new gT(H),he.init(),ae=new JA(H,he),ye=new uT(H,he,t,ae),qt=new KA(H,he),ye.reverseDepthBuffer&&y&&qt.buffers.depth.setReversed(!0),Ne=new yT(H),Yt=new IA,L=new QA(H,he,qt,Yt,ye,ae,Ne),T=new hT(C),et=new mT(C),ht=new A1(H),Ie=new lT(H,ht),Mt=new _T(H,ht,Ne,Ie),mt=new xT(H,Mt,ht,Ne),Wt=new ST(H,ye,L),Tt=new fT(Yt),Xt=new zA(C,T,et,he,ye,Ie,Tt),wt=new s2(C,Yt),It=new FA,Se=new WA(he),Zt=new oT(C,T,et,qt,mt,x,p),Bt=new ZA(C,mt,ye),W=new r2(H,Ne,ye,qt),Nt=new cT(H,he,Ne),$t=new vT(H,he,Ne),Ne.programs=Xt.programs,C.capabilities=ye,C.extensions=he,C.properties=Yt,C.renderLists=It,C.shadowMap=Bt,C.state=qt,C.info=Ne}Rt();const lt=new i2(C,H);this.xr=lt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(P,Q,!1))},this.getSize=function(A){return A.set(P,Q)},this.setSize=function(A,Y,it=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Q=Y,n.width=Math.floor(A*K),n.height=Math.floor(Y*K),it===!0&&(n.style.width=A+"px",n.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(P*K,Q*K).floor()},this.setDrawingBufferSize=function(A,Y,it){P=A,Q=Y,K=it,n.width=Math.floor(A*it),n.height=Math.floor(Y*it),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,Y,it,st){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,Y,it,st),qt.viewport(F.copy(N).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,Y,it,st){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,Y,it,st),qt.scissor(rt.copy(nt).multiplyScalar(K).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){qt.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){bt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(A=!0,Y=!0,it=!0){let st=0;if(A){let q=!1;if(X!==null){const vt=X.texture.format;q=vt===ip||vt===np||vt===ep}if(q){const vt=X.texture.type,Ut=vt===Ma||vt===Bs||vt===rl||vt===Kr||vt===$d||vt===tp,zt=Zt.getClearColor(),Pt=Zt.getClearAlpha(),Qt=zt.r,ee=zt.g,jt=zt.b;Ut?(E[0]=Qt,E[1]=ee,E[2]=jt,E[3]=Pt,H.clearBufferuiv(H.COLOR,0,E)):(R[0]=Qt,R[1]=ee,R[2]=jt,R[3]=Pt,H.clearBufferiv(H.COLOR,0,R))}else st|=H.COLOR_BUFFER_BIT}Y&&(st|=H.DEPTH_BUFFER_BIT),it&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",Ct,!1),n.removeEventListener("webglcontextcreationerror",Dt,!1),Zt.dispose(),It.dispose(),Se.dispose(),Yt.dispose(),T.dispose(),et.dispose(),mt.dispose(),Ie.dispose(),W.dispose(),Xt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",no),lt.removeEventListener("sessionend",io),Oi.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=Ne.autoReset,Y=Bt.enabled,it=Bt.autoUpdate,st=Bt.needsUpdate,q=Bt.type;Rt(),Ne.autoReset=A,Bt.enabled=Y,Bt.autoUpdate=it,Bt.needsUpdate=st,Bt.type=q}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function te(A){const Y=A.target;Y.removeEventListener("dispose",te),Qe(Y)}function Qe(A){mn(A),Yt.remove(A)}function mn(A){const Y=Yt.get(A).programs;Y!==void 0&&(Y.forEach(function(it){Xt.releaseProgram(it)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,it,st,q,vt){Y===null&&(Y=ze);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,zt=so(A,Y,it,st,q);qt.setMaterial(st,Ut);let Pt=it.index,Qt=1;if(st.wireframe===!0){if(Pt=Mt.getWireframeAttribute(it),Pt===void 0)return;Qt=2}const ee=it.drawRange,jt=it.attributes.position;let xe=ee.start*Qt,Re=(ee.start+ee.count)*Qt;vt!==null&&(xe=Math.max(xe,vt.start*Qt),Re=Math.min(Re,(vt.start+vt.count)*Qt)),Pt!==null?(xe=Math.max(xe,0),Re=Math.min(Re,Pt.count)):jt!=null&&(xe=Math.max(xe,0),Re=Math.min(Re,jt.count));const Ye=Re-xe;if(Ye<0||Ye===1/0)return;Ie.setup(q,st,zt,it,Pt);let Xe,se=Nt;if(Pt!==null&&(Xe=ht.get(Pt),se=$t,se.setIndex(Xe)),q.isMesh)st.wireframe===!0?(qt.setLineWidth(st.wireframeLinewidth*Ke()),se.setMode(H.LINES)):se.setMode(H.TRIANGLES);else if(q.isLine){let Gt=st.linewidth;Gt===void 0&&(Gt=1),qt.setLineWidth(Gt*Ke()),q.isLineSegments?se.setMode(H.LINES):q.isLineLoop?se.setMode(H.LINE_LOOP):se.setMode(H.LINE_STRIP)}else q.isPoints?se.setMode(H.POINTS):q.isSprite&&se.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Gt=q._multiDrawStarts,cn=q._multiDrawCounts,Ce=q._multiDrawCount,Bn=Pt?ht.get(Pt).bytesPerElement:1,qi=Yt.get(st).currentProgram.getUniforms();for(let xn=0;xn<Ce;xn++)qi.setValue(H,"_gl_DrawID",xn),se.render(Gt[xn]/Bn,cn[xn])}else if(q.isInstancedMesh)se.renderInstances(xe,Ye,q.count);else if(it.isInstancedBufferGeometry){const Gt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,cn=Math.min(it.instanceCount,Gt);se.renderInstances(xe,Ye,cn)}else se.render(xe,Ye)};function Ae(A,Y,it){A.transparent===!0&&A.side===va&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,nn(A,Y,it),A.side=as,A.needsUpdate=!0,nn(A,Y,it),A.side=va):nn(A,Y,it)}this.compile=function(A,Y,it=null){it===null&&(it=A),v=Se.get(it),v.init(Y),U.push(v),it.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),A!==it&&A.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const st=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const vt=q.material;if(vt)if(Array.isArray(vt))for(let Ut=0;Ut<vt.length;Ut++){const zt=vt[Ut];Ae(zt,it,q),st.add(zt)}else Ae(vt,it,q),st.add(vt)}),U.pop(),v=null,st},this.compileAsync=function(A,Y,it=null){const st=this.compile(A,Y,it);return new Promise(q=>{function vt(){if(st.forEach(function(Ut){Yt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){q(A);return}setTimeout(vt,10)}he.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let bn=null;function xi(A){bn&&bn(A)}function no(){Oi.stop()}function io(){Oi.start()}const Oi=new iy;Oi.setAnimationLoop(xi),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(A){bn=A,lt.setAnimationLoop(A),A===null?Oi.stop():Oi.start()},lt.addEventListener("sessionstart",no),lt.addEventListener("sessionend",io),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Y),Y=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,X),v=Se.get(A,U.length),v.init(Y),U.push(v),Vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),j.setFromProjectionMatrix(Vt),Et=this.localClippingEnabled,ct=Tt.init(this.clippingPlanes,Et),M=It.get(A,O.length),M.init(),O.push(M),lt.enabled===!0&&lt.isPresenting===!0){const vt=C.xr.getDepthSensingMesh();vt!==null&&rs(vt,Y,-1/0,C.sortObjects)}rs(A,Y,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(xt,bt),de=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,de&&Zt.addToRenderList(M,A),this.info.render.frame++,ct===!0&&Tt.beginShadows();const it=v.state.shadowsArray;Bt.render(it,A,Y),ct===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,q=M.transmissive;if(v.setupLights(),Y.isArrayCamera){const vt=Y.cameras;if(q.length>0)for(let Ut=0,zt=vt.length;Ut<zt;Ut++){const Pt=vt[Ut];ao(st,q,A,Pt)}de&&Zt.render(A);for(let Ut=0,zt=vt.length;Ut<zt;Ut++){const Pt=vt[Ut];ks(M,A,Pt,Pt.viewport)}}else q.length>0&&ao(st,q,A,Y),de&&Zt.render(A),ks(M,A,Y);X!==null&&(L.updateMultisampleRenderTarget(X),L.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,Y),Ie.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(v=U[U.length-1],ct===!0&&Tt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function rs(A,Y,it,st){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){st&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Vt);const Ut=mt.update(A),zt=A.material;zt.visible&&M.push(A,Ut,zt,it,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Ut=mt.update(A),zt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ie.copy(Ut.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(Vt)),Array.isArray(zt)){const Pt=Ut.groups;for(let Qt=0,ee=Pt.length;Qt<ee;Qt++){const jt=Pt[Qt],xe=zt[jt.materialIndex];xe&&xe.visible&&M.push(A,Ut,xe,it,ie.z,jt)}}else zt.visible&&M.push(A,Ut,zt,it,ie.z,null)}}const vt=A.children;for(let Ut=0,zt=vt.length;Ut<zt;Ut++)rs(vt[Ut],Y,it,st)}function ks(A,Y,it,st){const q=A.opaque,vt=A.transmissive,Ut=A.transparent;v.setupLightsView(it),ct===!0&&Tt.setGlobalState(C.clippingPlanes,it),st&&qt.viewport(F.copy(st)),q.length>0&&os(q,Y,it),vt.length>0&&os(vt,Y,it),Ut.length>0&&os(Ut,Y,it),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function ao(A,Y,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new Fs(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ul:Ma,minFilter:Is,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const vt=v.state.transmissionRenderTarget[st.id],Ut=st.viewport||F;vt.setSize(Ut.z,Ut.w);const zt=C.getRenderTarget();C.setRenderTarget(vt),C.getClearColor(ft),pt=C.getClearAlpha(),pt<1&&C.setClearColor(16777215,.5),C.clear(),de&&Zt.render(it);const Pt=C.toneMapping;C.toneMapping=is;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),ct===!0&&Tt.setGlobalState(C.clippingPlanes,st),os(A,it,st),L.updateMultisampleRenderTarget(vt),L.updateRenderTargetMipmap(vt),he.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let jt=0,xe=Y.length;jt<xe;jt++){const Re=Y[jt],Ye=Re.object,Xe=Re.geometry,se=Re.material,Gt=Re.group;if(se.side===va&&Ye.layers.test(st.layers)){const cn=se.side;se.side=Vn,se.needsUpdate=!0,Mi(Ye,it,st,Xe,se,Gt),se.side=cn,se.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(vt),L.updateRenderTargetMipmap(vt))}C.setRenderTarget(zt),C.setClearColor(ft,pt),Qt!==void 0&&(st.viewport=Qt),C.toneMapping=Pt}function os(A,Y,it){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,vt=A.length;q<vt;q++){const Ut=A[q],zt=Ut.object,Pt=Ut.geometry,Qt=st===null?Ut.material:st,ee=Ut.group;zt.layers.test(it.layers)&&Mi(zt,Y,it,Pt,Qt,ee)}}function Mi(A,Y,it,st,q,vt){A.onBeforeRender(C,Y,it,st,q,vt),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,Y,it,st,A,vt),q.transparent===!0&&q.side===va&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,C.renderBufferDirect(it,Y,st,q,A,vt),q.side=as,q.needsUpdate=!0,C.renderBufferDirect(it,Y,st,q,A,vt),q.side=va):C.renderBufferDirect(it,Y,st,q,A,vt),A.onAfterRender(C,Y,it,st,q,vt)}function nn(A,Y,it){Y.isScene!==!0&&(Y=ze);const st=Yt.get(A),q=v.state.lights,vt=v.state.shadowsArray,Ut=q.state.version,zt=Xt.getParameters(A,q.state,vt,Y,it),Pt=Xt.getProgramCacheKey(zt);let Qt=st.programs;st.environment=A.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",te),Qt=new Map,st.programs=Qt);let ee=Qt.get(Pt);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Ut)return Yi(A,zt),ee}else zt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(zt,C),ee=Xt.acquireProgram(zt,Pt),Qt.set(Pt,ee),st.uniforms=zt.uniforms;const jt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),Yi(A,zt),st.needsLights=pu(A),st.lightsStateVersion=Ut,st.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function Tn(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=au.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Yi(A,Y){const it=Yt.get(A);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function so(A,Y,it,st,q){Y.isScene!==!0&&(Y=ze),L.resetTextureUnits();const vt=Y.fog,Ut=st.isMeshStandardMaterial?Y.environment:null,zt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Jr,Pt=(st.isMeshStandardMaterial?et:T).get(st.envMap||Ut),Qt=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ee=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!it.morphAttributes.position,xe=!!it.morphAttributes.normal,Re=!!it.morphAttributes.color;let Ye=is;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ye=C.toneMapping);const Xe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,se=Xe!==void 0?Xe.length:0,Gt=Yt.get(st),cn=v.state.lights;if(ct===!0&&(Et===!0||A!==w)){const gn=A===w&&st.id===D;Tt.setState(st,A,gn)}let Ce=!1;st.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==cn.state.version||Gt.outputColorSpace!==zt||q.isBatchedMesh&&Gt.batching===!1||!q.isBatchedMesh&&Gt.batching===!0||q.isBatchedMesh&&Gt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Gt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Gt.instancing===!1||!q.isInstancedMesh&&Gt.instancing===!0||q.isSkinnedMesh&&Gt.skinning===!1||!q.isSkinnedMesh&&Gt.skinning===!0||q.isInstancedMesh&&Gt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Gt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Gt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Gt.instancingMorph===!1&&q.morphTexture!==null||Gt.envMap!==Pt||st.fog===!0&&Gt.fog!==vt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Tt.numPlanes||Gt.numIntersection!==Tt.numIntersection)||Gt.vertexAlphas!==Qt||Gt.vertexTangents!==ee||Gt.morphTargets!==jt||Gt.morphNormals!==xe||Gt.morphColors!==Re||Gt.toneMapping!==Ye||Gt.morphTargetsCount!==se)&&(Ce=!0):(Ce=!0,Gt.__version=st.version);let Bn=Gt.currentProgram;Ce===!0&&(Bn=nn(st,Y,q));let qi=!1,xn=!1,cs=!1;const pe=Bn.getUniforms(),Ln=Gt.uniforms;if(qt.useProgram(Bn.program)&&(qi=!0,xn=!0,cs=!0),st.id!==D&&(D=st.id,xn=!0),qi||w!==A){qt.buffers.depth.getReversed()?(yt.copy(A.projectionMatrix),dM(yt),pM(yt),pe.setValue(H,"projectionMatrix",yt)):pe.setValue(H,"projectionMatrix",A.projectionMatrix),pe.setValue(H,"viewMatrix",A.matrixWorldInverse);const rn=pe.map.cameraPosition;rn!==void 0&&rn.setValue(H,Ht.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&pe.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&pe.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,xn=!0,cs=!0)}if(q.isSkinnedMesh){pe.setOptional(H,q,"bindMatrix"),pe.setOptional(H,q,"bindMatrixInverse");const gn=q.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),pe.setValue(H,"boneTexture",gn.boneTexture,L))}q.isBatchedMesh&&(pe.setOptional(H,q,"batchingTexture"),pe.setValue(H,"batchingTexture",q._matricesTexture,L),pe.setOptional(H,q,"batchingIdTexture"),pe.setValue(H,"batchingIdTexture",q._indirectTexture,L),pe.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&pe.setValue(H,"batchingColorTexture",q._colorsTexture,L));const Fn=it.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Wt.update(q,it,Bn),(xn||Gt.receiveShadow!==q.receiveShadow)&&(Gt.receiveShadow=q.receiveShadow,pe.setValue(H,"receiveShadow",q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ln.envMap.value=Pt,Ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Ln.envMapIntensity.value=Y.environmentIntensity),xn&&(pe.setValue(H,"toneMappingExposure",C.toneMappingExposure),Gt.needsLights&&du(Ln,cs),vt&&st.fog===!0&&wt.refreshFogUniforms(Ln,vt),wt.refreshMaterialUniforms(Ln,st,K,Q,v.state.transmissionRenderTarget[A.id]),au.upload(H,Tn(Gt),Ln,L)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(au.upload(H,Tn(Gt),Ln,L),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&pe.setValue(H,"center",q.center),pe.setValue(H,"modelViewMatrix",q.modelViewMatrix),pe.setValue(H,"normalMatrix",q.normalMatrix),pe.setValue(H,"modelMatrix",q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const gn=st.uniformsGroups;for(let rn=0,Xs=gn.length;rn<Xs;rn++){const Pi=gn[rn];W.update(Pi,Bn),W.bind(Pi,Bn)}}return Bn}function du(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function pu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,it){Yt.get(A.texture).__webglTexture=Y,Yt.get(A.depthTexture).__webglTexture=it;const st=Yt.get(A);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const it=Yt.get(A);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,it=0){X=A,B=Y,z=it;let st=!0,q=null,vt=!1,Ut=!1;if(A){const Pt=Yt.get(A);if(Pt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Pt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Pt.__hasExternalTextures)L.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const jt=A.depthTexture;if(Pt.__boundDepthTexture!==jt){if(jt!==null&&Yt.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const ee=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[Y])?q=ee[Y][it]:q=ee[Y],vt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?q=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[it]:q=ee,F.copy(A.viewport),rt.copy(A.scissor),at=A.scissorTest}else F.copy(N).multiplyScalar(K).floor(),rt.copy(nt).multiplyScalar(K).floor(),at=St;if(qt.bindFramebuffer(H.FRAMEBUFFER,q)&&st&&qt.drawBuffers(A,q),qt.viewport(F),qt.scissor(rt),qt.setScissorTest(at),vt){const Pt=Yt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,it)}else if(Ut){const Pt=Yt.get(A.texture),Qt=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.__webglTexture,it||0,Qt)}D=-1},this.readRenderTargetPixels=function(A,Y,it,st,q,vt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){qt.bindFramebuffer(H.FRAMEBUFFER,zt);try{const Pt=A.texture,Qt=Pt.format,ee=Pt.type;if(!ye.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-st&&it>=0&&it<=A.height-q&&H.readPixels(Y,it,st,q,ae.convert(Qt),ae.convert(ee),vt)}finally{const Pt=X!==null?Yt.get(X).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,it,st,q,vt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){const Pt=A.texture,Qt=Pt.format,ee=Pt.type;if(!ye.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-st&&it>=0&&it<=A.height-q){qt.bindFramebuffer(H.FRAMEBUFFER,zt);const jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.bufferData(H.PIXEL_PACK_BUFFER,vt.byteLength,H.STREAM_READ),H.readPixels(Y,it,st,q,ae.convert(Qt),ae.convert(ee),0);const xe=X!==null?Yt.get(X).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,xe);const Re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await hM(H,Re,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,vt),H.deleteBuffer(jt),H.deleteSync(Re),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,it=0){A.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const st=Math.pow(2,-it),q=Math.floor(A.image.width*st),vt=Math.floor(A.image.height*st),Ut=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Ut,zt,q,vt),qt.unbindTexture()};const pl=H.createFramebuffer(),ls=H.createFramebuffer();this.copyTextureToTexture=function(A,Y,it=null,st=null,q=0,vt=null){A.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,A=arguments[1],Y=arguments[2],vt=arguments[3]||0,it=null),vt===null&&(q!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=q,q=0):vt=0);let Ut,zt,Pt,Qt,ee,jt,xe,Re,Ye;const Xe=A.isCompressedTexture?A.mipmaps[vt]:A.image;if(it!==null)Ut=it.max.x-it.min.x,zt=it.max.y-it.min.y,Pt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,ee=it.min.y,jt=it.isBox3?it.min.z:0;else{const Fn=Math.pow(2,-q);Ut=Math.floor(Xe.width*Fn),zt=Math.floor(Xe.height*Fn),A.isDataArrayTexture?Pt=Xe.depth:A.isData3DTexture?Pt=Math.floor(Xe.depth*Fn):Pt=1,Qt=0,ee=0,jt=0}st!==null?(xe=st.x,Re=st.y,Ye=st.z):(xe=0,Re=0,Ye=0);const se=ae.convert(Y.format),Gt=ae.convert(Y.type);let cn;Y.isData3DTexture?(L.setTexture3D(Y,0),cn=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(L.setTexture2DArray(Y,0),cn=H.TEXTURE_2D_ARRAY):(L.setTexture2D(Y,0),cn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ce=H.getParameter(H.UNPACK_ROW_LENGTH),Bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),qi=H.getParameter(H.UNPACK_SKIP_PIXELS),xn=H.getParameter(H.UNPACK_SKIP_ROWS),cs=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Xe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Xe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const pe=A.isDataArrayTexture||A.isData3DTexture,Ln=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Fn=Yt.get(A),gn=Yt.get(Y),rn=Yt.get(Fn.__renderTarget),Xs=Yt.get(gn.__renderTarget);qt.bindFramebuffer(H.READ_FRAMEBUFFER,rn.__webglFramebuffer),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Pi=0;Pi<Pt;Pi++)pe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,q,jt+Pi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(Y).__webglTexture,vt,Ye+Pi)),H.blitFramebuffer(Qt,ee,Ut,zt,xe,Re,Ut,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Yt.has(A)){const Fn=Yt.get(A),gn=Yt.get(Y);qt.bindFramebuffer(H.READ_FRAMEBUFFER,pl),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ls);for(let rn=0;rn<Pt;rn++)pe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fn.__webglTexture,q,jt+rn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fn.__webglTexture,q),Ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,vt,Ye+rn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,vt),q!==0?H.blitFramebuffer(Qt,ee,Ut,zt,xe,Re,Ut,zt,H.COLOR_BUFFER_BIT,H.NEAREST):Ln?H.copyTexSubImage3D(cn,vt,xe,Re,Ye+rn,Qt,ee,Ut,zt):H.copyTexSubImage2D(cn,vt,xe,Re,Qt,ee,Ut,zt);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ln?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(cn,vt,xe,Re,Ye,Ut,zt,Pt,se,Gt,Xe.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(cn,vt,xe,Re,Ye,Ut,zt,Pt,se,Xe.data):H.texSubImage3D(cn,vt,xe,Re,Ye,Ut,zt,Pt,se,Gt,Xe):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,vt,xe,Re,Ut,zt,se,Gt,Xe.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,vt,xe,Re,Xe.width,Xe.height,se,Xe.data):H.texSubImage2D(H.TEXTURE_2D,vt,xe,Re,Ut,zt,se,Gt,Xe);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ce),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,qi),H.pixelStorei(H.UNPACK_SKIP_ROWS,xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,cs),vt===0&&Y.generateMipmaps&&H.generateMipmap(cn),qt.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,it=null,st=null,q=0){return A.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,A=arguments[2],Y=arguments[3],q=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,it,st,q)},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),qt.unbindTexture()},this.resetState=function(){B=0,z=0,X=null,qt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const cv={type:"change"},pp={type:"start"},ly={type:"end"},jc=new Iv,uv=new $a,l2=Math.cos(70*uM.DEG2RAD),vn=new V,Qn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sd=1e-6;class c2 extends b1{constructor(t,n=null){super(t,n),this.state=Ve.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Hs,this._lastTargetPosition=new V,this._quat=new Hs().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new B_,this._sphericalDelta=new B_,this._scale=1,this._panOffset=new V,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new V,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=f2.bind(this),this._onPointerDown=u2.bind(this),this._onPointerUp=h2.bind(this),this._onContextMenu=y2.bind(this),this._onMouseWheel=m2.bind(this),this._onKeyDown=g2.bind(this),this._onTouchStart=_2.bind(this),this._onTouchMove=v2.bind(this),this._onMouseDown=d2.bind(this),this._onMouseMove=p2.bind(this),this._interceptControlDown=S2.bind(this),this._interceptControlUp=x2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cv),this.update(),this.state=Ve.NONE}update(t=null){const n=this.object.position;vn.copy(n).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(a)&&isFinite(l)&&(a<-Math.PI?a+=Qn:a>Math.PI&&(a-=Qn),l<-Math.PI?l+=Qn:l>Math.PI&&(l-=Qn),a<=l?this._spherical.theta=Math.max(a,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+l)/2?Math.max(a,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),n.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=vn.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new V(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),u=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(jc.origin.copy(this.object.position),jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jc.direction))<l2?this.object.lookAt(this.target):(uv.setFromNormalAndCoplanarPoint(this.object.up,this.target),jc.intersectPlane(uv,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sd||this._lastTargetPosition.distanceToSquared(this.target)>sd?(this.dispatchEvent(cv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qn/60*this.autoRotateSpeed*t:Qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){vn.setFromMatrixColumn(n,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,n){this.screenSpacePanning===!0?vn.setFromMatrixColumn(n,1):(vn.setFromMatrixColumn(n,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),l=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=l/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(a,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(a,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),l=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(a,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(a*a+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ot,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function u2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function f2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function h2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ly),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function d2(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ve.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(pp)}function p2(r){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function m2(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(r.preventDefault(),this.dispatchEvent(pp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ly))}function g2(r){this.enabled!==!1&&this._handleKeyDown(r)}function _2(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ve.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ve.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(pp)}function v2(r){switch(this._trackPointer(r),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ve.NONE}}function y2(r){this.enabled!==!1&&r.preventDefault()}function S2(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x2(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const el=new V;function Si(r,t,n,a,l,c){const u=2*Math.PI*l/4,h=Math.max(c-2*l,0),p=Math.PI/4;el.copy(t),el[a]=0,el.normalize();const m=.5*u/(u+h),g=1-el.angleTo(r)/p;return Math.sign(el[n])===1?g*m:h/(u+h)+m+m*(1-g)}class M2 extends $n{constructor(t=1,n=1,a=1,l=2,c=.1){if(l=l*2+1,c=Math.min(t/2,n/2,a/2,c),super(1,1,1,l,l,l),l===1)return;const u=this.toNonIndexed();this.index=null,this.attributes.position=u.attributes.position,this.attributes.normal=u.attributes.normal,this.attributes.uv=u.attributes.uv;const h=new V,p=new V,m=new V(t,n,a).divideScalar(2).subScalar(c),g=this.attributes.position.array,_=this.attributes.normal.array,y=this.attributes.uv.array,x=g.length/6,E=new V,R=.5/l;for(let M=0,v=0;M<g.length;M+=3,v+=2)switch(h.fromArray(g,M),p.copy(h),p.x-=Math.sign(p.x)*R,p.y-=Math.sign(p.y)*R,p.z-=Math.sign(p.z)*R,p.normalize(),g[M+0]=m.x*Math.sign(h.x)+p.x*c,g[M+1]=m.y*Math.sign(h.y)+p.y*c,g[M+2]=m.z*Math.sign(h.z)+p.z*c,_[M+0]=p.x,_[M+1]=p.y,_[M+2]=p.z,Math.floor(M/x)){case 0:E.set(1,0,0),y[v+0]=Si(E,p,"z","y",c,a),y[v+1]=1-Si(E,p,"y","z",c,n);break;case 1:E.set(-1,0,0),y[v+0]=1-Si(E,p,"z","y",c,a),y[v+1]=1-Si(E,p,"y","z",c,n);break;case 2:E.set(0,1,0),y[v+0]=1-Si(E,p,"x","z",c,t),y[v+1]=Si(E,p,"z","x",c,a);break;case 3:E.set(0,-1,0),y[v+0]=1-Si(E,p,"x","z",c,t),y[v+1]=1-Si(E,p,"z","x",c,a);break;case 4:E.set(0,0,1),y[v+0]=1-Si(E,p,"x","y",c,t),y[v+1]=1-Si(E,p,"y","x",c,n);break;case 5:E.set(0,0,-1),y[v+0]=Si(E,p,"x","y",c,t),y[v+1]=1-Si(E,p,"y","x",c,n);break}}}class E2 extends Wv{constructor(){super();const t=new $n;t.deleteAttribute("uv");const n=new oe({side:Vn}),a=new oe,l=new x1(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Te(t,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new Te(t,a);u.position.set(-10.906,2.009,1.846),u.rotation.set(0,-.195,0),u.scale.set(2.328,7.905,4.651),this.add(u);const h=new Te(t,a);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);const p=new Te(t,a);p.position.set(6.167,.857,7.803),p.rotation.set(0,.561,0),p.scale.set(3.927,6.285,3.687),this.add(p);const m=new Te(t,a);m.position.set(-2.017,.018,6.124),m.rotation.set(0,.333,0),m.scale.set(2.002,4.566,2.064),this.add(m);const g=new Te(t,a);g.position.set(2.291,-.756,-2.621),g.rotation.set(0,-.286,0),g.scale.set(1.546,1.552,1.496),this.add(g);const _=new Te(t,a);_.position.set(-2.193,-.369,-5.547),_.rotation.set(0,.516,0),_.scale.set(3.875,3.487,2.986),this.add(_);const y=new Te(t,Ir(50));y.position.set(-16.116,14.37,8.208),y.scale.set(.1,2.428,2.739),this.add(y);const x=new Te(t,Ir(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const E=new Te(t,Ir(17));E.position.set(14.904,12.198,-1.832),E.scale.set(.15,4.265,6.331),this.add(E);const R=new Te(t,Ir(43));R.position.set(-.462,8.89,14.52),R.scale.set(4.38,5.441,.088),this.add(R);const M=new Te(t,Ir(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);const v=new Te(t,Ir(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function Ir(r){const t=new cu;return t.color.setScalar(r),t}const cy=2.8,tn=.22;function At(r,t,n,a,l,c=!0){const u=new Te(new $n(a[0],a[1],a[2]),l);return u.name=t,u.position.set(n[0],n[1],n[2]),u.castShadow=c,u.receiveShadow=c,r.add(u),u}function _e(r,t,n,a,l,c=.08,u=3,h=!0){const p=new Te(new M2(a[0],a[1],a[2],u,c),l);return p.name=t,p.position.set(n[0],n[1],n[2]),p.castShadow=h,p.receiveShadow=h,r.add(p),p}function je(r,t,n,a,l,c,u,h=32){const p=new Te(new cp(a,l,c,h),u);return p.name=t,p.position.set(n[0],n[1],n[2]),p.castShadow=!0,p.receiveShadow=!0,r.add(p),p}function rd(r,t,n,a,l,c,u){const h=a[0]-n[0],p=a[1]-n[1],m=Math.hypot(h,p),g=At(r,t,[(n[0]+a[0])/2,l/2,(n[1]+a[1])/2],[m,l,c],u);return g.rotation.y=-Math.atan2(p,h),g}function b2(r,t,n,a,l){const c=new Qv;n.forEach(([h,p],m)=>{m===0?c.moveTo(h,p):c.lineTo(h,p)}),c.closePath();const u=new Te(new up(c),l);return u.name=t,u.rotation.x=-Math.PI/2,u.position.y=a,u.receiveShadow=!0,r.add(u),u}function hu(r,t=512,n=256){const a=document.createElement("canvas");a.width=t,a.height=n;const l=a.getContext("2d");r(l,t,n);const c=new FM(a);return c.anisotropy=8,c}function fv(r="#ffffff",t="rgba(0,0,0,0.08)",n=512,a=512){return hu((l,c,u)=>{l.fillStyle=r,l.fillRect(0,0,c,u);for(let h=0;h<9e3;h+=1){l.fillStyle=t;const p=1+Math.random()*2;l.fillRect(Math.random()*c,Math.random()*u,p,p)}},n,a)}function mp(r,t,n=3.8,a=1.45){const l=hu((h,p,m)=>{h.clearRect(0,0,p,m),h.fillStyle="rgba(255,255,255,0.01)",h.fillRect(0,0,p,m),h.fillStyle="#161616",h.textAlign="center",h.textBaseline="middle",h.font="700 48px Arial",h.fillText(r,p/2,m*.41),h.font="400 38px Arial",h.fillText(t,p/2,m*.68)}),c=new cu({map:l,transparent:!0,depthWrite:!1}),u=new Te(new dl(n,a),c);return u.rotation.x=-Math.PI/2,u.position.y=.04,u}function wi(r,t,n=24){return new oe({roughness:.82,metalness:.02,map:hu((a,l,c)=>{a.fillStyle=r,a.fillRect(0,0,l,c),a.strokeStyle=t,a.lineWidth=2;const u=l/n;for(let h=0;h<=n;h+=1)a.beginPath(),a.moveTo(h*u,0),a.lineTo(h*u,c),a.stroke(),a.beginPath(),a.moveTo(0,h*u),a.lineTo(l,h*u),a.stroke();for(let h=0;h<400;h+=1)a.fillStyle=`rgba(80,70,60,${Math.random()*.05})`,a.fillRect(Math.random()*l,Math.random()*c,1.4,1.4)},768,768)})}function T2(){return new oe({color:"#7b512d",roughness:.58,map:hu((r,t,n)=>{r.fillStyle="#81572f",r.fillRect(0,0,t,n);for(let a=0;a<80;a+=1){r.strokeStyle=`rgba(45,25,12,${.08+Math.random()*.14})`,r.lineWidth=1+Math.random()*3,r.beginPath();const l=Math.random()*n;r.moveTo(0,l),r.bezierCurveTo(t*.3,l+Math.random()*30-15,t*.7,l-18,t,l),r.stroke()}})})}function A2(r,t,n){const{x:a,z:l,w:c,d:u,name:h,size:p,floor:m=t.tile}=n;At(r,`${h} floor`,[a,0,l],[c,.08,u],m,!1);const g=mp(h,p);g.position.set(a,.09,l),r.add(g)}function zn(r,t,n,a,l,c,u=cy){return At(r,"wall",[n,u/2,a],[l,u,c],t.wall)}function Ls(r,t,n,a,l,c,u=cy+.06){return At(r,"wall coping",[n,u,a],[l,.14,c],t.wallCap)}function hv(r,t,n,a,l,c){return At(r,"compound wall",[n,.65,a],[l,1.3,c],t.boundary)}function Vr(r,t,n,a,l,c=0){const u=new Jn;u.position.set(n,1.65,a),u.rotation.y=c;const h=new Te(new $n(l,.7,.04),t.glass);u.add(h);for(let g=-1;g<=1;g+=1){const _=new Te(new $n(.04,.76,.06),t.frame);_.position.x=g*l/3,u.add(_)}const p=new Te(new $n(l+.18,.07,.08),t.frame);p.position.y=.4,u.add(p);const m=p.clone();m.position.y=-.4,u.add(m),r.add(u)}function dv(r,t,n,a,l=.85,c=0){const u=new Jn;u.position.set(n,2.25,a),u.rotation.y=c,_e(u,"toilet ventilator glass",[0,0,0],[l,.34,.035],t.glass,.02,2),At(u,"toilet ventilator frame top",[0,.2,0],[l+.12,.045,.06],t.frame),At(u,"toilet ventilator frame bottom",[0,-.2,0],[l+.12,.045,.06],t.frame),At(u,"toilet ventilator mullion",[0,0,0],[.035,.36,.06],t.frame),r.add(u)}function R2(r,t,n,a,l=0,c=1.05){const u=new Jn;u.position.set(n,0,a),u.rotation.y=l,At(u,"door frame left jamb",[-c/2,1.05,0],[.08,2.1,.12],t.darkWood),At(u,"door frame right jamb",[c/2,1.05,0],[.08,2.1,.12],t.darkWood),At(u,"door frame head",[0,2.12,0],[c+.08,.08,.12],t.darkWood),r.add(u)}function Ja(r,t,n,a,l=0,c=.65){const u=new Jn;u.position.set(n,0,a),u.rotation.y=l;const h=new Te(new $n(.9,2.08,.08),t.door);h.position.set(.44*Math.cos(c),1.04,.44*Math.sin(c)),h.rotation.y=-c,h.castShadow=!0,u.add(h);const p=new Te(new fp(.045,12,12),t.brass);p.position.set(.76,1.06,.08),h.add(p),r.add(u)}function pv(r,t,n,a,l=0,c=!0){const u=new Jn;u.position.set(n,0,a),u.rotation.y=l;const h=c?2.55:2.25,p=c?3.3:3.05;_e(u,"upholstered bed base",[0,.22,0],[h,.42,p],t.bedBase,.09,4),_e(u,"wood bed plinth",[0,.12,-.02],[h+.18,.18,p+.16],t.darkWood,.04,2);const m=_e(u,"soft mattress",[0,.5,-.05],[h*.94,.34,p*.9],t.mattress,.14,5);m.position.y=.35,_e(u,"folded bed runner",[0,.62,-p*.12],[h*.88,.05,p*.38],t.fabric,.04,3),_e(u,"padded headboard",[0,1,p*.48],[h+.25,1.25,.22],t.headboard,.08,4),[-.42,.42].forEach(g=>{At(u,"headboard stitch",[g,1.02,p*.36],[.035,.96,.035],t.darkWood)}),[-.55,.55].forEach(g=>{_e(u,"soft pillow",[g,.74,p*.27],[.76,.2,.5],t.pillow,.12,5)}),r.add(u)}function Kc(r,t,n,a){_e(r,"side table",[n,.28,a],[.72,.56,.62],t.wood,.035,2),At(r,"side table drawer",[n,.38,a-.33],[.54,.2,.035],t.darkWood),je(r,"side table knob",[n,.38,a-.36],.035,.035,.035,t.brass,12),je(r,"lamp stem",[n,.85,a],.03,.03,.45,t.brass,12),je(r,"lamp shade",[n,1.16,a],.21,.28,.34,t.lamp,24)}function mv(r,t,n,a,l,c=0){const u=new Jn;u.position.set(n,0,a),u.rotation.y=c;const h=new Te(new $n(l,2.25,.56),t.wood);h.position.y=1.13,u.add(h);for(let p=-1;p<=1;p+=1){const m=new Te(new $n(.025,2.1,.03),t.darkWood);m.position.set(p*l/4,1.15,-.29),u.add(m)}r.add(u)}function C2(r,t){const n=new Jn;n.position.set(-11.4,0,-12.5),_e(n,"sofa base cushion",[0,.44,0],[3.25,.42,.94],t.sofa,.16,6),_e(n,"sofa back cushion",[0,.93,.48],[3.25,.96,.24],t.sofa,.12,5),_e(n,"sofa left arm",[-1.75,.72,0],[.28,.92,.96],t.sofa,.11,5),_e(n,"sofa right arm",[1.75,.72,0],[.28,.92,.96],t.sofa,.11,5),[-.85,0,.85].forEach(l=>{At(n,"sofa cushion seam",[l,.68,-.03],[.025,.05,.82],t.fabric),_e(n,"loose sofa pillow",[l,.94,.2],[.52,.42,.16],t.pillow,.08,4)}),r.add(n);const a=new Jn;a.position.set(-8.3,0,-13.65),a.rotation.y=-Math.PI/2,_e(a,"lounge chair seat",[0,.42,0],[1,.42,.86],t.sofa,.12,5),_e(a,"lounge chair back",[0,.9,.44],[1,.82,.18],t.sofa,.1,5),r.add(a),_e(r,"glass coffee table top",[-10.1,.48,-14.6],[1.75,.08,.9],t.glass,.04,2),At(r,"coffee table base",[-10.1,.24,-14.6],[1.1,.32,.44],t.wood),At(r,"drawing rug",[-10.5,.05,-13.3],[4.8,.05,3.8],t.rug,!1)}function w2(r,t){_e(r,"dining table top",[0,.72,-1.2],[2.65,.18,1.45],t.wood,.05,3),_e(r,"dining glass inset",[0,.84,-1.2],[2.1,.035,.98],t.glass,.035,2),je(r,"table leg",[-.9,.35,-.75],.05,.05,.7,t.darkWood,10),je(r,"table leg",[.9,.35,-.75],.05,.05,.7,t.darkWood,10),je(r,"table leg",[-.9,.35,-1.65],.05,.05,.7,t.darkWood,10),je(r,"table leg",[.9,.35,-1.65],.05,.05,.7,t.darkWood,10),[[-1.55,-1.2,Math.PI/2],[1.55,-1.2,-Math.PI/2],[-.8,-.18,Math.PI],[0,-.18,Math.PI],[.8,-.18,Math.PI],[-.8,-2.22,0],[0,-2.22,0],[.8,-2.22,0]].forEach(([a,l,c])=>D2(r,t,a,l,c));for(let a=0;a<6;a+=1)je(r,"plate",[-.95+a*.38,.84,-1.15+a%2*.36],.15,.15,.025,t.plate,28)}function D2(r,t,n,a,l=0){const c=new Jn;c.position.set(n,0,a),c.rotation.y=l,_e(c,"chair upholstered seat",[0,.42,0],[.48,.16,.46],t.chairSeat,.07,4),_e(c,"chair wood back",[0,.78,.26],[.48,.68,.12],t.chair,.05,3),[-.16,.16].forEach(u=>[-.16,.16].forEach(h=>{At(c,"chair leg",[u,.19,h],[.06,.38,.06],t.darkWood)})),r.add(c)}function U2(r,t){At(r,"kitchen lower cabinets rear",[2.9,.42,-13.05],[5.8,.84,.72],t.counter),At(r,"kitchen lower cabinets side",[5.42,.42,-10.95],[.72,.84,3.9],t.counter),At(r,"kitchen lower cabinets left",[.65,.42,-10.8],[.72,.84,3.4],t.counter),_e(r,"granite slab rear",[2.9,.93,-13.05],[6.05,.16,.92],t.granite,.04,2),_e(r,"granite slab side",[5.42,.93,-10.95],[.92,.16,4.08],t.granite,.04,2),_e(r,"granite slab left",[.65,.93,-10.8],[.92,.16,3.58],t.granite,.04,2),_e(r,"double door fridge",[.65,1.05,-8.85],[.95,2.1,.88],t.fridge,.06,3),At(r,"fridge divider",[.65,1.05,-9.31],[.04,1.9,.03],t.darkMetal),At(r,"fridge handle left",[.52,1.15,-9.35],[.04,1.1,.045],t.steel),At(r,"fridge handle right",[.78,1.15,-9.35],[.04,1.1,.045],t.steel),_e(r,"steel sink basin",[2.7,.99,-13.12],[1.05,.12,.54],t.sink,.05,3),_e(r,"dark sink hollow",[2.7,1.06,-13.12],[.78,.04,.36],t.darkMetal,.04,2),je(r,"sink tap stem",[2.25,1.22,-13.05],.03,.03,.38,t.steel,16),je(r,"sink tap neck",[2.35,1.38,-13.05],.025,.025,.28,t.steel,16).rotation.z=Math.PI/2,_e(r,"black glass hob",[5.43,1.04,-11.15],[.66,.08,.95],t.hob,.035,2),_e(r,"wall chimney hood",[5.43,2.05,-11.15],[.95,.38,.62],t.steel,.04,2),At(r,"chimney flue",[5.43,2.55,-11.15],[.34,.7,.32],t.steel);for(let n=0;n<4;n+=1)je(r,"brass burner ring",[5.43+n%2*.24-.12,1.1,-11.34+Math.floor(n/2)*.38],.1,.1,.025,t.brass,24);for(let n=0;n<7;n+=1)At(r,"cabinet handle",[.64+n*.7,.68,-13.45],[.32,.035,.035],t.brass);At(r,"kitchen backsplash",[2.9,1.35,-13.48],[5.7,.82,.08],t.backsplash),At(r,"overhead cabinet",[3.3,2.05,-13.45],[3.4,.75,.34],t.wood),At(r,"overhead cabinet split left",[2.72,2.05,-13.64],[.035,.62,.035],t.darkWood),At(r,"overhead cabinet split right",[3.88,2.05,-13.64],[.035,.62,.035],t.darkWood)}function gv(r,t,n,a,l,c){At(r,"bath floor",[n,.1,a],[l,.08,c],t.bathTile,!1),At(r,"bath wall tile rear",[n,.92,a-c*.49],[l*.92,1.65,.055],t.bathWallTile,!1),At(r,"bath wall tile side",[n-l*.48,.92,a],[.055,1.65,c*.9],t.bathWallTile,!1),At(r,"toilet tank",[n+l*.25,.55,a-c*.25],[.52,.48,.22],t.ceramic),je(r,"toilet bowl",[n+l*.25,.36,a-c*.02],.25,.2,.22,t.ceramic,32),At(r,"sink cabinet",[n-l*.25,.4,a+c*.25],[.65,.4,.42],t.ceramic),je(r,"wash basin",[n-l*.25,.68,a+c*.25],.28,.22,.13,t.ceramic,32),At(r,"shower glass",[n-l*.32,.9,a-c*.27],[.04,1.35,1.05],t.glass),je(r,"floor drain",[n-l*.25,.16,a-c*.28],.11,.11,.018,t.darkMetal,24),At(r,"wash mirror",[n-l*.25,1.42,a+c*.48],[.62,.72,.035],t.mirror)}function L2(r,t){At(r,"puja platform",[0,.22,6.2],[2.55,.44,.74],t.marble),At(r,"puja backdrop",[0,1.12,6.56],[2.25,1.75,.18],t.wood),je(r,"diya",[-.55,.55,5.97],.09,.07,.08,t.brass,18),je(r,"diya",[.55,.55,5.97],.09,.07,.08,t.brass,18);const n=mp("ॐ","",1,1);n.position.set(0,1.22,6.45),n.rotation.set(0,0,0),r.add(n)}function N2(r,t){At(r,"dresser cabinet",[0,.55,10.2],[3.15,1.1,.65],t.wood),At(r,"dresser mirror",[0,1.7,10.52],[2.4,1.2,.06],t.glass),At(r,"dresser shelf",[0,2.28,10.2],[3.2,.16,.72],t.darkWood),[-.9,0,.9].forEach(n=>{At(r,"dresser vertical shutter line",[n,1.08,9.86],[.035,1.85,.04],t.darkWood)}),At(r,"dresser upper shelf line",[0,1.85,9.86],[3,.035,.04],t.darkWood)}function O2(r,t){for(let u=0;u<15;u+=1){const h=.28+u*.16,p=-14.4+u*.68;At(r,"open stair tread",[9.9,h,p],[4.25,.11,.58],t.stairStone),At(r,"stair dark nosing",[9.9,h+.075,p-.27],[4.2,.035,.045],t.darkMetal)}At(r,"upper stair landing slab",[9.9,2.75,-3.55],[4.25,.16,2.2],t.stairStone),At(r,"open stair left rail",[7.68,1.95,-8.9],[.08,.08,10.4],t.steel),At(r,"open stair right rail",[12.12,1.95,-8.9],[.08,.08,10.4],t.steel),At(r,"open stair center rail",[9.9,2.05,-8.9],[.08,.08,10],t.darkMetal);for(let u=0;u<8;u+=1){const h=-13.7+u*1.35,p=.65+u*.22;je(r,"open stair left post",[7.68,p,h],.035,.035,1.35,t.steel,12),je(r,"open stair right post",[12.12,p,h],.035,.035,1.35,t.steel,12),je(r,"open stair center post",[9.9,p+.05,h],.028,.028,1.25,t.darkMetal,12)}for(let u=0;u<4;u+=1){const h=-13.6+u*2.65;At(r,"stair support column left",[7.85,.72,h],[.18,1.44,.18],t.boundary),At(r,"stair support column right",[11.95,.72,h],[.18,1.44,.18],t.boundary)}}function P2(r,t,n,a,l=1,c=null){je(r,"shrub trunk",[n,.2*l,a],.02*l,.03*l,.4*l,t.trunk,8),je(r,"shrub crown",[n,.52*l,a],.34*l,.15*l,.52*l,t.leaf,14),c&&_e(r,"flower cluster",[n+.12*l,.64*l,a-.08*l],[.18*l,.08*l,.18*l],c,.04,3)}function z2(r,t){[[-14.8,0,3.5,1.2,34],[14.8,0,3.5,1.2,34],[-9.2,-20.55,8.2,1.45,16],[12.2,-20.55,3.9,1.15,16]].forEach(([l,c,u,h])=>{At(r,"garden bed",[l,.04,c],[u,.08,h],t.grass,!1)}),[[-14.8,-16],[-14.8,-11],[-14.8,-6],[-14.8,-1],[-14.8,4],[-14.8,9],[-14.8,15],[14.8,-15],[14.8,-9],[14.8,-3],[14.8,3],[14.8,9],[14.8,15]].forEach(([l,c],u)=>{je(r,"plant trunk",[l,.36,c],.035,.05,.72,t.trunk,8),je(r,"plant crown",[l,.92,c],.42+u%3*.06,.2,.9,t.leaf,18)}),[[-12.1,-20.55,.92,t.flowerPink],[-10.8,-20.5,.78,t.flowerYellow],[-9.5,-20.55,.86,t.flowerRed],[-8.2,-20.5,.8,t.flowerPink],[-6.8,-20.55,.92,t.flowerYellow],[11.2,-20.55,.78,t.flowerRed],[12.5,-20.55,.82,t.flowerPink]].forEach(([l,c,u,h])=>P2(r,t,l,c,u,h))}function I2(r,t,n,a,l=0){const c=new Jn;c.position.set(n,0,a),c.rotation.y=l,_e(c,"car lower body",[0,.48,0],[2.18,.64,5.2],t.carPaint,.18,6),_e(c,"car upper cabin",[0,1.02,-.18],[1.68,.74,2.45],t.carPaint,.16,6),_e(c,"front windshield",[0,1.14,-1.28],[1.42,.08,.78],t.carGlass,.04,2),_e(c,"rear windshield",[0,1.13,1.02],[1.38,.08,.68],t.carGlass,.04,2),[-.86,.86].forEach(u=>{_e(c,"side window",[u,1.1,-.15],[.07,.5,1.52],t.carGlass,.035,2),_e(c,"side mirror",[u*1.12,.92,-1.52],[.16,.08,.24],t.darkMetal,.025,2)}),[-.78,.78].forEach(u=>{_e(c,"head light",[u,.55,-2.64],[.38,.13,.05],t.headlight,.025,2),_e(c,"tail light",[u,.58,2.64],[.3,.15,.05],t.tailLight,.025,2)}),[-1.08,1.08].forEach(u=>{[-1.75,1.75].forEach(h=>{const p=je(c,"car tyre",[u,.28,h],.33,.33,.24,t.tyre,32);p.rotation.z=Math.PI/2;const m=je(c,"car wheel rim",[u+Math.sign(u)*.01,.28,h],.18,.18,.26,t.steel,24);m.rotation.z=Math.PI/2})}),At(c,"front number plate",[0,.42,-2.67],[.62,.13,.025],t.plate,!1),At(c,"rear number plate",[0,.44,2.67],[.58,.13,.025],t.plate,!1),r.add(c)}function B2(r,t){At(r,"parking tile court",[4.5,.015,-20.25],[16.2,.08,6.9],t.parkingTile,!1),At(r,"parking curb left",[-3.7,.17,-20.25],[.22,.34,6.9],t.boundary),At(r,"parking curb rear",[4.5,.17,-16.68],[16.2,.34,.22],t.boundary),At(r,"parking bay line left",[1.7,.085,-20.55],[.08,.035,5.9],t.linePaint,!1),At(r,"parking bay line right",[7,.085,-20.55],[.08,.035,5.9],t.linePaint,!1),At(r,"parking stop block left",[3.2,.14,-18],[1.1,.18,.18],t.boundary),At(r,"parking stop block right",[5.5,.14,-18],[1.1,.18,.18],t.boundary);const n=mp("PARKING",`18'-6" X 16'-0"`,3.4,.95);n.position.set(10.4,.11,-17.2),r.add(n),I2(r,t,4.35,-20.65,0)}function F2(r,t){At(r,"right pedestrian path",[17.7,.02,-15.3],[1.85,.08,17.8],t.pathTile,!1),At(r,"right path curb",[16.65,.18,-15.3],[.18,.36,17.8],t.boundary),At(r,"front dark compound coping left",[-7.5,1.36,-23.6],[17.5,.18,.52],t.darkCoping),At(r,"front dark compound coping right",[10.4,1.36,-23.6],[11.2,.18,.52],t.darkCoping),At(r,"gate pillar left",[2.55,.82,-23.55],[.55,1.64,.58],t.boundary),At(r,"gate pillar right",[6.45,.82,-23.55],[.55,1.64,.58],t.boundary),At(r,"gate top rail",[4.5,1.45,-23.36],[3.35,.08,.12],t.frame),At(r,"gate bottom rail",[4.5,.24,-23.36],[3.35,.08,.12],t.frame),At(r,"front planter retaining wall",[-9.2,.28,-19.72],[8.35,.32,.28],t.boundary),At(r,"drawing room sill",[-10.2,1.35,-16.98],[4.35,.12,.16],t.wallCap),At(r,"kitchen window sill",[2.9,1.35,-14.48],[3.55,.12,.16],t.wallCap),[[-13.42,17,.5,.55],[13.42,17,.5,.55],[-13.42,-16.95,.5,.55],[13.42,-16.95,.5,.55]].forEach(([n,a,l,c])=>At(r,"corner pier",[n,1.48,a],[l,.46,c],t.wallCap))}function H2(r,t,n,a=t.skirting){n.forEach(([l,c,u,h])=>{At(r,"room skirting",[l,.18,c],[u,.18,h],a,!1)})}function G2(r,t){H2(r,t,[[-6.37,.8,.06,33.4],[5.67,5.2,.06,18.2],[-.1,16.87,27,.06],[-13.27,1.4,.06,34.5],[13.27,4.1,.06,29],[-9.95,-16.82,6.8,.06],[.1,11.57,4.5,.06],[.1,5.47,4.5,.06],[-10.8,2.67,5,.06],[-10.8,-1.62,5,.06],[8.9,7.97,7,.06],[10,-12.87,4.8,.06],[.95,-14.32,5,.06],[-9.8,8.92,7,.06]]),[[-5.95,7.3,Math.PI/2],[5.9,7.4,-Math.PI/2],[-2.1,5.8,0],[3,5.8,Math.PI],[-4.2,-14.7,Math.PI/2],[7.2,-14.6,Math.PI],[-8.45,2.75,Math.PI],[-8.2,9.05,0]].forEach(([n,a,l])=>R2(r,t,n,a,l)),dv(r,t,-13.42,5,.9,Math.PI/2),dv(r,t,-13.42,.4,1.05,Math.PI/2),Vr(r,t,-2.3,17.05,2.4),Vr(r,t,11,17.05,2.1),At(r,"puja warm light wash",[0,1.95,6.35],[1.8,.06,.08],t.warmLight),At(r,"temple side column left",[-.82,1.08,6.25],[.12,1.12,.12],t.brass),At(r,"temple side column right",[.82,1.08,6.25],[.12,1.12,.12],t.brass)}function V2(){const r=wi("#b7aa96","rgba(56,50,43,0.32)",18);r.map.wrapS=r.map.wrapT=_a,r.map.repeat.set(5,7);const t=wi("#78909a","rgba(24,36,42,0.38)",12),n=wi("#918b82","rgba(46,44,41,0.34)",20),a=wi("#89837a","rgba(38,36,34,0.38)",14);a.map.wrapS=a.map.wrapT=_a,a.map.repeat.set(3,2);const l=wi("#a99c8e","rgba(60,54,48,0.3)",12);l.map.wrapS=l.map.wrapT=_a,l.map.repeat.set(1,6);const c=wi("#b9b5ad","rgba(55,55,52,0.28)",8);c.map.wrapS=c.map.wrapT=_a,c.map.repeat.set(1,2);const u=T2(),h=fv("#808080","rgba(0,0,0,0.13)");h.wrapS=h.wrapT=_a,h.repeat.set(12,12);const p=fv("#777777","rgba(0,0,0,0.16)");return p.wrapS=p.wrapT=_a,p.repeat.set(10,10),{tile:r,bathTile:t,terrace:n,parkingTile:a,pathTile:l,stairStone:c,wood:u,darkWood:new oe({color:"#3f2415",roughness:.55}),wallCap:new oe({color:"#8d8982",roughness:.86}),darkCoping:new oe({color:"#3e3f3c",roughness:.82}),skirting:new oe({color:"#746b5f",roughness:.78}),wall:new oe({color:"#b9b0a3",roughness:.92,bumpMap:h,bumpScale:.035}),boundary:new oe({color:"#746f68",roughness:.88,bumpMap:p,bumpScale:.05}),frame:new oe({color:"#1f2c32",roughness:.45}),glass:new Wc({color:"#8fb4c8",roughness:.12,metalness:0,transparent:!0,opacity:.45,transmission:.3,clearcoat:.65,clearcoatRoughness:.08}),door:u,brass:new oe({color:"#c08a36",metalness:.6,roughness:.28}),bedBase:new oe({color:"#7c5b43",roughness:.65}),headboard:new oe({color:"#6f4b31",roughness:.72}),mattress:new oe({color:"#cbbda9",roughness:.9}),fabric:new oe({color:"#7f7467",roughness:.92}),pillow:new oe({color:"#bba994",roughness:.9}),sofa:new oe({color:"#a9957b",roughness:.88}),rug:wi("#827362","rgba(255,255,255,0.08)",10),chair:new oe({color:"#8d6943",roughness:.68}),chairSeat:new oe({color:"#bba58c",roughness:.86}),plate:new oe({color:"#d2c6b4",roughness:.5}),counter:new oe({color:"#705238",roughness:.5}),granite:wi("#8a7860","rgba(30,25,20,0.12)",9),backsplash:wi("#b9afa1","rgba(70,66,60,0.3)",8),bathWallTile:wi("#7f969f","rgba(22,33,38,0.32)",10),fridge:new oe({color:"#7f8586",metalness:.35,roughness:.32}),sink:new oe({color:"#969ca0",metalness:.45,roughness:.22}),mirror:new Wc({color:"#a7c1c9",metalness:.2,roughness:.08,transparent:!0,opacity:.72,clearcoat:1}),hob:new oe({color:"#141414",roughness:.25}),darkMetal:new oe({color:"#101214",metalness:.7,roughness:.25}),carPaint:new Wc({color:"#2f3437",metalness:.65,roughness:.24,clearcoat:.9,clearcoatRoughness:.08}),carGlass:new Wc({color:"#172a34",roughness:.05,metalness:0,transparent:!0,opacity:.62,transmission:.22,clearcoat:1,clearcoatRoughness:.03}),tyre:new oe({color:"#090909",roughness:.78}),headlight:new oe({color:"#fff5c8",emissive:"#ffe29a",emissiveIntensity:.35,roughness:.2}),tailLight:new oe({color:"#9e1111",emissive:"#7a0505",emissiveIntensity:.18,roughness:.28}),linePaint:new oe({color:"#d6d0c4",roughness:.58}),ceramic:new oe({color:"#c9c1b5",roughness:.36}),marble:wi("#aaa297","rgba(58,55,52,0.26)",10),steel:new oe({color:"#858b8c",metalness:.7,roughness:.22}),grass:new oe({color:"#355f26",roughness:.95,bumpMap:p,bumpScale:.08}),leaf:new oe({color:"#2f6f2e",roughness:.9}),flowerPink:new oe({color:"#c43d72",roughness:.75}),flowerRed:new oe({color:"#b02b22",roughness:.75}),flowerYellow:new oe({color:"#d4a629",roughness:.75}),trunk:new oe({color:"#5a3a1e",roughness:.8}),lamp:new oe({color:"#f1dfbd",emissive:"#b97826",emissiveIntensity:.35}),warmLight:new oe({color:"#f3c46f",emissive:"#d98a1f",emissiveIntensity:.65})}}function k2(r){const t=V2(),n={frontLeft:[-16.2,-24],frontRight:[16.2,-24],backRight:[14.8,21.9],backLeft:[-15.8,24.6]};b2(r,"tilted plot floor",[n.frontLeft,n.frontRight,n.backRight,n.backLeft],-.04,t.terrace),At(r,"road",[0,-.08,-27.2],[36,.08,5.2],new oe({color:"#4a4a48",roughness:.88}),!1),rd(r,"sloped rear compound wall",n.backLeft,n.backRight,1.3,.45,t.boundary),rd(r,"left compound wall",n.frontLeft,n.backLeft,1.3,.45,t.boundary),rd(r,"right compound wall",n.frontRight,n.backRight,1.3,.45,t.boundary),hv(r,t,-7.5,-23.6,17.5,.45),hv(r,t,10.4,-23.6,11.2,.45),At(r,"front gate",[4.5,.75,-23.55],[3.4,1.5,.18],t.frame);for(let l=0;l<9;l+=1)At(r,"gate bars",[3.05+l*.36,.82,-23.4],[.05,1.42,.12],t.frame);B2(r,t),F2(r,t),[{name:"BEDROOM",size:"12-7 X 12-11",x:-8.5,z:12.6,w:7.6,d:8.7},{name:"BEDROOM",size:"10-3 X 11",x:7.15,z:12.55,w:6.9,d:8.2},{name:"DRESSER",size:"5-8 X 3-3",x:.2,z:13.65,w:4.1,d:3},{name:"PUJA",size:"4-6 X 6-11",x:.15,z:7.95,w:3.7,d:4.4},{name:"DINING",size:"17-3 X 10-8",x:0,z:-1.35,w:8.3,d:8.8},{name:"KITCHEN",size:"10-6 X 10-8",x:3.1,z:-11.3,w:5.6,d:6.2},{name:"DRAWING ROOM",size:"15-7 X 12-6",x:-9.9,z:-13.35,w:7.8,d:7},{name:"TOI",size:"8-5 X 4-1",x:-10.7,z:5,w:4.1,d:2.95,floor:t.bathTile},{name:"TOI",size:"9-2 X 6-8",x:-10.9,z:.4,w:4.8,d:3.7,floor:t.bathTile}].forEach(l=>A2(r,t,l)),zn(r,t,-6.5,.8,tn,34),zn(r,t,5.8,5.2,tn,18.8),zn(r,t,-.1,17,27.5,tn),zn(r,t,-13.4,1.4,tn,35.1),zn(r,t,13.4,4.1,tn,29.8),zn(r,t,-9.95,-16.95,7.1,tn),zn(r,t,.1,11.7,4.8,tn),zn(r,t,.1,5.6,4.8,tn),zn(r,t,-10.8,2.8,5.3,tn),zn(r,t,-10.8,-1.75,5.3,tn),zn(r,t,8.9,8.1,7.3,tn),zn(r,t,6.3,-7.8,tn,12.4),zn(r,t,10,-13,5,tn),zn(r,t,.95,-14.45,5.3,tn),zn(r,t,-3.7,-10.5,tn,7.4),zn(r,t,-9.8,9.05,7.4,tn),G2(r,t),Ls(r,t,-6.5,.8,tn+.08,34.1),Ls(r,t,5.8,5.2,tn+.08,18.9),Ls(r,t,-.1,17,27.6,tn+.08),Ls(r,t,-13.4,1.4,tn+.08,35.2),Ls(r,t,13.4,4.1,tn+.08,29.9),Ls(r,t,-9.95,-16.95,7.2,tn+.08),Ls(r,t,10,-13,5.1,tn+.08),Vr(r,t,-8.7,17.05,3.5),Vr(r,t,7.2,17.05,3.2),Vr(r,t,-10.2,-16.98,4),Vr(r,t,2.9,-14.48,3.2),Ja(r,t,-5.95,7.3,Math.PI/2,.72),Ja(r,t,5.9,7.4,-Math.PI/2,.72),Ja(r,t,-2.1,5.8,0,.72),Ja(r,t,3,5.8,Math.PI,.72),Ja(r,t,-4.2,-14.7,Math.PI/2,.65),Ja(r,t,7.2,-14.6,Math.PI,.64),Ja(r,t,-8.45,2.75,Math.PI,.65),Ja(r,t,-8.2,9.05,0,.68),pv(r,t,-9,13.4,Math.PI/2,!0),pv(r,t,8.5,13,-Math.PI/2,!1),mv(r,t,-12.6,12.6,4.8,Math.PI/2),mv(r,t,9,9.05,3.8,0),Kc(r,t,-11.6,15.2),Kc(r,t,-11.6,11.3),Kc(r,t,11.5,14.5),Kc(r,t,11.4,11.1),C2(r,t),w2(r,t),U2(r,t),gv(r,t,-10.7,5,4.1,2.95),gv(r,t,-10.9,.4,4.8,3.7),L2(r,t),N2(r,t),O2(r,t),z2(r,t)}function Qc(r,t,n="perspective"){const a=r<720||t>r*1.15;return n==="top"?{position:new V(0,a?68:55,a?.6:.1),target:new V(0,0,-1.5),fov:a?54:45}:{position:a?new V(26,42,54):new V(22,38,44),target:new V(0,0,a?-2:0),fov:a?52:45}}function X2(){const r=Br.useRef(null),t=Br.useRef(null),n=Br.useRef(null),a=Br.useRef("perspective");Br.useEffect(()=>{const u=r.current,h=new Wv;h.background=new ve("#9e968b"),h.fog=new sp("#9e968b",78,122);const p=new ui(45,u.clientWidth/u.clientHeight,.1,160),m=Qc(u.clientWidth,u.clientHeight);p.position.copy(m.position),p.fov=m.fov,p.lookAt(m.target),t.current=p;const g=new o2({antialias:!0,powerPreference:"high-performance"});g.setPixelRatio(Math.min(window.devicePixelRatio,u.clientWidth<720?1.5:2)),g.setSize(u.clientWidth,u.clientHeight),g.shadowMap.enabled=!0,g.shadowMap.type=vv,g.outputColorSpace=ci,g.toneMapping=Sv,g.toneMappingExposure=.52,u.appendChild(g.domElement);const _=new Zd(g);h.environment=_.fromScene(new E2,.015).texture;const y=new c2(p,g.domElement);y.target.copy(m.target),y.enableDamping=!0,y.dampingFactor=.06,y.screenSpacePanning=!0,y.minDistance=15,y.maxDistance=u.clientWidth<720?88:72,y.maxPolarAngle=Math.PI*.495,y.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},n.current=y,h.add(new y1("#f3eadc","#5f574f",.42));const x=new I_("#fff1d4",1.65);x.position.set(-12,28,18),x.castShadow=!0,x.shadow.camera.left=-30,x.shadow.camera.right=30,x.shadow.camera.top=35,x.shadow.camera.bottom=-35,x.shadow.mapSize.set(2048,2048),h.add(x);const E=new I_("#b7d4ff",.12);E.position.set(22,15,-28),h.add(E),k2(h);const R=new ResizeObserver(()=>{const{clientWidth:O,clientHeight:U}=u,C=Qc(O,U,a.current);p.aspect=O/U,p.fov=C.fov,p.updateProjectionMatrix(),p.position.copy(C.position),y.target.copy(C.target),y.maxDistance=O<720?88:72,g.setPixelRatio(Math.min(window.devicePixelRatio,O<720?1.5:2)),g.setSize(O,U),y.update()});R.observe(u);let M=0;const v=()=>{y.update(),g.render(h,p),M=requestAnimationFrame(v)};return v(),()=>{cancelAnimationFrame(M),R.disconnect(),y.dispose(),g.dispose(),_.dispose(),u.removeChild(g.domElement)}},[]);const l=()=>{const u=t.current,h=n.current;if(!u||!h)return;a.current="perspective";const p=r.current,m=Qc(p.clientWidth,p.clientHeight,"perspective");u.position.copy(m.position),u.fov=m.fov,u.updateProjectionMatrix(),h.target.copy(m.target),h.update()},c=()=>{const u=t.current,h=n.current;if(!u||!h)return;a.current="top";const p=r.current,m=Qc(p.clientWidth,p.clientHeight,"top");u.position.copy(m.position),u.fov=m.fov,u.updateProjectionMatrix(),h.target.copy(m.target),h.update()};return Di.createElement("main",{className:"app"},Di.createElement("div",{ref:r,className:"viewport"}),Di.createElement("section",{className:"hud","aria-label":"Project title"},Di.createElement("h1",null,"Vyas Ji Gumanivala 3D Model"),Di.createElement("p",null,"Orbit, pan, and zoom through the furnished floor plan.")),Di.createElement("div",{className:"toolbar","aria-label":"Camera controls"},Di.createElement("button",{type:"button",onClick:l,title:"Perspective view"},"3D"),Di.createElement("button",{type:"button",onClick:c,title:"Top plan view"},"TOP")))}Ex.createRoot(document.getElementById("root")).render(Di.createElement(Di.StrictMode,null,Di.createElement(X2,null)));
