import{s as Be,r as ie,j as ae,L as Le}from"./index.12e0254a.js";var X={exports:{}},Ee=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},Fe=Ee,K=Object.prototype.toString,Q=function(r){return function(e){var t=K.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return Q(t)===r}}function Y(r){return Array.isArray(r)}function B(r){return typeof r=="undefined"}function je(r){return r!==null&&!B(r)&&r.constructor!==null&&!B(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var ye=A("ArrayBuffer");function qe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ye(r.buffer),e}function Ie(r){return typeof r=="string"}function ke(r){return typeof r=="number"}function Re(r){return r!==null&&typeof r=="object"}function U(r){if(Q(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Me=A("Date"),He=A("File"),Je=A("Blob"),We=A("FileList");function G(r){return K.call(r)==="[object Function]"}function Ve(r){return Re(r)&&G(r.pipe)}function ze(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||K.call(r)===e||G(r.toString)&&r.toString()===e)}var Xe=A("URLSearchParams");function Ke(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Qe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Z(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Y(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function V(){var r={};function e(n,a){U(r[a])&&U(n)?r[a]=V(r[a],n):U(n)?r[a]=V({},n):Y(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)Z(arguments[t],e);return r}function Ye(r,e,t){return Z(e,function(n,a){t&&typeof n=="function"?r[a]=Fe(n,t):r[a]=n}),r}function Ge(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Ze(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function er(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function rr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function tr(r){if(!r)return null;var e=r.length;if(B(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var nr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:Y,isArrayBuffer:ye,isBuffer:je,isFormData:ze,isArrayBufferView:qe,isString:Ie,isNumber:ke,isObject:Re,isPlainObject:U,isUndefined:B,isDate:Me,isFile:He,isBlob:Je,isFunction:G,isStream:Ve,isURLSearchParams:Xe,isStandardBrowserEnv:Qe,forEach:Z,merge:V,extend:Ye,trim:Ke,stripBOM:Ge,inherits:Ze,toFlatObject:er,kindOf:Q,kindOfTest:A,endsWith:rr,toArray:tr,isTypedArray:nr,isFileList:We},S=h;function se(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var be=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(S.isURLSearchParams(t))n=t.toString();else{var a=[];S.forEach(t,function(f,d){f===null||typeof f=="undefined"||(S.isArray(f)?d=d+"[]":f=[f],S.forEach(f,function(l){S.isDate(l)?l=l.toISOString():S.isObject(l)&&(l=JSON.stringify(l)),a.push(se(d)+"="+se(l))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},ir=h;function L(){this.handlers=[]}L.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};L.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};L.prototype.forEach=function(e){ir.forEach(this.handlers,function(i){i!==null&&e(i)})};var ar=L,sr=h,or=function(e,t){sr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},we=h;function T(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}we.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Oe=T.prototype,Ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ae[r]={value:r}});Object.defineProperties(T,Ae);Object.defineProperty(Oe,"isAxiosError",{value:!0});T.from=function(r,e,t,i,n,a){var s=Object.create(Oe);return we.toFlatObject(r,s,function(f){return f!==Error.prototype}),T.call(s,r.message,e,t,i,n),s.name=r.name,a&&Object.assign(s,a),s};var P=T,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=h;function ur(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":R.isDate(a)?a.toISOString():R.isArrayBuffer(a)||R.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(R.isPlainObject(a)||R.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),R.forEach(a,function(f,d){if(!R.isUndefined(f)){var o=s?s+"."+d:d,l;if(f&&!s&&typeof f=="object"){if(R.endsWith(d,"{}"))f=JSON.stringify(f);else if(R.endsWith(d,"[]")&&(l=R.toArray(f))){l.forEach(function(v){!R.isUndefined(v)&&e.append(o,i(v))});return}}n(f,o)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Se=ur,M=P,fr=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new M("Request failed with status code "+i.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},D=h,lr=D.isStandardBrowserEnv()?function(){return{write:function(t,i,n,a,s,u){var f=[];f.push(t+"="+encodeURIComponent(i)),D.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),D.isString(a)&&f.push("path="+a),D.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),cr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},dr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},hr=cr,pr=dr,xe=function(e,t){return e&&!hr(t)?pr(e,t):t},H=h,mr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],vr=function(e){var t={},i,n,a;return e&&H.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),i=H.trim(u.substr(0,a)).toLowerCase(),n=H.trim(u.substr(a+1)),i){if(t[i]&&mr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},oe=h,Er=oe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(a){var s=a;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(s){var u=oe.isString(s)?n(s):s;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),z=P,yr=h;function Te(r){z.call(this,r==null?"canceled":r,z.ERR_CANCELED),this.name="CanceledError"}yr.inherits(Te,z,{__CANCEL__:!0});var F=Te,Rr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},$=h,br=fr,wr=lr,Or=be,Ar=xe,Cr=vr,Sr=Er,xr=Ce,b=P,Tr=F,Nr=Rr,ue=function(e){return new Promise(function(i,n){var a=e.data,s=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}$.isFormData(a)&&$.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+v)}var p=Ar(e.baseURL,e.url);o.open(e.method.toUpperCase(),Or(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function te(){if(!!o){var y="getAllResponseHeaders"in o?Cr(o.getAllResponseHeaders()):null,C=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:C,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};br(function(k){i(k),d()},function(k){n(k),d()},O),o=null}}if("onloadend"in o?o.onloadend=te:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(te)},o.onabort=function(){!o||(n(new b("Request aborted",b.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new b("Network Error",b.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||xr;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(new b(C,O.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,o)),o=null},$.isStandardBrowserEnv()){var ne=(e.withCredentials||Sr(p))&&e.xsrfCookieName?wr.read(e.xsrfCookieName):void 0;ne&&(s[e.xsrfHeaderName]=ne)}"setRequestHeader"in o&&$.forEach(s,function(C,O){typeof a=="undefined"&&O.toLowerCase()==="content-type"?delete s[O]:o.setRequestHeader(O,C)}),$.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Tr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),a||(a=null);var I=Nr(p);if(I&&["http","https","file"].indexOf(I)===-1){n(new b("Unsupported protocol "+I+":",b.ERR_BAD_REQUEST,e));return}o.send(a)})},_r=null,c=h,fe=or,le=P,Pr=Ce,$r=Se,Dr={"Content-Type":"application/x-www-form-urlencoded"};function ce(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Ur(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ue),r}function gr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var j={transitional:Pr,adapter:Ur(),transformRequest:[function(e,t){if(fe(t,"Accept"),fe(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return ce(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],a;if((a=c.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return $r(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return ce(t,"application/json"),gr(e);return e}],transformResponse:[function(e){var t=this.transitional||j.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?le.from(s,le.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_r},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){j.headers[e]={}});c.forEach(["post","put","patch"],function(e){j.headers[e]=c.merge(Dr)});var ee=j,Br=h,Lr=ee,Fr=function(e,t,i){var n=this||Lr;return Br.forEach(i,function(s){e=s.call(n,e,t)}),e},Ne=function(e){return!!(e&&e.__CANCEL__)},de=h,J=Fr,jr=Ne,qr=ee,Ir=F;function W(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ir}var kr=function(e){W(e),e.headers=e.headers||{},e.data=J.call(e,e.data,e.headers,e.transformRequest),e.headers=de.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),de.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||qr.adapter;return t(e).then(function(n){return W(e),n.data=J.call(e,n.data,n.headers,e.transformResponse),n},function(n){return jr(n)||(W(e),n&&n.response&&(n.response.data=J.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,_e=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function a(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function s(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var v=d[l]||a,p=v(l);E.isUndefined(p)&&v!==f||(i[l]=p)}),i},Pe={version:"0.27.2"},Mr=Pe.version,w=P,re={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){re[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var he={};re.transitional=function(e,t,i){function n(a,s){return"[Axios v"+Mr+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,u){if(e===!1)throw new w(n(s," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!he[s]&&(he[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,u):!0}};function Hr(r,e,t){if(typeof r!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var u=r[a],f=u===void 0||s(u,a,r);if(f!==!0)throw new w("option "+a+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+a,w.ERR_BAD_OPTION)}}var Jr={assertOptions:Hr,validators:re},$e=h,Wr=be,pe=ar,me=kr,q=_e,Vr=xe,De=Jr,x=De.validators;function N(r){this.defaults=r,this.interceptors={request:new pe,response:new pe}}N.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=q(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&De.assertOptions(i,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(a=a&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!a){var f=[me,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(v){l(v);break}}try{u=me(d)}catch(v){return Promise.reject(v)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};N.prototype.getUri=function(e){e=q(this.defaults,e);var t=Vr(e.baseURL,e.url);return Wr(t,e.params,e.paramsSerializer)};$e.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(t,i){return this.request(q(i||{},{method:e,url:t,data:(i||{}).data}))}});$e.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,u){return this.request(q(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[e]=t(),N.prototype[e+"Form"]=t(!0)});var zr=N,Xr=F;function _(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,a=new Promise(function(s){t.subscribe(s),n=s}).then(i);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Xr(n),e(t.reason))})}_.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};_.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};_.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};_.source=function(){var e,t=new _(function(n){e=n});return{token:t,cancel:e}};var Kr=_,Qr=function(e){return function(i){return e.apply(null,i)}},Yr=h,Gr=function(e){return Yr.isObject(e)&&e.isAxiosError===!0},ve=h,Zr=Ee,g=zr,et=_e,rt=ee;function Ue(r){var e=new g(r),t=Zr(g.prototype.request,e);return ve.extend(t,g.prototype,e),ve.extend(t,e),t.create=function(n){return Ue(et(r,n))},t}var m=Ue(rt);m.Axios=g;m.CanceledError=F;m.CancelToken=Kr;m.isCancel=Ne;m.VERSION=Pe.version;m.toFormData=Se;m.AxiosError=P;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=Qr;m.isAxiosError=Gr;X.exports=m;X.exports.default=m;var tt=X.exports;const nt=()=>tt.get("https://www.fastmock.site/mock/e7ebe2913686274082d1afac39c04d20/beers/cities"),it=Be.div`
    .city_name{
        display: block;
        width: 100%;
        height: 2.5rem;
        text-align: center;
        color: #666;
        border-bottom: 1px solid rgb(206, 204, 204);
        font-size: 0.8rem;
        line-height: 2.5rem;
        text-indent: 0.5rem;
        
    }
`;function st(){const[r,e]=ie.exports.useState([]);return ie.exports.useEffect(()=>{(async()=>{let{data:i}=await nt();e(i)})()}),ae(it,{children:(()=>r.map(({id:i,nm:n})=>ae(Le,{className:"city_name",to:{pathname:"/events",search:`name=${n}`},children:n},i)))()})}export{st as default};
