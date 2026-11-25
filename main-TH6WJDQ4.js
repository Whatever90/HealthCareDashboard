import{a as N3,b as y3,c as k3,d as w3}from"./chunk-T742PTSH.js";import{A as e3,B as l3,Ba as v3,C as n2,E as G2,Ea as h3,F as g2,H as r3,Ha as L3,Ia as g3,Ja as g1,K as r1,Ka as C3,L as n1,La as C1,M as i1,Ma as x3,Na as b3,Oa as S3,P as n3,Q as i3,R as N2,S as K,T as a2,U as t2,Y as h1,Z as s3,_ as H2,a as Y4,aa as u2,b as K4,ba as t3,ca as o3,ga as f3,ha as i2,ia as m3,ja as u3,k as Y1,ka as z3,n as j2,o as Y2,p as K2,pa as p3,q as Q4,qa as d3,t as J4,u as c3,ua as K1,v as a3,va as L1,wa as f2,xa as M3}from"./chunk-FMDTPE67.js";var q6=Object.defineProperty,j6=Object.defineProperties,G6=Object.getOwnPropertyDescriptors,A3=Object.getOwnPropertySymbols,V6=Object.prototype.hasOwnProperty,$6=Object.prototype.propertyIsEnumerable,c4=(c,a,l)=>a in c?q6(c,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[a]=l,T3=(c,a)=>{for(var l in a||(a={}))V6.call(a,l)&&c4(c,l,a[l]);if(A3)for(var l of A3(a))$6.call(a,l)&&c4(c,l,a[l]);return c},X6=(c,a)=>j6(c,G6(a)),D=(c,a,l)=>(c4(c,typeof a!="symbol"?a+"":a,l),l),y2=globalThis;function p2(c){return(y2.__Zone_symbol_prefix||"__zone_symbol__")+c}function Z6(){let c=y2.performance;function a(Z){c&&c.mark&&c.mark(Z)}function l(Z,m){c&&c.measure&&c.measure(Z,m)}a("Zone");let e=class a4{constructor(m,f){D(this,"_parent"),D(this,"_name"),D(this,"_properties"),D(this,"_zoneDelegate"),this._parent=m,this._name=f?f.name||"unnamed":"<root>",this._properties=f&&f.properties||{},this._zoneDelegate=new i(this,this._parent&&this._parent._zoneDelegate,f)}static assertZonePatched(){if(y2.Promise!==E.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let m=a4.current;for(;m.parent;)m=m.parent;return m}static get current(){return T.zone}static get currentTask(){return o2}static __load_patch(m,f,o=!1){if(E.hasOwnProperty(m)){let w=y2[p2("forceDuplicateZoneCheck")]===!0;if(!o&&w)throw Error("Already loaded patch: "+m)}else if(!y2["__Zone_disable_"+m]){let w="Zone:"+m;a(w),E[m]=f(y2,a4,I),l(w,w)}}get parent(){return this._parent}get name(){return this._name}get(m){let f=this.getZoneWith(m);if(f)return f._properties[m]}getZoneWith(m){let f=this;for(;f;){if(f._properties.hasOwnProperty(m))return f;f=f._parent}return null}fork(m){if(!m)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,m)}wrap(m,f){if(typeof m!="function")throw new Error("Expecting function got: "+m);let o=this._zoneDelegate.intercept(this,m,f),w=this;return function(){return w.runGuarded(o,this,arguments,f)}}run(m,f,o,w){T={parent:T,zone:this};try{return this._zoneDelegate.invoke(this,m,f,o,w)}finally{T=T.parent}}runGuarded(m,f=null,o,w){T={parent:T,zone:this};try{try{return this._zoneDelegate.invoke(this,m,f,o,w)}catch(Y){if(this._zoneDelegate.handleError(this,Y))throw Y}}finally{T=T.parent}}runTask(m,f,o){if(m.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(m.zone||U).name+"; Execution: "+this.name+")");let w=m,{type:Y,data:{isPeriodic:W=!1,isRefreshable:M2=!1}={}}=m;if(m.state===x&&(Y===F||Y===e2))return;let w2=m.state!=R;w2&&w._transitionTo(R,j);let A2=o2;o2=w,T={parent:T,zone:this};try{Y==e2&&m.data&&!W&&!M2&&(m.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,w,f,o)}catch(v2){if(this._zoneDelegate.handleError(this,v2))throw v2}}finally{let v2=m.state;if(v2!==x&&v2!==X)if(Y==F||W||M2&&v2===g)w2&&w._transitionTo(j,R,g);else{let h=w._zoneDelegates;this._updateTaskCount(w,-1),w2&&w._transitionTo(x,R,x),M2&&(w._zoneDelegates=h)}T=T.parent,o2=A2}}scheduleTask(m){if(m.zone&&m.zone!==this){let o=this;for(;o;){if(o===m.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${m.zone.name}`);o=o.parent}}m._transitionTo(g,x);let f=[];m._zoneDelegates=f,m._zone=this;try{m=this._zoneDelegate.scheduleTask(this,m)}catch(o){throw m._transitionTo(X,g,x),this._zoneDelegate.handleError(this,o),o}return m._zoneDelegates===f&&this._updateTaskCount(m,1),m.state==g&&m._transitionTo(j,g),m}scheduleMicroTask(m,f,o,w){return this.scheduleTask(new s(S,m,f,o,w,void 0))}scheduleMacroTask(m,f,o,w,Y){return this.scheduleTask(new s(e2,m,f,o,w,Y))}scheduleEventTask(m,f,o,w,Y){return this.scheduleTask(new s(F,m,f,o,w,Y))}cancelTask(m){if(m.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(m.zone||U).name+"; Execution: "+this.name+")");if(!(m.state!==j&&m.state!==R)){m._transitionTo($,j,R);try{this._zoneDelegate.cancelTask(this,m)}catch(f){throw m._transitionTo(X,$),this._zoneDelegate.handleError(this,f),f}return this._updateTaskCount(m,-1),m._transitionTo(x,$),m.runCount=-1,m}}_updateTaskCount(m,f){let o=m._zoneDelegates;f==-1&&(m._zoneDelegates=null);for(let w=0;w<o.length;w++)o[w]._updateTaskCount(m.type,f)}};D(e,"__symbol__",p2);let r=e,n={name:"",onHasTask:(Z,m,f,o)=>Z.hasTask(f,o),onScheduleTask:(Z,m,f,o)=>Z.scheduleTask(f,o),onInvokeTask:(Z,m,f,o,w,Y)=>Z.invokeTask(f,o,w,Y),onCancelTask:(Z,m,f,o)=>Z.cancelTask(f,o)};class i{constructor(m,f,o){D(this,"_zone"),D(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),D(this,"_parentDelegate"),D(this,"_forkDlgt"),D(this,"_forkZS"),D(this,"_forkCurrZone"),D(this,"_interceptDlgt"),D(this,"_interceptZS"),D(this,"_interceptCurrZone"),D(this,"_invokeDlgt"),D(this,"_invokeZS"),D(this,"_invokeCurrZone"),D(this,"_handleErrorDlgt"),D(this,"_handleErrorZS"),D(this,"_handleErrorCurrZone"),D(this,"_scheduleTaskDlgt"),D(this,"_scheduleTaskZS"),D(this,"_scheduleTaskCurrZone"),D(this,"_invokeTaskDlgt"),D(this,"_invokeTaskZS"),D(this,"_invokeTaskCurrZone"),D(this,"_cancelTaskDlgt"),D(this,"_cancelTaskZS"),D(this,"_cancelTaskCurrZone"),D(this,"_hasTaskDlgt"),D(this,"_hasTaskDlgtOwner"),D(this,"_hasTaskZS"),D(this,"_hasTaskCurrZone"),this._zone=m,this._parentDelegate=f,this._forkZS=o&&(o&&o.onFork?o:f._forkZS),this._forkDlgt=o&&(o.onFork?f:f._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:f._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:f._interceptZS),this._interceptDlgt=o&&(o.onIntercept?f:f._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:f._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:f._invokeZS),this._invokeDlgt=o&&(o.onInvoke?f:f._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:f._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:f._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?f:f._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:f._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:f._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?f:f._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:f._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:f._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?f:f._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:f._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:f._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?f:f._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:f._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let w=o&&o.onHasTask,Y=f&&f._hasTaskZS;(w||Y)&&(this._hasTaskZS=w?o:n,this._hasTaskDlgt=f,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=n,this._scheduleTaskDlgt=f,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=n,this._invokeTaskDlgt=f,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=n,this._cancelTaskDlgt=f,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(m,f){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,f):new r(m,f)}intercept(m,f,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,f,o):f}invoke(m,f,o,w,Y){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,f,o,w,Y):f.apply(o,w)}handleError(m,f){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,f):!0}scheduleTask(m,f){let o=f;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,f),o||(o=f);else if(f.scheduleFn)f.scheduleFn(f);else if(f.type==S)_(f);else throw new Error("Task is missing scheduleFn.");return o}invokeTask(m,f,o,w){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,f,o,w):f.callback.apply(o,w)}cancelTask(m,f){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,f);else{if(!f.cancelFn)throw Error("Task is not cancelable");o=f.cancelFn(f)}return o}hasTask(m,f){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,f)}catch(o){this.handleError(m,o)}}_updateTaskCount(m,f){let o=this._taskCounts,w=o[m],Y=o[m]=w+f;if(Y<0)throw new Error("More tasks executed then were scheduled.");if(w==0||Y==0){let W={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:m};this.hasTask(this._zone,W)}}}class s{constructor(m,f,o,w,Y,W){if(D(this,"type"),D(this,"source"),D(this,"invoke"),D(this,"callback"),D(this,"data"),D(this,"scheduleFn"),D(this,"cancelFn"),D(this,"_zone",null),D(this,"runCount",0),D(this,"_zoneDelegates",null),D(this,"_state","notScheduled"),this.type=m,this.source=f,this.data=w,this.scheduleFn=Y,this.cancelFn=W,!o)throw new Error("callback is not defined");this.callback=o;let M2=this;m===F&&w&&w.useG?this.invoke=s.invokeTask:this.invoke=function(){return s.invokeTask.call(y2,M2,this,arguments)}}static invokeTask(m,f,o){m||(m=this),m2++;try{return m.runCount++,m.zone.runTask(m,f,o)}finally{m2==1&&G(),m2--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,g)}_transitionTo(m,f,o){if(this._state===f||this._state===o)this._state=m,m==x&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${f}'${o?" or '"+o+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let t=p2("setTimeout"),z=p2("Promise"),p=p2("then"),d=[],b=!1,C;function q(Z){if(C||y2[z]&&(C=y2[z].resolve(0)),C){let m=C[p];m||(m=C.then),m.call(C,Z)}else y2[t](Z,0)}function _(Z){m2===0&&d.length===0&&q(G),Z&&d.push(Z)}function G(){if(!b){for(b=!0;d.length;){let Z=d;d=[];for(let m=0;m<Z.length;m++){let f=Z[m];try{f.zone.runTask(f,null,null)}catch(o){I.onUnhandledError(o)}}}I.microtaskDrainDone(),b=!1}}let U={name:"NO ZONE"},x="notScheduled",g="scheduling",j="scheduled",R="running",$="canceling",X="unknown",S="microTask",e2="macroTask",F="eventTask",E={},I={symbol:p2,currentZoneFrame:()=>T,onUnhandledError:Q,microtaskDrainDone:Q,scheduleMicroTask:_,showUncaughtError:()=>!r[p2("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:Q,patchMethod:()=>Q,bindArguments:()=>[],patchThen:()=>Q,patchMacroTask:()=>Q,patchEventPrototype:()=>Q,getGlobalObjects:()=>{},ObjectDefineProperty:()=>Q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>Q,wrapWithCurrentZone:()=>Q,filterProperties:()=>[],attachOriginToPatched:()=>Q,_redefineProperty:()=>Q,patchCallbacks:()=>Q,nativeScheduleMicroTask:q},T={parent:null,zone:new r(null,null)},o2=null,m2=0;function Q(){}return l("Zone","Zone"),r}function Y6(){var c;let a=globalThis,l=a[p2("forceDuplicateZoneCheck")]===!0;if(a.Zone&&(l||typeof a.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(c=a.Zone)!=null||(a.Zone=Z6()),a.Zone}var t1=Object.getOwnPropertyDescriptor,l4=Object.defineProperty,r4=Object.getPrototypeOf,K6=Object.create,Q6=Array.prototype.slice,n4="addEventListener",i4="removeEventListener",Q1=p2(n4),J1=p2(i4),T2="true",P2="false",o1=p2("");function s4(c,a){return Zone.current.wrap(c,a)}function t4(c,a,l,e,r){return Zone.current.scheduleMacroTask(c,a,l,e,r)}var V=p2,S1=typeof window<"u",N1=S1?window:void 0,r2=S1&&N1||globalThis,J6="removeAttribute";function o4(c,a){for(let l=c.length-1;l>=0;l--)typeof c[l]=="function"&&(c[l]=s4(c[l],a+"_"+l));return c}function c8(c,a){let l=c.constructor.name;for(let e=0;e<a.length;e++){let r=a[e],n=c[r];if(n){let i=t1(c,r);if(!R3(i))continue;c[r]=(s=>{let t=function(){return s.apply(this,o4(arguments,l+"."+r))};return E2(t,s),t})(n)}}}function R3(c){return c?c.writable===!1?!1:!(typeof c.get=="function"&&typeof c.set>"u"):!0}var B3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,y1=!("nw"in r2)&&typeof r2.process<"u"&&r2.process.toString()==="[object process]",f4=!y1&&!B3&&!!(S1&&N1.HTMLElement),H3=typeof r2.process<"u"&&r2.process.toString()==="[object process]"&&!B3&&!!(S1&&N1.HTMLElement),b1={},a8=V("enable_beforeunload"),P3=function(c){if(c=c||r2.event,!c)return;let a=b1[c.type];a||(a=b1[c.type]=V("ON_PROPERTY"+c.type));let l=this||c.target||r2,e=l[a],r;if(f4&&l===N1&&c.type==="error"){let n=c;r=e&&e.call(this,n.message,n.filename,n.lineno,n.colno,n.error),r===!0&&c.preventDefault()}else r=e&&e.apply(this,arguments),c.type==="beforeunload"&&r2[a8]&&typeof r=="string"?c.returnValue=r:r!=null&&!r&&c.preventDefault();return r};function _3(c,a,l){let e=t1(c,a);if(!e&&l&&t1(l,a)&&(e={enumerable:!0,configurable:!0}),!e||!e.configurable)return;let r=V("on"+a+"patched");if(c.hasOwnProperty(r)&&c[r])return;delete e.writable,delete e.value;let n=e.get,i=e.set,s=a.slice(2),t=b1[s];t||(t=b1[s]=V("ON_PROPERTY"+s)),e.set=function(z){let p=this;if(!p&&c===r2&&(p=r2),!p)return;typeof p[t]=="function"&&p.removeEventListener(s,P3),i?.call(p,null),p[t]=z,typeof z=="function"&&p.addEventListener(s,P3,!1)},e.get=function(){let z=this;if(!z&&c===r2&&(z=r2),!z)return null;let p=z[t];if(p)return p;if(n){let d=n.call(this);if(d)return e.set.call(this,d),typeof z[J6]=="function"&&z.removeAttribute(a),d}return null},l4(c,a,e),c[r]=!0}function O3(c,a,l){if(a)for(let e=0;e<a.length;e++)_3(c,"on"+a[e],l);else{let e=[];for(let r in c)r.slice(0,2)=="on"&&e.push(r);for(let r=0;r<e.length;r++)_3(c,e[r],l)}}var C2=V("originalInstance");function s1(c){let a=r2[c];if(!a)return;r2[V(c)]=a,r2[c]=function(){let r=o4(arguments,c);switch(r.length){case 0:this[C2]=new a;break;case 1:this[C2]=new a(r[0]);break;case 2:this[C2]=new a(r[0],r[1]);break;case 3:this[C2]=new a(r[0],r[1],r[2]);break;case 4:this[C2]=new a(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}},E2(r2[c],a);let l=new a(function(){}),e;for(e in l)c==="XMLHttpRequest"&&e==="responseBlob"||(function(r){typeof l[r]=="function"?r2[c].prototype[r]=function(){return this[C2][r].apply(this[C2],arguments)}:l4(r2[c].prototype,r,{set:function(n){typeof n=="function"?(this[C2][r]=s4(n,c+"."+r),E2(this[C2][r],n)):this[C2][r]=n},get:function(){return this[C2][r]}})})(e);for(e in a)e!=="prototype"&&a.hasOwnProperty(e)&&(r2[c][e]=a[e])}function e8(c,a){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(c).forEach(e=>{let r=Object.getOwnPropertyDescriptor(c,e);Object.defineProperty(a,e,{get:function(){return c[e]},set:function(n){r&&(!r.writable||typeof r.set!="function")||(c[e]=n)},enumerable:r?r.enumerable:!0,configurable:r?r.configurable:!0})})}var l8=!1;function _2(c,a,l){let e=c;for(;e&&!e.hasOwnProperty(a);)e=r4(e);!e&&c[a]&&(e=c);let r=V(a),n=null;if(e&&(!(n=e[r])||!e.hasOwnProperty(r))){n=e[r]=e[a];let i=e&&t1(e,a);if(R3(i)){let s=l(n,r,a);e[a]=function(){return s(this,arguments)},E2(e[a],n),l8&&e8(n,e[a])}}return n}function r8(c,a,l){let e=null;function r(n){let i=n.data;return i.args[i.cbIdx]=function(){n.invoke.apply(this,arguments)},e.apply(i.target,i.args),n}e=_2(c,a,n=>function(i,s){let t=l(i,s);return t.cbIdx>=0&&typeof s[t.cbIdx]=="function"?t4(t.name,s[t.cbIdx],t,r):n.apply(i,s)})}function E2(c,a){c[V("OriginalDelegate")]=a}function E3(c){return typeof c=="function"}function D3(c){return typeof c=="number"}var n8={useG:!0},d2={},I3={},U3=new RegExp("^"+o1+"(\\w+)(true|false)$"),W3=V("propagationStopped");function q3(c,a){let l=(a?a(c):c)+P2,e=(a?a(c):c)+T2,r=o1+l,n=o1+e;d2[c]={},d2[c][P2]=r,d2[c][T2]=n}function i8(c,a,l,e){let r=e&&e.add||n4,n=e&&e.rm||i4,i=e&&e.listeners||"eventListeners",s=e&&e.rmAll||"removeAllListeners",t=V(r),z="."+r+":",p="prependListener",d="."+p+":",b=function(x,g,j){if(x.isRemoved)return;let R=x.callback;typeof R=="object"&&R.handleEvent&&(x.callback=S=>R.handleEvent(S),x.originalDelegate=R);let $;try{x.invoke(x,g,[j])}catch(S){$=S}let X=x.options;if(X&&typeof X=="object"&&X.once){let S=x.originalDelegate?x.originalDelegate:x.callback;g[n].call(g,j.type,S,X)}return $};function C(x,g,j){if(g=g||c.event,!g)return;let R=x||g.target||c,$=R[d2[g.type][j?T2:P2]];if($){let X=[];if($.length===1){let S=b($[0],R,g);S&&X.push(S)}else{let S=$.slice();for(let e2=0;e2<S.length&&!(g&&g[W3]===!0);e2++){let F=b(S[e2],R,g);F&&X.push(F)}}if(X.length===1)throw X[0];for(let S=0;S<X.length;S++){let e2=X[S];a.nativeScheduleMicroTask(()=>{throw e2})}}}let q=function(x){return C(this,x,!1)},_=function(x){return C(this,x,!0)};function G(x,g){if(!x)return!1;let j=!0;g&&g.useG!==void 0&&(j=g.useG);let R=g&&g.vh,$=!0;g&&g.chkDup!==void 0&&($=g.chkDup);let X=!1;g&&g.rt!==void 0&&(X=g.rt);let S=x;for(;S&&!S.hasOwnProperty(r);)S=r4(S);if(!S&&x[r]&&(S=x),!S||S[t])return!1;let e2=g&&g.eventNameToString,F={},E=S[t]=S[r],I=S[V(n)]=S[n],T=S[V(i)]=S[i],o2=S[V(s)]=S[s],m2;g&&g.prepend&&(m2=S[V(g.prepend)]=S[g.prepend]);function Q(u,L){return L?typeof u=="boolean"?{capture:u,passive:!0}:u?typeof u=="object"&&u.passive!==!1?X6(T3({},u),{passive:!0}):u:{passive:!0}:u}let Z=function(u){if(!F.isExisting)return E.call(F.target,F.eventName,F.capture?_:q,F.options)},m=function(u){if(!u.isRemoved){let L=d2[u.eventName],y;L&&(y=L[u.capture?T2:P2]);let P=y&&u.target[y];if(P){for(let N=0;N<P.length;N++)if(P[N]===u){P.splice(N,1),u.isRemoved=!0,u.removeAbortListener&&(u.removeAbortListener(),u.removeAbortListener=null),P.length===0&&(u.allRemoved=!0,u.target[y]=null);break}}}if(u.allRemoved)return I.call(u.target,u.eventName,u.capture?_:q,u.options)},f=function(u){return E.call(F.target,F.eventName,u.invoke,F.options)},o=function(u){return m2.call(F.target,F.eventName,u.invoke,F.options)},w=function(u){return I.call(u.target,u.eventName,u.invoke,u.options)},Y=j?Z:f,W=j?m:w,M2=function(u,L){let y=typeof L;return y==="function"&&u.callback===L||y==="object"&&u.originalDelegate===L},w2=g?.diff||M2,A2=Zone[V("UNPATCHED_EVENTS")],v2=c[V("PASSIVE_EVENTS")];function h(u){if(typeof u=="object"&&u!==null){let L=T3({},u);return u.signal&&(L.signal=u.signal),L}return u}let v=function(u,L,y,P,N=!1,B=!1){return function(){let H=this||c,O=arguments[0];g&&g.transferEventName&&(O=g.transferEventName(O));let J=arguments[1];if(!J)return u.apply(this,arguments);if(y1&&O==="uncaughtException")return u.apply(this,arguments);let c2=!1;if(typeof J!="function"){if(!J.handleEvent)return u.apply(this,arguments);c2=!0}if(R&&!R(u,J,H,arguments))return;let B2=!!v2&&v2.indexOf(O)!==-1,h2=h(Q(arguments[2],B2)),q2=h2?.signal;if(q2?.aborted)return;if(A2){for(let S2=0;S2<A2.length;S2++)if(O===A2[S2])return B2?u.call(H,O,J,h2):u.apply(this,arguments)}let X1=h2?typeof h2=="boolean"?!0:h2.capture:!1,G4=h2&&typeof h2=="object"?h2.once:!1,W6=Zone.current,Z1=d2[O];Z1||(q3(O,e2),Z1=d2[O]);let V4=Z1[X1?T2:P2],Z2=H[V4],$4=!1;if(Z2){if($4=!0,$){for(let S2=0;S2<Z2.length;S2++)if(w2(Z2[S2],J))return}}else Z2=H[V4]=[];let v1,X4=H.constructor.name,Z4=I3[X4];Z4&&(v1=Z4[O]),v1||(v1=X4+L+(e2?e2(O):O)),F.options=h2,G4&&(F.options.once=!1),F.target=H,F.capture=X1,F.eventName=O,F.isExisting=$4;let l1=j?n8:void 0;l1&&(l1.taskData=F),q2&&(F.options.signal=void 0);let L2=W6.scheduleEventTask(v1,J,l1,y,P);if(q2){F.options.signal=q2;let S2=()=>L2.zone.cancelTask(L2);u.call(q2,"abort",S2,{once:!0}),L2.removeAbortListener=()=>q2.removeEventListener("abort",S2)}if(F.target=null,l1&&(l1.taskData=null),G4&&(F.options.once=!0),typeof L2.options!="boolean"&&(L2.options=h2),L2.target=H,L2.capture=X1,L2.eventName=O,c2&&(L2.originalDelegate=J),B?Z2.unshift(L2):Z2.push(L2),N)return H}};return S[r]=v(E,z,Y,W,X),m2&&(S[p]=v(m2,d,o,W,X,!0)),S[n]=function(){let u=this||c,L=arguments[0];g&&g.transferEventName&&(L=g.transferEventName(L));let y=arguments[2],P=y?typeof y=="boolean"?!0:y.capture:!1,N=arguments[1];if(!N)return I.apply(this,arguments);if(R&&!R(I,N,u,arguments))return;let B=d2[L],H;B&&(H=B[P?T2:P2]);let O=H&&u[H];if(O)for(let J=0;J<O.length;J++){let c2=O[J];if(w2(c2,N)){if(O.splice(J,1),c2.isRemoved=!0,O.length===0&&(c2.allRemoved=!0,u[H]=null,!P&&typeof L=="string")){let B2=o1+"ON_PROPERTY"+L;u[B2]=null}return c2.zone.cancelTask(c2),X?u:void 0}}return I.apply(this,arguments)},S[i]=function(){let u=this||c,L=arguments[0];g&&g.transferEventName&&(L=g.transferEventName(L));let y=[],P=j3(u,e2?e2(L):L);for(let N=0;N<P.length;N++){let B=P[N],H=B.originalDelegate?B.originalDelegate:B.callback;y.push(H)}return y},S[s]=function(){let u=this||c,L=arguments[0];if(L){g&&g.transferEventName&&(L=g.transferEventName(L));let y=d2[L];if(y){let P=y[P2],N=y[T2],B=u[P],H=u[N];if(B){let O=B.slice();for(let J=0;J<O.length;J++){let c2=O[J],B2=c2.originalDelegate?c2.originalDelegate:c2.callback;this[n].call(this,L,B2,c2.options)}}if(H){let O=H.slice();for(let J=0;J<O.length;J++){let c2=O[J],B2=c2.originalDelegate?c2.originalDelegate:c2.callback;this[n].call(this,L,B2,c2.options)}}}}else{let y=Object.keys(u);for(let P=0;P<y.length;P++){let N=y[P],B=U3.exec(N),H=B&&B[1];H&&H!=="removeListener"&&this[s].call(this,H)}this[s].call(this,"removeListener")}if(X)return this},E2(S[r],E),E2(S[n],I),o2&&E2(S[s],o2),T&&E2(S[i],T),!0}let U=[];for(let x=0;x<l.length;x++)U[x]=G(l[x],e);return U}function j3(c,a){if(!a){let n=[];for(let i in c){let s=U3.exec(i),t=s&&s[1];if(t&&(!a||t===a)){let z=c[i];if(z)for(let p=0;p<z.length;p++)n.push(z[p])}}return n}let l=d2[a];l||(q3(a),l=d2[a]);let e=c[l[P2]],r=c[l[T2]];return e?r?e.concat(r):e.slice():r?r.slice():[]}function s8(c,a){let l=c.Event;l&&l.prototype&&a.patchMethod(l.prototype,"stopImmediatePropagation",e=>function(r,n){r[W3]=!0,e&&e.apply(r,n)})}function t8(c,a){a.patchMethod(c,"queueMicrotask",l=>function(e,r){Zone.current.scheduleMicroTask("queueMicrotask",r[0])})}var x1=V("zoneTask");function Q2(c,a,l,e){let r=null,n=null;a+=e,l+=e;let i={};function s(z){let p=z.data;p.args[0]=function(){return z.invoke.apply(this,arguments)};let d=r.apply(c,p.args);return D3(d)?p.handleId=d:(p.handle=d,p.isRefreshable=E3(d.refresh)),z}function t(z){let{handle:p,handleId:d}=z.data;return n.call(c,p??d)}r=_2(c,a,z=>function(p,d){var b;if(E3(d[0])){let C={isRefreshable:!1,isPeriodic:e==="Interval",delay:e==="Timeout"||e==="Interval"?d[1]||0:void 0,args:d},q=d[0];d[0]=function(){try{return q.apply(this,arguments)}finally{let{handle:R,handleId:$,isPeriodic:X,isRefreshable:S}=C;!X&&!S&&($?delete i[$]:R&&(R[x1]=null))}};let _=t4(a,d[0],C,s,t);if(!_)return _;let{handleId:G,handle:U,isRefreshable:x,isPeriodic:g}=_.data;if(G)i[G]=_;else if(U&&(U[x1]=_,x&&!g)){let j=U.refresh;U.refresh=function(){let{zone:R,state:$}=_;return $==="notScheduled"?(_._state="scheduled",R._updateTaskCount(_,1)):$==="running"&&(_._state="scheduling"),j.call(this)}}return(b=U??G)!=null?b:_}else return z.apply(c,d)}),n=_2(c,l,z=>function(p,d){let b=d[0],C;D3(b)?(C=i[b],delete i[b]):(C=b?.[x1],C?b[x1]=null:C=b),C?.type?C.cancelFn&&C.zone.cancelTask(C):z.apply(c,d)})}function o8(c,a){let{isBrowser:l,isMix:e}=a.getGlobalObjects();if(!l&&!e||!c.customElements||!("customElements"in c))return;let r=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];a.patchCallbacks(a,c.customElements,"customElements","define",r)}function f8(c,a){if(Zone[a.symbol("patchEventTarget")])return;let{eventNames:l,zoneSymbolEventNames:e,TRUE_STR:r,FALSE_STR:n,ZONE_SYMBOL_PREFIX:i}=a.getGlobalObjects();for(let t=0;t<l.length;t++){let z=l[t],p=z+n,d=z+r,b=i+p,C=i+d;e[z]={},e[z][n]=b,e[z][r]=C}let s=c.EventTarget;if(!(!s||!s.prototype))return a.patchEventTarget(c,a,[s&&s.prototype]),!0}function m8(c,a){a.patchEventPrototype(c,a)}function G3(c,a,l){if(!l||l.length===0)return a;let e=l.filter(n=>n.target===c);if(e.length===0)return a;let r=e[0].ignoreProperties;return a.filter(n=>r.indexOf(n)===-1)}function F3(c,a,l,e){if(!c)return;let r=G3(c,a,l);O3(c,r,e)}function e4(c){return Object.getOwnPropertyNames(c).filter(a=>a.startsWith("on")&&a.length>2).map(a=>a.substring(2))}function u8(c,a){if(y1&&!H3||Zone[c.symbol("patchEvents")])return;let l=a.__Zone_ignore_on_properties,e=[];if(f4){let r=window;e=e.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),F3(r,e4(r),l,r4(r))}e=e.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let r=0;r<e.length;r++){let n=a[e[r]];n?.prototype&&F3(n.prototype,e4(n.prototype),l)}}function z8(c){c.__load_patch("timers",a=>{let e="clear";Q2(a,"set",e,"Timeout"),Q2(a,"set",e,"Interval"),Q2(a,"set",e,"Immediate")}),c.__load_patch("requestAnimationFrame",a=>{Q2(a,"request","cancel","AnimationFrame"),Q2(a,"mozRequest","mozCancel","AnimationFrame"),Q2(a,"webkitRequest","webkitCancel","AnimationFrame")}),c.__load_patch("blocking",(a,l)=>{let e=["alert","prompt","confirm"];for(let r=0;r<e.length;r++){let n=e[r];_2(a,n,(i,s,t)=>function(z,p){return l.current.run(i,a,p,t)})}}),c.__load_patch("EventTarget",(a,l,e)=>{m8(a,e),f8(a,e);let r=a.XMLHttpRequestEventTarget;r&&r.prototype&&e.patchEventTarget(a,e,[r.prototype])}),c.__load_patch("MutationObserver",(a,l,e)=>{s1("MutationObserver"),s1("WebKitMutationObserver")}),c.__load_patch("IntersectionObserver",(a,l,e)=>{s1("IntersectionObserver")}),c.__load_patch("FileReader",(a,l,e)=>{s1("FileReader")}),c.__load_patch("on_property",(a,l,e)=>{u8(e,a)}),c.__load_patch("customElements",(a,l,e)=>{o8(a,e)}),c.__load_patch("XHR",(a,l)=>{z(a);let e=V("xhrTask"),r=V("xhrSync"),n=V("xhrListener"),i=V("xhrScheduled"),s=V("xhrURL"),t=V("xhrErrorBeforeScheduled");function z(p){let d=p.XMLHttpRequest;if(!d)return;let b=d.prototype;function C(E){return E[e]}let q=b[Q1],_=b[J1];if(!q){let E=p.XMLHttpRequestEventTarget;if(E){let I=E.prototype;q=I[Q1],_=I[J1]}}let G="readystatechange",U="scheduled";function x(E){let I=E.data,T=I.target;T[i]=!1,T[t]=!1;let o2=T[n];q||(q=T[Q1],_=T[J1]),o2&&_.call(T,G,o2);let m2=T[n]=()=>{if(T.readyState===T.DONE)if(!I.aborted&&T[i]&&E.state===U){let Z=T[l.__symbol__("loadfalse")];if(T.status!==0&&Z&&Z.length>0){let m=E.invoke;E.invoke=function(){let f=T[l.__symbol__("loadfalse")];for(let o=0;o<f.length;o++)f[o]===E&&f.splice(o,1);!I.aborted&&E.state===U&&m.call(E)},Z.push(E)}else E.invoke()}else!I.aborted&&T[i]===!1&&(T[t]=!0)};return q.call(T,G,m2),T[e]||(T[e]=E),e2.apply(T,I.args),T[i]=!0,E}function g(){}function j(E){let I=E.data;return I.aborted=!0,F.apply(I.target,I.args)}let R=_2(b,"open",()=>function(E,I){return E[r]=I[2]==!1,E[s]=I[1],R.apply(E,I)}),$="XMLHttpRequest.send",X=V("fetchTaskAborting"),S=V("fetchTaskScheduling"),e2=_2(b,"send",()=>function(E,I){if(l.current[S]===!0||E[r])return e2.apply(E,I);{let T={target:E,url:E[s],isPeriodic:!1,args:I,aborted:!1},o2=t4($,g,T,x,j);E&&E[t]===!0&&!T.aborted&&o2.state===U&&o2.invoke()}}),F=_2(b,"abort",()=>function(E,I){let T=C(E);if(T&&typeof T.type=="string"){if(T.cancelFn==null||T.data&&T.data.aborted)return;T.zone.cancelTask(T)}else if(l.current[X]===!0)return F.apply(E,I)})}}),c.__load_patch("geolocation",a=>{a.navigator&&a.navigator.geolocation&&c8(a.navigator.geolocation,["getCurrentPosition","watchPosition"])}),c.__load_patch("PromiseRejectionEvent",(a,l)=>{function e(r){return function(n){j3(a,r).forEach(s=>{let t=a.PromiseRejectionEvent;if(t){let z=new t(r,{promise:n.promise,reason:n.rejection});s.invoke(z)}})}}a.PromiseRejectionEvent&&(l[V("unhandledPromiseRejectionHandler")]=e("unhandledrejection"),l[V("rejectionHandledHandler")]=e("rejectionhandled"))}),c.__load_patch("queueMicrotask",(a,l,e)=>{t8(a,e)})}function p8(c){c.__load_patch("ZoneAwarePromise",(a,l,e)=>{let r=Object.getOwnPropertyDescriptor,n=Object.defineProperty;function i(h){if(h&&h.toString===Object.prototype.toString){let v=h.constructor&&h.constructor.name;return(v||"")+": "+JSON.stringify(h)}return h?h.toString():Object.prototype.toString.call(h)}let s=e.symbol,t=[],z=a[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,p=s("Promise"),d=s("then"),b="__creationTrace__";e.onUnhandledError=h=>{if(e.showUncaughtError()){let v=h&&h.rejection;v?console.error("Unhandled Promise rejection:",v instanceof Error?v.message:v,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",v,v instanceof Error?v.stack:void 0):console.error(h)}},e.microtaskDrainDone=()=>{for(;t.length;){let h=t.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(v){q(v)}}};let C=s("unhandledPromiseRejectionHandler");function q(h){e.onUnhandledError(h);try{let v=l[C];typeof v=="function"&&v.call(this,h)}catch{}}function _(h){return h&&typeof h.then=="function"}function G(h){return h}function U(h){return W.reject(h)}let x=s("state"),g=s("value"),j=s("finally"),R=s("parentPromiseValue"),$=s("parentPromiseState"),X="Promise.then",S=null,e2=!0,F=!1,E=0;function I(h,v){return u=>{try{Q(h,v,u)}catch(L){Q(h,!1,L)}}}let T=function(){let h=!1;return function(u){return function(){h||(h=!0,u.apply(null,arguments))}}},o2="Promise resolved with itself",m2=s("currentTaskTrace");function Q(h,v,u){let L=T();if(h===u)throw new TypeError(o2);if(h[x]===S){let y=null;try{(typeof u=="object"||typeof u=="function")&&(y=u&&u.then)}catch(P){return L(()=>{Q(h,!1,P)})(),h}if(v!==F&&u instanceof W&&u.hasOwnProperty(x)&&u.hasOwnProperty(g)&&u[x]!==S)m(u),Q(h,u[x],u[g]);else if(v!==F&&typeof y=="function")try{y.call(u,L(I(h,v)),L(I(h,!1)))}catch(P){L(()=>{Q(h,!1,P)})()}else{h[x]=v;let P=h[g];if(h[g]=u,h[j]===j&&v===e2&&(h[x]=h[$],h[g]=h[R]),v===F&&u instanceof Error){let N=l.currentTask&&l.currentTask.data&&l.currentTask.data[b];N&&n(u,m2,{configurable:!0,enumerable:!1,writable:!0,value:N})}for(let N=0;N<P.length;)f(h,P[N++],P[N++],P[N++],P[N++]);if(P.length==0&&v==F){h[x]=E;let N=u;try{throw new Error("Uncaught (in promise): "+i(u)+(u&&u.stack?`
`+u.stack:""))}catch(B){N=B}z&&(N.throwOriginal=!0),N.rejection=u,N.promise=h,N.zone=l.current,N.task=l.currentTask,t.push(N),e.scheduleMicroTask()}}}return h}let Z=s("rejectionHandledHandler");function m(h){if(h[x]===E){try{let v=l[Z];v&&typeof v=="function"&&v.call(this,{rejection:h[g],promise:h})}catch{}h[x]=F;for(let v=0;v<t.length;v++)h===t[v].promise&&t.splice(v,1)}}function f(h,v,u,L,y){m(h);let P=h[x],N=P?typeof L=="function"?L:G:typeof y=="function"?y:U;v.scheduleMicroTask(X,()=>{try{let B=h[g],H=!!u&&j===u[j];H&&(u[R]=B,u[$]=P);let O=v.run(N,void 0,H&&N!==U&&N!==G?[]:[B]);Q(u,!0,O)}catch(B){Q(u,!1,B)}},u)}let o="function ZoneAwarePromise() { [native code] }",w=function(){},Y=a.AggregateError;class W{static toString(){return o}static resolve(v){return v instanceof W?v:Q(new this(null),e2,v)}static reject(v){return Q(new this(null),F,v)}static withResolvers(){let v={};return v.promise=new W((u,L)=>{v.resolve=u,v.reject=L}),v}static any(v){if(!v||typeof v[Symbol.iterator]!="function")return Promise.reject(new Y([],"All promises were rejected"));let u=[],L=0;try{for(let N of v)L++,u.push(W.resolve(N))}catch{return Promise.reject(new Y([],"All promises were rejected"))}if(L===0)return Promise.reject(new Y([],"All promises were rejected"));let y=!1,P=[];return new W((N,B)=>{for(let H=0;H<u.length;H++)u[H].then(O=>{y||(y=!0,N(O))},O=>{P.push(O),L--,L===0&&(y=!0,B(new Y(P,"All promises were rejected")))})})}static race(v){let u,L,y=new this((B,H)=>{u=B,L=H});function P(B){u(B)}function N(B){L(B)}for(let B of v)_(B)||(B=this.resolve(B)),B.then(P,N);return y}static all(v){return W.allWithCallback(v)}static allSettled(v){return(this&&this.prototype instanceof W?this:W).allWithCallback(v,{thenCallback:L=>({status:"fulfilled",value:L}),errorCallback:L=>({status:"rejected",reason:L})})}static allWithCallback(v,u){let L,y,P=new this((O,J)=>{L=O,y=J}),N=2,B=0,H=[];for(let O of v){_(O)||(O=this.resolve(O));let J=B;try{O.then(c2=>{H[J]=u?u.thenCallback(c2):c2,N--,N===0&&L(H)},c2=>{u?(H[J]=u.errorCallback(c2),N--,N===0&&L(H)):y(c2)})}catch(c2){y(c2)}N++,B++}return N-=2,N===0&&L(H),P}constructor(v){let u=this;if(!(u instanceof W))throw new Error("Must be an instanceof Promise.");u[x]=S,u[g]=[];try{let L=T();v&&v(L(I(u,e2)),L(I(u,F)))}catch(L){Q(u,!1,L)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return W}then(v,u){var L;let y=(L=this.constructor)==null?void 0:L[Symbol.species];(!y||typeof y!="function")&&(y=this.constructor||W);let P=new y(w),N=l.current;return this[x]==S?this[g].push(N,P,v,u):f(this,N,P,v,u),P}catch(v){return this.then(null,v)}finally(v){var u;let L=(u=this.constructor)==null?void 0:u[Symbol.species];(!L||typeof L!="function")&&(L=W);let y=new L(w);y[j]=j;let P=l.current;return this[x]==S?this[g].push(P,y,v,v):f(this,P,y,v,v),y}}W.resolve=W.resolve,W.reject=W.reject,W.race=W.race,W.all=W.all;let M2=a[p]=a.Promise;a.Promise=W;let w2=s("thenPatched");function A2(h){let v=h.prototype,u=r(v,"then");if(u&&(u.writable===!1||!u.configurable))return;let L=v.then;v[d]=L,h.prototype.then=function(y,P){return new W((B,H)=>{L.call(this,B,H)}).then(y,P)},h[w2]=!0}e.patchThen=A2;function v2(h){return function(v,u){let L=h.apply(v,u);if(L instanceof W)return L;let y=L.constructor;return y[w2]||A2(y),L}}if(M2){A2(M2);let h=M2.try;h&&typeof h=="function"&&(W.try=h),_2(a,"fetch",v=>v2(v))}return Promise[l.__symbol__("uncaughtPromiseErrors")]=t,W})}function d8(c){c.__load_patch("toString",a=>{let l=Function.prototype.toString,e=V("OriginalDelegate"),r=V("Promise"),n=V("Error"),i=function(){if(typeof this=="function"){let p=this[e];if(p)return typeof p=="function"?l.call(p):Object.prototype.toString.call(p);if(this===Promise){let d=a[r];if(d)return l.call(d)}if(this===Error){let d=a[n];if(d)return l.call(d)}}return l.call(this)};i[e]=l,Function.prototype.toString=i;let s=Object.prototype.toString,t="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?t:s.call(this)}})}function M8(c,a,l,e,r){let n=Zone.__symbol__(e);if(a[n])return;let i=a[n]=a[e];a[e]=function(s,t,z){return t&&t.prototype&&r.forEach(function(p){let d=`${l}.${e}::`+p,b=t.prototype;try{if(b.hasOwnProperty(p)){let C=c.ObjectGetOwnPropertyDescriptor(b,p);C&&C.value?(C.value=c.wrapWithCurrentZone(C.value,d),c._redefineProperty(t.prototype,p,C)):b[p]&&(b[p]=c.wrapWithCurrentZone(b[p],d))}else b[p]&&(b[p]=c.wrapWithCurrentZone(b[p],d))}catch{}}),i.call(a,s,t,z)},c.attachOriginToPatched(a[e],i)}function v8(c){c.__load_patch("util",(a,l,e)=>{let r=e4(a);e.patchOnProperties=O3,e.patchMethod=_2,e.bindArguments=o4,e.patchMacroTask=r8;let n=l.__symbol__("BLACK_LISTED_EVENTS"),i=l.__symbol__("UNPATCHED_EVENTS");a[i]&&(a[n]=a[i]),a[n]&&(l[n]=l[i]=a[n]),e.patchEventPrototype=s8,e.patchEventTarget=i8,e.ObjectDefineProperty=l4,e.ObjectGetOwnPropertyDescriptor=t1,e.ObjectCreate=K6,e.ArraySlice=Q6,e.patchClass=s1,e.wrapWithCurrentZone=s4,e.filterProperties=G3,e.attachOriginToPatched=E2,e._redefineProperty=Object.defineProperty,e.patchCallbacks=M8,e.getGlobalObjects=()=>({globalSources:I3,zoneSymbolEventNames:d2,eventNames:r,isBrowser:f4,isMix:H3,isNode:y1,TRUE_STR:T2,FALSE_STR:P2,ZONE_SYMBOL_PREFIX:o1,ADD_EVENT_LISTENER_STR:n4,REMOVE_EVENT_LISTENER_STR:i4})})}function h8(c){p8(c),d8(c),v8(c)}var V3=Y6();h8(V3);z8(V3);function M4(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function L8(c){if(Array.isArray(c))return c}function g8(c){if(Array.isArray(c))return M4(c)}function C8(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function $3(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,N0(e.key),e)}}function x8(c,a,l){return a&&$3(c.prototype,a),l&&$3(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function P1(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=P4(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(t){throw t},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n,i=!0,s=!1;return{s:function(){l=l.call(c)},n:function(){var t=l.next();return i=t.done,t},e:function(t){s=!0,n=t},f:function(){try{i||l.return==null||l.return()}finally{if(s)throw n}}}}function A(c,a,l){return(a=N0(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function b8(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function S8(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,n,i,s=[],t=!0,z=!1;try{if(n=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;t=!1}else for(;!(t=(e=n.call(l)).done)&&(s.push(e.value),s.length!==a);t=!0);}catch(p){z=!0,r=p}finally{try{if(!t&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(z)throw r}}return s}}function N8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X3(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function M(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?X3(Object(l),!0).forEach(function(e){A(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):X3(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function B1(c,a){return L8(c)||S8(c,a)||P4(c,a)||N8()}function b2(c){return g8(c)||b8(c)||P4(c)||y8()}function k8(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function N0(c){var a=k8(c,"string");return typeof a=="symbol"?a:a+""}function D1(c){"@babel/helpers - typeof";return D1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},D1(c)}function P4(c,a){if(c){if(typeof c=="string")return M4(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?M4(c,a):void 0}}var Z3=function(){},_4={},y0={},k0=null,w0={mark:Z3,measure:Z3};try{typeof window<"u"&&(_4=window),typeof document<"u"&&(y0=document),typeof MutationObserver<"u"&&(k0=MutationObserver),typeof performance<"u"&&(w0=performance)}catch{}var w8=_4.navigator||{},Y3=w8.userAgent,K3=Y3===void 0?"":Y3,I2=_4,l2=y0,Q3=k0,k1=w0,hc=!!I2.document,R2=!!l2.documentElement&&!!l2.head&&typeof l2.addEventListener=="function"&&typeof l2.createElement=="function",A0=~K3.indexOf("MSIE")||~K3.indexOf("Trident/"),w1,A8=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,T8=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,T0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},P8={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],s2="classic",p1="duotone",_0="sharp",E0="sharp-duotone",D0="chisel",F0="etch",R0="graphite",B0="jelly",H0="jelly-duo",O0="jelly-fill",I0="mosaic",U0="notdog",W0="notdog-duo",q0="pixel",j0="slab",G0="slab-duo",V0="slab-press",$0="slab-press-duo",X0="thumbprint",Z0="utility",Y0="utility-duo",K0="utility-fill",Q0="vellum",J0="whiteboard",_8="Classic",E8="Duotone",D8="Sharp",F8="Sharp Duotone",R8="Chisel",B8="Etch",H8="Graphite",O8="Jelly",I8="Jelly Duo",U8="Jelly Fill",W8="Mosaic",q8="Notdog",j8="Notdog Duo",G8="Pixel",V8="Slab",$8="Slab Duo",X8="Slab Press",Z8="Slab Press Duo",Y8="Thumbprint",K8="Utility",Q8="Utility Duo",J8="Utility Fill",c5="Vellum",a5="Whiteboard",c6=[s2,p1,_0,E0,D0,F0,R0,B0,H0,O0,I0,U0,W0,q0,j0,G0,V0,$0,X0,Z0,Y0,K0,Q0,J0],Lc=(w1={},A(A(A(A(A(A(A(A(A(A(w1,s2,_8),p1,E8),_0,D8),E0,F8),D0,R8),F0,B8),R0,H8),B0,O8),H0,I8),O0,U8),A(A(A(A(A(A(A(A(A(A(w1,I0,W8),U0,q8),W0,j8),q0,G8),j0,V8),G0,$8),V0,X8),$0,Z8),X0,Y8),Z0,K8),A(A(A(A(w1,Y0,Q8),K0,J8),Q0,c5),J0,a5)),e5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},l5={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},r5=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),n5={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},a6=["fak","fa-kit","fakd","fa-kit-duotone"],J3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},i5=["kit"],s5="kit",t5="kit-duotone",o5="Kit",f5="Kit Duotone",gc=A(A({},s5,o5),t5,f5),m5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},u5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},z5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},A1,T1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},p5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],d5="classic",M5="duotone",v5="sharp",h5="sharp-duotone",L5="chisel",g5="etch",C5="graphite",x5="jelly",b5="jelly-duo",S5="jelly-fill",N5="mosaic",y5="notdog",k5="notdog-duo",w5="pixel",A5="slab",T5="slab-duo",P5="slab-press",_5="slab-press-duo",E5="thumbprint",D5="utility",F5="utility-duo",R5="utility-fill",B5="vellum",H5="whiteboard",O5="Classic",I5="Duotone",U5="Sharp",W5="Sharp Duotone",q5="Chisel",j5="Etch",G5="Graphite",V5="Jelly",$5="Jelly Duo",X5="Jelly Fill",Z5="Mosaic",Y5="Notdog",K5="Notdog Duo",Q5="Pixel",J5="Slab",c7="Slab Duo",a7="Slab Press",e7="Slab Press Duo",l7="Thumbprint",r7="Utility",n7="Utility Duo",i7="Utility Fill",s7="Vellum",t7="Whiteboard",Cc=(A1={},A(A(A(A(A(A(A(A(A(A(A1,d5,O5),M5,I5),v5,U5),h5,W5),L5,q5),g5,j5),C5,G5),x5,V5),b5,$5),S5,X5),A(A(A(A(A(A(A(A(A(A(A1,N5,Z5),y5,Y5),k5,K5),w5,Q5),A5,J5),T5,c7),P5,a7),_5,e7),E5,l7),D5,r7),A(A(A(A(A1,F5,n7),R5,i7),B5,s7),H5,t7)),o7="kit",f7="kit-duotone",m7="Kit",u7="Kit Duotone",xc=A(A({},o7,m7),f7,u7),z7={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},p7={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},v4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},d7=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],e6=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(p5,d7),M7=["solid","regular","light","thin","duotone","brands","semibold"],l6=[1,2,3,4,5,6,7,8,9,10],v7=l6.concat([11,12,13,14,15,16,17,18,19,20]),h7=["aw","fw","pull-left","pull-right"],L7=[].concat(b2(Object.keys(p7)),M7,h7,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",T1.GROUP,T1.SWAP_OPACITY,T1.PRIMARY,T1.SECONDARY]).concat(l6.map(function(c){return"".concat(c,"x")})).concat(v7.map(function(c){return"w-".concat(c)})),g7={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},D2="___FONT_AWESOME___",h4=16,r6="fa",n6="svg-inline--fa",$2="data-fa-i2svg",L4="data-fa-pseudo-element",C7="data-fa-pseudo-element-pending",E4="data-prefix",D4="data-icon",a0="fontawesome-i2svg",x7="async",b7=["HTML","HEAD","STYLE","SCRIPT"],i6=["::before","::after",":before",":after"],s6=(function(){try{return!0}catch{return!1}})();function d1(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[s2]}})}var t6=M({},T0);t6[s2]=M(M(M(M({},{"fa-duotone":"duotone"}),T0[s2]),J3.kit),J3["kit-duotone"]);var S7=d1(t6),g4=M({},n5);g4[s2]=M(M(M(M({},{duotone:"fad"}),g4[s2]),c0.kit),c0["kit-duotone"]);var e0=d1(g4),C4=M({},v4);C4[s2]=M(M({},C4[s2]),z5.kit);var F4=d1(C4),x4=M({},z7);x4[s2]=M(M({},x4[s2]),m5.kit);var bc=d1(x4),N7=A8,o6="fa-layers-text",y7=T8,k7=M({},e5),Sc=d1(k7),w7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],m4=P8,A7=[].concat(b2(i5),b2(L7)),m1=I2.FontAwesomeConfig||{};function T7(c){var a=l2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function P7(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}l2&&typeof l2.querySelector=="function"&&(l0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],l0.forEach(function(c){var a=B1(c,2),l=a[0],e=a[1],r=P7(T7(l));r!=null&&(m1[e]=r)}));var l0,f6={styleDefault:"solid",familyDefault:s2,cssPrefix:r6,replacementClass:n6,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m1.familyPrefix&&(m1.cssPrefix=m1.familyPrefix);var a1=M(M({},f6),m1);a1.autoReplaceSvg||(a1.observeMutations=!1);var k={};Object.keys(f6).forEach(function(c){Object.defineProperty(k,c,{enumerable:!0,set:function(l){a1[c]=l,u1.forEach(function(e){return e(k)})},get:function(){return a1[c]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(a){a1.cssPrefix=a,u1.forEach(function(l){return l(k)})},get:function(){return a1.cssPrefix}});I2.FontAwesomeConfig=k;var u1=[];function _7(c){return u1.push(c),function(){u1.splice(u1.indexOf(c),1)}}var O2=h4,k2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E7(c){if(!(!c||!R2)){var a=l2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=l2.head.childNodes,e=null,r=l.length-1;r>-1;r--){var n=l[r],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=n)}return l2.head.insertBefore(a,e),c}}var D7="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function r0(){for(var c=12,a="";c-- >0;)a+=D7[Math.random()*62|0];return a}function e1(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function R4(c){return c.classList?e1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function m6(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F7(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(m6(c[l]),'" ')},"").trim()}function H1(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function B4(c){return c.size!==k2.size||c.x!==k2.x||c.y!==k2.y||c.rotate!==k2.rotate||c.flipX||c.flipY}function R7(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(n," ").concat(i," ").concat(s)},z={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:t,path:z}}function B7(c){var a=c.transform,l=c.width,e=l===void 0?h4:l,r=c.height,n=r===void 0?h4:r,i=c.startCentered,s=i===void 0?!1:i,t="";return s&&A0?t+="translate(".concat(a.x/O2-e/2,"em, ").concat(a.y/O2-n/2,"em) "):s?t+="translate(calc(-50% + ".concat(a.x/O2,"em), calc(-50% + ").concat(a.y/O2,"em)) "):t+="translate(".concat(a.x/O2,"em, ").concat(a.y/O2,"em) "),t+="scale(".concat(a.size/O2*(a.flipX?-1:1),", ").concat(a.size/O2*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var H7=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function u6(){var c=r6,a=n6,l=k.cssPrefix,e=k.replacementClass,r=H7;if(l!==c||e!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(n,".".concat(l,"-")).replace(i,"--".concat(l,"-")).replace(s,".".concat(e))}return r}var n0=!1;function u4(){k.autoAddCss&&!n0&&(E7(u6()),n0=!0)}var O7={mixout:function(){return{dom:{css:u6,insertCss:u4}}},hooks:function(){return{beforeDOMElementCreation:function(){u4()},beforeI2svg:function(){u4()}}}},F2=I2||{};F2[D2]||(F2[D2]={});F2[D2].styles||(F2[D2].styles={});F2[D2].hooks||(F2[D2].hooks={});F2[D2].shims||(F2[D2].shims=[]);var x2=F2[D2],z6=[],p6=function(){l2.removeEventListener("DOMContentLoaded",p6),F1=1,z6.map(function(a){return a()})},F1=!1;R2&&(F1=(l2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(l2.readyState),F1||l2.addEventListener("DOMContentLoaded",p6));function I7(c){R2&&(F1?setTimeout(c,0):z6.push(c))}function M1(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,n=r===void 0?[]:r;return typeof c=="string"?m6(c):"<".concat(a," ").concat(F7(e),">").concat(n.map(M1).join(""),"</").concat(a,">")}function i0(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var U7=function(a,l){return function(e,r,n,i){return a.call(l,e,r,n,i)}},z4=function(a,l,e,r){var n=Object.keys(a),i=n.length,s=r!==void 0?U7(l,r):l,t,z,p;for(e===void 0?(t=1,p=a[n[0]]):(t=0,p=e);t<i;t++)z=n[t],p=s(p,a[z],z,a);return p};function d6(c){return b2(c).length!==1?null:c.codePointAt(0).toString(16)}function s0(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function b4(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,n=s0(a);typeof x2.hooks.addPack=="function"&&!r?x2.hooks.addPack(c,s0(a)):x2.styles[c]=M(M({},x2.styles[c]||{}),n),c==="fas"&&b4("fa",a)}var z1=x2.styles,W7=x2.shims,M6=Object.keys(F4),q7=M6.reduce(function(c,a){return c[a]=Object.keys(F4[a]),c},{}),H4=null,v6={},h6={},L6={},g6={},C6={};function j7(c){return~A7.indexOf(c)}function G7(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!j7(r)?r:null}var x6=function(){var a=function(n){return z4(z1,function(i,s,t){return i[t]=z4(s,n,{}),i},{})};v6=a(function(r,n,i){if(n[3]&&(r[n[3]]=i),n[2]){var s=n[2].filter(function(t){return typeof t=="number"});s.forEach(function(t){r[t.toString(16)]=i})}return r}),h6=a(function(r,n,i){if(r[i]=i,n[2]){var s=n[2].filter(function(t){return typeof t=="string"});s.forEach(function(t){r[t]=i})}return r}),C6=a(function(r,n,i){var s=n[2];return r[i]=i,s.forEach(function(t){r[t]=i}),r});var l="far"in z1||k.autoFetchSvg,e=z4(W7,function(r,n){var i=n[0],s=n[1],t=n[2];return s==="far"&&!l&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:t}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:t}),r},{names:{},unicodes:{}});L6=e.names,g6=e.unicodes,H4=O1(k.styleDefault,{family:k.familyDefault})};_7(function(c){H4=O1(c.styleDefault,{family:k.familyDefault})});x6();function O4(c,a){return(v6[c]||{})[a]}function V7(c,a){return(h6[c]||{})[a]}function V2(c,a){return(C6[c]||{})[a]}function b6(c){return L6[c]||{prefix:null,iconName:null}}function $7(c){var a=g6[c],l=O4("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function U2(){return H4}var S6=function(){return{prefix:null,iconName:null,rest:[]}};function X7(c){var a=s2,l=M6.reduce(function(e,r){return e[r]="".concat(k.cssPrefix,"-").concat(r),e},{});return c6.forEach(function(e){(c.includes(l[e])||c.some(function(r){return q7[e].includes(r)}))&&(a=e)}),a}function O1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?s2:l,r=S7[e][c];if(e===p1&&!c)return"fad";var n=e0[e][c]||e0[e][r],i=c in x2.styles?c:null,s=n||i||null;return s}function Z7(c){var a=[],l=null;return c.forEach(function(e){var r=G7(k.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function t0(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var o0=e6.concat(a6);function I1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,n=t0(c.filter(function(C){return o0.includes(C)})),i=t0(c.filter(function(C){return!o0.includes(C)})),s=n.filter(function(C){return r=C,!P0.includes(C)}),t=B1(s,1),z=t[0],p=z===void 0?null:z,d=X7(n),b=M(M({},Z7(i)),{},{prefix:O1(p,{family:d})});return M(M(M({},b),J7({values:c,family:d,styles:z1,config:k,canonical:b,givenPrefix:r})),Y7(e,r,b))}function Y7(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var n=a==="fa"?b6(r):{},i=V2(e,r);return r=n.iconName||i||r,e=n.prefix||e,e==="far"&&!z1.far&&z1.fas&&!k.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var K7=c6.filter(function(c){return c!==s2||c!==p1}),Q7=Object.keys(v4).filter(function(c){return c!==s2}).map(function(c){return Object.keys(v4[c])}).flat();function J7(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,n=r===void 0?"":r,i=c.styles,s=i===void 0?{}:i,t=c.config,z=t===void 0?{}:t,p=l===p1,d=a.includes("fa-duotone")||a.includes("fad"),b=z.familyDefault==="duotone",C=e.prefix==="fad"||e.prefix==="fa-duotone";if(!p&&(d||b||C)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&K7.includes(l)){var q=Object.keys(s).find(function(G){return Q7.includes(G)});if(q||z.autoFetchSvg){var _=r5.get(l).defaultShortPrefixId;e.prefix=_,e.iconName=V2(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||n==="fa")&&(e.prefix=U2()||"fas"),e}var c9=(function(){function c(){C8(this,c),this.definitions={}}return x8(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){l.definitions[s]=M(M({},l.definitions[s]||{}),i[s]),b4(s,i[s]);var t=F4[s2][s];t&&b4(t,i[s]),x6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(n){var i=r[n],s=i.prefix,t=i.iconName,z=i.icon,p=z[2];l[s]||(l[s]={}),p.length>0&&p.forEach(function(d){typeof d=="string"&&(l[s][d]=z)}),l[s][t]=z}),l}}])})(),f0=[],J2={},c1={},a9=Object.keys(c1);function e9(c,a){var l=a.mixoutsTo;return f0=c,J2={},Object.keys(c1).forEach(function(e){a9.indexOf(e)===-1&&delete c1[e]}),f0.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(l[i]=r[i]),D1(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){l[i]||(l[i]={}),l[i][s]=r[i][s]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(i){J2[i]||(J2[i]=[]),J2[i].push(n[i])})}e.provides&&e.provides(c1)}),l}function S4(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var n=J2[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function X2(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=J2[c]||[];r.forEach(function(n){n.apply(null,l)})}function W2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return c1[c]?c1[c].apply(null,a):void 0}function N4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||U2();if(a)return a=V2(l,a)||a,i0(N6.definitions,l,a)||i0(x2.styles,l,a)}var N6=new c9,l9=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,X2("noAuto")},r9={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R2?(X2("beforeI2svg",a),W2("pseudoElements2svg",a),W2("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,I7(function(){i9({autoReplaceSvgRoot:l}),X2("watch",a)})}},n9={icon:function(a){if(a===null)return null;if(D1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:V2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=O1(a[0]);return{prefix:e,iconName:V2(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(k.cssPrefix,"-"))>-1||a.match(N7))){var r=I1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||U2(),iconName:V2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var n=U2();return{prefix:n,iconName:V2(n,a)||a}}}},z2={noAuto:l9,config:k,dom:r9,parse:n9,library:N6,findIconDefinition:N4,toHtml:M1},i9=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?l2:l;(Object.keys(x2.styles).length>0||k.autoFetchSvg)&&R2&&k.autoReplaceSvg&&z2.dom.i2svg({node:e})};function U1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return M1(e)})}}),Object.defineProperty(c,"node",{get:function(){if(R2){var e=l2.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function s9(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,n=c.styles,i=c.transform;if(B4(i)&&l.found&&!e.found){var s=l.width,t=l.height,z={x:s/t/2,y:.5};r.style=H1(M(M({},n),{},{"transform-origin":"".concat(z.x+i.x/16,"em ").concat(z.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function t9(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(k.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},r),{},{id:i}),children:e}]}]}function o9(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function I4(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,n=c.iconName,i=c.transform,s=c.symbol,t=c.maskId,z=c.extra,p=c.watchable,d=p===void 0?!1:p,b=e.found?e:l,C=b.width,q=b.height,_=[k.replacementClass,n?"".concat(k.cssPrefix,"-").concat(n):""].filter(function(R){return z.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(z.classes).join(" "),G={children:[],attributes:M(M({},z.attributes),{},{"data-prefix":r,"data-icon":n,class:_,role:z.attributes.role||"img",viewBox:"0 0 ".concat(C," ").concat(q)})};!o9(z.attributes)&&!z.attributes["aria-hidden"]&&(G.attributes["aria-hidden"]="true"),d&&(G.attributes[$2]="");var U=M(M({},G),{},{prefix:r,iconName:n,main:l,mask:e,maskId:t,transform:i,symbol:s,styles:M({},z.styles)}),x=e.found&&l.found?W2("generateAbstractMask",U)||{children:[],attributes:{}}:W2("generateAbstractIcon",U)||{children:[],attributes:{}},g=x.children,j=x.attributes;return U.children=g,U.attributes=j,s?t9(U):s9(U)}function m0(c){var a=c.content,l=c.width,e=c.height,r=c.transform,n=c.extra,i=c.watchable,s=i===void 0?!1:i,t=M(M({},n.attributes),{},{class:n.classes.join(" ")});s&&(t[$2]="");var z=M({},n.styles);B4(r)&&(z.transform=B7({transform:r,startCentered:!0,width:l,height:e}),z["-webkit-transform"]=z.transform);var p=H1(z);p.length>0&&(t.style=p);var d=[];return d.push({tag:"span",attributes:t,children:[a]}),d}function f9(c){var a=c.content,l=c.extra,e=M(M({},l.attributes),{},{class:l.classes.join(" ")}),r=H1(l.styles);r.length>0&&(e.style=r);var n=[];return n.push({tag:"span",attributes:e,children:[a]}),n}var p4=x2.styles;function y4(c){var a=c[0],l=c[1],e=c.slice(4),r=B1(e,1),n=r[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(m4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(m4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(m4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:l,icon:i}}var m9={found:!1,width:512,height:512};function u9(c,a){!s6&&!k.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function k4(c,a){var l=a;return a==="fa"&&k.styleDefault!==null&&(a=U2()),new Promise(function(e,r){if(l==="fa"){var n=b6(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&p4[a]&&p4[a][c]){var i=p4[a][c];return e(y4(i))}u9(c,a),e(M(M({},m9),{},{icon:k.showMissingIcons&&c?W2("missingIconAbstract")||{}:{}}))})}var u0=function(){},w4=k.measurePerformance&&k1&&k1.mark&&k1.measure?k1:{mark:u0,measure:u0},f1='FA "7.3.1"',z9=function(a){return w4.mark("".concat(f1," ").concat(a," begins")),function(){return y6(a)}},y6=function(a){w4.mark("".concat(f1," ").concat(a," ends")),w4.measure("".concat(f1," ").concat(a),"".concat(f1," ").concat(a," begins"),"".concat(f1," ").concat(a," ends"))},U4={begin:z9,end:y6},_1=function(){};function z0(c){var a=c.getAttribute?c.getAttribute($2):null;return typeof a=="string"}function p9(c){var a=c.getAttribute?c.getAttribute(E4):null,l=c.getAttribute?c.getAttribute(D4):null;return a&&l}function d9(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(k.replacementClass)}function M9(){if(k.autoReplaceSvg===!0)return E1.replace;var c=E1[k.autoReplaceSvg];return c||E1.replace}function v9(c){return l2.createElementNS("http://www.w3.org/2000/svg",c)}function h9(c){return l2.createElement(c)}function k6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?v9:h9:l;if(typeof c=="string")return l2.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){r.appendChild(k6(i,{ceFn:e}))}),r}function L9(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var E1={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(k6(r),l)}),l.getAttribute($2)===null&&k.keepOriginalSource){var e=l2.createComment(L9(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~R4(l).indexOf(k.replacementClass))return E1.replace(a);var r=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(s,t){return t===k.replacementClass||t.match(r)?s.toSvg.push(t):s.toNode.push(t),s},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}var i=e.map(function(s){return M1(s)}).join(`
`);l.setAttribute($2,""),l.innerHTML=i}};function p0(c){c()}function w6(c,a){var l=typeof a=="function"?a:_1;if(c.length===0)l();else{var e=p0;k.mutateApproach===x7&&(e=I2.requestAnimationFrame||p0),e(function(){var r=M9(),n=U4.begin("mutate");c.map(r),n(),l()})}}var W4=!1;function A6(){W4=!0}function A4(){W4=!1}var R1=null;function d0(c){if(Q3&&k.observeMutations){var a=c.treeCallback,l=a===void 0?_1:a,e=c.nodeCallback,r=e===void 0?_1:e,n=c.pseudoElementsCallback,i=n===void 0?_1:n,s=c.observeMutationsRoot,t=s===void 0?l2:s;R1=new Q3(function(z){if(!W4){var p=U2();e1(z).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!z0(d.addedNodes[0])&&(k.searchPseudoElements&&i(d.target),l(d.target)),d.type==="attributes"&&d.target.parentNode&&k.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&z0(d.target)&&~w7.indexOf(d.attributeName))if(d.attributeName==="class"&&p9(d.target)){var b=I1(R4(d.target)),C=b.prefix,q=b.iconName;d.target.setAttribute(E4,C||p),q&&d.target.setAttribute(D4,q)}else d9(d.target)&&r(d.target)})}}),R2&&R1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function g9(){R1&&R1.disconnect()}function C9(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var n=r.split(":"),i=n[0],s=n.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),l}function x9(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=I1(R4(c));return r.prefix||(r.prefix=U2()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=V7(r.prefix,c.innerText)||O4(r.prefix,d6(c.innerText))),!r.iconName&&k.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function b9(c){var a=e1(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function S9(){return{iconName:null,prefix:null,transform:k2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function M0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=x9(c),e=l.iconName,r=l.prefix,n=l.rest,i=b9(c),s=S4("parseNodeAttributes",{},c),t=a.styleParser?C9(c):[];return M({iconName:e,prefix:r,transform:k2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:t,attributes:i}},s)}var N9=x2.styles;function T6(c){var a=k.autoReplaceSvg==="nest"?M0(c,{styleParser:!1}):M0(c);return~a.extra.classes.indexOf(o6)?W2("generateLayersText",c,a):W2("generateSvgReplacementMutation",c,a)}function y9(){return[].concat(b2(a6),b2(e6))}function v0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R2)return Promise.resolve();var l=l2.documentElement.classList,e=function(d){return l.add("".concat(a0,"-").concat(d))},r=function(d){return l.remove("".concat(a0,"-").concat(d))},n=k.autoFetchSvg?y9():P0.concat(Object.keys(N9));n.includes("fa")||n.push("fa");var i=[".".concat(o6,":not([").concat($2,"])")].concat(n.map(function(p){return".".concat(p,":not([").concat($2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=e1(c.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var t=U4.begin("onTree"),z=s.reduce(function(p,d){try{var b=T6(d);b&&p.push(b)}catch(C){s6||C.name==="MissingIcon"&&console.error(C)}return p},[]);return new Promise(function(p,d){Promise.all(z).then(function(b){w6(b,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),t(),p()})}).catch(function(b){t(),d(b)})})}function k9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;T6(c).then(function(l){l&&w6([l],a)})}function w9(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:N4(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:N4(r||{})),c(e,M(M({},l),{},{mask:r}))}}var A9=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?k2:e,n=l.symbol,i=n===void 0?!1:n,s=l.mask,t=s===void 0?null:s,z=l.maskId,p=z===void 0?null:z,d=l.classes,b=d===void 0?[]:d,C=l.attributes,q=C===void 0?{}:C,_=l.styles,G=_===void 0?{}:_;if(a){var U=a.prefix,x=a.iconName,g=a.icon;return U1(M({type:"icon"},a),function(){return X2("beforeDOMElementCreation",{iconDefinition:a,params:l}),I4({icons:{main:y4(g),mask:t?y4(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:x,transform:M(M({},k2),r),symbol:i,maskId:p,extra:{attributes:q,styles:G,classes:b}})})}},T9={mixout:function(){return{icon:w9(A9)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=v0,l.nodeCallback=k9,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?l2:e,n=l.callback,i=n===void 0?function(){}:n;return v0(r,i)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,n=e.prefix,i=e.transform,s=e.symbol,t=e.mask,z=e.maskId,p=e.extra;return new Promise(function(d,b){Promise.all([k4(r,n),t.iconName?k4(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var q=B1(C,2),_=q[0],G=q[1];d([l,I4({icons:{main:_,mask:G},prefix:n,iconName:r,transform:i,symbol:s,maskId:z,extra:p,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,n=l.main,i=l.transform,s=l.styles,t=H1(s);t.length>0&&(r.style=t);var z;return B4(i)&&(z=W2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),e.push(z||n.icon),{children:e,attributes:r}}}},P9={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,n=r===void 0?[]:r;return U1({type:"layer"},function(){X2("beforeDOMElementCreation",{assembler:l,params:e});var i=[];return l(function(s){Array.isArray(s)?s.map(function(t){i=i.concat(t.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(b2(n)).join(" ")},children:i}]})}}}},_9={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,n=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,t=e.attributes,z=t===void 0?{}:t,p=e.styles,d=p===void 0?{}:p;return U1({type:"counter",content:l},function(){return X2("beforeDOMElementCreation",{content:l,params:e}),f9({content:l.toString(),title:n,extra:{attributes:z,styles:d,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(b2(s))}})})}}}},E9={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?k2:r,i=e.classes,s=i===void 0?[]:i,t=e.attributes,z=t===void 0?{}:t,p=e.styles,d=p===void 0?{}:p;return U1({type:"text",content:l},function(){return X2("beforeDOMElementCreation",{content:l,params:e}),m0({content:l,transform:M(M({},k2),n),extra:{attributes:z,styles:d,classes:["".concat(k.cssPrefix,"-layers-text")].concat(b2(s))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,n=e.extra,i=null,s=null;if(A0){var t=parseInt(getComputedStyle(l).fontSize,10),z=l.getBoundingClientRect();i=z.width/t,s=z.height/t}return Promise.resolve([l,m0({content:l.innerHTML,width:i,height:s,transform:r,extra:n,watchable:!0})])}}},P6=new RegExp('"',"ug"),h0=[1105920,1112319],L0=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),l5),g7),u5),T4=Object.keys(L0).reduce(function(c,a){return c[a.toLowerCase()]=L0[a],c},{}),D9=Object.keys(T4).reduce(function(c,a){var l=T4[a];return c[a]=l[900]||b2(Object.entries(l))[0][1],c},{});function F9(c){var a=c.replace(P6,"");return d6(b2(a)[0]||"")}function R9(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(P6,""),r=e.codePointAt(0),n=r>=h0[0]&&r<=h0[1],i=e.length===2?e[0]===e[1]:!1;return n||i||a}function B9(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(T4[l]||{})[r]||D9[l]}function g0(c,a){var l="".concat(C7).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var n=e1(c.children),i=n.filter(function($){return $.getAttribute(L4)===a})[0],s=I2.getComputedStyle(c,a),t=s.getPropertyValue("font-family"),z=t.match(y7),p=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(i&&!z)return c.removeChild(i),e();if(z&&d!=="none"&&d!==""){var b=s.getPropertyValue("content"),C=B9(t,p),q=F9(b),_=z[0].startsWith("FontAwesome"),G=R9(s),U=O4(C,q),x=U;if(_){var g=$7(q);g.iconName&&g.prefix&&(U=g.iconName,C=g.prefix)}if(U&&!G&&(!i||i.getAttribute(E4)!==C||i.getAttribute(D4)!==x)){c.setAttribute(l,x),i&&c.removeChild(i);var j=S9(),R=j.extra;R.attributes[L4]=a,k4(U,C).then(function($){var X=I4(M(M({},j),{},{icons:{main:$,mask:S6()},prefix:C,iconName:x,extra:R,watchable:!0})),S=l2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(S,c.firstChild):c.appendChild(S),S.outerHTML=X.map(function(e2){return M1(e2)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function H9(c){return Promise.all([g0(c,"::before"),g0(c,"::after")])}function O9(c){return c.parentNode!==document.head&&!~b7.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(L4)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var I9=function(a){return!!a&&i6.some(function(l){return a.includes(l)})},U9=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(t){return t.trim()});e=e.flatMap(function(t){return t.includes("(")?t:t.split(",").map(function(z){return z.trim()})});var r=P1(e),n;try{for(r.s();!(n=r.n()).done;){var i=n.value;if(I9(i)){var s=i6.reduce(function(t,z){return t.replace(z,"")},i);s!==""&&s!=="*"&&l.add(s)}}}catch(t){r.e(t)}finally{r.f()}return l};function C0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R2){var l;if(a)l=c;else if(k.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=P1(document.styleSheets),n;try{for(r.s();!(n=r.n()).done;){var i=n.value;try{var s=P1(i.cssRules),t;try{for(s.s();!(t=s.n()).done;){var z=t.value,p=U9(z.selectorText),d=P1(p),b;try{for(d.s();!(b=d.n()).done;){var C=b.value;e.add(C)}}catch(_){d.e(_)}finally{d.f()}}}catch(_){s.e(_)}finally{s.f()}}catch(_){k.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(_.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(_){r.e(_)}finally{r.f()}if(!e.size)return;var q=Array.from(e).join(", ");try{l=c.querySelectorAll(q)}catch{}}return new Promise(function(_,G){var U=e1(l).filter(O9).map(H9),x=U4.begin("searchPseudoElements");A6(),Promise.all(U).then(function(){x(),A4(),_()}).catch(function(){x(),A4(),G()})})}}var W9={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=C0,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?l2:e;k.searchPseudoElements&&C0(r)}}},x0=!1,q9={mixout:function(){return{dom:{unwatch:function(){A6(),x0=!0}}}},hooks:function(){return{bootstrap:function(){d0(S4("mutationObserverCallbacks",{}))},noAuto:function(){g9()},watch:function(l){var e=l.observeMutationsRoot;x0?A4():d0(S4("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},b0=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var n=r.toLowerCase().split("-"),i=n[0],s=n.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},l)},j9={mixout:function(){return{parse:{transform:function(l){return b0(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=b0(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,n=l.containerWidth,i=l.iconWidth,s={transform:"translate(".concat(n/2," 256)")},t="translate(".concat(r.x*32,", ").concat(r.y*32,") "),z="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),p="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(t," ").concat(z," ").concat(p)},b={transform:"translate(".concat(i/2*-1," -256)")},C={outer:s,inner:d,path:b};return{tag:"g",attributes:M({},C.outer),children:[{tag:"g",attributes:M({},C.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:M(M({},e.icon.attributes),C.path)}]}]}}}},d4={x:0,y:0,width:"100%",height:"100%"};function S0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function G9(c){return c.tag==="g"?c.children:[c]}var V9={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),n=r?I1(r.split(" ").map(function(i){return i.trim()})):S6();return n.prefix||(n.prefix=U2()),l.mask=n,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,n=l.main,i=l.mask,s=l.maskId,t=l.transform,z=n.width,p=n.icon,d=i.width,b=i.icon,C=R7({transform:t,containerWidth:d,iconWidth:z}),q={tag:"rect",attributes:M(M({},d4),{},{fill:"white"})},_=p.children?{children:p.children.map(S0)}:{},G={tag:"g",attributes:M({},C.inner),children:[S0(M({tag:p.tag,attributes:M(M({},p.attributes),C.path)},_))]},U={tag:"g",attributes:M({},C.outer),children:[G]},x="mask-".concat(s||r0()),g="clip-".concat(s||r0()),j={tag:"mask",attributes:M(M({},d4),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[q,U]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:G9(b)},j]};return e.push(R,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(x,")")},d4)}),{children:e,attributes:r}}}},$9={provides:function(a){var l=!1;I2.matchMedia&&(l=I2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:M(M({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=M(M({},n),{},{attributeName:"opacity"}),s={tag:"circle",attributes:M(M({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||s.children.push({tag:"animate",attributes:M(M({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:M(M({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:M(M({},i),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:M(M({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},X9={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return l.symbol=n,l}}}},Z9=[O7,T9,P9,_9,E9,W9,q9,j9,V9,$9,X9];e9(Z9,{mixoutsTo:z2});var Nc=z2.noAuto,_6=z2.config,yc=z2.library,E6=z2.dom,D6=z2.parse,kc=z2.findIconDefinition,wc=z2.toHtml,F6=z2.icon,Ac=z2.layer,Y9=z2.text,K9=z2.counter;var Q9=["*"],J9=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){_6.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=Y1({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),cc=(()=>{class c{definitions={};addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...l){for(let e of l){let r=Object.keys(e).map(n=>e[n]);this.addIcons(...r)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=Y1({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),ac=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},ec=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},B6=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),lc=c=>{let a=B6(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:a,"fa-rotate-by":c.rotate!=null&&!a,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(e=>l[e]?e:null).filter(e=>e!=null)},q4=new WeakSet,R6="fa-auto-css";function rc(c,a){if(!a.autoAddCss||q4.has(c))return;if(c.getElementById(R6)!=null){a.autoAddCss=!1,q4.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",R6),l.innerHTML=E6.css();let e=c.head.childNodes,r=null;for(let n=e.length-1;n>-1;n--){let i=e[n],s=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}c.head.insertBefore(l,r),a.autoAddCss=!1,q4.add(c)}var nc=c=>c.prefix!==void 0&&c.iconName!==void 0,ic=(c,a)=>nc(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},sc=(()=>{class c{stackItemSize=L1("1x");size=L1();_effect=a3(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=r3({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),tc=(()=>{class c{size=L1();classes=K1(()=>{let l=this.size(),e=l?{[`fa-${l}`]:!0}:{};return K4(Y4({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=g2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&f3(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:Q9,decls:1,vars:0,template:function(e,r){e&1&&(t3(),o3(0))},encapsulation:2,changeDetection:0})}return c})(),H6=(()=>{class c{icon=f2();title=f2();animation=f2();mask=f2();flip=f2();size=f2();pull=f2();border=f2();inverse=f2();symbol=f2();rotate=f2();fixedWidth=f2();transform=f2();a11yRole=f2();renderedIconHTML=K1(()=>{let l=this.icon()??this.config.fallbackIcon;if(!l)return ec(),"";let e=this.findIconDefinition(l);if(!e)return"";let r=this.buildParams();rc(this.document,this.config);let n=F6(e,r);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=j2(Q4);sanitizer=j2(g3);config=j2(J9);iconLibrary=j2(cc);stackItem=j2(sc,{optional:!0});stack=j2(tc,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(l){let e=ic(l,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(ac(e),null)}buildParams(){let l=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),n=typeof r=="string"?D6.transform(r):r,i=this.mask(),s=i!=null?this.findIconDefinition(i):null,t={},z=this.a11yRole();z!=null&&(t.role=z);let p={};return e.rotate!=null&&!B6(e.rotate)&&(p["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:n,classes:lc(e),mask:s??void 0,symbol:this.symbol(),attributes:t,styles:p}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=g2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(s3("innerHTML",r.renderedIconHTML(),e3),r1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var O6={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]};var fc=c=>({"active bg-azure-light":c}),mc=(c,a)=>a.name;function uc(c,a){if(c&1){let l=h1();K(0,"input",8),H2("input",function(r){Y2(l);let n=u2();return K2(n.updateSearch(r))}),a2()}if(c&2){let l=u2();N2("value",l.searchTerm)}}function zc(c,a){if(c&1&&t2(0,"fa-icon",15),c&2){let l=u2(2);N2("icon",l.faThumbtack)}}function pc(c,a){if(c&1){let l=h1();K(0,"div",18),H2("click",function(r){return r.stopPropagation()}),K(1,"button",19),H2("click",function(r){Y2(l);let n=u2().$implicit,i=u2();return K2(i.togglePinned(n.name,r))}),i2(2),a2(),K(3,"button",19),H2("click",function(r){Y2(l);let n=u2().$implicit,i=u2();return K2(i.openPatientPage(n.name,r))}),i2(4," Open full page "),a2()()}if(c&2){let l=u2().$implicit,e=u2();n2(2),u3(" ",e.isPinned(l.name)?"Unpin patient":"Pin to top"," ")}}function dc(c,a){if(c&1){let l=h1();K(0,"div",9),H2("click",function(){let r=Y2(l).$implicit,n=u2();return K2(n.selectPatient(r.name))}),t2(1,"img",10),K(2,"div",11)(3,"p",12),i2(4),a2(),K(5,"p",13),i2(6),a2()(),K(7,"div",14),n1(8,zc,1,1,"fa-icon",15),K(9,"button",16),H2("click",function(r){let n=Y2(l).$implicit,i=u2();return K2(i.togglePatientMenu(n.name,r))}),a2(),n1(10,pc,5,1,"div",17),a2()()}if(c&2){let l=a.$implicit,e=u2();N2("ngClass",d3(10,fc,l.name===e.selectedPatientName)),n2(),N2("src",l.profile_picture,l3)("alt",l.name),n2(3),m3(l.name),n2(2),z3("",l.gender,", ",l.age),n2(2),i1(e.isPinned(l.name)?8:-1),n2(),r1("aria-label","Actions for "+l.name)("aria-expanded",e.openMenuFor===l.name),n2(),i1(e.openMenuFor===l.name?10:-1)}}function Mc(c,a){c&1&&(K(0,"p",7),i2(1,"No patients match your search."),a2())}var q1=class c{constructor(a,l){this.router=a;this.route=l}faThumbtack=O6;patients=[];selectedPatientName=null;searchOpen=!1;searchTerm="";openMenuFor=null;pinnedPatients=new Set;get visiblePatients(){let a=this.searchTerm.trim().toLocaleLowerCase();return this.patients.filter(l=>l.name.toLocaleLowerCase().includes(a)).slice().sort((l,e)=>Number(this.isPinned(e.name))-Number(this.isPinned(l.name)))}ngOnInit(){this.route.queryParamMap.subscribe(a=>{this.selectedPatientName=a.get("patient")})}selectPatient(a){this.openMenuFor=null,this.router.navigate([],{relativeTo:this.route,queryParams:{patient:a},queryParamsHandling:"merge"})}toggleSearch(){this.searchOpen=!this.searchOpen,this.searchOpen||(this.searchTerm="")}updateSearch(a){this.searchTerm=a.target.value}togglePatientMenu(a,l){l.stopPropagation(),this.openMenuFor=this.openMenuFor===a?null:a}togglePinned(a,l){l.stopPropagation(),this.pinnedPatients.has(a)?this.pinnedPatients.delete(a):this.pinnedPatients.add(a),this.openMenuFor=null}isPinned(a){return this.pinnedPatients.has(a)}openPatientPage(a,l){l.stopPropagation(),this.openMenuFor=null,this.router.navigate(["/patients",a])}static \u0275fac=function(l){return new(l||c)(G2(C1),G2(g1))};static \u0275cmp=g2({type:c,selectors:[["patients-list"]],inputs:{patients:"patients"},decls:10,vars:4,consts:[[1,"wrapper","card-container"],[1,"card-container-header","d-flex","justify-content-between","align-items-center"],[1,"card-container-title"],["type","button","id","search-icon",1,"icon","search-toggle",3,"click"],["type","search","placeholder","Search patients","aria-label","Search patients by name",1,"patient-search",3,"value"],[1,"patients-list"],[1,"patient-list-item","pointer",3,"ngClass"],[1,"no-patients"],["type","search","placeholder","Search patients","aria-label","Search patients by name",1,"patient-search",3,"input","value"],[1,"patient-list-item","pointer",3,"click","ngClass"],[1,"patient-photo",3,"src","alt"],[1,"patient-summary"],[1,"patient-name"],[1,"patient-meta"],[1,"patient-actions"],["aria-label","Pinned patient","title","Pinned",1,"pin-indicator",3,"icon"],["type","button",1,"patient-elepsis-icon",3,"click"],[1,"patient-menu"],[1,"patient-menu",3,"click"],["type","button",3,"click"]],template:function(l,e){l&1&&(K(0,"div",0)(1,"div",1)(2,"div",2),i2(3," Patients "),a2(),K(4,"button",3),H2("click",function(){return e.toggleSearch()}),a2()(),n1(5,uc,1,1,"input",4),K(6,"div",5),n3(7,dc,11,12,"div",6,mc),n1(9,Mc,2,0,"p",7),a2()()),l&2&&(n2(4),r1("aria-label",e.searchOpen?"Close patient search":"Search patients")("aria-expanded",e.searchOpen),n2(),i1(e.searchOpen?5:-1),n2(2),i3(e.visiblePatients),n2(2),i1(e.visiblePatients.length===0?9:-1))},dependencies:[v3,H6],styles:['[_nghost-%COMP%]{display:block;height:100%;min-height:0}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:calc(100% - 18px);min-height:0}#search-icon[_ngcontent-%COMP%]{background:url("./media/search_FILL0_wght300_GRAD0_opsz24-LM2YFEB2.svg") 0% 0% no-repeat padding-box;opacity:1}.search-toggle[_ngcontent-%COMP%]{border:0;padding:0;background-color:transparent}.patient-search[_ngcontent-%COMP%]{width:100%;margin-top:12px;padding:10px 12px;border:1px solid #d5e0e3;border-radius:10px;color:#072635;font-size:14px}.patients-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-top:24px;margin-right:-20px;margin-left:-20px;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden}.patient-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 20px}.patient-photo[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;object-fit:cover;margin-right:16px}.patient-summary[_ngcontent-%COMP%]{width:-webkit-fill-available;width:stretch}.patient-name[_ngcontent-%COMP%]{color:#072635;font-size:14px;font-weight:700}.patient-meta[_ngcontent-%COMP%]{color:#707070;font-size:14px}.patient-elepsis-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:36px;height:36px;flex:0 0 36px;padding:0;border:0;border-radius:50%;background:transparent;cursor:pointer}.patient-elepsis-icon[_ngcontent-%COMP%]:before{width:25px;height:5px;background:url("./media/more_horiz_FILL0_wght300_GRAD0_opsz24-TUP22XRX.svg") center/contain no-repeat;content:""}.patient-elepsis-icon[_ngcontent-%COMP%]:hover, .patient-elepsis-icon[_ngcontent-%COMP%]:focus-visible, .patient-elepsis-icon[aria-expanded=true][_ngcontent-%COMP%]{background-color:#e8f4f3;outline:none}.patient-actions[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:8px}.pin-indicator[_ngcontent-%COMP%]{color:#118b82;font-size:15px}.patient-menu[_ngcontent-%COMP%]{position:absolute;z-index:20;top:calc(100% + 4px);right:0;display:flex;flex-direction:column;min-width:150px;padding:6px;border:1px solid #e0e8ea;border-radius:10px;background:#fff;box-shadow:0 8px 24px #07263529}.patient-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:9px 10px;border:0;border-radius:6px;background:transparent;color:#072635;text-align:left;white-space:nowrap}.patient-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .patient-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{background:#e8f8f6}.no-patients[_ngcontent-%COMP%]{padding:16px 20px;color:#61757b;font-size:14px}@media(max-width:1024px){[_nghost-%COMP%]{height:auto}.wrapper[_ngcontent-%COMP%]{max-height:none}.patients-list[_ngcontent-%COMP%]{max-height:280px;margin-top:16px}}@media(max-width:640px){.patients-list[_ngcontent-%COMP%]{max-height:220px;gap:8px;margin-right:-12px;margin-left:-12px}.patient-list-item[_ngcontent-%COMP%]{padding:10px 12px}.patient-photo[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:12px}.patient-name[_ngcontent-%COMP%], .patient-meta[_ngcontent-%COMP%]{font-size:13px}}@media(max-width:840px){.patient-list-item[_ngcontent-%COMP%]{padding:7px}}']})};var j1=class c{constructor(a,l,e){this.patientService=a;this.route=l;this.router=e}patientsList=[];patientsError=!1;selectedPatient=null;selectedPatientName=null;ngOnInit(){this.route.queryParamMap.subscribe(a=>{this.selectedPatientName=a.get("patient"),this.selectPatientByName(this.selectedPatientName)}),this.patientService.getPatients().subscribe({next:a=>{console.log("Fetched patients:",a),this.patientsList=a,this.patientsError=!1,this.selectPatientByName(this.selectedPatientName)},error:a=>{console.error("Error fetching patients:",a),this.patientsError=!0}})}selectPatientByName(a){a?this.selectedPatient=this.patientsList.find(l=>l.name===a)||null:this.selectedPatient=this.patientsList?.[0],this.selectedPatient&&this.router.navigate([],{relativeTo:this.route,queryParams:{patient:this.selectedPatient.name},queryParamsHandling:"merge"})}static \u0275fac=function(l){return new(l||c)(G2(w3),G2(g1),G2(C1))};static \u0275cmp=g2({type:c,selectors:[["app-body"]],decls:6,vars:2,consts:[[1,"dashboard-body"],[1,"row","dashboard-row","pb-3"],[1,"col-3","dashboard-column"],[3,"patients"],[1,"col-9","dashboard-column"],[3,"selectedPatient"]],template:function(l,e){l&1&&(K(0,"main",0)(1,"div",1)(2,"div",2),t2(3,"patients-list",3),a2(),K(4,"div",4),t2(5,"patient-detail",5),a2()()()),l&2&&(n2(3),N2("patients",e.patientsList),n2(2),N2("selectedPatient",e.selectedPatient))},dependencies:[q1,k3],styles:[".dashboard-body[_ngcontent-%COMP%]{height:calc(100vh - 108px);overflow:hidden}.dashboard-row[_ngcontent-%COMP%], .dashboard-column[_ngcontent-%COMP%]{height:100%;min-height:0}@media(max-width:1200px){.dashboard-body[_ngcontent-%COMP%]{height:auto;overflow:visible}}@media(max-width:1024px){.dashboard-row[_ngcontent-%COMP%]{height:auto;margin:0}.dashboard-column[_ngcontent-%COMP%]{height:auto;width:100%}.dashboard-column[_ngcontent-%COMP%]:first-child{margin-bottom:12px}}@media(max-width:640px){.dashboard-row[_ngcontent-%COMP%]{--bs-gutter-x: 0}}"]})};var G1=()=>import("./chunk-DAIECEHP.js").then(c=>c.WorkspacePage),I6=[{path:"",pathMatch:"full",redirectTo:"overview"},{path:"patients",component:j1},{path:"overview",loadComponent:G1,data:{section:"overview"}},{path:"schedule",loadComponent:G1,data:{section:"schedule"}},{path:"messages",loadComponent:G1,data:{section:"messages"}},{path:"transactions",loadComponent:G1,data:{section:"transactions"}},{path:"patients/:patientName",loadComponent:()=>import("./chunk-7SIZPFUJ.js").then(c=>c.PatientPage)},{path:"**",redirectTo:"overview"}];var U6={providers:[J4(),M3({eventCoalescing:!0}),L3(),S3(I6),y3(N3())]};var vc=()=>({exact:!0}),V1=class c{static \u0275fac=function(l){return new(l||c)};static \u0275cmp=g2({type:c,selectors:[["app-header"]],decls:32,vars:2,consts:[[1,"header"],["routerLink","/overview","aria-label","TestCare overview",1,"logo"],[1,"logo-accent"],[1,"nav-buttons"],["routerLink","/overview","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","overview-icon",1,"icon"],["routerLink","/patients","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button",3,"routerLinkActiveOptions"],["id","patients-icon",1,"icon"],["routerLink","/schedule","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","schedule-icon",1,"icon"],["routerLink","/messages","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","messages-icon",1,"icon"],["routerLink","/transactions","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","transactions-icon",1,"icon"],["role","group","aria-disabled","true","aria-label","Profile controls disabled. Please log in for more details.","title","Please log in for more details.",1,"profile"],["id","profile-pic"],[1,"profile-details","border-end","pe-3"],[1,"profile-name","fw-bolder"],[1,"profile-title","fw-light"],[1,"settings","ps-3","d-flex","align-items-center"],["id","settings-gear-icon"],["id","settings-elepsis-icon"]],template:function(l,e){l&1&&(K(0,"div",0)(1,"a",1)(2,"span"),i2(3,"TEST"),a2(),K(4,"span",2),i2(5,"CARE"),a2()(),K(6,"div",3)(7,"a",4),t2(8,"div",5),i2(9," Overview "),a2(),K(10,"a",6),t2(11,"div",7),i2(12," Patients "),a2(),K(13,"a",8),t2(14,"div",9),i2(15," Schedule "),a2(),K(16,"a",10),t2(17,"div",11),i2(18," Message "),a2(),K(19,"a",12),t2(20,"div",13),i2(21," Transactions "),a2()(),K(22,"div",14),t2(23,"div",15),K(24,"div",16)(25,"p",17),i2(26,"Dr. Jose Simmons"),a2(),K(27,"p",18),i2(28,"General Practitioner"),a2()(),K(29,"div",19),t2(30,"div",20)(31,"div",21),a2()()()),l&2&&(n2(10),N2("routerLinkActiveOptions",p3(1,vc)))},dependencies:[x3,b3],styles:['.header[_ngcontent-%COMP%]{margin-bottom:18px;height:72px;background:#fff;border-radius:70px;padding:0 32px;display:flex;align-items:center;justify-content:space-between}.logo[_ngcontent-%COMP%]{display:inline-flex;align-items:center;color:#072635;font-size:20px;font-weight:800;letter-spacing:.03em;cursor:pointer;text-decoration:none;white-space:nowrap}.logo-accent[_ngcontent-%COMP%]{color:#0a9b8e}.nav-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.nav-button[_ngcontent-%COMP%]{padding:10px 20px;margin:0 5px;border-radius:20px;color:#072635;text-decoration:none;font-family:Manrope,sans-serif;font-weight:700;font-size:14px;display:flex;align-items:center}.icon[_ngcontent-%COMP%]{margin-right:3px}#overview-icon[_ngcontent-%COMP%]{background:url("./media/home_FILL0_wght300_GRAD0_opsz24-WRPEGI4G.svg") 0% 0% no-repeat padding-box;opacity:1}#patients-icon[_ngcontent-%COMP%]{background:url("./media/group_FILL0_wght300_GRAD0_opsz24-L22CAQG4.svg") 0% 0% no-repeat padding-box;opacity:1}#schedule-icon[_ngcontent-%COMP%]{background:url("./media/calendar_today_FILL0_wght300_GRAD0_opsz24-P2MEJE3E.svg") 0% 0% no-repeat padding-box;opacity:1}#messages-icon[_ngcontent-%COMP%]{background:url("./media/chat_bubble_FILL0_wght300_GRAD0_opsz24-UYIJWCCY.svg") 0% 0% no-repeat padding-box;opacity:1}#transactions-icon[_ngcontent-%COMP%]{background:url("./media/credit_card_FILL0_wght300_GRAD0_opsz24-2QNA7KNC.svg") 0% 0% no-repeat padding-box;opacity:1}.profile[_ngcontent-%COMP%]{display:flex;align-items:center;opacity:.45;filter:grayscale(1);cursor:not-allowed}.profile[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{cursor:not-allowed}.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}#profile-pic[_ngcontent-%COMP%]{width:44px;height:44px;background:url("./media/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc-7CUYMWV6.png") 0% 0% no-repeat padding-box;border-radius:50%;margin-right:8px}#settings-gear-icon[_ngcontent-%COMP%]{width:20px;height:20px;background:url("./media/settings_FILL0_wght300_GRAD0_opsz24-F463VLB2.svg") 0% 0% no-repeat padding-box;opacity:1}#settings-elepsis-icon[_ngcontent-%COMP%]{width:20px;height:20px;background:url("./media/more_horiz_FILL0_wght300_GRAD0_opsz24-TUP22XRX.svg") 0% 0% no-repeat padding-box;opacity:1;transform:rotate(90deg)}@media(max-width:1200px){.header[_ngcontent-%COMP%]{padding:0 20px}.nav-button[_ngcontent-%COMP%]{padding:10px 12px;margin:0 2px;font-size:12px}.profile-details[_ngcontent-%COMP%]{display:none}}@media(max-width:1024px){.header[_ngcontent-%COMP%]{height:auto;min-height:72px;flex-wrap:wrap;gap:8px;padding:12px 16px;border-radius:24px}.nav-buttons[_ngcontent-%COMP%]{order:3;width:100%;overflow-x:auto;justify-content:space-between}.nav-button[_ngcontent-%COMP%]{flex:0 0 auto}.profile[_ngcontent-%COMP%]{margin-left:auto}}@media(max-width:640px){.header[_ngcontent-%COMP%]{padding:10px 12px;margin-bottom:12px}.logo[_ngcontent-%COMP%]{font-size:18px}#profile-pic[_ngcontent-%COMP%]{width:40px;height:40px}.settings[_ngcontent-%COMP%]{display:none!important}.nav-button[_ngcontent-%COMP%]{padding:8px 10px;font-size:11px}}']})};var $1=class c{title=c3("HealthCareDashboard");static \u0275fac=function(l){return new(l||c)};static \u0275cmp=g2({type:c,selectors:[["root"]],decls:2,vars:0,template:function(l,e){l&1&&t2(0,"app-header")(1,"router-outlet")},dependencies:[V1,C3],encapsulation:2})};h3($1,U6).catch(c=>console.error(c));
