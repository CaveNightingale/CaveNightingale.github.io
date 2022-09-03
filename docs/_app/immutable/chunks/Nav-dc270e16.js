import{S as B,i as C,s as G,e as h,c as _,b as d,g as m,d as r,k as N,t as j,a as x,m as I,h as A,J as p,l as z,K as J,L as K,M as Y,j as F,n as V}from"./index-23bcd7f7.js";function L(u){let e;return{c(){e=h("meta"),this.h()},l(l){e=_(l,"META",{name:!0,content:!0}),this.h()},h(){d(e,"name","viewport"),d(e,"content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")},m(l,s){m(l,e,s)},d(l){l&&r(e)}}}function T(u){let e,l,s,a;return{c(){e=h("div"),l=N(),s=h("style"),a=j(`.klpbg {
			background: url(https://api.klpbbs.com/api/img/acg/) no-repeat;
			background-size: cover;
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0px;
			top: 0px;
			filter: brightness(0.75);
			z-index: -100;
		}`),this.h()},l(t){e=_(t,"DIV",{class:!0}),x(e).forEach(r),l=I(t),s=_(t,"STYLE",{});var o=x(s);a=A(o,`.klpbg {
			background: url(https://api.klpbbs.com/api/img/acg/) no-repeat;
			background-size: cover;
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0px;
			top: 0px;
			filter: brightness(0.75);
			z-index: -100;
		}`),o.forEach(r),this.h()},h(){d(e,"class","klpbg")},m(t,o){m(t,e,o),m(t,l,o),m(t,s,o),p(s,a)},d(t){t&&r(e),t&&r(l),t&&r(s)}}}function H(u){let e,l,s,a,t,o,k,n,g,y,w,v,q,D;document.title=e="\u591C\u83BA\u6D1E\u7A74 - "+u[0];let c=!u[2]&&L(),f=u[1]&&T();return{c(){c&&c.c(),l=z(),s=N(),a=h("div"),t=h("img"),k=N(),n=h("div"),g=h("b"),y=j(u[0]),w=N(),f&&f.c(),v=z(),this.h()},l(i){const b=J('[data-svelte="svelte-1bcrm9b"]',document.head);c&&c.l(b),l=z(),b.forEach(r),s=I(i),a=_(i,"DIV",{id:!0,class:!0});var E=x(a);t=_(E,"IMG",{id:!0,alt:!0,title:!0,src:!0,class:!0}),k=I(E),n=_(E,"DIV",{id:!0,class:!0});var M=x(n);g=_(M,"B",{});var S=x(g);y=A(S,u[0]),S.forEach(r),M.forEach(r),E.forEach(r),w=I(i),f&&f.l(i),v=z(),this.h()},h(){d(t,"id","back-button"),d(t,"alt","\u8FD4\u56DE"),d(t,"title","\u8FD4\u56DE"),K(t.src,o="assets/icon/parent.svg")||d(t,"src",o),d(t,"class","svelte-1fd98cf"),d(n,"id","topbar-title"),d(n,"class","svelte-1fd98cf"),d(a,"id","topbar"),d(a,"class","svelte-1fd98cf")},m(i,b){c&&c.m(document.head,null),p(document.head,l),m(i,s,b),m(i,a,b),p(a,t),p(a,k),p(a,n),p(n,g),p(g,y),m(i,w,b),f&&f.m(i,b),m(i,v,b),q||(D=Y(t,"click",u[3]),q=!0)},p(i,[b]){b&1&&e!==(e="\u591C\u83BA\u6D1E\u7A74 - "+i[0])&&(document.title=e),i[2]?c&&(c.d(1),c=null):c||(c=L(),c.c(),c.m(l.parentNode,l)),b&1&&F(y,i[0]),i[1]?f||(f=T(),f.c(),f.m(v.parentNode,v)):f&&(f.d(1),f=null)},i:V,o:V,d(i){c&&c.d(i),r(l),i&&r(s),i&&r(a),i&&r(w),f&&f.d(i),i&&r(v),q=!1,D()}}}function O(u,e,l){let{title:s}=e,{background:a=!1}=e,{parent:t="/"}=e,{scalable:o=!1}=e;function k(){open(t,"_self")}return u.$$set=n=>{"title"in n&&l(0,s=n.title),"background"in n&&l(1,a=n.background),"parent"in n&&l(4,t=n.parent),"scalable"in n&&l(2,o=n.scalable)},[s,a,o,k,t]}class Q extends B{constructor(e){super(),C(this,e,O,H,G,{title:0,background:1,parent:4,scalable:2})}}export{Q as N};
