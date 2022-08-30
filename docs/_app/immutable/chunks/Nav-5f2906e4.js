import{S,i as G,s as L,F as A,e as p,c as _,a as g,d as r,b as c,g as m,G as B,H as F,I as H,r as J,p as K,k as E,t as T,m as I,h as j,J as v,l as V,K as Y,L as O,M as P,j as Q,n as q}from"./index-88fb6cf3.js";function R(o){let i,s;const l=o[1].default,e=A(l,o,o[0],null);return{c(){i=p("div"),e&&e.c(),this.h()},l(t){i=_(t,"DIV",{class:!0});var n=g(i);e&&e.l(n),n.forEach(r),this.h()},h(){c(i,"class","svelte-1akgdw4")},m(t,n){m(t,i,n),e&&e.m(i,null),s=!0},p(t,[n]){e&&e.p&&(!s||n&1)&&B(e,l,t,t[0],s?H(l,t[0],n,null):F(t[0]),null)},i(t){s||(J(e,t),s=!0)},o(t){K(e,t),s=!1},d(t){t&&r(i),e&&e.d(t)}}}function U(o,i,s){let{$$slots:l={},$$scope:e}=i;return o.$$set=t=>{"$$scope"in t&&s(0,e=t.$$scope)},[e,l]}class $ extends S{constructor(i){super(),G(this,i,U,R,L,{})}}function C(o){let i,s,l,e;return{c(){i=p("div"),s=E(),l=p("style"),e=T(`.klpbg {
			background: url(https://api.klpbbs.com/api/img/acg/) no-repeat;
			background-size: cover;
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0px;
			top: 0px;
			filter: brightness(0.75);
			z-index: -100;
		}`),this.h()},l(t){i=_(t,"DIV",{class:!0}),g(i).forEach(r),s=I(t),l=_(t,"STYLE",{});var n=g(l);e=j(n,`.klpbg {
			background: url(https://api.klpbbs.com/api/img/acg/) no-repeat;
			background-size: cover;
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0px;
			top: 0px;
			filter: brightness(0.75);
			z-index: -100;
		}`),n.forEach(r),this.h()},h(){c(i,"class","klpbg")},m(t,n){m(t,i,n),m(t,s,n),m(t,l,n),v(l,e)},d(t){t&&r(i),t&&r(s),t&&r(l)}}}function W(o){let i,s,l,e,t,n,u,b,k,w,x,h,M,z;document.title=i="\u591C\u83BA\u6D1E\u7A74 - "+o[0];let d=o[1]&&C();return{c(){s=p("meta"),l=E(),e=p("div"),t=p("img"),u=E(),b=p("div"),k=p("b"),w=T(o[0]),x=E(),d&&d.c(),h=V(),this.h()},l(a){const f=Y('[data-svelte="svelte-1uyv5ok"]',document.head);s=_(f,"META",{name:!0,content:!0}),f.forEach(r),l=I(a),e=_(a,"DIV",{id:!0,class:!0});var y=g(e);t=_(y,"IMG",{id:!0,alt:!0,title:!0,src:!0,class:!0}),u=I(y),b=_(y,"DIV",{id:!0,class:!0});var D=g(b);k=_(D,"B",{});var N=g(k);w=j(N,o[0]),N.forEach(r),D.forEach(r),y.forEach(r),x=I(a),d&&d.l(a),h=V(),this.h()},h(){c(s,"name","viewport"),c(s,"content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),c(t,"id","back-button"),c(t,"alt","\u8FD4\u56DE"),c(t,"title","\u8FD4\u56DE"),O(t.src,n="assets/icon/parent.svg")||c(t,"src",n),c(t,"class","svelte-w2ifdt"),c(b,"id","topbar-title"),c(b,"class","svelte-w2ifdt"),c(e,"id","topbar"),c(e,"class","svelte-w2ifdt")},m(a,f){v(document.head,s),m(a,l,f),m(a,e,f),v(e,t),v(e,u),v(e,b),v(b,k),v(k,w),m(a,x,f),d&&d.m(a,f),m(a,h,f),M||(z=P(t,"click",o[2]),M=!0)},p(a,[f]){f&1&&i!==(i="\u591C\u83BA\u6D1E\u7A74 - "+a[0])&&(document.title=i),f&1&&Q(w,a[0]),a[1]?d||(d=C(),d.c(),d.m(h.parentNode,h)):d&&(d.d(1),d=null)},i:q,o:q,d(a){r(s),a&&r(l),a&&r(e),a&&r(x),d&&d.d(a),a&&r(h),M=!1,z()}}}function X(o,i,s){let{title:l}=i,{background:e}=i,{parent:t="/"}=i;function n(){open(t,"_self")}return o.$$set=u=>{"title"in u&&s(0,l=u.title),"background"in u&&s(1,e=u.background),"parent"in u&&s(3,t=u.parent)},[l,e,n,t]}class tt extends S{constructor(i){super(),G(this,i,X,W,L,{title:0,background:1,parent:3})}}export{$ as M,tt as N};
