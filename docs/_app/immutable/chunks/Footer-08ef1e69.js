import{S as m,i as p,s as g,e as f,t as y,c,a as h,h as w,d as o,b as u,g as b,J as _,M as q,j as E,n as v,F,G as k,H as M,I as x,r as I,p as C}from"./index-23bcd7f7.js";function D(r){let e,a,l,t,s;return{c(){e=f("div"),a=f("div"),l=y(r[0]),this.h()},l(n){e=c(n,"DIV",{class:!0});var i=h(e);a=c(i,"DIV",{class:!0});var d=h(a);l=w(d,r[0]),d.forEach(o),i.forEach(o),this.h()},h(){u(a,"class","inner svelte-1q30hbw"),u(e,"class","outer svelte-1q30hbw")},m(n,i){b(n,e,i),_(e,a),_(a,l),t||(s=q(e,"click",r[1]),t=!0)},p(n,[i]){i&1&&E(l,n[0])},i:v,o:v,d(n){n&&o(e),t=!1,s()}}}function O(r,e,a){let{href:l}=e,{content:t}=e;function s(){typeof l=="string"?open(l,"_self"):l()}return r.$$set=n=>{"href"in n&&a(2,l=n.href),"content"in n&&a(0,t=n.content)},[t,s,l]}class j extends m{constructor(e){super(),p(this,e,O,D,g,{href:2,content:0})}}function S(r){let e,a;const l=r[1].default,t=F(l,r,r[0],null);return{c(){e=f("footer"),t&&t.c(),this.h()},l(s){e=c(s,"FOOTER",{class:!0});var n=h(e);t&&t.l(n),n.forEach(o),this.h()},h(){u(e,"class","svelte-vofmx1")},m(s,n){b(s,e,n),t&&t.m(e,null),a=!0},p(s,[n]){t&&t.p&&(!a||n&1)&&k(t,l,s,s[0],a?x(l,s[0],n,null):M(s[0]),null)},i(s){a||(I(t,s),a=!0)},o(s){C(t,s),a=!1},d(s){s&&o(e),t&&t.d(s)}}}function V(r,e,a){let{$$slots:l={},$$scope:t}=e;return r.$$set=s=>{"$$scope"in s&&a(0,t=s.$$scope)},[t,l]}class z extends m{constructor(e){super(),p(this,e,V,S,g,{})}}export{z as F,j as M};