import{a as A3}from"./chunk-H5CB4AOE.js";import{a as N3,b as y3,c as k3,d as w3}from"./chunk-T742PTSH.js";import{A as l3,B as r3,Ba as v3,C as r2,E as T2,Ea as h3,F as g2,H as n3,Ha as L3,Ia as g3,Ja as C1,K as O2,Ka as C3,L as I2,La as x1,M as U2,Ma as x3,Na as b3,Oa as S3,P as i3,Q as s3,R as N2,S as G,T as Q,U as t2,Y as L1,Z as t3,_ as W2,a as K4,aa as o2,b as Q4,ba as o3,ca as f3,ga as m3,ha as n2,ia as u3,ja as s1,k as K1,ka as p3,n as X2,o as J2,p as c1,pa as z3,q as J4,qa as d3,t as c3,u as a3,ua as Q1,v as e3,va as g1,wa as m2,xa as M3}from"./chunk-FMDTPE67.js";var q6=Object.defineProperty,G6=Object.defineProperties,V6=Object.getOwnPropertyDescriptors,T3=Object.getOwnPropertySymbols,$6=Object.prototype.hasOwnProperty,X6=Object.prototype.propertyIsEnumerable,a4=(c,a,l)=>a in c?q6(c,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[a]=l,P3=(c,a)=>{for(var l in a||(a={}))$6.call(a,l)&&a4(c,l,a[l]);if(T3)for(var l of T3(a))X6.call(a,l)&&a4(c,l,a[l]);return c},Z6=(c,a)=>G6(c,V6(a)),D=(c,a,l)=>(a4(c,typeof a!="symbol"?a+"":a,l),l),y2=globalThis;function z2(c){return(y2.__Zone_symbol_prefix||"__zone_symbol__")+c}function Y6(){let c=y2.performance;function a(Y){c&&c.mark&&c.mark(Y)}function l(Y,m){c&&c.measure&&c.measure(Y,m)}a("Zone");let e=class e4{constructor(m,f){D(this,"_parent"),D(this,"_name"),D(this,"_properties"),D(this,"_zoneDelegate"),this._parent=m,this._name=f?f.name||"unnamed":"<root>",this._properties=f&&f.properties||{},this._zoneDelegate=new i(this,this._parent&&this._parent._zoneDelegate,f)}static assertZonePatched(){if(y2.Promise!==E.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let m=e4.current;for(;m.parent;)m=m.parent;return m}static get current(){return T.zone}static get currentTask(){return f2}static __load_patch(m,f,o=!1){if(E.hasOwnProperty(m)){let w=y2[z2("forceDuplicateZoneCheck")]===!0;if(!o&&w)throw Error("Already loaded patch: "+m)}else if(!y2["__Zone_disable_"+m]){let w="Zone:"+m;a(w),E[m]=f(y2,e4,I),l(w,w)}}get parent(){return this._parent}get name(){return this._name}get(m){let f=this.getZoneWith(m);if(f)return f._properties[m]}getZoneWith(m){let f=this;for(;f;){if(f._properties.hasOwnProperty(m))return f;f=f._parent}return null}fork(m){if(!m)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,m)}wrap(m,f){if(typeof m!="function")throw new Error("Expecting function got: "+m);let o=this._zoneDelegate.intercept(this,m,f),w=this;return function(){return w.runGuarded(o,this,arguments,f)}}run(m,f,o,w){T={parent:T,zone:this};try{return this._zoneDelegate.invoke(this,m,f,o,w)}finally{T=T.parent}}runGuarded(m,f=null,o,w){T={parent:T,zone:this};try{try{return this._zoneDelegate.invoke(this,m,f,o,w)}catch(K){if(this._zoneDelegate.handleError(this,K))throw K}}finally{T=T.parent}}runTask(m,f,o){if(m.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(m.zone||U).name+"; Execution: "+this.name+")");let w=m,{type:K,data:{isPeriodic:W=!1,isRefreshable:M2=!1}={}}=m;if(m.state===x&&(K===F||K===e2))return;let w2=m.state!=R;w2&&w._transitionTo(R,q);let A2=f2;f2=w,T={parent:T,zone:this};try{K==e2&&m.data&&!W&&!M2&&(m.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,w,f,o)}catch(v2){if(this._zoneDelegate.handleError(this,v2))throw v2}}finally{let v2=m.state;if(v2!==x&&v2!==Z)if(K==F||W||M2&&v2===g)w2&&w._transitionTo(q,R,g);else{let h=w._zoneDelegates;this._updateTaskCount(w,-1),w2&&w._transitionTo(x,R,x),M2&&(w._zoneDelegates=h)}T=T.parent,f2=A2}}scheduleTask(m){if(m.zone&&m.zone!==this){let o=this;for(;o;){if(o===m.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${m.zone.name}`);o=o.parent}}m._transitionTo(g,x);let f=[];m._zoneDelegates=f,m._zone=this;try{m=this._zoneDelegate.scheduleTask(this,m)}catch(o){throw m._transitionTo(Z,g,x),this._zoneDelegate.handleError(this,o),o}return m._zoneDelegates===f&&this._updateTaskCount(m,1),m.state==g&&m._transitionTo(q,g),m}scheduleMicroTask(m,f,o,w){return this.scheduleTask(new s(S,m,f,o,w,void 0))}scheduleMacroTask(m,f,o,w,K){return this.scheduleTask(new s(e2,m,f,o,w,K))}scheduleEventTask(m,f,o,w,K){return this.scheduleTask(new s(F,m,f,o,w,K))}cancelTask(m){if(m.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(m.zone||U).name+"; Execution: "+this.name+")");if(!(m.state!==q&&m.state!==R)){m._transitionTo(X,q,R);try{this._zoneDelegate.cancelTask(this,m)}catch(f){throw m._transitionTo(Z,X),this._zoneDelegate.handleError(this,f),f}return this._updateTaskCount(m,-1),m._transitionTo(x,X),m.runCount=-1,m}}_updateTaskCount(m,f){let o=m._zoneDelegates;f==-1&&(m._zoneDelegates=null);for(let w=0;w<o.length;w++)o[w]._updateTaskCount(m.type,f)}};D(e,"__symbol__",z2);let r=e,n={name:"",onHasTask:(Y,m,f,o)=>Y.hasTask(f,o),onScheduleTask:(Y,m,f,o)=>Y.scheduleTask(f,o),onInvokeTask:(Y,m,f,o,w,K)=>Y.invokeTask(f,o,w,K),onCancelTask:(Y,m,f,o)=>Y.cancelTask(f,o)};class i{constructor(m,f,o){D(this,"_zone"),D(this,"_taskCounts",{microTask:0,macroTask:0,eventTask:0}),D(this,"_parentDelegate"),D(this,"_forkDlgt"),D(this,"_forkZS"),D(this,"_forkCurrZone"),D(this,"_interceptDlgt"),D(this,"_interceptZS"),D(this,"_interceptCurrZone"),D(this,"_invokeDlgt"),D(this,"_invokeZS"),D(this,"_invokeCurrZone"),D(this,"_handleErrorDlgt"),D(this,"_handleErrorZS"),D(this,"_handleErrorCurrZone"),D(this,"_scheduleTaskDlgt"),D(this,"_scheduleTaskZS"),D(this,"_scheduleTaskCurrZone"),D(this,"_invokeTaskDlgt"),D(this,"_invokeTaskZS"),D(this,"_invokeTaskCurrZone"),D(this,"_cancelTaskDlgt"),D(this,"_cancelTaskZS"),D(this,"_cancelTaskCurrZone"),D(this,"_hasTaskDlgt"),D(this,"_hasTaskDlgtOwner"),D(this,"_hasTaskZS"),D(this,"_hasTaskCurrZone"),this._zone=m,this._parentDelegate=f,this._forkZS=o&&(o&&o.onFork?o:f._forkZS),this._forkDlgt=o&&(o.onFork?f:f._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:f._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:f._interceptZS),this._interceptDlgt=o&&(o.onIntercept?f:f._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:f._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:f._invokeZS),this._invokeDlgt=o&&(o.onInvoke?f:f._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:f._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:f._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?f:f._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:f._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:f._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?f:f._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:f._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:f._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?f:f._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:f._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:f._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?f:f._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:f._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let w=o&&o.onHasTask,K=f&&f._hasTaskZS;(w||K)&&(this._hasTaskZS=w?o:n,this._hasTaskDlgt=f,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=n,this._scheduleTaskDlgt=f,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=n,this._invokeTaskDlgt=f,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=n,this._cancelTaskDlgt=f,this._cancelTaskCurrZone=this._zone))}get zone(){return this._zone}fork(m,f){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,f):new r(m,f)}intercept(m,f,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,f,o):f}invoke(m,f,o,w,K){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,f,o,w,K):f.apply(o,w)}handleError(m,f){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,f):!0}scheduleTask(m,f){let o=f;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,f),o||(o=f);else if(f.scheduleFn)f.scheduleFn(f);else if(f.type==S)_(f);else throw new Error("Task is missing scheduleFn.");return o}invokeTask(m,f,o,w){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,f,o,w):f.callback.apply(o,w)}cancelTask(m,f){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,f);else{if(!f.cancelFn)throw Error("Task is not cancelable");o=f.cancelFn(f)}return o}hasTask(m,f){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,f)}catch(o){this.handleError(m,o)}}_updateTaskCount(m,f){let o=this._taskCounts,w=o[m],K=o[m]=w+f;if(K<0)throw new Error("More tasks executed then were scheduled.");if(w==0||K==0){let W={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:m};this.hasTask(this._zone,W)}}}class s{constructor(m,f,o,w,K,W){if(D(this,"type"),D(this,"source"),D(this,"invoke"),D(this,"callback"),D(this,"data"),D(this,"scheduleFn"),D(this,"cancelFn"),D(this,"_zone",null),D(this,"runCount",0),D(this,"_zoneDelegates",null),D(this,"_state","notScheduled"),this.type=m,this.source=f,this.data=w,this.scheduleFn=K,this.cancelFn=W,!o)throw new Error("callback is not defined");this.callback=o;let M2=this;m===F&&w&&w.useG?this.invoke=s.invokeTask:this.invoke=function(){return s.invokeTask.call(y2,M2,this,arguments)}}static invokeTask(m,f,o){m||(m=this),u2++;try{return m.runCount++,m.zone.runTask(m,f,o)}finally{u2==1&&V(),u2--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,g)}_transitionTo(m,f,o){if(this._state===f||this._state===o)this._state=m,m==x&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${f}'${o?" or '"+o+"'":""}, was '${this._state}'.`)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}let t=z2("setTimeout"),p=z2("Promise"),z=z2("then"),d=[],b=!1,C;function j(Y){if(C||y2[p]&&(C=y2[p].resolve(0)),C){let m=C[z];m||(m=C.then),m.call(C,Y)}else y2[t](Y,0)}function _(Y){u2===0&&d.length===0&&j(V),Y&&d.push(Y)}function V(){if(!b){for(b=!0;d.length;){let Y=d;d=[];for(let m=0;m<Y.length;m++){let f=Y[m];try{f.zone.runTask(f,null,null)}catch(o){I.onUnhandledError(o)}}}I.microtaskDrainDone(),b=!1}}let U={name:"NO ZONE"},x="notScheduled",g="scheduling",q="scheduled",R="running",X="canceling",Z="unknown",S="microTask",e2="macroTask",F="eventTask",E={},I={symbol:z2,currentZoneFrame:()=>T,onUnhandledError:J,microtaskDrainDone:J,scheduleMicroTask:_,showUncaughtError:()=>!r[z2("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:J,patchMethod:()=>J,bindArguments:()=>[],patchThen:()=>J,patchMacroTask:()=>J,patchEventPrototype:()=>J,getGlobalObjects:()=>{},ObjectDefineProperty:()=>J,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>J,wrapWithCurrentZone:()=>J,filterProperties:()=>[],attachOriginToPatched:()=>J,_redefineProperty:()=>J,patchCallbacks:()=>J,nativeScheduleMicroTask:j},T={parent:null,zone:new r(null,null)},f2=null,u2=0;function J(){}return l("Zone","Zone"),r}function K6(){var c;let a=globalThis,l=a[z2("forceDuplicateZoneCheck")]===!0;if(a.Zone&&(l||typeof a.Zone.__symbol__!="function"))throw new Error("Zone already loaded.");return(c=a.Zone)!=null||(a.Zone=Y6()),a.Zone}var o1=Object.getOwnPropertyDescriptor,r4=Object.defineProperty,n4=Object.getPrototypeOf,Q6=Object.create,J6=Array.prototype.slice,i4="addEventListener",s4="removeEventListener",J1=z2(i4),c4=z2(s4),P2="true",_2="false",f1=z2("");function t4(c,a){return Zone.current.wrap(c,a)}function o4(c,a,l,e,r){return Zone.current.scheduleMacroTask(c,a,l,e,r)}var $=z2,N1=typeof window<"u",y1=N1?window:void 0,i2=N1&&y1||globalThis,c8="removeAttribute";function f4(c,a){for(let l=c.length-1;l>=0;l--)typeof c[l]=="function"&&(c[l]=t4(c[l],a+"_"+l));return c}function a8(c,a){let l=c.constructor.name;for(let e=0;e<a.length;e++){let r=a[e],n=c[r];if(n){let i=o1(c,r);if(!B3(i))continue;c[r]=(s=>{let t=function(){return s.apply(this,f4(arguments,l+"."+r))};return D2(t,s),t})(n)}}}function B3(c){return c?c.writable===!1?!1:!(typeof c.get=="function"&&typeof c.set>"u"):!0}var H3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,k1=!("nw"in i2)&&typeof i2.process<"u"&&i2.process.toString()==="[object process]",m4=!k1&&!H3&&!!(N1&&y1.HTMLElement),O3=typeof i2.process<"u"&&i2.process.toString()==="[object process]"&&!H3&&!!(N1&&y1.HTMLElement),S1={},e8=$("enable_beforeunload"),_3=function(c){if(c=c||i2.event,!c)return;let a=S1[c.type];a||(a=S1[c.type]=$("ON_PROPERTY"+c.type));let l=this||c.target||i2,e=l[a],r;if(m4&&l===y1&&c.type==="error"){let n=c;r=e&&e.call(this,n.message,n.filename,n.lineno,n.colno,n.error),r===!0&&c.preventDefault()}else r=e&&e.apply(this,arguments),c.type==="beforeunload"&&i2[e8]&&typeof r=="string"?c.returnValue=r:r!=null&&!r&&c.preventDefault();return r};function E3(c,a,l){let e=o1(c,a);if(!e&&l&&o1(l,a)&&(e={enumerable:!0,configurable:!0}),!e||!e.configurable)return;let r=$("on"+a+"patched");if(c.hasOwnProperty(r)&&c[r])return;delete e.writable,delete e.value;let n=e.get,i=e.set,s=a.slice(2),t=S1[s];t||(t=S1[s]=$("ON_PROPERTY"+s)),e.set=function(p){let z=this;if(!z&&c===i2&&(z=i2),!z)return;typeof z[t]=="function"&&z.removeEventListener(s,_3),i?.call(z,null),z[t]=p,typeof p=="function"&&z.addEventListener(s,_3,!1)},e.get=function(){let p=this;if(!p&&c===i2&&(p=i2),!p)return null;let z=p[t];if(z)return z;if(n){let d=n.call(this);if(d)return e.set.call(this,d),typeof p[c8]=="function"&&p.removeAttribute(a),d}return null},r4(c,a,e),c[r]=!0}function I3(c,a,l){if(a)for(let e=0;e<a.length;e++)E3(c,"on"+a[e],l);else{let e=[];for(let r in c)r.slice(0,2)=="on"&&e.push(r);for(let r=0;r<e.length;r++)E3(c,e[r],l)}}var C2=$("originalInstance");function t1(c){let a=i2[c];if(!a)return;i2[$(c)]=a,i2[c]=function(){let r=f4(arguments,c);switch(r.length){case 0:this[C2]=new a;break;case 1:this[C2]=new a(r[0]);break;case 2:this[C2]=new a(r[0],r[1]);break;case 3:this[C2]=new a(r[0],r[1],r[2]);break;case 4:this[C2]=new a(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}},D2(i2[c],a);let l=new a(function(){}),e;for(e in l)c==="XMLHttpRequest"&&e==="responseBlob"||(function(r){typeof l[r]=="function"?i2[c].prototype[r]=function(){return this[C2][r].apply(this[C2],arguments)}:r4(i2[c].prototype,r,{set:function(n){typeof n=="function"?(this[C2][r]=t4(n,c+"."+r),D2(this[C2][r],n)):this[C2][r]=n},get:function(){return this[C2][r]}})})(e);for(e in a)e!=="prototype"&&a.hasOwnProperty(e)&&(i2[c][e]=a[e])}function l8(c,a){if(typeof Object.getOwnPropertySymbols!="function")return;Object.getOwnPropertySymbols(c).forEach(e=>{let r=Object.getOwnPropertyDescriptor(c,e);Object.defineProperty(a,e,{get:function(){return c[e]},set:function(n){r&&(!r.writable||typeof r.set!="function")||(c[e]=n)},enumerable:r?r.enumerable:!0,configurable:r?r.configurable:!0})})}var r8=!1;function E2(c,a,l){let e=c;for(;e&&!e.hasOwnProperty(a);)e=n4(e);!e&&c[a]&&(e=c);let r=$(a),n=null;if(e&&(!(n=e[r])||!e.hasOwnProperty(r))){n=e[r]=e[a];let i=e&&o1(e,a);if(B3(i)){let s=l(n,r,a);e[a]=function(){return s(this,arguments)},D2(e[a],n),r8&&l8(n,e[a])}}return n}function n8(c,a,l){let e=null;function r(n){let i=n.data;return i.args[i.cbIdx]=function(){n.invoke.apply(this,arguments)},e.apply(i.target,i.args),n}e=E2(c,a,n=>function(i,s){let t=l(i,s);return t.cbIdx>=0&&typeof s[t.cbIdx]=="function"?o4(t.name,s[t.cbIdx],t,r):n.apply(i,s)})}function D2(c,a){c[$("OriginalDelegate")]=a}function D3(c){return typeof c=="function"}function F3(c){return typeof c=="number"}var i8={useG:!0},d2={},U3={},W3=new RegExp("^"+f1+"(\\w+)(true|false)$"),j3=$("propagationStopped");function q3(c,a){let l=(a?a(c):c)+_2,e=(a?a(c):c)+P2,r=f1+l,n=f1+e;d2[c]={},d2[c][_2]=r,d2[c][P2]=n}function s8(c,a,l,e){let r=e&&e.add||i4,n=e&&e.rm||s4,i=e&&e.listeners||"eventListeners",s=e&&e.rmAll||"removeAllListeners",t=$(r),p="."+r+":",z="prependListener",d="."+z+":",b=function(x,g,q){if(x.isRemoved)return;let R=x.callback;typeof R=="object"&&R.handleEvent&&(x.callback=S=>R.handleEvent(S),x.originalDelegate=R);let X;try{x.invoke(x,g,[q])}catch(S){X=S}let Z=x.options;if(Z&&typeof Z=="object"&&Z.once){let S=x.originalDelegate?x.originalDelegate:x.callback;g[n].call(g,q.type,S,Z)}return X};function C(x,g,q){if(g=g||c.event,!g)return;let R=x||g.target||c,X=R[d2[g.type][q?P2:_2]];if(X){let Z=[];if(X.length===1){let S=b(X[0],R,g);S&&Z.push(S)}else{let S=X.slice();for(let e2=0;e2<S.length&&!(g&&g[j3]===!0);e2++){let F=b(S[e2],R,g);F&&Z.push(F)}}if(Z.length===1)throw Z[0];for(let S=0;S<Z.length;S++){let e2=Z[S];a.nativeScheduleMicroTask(()=>{throw e2})}}}let j=function(x){return C(this,x,!1)},_=function(x){return C(this,x,!0)};function V(x,g){if(!x)return!1;let q=!0;g&&g.useG!==void 0&&(q=g.useG);let R=g&&g.vh,X=!0;g&&g.chkDup!==void 0&&(X=g.chkDup);let Z=!1;g&&g.rt!==void 0&&(Z=g.rt);let S=x;for(;S&&!S.hasOwnProperty(r);)S=n4(S);if(!S&&x[r]&&(S=x),!S||S[t])return!1;let e2=g&&g.eventNameToString,F={},E=S[t]=S[r],I=S[$(n)]=S[n],T=S[$(i)]=S[i],f2=S[$(s)]=S[s],u2;g&&g.prepend&&(u2=S[$(g.prepend)]=S[g.prepend]);function J(u,L){return L?typeof u=="boolean"?{capture:u,passive:!0}:u?typeof u=="object"&&u.passive!==!1?Z6(P3({},u),{passive:!0}):u:{passive:!0}:u}let Y=function(u){if(!F.isExisting)return E.call(F.target,F.eventName,F.capture?_:j,F.options)},m=function(u){if(!u.isRemoved){let L=d2[u.eventName],y;L&&(y=L[u.capture?P2:_2]);let P=y&&u.target[y];if(P){for(let N=0;N<P.length;N++)if(P[N]===u){P.splice(N,1),u.isRemoved=!0,u.removeAbortListener&&(u.removeAbortListener(),u.removeAbortListener=null),P.length===0&&(u.allRemoved=!0,u.target[y]=null);break}}}if(u.allRemoved)return I.call(u.target,u.eventName,u.capture?_:j,u.options)},f=function(u){return E.call(F.target,F.eventName,u.invoke,F.options)},o=function(u){return u2.call(F.target,F.eventName,u.invoke,F.options)},w=function(u){return I.call(u.target,u.eventName,u.invoke,u.options)},K=q?Y:f,W=q?m:w,M2=function(u,L){let y=typeof L;return y==="function"&&u.callback===L||y==="object"&&u.originalDelegate===L},w2=g?.diff||M2,A2=Zone[$("UNPATCHED_EVENTS")],v2=c[$("PASSIVE_EVENTS")];function h(u){if(typeof u=="object"&&u!==null){let L=P3({},u);return u.signal&&(L.signal=u.signal),L}return u}let v=function(u,L,y,P,N=!1,B=!1){return function(){let H=this||c,O=arguments[0];g&&g.transferEventName&&(O=g.transferEventName(O));let c2=arguments[1];if(!c2)return u.apply(this,arguments);if(k1&&O==="uncaughtException")return u.apply(this,arguments);let a2=!1;if(typeof c2!="function"){if(!c2.handleEvent)return u.apply(this,arguments);a2=!0}if(R&&!R(u,c2,H,arguments))return;let H2=!!v2&&v2.indexOf(O)!==-1,h2=h(J(arguments[2],H2)),$2=h2?.signal;if($2?.aborted)return;if(A2){for(let S2=0;S2<A2.length;S2++)if(O===A2[S2])return H2?u.call(H,O,c2,h2):u.apply(this,arguments)}let Z1=h2?typeof h2=="boolean"?!0:h2.capture:!1,V4=h2&&typeof h2=="object"?h2.once:!1,j6=Zone.current,Y1=d2[O];Y1||(q3(O,e2),Y1=d2[O]);let $4=Y1[Z1?P2:_2],Q2=H[$4],X4=!1;if(Q2){if(X4=!0,X){for(let S2=0;S2<Q2.length;S2++)if(w2(Q2[S2],c2))return}}else Q2=H[$4]=[];let h1,Z4=H.constructor.name,Y4=U3[Z4];Y4&&(h1=Y4[O]),h1||(h1=Z4+L+(e2?e2(O):O)),F.options=h2,V4&&(F.options.once=!1),F.target=H,F.capture=Z1,F.eventName=O,F.isExisting=X4;let i1=q?i8:void 0;i1&&(i1.taskData=F),$2&&(F.options.signal=void 0);let L2=j6.scheduleEventTask(h1,c2,i1,y,P);if($2){F.options.signal=$2;let S2=()=>L2.zone.cancelTask(L2);u.call($2,"abort",S2,{once:!0}),L2.removeAbortListener=()=>$2.removeEventListener("abort",S2)}if(F.target=null,i1&&(i1.taskData=null),V4&&(F.options.once=!0),typeof L2.options!="boolean"&&(L2.options=h2),L2.target=H,L2.capture=Z1,L2.eventName=O,a2&&(L2.originalDelegate=c2),B?Q2.unshift(L2):Q2.push(L2),N)return H}};return S[r]=v(E,p,K,W,Z),u2&&(S[z]=v(u2,d,o,W,Z,!0)),S[n]=function(){let u=this||c,L=arguments[0];g&&g.transferEventName&&(L=g.transferEventName(L));let y=arguments[2],P=y?typeof y=="boolean"?!0:y.capture:!1,N=arguments[1];if(!N)return I.apply(this,arguments);if(R&&!R(I,N,u,arguments))return;let B=d2[L],H;B&&(H=B[P?P2:_2]);let O=H&&u[H];if(O)for(let c2=0;c2<O.length;c2++){let a2=O[c2];if(w2(a2,N)){if(O.splice(c2,1),a2.isRemoved=!0,O.length===0&&(a2.allRemoved=!0,u[H]=null,!P&&typeof L=="string")){let H2=f1+"ON_PROPERTY"+L;u[H2]=null}return a2.zone.cancelTask(a2),Z?u:void 0}}return I.apply(this,arguments)},S[i]=function(){let u=this||c,L=arguments[0];g&&g.transferEventName&&(L=g.transferEventName(L));let y=[],P=G3(u,e2?e2(L):L);for(let N=0;N<P.length;N++){let B=P[N],H=B.originalDelegate?B.originalDelegate:B.callback;y.push(H)}return y},S[s]=function(){let u=this||c,L=arguments[0];if(L){g&&g.transferEventName&&(L=g.transferEventName(L));let y=d2[L];if(y){let P=y[_2],N=y[P2],B=u[P],H=u[N];if(B){let O=B.slice();for(let c2=0;c2<O.length;c2++){let a2=O[c2],H2=a2.originalDelegate?a2.originalDelegate:a2.callback;this[n].call(this,L,H2,a2.options)}}if(H){let O=H.slice();for(let c2=0;c2<O.length;c2++){let a2=O[c2],H2=a2.originalDelegate?a2.originalDelegate:a2.callback;this[n].call(this,L,H2,a2.options)}}}}else{let y=Object.keys(u);for(let P=0;P<y.length;P++){let N=y[P],B=W3.exec(N),H=B&&B[1];H&&H!=="removeListener"&&this[s].call(this,H)}this[s].call(this,"removeListener")}if(Z)return this},D2(S[r],E),D2(S[n],I),f2&&D2(S[s],f2),T&&D2(S[i],T),!0}let U=[];for(let x=0;x<l.length;x++)U[x]=V(l[x],e);return U}function G3(c,a){if(!a){let n=[];for(let i in c){let s=W3.exec(i),t=s&&s[1];if(t&&(!a||t===a)){let p=c[i];if(p)for(let z=0;z<p.length;z++)n.push(p[z])}}return n}let l=d2[a];l||(q3(a),l=d2[a]);let e=c[l[_2]],r=c[l[P2]];return e?r?e.concat(r):e.slice():r?r.slice():[]}function t8(c,a){let l=c.Event;l&&l.prototype&&a.patchMethod(l.prototype,"stopImmediatePropagation",e=>function(r,n){r[j3]=!0,e&&e.apply(r,n)})}function o8(c,a){a.patchMethod(c,"queueMicrotask",l=>function(e,r){Zone.current.scheduleMicroTask("queueMicrotask",r[0])})}var b1=$("zoneTask");function a1(c,a,l,e){let r=null,n=null;a+=e,l+=e;let i={};function s(p){let z=p.data;z.args[0]=function(){return p.invoke.apply(this,arguments)};let d=r.apply(c,z.args);return F3(d)?z.handleId=d:(z.handle=d,z.isRefreshable=D3(d.refresh)),p}function t(p){let{handle:z,handleId:d}=p.data;return n.call(c,z??d)}r=E2(c,a,p=>function(z,d){var b;if(D3(d[0])){let C={isRefreshable:!1,isPeriodic:e==="Interval",delay:e==="Timeout"||e==="Interval"?d[1]||0:void 0,args:d},j=d[0];d[0]=function(){try{return j.apply(this,arguments)}finally{let{handle:R,handleId:X,isPeriodic:Z,isRefreshable:S}=C;!Z&&!S&&(X?delete i[X]:R&&(R[b1]=null))}};let _=o4(a,d[0],C,s,t);if(!_)return _;let{handleId:V,handle:U,isRefreshable:x,isPeriodic:g}=_.data;if(V)i[V]=_;else if(U&&(U[b1]=_,x&&!g)){let q=U.refresh;U.refresh=function(){let{zone:R,state:X}=_;return X==="notScheduled"?(_._state="scheduled",R._updateTaskCount(_,1)):X==="running"&&(_._state="scheduling"),q.call(this)}}return(b=U??V)!=null?b:_}else return p.apply(c,d)}),n=E2(c,l,p=>function(z,d){let b=d[0],C;F3(b)?(C=i[b],delete i[b]):(C=b?.[b1],C?b[b1]=null:C=b),C?.type?C.cancelFn&&C.zone.cancelTask(C):p.apply(c,d)})}function f8(c,a){let{isBrowser:l,isMix:e}=a.getGlobalObjects();if(!l&&!e||!c.customElements||!("customElements"in c))return;let r=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];a.patchCallbacks(a,c.customElements,"customElements","define",r)}function m8(c,a){if(Zone[a.symbol("patchEventTarget")])return;let{eventNames:l,zoneSymbolEventNames:e,TRUE_STR:r,FALSE_STR:n,ZONE_SYMBOL_PREFIX:i}=a.getGlobalObjects();for(let t=0;t<l.length;t++){let p=l[t],z=p+n,d=p+r,b=i+z,C=i+d;e[p]={},e[p][n]=b,e[p][r]=C}let s=c.EventTarget;if(!(!s||!s.prototype))return a.patchEventTarget(c,a,[s&&s.prototype]),!0}function u8(c,a){a.patchEventPrototype(c,a)}function V3(c,a,l){if(!l||l.length===0)return a;let e=l.filter(n=>n.target===c);if(e.length===0)return a;let r=e[0].ignoreProperties;return a.filter(n=>r.indexOf(n)===-1)}function R3(c,a,l,e){if(!c)return;let r=V3(c,a,l);I3(c,r,e)}function l4(c){return Object.getOwnPropertyNames(c).filter(a=>a.startsWith("on")&&a.length>2).map(a=>a.substring(2))}function p8(c,a){if(k1&&!O3||Zone[c.symbol("patchEvents")])return;let l=a.__Zone_ignore_on_properties,e=[];if(m4){let r=window;e=e.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]),R3(r,l4(r),l,n4(r))}e=e.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let r=0;r<e.length;r++){let n=a[e[r]];n?.prototype&&R3(n.prototype,l4(n.prototype),l)}}function z8(c){c.__load_patch("timers",a=>{let e="clear";a1(a,"set",e,"Timeout"),a1(a,"set",e,"Interval"),a1(a,"set",e,"Immediate")}),c.__load_patch("requestAnimationFrame",a=>{a1(a,"request","cancel","AnimationFrame"),a1(a,"mozRequest","mozCancel","AnimationFrame"),a1(a,"webkitRequest","webkitCancel","AnimationFrame")}),c.__load_patch("blocking",(a,l)=>{let e=["alert","prompt","confirm"];for(let r=0;r<e.length;r++){let n=e[r];E2(a,n,(i,s,t)=>function(p,z){return l.current.run(i,a,z,t)})}}),c.__load_patch("EventTarget",(a,l,e)=>{u8(a,e),m8(a,e);let r=a.XMLHttpRequestEventTarget;r&&r.prototype&&e.patchEventTarget(a,e,[r.prototype])}),c.__load_patch("MutationObserver",(a,l,e)=>{t1("MutationObserver"),t1("WebKitMutationObserver")}),c.__load_patch("IntersectionObserver",(a,l,e)=>{t1("IntersectionObserver")}),c.__load_patch("FileReader",(a,l,e)=>{t1("FileReader")}),c.__load_patch("on_property",(a,l,e)=>{p8(e,a)}),c.__load_patch("customElements",(a,l,e)=>{f8(a,e)}),c.__load_patch("XHR",(a,l)=>{p(a);let e=$("xhrTask"),r=$("xhrSync"),n=$("xhrListener"),i=$("xhrScheduled"),s=$("xhrURL"),t=$("xhrErrorBeforeScheduled");function p(z){let d=z.XMLHttpRequest;if(!d)return;let b=d.prototype;function C(E){return E[e]}let j=b[J1],_=b[c4];if(!j){let E=z.XMLHttpRequestEventTarget;if(E){let I=E.prototype;j=I[J1],_=I[c4]}}let V="readystatechange",U="scheduled";function x(E){let I=E.data,T=I.target;T[i]=!1,T[t]=!1;let f2=T[n];j||(j=T[J1],_=T[c4]),f2&&_.call(T,V,f2);let u2=T[n]=()=>{if(T.readyState===T.DONE)if(!I.aborted&&T[i]&&E.state===U){let Y=T[l.__symbol__("loadfalse")];if(T.status!==0&&Y&&Y.length>0){let m=E.invoke;E.invoke=function(){let f=T[l.__symbol__("loadfalse")];for(let o=0;o<f.length;o++)f[o]===E&&f.splice(o,1);!I.aborted&&E.state===U&&m.call(E)},Y.push(E)}else E.invoke()}else!I.aborted&&T[i]===!1&&(T[t]=!0)};return j.call(T,V,u2),T[e]||(T[e]=E),e2.apply(T,I.args),T[i]=!0,E}function g(){}function q(E){let I=E.data;return I.aborted=!0,F.apply(I.target,I.args)}let R=E2(b,"open",()=>function(E,I){return E[r]=I[2]==!1,E[s]=I[1],R.apply(E,I)}),X="XMLHttpRequest.send",Z=$("fetchTaskAborting"),S=$("fetchTaskScheduling"),e2=E2(b,"send",()=>function(E,I){if(l.current[S]===!0||E[r])return e2.apply(E,I);{let T={target:E,url:E[s],isPeriodic:!1,args:I,aborted:!1},f2=o4(X,g,T,x,q);E&&E[t]===!0&&!T.aborted&&f2.state===U&&f2.invoke()}}),F=E2(b,"abort",()=>function(E,I){let T=C(E);if(T&&typeof T.type=="string"){if(T.cancelFn==null||T.data&&T.data.aborted)return;T.zone.cancelTask(T)}else if(l.current[Z]===!0)return F.apply(E,I)})}}),c.__load_patch("geolocation",a=>{a.navigator&&a.navigator.geolocation&&a8(a.navigator.geolocation,["getCurrentPosition","watchPosition"])}),c.__load_patch("PromiseRejectionEvent",(a,l)=>{function e(r){return function(n){G3(a,r).forEach(s=>{let t=a.PromiseRejectionEvent;if(t){let p=new t(r,{promise:n.promise,reason:n.rejection});s.invoke(p)}})}}a.PromiseRejectionEvent&&(l[$("unhandledPromiseRejectionHandler")]=e("unhandledrejection"),l[$("rejectionHandledHandler")]=e("rejectionhandled"))}),c.__load_patch("queueMicrotask",(a,l,e)=>{o8(a,e)})}function d8(c){c.__load_patch("ZoneAwarePromise",(a,l,e)=>{let r=Object.getOwnPropertyDescriptor,n=Object.defineProperty;function i(h){if(h&&h.toString===Object.prototype.toString){let v=h.constructor&&h.constructor.name;return(v||"")+": "+JSON.stringify(h)}return h?h.toString():Object.prototype.toString.call(h)}let s=e.symbol,t=[],p=a[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,z=s("Promise"),d=s("then"),b="__creationTrace__";e.onUnhandledError=h=>{if(e.showUncaughtError()){let v=h&&h.rejection;v?console.error("Unhandled Promise rejection:",v instanceof Error?v.message:v,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",v,v instanceof Error?v.stack:void 0):console.error(h)}},e.microtaskDrainDone=()=>{for(;t.length;){let h=t.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(v){j(v)}}};let C=s("unhandledPromiseRejectionHandler");function j(h){e.onUnhandledError(h);try{let v=l[C];typeof v=="function"&&v.call(this,h)}catch{}}function _(h){return h&&typeof h.then=="function"}function V(h){return h}function U(h){return W.reject(h)}let x=s("state"),g=s("value"),q=s("finally"),R=s("parentPromiseValue"),X=s("parentPromiseState"),Z="Promise.then",S=null,e2=!0,F=!1,E=0;function I(h,v){return u=>{try{J(h,v,u)}catch(L){J(h,!1,L)}}}let T=function(){let h=!1;return function(u){return function(){h||(h=!0,u.apply(null,arguments))}}},f2="Promise resolved with itself",u2=s("currentTaskTrace");function J(h,v,u){let L=T();if(h===u)throw new TypeError(f2);if(h[x]===S){let y=null;try{(typeof u=="object"||typeof u=="function")&&(y=u&&u.then)}catch(P){return L(()=>{J(h,!1,P)})(),h}if(v!==F&&u instanceof W&&u.hasOwnProperty(x)&&u.hasOwnProperty(g)&&u[x]!==S)m(u),J(h,u[x],u[g]);else if(v!==F&&typeof y=="function")try{y.call(u,L(I(h,v)),L(I(h,!1)))}catch(P){L(()=>{J(h,!1,P)})()}else{h[x]=v;let P=h[g];if(h[g]=u,h[q]===q&&v===e2&&(h[x]=h[X],h[g]=h[R]),v===F&&u instanceof Error){let N=l.currentTask&&l.currentTask.data&&l.currentTask.data[b];N&&n(u,u2,{configurable:!0,enumerable:!1,writable:!0,value:N})}for(let N=0;N<P.length;)f(h,P[N++],P[N++],P[N++],P[N++]);if(P.length==0&&v==F){h[x]=E;let N=u;try{throw new Error("Uncaught (in promise): "+i(u)+(u&&u.stack?`
`+u.stack:""))}catch(B){N=B}p&&(N.throwOriginal=!0),N.rejection=u,N.promise=h,N.zone=l.current,N.task=l.currentTask,t.push(N),e.scheduleMicroTask()}}}return h}let Y=s("rejectionHandledHandler");function m(h){if(h[x]===E){try{let v=l[Y];v&&typeof v=="function"&&v.call(this,{rejection:h[g],promise:h})}catch{}h[x]=F;for(let v=0;v<t.length;v++)h===t[v].promise&&t.splice(v,1)}}function f(h,v,u,L,y){m(h);let P=h[x],N=P?typeof L=="function"?L:V:typeof y=="function"?y:U;v.scheduleMicroTask(Z,()=>{try{let B=h[g],H=!!u&&q===u[q];H&&(u[R]=B,u[X]=P);let O=v.run(N,void 0,H&&N!==U&&N!==V?[]:[B]);J(u,!0,O)}catch(B){J(u,!1,B)}},u)}let o="function ZoneAwarePromise() { [native code] }",w=function(){},K=a.AggregateError;class W{static toString(){return o}static resolve(v){return v instanceof W?v:J(new this(null),e2,v)}static reject(v){return J(new this(null),F,v)}static withResolvers(){let v={};return v.promise=new W((u,L)=>{v.resolve=u,v.reject=L}),v}static any(v){if(!v||typeof v[Symbol.iterator]!="function")return Promise.reject(new K([],"All promises were rejected"));let u=[],L=0;try{for(let N of v)L++,u.push(W.resolve(N))}catch{return Promise.reject(new K([],"All promises were rejected"))}if(L===0)return Promise.reject(new K([],"All promises were rejected"));let y=!1,P=[];return new W((N,B)=>{for(let H=0;H<u.length;H++)u[H].then(O=>{y||(y=!0,N(O))},O=>{P.push(O),L--,L===0&&(y=!0,B(new K(P,"All promises were rejected")))})})}static race(v){let u,L,y=new this((B,H)=>{u=B,L=H});function P(B){u(B)}function N(B){L(B)}for(let B of v)_(B)||(B=this.resolve(B)),B.then(P,N);return y}static all(v){return W.allWithCallback(v)}static allSettled(v){return(this&&this.prototype instanceof W?this:W).allWithCallback(v,{thenCallback:L=>({status:"fulfilled",value:L}),errorCallback:L=>({status:"rejected",reason:L})})}static allWithCallback(v,u){let L,y,P=new this((O,c2)=>{L=O,y=c2}),N=2,B=0,H=[];for(let O of v){_(O)||(O=this.resolve(O));let c2=B;try{O.then(a2=>{H[c2]=u?u.thenCallback(a2):a2,N--,N===0&&L(H)},a2=>{u?(H[c2]=u.errorCallback(a2),N--,N===0&&L(H)):y(a2)})}catch(a2){y(a2)}N++,B++}return N-=2,N===0&&L(H),P}constructor(v){let u=this;if(!(u instanceof W))throw new Error("Must be an instanceof Promise.");u[x]=S,u[g]=[];try{let L=T();v&&v(L(I(u,e2)),L(I(u,F)))}catch(L){J(u,!1,L)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return W}then(v,u){var L;let y=(L=this.constructor)==null?void 0:L[Symbol.species];(!y||typeof y!="function")&&(y=this.constructor||W);let P=new y(w),N=l.current;return this[x]==S?this[g].push(N,P,v,u):f(this,N,P,v,u),P}catch(v){return this.then(null,v)}finally(v){var u;let L=(u=this.constructor)==null?void 0:u[Symbol.species];(!L||typeof L!="function")&&(L=W);let y=new L(w);y[q]=q;let P=l.current;return this[x]==S?this[g].push(P,y,v,v):f(this,P,y,v,v),y}}W.resolve=W.resolve,W.reject=W.reject,W.race=W.race,W.all=W.all;let M2=a[z]=a.Promise;a.Promise=W;let w2=s("thenPatched");function A2(h){let v=h.prototype,u=r(v,"then");if(u&&(u.writable===!1||!u.configurable))return;let L=v.then;v[d]=L,h.prototype.then=function(y,P){return new W((B,H)=>{L.call(this,B,H)}).then(y,P)},h[w2]=!0}e.patchThen=A2;function v2(h){return function(v,u){let L=h.apply(v,u);if(L instanceof W)return L;let y=L.constructor;return y[w2]||A2(y),L}}if(M2){A2(M2);let h=M2.try;h&&typeof h=="function"&&(W.try=h),E2(a,"fetch",v=>v2(v))}return Promise[l.__symbol__("uncaughtPromiseErrors")]=t,W})}function M8(c){c.__load_patch("toString",a=>{let l=Function.prototype.toString,e=$("OriginalDelegate"),r=$("Promise"),n=$("Error"),i=function(){if(typeof this=="function"){let z=this[e];if(z)return typeof z=="function"?l.call(z):Object.prototype.toString.call(z);if(this===Promise){let d=a[r];if(d)return l.call(d)}if(this===Error){let d=a[n];if(d)return l.call(d)}}return l.call(this)};i[e]=l,Function.prototype.toString=i;let s=Object.prototype.toString,t="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?t:s.call(this)}})}function v8(c,a,l,e,r){let n=Zone.__symbol__(e);if(a[n])return;let i=a[n]=a[e];a[e]=function(s,t,p){return t&&t.prototype&&r.forEach(function(z){let d=`${l}.${e}::`+z,b=t.prototype;try{if(b.hasOwnProperty(z)){let C=c.ObjectGetOwnPropertyDescriptor(b,z);C&&C.value?(C.value=c.wrapWithCurrentZone(C.value,d),c._redefineProperty(t.prototype,z,C)):b[z]&&(b[z]=c.wrapWithCurrentZone(b[z],d))}else b[z]&&(b[z]=c.wrapWithCurrentZone(b[z],d))}catch{}}),i.call(a,s,t,p)},c.attachOriginToPatched(a[e],i)}function h8(c){c.__load_patch("util",(a,l,e)=>{let r=l4(a);e.patchOnProperties=I3,e.patchMethod=E2,e.bindArguments=f4,e.patchMacroTask=n8;let n=l.__symbol__("BLACK_LISTED_EVENTS"),i=l.__symbol__("UNPATCHED_EVENTS");a[i]&&(a[n]=a[i]),a[n]&&(l[n]=l[i]=a[n]),e.patchEventPrototype=t8,e.patchEventTarget=s8,e.ObjectDefineProperty=r4,e.ObjectGetOwnPropertyDescriptor=o1,e.ObjectCreate=Q6,e.ArraySlice=J6,e.patchClass=t1,e.wrapWithCurrentZone=t4,e.filterProperties=V3,e.attachOriginToPatched=D2,e._redefineProperty=Object.defineProperty,e.patchCallbacks=v8,e.getGlobalObjects=()=>({globalSources:U3,zoneSymbolEventNames:d2,eventNames:r,isBrowser:m4,isMix:O3,isNode:k1,TRUE_STR:P2,FALSE_STR:_2,ZONE_SYMBOL_PREFIX:f1,ADD_EVENT_LISTENER_STR:i4,REMOVE_EVENT_LISTENER_STR:s4})})}function L8(c){d8(c),M8(c),h8(c)}var $3=K6();L8($3);z8($3);function v4(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function g8(c){if(Array.isArray(c))return c}function C8(c){if(Array.isArray(c))return v4(c)}function x8(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function X3(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,y0(e.key),e)}}function b8(c,a,l){return a&&X3(c.prototype,a),l&&X3(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function _1(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=_4(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(t){throw t},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n,i=!0,s=!1;return{s:function(){l=l.call(c)},n:function(){var t=l.next();return i=t.done,t},e:function(t){s=!0,n=t},f:function(){try{i||l.return==null||l.return()}finally{if(s)throw n}}}}function A(c,a,l){return(a=y0(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function S8(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function N8(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,n,i,s=[],t=!0,p=!1;try{if(n=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;t=!1}else for(;!(t=(e=n.call(l)).done)&&(s.push(e.value),s.length!==a);t=!0);}catch(z){p=!0,r=z}finally{try{if(!t&&l.return!=null&&(i=l.return(),Object(i)!==i))return}finally{if(p)throw r}}return s}}function y8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z3(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function M(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?Z3(Object(l),!0).forEach(function(e){A(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):Z3(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function H1(c,a){return g8(c)||N8(c,a)||_4(c,a)||y8()}function b2(c){return C8(c)||S8(c)||_4(c)||k8()}function w8(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function y0(c){var a=w8(c,"string");return typeof a=="symbol"?a:a+""}function F1(c){"@babel/helpers - typeof";return F1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F1(c)}function _4(c,a){if(c){if(typeof c=="string")return v4(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?v4(c,a):void 0}}var Y3=function(){},E4={},k0={},w0=null,A0={mark:Y3,measure:Y3};try{typeof window<"u"&&(E4=window),typeof document<"u"&&(k0=document),typeof MutationObserver<"u"&&(w0=MutationObserver),typeof performance<"u"&&(A0=performance)}catch{}var A8=E4.navigator||{},K3=A8.userAgent,Q3=K3===void 0?"":K3,q2=E4,l2=k0,J3=w0,w1=A0,Cc=!!q2.document,B2=!!l2.documentElement&&!!l2.head&&typeof l2.addEventListener=="function"&&typeof l2.createElement=="function",T0=~Q3.indexOf("MSIE")||~Q3.indexOf("Trident/"),A1,T8=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,P8=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,P0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},_8={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],s2="classic",d1="duotone",E0="sharp",D0="sharp-duotone",F0="chisel",R0="etch",B0="graphite",H0="jelly",O0="jelly-duo",I0="jelly-fill",U0="mosaic",W0="notdog",j0="notdog-duo",q0="pixel",G0="slab",V0="slab-duo",$0="slab-press",X0="slab-press-duo",Z0="thumbprint",Y0="utility",K0="utility-duo",Q0="utility-fill",J0="vellum",c6="whiteboard",E8="Classic",D8="Duotone",F8="Sharp",R8="Sharp Duotone",B8="Chisel",H8="Etch",O8="Graphite",I8="Jelly",U8="Jelly Duo",W8="Jelly Fill",j8="Mosaic",q8="Notdog",G8="Notdog Duo",V8="Pixel",$8="Slab",X8="Slab Duo",Z8="Slab Press",Y8="Slab Press Duo",K8="Thumbprint",Q8="Utility",J8="Utility Duo",c5="Utility Fill",a5="Vellum",e5="Whiteboard",a6=[s2,d1,E0,D0,F0,R0,B0,H0,O0,I0,U0,W0,j0,q0,G0,V0,$0,X0,Z0,Y0,K0,Q0,J0,c6],xc=(A1={},A(A(A(A(A(A(A(A(A(A(A1,s2,E8),d1,D8),E0,F8),D0,R8),F0,B8),R0,H8),B0,O8),H0,I8),O0,U8),I0,W8),A(A(A(A(A(A(A(A(A(A(A1,U0,j8),W0,q8),j0,G8),q0,V8),G0,$8),V0,X8),$0,Z8),X0,Y8),Z0,K8),Y0,Q8),A(A(A(A(A1,K0,J8),Q0,c5),J0,a5),c6,e5)),l5={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},r5={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},n5=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),i5={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},e6=["fak","fa-kit","fakd","fa-kit-duotone"],c0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},s5=["kit"],t5="kit",o5="kit-duotone",f5="Kit",m5="Kit Duotone",bc=A(A({},t5,f5),o5,m5),u5={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},p5={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},z5={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},a0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},T1,P1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],M5="classic",v5="duotone",h5="sharp",L5="sharp-duotone",g5="chisel",C5="etch",x5="graphite",b5="jelly",S5="jelly-duo",N5="jelly-fill",y5="mosaic",k5="notdog",w5="notdog-duo",A5="pixel",T5="slab",P5="slab-duo",_5="slab-press",E5="slab-press-duo",D5="thumbprint",F5="utility",R5="utility-duo",B5="utility-fill",H5="vellum",O5="whiteboard",I5="Classic",U5="Duotone",W5="Sharp",j5="Sharp Duotone",q5="Chisel",G5="Etch",V5="Graphite",$5="Jelly",X5="Jelly Duo",Z5="Jelly Fill",Y5="Mosaic",K5="Notdog",Q5="Notdog Duo",J5="Pixel",c7="Slab",a7="Slab Duo",e7="Slab Press",l7="Slab Press Duo",r7="Thumbprint",n7="Utility",i7="Utility Duo",s7="Utility Fill",t7="Vellum",o7="Whiteboard",Sc=(T1={},A(A(A(A(A(A(A(A(A(A(T1,M5,I5),v5,U5),h5,W5),L5,j5),g5,q5),C5,G5),x5,V5),b5,$5),S5,X5),N5,Z5),A(A(A(A(A(A(A(A(A(A(T1,y5,Y5),k5,K5),w5,Q5),A5,J5),T5,c7),P5,a7),_5,e7),E5,l7),D5,r7),F5,n7),A(A(A(A(T1,R5,i7),B5,s7),H5,t7),O5,o7)),f7="kit",m7="kit-duotone",u7="Kit",p7="Kit Duotone",Nc=A(A({},f7,u7),m7,p7),z7={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},d7={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},h4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},M7=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],l6=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(d5,M7),v7=["solid","regular","light","thin","duotone","brands","semibold"],r6=[1,2,3,4,5,6,7,8,9,10],h7=r6.concat([11,12,13,14,15,16,17,18,19,20]),L7=["aw","fw","pull-left","pull-right"],g7=[].concat(b2(Object.keys(d7)),v7,L7,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",P1.GROUP,P1.SWAP_OPACITY,P1.PRIMARY,P1.SECONDARY]).concat(r6.map(function(c){return"".concat(c,"x")})).concat(h7.map(function(c){return"w-".concat(c)})),C7={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},F2="___FONT_AWESOME___",L4=16,n6="fa",i6="svg-inline--fa",Y2="data-fa-i2svg",g4="data-fa-pseudo-element",x7="data-fa-pseudo-element-pending",D4="data-prefix",F4="data-icon",e0="fontawesome-i2svg",b7="async",S7=["HTML","HEAD","STYLE","SCRIPT"],s6=["::before","::after",":before",":after"],t6=(function(){try{return!0}catch{return!1}})();function M1(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[s2]}})}var o6=M({},P0);o6[s2]=M(M(M(M({},{"fa-duotone":"duotone"}),P0[s2]),c0.kit),c0["kit-duotone"]);var N7=M1(o6),C4=M({},i5);C4[s2]=M(M(M(M({},{duotone:"fad"}),C4[s2]),a0.kit),a0["kit-duotone"]);var l0=M1(C4),x4=M({},h4);x4[s2]=M(M({},x4[s2]),z5.kit);var R4=M1(x4),b4=M({},z7);b4[s2]=M(M({},b4[s2]),u5.kit);var yc=M1(b4),y7=T8,f6="fa-layers-text",k7=P8,w7=M({},l5),kc=M1(w7),A7=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],u4=_8,T7=[].concat(b2(s5),b2(g7)),u1=q2.FontAwesomeConfig||{};function P7(c){var a=l2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function _7(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}l2&&typeof l2.querySelector=="function"&&(r0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],r0.forEach(function(c){var a=H1(c,2),l=a[0],e=a[1],r=_7(P7(l));r!=null&&(u1[e]=r)}));var r0,m6={styleDefault:"solid",familyDefault:s2,cssPrefix:n6,replacementClass:i6,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};u1.familyPrefix&&(u1.cssPrefix=u1.familyPrefix);var r1=M(M({},m6),u1);r1.autoReplaceSvg||(r1.observeMutations=!1);var k={};Object.keys(m6).forEach(function(c){Object.defineProperty(k,c,{enumerable:!0,set:function(l){r1[c]=l,p1.forEach(function(e){return e(k)})},get:function(){return r1[c]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(a){r1.cssPrefix=a,p1.forEach(function(l){return l(k)})},get:function(){return r1.cssPrefix}});q2.FontAwesomeConfig=k;var p1=[];function E7(c){return p1.push(c),function(){p1.splice(p1.indexOf(c),1)}}var j2=L4,k2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D7(c){if(!(!c||!B2)){var a=l2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=l2.head.childNodes,e=null,r=l.length-1;r>-1;r--){var n=l[r],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=n)}return l2.head.insertBefore(a,e),c}}var F7="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n0(){for(var c=12,a="";c-- >0;)a+=F7[Math.random()*62|0];return a}function n1(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function B4(c){return c.classList?n1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function u6(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R7(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(u6(c[l]),'" ')},"").trim()}function O1(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function H4(c){return c.size!==k2.size||c.x!==k2.x||c.y!==k2.y||c.rotate!==k2.rotate||c.flipX||c.flipY}function B7(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(n," ").concat(i," ").concat(s)},p={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:t,path:p}}function H7(c){var a=c.transform,l=c.width,e=l===void 0?L4:l,r=c.height,n=r===void 0?L4:r,i=c.startCentered,s=i===void 0?!1:i,t="";return s&&T0?t+="translate(".concat(a.x/j2-e/2,"em, ").concat(a.y/j2-n/2,"em) "):s?t+="translate(calc(-50% + ".concat(a.x/j2,"em), calc(-50% + ").concat(a.y/j2,"em)) "):t+="translate(".concat(a.x/j2,"em, ").concat(a.y/j2,"em) "),t+="scale(".concat(a.size/j2*(a.flipX?-1:1),", ").concat(a.size/j2*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var O7=`:root, :host {
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
}`;function p6(){var c=n6,a=i6,l=k.cssPrefix,e=k.replacementClass,r=O7;if(l!==c||e!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(n,".".concat(l,"-")).replace(i,"--".concat(l,"-")).replace(s,".".concat(e))}return r}var i0=!1;function p4(){k.autoAddCss&&!i0&&(D7(p6()),i0=!0)}var I7={mixout:function(){return{dom:{css:p6,insertCss:p4}}},hooks:function(){return{beforeDOMElementCreation:function(){p4()},beforeI2svg:function(){p4()}}}},R2=q2||{};R2[F2]||(R2[F2]={});R2[F2].styles||(R2[F2].styles={});R2[F2].hooks||(R2[F2].hooks={});R2[F2].shims||(R2[F2].shims=[]);var x2=R2[F2],z6=[],d6=function(){l2.removeEventListener("DOMContentLoaded",d6),R1=1,z6.map(function(a){return a()})},R1=!1;B2&&(R1=(l2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(l2.readyState),R1||l2.addEventListener("DOMContentLoaded",d6));function U7(c){B2&&(R1?setTimeout(c,0):z6.push(c))}function v1(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,n=r===void 0?[]:r;return typeof c=="string"?u6(c):"<".concat(a," ").concat(R7(e),">").concat(n.map(v1).join(""),"</").concat(a,">")}function s0(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var W7=function(a,l){return function(e,r,n,i){return a.call(l,e,r,n,i)}},z4=function(a,l,e,r){var n=Object.keys(a),i=n.length,s=r!==void 0?W7(l,r):l,t,p,z;for(e===void 0?(t=1,z=a[n[0]]):(t=0,z=e);t<i;t++)p=n[t],z=s(z,a[p],p,a);return z};function M6(c){return b2(c).length!==1?null:c.codePointAt(0).toString(16)}function t0(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function S4(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,n=t0(a);typeof x2.hooks.addPack=="function"&&!r?x2.hooks.addPack(c,t0(a)):x2.styles[c]=M(M({},x2.styles[c]||{}),n),c==="fas"&&S4("fa",a)}var z1=x2.styles,j7=x2.shims,v6=Object.keys(R4),q7=v6.reduce(function(c,a){return c[a]=Object.keys(R4[a]),c},{}),O4=null,h6={},L6={},g6={},C6={},x6={};function G7(c){return~T7.indexOf(c)}function V7(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!G7(r)?r:null}var b6=function(){var a=function(n){return z4(z1,function(i,s,t){return i[t]=z4(s,n,{}),i},{})};h6=a(function(r,n,i){if(n[3]&&(r[n[3]]=i),n[2]){var s=n[2].filter(function(t){return typeof t=="number"});s.forEach(function(t){r[t.toString(16)]=i})}return r}),L6=a(function(r,n,i){if(r[i]=i,n[2]){var s=n[2].filter(function(t){return typeof t=="string"});s.forEach(function(t){r[t]=i})}return r}),x6=a(function(r,n,i){var s=n[2];return r[i]=i,s.forEach(function(t){r[t]=i}),r});var l="far"in z1||k.autoFetchSvg,e=z4(j7,function(r,n){var i=n[0],s=n[1],t=n[2];return s==="far"&&!l&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:t}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:t}),r},{names:{},unicodes:{}});g6=e.names,C6=e.unicodes,O4=I1(k.styleDefault,{family:k.familyDefault})};E7(function(c){O4=I1(c.styleDefault,{family:k.familyDefault})});b6();function I4(c,a){return(h6[c]||{})[a]}function $7(c,a){return(L6[c]||{})[a]}function Z2(c,a){return(x6[c]||{})[a]}function S6(c){return g6[c]||{prefix:null,iconName:null}}function X7(c){var a=C6[c],l=I4("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function G2(){return O4}var N6=function(){return{prefix:null,iconName:null,rest:[]}};function Z7(c){var a=s2,l=v6.reduce(function(e,r){return e[r]="".concat(k.cssPrefix,"-").concat(r),e},{});return a6.forEach(function(e){(c.includes(l[e])||c.some(function(r){return q7[e].includes(r)}))&&(a=e)}),a}function I1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?s2:l,r=N7[e][c];if(e===d1&&!c)return"fad";var n=l0[e][c]||l0[e][r],i=c in x2.styles?c:null,s=n||i||null;return s}function Y7(c){var a=[],l=null;return c.forEach(function(e){var r=V7(k.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function o0(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var f0=l6.concat(e6);function U1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,n=o0(c.filter(function(C){return f0.includes(C)})),i=o0(c.filter(function(C){return!f0.includes(C)})),s=n.filter(function(C){return r=C,!_0.includes(C)}),t=H1(s,1),p=t[0],z=p===void 0?null:p,d=Z7(n),b=M(M({},Y7(i)),{},{prefix:I1(z,{family:d})});return M(M(M({},b),c9({values:c,family:d,styles:z1,config:k,canonical:b,givenPrefix:r})),K7(e,r,b))}function K7(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var n=a==="fa"?S6(r):{},i=Z2(e,r);return r=n.iconName||i||r,e=n.prefix||e,e==="far"&&!z1.far&&z1.fas&&!k.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Q7=a6.filter(function(c){return c!==s2||c!==d1}),J7=Object.keys(h4).filter(function(c){return c!==s2}).map(function(c){return Object.keys(h4[c])}).flat();function c9(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,n=r===void 0?"":r,i=c.styles,s=i===void 0?{}:i,t=c.config,p=t===void 0?{}:t,z=l===d1,d=a.includes("fa-duotone")||a.includes("fad"),b=p.familyDefault==="duotone",C=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(d||b||C)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Q7.includes(l)){var j=Object.keys(s).find(function(V){return J7.includes(V)});if(j||p.autoFetchSvg){var _=n5.get(l).defaultShortPrefixId;e.prefix=_,e.iconName=Z2(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||n==="fa")&&(e.prefix=G2()||"fas"),e}var a9=(function(){function c(){x8(this,c),this.definitions={}}return b8(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){l.definitions[s]=M(M({},l.definitions[s]||{}),i[s]),S4(s,i[s]);var t=R4[s2][s];t&&S4(t,i[s]),b6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(n){var i=r[n],s=i.prefix,t=i.iconName,p=i.icon,z=p[2];l[s]||(l[s]={}),z.length>0&&z.forEach(function(d){typeof d=="string"&&(l[s][d]=p)}),l[s][t]=p}),l}}])})(),m0=[],e1={},l1={},e9=Object.keys(l1);function l9(c,a){var l=a.mixoutsTo;return m0=c,e1={},Object.keys(l1).forEach(function(e){e9.indexOf(e)===-1&&delete l1[e]}),m0.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(l[i]=r[i]),F1(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){l[i]||(l[i]={}),l[i][s]=r[i][s]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(i){e1[i]||(e1[i]=[]),e1[i].push(n[i])})}e.provides&&e.provides(l1)}),l}function N4(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var n=e1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function K2(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=e1[c]||[];r.forEach(function(n){n.apply(null,l)})}function V2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return l1[c]?l1[c].apply(null,a):void 0}function y4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||G2();if(a)return a=Z2(l,a)||a,s0(y6.definitions,l,a)||s0(x2.styles,l,a)}var y6=new a9,r9=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,K2("noAuto")},n9={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B2?(K2("beforeI2svg",a),V2("pseudoElements2svg",a),V2("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,U7(function(){s9({autoReplaceSvgRoot:l}),K2("watch",a)})}},i9={icon:function(a){if(a===null)return null;if(F1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=I1(a[0]);return{prefix:e,iconName:Z2(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(k.cssPrefix,"-"))>-1||a.match(y7))){var r=U1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||G2(),iconName:Z2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var n=G2();return{prefix:n,iconName:Z2(n,a)||a}}}},p2={noAuto:r9,config:k,dom:n9,parse:i9,library:y6,findIconDefinition:y4,toHtml:v1},s9=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?l2:l;(Object.keys(x2.styles).length>0||k.autoFetchSvg)&&B2&&k.autoReplaceSvg&&p2.dom.i2svg({node:e})};function W1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return v1(e)})}}),Object.defineProperty(c,"node",{get:function(){if(B2){var e=l2.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function t9(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,n=c.styles,i=c.transform;if(H4(i)&&l.found&&!e.found){var s=l.width,t=l.height,p={x:s/t/2,y:.5};r.style=O1(M(M({},n),{},{"transform-origin":"".concat(p.x+i.x/16,"em ").concat(p.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function o9(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(k.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},r),{},{id:i}),children:e}]}]}function f9(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function U4(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,n=c.iconName,i=c.transform,s=c.symbol,t=c.maskId,p=c.extra,z=c.watchable,d=z===void 0?!1:z,b=e.found?e:l,C=b.width,j=b.height,_=[k.replacementClass,n?"".concat(k.cssPrefix,"-").concat(n):""].filter(function(R){return p.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(p.classes).join(" "),V={children:[],attributes:M(M({},p.attributes),{},{"data-prefix":r,"data-icon":n,class:_,role:p.attributes.role||"img",viewBox:"0 0 ".concat(C," ").concat(j)})};!f9(p.attributes)&&!p.attributes["aria-hidden"]&&(V.attributes["aria-hidden"]="true"),d&&(V.attributes[Y2]="");var U=M(M({},V),{},{prefix:r,iconName:n,main:l,mask:e,maskId:t,transform:i,symbol:s,styles:M({},p.styles)}),x=e.found&&l.found?V2("generateAbstractMask",U)||{children:[],attributes:{}}:V2("generateAbstractIcon",U)||{children:[],attributes:{}},g=x.children,q=x.attributes;return U.children=g,U.attributes=q,s?o9(U):t9(U)}function u0(c){var a=c.content,l=c.width,e=c.height,r=c.transform,n=c.extra,i=c.watchable,s=i===void 0?!1:i,t=M(M({},n.attributes),{},{class:n.classes.join(" ")});s&&(t[Y2]="");var p=M({},n.styles);H4(r)&&(p.transform=H7({transform:r,startCentered:!0,width:l,height:e}),p["-webkit-transform"]=p.transform);var z=O1(p);z.length>0&&(t.style=z);var d=[];return d.push({tag:"span",attributes:t,children:[a]}),d}function m9(c){var a=c.content,l=c.extra,e=M(M({},l.attributes),{},{class:l.classes.join(" ")}),r=O1(l.styles);r.length>0&&(e.style=r);var n=[];return n.push({tag:"span",attributes:e,children:[a]}),n}var d4=x2.styles;function k4(c){var a=c[0],l=c[1],e=c.slice(4),r=H1(e,1),n=r[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(u4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(u4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(u4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:l,icon:i}}var u9={found:!1,width:512,height:512};function p9(c,a){!t6&&!k.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function w4(c,a){var l=a;return a==="fa"&&k.styleDefault!==null&&(a=G2()),new Promise(function(e,r){if(l==="fa"){var n=S6(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&d4[a]&&d4[a][c]){var i=d4[a][c];return e(k4(i))}p9(c,a),e(M(M({},u9),{},{icon:k.showMissingIcons&&c?V2("missingIconAbstract")||{}:{}}))})}var p0=function(){},A4=k.measurePerformance&&w1&&w1.mark&&w1.measure?w1:{mark:p0,measure:p0},m1='FA "7.3.1"',z9=function(a){return A4.mark("".concat(m1," ").concat(a," begins")),function(){return k6(a)}},k6=function(a){A4.mark("".concat(m1," ").concat(a," ends")),A4.measure("".concat(m1," ").concat(a),"".concat(m1," ").concat(a," begins"),"".concat(m1," ").concat(a," ends"))},W4={begin:z9,end:k6},E1=function(){};function z0(c){var a=c.getAttribute?c.getAttribute(Y2):null;return typeof a=="string"}function d9(c){var a=c.getAttribute?c.getAttribute(D4):null,l=c.getAttribute?c.getAttribute(F4):null;return a&&l}function M9(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(k.replacementClass)}function v9(){if(k.autoReplaceSvg===!0)return D1.replace;var c=D1[k.autoReplaceSvg];return c||D1.replace}function h9(c){return l2.createElementNS("http://www.w3.org/2000/svg",c)}function L9(c){return l2.createElement(c)}function w6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?h9:L9:l;if(typeof c=="string")return l2.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){r.appendChild(w6(i,{ceFn:e}))}),r}function g9(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var D1={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(w6(r),l)}),l.getAttribute(Y2)===null&&k.keepOriginalSource){var e=l2.createComment(g9(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~B4(l).indexOf(k.replacementClass))return D1.replace(a);var r=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(s,t){return t===k.replacementClass||t.match(r)?s.toSvg.push(t):s.toNode.push(t),s},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}var i=e.map(function(s){return v1(s)}).join(`
`);l.setAttribute(Y2,""),l.innerHTML=i}};function d0(c){c()}function A6(c,a){var l=typeof a=="function"?a:E1;if(c.length===0)l();else{var e=d0;k.mutateApproach===b7&&(e=q2.requestAnimationFrame||d0),e(function(){var r=v9(),n=W4.begin("mutate");c.map(r),n(),l()})}}var j4=!1;function T6(){j4=!0}function T4(){j4=!1}var B1=null;function M0(c){if(J3&&k.observeMutations){var a=c.treeCallback,l=a===void 0?E1:a,e=c.nodeCallback,r=e===void 0?E1:e,n=c.pseudoElementsCallback,i=n===void 0?E1:n,s=c.observeMutationsRoot,t=s===void 0?l2:s;B1=new J3(function(p){if(!j4){var z=G2();n1(p).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!z0(d.addedNodes[0])&&(k.searchPseudoElements&&i(d.target),l(d.target)),d.type==="attributes"&&d.target.parentNode&&k.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&z0(d.target)&&~A7.indexOf(d.attributeName))if(d.attributeName==="class"&&d9(d.target)){var b=U1(B4(d.target)),C=b.prefix,j=b.iconName;d.target.setAttribute(D4,C||z),j&&d.target.setAttribute(F4,j)}else M9(d.target)&&r(d.target)})}}),B2&&B1.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function C9(){B1&&B1.disconnect()}function x9(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var n=r.split(":"),i=n[0],s=n.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),l}function b9(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=U1(B4(c));return r.prefix||(r.prefix=G2()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=$7(r.prefix,c.innerText)||I4(r.prefix,M6(c.innerText))),!r.iconName&&k.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function S9(c){var a=n1(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function N9(){return{iconName:null,prefix:null,transform:k2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=b9(c),e=l.iconName,r=l.prefix,n=l.rest,i=S9(c),s=N4("parseNodeAttributes",{},c),t=a.styleParser?x9(c):[];return M({iconName:e,prefix:r,transform:k2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:t,attributes:i}},s)}var y9=x2.styles;function P6(c){var a=k.autoReplaceSvg==="nest"?v0(c,{styleParser:!1}):v0(c);return~a.extra.classes.indexOf(f6)?V2("generateLayersText",c,a):V2("generateSvgReplacementMutation",c,a)}function k9(){return[].concat(b2(e6),b2(l6))}function h0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B2)return Promise.resolve();var l=l2.documentElement.classList,e=function(d){return l.add("".concat(e0,"-").concat(d))},r=function(d){return l.remove("".concat(e0,"-").concat(d))},n=k.autoFetchSvg?k9():_0.concat(Object.keys(y9));n.includes("fa")||n.push("fa");var i=[".".concat(f6,":not([").concat(Y2,"])")].concat(n.map(function(z){return".".concat(z,":not([").concat(Y2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=n1(c.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var t=W4.begin("onTree"),p=s.reduce(function(z,d){try{var b=P6(d);b&&z.push(b)}catch(C){t6||C.name==="MissingIcon"&&console.error(C)}return z},[]);return new Promise(function(z,d){Promise.all(p).then(function(b){A6(b,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),t(),z()})}).catch(function(b){t(),d(b)})})}function w9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P6(c).then(function(l){l&&A6([l],a)})}function A9(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:y4(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:y4(r||{})),c(e,M(M({},l),{},{mask:r}))}}var T9=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?k2:e,n=l.symbol,i=n===void 0?!1:n,s=l.mask,t=s===void 0?null:s,p=l.maskId,z=p===void 0?null:p,d=l.classes,b=d===void 0?[]:d,C=l.attributes,j=C===void 0?{}:C,_=l.styles,V=_===void 0?{}:_;if(a){var U=a.prefix,x=a.iconName,g=a.icon;return W1(M({type:"icon"},a),function(){return K2("beforeDOMElementCreation",{iconDefinition:a,params:l}),U4({icons:{main:k4(g),mask:t?k4(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:x,transform:M(M({},k2),r),symbol:i,maskId:z,extra:{attributes:j,styles:V,classes:b}})})}},P9={mixout:function(){return{icon:A9(T9)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=h0,l.nodeCallback=w9,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?l2:e,n=l.callback,i=n===void 0?function(){}:n;return h0(r,i)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,n=e.prefix,i=e.transform,s=e.symbol,t=e.mask,p=e.maskId,z=e.extra;return new Promise(function(d,b){Promise.all([w4(r,n),t.iconName?w4(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var j=H1(C,2),_=j[0],V=j[1];d([l,U4({icons:{main:_,mask:V},prefix:n,iconName:r,transform:i,symbol:s,maskId:p,extra:z,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,n=l.main,i=l.transform,s=l.styles,t=O1(s);t.length>0&&(r.style=t);var p;return H4(i)&&(p=V2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),e.push(p||n.icon),{children:e,attributes:r}}}},_9={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,n=r===void 0?[]:r;return W1({type:"layer"},function(){K2("beforeDOMElementCreation",{assembler:l,params:e});var i=[];return l(function(s){Array.isArray(s)?s.map(function(t){i=i.concat(t.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(b2(n)).join(" ")},children:i}]})}}}},E9={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,n=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,t=e.attributes,p=t===void 0?{}:t,z=e.styles,d=z===void 0?{}:z;return W1({type:"counter",content:l},function(){return K2("beforeDOMElementCreation",{content:l,params:e}),m9({content:l.toString(),title:n,extra:{attributes:p,styles:d,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(b2(s))}})})}}}},D9={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?k2:r,i=e.classes,s=i===void 0?[]:i,t=e.attributes,p=t===void 0?{}:t,z=e.styles,d=z===void 0?{}:z;return W1({type:"text",content:l},function(){return K2("beforeDOMElementCreation",{content:l,params:e}),u0({content:l,transform:M(M({},k2),n),extra:{attributes:p,styles:d,classes:["".concat(k.cssPrefix,"-layers-text")].concat(b2(s))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,n=e.extra,i=null,s=null;if(T0){var t=parseInt(getComputedStyle(l).fontSize,10),p=l.getBoundingClientRect();i=p.width/t,s=p.height/t}return Promise.resolve([l,u0({content:l.innerHTML,width:i,height:s,transform:r,extra:n,watchable:!0})])}}},_6=new RegExp('"',"ug"),L0=[1105920,1112319],g0=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),r5),C7),p5),P4=Object.keys(g0).reduce(function(c,a){return c[a.toLowerCase()]=g0[a],c},{}),F9=Object.keys(P4).reduce(function(c,a){var l=P4[a];return c[a]=l[900]||b2(Object.entries(l))[0][1],c},{});function R9(c){var a=c.replace(_6,"");return M6(b2(a)[0]||"")}function B9(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(_6,""),r=e.codePointAt(0),n=r>=L0[0]&&r<=L0[1],i=e.length===2?e[0]===e[1]:!1;return n||i||a}function H9(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(P4[l]||{})[r]||F9[l]}function C0(c,a){var l="".concat(x7).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var n=n1(c.children),i=n.filter(function(X){return X.getAttribute(g4)===a})[0],s=q2.getComputedStyle(c,a),t=s.getPropertyValue("font-family"),p=t.match(k7),z=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(i&&!p)return c.removeChild(i),e();if(p&&d!=="none"&&d!==""){var b=s.getPropertyValue("content"),C=H9(t,z),j=R9(b),_=p[0].startsWith("FontAwesome"),V=B9(s),U=I4(C,j),x=U;if(_){var g=X7(j);g.iconName&&g.prefix&&(U=g.iconName,C=g.prefix)}if(U&&!V&&(!i||i.getAttribute(D4)!==C||i.getAttribute(F4)!==x)){c.setAttribute(l,x),i&&c.removeChild(i);var q=N9(),R=q.extra;R.attributes[g4]=a,w4(U,C).then(function(X){var Z=U4(M(M({},q),{},{icons:{main:X,mask:N6()},prefix:C,iconName:x,extra:R,watchable:!0})),S=l2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(S,c.firstChild):c.appendChild(S),S.outerHTML=Z.map(function(e2){return v1(e2)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function O9(c){return Promise.all([C0(c,"::before"),C0(c,"::after")])}function I9(c){return c.parentNode!==document.head&&!~S7.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(g4)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var U9=function(a){return!!a&&s6.some(function(l){return a.includes(l)})},W9=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(t){return t.trim()});e=e.flatMap(function(t){return t.includes("(")?t:t.split(",").map(function(p){return p.trim()})});var r=_1(e),n;try{for(r.s();!(n=r.n()).done;){var i=n.value;if(U9(i)){var s=s6.reduce(function(t,p){return t.replace(p,"")},i);s!==""&&s!=="*"&&l.add(s)}}}catch(t){r.e(t)}finally{r.f()}return l};function x0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B2){var l;if(a)l=c;else if(k.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=_1(document.styleSheets),n;try{for(r.s();!(n=r.n()).done;){var i=n.value;try{var s=_1(i.cssRules),t;try{for(s.s();!(t=s.n()).done;){var p=t.value,z=W9(p.selectorText),d=_1(z),b;try{for(d.s();!(b=d.n()).done;){var C=b.value;e.add(C)}}catch(_){d.e(_)}finally{d.f()}}}catch(_){s.e(_)}finally{s.f()}}catch(_){k.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(_.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(_){r.e(_)}finally{r.f()}if(!e.size)return;var j=Array.from(e).join(", ");try{l=c.querySelectorAll(j)}catch{}}return new Promise(function(_,V){var U=n1(l).filter(I9).map(O9),x=W4.begin("searchPseudoElements");T6(),Promise.all(U).then(function(){x(),T4(),_()}).catch(function(){x(),T4(),V()})})}}var j9={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=x0,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?l2:e;k.searchPseudoElements&&x0(r)}}},b0=!1,q9={mixout:function(){return{dom:{unwatch:function(){T6(),b0=!0}}}},hooks:function(){return{bootstrap:function(){M0(N4("mutationObserverCallbacks",{}))},noAuto:function(){C9()},watch:function(l){var e=l.observeMutationsRoot;b0?T4():M0(N4("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},S0=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var n=r.toLowerCase().split("-"),i=n[0],s=n.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},l)},G9={mixout:function(){return{parse:{transform:function(l){return S0(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=S0(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,n=l.containerWidth,i=l.iconWidth,s={transform:"translate(".concat(n/2," 256)")},t="translate(".concat(r.x*32,", ").concat(r.y*32,") "),p="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(t," ").concat(p," ").concat(z)},b={transform:"translate(".concat(i/2*-1," -256)")},C={outer:s,inner:d,path:b};return{tag:"g",attributes:M({},C.outer),children:[{tag:"g",attributes:M({},C.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:M(M({},e.icon.attributes),C.path)}]}]}}}},M4={x:0,y:0,width:"100%",height:"100%"};function N0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function V9(c){return c.tag==="g"?c.children:[c]}var $9={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),n=r?U1(r.split(" ").map(function(i){return i.trim()})):N6();return n.prefix||(n.prefix=G2()),l.mask=n,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,n=l.main,i=l.mask,s=l.maskId,t=l.transform,p=n.width,z=n.icon,d=i.width,b=i.icon,C=B7({transform:t,containerWidth:d,iconWidth:p}),j={tag:"rect",attributes:M(M({},M4),{},{fill:"white"})},_=z.children?{children:z.children.map(N0)}:{},V={tag:"g",attributes:M({},C.inner),children:[N0(M({tag:z.tag,attributes:M(M({},z.attributes),C.path)},_))]},U={tag:"g",attributes:M({},C.outer),children:[V]},x="mask-".concat(s||n0()),g="clip-".concat(s||n0()),q={tag:"mask",attributes:M(M({},M4),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,U]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:V9(b)},q]};return e.push(R,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(x,")")},M4)}),{children:e,attributes:r}}}},X9={provides:function(a){var l=!1;q2.matchMedia&&(l=q2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:M(M({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=M(M({},n),{},{attributeName:"opacity"}),s={tag:"circle",attributes:M(M({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||s.children.push({tag:"animate",attributes:M(M({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:M(M({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:M(M({},i),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:M(M({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Z9={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return l.symbol=n,l}}}},Y9=[I7,P9,_9,E9,D9,j9,q9,G9,$9,X9,Z9];l9(Y9,{mixoutsTo:p2});var wc=p2.noAuto,E6=p2.config,Ac=p2.library,D6=p2.dom,F6=p2.parse,Tc=p2.findIconDefinition,Pc=p2.toHtml,R6=p2.icon,_c=p2.layer,K9=p2.text,Q9=p2.counter;var J9=["*"],cc=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){E6.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=K1({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),ac=(()=>{class c{definitions={};addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...l){for(let e of l){let r=Object.keys(e).map(n=>e[n]);this.addIcons(...r)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=K1({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),ec=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},lc=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},H6=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),rc=c=>{let a=H6(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:a,"fa-rotate-by":c.rotate!=null&&!a,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(e=>l[e]?e:null).filter(e=>e!=null)},q4=new WeakSet,B6="fa-auto-css";function nc(c,a){if(!a.autoAddCss||q4.has(c))return;if(c.getElementById(B6)!=null){a.autoAddCss=!1,q4.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",B6),l.innerHTML=D6.css();let e=c.head.childNodes,r=null;for(let n=e.length-1;n>-1;n--){let i=e[n],s=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}c.head.insertBefore(l,r),a.autoAddCss=!1,q4.add(c)}var ic=c=>c.prefix!==void 0&&c.iconName!==void 0,sc=(c,a)=>ic(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},tc=(()=>{class c{stackItemSize=g1("1x");size=g1();_effect=e3(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=n3({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),oc=(()=>{class c{size=g1();classes=Q1(()=>{let l=this.size(),e=l?{[`fa-${l}`]:!0}:{};return Q4(K4({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=g2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&m3(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:J9,decls:1,vars:0,template:function(e,r){e&1&&(o3(),f3(0))},encapsulation:2,changeDetection:0})}return c})(),O6=(()=>{class c{icon=m2();title=m2();animation=m2();mask=m2();flip=m2();size=m2();pull=m2();border=m2();inverse=m2();symbol=m2();rotate=m2();fixedWidth=m2();transform=m2();a11yRole=m2();renderedIconHTML=Q1(()=>{let l=this.icon()??this.config.fallbackIcon;if(!l)return lc(),"";let e=this.findIconDefinition(l);if(!e)return"";let r=this.buildParams();nc(this.document,this.config);let n=R6(e,r);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=X2(J4);sanitizer=X2(g3);config=X2(cc);iconLibrary=X2(ac);stackItem=X2(tc,{optional:!0});stack=X2(oc,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(l){let e=sc(l,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(ec(e),null)}buildParams(){let l=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),n=typeof r=="string"?F6.transform(r):r,i=this.mask(),s=i!=null?this.findIconDefinition(i):null,t={},p=this.a11yRole();p!=null&&(t.role=p);let z={};return e.rotate!=null&&!H6(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:n,classes:rc(e),mask:s??void 0,symbol:this.symbol(),attributes:t,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=g2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(t3("innerHTML",r.renderedIconHTML(),l3),O2("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var I6={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]};var mc=c=>({"active bg-azure-light":c}),uc=(c,a)=>a.name;function pc(c,a){if(c&1){let l=L1();G(0,"input",8),W2("input",function(r){J2(l);let n=o2();return c1(n.updateSearch(r))}),Q()}if(c&2){let l=o2();N2("value",l.searchTerm)}}function zc(c,a){if(c&1&&t2(0,"fa-icon",15),c&2){let l=o2(2);N2("icon",l.faThumbtack)}}function dc(c,a){if(c&1){let l=L1();G(0,"div",18),W2("click",function(r){return r.stopPropagation()}),G(1,"button",19),W2("click",function(r){J2(l);let n=o2().$implicit,i=o2();return c1(i.togglePinned(n.name,r))}),n2(2),Q(),G(3,"button",19),W2("click",function(r){J2(l);let n=o2().$implicit,i=o2();return c1(i.openPatientPage(n.name,r))}),n2(4," Open full page "),Q()()}if(c&2){let l=o2().$implicit,e=o2();r2(2),s1(" ",e.isPinned(l.name)?"Unpin patient":"Pin to top"," ")}}function Mc(c,a){if(c&1){let l=L1();G(0,"div",9),W2("click",function(){let r=J2(l).$implicit,n=o2();return c1(n.selectPatient(r.name))}),t2(1,"img",10),G(2,"div",11)(3,"p",12),n2(4),Q(),G(5,"p",13),n2(6),Q()(),G(7,"div",14),I2(8,zc,1,1,"fa-icon",15),G(9,"button",16),W2("click",function(r){let n=J2(l).$implicit,i=o2();return c1(i.togglePatientMenu(n.name,r))}),Q(),I2(10,dc,5,1,"div",17),Q()()}if(c&2){let l=a.$implicit,e=o2();N2("ngClass",d3(10,mc,l.name===e.selectedPatientName)),r2(),N2("src",l.profile_picture,r3)("alt",l.name),r2(3),u3(l.name),r2(2),p3("",l.gender,", ",l.age),r2(2),U2(e.isPinned(l.name)?8:-1),r2(),O2("aria-label","Actions for "+l.name)("aria-expanded",e.openMenuFor===l.name),r2(),U2(e.openMenuFor===l.name?10:-1)}}function vc(c,a){c&1&&(G(0,"p",7),n2(1,"No patients match your search."),Q())}var q1=class c{constructor(a,l){this.router=a;this.route=l}faThumbtack=I6;patients=[];selectedPatientName=null;searchOpen=!1;searchTerm="";openMenuFor=null;pinnedPatients=new Set;get visiblePatients(){let a=this.searchTerm.trim().toLocaleLowerCase();return this.patients.filter(l=>l.name.toLocaleLowerCase().includes(a)).slice().sort((l,e)=>Number(this.isPinned(e.name))-Number(this.isPinned(l.name)))}ngOnInit(){this.route.queryParamMap.subscribe(a=>{this.selectedPatientName=a.get("patient")})}selectPatient(a){this.openMenuFor=null,this.router.navigate([],{relativeTo:this.route,queryParams:{patient:a},queryParamsHandling:"merge"})}toggleSearch(){this.searchOpen=!this.searchOpen,this.searchOpen||(this.searchTerm="")}updateSearch(a){this.searchTerm=a.target.value}togglePatientMenu(a,l){l.stopPropagation(),this.openMenuFor=this.openMenuFor===a?null:a}togglePinned(a,l){l.stopPropagation(),this.pinnedPatients.has(a)?this.pinnedPatients.delete(a):this.pinnedPatients.add(a),this.openMenuFor=null}isPinned(a){return this.pinnedPatients.has(a)}openPatientPage(a,l){l.stopPropagation(),this.openMenuFor=null,this.router.navigate(["/patients",a])}static \u0275fac=function(l){return new(l||c)(T2(x1),T2(C1))};static \u0275cmp=g2({type:c,selectors:[["patients-list"]],inputs:{patients:"patients"},decls:10,vars:4,consts:[[1,"wrapper","card-container"],[1,"card-container-header","d-flex","justify-content-between","align-items-center"],[1,"card-container-title"],["type","button","id","search-icon",1,"icon","search-toggle",3,"click"],["type","search","placeholder","Search patients","aria-label","Search patients by name",1,"patient-search",3,"value"],[1,"patients-list"],[1,"patient-list-item","pointer",3,"ngClass"],[1,"no-patients"],["type","search","placeholder","Search patients","aria-label","Search patients by name",1,"patient-search",3,"input","value"],[1,"patient-list-item","pointer",3,"click","ngClass"],[1,"patient-photo",3,"src","alt"],[1,"patient-summary"],[1,"patient-name"],[1,"patient-meta"],[1,"patient-actions"],["aria-label","Pinned patient","title","Pinned",1,"pin-indicator",3,"icon"],["type","button",1,"patient-elepsis-icon",3,"click"],[1,"patient-menu"],[1,"patient-menu",3,"click"],["type","button",3,"click"]],template:function(l,e){l&1&&(G(0,"div",0)(1,"div",1)(2,"div",2),n2(3," Patients "),Q(),G(4,"button",3),W2("click",function(){return e.toggleSearch()}),Q()(),I2(5,pc,1,1,"input",4),G(6,"div",5),i3(7,Mc,11,12,"div",6,uc),I2(9,vc,2,0,"p",7),Q()()),l&2&&(r2(4),O2("aria-label",e.searchOpen?"Close patient search":"Search patients")("aria-expanded",e.searchOpen),r2(),U2(e.searchOpen?5:-1),r2(2),s3(e.visiblePatients),r2(2),U2(e.visiblePatients.length===0?9:-1))},dependencies:[v3,O6],styles:['[_nghost-%COMP%]{display:block;height:100%;min-height:0}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:calc(100% - 18px);min-height:0}#search-icon[_ngcontent-%COMP%]{background:url("./media/search_FILL0_wght300_GRAD0_opsz24-LM2YFEB2.svg") 0% 0% no-repeat padding-box;opacity:1}.search-toggle[_ngcontent-%COMP%]{border:0;padding:0;background-color:transparent}.patient-search[_ngcontent-%COMP%]{width:100%;margin-top:12px;padding:10px 12px;border:1px solid #d5e0e3;border-radius:10px;color:#072635;font-size:14px}.patients-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-top:24px;margin-right:-20px;margin-left:-20px;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden}.patient-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 20px}.patient-photo[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;object-fit:cover;margin-right:16px}.patient-summary[_ngcontent-%COMP%]{width:-webkit-fill-available;width:stretch}.patient-name[_ngcontent-%COMP%]{color:#072635;font-size:14px;font-weight:700}.patient-meta[_ngcontent-%COMP%]{color:#707070;font-size:14px}.patient-elepsis-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:36px;height:36px;flex:0 0 36px;padding:0;border:0;border-radius:50%;background:transparent;cursor:pointer}.patient-elepsis-icon[_ngcontent-%COMP%]:before{width:25px;height:5px;background:url("./media/more_horiz_FILL0_wght300_GRAD0_opsz24-TUP22XRX.svg") center/contain no-repeat;content:""}.patient-elepsis-icon[_ngcontent-%COMP%]:hover, .patient-elepsis-icon[_ngcontent-%COMP%]:focus-visible, .patient-elepsis-icon[aria-expanded=true][_ngcontent-%COMP%]{background-color:#e8f4f3;outline:none}.patient-actions[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;gap:8px}.pin-indicator[_ngcontent-%COMP%]{color:#118b82;font-size:15px}.patient-menu[_ngcontent-%COMP%]{position:absolute;z-index:20;top:calc(100% + 4px);right:0;display:flex;flex-direction:column;min-width:150px;padding:6px;border:1px solid #e0e8ea;border-radius:10px;background:#fff;box-shadow:0 8px 24px #07263529}.patient-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:9px 10px;border:0;border-radius:6px;background:transparent;color:#072635;text-align:left;white-space:nowrap}.patient-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .patient-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{background:#e8f8f6}.no-patients[_ngcontent-%COMP%]{padding:16px 20px;color:#61757b;font-size:14px}@media(max-width:1024px){[_nghost-%COMP%]{height:auto}.wrapper[_ngcontent-%COMP%]{max-height:none}.patients-list[_ngcontent-%COMP%]{max-height:280px;margin-top:16px}}@media(max-width:640px){.patients-list[_ngcontent-%COMP%]{max-height:220px;gap:8px;margin-right:-12px;margin-left:-12px}.patient-list-item[_ngcontent-%COMP%]{padding:10px 12px}.patient-photo[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:12px}.patient-name[_ngcontent-%COMP%], .patient-meta[_ngcontent-%COMP%]{font-size:13px}}@media(max-width:840px){.patient-list-item[_ngcontent-%COMP%]{padding:7px}}']})};var G1=class c{constructor(a,l,e){this.patientService=a;this.route=l;this.router=e}patientsList=[];patientsError=!1;selectedPatient=null;selectedPatientName=null;ngOnInit(){this.route.queryParamMap.subscribe(a=>{this.selectedPatientName=a.get("patient"),this.selectPatientByName(this.selectedPatientName)}),this.patientService.getPatients().subscribe({next:a=>{console.log("Fetched patients:",a),this.patientsList=a,this.patientsError=!1,this.selectPatientByName(this.selectedPatientName)},error:a=>{console.error("Error fetching patients:",a),this.patientsError=!0}})}selectPatientByName(a){a?this.selectedPatient=this.patientsList.find(l=>l.name===a)||null:this.selectedPatient=this.patientsList?.[0],this.selectedPatient&&this.router.navigate([],{relativeTo:this.route,queryParams:{patient:this.selectedPatient.name},queryParamsHandling:"merge"})}static \u0275fac=function(l){return new(l||c)(T2(w3),T2(C1),T2(x1))};static \u0275cmp=g2({type:c,selectors:[["app-body"]],decls:6,vars:2,consts:[[1,"dashboard-body"],[1,"row","dashboard-row","pb-3"],[1,"col-3","dashboard-column"],[3,"patients"],[1,"col-9","dashboard-column"],[3,"selectedPatient"]],template:function(l,e){l&1&&(G(0,"main",0)(1,"div",1)(2,"div",2),t2(3,"patients-list",3),Q(),G(4,"div",4),t2(5,"patient-detail",5),Q()()()),l&2&&(r2(3),N2("patients",e.patientsList),r2(2),N2("selectedPatient",e.selectedPatient))},dependencies:[q1,k3],styles:[".dashboard-body[_ngcontent-%COMP%]{height:calc(100vh - 108px);overflow:hidden}.dashboard-row[_ngcontent-%COMP%], .dashboard-column[_ngcontent-%COMP%]{height:100%;min-height:0}@media(max-width:1200px){.dashboard-body[_ngcontent-%COMP%]{height:auto;overflow:visible}}@media(max-width:1024px){.dashboard-row[_ngcontent-%COMP%]{height:auto;margin:0}.dashboard-column[_ngcontent-%COMP%]{height:auto;width:100%}.dashboard-column[_ngcontent-%COMP%]:first-child{margin-bottom:12px}}@media(max-width:640px){.dashboard-row[_ngcontent-%COMP%]{--bs-gutter-x: 0}}"]})};var V1=()=>import("./chunk-QZ76WI4D.js").then(c=>c.WorkspacePage),U6=[{path:"",pathMatch:"full",redirectTo:"overview"},{path:"patients",component:G1},{path:"overview",loadComponent:V1,data:{section:"overview"}},{path:"schedule",loadComponent:V1,data:{section:"schedule"}},{path:"messages",loadComponent:V1,data:{section:"messages"}},{path:"transactions",loadComponent:V1,data:{section:"transactions"}},{path:"patients/:patientName",loadComponent:()=>import("./chunk-7SIZPFUJ.js").then(c=>c.PatientPage)},{path:"**",redirectTo:"overview"}];var W6={providers:[c3(),M3({eventCoalescing:!0}),L3(),S3(U6),y3(N3())]};var hc=()=>({exact:!0});function Lc(c,a){if(c&1&&(G(0,"span",10),n2(1),Q()),c&2){let l=o2();O2("aria-label",l.navigationCount.todayScheduleCount()+" schedule events today"),r2(),s1(" ",l.navigationCount.todayScheduleCount()," ")}}function gc(c,a){if(c&1&&(G(0,"span",13),n2(1),Q()),c&2){let l=o2();O2("aria-label",l.navigationCount.unreadMessageCount()+" unread messages"),r2(),s1(" ",l.navigationCount.unreadMessageCount()," ")}}var $1=class c{constructor(a){this.navigationCount=a}static \u0275fac=function(l){return new(l||c)(T2(A3))};static \u0275cmp=g2({type:c,selectors:[["app-header"]],decls:34,vars:4,consts:[[1,"header"],["routerLink","/overview","aria-label","TestCare overview",1,"logo"],[1,"logo-accent"],[1,"nav-buttons"],["routerLink","/overview","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","overview-icon",1,"icon"],["routerLink","/patients","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button",3,"routerLinkActiveOptions"],["id","patients-icon",1,"icon"],["routerLink","/schedule","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","schedule-icon",1,"icon"],[1,"message-count","schedule-count"],["routerLink","/messages","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","messages-icon",1,"icon"],[1,"message-count"],["routerLink","/transactions","routerLinkActive","active bg-azure","ariaCurrentWhenActive","page",1,"nav-button"],["id","transactions-icon",1,"icon"],["role","group","aria-disabled","true","aria-label","Profile controls disabled. Please log in for more details.","title","Please log in for more details.",1,"profile"],["id","profile-pic"],[1,"profile-details","border-end","pe-3"],[1,"profile-name","fw-bolder"],[1,"profile-title","fw-light"],[1,"settings","ps-3","d-flex","align-items-center"],["id","settings-gear-icon"],["id","settings-elepsis-icon"]],template:function(l,e){l&1&&(G(0,"div",0)(1,"a",1)(2,"span"),n2(3,"TEST"),Q(),G(4,"span",2),n2(5,"CARE"),Q()(),G(6,"div",3)(7,"a",4),t2(8,"div",5),n2(9," Overview "),Q(),G(10,"a",6),t2(11,"div",7),n2(12," Patients "),Q(),G(13,"a",8),t2(14,"div",9),n2(15," Schedule "),I2(16,Lc,2,2,"span",10),Q(),G(17,"a",11),t2(18,"div",12),n2(19," Message "),I2(20,gc,2,2,"span",13),Q(),G(21,"a",14),t2(22,"div",15),n2(23," Transactions "),Q()(),G(24,"div",16),t2(25,"div",17),G(26,"div",18)(27,"p",19),n2(28,"Dr. Jose Simmons"),Q(),G(29,"p",20),n2(30,"General Practitioner"),Q()(),G(31,"div",21),t2(32,"div",22)(33,"div",23),Q()()()),l&2&&(r2(10),N2("routerLinkActiveOptions",z3(3,hc)),r2(6),U2(e.navigationCount.todayScheduleCount()>0?16:-1),r2(4),U2(e.navigationCount.unreadMessageCount()>0?20:-1))},dependencies:[x3,b3],styles:['.header[_ngcontent-%COMP%]{margin-bottom:18px;height:72px;background:#fff;border-radius:70px;padding:0 32px;display:flex;align-items:center;justify-content:space-between}.logo[_ngcontent-%COMP%]{display:inline-flex;align-items:center;color:#072635;font-size:20px;font-weight:800;letter-spacing:.03em;cursor:pointer;text-decoration:none;white-space:nowrap}.logo-accent[_ngcontent-%COMP%]{color:#0a9b8e}.nav-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.nav-button[_ngcontent-%COMP%]{padding:10px 20px;margin:0 5px;border-radius:20px;color:#072635;text-decoration:none;font-family:Manrope,sans-serif;font-weight:700;font-size:14px;display:flex;align-items:center}.icon[_ngcontent-%COMP%]{margin-right:3px}.message-count[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;margin-left:7px;padding:0 5px;border-radius:999px;background:#fdebed;color:#a33b45;font-size:11px;font-weight:700;line-height:1}.schedule-count[_ngcontent-%COMP%]{background:#fff4dc;color:#8a641c}#overview-icon[_ngcontent-%COMP%]{background:url("./media/home_FILL0_wght300_GRAD0_opsz24-WRPEGI4G.svg") 0% 0% no-repeat padding-box;opacity:1}#patients-icon[_ngcontent-%COMP%]{background:url("./media/group_FILL0_wght300_GRAD0_opsz24-L22CAQG4.svg") 0% 0% no-repeat padding-box;opacity:1}#schedule-icon[_ngcontent-%COMP%]{background:url("./media/calendar_today_FILL0_wght300_GRAD0_opsz24-P2MEJE3E.svg") 0% 0% no-repeat padding-box;opacity:1}#messages-icon[_ngcontent-%COMP%]{background:url("./media/chat_bubble_FILL0_wght300_GRAD0_opsz24-UYIJWCCY.svg") 0% 0% no-repeat padding-box;opacity:1}#transactions-icon[_ngcontent-%COMP%]{background:url("./media/credit_card_FILL0_wght300_GRAD0_opsz24-2QNA7KNC.svg") 0% 0% no-repeat padding-box;opacity:1}.profile[_ngcontent-%COMP%]{display:flex;align-items:center;opacity:.45;filter:grayscale(1);cursor:not-allowed}.profile[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{cursor:not-allowed}.profile-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}#profile-pic[_ngcontent-%COMP%]{width:44px;height:44px;background:url("./media/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc-7CUYMWV6.png") 0% 0% no-repeat padding-box;border-radius:50%;margin-right:8px}#settings-gear-icon[_ngcontent-%COMP%]{width:20px;height:20px;background:url("./media/settings_FILL0_wght300_GRAD0_opsz24-F463VLB2.svg") 0% 0% no-repeat padding-box;opacity:1}#settings-elepsis-icon[_ngcontent-%COMP%]{width:20px;height:20px;background:url("./media/more_horiz_FILL0_wght300_GRAD0_opsz24-TUP22XRX.svg") 0% 0% no-repeat padding-box;opacity:1;transform:rotate(90deg)}@media(max-width:1200px){.header[_ngcontent-%COMP%]{padding:0 20px}.nav-button[_ngcontent-%COMP%]{padding:10px 12px;margin:0 2px;font-size:12px}.profile-details[_ngcontent-%COMP%]{display:none}}@media(max-width:1024px){.header[_ngcontent-%COMP%]{height:auto;min-height:72px;flex-wrap:wrap;gap:8px;padding:12px 16px;border-radius:24px}.nav-buttons[_ngcontent-%COMP%]{order:3;width:100%;overflow-x:auto;justify-content:space-between}.nav-button[_ngcontent-%COMP%]{flex:0 0 auto}.profile[_ngcontent-%COMP%]{margin-left:auto}}@media(max-width:640px){.header[_ngcontent-%COMP%]{padding:10px 12px;margin-bottom:12px}.logo[_ngcontent-%COMP%]{font-size:18px}#profile-pic[_ngcontent-%COMP%]{width:40px;height:40px}.settings[_ngcontent-%COMP%]{display:none!important}.nav-button[_ngcontent-%COMP%]{padding:8px 10px;font-size:11px}}']})};var X1=class c{title=a3("HealthCareDashboard");static \u0275fac=function(l){return new(l||c)};static \u0275cmp=g2({type:c,selectors:[["root"]],decls:2,vars:0,template:function(l,e){l&1&&t2(0,"app-header")(1,"router-outlet")},dependencies:[$1,C3],encapsulation:2})};h3(X1,W6).catch(c=>console.error(c));
