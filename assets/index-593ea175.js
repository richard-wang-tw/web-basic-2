(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Bn(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const je=Object.freeze({}),As=Object.freeze([]),_t=()=>{},$f=()=>!1,rm=/^on[^a-z]/,Dr=e=>rm.test(e),So=e=>e.startsWith("onUpdate:"),He=Object.assign,el=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},om=Object.prototype.hasOwnProperty,xe=(e,t)=>om.call(e,t),oe=Array.isArray,cs=e=>Hr(e)==="[object Map]",Tf=e=>Hr(e)==="[object Set]",im=e=>Hr(e)==="[object RegExp]",ce=e=>typeof e=="function",Ve=e=>typeof e=="string",tl=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",nl=e=>Pe(e)&&ce(e.then)&&ce(e.catch),Cf=Object.prototype.toString,Hr=e=>Cf.call(e),sl=e=>Hr(e).slice(8,-1),Of=e=>Hr(e)==="[object Object]",rl=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,po=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),am=Bn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Jo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},lm=/-(\w)/g,nn=Jo(e=>e.replace(lm,(t,n)=>n?n.toUpperCase():"")),cm=/\B([A-Z])/g,gn=Jo(e=>e.replace(cm,"-$1").toLowerCase()),gs=Jo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Jn=Jo(e=>e?`on${gs(e)}`:""),kr=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Eo=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},um=e=>{const t=parseFloat(e);return isNaN(t)?e:t},fm=e=>{const t=Ve(e)?Number(e):NaN;return isNaN(t)?e:t};let tc;const $o=()=>tc||(tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qe(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Ve(s)?mm(s):Qe(s);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Ve(e))return e;if(Pe(e))return e}}const pm=/;(?![^(]*\))/g,dm=/:([^]+)/,hm=/\/\*[^]*?\*\//g;function mm(e){const t={};return e.replace(hm,"").split(pm).forEach(n=>{if(n){const s=n.split(dm);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function We(e){let t="";if(Ve(e))t=e;else if(oe(e))for(let n=0;n<e.length;n++){const s=We(e[n]);s&&(t+=s+" ")}else if(Pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function fe(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ve(t)&&(e.class=We(t)),n&&(e.style=Qe(n)),e}const gm="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",_m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Pf=Bn(gm),vm=Bn(_m),ym="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bm=Bn(ym);function Af(e){return!!e||e===""}const sn=e=>Ve(e)?e:e==null?"":oe(e)||Pe(e)&&(e.toString===Cf||!ce(e.toString))?JSON.stringify(e,Mf,2):String(e),Mf=(e,t)=>t&&t.__v_isRef?Mf(e,t.value):cs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Tf(t)?{[`Set(${t.size})`]:[...t.values()]}:Pe(t)&&!oe(t)&&!Of(t)?String(t):t;function To(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let kt;class If{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!t&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=kt;try{return kt=this,t()}finally{kt=n}}else To("cannot run an inactive effect scope.")}on(){kt=this}off(){kt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function wm(e){return new If(e)}function km(e,t=kt){t&&t.active&&t.effects.push(e)}function Qo(){return kt}function ol(e){kt?kt.cleanups.push(e):To("onScopeDispose() is called when there is no active effect scope to be associated with.")}const il=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Lf=e=>(e.w&jn)>0,Rf=e=>(e.n&jn)>0,xm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=jn},Sm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Lf(r)&&!Rf(r)?r.delete(e):t[n++]=r,r.w&=~jn,r.n&=~jn}t.length=n}},Co=new WeakMap;let sr=0,jn=1;const Xi=30;let ft;const us=Symbol("iterate"),ea=Symbol("Map key iterate");class al{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,km(this,s)}run(){if(!this.active)return this.fn();let t=ft,n=Pn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ft,ft=this,Pn=!0,jn=1<<++sr,sr<=Xi?xm(this):nc(this),this.fn()}finally{sr<=Xi&&Sm(this),jn=1<<--sr,ft=this.parent,Pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(nc(this),this.onStop&&this.onStop(),this.active=!1)}}function nc(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Pn=!0;const Nf=[];function vs(){Nf.push(Pn),Pn=!1}function ys(){const e=Nf.pop();Pn=e===void 0?!0:e}function it(e,t,n){if(Pn&&ft){let s=Co.get(e);s||Co.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=il()),Ff(r,{effect:ft,target:e,type:t,key:n})}}function Ff(e,t){let n=!1;sr<=Xi?Rf(e)||(e.n|=jn,n=!Lf(e)):n=!e.has(ft),n&&(e.add(ft),ft.deps.push(e),ft.onTrack&&ft.onTrack(He({effect:ft},t)))}function rn(e,t,n,s,r,o){const i=Co.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&oe(e)){const u=Number(s);i.forEach((f,p)=>{(p==="length"||p>=u)&&l.push(f)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":oe(e)?rl(n)&&l.push(i.get("length")):(l.push(i.get(us)),cs(e)&&l.push(i.get(ea)));break;case"delete":oe(e)||(l.push(i.get(us)),cs(e)&&l.push(i.get(ea)));break;case"set":cs(e)&&l.push(i.get(us));break}const c={target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:o};if(l.length===1)l[0]&&ta(l[0],c);else{const u=[];for(const f of l)f&&u.push(...f);ta(il(u),c)}}function ta(e,t){const n=oe(e)?e:[...e];for(const s of n)s.computed&&sc(s,t);for(const s of n)s.computed||sc(s,t)}function sc(e,t){(e!==ft||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(He({effect:e},t)),e.scheduler?e.scheduler():e.run())}function Em(e,t){var n;return(n=Co.get(e))==null?void 0:n.get(t)}const $m=Bn("__proto__,__v_isRef,__isVue"),jf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tl)),Tm=Xo(),Cm=Xo(!1,!0),Om=Xo(!0),Pm=Xo(!0,!0),rc=Am();function Am(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=he(this);for(let o=0,i=this.length;o<i;o++)it(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(he)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){vs();const s=he(this)[t].apply(this,n);return ys(),s}}),e}function Mm(e){const t=he(this);return it(t,"has",e),t.hasOwnProperty(e)}function Xo(e=!1,t=!1){return function(s,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Uf:zf:t?Wf:qf).get(s))return s;const i=oe(s);if(!e){if(i&&xe(rc,r))return Reflect.get(rc,r,o);if(r==="hasOwnProperty")return Mm}const l=Reflect.get(s,r,o);return(tl(r)?jf.has(r):$m(r))||(e||it(s,"get",r),t)?l:Te(l)?i&&rl(r)?l:l.value:Pe(l)?e?Wt(l):qe(l):l}}const Im=Df(),Lm=Df(!0);function Df(e=!1){return function(n,s,r,o){let i=n[s];if(Dn(i)&&Te(i)&&!Te(r))return!1;if(!e&&(!Oo(r)&&!Dn(r)&&(i=he(i),r=he(r)),!oe(n)&&Te(i)&&!Te(r)))return i.value=r,!0;const l=oe(n)&&rl(s)?Number(s)<n.length:xe(n,s),c=Reflect.set(n,s,r,o);return n===he(o)&&(l?kr(r,i)&&rn(n,"set",s,r,i):rn(n,"add",s,r)),c}}function Rm(e,t){const n=xe(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&rn(e,"delete",t,void 0,s),r}function Nm(e,t){const n=Reflect.has(e,t);return(!tl(t)||!jf.has(t))&&it(e,"has",t),n}function Fm(e){return it(e,"iterate",oe(e)?"length":us),Reflect.ownKeys(e)}const Hf={get:Tm,set:Im,deleteProperty:Rm,has:Nm,ownKeys:Fm},Vf={get:Om,set(e,t){return To(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return To(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},jm=He({},Hf,{get:Cm,set:Lm}),Dm=He({},Vf,{get:Pm}),ll=e=>e,ei=e=>Reflect.getPrototypeOf(e);function Yr(e,t,n=!1,s=!1){e=e.__v_raw;const r=he(e),o=he(t);n||(t!==o&&it(r,"get",t),it(r,"get",o));const{has:i}=ei(r),l=s?ll:n?cl:xr;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function Gr(e,t=!1){const n=this.__v_raw,s=he(n),r=he(e);return t||(e!==r&&it(s,"has",e),it(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Zr(e,t=!1){return e=e.__v_raw,!t&&it(he(e),"iterate",us),Reflect.get(e,"size",e)}function oc(e){e=he(e);const t=he(this);return ei(t).has.call(t,e)||(t.add(e),rn(t,"add",e,e)),this}function ic(e,t){t=he(t);const n=he(this),{has:s,get:r}=ei(n);let o=s.call(n,e);o?Bf(n,s,e):(e=he(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?kr(t,i)&&rn(n,"set",e,t,i):rn(n,"add",e,t),this}function ac(e){const t=he(this),{has:n,get:s}=ei(t);let r=n.call(t,e);r?Bf(t,n,e):(e=he(e),r=n.call(t,e));const o=s?s.call(t,e):void 0,i=t.delete(e);return r&&rn(t,"delete",e,void 0,o),i}function lc(){const e=he(this),t=e.size!==0,n=cs(e)?new Map(e):new Set(e),s=e.clear();return t&&rn(e,"clear",void 0,void 0,n),s}function Jr(e,t){return function(s,r){const o=this,i=o.__v_raw,l=he(i),c=t?ll:e?cl:xr;return!e&&it(l,"iterate",us),i.forEach((u,f)=>s.call(r,c(u),c(f),o))}}function Qr(e,t,n){return function(...s){const r=this.__v_raw,o=he(r),i=cs(o),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=r[e](...s),f=n?ll:t?cl:xr;return!t&&it(o,"iterate",c?ea:us),{next(){const{value:p,done:d}=u.next();return d?{value:p,done:d}:{value:l?[f(p[0]),f(p[1])]:f(p),done:d}},[Symbol.iterator](){return this}}}}function wn(e){return function(...t){{const n=t[0]?`on key "${t[0]}" `:"";console.warn(`${gs(e)} operation ${n}failed: target is readonly.`,he(this))}return e==="delete"?!1:this}}function Hm(){const e={get(o){return Yr(this,o)},get size(){return Zr(this)},has:Gr,add:oc,set:ic,delete:ac,clear:lc,forEach:Jr(!1,!1)},t={get(o){return Yr(this,o,!1,!0)},get size(){return Zr(this)},has:Gr,add:oc,set:ic,delete:ac,clear:lc,forEach:Jr(!1,!0)},n={get(o){return Yr(this,o,!0)},get size(){return Zr(this,!0)},has(o){return Gr.call(this,o,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Jr(!0,!1)},s={get(o){return Yr(this,o,!0,!0)},get size(){return Zr(this,!0)},has(o){return Gr.call(this,o,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Qr(o,!1,!1),n[o]=Qr(o,!0,!1),t[o]=Qr(o,!1,!0),s[o]=Qr(o,!0,!0)}),[e,n,t,s]}const[Vm,Bm,qm,Wm]=Hm();function ti(e,t){const n=t?e?Wm:qm:e?Bm:Vm;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,o)}const zm={get:ti(!1,!1)},Um={get:ti(!1,!0)},Km={get:ti(!0,!1)},Ym={get:ti(!0,!0)};function Bf(e,t,n){const s=he(n);if(s!==n&&t.call(e,s)){const r=sl(e);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const qf=new WeakMap,Wf=new WeakMap,zf=new WeakMap,Uf=new WeakMap;function Gm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zm(e){return e.__v_skip||!Object.isExtensible(e)?0:Gm(sl(e))}function qe(e){return Dn(e)?e:ni(e,!1,Hf,zm,qf)}function Jm(e){return ni(e,!1,jm,Um,Wf)}function Wt(e){return ni(e,!0,Vf,Km,zf)}function rr(e){return ni(e,!0,Dm,Ym,Uf)}function ni(e,t,n,s,r){if(!Pe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Zm(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function fs(e){return Dn(e)?fs(e.__v_raw):!!(e&&e.__v_isReactive)}function Dn(e){return!!(e&&e.__v_isReadonly)}function Oo(e){return!!(e&&e.__v_isShallow)}function Po(e){return fs(e)||Dn(e)}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function si(e){return Eo(e,"__v_skip",!0),e}const xr=e=>Pe(e)?qe(e):e,cl=e=>Pe(e)?Wt(e):e;function ul(e){Pn&&ft&&(e=he(e),Ff(e.dep||(e.dep=il()),{target:e,type:"get",key:"value"}))}function fl(e,t){e=he(e);const n=e.dep;n&&ta(n,{target:e,type:"set",key:"value",newValue:t})}function Te(e){return!!(e&&e.__v_isRef===!0)}function q(e){return Kf(e,!1)}function on(e){return Kf(e,!0)}function Kf(e,t){return Te(e)?e:new Qm(e,t)}class Qm{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:he(t),this._value=n?t:xr(t)}get value(){return ul(this),this._value}set value(t){const n=this.__v_isShallow||Oo(t)||Dn(t);t=n?t:he(t),kr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xr(t),fl(this,t))}}function M(e){return Te(e)?e.value:e}const Xm={get:(e,t,n)=>M(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Te(r)&&!Te(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Yf(e){return fs(e)?e:new Proxy(e,Xm)}class eg{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>ul(this),()=>fl(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function pl(e){return new eg(e)}function tg(e){Po(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=oe(e)?new Array(e.length):{};for(const n in e)t[n]=Gf(e,n);return t}class ng{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Em(he(this._object),this._key)}}class sg{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function rg(e,t,n){return Te(e)?e:ce(e)?new sg(e):Pe(e)&&arguments.length>1?Gf(e,t,n):q(e)}function Gf(e,t,n){const s=e[t];return Te(s)?s:new ng(e,t,n)}class og{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new al(t,()=>{this._dirty||(this._dirty=!0,fl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=he(this);return ul(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ig(e,t,n=!1){let s,r;const o=ce(e);o?(s=e,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(s=e.get,r=e.set);const i=new og(s,r,o||!r,n);return t&&!n&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const ps=[];function ho(e){ps.push(e)}function mo(){ps.pop()}function N(e,...t){vs();const n=ps.length?ps[ps.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=ag();if(s)mn(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:o})=>`at <${di(n,o.type)}>`).join(`
`),r]);else{const o=[`[Vue warn]: ${e}`,...t];r.length&&o.push(`
`,...lg(r)),console.warn(...o)}ys()}function ag(){let e=ps[ps.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function lg(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...cg(n))}),t}function cg({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${di(e.component,e.type,s)}`,o=">"+n;return e.props?[r,...ug(e.props),o]:[r+o]}function ug(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...Zf(s,e[s]))}),n.length>3&&t.push(" ..."),t}function Zf(e,t,n){return Ve(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Te(t)?(t=Zf(e,he(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):ce(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=he(t),n?t:[`${e}=`,t])}function fg(e,t){e!==void 0&&(typeof e!="number"?N(`${t} is not a valid number - got ${JSON.stringify(e)}.`):isNaN(e)&&N(`${t} is NaN - the duration expression might be incorrect.`))}const dl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function mn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){ri(o,t,n)}return r}function Rt(e,t,n,s){if(ce(e)){const o=mn(e,t,n,s);return o&&nl(o)&&o.catch(i=>{ri(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Rt(e[o],t,n,s));return r}function ri(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=dl[n];for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,i,l)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){mn(c,null,10,[e,i,l]);return}}pg(e,n,r,s)}function pg(e,t,n,s=!0){{const r=dl[t];if(n&&ho(n),N(`Unhandled error${r?` during execution of ${r}`:""}`),n&&mo(),s)throw e;console.error(e)}}let Sr=!1,na=!1;const rt=[];let Jt=0;const Ms=[];let Zt=null,En=0;const Jf=Promise.resolve();let hl=null;const dg=100;function et(e){const t=hl||Jf;return e?t.then(this?e.bind(this):e):t}function hg(e){let t=Jt+1,n=rt.length;for(;t<n;){const s=t+n>>>1;Er(rt[s])<e?t=s+1:n=s}return t}function oi(e){(!rt.length||!rt.includes(e,Sr&&e.allowRecurse?Jt+1:Jt))&&(e.id==null?rt.push(e):rt.splice(hg(e.id),0,e),Qf())}function Qf(){!Sr&&!na&&(na=!0,hl=Jf.then(tp))}function mg(e){const t=rt.indexOf(e);t>Jt&&rt.splice(t,1)}function Xf(e){oe(e)?Ms.push(...e):(!Zt||!Zt.includes(e,e.allowRecurse?En+1:En))&&Ms.push(e),Qf()}function cc(e,t=Sr?Jt+1:0){for(e=e||new Map;t<rt.length;t++){const n=rt[t];if(n&&n.pre){if(ml(e,n))continue;rt.splice(t,1),t--,n()}}}function ep(e){if(Ms.length){const t=[...new Set(Ms)];if(Ms.length=0,Zt){Zt.push(...t);return}for(Zt=t,e=e||new Map,Zt.sort((n,s)=>Er(n)-Er(s)),En=0;En<Zt.length;En++)ml(e,Zt[En])||Zt[En]();Zt=null,En=0}}const Er=e=>e.id==null?1/0:e.id,gg=(e,t)=>{const n=Er(e)-Er(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function tp(e){na=!1,Sr=!0,e=e||new Map,rt.sort(gg);const t=n=>ml(e,n);try{for(Jt=0;Jt<rt.length;Jt++){const n=rt[Jt];if(n&&n.active!==!1){if(t(n))continue;mn(n,null,14)}}}finally{Jt=0,rt.length=0,ep(e),Sr=!1,hl=null,(rt.length||Ms.length)&&tp(e)}}function ml(e,t){if(!e.has(t))e.set(t,1);else{const n=e.get(t);if(n>dg){const s=t.ownerInstance,r=s&&Cr(s.type);return N(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,n+1)}}let An=!1;const Os=new Set;$o().__VUE_HMR_RUNTIME__={createRecord:wi(np),rerender:wi(yg),reload:wi(bg)};const _s=new Map;function _g(e){const t=e.type.__hmrId;let n=_s.get(t);n||(np(t,e.type),n=_s.get(t)),n.instances.add(e)}function vg(e){_s.get(e.type.__hmrId).instances.delete(e)}function np(e,t){return _s.has(e)?!1:(_s.set(e,{initialDef:ur(t),instances:new Set}),!0)}function ur(e){return Lp(e)?e.__vccOpts:e}function yg(e,t){const n=_s.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,ur(s.type).render=t),s.renderCache=[],An=!0,s.update(),An=!1}))}function bg(e,t){const n=_s.get(e);if(!n)return;t=ur(t),uc(n.initialDef,t);const s=[...n.instances];for(const r of s){const o=ur(r.type);Os.has(o)||(o!==n.initialDef&&uc(o,t),Os.add(o)),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(Os.add(o),r.ceReload(t.styles),Os.delete(o)):r.parent?oi(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Xf(()=>{for(const r of s)Os.delete(ur(r.type))})}function uc(e,t){He(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function wi(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Qt,or=[],sa=!1;function Vr(e,...t){Qt?Qt.emit(e,...t):sa||or.push({event:e,args:t})}function sp(e,t){var n,s;Qt=e,Qt?(Qt.enabled=!0,or.forEach(({event:r,args:o})=>Qt.emit(r,...o)),or=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{sp(o,t)}),setTimeout(()=>{Qt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,sa=!0,or=[])},3e3)):(sa=!0,or=[])}function wg(e,t){Vr("app:init",e,t,{Fragment:Ce,Text:qr,Comment:pt,Static:go})}function kg(e){Vr("app:unmount",e)}const ra=gl("component:added"),rp=gl("component:updated"),xg=gl("component:removed"),Sg=e=>{Qt&&typeof Qt.cleanupBuffer=="function"&&!Qt.cleanupBuffer(e)&&xg(e)};function gl(e){return t=>{Vr(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const Eg=op("perf:start"),$g=op("perf:end");function op(e){return(t,n,s)=>{Vr(e,t.appContext.app,t.uid,t,n,s)}}function Tg(e,t,n){Vr("component:emit",e.appContext.app,e,t,n)}function Cg(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||je;{const{emitsOptions:f,propsOptions:[p]}=e;if(f)if(!(t in f))(!p||!(Jn(t)in p))&&N(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Jn(t)}" prop.`);else{const d=f[t];ce(d)&&(d(...n)||N(`Invalid event arguments: event validation failed for event "${t}".`))}}let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:p,trim:d}=s[f]||je;d&&(r=n.map(m=>Ve(m)?m.trim():m)),p&&(r=n.map(um))}Tg(e,t,r);{const f=t.toLowerCase();f!==t&&s[Jn(f)]&&N(`Event "${f}" is emitted in component ${di(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${gn(t)}" instead of "${t}".`)}let l,c=s[l=Jn(t)]||s[l=Jn(nn(t))];!c&&o&&(c=s[l=Jn(gn(t))]),c&&Rt(c,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Rt(u,e,6,r)}}function ip(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!ce(e)){const c=u=>{const f=ip(u,t,!0);f&&(l=!0,He(i,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!l?(Pe(e)&&s.set(e,null),null):(oe(o)?o.forEach(c=>i[c]=null):He(i,o),Pe(e)&&s.set(e,i),i)}function ii(e,t){return!e||!Dr(t)?!1:(t=t.slice(2).replace(/Once$/,""),xe(e,t[0].toLowerCase()+t.slice(1))||xe(e,gn(t))||xe(e,t))}let Je=null,ai=null;function Ao(e){const t=Je;return Je=e,ai=e&&e.type.__scopeId||null,t}function $4(e){ai=e}function T4(){ai=null}function U(e,t=Je,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Sc(-1);const o=Ao(t);let i;try{i=e(...r)}finally{Ao(o),s._d&&Sc(1)}return rp(t),i};return s._n=!0,s._c=!0,s._d=!0,s}let oa=!1;function Mo(){oa=!0}function ki(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:l,attrs:c,emit:u,render:f,renderCache:p,data:d,setupState:m,ctx:g,inheritAttrs:b}=e;let w,k;const x=Ao(e);oa=!1;try{if(n.shapeFlag&4){const S=r||s;w=qt(f.call(S,S,p,o,m,d,g)),k=c}else{const S=t;c===o&&Mo(),w=qt(S.length>1?S(o,{get attrs(){return Mo(),c},slots:l,emit:u}):S(o,null)),k=t.props?c:Pg(c)}}catch(S){fr.length=0,ri(S,e,1),w=Q(pt)}let v=w,T;if(w.patchFlag>0&&w.patchFlag&2048&&([v,T]=Og(w)),k&&b!==!1){const S=Object.keys(k),{shapeFlag:C}=v;if(S.length){if(C&7)i&&S.some(So)&&(k=Ag(k,i)),v=an(v,k);else if(!oa&&v.type!==pt){const R=Object.keys(c),P=[],j=[];for(let ne=0,le=R.length;ne<le;ne++){const W=R[ne];Dr(W)?So(W)||P.push(W[2].toLowerCase()+W.slice(3)):j.push(W)}j.length&&N(`Extraneous non-props attributes (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),P.length&&N(`Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(fc(v)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),v=an(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(fc(v)||N("Component inside <Transition> renders non-element root node that cannot be animated."),v.transition=n.transition),T?T(v):w=v,Ao(x),w}const Og=e=>{const t=e.children,n=e.dynamicChildren,s=ap(t);if(!s)return[e,void 0];const r=t.indexOf(s),o=n?n.indexOf(s):-1,i=l=>{t[r]=l,n&&(o>-1?n[o]=l:l.patchFlag>0&&(e.dynamicChildren=[...n,l]))};return[qt(s),i]};function ap(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(Hn(s)){if(s.type!==pt||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Pg=e=>{let t;for(const n in e)(n==="class"||n==="style"||Dr(n))&&((t||(t={}))[n]=e[n]);return t},Ag=(e,t)=>{const n={};for(const s in e)(!So(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n},fc=e=>e.shapeFlag&7||e.type===pt;function Mg(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:c}=t,u=o.emitsOptions;if((r||l)&&An||t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?pc(s,i,u):!!i;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const d=f[p];if(i[d]!==s[d]&&!ii(u,d))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?pc(s,i,u):!0:!!i;return!1}function pc(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!ii(n,o))return!0}return!1}function Ig({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const lp=e=>e.__isSuspense;function Lg(e,t){t&&t.pendingBranch?oe(e)?t.effects.push(...e):t.effects.push(e):Xf(e)}function bs(e,t){return _l(e,null,t)}const Xr={};function ge(e,t,n){return ce(t)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),_l(e,t,n)}function _l(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=je){var l;t||(n!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=S=>{N("Invalid watch source: ",S,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Qo()===((l=Ze)==null?void 0:l.scope)?Ze:null;let f,p=!1,d=!1;if(Te(e)?(f=()=>e.value,p=Oo(e)):fs(e)?(f=()=>e,s=!0):oe(e)?(d=!0,p=e.some(S=>fs(S)||Oo(S)),f=()=>e.map(S=>{if(Te(S))return S.value;if(fs(S))return is(S);if(ce(S))return mn(S,u,2);c(S)})):ce(e)?t?f=()=>mn(e,u,2):f=()=>{if(!(u&&u.isUnmounted))return m&&m(),Rt(e,u,3,[g])}:(f=_t,c(e)),t&&s){const S=f;f=()=>is(S())}let m,g=S=>{m=v.onStop=()=>{mn(S,u,4)}},b;if(Tr)if(g=_t,t?n&&Rt(t,u,3,[f(),d?[]:void 0,g]):f(),r==="sync"){const S=B_();b=S.__watcherHandles||(S.__watcherHandles=[])}else return _t;let w=d?new Array(e.length).fill(Xr):Xr;const k=()=>{if(v.active)if(t){const S=v.run();(s||p||(d?S.some((C,R)=>kr(C,w[R])):kr(S,w)))&&(m&&m(),Rt(t,u,3,[S,w===Xr?void 0:d&&w[0]===Xr?[]:w,g]),w=S)}else v.run()};k.allowRecurse=!!t;let x;r==="sync"?x=k:r==="post"?x=()=>Xe(k,u&&u.suspense):(k.pre=!0,u&&(k.id=u.uid),x=()=>oi(k));const v=new al(f,x);v.onTrack=o,v.onTrigger=i,t?n?k():w=v.run():r==="post"?Xe(v.run.bind(v),u&&u.suspense):v.run();const T=()=>{v.stop(),u&&u.scope&&el(u.scope.effects,v)};return b&&b.push(T),T}function Rg(e,t,n){const s=this.proxy,r=Ve(e)?e.includes(".")?cp(s,e):()=>s[e]:e.bind(s,s);let o;ce(t)?o=t:(o=t.handler,n=t);const i=Ze;Ns(this);const l=_l(r,o.bind(s),n);return i?Ns(i):hs(),l}function cp(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function is(e,t){if(!Pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Te(e))is(e.value,t);else if(oe(e))for(let n=0;n<e.length;n++)is(e[n],t);else if(Tf(e)||cs(e))e.forEach(n=>{is(n,t)});else if(Of(e))for(const n in e)is(e[n],t);return e}function up(e){am(e)&&N("Do not use built-in directive ids as custom directive id: "+e)}function fp(e,t){const n=Je;if(n===null)return N("withDirectives can only be used inside render functions."),e;const s=pi(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,c,u=je]=t[o];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&is(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:c,modifiers:u}))}return e}function Un(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let c=l.dir[s];c&&(vs(),Rt(c,n,8,[e.el,l,e,t]),ys())}}function Ng(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bn(()=>{e.isMounted=!0}),Br(()=>{e.isUnmounting=!0}),e}const Pt=[Function,Array],Fg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt};function jg(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ia(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:d,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:b,onAppear:w,onAfterAppear:k,onAppearCancelled:x}=t,v=String(e.key),T=jg(n,e),S=(P,j)=>{P&&Rt(P,s,9,j)},C=(P,j)=>{const ne=j[1];S(P,j),oe(P)?P.every(le=>le.length<=1)&&ne():P.length<=1&&ne()},R={mode:o,persisted:i,beforeEnter(P){let j=l;if(!n.isMounted)if(r)j=b||l;else return;P._leaveCb&&P._leaveCb(!0);const ne=T[v];ne&&es(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),S(j,[P])},enter(P){let j=c,ne=u,le=f;if(!n.isMounted)if(r)j=w||c,ne=k||u,le=x||f;else return;let W=!1;const me=P._enterCb=_e=>{W||(W=!0,_e?S(le,[P]):S(ne,[P]),R.delayedLeave&&R.delayedLeave(),P._enterCb=void 0)};j?C(j,[P,me]):me()},leave(P,j){const ne=String(e.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return j();S(p,[P]);let le=!1;const W=P._leaveCb=me=>{le||(le=!0,j(),me?S(g,[P]):S(m,[P]),P._leaveCb=void 0,T[ne]===e&&delete T[ne])};T[ne]=e,d?C(d,[P,W]):W()},clone(P){return ia(P,t,n,s)}};return R}function Io(e,t){e.shapeFlag&6&&e.component?Io(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pp(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Ce?(i.patchFlag&128&&r++,s=s.concat(pp(i.children,t,l))):(t||i.type!==pt)&&s.push(l!=null?an(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Oe(e,t){return ce(e)?(()=>He({name:e.name},t,{setup:e}))():e}const Is=e=>!!e.type.__asyncLoader,vl=e=>e.type.__isKeepAlive,Dg={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=yt(),s=n.ctx;if(!s.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const r=new Map,o=new Set;let i=null;n.__v_cache=r;const l=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:p}}}=s,d=p("div");s.activate=(x,v,T,S,C)=>{const R=x.component;u(x,v,T,0,l),c(R.vnode,x,v,T,R,l,S,x.slotScopeIds,C),Xe(()=>{R.isDeactivated=!1,R.a&&Xn(R.a);const P=x.props&&x.props.onVnodeMounted;P&&At(P,R.parent,x)},l),ra(R)},s.deactivate=x=>{const v=x.component;u(x,d,null,1,l),Xe(()=>{v.da&&Xn(v.da);const T=x.props&&x.props.onVnodeUnmounted;T&&At(T,v.parent,x),v.isDeactivated=!0},l),ra(v)};function m(x){xi(x),f(x,n,l,!0)}function g(x){r.forEach((v,T)=>{const S=Cr(v.type);S&&(!x||!x(S))&&b(T)})}function b(x){const v=r.get(x);!i||!es(v,i)?m(v):i&&xi(i),r.delete(x),o.delete(x)}ge(()=>[e.include,e.exclude],([x,v])=>{x&&g(T=>ir(x,T)),v&&g(T=>!ir(v,T))},{flush:"post",deep:!0});let w=null;const k=()=>{w!=null&&r.set(w,Si(n.subTree))};return bn(k),ci(k),Br(()=>{r.forEach(x=>{const{subTree:v,suspense:T}=n,S=Si(v);if(x.type===S.type&&x.key===S.key){xi(S);const C=S.component.da;C&&Xe(C,T);return}m(x)})}),()=>{if(w=null,!t.default)return null;const x=t.default(),v=x[0];if(x.length>1)return N("KeepAlive should contain exactly one component child."),i=null,x;if(!Hn(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return i=null,v;let T=Si(v);const S=T.type,C=Cr(Is(T)?T.type.__asyncResolved||{}:S),{include:R,exclude:P,max:j}=e;if(R&&(!C||!ir(R,C))||P&&C&&ir(P,C))return i=T,v;const ne=T.key==null?S:T.key,le=r.get(ne);return T.el&&(T=an(T),v.shapeFlag&128&&(v.ssContent=T)),w=ne,le?(T.el=le.el,T.component=le.component,T.transition&&Io(T,T.transition),T.shapeFlag|=512,o.delete(ne),o.add(ne)):(o.add(ne),j&&o.size>parseInt(j,10)&&b(o.values().next().value)),T.shapeFlag|=256,i=T,lp(v.type)?v:T}}},dp=Dg;function ir(e,t){return oe(e)?e.some(n=>ir(n,t)):Ve(e)?e.split(",").includes(t):im(e)?e.test(t):!1}function hp(e,t){gp(e,"a",t)}function mp(e,t){gp(e,"da",t)}function gp(e,t,n=Ze){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(li(t,s,n),n){let r=n.parent;for(;r&&r.parent;)vl(r.parent.vnode)&&Hg(s,t,n,r),r=r.parent}}function Hg(e,t,n,s){const r=li(t,e,s,!0);ui(()=>{el(s[t],r)},n)}function xi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Si(e){return e.shapeFlag&128?e.ssContent:e}function li(e,t,n=Ze,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;vs(),Ns(n);const l=Rt(t,n,e,i);return hs(),ys(),l});return s?r.unshift(o):r.push(o),o}else{const r=Jn(dl[e].replace(/ hook$/,""));N(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const yn=e=>(t,n=Ze)=>(!Tr||e==="sp")&&li(e,(...s)=>t(...s),n),Vg=yn("bm"),bn=yn("m"),Bg=yn("bu"),ci=yn("u"),Br=yn("bum"),ui=yn("um"),qg=yn("sp"),Wg=yn("rtg"),zg=yn("rtc");function Ug(e,t=Ze){li("ec",e,t)}const aa="components";function Lo(e,t){return Yg(aa,e,!0,t)||e}const Kg=Symbol.for("v-ndc");function Yg(e,t,n=!0,s=!1){const r=Je||Ze;if(r){const o=r.type;if(e===aa){const l=Cr(o,!1);if(l&&(l===t||l===nn(t)||l===gs(nn(t))))return o}const i=dc(r[e]||o[e],t)||dc(r.appContext[e],t);if(!i&&s)return o;if(n&&!i){const l=e===aa?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${e.slice(0,-1)}: ${t}${l}`)}return i}else N(`resolve${gs(e.slice(0,-1))} can only be used in render() or setup().`)}function dc(e,t){return e&&(e[t]||e[nn(t)]||e[gs(nn(t))])}function Hs(e,t,n,s){let r;const o=n&&n[s];if(oe(e)||Ve(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){Number.isInteger(e)||N(`The v-for range expect an integer value but got ${e}.`),r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(Pe(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];r[l]=t(e[u],u,l,o&&o[l])}}else r=[];return n&&(n[s]=r),r}function Nt(e,t,n={},s,r){if(Je.isCE||Je.parent&&Is(Je.parent)&&Je.parent.isCE)return t!=="default"&&(n.name=t),Q("slot",n,s&&s());let o=e[t];o&&o.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),o=()=>[]),o&&o._c&&(o._d=!1),E();const i=o&&_p(o(n)),l=z(Ce,{key:n.key||i&&i.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function _p(e){return e.some(t=>Hn(t)?!(t.type===pt||t.type===Ce&&!_p(t.children)):!0)?e:null}const la=e=>e?Ap(e)?pi(e)||e.proxy:la(e.parent):null,ds=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>rr(e.props),$attrs:e=>rr(e.attrs),$slots:e=>rr(e.slots),$refs:e=>rr(e.refs),$parent:e=>la(e.parent),$root:e=>la(e.root),$emit:e=>e.emit,$options:e=>bl(e),$forceUpdate:e=>e.f||(e.f=()=>oi(e.update)),$nextTick:e=>e.n||(e.n=et.bind(e.proxy)),$watch:e=>Rg.bind(e)}),yl=e=>e==="_"||e==="$",Ei=(e,t)=>e!==je&&!e.__isScriptSetup&&xe(e,t),vp={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:c}=e;if(t==="__isVue")return!0;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(Ei(s,t))return i[t]=1,s[t];if(r!==je&&xe(r,t))return i[t]=2,r[t];if((u=e.propsOptions[0])&&xe(u,t))return i[t]=3,o[t];if(n!==je&&xe(n,t))return i[t]=4,n[t];ca&&(i[t]=0)}}const f=ds[t];let p,d;if(f)return t==="$attrs"?(it(e,"get",t),Mo()):t==="$slots"&&it(e,"get",t),f(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==je&&xe(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,xe(d,t))return d[t];Je&&(!Ve(t)||t.indexOf("__v")!==0)&&(r!==je&&yl(t[0])&&xe(r,t)?N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Je&&N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return Ei(r,t)?(r[t]=n,!0):r.__isScriptSetup&&xe(r,t)?(N(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==je&&xe(s,t)?(s[t]=n,!0):xe(e.props,t)?(N(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(o,t,{enumerable:!0,configurable:!0,value:n}):o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==je&&xe(e,i)||Ei(t,i)||(l=o[0])&&xe(l,i)||xe(s,i)||xe(ds,i)||xe(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:xe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};vp.ownKeys=e=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Gg(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(ds).forEach(n=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,get:()=>ds[n](e),set:_t})}),t}function Zg(e){const{ctx:t,propsOptions:[n]}=e;n&&Object.keys(n).forEach(s=>{Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>e.props[s],set:_t})})}function Jg(e){const{ctx:t,setupState:n}=e;Object.keys(he(n)).forEach(s=>{if(!n.__isScriptSetup){if(yl(s[0])){N(`setup() return property ${JSON.stringify(s)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n[s],set:_t})}})}function Qg(){return Xg().slots}function Xg(){const e=yt();return e||N("useContext() called without active instance."),e.setupContext||(e.setupContext=Ip(e))}function hc(e){return oe(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function e_(){const e=Object.create(null);return(t,n)=>{e[n]?N(`${t} property "${n}" is already defined in ${e[n]}.`):e[n]=t}}let ca=!0;function t_(e){const t=bl(e),n=e.proxy,s=e.ctx;ca=!1,t.beforeCreate&&mc(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:d,beforeUpdate:m,updated:g,activated:b,deactivated:w,beforeDestroy:k,beforeUnmount:x,destroyed:v,unmounted:T,render:S,renderTracked:C,renderTriggered:R,errorCaptured:P,serverPrefetch:j,expose:ne,inheritAttrs:le,components:W,directives:me,filters:_e}=t,ye=e_();{const[X]=e.propsOptions;if(X)for(const ie in X)ye("Props",ie)}if(u&&n_(u,s,ye),i)for(const X in i){const ie=i[X];ce(ie)?(Object.defineProperty(s,X,{value:ie.bind(n),configurable:!0,enumerable:!0,writable:!0}),ye("Methods",X)):N(`Method "${X}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(r){ce(r)||N("The data option must be a function. Plain object usage is no longer supported.");const X=r.call(n,n);if(nl(X)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Pe(X))N("data() should return an object.");else{e.data=qe(X);for(const ie in X)ye("Data",ie),yl(ie[0])||Object.defineProperty(s,ie,{configurable:!0,enumerable:!0,get:()=>X[ie],set:_t})}}if(ca=!0,o)for(const X in o){const ie=o[X],ke=ce(ie)?ie.bind(n,n):ce(ie.get)?ie.get.bind(n,n):_t;ke===_t&&N(`Computed property "${X}" has no getter.`);const Me=!ce(ie)&&ce(ie.set)?ie.set.bind(n):()=>{N(`Write operation failed: computed property "${X}" is readonly.`)},Ct=A({get:ke,set:Me});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:st=>Ct.value=st}),ye("Computed",X)}if(l)for(const X in l)yp(l[X],s,n,X);if(c){const X=ce(c)?c.call(n):c;Reflect.ownKeys(X).forEach(ie=>{xt(ie,X[ie])})}f&&mc(f,e,"c");function Re(X,ie){oe(ie)?ie.forEach(ke=>X(ke.bind(n))):ie&&X(ie.bind(n))}if(Re(Vg,p),Re(bn,d),Re(Bg,m),Re(ci,g),Re(hp,b),Re(mp,w),Re(Ug,P),Re(zg,C),Re(Wg,R),Re(Br,x),Re(ui,T),Re(qg,j),oe(ne))if(ne.length){const X=e.exposed||(e.exposed={});ne.forEach(ie=>{Object.defineProperty(X,ie,{get:()=>n[ie],set:ke=>n[ie]=ke})})}else e.exposed||(e.exposed={});S&&e.render===_t&&(e.render=S),le!=null&&(e.inheritAttrs=le),W&&(e.components=W),me&&(e.directives=me)}function n_(e,t,n=_t){oe(e)&&(e=ua(e));for(const s in e){const r=e[s];let o;Pe(r)?"default"in r?o=H(r.from||s,r.default,!0):o=H(r.from||s):o=H(r),Te(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o,n("Inject",s)}}function mc(e,t,n){Rt(oe(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function yp(e,t,n,s){const r=s.includes(".")?cp(n,s):()=>n[s];if(Ve(e)){const o=t[e];ce(o)?ge(r,o):N(`Invalid watch handler specified by key "${e}"`,o)}else if(ce(e))ge(r,e.bind(n));else if(Pe(e))if(oe(e))e.forEach(o=>yp(o,t,n,s));else{const o=ce(e.handler)?e.handler.bind(n):t[e.handler];ce(o)?ge(r,o,e):N(`Invalid watch handler specified by key "${e.handler}"`,o)}else N(`Invalid watch option: "${s}"`,e)}function bl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>Ro(c,u,i,!0)),Ro(c,t,i)),Pe(t)&&o.set(t,c),c}function Ro(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&Ro(e,o,n,!0),r&&r.forEach(i=>Ro(e,i,n,!0));for(const i in t)if(s&&i==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=s_[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const s_={data:gc,props:_c,emits:_c,methods:ar,computed:ar,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:ar,directives:ar,watch:o_,provide:gc,inject:r_};function gc(e,t){return t?e?function(){return He(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function r_(e,t){return ar(ua(e),ua(t))}function ua(e){if(oe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function lt(e,t){return e?[...new Set([].concat(e,t))]:t}function ar(e,t){return e?He(Object.create(null),e,t):t}function _c(e,t){return e?oe(e)&&oe(t)?[...new Set([...e,...t])]:He(Object.create(null),hc(e),hc(t??{})):t}function o_(e,t){if(!e)return t;if(!t)return e;const n=He(Object.create(null),e);for(const s in t)n[s]=lt(e[s],t[s]);return n}function bp(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i_=0;function a_(e,t){return function(s,r=null){ce(s)||(s=He({},s)),r!=null&&!Pe(r)&&(N("root props passed to app.mount() must be an object."),r=null);const o=bp();Object.defineProperty(o.config,"unwrapInjectedRef",{get(){return!0},set(){N("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const i=new Set;let l=!1;const c=o.app={_uid:i_++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Do,get config(){return o.config},set config(u){N("app.config cannot be replaced. Modify individual options instead.")},use(u,...f){return i.has(u)?N("Plugin has already been applied to target app."):u&&ce(u.install)?(i.add(u),u.install(c,...f)):ce(u)?(i.add(u),u(c,...f)):N('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return o.mixins.includes(u)?N("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):o.mixins.push(u),c},component(u,f){return ma(u,o.config),f?(o.components[u]&&N(`Component "${u}" has already been registered in target app.`),o.components[u]=f,c):o.components[u]},directive(u,f){return up(u),f?(o.directives[u]&&N(`Directive "${u}" has already been registered in target app.`),o.directives[u]=f,c):o.directives[u]},mount(u,f,p){if(l)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Q(s,r);return d.appContext=o,o.reload=()=>{e(an(d),u,p)},f&&t?t(d,u):e(d,u,p),l=!0,c._container=u,u.__vue_app__=c,c._instance=d.component,wg(c,Do),pi(d.component)||d.component.proxy}},unmount(){l?(e(null,c._container),c._instance=null,kg(c),delete c._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(u,f){return u in o.provides&&N(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),o.provides[u]=f,c},runWithContext(u){No=c;try{return u()}finally{No=null}}};return c}}let No=null;function xt(e,t){if(!Ze)N("provide() can only be used inside setup().");else{let n=Ze.provides;const s=Ze.parent&&Ze.parent.provides;s===n&&(n=Ze.provides=Object.create(s)),n[e]=t}}function H(e,t,n=!1){const s=Ze||Je;if(s||No){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:No._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ce(t)?t.call(s&&s.proxy):t;N(`injection "${String(e)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function l_(e,t,n,s=!1){const r={},o={};Eo(o,fi,1),e.propsDefaults=Object.create(null),wp(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);xp(t||{},r,e),n?e.props=s?r:Jm(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function c_(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function u_(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=he(r),[c]=e.propsOptions;let u=!1;if(!c_(e)&&(s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let d=f[p];if(ii(e.emitsOptions,d))continue;const m=t[d];if(c)if(xe(o,d))m!==o[d]&&(o[d]=m,u=!0);else{const g=nn(d);r[g]=fa(c,l,g,m,e,!1)}else m!==o[d]&&(o[d]=m,u=!0)}}}else{wp(e,t,r,o)&&(u=!0);let f;for(const p in l)(!t||!xe(t,p)&&((f=gn(p))===p||!xe(t,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=fa(c,l,p,void 0,e,!0)):delete r[p]);if(o!==l)for(const p in o)(!t||!xe(t,p))&&(delete o[p],u=!0)}u&&rn(e,"set","$attrs"),xp(t||{},r,e)}function wp(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(po(c))continue;const u=t[c];let f;r&&xe(r,f=nn(c))?!o||!o.includes(f)?n[f]=u:(l||(l={}))[f]=u:ii(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(o){const c=he(n),u=l||je;for(let f=0;f<o.length;f++){const p=o[f];n[p]=fa(r,c,p,u[p],e,!xe(u,p))}}return i}function fa(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=xe(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&ce(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ns(r),s=u[n]=c.call(null,t),hs())}else s=c}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===gn(n))&&(s=!0))}return s}function kp(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let c=!1;if(!ce(e)){const f=p=>{c=!0;const[d,m]=kp(p,t,!0);He(i,d),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!c)return Pe(e)&&s.set(e,As),As;if(oe(o))for(let f=0;f<o.length;f++){Ve(o[f])||N("props must be strings when using array syntax.",o[f]);const p=nn(o[f]);vc(p)&&(i[p]=je)}else if(o){Pe(o)||N("invalid props options",o);for(const f in o){const p=nn(f);if(vc(p)){const d=o[f],m=i[p]=oe(d)||ce(d)?{type:d}:He({},d);if(m){const g=bc(Boolean,m.type),b=bc(String,m.type);m[0]=g>-1,m[1]=b<0||g<b,(g>-1||xe(m,"default"))&&l.push(p)}}}}const u=[i,l];return Pe(e)&&s.set(e,u),u}function vc(e){return e[0]!=="$"?!0:(N(`Invalid prop name: "${e}" is a reserved property.`),!1)}function pa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function yc(e,t){return pa(e)===pa(t)}function bc(e,t){return oe(t)?t.findIndex(n=>yc(n,e)):ce(t)&&yc(t,e)?0:-1}function xp(e,t,n){const s=he(t),r=n.propsOptions[0];for(const o in r){let i=r[o];i!=null&&f_(o,s[o],i,!xe(e,o)&&!xe(e,gn(o)))}}function f_(e,t,n,s){const{type:r,required:o,validator:i,skipCheck:l}=n;if(o&&s){N('Missing required prop: "'+e+'"');return}if(!(t==null&&!o)){if(r!=null&&r!==!0&&!l){let c=!1;const u=oe(r)?r:[r],f=[];for(let p=0;p<u.length&&!c;p++){const{valid:d,expectedType:m}=d_(t,u[p]);f.push(m||""),c=d}if(!c){N(h_(e,t,f));return}}i&&!i(t)&&N('Invalid prop: custom validator check failed for prop "'+e+'".')}}const p_=Bn("String,Number,Boolean,Function,Symbol,BigInt");function d_(e,t){let n;const s=pa(t);if(p_(s)){const r=typeof e;n=r===s.toLowerCase(),!n&&r==="object"&&(n=e instanceof t)}else s==="Object"?n=Pe(e):s==="Array"?n=oe(e):s==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:s}}function h_(e,t,n){let s=`Invalid prop: type check failed for prop "${e}". Expected ${n.map(gs).join(" | ")}`;const r=n[0],o=sl(t),i=wc(t,r),l=wc(t,o);return n.length===1&&kc(r)&&!m_(r,o)&&(s+=` with value ${i}`),s+=`, got ${o} `,kc(o)&&(s+=`with value ${l}.`),s}function wc(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function kc(e){return["string","number","boolean"].some(n=>e.toLowerCase()===n)}function m_(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Sp=e=>e[0]==="_"||e==="$stable",wl=e=>oe(e)?e.map(qt):[qt(e)],g_=(e,t,n)=>{if(t._n)return t;const s=U((...r)=>(Ze&&N(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),wl(t(...r))),n);return s._c=!1,s},Ep=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Sp(r))continue;const o=e[r];if(ce(o))t[r]=g_(r,o,s);else if(o!=null){N(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const i=wl(o);t[r]=()=>i}}},$p=(e,t)=>{vl(e.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=wl(t);e.slots.default=()=>n},__=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=he(t),Eo(t,"_",n)):Ep(t,e.slots={})}else e.slots={},t&&$p(e,t);Eo(e.slots,fi,1)},v_=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=je;if(s.shapeFlag&32){const l=t._;l?An?(He(r,t),rn(e,"set","$slots")):n&&l===1?o=!1:(He(r,t),!n&&l===1&&delete r._):(o=!t.$stable,Ep(t,r)),i=t}else t&&($p(e,t),i={default:1});if(o)for(const l in r)!Sp(l)&&!(l in i)&&delete r[l]};function da(e,t,n,s,r=!1){if(oe(e)){e.forEach((d,m)=>da(d,t&&(oe(t)?t[m]:t),n,s,r));return}if(Is(s)&&!r)return;const o=s.shapeFlag&4?pi(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:c}=e;if(!l){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=t&&t.r,f=l.refs===je?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==c&&(Ve(u)?(f[u]=null,xe(p,u)&&(p[u]=null)):Te(u)&&(u.value=null)),ce(c))mn(c,l,12,[i,f]);else{const d=Ve(c),m=Te(c);if(d||m){const g=()=>{if(e.f){const b=d?xe(p,c)?p[c]:f[c]:c.value;r?oe(b)&&el(b,o):oe(b)?b.includes(o)||b.push(o):d?(f[c]=[o],xe(p,c)&&(p[c]=f[c])):(c.value=[o],e.k&&(f[e.k]=c.value))}else d?(f[c]=i,xe(p,c)&&(p[c]=i)):m?(c.value=i,e.k&&(f[e.k]=i)):N("Invalid template ref type:",c,`(${typeof c})`)};i?(g.id=-1,Xe(g,n)):g()}else N("Invalid template ref type:",c,`(${typeof c})`)}}let zs,Cn;function cn(e,t){e.appContext.config.performance&&Fo()&&Cn.mark(`vue-${t}-${e.uid}`),Eg(e,t,Fo()?Cn.now():Date.now())}function un(e,t){if(e.appContext.config.performance&&Fo()){const n=`vue-${t}-${e.uid}`,s=n+":end";Cn.mark(s),Cn.measure(`<${di(e,e.type)}> ${t}`,n,s),Cn.clearMarks(n),Cn.clearMarks(s)}$g(e,t,Fo()?Cn.now():Date.now())}function Fo(){return zs!==void 0||(typeof window<"u"&&window.performance?(zs=!0,Cn=window.performance):zs=!1),zs}function y_(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Xe=Lg;function b_(e){return w_(e)}function w_(e,t){y_();const n=$o();n.__VUE__=!0,sp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:d,setScopeId:m=_t,insertStaticContent:g}=e,b=(_,y,$,L=null,I=null,V=null,Y=!1,D=null,B=An?!1:!!y.dynamicChildren)=>{if(_===y)return;_&&!es(_,y)&&(L=K(_),ht(_,I,V,!0),_=null),y.patchFlag===-2&&(B=!1,y.dynamicChildren=null);const{type:F,ref:re,shapeFlag:se}=y;switch(F){case qr:w(_,y,$,L);break;case pt:k(_,y,$,L);break;case go:_==null?x(y,$,L,Y):v(_,y,$,Y);break;case Ce:me(_,y,$,L,I,V,Y,D,B);break;default:se&1?C(_,y,$,L,I,V,Y,D,B):se&6?_e(_,y,$,L,I,V,Y,D,B):se&64||se&128?F.process(_,y,$,L,I,V,Y,D,B,ee):N("Invalid VNode type:",F,`(${typeof F})`)}re!=null&&I&&da(re,_&&_.ref,V,y||_,!y)},w=(_,y,$,L)=>{if(_==null)s(y.el=l(y.children),$,L);else{const I=y.el=_.el;y.children!==_.children&&u(I,y.children)}},k=(_,y,$,L)=>{_==null?s(y.el=c(y.children||""),$,L):y.el=_.el},x=(_,y,$,L)=>{[_.el,_.anchor]=g(_.children,y,$,L,_.el,_.anchor)},v=(_,y,$,L)=>{if(y.children!==_.children){const I=d(_.anchor);S(_),[y.el,y.anchor]=g(y.children,$,I,L)}else y.el=_.el,y.anchor=_.anchor},T=({el:_,anchor:y},$,L)=>{let I;for(;_&&_!==y;)I=d(_),s(_,$,L),_=I;s(y,$,L)},S=({el:_,anchor:y})=>{let $;for(;_&&_!==y;)$=d(_),r(_),_=$;r(y)},C=(_,y,$,L,I,V,Y,D,B)=>{Y=Y||y.type==="svg",_==null?R(y,$,L,I,V,Y,D,B):ne(_,y,I,V,Y,D,B)},R=(_,y,$,L,I,V,Y,D)=>{let B,F;const{type:re,props:se,shapeFlag:ae,transition:de,dirs:Se}=_;if(B=_.el=i(_.type,V,se&&se.is,se),ae&8?f(B,_.children):ae&16&&j(_.children,B,null,L,I,V&&re!=="foreignObject",Y,D),Se&&Un(_,null,L,"created"),P(B,_,_.scopeId,Y,L),se){for(const Fe in se)Fe!=="value"&&!po(Fe)&&o(B,Fe,null,se[Fe],V,_.children,L,I,O);"value"in se&&o(B,"value",null,se.value),(F=se.onVnodeBeforeMount)&&At(F,L,_)}Object.defineProperty(B,"__vnode",{value:_,enumerable:!1}),Object.defineProperty(B,"__vueParentComponent",{value:L,enumerable:!1}),Se&&Un(_,null,L,"beforeMount");const De=(!I||I&&!I.pendingBranch)&&de&&!de.persisted;De&&de.beforeEnter(B),s(B,y,$),((F=se&&se.onVnodeMounted)||De||Se)&&Xe(()=>{F&&At(F,L,_),De&&de.enter(B),Se&&Un(_,null,L,"mounted")},I)},P=(_,y,$,L,I)=>{if($&&m(_,$),L)for(let V=0;V<L.length;V++)m(_,L[V]);if(I){let V=I.subTree;if(V.patchFlag>0&&V.patchFlag&2048&&(V=ap(V.children)||V),y===V){const Y=I.vnode;P(_,Y,Y.scopeId,Y.slotScopeIds,I.parent)}}},j=(_,y,$,L,I,V,Y,D,B=0)=>{for(let F=B;F<_.length;F++){const re=_[F]=D?$n(_[F]):qt(_[F]);b(null,re,y,$,L,I,V,Y,D)}},ne=(_,y,$,L,I,V,Y)=>{const D=y.el=_.el;let{patchFlag:B,dynamicChildren:F,dirs:re}=y;B|=_.patchFlag&16;const se=_.props||je,ae=y.props||je;let de;$&&Kn($,!1),(de=ae.onVnodeBeforeUpdate)&&At(de,$,y,_),re&&Un(y,_,$,"beforeUpdate"),$&&Kn($,!0),An&&(B=0,Y=!1,F=null);const Se=I&&y.type!=="foreignObject";if(F?(le(_.dynamicChildren,F,D,$,L,Se,V),jo(_,y)):Y||ke(_,y,D,null,$,L,Se,V,!1),B>0){if(B&16)W(D,y,se,ae,$,L,I);else if(B&2&&se.class!==ae.class&&o(D,"class",null,ae.class,I),B&4&&o(D,"style",se.style,ae.style,I),B&8){const De=y.dynamicProps;for(let Fe=0;Fe<De.length;Fe++){const Ue=De[Fe],Dt=se[Ue],Ss=ae[Ue];(Ss!==Dt||Ue==="value")&&o(D,Ue,Dt,Ss,I,_.children,$,L,O)}}B&1&&_.children!==y.children&&f(D,y.children)}else!Y&&F==null&&W(D,y,se,ae,$,L,I);((de=ae.onVnodeUpdated)||re)&&Xe(()=>{de&&At(de,$,y,_),re&&Un(y,_,$,"updated")},L)},le=(_,y,$,L,I,V,Y)=>{for(let D=0;D<y.length;D++){const B=_[D],F=y[D],re=B.el&&(B.type===Ce||!es(B,F)||B.shapeFlag&70)?p(B.el):$;b(B,F,re,null,L,I,V,Y,!0)}},W=(_,y,$,L,I,V,Y)=>{if($!==L){if($!==je)for(const D in $)!po(D)&&!(D in L)&&o(_,D,$[D],null,Y,y.children,I,V,O);for(const D in L){if(po(D))continue;const B=L[D],F=$[D];B!==F&&D!=="value"&&o(_,D,F,B,Y,y.children,I,V,O)}"value"in L&&o(_,"value",$.value,L.value)}},me=(_,y,$,L,I,V,Y,D,B)=>{const F=y.el=_?_.el:l(""),re=y.anchor=_?_.anchor:l("");let{patchFlag:se,dynamicChildren:ae,slotScopeIds:de}=y;(An||se&2048)&&(se=0,B=!1,ae=null),de&&(D=D?D.concat(de):de),_==null?(s(F,$,L),s(re,$,L),j(y.children,$,re,I,V,Y,D,B)):se>0&&se&64&&ae&&_.dynamicChildren?(le(_.dynamicChildren,ae,$,I,V,Y,D),jo(_,y)):ke(_,y,$,re,I,V,Y,D,B)},_e=(_,y,$,L,I,V,Y,D,B)=>{y.slotScopeIds=D,_==null?y.shapeFlag&512?I.ctx.activate(y,$,L,Y,B):ye(y,$,L,I,V,Y,B):Re(_,y,B)},ye=(_,y,$,L,I,V,Y)=>{const D=_.component=M_(_,L,I);if(D.type.__hmrId&&_g(D),ho(_),cn(D,"mount"),vl(_)&&(D.ctx.renderer=ee),cn(D,"init"),L_(D),un(D,"init"),D.asyncDep){if(I&&I.registerDep(D,X),!_.el){const B=D.subTree=Q(pt);k(null,B,y,$)}return}X(D,_,y,$,I,V,Y),mo(),un(D,"mount")},Re=(_,y,$)=>{const L=y.component=_.component;if(Mg(_,y,$))if(L.asyncDep&&!L.asyncResolved){ho(y),ie(L,y,$),mo();return}else L.next=y,mg(L.update),L.update();else y.el=_.el,L.vnode=y},X=(_,y,$,L,I,V,Y)=>{const D=()=>{if(_.isMounted){let{next:re,bu:se,u:ae,parent:de,vnode:Se}=_,De=re,Fe;ho(re||_.vnode),Kn(_,!1),re?(re.el=Se.el,ie(_,re,Y)):re=Se,se&&Xn(se),(Fe=re.props&&re.props.onVnodeBeforeUpdate)&&At(Fe,de,re,Se),Kn(_,!0),cn(_,"render");const Ue=ki(_);un(_,"render");const Dt=_.subTree;_.subTree=Ue,cn(_,"patch"),b(Dt,Ue,p(Dt.el),K(Dt),_,I,V),un(_,"patch"),re.el=Ue.el,De===null&&Ig(_,Ue.el),ae&&Xe(ae,I),(Fe=re.props&&re.props.onVnodeUpdated)&&Xe(()=>At(Fe,de,re,Se),I),rp(_),mo()}else{let re;const{el:se,props:ae}=y,{bm:de,m:Se,parent:De}=_,Fe=Is(y);if(Kn(_,!1),de&&Xn(de),!Fe&&(re=ae&&ae.onVnodeBeforeMount)&&At(re,De,y),Kn(_,!0),se&&Ne){const Ue=()=>{cn(_,"render"),_.subTree=ki(_),un(_,"render"),cn(_,"hydrate"),Ne(se,_.subTree,_,I,null),un(_,"hydrate")};Fe?y.type.__asyncLoader().then(()=>!_.isUnmounted&&Ue()):Ue()}else{cn(_,"render");const Ue=_.subTree=ki(_);un(_,"render"),cn(_,"patch"),b(null,Ue,$,L,_,I,V),un(_,"patch"),y.el=Ue.el}if(Se&&Xe(Se,I),!Fe&&(re=ae&&ae.onVnodeMounted)){const Ue=y;Xe(()=>At(re,De,Ue),I)}(y.shapeFlag&256||De&&Is(De.vnode)&&De.vnode.shapeFlag&256)&&_.a&&Xe(_.a,I),_.isMounted=!0,ra(_),y=$=L=null}},B=_.effect=new al(D,()=>oi(F),_.scope),F=_.update=()=>B.run();F.id=_.uid,Kn(_,!0),B.onTrack=_.rtc?re=>Xn(_.rtc,re):void 0,B.onTrigger=_.rtg?re=>Xn(_.rtg,re):void 0,F.ownerInstance=_,F()},ie=(_,y,$)=>{y.component=_;const L=_.vnode.props;_.vnode=y,_.next=null,u_(_,y.props,L,$),v_(_,y.children,$),vs(),cc(),ys()},ke=(_,y,$,L,I,V,Y,D,B=!1)=>{const F=_&&_.children,re=_?_.shapeFlag:0,se=y.children,{patchFlag:ae,shapeFlag:de}=y;if(ae>0){if(ae&128){Ct(F,se,$,L,I,V,Y,D,B);return}else if(ae&256){Me(F,se,$,L,I,V,Y,D,B);return}}de&8?(re&16&&O(F,I,V),se!==F&&f($,se)):re&16?de&16?Ct(F,se,$,L,I,V,Y,D,B):O(F,I,V,!0):(re&8&&f($,""),de&16&&j(se,$,L,I,V,Y,D,B))},Me=(_,y,$,L,I,V,Y,D,B)=>{_=_||As,y=y||As;const F=_.length,re=y.length,se=Math.min(F,re);let ae;for(ae=0;ae<se;ae++){const de=y[ae]=B?$n(y[ae]):qt(y[ae]);b(_[ae],de,$,null,I,V,Y,D,B)}F>re?O(_,I,V,!0,!1,se):j(y,$,L,I,V,Y,D,B,se)},Ct=(_,y,$,L,I,V,Y,D,B)=>{let F=0;const re=y.length;let se=_.length-1,ae=re-1;for(;F<=se&&F<=ae;){const de=_[F],Se=y[F]=B?$n(y[F]):qt(y[F]);if(es(de,Se))b(de,Se,$,null,I,V,Y,D,B);else break;F++}for(;F<=se&&F<=ae;){const de=_[se],Se=y[ae]=B?$n(y[ae]):qt(y[ae]);if(es(de,Se))b(de,Se,$,null,I,V,Y,D,B);else break;se--,ae--}if(F>se){if(F<=ae){const de=ae+1,Se=de<re?y[de].el:L;for(;F<=ae;)b(null,y[F]=B?$n(y[F]):qt(y[F]),$,Se,I,V,Y,D,B),F++}}else if(F>ae)for(;F<=se;)ht(_[F],I,V,!0),F++;else{const de=F,Se=F,De=new Map;for(F=Se;F<=ae;F++){const at=y[F]=B?$n(y[F]):qt(y[F]);at.key!=null&&(De.has(at.key)&&N("Duplicate keys found during update:",JSON.stringify(at.key),"Make sure keys are unique."),De.set(at.key,F))}let Fe,Ue=0;const Dt=ae-Se+1;let Ss=!1,Ql=0;const Ws=new Array(Dt);for(F=0;F<Dt;F++)Ws[F]=0;for(F=de;F<=se;F++){const at=_[F];if(Ue>=Dt){ht(at,I,V,!0);continue}let Gt;if(at.key!=null)Gt=De.get(at.key);else for(Fe=Se;Fe<=ae;Fe++)if(Ws[Fe-Se]===0&&es(at,y[Fe])){Gt=Fe;break}Gt===void 0?ht(at,I,V,!0):(Ws[Gt-Se]=F+1,Gt>=Ql?Ql=Gt:Ss=!0,b(at,y[Gt],$,null,I,V,Y,D,B),Ue++)}const Xl=Ss?k_(Ws):As;for(Fe=Xl.length-1,F=Dt-1;F>=0;F--){const at=Se+F,Gt=y[at],ec=at+1<re?y[at+1].el:L;Ws[F]===0?b(null,Gt,$,ec,I,V,Y,D,B):Ss&&(Fe<0||F!==Xl[Fe]?st(Gt,$,ec,2):Fe--)}}},st=(_,y,$,L,I=null)=>{const{el:V,type:Y,transition:D,children:B,shapeFlag:F}=_;if(F&6){st(_.component.subTree,y,$,L);return}if(F&128){_.suspense.move(y,$,L);return}if(F&64){Y.move(_,y,$,ee);return}if(Y===Ce){s(V,y,$);for(let se=0;se<B.length;se++)st(B[se],y,$,L);s(_.anchor,y,$);return}if(Y===go){T(_,y,$);return}if(L!==2&&F&1&&D)if(L===0)D.beforeEnter(V),s(V,y,$),Xe(()=>D.enter(V),I);else{const{leave:se,delayLeave:ae,afterLeave:de}=D,Se=()=>s(V,y,$),De=()=>{se(V,()=>{Se(),de&&de()})};ae?ae(V,Se,De):De()}else s(V,y,$)},ht=(_,y,$,L=!1,I=!1)=>{const{type:V,props:Y,ref:D,children:B,dynamicChildren:F,shapeFlag:re,patchFlag:se,dirs:ae}=_;if(D!=null&&da(D,null,$,_,!0),re&256){y.ctx.deactivate(_);return}const de=re&1&&ae,Se=!Is(_);let De;if(Se&&(De=Y&&Y.onVnodeBeforeUnmount)&&At(De,y,_),re&6)Ot(_.component,$,L);else{if(re&128){_.suspense.unmount($,L);return}de&&Un(_,null,y,"beforeUnmount"),re&64?_.type.remove(_,y,$,I,ee,L):F&&(V!==Ce||se>0&&se&64)?O(F,y,$,!1,!0):(V===Ce&&se&384||!I&&re&16)&&O(B,y,$),L&&Yt(_)}(Se&&(De=Y&&Y.onVnodeUnmounted)||de)&&Xe(()=>{De&&At(De,y,_),de&&Un(_,null,y,"unmounted")},$)},Yt=_=>{const{type:y,el:$,anchor:L,transition:I}=_;if(y===Ce){_.patchFlag>0&&_.patchFlag&2048&&I&&!I.persisted?_.children.forEach(Y=>{Y.type===pt?r(Y.el):Yt(Y)}):zn($,L);return}if(y===go){S(_);return}const V=()=>{r($),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(_.shapeFlag&1&&I&&!I.persisted){const{leave:Y,delayLeave:D}=I,B=()=>Y($,V);D?D(_.el,V,B):B()}else V()},zn=(_,y)=>{let $;for(;_!==y;)$=d(_),r(_),_=$;r(y)},Ot=(_,y,$)=>{_.type.__hmrId&&vg(_);const{bum:L,scope:I,update:V,subTree:Y,um:D}=_;L&&Xn(L),I.stop(),V&&(V.active=!1,ht(Y,_,y,$)),D&&Xe(D,y),Xe(()=>{_.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve()),Sg(_)},O=(_,y,$,L=!1,I=!1,V=0)=>{for(let Y=V;Y<_.length;Y++)ht(_[Y],y,$,L,I)},K=_=>_.shapeFlag&6?K(_.component.subTree):_.shapeFlag&128?_.suspense.next():d(_.anchor||_.el),G=(_,y,$)=>{_==null?y._vnode&&ht(y._vnode,null,null,!0):b(y._vnode||null,_,y,null,null,null,$),cc(),ep(),y._vnode=_},ee={p:b,um:ht,m:st,r:Yt,mt:ye,mc:j,pc:ke,pbc:le,n:K,o:e};let be,Ne;return t&&([be,Ne]=t(ee)),{render:G,hydrate:be,createApp:a_(G,be)}}function Kn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function jo(e,t,n=!1){const s=e.children,r=t.children;if(oe(s)&&oe(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=$n(r[o]),l.el=i.el),n||jo(i,l)),l.type===qr&&(l.el=i.el),l.type===pt&&!l.el&&(l.el=i.el)}}function k_(e){const t=e.slice(),n=[0];let s,r,o,i,l;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<u?o=l+1:i=l;u<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const x_=e=>e.__isTeleport,Ls=e=>e&&(e.disabled||e.disabled===""),xc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ha=(e,t)=>{const n=e&&e.to;if(Ve(n))if(t){const s=t(n);return s||N(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),s}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Ls(e)&&N(`Invalid Teleport target: ${n}`),n},S_={__isTeleport:!0,process(e,t,n,s,r,o,i,l,c,u){const{mc:f,pc:p,pbc:d,o:{insert:m,querySelector:g,createText:b,createComment:w}}=u,k=Ls(t.props);let{shapeFlag:x,children:v,dynamicChildren:T}=t;if(An&&(c=!1,T=null),e==null){const S=t.el=w("teleport start"),C=t.anchor=w("teleport end");m(S,n,s),m(C,n,s);const R=t.target=ha(t.props,g),P=t.targetAnchor=b("");R?(m(P,R),i=i||xc(R)):k||N("Invalid Teleport target on mount:",R,`(${typeof R})`);const j=(ne,le)=>{x&16&&f(v,ne,le,r,o,i,l,c)};k?j(n,C):R&&j(R,P)}else{t.el=e.el;const S=t.anchor=e.anchor,C=t.target=e.target,R=t.targetAnchor=e.targetAnchor,P=Ls(e.props),j=P?n:C,ne=P?S:R;if(i=i||xc(C),T?(d(e.dynamicChildren,T,j,r,o,i,l),jo(e,t,!0)):c||p(e,t,j,ne,r,o,i,l,!1),k)P||eo(t,n,S,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=ha(t.props,g);le?eo(t,le,null,u,0):N("Invalid Teleport target on update:",C,`(${typeof C})`)}else P&&eo(t,C,R,u,1)}Tp(t)},remove(e,t,n,s,{um:r,o:{remove:o}},i){const{shapeFlag:l,children:c,anchor:u,targetAnchor:f,target:p,props:d}=e;if(p&&o(f),(i||!Ls(d))&&(o(u),l&16))for(let m=0;m<c.length;m++){const g=c[m];r(g,t,n,!0,!!g.dynamicChildren)}},move:eo,hydrate:E_};function eo(e,t,n,{o:{insert:s},m:r},o=2){o===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:u,props:f}=e,p=o===2;if(p&&s(i,t,n),(!p||Ls(f))&&c&16)for(let d=0;d<u.length;d++)r(u[d],t,n,2);p&&s(l,t,n)}function E_(e,t,n,s,r,o,{o:{nextSibling:i,parentNode:l,querySelector:c}},u){const f=t.target=ha(t.props,c);if(f){const p=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Ls(t.props))t.anchor=u(i(e),t,l(e),n,s,r,o),t.targetAnchor=p;else{t.anchor=i(e);let d=p;for(;d;)if(d=i(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,f._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(p,t,f,n,s,r,o)}Tp(t)}return t.anchor&&i(t.anchor)}const $_=S_;function Tp(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ce=Symbol.for("v-fgt"),qr=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),fr=[];let zt=null;function E(e=!1){fr.push(zt=e?null:[])}function T_(){fr.pop(),zt=fr[fr.length-1]||null}let $r=1;function Sc(e){$r+=e}function Cp(e){return e.dynamicChildren=$r>0?zt||As:null,T_(),$r>0&&zt&&zt.push(e),e}function te(e,t,n,s,r,o){return Cp(a(e,t,n,s,r,o,!0))}function z(e,t,n,s,r){return Cp(Q(e,t,n,s,r,!0))}function Hn(e){return e?e.__v_isVNode===!0:!1}function es(e,t){return t.shapeFlag&6&&Os.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const C_=(...e)=>O_(...e),fi="__vInternal",Op=({key:e})=>e??null,_o=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ve(e)||Te(e)||ce(e)?{i:Je,r:e,k:t,f:!!n}:e:null);function a(e,t=null,n=null,s=0,r=null,o=e===Ce?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Op(t),ref:t&&_o(t),scopeId:ai,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Je};return l?(kl(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),c.key!==c.key&&N("VNode created with invalid key (NaN). VNode type:",c.type),$r>0&&!i&&zt&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&zt.push(c),c}const Q=C_;function O_(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Kg)&&(e||N(`Invalid vnode type when creating vnode: ${e}.`),e=pt),Hn(e)){const l=an(e,t,!0);return n&&kl(l,n),$r>0&&!o&&zt&&(l.shapeFlag&6?zt[zt.indexOf(e)]=l:zt.push(l)),l.patchFlag|=-2,l}if(Lp(e)&&(e=e.__vccOpts),t){t=ue(t);let{class:l,style:c}=t;l&&!Ve(l)&&(t.class=We(l)),Pe(c)&&(Po(c)&&!oe(c)&&(c=He({},c)),t.style=Qe(c))}const i=Ve(e)?1:lp(e)?128:x_(e)?64:Pe(e)?4:ce(e)?2:0;return i&4&&Po(e)&&(e=he(e),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),a(e,t,n,s,r,i,o,!0)}function ue(e){return e?Po(e)||fi in e?He({},e):e:null}function an(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,l=t?Be(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Op(l),ref:t&&t.ref?n&&r?oe(r)?r.concat(_o(t)):[r,_o(t)]:_o(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o===-1&&oe(i)?i.map(Pp):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Pp(e){const t=an(e);return oe(e.children)&&(t.children=e.children.map(Pp)),t}function h(e=" ",t=0){return Q(qr,null,e,t)}function we(e="",t=!1){return t?(E(),z(pt,null,e)):Q(pt,null,e)}function qt(e){return e==null||typeof e=="boolean"?Q(pt):oe(e)?Q(Ce,null,e.slice()):typeof e=="object"?$n(e):Q(qr,null,String(e))}function $n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:an(e)}function kl(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(oe(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),kl(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(fi in t)?t._ctx=Je:r===3&&Je&&(Je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),s&64?(n=16,t=[h(t)]):n=8);e.children=t,e.shapeFlag|=n}function Be(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=We([t.class,s.class]));else if(r==="style")t.style=Qe([t.style,s.style]);else if(Dr(r)){const o=t[r],i=s[r];i&&o!==i&&!(oe(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function At(e,t,n,s=null){Rt(e,t,7,[n,s])}const P_=bp();let A_=0;function M_(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||P_,o={uid:A_++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new If(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(s,r),emitsOptions:ip(s,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:s.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx=Gg(o),o.root=t?t.root:o,o.emit=Cg.bind(null,o),e.ce&&e.ce(o),o}let Ze=null;const yt=()=>Ze||Je;let xl,Es,Ec="__VUE_INSTANCE_SETTERS__";(Es=$o()[Ec])||(Es=$o()[Ec]=[]),Es.push(e=>Ze=e),xl=e=>{Es.length>1?Es.forEach(t=>t(e)):Es[0](e)};const Ns=e=>{xl(e),e.scope.on()},hs=()=>{Ze&&Ze.scope.off(),xl(null)},I_=Bn("slot,component");function ma(e,t){const n=t.isNativeTag||$f;(I_(e)||n(e))&&N("Do not use built-in or reserved HTML elements as component id: "+e)}function Ap(e){return e.vnode.shapeFlag&4}let Tr=!1;function L_(e,t=!1){Tr=t;const{props:n,children:s}=e.vnode,r=Ap(e);l_(e,n,r,t),__(e,s);const o=r?R_(e,t):void 0;return Tr=!1,o}function R_(e,t){var n;const s=e.type;{if(s.name&&ma(s.name,e.appContext.config),s.components){const o=Object.keys(s.components);for(let i=0;i<o.length;i++)ma(o[i],e.appContext.config)}if(s.directives){const o=Object.keys(s.directives);for(let i=0;i<o.length;i++)up(o[i])}s.compilerOptions&&N_()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=si(new Proxy(e.ctx,vp)),Zg(e);const{setup:r}=s;if(r){const o=e.setupContext=r.length>1?Ip(e):null;Ns(e),vs();const i=mn(r,e,0,[rr(e.props),o]);if(ys(),hs(),nl(i)){if(i.then(hs,hs),t)return i.then(l=>{$c(e,l,t)}).catch(l=>{ri(l,e,0)});if(e.asyncDep=i,!e.suspense){const l=(n=s.name)!=null?n:"Anonymous";N(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else $c(e,i,t)}else Mp(e,t)}function $c(e,t,n){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)?(Hn(t)&&N("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=Yf(t),Jg(e)):t!==void 0&&N(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Mp(e,n)}let ga;const N_=()=>!ga;function Mp(e,t,n){const s=e.type;if(!e.render){if(!t&&ga&&!s.render){const r=s.template||bl(e).template;if(r){cn(e,"compile");const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,u=He(He({isCustomElement:o,delimiters:l},i),c);s.render=ga(r,u),un(e,"compile")}}e.render=s.render||_t}Ns(e),vs(),t_(e),ys(),hs(),!s.render&&e.render===_t&&!t&&(s.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function F_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Mo(),it(e,"get","$attrs"),t[n]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}}))}function j_(e){return e.slotsProxy||(e.slotsProxy=new Proxy(e.slots,{get(t,n){return it(e,"get","$slots"),t[n]}}))}function Ip(e){return Object.freeze({get attrs(){return F_(e)},get slots(){return j_(e)},get emit(){return(n,...s)=>e.emit(n,...s)},expose:n=>{if(e.exposed&&N("expose() should be called only once per setup()."),n!=null){let s=typeof n;s==="object"&&(oe(n)?s="array":Te(n)&&(s="ref")),s!=="object"&&N(`expose() should be passed a plain object, received ${s}.`)}e.exposed=n||{}}})}function pi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yf(si(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ds)return ds[n](e)},has(t,n){return n in t||n in ds}}))}const D_=/(?:^|[-_])(\w)/g,H_=e=>e.replace(D_,t=>t.toUpperCase()).replace(/[-_]/g,"");function Cr(e,t=!0){return ce(e)?e.displayName||e.name:e.name||t&&e.__name}function di(e,t,n=!1){let s=Cr(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=o=>{for(const i in o)if(o[i]===t)return i};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?H_(s):n?"App":"Anonymous"}function Lp(e){return ce(e)&&"__vccOpts"in e}const A=(e,t)=>ig(e,t,Tr);function Et(e,t,n){const s=arguments.length;return s===2?Pe(t)&&!oe(t)?Hn(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Hn(n)&&(n=[n]),Q(e,t,n))}const V_=Symbol.for("v-scx"),B_=()=>{{const e=H(V_);return e||N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function $i(e){return!!(e&&e.__v_isShallow)}function q_(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},n={style:"color:#b62e24"},s={style:"color:#9d288c"},r={header(p){return Pe(p)?p.__isVue?["div",e,"VueInstance"]:Te(p)?["div",{},["span",e,f(p)],"<",l(p.value),">"]:fs(p)?["div",{},["span",e,$i(p)?"ShallowReactive":"Reactive"],"<",l(p),`>${Dn(p)?" (readonly)":""}`]:Dn(p)?["div",{},["span",e,$i(p)?"ShallowReadonly":"Readonly"],"<",l(p),">"]:null:null},hasBody(p){return p&&p.__isVue},body(p){if(p&&p.__isVue)return["div",{},...o(p.$)]}};function o(p){const d=[];p.type.props&&p.props&&d.push(i("props",he(p.props))),p.setupState!==je&&d.push(i("setup",p.setupState)),p.data!==je&&d.push(i("data",he(p.data)));const m=c(p,"computed");m&&d.push(i("computed",m));const g=c(p,"inject");return g&&d.push(i("injected",g)),d.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:p}]]),d}function i(p,d){return d=He({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},p],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(m=>["div",{},["span",s,m+": "],l(d[m],!1)])]]:["span",{}]}function l(p,d=!0){return typeof p=="number"?["span",t,p]:typeof p=="string"?["span",n,JSON.stringify(p)]:typeof p=="boolean"?["span",s,p]:Pe(p)?["object",{object:d?he(p):p}]:["span",n,String(p)]}function c(p,d){const m=p.type;if(ce(m))return;const g={};for(const b in p.ctx)u(m,b,d)&&(g[b]=p.ctx[b]);return g}function u(p,d,m){const g=p[m];if(oe(g)&&g.includes(d)||Pe(g)&&d in g||p.extends&&u(p.extends,d,m)||p.mixins&&p.mixins.some(b=>u(b,d,m)))return!0}function f(p){return $i(p)?"ShallowRef":p.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const Do="3.3.4",W_="http://www.w3.org/2000/svg",ts=typeof document<"u"?document:null,Tc=ts&&ts.createElement("template"),z_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?ts.createElementNS(W_,e):ts.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ts.createTextNode(e),createComment:e=>ts.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ts.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Tc.innerHTML=s?`<svg>${e}</svg>`:e;const l=Tc.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function U_(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function K_(e,t,n){const s=e.style,r=Ve(n);if(n&&!r){if(t&&!Ve(t))for(const o in t)n[o]==null&&_a(s,o,"");for(const o in n)_a(s,o,n[o])}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Y_=/[^\\];\s*$/,Cc=/\s*!important$/;function _a(e,t,n){if(oe(n))n.forEach(s=>_a(e,t,s));else if(n==null&&(n=""),Y_.test(n)&&N(`Unexpected semicolon at the end of '${t}' style value: '${n}'`),t.startsWith("--"))e.setProperty(t,n);else{const s=G_(e,t);Cc.test(n)?e.setProperty(gn(s),n.replace(Cc,""),"important"):e[s]=n}}const Oc=["Webkit","Moz","ms"],Ti={};function G_(e,t){const n=Ti[t];if(n)return n;let s=nn(t);if(s!=="filter"&&s in e)return Ti[t]=s;s=gs(s);for(let r=0;r<Oc.length;r++){const o=Oc[r]+s;if(o in e)return Ti[t]=o}return t}const Pc="http://www.w3.org/1999/xlink";function Z_(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Pc,t.slice(6,t.length)):e.setAttributeNS(Pc,t,n);else{const o=bm(t);n==null||o&&!Af(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function J_(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,f=n??"";u!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Af(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch(u){c||N(`Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,u)}c&&e.removeAttribute(t)}function Q_(e,t,n,s){e.addEventListener(t,n,s)}function X_(e,t,n,s){e.removeEventListener(t,n,s)}function ev(e,t,n,s,r=null){const o=e._vei||(e._vei={}),i=o[t];if(s&&i)i.value=s;else{const[l,c]=tv(t);if(s){const u=o[t]=rv(s,r);Q_(e,l,u,c)}else i&&(X_(e,l,i,c),o[t]=void 0)}}const Ac=/(?:Once|Passive|Capture)$/;function tv(e){let t;if(Ac.test(e)){t={};let s;for(;s=e.match(Ac);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gn(e.slice(2)),t]}let Ci=0;const nv=Promise.resolve(),sv=()=>Ci||(nv.then(()=>Ci=0),Ci=Date.now());function rv(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(ov(s,n.value),t,5,[s])};return n.value=e,n.attached=sv(),n}function ov(e,t){if(oe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Mc=/^on[a-z]/,iv=(e,t,n,s,r=!1,o,i,l,c)=>{t==="class"?U_(e,s,r):t==="style"?K_(e,n,s):Dr(t)?So(t)||ev(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):av(e,t,s,r))?J_(e,t,s,o,i,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Z_(e,t,s,r))};function av(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Mc.test(t)&&ce(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mc.test(t)&&Ve(n)?!1:t in e}const kn="transition",Us="animation",Rp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lv=He({},Fg,Rp),Yn=(e,t=[])=>{oe(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ic=e=>e?oe(e)?e.some(t=>t.length>1):e.length>1:!1;function cv(e){const t={};for(const W in e)W in Rp||(t[W]=e[W]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=i,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=uv(r),b=g&&g[0],w=g&&g[1],{onBeforeEnter:k,onEnter:x,onEnterCancelled:v,onLeave:T,onLeaveCancelled:S,onBeforeAppear:C=k,onAppear:R=x,onAppearCancelled:P=v}=t,j=(W,me,_e)=>{Sn(W,me?f:l),Sn(W,me?u:i),_e&&_e()},ne=(W,me)=>{W._isLeaving=!1,Sn(W,p),Sn(W,m),Sn(W,d),me&&me()},le=W=>(me,_e)=>{const ye=W?R:x,Re=()=>j(me,W,_e);Yn(ye,[me,Re]),Lc(()=>{Sn(me,W?c:o),fn(me,W?f:l),Ic(ye)||Rc(me,s,b,Re)})};return He(t,{onBeforeEnter(W){Yn(k,[W]),fn(W,o),fn(W,i)},onBeforeAppear(W){Yn(C,[W]),fn(W,c),fn(W,u)},onEnter:le(!1),onAppear:le(!0),onLeave(W,me){W._isLeaving=!0;const _e=()=>ne(W,me);fn(W,p),Fp(),fn(W,d),Lc(()=>{W._isLeaving&&(Sn(W,p),fn(W,m),Ic(T)||Rc(W,s,w,_e))}),Yn(T,[W,_e])},onEnterCancelled(W){j(W,!1),Yn(v,[W])},onAppearCancelled(W){j(W,!0),Yn(P,[W])},onLeaveCancelled(W){ne(W),Yn(S,[W])}})}function uv(e){if(e==null)return null;if(Pe(e))return[Oi(e.enter),Oi(e.leave)];{const t=Oi(e);return[t,t]}}function Oi(e){const t=fm(e);return fg(t,"<transition> explicit duration"),t}function fn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Sn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Lc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fv=0;function Rc(e,t,n,s){const r=e._endId=++fv,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:c}=Np(e,t);if(!i)return s();const u=i+"end";let f=0;const p=()=>{e.removeEventListener(u,d),o()},d=m=>{m.target===e&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),e.addEventListener(u,d)}function Np(e,t){const n=window.getComputedStyle(e),s=g=>(n[g]||"").split(", "),r=s(`${kn}Delay`),o=s(`${kn}Duration`),i=Nc(r,o),l=s(`${Us}Delay`),c=s(`${Us}Duration`),u=Nc(l,c);let f=null,p=0,d=0;t===kn?i>0&&(f=kn,p=i,d=o.length):t===Us?u>0&&(f=Us,p=u,d=c.length):(p=Math.max(i,u),f=p>0?i>u?kn:Us:null,d=f?f===kn?o.length:c.length:0);const m=f===kn&&/\b(transform|all)(,|$)/.test(s(`${kn}Property`).toString());return{type:f,timeout:p,propCount:d,hasTransform:m}}function Nc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Fc(n)+Fc(e[s])))}function Fc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Fp(){return document.body.offsetHeight}const jp=new WeakMap,Dp=new WeakMap,Hp={name:"TransitionGroup",props:He({},lv,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=yt(),s=Ng();let r,o;return ci(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!_v(r[0].el,n.vnode.el,i))return;r.forEach(hv),r.forEach(mv);const l=r.filter(gv);Fp(),l.forEach(c=>{const u=c.el,f=u.style;fn(u,i),f.transform=f.webkitTransform=f.transitionDuration="";const p=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",p),u._moveCb=null,Sn(u,i))};u.addEventListener("transitionend",p)})}),()=>{const i=he(e),l=cv(i);let c=i.tag||Ce;r=o,o=t.default?pp(t.default()):[];for(let u=0;u<o.length;u++){const f=o[u];f.key!=null?Io(f,ia(f,l,s,n)):N("<TransitionGroup> children must be keyed.")}if(r)for(let u=0;u<r.length;u++){const f=r[u];Io(f,ia(f,l,s,n)),jp.set(f,f.el.getBoundingClientRect())}return Q(c,null,o)}}},pv=e=>delete e.mode;Hp.props;const dv=Hp;function hv(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function mv(e){Dp.set(e,e.el.getBoundingClientRect())}function gv(e){const t=jp.get(e),n=Dp.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${r}px)`,o.transitionDuration="0s",e}}function _v(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:o}=Np(s);return r.removeChild(s),o}const vv=["ctrl","shift","alt","meta"],yv={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>vv.some(n=>e[`${n}Key`]&&!t.includes(n))},bv=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const o=yv[t[r]];if(o&&o(n,t))return}return e(n,...s)},wv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},to=(e,t)=>n=>{if(!("key"in n))return;const s=gn(n.key);if(t.some(r=>r===s||wv[r]===s))return e(n)},Vp={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ks(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Ks(e,!0),s.enter(e)):s.leave(e,()=>{Ks(e,!1)}):Ks(e,t))},beforeUnmount(e,{value:t}){Ks(e,t)}};function Ks(e,t){e.style.display=t?e._vod:"none"}const kv=He({patchProp:iv},z_);let jc;function xv(){return jc||(jc=b_(kv))}const Sv=(...e)=>{const t=xv().createApp(...e);Ev(t),$v(t);const{mount:n}=t;return t.mount=s=>{const r=Tv(s);if(!r)return;const o=t._component;!ce(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Ev(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>Pf(t)||vm(t),writable:!1})}function $v(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=e.config.compilerOptions,s='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(e.config,"compilerOptions",{get(){return N(s),n},set(){N(s)}})}}function Tv(e){if(Ve(e)){const t=document.querySelector(e);return t||N(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function Cv(){q_()}Cv();function va(e,t={},n){for(const s in e){const r=e[s],o=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?va(r,t,o):typeof r=="function"&&(t[o]=r)}return t}const Ov={run:e=>e()},Pv=()=>Ov,Bp=typeof console.createTask<"u"?console.createTask:Pv;function Av(e,t){const n=t.shift(),s=Bp(n);return e.reduce((r,o)=>r.then(()=>s.run(()=>o(...t))),Promise.resolve())}function Mv(e,t){const n=t.shift(),s=Bp(n);return Promise.all(e.map(r=>s.run(()=>r(...t))))}function Pi(e,t){for(const n of[...e])n(t)}class Iv{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const r=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!s.allowDeprecated){let i=o.message;i||(i=`${r} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,r=(...o)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...o));return s=this.hook(t,r),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const r of s)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=va(t),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(t){const n=va(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Av,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Mv,t,...n)}callHookWith(t,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Pi(this._before,r);const o=t(n in this._hooks?[...this._hooks[n]]:[],s);return o instanceof Promise?o.finally(()=>{this._after&&r&&Pi(this._after,r)}):(this._after&&r&&Pi(this._after,r),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Lv(){return new Iv}function Rv(e){return Array.isArray(e)?e:[e]}const qp=["title","script","style","noscript"],Wp=["base","meta","link","style","script","noscript"],Nv=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Fv=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],jv=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function zp(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ya(e){return zp(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Dv(e){let t=9;for(const n of e)for(let s=0;s<n.length;)t=Math.imul(t^n.charCodeAt(s++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Up(e,t){const{props:n,tag:s}=e;if(Fv.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const o of r)if(typeof n[o]<"u"){const i=String(n[o]);return t&&!t(i)?!1:`${s}:${o}:${i}`}return!1}function Dc(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function no(e,t=!1,n){const{tag:s,$el:r}=e;r&&(Object.entries(s.props).forEach(([o,i])=>{i=String(i);const l=`attr:${o}`;if(o==="class"){if(!i)return;for(const c of i.split(" ")){const u=`${l}:${c}`;n&&n(e,u,()=>r.classList.remove(c)),r.classList.contains(c)||r.classList.add(c)}return}n&&!o.startsWith("data-h-")&&n(e,l,()=>r.removeAttribute(o)),(t||r.getAttribute(o)!==i)&&r.setAttribute(o,i)}),qp.includes(s.tag)&&(s.textContent&&s.textContent!==r.textContent?r.textContent=s.textContent:s.innerHTML&&s.innerHTML!==r.innerHTML&&(r.innerHTML=s.innerHTML)))}let Ys=!1;async function Kp(e,t={}){var d,m;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=t.document||e.resolvedOptions.document||window.document,r=(await e.resolveTags()).map(l);if(e.resolvedOptions.experimentalHashHydration&&(Ys=Ys||e._hash||!1,Ys)){const g=Dv(r.map(b=>b.tag._h));if(Ys===g)return;Ys=g}const o=e._popSideEffectQueue();e.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([b,w])=>{o[b]=w})});const i=(g,b,w)=>{b=`${g.renderId}:${b}`,g.entry&&(g.entry._sde[b]=w),delete o[b]};function l(g){const b=e.headEntries().find(k=>k._i===g._e),w={renderId:g._d||ya(g),$el:null,shouldRender:!0,tag:g,entry:b,markSideEffect:(k,x)=>i(w,k,x)};return w}const c=[],u={body:[],head:[]},f=g=>{e._elMap[g.renderId]=g.$el,c.push(g),i(g,"el",()=>{var b;(b=g.$el)==null||b.remove(),delete e._elMap[g.renderId]})};for(const g of r){if(await e.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:b}=g;if(b.tag==="title"){s.title=b.textContent||"",c.push(g);continue}if(b.tag==="htmlAttrs"||b.tag==="bodyAttrs"){g.$el=s[b.tag==="htmlAttrs"?"documentElement":"body"],no(g,!1,i),c.push(g);continue}if(g.$el=e._elMap[g.renderId],!g.$el&&b.key&&(g.$el=s.querySelector(`${(d=b.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${b.tag}[data-h-${b._h}]`)),g.$el){g.tag._d&&no(g),f(g);continue}u[(m=b.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(g)}const p={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([g,b])=>{var k;if(!b.length)return;const w=(k=s==null?void 0:s[g])==null?void 0:k.children;if(w){for(const x of[...w].reverse()){const v=x.tagName.toLowerCase();if(!Wp.includes(v))continue;const T=x.getAttributeNames().reduce((P,j)=>({...P,[j]:x.getAttribute(j)}),{}),S={tag:v,props:T};x.innerHTML&&(S.innerHTML=x.innerHTML);const C=ya(S);let R=b.findIndex(P=>(P==null?void 0:P.renderId)===C);if(R===-1){const P=Up(S);R=b.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===P)}if(R!==-1){const P=b[R];P.$el=x,no(P),f(P),delete b[R]}}b.forEach(x=>{const v=x.tag.tagPosition||"head";p[v]=p[v]||s.createDocumentFragment(),x.$el||(x.$el=s.createElement(x.tag.tag),no(x,!0)),p[v].appendChild(x.$el),f(x)})}}),p.head&&s.head.appendChild(p.head),p.bodyOpen&&s.body.insertBefore(p.bodyOpen,s.body.firstChild),p.bodyClose&&s.body.appendChild(p.bodyClose);for(const g of c)await e.hooks.callHook("dom:renderTag",g);Object.values(o).forEach(g=>g())}let Ai=null;async function Yp(e,t={}){function n(){return Ai=null,Kp(e,t)}const s=t.delayFn||(r=>setTimeout(r,10));return Ai=Ai||new Promise(r=>s(()=>r(n())))}function Hv(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Yp(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function Vv(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Hc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function Vc(e){if(typeof e.tagPriority=="number")return e.tagPriority;if(e.tag==="meta"){if(e.props.charset)return-2;if(e.props["http-equiv"]==="content-security-policy")return 0}const t=e.tagPriority||e.tag;return t in Hc?Hc[t]:10}const Bv=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function qv(){return{hooks:{"tags:resolve":e=>{const t=n=>{var s;return(s=e.tags.find(r=>r._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of Bv)for(const r of e.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(n))){const o=t(r.tagPriority.replace(n,""));typeof o<"u"&&(r._p=o+s)}e.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>Vc(n)-Vc(s))}}}}function Wv(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(r=>r.tag==="titleTemplate");const s=t.findIndex(r=>r.tag==="title");if(s!==-1&&n!==-1){const r=Dc(t[n].textContent,t[s].textContent);r!==null?t[s].textContent=r||t[s].textContent:delete t[s]}else if(n!==-1){const r=Dc(t[n].textContent);r!==null&&(t[n].textContent=r,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function zv(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Uv=["link","style","script","noscript"];function Kv(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=ya(e)),e.key&&Uv.includes(e.tag)&&(e._h=zp(e.key),e.props[`data-h-${e._h}`]="")}}}}const Bc=["script","link","bodyAttrs"];function Yv(){const e=(t,n)=>{const s={},r={};Object.entries(n.props).forEach(([i,l])=>{i.startsWith("on")&&typeof l=="function"?r[i]=l:s[i]=l});let o;return t==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!Bc.includes(n.tag)||!Object.entries(n.props).find(([s,r])=>s.startsWith("on")&&typeof r=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!Bc.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:s,delayedSrc:r}=e("dom",t.tag);Object.keys(s).length&&(t.tag.props=n,t.tag._eventHandlers=s,t.tag._delayedSrc=r)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const s=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([r,o])=>{const i=`${t.tag._d||t.tag._p}:${r}`,l=r.slice(2).toLowerCase(),c=`data-h-${l}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(c))return;const u=o;n.setAttribute(c,""),s.addEventListener(l,u),t.entry&&(t.entry._sde[i]=()=>{s.removeEventListener(l,u),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Gv=["templateParams","htmlAttrs","bodyAttrs"];function Zv(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(s=>{e.props[s]&&(e.key=e.props[s],delete e.props[s])});const n=Up(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(s=>{const r=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,o=t[r];if(o){let l=s==null?void 0:s.tagDuplicateStrategy;if(!l&&Gv.includes(s.tag)&&(l="merge"),l==="merge"){const c=o.props;["class","style"].forEach(u=>{s.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),s.props[u]=`${c[u]} ${s.props[u]}`)}),t[r].props={...c,...s.props};return}else if(s._e===o._e){o._duped=o._duped||[],s._d=`${o._d}:${o._duped.length+1}`,o._duped.push(s);return}}const i=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(Wp.includes(s.tag)&&i===0){delete t[r];return}t[r]=s});const n=[];Object.values(t).forEach(s=>{const r=s._duped;delete s._duped,n.push(s),r&&n.push(...r)}),e.tags=n}}}}function so(e,t){function n(o){if(["s","pageTitle"].includes(o))return t.pageTitle;let i;return o.includes(".")?i=o.split(".").reduce((l,c)=>l&&l[c]||void 0,t):i=t[o],typeof i<"u"?i||"":!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const i=n(o.slice(1));typeof i=="string"&&(e=e.replace(new RegExp(`\\${o}(\\W|$)`,"g"),`${i}$1`).trim())}),t.separator&&(e.endsWith(t.separator)&&(e=e.slice(0,-t.separator.length).trim()),e.startsWith(t.separator)&&(e=e.slice(t.separator.length).trim()),e=e.replace(new RegExp(`\\${t.separator}\\s*\\${t.separator}`,"g"),t.separator)),e}function Jv(){return{hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,n=(o=t.find(i=>i.tag==="title"))==null?void 0:o.textContent,s=t.findIndex(i=>i.tag==="templateParams"),r=s!==-1?t[s].props:{};r.pageTitle=r.pageTitle||n||"";for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=so(i.textContent,r);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=so(i.props.content,r);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=so(i.props.href,r);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(l,c)=>typeof c=="string"?so(c,r):c)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const Qv=typeof window<"u";let Gp;function Xv(e){return Gp=e}function ey(){return Gp}async function ty(e,t){const n={tag:e,props:{}};return e==="templateParams"?(n.props=t,n):["title","titleTemplate"].includes(e)?(n.textContent=t instanceof Promise?await t:t,n):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?n.props.src=t:n.innerHTML=t,n):!1:(n.props=await sy(e,{...t}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>jv.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||qp.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=ny(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function ny(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function sy(e,t){for(const n of Object.keys(t)){const s=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=s?"true":"":String(t[n])==="false"&&(s?t[n]="false":delete t[n])}return t}const ry=10;async function oy(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,s])=>typeof s<"u"&&Nv.includes(n)).forEach(([n,s])=>{const r=Rv(s);t.push(...r.map(o=>ty(n,o)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,s)=>(n._e=e._i,n._p=(e._i<<ry)+s,n))}function iy(){return[Zv(),qv(),Jv(),Wv(),Kv(),Yv(),zv()]}function ay(e={}){return[Hv({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function ly(e={}){const t=cy({...e,plugins:[...ay(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=Vv(t.resolvedOptions.document)),Xv(t),t}function cy(e={}){let t=[],n={},s=0;const r=Lv();e!=null&&e.hooks&&r.addHooks(e.hooks),e.plugins=[...iy(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(l=>l.hooks&&r.addHooks(l.hooks)),e.document=e.document||(Qv?document:void 0);const o=()=>r.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return r},use(l){l.hooks&&r.addHooks(l.hooks)},push(l,c){const u={_i:s++,input:l,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),t.push(u),o(),{dispose(){t=t.filter(f=>f._i!==u._i?!0:(n={...n,...f._sde||{}},f._sde={},o(),!1))},patch(f){t=t.map(p=>(p._i===u._i&&(u.input=p.input=f,o()),p))}}},async resolveTags(){const l={tags:[],entries:[...t]};await r.callHook("entries:resolve",l);for(const c of l.entries){const u=c._t||(f=>f);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const f of await oy(c)){const p={tag:f,entry:c,resolvedOptions:i.resolvedOptions};await r.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await r.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...n};return n={},l},_elMap:{}};return i.hooks.callHook("init",i),i}function uy(e){return typeof e=="function"?e():M(e)}function Ho(e,t=""){if(e instanceof Promise)return e;const n=uy(e);return!e||!n?n:Array.isArray(n)?n.map(s=>Ho(s,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,M(r)]:[s,Ho(r,s)])):n}const fy=Do.startsWith("3"),py=typeof window<"u",Zp="usehead";function Sl(){return yt()&&H(Zp)||ey()}function dy(e){return{install(n){fy&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Zp,e))}}.install}function hy(e={}){const t=ly({...e,domDelayFn:n=>setTimeout(()=>et(()=>n()),10),plugins:[my(),...(e==null?void 0:e.plugins)||[]]});return t.install=dy(t),t}function my(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Ho(t.input)}}}}function gy(e,t={}){const n=Sl(),s=q(!1),r=q({});bs(()=>{r.value=s.value?{}:Ho(e)});const o=n.push(r.value,t);return ge(r,l=>{o.patch(l)}),yt()&&(Br(()=>{o.dispose()}),mp(()=>{s.value=!0}),hp(()=>{s.value=!1})),o}function _y(e,t={}){return Sl().push(e,t)}function Jp(e,t={}){var s;const n=Sl();if(n){const r=py||!!((s=n.resolvedOptions)!=null&&s.document);return t.mode==="server"&&r||t.mode==="client"&&!r?void 0:r?gy(e,t):_y(e,t)}}function vy(e,t){const n=hy(t||{}),s={unhead:n,install(r){Do.startsWith("3")&&(r.config.globalProperties.$head=n,r.provide("usehead",n))},use(r){n.use(r)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(r,o){return n.push(r,o)},addEntry(r,o){return n.push(r,o)},addHeadObjs(r,o){return n.push(r,o)},addReactiveEntry(r,o){const i=Jp(r,o);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,o){o?Kp(n,{document:r}):Yp(n,{delayFn:i=>setTimeout(()=>i(),50),document:r})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=s.addHeadObjs,n.updateDOM=s.updateDOM,n.hooks.hook("dom:beforeRender",r=>{for(const o of s.hooks["before:dom"])o()===!1&&(r.shouldRender=!1)}),e&&s.addHeadObjs(e),s}const pr=Symbol("v-click-clicks"),ns=Symbol("v-click-clicks-elements"),ba=Symbol("v-click-clicks-order-map"),dr=Symbol("v-click-clicks-disabled"),Qp=Symbol("slidev-slide-scale"),Z=Symbol("slidev-slidev-context"),yy=Symbol("slidev-route"),by=Symbol("slidev-slide-context"),Qn="slidev-vclick-target",Mi="slidev-vclick-hidden",wy="slidev-vclick-fade",Ii="slidev-vclick-hidden-explicitly",Gs="slidev-vclick-current",ro="slidev-vclick-prior",ky=["localhost","127.0.0.1"];let xy=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function wa(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Sy(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=s||1;return r}function Ey(e){return e!=null}function $y(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Ey))}const lr={theme:"apple-basic",title:"Effect-TS / schema",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Roboto"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Roboto Slab"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Roboto","Roboto Slab","Fira Code"],provider:"none",local:["Helvetica Neue"],italic:!1,weights:["200","400","600"]},favicon:"blackboard.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-up",layout:"intro-image",image:"montain.jpg"},$e=lr,Mn=$e.aspectRatio??16/9,In=$e.canvasWidth??980,El=Math.ceil(In/Mn),$l=A(()=>$y($e.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Xp(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function jt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const ws=qe({page:0,clicks:0});let Ty=[],Cy=[];jt(ws,"$syncUp",!0);jt(ws,"$syncDown",!0);jt(ws,"$paused",!1);jt(ws,"$onSet",e=>Ty.push(e));jt(ws,"$onPatch",e=>Cy.push(e));Xp();jt(ws,"$patch",async()=>!1);function ed(e,t,n=!1){const s=[];let r=!1,o=!1,i,l;const c=qe(t);function u(m){s.push(m)}function f(m,g){c[m]!==g&&(clearTimeout(i),r=!0,c[m]=g,i=setTimeout(()=>r=!1,0))}function p(m){r||(clearTimeout(l),o=!0,Object.entries(m).forEach(([g,b])=>{c[g]=b}),l=setTimeout(()=>o=!1,0))}function d(m){let g;n?n&&window.addEventListener("storage",w=>{w&&w.key===m&&w.newValue&&p(JSON.parse(w.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",w=>p(w.data)));function b(){!n&&g&&!o?g.postMessage(he(c)):n&&!o&&window.localStorage.setItem(m,JSON.stringify(c)),r||s.forEach(w=>w(c))}if(ge(c,b,{deep:!0,flush:"sync"}),n){const w=window.localStorage.getItem(m);w&&p(JSON.parse(w))}}return{init:d,onPatch:u,patch:f,state:c}}const{init:Oy,onPatch:Py,patch:Zs,state:Li}=ed(ws,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ks=qe({});let Ay=[],My=[];jt(ks,"$syncUp",!0);jt(ks,"$syncDown",!0);jt(ks,"$paused",!1);jt(ks,"$onSet",e=>Ay.push(e));jt(ks,"$onPatch",e=>My.push(e));Xp();jt(ks,"$patch",async()=>!1);const{init:Iy,onPatch:Ly,patch:td,state:Vo}=ed(ks,{},!1),Ry="modulepreload",Ny=function(e){return"/web-basic-2/"+e},qc={},Ln=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Ny(o),o in qc)return;qc[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const p=r[f];if(p.href===o&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Ry,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function Fy(e,t){let n,s,r;const o=q(!0),i=()=>{o.value=!0,r()};ge(e,i,{flush:"sync"});const l=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=pl((f,p)=>(s=f,r=p,{get(){return o.value&&(n=l(),o.value=!1),s(),n},set(d){c==null||c(d)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function _n(e){return Qo()?(ol(e),!0):!1}function Ge(e){return typeof e=="function"?e():M(e)}function jy(e){if(!Te(e))return qe(e);const t=new Proxy({},{get(n,s,r){return M(Reflect.get(e.value,s,r))},set(n,s,r){return Te(e.value[s])&&!Te(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(t)}const Ut=typeof window<"u",Dy=e=>typeof e<"u",ka=()=>+Date.now(),hi=()=>{},Hy=Vy();function Vy(){var e;return Ut&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function By(e,t){function n(...s){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(o)})}return n}const nd=e=>e();function qy(e=nd){const t=q(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...o)=>{t.value&&e(...o)};return{isActive:Wt(t),pause:n,resume:s,eventFilter:r}}function Wy(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),o=parseFloat(s)+t;return Number.isNaN(o)?e:o+r}function sd(...e){if(e.length!==1)return rg(...e);const t=e[0];return typeof t=="function"?Wt(pl(()=>({get:t,set:hi}))):q(t)}var zy=Object.defineProperty,Uy=Object.defineProperties,Ky=Object.getOwnPropertyDescriptors,Wc=Object.getOwnPropertySymbols,Yy=Object.prototype.hasOwnProperty,Gy=Object.prototype.propertyIsEnumerable,zc=(e,t,n)=>t in e?zy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zy=(e,t)=>{for(var n in t||(t={}))Yy.call(t,n)&&zc(e,n,t[n]);if(Wc)for(var n of Wc(t))Gy.call(t,n)&&zc(e,n,t[n]);return e},Jy=(e,t)=>Uy(e,Ky(t));function Qy(e){if(!Te(e))return tg(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=pl(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const r=[...e.value];r[n]=s,e.value=r}else{const r=Jy(Zy({},e.value),{[n]:s});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function rd(e,t=!0){yt()?bn(e):t?e():et(e)}function Xy(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let o=null;const i=q(!1);function l(){o&&(clearInterval(o),o=null)}function c(){i.value=!1,l()}function u(){const f=Ge(t);f<=0||(i.value=!0,r&&e(),l(),o=setInterval(e,f))}if(s&&Ut&&u(),Te(t)||typeof t=="function"){const f=ge(t,()=>{i.value&&Ut&&u()});_n(f)}return _n(c),{isActive:i,pause:c,resume:u}}function e0(e,t,n={}){const{immediate:s=!0}=n,r=q(!1);let o=null;function i(){o&&(clearTimeout(o),o=null)}function l(){r.value=!1,i()}function c(...u){i(),r.value=!0,o=setTimeout(()=>{r.value=!1,o=null,e(...u)},Ge(t))}return s&&(r.value=!0,Ut&&c()),_n(l),{isPending:Wt(r),start:c,stop:l}}function od(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=Te(e),o=q(e);function i(l){if(arguments.length)return o.value=l,o.value;{const c=Ge(n);return o.value=o.value===c?Ge(s):c,o.value}}return r?i:[o,i]}var Uc=Object.getOwnPropertySymbols,t0=Object.prototype.hasOwnProperty,n0=Object.prototype.propertyIsEnumerable,s0=(e,t)=>{var n={};for(var s in e)t0.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Uc)for(var s of Uc(e))t.indexOf(s)<0&&n0.call(e,s)&&(n[s]=e[s]);return n};function r0(e,t,n={}){const s=n,{eventFilter:r=nd}=s,o=s0(s,["eventFilter"]);return ge(e,By(r,t),o)}var o0=Object.defineProperty,i0=Object.defineProperties,a0=Object.getOwnPropertyDescriptors,Bo=Object.getOwnPropertySymbols,id=Object.prototype.hasOwnProperty,ad=Object.prototype.propertyIsEnumerable,Kc=(e,t,n)=>t in e?o0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l0=(e,t)=>{for(var n in t||(t={}))id.call(t,n)&&Kc(e,n,t[n]);if(Bo)for(var n of Bo(t))ad.call(t,n)&&Kc(e,n,t[n]);return e},c0=(e,t)=>i0(e,a0(t)),u0=(e,t)=>{var n={};for(var s in e)id.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Bo)for(var s of Bo(e))t.indexOf(s)<0&&ad.call(e,s)&&(n[s]=e[s]);return n};function f0(e,t,n={}){const s=n,{eventFilter:r}=s,o=u0(s,["eventFilter"]),{eventFilter:i,pause:l,resume:c,isActive:u}=qy(r);return{stop:r0(e,t,c0(l0({},o),{eventFilter:i})),pause:l,resume:c,isActive:u}}function It(e){var t;const n=Ge(e);return(t=n==null?void 0:n.$el)!=null?t:n}const tt=Ut?window:void 0,ld=Ut?window.document:void 0,p0=Ut?window.navigator:void 0;function Ie(...e){let t,n,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,r]=e,t=tt):[t,n,s,r]=e,!t)return hi;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],i=()=>{o.forEach(f=>f()),o.length=0},l=(f,p,d,m)=>(f.addEventListener(p,d,m),()=>f.removeEventListener(p,d,m)),c=ge(()=>[It(t),Ge(r)],([f,p])=>{i(),f&&o.push(...n.flatMap(d=>s.map(m=>l(f,d,m,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return _n(u),u}let Yc=!1;function d0(e,t,n={}){const{window:s=tt,ignore:r=[],capture:o=!0,detectIframe:i=!1}=n;if(!s)return;Hy&&!Yc&&(Yc=!0,Array.from(s.document.body.children).forEach(d=>d.addEventListener("click",hi)));let l=!0;const c=d=>r.some(m=>{if(typeof m=="string")return Array.from(s.document.querySelectorAll(m)).some(g=>g===d.target||d.composedPath().includes(g));{const g=It(m);return g&&(d.target===g||d.composedPath().includes(g))}}),f=[Ie(s,"click",d=>{const m=It(e);if(!(!m||m===d.target||d.composedPath().includes(m))){if(d.detail===0&&(l=!c(d)),!l){l=!0;return}t(d)}},{passive:!0,capture:o}),Ie(s,"pointerdown",d=>{const m=It(e);m&&(l=!d.composedPath().includes(m)&&!c(d))},{passive:!0}),i&&Ie(s,"blur",d=>{var m;const g=It(e);((m=s.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(s.document.activeElement))&&t(d)})].filter(Boolean);return()=>f.forEach(d=>d())}function h0(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function m0(...e){let t,n,s={};e.length===3?(t=e[0],n=e[1],s=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],s=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:r=tt,eventName:o="keydown",passive:i=!1,dedupe:l=!1}=s,c=h0(t);return Ie(r,o,f=>{f.repeat&&Ge(l)||c(f)&&n(f)},i)}function g0(e={}){var t;const{window:n=tt}=e,s=(t=e.document)!=null?t:n==null?void 0:n.document,r=Fy(()=>null,()=>s==null?void 0:s.activeElement);return n&&(Ie(n,"blur",o=>{o.relatedTarget===null&&r.trigger()},!0),Ie(n,"focus",r.trigger,!0)),r}function _0(){const e=q(!1);return yt()&&bn(()=>{e.value=!0}),e}function mi(e){const t=_0();return A(()=>(t.value,!!e()))}function v0(e,t={}){const{immediate:n=!0,window:s=tt}=t,r=q(!1);let o=0,i=null;function l(f){if(!r.value||!s)return;const p=f-o;e({delta:p,timestamp:f}),o=f,i=s.requestAnimationFrame(l)}function c(){!r.value&&s&&(r.value=!0,i=s.requestAnimationFrame(l))}function u(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&c(),_n(u),{isActive:Wt(r),pause:u,resume:c}}function ss(e,t={}){const{window:n=tt}=t,s=mi(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const o=q(!1),i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",l):r.removeListener(l))},l=()=>{s.value&&(i(),r=n.matchMedia(sd(e).value),o.value=!!(r!=null&&r.matches),r&&("addEventListener"in r?r.addEventListener("change",l):r.addListener(l)))};return bs(l),_n(()=>i()),o}const y0={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function b0(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=Wy(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=tt}=t;function r(l){return s?s.matchMedia(l).matches:!1}const o=l=>ss(`(min-width: ${n(l)})`,t),i=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>o(c),enumerable:!0,configurable:!0}),l),{});return Object.assign(i,{greater(l){return ss(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:o,smaller(l){return ss(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return ss(`(max-width: ${n(l)})`,t)},between(l,c){return ss(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return r(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return r(`(min-width: ${n(l)})`)},isSmaller(l){return r(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return r(`(max-width: ${n(l)})`)},isInBetween(l,c){return r(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)},current(){const l=Object.keys(e).map(c=>[c,o(c)]);return A(()=>l.filter(([,c])=>c.value).map(([c])=>c))}})}function w0(e={}){const{navigator:t=p0,read:n=!1,source:s,copiedDuring:r=1500,legacy:o=!1}=e,i=["copy","cut"],l=mi(()=>t&&"clipboard"in t),c=A(()=>l.value||o),u=q(""),f=q(!1),p=e0(()=>f.value=!1,r);function d(){l.value?t.clipboard.readText().then(w=>{u.value=w}):u.value=b()}if(c.value&&n)for(const w of i)Ie(w,d);async function m(w=Ge(s)){c.value&&w!=null&&(l.value?await t.clipboard.writeText(w):g(w),u.value=w,f.value=!0,p.start())}function g(w){const k=document.createElement("textarea");k.value=w??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function b(){var w,k,x;return(x=(k=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:k.toString())!=null?x:""}return{isSupported:c,text:u,copied:f,copy:m}}function k0(e){return JSON.parse(JSON.stringify(e))}const oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},io="__vueuse_ssr_handlers__",x0=S0();function S0(){return io in oo||(oo[io]=oo[io]||{}),oo[io]}function E0(e,t){return x0[e]||t}function $0(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var T0=Object.defineProperty,Gc=Object.getOwnPropertySymbols,C0=Object.prototype.hasOwnProperty,O0=Object.prototype.propertyIsEnumerable,Zc=(e,t,n)=>t in e?T0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jc=(e,t)=>{for(var n in t||(t={}))C0.call(t,n)&&Zc(e,n,t[n]);if(Gc)for(var n of Gc(t))O0.call(t,n)&&Zc(e,n,t[n]);return e};const P0={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Qc="vueuse-storage";function A0(e,t,n,s={}){var r;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:f,window:p=tt,eventFilter:d,onError:m=P=>{console.error(P)}}=s,g=(f?on:q)(t);if(!n)try{n=E0("getDefaultStorage",()=>{var P;return(P=tt)==null?void 0:P.localStorage})()}catch(P){m(P)}if(!n)return g;const b=Ge(t),w=$0(b),k=(r=s.serializer)!=null?r:P0[w],{pause:x,resume:v}=f0(g,()=>T(g.value),{flush:o,deep:i,eventFilter:d});return p&&l&&(Ie(p,"storage",R),Ie(p,Qc,C)),R(),g;function T(P){try{if(P==null)n.removeItem(e);else{const j=k.write(P),ne=n.getItem(e);ne!==j&&(n.setItem(e,j),p&&p.dispatchEvent(new CustomEvent(Qc,{detail:{key:e,oldValue:ne,newValue:j,storageArea:n}})))}}catch(j){m(j)}}function S(P){const j=P?P.newValue:n.getItem(e);if(j==null)return c&&b!==null&&n.setItem(e,k.write(b)),b;if(!P&&u){const ne=k.read(j);return typeof u=="function"?u(ne,b):w==="object"&&!Array.isArray(ne)?Jc(Jc({},b),ne):ne}else return typeof j!="string"?j:k.read(j)}function C(P){R(P.detail)}function R(P){if(!(P&&P.storageArea!==n)){if(P&&P.key==null){g.value=b;return}if(!(P&&P.key!==e)){x();try{g.value=S(P)}catch(j){m(j)}finally{P?et(v):v()}}}}}function M0(e){return ss("(prefers-color-scheme: dark)",e)}var I0=Object.defineProperty,L0=Object.defineProperties,R0=Object.getOwnPropertyDescriptors,Xc=Object.getOwnPropertySymbols,N0=Object.prototype.hasOwnProperty,F0=Object.prototype.propertyIsEnumerable,eu=(e,t,n)=>t in e?I0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j0=(e,t)=>{for(var n in t||(t={}))N0.call(t,n)&&eu(e,n,t[n]);if(Xc)for(var n of Xc(t))F0.call(t,n)&&eu(e,n,t[n]);return e},D0=(e,t)=>L0(e,R0(t));function C4(e,t={}){var n,s;const{pointerTypes:r,preventDefault:o,stopPropagation:i,exact:l,onMove:c,onEnd:u,onStart:f,initialValue:p,axis:d="both",draggingElement:m=tt,handle:g=e}=t,b=q((n=Ge(p))!=null?n:{x:0,y:0}),w=q(),k=C=>r?r.includes(C.pointerType):!0,x=C=>{Ge(o)&&C.preventDefault(),Ge(i)&&C.stopPropagation()},v=C=>{if(!k(C)||Ge(l)&&C.target!==Ge(e))return;const R=Ge(e).getBoundingClientRect(),P={x:C.clientX-R.left,y:C.clientY-R.top};(f==null?void 0:f(P,C))!==!1&&(w.value=P,x(C))},T=C=>{if(!k(C)||!w.value)return;let{x:R,y:P}=b.value;(d==="x"||d==="both")&&(R=C.clientX-w.value.x),(d==="y"||d==="both")&&(P=C.clientY-w.value.y),b.value={x:R,y:P},c==null||c(b.value,C),x(C)},S=C=>{k(C)&&w.value&&(w.value=void 0,u==null||u(b.value,C),x(C))};if(Ut){const C={capture:(s=t.capture)!=null?s:!0};Ie(g,"pointerdown",v,C),Ie(m,"pointermove",T,C),Ie(m,"pointerup",S,C)}return D0(j0({},Qy(b)),{position:b,isDragging:A(()=>!!w.value),style:A(()=>`left:${b.value.x}px;top:${b.value.y}px;`)})}var tu=Object.getOwnPropertySymbols,H0=Object.prototype.hasOwnProperty,V0=Object.prototype.propertyIsEnumerable,B0=(e,t)=>{var n={};for(var s in e)H0.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&tu)for(var s of tu(e))t.indexOf(s)<0&&V0.call(e,s)&&(n[s]=e[s]);return n};function q0(e,t,n={}){const s=n,{window:r=tt}=s,o=B0(s,["window"]);let i;const l=mi(()=>r&&"ResizeObserver"in r),c=()=>{i&&(i.disconnect(),i=void 0)},u=A(()=>Array.isArray(e)?e.map(d=>It(d)):[It(e)]),f=ge(u,d=>{if(c(),l.value&&r){i=new ResizeObserver(t);for(const m of d)m&&i.observe(m,o)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{c(),f()};return _n(p),{isSupported:l,stop:p}}function W0(e,t={width:0,height:0},n={}){const{window:s=tt,box:r="content-box"}=n,o=A(()=>{var c,u;return(u=(c=It(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=q(t.width),l=q(t.height);return q0(e,([c])=>{const u=r==="border-box"?c.borderBoxSize:r==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&o.value){const f=It(e);if(f){const p=s.getComputedStyle(f);i.value=parseFloat(p.width),l.value=parseFloat(p.height)}}else if(u){const f=Array.isArray(u)?u:[u];i.value=f.reduce((p,{inlineSize:d})=>p+d,0),l.value=f.reduce((p,{blockSize:d})=>p+d,0)}else i.value=c.contentRect.width,l.value=c.contentRect.height},n),ge(()=>It(e),c=>{i.value=c?t.width:0,l.value=c?t.height:0}),{width:i,height:l}}const nu=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function z0(e,t={}){const{document:n=ld,autoExit:s=!1}=t,r=A(()=>{var k;return(k=It(e))!=null?k:n==null?void 0:n.querySelector("html")}),o=q(!1),i=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(k=>n&&k in n||r.value&&k in r.value)),l=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(k=>n&&k in n||r.value&&k in r.value)),c=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(k=>n&&k in n||r.value&&k in r.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(k=>n&&k in n),f=mi(()=>r.value&&n&&i.value!==void 0&&l.value!==void 0&&c.value!==void 0),p=()=>u?(n==null?void 0:n[u])===r.value:!1,d=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const k=r.value;if((k==null?void 0:k[c.value])!=null)return!!k[c.value]}}return!1};async function m(){if(f.value){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const k=r.value;(k==null?void 0:k[l.value])!=null&&await k[l.value]()}o.value=!1}}async function g(){if(!f.value)return;d()&&await m();const k=r.value;i.value&&(k==null?void 0:k[i.value])!=null&&(await k[i.value](),o.value=!0)}async function b(){await(o.value?m():g())}const w=()=>{const k=d();(!k||k&&p())&&(o.value=k)};return Ie(n,nu,w,!1),Ie(()=>It(r),nu,w,!1),s&&_n(m),{isSupported:f,isFullscreen:o,enter:g,exit:m,toggle:b}}function Kt(e,t,n={}){const{window:s=tt}=n;return A0(e,t,s==null?void 0:s.localStorage,n)}const U0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function K0(e={}){const{reactive:t=!1,target:n=tt,aliasMap:s=U0,passive:r=!0,onEventFired:o=hi}=e,i=qe(new Set),l={toJSON(){return{}},current:i},c=t?qe(l):l,u=new Set,f=new Set;function p(b,w){b in c&&(t?c[b]=w:c[b].value=w)}function d(){i.clear();for(const b of f)p(b,!1)}function m(b,w){var k,x;const v=(k=b.key)==null?void 0:k.toLowerCase(),S=[(x=b.code)==null?void 0:x.toLowerCase(),v].filter(Boolean);v&&(w?i.add(v):i.delete(v));for(const C of S)f.add(C),p(C,w);v==="meta"&&!w?(u.forEach(C=>{i.delete(C),p(C,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&w&&[...i,...S].forEach(C=>u.add(C))}Ie(n,"keydown",b=>(m(b,!0),o(b)),{passive:r}),Ie(n,"keyup",b=>(m(b,!1),o(b)),{passive:r}),Ie("blur",d,{passive:!0}),Ie("focus",d,{passive:!0});const g=new Proxy(c,{get(b,w,k){if(typeof w!="string")return Reflect.get(b,w,k);if(w=w.toLowerCase(),w in s&&(w=s[w]),!(w in c))if(/[+_-]/.test(w)){const v=w.split(/[+_-]/g).map(T=>T.trim());c[w]=A(()=>v.every(T=>Ge(g[T])))}else c[w]=q(!1);const x=Reflect.get(b,w,k);return t?Ge(x):x}});return g}const Y0={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function O4(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:o=tt,target:i=o,eventFilter:l}=e,c=q(r.x),u=q(r.y),f=q(null),p=typeof t=="function"?t:Y0[t],d=k=>{const x=p(k);x&&([c.value,u.value]=x,f.value="mouse")},m=k=>{if(k.touches.length>0){const x=p(k.touches[0]);x&&([c.value,u.value]=x,f.value="touch")}},g=()=>{c.value=r.x,u.value=r.y},b=l?k=>l(()=>d(k),{}):k=>d(k),w=l?k=>l(()=>m(k),{}):k=>m(k);return i&&(Ie(i,"mousemove",b,{passive:!0}),Ie(i,"dragover",b,{passive:!0}),n&&t!=="movement"&&(Ie(i,"touchstart",w,{passive:!0}),Ie(i,"touchmove",w,{passive:!0}),s&&Ie(i,"touchend",g,{passive:!0}))),{x:c,y:u,sourceType:f}}function G0(e,t={}){const n=sd(e),{threshold:s=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:i}=t,l=qe({x:0,y:0}),c=(C,R)=>{l.x=C,l.y=R},u=qe({x:0,y:0}),f=(C,R)=>{u.x=C,u.y=R},p=A(()=>l.x-u.x),d=A(()=>l.y-u.y),{max:m,abs:g}=Math,b=A(()=>m(g(p.value),g(d.value))>=s),w=q(!1),k=q(!1),x=A(()=>b.value?g(p.value)>g(d.value)?p.value>0?"left":"right":d.value>0?"up":"down":"none"),v=C=>{var R,P,j;const ne=C.buttons===0,le=C.buttons===1;return(j=(P=(R=t.pointerTypes)==null?void 0:R.includes(C.pointerType))!=null?P:ne||le)!=null?j:!0},T=[Ie(e,"pointerdown",C=>{var R,P;if(!v(C))return;k.value=!0,(P=(R=n.value)==null?void 0:R.style)==null||P.setProperty("touch-action","none");const j=C.target;j==null||j.setPointerCapture(C.pointerId);const{clientX:ne,clientY:le}=C;c(ne,le),f(ne,le),i==null||i(C)}),Ie(e,"pointermove",C=>{if(!v(C)||!k.value)return;const{clientX:R,clientY:P}=C;f(R,P),!w.value&&b.value&&(w.value=!0),w.value&&(r==null||r(C))}),Ie(e,"pointerup",C=>{var R,P;v(C)&&(w.value&&(o==null||o(C,x.value)),k.value=!1,w.value=!1,(P=(R=n.value)==null?void 0:R.style)==null||P.setProperty("touch-action","initial"))})],S=()=>T.forEach(C=>C());return{isSwiping:Wt(w),direction:Wt(x),posStart:Wt(l),posEnd:Wt(u),distanceX:p,distanceY:d,stop:S}}let Z0=0;function P4(e,t={}){const n=q(!1),{document:s=ld,immediate:r=!0,manual:o=!1,id:i=`vueuse_styletag_${++Z0}`}=t,l=q(e);let c=()=>{};const u=()=>{if(!s)return;const p=s.getElementById(i)||s.createElement("style");p.isConnected||(p.type="text/css",p.id=i,t.media&&(p.media=t.media),s.head.appendChild(p)),!n.value&&(c=ge(l,d=>{p.textContent=d},{immediate:!0}),n.value=!0)},f=()=>{!s||!n.value||(c(),s.head.removeChild(s.getElementById(i)),n.value=!1)};return r&&!o&&rd(u),o||_n(f),{id:i,css:l,unload:f,load:u,isLoaded:Wt(n)}}var J0=Object.defineProperty,su=Object.getOwnPropertySymbols,Q0=Object.prototype.hasOwnProperty,X0=Object.prototype.propertyIsEnumerable,ru=(e,t,n)=>t in e?J0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,e1=(e,t)=>{for(var n in t||(t={}))Q0.call(t,n)&&ru(e,n,t[n]);if(su)for(var n of su(t))X0.call(t,n)&&ru(e,n,t[n]);return e};function A4(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame",callback:o}=e,i=q(ka()+n),l=()=>i.value=ka()+n,c=o?()=>{l(),o(i.value)}:l,u=r==="requestAnimationFrame"?v0(c,{immediate:s}):Xy(c,r,{immediate:s});return t?e1({timestamp:i},u):i}function Xt(e,t,n,s={}){var r,o,i;const{clone:l=!1,passive:c=!1,eventName:u,deep:f=!1,defaultValue:p,shouldEmit:d}=s,m=yt(),g=n||(m==null?void 0:m.emit)||((r=m==null?void 0:m.$emit)==null?void 0:r.bind(m))||((i=(o=m==null?void 0:m.proxy)==null?void 0:o.$emit)==null?void 0:i.bind(m==null?void 0:m.proxy));let b=u;t||(t="modelValue"),b=u||b||`update:${t.toString()}`;const w=v=>l?typeof l=="function"?l(v):k0(v):v,k=()=>Dy(e[t])?w(e[t]):p,x=v=>{d?d(v)&&g(b,v):g(b,v)};if(c){const v=k(),T=q(v);return ge(()=>e[t],S=>T.value=w(S)),ge(T,S=>{(S!==e[t]||f)&&x(S)},{deep:f}),T}else return A({get(){return k()},set(v){x(v)}})}function M4({window:e=tt}={}){if(!e)return q(!1);const t=q(e.document.hasFocus());return Ie(e,"blur",()=>{t.value=!1}),Ie(e,"focus",()=>{t.value=!0}),t}function t1(e={}){const{window:t=tt,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:o=!0}=e,i=q(n),l=q(s),c=()=>{t&&(o?(i.value=t.innerWidth,l.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(c(),rd(c),Ie("resize",c,{passive:!0}),r){const u=ss("(orientation: portrait)");ge(u,()=>c())}return{width:i,height:l}}function n1(){return cd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function cd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const s1=typeof Proxy=="function",r1="devtools-plugin:setup",o1="plugin:settings:set";let $s,xa;function i1(){var e;return $s!==void 0||(typeof window<"u"&&window.performance?($s=!0,xa=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?($s=!0,xa=global.perf_hooks.performance):$s=!1),$s}function a1(){return i1()?xa.now():Date.now()}class l1{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const i in t.settings){const l=t.settings[i];s[i]=l.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},s);try{const i=localStorage.getItem(r),l=JSON.parse(i);Object.assign(o,l)}catch{}this.fallbacks={getSettings(){return o},setSettings(i){try{localStorage.setItem(r,JSON.stringify(i))}catch{}o=i},now(){return a1()}},n&&n.on(o1,(i,l)=>{i===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(i,l)=>this.target?this.target.on[l]:(...c)=>{this.onQueue.push({method:l,args:c})}}),this.proxiedTarget=new Proxy({},{get:(i,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...c)=>(this.targetQueue.push({method:l,args:c,resolve:()=>{}}),this.fallbacks[l](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:l,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function c1(e,t){const n=e,s=cd(),r=n1(),o=s1&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))r.emit(r1,e,t);else{const i=o?new l1(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const dn=typeof window<"u";function u1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function Ri(e,t){const n={};for(const s in t){const r=t[s];n[s]=Tt(r)?r.map(e):e(r)}return n}const hr=()=>{},Tt=Array.isArray;function Ee(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const f1=/\/$/,p1=e=>e.replace(f1,"");function Ni(e,t,n="/"){let s,r={},o="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),o=t.slice(c+1,l>-1?l:t.length),r=e(o)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=m1(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:i}}function d1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ou(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function iu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Vn(t.matched[s],n.matched[r])&&ud(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ud(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!h1(e[n],t[n]))return!1;return!0}function h1(e,t){return Tt(e)?au(e,t):Tt(t)?au(t,e):e===t}function au(e,t){return Tt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function m1(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Or;(function(e){e.pop="pop",e.push="push"})(Or||(Or={}));var mr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mr||(mr={}));function g1(e){if(!e)if(dn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),p1(e)}const _1=/^[^#]+#/;function v1(e,t){return e.replace(_1,"#")+t}function y1(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const gi=()=>({left:window.pageXOffset,top:window.pageYOffset});function b1(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#");if(typeof e.el=="string"&&(!s||!document.getElementById(e.el.slice(1))))try{const o=document.querySelector(e.el);if(s&&o){Ee(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r){Ee(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=y1(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function lu(e,t){return(history.state?history.state.position-t:-1)+e}const Sa=new Map;function w1(e,t){Sa.set(e,t)}function k1(e){const t=Sa.get(e);return Sa.delete(e),t}let x1=()=>location.protocol+"//"+location.host;function fd(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let l=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),ou(c,"")}return ou(n,e)+s+r}function S1(e,t,n,s){let r=[],o=[],i=null;const l=({state:d})=>{const m=fd(e,location),g=n.value,b=t.value;let w=0;if(d){if(n.value=m,t.value=d,i&&i===g){i=null;return}w=b?d.position-b.position:0}else s(m);r.forEach(k=>{k(n.value,g,{delta:w,type:Or.pop,direction:w?w>0?mr.forward:mr.back:mr.unknown})})};function c(){i=n.value}function u(d){r.push(d);const m=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return o.push(m),m}function f(){const{history:d}=window;d.state&&d.replaceState(Ae({},d.state,{scroll:gi()}),"")}function p(){for(const d of o)d();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function cu(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?gi():null}}function E1(e){const{history:t,location:n}=window,s={value:fd(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,u,f){const p=e.indexOf("#"),d=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:x1()+e+c;try{t[f?"replaceState":"pushState"](u,"",d),r.value=u}catch(m){Ee("Error with push/replace State",m),n[f?"replace":"assign"](d)}}function i(c,u){const f=Ae({},t.state,cu(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});o(c,f,!0),s.value=c}function l(c,u){const f=Ae({},r.value,t.state,{forward:c,scroll:gi()});t.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),o(f.current,f,!0);const p=Ae({},cu(s.value,c,null),{position:f.position+1},u);o(c,p,!1),s.value=c}return{location:s,state:r,push:l,replace:i}}function $1(e){e=g1(e);const t=E1(e),n=S1(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=Ae({location:"",base:e,go:s,createHref:v1.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function T1(e){return typeof e=="string"||e&&typeof e=="object"}function pd(e){return typeof e=="string"||typeof e=="symbol"}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dd=Symbol("navigation failure");var uu;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(uu||(uu={}));const C1={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${P1(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function Fs(e,t){return Ae(new Error(C1[e](t)),{type:e,[dd]:!0},t)}function ln(e,t){return e instanceof Error&&dd in e&&(t==null||!!(e.type&t))}const O1=["params","query","hash"];function P1(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const n of O1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}const fu="[^/]+?",A1={sensitive:!1,strict:!1,start:!0,end:!0},M1=/[.+*?^${}()[\]/\\]/g;function I1(e,t){const n=Ae({},A1,t),s=[];let r=n.start?"^":"";const o=[];for(const u of e){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const d=u[p];let m=40+(n.sensitive?.25:0);if(d.type===0)p||(r+="/"),r+=d.value.replace(M1,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:b,optional:w,regexp:k}=d;o.push({name:g,repeatable:b,optional:w});const x=k||fu;if(x!==fu){m+=10;try{new RegExp(`(${x})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+T.message)}}let v=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(v=w&&u.length<2?`(?:/${v})`:"/"+v),w&&(v+="?"),r+=v,m+=20,w&&(m+=-8),b&&(m+=-20),x===".*"&&(m+=-50)}f.push(m)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(u){const f=u.match(i),p={};if(!f)return null;for(let d=1;d<f.length;d++){const m=f[d]||"",g=o[d-1];p[g.name]=m&&g.repeatable?m.split("/"):m}return p}function c(u){let f="",p=!1;for(const d of e){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const m of d)if(m.type===0)f+=m.value;else if(m.type===1){const{value:g,repeatable:b,optional:w}=m,k=g in u?u[g]:"";if(Tt(k)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Tt(k)?k.join("/"):k;if(!x)if(w)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${g}"`);f+=x}}return f||"/"}return{re:i,score:s,keys:o,parse:l,stringify:c}}function L1(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function R1(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=L1(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(pu(s))return 1;if(pu(r))return-1}return r.length-s.length}function pu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const N1={type:0,value:""},F1=/[a-zA-Z0-9_]/;function j1(e){if(!e)return[[]];if(e==="/")return[[N1]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let l=0,c,u="",f="";function p(){u&&(n===0?o.push({type:0,value:u}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),i()):c===":"?(p(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:F1.test(c)?d():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),i(),r}function D1(e,t,n){const s=I1(j1(e.path),n);{const o=new Set;for(const i of s.keys)o.has(i.name)&&Ee(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),o.add(i.name)}const r=Ae(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function H1(e,t){const n=[],s=new Map;t=mu({strict:!1,end:!0,sensitive:!1},t);function r(f){return s.get(f)}function o(f,p,d){const m=!d,g=V1(f);z1(g,p),g.aliasOf=d&&d.record;const b=mu(t,f),w=[g];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const T of v)w.push(Ae({},g,{components:d?d.record.components:g.components,path:T,aliasOf:d?d.record:g}))}let k,x;for(const v of w){const{path:T}=v;if(p&&T[0]!=="/"){const S=p.record.path,C=S[S.length-1]==="/"?"":"/";v.path=p.record.path+(T&&C+T)}if(v.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=D1(v,p,b),p&&T[0]==="/"&&U1(k,p),d?(d.alias.push(k),W1(d,k)):(x=x||k,x!==k&&x.alias.push(k),m&&f.name&&!hu(k)&&i(f.name)),g.children){const S=g.children;for(let C=0;C<S.length;C++)o(S[C],k,d&&d.children[C])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return x?()=>{i(x)}:hr}function i(f){if(pd(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function l(){return n}function c(f){let p=0;for(;p<n.length&&R1(f,n[p])>=0&&(f.record.path!==n[p].record.path||!hd(f,n[p]));)p++;n.splice(p,0,f),f.record.name&&!hu(f)&&s.set(f.record.name,f)}function u(f,p){let d,m={},g,b;if("name"in f&&f.name){if(d=s.get(f.name),!d)throw Fs(1,{location:f});{const x=Object.keys(f.params||{}).filter(v=>!d.keys.find(T=>T.name===v));x.length&&Ee(`Discarded invalid param(s) "${x.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}b=d.record.name,m=Ae(du(p.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&du(f.params,d.keys.map(x=>x.name))),g=d.stringify(m)}else if("path"in f)g=f.path,g.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),d=n.find(x=>x.re.test(g)),d&&(m=d.parse(g),b=d.record.name);else{if(d=p.name?s.get(p.name):n.find(x=>x.re.test(p.path)),!d)throw Fs(1,{location:f,currentLocation:p});b=d.record.name,m=Ae({},p.params,f.params),g=d.stringify(m)}const w=[];let k=d;for(;k;)w.unshift(k.record),k=k.parent;return{name:b,path:g,params:m,matched:w,meta:q1(w)}}return e.forEach(f=>o(f)),{addRoute:o,resolve:u,removeRoute:i,getRoutes:l,getRecordMatcher:r}}function du(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function V1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:B1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function B1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function hu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function q1(e){return e.reduce((t,n)=>Ae(t,n.meta),{})}function mu(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Ea(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function W1(e,t){for(const n of e.keys)if(!n.optional&&!t.keys.find(Ea.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);for(const n of t.keys)if(!n.optional&&!e.keys.find(Ea.bind(null,n)))return Ee(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`)}function z1(e,t){t&&t.record.name&&!e.name&&!e.path&&Ee(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function U1(e,t){for(const n of t.keys)if(!e.keys.find(Ea.bind(null,n)))return Ee(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`)}function hd(e,t){return t.children.some(n=>n===e||hd(e,n))}const md=/#/g,K1=/&/g,Y1=/\//g,G1=/=/g,Z1=/\?/g,gd=/\+/g,J1=/%5B/g,Q1=/%5D/g,_d=/%5E/g,X1=/%60/g,vd=/%7B/g,eb=/%7C/g,yd=/%7D/g,tb=/%20/g;function Tl(e){return encodeURI(""+e).replace(eb,"|").replace(J1,"[").replace(Q1,"]")}function nb(e){return Tl(e).replace(vd,"{").replace(yd,"}").replace(_d,"^")}function $a(e){return Tl(e).replace(gd,"%2B").replace(tb,"+").replace(md,"%23").replace(K1,"%26").replace(X1,"`").replace(vd,"{").replace(yd,"}").replace(_d,"^")}function sb(e){return $a(e).replace(G1,"%3D")}function rb(e){return Tl(e).replace(md,"%23").replace(Z1,"%3F")}function ob(e){return e==null?"":rb(e).replace(Y1,"%2F")}function Pr(e){try{return decodeURIComponent(""+e)}catch{Ee(`Error decoding "${e}". Using original value`)}return""+e}function ib(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(gd," "),i=o.indexOf("="),l=Pr(i<0?o:o.slice(0,i)),c=i<0?null:Pr(o.slice(i+1));if(l in t){let u=t[l];Tt(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function gu(e){let t="";for(let n in e){const s=e[n];if(n=sb(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Tt(s)?s.map(o=>o&&$a(o)):[s&&$a(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function ab(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Tt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const lb=Symbol("router view location matched"),_u=Symbol("router view depth"),Cl=Symbol("router"),bd=Symbol("route location"),Ta=Symbol("router view location");function Js(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Tn(e,t,n,s,r){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Fs(4,{from:n,to:t})):p instanceof Error?l(p):T1(p)?l(Fs(2,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),i())},u=e.call(s&&s.instances[r],t,n,cb(c,t,n));let f=Promise.resolve(u);if(e.length<3&&(f=f.then(c)),e.length>2){const p=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)f=f.then(d=>c._called?d:(Ee(p),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Ee(p),l(new Error("Invalid navigation guard"));return}}f.catch(p=>l(p))})}function cb(e,t,n){let s=0;return function(){s++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,s===1&&e.apply(null,arguments)}}function Fi(e,t,n,s){const r=[];for(const o of e){!o.components&&!o.children.length&&Ee(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);for(const i in o.components){let l=o.components[i];{if(!l||typeof l!="object"&&typeof l!="function")throw Ee(`Component "${i}" in record with path "${o.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Ee(`Component "${i}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=l;l=()=>c}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Ee(`Component "${i}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(ub(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Tn(u,n,s,o,i))}else{let c=l();"catch"in c||(Ee(`Component "${i}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const f=u1(u)?u.default:u;o.components[i]=f;const d=(f.__vccOpts||f)[t];return d&&Tn(d,n,s,o,i)()}))}}}return r}function ub(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vu(e){const t=H(Cl),n=H(bd),s=A(()=>t.resolve(M(e.to))),r=A(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const d=p.findIndex(Vn.bind(null,f));if(d>-1)return d;const m=yu(c[u-2]);return u>1&&yu(f)===m&&p[p.length-1].path!==m?p.findIndex(Vn.bind(null,c[u-2])):d}),o=A(()=>r.value>-1&&hb(n.params,s.value.params)),i=A(()=>r.value>-1&&r.value===n.matched.length-1&&ud(n.params,s.value.params));function l(c={}){return db(c)?t[M(e.replace)?"replace":"push"](M(e.to)).catch(hr):Promise.resolve()}if(dn){const c=yt();if(c){const u={route:s.value,isActive:o.value,isExactActive:i.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),bs(()=>{u.route=s.value,u.isActive=o.value,u.isExactActive=i.value},{flush:"post"})}}return{route:s,href:A(()=>s.value.href),isActive:o,isExactActive:i,navigate:l}}const fb=Oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vu,setup(e,{slots:t}){const n=qe(vu(e)),{options:s}=H(Cl),r=A(()=>({[bu(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bu(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Et("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),pb=fb;function db(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function hb(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Tt(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function yu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bu=(e,t,n)=>e??t??n,mb=Oe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){_b();const s=H(Ta),r=A(()=>e.route||s.value),o=H(_u,0),i=A(()=>{let u=M(o);const{matched:f}=r.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=A(()=>r.value.matched[i.value]);xt(_u,A(()=>i.value+1)),xt(lb,l),xt(Ta,r);const c=q();return ge(()=>[c.value,l.value,e.name],([u,f,p],[d,m,g])=>{f&&(f.instances[p]=u,m&&m!==f&&u&&u===d&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!Vn(f,m)||!d)&&(f.enterCallbacks[p]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,f=e.name,p=l.value,d=p&&p.components[f];if(!d)return wu(n.default,{Component:d,route:u});const m=p.props[f],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,w=Et(d,Ae({},g,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[f]=null)},ref:c}));if(dn&&w.ref){const k={depth:i.value,name:p.name,path:p.path,meta:p.meta};(Tt(w.ref)?w.ref.map(v=>v.i):[w.ref.i]).forEach(v=>{v.__vrv_devtools=k})}return wu(n.default,{Component:w,route:u})||w}}});function wu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gb=mb;function _b(){const e=yt(),t=e.parent&&e.parent.type.name,n=e.parent&&e.parent.subTree&&e.parent.subTree.type;if(t&&(t==="KeepAlive"||t.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const s=t==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function Qs(e,t){const n=Ae({},e,{matched:e.matched.map(s=>$b(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function ao(e){return{_custom:{display:e}}}let vb=0;function yb(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=vb++;c1({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((f,p)=>{f.instanceData&&f.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Qs(t.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:f,componentInstance:p})=>{if(p.__vrv_devtools){const d=p.__vrv_devtools;f.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:wd})}Tt(p.__vrl_devtools)&&(p.__devtoolsApi=r,p.__vrl_devtools.forEach(d=>{let m=Sd,g="";d.isExactActive?(m=xd,g="This is exactly active"):d.isActive&&(m=kd,g="This link is active"),f.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:m})}))}),ge(t.currentRoute,()=>{c(),r.notifyComponentUpdate(),r.sendInspectorTree(l),r.sendInspectorState(l)});const o="router:navigations:"+s;r.addTimelineLayer({id:o,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((f,p)=>{r.addTimelineEvent({layerId:o,event:{title:"Error during Navigation",subtitle:p.fullPath,logType:"error",time:r.now(),data:{error:f},groupId:p.meta.__navigationId}})});let i=0;t.beforeEach((f,p)=>{const d={guard:ao("beforeEach"),from:Qs(p,"Current Location during this navigation"),to:Qs(f,"Target location")};Object.defineProperty(f.meta,"__navigationId",{value:i++}),r.addTimelineEvent({layerId:o,event:{time:r.now(),title:"Start of navigation",subtitle:f.fullPath,data:d,groupId:f.meta.__navigationId}})}),t.afterEach((f,p,d)=>{const m={guard:ao("afterEach")};d?(m.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},m.status=ao("❌")):m.status=ao("✅"),m.from=Qs(p,"Current Location during this navigation"),m.to=Qs(f,"Target location"),r.addTimelineEvent({layerId:o,event:{title:"End of navigation",subtitle:f.fullPath,time:r.now(),data:m,logType:d?"warning":"default",groupId:f.meta.__navigationId}})});const l="router-inspector:"+s;r.addInspector({id:l,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const f=u;let p=n.getRoutes().filter(d=>!d.parent);p.forEach(Td),f.filter&&(p=p.filter(d=>Ca(d,f.filter.toLowerCase()))),p.forEach(d=>$d(d,t.currentRoute.value)),f.rootNodes=p.map(Ed)}let u;r.on.getInspectorTree(f=>{u=f,f.app===e&&f.inspectorId===l&&c()}),r.on.getInspectorState(f=>{if(f.app===e&&f.inspectorId===l){const d=n.getRoutes().find(m=>m.record.__vd_id===f.nodeId);d&&(f.state={options:wb(d)})}}),r.sendInspectorTree(l),r.sendInspectorState(l)})}function bb(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function wb(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${bb(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const wd=15485081,kd=2450411,xd=8702998,kb=2282478,Sd=16486972,xb=6710886;function Ed(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:kb}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Sd}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:wd}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:xd}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:kd}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:xb});let s=n.__vd_id;return s==null&&(s=String(Sb++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(Ed)}}let Sb=0;const Eb=/^\/(.*)\/([a-z]*)$/;function $d(e,t){const n=t.matched.length&&Vn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>Vn(s,e.record))),e.children.forEach(s=>$d(s,t))}function Td(e){e.__vd_match=!1,e.children.forEach(Td)}function Ca(e,t){const n=String(e.re).match(Eb);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(i=>Ca(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const r=e.record.path.toLowerCase(),o=Pr(r);return!t.startsWith("/")&&(o.includes(t)||r.includes(t))||o.startsWith(t)||r.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>Ca(i,t))}function $b(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function Tb(e){const t=H1(e.routes,e),n=e.parseQuery||ib,s=e.stringifyQuery||gu,r=e.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const o=Js(),i=Js(),l=Js(),c=on(xn);let u=xn;dn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ri.bind(null,O=>""+O),p=Ri.bind(null,ob),d=Ri.bind(null,Pr);function m(O,K){let G,ee;return pd(O)?(G=t.getRecordMatcher(O),ee=K):ee=O,t.addRoute(ee,G)}function g(O){const K=t.getRecordMatcher(O);K?t.removeRoute(K):Ee(`Cannot remove non-existent route "${String(O)}"`)}function b(){return t.getRoutes().map(O=>O.record)}function w(O){return!!t.getRecordMatcher(O)}function k(O,K){if(K=Ae({},K||c.value),typeof O=="string"){const y=Ni(n,O,K.path),$=t.resolve({path:y.path},K),L=r.createHref(y.fullPath);return L.startsWith("//")?Ee(`Location "${O}" resolved to "${L}". A resolved location cannot start with multiple slashes.`):$.matched.length||Ee(`No match found for location with path "${O}"`),Ae(y,$,{params:d($.params),hash:Pr(y.hash),redirectedFrom:void 0,href:L})}let G;if("path"in O)"params"in O&&!("name"in O)&&Object.keys(O.params).length&&Ee(`Path "${O.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),G=Ae({},O,{path:Ni(n,O.path,K.path).path});else{const y=Ae({},O.params);for(const $ in y)y[$]==null&&delete y[$];G=Ae({},O,{params:p(y)}),K.params=p(K.params)}const ee=t.resolve(G,K),be=O.hash||"";be&&!be.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${be}" with "#${be}".`),ee.params=f(d(ee.params));const Ne=d1(s,Ae({},O,{hash:nb(be),path:ee.path})),_=r.createHref(Ne);return _.startsWith("//")?Ee(`Location "${O}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):ee.matched.length||Ee(`No match found for location with path "${"path"in O?O.path:O}"`),Ae({fullPath:Ne,hash:be,query:s===gu?ab(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:_})}function x(O){return typeof O=="string"?Ni(n,O,c.value.path):Ae({},O)}function v(O,K){if(u!==O)return Fs(8,{from:K,to:O})}function T(O){return R(O)}function S(O){return T(Ae(x(O),{replace:!0}))}function C(O){const K=O.matched[O.matched.length-1];if(K&&K.redirect){const{redirect:G}=K;let ee=typeof G=="function"?G(O):G;if(typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=x(ee):{path:ee},ee.params={}),!("path"in ee)&&!("name"in ee))throw Ee(`Invalid redirect found:
${JSON.stringify(ee,null,2)}
 when navigating to "${O.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ae({query:O.query,hash:O.hash,params:"path"in ee?{}:O.params},ee)}}function R(O,K){const G=u=k(O),ee=c.value,be=O.state,Ne=O.force,_=O.replace===!0,y=C(G);if(y)return R(Ae(x(y),{state:typeof y=="object"?Ae({},be,y.state):be,force:Ne,replace:_}),K||G);const $=G;$.redirectedFrom=K;let L;return!Ne&&iu(s,ee,G)&&(L=Fs(16,{to:$,from:ee}),Ct(ee,ee,!0,!1)),(L?Promise.resolve(L):ne($,ee)).catch(I=>ln(I)?ln(I,2)?I:Me(I):ie(I,$,ee)).then(I=>{if(I){if(ln(I,2))return iu(s,k(I.to),$)&&K&&(K._count=K._count?K._count+1:1)>30?(Ee(`Detected a possibly infinite redirection in a navigation guard when going from "${ee.fullPath}" to "${$.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):R(Ae({replace:_},x(I.to),{state:typeof I.to=="object"?Ae({},be,I.to.state):be,force:Ne}),K||$)}else I=W($,ee,!0,_,be);return le($,ee,I),I})}function P(O,K){const G=v(O,K);return G?Promise.reject(G):Promise.resolve()}function j(O){const K=Yt.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(O):O()}function ne(O,K){let G;const[ee,be,Ne]=Cb(O,K);G=Fi(ee.reverse(),"beforeRouteLeave",O,K);for(const y of ee)y.leaveGuards.forEach($=>{G.push(Tn($,O,K))});const _=P.bind(null,O,K);return G.push(_),Ot(G).then(()=>{G=[];for(const y of o.list())G.push(Tn(y,O,K));return G.push(_),Ot(G)}).then(()=>{G=Fi(be,"beforeRouteUpdate",O,K);for(const y of be)y.updateGuards.forEach($=>{G.push(Tn($,O,K))});return G.push(_),Ot(G)}).then(()=>{G=[];for(const y of O.matched)if(y.beforeEnter&&!K.matched.includes(y))if(Tt(y.beforeEnter))for(const $ of y.beforeEnter)G.push(Tn($,O,K));else G.push(Tn(y.beforeEnter,O,K));return G.push(_),Ot(G)}).then(()=>(O.matched.forEach(y=>y.enterCallbacks={}),G=Fi(Ne,"beforeRouteEnter",O,K),G.push(_),Ot(G))).then(()=>{G=[];for(const y of i.list())G.push(Tn(y,O,K));return G.push(_),Ot(G)}).catch(y=>ln(y,8)?y:Promise.reject(y))}function le(O,K,G){for(const ee of l.list())j(()=>ee(O,K,G))}function W(O,K,G,ee,be){const Ne=v(O,K);if(Ne)return Ne;const _=K===xn,y=dn?history.state:{};G&&(ee||_?r.replace(O.fullPath,Ae({scroll:_&&y&&y.scroll},be)):r.push(O.fullPath,be)),c.value=O,Ct(O,K,G,_),Me()}let me;function _e(){me||(me=r.listen((O,K,G)=>{if(!zn.listening)return;const ee=k(O),be=C(ee);if(be){R(Ae(be,{replace:!0}),ee).catch(hr);return}u=ee;const Ne=c.value;dn&&w1(lu(Ne.fullPath,G.delta),gi()),ne(ee,Ne).catch(_=>ln(_,12)?_:ln(_,2)?(R(_.to,ee).then(y=>{ln(y,20)&&!G.delta&&G.type===Or.pop&&r.go(-1,!1)}).catch(hr),Promise.reject()):(G.delta&&r.go(-G.delta,!1),ie(_,ee,Ne))).then(_=>{_=_||W(ee,Ne,!1),_&&(G.delta&&!ln(_,8)?r.go(-G.delta,!1):G.type===Or.pop&&ln(_,20)&&r.go(-1,!1)),le(ee,Ne,_)}).catch(hr)}))}let ye=Js(),Re=Js(),X;function ie(O,K,G){Me(O);const ee=Re.list();return ee.length?ee.forEach(be=>be(O,K,G)):(Ee("uncaught error during route navigation:"),console.error(O)),Promise.reject(O)}function ke(){return X&&c.value!==xn?Promise.resolve():new Promise((O,K)=>{ye.add([O,K])})}function Me(O){return X||(X=!O,_e(),ye.list().forEach(([K,G])=>O?G(O):K()),ye.reset()),O}function Ct(O,K,G,ee){const{scrollBehavior:be}=e;if(!dn||!be)return Promise.resolve();const Ne=!G&&k1(lu(O.fullPath,0))||(ee||!G)&&history.state&&history.state.scroll||null;return et().then(()=>be(O,K,Ne)).then(_=>_&&b1(_)).catch(_=>ie(_,O,K))}const st=O=>r.go(O);let ht;const Yt=new Set,zn={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:w,getRoutes:b,resolve:k,options:e,push:T,replace:S,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:Re.add,isReady:ke,install(O){const K=this;O.component("RouterLink",pb),O.component("RouterView",gb),O.config.globalProperties.$router=K,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>M(c)}),dn&&!ht&&c.value===xn&&(ht=!0,T(r.location).catch(be=>{Ee("Unexpected error when starting the router:",be)}));const G={};for(const be in xn)G[be]=A(()=>c.value[be]);O.provide(Cl,K),O.provide(bd,qe(G)),O.provide(Ta,c);const ee=O.unmount;Yt.add(O),O.unmount=function(){Yt.delete(O),Yt.size<1&&(u=xn,me&&me(),me=null,c.value=xn,ht=!1,X=!1),ee()},dn&&yb(O,K,t)}};function Ot(O){return O.reduce((K,G)=>K.then(()=>j(G)),Promise.resolve())}return zn}function Cb(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const l=t.matched[i];l&&(e.matched.find(u=>Vn(u,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(u=>Vn(u,c))||r.push(c))}return[n,s,r]}const ji=q(!1),gr=q(!1),Ps=q(!1),Ob=q(!0),Oa=b0({xs:460,...y0}),ms=t1(),Cd=K0(),Pb=A(()=>ms.height.value-ms.width.value/Mn>180),Od=z0(Ut?document.body:null),Rn=g0(),Ab=A(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Rn.value)==null?void 0:e.tagName)||"")||((t=Rn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Mb=A(()=>{var e;return["BUTTON","A"].includes(((e=Rn.value)==null?void 0:e.tagName)||"")});Kt("slidev-camera","default");Kt("slidev-mic","default");const vo=Kt("slidev-scale",0),ct=Kt("slidev-show-overview",!1),Di=Kt("slidev-presenter-cursor",!0),ku=Kt("slidev-show-editor",!1);Kt("slidev-editor-width",Ut?window.innerWidth*.4:100);const Pd=od(ct);function xu(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function Ib(e){return[-e[0],-e[1]]}function Bt(e,t){return[e[0]+t[0],e[1]+t[1]]}function Mt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Vt(e,t){return[e[0]*t,e[1]*t]}function Lb(e,t){return[e[0]/t,e[1]/t]}function Xs(e){return[e[1],-e[0]]}function Su(e,t){return e[0]*t[0]+e[1]*t[1]}function Rb(e,t){return e[0]===t[0]&&e[1]===t[1]}function Nb(e){return Math.hypot(e[0],e[1])}function Fb(e){return e[0]*e[0]+e[1]*e[1]}function Eu(e,t){return Fb(Mt(e,t))}function Ad(e){return Lb(e,Nb(e))}function jb(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function er(e,t,n){let s=Math.sin(n),r=Math.cos(n),o=e[0]-t[0],i=e[1]-t[1],l=o*r-i*s,c=o*s+i*r;return[l+t[0],c+t[1]]}function Pa(e,t,n){return Bt(e,Vt(Mt(t,e),n))}function $u(e,t,n){return Bt(e,Vt(t,n))}var{min:Ts,PI:Db}=Math,Tu=.275,tr=Db+1e-4;function Hb(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:o=!0,easing:i=X=>X,start:l={},end:c={},last:u=!1}=t,{cap:f=!0,easing:p=X=>X*(2-X)}=l,{cap:d=!0,easing:m=X=>--X*X*X+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,b=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,w=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,k=Math.pow(n*s,2),x=[],v=[],T=e.slice(0,10).reduce((X,ie)=>{let ke=ie.pressure;if(o){let Me=Ts(1,ie.distance/n),Ct=Ts(1,1-Me);ke=Ts(1,X+(Ct-X)*(Me*Tu))}return(X+ke)/2},e[0].pressure),S=xu(n,r,e[e.length-1].pressure,i),C,R=e[0].vector,P=e[0].point,j=P,ne=P,le=j,W=!1;for(let X=0;X<e.length;X++){let{pressure:ie}=e[X],{point:ke,vector:Me,distance:Ct,runningLength:st}=e[X];if(X<e.length-1&&g-st<3)continue;if(r){if(o){let ee=Ts(1,Ct/n),be=Ts(1,1-ee);ie=Ts(1,T+(be-T)*(ee*Tu))}S=xu(n,r,ie,i)}else S=n/2;C===void 0&&(C=S);let ht=st<b?p(st/b):1,Yt=g-st<w?m((g-st)/w):1;S=Math.max(.01,S*Math.min(ht,Yt));let zn=(X<e.length-1?e[X+1]:e[X]).vector,Ot=X<e.length-1?Su(Me,zn):1,O=Su(Me,R)<0&&!W,K=Ot!==null&&Ot<0;if(O||K){let ee=Vt(Xs(R),S);for(let be=1/13,Ne=0;Ne<=1;Ne+=be)ne=er(Mt(ke,ee),ke,tr*Ne),x.push(ne),le=er(Bt(ke,ee),ke,tr*-Ne),v.push(le);P=ne,j=le,K&&(W=!0);continue}if(W=!1,X===e.length-1){let ee=Vt(Xs(Me),S);x.push(Mt(ke,ee)),v.push(Bt(ke,ee));continue}let G=Vt(Xs(Pa(zn,Me,Ot)),S);ne=Mt(ke,G),(X<=1||Eu(P,ne)>k)&&(x.push(ne),P=ne),le=Bt(ke,G),(X<=1||Eu(j,le)>k)&&(v.push(le),j=le),T=ie,R=Me}let me=e[0].point.slice(0,2),_e=e.length>1?e[e.length-1].point.slice(0,2):Bt(e[0].point,[1,1]),ye=[],Re=[];if(e.length===1){if(!(b||w)||u){let X=$u(me,Ad(Xs(Mt(me,_e))),-(C||S)),ie=[];for(let ke=1/13,Me=ke;Me<=1;Me+=ke)ie.push(er(X,me,tr*2*Me));return ie}}else{if(!(b||w&&e.length===1))if(f)for(let ie=1/13,ke=ie;ke<=1;ke+=ie){let Me=er(v[0],me,tr*ke);ye.push(Me)}else{let ie=Mt(x[0],v[0]),ke=Vt(ie,.5),Me=Vt(ie,.51);ye.push(Mt(me,ke),Mt(me,Me),Bt(me,Me),Bt(me,ke))}let X=Xs(Ib(e[e.length-1].vector));if(w||b&&e.length===1)Re.push(_e);else if(d){let ie=$u(_e,X,S);for(let ke=1/29,Me=ke;Me<1;Me+=ke)Re.push(er(ie,_e,tr*3*Me))}else Re.push(Bt(_e,Vt(X,S)),Bt(_e,Vt(X,S*.99)),Mt(_e,Vt(X,S*.99)),Mt(_e,Vt(X,S)))}return x.concat(Re,v.reverse(),ye)}function Vb(e,t={}){var n;let{streamline:s=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let i=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:b=.5})=>[m,g,b]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(Pa(l[0],m,g/4))}l.length===1&&(l=[...l,[...Bt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,f=0,p=c[0],d=l.length-1;for(let m=1;m<l.length;m++){let g=o&&m===d?l[m].slice(0,2):Pa(p.point,l[m],i);if(Rb(p.point,g))continue;let b=jb(g,p.point);if(f+=b,m<d&&!u){if(f<r)continue;u=!0}p={point:g,pressure:l[m][2]>=0?l[m][2]:.5,vector:Ad(Mt(p.point,g)),distance:b,runningLength:f},c.push(p)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function Bb(e,t={}){return Hb(Vb(e,t),t)}var qb=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,r=n.length;s<r;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(r=>t!==r)}}});function qo(e,t){return e-t}function Wb(e){return e<0?-1:1}function Wo(e){return[Math.abs(e),Wb(e)]}function Md(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var zb=2,hn=zb,Vs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const n=this.drauu.el,s=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*s,y:(e.pageY-r.top)*s,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const o=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:o.x*s,y:o.y*s,pressure:e.pressure}}}createElement(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",s.fill??"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(hn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Ub=class extends Vs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Bb(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[r,o],i,l)=>{const[c,u]=l[(i+1)%l.length];return s.push(r,o,(r+c)/2,(o+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},Kb=class extends Vs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Wo(e.x-this.start.x),[s,r]=Wo(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(qo),[l,c]=[this.start.y,this.start.y+s*r].sort(qo);this.attr("cx",(o+i)/2),this.attr("cy",(l+c)/2),this.attr("rx",(i-o)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Id(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var Yb=class extends Vs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Md(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Id(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=s/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Gb=class extends Vs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Wo(e.x-this.start.x),[s,r]=Wo(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[o,i]=[this.start.x,this.start.x+t*n].sort(qo),[l,c]=[this.start.y,this.start.y+s*r].sort(qo);this.attr("x",o),this.attr("y",l),this.attr("width",i-o),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Zb(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function Jb(e,t,n){let s=t.x,r=t.y,o=n.x-s,i=n.y-r;if(o!==0||i!==0){const l=((e.x-s)*o+(e.y-r)*i)/(o*o+i*i);l>1?(s=n.x,r=n.y):l>0&&(s+=o*l,r+=i*l)}return o=e.x-s,i=e.y-r,o*o+i*i}function Qb(e,t){let n=e[0];const s=[n];let r;for(let o=1,i=e.length;o<i;o++)r=e[o],Zb(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function Aa(e,t,n,s,r){let o=s,i=0;for(let l=t+1;l<n;l++){const c=Jb(e[l],e[t],e[n]);c>o&&(i=l,o=c)}o>s&&(i-t>1&&Aa(e,t,i,s,r),r.push(e[i]),n-i>1&&Aa(e,i,n,s,r))}function Xb(e,t){const n=e.length-1,s=[e[0]];return Aa(e,0,n,t,s),s.push(e[n]),s}function Cu(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:Qb(e,s),e=Xb(e,s),e}var ew=class extends Vs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Md();const t=Id(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Cu(this.points,1,!0),this.count=0),this.attr("d",Pu(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Pu(Cu(this.points,1,!0))),!e.getTotalLength()))}};function tw(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(n**2+s**2),angle:Math.atan2(s,n)}}function Ou(e,t,n,s){const r=t||e,o=n||e,i=.2,l=tw(r,o),c=l.angle+(s?Math.PI:0),u=l.length*i,f=e.x+Math.cos(c)*u,p=e.y+Math.sin(c)*u;return{x:f,y:p}}function nw(e,t,n){const s=Ou(n[t-1],n[t-2],e),r=Ou(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(hn)},${s.y.toFixed(hn)} ${r.x.toFixed(hn)},${r.y.toFixed(hn)} ${e.x.toFixed(hn)},${e.y.toFixed(hn)}`}function Pu(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(hn)},${n.y.toFixed(hn)}`:`${t} ${nw(n,s,r)}`,"")}var sw=class extends Vs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const o=n[r];if(o.getTotalLength){const i=o.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=o.getPointAtLength(i*l/this.pathSubFactor),u=o.getPointAtLength(i*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:s||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,o=t.x2,i=e.y1,l=e.y2,c=t.y1,u=t.y2,f=(n-s)*(c-u)-(i-l)*(r-o),p=(n*l-i*s)*(r-o)-(n-s)*(r*u-c*o),d=(n*l-i*s)*(c-u)-(i-l)*(r*u-c*o),m=(g,b,w)=>g>=b&&g<=w?!0:g>=w&&g<=b;if(f===0)return!1;{const g={x:p/f,y:d/f};return m(g.x,n,s)&&m(g.y,i,l)&&m(g.x,r,o)&&m(g.y,c,u)}}};function rw(e){return{draw:new ew(e),stylus:new Ub(e),line:new Yb(e),rectangle:new Gb(e),ellipse:new Kb(e),eraseLine:new sw(e)}}var ow=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=qb(),this._models=rw(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function iw(e){return new ow(e)}const Ma=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],en=Kt("slidev-drawing-enabled",!1),I4=Kt("slidev-drawing-pinned",!1),aw=q(!1),lw=q(!1),cw=q(!1),Ar=q(!1),as=jy(Kt("slidev-drawing-brush",{color:Ma[0],size:4,mode:"stylus"})),Au=q("stylus"),Ld=A(()=>$e.drawings.syncAll||gt.value);let Mr=!1;const nr=A({get(){return Au.value},set(e){Au.value=e,e==="arrow"?(as.mode="line",as.arrowEnd=!0):(as.mode=e,as.arrowEnd=!1)}}),uw=qe({brush:as,acceptsInputTypes:A(()=>en.value&&(!$e.drawings.presenterOnly||gt.value)?void 0:["pen"]),coordinateTransform:!1}),dt=si(iw(uw));function fw(){dt.clear(),Ld.value&&td(ze.value,"")}function Ol(){var e;lw.value=dt.canRedo(),aw.value=dt.canUndo(),cw.value=!!((e=dt.el)!=null&&e.children.length)}function pw(e){Mr=!0;const t=Vo[e||ze.value];t!=null?dt.load(t):dt.clear(),Ol(),Mr=!1}dt.on("changed",()=>{if(Ol(),!Mr){const e=dt.dump(),t=ze.value;(Vo[t]||"")!==e&&Ld.value&&td(t,dt.dump())}});Ly(e=>{Mr=!0,e[ze.value]!=null&&dt.load(e[ze.value]||""),Mr=!1,Ol()});et(()=>{ge(ze,()=>{dt.mounted&&pw()},{immediate:!0})});dt.on("start",()=>Ar.value=!0);dt.on("end",()=>Ar.value=!1);window.addEventListener("keydown",e=>{if(!en.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?dt.redo():dt.undo():e.code==="Escape"?en.value=!1:e.code==="KeyL"&&t?nr.value="line":e.code==="KeyA"&&t?nr.value="arrow":e.code==="KeyS"&&t?nr.value="stylus":e.code==="KeyR"&&t?nr.value="rectangle":e.code==="KeyE"&&t?nr.value="ellipse":e.code==="KeyC"&&t?fw():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ma.length?as.color=Ma[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ye(...e){return A(()=>e.every(t=>Ge(t)))}function wt(e){return A(()=>!Ge(e))}const Mu=M0(),Hi=Kt("slidev-color-schema","auto"),Ia=A(()=>$e.colorSchema!=="auto"),Pl=A({get(){return Ia.value?$e.colorSchema==="dark":Hi.value==="auto"?Mu.value:Hi.value==="dark"},set(e){Ia.value||(Hi.value=e===Mu.value?"auto":e?"dark":"light")}}),Rd=od(Pl);Ut&&ge(Pl,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const yo=q(1),bo=A(()=>Ke.length-1),$t=q(0),Al=q(0);function dw(){$t.value>yo.value&&($t.value-=1)}function hw(){$t.value<bo.value&&($t.value+=1)}function mw(){if($t.value>yo.value){let e=$t.value-Al.value;e<yo.value&&(e=yo.value),$t.value=e}}function gw(){if($t.value<bo.value){let e=$t.value+Al.value;e>bo.value&&(e=bo.value),$t.value=e}}function _w(){const{escape:e,space:t,shift:n,left:s,right:r,up:o,down:i,enter:l,d:c,g:u,o:f}=Cd;let p=[{name:"next_space",key:Ye(t,wt(n)),fn:Nn,autoRepeat:!0},{name:"prev_space",key:Ye(t,n),fn:Fn,autoRepeat:!0},{name:"next_right",key:Ye(r,wt(n),wt(ct)),fn:Nn,autoRepeat:!0},{name:"prev_left",key:Ye(s,wt(n),wt(ct)),fn:Fn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Nn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Fn,autoRepeat:!0},{name:"next_down",key:Ye(i,wt(ct)),fn:Lr,autoRepeat:!0},{name:"prev_up",key:Ye(o,wt(ct)),fn:()=>Rr(!1),autoRepeat:!0},{name:"next_shift",key:Ye(r,n),fn:Lr,autoRepeat:!0},{name:"prev_shift",key:Ye(s,n),fn:()=>Rr(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,wt(en)),fn:Rd},{name:"toggle_overview",key:Ye(f,wt(en)),fn:Pd},{name:"hide_overview",key:Ye(e,wt(en)),fn:()=>ct.value=!1},{name:"goto",key:Ye(u,wt(en)),fn:()=>Ps.value=!Ps.value},{name:"next_overview",key:Ye(r,ct),fn:hw},{name:"prev_overview",key:Ye(s,ct),fn:dw},{name:"up_overview",key:Ye(o,ct),fn:mw},{name:"down_overview",key:Ye(i,ct),fn:gw},{name:"goto_from_overview",key:Ye(l,ct),fn:()=>{Ds($t.value),ct.value=!1}}];const d=new Set(p.map(g=>g.name));if(p.filter(g=>g.name&&d.has(g.name)).length===0){const g=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(g),console.warn(g)}return p}const Nd=Ye(wt(Ab),wt(Mb),Ob);function vw(e,t,n=!1){typeof e=="string"&&(e=Cd[e]);const s=Ye(e,Nd);let r=0,o;const i=()=>{if(clearTimeout(o),!s.value){r=0;return}n&&(o=setTimeout(i,Math.max(1e3-r*250,150)),r++),t()};return ge(s,i,{flush:"sync"})}function yw(e,t){return m0(e,n=>{Nd.value&&(n.repeat||t())})}function bw(){const e=_w();new Map(e.map(n=>[n.key,n])).forEach(n=>{n.fn&&vw(n.key,n.fn,n.autoRepeat)}),yw("f",()=>Od.toggle())}const ww={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kw=a("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),xw=[kw];function Sw(e,t){return E(),te("svg",ww,xw)}const Ew={name:"carbon-close",render:Sw};function Ml(e,t=""){var r,o;const n=["slidev-page",t],s=(o=(r=e==null?void 0:e.meta)==null?void 0:r.slide)==null?void 0:o.no;return s!=null&&n.push(`slidev-page-${s}`),n.filter(Boolean).join(" ")}const $w=Oe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;H(Z);const n=q(),s=W0(n),r=A(()=>t.width?t.width:s.width.value),o=A(()=>t.width?t.width/Mn:s.height.value);t.width&&bs(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${o.value}px`)});const i=A(()=>r.value/o.value),l=A(()=>t.scale&&!js.value?t.scale:i.value<Mn?r.value/In:o.value*Mn/In),c=A(()=>({height:`${El}px`,width:`${In}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=A(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return xt(Qp,l),(f,p)=>(E(),te("div",{id:"slide-container",ref_key:"root",ref:n,class:We(u.value)},[a("div",{id:"slide-content",style:Qe(c.value)},[Nt(f.$slots,"default")],4),Nt(f.$slots,"controls")],2))}});const J=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Fd=J($w,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Il=Oe({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Xt(e,"clicks",t),s=Xt(e,"clicksElements",t),r=Xt(e,"clicksDisabled",t),o=Xt(e,"clicksOrderMap",t);s.value.length=0,xt(yy,e.route),xt(by,e.context),xt(pr,n),xt(dr,r),xt(ns,s),xt(ba,o)},render(){var e,t;return this.$props.is?Et(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),Tw=["innerHTML"],Cw=Oe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return H(Z),(t,n)=>M(Vo)[t.page]?(E(),te("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:M(Vo)[t.page]},null,8,Tw)):we("v-if",!0)}}),jd=J(Cw,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ow=Object.freeze(Object.defineProperty({__proto__:null,default:jd},Symbol.toStringTag,{value:"Module"})),Pw={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Aw=["onClick"],Vi=4*16*2,Iu=2*16,Mw=Oe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const n=e;H(Z);const s=Xt(n,"modelValue",t);function r(){s.value=!1}function o(p){Ds(p),r()}function i(p){return p===$t.value}const l=Oa.smaller("xs"),c=Oa.smaller("sm"),u=A(()=>l.value?ms.width.value-Vi:c.value?(ms.width.value-Vi-Iu)/2:300),f=A(()=>Math.floor((ms.width.value-Vi)/(u.value+Iu)));return bs(()=>{$t.value=ze.value,Al.value=f.value}),(p,d)=>{const m=Ew;return E(),te(Ce,null,[fp(a("div",Pw,[a("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Qe(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(E(!0),te(Ce,null,Hs(M(Ke).slice(0,-1),(g,b)=>(E(),te("div",{key:g.path,class:"relative"},[a("div",{class:We(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(b+1),"border-gray-400":!i(b+1)}]),style:Qe(M($l)),onClick:w=>o(+g.path)},[(E(),z(Fd,{key:g.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:U(()=>[g!=null&&g.component?(E(),z(M(Il),{key:0,is:g.component,"clicks-disabled":!0,class:We(M(Ml)(g)),route:g,context:"overview"},null,8,["is","class","route"])):we("v-if",!0),Q(jd,{page:+g.path},null,8,["page"])]),_:2},1032,["width"]))],14,Aw),a("div",{class:"absolute top-0 opacity-50",style:Qe(`left: ${u.value+5}px`)},sn(b+1),5)]))),128))],4)],512),[[Vp,M(s)]]),M(s)?(E(),te("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[Q(m)])):we("v-if",!0)],64)}}});const Iw=J(Mw,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Lw="/web-basic-2/assets/logo-b72bde5d.png",Rw={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Nw=Oe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;H(Z);const s=Xt(n,"modelValue",t);function r(){s.value=!1}return(o,i)=>(E(),z(dp,null,[M(s)?(E(),te("div",Rw,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=l=>r())}),a("div",{class:We(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[Nt(o.$slots,"default")],2)])):we("v-if",!0)],1024))}}),Fw=J(Nw,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/Modal.vue"]]),jw={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Dw=["innerHTML"],Hw=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:Lw,alt:"Slidev"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),h("dev ")])])],-1),Vw=Oe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;H(Z);const s=Xt(n,"modelValue",t),r=A(()=>typeof $e.info=="string");return(o,i)=>(E(),z(Fw,{modelValue:M(s),"onUpdate:modelValue":i[0]||(i[0]=l=>Te(s)?s.value=l:null),class:"px-6 py-4"},{default:U(()=>[a("div",jw,[r.value?(E(),te("div",{key:0,class:"mb-4",innerHTML:M($e).info},null,8,Dw)):we("v-if",!0),Hw])]),_:1},8,["modelValue"]))}});const Bw=J(Vw,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vn(e){return Array.isArray?Array.isArray(e):Vd(e)==="[object Array]"}const qw=1/0;function Ww(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-qw?"-0":t}function zw(e){return e==null?"":Ww(e)}function tn(e){return typeof e=="string"}function Dd(e){return typeof e=="number"}function Uw(e){return e===!0||e===!1||Kw(e)&&Vd(e)=="[object Boolean]"}function Hd(e){return typeof e=="object"}function Kw(e){return Hd(e)&&e!==null}function St(e){return e!=null}function Bi(e){return!e.trim().length}function Vd(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Yw="Incorrect 'index' type",Gw=e=>`Invalid value for key ${e}`,Zw=e=>`Pattern length exceeds max of ${e}.`,Jw=e=>`Missing ${e} property in key`,Qw=e=>`Property 'weight' in key '${e}' must be a positive integer`,Lu=Object.prototype.hasOwnProperty;class Xw{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(s=>{let r=Bd(s);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(s=>{s.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Bd(e){let t=null,n=null,s=null,r=1,o=null;if(tn(e)||vn(e))s=e,t=Ru(e),n=La(e);else{if(!Lu.call(e,"name"))throw new Error(Jw("name"));const i=e.name;if(s=i,Lu.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(Qw(i));t=Ru(i),n=La(i),o=e.getFn}return{path:t,id:n,weight:r,src:s,getFn:o}}function Ru(e){return vn(e)?e:e.split(".")}function La(e){return vn(e)?e.join("."):e}function ek(e,t){let n=[],s=!1;const r=(o,i,l)=>{if(St(o))if(!i[l])n.push(o);else{let c=i[l];const u=o[c];if(!St(u))return;if(l===i.length-1&&(tn(u)||Dd(u)||Uw(u)))n.push(zw(u));else if(vn(u)){s=!0;for(let f=0,p=u.length;f<p;f+=1)r(u[f],i,l+1)}else i.length&&r(u,i,l+1)}};return r(e,tn(t)?t.split("."):t,0),s?n:n[0]}const tk={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},nk={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},sk={location:0,threshold:.6,distance:100},rk={useExtendedSearch:!1,getFn:ek,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var pe={...nk,...tk,...sk,...rk};const ok=/[^ ]+/g;function ik(e=1,t=3){const n=new Map,s=Math.pow(10,t);return{get(r){const o=r.match(ok).length;if(n.has(o))return n.get(o);const i=1/Math.pow(o,.5*e),l=parseFloat(Math.round(i*s)/s);return n.set(o,l),l},clear(){n.clear()}}}class Ll{constructor({getFn:t=pe.getFn,fieldNormWeight:n=pe.fieldNormWeight}={}){this.norm=ik(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,tn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();tn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!St(t)||Bi(t))return;let s={v:t,i:n,n:this.norm.get(t)};this.records.push(s)}_addObject(t,n){let s={i:n,$:{}};this.keys.forEach((r,o)=>{let i=r.getFn?r.getFn(t):this.getFn(t,r.path);if(St(i)){if(vn(i)){let l=[];const c=[{nestedArrIndex:-1,value:i}];for(;c.length;){const{nestedArrIndex:u,value:f}=c.pop();if(St(f))if(tn(f)&&!Bi(f)){let p={v:f,i:u,n:this.norm.get(f)};l.push(p)}else vn(f)&&f.forEach((p,d)=>{c.push({nestedArrIndex:d,value:p})})}s.$[o]=l}else if(tn(i)&&!Bi(i)){let l={v:i,n:this.norm.get(i)};s.$[o]=l}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function qd(e,t,{getFn:n=pe.getFn,fieldNormWeight:s=pe.fieldNormWeight}={}){const r=new Ll({getFn:n,fieldNormWeight:s});return r.setKeys(e.map(Bd)),r.setSources(t),r.create(),r}function ak(e,{getFn:t=pe.getFn,fieldNormWeight:n=pe.fieldNormWeight}={}){const{keys:s,records:r}=e,o=new Ll({getFn:t,fieldNormWeight:n});return o.setKeys(s),o.setIndexRecords(r),o}function lo(e,{errors:t=0,currentLocation:n=0,expectedLocation:s=0,distance:r=pe.distance,ignoreLocation:o=pe.ignoreLocation}={}){const i=t/e.length;if(o)return i;const l=Math.abs(s-n);return r?i+l/r:l?1:i}function lk(e=[],t=pe.minMatchCharLength){let n=[],s=-1,r=-1,o=0;for(let i=e.length;o<i;o+=1){let l=e[o];l&&s===-1?s=o:!l&&s!==-1&&(r=o-1,r-s+1>=t&&n.push([s,r]),s=-1)}return e[o-1]&&o-s>=t&&n.push([s,o-1]),n}const rs=32;function ck(e,t,n,{location:s=pe.location,distance:r=pe.distance,threshold:o=pe.threshold,findAllMatches:i=pe.findAllMatches,minMatchCharLength:l=pe.minMatchCharLength,includeMatches:c=pe.includeMatches,ignoreLocation:u=pe.ignoreLocation}={}){if(t.length>rs)throw new Error(Zw(rs));const f=t.length,p=e.length,d=Math.max(0,Math.min(s,p));let m=o,g=d;const b=l>1||c,w=b?Array(p):[];let k;for(;(k=e.indexOf(t,g))>-1;){let R=lo(t,{currentLocation:k,expectedLocation:d,distance:r,ignoreLocation:u});if(m=Math.min(R,m),g=k+f,b){let P=0;for(;P<f;)w[k+P]=1,P+=1}}g=-1;let x=[],v=1,T=f+p;const S=1<<f-1;for(let R=0;R<f;R+=1){let P=0,j=T;for(;P<j;)lo(t,{errors:R,currentLocation:d+j,expectedLocation:d,distance:r,ignoreLocation:u})<=m?P=j:T=j,j=Math.floor((T-P)/2+P);T=j;let ne=Math.max(1,d-j+1),le=i?p:Math.min(d+j,p)+f,W=Array(le+2);W[le+1]=(1<<R)-1;for(let _e=le;_e>=ne;_e-=1){let ye=_e-1,Re=n[e.charAt(ye)];if(b&&(w[ye]=+!!Re),W[_e]=(W[_e+1]<<1|1)&Re,R&&(W[_e]|=(x[_e+1]|x[_e])<<1|1|x[_e+1]),W[_e]&S&&(v=lo(t,{errors:R,currentLocation:ye,expectedLocation:d,distance:r,ignoreLocation:u}),v<=m)){if(m=v,g=ye,g<=d)break;ne=Math.max(1,2*d-g)}}if(lo(t,{errors:R+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:u})>m)break;x=W}const C={isMatch:g>=0,score:Math.max(.001,v)};if(b){const R=lk(w,l);R.length?c&&(C.indices=R):C.isMatch=!1}return C}function uk(e){let t={};for(let n=0,s=e.length;n<s;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<s-n-1}return t}class Wd{constructor(t,{location:n=pe.location,threshold:s=pe.threshold,distance:r=pe.distance,includeMatches:o=pe.includeMatches,findAllMatches:i=pe.findAllMatches,minMatchCharLength:l=pe.minMatchCharLength,isCaseSensitive:c=pe.isCaseSensitive,ignoreLocation:u=pe.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:r,includeMatches:o,findAllMatches:i,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const f=(d,m)=>{this.chunks.push({pattern:d,alphabet:uk(d),startIndex:m})},p=this.pattern.length;if(p>rs){let d=0;const m=p%rs,g=p-m;for(;d<g;)f(this.pattern.substr(d,rs),d),d+=rs;if(m){const b=p-rs;f(this.pattern.substr(b),b)}}else f(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return s&&(g.indices=[[0,t.length-1]]),g}const{location:r,distance:o,threshold:i,findAllMatches:l,minMatchCharLength:c,ignoreLocation:u}=this.options;let f=[],p=0,d=!1;this.chunks.forEach(({pattern:g,alphabet:b,startIndex:w})=>{const{isMatch:k,score:x,indices:v}=ck(t,g,b,{location:r+w,distance:o,threshold:i,findAllMatches:l,minMatchCharLength:c,includeMatches:s,ignoreLocation:u});k&&(d=!0),p+=x,k&&v&&(f=[...f,...v])});let m={isMatch:d,score:d?p/this.chunks.length:1};return d&&s&&(m.indices=f),m}}class qn{constructor(t){this.pattern=t}static isMultiMatch(t){return Nu(t,this.multiRegex)}static isSingleMatch(t){return Nu(t,this.singleRegex)}search(){}}function Nu(e,t){const n=e.match(t);return n?n[1]:null}class fk extends qn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class pk extends qn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const s=t.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class dk extends qn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class hk extends qn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class mk extends qn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class gk extends qn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class zd extends qn{constructor(t,{location:n=pe.location,threshold:s=pe.threshold,distance:r=pe.distance,includeMatches:o=pe.includeMatches,findAllMatches:i=pe.findAllMatches,minMatchCharLength:l=pe.minMatchCharLength,isCaseSensitive:c=pe.isCaseSensitive,ignoreLocation:u=pe.ignoreLocation}={}){super(t),this._bitapSearch=new Wd(t,{location:n,threshold:s,distance:r,includeMatches:o,findAllMatches:i,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ud extends qn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,s;const r=[],o=this.pattern.length;for(;(s=t.indexOf(this.pattern,n))>-1;)n=s+o,r.push([s,n-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const Ra=[fk,Ud,dk,hk,gk,mk,pk,zd],Fu=Ra.length,_k=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,vk="|";function yk(e,t={}){return e.split(vk).map(n=>{let s=n.trim().split(_k).filter(o=>o&&!!o.trim()),r=[];for(let o=0,i=s.length;o<i;o+=1){const l=s[o];let c=!1,u=-1;for(;!c&&++u<Fu;){const f=Ra[u];let p=f.isMultiMatch(l);p&&(r.push(new f(p,t)),c=!0)}if(!c)for(u=-1;++u<Fu;){const f=Ra[u];let p=f.isSingleMatch(l);if(p){r.push(new f(p,t));break}}}return r})}const bk=new Set([zd.type,Ud.type]);class wk{constructor(t,{isCaseSensitive:n=pe.isCaseSensitive,includeMatches:s=pe.includeMatches,minMatchCharLength:r=pe.minMatchCharLength,ignoreLocation:o=pe.ignoreLocation,findAllMatches:i=pe.findAllMatches,location:l=pe.location,threshold:c=pe.threshold,distance:u=pe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:r,findAllMatches:i,ignoreLocation:o,location:l,threshold:c,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=yk(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let o=0,i=[],l=0;for(let c=0,u=n.length;c<u;c+=1){const f=n[c];i.length=0,o=0;for(let p=0,d=f.length;p<d;p+=1){const m=f[p],{isMatch:g,indices:b,score:w}=m.search(t);if(g){if(o+=1,l+=w,s){const k=m.constructor.type;bk.has(k)?i=[...i,...b]:i.push(b)}}else{l=0,o=0,i.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return s&&(p.indices=i),p}}return{isMatch:!1,score:1}}}const Na=[];function kk(...e){Na.push(...e)}function Fa(e,t){for(let n=0,s=Na.length;n<s;n+=1){let r=Na[n];if(r.condition(e,t))return new r(e,t)}return new Wd(e,t)}const zo={AND:"$and",OR:"$or"},ja={PATH:"$path",PATTERN:"$val"},Da=e=>!!(e[zo.AND]||e[zo.OR]),xk=e=>!!e[ja.PATH],Sk=e=>!vn(e)&&Hd(e)&&!Da(e),ju=e=>({[zo.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Kd(e,t,{auto:n=!0}={}){const s=r=>{let o=Object.keys(r);const i=xk(r);if(!i&&o.length>1&&!Da(r))return s(ju(r));if(Sk(r)){const c=i?r[ja.PATH]:o[0],u=i?r[ja.PATTERN]:r[c];if(!tn(u))throw new Error(Gw(c));const f={keyId:La(c),pattern:u};return n&&(f.searcher=Fa(u,t)),f}let l={children:[],operator:o[0]};return o.forEach(c=>{const u=r[c];vn(u)&&u.forEach(f=>{l.children.push(s(f))})}),l};return Da(e)||(e=ju(e)),s(e)}function Ek(e,{ignoreFieldNorm:t=pe.ignoreFieldNorm}){e.forEach(n=>{let s=1;n.matches.forEach(({key:r,norm:o,score:i})=>{const l=r?r.weight:null;s*=Math.pow(i===0&&l?Number.EPSILON:i,(l||1)*(t?1:o))}),n.score=s})}function $k(e,t){const n=e.matches;t.matches=[],St(n)&&n.forEach(s=>{if(!St(s.indices)||!s.indices.length)return;const{indices:r,value:o}=s;let i={indices:r,value:o};s.key&&(i.key=s.key.src),s.idx>-1&&(i.refIndex=s.idx),t.matches.push(i)})}function Tk(e,t){t.score=e.score}function Ck(e,t,{includeMatches:n=pe.includeMatches,includeScore:s=pe.includeScore}={}){const r=[];return n&&r.push($k),s&&r.push(Tk),e.map(o=>{const{idx:i}=o,l={item:t[i],refIndex:i};return r.length&&r.forEach(c=>{c(o,l)}),l})}class Bs{constructor(t,n={},s){this.options={...pe,...n},this.options.useExtendedSearch,this._keyStore=new Xw(this.options.keys),this.setCollection(t,s)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Ll))throw new Error(Yw);this._myIndex=n||qd(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){St(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let s=0,r=this._docs.length;s<r;s+=1){const o=this._docs[s];t(o,s)&&(this.removeAt(s),s-=1,r-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:o,sortFn:i,ignoreFieldNorm:l}=this.options;let c=tn(t)?tn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Ek(c,{ignoreFieldNorm:l}),o&&c.sort(i),Dd(n)&&n>-1&&(c=c.slice(0,n)),Ck(c,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(t){const n=Fa(t,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:o,i,n:l})=>{if(!St(o))return;const{isMatch:c,score:u,indices:f}=n.searchIn(o);c&&r.push({item:o,idx:i,matches:[{score:u,value:o,norm:l,indices:f}]})}),r}_searchLogical(t){const n=Kd(t,this.options),s=(l,c,u)=>{if(!l.children){const{keyId:p,searcher:d}=l,m=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(c,p),searcher:d});return m&&m.length?[{idx:u,item:c,matches:m}]:[]}const f=[];for(let p=0,d=l.children.length;p<d;p+=1){const m=l.children[p],g=s(m,c,u);if(g.length)f.push(...g);else if(l.operator===zo.AND)return[]}return f},r=this._myIndex.records,o={},i=[];return r.forEach(({$:l,i:c})=>{if(St(l)){let u=s(n,l,c);u.length&&(o[c]||(o[c]={idx:c,item:l,matches:[]},i.push(o[c])),u.forEach(({matches:f})=>{o[c].matches.push(...f)}))}}),i}_searchObjectList(t){const n=Fa(t,this.options),{keys:s,records:r}=this._myIndex,o=[];return r.forEach(({$:i,i:l})=>{if(!St(i))return;let c=[];s.forEach((u,f)=>{c.push(...this._findMatches({key:u,value:i[f],searcher:n}))}),c.length&&o.push({idx:l,item:i,matches:c})}),o}_findMatches({key:t,value:n,searcher:s}){if(!St(n))return[];let r=[];if(vn(n))n.forEach(({v:o,i,n:l})=>{if(!St(o))return;const{isMatch:c,score:u,indices:f}=s.searchIn(o);c&&r.push({score:u,key:t,value:o,idx:i,norm:l,indices:f})});else{const{v:o,n:i}=n,{isMatch:l,score:c,indices:u}=s.searchIn(o);l&&r.push({score:c,key:t,value:o,norm:i,indices:u})}return r}}Bs.version="6.6.2";Bs.createIndex=qd;Bs.parseIndex=ak;Bs.config=pe;Bs.parseQuery=Kd;kk(wk);const Ok={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Pk=["value","disabled","onKeydown"],Ak=["border","onClick"],Mk={"w-4":"","text-right":"",op50:"","text-sm":""},Ik=Oe({__name:"Goto",setup(e){H(Z);const t=q(),n=q(),s=q(),r=q(),o=q(""),i=q(0);function l(v){return v!=null}const c=A(()=>new Bs(Ke.map(v=>{var T;return(T=v.meta)==null?void 0:T.slide}).filter(l),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=A(()=>o.value.startsWith("/")?o.value.substring(1):o.value),f=A(()=>c.value.search(u.value).map(v=>v.item)),p=A(()=>!!f.value.length);function d(){if(p.value){const v=f.value.at(i.value||0);v&&Ds(v.no)}m()}function m(){o.value="",Ps.value=!1}function g(v){v.preventDefault(),i.value++,i.value>=f.value.length&&(i.value=0),w()}function b(v){v.preventDefault(),i.value--,i.value<=-2&&(i.value=f.value.length-1),w()}function w(){var T;const v=(T=r.value)==null?void 0:T[i.value];v&&s.value&&(v.offsetTop+v.offsetHeight>s.value.offsetHeight+s.value.scrollTop?s.value.scrollTo({behavior:"smooth",top:v.offsetTop+v.offsetHeight-s.value.offsetHeight+1}):v.offsetTop<s.value.scrollTop&&s.value.scrollTo({behavior:"smooth",top:v.offsetTop}))}function k(v){i.value=0,o.value=v.target.value}function x(v){Ds(v),m()}return ge(Ps,async v=>{var T;v?(o.value="",i.value=0,setTimeout(()=>{var S;return(S=n.value)==null?void 0:S.focus()},0)):(T=n.value)==null||T.blur()}),ge(Rn,()=>{var v;(v=t.value)!=null&&v.contains(Rn.value)||m()}),(v,T)=>(E(),te("div",{id:"slidev-goto-dialog",ref_key:"container",ref:t,class:We(["fixed right-5 transition-all",M(Ps)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[a("div",Ok,[a("input",{ref_key:"input",ref:n,value:o.value,type:"text",disabled:!M(Ps),class:We(["outline-none bg-transparent",{"text-red-400":!p.value&&o.value}]),placeholder:"Goto...",onKeydown:[to(d,["enter"]),to(m,["escape"]),to(g,["down"]),to(b,["up"])],onInput:k},null,42,Pk)]),f.value.length>0?(E(),te("ul",{key:0,ref_key:"list",ref:s,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(E(!0),te(Ce,null,Hs(f.value,(S,C)=>(E(),te("li",{ref_for:!0,ref_key:"items",ref:r,key:S.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:C===0?"":"t main",class:We(i.value===C?"bg-active op100":"op80"),onClick:bv(R=>x(S.no),["stop"])},[a("div",Mk,sn(S.no),1),h(" "+sn(S.title),1)],10,Ak))),128))],512)):we("v-if",!0)],2))}});const Lk=J(Ik,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/Goto.vue"]]),Rk=Oe({__name:"Controls",setup(e){H(Z);const t=on(),n=on();return(s,r)=>(E(),te(Ce,null,[Q(Iw,{modelValue:M(ct),"onUpdate:modelValue":r[0]||(r[0]=o=>Te(ct)?ct.value=o:null)},null,8,["modelValue"]),Q(Lk),t.value?(E(),z(M(t),{key:0})):we("v-if",!0),n.value?(E(),z(M(n),{key:1,modelValue:M(ji),"onUpdate:modelValue":r[1]||(r[1]=o=>Te(ji)?ji.value=o:null)},null,8,["modelValue"])):we("v-if",!0),M($e).info?(E(),z(Bw,{key:2,modelValue:M(gr),"onUpdate:modelValue":r[2]||(r[2]=o=>Te(gr)?gr.value=o:null)},null,8,["modelValue"])):we("v-if",!0)],64))}}),Nk=J(Rk,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/Controls.vue"]]),Fk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jk=a("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Dk=[jk];function Hk(e,t){return E(),te("svg",Fk,Dk)}const Vk={name:"carbon-settings-adjust",render:Hk},Bk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qk=a("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Wk=a("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),zk=[qk,Wk];function Uk(e,t){return E(),te("svg",Bk,zk)}const Kk={name:"carbon-information",render:Uk},Yk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gk=a("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Zk=[Gk];function Jk(e,t){return E(),te("svg",Yk,Zk)}const Qk={name:"carbon-download",render:Jk},Xk={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ex=a("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),tx=a("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),nx=[ex,tx];function sx(e,t){return E(),te("svg",Xk,nx)}const rx={name:"carbon-user-speaker",render:sx},ox={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ix=a("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ax=a("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),lx=[ix,ax];function cx(e,t){return E(),te("svg",ox,lx)}const ux={name:"carbon-presentation-file",render:cx},fx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},px=a("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),dx=[px];function hx(e,t){return E(),te("svg",fx,dx)}const mx={name:"carbon-pen",render:hx},gx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_x=a("g",{fill:"currentColor"},[a("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),a("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),vx=[_x];function yx(e,t){return E(),te("svg",gx,vx)}const bx={name:"ph-cursor-duotone",render:yx},wx={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},kx=a("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),xx=[kx];function Sx(e,t){return E(),te("svg",wx,xx)}const Yd={name:"ph-cursor-fill",render:Sx},Ex={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$x=a("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Tx=[$x];function Cx(e,t){return E(),te("svg",Ex,Tx)}const Ox={name:"carbon-sun",render:Cx},Px={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ax=a("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Mx=[Ax];function Ix(e,t){return E(),te("svg",Px,Mx)}const Lx={name:"carbon-moon",render:Ix},Rx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nx=a("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Fx=[Nx];function jx(e,t){return E(),te("svg",Rx,Fx)}const Dx={name:"carbon-apps",render:jx},Hx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vx=a("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Bx=[Vx];function qx(e,t){return E(),te("svg",Hx,Bx)}const Wx={name:"carbon-arrow-right",render:qx},zx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ux=a("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Kx=[Ux];function Yx(e,t){return E(),te("svg",zx,Kx)}const Gx={name:"carbon-arrow-left",render:Yx},Zx={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jx=a("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Qx=[Jx];function Xx(e,t){return E(),te("svg",Zx,Qx)}const e2={name:"carbon-maximize",render:Xx},t2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n2=a("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),s2=[n2];function r2(e,t){return E(),te("svg",t2,s2)}const o2={name:"carbon-minimize",render:r2},i2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a2=a("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),l2=[a2];function c2(e,t){return E(),te("svg",i2,l2)}const u2={name:"carbon-checkmark",render:c2},f2={class:"select-list"},p2={class:"title"},d2={class:"items"},h2=["onClick"],m2=Oe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;H(Z);const s=Xt(n,"modelValue",t,{passive:!0});return(r,o)=>{const i=u2;return E(),te("div",f2,[a("div",p2,sn(e.title),1),a("div",d2,[(E(!0),te(Ce,null,Hs(e.items,l=>(E(),te("div",{key:l.value,class:We(["item",{active:M(s)===l.value}]),onClick:()=>{var c;s.value=l.value,(c=l.onClick)==null||c.call(l)}},[Q(i,{class:We(["text-green-500",{"opacity-0":M(s)!==l.value}])},null,8,["class"]),h(" "+sn(l.display||l.value),1)],10,h2))),128))])])}}});const g2=J(m2,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/SelectList.vue"]]),_2={class:"text-sm"},v2=Oe({__name:"Settings",setup(e){H(Z);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(E(),te("div",_2,[Q(g2,{modelValue:M(vo),"onUpdate:modelValue":s[0]||(s[0]=r=>Te(vo)?vo.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),y2=J(v2,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/Settings.vue"]]),b2={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},w2=Oe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;H(Z);const s=Xt(n,"modelValue",t,{passive:!0}),r=q();return d0(r,()=>{s.value=!1}),(o,i)=>(E(),te("div",{ref_key:"el",ref:r,class:"flex relative"},[a("button",{class:We({disabled:e.disabled}),onClick:i[0]||(i[0]=l=>s.value=!M(s))},[Nt(o.$slots,"button",{class:We({disabled:e.disabled})})],2),(E(),z(dp,null,[M(s)?(E(),te("div",b2,[Nt(o.$slots,"menu")])):we("v-if",!0)],1024))],512))}}),k2=J(w2,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/MenuButton.vue"]]),x2={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},S2={__name:"VerticalDivider",setup(e){return H(Z),(t,n)=>(E(),te("div",x2))}},co=J(S2,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),E2={render(){return[]}},$2={class:"slidev-icon-btn"},T2={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},C2={class:"my-auto"},O2={class:"opacity-50"},P2=Oe({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;H(Z);const n=Oa.smaller("md"),{isFullscreen:s,toggle:r}=Od,o=A(()=>Va.value?`?password=${Va.value}`:""),i=A(()=>`/presenter/${ze.value}${o.value}`),l=A(()=>`/${ze.value}${o.value}`),c=q();function u(){c.value&&Rn.value&&c.value.contains(Rn.value)&&Rn.value.blur()}const f=A(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=on(),d=on();return Ln(()=>import("./DrawingControls-a35af858.js"),[]).then(m=>d.value=m.default),(m,g)=>{const b=o2,w=e2,k=Gx,x=Wx,v=Dx,T=Lx,S=Ox,C=Yd,R=bx,P=mx,j=ux,ne=Lo("RouterLink"),le=rx,W=Qk,me=Kk,_e=Vk;return E(),te("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[a("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",f.value]),onMouseleave:u},[M(pn)?we("v-if",!0):(E(),te("button",{key:0,class:"slidev-icon-btn",onClick:g[0]||(g[0]=(...ye)=>M(r)&&M(r)(...ye))},[M(s)?(E(),z(b,{key:0})):(E(),z(w,{key:1}))])),a("button",{class:We(["slidev-icon-btn",{disabled:!M(NO)}]),onClick:g[1]||(g[1]=(...ye)=>M(Fn)&&M(Fn)(...ye))},[Q(k)],2),a("button",{class:We(["slidev-icon-btn",{disabled:!M(RO)}]),title:"Next",onClick:g[2]||(g[2]=(...ye)=>M(Nn)&&M(Nn)(...ye))},[Q(x)],2),M(pn)?we("v-if",!0):(E(),te("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=ye=>M(Pd)())},[Q(v)])),M(Ia)?we("v-if",!0):(E(),te("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=ye=>M(Rd)())},[M(Pl)?(E(),z(T,{key:0})):(E(),z(S,{key:1}))])),Q(co),M(pn)?we("v-if",!0):(E(),te(Ce,{key:3},[!M(gt)&&!M(n)&&p.value?(E(),te(Ce,{key:0},[Q(M(p)),Q(co)],64)):we("v-if",!0),M(gt)?(E(),te("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=ye=>Di.value=!M(Di))},[M(Di)?(E(),z(C,{key:0})):(E(),z(R,{key:1,class:"opacity-50"}))])):we("v-if",!0)],64)),(!M($e).drawings.presenterOnly||M(gt))&&!M(pn)?(E(),te(Ce,{key:4},[a("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=ye=>en.value=!M(en))},[Q(P),M(en)?(E(),te("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Qe({background:M(as).color})},null,4)):we("v-if",!0)]),Q(co)],64)):we("v-if",!0),M(pn)?we("v-if",!0):(E(),te(Ce,{key:5},[M(gt)?(E(),z(ne,{key:0,to:l.value,class:"slidev-icon-btn",title:"Play Mode"},{default:U(()=>[Q(j)]),_:1},8,["to"])):we("v-if",!0),M(PO)?(E(),z(ne,{key:1,to:i.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:U(()=>[Q(le)]),_:1},8,["to"])):we("v-if",!0),we("v-if",!0)],64)),(E(),te(Ce,{key:6},[M($e).download?(E(),te("button",{key:0,class:"slidev-icon-btn",onClick:g[8]||(g[8]=(...ye)=>M(Ba)&&M(Ba)(...ye))},[Q(W)])):we("v-if",!0)],64)),!M(gt)&&M($e).info&&!M(pn)?(E(),te("button",{key:7,class:"slidev-icon-btn",onClick:g[9]||(g[9]=ye=>gr.value=!M(gr))},[Q(me)])):we("v-if",!0),!M(gt)&&!M(pn)?(E(),z(k2,{key:8},{button:U(()=>[a("button",$2,[Q(_e)])]),menu:U(()=>[Q(y2)]),_:1})):we("v-if",!0),M(pn)?we("v-if",!0):(E(),z(co,{key:9})),a("div",T2,[a("div",C2,[h(sn(M(ze))+" ",1),a("span",O2,"/ "+sn(M(AO)),1)])]),Q(M(E2))],34)],512)}}}),A2=J(P2,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/NavControls.vue"]]),Gd={render(){return[]}},Zd={render(){return[]}},M2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},I2=Oe({__name:"PresenterMouse",setup(e){return H(Z),(t,n)=>{const s=Yd;return M(Li).cursor?(E(),te("div",M2,[Q(s,{class:"absolute",style:Qe({left:`${M(Li).cursor.x}%`,top:`${M(Li).cursor.y}%`})},null,8,["style"])])):we("v-if",!0)}}}),L2=J(I2,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),R2=Oe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){H(Z),ge(ut,()=>{var s,r;(s=ut.value)!=null&&s.meta&&ut.value.meta.preload!==!1&&(ut.value.meta.__preloaded=!0),(r=qi.value)!=null&&r.meta&&qi.value.meta.preload!==!1&&(qi.value.meta.__preloaded=!0)},{immediate:!0});const t=on();Ln(()=>import("./DrawingLayer-f312fce6.js"),[]).then(s=>t.value=s.default);const n=A(()=>Ke.filter(s=>{var r;return((r=s.meta)==null?void 0:r.__preloaded)||s===ut.value}));return(s,r)=>(E(),te(Ce,null,[we(" Global Bottom "),Q(M(Zd)),we(" Slides "),Q(dv,Be(M(DO),{id:"slideshow",tag:"div"}),{default:U(()=>[(E(!0),te(Ce,null,Hs(n.value,o=>{var i;return fp((E(),z(M(Il),{key:o.path,is:o==null?void 0:o.component,clicks:o===M(ut)?M(Lt):0,"clicks-elements":((i=o.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:We(M(Ml)(o)),route:o,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Vp,o===M(ut)]])}),128))]),_:1},16),we(" Global Top "),Q(M(Gd)),t.value?(E(),z(M(t),{key:0})):we("v-if",!0),M(gt)?we("v-if",!0):(E(),z(L2,{key:1}))],64))}});const N2=J(R2,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/SlidesShow.vue"]]),F2=Oe({__name:"PrintStyle",setup(e){H(Z);function t(n,{slots:s}){if(s.default)return Et("style",s.default())}return(n,s)=>(E(),z(t,null,{default:U(()=>[h(" @page { size: "+sn(M(In))+"px "+sn(M(El))+"px; margin: 0px; } ",1)]),_:1}))}}),Jd=J(F2,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/PrintStyle.vue"]]),j2=Oe({__name:"Play",setup(e){H(Z),bw();const t=q();function n(o){var i;ku.value||((i=o.target)==null?void 0:i.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?Nn():Fn())}HO(t);const s=A(()=>Pb.value||ku.value);on();const r=on();return Ln(()=>import("./DrawingControls-a35af858.js"),[]).then(o=>r.value=o.default),(o,i)=>(E(),te(Ce,null,[M(js)?(E(),z(Jd,{key:0})):we("v-if",!0),a("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Qe(M($l))},[Q(Fd,{class:"w-full h-full",style:Qe({background:"var(--slidev-slide-container-background, black)"}),width:M(js)?M(ms).width.value:void 0,scale:M(vo),onPointerdown:n},{default:U(()=>[Q(N2,{context:"slide"})]),controls:U(()=>[a("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"opacity-100 right-0":"opacity-0 p-2",M(Ar)?"pointer-events-none":""]])},[Q(A2,{class:"m-auto",persist:s.value},null,8,["persist"])],2),!M($e).drawings.presenterOnly&&!M(pn)&&r.value?(E(),z(M(r),{key:0,class:"ml-0"})):we("v-if",!0)]),_:1},8,["style","width","scale"]),we("v-if",!0)],4),Q(Nk)],64))}}),D2=J(j2,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Qd(e){return typeof e>"u"||e===null}function H2(e){return typeof e=="object"&&e!==null}function V2(e){return Array.isArray(e)?e:Qd(e)?[]:[e]}function B2(e,t){var n,s,r,o;if(t)for(o=Object.keys(t),n=0,s=o.length;n<s;n+=1)r=o[n],e[r]=t[r];return e}function q2(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function W2(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var z2=Qd,U2=H2,K2=V2,Y2=q2,G2=W2,Z2=B2,Rl={isNothing:z2,isObject:U2,toArray:K2,repeat:Y2,isNegativeZero:G2,extend:Z2};function Xd(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Ir(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Xd(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ir.prototype=Object.create(Error.prototype);Ir.prototype.constructor=Ir;Ir.prototype.toString=function(t){return this.name+": "+Xd(this,t)};var os=Ir,J2=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Q2=["scalar","sequence","mapping"];function X2(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function eS(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(J2.indexOf(n)===-1)throw new os('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=X2(t.styleAliases||null),Q2.indexOf(this.kind)===-1)throw new os('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ot=eS;function Du(e,t){var n=[];return e[t].forEach(function(s){var r=n.length;n.forEach(function(o,i){o.tag===s.tag&&o.kind===s.kind&&o.multi===s.multi&&(r=i)}),n[r]=s}),n}function tS(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function Ha(e){return this.extend(e)}Ha.prototype.extend=function(t){var n=[],s=[];if(t instanceof ot)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new os("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof ot))throw new os("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new os("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new os("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(o){if(!(o instanceof ot))throw new os("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Ha.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=Du(r,"implicit"),r.compiledExplicit=Du(r,"explicit"),r.compiledTypeMap=tS(r.compiledImplicit,r.compiledExplicit),r};var nS=Ha,sS=new ot("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),rS=new ot("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),oS=new ot("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),iS=new nS({explicit:[sS,rS,oS]});function aS(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function lS(){return null}function cS(e){return e===null}var uS=new ot("tag:yaml.org,2002:null",{kind:"scalar",resolve:aS,construct:lS,predicate:cS,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function fS(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function pS(e){return e==="true"||e==="True"||e==="TRUE"}function dS(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var hS=new ot("tag:yaml.org,2002:bool",{kind:"scalar",resolve:fS,construct:pS,predicate:dS,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function mS(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function gS(e){return 48<=e&&e<=55}function _S(e){return 48<=e&&e<=57}function vS(e){if(e===null)return!1;var t=e.length,n=0,s=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!mS(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!gS(e.charCodeAt(n)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!_S(e.charCodeAt(n)))return!1;s=!0}return!(!s||r==="_")}function yS(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function bS(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Rl.isNegativeZero(e)}var wS=new ot("tag:yaml.org,2002:int",{kind:"scalar",resolve:vS,construct:yS,predicate:bS,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),kS=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function xS(e){return!(e===null||!kS.test(e)||e[e.length-1]==="_")}function SS(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var ES=/^[-+]?[0-9]+e/;function $S(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Rl.isNegativeZero(e))return"-0.0";return n=e.toString(10),ES.test(n)?n.replace("e",".e"):n}function TS(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Rl.isNegativeZero(e))}var CS=new ot("tag:yaml.org,2002:float",{kind:"scalar",resolve:xS,construct:SS,predicate:TS,represent:$S,defaultStyle:"lowercase"}),OS=iS.extend({implicit:[uS,hS,wS,CS]}),PS=OS,eh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),th=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function AS(e){return e===null?!1:eh.exec(e)!==null||th.exec(e)!==null}function MS(e){var t,n,s,r,o,i,l,c=0,u=null,f,p,d;if(t=eh.exec(e),t===null&&(t=th.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,s,r));if(o=+t[4],i=+t[5],l=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(f=+t[10],p=+(t[11]||0),u=(f*60+p)*6e4,t[9]==="-"&&(u=-u)),d=new Date(Date.UTC(n,s,r,o,i,l,c)),u&&d.setTime(d.getTime()-u),d}function IS(e){return e.toISOString()}var LS=new ot("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:AS,construct:MS,instanceOf:Date,represent:IS});function RS(e){return e==="<<"||e===null}var NS=new ot("tag:yaml.org,2002:merge",{kind:"scalar",resolve:RS}),Nl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function FS(e){if(e===null)return!1;var t,n,s=0,r=e.length,o=Nl;for(n=0;n<r;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function jS(e){var t,n,s=e.replace(/[\r\n=]/g,""),r=s.length,o=Nl,i=0,l=[];for(t=0;t<r;t++)t%4===0&&t&&(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)),i=i<<6|o.indexOf(s.charAt(t));return n=r%4*6,n===0?(l.push(i>>16&255),l.push(i>>8&255),l.push(i&255)):n===18?(l.push(i>>10&255),l.push(i>>2&255)):n===12&&l.push(i>>4&255),new Uint8Array(l)}function DS(e){var t="",n=0,s,r,o=e.length,i=Nl;for(s=0;s<o;s++)s%3===0&&s&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[s];return r=o%3,r===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):r===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):r===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function HS(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var VS=new ot("tag:yaml.org,2002:binary",{kind:"scalar",resolve:FS,construct:jS,predicate:HS,represent:DS}),BS=Object.prototype.hasOwnProperty,qS=Object.prototype.toString;function WS(e){if(e===null)return!0;var t=[],n,s,r,o,i,l=e;for(n=0,s=l.length;n<s;n+=1){if(r=l[n],i=!1,qS.call(r)!=="[object Object]")return!1;for(o in r)if(BS.call(r,o))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function zS(e){return e!==null?e:[]}var US=new ot("tag:yaml.org,2002:omap",{kind:"sequence",resolve:WS,construct:zS}),KS=Object.prototype.toString;function YS(e){if(e===null)return!0;var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(s=i[t],KS.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;o[t]=[r[0],s[r[0]]]}return!0}function GS(e){if(e===null)return[];var t,n,s,r,o,i=e;for(o=new Array(i.length),t=0,n=i.length;t<n;t+=1)s=i[t],r=Object.keys(s),o[t]=[r[0],s[r[0]]];return o}var ZS=new ot("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:YS,construct:GS}),JS=Object.prototype.hasOwnProperty;function QS(e){if(e===null)return!0;var t,n=e;for(t in n)if(JS.call(n,t)&&n[t]!==null)return!1;return!0}function XS(e){return e!==null?e:{}}var eE=new ot("tag:yaml.org,2002:set",{kind:"mapping",resolve:QS,construct:XS});PS.extend({implicit:[LS,NS],explicit:[VS,US,ZS,eE]});function Hu(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var tE=new Array(256),nE=new Array(256);for(var Cs=0;Cs<256;Cs++)tE[Cs]=Hu(Cs)?1:0,nE[Cs]=Hu(Cs);function sE(e){return Array.from(new Set(e))}function Vu(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=s||1;return r}function nh(e,t){if(!t||t==="all"||t==="*")return Vu(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[r,o]=s.split("-",2);n.push(...Vu(+r,o?+o+1:e+1))}return sE(n).filter(s=>s<=e).sort((s,r)=>s-r)}function sh(e){const t=A(()=>e.value.path),n=A(()=>Ke.length-1),s=A(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=A(()=>_i(s.value)),o=A(()=>Ke.find(d=>d.path===`${s.value}`)),i=A(()=>{var d,m,g;return(g=(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:g.id}),l=A(()=>{var d,m;return((m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.layout)||(s.value===1?"cover":"default")}),c=A(()=>Ke.find(d=>d.path===`${Math.min(Ke.length,s.value+1)}`)),u=A(()=>Ke.filter(d=>{var m,g;return(g=(m=d.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((d,m)=>(Fl(d,m),d),[])),f=A(()=>jl(u.value,o.value)),p=A(()=>Dl(f.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:o,currentSlideId:i,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:f,tree:p,downloadPDF:Ba,next:Nn,nextSlide:Lr,openInEditor:VO,prev:Fn,prevSlide:Rr}}function rh(e,t,n){const s=q(0);et(()=>{vt.afterEach(async()=>{await et(),s.value+=1})});const r=A(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),o=A(()=>{var c,u;return+(((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)??r.value.length)}),i=A(()=>n.value<Ke.length-1||e.value<o.value),l=A(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:i,hasPrev:l}}const rE=["id"],oE=Oe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Xt(n,"clicksElements",t),r=A(()=>({height:`${El}px`,width:`${In}px`})),o=on();Ln(()=>Promise.resolve().then(()=>Ow),void 0).then(u=>o.value=u.default);const i=A(()=>n.clicks),l=rh(i,n.nav.currentRoute,n.nav.currentPage),c=A(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return xt(Z,qe({nav:{...n.nav,...l},configs:$e,themeConfigs:A(()=>$e.themeConfig)})),(u,f)=>{var p;return E(),te("div",{id:c.value,class:"print-slide-container",style:Qe(r.value)},[Q(M(Zd)),Q(M(Il),{is:(p=u.route)==null?void 0:p.component,"clicks-elements":M(s),"onUpdate:clicksElements":f[0]||(f[0]=d=>Te(s)?s.value=d:null),clicks:i.value,"clicks-disabled":!1,class:We(M(Ml)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),o.value?(E(),z(M(o),{key:0,page:+u.route.path},null,8,["page"])):we("v-if",!0),Q(M(Gd))],12,rE)}}}),Bu=J(oE,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),iE=Oe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var o;const t=e;H(Z);const n=q(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),s=A(()=>t.route),r=sh(s);return(i,l)=>(E(),te(Ce,null,[Q(Bu,{"clicks-elements":n.value,"onUpdate:clicksElements":l[0]||(l[0]=c=>n.value=c),clicks:0,nav:M(r),route:s.value},null,8,["clicks-elements","nav","route"]),M(_r)?we("v-if",!0):(E(!0),te(Ce,{key:0},Hs(n.value.length,c=>(E(),z(Bu,{key:c,clicks:c,nav:M(r),route:s.value},null,8,["clicks","nav","route"]))),128))],64))}}),aE=J(iE,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/PrintSlide.vue"]]),lE={id:"print-content"},cE=Oe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;H(Z);const n=A(()=>t.width),s=A(()=>t.width/Mn),r=A(()=>n.value/s.value),o=A(()=>r.value<Mn?n.value/In:s.value*Mn/In);let i=Ke.slice(0,-1);Ft.value.query.range&&(i=nh(i.length,Ft.value.query.range).map(u=>i[u-1]));const l=A(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return xt(Qp,o),(c,u)=>(E(),te("div",{id:"print-container",class:We(l.value)},[a("div",lE,[(E(!0),te(Ce,null,Hs(M(i),f=>(E(),z(aE,{key:f.path,route:f},null,8,["route"]))),128))]),Nt(c.$slots,"controls")],2))}});const uE=J(cE,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/PrintContainer.vue"]]),fE=Oe({__name:"Print",setup(e){return H(Z),bs(()=>{js?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,n)=>(E(),te(Ce,null,[M(js)?(E(),z(Jd,{key:0})):we("v-if",!0),a("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Qe(M($l))},[Q(uE,{class:"w-full h-full",style:Qe({background:"var(--slidev-slide-container-background, black)"}),width:M(ms).width.value},null,8,["style","width"])],4)],64))}});const pE=J(fE,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/internals/Print.vue"]]);const dE={class:"slidev-layout end"},hE={__name:"end",setup(e){return H(Z),(t,n)=>(E(),te("div",dE,[Nt(t.$slots,"default",{},()=>[h("END")],!0)]))}},oh=J(hE,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/layouts/end.vue"]]),mE={class:"px-2 -mx-2 mt-4 py-2"},gE=Oe({__name:"Signature",setup(e){H(Z);const t=new Date,n=t.getFullYear(),s=t.getMonth()+1,r=t.getDate(),o=`Richard Wang  ${n}/${s}/${r}`;return(i,l)=>(E(),te("div",mE,sn(o)))}}),_E=J(gE,[["__file","/home/runner/work/web-basic-2/web-basic-2/components/Signature.vue"]]);function qu(e){return e.startsWith("/")?"/web-basic-2"+e.slice(1):e}function ih(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${qu(e)})`:`url("${qu(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const vE=Oe({__name:"intro-image",props:{image:{type:String}},setup(e){const t=e;H(Z);const n=A(()=>ih(t.image));return(s,r)=>(E(),te("div",{class:"slidev-layout w-full h-full intro-image",style:Qe(n.value)},[Nt(s.$slots,"default")],4))}}),yE=J(vE,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/theme-apple-basic/layouts/intro-image.vue"]]),bE=a("div",{class:"absolute bottom-45 ml-10 text-black"},[a("h2",null,"Effect-TS /"),a("h1",null,"schema")],-1),wE={class:"absolute bottom-2 ml-10"},kE={class:"font-700-light text-black"},xE={__name:"1",setup(e){const t={theme:"apple-basic",lineNumbers:!0,drawings:{persist:!1},transition:"slide-up",css:"unocss",titleTemplate:"%s",favicon:"blackboard.png",fonts:{provider:"none",sans:"Roboto",serif:"Roboto Slab",mono:"Fira Code"},layout:"intro-image",image:"montain.jpg"};return H(Z),(n,s)=>{const r=_E;return E(),z(yE,fe(ue(t)),{default:U(()=>[bE,a("div",wE,[a("span",kE,[Q(r)])])]),_:1},16)}}},SE=J(xE,[["__file","/@slidev/slides/1.md"]]),EE={class:"grid grid-cols-2 w-full h-full"},$E=Oe({__name:"intro-image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;H(Z);const n=A(()=>ih(t.image));return(s,r)=>(E(),te("div",EE,[a("div",{class:We(["slidev-layout default image-right my-auto",t.class])},[Nt(s.$slots,"default")],2),a("div",{class:"my-14 mr-14",style:Qe(n.value)},null,4)]))}}),xs=J($E,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/theme-apple-basic/layouts/intro-image-right.vue"]]),TE=a("h1",null,"Outline",-1),CE=a("ul",null,[a("li",null,[a("p",null,"Why Effect-TS / schema ?")]),a("li",null,[a("p",null,"Parsing")]),a("li",null,[a("p",null,"Filter")]),a("li",null,[a("p",null,"Transformer")]),a("li",null,[a("p",null,"Composition")]),a("li",null,[a("p",null,"Practice")])],-1),OE={__name:"2",setup(e){const t={layout:"intro-image-right",image:"montain-cloud.jpg",transition:"fade-out",srcSequence:"./pages/index.md"};return H(Z),(n,s)=>(E(),z(xs,fe(ue(t)),{default:U(()=>[TE,CE]),_:1},16))}},PE=J(OE,[["__file","/@slidev/slides/2.md"]]),AE=a("h1",null,"Why",-1),ME=a("h2",null,"Effect-TS / schema ?",-1),IE={__name:"3",setup(e){const t={layout:"intro-image-right",image:"montain.jpg",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>(E(),z(xs,fe(ue(t)),{default:U(()=>[AE,ME]),_:1},16))}},LE=J(IE,[["__file","/@slidev/slides/3.md"]]),RE={class:"slidev-layout center h-full grid place-content-center"},NE={class:"my-auto"},FE={__name:"center",setup(e){return H(Z),(t,n)=>(E(),te("div",RE,[a("div",NE,[Nt(t.$slots,"default")])]))}},Le=J(FE,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/layouts/center.vue"]]),jE=a("h1",null,'Typescript "check" types (X)',-1),DE=a("br",null,null,-1),HE=a("h1",null,'Typescript "infer" types (O)',-1),VE={__name:"4",setup(e){const t={layout:"center",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[jE,DE,HE]),_:1},16))}},BE=J(VE,[["__file","/@slidev/slides/4.md"]]),qE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},WE=a("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),zE=[WE];function UE(e,t){return E(),te("svg",qE,zE)}const KE={name:"ph-clipboard",render:UE},YE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},GE=a("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),ZE=[GE];function JE(e,t){return E(),te("svg",YE,ZE)}const QE={name:"ph-check-circle",render:JE},XE=["title"],e$=Oe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;H(Z);const n=H(pr),s=H(ns),r=H(dr);function o(p=5){const d=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=m.length;for(let b=0;b<p;b++)d.push(m.charAt(Math.floor(Math.random()*g)));return d.join("")}const i=q(),l=yt();bn(()=>{const p=t.at==null?s==null?void 0:s.value.length:t.at,d=A(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(p||0)),t.ranges.length-1)),m=A(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const g=o(),b=Sy(t.ranges.length-1).map(w=>g+w);s!=null&&s.value&&(s.value.push(...b),ui(()=>b.forEach(w=>wa(s.value,w)),l))}bs(()=>{if(!i.value)return;const b=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const w of b){const k=Array.from(w.querySelectorAll(".line")),x=nh(k.length,m.value);if(k.forEach((v,T)=>{const S=x.includes(T+1);v.classList.toggle(Qn,!0),v.classList.toggle("highlighted",S),v.classList.toggle("dishonored",!S)}),t.maxHeight){const v=Array.from(w.querySelectorAll(".line.highlighted"));v.reduce((S,C)=>C.offsetHeight+S,0)>i.value.offsetHeight?v[0].scrollIntoView({behavior:"smooth",block:"start"}):v.length>0&&v[Math.round((v.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=w0();function f(){var d,m;const p=(m=(d=i.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:m.textContent;p&&u(p)}return(p,d)=>{const m=QE,g=KE;return E(),te("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:Qe({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Nt(p.$slots,"default"),M($e).codeCopy?(E(),te("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:M(c)?"Copied":"Copy",onClick:d[0]||(d[0]=b=>f())},[M(c)?(E(),z(m,{key:0,class:"p-2 w-8 h-8"})):(E(),z(g,{key:1,class:"p-2 w-8 h-8"}))],8,XE)):we("v-if",!0)],4)}}}),nt=J(e$,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);const t$=a("h3",null,"ts",-1),n$=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" input "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token number"},"100"),h(),a("span",{class:"token keyword"},"as"),h(),a("span",{class:"token builtin"},"any"),h(),a("span",{class:"token keyword"},"as"),h(),a("span",{class:"token builtin"},"string")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[h("input"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"split"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"','"),a("span",{class:"token punctuation"},")")])])],-1),s$=a("h3",null,"console",-1),r$=a("pre",{class:"slidev-code language-txt"},[a("code",null,[a("span",{class:"line"},"console.log(input.split(',')) "),h(`
`),a("span",{class:"line"},"                  ^"),h(`
`),a("span",{class:"line"},"TypeError: input.split is not a function")])],-1),o$={__name:"5",setup(e){const t={layout:"center",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[t$,Q(r,Be({},{ranges:[""]}),{default:U(()=>[n$]),_:1},16),s$,Q(r,Be({},{ranges:[""]}),{default:U(()=>[r$]),_:1},16)]),_:1},16)}}},i$=J(o$,[["__file","/@slidev/slides/5.md"]]),a$="/web-basic-2/ch1/unnecessary.jpg",l$=a("div",{className:"w-full flex justify-center"},[a("h1",{className:""},'Using "any" in typescript')],-1),c$=a("br",null,null,-1),u$=a("img",{src:a$,style:{height:"300px"},alt:"unnecessary"},null,-1),f$={__name:"6",setup(e){const t={layout:"center",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[l$,c$,u$]),_:1},16))}},p$=J(f$,[["__file","/@slidev/slides/6.md"]]);const d$=a("h3",null,"ag-grid",-1),h$=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"interface"),h(),a("span",{class:"token class-name"},[h("RowClickedEvent"),a("span",{class:"token operator"},"<"),h("TData "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token builtin"},"any"),a("span",{class:"token punctuation"},","),h(" TContext "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token builtin"},"any"),a("span",{class:"token operator"},">")]),h(),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("  data"),a("span",{class:"token operator"},":"),h(" TData "),a("span",{class:"token operator"},"|"),h(),a("span",{class:"token keyword"},"undefined"),a("span",{class:"token punctuation"},";")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token operator"},"...")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"//type of data may be any")])])],-1),m$=a("h3",null,"Axios",-1),g$=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(),a("span",{class:"token punctuation"},"{"),h(" data "),a("span",{class:"token punctuation"},"}"),h(),a("span",{class:"token operator"},"="),h(),a("span",{class:"token keyword"},"await"),h(" axios"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"get"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'/user?ID=12345'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"//type of data is any")])])],-1),_$={__name:"7",setup(e){const t={layout:"center",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[d$,Q(r,Be({},{ranges:[""]}),{default:U(()=>[h$]),_:1},16),m$,Q(r,Be({},{ranges:[""]}),{default:U(()=>[g$]),_:1},16)]),_:1},16)}}},v$=J(_$,[["__file","/@slidev/slides/7.md"]]),y$={class:"slidev-layout center h-full grid place-content-center statement"},b$={class:"my-auto"},w$={__name:"statement",setup(e){return H(Z),(t,n)=>(E(),te("div",y$,[a("div",b$,[Nt(t.$slots,"default")])]))}},Wn=J(w$,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/theme-apple-basic/layouts/statement.vue"]]),k$=a("h1",null,"Type checking is necessary",-1),x$={__name:"8",setup(e){const t={layout:"statement",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[k$]),_:1},16))}},S$=J(x$,[["__file","/@slidev/slides/8.md"]]);const E$=a("h3",null,"typeof - for primitive type",-1),$$=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"typeof"),h(),a("span",{class:"token string"},'"test"'),h(),a("span",{class:"token operator"},"==="),h(),a("span",{class:"token string"},'"string"'),h(),a("span",{class:"token comment"},"// true")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"typeof"),h(),a("span",{class:"token number"},"0"),h(),a("span",{class:"token operator"},"==="),h(),a("span",{class:"token string"},'"string"'),h(),a("span",{class:"token comment"},"// false")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"typeof"),h(),a("span",{class:"token punctuation"},"{"),h(" a"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token number"},"0"),h(),a("span",{class:"token punctuation"},"}"),h(),a("span",{class:"token operator"},"==="),h(),a("span",{class:"token string"},'"object"'),h(),a("span",{class:"token comment"},"// true")])])],-1),T$=a("h3",null,"instanceof - for class",-1),C$=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"function"),h(),a("span",{class:"token function"},"Car"),a("span",{class:"token punctuation"},"("),h("make"),a("span",{class:"token punctuation"},","),h(" model"),a("span",{class:"token punctuation"},","),h(" year"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),h("make "),a("span",{class:"token operator"},"="),h(" make"),a("span",{class:"token punctuation"},";")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),h("model "),a("span",{class:"token operator"},"="),h(" model"),a("span",{class:"token punctuation"},";")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),h("year "),a("span",{class:"token operator"},"="),h(" year"),a("span",{class:"token punctuation"},";")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" auto "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token keyword"},"new"),h(),a("span",{class:"token class-name"},"Car"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'Honda'"),a("span",{class:"token punctuation"},","),h(),a("span",{class:"token string"},"'Accord'"),a("span",{class:"token punctuation"},","),h(),a("span",{class:"token number"},"1998"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token builtin"},"console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),h("auto "),a("span",{class:"token keyword"},"instanceof"),h(),a("span",{class:"token class-name"},"Car"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),h(),a("span",{class:"token comment"},"// true")])])],-1),O$={__name:"9",setup(e){const t={layout:"center",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[E$,Q(r,Be({},{ranges:[""]}),{default:U(()=>[$$]),_:1},16),T$,Q(r,Be({},{ranges:[""]}),{default:U(()=>[C$]),_:1},16)]),_:1},16)}}},P$=J(O$,[["__file","/@slidev/slides/9.md"]]),A$=a("h1",null,"Native checking is insufficient",-1),M$={__name:"10",setup(e){const t={layout:"statement",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[A$]),_:1},16))}},I$=J(M$,[["__file","/@slidev/slides/10.md"]]),L$=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"-"),a("th",null,"zod"),a("th",null,"io-ts"),a("th",null,"schema")])]),a("tbody",null,[a("tr",null,[a("td",null,"parsing"),a("td",null,"⭐⭐⭐"),a("td",null,"⭐⭐⭐"),a("td",null,"⭐⭐⭐")]),a("tr",null,[a("td",null,"filter"),a("td",null,"⭐⭐⭐"),a("td",null,"⭐🔘🔘"),a("td",null,"⭐⭐⭐")]),a("tr",null,[a("td",null,"transform"),a("td",null,"⭐⭐⭐"),a("td",null,"⭐🔘🔘"),a("td",null,"⭐⭐⭐")]),a("tr",null,[a("td",null,"composition"),a("td",null,"⭐⭐⭐"),a("td",null,"⭐🔘🔘"),a("td",null,"⭐⭐⭐")]),a("tr",null,[a("td",null,"fp-ts compatibility"),a("td",null,"⭐🔘🔘"),a("td",null,"⭐⭐⭐"),a("td",null,"⭐⭐⭐")])])],-1),R$={__name:"11",setup(e){const t={layout:"center",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[L$]),_:1},16))}},N$=J(R$,[["__file","/@slidev/slides/11.md"]]),F$=a("h1",null,"🏆 Effect-TS/schema 🏆",-1),j$={__name:"12",setup(e){const t={transition:"fade-out",layout:"center",srcSequence:"./pages/ch1.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[F$]),_:1},16))}},D$=J(j$,[["__file","/@slidev/slides/12.md"]]),H$=a("h1",null,"Parsing",-1),V$=a("h2",null,"in Effect-TS / schema",-1),B$={__name:"13",setup(e){const t={layout:"intro-image-right",image:"montain.jpg",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>(E(),z(xs,fe(ue(t)),{default:U(()=>[H$,V$]),_:1},16))}},q$=J(B$,[["__file","/@slidev/slides/13.md"]]),W$=a("h1",null,"What is parsing ?",-1),z$={__name:"14",setup(e){const t={layout:"statement",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[W$]),_:1},16))}},U$=J(z$,[["__file","/@slidev/slides/14.md"]]),K$="/web-basic-2/ch2/parsing.svg";const Y$=a("img",{src:K$,style:{height:"500px"},alt:"parsing"},null,-1),G$={__name:"15",setup(e){const t={layout:"center",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[Y$]),_:1},16))}},Z$=J(G$,[["__file","/@slidev/slides/15.md"]]),J$=a("h1",null,"How to implement parse ?",-1),Q$={__name:"16",setup(e){const t={layout:"statement",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[J$]),_:1},16))}},X$=J(Q$,[["__file","/@slidev/slides/16.md"]]);const eT=a("h2",null,"Getting started",-1),tT=a("br",null,null,-1),nT=a("h3",null,"install",-1),sT=a("pre",null,[a("code",null,[a("span",{class:"line"},"npm i @effect/schema")])],-1),rT=a("br",null,null,-1),oT=a("h3",null,"import",-1),iT=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),h(),a("span",{class:"token operator"},"*"),h(),a("span",{class:"token keyword"},"as"),h(),a("span",{class:"token constant"},"S"),h(),a("span",{class:"token keyword"},"from"),h(),a("span",{class:"token string"},"'@effect/schema/Schema'")])])],-1),aT={__name:"17",setup(e){const t={layout:"center",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[eT,tT,nT,sT,rT,oT,Q(r,Be({},{ranges:[""]}),{default:U(()=>[iT]),_:1},16)]),_:1},16)}}},lT=J(aT,[["__file","/@slidev/slides/17.md"]]);const cT=a("h2",null,"Define abstract syntax tree (AST)",-1),uT=a("h3",null,"product type",-1),fT=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"import"),h(),a("span",{class:"token operator"},"*"),h(),a("span",{class:"token keyword"},"as"),h(),a("span",{class:"token constant"},"S"),h(),a("span",{class:"token keyword"},"from"),h(),a("span",{class:"token string"},"'@effect/schema/Schema'")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" car "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"struct"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("    make"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    model"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")")])])],-1),pT={__name:"18",setup(e){const t={layout:"center",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[cT,uT,Q(r,Be({},{ranges:[""]}),{default:U(()=>[fT]),_:1},16)]),_:1},16)}}},dT=J(pT,[["__file","/@slidev/slides/18.md"]]);const hT=a("h2",null,"Call parse function of schema",-1),mT=a("h3",null,"product type",-1),gT=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" carSchema "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"struct"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("    make"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    model"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" parseCar "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"parse"),a("span",{class:"token punctuation"},"("),h("carSchema"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" myCar "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"parseCar"),a("span",{class:"token punctuation"},"("),h("data"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"// type of myCar - {make:string, model:string}")])])],-1),_T={__name:"19",setup(e){const t={layout:"center",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[hT,mT,Q(r,Be({},{ranges:[""]}),{default:U(()=>[gT]),_:1},16)]),_:1},16)}}},vT=J(_T,[["__file","/@slidev/slides/19.md"]]);const yT=a("h2",null,"Handle parsing error",-1),bT=a("h3",null,"Non-FP",-1),wT=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"try"),h(),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token keyword"},"const"),h(" myCar "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"parse"),a("span",{class:"token punctuation"},"("),h("carSchema"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"("),h("data"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),h(),a("span",{class:"token keyword"},"catch"),h(),a("span",{class:"token punctuation"},"("),h("e"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h(),a("span",{class:"token comment"},"//handle error here")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}")])])],-1),kT=a("h3",null,"FP",-1),xT=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" myCar "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"parseEither"),a("span",{class:"token punctuation"},"("),h("carSchema"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"("),h("data"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"// type of myCar - Either<ParseError, Car>")])])],-1),ST={__name:"20",setup(e){const t={layout:"center",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[yT,bT,Q(r,Be({},{ranges:[""]}),{default:U(()=>[wT]),_:1},16),kT,Q(r,Be({},{ranges:[""]}),{default:U(()=>[xT]),_:1},16)]),_:1},16)}}},ET=J(ST,[["__file","/@slidev/slides/20.md"]]);const $T=a("h1",null,"Error message",-1),TT=a("h3",null,"schema",-1),CT=a("pre",null,[a("code",null,[a("span",{class:"line"},"Error: error(s) found"),h(`
`),a("span",{class:"line"},'└─ ["make"]'),h(`
`),a("span",{class:"line"},"   └─ Expected string, actual 2008")])],-1),OT=a("div",{className:"color-neutral-600"}," * The error message of ParseError can be obtained through the formatErrors function ",-1),PT=a("br",null,null,-1),AT=a("br",null,null,-1),MT=a("h3",null,"io-ts",-1),IT=a("pre",null,[a("code",null,[a("span",{class:"line"},"Invalid value 2008 supplied to : "),h(`
`),a("span",{class:"line"},"{ make: string, model: string }/make: string")])],-1),LT={__name:"21",setup(e){const t={layout:"center",transition:"fade-out",srcSequence:"./pages/ch2.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[$T,TT,CT,OT,PT,AT,MT,IT]),_:1},16))}},RT=J(LT,[["__file","/@slidev/slides/21.md"]]),NT=a("h1",null,"Filter",-1),FT=a("h2",null,"in Effect-TS / schema",-1),jT={__name:"22",setup(e){const t={layout:"intro-image-right",image:"montain.jpg",srcSequence:"./pages/ch3.md"};return H(Z),(n,s)=>(E(),z(xs,fe(ue(t)),{default:U(()=>[NT,FT]),_:1},16))}},DT=J(jT,[["__file","/@slidev/slides/22.md"]]),HT=a("h1",null,"What is filter ?",-1),VT={__name:"23",setup(e){const t={layout:"statement",srcSequence:"./pages/ch3.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[HT]),_:1},16))}},BT=J(VT,[["__file","/@slidev/slides/23.md"]]),qT="/web-basic-2/ch3/filter.svg",WT=a("img",{src:qT,style:{height:"500px"},alt:"parsing"},null,-1),zT={__name:"24",setup(e){const t={layout:"statement",srcSequence:"./pages/ch3.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[WT]),_:1},16))}},UT=J(zT,[["__file","/@slidev/slides/24.md"]]);const KT=a("h1",null,"Let’s review the car schema",-1),YT=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" car "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"struct"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("    make"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("    model"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")")])])],-1),GT=a("h2",null,"What if you want to check the string length ?",-1),ZT={__name:"25",setup(e){const t={layout:"center",srcSequence:"./pages/ch3.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[KT,Q(r,Be({},{ranges:[""]}),{default:U(()=>[YT]),_:1},16),GT]),_:1},16)}}},JT=J(ZT,[["__file","/@slidev/slides/25.md"]]);const QT=a("h2",null,"With filter !",-1),XT=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" model "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"nonEmpty"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),h(),a("span",{class:"token comment"},"//filter len > 0")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"maxLength"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"200"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token comment"},"//filter <= 200")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" car "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"struct"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("  make"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("  model"),a("span",{class:"token operator"},":"),h(" model")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")")])])],-1),eC={__name:"26",setup(e){const t={layout:"center",srcSequence:"./pages/ch3.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[QT,Q(r,Be({},{ranges:[""]}),{default:U(()=>[XT]),_:1},16)]),_:1},16)}}},tC=J(eC,[["__file","/@slidev/slides/26.md"]]),nC="/web-basic-2/ch3/filters.png",sC=a("h2",null,[h("There are more filters in schema "),a("a",{href:"https://github.com/Effect-TS/schema#readme",target:"_blank",rel:"noopener"},"README")],-1),rC=a("img",{src:nC,style:{height:"500px"},alt:"unnecessary"},null,-1),oC={__name:"27",setup(e){const t={layout:"center",srcSequence:"./pages/ch3.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[sC,rC]),_:1},16))}},iC=J(oC,[["__file","/@slidev/slides/27.md"]]);const aC=a("h2",null,"Customized filter",-1),lC=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token comment"},"// predicate function")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(),a("span",{class:"token function-variable function"},"startWithA"),h(),a("span",{class:"token operator"},"="),h(),a("span",{class:"token punctuation"},"("),h("s"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token operator"},"=>"),h(" s"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),h(),a("span",{class:"token operator"},"==="),h(),a("span",{class:"token string"},"'A'")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" model "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"nonEmpty"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"maxLength"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"200"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"filter"),a("span",{class:"token punctuation"},"("),h("startWithA"),a("span",{class:"token punctuation"},")"),h("  ")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token comment"},"// filter with predicate function")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" car "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"struct"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("  make"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("  model"),a("span",{class:"token operator"},":"),h(" model")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")")])])],-1),cC={__name:"28",setup(e){const t={layout:"center",transition:"fade-out",srcSequence:"./pages/ch3.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[aC,Q(r,Be({},{ranges:[""]}),{default:U(()=>[lC]),_:1},16)]),_:1},16)}}},uC=J(cC,[["__file","/@slidev/slides/28.md"]]),fC=a("h1",null,"Transformer",-1),pC=a("h2",null,"in Effect-TS / schema",-1),dC={__name:"29",setup(e){const t={layout:"intro-image-right",image:"montain.jpg",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>(E(),z(xs,fe(ue(t)),{default:U(()=>[fC,pC]),_:1},16))}},hC=J(dC,[["__file","/@slidev/slides/29.md"]]),mC=a("h1",null,"What is transformer ?",-1),gC={__name:"30",setup(e){const t={layout:"statement",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[mC]),_:1},16))}},_C=J(gC,[["__file","/@slidev/slides/30.md"]]),vC="/web-basic-2/ch4/transformer.png",yC=a("img",{src:vC,style:{height:"500px"},alt:"transformer"},null,-1),bC={__name:"31",setup(e){const t={layout:"center",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[yC]),_:1},16))}},wC=J(bC,[["__file","/@slidev/slides/31.md"]]),kC="/web-basic-2/ch4/trans.svg",xC=a("img",{src:kC,style:{height:"500px"},alt:"trans"},null,-1),SC={__name:"32",setup(e){const t={layout:"center",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[xC]),_:1},16))}},EC=J(SC,[["__file","/@slidev/slides/32.md"]]);const $C=a("h1",null,"Date transformer",-1),TC=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" date "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token string"},"'2023-06-05T12:39:23.000Z'"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"parseEither"),a("span",{class:"token punctuation"},"("),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("Date"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"//Either<ParseError, Date>")])])],-1),CC={__name:"33",setup(e){const t={layout:"center",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[$C,Q(r,Be({},{ranges:[""]}),{default:U(()=>[TC]),_:1},16)]),_:1},16)}}},OC=J(CC,[["__file","/@slidev/slides/33.md"]]),PC=a("h1",null,"How to get type of",-1),AC=a("h1",null,"a transformer ?",-1),MC={__name:"34",setup(e){const t={layout:"statement",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>(E(),z(Wn,fe(ue(t)),{default:U(()=>[PC,AC]),_:1},16))}},IC=J(MC,[["__file","/@slidev/slides/34.md"]]);const LC=a("h1",null,"From type & To type",-1),RC=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"//string")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"type"),h(),a("span",{class:"token class-name"},[a("span",{class:"token keyword"},"from")]),h(),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("From"),a("span",{class:"token operator"},"<"),a("span",{class:"token keyword"},"typeof"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("Date"),a("span",{class:"token operator"},">"),h()]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"//Date")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"type"),h(),a("span",{class:"token class-name"},"to"),h(),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("To"),a("span",{class:"token operator"},"<"),a("span",{class:"token keyword"},"typeof"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("Date"),a("span",{class:"token operator"},">")])])],-1),NC={__name:"35",setup(e){const t={layout:"center",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[LC,Q(r,Be({},{ranges:[""]}),{default:U(()=>[RC]),_:1},16)]),_:1},16)}}},FC=J(NC,[["__file","/@slidev/slides/35.md"]]);const jC=a("h1",null,"From type & To type of composed schema",-1),DC=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" car "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"struct"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("    make"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("    model"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    date"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("Date")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"// {make:string, model:string, date:string}")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" CarSource "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("From"),a("span",{class:"token operator"},"<"),a("span",{class:"token keyword"},"typeof"),h(" car"),a("span",{class:"token operator"},">")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"// {make:string, model:string, date:Date}")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" CarDest "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("To"),a("span",{class:"token operator"},"<"),a("span",{class:"token keyword"},"typeof"),h(" car"),a("span",{class:"token operator"},">")])])],-1),HC={__name:"36",setup(e){const t={layout:"center",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[jC,Q(r,Be({},{ranges:[""]}),{default:U(()=>[DC]),_:1},16)]),_:1},16)}}},VC=J(HC,[["__file","/@slidev/slides/36.md"]]);const BC=a("h1",null,"Customized transformer",-1),qC=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" UpperCase "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"transform"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},","),h(),a("span",{class:"token comment"},"//from type")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},","),h(),a("span",{class:"token comment"},"//to type")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},"("),h("s"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token operator"},"="),h(" s"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"toUpperCase"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},"("),h("s"),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),h(" s")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},")")])])],-1),WC={__name:"37",setup(e){const t={layout:"center",transition:"fade-out",srcSequence:"./pages/ch4.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[BC,Q(r,Be({},{ranges:[""]}),{default:U(()=>[qC]),_:1},16)]),_:1},16)}}},zC=J(WC,[["__file","/@slidev/slides/37.md"]]);const UC=a("h1",null,"Composition",-1),KC=a("h2",null,"in Effect-TS / schema",-1),YC={__name:"38",setup(e){const t={layout:"intro-image-right",image:"montain.jpg",srcSequence:"./pages/ch5.md"};return H(Z),(n,s)=>(E(),z(xs,fe(ue(t)),{default:U(()=>[UC,KC]),_:1},16))}},GC=J(YC,[["__file","/@slidev/slides/38.md"]]),ZC=a("h2",null,"How to change start with A to start with B",-1),JC=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" startWithA "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"filter"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),h("s"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token operator"},"=>"),h(" s"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),h(),a("span",{class:"token operator"},"==="),h(),a("span",{class:"token string"},"'A'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" carA "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"struct"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{")]),h(`
`),a("span",{class:"line"},[h("    make"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("    model"),a("span",{class:"token operator"},":"),h(" startWithA"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    date"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),h("Date")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")")])])],-1),QC={__name:"39",setup(e){const t={layout:"center",srcSequence:"./pages/ch5.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[ZC,Q(r,Be({},{ranges:[""]}),{default:U(()=>[JC]),_:1},16)]),_:1},16)}}},XC=J(QC,[["__file","/@slidev/slides/39.md"]]),eO=a("h1",null,"Omit and Extend",-1),tO=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" startWithB "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"filter"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),h("s"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token operator"},"=>"),h(" s"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),h(),a("span",{class:"token operator"},"==="),h(),a("span",{class:"token string"},"'A'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" carB "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("  carA"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"omit"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'model'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"extend"),a("span",{class:"token punctuation"},"("),h("startWithB"),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},")")])])],-1),nO=a("h2",null,"How to get models of cars ?",-1),sO={__name:"40",setup(e){const t={layout:"center",srcSequence:"./pages/ch5.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[eO,Q(r,Be({},{ranges:[""]}),{default:U(()=>[tO]),_:1},16),nO]),_:1},16)}}},rO=J(sO,[["__file","/@slidev/slides/40.md"]]),oO=a("h1",null,"Pick",-1),iO=a("pre",{class:"slidev-code language-ts"},[a("code",null,[a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" startWithB "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"filter"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),h("s"),a("span",{class:"token operator"},":"),h(),a("span",{class:"token builtin"},"string"),a("span",{class:"token punctuation"},")"),h(),a("span",{class:"token operator"},"=>"),h(" s"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),h(),a("span",{class:"token operator"},"==="),h(),a("span",{class:"token string"},"'A'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),h()]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"}),h(`
`),a("span",{class:"line"},[a("span",{class:"token keyword"},"const"),h(" models "),a("span",{class:"token operator"},"="),h(),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"union"),a("span",{class:"token punctuation"},"(")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"("),h("carA"),a("span",{class:"token punctuation"},","),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"pick"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'model'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("    "),a("span",{class:"token function"},"pipe"),a("span",{class:"token punctuation"},"("),h("carB"),a("span",{class:"token punctuation"},","),h(),a("span",{class:"token constant"},"S"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"pick"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'model'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},",")]),h(`
`),a("span",{class:"line"},[h("  "),a("span",{class:"token punctuation"},")")]),h(`
`),a("span",{class:"line"},[a("span",{class:"token punctuation"},")")])])],-1),aO={__name:"41",setup(e){const t={layout:"center",srcSequence:"./pages/ch5.md"};return H(Z),(n,s)=>{const r=nt;return E(),z(Le,fe(ue(t)),{default:U(()=>[oO,Q(r,Be({},{ranges:[""]}),{default:U(()=>[iO]),_:1},16)]),_:1},16)}}},lO=J(aO,[["__file","/@slidev/slides/41.md"]]),cO=a("h2",null,[h("There are more utilities in "),a("a",{href:"https://github.com/Effect-TS/schema#readme",target:"_blank",rel:"noopener"},"README"),h(" !")],-1),uO=a("ul",null,[a("li",null,"optional"),a("li",null,"optional with default value"),a("li",null,"partial"),a("li",null,"required"),a("li",null,"recursive types"),a("li",null,"…")],-1),fO={__name:"42",setup(e){const t={layout:"center",transition:"fade-out",srcSequence:"./pages/ch5.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[cO,uO]),_:1},16))}},pO=J(fO,[["__file","/@slidev/slides/42.md"]]);const dO=a("h1",null,"Practice",-1),hO={__name:"43",setup(e){const t={layout:"intro-image-right",image:"montain.jpg",srcSequence:"./pages/ch6.md"};return H(Z),(n,s)=>(E(),z(xs,fe(ue(t)),{default:U(()=>[dO]),_:1},16))}},mO=J(hO,[["__file","/@slidev/slides/43.md"]]),gO=a("h1",null,"High-level overview",-1),_O={__name:"44",setup(e){const t={layout:"center",transition:"fade-out",srcSequence:"./pages/ch6.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[gO]),_:1},16))}},vO=J(_O,[["__file","/@slidev/slides/44.md"]]),yO=a("h1",null,"Code review",-1),bO=a("ul",null,[a("li",null,"Naming"),a("li",null,"Folder structure"),a("li",null,"Validation function")],-1),wO={__name:"45",setup(e){const t={layout:"center",transition:"fade-out",srcSequence:"./pages/ch6.md"};return H(Z),(n,s)=>(E(),z(Le,fe(ue(t)),{default:U(()=>[yO,bO]),_:1},16))}},kO=J(wO,[["__file","/@slidev/slides/45.md"]]),xO=a("h1",null,"Thank you !",-1),SO={__name:"46",setup(e){const t={layout:"end",srcSequence:"./pages/end.md"};return H(Z),(n,s)=>(E(),z(oh,fe(ue(t)),{default:U(()=>[xO]),_:1},16))}},EO=J(SO,[["__file","/@slidev/slides/46.md"]]),$O=[{path:"1",name:"page-1",component:SE,meta:{theme:"apple-basic",lineNumbers:!0,drawings:{persist:!1},transition:"slide-up",css:"unocss",title:"Effect-TS / schema",titleTemplate:"%s",favicon:"blackboard.png",fonts:{provider:"none",sans:"Roboto",serif:"Roboto Slab",mono:"Fira Code"},layout:"intro-image",image:"montain.jpg",slide:{raw:`---
theme: apple-basic
# class: text-center
# highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-up
css: unocss
title: Effect-TS / schema
titleTemplate: '%s'
favicon: blackboard.png
fonts:
  provider: none
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code
layout: intro-image
image: montain.jpg
---

<div class="absolute bottom-45 ml-10 text-black">
  <h2>Effect-TS /</h2>
  <h1>schema</h1>
</div>

<div class="absolute bottom-2  ml-10">
  <span class="font-700-light text-black">
  <Signature />
  </span>
</div>

<!--
大家好，今天跟大家分享 effect-ts / schema 這個工具
-->

`,title:"Effect-TS / schema",content:`<div class="absolute bottom-45 ml-10 text-black">
  <h2>Effect-TS /</h2>
  <h1>schema</h1>
</div>

<div class="absolute bottom-2  ml-10">
  <span class="font-700-light text-black">
  <Signature />
  </span>
</div>`,frontmatter:{theme:"apple-basic",lineNumbers:!0,drawings:{persist:!1},transition:"slide-up",css:"unocss",title:"Effect-TS / schema",titleTemplate:"%s",favicon:"blackboard.png",fonts:{provider:"none",sans:"Roboto",serif:"Roboto Slab",mono:"Fira Code"},layout:"intro-image",image:"montain.jpg"},note:"大家好，今天跟大家分享 effect-ts / schema 這個工具",index:0,start:0,end:37,noteHTML:`<p>大家好，今天跟大家分享 effect-ts / schema 這個工具</p>
`,filepath:"/home/runner/work/web-basic-2/web-basic-2/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:PE,meta:{layout:"intro-image-right",image:"montain-cloud.jpg",transition:"fade-out",title:"Outline",srcSequence:"./pages/index.md",slide:{raw:null,title:"Outline",level:1,content:`# Outline

- Why Effect-TS / schema ?

- Parsing
  
- Filter

- Transformer

- Composition

- Practice`,frontmatter:{layout:"intro-image-right",image:"montain-cloud.jpg",transition:"fade-out",title:"Outline",srcSequence:"./pages/index.md"},note:`選用工具，就是為了解決問題所以在

一開始 會告訴大家這個工具能用來解決甚麼問題

接下來會跟大家介紹四個主要功能

最後，會跟大家分享我們團隊使用這個工具的實務心得`,index:1,start:0,end:33,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/index.md",raw:`---
layout: intro-image-right
image: montain-cloud.jpg
transition: fade-out
---

# Outline

- Why Effect-TS / schema ?

- Parsing
  
- Filter

- Transformer

- Composition

- Practice



<!--
選用工具，就是為了解決問題所以在

一開始 會告訴大家這個工具能用來解決甚麼問題

接下來會跟大家介紹四個主要功能

最後，會跟大家分享我們團隊使用這個工具的實務心得

-->
`,title:"Outline",level:1,content:`# Outline

- Why Effect-TS / schema ?

- Parsing
  
- Filter

- Transformer

- Composition

- Practice`,frontmatter:{layout:"intro-image-right",image:"montain-cloud.jpg",transition:"fade-out",title:"Outline"},note:`選用工具，就是為了解決問題所以在

一開始 會告訴大家這個工具能用來解決甚麼問題

接下來會跟大家介紹四個主要功能

最後，會跟大家分享我們團隊使用這個工具的實務心得`,index:0,start:0,end:33},inline:{raw:`---
src: ./pages/index.md
---
`,content:"",frontmatter:{},index:1,start:37,end:41},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/index.md",noteHTML:`<p>選用工具，就是為了解決問題所以在</p>
<p>一開始 會告訴大家這個工具能用來解決甚麼問題</p>
<p>接下來會跟大家介紹四個主要功能</p>
<p>最後，會跟大家分享我們團隊使用這個工具的實務心得</p>
`,id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:LE,meta:{layout:"intro-image-right",image:"montain.jpg",title:"Why",srcSequence:"./pages/ch1.md",slide:{raw:null,title:"Why",level:1,content:`# Why

## Effect-TS / schema ?`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Why",srcSequence:"./pages/ch1.md"},note:"接下來我會努力嘗試傳教，讓大家對這個工具有興趣",index:2,start:0,end:12,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: intro-image-right
image: montain.jpg
---

# Why

## Effect-TS / schema ?


<!-- 接下來我會努力嘗試傳教，讓大家對這個工具有興趣 -->
`,title:"Why",level:1,content:`# Why

## Effect-TS / schema ?`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Why"},note:"接下來我會努力嘗試傳教，讓大家對這個工具有興趣",index:0,start:0,end:12},inline:{raw:`---
src: ./pages/ch1.md
---
`,content:"",frontmatter:{},index:2,start:41,end:45},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:`<p>接下來我會努力嘗試傳教，讓大家對這個工具有興趣</p>
`,id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:BE,meta:{layout:"center",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: center
---

# Typescript "check" types (X)

<br/>

# Typescript "infer" types (O)



`,title:'Typescript "check" types (X)',level:1,content:`# Typescript "check" types (X)

<br/>

# Typescript "infer" types (O)`,frontmatter:{layout:"center",srcSequence:"./pages/ch1.md"},index:3,start:12,end:25,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: center
---

# Typescript "check" types (X)

<br/>

# Typescript "infer" types (O)



`,title:'Typescript "check" types (X)',level:1,content:`# Typescript "check" types (X)

<br/>

# Typescript "infer" types (O)`,frontmatter:{layout:"center"},index:1,start:12,end:25},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:i$,meta:{layout:"center",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-5 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ts
\`\`\`ts
const input = 100 as any as string

input.split(',')
\`\`\`

### console
\`\`\`txt
console.log(input.split(',')) 
                  ^
TypeError: input.split is not a function
\`\`\`
`,title:"ts",level:3,content:`<style>
.slidev-page-5 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ts
\`\`\`ts
const input = 100 as any as string

input.split(',')
\`\`\`

### console
\`\`\`txt
console.log(input.split(',')) 
                  ^
TypeError: input.split is not a function
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch1.md"},index:4,start:25,end:50,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: center
---

<style>
.slidev-page-5 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ts
\`\`\`ts
const input = 100 as any as string

input.split(',')
\`\`\`

### console
\`\`\`txt
console.log(input.split(',')) 
                  ^
TypeError: input.split is not a function
\`\`\`
`,title:"ts",level:3,content:`<style>
.slidev-page-5 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ts
\`\`\`ts
const input = 100 as any as string

input.split(',')
\`\`\`

### console
\`\`\`txt
console.log(input.split(',')) 
                  ^
TypeError: input.split is not a function
\`\`\``,frontmatter:{layout:"center"},index:2,start:25,end:50},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:p$,meta:{layout:"center",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: center
---


<div className="w-full flex justify-center">
<h1 className="">Using "any" in typescript</h1>
</div>
<br/>
<img src="/ch1/unnecessary.jpg" style='height:300px' alt='unnecessary'/>


`,content:`<div className="w-full flex justify-center">
<h1 className="">Using "any" in typescript</h1>
</div>
<br/>
<img src="/ch1/unnecessary.jpg" style='height:300px' alt='unnecessary'/>`,frontmatter:{layout:"center",srcSequence:"./pages/ch1.md"},index:5,start:50,end:63,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: center
---


<div className="w-full flex justify-center">
<h1 className="">Using "any" in typescript</h1>
</div>
<br/>
<img src="/ch1/unnecessary.jpg" style='height:300px' alt='unnecessary'/>


`,content:`<div className="w-full flex justify-center">
<h1 className="">Using "any" in typescript</h1>
</div>
<br/>
<img src="/ch1/unnecessary.jpg" style='height:300px' alt='unnecessary'/>`,frontmatter:{layout:"center"},index:3,start:50,end:63},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:v$,meta:{layout:"center",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-7 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ag-grid
\`\`\`ts
interface RowClickedEvent<TData = any, TContext = any> {
  data: TData | undefined;
  ...
}
//type of data may be any
\`\`\`

### Axios
\`\`\`ts
const { data } = await axios.get('/user?ID=12345');
//type of data is any
\`\`\`

`,title:"ag-grid",level:3,content:`<style>
.slidev-page-7 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ag-grid
\`\`\`ts
interface RowClickedEvent<TData = any, TContext = any> {
  data: TData | undefined;
  ...
}
//type of data may be any
\`\`\`

### Axios
\`\`\`ts
const { data } = await axios.get('/user?ID=12345');
//type of data is any
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch1.md"},index:6,start:63,end:90,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: center
---

<style>
.slidev-page-7 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ag-grid
\`\`\`ts
interface RowClickedEvent<TData = any, TContext = any> {
  data: TData | undefined;
  ...
}
//type of data may be any
\`\`\`

### Axios
\`\`\`ts
const { data } = await axios.get('/user?ID=12345');
//type of data is any
\`\`\`

`,title:"ag-grid",level:3,content:`<style>
.slidev-page-7 pre{
   font-size: 24px !important;
   line-height: 32px !important;
}
</style>

### ag-grid
\`\`\`ts
interface RowClickedEvent<TData = any, TContext = any> {
  data: TData | undefined;
  ...
}
//type of data may be any
\`\`\`

### Axios
\`\`\`ts
const { data } = await axios.get('/user?ID=12345');
//type of data is any
\`\`\``,frontmatter:{layout:"center"},index:4,start:63,end:90},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:S$,meta:{layout:"statement",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: statement
---

#  Type checking is necessary

`,title:"Type checking is necessary",level:1,content:"#  Type checking is necessary",frontmatter:{layout:"statement",srcSequence:"./pages/ch1.md"},index:7,start:90,end:97,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: statement
---

#  Type checking is necessary

`,title:"Type checking is necessary",level:1,content:"#  Type checking is necessary",frontmatter:{layout:"statement"},index:5,start:90,end:97},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:P$,meta:{layout:"center",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: center
---


<style>
.slidev-page-9 pre{
   font-size: 20px !important;
   line-height: 28px !important;
}
</style>

### typeof - for primitive type
\`\`\`ts
typeof "test" === "string" // true
typeof 0 === "string" // false
typeof { a: 0 } === "object" // true
\`\`\`

### instanceof - for class
\`\`\`ts
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true
\`\`\`

`,title:"typeof - for primitive type",level:3,content:`<style>
.slidev-page-9 pre{
   font-size: 20px !important;
   line-height: 28px !important;
}
</style>

### typeof - for primitive type
\`\`\`ts
typeof "test" === "string" // true
typeof 0 === "string" // false
typeof { a: 0 } === "object" // true
\`\`\`

### instanceof - for class
\`\`\`ts
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch1.md"},index:8,start:97,end:129,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: center
---


<style>
.slidev-page-9 pre{
   font-size: 20px !important;
   line-height: 28px !important;
}
</style>

### typeof - for primitive type
\`\`\`ts
typeof "test" === "string" // true
typeof 0 === "string" // false
typeof { a: 0 } === "object" // true
\`\`\`

### instanceof - for class
\`\`\`ts
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true
\`\`\`

`,title:"typeof - for primitive type",level:3,content:`<style>
.slidev-page-9 pre{
   font-size: 20px !important;
   line-height: 28px !important;
}
</style>

### typeof - for primitive type
\`\`\`ts
typeof "test" === "string" // true
typeof 0 === "string" // false
typeof { a: 0 } === "object" // true
\`\`\`

### instanceof - for class
\`\`\`ts
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true
\`\`\``,frontmatter:{layout:"center"},index:6,start:97,end:129},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:I$,meta:{layout:"statement",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: statement
---

#  Native checking is insufficient

`,title:"Native checking is insufficient",level:1,content:"#  Native checking is insufficient",frontmatter:{layout:"statement",srcSequence:"./pages/ch1.md"},index:9,start:129,end:136,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: statement
---

#  Native checking is insufficient

`,title:"Native checking is insufficient",level:1,content:"#  Native checking is insufficient",frontmatter:{layout:"statement"},index:7,start:129,end:136},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:N$,meta:{layout:"center",srcSequence:"./pages/ch1.md",slide:{raw:`---
layout: center
---

-| zod | io-ts | schema 
-|-|-|-
parsing | ⭐⭐⭐ | ⭐⭐⭐ |⭐⭐⭐
filter | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
transform | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
composition | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
fp-ts compatibility | ⭐🔘🔘 | ⭐⭐⭐ |⭐⭐⭐ `,content:`-| zod | io-ts | schema 
-|-|-|-
parsing | ⭐⭐⭐ | ⭐⭐⭐ |⭐⭐⭐
filter | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
transform | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
composition | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
fp-ts compatibility | ⭐🔘🔘 | ⭐⭐⭐ |⭐⭐⭐`,frontmatter:{layout:"center",srcSequence:"./pages/ch1.md"},index:10,start:136,end:147,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
layout: center
---

-| zod | io-ts | schema 
-|-|-|-
parsing | ⭐⭐⭐ | ⭐⭐⭐ |⭐⭐⭐
filter | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
transform | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
composition | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
fp-ts compatibility | ⭐🔘🔘 | ⭐⭐⭐ |⭐⭐⭐ `,content:`-| zod | io-ts | schema 
-|-|-|-
parsing | ⭐⭐⭐ | ⭐⭐⭐ |⭐⭐⭐
filter | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
transform | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
composition | ⭐⭐⭐ | ⭐🔘🔘 |⭐⭐⭐
fp-ts compatibility | ⭐🔘🔘 | ⭐⭐⭐ |⭐⭐⭐`,frontmatter:{layout:"center"},index:8,start:136,end:147},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:D$,meta:{transition:"fade-out",layout:"center",srcSequence:"./pages/ch1.md",slide:{raw:`---
transition: fade-out
layout: center
---

# 🏆 Effect-TS/schema  🏆`,title:"🏆 Effect-TS/schema  🏆",level:1,content:"# 🏆 Effect-TS/schema  🏆",frontmatter:{transition:"fade-out",layout:"center",srcSequence:"./pages/ch1.md"},index:11,start:147,end:153,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",raw:`---
transition: fade-out
layout: center
---

# 🏆 Effect-TS/schema  🏆`,title:"🏆 Effect-TS/schema  🏆",level:1,content:"# 🏆 Effect-TS/schema  🏆",frontmatter:{transition:"fade-out",layout:"center"},index:9,start:147,end:153},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch1.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:q$,meta:{layout:"intro-image-right",image:"montain.jpg",title:"Parsing",srcSequence:"./pages/ch2.md",slide:{raw:null,title:"Parsing",level:1,content:`# Parsing

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Parsing",srcSequence:"./pages/ch2.md"},index:12,start:0,end:9,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: intro-image-right
image: montain.jpg
---

# Parsing

## in Effect-TS / schema
`,title:"Parsing",level:1,content:`# Parsing

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Parsing"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/ch2.md
---
`,content:"",frontmatter:{},index:3,start:45,end:49},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:U$,meta:{layout:"statement",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: statement
---

#  What is parsing ?
`,title:"What is parsing ?",level:1,content:"#  What is parsing ?",frontmatter:{layout:"statement",srcSequence:"./pages/ch2.md"},index:13,start:9,end:15,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: statement
---

#  What is parsing ?
`,title:"What is parsing ?",level:1,content:"#  What is parsing ?",frontmatter:{layout:"statement"},index:1,start:9,end:15},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Z$,meta:{layout:"center",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-15 pre{
   font-size: 32px !important;
   line-height: 36px !important;
}
</style>

<img src="/ch2/parsing.svg" style='height:500px' alt='parsing'/>

`,content:`<style>
.slidev-page-15 pre{
   font-size: 32px !important;
   line-height: 36px !important;
}
</style>

<img src="/ch2/parsing.svg" style='height:500px' alt='parsing'/>`,frontmatter:{layout:"center",srcSequence:"./pages/ch2.md"},index:14,start:15,end:29,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: center
---

<style>
.slidev-page-15 pre{
   font-size: 32px !important;
   line-height: 36px !important;
}
</style>

<img src="/ch2/parsing.svg" style='height:500px' alt='parsing'/>

`,content:`<style>
.slidev-page-15 pre{
   font-size: 32px !important;
   line-height: 36px !important;
}
</style>

<img src="/ch2/parsing.svg" style='height:500px' alt='parsing'/>`,frontmatter:{layout:"center"},index:2,start:15,end:29},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:X$,meta:{layout:"statement",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: statement
---

#  How to implement parse  ?

`,title:"How to implement parse  ?",level:1,content:"#  How to implement parse  ?",frontmatter:{layout:"statement",srcSequence:"./pages/ch2.md"},index:15,start:29,end:36,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: statement
---

#  How to implement parse  ?

`,title:"How to implement parse  ?",level:1,content:"#  How to implement parse  ?",frontmatter:{layout:"statement"},index:3,start:29,end:36},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:lT,meta:{layout:"center",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-17 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Getting started

<br/>

### install

\`\`\`
npm i @effect/schema
\`\`\`
<br/>

### import

\`\`\`ts
import * as S from '@effect/schema/Schema'
\`\`\`

`,title:"Getting started",level:2,content:`<style>
.slidev-page-17 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Getting started

<br/>

### install

\`\`\`
npm i @effect/schema
\`\`\`
<br/>

### import

\`\`\`ts
import * as S from '@effect/schema/Schema'
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch2.md"},index:16,start:36,end:65,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: center
---

<style>
.slidev-page-17 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Getting started

<br/>

### install

\`\`\`
npm i @effect/schema
\`\`\`
<br/>

### import

\`\`\`ts
import * as S from '@effect/schema/Schema'
\`\`\`

`,title:"Getting started",level:2,content:`<style>
.slidev-page-17 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Getting started

<br/>

### install

\`\`\`
npm i @effect/schema
\`\`\`
<br/>

### import

\`\`\`ts
import * as S from '@effect/schema/Schema'
\`\`\``,frontmatter:{layout:"center"},index:4,start:36,end:65},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:dT,meta:{layout:"center",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-18 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Define abstract syntax tree (AST)

### product type

\`\`\`ts
import * as S from '@effect/schema/Schema'

const car = S.struct({
    make: S.string,
    model: S.string
})
\`\`\`

<!-- 
我們的編譯器或語法分析器 (例如 ts server) 能幫我們推演型別
其實是因為背後有建立 AST
我們要做的事情其實跟編譯器做的很像
所以我們也要建一個型別檢查專用的 AST 

這邊可以很方便地從 domain modeling 轉換過來
-->

`,title:"Define abstract syntax tree (AST)",level:2,content:`<style>
.slidev-page-18 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Define abstract syntax tree (AST)

### product type

\`\`\`ts
import * as S from '@effect/schema/Schema'

const car = S.struct({
    make: S.string,
    model: S.string
})
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch2.md"},note:`我們的編譯器或語法分析器 (例如 ts server) 能幫我們推演型別
其實是因為背後有建立 AST
我們要做的事情其實跟編譯器做的很像
所以我們也要建一個型別檢查專用的 AST 

這邊可以很方便地從 domain modeling 轉換過來`,index:17,start:65,end:99,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: center
---

<style>
.slidev-page-18 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Define abstract syntax tree (AST)

### product type

\`\`\`ts
import * as S from '@effect/schema/Schema'

const car = S.struct({
    make: S.string,
    model: S.string
})
\`\`\`

<!-- 
我們的編譯器或語法分析器 (例如 ts server) 能幫我們推演型別
其實是因為背後有建立 AST
我們要做的事情其實跟編譯器做的很像
所以我們也要建一個型別檢查專用的 AST 

這邊可以很方便地從 domain modeling 轉換過來
-->

`,title:"Define abstract syntax tree (AST)",level:2,content:`<style>
.slidev-page-18 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Define abstract syntax tree (AST)

### product type

\`\`\`ts
import * as S from '@effect/schema/Schema'

const car = S.struct({
    make: S.string,
    model: S.string
})
\`\`\``,frontmatter:{layout:"center"},note:`我們的編譯器或語法分析器 (例如 ts server) 能幫我們推演型別
其實是因為背後有建立 AST
我們要做的事情其實跟編譯器做的很像
所以我們也要建一個型別檢查專用的 AST 

這邊可以很方便地從 domain modeling 轉換過來`,index:5,start:65,end:99},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:`<p>我們的編譯器或語法分析器 (例如 ts server) 能幫我們推演型別
其實是因為背後有建立 AST
我們要做的事情其實跟編譯器做的很像
所以我們也要建一個型別檢查專用的 AST</p>
<p>這邊可以很方便地從 domain modeling 轉換過來</p>
`,id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:vT,meta:{layout:"center",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-19 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Call parse function of schema

### product type

\`\`\`ts
const carSchema = S.struct({
    make: S.string,
    model: S.string
})

const parseCar = S.parse(carSchema)

const myCar = parseCar(data)
// type of myCar - {make:string, model:string}
\`\`\`


`,title:"Call parse function of schema",level:2,content:`<style>
.slidev-page-19 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Call parse function of schema

### product type

\`\`\`ts
const carSchema = S.struct({
    make: S.string,
    model: S.string
})

const parseCar = S.parse(carSchema)

const myCar = parseCar(data)
// type of myCar - {make:string, model:string}
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch2.md"},index:18,start:99,end:128,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: center
---

<style>
.slidev-page-19 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Call parse function of schema

### product type

\`\`\`ts
const carSchema = S.struct({
    make: S.string,
    model: S.string
})

const parseCar = S.parse(carSchema)

const myCar = parseCar(data)
// type of myCar - {make:string, model:string}
\`\`\`


`,title:"Call parse function of schema",level:2,content:`<style>
.slidev-page-19 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

## Call parse function of schema

### product type

\`\`\`ts
const carSchema = S.struct({
    make: S.string,
    model: S.string
})

const parseCar = S.parse(carSchema)

const myCar = parseCar(data)
// type of myCar - {make:string, model:string}
\`\`\``,frontmatter:{layout:"center"},index:6,start:99,end:128},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:ET,meta:{layout:"center",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: center
---


<style>
.slidev-page-20 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

##  Handle parsing error

### Non-FP  

\`\`\`ts

try {
  const myCar = S.parse(carSchema)(data)
} catch (e) {
 //handle error here
}
\`\`\`

### FP  

\`\`\`ts
const myCar = S.parseEither(carSchema)(data)
// type of myCar - Either<ParseError, Car>
\`\`\`

`,title:"Handle parsing error",level:2,content:`<style>
.slidev-page-20 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

##  Handle parsing error

### Non-FP  

\`\`\`ts

try {
  const myCar = S.parse(carSchema)(data)
} catch (e) {
 //handle error here
}
\`\`\`

### FP  

\`\`\`ts
const myCar = S.parseEither(carSchema)(data)
// type of myCar - Either<ParseError, Car>
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch2.md"},index:19,start:128,end:161,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: center
---


<style>
.slidev-page-20 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

##  Handle parsing error

### Non-FP  

\`\`\`ts

try {
  const myCar = S.parse(carSchema)(data)
} catch (e) {
 //handle error here
}
\`\`\`

### FP  

\`\`\`ts
const myCar = S.parseEither(carSchema)(data)
// type of myCar - Either<ParseError, Car>
\`\`\`

`,title:"Handle parsing error",level:2,content:`<style>
.slidev-page-20 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

##  Handle parsing error

### Non-FP  

\`\`\`ts

try {
  const myCar = S.parse(carSchema)(data)
} catch (e) {
 //handle error here
}
\`\`\`

### FP  

\`\`\`ts
const myCar = S.parseEither(carSchema)(data)
// type of myCar - Either<ParseError, Car>
\`\`\``,frontmatter:{layout:"center"},index:7,start:128,end:161},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:RT,meta:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch2.md",slide:{raw:`---
layout: center
transition: fade-out
---

<style>
.slidev-page-21 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

#  Error message

### schema
\`\`\`
Error: error(s) found
└─ ["make"]
   └─ Expected string, actual 2008
\`\`\`
<div className='color-neutral-600'>
* The error message of ParseError can be obtained through the formatErrors function
</div>
<br/><br/>

### io-ts
\`\`\`
Invalid value 2008 supplied to : 
{ make: string, model: string }/make: string
\`\`\`

`,title:"Error message",level:1,content:`<style>
.slidev-page-21 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

#  Error message

### schema
\`\`\`
Error: error(s) found
└─ ["make"]
   └─ Expected string, actual 2008
\`\`\`
<div className='color-neutral-600'>
* The error message of ParseError can be obtained through the formatErrors function
</div>
<br/><br/>

### io-ts
\`\`\`
Invalid value 2008 supplied to : 
{ make: string, model: string }/make: string
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch2.md"},index:20,start:161,end:193,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",raw:`---
layout: center
transition: fade-out
---

<style>
.slidev-page-21 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

#  Error message

### schema
\`\`\`
Error: error(s) found
└─ ["make"]
   └─ Expected string, actual 2008
\`\`\`
<div className='color-neutral-600'>
* The error message of ParseError can be obtained through the formatErrors function
</div>
<br/><br/>

### io-ts
\`\`\`
Invalid value 2008 supplied to : 
{ make: string, model: string }/make: string
\`\`\`

`,title:"Error message",level:1,content:`<style>
.slidev-page-21 pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

#  Error message

### schema
\`\`\`
Error: error(s) found
└─ ["make"]
   └─ Expected string, actual 2008
\`\`\`
<div className='color-neutral-600'>
* The error message of ParseError can be obtained through the formatErrors function
</div>
<br/><br/>

### io-ts
\`\`\`
Invalid value 2008 supplied to : 
{ make: string, model: string }/make: string
\`\`\``,frontmatter:{layout:"center",transition:"fade-out"},index:8,start:161,end:193},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch2.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:DT,meta:{layout:"intro-image-right",image:"montain.jpg",title:"Filter",srcSequence:"./pages/ch3.md",slide:{raw:null,title:"Filter",level:1,content:`# Filter

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Filter",srcSequence:"./pages/ch3.md"},index:21,start:0,end:9,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",raw:`---
layout: intro-image-right
image: montain.jpg
---

# Filter

## in Effect-TS / schema
`,title:"Filter",level:1,content:`# Filter

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Filter"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/ch3.md
---
`,content:"",frontmatter:{},index:4,start:49,end:53},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:BT,meta:{layout:"statement",srcSequence:"./pages/ch3.md",slide:{raw:`---
layout: statement
---

#  What is filter ?
`,title:"What is filter ?",level:1,content:"#  What is filter ?",frontmatter:{layout:"statement",srcSequence:"./pages/ch3.md"},index:22,start:9,end:15,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",raw:`---
layout: statement
---

#  What is filter ?
`,title:"What is filter ?",level:1,content:"#  What is filter ?",frontmatter:{layout:"statement"},index:1,start:9,end:15},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:UT,meta:{layout:"statement",srcSequence:"./pages/ch3.md",slide:{raw:`---
layout: statement
---

<img src="/ch3/filter.svg" style='height:500px' alt='parsing'/>
`,content:`<img src="/ch3/filter.svg" style='height:500px' alt='parsing'/>`,frontmatter:{layout:"statement",srcSequence:"./pages/ch3.md"},index:23,start:15,end:21,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",raw:`---
layout: statement
---

<img src="/ch3/filter.svg" style='height:500px' alt='parsing'/>
`,content:`<img src="/ch3/filter.svg" style='height:500px' alt='parsing'/>`,frontmatter:{layout:"statement"},index:2,start:15,end:21},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:JT,meta:{layout:"center",srcSequence:"./pages/ch3.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-25  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Let's review the car schema

\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string
})
\`\`\`

## What if you want to check the string length ?

<!-- 
我們在做 domain modeling 的時候，常常會有字數上下限的限制對吧
看起來剛才 parsing 的樣子，並無法滿足檢查字數的需求 
-->

`,title:"Let's review the car schema",level:1,content:`<style>
.slidev-page-25  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Let's review the car schema

\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string
})
\`\`\`

## What if you want to check the string length ?`,frontmatter:{layout:"center",srcSequence:"./pages/ch3.md"},note:`我們在做 domain modeling 的時候，常常會有字數上下限的限制對吧
看起來剛才 parsing 的樣子，並無法滿足檢查字數的需求`,index:24,start:21,end:49,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",raw:`---
layout: center
---

<style>
.slidev-page-25  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Let's review the car schema

\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string
})
\`\`\`

## What if you want to check the string length ?

<!-- 
我們在做 domain modeling 的時候，常常會有字數上下限的限制對吧
看起來剛才 parsing 的樣子，並無法滿足檢查字數的需求 
-->

`,title:"Let's review the car schema",level:1,content:`<style>
.slidev-page-25  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Let's review the car schema

\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string
})
\`\`\`

## What if you want to check the string length ?`,frontmatter:{layout:"center"},note:`我們在做 domain modeling 的時候，常常會有字數上下限的限制對吧
看起來剛才 parsing 的樣子，並無法滿足檢查字數的需求`,index:3,start:21,end:49},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",noteHTML:`<p>我們在做 domain modeling 的時候，常常會有字數上下限的限制對吧
看起來剛才 parsing 的樣子，並無法滿足檢查字數的需求</p>
`,id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:tC,meta:{layout:"center",srcSequence:"./pages/ch3.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-26  pre{
  font-size: 28px !important;
  line-height: 32px !important;
}
</style>


## With filter !
\`\`\`ts
const model = pipe(
    S.string,
    S.nonEmpty(), //filter len > 0
    S.maxLength(200) //filter <= 200
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\`

<!-- 
有了 filter 之後，就可以輕鬆做好檢查了
-->

`,title:"With filter !",level:2,content:`<style>
.slidev-page-26  pre{
  font-size: 28px !important;
  line-height: 32px !important;
}
</style>


## With filter !
\`\`\`ts
const model = pipe(
    S.string,
    S.nonEmpty(), //filter len > 0
    S.maxLength(200) //filter <= 200
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch3.md"},note:"有了 filter 之後，就可以輕鬆做好檢查了",index:25,start:49,end:80,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",raw:`---
layout: center
---

<style>
.slidev-page-26  pre{
  font-size: 28px !important;
  line-height: 32px !important;
}
</style>


## With filter !
\`\`\`ts
const model = pipe(
    S.string,
    S.nonEmpty(), //filter len > 0
    S.maxLength(200) //filter <= 200
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\`

<!-- 
有了 filter 之後，就可以輕鬆做好檢查了
-->

`,title:"With filter !",level:2,content:`<style>
.slidev-page-26  pre{
  font-size: 28px !important;
  line-height: 32px !important;
}
</style>


## With filter !
\`\`\`ts
const model = pipe(
    S.string,
    S.nonEmpty(), //filter len > 0
    S.maxLength(200) //filter <= 200
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\``,frontmatter:{layout:"center"},note:"有了 filter 之後，就可以輕鬆做好檢查了",index:4,start:49,end:80},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",noteHTML:`<p>有了 filter 之後，就可以輕鬆做好檢查了</p>
`,id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:iC,meta:{layout:"center",srcSequence:"./pages/ch3.md",slide:{raw:`---
layout: center
---
## There are more filters in schema [README](https://github.com/Effect-TS/schema#readme)
<img src="/ch3/filters.png" style='height:500px' alt='unnecessary'/>
`,title:"There are more filters in schema [README](https://github.com/Effect-TS/schema#readme)",level:2,content:`## There are more filters in schema [README](https://github.com/Effect-TS/schema#readme)
<img src="/ch3/filters.png" style='height:500px' alt='unnecessary'/>`,frontmatter:{layout:"center",srcSequence:"./pages/ch3.md"},index:26,start:80,end:86,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",raw:`---
layout: center
---
## There are more filters in schema [README](https://github.com/Effect-TS/schema#readme)
<img src="/ch3/filters.png" style='height:500px' alt='unnecessary'/>
`,title:"There are more filters in schema [README](https://github.com/Effect-TS/schema#readme)",level:2,content:`## There are more filters in schema [README](https://github.com/Effect-TS/schema#readme)
<img src="/ch3/filters.png" style='height:500px' alt='unnecessary'/>`,frontmatter:{layout:"center"},index:5,start:80,end:86},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:uC,meta:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch3.md",slide:{raw:`---
layout: center
transition: fade-out
---

<style>
.slidev-page-28  pre{
  font-size: 24px !important;
  line-height: 28px !important;
}
</style>

## Customized filter

\`\`\`ts
// predicate function
const startWithA = (s: string) => s[0] === 'A'

const model = pipe(
    S.string,
    S.nonEmpty(), 
    S.maxLength(200), 
    S.filter(startWithA)  
    // filter with predicate function
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\`

<!-- 
這邊的 predicate function 就可以隨心所欲做任何檢查
甚至可以使用 regex 等方式
-->`,title:"Customized filter",level:2,content:`<style>
.slidev-page-28  pre{
  font-size: 24px !important;
  line-height: 28px !important;
}
</style>

## Customized filter

\`\`\`ts
// predicate function
const startWithA = (s: string) => s[0] === 'A'

const model = pipe(
    S.string,
    S.nonEmpty(), 
    S.maxLength(200), 
    S.filter(startWithA)  
    // filter with predicate function
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch3.md"},note:`這邊的 predicate function 就可以隨心所欲做任何檢查
甚至可以使用 regex 等方式`,index:27,start:86,end:122,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",raw:`---
layout: center
transition: fade-out
---

<style>
.slidev-page-28  pre{
  font-size: 24px !important;
  line-height: 28px !important;
}
</style>

## Customized filter

\`\`\`ts
// predicate function
const startWithA = (s: string) => s[0] === 'A'

const model = pipe(
    S.string,
    S.nonEmpty(), 
    S.maxLength(200), 
    S.filter(startWithA)  
    // filter with predicate function
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\`

<!-- 
這邊的 predicate function 就可以隨心所欲做任何檢查
甚至可以使用 regex 等方式
-->`,title:"Customized filter",level:2,content:`<style>
.slidev-page-28  pre{
  font-size: 24px !important;
  line-height: 28px !important;
}
</style>

## Customized filter

\`\`\`ts
// predicate function
const startWithA = (s: string) => s[0] === 'A'

const model = pipe(
    S.string,
    S.nonEmpty(), 
    S.maxLength(200), 
    S.filter(startWithA)  
    // filter with predicate function
  )

const car = S.struct({
  make: S.string, 
  model: model
})
\`\`\``,frontmatter:{layout:"center",transition:"fade-out"},note:`這邊的 predicate function 就可以隨心所欲做任何檢查
甚至可以使用 regex 等方式`,index:6,start:86,end:122},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch3.md",noteHTML:`<p>這邊的 predicate function 就可以隨心所欲做任何檢查
甚至可以使用 regex 等方式</p>
`,id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:hC,meta:{layout:"intro-image-right",image:"montain.jpg",title:"Transformer",srcSequence:"./pages/ch4.md",slide:{raw:null,title:"Transformer",level:1,content:`# Transformer

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Transformer",srcSequence:"./pages/ch4.md"},index:28,start:0,end:9,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: intro-image-right
image: montain.jpg
---

# Transformer

## in Effect-TS / schema
`,title:"Transformer",level:1,content:`# Transformer

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Transformer"},index:0,start:0,end:9},inline:{raw:`---
src: ./pages/ch4.md
---
`,content:"",frontmatter:{},index:5,start:53,end:57},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:_C,meta:{layout:"statement",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: statement
---

#  What is transformer ?
`,title:"What is transformer ?",level:1,content:"#  What is transformer ?",frontmatter:{layout:"statement",srcSequence:"./pages/ch4.md"},index:29,start:9,end:15,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: statement
---

#  What is transformer ?
`,title:"What is transformer ?",level:1,content:"#  What is transformer ?",frontmatter:{layout:"statement"},index:1,start:9,end:15},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:wC,meta:{layout:"center",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: center
---

<img src="/ch4/transformer.png" style='height:500px' alt='transformer'/>
`,content:`<img src="/ch4/transformer.png" style='height:500px' alt='transformer'/>`,frontmatter:{layout:"center",srcSequence:"./pages/ch4.md"},index:30,start:15,end:21,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: center
---

<img src="/ch4/transformer.png" style='height:500px' alt='transformer'/>
`,content:`<img src="/ch4/transformer.png" style='height:500px' alt='transformer'/>`,frontmatter:{layout:"center"},index:2,start:15,end:21},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:EC,meta:{layout:"center",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: center
---

<img src="/ch4/trans.svg" style='height:500px' alt='trans'/>


`,content:`<img src="/ch4/trans.svg" style='height:500px' alt='trans'/>`,frontmatter:{layout:"center",srcSequence:"./pages/ch4.md"},index:31,start:21,end:29,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: center
---

<img src="/ch4/trans.svg" style='height:500px' alt='trans'/>


`,content:`<img src="/ch4/trans.svg" style='height:500px' alt='trans'/>`,frontmatter:{layout:"center"},index:3,start:21,end:29},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:OC,meta:{layout:"center",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-33  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Date transformer
\`\`\`ts
const date = pipe(
  '2023-06-05T12:39:23.000Z',
  S.parseEither(S.Date)
)

//Either<ParseError, Date>

\`\`\`
`,title:"Date transformer",level:1,content:`<style>
.slidev-page-33  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Date transformer
\`\`\`ts
const date = pipe(
  '2023-06-05T12:39:23.000Z',
  S.parseEither(S.Date)
)

//Either<ParseError, Date>

\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch4.md"},index:32,start:29,end:51,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: center
---

<style>
.slidev-page-33  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Date transformer
\`\`\`ts
const date = pipe(
  '2023-06-05T12:39:23.000Z',
  S.parseEither(S.Date)
)

//Either<ParseError, Date>

\`\`\`
`,title:"Date transformer",level:1,content:`<style>
.slidev-page-33  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Date transformer
\`\`\`ts
const date = pipe(
  '2023-06-05T12:39:23.000Z',
  S.parseEither(S.Date)
)

//Either<ParseError, Date>

\`\`\``,frontmatter:{layout:"center"},index:4,start:29,end:51},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:IC,meta:{layout:"statement",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: statement
---

# How to get type of

#  a transformer ?

`,title:"How to get type of",level:1,content:`# How to get type of

#  a transformer ?`,frontmatter:{layout:"statement",srcSequence:"./pages/ch4.md"},index:33,start:51,end:60,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: statement
---

# How to get type of

#  a transformer ?

`,title:"How to get type of",level:1,content:`# How to get type of

#  a transformer ?`,frontmatter:{layout:"statement"},index:5,start:51,end:60},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:FC,meta:{layout:"center",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-35  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type
\`\`\`ts

//string
type from = S.From<typeof S.Date> 

//Date
type to = S.To<typeof S.Date> 

\`\`\`

<!-- 
不知道大家有沒有發現，transformer 的型別出入的型別會是不一樣的
有時候我們在定義 function 或變數的時候，需要拿型別參考，怎麼辦呢?
 -->
`,title:"From type & To type",level:1,content:`<style>
.slidev-page-35  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type
\`\`\`ts

//string
type from = S.From<typeof S.Date> 

//Date
type to = S.To<typeof S.Date> 

\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch4.md"},note:`不知道大家有沒有發現，transformer 的型別出入的型別會是不一樣的
有時候我們在定義 function 或變數的時候，需要拿型別參考，怎麼辦呢?`,index:34,start:60,end:87,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: center
---

<style>
.slidev-page-35  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type
\`\`\`ts

//string
type from = S.From<typeof S.Date> 

//Date
type to = S.To<typeof S.Date> 

\`\`\`

<!-- 
不知道大家有沒有發現，transformer 的型別出入的型別會是不一樣的
有時候我們在定義 function 或變數的時候，需要拿型別參考，怎麼辦呢?
 -->
`,title:"From type & To type",level:1,content:`<style>
.slidev-page-35  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type
\`\`\`ts

//string
type from = S.From<typeof S.Date> 

//Date
type to = S.To<typeof S.Date> 

\`\`\``,frontmatter:{layout:"center"},note:`不知道大家有沒有發現，transformer 的型別出入的型別會是不一樣的
有時候我們在定義 function 或變數的時候，需要拿型別參考，怎麼辦呢?`,index:6,start:60,end:87},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:`<p>不知道大家有沒有發現，transformer 的型別出入的型別會是不一樣的
有時候我們在定義 function 或變數的時候，需要拿型別參考，怎麼辦呢?</p>
`,id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:VC,meta:{layout:"center",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: center
---

<style>
.slidev-page-36  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type of composed schema
\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string,
    date: S.Date
})

// {make:string, model:string, date:string}
const CarSource = S.From<typeof car>

// {make:string, model:string, date:Date}
const CarDest = S.To<typeof car>
\`\`\`

`,title:"From type & To type of composed schema",level:1,content:`<style>
.slidev-page-36  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type of composed schema
\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string,
    date: S.Date
})

// {make:string, model:string, date:string}
const CarSource = S.From<typeof car>

// {make:string, model:string, date:Date}
const CarDest = S.To<typeof car>
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch4.md"},index:35,start:87,end:114,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: center
---

<style>
.slidev-page-36  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type of composed schema
\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string,
    date: S.Date
})

// {make:string, model:string, date:string}
const CarSource = S.From<typeof car>

// {make:string, model:string, date:Date}
const CarDest = S.To<typeof car>
\`\`\`

`,title:"From type & To type of composed schema",level:1,content:`<style>
.slidev-page-36  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# From type & To type of composed schema
\`\`\`ts
const car = S.struct({
    make: S.string, 
    model: S.string,
    date: S.Date
})

// {make:string, model:string, date:string}
const CarSource = S.From<typeof car>

// {make:string, model:string, date:Date}
const CarDest = S.To<typeof car>
\`\`\``,frontmatter:{layout:"center"},index:7,start:87,end:114},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:zC,meta:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch4.md",slide:{raw:`---
layout: center
transition: fade-out
---

<style>
.slidev-page-37  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Customized transformer
\`\`\`ts
const UpperCase = S.transform(
  S.string, //from type
  S.string, //to type
  (s) = s.toUpperCase(),
  (s)=> s
)
\`\`\`
`,title:"Customized transformer",level:1,content:`<style>
.slidev-page-37  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Customized transformer
\`\`\`ts
const UpperCase = S.transform(
  S.string, //from type
  S.string, //to type
  (s) = s.toUpperCase(),
  (s)=> s
)
\`\`\``,frontmatter:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch4.md"},index:36,start:114,end:136,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",raw:`---
layout: center
transition: fade-out
---

<style>
.slidev-page-37  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Customized transformer
\`\`\`ts
const UpperCase = S.transform(
  S.string, //from type
  S.string, //to type
  (s) = s.toUpperCase(),
  (s)=> s
)
\`\`\`
`,title:"Customized transformer",level:1,content:`<style>
.slidev-page-37  pre{
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>

# Customized transformer
\`\`\`ts
const UpperCase = S.transform(
  S.string, //from type
  S.string, //to type
  (s) = s.toUpperCase(),
  (s)=> s
)
\`\`\``,frontmatter:{layout:"center",transition:"fade-out"},index:8,start:114,end:136},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch4.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:GC,meta:{layout:"intro-image-right",image:"montain.jpg",title:"Composition",srcSequence:"./pages/ch5.md",slide:{raw:null,title:"Composition",level:1,content:`<style>
#slideshow pre {
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>



# Composition

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Composition",srcSequence:"./pages/ch5.md"},index:37,start:0,end:18,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",raw:`---
layout: intro-image-right
image: montain.jpg
---

<style>
#slideshow pre {
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>



# Composition

## in Effect-TS / schema
`,title:"Composition",level:1,content:`<style>
#slideshow pre {
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>



# Composition

## in Effect-TS / schema`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Composition"},index:0,start:0,end:18},inline:{raw:`---
src: ./pages/ch5.md
---
`,content:"",frontmatter:{},index:6,start:57,end:61},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:XC,meta:{layout:"center",srcSequence:"./pages/ch5.md",slide:{raw:`---
layout: center
---

## How to change start with A to start with B

\`\`\`ts
const startWithA = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carA = S.struct({
    make: S.string, 
    model: startWithA,
    date: S.Date
})
\`\`\`
`,title:"How to change start with A to start with B",level:2,content:`## How to change start with A to start with B

\`\`\`ts
const startWithA = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carA = S.struct({
    make: S.string, 
    model: startWithA,
    date: S.Date
})
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch5.md"},index:38,start:18,end:37,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",raw:`---
layout: center
---

## How to change start with A to start with B

\`\`\`ts
const startWithA = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carA = S.struct({
    make: S.string, 
    model: startWithA,
    date: S.Date
})
\`\`\`
`,title:"How to change start with A to start with B",level:2,content:`## How to change start with A to start with B

\`\`\`ts
const startWithA = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carA = S.struct({
    make: S.string, 
    model: startWithA,
    date: S.Date
})
\`\`\``,frontmatter:{layout:"center"},index:1,start:18,end:37},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:rO,meta:{layout:"center",srcSequence:"./pages/ch5.md",slide:{raw:`---
layout: center
---



# Omit and Extend


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carB = pipe(
  carA,
  S.omit('model'),
  S.extend(startWithB)
)
\`\`\`

## How to get models of cars ?

`,title:"Omit and Extend",level:1,content:`# Omit and Extend


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carB = pipe(
  carA,
  S.omit('model'),
  S.extend(startWithB)
)
\`\`\`

## How to get models of cars ?`,frontmatter:{layout:"center",srcSequence:"./pages/ch5.md"},index:39,start:37,end:62,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",raw:`---
layout: center
---



# Omit and Extend


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carB = pipe(
  carA,
  S.omit('model'),
  S.extend(startWithB)
)
\`\`\`

## How to get models of cars ?

`,title:"Omit and Extend",level:1,content:`# Omit and Extend


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const carB = pipe(
  carA,
  S.omit('model'),
  S.extend(startWithB)
)
\`\`\`

## How to get models of cars ?`,frontmatter:{layout:"center"},index:2,start:37,end:62},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:lO,meta:{layout:"center",srcSequence:"./pages/ch5.md",slide:{raw:`---
layout: center
---

# Pick


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const models = pipe(
  S.union(
    pipe(carA, S.pick('model')),
    pipe(carB, S.pick('model')),
  )
)
\`\`\`
`,title:"Pick",level:1,content:`# Pick


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const models = pipe(
  S.union(
    pipe(carA, S.pick('model')),
    pipe(carB, S.pick('model')),
  )
)
\`\`\``,frontmatter:{layout:"center",srcSequence:"./pages/ch5.md"},index:40,start:62,end:83,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",raw:`---
layout: center
---

# Pick


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const models = pipe(
  S.union(
    pipe(carA, S.pick('model')),
    pipe(carB, S.pick('model')),
  )
)
\`\`\`
`,title:"Pick",level:1,content:`# Pick


\`\`\`ts
const startWithB = pipe(
    S.string,
    S.filter((s: string) => s[0] === 'A'), 
  )

const models = pipe(
  S.union(
    pipe(carA, S.pick('model')),
    pipe(carB, S.pick('model')),
  )
)
\`\`\``,frontmatter:{layout:"center"},index:3,start:62,end:83},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:pO,meta:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch5.md",slide:{raw:`---
layout: center
transition: fade-out
---

## There are more utilities in [README](https://github.com/Effect-TS/schema#readme) !

- optional
- optional with default value
- partial
- required
- recursive types
- ....

`,title:"There are more utilities in [README](https://github.com/Effect-TS/schema#readme) !",level:2,content:`## There are more utilities in [README](https://github.com/Effect-TS/schema#readme) !

- optional
- optional with default value
- partial
- required
- recursive types
- ....`,frontmatter:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch5.md"},index:41,start:83,end:98,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",raw:`---
layout: center
transition: fade-out
---

## There are more utilities in [README](https://github.com/Effect-TS/schema#readme) !

- optional
- optional with default value
- partial
- required
- recursive types
- ....

`,title:"There are more utilities in [README](https://github.com/Effect-TS/schema#readme) !",level:2,content:`## There are more utilities in [README](https://github.com/Effect-TS/schema#readme) !

- optional
- optional with default value
- partial
- required
- recursive types
- ....`,frontmatter:{layout:"center",transition:"fade-out"},index:4,start:83,end:98},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch5.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:mO,meta:{layout:"intro-image-right",image:"montain.jpg",title:"Practice",srcSequence:"./pages/ch6.md",slide:{raw:null,title:"Practice",level:1,content:`<style>
#slideshow pre {
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>


# Practice`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Practice",srcSequence:"./pages/ch6.md"},index:42,start:0,end:15,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch6.md",raw:`---
layout: intro-image-right
image: montain.jpg
---

<style>
#slideshow pre {
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>


# Practice
`,title:"Practice",level:1,content:`<style>
#slideshow pre {
   font-size: 28px !important;
   line-height: 32px !important;
}
</style>


# Practice`,frontmatter:{layout:"intro-image-right",image:"montain.jpg",title:"Practice"},index:0,start:0,end:15},inline:{raw:`---
src: ./pages/ch6.md
---
`,content:"",frontmatter:{},index:7,start:61,end:65},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch6.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:vO,meta:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch6.md",slide:{raw:`---
layout: center
transition: fade-out
---
# High-level overview
`,title:"High-level overview",level:1,content:"# High-level overview",frontmatter:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch6.md"},index:43,start:15,end:21,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch6.md",raw:`---
layout: center
transition: fade-out
---
# High-level overview
`,title:"High-level overview",level:1,content:"# High-level overview",frontmatter:{layout:"center",transition:"fade-out"},index:1,start:15,end:21},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch6.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:kO,meta:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch6.md",slide:{raw:`---
layout: center
transition: fade-out
---

# Code review

- Naming
- Folder structure
- Validation function

`,title:"Code review",level:1,content:`# Code review

- Naming
- Folder structure
- Validation function`,frontmatter:{layout:"center",transition:"fade-out",srcSequence:"./pages/ch6.md"},index:44,start:21,end:33,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch6.md",raw:`---
layout: center
transition: fade-out
---

# Code review

- Naming
- Folder structure
- Validation function

`,title:"Code review",level:1,content:`# Code review

- Naming
- Folder structure
- Validation function`,frontmatter:{layout:"center",transition:"fade-out"},index:2,start:21,end:33},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/ch6.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:EO,meta:{layout:"end",title:"Thank you !",srcSequence:"./pages/end.md",slide:{raw:null,title:"Thank you !",level:1,content:"# Thank you !",frontmatter:{layout:"end",title:"Thank you !",srcSequence:"./pages/end.md"},index:45,start:0,end:5,source:{filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/end.md",raw:`---
layout: end
---

# Thank you !`,title:"Thank you !",level:1,content:"# Thank you !",frontmatter:{layout:"end",title:"Thank you !"},index:0,start:0,end:5},inline:{raw:`---
src: ./pages/end.md
---
`,content:"",frontmatter:{},index:8,start:65,end:69},filepath:"/home/runner/work/web-basic-2/web-basic-2/pages/end.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",component:oh,meta:{layout:"end"}}],Ke=$O,cr=[{name:"play",path:"/",component:D2,children:[...Ke]},{name:"print",path:"/print",component:pE},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let e=function(t){if(!lr.remote||lr.remote===t.query.password)return!0;if(lr.remote&&t.query.password===void 0){const n=prompt("Enter password");if(lr.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};cr.push({path:"/presenter/print",component:()=>Ln(()=>import("./PresenterPrint-27ab35b6.js"),["assets/PresenterPrint-27ab35b6.js","assets/NoteDisplay-e79daa6e.js"])}),cr.push({name:"notes",path:"/notes",component:()=>Ln(()=>import("./NotesView-14fc4cf0.js"),["assets/NotesView-14fc4cf0.js","assets/NoteDisplay-e79daa6e.js"]),beforeEnter:e}),cr.push({name:"presenter",path:"/presenter/:no",component:()=>Ln(()=>import("./Presenter-5ddb7823.js"),["assets/Presenter-5ddb7823.js","assets/NoteDisplay-e79daa6e.js","assets/DrawingControls-a35af858.js","assets/Presenter-aa6741a8.css"]),beforeEnter:e}),cr.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const vt=Tb({history:$1("/web-basic-2"),routes:cr});function TO(e,t,{mode:n="replace"}={}){return A({get(){const s=vt.currentRoute.value.query[e];return s==null?t??null:Array.isArray(s)?s.filter(Boolean):s},set(s){et(()=>{vt[M(n)]({query:{...vt.currentRoute.value.query,[e]:s}})})}})}const ah=q(0);et(()=>{vt.afterEach(async()=>{await et(),ah.value+=1})});const lh=q(0),Ft=A(()=>vt.currentRoute.value),js=A(()=>Ft.value.query.print!==void 0),CO=A(()=>Ft.value.query.print==="clicks"),pn=A(()=>Ft.value.query.embedded!==void 0),gt=A(()=>Ft.value.path.startsWith("/presenter")),OO=A(()=>Ft.value.path.startsWith("/notes")),_r=A(()=>js.value&&!CO.value),Va=A(()=>Ft.value.query.password),PO=A(()=>!gt.value&&(!$e.remote||Va.value===$e.remote)),Wu=TO("clicks","0"),AO=A(()=>Ke.length-1),MO=A(()=>Ft.value.path),ze=A(()=>parseInt(MO.value.split(/\//g).slice(-1)[0])||1);A(()=>_i(ze.value));const ut=A(()=>Ke.find(e=>e.path===`${ze.value}`));A(()=>{var e,t,n;return(n=(t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});A(()=>{var e,t;return((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.layout)||(ze.value===1?"cover":"default")});const qi=A(()=>Ke.find(e=>e.path===`${Math.min(Ke.length,ze.value+1)}`)),IO=A(()=>Ke.find(e=>e.path===`${Math.max(1,ze.value-1)}`)),LO=A(()=>{var e,t;return ah.value,((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Lt=A({get(){if(_r.value)return 99999;let e=+(Wu.value||0);return isNaN(e)&&(e=0),e},set(e){Wu.value=e.toString()}}),Uo=A(()=>{var e,t;return+(((t=(e=ut.value)==null?void 0:e.meta)==null?void 0:t.clicks)??LO.value.length)}),RO=A(()=>ze.value<Ke.length-1||Lt.value<Uo.value),NO=A(()=>ze.value>1||Lt.value>0),FO=A(()=>Ke.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Fl(e,t),e),[])),jO=A(()=>jl(FO.value,ut.value));A(()=>Dl(jO.value));const DO=A(()=>WO(lh.value,ut.value,IO.value));ge(ut,(e,t)=>{lh.value=Number(e==null?void 0:e.path)-Number(t==null?void 0:t.path)});function Nn(){Uo.value<=Lt.value?Lr():Lt.value+=1}async function Fn(){Lt.value<=0?await Rr():Lt.value-=1}function _i(e){return gt.value?`/presenter/${e}`:`/${e}`}function Lr(){const e=Math.min(Ke.length,ze.value+1);return Ds(e)}async function Rr(e=!0){const t=Math.max(1,ze.value-1);await Ds(t),e&&Uo.value&&vt.replace({query:{...Ft.value.query,clicks:Uo.value}})}function Ds(e,t){return vt.push({path:_i(e),query:{...Ft.value.query,clicks:t}})}function HO(e){const t=q(0),{direction:n,distanceX:s,distanceY:r}=G0(e,{onSwipeStart(o){o.pointerType==="touch"&&(Ar.value||(t.value=ka()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||Ar.value)return;const i=Math.abs(s.value),l=Math.abs(r.value);i/window.innerWidth>.3||i>100?n.value==="left"?Nn():Fn():(l/window.innerHeight>.4||l>200)&&(n.value==="down"?Rr():Lr())}})}async function Ba(){const{saveAs:e}=await Ln(()=>import("./FileSaver.min-23a5d44b.js").then(t=>t.F),[]);e(typeof $e.download=="string"?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/web-basic-2slidev-exported.pdf",`${$e.title}.pdf`)}async function VO(e){var t,n;if(e==null){const s=(n=(t=ut.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Fl(e,t,n=1){var r,o,i,l,c;const s=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;s&&s>n&&e.length>0?Fl(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:!!((i=t.meta)!=null&&i.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function jl(e,t,n=!1,s){return e.map(r=>{const o={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return o.children.length>0&&(o.children=jl(o.children,t,o.active||o.hasActiveParent,o)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function Dl(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Dl(n.children,t+1)}))}const BO={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function qO(e,t=!1){if(!e||(typeof e=="string"&&(e={name:e}),!e.name))return;let n=e.name.includes("|")?e.name:BO[e.name]||e.name;if(n.includes("|")){const[s,r]=n.split("|").map(o=>o.trim());n=t?r:s}if(n)return{...e,name:n}}function WO(e,t,n){var r,o;let s=e>0?(r=n==null?void 0:n.meta)==null?void 0:r.transition:(o=t==null?void 0:t.meta)==null?void 0:o.transition;return s||(s=$e.transition),qO(s,e<0)}function zO(){const e=$e.titleTemplate.replace("%s",$e.title||"Slidev");Jp({title:e,htmlAttrs:$e.htmlAttrs}),Oy(`${e} - shared`),Iy(`${e} - drawings`);const t=`${location.origin}_${xy()}`;function n(){OO.value||!gt.value&&!ky.includes(location.host.split(":")[0])||(gt.value?(Zs("page",+ze.value),Zs("clicks",Lt.value)):(Zs("viewerPage",+ze.value),Zs("viewerClicks",Lt.value)),Zs("lastUpdate",{id:t,type:gt.value?"presenter":"viewer",time:new Date().getTime()}))}vt.afterEach(n),ge(Lt,n),Py(s=>{var o;vt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((o=s.lastUpdate)==null?void 0:o.type)==="presenter"&&(+s.page!=+ze.value||+Lt.value!=+s.clicks)&&vt.replace({path:_i(s.page),query:{...vt.currentRoute.value.query,clicks:s.clicks||0}})})}const UO=Oe({__name:"App",setup(e){return H(Z),zO(),(t,n)=>{const s=Lo("RouterView"),r=Lo("StarportCarrier");return E(),te(Ce,null,[Q(s),Q(r)],64)}}}),KO=J(UO,[["__file","/home/runner/work/web-basic-2/web-basic-2/node_modules/@slidev/client/App.vue"]]);function Wi(e){return e!==null&&typeof e=="object"}function qa(e,t,n=".",s){if(!Wi(t))return qa(e,{},n,s);const r=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const i=e[o];i!=null&&(s&&s(r,o,i,n)||(Array.isArray(i)&&Array.isArray(r[o])?r[o]=[...i,...r[o]]:Wi(i)&&Wi(r[o])?r[o]=qa(i,r[o],(n?`${n}.`:"")+o.toString(),s):r[o]=i))}return r}function YO(e){return(...t)=>t.reduce((n,s)=>qa(n,s,"",e),{})}const GO=YO();var zu;const ch=typeof window<"u",ZO=Object.prototype.toString,JO=e=>typeof e=="number",QO=e=>typeof e=="string",Wa=e=>ZO.call(e)==="[object Object]",wo=()=>{};ch&&((zu=window==null?void 0:window.navigator)!=null&&zu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function uh(e){return typeof e=="function"?e():M(e)}function XO(e){return e}function fh(e){return Qo()?(ol(e),!0):!1}function e3(e,t=!0){yt()?bn(e):t?e():et(e)}function t3(e){yt()&&ui(e)}function Ko(e){var t;const n=uh(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ph=ch?window:void 0;function Ht(...e){let t,n,s,r;if(QO(e[0])||Array.isArray(e[0])?([n,s,r]=e,t=ph):[t,n,s,r]=e,!t)return wo;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const o=[],i=()=>{o.forEach(f=>f()),o.length=0},l=(f,p,d,m)=>(f.addEventListener(p,d,m),()=>f.removeEventListener(p,d,m)),c=ge(()=>[Ko(t),uh(r)],([f,p])=>{i(),f&&o.push(...n.flatMap(d=>s.map(m=>l(f,d,m,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return fh(u),u}function n3(e,t=!1){const n=q(),s=()=>n.value=!!e();return s(),e3(s,t),n}const Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ku="__vueuse_ssr_handlers__";Uu[Ku]=Uu[Ku]||{};function s3(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:o=.1,window:i=ph}=n,l=n3(()=>i&&"IntersectionObserver"in i);let c=wo;const u=l.value?ge(()=>({el:Ko(e),root:Ko(s)}),({el:p,root:d})=>{if(c(),!p)return;const m=new IntersectionObserver(t,{root:d,rootMargin:r,threshold:o});m.observe(p),c=()=>{m.disconnect(),c=wo}},{immediate:!0,flush:"post"}):wo,f=()=>{c(),u()};return fh(f),{isSupported:l,stop:f}}var Yu;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Yu||(Yu={}));var r3=Object.defineProperty,Gu=Object.getOwnPropertySymbols,o3=Object.prototype.hasOwnProperty,i3=Object.prototype.propertyIsEnumerable,Zu=(e,t,n)=>t in e?r3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a3=(e,t)=>{for(var n in t||(t={}))o3.call(t,n)&&Zu(e,n,t[n]);if(Gu)for(var n of Gu(t))i3.call(t,n)&&Zu(e,n,t[n]);return e};const l3={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};a3({linear:XO},l3);const dh=1/60*1e3,c3=typeof performance<"u"?()=>performance.now():()=>Date.now(),hh=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(c3()),dh);function u3(e){let t=[],n=[],s=0,r=!1,o=!1;const i=new WeakSet,l={schedule:(c,u=!1,f=!1)=>{const p=f&&r,d=p?t:n;return u&&i.add(c),d.indexOf(c)===-1&&(d.push(c),p&&r&&(s=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),i.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const f=t[u];f(c),i.has(f)&&(l.schedule(f),e())}r=!1,o&&(o=!1,l.process(c))}};return l}const f3=40;let za=!0,Nr=!1,Ua=!1;const Rs={delta:0,timestamp:0},Wr=["read","update","preRender","render","postRender"],vi=Wr.reduce((e,t)=>(e[t]=u3(()=>Nr=!0),e),{}),Ka=Wr.reduce((e,t)=>{const n=vi[t];return e[t]=(s,r=!1,o=!1)=>(Nr||h3(),n.schedule(s,r,o)),e},{}),p3=Wr.reduce((e,t)=>(e[t]=vi[t].cancel,e),{});Wr.reduce((e,t)=>(e[t]=()=>vi[t].process(Rs),e),{});const d3=e=>vi[e].process(Rs),mh=e=>{Nr=!1,Rs.delta=za?dh:Math.max(Math.min(e-Rs.timestamp,f3),1),Rs.timestamp=e,Ua=!0,Wr.forEach(d3),Ua=!1,Nr&&(za=!1,hh(mh))},h3=()=>{Nr=!0,za=!0,Ua||hh(mh)},gh=()=>Rs;function _h(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}var Hl=function(){},Fr=function(){};Hl=function(e,t){!e&&typeof console<"u"&&console.warn(t)},Fr=function(e,t){if(!e)throw new Error(t)};const Ya=(e,t,n)=>Math.min(Math.max(n,e),t),zi=.001,m3=.01,Ju=10,g3=.05,_3=1;function v3({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,o;Hl(e<=Ju*1e3,"Spring duration must be 10 seconds or less");let i=1-t;i=Ya(g3,_3,i),e=Ya(m3,Ju,e/1e3),i<1?(r=u=>{const f=u*i,p=f*e,d=f-n,m=Ga(u,i),g=Math.exp(-p);return zi-d/m*g},o=u=>{const p=u*i*e,d=p*n+n,m=Math.pow(i,2)*Math.pow(u,2)*e,g=Math.exp(-p),b=Ga(Math.pow(u,2),i);return(-r(u)+zi>0?-1:1)*((d-m)*g)/b}):(r=u=>{const f=Math.exp(-u*e),p=(u-n)*e+1;return-zi+f*p},o=u=>{const f=Math.exp(-u*e),p=(n-u)*(e*e);return f*p});const l=5/e,c=b3(r,o,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*s;return{stiffness:u,damping:i*2*Math.sqrt(s*u),duration:e}}}const y3=12;function b3(e,t,n){let s=n;for(let r=1;r<y3;r++)s=s-e(s)/t(s);return s}function Ga(e,t){return e*Math.sqrt(1-t*t)}const w3=["duration","bounce"],k3=["stiffness","damping","mass"];function Qu(e,t){return t.some(n=>e[n]!==void 0)}function x3(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Qu(e,k3)&&Qu(e,w3)){const n=v3(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Vl(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:r}=e,o=_h(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:f,duration:p,isResolvedFromDuration:d}=x3(o),m=Xu,g=Xu;function b(){const w=f?-(f/1e3):0,k=n-t,x=c/(2*Math.sqrt(l*u)),v=Math.sqrt(l/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),x<1){const T=Ga(v,x);m=S=>{const C=Math.exp(-x*v*S);return n-C*((w+x*v*k)/T*Math.sin(T*S)+k*Math.cos(T*S))},g=S=>{const C=Math.exp(-x*v*S);return x*v*C*(Math.sin(T*S)*(w+x*v*k)/T+k*Math.cos(T*S))-C*(Math.cos(T*S)*(w+x*v*k)-T*k*Math.sin(T*S))}}else if(x===1)m=T=>n-Math.exp(-v*T)*(k+(w+v*k)*T);else{const T=v*Math.sqrt(x*x-1);m=S=>{const C=Math.exp(-x*v*S),R=Math.min(T*S,300);return n-C*((w+x*v*k)*Math.sinh(R)+T*k*Math.cosh(R))/T}}}return b(),{next:w=>{const k=m(w);if(d)i.done=w>=p;else{const x=g(w)*1e3,v=Math.abs(x)<=s,T=Math.abs(n-k)<=r;i.done=v&&T}return i.value=i.done?n:k,i},flipTarget:()=>{f=-f,[t,n]=[n,t],b()}}}Vl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Xu=e=>0,vh=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},Bl=(e,t,n)=>-n*e+n*t+e,yh=(e,t)=>n=>Math.max(Math.min(n,t),e),vr=e=>e%1?Number(e.toFixed(5)):e,jr=/(-)?([\d]*\.?[\d])+/g,Za=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,S3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function zr(e){return typeof e=="string"}const Ur={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},yr=Object.assign(Object.assign({},Ur),{transform:yh(0,1)}),uo=Object.assign(Object.assign({},Ur),{default:1}),ql=e=>({test:t=>zr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Gn=ql("deg"),br=ql("%"),ve=ql("px"),ef=Object.assign(Object.assign({},br),{parse:e=>br.parse(e)/100,transform:e=>br.transform(e*100)}),Wl=(e,t)=>n=>!!(zr(n)&&S3.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),bh=(e,t,n)=>s=>{if(!zr(s))return s;const[r,o,i,l]=s.match(jr);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(i),alpha:l!==void 0?parseFloat(l):1}},ls={test:Wl("hsl","hue"),parse:bh("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+br.transform(vr(t))+", "+br.transform(vr(n))+", "+vr(yr.transform(s))+")"},E3=yh(0,255),Ui=Object.assign(Object.assign({},Ur),{transform:e=>Math.round(E3(e))}),On={test:Wl("rgb","red"),parse:bh("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ui.transform(e)+", "+Ui.transform(t)+", "+Ui.transform(n)+", "+vr(yr.transform(s))+")"};function $3(e){let t="",n="",s="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Ja={test:Wl("#"),parse:$3,transform:On.transform},mt={test:e=>On.test(e)||Ja.test(e)||ls.test(e),parse:e=>On.test(e)?On.parse(e):ls.test(e)?ls.parse(e):Ja.parse(e),transform:e=>zr(e)?e:e.hasOwnProperty("red")?On.transform(e):ls.transform(e)},wh="${c}",kh="${n}";function T3(e){var t,n,s,r;return isNaN(e)&&zr(e)&&((n=(t=e.match(jr))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(s=e.match(Za))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function xh(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(Za);s&&(n=s.length,e=e.replace(Za,wh),t.push(...s.map(mt.parse)));const r=e.match(jr);return r&&(e=e.replace(jr,kh),t.push(...r.map(Ur.parse))),{values:t,numColors:n,tokenised:e}}function Sh(e){return xh(e).values}function Eh(e){const{values:t,numColors:n,tokenised:s}=xh(e),r=t.length;return o=>{let i=s;for(let l=0;l<r;l++)i=i.replace(l<n?wh:kh,l<n?mt.transform(o[l]):vr(o[l]));return i}}const C3=e=>typeof e=="number"?0:e;function O3(e){const t=Sh(e);return Eh(e)(t.map(C3))}const Kr={test:T3,parse:Sh,createTransformer:Eh,getAnimatableNone:O3},P3=new Set(["brightness","contrast","saturate","opacity"]);function A3(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(jr)||[];if(!s)return e;const r=n.replace(s,"");let o=P3.has(t)?1:0;return s!==n&&(o*=100),t+"("+o+r+")"}const M3=/([a-z-]*)\(.*?\)/g,Qa=Object.assign(Object.assign({},Kr),{getAnimatableNone:e=>{const t=e.match(M3);return t?t.map(A3).join(" "):e}});function Ki(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function tf({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,o=0,i=0;if(!t)r=o=i=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;r=Ki(c,l,e+1/3),o=Ki(c,l,e),i=Ki(c,l,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(i*255),alpha:s}}const I3=(e,t,n)=>{const s=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-s)+s))},L3=[Ja,On,ls],nf=e=>L3.find(t=>t.test(e)),sf=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,$h=(e,t)=>{let n=nf(e),s=nf(t);Fr(!!n,sf(e)),Fr(!!s,sf(t));let r=n.parse(e),o=s.parse(t);n===ls&&(r=tf(r),n=On),s===ls&&(o=tf(o),s=On);const i=Object.assign({},r);return l=>{for(const c in i)c!=="alpha"&&(i[c]=I3(r[c],o[c],l));return i.alpha=Bl(r.alpha,o.alpha,l),n.transform(i)}},R3=e=>typeof e=="number",N3=(e,t)=>n=>t(e(n)),Th=(...e)=>e.reduce(N3);function Ch(e,t){return R3(e)?n=>Bl(e,t,n):mt.test(e)?$h(e,t):Ph(e,t)}const Oh=(e,t)=>{const n=[...e],s=n.length,r=e.map((o,i)=>Ch(o,t[i]));return o=>{for(let i=0;i<s;i++)n[i]=r[i](o);return n}},F3=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=Ch(e[r],t[r]));return r=>{for(const o in s)n[o]=s[o](r);return n}};function rf(e){const t=Kr.parse(e),n=t.length;let s=0,r=0,o=0;for(let i=0;i<n;i++)s||typeof t[i]=="number"?s++:t[i].hue!==void 0?o++:r++;return{parsed:t,numNumbers:s,numRGB:r,numHSL:o}}const Ph=(e,t)=>{const n=Kr.createTransformer(t),s=rf(e),r=rf(t);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?Th(Oh(s.parsed,r.parsed),n):(Hl(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?t:e}`)},j3=(e,t)=>n=>Bl(e,t,n);function D3(e){if(typeof e=="number")return j3;if(typeof e=="string")return mt.test(e)?$h:Ph;if(Array.isArray(e))return Oh;if(typeof e=="object")return F3}function H3(e,t,n){const s=[],r=n||D3(e[0]),o=e.length-1;for(let i=0;i<o;i++){let l=r(e[i],e[i+1]);if(t){const c=Array.isArray(t)?t[i]:t;l=Th(c,l)}s.push(l)}return s}function V3([e,t],[n]){return s=>n(vh(e,t,s))}function B3(e,t){const n=e.length,s=n-1;return r=>{let o=0,i=!1;if(r<=e[0]?i=!0:r>=e[s]&&(o=s-1,i=!0),!i){let c=1;for(;c<n&&!(e[c]>r||c===s);c++);o=c-1}const l=vh(e[o],e[o+1],r);return t[o](l)}}function Ah(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const o=e.length;Fr(o===t.length,"Both input and output ranges must be the same length"),Fr(!s||!Array.isArray(s)||s.length===o-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=H3(t,s,r),l=o===2?V3(e,i):B3(e,i);return n?c=>l(Ya(e[0],e[o-1],c)):l}const yi=e=>t=>1-e(1-t),zl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,q3=e=>t=>Math.pow(t,e),Mh=e=>t=>t*t*((e+1)*t-e),W3=e=>{const t=Mh(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},Ih=1.525,z3=4/11,U3=8/11,K3=9/10,Lh=e=>e,Ul=q3(2),Y3=yi(Ul),Rh=zl(Ul),Nh=e=>1-Math.sin(Math.acos(e)),Fh=yi(Nh),G3=zl(Fh),Kl=Mh(Ih),Z3=yi(Kl),J3=zl(Kl),Q3=W3(Ih),X3=4356/361,eP=35442/1805,tP=16061/1805,Yo=e=>{if(e===1||e===0)return e;const t=e*e;return e<z3?7.5625*t:e<U3?9.075*t-9.9*e+3.4:e<K3?X3*t-eP*e+tP:10.8*e*e-20.52*e+10.72},nP=yi(Yo),sP=e=>e<.5?.5*(1-Yo(1-e*2)):.5*Yo(e*2-1)+.5;function rP(e,t){return e.map(()=>t||Rh).splice(0,e.length-1)}function oP(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function iP(e,t){return e.map(n=>n*t)}function ko({from:e=0,to:t=1,ease:n,offset:s,duration:r=300}){const o={done:!1,value:e},i=Array.isArray(t)?t:[e,t],l=iP(s&&s.length===i.length?s:oP(i),r);function c(){return Ah(l,i,{ease:Array.isArray(n)?n:rP(i,n)})}let u=c();return{next:f=>(o.value=u(f),o.done=f>=r,o),flipTarget:()=>{i.reverse(),u=c()}}}function aP({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:o}){const i={done:!1,value:t};let l=n*e;const c=t+l,u=o===void 0?c:o(c);return u!==c&&(l=u-t),{next:f=>{const p=-l*Math.exp(-f/s);return i.done=!(p>r||p<-r),i.value=i.done?u:u+p,i},flipTarget:()=>{}}}const of={keyframes:ko,spring:Vl,decay:aP};function lP(e){if(Array.isArray(e.to))return ko;if(of[e.type])return of[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?ko:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Vl:ko}function jh(e,t,n=0){return e-t-n}function cP(e,t,n=0,s=!0){return s?jh(t+-e,t,n):t-(e-t)+n}function uP(e,t,n,s){return s?e>=t+n:e<=-n}const fP=e=>{const t=({delta:n})=>e(n);return{start:()=>Ka.update(t,!0),stop:()=>p3.update(t)}};function Dh(e){var t,n,{from:s,autoplay:r=!0,driver:o=fP,elapsed:i=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:f,onStop:p,onComplete:d,onRepeat:m,onUpdate:g}=e,b=_h(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:w}=b,k,x=0,v=b.duration,T,S=!1,C=!0,R;const P=lP(b);!((n=(t=P).needsInterpolation)===null||n===void 0)&&n.call(t,s,w)&&(R=Ah([0,100],[s,w],{clamp:!1}),s=0,w=100);const j=P(Object.assign(Object.assign({},b),{from:s,to:w}));function ne(){x++,c==="reverse"?(C=x%2===0,i=cP(i,v,u,C)):(i=jh(i,v,u),c==="mirror"&&j.flipTarget()),S=!1,m&&m()}function le(){k.stop(),d&&d()}function W(_e){if(C||(_e=-_e),i+=_e,!S){const ye=j.next(Math.max(0,i));T=ye.value,R&&(T=R(T)),S=C?ye.done:i<=0}g==null||g(T),S&&(x===0&&(v??(v=i)),x<l?uP(i,v,u,C)&&ne():le())}function me(){f==null||f(),k=o(W),k.start()}return r&&me(),{stop:()=>{p==null||p(),k.stop()}}}function Hh(e,t){return t?e*(1e3/t):0}function pP({from:e=0,velocity:t=0,min:n,max:s,power:r=.8,timeConstant:o=750,bounceStiffness:i=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:u,driver:f,onUpdate:p,onComplete:d,onStop:m}){let g;function b(v){return n!==void 0&&v<n||s!==void 0&&v>s}function w(v){return n===void 0?s:s===void 0||Math.abs(n-v)<Math.abs(s-v)?n:s}function k(v){g==null||g.stop(),g=Dh(Object.assign(Object.assign({},v),{driver:f,onUpdate:T=>{var S;p==null||p(T),(S=v.onUpdate)===null||S===void 0||S.call(v,T)},onComplete:d,onStop:m}))}function x(v){k(Object.assign({type:"spring",stiffness:i,damping:l,restDelta:c},v))}if(b(e))x({from:e,velocity:t,to:w(e)});else{let v=r*t+e;typeof u<"u"&&(v=u(v));const T=w(v),S=T===n?-1:1;let C,R;const P=j=>{C=R,R=j,t=Hh(j-C,gh().delta),(S===1&&j>T||S===-1&&j<T)&&x({from:j,to:T,velocity:t})};k({type:"decay",from:e,velocity:t,timeConstant:o,power:r,restDelta:c,modifyTarget:u,onUpdate:b(v)?P:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Vh=(e,t)=>1-3*t+3*e,Bh=(e,t)=>3*t-6*e,qh=e=>3*e,Go=(e,t,n)=>((Vh(t,n)*e+Bh(t,n))*e+qh(t))*e,Wh=(e,t,n)=>3*Vh(t,n)*e*e+2*Bh(t,n)*e+qh(t),dP=1e-7,hP=10;function mP(e,t,n,s,r){let o,i,l=0;do i=t+(n-t)/2,o=Go(i,s,r)-e,o>0?n=i:t=i;while(Math.abs(o)>dP&&++l<hP);return i}const gP=8,_P=.001;function vP(e,t,n,s){for(let r=0;r<gP;++r){const o=Wh(t,n,s);if(o===0)return t;const i=Go(t,n,s)-e;t-=i/o}return t}const xo=11,fo=1/(xo-1);function yP(e,t,n,s){if(e===t&&n===s)return Lh;const r=new Float32Array(xo);for(let i=0;i<xo;++i)r[i]=Go(i*fo,e,n);function o(i){let l=0,c=1;const u=xo-1;for(;c!==u&&r[c]<=i;++c)l+=fo;--c;const f=(i-r[c])/(r[c+1]-r[c]),p=l+f*fo,d=Wh(p,e,n);return d>=_P?vP(i,p,e,n):d===0?p:mP(i,l,l+fo,e,n)}return i=>i===0||i===1?i:Go(o(i),t,s)}const Yi={};class bP{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(this.subscriptions.size)for(const r of this.subscriptions)r(t,n,s)}clear(){this.subscriptions.clear()}}const af=e=>!isNaN(parseFloat(e));class wP{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new bP,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=gh();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),Ka.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Ka.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=af(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=af(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Hh(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function kP(e){return new wP(e)}const{isArray:xP}=Array;function SP(){const e=q({}),t=s=>{const r=o=>{e.value[o]&&(e.value[o].stop(),e.value[o].destroy(),delete e.value[o])};s?xP(s)?s.forEach(r):r(s):Object.keys(e.value).forEach(r)},n=(s,r,o)=>{if(e.value[s])return e.value[s];const i=kP(r);return i.onChange(l=>o[s]=l),e.value[s]=i,i};return t3(t),{motionValues:e,get:n,stop:t}}const EP=e=>Array.isArray(e),Zn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Gi=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),$P=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Zi=()=>({type:"keyframes",ease:"linear",duration:300}),TP=e=>({type:"keyframes",duration:800,values:e}),lf={default:$P,x:Zn,y:Zn,z:Zn,rotate:Zn,rotateX:Zn,rotateY:Zn,rotateZ:Zn,scaleX:Gi,scaleY:Gi,scale:Gi,backgroundColor:Zi,color:Zi,opacity:Zi},zh=(e,t)=>{let n;return EP(t)?n=TP:n=lf[e]||lf.default,{to:t,...n(t)}},cf={...Ur,transform:Math.round},Uh={color:mt,backgroundColor:mt,outlineColor:mt,fill:mt,stroke:mt,borderColor:mt,borderTopColor:mt,borderRightColor:mt,borderBottomColor:mt,borderLeftColor:mt,borderWidth:ve,borderTopWidth:ve,borderRightWidth:ve,borderBottomWidth:ve,borderLeftWidth:ve,borderRadius:ve,radius:ve,borderTopLeftRadius:ve,borderTopRightRadius:ve,borderBottomRightRadius:ve,borderBottomLeftRadius:ve,width:ve,maxWidth:ve,height:ve,maxHeight:ve,size:ve,top:ve,right:ve,bottom:ve,left:ve,padding:ve,paddingTop:ve,paddingRight:ve,paddingBottom:ve,paddingLeft:ve,margin:ve,marginTop:ve,marginRight:ve,marginBottom:ve,marginLeft:ve,rotate:Gn,rotateX:Gn,rotateY:Gn,rotateZ:Gn,scale:uo,scaleX:uo,scaleY:uo,scaleZ:uo,skew:Gn,skewX:Gn,skewY:Gn,distance:ve,translateX:ve,translateY:ve,translateZ:ve,x:ve,y:ve,z:ve,perspective:ve,transformPerspective:ve,opacity:yr,originX:ef,originY:ef,originZ:ve,zIndex:cf,filter:Qa,WebkitFilter:Qa,fillOpacity:yr,strokeOpacity:yr,numOctaves:cf},Yl=e=>Uh[e],Kh=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function CP(e,t){let n=Yl(e);return n!==Qa&&(n=Kr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const OP={linear:Lh,easeIn:Ul,easeInOut:Rh,easeOut:Y3,circIn:Nh,circInOut:G3,circOut:Fh,backIn:Kl,backInOut:J3,backOut:Z3,anticipate:Q3,bounceIn:nP,bounceInOut:sP,bounceOut:Yo},uf=e=>{if(Array.isArray(e)){const[t,n,s,r]=e;return yP(t,n,s,r)}else if(typeof e=="string")return OP[e];return e},PP=e=>Array.isArray(e)&&typeof e[0]!="number",ff=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Kr.test(t)&&!t.startsWith("url("));function AP(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function MP({ease:e,times:t,delay:n,...s}){const r={...s};return t&&(r.offset=t),e&&(r.ease=PP(e)?e.map(uf):uf(e)),n&&(r.elapsed=-n),r}function IP(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),AP(t),LP(e)||(e={...e,...zh(n,t.to)}),{...t,...MP(e)}}function LP({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:r,...o}){return!!Object.keys(o).length}function RP(e,t){return e[t]||e.default||e}function NP(e,t,n,s,r){const o=RP(s,e);let i=o.from===null||o.from===void 0?t.get():o.from;const l=ff(e,n);i==="none"&&l&&typeof n=="string"&&(i=CP(e,n));const c=ff(e,i);function u(p){const d={from:i,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return o.type==="inertia"||o.type==="decay"?pP({...d,...o}):Dh({...IP(o,d,e),onUpdate:m=>{d.onUpdate(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),p&&p()}})}function f(p){return t.set(n),s.onComplete&&s.onComplete(),r&&r(),p&&p(),{stop:()=>{}}}return!c||!l||o.type===!1?f:u}function FP(){const{motionValues:e,stop:t,get:n}=SP();return{motionValues:e,stop:t,push:(r,o,i,l={},c)=>{const u=i[r],f=n(r,u,i);if(l&&l.immediate){f.set(o);return}const p=NP(r,f,o,l,c);f.start(p)}}}function jP(e,t={},{motionValues:n,push:s,stop:r}=FP()){const o=M(t),i=q(!1);ge(n,p=>{i.value=Object.values(p).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const l=p=>{if(!o||!o[p])throw new Error(`The variant ${p} does not exist.`);return o[p]},c=p=>(typeof p=="string"&&(p=l(p)),Promise.all(Object.entries(p).map(([d,m])=>{if(d!=="transition")return new Promise(g=>s(d,m,e,p.transition||zh(d,p[d]),g))}).filter(Boolean)));return{isAnimating:i,apply:c,set:p=>{const d=Wa(p)?p:l(p);Object.entries(d).forEach(([m,g])=>{m!=="transition"&&s(m,g,e,{immediate:!0})})},leave:async p=>{let d;if(o&&(o.leave&&(d=o.leave),!o.leave&&o.initial&&(d=o.initial)),!d){p();return}await c(d),p()},stop:r}}const Gl=typeof window<"u",DP=()=>Gl&&window.onpointerdown===null,HP=()=>Gl&&window.ontouchstart===null,VP=()=>Gl&&window.onmousedown===null;function BP({target:e,state:t,variants:n,apply:s}){const r=M(n),o=q(!1),i=q(!1),l=q(!1),c=A(()=>{let f=[];return r&&(r.hovered&&(f=[...f,...Object.keys(r.hovered)]),r.tapped&&(f=[...f,...Object.keys(r.tapped)]),r.focused&&(f=[...f,...Object.keys(r.focused)])),f}),u=A(()=>{const f={};Object.assign(f,t.value),o.value&&r.hovered&&Object.assign(f,r.hovered),i.value&&r.tapped&&Object.assign(f,r.tapped),l.value&&r.focused&&Object.assign(f,r.focused);for(const p in f)c.value.includes(p)||delete f[p];return f});r.hovered&&(Ht(e,"mouseenter",()=>o.value=!0),Ht(e,"mouseleave",()=>{o.value=!1,i.value=!1}),Ht(e,"mouseout",()=>{o.value=!1,i.value=!1})),r.tapped&&(VP()&&(Ht(e,"mousedown",()=>i.value=!0),Ht(e,"mouseup",()=>i.value=!1)),DP()&&(Ht(e,"pointerdown",()=>i.value=!0),Ht(e,"pointerup",()=>i.value=!1)),HP()&&(Ht(e,"touchstart",()=>i.value=!0),Ht(e,"touchend",()=>i.value=!1))),r.focused&&(Ht(e,"focus",()=>l.value=!0),Ht(e,"blur",()=>l.value=!1)),ge(u,s)}function qP({set:e,target:t,apply:n,variants:s,variant:r}){const o=M(s);ge(()=>t,()=>{o&&(o.initial&&e("initial"),o.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function WP({state:e,apply:t}){ge(e,n=>{n&&t(n)},{immediate:!0})}function zP({target:e,variants:t,variant:n}){const s=M(t);s&&(s.visible||s.visibleOnce)&&s3(e,([{isIntersecting:r}])=>{s.visible?r?n.value="visible":n.value="initial":s.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function UP(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&qP(e),t.syncVariants&&WP(e),t.visibilityHooks&&zP(e),t.eventListeners&&BP(e)}function Yh(e={}){const t=qe({...e}),n=q({});return ge(t,()=>{const s={};for(const[r,o]of Object.entries(t)){const i=Yl(r),l=Kh(o,i);s[r]=l}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}function Zl(e,t){ge(()=>Ko(e),n=>{n&&t(n)},{immediate:!0})}const KP={x:"translateX",y:"translateY",z:"translateZ"};function Gh(e={},t=!0){const n=qe({...e}),s=q("");return ge(n,r=>{let o="",i=!1;if(t&&(r.x||r.y||r.z)){const l=[r.x||0,r.y||0,r.z||0].map(ve.transform).join(",");o+=`translate3d(${l}) `,i=!0}for(const[l,c]of Object.entries(r)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=Yl(l),f=Kh(c,u);o+=`${KP[l]||l}(${f}) `}t&&!i&&(o+="translateZ(0px) "),s.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}const YP=["","X","Y","Z"],GP=["perspective","translate","scale","rotate","skew"],Zh=["transformPerspective","x","y","z"];GP.forEach(e=>{YP.forEach(t=>{const n=e+t;Zh.push(n)})});const ZP=new Set(Zh);function Jl(e){return ZP.has(e)}const JP=new Set(["originX","originY","originZ"]);function Jh(e){return JP.has(e)}function QP(e){const t={},n={};return Object.entries(e).forEach(([s,r])=>{Jl(s)||Jh(s)?t[s]=r:n[s]=r}),{transform:t,style:n}}function Qh(e){const{transform:t,style:n}=QP(e),{transform:s}=Gh(t),{style:r}=Yh(n);return s.value&&(r.value.transform=s.value),r.value}function XP(e,t){let n,s;const{state:r,style:o}=Yh();return Zl(e,i=>{s=i;for(const l of Object.keys(Uh))i.style[l]===null||i.style[l]===""||Jl(l)||Jh(l)||(r[l]=i.style[l]);n&&Object.entries(n).forEach(([l,c])=>i.style[l]=c),t&&t(r)}),ge(o,i=>{if(!s){n=i;return}for(const l in i)s.style[l]=i[l]},{immediate:!0}),{style:r}}function eA(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,r)=>{if(!r)return s;const[o,i]=r.split("("),c=i.split(",").map(f=>n(f.endsWith(")")?f.replace(")",""):f.trim())),u=c.length===1?c[0]:c;return{...s,[o]:u}},{})}function tA(e,t){Object.entries(eA(t)).forEach(([n,s])=>{const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(o=>e[o]=0);return}s.forEach((o,i)=>e[r[i]]=o);return}if(s=parseFloat(s),n==="translateX"){e.x=s;return}if(n==="translateY"){e.y=s;return}if(n==="translateZ"){e.z=s;return}e[n]=s})}function nA(e,t){let n,s;const{state:r,transform:o}=Gh();return Zl(e,i=>{s=i,i.style.transform&&tA(r,i.style.transform),n&&(i.style.transform=n),t&&t(r)}),ge(o,i=>{if(!s){n=i;return}s.style.transform=i},{immediate:!0}),{transform:r}}function sA(e,t){const n=qe({}),s=i=>Object.entries(i).forEach(([l,c])=>n[l]=c),{style:r}=XP(e,s),{transform:o}=nA(e,s);return ge(n,i=>{Object.entries(i).forEach(([l,c])=>{const u=Jl(l)?o:r;u[l]&&u[l]===c||(u[l]=c)})},{immediate:!0,deep:!0}),Zl(e,()=>t&&s(t)),{motionProperties:n,style:r,transform:o}}function rA(e={}){const t=M(e),n=q();return{state:A(()=>{if(n.value)return t[n.value]}),variant:n}}function Xh(e,t={},n){const{motionProperties:s}=sA(e),{variant:r,state:o}=rA(t),i=jP(s,t),l={target:e,variant:r,variants:t,state:o,motionProperties:s,...i};return UP(l,n),l}const oA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],iA=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Wa(n.variants)&&(t.value={...t.value,...n.variants}),oA.forEach(s=>{if(s==="delay"){if(n&&n[s]&&JO(n[s])){const r=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&Wa(n[s])&&(t.value[s]=n[s])}))},Ji=e=>({created:(n,s,r)=>{const o=s.value&&typeof s.value=="string"?s.value:r.key;o&&Yi[o]&&Yi[o].stop();const i=q(e||{});typeof s.value=="object"&&(i.value=s.value),iA(r,i);const l=Xh(n,i);n.motionInstance=l,o&&(Yi[o]=l)},getSSRProps(n,s){let{initial:r}=n.value||s&&(s==null?void 0:s.props)||{};r=M(r);const o=GO((e==null?void 0:e.initial)||{},r||{});return!o||Object.keys(o).length===0?void 0:{style:Qh(o)}}}),aA={initial:{opacity:0},enter:{opacity:1}},lA={initial:{opacity:0},visible:{opacity:1}},cA={initial:{opacity:0},visibleOnce:{opacity:1}},uA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},fA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},pA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},dA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},hA={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},mA={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},gA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},_A={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},vA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},yA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},bA={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},wA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},kA={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},xA={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},SA={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},EA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},$A={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},TA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},CA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},OA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},PA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},AA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},MA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},IA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},LA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},RA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},NA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Xa={__proto__:null,fade:aA,fadeVisible:lA,fadeVisibleOnce:cA,pop:uA,popVisible:fA,popVisibleOnce:pA,rollBottom:kA,rollLeft:dA,rollRight:gA,rollTop:yA,rollVisibleBottom:xA,rollVisibleLeft:hA,rollVisibleOnceBottom:SA,rollVisibleOnceLeft:mA,rollVisibleOnceRight:vA,rollVisibleOnceTop:wA,rollVisibleRight:_A,rollVisibleTop:bA,slideBottom:LA,slideLeft:EA,slideRight:CA,slideTop:AA,slideVisibleBottom:RA,slideVisibleLeft:$A,slideVisibleOnceBottom:NA,slideVisibleOnceLeft:TA,slideVisibleOnceRight:PA,slideVisibleOnceTop:IA,slideVisibleRight:OA,slideVisibleTop:MA},FA=Oe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=Qg(),n=qe({});if(!e.is&&!t.default)return()=>Et("div",{});const s=A(()=>{let c;return e.preset&&(c=Xa[e.preset]),c}),r=A(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),o=A(()=>{const c={...r.value,...s.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),i=A(()=>{if(!e.is)return;let c=e.is;return typeof i.value=="string"&&!Pf(c)&&(c=Lo(c)),c});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var f;(f=u.variants)!=null&&f.initial&&u.set("initial"),setTimeout(()=>{var p,d,m;(p=u.variants)!=null&&p.enter&&u.apply("enter"),(d=u.variants)!=null&&d.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};ci(()=>Object.entries(n).forEach(([u,f])=>c(f)))}return{slots:t,component:i,motionConfig:o,instances:n}},render({slots:e,motionConfig:t,instances:n,component:s}){var l;const r=Qh(t.initial||{}),o=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:f})=>{const p=Xh(f,t);n[u]=p},c);if(s){const c=Et(s,void 0,e);return o(c,0),c}return(((l=e.default)==null?void 0:l.call(e))||[]).map((c,u)=>o(c,u))}});function jA(e){const t="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const DA={install(e,t){if(e.directive("motion",Ji()),e.component("Motion",FA),!t||t&&!t.excludePresets)for(const n in Xa){const s=Xa[n];e.directive(`motion-${jA(n)}`,Ji(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Ji(s))}}};var pf;const wr=typeof window<"u",HA=Object.prototype.toString,VA=e=>HA.call(e)==="[object Object]";wr&&((pf=window==null?void 0:window.navigator)!=null&&pf.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function BA(e){return Qo()?(ol(e),!0):!1}function qA(e){var t;const n=M(e);return(t=n==null?void 0:n.$el)!=null?t:n}const WA=wr?window:void 0,df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hf="__vueuse_ssr_handlers__";df[hf]=df[hf]||{};function zA(e,t={}){const{immediate:n=!0,window:s=WA}=t,r=q(!1);let o=null;function i(){!r.value||!s||(e(),o=s.requestAnimationFrame(i))}function l(){!r.value&&s&&(r.value=!0,i())}function c(){r.value=!1,o!=null&&s&&(s.cancelAnimationFrame(o),o=null)}return n&&l(),BA(c),{isActive:r,pause:c,resume:l}}var mf;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(mf||(mf={}));const bi="vue-starport-injection",em="vue-starport-options",UA={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},tm={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var KA=Object.defineProperty,Zo=Object.getOwnPropertySymbols,nm=Object.prototype.hasOwnProperty,sm=Object.prototype.propertyIsEnumerable,gf=(e,t,n)=>t in e?KA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,YA=(e,t)=>{for(var n in t||(t={}))nm.call(t,n)&&gf(e,n,t[n]);if(Zo)for(var n of Zo(t))sm.call(t,n)&&gf(e,n,t[n]);return e},_f=(e,t)=>{var n={};for(var s in e)nm.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Zo)for(var s of Zo(e))t.indexOf(s)<0&&sm.call(e,s)&&(n[s]=e[s]);return n};const GA=Oe({name:"StarportProxy",props:YA({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},tm),setup(e,t){const n=H(bi),s=A(()=>n.getInstance(e.port,e.component)),r=q(),o=s.value.generateId(),i=q(!1);return s.value.isVisible||(s.value.land(),i.value=!0),bn(async()=>{if(s.value.el){console.error(`[Vue Starport] Multiple proxies of "${s.value.componentName}" with port "${e.port}" detected. The later one will be ignored.`);return}if(s.value.el=r.value,await et(),i.value=!0,s.value.rect.update(),s.value.rect.width===0||s.value.rect.height===0){const l=s.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${s.value.componentName}" (port "${e.port}") has no ${l} on initial render, have you set the size for it?`),console.warn("element:",s.value.el),console.warn("rect:",s.value.rect)}}),Br(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,i.value=!1,!s.value.options.keepAlive&&(await et(),await et(),!s.value.el&&n.dispose(s.value.port))}),ge(()=>e,async()=>{s.value.props&&await et();const l=e,{props:c}=l,u=_f(l,["props"]);s.value.props=c||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:u}=l,f=_f(l,["initialProps","mountedProps"]),p=Be(f,(i.value?u:c)||{});return Et("div",Be(p,{id:o,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?Et(t.slots.default):void 0)}}});var ZA=Object.defineProperty,JA=Object.defineProperties,QA=Object.getOwnPropertyDescriptors,vf=Object.getOwnPropertySymbols,XA=Object.prototype.hasOwnProperty,e4=Object.prototype.propertyIsEnumerable,yf=(e,t,n)=>t in e?ZA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t4=(e,t)=>{for(var n in t||(t={}))XA.call(t,n)&&yf(e,n,t[n]);if(vf)for(var n of vf(t))e4.call(t,n)&&yf(e,n,t[n]);return e},n4=(e,t)=>JA(e,QA(t));const s4=Oe({name:"Starport",inheritAttrs:!0,props:tm,setup(e,t){const n=q(!1);return bn(()=>{if(n.value=!0,!H(bi))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,l;const s=(l=(i=t.slots).default)==null?void 0:l.call(i);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let o=r.type;return(!VA(o)||Hn(o))&&(o={render(){return s}}),Et(GA,n4(t4({},e),{key:e.port,component:si(o),props:r.props}))}}});function r4(e){const t=qe({height:0,width:0,left:0,top:0,update:s,listen:o,pause:i,margin:"0px",padding:"0px"}),n=wr?document.documentElement||document.body:void 0;function s(){if(!wr)return;const l=qA(e);if(!l)return;const{height:c,width:u,left:f,top:p}=l.getBoundingClientRect(),d=window.getComputedStyle(l),m=d.margin,g=d.padding;Object.assign(t,{height:c,width:u,left:f,top:n.scrollTop+p,margin:m,padding:g})}const r=zA(s,{immediate:!1});function o(){wr&&(s(),r.resume())}function i(){r.pause()}return t}let o4=(e,t=21)=>(n=t)=>{let s="",r=n;for(;r--;)s+=e[Math.random()*e.length|0];return s};const bf=o4("abcdefghijklmnopqrstuvwxyz",5);function wf(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function i4(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var a4=Object.defineProperty,kf=Object.getOwnPropertySymbols,l4=Object.prototype.hasOwnProperty,c4=Object.prototype.propertyIsEnumerable,xf=(e,t,n)=>t in e?a4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qi=(e,t)=>{for(var n in t||(t={}))l4.call(t,n)&&xf(e,n,t[n]);if(kf)for(var n of kf(t))c4.call(t,n)&&xf(e,n,t[n]);return e};function u4(e,t,n={}){const s=i4(t),r=wf(s)||bf(),o=q(),i=q(null),l=q(!1),c=q(!1),u=wm(!0),f=q({}),p=A(()=>Qi(Qi(Qi({},UA),n),f.value)),d=q(0);let m;u.run(()=>{m=r4(o),ge(o,async k=>{k&&(c.value=!0),await et(),o.value||(c.value=!1)})});const g=wf(e);function b(){return`starport-${r}-${g}-${bf()}`}const w=b();return qe({el:o,id:w,port:e,props:i,rect:m,scope:u,isLanded:l,isVisible:c,options:p,liftOffTime:d,component:t,componentName:s,componentId:r,generateId:b,setLocalOptions(k={}){f.value=JSON.parse(JSON.stringify(k))},elRef(){return o},liftOff(){l.value&&(l.value=!1,d.value=Date.now(),m.listen())},land(){l.value||(l.value=!0,m.pause())}})}function f4(e){const t=qe(new Map);function n(r,o){let i=t.get(r);return i||(i=u4(r,o,e),t.set(r,i)),i.component=o,i}function s(r){var o;(o=t.get(r))==null||o.scope.stop(),t.delete(r)}return{portMap:t,dispose:s,getInstance:n}}var p4=Object.defineProperty,d4=Object.defineProperties,h4=Object.getOwnPropertyDescriptors,Sf=Object.getOwnPropertySymbols,m4=Object.prototype.hasOwnProperty,g4=Object.prototype.propertyIsEnumerable,Ef=(e,t,n)=>t in e?p4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_4=(e,t)=>{for(var n in t||(t={}))m4.call(t,n)&&Ef(e,n,t[n]);if(Sf)for(var n of Sf(t))g4.call(t,n)&&Ef(e,n,t[n]);return e},v4=(e,t)=>d4(e,h4(t));const y4=Oe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=H(bi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=A(()=>t.getInstance(e.port,e.component)),s=A(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),r=A(()=>{const i=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-i),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?v4(_4({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),o={onTransitionend(i){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const i=!!(n.value.isLanded&&n.value.el);return Et("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Et($_,{to:i?`#${s.value}`:"body",disabled:!i},Et(n.value.component,Be(o,n.value.props))))}}}),b4=Oe({name:"StarportCarrier",setup(e,{slots:t}){const n=f4(H(em,{}));return yt().appContext.app.provide(bi,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([o,{component:i}])=>Et(y4,{key:o,port:o,component:i}))]}}});function w4(e={}){return{install(t){t.provide(em,e),t.component("Starport",s4),t.component("StarportCarrier",b4)}}}function k4(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(DA),e.app.use(w4({keepAlive:!0}))}function bt(e,t,n){var s;return((s=e.instance)==null?void 0:s.$).provides[t]??n}function x4(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var f,p,d,m,g,b;if(_r.value||(f=bt(n,dr))!=null&&f.value)return;const s=bt(n,ns),r=bt(n,pr),o=bt(n,ba),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((p=s==null?void 0:s.value)==null?void 0:p.length)||0,u=l?wy:Mi;if(s&&!((d=s==null?void 0:s.value)!=null&&d.includes(t))&&s.value.push(t),n.value==null&&(n.value=(m=s==null?void 0:s.value)==null?void 0:m.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((g=s==null?void 0:s.value)==null?void 0:g.length)||0)+Number(n.value)),!(o!=null&&o.value.has(n.value)))o==null||o.value.set(n.value,[t]);else if(!((b=o==null?void 0:o.value.get(n.value))!=null&&b.includes(t))){const w=(o==null?void 0:o.value.get(n.value))||[];o==null||o.value.set(n.value,[t].concat(w))}t==null||t.classList.toggle(Qn,!0),r&&ge(r,()=>{const w=(r==null?void 0:r.value)??0,k=n.value!=null?w>=n.value:w>c;t.classList.contains(Ii)||t.classList.toggle(u,!k),i!==!1&&i!==void 0&&t.classList.toggle(u,k),t.classList.toggle(Gs,!1);const x=o==null?void 0:o.value.get(w);x==null||x.forEach((v,T)=>{v.classList.toggle(ro,!1),T===x.length-1?v.classList.toggle(Gs,!0):v.classList.toggle(ro,!0)}),t.classList.contains(Gs)||t.classList.toggle(ro,k)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Qn,!1);const s=bt(n,ns);s!=null&&s.value&&wa(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c,u;if(_r.value||(l=bt(n,dr))!=null&&l.value)return;const s=bt(n,ns),r=bt(n,pr),o=bt(n,ba),i=s==null?void 0:s.value.length;n.value==null&&(n.value=s==null?void 0:s.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=s==null?void 0:s.value)==null?void 0:c.length)||0)+Number(n.value)),o!=null&&o.value.has(n.value)?(u=o==null?void 0:o.value.get(n.value))==null||u.push(t):o==null||o.value.set(n.value,[t]),t==null||t.classList.toggle(Qn,!0),r&&ge(r,()=>{const f=(r.value??0)>=(n.value??i??0);t.classList.contains(Ii)||t.classList.toggle(Mi,!f),t.classList.toggle(Gs,!1),t.classList.contains(Gs)||t.classList.toggle(ro,f)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Qn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,l,c;if(_r.value||(i=bt(n,dr))!=null&&i.value)return;const s=bt(n,ns),r=bt(n,pr),o=((l=s==null?void 0:s.value)==null?void 0:l.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(Qn,!0),r&&ge(r,()=>{const u=(r==null?void 0:r.value)??0,f=n.value!=null?u>=n.value:u>o;t.classList.toggle(Mi,f),t.classList.toggle(Ii,f)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Qn,!1);const s=bt(n,ns);s!=null&&s.value&&wa(s.value,t)}})}}}function S4(e,t){const n=sh(e),s=rh(t,n.currentRoute,n.currentPage);return{nav:{...n,...s},configs:$e,themeConfigs:A(()=>$e.themeConfig)}}function E4(){return{install(e){const t=S4(Ft,Lt);e.provide(Z,qe(t))}}}const qs=Sv(KO);qs.use(vt);qs.use(vy());qs.use(x4());qs.use(E4());k4({app:qs,router:vt});qs.mount("#app");export{N2 as $,e2 as A,q as B,A4 as C,ut as D,We as E,Ce as F,bw as G,HO as H,Lt as I,Uo as J,RO as K,qi as L,bn as M,qe as N,O4 as O,M4 as P,ge as Q,U as R,Fd as S,Te as T,ct as U,Iw as V,$4 as W,T4 as X,Ar as Y,Di as Z,J as _,Z as a,Ml as a0,Il as a1,ze as a2,A2 as a3,Lk as a4,C4 as a5,Nt as a6,nr as a7,as as a8,en as a9,Ma as aa,aw as ab,lw as ac,cw as ad,fw as ae,fp as af,Vp as ag,I4 as ah,dt as ai,co as aj,mx as ak,Qp as al,pw as am,Br as an,Jp as b,$e as c,Oe as d,ig as e,te as f,a as g,M as h,H as i,Ke as j,AO as k,h as l,Q as m,Qe as n,E as o,we as p,$l as q,Hs as r,Kt as s,sn as t,P4 as u,A as v,Li as w,z as x,Od as y,o2 as z};
