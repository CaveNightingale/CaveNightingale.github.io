import{S,i as W,s as X,k as b,q as N,a as E,l as k,m as w,r as P,h as p,c as I,n as c,U as A,b as j,G as m,u as B,H as C,y as K,z as L,T as Z,V,A as R,K as U,g as F,d as J,B as O,L as M}from"./index.8d365fa0.js";let g=[],Y=[];function x(s){g.push(s)}function $(s,e,t,r){g[0].status()=="hide"&&(g[1].status()=="hide"||g[1].status()=="fadeout")?g[0].run(s,e,t,r):g[0].status()=="fadeout"&&g[1].status()=="hide"?g[1].run(s,e,t,r):Y.push(()=>$(s,e,t,r))}function ee(){let s=Y.shift();s&&s()}function te(s){let e,t,r,d,a,f,i;return{c(){e=b("div"),t=b("h2"),r=N(s[0]),d=b("br"),a=E(),f=N(s[1]),this.h()},l(u){e=k(u,"DIV",{id:!0,class:!0});var l=w(e);t=k(l,"H2",{class:!0});var _=w(t);r=P(_,s[0]),_.forEach(p),d=k(l,"BR",{}),a=I(l),f=P(l,s[1]),l.forEach(p),this.h()},h(){c(t,"class","svelte-g42wb7"),c(e,"id","outer"),c(e,"class",i=A(s[2])+" svelte-g42wb7")},m(u,l){j(u,e,l),m(e,t),m(t,r),m(e,d),m(e,a),m(e,f)},p(u,[l]){l&1&&B(r,u[0]),l&2&&B(f,u[1]),l&4&&i!==(i=A(u[2])+" svelte-g42wb7")&&c(e,"class",i)},i:C,o:C,d(u){u&&p(e)}}}function se(s,e,t){let r,d,a="hide";function f(i,u="",l=2e3,_=()=>{}){if(a!="hide"){console.error("Too many popup");return}t(0,r=i),t(1,d=u),t(2,a="fadein"),setTimeout(()=>{t(2,a="show"),setTimeout(()=>{t(2,a="fadeout"),ee(),setTimeout(()=>{t(2,a="hide"),_()},400)},l)},400)}return x({run:(i,u,l,_)=>{f(i,u,l,_)},status:()=>a}),[r,d,a]}class Q extends S{constructor(e){super(),W(this,e,se,te,X,{})}}function ae(s){let e,t,r,d,a,f,i,u,l,_,q,y,T,h,v,D,G;return _=new Q({}),y=new Q({}),{c(){e=b("div"),t=b("img"),a=E(),f=b("div"),i=b("b"),u=N(s[0]),l=E(),K(_.$$.fragment),q=E(),K(y.$$.fragment),T=E(),h=b("div"),this.h()},l(n){e=k(n,"DIV",{id:!0,class:!0});var o=w(e);t=k(o,"IMG",{id:!0,alt:!0,title:!0,src:!0,class:!0}),a=I(o),f=k(o,"DIV",{id:!0,class:!0});var H=w(f);i=k(H,"B",{});var z=w(i);u=P(z,s[0]),z.forEach(p),H.forEach(p),l=I(o),L(_.$$.fragment,o),q=I(o),L(y.$$.fragment,o),o.forEach(p),T=I(n),h=k(n,"DIV",{id:!0,class:!0}),w(h).forEach(p),this.h()},h(){c(t,"id","back-button"),c(t,"alt","返回"),c(t,"title","返回"),Z(t.src,r="/assets/icon/parent.svg")||c(t,"src",r),t.hidden=d=!s[2],c(t,"class","svelte-1csx8mj"),V(t,"empty",!s[2]),c(f,"id","topbar-title"),c(f,"class","svelte-1csx8mj"),c(e,"id","topbar"),c(e,"class","svelte-1csx8mj"),c(h,"id","klpbg"),c(h,"class","svelte-1csx8mj"),V(h,"hide",!s[1])},m(n,o){j(n,e,o),m(e,t),m(e,a),m(e,f),m(f,i),m(i,u),m(e,l),R(_,e,null),m(e,q),R(y,e,null),j(n,T,o),j(n,h,o),v=!0,D||(G=[U(t,"click",s[3]),U(t,"keypress",s[3])],D=!0)},p(n,[o]){(!v||o&4&&d!==(d=!n[2]))&&(t.hidden=d),(!v||o&4)&&V(t,"empty",!n[2]),(!v||o&1)&&B(u,n[0]),(!v||o&2)&&V(h,"hide",!n[1])},i(n){v||(F(_.$$.fragment,n),F(y.$$.fragment,n),v=!0)},o(n){J(_.$$.fragment,n),J(y.$$.fragment,n),v=!1},d(n){n&&p(e),O(_),O(y),n&&p(T),n&&p(h),D=!1,M(G)}}}function ne(s,e,t){let{title:r}=e,{background:d=!1}=e,{back:a}=e;function f(){typeof a=="string"?open(a,"_self"):typeof a=="function"&&a()}return s.$$set=i=>{"title"in i&&t(0,r=i.title),"background"in i&&t(1,d=i.background),"back"in i&&t(2,a=i.back)},[r,d,a,f]}class le extends S{constructor(e){super(),W(this,e,ne,ae,X,{title:0,background:1,back:2})}}export{le as N,$ as s};
