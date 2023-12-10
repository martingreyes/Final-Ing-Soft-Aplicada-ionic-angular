"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4882],{4882:(q,O,y)=>{y.r(O),y.d(O,{startInputShims:()=>X});var w=y(5861),l=y(1848),T=y(7946),m=y(512),R=y(3920);y(1836);const M=new WeakMap,P=(e,t,r,s=0,o=!1)=>{M.has(e)!==r&&(r?k(e,t,s,o):Z(e,t))},k=(e,t,r,s=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,s&&(n.disabled=!0),o.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${r}px,0) scale(0)`},Z=(e,t)=>{const r=M.get(e);r&&(M.delete(e),r.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",B=(e,t,r)=>{const s=e[U];s&&clearTimeout(s),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),r&&r()},120)},N=(e,t,r)=>{e.addEventListener("focusout",()=>{t&&B(t,0,r)},{once:!0})};let D=0;const p="data-ionic-skip-scroll-assist",Q=(e,t,r,s,o,n,i,a=!1)=>{const v=n&&(void 0===i||i.mode===R.a.None);let L=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?W(e,t,r,s,S.detail.keyboardHeight,v,a,u,!1):L=!0},c=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)},h=function(){var S=(0,w.Z)(function*(){t.hasAttribute(p)?t.removeAttribute(p):(W(e,t,r,s,o,v,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c,!0))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h,!0),()=>{e.removeEventListener("focusin",h,!0),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(p,"true"),e.focus())},W=function(){var e=(0,w.Z)(function*(t,r,s,o,n,i,a=!1,v=0,L=!0){if(!s&&!o)return;const u=((e,t,r,s)=>{var o;return((e,t,r,s)=>{const o=e.top,n=e.bottom,i=t.top,v=i+15,u=Math.min(t.bottom,s-r)-50-n,f=v-o,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,o-i),g=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,g)),scrollPadding:r,inputSafeY:4-(o-v)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),r,s)})(t,s||o,n,v);if(s&&Math.abs(u.scrollAmount)<4)return x(r),void(i&&null!==s&&(B(s,D),N(r,s,()=>D=0)));if(P(t,r,!0,u.inputSafeY,a),x(r),(0,m.r)(()=>t.click()),i&&s&&(D=u.scrollPadding,B(s,D)),typeof window<"u"){let f;const c=function(){var S=(0,w.Z)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),s&&(yield(0,T.c)(s,0,u.scrollAmount,u.scrollDuration)),P(t,r,!1,u.inputSafeY),x(r),i&&N(r,s,()=>D=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(s){const S=yield(0,T.g)(s);if(L&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===r.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(r,s,o,n,i,a){return e.apply(this,arguments)}}(),X=function(){var e=(0,w.Z)(function*(t,r){if(void 0===l.d)return;const s="ios"===r,o="android"===r,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",s),v=t.getBoolean("inputBlurring",s),L=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var _=(0,w.Z)(function*(d){yield new Promise(I=>(0,m.c)(d,I));const K=d.shadowRoot||d,b=K.querySelector("input")||K.querySelector("textarea"),A=(0,T.f)(d),j=A?null:d.closest("ion-footer");if(b){if(A&&a&&!f.has(d)){const I=((e,t,r)=>{if(!r||!t)return()=>{};const s=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},o=()=>P(e,t,!1),n=()=>s(!0),i=()=>s(!1);return(0,m.a)(r,"ionScrollStart",n),(0,m.a)(r,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,m.b)(r,"ionScrollStart",n),(0,m.b)(r,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,b,A);f.set(d,I)}if("date"!==b.type&&"datetime-local"!==b.type&&(A||j)&&i&&!c.has(d)){const I=Q(d,b,A,j,n,L,h,o);c.set(d,I)}}});return function(K){return _.apply(this,arguments)}}();v&&(()=>{let e=!0,t=!1;const r=document;(0,m.a)(r,"ionScrollStart",()=>{t=!0}),r.addEventListener("focusin",()=>{e=!0},!0),r.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=r.activeElement;if(!a||a.matches(C))return;const v=i.target;v!==a&&(v.matches(C)||v.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const _ of u)S(_);l.d.addEventListener("ionInputDidLoad",_=>{S(_.detail)}),l.d.addEventListener("ionInputDidUnload",_=>{(_=>{if(a){const d=f.get(_);d&&d(),f.delete(_)}if(i){const d=c.get(_);d&&d(),c.delete(_)}})(_.detail)})});return function(r,s){return e.apply(this,arguments)}}()}}]);