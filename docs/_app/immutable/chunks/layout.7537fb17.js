import{S as H,i as J,s as M,k as y,a as T,q as x,l as N,m as E,h as d,c as w,r as Z,n as p,G as D,b as L,D as k,H as j,u as ee,g as v,v as P,d as $,f as V,I as te,O as S,e as q,T as O,y as U,z as W,A as X,B as z,J as le,K as ne,L as se,M as re,N as oe,E as ie}from"./index.2a7a30eb.js";import{p as ae}from"./stores.1cadbe89.js";import{t as ue,a as ce,b as fe}from"./common.e1899131.js";import{w as he}from"./index.3f1c4703.js";const C=[{title:"Experiment",sub:[{title:"画图",url:"/note/graph-experiment"},{title:"WebGL 样例",url:"/note/webgl-experiment"}],url:""},{title:"Number Theory",sub:[{title:"Chinese Remainder Theorem (CRT)",url:"/note/chinese-remainder-theorem"},{title:"Dirichlet convolution",url:"/note/dirichlet-convolution"},{title:"Euler's Totient Function",url:"/note/eulers-totient-function"},{title:"Mobius Function",url:"/note/mobius-function"}],url:""},{title:"Numerical Analysis",sub:[{title:"Chebyshev Polynomial",url:"/note/chebyshev-polynomial"},{title:"Numeric Differentiation",url:"/note/numerical-differentiation"},{title:"Numeric Integration",url:"/note/numerical-integration"}],url:""}];let Q=he("");function me(o,t,n){ue.set("笔记 - "+o),ce.set(!1),fe.set(t),Q.set(t+"/"+n)}function _e(o){for(let t of C)for(let n of t.sub)if(n.url===o)return n.title;return""}function B(o,t,n){const e=o.slice();return e[7]=t[n],e}function R(o){let t,n,e=o[0].sub,s=[];for(let r=0;r<e.length;r+=1)s[r]=A(B(o,e,r));const c=r=>$(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();t=q()},l(r){for(let u=0;u<s.length;u+=1)s[u].l(r);t=q()},m(r,u){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(r,u);L(r,t,u),n=!0},p(r,u){if(u&1){e=r[0].sub;let i;for(i=0;i<e.length;i+=1){const b=B(r,e,i);s[i]?(s[i].p(b,u),v(s[i],1)):(s[i]=A(b),s[i].c(),v(s[i],1),s[i].m(t.parentNode,t))}for(P(),i=e.length;i<s.length;i+=1)c(i);V()}},i(r){if(!n){for(let u=0;u<e.length;u+=1)v(s[u]);n=!0}},o(r){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)$(s[u]);n=!1},d(r){O(s,r),r&&d(t)}}}function A(o){let t,n;return t=new Y({props:{note:o[7]}}),{c(){U(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,s){X(t,e,s),n=!0},p(e,s){const c={};s&1&&(c.note=e[7]),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function de(o){let t,n,e,s,c,r=o[0].title+"",u,i,b,f,g,h,_=o[0].sub&&o[1]&&R(o);return{c(){t=y("div"),n=y("div"),e=y("div"),s=T(),c=y("a"),u=x(r),b=T(),_&&_.c(),this.h()},l(l){t=N(l,"DIV",{class:!0});var a=E(t);n=N(a,"DIV",{class:!0});var m=E(n);e=N(m,"DIV",{class:!0}),E(e).forEach(d),s=w(m),c=N(m,"A",{href:!0,class:!0});var I=E(c);u=Z(I,r),I.forEach(d),m.forEach(d),b=w(a),_&&_.l(a),a.forEach(d),this.h()},h(){p(e,"class","expand svelte-10uxbo6"),D(e,"expanded",o[1]),D(e,"expandable",o[0].sub),p(c,"href",i=o[0].url||"javascript:;"),p(c,"class","svelte-10uxbo6"),p(n,"class","self svelte-10uxbo6"),D(n,"active",o[2]),p(t,"class","root svelte-10uxbo6")},m(l,a){L(l,t,a),k(t,n),k(n,e),k(n,s),k(n,c),k(c,u),k(t,b),_&&_.m(t,null),f=!0,g||(h=[j(e,"click",o[4]),j(e,"keypress",o[5]),j(c,"click",o[6])],g=!0)},p(l,[a]){(!f||a&2)&&D(e,"expanded",l[1]),(!f||a&1)&&D(e,"expandable",l[0].sub),(!f||a&1)&&r!==(r=l[0].title+"")&&ee(u,r),(!f||a&1&&i!==(i=l[0].url||"javascript:;"))&&p(c,"href",i),(!f||a&4)&&D(n,"active",l[2]),l[0].sub&&l[1]?_?(_.p(l,a),a&3&&v(_,1)):(_=R(l),_.c(),v(_,1),_.m(t,null)):_&&(P(),$(_,1,1,()=>{_=null}),V())},i(l){f||(v(_),f=!0)},o(l){$(_),f=!1},d(l){l&&d(t),_&&_.d(),g=!1,te(h)}}}function pe(o,t,n){let e;S(o,Q,f=>n(3,e=f));let{note:s}=t,c=!1,r=!1;const u=()=>n(1,c=!c),i=()=>n(1,c=!c),b=()=>n(1,c=!c);return o.$$set=f=>{"note"in f&&n(0,s=f.note)},o.$$.update=()=>{if(o.$$.dirty&9){let f=g=>{if(g.url===e)return!0;if(typeof g.sub<"u"){for(let h of g.sub)if(f(h))return!0}return!1};n(1,c=f(s)),n(2,r=s.url===e)}},[s,c,r,e,u,i,b]}class Y extends H{constructor(t){super(),J(this,t,pe,de,M,{note:0})}}function F(o,t,n){const e=o.slice();return e[5]=t[n],e}function G(o){let t,n;return t=new Y({props:{note:o[5]}}),{c(){U(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,s){X(t,e,s),n=!0},p:ie,i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){$(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function ge(o){let t,n,e,s,c,r,u,i;const b=o[1].default,f=le(b,o,o[0],null);let g=C,h=[];for(let l=0;l<g.length;l+=1)h[l]=G(F(o,g,l));const _=l=>$(h[l],1,1,()=>{h[l]=null});return{c(){t=y("link"),n=y("link"),e=y("link"),s=T(),c=y("div"),f&&f.c(),r=T(),u=y("div");for(let l=0;l<h.length;l+=1)h[l].c();this.h()},l(l){const a=ne("svelte-1qv666a",document.head);t=N(a,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),n=N(a,"LINK",{rel:!0,href:!0}),e=N(a,"LINK",{rel:!0,href:!0}),a.forEach(d),s=w(l),c=N(l,"DIV",{class:!0});var m=E(c);f&&f.l(m),m.forEach(d),r=w(l),u=N(l,"DIV",{class:!0});var I=E(u);for(let K=0;K<h.length;K+=1)h[K].l(I);I.forEach(d),this.h()},h(){p(t,"rel","stylesheet"),p(t,"href","https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"),p(t,"integrity","sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"),p(t,"crossorigin","anonymous"),p(n,"rel","stylesheet"),p(n,"href","/assets/common.css"),p(e,"rel","stylesheet"),p(e,"href","https://cdn.jsdelivr.net/gh/PrismJS/prism-themes/themes/prism-ghcolors.css"),p(c,"class","md-main svelte-1n2wyel"),p(u,"class","sidebar svelte-1n2wyel")},m(l,a){k(document.head,t),k(document.head,n),k(document.head,e),L(l,s,a),L(l,c,a),f&&f.m(c,null),L(l,r,a),L(l,u,a);for(let m=0;m<h.length;m+=1)h[m]&&h[m].m(u,null);i=!0},p(l,[a]){if(f&&f.p&&(!i||a&1)&&se(f,b,l,l[0],i?oe(b,l[0],a,null):re(l[0]),null),a&0){g=C;let m;for(m=0;m<g.length;m+=1){const I=F(l,g,m);h[m]?(h[m].p(I,a),v(h[m],1)):(h[m]=G(I),h[m].c(),v(h[m],1),h[m].m(u,null))}for(P(),m=g.length;m<h.length;m+=1)_(m);V()}},i(l){if(!i){v(f,l);for(let a=0;a<g.length;a+=1)v(h[a]);i=!0}},o(l){$(f,l),h=h.filter(Boolean);for(let a=0;a<h.length;a+=1)$(h[a]);i=!1},d(l){d(t),d(n),d(e),l&&d(s),l&&d(c),f&&f.d(l),l&&d(r),l&&d(u),O(h,l)}}}function be(o,t,n){let e;S(o,ae,i=>n(2,e=i));let{$$slots:s={},$$scope:c}=t,r=e.url.pathname,u=r.lastIndexOf("/");return me(_e(r),r.substring(0,u),r.substring(u+1)),o.$$set=i=>{"$$scope"in i&&n(0,c=i.$$scope)},[c,s]}class $e extends H{constructor(t){super(),J(this,t,be,ge,M,{})}}export{$e as L};
