import{S as D,i as K,s as L,I as M,k as p,q as y,a as N,l as h,m as b,r as k,h as _,c as T,n as q,b as g,E as f,K as V,L as j,M as w,g as z,d as B}from"./index.488f1ee5.js";import"./State.8d241e02.js";function F(i){let t;return{c(){t=y("of Time Complexity")},l(e){t=k(e,"of Time Complexity")},m(e,o){g(e,t,o)},d(e){e&&_(t)}}}function G(i){let t;return{c(){t=y("of Correctness")},l(e){t=k(e,"of Correctness")},m(e,o){g(e,t,o)},d(e){e&&_(t)}}}function H(i){let t,e,o,u,r,c,d,P,m;function S(s,n){if(s[0]==="correctness")return G;if(s[0]==="time")return F}let v=S(i),a=v&&v(i);const C=i[2].default,l=M(C,i,i[1],null);return{c(){t=p("div"),e=p("i"),o=y(`Proof
		`),a&&a.c(),u=N(),r=p("span"),l&&l.c(),c=N(),d=p("span"),P=y("⯀"),this.h()},l(s){t=h(s,"DIV",{class:!0});var n=b(t);e=h(n,"I",{class:!0});var E=b(e);o=k(E,`Proof
		`),a&&a.l(E),E.forEach(_),u=T(n),r=h(n,"SPAN",{class:!0});var I=b(r);l&&l.l(I),I.forEach(_),c=T(n),d=h(n,"SPAN",{class:!0});var A=b(d);P=k(A,"⯀"),A.forEach(_),n.forEach(_),this.h()},h(){q(e,"class","svelte-16vvohq"),q(r,"class","child svelte-16vvohq"),q(d,"class","qed svelte-16vvohq"),q(t,"class","svelte-16vvohq")},m(s,n){g(s,t,n),f(t,e),f(e,o),a&&a.m(e,null),f(t,u),f(t,r),l&&l.m(r,null),f(t,c),f(t,d),f(d,P),m=!0},p(s,[n]){v!==(v=S(s))&&(a&&a.d(1),a=v&&v(s),a&&(a.c(),a.m(e,null))),l&&l.p&&(!m||n&2)&&V(l,C,s,s[1],m?w(C,s[1],n,null):j(s[1]),null)},i(s){m||(z(l,s),m=!0)},o(s){B(l,s),m=!1},d(s){s&&_(t),a&&a.d(),l&&l.d(s)}}}function J(i,t,e){let{$$slots:o={},$$scope:u}=t,{variant:r="proposition"}=t;return i.$$set=c=>{"variant"in c&&e(0,r=c.variant),"$$scope"in c&&e(1,u=c.$$scope)},[r,u,o]}class R extends D{constructor(t){super(),K(this,t,J,H,L,{variant:0})}}export{R as P};