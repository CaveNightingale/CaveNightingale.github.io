import{S as T,i as j,s as A,e as b,k as E,t as C,c as v,a as k,d as o,m as z,h as L,b as r,g as _,J as m,l as D,K as B,L as G,M as J,j as K,n as S}from"./index-23bcd7f7.js";function V(p){let i,a,n,l;return{c(){i=b("div"),a=E(),n=b("style"),l=C(`.klpbg {
			background: url(https://api.klpbbs.com/api/img/acg/) no-repeat;
			background-size: cover;
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0px;
			top: 0px;
			filter: brightness(0.75);
			z-index: -100;
		}`),this.h()},l(t){i=v(t,"DIV",{class:!0}),k(i).forEach(o),a=z(t),n=v(t,"STYLE",{});var d=k(n);l=L(d,`.klpbg {
			background: url(https://api.klpbbs.com/api/img/acg/) no-repeat;
			background-size: cover;
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0px;
			top: 0px;
			filter: brightness(0.75);
			z-index: -100;
		}`),d.forEach(o),this.h()},h(){r(i,"class","klpbg")},m(t,d){_(t,i,d),_(t,a,d),_(t,n,d),m(n,l)},d(t){t&&o(i),t&&o(a),t&&o(n)}}}function Y(p){let i,a,n,l,t,d,f,u,g,x,w,h,I,M;document.title=i="\u591C\u83BA\u6D1E\u7A74 - "+p[0];let s=p[1]&&V();return{c(){a=b("meta"),n=E(),l=b("div"),t=b("img"),f=E(),u=b("div"),g=b("b"),x=C(p[0]),w=E(),s&&s.c(),h=D(),this.h()},l(e){const c=B('[data-svelte="svelte-1uyv5ok"]',document.head);a=v(c,"META",{name:!0,content:!0}),c.forEach(o),n=z(e),l=v(e,"DIV",{id:!0,class:!0});var y=k(l);t=v(y,"IMG",{id:!0,alt:!0,title:!0,src:!0,class:!0}),f=z(y),u=v(y,"DIV",{id:!0,class:!0});var N=k(u);g=v(N,"B",{});var q=k(g);x=L(q,p[0]),q.forEach(o),N.forEach(o),y.forEach(o),w=z(e),s&&s.l(e),h=D(),this.h()},h(){r(a,"name","viewport"),r(a,"content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),r(t,"id","back-button"),r(t,"alt","\u8FD4\u56DE"),r(t,"title","\u8FD4\u56DE"),G(t.src,d="assets/icon/parent.svg")||r(t,"src",d),r(t,"class","svelte-1fd98cf"),r(u,"id","topbar-title"),r(u,"class","svelte-1fd98cf"),r(l,"id","topbar"),r(l,"class","svelte-1fd98cf")},m(e,c){m(document.head,a),_(e,n,c),_(e,l,c),m(l,t),m(l,f),m(l,u),m(u,g),m(g,x),_(e,w,c),s&&s.m(e,c),_(e,h,c),I||(M=J(t,"click",p[2]),I=!0)},p(e,[c]){c&1&&i!==(i="\u591C\u83BA\u6D1E\u7A74 - "+e[0])&&(document.title=i),c&1&&K(x,e[0]),e[1]?s||(s=V(),s.c(),s.m(h.parentNode,h)):s&&(s.d(1),s=null)},i:S,o:S,d(e){o(a),e&&o(n),e&&o(l),e&&o(w),s&&s.d(e),e&&o(h),I=!1,M()}}}function F(p,i,a){let{title:n}=i,{background:l=!1}=i,{parent:t="/"}=i;function d(){open(t,"_self")}return p.$$set=f=>{"title"in f&&a(0,n=f.title),"background"in f&&a(1,l=f.background),"parent"in f&&a(3,t=f.parent)},[n,l,d,t]}class O extends T{constructor(i){super(),j(this,i,F,Y,A,{title:0,background:1,parent:3})}}export{O as N};
